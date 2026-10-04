// Datos del sitio usados por los generadores (metadatos, sitemap, manifiesto).
// Si el sitio se publica en otra dirección, cambiar solo `url` y correr: node tools/bump-version.mjs
export const SITE = {
  url: 'https://lpedaci.github.io/portfolio/',   // siempre con / final
  name: 'Lourdes Pedaci',
  shortName: 'L. Pedaci',
  themeColor: '#0D0E12',
  locales: { es: 'es_AR', en: 'en_US' },
  title: {
    es: 'Lourdes Pedaci | Análisis funcional e IT',
    en: 'Lourdes Pedaci | Functional analysis and IT'
  },
  description: {
    es: 'De la capacitación y coordinación de proyectos al mundo IT. Relevamiento de requisitos, Scrum, UX/UI y coordinación de equipos con clientes reales.',
    en: 'From training and project coordination to the IT world. Requirements gathering, Scrum, UX/UI and coordinating teams with real clients.'
  },
  ogImage: { path: 'assets/img/og-image.jpg', width: 1200, height: 630,
    alt: 'Lourdes Pedaci: de la capacitación y coordinación de proyectos al mundo IT. Ícono de un gatito tecnológico.' }
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* Bloque de <head> con canónica, idiomas alternativos, íconos y Open Graph.
   path: ruta de la página relativa a la raíz ('' para el inicio, 'casos/x/' para un caso).
   prefix: cómo llegar a la raíz desde la página ('' o '../../').
   image / imageAlt: tarjeta de vista previa propia (ruta desde la raíz); si no se pasa, va la del sitio.
   type: 'website' para el inicio, 'article' para los casos. */
export function headMeta({ path = '', prefix = '', title, description, image = SITE.ogImage.path, imageAlt = SITE.ogImage.alt, type = 'website' }) {
  const url = SITE.url + path;
  const img = SITE.url + image;
  return [
    `<link rel="canonical" href="${url}">`,
    `<link rel="alternate" hreflang="es" href="${url}">`,
    `<link rel="alternate" hreflang="en" href="${url}?lang=en">`,
    `<link rel="alternate" hreflang="x-default" href="${url}">`,
    `<link rel="icon" href="${prefix}assets/img/favicon.svg" type="image/svg+xml">`,
    `<link rel="icon" href="${prefix}assets/img/favicon-32.png" sizes="32x32" type="image/png">`,
    `<link rel="apple-touch-icon" href="${prefix}assets/img/apple-touch-icon.png">`,
    `<link rel="manifest" href="${prefix}site.webmanifest">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="${esc(SITE.name)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:width" content="${SITE.ogImage.width}">`,
    `<meta property="og:image:height" content="${SITE.ogImage.height}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:alt" content="${esc(imageAlt)}">`,
    `<meta property="og:locale" content="${SITE.locales.es}">`,
    `<meta property="og:locale:alternate" content="${SITE.locales.en}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${img}">`,
    `<meta name="twitter:image:alt" content="${esc(imageAlt)}">`
  ].map((l) => `  ${l}`).join('\n');
}
