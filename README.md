# Portfolio 4.0

Portfolio bilingüe (ES/EN) de experience design: análisis funcional, UX/UI y coordinación de proyectos IT.

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
| Entender el perfil sin leer | Hero centrado y sin ilustración: titular con la propuesta de valor, una oración sobre de dónde vengo y otra, en su propio renglón, sobre qué busco, y el total de proyectos con su reparto por categoría. |
| Contactar sin buscar | LinkedIn y CV en el hero; correo, LinkedIn, GitHub y CV en contacto; LinkedIn también en el pie. |
| Encontrar lo relevante | Proyectos del más nuevo al más antiguo, con portada, categoría, etiquetas y resultado visibles antes de abrir. |
| Comparar a su ritmo | Vista de carrusel o de grilla, con desplazamiento automático que se puede pausar. |
| Compartir un proyecto | Cada caso tiene su propia URL y su propia tarjeta de vista previa al pegar el link. |
| Leer en su idioma | ES/EN en todo el sitio; el idioma elegido se recuerda y viaja en la URL. |

Cada caso sigue la misma estructura, con la lógica de un tablero:

- **Índice lateral:** a la izquierda, "En esta página" lista el resumen, el acceso en vivo, las fases y los apartados, y marca el que se está leyendo. En pantallas chicas pasa a ser una barra de pastillas fija debajo del menú.
- **Resumen arriba:** problema y solución lado a lado y, debajo, los resultados en una fila, con cifras grandes cuando hay un dato defendible. Así ninguna tarjeta queda estirada con espacio vacío.
- **En vivo:** si el proyecto está publicado, una tarjeta propia con el primer enlace como botón principal. Cuando es un sitio propio, suma una vista previa: la captura del sitio dentro de un marco de navegador con su dirección.
- **Después, el detalle:** la ficha (rol, período, contexto, herramientas, metodologías), el proceso explicado por fases y el resultado, y cierra con el caso siguiente.

## 🎨 Sistema visual

Tema claro único sobre un fondo blanco cálido, igual en toda la web, con el efecto del hero repetido al azar en el fondo, y el color usado para informar y no para decorar.

| Token | Valor | Significado |
|---|---|---|
| `--it` | `#0A7A6E` (bright `#35C2B1`) | Acción principal y proyectos de IT |
| `--cap` | `#B8326F` (bright `#EC7FB0`) | Capacitación |
| `--cont` | `#8F5B00` (bright `#E8B85A`) | Creación de contenidos |
| `--data` / `--ux` / `--pm` | `#2563B0` / `#B4472A` / `#4D7419` | Áreas dentro de IT, solo en Habilidades |
| `--bg` / `--surface` / `--text` | `#FBF8F3` / `#FFFFFF` / `#17181C` | Fondo, superficies y texto |
| `--surface` / `--line` dentro de la caja del caso | `#F4F5F7` / `#E3E5EA` | Tarjetas y divisores sobre la caja blanca |

Cada color tiene una versión base, con contraste AA para texto y botones, y una "bright" para ilustraciones y acentos sin texto encima.

- **Tipografía:** Schibsted Grotesk para títulos, Hanken Grotesk para lectura y JetBrains Mono para etiquetas y datos.
- **Íconos:** Phosphor, recortado a los íconos que el sitio usa.
- **Forma y profundidad:** tarjetas y paneles con radio de 20px (`--r-panel`), borde casi invisible y una sombra amplia y suave (`--shadow-card`) en lugar de líneas finas. Controles en forma de pastilla.
- **Hero de la portada:** centrado y sin ilustración: la etiqueta en una pastilla, título, texto en dos oraciones equilibradas (la segunda empieza en un renglón nuevo), botones y una pastilla con el total de proyectos y su reparto por categoría, que lleva a Proyectos. El título corta después de "claras,": la propuesta en la primera línea y el recorrido en la segunda. Su fondo combina una grilla fina que se desvanece hacia los bordes, un brillo pastel con los tres colores de categoría y algunos cuadrados sueltos. Los botones son planos, sin brillo ni degradé.
- **Fondo de todas las páginas:** el mismo efecto del hero repetido en manchas que `nav.js` reparte al azar a lo largo de la página, alternando lados. Es decorativo, sin movimiento, queda detrás de las cajas y se rearma si la página cambia de alto. La página 404, que es autocontenida, lo lleva fijo y centrado.
- **Secciones de la portada:** Proyectos, Recorrido y Contacto van cada una en una caja blanca, con las mismas reglas que la caja de los casos.
- **Caja de contenido:** en los casos, el contenido va en una caja blanca de radio 28px, hasta 1720px de ancho con margen lateral. Adentro, las tarjetas son gris neutro muy claro y sin sombra, para no apilar tarjeta sobre tarjeta.
- **Paneles de texto:** título adentro y texto a todo el ancho del panel. Dos paneles seguidos comparten la fila; la prosa larga en un panel de fila entera se lee en dos columnas.
- **Cifras:** mosaicos con un tinte del color del caso, el primero más intenso. Las columnas se eligen según la cantidad (6 cifras: 3 + 3) y la última fila se estira, sin huecos.
- **Botoneras:** grupos en una pastilla blanca con sombra suave. La opción elegida de un filtro va llena con el color de acción; la de un selector de vista o un botón activado, con un tinte del mismo color. Los botones de flecha son círculos blancos de 46px que toman el color de acción al pasar el cursor.
- **En vivo:** etiqueta con un punto verde (late tres veces y se queda quieto con movimiento reducido) y botón lleno con el color del caso, también en la barra de cada sitio embebido.
- **Vista previa de sitios:** marco oscuro con tres puntos en los colores de categoría y la dirección en mono; la captura es la portada del proyecto. Es decorativa para lectores de pantalla y no suma un paso de tabulación: el acceso es el botón.
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
- **Casos por bloques:** un renderer arma cada caso a partir de bloques tipados (cifras, fases, journey maps, personas, user flows, paletas, auditorías de contraste, tablas comparativas, tarjetas bento, galerías, vistas previas de otras páginas, embebidos, referencias APA y más). Sumar un tipo de evidencia es sumar un renderer, no editar páginas.
- **Orden por fechas:** cada proyecto declara su período y la grilla se ordena sola.
- **Imágenes:** dimensiones declaradas para que el layout no salte, carga diferida y ampliación en un visor dentro de la página.
- **Embebidos:** video, audio y presentaciones cargan en diferido; YouTube usa su dominio sin cookies.
- **Fuentes e íconos propios:** woff2 alojados en el sitio, sin pedidos a CDNs de tipografía, sin analítica ni rastreadores.

## 🔎 SEO y vistas previas

- Una página por caso, generada desde los datos, con título, descripción y URL canónica propios.
- `hreflang` para ES/EN, `sitemap.xml` y `robots.txt`.
- Tarjetas Open Graph de 1200 × 630 generadas con las fuentes y colores del sitio (`tools/make-og.py`). La de la home repite el hero: fondo blanco cálido con grilla y brillo pastel, la etiqueta, el título en dos líneas y el reparto de proyectos. Las de cada caso llevan título, categoría, etiquetas y la captura del proyecto. `python tools/make-og.py home` regenera solo la de la home.
- Versionado de archivos para que cada publicación llegue sin caché viejo.

## 🗂️ Estructura

```
├── index.html            Home: hero, proyectos, recorrido, habilidades y contacto
├── 404.html              Página de error con animación accesible
├── casos/<slug>/         Una página por caso
├── assets/
│   ├── css/              Tokens y estilos, fuentes, íconos
│   ├── js/               Datos (projects, cases, i18n) y renderers (main, case, nav)
│   ├── fonts/            woff2 propios
│   └── img/              Imágenes de casos, portadas de proyectos y tarjetas Open Graph
└── tools/                Generación de páginas de caso, SEO, tarjetas OG, íconos y versionado
```

## 🔄 Evolución

| Versión | Cambio principal |
|---|---|
| 1.0 | Una sola página con los casos en ventanas modales. |
| 2.0 | Rediseño con design system de tokens y una URL por caso, auditado con heurísticas de Nielsen y WCAG 2.2. |
| 3.0 | Reposicionamiento hacia análisis funcional y UX/UI, tema oscuro con color por categoría y casos construidos por bloques. |
| 4.0 | Perfil de experience designer: tema claro con auras, animación del proceso en el hero, portadas por proyecto y tarjetas de vista previa con captura. |
| 4.1 | Casos con lógica de tablero: resumen de problema, solución y resultados, índice lateral, tarjeta en vivo, caja de contenido y un único fondo blanco cálido en toda la web. El hero de la portada queda centrado y sin ilustración. |
