# Portfolio · Lourdes Pedaci

Sitio estático bilingüe (EN / ES) para *Learning Experience Design, UX y Datos*.
Cada proyecto tiene su propia URL, en los dos idiomas.

```
https://lpedaci.github.io/portfolio/                     home EN
https://lpedaci.github.io/portfolio/es/                  home ES
https://lpedaci.github.io/portfolio/work/intersafe/      caso EN
https://lpedaci.github.io/portfolio/es/work/intersafe/   caso ES
```

Las páginas se generan desde un único origen de contenido, así que un texto
se escribe una sola vez y sale en las 22 páginas correctas.

---

## Cómo trabajar con esto

Necesitás Node 18 o superior (solo para generar; el sitio publicado no usa Node).

```bash
npm run build
```

Eso reescribe `index.html`, `es/`, `work/`, `es/work/`, `404.html`, `sitemap.xml`
y `robots.txt`. **No edites esos archivos a mano**: se sobrescriben en cada build.

Para verlo en local:

```bash
python -m http.server 8123
```

y abrí `http://localhost:8123`.

---

## Dónde está cada cosa

```
src/
  data/site.mjs        textos globales: hero, práctica, proceso, sobre mí, contacto, links
  data/projects.mjs    los 10 casos completos, en EN y ES
  lib/layout.mjs       head, header, footer, cálculo de rutas relativas
  lib/pages.mjs        home, página de proyecto, 404
  lib/blocks.mjs       renderizadores de bloques de caso
  lib/icons.mjs        set de íconos y monograma LP
  build.mjs            escribe todo al disco

assets/
  css/site.css         sistema de diseño completo (tokens arriba de todo)
  js/site.js           filtros, menú mobile, embeds diferidos, lightbox, reveal
  img/                 imágenes de proyectos y retratos
```

Todo string visible vive como `{ en: '…', es: '…' }`. Si agregás una clave nueva,
poné los dos idiomas: si falta uno, sale vacío.

---

## Agregar o editar un proyecto

En `src/data/projects.mjs`, cada proyecto es un objeto. El orden del array es el
orden en la grilla del home, y el número (`01`, `02`, …) se calcula solo.

```js
{
  slug: 'mi-proyecto',            // define la URL: /work/mi-proyecto/
  year: '2026',
  cats: ['lxd', 'ux'],            // ids de categories en site.mjs; el primero se muestra
                                  // como etiqueta en la tarjeta y todos alimentan los filtros
  cover: 'mi-cover.jpg',          // archivo dentro de assets/img/, ver nota abajo
  coverAlt: { en: '…', es: '…' },
  title:    { en: '…', es: '…' },
  subtitle: { en: '…', es: '…' },
  summary:  { en: '…', es: '…' },  // el texto de la tarjeta y la meta description
  tags: ['Figma', 'SCORM'],
  facts: {
    role:     { en: '…', es: '…' },
    timeline: { en: '…', es: '…' },
    context:  { en: '…', es: '…' },
    stack:   ['Figma', 'iSpring'],
    methods: ['ADDIE', 'Kirkpatrick']
  },
  links: [{ label: { en: 'Live site', es: 'Sitio en vivo' }, url: 'https://…' }],
  blocks: [ /* ver abajo */ ],
  outcome: { h: { en: 'Outcomes', es: 'Resultados' }, body: { en: '…', es: '…' } }
}
```

### Bloques disponibles

| `t` | para qué sirve |
|---|---|
| `prose` | título + párrafos |
| `list` | ítems con concepto en negrita y explicación |
| `roadmap` | fases numeradas (E01, F01, M01…), en dos columnas en desktop |
| `callout` | principio o idea destacada, sobre fondo verde salvia |
| `stats` | tres o más números grandes |
| `cases` | tarjetas de casos con sus propios enlaces |
| `embed` | video, audio, documento o pieza interactiva |
| `live` | un sitio real embebido dentro de un marco de navegador |
| `gallery` | imágenes con lightbox (`wide: true` para una sola columna) |

Ejemplo de un sitio en vivo y de un video:

```js
{ t: 'live',
  h: { en: 'Unit 2, live', es: 'Unidad 2, en vivo' },
  note: { en: '…', es: '…' },
  src: 'https://lpedaci.github.io/so_unidad-02/',
  url: 'https://lpedaci.github.io/so_unidad-02/',
  label: { en: 'Unit 2 site', es: 'Sitio de la Unidad 2' } },

{ t: 'embed', kind: 'video',          // video | audio | doc | interactive
  h: { en: 'Watch', es: 'Ver' },
  src: 'https://player.vimeo.com/video/1025598739',   // URL de *embed*
  host: 'Vimeo',
  label: { en: 'Play', es: 'Reproducir' },
  open: 'https://vimeo.com/1025598739' }              // URL normal, para pestaña nueva
}
```

Ningún embed carga hasta que la persona hace clic: hasta ese momento sólo hay
un marco liviano. Eso mantiene la página rápida aunque tenga diez videos.

### Sobre las portadas

Todas las tarjetas de la grilla miden lo mismo (4:3) y la portada va **entera dentro
de un paspartú**, sin recortarse (`object-fit: contain`). Las portadas actuales van de
2,17:1 a 0,97:1: recortarlas a una sola proporción cortaba los títulos de las que son
placas con texto. Si en algún momento unificás las portadas a 4:3, podés cambiar
`contain` por `cover` en `.card__frame img` y quitar el `padding`, y quedan a sangre.

---

## Cambiar la foto del hero

Por defecto el panel terracota muestra el retrato circular recortado.

Para usar una **foto de cuerpo entero a sangre**, como en la referencia:

1. Guardá la imagen en `assets/img/hero-portrait.jpg` (vertical, mínimo 1000 px de ancho).
2. En `src/data/site.mjs` poné `heroPortrait: 'hero-portrait.jpg'`.
3. `npm run build`.

Para volver al retrato circular, dejá `heroPortrait: null`.

**Después de cualquier cambio en `src/`, corré `npm run build`.** Los HTML de la raíz
son salida generada: tocar `src/data/site.mjs` sin recompilar no cambia nada en pantalla.

Dos ajustes finos del panel a sangre, en `assets/css/site.css` bajo
`.panel[data-hero="full"]`:

- `--mat` es el ancho del marco terracota alrededor de la foto (por defecto 10–16 px).
  Es lo que mantiene el color de marca en el hero; si lo llevás a `0` la foto tapa
  el panel entero y el terracota desaparece de esa mitad de la pantalla.
- `object-position: 50% 12%` es el encuadre. Bajá el porcentaje para mostrar más
  parte de arriba, subilo para mostrar más del cuerpo.

La foto conviene guardarla como `.webp` de al menos 1400 px de ancho: el panel llega
a ~700 px en desktop y se ve al doble en pantallas retina.

---

## Sistema de diseño

Los tokens están en las primeras 55 líneas de `assets/css/site.css`. Cambiar uno
cambia el sitio entero.

| | |
|---|---|
| Papel | `#F2EEE4` fondo · `#FBF8F1` tarjetas · `#E7E0D0` bandas |
| Tinta | `#17150F` |
| Terracota | `#BE5735` (acento principal) |
| Salvia | `#6E8060` · arena `#D9C49E` |
| Titulares | Archivo, minúscula, tracking cerrado |
| Texto largo | Newsreader (serif) |
| Etiquetas y datos | JetBrains Mono |

Decisiones que conviene no romper:

- Los círculos que muerden el borde de los paneles usan un anillo del color del
  fondo (`box-shadow: 0 0 0 9px var(--bone)`), no recortes reales.
- El grano de papel es una textura SVG en el `background` del `body`, no una capa
  encima: si la ponés como overlay, rompe la composición y el rendimiento.
- Las medidas de línea (`max-width` en `ch`) van **sobre el elemento de texto**,
  nunca sobre su contenedor: `ch` se calcula con el `font-size` propio.

---

## Accesibilidad y rendimiento

- Todo el contenido es visible sin JavaScript: las animaciones de entrada sólo se
  activan cuando el navegador confirma que JS corre (clase `js` en `<html>`),
  y hay una red de seguridad que las muestra igual a los 2,5 s.
- Se respeta `prefers-reduced-motion`.
- Navegación por teclado, foco visible, salto al contenido, y `aria-current` en el
  selector de idioma.
- Imágenes con `loading="lazy"`, embeds diferidos, sin librerías externas.
- Hay hoja de estilos de impresión: los casos se imprimen legibles.

---

## Publicar

El sitio publicado es el propio repositorio: no hace falta CI.

```bash
npm run build
git add -A
git commit -m "Actualiza el portfolio"
git push
```

GitHub Pages sirve la rama configurada desde la raíz. El archivo `.nojekyll` evita
que Jekyll procese nada, y `404.html` usa URLs absolutas para verse bien desde
cualquier ruta rota.

Si algún día movés el sitio a un dominio propio, cambiá `site.domain` en
`src/data/site.mjs` y volvé a compilar: los canonical, hreflang, Open Graph y el
sitemap se actualizan solos. Los enlaces internos son relativos, así que funcionan
tanto en `/portfolio/` como en la raíz de un dominio.
