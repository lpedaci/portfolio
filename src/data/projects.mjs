/* ------------------------------------------------------------------
   Project case studies.

   Each project becomes two real pages:
     /work/<slug>/       (English)
     /es/work/<slug>/    (Spanish)

   Block types understood by the renderer (see src/lib/blocks.mjs):
     prose    { h, p[] }
     list     { h, intro?, items[{ lead, body }] }
     roadmap  { h, note?, steps[{ code, title, body }] }
     callout  { h, body }
     stats    { items[{ value, label }] }
     cases    { h, note?, items[{ tag, title, body, links[] }] }
     embed    { kind, h?, note?, src, host, label, open?, ratio? }
     live     { h, note?, src, url, label }
     gallery  { h?, note?, wide?, images[{ src, alt }] }
   ------------------------------------------------------------------ */

export const projects = [
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
