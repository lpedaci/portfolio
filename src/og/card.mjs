/* ------------------------------------------------------------------
   The Open Graph cards, drawn in the same language as the site.

   These are not one-off graphics: they are 1200 x 630 pages built from
   the very tokens in assets/css/site.css, rendered to flat images by
   src/og/render.mjs. Change the palette in the stylesheet, mirror it in
   the tokens below, re-run `npm run og`, and every share card follows
   the site instead of drifting away from it.

   Two kinds, one skeleton, so a link to the home page and a link to a
   case study read as the same set. Both are three bands down the left
   column with an image at the right:

     identity   mark        / name and role      / the years stat
     project    category    / title and subtitle / the signature

   Four text elements each, no more, because a LinkedIn card is read at
   about a third of this size.
   ------------------------------------------------------------------ */

import { site, categories } from '../data/site.mjs';

export const CARD_W = 1200;
export const CARD_H = 630;

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
           .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const tr = (o, lang) => (o && typeof o === 'object' ? o[lang] : o) || '';

const IDENTITY = {
  en: {
    role: 'Learning Experience Designer',
    kind: 'UX and data driven',
    stat: '+7',
    statLabel: 'years designing learning, EdTech and data',
    alt: 'Lourdes Pedaci, Learning Experience Designer working across UX and data.'
  },
  es: {
    role: 'Diseñadora de Experiencias de Aprendizaje',
    kind: 'UX y datos',
    stat: '+7',
    statLabel: 'años en diseño de aprendizaje, EdTech y datos',
    alt: 'Lourdes Pedaci, Diseñadora de Experiencias de Aprendizaje, UX y datos.'
  }
};

export const identityAlt = (lang) => IDENTITY[lang].alt;

export const projectAlt = (p, lang) =>
  lang === 'es'
    ? `${tr(p.title, 'es')}. ${tr(p.subtitle, 'es')}. Caso de estudio de ${site.name}.`
    : `${tr(p.title, 'en')}. ${tr(p.subtitle, 'en')}. A case study by ${site.name}.`;

export const identityCardFile = (lang) =>
  lang === 'en' ? 'og-card.jpg' : `og-card-${lang}.jpg`;

export const projectCardFile = (p, lang) =>
  lang === 'en' ? `og-${p.slug}.jpg` : `og-${p.slug}-${lang}.jpg`;

/* Titles run from seven characters to sixty-three. One fixed size would
   either shrink `EduLabs` to nothing or push the long ones to five lines,
   so the scale steps down as the title grows. */
function titleSize(text) {
  const n = text.length;
  if (n <= 10) return 74;
  if (n <= 20) return 62;
  if (n <= 32) return 52;
  if (n <= 44) return 44;
  return 38;
}

const catLabel = (id, lang) => {
  const c = categories.find((x) => x.id === id);
  return c ? tr(c.label, lang) : id;
};

const MONOGRAM =
  '<path d="M8 4v17a5 5 0 0 0 5 5h6.5"/><path d="M30 30V5h4.5a7 7 0 0 1 0 14H30"/>';

const mark = (cls) =>
  `<svg class="${cls}" viewBox="0 0 48 34" fill="none" stroke="currentColor" ` +
  `stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${MONOGRAM}</svg>`;

/* ------------------------------------------------------------ bodies */

export function identityCardBody(lang, portraitUri) {
  const c = IDENTITY[lang];
  const [first, ...rest] = site.name.split(' ');

  return `<div class="card card--identity">
  <div class="copy">
    ${mark('mark')}

    <div>
      <h1 class="name"><span>${esc(first)}</span><span>${esc(rest.join(' '))}</span></h1>
      <p class="role">${esc(c.role)}</p>
      <p class="meta">${esc(c.kind)}</p>
    </div>

    <div class="stat">
      <span class="stat__value">${esc(c.stat)}</span>
      <span class="stat__label">${esc(c.statLabel)}</span>
    </div>
  </div>

  <div class="portrait"><div class="portrait__crop"><img src="${portraitUri}" alt=""></div></div>
</div>`;
}

export function projectCardBody(lang, p, coverUri) {
  const title = tr(p.title, lang);
  const meta = `${catLabel(p.cats[0], lang)} · ${p.year}`;

  return `<div class="card card--project">
  <div class="copy">
    <p class="meta">${esc(meta)}</p>

    <div>
      <h1 class="title" style="font-size:${titleSize(title)}px">${esc(title)}</h1>
      <p class="sub">${esc(tr(p.subtitle, lang))}</p>
    </div>

    <div class="sign">${mark('sign__mark')}<span>${esc(site.name)}</span></div>
  </div>

  <div class="cover"><img src="${coverUri}" alt=""></div>
</div>`;
}

/* -------------------------------------------------------------- page */

/* Every card of a language is painted in one page, stacked, and sliced
   apart afterwards. One browser launch, one font load, and type that
   renders identically across the whole set. */
export function stripHtml(lang, bodies) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,700&family=JetBrains+Mono:wght@400;500&display=block">
<style>
:root{
  --bone:  #F7F4EC;
  --ink:   #17150F;
  --ink-70:#4A463A;
  --ink-45:#6F6959;
  --line:  rgba(23,21,15,.14);
  --clay:  #965E44;
  --sage:  #596959;
  --sand:  #E2BB99;
  --f-display:'Archivo','Helvetica Neue',Helvetica,Arial,sans-serif;
  --f-mono:'JetBrains Mono',ui-monospace,Consolas,monospace;
  --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.055'/%3E%3C/svg%3E");
}
*,*::before,*::after{ box-sizing: border-box; }
html,body{ margin:0; padding:0; background:var(--bone); }
body{
  width:${CARD_W}px;
  font-family:var(--f-display);
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
  font-synthesis-weight:none;
}
.card{
  width:${CARD_W}px; height:${CARD_H}px;
  background:var(--bone) var(--grain) repeat;
  display:grid; align-items:center;
  overflow:hidden;
}
.copy{ display:flex; flex-direction:column; justify-content:space-between; height:100%; min-width:0; }

/* The mono line is the one place clay speaks on these cards, exactly as
   it carries the eyebrows on the site. */
.meta{
  margin:0;
  font-family:var(--f-mono);
  font-size:13px; font-weight:500;
  letter-spacing:.16em; text-transform:uppercase;
  color:var(--clay);
}

/* ------------------------------------------------------ identity card */
.card--identity{ grid-template-columns:1fr 404px; gap:56px; padding:58px 58px 58px 74px; }
.card--identity .mark{ width:50px; height:auto; color:var(--clay); display:block; }
.name{
  margin:0;
  font-size:82px; font-weight:700;
  letter-spacing:-.048em; line-height:.9;
}
.name span{ display:block; }
.role{
  margin:26px 0 0;
  font-size:24px; font-weight:500;
  letter-spacing:-.012em; line-height:1.25;
  color:var(--ink-70);
  max-width:44ch;
}
.card--identity .meta{ margin-top:12px; }

/* The stat is the site's own, rendered the site's own way: a sage
   italic figure beside a quiet label, sitting on a hairline. */
.stat{ padding-top:22px; border-top:1px solid var(--line); display:flex; align-items:baseline; gap:16px; }
.stat__value{
  font-size:52px; font-weight:700; font-style:italic;
  letter-spacing:-.05em; line-height:.9; color:var(--sage);
}
.stat__label{ font-size:15px; line-height:1.35; color:var(--ink-45); max-width:50ch; }

.portrait{
  position:relative; align-self:stretch;
  border-radius:44px; background:var(--sand);
  --mat:14px;
}
/* The crop is a separate clipping layer, as it is on the site, so the
   portrait can be pushed past the frame without spilling over the mat. */
.portrait__crop{
  position:absolute; inset:var(--mat);
  border-radius:calc(44px - var(--mat));
  overflow:hidden;
}
/* The hero shows the whole figure because it has a full column to do it
   in. A social card is read at roughly a third of this width, so the
   frame closes in until the face carries at feed size. */
.portrait__crop img{
  width:100%; height:100%;
  object-fit:cover; object-position:50% 12%;
  transform:scale(1.34); transform-origin:50% 12%;
  display:block;
}
.portrait__crop::after{
  content:""; position:absolute; inset:0;
  background:linear-gradient(180deg,
             rgba(89,69,52,.12) 0%,
             rgba(89,69,52,0) 36%,
             rgba(89,69,52,.42) 100%);
}

/* ------------------------------------------------------- project card */
.card--project{ grid-template-columns:1fr 520px; gap:52px; padding:56px 56px 56px 72px; }
.title{
  margin:22px 0 0;
  font-weight:700; letter-spacing:-.042em; line-height:.98;
  /* font-size is set per card: the titles run from 7 to 63 characters */
}
.sub{
  margin:16px 0 0;
  font-size:18px; font-weight:400; line-height:1.45;
  color:var(--ink-70);
  max-width:34ch;
}
.sign{
  padding-top:20px; border-top:1px solid var(--line);
  display:flex; align-items:center; gap:12px;
  font-size:16px; font-weight:600; letter-spacing:-.01em;
  color:var(--ink-70);
}
.sign__mark{ width:30px; height:auto; color:var(--clay); flex:none; }

/* The covers run from 2.17:1 to square. The work grid already resolves
   that with a 5:3 frame and object-fit cover, so the card reuses the
   crop the grid has already proved reads well for every project. */
.cover{
  width:520px; aspect-ratio:5 / 3;
  border-radius:36px; background:var(--sand);
  overflow:hidden;
  /* Several covers are near-white and would otherwise dissolve into the
     bone ground. An inset hairline holds the edge without displacing the
     image the way a real border would. */
  box-shadow:inset 0 0 0 1px var(--line);
}
.cover img{ width:100%; height:100%; object-fit:cover; display:block; }
</style>
</head>
<body>
${bodies.join('\n')}
</body>
</html>`;
}
