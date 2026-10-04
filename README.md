# Portfolio 3.0

Portfolio bilingüe (ES/EN) orientado a análisis funcional, UX/UI y coordinación de proyectos IT.

🔗 **https://lpedaci.github.io/portfolio/**

![HTML5](https://img.shields.io/badge/HTML5-semántico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-design_tokens-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![WCAG 2.2 AA](https://img.shields.io/badge/WCAG_2.2-AA-35C2B1)
![i18n](https://img.shields.io/badge/i18n-ES_|_EN-EC7FB0)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-estático-222222?logo=github&logoColor=white)

---

## 🧭 Enfoque UX

El sitio está diseñado para quien recluta o contrata: alguien que decide en segundos si un perfil le sirve y que necesita compartir un proyecto puntual con su equipo.

| Necesidad de quien lee | Respuesta del diseño |
|---|---|
| Entender el perfil sin leer | Titular con la propuesta de valor y una animación que resume el proceso: de la idea y los requisitos al wireframe y al producto. |
| Contactar sin buscar | LinkedIn y CV en el hero; correo, LinkedIn, GitHub y CV en contacto; LinkedIn también en el pie. |
| Encontrar lo relevante | Proyectos del más nuevo al más antiguo, con categoría, etiquetas, herramientas y resultado visibles antes de abrir. |
| Comparar a su ritmo | Vista de carrusel o de grilla, con desplazamiento automático que se puede pausar. |
| Compartir un proyecto | Cada caso tiene su propia URL y su propia tarjeta de vista previa al pegar el link. |
| Leer en su idioma | ES/EN en todo el sitio; el idioma elegido se recuerda y viaja en la URL. |

Cada caso sigue la misma estructura: ficha (rol, período, contexto, herramientas, metodologías), proceso y resultado, y cierra con un acceso al caso siguiente.

## 🎨 Sistema visual

Tema oscuro único, con el color usado para informar y no para decorar.

| Token | Valor | Significado |
|---|---|---|
| `--it` | `#35C2B1` | Proyectos de IT |
| `--cap` | `#EC7FB0` | Capacitación |
| `--cont` | `#E8B85A` | Creación de contenidos |
| `--bg` / `--surface` | `#0D0E12` / `#15171C` | Fondo y superficies |

- **Tipografía:** Schibsted Grotesk para títulos, Hanken Grotesk para lectura y JetBrains Mono para etiquetas y datos.
- **Íconos:** Phosphor, recortado a los íconos que el sitio usa.
- **Forma:** radios de 12px en tarjetas y paneles, controles en forma de pastilla.
- **Acento secundario por caso:** cada caso puede sumar un segundo color de categoría para cifras y destacados, sin saturar la paleta.

## ♿ Accesibilidad

Objetivo WCAG 2.2 AA, verificado con axe-core en todas las páginas.

- Enlace para saltar al contenido, un solo `h1` por página y jerarquía de títulos sin saltos.
- Foco visible en todos los controles y destinos táctiles de 44px.
- Contraste medido sobre los tokens; el color nunca es el único portador de información.
- Las animaciones respetan `prefers-reduced-motion`; las que se repiten tienen pausa o duran menos de 5 segundos.
- Textos alternativos descriptivos en ES y EN; los íconos decorativos quedan ocultos para lectores de pantalla.
- Los enlaces que abren otra pestaña lo anuncian, y el visor de imágenes devuelve el foco al cerrarse.
- Sin scroll horizontal desde 320px.

## ⚙️ Front-end

Sitio estático sin frameworks ni dependencias en el navegador.

- **Contenido como dato:** proyectos (`projects.js`), casos (`cases.js`) y textos de interfaz (`i18n.js`) viven separados del marcado. Cada string es un par `{ es, en }`.
- **Casos por bloques:** un renderer arma cada caso a partir de bloques tipados (cifras, fases, journey maps, personas, user flows, paletas, auditorías de contraste, tablas comparativas, galerías, embebidos y más). Sumar un tipo de evidencia es sumar un renderer, no editar páginas.
- **Orden por fechas:** cada proyecto declara su período y la grilla se ordena sola.
- **Imágenes:** dimensiones declaradas para que el layout no salte, carga diferida y ampliación en un visor dentro de la página.
- **Embebidos:** video, audio y presentaciones cargan en diferido; YouTube usa su dominio sin cookies.
- **Fuentes e íconos propios:** woff2 alojados en el sitio, sin pedidos a CDNs de tipografía, sin analítica ni rastreadores.

## 🔎 SEO y vistas previas

- Una página por caso, generada desde los datos, con título, descripción y URL canónica propios.
- `hreflang` para ES/EN, `sitemap.xml` y `robots.txt`.
- Tarjetas Open Graph de 1200 × 630 generadas a partir de una plantilla: una para la home y una por caso, con título, categoría y etiquetas.
- Versionado de archivos para que cada publicación llegue sin caché viejo.

## 🗂️ Estructura

```
├── index.html            Home: hero, proyectos, recorrido, habilidades y contacto
├── 404.html              Página de error con animación accesible
├── casos/<slug>/         Una página por caso
├── assets/
│   ├── css/              Tokens y estilos, fuentes, íconos, animación del hero
│   ├── js/               Datos (projects, cases, i18n) y renderers (main, case, nav)
│   ├── fonts/            woff2 propios
│   └── img/              Imágenes de casos y tarjetas Open Graph
└── tools/                Generación de páginas de caso, SEO, tarjetas OG, íconos y versionado
```

## 🔄 Evolución

| Versión | Cambio principal |
|---|---|
| 1.0 | Una sola página con los casos en ventanas modales. |
| 2.0 | Rediseño con design system de tokens y una URL por caso, auditado con heurísticas de Nielsen y WCAG 2.2. |
| 3.0 | Reposicionamiento hacia análisis funcional y UX/UI, tema oscuro con color por categoría y casos construidos por bloques. |

El paso de la 1.0 a la 2.0 y su auditoría están documentados como caso dentro del portfolio.
