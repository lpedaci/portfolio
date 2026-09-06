/* ------------------------------------------------------------------
   Global site content. Every user-facing string carries { en, es }.
   Editing this file and re-running `npm run build` updates both
   language trees at once.
   ------------------------------------------------------------------ */

export const LANGS = ['en', 'es'];

export const site = {
  name: 'Lourdes Pedaci',
  initials: 'LP',
  domain: 'https://lpedaci.github.io/portfolio',
  email: 'lourdes.pedaci@gmail.com',
  location: { en: 'Buenos Aires, AR', es: 'Buenos Aires, AR' },

  /* Hero portrait.
     null            -> the round cut-out portrait on the clay panel (default)
     'file.jpg'      -> a full-bleed portrait filling the panel, reference style.
     Drop the file in assets/img/ and put its name here, then npm run build. */
  heroPortrait: 'hero-portrait.webp',
  role: {
    en: 'Learning Experience Designer · UX · Data',
    es: 'Diseñadora de Experiencias de Aprendizaje · UX · Datos'
  },
  links: {
    cv: 'https://drive.google.com/file/d/1oC0_9CM-aP2DHHQepNc5uss5lxxekds_/view',
    linkedin: 'https://www.linkedin.com/in/lourdes-pedaci/',
    github: 'https://github.com/lpedaci',
    behance: 'https://www.behance.net/lourdespedaci'
  }
};

export const ui = {
  skip:        { en: 'Skip to content', es: 'Ir al contenido' },
  menu:        { en: 'Menu', es: 'Menú' },
  close:       { en: 'Close', es: 'Cerrar' },
  navWork:     { en: 'Work', es: 'Proyectos' },
  navPractice: { en: 'Practice', es: 'Práctica' },
  navProcess:  { en: 'Process', es: 'Proceso' },
  navAbout:    { en: 'About', es: 'Sobre mí' },
  navContact:  { en: 'Contact', es: 'Contacto' },
  available:   { en: 'Open to work', es: 'Disponible' },
  cv:          { en: 'Résumé', es: 'CV' },
  viewCv:      { en: 'View résumé', es: 'Ver CV' },
  backWork:    { en: 'All projects', es: 'Todos los proyectos' },
  openLive:    { en: 'Open in a new tab', es: 'Abrir en pestaña nueva' },
  loadEmbed:   { en: 'Load', es: 'Cargar' },
  factsheet:   { en: 'Project facts', es: 'Ficha del proyecto' },
  fRole:       { en: 'Role', es: 'Rol' },
  fTimeline:   { en: 'Timeline', es: 'Período' },
  fContext:    { en: 'Context', es: 'Contexto' },
  fStack:      { en: 'Stack', es: 'Herramientas' },
  fMethods:    { en: 'Methods', es: 'Metodologías' },
  fLinks:      { en: 'Live links', es: 'Enlaces en vivo' },
  zoomHint:    { en: 'Click an image to enlarge', es: 'Hacé clic en una imagen para ampliar' },
  langLabel:   { en: 'Language', es: 'Idioma' },
  filterAll:   { en: 'All', es: 'Todos' },
  noMatches:   { en: 'No projects in this category yet.', es: 'Todavía no hay proyectos en esta categoría.' },
  copyEmail:   { en: 'Copy address', es: 'Copiar dirección' },
  copied:      { en: 'Copied', es: 'Copiado' },
  builtBy:     { en: 'Designed and built by me', es: 'Diseñado y desarrollado por mí' },
  scroll:      { en: 'Scroll', es: 'Bajá' },
  index:       { en: 'Index', es: 'Índice' },
  backIndex:   { en: 'Back to the index', es: 'Volver al índice' },
  notFound:    { en: 'This page does not exist', es: 'Esta página no existe' },
  notFoundBody:{ en: 'The link may be outdated, or the project may have moved. Everything is one click away from the index.', es: 'Puede que el enlace esté desactualizado o que el proyecto haya cambiado de lugar. Todo está a un clic desde el índice.' }
};

export const categories = [
  { id: 'lxd',    label: { en: 'Learning design',    es: 'Diseño de aprendizaje' } },
  { id: 'ux',     label: { en: 'UX and product',     es: 'UX y producto' } },
  { id: 'data',   label: { en: 'Data and research',  es: 'Datos e investigación' } },
  { id: 'pm',     label: { en: 'Project management', es: 'Gestión de proyectos' } },
  { id: 'motion', label: { en: 'Video and motion',   es: 'Video y motion' } }
];

export const home = {
  eyebrow: {
    en: 'Learning experience · UX · Data. Selected work, 2019 to today',
    es: 'Experiencia de aprendizaje · UX · Datos. Trabajos seleccionados, 2019 a hoy'
  },
  headline: {
    en: ['research', 'design', 'measure'],
    es: ['investigar', 'diseñar', 'medir']
  },
  lead: {
    en: 'I turn complex technical and business requirements into learning experiences people actually finish. Adult learning theory, UX practice and data, working as one thing.',
    es: 'Convierto requerimientos técnicos y de negocio complejos en experiencias de aprendizaje que la gente realmente termina. Teoría del aprendizaje adulto, práctica de UX y datos, funcionando como una sola cosa.'
  },
  stats: [
    { value: '+7',    label: { en: 'years designing learning, EdTech and data', es: 'años en diseño de aprendizaje, EdTech y datos' } },
    { value: '11',    label: { en: 'specialised teams led end to end',          es: 'equipos especializados liderados de punta a punta' } }
  ],
  marquee: ['ADDIE', 'SAM', 'Backward Design', 'Gagné-Briggs', 'Kirkpatrick', 'Design Thinking', 'TPACK', 'Project-Based Learning', 'Retrieval Practice', 'Scrum', 'Kanban'],

  practiceTitle: { en: 'Three practices, one method', es: 'Tres prácticas, un mismo método' },
  practiceLead: {
    en: 'I do not separate pedagogy from interface, or interface from evidence. A learning product only works when the three hold together.',
    es: 'No separo la pedagogía de la interfaz, ni la interfaz de la evidencia. Un producto de aprendizaje sólo funciona cuando las tres se sostienen juntas.'
  },
  practices: [
    {
      id: 'ux',
      num: '01',
      title: { en: 'UX and product design', es: 'Diseño UX y de producto' },
      body: {
        en: 'Research with real users, personas and empathy maps, interaction flows, low to high fidelity prototypes, design systems and usability testing before a single line of code is written.',
        es: 'Investigación con usuarios reales, personas y mapas de empatía, flujos de interacción, prototipos de baja a alta fidelidad, design systems y testeo de usabilidad antes de escribir una línea de código.'
      },
      tools: ['Figma', 'FigJam', 'Maze', 'Adobe CC']
    },
    {
      id: 'lxd',
      num: '02',
      title: { en: 'Learning experience design', es: 'Diseño de experiencias de aprendizaje' },
      body: {
        en: 'Curriculum architecture, SCORM modules, interactive HTML, assessment strategy and retrieval practice. Instructionally sound, and built to be maintained by whoever inherits it.',
        es: 'Arquitectura curricular, módulos SCORM, HTML interactivo, estrategia de evaluación y práctica de recuperación. Pedagógicamente sólido y pensado para que lo mantenga quien lo herede.'
      },
      tools: ['Articulate 360', 'iSpring', 'Moodle', 'HTML/CSS/JS']
    },
    {
      id: 'data',
      num: '03',
      title: { en: 'Data and learning analytics', es: 'Datos y analítica del aprendizaje' },
      body: {
        en: 'Surveys and interviews at scale, Kirkpatrick evaluation, dashboards and impact reporting. The point is never to publish a course: it is to show that it moved something.',
        es: 'Encuestas y entrevistas a escala, evaluación Kirkpatrick, dashboards y reportes de impacto. El punto nunca es publicar un curso: es demostrar que movió algo.'
      },
      tools: ['SQL', 'Power BI', 'Excel', 'Apps Script']
    }
  ],

  workTitle: { en: 'Selected work', es: 'Trabajos seleccionados' },
  workLead: {
    en: 'Ten projects, each a different way of answering the same question: what does this person need to be able to do, and how will we know that they can.',
    es: 'Diez proyectos, cada uno una forma distinta de responder la misma pregunta: qué necesita poder hacer esta persona, y cómo vamos a saber que puede hacerlo.'
  },

  processTitle: { en: 'How I work', es: 'Cómo trabajo' },
  processQuote: {
    en: 'Incorrect definition, incorrect solution.',
    es: 'Definición incorrecta, solución incorrecta.'
  },
  processQuoteNote: {
    en: 'The principle I teach my own students, and the one I hold myself to. No hypothetical projects: a concrete person with a concrete need, validated before anything gets built.',
    es: 'El principio que les enseño a mis estudiantes, y con el que me mido a mí misma. Nada de proyectos hipotéticos: una persona concreta con una necesidad concreta, validada antes de construir nada.'
  },
  process: [
    {
      num: 'F01',
      title: { en: 'Diagnose', es: 'Diagnosticar' },
      body: {
        en: 'Structured interviews, audits and benchmarking to separate the symptom from the root cause. Nothing gets designed on top of an assumption.',
        es: 'Entrevistas estructuradas, auditorías y benchmarking para separar el síntoma de la causa raíz. Nada se diseña sobre un supuesto.'
      }
    },
    {
      num: 'F02',
      title: { en: 'Design', es: 'Diseñar' },
      body: {
        en: 'Learning objectives, content architecture, interaction flows and prototypes. Pedagogy and interface decided at the same table.',
        es: 'Objetivos de aprendizaje, arquitectura de contenidos, flujos de interacción y prototipos. Pedagogía e interfaz se deciden en la misma mesa.'
      }
    },
    {
      num: 'F03',
      title: { en: 'Build', es: 'Construir' },
      body: {
        en: 'SCORM modules, hand-coded HTML, video, motion and documentation. Delivered accessible, responsive and ready to hand over.',
        es: 'Módulos SCORM, HTML programado a mano, video, motion y documentación. Entregado accesible, responsive y listo para transferir.'
      }
    },
    {
      num: 'F04',
      title: { en: 'Measure', es: 'Medir' },
      body: {
        en: 'Usability testing, assessment data and impact analysis. Findings go straight back into the next iteration.',
        es: 'Testeo de usabilidad, datos de evaluación y análisis de impacto. Los hallazgos vuelven directo a la siguiente iteración.'
      }
    }
  ],

  aboutTitle:  { en: 'About', es: 'Sobre mí' },
  aboutKicker: { en: 'Hi, I am Lourdes', es: 'Hola, soy Lourdes' },
  aboutBody: {
    en: [
      'I am an Instructional and Learning Experience Designer with more than seven years helping organisations turn complex technical and business needs into learning journeys that actually stick.',
      'I have always believed that for learning to be effective it has to be human-centred. That is why I bridge adult learning theory and UX principles to build experiences that are inclusive and genuinely engaging, whether I am structuring intricate information or optimising a training workflow.',
      'I am also a firm believer in data-driven design. I do not only create content: I look at the numbers, to make sure every learning solution has a real, measurable impact on business growth and talent development.'
    ],
    es: [
      'Soy Diseñadora Instruccional y de Experiencias de Aprendizaje con más de siete años ayudando a organizaciones a convertir necesidades técnicas y de negocio complejas en experiencias de aprendizaje que realmente perduran.',
      'Siempre creí que, para que el aprendizaje sea efectivo, tiene que estar centrado en las personas. Por eso tiendo puentes entre la teoría del aprendizaje de adultos y los principios de UX para crear experiencias inclusivas y genuinamente atractivas, ya sea estructurando información compleja u optimizando un flujo de formación.',
      'También creo firmemente en el diseño guiado por datos. No solo creo contenido: miro los números, para asegurar que cada solución de aprendizaje tenga un impacto real y medible en el crecimiento del negocio y el desarrollo del talento.'
    ]
  },
  aboutFacts: [
    {
      label: { en: 'Studying', es: 'Estudiando' },
      value: { en: 'Degree in Educational Technology, UTN', es: 'Licenciatura en Tecnología Educativa, UTN' }
    },
    {
      label: { en: 'Languages', es: 'Idiomas' },
      value: { en: 'Spanish (native) · English C1 (CEFR)', es: 'Español (nativo) · Inglés C1 (MCER)' }
    },
    {
      label: { en: 'Based in', es: 'Basada en' },
      value: { en: 'Buenos Aires, Argentina · remote-friendly', es: 'Buenos Aires, Argentina · trabajo remoto' }
    },
    {
      label: { en: 'Tech stack', es: 'Stack tecnológico' },
      value: {
        en: 'Articulate 360, iSpring, SCORM, Moodle, Genially, Figma, Adobe CC, Camtasia, generative AI (Claude, ChatGPT, Gemini), SQL, Power BI, Excel, Apps Script, HTML/CSS/JS, GitHub Pages, Notion.',
        es: 'Articulate 360, iSpring, SCORM, Moodle, Genially, Figma, Adobe CC, Camtasia, IA generativa (Claude, ChatGPT, Gemini), SQL, Power BI, Excel, Apps Script, HTML/CSS/JS, GitHub Pages, Notion.'
      }
    },
    {
      label: { en: 'Strengths', es: 'Fortalezas' },
      value: {
        en: 'Cross-functional team leadership, stakeholder management, data-driven storytelling, workshop facilitation, coaching and mentoring.',
        es: 'Liderazgo de equipos multidisciplinarios, gestión de stakeholders, storytelling basado en datos, facilitación de talleres, coaching y mentoría.'
      }
    }
  ],

  contactKicker: { en: 'Let us talk', es: 'Hablemos' },
  contactTitle: {
    en: 'A learning problem that deserves a real design process?',
    es: '¿Un problema de aprendizaje que merece un proceso de diseño real?'
  },
  contactBody: {
    en: 'Whether you are building a training programme from scratch, rescuing one that nobody finishes, or trying to prove that yours works, write to me.',
    es: 'Ya sea que estés armando un programa de formación desde cero, rescatando uno que nadie termina, o tratando de demostrar que el tuyo funciona, escribime.'
  }
};
