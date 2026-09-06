/* ------------------------------------------------------------------
   Static build. Emits every page in both languages into the repo root
   so GitHub Pages can serve it with no CI step.

     node src/build.mjs        (or: npm run build)
   ------------------------------------------------------------------ */
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, LANGS } from './data/site.mjs';
import { projects } from './data/projects.mjs';
import { paths } from './lib/layout.mjs';
import { homePage, projectPage, notFoundPage } from './lib/pages.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

let written = 0;
async function emit(relPath, contents) {
  const full = join(ROOT, relPath);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, contents, 'utf8');
  written++;
  console.log('  ·', relPath);
}

/* Remove the previous output so renamed slugs do not linger. */
async function clean() {
  for (const dir of ['work', 'es']) {
    const full = join(ROOT, dir);
    if (existsSync(full)) await rm(full, { recursive: true, force: true });
  }
}

function sitemap() {
  const urls = [];
  for (const lang of LANGS) {
    urls.push(`${site.domain}/${paths.home(lang)}`);
    for (const p of projects) urls.push(`${site.domain}/${paths.project(lang, p.slug)}`);
  }
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
}

async function build() {
  console.log('Building portfolio…');
  await clean();

  for (const lang of LANGS) {
    await emit(join(paths.home(lang), 'index.html'), homePage(lang));
    for (let i = 0; i < projects.length; i++) {
      await emit(join(paths.project(lang, projects[i].slug), 'index.html'), projectPage(projects[i], i, lang));
    }
  }

  await emit('404.html', notFoundPage('en'));
  await emit('sitemap.xml', sitemap());
  await emit('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`);
  await emit('.nojekyll', '');

  console.log(`\nDone. ${written} files, ${projects.length} projects × ${LANGS.length} languages.`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
