/* ------------------------------------------------------------------
   Renders every Open Graph card to assets/img/.

   Headless Chrome is the renderer, so the cards are drawn by the same
   engine that draws the site: one stylesheet language, no design tool
   in the loop, no hand-exported image drifting out of date.

   All the cards of one language are painted as a single tall strip and
   sliced apart afterwards. That is two browser launches per language
   instead of two per card, and it guarantees the type is measured once
   for the whole set rather than re-measured twenty-two times against
   whatever the font cache happened to hold.

     pass 1  paint the strip, 1200 x (630 * n)         -> PNG
     pass 2  slice it on a canvas and re-encode each   -> JPEG
   The second pass reads the PNG as a data URI rather than from disk, so
   the canvas is never tainted and no file-access flags are needed.

   Run with `npm run og`.
   ------------------------------------------------------------------ */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { LANGS, site } from '../data/site.mjs';
import { projects } from '../data/projects.mjs';
import {
  stripHtml, identityCardBody, projectCardBody,
  identityCardFile, projectCardFile, CARD_W, CARD_H
} from './card.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const imgDir = join(root, 'assets', 'img');

/* JPEG quality. 0.92 keeps the photography clean and lands far under the
   5 MB LinkedIn accepts, with room to spare on a slow crawler fetch. */
const QUALITY = 0.92;

/* Where Chrome usually lives on each platform. First hit wins; override
   with CHROME_PATH when it lives somewhere else. */
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  join(process.env.LOCALAPPDATA || '', 'Google/Chrome/Application/chrome.exe'),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium'
].filter(Boolean);

function findChrome() {
  const hit = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!hit) {
    throw new Error(
      'Chrome not found. Set CHROME_PATH to the browser binary and run again.\n' +
      'Looked in:\n  ' + CHROME_CANDIDATES.join('\n  ')
    );
  }
  return hit;
}

/* SVG is here because one cover is drawn rather than photographed: the design
   system card is built from the same tokens as the stylesheet, so it stays a
   vector all the way into the share card. */
const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml' };

/* Images travel into the page as data URIs so a render has no path or
   file-access dependency of its own. */
function dataUri(file) {
  const ext = extname(file).toLowerCase();
  const mime = MIME[ext];
  if (!mime) throw new Error(`Unsupported image type for the card: ${file}`);
  return `data:${mime};base64,${readFileSync(join(imgDir, file)).toString('base64')}`;
}

const flags = (budget) => [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-extensions',
  /* Fonts and the photography have to settle before the shutter fires.
     Virtual time runs the page clock forward instead of sleeping. */
  `--virtual-time-budget=${budget}`
];

const run = (chrome, args) =>
  execFileSync(chrome, args, { encoding: 'utf8', maxBuffer: 1 << 30 });

/* pass 1 -------------------------------------------------------------- */
function paintStrip(chrome, work, html, count) {
  const page = join(work, 'strip.html');
  const shot = join(work, 'strip.png');
  writeFileSync(page, html, 'utf8');
  run(chrome, [
    ...flags(15000),
    `--user-data-dir=${join(work, 'paint')}`,
    `--window-size=${CARD_W},${CARD_H * count}`,
    `--screenshot=${shot}`,
    page
  ]);
  return readFileSync(shot);
}

/* pass 2 -------------------------------------------------------------- */
function sliceToJpeg(chrome, work, png, count) {
  const page = join(work, 'slice.html');
  writeFileSync(page, `<!doctype html><meta charset="utf-8">
<img id="src" src="data:image/png;base64,${png.toString('base64')}">
<div id="out"></div>
<script>
  const img = document.getElementById('src');
  const done = () => {
    const out = document.getElementById('out');
    for (let i = 0; i < ${count}; i++) {
      const c = document.createElement('canvas');
      c.width = ${CARD_W}; c.height = ${CARD_H};
      const ctx = c.getContext('2d');
      /* Flatten onto the paper ground. A JPEG has no alpha channel, and
         an unpainted canvas would composite to black: exactly the black
         slab that broke the card this replaced. */
      ctx.fillStyle = '#F7F4EC';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, i * ${CARD_H}, ${CARD_W}, ${CARD_H},
                         0, 0, ${CARD_W}, ${CARD_H});
      const pre = document.createElement('pre');
      pre.className = 'jpg';
      pre.textContent = c.toDataURL('image/jpeg', ${QUALITY}).split(',')[1];
      out.appendChild(pre);
    }
  };
  if (img.complete) done(); else img.onload = done;
</script>`, 'utf8');

  const dom = run(chrome, [
    ...flags(20000),
    `--user-data-dir=${join(work, 'slice')}`,
    '--dump-dom',
    page
  ]);

  const parts = [...dom.matchAll(/<pre class="jpg">([A-Za-z0-9+/=]+)<\/pre>/g)]
    .map((m) => Buffer.from(m[1], 'base64'));
  if (parts.length !== count) {
    throw new Error(`Slice pass returned ${parts.length} images, expected ${count}.`);
  }
  return parts;
}

/* --------------------------------------------------------------------- */
const chrome = findChrome();
const portraitUri = dataUri(site.heroPortrait);
const work = mkdtempSync(join(tmpdir(), 'lp-og-'));
let total = 0;

try {
  for (const lang of LANGS) {
    /* The identity card leads, then the case studies in the order the
       work grid shows them. */
    const cards = [
      { file: identityCardFile(lang), body: identityCardBody(lang, portraitUri) },
      ...projects.map((p) => ({
        file: projectCardFile(p, lang),
        body: projectCardBody(lang, p, dataUri(p.cover))
      }))
    ];

    console.log(`${lang}: painting ${cards.length} cards`);
    const png = paintStrip(chrome, work, stripHtml(lang, cards.map((c) => c.body)), cards.length);
    const jpgs = sliceToJpeg(chrome, work, png, cards.length);

    cards.forEach((c, i) => {
      writeFileSync(join(imgDir, c.file), jpgs[i]);
      console.log(`  assets/img/${c.file}  ${(jpgs[i].length / 1024).toFixed(0)} KB`);
      total++;
    });
  }
  console.log(`\nDone. ${total} cards at ${CARD_W}x${CARD_H}.`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
