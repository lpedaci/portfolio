/* Tarjetas de proyectos. Cada texto visible lleva { es, en }.
   cat: 'it' (turquesa), 'cap' (rosado, capacitación) o 'cont' (ámbar, creación de contenidos).
   also: categorías adicionales; el proyecto también aparece en esos filtros y suma un chip con el nombre de
   la categoría, o con el texto de alsoTags si lo tiene (por ejemplo { it: { es: 'ux/ui', en: 'ux/ui' } }).
   alsoTags sin also: solo suma el chip con el color de esa categoría, sin que el proyecto aparezca en su filtro.
   badges: etiquetas extra junto a la categoría en el encabezado del caso (por ejemplo 'UX').
   dates: [inicio, fin] en 'AAAA-MM' (o 'AAAA' si no hay mes). De acá sale el año que se muestra
   ('2024' o '2022-2024').
   status: 'wip' marca un proyecto en desarrollo. Suma la etiqueta "En desarrollo" junto a la categoría (en la
   card y en el encabezado del caso), el año pasa a "2026 - en curso" (yearL, armado con yearOngoing de i18n.js)
   y la etiqueta de los enlaces en vivo aclara que es una versión en desarrollo. dates sigue con inicio y fin
   iguales (o el último mes con avances) para no romper el orden; el texto del año sale del código.
   El orden del array es el orden de las cards: primero los destacados (Verificación automática de fuentes con IA,
   Alcancía, Rumbo, proyectos aplicados y auditorías UX/UI) y después del caso publicado más reciente al más antiguo.
   Un caso nuevo va en el lugar que le toque según ese criterio, no al final.
   result: null si no hay un dato defendible.
   cover: imagen de la card (800x500, en assets/img/covers). video: true suma un botón de play sobre la portada.
   Sin cover, la card muestra una portada generada con el color de su categoría.
   El detalle de cada caso vive en cases.js, con el mismo slug. */

window.PROJECTS = [
  /* Verificación automática de fuentes con IA: primera de todas, destacada. Queda lejos de Taller - IA, así no se enlazan como "Siguiente caso". */
  {
    slug: 'verificacion-ia',
    cover: 'assets/img/covers/verificacion-ia.jpg',
    cat: 'it',
    also: ['cap'],
    badges: [],
    dates: ['2026-11', '2026-11'],
    tags: { es: ['ia aplicada', 'automatización', 'evaluación'], en: ['applied ai', 'automation', 'evaluation'] },
    title: { es: 'Verificación automática de fuentes con IA', en: 'Automated source verification with AI' },
    desc: {
      es: 'Un sistema que revisa las fuentes y la redacción del Taller - IA, propone cómo corregirlas y deja la decisión a una persona. Validado a ciegas con 21 casos sembrados.',
      en: 'A system that checks the sources and wording of Taller - IA, suggests how to fix them and leaves the decision to a person. Blind-validated with 21 seeded cases.'
    },
    result: { es: '17 de 19 errores sembrados detectados, 0 falsas alarmas', en: '17 of 19 seeded errors detected, 0 false alarms' },
    skills: {
      es: ['IA aplicada', 'Automatización', 'Diseño de evaluación', 'Rúbricas', 'Claude Code'],
      en: ['Applied AI', 'Automation', 'Evaluation design', 'Rubrics', 'Claude Code']
    }
  },
  {
    slug: 'alcancia',
    cover: 'assets/img/covers/alcancia.jpg',
    cat: 'it',
    also: ['cap'],
    badges: ['UX', 'LXD'],
    dates: ['2026-11', '2026-11'],
    tags: { es: ['ux/ui', 'lxd', 'producto b2b'], en: ['ux/ui', 'lxd', 'b2b product'] },
    title: { es: 'Alcancía, simulador de finanzas personales', en: 'Alcancía, a personal finance simulator' },
    desc: {
      es: 'Producto B2B para organizaciones, aulas y productos: aprender finanzas usando una billetera virtual con dinero ficticio, construido como prototipo navegable.',
      en: 'A B2B product for organisations, classrooms and products: learning personal finance by using a virtual wallet with fictitious money, built as a navigable prototype.'
    },
    result: { es: '9 niveles, 13 misiones, 5 roles', en: '9 levels, 13 missions, 5 roles' },
    skills: {
      es: ['Diseño instruccional', 'Gamificación', 'Privacidad por diseño', 'Sistema de diseño', 'WCAG 2.2'],
      en: ['Instructional design', 'Gamification', 'Privacy by design', 'Design system', 'WCAG 2.2']
    }
  },
  {
    slug: 'rumbo',
    cover: 'assets/img/covers/rumbo.jpg',
    cat: 'it',
    badges: ['UX', 'LXD'],
    dates: ['2026-11', '2026-11'],
    tags: { es: ['ux/ui', 'lxd', 'producto b2b'], en: ['ux/ui', 'lxd', 'b2b product'] },
    title: { es: 'Rumbo, plataforma de onboarding corporativo', en: 'Rumbo, a corporate onboarding platform' },
    desc: {
      es: 'Producto B2B para cuatro roles: el ingreso a una empresa diseñado como experiencia de aprendizaje y construido como prototipo navegable.',
      en: 'A B2B product for four roles: joining a company designed as a learning experience and built as a navigable prototype.'
    },
    result: { es: '40 pantallas, 4 roles, WCAG 2.2 AA', en: '40 screens, 4 roles, WCAG 2.2 AA' },
    skills: {
      es: ['Diseño instruccional', 'Arquitectura de información', 'Sistema de diseño', 'WCAG 2.2', 'Análisis funcional'],
      en: ['Instructional design', 'Information architecture', 'Design system', 'WCAG 2.2', 'Functional analysis']
    }
  },
  {
    slug: 'proyectos-aplicados',
    cover: 'assets/img/covers/proyectos-aplicados.webp',
    cat: 'it',
    also: ['cap'],
    dates: ['2024', '2026-11'],
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
    slug: 'auditorias-ux',
    cover: 'assets/img/covers/auditorias-ux.webp',
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
    slug: 'taller-ia',
    cover: 'assets/img/covers/taller-ia.jpg',
    cat: 'it',
    also: ['cap'],
    badges: ['LXD', 'UX'],
    status: 'wip',
    dates: ['2026-11', '2026-11'],
    tags: { es: ['ia generativa', 'lxd', 'learning environment'], en: ['generative ai', 'lxd', 'learning environment'] },
    title: { es: 'Taller - IA, entorno de aprendizaje sobre IA generativa', en: 'Taller - IA, a generative AI learning environment' },
    desc: {
      es: 'Learning environment para usar la IA generativa con criterio: 21 módulos con actividades interactivas, animaciones propias y fuentes oficiales, para aprender por cuenta propia o dar clases.',
      en: 'A learning environment for using generative AI with judgement: 21 modules with interactive activities, original animations and official sources, for self-paced learning or teaching a class.'
    },
    result: { es: '21 módulos, 25 tipos de actividad, WCAG 2.2 AA', en: '21 modules, 25 activity types, WCAG 2.2 AA' },
    skills: {
      es: ['Diseño instruccional', 'Sistema de diseño', 'WCAG 2.2', 'Curaduría de fuentes', 'Claude Code'],
      en: ['Instructional design', 'Design system', 'WCAG 2.2', 'Source curation', 'Claude Code']
    }
  },
  {
    slug: 'escape-room-finanzas',
    cover: 'assets/img/covers/escape-room-finanzas.jpg',
    cat: 'cap',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX'],
    dates: ['2026-11', '2026-11'],
    tags: { es: ['gamificación', 'finanzas personales'], en: ['gamification', 'personal finance'] },
    title: { es: 'Tu primer sueldo: escape room de finanzas personales', en: 'Your first paycheck: a personal finance escape room' },
    desc: {
      es: 'Un juego web de cinco salas para practicar el recibo, el presupuesto, la tarjeta, la inflación y las estafas, con contenido del Lic. Kevin Giampieri y un personaje que acompaña cada intento.',
      en: 'A five-room web game to practise payslips, budgeting, credit cards, inflation and scams, with content by Kevin Giampieri (Lic.) and a character who reacts to every attempt.'
    },
    result: { es: '5 salas en 3 versiones', en: '5 rooms in 3 versions' },
    skills: { es: ['Gamificación', 'Diseño instruccional', 'Sistema de diseño', 'WCAG 2.2'], en: ['Gamification', 'Instructional design', 'Design system', 'WCAG 2.2'] }
  },
  /* El aula que incluye y sus cuatro piezas (animación, podcast, documental y asistente): publicados juntos en el portfolio,
     van seguidos para que "Siguiente caso" recorra el proyecto: el espacio digital y después cada pieza. */
  {
    slug: 'el-aula-que-incluye',
    cover: 'assets/img/covers/el-aula-que-incluye.webp',
    cat: 'cap',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX', 'LXD'],
    dates: ['2026-08', '2026-11'],
    tags: { es: ['dua', 'ia generativa'], en: ['udl', 'generative ai'] },
    title: { es: 'El aula que incluye: IA generativa para la inclusión en el nivel inicial', en: 'The inclusive classroom: generative AI for inclusion in early childhood education' },
    desc: {
      es: 'Espacio digital de 13 páginas que cuenta un mismo proyecto de sala de 5 años en cinco formatos hechos con IA generativa, diseñado con DUA y validado con docentes.',
      en: 'A 13-page digital space that tells the same kindergarten project in five formats made with generative AI, designed with UDL and validated with teachers.'
    },
    result: { es: '5 recursos en 5 formatos, calificación 9,50', en: '5 resources in 5 formats, graded 9.50/10' },
    skills: {
      es: ['Diseño de experiencias de aprendizaje', 'Auditoría de contenido', 'Arquitectura de información', 'Sistema de diseño', 'WCAG 2.1', 'HTML/CSS/JS'],
      en: ['Learning experience design', 'Content audit', 'Information architecture', 'Design system', 'WCAG 2.1', 'HTML/CSS/JS']
    }
  },
  {
    slug: 'animacion-los-monstruos-de-berni',
    cover: 'assets/img/covers/animacion-los-monstruos-de-berni.webp',
    video: true,
    cat: 'cont',
    dates: ['2026-08', '2026-08'],
    tags: { es: ['animación', 'ia generativa'], en: ['animation', 'generative ai'] },
    title: { es: 'Los monstruos de Berni: una animación con IA para la inclusión en la primera infancia', en: 'Berni’s monsters: an AI animation for inclusion in early childhood' },
    desc: {
      es: 'Un corto sin diálogos para mirar en la sala: Berni acompaña a un compañero que necesita calmarse, con un personaje sostenido entre escenas y audiodescripción en texto.',
      en: 'A dialogue-free short to watch in the classroom: Berni supports a classmate who needs to calm down, with a character kept consistent across scenes and a text audio description.'
    },
    result: { es: '1:18 sin diálogos, 9 escenas audiodescriptas', en: '1:18 with no dialogue, 9 audio-described scenes' },
    skills: {
      es: ['Producción audiovisual con IA', 'Diseño de personaje con IA', 'Veo', 'Suno', 'Camtasia'],
      en: ['AI video production', 'AI character design', 'Veo', 'Suno', 'Camtasia']
    }
  },
  {
    slug: 'podcast-el-aula-que-incluye',
    cover: 'assets/img/covers/podcast-el-aula-que-incluye.webp',
    cat: 'cont',
    dates: ['2026-09', '2026-09'],
    tags: { es: ['podcast', 'voces sintéticas'], en: ['podcast', 'synthetic voices'] },
    title: { es: 'Podcast El aula que incluye, a dos voces sintéticas', en: 'The El aula que incluye podcast, with two synthetic voices' },
    desc: {
      es: 'Un episodio para docentes y familias sobre cómo un mismo cuento llega como texto, pictogramas y audio, con guion iterado con IA y transcripción completa.',
      en: 'An episode for teachers and families on how one story can arrive as text, pictograms and audio, with an AI-iterated script and a full transcript.'
    },
    result: { es: '2:58, guion en 3 iteraciones', en: '2:58, script in 3 iterations' },
    skills: {
      es: ['Guion con IA', 'Claude', 'ElevenLabs', 'Suno', 'Camtasia'],
      en: ['AI-assisted scriptwriting', 'Claude', 'ElevenLabs', 'Suno', 'Camtasia']
    }
  },
  {
    slug: 'documental-adaptar-para-incluir',
    cover: 'assets/img/covers/documental-adaptar-para-incluir.webp',
    video: true,
    cat: 'cont',
    dates: ['2026-09', '2026-09'],
    tags: { es: ['documental', 'ia generativa'], en: ['documentary', 'generative ai'] },
    title: { es: 'Adaptar para incluir: un documental producido con IA generativa', en: 'Adapt to include: a documentary produced with generative AI' },
    desc: {
      es: 'Un documental para docentes y familias sobre qué permite la IA en una sala inclusiva y qué condiciones hacen falta, sin rostros de niños, con subtítulos y transcripción.',
      en: 'A documentary for teachers and families on what AI makes possible in an inclusive classroom and what it needs, with no children’s faces, captions and a transcript.'
    },
    result: { es: '2:04, con subtítulos y transcripción', en: '2:04, with captions and a transcript' },
    skills: {
      es: ['Producción audiovisual con IA', 'Guion con IA', 'Veo y Flow', 'ElevenLabs', 'Camtasia'],
      en: ['AI video production', 'AI-assisted scriptwriting', 'Veo and Flow', 'ElevenLabs', 'Camtasia']
    }
  },
  {
    slug: 'preguntale-a-berni',
    cover: 'assets/img/covers/preguntale-a-berni.webp',
    cat: 'cont',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX'],
    dates: ['2026-10', '2026-11'],
    tags: { es: ['chatbot', 'diseño conversacional'], en: ['chatbot', 'conversation design'] },
    title: { es: 'Preguntale a Berni: un asistente guiado sin campo de texto', en: 'Ask Berni: a guided assistant with no text box' },
    desc: {
      es: 'Chatbot por opciones que orienta a docentes, familias y evaluadores por el sitio, sin pedir datos, con un árbol de 33 nodos probado con docentes.',
      en: 'An option-based chatbot that guides teachers, families and assessors through the site without asking for data, with a 33-node tree tested with teachers.'
    },
    result: { es: '33 nodos, ajustado tras la prueba con docentes', en: '33 nodes, adjusted after testing with teachers' },
    skills: {
      es: ['Diseño conversacional', 'Privacidad por diseño', 'JavaScript', 'JSON', 'WCAG 2.1'],
      en: ['Conversation design', 'Privacy by design', 'JavaScript', 'JSON', 'WCAG 2.1']
    }
  },
  {
    slug: 'auditoria-estetica',
    cover: 'assets/img/covers/auditoria-estetica.jpg',
    cat: 'it',
    dates: ['2026-11', '2026-11'],
    tags: { es: ['ux/ui', 'auditoría'], en: ['ux/ui', 'audit'] },
    badges: ['UX'],
    title: { es: 'Auditoría UX/UI de un centro de estética', en: 'UX/UI audit of a facial aesthetics centre' },
    desc: {
      es: 'Auditoría heurística, de accesibilidad y de rendimiento de la landing de un centro de estética. Propuesta conceptual, no afiliada.',
      en: 'Heuristic, accessibility and performance audit of a facial aesthetics centre’s landing page. A conceptual proposal, not affiliated.'
    },
    result: { es: '14 problemas priorizados', en: '14 prioritised problems' },
    skills: { es: ['Heurísticas de Nielsen', 'WCAG 2.2', 'Core Web Vitals'], en: ['Nielsen heuristics', 'WCAG 2.2', 'Core Web Vitals'] }
  },
  {
    slug: 'servidor',
    cover: 'assets/img/covers/servidor.jpg',
    cat: 'it',
    also: ['cap'],
    badges: ['UX'],
    dates: ['2026-10', '2026-10'],
    tags: { es: ['ux/ui', 'sistema de diseño'], en: ['ux/ui', 'design system'] },
    title: { es: 'Repositorio web de recursos para autocapacitarse: análisis y diseño UX/UI', en: 'Self-learning resource hub: UX/UI analysis and design' },
    desc: {
      es: 'El servidor de Lourdes: cursos y materiales que vivían en Notion, rediseñados como un sitio con exploradores, búsqueda e inventario.',
      en: "Lourdes's server (El servidor de Lourdes): courses and materials that lived in Notion, redesigned as a site with explorers, search and an inventory."
    },
    result: { es: '160 cursos y 158 recursos filtrables', en: '160 courses and 158 resources to filter' },
    skills: { es: ['Arquitectura de información', 'Sistema de diseño', 'WCAG 2.1', 'Astro'], en: ['Information architecture', 'Design system', 'WCAG 2.1', 'Astro'] }
  },
  {
    slug: 'primer-empleo',
    cover: 'assets/img/covers/primer-empleo.jpg',
    cat: 'cap',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX'],
    dates: ['2026-10', '2026-11'],
    tags: { es: ['empleabilidad', 'capacitación'], en: ['employability', 'training'] },
    title: { es: 'Del aula al primer trabajo', en: 'From the classroom to a first job' },
    desc: {
      es: 'Taller de primer empleo convertido en un recorrido web de once paradas y cuatro apartados especiales: CV para ATS, LinkedIn, entrevistas con personas e IA, recibo de sueldo y finanzas.',
      en: 'A first-job workshop turned into an eleven-stop web journey with four special sections: ATS-ready CVs, LinkedIn, interviews with people and AI, payslips and personal finance.'
    },
    result: { es: '45 min de práctica, 65 con el simulacro', en: '45 min hands-on, 65 with the mock interview' },
    skills: { es: ['Doble Diamante', 'Sistema de diseño', 'WCAG 2.2', 'HTML/CSS/JS'], en: ['Double Diamond', 'Design system', 'WCAG 2.2', 'HTML/CSS/JS'] }
  },
  {
    slug: 'auditoria-turnos',
    cover: 'assets/img/covers/auditoria-turnos.jpg',
    cat: 'it',
    dates: ['2026-10', '2026-10'],
    tags: { es: ['ux/ui', 'accesibilidad'], en: ['ux/ui', 'accessibility'] },
    badges: ['UX'],
    title: { es: 'Auditoría UX/UI de un portal de turnos', en: 'UX/UI audit of an appointment portal' },
    desc: {
      es: 'Evaluación heurística, de accesibilidad y de performance del portal de turnos de un centro de diagnóstico.',
      en: 'Heuristic, accessibility and performance evaluation of a diagnostic centre’s appointment portal.'
    },
    result: { es: '13 hallazgos priorizados', en: '13 prioritised findings' },
    skills: { es: ['Heurísticas de Nielsen', 'WCAG 2.2', 'Lighthouse', 'PageSpeed Insights'], en: ['Nielsen heuristics', 'WCAG 2.2', 'Lighthouse', 'PageSpeed Insights'] }
  },
  {
    slug: 'sistemas-operativos',
    cover: 'assets/img/covers/sistemas-operativos.jpg',
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
    slug: 'imrsc-energia',
    cover: 'assets/img/covers/imrsc-energia.webp',
    cat: 'cap',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX'],
    dates: ['2026', '2026'],
    tags: { es: ['infraestructura', 'energía'], en: ['infrastructure', 'energy'] },
    title: { es: 'El Sistema Eléctrico Argentino', en: 'The Argentine Electrical System' },
    desc: {
      es: 'Recorrido interactivo propio: un mapa de la energía en ocho módulos, de la generación al consumidor final, con curaduría de fuentes oficiales.',
      en: 'A self-authored interactive journey: an energy map in eight modules, from generation to the end consumer, with curated official sources.'
    },
    result: { es: '8 módulos, glosario y 12 recursos curados', en: '8 modules, a glossary and 12 curated resources' },
    skills: { es: ['Guion didáctico', 'Curaduría de contenidos', 'HTML/CSS/JS', 'GitHub Pages'], en: ['Instructional scripting', 'Content curation', 'HTML/CSS/JS', 'GitHub Pages'] }
  },
  /* Se dicta desde 2019 (dates de 2019 a 2026-10): va después de El Sistema Eléctrico Argentino, así en el filtro
     Capacitación queda entre ese caso y Estandarización de infraestructura IT. Lejos de primer-empleo, para que
     "Siguiente caso" no conecte los dos casos (son publicaciones independientes). */
  {
    slug: 'taller-ciclosuperior',
    cover: 'assets/img/covers/taller-ciclosuperior.jpg',
    cat: 'cap',
    alsoTags: { it: { es: 'ux/ui', en: 'ux/ui' } },
    badges: ['UX'],
    dates: ['2019', '2026-10'],
    tags: { es: ['desarrollo de carrera', 'empleabilidad', 'capacitación'], en: ['career development', 'employability', 'training'] },
    title: { es: 'Taller - Ciclo superior', en: 'Workshop - Higher education pathways' },
    desc: {
      es: 'Un taller de desarrollo de carrera para adolescentes y adultos que se dicta desde 2019, rediseñado como una ruta de aprendizaje autodirigido de diez paradas para tomar decisiones informadas sobre la formación y el crecimiento personal y profesional.',
      en: 'A career development workshop for teenagers and adults, delivered since 2019, redesigned as a ten-stop self-directed learning path for making informed decisions about education and personal and professional growth.'
    },
    result: { es: '~80 estudiantes por año desde 2019', en: '~80 students a year since 2019' },
    skills: { es: ['Doble Diamante', 'Aprendizaje autodirigido', 'Sistema de diseño', 'WCAG 2.2'], en: ['Double Diamond', 'Self-directed learning', 'Design system', 'WCAG 2.2'] }
  },
  {
    slug: 'docente-era-digital',
    cover: 'assets/img/covers/docente-era-digital.jpg',
    video: true,
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
    slug: 'infraestructura-it',
    cover: 'assets/img/covers/infraestructura-it.jpg',
    cat: 'cap',
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
    slug: 'expo-smart-cities',
    cover: 'assets/img/covers/expo-smart-cities.jpg',
    video: true,
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
    slug: 'riesgos-digitales',
    cover: 'assets/img/covers/riesgos-digitales.jpg',
    cat: 'cap',
    also: ['cont'],
    alsoTags: { it: { es: 'ux', en: 'ux' } },
    dates: ['2024-07', '2024-11'],
    tags: { es: ['seguridad', 'investigación'], en: ['security', 'research'] },
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
    slug: 'the-crow',
    cover: 'assets/img/covers/the-crow.jpg',
    video: true,
    cat: 'cont',
    dates: ['2024-06', '2024-11'],
    tags: { es: ['animación', 'ia'], en: ['animation', 'ai'] },
    title: { es: 'The Crow, según Edgar Allan Poe', en: 'The Crow, after Edgar Allan Poe' },
    desc: {
      es: 'Corto animado inspirado en El Cuervo, hecho con herramientas generativas.',
      en: 'An animated short inspired by The Raven, made with generative tools.'
    },
    result: null,
    skills: { es: ['Runway ML', 'Adobe Firefly', 'Suno'], en: ['Runway ML', 'Adobe Firefly', 'Suno'] }
  },
  {
    slug: 'edulabs',
    cover: 'assets/img/covers/edulabs.jpg',
    cat: 'it',
    dates: ['2024-01', '2024-03'],
    tags: { es: ['ux/ui', 'accesibilidad'], en: ['ux/ui', 'accessibility'] },
    badges: ['UX'],
    title: { es: 'EduLabs', en: 'EduLabs' },
    desc: {
      es: 'Reinvención UX/UI de una plataforma de laboratorios remotos para hacer ciencia a distancia.',
      en: 'A UX/UI reinvention of a remote-labs platform for doing science from anywhere.'
    },
    result: { es: 'Sistema de diseño auditado en WCAG 2.1 AA', en: 'Design system audited against WCAG 2.1 AA' },
    skills: { es: ['Doble Diamante', 'Sistema de diseño', 'Figma', 'WCAG'], en: ['Double Diamond', 'Design system', 'Figma', 'WCAG'] }
  },
  {
    slug: 'tedxtecno',
    cover: 'assets/img/covers/tedxtecno.jpg',
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
    slug: 'erp-motion-graphics',
    cover: 'assets/img/covers/erp-motion-graphics.jpg',
    video: true,
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
  window.PROJECTS.forEach((p) => {
    const [a, b] = p.dates.map((d) => d.slice(0, 4));
    p.year = a === b ? a : `${a}-${b}`;
    // En desarrollo: "2026 - en curso" en cada idioma. Sin i18n.js (herramientas de build) queda solo el año.
    if (p.status === 'wip') {
      const I = window.I18N || {};
      p.yearL = Object.fromEntries(['es', 'en'].map((l) => [l, I[l] && I[l].yearOngoing ? I[l].yearOngoing.replace('{y}', a) : a]));
    }
  });
}
