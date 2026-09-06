import { site, ui } from '../data/site.mjs';
import { icon, monogram, favicon } from './icons.mjs';

/* --------------------------------------------------------------- helpers */
export const t = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] : obj) || '';

export const esc = (str = '') =>
  String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
             .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Every page knows how deep it sits, so links stay relative and the site
   works from any base path (GitHub Pages sub-folder, a domain root, file://). */
export const rel = (depth, path = '') => {
  const up = depth > 0 ? '../'.repeat(depth) : '';
  const out = up + path;
  return out === '' ? './' : out;
};

export const paths = {
  home:    (lang) => (lang === 'es' ? 'es/' : ''),
  project: (lang, slug) => (lang === 'es' ? `es/work/${slug}/` : `work/${slug}/`)
};

export const depthOf = { home: { en: 0, es: 1 }, project: { en: 2, es: 3 } };

const hostOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
};
export { hostOf };

/* ------------------------------------------------------------------ head */
function head({ lang, depth, title, description, canonicalPath, altPath,
                ogImage, ogWidth, ogHeight, ogAlt }) {
  const other = lang === 'en' ? 'es' : 'en';
  const url = `${site.domain}/${canonicalPath}`;
  const altUrl = `${site.domain}/${altPath}`;

  /* LinkedIn and Slack size the card slot from og:image:width/height before
     the file itself has finished downloading. Without them the crawler falls
     back to a small square thumbnail, which is what made the old preview look
     wrong. They are only emitted when the dimensions are actually known, so a
     project cover of some other shape is never described incorrectly. */
  const imgUrl = `${site.domain}/assets/img/${ogImage || 'og-card.jpg'}`;
  const dims = ogWidth && ogHeight
    ? `
<meta property="og:image:width" content="${ogWidth}">` +
      `
<meta property="og:image:height" content="${ogHeight}">`
    : '';

  return `<script>document.documentElement.className+=" js"</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${site.name}">
<meta name="theme-color" content="#F7F4EC">
<link rel="icon" href="${favicon()}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${lang}" href="${url}">
<link rel="alternate" hreflang="${other}" href="${altUrl}">
<link rel="alternate" hreflang="x-default" href="${site.domain}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="${lang === 'es' ? 'es_AR' : 'en_US'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${imgUrl}">
<meta property="og:image:secure_url" content="${imgUrl}">
<meta property="og:image:type" content="image/jpeg">${dims}
<meta property="og:image:alt" content="${esc(ogAlt || title)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${imgUrl}">
<meta name="twitter:image:alt" content="${esc(ogAlt || title)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="${rel(depth, 'assets/css/site.css')}">`;
}

/* ---------------------------------------------------------------- header */
function navItems(lang, depth) {
  const h = paths.home(lang);
  return [
    { href: rel(depth, h) + '#practice', label: t(ui.navPractice, lang), tag: '01' },
    { href: rel(depth, h) + '#work',     label: t(ui.navWork, lang),     tag: '02' },
    { href: rel(depth, h) + '#process',  label: t(ui.navProcess, lang),  tag: '03' },
    { href: rel(depth, h) + '#about',    label: t(ui.navAbout, lang),    tag: '04' },
    { href: rel(depth, h) + '#contact',  label: t(ui.navContact, lang),  tag: '05' }
  ];
}

function header({ lang, depth, enPath, esPath }) {
  const items = navItems(lang, depth);
  return `<header class="masthead">
  <div class="masthead__bar">
    <a class="brand" href="${rel(depth, paths.home(lang))}" aria-label="${site.name}">
      ${monogram('brand__mark')}
      <span class="brand__name">${site.name}<small>${esc(t(site.role, lang))}</small></span>
    </a>

    <nav class="nav" aria-label="${esc(t(ui.menu, lang))}">
      ${items.map((i) => `<a href="${i.href}">${esc(i.label)}</a>`).join('\n      ')}
    </nav>

    <div class="masthead__end">
      <span class="status"><i></i>${esc(t(ui.available, lang))}</span>
      <div class="langswap" role="group" aria-label="${esc(t(ui.langLabel, lang))}">
        <a href="${rel(depth, enPath)}" hreflang="en" aria-current="${lang === 'en'}">EN</a>
        <a href="${rel(depth, esPath)}" hreflang="es" aria-current="${lang === 'es'}">ES</a>
      </div>
      <button class="burger" type="button" aria-expanded="false" aria-controls="sheet">
        <span></span><span></span><span></span>
        <span class="sr">${esc(t(ui.menu, lang))}</span>
      </button>
    </div>
  </div>
</header>

<div class="sheet" id="sheet">
  ${items.map((i) => `<a class="sheet__link" href="${i.href}">${esc(i.label)}<em>${i.tag}</em></a>`).join('\n  ')}
  <div class="sheet__foot">
    <a class="pill pill--ink" href="${site.links.cv}" target="_blank" rel="noopener">${esc(t(ui.viewCv, lang))} ${icon.arrowUpRight}</a>
    <a class="pill" href="${site.links.linkedin}" target="_blank" rel="noopener">${icon.linkedin} LinkedIn</a>
    <a class="pill" href="${site.links.github}" target="_blank" rel="noopener">${icon.github} GitHub</a>
  </div>
</div>`;
}

/* ---------------------------------------------------------------- footer */
function footer({ lang, depth }) {
  const year = new Date().getFullYear();
  return `<footer class="foot">
  <div class="shell">
    <div class="foot__top">
      <a class="brand" href="${rel(depth, paths.home(lang))}">
        ${monogram('brand__mark')}
        <span class="brand__name">${site.name}<small>${esc(t(site.role, lang))}</small></span>
      </a>
      <div class="foot__links">
        <a class="pill" href="mailto:${site.email}">${icon.mail} ${site.email}</a>
        <a class="pill" href="${site.links.linkedin}" target="_blank" rel="noopener">${icon.linkedin} LinkedIn</a>
        <a class="pill" href="${site.links.github}" target="_blank" rel="noopener">${icon.github} GitHub</a>
        <a class="pill" href="${site.links.behance}" target="_blank" rel="noopener">${icon.behance} Behance</a>
      </div>
    </div>
    <div class="foot__base">
      <span>© ${year} ${site.name} - ${esc(t(ui.rights, lang))}</span>
      <span>${esc(t(site.location, lang))}</span>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------------ page shell */
export function page({
  lang, depth, title, description, canonicalPath, altPath,
  enPath, esPath, body, ogImage, ogWidth, ogHeight, ogAlt, jsonLd
}) {
  return `<!doctype html>
<html lang="${lang === 'es' ? 'es-AR' : 'en'}">
<head>
${head({ lang, depth, title, description, canonicalPath, altPath,
          ogImage, ogWidth, ogHeight, ogAlt })}
</head>
<body>
<a class="skip" href="#main">${esc(t(ui.skip, lang))}</a>

${header({ lang, depth, enPath, esPath })}

<main id="main">
${body}
</main>

${footer({ lang, depth })}

<dialog class="lightbox" id="lightbox" aria-label="${esc(t(ui.zoomHint, lang))}">
  <form method="dialog"><button aria-label="${esc(t(ui.close, lang))}">✕</button></form>
  <img alt="">
</dialog>
${jsonLd ? `\n<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
<script src="${rel(depth, 'assets/js/site.js')}" defer></script>
</body>
</html>
`;
}
