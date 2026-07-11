# Portfolio | Lourdes Pedaci

Sitio de portfolio profesional bilingüe (EN/ES), estático, mobile-first, listo para GitHub Pages.

## Estructura

```
portfolio-lpedaci/
├── index.html              → estructura y contenido del sitio (solo HTML)
├── assets/
│   ├── css/
│   │   └── style.css       → todos los estilos
│   ├── js/
│   │   └── main.js         → toda la lógica (idioma, dialogs, filtros, lightbox)
│   └── img/                → imágenes optimizadas para web (~9 MB total)
├── .gitignore
├── .nojekyll               → evita que GitHub Pages procese el sitio con Jekyll
└── README.md
```

## Cómo publicarlo en GitHub Pages

1. Crear un repositorio nuevo en GitHub, por ejemplo `portfolio` (o `lpedaci.github.io` si querés que la URL sea la raíz).
2. Subir todo el contenido de esta carpeta a la rama `main`.
3. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. En 1 a 2 minutos el sitio queda en `https://lpedaci.github.io/portfolio/` (o `https://lpedaci.github.io/` si usaste el repo raíz).

Por línea de comandos:

```bash
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/lpedaci/portfolio.git
git push -u origin main
```

## Pendiente al publicar: og:image con URL absoluta

En el `<head>` de `index.html` hay un comentario marcado como IMPORTANTE: la meta `og:image` (la imagen de preview cuando compartís el link en LinkedIn) debe apuntar a la URL absoluta final del sitio, no a una ruta relativa. Una vez publicado, reemplazá el valor por algo como `https://lpedaci.github.io/portfolio/assets/img/og-preview.jpg`.

## Importante: permisos de los PDFs en Google Drive

Los visores de PDF embebidos (CV, guía SOP, documentación INTERSAFE, módulo de Evaluación y Gestión) usan el viewer de Drive (`/preview`). Para que funcionen para cualquier visitante, cada archivo debe estar compartido como **"Cualquier persona con el enlace → Lector"**. Si un PDF aparece con error de permiso, revisá eso primero.

## Probar el sitio localmente

Los embeds de YouTube y Google Drive verifican el origen de la página: si abrís el `index.html` con doble clic (protocolo `file://`), pueden mostrarse en negro o abrirse en otra pestaña. **No es un bug del sitio**: publicado en GitHub Pages (https) funcionan bien. Para probar localmente igual que en producción:

```bash
cd portfolio-lpedaci
python -m http.server 8080
# abrir http://localhost:8080
```

## Cómo editar contenido

- Todo el texto está duplicado en spans `class="en"` y `class="es"`. Editá siempre ambos.
- Para agregar un proyecto: duplicá una `<button class="card">` dentro de `#grid` y su `<dialog class="case">` correspondiente, actualizando el `id` y el `onclick`.
- Los embeds pesados (video, PDF, Genially, Spotify) usan carga diferida: el iframe recién se crea cuando el visitante hace clic o abre el caso. La URL va en el atributo `data-src` del `div.embed`.
- Los estilos viven en `assets/css/style.css` y la lógica en `assets/js/main.js`.

## Próximos pasos sugeridos

- Agregar la galería de proyectos de los equipos de 7mo año (7IA / 7IB) como sección propia con links a cada trabajo.
- Si querés una preview de LinkedIn más pulida, reemplazá `assets/img/og-preview.jpg` por un diseño propio de 1200x630 px (por ejemplo, hecho en Canva).
