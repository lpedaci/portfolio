/* ------------------------------------------------------------------
   Project case studies.

   Each project becomes two real pages:
     /work/<slug>/       (English)
     /es/work/<slug>/    (Spanish)

   Block types understood by the renderer (see src/lib/blocks.mjs):
     prose    { h, p[] }
     list     { h, note?, items[{ lead, body }] }
     roadmap  { h, note?, steps[{ code, title, body }] }
     callout  { h, body }
     stats    { items[{ value, label }] }
     cases    { h, note?, items[{ tag, title, body, links[] }] }
     embed    { kind, h?, note?, src, host, label, open?, ratio? }
     live     { h, note?, src, url, label }
     gallery  { h?, note?, wide?, images[{ src, alt }] }

   Specimen blocks, built for the design-system case study. They render the
   live tokens rather than a picture of them, so they cannot fall out of date:
     swatches { h, note?, items[{ token, hex, use, ratio?, pass? }] }
     scale    { h, note?, steps[{ name, size, cls, use, sample }] }
     atoms    { h, note?, items[{ name, sel, demo, note }] }
     journey  { h, note?, stages[{ stage, goal, doing, answer, risk }] }
     compare  { h, note?, dimension, beforeLabel, afterLabel, foot?, rows[{ dim, was, now }] }
     findings { h, note?, items[{ id, severity, severityLabel, state, stateLabel,
                                  title, heuristic, evidence, fix }] }
   ------------------------------------------------------------------ */

export const projects = [
  /* ============================================================== 00 */
  /* The one case study whose user is the reader of the case study. It is
     built from the specimen blocks in src/lib/blocks.mjs, which draw the
     live tokens rather than pictures of them, so this page cannot fall out
     of step with the stylesheet it documents. */
  {
    slug: 'portfolio-redesign',
    year: '2026',
    cats: ['ux', 'data', 'lxd'],
    cover: 'portfolio-redesign-cover-card.svg',
    coverAlt: {
      en: 'Design system cover: the palette swatches, the type ramp and the twelve-column grid',
      es: 'Portada del design system: las muestras de color, la escala tipográfica y la grilla de doce columnas'
    },
    title: {
      en: 'This portfolio, audited and rebuilt',
      es: 'Este portfolio, auditado y reconstruido'
    },
    subtitle: {
      en: 'A heuristic and accessibility audit of my own site, and the design system that came out of it',
      es: 'Una auditoría heurística y de accesibilidad de mi propio sitio, y el design system que salió de ella'
    },
    summary: {
      en: 'I ran the same audit on my portfolio that I run on a client product: heuristics, accessibility, journey, measured contrast. This is the previous build, the eleven findings, the design system that replaced it, and the numbers that say whether it worked.',
      es: 'Le hice a mi portfolio la misma auditoría que le hago al producto de un cliente: heurísticas, accesibilidad, journey, contraste medido. Acá está la versión anterior, los once hallazgos, el design system que la reemplazó y los números que dicen si funcionó.'
    },
    tags: ['UX Audit', 'Design System', 'WCAG 2.2', 'HTML/CSS/JS'],
    facts: {
      role: {
        en: 'UX research, heuristic audit, design system, front-end, build tooling',
        es: 'Investigación UX, auditoría heurística, design system, front-end, tooling de build'
      },
      timeline: {
        en: 'Audit and rebuild, 2026 · v3 shipped 2025, version 2.0 live since 2026',
        es: 'Auditoría y reconstrucción, 2026 · v3 publicada en 2025, versión 2.0 en línea desde 2026'
      },
      context: {
        en: 'My own portfolio, lpedaci.github.io/portfolio, in English and Spanish',
        es: 'Mi propio portfolio, lpedaci.github.io/portfolio, en inglés y español'
      },
      stack: ['HTML/CSS/JS', 'Node', 'GitHub Pages', 'Figma', 'Headless Chrome'],
      methods: ['Nielsen heuristics', 'WCAG 2.2 AA', 'Journey mapping', 'Atomic design', 'Design tokens']
    },
    links: [
      { label: { en: 'The site being audited', es: 'El sitio auditado' }, url: 'https://lpedaci.github.io/portfolio/' },
      { label: { en: 'Source on GitHub', es: 'Código en GitHub' }, url: 'https://github.com/lpedaci/portfolio' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'A portfolio is the only product a designer ships where she is client, user researcher and developer at once, which is exactly why it is the one that never gets audited. I audited mine. Same protocol I use on a client product: a heuristic pass, a WCAG 2.2 pass with the contrast ratios actually measured rather than eyeballed, a journey map of the person I am really writing for, and then a rebuild against a documented design system instead of against my own taste on the day.',
            es: 'Un portfolio es el único producto que una diseñadora entrega siendo a la vez clienta, investigadora y desarrolladora, y por eso mismo es el que nunca se audita. Audité el mío. El mismo protocolo que uso con el producto de un cliente: una pasada heurística, una pasada WCAG 2.2 con los ratios de contraste medidos y no estimados a ojo, un mapa del recorrido de la persona para la que realmente escribo, y después una reconstrucción contra un design system documentado en lugar de contra mi gusto de ese día.'
          },
          {
            en: 'What follows is the whole chain, in order: the journey the visitor actually walks, what the previous build did to her, the system that replaced it down to the atoms, the eleven findings the audit produced on the new build, and what got fixed. The specimens on this page are not screenshots. They are drawn by the same stylesheet that draws the rest of the site, which means they cannot quietly go out of date the way an exported style guide always does.',
            es: 'Lo que sigue es la cadena completa, en orden: el recorrido que la visitante realmente hace, qué le hacía la versión anterior, el sistema que la reemplazó hasta el nivel de átomos, los once hallazgos que la auditoría produjo sobre la versión nueva, y qué se corrigió. Las muestras de esta página no son capturas de pantalla. Las dibuja la misma hoja de estilos que dibuja el resto del sitio, lo que significa que no pueden desactualizarse en silencio como siempre termina pasando con una guía de estilo exportada.'
          }
        ]
      },

      {
        t: 'journey',
        h: { en: 'The journey, five stages', es: 'El recorrido, cinco etapas' },
        note: {
          en: 'Five stages, each with a goal and a failure mode. Each stage names what the visitor is doing, what the interface owes her at that moment, and the specific way the previous build let her down.',
          es: 'Cinco etapas, cada una con un objetivo y un modo de falla. Cada etapa nombra qué está haciendo la visitante, qué le debe la interfaz en ese momento, y la forma concreta en que la versión anterior la dejaba a mitad de camino.'
        },
        stages: [
          {
            stage: { en: 'Arrive', es: 'Llegar' },
            goal: { en: 'Decide in under ten seconds whether this person is worth four minutes.', es: 'Decidir en menos de diez segundos si esta persona vale cuatro minutos.' },
            doing: { en: 'Lands from LinkedIn, a CV link or a referral. Scans the top of the screen and nothing else.', es: 'Llega desde LinkedIn, un enlace del CV o una recomendación. Escanea la parte de arriba de la pantalla y nada más.' },
            answer: { en: 'Three verbs as the headline, one sentence of what I actually do, two numbers that can be checked, and four actions in priority order: résumé, LinkedIn, GitHub, work.', es: 'Tres verbos como titular, una frase de lo que hago realmente, dos números verificables y cuatro acciones en orden de prioridad: CV, LinkedIn, GitHub, proyectos.' },
            risk: { en: 'The previous build opened with my name set as the headline and a two-hundred-word paragraph of role description underneath. A name is not a value proposition, and nobody reads two hundred words to find one.', es: 'La versión anterior abría con mi nombre como titular y debajo un párrafo de doscientas palabras describiendo el rol. Un nombre no es una propuesta de valor, y nadie lee doscientas palabras para encontrar una.' }
          },
          {
            stage: { en: 'Scan', es: 'Escanear' },
            goal: { en: 'Work out the shape of the practice without reading a case study.', es: 'Entender la forma de la práctica sin leer un caso completo.' },
            doing: { en: 'Skims for category words: is this an instructional designer, a UX designer, or a data person.', es: 'Busca palabras de categoría: ¿es diseño instruccional, UX o datos?' },
            answer: { en: 'Three named practices with their tooling, then a filterable grid where every card carries its discipline, year and stack before it is opened.', es: 'Tres prácticas nombradas con sus herramientas, y después una grilla filtrable donde cada tarjeta lleva su disciplina, año y stack antes de abrirse.' },
            risk: { en: 'The previous build had no categories and no filter. Ten projects arrived as one undifferentiated list, so the answer to "is this a UX person" cost ten clicks instead of one.', es: 'La versión anterior no tenía categorías ni filtro. Diez proyectos llegaban como una lista indiferenciada, así que responder "¿es una persona de UX?" costaba diez clics en lugar de uno.' }
          },
          {
            stage: { en: 'Choose', es: 'Elegir' },
            goal: { en: 'Pick the one project closest to the role being filled.', es: 'Elegir el proyecto más cercano al puesto que se busca.' },
            doing: { en: 'Compares three or four cards against the job she is hiring for.', es: 'Compara tres o cuatro tarjetas contra el puesto que está cubriendo.' },
            answer: { en: 'Every cover cropped to one 5:3 frame so the grid reads as one band, a three-line summary clamped to a fixed height so cards stay comparable, and a real URL per project so she can open four in four tabs.', es: 'Cada portada recortada a un único encuadre 5:3 para que la grilla se lea como una sola banda, un resumen de tres líneas fijado a una altura constante para que las tarjetas sigan siendo comparables, y una URL real por proyecto para poder abrir cuatro en cuatro pestañas.' },
            risk: { en: 'The previous build opened case studies as modal dialogs. No URL, no back button, no second tab, nothing to send to a colleague, and nothing for a search engine to index.', es: 'La versión anterior abría los casos como ventanas modales. Sin URL, sin botón atrás, sin segunda pestaña, sin nada para mandarle a un colega, y sin nada que un buscador pudiera indexar.' }
          },
          {
            stage: { en: 'Read', es: 'Leer' },
            goal: { en: 'Find the decisions, not the deliverables.', es: 'Encontrar las decisiones, no los entregables.' },
            doing: { en: 'Reads the factsheet first, then jumps to the outcome, then goes back for the middle if the outcome earned it.', es: 'Lee primero la ficha, después salta al resultado, y vuelve al medio sólo si el resultado se lo ganó.' },
            answer: { en: 'A sticky factsheet holding role, timeline, context, stack and methods at all times, a single measure for the body text, and the outcome as its own closing block.', es: 'Una ficha fija que sostiene rol, período, contexto, stack y metodologías todo el tiempo, una sola medida de línea para el cuerpo de texto, y el resultado como bloque de cierre propio.' },
            risk: { en: 'In a modal the factsheet scrolled away with everything else, so by paragraph four there was no longer anything on screen saying what my role on the project had been.', es: 'En una modal la ficha se iba con el scroll junto con todo lo demás, así que para el cuarto párrafo ya no quedaba nada en pantalla que dijera cuál había sido mi rol en el proyecto.' }
          },
          {
            stage: { en: 'Act', es: 'Actuar' },
            goal: { en: 'Get in touch, or file the link somewhere she will find it again.', es: 'Ponerse en contacto, o guardar el enlace en algún lugar donde vuelva a encontrarlo.' },
            doing: { en: 'Copies the address, opens LinkedIn, or pastes the link into a hiring channel.', es: 'Copia la dirección, abre LinkedIn, o pega el enlace en un canal de contratación.' },
            answer: { en: 'The same contact block closes every page, so the exit is never more than one screen away. Each URL carries its own share card in its own language, built from these tokens.', es: 'El mismo bloque de contacto cierra todas las páginas, así que la salida nunca está a más de una pantalla. Cada URL lleva su propia tarjeta para compartir, en su idioma, construida con estos mismos tokens.' },
            risk: { en: 'The previous build had one share card for the whole site, so a link to a specific project previewed as the generic homepage and lost the only thing that made it worth sending.', es: 'La versión anterior tenía una sola tarjeta para compartir en todo el sitio, así que el enlace a un proyecto específico se previsualizaba como la home genérica y perdía lo único que lo hacía valioso para enviar.' }
          }
        ]
      },

      {
        t: 'compare',
        h: { en: 'The baseline and what replaced it', es: 'La versión base y lo que la reemplazó' },
        dimension: { en: 'Dimension', es: 'Dimensión' },
        beforeLabel: 'v3',
        afterLabel: '2.0',
        note: {
          en: 'Version 3 was a single hand-written index.html: one page, ten projects in modals, both languages shipped in the same document and toggled with display:none. It worked. It just could not be linked to, indexed, shared or extended. Every row below is a measured difference, not an impression.',
          es: 'La versión 3 era un único index.html escrito a mano: una página, diez proyectos en modales, los dos idiomas viajando en el mismo documento y alternados con display:none. Funcionaba. Simplemente no se podía enlazar, indexar, compartir ni extender. Cada fila de abajo es una diferencia medida, no una impresión.'
        },
        rows: [
          {
            dim: { en: 'Addressable pages', es: 'Páginas direccionables' },
            was: { en: 'One URL for the whole portfolio. Case studies lived in ten <dialog> elements with no route of their own.', es: 'Una sola URL para todo el portfolio. Los casos vivían en diez elementos <dialog> sin ruta propia.' },
            now: { en: '24 real URLs in the sitemap: eleven case studies and one index, each in English and Spanish, each server-rendered at build time.', es: '24 URLs reales en el sitemap: once casos y un índice, cada uno en inglés y español, todos renderizados en el build.' }
          },
          {
            dim: { en: 'Bilingual model', es: 'Modelo bilingüe' },
            was: { en: 'Both languages in one document, switched with html[data-lang] and display:none. Every reader downloaded the language they were not reading, and search engines saw one page in two languages at once.', es: 'Los dos idiomas en un solo documento, alternados con html[data-lang] y display:none. Cada lectora descargaba el idioma que no estaba leyendo, y los buscadores veían una página en dos idiomas a la vez.' },
            now: { en: 'Separate document trees at / and /es/, joined by hreflang and x-default, with canonical URLs and per-language Open Graph locales. One content source in src/data, two outputs.', es: 'Árboles de documentos separados en / y /es/, unidos por hreflang y x-default, con URLs canónicas y locales de Open Graph por idioma. Una sola fuente de contenido en src/data, dos salidas.' }
          },
          {
            dim: { en: 'Content source', es: 'Fuente del contenido' },
            was: { en: 'Copy, markup and styling interleaved across 94 KB of hand-edited HTML. Changing a project title meant editing it in two places and hoping.', es: 'Textos, marcado y estilos entremezclados en 94 KB de HTML editado a mano. Cambiar el título de un proyecto significaba editarlo en dos lugares y cruzar los dedos.' },
            now: { en: 'Content is data. Every string is a { en, es } pair in src/data, every page is a function of that data, and a build emits both trees. A typo is fixed once.', es: 'El contenido es data. Cada string es un par { en, es } en src/data, cada página es una función de esa data, y un build emite los dos árboles. Un error de tipeo se corrige una sola vez.' }
          },
          {
            dim: { en: 'Landmarks and skip link', es: 'Landmarks y salto al contenido' },
            was: { en: 'No <main> element and no skip link, so a keyboard reader tabbed through the entire header on every visit with no way past it.', es: 'Sin elemento <main> ni enlace de salto, así que quien navegaba por teclado tabulaba por toda la cabecera en cada visita sin manera de saltarla.' },
            now: { en: '<main id="main"> on every page with a skip link as the first focusable element, one h1 per document, and an unbroken h2 to h3 hierarchy.', es: '<main id="main"> en todas las páginas con un enlace de salto como primer elemento enfocable, un solo h1 por documento y una jerarquía h2 a h3 sin saltos.' }
          },
          {
            dim: { en: 'Finding a project', es: 'Encontrar un proyecto' },
            was: { en: 'One unlabelled list of ten. No categories, no filter, no way to tell a UX project from a motion project without opening it.', es: 'Una lista sin etiquetas de diez. Sin categorías, sin filtro, sin forma de distinguir un proyecto de UX de uno de motion sin abrirlo.' },
            now: { en: 'Five categories, a filter bar with aria-pressed state, a discipline flag on every card, and a status message that announces the new result count.', es: 'Cinco categorías, una barra de filtros con estado aria-pressed, una bandera de disciplina en cada tarjeta y un mensaje de estado que anuncia el nuevo recuento de resultados.' }
          },
          {
            dim: { en: 'Share previews', es: 'Vistas previas al compartir' },
            was: { en: 'One static og-preview.jpg for the entire site, exported by hand from a design tool and already out of date.', es: 'Un único og-preview.jpg estático para todo el sitio, exportado a mano desde una herramienta de diseño y ya desactualizado.' },
            now: { en: '24 share cards, one per URL per language, painted by headless Chrome from the same tokens as the stylesheet. Change the palette, re-run the renderer, every card follows.', es: '24 tarjetas para compartir, una por URL y por idioma, pintadas por Chrome headless desde los mismos tokens de la hoja de estilos. Se cambia la paleta, se vuelve a correr el renderer y todas las tarjetas siguen.' }
          },
          {
            dim: { en: 'Structured data', es: 'Datos estructurados' },
            was: { en: 'None. No JSON-LD, no canonical, no hreflang, no sitemap, no robots.txt.', es: 'Ninguno. Sin JSON-LD, sin canonical, sin hreflang, sin sitemap, sin robots.txt.' },
            now: { en: 'Person schema on the index, CreativeWork on every case study, plus canonical, hreflang, sitemap.xml and robots.txt emitted by the build.', es: 'Esquema Person en el índice, CreativeWork en cada caso, más canonical, hreflang, sitemap.xml y robots.txt emitidos por el build.' }
          },
          {
            dim: { en: 'Home document weight', es: 'Peso del documento de inicio' },
            was: { en: '94 KB of HTML, because ten modal case studies and two languages all shipped on first load whether or not anyone opened them.', es: '94 KB de HTML, porque diez casos en modal y dos idiomas viajaban en la primera carga los abriera alguien o no.' },
            now: { en: 'Roughly 37 KB for the index. The case studies are separate documents, so nobody pays for the nine they did not open.', es: 'Cerca de 37 KB para el índice. Los casos son documentos separados, así que nadie paga por los nueve que no abrió.' }
          },
          {
            dim: { en: 'Layout stability', es: 'Estabilidad del layout' },
            was: { en: 'Images sized by CSS with no reserved box, so covers and galleries pushed the text down as they arrived.', es: 'Imágenes dimensionadas por CSS sin caja reservada, así que las portadas y galerías empujaban el texto hacia abajo al ir llegando.' },
            now: { en: 'aspect-ratio on every media container: cards, portrait, galleries and embeds. The box exists before the file does, so nothing moves.', es: 'aspect-ratio en cada contenedor de medios: tarjetas, retrato, galerías y embeds. La caja existe antes que el archivo, así que nada se mueve.' }
          },
          {
            dim: { en: 'Design decisions', es: 'Decisiones de diseño' },
            was: { en: 'Values chosen per component and repeated by hand. Four different border radii, three greys that were nearly the same grey.', es: 'Valores elegidos componente por componente y repetidos a mano. Cuatro radios de borde distintos, tres grises que eran casi el mismo gris.' },
            now: { en: 'One token layer at the top of the stylesheet. Colour, radius, type, rhythm and motion each have a named source, and the case study below is generated from it.', es: 'Una capa de tokens al principio de la hoja de estilos. Color, radio, tipografía, ritmo y movimiento tienen cada uno una fuente con nombre, y el caso de abajo se genera desde ahí.' }
          }
        ],
        foot: {
          en: 'The one number that went the other way: the stylesheet grew from 361 lines to about 1,700. That is the honest cost of a system. What it buys is that the next page costs almost nothing, and this one was built without writing a single new colour.',
          es: 'El único número que fue en la dirección contraria: la hoja de estilos pasó de 361 líneas a unas 1.700. Ese es el costo honesto de un sistema. Lo que compra es que la próxima página cueste casi nada, y esta se construyó sin escribir un solo color nuevo.'
        }
      },

      {
        t: 'prose',
        h: { en: 'The system, from the ground up', es: 'El sistema, desde abajo' },
        p: [
          {
            en: 'Atomic design is the organising idea, but the honest version of it: tokens are the only thing anyone edits, atoms are built from tokens and nothing else, molecules combine atoms without inventing new values, and organisms are the page sections. If a component needs a value that is not in the token layer, either the token layer is wrong or the component is. Both are worth stopping for.',
            es: 'El diseño atómico es la idea organizadora, pero en su versión honesta: los tokens son lo único que alguien edita, los átomos se construyen sólo con tokens, las moléculas combinan átomos sin inventar valores nuevos, y los organismos son las secciones de página. Si un componente necesita un valor que no está en la capa de tokens, o está mal la capa de tokens o está mal el componente. Los dos casos valen la pena una pausa.'
          },
          {
            en: 'Everything below this line is a live specimen. The swatches are the declared custom properties, the type ramp is set in the steps it names, and the atoms are the same classes the masthead and the work grid use. Nothing here was exported, so nothing here can lie.',
            es: 'Todo lo que sigue es una muestra viva. Las paletas son las custom properties declaradas, la escala tipográfica está compuesta en los pasos que nombra, y los átomos son las mismas clases que usan la cabecera y la grilla de proyectos. Nada de esto fue exportado, así que nada de esto puede mentir.'
          }
        ]
      },

      {
        t: 'swatches',
        h: { en: 'Level 0 · Colour tokens', es: 'Nivel 0 · Tokens de color' },
        note: {
          en: 'Four families and a rule for each. Ground is paper. Ink is everything you read. Clay is the editorial voice and appears only on the stressed word, the eyebrow and the selection. Sage is state and behaviour: every figure, every hover, every selected thing. The ratio on each chip is the measured contrast against the bone ground; 4.5 is the AA floor for body text. The one value below the line is --line, and it is meant to be there: a decorative divider is exempt, which is exactly why the audit added a second border token for the controls.',
          es: 'Cuatro familias y una regla para cada una. El fondo es papel. La tinta es todo lo que se lee. El arcilla es la voz editorial y aparece sólo en la palabra acentuada, el volante y la selección. El salvia es estado y comportamiento: cada cifra, cada hover, cada cosa seleccionada. El ratio de cada muestra es el contraste medido contra el fondo hueso; 4.5 es el piso AA para texto de cuerpo. El único valor por debajo de la línea es --line, y está bien que lo esté: un divisor decorativo está exento, que es justamente por qué la auditoría agregó un segundo token de borde para los controles.'
        },
        items: [
          { token: '--bone', hex: '#F7F4EC', use: { en: 'The ground. Every page starts here.', es: 'El fondo. Toda página empieza acá.' } },
          { token: '--paper', hex: '#FDFBF6', use: { en: 'Raised surfaces: cards, pills, the masthead.', es: 'Superficies elevadas: tarjetas, píldoras, la cabecera.' } },
          { token: '--bone-deep', hex: '#ECE5D7', use: { en: 'Recessed surfaces and image placeholders.', es: 'Superficies hundidas y placeholders de imagen.' } },
          { token: '--ink', hex: '#17150F', use: { en: 'Headlines and primary action.', es: 'Titulares y acción principal.' }, ratio: '16.6:1' },
          { token: '--ink-70', hex: '#4A463A', use: { en: 'Body copy and lead paragraphs.', es: 'Cuerpo de texto y párrafos guía.' }, ratio: '8.6:1' },
          { token: '--ink-45', hex: '#6F6959', use: { en: 'Metadata, captions, quiet labels.', es: 'Metadatos, epígrafes, etiquetas discretas.' }, ratio: '5.0:1' },
          { token: '--clay', hex: '#965E44', use: { en: 'The editorial voice. Eyebrows and the stressed word.', es: 'La voz editorial. Volantes y la palabra acentuada.' }, ratio: '4.8:1' },
          { token: '--clay-deep', hex: '#594534', use: { en: 'Clay on a filled surface, and high-severity labels.', es: 'Arcilla sobre superficie llena, y etiquetas de severidad alta.' }, ratio: '8.2:1' },
          { token: '--clay-tint', hex: '#EAD9CD', use: { en: 'Clay as a ground. Carries ink at 13.3:1.', es: 'Arcilla como fondo. Sostiene tinta a 13.3:1.' } },
          { token: '--sage', hex: '#596959', use: { en: 'State and behaviour. Figures, hovers, selection.', es: 'Estado y comportamiento. Cifras, hovers, selección.' }, ratio: '5.3:1' },
          { token: '--sage-deep', hex: '#3F4B3F', use: { en: 'Active nav, availability, resolved findings.', es: 'Navegación activa, disponibilidad, hallazgos resueltos.' }, ratio: '6.3:1' },
          { token: '--sage-tint', hex: '#D3D8CE', use: { en: 'Sage as a ground. Carries ink at 12.6:1.', es: 'Salvia como fondo. Sostiene tinta a 12.6:1.' } },
          { token: '--sand', hex: '#E2BB99', use: { en: 'The hero mat. The only large area of warm colour.', es: 'El marco del hero. La única superficie grande de color cálido.' } },
          { token: '--line', rule: true, hex: 'rgba(23,21,15,.14)', use: { en: 'Structural hairlines: dividers, frames, rules.', es: 'Filetes estructurales: divisores, marcos, reglas.' }, ratio: '1.33:1', pass: false },
          { token: '--line-ctrl', rule: true, hex: 'rgba(23,21,15,.46)', use: { en: 'The outline of anything clickable. Added by this audit.', es: 'El contorno de todo lo clickeable. Agregado por esta auditoría.' }, ratio: '3.01:1' }
        ]
      },

      {
        t: 'scale',
        h: { en: 'Level 0 · Type', es: 'Nivel 0 · Tipografía' },
        note: {
          en: 'Three families with three jobs. Archivo carries structure and voice, Newsreader carries anything meant to be read at length, JetBrains Mono carries anything that is really a label rather than a sentence. Every step is a clamp, so the ramp is continuous between 320 and 1440 pixels instead of jumping at breakpoints.',
          es: 'Tres familias con tres trabajos. Archivo lleva la estructura y la voz, Newsreader lleva todo lo que se lee de corrido, JetBrains Mono lleva todo lo que en realidad es una etiqueta y no una frase. Cada paso es un clamp, así que la escala es continua entre 320 y 1440 píxeles en lugar de saltar en los breakpoints.'
        },
        steps: [
          {
            name: 'display', size: 'clamp(3.1rem, 9.4vw, 9.2rem)', cls: 'display',
            use: { en: 'The home headline, once per site', es: 'El titular de inicio, una vez por sitio' },
            sample: { en: 'measure', es: 'medir' }
          },
          {
            name: 'h-xl', size: 'clamp(2.2rem, 6.2vw, 4.6rem)', cls: 'h-xl',
            use: { en: 'Case study titles, the contact question', es: 'Títulos de caso, la pregunta de contacto' },
            sample: { en: 'This portfolio, audited', es: 'Este portfolio, auditado' }
          },
          {
            name: 'h-lg', size: 'clamp(1.75rem, 4.2vw, 3.1rem)', cls: 'h-lg',
            use: { en: 'Section headings on the index', es: 'Títulos de sección en el índice' },
            sample: { en: 'Three practices, one method', es: 'Tres prácticas, un mismo método' }
          },
          {
            name: 'h-sm', size: 'clamp(1.05rem, 1.7vw, 1.25rem)', cls: 'h-sm',
            use: { en: 'Card titles, practice cells, process steps', es: 'Títulos de tarjeta, celdas de práctica, pasos del proceso' },
            sample: { en: 'Learning experience design', es: 'Diseño de experiencias de aprendizaje' }
          },
          {
            name: 'lead', size: 'clamp(1.08rem, 1.5vw, 1.36rem)', cls: 'lead',
            use: { en: 'The paragraph under a heading. Newsreader, ink-70', es: 'El párrafo bajo un título. Newsreader, ink-70' },
            sample: { en: 'I do not separate pedagogy from interface, or interface from evidence.', es: 'No separo la pedagogía de la interfaz, ni la interfaz de la evidencia.' }
          },
          {
            name: 'prose', size: 'clamp(1.02rem, 1.28vw, 1.2rem)', cls: 'prose',
            use: { en: 'Case study body, held to a 68-character measure', es: 'Cuerpo del caso, sostenido en una medida de 68 caracteres' },
            sample: { en: 'A serif at reading size, because a case study is read rather than scanned.', es: 'Una serif en tamaño de lectura, porque un caso se lee, no se escanea.' }
          },
          {
            name: 'eyebrow', size: 'clamp(10px, 1.05vw, 11.5px)', cls: 'eyebrow',
            use: { en: 'Section labels. Mono, .16em tracking, uppercase', es: 'Etiquetas de sección. Mono, .16em de tracking, mayúsculas' },
            sample: { en: 'Learning experience · UX · Data', es: 'Experiencia de aprendizaje · UX · Datos' }
          }
        ]
      },

      {
        t: 'atoms',
        h: { en: 'Level 1 · Atoms', es: 'Nivel 1 · Átomos' },
        note: {
          en: 'Six atoms, and the whole interface is built from them. These are live: the same classes, the same tokens, the same stylesheet. Interaction is switched off here because a specimen that responds to a click is a control pretending to be documentation.',
          es: 'Seis átomos, y toda la interfaz se construye con ellos. Son muestras vivas: las mismas clases, los mismos tokens, la misma hoja de estilos. Acá la interacción está apagada porque una muestra que responde al clic es un control disfrazado de documentación.'
        },
        items: [
          {
            name: 'Pill', sel: '.pill',
            demo: '<span class="pill pill--ink">View résumé</span><span class="pill">LinkedIn</span><span class="pill pill--ghost">Work</span>',
            note: {
              en: 'The only button in the system, in three weights: ink for the one primary action, paper for secondary, ghost for tertiary. 44px tall, 3:1 outline, and a translateY on hover rather than a colour flash.',
              es: 'El único botón del sistema, en tres pesos: tinta para la acción principal, papel para la secundaria, fantasma para la terciaria. 44px de alto, contorno 3:1, y un translateY en hover en lugar de un destello de color.'
            }
          },
          {
            name: 'Tag', sel: '.tag',
            demo: '<span class="tag">Figma</span><span class="tag">SCORM</span><span class="tag">Power BI</span>',
            note: {
              en: 'Never clickable, and shaped so it cannot be mistaken for a pill: mono, uppercase, ink-45, structural hairline rather than the control outline. Tags state a fact; pills do a thing.',
              es: 'Nunca es clickeable, y está formada para no confundirse con una píldora: mono, mayúsculas, ink-45, filete estructural en lugar del contorno de control. Las etiquetas afirman un hecho; las píldoras hacen algo.'
            }
          },
          {
            name: 'Eyebrow', sel: '.eyebrow',
            demo: '<span class="eyebrow eyebrow--clay">Practice / 01</span>',
            note: {
              en: 'The section label. Mono at .16em tracking, in clay when it opens a section and in ink-45 when it only orients. It is the one place a number is allowed to lead.',
              es: 'La etiqueta de sección. Mono con .16em de tracking, en arcilla cuando abre una sección y en ink-45 cuando sólo orienta. Es el único lugar donde un número puede ir adelante.'
            }
          },
          {
            name: 'Figure', sel: '.num',
            demo: '<span class="stat__value num" style="font-family:var(--f-text);font-style:italic;font-size:2.1rem;color:var(--sage)">+7</span><span class="stat__value num" style="font-family:var(--f-text);font-style:italic;font-size:2.1rem;color:var(--sage)">11</span>',
            note: {
              en: 'Every number in the system is sage, italic Newsreader, tabular. Colour does the categorising so a figure is recognisable as a figure before it is read.',
              es: 'Cada número del sistema es salvia, Newsreader itálica, tabular. El color hace la categorización, así que una cifra se reconoce como cifra antes de leerse.'
            }
          },
          {
            name: 'Orb', sel: '.orb',
            demo: '<span class="orb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 16.5 16.5 7.5"/><path d="M8.6 7.5h7.9v7.9"/></svg></span><span class="orb orb--sage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4c.7 4.3 2.3 5.9 6.6 6.6-4.3.7-5.9 2.3-6.6 6.6-.7-4.3-2.3-5.9-6.6-6.6 4.3-.7 5.9-2.3 6.6-6.6"/></svg></span>',
            note: {
              en: 'The icon-only affordance, 56px so it clears the touch minimum with room. Every orb that does something carries an aria-label, because a circle with an arrow in it is not a name.',
              es: 'El elemento de sólo icono, de 56px para superar el mínimo táctil con margen. Cada orbe que hace algo lleva un aria-label, porque un círculo con una flecha adentro no es un nombre.'
            }
          },
          {
            name: 'Icon', sel: 'icons.mjs',
            demo: '<span style="display:flex;gap:14px;color:var(--ink)"><svg style="width:22px;height:22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5L13 17.5"/></svg><svg style="width:22px;height:22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.2" width="18" height="13.6" rx="2.6"/><path d="m4.4 7.4 6.3 4.7a2.2 2.2 0 0 0 2.6 0l6.3-4.7"/></svg><svg style="width:22px;height:22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.4"/><path d="M3.6 12h16.8"/><path d="M12 3.6c2.2 2.3 3.3 5.2 3.3 8.4s-1.1 6.1-3.3 8.4c-2.2-2.3-3.3-5.2-3.3-8.4s1.1-6.1 3.3-8.4"/></svg></span>',
            note: {
              en: 'Fourteen icons, drawn on one 24px grid at one 1.7 stroke weight, so they read as one alphabet with the monogram. All are aria-hidden and none is an emoji. Every one inherits currentColor.',
              es: 'Catorce iconos, dibujados en una grilla de 24px con un único grosor de 1.7, para que se lean como un mismo alfabeto junto al monograma. Todos son aria-hidden y ninguno es un emoji. Cada uno hereda currentColor.'
            }
          }
        ]
      },

      {
        t: 'list',
        h: { en: 'Level 1 · The other primitives', es: 'Nivel 1 · Las otras primitivas' },
        note: {
          en: 'Colour and type get the attention, but these four are what keep a page from drifting.',
          es: 'El color y la tipografía se llevan la atención, pero son estas cuatro las que evitan que una página se desalinee.'
        },
        items: [
          {
            lead: { en: 'Rhythm', es: 'Ritmo' },
            body: {
              en: '--shell is min(1320px, 100% - clamp(20px, 5vw, 76px)): one measurement decides the page width and its gutters together, so the margin is never set twice. --section is clamp(68px, 9.9vh, 133px) and --gap is clamp(20px, 2.6vw, 34px). Three values, and no page needs a fourth.',
              es: '--shell es min(1320px, 100% - clamp(20px, 5vw, 76px)): una sola medida decide el ancho de página y sus márgenes a la vez, así que el margen nunca se define dos veces. --section es clamp(68px, 9.9vh, 133px) y --gap es clamp(20px, 2.6vw, 34px). Tres valores, y ninguna página necesita un cuarto.'
            }
          },
          {
            lead: { en: 'Radius', es: 'Radio' },
            body: {
              en: 'Five steps, and the large ones scale with the viewport so a 48px corner on a desktop panel does not stay 48px on a phone card. --r-pill 999px, --r-xl clamp(28px, 3.4vw, 48px), --r-lg clamp(20px, 2.4vw, 32px), --r-md 16px, --r-sm 10px.',
              es: 'Cinco pasos, y los grandes escalan con el viewport para que una esquina de 48px en un panel de escritorio no siga siendo 48px en una tarjeta de teléfono. --r-pill 999px, --r-xl clamp(28px, 3.4vw, 48px), --r-lg clamp(20px, 2.4vw, 32px), --r-md 16px, --r-sm 10px.'
            }
          },
          {
            lead: { en: 'Motion', es: 'Movimiento' },
            body: {
              en: 'One easing curve for the whole site, cubic-bezier(.22,.68,.24,1), and one base duration of .5s. Hovers run shorter than that, the scroll reveal runs longer, and nothing runs at all under prefers-reduced-motion. A second curve would be a second opinion about how this site moves.',
              es: 'Una sola curva de easing para todo el sitio, cubic-bezier(.22,.68,.24,1), y una duración base de .5s. Los hovers corren más cortos, el reveal de scroll más largo, y nada corre bajo prefers-reduced-motion. Una segunda curva sería una segunda opinión sobre cómo se mueve este sitio.'
            }
          },
          {
            lead: { en: 'Texture', es: 'Textura' },
            body: {
              en: 'A single inline SVG turbulence filter at .055 opacity, painted into the body background rather than laid over the content. Flat colour on a large area reads as plastic; a whisper of grain reads as paper. It costs 380 bytes and nothing sits above the content, so compositing stays cheap.',
              es: 'Un único filtro SVG de turbulencia en línea al .055 de opacidad, pintado en el fondo del body en lugar de superpuesto al contenido. El color plano en un área grande se lee como plástico; un susurro de grano se lee como papel. Cuesta 380 bytes y nada queda por encima del contenido, así que el compositing sigue siendo barato.'
            }
          }
        ]
      },

      {
        t: 'list',
        h: { en: 'Levels 2 and 3 · Molecules and organisms', es: 'Niveles 2 y 3 · Moléculas y organismos' },
        note: {
          en: 'A molecule is atoms in an arrangement that means something. An organism is a section of a page. Neither is allowed to introduce a value the token layer does not already have.',
          es: 'Una molécula son átomos en una disposición que significa algo. Un organismo es una sección de página. Ninguno puede introducir un valor que la capa de tokens no tenga ya.'
        },
        items: [
          {
            lead: { en: 'Card', es: 'Tarjeta' },
            body: {
              en: 'Frame plus flag plus title plus clamped summary plus tag row. The frame is a fixed 5:3 crop and the summary is clamped to three lines, so ten cards of wildly different source material still make one comparable grid. The whole card is the link; there is no separate read more.',
              es: 'Marco más bandera más título más resumen recortado más fila de etiquetas. El marco es un encuadre fijo 5:3 y el resumen está limitado a tres líneas, así que diez tarjetas con material de origen muy distinto siguen formando una grilla comparable. La tarjeta entera es el enlace; no hay un leer más aparte.'
            }
          },
          {
            lead: { en: 'Factsheet', es: 'Ficha' },
            body: {
              en: 'A definition list of role, timeline, context, stack and methods, sticky from 1000px up. It answers the four questions a reader has in the first ten seconds of a case study and keeps answering them while she scrolls, which is the single change that most improved how the case studies read.',
              es: 'Una lista de definiciones con rol, período, contexto, stack y metodologías, fija a partir de 1000px. Responde las cuatro preguntas que una lectora tiene en los primeros diez segundos de un caso y las sigue respondiendo mientras baja, que es el cambio que más mejoró la lectura de los casos.'
            }
          },
          {
            lead: { en: 'Block', es: 'Bloque' },
            body: {
              en: 'Nine content blocks plus the six specimen blocks written for this page. A case study is an array of blocks in src/data, never markup, so a project is described rather than laid out. Adding a new kind of evidence means adding one renderer, not editing eleven pages.',
              es: 'Nueve bloques de contenido más los seis bloques de muestra escritos para esta página. Un caso es un array de bloques en src/data, nunca marcado, así que un proyecto se describe en lugar de maquetarse. Sumar un nuevo tipo de evidencia significa sumar un renderer, no editar once páginas.'
            }
          },
          {
            lead: { en: 'Masthead', es: 'Cabecera' },
            body: {
              en: 'Brand, five links, availability, language switch and a burger, on a floating pill that gains a shadow once the page scrolls. Below 1060px the links become a full-screen sheet; the layer order puts the sheet under the bar so the burger that closes it is never covered by what it opened.',
              es: 'Marca, cinco enlaces, disponibilidad, cambio de idioma y una hamburguesa, sobre una píldora flotante que gana sombra al hacer scroll. Por debajo de 1060px los enlaces pasan a una hoja de pantalla completa; el orden de capas deja la hoja por debajo de la barra para que la hamburguesa que la cierra nunca quede tapada por lo que abrió.'
            }
          },
          {
            lead: { en: 'Contact', es: 'Contacto' },
            body: {
              en: 'The same organism closes every page in the site, in a full and a compact variant. Beside it, the practice drawn as a circuit: three nodes, three edges and a signal moving between them, because the argument of the whole site is that the three disciplines are one loop.',
              es: 'El mismo organismo cierra todas las páginas del sitio, en variante completa y compacta. Al lado, la práctica dibujada como un circuito: tres nodos, tres aristas y una señal moviéndose entre ellos, porque el argumento de todo el sitio es que las tres disciplinas son un mismo bucle.'
            }
          }
        ]
      },

      {
        t: 'roadmap',
        h: { en: 'How the audit was run', es: 'Cómo se corrió la auditoría' },
        note: {
          en: 'Five passes, in this order, because each one only makes sense once the previous has been settled. Auditing colour before you know who the reader is produces a compliant page nobody needed.',
          es: 'Cinco pasadas, en este orden, porque cada una sólo tiene sentido una vez resuelta la anterior. Auditar el color antes de saber quién es la lectora produce una página conforme que nadie necesitaba.'
        },
        steps: [
          { code: 'A01', title: { en: 'Frame the reader', es: 'Definir la lectora' }, body: { en: 'One sentence naming who arrives, with how much time, on what device, in which language. Everything after this is measured against it.', es: 'Una frase que nombre quién llega, con cuánto tiempo, en qué dispositivo y en qué idioma. Todo lo que sigue se mide contra eso.' } },
          { code: 'A02', title: { en: 'Walk the journey', es: 'Recorrer el journey' }, body: { en: 'Five stages, each with a goal and a failure mode. Findings that do not attach to a stage are opinions.', es: 'Cinco etapas, cada una con un objetivo y un modo de falla. Los hallazgos que no se enganchan a una etapa son opiniones.' } },
          { code: 'A03', title: { en: 'Heuristic pass', es: 'Pasada heurística' }, body: { en: 'Nielsen against every stage: visibility of status, match with the real world, recognition over recall, consistency, aesthetic restraint.', es: 'Nielsen contra cada etapa: visibilidad del estado, correspondencia con el mundo real, reconocimiento antes que recuerdo, consistencia, contención estética.' } },
          { code: 'A04', title: { en: 'Measure, do not judge', es: 'Medir, no opinar' }, body: { en: 'Contrast computed from the tokens rather than estimated. Target sizes read from the live DOM. Heading order, landmarks and alt text enumerated, not spot-checked.', es: 'Contraste calculado desde los tokens en lugar de estimado. Tamaños de destino leídos del DOM en vivo. Orden de títulos, landmarks y textos alternativos enumerados, no muestreados.' } },
          { code: 'A05', title: { en: 'Fix or record', es: 'Corregir o registrar' }, body: { en: 'Each finding is either shipped in this pass or written down with the reason it was not. A backlog is a decision; an unmentioned finding is a hole.', es: 'Cada hallazgo se corrige en esta pasada o se anota con el motivo por el que no. Un backlog es una decisión; un hallazgo no mencionado es un agujero.' } }
        ]
      },

      {
        t: 'findings',
        h: { en: 'The findings', es: 'Los hallazgos' },
        note: {
          en: 'Eleven findings on the live 2.0 build, severity first. Seven were fixed in this pass and shipped with this page; four are recorded with the reason they were not. Everything here was measured, and the evidence column says how.',
          es: 'Once hallazgos sobre la versión 2.0 en línea, ordenados por severidad. Siete se corrigieron en esta pasada y se publicaron junto con esta página; cuatro quedan registrados con el motivo por el que no. Todo esto fue medido, y la columna de evidencia dice cómo.'
        },
        items: [
          {
            id: 'F01', severity: 'high', state: 'fixed',
            severityLabel: { en: 'High', es: 'Alta' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'The scroll reveal was hiding the content above the fold', es: 'El reveal de scroll ocultaba el contenido de la primera pantalla' },
            heuristic: { en: 'Visibility of system status · WCAG 2.2.1 · Largest Contentful Paint', es: 'Visibilidad del estado del sistema · WCAG 2.2.1 · Largest Contentful Paint' },
            evidence: {
              en: 'The rule .js .reveal { opacity: 0 } is painted the moment an inline head script sets the js class, and it applies to the h1, the lead and the hero panel. A screenshot of /work/edulabs/ taken during load caught the title, the subtitle and the whole factsheet at zero opacity. Worse, if site.js failed to arrive, the page stayed blank permanently and silently.',
              es: 'La regla .js .reveal { opacity: 0 } se pinta apenas un script en línea del head agrega la clase js, y aplica al h1, al párrafo guía y al panel del hero. Una captura de /work/edulabs/ tomada durante la carga atrapó el título, el subtítulo y toda la ficha en opacidad cero. Peor: si site.js no llegaba, la página quedaba en blanco de forma permanente y silenciosa.'
            },
            fix: {
              en: 'The reveal is now a scroll reward and nothing else. Anything already inside the viewport at first paint is marked visible synchronously and never handed to the observer. A CSS keyframe resolves any remaining element after four seconds, so the page no longer depends on its own JavaScript surviving the trip.',
              es: 'El reveal ahora es sólo una recompensa de scroll. Todo lo que ya está dentro del viewport en el primer pintado se marca visible de forma síncrona y nunca pasa al observer. Un keyframe de CSS resuelve cualquier elemento restante a los cuatro segundos, así que la página ya no depende de que su propio JavaScript sobreviva el viaje.'
            }
          },
          {
            id: 'F02', severity: 'high', state: 'fixed',
            severityLabel: { en: 'High', es: 'Alta' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'The mobile menu opened without ever handing over focus', es: 'El menú móvil se abría sin entregar nunca el foco' },
            heuristic: { en: 'User control and freedom · WCAG 2.1.2 No Keyboard Trap · 2.4.3 Focus Order', es: 'Control y libertad del usuario · WCAG 2.1.2 Sin trampa de teclado · 2.4.3 Orden del foco' },
            evidence: {
              en: 'The sheet is position: fixed with inset: 0, so it covers everything, but it carried no role, no aria-modal, and no Tab cycle: tabbing past the last link walked out of the overlay into content the reader could not see. Writing a test for that trap turned up a worse bug under it. The sheet transitioned visibility symmetrically with its fade, so for the length of the transition it still computed as hidden, and an element inside a hidden subtree cannot take focus. The focus() call that was meant to hand the reader the menu was hitting an unfocusable element and returning quietly. Measured in headless Chrome at 390px: the sheet opened, and focus stayed on the document body. Every time, since the sheet was written.',
              es: 'La hoja es position: fixed con inset: 0, así que tapa todo, pero no llevaba rol, ni aria-modal, ni ciclo de Tab: tabular más allá del último enlace salía del overlay hacia contenido que la lectora no podía ver. Escribir una prueba para esa trampa destapó un error peor debajo. La hoja transicionaba visibility de forma simétrica con su fundido, así que durante toda la transición seguía calculando como hidden, y un elemento dentro de un subárbol oculto no puede recibir foco. El focus() que debía entregarle el menú a la lectora golpeaba un elemento no enfocable y volvía en silencio. Medido en Chrome headless a 390px: la hoja se abría y el foco se quedaba en el body del documento. Siempre, desde que la hoja existe.'
            },
            fix: {
              en: 'visibility is now delayed only on the way out, so it flips to visible instantly on open and the fade is still seen on close. Then role="dialog" and aria-modal="true" with the menu as its accessible name, and a Tab cycle that includes the burger, so the control that closes the sheet is inside the loop rather than behind it. Focus returns to the burger on every close path, not only on Escape. Verified at 390px: focus lands on the first link, Tab and Shift+Tab both wrap, Escape closes and restores focus, and page scroll is released.',
              es: 'Ahora visibility se demora sólo a la salida, así que pasa a visible al instante al abrir y el fundido se sigue viendo al cerrar. Después, role="dialog" y aria-modal="true" con el menú como nombre accesible, y un ciclo de Tab que incluye la hamburguesa, para que el control que cierra la hoja esté dentro del bucle y no detrás. El foco vuelve a la hamburguesa en todos los caminos de cierre, no sólo con Escape. Verificado a 390px: el foco cae en el primer enlace, Tab y Shift+Tab dan la vuelta en ambos sentidos, Escape cierra y restituye el foco, y el scroll de página se libera.'
            }
          },
          {
            id: 'F03', severity: 'high', state: 'fixed',
            severityLabel: { en: 'High', es: 'Alta' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'Filtering the work grid was silent', es: 'Filtrar la grilla de proyectos era silencioso' },
            heuristic: { en: 'Visibility of system status · WCAG 4.1.3 Status Messages', es: 'Visibilidad del estado del sistema · WCAG 4.1.3 Mensajes de estado' },
            evidence: {
              en: 'The filter bar toggles the hidden attribute on eleven cards. A sighted reader sees the grid collapse; a screen-reader reader hears the button state change to pressed and nothing else. There was no live region anywhere in the document: zero elements with aria-live or role="status".',
              es: 'La barra de filtros alterna el atributo hidden en once tarjetas. Quien ve la pantalla nota que la grilla se achica; quien usa lector de pantalla escucha que el botón pasa a presionado y nada más. No había ninguna región viva en el documento: cero elementos con aria-live o role="status".'
            },
            fix: {
              en: 'One atomic status message above the grid, in the reader language, phrased as a sentence rather than a bare count: "Showing 4 projects in UX and product." It is visible as well as announced, so it also helps a reader who filtered by accident.',
              es: 'Un único mensaje de estado atómico sobre la grilla, en el idioma de la lectora, redactado como frase y no como número suelto: "Se muestran 4 proyectos en UX y producto." Es visible además de anunciado, así que también ayuda a quien filtró sin querer.'
            }
          },
          {
            id: 'F04', severity: 'medium', state: 'fixed',
            severityLabel: { en: 'Medium', es: 'Media' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'Controls were outlined at 1.33:1', es: 'Los controles tenían un contorno de 1.33:1' },
            heuristic: { en: 'WCAG 1.4.11 Non-text Contrast', es: 'WCAG 1.4.11 Contraste de elementos no textuales' },
            evidence: {
              en: 'Every pill, filter button and the language switch drew its boundary with --line, rgba(23,21,15,.14). Composited over the bone ground that is 1.33:1. The text inside passed comfortably, but the edge that says this is a control did not, and the filter buttons had a transparent fill, so the border was the only thing identifying them at all.',
              es: 'Cada píldora, botón de filtro y el cambio de idioma dibujaban su borde con --line, rgba(23,21,15,.14). Compuesto sobre el fondo hueso eso da 1.33:1. El texto de adentro pasaba con holgura, pero el borde que dice esto es un control no, y los botones de filtro tenían relleno transparente, así que el borde era lo único que los identificaba.'
            },
            fix: {
              en: 'A second border token, --line-ctrl at .46 alpha, applied only to controls. It measures 3.01:1 on bone and 3.04:1 on paper, the lightest value that clears the threshold on both grounds. Structural hairlines keep --line: dividers and frames are decorative and 1.4.11 does not reach them.',
              es: 'Un segundo token de borde, --line-ctrl al .46 de alfa, aplicado sólo a controles. Mide 3.01:1 sobre hueso y 3.04:1 sobre papel, el valor más liviano que supera el umbral en los dos fondos. Los filetes estructurales conservan --line: divisores y marcos son decorativos y 1.4.11 no llega hasta ahí.'
            }
          },
          {
            id: 'F05', severity: 'medium', state: 'fixed',
            severityLabel: { en: 'Medium', es: 'Media' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'Card metadata was set at 9.5 pixels', es: 'Los metadatos de tarjeta estaban en 9.5 píxeles' },
            heuristic: { en: 'Legibility · Aesthetic and minimalist design', es: 'Legibilidad · Diseño estético y minimalista' },
            evidence: {
              en: 'The discipline flag and the stack tags on every work card were 9.5px, and the factsheet term labels 10px. Uppercase mono at wide tracking survives small sizes better than most type, which is exactly how it got there, but these carry real information: the category, the year, the tools. They are not ornament.',
              es: 'La bandera de disciplina y las etiquetas de stack de cada tarjeta estaban en 9.5px, y las etiquetas de la ficha en 10px. La mono en mayúsculas con tracking ancho aguanta los tamaños chicos mejor que casi cualquier tipografía, que es exactamente cómo llegó ahí, pero esto lleva información real: la categoría, el año, las herramientas. No es ornamento.'
            },
            fix: {
              en: 'An 11px floor for anything that carries meaning. The tracking and the uppercase stay, so the texture of the card is unchanged; it is simply readable now at arm length rather than at reading distance.',
              es: 'Un piso de 11px para todo lo que lleve significado. Se mantienen el tracking y las mayúsculas, así que la textura de la tarjeta no cambia; simplemente ahora se lee a distancia de brazo y no sólo a distancia de lectura.'
            }
          },
          {
            id: 'F06', severity: 'medium', state: 'fixed',
            severityLabel: { en: 'Medium', es: 'Media' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'Targets under 44 pixels in the header and the filter bar', es: 'Destinos de menos de 44 píxeles en la cabecera y la barra de filtros' },
            heuristic: { en: 'WCAG 2.5.5 Target Size (Enhanced) · Fitts', es: 'WCAG 2.5.5 Tamaño del destino (mejorado) · Fitts' },
            evidence: {
              en: 'Measured from the live DOM: navigation links 41px tall, filter buttons 39px, the EN and ES switches 41 by 31. All clear the 24px AA minimum of 2.5.8, so this was never a failure, but a language switch is exactly the control a reader uses in a hurry and it was the smallest thing on the page. The gap between filter buttons was 7px, under the 8px adjacent-target guidance.',
              es: 'Medido sobre el DOM en vivo: enlaces de navegación de 41px de alto, botones de filtro de 39px, los conmutadores EN y ES de 41 por 31. Todos superan el mínimo AA de 24px de 2.5.8, así que nunca fue un incumplimiento, pero el cambio de idioma es justo el control que se usa con apuro y era lo más chico de la página. El espacio entre botones de filtro era de 7px, por debajo de la guía de 8px entre destinos adyacentes.'
            },
            fix: {
              en: 'A 44px minimum height on navigation links and filter buttons, a 44px minimum width on each language switch, and the filter gap opened to 8px. Nothing moved visually: the extra height went into the hit area, not into the layout.',
              es: 'Altura mínima de 44px en enlaces de navegación y botones de filtro, ancho mínimo de 44px en cada conmutador de idioma, y el espacio entre filtros abierto a 8px. Visualmente no se movió nada: la altura extra fue al área de toque, no al layout.'
            }
          },
          {
            id: 'F07', severity: 'low', state: 'fixed',
            severityLabel: { en: 'Low', es: 'Baja' },
            stateLabel: { en: 'Fixed', es: 'Corregido' },
            title: { en: 'Filter buttons had no surface of their own', es: 'Los botones de filtro no tenían superficie propia' },
            heuristic: { en: 'Consistency and standards · Recognition rather than recall', es: 'Consistencia y estándares · Reconocimiento antes que recuerdo' },
            evidence: {
              en: 'Every other control in the system sits on --paper. The filter buttons were transparent on --bone, which made them read as labels rather than as buttons until one was pressed. Their text was also ink-45, the metadata colour, rather than the ink-70 the system uses for anything you are meant to act on.',
              es: 'Todos los demás controles del sistema se apoyan en --paper. Los botones de filtro eran transparentes sobre --bone, lo que los hacía leer como etiquetas y no como botones hasta que se presionaba uno. Su texto además era ink-45, el color de metadatos, en lugar del ink-70 que el sistema usa para todo aquello sobre lo que hay que actuar.'
            },
            fix: {
              en: 'Paper fill and ink-70 text, so a filter now looks like the same family of object as a pill. The sage pressed state is unchanged, and it was never carried by colour alone: aria-pressed says it too.',
              es: 'Relleno papel y texto ink-70, así un filtro ahora parece de la misma familia de objetos que una píldora. El estado presionado en salvia no cambia, y nunca dependió sólo del color: aria-pressed también lo dice.'
            }
          },
          {
            id: 'F08', severity: 'medium', state: 'open',
            severityLabel: { en: 'Medium', es: 'Media' },
            stateLabel: { en: 'Recorded', es: 'Registrado' },
            title: { en: 'Two language switches, with different affordances', es: 'Dos cambios de idioma, con lenguajes distintos' },
            heuristic: { en: 'Consistency and standards', es: 'Consistencia y estándares' },
            evidence: {
              en: 'The index offers the language twice: EN and ES as a labelled segmented control in the masthead, and a globe orb on the hero panel that does the same thing with an icon and no visible state. Two affordances for one action, and the second one cannot show which language you are already reading.',
              es: 'El índice ofrece el idioma dos veces: EN y ES como control segmentado con etiquetas en la cabecera, y un orbe de globo terráqueo en el panel del hero que hace lo mismo con un icono y sin estado visible. Dos formas para una misma acción, y la segunda no puede mostrar en qué idioma estás leyendo.'
            },
            fix: {
              en: 'Recorded rather than fixed. The globe is load-bearing visually: it balances the panel and it is the only element that overlaps the hero frame from above. Removing it is a composition decision, not an accessibility one, and it belongs in the next visual pass rather than in an audit fix.',
              es: 'Registrado, no corregido. El globo sostiene la composición: equilibra el panel y es el único elemento que se superpone al marco del hero desde arriba. Sacarlo es una decisión de composición, no de accesibilidad, y corresponde a la próxima pasada visual, no a una corrección de auditoría.'
            }
          },
          {
            id: 'F09', severity: 'low', state: 'open',
            severityLabel: { en: 'Low', es: 'Baja' },
            stateLabel: { en: 'Recorded', es: 'Registrado' },
            title: { en: 'The filter state does not survive a reload or a link', es: 'El estado del filtro no sobrevive a una recarga ni a un enlace' },
            heuristic: { en: 'User control and freedom · Deep linking', es: 'Control y libertad del usuario · Enlaces profundos' },
            evidence: {
              en: 'Filtering to Data and research produces a view a reader might reasonably want to send to a colleague, but the URL never changes, so the link arrives unfiltered and the back button does not undo the filter either.',
              es: 'Filtrar por Datos e investigación produce una vista que una lectora podría querer mandarle a un colega, pero la URL nunca cambia, así que el enlace llega sin filtrar y el botón atrás tampoco deshace el filtro.'
            },
            fix: {
              en: 'Recorded. The fix is a query parameter and a history entry, roughly fifteen lines. It is queued behind the visual pass because the filter is a convenience on an eleven-item grid, not a primary route.',
              es: 'Registrado. La solución es un parámetro de consulta y una entrada de historial, unas quince líneas. Queda detrás de la pasada visual porque el filtro es una comodidad sobre una grilla de once elementos, no una ruta principal.'
            }
          },
          {
            id: 'F10', severity: 'low', state: 'open',
            severityLabel: { en: 'Low', es: 'Baja' },
            stateLabel: { en: 'Recorded', es: 'Registrado' },
            title: { en: 'No dark mode', es: 'Sin modo oscuro' },
            heuristic: { en: 'Flexibility and efficiency of use', es: 'Flexibilidad y eficiencia de uso' },
            evidence: {
              en: 'The palette is committed to a light paper ground and there is no prefers-color-scheme branch. A reader whose system is set to dark gets the light site, correctly painted, but not what they asked for.',
              es: 'La paleta está comprometida con un fondo de papel claro y no hay ninguna rama prefers-color-scheme. Quien tiene el sistema en oscuro recibe el sitio claro, bien pintado, pero no lo que pidió.'
            },
            fix: {
              en: 'Recorded as a deliberate decision rather than an omission. The whole identity is paper, grain and warm ink; an inverted version would be a second design system, not a variant, and a half-hearted one would be worse than none. It is worth doing properly or not at all.',
              es: 'Registrado como decisión deliberada y no como omisión. Toda la identidad es papel, grano y tinta cálida; una versión invertida sería un segundo design system, no una variante, y una versión a medias sería peor que ninguna. Vale la pena hacerlo bien o no hacerlo.'
            }
          },
          {
            id: 'F11', severity: 'low', state: 'open',
            severityLabel: { en: 'Low', es: 'Baja' },
            stateLabel: { en: 'Recorded', es: 'Registrado' },
            title: { en: 'Fonts are fetched from a third party', es: 'Las tipografías se traen de un tercero' },
            heuristic: { en: 'Performance · Privacy', es: 'Rendimiento · Privacidad' },
            evidence: {
              en: 'Three families come from the Google Fonts CDN. It is the only third-party request the site makes, there is no analytics and no tracker of any kind, but it is still a round trip to another origin before the first heading can be painted in its real face.',
              es: 'Tres familias vienen del CDN de Google Fonts. Es la única petición a terceros que hace el sitio, no hay analítica ni rastreadores de ningún tipo, pero sigue siendo un viaje de ida y vuelta a otro origen antes de que el primer título pueda pintarse con su tipografía real.'
            },
            fix: {
              en: 'Recorded. Self-hosting the four weights actually used, subset to Latin, would remove the request and the preconnects and cut the critical path. It is a build-tooling task rather than a design one, which is the only reason it is not in this pass.',
              es: 'Registrado. Alojar localmente los cuatro pesos que realmente se usan, con subconjunto latino, eliminaría la petición y los preconnect y acortaría la ruta crítica. Es una tarea de tooling de build más que de diseño, que es la única razón por la que no está en esta pasada.'
            }
          }
        ]
      },

      {
        t: 'stats',
        h: { en: 'What the audit produced', es: 'Lo que produjo la auditoría' },
        items: [
          { value: '24', label: { en: 'indexable URLs, up from one', es: 'URLs indexables, desde una' } },
          { value: '11', label: { en: 'findings, seven fixed in this pass', es: 'hallazgos, siete corregidos en esta pasada' } },
          { value: '17/17', label: { en: 'colour pairs in use, all measured at WCAG AA or better', es: 'pares de color en uso, todos medidos en WCAG AA o mejor' } },
          { value: '0', label: { en: 'third-party scripts, trackers or analytics', es: 'scripts de terceros, rastreadores o analítica' } }
        ]
      },

      {
        t: 'callout',
        h: { en: 'Incorrect definition, incorrect solution.', es: 'Definición incorrecta, solución incorrecta.' },
        body: {
          en: 'The same principle I hold my students to. The previous version of this portfolio was not badly built; it answered the wrong question. It was built to show ten projects, when what a hiring manager needs is to find the one project that matches the role she is filling and send it to someone else. Once the question changed from show my work to help her decide, the modals, the single URL and the shared share card stopped being implementation details and became the whole problem.',
          es: 'El mismo principio con el que mido a mis estudiantes. La versión anterior de este portfolio no estaba mal construida; respondía la pregunta equivocada. Estaba hecha para mostrar diez proyectos, cuando lo que una hiring manager necesita es encontrar el proyecto que coincide con el puesto que está cubriendo y mandárselo a otra persona. En cuanto la pregunta pasó de mostrar mi trabajo a ayudarla a decidir, las modales, la URL única y la tarjeta compartida dejaron de ser detalles de implementación y pasaron a ser el problema entero.'
        }
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'Eleven case studies now have their own address in two languages, each with its own share card, so a link to one project arrives as that project rather than as a homepage. Seven of the eleven findings shipped with this page, including the one that was leaving the h1 invisible on first paint. The four that did not are written down with the reason, which is the part of an audit that usually goes missing. The design system that came out of it is documented on this page by the stylesheet it describes, so the next case study costs one array of blocks and no new decisions.',
        es: 'Once casos tienen ahora su propia dirección en dos idiomas, cada uno con su tarjeta para compartir, así que el enlace a un proyecto llega como ese proyecto y no como una página de inicio. Siete de los once hallazgos se publicaron junto con esta página, incluido el que dejaba el h1 invisible en el primer pintado. Los cuatro restantes quedan anotados con su motivo, que es la parte de una auditoría que suele desaparecer. El design system que salió de todo esto está documentado en esta página por la misma hoja de estilos que describe, así que el próximo caso cuesta un array de bloques y ninguna decisión nueva.'
      }
    }
  },

  /* ============================================================== 01 */
  {
    slug: 'project-evaluation',
    year: '2026',
    cats: ['lxd', 'pm', 'ux'],
    cover: 'projeval-cover-card.jpg',
    coverAlt: {
      en: 'Project Evaluation and Management e-learning module',
      es: 'Módulo e-learning de Evaluación y Gestión de Proyectos'
    },
    title: {
      en: 'Project Evaluation & Management',
      es: 'Evaluación y Gestión de Proyectos'
    },
    subtitle: {
      en: 'An interactive journey through the project lifecycle',
      es: 'Un recorrido interactivo por el ciclo de vida del proyecto'
    },
    summary: {
      en: 'A SCORM-compliant module that turns project lifecycles, Gantt charts and GitHub workflows into a journey seventh-year informatics students actually want to walk.',
      es: 'Un módulo SCORM que convierte ciclos de vida de proyectos, diagramas de Gantt y flujos de GitHub en un recorrido que los estudiantes de 7mo año de informática realmente quieren transitar.'
    },
    tags: ['iSpring', 'SCORM', 'GitHub Pages', 'GenAI'],
    facts: {
      role:     { en: 'Instructional designer, LXD, front-end, project lead', es: 'Diseño instruccional, LXD, front-end, liderazgo del proyecto' },
      timeline: { en: 'Running since 2024 · third consecutive year, updated 2026', es: 'En curso desde 2024 · tercer año consecutivo, actualizado en 2026' },
      context:  { en: 'Seventh-year Informatics programme, Instituto Leonardo Murialdo', es: '7mo año de Informática, Instituto Leonardo Murialdo' },
      stack:    ['iSpring', 'SCORM', 'HTML/CSS/JS', 'GitHub Pages', 'Figma', 'GenAI'],
      methods:  ['ADDIE', 'Backward Design', 'Project-Based Learning', 'Gantt']
    },
    links: [
      { label: { en: 'Course hub (live)', es: 'Hub de la asignatura (en vivo)' }, url: 'https://lpedaci.github.io/ev_proy-landing-casos/' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'A comprehensive e-learning module for the seventh-year programme at Instituto Leonardo Murialdo. I transformed static theoretical content on project lifecycles, organisational structures and management tools, including GitHub and Gantt charts, into an interactive, SCORM-compliant experience designed for student engagement.',
            es: 'Un módulo de e-learning integral para 7mo año del Instituto Leonardo Murialdo. Transformé contenido teórico estático sobre ciclos de vida de proyectos, estructuras organizacionales y herramientas de gestión, incluyendo GitHub y diagramas de Gantt, en una experiencia interactiva compatible con SCORM, diseñada para el compromiso del estudiante.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'The challenge', es: 'El desafío' },
        p: [
          {
            en: 'The objective was to digitise the Project Evaluation and Management curriculum. The challenge was making dense topics, such as departmentalisation criteria and organisational chart conventions, accessible and dynamic for eighteen-year-old students, moving away from traditional slide-based lectures.',
            es: 'El objetivo fue digitalizar el currículum de Evaluación y Gestión de Proyectos. El desafío consistió en hacer que temas densos, como los criterios de departamentalización y las convenciones de organigramas, resultaran accesibles y dinámicos para estudiantes de 18 años, dejando atrás las clases tradicionales basadas en diapositivas.'
          }
        ]
      },
      {
        t: 'list',
        h: { en: 'The solution: the LXD approach', es: 'La solución: el enfoque LXD' },
        items: [
          {
            lead: { en: 'Interactive framework', es: 'Marco interactivo' },
            body: {
              en: 'iSpring was used to create a non-linear path through the five project phases: initiation, planning, execution, maintenance and closure.',
              es: 'Usé iSpring para crear un recorrido no lineal a través de las cinco fases de un proyecto: inicio, planificación, ejecución, mantenimiento y cierre.'
            }
          },
          {
            lead: { en: 'Tool integration', es: 'Integración de herramientas' },
            body: {
              en: 'The module guides students through real management ecosystems: planning systems (Gantt bars, milestones, dependencies), version control (GitHub and concurrent development) and incident management (tracking errors and customer requests).',
              es: 'El módulo guía a los estudiantes por ecosistemas de gestión reales: sistemas de planificación (barras de Gantt, hitos, dependencias), control de versiones (GitHub y desarrollo concurrente) y gestión de incidencias (seguimiento de errores y pedidos de clientes).'
            }
          },
          {
            lead: { en: 'Assessment strategy', es: 'Estrategia de evaluación' },
            body: {
              en: 'Knowledge checks are integrated into the organisational chart activity, where students analyse global market leaders.',
              es: 'Integré instancias de verificación de conocimientos en la actividad de organigramas, donde los estudiantes analizan a líderes del mercado global.'
            }
          }
        ]
      },
      {
        t: 'roadmap',
        h: { en: 'Work process roadmap: the six project phases', es: 'Roadmap del proceso de trabajo: las seis fases del proyecto' },
        note: {
          en: 'Every team moves through the same six phases, from a real client problem to a published product. The real user is brought back at key stages to validate progress.',
          es: 'Todos los equipos recorren las mismas seis fases, desde el problema de un cliente real hasta un producto publicado. El usuario real es citado en etapas clave para validar el avance.'
        },
        steps: [
          { code: 'E01', title: { en: 'Problem validation', es: 'Validación del problema' }, body: { en: 'Real user, structured interview, diagnosis of the current situation.', es: 'Usuario real, entrevista estructurada, diagnóstico de la situación actual.' } },
          { code: 'E02', title: { en: 'Feasibility study', es: 'Estudio de factibilidad' }, body: { en: 'Technical, management and economic viability, plus benchmarking.', es: 'Viabilidad técnica, de gestión y económica, más benchmarking.' } },
          { code: 'E03', title: { en: 'System design', es: 'Diseño del sistema' }, body: { en: 'Functional and non-functional requirements, OKRs, user profiles.', es: 'Requerimientos funcionales y no funcionales, OKRs, perfiles de usuario.' } },
          { code: 'E04', title: { en: 'HCI prototyping', es: 'Prototipado HCI' }, body: { en: 'Figma mockup, accessibility standards, validation with the user.', es: 'Mockup en Figma, estándares de accesibilidad, validación con el usuario.' } },
          { code: 'E05', title: { en: 'Development', es: 'Desarrollo' }, body: { en: 'Implementation, GitHub repository, landing page published on a real server.', es: 'Implementación, repositorio en GitHub, landing page publicada en servidor real.' } },
          { code: 'E06', title: { en: 'Final presentation', es: 'Presentación final' }, body: { en: 'Slide deck, oral defence, delivery of the complete project folder.', es: 'Presentación en diapositivas, defensa oral, entrega de la carpeta de proyecto completa.' } }
        ]
      },
      {
        t: 'callout',
        h: { en: 'Incorrect definition, incorrect solution.', es: 'Definición incorrecta, solución incorrecta.' },
        body: {
          en: 'Hypothetical projects are not accepted: every team starts from a concrete user with a concrete need, applies a structured interview to separate symptoms from root causes, and brings that same user back at key stages to validate progress. Not a single line of code is written before the diagnosis is complete.',
          es: 'No se admiten proyectos hipotéticos: cada equipo parte de un usuario concreto con una necesidad concreta, aplica una entrevista estructurada para separar síntomas de causas raíz, y vuelve a citar a ese mismo usuario en etapas clave para validar el avance. No se escribe una sola línea de código antes de completar el diagnóstico.'
        }
      },
      {
        t: 'cases',
        h: { en: 'Two worked case studies that model the full journey', es: 'Dos casos de estudio que modelan el recorrido completo' },
        note: {
          en: 'To show students what done looks like at every phase, I designed and documented two complete reference cases, each with its own case site and presentation deck. Teams use them as worked examples while building their own projects.',
          es: 'Para mostrarles a los estudiantes cómo se ve cada fase terminada, diseñé y documenté dos casos de referencia completos, cada uno con su propio sitio de caso y su presentación. Los equipos los usan como ejemplos resueltos mientras construyen sus propios proyectos.'
        },
        items: [
          {
            tag: { en: 'Case 01 · Retail', es: 'Caso 01 · Comercio' },
            title: { en: 'Stock management for a neighbourhood hardware store', es: 'Gestión de stock para una ferretería de barrio' },
            body: {
              en: 'A twenty-two-year-old family business losing sales to stockouts, running on outdated spreadsheets and paper. The case traces symptoms back to root causes and designs a tailored stock and sales-history system.',
              es: 'Un comercio familiar con 22 años de historia que pierde ventas por quiebres de stock, trabajando con planillas desactualizadas y papel. El caso rastrea síntomas hasta causas raíz y diseña un sistema a medida de stock e historial de ventas.'
            },
            links: [
              { label: { en: 'Case site', es: 'Sitio del caso' }, url: 'https://lpedaci.github.io/ev_proy-modulo02-caso01/' },
              { label: { en: 'Slide deck', es: 'Presentación' }, url: 'https://lpedaci.github.io/ev_proy-modulo02-caso01-slides/' }
            ]
          },
          {
            tag: { en: 'Case 02 · Hardware + software', es: 'Caso 02 · Hardware + software' },
            title: { en: 'SensorOffice, environmental monitoring for an accounting firm', es: 'SensorOffice, monitoreo ambiental para un estudio contable' },
            body: {
              en: 'Three offices, rising electricity bills and no air-quality data. The case designs a sensor network with a web dashboard, alerts and remote control, combining hardware and software decisions.',
              es: 'Tres oficinas, factura de luz en alza y ningún dato de calidad de aire. El caso diseña una red de sensores con dashboard web, alertas y control remoto, combinando decisiones de hardware y software.'
            },
            links: [
              { label: { en: 'Case site', es: 'Sitio del caso' }, url: 'https://lpedaci.github.io/ev_proy-modulo02-caso02/' },
              { label: { en: 'Slide deck', es: 'Presentación' }, url: 'https://lpedaci.github.io/ev_proy-modulo02-caso02-slides/' }
            ]
          }
        ]
      },
      {
        t: 'live',
        h: { en: 'Interactive course hub, live', es: 'Hub interactivo de la asignatura, en vivo' },
        note: {
          en: 'I designed and hand-coded the interactive HTML modules and the course hub, deployed on GitHub Pages. The hub centralises the six project phases, the two real client case studies, the course modules, the Gantt planning sheet and the delivery guidelines.',
          es: 'Diseñé y programé a mano los módulos interactivos en HTML y el hub de la asignatura, publicados en GitHub Pages. El hub centraliza las seis fases del proyecto, los dos casos de estudio con clientes reales, los módulos de contenido, el cronograma Gantt y las pautas de entrega.'
        },
        src: 'https://lpedaci.github.io/ev_proy-landing-casos/',
        url: 'https://lpedaci.github.io/ev_proy-landing-casos/',
        label: { en: 'Course hub', es: 'Hub de la asignatura' }
      },
      {
        t: 'embed',
        kind: 'doc',
        h: { en: 'Module preview', es: 'Vista previa del módulo' },
        src: 'https://drive.google.com/file/d/1Xm86v6jKeMypuRnhMuxaunQLTvCZDBpW/preview',
        host: 'Google Drive',
        label: { en: 'Course module document', es: 'Documento del módulo' }
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The module is now in its third consecutive year of use. Teams arrive at the final defence with a validated problem, a published landing page and a real user who has seen the product, rather than a hypothetical exercise handed in on paper.',
        es: 'El módulo va por su tercer año consecutivo de uso. Los equipos llegan a la defensa final con un problema validado, una landing publicada y un usuario real que vio el producto, en lugar de un ejercicio hipotético entregado en papel.'
      }
    }
  },

  /* ============================================================== 02 */
  {
    slug: 'operating-systems',
    year: '2026',
    cats: ['lxd', 'ux'],
    cover: 'so-cover-card.jpg',
    coverAlt: {
      en: 'Operating Systems interactive learning site: partitioned disk diagram',
      es: 'Sitio interactivo de Sistemas Operativos: diagrama de disco particionado'
    },
    title: {
      en: 'Operating Systems: storage & system setup',
      es: 'Sistemas Operativos: almacenamiento y seteo del S.O.'
    },
    subtitle: {
      en: 'Making the least visible part of the syllabus manipulable',
      es: 'Volver manipulable la parte menos visible del programa'
    },
    summary: {
      en: 'Two hand-coded interactive sites plus a randomised self-assessment engine, built around retrieval practice rather than memorisation.',
      es: 'Dos sitios interactivos programados a mano y un motor de autoevaluación aleatorizado, construidos alrededor de la práctica de recuperación y no de la memorización.'
    },
    tags: ['HTML/CSS/JS', 'GitHub Pages', 'Retrieval practice'],
    facts: {
      role:     { en: 'Instructional design, LXD, front-end development, assessment design', es: 'Diseño instruccional, LXD, desarrollo front-end, diseño de evaluación' },
      timeline: { en: '2026', es: '2026' },
      context:  { en: 'Units 2 and 3, fifth-year Informatics, Operating Systems Lab, Instituto Leonardo Murialdo', es: 'Unidades 2 y 3, 5to año de Informática, Laboratorio de Sistemas Operativos, Instituto Leonardo Murialdo' },
      stack:    ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      methods:  ['Backward Design', 'Retrieval Practice', 'Testing Effect', 'Case-Based Learning']
    },
    links: [
      { label: { en: 'Unit 2, storage', es: 'Unidad 2, almacenamiento' }, url: 'https://lpedaci.github.io/so_unidad-02/' },
      { label: { en: 'Unit 3, OS setup', es: 'Unidad 3, seteo del SO' }, url: 'https://lpedaci.github.io/so_unidad-03/' },
      { label: { en: 'Self-assessment module', es: 'Módulo de autoevaluación' }, url: 'https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'Two fully interactive HTML sites that cover the hardest to visualise part of the Operating Systems syllabus: storage management (Unit 2) and OS setup (Unit 3). Instead of static slides, students explore clickable disk diagrams, traffic-light comparison tables and decision trees, and then test themselves with a randomised self-assessment module. Everything is deployed on GitHub Pages, responsive, and written to work on a phone or on a lab PC.',
            es: 'Dos sitios HTML interactivos que cubren la parte más difícil de visualizar del programa de Sistemas Operativos: la gestión de almacenamiento (Unidad 2) y el seteo del SO (Unidad 3). En lugar de diapositivas estáticas, los estudiantes exploran diagramas de disco clicables, tablas comparativas tipo semáforo y árboles de decisión, y luego se ponen a prueba con un módulo de autoevaluación al azar. Todo publicado en GitHub Pages, responsive y pensado para funcionar tanto en el celular como en la PC del laboratorio.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'The challenge', es: 'El desafío' },
        p: [
          {
            en: 'Storage and OS configuration are notoriously abstract: partition schemes (MBR vs GPT), file systems (FAT32, NTFS, exFAT), firmware modes (BIOS/UEFI) and the setup steps after installation (licensing, user accounts, drivers, security). Traditional lectures leave students memorising tables without understanding why each choice matters. The goal was to make every one of these concepts manipulable and tied to a real decision.',
            es: 'El almacenamiento y la configuración del SO son notoriamente abstractos: esquemas de partición (MBR vs GPT), sistemas de archivos (FAT32, NTFS, exFAT), modos de firmware (BIOS/UEFI) y los pasos de seteo posteriores a la instalación (licencias, cuentas de usuario, drivers, seguridad). La clase tradicional deja a los estudiantes memorizando tablas sin entender por qué cada elección importa. El objetivo fue volver manipulable cada uno de esos conceptos y anclarlo a una decisión real.'
          }
        ]
      },
      {
        t: 'list',
        h: { en: 'The solution: the LXD approach', es: 'La solución: el enfoque LXD' },
        items: [
          {
            lead: { en: 'Interactive diagrams', es: 'Diagramas interactivos' },
            body: {
              en: 'Clickable disk maps where each segment (primary, extended, logical, EFI, MSR, recovery) reveals its role, size and file system, for both MBR and GPT layouts.',
              es: 'Mapas de disco clicables donde cada segmento (primaria, extendida, lógica, EFI, MSR, recovery) revela su función, tamaño y sistema de archivos, tanto en MBR como en GPT.'
            }
          },
          {
            lead: { en: 'Decision-first framing', es: 'Enfoque orientado a la decisión' },
            body: {
              en: 'A firmware to scheme to use decision tree, so students choose a partition scheme the way a technician actually would, not by rote.',
              es: 'Un árbol de decisión firmware, esquema y uso, para que el estudiante elija el esquema de partición como lo haría un técnico, no de memoria.'
            }
          },
          {
            lead: { en: 'Traffic-light comparison tables', es: 'Tablas comparativas tipo semáforo' },
            body: {
              en: 'File systems and format types (quick, full, low-level) compared side by side and colour-coded for fast scanning.',
              es: 'Sistemas de archivos y tipos de formateo (rápido, completo, bajo nivel) comparados lado a lado y codificados por color para lectura rápida.'
            }
          },
          {
            lead: { en: 'Real user cases, A to F', es: 'Casos de usuario reales, A a F' },
            body: {
              en: 'An activity where teams design the disk for a concrete user profile and justify their choices.',
              es: 'Una actividad donde los equipos diseñan el disco para un perfil de usuario concreto y justifican sus decisiones.'
            }
          },
          {
            lead: { en: 'Built-in teacher kit', es: 'Kit docente incorporado' },
            body: {
              en: 'An eighty-minute lesson plan and a password-protected teacher area, so the same material serves the class and the instructor.',
              es: 'Una guía de clase de 80 minutos y un área docente protegida con contraseña, para que el mismo material sirva a la clase y al profesor.'
            }
          }
        ]
      },
      {
        t: 'live',
        h: { en: 'Unit 2 · Storage management, live', es: 'Unidad 2 · Gestión de almacenamiento, en vivo' },
        note: {
          en: 'Partitioning, formatting and file systems. Explore the interactive disk diagrams, the FAT32/NTFS/exFAT comparison, the build guide and the which scheme should I choose decision tree, right here.',
          es: 'Particionado, formateo y sistemas de archivos. Explorá los diagramas de disco interactivos, la comparativa FAT32/NTFS/exFAT, la guía de armado y el árbol de decisión sobre qué esquema elegir, acá mismo.'
        },
        src: 'https://lpedaci.github.io/so_unidad-02/',
        url: 'https://lpedaci.github.io/so_unidad-02/',
        label: { en: 'Unit 2 site', es: 'Sitio de la Unidad 2' }
      },
      {
        t: 'live',
        h: { en: 'Unit 3 · Operating system setup, live', es: 'Unidad 3 · Seteo del sistema operativo, en vivo' },
        note: {
          en: 'From hardware and installation to post-install configuration. Module 1 is an interactive interconnection map (storage, live USB, BIOS/UEFI, install flow, virtualisation); Module 2 is an integrated guide to licensing and activation, user accounts and roles, control panel, drivers, firewall and security.',
          es: 'Desde el hardware y la instalación hasta la configuración posterior. El Módulo 1 es un mapa de interconexión interactivo (almacenamiento, live USB, BIOS/UEFI, flujo de instalación, virtualización); el Módulo 2 es un apunte integrador de licencias y activación, cuentas de usuario y roles, panel de control, drivers, firewall y seguridad.'
        },
        src: 'https://lpedaci.github.io/so_unidad-03/',
        url: 'https://lpedaci.github.io/so_unidad-03/',
        label: { en: 'Unit 3 site', es: 'Sitio de la Unidad 3' }
      },
      {
        t: 'prose',
        h: { en: 'The assessment module', es: 'El módulo evaluativo' },
        p: [
          {
            en: 'The centrepiece of Unit 3 is a self-assessment engine that draws random questions from both units. Students pick a round, answer one question at a time, then verify and read an explanation before moving on. Both the questions and the order of their options are reshuffled on every attempt, so nothing is memorised as the answer is B.',
            es: 'La pieza central de la Unidad 3 es un motor de autoevaluación que toma preguntas al azar de ambas unidades. El estudiante elige una ronda, responde de a una pregunta, verifica y lee una explicación antes de continuar. Tanto las preguntas como el orden de sus opciones se rebarajan en cada intento, así no se memoriza que la respuesta es la B.'
          }
        ]
      },
      {
        t: 'stats',
        items: [
          { value: '20', label: { en: 'Round 1 · quick review, balanced easy to hard', es: 'Ronda 1 · repaso rápido, equilibrio de fácil a difícil' } },
          { value: '40', label: { en: 'Round 2 · challenge, weighted to medium and hard', es: 'Ronda 2 · desafío, con más peso en medias y difíciles' } },
          { value: '2', label: { en: 'units feeding a single question pool', es: 'unidades que alimentan un único banco de preguntas' } }
        ]
      },
      {
        t: 'callout',
        h: { en: 'Its purpose: learning, not grading.', es: 'Su finalidad: aprender, no calificar.' },
        body: {
          en: 'The module is designed around retrieval practice and the testing effect: recalling an answer, and immediately seeing why it is right or wrong, strengthens memory far more than re-reading. Randomisation prevents rote memorisation of positions, the per-question explanations turn every mistake into a micro-lesson, and because it is self-paced and ungraded, students can practise without pressure until the concepts stick.',
          es: 'El módulo está diseñado en torno a la práctica de recuperación y el efecto del testeo: recuperar una respuesta, y ver de inmediato por qué es correcta o incorrecta, fija la memoria mucho más que releer. La aleatorización evita memorizar posiciones, las explicaciones por pregunta convierten cada error en una micro-lección, y al ser autoadministrado y sin nota, los estudiantes pueden practicar sin presión hasta que el concepto se afiance.'
        }
      },
      {
        t: 'live',
        h: { en: 'Try the self-assessment module', es: 'Probar el módulo de autoevaluación' },
        src: 'https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html',
        url: 'https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html',
        label: { en: 'Self-assessment', es: 'Autoevaluación' }
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The two units now form a single coherent learning ecosystem: interactive theory, a hands-on activity with real user cases, a ready-to-run eighty-minute lesson plan for the instructor, and a self-assessment loop that lets students measure their own understanding. Building it all myself kept full control over the pedagogy, the accessibility and the visual language, and it ships as a free, always-available resource reachable from any device.',
        es: 'Las dos unidades forman ahora un ecosistema de aprendizaje único y coherente: teoría interactiva, una actividad práctica con casos de usuario reales, una guía de clase de 80 minutos lista para usar por el docente, y un circuito de autoevaluación que permite a los estudiantes medir su propia comprensión. Desarrollarlo íntegramente me permitió mantener el control total de la pedagogía, la accesibilidad y el lenguaje visual, y se entrega como un recurso gratuito y siempre disponible, accesible desde cualquier dispositivo.'
      }
    }
  },

  /* ============================================================== 03 */
  {
    slug: 'teacher-digital-era',
    year: '2025',
    cats: ['lxd', 'motion'],
    cover: 'teacher-cover-card.jpg',
    coverAlt: {
      en: 'The Teacher role in the Digital Era, video still',
      es: 'El rol docente en la era digital, fotograma del video'
    },
    title: {
      en: 'The teacher’s role in the digital era',
      es: 'El rol docente en la era digital'
    },
    subtitle: {
      en: 'A paradigm shift, argued in two minutes of motion',
      es: 'Un cambio de paradigma, argumentado en dos minutos de motion'
    },
    summary: {
      en: 'A conceptual video on the shift from banking education to a learner-centred facilitator model, built on the TPACK framework.',
      es: 'Un video conceptual sobre el paso de la educación bancaria a un modelo facilitador centrado en el estudiante, basado en el marco TPACK.'
    },
    tags: ['TPACK', 'Motion graphics', 'GenAI'],
    facts: {
      role:     { en: 'Concept, script, instructional design, motion', es: 'Concepto, guion, diseño instruccional, motion' },
      timeline: { en: 'October 2025', es: 'Octubre 2025' },
      context:  { en: 'Conceptual video, in Spanish', es: 'Video conceptual, en español' },
      stack:    ['Adobe After Effects', 'Adobe Premiere', 'GenAI'],
      methods:  ['TPACK', 'Critical pedagogy (Freire)', 'Litwin']
    },
    links: [
      { label: { en: 'Watch on YouTube', es: 'Ver en YouTube' }, url: 'https://www.youtube.com/watch?v=ShhtVEM_7c4' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'The challenge', es: 'El desafío' },
        p: [
          {
            en: 'To communicate the necessity of a pedagogical shift in the digital age. The goal was to move beyond the traditional content-delivery model and illustrate how teachers can become learning experience designers who foster student participation and autonomy.',
            es: 'Comunicar la necesidad de un cambio pedagógico en la era digital. El objetivo fue superar el modelo tradicional de transmisión de contenidos e ilustrar cómo los docentes pueden convertirse en diseñadores de experiencias de aprendizaje que fomentan la participación y la autonomía del estudiante.'
          }
        ]
      },
      {
        t: 'list',
        h: { en: 'The solution: the LXD strategy', es: 'La solución: la estrategia LXD' },
        items: [
          {
            lead: { en: 'Conceptual depth', es: 'Profundidad conceptual' },
            body: {
              en: 'Key educational theories from Paulo Freire (critique of banking education) and Edith Litwin (technology as a medium for possibilities) are integrated into the argument.',
              es: 'Integré teorías educativas clave de Paulo Freire (crítica a la educación bancaria) y Edith Litwin (la tecnología como medio de posibilidades).'
            }
          },
          {
            lead: { en: 'Framework analysis', es: 'Análisis de marcos' },
            body: {
              en: 'The TPACK model (Technological Pedagogical Content Knowledge) is detailed, showing how teachers must synthesise subject matter, pedagogy and technology to create effective learning environments.',
              es: 'Detallé el modelo TPACK (Conocimiento Tecnológico Pedagógico del Contenido), mostrando cómo el docente debe sintetizar contenido, pedagogía y tecnología para crear entornos de aprendizaje efectivos.'
            }
          },
          {
            lead: { en: 'Visionary outcome', es: 'Resultado visionario' },
            body: {
              en: 'The video defines the modern educator not as a transmitter of facts, but as a manager of learning who teaches students how to learn.',
              es: 'El video define al educador moderno no como transmisor de datos, sino como gestor del aprendizaje que enseña a los estudiantes a aprender.'
            }
          }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'Watch the video', es: 'Ver el video' },
        src: 'https://www.youtube.com/embed/ShhtVEM_7c4',
        host: 'YouTube',
        label: { en: 'Video on the teacher’s role', es: 'Video sobre el rol docente' },
        open: 'https://www.youtube.com/watch?v=ShhtVEM_7c4'
      }
    ],
    outcome: null
  },

  /* ============================================================== 04 */
  {
    slug: 'intersafe',
    year: '2024',
    cats: ['ux', 'data', 'pm', 'lxd'],
    cover: 'intersafe-cover-card.jpg',
    coverAlt: {
      en: 'INTERSAFE Season 2 poster mockups',
      es: 'Mockups de afiches de INTERSAFE Temporada 2'
    },
    title: { en: 'INTERSAFE Season 2', es: 'INTERSAFE Temporada 2' },
    subtitle: {
      en: 'Humanising digital safety, with 1.741 people telling us where it hurts',
      es: 'Humanizar la seguridad digital, con 1.741 personas diciéndonos dónde duele'
    },
    summary: {
      en: 'A large-scale multimedia initiative on digital safety: eleven teams, a massive research phase, and an interactive podcast ecosystem built on what the data said.',
      es: 'Una iniciativa multimedia a gran escala sobre seguridad digital: once equipos, una fase de investigación masiva y un ecosistema de podcast interactivo construido sobre lo que dijeron los datos.'
    },
    tags: ['UX research', 'Project management', 'GenAI'],
    facts: {
      role:     { en: 'Lead UX researcher, project manager, visual identity', es: 'Lead UX Researcher, project manager, identidad visual' },
      timeline: { en: 'August to November 2024', es: 'Agosto a noviembre 2024' },
      context:  { en: 'Multimedia digital safety initiative, 11 units', es: 'Iniciativa multimedia de seguridad digital, 11 unidades' },
      stack:    ['Genially', 'Adobe CC', 'Adobe Firefly', 'Runway AI', 'ElevenLabs', 'TeamGantt'],
      methods:  ['UX Research', 'Surveys and interviews', 'Gantt', 'Agile']
    },
    links: [
      { label: { en: 'Interactive project', es: 'Proyecto interactivo' }, url: 'https://view.genially.com/6797a346ac4b87277d2c7941/interactive-content-intersafe-season-2-an-instructionally-designed-project' },
      { label: { en: 'Podcast on Spotify', es: 'Podcast en Spotify' }, url: 'https://open.spotify.com/episode/5V0kofeJ9cQxtJWFmDMl2V' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'Digital safety is often perceived as a dry or technical topic. My goal with INTERSAFE Season 2 was to bridge the gap between complex cybersecurity risks and the everyday user. By transforming a podcast into a multidisciplinary learning ecosystem, we created a space where safety becomes intuitive and engaging rather than intimidating.',
            es: 'La seguridad digital suele percibirse como un tema árido o demasiado técnico. Mi objetivo con INTERSAFE Temporada 2 fue tender un puente entre los riesgos complejos de ciberseguridad y el usuario cotidiano. Al transformar un podcast en un ecosistema de aprendizaje multidisciplinario, creamos un espacio donde la seguridad se vuelve intuitiva y atractiva en lugar de intimidante.'
          }
        ]
      },
      {
        t: 'stats',
        items: [
          { value: '1.741', label: { en: 'research participants through surveys and interviews', es: 'participantes de investigación en encuestas y entrevistas' } },
          { value: '11', label: { en: 'specialised teams coordinated', es: 'equipos especializados coordinados' } },
          { value: '5', label: { en: 'months of production, tracked on Gantt', es: 'meses de producción, seguidos con Gantt' } }
        ]
      },
      {
        t: 'embed',
        kind: 'interactive',
        h: { en: 'The interactive project', es: 'El proyecto interactivo' },
        src: 'https://view.genially.com/6797a346ac4b87277d2c7941/interactive-content-intersafe-season-2-an-instructionally-designed-project',
        host: 'Genially',
        label: { en: 'INTERSAFE interactive project', es: 'Proyecto interactivo INTERSAFE' },
        open: 'https://view.genially.com/6797a346ac4b87277d2c7941/interactive-content-intersafe-season-2-an-instructionally-designed-project'
      },
      {
        t: 'prose',
        h: { en: 'UX research and interaction design', es: 'Investigación UX y diseño de interacción' },
        p: [
          {
            en: 'I served as the lead UX researcher, directing teams to uncover the real-world challenges of our audience. We conducted a massive research phase involving 1.741 participants through surveys and interviews to ensure our content was truly data-driven. From there I crafted interaction flows and developed low to high fidelity prototypes, ensuring the digital podcast experience was seamless, accessible and centred on the user journey.',
            es: 'Como Lead UX Researcher, dirigí equipos para descubrir los desafíos reales de nuestra audiencia. Realizamos una fase masiva de investigación con 1.741 participantes mediante encuestas y entrevistas, garantizando que el contenido estuviera verdaderamente guiado por datos. A partir de ahí, diseñé flujos de interacción y desarrollé prototipos de baja a alta fidelidad, asegurando que la experiencia del podcast digital fuera fluida, accesible y centrada en el recorrido del usuario.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'intersafe-01.jpg', alt: { en: 'INTERSAFE research and prototypes', es: 'Investigación y prototipos de INTERSAFE' } },
          { src: 'intersafe-02.jpg', alt: { en: 'INTERSAFE interaction flows', es: 'Flujos de interacción de INTERSAFE' } }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Leadership and project management', es: 'Liderazgo y gestión del proyecto' },
        p: [
          {
            en: 'Managing the complexity of a five-month production required high-level coordination. As project manager I led eleven specialised teams, including content creators, audiovisual producers and moderators. Using Gantt charts for rigorous progress tracking, I ensured every moving part stayed aligned with our deadlines, maintaining a cohesive narrative across all eleven units.',
            es: 'Gestionar la complejidad de una producción de cinco meses exigió coordinación de alto nivel. Como project manager lideré once equipos especializados, incluyendo creadores de contenido, productores audiovisuales y moderadores. Con diagramas de Gantt para un seguimiento riguroso del avance, aseguré que cada pieza se mantuviera alineada con los plazos, sosteniendo una narrativa cohesiva a lo largo de las once unidades.'
          }
        ]
      },
      {
        t: 'gallery',
        wide: true,
        images: [
          { src: 'intersafe-gantt.jpg', alt: { en: 'TeamGantt project tracking chart', es: 'Diagrama de seguimiento en TeamGantt' } }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Multimedia and AI integration', es: 'Multimedia e integración de IA' },
        p: [
          {
            en: 'To enhance the educational focus, I leveraged the strategic use of technology. I designed the project visual identity using Adobe Creative Suite and integrated generative AI (Adobe Firefly, Runway AI, ElevenLabs) to produce high-quality imagery, video and professional audio, scaling our production capabilities while delivering critical safety information.',
            es: 'Para potenciar el foco educativo, aproveché la tecnología de forma estratégica. Diseñé la identidad visual del proyecto con Adobe Creative Suite e integré IA generativa (Adobe Firefly, Runway AI, ElevenLabs) para producir imágenes, video y audio profesional de alta calidad, escalando nuestra capacidad de producción sin perder de vista la información crítica de seguridad.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'intersafe-03.jpg', alt: { en: 'INTERSAFE visual identity', es: 'Identidad visual de INTERSAFE' } },
          { src: 'intersafe-04.jpg', alt: { en: 'INTERSAFE AI-enhanced content', es: 'Contenido de INTERSAFE potenciado con IA' } },
          { src: 'intersafe-shots.jpg', alt: { en: 'INTERSAFE social media content', es: 'Contenido de INTERSAFE para redes sociales' } },
          { src: 'intersafe-poster.jpg', alt: { en: 'INTERSAFE outdoor poster mockup', es: 'Mockup de afiche en vía pública de INTERSAFE' } }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'The project video', es: 'El video del proyecto' },
        src: 'https://player.vimeo.com/video/1025598739',
        host: 'Vimeo',
        label: { en: 'INTERSAFE Season 2 teaser', es: 'Teaser de INTERSAFE Temporada 2' },
        open: 'https://vimeo.com/1025598739'
      },
      {
        t: 'embed',
        kind: 'audio',
        h: { en: 'Listen to an episode', es: 'Escuchar un episodio' },
        src: 'https://open.spotify.com/embed/episode/5V0kofeJ9cQxtJWFmDMl2V',
        host: 'Spotify',
        label: { en: 'INTERSAFE podcast episode', es: 'Episodio del podcast INTERSAFE' },
        open: 'https://open.spotify.com/episode/5V0kofeJ9cQxtJWFmDMl2V',
        ratio: 'audio'
      },
      {
        t: 'embed',
        kind: 'doc',
        h: { en: 'Project documentation', es: 'Documentación del proyecto' },
        note: { en: 'In Spanish.', es: 'En español.' },
        src: 'https://drive.google.com/file/d/1YEhCi7Lwth9i8dXqCUGJxMHQpndhpyX0/preview',
        host: 'Google Drive',
        label: { en: 'INTERSAFE project documentation', es: 'Documentación del proyecto INTERSAFE' }
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The project launched a comprehensive digital safety ecosystem: an interactive podcast, a social media presence and a dedicated platform. By combining robust data analysis from our research with innovative visual storytelling, we did not just deliver information, we gave a large community the means to take ownership of their own digital security.',
        es: 'El proyecto lanzó un ecosistema integral de seguridad digital: un podcast interactivo, presencia en redes sociales y una plataforma dedicada. Al combinar un análisis de datos robusto con narrativa visual innovadora, no solo entregamos información: le dimos a una comunidad amplia los medios para apropiarse de su propia seguridad digital.'
      }
    }
  },

  /* ============================================================== 05 */
  {
    slug: 'it-infrastructure',
    year: '2022-2024',
    cats: ['lxd', 'pm', 'data'],
    cover: 'itinfra-cover-card.jpg',
    coverAlt: {
      en: 'Computer lab hardware maintenance',
      es: 'Mantenimiento de hardware en el laboratorio de informática'
    },
    title: {
      en: 'IT infrastructure & learning environment standardisation',
      es: 'Estandarización de infraestructura IT y entornos de aprendizaje'
    },
    subtitle: {
      en: 'A 96-page single source of truth, and the video ecosystem that made it usable',
      es: 'Una única fuente de verdad de 96 páginas, y el ecosistema de video que la hizo usable'
    },
    summary: {
      en: 'Auditing hardware and software across an institution, then documenting it so thoroughly that the next team could run it without me.',
      es: 'Auditar hardware y software en toda una institución, y documentarlo con tanto detalle que el siguiente equipo pudiera sostenerlo sin mí.'
    },
    tags: ['SOP', 'Technical writing', 'Video training'],
    facts: {
      role:     { en: 'Instructional design, technical writing, systems analysis, team lead', es: 'Diseño instruccional, redacción técnica, análisis de sistemas, liderazgo de equipo' },
      timeline: { en: 'July 2022 to December 2024', es: 'Julio 2022 a diciembre 2024' },
      context:  { en: 'Institution-wide computer labs, Instituto Leonardo Murialdo', es: 'Laboratorios de informática institucionales, Instituto Leonardo Murialdo' },
      stack:    ['Windows 10 / 11', 'Camtasia', 'YouTube', 'Microsoft Office'],
      methods:  ['SOP', 'Benchmarking', 'System hardening', 'UX of the workstation']
    },
    links: [
      { label: { en: 'Video tutorial series', es: 'Serie de videotutoriales' }, url: 'https://www.youtube.com/playlist?list=PLGPl-6kg2v3ZUVTAVp7reFRjV0JRSbk8Z' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'Educational technology is only as effective as the infrastructure supporting it. My mission was to resolve inconsistent lab performance by auditing hardware and software to ensure every workstation met the specific pedagogical needs of our students. Beyond the technical setup, this project was about creating a reliable and secure digital workspace for different educational levels.',
            es: 'La tecnología educativa es tan efectiva como la infraestructura que la sostiene. Mi misión fue resolver el rendimiento desparejo de los laboratorios auditando hardware y software para asegurar que cada puesto de trabajo respondiera a las necesidades pedagógicas específicas de los estudiantes. Más allá de la configuración técnica, este proyecto se trató de crear un espacio digital confiable y seguro para distintos niveles educativos.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Instructional ecosystem and documentation', es: 'Ecosistema instruccional y documentación' },
        p: [
          {
            en: 'To ensure the long-term sustainability of these improvements, I co-authored an extensive 96-page technical guide that functions as a Standard Operating Procedure, in Spanish. The documentation was meticulously tailored for both Windows 10 and 11 environments to provide a single source of truth for technical staff. Recognising that people have different learning styles, I integrated a series of YouTube video tutorials to provide visual demonstrations, ensuring real-time execution accuracy and on-demand support for the lab team.',
            es: 'Para garantizar la sostenibilidad de estas mejoras a largo plazo, coescribí una guía técnica de 96 páginas que funciona como Procedimiento Operativo Estándar (SOP), en español. Esta documentación fue adaptada meticulosamente para entornos Windows 10 y 11, ofreciendo una única fuente de verdad para el personal técnico. Reconociendo que las personas aprenden de formas distintas, integré una serie de videotutoriales en YouTube con demostraciones visuales, asegurando precisión de ejecución en tiempo real y soporte a demanda para el equipo de laboratorio.'
          }
        ]
      },
      {
        t: 'embed',
        kind: 'doc',
        h: { en: 'The 96-page SOP guide', es: 'La guía SOP de 96 páginas' },
        src: 'https://drive.google.com/file/d/1jpjXhTmNlIZ842HnXG80JeCsZo8f5JhO/preview',
        host: 'Google Drive',
        label: { en: 'SOP guide, 96 pages', es: 'Guía SOP, 96 páginas' }
      },
      {
        t: 'prose',
        h: { en: 'System strategy and analysis', es: 'Estrategia y análisis de sistemas' },
        p: [
          {
            en: 'To maximise resource efficiency, I conducted a comprehensive software and hardware audit. This analysis allowed us to design personalised operating system versions that adapt to the physical location of the labs and the specific needs of the curriculum.',
            es: 'Para maximizar la eficiencia de los recursos, realicé una auditoría integral de software y hardware. Este análisis nos permitió diseñar versiones personalizadas del sistema operativo que se adaptan a la ubicación física de los laboratorios y a las necesidades específicas del currículum.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'User experience and environment', es: 'Experiencia de usuario y entorno' },
        p: [
          {
            en: 'I designed unique user profiles and secure access credentials tailored to each educational level and modality. By pre-configuring workspaces with the specific tools and software used in each course, we reduced digital friction, allowing students to focus purely on their learning objectives.',
            es: 'Diseñé perfiles de usuario únicos y credenciales de acceso seguras adaptadas a cada nivel y modalidad educativa. Al preconfigurar los espacios de trabajo con las herramientas y el software específicos de cada curso, redujimos la fricción digital, permitiendo que los estudiantes se enfoquen puramente en sus objetivos de aprendizaje.'
          },
          {
            en: 'To ensure long-term stability, I implemented system hardening by locking Windows environments against unauthorised actions that could degrade performance, and restricted access to storage units across different user profiles to protect data integrity and student privacy.',
            es: 'Para garantizar estabilidad a largo plazo, implementé hardening del sistema bloqueando los entornos Windows contra acciones no autorizadas que pudieran degradar el rendimiento, y restringí el acceso a unidades de almacenamiento según los perfiles de usuario para proteger la integridad de los datos y la privacidad de los estudiantes.'
          }
        ]
      },
      {
        t: 'gallery',
        h: { en: 'The configured environments', es: 'Los entornos configurados' },
        images: [
          { src: 'itinfra-menu-sup.jpg', alt: { en: 'Customised Windows 10 menu for upper levels', es: 'Menú de Windows 10 personalizado para niveles superiores' } },
          { src: 'itinfra-inicio.jpg', alt: { en: 'Multi-account start screen', es: 'Pantalla de inicio con múltiples cuentas' } },
          { src: 'itinfra-menu-w11.jpg', alt: { en: 'Windows 11 menu with user accounts', es: 'Menú de Windows 11 con cuentas de usuario' } },
          { src: 'itinfra-panel.jpg', alt: { en: 'Control panel configuration for primary level', es: 'Configuración del panel de control para nivel primario' } },
          { src: 'itinfra-tema.jpg', alt: { en: 'Theme personalisation restrictions', es: 'Restricciones de personalización del tema' } },
          { src: 'itinfra-restriccion.jpg', alt: { en: 'Storage access restriction settings', es: 'Configuración de restricción de acceso al almacenamiento' } }
        ]
      },
      {
        t: 'roadmap',
        h: { en: 'The maintenance workflow', es: 'El flujo de mantenimiento' },
        note: {
          en: 'I led the 2023 internship team through a rigorous five-step process, supported by the new documentation ecosystem.',
          es: 'Lideré al equipo de pasantías 2023 a través de un riguroso proceso de cinco pasos, apoyado en el nuevo ecosistema de documentación.'
        },
        steps: [
          { code: 'M01', title: { en: 'Verification and benchmarking', es: 'Verificación y benchmarking' }, body: { en: 'Technical audit of all components.', es: 'Auditoría técnica de todos los componentes.' } },
          { code: 'M02', title: { en: 'Hardware refresh', es: 'Renovación de hardware' }, body: { en: 'Substituting low-performance legacy PCs with updated hardware.', es: 'Sustitución de PCs antiguas de bajo rendimiento por hardware actualizado.' } },
          { code: 'M03', title: { en: 'OS provisioning', es: 'Aprovisionamiento de SO' }, body: { en: 'Installing personalised OS versions based on lab profiles.', es: 'Instalación de versiones personalizadas del sistema operativo según el perfil de cada laboratorio.' } },
          { code: 'M04', title: { en: 'System optimisation', es: 'Optimización del sistema' }, body: { en: 'Fine-tuning software to hardware components to boost performance.', es: 'Ajuste fino del software a los componentes de hardware para mejorar el rendimiento.' } },
          { code: 'M05', title: { en: 'Assembly and habilitation', es: 'Ensamblado y habilitación' }, body: { en: 'Final hardware mounting and enabling workstations for student use.', es: 'Montaje final del hardware y habilitación de los puestos para uso estudiantil.' } }
        ]
      },
      {
        t: 'gallery',
        wide: true,
        images: [
          { src: 'itinfra-01.jpg', alt: { en: 'Hardware audit and benchmarking', es: 'Auditoría de hardware y benchmarking' } },
          { src: 'itinfra-02.jpg', alt: { en: 'System optimisation work', es: 'Trabajo de optimización del sistema' } }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'Watch: hardware refresh', es: 'Ver: renovación de hardware' },
        src: 'https://www.youtube.com/embed/2mYelJrOnnY',
        host: 'YouTube',
        label: { en: 'Hardware refresh tutorial', es: 'Tutorial de renovación de hardware' },
        open: 'https://www.youtube.com/playlist?list=PLGPl-6kg2v3ZUVTAVp7reFRjV0JRSbk8Z'
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The institution moved from inconsistent, individually patched machines to a documented standard that any technician can reproduce. The SOP and the video series turned a two-year effort into transferable institutional knowledge rather than something that lived in one person’s head.',
        es: 'La institución pasó de máquinas parcheadas una por una a un estándar documentado que cualquier técnico puede reproducir. El SOP y la serie de videos convirtieron dos años de trabajo en conocimiento institucional transferible, en lugar de algo que vivía en la cabeza de una sola persona.'
      }
    }
  },

  /* ============================================================== 06 */
  {
    slug: 'expo-smart-cities',
    year: '2024',
    cats: ['motion'],
    cover: 'expo-cover-card.jpg',
    coverAlt: { en: 'Expo Smart Cities 2024 opening video still', es: 'Fotograma del video de apertura de Expo Smart Cities 2024' },
    title: { en: 'Opening, Expo Smart Cities 2024', es: 'Apertura, Expo Smart Cities 2024' },
    subtitle: {
      en: 'Setting the room up for the work the students were about to show',
      es: 'Preparar la sala para el trabajo que los estudiantes estaban por mostrar'
    },
    summary: {
      en: 'The opening film for Expo Informatics 2024, produced with After Effects, Premiere and generative AI around the smart cities theme.',
      es: 'El video de apertura de la Expo Informática 2024, producido con After Effects, Premiere e IA generativa en torno a la temática de ciudades inteligentes.'
    },
    tags: ['After Effects', 'Premiere', 'GenAI'],
    facts: {
      role:     { en: 'Concept, direction, motion, edit', es: 'Concepto, dirección, motion, edición' },
      timeline: { en: 'November 2024', es: 'Noviembre 2024' },
      context:  { en: 'Expo Informatics 2024, Instituto Leonardo Murialdo, Argentina', es: 'Expo Informática 2024, Instituto Leonardo Murialdo, Argentina' },
      stack:    ['Adobe After Effects', 'Adobe Premiere', 'GenAI'],
      methods:  ['Visual storytelling', 'Event design']
    },
    links: [
      { label: { en: 'Watch on Vimeo', es: 'Ver en Vimeo' }, url: 'https://vimeo.com/1045840730' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'Opening video for Expo Informatics 2024 at Instituto Leonardo Murialdo, Argentina, produced with Adobe After Effects, Adobe Premiere and generative AI around the smart cities theme. The piece opens the event and frames the students projects for an audience of families, staff and guests.',
            es: 'Video de apertura para la Expo Informática 2024 del Instituto Leonardo Murialdo, Argentina, producido con Adobe After Effects, Adobe Premiere e IA generativa en torno a la temática de ciudades inteligentes. La pieza abre el evento y enmarca los proyectos de los estudiantes ante una audiencia de familias, personal e invitados.'
          }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'Watch the opening', es: 'Ver la apertura' },
        src: 'https://player.vimeo.com/video/1045840730',
        host: 'Vimeo',
        label: { en: 'Expo Smart Cities opening video', es: 'Video de apertura de Expo Smart Cities' },
        open: 'https://vimeo.com/1045840730'
      }
    ],
    outcome: null
  },

  /* ============================================================== 07 */
  {
    slug: 'edulabs',
    year: '2024',
    cats: ['ux', 'lxd', 'data'],
    cover: 'edulabs-cover-card.jpg',
    coverAlt: { en: 'EduLabs UX and UI screens', es: 'Pantallas de UX y UI de EduLabs' },
    title: { en: 'EduLabs', es: 'EduLabs' },
    subtitle: {
      en: 'Reimagining remote science education for the University of Buenos Aires',
      es: 'Reimaginar la educación científica a distancia para la Universidad de Buenos Aires'
    },
    summary: {
      en: 'A digital product that removes physical presence as a prerequisite for doing science, validated with live user testing before development.',
      es: 'Un producto digital que elimina la presencia física como requisito para hacer ciencia, validado con testeo de usuarios en vivo antes del desarrollo.'
    },
    tags: ['Figma', 'UX research', 'Design system'],
    facts: {
      role:     { en: 'UX researcher, product content designer, UI designer', es: 'UX researcher, product content designer, diseño de UI' },
      timeline: { en: 'January to February 2024', es: 'Enero a febrero 2024' },
      context:  { en: 'Faculty of Pharmacy and Biochemistry, University of Buenos Aires (UBA)', es: 'Facultad de Farmacia y Bioquímica, Universidad de Buenos Aires (UBA)' },
      stack:    ['Figma', 'FigJam', 'Maze', 'Adobe CC'],
      methods:  ['Design Thinking', 'User personas', 'Empathy maps', 'Usability testing']
    },
    links: [
      { label: { en: 'Full gallery on Behance', es: 'Galería completa en Behance' }, url: 'https://www.behance.net/gallery/214819191/MurialdoLab-Experience-Science-from-Anywhere-%28UXUI%29' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'Science education traditionally relies on physical laboratory presence, which can be a barrier to accessibility. This EduLab project was born to break that constraint. My mission was to design a digital ecosystem prototype that allows students from the Faculty of Pharmacy and Biochemistry to experience science from anywhere, transforming complex scientific concepts into an intuitive, user-friendly interface.',
            es: 'La educación científica depende tradicionalmente de la presencia física en el laboratorio, lo que puede ser una barrera de accesibilidad. Este proyecto EduLab nació para romper esa restricción. Mi misión fue diseñar el prototipo de un ecosistema digital que permita a estudiantes de la Facultad de Farmacia y Bioquímica experimentar la ciencia desde cualquier lugar, transformando conceptos científicos complejos en una interfaz intuitiva y amigable.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'User-centric research and strategy', es: 'Investigación y estrategia centradas en el usuario' },
        p: [
          {
            en: 'I led the UX research phase using FigJam to deeply understand the unique challenges students face in remote science environments. By defining user personas and empathy maps, I ensured every design decision was rooted in actual user needs. To move from theory to evidence I used Maze as a testing platform, gathering insights through iterative live testing to validate navigation and usability before final development.',
            es: 'Lideré la fase de investigación UX usando FigJam para comprender en profundidad los desafíos que enfrentan los estudiantes en entornos científicos remotos. Definiendo user personas y mapas de empatía, aseguré que cada decisión de diseño estuviera anclada en necesidades reales. Para pasar de la teoría a la evidencia utilicé Maze como plataforma de testeo, obteniendo insights mediante pruebas iterativas en vivo para validar navegación y usabilidad antes del desarrollo final.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'edulabs-02.jpg', alt: { en: 'EduLabs product overview', es: 'Vista general del producto EduLabs' } },
          { src: 'edulabs-03.jpg', alt: { en: 'EduLabs UX research artefacts', es: 'Artefactos de investigación UX de EduLabs' } }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Product content and LXD narrative', es: 'Contenido de producto y narrativa LXD' },
        p: [
          {
            en: 'As a product content designer I leveraged storytelling and UX writing to craft a narrative that resonates with the academic community. I partnered closely with educators to align the curriculum with the digital interface, ensuring the instructional content was clear, engaging and instructionally sound. This approach turned dry scientific data into an engaging learning journey.',
            es: 'Como product content designer aproveché el storytelling y el UX writing para construir una narrativa que resonara con la comunidad académica. Trabajé codo a codo con docentes para alinear el currículum con la interfaz digital, asegurando que el contenido instruccional fuera claro, atractivo y pedagógicamente sólido. Este enfoque convirtió datos científicos áridos en un recorrido de aprendizaje atractivo.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'edulabs-04.jpg', alt: { en: 'EduLabs content design', es: 'Diseño de contenido de EduLabs' } },
          { src: 'edulabs-05.jpg', alt: { en: 'EduLabs learning narrative', es: 'Narrativa de aprendizaje de EduLabs' } }
        ]
      },
      {
        t: 'prose',
        h: { en: 'UI design and scalable systems', es: 'Diseño de UI y sistemas escalables' },
        p: [
          {
            en: 'To ensure the product could grow and evolve, I implemented a comprehensive design system in Figma. This kept visual consistency across all high-fidelity prototypes and mockups while streamlining collaboration between institutional teams. I formulated a visual identity that balances the professional rigour of the UBA faculty with a modern, accessible educational focus.',
            es: 'Para garantizar que el producto pudiera crecer y evolucionar, implementé un design system integral en Figma. Esto aseguró consistencia visual en todos los prototipos y mockups de alta fidelidad, agilizando la colaboración entre los equipos institucionales. Formulé una identidad visual que equilibra el rigor profesional de la Facultad de la UBA con un enfoque educativo moderno y accesible.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'edulabs-07.jpg', alt: { en: 'EduLabs UI screens', es: 'Pantallas de UI de EduLabs' } },
          { src: 'edulabs-08.jpg', alt: { en: 'EduLabs mobile screens', es: 'Pantallas mobile de EduLabs' } },
          { src: 'edulabs-10.jpg', alt: { en: 'EduLabs design system', es: 'Design system de EduLabs' } },
          { src: 'edulabs-11.jpg', alt: { en: 'EduLabs high fidelity prototypes', es: 'Prototipos de alta fidelidad de EduLabs' } },
          { src: 'edulabs-09.jpg', alt: { en: 'EduLabs platform screens', es: 'Pantallas de la plataforma EduLabs' } },
          { src: 'edulabs-12.jpg', alt: { en: 'EduLabs final product', es: 'Producto final de EduLabs' } }
        ]
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The result is a validated, institutional-grade product that bridges the gap between the University of Buenos Aires and remote learners. By applying a rigorous, data-driven design process we delivered a platform that is not only visually consistent but instructionally effective, so that the future of science education is reachable regardless of location.',
        es: 'El resultado es un producto validado, de calidad institucional, que acerca la Universidad de Buenos Aires a estudiantes remotos. Aplicando un proceso de diseño riguroso y guiado por datos entregamos una plataforma no solo visualmente consistente sino instruccionalmente efectiva, para que el futuro de la educación científica sea alcanzable sin importar la ubicación.'
      }
    }
  },

  /* ============================================================== 08 */
  {
    slug: 'the-crow',
    year: '2024',
    cats: ['motion'],
    cover: 'crow-cover-card.jpg',
    coverAlt: { en: 'The Crow animated short film still', es: 'Fotograma del cortometraje animado The Crow' },
    title: { en: 'The Crow, after Edgar Allan Poe', es: 'The Crow, según Edgar Allan Poe' },
    subtitle: {
      en: 'An animated short built end to end with generative tools',
      es: 'Un corto animado construido de punta a punta con herramientas generativas'
    },
    summary: {
      en: 'An animated short inspired by The Raven, with AI-generated visuals animated in Runway and an original AI soundtrack.',
      es: 'Un corto animado inspirado en El Cuervo, con visuales generados por IA animados en Runway y una banda sonora original generada con IA.'
    },
    tags: ['Runway ML', 'Adobe Firefly', 'Suno AI'],
    facts: {
      role:     { en: 'Direction, art direction, animation, sound', es: 'Dirección, dirección de arte, animación, sonido' },
      timeline: { en: 'June to November 2024', es: 'Junio a noviembre 2024' },
      context:  { en: 'Final project, Module 02, Professional Diploma in Digital Tools and Artificial Intelligence, UNTREF', es: 'Proyecto final, Módulo 02, Diplomatura Profesional en Herramientas Digitales e Inteligencia Artificial, UNTREF' },
      stack:    ['Adobe Firefly', 'Runway AI', 'Suno AI', 'Adobe Premiere'],
      methods:  ['Visual storytelling', 'Adaptation']
    },
    links: [
      { label: { en: 'Watch on Vimeo', es: 'Ver en Vimeo' }, url: 'https://vimeo.com/1046045810' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'An animated short film inspired by The Raven by Edgar Allan Poe, created as the final project for Module 02 of the Professional Diploma in Digital Tools and Artificial Intelligence at the National University of Tres de Febrero (UNTREF), Argentina. The project featured AI-generated visuals produced with Adobe Firefly, while the animation was crafted using Runway AI, bringing the imagery to life and enhancing the narrative with dynamic elements. Original soundtrack generated with Suno AI.',
            es: 'Un cortometraje animado inspirado en El Cuervo de Edgar Allan Poe, creado como proyecto final del Módulo 02 de la Diplomatura Profesional en Herramientas Digitales e Inteligencia Artificial de la Universidad Nacional de Tres de Febrero (UNTREF), Argentina. El proyecto contó con visuales generados por IA con Adobe Firefly, mientras que la animación se realizó con Runway AI, dando vida a las imágenes y potenciando la narrativa con elementos dinámicos. Banda sonora original generada con Suno AI.'
          }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'Watch the short film', es: 'Ver el cortometraje' },
        src: 'https://player.vimeo.com/video/1046045810',
        host: 'Vimeo',
        label: { en: 'The Crow, animated short film', es: 'The Crow, cortometraje animado' },
        open: 'https://vimeo.com/1046045810'
      }
    ],
    outcome: null
  },

  /* ============================================================== 09 */
  {
    slug: 'tedxtecno',
    year: '2022',
    cats: ['lxd', 'pm'],
    cover: 'tedx-cover-card.jpg',
    coverAlt: { en: 'TEDxTECNO student talks event', es: 'Evento de charlas estudiantiles TEDxTECNO' },
    title: { en: 'TEDxTECNO', es: 'TEDxTECNO' },
    subtitle: {
      en: 'Empowering technical voices through storytelling',
      es: 'Potenciar voces técnicas a través del storytelling'
    },
    summary: {
      en: 'A TED-inspired classroom programme that helps technical students turn complex informatics topics into talks people actually want to hear.',
      es: 'Un programa de aula inspirado en TED que ayuda a estudiantes técnicos a transformar temas complejos de informática en charlas que la gente realmente quiere escuchar.'
    },
    tags: ['Storytelling', 'Curriculum design', 'Soft skills'],
    facts: {
      role:     { en: 'Programme design, curriculum, coaching, project management', es: 'Diseño del programa, currículum, coaching, gestión del proyecto' },
      timeline: { en: 'August to November 2022', es: 'Agosto a noviembre 2022' },
      context:  { en: 'Fifth-year Informatics, Instituto Leonardo Murialdo', es: '5to año de Informática, Instituto Leonardo Murialdo' },
      stack:    ['Adobe CC', 'PowerPoint', 'Live event production'],
      methods:  ['TED guidelines', 'Project-Based Learning', 'Peer feedback', 'Coaching']
    },
    links: [],
    blocks: [
      {
        t: 'prose',
        h: { en: 'Overview', es: 'Contexto' },
        p: [
          {
            en: 'In the technical world, the ability to communicate an idea is as important as the idea itself. I designed TEDxTECNO to give fifth-year Informatics students a collaborative platform to strengthen their public speaking strategies. My mission was to help these future technicians move beyond the how of technology and master the why, using storytelling as a bridge to a broader audience.',
            es: 'En el mundo técnico, la capacidad de comunicar una idea es tan importante como la idea misma. Diseñé TEDxTECNO para brindar a los estudiantes de 5to año de Informática una plataforma colaborativa donde fortalecer sus estrategias de oratoria. Mi misión fue ayudar a estos futuros técnicos a ir más allá del cómo de la tecnología y dominar el porqué, usando el storytelling como puente hacia una audiencia más amplia.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Educational strategy and narrative design', es: 'Estrategia educativa y diseño narrativo' },
        p: [
          {
            en: 'Following the foundational guidelines of the TED nonprofit organisation, I developed an interdisciplinary curriculum that integrated language arts and technical expertise. I guided students through identifying core tech concepts and reshaping them into ideas worth spreading. This involved intense coaching on narrative structure, ensuring their talks were not just technical reports but compelling stories that resonated with peers and educators.',
            es: 'Siguiendo los lineamientos fundacionales de la organización TED, desarrollé un currículum interdisciplinario que integró lengua y expertise técnica. Guie a los estudiantes en el proceso de identificar conceptos tecnológicos centrales y transformarlos en ideas que vale la pena difundir. Esto implicó un coaching intenso en estructura narrativa, asegurando que sus charlas no fueran solo informes técnicos, sino historias convincentes que resonaran con pares y docentes.'
          }
        ]
      },
      {
        t: 'prose',
        h: { en: 'Technology as an explanatory tool', es: 'La tecnología como herramienta explicativa' },
        p: [
          {
            en: 'A key focus was incorporating technology as a visual aid rather than a backdrop. I worked with students to design effective visual presentations and multimedia tools that served as explanatory supports. This taught them how to leverage UX in their presentations, so their slides were intuitive and enhanced their verbal delivery instead of competing with it.',
            es: 'Un foco clave fue incorporar la tecnología como apoyo visual y no como mero telón de fondo. Trabajé con los estudiantes en el diseño de presentaciones visuales efectivas y herramientas multimedia que funcionaran como soportes explicativos. Esto les enseñó a aprovechar la UX en sus presentaciones, logrando diapositivas intuitivas que potenciaran su exposición oral en lugar de competir con ella.'
          }
        ]
      },
      {
        t: 'gallery',
        images: [
          { src: 'tedx-01.jpg', alt: { en: 'TEDxTECNO student talk on stage', es: 'Charla estudiantil de TEDxTECNO en escena' } },
          { src: 'tedx-02.jpg', alt: { en: 'TEDxTECNO live event', es: 'Evento en vivo de TEDxTECNO' } },
          { src: 'tedx-03.jpg', alt: { en: 'TEDxTECNO event, day one', es: 'TEDxTECNO, primera jornada' } },
          { src: 'tedx-04.jpg', alt: { en: 'TEDxTECNO event, day two', es: 'TEDxTECNO, segunda jornada' } }
        ]
      },
      {
        t: 'embed',
        kind: 'doc',
        h: { en: 'Project media', es: 'Material del proyecto' },
        src: 'https://drive.google.com/file/d/1X1UfNS9anlQURk9h2P522GsUvjAyRbhI/preview',
        host: 'Google Drive',
        label: { en: 'TEDxTECNO project media', es: 'Material del proyecto TEDxTECNO' }
      },
      {
        t: 'prose',
        h: { en: 'Leadership and collaborative environments', es: 'Liderazgo y entornos colaborativos' },
        p: [
          {
            en: 'I fostered a collaborative presentation space where students did not work in isolation but participated in a peer-feedback ecosystem. This mirrored a professional corporate setting, requiring students to coordinate logistics, refine their messaging based on audience perception and manage the pressure of a live event.',
            es: 'Fomenté un espacio de presentación colaborativo donde los estudiantes no trabajaron aislados sino dentro de un ecosistema de feedback entre pares. Este entorno replicó un contexto corporativo profesional, exigiéndoles coordinar la logística, refinar sus mensajes según la percepción de la audiencia y gestionar la presión de un evento en vivo.'
          }
        ]
      }
    ],
    outcome: {
      h: { en: 'Outcomes', es: 'Resultados' },
      body: {
        en: 'The project culminated in a tech talk cycle where students demonstrated significant growth in communication autonomy and professional presence. By bridging technical education with the art of public speaking, we equipped them with the soft skills needed to succeed in a modern, collaborative workplace.',
        es: 'El proyecto culminó en un ciclo de charlas tecnológicas donde los estudiantes demostraron un crecimiento significativo en su autonomía comunicativa y presencia profesional. Al unir la educación técnica con el arte de hablar en público, los equipamos con las habilidades blandas necesarias para triunfar en un entorno laboral moderno y colaborativo.'
      }
    }
  },

  /* ============================================================== 10 */
  {
    slug: 'erp-motion-graphics',
    year: '2019',
    cats: ['motion', 'lxd'],
    cover: 'erp-cover-card.jpg',
    coverAlt: { en: 'ERP motion graphics video still', es: 'Fotograma del video de motion graphics sobre ERP' },
    title: { en: 'ERP systems: foundational motion graphics', es: 'Sistemas ERP: motion graphics fundacional' },
    subtitle: {
      en: 'Two minutes to make an entire enterprise architecture legible',
      es: 'Dos minutos para volver legible toda una arquitectura empresarial'
    },
    summary: {
      en: 'A synthesis video that distils ERP architecture and its ten critical success factors for systems engineering students.',
      es: 'Un video síntesis que destila la arquitectura ERP y sus diez factores críticos de éxito para estudiantes de ingeniería en sistemas.'
    },
    tags: ['PowToon', 'Whiteboard animation'],
    facts: {
      role:     { en: 'Instructional design, script, motion', es: 'Diseño instruccional, guion, motion' },
      timeline: { en: 'October 2019', es: 'Octubre 2019' },
      context:  { en: 'Systems engineering students · video in Spanish', es: 'Estudiantes de ingeniería en sistemas · video en español' },
      stack:    ['PowToon'],
      methods:  ['Cognitive load theory', 'Visual storytelling']
    },
    links: [
      { label: { en: 'Watch on YouTube', es: 'Ver en YouTube' }, url: 'https://www.youtube.com/watch?v=cZjwPcqWMOc' }
    ],
    blocks: [
      {
        t: 'prose',
        h: { en: 'The challenge', es: 'El desafío' },
        p: [
          {
            en: 'The objective was to distil the multi-layered nature of Enterprise Resource Planning systems into a two-minute synthesis. The challenge lay in translating dense technical requirements, such as integrated software architecture and centralised databases, into a clear visual roadmap for systems engineering students.',
            es: 'El objetivo fue destilar la naturaleza multicapa de los sistemas de Planificación de Recursos Empresariales (ERP) en una síntesis de dos minutos. El desafío radicó en traducir requerimientos técnicos densos, como la arquitectura de software integrada y las bases de datos centralizadas, en una hoja de ruta visual y clara para estudiantes de ingeniería en sistemas.'
          }
        ]
      },
      {
        t: 'list',
        h: { en: 'The solution: the LXD approach', es: 'La solución: el enfoque LXD' },
        items: [
          {
            lead: { en: 'Visual storytelling', es: 'Narrativa visual' },
            body: {
              en: 'PowToon motion graphics create a dynamic narrative that defines what an ERP is: a set of integrated programmes managing vital business operations globally.',
              es: 'Usé PowToon (motion graphics) para crear una narrativa dinámica que define qué es un ERP: un conjunto de programas integrados que gestionan operaciones vitales del negocio a nivel global.'
            }
          },
          {
            lead: { en: 'Framework simplification', es: 'Simplificación de marcos' },
            body: {
              en: 'The content is structured to highlight the ten critical success factors for implementation, from senior management commitment to technical best practices and quality assurance.',
              es: 'Estructuré el contenido para destacar los diez factores críticos de éxito para la implementación, desde el compromiso de la alta dirección hasta las buenas prácticas técnicas y el aseguramiento de calidad.'
            }
          },
          {
            lead: { en: 'Pedagogical impact', es: 'Impacto pedagógico' },
            body: {
              en: 'The whiteboard animation style reduced cognitive load, letting students visualise the flow of information across an entire organisation.',
              es: 'El estilo de animación de pizarra redujo la carga cognitiva, permitiendo a los estudiantes visualizar el flujo de información a través de toda una organización.'
            }
          }
        ]
      },
      {
        t: 'embed',
        kind: 'video',
        h: { en: 'Watch the video', es: 'Ver el video' },
        src: 'https://www.youtube.com/embed/cZjwPcqWMOc',
        host: 'YouTube',
        label: { en: 'ERP motion graphics video', es: 'Video de motion graphics de ERP' },
        open: 'https://www.youtube.com/watch?v=cZjwPcqWMOc'
      }
    ],
    outcome: null
  }
];
