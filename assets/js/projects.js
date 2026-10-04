/* Tarjetas de proyectos. Cada texto visible lleva { es, en }.
   cat: 'it' (turquesa), 'cap' (rosado, capacitación) o 'cont' (ámbar, creación de contenidos).
   badges: etiquetas extra junto a la categoría en el encabezado del caso (por ejemplo 'UX').
   dates: [inicio, fin] en 'AAAA-MM' (o 'AAAA' si no hay mes). De acá sale el año que se muestra
   ('2024' o '2022-2024') y el orden de las cards, del más nuevo
   al más antiguo: por fecha de fin y, si empatan, por fecha de inicio; sin mes, el inicio cuenta
   como enero y el fin como diciembre. Con fechas iguales, vale el orden del array.
   result: null si no hay un dato defendible.
   El detalle de cada caso vive en cases.js, con el mismo slug. */

window.PROJECTS = [
  {
    slug: 'proyectos-aplicados',
    cat: 'it',
    dates: ['2024', '2026'],
    tags: { es: ['product design', 'development'], en: ['product design', 'development'] },
    title: { es: 'Programa de proyectos aplicados', en: 'Applied projects programme' },
    desc: {
      es: 'Coordinación de equipos con clientes reales, del relevamiento a la entrega.',
      en: 'Coordinating teams with real clients, from requirements gathering to delivery.'
    },
    result: { es: '14-18 equipos por año', en: '14-18 teams per year' },
    skills: { es: ['Relevamiento', 'Scrum', 'Gantt', 'GitHub'], en: ['Elicitation', 'Scrum', 'Gantt', 'GitHub'] }
  },
  {
    slug: 'riesgos-digitales',
    cat: 'it',
    dates: ['2024-07', '2024-11'],
    tags: { es: ['ux', 'seguridad', 'investigación'], en: ['ux', 'security', 'research'] },
    badges: ['UX'],
    title: { es: 'Programa participativo de riesgos digitales', en: 'Participatory digital risk programme' },
    desc: {
      es: 'Intersafe: 2da temporada. Investigación con encuestas y entrevistas, y 11 equipos coordinados durante cinco meses.',
      en: 'Intersafe: season 2. Research through surveys and interviews, with 11 teams coordinated over five months.'
    },
    result: { es: '1.741 participantes', en: '1,741 participants' },
    skills: { es: ['Encuestas', 'Entrevistas', 'Gantt', 'Agile'], en: ['Surveys', 'Interviews', 'Gantt', 'Agile'] }
  },
  {
    slug: 'infraestructura-it',
    cat: 'it',
    dates: ['2022-07', '2024-12'],
    tags: { es: ['sistemas', 'documentación'], en: ['systems', 'documentation'] },
    title: { es: 'Estandarización de infraestructura IT', en: 'IT infrastructure standardisation' },
    desc: {
      es: 'Auditoría de hardware y software de los laboratorios, documentada para que otro equipo la sostenga.',
      en: 'Hardware and software audit of the labs, documented so another team can run it.'
    },
    result: { es: 'SOP de 96 páginas', en: '96-page SOP' },
    skills: { es: ['Windows 11', 'SOP', 'Benchmarking', 'Camtasia', 'Videotutoriales', 'Capacitación técnica', 'YouTube'], en: ['Windows 11', 'SOP', 'Benchmarking', 'Camtasia', 'Video tutorials', 'Technical training', 'YouTube'] }
  },
  {
    slug: 'edulabs',
    cat: 'it',
    dates: ['2024-01', '2024-03'],
    tags: { es: ['ux/ui', 'accesibilidad'], en: ['ux/ui', 'accessibility'] },
    badges: ['UX'],
    title: { es: 'EduLabs', en: 'EduLabs' },
    desc: {
      es: 'Reinvención UX/UI de una plataforma de laboratorios remotos para hacer ciencia a distancia.',
      en: 'A UX/UI reinvention of a remote-labs platform for doing science from anywhere.'
    },
    result: { es: 'Design system auditado en WCAG 2.1 AA', en: 'Design system audited against WCAG 2.1 AA' },
    skills: { es: ['Doble Diamante', 'Design system', 'Figma', 'WCAG'], en: ['Double Diamond', 'Design system', 'Figma', 'WCAG'] }
  },
  {
    slug: 'auditorias-ux',
    cat: 'it',
    dates: ['2026-03', '2026-11'],
    tags: { es: ['ux/ui', 'auditoría'], en: ['ux/ui', 'audit'] },
    badges: ['UX'],
    title: { es: 'Auditorías UX/UI', en: 'UX/UI audits' },
    desc: {
      es: 'Evaluación heurística y de accesibilidad de los productos de cada equipo, en formato presencial y remoto.',
      en: 'Heuristic and accessibility evaluation of each team’s product, in person and remotely.'
    },
    result: { es: 'Todos los equipos asesorados', en: 'Every team advised' },
    skills: { es: ['Heurísticas de Nielsen', 'WCAG 2.1', 'Lighthouse', 'Claude'], en: ['Nielsen heuristics', 'WCAG 2.1', 'Lighthouse', 'Claude'] }
  },
  {
    slug: 'rediseno-portfolio',
    cat: 'it',
    dates: ['2026-07', '2026-07'],
    tags: { es: ['ux/ui', 'design system'], en: ['ux/ui', 'design system'] },
    badges: ['UX'],
    title: { es: 'Auditoría y rediseño de mi portfolio versión 2.0', en: 'Audit and redesign of my portfolio version 2.0' },
    desc: {
      es: 'Auditoría heurística y de accesibilidad de mi portfolio anterior, y el design system que salió de ella.',
      en: 'A heuristic and accessibility audit of my previous portfolio, and the design system that came out of it.'
    },
    result: { es: '11 hallazgos, 7 corregidos', en: '11 findings, 7 fixed' },
    skills: { es: ['Heurísticas de Nielsen', 'WCAG 2.2', 'Design tokens', 'Node'], en: ['Nielsen heuristics', 'WCAG 2.2', 'Design tokens', 'Node'] }
  },
  {
    slug: 'sistemas-operativos',
    cat: 'cap',
    dates: ['2026-03', '2026-11'],
    tags: { es: ['sistemas', 'autoevaluación'], en: ['systems', 'self-assessment'] },
    title: { es: 'Sistemas Operativos: almacenamiento y seteo', en: 'Operating Systems: storage and setup' },
    desc: {
      es: 'Dos sitios interactivos y un motor de autoevaluación, programados a mano.',
      en: 'Two interactive sites and a self-assessment engine, hand-coded.'
    },
    result: { es: 'Autoaprendizaje para estudiantes de Informática', en: 'Self-paced learning for computing students' },
    skills: { es: ['HTML/CSS/JS', 'GitHub Pages', 'Práctica de recuperación'], en: ['HTML/CSS/JS', 'GitHub Pages', 'Retrieval practice'] }
  },
  {
    slug: 'tedxtecno',
    cat: 'cap',
    dates: ['2022-08', '2022-11'],
    tags: { es: ['oratoria', 'currículum'], en: ['public speaking', 'curriculum'] },
    title: { es: 'TEDxTECNO', en: 'TEDxTECNO' },
    desc: {
      es: 'Programa de aula para que estudiantes técnicos expliquen temas de informática en charlas.',
      en: 'A classroom programme for technical students to explain computing topics in talks.'
    },
    result: null,
    skills: { es: ['Storytelling', 'Diseño curricular', 'Coaching'], en: ['Storytelling', 'Curriculum design', 'Coaching'] }
  },
  {
    slug: 'docente-era-digital',
    cat: 'cont',
    dates: ['2025-10', '2025-10'],
    tags: { es: ['motion', 'tpack'], en: ['motion', 'tpack'] },
    title: { es: 'El rol docente en la era digital', en: 'The teacher in the digital era' },
    desc: {
      es: 'Video conceptual sobre el cambio de rol docente, basado en el marco TPACK.',
      en: 'A concept video on the changing role of the teacher, based on the TPACK framework.'
    },
    result: null,
    skills: { es: ['Motion graphics', 'Guion', 'IA generativa'], en: ['Motion graphics', 'Script', 'GenAI'] }
  },
  {
    slug: 'expo-smart-cities',
    cat: 'cont',
    dates: ['2024-11', '2024-11'],
    tags: { es: ['video', 'apertura'], en: ['video', 'opening'] },
    title: { es: 'Apertura, Expo Smart Cities 2024', en: 'Opening, Expo Smart Cities 2024' },
    desc: {
      es: 'Video de apertura de la Expo Informática 2024, sobre ciudades inteligentes.',
      en: 'Opening video for the 2024 Computing Expo, on smart cities.'
    },
    result: null,
    skills: { es: ['After Effects', 'Premiere', 'IA generativa'], en: ['After Effects', 'Premiere', 'GenAI'] }
  },
  {
    slug: 'the-crow',
    cat: 'cont',
    dates: ['2024-06', '2024-11'],
    tags: { es: ['animación', 'ia'], en: ['animation', 'ai'] },
    title: { es: 'The Crow, según Edgar Allan Poe', en: 'The Crow, after Edgar Allan Poe' },
    desc: {
      es: 'Corto animado inspirado en El Cuervo, hecho con herramientas generativas.',
      en: 'An animated short inspired by The Raven, made with generative tools.'
    },
    result: null,
    skills: { es: ['Runway ML', 'Adobe Firefly', 'Suno AI'], en: ['Runway ML', 'Adobe Firefly', 'Suno AI'] }
  },
  {
    slug: 'erp-motion-graphics',
    cat: 'cont',
    dates: ['2019-10', '2019-10'],
    tags: { es: ['motion', 'erp'], en: ['motion', 'erp'] },
    title: { es: 'Sistemas ERP en motion graphics', en: 'ERP systems in motion graphics' },
    desc: {
      es: 'Video síntesis de la arquitectura ERP y sus diez factores críticos de éxito.',
      en: 'A summary video of ERP architecture and its ten critical success factors.'
    },
    result: null,
    skills: { es: ['PowToon', 'Guion', 'Whiteboard animation'], en: ['PowToon', 'Script', 'Whiteboard animation'] }
  }
];

{
  const ym = (d, month) => { const [y, m] = d.split('-').map(Number); return y * 12 + (m || month); };
  window.PROJECTS.forEach((p) => {
    const [a, b] = p.dates.map((d) => d.slice(0, 4));
    p.year = a === b ? a : `${a}-${b}`;
  });
  window.PROJECTS.sort((a, b) => ym(b.dates[1], 12) - ym(a.dates[1], 12) || ym(b.dates[0], 1) - ym(a.dates[0], 1));
}
