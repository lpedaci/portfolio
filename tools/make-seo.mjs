// Genera robots.txt, sitemap.xml y site.webmanifest, y escribe los metadatos del inicio
// (entre <!-- seo:start --> y <!-- seo:end --> en index.html). Correr: node tools/make-seo.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { SITE, headMeta } from './site.config.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, 'assets/js/projects.js'), 'utf8'), ctx);
const { PROJECTS } = ctx.window;
const today = new Date().toISOString().slice(0, 10);

// robots.txt
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}sitemap.xml\n`);

// sitemap.xml con la versión en inglés de cada página
const pages = ['', ...PROJECTS.map((p) => `casos/${p.slug}/`)];
const entry = (path) => {
  const url = SITE.url + path;
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="${url}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}"/>
  </url>`;
};
writeFileSync(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(entry).join('\n')}
</urlset>
`);

// site.webmanifest
writeFileSync(join(root, 'site.webmanifest'), JSON.stringify({
  name: SITE.name,
  short_name: SITE.shortName,
  lang: 'es',
  start_url: './',
  scope: './',
  display: 'browser',
  background_color: SITE.themeColor,
  theme_color: SITE.themeColor,
  icons: [
    { src: 'assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'assets/img/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'assets/img/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2) + '\n');

// metadatos del inicio
const index = join(root, 'index.html');
const html = readFileSync(index, 'utf8');
const block = `  <!-- seo:start (generado por tools/make-seo.mjs) -->\n${headMeta({ title: SITE.title.es, description: SITE.description.es })}\n  <!-- seo:end -->`;
if (!/<!-- seo:start[\s\S]*?<!-- seo:end -->/.test(html)) throw new Error('index.html no tiene los marcadores seo:start / seo:end');
// El <title> y la descripción del inicio también salen de site.config.mjs (una sola fuente)
const attr = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
writeFileSync(index, html
  .replace(/ *<!-- seo:start[\s\S]*?<!-- seo:end -->/, block)
  .replace(/<title>[^<]*<\/title>/, `<title>${attr(SITE.title.es)}</title>`)
  .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(SITE.description.es)}">`));
console.log(`robots.txt, sitemap.xml (${pages.length} páginas), site.webmanifest e index.html listos`);
