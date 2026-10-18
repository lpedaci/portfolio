// Genera casos/<slug>/index.html para cada proyecto de assets/js/projects.js.
// Las páginas son iguales salvo el slug, el título y la descripción; el contenido
// lo dibuja assets/js/case.js a partir de cases.js. Correr: node tools/make-case-pages.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { headMeta } from './site.config.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['projects.js', 'cases.js']) vm.runInContext(readFileSync(join(root, 'assets/js', f), 'utf8'), ctx);
const { PROJECTS, CASES } = ctx.window;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Tarjeta de vista previa propia del caso (la genera tools/make-og.py); si todavía no existe, va la del sitio.
const ogImage = (p) => {
  const image = `assets/img/og/${p.slug}.jpg`;
  if (!existsSync(join(root, image))) { console.warn(`  sin tarjeta propia: ${image} (correr python tools/make-og.py)`); return {}; }
  return { image, imageAlt: `${p.title.es}: proyecto del portfolio de Lourdes Pedaci. Ícono de un gatito tecnológico.` };
};

const page = (p) => `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title.es)} | Lourdes Pedaci</title>
  <meta name="description" content="${esc(p.desc.es)}">
  <meta name="theme-color" content="#0D0E12">
${headMeta({ path: `casos/${p.slug}/`, prefix: '../../', title: `${p.title.es} | Lourdes Pedaci`, description: p.desc.es, type: 'article', ...ogImage(p) })}
  <link rel="preload" href="../../assets/fonts/hanken-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="../../assets/fonts/schibsted-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../../assets/css/fonts.css?v=202610181112">
  <link rel="stylesheet" href="../../assets/css/icons.css?v=202610181112">
  <link rel="stylesheet" href="../../assets/css/styles.css?v=202610181112">
</head>
<body data-slug="${p.slug}">
  <a class="skip" href="#main" data-i18n="skip">Ir al contenido</a>
  <header class="nav">
    <div class="wrap nav__inner">
      <a class="nav__brand" href="../../">Lourdes Pedaci</a>
      <nav aria-label="Principal">
        <ul class="nav__links" id="nav-links">
          <li><a class="is-active" aria-current="page" href="../../#proyectos" data-nav="proyectos" data-i18n="navWork">Proyectos</a></li>
          <li><a href="../../#recorrido" data-nav="recorrido" data-i18n="navPath">Recorrido</a></li>
          <li><a href="../../#contacto" data-nav="contacto" data-i18n="navContact">Contacto</a></li>
        </ul>
      </nav>
      <div class="lang" role="group" aria-label="Idioma" data-i18n-aria="langLabel">
        <button type="button" data-lang="es" aria-pressed="true">ES</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
      </div>
      <button type="button" class="nav__toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Abrir menú" data-i18n-aria="menuOpen"><i class="ph ph-list" aria-hidden="true"></i></button>
    </div>
  </header>
  <main id="main" class="case">
    <div class="wrap" id="case">
      <noscript><h1 class="case__title">${esc(p.title.es)}</h1><p class="case__sub">${esc(p.desc.es)}</p></noscript>
    </div>
  </main>
  <footer class="foot">
    <div class="wrap foot__inner">
      <div class="foot__left">
        <p class="mono">© 2026 <span data-i18n="rights">Lourdes Pedaci</span></p>
        <a class="foot__in" href="https://www.linkedin.com/in/lourdes-pedaci/" target="_blank" rel="noopener"><svg class="foot__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg><span class="sr-only">LinkedIn</span></a>
        <a class="foot__in" href="https://github.com/lpedaci" target="_blank" rel="noopener"><svg class="foot__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 2.025.825.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span class="sr-only">GitHub</span></a>
      </div>
      <a class="foot__top" href="#main"><span data-i18n="backTop">Volver arriba</span><i class="ph ph-arrow-up" aria-hidden="true"></i></a>
    </div>
  </footer>
  <script src="../../assets/js/i18n.js?v=202610181112"></script>
  <script src="../../assets/js/projects.js?v=202610181112"></script>
  <script src="../../assets/js/cases.js?v=202610181112"></script>
  <script src="../../assets/js/case.js?v=202610181112"></script>
  <script src="../../assets/js/nav.js?v=202610181112"></script>
</body>
</html>
`;

for (const p of PROJECTS) {
  if (!CASES[p.slug]) { console.warn(`sin caso: ${p.slug}`); continue; }
  const dir = join(root, 'casos', p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(p));
  console.log(`casos/${p.slug}/`);
}
