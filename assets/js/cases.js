/* Contenido de cada caso, extraído del portfolio anterior y editado.
   Bloques: prose, list, roadmap, callout, stats, cases, embed, live, gallery. */

window.CASES = {
 "proyectos-aplicados": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Programa de proyectos aplicados",
   "en": "Applied projects programme"
  },
  "subtitle": {
   "es": "Equipos que desarrollan con clientes reales, del relevamiento a la entrega",
   "en": "Teams building for real clients, from requirements gathering to delivery"
  },
  "summary": {
   "problem": {
    "es": "Temas densos de gestión de proyectos (ciclos de vida, organigramas, Gantt, GitHub) se daban con diapositivas, y los proyectos corrían el riesgo de quedar en ejercicios hipotéticos.",
    "en": "Dense project-management topics (life cycles, org charts, Gantt, GitHub) were taught with slides, and projects risked ending up as hypothetical exercises."
   },
   "solution": {
    "es": "Un hub interactivo con las seis fases del proyecto, dos casos de referencia resueltos, los materiales de la asignatura y Hopper, un asistente de preguntas frecuentes.",
    "en": "An interactive hub with the six project phases, two fully worked reference cases, the course materials and Hopper, a frequently asked questions assistant."
   },
   "results": [
    {
     "v": "14-18",
     "l": {
      "es": "equipos por año, más de 70 integrantes",
      "en": "teams per year, over 70 members"
     }
    },
    {
     "v": "14",
     "l": {
      "es": "proyectos finalizados y publicados en el ciclo 2026",
      "en": "projects finished and published in the 2026 cycle"
     }
    },
    {
     "t": {
      "es": "Cada equipo llega a la defensa con un problema validado, una landing publicada y un usuario real que vio el producto.",
      "en": "Every team reaches the defence with a validated problem, a published landing page and a real user who has seen the product."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Coordinación de proyectos, diseño instruccional, front-end",
    "en": "Project coordination, instructional design, front-end"
   },
   "timeline": {
    "es": "En curso desde 2024, tercer año consecutivo, hub renovado en 2026",
    "en": "Running since 2024, third consecutive year, hub redesigned in 2026"
   },
   "context": {
    "en": "Seventh-year Informatics programme, Instituto Leonardo Murialdo",
    "es": "7mo año de Informática, Instituto Leonardo Murialdo"
   },
   "stack": [
    "HTML/CSS/JS",
    "JSON",
    "GitHub Pages",
    "Figma",
    "GenAI"
   ],
   "methods": [
    "ADDIE",
    "Backward Design",
    "Project-Based Learning",
    "Gantt"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Course hub (live)",
     "es": "Hub de la asignatura (en vivo)"
    },
    "url": "https://lpedaci.github.io/ev_proy-landing-casos/"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "es": "Mi rol",
     "en": "My role"
    },
    "p": [
     {
      "es": "Coordino el ciclo de vida de los proyectos de una incubadora ágil híbrida, con sprints y Gantt alineados a indicadores. Cada año trabajan entre 14 y 18 equipos, más de 70 integrantes en total, y cada equipo tiene un cliente real: releva el problema, lo valida, prototipa y entrega. El módulo interactivo que se ve abajo es el material con el que los equipos recorren ese ciclo.",
      "en": "I coordinate the project lifecycle of a hybrid agile incubator, with sprints and Gantt charts tied to indicators. Each year 14 to 18 teams take part, more than 70 people in total, and every team has a real client: they gather the requirements, validate the problem, prototype and deliver. The interactive module below is the material the teams use to walk through that cycle."
     }
    ],
    "toc": {
     "es": "Mi rol y contexto",
     "en": "My role and context"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "A comprehensive e-learning module for the seventh-year programme at Instituto Leonardo Murialdo. I transformed static theoretical content on project lifecycles, organisational structures and management tools, including GitHub and Gantt charts, into an interactive web experience designed for student engagement.",
      "es": "Un módulo de e-learning integral para 7mo año del Instituto Leonardo Murialdo. Transformé contenido teórico estático sobre ciclos de vida de proyectos, estructuras organizacionales y herramientas de gestión, incluyendo GitHub y diagramas de Gantt, en una experiencia web interactiva, diseñada para el compromiso del estudiante."
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "en": "The challenge",
     "es": "El desafío"
    },
    "p": [
     {
      "en": "The objective was to digitise the Project Evaluation and Management curriculum. The challenge was making dense topics, such as departmentalisation criteria and organisational chart conventions, accessible and dynamic for eighteen-year-old students, moving away from traditional slide-based lectures.",
      "es": "El objetivo fue digitalizar el currículum de Evaluación y Gestión de Proyectos. El desafío consistió en hacer que temas densos, como los criterios de departamentalización y las convenciones de organigramas, resultaran accesibles y dinámicos para estudiantes de 18 años, dejando atrás las clases tradicionales basadas en diapositivas."
     }
    ],
    "toc": {
     "es": "El desafío y la solución",
     "en": "The challenge and the solution"
    }
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "en": "The solution: the LXD approach",
     "es": "La solución: el enfoque LXD"
    },
    "items": [
     {
      "lead": {
       "en": "Interactive framework",
       "es": "Marco interactivo"
      },
      "body": {
       "en": "I designed and coded interactive web modules that build a non-linear path through the five project phases: initiation, planning, execution, maintenance and closure.",
       "es": "Diseñé y programé módulos web interactivos que arman un recorrido no lineal a través de las cinco fases de un proyecto: inicio, planificación, ejecución, mantenimiento y cierre."
      }
     },
     {
      "lead": {
       "en": "Tool integration",
       "es": "Integración de herramientas"
      },
      "body": {
       "en": "The module guides students through real management ecosystems: planning systems (Gantt bars, milestones, dependencies), version control (GitHub and concurrent development) and incident management (tracking errors and customer requests).",
       "es": "El módulo guía a los estudiantes por ecosistemas de gestión reales: sistemas de planificación (barras de Gantt, hitos, dependencias), control de versiones (GitHub y desarrollo concurrente) y gestión de incidencias (seguimiento de errores y pedidos de clientes)."
      }
     },
     {
      "lead": {
       "en": "Assessment strategy",
       "es": "Estrategia de evaluación"
      },
      "body": {
       "en": "Knowledge checks are integrated into the organisational chart activity, where students analyse global market leaders.",
       "es": "Integré instancias de verificación de conocimientos en la actividad de organigramas, donde los estudiantes analizan a líderes del mercado global."
      }
     }
    ]
   },
   {
    "t": "roadmap",
    "h": {
     "en": "Work process roadmap: the six project phases",
     "es": "Roadmap del proceso de trabajo: las seis fases del proyecto"
    },
    "note": {
     "en": "Every team moves through the same six phases, from a real client problem to a published product. The real user is brought back at key stages to validate progress.",
     "es": "Todos los equipos recorren las mismas seis fases, desde el problema de un cliente real hasta un producto publicado. El usuario real es citado en etapas clave para validar el avance."
    },
    "steps": [
     {
      "code": "E01",
      "title": {
       "en": "Problem validation",
       "es": "Validación del problema"
      },
      "body": {
       "en": "Real user, structured interview, diagnosis of the current situation.",
       "es": "Usuario real, entrevista estructurada, diagnóstico de la situación actual."
      }
     },
     {
      "code": "E02",
      "title": {
       "en": "Feasibility study",
       "es": "Estudio de factibilidad"
      },
      "body": {
       "en": "Technical, management and economic viability, plus benchmarking.",
       "es": "Viabilidad técnica, de gestión y económica, más benchmarking."
      }
     },
     {
      "code": "E03",
      "title": {
       "en": "System design",
       "es": "Diseño del sistema"
      },
      "body": {
       "en": "Functional and non-functional requirements, OKRs, user profiles.",
       "es": "Requerimientos funcionales y no funcionales, OKRs, perfiles de usuario."
      }
     },
     {
      "code": "E04",
      "title": {
       "en": "HCI prototyping",
       "es": "Prototipado HCI"
      },
      "body": {
       "en": "Figma mockup, accessibility standards, validation with the user.",
       "es": "Mockup en Figma, estándares de accesibilidad, validación con el usuario."
      }
     },
     {
      "code": "E05",
      "title": {
       "en": "Development",
       "es": "Desarrollo"
      },
      "body": {
       "en": "Implementation, GitHub repository, landing page published on a real server.",
       "es": "Implementación, repositorio en GitHub, landing page publicada en servidor real."
      }
     },
     {
      "code": "E06",
      "title": {
       "en": "Final presentation",
       "es": "Presentación final"
      },
      "body": {
       "en": "Slide deck, oral defence, delivery of the complete project folder.",
       "es": "Presentación en diapositivas, defensa oral, entrega de la carpeta de proyecto completa."
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "en": "Incorrect definition, incorrect solution.",
     "es": "Definición incorrecta, solución incorrecta."
    },
    "body": {
     "en": "Hypothetical projects are not accepted: every team starts from a concrete user with a concrete need, applies a structured interview to separate symptoms from root causes, and brings that same user back at key stages to validate progress. Not a single line of code is written before the diagnosis is complete.",
     "es": "No se admiten proyectos hipotéticos: cada equipo parte de un usuario concreto con una necesidad concreta, aplica una entrevista estructurada para separar síntomas de causas raíz, y vuelve a citar a ese mismo usuario en etapas clave para validar el avance. No se escribe una sola línea de código antes de completar el diagnóstico."
    }
   },
   {
    "t": "cases",
    "h": {
     "en": "Two worked case studies that model the full journey",
     "es": "Dos casos de estudio que modelan el recorrido completo"
    },
    "note": {
     "en": "To show students what done looks like at every phase, I designed and documented two complete reference cases, each with its own case site and presentation deck. Teams use them as worked examples while building their own projects.",
     "es": "Para mostrarles a los estudiantes cómo se ve cada fase terminada, diseñé y documenté dos casos de referencia completos, cada uno con su propio sitio de caso y su presentación. Los equipos los usan como ejemplos resueltos mientras construyen sus propios proyectos."
    },
    "items": [
     {
      "tag": {
       "en": "Case 01 | Retail",
       "es": "Caso 01 | Comercio"
      },
      "title": {
       "en": "Stock management for a neighbourhood hardware store",
       "es": "Gestión de stock para una ferretería de barrio"
      },
      "body": {
       "en": "A twenty-two-year-old family business losing sales to stockouts, running on outdated spreadsheets and paper. The case traces symptoms back to root causes and designs a tailored stock and sales-history system.",
       "es": "Un comercio familiar con 22 años de historia que pierde ventas por quiebres de stock, trabajando con planillas desactualizadas y papel. El caso rastrea síntomas hasta causas raíz y diseña un sistema a medida de stock e historial de ventas."
      },
      "links": [
       {
        "label": {
         "en": "Case site",
         "es": "Sitio del caso"
        },
        "url": "https://lpedaci.github.io/ev_proy-modulo02-caso01/"
       },
       {
        "label": {
         "en": "Slide deck",
         "es": "Presentación"
        },
        "url": "https://lpedaci.github.io/ev_proy-modulo02-caso01-slides/"
       }
      ]
     },
     {
      "tag": {
       "en": "Case 02 | Hardware + software",
       "es": "Caso 02 | Hardware + software"
      },
      "title": {
       "en": "SensorOffice, environmental monitoring for an accounting firm",
       "es": "SensorOffice, monitoreo ambiental para un estudio contable"
      },
      "body": {
       "en": "Three offices, rising electricity bills and no air-quality data. The case designs a sensor network with a web dashboard, alerts and remote control, combining hardware and software decisions.",
       "es": "Tres oficinas, factura de luz en alza y ningún dato de calidad de aire. El caso diseña una red de sensores con dashboard web, alertas y control remoto, combinando decisiones de hardware y software."
      },
      "links": [
       {
        "label": {
         "en": "Case site",
         "es": "Sitio del caso"
        },
        "url": "https://lpedaci.github.io/ev_proy-modulo02-caso02/"
       },
       {
        "label": {
         "en": "Slide deck",
         "es": "Presentación"
        },
        "url": "https://lpedaci.github.io/ev_proy-modulo02-caso02-slides/"
       }
      ]
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Proyectos finalizados 2026",
     "en": "Finished projects, 2026"
    },
    "p": [
     {
      "es": "En el ciclo 2026, los 14 equipos de 7mo INFO A y 7mo INFO B, siete por división, llevaron el problema de un cliente real hasta un sistema funcionando y con su landing de presentación publicada. Diez son sistemas de software, casi todos web, y cuatro combinan hardware y software, dos de ellos con IoT. Los clientes vienen de sectores muy distintos: logística, salud pública, industria textil y automotriz, ciencia y tecnología, comercio, servicios de oficios, un gimnasio y un club social.",
      "en": "In the 2026 cycle, the 14 teams from 7th year INFO A and INFO B, seven per class, took a real client’s problem all the way to a working system with its presentation landing page published. Ten are software systems, almost all of them web based, and four combine hardware and software, two of them with IoT. The clients come from very different sectors: logistics, public health, the textile and automotive industries, science and technology, retail, trade services, a gym and a social club."
     },
     {
      "es": "En el hub, cada proyecto tiene su tarjeta con la captura de la landing, el sector del cliente, el tipo de solución y los enlaces a la documentación, el manual de usuario o las preguntas frecuentes que publicó el equipo. Un filtro por división muestra los proyectos de cada curso.",
      "en": "In the hub, every project has its own card with a screenshot of the landing page, the client’s sector, the type of solution and links to the documentation, the user manual or the FAQ the team published. A filter by class shows the projects of each group."
     }
    ],
    "toc": {
     "es": "Proyectos 2026 y Hopper",
     "en": "2026 projects and Hopper"
    }
   },
   {
    "t": "gallery",
    "join": true,
    "rowsOf": [
     1,
     1
    ],
    "h": {
     "es": "El hub renovado",
     "en": "The redesigned hub"
    },
    "images": [
     {
      "src": "proyectos-01-fases.webp",
      "w": 1300,
      "h": 570,
      "alt": {
       "es": "Sección «Seis fases, un solo método» del hub, en modo oscuro: a la izquierda el título y la bajada «De la entrevista con el usuario real a la defensa oral»; a la derecha, el cronograma del proyecto con las fases E01 a E06, cada una con sus entregables y una barra que marca su lugar entre inicio, factibilidad, desarrollo y cierre.",
       "en": "The hub’s “Six phases, one method” section, in dark mode: on the left, the title and the line “From the interview with the real user to the oral defence”; on the right, the project schedule with phases E01 to E06, each with its deliverables and a bar marking where it falls between start, feasibility, development and closure."
      },
      "caption": {
       "es": "Las seis fases, en un cronograma.",
       "en": "The six phases, as a schedule."
      }
     },
     {
      "src": "proyectos-02-finalizados-2026.webp",
      "w": 1300,
      "h": 595,
      "alt": {
       "es": "Sección «Proyectos finalizados 2026» del hub: el filtro Todos, 7mo INFO A y 7mo INFO B, el contador «Mostrando 14 proyectos», flechas de navegación y las primeras tres tarjetas con la captura de la landing de cada equipo.",
       "en": "The hub’s “Finished projects 2026” section: the All, 7mo INFO A and 7mo INFO B filter, the “Showing 14 projects” counter, navigation arrows and the first three cards with a screenshot of each team’s landing page."
      },
      "caption": {
       "es": "Los 14 proyectos del ciclo, con filtro por división.",
       "en": "The 14 projects of the cycle, with a filter by class."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Hopper, el asistente de la asignatura",
     "en": "Hopper, the course assistant"
    },
    "items": [
     {
      "lead": {
       "es": "Preguntas frecuentes, sin IA generativa",
       "en": "Frequently asked questions, no generative AI"
      },
      "body": {
       "es": "Responde a partir de 28 preguntas frecuentes escritas para la materia. Busca coincidencias por palabras clave con un puntaje mínimo calibrado: si la consulta no lo alcanza, da una respuesta de respaldo en lugar de arriesgar una equivocada.",
       "en": "It answers from 28 frequently asked questions written for the course. It matches keywords against a calibrated minimum score: when a query falls short, it gives a fallback answer instead of risking a wrong one."
      }
     },
     {
      "lead": {
       "es": "Dos públicos",
       "en": "Two audiences"
      },
      "body": {
       "es": "Al abrirlo pregunta quién consulta, estudiantes de la materia o personas que quieren conocerla, y se puede cambiar de público en cualquier momento.",
       "en": "When it opens it asks who is asking, students of the course or people who want to learn about it, and the audience can be changed at any time."
      }
     },
     {
      "lead": {
       "es": "Fácil de mantener",
       "en": "Easy to maintain"
      },
      "body": {
       "es": "Es un único script sin dependencias que se suma al sitio con una línea. El contenido vive en un archivo JSON aparte, no guarda datos en el navegador y una prueba automática ayuda a calibrar el umbral de coincidencia.",
       "en": "It is a single script with no dependencies, added to the site with one line. The content lives in a separate JSON file, it stores nothing in the browser and an automated test helps tune the matching threshold."
      }
     },
     {
      "lead": {
       "es": "Por qué Hopper",
       "en": "Why Hopper"
      },
      "body": {
       "es": "Lleva el nombre de Grace Hopper, que insistió en que un programa tiene que poder leerlo alguien que no lo escribió: la misma idea que guía la documentación que se les pide a los equipos.",
       "en": "It is named after Grace Hopper, who insisted that a program must be readable by someone who did not write it: the same idea behind the documentation the teams are asked to produce."
      }
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "en": "Interactive course hub, live",
     "es": "Hub interactivo de la asignatura, en vivo"
    },
    "note": {
     "es": "Diseñé y programé a mano el hub de la asignatura, publicado en GitHub Pages y renovado en 2026. Centraliza las seis fases del proyecto, los dos casos de estudio, los 14 proyectos finalizados, los tres módulos de contenido, los lineamientos del proyecto interdisciplinario, el cronograma Gantt 2026, las pautas de entrega y un ejemplo de documentación completa.",
     "en": "I designed and hand-coded the course hub, published on GitHub Pages and redesigned in 2026. It brings together the six project phases, the two case studies, the 14 finished projects, the three content modules, the guidelines of the interdisciplinary project, the 2026 Gantt schedule, the delivery guidelines and a complete documentation example."
    },
    "src": "https://lpedaci.github.io/ev_proy-landing-casos/",
    "url": "https://lpedaci.github.io/ev_proy-landing-casos/",
    "label": {
     "en": "Course hub",
     "es": "Hub de la asignatura"
    },
    "toc": {
     "es": "Hub interactivo y vista previa",
     "en": "Interactive hub and preview"
    }
   },
   {
    "t": "embed",
    "join": true,
    "kind": "doc",
    "h": {
     "en": "Module preview",
     "es": "Vista previa del módulo"
    },
    "src": "https://drive.google.com/file/d/1Xm86v6jKeMypuRnhMuxaunQLTvCZDBpW/preview",
    "host": "Google Drive",
    "label": {
     "en": "Course module document",
     "es": "Documento del módulo"
    }
   }
  ],
  "outcome": {
   "h": {
    "en": "Outcomes",
    "es": "Resultados"
   },
   "body": {
    "es": "El módulo va por su tercer año consecutivo de uso. En el ciclo 2026, los 14 equipos llegaron al cierre con un problema validado, un sistema publicado con su landing y un usuario real que vio el producto, en lugar de un ejercicio hipotético entregado en papel.",
    "en": "The module is now in its third consecutive year of use. In the 2026 cycle, all 14 teams reached the end with a validated problem, a published system with its landing page and a real user who has seen the product, rather than a hypothetical exercise handed in on paper."
   }
  }
 },
 "riesgos-digitales": {
  "cat": "it",
  "touch": "cont",
  "title": {
   "es": "Programa participativo de riesgos digitales",
   "en": "Participatory digital risk programme"
  },
  "subtitle": {
   "es": "Intersafe: 2da temporada. Un programa de educación sobre riesgos digitales, construido con la comunidad y publicado como temporada de podcast.",
   "en": "Intersafe: season 2. A digital-risk education programme, built with the community and released as a podcast season."
  },
  "chips": {
   "es": [
    "LXD",
    "UX Research",
    "Coordinación de equipos",
    "Producción de contenido"
   ],
   "en": [
    "LXD",
    "UX Research",
    "Team coordination",
    "Content production"
   ]
  },
  "summary": {
   "problem": {
    "es": "Los riesgos en internet (acoso, manipulación, estafas, pérdida de privacidad) crecieron con la pandemia, y faltaba contenido que los explicara a niños, adolescentes y adultos.",
    "en": "Online risks (harassment, manipulation, scams, loss of privacy) grew during the pandemic, and there was little content explaining them to children, teenagers and adults."
   },
   "solution": {
    "es": "Un programa participativo en Doble Diamante: 11 equipos investigaron con encuestas y entrevistas, y produjeron una temporada de podcast.",
    "en": "A participatory Double Diamond programme: 11 teams researched through surveys and interviews and produced a podcast season."
   },
   "results": [
    {
     "v": {
      "es": "1.741",
      "en": "1,741"
     },
     "l": {
      "es": "personas encuestadas, de todas las franjas de edad",
      "en": "people surveyed, across every age group"
     }
    },
    {
     "v": "272",
     "l": {
      "es": "reproducciones en Spotify desde octubre de 2024",
      "en": "Spotify plays since October 2024"
     }
    },
    {
     "t": {
      "es": "Temporada completa publicada y presentada en vivo a la comunidad educativa.",
      "en": "Full season published and presented live to the school community."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Diseño y coordinación del programa (LXD): estructura del proceso, research, consignas, acompañamiento y publicación",
    "en": "Programme design and coordination (LXD): process structure, research, briefs, team support and publishing"
   },
   "timeline": {
    "es": "Julio a noviembre 2024",
    "en": "July to November 2024"
   },
   "context": {
    "es": "Riesgos en internet (ciberbullying, manipulación, estafas, pérdida de privacidad) agravados durante la pandemia de COVID-19",
    "en": "Online risks (cyberbullying, manipulation, scams, loss of privacy) made worse during the COVID-19 pandemic"
   },
   "stack": [
    "Google Docs",
    "Google Forms",
    "Google Sheets",
    "Camtasia",
    "Audacity",
    "CapCut",
    "Cleanvoice",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Firefly",
    "Spotify for Creators"
   ],
   "methods": [
    "Doble Diamante",
    "UX Research",
    "Encuestas",
    "Entrevistas",
    "Gantt"
   ]
  },
  "links": [],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El problema",
     "en": "The problem"
    },
    "body": {
     "es": "Generar contenido educativo que comunique e instruya, a niños, adolescentes y adultos, sobre los múltiples riesgos existentes en internet, tales como el acoso, la manipulación, las estafas y la pérdida de privacidad, exacerbados durante la pandemia por COVID-19.",
     "en": "Generate educational content that communicates and instructs children, teenagers and adults about the multiple risks on the internet, such as harassment, manipulation, scams and the loss of privacy, which were exacerbated during the COVID-19 pandemic."
    },
    "toc": {
     "es": "El problema y el proceso",
     "en": "The problem and the process"
    }
   },
   {
    "t": "diamond",
    "join": true,
    "h": {
     "es": "Proceso: Doble Diamante",
     "en": "Process: Double Diamond"
    },
    "note": {
     "es": "Aplicando el proceso de diseño Doble Diamante, el proyecto se llevó adelante en etapas.",
     "en": "Applying the Double Diamond design process, the project was carried out in stages."
    },
    "ends": [
     {
      "es": "Problema",
      "en": "Problem"
     },
     {
      "es": "Definición del problema",
      "en": "Problem definition"
     },
     {
      "es": "Solución",
      "en": "Solution"
     }
    ],
    "phases": [
     {
      "name": "Discover",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "Información clave sobre el problema",
       "en": "Key information about the problem"
      },
      "items": {
       "es": [
        "Discusión inicial",
        "Casos reales",
        "Selección del tema"
       ],
       "en": [
        "Initial discussion",
        "Real cases",
        "Topic selection"
       ]
      }
     },
     {
      "name": "Define",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "El área de foco",
       "en": "The focus area"
      },
      "items": {
       "es": [
        "Marco teórico",
        "Encuestas",
        "Entrevistas",
        "Objetivos",
        "Audiencia"
       ],
       "en": [
        "Theoretical framework",
        "Surveys",
        "Interviews",
        "Goals",
        "Audience"
       ]
      }
     },
     {
      "name": "Develop",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "Soluciones posibles",
       "en": "Potential solutions"
      },
      "items": {
       "es": [
        "Guiones",
        "Grabación y edición",
        "Piezas gráficas",
        "Feedback"
       ],
       "en": [
        "Scripts",
        "Recording and editing",
        "Graphics",
        "Feedback"
       ]
      }
     },
     {
      "name": "Deliver",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "Soluciones que funcionan",
       "en": "Solutions that work"
      },
      "items": {
       "es": [
        "Spotify",
        "Radio en vivo",
        "Reflexión"
       ],
       "en": [
        "Spotify",
        "Live radio",
        "Reflection"
       ]
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "name": "Discover",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Entender el problema en profundidad, las necesidades del usuario y el contexto.",
     "en": "Understand the problem deeply, the user needs and the context."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Actividades clave",
     "en": "Key activities"
    },
    "items": [
     {
      "lead": {
       "es": "Presentación y discusión inicial",
       "en": "Initial presentation and discussion"
      },
      "body": {
       "es": "Un espacio para que los estudiantes compartan sus ideas previas sobre los peligros digitales.",
       "en": "A space for students to share their prior ideas about digital dangers."
      }
     },
     {
      "lead": {
       "es": "Discusión guiada",
       "en": "Guided discussion"
      },
      "body": {
       "es": "Se analizaron ejemplos concretos (noticias, casos reales y personales), fomentando empatía, comprensión y pensamiento crítico.",
       "en": "Concrete examples were analysed (news stories, real-life and personal cases), fostering empathy, understanding and critical thinking."
      }
     },
     {
      "lead": {
       "es": "Selección del tema",
       "en": "Topic selection"
      },
      "body": {
       "es": "Cada equipo explora un tema vinculado a los peligros en línea (ciberbullying, phishing, cyberstalking, etc.).",
       "en": "Each team explores a topic related to online dangers (cyberbullying, phishing, cyberstalking, etc.)."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "02",
    "name": "Define",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Establecer un enfoque claro, alineado con las necesidades identificadas.",
     "en": "Establish a clear approach aligned with the identified needs."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Actividades clave",
     "en": "Key activities"
    },
    "items": [
     {
      "lead": {
       "es": "Investigación teórica",
       "en": "Theoretical research"
      },
      "body": {
       "es": "Análisis de documentación oficial, noticias, material audiovisual y marcos legales, nacionales e internacionales.",
       "en": "Analysing official documentation, news, audiovisual materials and legal frameworks, both national and international."
      }
     },
     {
      "lead": {
       "es": "Revisión del marco teórico",
       "en": "Review of the theoretical framework"
      },
      "body": {
       "es": "Cada equipo revisa el marco teórico en un documento compilado, vía Google Docs.",
       "en": "Each team reviews the framework through a compiled document, via Google Docs."
      }
     },
     {
      "lead": {
       "es": "Diseño de encuestas anónimas",
       "en": "Designing anonymous surveys"
      },
      "body": {
       "es": "Para recoger opiniones y experiencias de la comunidad, con preguntas cerradas y abiertas y un espacio para compartir experiencias personales.",
       "en": "To gather opinions and experiences from the community, with closed and open-ended questions and a space to share personal experiences."
      }
     },
     {
      "lead": {
       "es": "Entrevistas",
       "en": "Interviews"
      },
      "body": {
       "es": "Según el equipo y su temática, la encuesta se complementó con entrevistas para profundizar en experiencias concretas.",
       "en": "Depending on each team and its topic, the survey was complemented with interviews to dig into specific experiences."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "items": {
     "es": [
      "Identificación del núcleo del problema, a partir de los datos recogidos y los insights sobre el peligro elegido.",
      "Delimitación de objetivos claros y medibles, alineados con la naturaleza del problema. Resultados esperados: concientización y educación. Indicadores de éxito: alcance de audiencia, participación en la encuesta y nivel de interacción.",
      "Definición del perfil de audiencia: necesidades, motivaciones y barreras, para asegurar que el proyecto sea relevante y accesible.",
      "Organización del equipo por roles y responsabilidades (asignación de tareas).",
      "Definición del alcance del proyecto, en contenido y medios a usar.",
      "Diseño del marco teórico (normativa, análisis de casos, entre otros).",
      "Implementación de la encuesta y análisis de resultados con Google Forms y Google Sheets."
     ],
     "en": [
      "Identification of the core issue, based on the collected data and insights around the selected danger.",
      "Clear, measurable goals aligned with the nature of the problem. Expected outcomes: awareness and education. Success indicators: audience reach, survey participation and interaction level.",
      "Definition of the target audience profile: needs, motivations and barriers, to make sure the project is relevant and accessible.",
      "Team organisation by roles and responsibilities (task assignment).",
      "Project scope definition, in terms of content and media.",
      "Design of the theoretical framework (regulations, case studies, among others).",
      "Survey implementation and analysis of results using Google Forms and Google Sheets."
     ]
    },
    "hl": true
   },
   {
    "t": "bars",
    "h": {
     "es": "La encuesta",
     "en": "The survey"
    },
    "title": {
     "es": "Personas encuestadas por edad (n = 1.741)",
     "en": "People surveyed by age (n = 1,741)"
    },
    "rows": [
     {
      "label": {
       "es": "Entre 11 y 14 años",
       "en": "Ages 11-14"
      },
      "v": 37.9
     },
     {
      "label": {
       "es": "Entre 15 y 17 años",
       "en": "Ages 15-17"
      },
      "v": 31.7
     },
     {
      "label": {
       "es": "Mayor de 18 años",
       "en": "Ages 18 and older"
      },
      "v": 30.3
     }
    ]
   },
   {
    "t": "phase",
    "n": "03",
    "name": "Develop",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Crear soluciones a partir de los insights obtenidos.",
     "en": "Create solutions based on the insights obtained."
    }
   },
   {
    "t": "activities",
    "h": {
     "es": "Actividades clave",
     "en": "Key activities"
    },
    "items": [
     {
      "title": {
       "es": "Producción de podcasts educativos e informativos",
       "en": "Producing educational and informative podcasts"
      },
      "points": [
       {
        "lead": {
         "es": "Guion",
         "en": "Script"
        },
        "body": {
         "es": "Desarrollo colaborativo en Google Docs, integrando el marco teórico investigado. Inclusión de testimonios, datos relevantes y mensajes clave adaptados a la audiencia.",
         "en": "Collaborative development in Google Docs, integrating the researched theoretical framework. Testimonies, relevant data and key messages tailored to the audience."
        }
       },
       {
        "lead": {
         "es": "Grabación",
         "en": "Recording"
        },
        "body": {
         "es": "Smartphones o computadoras, con auriculares y micrófonos básicos, en ambientes organizados para lograr grabaciones claras y accesibles. Coordinación de roles en el equipo (narradores, entrevistados, técnicos de audio).",
         "en": "Smartphones or computers, with headphones and basic microphones, in organised environments for clear, accessible recordings. Role coordination within the team (narrators, interviewees, audio technicians)."
        }
       },
       {
        "lead": {
         "es": "Edición",
         "en": "Editing"
        },
        "body": {
         "es": "Camtasia, Audacity y CapCut para cortar, ajustar y agregar efectos básicos. Mejora de audio con IA usando Cleanvoice para quitar ruido, mejorar claridad y optimizar la calidad.",
         "en": "Camtasia, Audacity and CapCut to cut, adjust and add basic effects. AI audio enhancement with Cleanvoice to remove noise, improve clarity and optimise quality."
        }
       }
      ],
      "tools": [
       "Camtasia",
       "Audacity",
       "CapCut",
       "Cleanvoice"
      ]
     },
     {
      "title": {
       "es": "Creación de materiales gráficos",
       "en": "Creating graphic materials"
      },
      "points": [
       {
        "body": {
         "es": "Diseño de tapas de episodios, banners promocionales y contenido para redes.",
         "en": "Design of episode covers, promotional banners and social media content."
        }
       },
       {
        "body": {
         "es": "Uso de Adobe Photoshop, Illustrator y Firefly para un estilo visual cohesivo y profesional.",
         "en": "Use of Adobe Photoshop, Illustrator and Firefly for a cohesive, professional visual style."
        }
       },
       {
        "body": {
         "es": "Iteración de los diseños según el feedback recibido.",
         "en": "Iteration on designs based on the feedback received."
        }
       }
      ],
      "tools": [
       "Photoshop",
       "Illustrator",
       "Firefly"
      ]
     },
     {
      "title": {
       "es": "Iteración y feedback",
       "en": "Iteration and feedback"
      },
      "points": [
       {
        "lead": {
         "es": "Revisiones periódicas",
         "en": "Periodic reviews"
        },
        "body": {
         "es": "Puntos de control con la docente para evaluar el avance en guiones, grabaciones y diseños.",
         "en": "Checkpoints with the instructor to evaluate progress on scripts, recordings and designs."
        }
       },
       {
        "lead": {
         "es": "Ajustes",
         "en": "Adjustments"
        },
        "body": {
         "es": "Incorporación de los cambios sugeridos, enfocados en claridad, atractivo visual y relevancia del contenido.",
         "en": "Incorporating the suggested changes, focused on clarity, visual appeal and content relevance."
        }
       }
      ]
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Piezas gráficas de la temporada",
     "en": "The season’s graphic pieces"
    },
    "note": {
     "es": "Tapas de episodios y piezas para redes con una identidad común: fotografía en blanco y negro, papel rasgado, turquesa y naranja, y un QR a Spotify en cada pieza.",
     "en": "Episode covers and social pieces with a shared identity: black-and-white photography, torn paper, turquoise and orange, and a Spotify QR code on every piece."
    },
    "single": true,
    "images": [
     {
      "src": "riesgos-piezas.jpg",
      "w": 1600,
      "h": 1142,
      "alt": {
       "es": "Mosaico de tapas de Intersafe segunda temporada: la portada \"Su guía personal sobre peligros en internet\" y episodios como El bisturí digital y la cicatriz mental, Agresión digital y Disrespect cibernético, cada uno con su QR a Spotify.",
       "en": "Mosaic of Intersafe season two covers: the \"Your personal guide to online dangers\" cover and episodes such as The digital scalpel and the mental scar, Digital aggression and Cyber disrespect, each with its Spotify QR code."
      }
     }
    ],
    "small": true
   },
   {
    "t": "gallery",
    "wide": true,
    "h": {
     "es": "Seguimiento de la producción",
     "en": "Tracking the production"
    },
    "note": {
     "es": "Los cinco meses de trabajo de los 11 equipos, planificados y seguidos en un diagrama de Gantt.",
     "en": "The five months of work of the 11 teams, planned and tracked on a Gantt chart."
    },
    "images": [
     {
      "src": "riesgos-gantt.jpg",
      "w": 1400,
      "h": 1073,
      "alt": {
       "es": "Diagrama de Gantt de los cinco meses de producción",
       "en": "Gantt chart for the five-month production"
      }
     }
    ],
    "small": true
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "items": {
     "es": [
      "Podcasts grabados, editados y listos para publicar.",
      "Materiales gráficos listos para promover los episodios en distintas plataformas."
     ],
     "en": [
      "Podcasts recorded, edited and ready for publication.",
      "Graphic materials ready to promote the episodes across platforms."
     ]
    },
    "hl": true
   },
   {
    "t": "phase",
    "n": "04",
    "name": "Deliver",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Implementar y compartir la solución con la comunidad.",
     "en": "Implement and share the solution with the community."
    }
   },
   {
    "t": "activities",
    "h": {
     "es": "Actividades clave",
     "en": "Key activities"
    },
    "items": [
     {
      "title": {
       "es": "Publicación en Spotify",
       "en": "Publishing on Spotify"
      },
      "points": [
       {
        "body": {
         "es": "Creación de un perfil en Spotify for Creators.",
         "en": "Creating a profile on Spotify for Creators."
        }
       },
       {
        "body": {
         "es": "Subida de episodios con descripciones optimizadas para SEO y tapas gráficas.",
         "en": "Uploading episodes with SEO-optimised descriptions and graphic covers."
        }
       },
       {
        "body": {
         "es": "Organización de episodios en una estructura lógica y accesible, según la narrativa temática de cada uno.",
         "en": "Organising episodes in a logical, accessible structure, following each one’s thematic narrative."
        }
       }
      ],
      "tools": [
       "Spotify for Creators"
      ]
     },
     {
      "title": {
       "es": "Presentaciones en vivo",
       "en": "Live presentations"
      },
      "points": [
       {
        "body": {
         "es": "Organización de un evento tipo “radio en vivo” donde los equipos presentan sus episodios a la comunidad educativa.",
         "en": "Organising a “live radio” event where teams present their episodes to the educational community."
        }
       },
       {
        "body": {
         "es": "Espacios interactivos con la audiencia: debates, preguntas y encuestas en tiempo real para evaluar el impacto de los temas tratados.",
         "en": "Interactive spaces with the audience: debates, questions and real-time polls to evaluate the impact of the topics discussed."
        }
       }
      ]
     },
     {
      "title": {
       "es": "Reflexión y aprendizaje",
       "en": "Reflection and learning"
      },
      "points": [
       {
        "body": {
         "es": "Debate final en cada equipo para analizar logros, desafíos y aprendizajes clave.",
         "en": "A final debate within each team to analyse achievements, challenges and key learnings."
        }
       },
       {
        "body": {
         "es": "Documentación de reflexiones para futuras iteraciones del proyecto.",
         "en": "Documenting reflections for future iterations of the project."
        }
       }
      ]
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Difusión: historias y afiches",
     "en": "Promotion: stories and posters"
    },
    "note": {
     "es": "Presentadas en mockups: historias de Instagram con el enlace a cada episodio, y afiches con QR para la comunidad educativa.",
     "en": "Shown in mockups: Instagram stories linking to each episode, and posters with QR codes for the school community."
    },
    "wide": true,
    "images": [
     {
      "src": "riesgos-historias.jpg",
      "w": 1600,
      "h": 1066,
      "alt": {
       "es": "Tres celulares con historias de Instagram de Intersafe que reproducen los episodios 3, 4 y 5 del podcast, cada una con el botón Escuchá el episodio.",
       "en": "Three phones showing Intersafe Instagram stories playing podcast episodes 3, 4 and 5, each with a Listen to the episode button."
      }
     },
     {
      "src": "riesgos-afiches.jpg",
      "w": 1600,
      "h": 1066,
      "alt": {
       "es": "Dos personas miran tres afiches pegados en una pared: Entre la intimidad y el riesgo, la portada de Intersafe segunda temporada y Detrás de la pantalla, el lado oscuro del ciberstalking.",
       "en": "Two people look at three posters on a wall: Between intimacy and risk, the Intersafe season two cover, and Behind the screen, the dark side of cyberstalking."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "items": {
     "es": [
      "Publicación de toda la temporada en Spotify, con descripciones y gráficas que reflejan el trabajo de los equipos.",
      "Presentaciones interactivas que fomentaron el debate y la concientización en la comunidad educativa.",
      "Identificación de oportunidades de mejora para futuras iniciativas de aprendizaje digital."
     ],
     "en": [
      "The whole season published on Spotify, with descriptions and graphics that reflect the teams’ work.",
      "Interactive presentations that encouraged debate and raised awareness within the educational community.",
      "Opportunities for improvement identified for future digital learning initiatives."
     ]
    },
    "hl": true
   },
   {
    "t": "phase",
    "id": "alcance",
    "name": {
     "es": "Resultados y alcance",
     "en": "Results and reach"
    },
    "mode": {
     "es": "alcance",
     "en": "reach"
    },
    "q": {
     "es": "Qué llegó a la comunidad y cuánto se escuchó.",
     "en": "What reached the community and how much it was heard."
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": {
       "es": "1.741",
       "en": "1,741"
      },
      "label": {
       "es": "personas encuestadas",
       "en": "people surveyed"
      }
     },
     {
      "value": {
       "es": "272",
       "en": "272"
      },
      "label": {
       "es": "reproducciones en Spotify",
       "en": "Spotify plays"
      }
     },
     {
      "value": {
       "es": "11",
       "en": "11"
      },
      "label": {
       "es": "equipos coordinados",
       "en": "teams coordinated"
      }
     },
     {
      "value": {
       "es": "5",
       "en": "5"
      },
      "label": {
       "es": "meses de trabajo",
       "en": "months of work"
      }
     },
     {
      "value": {
       "es": "Oct 2024",
       "en": "Oct 2024"
      },
      "label": {
       "es": "lanzamiento",
       "en": "launch"
      }
     }
    ]
   },
   {
    "t": "bars",
    "h": {
     "es": "Dónde se escuchó",
     "en": "Where it was heard"
    },
    "note": {
     "es": "Base: 272 reproducciones desde el lanzamiento en octubre de 2024. Datos de Spotify for Creators.",
     "en": "Base: 272 plays since the October 2024 launch. Data from Spotify for Creators."
    },
    "title": {
     "es": "Reproducciones por país",
     "en": "Plays by country"
    },
    "lead": 0,
    "rows": [
     {
      "label": {
       "es": "Argentina",
       "en": "Argentina"
      },
      "v": 96,
      "flag": "ar"
     },
     {
      "label": {
       "es": "Chile",
       "en": "Chile"
      },
      "v": 2,
      "flag": "cl"
     },
     {
      "label": {
       "es": "Estados Unidos",
       "en": "United States"
      },
      "v": 1,
      "flag": "us"
     },
     {
      "label": {
       "es": "Colombia",
       "en": "Colombia"
      },
      "v": 1,
      "flag": "co"
     }
    ]
   },
   {
    "t": "ranked",
    "h": {
     "es": "Episodios más escuchados",
     "en": "Top-ranked episodes"
    },
    "note": {
     "es": "Títulos originales, en español.",
     "en": "Original titles, in Spanish."
    },
    "items": [
     "EP10 | Jugá, apostá y... ¿Ganá?",
     "EP01 | Qué es el ciber... ¿Qué?!",
     "EP15 | Con F de Fake: la sobreinformación en la era digital",
     "EP02 | Si lo vas a hacer, pensalo dos veces",
     "EP08 | Entre la intimidad y el riesgo"
    ]
   },
   {
    "t": "embed",
    "kind": "audio",
    "h": {
     "es": "Escuchar un episodio en Spotify",
     "en": "Listen to an episode on Spotify"
    },
    "src": "https://open.spotify.com/embed/episode/5V0kofeJ9cQxtJWFmDMl2V",
    "host": "Spotify",
    "label": {
     "es": "Episodio de la temporada",
     "en": "Season episode"
    },
    "open": "https://open.spotify.com/episode/5V0kofeJ9cQxtJWFmDMl2V",
    "ratio": "audio",
    "named": false
   },
   {
    "t": "media",
    "h": {
     "es": "Piezas del programa",
     "en": "Programme pieces"
    },
    "items": [
     {
      "kind": "interactive",
      "title": {
       "es": "Pieza interactiva",
       "en": "Interactive piece"
      },
      "src": "https://view.genially.com/6797a346ac4b87277d2c7941/interactive-content-intersafe-season-2-an-instructionally-designed-project",
      "open": "https://view.genially.com/6797a346ac4b87277d2c7941/interactive-content-intersafe-season-2-an-instructionally-designed-project"
     },
     {
      "kind": "video",
      "title": {
       "es": "Video del proyecto",
       "en": "Project video"
      },
      "src": "https://player.vimeo.com/video/1025598739",
      "open": "https://vimeo.com/1025598739"
     },
     {
      "kind": "doc",
      "title": {
       "es": "Documentación (en español)",
       "en": "Documentation (in Spanish)"
      },
      "src": "https://drive.google.com/file/d/1YEhCi7Lwth9i8dXqCUGJxMHQpndhpyX0/preview",
      "open": "https://drive.google.com/file/d/1YEhCi7Lwth9i8dXqCUGJxMHQpndhpyX0/view"
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Aprendizajes y próximos pasos",
     "en": "Learnings and next steps"
    },
    "items": {
     "es": [
      "Cada equipo cerró con un debate propio sobre logros, desafíos y aprendizajes, y esas reflexiones quedaron documentadas para la próxima edición.",
      "La encuesta llegó a todas las franjas de edad de forma pareja; el alcance del podcast, en cambio, quedó casi todo en Argentina (96%), una oportunidad para ampliar la difusión.",
      "Las oportunidades de mejora identificadas al cierre alimentan futuras iniciativas de aprendizaje digital."
     ],
     "en": [
      "Each team closed with its own debate on achievements, challenges and learnings, and those reflections were documented for the next edition.",
      "The survey reached every age group evenly; the podcast’s reach, however, stayed almost entirely in Argentina (96%), an opportunity to widen distribution.",
      "The improvement opportunities identified at the close feed into future digital learning initiatives."
     ]
    }
   }
  ],
  "outcome": null
 },
 "infraestructura-it": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "en": "IT infrastructure & learning environment standardisation",
   "es": "Estandarización de infraestructura IT y entornos de aprendizaje"
  },
  "subtitle": {
   "en": "A 96-page single source of truth, and the video ecosystem that made it usable",
   "es": "Una única fuente de verdad de 96 páginas, y el ecosistema de video que la hizo usable"
  },
  "summary": {
   "problem": {
    "es": "Los laboratorios tenían un rendimiento desparejo: máquinas parcheadas una por una y un saber que vivía en la cabeza de una sola persona.",
    "en": "The labs performed unevenly: machines patched one by one, and know-how that lived in a single person’s head."
   },
   "solution": {
    "es": "Una auditoría de hardware y software, sistemas operativos a medida de cada laboratorio y perfiles por nivel, documentados en una guía y una serie de videotutoriales.",
    "en": "A hardware and software audit, operating systems tailored to each lab and profiles per level, documented in a guide and a video tutorial series."
   },
   "results": [
    {
     "v": "96",
     "l": {
      "es": "páginas de SOP como única fuente de verdad",
      "en": "SOP pages as a single source of truth"
     }
    },
    {
     "t": {
      "es": "Un estándar documentado que cualquier técnico puede reproducir.",
      "en": "A documented standard any technician can reproduce."
     }
    },
    {
     "t": {
      "es": "El equipo de pasantías 2023 lo aplicó con un proceso de cinco pasos.",
      "en": "The 2023 intern team applied it through a five-step process."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Instructional design, technical writing, systems analysis, team lead",
    "es": "Diseño instruccional, redacción técnica, análisis de sistemas, liderazgo de equipo"
   },
   "timeline": {
    "en": "July 2022 to December 2024",
    "es": "Julio 2022 a diciembre 2024"
   },
   "context": {
    "en": "Institution-wide computer labs, Instituto Leonardo Murialdo",
    "es": "Laboratorios de informática institucionales, Instituto Leonardo Murialdo"
   },
   "stack": [
    "Windows 10 / 11",
    "Camtasia",
    "YouTube",
    "Microsoft Office"
   ],
   "methods": [
    "SOP",
    "Benchmarking",
    "System hardening",
    "UX of the workstation"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Video tutorial series",
     "es": "Serie de videotutoriales"
    },
    "url": "https://www.youtube.com/playlist?list=PLGPl-6kg2v3ZUVTAVp7reFRjV0JRSbk8Z"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "Educational technology is only as effective as the infrastructure supporting it. My mission was to resolve inconsistent lab performance by auditing hardware and software to ensure every workstation met the specific pedagogical needs of our students. Beyond the technical setup, this project was about creating a reliable and secure digital workspace for different educational levels.",
      "es": "La tecnología educativa es tan efectiva como la infraestructura que la sostiene. Mi misión fue resolver el rendimiento desparejo de los laboratorios auditando hardware y software para asegurar que cada puesto de trabajo respondiera a las necesidades pedagógicas específicas de los estudiantes. Más allá de la configuración técnica, este proyecto se trató de crear un espacio digital confiable y seguro para distintos niveles educativos."
     }
    ],
    "toc": {
     "es": "Contexto y ecosistema instruccional",
     "en": "Context and instructional ecosystem"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "Instructional ecosystem and documentation",
     "es": "Ecosistema instruccional y documentación"
    },
    "p": [
     {
      "en": "To ensure the long-term sustainability of these improvements, I co-authored an extensive 96-page technical guide that functions as a Standard Operating Procedure, in Spanish. The documentation was meticulously tailored for both Windows 10 and 11 environments to provide a single source of truth for technical staff. Recognising that people have different learning styles, I integrated a series of YouTube video tutorials to provide visual demonstrations, ensuring real-time execution accuracy and on-demand support for the lab team.",
      "es": "Para garantizar la sostenibilidad de estas mejoras a largo plazo, coescribí una guía técnica de 96 páginas que funciona como Procedimiento Operativo Estándar (SOP), en español. Esta documentación fue adaptada meticulosamente para entornos Windows 10 y 11, ofreciendo una única fuente de verdad para el personal técnico. Reconociendo que las personas aprenden de formas distintas, integré una serie de videotutoriales en YouTube con demostraciones visuales, asegurando precisión de ejecución en tiempo real y soporte a demanda para el equipo de laboratorio."
     }
    ]
   },
   {
    "t": "embed",
    "kind": "doc",
    "h": {
     "en": "The 96-page SOP guide",
     "es": "La guía SOP de 96 páginas"
    },
    "src": "https://drive.google.com/file/d/1jpjXhTmNlIZ842HnXG80JeCsZo8f5JhO/preview",
    "host": "Google Drive",
    "label": {
     "en": "SOP guide, 96 pages",
     "es": "Guía SOP, 96 páginas"
    }
   },
   {
    "t": "prose",
    "h": {
     "en": "System strategy and analysis",
     "es": "Estrategia y análisis de sistemas"
    },
    "p": [
     {
      "en": "To maximise resource efficiency, I conducted a comprehensive software and hardware audit. This analysis allowed us to design personalised operating system versions that adapt to the physical location of the labs and the specific needs of the curriculum.",
      "es": "Para maximizar la eficiencia de los recursos, realicé una auditoría integral de software y hardware. Este análisis nos permitió diseñar versiones personalizadas del sistema operativo que se adaptan a la ubicación física de los laboratorios y a las necesidades específicas del currículum."
     }
    ],
    "toc": {
     "es": "Estrategia y experiencia de usuario",
     "en": "Strategy and user experience"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "User experience and environment",
     "es": "Experiencia de usuario y entorno"
    },
    "p": [
     {
      "en": "I designed unique user profiles and secure access credentials tailored to each educational level and modality. By pre-configuring workspaces with the specific tools and software used in each course, we reduced digital friction, allowing students to focus purely on their learning objectives.",
      "es": "Diseñé perfiles de usuario únicos y credenciales de acceso seguras adaptadas a cada nivel y modalidad educativa. Al preconfigurar los espacios de trabajo con las herramientas y el software específicos de cada curso, redujimos la fricción digital, permitiendo que los estudiantes se enfoquen puramente en sus objetivos de aprendizaje."
     },
     {
      "en": "To ensure long-term stability, I implemented system hardening by locking Windows environments against unauthorised actions that could degrade performance, and restricted access to storage units across different user profiles to protect data integrity and student privacy.",
      "es": "Para garantizar estabilidad a largo plazo, implementé hardening del sistema bloqueando los entornos Windows contra acciones no autorizadas que pudieran degradar el rendimiento, y restringí el acceso a unidades de almacenamiento según los perfiles de usuario para proteger la integridad de los datos y la privacidad de los estudiantes."
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "en": "The configured environments",
     "es": "Los entornos configurados"
    },
    "images": [
     {
      "src": "itinfra-menu-sup.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Customised Windows 10 menu for upper levels",
       "es": "Menú de Windows 10 personalizado para niveles superiores"
      }
     },
     {
      "src": "itinfra-inicio.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Multi-account start screen",
       "es": "Pantalla de inicio con múltiples cuentas"
      }
     },
     {
      "src": "itinfra-menu-w11.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Windows 11 menu with user accounts",
       "es": "Menú de Windows 11 con cuentas de usuario"
      }
     },
     {
      "src": "itinfra-panel.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Control panel configuration for primary level",
       "es": "Configuración del panel de control para nivel primario"
      }
     },
     {
      "src": "itinfra-tema.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Theme personalisation restrictions",
       "es": "Restricciones de personalización del tema"
      }
     },
     {
      "src": "itinfra-restriccion.jpg",
      "w": 1366,
      "h": 768,
      "alt": {
       "en": "Storage access restriction settings",
       "es": "Configuración de restricción de acceso al almacenamiento"
      }
     }
    ]
   },
   {
    "t": "roadmap",
    "h": {
     "en": "The maintenance workflow",
     "es": "El flujo de mantenimiento"
    },
    "note": {
     "en": "I led the 2023 internship team through a rigorous five-step process, supported by the new documentation ecosystem.",
     "es": "Lideré al equipo de pasantías 2023 a través de un riguroso proceso de cinco pasos, apoyado en el nuevo ecosistema de documentación."
    },
    "steps": [
     {
      "code": "M01",
      "title": {
       "en": "Verification and benchmarking",
       "es": "Verificación y benchmarking"
      },
      "body": {
       "en": "Technical audit of all components.",
       "es": "Auditoría técnica de todos los componentes."
      }
     },
     {
      "code": "M02",
      "title": {
       "en": "Hardware refresh",
       "es": "Renovación de hardware"
      },
      "body": {
       "en": "Substituting low-performance legacy PCs with updated hardware.",
       "es": "Sustitución de PCs antiguas de bajo rendimiento por hardware actualizado."
      }
     },
     {
      "code": "M03",
      "title": {
       "en": "OS provisioning",
       "es": "Aprovisionamiento de SO"
      },
      "body": {
       "en": "Installing personalised OS versions based on lab profiles.",
       "es": "Instalación de versiones personalizadas del sistema operativo según el perfil de cada laboratorio."
      }
     },
     {
      "code": "M04",
      "title": {
       "en": "System optimisation",
       "es": "Optimización del sistema"
      },
      "body": {
       "en": "Fine-tuning software to hardware components to boost performance.",
       "es": "Ajuste fino del software a los componentes de hardware para mejorar el rendimiento."
      }
     },
     {
      "code": "M05",
      "title": {
       "en": "Assembly and habilitation",
       "es": "Ensamblado y habilitación"
      },
      "body": {
       "en": "Final hardware mounting and enabling workstations for student use.",
       "es": "Montaje final del hardware y habilitación de los puestos para uso estudiantil."
      }
     }
    ],
    "toc": {
     "es": "Mantenimiento y renovación de hardware",
     "en": "Maintenance and hardware refresh"
    }
   },
   {
    "t": "gallery",
    "wide": true,
    "images": [
     {
      "src": "itinfra-01.jpg",
      "w": 1400,
      "h": 1458,
      "alt": {
       "en": "Hardware audit and benchmarking",
       "es": "Auditoría de hardware y benchmarking"
      }
     },
     {
      "src": "itinfra-02.jpg",
      "w": 1400,
      "h": 1051,
      "alt": {
       "en": "System optimisation work",
       "es": "Trabajo de optimización del sistema"
      }
     }
    ]
   },
   {
    "t": "embed",
    "join": true,
    "kind": "video",
    "h": {
     "en": "Watch: hardware refresh",
     "es": "Ver: renovación de hardware"
    },
    "src": "https://www.youtube.com/embed/2mYelJrOnnY",
    "host": "YouTube",
    "label": {
     "en": "Hardware refresh tutorial",
     "es": "Tutorial de renovación de hardware"
    },
    "open": "https://www.youtube.com/playlist?list=PLGPl-6kg2v3ZUVTAVp7reFRjV0JRSbk8Z"
   }
  ],
  "outcome": {
   "h": {
    "en": "Outcomes",
    "es": "Resultados"
   },
   "body": {
    "en": "The institution moved from inconsistent, individually patched machines to a documented standard that any technician can reproduce. The SOP and the video series turned a two-year effort into transferable institutional knowledge rather than something that lived in one person’s head.",
    "es": "La institución pasó de máquinas parcheadas una por una a un estándar documentado que cualquier técnico puede reproducir. El SOP y la serie de videos convirtieron dos años de trabajo en conocimiento institucional transferible, en lugar de algo que vivía en la cabeza de una sola persona."
   }
  }
 },
 "edulabs": {
  "cat": "it",
  "title": {
   "es": "EduLabs",
   "en": "EduLabs"
  },
  "subtitle": {
   "es": "Reinvención UX/UI de una plataforma de laboratorios remotos para hacer ciencia a distancia.",
   "en": "A UX/UI reinvention of a remote-labs platform for doing science from anywhere."
  },
  "chips": {
   "es": [
    "UX Research",
    "UI",
    "Design System",
    "Accesibilidad"
   ],
   "en": [
    "UX Research",
    "UI",
    "Design System",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "Docentes de ciencias sin laboratorio disponible ni presupuesto para suscripciones terminan usando animaciones que no muestran una práctica real.",
    "en": "Science teachers with no lab available and no budget for subscriptions end up using animations that don’t show a real experiment."
   },
   "solution": {
    "es": "Una reinvención UX/UI de MurialdoLab en Doble Diamante: research, persona, flujos, wireframes y un design system documentado.",
    "en": "A Double Diamond UX/UI reinvention of MurialdoLab: research, persona, flows, wireframes and a documented design system."
   },
   "results": [
    {
     "v": "7",
     "l": {
      "es": "combinaciones de color que no llegaban a AA, con su corrección",
      "en": "colour pairs below AA, each with its fix"
     }
    },
    {
     "t": {
      "es": "Design system auditado contra WCAG 2.1 AA sin cambiar la identidad visual.",
      "en": "Design system audited against WCAG 2.1 AA without changing the visual identity."
     }
    },
    {
     "t": {
      "es": "UI final consistente con la marca y próximos pasos planteados.",
      "en": "Final UI consistent with the brand, with next steps defined."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Rediseño UX/UI: definición, flujos, wireframes, design system, UI y accesibilidad",
    "en": "UX/UI redesign: definition, flows, wireframes, design system, UI and accessibility"
   },
   "timeline": {
    "es": "Enero a marzo 2024",
    "en": "January to March 2024"
   },
   "context": {
    "es": "Instituto Leonardo Murialdo y Facultad de Farmacia y Bioquímica (UBA), con apoyo de CIAEC",
    "en": "Instituto Leonardo Murialdo and the Faculty of Pharmacy and Biochemistry (UBA), supported by CIAEC"
   },
   "stack": [
    "Figma",
    "FigJam",
    "Benchmarking"
   ],
   "methods": [
    "Doble Diamante",
    "Design system",
    "WCAG 2.1 AA"
   ]
  },
  "links": [
   {
    "label": {
     "es": "Proyecto original en Behance",
     "en": "Original project on Behance"
    },
    "url": "https://www.behance.net/gallery/214819191/MurialdoLab-Experience-Science-from-Anywhere-%28UXUI%29"
   }
  ],
  "blocks": [
   {
    "t": "kv",
    "h": {
     "es": "Contexto",
     "en": "Overview"
    },
    "items": [
     {
      "k": {
       "es": "Producto",
       "en": "Product"
      },
      "v": {
       "es": "MurialdoLab: plataforma web de laboratorios remotos para hacer prácticas científicas reales a distancia, desde el navegador.",
       "en": "MurialdoLab: a web platform of remote laboratories for doing real science practice from the browser."
      }
     },
     {
      "k": {
       "es": "Tipo",
       "en": "Type"
      },
      "v": {
       "es": "Proyecto institucional del Instituto Leonardo Murialdo y la Facultad de Farmacia y Bioquímica (UBA), con apoyo de CIAEC.",
       "en": "Institutional project by Instituto Leonardo Murialdo and the Faculty of Pharmacy and Biochemistry (UBA), supported by CIAEC."
      }
     },
     {
      "k": {
       "es": "Práctica de referencia",
       "en": "Reference practice"
      },
      "v": {
       "es": "Laboratorio de electroforesis de ADN en gel de agarosa, con conocimientos previos, etapas en video y hoja de observaciones.",
       "en": "DNA electrophoresis on agarose gel, with prerequisites, video stages and an observation sheet."
      }
     },
     {
      "k": {
       "es": "Objetivo",
       "en": "Goal"
      },
      "v": {
       "es": "Enseñar métodos científicos y demostrar que, con la información y las competencias adecuadas, cualquiera puede crear y usar un laboratorio remoto.",
       "en": "Teach scientific methods and show that, with the right information and skills, anyone can build and use a remote lab."
      }
     },
     {
      "k": {
       "es": "Mi aporte",
       "en": "My contribution"
      },
      "v": {
       "es": "Este caso es una reinvención de un producto que ya existía, concebido por otra persona. Mi trabajo fue reestructurar el research, los flujos, el design system y la accesibilidad.",
       "en": "This case is a reinvention of an existing product, conceived by someone else. My work was restructuring the research, the flows, the design system and the accessibility."
      }
     }
    ],
    "toc": {
     "es": "Contexto y proceso",
     "en": "Context and process"
    }
   },
   {
    "t": "diamond",
    "join": true,
    "h": {
     "es": "Proceso: Doble Diamante",
     "en": "Process: Double Diamond"
    },
    "note": {
     "es": "El caso original mezclaba fases. Lo reordené en los cuatro momentos del Doble Diamante, para que se vea el paso de explorar a decidir, dos veces.",
     "en": "The original case mixed phases. I reordered it into the four moments of the Double Diamond, so the move from exploring to deciding shows, twice."
    },
    "phases": [
     {
      "name": "Discover",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Cuál es el problema real?",
       "en": "What is the real problem?"
      },
      "items": {
       "es": [
        "Challenge",
        "Benchmarking",
        "Research de contexto"
       ],
       "en": [
        "Challenge",
        "Benchmarking",
        "Contextual research"
       ]
      }
     },
     {
      "name": "Define",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Qué problema vamos a resolver?",
       "en": "Which problem will we solve?"
      },
      "items": {
       "es": [
        "Empathy map",
        "User persona",
        "POV, needs, insights",
        "Journey map",
        "How Might We"
       ],
       "en": [
        "Empathy map",
        "User persona",
        "POV, needs, insights",
        "Journey map",
        "How Might We"
       ]
      }
     },
     {
      "name": "Develop",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Cómo lo resolvemos?",
       "en": "How do we solve it?"
      },
      "items": {
       "es": [
        "Task flow",
        "User flow",
        "Moodboard",
        "Wireframes",
        "Design system"
       ],
       "en": [
        "Task flow",
        "User flow",
        "Moodboard",
        "Wireframes",
        "Design system"
       ]
      }
     },
     {
      "name": "Deliver",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Funciona? ¿Qué entregamos?",
       "en": "Does it work? What do we ship?"
      },
      "items": {
       "es": [
        "UI final",
        "Auditoría WCAG",
        "Próximos pasos"
       ],
       "en": [
        "Final UI",
        "WCAG audit",
        "Next steps"
       ]
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "name": "Discover",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "¿Cuál es el problema real?",
     "en": "What is the real problem?"
    }
   },
   {
    "t": "quote",
    "h": {
     "es": "Challenge",
     "en": "Challenge"
    },
    "body": {
     "es": "Encontrar una plataforma online que dé la oportunidad de participar en experimentos científicos, que permita aplicar la teoría junto con la práctica, en cualquier momento y lugar, sin limitaciones por falta de recursos, idioma, espacio o instituciones.",
     "en": "Find an online platform that offers the chance to take part in science experiments, applying theory alongside practice, anytime and anywhere, with no barriers of resources, language, space or institutions."
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Research",
     "en": "Research"
    },
    "p": [
     {
      "es": "La definición del problema se apoyó en una investigación de contexto: análisis de plataformas existentes (benchmarking de LabsLand y PhET), relevamiento de las necesidades del aula de ciencias y consulta con docentes del Instituto Leonardo Murialdo. De esa base surgieron el empathy map y la persona.",
      "en": "Problem definition drew on contextual research: analysis of existing platforms (benchmarking of LabsLand and PhET), a review of science-classroom needs, and consultation with teachers at Instituto Leonardo Murialdo. The empathy map and persona emerged from that base."
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Benchmarking",
     "en": "Benchmarking"
    },
    "cols": 2,
    "items": [
     {
      "title": "LabsLand",
      "body": {
       "es": "Red global de laboratorios remotos que conecta instituciones con equipos reales (no simulaciones), accesibles desde el navegador.",
       "en": "A global network of remote laboratories connecting institutions with real equipment (not simulations), accessible from the browser."
      },
      "img": {
       "src": "edulabs-bm-labsland.jpg",
       "w": 784,
       "h": 476,
       "alt": {
        "es": "Capturas de LabsLand: inicio, catálogo de laboratorios y página de un laboratorio.",
        "en": "LabsLand screenshots: home, lab catalog and a lab page."
       }
      }
     },
     {
      "title": "PhET",
      "tag": {
       "es": "University of Colorado Boulder",
       "en": "University of Colorado Boulder"
      },
      "body": {
       "es": "Simulaciones interactivas y gratuitas de ciencia y matemática, con base en investigación educativa, en un entorno de exploración tipo juego.",
       "en": "Free interactive science and math simulations, grounded in educational research, in a game-like exploratory environment."
      },
      "img": {
       "src": "edulabs-bm-phet.jpg",
       "w": 784,
       "h": 493,
       "alt": {
        "es": "Capturas de PhET: inicio, catálogo de simulaciones y página de una simulación.",
        "en": "PhET screenshots: home, simulation catalog and a simulation page."
       }
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Lectura comparativa",
     "en": "Comparative reading"
    },
    "body": {
     "es": "LabsLand aporta el modelo de equipo real remoto, pero es de pago e institucional. PhET aporta gratuidad y accesibilidad, pero es simulación, no práctica real. MurialdoLab se ubica en el cruce: práctica real y remota, pensada para el aula hispanohablante y sin barreras económicas.",
     "en": "LabsLand offers real remote equipment but is paid and institution-oriented. PhET offers free, accessible access but is simulation, not real practice. MurialdoLab sits at the intersection: real, remote practice designed for the Spanish-speaking classroom with no cost barriers."
    }
   },
   {
    "t": "phase",
    "n": "02",
    "name": "Define",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "¿Qué problema vamos a resolver?",
     "en": "Which problem will we solve?"
    }
   },
   {
    "t": "empathy",
    "h": {
     "es": "Empathy map",
     "en": "Empathy map"
    },
    "note": {
     "es": "Docente de ciencias que busca herramientas para dar prácticas de laboratorio.",
     "en": "A science teacher looking for tools to run lab practice."
    },
    "quads": [
     {
      "k": "says",
      "title": {
       "es": "Dice",
       "en": "Says"
      },
      "items": {
       "es": [
        "Si la herramienta es de pago, puede venir con más contenido, no necesariamente de calidad; eso lo sabés cuando accedés a la suscripción.",
        "El idioma es importante: que esté en nuestro idioma facilita mucho el camino.",
        "Está bueno que tenga animaciones, pero ¿sería posible incluir experiencias en vivo? Así tendría otro impacto para los estudiantes.",
        "Si es con suscripción, es probable que tengan un curador de contenido.",
        "¿No hay una entidad educativa argentina o latinoamericana que haya desarrollado alguna herramienta para usar?",
        "La actividad simulada no contempla el error experimental. ¿Cómo se lo demostrás al chico si no?",
        "Al ser gratuita es una opción más inclusiva y accesible, sabiendo que estamos en Argentina.",
        "¿Se podrán generar nuestras propias actividades con un perfil docente?"
       ],
       "en": [
        "If the tool is paid it may come with more content, not necessarily quality; you only find out once you subscribe.",
        "Language matters: having it in our language makes things much easier.",
        "Animations are good, but could it include live experiments? That would have a different impact on students.",
        "If it's subscription-based they probably have a content curator.",
        "Isn't there an Argentine or Latin American educational body that has built a tool we could use?",
        "A simulated activity won't account for experimental error. How do you show that to a student otherwise?",
        "Being free makes it more inclusive and accessible, given that we're in Argentina.",
        "Will we be able to create our own activities with a teacher profile?"
       ]
      }
     },
     {
      "k": "thinks",
      "title": {
       "es": "Piensa",
       "en": "Thinks"
      },
      "items": {
       "es": [
        "Si es de pago, es muy probable que la descarte.",
        "Es muy difícil encontrar herramientas que permitan hacer experimentos en vivo.",
        "Si es gratuita, puede que no ofrezca soporte técnico adecuado ni actualización.",
        "Poder ver una experiencia en vivo, en cualquier momento, enriquecería el aprendizaje.",
        "Se pierde la actividad física real por una virtual, pero se garantiza acceso cuando la primera falta."
       ],
       "en": [
        "If it's paid, I'll probably rule it out.",
        "It's very hard to find tools that allow live experiments.",
        "If it's free, it may lack proper technical support and updates.",
        "Being able to watch a live experiment anytime would enrich learning.",
        "You trade real hands-on activity for a virtual one, but you secure access when the first isn't available."
       ]
      }
     },
     {
      "k": "does",
      "title": {
       "es": "Hace",
       "en": "Does"
      },
      "items": {
       "es": [
        "Primero consulta si la herramienta es gratuita o paga.",
        "Verifica el idioma.",
        "Consulta opiniones de colegas, amigos o en internet.",
        "Averigua información sobre los creadores.",
        "Termina complementando la teoría con prácticas de laboratorio solo en clase, lo que obliga a asignar días específicos en vez de usar ese tiempo para dudas y debate."
       ],
       "en": [
        "First checks whether the tool is free or paid.",
        "Verifies the language.",
        "Checks reviews from peers, friends or online.",
        "Looks into who built it.",
        "Ends up complementing theory with in-class lab practice only, which forces setting aside specific days instead of using class time for questions and debate."
       ]
      }
     },
     {
      "k": "feels",
      "title": {
       "es": "Siente",
       "en": "Feels"
      },
      "items": {
       "es": [
        "Resignación: siempre termina usando animaciones de baja calidad o videos que no se adecúan a la teoría que quiere explicar.",
        "Molestia porque la mayoría de las opciones con suscripción tienen costos altos para Argentina.",
        "Duda de si el contenido es completo, actualizado y adecuado al nivel educativo que necesita."
       ],
       "en": [
        "Resignation: she always ends up using low-quality animations or videos that don't match the theory she wants to teach.",
        "Frustration because most subscription options are expensive for Argentina.",
        "Doubt about whether the content is complete, up to date and right for her level."
       ]
      }
     }
    ]
   },
   {
    "t": "persona",
    "h": {
     "es": "User persona",
     "en": "User persona"
    },
    "photo": {
     "src": "edulabs-cecilia.jpg",
     "w": 640,
     "h": 784,
     "alt": {
      "es": "Cecilia, profesora de química analítica",
      "en": "Cecilia, analytical chemistry teacher"
     }
    },
    "name": "Cecilia",
    "meta": [
     {
      "k": {
       "es": "Edad",
       "en": "Age"
      },
      "v": {
       "es": "48 años",
       "en": "48 years old"
      }
     },
     {
      "k": {
       "es": "Profesión",
       "en": "Profession"
      },
      "v": {
       "es": "Profesora de Química Analítica",
       "en": "Analytical Chemistry Teacher"
      }
     },
     {
      "k": {
       "es": "Ciudad",
       "en": "City"
      },
      "v": {
       "es": "Tres de Febrero, Buenos Aires, Argentina",
       "en": "Tres de Febrero, Buenos Aires, Argentina"
      }
     }
    ],
    "bio": {
     "es": "Docente con más de 20 años de experiencia. Se mantiene al día en contenidos teóricos y metodologías prácticas, y busca integrar nuevas herramientas tecnológicas para enriquecer sus clases.",
     "en": "A teacher with 20+ years of experience. She stays current with both theory and practical methods, and actively integrates new technological tools to enhance her classes."
    },
    "goalsL": {
     "es": "Objetivos",
     "en": "Goals"
    },
    "goals": {
     "es": [
      "Enriquecer la experiencia de aprendizaje con recursos interactivos, simulaciones y prácticas que refuercen los conceptos de clase.",
      "Fomentar la participación activa: explorar, experimentar y colaborar en entornos virtuales.",
      "Adaptar el aprendizaje a distintos estilos y ritmos con recursos a medida.",
      "Hacer tangibles los conceptos abstractos con visualizaciones en vivo, animaciones y modelos interactivos.",
      "Promover la colaboración y el trabajo en equipo, presencial y remoto.",
      "Impulsar la investigación y la creatividad con acceso a datos y herramientas de análisis.",
      "Desarrollar competencias digitales para preparar a los estudiantes para el futuro."
     ],
     "en": [
      "Enrich the learning experience with interactive resources, simulations and practice that reinforce classroom concepts.",
      "Encourage active participation: exploring, experimenting and collaborating in virtual environments.",
      "Adapt learning to different styles and paces with tailored resources.",
      "Make abstract concepts tangible with live visualizations, animations and interactive models.",
      "Promote collaboration and teamwork, in person and remote.",
      "Foster research and creativity with access to data and analysis tools.",
      "Build digital skills to prepare students for the future."
     ]
    },
    "painsL": {
     "es": "Puntos de dolor",
     "en": "Pain points"
    },
    "pains": {
     "es": [
      "Curva de aprendizaje: algunas herramientas son complejas y llevan tiempo dominar.",
      "Problemas técnicos: fallas de software, compatibilidad o conexión que interrumpen la clase.",
      "Limitaciones de recursos: hardware específico o suscripciones caras, difíciles de costear en Argentina.",
      "Resistencia al cambio de colegas y estudiantes acostumbrados a métodos tradicionales.",
      "Integración curricular: sumar herramientas alineadas a los objetivos lleva tiempo y esfuerzo.",
      "Medir el impacto real en el aprendizaje es complejo."
     ],
     "en": [
      "Learning curve: some tools are complex and take time to master.",
      "Technical issues: software, compatibility or connectivity problems that disrupt class.",
      "Resource limits: specific hardware or expensive subscriptions, hard to afford in Argentina.",
      "Resistance to change from peers and students used to traditional methods.",
      "Curriculum integration: adding tools aligned to goals takes time and effort.",
      "Measuring real learning impact is complex."
     ]
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "POV, needs e insights",
     "en": "POV, needs and insights"
    },
    "cols": 3,
    "items": [
     {
      "title": "POV",
      "body": {
       "es": "Cecilia, profesora de química analítica con más de 20 años de experiencia, busca resolver la falta de recursos físicos para hacer prácticas. Su objetivo es encontrar una plataforma donde ella y sus estudiantes puedan participar sin limitaciones de idioma, funcionalidades, tiempo o espacio. Pese a su compromiso con integrar tecnología, se siente abrumada por los desafíos que implica.",
       "en": "Cecilia, an analytical chemistry teacher with 20+ years of experience, wants to solve the lack of physical resources for hands-on practice. Her goal is a platform where she and her students can take part with no barriers of language, features, time or space. Despite her commitment to tech, she feels overwhelmed by what it takes."
      }
     },
     {
      "title": "Needs",
      "body": {
       "es": "Necesita una plataforma simple, accesible y que se integre a su práctica docente sin grandes inversiones ni barreras técnicas, lingüísticas o de tiempo. Debe ofrecer recursos interactivos y colaborativos que hagan tangible la ciencia y habiliten participación activa y aprendizaje adaptativo.",
       "en": "She needs a platform that is simple, accessible and fits her teaching practice without heavy investment or technical, language or time barriers. It should offer interactive, collaborative resources that make science tangible and enable active, adaptive learning."
      }
     },
     {
      "title": "Insights",
      "body": {
       "es": "Cecilia quiere enriquecer la experiencia de sus estudiantes y prepararlos para un futuro digital, pero su experiencia la hace consciente de los obstáculos de implementar nueva tecnología. Requiere una solución con soporte continuo, que minimice la fricción técnica, que colegas y estudiantes adopten sin esfuerzo y que le permita medir el impacto en el aprendizaje.",
       "en": "Cecilia wants to enrich her students' experience and prepare them for a digital future, but her seniority makes her aware of the obstacles of adopting new tech. She needs a solution with ongoing support, low technical friction, easy adoption by peers and students, and a way to measure learning impact."
      }
     }
    ]
   },
   {
    "t": "journey",
    "h": {
     "es": "Journey map",
     "en": "Journey map"
    },
    "note": {
     "es": "Seis etapas del recorrido de Cecilia. Cada etapa indica su estado emocional en texto, además de la curva.",
     "en": "Six stages of Cecilia's journey. Each stage states its emotional state in text, as well as on the curve."
    },
    "labels": {
     "actions": {
      "es": "Acciones",
      "en": "Actions"
     },
     "feel": {
      "es": "Qué siente",
      "en": "How she feels"
     },
     "emotion": {
      "es": "Emoción",
      "en": "Emotion"
     },
     "actors": {
      "es": "Actores",
      "en": "Actors"
     },
     "touch": {
      "es": "Puntos de contacto",
      "en": "Touchpoints"
     }
    },
    "stages": [
     {
      "name": {
       "es": "Presentación del problema",
       "en": "Problem framing"
      },
      "level": 0,
      "emo": {
       "es": "Neutral, tendiendo a bajar",
       "en": "Neutral, trending down"
      },
      "actions": {
       "es": "Diseña una actividad que requiere práctica; busca día y horario para el laboratorio; el laboratorio no está disponible o no tiene recursos.",
       "en": "Designs a hands-on activity; looks for a lab slot; the lab is unavailable or under-resourced."
      },
      "feel": {
       "es": "Entusiasmo por una práctica que explique un tema complejo de forma más interactiva; duda por no saber si el laboratorio estará disponible.",
       "en": "Excitement about a practice that explains a complex topic more interactively; doubt about lab availability."
      }
     },
     {
      "name": {
       "es": "Búsqueda de herramientas",
       "en": "Searching for tools"
      },
      "level": -2,
      "emo": {
       "es": "Negativo: frustración",
       "en": "Negative: frustration"
      },
      "actions": {
       "es": "Investiga materiales digitales; no encuentra material que cumpla los criterios mínimos; busca por recomendación de colegas y laboratorios virtuales de química.",
       "en": "Researches digital materials; finds nothing meeting the minimum criteria; searches via peer recommendations and virtual chemistry labs."
      },
      "feel": {
       "es": "Decepción por no poder reprogramar sin atrasar la planificación; esperanza de encontrar algo útil aun sin práctica real; frustración por no hallar material adecuado.",
       "en": "Disappointment at not being able to reschedule without delaying the plan; hope of finding something useful even without real practice; frustration at not finding suitable material."
      }
     },
     {
      "name": {
       "es": "Comparación de plataformas",
       "en": "Comparing platforms"
      },
      "level": -1,
      "emo": {
       "es": "Negativo, con leve recuperación",
       "en": "Negative, slightly recovering"
      },
      "actions": {
       "es": "Identifica, selecciona y compara por reviews; evalúa tipologías; compara criterios (simulado o en tiempo real, pago o gratuito, idioma, acceso, calidad); pondera la opción en tiempo real, gratuita, en español y 24/7.",
       "en": "Identifies, shortlists and compares via reviews; weighs types; compares criteria (simulated or real-time, paid or free, language, access, quality); favors the real-time, free, Spanish, 24/7 option."
      },
      "feel": {
       "es": "Sorpresa al descubrir plataformas, con desconfianza; esperanza de dar con la adecuada; seriedad al analizar para concluir.",
       "en": "Surprise at discovering platforms, with some distrust; hope of finding the right one; seriousness while analyzing to reach a conclusion."
      }
     },
     {
      "name": {
       "es": "Selección de plataforma",
       "en": "Choosing the platform"
      },
      "level": 1,
      "emo": {
       "es": "Recuperación: positivo",
       "en": "Recovery: positive"
      },
      "actions": {
       "es": "Contacta a la plataforma y comenta su situación; recibe asesoramiento; crea su perfil; analiza sus cualidades como usuaria.",
       "en": "Contacts the platform and explains her situation; gets guidance; creates a profile; explores its features as a user."
      },
      "feel": {
       "es": "Esperanza de haber encontrado al fin una plataforma adecuada; curiosidad por el contenido y las herramientas para aplicarlas en clase.",
       "en": "Hope of having finally found a suitable platform; curiosity about the content and tools to use in class."
      }
     },
     {
      "name": {
       "es": "Aplicación en la labor docente",
       "en": "Classroom use"
      },
      "level": 1.5,
      "emo": {
       "es": "Positivo",
       "en": "Positive"
      },
      "actions": {
       "es": "Adecúa la actividad a la planificación; imparte la actividad y comparte el sitio con estudiantes; los guía en el uso.",
       "en": "Adapts the activity to her syllabus; runs it and shares the site with students; guides them through it."
      },
      "feel": {
       "es": "Responsabilidad por adecuar bien el contenido al uso de la plataforma; pese a dudas sobre la curva de aprendizaje, hay ánimo e interés por guiar a sus estudiantes.",
       "en": "Responsibility for aligning content with the platform; despite learning-curve doubts, she's motivated to guide her students."
      }
     },
     {
      "name": {
       "es": "Post-aplicación",
       "en": "After use"
      },
      "level": 2,
      "emo": {
       "es": "Pico positivo",
       "en": "Positive peak"
      },
      "actions": {
       "es": "El problema de acceso al laboratorio queda resuelto; docente y estudiantes usan la plataforma en la asignatura; vuelve a usarla.",
       "en": "The lab-access problem is solved; teacher and students use the platform in the course; she uses it again."
      },
      "feel": {
       "es": "Alegría por resolver el inconveniente; comparte la experiencia positiva con colegas.",
       "en": "Joy at solving the issue; shares the positive experience with peers."
      }
     }
    ],
    "actors": {
     "es": [
      "Docente",
      "Docente y encargado de pañol",
      "Colegas",
      "Soporte del sitio",
      "Estudiantes"
     ],
     "en": [
      "Teacher",
      "Teacher and lab storeroom staff",
      "Peers",
      "Site support",
      "Students"
     ]
    },
    "touch": {
     "es": [
      "PC",
      "Smartphone",
      "Google",
      "YouTube",
      "Animaciones en plataformas educativas",
      "Laboratorios virtuales de química",
      "Reviews en redes y portales",
      "Contacto presencial"
     ],
     "en": [
      "PC",
      "Smartphone",
      "Google",
      "YouTube",
      "Animations on educational platforms",
      "Virtual chemistry labs",
      "Reviews on social media and portals",
      "In-person contact"
     ]
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "How Might We",
     "en": "How Might We"
    },
    "cols": 3,
    "items": [
     {
      "tag": {
       "es": "HMW 1",
       "en": "HMW 1"
      },
      "body": {
       "es": "¿Cómo podríamos permitir que una docente dé prácticas de laboratorio reales sin depender de recursos físicos ni de suscripciones costosas?",
       "en": "How might we let a teacher run real lab practices without relying on physical resources or costly subscriptions?"
      }
     },
     {
      "tag": {
       "es": "HMW 2",
       "en": "HMW 2"
      },
      "body": {
       "es": "¿Cómo podríamos reducir la fricción técnica para que docentes y estudiantes con distinta soltura digital adopten la plataforma?",
       "en": "How might we lower technical friction so teachers and students with different digital skills adopt the platform?"
      }
     },
     {
      "tag": {
       "es": "HMW 3",
       "en": "HMW 3"
      },
      "body": {
       "es": "¿Cómo podríamos hacer tangibles conceptos abstractos (como la electroforesis) y dejar registro del trabajo del estudiante?",
       "en": "How might we make abstract concepts (like electrophoresis) tangible and keep a record of the student's work?"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Criterios de éxito del diseño",
     "en": "Design success criteria"
    },
    "note": {
     "es": "Son criterios para evaluar el diseño, no resultados alcanzados.",
     "en": "These are criteria to evaluate the design, not results achieved."
    },
    "items": {
     "es": [
      "Iniciar una práctica en pocos pasos desde el ingreso.",
      "Completar una práctica sin ayuda externa (la tarea núcleo del task flow).",
      "Acceder a los conocimientos previos sin salir de la actividad.",
      "Registrar observaciones por etapa y consolidarlas al finalizar.",
      "Cumplir accesibilidad WCAG 2.1 AA (contraste, teclado, lector de pantalla).",
      "Estar disponible en español y con acceso 24/7."
     ],
     "en": [
      "Start a practice in few steps from entry.",
      "Complete a practice unaided (the task flow's core task).",
      "Reach the prerequisites without leaving the activity.",
      "Capture notes per stage and consolidate them at the end.",
      "Meet WCAG 2.1 AA (contrast, keyboard, screen reader).",
      "Be available in Spanish with 24/7 access."
     ]
    }
   },
   {
    "t": "phase",
    "n": "03",
    "name": "Develop",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "¿Cómo lo resolvemos?",
     "en": "How do we solve it?"
    }
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Task flow",
     "en": "Task flow"
    },
    "note": {
     "es": "La tarea núcleo: realizar una práctica de laboratorio.",
     "en": "The core task: completing a lab practice."
    },
    "steps": {
     "es": [
      "Ingresa al sitio",
      "Selecciona el laboratorio que desea utilizar",
      "Se loguea con usuario y contraseña",
      "Lee la introducción y los objetivos de la actividad",
      "Inicia la actividad del laboratorio",
      "Realiza cada etapa de la actividad y registra sus observaciones",
      "Completa todas las etapas de la actividad",
      "Finaliza la actividad del laboratorio"
     ],
     "en": [
      "Enters the site",
      "Selects the lab to use",
      "Logs in with username and password",
      "Reads the activity's intro and objectives",
      "Starts the lab activity",
      "Completes each stage, taking notes",
      "Completes all the stages",
      "Finishes the lab activity"
     ]
    }
   },
   {
    "t": "userflow",
    "h": {
     "es": "User flow",
     "en": "User flow"
    },
    "note": {
     "es": "El mismo recorrido con sus decisiones. El diagrama y la lista dicen lo mismo: la lista es la versión en texto del flujo.",
     "en": "The same journey with its decisions. The diagram and the list say the same thing: the list is the text version of the flow."
    },
    "yes": {
     "es": "Sí",
     "en": "Yes"
    },
    "no": {
     "es": "No",
     "en": "No"
    },
    "desc": {
     "es": "Diagrama de flujo de usuario: del ingreso al sitio hasta el fin, con cuatro decisiones (cuenta, conocimientos previos, etapas completas y acceso a observaciones).",
     "en": "User flow diagram: from entering the site to the end, with four decisions (account, prerequisites, completed stages and access to notes)."
    },
    "n": {
     "start": {
      "es": "Ingresa al sitio",
      "en": "Enters the site"
     },
     "menu": {
      "es": "Elige Laboratorios en el menú",
      "en": "Chooses Laboratories"
     },
     "pick": {
      "es": "Selecciona el laboratorio",
      "en": "Selects the lab"
     },
     "acc": {
      "es": "¿Tiene cuenta?",
      "en": "Has an account?"
     },
     "create": {
      "es": "Crea una cuenta",
      "en": "Creates an account"
     },
     "db": {
      "es": "Base de datos",
      "en": "Database"
     },
     "login": {
      "es": "Ingresa usuario y contraseña",
      "en": "Enters username and password"
     },
     "read": {
      "es": "Lee y analiza la actividad",
      "en": "Reads the activity"
     },
     "pre": {
      "es": "¿Tiene conocimientos previos?",
      "en": "Has prerequisites?"
     },
     "prereq": {
      "es": "Accede a conocimientos previos",
      "en": "Opens prerequisites"
     },
     "begin": {
      "es": "Inicia la actividad",
      "en": "Starts the activity"
     },
     "stage": {
      "es": "¿Completa cada etapa?",
      "en": "Each stage done?"
     },
     "redo": {
      "es": "Realiza de nuevo la etapa",
      "en": "Redoes the stage"
     },
     "finish": {
      "es": "Finaliza la actividad",
      "en": "Finishes the activity"
     },
     "obs": {
      "es": "¿Quiere ver sus observaciones?",
      "en": "Wants to see notes?"
     },
     "doc": {
      "es": "Accede al documento",
      "en": "Opens the document"
     },
     "end": {
      "es": "Fin",
      "en": "End"
     }
    },
    "logic": {
     "es": [
      "Ingresa al sitio.",
      "Selecciona la opción Laboratorios del menú.",
      "Selecciona el laboratorio a utilizar.",
      [
       "¿Tiene cuenta?",
       [
        "No: crea una cuenta, ingresa usuario y contraseña, y las credenciales se guardan en la base de datos.",
        "Sí: ingresa usuario y contraseña."
       ]
      ],
      "Lee y analiza la actividad del laboratorio.",
      [
       "¿Cuenta con los conocimientos previos requeridos?",
       [
        "No: accede al apartado de conocimientos previos, analiza e incorpora la información.",
        "Sí: continúa."
       ]
      ],
      "Inicia la actividad del laboratorio.",
      [
       "¿Completa cada etapa correctamente?",
       [
        "No: realiza nuevamente la etapa.",
        "Sí: continúa."
       ]
      ],
      "Finaliza la actividad del laboratorio.",
      [
       "¿Desea acceder a sus observaciones?",
       [
        "Sí: accede al documento y termina.",
        "No: termina."
       ]
      ]
     ],
     "en": [
      "Enters the site.",
      "Selects Laboratories from the menu.",
      "Selects the lab to use.",
      [
       "Has an account?",
       [
        "No: creates one, enters username and password, and the credentials are stored in the database.",
        "Yes: logs in with username and password."
       ]
      ],
      "Reads and reviews the lab activity.",
      [
       "Has the required prior knowledge?",
       [
        "No: opens the prerequisites section and takes it in.",
        "Yes: continues."
       ]
      ],
      "Starts the lab activity.",
      [
       "Completes each stage correctly?",
       [
        "No: redoes the stage.",
        "Yes: continues."
       ]
      ],
      "Finishes the lab activity.",
      [
       "Wants to review their notes?",
       [
        "Yes: opens the document, then ends.",
        "No: ends."
       ]
      ]
     ]
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Moodboard",
     "en": "Moodboard"
    },
    "note": {
     "es": "Tres atributos guía: Organizado | Sencillo | Accesible.",
     "en": "Three guiding attributes: Organized | Simple | Accessible."
    },
    "single": true,
    "images": [
     {
      "src": "edulabs-07-moodboard.jpg",
      "w": 1255,
      "h": 867,
      "alt": {
       "es": "Moodboard del proyecto con referencias STEM, ilustración científica, fotos de laboratorio y una paleta de verdes, naranjas, azules y rosas, bajo los atributos Organizado, Sencillo y Accesible.",
       "en": "Project moodboard with STEM references, scientific illustration, lab photos and a palette of greens, oranges, blues and pinks, under the attributes Organized, Simple and Accessible."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "De wireframes a media fidelidad",
     "en": "From wireframes to mid-fidelity"
    },
    "note": {
     "es": "La fidelidad sube en dos pasos: primero estructura, después layout.",
     "en": "Fidelity goes up in two steps: structure first, then layout."
    },
    "wide": true,
    "images": [
     {
      "src": "edulabs-08-wireframing.jpg",
      "w": 1400,
      "h": 1983,
      "alt": {
       "es": "Wireframes de baja fidelidad de las pantallas clave, con anotaciones de estructura.",
       "en": "Low-fidelity wireframes of the key screens, with structural notes."
      },
      "caption": {
       "es": "Wireframes de baja fidelidad: qué va en cada pantalla y en qué orden (inicio, laboratorios, ingreso, actividad por etapas).",
       "en": "Low-fidelity wireframes: what goes on each screen and in what order (home, labs, sign-in, staged activity)."
      }
     },
     {
      "src": "edulabs-09.jpg",
      "w": 1400,
      "h": 2125,
      "alt": {
       "es": "Mockups de media fidelidad en escala de grises, resolviendo el layout antes del color.",
       "en": "Mid-fidelity greyscale mockups, solving the layout before color."
      },
      "caption": {
       "es": "Mockups en escala de grises: jerarquía, espaciado y grilla resueltos antes de sumar color.",
       "en": "Greyscale mockups: hierarchy, spacing and grid solved before adding color."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Decisiones de diseño",
     "en": "Design decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Conocimientos previos dentro del laboratorio",
       "en": "Prerequisites inside the lab"
      },
      "body": {
       "es": "Van en un acordeón en la misma página de la actividad, para revisarlos sin salir de ella (criterio de éxito 3).",
       "en": "They sit in an accordion on the activity page itself, so they can be reviewed without leaving it (success criterion 3)."
      }
     },
     {
      "lead": {
       "es": "Observaciones por etapa",
       "en": "Notes per stage"
      },
      "body": {
       "es": "Se registran en cada etapa y se consolidan en un documento al finalizar, para dejar registro del trabajo del estudiante (HMW 3).",
       "en": "They are captured at each stage and consolidated in a document at the end, keeping a record of the student's work (HMW 3)."
      }
     },
     {
      "lead": {
       "es": "Una etapa a la vez",
       "en": "One stage at a time"
      },
      "body": {
       "es": "La actividad avanza etapa por etapa con video y controles propios, y permite repetir una etapa antes de seguir.",
       "en": "The activity moves stage by stage with its own video and controls, and lets the student redo a stage before moving on."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "",
    "name": "Design system",
    "mode": {
     "es": "del producto",
     "en": "of the product"
    },
    "q": {
     "es": "El sistema visual de MurialdoLab, documentado y corregido para accesibilidad.",
     "en": "MurialdoLab's visual system, documented and corrected for accessibility."
    }
   },
   {
    "t": "swatches",
    "h": {
     "es": "Color",
     "en": "Color"
    },
    "note": {
     "es": "Cada token indica su uso permitido. Los ratios de contraste están calculados sobre el fondo base #FAFAFA.",
     "en": "Each token states its allowed use. Contrast ratios are calculated against the base background #FAFAFA."
    },
    "groups": [
     {
      "name": {
       "es": "Neutros",
       "en": "Neutrals"
      },
      "items": [
       {
        "token": "--white-10",
        "hex": "#FAFAFA",
        "use": {
         "es": "Fondo base",
         "en": "Base background"
        }
       },
       {
        "token": "--white-30",
        "hex": "#F2F2F2",
        "use": {
         "es": "Fondo de superficies",
         "en": "Surface background"
        }
       },
       {
        "token": "--white-50",
        "hex": "#E6E6E6",
        "use": {
         "es": "Bordes suaves, divisores",
         "en": "Soft borders, dividers"
        }
       },
       {
        "token": "--grey-10",
        "hex": "#CCCCCC",
        "use": {
         "es": "Solo decorativo",
         "en": "Decorative only"
        }
       },
       {
        "token": "--grey-25",
        "hex": "#B3B3B3",
        "use": {
         "es": "Solo decorativo, no texto",
         "en": "Decorative only, no text"
        }
       },
       {
        "token": "--grey-50",
        "hex": "#7F7F7F",
        "use": {
         "es": "No usar para texto (3.84:1)",
         "en": "Not for text (3.84:1)"
        }
       },
       {
        "token": "--grey-75",
        "hex": "#595959",
        "use": {
         "es": "Texto secundario (6.71:1)",
         "en": "Secondary text (6.71:1)"
        }
       },
       {
        "token": "--black-10",
        "hex": "#383838",
        "use": {
         "es": "Texto cuerpo (11.23:1)",
         "en": "Body text (11.23:1)"
        }
       },
       {
        "token": "--black-25",
        "hex": "#262626",
        "use": {
         "es": "Texto cuerpo (14.5:1)",
         "en": "Body text (14.5:1)"
        }
       },
       {
        "token": "--black-50",
        "hex": "#191919",
        "use": {
         "es": "Títulos (16.84:1)",
         "en": "Headings (16.84:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Primario: verde de marca",
       "en": "Primary: brand green"
      },
      "items": [
       {
        "token": "--primary-10",
        "hex": "#CFE5E0",
        "use": {
         "es": "Fondos suaves",
         "en": "Soft backgrounds"
        }
       },
       {
        "token": "--primary-30",
        "hex": "#88C2B5",
        "use": {
         "es": "Fondos, hover suave",
         "en": "Backgrounds, soft hover"
        }
       },
       {
        "token": "--primary-50",
        "hex": "#61C2AD",
        "use": {
         "es": "Superficies decorativas",
         "en": "Decorative surfaces"
        }
       },
       {
        "token": "--primary-75",
        "hex": "#00C297",
        "use": {
         "es": "Color de marca. Relleno solo con texto oscuro (7.67:1). Nunca texto blanco encima",
         "en": "Brand color. Fill only with dark text (7.67:1). Never white text on it"
        }
       },
       {
        "token": "--primary-100",
        "hex": "#00755C",
        "use": {
         "es": "Texto y links sobre blanco (5.44:1), foco y bordes funcionales",
         "en": "Text and links on white (5.44:1), focus and functional borders"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Secundario: naranja",
       "en": "Secondary: orange"
      },
      "items": [
       {
        "token": "--secondary-10",
        "hex": "#FFEBCC",
        "use": {
         "es": "Fondos",
         "en": "Backgrounds"
        }
       },
       {
        "token": "--secondary-30",
        "hex": "#FFCF7F",
        "use": {
         "es": "Fondos",
         "en": "Backgrounds"
        }
       },
       {
        "token": "--secondary-50",
        "hex": "#FFB740",
        "use": {
         "es": "Acentos",
         "en": "Accents"
        }
       },
       {
        "token": "--secondary-75",
        "hex": "#FF9F00",
        "use": {
         "es": "Relleno con texto oscuro (8.55:1), no texto blanco",
         "en": "Fill with dark text (8.55:1), no white text"
        }
       },
       {
        "token": "--secondary-100",
        "hex": "#C27900",
        "use": {
         "es": "Solo texto grande o UI (3.34:1)",
         "en": "Large text or UI only (3.34:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Información: azul",
       "en": "Info: blue"
      },
      "items": [
       {
        "token": "--attention-10",
        "hex": "#CFD8E5",
        "use": {
         "es": "Fondos",
         "en": "Backgrounds"
        }
       },
       {
        "token": "--attention-30",
        "hex": "#88A0C2",
        "use": {
         "es": "Fondos",
         "en": "Backgrounds"
        }
       },
       {
        "token": "--attention-50",
        "hex": "#618AC2",
        "use": {
         "es": "Solo texto grande o UI (3.40:1)",
         "en": "Large text or UI only (3.40:1)"
        }
       },
       {
        "token": "--attention-75",
        "hex": "#115BC2",
        "use": {
         "es": "Texto sobre blanco (6.10:1)",
         "en": "Text on white (6.10:1)"
        }
       },
       {
        "token": "--attention-100",
        "hex": "#0C438F",
        "use": {
         "es": "Texto sobre blanco (9.08:1)",
         "en": "Text on white (9.08:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Feedback positivo: rosa",
       "en": "Positive feedback: pink"
      },
      "items": [
       {
        "token": "--success-10",
        "hex": "#FFE6F1",
        "use": {
         "es": "Fondos de confirmación",
         "en": "Confirmation backgrounds"
        }
       },
       {
        "token": "--success-30",
        "hex": "#D676A1",
        "use": {
         "es": "Acentos",
         "en": "Accents"
        }
       },
       {
        "token": "--success-50",
        "hex": "#D64B89",
        "use": {
         "es": "Solo texto grande o UI (3.85:1)",
         "en": "Large text or UI only (3.85:1)"
        }
       },
       {
        "token": "--success-75",
        "hex": "#D62976",
        "use": {
         "es": "Texto sobre blanco (4.53:1) y relleno con texto blanco (4.73:1)",
         "en": "Text on white (4.53:1) and fill with white text (4.73:1)"
        }
       },
       {
        "token": "--success-100",
        "hex": "#A31F5A",
        "use": {
         "es": "Texto fuerte (6.94:1)",
         "en": "Strong text (6.94:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Error: rojo",
       "en": "Error: red"
      },
      "items": [
       {
        "token": "--error-10",
        "hex": "#FFEAE5",
        "use": {
         "es": "Fondo de error",
         "en": "Error background"
        }
       },
       {
        "token": "--error-30",
        "hex": "#FF997F",
        "use": {
         "es": "Decorativo",
         "en": "Decorative"
        }
       },
       {
        "token": "--error-50",
        "hex": "#FF6640",
        "use": {
         "es": "Solo UI o texto grande",
         "en": "UI or large text only"
        }
       },
       {
        "token": "--error-75",
        "hex": "#FF3300",
        "use": {
         "es": "No usar con texto blanco (3.67:1). Solo borde o ícono grande",
         "en": "No white text (3.67:1). Border or large icon only"
        }
       },
       {
        "token": "--error-100",
        "hex": "#C22700",
        "use": {
         "es": "Texto de error sobre blanco (5.61:1) y relleno con texto blanco (5.86:1)",
         "en": "Error text on white (5.61:1) and fill with white text (5.86:1)"
        }
       }
      ]
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Nomenclatura semántica",
     "en": "Semantic naming"
    },
    "body": {
     "es": "En la hoja original, el feedback positivo es rosa y la información es azul, porque el verde ya es el color de marca. Propuesta: mantener las escalas y sumar tokens semánticos desacoplados del tono (--feedback-positive, --feedback-info, --feedback-warning, --feedback-error), para que el significado no dependa de recordar que rosa significa éxito.",
     "en": "In the original sheet, positive feedback is pink and info is blue, because green is already the brand color. Proposal: keep the scales and add semantic tokens decoupled from hue (--feedback-positive, --feedback-info, --feedback-warning, --feedback-error), so meaning does not depend on remembering that pink means success."
    }
   },
   {
    "t": "typescale",
    "h": {
     "es": "Tipografía",
     "en": "Typography"
    },
    "note": {
     "es": "Montserrat en cuatro pesos. Para accesibilidad: interlineado mínimo de 1.5 en el cuerpo, base de 16 px o más, tamaños en rem y reflow sin pérdida hasta 200% de zoom.",
     "en": "Montserrat in four weights. For accessibility: body line height of at least 1.5, a base of 16 px or more, sizes in rem and reflow with no loss up to 200% zoom."
    },
    "sample": {
     "es": "Laboratorio remoto",
     "en": "Remote laboratory"
    },
    "cols": {
     "style": {
      "es": "Estilo",
      "en": "Style"
     },
     "weight": {
      "es": "Peso",
      "en": "Weight"
     },
     "size": {
      "es": "Tamaño",
      "en": "Size"
     },
     "ls": {
      "es": "Espaciado",
      "en": "Tracking"
     }
    },
    "rows": [
     {
      "name": "Display 01",
      "w": 700,
      "wl": "Bold",
      "px": 60,
      "ls": "-1%"
     },
     {
      "name": "Display 02",
      "w": 700,
      "wl": "Bold",
      "px": 50,
      "ls": "1.6%"
     },
     {
      "name": "Display 03",
      "w": 700,
      "wl": "Bold",
      "px": 40,
      "ls": "1%"
     },
     {
      "name": "Display 04",
      "w": 700,
      "wl": "Bold",
      "px": 34,
      "ls": "1%"
     },
     {
      "name": "Lead",
      "w": 600,
      "wl": "Semibold",
      "px": 45,
      "ls": "-1%"
     },
     {
      "name": "H1",
      "w": 700,
      "wl": "Bold",
      "px": 34,
      "ls": "3%"
     },
     {
      "name": "H2",
      "w": 700,
      "wl": "Bold",
      "px": 30,
      "ls": "2%"
     },
     {
      "name": "H3",
      "w": 700,
      "wl": "Bold",
      "px": 24,
      "ls": "1%"
     },
     {
      "name": "H4",
      "w": 700,
      "wl": "Bold",
      "px": 20,
      "ls": "1%"
     },
     {
      "name": "H5",
      "w": 700,
      "wl": "Bold",
      "px": 18,
      "ls": "1%"
     },
     {
      "name": "Text",
      "w": 400,
      "wl": "Regular",
      "px": 20,
      "ls": "0%"
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Isologo e iconografía",
     "en": "Logo and icons"
    },
    "note": {
     "es": "Variantes MurialdoLab y MLab, en positivo y negativo, y el set de íconos de línea y temáticos. Íconos con trazo consistente y objetivo táctil de 44 × 44 px.",
     "en": "MurialdoLab and MLab variants, positive and negative, and the line and themed icon sets. Icons with consistent stroke and a 44 × 44 px touch target."
    },
    "light": true,
    "images": [
     {
      "src": "edulabs-logo-full.png",
      "w": 342,
      "h": 84,
      "alt": {
       "es": "Isologo MurialdoLab en positivo: verde y negro sobre fondo claro.",
       "en": "MurialdoLab logo, positive: green and black on light."
      }
     },
     {
      "src": "edulabs-logo-full-neg.png",
      "w": 360,
      "h": 92,
      "alt": {
       "es": "Isologo MurialdoLab en negativo: sobre fondo verde.",
       "en": "MurialdoLab logo, negative: on green."
      }
     },
     {
      "src": "edulabs-logo-short.png",
      "w": 180,
      "h": 84,
      "alt": {
       "es": "Isologo reducido MLab en positivo.",
       "en": "MLab short logo, positive."
      }
     },
     {
      "src": "edulabs-logo-short-neg.png",
      "w": 207,
      "h": 92,
      "alt": {
       "es": "Isologo reducido MLab en negativo.",
       "en": "MLab short logo, negative."
      }
     },
     {
      "src": "edulabs-icons.png",
      "w": 1200,
      "h": 75,
      "alt": {
       "es": "Set de íconos: usuario, matraz, enviar, flechas, refrescar, nota, mano, toggles, acordeón y temáticos de ADN, frascos, jeringa y equipos de laboratorio.",
       "en": "Icon set: user, flask, send, arrows, refresh, note, hand, toggles, accordion, and themed DNA, bottles, syringe and lab equipment icons."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Componentes y estados",
     "en": "Components and states"
    },
    "note": {
     "es": "Cada componente se documenta con sus estados: default, hover, foco, activo, deshabilitado y error.",
     "en": "Each component is documented with its states: default, hover, focus, active, disabled and error."
    },
    "items": [
     {
      "lead": {
       "es": "Navegación",
       "en": "Navigation"
      },
      "body": {
       "es": "Navbar con logo completo o reducido, links, botón Ingresar, estado con sesión iniciada y variante mobile con menú; footer con redes y legales.",
       "en": "Navbar with full or short logo, links, Sign in button, signed-in state and a mobile variant with menu; footer with social links and legal."
      }
     },
     {
      "lead": {
       "es": "Cards",
       "en": "Cards"
      },
      "body": {
       "es": "Cards de metodología (cuatro, en tonos pastel) y cards de laboratorio, en estado default y expandido con Acceder al Lab.",
       "en": "Methodology cards (four, in pastel tones) and lab cards, in default and expanded state with Go to Lab."
      }
     },
     {
      "lead": {
       "es": "Contenido de la actividad",
       "en": "Activity content"
      },
      "body": {
       "es": "Acordeones de objetivos, conocimientos previos, materiales y preguntas guía; reproductor de video con selección de reactivos y testigos.",
       "en": "Accordions for objectives, prerequisites, materials and guiding questions; video player with reagent and control selection."
      }
     },
     {
      "lead": {
       "es": "Controles del laboratorio",
       "en": "Lab controls"
      },
      "body": {
       "es": "Encender y apagar, voltaje de 25, 50 y 100 V, y detener.",
       "en": "Power on and off, 25, 50 and 100 V voltage, and stop."
      }
     },
     {
      "lead": {
       "es": "Formularios y acceso",
       "en": "Forms and access"
      },
      "body": {
       "es": "Inputs, textarea, mensajes de éxito y error, y pantallas de crear cuenta, iniciar sesión y recuperar cuenta.",
       "en": "Inputs, textarea, success and error messages, and create account, sign in and recover account screens."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     2,
     1,
     1
    ],
    "images": [
     {
      "src": "edulabs-11-components-1.jpg",
      "w": 1920,
      "h": 1080,
      "alt": {
       "es": "Componentes de navegación y tarjetas: navbars con logo completo y reducido, footers, redes, cards de metodología y cards de laboratorio.",
       "en": "Navigation and card components: navbars with full and short logo, footers, social links, methodology cards and lab cards."
      },
      "caption": {
       "es": "Navegación, footers y cards de metodología y de laboratorio.",
       "en": "Navigation, footers, and methodology and lab cards."
      }
     },
     {
      "src": "edulabs-11-components-4.jpg",
      "w": 1772,
      "h": 1080,
      "alt": {
       "es": "Reproductores de video con selección de reactivos y testigos, controles de voltaje, formularios y pantallas de crear cuenta, cuenta registrada, iniciar sesión y recuperar cuenta.",
       "en": "Video players with reagent and control selection, voltage controls, forms, and create account, registered account, sign in and recover account screens."
      },
      "caption": {
       "es": "Reproductores y controles del laboratorio, formularios y pantallas de acceso.",
       "en": "Lab players and controls, forms and access screens."
      }
     },
     {
      "src": "edulabs-11-components-3.jpg",
      "w": 1920,
      "h": 1080,
      "alt": {
       "es": "Contenido de la actividad: páginas de laboratorio con conocimientos previos, etapas y textos de apoyo.",
       "en": "Activity content: lab pages with prerequisites, stages and supporting text."
      },
      "caption": {
       "es": "Contenido de la actividad: conocimientos previos y etapas del laboratorio.",
       "en": "Activity content: prerequisites and lab stages."
      }
     },
     {
      "src": "edulabs-11-components-2.jpg",
      "w": 1917,
      "h": 443,
      "alt": {
       "es": "Acordeones de objetivos, conocimientos previos, materiales y preguntas guía, abiertos y cerrados.",
       "en": "Accordions for objectives, prerequisites, materials and guiding questions, open and closed."
      },
      "caption": {
       "es": "Acordeones de la actividad, abiertos y cerrados. Algunos botones del diseño original usan texto blanco sobre el verde de marca; la versión corregida está en la paleta y en la auditoría.",
       "en": "Activity accordions, open and closed. Some buttons in the original design use white text on the brand green; the corrected version is in the palette and the audit."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "04",
    "name": "Deliver",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "¿Funciona? ¿Qué entregamos?",
     "en": "Does it work? What do we ship?"
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "UI final (versión original del diseño)",
     "en": "Final UI (original design version)"
    },
    "note": {
     "es": "Esta es la interfaz final tal como fue diseñada originalmente. En la etapa de validación la audité contra WCAG 2.1 AA y documenté las correcciones de tokens necesarias.",
     "en": "This is the final interface as originally designed. In the validation stage I audited it against WCAG 2.1 AA and documented the token fixes it needed."
    },
    "single": true,
    "images": [
     {
      "src": "edulabs-12.jpg",
      "w": 1400,
      "h": 2117,
      "alt": {
       "es": "Mockups finales de alta fidelidad del producto MurialdoLab, versión original del diseño: inicio, metodología, laboratorio por etapas, hoja de observaciones y acceso.",
       "en": "High-fidelity final mockups of MurialdoLab, original design version: home, methodology, staged lab, observation sheet and access."
      }
     }
    ]
   },
   {
    "t": "audit",
    "h": {
     "es": "Validación: auditoría de accesibilidad",
     "en": "Validation: accessibility audit"
    },
    "note": {
     "es": "Audité el sistema de diseño contra WCAG 2.1 AA. Detecté combinaciones de contraste que no cumplían (por ejemplo, el verde de marca con texto blanco en botones) y definí las correcciones de tokens para alcanzar AA sin cambiar la identidad visual. Umbrales: 4.5:1 para texto normal, 3:1 para texto grande y componentes.",
     "en": "I audited the design system against WCAG 2.1 AA. I found contrast combinations that failed (for example, the brand green with white text on buttons) and defined the token fixes to reach AA without changing the visual identity. Thresholds: 4.5:1 for normal text, 3:1 for large text and components."
    },
    "cols": {
     "pair": {
      "es": "Combinación en los mockups",
      "en": "Combination in the mockups"
     },
     "ratio": {
      "es": "Ratio",
      "en": "Ratio"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "fail": {
     "es": "No cumple",
     "en": "Fails"
    },
    "pass": {
     "es": "Sí cumple",
     "en": "Passes"
    },
    "rows": [
     {
      "fg": "#FFFFFF",
      "bg": "#00C297",
      "pair": {
       "es": "Texto blanco sobre botón verde (--primary-75)",
       "en": "White text on green button (--primary-75)"
      },
      "ratio": "2.29:1",
      "fix": {
       "es": "Texto --black-50 sobre el verde (7.67:1), o fondo --primary-100 con texto blanco (5.68:1)",
       "en": "--black-50 text on the green (7.67:1), or a --primary-100 fill with white text (5.68:1)"
      },
      "fixfg": "#191919",
      "fixbg": "#00C297",
      "pass": false
     },
     {
      "fg": "#00C297",
      "bg": "#FAFAFA",
      "pair": {
       "es": "Verde --primary-75 como texto o link sobre blanco",
       "en": "--primary-75 green as text or link on white"
      },
      "ratio": "2.2:1",
      "fix": {
       "es": "Usar --primary-100 para texto (5.44:1)",
       "en": "Use --primary-100 for text (5.44:1)"
      },
      "fixfg": "#00755C",
      "fixbg": "#FAFAFA",
      "pass": false
     },
     {
      "fg": "#7F7F7F",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--grey-50 como texto sobre blanco",
       "en": "--grey-50 as text on white"
      },
      "ratio": "3.84:1",
      "fix": {
       "es": "Usar --grey-75 o más oscuro (6.71:1)",
       "en": "Use --grey-75 or darker (6.71:1)"
      },
      "fixfg": "#595959",
      "fixbg": "#FAFAFA",
      "pass": false
     },
     {
      "fg": "#FFFFFF",
      "bg": "#FF9F00",
      "pair": {
       "es": "Texto blanco sobre naranja --secondary-75",
       "en": "White text on --secondary-75 orange"
      },
      "ratio": "2.06:1",
      "fix": {
       "es": "Texto oscuro sobre el naranja (8.55:1)",
       "en": "Dark text on the orange (8.55:1)"
      },
      "fixfg": "#191919",
      "fixbg": "#FF9F00",
      "pass": false
     },
     {
      "fg": "#FFFFFF",
      "bg": "#FF3300",
      "pair": {
       "es": "Texto blanco sobre rojo --error-75",
       "en": "White text on --error-75 red"
      },
      "ratio": "3.67:1",
      "fix": {
       "es": "Usar --error-100 para rellenos con texto blanco (5.86:1)",
       "en": "Use --error-100 for fills with white text (5.86:1)"
      },
      "fixfg": "#FFFFFF",
      "fixbg": "#C22700",
      "pass": false
     },
     {
      "fg": "#D64B89",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--success-50 como texto sobre blanco",
       "en": "--success-50 as text on white"
      },
      "ratio": "3.85:1",
      "fix": {
       "es": "Usar --success-75 (4.53:1) o --success-100 (6.94:1)",
       "en": "Use --success-75 (4.53:1) or --success-100 (6.94:1)"
      },
      "fixfg": "#A31F5A",
      "fixbg": "#FAFAFA",
      "pass": false
     },
     {
      "fg": "#00C297",
      "bg": "#FAFAFA",
      "ring": true,
      "pair": {
       "es": "Anillo de foco en verde de marca sobre blanco",
       "en": "Focus ring in brand green on white"
      },
      "ratio": "2.2:1",
      "fix": {
       "es": "Foco en --primary-100 (5.44:1) o --attention-75 (6.10:1)",
       "en": "Focus in --primary-100 (5.44:1) or --attention-75 (6.10:1)"
      },
      "fixfg": "#00755C",
      "fixbg": "#FAFAFA",
      "fixring": true,
      "pass": false
     },
     {
      "fg": "#595959",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--grey-75 como texto sobre blanco",
       "en": "--grey-75 as text on white"
      },
      "ratio": "6.71:1",
      "pass": true
     },
     {
      "fg": "#383838",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--black-10 como texto sobre blanco (y los negros más oscuros)",
       "en": "--black-10 as text on white (and the darker blacks)"
      },
      "ratio": "11.23:1",
      "pass": true
     },
     {
      "fg": "#00755C",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--primary-100 como texto o link sobre blanco",
       "en": "--primary-100 as text or link on white"
      },
      "ratio": "5.44:1",
      "pass": true
     },
     {
      "fg": "#FFFFFF",
      "bg": "#00755C",
      "pair": {
       "es": "Texto blanco sobre --primary-100",
       "en": "White text on --primary-100"
      },
      "ratio": "5.68:1",
      "pass": true
     },
     {
      "fg": "#191919",
      "bg": "#00C297",
      "pair": {
       "es": "Texto --black-50 sobre --primary-75 (y sobre los verdes más claros)",
       "en": "--black-50 text on --primary-75 (and on the lighter greens)"
      },
      "ratio": "7.67:1",
      "pass": true
     },
     {
      "fg": "#191919",
      "bg": "#FF9F00",
      "pair": {
       "es": "Texto --black-50 sobre naranja --secondary-75",
       "en": "--black-50 text on --secondary-75 orange"
      },
      "ratio": "8.55:1",
      "pass": true
     },
     {
      "fg": "#115BC2",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--attention-75 como texto sobre blanco",
       "en": "--attention-75 as text on white"
      },
      "ratio": "6.10:1",
      "pass": true
     },
     {
      "fg": "#0C438F",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--attention-100 como texto sobre blanco",
       "en": "--attention-100 as text on white"
      },
      "ratio": "9.08:1",
      "pass": true
     },
     {
      "fg": "#D62976",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--success-75 como texto sobre blanco",
       "en": "--success-75 as text on white"
      },
      "ratio": "4.53:1",
      "pass": true
     },
     {
      "fg": "#FFFFFF",
      "bg": "#D62976",
      "pair": {
       "es": "Texto blanco sobre --success-75",
       "en": "White text on --success-75"
      },
      "ratio": "4.73:1",
      "pass": true
     },
     {
      "fg": "#A31F5A",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--success-100 como texto sobre blanco",
       "en": "--success-100 as text on white"
      },
      "ratio": "6.94:1",
      "pass": true
     },
     {
      "fg": "#C22700",
      "bg": "#FAFAFA",
      "pair": {
       "es": "--error-100 como texto sobre blanco",
       "en": "--error-100 as text on white"
      },
      "ratio": "5.61:1",
      "pass": true
     },
     {
      "fg": "#FFFFFF",
      "bg": "#C22700",
      "pair": {
       "es": "Texto blanco sobre --error-100",
       "en": "White text on --error-100"
      },
      "ratio": "5.86:1",
      "pass": true
     }
    ],
    "nofix": {
     "es": "No requiere cambios",
     "en": "No change needed"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "p": [
     {
      "es": "El rediseño dejó el proceso reencuadrado en Doble Diamante, un sistema de diseño documentado y corregido para accesibilidad, flujos y persona como contenido accesible, y una UI final consistente con la identidad de marca.",
      "en": "The redesign delivered the process reframed around the Double Diamond, a documented design system corrected for accessibility, flows and persona as accessible content, and a final UI consistent with the brand identity."
     },
     {
      "es": "El concepto original de la plataforma había sido validado previamente; este trabajo es una reinvención de su UX/UI.",
      "en": "The original platform concept had been validated previously; this work is a UX/UI reinvention of it."
     }
    ],
    "hl": true
   },
   {
    "t": "bullets",
    "h": {
     "es": "Próximos pasos",
     "en": "Next steps"
    },
    "items": {
     "es": [
      "Test de usabilidad moderado con docentes y estudiantes.",
      "Medir la finalización de la práctica y los pasos hasta iniciarla.",
      "Ampliar el catálogo de laboratorios."
     ],
     "en": [
      "Moderated usability testing with teachers and students.",
      "Measure practice completion and steps-to-start.",
      "Expand the lab catalog."
     ]
    },
    "foot": {
     "es": "El cliente original no continuó con el proyecto, así que el trabajo llegó hasta esta etapa de rediseño y auditoría. Los próximos pasos quedan planteados para una posible continuidad.",
     "en": "The original client did not continue the project, so the work ended at this redesign and audit stage. The next steps are laid out for a possible continuation."
    }
   }
  ],
  "outcome": null
 },
 "auditorias-ux": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Auditorías UX/UI",
   "en": "UX/UI audits"
  },
  "subtitle": {
   "es": "Asesoré a cada equipo sobre su proyecto de producto, con evaluación heurística y accesibilidad, en formato presencial y remoto.",
   "en": "I advised each team on their product project, with heuristic evaluation and accessibility, in person and remotely."
  },
  "chips": {
   "es": [
    "Evaluación heurística",
    "Accesibilidad WCAG 2.1",
    "Heurísticas de Nielsen",
    "Mentoría de equipos"
   ],
   "en": [
    "Heuristic evaluation",
    "WCAG 2.1 accessibility",
    "Nielsen heuristics",
    "Team mentoring"
   ]
  },
  "summary": {
   "problem": {
    "es": "Los equipos de 7mo desarrollan productos para clientes reales y necesitaban detectar problemas de usabilidad y accesibilidad antes de entregarlos.",
    "en": "7th-year teams build products for real clients and needed to catch usability and accessibility problems before delivering them."
   },
   "solution": {
    "es": "Asesorías presenciales con devolución en vivo y auditorías remotas con un entregable web: heurísticas de Nielsen, WCAG 2.1 y medición real de contraste.",
    "en": "In-person sessions with live feedback, and remote audits with a web deliverable: Nielsen’s heuristics, WCAG 2.1 and real contrast measurement."
   },
   "results": [
    {
     "v": "10",
     "l": {
      "es": "productos revisados: 3 en auditoría remota y 7 en persona",
      "en": "products reviewed: 3 remote audits and 7 in person"
     }
    },
    {
     "t": {
      "es": "Cada equipo recibió una devolución accionable y priorizada.",
      "en": "Every team received actionable, prioritised feedback."
     }
    },
    {
     "t": {
      "es": "Contraste y accesibilidad, los problemas más repetidos, pasaron a ser un foco de la asesoría.",
      "en": "Contrast and accessibility, the most frequent problems, became a focus of the sessions."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Especialista UX/UI y coordinadora: evaluación heurística, auditoría de accesibilidad, devolución y roadmap de mejoras para cada equipo",
    "en": "UX/UI specialist and coordinator: heuristic evaluation, accessibility audit, feedback and an improvement roadmap for each team"
   },
   "timeline": {
    "es": "Marzo a noviembre 2026",
    "en": "March to November 2026"
   },
   "context": {
    "es": "Proyecto interdisciplinario de tecnología, 7mo de Informática, Instituto Leonardo Murialdo (Tres de Febrero)",
    "en": "Interdisciplinary technology project, 7th-year Informatics, Instituto Leonardo Murialdo (Tres de Febrero)"
   },
   "stack": [
    "WCAG Color Contrast Checker",
    "Google Lighthouse",
    "PageSpeed Insights",
    "Claude"
   ],
   "methods": [
    "Nielsen",
    "WCAG 2.1",
    "Arquitectura de información",
    "Crítica de diseño visual"
   ]
  },
  "links": [],
  "blocks": [
   {
    "t": "kv",
    "h": {
     "es": "Contexto",
     "en": "Overview"
    },
    "items": [
     {
      "k": {
       "es": "Qué es",
       "en": "What it is"
      },
      "v": {
       "es": "Asesoría y auditoría UX/UI a los equipos de 7mo sobre sus proyectos de diseño y desarrollo de producto, en el marco del proyecto interdisciplinario de tecnología.",
       "en": "UX/UI advisory and audits for the 7th-year teams on their product design and development projects, within the interdisciplinary technology project."
      }
     },
     {
      "k": {
       "es": "Alcance",
       "en": "Scope"
      },
      "v": {
       "es": "Asesoré a todos los equipos, cada uno con sus particularidades.",
       "en": "I advised every team, each with its own particularities."
      }
     },
     {
      "k": {
       "es": "Foco",
       "en": "Focus"
      },
      "v": {
       "es": "Usabilidad (heurísticas de Nielsen), accesibilidad (WCAG 2.1), arquitectura de información y crítica de diseño visual.",
       "en": "Usability (Nielsen heuristics), accessibility (WCAG 2.1), information architecture and visual design critique."
      }
     },
     {
      "k": {
       "es": "Entregable",
       "en": "Deliverable"
      },
      "v": {
       "es": "En las auditorías remotas, un documento web de evaluación heurística autocontenido, con hallazgos, severidad, mediciones de contraste y recomendaciones priorizadas.",
       "en": "For remote audits, a self-contained web document with the heuristic evaluation: findings, severity, contrast measurements and prioritised recommendations."
      }
     }
    ],
    "toc": {
     "es": "Contexto y encuadre",
     "en": "Context and framing"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "es": "El encuadre",
     "en": "The framing"
    },
    "p": [
     {
      "es": "En 7mo, los equipos desarrollan proyectos de tecnología orientados a diseño y desarrollo de producto, con clientes y necesidades reales. Mi rol fue acompañarlos desde la mirada UX/UI: revisar sus productos, detectar problemas de usabilidad y accesibilidad, y devolverles recomendaciones accionables y priorizadas.",
      "en": "In their final year, teams build technology projects oriented to product design and development, with real clients and needs. My role was to support them from a UX/UI lens: reviewing their products, spotting usability and accessibility issues, and giving them actionable, prioritised recommendations."
     },
     {
      "es": "Por privacidad, los clientes se describen por rubro y no por nombre.",
      "en": "For privacy, clients are described by industry rather than by name."
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Dos modalidades",
     "en": "Two formats"
    },
    "note": {
     "es": "Misma rigurosidad, distinto formato según la necesidad y la disponibilidad de cada equipo.",
     "en": "The same rigour, a different format depending on each team’s needs and availability."
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "Presencial, con devolución instantánea",
       "en": "In person, with instant feedback"
      },
      "body": {
       "es": "Revisión en vivo con el equipo, señalando problemas y soluciones sobre la marcha, con ida y vuelta inmediato.",
       "en": "A live review with the team, pointing out problems and solutions on the spot, with immediate back and forth."
      }
     },
     {
      "title": {
       "es": "Remota, con entregable escrito",
       "en": "Remote, with a written deliverable"
      },
      "body": {
       "es": "Auditoría a fondo del sitio o producto, entregada como documento de evaluación heurística autocontenido.",
       "en": "An in-depth audit of the site or product, delivered as a self-contained heuristic evaluation document."
      }
     }
    ],
    "toc": {
     "es": "Modalidades y método",
     "en": "Formats and method"
    }
   },
   {
    "t": "roadmap",
    "join": true,
    "h": {
     "es": "Método: flujo de trabajo",
     "en": "Method: workflow"
    },
    "steps": [
     {
      "code": {
       "es": "01",
       "en": "01"
      },
      "title": {
       "es": "Análisis exploratorio",
       "en": "Exploratory analysis"
      },
      "body": {
       "es": "Recorrido del producto para entender la arquitectura de información, la estructura de navegación y los estados reales, incluido el contenido placeholder que no se ve a simple vista. En remoto, extracción del contenido del sitio en vivo antes de las capturas.",
       "en": "A walkthrough of the product to understand its information architecture, navigation structure and real states, including placeholder content that is not visible at first glance. Remotely, the live site’s content was extracted before taking screenshots."
      }
     },
     {
      "code": {
       "es": "02",
       "en": "02"
      },
      "title": {
       "es": "Evaluación heurística formal",
       "en": "Formal heuristic evaluation"
      },
      "body": {
       "es": "Documento estructurado con hallazgos, severidad de 1 a 4 y recomendaciones priorizadas.",
       "en": "A structured document with findings, severity from 1 to 4 and prioritised recommendations."
      }
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Marcos aplicados",
     "en": "Frameworks applied"
    },
    "cols": 3,
    "items": [
     {
      "title": {
       "es": "Heurísticas de Nielsen",
       "en": "Nielsen heuristics"
      },
      "body": {
       "es": "Los 10 principios de usabilidad, con una escala de severidad de 1 a 4 para cada hallazgo.",
       "en": "The 10 usability principles, with a 1 to 4 severity scale for each finding."
      }
     },
     {
      "title": {
       "es": "WCAG 2.1",
       "en": "WCAG 2.1"
      },
      "body": {
       "es": "Contraste, jerarquía, foco y estructura.",
       "en": "Contrast, hierarchy, focus and structure."
      }
     },
     {
      "title": {
       "es": "Arquitectura y diseño visual",
       "en": "Architecture and visual design"
      },
      "body": {
       "es": "Arquitectura de información y crítica de diseño visual.",
       "en": "Information architecture and visual design critique."
      }
     }
    ],
    "toc": {
     "es": "Marcos, contraste y entregable",
     "en": "Frameworks, contrast and deliverable"
    }
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "es": "Medición de contraste",
     "en": "Measuring contrast"
    },
    "items": [
     {
      "lead": {
       "es": "Ratio real, con una extensión",
       "en": "Real ratio, with a browser extension"
      },
      "body": {
       "es": "Medición de los ratios de contraste WCAG con la extensión WCAG Color Contrast Checker.",
       "en": "WCAG contrast ratios measured with the WCAG Color Contrast Checker extension."
      }
     },
     {
      "lead": {
       "es": "Texto fino, con Lighthouse",
       "en": "Thin text, with Lighthouse"
      },
      "body": {
       "es": "Donde el antialiasing vuelve poco fiable la medición por color, se cita Google Lighthouse / PageSpeed Insights como fuente.",
       "en": "Where antialiasing makes colour sampling unreliable, Google Lighthouse / PageSpeed Insights is cited as the source."
      }
     },
     {
      "lead": {
       "es": "Honestidad metodológica",
       "en": "Methodological honesty"
      },
      "body": {
       "es": "Cada herramienta se acredita y no se exagera la exactitud de lo medido.",
       "en": "Every tool is credited and the precision of each measurement is never overstated."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "join": true,
    "h": {
     "es": "Formato del entregable",
     "en": "Deliverable format"
    },
    "items": {
     "es": [
      "Documento web autocontenido por equipo, con las imágenes embebidas.",
      "Paleta neutra y profesional, distinta de la marca del cliente, para no competir con su identidad.",
      "Notas técnicas de desarrollo separadas del análisis UX, para que sirvan a perfiles distintos.",
      "Metadatos, como la URL del proyecto, siempre visibles y completos."
     ],
     "en": [
      "A self-contained web document per team, with embedded images.",
      "A neutral, professional palette, different from the client’s brand, so it does not compete with their identity.",
      "Technical development notes kept separate from the UX analysis, so they serve different profiles.",
      "Metadata, such as the project URL, always visible and complete."
     ]
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Auditorías remotas",
     "en": "Remote audits"
    },
    "cols": 3,
    "items": [
     {
      "title": {
       "es": "Plataforma de métricas de una marca de colchones",
       "en": "Product-metrics platform for a mattress brand"
      },
      "tag": null,
      "body": {
       "es": "Evaluación heurística con capturas, paleta de color con ratios WCAG verificados, una guía visual de color con mockups y un roadmap de mejoras priorizado. La paleta recomendada respeta el verde de marca como restricción.",
       "en": "Heuristic evaluation with screenshots, a colour palette with verified WCAG ratios, a visual colour guide with mockups and a prioritised improvement roadmap. The recommended palette keeps the brand green as a constraint."
      },
      "url": "https://proyectocannon.alwaysdata.net/landing/index.html"
     },
     {
      "title": {
       "es": "Sitio de un bróker de seguros",
       "en": "Insurance-broker website"
      },
      "tag": null,
      "body": {
       "es": "Datos regulatorios placeholder publicados en el sitio en vivo; fallas de contraste (azul de marca en 3.34:1 y etiquetas eyebrow en 3.09:1, por debajo de WCAG AA); desajuste entre CTA y flujo; banda de logos de aseguradoras vacía en desktop.",
       "en": "Placeholder regulatory data live on the site; contrast failures (brand blue at 3.34:1 and eyebrow labels at 3.09:1, below WCAG AA); a CTA and flow mismatch; an empty insurer-logo band on desktop."
      },
      "url": "https://majoseg.alwaysdata.net/"
     },
     {
      "title": {
       "es": "App de ventas y presupuestos de una fábrica de muebles",
       "en": "Sales and quotes app for a furniture manufacturer"
      },
      "tag": null,
      "body": {
       "es": "Evaluación heurística y de accesibilidad de los flujos de carga de presupuestos y seguimiento de ventas.",
       "en": "Heuristic and accessibility evaluation of the quote-entry and sales-tracking flows."
      }
     }
    ],
    "cta": {
     "es": "Ver sitio",
     "en": "View site"
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Asesorías presenciales",
     "en": "In-person advisory"
    },
    "note": {
     "es": "Revisión en vivo con cada equipo, con recomendaciones inmediatas y acompañamiento iterativo.",
     "en": "A live review with each team, with immediate recommendations and iterative support."
    },
    "cols": 3,
    "items": [
     {
      "title": {
       "es": "App de logística",
       "en": "Logistics app"
      },
      "tag": null,
      "body": {
       "es": "Plataforma de logística para el seguimiento de envíos y la gestión de rutas: monitoreo de la flota de reparto, notificaciones al cliente con el día y la franja horaria de entrega, y optimización de recorridos según los puntos de entrega, el horario y el estado del tránsito.",
       "en": "Logistics platform for shipment tracking and route management: delivery-fleet monitoring, customer notifications with the delivery day and time slot, and route optimisation based on drop-off points, time of day and traffic conditions."
      },
      "url": "https://varelajoaquin2007-rgb.github.io/Landing-Page-Tres-Reyes/"
     },
     {
      "title": {
       "es": "Configuración de telares",
       "en": "Loom configuration"
      },
      "tag": null,
      "body": {
       "es": "Software de configuración de máquinas de telar.",
       "en": "Loom-machine configuration software."
      },
      "url": "https://manfredojuanignacio08-prog.github.io/Landing_Page_CIT/"
     },
     {
      "title": {
       "es": "Ficheo de personal",
       "en": "Staff clock-in"
      },
      "tag": null,
      "body": {
       "es": "Software de control de entrada y salida de personal.",
       "en": "Staff clock-in and clock-out software."
      },
      "url": "https://cataquintana11.github.io/landing-page/"
     },
     {
      "title": {
       "es": "Contaduría",
       "en": "Accounting"
      },
      "tag": null,
      "body": {
       "es": "Software de gestión para un estudio contable.",
       "en": "Management software for an accounting firm."
      },
      "url": "https://ecr-landing-page.up.railway.app/"
     },
     {
      "title": {
       "es": "Datalogger",
       "en": "Data logger"
      },
      "tag": null,
      "body": {
       "es": "Datalogger para un organismo de metrología y tecnología.",
       "en": "Data logger for a metrology and technology body."
      },
      "url": "https://fr2311.github.io/landingDatalogger/"
     },
     {
      "title": {
       "es": "Gimnasio",
       "en": "Gym"
      },
      "tag": null,
      "body": {
       "es": "Seguimiento de clases, usuarios y pago de clases.",
       "en": "Class, user and payment tracking."
      },
      "url": "https://juanjoybeto.github.io/Pulso-landing/"
     },
     {
      "title": {
       "es": "App de oficios",
       "en": "Trades app"
      },
      "tag": null,
      "body": {
       "es": "App que conecta vecinos del conurbano con profesionales de oficios verificados con DNI, para urgencias y trabajos agendados.",
       "en": "An app that connects residents of Greater Buenos Aires with tradespeople verified by national ID, for emergencies and scheduled jobs."
      },
      "url": "https://altoque-landing.vercel.app/"
     }
    ],
    "cta": {
     "es": "Ver sitio",
     "en": "View site"
    }
   }
  ],
  "outcome": {
   "h": {
    "es": "Resultados",
    "en": "Outcomes"
   },
   "body": {
    "es": "Cada equipo recibió una devolución accionable y priorizada sobre su producto. El trabajo combinó rigor metodológico (Nielsen, WCAG, medición real de contraste) con un formato adaptado a cada caso, presencial o remoto. Como aprendizaje transversal, la accesibilidad y el contraste fueron los problemas más recurrentes, y eso los volvió un foco de la asesoría.",
    "en": "Every team received actionable, prioritised feedback on their product. The work combined methodological rigour (Nielsen, WCAG, real contrast measurement) with a format adapted to each case, in person or remote. As a cross-cutting takeaway, accessibility and contrast were the most recurring issues, which made them a focus of the advisory."
   }
  }
 },
 "auditoria-estetica": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Auditoría UX/UI de un centro de estética",
   "en": "UX/UI audit of a facial aesthetics centre"
  },
  "subtitle": {
   "es": "Landing de un centro de estética facial: evaluación heurística, WCAG 2.2 y Core Web Vitals del recorrido hasta pedir turno. Propuesta conceptual, no afiliada.",
   "en": "A facial aesthetics centre’s landing page: heuristic evaluation, WCAG 2.2 and Core Web Vitals of the path to booking. A conceptual proposal, not affiliated."
  },
  "chips": {
   "es": [
    "Evaluación heurística",
    "WCAG 2.2 AA",
    "Core Web Vitals"
   ],
   "en": [
    "Heuristic evaluation",
    "WCAG 2.2 AA",
    "Core Web Vitals"
   ]
  },
  "summary": {
   "problem": {
    "es": "Un sitio lindo que no ayudaba a pedir turno: funcionaba como folleto y todo el recorrido terminaba en un mensaje directo vacío de Instagram.",
    "en": "A beautiful site that didn’t help people book: it worked as a brochure, and every path ended in an empty Instagram direct message."
   },
   "solution": {
    "es": "Una auditoría del recorrido hasta pedir turno, con heurísticas de Nielsen, WCAG 2.2 y Core Web Vitals, respetando que los turnos se toman solo por Instagram.",
    "en": "An audit of the path to booking with Nielsen’s heuristics, WCAG 2.2 and Core Web Vitals, working within the rule that bookings only happen on Instagram."
   },
   "results": [
    {
     "v": "14",
     "l": {
      "es": "problemas de usabilidad priorizados",
      "en": "prioritised usability issues"
     }
    },
    {
     "v": {
      "es": "4,82:1",
      "en": "4.82:1"
     },
     "l": {
      "es": "contraste mínimo del fucsia corregido; antes, 3,62:1",
      "en": "minimum contrast of the corrected fuchsia, up from 3.62:1"
     }
    },
    {
     "v": {
      "es": "2,9 s",
      "en": "2.9 s"
     },
     "l": {
      "es": "LCP en celular, con su causa identificada",
      "en": "mobile LCP, with its cause identified"
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Auditoría UX/UI, de accesibilidad y de rendimiento",
    "en": "UX/UI, accessibility and performance audit"
   },
   "timeline": {
    "es": "Noviembre 2026",
    "en": "November 2026"
   },
   "context": {
    "es": "Centro de estética facial de autor en CABA. Propuesta conceptual no afiliada, con datos públicos del sitio y de Instagram",
    "en": "Signature facial aesthetics centre in Buenos Aires. A conceptual, non-affiliated proposal, based on public data from the website and Instagram"
   },
   "stack": [
    "PageSpeed Insights",
    "Lighthouse 13.6",
    "Chrome DevTools"
   ],
   "methods": [
    "Nielsen",
    "WCAG 2.2",
    "Core Web Vitals"
   ]
  },
  "links": [],
  "blocks": [
   {
    "t": "kv",
    "h": {
     "es": "Sobre el caso",
     "en": "About this case"
    },
    "items": [
     {
      "k": {
       "es": "Cliente",
       "en": "Client"
      },
      "v": {
       "es": "Sin cliente: propuesta conceptual no afiliada, con datos públicos del sitio y de Instagram, sobre un centro de estética facial de autor en CABA.",
       "en": "No client: a conceptual, non-affiliated proposal, based on public data from the website and Instagram, about a signature facial aesthetics centre in Buenos Aires."
      }
     },
     {
      "k": {
       "es": "Mi rol",
       "en": "My role"
      },
      "v": {
       "es": "Auditoría UX/UI, de accesibilidad y de rendimiento.",
       "en": "UX/UI, accessibility and performance audit."
      }
     },
     {
      "k": {
       "es": "Autora",
       "en": "Author"
      },
      "v": {
       "es": "Lic. Lourdes Pedaci",
       "en": "Lourdes Pedaci (Lic.)"
      }
     },
     {
      "k": {
       "es": "Privacidad",
       "en": "Privacy"
      },
      "v": {
       "es": "No se reproduce la marca. Las capturas tapan nombres, logo, titulares, ubicación, reseñas y otros datos que permitirían identificar al negocio, y los informes de PageSpeed están recortados.",
       "en": "The brand is not reproduced. The screenshots cover names, logo, headlines, location, reviews and other details that could identify the business, and the PageSpeed reports are cropped."
      }
     }
    ],
    "toc": {
     "es": "Sobre el caso y contexto",
     "en": "About the case and context"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "es": "Contexto",
     "en": "Context"
    },
    "p": [
     {
      "es": "El centro pertenece a una profesional de la estética con larga trayectoria, muy buen puntaje en Google y una comunidad grande en Instagram. La web es el link de la bio: casi todo el tráfico llega desde el celular, dentro de la app de Instagram.",
      "en": "The centre belongs to a long-established aesthetics professional with a very good Google rating and a large Instagram community. The website is the link in the bio: almost all traffic arrives from a phone, inside the Instagram app."
     },
     {
      "es": "Los turnos se toman solo por mensaje directo de Instagram. Esa restricción del negocio atraviesa toda la auditoría.",
      "en": "Appointments are only booked by Instagram direct message. That business constraint runs through the entire audit."
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Audiencias",
     "en": "Audiences"
    },
    "items": [
     {
      "lead": {
       "es": "Clienta actual",
       "en": "Current client"
      },
      "body": {
       "es": "Ya sigue a la profesional, quiere saber qué le conviene, cuánto sale y cómo pedir turno.",
       "en": "Already follows the professional and wants to know what suits her, what it costs and how to book."
      }
     },
     {
      "lead": {
       "es": "Clienta nueva",
       "en": "New client"
      },
      "body": {
       "es": "Llega desde Google Maps, no conoce a la profesional y necesita pruebas antes de escribir.",
       "en": "Arrives from Google Maps, does not know the professional and needs proof before writing."
      }
     },
     {
      "lead": {
       "es": "Profesional de la estética",
       "en": "Aesthetics professional"
      },
      "body": {
       "es": "Busca los cursos que dicta el centro, que el sitio mencionaba sin enlazar.",
       "en": "Looks for the courses the centre teaches, which the site mentioned without linking to them."
      }
     }
    ],
    "toc": {
     "es": "Audiencias y método",
     "en": "Audiences and method"
    }
   },
   {
    "t": "gallery",
    "images": [
     {
      "src": "estetica-01-sitio-original.webp",
      "w": 1200,
      "h": 5268,
      "alt": {
       "es": "Sitio original completo en escritorio, una página larga con portada, cinco tarjetas de la experiencia, seis categorías de tratamientos, reseñas, mapa, biografía y pie. Marca, ubicación, reseñas y videos están tapados.",
       "en": "Full original site on desktop, a long page with a hero, five experience cards, six treatment categories, reviews, a map, a biography and a footer. Brand, location, reviews and videos are covered."
      },
      "caption": {
       "es": "El sitio original completo, en escritorio. Desplazá dentro del recuadro para recorrerlo.",
       "en": "The full original site, on desktop. Scroll inside the frame to go through it."
      },
      "scroll": true
     }
    ],
    "medium": true
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "es": "Método",
     "en": "Method"
    },
    "items": [
     {
      "lead": {
       "es": "Recorrido en vivo",
       "en": "Live walkthrough"
      },
      "body": {
       "es": "La home y las seis subpáginas de tratamientos.",
       "en": "The home page and the six treatment subpages."
      }
     },
     {
      "lead": {
       "es": "Inspección técnica",
       "en": "Technical inspection"
      },
      "body": {
       "es": "DOM, tokens de color, tipografía, áreas táctiles y embeds.",
       "en": "DOM, colour tokens, typography, touch targets and embeds."
      }
     },
     {
      "lead": {
       "es": "PageSpeed Insights",
       "en": "PageSpeed Insights"
      },
      "body": {
       "es": "Informes en celular y en escritorio.",
       "en": "Reports on mobile and on desktop."
      }
     },
     {
      "lead": {
       "es": "Evaluación heurística",
       "en": "Heuristic evaluation"
      },
      "body": {
       "es": "Las 10 heurísticas de Nielsen, con una escala de severidad de 0 a 4.",
       "en": "Nielsen’s 10 heuristics, with a severity scale from 0 to 4."
      }
     },
     {
      "lead": {
       "es": "Cálculo de contraste",
       "en": "Contrast calculation"
      },
      "body": {
       "es": "Con la fórmula de WCAG 2.2.",
       "en": "Using the WCAG 2.2 formula."
      }
     },
     {
      "lead": {
       "es": "Relevamiento de Instagram",
       "en": "Instagram review"
      },
      "body": {
       "es": "Las dos cuentas del negocio, para contrastar lo que la marca comunica con lo que el sitio muestra.",
       "en": "The business’s two accounts, to compare what the brand communicates with what the site shows."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "id": "auditoria",
    "mode": {
     "es": "heurísticas, WCAG 2.2 y Core Web Vitals",
     "en": "heuristics, WCAG 2.2 and Core Web Vitals"
    },
    "name": {
     "es": "Auditoría",
     "en": "Audit"
    },
    "q": {
     "es": "Qué funcionaba y dónde se trababa el camino hasta pedir turno.",
     "en": "What worked and where the path to booking got stuck."
    }
   },
   {
    "t": "bullets",
    "h": {
     "es": "Lo que funcionaba",
     "en": "What worked"
    },
    "items": {
     "es": [
      "Una voz de marca auténtica y un principio ético claro: no hacer un tratamiento que la piel no necesita.",
      "Precios transparentes y detallados en las subpáginas, algo poco común en el rubro.",
      "Buena base técnica: 100 en SEO, CLS 0, TBT 0 ms, HTML semántico y datos estructurados."
     ],
     "en": [
      "An authentic brand voice and a clear ethical principle: no treatment that the skin does not need.",
      "Transparent, detailed prices on the subpages, which is uncommon in the industry.",
      "A good technical base: 100 in SEO, CLS 0, TBT 0 ms, semantic HTML and structured data."
     ]
    }
   },
   {
    "t": "compare",
    "lead": true,
    "h": {
     "es": "Hallazgos principales",
     "en": "Main findings"
    },
    "note": {
     "es": "Ocho de los 14 problemas. La severidad usa la escala de Nielsen, de 0 a 4.",
     "en": "Eight of the 14 problems. Severity uses Nielsen’s scale, from 0 to 4."
    },
    "cols": {
     "dim": {
      "es": "Hallazgo",
      "en": "Finding"
     },
     "before": {
      "es": "Heurística o criterio",
      "en": "Heuristic or criterion"
     },
     "after": {
      "es": "Severidad",
      "en": "Severity"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Promo \"Hasta octubre\" y \"Precios vigentes a agosto\" visibles en noviembre",
       "en": "\"Until October\" promo and \"Prices valid in August\" still visible in November"
      },
      "before": {
       "es": "Visibilidad del estado del sistema",
       "en": "Visibility of system status"
      },
      "after": {
       "es": "3",
       "en": "3"
      }
     },
     {
      "dim": {
       "es": "\"Reservar turno\" no reserva: salta al final de la página, que recién ahí deriva a Instagram",
       "en": "\"Book an appointment\" does not book: it jumps to the end of the page, which only then points to Instagram"
      },
      "before": {
       "es": "Relación con el mundo real",
       "en": "Match with the real world"
      },
      "after": {
       "es": "3",
       "en": "3"
      }
     },
     {
      "dim": {
       "es": "Categorías por técnica (peelings, dermaplaning) cuando la clienta piensa por problema (manchas, acné)",
       "en": "Categories by technique (peels, dermaplaning) when clients think by problem (dark spots, acne)"
      },
      "before": {
       "es": "Relación con el mundo real",
       "en": "Match with the real world"
      },
      "after": {
       "es": "3",
       "en": "3"
      }
     },
     {
      "dim": {
       "es": "Sin contraindicaciones ni aclaraciones previas",
       "en": "No contraindications or prior notes"
      },
      "before": {
       "es": "Prevención de errores",
       "en": "Error prevention"
      },
      "after": {
       "es": "3",
       "en": "3"
      }
     },
     {
      "dim": {
       "es": "La especialidad declarada en Instagram (manchas y melasma) no aparece en el sitio",
       "en": "The specialty stated on Instagram (dark spots and melasma) does not appear on the site"
      },
      "before": {
       "es": "Contenido y confianza",
       "en": "Content and trust"
      },
      "after": {
       "es": "3",
       "en": "3"
      }
     },
     {
      "dim": {
       "es": "Cada consulta empieza de cero en un mensaje directo vacío",
       "en": "Every enquiry starts from zero in an empty direct message"
      },
      "before": {
       "es": "Flexibilidad y eficiencia",
       "en": "Flexibility and efficiency"
      },
      "after": {
       "es": "2",
       "en": "2"
      }
     },
     {
      "dim": {
       "es": "La home no muestra precios: hay que entrar a cada subpágina",
       "en": "The home page shows no prices: each subpage has to be opened"
      },
      "before": {
       "es": "Reconocer antes que recordar",
       "en": "Recognition rather than recall"
      },
      "after": {
       "es": "2",
       "en": "2"
      }
     },
     {
      "dim": {
       "es": "Seis enlaces con el mismo texto \"Ver todos los tratamientos\"",
       "en": "Six links with the same text, \"See all treatments\""
      },
      "before": {
       "es": "WCAG 2.4.4",
       "en": "WCAG 2.4.4"
      },
      "after": {
       "es": "2",
       "en": "2"
      }
     }
    ]
   },
   {
    "t": "audit",
    "h": {
     "es": "Accesibilidad: contraste del color de marca",
     "en": "Accessibility: brand colour contrast"
    },
    "note": {
     "es": "El fucsia de marca #D83383 no llega al mínimo AA de 4,5:1 sobre ningún fondo de la paleta. La corrección propuesta es #B8266F, que da entre 4,82:1 y 5,92:1 sin perder identidad.",
     "en": "The brand fuchsia #D83383 does not reach the AA minimum of 4.5:1 on any background in the palette. The proposed fix is #B8266F, which gives between 4.82:1 and 5.92:1 without losing identity."
    },
    "cols": {
     "pair": {
      "es": "Combinación",
      "en": "Combination"
     },
     "ratio": {
      "es": "Ratio",
      "en": "Ratio"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección propuesta",
      "en": "Proposed fix"
     }
    },
    "pass": {
     "es": "Cumple",
     "en": "Pass"
    },
    "fail": {
     "es": "No cumple",
     "en": "Fail"
    },
    "nofix": {
     "es": "Sin cambios",
     "en": "No change"
    },
    "rows": [
     {
      "fg": "#D83383",
      "bg": "#FAE2EC",
      "pair": {
       "es": "Fucsia sobre el rosa claro",
       "en": "Fuchsia on the light pink"
      },
      "ratio": {
       "es": "3,62:1",
       "en": "3.62:1"
      },
      "pass": false,
      "fixfg": "#B8266F",
      "fixbg": "#FAE2EC",
      "fix": {
       "es": "#B8266F sobre el rosa claro",
       "en": "#B8266F on the light pink"
      }
     },
     {
      "fg": "#FFFFFF",
      "bg": "#D83383",
      "pair": {
       "es": "Texto blanco sobre fucsia",
       "en": "White text on fuchsia"
      },
      "ratio": {
       "es": "4,45:1",
       "en": "4.45:1"
      },
      "pass": false,
      "fixfg": "#FFFFFF",
      "fixbg": "#B8266F",
      "fix": {
       "es": "Texto blanco sobre #B8266F",
       "en": "White text on #B8266F"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Rendimiento",
     "en": "Performance"
    },
    "body": {
     "es": "Excelente en escritorio (100), pero en celular el LCP fue de 2,9 s, por encima del umbral de 2,5 s. La causa: un logo PNG de 134 KB y tres familias tipográficas desde Google Fonts que bloqueaban el render.",
     "en": "Excellent on desktop (100), but on mobile the LCP was 2.9 s, above the 2.5 s threshold. The cause: a 134 KB PNG logo and three font families from Google Fonts that blocked rendering."
    }
   },
   {
    "t": "gallery",
    "wide": true,
    "images": [
     {
      "src": "estetica-02-lighthouse-celular.webp",
      "w": 1200,
      "h": 1225,
      "alt": {
       "es": "Informe de PageSpeed Insights en celular: 95 de rendimiento y LCP de 2,9 s, marcado en naranja. La dirección y las vistas del sitio están tapadas.",
       "en": "PageSpeed Insights report on mobile: 95 in performance and an LCP of 2.9 s, flagged in orange. The address and the site previews are covered."
      },
      "caption": {
       "es": "Lighthouse en celular: 95 de rendimiento, LCP 2,9 s.",
       "en": "Lighthouse on mobile: 95 in performance, LCP 2.9 s."
      }
     },
     {
      "src": "estetica-03-lighthouse-escritorio.webp",
      "w": 1200,
      "h": 905,
      "alt": {
       "es": "Informe de PageSpeed Insights en escritorio: 100 de rendimiento y todas las métricas en verde. La dirección y las vistas del sitio están tapadas.",
       "en": "PageSpeed Insights report on desktop: 100 in performance and all metrics in green. The address and the site previews are covered."
      },
      "caption": {
       "es": "Lighthouse en escritorio: 100 de rendimiento.",
       "en": "Lighthouse on desktop: 100 in performance."
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Fogg, B. J. (2002).",
       "en": "Fogg, B. J. (2002)."
      },
      "title": {
       "es": "Stanford guidelines for web credibility",
       "en": "Stanford guidelines for web credibility"
      },
      "post": {
       "es": ". Stanford Persuasive Technology Lab.",
       "en": ". Stanford Persuasive Technology Lab."
      },
      "url": "https://credibility.stanford.edu/guidelines/"
     },
     {
      "pre": {
       "es": "Google. (2026, 2 de noviembre).",
       "en": "Google. (2026, November 2)."
      },
      "title": {
       "es": "Informe de PageSpeed Insights del sitio auditado",
       "en": "PageSpeed Insights report for the audited site"
      },
      "post": {
       "es": " [Informe Lighthouse 13.6; dirección omitida para preservar el anonimato].",
       "en": " [Lighthouse 13.6 report; address omitted to preserve anonymity]."
      }
     },
     {
      "pre": {
       "es": "McQuade, B. (2025, 7 de mayo).",
       "en": "McQuade, B. (2025, May 7)."
      },
      "title": {
       "es": "How the Core Web Vitals metrics thresholds were defined",
       "en": "How the Core Web Vitals metrics thresholds were defined"
      },
      "post": {
       "es": ". web.dev.",
       "en": ". web.dev."
      },
      "url": "https://web.dev/articles/defining-core-web-vitals-thresholds"
     },
     {
      "pre": {
       "es": "Nielsen, J. (2020).",
       "en": "Nielsen, J. (2020)."
      },
      "title": {
       "es": "10 usability heuristics for user interface design",
       "en": "10 usability heuristics for user interface design"
      },
      "post": {
       "es": ". Nielsen Norman Group.",
       "en": ". Nielsen Norman Group."
      },
      "url": "https://www.nngroup.com/articles/ten-usability-heuristics/"
     },
     {
      "pre": {
       "es": "W3C. (2023).",
       "en": "W3C. (2023)."
      },
      "title": {
       "es": "Web Content Accessibility Guidelines (WCAG) 2.2",
       "en": "Web Content Accessibility Guidelines (WCAG) 2.2"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.w3.org/TR/WCAG22/"
     }
    ]
   }
  ]
 },
 "auditoria-turnos": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Auditoría UX/UI de un portal de turnos",
   "en": "UX/UI audit of an appointment portal"
  },
  "subtitle": {
   "es": "Portal del paciente de un centro de diagnóstico: evaluación heurística, accesibilidad WCAG 2.2 y medición con Lighthouse del flujo para sacar un turno. Caso conceptual, no afiliado.",
   "en": "A diagnostic center’s patient portal: heuristic evaluation, WCAG 2.2 accessibility and Lighthouse measurement of the booking flow. A conceptual case, not affiliated."
  },
  "chips": {
   "es": [
    "Evaluación heurística",
    "WCAG 2.2 AA",
    "Lighthouse",
    "Recorrido cognitivo"
   ],
   "en": [
    "Heuristic evaluation",
    "WCAG 2.2 AA",
    "Lighthouse",
    "Cognitive walkthrough"
   ]
  },
  "summary": {
   "problem": {
    "es": "Un portal de turnos veloz, con 99 en rendimiento, que le pide al paciente más esfuerzo del necesario y deja afuera a personas con baja visión o que usan lector de pantalla.",
    "en": "A fast booking portal, scoring 99 on performance, that asks patients for more effort than needed and shuts out people with low vision or using screen readers."
   },
   "solution": {
    "es": "Evaluación heurística, revisión WCAG 2.2 AA y Lighthouse sobre las ocho pantallas del flujo, con cada hallazgo unido a una recomendación priorizada.",
    "en": "Heuristic evaluation, a WCAG 2.2 AA review and Lighthouse across the eight screens of the flow, with each finding tied to a prioritised recommendation."
   },
   "results": [
    {
     "v": "13",
     "l": {
      "es": "hallazgos priorizados por impacto y esfuerzo: 10 de usabilidad y 3 de accesibilidad",
      "en": "findings prioritised by impact and effort: 10 usability, 3 accessibility"
     }
    },
    {
     "v": "3",
     "l": {
      "es": "fallos de accesibilidad que se resuelven con cambios acotados",
      "en": "accessibility failures fixable with small changes"
     }
    },
    {
     "t": {
      "es": "Metas medibles para el rediseño: éxito en la selección, accesibilidad de 95 o más y SUS por encima de 80.",
      "en": "Measurable goals for the redesign: selection success, accessibility of 95 or more and SUS above 80."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Auditoría UX/UI, accesibilidad y QA: evaluación, priorización y propuesta de mejoras",
    "en": "UX/UI audit, accessibility and QA: evaluation, prioritisation and improvement proposal"
   },
   "timeline": {
    "es": "Octubre 2026",
    "en": "October 2026"
   },
   "context": {
    "es": "Portal de autogestión de turnos de un centro de diagnóstico. Caso conceptual, con datos de una persona ficticia",
    "en": "Self-service booking portal of a diagnostic centre. A conceptual case, with data from a fictional person"
   },
   "stack": [
    "PageSpeed Insights",
    "Lighthouse 13.5.0"
   ],
   "methods": [
    "Nielsen",
    "WCAG 2.2 AA",
    "Cognitive walkthrough"
   ]
  },
  "links": [],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El hallazgo principal",
     "en": "The key finding"
    },
    "body": {
     "es": "El cuello de botella de este producto es la capa de experiencia y de accesibilidad, no la de performance.",
     "en": "This product’s bottleneck is the experience and accessibility layer, not performance."
    },
    "p": [
     {
      "es": "El portal es técnicamente sólido y veloz, y aprueba las métricas de experiencia de usuarios reales. Pero le pide al usuario más esfuerzo cognitivo del necesario, sobre todo al elegir el estudio, y deja afuera a personas con baja visión o que usan lectores de pantalla.",
      "en": "The portal is technically solid and fast, and it passes the real-user experience metrics. But it asks users for more cognitive effort than needed, above all when choosing the study, and it leaves out people with low vision or who rely on screen readers."
     }
    ],
    "toc": {
     "es": "El hallazgo y el proyecto",
     "en": "The finding and the project"
    }
   },
   {
    "t": "kv",
    "join": true,
    "h": {
     "es": "El proyecto",
     "en": "The project"
    },
    "items": [
     {
      "k": {
       "es": "Qué es",
       "en": "What it is"
      },
      "v": {
       "es": "Una auditoría UX/UI y de accesibilidad del portal donde los pacientes sacan turno sin llamar por teléfono.",
       "en": "A UX/UI and accessibility audit of the portal where patients book appointments without calling."
      }
     },
     {
      "k": {
       "es": "Alcance",
       "en": "Scope"
      },
      "v": {
       "es": "El flujo completo de autogestión (camino feliz), ocho pantallas, en escritorio. La versión mobile es equivalente sin los márgenes laterales, así que los hallazgos aplican a ambas.",
       "en": "The full self-service flow (happy path), eight screens, on desktop. The mobile version is equivalent without the side margins, so the findings apply to both."
      }
     },
     {
      "k": {
       "es": "Escala de severidad",
       "en": "Severity scale"
      },
      "v": {
       "es": "Alta: bloquea o frustra la tarea para muchos usuarios. Media: genera fricción o reproceso. Baja: mejora de pulido.",
       "en": "High: blocks or frustrates the task for many users. Medium: causes friction or rework. Low: polish."
      }
     },
     {
      "k": {
       "es": "Privacidad",
       "en": "Privacy"
      },
      "v": {
       "es": "Las capturas usan una persona ficticia, y los nombres de profesionales están tapados. No se reproduce la marca.",
       "en": "The screenshots use a fictional person, and professionals’ names are covered. The brand is not reproduced."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Métodos",
     "en": "Methods"
    },
    "note": {
     "es": "La auditoría se basa en capturas del flujo y en el reporte automatizado. No incluye testing con usuarios, analítica ni acceso al backend: los hallazgos de usabilidad son hipótesis fundamentadas que la fase de validación tiene que confirmar.",
     "en": "The audit is based on screenshots of the flow and the automated report. It does not include user testing, analytics or backend access: the usability findings are grounded hypotheses for the validation phase to confirm."
    },
    "items": [
     {
      "lead": {
       "es": "Evaluación heurística",
       "en": "Heuristic evaluation"
      },
      "body": {
       "es": "Los diez principios de usabilidad de Nielsen.",
       "en": "Nielsen’s ten usability heuristics."
      }
     },
     {
      "lead": {
       "es": "Revisión de accesibilidad",
       "en": "Accessibility review"
      },
      "body": {
       "es": "Contra WCAG 2.2, nivel AA.",
       "en": "Against WCAG 2.2, level AA."
      }
     },
     {
      "lead": {
       "es": "Auditoría automatizada",
       "en": "Automated audit"
      },
      "body": {
       "es": "Lighthouse 13.5.0 a través de PageSpeed Insights.",
       "en": "Lighthouse 13.5.0 through PageSpeed Insights."
      }
     },
     {
      "lead": {
       "es": "Recorrido cognitivo",
       "en": "Cognitive walkthrough"
      },
      "body": {
       "es": "El camino feliz, del documento a la confirmación del turno.",
       "en": "The happy path, from the ID number to the booking confirmation."
      }
     }
    ],
    "toc": {
     "es": "Métodos y recorrido",
     "en": "Methods and journey"
    }
   },
   {
    "t": "taskflow",
    "join": true,
    "h": {
     "es": "El recorrido, ocho pasos",
     "en": "The journey, eight steps"
    },
    "steps": {
     "es": [
      "Documento",
      "Verificación",
      "Código",
      "Identidad verificada",
      "Selección de estudios",
      "Cuestionario previo",
      "Elección de turno",
      "Confirmación"
     ],
     "en": [
      "ID number",
      "Verification",
      "Code",
      "Identity verified",
      "Study selection",
      "Pre-visit questions",
      "Slot selection",
      "Confirmation"
     ]
    }
   },
   {
    "t": "kv",
    "h": {
     "es": "Medición automatizada",
     "en": "Automated measurement"
    },
    "note": {
     "es": "Lighthouse 13.5.0, escritorio, 4 de octubre de 2026.",
     "en": "Lighthouse 13.5.0, desktop, 4 October 2026."
    },
    "items": [
     {
      "k": {
       "es": "Rendimiento",
       "en": "Performance"
      },
      "v": {
       "es": "99, excelente",
       "en": "99, excellent"
      }
     },
     {
      "k": {
       "es": "Prácticas recomendadas",
       "en": "Best practices"
      },
      "v": {
       "es": "100, excelente",
       "en": "100, excellent"
      }
     },
     {
      "k": {
       "es": "Accesibilidad",
       "en": "Accessibility"
      },
      "v": {
       "es": "80, a mejorar",
       "en": "80, needs work"
      }
     },
     {
      "k": {
       "es": "SEO",
       "en": "SEO"
      },
      "v": {
       "es": "82, a mejorar",
       "en": "82, needs work"
      }
     },
     {
      "k": {
       "es": "Navegación con agentes (experimental)",
       "en": "Agentic browsing (experimental)"
      },
      "v": {
       "es": "1 de 4, a mejorar",
       "en": "1 of 4, needs work"
      }
     }
    ],
    "toc": {
     "es": "Medición de laboratorio y de campo",
     "en": "Lab and field measurement"
    }
   },
   {
    "t": "kv",
    "join": true,
    "h": {
     "es": "Core Web Vitals de campo",
     "en": "Field Core Web Vitals"
    },
    "note": {
     "es": "Usuarios reales (CrUX), últimos 28 días: aprobada.",
     "en": "Real users (CrUX), last 28 days: passed."
    },
    "items": [
     {
      "k": {
       "es": "LCP",
       "en": "LCP"
      },
      "v": {
       "es": "0,9 s, bueno",
       "en": "0.9 s, good"
      }
     },
     {
      "k": {
       "es": "INP",
       "en": "INP"
      },
      "v": {
       "es": "125 ms, bueno",
       "en": "125 ms, good"
      }
     },
     {
      "k": {
       "es": "CLS",
       "en": "CLS"
      },
      "v": {
       "es": "0,03, bueno",
       "en": "0.03, good"
      }
     },
     {
      "k": {
       "es": "FCP",
       "en": "FCP"
      },
      "v": {
       "es": "0,9 s, bueno",
       "en": "0.9 s, good"
      }
     },
     {
      "k": {
       "es": "TTFB",
       "en": "TTFB"
      },
      "v": {
       "es": "0,3 s, bueno",
       "en": "0.3 s, good"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Lo que dicen los datos",
     "en": "What the data says"
    },
    "body": {
     "es": "No hay trabajo pendiente del lado de la velocidad: la única oportunidad de rendimiento es un tiempo de cacheo corto, de impacto menor. El margen de mejora está íntegramente en la experiencia y la accesibilidad.",
     "en": "There is no pending work on speed: the only performance opportunity is a short cache lifetime, with minor impact. The room for improvement lies entirely in experience and accessibility."
    }
   },
   {
    "t": "phase",
    "n": "01",
    "id": "usabilidad",
    "mode": {
     "es": "heurísticas de Nielsen",
     "en": "Nielsen heuristics"
    },
    "name": {
     "es": "Usabilidad",
     "en": "Usability"
    },
    "q": {
     "es": "Dónde el flujo le pide al paciente más esfuerzo del necesario.",
     "en": "Where the flow asks the patient for more effort than needed."
    }
   },
   {
    "t": "findings",
    "h": {
     "es": "Hallazgos de usabilidad",
     "en": "Usability findings"
    },
    "note": {
     "es": "Diez hallazgos, ordenados por severidad, cada uno con la parte de la pantalla a la que se refiere. Las capturas se amplían con un clic.",
     "en": "Ten findings, by severity, each with the part of the screen it refers to. Click a screenshot to enlarge it."
    },
    "labels": {
     "sev": {
      "es": "Severidad",
      "en": "Severity"
     },
     "fixed": {
      "es": "Corregido",
      "en": "Fixed"
     },
     "recorded": {
      "es": "Registrado",
      "en": "Recorded"
     },
     "ev": {
      "es": "Qué pasa",
      "en": "What happens"
     },
     "res": {
      "es": "Propuesta",
      "en": "Proposal"
     }
    },
    "items": [
     {
      "id": "H1",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "Una lista plana de más de 40 estudios",
       "en": "A flat list of more than 40 studies"
      },
      "heur": {
       "es": "Reconocer antes que recordar | Estética y diseño minimalista",
       "en": "Recognition rather than recall | Aesthetic and minimalist design"
      },
      "ev": {
       "es": "Al abrir una categoría en \"Buscar por servicio\" se despliega una lista plana de más de 40 ítems, sin búsqueda interna ni agrupación.",
       "en": "Opening a category in \"Search by service\" unfolds a flat list of more than 40 items, with no inner search or grouping."
      },
      "res": {
       "es": "Un único punto de entrada con buscador predictivo como camino principal, y categorías colapsadas por defecto con búsqueda interna.",
       "en": "A single entry point with predictive search as the main path, and categories collapsed by default with an inner search."
      },
      "img": {
       "src": "turnos-h1.png",
       "w": 560,
       "h": 630,
       "alt": {
        "es": "La categoría Consulta Médica abierta: estudios uno debajo del otro, cada uno con un botón de agregar, sin buscador ni agrupación.",
        "en": "The open General consultation category: studies one below the other, each with an add button, with no search or grouping."
       }
      }
     },
     {
      "id": "H2",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "El estudio elegido queda fuera de vista",
       "en": "The chosen study falls out of view"
      },
      "heur": {
       "es": "Visibilidad del estado del sistema",
       "en": "Visibility of system status"
      },
      "ev": {
       "es": "El estudio seleccionado, con sus subopciones, aparece en una tarjeta al final, debajo de la lista larga. El usuario pierde de vista qué eligió.",
       "en": "The selected study and its sub-options appear in a card at the end, below the long list. Users lose sight of what they chose."
      },
      "res": {
       "es": "Una bandeja de estudios seleccionados fija y siempre visible.",
       "en": "A fixed, always-visible tray of selected studies."
      },
      "img": {
       "src": "turnos-h2.png",
       "w": 560,
       "h": 590,
       "alt": {
        "es": "El final de la pantalla: después de las últimas categorías y del aviso del call center aparece recién la tarjeta Estudios seleccionados, con Consulta Ginecología y sus cuatro subopciones.",
        "en": "The end of the screen: only after the last categories and the call-centre notice does the Selected studies card appear, with the gynaecology consultation and its four sub-options."
       }
      }
     },
     {
      "id": "H3",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "Tres caminos sin jerarquía en la misma pantalla",
       "en": "Three paths with no hierarchy on one screen"
      },
      "heur": {
       "es": "Consistencia y estándares | Diseño minimalista",
       "en": "Consistency and standards | Minimalist design"
      },
      "ev": {
       "es": "Subir la orden, buscar por texto y navegar por servicio compiten en la misma pantalla. No queda claro cuál es el camino principal.",
       "en": "Uploading the prescription, searching by text and browsing by service compete on the same screen. The main path is unclear."
      },
      "res": {
       "es": "El buscador como camino principal; subir la orden y navegar por servicio, como alternativas secundarias.",
       "en": "Search as the main path; uploading the prescription and browsing by service as secondary options."
      },
      "img": {
       "src": "turnos-h3.png",
       "w": 560,
       "h": 318,
       "alt": {
        "es": "Selección de estudios: adjuntar la orden médica, el buscador de estudios y el botón Buscar por servicio, apilados con el mismo peso.",
        "en": "Study selection: attaching the prescription, the study search and the Search by service button, stacked with the same weight."
       }
      }
     },
     {
      "id": "H4",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "Si el estudio no aparece, el flujo termina en WhatsApp",
       "en": "If the study is missing, the flow ends in WhatsApp"
      },
      "heur": {
       "es": "Control y libertad del usuario | Flexibilidad y eficiencia",
       "en": "User control and freedom | Flexibility and efficiency"
      },
      "ev": {
       "es": "El único camino es contactar al call center por WhatsApp. El usuario sale de la autogestión y el funnel pierde conversión.",
       "en": "The only way forward is contacting the call centre on WhatsApp. Users leave self-service and the funnel loses conversion."
      },
      "res": {
       "es": "Antes de derivar, ofrecer sugerencias y la opción de subir la orden para que el equipo la interprete, sin salir de la autogestión.",
       "en": "Before referring out, offer suggestions and the option to upload the prescription for the team to interpret, without leaving self-service."
      },
      "img": {
       "src": "turnos-h4.png",
       "w": 1144,
       "h": 323,
       "alt": {
        "es": "A la izquierda, el aviso al pie de la lista: si no encuentra el estudio, contacte al call center. A la derecha, la pantalla a la que lleva: un número de WhatsApp y el botón Volver a búsqueda.",
        "en": "Left, the notice at the bottom of the list: if you cannot find the study, contact the call centre. Right, the screen it leads to: a WhatsApp number and a Back to search button."
       }
      }
     },
     {
      "id": "H5",
      "sev": {
       "es": "Media",
       "en": "Medium"
      },
      "title": {
       "es": "Un calendario sin leyenda",
       "en": "A calendar with no legend"
      },
      "heur": {
       "es": "Visibilidad del estado | Reconocer antes que recordar",
       "en": "Visibility of status | Recognition rather than recall"
      },
      "ev": {
       "es": "Los días habilitados aparecen dispersos, sin explicar por qué el resto está deshabilitado, y no hay un atajo al próximo turno disponible.",
       "en": "Available days appear scattered, with no explanation of why the rest are disabled, and no shortcut to the next available slot."
      },
      "res": {
       "es": "Leyenda de disponibilidad y un atajo a \"próximo turno disponible\".",
       "en": "An availability legend and a \"next available slot\" shortcut."
      },
      "img": {
       "src": "turnos-h5.png",
       "w": 560,
       "h": 550,
       "alt": {
        "es": "Calendario de octubre 2026 de una sede: días habilitados salteados entre días grisados, sin leyenda que explique la diferencia.",
        "en": "October 2026 calendar for one location: available days scattered among greyed-out days, with no legend explaining the difference."
       }
      }
     },
     {
      "id": "H6",
      "sev": {
       "es": "Media",
       "en": "Medium"
      },
      "title": {
       "es": "Horarios sin agrupar e información desigual",
       "en": "Ungrouped times and uneven information"
      },
      "heur": {
       "es": "Consistencia y estándares",
       "en": "Consistency and standards"
      },
      "ev": {
       "es": "Los horarios se listan en una sola columna sin agrupar por franja. La búsqueda por sede no muestra el profesional y la búsqueda por profesional sí muestra la sede.",
       "en": "Times are listed in a single column with no grouping by time of day. Searching by location hides the professional, while searching by professional shows the location."
      },
      "res": {
       "es": "Horarios agrupados por franja y la misma información en las dos búsquedas.",
       "en": "Times grouped by time of day and the same information in both searches."
      },
      "img": {
       "src": "turnos-h6.png",
       "w": 1144,
       "h": 372,
       "alt": {
        "es": "A la izquierda, horarios de la búsqueda por sede en una sola columna, sin profesional. A la derecha, el horario de la búsqueda por profesional, que sí indica la sede.",
        "en": "Left, times from the search by location in a single column, with no professional. Right, the time from the search by professional, which does show the location."
       }
      }
     },
     {
      "id": "H7",
      "sev": {
       "es": "Media",
       "en": "Medium"
      },
      "title": {
       "es": "\"Consultá en recepción\" como respuesta",
       "en": "\"Ask at reception\" as the answer"
      },
      "heur": {
       "es": "Ayuda y documentación",
       "en": "Help and documentation"
      },
      "ev": {
       "es": "\"Documentación requerida: consultá en recepción qué documentación presentar\" traslada la carga de informarse al usuario, sin resolver la duda.",
       "en": "\"Required documents: ask at reception which documents to bring\" shifts the burden to the user without answering the question."
      },
      "res": {
       "es": "El detalle concreto de la documentación según el estudio.",
       "en": "The specific documents required for each study."
      },
      "img": {
       "src": "turnos-h7.png",
       "w": 545,
       "h": 320,
       "alt": {
        "es": "Turno agendado: tarjeta Indicaciones previas y, debajo, Documentación requerida con el texto Consultá en recepción qué documentación presentar.",
        "en": "Appointment booked: the Pre-visit instructions card and, below, Required documents with the text Ask at reception which documents to bring."
       }
      }
     },
     {
      "id": "H8",
      "sev": {
       "es": "Media",
       "en": "Medium"
      },
      "title": {
       "es": "Una respuesta sin consecuencia visible",
       "en": "An answer with no visible consequence"
      },
      "heur": {
       "es": "Visibilidad del estado | Prevención de errores",
       "en": "Visibility of status | Error prevention"
      },
      "ev": {
       "es": "En el cuestionario previo, responder \"Sí\" a \"¿Tiene estudios anteriores?\" no muestra un paso siguiente lógico, como subirlos.",
       "en": "In the pre-visit questions, answering \"Yes\" to \"Do you have previous studies?\" shows no logical next step, such as uploading them."
      },
      "res": {
       "es": "Darle a esa rama una consecuencia visible, por ejemplo la opción de adjuntar los estudios.",
       "en": "Give that branch a visible consequence, for example the option to attach the studies."
      },
      "img": {
       "src": "turnos-h8.png",
       "w": 560,
       "h": 258,
       "alt": {
        "es": "Cuestionario previo: la pregunta sobre estudios anteriores respondida con Sí, y solo los botones Volver y Continuar.",
        "en": "Pre-visit questions: the previous-studies question answered Yes, and only the Back and Continue buttons."
       }
      }
     },
     {
      "id": "H9",
      "sev": {
       "es": "Baja",
       "en": "Low"
      },
      "title": {
       "es": "\"Volver al inicio\" descarta el progreso",
       "en": "\"Back to start\" discards progress"
      },
      "heur": {
       "es": "Prevención de errores",
       "en": "Error prevention"
      },
      "ev": {
       "es": "En la pantalla del código, \"Volver al inicio\" descarta el progreso sin advertir al usuario.",
       "en": "On the code screen, \"Back to start\" discards progress without warning the user."
      },
      "res": {
       "es": "Una advertencia de pérdida de progreso.",
       "en": "A warning before progress is lost."
      },
      "img": {
       "src": "turnos-h9.png",
       "w": 560,
       "h": 323,
       "alt": {
        "es": "Pantalla de verificación: seis casillas para el código, el reenvío en cuenta regresiva y el enlace Volver al inicio.",
        "en": "Verification screen: six boxes for the code, a countdown to resend it and the Back to start link."
       }
      }
     },
     {
      "id": "H10",
      "sev": {
       "es": "Baja",
       "en": "Low"
      },
      "title": {
       "es": "Ocho pasos sin indicador de progreso",
       "en": "Eight steps with no progress indicator"
      },
      "heur": {
       "es": "Visibilidad del estado del sistema",
       "en": "Visibility of system status"
      },
      "ev": {
       "es": "El flujo no muestra cuántos pasos faltan.",
       "en": "The flow does not show how many steps are left."
      },
      "res": {
       "es": "Un indicador de progreso del flujo.",
       "en": "A progress indicator for the flow."
      },
      "img": {
       "src": "turnos-h10.png",
       "w": 560,
       "h": 238,
       "alt": {
        "es": "Encabezado de Seleccionar turno: título y estudio elegido, sin ninguna indicación del paso actual ni de cuántos faltan.",
        "en": "Select a slot header: title and chosen study, with no sign of the current step or how many are left."
       }
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "La pantalla completa de selección de estudios",
     "en": "The full study selection screen"
    },
    "note": {
     "es": "Para dimensionar H1 y H2: la pantalla entera al abrir Consulta Médica, partida en tres columnas. El estudio elegido aparece recién al final.",
     "en": "To size up H1 and H2: the whole screen after opening General consultation, split into three columns. The chosen study only appears at the very end."
    },
    "single": true,
    "images": [
     {
      "src": "turnos-07-lista-larga.png",
      "w": 2096,
      "h": 1224,
      "alt": {
       "es": "La categoría Consulta Médica abierta muestra más de 40 estudios en una lista plana; al pie, después de todas las categorías, la tarjeta de estudios seleccionados con Consulta Ginecología y sus subopciones.",
       "en": "The open General consultation category shows more than 40 studies in a flat list; at the bottom, after every category, the selected-studies card with the gynaecology consultation and its sub-options."
      }
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Fortalezas detectadas",
     "en": "Strengths found"
    },
    "cols": 3,
    "items": [
     {
      "img": {
       "src": "turnos-02-verificacion.png",
       "w": 680,
       "h": 425,
       "alt": {
        "es": "Elección del canal de verificación, Email o SMS, con el email enmascarado de la persona ficticia.",
        "en": "Choosing the verification channel, Email or SMS, with the fictional person’s email masked."
       }
      },
      "title": {
       "es": "Email enmascarado",
       "en": "Masked email"
      },
      "body": {
       "es": "Al enviar el código, el email se muestra enmascarado: una buena práctica de privacidad.",
       "en": "When the code is sent, the email is shown masked: a good privacy practice."
      }
     },
     {
      "img": {
       "src": "turnos-04-identidad.png",
       "w": 680,
       "h": 416,
       "alt": {
        "es": "Identidad verificada: revisión de nombre, documento, email, teléfono, dirección y obra social de la persona ficticia antes de continuar.",
        "en": "Identity verified: review of the fictional person’s name, ID, email, phone, address and health insurance before continuing."
       }
      },
      "title": {
       "es": "Revisión de identidad",
       "en": "Identity review"
      },
      "body": {
       "es": "Revisar los datos antes de continuar previene errores.",
       "en": "Reviewing the details before continuing prevents errors."
      }
     },
     {
      "img": {
       "src": "turnos-12-confirmar.png",
       "w": 680,
       "h": 425,
       "alt": {
        "es": "Confirmar turno: datos del paciente y del turno con estudio, sede, fecha, hora y duración, más los botones Modificar y Confirmar turno. El nombre del profesional está tapado.",
        "en": "Confirm appointment: patient and booking details with study, location, date, time and length, plus the Modify and Confirm buttons. The professional’s name is covered."
       }
      },
      "title": {
       "es": "Confirmación clara",
       "en": "Clear confirmation"
      },
      "body": {
       "es": "El resumen del turno se lee de un vistazo antes de confirmar.",
       "en": "The booking summary reads at a glance before confirming."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "02",
    "id": "accesibilidad",
    "mode": {
     "es": "WCAG 2.2 AA",
     "en": "WCAG 2.2 AA"
    },
    "name": {
     "es": "Accesibilidad",
     "en": "Accessibility"
    },
    "q": {
     "es": "Los tres fallos que explican el 80 de Lighthouse, todos accionables.",
     "en": "The three failures behind the Lighthouse 80, all actionable."
    }
   },
   {
    "t": "findings",
    "h": {
     "es": "Hallazgos de accesibilidad",
     "en": "Accessibility findings"
    },
    "labels": {
     "sev": {
      "es": "Severidad",
      "en": "Severity"
     },
     "fixed": {
      "es": "Corregido",
      "en": "Fixed"
     },
     "recorded": {
      "es": "Registrado",
      "en": "Recorded"
     },
     "ev": {
      "es": "Qué pasa",
      "en": "What happens"
     },
     "res": {
      "es": "Propuesta",
      "en": "Proposal"
     }
    },
    "items": [
     {
      "id": "A1",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "Gris claro sobre blanco",
       "en": "Light grey on white"
      },
      "heur": {
       "es": "WCAG 1.4.3 Contraste (mínimo)",
       "en": "WCAG 1.4.3 Contrast (Minimum)"
      },
      "ev": {
       "es": "Textos secundarios con contraste insuficiente, como el subtítulo \"Ingrese su documento para comenzar\" y el texto y botón de la tarjeta \"Estudios que se hacen sin turno\". Es el gris claro sobre blanco presente en casi todas las pantallas.",
       "en": "Secondary text with insufficient contrast, such as the subtitle \"Enter your ID to start\" and the text and button of the \"Studies without an appointment\" card. It is the light grey on white found on almost every screen."
      },
      "res": {
       "es": "Subir el contraste de los textos secundarios a AA.",
       "en": "Raise secondary text contrast to AA."
      },
      "img": {
       "src": "turnos-a1.png",
       "w": 560,
       "h": 200,
       "alt": {
        "es": "Arriba, el título Sacar turno con el subtítulo en gris claro; abajo, la tarjeta Estudios que se hacen sin turno con su descripción en gris sobre blanco.",
        "en": "Top, the Book an appointment title with its light grey subtitle; bottom, the Studies without an appointment card with its grey description on white."
       }
      }
     },
     {
      "id": "A2",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "Campos sin etiqueta",
       "en": "Unlabelled fields"
      },
      "heur": {
       "es": "WCAG 1.3.1 | 3.3.2 | 4.1.2",
       "en": "WCAG 1.3.1 | 3.3.2 | 4.1.2"
      },
      "ev": {
       "es": "El selector de documento y otros campos dependen del placeholder en lugar de un <label>, lo que los vuelve ambiguos para lectores de pantalla.",
       "en": "The ID selector and other fields rely on the placeholder instead of a <label>, which makes them ambiguous for screen readers."
      },
      "res": {
       "es": "Asociar un <label> a cada campo. Mejora la accesibilidad y la claridad para todos.",
       "en": "Associate a <label> with every field. It improves accessibility and clarity for everyone."
      },
      "img": {
       "src": "turnos-a2.png",
       "w": 560,
       "h": 96,
       "alt": {
        "es": "El campo Documento: un selector con DNI y un campo con el ejemplo Ej: 33444555 escrito como placeholder.",
        "en": "The ID field: a selector set to DNI and an input with the example 33444555 written as a placeholder."
       }
      }
     },
     {
      "id": "A3",
      "sev": {
       "es": "Alta",
       "en": "High"
      },
      "title": {
       "es": "El zoom está deshabilitado",
       "en": "Zoom is disabled"
      },
      "heur": {
       "es": "WCAG 1.4.4 Cambio de tamaño del texto",
       "en": "WCAG 1.4.4 Resize Text"
      },
      "ev": {
       "es": "La metaetiqueta viewport incluye maximum-scale=1.0 y user-scalable=no, lo que impide ampliar la pantalla a personas con baja visión.",
       "en": "The viewport meta tag includes maximum-scale=1.0 and user-scalable=no, which stops people with low vision from zooming in."
      },
      "res": {
       "es": "Quitar maximum-scale y user-scalable=no. Es una corrección de una sola línea con alto impacto.",
       "en": "Remove maximum-scale and user-scalable=no. A one-line fix with high impact."
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Navegación con agentes (1 de 4)",
     "en": "Agentic browsing (1 of 4)"
    },
    "body": {
     "es": "El mismo problema de etiquetas (A2) deja el árbol de accesibilidad mal formado, y eso también afecta a la navegación por agentes de IA. Se suman la falta de un llms.txt válido y un ai-catalog.json mal formado. Como es una categoría experimental de Lighthouse, queda registrada como nota a futuro.",
     "en": "The same labelling problem (A2) leaves the accessibility tree malformed, which also affects browsing by AI agents. Add to that the lack of a valid llms.txt and a malformed ai-catalog.json. As an experimental Lighthouse category, it is recorded as a note for the future."
    }
   },
   {
    "t": "phase",
    "n": "03",
    "id": "qa",
    "mode": {
     "es": "notas técnicas",
     "en": "technical notes"
    },
    "name": {
     "es": "QA técnico",
     "en": "Technical QA"
    },
    "q": {
     "es": "Lo que no afecta los puntajes pero conviene registrar.",
     "en": "What does not affect the scores but is worth recording."
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Notas técnicas y de QA",
     "en": "Technical and QA notes"
    },
    "note": {
     "es": "La interfaz está construida con Mantine, una biblioteca de componentes de React: un dato útil para la fase de rediseño.",
     "en": "The interface is built with Mantine, a React component library: useful to know for the redesign phase."
    },
    "cols": 3,
    "items": [
     {
      "title": {
       "es": "Seguridad",
       "en": "Security"
      },
      "tag": {
       "es": "Q1",
       "en": "Q1"
      },
      "body": {
       "es": "Faltan encabezados de seguridad recomendados: CSP, HSTS, COOP y X-Frame-Options. No afectan el puntaje de prácticas recomendadas, pero son hallazgos legítimos de QA.",
       "en": "Recommended security headers are missing: CSP, HSTS, COOP and X-Frame-Options. They do not affect the best-practices score, but they are legitimate QA findings."
      }
     },
     {
      "title": {
       "es": "SEO",
       "en": "SEO"
      },
      "tag": {
       "es": "Q2",
       "en": "Q2"
      },
      "body": {
       "es": "El 82 se explica por una SPA con el contenido renderizado en el cliente: el rastreador recibe un contenedor vacío hasta ejecutar el JavaScript. Es esperable en una app detrás de verificación de identidad.",
       "en": "The 82 comes from a client-rendered SPA: the crawler receives an empty container until the JavaScript runs. It is expected in an app behind identity verification."
      }
     },
     {
      "title": {
       "es": "Rendimiento",
       "en": "Performance"
      },
      "tag": {
       "es": "Q3",
       "en": "Q3"
      },
      "body": {
       "es": "Tiempo de cacheo corto en algunos recursos, con un ahorro estimado de 388 KiB. Una oportunidad menor.",
       "en": "A short cache lifetime on some resources, with an estimated saving of 388 KiB. A minor opportunity."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "04",
    "id": "oportunidades",
    "mode": {
     "es": "priorización",
     "en": "prioritisation"
    },
    "name": {
     "es": "Oportunidades de mejora",
     "en": "Improvement opportunities"
    },
    "q": {
     "es": "Cada recomendación, con los hallazgos que resuelve.",
     "en": "Each recommendation, with the findings it solves."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Prioridad 1 | Impacto alto, esfuerzo acotado",
     "en": "Priority 1 | High impact, limited effort"
    },
    "items": [
     {
      "lead": {
       "es": "Rediseñar la selección de estudios (H1, H2 y H3)",
       "en": "Redesign study selection (H1, H2 and H3)"
      },
      "body": {
       "es": "Un único punto de entrada con buscador predictivo, categorías colapsadas con búsqueda interna y una bandeja de seleccionados siempre visible.",
       "en": "A single entry point with predictive search, collapsed categories with inner search and an always-visible selection tray."
      }
     },
     {
      "lead": {
       "es": "Corregir contraste y etiquetas (A1 y A2)",
       "en": "Fix contrast and labels (A1 and A2)"
      },
      "body": {
       "es": "Textos secundarios en AA y un <label> en cada campo.",
       "en": "Secondary text at AA and a <label> on every field."
      }
     },
     {
      "lead": {
       "es": "Habilitar el zoom (A3)",
       "en": "Enable zoom (A3)"
      },
      "body": {
       "es": "Quitar maximum-scale y user-scalable=no del viewport. Una línea.",
       "en": "Remove maximum-scale and user-scalable=no from the viewport. One line."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Prioridad 2 | Impacto medio",
     "en": "Priority 2 | Medium impact"
    },
    "items": [
     {
      "lead": {
       "es": "Mejorar la elección de turno (H5 y H6)",
       "en": "Improve slot selection (H5 and H6)"
      },
      "body": {
       "es": "Leyenda de disponibilidad, atajo al próximo turno, horarios por franja y la misma información en las dos búsquedas.",
       "en": "Availability legend, next-slot shortcut, times grouped by time of day and the same information in both searches."
      }
     },
     {
      "lead": {
       "es": "Resolver el estudio no encontrado dentro del flujo (H4)",
       "en": "Handle the missing study inside the flow (H4)"
      },
      "body": {
       "es": "Sugerencias y la opción de subir la orden antes de derivar a WhatsApp.",
       "en": "Suggestions and the option to upload the prescription before referring to WhatsApp."
      }
     },
     {
      "lead": {
       "es": "Clarificar documentación e indicaciones (H7 y H8)",
       "en": "Clarify documents and instructions (H7 and H8)"
      },
      "body": {
       "es": "El detalle concreto según el estudio, y una consecuencia visible para la rama de estudios anteriores.",
       "en": "The specific details for each study, and a visible consequence for the previous-studies branch."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Prioridad 3 | Pulido",
     "en": "Priority 3 | Polish"
    },
    "items": [
     {
      "lead": {
       "es": "Indicador de progreso (H10)",
       "en": "Progress indicator (H10)"
      },
      "body": {
       "es": "Para los ocho pasos del flujo.",
       "en": "For the eight steps of the flow."
      }
     },
     {
      "lead": {
       "es": "Advertencia de pérdida de progreso (H9)",
       "en": "Lost-progress warning (H9)"
      },
      "body": {
       "es": "Al volver al inicio desde la pantalla del código.",
       "en": "When going back to start from the code screen."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Cómo se va a medir el rediseño",
     "en": "How the redesign will be measured"
    },
    "items": {
     "es": [
      "Tasa de éxito en la selección del estudio por encima del 90 por ciento.",
      "Menos tiempo en la pantalla de selección de estudios.",
      "Menos derivaciones al call center desde la autogestión.",
      "Accesibilidad de 95 o más en Lighthouse y contraste AA en todos los textos.",
      "SUS por encima de 80 en testing moderado."
     ],
     "en": [
      "Study selection success rate above 90 per cent.",
      "Less time on the study selection screen.",
      "Fewer referrals to the call centre from self-service.",
      "Lighthouse accessibility of 95 or more and AA contrast on all text.",
      "SUS above 80 in moderated testing."
     ]
    },
    "foot": {
     "es": "Son objetivos para la fase de rediseño y testing, no resultados.",
     "en": "These are targets for the redesign and testing phase, not results."
    }
   }
  ],
  "outcome": {
   "h": {
    "es": "Resultados",
    "en": "Outcomes"
   },
   "body": {
    "es": "La auditoría mostró un desfasaje claro: un producto rápido, con 99 en rendimiento y Core Web Vitals aprobadas, que pierde en experiencia y en accesibilidad. Los trece hallazgos quedaron priorizados por impacto y esfuerzo, y cada uno mapeado a una recomendación concreta. Tres de ellos, el contraste, las etiquetas y el zoom, se resuelven con cambios acotados. Esta auditoría es la base de la propuesta de rediseño y de su validación con usuarios.",
    "en": "The audit showed a clear gap: a fast product, with 99 in performance and passing Core Web Vitals, that falls short on experience and accessibility. The thirteen findings were prioritised by impact and effort, and each one mapped to a concrete recommendation. Three of them, contrast, labels and zoom, are fixed with contained changes. This audit is the basis for the redesign proposal and its validation with users."
   }
  }
 },
 "imrsc-energia": {
  "cat": "cap",
  "touch": "it",
  "title": {
   "en": "The Argentine Electrical System",
   "es": "El Sistema Eléctrico Argentino"
  },
  "subtitle": {
   "en": "From generation to the end consumer",
   "es": "De la generación al consumidor final"
  },
  "summary": {
   "problem": {
    "es": "Para un estudiante de Informática, la energía que alimenta un equipo aparece en el enchufe. Lo que pasa antes está repartido entre centrales, redes, empresas y organismos, y la información técnica está dispersa en sitios oficiales, apuntes de ingeniería y videos.",
    "en": "For a computing student, the power that feeds a machine simply shows up at the socket. Everything before that is split across power plants, grids, companies and agencies, and the technical information is scattered across official sites, engineering notes and videos."
   },
   "solution": {
    "es": "Un recorrido interactivo de ocho módulos que parte de un mapa de la energía, de la generación al consumidor final, con el marco regulatorio, la fórmula clave, un glosario, recursos curados y el progreso de cada estudiante.",
    "en": "An eight-module interactive journey that starts from an energy map, from generation to the end consumer, with the regulatory framework, the key formula, a glossary, curated resources and each student's progress."
   },
   "results": [
    {
     "v": "8",
     "l": {
      "es": "módulos, del Mercado Eléctrico Mayorista al marco regulatorio",
      "en": "modules, from the Wholesale Electricity Market to the regulatory framework"
     }
    },
    {
     "v": "18 min",
     "l": {
      "es": "de lectura en total, de 2 a 4 minutos por módulo",
      "en": "of reading in total, 2 to 4 minutes per module"
     }
    },
    {
     "v": "12",
     "l": {
      "es": "recursos externos curados, con fuentes oficiales",
      "en": "curated external resources, including official sources"
     }
    },
    {
     "t": {
      "es": "Material propio de la Unidad 01 de IMRSC, la materia que dicto como titular desde 2024.",
      "en": "Self-authored material for Unit 01 of IMRSC, the subject I have led as lead teacher since 2024."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Content authoring and curation, instructional design and UX/UI, lead teacher of IMRSC since 2024",
    "es": "Autoría y curaduría de materiales, diseño instruccional y UX/UI, titular de IMRSC desde 2024"
   },
   "timeline": {
    "en": "2026",
    "es": "2026"
   },
   "context": {
    "en": "Unit 01, 7th year, Computer Science, Installation, Maintenance and Repair of Computer Systems (IMRSC), Instituto Leonardo Murialdo",
    "es": "Unidad 01, 7mo año de Informática, Instalación, Mantenimiento y Reparación de Sistemas Computacionales (IMRSC), Instituto Leonardo Murialdo"
   },
   "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "SVG",
    "Material 3 Expressive",
    "GitHub Pages"
   ],
   "methods": [
    "Advance organizer",
    "Progressive disclosure",
    "Content curation",
    "WCAG 2.2 AA",
    "Mobile first"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Open the material",
     "es": "Acceder al material"
    },
    "url": "https://lpedaci.github.io/IMRSC_U1-energia/"
   },
   {
    "label": {
     "es": "Repositorio en GitHub",
     "en": "GitHub repository"
    },
    "url": "https://github.com/lpedaci/IMRSC_U1-energia"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "es": "Material de la Unidad 01 de Instalación, Mantenimiento y Reparación de Sistemas Computacionales (IMRSC), la materia de 7mo año de Informática que dicto como titular desde 2024 en el Instituto Leonardo Murialdo. Es un guion didáctico interactivo publicado en GitHub Pages que recorre cómo llega la electricidad desde las centrales hasta el usuario final en Argentina: generación, transporte por el SADI, subestaciones y distribución, junto con el Mercado Eléctrico Mayorista, CAMMESA y el marco regulatorio de la Secretaría de Energía y el ENRE.",
      "en": "Material for Unit 01 of Installation, Maintenance and Repair of Computer Systems (IMRSC), the seventh-year Computer Science subject I have led as lead teacher since 2024 at Instituto Leonardo Murialdo. It is an interactive instructional script published on GitHub Pages that walks through how electricity travels from power plants to end users in Argentina: generation, transmission across the SADI grid, substations and distribution, along with the Wholesale Electricity Market, CAMMESA and the regulatory framework set by the Secretaría de Energía and ENRE."
     }
    ],
    "toc": {
     "es": "Contexto y desafío",
     "en": "Context and challenge"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "The challenge",
     "es": "El desafío"
    },
    "p": [
     {
      "es": "Antes de instalar o reparar un equipo, conviene entender de dónde viene la energía que lo alimenta y por qué llega como llega. El tema mezcla física, infraestructura, economía y normas. La información existe, pero está repartida entre sitios de organismos, apuntes universitarios, artículos técnicos y videos de calidad desigual. El objetivo fue ordenar ese material en un único recorrido, con un hilo que el estudiante pueda seguir de punta a punta.",
      "en": "Before installing or repairing a machine, it helps to understand where the energy that feeds it comes from and why it arrives the way it does. The topic mixes physics, infrastructure, economics and regulation. The information exists, but it is spread across agency websites, university notes, technical articles and videos of uneven quality. The goal was to organise that material into a single journey, with a thread students can follow from start to finish."
     }
    ]
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "en": "Learning objectives",
     "es": "Objetivos de aprendizaje"
    },
    "items": [
     {
      "lead": { "en": "Describe", "es": "Describir" },
      "body": { "en": "the path of electrical energy from generation to the end user.", "es": "el camino de la energía eléctrica desde la generación hasta el usuario final." }
     },
     {
      "lead": { "en": "Identify", "es": "Identificar" },
      "body": { "en": "the actors in the system (CAMMESA, Transener, trunk transmission companies, distributors, Secretaría de Energía, ENRE) and what each one does.", "es": "los actores del sistema (CAMMESA, Transener, transportistas troncales, distribuidoras, Secretaría de Energía, ENRE) y su función." }
     },
     {
      "lead": { "en": "Explain", "es": "Explicar" },
      "body": { "en": "why energy is transmitted at high voltage, based on Joule's law (P = I² × R).", "es": "por qué la energía se transporta en alta tensión, a partir de la ley de Joule (P = I² × R)." }
     },
     {
      "lead": { "en": "Recognise", "es": "Reconocer" },
      "body": { "en": "the physical components of the grid: conductors, towers, insulators and substations.", "es": "los componentes físicos de la red: conductores, torres, aisladores y subestaciones." }
     },
     {
      "lead": { "en": "Distinguish", "es": "Distinguir" },
      "body": { "en": "between who sets the sector's policy and who oversees the concession holders.", "es": "entre quien define la política del sector y quien controla a las concesionarias." }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "en": "The journey, step by step",
     "es": "El recorrido, paso a paso"
    },
    "items": [
     {
      "lead": {
       "en": "Introduction: the Wholesale Electricity Market",
       "es": "Introducción: el Mercado Eléctrico Mayorista"
      },
      "body": {
       "en": "What the market is, why energy is dispatched in real time and what CAMMESA does.",
       "es": "Qué es el mercado, por qué la energía se despacha en tiempo real y qué hace CAMMESA."
      }
     },
     {
      "lead": {
       "en": "Step 1, generation",
       "es": "Paso 1, generación"
      },
      "body": {
       "en": "Thermal, hydro, nuclear, wind and solar, with real Argentine power plants and their approximate capacity.",
       "es": "Térmicas, hidroeléctricas, nucleares, eólicas y solares, con centrales argentinas reales y su potencia aproximada."
      }
     },
     {
      "lead": {
       "en": "Step 2, cables",
       "es": "Paso 2, cables"
      },
      "body": {
       "en": "Aluminium, steel and copper compared by typical use, advantages and limits, and why high-voltage conductors are bare.",
       "es": "Aluminio, acero y cobre comparados por uso típico, ventajas y limitaciones, y por qué los conductores de alta tensión van desnudos."
      }
     },
     {
      "lead": {
       "en": "Step 3, towers",
       "es": "Paso 3, torres"
      },
      "body": {
       "en": "The parts of a high-voltage tower: shield wire, cross-arms, insulators, phase conductors and foundations.",
       "es": "Las partes de una torre de alta tensión: cable de guardia, crucetas, aisladores, conductores de fase y cimentación."
      }
     },
     {
      "lead": {
       "en": "Step 4, transmission (SADI)",
       "es": "Paso 4, transporte (SADI)"
      },
      "body": {
       "en": "The Argentine Interconnection System as both a physical grid and an organisation of actors coordinated by CAMMESA.",
       "es": "El Sistema Argentino de Interconexión como red física y como organización de actores coordinados por CAMMESA."
      }
     },
     {
      "lead": {
       "en": "Step 5, substations",
       "es": "Paso 5, subestaciones"
      },
      "body": {
       "en": "The step-by-step reduction from high to medium and low voltage, explained from how a transformer works.",
       "es": "La reducción progresiva de alta a media y baja tensión, explicada desde el principio del transformador."
      }
     },
     {
      "lead": {
       "en": "Step 6, distribution",
       "es": "Paso 6, distribución"
      },
      "body": {
       "en": "Distribution companies, cooperatives and types of user, with the obligations of whoever brings energy to the meter.",
       "es": "Distribuidoras, cooperativas y tipos de usuario, con las obligaciones de quien lleva la energía hasta el medidor."
      }
     },
     {
      "lead": {
       "en": "Regulatory framework",
       "es": "Marco regulatorio"
      },
      "body": {
       "en": "The Secretaría de Energía sets policy and ENRE enforces it: who writes the rules and who makes sure they are followed.",
       "es": "La Secretaría de Energía hace política y el ENRE hace control: quién fija las reglas y quién las hace cumplir."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "en": "How the journey is built",
     "es": "Cómo está armado el recorrido"
    },
    "items": [
     {
      "lead": {
       "en": "An interactive energy map",
       "es": "Un mapa de la energía interactivo"
      },
      "body": {
       "en": "The MEM 01 diagram as the entry point: each stage (start, arcs, nodes and end) opens its module, and the lines show the current and its voltage level, from 220 V to 500 kV.",
       "es": "El diagrama MEM 01 como puerta de entrada: cada etapa (inicio, arcos, nodos y final) abre su módulo, y las líneas muestran la corriente y su nivel de tensión, de 220 V a 500 kV."
      }
     },
     {
      "lead": {
       "en": "Short modules with a clear order",
       "es": "Módulos cortos y con orden claro"
      },
      "body": {
       "en": "Each module states its position (module 4 of 8) and its reading time, and closes with a link to the previous and the next one.",
       "es": "Cada módulo indica su posición (módulo 4 de 8) y su tiempo de lectura, y cierra con el acceso al anterior y al siguiente."
      }
     },
     {
      "lead": {
       "en": "Progress, filters and search",
       "es": "Progreso, filtros y buscador"
      },
      "body": {
       "en": "Visited modules are marked and progress is saved in the browser, with an option to reset it. The module catalogue can be filtered by physical journey, infrastructure, or actors and regulation, and searched by term.",
       "es": "Los módulos visitados quedan marcados y el progreso se guarda en el navegador, con la opción de reiniciarlo. El catálogo de módulos se filtra por recorrido físico, infraestructura o actores y regulación, y se busca por término."
      }
     },
     {
      "lead": {
       "en": "Depth on demand",
       "es": "Profundidad a demanda"
      },
      "body": {
       "en": "Images that can be enlarged, Go deeper sections that expand with the source material, and a Glossary and resources panel available from any module.",
       "es": "Imágenes que se amplían, apartados Profundizá que se despliegan con el material de la fuente y un panel de Glosario y recursos disponible desde cualquier módulo."
      }
     },
     {
      "lead": {
       "en": "Dark and light mode",
       "es": "Modo oscuro y claro"
      },
      "body": {
       "en": "The material opens in dark mode and can be switched to light, to suit the classroom projector or the student's screen.",
       "es": "El material abre en modo oscuro y se puede pasar a claro, según el proyector del aula o la pantalla del estudiante."
      }
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "en": "Explore the energy map",
     "es": "Explorar el mapa de la energía"
    },
    "note": {
     "en": "Eight modules from the Wholesale Electricity Market to the regulatory framework. Start from the energy map, open any stage and follow your progress, right here.",
     "es": "Ocho módulos del Mercado Eléctrico Mayorista al marco regulatorio. Empezá por el mapa de la energía, abrí cualquier etapa y seguí tu progreso, acá mismo."
    },
    "src": "https://lpedaci.github.io/IMRSC_U1-energia/",
    "url": "https://lpedaci.github.io/IMRSC_U1-energia/",
    "label": {
     "en": "Open the material",
     "es": "Acceder al material"
    },
    "toc": {
     "es": "Explorar el mapa",
     "en": "Explore the map"
    }
   },
   {
    "t": "callout",
    "h": {
     "en": "The key formula: P = I² × R",
     "es": "La fórmula clave: P = I² × R"
    },
    "body": {
     "en": "Energy losses in transmission grow with the square of the current. Doubling the voltage halves the current and cuts losses to 25%. This formula explains why substations exist and why energy travels at high voltage, and it ties every step of the journey into a single idea.",
     "es": "Las pérdidas de energía en el transporte crecen con el cuadrado de la corriente. Al duplicar la tensión, la corriente se reduce a la mitad y las pérdidas caen al 25 %. Esta fórmula explica por qué existen las subestaciones y por qué la energía viaja en alta tensión, y une todos los pasos del recorrido en una sola idea."
    }
   },
   {
    "t": "prose",
    "h": {
     "en": "Curation and resources",
     "es": "Curaduría y recursos"
    },
    "p": [
     {
      "es": "La selección de fuentes es parte del material. Los 12 recursos externos combinan sitios oficiales (Energías de mi País, CAMMESA, su mapa GeoSADI y el ENRE), cuatro videos sobre aisladores, fase y neutro, tensión, corriente y potencia, artículos técnicos sobre torres y cables, y un apunte de la UTN Reconquista sobre líneas aéreas de media y alta tensión. El glosario rápido define ocho términos (SADI, ACSR, CAMMESA, ENRE, hilo de guardia, aislador, cable desnudo y vano) y la sección ¿Sabías que…? suma datos que despiertan preguntas, como que Tierra del Fuego no está conectada al SADI. Todo vive en el panel de Glosario y recursos, agrupado por tema, y el apunte de la UTN también aparece dentro del módulo de torres, donde hace falta.",
      "en": "Choosing the sources is part of the material. The 12 external resources combine official sites (Energías de mi País, CAMMESA, its GeoSADI map and ENRE), four videos on insulators, phase and neutral, voltage, current and power, technical articles on towers and cables, and lecture notes from UTN Reconquista on medium and high-voltage overhead lines. The quick glossary defines eight terms (SADI, ACSR, CAMMESA, ENRE, shield wire, insulator, bare cable and span), and the Did you know…? section adds facts that spark questions, such as Tierra del Fuego not being connected to the SADI. Everything lives in the Glossary and resources panel, grouped by topic, and the UTN notes also appear inside the towers module, where they are needed."
     }
    ],
    "toc": {
     "es": "Curaduría y recursos",
     "en": "Curation and resources"
    }
   }
  ],
  "outcome": {
   "h": {
    "en": "Outcomes",
    "es": "Resultados"
   },
   "body": {
    "en": "Unit 01 now has its own public, always-available material that turns a scattered topic into a single journey from generation to the end consumer. It combines authoring and curation: the texts, the thread and the structure are my own, and each concept points to the official or technical source behind it. It works as a script for the class and, with the map and saved progress, as a self-paced journey students can pick up where they left off.",
    "es": "La Unidad 01 cuenta ahora con un material propio, público y siempre disponible que ordena un tema disperso en un único recorrido de la generación al consumidor final. Combina autoría y curaduría: los textos, el hilo y la estructura son propios, y cada concepto lleva a la fuente oficial o técnica que lo respalda. Funciona como guion para la clase y, con el mapa y el progreso guardado, como un recorrido a ritmo propio que el estudiante retoma donde lo dejó."
   }
  }
 },
 "sistemas-operativos": {
  "cat": "cap",
  "touch": "it",
  "title": {
   "en": "Operating Systems: storage & system setup",
   "es": "Sistemas Operativos: almacenamiento y seteo del S.O."
  },
  "subtitle": {
   "en": "Making the least visible part of the syllabus manipulable",
   "es": "Volver manipulable la parte menos visible del programa"
  },
  "summary": {
   "problem": {
    "es": "Almacenamiento y seteo del sistema operativo son temas abstractos: la clase tradicional deja a los estudiantes memorizando tablas sin entender por qué importa cada elección.",
    "en": "Storage and OS setup are abstract topics: traditional classes leave students memorising tables without knowing why each choice matters."
   },
   "solution": {
    "es": "Dos sitios interactivos con diagramas de disco clicables, árboles de decisión y tablas tipo semáforo, más un módulo de autoevaluación al azar.",
    "en": "Two interactive sites with clickable disk diagrams, decision trees and traffic-light tables, plus a randomised self-assessment module."
   },
   "results": [
    {
     "v": "2",
     "l": {
      "es": "unidades en un único banco de preguntas",
      "en": "units feeding a single question bank"
     }
    },
    {
     "v": "20 / 40",
     "l": {
      "es": "preguntas por ronda, rebarajadas en cada intento",
      "en": "questions per round, reshuffled on every attempt"
     }
    },
    {
     "t": {
      "es": "Una guía de clase de 80 minutos lista para el docente.",
      "en": "An 80-minute lesson guide ready for the teacher."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Instructional design, LXD, front-end development, assessment design",
    "es": "Diseño instruccional, LXD, desarrollo front-end, diseño de evaluación"
   },
   "timeline": {
    "en": "March to November 2026",
    "es": "Marzo a noviembre 2026"
   },
   "context": {
    "en": "Units 2 and 3, fifth-year Informatics, Operating Systems Lab, Instituto Leonardo Murialdo",
    "es": "Unidades 2 y 3, 5to año de Informática, Laboratorio de Sistemas Operativos, Instituto Leonardo Murialdo"
   },
   "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub Pages"
   ],
   "methods": [
    "Backward Design",
    "Retrieval Practice",
    "Testing Effect",
    "Case-Based Learning"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Unit 2, storage",
     "es": "Unidad 2, almacenamiento"
    },
    "url": "https://lpedaci.github.io/so_unidad-02/"
   },
   {
    "label": {
     "en": "Unit 3, OS setup",
     "es": "Unidad 3, seteo del SO"
    },
    "url": "https://lpedaci.github.io/so_unidad-03/"
   },
   {
    "label": {
     "en": "Self-assessment module",
     "es": "Módulo de autoevaluación"
    },
    "url": "https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "Two fully interactive HTML sites that cover the hardest to visualise part of the Operating Systems syllabus: storage management (Unit 2) and OS setup (Unit 3). Instead of static slides, students explore clickable disk diagrams, traffic-light comparison tables and decision trees, and then test themselves with a randomised self-assessment module. Everything is deployed on GitHub Pages, responsive, and written to work on a phone or on a lab PC.",
      "es": "Dos sitios HTML interactivos que cubren la parte más difícil de visualizar del programa de Sistemas Operativos: la gestión de almacenamiento (Unidad 2) y el seteo del SO (Unidad 3). En lugar de diapositivas estáticas, los estudiantes exploran diagramas de disco clicables, tablas comparativas tipo semáforo y árboles de decisión, y luego se ponen a prueba con un módulo de autoevaluación al azar. Todo publicado en GitHub Pages, responsive y pensado para funcionar tanto en el celular como en la PC del laboratorio."
     }
    ],
    "toc": {
     "es": "Contexto y desafío",
     "en": "Context and challenge"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "The challenge",
     "es": "El desafío"
    },
    "p": [
     {
      "en": "Storage and OS configuration are notoriously abstract: partition schemes (MBR vs GPT), file systems (FAT32, NTFS, exFAT), firmware modes (BIOS/UEFI) and the setup steps after installation (licensing, user accounts, drivers, security). Traditional lectures leave students memorising tables without understanding why each choice matters. The goal was to make every one of these concepts manipulable and tied to a real decision.",
      "es": "El almacenamiento y la configuración del SO son notoriamente abstractos: esquemas de partición (MBR vs GPT), sistemas de archivos (FAT32, NTFS, exFAT), modos de firmware (BIOS/UEFI) y los pasos de seteo posteriores a la instalación (licencias, cuentas de usuario, drivers, seguridad). La clase tradicional deja a los estudiantes memorizando tablas sin entender por qué cada elección importa. El objetivo fue volver manipulable cada uno de esos conceptos y anclarlo a una decisión real."
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "en": "The solution: the LXD approach",
     "es": "La solución: el enfoque LXD"
    },
    "items": [
     {
      "lead": {
       "en": "Interactive diagrams",
       "es": "Diagramas interactivos"
      },
      "body": {
       "en": "Clickable disk maps where each segment (primary, extended, logical, EFI, MSR, recovery) reveals its role, size and file system, for both MBR and GPT layouts.",
       "es": "Mapas de disco clicables donde cada segmento (primaria, extendida, lógica, EFI, MSR, recovery) revela su función, tamaño y sistema de archivos, tanto en MBR como en GPT."
      }
     },
     {
      "lead": {
       "en": "Decision-first framing",
       "es": "Enfoque orientado a la decisión"
      },
      "body": {
       "en": "A firmware to scheme to use decision tree, so students choose a partition scheme the way a technician actually would, not by rote.",
       "es": "Un árbol de decisión firmware, esquema y uso, para que el estudiante elija el esquema de partición como lo haría un técnico, no de memoria."
      }
     },
     {
      "lead": {
       "en": "Traffic-light comparison tables",
       "es": "Tablas comparativas tipo semáforo"
      },
      "body": {
       "en": "File systems and format types (quick, full, low-level) compared side by side and colour-coded for fast scanning.",
       "es": "Sistemas de archivos y tipos de formateo (rápido, completo, bajo nivel) comparados lado a lado y codificados por color para lectura rápida."
      }
     },
     {
      "lead": {
       "en": "Real user cases, A to F",
       "es": "Casos de usuario reales, A a F"
      },
      "body": {
       "en": "An activity where teams design the disk for a concrete user profile and justify their choices.",
       "es": "Una actividad donde los equipos diseñan el disco para un perfil de usuario concreto y justifican sus decisiones."
      }
     },
     {
      "lead": {
       "en": "Built-in teacher kit",
       "es": "Kit docente incorporado"
      },
      "body": {
       "en": "An eighty-minute lesson plan and a password-protected teacher area, so the same material serves the class and the instructor.",
       "es": "Una guía de clase de 80 minutos y un área docente protegida con contraseña, para que el mismo material sirva a la clase y al profesor."
      }
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "en": "Unit 2 | Storage management, live",
     "es": "Unidad 2 | Gestión de almacenamiento, en vivo"
    },
    "note": {
     "en": "Partitioning, formatting and file systems. Explore the interactive disk diagrams, the FAT32/NTFS/exFAT comparison, the build guide and the which scheme should I choose decision tree, right here.",
     "es": "Particionado, formateo y sistemas de archivos. Explorá los diagramas de disco interactivos, la comparativa FAT32/NTFS/exFAT, la guía de armado y el árbol de decisión sobre qué esquema elegir, acá mismo."
    },
    "src": "https://lpedaci.github.io/so_unidad-02/",
    "url": "https://lpedaci.github.io/so_unidad-02/",
    "label": {
     "en": "Unit 2 site",
     "es": "Sitio de la Unidad 2"
    },
    "toc": {
     "es": "Unidades 2 y 3, en vivo",
     "en": "Units 2 and 3, live"
    }
   },
   {
    "t": "live",
    "join": true,
    "h": {
     "en": "Unit 3 | Operating system setup, live",
     "es": "Unidad 3 | Seteo del sistema operativo, en vivo"
    },
    "note": {
     "en": "From hardware and installation to post-install configuration. Module 1 is an interactive interconnection map (storage, live USB, BIOS/UEFI, install flow, virtualisation); Module 2 is an integrated guide to licensing and activation, user accounts and roles, control panel, drivers, firewall and security.",
     "es": "Desde el hardware y la instalación hasta la configuración posterior. El Módulo 1 es un mapa de interconexión interactivo (almacenamiento, live USB, BIOS/UEFI, flujo de instalación, virtualización); el Módulo 2 es un apunte integrador de licencias y activación, cuentas de usuario y roles, panel de control, drivers, firewall y seguridad."
    },
    "src": "https://lpedaci.github.io/so_unidad-03/",
    "url": "https://lpedaci.github.io/so_unidad-03/",
    "label": {
     "en": "Unit 3 site",
     "es": "Sitio de la Unidad 3"
    }
   },
   {
    "t": "prose",
    "h": {
     "en": "The assessment module",
     "es": "El módulo evaluativo"
    },
    "p": [
     {
      "en": "The centrepiece of Unit 3 is a self-assessment engine that draws random questions from both units. Students pick a round, answer one question at a time, then verify and read an explanation before moving on. Both the questions and the order of their options are reshuffled on every attempt, so nothing is memorised as the answer is B.",
      "es": "La pieza central de la Unidad 3 es un motor de autoevaluación que toma preguntas al azar de ambas unidades. El estudiante elige una ronda, responde de a una pregunta, verifica y lee una explicación antes de continuar. Tanto las preguntas como el orden de sus opciones se rebarajan en cada intento, así no se memoriza que la respuesta es la B."
     }
    ],
    "toc": {
     "es": "El módulo evaluativo",
     "en": "The assessment module"
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "20",
      "label": {
       "en": "Round 1: quick review, balanced easy to hard",
       "es": "Ronda 1: repaso rápido, equilibrio de fácil a difícil"
      }
     },
     {
      "value": "40",
      "label": {
       "en": "Round 2: challenge, weighted to medium and hard",
       "es": "Ronda 2: desafío, con más peso en medias y difíciles"
      }
     },
     {
      "value": "2",
      "label": {
       "en": "units feeding a single question pool",
       "es": "unidades que alimentan un único banco de preguntas"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "en": "Its purpose: learning, not grading.",
     "es": "Su finalidad: aprender, no calificar."
    },
    "body": {
     "en": "The module is designed around retrieval practice and the testing effect: recalling an answer, and immediately seeing why it is right or wrong, strengthens memory far more than re-reading. Randomisation prevents rote memorisation of positions, the per-question explanations turn every mistake into a micro-lesson, and because it is self-paced and ungraded, students can practise without pressure until the concepts stick.",
     "es": "El módulo está diseñado en torno a la práctica de recuperación y el efecto del testeo: recuperar una respuesta, y ver de inmediato por qué es correcta o incorrecta, fija la memoria mucho más que releer. La aleatorización evita memorizar posiciones, las explicaciones por pregunta convierten cada error en una micro-lección, y al ser autoadministrado y sin nota, los estudiantes pueden practicar sin presión hasta que el concepto se afiance."
    }
   },
   {
    "t": "live",
    "join": true,
    "h": {
     "en": "Try the self-assessment module",
     "es": "Probar el módulo de autoevaluación"
    },
    "src": "https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html",
    "url": "https://lpedaci.github.io/so_unidad-03/03-autoevaluacion.html",
    "label": {
     "en": "Self-assessment",
     "es": "Autoevaluación"
    }
   }
  ],
  "outcome": {
   "h": {
    "en": "Outcomes",
    "es": "Resultados"
   },
   "body": {
    "en": "The two units now form a single coherent learning ecosystem: interactive theory, a hands-on activity with real user cases, a ready-to-run eighty-minute lesson plan for the instructor, and a self-assessment loop that lets students measure their own understanding. Building it all myself kept full control over the pedagogy, the accessibility and the visual language, and it ships as a free, always-available resource reachable from any device.",
    "es": "Las dos unidades forman ahora un ecosistema de aprendizaje único y coherente: teoría interactiva, una actividad práctica con casos de usuario reales, una guía de clase de 80 minutos lista para usar por el docente, y un circuito de autoevaluación que permite a los estudiantes medir su propia comprensión. Desarrollarlo íntegramente me permitió mantener el control total de la pedagogía, la accesibilidad y el lenguaje visual, y se entrega como un recurso gratuito y siempre disponible, accesible desde cualquier dispositivo."
   }
  }
 },
 "tedxtecno": {
  "cat": "cap",
  "title": {
   "en": "TEDxTECNO",
   "es": "TEDxTECNO"
  },
  "subtitle": {
   "en": "Empowering technical voices through storytelling",
   "es": "Potenciar voces técnicas a través del storytelling"
  },
  "summary": {
   "problem": {
    "es": "Futuros técnicos que dominaban el cómo de la tecnología, pero necesitaban contar el porqué a una audiencia más amplia.",
    "en": "Future technicians who mastered the how of technology but needed to explain the why to a wider audience."
   },
   "solution": {
    "es": "Un currículum interdisciplinario con los lineamientos de TED: storytelling, coaching de estructura narrativa y presentaciones pensadas como apoyo visual.",
    "en": "An interdisciplinary curriculum following TED’s guidelines: storytelling, coaching on narrative structure and slides designed as visual support."
   },
   "results": [
    {
     "t": {
      "es": "Un ciclo de charlas tecnológicas en vivo, a cargo de los estudiantes de 5to año.",
      "en": "A live series of tech talks given by 5th-year students."
     }
    },
    {
     "t": {
      "es": "Más autonomía comunicativa y presencia profesional en los estudiantes.",
      "en": "Students gained communication autonomy and professional presence."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Programme design, curriculum, coaching, project management",
    "es": "Diseño del programa, currículum, coaching, gestión del proyecto"
   },
   "timeline": {
    "en": "August to November 2022",
    "es": "Agosto a noviembre 2022"
   },
   "context": {
    "en": "Fifth-year Informatics, Instituto Leonardo Murialdo",
    "es": "5to año de Informática, Instituto Leonardo Murialdo"
   },
   "stack": [
    "Adobe CC",
    "PowerPoint",
    "Live event production"
   ],
   "methods": [
    "TED guidelines",
    "Project-Based Learning",
    "Peer feedback",
    "Coaching"
   ]
  },
  "links": [],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "In the technical world, the ability to communicate an idea is as important as the idea itself. I designed TEDxTECNO to give fifth-year Informatics students a collaborative platform to strengthen their public speaking strategies. My mission was to help these future technicians move beyond the how of technology and master the why, using storytelling to reach a broader audience.",
      "es": "En el mundo técnico, la capacidad de comunicar una idea es tan importante como la idea misma. Diseñé TEDxTECNO para brindar a los estudiantes de 5to año de Informática una plataforma colaborativa donde fortalecer sus estrategias de oratoria. Mi misión fue ayudar a estos futuros técnicos a ir más allá del cómo de la tecnología y dominar el porqué, usando el storytelling para llegar a una audiencia más amplia."
     }
    ],
    "toc": {
     "es": "Contexto y estrategia educativa",
     "en": "Context and educational strategy"
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "en": "Educational strategy and narrative design",
     "es": "Estrategia educativa y diseño narrativo"
    },
    "p": [
     {
      "en": "Following the foundational guidelines of the TED nonprofit organisation, I developed an interdisciplinary curriculum that integrated language arts and technical expertise. I guided students through identifying core tech concepts and reshaping them into ideas worth spreading. This involved intense coaching on narrative structure, ensuring their talks were not just technical reports but compelling stories that resonated with peers and educators.",
      "es": "Siguiendo los lineamientos fundacionales de la organización TED, desarrollé un currículum interdisciplinario que integró lengua y expertise técnica. Guie a los estudiantes en el proceso de identificar conceptos tecnológicos centrales y transformarlos en ideas que vale la pena difundir. Esto implicó un coaching intenso en estructura narrativa, asegurando que sus charlas no fueran solo informes técnicos, sino historias convincentes que resonaran con pares y docentes."
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "en": "Technology as an explanatory tool",
     "es": "La tecnología como herramienta explicativa"
    },
    "p": [
     {
      "en": "A key focus was incorporating technology as a visual aid rather than a backdrop. I worked with students to design effective visual presentations and multimedia tools that served as explanatory supports. This taught them how to leverage UX in their presentations, so their slides were intuitive and enhanced their verbal delivery instead of competing with it.",
      "es": "Un foco clave fue incorporar la tecnología como apoyo visual y no como mero telón de fondo. Trabajé con los estudiantes en el diseño de presentaciones visuales efectivas y herramientas multimedia que funcionaran como soportes explicativos. Esto les enseñó a aprovechar la UX en sus presentaciones, logrando diapositivas intuitivas que potenciaran su exposición oral en lugar de competir con ella."
     }
    ],
    "toc": {
     "es": "La tecnología y el material",
     "en": "Technology and project media"
    }
   },
   {
    "t": "gallery",
    "images": [
     {
      "src": "tedx-01.jpg",
      "w": 1400,
      "h": 788,
      "alt": {
       "en": "TEDxTECNO student talk on stage",
       "es": "Charla estudiantil de TEDxTECNO en escena"
      }
     },
     {
      "src": "tedx-02.jpg",
      "w": 1400,
      "h": 788,
      "alt": {
       "en": "TEDxTECNO live event",
       "es": "Evento en vivo de TEDxTECNO"
      }
     },
     {
      "src": "tedx-03.jpg",
      "w": 1400,
      "h": 912,
      "alt": {
       "en": "TEDxTECNO event, day one",
       "es": "TEDxTECNO, primera jornada"
      }
     },
     {
      "src": "tedx-04.jpg",
      "w": 1400,
      "h": 912,
      "alt": {
       "en": "TEDxTECNO event, day two",
       "es": "TEDxTECNO, segunda jornada"
      }
     }
    ]
   },
   {
    "t": "embed",
    "join": true,
    "kind": "doc",
    "h": {
     "en": "Project media",
     "es": "Material del proyecto"
    },
    "src": "https://drive.google.com/file/d/1X1UfNS9anlQURk9h2P522GsUvjAyRbhI/preview",
    "host": "Google Drive",
    "label": {
     "en": "TEDxTECNO project media",
     "es": "Material del proyecto TEDxTECNO"
    }
   },
   {
    "t": "prose",
    "h": {
     "en": "Leadership and collaborative environments",
     "es": "Liderazgo y entornos colaborativos"
    },
    "p": [
     {
      "en": "I fostered a collaborative presentation space where students did not work in isolation but participated in a peer-feedback ecosystem. This mirrored a professional corporate setting, requiring students to coordinate logistics, refine their messaging based on audience perception and manage the pressure of a live event.",
      "es": "Fomenté un espacio de presentación colaborativo donde los estudiantes no trabajaron aislados sino dentro de un ecosistema de feedback entre pares. Este entorno replicó un contexto corporativo profesional, exigiéndoles coordinar la logística, refinar sus mensajes según la percepción de la audiencia y gestionar la presión de un evento en vivo."
     }
    ]
   }
  ],
  "outcome": {
   "h": {
    "en": "Outcomes",
    "es": "Resultados"
   },
   "body": {
    "en": "The project culminated in a tech talk cycle where students demonstrated significant growth in communication autonomy and professional presence. By combining technical education with public speaking practice, we equipped them with the soft skills needed to succeed in a modern, collaborative workplace.",
    "es": "El proyecto culminó en un ciclo de charlas tecnológicas donde los estudiantes demostraron un crecimiento significativo en su autonomía comunicativa y presencia profesional. Al unir la educación técnica con el arte de hablar en público, los equipamos con las habilidades blandas necesarias para triunfar en un entorno laboral moderno y colaborativo."
   }
  }
 },
 "docente-era-digital": {
  "cat": "cont",
  "touch": "cap",
  "title": {
   "en": "The teacher’s role in the digital era",
   "es": "El rol docente en la era digital"
  },
  "subtitle": {
   "en": "A paradigm shift, argued in two minutes of motion",
   "es": "Un cambio de paradigma, argumentado en dos minutos de motion"
  },
  "summary": {
   "problem": {
    "es": "El modelo tradicional de transmisión de contenidos no alcanza en la era digital, y había que argumentar el cambio de rol docente de forma breve.",
    "en": "The traditional content-delivery model falls short in the digital age, and the shift in the teacher’s role had to be argued briefly."
   },
   "solution": {
    "es": "Un video de motion de dos minutos que integra a Paulo Freire, Edith Litwin y el modelo TPACK.",
    "en": "A two-minute motion video that brings together Paulo Freire, Edith Litwin and the TPACK model."
   },
   "results": [
    {
     "t": {
      "es": "Un video que presenta al docente como gestor del aprendizaje, que enseña a aprender.",
      "en": "A video that presents the teacher as a learning manager who teaches students how to learn."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Concept, script, instructional design, motion",
    "es": "Concepto, guion, diseño instruccional, motion"
   },
   "timeline": {
    "en": "October 2025",
    "es": "Octubre 2025"
   },
   "context": {
    "en": "Conceptual video, in Spanish",
    "es": "Video conceptual, en español"
   },
   "stack": [
    "Adobe After Effects",
    "Adobe Premiere",
    "GenAI"
   ],
   "methods": [
    "TPACK",
    "Critical pedagogy (Freire)",
    "Litwin"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Watch on YouTube",
     "es": "Ver en YouTube"
    },
    "url": "https://www.youtube.com/watch?v=ShhtVEM_7c4"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "The challenge",
     "es": "El desafío"
    },
    "p": [
     {
      "en": "To communicate the necessity of a pedagogical shift in the digital age. The goal was to move beyond the traditional content-delivery model and illustrate how teachers can become learning experience designers who foster student participation and autonomy.",
      "es": "Comunicar la necesidad de un cambio pedagógico en la era digital. El objetivo fue superar el modelo tradicional de transmisión de contenidos e ilustrar cómo los docentes pueden convertirse en diseñadores de experiencias de aprendizaje que fomentan la participación y la autonomía del estudiante."
     }
    ],
    "toc": {
     "es": "El desafío y la solución",
     "en": "The challenge and the solution"
    }
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "en": "The solution: the LXD strategy",
     "es": "La solución: la estrategia LXD"
    },
    "items": [
     {
      "lead": {
       "en": "Conceptual depth",
       "es": "Profundidad conceptual"
      },
      "body": {
       "en": "Key educational theories from Paulo Freire (critique of banking education) and Edith Litwin (technology as a medium for possibilities) are integrated into the argument.",
       "es": "Integré teorías educativas clave de Paulo Freire (crítica a la educación bancaria) y Edith Litwin (la tecnología como medio de posibilidades)."
      }
     },
     {
      "lead": {
       "en": "Framework analysis",
       "es": "Análisis de marcos"
      },
      "body": {
       "en": "The TPACK model (Technological Pedagogical Content Knowledge) is detailed, showing how teachers must synthesise subject matter, pedagogy and technology to create effective learning environments.",
       "es": "Detallé el modelo TPACK (Conocimiento Tecnológico Pedagógico del Contenido), mostrando cómo el docente debe sintetizar contenido, pedagogía y tecnología para crear entornos de aprendizaje efectivos."
      }
     },
     {
      "lead": {
       "en": "Visionary outcome",
       "es": "Resultado visionario"
      },
      "body": {
       "en": "The video defines the modern educator not as a transmitter of facts, but as a manager of learning who teaches students how to learn.",
       "es": "El video define al educador moderno no como transmisor de datos, sino como gestor del aprendizaje que enseña a los estudiantes a aprender."
      }
     }
    ]
   },
   {
    "t": "embed",
    "kind": "video",
    "h": {
     "en": "Watch the video",
     "es": "Ver el video"
    },
    "src": "https://www.youtube.com/embed/ShhtVEM_7c4",
    "host": "YouTube",
    "label": {
     "en": "Video on the teacher’s role",
     "es": "Video sobre el rol docente"
    },
    "open": "https://www.youtube.com/watch?v=ShhtVEM_7c4"
   }
  ],
  "outcome": null
 },
 "expo-smart-cities": {
  "cat": "cont",
  "title": {
   "en": "Opening, Expo Smart Cities 2024",
   "es": "Apertura, Expo Smart Cities 2024"
  },
  "subtitle": {
   "en": "Setting the room up for the work the students were about to show",
   "es": "Preparar la sala para el trabajo que los estudiantes estaban por mostrar"
  },
  "summary": {
   "problem": {
    "es": "La Expo Informática 2024 necesitaba una apertura que enmarcara los proyectos de los estudiantes ante familias, personal e invitados.",
    "en": "Expo Informática 2024 needed an opening that framed the students’ projects for families, staff and guests."
   },
   "solution": {
    "es": "Un video de apertura sobre ciudades inteligentes, hecho con After Effects, Premiere e IA generativa.",
    "en": "An opening video on smart cities, made with After Effects, Premiere and generative AI."
   },
   "results": [
    {
     "t": {
      "es": "La pieza abrió el evento y presentó el trabajo que los estudiantes iban a mostrar.",
      "en": "The piece opened the event and introduced the work the students were about to show."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Concept, direction, motion, edit",
    "es": "Concepto, dirección, motion, edición"
   },
   "timeline": {
    "en": "November 2024",
    "es": "Noviembre 2024"
   },
   "context": {
    "en": "Expo Informatics 2024, Instituto Leonardo Murialdo, Argentina",
    "es": "Expo Informática 2024, Instituto Leonardo Murialdo, Argentina"
   },
   "stack": [
    "Adobe After Effects",
    "Adobe Premiere",
    "GenAI"
   ],
   "methods": [
    "Visual storytelling",
    "Event design"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Watch on Vimeo",
     "es": "Ver en Vimeo"
    },
    "url": "https://vimeo.com/1045840730"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "Opening video for Expo Informatics 2024 at Instituto Leonardo Murialdo, Argentina, produced with Adobe After Effects, Adobe Premiere and generative AI around the smart cities theme. The piece opens the event and frames the students projects for an audience of families, staff and guests.",
      "es": "Video de apertura para la Expo Informática 2024 del Instituto Leonardo Murialdo, Argentina, producido con Adobe After Effects, Adobe Premiere e IA generativa en torno a la temática de ciudades inteligentes. La pieza abre el evento y enmarca los proyectos de los estudiantes ante una audiencia de familias, personal e invitados."
     }
    ],
    "toc": {
     "es": "Contexto y apertura",
     "en": "Context and opening"
    }
   },
   {
    "t": "embed",
    "join": true,
    "kind": "video",
    "h": {
     "en": "Watch the opening",
     "es": "Ver la apertura"
    },
    "src": "https://player.vimeo.com/video/1045840730",
    "host": "Vimeo",
    "label": {
     "en": "Expo Smart Cities opening video",
     "es": "Video de apertura de Expo Smart Cities"
    },
    "open": "https://vimeo.com/1045840730"
   }
  ],
  "outcome": null
 },
 "the-crow": {
  "cat": "cont",
  "title": {
   "en": "The Crow, after Edgar Allan Poe",
   "es": "The Crow, según Edgar Allan Poe"
  },
  "subtitle": {
   "en": "An animated short built end to end with generative tools",
   "es": "Un corto animado construido de punta a punta con herramientas generativas"
  },
  "summary": {
   "problem": {
    "es": "El proyecto final de la diplomatura pedía contar una historia completa con herramientas de IA generativa.",
    "en": "The diploma’s final project called for telling a complete story with generative AI tools."
   },
   "solution": {
    "es": "Un corto inspirado en El Cuervo de Poe: imágenes con Adobe Firefly, animación con Runway y banda sonora original con Suno.",
    "en": "A short film inspired by Poe’s The Raven: images with Adobe Firefly, animation with Runway and an original score with Suno."
   },
   "results": [
    {
     "t": {
      "es": "Cortometraje terminado y publicado como proyecto final del Módulo 02 de la diplomatura de UNTREF.",
      "en": "Short film finished and published as the final project of Module 02 of the UNTREF diploma."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Direction, art direction, animation, sound",
    "es": "Dirección, dirección de arte, animación, sonido"
   },
   "timeline": {
    "en": "June to November 2024",
    "es": "Junio a noviembre 2024"
   },
   "context": {
    "en": "Final project, Module 02, Professional Diploma in Digital Tools and Artificial Intelligence, UNTREF",
    "es": "Proyecto final, Módulo 02, Diplomatura Profesional en Herramientas Digitales e Inteligencia Artificial, UNTREF"
   },
   "stack": [
    "Adobe Firefly",
    "Runway AI",
    "Suno AI",
    "Adobe Premiere"
   ],
   "methods": [
    "Visual storytelling",
    "Adaptation"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Watch on Vimeo",
     "es": "Ver en Vimeo"
    },
    "url": "https://vimeo.com/1046045810"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "Overview",
     "es": "Contexto"
    },
    "p": [
     {
      "en": "An animated short film inspired by The Raven by Edgar Allan Poe, created as the final project for Module 02 of the Professional Diploma in Digital Tools and Artificial Intelligence at the National University of Tres de Febrero (UNTREF), Argentina. The project featured AI-generated visuals produced with Adobe Firefly, while the animation was crafted using Runway AI, bringing the imagery to life and enhancing the narrative with dynamic elements. Original soundtrack generated with Suno AI.",
      "es": "Un cortometraje animado inspirado en El Cuervo de Edgar Allan Poe, creado como proyecto final del Módulo 02 de la Diplomatura Profesional en Herramientas Digitales e Inteligencia Artificial de la Universidad Nacional de Tres de Febrero (UNTREF), Argentina. El proyecto contó con visuales generados por IA con Adobe Firefly, mientras que la animación se realizó con Runway AI, dando vida a las imágenes y potenciando la narrativa con elementos dinámicos. Banda sonora original generada con Suno AI."
     }
    ],
    "toc": {
     "es": "Contexto y cortometraje",
     "en": "Context and short film"
    }
   },
   {
    "t": "embed",
    "join": true,
    "kind": "video",
    "h": {
     "en": "Watch the short film",
     "es": "Ver el cortometraje"
    },
    "src": "https://player.vimeo.com/video/1046045810",
    "host": "Vimeo",
    "label": {
     "en": "The Crow, animated short film",
     "es": "The Crow, cortometraje animado"
    },
    "open": "https://vimeo.com/1046045810"
   }
  ],
  "outcome": null
 },
 "erp-motion-graphics": {
  "cat": "cont",
  "touch": "it",
  "title": {
   "en": "ERP systems: foundational motion graphics",
   "es": "Sistemas ERP: motion graphics fundacional"
  },
  "subtitle": {
   "en": "Two minutes to make an entire enterprise architecture legible",
   "es": "Dos minutos para volver legible toda una arquitectura empresarial"
  },
  "summary": {
   "problem": {
    "es": "La arquitectura de un ERP, con software integrado y bases de datos centralizadas, es densa y difícil de visualizar para estudiantes de ingeniería en sistemas.",
    "en": "ERP architecture, with integrated software and centralised databases, is dense and hard to picture for systems engineering students."
   },
   "solution": {
    "es": "Un motion graphics de dos minutos con estilo de pizarra, ordenado alrededor de los diez factores críticos de éxito.",
    "en": "A two-minute whiteboard-style motion graphic, organised around the ten critical success factors."
   },
   "results": [
    {
     "t": {
      "es": "Una síntesis de dos minutos que muestra cómo circula la información en toda la organización.",
      "en": "A two-minute summary that shows how information flows across the whole organisation."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "en": "Instructional design, script, motion",
    "es": "Diseño instruccional, guion, motion"
   },
   "timeline": {
    "en": "October 2019",
    "es": "Octubre 2019"
   },
   "context": {
    "en": "Systems engineering students, video in Spanish",
    "es": "Estudiantes de ingeniería en sistemas, video en español"
   },
   "stack": [
    "PowToon"
   ],
   "methods": [
    "Cognitive load theory",
    "Visual storytelling"
   ]
  },
  "links": [
   {
    "label": {
     "en": "Watch on YouTube",
     "es": "Ver en YouTube"
    },
    "url": "https://www.youtube.com/watch?v=cZjwPcqWMOc"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "en": "The challenge",
     "es": "El desafío"
    },
    "p": [
     {
      "en": "The objective was to distil the multi-layered nature of Enterprise Resource Planning systems into a two-minute synthesis. The challenge lay in translating dense technical requirements, such as integrated software architecture and centralised databases, into a clear visual roadmap for systems engineering students.",
      "es": "El objetivo fue destilar la naturaleza multicapa de los sistemas de Planificación de Recursos Empresariales (ERP) en una síntesis de dos minutos. El desafío radicó en traducir requerimientos técnicos densos, como la arquitectura de software integrada y las bases de datos centralizadas, en una hoja de ruta visual y clara para estudiantes de ingeniería en sistemas."
     }
    ],
    "toc": {
     "es": "El desafío y la solución",
     "en": "The challenge and the solution"
    }
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "en": "The solution: the LXD approach",
     "es": "La solución: el enfoque LXD"
    },
    "items": [
     {
      "lead": {
       "en": "Visual storytelling",
       "es": "Narrativa visual"
      },
      "body": {
       "en": "PowToon motion graphics create a dynamic narrative that defines what an ERP is: a set of integrated programmes managing vital business operations globally.",
       "es": "Usé PowToon (motion graphics) para crear una narrativa dinámica que define qué es un ERP: un conjunto de programas integrados que gestionan operaciones vitales del negocio a nivel global."
      }
     },
     {
      "lead": {
       "en": "Framework simplification",
       "es": "Simplificación de marcos"
      },
      "body": {
       "en": "The content is structured to highlight the ten critical success factors for implementation, from senior management commitment to technical best practices and quality assurance.",
       "es": "Estructuré el contenido para destacar los diez factores críticos de éxito para la implementación, desde el compromiso de la alta dirección hasta las buenas prácticas técnicas y el aseguramiento de calidad."
      }
     },
     {
      "lead": {
       "en": "Pedagogical impact",
       "es": "Impacto pedagógico"
      },
      "body": {
       "en": "The whiteboard animation style reduced cognitive load, letting students visualise the flow of information across an entire organisation.",
       "es": "El estilo de animación de pizarra redujo la carga cognitiva, permitiendo a los estudiantes visualizar el flujo de información a través de toda una organización."
      }
     }
    ]
   },
   {
    "t": "embed",
    "kind": "video",
    "h": {
     "en": "Watch the video",
     "es": "Ver el video"
    },
    "src": "https://www.youtube.com/embed/cZjwPcqWMOc",
    "host": "YouTube",
    "label": {
     "en": "ERP motion graphics video",
     "es": "Video de motion graphics de ERP"
    },
    "open": "https://www.youtube.com/watch?v=cZjwPcqWMOc"
   }
  ],
  "outcome": null
 },
 "primer-empleo": {
  "cat": "cap",
  "touch": "it",
  "title": {
   "es": "Del aula al primer trabajo",
   "en": "From the classroom to a first job"
  },
  "subtitle": {
   "es": "Un taller de dos horas sobre primer empleo, diseñado como un recorrido web de once paradas y cuatro apartados especiales, al que los estudiantes pueden volver cuando busquen su pasantía o su primer trabajo.",
   "en": "A two-hour first-job workshop, designed as an eleven-stop web journey with four special sections, that students can come back to when they look for their internship or their first job."
  },
  "chips": {
   "es": [
    "LXD",
    "UX/UI",
    "Design system",
    "Accesibilidad"
   ],
   "en": [
    "LXD",
    "UX/UI",
    "Design system",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "Los estudiantes llegan a sus primeras prácticas sin CV, sin LinkedIn y sin haber pasado por una entrevista, y un taller de dos horas se olvida antes de que lo necesiten.",
    "en": "Students reach their first placement with no CV, no LinkedIn and no interview experience, and a two-hour workshop is forgotten before they need it."
   },
   "solution": {
    "es": "Un recorrido web de once paradas y cuatro apartados especiales, que sirve para dictar el taller en modo presentación y para volver a consultarlo después.",
    "en": "An eleven-stop web journey with four special sections, used to teach the workshop in presentation mode and to come back to later."
   },
   "results": [
    {
     "v": "45 min",
     "l": {
      "es": "de actividad en clase, 65 con el simulacro de entrevista",
      "en": "of hands-on work in class, 65 with the mock interview"
     }
    },
    {
     "v": "5",
     "l": {
      "es": "plantillas para copiar y salir con algo propio hecho",
      "en": "copy-ready templates to leave with something of their own"
     }
    },
    {
     "t": {
      "es": "Dictado con 6to año entre el 26 de octubre y el 4 de noviembre de 2026.",
      "en": "Taught to 6th-year students between 26 October and 4 November 2026."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Diseño UX/UI e instruccional, investigación y redacción del contenido, desarrollo del sitio (HTML/CSS/JS) y co-docencia del taller con Julieta Taraborrelli",
    "en": "UX/UI and instructional design, research and content writing, site development (HTML/CSS/JS) and co-facilitation of the workshop with Julieta Taraborrelli"
   },
   "timeline": {
    "es": "Octubre a noviembre 2026",
    "en": "October to November 2026"
   },
   "context": {
    "es": "6to año de secundaria técnica, Instituto Leonardo Murialdo, antes de las 200 horas de prácticas profesionalizantes de 7mo",
    "en": "Sixth year of technical secondary school, Instituto Leonardo Murialdo, ahead of the 200 hours of professional internships in seventh year"
   },
   "stack": [
    "HTML/CSS/JS",
    "GitHub Pages",
    "Web Storage (localStorage)",
    "HyperFrames",
    "GSAP"
   ],
   "methods": [
    "Doble Diamante",
    "Benchmarking",
    "Proto-persona",
    "How Might We",
    "WCAG 2.2 AA",
    "APA 7"
   ]
  },
  "links": [
   {
    "label": {
     "es": "Sitio del taller (en vivo)",
     "en": "Workshop site (live)"
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/"
   },
   {
    "label": {
     "es": "Escape room de finanzas (en vivo)",
     "en": "Finance escape room (live)"
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/escape/"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El problema",
     "en": "The problem"
    },
    "body": {
     "es": "Armar una capacitación de dos horas sobre currículum, búsqueda de primer empleo y entrevistas que les permita a los estudiantes volver a acceder a la información después, y usarla cuando la necesiten.",
     "en": "Build a two-hour training on CVs, first-job search and interviews that lets students come back to the information afterwards and use it when they need it."
    },
    "p": [
     {
      "es": "Así se planteó el encargo al empezar el proyecto. El taller surge de una necesidad de los propios estudiantes, de cara a las prácticas profesionalizantes de 7mo año.",
      "en": "That is how the brief was framed at the start of the project. The workshop comes from a need raised by the students themselves, ahead of the seventh-year professional internships."
     }
    ],
    "toc": {
     "es": "El problema y el proceso",
     "en": "The problem and the process"
    }
   },
   {
    "t": "diamond",
    "join": true,
    "h": {
     "es": "Proceso: Doble Diamante",
     "en": "Process: Double Diamond"
    },
    "note": {
     "es": "El proyecto se ordenó en los cuatro momentos del Doble Diamante: entender el problema, definir qué resolver, explorar cómo y entregar algo que funcione.",
     "en": "The project followed the four moments of the Double Diamond: understand the problem, define what to solve, explore how, and deliver something that works."
    },
    "ends": [
     {
      "es": "Necesidad",
      "en": "Need"
     },
     {
      "es": "Problema definido",
      "en": "Defined problem"
     },
     {
      "es": "Sitio publicado",
      "en": "Published site"
     }
    ],
    "phases": [
     {
      "name": "Discover",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Qué necesitan antes de su primera búsqueda?",
       "en": "What do they need before their first search?"
      },
      "items": {
       "es": [
        "Necesidades del aula",
        "Mercado laboral con datos",
        "Benchmarking"
       ],
       "en": [
        "Classroom needs",
        "Job market data",
        "Benchmarking"
       ]
      }
     },
     {
      "name": "Define",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Qué resolvemos en dos horas?",
       "en": "What do we solve in two hours?"
      },
      "items": {
       "es": [
        "Proto-persona",
        "How Might We",
        "Requisitos",
        "Criterios de éxito"
       ],
       "en": [
        "Proto-persona",
        "How Might We",
        "Requirements",
        "Success criteria"
       ]
      }
     },
     {
      "name": "Develop",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Cómo lo resolvemos?",
       "en": "How do we solve it?"
      },
      "items": {
       "es": [
        "Inspiración visual",
        "Arquitectura en dos líneas",
        "Task flow",
        "Design system"
       ],
       "en": [
        "Visual inspiration",
        "Two-line architecture",
        "Task flow",
        "Design system"
       ]
      }
     },
     {
      "name": "Deliver",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Funciona? ¿Qué entregamos?",
       "en": "Does it work? What do we ship?"
      },
      "items": {
       "es": [
        "Sitio publicado",
        "Auditoría de accesibilidad",
        "Revisión",
        "Próximos pasos"
       ],
       "en": [
        "Published site",
        "Accessibility audit",
        "Review",
        "Next steps"
       ]
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "name": "Discover",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Entender qué necesita alguien de 17 años antes de su primera búsqueda, con datos actuales y no con miedo.",
     "en": "Understand what a 17-year-old needs before their first job search, with current data rather than fear."
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "De dónde surge",
     "en": "Where it comes from"
    },
    "p": [
     {
      "es": "En 7mo año, cada estudiante del Instituto Leonardo Murialdo hace 200 horas de prácticas profesionalizantes, en cualquiera de las cinco modalidades de la institución. Para muchos es la primera experiencia laboral, y llegan sin CV, sin LinkedIn y sin haber pasado nunca por una entrevista.",
      "en": "In seventh year, every student at Instituto Leonardo Murialdo completes 200 hours of professional internships, in any of the school's five tracks. For many it is their first work experience, and they arrive with no CV, no LinkedIn and no interview behind them."
     },
     {
      "es": "Las preguntas de los estudiantes no eran solo técnicas. Aparecían el miedo al rechazo, la duda sobre qué carrera elegir y cómo saber si algo les gusta. Por eso el taller combina herramientas concretas (CV, LinkedIn, entrevistas) con autoconocimiento y manejo de la frustración.",
      "en": "Students' questions were not only technical. Fear of rejection came up, along with doubts about which degree to choose and how to know whether they like something. That is why the workshop combines concrete tools (CV, LinkedIn, interviews) with self-knowledge and handling frustration."
     }
    ]
   },
   {
    "t": "bars",
    "h": {
     "es": "El mercado laboral, con datos",
     "en": "The job market, with data"
    },
    "note": {
     "es": "Fuente: INDEC (2026). Son las cifras con las que abre la primera parada del recorrido.",
     "en": "Source: INDEC (2026). These are the figures that open the first stop of the journey."
    },
    "title": {
     "es": "Desocupación en Argentina, segundo trimestre de 2026",
     "en": "Unemployment in Argentina, second quarter of 2026"
    },
    "lead": 1,
    "rows": [
     {
      "label": {
       "es": "Desocupación general",
       "en": "Overall unemployment"
      },
      "v": 7.9
     },
     {
      "label": {
       "es": "Mujeres de 14 a 29 años",
       "en": "Women aged 14-29"
      },
      "v": 17.1
     },
     {
      "label": {
       "es": "Varones de 14 a 29 años",
       "en": "Men aged 14-29"
      },
      "v": 14.1
     }
    ]
   },
   {
    "t": "bars",
    "h": {
     "es": "Un proceso que cambió: entrevistas con IA",
     "en": "A process that has changed: AI interviews"
    },
    "note": {
     "es": "Fuente: Greenhouse (2026b), encuesta a personas que buscaban trabajo en Estados Unidos. En el sitio se contrasta con otra encuesta de signo opuesto y se aclara quién hizo cada una.",
     "en": "Source: Greenhouse (2026b), a survey of job seekers in the United States. On the site it is contrasted with another survey pointing the other way, and who ran each one is made explicit."
    },
    "title": {
     "es": "Personas que buscaban trabajo y su experiencia con entrevistas con IA",
     "en": "Job seekers and their experience with AI interviews"
    },
    "rows": [
     {
      "label": {
       "es": "Ya tuvo una entrevista con IA",
       "en": "Have had an AI interview"
      },
      "v": 63
     },
     {
      "label": {
       "es": "No fue avisada antes de que la evaluaba una IA",
       "en": "Were not told beforehand that AI would assess them"
      },
      "v": 70
     },
     {
      "label": {
       "es": "Quiere poder pedir una entrevista con una persona",
       "en": "Want the option of an interview with a person"
      },
      "v": 46
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Benchmarking: documentación técnica",
     "en": "Benchmarking: technical documentation"
    },
    "note": {
     "es": "Si el taller iba a ser un sitio de consulta, la referencia no eran otros talleres sino la documentación que la gente usa para resolver algo concreto. Analicé dos de las más usadas.",
     "en": "If the workshop was going to be a reference site, the benchmark was not other workshops but the documentation people use to solve something specific. I analysed two of the most widely used."
    },
    "cta": {
     "es": "Ver referencia",
     "en": "View reference"
    },
    "cols": 2,
    "items": [
     {
      "title": "Microsoft Learn",
      "tag": {
       "es": "Página de referencia de un comando (chkdsk)",
       "en": "Command reference page (chkdsk)"
      },
      "body": {
       "es": "Resumen breve arriba, pestañas para variantes del mismo contenido, cuadros de Nota e Importante, bloques de código, tablas de parámetros e índice lateral de la página.",
       "en": "A short summary at the top, tabs for variants of the same content, Note and Important boxes, code blocks, parameter tables and an on-page side index."
      },
      "url": "https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/chkdsk",
      "img": {
       "src": "primer-empleo-bm-microsoft.jpg",
       "w": 1600,
       "h": 1000,
       "alt": {
        "es": "Página de chkdsk en Microsoft Learn: índice de comandos a la izquierda, resumen breve, dos cuadros de Importante y el índice del artículo a la derecha.",
        "en": "The chkdsk page on Microsoft Learn: command index on the left, a short summary, two Important boxes and the article index on the right."
       }
      }
     },
     {
      "title": "Google Cloud Documentation",
      "tag": {
       "es": "Portada de la documentación",
       "en": "Documentation home"
      },
      "body": {
       "es": "Contenido agrupado por áreas, cada enlace como tarjeta con título y una descripción de una línea, y un punto de entrada claro para empezar.",
       "en": "Content grouped by area, each link as a card with a title and a one-line description, and a clear entry point to get started."
      },
      "url": "https://docs.cloud.google.com/docs",
      "img": {
       "src": "primer-empleo-bm-google.jpg",
       "w": 1600,
       "h": 1000,
       "alt": {
        "es": "Portada de la documentación de Google Cloud: menú por áreas a la izquierda y tarjetas con título y una descripción breve bajo el título Descubrimiento.",
        "en": "Google Cloud documentation home: a menu by area on the left and cards with a title and a short description under the Discovery heading."
       }
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "02",
    "name": "Define",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Decidir qué entra en dos horas y qué tiene que quedar disponible para después.",
     "en": "Decide what fits in two hours and what has to stay available for later."
    }
   },
   {
    "t": "kv",
    "h": {
     "es": "Proto-persona",
     "en": "Proto-persona"
    },
    "note": {
     "es": "Construida a partir de la experiencia docente con los cursos, no de una investigación formal. Representa al estudiante para el que se diseñó el taller.",
     "en": "Built from teaching experience with the classes, not from formal research. It represents the student the workshop was designed for."
    },
    "items": [
     {
      "k": {
       "es": "Quién",
       "en": "Who"
      },
      "v": {
       "es": "Estudiante de 6to año de secundaria técnica, 17 años, a un año de sus prácticas profesionalizantes y de elegir qué estudiar.",
       "en": "A sixth-year technical secondary student, 17 years old, one year away from their internship and from choosing what to study."
      }
     },
     {
      "k": {
       "es": "Qué necesita",
       "en": "Needs"
      },
      "v": {
       "es": "Un CV, un perfil de LinkedIn y una forma de contar lo que sabe hacer, aunque todavía no tenga experiencia formal.",
       "en": "A CV, a LinkedIn profile and a way to explain what they can do, even with no formal experience yet."
      }
     },
     {
      "k": {
       "es": "Qué lo frena",
       "en": "Barriers"
      },
      "v": {
       "es": "No sabe si algo le gusta hasta probarlo, le teme al rechazo y no conecta lo que estudia con el trabajo al que podría llegar.",
       "en": "They do not know whether they like something until they try it, they fear rejection and they do not connect what they study with the job they could reach."
      }
     },
     {
      "k": {
       "es": "Qué no sabe que no sabe",
       "en": "Unknown unknowns"
      },
      "v": {
       "es": "Que muchos CV los lee primero un sistema, que la entrevista puede hacerla una IA y que la ofimática se da por sabida en casi cualquier rubro.",
       "en": "That many CVs are read by a system first, that the interview may be run by AI, and that office software skills are taken for granted in almost every field."
      }
     },
     {
      "k": {
       "es": "Cuándo lo va a necesitar",
       "en": "When they will need it"
      },
      "v": {
       "es": "No el día del taller, sino meses después: al empezar las prácticas, al postularse o al preparar una entrevista.",
       "en": "Not on the day of the workshop, but months later: when the internship starts, when applying, or when preparing for an interview."
      }
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "How Might We",
     "en": "How Might We"
    },
    "cols": 3,
    "items": [
     {
      "tag": {
       "es": "HMW 1",
       "en": "HMW 1"
      },
      "body": {
       "es": "¿Cómo podríamos lograr que lo trabajado en dos horas siga siendo útil meses después, cuando el estudiante realmente lo necesite?",
       "en": "How might we keep what is covered in two hours useful months later, when the student actually needs it?"
      }
     },
     {
      "tag": {
       "es": "HMW 2",
       "en": "HMW 2"
      },
      "body": {
       "es": "¿Cómo podríamos hacer que el taller sea más práctica que exposición, sin perder el contenido de base?",
       "en": "How might we make the workshop more practice than lecture, without losing the core content?"
      }
     },
     {
      "tag": {
       "es": "HMW 3",
       "en": "HMW 3"
      },
      "body": {
       "es": "¿Cómo podríamos hablar de rechazo y frustración sin asustar, y con datos reales del mercado?",
       "en": "How might we talk about rejection and frustration without scaring anyone, and with real market data?"
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Requisitos de partida",
     "en": "Starting requirements"
    },
    "items": [
     {
      "lead": {
       "es": "Formato",
       "en": "Format"
      },
      "body": {
       "es": "Una jornada de dos horas, con el contenido disponible después para volver a consultarlo.",
       "en": "A single two-hour session, with the content available afterwards to come back to."
      }
     },
     {
      "lead": {
       "es": "Estructura",
       "en": "Structure"
      },
      "body": {
       "es": "Un sitio con varios apartados que se recorra como un roadmap, publicado como repositorio en GitHub.",
       "en": "A site with several sections that reads as a roadmap, published as a GitHub repository."
      }
     },
     {
      "lead": {
       "es": "Contenido",
       "en": "Content"
      },
      "body": {
       "es": "CV, LinkedIn, prácticas profesionalizantes, autoconocimiento, frustración y autoperdón, habilidades blandas, ofimática, idiomas, proyectos propios y entrevistas con personas y con IA.",
       "en": "CVs, LinkedIn, professional internships, self-knowledge, frustration and self-forgiveness, soft skills, office software, languages, personal projects, and interviews with people and with AI."
      }
     },
     {
      "lead": {
       "es": "Diseño",
       "en": "Design"
      },
      "body": {
       "es": "Evitar el aspecto genérico de las interfaces generadas por IA: una dirección visual propia y reconocible.",
       "en": "Avoid the generic look of AI-generated interfaces: a visual direction of its own, recognisable at a glance."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Criterios de éxito del diseño",
     "en": "Design success criteria"
    },
    "note": {
     "es": "Son los criterios con los que se diseñó el taller, para contrastarlos con lo que pasó en el aula.",
     "en": "These are the criteria the workshop was designed against, to be checked against what happened in class."
    },
    "items": {
     "es": [
      "Llegar a cualquier parada en un clic desde el mapa o el panel lateral.",
      "Que más de la mitad del tiempo del taller sea actividad práctica.",
      "Salir del taller con al menos un producto propio: el mapa personal, el perfil del CV o el pitch.",
      "Retomar el recorrido donde se dejó, sin crear una cuenta.",
      "Cumplir WCAG 2.2 AA en los dos temas, claro y oscuro.",
      "Poder actualizar los datos cada año sin rehacer el sitio."
     ],
     "en": [
      "Reach any stop in one click from the map or the side panel.",
      "More than half of the workshop time is hands-on activity.",
      "Leave the workshop with at least one thing of their own: the personal map, the CV profile or the pitch.",
      "Pick up the journey where it was left, with no account.",
      "Meet WCAG 2.2 AA in both the light and dark themes.",
      "Update the data every year without rebuilding the site."
     ]
    }
   },
   {
    "t": "phase",
    "n": "03",
    "name": "Develop",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Explorar cómo convertir un temario largo en un recorrido corto, claro y que se pueda retomar.",
     "en": "Explore how to turn a long syllabus into a short, clear journey that can be picked up again."
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Inspiración visual",
     "en": "Visual inspiration"
    },
    "note": {
     "es": "Para la interfaz busqué plataformas educativas que muestren el progreso y conecten temas entre sí, en lugar de listarlos. Las imágenes son de sus autores y se muestran solo como referencia.",
     "en": "For the interface I looked at learning platforms that show progress and connect topics to each other instead of just listing them. The images belong to their authors and are shown for reference only."
    },
    "cta": {
     "es": "Ver en Dribbble",
     "en": "View on Dribbble"
    },
    "cols": 2,
    "items": [
     {
      "title": "Interactive Learning Web Design",
      "tag": {
       "es": "Dribbble, por Tino",
       "en": "Dribbble, by Tino"
      },
      "body": {
       "es": "Un mapa de nodos que conecta materias, accesos grandes por color y una tarjeta propia para el progreso.",
       "en": "A node map connecting subjects, large colour-coded entry tiles and a dedicated progress card."
      },
      "url": "https://dribbble.com/shots/26665232-Interactive-Learning-Web-Design",
      "img": {
       "src": "primer-empleo-ref-nodos.jpg",
       "w": 1024,
       "h": 768,
       "alt": {
        "es": "Diseño de referencia de una plataforma educativa: cuatro accesos grandes de color a la izquierda y, a la derecha, un mapa de nodos que conecta materias con líneas punteadas.",
        "en": "Reference design for a learning platform: four large colour tiles on the left and, on the right, a node map connecting subjects with dashed lines."
       }
      }
     },
     {
      "title": "Education web design",
      "tag": {
       "es": "Dribbble, por Anastasia Golovko para Tino",
       "en": "Dribbble, by Anastasia Golovko for Tino"
      },
      "body": {
       "es": "Porcentaje de avance siempre visible en el encabezado y una lista de lecciones donde cada una muestra su duración.",
       "en": "Progress percentage always visible in the header and a list of lessons where each one shows its duration."
      },
      "url": "https://dribbble.com/shots/25815073-Education-web-design",
      "img": {
       "src": "primer-empleo-ref-progreso.jpg",
       "w": 1024,
       "h": 768,
       "alt": {
        "es": "Diseño de referencia de un panel educativo: porcentaje de progreso en el encabezado, mosaicos de color, un gráfico de barras semanal y una lista de lecciones con su duración.",
        "en": "Reference design for a learning dashboard: progress percentage in the header, colour tiles, a weekly bar chart and a list of lessons with their duration."
       }
      }
     }
    ]
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "De la referencia al taller",
     "en": "From reference to workshop"
    },
    "note": {
     "es": "Cada patrón que se llevó al sitio, de dónde viene y para qué se usa.",
     "en": "Each pattern brought into the site, where it comes from and what it is used for."
    },
    "cols": {
     "dim": {
      "es": "Referencia",
      "en": "Reference"
     },
     "before": {
      "es": "Patrón",
      "en": "Pattern"
     },
     "after": {
      "es": "Cómo se aplicó en el taller",
      "en": "How it was applied in the workshop"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Microsoft Learn",
       "en": "Microsoft Learn"
      },
      "before": {
       "es": "Pestañas para variantes del mismo contenido",
       "en": "Tabs for variants of the same content"
      },
      "after": {
       "es": "Los tres CV de ejemplo, uno por modalidad, en pestañas",
       "en": "The three sample CVs, one per track, in tabs"
      }
     },
     {
      "dim": {
       "es": "Microsoft Learn",
       "en": "Microsoft Learn"
      },
      "before": {
       "es": "Cuadros de Nota e Importante",
       "en": "Note and Important boxes"
      },
      "after": {
       "es": "Avisos como \"Sobre la foto y los datos personales\" y \"Si usás Canva\"",
       "en": "Notices such as \"About the photo and personal details\" and \"If you use Canva\""
      }
     },
     {
      "dim": {
       "es": "Microsoft Learn",
       "en": "Microsoft Learn"
      },
      "before": {
       "es": "Bloques de código para copiar",
       "en": "Copyable code blocks"
      },
      "after": {
       "es": "Plantillas en bloque monoespaciado con botón Copiar",
       "en": "Templates in a monospaced block with a Copy button"
      }
     },
     {
      "dim": {
       "es": "Microsoft Learn",
       "en": "Microsoft Learn"
      },
      "before": {
       "es": "Índice lateral de la página",
       "en": "On-page side index"
      },
      "after": {
       "es": "\"Tu recorrido\": las once paradas siempre a mano",
       "en": "\"Your journey\": the eleven stops always at hand"
      }
     },
     {
      "dim": {
       "es": "Google Cloud Documentation",
       "en": "Google Cloud Documentation"
      },
      "before": {
       "es": "Contenido agrupado por áreas y una entrada clara para empezar",
       "en": "Content grouped by area and a clear entry point"
      },
      "after": {
       "es": "Dos líneas temáticas y el botón \"Empezar el recorrido\"",
       "en": "Two themed lines and the \"Start the journey\" button"
      }
     },
     {
      "dim": {
       "es": "Interactive Learning Web Design",
       "en": "Interactive Learning Web Design"
      },
      "before": {
       "es": "Mapa de nodos que conecta materias",
       "en": "Node map connecting subjects"
      },
      "after": {
       "es": "El mapa de subte que conecta las paradas",
       "en": "The metro map connecting the stops"
      }
     },
     {
      "dim": {
       "es": "Education web design",
       "en": "Education web design"
      },
      "before": {
       "es": "Progreso visible y duración por lección",
       "en": "Visible progress and duration per lesson"
      },
      "after": {
       "es": "Contador \"0 de 10 paradas\" en la barra y minutos en cada parada",
       "en": "A \"0 of 10 stops\" counter in the bar and minutes on every stop"
      }
     }
    ]
   },
   {
    "t": "metro",
    "h": {
     "es": "Arquitectura: dos líneas, once paradas",
     "en": "Architecture: two lines, eleven stops"
    },
    "note": {
     "es": "La metáfora de un mapa de subte ordena el taller: una línea por hora y los minutos de cada parada a la vista. La entrevista se dividió en dos paradas, con personas y con inteligencia artificial, y la segunda línea pasó a tener seis.",
     "en": "A metro map metaphor organises the workshop: one line per hour, with the minutes for each stop in plain sight. The interview was split into two stops, with people and with artificial intelligence, so the second line now has six."
    },
    "unit": {
     "es": "min",
     "en": "min"
    },
    "lines": [
     {
      "name": {
       "es": "Línea 1: Conocerte y prepararte",
       "en": "Line 1: Know and prepare yourself"
      },
      "sub": {
       "es": "Primera hora",
       "en": "First hour"
      },
      "stops": [
       {
        "n": 1,
        "name": {
         "es": "El mundo laboral hoy",
         "en": "Today’s job market"
        },
        "min": 8
       },
       {
        "n": 2,
        "name": {
         "es": "Autoconocimiento",
         "en": "Self-knowledge"
        },
        "min": 12
       },
       {
        "n": 3,
        "name": {
         "es": "Frustración y autoperdón",
         "en": "Frustration and self-forgiveness"
        },
        "min": 10
       },
       {
        "n": 4,
        "name": {
         "es": "Prácticas profesionalizantes",
         "en": "Professional internships"
        },
        "min": 10
       },
       {
        "n": 5,
        "name": {
         "es": "Habilidades, tecnología e idiomas",
         "en": "Skills, technology and languages"
        },
        "min": 12
       }
      ]
     },
     {
      "name": {
       "es": "Línea 2: Mostrarte",
       "en": "Line 2: Show yourself"
      },
      "sub": {
       "es": "Segunda hora",
       "en": "Second hour"
      },
      "stops": [
       {
        "n": 6,
        "name": {
         "es": "CV para ATS",
         "en": "ATS-ready CV"
        },
        "min": 15
       },
       {
        "n": 7,
        "name": {
         "es": "LinkedIn",
         "en": "LinkedIn"
        },
        "min": 8
       },
       {
        "n": 8,
        "name": {
         "es": "Porfolio y proyectos propios",
         "en": "Portfolio and own projects"
        },
        "min": 7
       },
       {
        "n": 9,
        "name": {
         "es": "La entrevista laboral",
         "en": "The job interview"
        },
        "min": 14
       },
       {
        "n": 10,
        "name": {
         "es": "Entrevistas con IA",
         "en": "AI interviews"
        },
        "min": 8
       },
       {
        "n": 11,
        "name": {
         "es": "Tu plan de 30 días",
         "en": "Your 30-day plan"
        },
        "min": 5
       }
      ]
     }
    ],
    "total": {
     "es": "Total",
     "en": "Total"
    }
   },
   {
    "t": "split",
    "h": {
     "es": "Dónde va el tiempo",
     "en": "Where the time goes"
    },
    "note": {
     "es": "Minutos planificados por parada. Las paradas suman 109 minutos y 45 son actividad en clase. El simulacro de entrevista en parejas (20 min) es una actividad extra: si hay tiempo se hace en el aula; si no, queda de tarea o para un nuevo encuentro con alguna de las docentes. Con el simulacro, la práctica llega a 65 de 129 minutos, más de la mitad.",
     "en": "Planned minutes per stop. The stops add up to 109 minutes and 45 of them are in-class activity. The paired mock interview (20 min) is an extra activity: if there is time it is done in class; if not, it becomes homework or is done in a new session with one of the teachers. With the mock interview, hands-on time reaches 65 of 129 minutes, more than half."
    },
    "title": {
     "es": "Minutos de actividad y de exposición por parada",
     "en": "Activity and explanation minutes per stop"
    },
    "legend": {
     "a": {
      "es": "Actividad",
      "en": "Activity"
     },
     "b": {
      "es": "Idea clave y ejemplos",
      "en": "Key idea and examples"
     }
    },
    "unit": {
     "es": "min",
     "en": "min"
    },
    "rows": [
     {
      "label": {
       "es": "1. El mundo laboral hoy",
       "en": "1. Today’s job market"
      },
      "min": 8,
      "act": 5
     },
     {
      "label": {
       "es": "2. Autoconocimiento",
       "en": "2. Self-knowledge"
      },
      "min": 12,
      "act": 10
     },
     {
      "label": {
       "es": "3. Frustración y autoperdón",
       "en": "3. Frustration and self-forgiveness"
      },
      "min": 10,
      "act": 5
     },
     {
      "label": {
       "es": "4. Prácticas profesionalizantes",
       "en": "4. Professional internships"
      },
      "min": 10,
      "act": 0
     },
     {
      "label": {
       "es": "5. Habilidades, tecnología e idiomas",
       "en": "5. Skills, technology and languages"
      },
      "min": 12,
      "act": 5
     },
     {
      "label": {
       "es": "6. CV para ATS",
       "en": "6. ATS-ready CV"
      },
      "min": 15,
      "act": 10
     },
     {
      "label": {
       "es": "7. LinkedIn",
       "en": "7. LinkedIn"
      },
      "min": 8,
      "act": 0
     },
     {
      "label": {
       "es": "8. Porfolio y proyectos propios",
       "en": "8. Portfolio and own projects"
      },
      "min": 7,
      "act": 5
     },
     {
      "label": {
       "es": "9. La entrevista laboral",
       "en": "9. The job interview"
      },
      "min": 14,
      "act": 0
     },
     {
      "label": {
       "es": "10. Entrevistas con IA",
       "en": "10. AI interviews"
      },
      "min": 8,
      "act": 5
     },
     {
      "label": {
       "es": "11. Tu plan de 30 días",
       "en": "11. Your 30-day plan"
      },
      "min": 5,
      "act": 0
     }
    ],
    "total": {
     "es": "Total",
     "en": "Total"
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Apartados especiales",
     "en": "Special sections"
    },
    "note": {
     "es": "Temas que suman pero no entran en las dos horas. Viven en el mismo sitio, fuera del recorrido, y en la presentación solo se mencionan.",
     "en": "Topics that add value but do not fit into the two hours. They live on the same site, outside the journey, and are only mentioned in the presentation."
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "El recibo de sueldo",
       "en": "The payslip"
      },
      "body": {
       "es": "Aportes, contribuciones y cómo leer el primer recibo, sobre un recibo de ejemplo con datos ficticios y marcas numeradas, ordenado según el Decreto N.º 407/2026.",
       "en": "Employee and employer contributions and how to read a first payslip, using a sample payslip with fictional data and numbered markers, laid out as set by Decree No. 407/2026."
      },
      "img": {
       "src": "primer-empleo-recibo.jpg",
       "w": 1200,
       "h": 1643,
       "alt": {
        "es": "Recibo de sueldo de ejemplo con datos ficticios: datos del empleador y del trabajador, costo total del empleador, sueldo bruto, descuentos y sueldo neto, con marcas numeradas y un gráfico de torta de la composición salarial.",
        "en": "Sample payslip with fictional data: employer and employee details, total employer cost, gross pay, deductions and net pay, with numbered markers and a pie chart of the pay breakdown."
       }
      }
     },
     {
      "title": {
       "es": "Finanzas personales",
       "en": "Personal finance"
      },
      "body": {
       "es": "Un aporte del Lic. Kevin Giampieri: mentalidad, salida de deudas, presupuesto e inversión, con calculadoras interactivas para repartir el ingreso y ver cómo crece el interés compuesto. Al cierre, un banner lleva al escape room Tu primer sueldo, publicado como caso aparte.",
       "en": "A contribution by Kevin Giampieri: mindset, getting out of debt, budgeting and investing, with interactive calculators to split income and watch compound interest grow. At the end, a banner leads to the Your first paycheck escape room, published as a separate case."
      },
      "img": {
       "src": "primer-empleo-interes.jpg",
       "w": 1400,
       "h": 1079,
       "alt": {
        "es": "Calculadora de interés compuesto: inversión inicial, aporte por mes, tasa anual y años; debajo, el capital final, el total aportado, los intereses ganados y un gráfico de barras que crece año por año.",
        "en": "Compound interest calculator: initial investment, monthly contribution, annual rate and years; below, the final capital, total contributed, interest earned and a bar chart that grows year by year."
       }
      }
     },
     {
      "title": {
       "es": "Charla de carreras",
       "en": "Career talk"
      },
      "body": {
       "es": "Cómo funciona la educación superior, qué títulos existen y cómo elegir qué estudiar después de la secundaria, con acceso a la charla, publicada como sitio propio.",
       "en": "How higher education works, which qualifications exist and how to choose what to study after secondary school, with a link to the talk, published as its own site."
      },
      "img": {
       "src": "primer-empleo-charla.jpg",
       "w": 1400,
       "h": 875,
       "alt": {
        "es": "Vista previa de la charla de carreras dentro del taller: captura del sitio de la charla, su descripción y el botón Ver la charla.",
        "en": "Preview of the career talk inside the workshop: a screenshot of the talk site, its description and the View the talk button."
       }
      }
     },
     {
      "title": {
       "es": "El servidor de Lourdes",
       "en": "Lourdes’s server"
      },
      "body": {
       "es": "Cursos gratuitos, recursos y guías ordenados por tema, para seguir aprendiendo después del taller.",
       "en": "Free courses, resources and guides organised by topic, to keep learning after the workshop."
      },
      "img": {
       "src": "primer-empleo-servidor.jpg",
       "w": 1400,
       "h": 875,
       "alt": {
        "es": "Vista previa del servidor de Lourdes dentro del taller: captura del sitio con cursos, recursos y threads, su descripción y el botón Entrar al servidor.",
        "en": "Preview of Lourdes’s server inside the workshop: a screenshot of the site with courses, resources and threads, its description and the Enter the server button."
       }
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Decisiones de diseño",
     "en": "Design decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Una parada por vez",
       "en": "One stop at a time"
      },
      "body": {
       "es": "El sitio muestra solo la parada elegida. Al cambiar, el foco pasa al título de la nueva parada, para que quien usa teclado o lector de pantalla no se pierda. Sin JavaScript se ve todo el contenido.",
       "en": "The site shows only the chosen stop. When it changes, focus moves to the new stop's heading, so keyboard and screen reader users do not get lost. Without JavaScript, all the content is shown."
      }
     },
     {
      "lead": {
       "es": "Retomar donde se dejó",
       "en": "Pick up where you left off"
      },
      "body": {
       "es": "Cada parada se marca como recorrida y el avance queda en el navegador. Al volver, el sitio abre en la primera parada pendiente. No hay registro ni datos personales que cuidar.",
       "en": "Each stop can be marked as done and progress stays in the browser. On return, the site opens at the first pending stop. No sign-up and no personal data to look after."
      }
     },
     {
      "lead": {
       "es": "Una estructura fija por parada",
       "en": "One fixed structure per stop"
      },
      "body": {
       "es": "Idea clave, ejemplos y una actividad corta. Saber qué viene baja la carga de orientarse y deja la atención para el contenido.",
       "en": "Key idea, examples and a short activity. Knowing what comes next lowers the effort of finding your way and leaves attention for the content."
      }
     },
     {
      "lead": {
       "es": "Actividades encadenadas",
       "en": "Chained activities"
      },
      "body": {
       "es": "El aviso que se busca en la parada 1 se trabaja en el CV de la parada 6, y las habilidades con ejemplo de la parada 5 vuelven en el simulacro de entrevista de la parada 9.",
       "en": "The job ad found at stop 1 becomes the target of the CV at stop 6, and the skills with examples from stop 5 come back in the mock interview at stop 9."
      }
     },
     {
      "lead": {
       "es": "Así no, así sí",
       "en": "Not like this, like this"
      },
      "body": {
       "es": "Logros frente a tareas, debilidades bien y mal contadas, cómo explicar un cambio de trabajo: cada concepto aparece con un ejemplo que falla y otro que funciona, uno al lado del otro.",
       "en": "Achievements versus tasks, weaknesses told well and badly, how to explain a job change: every concept appears with an example that fails and one that works, side by side."
      }
     },
     {
      "lead": {
       "es": "Plantillas para copiar",
       "en": "Copy-ready templates"
      },
      "body": {
       "es": "Mapa personal, bitácora de prácticas, CV de una página y pitch de 60 segundos se copian con un botón y se completan con datos reales.",
       "en": "Personal map, internship log, one-page CV and 60-second pitch are copied with one click and filled in with real data."
      }
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Task flow",
     "en": "Task flow"
    },
    "note": {
     "es": "La tarea núcleo: recorrer una parada y llevarse algo hecho.",
     "en": "The core task: going through a stop and leaving with something done."
    },
    "steps": {
     "es": [
      "Entra al sitio y abre la primera parada pendiente",
      "Mira el mapa o el panel y elige una parada",
      "Lee la idea clave y los ejemplos",
      "Hace la actividad o copia la plantilla",
      "Completa la plantilla con sus datos reales",
      "Marca la parada como recorrida",
      "Sigue a la próxima parada o vuelve al mapa",
      "Vuelve más adelante a la parada que necesita"
     ],
     "en": [
      "Enters the site and lands on the first pending stop",
      "Looks at the map or the panel and picks a stop",
      "Reads the key idea and the examples",
      "Does the activity or copies the template",
      "Fills in the template with real details",
      "Marks the stop as done",
      "Moves on to the next stop or goes back to the map",
      "Comes back later to the stop they need"
     ]
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Piezas clave del sitio",
     "en": "Key pieces of the site"
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "Así te lee el ATS",
       "en": "How the ATS reads you"
      },
      "body": {
       "es": "Un CV atractivo de dos columnas con seis problemas numerados y, debajo, el texto que un sistema podría extraer de él: sin experiencia ni educación encontradas.",
       "en": "An attractive two-column CV with six numbered problems and, below it, the text a system might extract from it: no experience and no education found."
      },
      "img": {
       "src": "primer-empleo-ats.jpg",
       "w": 1600,
       "h": 1493,
       "alt": {
        "es": "CV de ejemplo en dos columnas con seis problemas numerados para un ATS, la lista que explica cada uno y, debajo, el texto desordenado que extraería el sistema, sin experiencia ni educación encontradas.",
        "en": "A two-column sample CV with six numbered problems for an ATS, the list explaining each one and, below, the jumbled text the system would extract, with no experience and no education found."
       }
      }
     },
     {
      "title": {
       "es": "Cinco CV de ejemplo, cada uno con su aviso",
       "en": "Five sample CVs, each with its job ad"
      },
      "body": {
       "es": "Uno por orientación: soporte IT, electrónica, administración, química y multimedios, con y sin foto. Cada CV responde a un aviso de trabajo y las palabras clave del aviso están marcadas en los dos.",
       "en": "One per track: IT support, electronics, administration, chemistry and multimedia, with and without a photo. Each CV answers a job ad, and the ad’s keywords are marked in both."
      },
      "img": {
       "src": "primer-empleo-cv-aviso.jpg",
       "w": 1400,
       "h": 1629,
       "alt": {
        "es": "Aviso de pasante de soporte técnico IT con sus palabras clave resaltadas y, debajo, el CV de una columna de Tomás Ferreyra, persona ficticia, con las mismas palabras resaltadas.",
        "en": "An IT support internship ad with its keywords highlighted and, below it, the single-column CV of Tomás Ferreyra, a fictional person, with the same words highlighted."
       }
      }
     },
     {
      "title": {
       "es": "Perfiles de LinkedIn de ejemplo",
       "en": "Sample LinkedIn profiles"
      },
      "body": {
       "es": "Dos perfiles ficticios alineados con los CV de ejemplo, con banner, titular en tres partes y un Acerca de breve, más tres claves para la foto: de frente, buena luz y fondo neutro.",
       "en": "Two fictional profiles aligned with the sample CVs, with a banner, a three-part headline and a short About, plus three tips for the photo: facing the camera, good light and a neutral background."
      },
      "img": {
       "src": "primer-empleo-linkedin.jpg",
       "w": 1400,
       "h": 907,
       "alt": {
        "es": "Dos perfiles de LinkedIn de ejemplo, de Sofía Medina y Tomás Ferreyra, personas ficticias, con banner, foto, titular, ubicación y Acerca de, y arriba tres claves para la foto.",
        "en": "Two sample LinkedIn profiles, for Sofía Medina and Tomás Ferreyra, fictional people, with banner, photo, headline, location and About, and three photo tips above."
       }
      }
     },
     {
      "title": {
       "es": "Registro de logros",
       "en": "Achievement log"
      },
      "body": {
       "es": "En la parada de la entrevista, una plantilla para anotar logros con su resultado y cómo se midió. Esas filas después alimentan los logros del CV y las respuestas con el método STAR.",
       "en": "In the interview stop, a template to log achievements with their result and how it was measured. Those rows then feed the CV’s achievements and the STAR answers."
      },
      "img": {
       "src": "primer-empleo-logros.jpg",
       "w": 1400,
       "h": 1417,
       "alt": {
        "es": "Registro de logros con ejemplos completos: una tabla con tres grupos de columnas, el proyecto, el cambio y el impacto, y tres filas de ejemplo.",
        "en": "Achievement log with complete examples: a table with three column groups, the project, the change and the impact, and three example rows."
       }
      }
     },
     {
      "title": {
       "es": "Tres animaciones explicativas",
       "en": "Three explainer animations"
      },
      "body": {
       "es": "Cómo lee un ATS, cómo mejorar el titular de LinkedIn y el método STAR. Se reproducen una vez al entrar en pantalla, tienen pausa, toman los colores del tema y con movimiento reducido muestran el cuadro final.",
       "en": "How an ATS reads, how to improve a LinkedIn headline and the STAR method. They play once when they come into view, can be paused, take the theme's colours and, with reduced motion, show the final frame."
      },
      "img": {
       "src": "primer-empleo-star.jpg",
       "w": 1376,
       "h": 1032,
       "alt": {
        "es": "Cuadro final de la animación del método STAR: situación, tarea, acción y resultado con una respuesta de ejemplo, y una barra que muestra que la acción es la parte más larga.",
        "en": "Final frame of the STAR method animation: situation, task, action and result with a sample answer, and a bar showing that the action is the longest part."
       }
      }
     },
     {
      "title": {
       "es": "Terminal: tu plan de 30 días",
       "en": "Last stop: your 30-day plan"
      },
      "body": {
       "es": "Doce acciones concretas para salir del taller con algo hecho, desde un correo profesional hasta la primera postulación.",
       "en": "Twelve concrete actions to leave the workshop with something done, from a professional email address to the first application."
      },
      "img": {
       "src": "primer-empleo-plan.jpg",
       "w": 1574,
       "h": 1973,
       "alt": {
        "es": "Parada 11, Terminal: tu plan de 30 días. Idea clave sobre fondo amarillo y una lista de trece tareas para marcar, desde completar el mapa personal hasta postularse a un aviso.",
        "en": "Stop 11, last stop: your 30-day plan. A key idea on a yellow background and a list of thirteen tasks to tick off, from completing the personal map to applying for a job ad."
       }
      }
     }
    ]
   },
   {
    "t": "compare",
    "h": {
     "es": "Del CV lindo al CV legible",
     "en": "From a pretty CV to a readable one"
    },
    "note": {
     "es": "Una selección de las reglas de formato que el taller enseña para que el CV pase un sistema de seguimiento de candidatos y también se lea rápido.",
     "en": "A selection of the formatting rules the workshop teaches so that a CV gets through an applicant tracking system and is also quick to read."
    },
    "cols": {
     "dim": {
      "es": "Elemento",
      "en": "Element"
     },
     "before": {
      "es": "Lo que suele hacerse",
      "en": "What people usually do"
     },
     "after": {
      "es": "Lo que el sistema puede leer",
      "en": "What the system can read"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Diseño",
       "en": "Layout"
      },
      "before": {
       "es": "Dos columnas, barras laterales y cuadros de texto",
       "en": "Two columns, sidebars and text boxes"
      },
      "after": {
       "es": "Una sola columna, alineada a la izquierda",
       "en": "A single left-aligned column"
      }
     },
     {
      "dim": {
       "es": "Títulos de sección",
       "en": "Section headings"
      },
      "before": {
       "es": "Creativos, como \"Mi recorrido\"",
       "en": "Creative ones, such as \"My journey\""
      },
      "after": {
       "es": "Comunes: Experiencia laboral, Educación, Habilidades",
       "en": "Standard ones: Work experience, Education, Skills"
      }
     },
     {
      "dim": {
       "es": "Contacto",
       "en": "Contact details"
      },
      "before": {
       "es": "En el encabezado o el pie de página",
       "en": "In the header or footer"
      },
      "after": {
       "es": "En el cuerpo del documento, arriba",
       "en": "In the body of the document, at the top"
      }
     },
     {
      "dim": {
       "es": "Habilidades",
       "en": "Skills"
      },
      "before": {
       "es": "Barras, círculos o estrellas de nivel",
       "en": "Level bars, circles or stars"
      },
      "after": {
       "es": "Texto concreto: \"Excel (tablas dinámicas, BUSCARX)\"",
       "en": "Concrete text: \"Excel (pivot tables, XLOOKUP)\""
      }
     },
     {
      "dim": {
       "es": "Fechas",
       "en": "Dates"
      },
      "before": {
       "es": "Abreviadas: \"'26\"",
       "en": "Abbreviated: \"'26\""
      },
      "after": {
       "es": "Mes y año: \"agosto 2026 - actualidad\"",
       "en": "Month and year: \"August 2026 - present\""
      }
     }
    ],
    "marks": true
   },
   {
    "t": "gallery",
    "h": {
     "es": "Modo presentación",
     "en": "Presentation mode"
    },
    "note": {
     "es": "El botón Presentar abre el mismo sitio como presentación para proyectar en el aula: cada parada se ve dentro de un lienzo 16:9 y lo que no entra pasa a la diapositiva siguiente. Se avanza con las flechas del teclado, con un índice (tecla O) y pantalla completa (tecla F). Como la presentación se arma sola a partir del sitio, cualquier cambio en una parada aparece también en lo que se proyecta: no hace falta mantener un PowerPoint aparte.",
     "en": "The Present button opens the same site as a slideshow to project in class: each stop is shown inside a 16:9 canvas and whatever does not fit moves to the next slide. Arrow keys move forward, with an index (O key) and full screen (F key). Since the slideshow is built from the site itself, any change to a stop also shows up in what is projected: there is no separate PowerPoint to maintain."
    },
    "single": true,
    "images": [
     {
      "src": "primer-empleo-presentacion.jpg",
      "w": 1600,
      "h": 900,
      "alt": {
       "es": "Primera diapositiva del modo presentación: el título Del aula al primer trabajo, el avance, la próxima parada y las dos líneas del recorrido con sus paradas numeradas.",
       "en": "First slide of presentation mode: the title From the classroom to a first job, progress, the next stop and the journey’s two lines with their numbered stops."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "",
    "id": "design-system",
    "name": "Design system",
    "mode": {
     "es": "del sitio",
     "en": "of the site"
    },
    "q": {
     "es": "Una dirección visual de panel de app educativa, con tema claro y oscuro definidos en tokens.",
     "en": "A learning-app dashboard look, with light and dark themes defined as tokens."
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "Dirección visual",
     "en": "Visual direction"
    },
    "body": {
     "es": "Fondo lavanda, paneles blancos muy redondeados, mosaicos de color (lavanda para la línea 1, naranja para la línea 2, amarillo para las ideas clave) y bloques carbón para todo lo que pide una acción. El color siempre indica en qué línea estás.",
     "en": "Lavender background, very rounded white panels, colour tiles (lavender for line 1, orange for line 2, yellow for key ideas) and charcoal blocks for anything that asks for action. Colour always tells you which line you are on."
    }
   },
   {
    "t": "swatches",
    "h": {
     "es": "Color",
     "en": "Colour"
    },
    "note": {
     "es": "Tokens del tema claro. Los ratios están calculados sobre el panel blanco (--surface), salvo que se indique otro fondo. El tema oscuro tiene su propia escala y está auditado más abajo.",
     "en": "Light theme tokens. Ratios are calculated against the white panel (--surface) unless another background is stated. The dark theme has its own scale and is audited below."
    },
    "groups": [
     {
      "name": {
       "es": "Base",
       "en": "Base"
      },
      "items": [
       {
        "token": "--bg",
        "hex": "#E9E8F6",
        "use": {
         "es": "Fondo lavanda de la página",
         "en": "Lavender page background"
        }
       },
       {
        "token": "--surface",
        "hex": "#FFFFFF",
        "use": {
         "es": "Paneles",
         "en": "Panels"
        }
       },
       {
        "token": "--surface-2",
        "hex": "#F4F4FA",
        "use": {
         "es": "Superficies secundarias",
         "en": "Secondary surfaces"
        }
       },
       {
        "token": "--rule",
        "hex": "#DCDBE9",
        "use": {
         "es": "Divisores, solo decorativo",
         "en": "Dividers, decorative only"
        }
       },
       {
        "token": "--muted",
        "hex": "#5B5A6B",
        "use": {
         "es": "Texto secundario (6.73:1)",
         "en": "Secondary text (6.73:1)"
        }
       },
       {
        "token": "--ink",
        "hex": "#1F1F24",
        "use": {
         "es": "Texto y títulos (16.41:1)",
         "en": "Text and headings (16.41:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Líneas del recorrido",
       "en": "Journey lines"
      },
      "items": [
       {
        "token": "--l1-soft",
        "hex": "#E7E7FB",
        "use": {
         "es": "Fondo de la línea 1",
         "en": "Line 1 background"
        }
       },
       {
        "token": "--l1",
        "hex": "#5257C9",
        "use": {
         "es": "Línea 1: links, foco y botones con texto blanco (5.89:1)",
         "en": "Line 1: links, focus and buttons with white text (5.89:1)"
        }
       },
       {
        "token": "--l2-soft",
        "hex": "#FDEBD9",
        "use": {
         "es": "Fondo de la línea 2",
         "en": "Line 2 background"
        }
       },
       {
        "token": "--l2",
        "hex": "#B4530F",
        "use": {
         "es": "Línea 2: texto y botones con texto blanco (5.02:1)",
         "en": "Line 2: text and buttons with white text (5.02:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Mosaicos",
       "en": "Tiles"
      },
      "items": [
       {
        "token": "--t1",
        "hex": "#B9BBF6",
        "use": {
         "es": "Mosaico de la línea 1, con texto oscuro (8.99:1)",
         "en": "Line 1 tile, with dark text (8.99:1)"
        }
       },
       {
        "token": "--t2",
        "hex": "#F7AB6A",
        "use": {
         "es": "Mosaico de la línea 2, con texto oscuro (8.59:1)",
         "en": "Line 2 tile, with dark text (8.59:1)"
        }
       },
       {
        "token": "--t3",
        "hex": "#F8DE73",
        "use": {
         "es": "Ideas clave, con texto oscuro (12.26:1)",
         "en": "Key ideas, with dark text (12.26:1)"
        }
       },
       {
        "token": "--t4",
        "hex": "#A9DFC6",
        "use": {
         "es": "Mosaico de apoyo, con texto oscuro (10.98:1)",
         "en": "Supporting tile, with dark text (10.98:1)"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Estados y acción",
       "en": "States and action"
      },
      "items": [
       {
        "token": "--yes",
        "hex": "#17764A",
        "use": {
         "es": "Parada recorrida y texto copiado, con tilde blanca (5.64:1)",
         "en": "Stop done and text copied, with a white tick (5.64:1)"
        }
       },
       {
        "token": "--no",
        "hex": "#B4380F",
        "use": {
         "es": "Ejemplos de \"así no\" sobre --no-soft (5.16:1)",
         "en": "\"Not like this\" examples on --no-soft (5.16:1)"
        }
       },
       {
        "token": "--mark",
        "hex": "#FFE680",
        "use": {
         "es": "Resaltado de palabras clave en los CV (13.19:1 con texto)",
         "en": "Keyword highlight in the CVs (13.19:1 with text)"
        }
       },
       {
        "token": "--deep",
        "hex": "#24242A",
        "use": {
         "es": "Bloques carbón de acción, con texto claro (14.00:1)",
         "en": "Charcoal action blocks, with light text (14.00:1)"
        }
       }
      ]
     }
    ],
    "dense": true
   },
   {
    "t": "kv",
    "h": {
     "es": "Tipografía",
     "en": "Typography"
    },
    "note": {
     "es": "Fuentes autoalojadas con carga swap. Cuerpo de 17 px con interlineado de 1.65 y medida máxima de 70 caracteres.",
     "en": "Self-hosted fonts with swap loading. 17 px body with 1.65 line height and a 70-character maximum measure."
    },
    "items": [
     {
      "k": {
       "es": "Outfit",
       "en": "Outfit"
      },
      "v": {
       "es": "Títulos y números del recorrido, en peso 600 con tracking negativo.",
       "en": "Headings and journey numbers, weight 600 with negative tracking."
      }
     },
     {
      "k": {
       "es": "Geist",
       "en": "Geist"
      },
      "v": {
       "es": "Texto de cuerpo, tablas y controles.",
       "en": "Body text, tables and controls."
      }
     },
     {
      "k": {
       "es": "Geist Mono",
       "en": "Geist Mono"
      },
      "v": {
       "es": "Plantillas para copiar y texto extraído por el ATS.",
       "en": "Copy-ready templates and the text extracted by the ATS."
      }
     },
     {
      "k": {
       "es": "Arial",
       "en": "Arial"
      },
      "v": {
       "es": "Solo dentro de los CV de ejemplo, a propósito: es una de las fuentes que recomiendan las guías de formato para ATS.",
       "en": "Only inside the sample CVs, on purpose: it is one of the fonts recommended by ATS formatting guides."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Forma, espacio y comportamiento",
     "en": "Shape, space and behaviour"
    },
    "items": [
     {
      "lead": {
       "es": "Radios",
       "en": "Radii"
      },
      "body": {
       "es": "Paneles de 2rem, bloques de 1.5rem, botones y etiquetas en píldora, paradas en círculo.",
       "en": "2rem panels, 1.5rem blocks, pill buttons and tags, circular stops."
      }
     },
     {
      "lead": {
       "es": "Temas",
       "en": "Themes"
      },
      "body": {
       "es": "Sigue la preferencia del sistema y permite cambiar a mano entre claro y oscuro. Cada token tiene su par en el tema oscuro.",
       "en": "Follows the system preference and allows switching manually between light and dark. Every token has a dark-theme pair."
      }
     },
     {
      "lead": {
       "es": "Adaptable",
       "en": "Responsive"
      },
      "body": {
       "es": "Panel lateral de paradas en escritorio y menú desplegable en pantallas chicas. Las tablas se apilan en móvil, con cada dato rotulado.",
       "en": "Side panel of stops on desktop and a drop-down menu on small screens. Tables stack on mobile, with every value labelled."
      }
     },
     {
      "lead": {
       "es": "Movimiento",
       "en": "Motion"
      },
      "body": {
       "es": "Entradas suaves al hacer scroll y animaciones explicativas, todo desactivado con la preferencia de movimiento reducido.",
       "en": "Gentle scroll-in entrances and explainer animations, all switched off with the reduced-motion preference."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Mosaicos, texturas y mapa",
     "en": "Tiles, textures and map"
    },
    "note": {
     "es": "El color llega en mosaicos grandes. Las texturas son dos: un trazo en espiral, como un garabato, y una grilla fina detrás del mapa. Todo está hecho con CSS y un ícono repetido, sin imágenes de fondo.",
     "en": "Colour arrives in large tiles. There are two textures: a looping stroke, like a doodle, and a fine grid behind the map. Everything is built with CSS and one repeated icon, with no background images."
    },
    "rowsOf": [
     1,
     2
    ],
    "images": [
     {
      "src": "primer-empleo-ds-portada.jpg",
      "w": 1600,
      "h": 597,
      "alt": {
       "es": "Portada del taller: panel blanco con el título y el trazo en espiral, un bloque carbón con el anillo de avance en cero y dos mosaicos, lavanda y naranja, uno por línea.",
       "en": "Workshop home: a white panel with the title and the looping stroke, a charcoal block with the progress ring at zero and two tiles, lavender and orange, one per line."
      },
      "caption": {
       "es": "Portada: mosaicos por línea, anillo de avance y el trazo en espiral como textura.",
       "en": "Home: one tile per line, progress ring and the looping stroke as texture."
      }
     },
     {
      "src": "primer-empleo-ds-mapa.jpg",
      "w": 1600,
      "h": 1438,
      "alt": {
       "es": "Mapa del recorrido en tema claro: dos franjas con grilla de fondo, lavanda y naranja, con cinco paradas en la línea 1 y seis en la línea 2 unidas por una línea punteada, y debajo los cuatro apartados especiales.",
       "en": "Journey map in the light theme: two bands with a background grid, lavender and orange, with five stops on line 1 and six on line 2 joined by a dotted line, and the four special sections below."
      },
      "caption": {
       "es": "El mapa en tema claro: grilla de fondo y paradas unidas por una línea punteada.",
       "en": "The map in the light theme: grid background and stops joined by a dashed line."
      }
     },
     {
      "src": "primer-empleo-ds-mapa-oscuro.jpg",
      "w": 1600,
      "h": 1438,
      "alt": {
       "es": "El mismo mapa en tema oscuro: fondo casi negro, franjas en tonos apagados de lavanda y naranja y tarjetas de parada oscuras.",
       "en": "The same map in the dark theme: near-black background, bands in muted lavender and orange, and dark stop cards."
      },
      "caption": {
       "es": "El mismo mapa en tema oscuro, con cada token en su par.",
       "en": "The same map in the dark theme, with every token in its pair."
      }
     }
    ]
   },
   {
    "t": "anim",
    "h": {
     "es": "Animaciones explicativas",
     "en": "Explainer animations"
    },
    "note": {
     "es": "Las tres piezas en vivo: son las mismas composiciones de HyperFrames y GSAP que usa el sitio del taller. Arrancan al aparecer en pantalla, se pueden pausar y, con movimiento reducido, muestran el cuadro final.",
     "en": "The three pieces, live: the same HyperFrames and GSAP compositions the workshop site uses. They start when they come into view, can be paused and, with reduced motion, show the final frame."
    },
    "items": [
     {
      "id": "ats",
      "src": "https://lpedaci.github.io/taller-primerempleo/videos/ats/index.html?embed=1&theme=light",
      "title": {
       "es": "Así te lee un ATS",
       "en": "How an ATS reads you"
      },
      "caption": {
       "es": "En un CV de dos columnas con íconos y barras, el sistema no encuentra experiencia ni educación. Con una columna y títulos comunes, lee todos los campos.",
       "en": "In a two-column CV with icons and bars, the system finds no experience or education. With one column and standard headings, it reads every field."
      }
     },
     {
      "id": "linkedin",
      "src": "https://lpedaci.github.io/taller-primerempleo/videos/linkedin/index.html?embed=1&theme=light",
      "title": {
       "es": "El titular de LinkedIn",
       "en": "The LinkedIn headline"
      },
      "caption": {
       "es": "El titular «Estudiante» se reemplaza por tres partes: el puesto que buscás, lo que estudiás y un diferencial.",
       "en": "The “Student” headline is replaced by three parts: the role you want, what you study and a differentiator."
      }
     },
     {
      "id": "star",
      "src": "https://lpedaci.github.io/taller-primerempleo/videos/star/index.html?embed=1&theme=light",
      "title": {
       "es": "El método STAR",
       "en": "The STAR method"
      },
      "caption": {
       "es": "Una respuesta armada en cuatro partes. La acción ocupa cerca de la mitad del tiempo.",
       "en": "An answer built in four parts. The action takes up about half of the time."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Cifras y componentes de contenido",
     "en": "Figures and content components"
    },
    "note": {
     "es": "Los datos se muestran como cifras grandes con su fuente, no como gráficos decorativos. El resto son los bloques que se repiten en cada parada.",
     "en": "Data is shown as large figures with their source, not as decorative charts. The rest are the blocks repeated at every stop."
    },
    "rowsOf": [
     2,
     2
    ],
    "images": [
     {
      "src": "primer-empleo-ds-cifras.jpg",
      "w": 1600,
      "h": 1044,
      "alt": {
       "es": "Parada 1: encabezado lavanda con número, etiquetas de parada y minutos, la idea clave sobre amarillo y cuatro mosaicos con cifras de desocupación y su fuente.",
       "en": "Stop 1: lavender header with number, stop and minutes tags, the key idea on yellow and four tiles with unemployment figures and their source."
      },
      "caption": {
       "es": "Encabezado de parada, idea clave y cifras con su fuente.",
       "en": "Stop header, key idea and figures with their source."
      }
     },
     {
      "src": "primer-empleo-ds-plantilla.jpg",
      "w": 1600,
      "h": 698,
      "alt": {
       "es": "Plantilla del pitch de 60 segundos en texto monoespaciado, con una barra verde de título y el botón Copiar.",
       "en": "The 60-second pitch template in monospaced text, with a green title bar and the Copy button."
      },
      "caption": {
       "es": "Plantilla para copiar.",
       "en": "Copy-ready template."
      }
     },
     {
      "src": "primer-empleo-ds-asi-no.jpg",
      "w": 1600,
      "h": 434,
      "alt": {
       "es": "Dos recuadros lado a lado: Así no, con ícono de cruz y tareas genéricas, y Así sí, con ícono de tilde y logros concretos.",
       "en": "Two boxes side by side: Not like this, with a cross icon and generic tasks, and Like this, with a tick icon and concrete achievements."
      },
      "caption": {
       "es": "Así no, así sí: el estado va con ícono y texto, no solo con color.",
       "en": "Not like this, like this: the state uses an icon and text, not colour alone."
      }
     },
     {
      "src": "primer-empleo-ds-actividad.jpg",
      "w": 1600,
      "h": 535,
      "alt": {
       "es": "Bloque carbón de actividad con su duración, y debajo la casilla para marcar la parada como recorrida y el botón hacia la parada siguiente.",
       "en": "Charcoal activity block with its duration and, below, the checkbox to mark the stop as done and the button to the next stop."
      },
      "caption": {
       "es": "Actividad, marca de parada recorrida y paso a la siguiente.",
       "en": "Activity, done marker and step to the next stop."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "04",
    "name": "Deliver",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Publicar, revisar y verificar que el sitio funcione para todos antes del dictado.",
     "en": "Publish, review and verify that the site works for everyone before the workshop."
    }
   },
   {
    "t": "audit",
    "h": {
     "es": "Validación: auditoría de contraste",
     "en": "Validation: contrast audit"
    },
    "note": {
     "es": "Medí las combinaciones de color del sitio en los dos temas contra WCAG 2.2 AA. Umbrales: 4.5:1 para texto normal, 3:1 para texto grande y componentes. Una combinación no cumple por poco y tiene corrección propuesta.",
     "en": "I measured the site's colour combinations in both themes against WCAG 2.2 AA. Thresholds: 4.5:1 for normal text, 3:1 for large text and components. One combination falls just short and has a proposed fix."
    },
    "cols": {
     "pair": {
      "es": "Combinación",
      "en": "Combination"
     },
     "ratio": {
      "es": "Ratio",
      "en": "Ratio"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "fail": {
     "es": "No cumple",
     "en": "Fails"
    },
    "pass": {
     "es": "Sí cumple",
     "en": "Passes"
    },
    "nofix": {
     "es": "No requiere cambios",
     "en": "No change needed"
    },
    "rows": [
     {
      "fg": "#B4530F",
      "bg": "#FDEBD9",
      "pair": {
       "es": "Número de paso de la línea 2: --l2 sobre --l2-soft (tema claro)",
       "en": "Line 2 step number: --l2 on --l2-soft (light theme)"
      },
      "ratio": "4.32:1",
      "pass": false,
      "fix": {
       "es": "Oscurecer --l2 a #AD500E: 4.60:1 sobre --l2-soft y 5.34:1 con texto blanco",
       "en": "Darken --l2 to #AD500E: 4.60:1 on --l2-soft and 5.34:1 with white text"
      },
      "fixfg": "#AD500E",
      "fixbg": "#FDEBD9"
     },
     {
      "fg": "#FFFFFF",
      "bg": "#5257C9",
      "pair": {
       "es": "Texto blanco sobre botón --l1 (tema claro)",
       "en": "White text on --l1 button (light theme)"
      },
      "ratio": "5.89:1",
      "pass": true
     },
     {
      "fg": "#5257C9",
      "bg": "#E9E8F6",
      "pair": {
       "es": "Link --l1 sobre el fondo lavanda (tema claro)",
       "en": "--l1 link on the lavender background (light theme)"
      },
      "ratio": "4.86:1",
      "pass": true
     },
     {
      "fg": "#5B5A6B",
      "bg": "#E9E8F6",
      "pair": {
       "es": "Texto --muted sobre el fondo lavanda (tema claro)",
       "en": "--muted text on the lavender background (light theme)"
      },
      "ratio": "5.56:1",
      "pass": true
     },
     {
      "fg": "#1F1F24",
      "bg": "#B9BBF6",
      "pair": {
       "es": "Texto oscuro sobre el mosaico --t1 (el más bajo de los cuatro) (tema claro)",
       "en": "Dark text on the --t1 tile (lowest of the four) (light theme)"
      },
      "ratio": "8.99:1",
      "pass": true
     },
     {
      "fg": "#17764A",
      "bg": "#E1F3E8",
      "pair": {
       "es": "Texto verde --yes sobre --yes-soft (tema claro)",
       "en": "--yes green text on --yes-soft (light theme)"
      },
      "ratio": "4.88:1",
      "pass": true
     },
     {
      "fg": "#5257C9",
      "bg": "#FFFFFF",
      "pair": {
       "es": "Anillo de foco --l1 sobre panel (tema claro)",
       "en": "--l1 focus ring on panel (light theme)"
      },
      "ratio": "5.89:1",
      "pass": true,
      "ring": true
     },
     {
      "fg": "#F8DE73",
      "bg": "#24242A",
      "pair": {
       "es": "Anillo de foco amarillo sobre bloque carbón (tema claro)",
       "en": "Yellow focus ring on charcoal block (light theme)"
      },
      "ratio": "11.53:1",
      "pass": true,
      "ring": true
     },
     {
      "fg": "#F1F0F7",
      "bg": "#1E1E23",
      "pair": {
       "es": "Texto --ink sobre panel (tema oscuro)",
       "en": "--ink text on panel (dark theme)"
      },
      "ratio": "14.66:1",
      "pass": true
     },
     {
      "fg": "#A9A8B8",
      "bg": "#1E1E23",
      "pair": {
       "es": "Texto --muted sobre panel (tema oscuro)",
       "en": "--muted text on panel (dark theme)"
      },
      "ratio": "7.10:1",
      "pass": true
     },
     {
      "fg": "#17171B",
      "bg": "#A9ACF7",
      "pair": {
       "es": "Texto oscuro sobre botón --l1 (tema oscuro)",
       "en": "Dark text on --l1 button (dark theme)"
      },
      "ratio": "8.45:1",
      "pass": true
     },
     {
      "fg": "#F7AB6A",
      "bg": "#3E2A17",
      "pair": {
       "es": "Número de paso de la línea 2: --l2 sobre --l2-soft (tema oscuro)",
       "en": "Line 2 step number: --l2 on --l2-soft (dark theme)"
      },
      "ratio": "7.10:1",
      "pass": true
     },
     {
      "fg": "#F1F0F7",
      "bg": "#6B5700",
      "pair": {
       "es": "Texto sobre el resaltado --mark (tema oscuro)",
       "en": "Text on the --mark highlight (dark theme)"
      },
      "ratio": "6.21:1",
      "pass": true
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Accesibilidad del sitio",
     "en": "Site accessibility"
    },
    "items": {
     "es": [
      "HTML semántico, enlace para saltar al contenido y foco visible en todos los controles.",
      "Al cambiar de parada, el foco va al título nuevo; los cambios de estado se anuncian a lectores de pantalla.",
      "Pestañas, menú y plantillas operables con teclado.",
      "Animaciones con pausa y descripción en texto; con movimiento reducido muestran el cuadro final.",
      "Enlaces externos que avisan que se abren en una pestaña nueva e imágenes con texto alternativo descriptivo.",
      "Cada dato está fechado y citado en APA 7 (19 fuentes), para actualizarlo cada año sin rehacer el taller."
     ],
     "en": [
      "Semantic HTML, a skip-to-content link and visible focus on every control.",
      "When the stop changes, focus moves to the new heading; state changes are announced to screen readers.",
      "Tabs, menu and templates are keyboard operable.",
      "Animations have a pause control and a text description; with reduced motion they show the final frame.",
      "External links announce they open in a new tab, and images have descriptive alt text.",
      "Every figure is dated and cited in APA 7 (19 sources), so it can be updated each year without rebuilding the workshop."
     ]
    },
    "hl": true
   },
   {
    "t": "prose",
    "h": {
     "es": "Revisión",
     "en": "Review"
    },
    "p": [
     {
      "es": "Antes de publicarlo, el sitio pasó por la revisión de Julieta Taraborrelli, co-docente del taller. El contenido es de la Lic. Lourdes Pedaci, la Lic. Julieta Taraborrelli y la Lic. Bettyna González, y el apartado de finanzas personales es un aporte de Kevin Giampieri.",
      "en": "Before publishing, the site was reviewed by Julieta Taraborrelli, the workshop’s co-facilitator. The content is by Lourdes Pedaci (Lic.), Julieta Taraborrelli (Lic.) and Bettyna González (Lic.), and the personal finance section is a contribution by Kevin Giampieri."
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "es": "El sitio, en vivo",
     "en": "The site, live"
    },
    "note": {
     "es": "HTML, CSS y JavaScript sin frameworks ni proceso de compilación, publicado en GitHub Pages.",
     "en": "HTML, CSS and JavaScript with no frameworks and no build step, published on GitHub Pages."
    },
    "src": "https://lpedaci.github.io/taller-primerempleo/",
    "url": "https://lpedaci.github.io/taller-primerempleo/",
    "label": {
     "es": "Del aula al primer trabajo",
     "en": "From the classroom to a first job"
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Cuestiones clave",
     "en": "Key decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Dos paradas para la entrevista",
       "en": "Two stops for the interview"
      },
      "body": {
       "es": "La entrevista con personas y la entrevista con IA piden preparaciones distintas: una se apoya en el pitch, el método STAR y el registro de logros; la otra, en grabarse y responder sin nadie del otro lado.",
       "en": "An interview with people and an interview with AI call for different preparation: one relies on the pitch, the STAR method and the achievement log; the other, on recording yourself and answering with nobody on the other side."
      }
     },
     {
      "lead": {
       "es": "Lo que suma, fuera del recorrido",
       "en": "What adds value, outside the journey"
      },
      "body": {
       "es": "El recibo de sueldo, las finanzas, la elección de carrera y los cursos quedan como apartados especiales: están en el mismo sitio, pero no alargan las dos horas.",
       "en": "The payslip, personal finance, choosing a degree and courses stay as special sections: they are on the same site, but they do not stretch the two hours."
      }
     },
     {
      "lead": {
       "es": "Ejemplos cercanos a cada orientación",
       "en": "Examples close to each track"
      },
      "body": {
       "es": "Cada estudiante encuentra un CV, un aviso y un perfil de LinkedIn parecidos a lo que va a buscar, en lugar de un único ejemplo genérico.",
       "en": "Each student finds a CV, a job ad and a LinkedIn profile similar to what they will look for, instead of a single generic example."
      }
     },
     {
      "lead": {
       "es": "Un solo contenido para el aula y para después",
       "en": "One source for class and for later"
      },
      "body": {
       "es": "La presentación se genera a partir del mismo sitio: si se corrige una parada, el cambio aparece en la web que consultan los estudiantes y en lo que se proyecta en clase.",
       "en": "The slideshow is generated from the same site: when a stop is corrected, the change shows up both on the website students look up and in what is projected in class."
      }
     },
     {
      "lead": {
       "es": "Datos con fecha y fuente",
       "en": "Dated, sourced data"
      },
      "body": {
       "es": "Las cifras, la normativa del recibo y las herramientas de LinkedIn se citan en APA 7, para actualizarlas cada año sin rehacer el sitio.",
       "en": "Figures, payslip regulations and LinkedIn tools are cited in APA 7, so they can be updated every year without rebuilding the site."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "note": {
     "es": "Lo que el proyecto entrega.",
     "en": "What the project delivers."
    },
    "items": {
     "es": [
      "El taller se dictó con 6to año entre el lunes 26 de octubre y el miércoles 4 de noviembre de 2026.",
      "Un recorrido completo y publicado: once paradas, cuatro apartados especiales y cinco plantillas para copiar.",
      "El mismo sitio sirve para dictar el taller (en modo presentación) y para consultarlo después, sin tener que armar un PowerPoint aparte.",
      "Cada estudiante puede salir con productos propios: su mapa personal, el perfil del CV, el registro de logros y el pitch.",
      "Herramientas que se siguen usando después del taller: calculadoras de presupuesto e interés compuesto, la charla de carreras y el servidor de cursos.",
      "Accesible en los dos temas, claro y oscuro, con 19 fuentes citadas para mantenerlo al día.",
      "Un escape room de finanzas personales, Tu primer sueldo, para practicar el recibo y las finanzas fuera de las dos horas, con contenido del Lic. Kevin Giampieri."
     ],
     "en": [
      "The workshop was delivered to sixth-year students between Monday 26 October and Wednesday 4 November 2026.",
      "A complete, published journey: eleven stops, four special sections and five copy-ready templates.",
      "The same site is used to run the workshop (in presentation mode) and to look it up later, with no separate PowerPoint to build.",
      "Each student can leave with things of their own: their personal map, the CV profile, the achievement log and the pitch.",
      "Tools that stay useful after the workshop: budget and compound interest calculators, the career talk and the course server.",
      "Accessible in both the light and dark themes, with 19 cited sources to keep it up to date.",
      "A personal finance escape room, Your first paycheck, to practise payslips and finance outside the two hours, with content by Kevin Giampieri (Lic.)."
     ]
    }
   },
   {
    "t": "phase",
    "id": "cifras",
    "name": {
     "es": "El taller en cifras",
     "en": "The workshop in numbers"
    },
    "mode": {
     "es": "alcance",
     "en": "scope"
    },
    "q": {
     "es": "Lo que entra en dos horas y lo que queda para después.",
     "en": "What fits in two hours and what stays for later."
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": {
       "es": "11",
       "en": "11"
      },
      "label": {
       "es": "paradas en dos líneas",
       "en": "stops on two lines"
      }
     },
     {
      "value": {
       "es": "4",
       "en": "4"
      },
      "label": {
       "es": "apartados especiales",
       "en": "special sections"
      }
     },
     {
      "value": {
       "es": "2 h",
       "en": "2 h"
      },
      "label": {
       "es": "de taller presencial",
       "en": "of in-person workshop"
      }
     },
     {
      "value": {
       "es": "45 min",
       "en": "45 min"
      },
      "label": {
       "es": "de actividad en clase, 65 con el simulacro",
       "en": "of in-class activity, 65 with the mock interview"
      }
     },
     {
      "value": {
       "es": "5",
       "en": "5"
      },
      "label": {
       "es": "plantillas para copiar",
       "en": "copy-ready templates"
      }
     },
     {
      "value": {
       "es": "19",
       "en": "19"
      },
      "label": {
       "es": "fuentes citadas en APA 7",
       "en": "sources cited in APA 7"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Próximos pasos",
     "en": "Next steps"
    },
    "items": {
     "es": [
      "Contrastar los criterios de éxito con lo que pasó en el aula y ajustar el recorrido."
     ],
     "en": [
      "Check the success criteria against what happened in class and adjust the journey."
     ]
    }
   }
  ],
  "outcome": null
 },
 "servidor": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Repositorio web de recursos para autocapacitarse: análisis y diseño UX/UI",
   "en": "Self-learning resource hub: UX/UI analysis and design"
  },
  "subtitle": {
   "es": "El servidor de Lourdes reúne cursos, materiales y charlas para estudiantes de informática. Vivía en Notion y lo rediseñé como un sitio propio que se explora, se filtra y se retoma.",
   "en": "El servidor de Lourdes (Lourdes's server) gathers courses, materials and talks for computing students. It lived in Notion, and I redesigned it as a site of its own that can be explored, filtered and picked up again."
  },
  "chips": {
   "es": [
    "UX/UI",
    "Arquitectura de información",
    "Design system",
    "Accesibilidad"
   ],
   "en": [
    "UX/UI",
    "Information architecture",
    "Design system",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "Más de 300 enlaces juntados desde 2019 vivían en páginas de Notion: se podían leer, pero no filtrar por tema, certificado o idioma, ni guardar para volver.",
    "en": "Over 300 links gathered since 2019 lived in Notion pages: you could read them, but not filter by topic, certificate or language, or save them for later."
   },
   "solution": {
    "es": "Un sitio propio con la lógica de un servidor de juego: Lobby, threads, exploradores con filtros que se comparten por link, búsqueda e inventario sin cuenta.",
    "en": "A dedicated site built like a game server: a Lobby, threads, explorers with filters you can share as a link, search and an inventory with no account."
   },
   "results": [
    {
     "v": "160",
     "l": {
      "es": "cursos filtrables por tema, certificado e idioma",
      "en": "courses to filter by topic, certificate and language"
     }
    },
    {
     "v": "158",
     "l": {
      "es": "recursos ordenados en el mismo explorador",
      "en": "resources in the same explorer"
     }
    },
    {
     "v": "0",
     "l": {
      "es": "errores de axe en tema claro, en escritorio y en celular",
      "en": "axe errors in the light theme, on desktop and mobile"
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Arquitectura de información, diseño UX/UI, design system, redacción y desarrollo del sitio",
    "en": "Information architecture, UX/UI design, design system, copywriting and site development"
   },
   "timeline": {
    "es": "Octubre 2026",
    "en": "October 2026"
   },
   "context": {
    "es": "Material para estudiantes de informática, egresados y cualquiera que quiera seguir aprendiendo, publicado desde diciembre de 2019",
    "en": "Material for computing students, graduates and anyone who wants to keep learning, published since December 2019"
   },
   "stack": [
    "Astro",
    "TypeScript",
    "Pagefind",
    "GitHub Actions",
    "GitHub Pages"
   ],
   "methods": [
    "Arquitectura de información",
    "Design system",
    "WCAG 2.1 AA",
    "axe"
   ]
  },
  "links": [
   {
    "label": {
     "es": "Sitio (en vivo)",
     "en": "Site (live)"
    },
    "url": "https://lpedaci.github.io/repo-servidor/"
   },
   {
    "label": {
     "es": "Componentes",
     "en": "Components"
    },
    "url": "https://lpedaci.github.io/repo-servidor/ui/"
   },
   {
    "label": {
     "es": "Repositorio",
     "en": "Repository"
    },
    "url": "https://github.com/lpedaci/repo-servidor"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El desafío",
     "en": "The challenge"
    },
    "body": {
     "es": "Que más de 300 enlaces juntados durante años se puedan explorar sin perderse, y que cada persona encuentre lo suyo en pocos pasos.",
     "en": "Make more than 300 links gathered over the years explorable without getting lost, so that everyone finds what they need in a few steps."
    },
    "p": [
     {
      "es": "El repositorio web se publicaba en páginas de Notion desde 2019. Funcionaba como archivo, pero no como herramienta: no se podía filtrar por tema, certificado o idioma, ni guardar lo que interesaba para volver después.",
      "en": "The web repository had been published on Notion pages since 2019. It worked as an archive, but not as a tool: it could not be filtered by topic, certificate or language, and there was no way to save what mattered to come back later."
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "id": "arquitectura",
    "name": {
     "es": "Arquitectura de información",
     "en": "Information architecture"
    },
    "mode": {
     "es": "ordenar",
     "en": "organise"
    },
    "q": {
     "es": "Pasar de una lista larga de páginas a un mapa con entradas claras según lo que cada persona viene a buscar.",
     "en": "Turn a long list of pages into a map with clear entry points for whatever each person comes looking for."
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Una metáfora que ordena",
     "en": "A metaphor that organises"
    },
    "p": [
     {
      "es": "El sitio se piensa como un servidor de juego: quien entra es un user, las secciones son threads, la portada es el Lobby y lo guardado es el inventario. La metáfora no es solo tono: cada palabra nombra una función concreta y se repite igual en la navegación, los títulos y los avisos.",
      "en": "The site is framed as a game server: visitors are users, sections are threads, the home page is the lobby and saved items are the inventory. The metaphor is not just tone: each word names a concrete function and is used the same way in navigation, headings and notices."
     },
     {
      "es": "Para estudiantes de informática es un código conocido, y baja la distancia con un material que de otro modo se lee como un listado académico.",
      "en": "For computing students it is a familiar code, and it closes the distance to material that would otherwise read like an academic list."
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Las piezas del server",
     "en": "The pieces of the server"
    },
    "items": [
     {
      "lead": {
       "es": "Lobby",
       "en": "Lobby"
      },
      "body": {
       "es": "La portada. Muestra cuánto hay, las seis categorías como accesos directos, los cuatro threads, lo último que se sumó y un buscador.",
       "en": "The home page. It shows how much there is, the six categories as shortcuts, the four threads, the latest additions and a search box."
      }
     },
     {
      "lead": {
       "es": "Threads",
       "en": "Threads"
      },
      "body": {
       "es": "Cuatro recorridos temáticos: cursando y egresando, cursos, tecnología y materiales variaditos. Cada uno junta posts y recursos sobre un mismo tema.",
       "en": "Four topic journeys: studying and graduating, courses, technology and assorted materials. Each one gathers posts and resources on the same subject."
      }
     },
     {
      "lead": {
       "es": "Exploradores",
       "en": "Explorers"
      },
      "body": {
       "es": "Cursos y recursos con filtros combinables, orden, vista de tarjetas o de tabla, y la combinación elegida guardada en la dirección para compartirla.",
       "en": "Courses and resources with combinable filters, sorting, card or table view, and the chosen combination kept in the URL so it can be shared."
      }
     },
     {
      "lead": {
       "es": "Posts",
       "en": "Posts"
      },
      "body": {
       "es": "Charlas y guías con tiempo de lectura, índice lateral y navegación dentro de su thread.",
       "en": "Talks and guides with reading time, a side index and navigation within their thread."
      }
     },
     {
      "lead": {
       "es": "Inventario",
       "en": "Inventory"
      },
      "body": {
       "es": "Favoritos y \"ya lo vi\" guardados en el navegador, sin cuenta ni registro.",
       "en": "Favourites and \"seen it\" saved in the browser, with no account or sign-up."
      }
     },
     {
      "lead": {
       "es": "Búsqueda",
       "en": "Search"
      },
      "body": {
       "es": "Un solo buscador para posts, cursos y recursos, con resultados mientras se escribe.",
       "en": "One search box for posts, courses and resources, with results as you type."
      }
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Task flow",
     "en": "Task flow"
    },
    "note": {
     "es": "La tarea núcleo: encontrar un curso gratuito con certificado sobre un tema puntual.",
     "en": "The core task: finding a free course with a certificate on a specific topic."
    },
    "steps": {
     "es": [
      "Entra al Lobby",
      "Elige una categoría desde su mosaico",
      "Llega al explorador ya filtrado",
      "Suma filtros de certificado o idioma",
      "Revisa duración y proveedor en la tarjeta o la tabla",
      "Guarda el curso en el inventario",
      "Comparte el link con los filtros puestos"
     ],
     "en": [
      "Enters the lobby",
      "Picks a category from its tile",
      "Lands on the explorer already filtered",
      "Adds certificate or language filters",
      "Checks duration and provider on the card or the table",
      "Saves the course to the inventory",
      "Shares the link with the filters applied"
     ]
    }
   },
   {
    "t": "phase",
    "n": "02",
    "id": "interfaz",
    "name": {
     "es": "Diseño de interfaz",
     "en": "Interface design"
    },
    "mode": {
     "es": "resolver",
     "en": "resolve"
    },
    "q": {
     "es": "Que cada pantalla diga dónde estás, cuánto hay y qué podés hacer ahora.",
     "en": "Make every screen say where you are, how much there is and what you can do next."
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Las pantallas principales",
     "en": "The main screens"
    },
    "rowsOf": [
     2,
     2
    ],
    "images": [
     {
      "src": "servidor-lobby.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Lobby del servidor: bloque carbón con el título Te doy la bienvenida al server, una terminal con comandos a la derecha, botones Explorar threads y Ver cursos, y contadores de 160 cursos, 158 recursos y 4 threads.",
       "en": "The server lobby: a charcoal block with the title Welcome to the server, a terminal with commands on the right, Explore threads and See courses buttons, and counters for 160 courses, 158 resources and 4 threads."
      },
      "caption": {
       "es": "Lobby: la metáfora del servidor va literal en el hero, con una terminal y contadores.",
       "en": "Lobby: the server metaphor is literal in the hero, with a terminal and counters."
      }
     },
     {
      "src": "servidor-cursos.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Explorador de cursos filtrado por la categoría Diseño, UX y UI: buscador, orden, chips de categoría y de certificación con su cantidad, y el contador de resultados.",
       "en": "Course explorer filtered by the Design, UX and UI category: search box, sort order, category and certificate chips with their counts, and the results counter."
      },
      "caption": {
       "es": "Explorador de cursos: los filtros quedan en la dirección y se pueden compartir.",
       "en": "Course explorer: filters live in the URL and can be shared."
      }
     },
     {
      "src": "servidor-threads.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Índice de threads: cuatro mosaicos de color, lavanda, naranja, verde agua y amarillo, cada uno con su número, título, bajada y cantidad de posts y recursos.",
       "en": "Threads index: four colour tiles, lavender, orange, sea green and yellow, each with its number, title, standfirst and count of posts and resources."
      },
      "caption": {
       "es": "Threads: un mosaico de color por tema.",
       "en": "Threads: one colour tile per topic."
      }
     },
     {
      "src": "servidor-post.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Página de un post: encabezado lavanda con migas de pan, título, bajada, tiempo de lectura y fecha de actualización, y a la derecha el índice En este post.",
       "en": "A post page: lavender header with breadcrumbs, title, standfirst, reading time and update date, and the In this post index on the right."
      },
      "caption": {
       "es": "Post: migas de pan, tiempo de lectura e índice lateral.",
       "en": "Post: breadcrumbs, reading time and side index."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Decisiones de diseño",
     "en": "Design decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Filtros que se comparten",
       "en": "Filters you can share"
      },
      "body": {
       "es": "Cada filtro queda en la dirección (categoría, proveedor, idioma, certificado, orden y vista). Quien recomienda un curso manda el link con la búsqueda ya armada.",
       "en": "Every filter is kept in the URL (category, provider, language, certificate, sort and view). Anyone recommending a course sends the link with the search already set up."
      }
     },
     {
      "lead": {
       "es": "Cantidades a la vista",
       "en": "Counts in plain sight"
      },
      "body": {
       "es": "Cada chip de filtro muestra cuántos resultados trae, y el total se actualiza al combinar. Así nadie entra a una combinación vacía sin saberlo.",
       "en": "Every filter chip shows how many results it brings, and the total updates as filters combine. Nobody walks into an empty combination without knowing."
      }
     },
     {
      "lead": {
       "es": "Tarjetas o tabla",
       "en": "Cards or table"
      },
      "body": {
       "es": "Las tarjetas sirven para descubrir; la tabla, para comparar duración, idioma y certificación de muchos cursos a la vez. En celular, la tabla se apila con cada dato rotulado.",
       "en": "Cards are for discovering; the table is for comparing duration, language and certificate across many courses at once. On a phone, the table stacks with every value labelled."
      }
     },
     {
      "lead": {
       "es": "Estado del link",
       "en": "Link status"
      },
      "body": {
       "es": "Un revisor automático recorre los enlaces una vez por mes. Los que fallan se muestran como \"Link en revisión\" o dejan de mostrarse, y los contadores solo cuentan los activos.",
       "en": "An automatic checker goes through the links once a month. Broken ones are shown as \"Link under review\" or stop being shown, and the counters only include active ones."
      }
     },
     {
      "lead": {
       "es": "Guardar sin cuenta",
       "en": "Save without an account"
      },
      "body": {
       "es": "El inventario vive en el navegador. No hay registro ni datos personales que cuidar, y si el almacenamiento está bloqueado el sitio sigue funcionando.",
       "en": "The inventory lives in the browser. There is no sign-up and no personal data to look after, and if storage is blocked the site keeps working."
      }
     },
     {
      "lead": {
       "es": "El error también orienta",
       "en": "Errors also guide"
      },
      "body": {
       "es": "La página 404 usa la voz del server (\"Te caíste del mapa\") y ofrece volver al Lobby o buscar, en lugar de un callejón sin salida.",
       "en": "The 404 page uses the server's voice (\"You fell off the map\") and offers to go back to the lobby or search, instead of a dead end."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "En celular",
     "en": "On a phone"
    },
    "note": {
     "es": "Una sola columna, barra en píldora con tema, inventario y menú siempre a mano, e índice del post en un desplegable.",
     "en": "A single column, a pill-shaped bar with theme, inventory and menu always at hand, and the post index in a drop-down."
    },
    "images": [
     {
      "src": "servidor-m-lobby.jpg",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "Lobby en celular: barra superior en píldora con logo, tema, inventario y menú; debajo, el bloque carbón con el título, los botones y la terminal.",
       "en": "Lobby on a phone: pill-shaped top bar with logo, theme, inventory and menu; below, the charcoal block with the title, the buttons and the terminal."
      },
      "caption": {
       "es": "Lobby.",
       "en": "Lobby."
      }
     },
     {
      "src": "servidor-m-cursos.jpg",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "Explorador de cursos en celular: buscador, orden, botón Limpiar y chips de categoría apilados, cada uno con su cantidad.",
       "en": "Course explorer on a phone: search box, sort order, Clear button and stacked category chips, each with its count."
      },
      "caption": {
       "es": "Explorador.",
       "en": "Explorer."
      }
     },
     {
      "src": "servidor-m-post.jpg",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "Post en celular: encabezado lavanda con migas de pan, título, bajada, tiempo de lectura y botón de favorito; el índice pasa a un desplegable.",
       "en": "A post on a phone: lavender header with breadcrumbs, title, standfirst, reading time and favourite button; the index becomes a drop-down."
      },
      "caption": {
       "es": "Post, con el índice en un desplegable.",
       "en": "Post, with the index as a drop-down."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Tono y microcopy",
     "en": "Tone and microcopy"
    },
    "note": {
     "es": "Español rioplatense con voseo y humor liviano, sin rayas ni emojis. Los avisos, los estados vacíos y los errores hablan con la misma voz.",
     "en": "Rioplatense Spanish with voseo and light humour, with no dashes or emojis. Notices, empty states and errors all speak in the same voice."
    },
    "medium": true,
    "images": [
     {
      "src": "servidor-404.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Página de error: mosaico naranja con un gato dormido entre dos carteles con el número 4, y el texto Te caíste del mapa con botones para volver al Lobby o buscar.",
       "en": "Error page: an orange tile with a sleeping cat between two signs showing the number 4, and the text You fell off the map with buttons to go back to the lobby or search."
      },
      "caption": {
       "es": "404: el error también habla con la voz del server.",
       "en": "404: the error also speaks in the server's voice."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "",
    "id": "design-system",
    "name": "Design system",
    "mode": {
     "es": "del sitio",
     "en": "of the site"
    },
    "q": {
     "es": "Una dirección visual de panel de app educativa, con tokens compartidos con el taller Del aula al primer trabajo.",
     "en": "A learning-app dashboard look, with tokens shared with the From the classroom to a first job workshop."
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "Dirección visual",
     "en": "Visual direction"
    },
    "body": {
     "es": "Fondo lavanda, paneles blancos muy redondeados, mosaicos de color con texto siempre oscuro y bloques carbón para lo que pide acción. Los tokens vienen del taller de primer empleo y se sumaron dos colores para que cada una de las seis categorías tenga el suyo.",
     "en": "Lavender background, very rounded white panels, colour tiles that always carry dark text and charcoal blocks for anything that asks for action. The tokens come from the first-job workshop, with two colours added so each of the six categories has its own."
    }
   },
   {
    "t": "swatches",
    "h": {
     "es": "Color",
     "en": "Colour"
    },
    "dense": true,
    "note": {
     "es": "Tokens del tema claro. Cada categoría de cursos tiene su mosaico y las etiquetas de tema heredan ese color.",
     "en": "Light theme tokens. Each course category has its tile, and topic tags inherit that colour."
    },
    "groups": [
     {
      "name": {
       "es": "Base",
       "en": "Base"
      },
      "items": [
       {
        "token": "--bg",
        "hex": "#E9E8F6",
        "use": {
         "es": "Fondo general",
         "en": "Page background"
        }
       },
       {
        "token": "--surface",
        "hex": "#FFFFFF",
        "use": {
         "es": "Paneles",
         "en": "Panels"
        }
       },
       {
        "token": "--ink",
        "hex": "#1F1F24",
        "use": {
         "es": "Texto principal",
         "en": "Main text"
        }
       },
       {
        "token": "--muted",
        "hex": "#5B5A6B",
        "use": {
         "es": "Texto secundario",
         "en": "Secondary text"
        }
       },
       {
        "token": "--deep",
        "hex": "#24242A",
        "use": {
         "es": "Bloques carbón, barra y botones primarios",
         "en": "Charcoal blocks, bar and primary buttons"
        }
       },
       {
        "token": "--l1",
        "hex": "#5257C9",
        "use": {
         "es": "Links y acentos",
         "en": "Links and accents"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Mosaicos por categoría",
       "en": "Tiles by category"
      },
      "items": [
       {
        "token": "--t1",
        "hex": "#B9BBF6",
        "use": {
         "es": "Programación",
         "en": "Programming"
        }
       },
       {
        "token": "--t2",
        "hex": "#F7AB6A",
        "use": {
         "es": "Gestión y soft skills",
         "en": "Management and soft skills"
        }
       },
       {
        "token": "--t3",
        "hex": "#F8DE73",
        "use": {
         "es": "Marketing y finanzas",
         "en": "Marketing and finance"
        }
       },
       {
        "token": "--t4",
        "hex": "#B8D8C9",
        "use": {
         "es": "Ciudadanía digital y seguridad",
         "en": "Digital citizenship and security"
        }
       },
       {
        "token": "--t5",
        "hex": "#F2B8D2",
        "use": {
         "es": "Diseño, UX y UI",
         "en": "Design, UX and UI"
        }
       },
       {
        "token": "--t6",
        "hex": "#A9D3F0",
        "use": {
         "es": "Datos y ofimática",
         "en": "Data and office software"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Estados",
       "en": "States"
      },
      "items": [
       {
        "token": "--yes",
        "hex": "#17764A",
        "use": {
         "es": "Con certificado",
         "en": "With certificate"
        }
       },
       {
        "token": "--no",
        "hex": "#B4380F",
        "use": {
         "es": "Link en revisión",
         "en": "Link under review"
        }
       },
       {
        "token": "--mark",
        "hex": "#FFE680",
        "use": {
         "es": "Resaltado de la búsqueda",
         "en": "Search highlight"
        }
       }
      ]
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Tipografía",
     "en": "Typography"
    },
    "note": {
     "es": "Autoalojadas, con carga swap. Cuerpo de 17 px, interlineado de 1.65 y lectura a 70 caracteres.",
     "en": "Self-hosted, with swap loading. 17 px body, 1.65 line height and a 70-character measure."
    },
    "items": [
     {
      "k": {
       "es": "Outfit",
       "en": "Outfit"
      },
      "v": {
       "es": "Títulos, botones y etiquetas, en peso 600 con tracking negativo en tamaños grandes.",
       "en": "Headings, buttons and tags, weight 600 with negative tracking at large sizes."
      }
     },
     {
      "k": {
       "es": "Geist",
       "en": "Geist"
      },
      "v": {
       "es": "Texto de cuerpo.",
       "en": "Body text."
      }
     },
     {
      "k": {
       "es": "Geist Mono",
       "en": "Geist Mono"
      },
      "v": {
       "es": "Datos, contadores, duraciones y la terminal del Lobby.",
       "en": "Data, counters, durations and the lobby terminal."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Forma, movimiento y temas",
     "en": "Shape, motion and themes"
    },
    "items": [
     {
      "lead": {
       "es": "Forma",
       "en": "Shape"
      },
      "body": {
       "es": "Paneles de 2rem, bloques de 1.5rem, botones y chips en píldora. Sombras teñidas del fondo, nunca negras.",
       "en": "2rem panels, 1.5rem blocks, pill buttons and chips. Shadows tinted with the background, never black."
      }
     },
     {
      "lead": {
       "es": "Ilustración",
       "en": "Illustration"
      },
      "body": {
       "es": "Trazos de línea blancos y translúcidos, un objeto por thread: un camino con bandera, un birrete, un \"</>\" y una hoja con renglones.",
       "en": "White translucent line strokes, one object per thread: a path with a flag, a mortarboard, a \"</>\" and a lined sheet."
      }
     },
     {
      "lead": {
       "es": "Movimiento",
       "en": "Motion"
      },
      "body": {
       "es": "Entradas en cascada, contadores que suben, una terminal con una sesión simulada y una banda de temas que se frena con el cursor o el foco. Todo queda quieto con movimiento reducido.",
       "en": "Staggered entrances, counters that count up, a terminal with a simulated session and a topics band that stops on hover or focus. Everything stays still with reduced motion."
      }
     },
     {
      "lead": {
       "es": "Temas",
       "en": "Themes"
      },
      "body": {
       "es": "Claro y oscuro, según el sistema o elegido desde la barra. Los mosaicos llevan texto oscuro en los dos.",
       "en": "Light and dark, following the system or chosen from the bar. Tiles carry dark text in both."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Componentes y tema oscuro",
     "en": "Components and dark theme"
    },
    "images": [
     {
      "src": "servidor-ui.jpg",
      "link": {
       "url": "https://lpedaci.github.io/repo-servidor/ui/",
       "cta": {
        "es": "Ver la página de componentes",
        "en": "View the components page"
       }
      },
      "w": 1600,
      "h": 1022,
      "alt": {
       "es": "Página interna de componentes: muestras de color de la paleta, tipografía Outfit, Geist y Geist Mono, botones, chips y badges, cuatro mosaicos de color y un bloque carbón.",
       "en": "Internal components page: colour palette swatches, Outfit, Geist and Geist Mono type, buttons, chips and badges, four colour tiles and a charcoal block."
      },
      "caption": {
       "es": "La página /ui/ reúne los componentes para revisarlos en los dos temas.",
       "en": "The /ui/ page gathers the components to review them in both themes."
      }
     },
     {
      "src": "servidor-lobby-oscuro.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Lobby en tema oscuro: fondo casi negro, el mismo bloque carbón con terminal y los contadores.",
       "en": "Lobby in the dark theme: near-black background, the same charcoal block with terminal and counters."
      },
      "caption": {
       "es": "Tema oscuro: Lobby.",
       "en": "Dark theme: lobby."
      }
     },
     {
      "src": "servidor-cursos-oscuro.jpg",
      "w": 1600,
      "h": 1000,
      "alt": {
       "es": "Explorador de cursos en tema oscuro, con la vista de tabla: columnas de curso, proveedor, duración, idioma y certificación.",
       "en": "Course explorer in the dark theme, in table view: course, provider, duration, language and certificate columns."
      },
      "caption": {
       "es": "Tema oscuro: explorador en vista de tabla.",
       "en": "Dark theme: explorer in table view."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "03",
    "id": "validacion",
    "name": {
     "es": "Validación",
     "en": "Validation"
    },
    "mode": {
     "es": "verificar",
     "en": "verify"
    },
    "q": {
     "es": "Revisar el sitio publicado contra WCAG 2.1 AA, en los dos temas y en escritorio y celular.",
     "en": "Check the published site against WCAG 2.1 AA, in both themes and on desktop and mobile."
    }
   },
   {
    "t": "bullets",
    "h": {
     "es": "Revisión con axe",
     "en": "Review with axe"
    },
    "note": {
     "es": "Once páginas del sitio publicado (Lobby, threads, exploradores, posts, inventario, Sobre el server, búsqueda y 404), revisadas con axe en octubre de 2026.",
     "en": "Eleven pages of the published site (lobby, threads, explorers, posts, inventory, About, search and 404), reviewed with axe in October 2026."
    },
    "items": {
     "es": [
      "Tema claro, escritorio (1440 px): 0 errores en las 11 páginas.",
      "Tema claro, celular (375 px): 0 errores y sin desplazamiento horizontal.",
      "Tema oscuro, escritorio: 0 errores en 10 de las 11 páginas.",
      "Búsqueda en tema oscuro: el resaltado de las coincidencias no llega al contraste mínimo (detalle abajo).",
      "Un solo título principal por página y el idioma declarado como español de Argentina en todas."
     ],
     "en": [
      "Light theme, desktop (1440 px): 0 errors across the 11 pages.",
      "Light theme, mobile (375 px): 0 errors and no horizontal scrolling.",
      "Dark theme, desktop: 0 errors in 10 of the 11 pages.",
      "Search in the dark theme: the match highlight falls short of the minimum contrast (details below).",
      "One main heading per page and the language declared as Argentine Spanish on every page."
     ]
    }
   },
   {
    "t": "audit",
    "h": {
     "es": "Contraste",
     "en": "Contrast"
    },
    "note": {
     "es": "Combinaciones clave en los dos temas. Umbral: 4.5:1 para texto normal. La única que no cumple es el resaltado de la búsqueda en tema oscuro, porque el texto hereda el color secundario.",
     "en": "Key combinations in both themes. Threshold: 4.5:1 for normal text. The only one that fails is the search highlight in the dark theme, because the text inherits the secondary colour."
    },
    "cols": {
     "pair": {
      "es": "Combinación",
      "en": "Combination"
     },
     "ratio": {
      "es": "Ratio",
      "en": "Ratio"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "fail": {
     "es": "No cumple",
     "en": "Fails"
    },
    "pass": {
     "es": "Sí cumple",
     "en": "Passes"
    },
    "nofix": {
     "es": "No requiere cambios",
     "en": "No change needed"
    },
    "rows": [
     {
      "fg": "#A9A8B8",
      "bg": "#6B5700",
      "pair": {
       "es": "Coincidencia resaltada en la búsqueda: --muted sobre --mark (tema oscuro)",
       "en": "Highlighted search match: --muted on --mark (dark theme)"
      },
      "ratio": "3.00:1",
      "pass": false,
      "fix": {
       "es": "Dar a la marca el color --ink en lugar de heredarlo: 6.21:1",
       "en": "Give the mark the --ink colour instead of inheriting it: 6.21:1"
      },
      "fixfg": "#F1F0F7",
      "fixbg": "#6B5700"
     },
     {
      "fg": "#5B5A6B",
      "bg": "#FFE680",
      "pair": {
       "es": "La misma coincidencia en tema claro",
       "en": "The same match in the light theme"
      },
      "ratio": "5.41:1",
      "pass": true
     },
     {
      "fg": "#1F1F24",
      "bg": "#F2B8D2",
      "pair": {
       "es": "Texto oscuro sobre el mosaico de Diseño, UX y UI (tema claro)",
       "en": "Dark text on the Design, UX and UI tile (light theme)"
      },
      "ratio": "9.82:1",
      "pass": true
     },
     {
      "fg": "#5B5A6B",
      "bg": "#E9E8F6",
      "pair": {
       "es": "Texto --muted sobre el fondo lavanda (tema claro)",
       "en": "--muted text on the lavender background (light theme)"
      },
      "ratio": "5.56:1",
      "pass": true
     },
     {
      "fg": "#BDBCCB",
      "bg": "#24242A",
      "pair": {
       "es": "Texto secundario sobre bloque carbón",
       "en": "Secondary text on a charcoal block"
      },
      "ratio": "8.24:1",
      "pass": true
     },
     {
      "fg": "#1F1F24",
      "bg": "#93BBA9",
      "pair": {
       "es": "Texto oscuro sobre el mosaico verde agua (tema oscuro)",
       "en": "Dark text on the sea green tile (dark theme)"
      },
      "ratio": "7.75:1",
      "pass": true
     },
     {
      "fg": "#A9ACF7",
      "bg": "#1E1E23",
      "pair": {
       "es": "Link --l1 sobre panel (tema oscuro)",
       "en": "--l1 link on a panel (dark theme)"
      },
      "ratio": "7.85:1",
      "pass": true
     }
    ]
   },
   {
    "t": "stats",
    "items": [
     {
      "value": {
       "es": "160",
       "en": "160"
      },
      "label": {
       "es": "cursos filtrables",
       "en": "filterable courses"
      }
     },
     {
      "value": {
       "es": "158",
       "en": "158"
      },
      "label": {
       "es": "recursos",
       "en": "resources"
      }
     },
     {
      "value": {
       "es": "12",
       "en": "12"
      },
      "label": {
       "es": "posts entre charlas y guías",
       "en": "posts across talks and guides"
      }
     },
     {
      "value": {
       "es": "4",
       "en": "4"
      },
      "label": {
       "es": "threads temáticos",
       "en": "topic threads"
      }
     },
     {
      "value": {
       "es": "6",
       "en": "6"
      },
      "label": {
       "es": "categorías con su color",
       "en": "colour-coded categories"
      }
     }
    ],
    "h": {
     "es": "El server en cifras",
     "en": "The server in numbers"
    }
   },
   {
    "t": "live",
    "h": {
     "es": "El sitio, en vivo",
     "en": "The site, live"
    },
    "note": {
     "es": "Sitio estático con Astro, búsqueda con Pagefind y deploy automático en GitHub Pages. Sin cookies ni analytics.",
     "en": "Static site built with Astro, search with Pagefind and automatic deploys to GitHub Pages. No cookies and no analytics."
    },
    "src": "https://lpedaci.github.io/repo-servidor/",
    "url": "https://lpedaci.github.io/repo-servidor/",
    "label": {
     "es": "El servidor de Lourdes",
     "en": "Lourdes's server"
    }
   }
  ],
  "outcome": {
   "h": {
    "es": "Resultado",
    "en": "Outcome"
   },
   "body": [
    {
     "es": "El material pasó de páginas sueltas de Notion a un sitio donde 160 cursos y 158 recursos se filtran, se comparan, se buscan y se guardan. La revisión con axe no encontró errores en el tema claro, ni en escritorio ni en celular, y detectó un único problema de contraste en el tema oscuro, con su corrección definida.",
     "en": "The material went from loose Notion pages to a site where 160 courses and 158 resources can be filtered, compared, searched and saved. The axe review found no errors in the light theme, on desktop or mobile, and flagged a single contrast issue in the dark theme, with its fix defined."
    }
   ]
  }
 },
 "escape-room-finanzas": {
  "cat": "cap",
  "touch": "cont",
  "title": {
   "es": "Tu primer sueldo: escape room de finanzas personales",
   "en": "Your first paycheck: a personal finance escape room"
  },
  "subtitle": {
   "es": "Un juego web de cinco salas para practicar el recibo de sueldo, el presupuesto, la tarjeta, la inflación y las estafas digitales, pensado principalmente para el taller «Del aula al primer trabajo». Contenido de finanzas del Lic. Kevin Giampieri; diseño instruccional, gamificación, UX/UI y desarrollo de la Lic. Lourdes Pedaci.",
   "en": "A five-room web game to practise reading a payslip, budgeting, credit cards, inflation and online scams, built mainly for the “From the classroom to a first job” workshop. Finance content by Kevin Giampieri (Lic.); instructional design, gamification, UX/UI and development by Lourdes Pedaci (Lic.)."
  },
  "chips": {
   "es": [
    "Gamificación",
    "Finanzas personales",
    "Diseño instruccional",
    "UX/UI",
    "Accesibilidad"
   ],
   "en": [
    "Gamification",
    "Personal finance",
    "Instructional design",
    "UX/UI",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "El recibo de sueldo y las finanzas personales se ven en el taller, pero en dos horas no queda tiempo para practicarlos, y son temas que suelen dar miedo o aburrir.",
    "en": "Payslips and personal finance are covered in the workshop, but two hours leave no time to practise them, and the topics tend to feel intimidating or dull."
   },
   "solution": {
    "es": "Un escape room web, aparte del taller: cinco salas con candados, pistas a cambio de llaves y errores que explican qué se confundió, con Fuerte, un personaje que acompaña cada intento.",
    "en": "A web escape room alongside the workshop: five rooms with locks, hints paid with keys and errors that explain what went wrong, with Fuerte, a character who reacts to every attempt."
   },
   "results": [
    {
     "v": "5 × 3",
     "l": {
      "es": "salas en tres versiones, para volver a jugar sin memorizar",
      "en": "rooms in three versions, to replay without memorising"
     }
    },
    {
     "v": {
      "es": "30-35 min",
      "en": "30-35 min"
     },
     "l": {
      "es": "de juego, más 10 de puesta en común",
      "en": "of play, plus 10 for a group debrief"
     }
    },
    {
     "t": {
      "es": "Revisado contra WCAG 2.2 AA en tema claro y oscuro, de 375 a 1700 px.",
      "en": "Checked against WCAG 2.2 AA in light and dark themes, from 375 to 1700 px."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Diseño instruccional, gamificación, diseño UX/UI, design system y desarrollo web. Contenido de finanzas: Lic. Kevin Giampieri",
    "en": "Instructional design, gamification, UX/UI design, design system and web development. Finance content: Kevin Giampieri (Lic.)"
   },
   "timeline": {
    "es": "Noviembre 2026",
    "en": "November 2026"
   },
   "context": {
    "es": "Actividad aparte del taller Del aula al primer trabajo, para 6to año de secundaria técnica, Instituto Leonardo Murialdo",
    "en": "A standalone activity of the From the classroom to a first job workshop, for sixth-year technical secondary students, Instituto Leonardo Murialdo"
   },
   "stack": [
    "HTML/CSS/JS",
    "SVG",
    "Web Storage (localStorage)",
    "GitHub Pages"
   ],
   "methods": {
    "es": [
     "Gamificación",
     "Aprendizaje a partir del error",
     "Autoevaluación antes y después",
     "WCAG 2.2 AA"
    ],
    "en": [
     "Gamification",
     "Learning from mistakes",
     "Pre and post self-assessment",
     "WCAG 2.2 AA"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Escape room (en vivo)",
     "en": "Escape room (live)"
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/escape/"
   },
   {
    "label": {
     "es": "Design system",
     "en": "Design system"
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/diseno/"
   },
   {
    "label": {
     "es": "Entrada desde el taller",
     "en": "Entry from the workshop"
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/#finanzas"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El desafío",
     "en": "The challenge"
    },
    "body": {
     "es": "Que lo que se ve del recibo de sueldo y de finanzas personales se pueda practicar solo, sin presión y sin restarle tiempo a las dos horas del taller.",
     "en": "Make what the workshop covers about payslips and personal finance something students can practise on their own, without pressure and without taking time from the two-hour session."
    },
    "p": [
     {
      "es": "El contenido de finanzas es un aporte del Lic. Kevin Giampieri: mentalidad, salida de deudas, presupuesto e inversión. El juego lo cruza con el apartado del recibo de sueldo del mismo sitio y lo convierte en cinco situaciones del primer día de cobro.",
      "en": "The finance content is a contribution by Kevin Giampieri (Lic.): mindset, getting out of debt, budgeting and investing. The game combines it with the payslip section of the same site and turns it into five situations from your first payday."
     }
    ],
    "toc": {
     "es": "El desafío y el proyecto",
     "en": "The challenge and the project"
    }
   },
   {
    "t": "kv",
    "join": true,
    "h": {
     "es": "El proyecto",
     "en": "The project"
    },
    "items": [
     {
      "k": {
       "es": "Qué es",
       "en": "What it is"
      },
      "v": {
       "es": "Un escape room web: es tu primer día de cobro, la puerta de la oficina se trabó y para salir hay que abrir cinco candados.",
       "en": "A web escape room: it is your first payday, the office door is stuck and you need to open five locks to get out."
      }
     },
     {
      "k": {
       "es": "Dónde vive",
       "en": "Where it lives"
      },
      "v": {
       "es": "En una página propia del sitio del taller. Se llega desde el apartado de finanzas personales (#finanzas) y desde el del recibo de sueldo.",
       "en": "On its own page within the workshop site. It is reached from the personal finance section (#finanzas) and from the payslip section."
      }
     },
     {
      "k": {
       "es": "Contenido",
       "en": "Content"
      },
      "v": {
       "es": "Finanzas personales: Lic. Kevin Giampieri. Recibo de sueldo: el orden del Decreto N.º 407/2026. Todos los montos, nombres y dominios son ficticios.",
       "en": "Personal finance: Kevin Giampieri (Lic.). Payslip: the layout set by Decree No. 407/2026. All amounts, names and domains are fictional."
      }
     },
     {
      "k": {
       "es": "Mi aporte",
       "en": "My contribution"
      },
      "v": {
       "es": "Diseño instruccional, gamificación, diseño UX/UI, el personaje, el design system de la capa de juego y el desarrollo web.",
       "en": "Instructional design, gamification, UX/UI design, the character, the game-layer design system and the web development."
      }
     },
     {
      "k": {
       "es": "Privacidad",
       "en": "Privacy"
      },
      "v": {
       "es": "El avance y las insignias se guardan solo en el navegador. No se envía nada a ningún servidor.",
       "en": "Progress and badges are stored only in the browser. Nothing is sent to any server."
      }
     }
    ]
   },
   {
    "t": "preview",
    "h": {
     "es": "Cómo se llega",
     "en": "How students get there"
    },
    "note": {
     "es": "El juego no es una parada del mapa, para no romper las dos líneas de una hora: se llega desde el apartado de finanzas personales del taller, que cierra con un banner y Fuerte animado.",
     "en": "The game is not a stop on the map, so the two one-hour lines stay intact: it is reached from the workshop's personal finance section, which ends with a banner and an animated Fuerte."
    },
    "img": {
     "src": "escape-19-taller-finanzas.webp",
     "w": 1440,
     "h": 900
    },
    "url": "https://lpedaci.github.io/taller-primerempleo/#finanzas",
    "kicker": {
     "es": "En el taller",
     "en": "In the workshop"
    },
    "title": {
     "es": "Finanzas personales, con el escape room al cierre",
     "en": "Personal finance, with the escape room at the end"
    },
    "body": {
     "es": "Después de la actividad del apartado, un banner invita a jugar Tu primer sueldo: 30 a 35 minutos para poner a prueba lo que se vio del recibo, el presupuesto, la tarjeta, la inflación y las estafas.",
     "en": "After the section's activity, a banner invites students to play Your first paycheck: 30 to 35 minutes to test what they saw about payslips, budgeting, credit cards, inflation and scams."
    },
    "cta": {
     "es": "Ver el apartado de finanzas",
     "en": "See the finance section"
    }
   },
   {
    "t": "phase",
    "id": "diseno-instruccional",
    "n": "01",
    "name": {
     "es": "Diseño instruccional",
     "en": "Instructional design"
    },
    "mode": {
     "es": "aprendizaje",
     "en": "learning"
    },
    "q": {
     "es": "Qué se practica, en qué orden y cómo se aprende del error.",
     "en": "What is practised, in what order, and how students learn from mistakes."
    }
   },
   {
    "t": "taskflow",
    "h": {
     "es": "La secuencia didáctica",
     "en": "The learning sequence"
    },
    "note": {
     "es": "Seis momentos: medir lo que se sabe, explorar, resolver, cerrar con lo aprendido y volver a medir. Dura entre 30 y 35 minutos, más 10 de puesta en común.",
     "en": "Six moments: measure what you know, explore, solve, close with what was learned and measure again. It takes 30 to 35 minutes, plus 10 for a group debrief."
    },
    "steps": {
     "es": [
      "Autoevaluación: cinco frases de 1 a 4",
      "Inspeccionar los objetos de la sala",
      "Abrir el candado, con pistas si hacen falta",
      "Debrief: qué se resolvió y por qué",
      "Puerta final con las letras juntadas",
      "Antes y después: fortaleza y próximo paso"
     ],
     "en": [
      "Self-assessment: five statements, 1 to 4",
      "Inspect the objects in the room",
      "Open the lock, with hints if needed",
      "Debrief: what was solved and why",
      "Final door with the collected letters",
      "Before and after: strength and next step"
     ]
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Cinco salas, cinco temas",
     "en": "Five rooms, five topics"
    },
    "items": [
     {
      "lead": {
       "es": "1 | Recepción: el recibo",
       "en": "1 | Reception: the payslip"
      },
      "body": {
       "es": "Calcular el sueldo neto de un recibo con el monto tapado por una mancha de café. Bruto y neto, aportes y contribuciones.",
       "en": "Work out the net pay on a payslip whose total is hidden under a coffee stain. Gross and net, employee and employer contributions."
      }
     },
     {
      "lead": {
       "es": "2 | Oficina: el presupuesto",
       "en": "2 | Office: the budget"
      },
      "body": {
       "es": "Clasificar necesidades y gustos, y calcular cuánto se va por mes en gastos hormiga.",
       "en": "Sort needs from wants and work out how much small daily expenses add up to each month."
      }
     },
     {
      "lead": {
       "es": "3 | Caja: la tarjeta",
       "en": "3 | Till: the credit card"
      },
      "body": {
       "es": "Comparar dos ofertas en cuotas y reconocer el costo financiero total: la cuota más baja no siempre es la más barata.",
       "en": "Compare two instalment offers and recognise the total financial cost: the lowest instalment is not always the cheapest."
      }
     },
     {
      "lead": {
       "es": "4 | Bóveda: la inflación",
       "en": "4 | Vault: inflation"
      },
      "body": {
       "es": "Calcular cuánto falta para una compra después de que subió el precio. La plata quieta pierde poder de compra.",
       "en": "Work out how much is still missing for a purchase after a price rise. Idle money loses purchasing power."
      }
     },
     {
      "lead": {
       "es": "5 | Salida: los mensajes",
       "en": "5 | Exit: the messages"
      },
      "body": {
       "es": "Marcar las estafas entre cuatro mensajes del celular y nombrar la señal que las delata.",
       "en": "Spot the scams among four phone messages and name the sign that gives them away."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Reglas pensadas para aprender",
     "en": "Rules designed for learning"
    },
    "note": {
     "es": "El juego no castiga: el error es parte del recorrido.",
     "en": "The game does not punish: mistakes are part of the journey."
    },
    "items": {
     "es": [
      "Sin cuenta regresiva, sin forma de perder y sin ranking. El cronómetro es opcional y empieza oculto.",
      "Intentos ilimitados, y los errores más comunes tienen su propio mensaje: explican qué se confundió en lugar de decir solo «incorrecto».",
      "Debrief obligatorio después de cada candado, con una pregunta extra y una reflexión opcional.",
      "Pistas a cambio de llaves: se empieza con tres, cada reflexión suma una y, después de tres intentos fallidos seguidos, la próxima pista es gratis.",
      "Modo simple (?modo=simple): las mismas preguntas como cuestionario, sin la capa de juego, para quien lo necesite."
     ],
     "en": [
      "No countdown, no way to lose and no leaderboard. The timer is optional and hidden by default.",
      "Unlimited attempts, and the most common mistakes get their own message: it explains what was confused instead of just saying \"wrong\".",
      "A mandatory debrief after each lock, with a bonus question and an optional reflection.",
      "Hints paid with keys: you start with three, each reflection earns one and, after three failed attempts in a row, the next hint is free.",
      "Simple mode (?modo=simple): the same questions as a plain quiz, without the game layer, for anyone who needs it."
     ]
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Aprender del error",
     "en": "Learning from mistakes"
    },
    "note": {
     "es": "A la izquierda, un error esperado: el bruto en lugar del neto, con su explicación. A la derecha, el debrief que reemplaza al candado cuando se abre.",
     "en": "On the left, an expected mistake: gross instead of net pay, with its explanation. On the right, the debrief that replaces the lock once it opens."
    },
    "images": [
     {
      "src": "escape-05-error.webp",
      "w": 1338,
      "h": 637,
      "alt": {
       "es": "Candado de la sala 1 con la respuesta 1.000.000 y el aviso: Ese es el bruto. El neto es lo que te queda después de los descuentos. Debajo, dos pistas que cuestan una llave.",
       "en": "Room 1 lock with the answer 1,000,000 and the message: That is the gross pay. Net pay is what you keep after deductions. Below, two hints that cost a key each."
      }
     },
     {
      "src": "escape-06-debrief.webp",
      "w": 1338,
      "h": 1084,
      "alt": {
       "es": "Debrief de la sala 1: Candado abierto, nuevo nivel Claridad, intentos, pistas y letras del código, la explicación de lo resuelto, la opción de jugar otra versión y una pregunta para pensar.",
       "en": "Room 1 debrief: Lock open, new level Clarity, attempts, hints and code letters, the explanation of what was solved, the option to play another version and a question to think about."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Rejugar sin memorizar",
     "en": "Replay without memorising"
    },
    "items": [
     {
      "lead": {
       "es": "Tres versiones por sala",
       "en": "Three versions per room"
      },
      "body": {
       "es": "Inicial, intermedia y avanzada. Al empezar, cada sala toma una al azar, priorizando las que todavía no se resolvieron.",
       "en": "Beginner, intermediate and advanced. Each room picks one at random when a game starts, favouring the ones not solved yet."
      }
     },
     {
      "lead": {
       "es": "Una puerta que cambia",
       "en": "A door that changes"
      },
      "body": {
       "es": "La palabra de la puerta final sale de un banco sobre el tema y cambia en cada partida, con las letras desordenadas.",
       "en": "The final door's word comes from a topic word bank and changes every game, with the letters shuffled."
      }
     },
     {
      "lead": {
       "es": "Insignias de bronce, plata y oro",
       "en": "Bronze, silver and gold badges"
      },
      "body": {
       "es": "Una por dificultad: se gana al resolver las cinco salas en esa versión. Invitan a volver a jugar en lugar de repetir el mismo camino.",
       "en": "One per difficulty, earned by solving all five rooms at that level. They invite students to replay instead of repeating the same path."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Medir antes y después",
     "en": "Measuring before and after"
    },
    "note": {
     "es": "Las mismas cinco frases al entrar y al salir. La pantalla final muestra la fortaleza, el próximo paso y un código de resultado para el formulario de cierre.",
     "en": "The same five statements on the way in and out. The final screen shows the strongest area, the next step and a result code for the closing form."
    },
    "single": true,
    "medium": true,
    "images": [
     {
      "src": "escape-02-autoevaluacion.webp",
      "w": 1314,
      "h": 911,
      "alt": {
       "es": "Autoevaluación inicial ¿Cómo llegás?: cinco frases, como Sé diferenciar sueldo bruto y neto, con cuatro opciones de Para nada a Totalmente, y el botón Entrar a la oficina.",
       "en": "Initial self-assessment, How are you arriving?: five statements, such as I can tell gross and net pay apart, with four options from Not at all to Completely, and an Enter the office button."
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "diseno-ux-ui",
    "n": "02",
    "name": {
     "es": "Diseño UX/UI",
     "en": "UX/UI design"
    },
    "mode": {
     "es": "interfaz",
     "en": "interface"
    },
    "q": {
     "es": "Que el juego se entienda solo, en escritorio y en el celular.",
     "en": "A game that explains itself, on desktop and on mobile."
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "El panel y una sala",
     "en": "The dashboard and a room"
    },
    "note": {
     "es": "El panel es un hero en bento: la historia y las reglas en una tarjeta clara, y Fuerte en un afiche oscuro que muestra el avance. Cada sala tiene sus objetos arriba y el candado abajo.",
     "en": "The dashboard is a bento hero: the story and rules on a light card, and Fuerte on a dark poster that shows progress. Each room has its objects at the top and the lock below."
    },
    "images": [
     {
      "src": "escape-01-panel.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Panel del escape room Tu primer sueldo: la historia, tres reglas (5 salas, sin límite de tiempo, pistas a cambio de llaves), el botón Empezar y Fuerte con 0 de 5 luces encendidas. Debajo, las cinco salas bloqueadas.",
       "en": "Your first paycheck escape room dashboard: the story, three rules (5 rooms, no time limit, hints for keys), a Start button and Fuerte with 0 of 5 lights on. Below, the five locked rooms."
      }
     },
     {
      "src": "escape-03-sala.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Sala 1, El recibo: barra con el nivel de Fuerte, los cinco pasos y las llaves; dos objetos para inspeccionar (recibo de sueldo y nota de Recursos Humanos) y el candado ¿Cuál es tu sueldo neto?",
       "en": "Room 1, The payslip: a bar with Fuerte's level, the five steps and the keys; two objects to inspect (payslip and an HR note) and the lock What is your net pay?"
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Decisiones de interfaz",
     "en": "Interface decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Una página propia",
       "en": "A page of its own"
      },
      "body": {
       "es": "El juego empezó como una posible parada 12. Se movió a su propia página para no romper el ritmo de dos horas, con entradas livianas desde el recibo y finanzas.",
       "en": "The game started as a possible stop 12. It moved to its own page so the two-hour rhythm stays intact, with light entry points from the payslip and finance sections."
      }
     },
     {
      "lead": {
       "es": "Objetos hechos en HTML",
       "en": "Objects built in HTML"
      },
      "body": {
       "es": "El recibo es una tabla; los folletos, el sobre y los mensajes del celular también son HTML, no imágenes. Se leen con lector de pantalla y escalan.",
       "en": "The payslip is a table; leaflets, the envelope and phone messages are HTML too, not images. Screen readers can read them and they scale."
      }
     },
     {
      "lead": {
       "es": "El debrief en el lugar del candado",
       "en": "The debrief replaces the lock"
      },
      "body": {
       "es": "No es un modal: reemplaza el área del candado y el botón para seguir aparece debajo, así no se pierde el contexto de la sala.",
       "en": "It is not a modal: it replaces the lock area and the continue button appears below, so the room's context is never lost."
      }
     },
     {
      "lead": {
       "es": "Avance siempre a la vista",
       "en": "Progress always visible"
      },
      "body": {
       "es": "Barra con el nivel de Fuerte, los cinco pasos y el equipo (llaves, tiempo y letras). En el celular, el equipo va en una barra fija abajo que resume las letras con un conteo.",
       "en": "A bar with Fuerte's level, the five steps and the kit (keys, time and letters). On mobile, the kit sits in a fixed bottom bar that summarises the letters as a count."
      }
     },
     {
      "lead": {
       "es": "Respuestas que perdonan",
       "en": "Forgiving answers"
      },
      "body": {
       "es": "Sin distinguir espacios, puntos de miles, signo $, mayúsculas ni tildes. Los campos numéricos ponen el separador de miles al escribir.",
       "en": "Spaces, thousands separators, the $ sign, capitals and accents do not matter. Number fields add the thousands separator as you type."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Un objeto y la vista en el celular",
     "en": "An object and the mobile view"
    },
    "note": {
     "es": "Los objetos se abren en un diálogo nativo: el recibo respeta el orden de secciones del Decreto N.º 407/2026. En el celular, la sala va en una columna y el equipo, en la barra de abajo.",
     "en": "Objects open in a native dialog: the payslip follows the section order of Decree No. 407/2026. On mobile, the room is a single column and the kit sits in the bottom bar."
    },
    "images": [
     {
      "src": "escape-04-objeto.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Diálogo con el recibo de sueldo de la sala 1: datos del empleador y del trabajador, contribuciones del empleador y remuneración bruta y deducciones, con montos ficticios.",
       "en": "Dialog with the room 1 payslip: employer and employee details, employer contributions and gross pay and deductions, with fictional amounts."
      }
     },
     {
      "src": "escape-07-celular.webp",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "Sala 2, El presupuesto, en el celular: nivel Claridad, el paso 2 de 5, la versión inicial, la lista de gastos del mes y la barra inferior con llaves, tiempo y letras.",
       "en": "Room 2, The budget, on mobile: level Clarity, step 2 of 5, the beginner version, the monthly expenses list and the bottom bar with keys, time and letters."
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Una capa de juego reutilizable",
     "en": "A reusable game layer"
    },
    "body": {
     "es": "El juego usa el mismo design system del taller y le suma tokens propios (--juego-*), íconos de juego, un personaje y medallas. Llaves, candados, sellos e insignias tienen sus propios colores, para poder sumar juegos en otros apartados.",
     "en": "The game uses the workshop's design system and adds its own tokens (--juego-*), game icons, a character and medals. Keys, locks, seals and badges have their own colours, so more games can be added to other sections."
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Design system de la capa de juego",
     "en": "Game-layer design system"
    },
    "note": {
     "es": "Tokens del juego, el color de cada sala y los componentes propios. Las salas usan los tonos del taller sin los verdes: en el sistema, el verde es el color de afirmación y el de Finanzas personales.",
     "en": "Game tokens, each room's colour and the game's own components. Rooms use the workshop tones without the greens: in the system, green means confirmation and marks Personal finance."
    },
    "wide": true,
    "images": [
     {
      "src": "escape-12-tokens.webp",
      "w": 1354,
      "h": 228,
      "alt": {
       "es": "Tokens de la capa de juego: juego, juego suave, latón, botón del juego y candado abierto, cada uno con su nombre de token y su valor.",
       "en": "Game-layer tokens: game, soft game, brass, game button and open lock, each with its token name and value."
      }
     },
     {
      "src": "escape-13-salas-color.webp",
      "w": 1354,
      "h": 275,
      "alt": {
       "es": "Colores de las cinco salas: amarillo para el recibo, rosa para el presupuesto, celeste para la tarjeta, lavanda para la inflación y naranja para los mensajes.",
       "en": "Colours of the five rooms: yellow for the payslip, pink for the budget, light blue for the card, lavender for inflation and orange for the messages."
      }
     },
     {
      "src": "escape-14-componentes.webp",
      "w": 1354,
      "h": 244,
      "alt": {
       "es": "Componentes del juego: botón Probar, botón Jugar otra versión y la etiqueta de versión intermedia.",
       "en": "Game components: Try button, Play another version button and the intermediate version label."
      }
     },
     {
      "src": "escape-15-insignias-ds.webp",
      "w": 1600,
      "h": 287,
      "alt": {
       "es": "Insignias de bronce, plata y oro, cada una con un candado grabado y la condición para ganarla.",
       "en": "Bronze, silver and gold badges, each with an engraved padlock and the condition to earn it."
      }
     }
    ],
    "rowsOf": [
     1,
     1,
     1,
     1
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Insignias y avance en el panel",
     "en": "Badges and progress on the dashboard"
    },
    "note": {
     "es": "Sin ganar, cada medalla conserva su metal pero se ve tenue: el estado no depende solo del color, porque además dice «Ganada» o «3 de 5 salas». Se descargan como imagen.",
     "en": "Until earned, each medal keeps its metal but looks faded: the state does not rely on colour alone, as it also says \"Earned\" or \"3 of 5 rooms\". They can be downloaded as an image."
    },
    "images": [
     {
      "src": "escape-08-panel-avance.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Panel con avance: Fuerte con 1 de 5 luces encendidas, el botón Seguir en la sala 2 y la sala 1 marcada como resuelta.",
       "en": "Dashboard with progress: Fuerte with 1 of 5 lights on, a Continue in room 2 button and room 1 marked as solved."
      }
     },
     {
      "src": "escape-09-insignias.webp",
      "w": 1346,
      "h": 354,
      "alt": {
       "es": "Sección Insignias del panel: bronce, plata y oro con el avance por sala y el botón Descargar mis insignias.",
       "en": "Badges section on the dashboard: bronze, silver and gold with progress per room and a Download my badges button."
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "fuerte",
    "n": "",
    "name": {
     "es": "Fuerte, el personaje",
     "en": "Fuerte, the character"
    },
    "mode": {
     "es": "gamificación",
     "en": "gamification"
    },
    "q": {
     "es": "Un compañero que reacciona a cada intento, muestra el avance y nunca tapa la información.",
     "en": "A companion who reacts to every attempt, shows progress and never hides information."
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Expresiones y niveles",
     "en": "Expressions and levels"
    },
    "note": {
     "es": "Una caja fuerte de metal anodizado naranja, con visor, cejas, perilla de combinación y cinco luces, una por candado abierto.",
     "en": "An orange anodised-metal safe with a visor, eyebrows, a combination dial and five lights, one per lock opened."
    },
    "single": true,
    "images": [
     {
      "src": "escape-11-fuerte.webp",
      "w": 1600,
      "h": 417,
      "alt": {
       "es": "Fuerte en sus cuatro expresiones (normal, feliz, preocupado y pensando) y la escalera de niveles: Inicio, Claridad, Orden, Prudencia, Previsión y Seguridad.",
       "en": "Fuerte in its four expressions (neutral, happy, worried and thinking) and the level ladder: Start, Clarity, Order, Prudence, Foresight and Security."
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Quién es Fuerte",
     "en": "Who Fuerte is"
    },
    "items": [
     {
      "k": {
       "es": "Por qué una caja fuerte",
       "en": "Why a safe"
      },
      "v": {
       "es": "Junta las dos ideas del juego: abrir cerraduras y guardar la plata. El naranja metalizado no compite con el verde, que en el sistema es el color de afirmación.",
       "en": "It joins the game's two ideas: opening locks and keeping money safe. The metallic orange does not compete with green, which means confirmation in the system."
      }
     },
     {
      "k": {
       "es": "Personalidad",
       "en": "Personality"
      },
      "v": {
       "es": "Cercano, alentador y un poco tímido: cuando está tranquilo te mira, y si lo descubrís mirando se hace el distraído. Habla poco y en voseo: «Uy, casi. Fijate lo que dice abajo.»",
       "en": "Warm, encouraging and a little shy: when calm it watches you, and if you catch it looking it pretends to be distracted. It speaks briefly and informally: \"Oops, almost. Check what it says below.\""
      }
     },
     {
      "k": {
       "es": "Finalidad",
       "en": "Purpose"
      },
      "v": {
       "es": "Dar una respuesta emocional a cada intento, mostrar el avance con luces que se cuentan y firmar los mensajes del juego. Acompaña el texto, no lo reemplaza: el aviso de error o de acierto siempre está escrito.",
       "en": "Give an emotional response to each attempt, show progress with lights you can count and sign the game's messages. It supports the text, never replaces it: the error or success message is always written out."
      }
     },
     {
      "k": {
       "es": "Versiones",
       "en": "Versions"
      },
      "v": {
       "es": "La grande del panel y las salas, una mini que firma los mensajes, la del banner del sitio, que se anima sola, y la de la página de error, donde la gatita del taller duerme arriba de Fuerte.",
       "en": "The large one on the dashboard and in rooms, a mini one that signs messages, the one in the site banner, which animates on its own, and the one on the error page, where the workshop's cat sleeps on top of Fuerte."
      }
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Estados",
     "en": "States"
    },
    "cols": 4,
    "items": [
     {
      "title": {
       "es": "Normal",
       "en": "Neutral"
      },
      "tag": {
       "es": "en calma",
       "en": "at rest"
      },
      "body": {
       "es": "Flota suave y parpadea cada tanto. A veces sigue el cursor; a veces mira de frente o de costado.",
       "en": "It floats gently and blinks now and then. Sometimes it follows the cursor; sometimes it looks ahead or to the side."
      }
     },
     {
      "title": {
       "es": "Feliz",
       "en": "Happy"
      },
      "tag": {
       "es": "al acertar",
       "en": "on a correct answer"
      },
      "body": {
       "es": "Da un salto corto y se enciende una luz más: «¡Se encendió otra luz!»",
       "en": "It does a short jump and one more light turns on: \"Another light is on!\""
      }
     },
     {
      "title": {
       "es": "Preocupado",
       "en": "Worried"
      },
      "tag": {
       "es": "ante un error",
       "en": "after a mistake"
      },
      "body": {
       "es": "Niega con un balanceo breve y deriva al mensaje escrito que explica qué se confundió.",
       "en": "It shakes briefly and points to the written message that explains what went wrong."
      }
     },
     {
      "title": {
       "es": "Pensando",
       "en": "Thinking"
      },
      "tag": {
       "es": "al pedir pista",
       "en": "when asking for a hint"
      },
      "body": {
       "es": "Ladea la caja y deja de parpadear mientras acompaña la pista: «Te paso una ayuda.»",
       "en": "It tilts and stops blinking while it delivers the hint: \"Here is some help.\""
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Animaciones y comportamiento",
     "en": "Animation and behaviour"
    },
    "note": {
     "es": "Todo con transform y opacity, y todo apagado con prefers-reduced-motion: en ese caso, Fuerte queda quieto y mira de frente.",
     "en": "Everything uses transform and opacity, and everything turns off with prefers-reduced-motion: in that case Fuerte stays still and looks straight ahead."
    },
    "items": [
     {
      "lead": {
       "es": "Flotar y parpadear",
       "en": "Floating and blinking"
      },
      "body": {
       "es": "Un vaivén de 3,6 s y un parpadeo cada 5 s, para que se sienta vivo sin distraer de la tarea.",
       "en": "A 3.6 s sway and a blink every 5 s, so it feels alive without distracting from the task."
      }
     },
     {
      "lead": {
       "es": "Mirada",
       "en": "Gaze"
      },
      "body": {
       "es": "Alterna al azar entre seguir el cursor, mirar de frente y mirar de costado.",
       "en": "It switches at random between following the cursor, looking ahead and looking to the side."
      }
     },
     {
      "lead": {
       "es": "Cohibido",
       "en": "Shy"
      },
      "body": {
       "es": "Si el cursor se le posa encima, corre la vista y sube las cejas, como si lo hubieran descubierto mirando. Al rato vuelve a seguirte.",
       "en": "If the cursor rests on it, it looks away and raises its eyebrows, as if caught staring. After a moment it follows you again."
      }
     },
     {
      "lead": {
       "es": "Reacciones",
       "en": "Reactions"
      },
      "body": {
       "es": "Salto al acertar (0,7 s), negación ante un error (0,5 s) y ladeo al pensar (0,6 s). Son cortas, para no demorar el próximo intento.",
       "en": "A jump on success (0.7 s), a shake on a mistake (0.5 s) and a tilt while thinking (0.6 s). They are short, so the next attempt is never delayed."
      }
     },
     {
      "lead": {
       "es": "Subir de nivel",
       "en": "Levelling up"
      },
      "body": {
       "es": "Al resolver una sala, gira sobre su eje (0,9 s) y saluda con el brazo en la tarjeta del nivel nuevo.",
       "en": "When a room is solved, it spins on its axis (0.9 s) and waves from the new level card."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Niveles: hábitos, no tarjetas",
     "en": "Levels: habits, not cards"
    },
    "note": {
     "es": "Sube un nivel por sala resuelta.",
     "en": "It goes up one level per room solved."
    },
    "items": {
     "es": [
      "Inicio, Claridad, Orden, Prudencia, Previsión y Seguridad: cada nivel nombra el hábito que trabaja la sala.",
      "La sala de la tarjeta enseña a desconfiar de las cuotas, así que el premio no podía ser «subir de tarjeta».",
      "El avance no depende solo del color: las luces se cuentan y el nivel está escrito."
     ],
     "en": [
      "Start, Clarity, Order, Prudence, Foresight and Security: each level names the habit its room works on.",
      "The card room teaches students to distrust instalments, so the reward could not be \"upgrading your card\".",
      "Progress does not rely on colour alone: the lights can be counted and the level is written out."
     ]
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "De Chipi a Fuerte",
     "en": "From Chipi to Fuerte"
    },
    "body": {
     "es": "La primera mascota, Chipi, era una tarjeta con cara que cambiaba de color por nivel: costaba leerla y contradecía la sala de la tarjeta. La caja fuerte une cerraduras y ahorro, y muestra el avance con luces que se cuentan. El metal también se rehízo: las líneas de cepillado del primer intento se leían como tela, y se reemplazaron por bisel, punto de brillo y un reflejo nítido.",
     "en": "The first mascot, Chipi, was a card with a face that changed colour by level: it was hard to read and contradicted the card room. The safe joins locks and saving, and shows progress with countable lights. The metal was redone too: the brushed lines of the first attempt read as fabric, so they were replaced with a bevel, a highlight and a crisp reflection."
    }
   },
   {
    "t": "phase",
    "id": "validacion",
    "n": "03",
    "name": {
     "es": "Validación",
     "en": "Validation"
    },
    "mode": {
     "es": "accesibilidad y QA",
     "en": "accessibility and QA"
    },
    "q": {
     "es": "Sitio, juego y páginas de error revisados en tema claro y oscuro, a 1700, 1366, 1024, 768 y 375 px.",
     "en": "Site, game and error pages checked in light and dark themes at 1700, 1366, 1024, 768 and 375 px."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Qué se revisó",
     "en": "What was checked"
    },
    "note": {
     "es": "Pruebas en el navegador, con scripts de verificación y recorridos a mano.",
     "en": "Tests in the browser, with verification scripts and manual walkthroughs."
    },
    "items": [
     {
      "lead": {
       "es": "Contraste: corregido",
       "en": "Contrast: fixed"
      },
      "body": {
       "es": "Todo el texto contra su fondo real, en los dos temas. El crédito del pie daba 4,35:1 y 4,13:1 y se corrigió; en las salas, el contraste se ajustó por tema.",
       "en": "All text against its real background, in both themes. The footer credit measured 4.35:1 and 4.13:1 and was fixed; in the rooms, contrast was adjusted per theme."
      }
     },
     {
      "lead": {
       "es": "Teclado, foco y lectores de pantalla",
       "en": "Keyboard, focus and screen readers"
      },
      "body": {
       "es": "Foco visible, diálogos nativos que devuelven el foco y avisos de aciertos, errores, pistas e insignias en una región aria-live. Fuerte lleva aria-hidden y su información también está en texto.",
       "en": "Visible focus, native dialogs that return focus and announcements for correct answers, errors, hints and badges in an aria-live region. Fuerte is aria-hidden and its information is also in text."
      }
     },
     {
      "lead": {
       "es": "Estructura y objetivos táctiles",
       "en": "Structure and touch targets"
      },
      "body": {
       "es": "Un h1 por pantalla, títulos sin saltos y controles de al menos 24 × 24 px; los principales, de 44 px de alto.",
       "en": "One h1 per screen, no skipped heading levels and controls of at least 24 × 24 px; the main ones are 44 px tall."
      }
     },
     {
      "lead": {
       "es": "Responsive: corregido",
       "en": "Responsive: fixed"
      },
      "body": {
       "es": "Se ajustaron los cortes de las salas y del código (900 y 1600 px), y la barra del celular resume las letras para no desbordar.",
       "en": "Room and code breakpoints were adjusted (900 and 1600 px), and the mobile bar summarises the letters so it never overflows."
      }
     },
     {
      "lead": {
       "es": "QA de contenido y funcional",
       "en": "Content and functional QA"
      },
      "body": {
       "es": "Las quince versiones de las salas, los errores esperados, la pista gratis, el cambio de versión, las insignias, la descarga, la puerta con palabras de 5 y 10 letras y las dos páginas de error.",
       "en": "All fifteen room versions, expected mistakes, the free hint, switching versions, badges, the download, the door with 5- and 10-letter words and both error pages."
      }
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "es": "El escape room, en vivo",
     "en": "The escape room, live"
    },
    "note": {
     "es": "HTML, CSS y JavaScript sin frameworks, publicado en GitHub Pages. El avance se guarda en tu navegador.",
     "en": "HTML, CSS and JavaScript with no frameworks, published on GitHub Pages. Progress is saved in your browser."
    },
    "src": "https://lpedaci.github.io/taller-primerempleo/escape/",
    "url": "https://lpedaci.github.io/taller-primerempleo/escape/",
    "label": {
     "es": "Tu primer sueldo",
     "en": "Your first paycheck"
    }
   },
   {
    "t": "phase",
    "id": "en-cifras",
    "name": {
     "es": "El juego en cifras",
     "en": "The game in numbers"
    },
    "mode": {
     "es": "alcance",
     "en": "scope"
    },
    "q": {
     "es": "Lo que entra en una partida y lo que invita a volver.",
     "en": "What fits in one game and what invites players back."
    },
    "toc": {
     "es": "El juego en cifras y el resultado",
     "en": "The game in numbers and the outcome"
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "5",
      "label": {
       "es": "salas, una por tema",
       "en": "rooms, one per topic"
      }
     },
     {
      "value": "15",
      "label": {
       "es": "versiones entre las cinco salas",
       "en": "versions across the five rooms"
      }
     },
     {
      "value": "30-35 min",
      "label": {
       "es": "de juego, más 10 de puesta en común",
       "en": "of play, plus 10 for a group debrief"
      }
     },
     {
      "value": "3",
      "label": {
       "es": "insignias: bronce, plata y oro",
       "en": "badges: bronze, silver and gold"
      }
     },
     {
      "value": "6",
      "label": {
       "es": "niveles de Fuerte, uno por hábito",
       "en": "Fuerte levels, one per habit"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Próximos pasos",
     "en": "Next steps"
    },
    "items": {
     "es": [
      "Comparar las autoevaluaciones de entrada y salida con los códigos de resultado del formulario de cierre.",
      "Revisar con un especialista el contenido de las salas 3 y 5 (costo financiero total y estafas), que no forma parte del aporte de finanzas."
     ],
     "en": [
      "Compare the pre and post self-assessments using the result codes from the closing form.",
      "Review the content of rooms 3 and 5 (total financial cost and scams) with a specialist, as it is not part of the finance contribution."
     ]
    }
   }
  ],
  "outcome": {
   "join": true,
   "body": [
    {
     "es": "El taller suma una práctica de finanzas que se juega sola, aprende del error y se puede repetir en tres dificultades, sin quitarle tiempo a las dos horas. El contenido del Lic. Kevin Giampieri llega como cinco situaciones concretas del primer sueldo, y el diseño instruccional y el de la interfaz trabajan juntos: cada regla del juego existe para que se aprenda, y cada pantalla, para que se entienda sin explicación.",
     "en": "The workshop gains a finance practice that students play on their own, that learns from mistakes and can be replayed at three difficulty levels, without taking time from the two hours. Kevin Giampieri's content arrives as five concrete first-paycheck situations, and instructional and interface design work together: every game rule exists so that people learn, and every screen so that it can be understood without explanation."
    }
   ]
  }
 },
 "rumbo": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Rumbo, plataforma de onboarding corporativo",
   "en": "Rumbo, a corporate onboarding platform"
  },
  "subtitle": {
   "es": "Producto B2B para RRHH, jefes, personas nuevas y sistemas: el ingreso pensado como experiencia de aprendizaje y construido como prototipo navegable de alta fidelidad. Empresa y datos ficticios.",
   "en": "A B2B product for HR, managers, new hires and IT: joining a company designed as a learning experience and built as a high-fidelity, fully navigable prototype. Fictional company and data."
  },
  "chips": {
   "es": [
    "Learning Experience Design",
    "UX/UI",
    "Producto B2B",
    "WCAG 2.2 AA"
   ],
   "en": [
    "Learning Experience Design",
    "UX/UI",
    "B2B product",
    "WCAG 2.2 AA"
   ]
  },
  "summary": {
   "problem": {
    "es": "En muchas empresas, el ingreso de una persona vive en **planillas, correos sueltos y la memoria de quien la recibe**. La persona nueva no sabe qué hacer primero ni con quién hablar, el jefe llega al check-in sin datos, RRHH arma el mismo recorrido una y otra vez y sistemas recibe pedidos urgentes sin una forma segura de verificar quién los pide.",
    "en": "In many companies, a new hire's first weeks live in **spreadsheets, scattered emails and the memory of whoever welcomes them**. The new hire doesn't know what to do first or who to ask, the manager arrives at the check-in with no data, HR rebuilds the same journey again and again, and IT gets urgent requests with no safe way to verify who is asking."
   },
   "solution": {
    "es": "Rumbo convierte el ingreso en un **recorrido por etapas que RRHH diseña una vez por puesto**. Cada tarea tiene responsable, plazo y dependencias; el jefe acompaña con check-ins a los 30, 60 y 90 días, y RRHH ve dónde se traban los recorridos. **Lo especifiqué, lo diseñé y lo llevé a un prototipo funcional**, con un agente de IA como desarrollador.",
    "en": "Rumbo turns onboarding into a **staged journey that HR designs once per role**. Every task has an owner, a due date and dependencies; the manager follows up with check-ins at 30, 60 and 90 days, and HR sees where journeys get stuck. **I specified it, designed it and took it to a working prototype**, with an AI agent as the developer."
   },
   "results": [
    {
     "v": "40",
     "l": {
      "es": "pantallas para cuatro roles, en español e inglés",
      "en": "screens for four roles, in Spanish and English"
     }
    },
    {
     "v": "142",
     "l": {
      "es": "decisiones de diseño registradas, con la duda, lo decidido y por qué",
      "en": "design decisions logged, with the question, the decision and the reason"
     }
    },
    {
     "v": "0",
     "l": {
      "es": "errores de axe en 51 vistas y 6 anchos, de 320 a 1440 px",
      "en": "axe errors across 51 views and 6 widths, from 320 to 1440 px"
     }
    },
    {
     "t": {
      "es": "Lighthouse con 100 en accesibilidad en las cuatro pantallas medidas, 380 tests unitarios y 614 pruebas de punta a punta en verde.",
      "en": "Lighthouse scores 100 for accessibility on the four screens measured, with 380 unit tests and 614 end-to-end tests passing."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Experience Designer: supuestos y proto-personas, diseño instruccional del recorrido, arquitectura de la información, UX/UI, sistema de diseño, especificación funcional y dirección del desarrollo",
    "en": "Experience Designer: assumptions and proto-personas, instructional design of the journey, information architecture, UX/UI, design system, functional specification and directing the development"
   },
   "timeline": {
    "es": "Noviembre 2026",
    "en": "November 2026"
   },
   "context": {
    "es": "Producto conceptual para portfolio. Nortia S.A., sus personas y sus datos son ficticios",
    "en": "Concept product for my portfolio. Nortia S.A., its people and its data are fictional"
   },
   "stack": [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Radix y shadcn/ui",
    "Recharts",
    "Vitest",
    "Playwright",
    "GitHub Actions",
    "Claude Code"
   ],
   "methods": {
    "es": [
     "Lean UX",
     "Arquitectura de la información",
     "MoSCoW",
     "ISO/IEC 25010",
     "Diseño instruccional",
     "WCAG 2.2 AA",
     "Material Design 3",
     "Modelo C4"
    ],
    "en": [
     "Lean UX",
     "Information architecture",
     "MoSCoW",
     "ISO/IEC 25010",
     "Instructional design",
     "WCAG 2.2 AA",
     "Material Design 3",
     "C4 model"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Recorrer la demo",
     "en": "Explore the demo"
    },
    "url": "https://lpedaci.github.io/rumbo-app/"
   },
   {
    "label": {
     "es": "Sistema de diseño",
     "en": "Design system"
    },
    "url": "https://lpedaci.github.io/rumbo-app/#/design-system"
   },
   {
    "label": {
     "es": "Documentación y código",
     "en": "Docs and code"
    },
    "url": "https://github.com/lpedaci/rumbo-app"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "La idea",
     "en": "The idea"
    },
    "body": {
     "es": "El onboarding es el primer curso que toma una persona en una empresa, y pocas veces se diseña como uno.",
     "en": "Onboarding is the first course anyone takes at a company, and it is rarely designed like one."
    },
    "p": [
     {
      "es": "Rumbo lo trata así: etapas con objetivos, tareas que se habilitan en orden, hitos que se evalúan y una persona que siempre sabe **qué hacer, con quién y para cuándo**. Y lo construye como un producto: **cuatro roles con objetivos distintos usando la misma herramienta**, cada uno con lo que necesita ver.",
      "en": "Rumbo treats it that way: stages with goals, tasks that unlock in order, milestones that get assessed and a person who always knows **what to do, with whom and by when**. And it builds it as a product: **four roles with different goals using the same tool**, each one seeing what they need."
     }
    ]
   },
   {
    "t": "compare",
    "join": true,
    "accent": true,
    "lens": true,
    "arrow": false,
    "h": {
     "es": "Dos lentes sobre el mismo problema",
     "en": "Two lenses on the same problem"
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Lente LXD",
      "en": "LXD lens"
     },
     "after": {
      "es": "Lente UX/UI",
      "en": "UX/UI lens"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "La pregunta",
       "en": "The question"
      },
      "before": {
       "es": "¿Cómo aprende alguien a trabajar en un lugar nuevo?",
       "en": "How does someone learn to work somewhere new?"
      },
      "after": {
       "es": "¿Cómo usan una misma herramienta cuatro roles distintos?",
       "en": "How do four different roles use the same tool?"
      }
     },
     {
      "dim": {
       "es": "A quién pongo en el centro",
       "en": "Who I put at the centre"
      },
      "before": {
       "es": "A la persona nueva, que aprende, y a RRHH, que diseña el recorrido",
       "en": "The new hire, who is learning, and HR, who designs the journey"
      },
      "after": {
       "es": "A los cuatro roles, cada uno con su espacio y sus permisos",
       "en": "All four roles, each with its own space and permissions"
      }
     },
     {
      "dim": {
       "es": "Qué diseño",
       "en": "What I design"
      },
      "before": {
       "es": "Secuencia, andamiaje, hitos evaluables y retroalimentación",
       "en": "Sequence, scaffolding, assessable milestones and feedback"
      },
      "after": {
       "es": "Arquitectura de la información, flujos, interfaz y sistema de diseño",
       "en": "Information architecture, flows, interface and design system"
      }
     },
     {
      "dim": {
       "es": "Cómo sé que funciona",
       "en": "How I know it works"
      },
      "before": {
       "es": "La persona avanza, entiende por qué algo se traba y llega preparada al check-in",
       "en": "The new hire moves forward, understands why something is stuck and arrives ready for the check-in"
      },
      "after": {
       "es": "Cada rol encuentra lo suyo, sin errores de accesibilidad y en cualquier pantalla",
       "en": "Every role finds what it needs, with no accessibility errors, on any screen"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "descubrir",
    "n": "01",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Descubrir",
     "en": "Discover"
    },
    "q": {
     "es": "¿Quién vive el ingreso y qué le falta a cada uno?",
     "en": "Who goes through onboarding, and what does each of them lack?"
    }
   },
   {
    "t": "cards",
    "cols": 4,
    "h": {
     "es": "Cuatro roles, cuatro problemas",
     "en": "Four roles, four problems"
    },
    "items": [
     {
      "avatar": {
       "src": "rumbo-11-carla.webp",
       "w": 112,
       "h": 112
      },
      "title": "Carla Méndez",
      "tag": {
       "es": "RRHH y L&D",
       "en": "HR and L&D"
      },
      "body": {
       "es": "Diseña los recorridos y quiere demostrar con datos que funcionan, pero **se entera tarde de los problemas** y teme romper los ingresos en curso al cambiar una plantilla.",
       "en": "Designs the journeys and wants to prove with data that they work, but **hears about problems too late** and fears breaking ongoing journeys when she changes a template."
      }
     },
     {
      "avatar": {
       "src": "rumbo-12-martin.webp",
       "w": 112,
       "h": 112
      },
      "title": "Martín Rossi",
      "tag": {
       "es": "Jefe directo",
       "en": "Line manager"
      },
      "body": {
       "es": "Quiere que la persona sea productiva cuanto antes, sin que el acompañamiento le coma el día. **Se olvida de los check-ins** y llega sin saber qué hizo la persona.",
       "en": "Wants the new hire to be productive as soon as possible without mentoring eating up his day. **He forgets check-ins** and turns up without knowing what the person has done."
      }
     },
     {
      "avatar": {
       "src": "rumbo-10-sofia.webp",
       "w": 112,
       "h": 112
      },
      "title": "Sofía Ramírez",
      "tag": {
       "es": "Nuevo ingreso",
       "en": "New hire"
      },
      "body": {
       "es": "Quiere hacer las cosas bien y en orden. **No sabe si va bien**, espera accesos de otras áreas y le da vergüenza preguntar dos veces lo mismo.",
       "en": "Wants to do things right and in order. **She doesn't know if she is on track**, waits for access from other teams and feels awkward asking the same thing twice."
      }
     },
     {
      "avatar": {
       "src": "rumbo-13-diego.webp",
       "w": 112,
       "h": 112
      },
      "title": "Diego Ferreyra",
      "tag": {
       "es": "Sistemas",
       "en": "IT"
      },
      "body": {
       "es": "Tiene que resolver accesos rápido sin abrirle la puerta a la ingeniería social. Recibe pedidos por chat o en el pasillo, **sin datos para verificar quién pide**.",
       "en": "Has to sort out access quickly without opening the door to social engineering. Requests arrive by chat or in the corridor, **with no data to verify who is asking**."
      }
     }
    ]
   },
   {
    "t": "persona",
    "h": {
     "es": "Sofía, la persona que aprende",
     "en": "Sofía, the person who learns"
    },
    "photo": {
     "src": "rumbo-10-sofia.webp",
     "w": 112,
     "h": 112,
     "round": true,
     "alt": {
      "es": "Retrato de Sofía Ramírez, persona ficticia, con el anillo violeta del rol de nuevo ingreso",
      "en": "Portrait of Sofía Ramírez, a fictional person, with the violet ring of the new hire role"
     }
    },
    "name": "Sofía Ramírez",
    "meta": [
     {
      "k": {
       "es": "Rol",
       "en": "Role"
      },
      "v": {
       "es": "Nuevo ingreso",
       "en": "New hire"
      }
     },
     {
      "k": {
       "es": "Puesto",
       "en": "Position"
      },
      "v": {
       "es": "Analista de Datos Jr.",
       "en": "Junior Data Analyst"
      }
     },
     {
      "k": {
       "es": "Tipo",
       "en": "Type"
      },
      "v": {
       "es": "Proto-persona, hipótesis sin validar",
       "en": "Proto-persona, unvalidated hypothesis"
      }
     }
    ],
    "bio": {
     "es": "Motivada pero con incertidumbre. Necesita una lista clara, señales de progreso y **saber que trabarse por una dependencia no es su culpa**.",
     "en": "Motivated but unsure. She needs a clear list, signs of progress and **to know that being blocked by a dependency is not her fault**."
    },
    "goalsL": {
     "es": "Criterios de éxito",
     "en": "Success criteria"
    },
    "goals": {
     "es": [
      "Al entrar, ver de inmediato las 3 tareas más urgentes",
      "Entender por qué una tarea está bloqueada y quién la destraba",
      "Sentir que su opinión cuenta en los check-ins"
     ],
     "en": [
      "See her 3 most urgent tasks as soon as she logs in",
      "Understand why a task is blocked and who can unblock it",
      "Feel that her opinion counts in check-ins"
     ]
    },
    "painsL": {
     "es": "Frustraciones supuestas",
     "en": "Assumed frustrations"
    },
    "pains": {
     "es": [
      "Información repartida en muchos correos la primera semana",
      "No saber si va bien o si se está atrasando",
      "Esperar accesos de otras áreas sin saber a quién reclamar"
     ],
     "en": [
      "Information spread across many emails in the first week",
      "Not knowing whether she is on track or falling behind",
      "Waiting for access from other teams without knowing who to chase"
     ]
    }
   },
   {
    "t": "persona",
    "h": {
     "es": "Carla, la persona que diseña el recorrido",
     "en": "Carla, the person who designs the journey"
    },
    "photo": {
     "src": "rumbo-11-carla.webp",
     "w": 112,
     "h": 112,
     "round": true,
     "alt": {
      "es": "Retrato de Carla Méndez, persona ficticia, con el anillo petróleo del rol de RRHH",
      "en": "Portrait of Carla Méndez, a fictional person, with the teal ring of the HR role"
     }
    },
    "name": "Carla Méndez",
    "meta": [
     {
      "k": {
       "es": "Rol",
       "en": "Role"
      },
      "v": {
       "es": "RRHH y L&D",
       "en": "HR and L&D"
      }
     },
     {
      "k": {
       "es": "Puesto",
       "en": "Position"
      },
      "v": "People Partner"
     },
     {
      "k": {
       "es": "Tipo",
       "en": "Type"
      },
      "v": {
       "es": "Proto-persona, hipótesis sin validar",
       "en": "Proto-persona, unvalidated hypothesis"
      }
     }
    ],
    "bio": {
     "es": "Piensa en sistemas: **quiere diseñar una vez y reutilizar**. Revisa el estado general y baja al detalle solo cuando algo se sale de lo esperado.",
     "en": "Thinks in systems: **she wants to design once and reuse**. She checks the overall picture and drills down only when something goes off track."
    },
    "goalsL": {
     "es": "Criterios de éxito",
     "en": "Success criteria"
    },
    "goals": {
     "es": [
      "Ver en una sola pantalla qué recorridos están en riesgo y por qué",
      "Crear un recorrido nuevo en minutos a partir de una plantilla",
      "Responder con un gráfico dónde se traba el onboarding"
     ],
     "en": [
      "See on a single screen which journeys are at risk and why",
      "Create a new journey from a template in minutes",
      "Answer with a chart where onboarding gets stuck"
     ]
    },
    "painsL": {
     "es": "Frustraciones supuestas",
     "en": "Assumed frustrations"
    },
    "pains": {
     "es": [
      "El proceso vive en planillas, correos y la memoria de cada líder",
      "Las tareas de otras áreas se atrasan y no tiene cómo mostrarlo",
      "Miedo a romper los recorridos en curso al cambiar una plantilla"
     ],
     "en": [
      "The process lives in spreadsheets, emails and each leader's memory",
      "Tasks owned by other teams run late and she has no way to show it",
      "Fear of breaking ongoing journeys when she changes a template"
     ]
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "Proto-personas, no personas",
     "en": "Proto-personas, not personas"
    },
    "body": {
     "es": "Las construí con el enfoque de Lean UX (Gothelf y Seiden, 2021): **hipótesis explícitas, sin entrevistas ni citas inventadas**. Cada una tiene su tabla de supuestos con el riesgo si es falso y cómo validarlo, y el proyecto incluye un plan de validación en cinco etapas, con entre 2 y 6 personas por rol.",
     "en": "I built them with the Lean UX approach (Gothelf & Seiden, 2021): **explicit hypotheses, with no invented interviews or quotes**. Each one has its own table of assumptions, with the risk if it is false and how to validate it, and the project includes a five-stage validation plan with 2 to 6 people per role."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Los supuestos de mayor riesgo",
     "en": "The riskiest assumptions"
    },
    "note": {
     "es": "Cada supuesto, con cómo lo validaría.",
     "en": "Each assumption, with how I would validate it."
    },
    "items": [
     {
      "lead": {
       "es": "RRHH diseña los recorridos, no cada líder",
       "en": "HR designs the journeys, not each leader"
      },
      "body": {
       "es": "Entrevistas a RRHH y a líderes sobre quién arma hoy el plan de ingreso",
       "en": "Interviews with HR and leaders about who puts together the onboarding plan today"
      }
     },
     {
      "lead": {
       "es": "El problema es la visibilidad, no la falta de contenido",
       "en": "The problem is visibility, not a lack of content"
      },
      "body": {
       "es": "Pedirle a RRHH que ordene sus problemas actuales por impacto",
       "en": "Ask HR to rank their current problems by impact"
      }
     },
     {
      "lead": {
       "es": "Los líderes hacen check-ins formales a los 30, 60 y 90 días",
       "en": "Leaders hold formal check-ins at 30, 60 and 90 days"
      },
      "body": {
       "es": "Entrevistas sobre la frecuencia y el formato del seguimiento actual",
       "en": "Interviews about how often and how follow-up happens today"
      }
     },
     {
      "lead": {
       "es": "La persona nueva prefiere una lista guiada a un portal con mucha información",
       "en": "New hires prefer a guided list to an information-heavy portal"
      },
      "body": {
       "es": "Entrevistas a ingresos de los últimos seis meses sobre su primera semana",
       "en": "Interviews with people hired in the last six months about their first week"
      }
     }
    ]
   },
   {
    "t": "journey",
    "h": {
     "es": "Los primeros 90 días de Sofía (hipótesis)",
     "en": "Sofía's first 90 days (hypothesis)"
    },
    "note": {
     "es": "Mapa de experiencia hipotético, derivado de la proto-persona: no sale de entrevistas.",
     "en": "A hypothetical experience map derived from the proto-persona, not from interviews."
    },
    "labels": {
     "emotion": {
      "es": "Emoción",
      "en": "Emotion"
     },
     "actions": {
      "es": "Qué hace",
      "en": "What she does"
     },
     "feel": {
      "es": "Qué piensa",
      "en": "What she thinks"
     },
     "actors": {
      "es": "Quiénes participan",
      "en": "Who is involved"
     },
     "touch": {
      "es": "Puntos de contacto",
      "en": "Touchpoints"
     }
    },
    "stages": [
     {
      "name": {
       "es": "Preingreso",
       "en": "Pre-boarding"
      },
      "level": 0,
      "emo": {
       "es": "Expectativa",
       "en": "Anticipation"
      },
      "actions": {
       "es": "Recibe correos sueltos con formularios y documentos",
       "en": "Gets scattered emails with forms and documents"
      },
      "feel": {
       "es": "«¿Esto es todo lo que tengo que hacer antes de empezar?»",
       "en": "“Is this everything I need to do before I start?”"
      }
     },
     {
      "name": {
       "es": "Primer día",
       "en": "First day"
      },
      "level": -1,
      "emo": {
       "es": "Abrumada",
       "en": "Overwhelmed"
      },
      "actions": {
       "es": "Firma, recibe equipo, conoce gente, espera accesos",
       "en": "Signs papers, gets equipment, meets people, waits for access"
      },
      "feel": {
       "es": "«No sé por dónde empezar ni a quién preguntar»",
       "en": "“I don't know where to start or who to ask”"
      }
     },
     {
      "name": {
       "es": "Semana 1",
       "en": "Week 1"
      },
      "level": -1,
      "emo": {
       "es": "Trabada",
       "en": "Stuck"
      },
      "actions": {
       "es": "Hace cursos y lecturas; una tarea depende de un acceso que no llega",
       "en": "Takes courses and readings; one task depends on access that doesn't arrive"
      },
      "feel": {
       "es": "«¿Me estoy atrasando yo o me están atrasando?»",
       "en": "“Am I falling behind, or is someone holding me back?”"
      }
     },
     {
      "name": {
       "es": "Mes 1",
       "en": "Month 1"
      },
      "level": 1,
      "emo": {
       "es": "Encaminada",
       "en": "On track"
      },
      "actions": {
       "es": "Completa tareas, conoce su equipo, prepara la autoevaluación",
       "en": "Completes tasks, gets to know her team, prepares her self-review"
      },
      "feel": {
       "es": "«Ya entiendo qué se espera de mí»",
       "en": "“Now I understand what is expected of me”"
      }
     },
     {
      "name": {
       "es": "Check-in de 30 días",
       "en": "30-day check-in"
      },
      "level": 1,
      "emo": {
       "es": "Escuchada",
       "en": "Heard"
      },
      "actions": {
       "es": "Comparte cómo se siente; el jefe evalúa los hitos con ella",
       "en": "Shares how she feels; her manager reviews the milestones with her"
      },
      "feel": {
       "es": "«Mi opinión cuenta»",
       "en": "“My opinion counts”"
      }
     },
     {
      "name": {
       "es": "Días 30 a 90",
       "en": "Days 30 to 90"
      },
      "level": 1,
      "emo": {
       "es": "Autónoma",
       "en": "Independent"
      },
      "actions": {
       "es": "Toma trabajo real con menos acompañamiento",
       "en": "Takes on real work with less support"
      },
      "feel": {
       "es": "«Ya soy parte del equipo»",
       "en": "“I'm part of the team now”"
      }
     }
    ],
    "actors": {
     "es": [
      "Sofía",
      "Martín (jefe)",
      "Nicolás (buddy)",
      "Carla (RRHH)",
      "Diego (sistemas)"
     ],
     "en": [
      "Sofía",
      "Martín (manager)",
      "Nicolás (buddy)",
      "Carla (HR)",
      "Diego (IT)"
     ]
    },
    "touch": {
     "es": [
      "Correo",
      "Rumbo",
      "Reuniones",
      "Mesa de ayuda"
     ],
     "en": [
      "Email",
      "Rumbo",
      "Meetings",
      "Help desk"
     ]
    }
   },
   {
    "t": "prose",
    "p": [
     {
      "es": "Los momentos bajos (primer día y semana 1) son los que Rumbo ataca primero: **«Lo próximo»** para el primer día y **el aviso de tarea bloqueada** para la semana 1.",
      "en": "The low points (first day and week 1) are the ones Rumbo tackles first: **“Up next”** for the first day and **the blocked-task notice** for week 1."
     }
    ]
   },
   {
    "t": "phase",
    "id": "definir",
    "n": "02",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Definir",
     "en": "Define"
    },
    "q": {
     "es": "¿Qué tiene que hacer el producto y en qué orden?",
     "en": "What does the product need to do, and in what order?"
    }
   },
   {
    "t": "bars",
    "h": {
     "es": "Cómo prioricé: matriz de decisión ponderada",
     "en": "How I prioritised: a weighted decision matrix"
    },
    "title": {
     "es": "Peso de cada criterio al priorizar funciones",
     "en": "Weight of each criterion when prioritising features"
    },
    "lead": 0,
    "rows": [
     {
      "label": {
       "es": "Valor para el usuario",
       "en": "Value for the user"
      },
      "v": 40
     },
     {
      "label": {
       "es": "Demostración de habilidades en el portfolio",
       "en": "Showing skills in the portfolio"
      },
      "v": 35
     },
     {
      "label": {
       "es": "Facilidad sin backend",
       "en": "Ease without a backend"
      },
      "v": 25
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "De la matriz a dos fases",
     "en": "From the matrix to two phases"
    },
    "p": [
     {
      "es": "El resultado se expresó en MoSCoW y armó dos fases: **primero el núcleo**, lo que demuestra la propuesta, y **después la base corporativa**, lo que se espera de cualquier plataforma que maneja datos de personas. Incluí a propósito ==«demostración de habilidades» como criterio==: es un proyecto de portfolio y decirlo hace la priorización honesta.",
      "en": "The result was expressed with MoSCoW and produced two phases: **first the core**, which proves the idea, and **then the corporate baseline**, which anyone expects from a platform that handles personal data. I deliberately included ==“showing skills” as a criterion==: this is a portfolio project, and saying so keeps the prioritisation honest."
     }
    ]
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "Dos fases, ocho áreas",
     "en": "Two phases, eight areas"
    },
    "cols": {
     "dim": {
      "es": "Área",
      "en": "Area"
     },
     "before": {
      "es": "Núcleo (fase A)",
      "en": "Core (phase A)"
     },
     "after": {
      "es": "Base corporativa (fase B)",
      "en": "Corporate baseline (phase B)"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Acceso y seguridad",
       "en": "Access and security"
      },
      "before": {
       "es": "SSO y verificación en dos pasos simulados, bloqueo por intentos y derivación a sistemas",
       "en": "Simulated SSO and two-step verification, lockout after failed attempts and referral to IT"
      },
      "after": {
       "es": "Sesiones activas, alertas de inicio inusual y doble aprobación de cambios sensibles",
       "en": "Active sessions, unusual sign-in alerts and dual approval of sensitive changes"
      }
     },
     {
      "dim": {
       "es": "Recorrido",
       "en": "Journey"
      },
      "before": {
       "es": "Recorrido por etapas, con tareas, cursos y dependencias",
       "en": "Staged journey with tasks, courses and dependencies"
      },
      "after": {
       "es": "Comentarios con menciones en cada tarea",
       "en": "Comments with mentions on every task"
      }
     },
     {
      "dim": {
       "es": "Plantillas",
       "en": "Templates"
      },
      "before": {
       "es": "Constructor con arrastrar y soltar y alternativa por teclado",
       "en": "Builder with drag and drop and a keyboard alternative"
      },
      "after": {
       "es": "Borrador, publicación, versiones y comparación",
       "en": "Draft, publishing, versions and comparison"
      }
     },
     {
      "dim": {
       "es": "Personas e ingresos",
       "en": "People and hires"
      },
      "before": {
       "es": "Alta con fechas calculadas desde la plantilla",
       "en": "New hires with dates calculated from the template"
      },
      "after": {
       "es": "Personas y catálogos; altas, cambios de puesto y bajas con sus accesos",
       "en": "People and catalogues; joiners, role changes and leavers with their access"
      }
     },
     {
      "dim": {
       "es": "Seguimiento",
       "en": "Follow-up"
      },
      "before": {
       "es": "Panel con alertas y check-ins 30/60/90 con escalamiento",
       "en": "Dashboard with alerts and 30/60/90 check-ins with escalation"
      },
      "after": {
       "es": "Notificaciones, reportes en CSV y vistas para imprimir",
       "en": "Notifications, CSV reports and print views"
      }
     },
     {
      "dim": {
       "es": "Control",
       "en": "Control"
      },
      "before": {
       "es": "Solicitudes de acceso, auditoría y matriz de permisos",
       "en": "Access requests, audit log and permission matrix"
      },
      "after": {
       "es": "Revisión periódica de accesos por cada jefe",
       "en": "Periodic access review by each manager"
      }
     },
     {
      "dim": {
       "es": "Privacidad",
       "en": "Privacy"
      },
      "before": {
       "es": "Mínimo privilegio: cada rol ve solo lo que necesita",
       "en": "Least privilege: each role sees only what it needs"
      },
      "after": {
       "es": "Aviso de privacidad, DNI y CUIL ocultos, solicitudes de la Ley 25.326",
       "en": "Privacy notice, masked ID and tax numbers, requests under Argentina's Law 25,326"
      }
     },
     {
      "dim": {
       "es": "Uso diario",
       "en": "Everyday use"
      },
      "before": {
       "es": "«Ver como», aviso de sesión por vencer y «Restablecer demo»",
       "en": "“View as”, session timeout warning and “Reset demo”"
      },
      "after": {
       "es": "Búsqueda global, ayuda por pantalla, preferencias y la interfaz en inglés",
       "en": "Global search, help on every screen, preferences and the interface in English"
      }
     }
    ]
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "89",
      "label": {
       "es": "requerimientos funcionales hechos",
       "en": "functional requirements done"
      }
     },
     {
      "value": "8",
      "label": {
       "es": "fuera de alcance, a propósito",
       "en": "out of scope, on purpose"
      }
     },
     {
      "value": "57",
      "label": {
       "es": "requerimientos no funcionales según ISO/IEC 25010",
       "en": "non-functional requirements under ISO/IEC 25010"
      }
     },
     {
      "value": "14",
      "label": {
       "es": "casos de uso",
       "en": "use cases"
      }
     }
    ]
   },
   {
    "t": "cards",
    "cols": 2,
    "h": {
     "es": "Arquitectura de la información",
     "en": "Information architecture"
    },
    "note": {
     "es": "Basada en los cuatro sistemas de Rosenfeld, Morville y Arango (2015).",
     "en": "Based on the four systems described by Rosenfeld, Morville and Arango (2015)."
    },
    "items": [
     {
      "title": {
       "es": "Organización por audiencia",
       "en": "Organised by audience"
      },
      "body": {
       "es": "Cada rol tiene su propio espacio (/admin, /manager, /me, /it) y su navegación. No es solo orden: **es mínimo privilegio**, porque cada rol ve datos distintos.",
       "en": "Each role has its own space (/admin, /manager, /me, /it) and its own navigation. It is not just about order: **it is least privilege**, because each role sees different data."
      }
     },
     {
      "title": {
       "es": "Rotulado con vocabulario fijo",
       "en": "Labels from a fixed vocabulary"
      },
      "body": {
       "es": "Un glosario define cada término y **un test impide usar los prohibidos**. Por ejemplo, «cuenta de trabajo» en lugar de «cuenta corporativa», en todo el producto.",
       "en": "A glossary defines every term and **a test blocks the banned ones**. For example, “work account” instead of “corporate account”, across the whole product."
      }
     },
     {
      "title": {
       "es": "Navegación",
       "en": "Navigation"
      },
      "body": {
       "es": "Barra lateral con los ítems del rol, barra superior con «Ver como», ayuda y notificaciones, y en celulares un menú inferior solo con íconos.",
       "en": "A sidebar with the role's items, a top bar with “View as”, help and notifications, and an icon-only bottom menu on phones."
      }
     },
     {
      "title": {
       "es": "Búsqueda filtrada por permisos",
       "en": "Search filtered by permissions"
      },
      "body": {
       "es": "Ctrl+K o / desde cualquier pantalla. **Cada rol encuentra solo lo que tiene permitido ver**; un test lo verifica por rol.",
       "en": "Ctrl+K or / from any screen. **Each role only finds what it is allowed to see**; a test checks this for every role."
      }
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Task flow: hacer un check-in (jefe directo)",
     "en": "Task flow: running a check-in (line manager)"
    },
    "steps": {
     "es": [
      "Ver el próximo check-in",
      "Leer la autoevaluación",
      "Evaluar cada hito",
      "Escribir comentarios y próximos pasos",
      "Enviar el check-in",
      "Ver el historial"
     ],
     "en": [
      "See the next check-in",
      "Read the self-review",
      "Assess each milestone",
      "Write comments and next steps",
      "Submit the check-in",
      "See the history"
     ]
    }
   },
   {
    "t": "decisionflow",
    "h": {
     "es": "User flow: check-in con escalamiento",
     "en": "User flow: check-in with escalation"
    },
    "note": {
     "es": "La autoevaluación va antes de la reunión pero no es obligatoria. Solo el escalamiento genera una alerta: escalar se diseñó como apoyo, no como castigo, y por eso es una decisión explícita del jefe.",
     "en": "The self-review comes before the meeting but is not mandatory. Only escalation triggers an alert: escalating was designed as support, not punishment, so it is an explicit decision by the manager."
    },
    "nodes": [
     {
      "kind": "start",
      "label": {
       "es": "Hacer el check-in",
       "en": "Start the check-in"
      }
     },
     {
      "kind": "decision",
      "label": {
       "es": "¿Respondió la autoevaluación?",
       "en": "Has she answered the self-review?"
      },
      "branches": [
       {
        "label": {
         "es": "Sí",
         "en": "Yes"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Leer la autoevaluación",
           "en": "Read the self-review"
          }
         }
        ]
       },
       {
        "label": {
         "es": "No",
         "en": "No"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Aviso: todavía no respondió",
           "en": "Notice: no answer yet"
          }
         }
        ]
       }
      ]
     },
     {
      "kind": "step",
      "label": {
       "es": "Evaluar cada hito",
       "en": "Assess each milestone"
      }
     },
     {
      "kind": "decision",
      "label": {
       "es": "¿Algún hito no cumplido?",
       "en": "Any milestone not met?"
      },
      "branches": [
       {
        "label": {
         "es": "No",
         "en": "No"
        }
       },
       {
        "label": {
         "es": "Sí",
         "en": "Yes"
        },
        "nodes": [
         {
          "kind": "decision",
          "label": {
           "es": "¿Qué acción?",
           "en": "Which action?"
          },
          "branches": [
           {
            "label": {
             "es": "Reprogramar",
             "en": "Reschedule"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Elegir nueva fecha",
               "en": "Pick a new date"
              }
             }
            ]
           },
           {
            "label": {
             "es": "Escalar a RRHH",
             "en": "Escalate to HR"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Escribir la nota de escalamiento",
               "en": "Write the escalation note"
              }
             }
            ]
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "kind": "step",
      "label": {
       "es": "Comentarios y próximos pasos",
       "en": "Comments and next steps"
      }
     },
     {
      "kind": "step",
      "label": {
       "es": "Enviar el check-in",
       "en": "Submit the check-in"
      }
     },
     {
      "kind": "decision",
      "label": {
       "es": "¿Todos los hitos evaluados?",
       "en": "All milestones assessed?"
      },
      "branches": [
       {
        "label": {
         "es": "No",
         "en": "No"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Error junto al hito",
           "en": "Error next to the milestone"
          }
         }
        ],
        "to": {
         "es": "Evaluar cada hito",
         "en": "Assess each milestone"
        }
       },
       {
        "label": {
         "es": "Sí",
         "en": "Yes"
        }
       }
      ]
     },
     {
      "kind": "end",
      "label": {
       "es": "Guardado en el historial",
       "en": "Saved to the history"
      }
     },
     {
      "kind": "end",
      "dashed": true,
      "label": {
       "es": "Alerta para RRHH en el panel",
       "en": "Alert for HR on the dashboard"
      },
      "cond": {
       "es": "Solo si se escaló",
       "en": "Only if escalated"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     1,
     1
    ],
    "h": {
     "es": "Wireflows",
     "en": "Wireflows"
    },
    "note": {
     "es": "Los wireflows se generan desde la app, así que muestran las pantallas reales.",
     "en": "The wireflows are generated from the app, so they show the real screens."
    },
    "images": [
     {
      "src": "rumbo-20-wireflow-journey.webp",
      "w": 2306,
      "h": 370,
      "alt": {
       "es": "Wireflow del recorrido del nuevo ingreso, con capturas reales de cada paso: bienvenida guiada, Mi recorrido, detalle de la tarea, tarea bloqueada y autoevaluación",
       "en": "Wireflow of the new hire's journey with real screenshots of each step: guided welcome, My journey, task detail, blocked task and self-review"
      }
     },
     {
      "src": "rumbo-21-wireflow-template.webp",
      "w": 2306,
      "h": 370,
      "alt": {
       "es": "Wireflow de la creación de una plantilla: catálogo, plantilla nueva, editor con orden y dependencias, vista previa y guardado",
       "en": "Wireflow of creating a template: catalogue, new template, editor with ordering and dependencies, preview and saving"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "aprendizaje",
    "n": "03",
    "lens": "cap",
    "mode": {
     "es": "Lente LXD",
     "en": "LXD lens"
    },
    "name": {
     "es": "Diseñar el aprendizaje",
     "en": "Designing the learning"
    },
    "q": {
     "es": "¿Cómo se aprende a trabajar en un lugar nuevo, paso a paso?",
     "en": "How do you learn to work somewhere new, step by step?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "El recorrido como un curso",
     "en": "The journey as a course"
    },
    "p": [
     {
      "es": "Un recorrido de ingreso tiene **la misma estructura que un buen curso**: objetivos por etapa, actividades en orden, puntos de control y alguien que acompaña. La diferencia es que no lo dicta una persona, lo diseña RRHH una vez por puesto y se adapta solo a cada fecha de ingreso.",
      "en": "An onboarding journey has **the same structure as a good course**: goals for each stage, activities in order, checkpoints and someone alongside. The difference is that nobody teaches it live: HR designs it once per role and it adapts itself to each start date."
     },
     {
      "es": "Por eso Rumbo tiene dos usuarios de diseño instruccional: Sofía, que aprende, y Carla, que diseña. ==El constructor de plantillas es, en el fondo, una herramienta de autoría.==",
      "en": "That is why Rumbo has two instructional design users: Sofía, who learns, and Carla, who designs. ==At heart, the template builder is an authoring tool.=="
     }
    ]
   },
   {
    "t": "timeline",
    "h": {
     "es": "El recorrido, en días",
     "en": "The journey, in days"
    },
    "name": {
     "es": "Cuatro etapas, de 30 días antes del ingreso al día 90",
     "en": "Four stages, from 30 days before day one to day 90"
    },
    "sub": {
     "es": "Los límites de cada etapa son fijos y **la etapa de cada tarea sale de su plazo**: RRHH carga «día 12» y Rumbo la ubica en Mes 1 y calcula la fecha real.",
     "en": "Stage boundaries are fixed and **each task's stage comes from its due day**: HR enters “day 12” and Rumbo places it in Month 1 and works out the real date."
    },
    "unit": {
     "es": "días",
     "en": "days"
    },
    "start": -30,
    "end": 90,
    "ticks": [
     -30,
     0,
     7,
     30,
     60,
     90
    ],
    "axisL": {
     "es": "Días respecto del ingreso (día 0)",
     "en": "Days relative to the start date (day 0)"
    },
    "exL": {
     "es": "En el recorrido de Sofía",
     "en": "In Sofía's journey"
    },
    "marks": [
     {
      "at": 0,
      "label": {
       "es": "Ingreso",
       "en": "Day one"
      }
     },
     {
      "at": 30,
      "label": {
       "es": "Check-in 30",
       "en": "Check-in 30"
      }
     },
     {
      "at": 60,
      "label": {
       "es": "Check-in 60",
       "en": "Check-in 60"
      }
     },
     {
      "at": 90,
      "label": {
       "es": "Check-in 90",
       "en": "Check-in 90"
      }
     }
    ],
    "stages": [
     {
      "name": {
       "es": "Preingreso",
       "en": "Pre-boarding"
      },
      "from": -30,
      "to": -1,
      "range": {
       "es": "Días -30 a -1",
       "en": "Days -30 to -1"
      },
      "body": {
       "es": "Papeles, cuenta y equipo **listos antes del primer día**.",
       "en": "Paperwork, account and equipment **ready before day one**."
      },
      "ex": {
       "es": "Firmar contrato y documentación, crear la cuenta de trabajo, preparar la computadora",
       "en": "Sign the contract and documents, create the work account, set up the computer"
      }
     },
     {
      "name": {
       "es": "Semana 1",
       "en": "Week 1"
      },
      "from": 0,
      "to": 6,
      "range": {
       "es": "Días 0 a 6",
       "en": "Days 0 to 6"
      },
      "body": {
       "es": "Bienvenida y orientación: **pocas tareas y bien a la vista** con «Lo próximo».",
       "en": "Welcome and orientation: **few tasks, clearly in view** in “Up next”."
      },
      "ex": {
       "es": "Reunión de bienvenida con RRHH, entrega de puesto y credencial, manual de cultura",
       "en": "Welcome meeting with HR, desk and badge handover, culture handbook"
      }
     },
     {
      "name": {
       "es": "Mes 1",
       "en": "Month 1"
      },
      "from": 7,
      "to": 29,
      "range": {
       "es": "Días 7 a 29",
       "en": "Days 7 to 29"
      },
      "body": {
       "es": "Primeras tareas del puesto, que **se habilitan en orden** según sus dependencias.",
       "en": "First tasks of the role, which **unlock in order** according to their dependencies."
      },
      "ex": {
       "es": "Primer análisis guiado, presentar resultados al equipo",
       "en": "First guided analysis, present results to the team"
      }
     },
     {
      "name": {
       "es": "Días 30 a 90",
       "en": "Days 30 to 90"
      },
      "from": 30,
      "to": 90,
      "range": {
       "es": "Días 30 a 90",
       "en": "Days 30 to 90"
      },
      "body": {
       "es": "Trabajo real con menos acompañamiento y **tres check-ins para ajustar el rumbo**.",
       "en": "Real work with less support and **three check-ins to adjust course**."
      },
      "ex": {
       "es": "Proyecto propio: tablero de métricas, retrospectiva del recorrido",
       "en": "Own project: metrics dashboard, journey retrospective"
      }
     }
    ],
    "legend": {
     "es": [
      "**Día 0:** el ingreso; las fechas reales se calculan desde ahí",
      "**Días 30, 60 y 90:** check-ins con el jefe directo, con la autoevaluación antes"
     ],
     "en": [
      "**Day 0:** the start date; real dates are calculated from it",
      "**Days 30, 60 and 90:** check-ins with the line manager, preceded by the self-review"
     ]
    }
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "Del principio a la pantalla",
     "en": "From principle to screen"
    },
    "cols": {
     "dim": {
      "es": "Principio",
      "en": "Principle"
     },
     "before": {
      "es": "Qué buscaba",
      "en": "What I was after"
     },
     "after": {
      "es": "Cómo se ve en Rumbo",
      "en": "How it shows in Rumbo"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Secuencia y andamiaje",
       "en": "Sequence and scaffolding"
      },
      "before": {
       "es": "Que cada paso se apoye en el anterior",
       "en": "Each step builds on the previous one"
      },
      "after": {
       "es": "Etapas fijas y dependencias: **una tarea se habilita cuando está hecha la previa**, y el aviso dice cuál es y quién la completa",
       "en": "Fixed stages and dependencies: **a task unlocks once the previous one is done**, and the notice says which one it is and who completes it"
      }
     },
     {
      "dim": {
       "es": "Foco y carga cognitiva",
       "en": "Focus and cognitive load"
      },
      "before": {
       "es": "Que el primer día no abrume",
       "en": "The first day shouldn't overwhelm"
      },
      "after": {
       "es": "«Lo próximo» muestra **solo las 3 tareas más urgentes** y las hechas se pliegan",
       "en": "“Up next” shows **only the 3 most urgent tasks**, and finished ones collapse"
      }
     },
     {
      "dim": {
       "es": "Evaluación formativa",
       "en": "Formative assessment"
      },
      "before": {
       "es": "Evaluar para ajustar, no para calificar",
       "en": "Assess to adjust, not to grade"
      },
      "after": {
       "es": "Check-ins a los 30, 60 y 90 días con hitos **cumplidos, parciales o no cumplidos**, y la opción de reprogramar o escalar",
       "en": "Check-ins at 30, 60 and 90 days with milestones **met, partly met or not met**, and the option to reschedule or escalate"
      }
     },
     {
      "dim": {
       "es": "Voz de quien aprende",
       "en": "The learner's voice"
      },
      "before": {
       "es": "Que la persona reflexione sobre su avance",
       "en": "The new hire reflects on her progress"
      },
      "after": {
       "es": "Autoevaluación y «cómo te sentís» antes del check-in, que **el jefe lee antes de la reunión**",
       "en": "A self-review and “how are you feeling” before the check-in, which **the manager reads before the meeting**"
      }
     },
     {
      "dim": {
       "es": "Retroalimentación del progreso",
       "en": "Progress feedback"
      },
      "before": {
       "es": "Saber si se va bien sin preguntar",
       "en": "Knowing you are on track without asking"
      },
      "after": {
       "es": "Línea de tiempo con el marcador «Hoy, día 28» y una frase con la conclusión: **«Vas al día»**",
       "en": "A timeline with a “Today, day 28” marker and a sentence with the takeaway: **“You're on track”**"
      }
     },
     {
      "dim": {
       "es": "Variedad de modalidades",
       "en": "Variety of formats"
      },
      "before": {
       "es": "Aprender de distintas formas",
       "en": "Learning in different ways"
      },
      "after": {
       "es": "Cada tarea es una tarea, un curso, una reunión, una lectura o un documento",
       "en": "Each item is a task, a course, a meeting, a reading or a document"
      }
     },
     {
      "dim": {
       "es": "Orientación",
       "en": "Orientation"
      },
      "before": {
       "es": "Entender la herramienta antes de usarla",
       "en": "Understanding the tool before using it"
      },
      "after": {
       "es": "**Bienvenida guiada de 3 pasos** por rol, armada con piezas reales de la interfaz",
       "en": "**A 3-step guided welcome** per role, built from real interface pieces"
      }
     },
     {
      "dim": {
       "es": "Cuidado",
       "en": "Care"
      },
      "before": {
       "es": "Preguntar cómo está la persona sin exponerla",
       "en": "Asking how people are without exposing them"
      },
      "after": {
       "es": "El ánimo se muestra **solo agregado y con 3 respuestas o más**",
       "en": "Mood is shown **only in aggregate and with 3 or more answers**"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "La decisión que más defiendo",
     "en": "The decision I stand behind most"
    },
    "body": {
     "es": "Al armar el panel de RRHH, una tarea de Sofía vencida porque sistemas no le había dado un acceso contaba como atraso de Sofía. El gráfico **escondía justo el cuello de botella que tenía que mostrar**, y le cargaba a la persona nueva una culpa que no era suya. Cambié la regla: ==cada atraso se atribuye a quien bloquea en la raíz de la cadena==.",
     "en": "While building the HR dashboard, a task of Sofía's that was overdue because IT hadn't granted her access counted as Sofía's delay. The chart **hid exactly the bottleneck it was meant to reveal**, and it pinned on the new hire a blame that wasn't hers. I changed the rule: ==every delay is attributed to whoever blocks at the root of the chain==."
    }
   },
   {
    "t": "bars",
    "h": {
     "es": "Dónde se traban los recorridos",
     "en": "Where journeys get stuck"
    },
    "unit": "",
    "title": {
     "es": "Tareas vencidas por responsable, atribuidas a quien bloquea (panel de RRHH con los datos iniciales de la demo)",
     "en": "Overdue tasks by owner, attributed to whoever blocks them (HR dashboard with the demo's starting data)"
    },
    "lead": 0,
    "rows": [
     {
      "label": {
       "es": "Sistemas",
       "en": "IT"
      },
      "v": 7
     },
     {
      "label": {
       "es": "Nuevo ingreso",
       "en": "New hire"
      },
      "v": 3
     },
     {
      "label": {
       "es": "Jefe directo",
       "en": "Line manager"
      },
      "v": 1
     }
    ]
   },
   {
    "t": "prose",
    "p": [
     {
      "es": "**Sistemas concentra 7 de las 11 tareas vencidas**: varias tareas de las personas nuevas esperan un acceso. Buddy, RRHH y Facilities no tienen ninguna. Con la regla anterior, esos atrasos habrían aparecido como de las personas nuevas.",
      "en": "**IT accounts for 7 of the 11 overdue tasks**: several of the new hires' tasks are waiting for access. Buddy, HR and Facilities have none. Under the previous rule, those delays would have shown up as the new hires'."
     }
    ]
   },
   {
    "t": "cards",
    "cols": 3,
    "h": {
     "es": "La plantilla como herramienta de autoría",
     "en": "The template as an authoring tool"
    },
    "items": [
     {
      "title": {
       "es": "Plazos relativos",
       "en": "Relative due days"
      },
      "body": {
       "es": "Cada tarea se define en días respecto del ingreso, de -30 a 90. Al dar de alta a una persona, **Rumbo calcula las fechas reales.**",
       "en": "Each task is set in days relative to the start date, from -30 to 90. When a new hire is added, **Rumbo works out the real dates.**"
      }
     },
     {
      "title": {
       "es": "Dependencias sin trampas",
       "en": "Dependencies without traps"
      },
      "body": {
       "es": "No se permiten ciclos ni una tarea previa que venza después de la que depende de ella. **El error dice qué cambiar.**",
       "en": "No cycles, and no prerequisite due after the task that depends on it. **The error says what to change.**"
      }
     },
     {
      "title": {
       "es": "Arrastrar, o no",
       "en": "Drag, or not"
      },
      "body": {
       "es": "Las tareas se reordenan con arrastrar y soltar dentro de su etapa, y con «Subir», «Bajar» y «Mover a etapa» **desde el teclado**.",
       "en": "Tasks are reordered by drag and drop within their stage, and with “Move up”, “Move down” and “Move to stage” **from the keyboard**."
      }
     },
     {
      "title": {
       "es": "Vista previa",
       "en": "Preview"
      },
      "body": {
       "es": "RRHH ve el recorrido **como lo va a ver la persona nueva**, con una fecha de ingreso de ejemplo.",
       "en": "HR sees the journey **as the new hire will**, with a sample start date."
      }
     },
     {
      "title": {
       "es": "Versiones como un curso con cohortes",
       "en": "Versions like a course with cohorts"
      },
      "body": {
       "es": "Publicar una versión nueva no cambia los recorridos en curso: **cada ingreso conserva la versión con la que empezó**. Se puede comparar y restaurar.",
       "en": "Publishing a new version doesn't change ongoing journeys: **each hire keeps the version they started with**. Versions can be compared and restored."
      }
     },
     {
      "title": {
       "es": "Responsables claros",
       "en": "Clear owners"
      },
      "body": {
       "es": "La persona nueva solo marca sus tareas; las de otras áreas muestran quién las completa. **Nadie marca trabajo ajeno.**",
       "en": "New hires only tick off their own tasks; other teams' tasks show who completes them. **Nobody ticks off someone else's work.**"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "El aprendizaje en pantalla",
     "en": "Learning on screen"
    },
    "images": [
     {
      "src": "rumbo-30-n1-recorrido.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Mi recorrido, de Sofía, en el día 28: saludo, indicadores, línea de tiempo por etapa con el marcador de hoy y lo próximo",
       "en": "Sofía's My journey on day 28: greeting, indicators, a timeline by stage with today's marker, and what's up next"
      },
      "caption": {
       "es": "Mi recorrido: línea de tiempo por etapa y lo próximo",
       "en": "My journey: timeline by stage and what's up next"
      }
     },
     {
      "src": "rumbo-31-n2-bloqueada.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Tarea bloqueada de Sofía: aviso con la tarea previa, su responsable y su vencimiento",
       "en": "Sofía's blocked task: a notice with the prerequisite task, its owner and its due date"
      },
      "caption": {
       "es": "Tarea bloqueada: de qué depende y quién la destraba",
       "en": "Blocked task: what it depends on and who can unblock it"
      }
     },
     {
      "src": "rumbo-32-j3-checkin.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Check-in de 30 días de Martín con Sofía: hitos con cumplido, parcial o no cumplido y la autoevaluación al lado",
       "en": "Martín's 30-day check-in with Sofía: milestones marked met, partly met or not met, with the self-review alongside"
      },
      "caption": {
       "es": "Check-in de 30 días con la autoevaluación al lado",
       "en": "30-day check-in with the self-review alongside"
      }
     },
     {
      "src": "rumbo-33-a6-constructor.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Constructor de plantillas de Carla: tareas por etapa con plazo, responsable y dependencias",
       "en": "Carla's template builder: tasks by stage with due day, owner and dependencies"
      },
      "caption": {
       "es": "Constructor de plantillas",
       "en": "Template builder"
      }
     },
     {
      "src": "rumbo-34-bienvenida.webp",
      "w": 1280,
      "h": 800,
      "alt": {
       "es": "Bienvenida guiada de Sofía, primer paso de tres, sobre su recorrido atenuado: «Te damos la bienvenida, Sofía»",
       "en": "Sofía's guided welcome, step one of three, over her dimmed journey: “Welcome, Sofía”"
      },
      "caption": {
       "es": "Bienvenida guiada, paso 1 de 3",
       "en": "Guided welcome, step 1 of 3"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "interfaz",
    "n": "04",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Diseñar la interfaz",
     "en": "Designing the interface"
    },
    "q": {
     "es": "¿Cómo se ve propio sin dejar de ser una herramienta de trabajo?",
     "en": "How does it look like its own thing while still being a work tool?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Frenar antes de escalar",
     "en": "Stopping before scaling up"
    },
    "p": [
     {
      "es": "La primera versión cumplía todas las reglas y **aun así parecía una plantilla**. En lugar de seguir puliendo pantallas sueltas, frené: audité la interfaz contra siete referencias visuales, **rediseñé tres pantallas como piloto** (portada, login y recorrido), las aprobé con capturas de antes y después, y recién ahí apliqué el estilo al resto.",
      "en": "The first version followed every rule and **still looked like a template**. Instead of polishing screens one by one, I stopped: I audited the interface against seven visual references, **redesigned three screens as a pilot** (home, login and journey), approved them with before and after screenshots, and only then applied the style to the rest."
     }
    ]
   },
   {
    "t": "compare",
    "marks": true,
    "h": {
     "es": "Qué cambió con la auditoría visual",
     "en": "What the visual audit changed"
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Antes",
      "en": "Before"
     },
     "after": {
      "es": "Después",
      "en": "After"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Capas",
       "en": "Layers"
      },
      "before": {
       "es": "Fondo y tarjetas casi del mismo color: todo parecía una hoja",
       "en": "Background and cards almost the same colour: everything looked like one sheet"
      },
      "after": {
       "es": "Fondo gris frío con tarjetas blancas que se despegan a simple vista",
       "en": "A cool grey background with white cards that stand out at a glance"
      }
     },
     {
      "dim": {
       "es": "Jerarquía",
       "en": "Hierarchy"
      },
      "before": {
       "es": "El título de la pantalla pesaba igual que los de las tarjetas",
       "en": "The screen title carried the same weight as the card titles"
      },
      "after": {
       "es": "Saludo con el nombre en color como único título y chips con el contexto",
       "en": "A greeting with the name in colour as the only title, plus chips with context"
      }
     },
     {
      "dim": {
       "es": "Datos",
       "en": "Data"
      },
      "before": {
       "es": "Barras finas y porcentajes sueltos",
       "en": "Thin bars and loose percentages"
      },
      "after": {
       "es": "Indicadores con ícono, cifra grande y sparkline",
       "en": "Indicators with an icon, a large figure and a sparkline"
      }
     },
     {
      "dim": {
       "es": "Personas",
       "en": "People"
      },
      "before": {
       "es": "Mismo color para todos los avatares",
       "en": "The same colour for every avatar"
      },
      "after": {
       "es": "Un color por rol, en fotos e iniciales, en todo el producto",
       "en": "One colour per role, on photos and initials, across the product"
      }
     },
     {
      "dim": {
       "es": "Acento",
       "en": "Accent"
      },
      "before": {
       "es": "Casi todo petróleo o gris",
       "en": "Almost everything teal or grey"
      },
      "after": {
       "es": "Ciruela para logros, destacados y la segunda serie de gráficos",
       "en": "Plum for achievements, highlights and the second chart series"
      }
     },
     {
      "dim": {
       "es": "Login",
       "en": "Login"
      },
      "before": {
       "es": "Una columna angosta y media pantalla vacía",
       "en": "A narrow column and half the screen empty"
      },
      "after": {
       "es": "Dos columnas con una vista previa del producto",
       "en": "Two columns with a preview of the product"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     1,
     1,
     1
    ],
    "h": {
     "es": "Antes y después",
     "en": "Before and after"
    },
    "note": {
     "es": "En cada captura, antes a la izquierda y después a la derecha.",
     "en": "In each screenshot, before is on the left and after is on the right."
    },
    "images": [
     {
      "src": "rumbo-40-antes-despues-recorrido.webp",
      "w": 2600,
      "h": 1500,
      "alt": {
       "es": "Mi recorrido antes y después del piloto, a 1280 px. Izquierda, antes: título «Mi recorrido», barras finas de avance y contactos en lista. Derecha, después: saludo «Buenos días, Sofía», cuatro indicadores con ícono y la línea de tiempo por etapa con el marcador de hoy",
       "en": "My journey before and after the pilot, at 1280 px. Left, before: a “My journey” title, thin progress bars and contacts in a list. Right, after: a “Good morning, Sofía” greeting, four indicators with icons and the timeline by stage with today's marker"
      },
      "caption": {
       "es": "Mi recorrido, a 1280 px",
       "en": "My journey, at 1280 px"
      }
     },
     {
      "src": "rumbo-41-antes-despues-portada.webp",
      "w": 2600,
      "h": 1500,
      "alt": {
       "es": "Portada de la demo antes y después del piloto, a 1280 px. Izquierda, antes: hero solo con texto. Derecha, después: hero a dos columnas con una vista previa compuesta del producto",
       "en": "Demo home page before and after the pilot, at 1280 px. Left, before: a text-only hero. Right, after: a two-column hero with a composed preview of the product"
      },
      "caption": {
       "es": "Portada de la demo, a 1280 px",
       "en": "Demo home page, at 1280 px"
      }
     },
     {
      "src": "rumbo-42-antes-despues-login.webp",
      "w": 2600,
      "h": 950,
      "alt": {
       "es": "Login antes y después del piloto, a 1280 px. Izquierda, antes: una columna angosta con media pantalla vacía. Derecha, después: formulario a la izquierda y panel tintado con una vista previa del producto a la derecha",
       "en": "Login before and after the pilot, at 1280 px. Left, before: a narrow column with half the screen empty. Right, after: the form on the left and a tinted panel with a product preview on the right"
      },
      "caption": {
       "es": "Login, a 1280 px",
       "en": "Login, at 1280 px"
      }
     }
    ]
   },
   {
    "t": "swatches",
    "h": {
     "es": "Paleta: Material 3 con color propio",
     "en": "Palette: Material 3 with its own colour"
    },
    "note": {
     "es": "El contraste es el del color sobre blanco, calculado con la fórmula de WCAG.",
     "en": "Contrast is each colour against white, calculated with the WCAG formula."
    },
    "groups": [
     {
      "name": {
       "es": "Roles de color",
       "en": "Colour roles"
      },
      "items": [
       {
        "token": "primary",
        "hex": "#1F6F78",
        "use": {
         "es": "Acción principal, navegación activa, foco",
         "en": "Primary action, active navigation, focus"
        },
        "ratio": {
         "es": "5,83:1",
         "en": "5.83:1"
        }
       },
       {
        "token": "secondary",
        "hex": "#4A6366",
        "use": {
         "es": "Botones tonales y menor énfasis",
         "en": "Tonal buttons and lower emphasis"
        },
        "ratio": {
         "es": "6,43:1",
         "en": "6.43:1"
        }
       },
       {
        "token": "tertiary",
        "hex": "#9C3D74",
        "use": {
         "es": "Acento: logros, destacados, segunda serie",
         "en": "Accent: achievements, highlights, second series"
        },
        "ratio": {
         "es": "6,30:1",
         "en": "6.30:1"
        }
       },
       {
        "token": "error",
        "hex": "#B3261E",
        "use": {
         "es": "Errores, vencidas, acciones destructivas",
         "en": "Errors, overdue items, destructive actions"
        },
        "ratio": {
         "es": "6,54:1",
         "en": "6.54:1"
        }
       },
       {
        "token": "success",
        "hex": "#2E7D32",
        "use": {
         "es": "Completadas y confirmaciones",
         "en": "Completed items and confirmations"
        },
        "ratio": {
         "es": "5,13:1",
         "en": "5.13:1"
        }
       },
       {
        "token": "warning",
        "hex": "#8A5300",
        "use": {
         "es": "Por vencer y bloqueadas por dependencias",
         "en": "Due soon and blocked by dependencies"
        },
        "ratio": {
         "es": "6,33:1",
         "en": "6.33:1"
        }
       },
       {
        "token": "info",
        "hex": "#2457C5",
        "use": {
         "es": "Avisos y ayuda",
         "en": "Notices and help"
        },
        "ratio": {
         "es": "6,47:1",
         "en": "6.47:1"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Un color por rol (identifican personas, nunca estados)",
       "en": "One colour per role (they identify people, never states)"
      },
      "items": [
       {
        "token": "role-hr",
        "hex": "#1F6F78",
        "use": {
         "es": "RRHH",
         "en": "HR"
        }
       },
       {
        "token": "role-manager",
        "hex": "#9C3D74",
        "use": {
         "es": "Jefe directo",
         "en": "Line manager"
        }
       },
       {
        "token": "role-hire",
        "hex": "#6A4FC4",
        "use": {
         "es": "Nuevo ingreso",
         "en": "New hire"
        }
       },
       {
        "token": "role-it",
        "hex": "#2457C5",
        "use": {
         "es": "Sistemas",
         "en": "IT"
        }
       }
      ]
     }
    ]
   },
   {
    "t": "bento",
    "h": {
     "es": "El sistema de diseño en seis ideas",
     "en": "The design system in six ideas"
    },
    "items": [
     {
      "size": "l",
      "lead": true,
      "title": {
       "es": "Material 3, traducido a tokens propios",
       "en": "Material 3, translated into its own tokens"
      },
      "body": {
       "es": "Hereda el rigor de Material Design 3 sin parecer una app de Google: **cuatro niveles de tokens**, de los valores crudos a los componentes.",
       "en": "It inherits the rigour of Material Design 3 without looking like a Google app: **four tiers of tokens**, from raw values to components."
      },
      "img": {
       "src": "rumbo-43-tokens.webp",
       "w": 1008,
       "h": 570,
       "alt": {
        "es": "Niveles de tokens: 1 Referencia (valores crudos y tipografía), 2 Sistema (roles de color, personas y gráficos, espacio, elevación y movimiento), 3 Tema de Tailwind y 4 Componentes, con el control de calidad debajo: test de contraste y documentación viva",
        "en": "Token tiers: 1 Reference (raw values and typeface), 2 System (colour roles, people and charts, spacing, elevation and motion), 3 Tailwind theme and 4 Components, with quality control below: a contrast test and living documentation"
       }
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Profundidad sin sombras",
       "en": "Depth without shadows"
      },
      "body": {
       "es": "La jerarquía sale de los niveles de superficie, no de sombras ni degradés.",
       "en": "Hierarchy comes from surface levels, not from shadows or gradients."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Un botón principal por región",
       "en": "One primary button per region"
      },
      "body": {
       "es": "Un test lo verifica en todas las pantallas, en celular y en escritorio.",
       "en": "A test checks it on every screen, on mobile and desktop."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "Cifras tabulares",
       "en": "Tabular figures"
      },
      "body": {
       "es": "Inter con la escala de Material 3; los números de KPIs, tablas y fechas se alinean.",
       "en": "Inter with the Material 3 type scale; numbers in KPIs, tables and dates line up."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "Cargas con forma",
       "en": "Loading with shape"
      },
      "body": {
       "es": "Mientras llega una pantalla, se ve un esqueleto con la forma de su plantilla: panel, listado, ficha o formulario.",
       "en": "While a screen loads, a skeleton shows the shape of its template: dashboard, list, record or form."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Movimiento medido",
       "en": "Measured motion"
      },
      "body": {
       "es": "Entre 150 y 300 ms, con las curvas de Material 3, y apagado si la persona pide reducir animaciones.",
       "en": "Between 150 and 300 ms, with Material 3 easing curves, and switched off when someone asks for reduced motion."
      }
     }
    ]
   },
   {
    "t": "preview",
    "url": "https://lpedaci.github.io/rumbo-app/#/design-system",
    "img": {
     "src": "rumbo-44-design-system.webp",
     "w": 1440,
     "h": 900
    },
    "kicker": {
     "es": "En vivo",
     "en": "Live"
    },
    "title": {
     "es": "Un sitio que documenta el sistema con sus propios componentes",
     "en": "A site that documents the system with its own components"
    },
    "body": {
     "es": "Fundamentos leídos en vivo desde los tokens, contraste calculado, componentes reales, patrones y pautas de uso.",
     "en": "Foundations read live from the tokens, calculated contrast, real components, patterns and usage guidelines."
    },
    "cta": {
     "es": "Ver el sistema de diseño",
     "en": "See the design system"
    }
   },
   {
    "t": "gallery",
    "h": {
     "es": "Una pantalla clave por rol",
     "en": "One key screen per role"
    },
    "images": [
     {
      "src": "rumbo-45-a1-panel.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Panel de seguimiento de Carla, de RRHH: saludo, cuatro indicadores con sparklines, avance por cohorte y alertas",
       "en": "Carla's HR tracking dashboard: greeting, four indicators with sparklines, progress by cohort and alerts"
      },
      "caption": {
       "es": "RRHH: panel de seguimiento",
       "en": "HR: tracking dashboard"
      }
     },
     {
      "src": "rumbo-46-j1-equipo.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Mi equipo, de Martín, jefe directo: personas con su avance y el próximo check-in",
       "en": "My team, for Martín, the line manager: people with their progress and the next check-in"
      },
      "caption": {
       "es": "Jefe directo: mi equipo",
       "en": "Line manager: my team"
      }
     },
     {
      "src": "rumbo-47-s1-solicitudes.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Bandeja de solicitudes de acceso de Diego, de sistemas, con estados en píldoras",
       "en": "Diego's IT access request inbox, with states shown as pills"
      },
      "caption": {
       "es": "Sistemas: solicitudes de acceso",
       "en": "IT: access requests"
      }
     },
     {
      "src": "rumbo-48-s7-aprobaciones.webp",
      "w": 960,
      "h": 600,
      "alt": {
       "es": "Doble aprobación: quién pidió el cambio y a quién espera",
       "en": "Dual approval: who requested the change and who it is waiting for"
      },
      "caption": {
       "es": "Sistemas: doble aprobación",
       "en": "IT: dual approval"
      }
     },
     {
      "src": "rumbo-49-mobile.webp",
      "w": 375,
      "h": 812,
      "alt": {
       "es": "Mi recorrido de Sofía en un celular de 375 px: saludo y cuatro indicadores en dos columnas",
       "en": "Sofía's My journey on a 375 px phone: greeting and four indicators in two columns"
      },
      "caption": {
       "es": "Nuevo ingreso, en un celular de 375 px",
       "en": "New hire, on a 375 px phone"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "accesibilidad",
    "n": "05",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Accesibilidad y seguridad",
     "en": "Accessibility and security"
    },
    "q": {
     "es": "¿Cómo se diseña para que nadie quede afuera y nadie entre de más?",
     "en": "How do you design so nobody is left out and nobody gets in who shouldn't?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Desde la especificación",
     "en": "From the specification"
    },
    "p": [
     {
      "es": "La accesibilidad estuvo en la especificación **desde el primer día**, no como revisión final. Y en un producto que maneja datos de personas, ==la seguridad también es experiencia==: lo que la interfaz obliga a hacer, lo que no deja hacer y cómo lo explica.",
      "en": "Accessibility was in the specification **from day one**, not added as a final check. And in a product that handles personal data, ==security is part of the experience too==: what the interface makes you do, what it won't let you do and how it explains it."
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Accesibilidad en decisiones concretas (WCAG 2.2 AA)",
     "en": "Accessibility in concrete decisions (WCAG 2.2 AA)"
    },
    "items": [
     {
      "lead": {
       "es": "Arrastrar, con alternativa (2.5.7)",
       "en": "Dragging, with an alternative (2.5.7)"
      },
      "body": {
       "es": "Todo lo que se arrastra en el constructor también se hace con botones y teclado",
       "en": "Everything you can drag in the builder can also be done with buttons and the keyboard"
      }
     },
     {
      "lead": {
       "es": "Código en un solo campo (3.3.8)",
       "en": "Code in a single field (3.3.8)"
      },
      "body": {
       "es": "La verificación en dos pasos acepta pegar el código; no hay seis casillas",
       "en": "Two-step verification accepts a pasted code; there are no six separate boxes"
      }
     },
     {
      "lead": {
       "es": "No pedir dos veces lo mismo (3.3.7)",
       "en": "Never ask twice (3.3.7)"
      },
      "body": {
       "es": "El correo escrito en el login llega solo al formulario de ayuda si la cuenta se bloquea",
       "en": "The email typed at login carries over to the help form if the account gets locked"
      }
     },
     {
      "lead": {
       "es": "Tiempo ajustable (2.2.1)",
       "en": "Adjustable timing (2.2.1)"
      },
      "body": {
       "es": "Antes de que venza la sesión aparece un aviso para extenderla",
       "en": "Before the session expires, a notice offers to extend it"
      }
     },
     {
      "lead": {
       "es": "Reacomodo a 320 px (1.4.10)",
       "en": "Reflow at 320 px (1.4.10)"
      },
      "body": {
       "es": "Ninguna de las 51 vistas desborda en seis anchos, verificado por test",
       "en": "None of the 51 views overflows at six widths, checked by a test"
      }
     },
     {
      "lead": {
       "es": "Gráficos que se leen sin verlos",
       "en": "Charts you can read without seeing them"
      },
      "body": {
       "es": "Cada gráfico tiene título, resumen en texto y una tabla para lectores de pantalla",
       "en": "Every chart has a title, a text summary and a table for screen readers"
      }
     },
     {
      "lead": {
       "es": "El color nunca solo",
       "en": "Never colour alone"
      },
      "body": {
       "es": "Cada estado lleva ícono y texto además del color",
       "en": "Every state has an icon and text as well as colour"
      }
     }
    ]
   },
   {
    "t": "audit",
    "h": {
     "es": "Dos problemas de contraste que encontraron los tests",
     "en": "Two contrast problems the tests caught"
    },
    "note": {
     "es": "Los encontró el test de contraste de los tokens; las dos correcciones quedaron fijadas por test.",
     "en": "The token contrast test caught them; both fixes are now locked in by a test."
    },
    "cols": {
     "pair": {
      "es": "Par",
      "en": "Pair"
     },
     "ratio": {
      "es": "Contraste",
      "en": "Contrast"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "pass": {
     "es": "Cumple",
     "en": "Passes"
    },
    "fail": {
     "es": "No cumple",
     "en": "Fails"
    },
    "nofix": {
     "es": "No hace falta",
     "en": "Not needed"
    },
    "rows": [
     {
      "pair": {
       "es": "Texto success sobre su contenedor",
       "en": "Success text on its container"
      },
      "fg": "#2E7D32",
      "bg": "#DCEFDD",
      "ratio": {
       "es": "4,26:1",
       "en": "4.26:1"
      },
      "pass": false,
      "fix": {
       "es": "Regla de uso: texto en on-container #123D15 (10,23:1) y el color base solo en el ícono",
       "en": "Usage rule: text in on-container #123D15 (10.23:1) and the base colour only on the icon"
      },
      "fixfg": "#123D15",
      "fixbg": "#DCEFDD"
     },
     {
      "pair": {
       "es": "Serie 4 de gráficos sobre blanco",
       "en": "Chart series 4 on white"
      },
      "fg": "#C98AAE",
      "bg": "#FFFFFF",
      "ratio": {
       "es": "2,72:1",
       "en": "2.72:1"
      },
      "pass": false,
      "fix": {
       "es": "Se cambió a #B9779D (3,39:1), el ciruela más cercano que cumple 3:1 para gráficos",
       "en": "Changed to #B9779D (3.39:1), the closest plum that meets 3:1 for graphics"
      },
      "fixfg": "#B9779D",
      "fixbg": "#FFFFFF"
     },
     {
      "pair": {
       "es": "Primary sobre blanco",
       "en": "Primary on white"
      },
      "fg": "#1F6F78",
      "bg": "#FFFFFF",
      "ratio": {
       "es": "5,83:1",
       "en": "5.83:1"
      },
      "pass": true
     }
    ]
   },
   {
    "t": "roadmap",
    "h": {
     "es": "Seguridad en tres capas",
     "en": "Security in three layers"
    },
    "steps": [
     {
      "code": "01",
      "title": {
       "es": "Simulada en la interfaz",
       "en": "Simulated in the interface"
      },
      "body": {
       "es": "SSO, verificación en dos pasos, bloqueo por intentos, sesión que vence, permisos por rol y auditoría: la experiencia completa de una app corporativa, sin frenar a quien visita la demo",
       "en": "SSO, two-step verification, lockout after failed attempts, session timeout, role permissions and an audit log: the full experience of a corporate app, without getting in the way of demo visitors"
      }
     },
     {
      "code": "02",
      "title": {
       "es": "Aplicada de verdad",
       "en": "Actually enforced"
      },
      "body": {
       "es": "Política de seguridad de contenido, validación de todos los formularios con esquemas, ningún HTML armado con datos y auditoría de dependencias en cada publicación",
       "en": "A content security policy, schema validation on every form, no HTML built from data and a dependency audit on every deploy"
      }
     },
     {
      "code": "03",
      "title": {
       "es": "Documentada para producción",
       "en": "Documented for production"
      },
      "body": {
       "es": "Identidad con OIDC o SAML, autorización en el servidor, auditoría inmutable, capa de borde y cumplimiento de la Ley 25.326",
       "en": "Identity with OIDC or SAML, server-side authorisation, an immutable audit log, an edge layer and compliance with Argentina's Law 25,326"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Sin autogestión de acceso, a propósito",
     "en": "No self-service access, on purpose"
    },
    "body": {
     "es": "En Rumbo nadie recupera ni desbloquea su acceso por su cuenta: **siempre pasa por sistemas**, que verifica la identidad con datos de la ficha y nunca con los que trae el pedido. ==No es un recorte de alcance, es una decisión de diseño==: en una empresa, el atajo del autoservicio es la puerta de la ingeniería social. Para no revelar qué correos existen, un correo inexistente también se bloquea a los cinco intentos y muestra el mismo aviso.",
     "en": "In Rumbo nobody recovers or unlocks their own access: **it always goes through IT**, who verify identity against the person's record and never against details supplied in the request. ==It is not a scope cut, it is a design decision==: in a company, the self-service shortcut is the door to social engineering. So as not to reveal which emails exist, an unknown email is also locked after five attempts and shows the same notice."
    }
   },
   {
    "t": "phase",
    "id": "construir",
    "n": "06",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Construir y verificar",
     "en": "Building and verifying"
    },
    "q": {
     "es": "¿Cómo se pasa de un diseño a un producto que funciona sin perder el criterio?",
     "en": "How do you go from a design to a working product without losing judgement?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Desarrollo dirigido por especificación",
     "en": "Specification-driven development"
    },
    "p": [
     {
      "es": "**Rumbo no es una maqueta:** las pantallas crean, editan, completan y aprueban, y los cambios quedan guardados en el navegador. Para llegar ahí trabajé con desarrollo dirigido por especificación.",
      "en": "**Rumbo is not a mock-up:** its screens create, edit, complete and approve, and the changes are saved in the browser. To get there I worked with specification-driven development."
     },
     {
      "es": "Escribí la especificación completa del producto: roles, funciones, pantallas, modelo de datos, reglas de negocio, sistema de diseño, voz y tono, accesibilidad, seguridad y criterios de aceptación. Claude Code, un agente de IA, la implementó por pasos. **Yo revisé cada pantalla, resolví cada duda y aprobé cada fase.** Todo quedó registrado: qué se dudó, qué se decidió y por qué.",
      "en": "I wrote the full product specification: roles, features, screens, data model, business rules, design system, voice and tone, accessibility, security and acceptance criteria. Claude Code, an AI agent, implemented it step by step. **I reviewed every screen, resolved every question and approved every phase.** It is all on record: what was in doubt, what was decided and why."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Cómo trabajé",
     "en": "How I worked"
    },
    "steps": {
     "es": [
      "Especificación",
      "Documentación de diseño",
      "Piloto visual",
      "Aprobación",
      "Fase A: núcleo",
      "Revisión intermedia",
      "Fase B: base corporativa",
      "Revisión final"
     ],
     "en": [
      "Specification",
      "Design documentation",
      "Visual pilot",
      "Approval",
      "Phase A: core",
      "Mid-point review",
      "Phase B: corporate baseline",
      "Final review"
     ]
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "142",
      "label": {
       "es": "decisiones registradas",
       "en": "decisions logged"
      }
     },
     {
      "value": "41",
      "label": {
       "es": "incidencias, 39 resueltas",
       "en": "issues, 39 resolved"
      }
     },
     {
      "value": "380",
      "label": {
       "es": "tests unitarios y de componentes",
       "en": "unit and component tests"
      }
     },
     {
      "value": "614",
      "label": {
       "es": "pruebas de punta a punta en Chromium",
       "en": "end-to-end tests in Chromium"
      }
     },
     {
      "value": "3",
      "label": {
       "es": "motores de navegador",
       "en": "browser engines"
      }
     },
     {
      "value": {
       "es": "2.509",
       "en": "2,509"
      },
      "label": {
       "es": "textos traducidos al inglés",
       "en": "strings translated into English"
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Lighthouse contra el build publicado",
     "en": "Lighthouse against the production build"
    },
    "note": {
     "es": "Portada, login, Mi recorrido y panel de RRHH.",
     "en": "Home, login, My journey and the HR dashboard."
    },
    "items": [
     {
      "k": {
       "es": "Rendimiento",
       "en": "Performance"
      },
      "v": {
       "es": "98 a 100 en las cuatro pantallas medidas, en celular y escritorio",
       "en": "98 to 100 on the four screens measured, on mobile and desktop"
      }
     },
     {
      "k": {
       "es": "Accesibilidad",
       "en": "Accessibility"
      },
      "v": "100"
     },
     {
      "k": {
       "es": "Buenas prácticas",
       "en": "Best practices"
      },
      "v": "100"
     },
     {
      "k": "SEO",
      "v": "100"
     }
    ]
   },
   {
    "t": "gallery",
    "medium": true,
    "h": {
     "es": "Arquitectura",
     "en": "Architecture"
    },
    "note": {
     "es": "La arquitectura se documentó con el modelo C4 (Brown, s.f.). Una sola fuente de permisos alimenta las rutas, los botones y la matriz que ve sistemas.",
     "en": "The architecture was documented with the C4 model (Brown, n.d.). A single source of permissions feeds the routes, the buttons and the matrix IT sees."
    },
    "images": [
     {
      "src": "rumbo-60-capas.webp",
      "w": 1008,
      "h": 880,
      "alt": {
       "es": "Diagrama de capas de la app: presentación (pantallas por rol, sistema de diseño, rutas e idiomas) lee y dispara acciones en estado (datos de la demo, sesión y preferencias), que carga y guarda en datos (datos semilla y almacenamiento del navegador); presentación y estado consultan el dominio, con las reglas de negocio puras: permisos, recorrido, métricas, accesos, auditoría y validación",
       "en": "Diagram of the app's layers: presentation (screens by role, design system, routing and languages) reads from and dispatches actions to state (demo data, session and preferences), which loads from and saves to data (seed data and browser storage); presentation and state query the domain, which holds the pure business rules: permissions, journey, metrics, access, audit and validation"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "cierre",
    "n": "07",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Resultados, lo que falta y aprendizajes",
     "en": "Results, what's next and lessons learnt"
    },
    "q": {
     "es": "¿Qué demuestra, qué haría con una empresa real y qué me llevo?",
     "en": "What does it show, what would I do with a real company, and what am I taking away?"
    }
   },
   {
    "t": "prose",
    "hl": true,
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "p": [
     {
      "es": "Rumbo es un producto B2B completo de punta a punta: 40 pantallas, cuatro roles que se recorren cambiando de perspectiva en cualquier momento, accesibilidad WCAG 2.2 AA verificada por tests y una documentación que se puede leer sin el código. **No tiene usuarios reales ni métricas de impacto, y no las inventa**: ==lo que sí demuestra es un proceso==. Cómo pienso el ingreso como aprendizaje, cómo traduzco eso a una herramienta para cuatro roles y cómo llevo un diseño a un producto que funciona, con cada decisión a la vista.",
      "en": "Rumbo is a complete, end-to-end B2B product: 40 screens, four roles you can switch between at any moment, WCAG 2.2 AA accessibility verified by tests and documentation that can be read without the code. **It has no real users or impact metrics, and it doesn't make them up.** ==What it does show is a process==: how I think about onboarding as learning, how I turn that into a tool for four roles and how I take a design to a working product, with every decision in the open."
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Qué haría con una empresa real",
     "en": "What I would do with a real company"
    },
    "items": {
     "es": [
      "**Validar las proto-personas** con entrevistas a RRHH, líderes, ingresos recientes y sistemas, con el plan que ya está escrito",
      "**Probar la arquitectura de la información** con card sorting y tree testing",
      "**Hacer pruebas de usabilidad** de los cuatro flujos críticos: mi recorrido, check-in, constructor y solicitud de acceso",
      "**Completar la prueba con lector de pantalla (NVDA)** y recorrerla en celulares reales",
      "**Medir en un piloto**: tareas completadas a tiempo, check-ins hechos en fecha, días hasta que se destraba una tarea bloqueada y cómo se siente la persona nueva en cada etapa"
     ],
     "en": [
      "**Validate the proto-personas** with interviews with HR, leaders, recent hires and IT, using the plan that is already written",
      "**Test the information architecture** with card sorting and tree testing",
      "**Run usability tests** on the four critical flows: my journey, check-in, template builder and access request",
      "**Complete the screen reader test (NVDA)** and go through it on real phones",
      "**Measure in a pilot**: tasks completed on time, check-ins held on schedule, days until a blocked task is unblocked and how the new hire feels at each stage"
     ]
    },
    "foot": {
     "es": "Son propuestas, no resultados.",
     "en": "These are proposals, not results."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Lo que me llevo",
     "en": "What I'm taking away"
    },
    "items": [
     {
      "lead": {
       "es": "El diseño instruccional sirve fuera del aula",
       "en": "Instructional design works outside the classroom"
      },
      "body": {
       "es": "Secuencia, andamiaje y evaluación formativa ordenaron un proceso de negocio",
       "en": "Sequence, scaffolding and formative assessment gave order to a business process"
      }
     },
     {
      "lead": {
       "es": "Un dato mal atribuido cuenta otra historia",
       "en": "A misattributed figure tells a different story"
      },
      "body": {
       "es": "La regla de quién bloquea cambió lo que el panel le dice a RRHH y lo que siente la persona nueva",
       "en": "The who-is-blocking rule changed what the dashboard tells HR and how the new hire feels"
      }
     },
     {
      "lead": {
       "es": "Con IA, el criterio es el trabajo",
       "en": "With AI, judgement is the work"
      },
      "body": {
       "es": "El agente escribe código rápido; especificar bien, revisar y decidir sigue siendo diseño",
       "en": "The agent writes code fast; specifying well, reviewing and deciding is still design"
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Brown, S. (s.f.).",
       "en": "Brown, S. (n.d.)."
      },
      "title": "The C4 model for visualising software architecture",
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://c4model.com/"
     },
     {
      "pre": {
       "es": "Google. (s.f.).",
       "en": "Google. (n.d.)."
      },
      "title": "Material Design 3",
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://m3.material.io/"
     },
     {
      "pre": {
       "es": "Gothelf, J., & Seiden, J. (2021).",
       "en": "Gothelf, J., & Seiden, J. (2021)."
      },
      "title": "Lean UX: Designing great products with agile teams",
      "post": {
       "es": " (3rd ed.). O'Reilly Media.",
       "en": " (3rd ed.). O'Reilly Media."
      }
     },
     {
      "pre": {
       "es": "International Organization for Standardization & International Electrotechnical Commission. (2023).",
       "en": "International Organization for Standardization & International Electrotechnical Commission. (2023)."
      },
      "title": "Systems and software engineering: Systems and software Quality Requirements and Evaluation (SQuaRE): Product quality model",
      "post": {
       "es": " (ISO/IEC 25010:2023). ISO.",
       "en": " (ISO/IEC 25010:2023). ISO."
      }
     },
     {
      "pre": {
       "es": "Rosenfeld, L., Morville, P., & Arango, J. (2015).",
       "en": "Rosenfeld, L., Morville, P., & Arango, J. (2015)."
      },
      "title": "Information architecture: For the web and beyond",
      "post": {
       "es": " (4th ed.). O'Reilly Media.",
       "en": " (4th ed.). O'Reilly Media."
      }
     },
     {
      "pre": {
       "es": "World Wide Web Consortium. (2023).",
       "en": "World Wide Web Consortium. (2023)."
      },
      "title": "Web Content Accessibility Guidelines (WCAG) 2.2",
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.w3.org/TR/WCAG22/"
     }
    ]
   }
  ],
  "credits": {
   "es": "Fotos de personas: Magnific (antes Freepik), con licencia. Íconos de la app: Material Symbols (Google), Apache 2.0. Tipografía de la app: Inter, SIL Open Font License. Nortia S.A., sus personas y sus datos son ficticios.",
   "en": "People photos: Magnific (formerly Freepik), licensed. App icons: Material Symbols (Google), Apache 2.0. App typeface: Inter, SIL Open Font License. Nortia S.A., its people and its data are fictional."
  }
 },
 "alcancia": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Alcancía, simulador de finanzas personales",
   "en": "Alcancía, a personal finance simulator"
  },
  "subtitle": {
   "es": "Producto B2B para organizaciones, aulas y productos: se aprende finanzas usando una billetera virtual con dinero ficticio. Prototipo navegable de alta fidelidad. Personas, empresas y entidades ficticias.",
   "en": "A B2B product for organisations, classrooms and products: people learn personal finance by using a virtual wallet with fictitious money. A high-fidelity, fully navigable prototype. Fictional people, companies and entities."
  },
  "chips": {
   "es": [
    "Learning Experience Design",
    "UX/UI",
    "Producto B2B",
    "WCAG 2.2 AA"
   ],
   "en": [
    "Learning Experience Design",
    "UX/UI",
    "B2B product",
    "WCAG 2.2 AA"
   ]
  },
  "summary": {
   "problem": {
    "es": "Muchas personas aprenden finanzas cuando ya se equivocaron con dinero real: **pagan el mínimo de la tarjeta, aceptan un préstamo por la cuota o dejan el sueldo quieto** mientras la inflación se lo come. Los programas de bienestar financiero se lanzan con entusiasmo y se abandonan, miden cuántas personas los abrieron y no qué cambió, y chocan con una desconfianza concreta: «¿la empresa va a ver cuánto debo?».",
    "en": "Many people learn about money only after getting it wrong with real money: **they pay the card minimum, take a loan because the instalment looks small or leave their salary idle** while inflation eats it. Financial wellbeing programmes launch with enthusiasm and then fade, they count how many people opened them rather than what changed, and they run into a very concrete fear: “will my employer see how much I owe?”"
   },
   "solution": {
    "es": "Alcancía propone **equivocarse antes y gratis**. Quien aprende no entra a un curso: entra a su billetera, cobra un sueldo de práctica, paga, ahorra, decide sobre crédito e invierte, y cada acción le enseña algo en el momento en que pasa. Las secciones se abren por conducta financiera y la organización solo ve avance agregado. **Lo especifiqué, lo diseñé y lo llevé a un prototipo funcional**, con un agente de IA como desarrollador.",
    "en": "Alcancía lets people **make those mistakes earlier, and for free**. Learners don’t enrol in a course: they open their wallet, get a practice salary, pay, save, make credit decisions and invest, and every action teaches something at the moment it happens. Sections unlock through financial behaviour, and the organisation only sees aggregate progress. **I specified it, designed it and took it to a working prototype**, with an AI agent as the developer."
   },
   "results": [
    {
     "v": "9",
     "l": {
      "es": "niveles que se abren por conducta financiera, no por clics",
      "en": "levels that unlock through financial behaviour, not clicks"
     }
    },
    {
     "v": "13",
     "l": {
      "es": "misiones con consecuencias reales dentro de la billetera de cada persona",
      "en": "missions with real consequences inside each learner’s own wallet"
     }
    },
    {
     "v": "242",
     "l": {
      "es": "decisiones de diseño registradas, con la duda, lo decidido y por qué",
      "en": "design decisions logged, with the question, the decision and the reason"
     }
    },
    {
     "t": {
      "es": "780 tests unitarios, 1.181 de punta a punta y 130 sobre el build publicado, todos en verde.",
      "en": "780 unit tests, 1,181 end-to-end tests and 130 on the published build, all passing."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Experience Designer: supuestos y proto-personas, diseño instruccional del programa, arquitectura de la información, UX/UI, sistema de diseño, especificación funcional y dirección del desarrollo",
    "en": "Experience Designer: assumptions and proto-personas, instructional design of the programme, information architecture, UX/UI, design system, functional specification and directing the development"
   },
   "timeline": {
    "es": "Noviembre 2026",
    "en": "November 2026"
   },
   "context": {
    "es": "Producto conceptual para portfolio. Andina Servicios S.A., el Instituto Superior Ceibo, Hornero, sus personas y sus datos son ficticios. El dinero es ficticio; tasas, inflación y tipo de cambio son reales, del BCRA y el INDEC",
    "en": "Concept product for my portfolio. Andina Servicios S.A., Instituto Superior Ceibo, Hornero, their people and their data are fictional. The money is fictitious; interest rates, inflation and exchange rates are real, from Argentina’s central bank (BCRA) and statistics office (INDEC)"
   },
   "stack": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Radix y shadcn/ui",
    "Zustand",
    "decimal.js",
    "Zod",
    "Recharts",
    "i18next",
    "Vitest",
    "Playwright",
    "GitHub Actions",
    "Claude Code"
   ],
   "methods": {
    "es": [
     "Lean UX",
     "Backward Design",
     "Gagné",
     "Aprendizaje experiencial (Kolb)",
     "Kirkpatrick",
     "Arquitectura de la información",
     "MoSCoW",
     "ISO/IEC 25010",
     "WCAG 2.2 AA",
     "Material Design 3"
    ],
    "en": [
     "Lean UX",
     "Backward design",
     "Gagné",
     "Experiential learning (Kolb)",
     "Kirkpatrick",
     "Information architecture",
     "MoSCoW",
     "ISO/IEC 25010",
     "WCAG 2.2 AA",
     "Material Design 3"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Recorrer la demo",
     "en": "Explore the demo"
    },
    "url": "https://lpedaci.github.io/alcancia-app/"
   },
   {
    "label": {
     "es": "Sistema de diseño",
     "en": "Design system"
    },
    "url": "https://lpedaci.github.io/alcancia-app/#/design-system"
   },
   {
    "label": {
     "es": "Documentación y código",
     "en": "Docs and code"
    },
    "url": "https://github.com/lpedaci/alcancia-app"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "La idea",
     "en": "The idea"
    },
    "body": {
     "es": "Nadie aprende a manejar dinero leyendo sobre dinero. Se aprende usándolo, y equivocarse cuesta caro.",
     "en": "Nobody learns to manage money by reading about money. You learn by using it, and mistakes are expensive."
    },
    "p": [
     {
      "es": "Alcancía da vuelta el orden de un curso: **la billetera es el programa**. El orden en que se abren las secciones es la secuencia didáctica: primero lo que te protege, después lo que te hace crecer. Y lo construye como producto: una misma billetera para **una organización, una institución educativa o una app financiera**, con cinco roles y ningún dato económico fuera del navegador de quien aprende.",
      "en": "Alcancía turns a course inside out: **the wallet is the programme**. The order in which sections unlock is the learning sequence: first what protects you, then what helps you grow. And it is built as a product: the same wallet for **an organisation, a school or a financial app**, with five roles and no financial data ever leaving the learner’s browser."
     }
    ]
   },
   {
    "t": "compare",
    "join": true,
    "accent": true,
    "lens": true,
    "arrow": false,
    "h": {
     "es": "Dos lentes sobre el mismo problema",
     "en": "Two lenses on the same problem"
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Lente LXD",
      "en": "LXD lens"
     },
     "after": {
      "es": "Lente UX/UI",
      "en": "UX/UI lens"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "La pregunta",
       "en": "The question"
      },
      "before": {
       "es": "¿Cómo aprende finanzas un adulto con poco tiempo y mucha desconfianza?",
       "en": "How does an adult with little time and plenty of distrust learn about money?"
      },
      "after": {
       "es": "¿Cómo se usa una billetera que además enseña, para cinco roles y tres contextos?",
       "en": "How do five roles in three contexts use a wallet that also teaches?"
      }
     },
     {
      "dim": {
       "es": "A quién pongo en el centro",
       "en": "Who I put at the centre"
      },
      "before": {
       "es": "A quien aprende, que necesita equivocarse sin pagar el costo",
       "en": "The learner, who needs to make mistakes without paying for them"
      },
      "after": {
       "es": "A cada rol con lo suyo: billetera, tutoría, gestión y reporte",
       "en": "Each role with its own space: wallet, tutoring, management and reporting"
      }
     },
     {
      "dim": {
       "es": "Qué diseño",
       "en": "What I design"
      },
      "before": {
       "es": "Resultados observables, misiones, evaluaciones variadas e impacto medido",
       "en": "Observable outcomes, missions, varied assessments and measured impact"
      },
      "after": {
       "es": "Arquitectura de una billetera, flujos, desbloqueos visibles y sistema de diseño",
       "en": "A wallet’s architecture, flows, visible unlocks and a design system"
      }
     },
     {
      "dim": {
       "es": "Cómo sé que funciona",
       "en": "How I know it works"
      },
      "before": {
       "es": "La persona explica el porqué de una decisión, no solo la respuesta",
       "en": "The learner explains why a decision is right, not just the answer"
      },
      "after": {
       "es": "Cada pantalla se entiende en celular, sin desbordes ni errores de accesibilidad",
       "en": "Every screen makes sense on a phone, with no overflow and no accessibility errors"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "descubrir",
    "n": "01",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Descubrir",
     "en": "Discover"
    },
    "q": {
     "es": "¿Quién aprende, quién acompaña y qué teme cada uno?",
     "en": "Who learns, who supports them, and what is each of them afraid of?"
    }
   },
   {
    "t": "cards",
    "cols": 3,
    "h": {
     "es": "Cinco roles y dos públicos que aprenden",
     "en": "Five roles and two kinds of learner"
    },
    "items": [
     {
      "avatar": {
       "src": "alcancia-10-mariana.webp",
       "w": 112,
       "h": 112
      },
      "title": "Mariana López",
      "tag": {
       "es": "Participante de oficina",
       "en": "Office participant"
      },
      "body": {
       "es": "Quiere ordenar su dinero con criterio propio, sin que nadie le venda nada. **Lee sobre finanzas en redes y no sabe a quién creerle.**",
       "en": "Wants to sort out her money with her own judgement, without anyone selling her anything. **She reads about money on social media and doesn’t know who to trust.**"
      }
     },
     {
      "avatar": {
       "src": "alcancia-11-diego.webp",
       "w": 112,
       "h": 112
      },
      "title": "Diego Suárez",
      "tag": {
       "es": "Participante operativo",
       "en": "Frontline participant"
      },
      "body": {
       "es": "Aprende desde el celular, en pausas de 5 minutos. **Los textos largos y la jerga lo expulsan**, y desconfía de una app «de la empresa».",
       "en": "Learns on his phone, in 5-minute breaks. **Long texts and jargon push him away**, and he distrusts an app that belongs to his employer."
      }
     },
     {
      "avatar": {
       "src": "alcancia-12-kevin.webp",
       "w": 112,
       "h": 112
      },
      "title": "Kevin Giovanni",
      "tag": {
       "es": "Tutor",
       "en": "Tutor"
      },
      "body": {
       "es": "Acompaña cohortes sin meterse en la vida financiera de nadie. **Prepara los encuentros a ciegas**, sin saber qué temas costaron más.",
       "en": "Supports cohorts without prying into anyone’s finances. **He prepares sessions blind**, without knowing which topics people found hardest."
      }
     },
     {
      "avatar": {
       "src": "alcancia-13-julieta.webp",
       "w": 112,
       "h": 112
      },
      "title": "Julieta Martorelli",
      "tag": {
       "es": "Admin de L&D y Beneficios",
       "en": "L&D and Benefits admin"
      },
      "body": {
       "es": "Lanza el programa y tiene que demostrar que sirve. **Los beneficios de bienestar se abandonan pronto** y solo mide cuántos lo abrieron.",
       "en": "Launches the programme and has to prove it works. **Wellbeing benefits get dropped quickly**, and she can only count how many people opened it."
      }
     },
     {
      "avatar": {
       "src": "alcancia-14-ricardo.webp",
       "w": 112,
       "h": 112
      },
      "title": "Ricardo Benítez",
      "tag": {
       "es": "Decisor",
       "en": "Sponsor"
      },
      "body": {
       "es": "Decide si renovar el programa y quiere ver qué cambió en la gente. **Los reportes de capacitación muestran asistencia, no cambios.**",
       "en": "Decides whether to renew the programme and wants to see what changed for people. **Training reports show attendance, not change.**"
      }
     },
     {
      "avatar": {
       "src": "alcancia-15-lucia.webp",
       "w": 112,
       "h": 112
      },
      "title": {
       "es": "Otros dos contextos",
       "en": "Two more contexts"
      },
      "tag": {
       "es": "Institución y producto",
       "en": "School and product"
      },
      "body": {
       "es": "En el Instituto Superior Ceibo aprende Lucía, de 18 años o más; en Hornero, Joaquín, desde su app. **Mismos niveles, otros roles alrededor.**",
       "en": "At Instituto Superior Ceibo, Lucía (18 or older) is the learner; at Hornero, Joaquín learns inside his app. **Same levels, different roles around them.**"
      }
     }
    ]
   },
   {
    "t": "persona",
    "h": {
     "es": "Mariana, la persona que explora",
     "en": "Mariana, the explorer"
    },
    "photo": {
     "src": "alcancia-10-mariana.webp",
     "w": 112,
     "h": 112,
     "round": true,
     "alt": {
      "es": "Retrato de Mariana López, persona ficticia, con el anillo violeta del rol de participante",
      "en": "Portrait of Mariana López, a fictional person, with the violet ring of the participant role"
     }
    },
    "name": "Mariana López",
    "meta": [
     {
      "k": {
       "es": "Rol",
       "en": "Role"
      },
      "v": {
       "es": "Participante",
       "en": "Participant"
      }
     },
     {
      "k": {
       "es": "Puesto",
       "en": "Position"
      },
      "v": {
       "es": "Analista de Operaciones",
       "en": "Operations Analyst"
      }
     },
     {
      "k": {
       "es": "Tipo",
       "en": "Type"
      },
      "v": {
       "es": "Proto-persona, hipótesis sin validar",
       "en": "Proto-persona, unvalidated hypothesis"
      }
     }
    ],
    "bio": {
     "es": "Autónoma y exploradora: si ya sabe un tema, quiere saltarlo y seguir. **Valora entender el porqué más que la respuesta.**",
     "en": "Independent and curious: if she already knows a topic, she wants to skip it and move on. **She values understanding why over getting the answer.**"
    },
    "goalsL": {
     "es": "Criterios de éxito",
     "en": "Success criteria"
    },
    "goals": {
     "es": [
      "Desbloquear secciones por lo que ya sabe, sin repetir lo básico",
      "Entender por qué Invertir está bloqueado sin sentirse juzgada",
      "Explicar con sus palabras qué diferencia una cuenta remunerada de un fondo money market"
     ],
     "en": [
      "Unlock sections with what she already knows, without repeating the basics",
      "Understand why Invest is locked without feeling judged",
      "Explain in her own words how an interest-bearing account differs from a money market fund"
     ]
    },
    "painsL": {
     "es": "Frustraciones supuestas",
     "en": "Assumed frustrations"
    },
    "pains": {
     "es": [
      "Lee sobre finanzas en redes y no sabe a quién creerle ni qué le conviene",
      "Siente que «debería saber» y le da vergüenza preguntar",
      "Las calculadoras no dicen qué supuestos usan ni de dónde salen las tasas"
     ],
     "en": [
      "She reads about money on social media and doesn’t know who to trust or what suits her",
      "She feels she “should know this” and is embarrassed to ask",
      "Calculators don’t say which assumptions they use or where the rates come from"
     ]
    }
   },
   {
    "t": "persona",
    "h": {
     "es": "Diego, la persona que aprende en el celular",
     "en": "Diego, the mobile learner"
    },
    "photo": {
     "src": "alcancia-11-diego.webp",
     "w": 112,
     "h": 112,
     "round": true,
     "alt": {
      "es": "Retrato de Diego Suárez, persona ficticia, con el anillo violeta del rol de participante",
      "en": "Portrait of Diego Suárez, a fictional person, with the violet ring of the participant role"
     }
    },
    "name": "Diego Suárez",
    "meta": [
     {
      "k": {
       "es": "Rol",
       "en": "Role"
      },
      "v": {
       "es": "Participante",
       "en": "Participant"
      }
     },
     {
      "k": {
       "es": "Puesto",
       "en": "Position"
      },
      "v": {
       "es": "Operario de depósito",
       "en": "Warehouse operator"
      }
     },
     {
      "k": {
       "es": "Tipo",
       "en": "Type"
      },
      "v": {
       "es": "Proto-persona, hipótesis sin validar",
       "en": "Proto-persona, unvalidated hypothesis"
      }
     }
    ],
    "bio": {
     "es": "Práctico: aprende haciendo y con ejemplos concretos. Necesita **retomar donde dejó, con una sola acción por pantalla**.",
     "en": "Practical: he learns by doing, with concrete examples. He needs **to pick up where he left off, with one action per screen**."
    },
    "goalsL": {
     "es": "Criterios de éxito",
     "en": "Success criteria"
    },
    "goals": {
     "es": [
      "Completar una guía y su práctica en 5 minutos, en un celular de 320 px",
      "Nunca tener que arrastrar para responder una pregunta",
      "Revisar el titular de la cuenta antes de confirmar una transferencia"
     ],
     "en": [
      "Finish a guide and its practice in 5 minutes, on a 320 px phone",
      "Never have to drag anything to answer a question",
      "Check the account holder’s name before confirming a transfer"
     ]
    },
    "painsL": {
     "es": "Frustraciones supuestas",
     "en": "Assumed frustrations"
    },
    "pains": {
     "es": [
      "Las plataformas de capacitación están pensadas para la computadora",
      "Los textos largos y técnicos lo expulsan",
      "Desconfía de poner sus datos en una app de la empresa"
     ],
     "en": [
      "Training platforms are designed for a computer, not a phone",
      "Long, technical texts push him away before he starts",
      "He distrusts putting his details into an app run by his employer"
     ]
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "Proto-personas, no personas",
     "en": "Proto-personas, not personas"
    },
    "body": {
     "es": "Las construí con el enfoque de Lean UX (Gothelf y Seiden, 2021): **hipótesis explícitas, sin entrevistas ni citas inventadas**. Ninguna describe la situación financiera real de nadie: el producto tampoco la conoce ni la pregunta. Cada una tiene su tabla de supuestos y el proyecto incluye un plan de validación en cuatro etapas.",
     "en": "I built them with the Lean UX approach (Gothelf & Seiden, 2021): **explicit hypotheses, with no invented interviews or quotes**. None of them describes anyone’s real financial situation: the product doesn’t know it and never asks. Each one has its own table of assumptions, and the project includes a four-stage validation plan."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Los supuestos de mayor riesgo",
     "en": "The riskiest assumptions"
    },
    "note": {
     "es": "Cada supuesto, con cómo lo validaría.",
     "en": "Each assumption, with how I would validate it."
    },
    "items": [
     {
      "lead": {
       "es": "Aprender usando una billetera es más claro que un curso",
       "en": "Learning by using a wallet is clearer than a course"
      },
      "body": {
       "es": "Prueba con 5 personas: la misión 1 frente a la misma guía en formato lección",
       "en": "A test with 5 people: mission 1 against the same guide as a lesson"
      }
     },
     {
      "lead": {
       "es": "La principal barrera de adopción es la desconfianza sobre la privacidad",
       "en": "The main barrier to adoption is distrust about privacy"
      },
      "body": {
       "es": "Encuesta previa al lanzamiento sobre los motivos para no sumarse",
       "en": "A pre-launch survey on the reasons for not joining"
      }
     },
     {
      "lead": {
       "es": "El personal operativo entra sobre todo desde el celular personal",
       "en": "Frontline staff mostly use their personal phone"
      },
      "body": {
       "es": "Consulta a L&D y a jefes de depósito sobre el uso de celulares en planta",
       "en": "Ask L&D and warehouse supervisors about phone use on the floor"
      }
     },
     {
      "lead": {
       "es": "Al tutor le alcanza con ver el avance, sin saber si un nivel está bloqueado",
       "en": "Seeing progress is enough for tutors, without knowing whether a level is locked"
      },
      "body": {
       "es": "Prueba del panel con 2 o 3 tutores ante un caso concreto",
       "en": "Test the dashboard with 2 or 3 tutors on a concrete case"
      }
     }
    ]
   },
   {
    "t": "journey",
    "h": {
     "es": "El primer sueldo de Diego (hipótesis)",
     "en": "Diego’s first paycheck (hypothesis)"
    },
    "note": {
     "es": "Mapa de experiencia hipotético, derivado de la proto-persona y de la misión 1: no sale de entrevistas.",
     "en": "A hypothetical experience map derived from the proto-persona and mission 1, not from interviews."
    },
    "labels": {
     "emotion": {
      "es": "Emoción",
      "en": "Emotion"
     },
     "actions": {
      "es": "Qué hace",
      "en": "What he does"
     },
     "feel": {
      "es": "Qué piensa",
      "en": "What he thinks"
     },
     "actors": {
      "es": "Quiénes participan",
      "en": "Who is involved"
     },
     "touch": {
      "es": "Puntos de contacto",
      "en": "Touchpoints"
     }
    },
    "stages": [
     {
      "name": {
       "es": "Primer ingreso",
       "en": "First login"
      },
      "level": 0,
      "emo": {
       "es": "Desconfiado",
       "en": "Wary"
      },
      "actions": {
       "es": "Lee el aviso de privacidad y hace «Conocerte»",
       "en": "Reads the privacy notice and takes “Getting to know you”"
      },
      "feel": {
       "es": "«¿Esto lo ve la empresa?»",
       "en": "“Can my employer see this?”"
      }
     },
     {
      "name": {
       "es": "Cobra el sueldo",
       "en": "Gets paid"
      },
      "level": 1,
      "emo": {
       "es": "Entusiasmado",
       "en": "Excited"
      },
      "actions": {
       "es": "Recibe $ 1.284.958,86 de práctica y ve su recibo explicado",
       "en": "Receives $1,284,958.86 in practice money and sees his payslip explained"
      },
      "feel": {
       "es": "«Ah, por esto el neto es menos que el bruto»",
       "en": "“So that’s why net pay is less than gross”"
      }
     },
     {
      "name": {
       "es": "Separa el 20 %",
       "en": "Sets aside 20%"
      },
      "level": 0,
      "emo": {
       "es": "Dudoso",
       "en": "Unsure"
      },
      "actions": {
       "es": "Calcula cuánto apartar y se equivoca por poco",
       "en": "Works out how much to set aside and is slightly off"
      },
      "feel": {
       "es": "«¿Lo hice mal? A ver el cálculo»",
       "en": "“Did I get it wrong? Let me see the maths”"
      }
     },
     {
      "name": {
       "es": "Débito sorpresa",
       "en": "Surprise debit"
      },
      "level": -1,
      "emo": {
       "es": "Molesto",
       "en": "Annoyed"
      },
      "actions": {
       "es": "Se le debita una suscripción de $ 4.990 que no recordaba",
       "en": "A $4,990 subscription he had forgotten about is charged"
      },
      "feel": {
       "es": "«¿Cuántas de estas tengo en la vida real?»",
       "en": "“How many of these do I have in real life?”"
      }
     },
     {
      "name": {
       "es": "Desafío del nivel 1",
       "en": "Level 1 challenge"
      },
      "level": 0,
      "emo": {
       "es": "Concentrado",
       "en": "Focused"
      },
      "actions": {
       "es": "Responde en el celular, sin límite de tiempo",
       "en": "Answers on his phone, with no time limit"
      },
      "feel": {
       "es": "«Si me equivoco, me explica por qué»",
       "en": "“If I get it wrong, it tells me why”"
      }
     },
     {
      "name": {
       "es": "Se abre Pagar",
       "en": "Pay unlocks"
      },
      "level": 1,
      "emo": {
       "es": "Orgulloso",
       "en": "Proud"
      },
      "actions": {
       "es": "Desbloquea la sección siguiente y Fuerte lo celebra",
       "en": "Unlocks the next section and Fuerte celebrates"
      },
      "feel": {
       "es": "«Lo gané por lo que hice, no por clics»",
       "en": "“I earned it by what I did, not by clicking”"
      }
     }
    ],
    "actors": {
     "es": [
      "Diego",
      "Fuerte",
      "Kevin (tutor)"
     ],
     "en": [
      "Diego",
      "Fuerte",
      "Kevin (tutor)"
     ]
    },
    "touch": {
     "es": [
      "Celular",
      "Billetera",
      "Recibo de ejemplo",
      "Desafío de nivel"
     ],
     "en": [
      "Phone",
      "Wallet",
      "Sample payslip",
      "Level challenge"
     ]
    }
   },
   {
    "t": "prose",
    "p": [
     {
      "es": "Los momentos bajos son los que Alcancía usa a favor: **el débito sorpresa está diseñado a propósito**, para que la primera experiencia de un gasto hormiga pase con dinero ficticio y deje una pregunta para la vida real.",
      "en": "Alcancía puts the low points to work: **the surprise debit is there on purpose**, so that the first experience of a small, forgotten expense happens with fictitious money and leaves a question for real life."
     }
    ]
   },
   {
    "t": "phase",
    "id": "definir",
    "n": "02",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Definir",
     "en": "Define"
    },
    "q": {
     "es": "¿Qué es Alcancía y qué no?",
     "en": "What is Alcancía, and what isn’t it?"
    }
   },
   {
    "t": "cards",
    "cols": 3,
    "h": {
     "es": "Tres contextos, una misma billetera",
     "en": "Three contexts, one wallet"
    },
    "note": {
     "es": "Cambian el vocabulario, los roles visibles y la entrada. La billetera, los niveles, las misiones y la privacidad son los mismos.",
     "en": "The vocabulary, the visible roles and the entry point change. The wallet, the levels, the missions and privacy stay the same."
    },
    "items": [
     {
      "title": {
       "es": "Una organización",
       "en": "An organisation"
      },
      "tag": "Andina Servicios S.A.",
      "body": {
       "es": "La ofrece a su gente como beneficio y capacitación, con **tutoría, L&D y un reporte de impacto** para la dirección.",
       "en": "Offers it to its people as a benefit and as training, with **tutoring, L&D and an impact report** for leadership."
      }
     },
     {
      "title": {
       "es": "Una institución educativa",
       "en": "A school"
      },
      "tag": "Instituto Superior Ceibo",
      "body": {
       "es": "Nivel superior y formación profesional, **solo con personas de 18 años o más**, con tutoría y coordinación académica.",
       "en": "Higher and vocational education, **only for people aged 18 or over**, with tutoring and academic coordination."
      }
     },
     {
      "title": {
       "es": "Un producto existente",
       "en": "An existing product"
      },
      "tag": "Hornero",
      "body": {
       "es": "Una billetera o app financiera la integra para sus usuarios. **Hornero es una marca ficticia** y lo dice en pantalla.",
       "en": "A wallet or financial app embeds it for its users. **Hornero is a fictional brand**, and the screen says so."
      }
     }
    ]
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "80",
      "label": {
       "es": "requerimientos funcionales, priorizados con MoSCoW",
       "en": "functional requirements, each prioritised with MoSCoW"
      }
     },
     {
      "value": "17",
      "label": {
       "es": "requerimientos no funcionales, según ISO/IEC 25010",
       "en": "non-functional requirements, under ISO/IEC 25010"
      }
     },
     {
      "value": "13",
      "label": {
       "es": "casos de uso, con su flujo principal y sus alternativos",
       "en": "use cases, each with a main flow and alternative flows"
      }
     },
     {
      "value": "2",
      "label": {
       "es": "fases de construcción, con un ajuste de siete pasos entre las dos",
       "en": "build phases, with a seven-step course correction in between"
      }
     }
    ]
   },
   {
    "t": "cards",
    "cols": 2,
    "h": {
     "es": "Arquitectura de la información",
     "en": "Information architecture"
    },
    "note": {
     "es": "Basada en los cuatro sistemas de Rosenfeld, Morville y Arango (2015).",
     "en": "Based on the four systems described by Rosenfeld, Morville and Arango (2015)."
    },
    "items": [
     {
      "title": {
       "es": "Organización: la de una billetera",
       "en": "Organisation: a wallet’s"
      },
      "body": {
       "es": "Para quien aprende no hay campus: hay Inicio, Pagar, Ahorrar, Invertir y Aprender. **El contenido vive en la sección donde se usa.**",
       "en": "There is no campus for learners: there is Home, Pay, Save, Invest and Learn. **Content lives in the section where it is used.**"
      }
     },
     {
      "title": {
       "es": "Rotulado con verbos",
       "en": "Labels as verbs"
      },
      "body": {
       "es": "«Pagar», «Ahorrar», «Rendir», «Ya sé esto»: lo que la persona hace, no el nombre del módulo. Nunca «examen», siempre **«desafío de nivel»**.",
       "en": "“Pay”, “Save”, “Earn interest”, “I already know this”: what people do, not what the module is called. Never “exam”, always **“level challenge”**."
      }
     },
     {
      "title": {
       "es": "Navegación por tamaño",
       "en": "Navigation by screen size"
      },
      "body": {
       "es": "Barra inferior de cinco destinos en celular y tablet, menú lateral desde 1200 px. **Lo bloqueado lleva candado y dice qué falta.**",
       "en": "A five-item bottom bar on phones and tablets, a side menu from 1200 px. **Locked items show a padlock and say what is missing.**"
      }
     },
     {
      "title": {
       "es": "Sin búsqueda global, a propósito",
       "en": "No global search, on purpose"
      },
      "body": {
       "es": "El volumen se recorre bien navegando. **El glosario de 54 términos tiene su propia búsqueda**, que ignora los acentos.",
       "en": "The volume is easy to browse by navigating. **The 54-term glossary has its own search**, which ignores accents."
      }
     }
    ]
   },
   {
    "t": "decisionflow",
    "h": {
     "es": "User flow: una sección bloqueada",
     "en": "User flow: a locked section"
    },
    "note": {
     "es": "Lo bloqueado se ve, nunca se esconde: cada sección cerrada dice qué falta y lleva a la acción que la acerca. Quien ya sabe puede demostrarlo y saltar el nivel.",
     "en": "Locked items are shown, never hidden: every locked section says what is missing and leads to the action that gets you closer. Anyone who already knows the topic can prove it and skip the level."
    },
    "nodes": [
     {
      "kind": "start",
      "label": {
       "es": "Toca una sección con candado",
       "en": "Taps a locked section"
      }
     },
     {
      "kind": "step",
      "label": {
       "es": "Tarjeta «qué falta», con el progreso de cada condición",
       "en": "“What’s missing” card, with progress on each condition"
      }
     },
     {
      "kind": "decision",
      "label": {
       "es": "¿Qué elige?",
       "en": "What do they choose?"
      },
      "branches": [
       {
        "label": {
         "es": "Ir a la acción",
         "en": "Go to the action"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Misión, guía o desafío pendiente",
           "en": "Pending mission, guide or challenge"
          }
         }
        ]
       },
       {
        "label": {
         "es": "Ya sé esto",
         "en": "I already know this"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Desafío de suficiencia",
           "en": "Proficiency challenge"
          }
         },
         {
          "kind": "decision",
          "label": {
           "es": "¿70 % o más?",
           "en": "70% or more?"
          },
          "branches": [
           {
            "label": {
             "es": "Sí",
             "en": "Yes"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Sección desbloqueada",
               "en": "Section unlocked"
              }
             }
            ]
           },
           {
            "label": {
             "es": "No",
             "en": "No"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Devolución por pregunta y guías sugeridas",
               "en": "Feedback on each question and suggested guides"
              }
             }
            ],
            "to": {
             "es": "Desafío de suficiencia",
             "en": "Proficiency challenge"
            }
           }
          ]
         }
        ]
       },
       {
        "label": {
         "es": "Volver",
         "en": "Go back"
        }
       }
      ]
     },
     {
      "kind": "end",
      "label": {
       "es": "Sigue usando la billetera",
       "en": "Keeps using the wallet"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "aprendizaje",
    "n": "03",
    "lens": "cap",
    "mode": {
     "es": "Lente LXD",
     "en": "LXD lens"
    },
    "name": {
     "es": "Diseñar el aprendizaje",
     "en": "Designing the learning"
    },
    "q": {
     "es": "¿Cómo se enseña dentro de una billetera?",
     "en": "How do you teach inside a wallet?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "El aprendizaje nace de la acción",
     "en": "Learning starts with an action"
    },
    "p": [
     {
      "es": "La persona hace algo en la billetera, recibe una explicación corta justo cuando la necesita, puede ir a **la parte exacta de la guía** que lo explica y vuelve a la misma pantalla sin perder nada. Después lo practica en una misión con consecuencias y lo demuestra en el desafío del nivel, que abre la sección siguiente. El ciclo sigue el aprendizaje experiencial de Kolb (1984) y el aprendizaje en el momento de la necesidad (Gottfredson y Mosher, 2011), pensado para adultos con poco tiempo (Knowles et al., 2015).",
      "en": "The learner does something in the wallet, gets a short explanation exactly when they need it, can jump to **the exact part of the guide** that covers it and return to the same screen without losing anything. Then they practise it in a mission with consequences and prove it in the level challenge, which unlocks the next section. The cycle follows Kolb’s experiential learning (1984) and learning at the moment of need (Gottfredson & Mosher, 2011), designed for adults with little time (Knowles et al., 2015)."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "El ciclo de aprendizaje",
     "en": "The learning cycle"
    },
    "steps": {
     "es": [
      "Acción en la billetera",
      "Tarjeta en el momento justo",
      "Parte exacta de la guía",
      "Volver sin perder nada",
      "Misión con consecuencias",
      "Desafío del nivel",
      "Desbloqueo"
     ],
     "en": [
      "An action in the wallet",
      "A card at the right moment",
      "The exact part of the guide",
      "Back without losing anything",
      "A mission with consequences",
      "The level challenge",
      "Unlock"
     ]
    }
   },
   {
    "t": "gallery",
    "rowsOf": [
     3
    ],
    "h": {
     "es": "El ciclo, en pantalla",
     "en": "The cycle, on screen"
    },
    "images": [
     {
      "src": "alcancia-20-why-it-matters.webp",
      "w": 1200,
      "h": 806,
      "alt": {
       "es": "Rendir con la tarjeta «¿Por qué importa?» abierta: una cuenta remunerada y un fondo money market no son lo mismo, con sus fuentes y el botón «Ver en la guía»",
       "en": "Earn interest with the “Why does it matter?” card open: an interest-bearing account and a money market fund are not the same, with its sources and a “See it in the guide” button"
      }
     },
     {
      "src": "alcancia-21-guide-part.webp",
      "w": 1200,
      "h": 806,
      "alt": {
       "es": "La guía «Dónde dejar el dinero que no usas hoy» abierta en la parte 5 de 8, «Fondo money market», con el índice de partes a la derecha",
       "en": "The guide “Where to keep money you don’t need today” open at part 5 of 8, “Money market fund”, with the list of parts on the right"
      }
     },
     {
      "src": "alcancia-22-back-to-yield.webp",
      "w": 1200,
      "h": 806,
      "alt": {
       "es": "De vuelta en Rendir, con la inflación del escenario y la cuenta remunerada elegida al 30 % de TNA, sin perder lo que estaba cargado",
       "en": "Back in Earn interest, with the scenario’s inflation and the interest-bearing account chosen at a 30% nominal annual rate, with nothing lost"
      }
     }
    ]
   },
   {
    "t": "compare",
    "arrow": false,
    "h": {
     "es": "Nueve niveles: primero lo que te protege",
     "en": "Nine levels: what protects you comes first"
    },
    "cols": {
     "dim": {
      "es": "Nivel y sección",
      "en": "Level and section"
     },
     "before": {
      "es": "Qué se aprende",
      "en": "What you learn"
     },
     "after": {
      "es": "Se abre con",
      "en": "Unlocks with"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "0 · Abrir tu cuenta",
       "en": "0 · Open your account"
      },
      "before": {
       "es": "Bienvenida, diagnóstico «Conocerte» y seguridad básica",
       "en": "Welcome, the “Getting to know you” check and basic security"
      },
      "after": {
       "es": "El primer ingreso",
       "en": "The first login"
      }
     },
     {
      "dim": {
       "es": "1 · Cuenta",
       "en": "1 · Account"
      },
      "before": {
       "es": "El recibo de sueldo; tu cerebro y el dinero",
       "en": "The payslip; your brain and money"
      },
      "after": {
       "es": "Terminar el nivel 0",
       "en": "Finishing level 0"
      }
     },
     {
      "dim": {
       "es": "2 · Pagar",
       "en": "2 · Pay"
      },
      "before": {
       "es": "Billeteras, transferencias, QR y estafas",
       "en": "Wallets, transfers, QR codes and scams"
      },
      "after": {
       "es": "La misión 1 y el desafío del nivel 1",
       "en": "Mission 1 and the level 1 challenge"
      }
     },
     {
      "dim": {
       "es": "3 · Presupuesto",
       "en": "3 · Budget"
      },
      "before": {
       "es": "Presupuesto y gastos hormiga",
       "en": "Budgeting and small, forgotten expenses"
      },
      "after": {
       "es": "10 movimientos categorizados y el desafío del nivel 2",
       "en": "10 categorised transactions and the level 2 challenge"
      }
     },
     {
      "dim": {
       "es": "4 · Apartados y metas",
       "en": "4 · Pockets and goals"
      },
      "before": {
       "es": "Fondo de emergencia",
       "en": "Emergency fund"
      },
      "after": {
       "es": "Un mes cerrado en verde y el desafío del nivel 3",
       "en": "A month closed in the green and the level 3 challenge"
      }
     },
     {
      "dim": {
       "es": "5 · Tarjeta y préstamos",
       "en": "5 · Card and loans"
      },
      "before": {
       "es": "Orden de las deudas, CFT, cuotas o contado",
       "en": "Which debt to pay first, total cost of credit, instalments or cash"
      },
      "after": {
       "es": "El desafío del nivel 4",
       "en": "The level 4 challenge"
      }
     },
     {
      "dim": {
       "es": "6 · Rendir",
       "en": "6 · Earn interest"
      },
      "before": {
       "es": "Inflación, TNA, TEA, tasa real, plazo fijo, UVA y money market",
       "en": "Inflation, nominal and effective rates, real rate, fixed-term and inflation-linked deposits, money market"
      },
      "after": {
       "es": "Fondo de emergencia creado y el desafío del nivel 5",
       "en": "An emergency fund in place and the level 5 challenge"
      }
     },
     {
      "dim": {
       "es": "7 · Invertir",
       "en": "7 · Invest"
      },
      "before": {
       "es": "Perfil de inversor, bróker, mercado de capitales, CEDEARs",
       "en": "Investor profile, brokers, capital markets, CEDEARs"
      },
      "after": {
       "es": "==Fondo de 3 meses, sin deudas caras==, el desafío del nivel 6 y el test de perfil",
       "en": "==A 3-month fund and no expensive debt==, the level 6 challenge and the profile test"
      }
     },
     {
      "dim": {
       "es": "8 · Cripto",
       "en": "8 · Crypto"
      },
      "before": {
       "es": "Riesgos y dónde verificar",
       "en": "Risks and where to check"
      },
      "after": {
       "es": "Completar el nivel 7",
       "en": "Completing level 7"
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "La decisión pedagógica que más defiendo",
     "en": "The learning decision I stand by most"
    },
    "body": {
     "es": "Al principio, las misiones se jugaban en una cuenta de práctica aparte: equivocarse no dejaba rastro. Lo cambié: **las 13 misiones se juegan en la billetera de la persona**. Un préstamo tomado aparece en Tus deudas, sus cuotas se debitan y ==bloquea Invertir hasta saldarlo==. Se revierte pagando o cancelando dentro de la simulación, nunca con «deshacer». La consecuencia es la retroalimentación más fuerte que existe.",
     "en": "At first, missions were played in a separate practice account: a mistake left no trace. I changed that: **all 13 missions are played in the learner’s own wallet**. A loan they take shows up in Your debts, its instalments are charged, and ==it locks Invest until it is paid off==. You reverse it by paying or cancelling within the simulation, never with “undo”. A consequence is the strongest feedback there is."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Evaluar lo que importa",
     "en": "Assessing what matters"
    },
    "note": {
     "es": "Nueve tipos de pregunta, elegidos por lo que se quiere comprobar. Ninguno tiene límite de tiempo.",
     "en": "Nine question types, each chosen for what it needs to check. None has a time limit."
    },
    "items": [
     {
      "lead": {
       "es": "Devolución por opción",
       "en": "Feedback for every option"
      },
      "body": {
       "es": "Cada respuesta, correcta o no, explica el porqué.",
       "en": "Every answer, right or wrong, explains why."
      }
     },
     {
      "lead": {
       "es": "Caso con decisiones",
       "en": "Branching scenarios"
      },
      "body": {
       "es": "Cada elección lleva a una consecuencia y a la siguiente decisión, también en los desafíos de los niveles 5 y 6.",
       "en": "Each choice leads to a consequence and to the next decision, including in the level 5 and 6 challenges."
      }
     },
     {
      "lead": {
       "es": "Arrastrar, con alternativa",
       "en": "Dragging, with an alternative"
      },
      "body": {
       "es": "Ordenar, unir y clasificar también se hacen con botones o menús.",
       "en": "Ordering, matching and sorting can also be done with buttons or menus."
      }
     },
     {
      "lead": {
       "es": "Primero pensar, después la respuesta",
       "en": "Think first, then the answer"
      },
      "body": {
       "es": "Si una cuenta sale mal, se muestra el método y se pide otro intento.",
       "en": "If a calculation is wrong, the method is shown and another attempt is requested."
      }
     },
     {
      "lead": {
       "es": "«Ya sé esto»",
       "en": "“I already know this”"
      },
      "body": {
       "es": "Quien demuestra que sabe, con 70 % o más, salta el nivel.",
       "en": "Anyone who proves they know it, with 70% or more, skips the level."
      }
     },
     {
      "lead": {
       "es": "Intentos agotados, sin castigo",
       "en": "Out of attempts, with no penalty"
      },
      "body": {
       "es": "El desbloqueo pasa a la tutoría y no se pierde nada.",
       "en": "Unlocking passes to the tutor and nothing is lost."
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Impacto medido con Kirkpatrick",
     "en": "Impact measured with Kirkpatrick"
    },
    "note": {
     "es": "Kirkpatrick y Kirkpatrick (2016). Solo cifras agregadas, en grupos de 5 personas o más.",
     "en": "Kirkpatrick & Kirkpatrick (2016). Aggregate figures only, in groups of 5 people or more."
    },
    "items": [
     {
      "k": {
       "es": "Nivel 1 · Reacción",
       "en": "Level 1 · Reaction"
      },
      "v": {
       "es": "Satisfacción con cada guía.",
       "en": "Satisfaction with each guide."
      }
     },
     {
      "k": {
       "es": "Nivel 2 · Aprendizaje",
       "en": "Level 2 · Learning"
      },
      "v": {
       "es": "Diferencia entre el diagnóstico inicial y el final, solo con las preguntas de conocimiento.",
       "en": "The difference between the initial and final check, using knowledge questions only."
      }
     },
     {
      "k": {
       "es": "Nivel 3 · Conducta",
       "en": "Level 3 · Behaviour"
      },
      "v": {
       "es": "Autoinforme a los 30 días.",
       "en": "A self-report after 30 days."
      }
     },
     {
      "k": {
       "es": "Nivel 4 · Resultados",
       "en": "Level 4 · Results"
      },
      "v": {
       "es": "Línea futura: no se inventan datos de negocio.",
       "en": "Future work: no business data is made up."
      }
     }
    ]
   },
   {
    "t": "bento",
    "h": {
     "es": "Fuerte, un compañero con función pedagógica",
     "en": "Fuerte, a companion with a teaching role"
    },
    "items": [
     {
      "size": "l",
      "lead": true,
      "title": {
       "es": "Andamiaje, no decoración",
       "en": "Scaffolding, not decoration"
      },
      "body": {
       "es": "Fuerte avisa antes de un error evitable sin resolver por la persona, y después de un error **explica sin culpa**.",
       "en": "Fuerte warns before an avoidable mistake without solving it for the learner, and after a mistake **explains without blame**."
      },
      "img": {
       "src": "alcancia-23-fuerte.webp",
       "w": 1320,
       "h": 825,
       "alt": {
        "es": "Panel de Fuerte abierto en Rendir: «Tu saldo rinde. Ahora la pregunta es si le gana a la inflación», con los avisos de Mariana (una misión pendiente, el seguimiento a 30 días y el desafío semanal) y «¿Por qué importa?» debajo",
        "en": "Fuerte’s panel open on Earn interest: “Your balance earns interest. Now the question is whether it beats inflation”, with Mariana’s notices (a pending mission, the 30-day follow-up and the weekly challenge) and “Why does it matter?” below"
       }
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Nunca más de dos oraciones",
       "en": "Never more than two sentences"
      },
      "body": {
       "es": "Y nunca recomienda un producto financiero.",
       "en": "And it never recommends a financial product."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Tres niveles de presencia",
       "en": "Three levels of presence"
      },
      "body": {
       "es": "Conversador, solo lo importante o en silencio.",
       "en": "Chatty, only what matters, or completely silent."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "Lo importante no depende de él",
       "en": "What matters doesn’t depend on it"
      },
      "body": {
       "es": "Con Fuerte en silencio, «¿Por qué importa?» sigue visible en cada pantalla.",
       "en": "With Fuerte silenced, “Why does it matter?” is still visible on every screen."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "La única excepción de color",
       "en": "The only colour exception"
      },
      "body": {
       "es": "Su naranja plano es lo único cálido en una paleta fría, y solo en el personaje.",
       "en": "Its flat orange is the only warm colour in a cool palette, and only on the character."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Gamificación con medida",
       "en": "Measured gamification"
      },
      "body": {
       "es": "Logros por conductas sanas. Sin rankings ni cuentas regresivas.",
       "en": "Achievements for healthy habits. No leaderboards, no countdowns."
      }
     }
    ]
   },
   {
    "t": "preview",
    "url": "https://lpedaci.github.io/portfolio/casos/escape-room-finanzas/",
    "img": {
     "src": "escape-11-fuerte.webp",
     "w": 1600,
     "h": 417
    },
    "kicker": {
     "es": "Caso relacionado",
     "en": "Related case"
    },
    "title": {
     "es": "Fuerte viene de un escape room",
     "en": "Fuerte comes from an escape room"
    },
    "body": {
     "es": "El escape room «Tu primer sueldo» vive dentro de Alcancía en tres versiones, con insignias y un modo simple como alternativa accesible.",
     "en": "The “Your first paycheck” escape room lives inside Alcancía in three versions, with badges and a simple mode as an accessible alternative."
    },
    "cta": {
     "es": "Ver el caso del escape room",
     "en": "See the escape room case"
    }
   },
   {
    "t": "phase",
    "id": "auditar",
    "n": "04",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Auditar y ajustar",
     "en": "Audit and adjust"
    },
    "q": {
     "es": "¿Lo construido cumple la idea central?",
     "en": "Does what was built deliver the core idea?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Frenar a mitad de camino",
     "en": "Stopping halfway"
    },
    "p": [
     {
      "es": "Con la fase A terminada y todos los tests en verde, comparé lo construido con la idea central: **aprender finanzas usando una billetera**. Encontré que el aprendizaje todavía dependía de entrar a una misión o a una guía. Las tarjetas vivían dentro de las misiones, las misiones se jugaban en una cuenta aparte y los errores no dejaban huella. ==Los tests probaban que el producto funcionaba, no que enseñaba como se había prometido.== Detuve la fase B y sumé un ajuste de siete pasos.",
      "en": "With phase A finished and every test passing, I compared what had been built with the core idea: **learning about money by using a wallet**. I found that learning still depended on opening a mission or a guide. The cards lived inside missions, missions were played in a separate account and mistakes left no trace. ==The tests proved the product worked, not that it taught the way it had promised to.== I stopped phase B and added a seven-step adjustment."
     }
    ]
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "7",
      "label": {
       "es": "hallazgos verificados contra el código",
       "en": "findings verified against the code"
      }
     },
     {
      "value": {
       "es": "5 de 6",
       "en": "5 of 6"
      },
      "label": {
       "es": "criterios del ajuste sin cumplir al auditar",
       "en": "adjustment criteria unmet at the audit"
      }
     },
     {
      "value": {
       "es": "6 de 6",
       "en": "6 of 6"
      },
      "label": {
       "es": "criterios cumplidos después del ajuste, con tests",
       "en": "criteria met after the adjustment, with tests"
      }
     },
     {
      "value": "9",
      "label": {
       "es": "decisiones nuevas que cambiaron el producto",
       "en": "new decisions that reshaped the product and its docs"
      }
     }
    ]
   },
   {
    "t": "compare",
    "marks": true,
    "h": {
     "es": "Qué cambió con la auditoría",
     "en": "What changed after the audit"
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Antes",
      "en": "Before"
     },
     "after": {
      "es": "Después",
      "en": "After"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Tarjetas de aprendizaje",
       "en": "Learning cards"
      },
      "before": {
       "es": "Solo aparecían dentro de las misiones",
       "en": "Only appeared inside missions"
      },
      "after": {
       "es": "Se disparan por acciones de la billetera, también en el modo libre",
       "en": "Triggered by wallet actions, in free mode too"
      }
     },
     {
      "dim": {
       "es": "«¿Por qué importa?»",
       "en": "“Why does it matter?”"
      },
      "before": {
       "es": "Escondido en el panel de Fuerte; con Fuerte en silencio, desaparecía",
       "en": "Hidden in Fuerte’s panel; with Fuerte silenced, it disappeared"
      },
      "after": {
       "es": "Visible en cada pantalla, con enlace a la parte exacta de la guía",
       "en": "Visible on every screen, linked to the exact part of the guide"
      }
     },
     {
      "dim": {
       "es": "Misiones",
       "en": "Missions"
      },
      "before": {
       "es": "12 de 13 se jugaban en una cuenta aparte",
       "en": "12 of 13 were played in a separate account"
      },
      "after": {
       "es": "Las 13 se juegan en la billetera de la persona y dejan huella",
       "en": "All 13 are played in the learner’s wallet and leave a trace"
      }
     },
     {
      "dim": {
       "es": "Casos con decisiones",
       "en": "Branching scenarios"
      },
      "before": {
       "es": "0 en los desafíos de nivel",
       "en": "None in the level challenges"
      },
      "after": {
       "es": "4, en los desafíos de los niveles 5 y 6",
       "en": "4, in the level 5 and 6 challenges"
      }
     },
     {
      "dim": {
       "es": "Contextos",
       "en": "Contexts"
      },
      "before": {
       "es": "Solo una empresa",
       "en": "A company only"
      },
      "after": {
       "es": "Organización, institución educativa y producto existente",
       "en": "Organisation, school and existing product"
      }
     },
     {
      "dim": {
       "es": "Valores",
       "en": "Figures"
      },
      "before": {
       "es": "Todos de ejemplo",
       "en": "All sample values"
      },
      "after": {
       "es": "Tasas, inflación y tipo de cambio reales del BCRA y el INDEC, con fecha y fuente",
       "en": "Real interest rates, inflation and exchange rates from the BCRA and INDEC, with date and source"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     3
    ],
    "h": {
     "es": "Una decisión con consecuencias",
     "en": "A decision with consequences"
    },
    "note": {
     "es": "Tomar un préstamo: la deuda queda registrada, la devolución explica qué pasó e Invertir se bloquea hasta saldarla.",
     "en": "Taking a loan: the debt is recorded, the feedback explains what happened, and Invest locks until it is paid off."
    },
    "images": [
     {
      "src": "alcancia-30-loan-debts.webp",
      "w": 1280,
      "h": 900,
      "alt": {
       "es": "Tarjeta y préstamos con el préstamo tomado: en Tus deudas, $ 599.999,99 con una TEA de 71,2 % y una cuota de $ 41.737,16 por mes, marcada como tasa alta",
       "en": "Card and loans with the loan taken: Your debts shows $599,999.99 at a 71.2% effective annual rate and a $41,737.16 monthly instalment, flagged as a high rate"
      }
     },
     {
      "src": "alcancia-31-loan-feedback.webp",
      "w": 1280,
      "h": 900,
      "alt": {
       "es": "Misión «El préstamo tentador», paso 5 de 6: la devolución explica que la deuda ya está en Tus deudas, con $ 570.000,00 hoy y 24 cuotas de $ 41.737,16, y que Invertir no se abre mientras exista",
       "en": "Mission “The tempting loan”, step 5 of 6: the feedback explains that the debt is now in Your debts, with $570,000.00 today and 24 instalments of $41,737.16, and that Invest won’t open while it exists"
      }
     },
     {
      "src": "alcancia-32-invest-locked.webp",
      "w": 1280,
      "h": 900,
      "alt": {
       "es": "Invertir está bloqueado: 1 de 4 condiciones cumplidas, con el fondo de emergencia en 2,3 de 3 meses, sin deudas de tasa alta pendiente, el desafío del nivel 6 aprobado y el test de perfil por hacer",
       "en": "Invest is locked: 1 of 4 conditions met, with the emergency fund at 2.3 of 3 months, “no high-rate debt” still pending, the level 6 challenge passed and the profile test still to do"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "interfaz",
    "n": "05",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Diseñar la interfaz",
     "en": "Designing the interface"
    },
    "q": {
     "es": "¿Cómo se ve una billetera que enseña?",
     "en": "What does a wallet that teaches look like?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Una billetera, no un campus",
     "en": "A wallet, not a campus"
    },
    "p": [
     {
      "es": "Partí de Material Design 3 con identidad propia: **paleta fría de índigo y verde azulado**, profundidad por elevación tonal y sin sombras en tarjetas en reposo. Las referencias visuales de fintech y de plataformas de aprendizaje se auditaron una por una: qué se toma de cada una y qué no. El dinero tiene sus propias reglas, documentadas en el sistema de diseño en «Cómo mostramos el dinero».",
      "en": "I started from Material Design 3 with an identity of its own: **a cool palette of indigo and teal**, depth through tonal elevation and no shadows on resting cards. Visual references from fintech and learning platforms were audited one by one: what to take from each and what to leave out. Money has its own rules, documented in the design system under “How we show money”."
     }
    ]
   },
   {
    "t": "swatches",
    "h": {
     "es": "Paleta: Material 3 con color propio",
     "en": "Palette: Material 3 with its own colour"
    },
    "note": {
     "es": "El contraste es el del color sobre blanco, calculado con la fórmula de WCAG.",
     "en": "Contrast is each colour against white, calculated with the WCAG formula."
    },
    "groups": [
     {
      "name": {
       "es": "Roles de color",
       "en": "Colour roles"
      },
      "items": [
       {
        "token": "primary",
        "hex": "#3D4FA8",
        "use": {
         "es": "Acción principal, navegación activa, foco",
         "en": "Primary action, active navigation, focus"
        },
        "ratio": {
         "es": "7,29:1",
         "en": "7.29:1"
        }
       },
       {
        "token": "secondary",
        "hex": "#55607A",
        "use": {
         "es": "Botones tonales y chips de filtro",
         "en": "Tonal buttons and filter chips"
        },
        "ratio": {
         "es": "6,29:1",
         "en": "6.29:1"
        }
       },
       {
        "token": "tertiary",
        "hex": "#00796B",
        "use": {
         "es": "Logros, metas y segunda serie",
         "en": "Achievements, goals and second series"
        },
        "ratio": {
         "es": "5,32:1",
         "en": "5.32:1"
        }
       },
       {
        "token": "error",
        "hex": "#B3261E",
        "use": {
         "es": "Errores y acciones destructivas",
         "en": "Errors and destructive actions"
        },
        "ratio": {
         "es": "6,54:1",
         "en": "6.54:1"
        }
       },
       {
        "token": "success",
        "hex": "#2E7D32",
        "use": {
         "es": "Completado y dinero que entra",
         "en": "Completed items and incoming money"
        },
        "ratio": {
         "es": "5,13:1",
         "en": "5.13:1"
        }
       },
       {
        "token": "warning",
        "hex": "#8A5300",
        "use": {
         "es": "Riesgo y pérdida de poder de compra",
         "en": "Risk and loss of purchasing power"
        },
        "ratio": {
         "es": "6,33:1",
         "en": "6.33:1"
        }
       },
       {
        "token": "info",
        "hex": "#2457C5",
        "use": {
         "es": "Avisos y supuestos",
         "en": "Notices and assumptions"
        },
        "ratio": {
         "es": "6,47:1",
         "en": "6.47:1"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Un color por rol (identifican personas, nunca estados)",
       "en": "One colour per role (they identify people, never states)"
      },
      "items": [
       {
        "token": "role-admin",
        "hex": "#3D4FA8",
        "use": {
         "es": "Admin de L&D",
         "en": "L&D admin"
        }
       },
       {
        "token": "role-tutor",
        "hex": "#00796B",
        "use": {
         "es": "Tutoría",
         "en": "Tutor"
        }
       },
       {
        "token": "role-participant",
        "hex": "#7A4FB0",
        "use": {
         "es": "Participante",
         "en": "Participant"
        }
       },
       {
        "token": "role-sponsor",
        "hex": "#5D6B2F",
        "use": {
         "es": "Decisor",
         "en": "Sponsor"
        }
       }
      ]
     }
    ]
   },
   {
    "t": "bento",
    "h": {
     "es": "Cómo mostramos el dinero",
     "en": "How we show money"
    },
    "items": [
     {
      "size": "l",
      "lead": true,
      "title": {
       "es": "Comparar antes de elegir",
       "en": "Compare before choosing"
      },
      "body": {
       "es": "La misma ficha en todas las opciones: tasa, riesgo, liquidez, moneda y protección. **La elegida se marca con borde y texto, no solo con color.**",
       "en": "The same fact sheet for every option: rate, risk, liquidity, currency and protection. **The chosen one is marked with a border and text, not just colour.**"
      },
      "img": {
       "src": "alcancia-40-option-cards.webp",
       "w": 1200,
       "h": 844,
       "alt": {
        "es": "Tres fichas para elegir dónde rinde el saldo: sin rendimiento, cuenta remunerada al 30 % de TNA, marcada como «Elegida», y fondo money market al 31 % de TNA, cada una con riesgo, liquidez y moneda",
        "en": "Three cards for choosing where the balance earns interest: no interest, an interest-bearing account at a 30% nominal annual rate, marked “Chosen”, and a money market fund at 31%, each with risk, liquidity and currency"
       }
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Montos que nunca se cortan",
       "en": "Amounts are never cut off"
      },
      "body": {
       "es": "Si no entran, bajan un tamaño o se abrevian, con el valor completo accesible.",
       "en": "If they don’t fit, they drop a size or get abbreviated, full value still accessible."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "El signo nunca queda solo",
       "en": "The sign never stands alone"
      },
      "body": {
       "es": "Entre el signo $ y el número va un espacio que no se separa en ningún ancho.",
       "en": "A non-breaking space keeps the $ sign next to its number at every width."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "Ganancias y pérdidas con signo, ícono y texto",
       "en": "Gains and losses with sign, icon and text"
      },
      "body": {
       "es": "Perder poder de compra es información, no un error: va en el color de atención.",
       "en": "Losing purchasing power is information, not an error: it uses the warning colour."
      }
     },
     {
      "size": "m",
      "title": {
       "es": "Siempre «dinero ficticio»",
       "en": "Always “fictitious money”"
      },
      "body": {
       "es": "El cartel fijo de la billetera lo dice en todas las pantallas y no se puede cerrar ni ocultar.",
       "en": "The wallet’s fixed banner says so on every screen, and it can’t be closed or hidden."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Ningún cálculo con number",
       "en": "No maths with number"
      },
      "body": {
       "es": "Todo el dinero se calcula con decimal.js, sin redondeos sorpresa en los centavos.",
       "en": "All money is calculated with decimal.js, with no surprise rounding in the cents."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     2
    ],
    "h": {
     "es": "El modo integrado, con una marca ficticia",
     "en": "Embedded mode, with a fictional brand"
    },
    "note": {
     "es": "Hornero tiene marca propia, hecha desde cero, y no se parece a ninguna app real. Muestra el ahorro con su concepto: el nido que crece y el nido que aguanta.",
     "en": "Hornero has its own brand, made from scratch, and doesn’t resemble any real app. It shows savings through its own idea: the nest that grows and the nest that holds."
    },
    "images": [
     {
      "src": "alcancia-41-hornero-home.webp",
      "w": 1200,
      "h": 806,
      "alt": {
       "es": "Inicio de Hornero, marca ficticia de demostración: «Tu nido crece», con $ 2.291.665,40 guardados; «Un nido que aguanta», 2,3 meses de gastos; y el acceso a Alcancía con los hitos que le avisó a Hornero",
       "en": "Hornero’s home, a fictional demo brand: “Your nest grows”, with $2,291,665.40 saved; “A nest that holds”, 2.3 months of expenses; and the entry to Alcancía with the milestones it reported to Hornero"
      }
     },
     {
      "src": "alcancia-42-hornero-wallet.webp",
      "w": 1200,
      "h": 806,
      "alt": {
       "es": "La billetera de Alcancía abierta desde Hornero: saldo disponible de $ 1.372.112,09, acciones rápidas y el próximo desbloqueo, Invertir, con 2 de 4 condiciones cumplidas",
       "en": "Alcancía’s wallet opened from Hornero: an available balance of $1,372,112.09, quick actions and the next unlock, Invest, with 2 of 4 conditions met"
      }
     }
    ]
   },
   {
    "t": "preview",
    "url": "https://lpedaci.github.io/alcancia-app/#/design-system",
    "img": {
     "src": "alcancia-43-design-system.webp",
     "w": 1440,
     "h": 900
    },
    "kicker": {
     "es": "En vivo",
     "en": "Live"
    },
    "title": {
     "es": "Un sistema de diseño público, con sus propios componentes",
     "en": "A public design system, built with its own components"
    },
    "body": {
     "es": "Tokens en cuatro niveles, contraste verificado por tests, componentes reales y las secciones «Cómo mostramos el dinero» y «Seguridad y privacidad».",
     "en": "Four tiers of tokens, contrast checked by tests, real components and the “How we show money” and “Security and privacy” sections."
    },
    "cta": {
     "es": "Ver el sistema de diseño",
     "en": "See the design system"
    }
   },
   {
    "t": "gallery",
    "rowsOf": [
     2,
     2
    ],
    "h": {
     "es": "Una pantalla clave por rol",
     "en": "One key screen per role"
    },
    "images": [
     {
      "src": "alcancia-44-participant.webp",
      "w": 1200,
      "h": 750,
      "alt": {
       "es": "Participante: el inicio de Diego, con $ 459.477,09 disponibles, acciones rápidas y el próximo desbloqueo, Presupuesto, con lo que le falta",
       "en": "Participant: Diego’s home, with $459,477.09 available, quick actions and the next unlock, Budget, with what is still missing"
      }
     },
     {
      "src": "alcancia-45-tutor.webp",
      "w": 1200,
      "h": 750,
      "alt": {
       "es": "Tutoría: el inicio de Kevin, con 80 % de participación, 33 % de módulos completados y la lista «Para atender», sin ningún monto",
       "en": "Tutor: Kevin’s home, with 80% participation, 33% of modules completed and a “To follow up” list, with no amounts at all"
      }
     },
     {
      "src": "alcancia-46-admin.webp",
      "w": 1200,
      "h": 750,
      "alt": {
       "es": "Admin de L&D: el panel de Julieta, con 80 personas invitadas, 80 % activas, 86 % que hicieron Conocerte y avisos de cohortes con menos de 5 personas",
       "en": "L&D admin: Julieta’s dashboard, with 80 people invited, 80% active, 86% who took the initial check and notices about cohorts with fewer than 5 people"
      }
     },
     {
      "src": "alcancia-47-sponsor.webp",
      "w": 1200,
      "h": 750,
      "alt": {
       "es": "Decisor: el reporte de impacto de Ricardo, con 80 % activas, satisfacción de 4,6 sobre 5, 18 puntos de mejora en Conocerte y 78 % que armó un presupuesto",
       "en": "Sponsor: Ricardo’s impact report, with 80% active, 4.6 out of 5 satisfaction, an 18-point improvement on the initial check and 78% who built a budget"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "rowsOf": [
     1
    ],
    "h": {
     "es": "Responsive, de 320 a 1440 px",
     "en": "Responsive, from 320 to 1440 px"
    },
    "note": {
     "es": "Barra inferior de cinco destinos en celular y tablet; menú lateral desde 1200 px.",
     "en": "A five-item bottom bar on phones and tablets; a side menu from 1200 px."
    },
    "images": [
     {
      "src": "alcancia-48-responsive.webp",
      "w": 1600,
      "h": 626,
      "alt": {
       "es": "Apartados y metas a 375, 768 y 1280 px: el fondo de emergencia de $ 1.695.561,37 con la barra inferior en celular y tablet y el menú lateral en escritorio",
       "en": "Pockets and goals at 375, 768 and 1280 px: the $1,695,561.37 emergency fund with the bottom bar on phone and tablet and the side menu on desktop"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "privacidad",
    "n": "06",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Privacidad, accesibilidad y seguridad",
     "en": "Privacy, accessibility and security"
    },
    "q": {
     "es": "¿Qué puede ver cada rol sin exponer a nadie?",
     "en": "What can each role see without exposing anyone?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Privacidad por diseño",
     "en": "Privacy by design"
    },
    "p": [
     {
      "es": "Los montos, movimientos, metas y respuestas de hábitos **viven solo en el navegador de la persona**. La tutoría ve avance de aprendizaje; la organización, la institución o el socio ven cifras agregadas, siempre en grupos de 5 personas o más. Si un grupo es más chico, el panel dice que no hay datos suficientes para mostrarlo sin identificar a nadie, y no muestra ningún número del que se pueda deducir el resto.",
      "en": "Amounts, transactions, goals and habit answers **live only in the learner’s browser**. Tutors see learning progress; the organisation, school or partner sees aggregate figures, always in groups of 5 people or more. If a group is smaller, the dashboard says there isn’t enough data to show it without identifying anyone, and shows no number from which the rest could be worked out."
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Qué ve cada rol",
     "en": "What each role sees"
    },
    "items": [
     {
      "k": {
       "es": "Participante",
       "en": "Participant"
      },
      "v": {
       "es": "Todo lo suyo: saldo, movimientos, deudas, metas y respuestas.",
       "en": "All of their own: balance, transactions, debts, goals and answers."
      }
     },
     {
      "k": {
       "es": "Tutoría",
       "en": "Tutor"
      },
      "v": {
       "es": "Guías leídas, estado de cada desafío y consultas de su cohorte. Nunca montos.",
       "en": "Guides read, challenge status and cohort questions. Never amounts."
      }
     },
     {
      "k": {
       "es": "L&D, coordinación o socio",
       "en": "L&D, coordination, partner"
      },
      "v": {
       "es": "Adopción y avance en cifras agregadas, con un umbral de 5 personas.",
       "en": "Adoption and progress, aggregated, with a threshold of 5."
      }
     },
     {
      "k": {
       "es": "Decisor",
       "en": "Sponsor"
      },
      "v": {
       "es": "El reporte de impacto, de solo lectura y sin datos individuales.",
       "en": "The impact report, read-only and with no individual data."
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "La decisión que más defiendo",
     "en": "The decision I stand by most"
    },
    "body": {
     "es": "El tutor podía ver si un nivel estaba bloqueado para alguien. Parecía inofensivo, hasta que lo crucé con los desbloqueos: si ve «desafío del nivel 6 aprobado» e «Invertir bloqueado», **deduce que a esa persona le falta fondo de emergencia o tiene deudas caras**. Cambié la regla: ==la tutoría ve el avance de aprendizaje, nunca el estado de bloqueo==. Puede habilitar cualquier nivel con un motivo registrado, sin saber cuál está cerrado.",
     "en": "Tutors could see whether a level was locked for someone. It looked harmless until I cross-checked it with the unlock rules: if they see “level 6 challenge passed” and “Invest locked”, **they can infer that the person lacks an emergency fund or has expensive debt**. I changed the rule: ==tutors see learning progress, never lock status==. They can unlock any level with a recorded reason, without knowing which one is closed."
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Accesibilidad en decisiones concretas (WCAG 2.2 AA)",
     "en": "Accessibility in concrete decisions (WCAG 2.2 AA)"
    },
    "note": {
     "es": "WCAG 2.2 AA es el objetivo: la prueba con lector de pantalla todavía está pendiente.",
     "en": "WCAG 2.2 AA is the target: the screen reader test is still pending."
    },
    "items": [
     {
      "lead": {
       "es": "Arrastrar, con alternativa (2.5.7)",
       "en": "Dragging, with an alternative (2.5.7)"
      },
      "body": {
       "es": "Toda pregunta que se arrastra también se responde con botones o menús.",
       "en": "Every drag-and-drop question can also be answered with buttons or menus."
      }
     },
     {
      "lead": {
       "es": "Sin límite de tiempo (2.2.1)",
       "en": "No time limits (2.2.1)"
      },
      "body": {
       "es": "Ningún desafío ni misión tiene cuenta regresiva.",
       "en": "No challenge or mission has a countdown."
      }
     },
     {
      "lead": {
       "es": "Reacomodo a 320 px (1.4.10)",
       "en": "Reflow at 320 px (1.4.10)"
      },
      "body": {
       "es": "Ninguna de las 129 vistas desborda en seis anchos, verificado por test.",
       "en": "None of the 129 views overflows at six widths, checked by tests."
      }
     },
     {
      "lead": {
       "es": "El color nunca solo (1.4.1)",
       "en": "Never colour alone (1.4.1)"
      },
      "body": {
       "es": "Ganancias, pérdidas y estados llevan signo, ícono y texto.",
       "en": "Gains, losses and statuses carry a sign, an icon and text."
      }
     },
     {
      "lead": {
       "es": "Cambios anunciados (4.1.3)",
       "en": "Announced changes (4.1.3)"
      },
      "body": {
       "es": "Saldos y resultados se anuncian con regiones en vivo.",
       "en": "Balances and results are announced through live regions."
      }
     },
     {
      "lead": {
       "es": "Contraste AA en los dos temas",
       "en": "AA contrast in both themes"
      },
      "body": {
       "es": "Cada combinación de tokens, en modo claro y oscuro, verificada por test.",
       "en": "Every token pair, in light and dark mode, checked by tests."
      }
     },
     {
      "lead": {
       "es": "Modo simple en el escape room",
       "en": "Simple mode in the escape room"
      },
      "body": {
       "es": "La misma práctica sin capa de juego, como alternativa accesible.",
       "en": "The same practice without the game layer, as an accessible alternative."
      }
     }
    ]
   },
   {
    "t": "roadmap",
    "h": {
     "es": "Seguridad en tres capas",
     "en": "Security in three layers"
    },
    "steps": [
     {
      "code": "01",
      "title": {
       "es": "Simulada en la interfaz",
       "en": "Simulated in the interface"
      },
      "body": {
       "es": "SSO y verificación en dos pasos simulados, permisos por rol y «Mi privacidad», con descarga de datos y pedidos según la Ley 25.326, sin frenar a quien visita la demo",
       "en": "Simulated SSO and two-step verification, role permissions and “My privacy”, with data download and requests under Argentina’s Law 25,326, without getting in the way of demo visitors"
      }
     },
     {
      "code": "02",
      "title": {
       "es": "Aplicada de verdad",
       "en": "Actually enforced"
      },
      "body": {
       "es": "Política de seguridad de contenido verificada sobre el build real, validación con esquemas, ningún HTML armado con datos y auditoría de dependencias en cada publicación",
       "en": "A content security policy checked against the real build, schema validation, no HTML ever built from data and an npm audit dependency check on every deploy"
      }
     },
     {
      "code": "03",
      "title": {
       "es": "Documentada para producción",
       "en": "Documented for production"
      },
      "body": {
       "es": "Los límites de GitHub Pages, por escrito, y el paso siguiente con dominio propio y encabezados HTTP reales, para un piloto con backend, SSO real y datos cifrados",
       "en": "GitHub Pages’ limits, in writing, and the next step with its own domain and real HTTP headers, for a pilot with a backend, real SSO and encrypted data"
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "construir",
    "n": "07",
    "lens": "it",
    "mode": {
     "es": "Lente UX/UI",
     "en": "UX/UI lens"
    },
    "name": {
     "es": "Construir y verificar",
     "en": "Build and verify"
    },
    "q": {
     "es": "¿Cómo llevé la especificación a un producto que funciona?",
     "en": "How did I turn the specification into a working product?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Desarrollo dirigido por especificación",
     "en": "Specification-driven development"
    },
    "p": [
     {
      "es": "Escribí una especificación de producto completa, con las decisiones numeradas, y dirigí a Claude Code como desarrollador. **Cada decisión que tomó el agente quedó registrada** con la duda, lo decidido y por qué, y las que tocaban el diseño las aprobé yo. El contenido de finanzas se escribió por tandas: cada tanda pasó por mi revisión antes de publicarse, con los números calculados a mano y las ampliaciones marcadas para el Lic. Kevin Giampieri.",
      "en": "I wrote a complete product specification, with numbered decisions, and directed Claude Code as the developer. **Every decision the agent made was logged** with the question, the decision and the reason, and I approved the ones that affected the design. The finance content was written in batches: each batch went through my review before publishing, with the numbers worked out by hand and any additions flagged for Kevin Giampieri (Lic.)."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Cómo trabajé",
     "en": "How I worked"
    },
    "steps": {
     "es": [
      "Especificación",
      "Documentación de diseño",
      "Piloto visual",
      "Fase A: billetera y aprendizaje",
      "Auditoría y ajuste",
      "Fase B: contextos y plataforma",
      "Informe final y release"
     ],
     "en": [
      "Specification",
      "Design documentation",
      "Visual pilot",
      "Phase A: wallet and learning",
      "Audit and adjustment",
      "Phase B: contexts and platform",
      "Final report and release"
     ]
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": "242",
      "label": {
       "es": "decisiones registradas, con la duda y el porqué",
       "en": "decisions logged, with the question and the reason"
      }
     },
     {
      "value": "780",
      "label": {
       "es": "tests unitarios y de componentes, en 58 archivos",
       "en": "unit and component tests, in 58 files"
      }
     },
     {
      "value": {
       "es": "1.181",
       "en": "1,181"
      },
      "label": {
       "es": "pruebas de punta a punta en desarrollo",
       "en": "end-to-end Playwright tests in development"
      }
     },
     {
      "value": "130",
      "label": {
       "es": "pruebas sobre el build publicado, con la CSP activa",
       "en": "tests against the published build, with the CSP on"
      }
     },
     {
      "value": "12",
      "label": {
       "es": "herramientas con fórmulas verificadas a mano",
       "en": "tools with formulas checked by hand"
      }
     },
     {
      "value": "54",
      "label": {
       "es": "guías escritas y revisadas por tandas",
       "en": "guides written and reviewed in batches"
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Valores reales, dinero ficticio",
     "en": "Real figures, fictitious money"
    },
    "note": {
     "es": "Fuentes oficiales, actualizadas en la integración continua una vez por día.",
     "en": "Official sources, refreshed by continuous integration once a day."
    },
    "items": [
     {
      "k": {
       "es": "Tasas, UVA y tipo de cambio",
       "en": "Rates, UVA and exchange rate"
      },
      "v": {
       "es": "API de estadísticas monetarias del BCRA, con fecha y fuente en pantalla.",
       "en": "The BCRA monetary statistics API, with date and source on screen."
      }
     },
     {
      "k": {
       "es": "Inflación",
       "en": "Inflation"
      },
      "v": {
       "es": "INDEC, con el valor del último mes y su fecha de publicación.",
       "en": "INDEC, with the latest month’s figure and its publication date."
      }
     },
     {
      "k": {
       "es": "Si una fuente falla",
       "en": "If a source fails"
      },
      "v": {
       "es": "Se conserva el último valor, con su fecha, y se avisa.",
       "en": "The last value is kept, with its date, and a notice is shown."
      }
     },
     {
      "k": {
       "es": "Acciones y CEDEARs",
       "en": "Shares and CEDEARs"
      },
      "v": {
       "es": "Precios de ejemplo, rotulados, con enlace a la fuente oficial.",
       "en": "Labelled sample prices, linked to the official source."
      }
     }
    ]
   },
   {
    "t": "phase",
    "id": "resultados",
    "n": "08",
    "lens": "both",
    "mode": {
     "es": "Las dos lentes",
     "en": "Both lenses"
    },
    "name": {
     "es": "Resultados, lo que falta y aprendizajes",
     "en": "Results, next steps and lessons"
    },
    "q": {
     "es": "¿Qué demuestra y qué haría después?",
     "en": "What does it show, and what would I do next?"
    }
   },
   {
    "t": "prose",
    "hl": true,
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "p": [
     {
      "es": "Alcancía es un producto B2B completo de punta a punta: una billetera de nueve niveles, 13 misiones, 18 módulos con tres guías cada uno, 12 herramientas, cinco roles, tres contextos de uso, español e inglés, modo claro y oscuro, y una documentación que se lee sin el código. **No tiene usuarios reales ni métricas de impacto, y no las inventa.** ==Lo que demuestra es un proceso==: cómo diseño un programa de aprendizaje que vive dentro de un producto, cómo lo traduzco a una herramienta para cinco roles y cómo lo audito contra su propia idea antes de seguir.",
      "en": "Alcancía is a complete, end-to-end B2B product: a nine-level wallet, 13 missions, 18 modules with three guides each, 12 tools, five roles, three contexts of use, Spanish and English, light and dark mode, and documentation you can read without the code. **It has no real users or impact metrics, and it doesn’t make them up.** ==What it shows is a process==: how I design a learning programme that lives inside a product, how I turn it into a tool for five roles and how I audit it against its own idea before moving on."
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Qué haría con un piloto real",
     "en": "What I would do in a real pilot"
    },
    "items": {
     "es": [
      "**Validar las proto-personas** con entrevistas a L&D, tutoría y participantes de oficina y operativos, con el plan que ya está escrito",
      "**Probar la idea central:** la misión 1 frente a la misma guía en formato lección, con 5 personas",
      "**Completar la prueba con lector de pantalla (NVDA y VoiceOver) y la auditoría con Lighthouse**, y recorrerla en celulares reales",
      "**Cerrar la revisión del contenido** con el Lic. Kevin Giampieri y la del inglés con una persona nativa",
      "**Medir en una cohorte:** avance por nivel, abandono, cambios de conducta a 30 días y confianza en el aviso de privacidad"
     ],
     "en": [
      "**Validate the proto-personas** with interviews with L&D, tutors and office and frontline participants, using the plan that is already written",
      "**Test the core idea:** mission 1 against the same guide as a lesson, with 5 people",
      "**Complete the screen reader test (NVDA and VoiceOver) and the Lighthouse audit**, and go through it on real phones",
      "**Finish the content review** with Kevin Giampieri (Lic.) and the English review with a native speaker",
      "**Measure in a cohort:** progress by level, drop-off, behaviour change after 30 days and trust in the privacy notice"
     ]
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Lo que me llevo",
     "en": "What I take away"
    },
    "items": [
     {
      "lead": {
       "es": "Tests en verde no prueban que algo enseña",
       "en": "Passing tests don’t prove something teaches"
      },
      "body": {
       "es": "La auditoría contra la idea central encontró lo que ningún test podía ver: tarjetas atadas a las misiones y errores sin huella.",
       "en": "Auditing against the core idea found what no test could see: cards tied to missions and mistakes that left no trace."
      }
     },
     {
      "lead": {
       "es": "La privacidad también se filtra por inferencia",
       "en": "Privacy also leaks through inference"
      },
      "body": {
       "es": "Un dato inofensivo, cruzado con una regla, revela lo que se quería proteger: el estado de bloqueo delataba deudas.",
       "en": "A harmless data point, combined with a rule, reveals what you meant to protect: lock status gave debts away."
      }
     },
     {
      "lead": {
       "es": "Con IA, el criterio es el trabajo",
       "en": "With AI, judgement is the job"
      },
      "body": {
       "es": "El agente escribe rápido; especificar, auditar y decidir sigue siendo diseño, y cada decisión quedó registrada.",
       "en": "The agent writes fast; specifying, auditing and deciding is still design, and every decision was logged."
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Gagné, R. M., Wager, W. W., Golas, K. C., & Keller, J. M. (2005).",
       "en": "Gagné, R. M., Wager, W. W., Golas, K. C., & Keller, J. M. (2005)."
      },
      "title": "Principles of instructional design",
      "post": {
       "es": " (5th ed.). Wadsworth.",
       "en": " (5th ed.). Wadsworth."
      }
     },
     {
      "pre": {
       "es": "Google. (s.f.).",
       "en": "Google. (n.d.)."
      },
      "title": "Material Design 3",
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://m3.material.io/"
     },
     {
      "pre": {
       "es": "Gothelf, J., & Seiden, J. (2021).",
       "en": "Gothelf, J., & Seiden, J. (2021)."
      },
      "title": "Lean UX: Designing great products with agile teams",
      "post": {
       "es": " (3rd ed.). O'Reilly Media.",
       "en": " (3rd ed.). O'Reilly Media."
      }
     },
     {
      "pre": {
       "es": "Gottfredson, C., & Mosher, B. (2011).",
       "en": "Gottfredson, C., & Mosher, B. (2011)."
      },
      "title": "Innovative performance support: Strategies and practices for learning in the workflow",
      "post": {
       "es": ". McGraw-Hill.",
       "en": ". McGraw-Hill."
      }
     },
     {
      "pre": {
       "es": "International Organization for Standardization & International Electrotechnical Commission. (2023).",
       "en": "International Organization for Standardization & International Electrotechnical Commission. (2023)."
      },
      "title": "Systems and software engineering: Systems and software Quality Requirements and Evaluation (SQuaRE): Product quality model",
      "post": {
       "es": " (ISO/IEC 25010:2023). ISO.",
       "en": " (ISO/IEC 25010:2023). ISO."
      }
     },
     {
      "pre": {
       "es": "Kirkpatrick, J. D., & Kirkpatrick, W. K. (2016).",
       "en": "Kirkpatrick, J. D., & Kirkpatrick, W. K. (2016)."
      },
      "title": "Kirkpatrick's four levels of training evaluation",
      "post": {
       "es": ". ATD Press.",
       "en": ". ATD Press."
      }
     },
     {
      "pre": {
       "es": "Knowles, M. S., Holton, E. F., III, & Swanson, R. A. (2015).",
       "en": "Knowles, M. S., Holton, E. F., III, & Swanson, R. A. (2015)."
      },
      "title": "The adult learner: The definitive classic in adult education and human resource development",
      "post": {
       "es": " (8th ed.). Routledge.",
       "en": " (8th ed.). Routledge."
      }
     },
     {
      "pre": {
       "es": "Kolb, D. A. (1984).",
       "en": "Kolb, D. A. (1984)."
      },
      "title": "Experiential learning: Experience as the source of learning and development",
      "post": {
       "es": ". Prentice Hall.",
       "en": ". Prentice Hall."
      }
     },
     {
      "pre": {
       "es": "Rosenfeld, L., Morville, P., & Arango, J. (2015).",
       "en": "Rosenfeld, L., Morville, P., & Arango, J. (2015)."
      },
      "title": "Information architecture: For the web and beyond",
      "post": {
       "es": " (4th ed.). O'Reilly Media.",
       "en": " (4th ed.). O'Reilly Media."
      }
     },
     {
      "pre": {
       "es": "Wiggins, G., & McTighe, J. (2005).",
       "en": "Wiggins, G., & McTighe, J. (2005)."
      },
      "title": "Understanding by design",
      "post": {
       "es": " (Expanded 2nd ed.). ASCD.",
       "en": " (Expanded 2nd ed.). ASCD."
      }
     },
     {
      "pre": {
       "es": "World Wide Web Consortium. (2023).",
       "en": "World Wide Web Consortium. (2023)."
      },
      "title": "Web Content Accessibility Guidelines (WCAG) 2.2",
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.w3.org/TR/WCAG22/"
     }
    ]
   }
  ],
  "credits": {
   "es": "Contenido de finanzas basado en el material del Lic. Kevin Giampieri; las ampliaciones están marcadas para su revisión. Fuerte: personaje propio, del escape room «Tu primer sueldo». Fotos de personas: Designed by Magnific, con licencia. Íconos de la app: Material Symbols (Google), Apache 2.0. Tipografía de la app: Inter, SIL Open Font License. Andina Servicios S.A., el Instituto Superior Ceibo, Hornero, sus personas y sus datos son ficticios. El dinero es ficticio y el contenido es educativo, no asesoramiento financiero.",
   "en": "Finance content based on material by Kevin Giampieri (Lic.); additions are flagged for his review. Fuerte: my own character, from the “Your first paycheck” escape room. People photos: Designed by Magnific, licensed. App icons: Material Symbols (Google), Apache 2.0. App typeface: Inter, SIL Open Font License. Andina Servicios S.A., Instituto Superior Ceibo, Hornero, their people and their data are fictional. The money is fictitious and the content is educational, not financial advice."
  },
  "creditsLinks": [
   {
    "text": "Designed by Magnific",
    "url": "https://www.magnific.com/"
   }
  ]
 },
 "el-aula-que-incluye": {
  "cat": "cap",
  "touch": "cont",
  "title": {
   "es": "El aula que incluye: IA generativa para la inclusión en el nivel inicial",
   "en": "The inclusive classroom: generative AI for inclusion in early childhood education"
  },
  "subtitle": {
   "es": "Un espacio digital que cuenta un mismo proyecto de plástica de sala de 5 años en cinco formatos hechos con IA generativa, con el Diseño Universal para el Aprendizaje como tema y como criterio de diseño.",
   "en": "A digital space that tells the same art project for a class of 5-year-olds in five formats made with generative AI, with Universal Design for Learning as both its subject and its design criterion."
  },
  "chips": {
   "es": [
    "LXD",
    "UX/UI",
    "Accesibilidad",
    "IA generativa"
   ],
   "en": [
    "LXD",
    "UX/UI",
    "Accessibility",
    "Generative AI"
   ]
  },
  "summary": {
   "problem": {
    "es": "Las docentes de nivel inicial tienen poco tiempo para adaptar materiales y una formación desigual en IA. En una sala de 5 años, lo que llega solo de forma oral se pierde, sobre todo para quien todavía no lee o se satura con el exceso de estímulos.",
    "en": "Early childhood teachers have little time to adapt materials and uneven training in AI. In a class of 5-year-olds, whatever arrives only orally gets lost, above all for children who cannot read yet or who are overwhelmed by too much stimulation."
   },
   "solution": {
    "es": "Un sitio de 13 páginas con un mismo contenido en cinco formatos, pensado para la docente que planifica sola y para la sala que mira con una persona adulta al lado. **Audité el contenido que investigaron mis compañeras y diseñé, produje y programé el sitio y los cinco recursos.**",
    "en": "A 13-page site with the same content in five formats, designed for the teacher planning on her own and for the class watching with an adult beside them. **I audited the content my teammates researched, and I designed, produced and coded the site and all five resources.**"
   },
   "results": [
    {
     "v": "5",
     "l": {
      "es": "recursos en 5 formatos: pictogramas, animación, podcast, documental y asistente",
      "en": "resources in 5 formats: pictograms, animation, podcast, documentary and assistant"
     }
    },
    {
     "v": "100",
     "l": {
      "es": "en accesibilidad de Lighthouse en las 13 páginas y la 404",
      "en": "Lighthouse accessibility score on all 13 pages and the 404"
     }
    },
    {
     "v": "0",
     "l": {
      "es": "violaciones de axe-core en 112 corridas (WCAG 2.1 A y AA)",
      "en": "axe-core violations across 112 runs (WCAG 2.1 A and AA)"
     }
    },
    {
     "t": {
      "es": "En la prueba con docentes, elegir opciones les resultó más fácil que escribir, pero no sabían cómo buscar lo que no estaba entre ellas. Sumé al asistente «No encuentro lo que busco», que lleva al mapa del sitio y a los recorridos por perfil.",
      "en": "In the test with teachers, picking options felt easier than writing, but they did not know how to look for something that was not among them. I added “I can’t find what I’m looking for” to the assistant, which leads to the site map and the routes by profile."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Learning Experience Designer: auditoría del contenido, diseño UX/UI, producción de los cinco recursos y desarrollo del sitio",
    "en": "Learning Experience Designer: content audit, UX/UI design, production of the five resources and site development"
   },
   "timeline": {
    "es": "Agosto a noviembre 2026: TIF I entregado el 1/11 y TIF II el 7/11",
    "en": "August to November 2026: Part I submitted on 1 November and Part II on 7 November"
   },
   "context": {
    "es": "Trabajo Integrador Final de la electiva Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa, UTN FRBA. Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci",
    "en": "Final integrative project for the elective Managing Digital Resources with Generative AI, Bachelor’s in Educational Technology, UTN FRBA. Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci"
   },
   "stack": [
    "HTML/CSS/JS",
    "JSON",
    "GitHub Pages",
    "Gemini",
    "ChatGPT",
    "Canva",
    "Veo 3.1",
    "Flow",
    "ElevenLabs",
    "Suno",
    "Claude",
    "Claude Code",
    "Camtasia",
    "Lighthouse",
    "axe-core"
   ],
   "methods": {
    "es": [
     "DUA",
     "TPACK",
     "ADKAR",
     "WCAG 2.1 AA",
     "Historias sociales",
     "APA 7"
    ],
    "en": [
     "UDL",
     "TPACK",
     "ADKAR",
     "WCAG 2.1 AA",
     "Social stories",
     "APA 7"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Sitio publicado (en vivo)",
     "en": "Published site (live)"
    },
    "url": "https://lpedaci.github.io/iag-tif/"
   },
   {
    "label": {
     "es": "Repositorio en GitHub",
     "en": "GitHub repository"
    },
    "url": "https://github.com/lpedaci/iag-tif"
   }
  ],
  "blocks": [
   {
    "t": "list",
    "h": {
     "es": "Mi rol, de punta a punta",
     "en": "My role, end to end"
    },
    "note": {
     "es": "Fue un trabajo en equipo con una autoría académica compartida. Esto es lo que hizo cada una.",
     "en": "It was a team project with shared academic authorship. This is what each of us did."
    },
    "items": [
     {
      "lead": {
       "es": "Investigación del contenido: Clara Argüello y Silvia Costas",
       "en": "Content research: Clara Argüello and Silvia Costas"
      },
      "body": {
       "es": "Relevaron el marco teórico, el caso y las fuentes del proyecto de plástica.",
       "en": "They gathered the theoretical framework, the case and the sources for the art project."
      }
     },
     {
      "lead": {
       "es": "Auditoría del contenido: yo",
       "en": "Content audit: me"
      },
      "body": {
       "es": "Tomé lo investigado, lo ordené, verifiqué datos, fechas y citas, y lo llevé a un guion por recurso y por página.",
       "en": "I took the research, organised it, checked facts, dates and citations, and turned it into a script per resource and per page."
      }
     },
     {
      "lead": {
       "es": "Diseño UX/UI, arquitectura de información y sistema de diseño: yo",
       "en": "UX/UI design, information architecture and design system: me"
      },
      "body": {
       "es": "Públicos y tareas, mapa del sitio, recorridos por perfil, plantilla única de recurso, paleta, tipografía, componentes y Modo calma.",
       "en": "Audiences and tasks, site map, routes by profile, a single resource template, palette, typography, components and Calm mode."
      }
     },
     {
      "lead": {
       "es": "Producción de los cinco recursos: yo",
       "en": "Production of the five resources: me"
      },
      "body": {
       "es": "Historia social con pictogramas, animación, podcast, video documental y asistente: prompts, generación, voces, música, montaje y alternativas accesibles.",
       "en": "Social story with pictograms, animation, podcast, documentary and assistant: prompts, generation, voices, music, editing and accessible alternatives."
      }
     },
     {
      "lead": {
       "es": "Programación del sitio y del asistente: yo",
       "en": "Coding the site and the assistant: me"
      },
      "body": {
       "es": "HTML, CSS y JavaScript sin frameworks, el árbol del asistente en JSON y su prueba automática, con apoyo de Claude Code.",
       "en": "HTML, CSS and JavaScript with no frameworks, the assistant tree in JSON and its automated test, with help from Claude Code."
      }
     },
     {
      "lead": {
       "es": "Validación de accesibilidad: con Silvia Costas",
       "en": "Accessibility validation: with Silvia Costas"
      },
      "body": {
       "es": "Lighthouse, axe-core, teclado, zoom, espaciado del texto y dispositivos reales.",
       "en": "Lighthouse, axe-core, keyboard, zoom, text spacing and real devices."
      }
     },
     {
      "lead": {
       "es": "Prueba con docentes: Clara y Silvia. Ajustes finales: yo",
       "en": "Testing with teachers: Clara and Silvia. Final adjustments: me"
      },
      "body": {
       "es": "Ellas llevaron el sitio a docentes de nivel inicial; yo hice los cambios que salieron de esa prueba.",
       "en": "They took the site to early childhood teachers; I made the changes that came out of that test."
      }
     }
    ]
   },
   {
    "t": "cards",
    "cols": 3,
    "h": {
     "es": "Los cinco recursos",
     "en": "The five resources"
    },
    "note": {
     "es": "Cada recurso corresponde a una unidad de la materia. Los videos, el podcast y el asistente tienen su caso propio con el proceso de producción completo.",
     "en": "Each resource belongs to a unit of the course. The videos, the podcast and the assistant each have their own case with the full production process."
    },
    "caseCta": {
     "es": "Ver el caso",
     "en": "See the case"
    },
    "cta": {
     "es": "Ver en el sitio",
     "en": "See it on the site"
    },
    "items": [
     {
      "title": {
       "es": "Historia social con pictogramas",
       "en": "Social story with pictograms"
      },
      "tag": {
       "es": "Texto e imagen · Unidad 2 · Gemini",
       "en": "Text and image · Unit 2 · Gemini"
      },
      "body": {
       "es": "«Hoy creamos nuestro monstruo»: nueve viñetas en primera persona que anticipan la transición del juego a la actividad, para proyectar o imprimir.",
       "en": "“Today we make our monster”: nine first-person panels that anticipate the move from play to the activity, to project or print."
      },
      "url": "https://lpedaci.github.io/iag-tif/recursos/historia-social.html"
     },
     {
      "title": {
       "es": "Animación «Los monstruos de Berni»",
       "en": "Animation “Berni’s monsters”"
      },
      "tag": {
       "es": "Video, 1:18 · Unidad 3 · ChatGPT, Canva, Veo 3.1 Fast, Suno",
       "en": "Video, 1:18 · Unit 3 · ChatGPT, Canva, Veo 3.1 Fast, Suno"
      },
      "body": {
       "es": "Un corto sin diálogos que modela cómo acompañar a un compañero que necesita calma, con audiodescripción en texto.",
       "en": "A dialogue-free short that models how to support a classmate who needs calm, with a text audio description."
      },
      "case": "animacion-los-monstruos-de-berni"
     },
     {
      "title": {
       "es": "Podcast «El aula que incluye»",
       "en": "Podcast “El aula que incluye”"
      },
      "tag": {
       "es": "Audio, 2:58 · Unidad 4 · Claude, ElevenLabs, Suno",
       "en": "Audio, 2:58 · Unit 4 · Claude, ElevenLabs, Suno"
      },
      "body": {
       "es": "Dos voces sintéticas explican cómo un mismo cuento llega como texto, pictogramas y audio, con transcripción completa.",
       "en": "Two synthetic voices explain how one story can arrive as text, pictograms and audio, with a full transcript."
      },
      "case": "podcast-el-aula-que-incluye"
     },
     {
      "title": {
       "es": "Documental «Adaptar para incluir»",
       "en": "Documentary “Adapt to include”"
      },
      "tag": {
       "es": "Video, 2:04 · Unidad 5 · Flow, ElevenLabs, Claude",
       "en": "Video, 2:04 · Unit 5 · Flow, ElevenLabs, Claude"
      },
      "body": {
       "es": "Para docentes y familias: adaptaciones curriculares accesibles con IA y el lugar de la docente que decide. Con subtítulos.",
       "en": "For teachers and families: accessible curriculum adaptations with AI and the role of the teacher who decides. With captions."
      },
      "case": "documental-adaptar-para-incluir"
     },
     {
      "title": {
       "es": "Asistente «Preguntale a Berni»",
       "en": "Assistant “Ask Berni”"
      },
      "tag": {
       "es": "Interactivo · Unidad 6 · Claude, Claude Code",
       "en": "Interactive · Unit 6 · Claude, Claude Code"
      },
      "body": {
       "es": "Un chatbot guiado por opciones, sin campo de texto, que orienta por el sitio desde cualquier página.",
       "en": "An option-guided chatbot with no text box that guides people through the site from any page."
      },
      "case": "preguntale-a-berni"
     }
    ]
   },
   {
    "t": "media",
    "join": true,
    "h": {
     "es": "Los dos videos",
     "en": "The two videos"
    },
    "items": [
     {
      "kind": "video",
      "title": {
       "es": "Los monstruos de Berni (1:18)",
       "en": "Berni’s monsters (1:18)"
      },
      "src": "https://www.youtube.com/embed/EffCv8EIAwI",
      "open": "https://youtu.be/EffCv8EIAwI"
     },
     {
      "kind": "video",
      "title": {
       "es": "Adaptar para incluir (2:04)",
       "en": "Adapt to include (2:04)"
      },
      "src": "https://www.youtube.com/embed/qJ5nEvhGr4I",
      "open": "https://youtu.be/qJ5nEvhGr4I"
     }
    ]
   },
   {
    "t": "audio",
    "join": true,
    "h": {
     "es": "El podcast",
     "en": "The podcast"
    },
    "src": "podcast-el-aula-que-incluye.mp3",
    "dur": "2:58",
    "label": {
     "es": "El aula que incluye: crear contenido educativo con IA generativa (en español)",
     "en": "El aula que incluye: creating educational content with generative AI (in Spanish)"
    },
    "notice": {
     "es": "Andrea y Billy son voces sintéticas generadas con ElevenLabs. La transcripción está en el caso del podcast.",
     "en": "Andrea and Billy are synthetic voices generated with ElevenLabs. The transcript is in the podcast case."
    },
    "download": {
     "es": "Descargar el MP3",
     "en": "Download the MP3"
    }
   },
   {
    "t": "phase",
    "n": "01",
    "id": "plan",
    "mode": {
     "es": "plan · TIF I",
     "en": "plan · Part I"
    },
    "name": {
     "es": "Un contenido, muchas puertas",
     "en": "One content, many doors"
    },
    "q": {
     "es": "¿Cómo llega el mismo proyecto de sala a una docente sin tiempo, a una niña que todavía no lee y a una familia que entra desde el celular?",
     "en": "How does the same class project reach a teacher with no time, a girl who cannot read yet and a family browsing on a phone?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "El plan de implementación",
     "en": "The implementation plan"
    },
    "p": [
     {
      "es": "La primera parte del TIF fue el plan: área de aplicación, justificación con **DUA, TPACK y ADKAR**, público, mapa del sitio, cuatro flujos de navegación, ubicación de cada recurso y cinco dimensiones éticas (transparencia, responsabilidad, sesgos, equidad y privacidad). El hilo conductor es el proyecto de plástica de sala de 5 años «Los monstruos de Berni y Bortusk Leer».",
      "en": "The first part of the project was the plan: field of application, rationale with **UDL, TPACK and ADKAR**, audience, site map, four navigation flows, where each resource lives and five ethical dimensions (transparency, accountability, bias, equity and privacy). The common thread is an art project for 5-year-olds, “The monsters of Berni and Bortusk Leer”."
     },
     {
      "es": "La devolución del TIF I recomendó comprobar tres cosas: las alternativas de accesibilidad, la navegación en celulares y la pertinencia de las respuestas del asistente. ==Esas tres recomendaciones ordenaron las pruebas del TIF II==.",
      "en": "Feedback on Part I recommended checking three things: the accessibility alternatives, navigation on phones and how relevant the assistant’s answers were. ==Those three recommendations shaped the testing in Part II==."
     }
    ]
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "Tres destinatarios, tres situaciones de uso",
     "en": "Three audiences, three situations of use"
    },
    "note": {
     "es": "Para cada grupo, qué necesita, qué le dificulta el acceso y qué le ofrece el sitio. El caso del Estudiante A es ficticio y anonimizado.",
     "en": "For each group, what they need, what gets in the way and what the site offers. Student A is a fictional, anonymised case."
    },
    "cols": {
     "dim": {
      "es": "Destinatario",
      "en": "Audience"
     },
     "before": {
      "es": "Necesidades y barreras",
      "en": "Needs and barriers"
     },
     "after": {
      "es": "Respuesta del sitio",
      "en": "How the site responds"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Docentes de nivel inicial (directo, como mediadoras)",
       "en": "Early childhood teachers (direct, as mediators)"
      },
      "before": {
       "es": "Materiales listos para adaptar y saber cómo se produjeron. **Barreras:** poco tiempo de planificación, formación desigual en IA, dudas éticas y de privacidad, conectividad desigual.",
       "en": "Ready-to-adapt materials and knowing how they were made. **Barriers:** little planning time, uneven AI training, ethical and privacy concerns, uneven connectivity."
      },
      "after": {
       "es": "Cada recurso documenta sus prompts en «Cómo se produjo». La guía En la sala ordena el antes, el durante y el después. El asistente orienta sin pedir que se escriba nada.",
       "en": "Each resource documents its prompts under “How it was made”. The In the classroom guide covers before, during and after. The assistant guides without asking anyone to type."
      }
     },
     {
      "dim": {
       "es": "Niñas y niños de 5 años (siempre con mediación adulta)",
       "en": "5-year-olds (always with an adult)"
      },
      "before": {
       "es": "Anticipar, apoyos visuales y lenguaje predecible. **Barreras:** todavía no leen, lo solo oral se pierde, las transiciones generan ansiedad y el exceso de estímulos satura.",
       "en": "Anticipation, visual supports and predictable language. **Barriers:** they cannot read yet, oral-only information gets lost, transitions cause anxiety and too much stimulation overwhelms."
      },
      "after": {
       "es": "Historia social con pictogramas, animación con audiodescripción, podcast con transcripción y video con subtítulos. Una zona «para mirar con los chicos» donde nada se reproduce solo, y el Modo calma.",
       "en": "A social story with pictograms, an animation with audio description, a podcast with a transcript and a video with captions. A “watch with the children” zone where nothing autoplays, and Calm mode."
      }
     },
     {
      "dim": {
       "es": "Familias (ampliado)",
       "en": "Families (extended)"
      },
      "before": {
       "es": "Entender qué se trabaja en la sala y cómo se cuidan los datos. **Barreras:** lenguaje técnico, acceso casi siempre desde el celular y con datos móviles, distintos niveles de alfabetización digital.",
       "en": "Understanding what happens in class and how data is protected. **Barriers:** technical language, access mostly from a phone on mobile data, different levels of digital literacy."
      },
      "after": {
       "es": "Diseño pensado primero para el celular y en lenguaje claro. La animación se mira en familia y la historia social se imprime. Ética explica la privacidad y el asistente funciona solo con opciones.",
       "en": "Mobile-first design in plain language. The animation can be watched as a family and the social story printed. The Ethics page explains privacy and the assistant works with options only."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "02",
    "id": "arquitectura",
    "mode": {
     "es": "auditoría y arquitectura",
     "en": "audit and architecture"
    },
    "name": {
     "es": "Del contenido investigado al mapa del sitio",
     "en": "From researched content to site map"
    },
    "q": {
     "es": "¿Cómo se ordena un contenido académico para que una docente encuentre en dos clics lo que necesita para mañana?",
     "en": "How do you organise academic content so a teacher finds what she needs for tomorrow in two clicks?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Auditoría del contenido",
     "en": "Content audit"
    },
    "p": [
     {
      "es": "Clara y Silvia investigaron el marco, el caso y las fuentes. **Audité ese material**: separé lo que era para docentes de lo que era para la sala, verifiqué fechas, duraciones y citas contra los trabajos prácticos de cada unidad y lo convertí en un guion por página. Donde un dato no coincidía, mandó la fuente original (por ejemplo, la fecha de publicación de la animación en YouTube).",
      "en": "Clara and Silvia researched the framework, the case and the sources. **I audited that material**: I separated what was for teachers from what was for the class, checked dates, durations and citations against each unit’s assignments and turned it into a script per page. Where a fact did not match, the original source won (for example, the animation’s publication date on YouTube)."
     }
    ]
   },
   {
    "t": "bento",
    "h": {
     "es": "Mapa del sitio: dos niveles de profundidad",
     "en": "Site map: two levels deep"
    },
    "note": {
     "es": "13 páginas en dos niveles, más la 404. Toda página está a dos clics de Inicio. Mismo menú y pie en todas, migas de pan y menú hamburguesa por debajo de 768 px.",
     "en": "13 pages on two levels, plus the 404. Every page is two clicks from Home. The same menu and footer everywhere, breadcrumbs and a hamburger menu below 768 px."
    },
    "items": [
     {
      "size": "l",
      "lead": true,
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "Inicio",
       "en": "Home"
      },
      "body": {
       "es": "Un mismo contenido, cinco puertas de entrada: una tarjeta por recurso, para quién es y cómo se usó la IA.",
       "en": "One content, five ways in: a card per resource, who it is for and how AI was used."
      }
     },
     {
      "size": "m",
      "tone": true,
      "k": {
       "es": "Nivel 1 › Nivel 2",
       "en": "Level 1 › Level 2"
      },
      "title": {
       "es": "Recursos",
       "en": "Resources"
      },
      "body": {
       "es": "Hub con filtro por formato y cuatro páginas con la misma plantilla: historia social, animación, podcast y video.",
       "en": "A hub with a format filter and four pages on the same template: social story, animation, podcast and video."
      }
     },
     {
      "size": "s",
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "El proyecto",
       "en": "The project"
      },
      "body": {
       "es": "Área, justificación, público, el caso y los marcos DUA, TPACK y ADKAR.",
       "en": "Field, rationale, audience, the case and the UDL, TPACK and ADKAR frameworks."
      }
     },
     {
      "size": "m",
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "Preguntale a Berni",
       "en": "Ask Berni"
      },
      "body": {
       "es": "El asistente a ancho completo, y desde cualquier página con un botón flotante.",
       "en": "The assistant full width, and from any page through a floating button."
      }
     },
     {
      "size": "s",
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "En la sala",
       "en": "In the classroom"
      },
      "body": {
       "es": "Antes, durante y después, con una tabla recurso por principio DUA.",
       "en": "Before, during and after, with a resource by UDL principle table."
      }
     },
     {
      "size": "s",
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "Ética, créditos y mapa",
       "en": "Ethics, credits and map"
      },
      "body": {
       "es": "Uso responsable, créditos con prompts y APA 7, y el mapa con los recorridos.",
       "en": "Responsible use, credits with prompts and APA 7, and the map with the routes."
      }
     },
     {
      "size": "s",
      "k": {
       "es": "Nivel 1",
       "en": "Level 1"
      },
      "title": {
       "es": "Sistema de diseño",
       "en": "Design system"
      },
      "body": {
       "es": "Tokens, componentes y Modo calma, documentados con el código real.",
       "en": "Tokens, components and Calm mode, documented with the real code."
      }
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Recorrido de una docente que llega por primera vez",
     "en": "Route for a teacher visiting for the first time"
    },
    "note": {
     "es": "Uno de los cuatro recorridos por perfil. Los otros: docente que busca un recurso puntual, familia y evaluación.",
     "en": "One of the four routes by profile. The others: a teacher looking for a specific resource, a family and assessment."
    },
    "steps": {
     "es": [
      "Inicio",
      "El proyecto",
      "Recursos",
      "Historia social",
      "En la sala",
      "Preguntale a Berni"
     ],
     "en": [
      "Home",
      "The project",
      "Resources",
      "Social story",
      "In the classroom",
      "Ask Berni"
     ]
    }
   },
   {
    "t": "cards",
    "cols": 3,
    "join": true,
    "h": {
     "es": "Los otros tres recorridos",
     "en": "The other three routes"
    },
    "items": [
     {
      "title": {
       "es": "Docente que busca un recurso",
       "en": "Teacher looking for a resource"
      },
      "body": {
       "es": "Inicio › Recursos › el recurso › «Cómo usarlo en la sala» › Siguiente recurso.",
       "en": "Home › Resources › the resource › “How to use it in class” › Next resource."
      }
     },
     {
      "title": {
       "es": "Familia",
       "en": "Family"
      },
      "body": {
       "es": "Inicio › Animación (para mirar juntos) › Historia social › Asistente («¿qué es una historia social?»).",
       "en": "Home › Animation (to watch together) › Social story › Assistant (“what is a social story?”)."
      }
     },
     {
      "title": {
       "es": "Evaluación",
       "en": "Assessment"
      },
      "body": {
       "es": "Inicio › Recursos (los cinco, con créditos) › Créditos y referencias › Uso responsable › Mapa del sitio.",
       "en": "Home › Resources (all five, with credits) › Credits and references › Responsible use › Site map."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "03",
    "id": "construccion",
    "mode": {
     "es": "diseño y construcción",
     "en": "design and build"
    },
    "name": {
     "es": "Un sistema para dos situaciones de uso",
     "en": "One system for two situations of use"
    },
    "q": {
     "es": "¿Qué decisiones sirven a la vez a una docente que explora sola y a una sala que mira proyectado?",
     "en": "Which decisions serve both a teacher exploring alone and a class watching on a projector?"
    }
   },
   {
    "t": "bento",
    "h": {
     "es": "Decisiones de diseño",
     "en": "Design decisions"
    },
    "items": [
     {
      "size": "m",
      "lead": true,
      "title": {
       "es": "Un recurso, muchas puertas",
       "en": "One resource, many doors"
      },
      "body": {
       "es": "Cada formato tiene su color y su ícono, pero **la estructura no cambia**: para qué, el recurso, alternativa accesible, cómo se produjo, cómo usarlo en la sala y créditos. El DUA es el tema del sitio y su criterio de diseño.",
       "en": "Each format has its own colour and icon, but **the structure never changes**: what for, the resource, accessible alternative, how it was made, how to use it in class and credits. UDL is both the site’s subject and its design criterion."
      }
     },
     {
      "size": "m",
      "tone": true,
      "title": {
       "es": "Modo calma",
       "en": "Calm mode"
      },
      "body": {
       "es": "Un botón en el encabezado desatura la paleta, apaga el movimiento y la decoración y aumenta el interlineado. Se aplica antes del primer pintado y se recuerda entre páginas.",
       "en": "A header button desaturates the palette, turns off motion and decoration and increases line height. It applies before first paint and persists across pages."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Zona «para mirar con los chicos»",
       "en": "“Watch with the children” zone"
      },
      "body": {
       "es": "Cada recurso vive en un área neutra y de baja estimulación, donde nada se reproduce solo.",
       "en": "Each resource sits in a neutral, low-stimulation area where nothing autoplays."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Asistente sin campo de texto",
       "en": "An assistant with no text box"
      },
      "body": {
       "es": "Privacidad por diseño: si no se puede escribir, nadie puede cargar datos de chicos.",
       "en": "Privacy by design: if you cannot type, nobody can enter children’s data."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Funciona sin JavaScript",
       "en": "Works without JavaScript"
      },
      "body": {
       "es": "Menú y pie escritos en cada página, y el asistente con una versión en texto en <noscript>.",
       "en": "Menu and footer written into every page, and the assistant with a text version in <noscript>."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "wide": true,
    "h": {
     "es": "El sitio en escritorio y en celular",
     "en": "The site on desktop and on a phone"
    },
    "images": [
     {
      "src": "aula-01-inicio-1366.webp",
      "w": 1366,
      "h": 854,
      "alt": {
       "es": "Inicio de El aula que incluye a 1366 px: el título con dos palabras resaltadas en amarillo y lavanda, la bajada, los botones Ver los recursos y Conocer el proyecto, y Berni, el monstruo azul, sobre una forma orgánica.",
       "en": "El aula que incluye home page at 1366 px: the title with two words highlighted in yellow and lavender, the subtitle, the See the resources and About the project buttons, and Berni, the blue monster, on an organic shape."
      },
      "caption": {
       "es": "Inicio a 1366 px.",
       "en": "Home at 1366 px."
      }
     },
     {
      "src": "aula-02-inicio-390.webp",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "El mismo inicio a 390 px: el interruptor Calma y el menú hamburguesa, el título en una línea, la bajada con el resaltado, los dos botones apilados, Berni debajo y el botón flotante del asistente con su avatar.",
       "en": "The same home page at 390 px: the Calm toggle and the hamburger menu, the title on one line, the subtitle with its highlight, the two buttons stacked, Berni below and the floating assistant button with its avatar."
      },
      "caption": {
       "es": "Inicio a 390 px.",
       "en": "Home at 390 px."
      }
     }
    ]
   },
   {
    "t": "swatches",
    "h": {
     "es": "Paleta",
     "en": "Palette"
    },
    "note": {
     "es": "Neutros crema cálidos, un único acento de acción coral terracota y un tinte pastel por recurso. Con texto --c-ink encima, los tintes superan 12:1.",
     "en": "Warm cream neutrals, a single terracotta coral action accent and a pastel tint per resource. With --c-ink text on top, the tints exceed 12:1."
    },
    "dense": true,
    "groups": [
     {
      "name": {
       "es": "Neutros y texto",
       "en": "Neutrals and text"
      },
      "items": [
       {
        "token": "--c-bg",
        "hex": "#FBF7F1",
        "use": {
         "es": "Fondo de página",
         "en": "Page background"
        }
       },
       {
        "token": "--c-ink",
        "hex": "#1C2033",
        "ratio": {
         "es": "15,09:1",
         "en": "15.09:1"
        },
        "use": {
         "es": "Texto principal",
         "en": "Main text"
        }
       },
       {
        "token": "--c-ink-soft",
        "hex": "#454A5E",
        "ratio": {
         "es": "8,22:1",
         "en": "8.22:1"
        },
        "use": {
         "es": "Texto secundario",
         "en": "Secondary text"
        }
       },
       {
        "token": "--c-muted",
        "hex": "#5F6478",
        "ratio": {
         "es": "5,50:1",
         "en": "5.50:1"
        },
        "use": {
         "es": "Texto atenuado",
         "en": "Muted text"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Acción e identidad",
       "en": "Action and identity"
      },
      "items": [
       {
        "token": "--c-accent",
        "hex": "#B4471F",
        "ratio": {
         "es": "5,10:1",
         "en": "5.10:1"
        },
        "use": {
         "es": "Enlaces y botón principal",
         "en": "Links and main button"
        }
       },
       {
        "token": "--c-berni",
        "hex": "#2F5FC4",
        "ratio": {
         "es": "5,54:1",
         "en": "5.54:1"
        },
        "use": {
         "es": "Azul de Berni y enlaces del asistente",
         "en": "Berni blue and assistant links"
        }
       }
      ]
     },
     {
      "name": {
       "es": "Un tinte por recurso",
       "en": "One tint per resource"
      },
      "items": [
       {
        "token": "--t-butter",
        "hex": "#FBEFC4",
        "use": {
         "es": "Historia social",
         "en": "Social story"
        }
       },
       {
        "token": "--t-sky",
        "hex": "#DAE6FA",
        "use": {
         "es": "Animación",
         "en": "Animation"
        }
       },
       {
        "token": "--t-lav",
        "hex": "#E8E0FA",
        "use": {
         "es": "Podcast",
         "en": "Podcast"
        }
       },
       {
        "token": "--t-peach",
        "hex": "#FCDFCF",
        "use": {
         "es": "Video",
         "en": "Video"
        }
       },
       {
        "token": "--t-mint",
        "hex": "#D7EFE4",
        "use": {
         "es": "Asistente",
         "en": "Assistant"
        }
       }
      ]
     }
    ]
   },
   {
    "t": "audit",
    "h": {
     "es": "Auditoría de contraste",
     "en": "Contrast audit"
    },
    "note": {
     "es": "Los 12 pares verificados, en el modo normal y en el Modo calma, contra WCAG 2.1 AA (4,5:1 para texto).",
     "en": "The 12 verified pairs, in normal mode and Calm mode, against WCAG 2.1 AA (4.5:1 for text)."
    },
    "cols": {
     "pair": {
      "es": "Combinación",
      "en": "Combination"
     },
     "ratio": {
      "es": "Contraste",
      "en": "Contrast"
     },
     "result": {
      "es": "Resultado",
      "en": "Result"
     },
     "fix": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "pass": {
     "es": "Cumple",
     "en": "Passes"
    },
    "fail": {
     "es": "No cumple",
     "en": "Fails"
    },
    "nofix": {
     "es": "No requiere cambios",
     "en": "No change needed"
    },
    "rows": [
     {
      "fg": "#1C2033",
      "bg": "#FBF7F1",
      "pair": {
       "es": "Texto principal sobre fondo",
       "en": "Main text on background"
      },
      "ratio": {
       "es": "15,09:1",
       "en": "15.09:1"
      },
      "pass": true
     },
     {
      "fg": "#454A5E",
      "bg": "#FBF7F1",
      "pair": {
       "es": "Texto secundario sobre fondo",
       "en": "Secondary text on background"
      },
      "ratio": {
       "es": "8,22:1",
       "en": "8.22:1"
      },
      "pass": true
     },
     {
      "fg": "#5F6478",
      "bg": "#FBF7F1",
      "pair": {
       "es": "Texto atenuado sobre fondo",
       "en": "Muted text on background"
      },
      "ratio": {
       "es": "5,50:1",
       "en": "5.50:1"
      },
      "pass": true
     },
     {
      "fg": "#5F6478",
      "bg": "#E8E0FA",
      "pair": {
       "es": "Atenuado sobre tinte lavanda",
       "en": "Muted on lavender tint"
      },
      "ratio": {
       "es": "4,60:1",
       "en": "4.60:1"
      },
      "pass": true
     },
     {
      "fg": "#B4471F",
      "bg": "#FBF7F1",
      "pair": {
       "es": "Acento (enlaces y botón) sobre fondo",
       "en": "Accent (links and button) on background"
      },
      "ratio": {
       "es": "5,10:1",
       "en": "5.10:1"
      },
      "pass": true
     },
     {
      "fg": "#FFFFFF",
      "bg": "#B4471F",
      "pair": {
       "es": "Texto blanco sobre botón",
       "en": "White text on button"
      },
      "ratio": {
       "es": "5,44:1",
       "en": "5.44:1"
      },
      "pass": true
     },
     {
      "fg": "#F3EFE9",
      "bg": "#1C2033",
      "pair": {
       "es": "Texto sobre panel oscuro",
       "en": "Text on dark panel"
      },
      "ratio": {
       "es": "14,06:1",
       "en": "14.06:1"
      },
      "pass": true
     },
     {
      "fg": "#2F5FC4",
      "bg": "#FBF7F1",
      "pair": {
       "es": "Enlace del asistente sobre fondo",
       "en": "Assistant link on background"
      },
      "ratio": {
       "es": "5,54:1",
       "en": "5.54:1"
      },
      "pass": true
     },
     {
      "fg": "#23252E",
      "bg": "#F4F2EE",
      "pair": {
       "es": "Modo calma: texto principal",
       "en": "Calm mode: main text"
      },
      "ratio": {
       "es": "13,65:1",
       "en": "13.65:1"
      },
      "pass": true
     },
     {
      "fg": "#565A66",
      "bg": "#F4F2EE",
      "pair": {
       "es": "Modo calma: texto atenuado",
       "en": "Calm mode: muted text"
      },
      "ratio": {
       "es": "6,16:1",
       "en": "6.16:1"
      },
      "pass": true
     },
     {
      "fg": "#7E4E3E",
      "bg": "#F4F2EE",
      "pair": {
       "es": "Modo calma: acento",
       "en": "Calm mode: accent"
      },
      "ratio": {
       "es": "6,17:1",
       "en": "6.17:1"
      },
      "pass": true
     },
     {
      "fg": "#FFFFFF",
      "bg": "#7E4E3E",
      "pair": {
       "es": "Modo calma: texto blanco sobre botón",
       "en": "Calm mode: white text on button"
      },
      "ratio": {
       "es": "6,89:1",
       "en": "6.89:1"
      },
      "pass": true
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Tipografía",
     "en": "Typography"
    },
    "items": [
     {
      "lead": {
       "es": "Fraunces, solo para títulos grandes",
       "en": "Fraunces, for large headings only"
      },
      "body": {
       "es": "Una serif cálida y editorial que le da al sitio un tono cercano, sin infantilizarlo: el sitio le habla a personas adultas.",
       "en": "A warm, editorial serif that gives the site a friendly tone without making it childish: the site speaks to adults."
      }
     },
     {
      "lead": {
       "es": "Lexend, para el texto, la navegación y los botones",
       "en": "Lexend, for body text, navigation and buttons"
      },
      "body": {
       "es": "Letras amplias, aberturas abiertas y espaciado generoso, pensados para mejorar la fluidez de lectura. Es más cómoda que una sans condensada en tamaños chicos, también para personas con miopía o astigmatismo.",
       "en": "Wide letters, open apertures and generous spacing designed to improve reading fluency. It is more comfortable than a condensed sans at small sizes, including for people with myopia or astigmatism."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Programación",
     "en": "Coding"
    },
    "p": [
     {
      "es": "Programé el sitio en **HTML, CSS y JavaScript sin frameworks ni paso de compilación**, publicado en GitHub Pages. Los metadatos y créditos de cada recurso viven en recursos.json y el asistente en chatbot-kb.json. Los videos de YouTube cargan con un patrón de fachada desde el dominio sin cookies: la miniatura y el botón primero, el reproductor recién al hacer clic. Trabajé con Claude Code como apoyo en la programación y lo declaré en los créditos.",
      "en": "I coded the site in **HTML, CSS and JavaScript with no frameworks and no build step**, published on GitHub Pages. Each resource’s metadata and credits live in recursos.json and the assistant in chatbot-kb.json. YouTube videos load through a facade from the cookie-free domain: thumbnail and button first, the player only on click. I worked with Claude Code as coding support and declared it in the credits."
     }
    ]
   },
   {
    "t": "phase",
    "n": "04",
    "id": "validacion",
    "mode": {
     "es": "validación con docentes",
     "en": "validation with teachers"
    },
    "name": {
     "es": "Prueba piloto del asistente",
     "en": "Assistant pilot test"
    },
    "q": {
     "es": "¿Le sirve a una docente real lo que diseñamos para ella?",
     "en": "Does what we designed for teachers actually work for a real one?"
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Del hallazgo al cambio",
     "en": "From finding to change"
    },
    "note": {
     "es": "Clara y Silvia probaron el asistente con docentes de la Escuela Infantil N.º 6 (Balvanera, CABA), institución donde trabaja Silvia Costas.",
     "en": "Clara and Silvia tested the assistant with teachers at Escuela Infantil N.º 6 (Balvanera, Buenos Aires), where Silvia Costas works."
    },
    "items": [
     {
      "lead": {
       "es": "Lo que valoraron",
       "en": "What they valued"
      },
      "body": {
       "es": "Interactuar con opciones les resultó **más fácil que tener que armar una conversación**. Destacaron los colores, que el asistente tenga nombre propio, la navegación y la facilidad de comprensión.",
       "en": "Interacting through options felt **easier than having to build a conversation**. They highlighted the colours, the assistant having its own name, the navigation and how easy it was to understand."
      }
     },
     {
      "lead": {
       "es": "Lo que había que mejorar",
       "en": "What needed improving"
      },
      "body": {
       "es": "No sabían cómo buscar algo que no estuviera entre las opciones.",
       "en": "They did not know how to look for something that was not among the options."
      }
     },
     {
      "lead": {
       "es": "El ajuste que hice",
       "en": "The adjustment I made"
      },
      "body": {
       "es": "Sumé al inicio la opción ==«No encuentro lo que busco»==, que deriva al mapa del sitio y a los recorridos sugeridos para docentes, familias y evaluación.",
       "en": "I added the option ==“I can’t find what I’m looking for”== at the start, which leads to the site map and the suggested routes for teachers, families and assessment."
      }
     },
     {
      "lead": {
       "es": "Por qué así",
       "en": "Why this way"
      },
      "body": {
       "es": "Mantiene la decisión de no tener campo de texto (privacidad y confiabilidad) y le da una salida a quien no se reconoce en las opciones, sin sumar profundidad al árbol.",
       "en": "It keeps the decision not to have a text box (privacy and reliability) and gives a way out to anyone who does not see themselves in the options, without making the tree deeper."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "05",
    "id": "qa",
    "mode": {
     "es": "QA",
     "en": "QA"
    },
    "name": {
     "es": "Accesibilidad y calidad, medidas",
     "en": "Accessibility and quality, measured"
    },
    "q": {
     "es": "¿El sitio cumple WCAG 2.1 AA en las condiciones en que lo van a usar: en el celular, con datos móviles y con el Modo calma?",
     "en": "Does the site meet WCAG 2.1 AA in the conditions it will be used in: on a phone, on mobile data and with Calm mode?"
    }
   },
   {
    "t": "compare",
    "accent": true,
    "arrow": false,
    "h": {
     "es": "Pruebas y resultados",
     "en": "Tests and results"
    },
    "note": {
     "es": "Validación de accesibilidad hecha junto con Silvia Costas, el 7/11/2026.",
     "en": "Accessibility validation done together with Silvia Costas on 7 November 2026."
    },
    "cols": {
     "dim": {
      "es": "Prueba",
      "en": "Test"
     },
     "before": {
      "es": "Alcance",
      "en": "Scope"
     },
     "after": {
      "es": "Resultado",
      "en": "Result"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Lighthouse",
       "en": "Lighthouse"
      },
      "before": {
       "es": "13 páginas y la 404, en mobile (4G lento simulado) y desktop",
       "en": "13 pages and the 404, mobile (simulated slow 4G) and desktop"
      },
      "after": {
       "es": "**100** en Accesibilidad, Buenas prácticas y SEO en todas. Rendimiento mobile de 85 o más en 12 de 14; desktop de 94 o más en todas",
       "en": "**100** in Accessibility, Best practices and SEO on all of them. Mobile performance of 85 or more on 12 of 14; desktop 94 or more on all"
      }
     },
     {
      "dim": {
       "es": "axe-core (WCAG 2.0 y 2.1, A y AA)",
       "en": "axe-core (WCAG 2.0 and 2.1, A and AA)"
      },
      "before": {
       "es": "112 corridas: 14 páginas, 4 anchos (360, 390, 768 y 1366 px), Modo calma apagado y encendido",
       "en": "112 runs: 14 pages, 4 widths (360, 390, 768 and 1366 px), Calm mode off and on"
      },
      "after": {
       "es": "**0 violaciones**, sin desplazamiento horizontal",
       "en": "**0 violations**, no horizontal scrolling"
      }
     },
     {
      "dim": {
       "es": "Espaciado del texto (1.4.12)",
       "en": "Text spacing (1.4.12)"
      },
      "before": {
       "es": "56 casos",
       "en": "56 cases"
      },
      "after": {
       "es": "Tres recortes corregidos; **56 de 56** sin problemas en la corrida final",
       "en": "Three clipping issues fixed; **56 of 56** clean in the final run"
      }
     },
     {
      "dim": {
       "es": "Zoom al 200 % (1.4.4)",
       "en": "200% zoom (1.4.4)"
      },
      "before": {
       "es": "Todas las páginas",
       "en": "Every page"
      },
      "after": {
       "es": "Sin pérdida de contenido ni de funciones",
       "en": "No loss of content or functionality"
      }
     },
     {
      "dim": {
       "es": "Teclado",
       "en": "Keyboard"
      },
      "before": {
       "es": "56 recorridos, con y sin Modo calma",
       "en": "56 walkthroughs, with and without Calm mode"
      },
      "after": {
       "es": "Sin trampas de foco y con el foco siempre visible",
       "en": "No focus traps and focus always visible"
      }
     },
     {
      "dim": {
       "es": "Dispositivos reales",
       "en": "Real devices"
      },
      "before": {
       "es": "iPhone con Safari y Android con Chrome",
       "en": "iPhone with Safari and Android with Chrome"
      },
      "after": {
       "es": "Todo funciona",
       "en": "Everything works"
      }
     },
     {
      "dim": {
       "es": "Asistente",
       "en": "Assistant"
      },
      "before": {
       "es": "33 nodos y 34 enlaces, con tests/chatbot-arbol.js",
       "en": "33 nodes and 34 links, with tests/chatbot-arbol.js"
      },
      "after": {
       "es": "Sin destinos rotos ni nodos sin salida",
       "en": "No broken destinations and no dead-end nodes"
      }
     },
     {
      "dim": {
       "es": "Citas APA",
       "en": "APA citations"
      },
      "before": {
       "es": "Todo el sitio y el asistente",
       "en": "The whole site and the assistant"
      },
      "after": {
       "es": "30 referencias, todas citadas, y todas las citas con su referencia",
       "en": "30 references, all cited, and every citation with its reference"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Corregido durante la verificación",
     "en": "Fixed during verification"
    },
    "items": {
     "es": [
      "El asistente no tenía puntaje de rendimiento: un desplazamiento automático al cargar impedía medir el LCP. Ahora el historial no se mueve en el primer mensaje y la página llegó a 89 en mobile y 99 en desktop.",
      "Los pictogramas de las tarjetas estaban declarados con una altura menor a la real. Corregí las dimensiones y Buenas prácticas pasó de 96 a 100.",
      "Con el espaciado de texto ampliado, el estado del asistente se cortaba, el encabezado se salía 14 px a 320 px y algunas etiquetas del mapa se salían 11 px. Las tres cosas quedaron resueltas.",
      "Sin raya larga ni raya media en todo el sitio, 0 enlaces internos rotos y una sola h1 por página."
     ],
     "en": [
      "The assistant had no performance score: an automatic scroll on load stopped LCP from being measured. The history no longer moves on the first message and the page reached 89 on mobile and 99 on desktop.",
      "The card pictograms were declared shorter than they really were. I fixed the dimensions and Best practices went from 96 to 100.",
      "With enlarged text spacing, the assistant status was cut off, the header overflowed by 14 px at 320 px and some map labels overflowed by 11 px. All three were fixed.",
      "No em or en dashes anywhere on the site, 0 broken internal links and a single h1 per page."
     ]
    }
   },
   {
    "t": "phase",
    "n": "06",
    "id": "etica",
    "mode": {
     "es": "transparencia",
     "en": "transparency"
    },
    "name": {
     "es": "IA como herramienta, no como fuente de decisiones",
     "en": "AI as a tool, not a source of decisions"
    },
    "q": {
     "es": "¿Cómo se usa IA generativa en un material para infancias sin perder el control humano ni la confianza de las familias?",
     "en": "How do you use generative AI in material for young children without losing human control or the trust of families?"
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Uso responsable de la IA",
     "en": "Responsible use of AI"
    },
    "items": [
     {
      "lead": {
       "es": "Control humano en cada iteración",
       "en": "Human control in every iteration"
      },
      "body": {
       "es": "Cada recurso pasó por varias versiones: reescribí prompts, descarté herramientas que no daban la calidad necesaria (Murf AI y Seedance) y corregí lo que el modelo agregaba sin que se lo pidiera.",
       "en": "Each resource went through several versions: I rewrote prompts, dropped tools that did not deliver the quality needed (Murf AI and Seedance) and fixed what the model added unasked."
      }
     },
     {
      "lead": {
       "es": "Transparencia",
       "en": "Transparency"
      },
      "body": {
       "es": "Cada recurso lleva el rótulo «Generado con IA generativa y validado por el Equipo 03» y declara sus herramientas. Los videos están etiquetados en YouTube como hechos con IA, los clips de Veo llevan la marca SynthID y las voces sintéticas se presentan como tales. Los créditos muestran los prompts reales.",
       "en": "Each resource carries the label “Generated with generative AI and validated by Team 03” and declares its tools. The videos are labelled on YouTube as made with AI, the Veo clips carry the SynthID watermark and the synthetic voices are presented as such. The credits show the real prompts."
      }
     },
     {
      "lead": {
       "es": "Sesgos",
       "en": "Bias"
      },
      "body": {
       "es": "Revisamos que ningún material reprodujera estereotipos sobre el autismo. Los personajes son monstruos, no niños.",
       "en": "We checked that no material reproduced stereotypes about autism. The characters are monsters, not children."
      }
     },
     {
      "lead": {
       "es": "Privacidad",
       "en": "Privacy"
      },
      "body": {
       "es": "El Estudiante A es un caso ficticio y anonimizado: ningún nombre, diagnóstico, foto ni institución de niñas o niños reales. El asistente no tiene campo de texto.",
       "en": "Student A is a fictional, anonymised case: no names, diagnoses, photos or institutions of real children. The assistant has no text box."
      }
     },
     {
      "lead": {
       "es": "Equidad y derechos de autor",
       "en": "Equity and copyright"
      },
      "body": {
       "es": "Priorizamos planes gratuitos o accesibles. Las obras de Antonio Berni y de Bortusk Leer no se reproducen: Berni, el monstruo azul, es un personaje propio.",
       "en": "We prioritised free or affordable plans. Works by Antonio Berni and Bortusk Leer are not reproduced: Berni, the blue monster, is our own character."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "07",
    "id": "resultado",
    "mode": {
     "es": "cierre",
     "en": "wrap-up"
    },
    "name": {
     "es": "Resultado y próximos pasos",
     "en": "Outcome and next steps"
    },
    "q": {
     "es": "¿Qué quedó resuelto y qué falta para que el sitio sea todavía más accesible?",
     "en": "What was solved, and what is still needed to make the site even more accessible?"
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "Resultado",
     "en": "Outcome"
    },
    "hl": true,
    "p": [
     {
      "es": "El TIF se aprobó con una **calificación final de 9,50 sobre 10**. El sitio quedó publicado: un mismo proyecto de sala en cinco formatos, con créditos, prompts reales y alternativas accesibles en cada uno, y un asistente que se ajustó a partir de lo que dijeron las docentes.",
      "en": "The project passed with a **final grade of 9.50 out of 10**. The site is published: one class project in five formats, each with credits, real prompts and accessible alternatives, and an assistant adjusted on the basis of what the teachers said."
     },
     {
      "es": "Para mí, el aprendizaje más fuerte fue que la accesibilidad no se agrega al final: el DUA definió la arquitectura, la plantilla de recurso, el Modo calma y el asistente sin campo de texto desde el plan.",
      "en": "For me, the strongest lesson was that accessibility is not added at the end: UDL defined the architecture, the resource template, Calm mode and the assistant with no text box from the plan onward."
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Limitaciones y próximos pasos",
     "en": "Limitations and next steps"
    },
    "items": [
     {
      "lead": {
       "es": "WCAG 1.2.5, cumplido en parte",
       "en": "WCAG 1.2.5, partly met"
      },
      "body": {
       "es": "La animación no tiene diálogos y su audiodescripción está en texto, no en audio.",
       "en": "The animation has no dialogue and its audio description is in text, not audio."
      }
     },
     {
      "lead": {
       "es": "Lector de pantalla",
       "en": "Screen reader"
      },
      "body": {
       "es": "Falta una prueba con NVDA o VoiceOver.",
       "en": "A test with NVDA or VoiceOver is still pending."
      }
     },
     {
      "lead": {
       "es": "Rendimiento mobile",
       "en": "Mobile performance"
      },
      "body": {
       "es": "Dos páginas quedan por debajo de 85 (Historia social, 77, y Recursos, 83) por el desplazamiento al cargar las tipografías. Se resuelve con precarga de fuentes.",
       "en": "Two pages stay below 85 (Social story, 77, and Resources, 83) because of layout shift while fonts load. Preloading the fonts fixes it."
      }
     },
     {
      "lead": {
       "es": "Subtítulos del documental",
       "en": "Documentary captions"
      },
      "body": {
       "es": "Los automáticos de YouTube coinciden palabra por palabra con la transcripción, pero fallan mayúsculas y puntuación. Falta subir un archivo corregido.",
       "en": "YouTube’s automatic captions match the transcript word for word, but capitalisation and punctuation are off. A corrected file still needs uploading."
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (2026a).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (2026a)."
      },
      "title": {
       "es": "El aula que incluye: IA generativa como soporte de inclusión en el nivel inicial",
       "en": "El aula que incluye: IA generativa como soporte de inclusión en el nivel inicial"
      },
      "post": {
       "es": " [Sitio web].",
       "en": " [Sitio web]."
      },
      "url": "https://lpedaci.github.io/iag-tif/"
     },
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (2026b).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (2026b)."
      },
      "title": {
       "es": "Hoy creamos nuestro monstruo",
       "en": "Hoy creamos nuestro monstruo"
      },
      "post": {
       "es": " [Historia social con pictogramas generada con IA]. El aula que incluye.",
       "en": " [Historia social con pictogramas generada con IA]. El aula que incluye."
      },
      "url": "https://lpedaci.github.io/iag-tif/recursos/historia-social.html"
     },
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (2026c).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (2026c)."
      },
      "title": {
       "es": "Preguntale a Berni",
       "en": "Preguntale a Berni"
      },
      "post": {
       "es": " [Chatbot]. El aula que incluye.",
       "en": " [Chatbot]. El aula que incluye."
      },
      "url": "https://lpedaci.github.io/iag-tif/asistente.html"
     },
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (Productoras). (2026d, 11 de septiembre).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (Productoras). (2026d, 11 de septiembre)."
      },
      "title": {
       "es": "El aula que incluye: crear contenido educativo con IA generativa",
       "en": "El aula que incluye: crear contenido educativo con IA generativa"
      },
      "post": {
       "es": " [Episodio de podcast de audio]. En El aula que incluye. Google Drive.",
       "en": " [Episodio de podcast de audio]. En El aula que incluye. Google Drive."
      },
      "url": "https://drive.google.com/file/d/1LhOBEpT0pVuegL7HiBLqOZKyaX_B_HoB/view"
     },
     {
      "pre": {
       "es": "Pedaci, L. [El servidor de Lourdes]. (2026a, 27 de agosto).",
       "en": "Pedaci, L. [El servidor de Lourdes]. (2026a, 27 de agosto)."
      },
      "title": {
       "es": "Los monstruos de Berni: una animación para la inclusión en la primera infancia",
       "en": "Los monstruos de Berni: una animación para la inclusión en la primera infancia"
      },
      "post": {
       "es": " [Video]. YouTube.",
       "en": " [Video]. YouTube."
      },
      "url": "https://youtu.be/EffCv8EIAwI"
     },
     {
      "pre": {
       "es": "Pedaci, L. [El servidor de Lourdes]. (2026b, 24 de septiembre).",
       "en": "Pedaci, L. [El servidor de Lourdes]. (2026b, 24 de septiembre)."
      },
      "title": {
       "es": "Adaptar para incluir: inteligencia artificial en la educación inicial",
       "en": "Adaptar para incluir: inteligencia artificial en la educación inicial"
      },
      "post": {
       "es": " [Video]. YouTube.",
       "en": " [Video]. YouTube."
      },
      "url": "https://youtu.be/qJ5nEvhGr4I"
     }
    ]
   }
  ],
  "outcome": null,
  "credits": {
   "es": "Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci (autoría académica de todos los recursos). Cátedra: titular, Mg. Lic. Mónica Leda Torres; adjunto, Mg. Lic. Juan Ruiz Díaz; profesores ayudantes: Federico Centurión, Marcela Trotta, Miriam Cañamas, Carolina Armella, Raúl Cracco, Verónica Ruggero y Alfredo Esquivel. Declaración de uso de IA: se usaron Claude y Claude Code (Anthropic) como apoyo en la programación del sitio, la organización y la revisión de la redacción; los recursos multimedia se produjeron con las herramientas declaradas en cada uno. La conceptualización, las decisiones pedagógicas, el diseño de la experiencia y la validación de los contenidos son del Equipo 03. Las capturas son del sitio publicado.",
   "en": "Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci (academic authorship of every resource). Teaching staff: lead, Mg. Lic. Mónica Leda Torres; associate, Mg. Lic. Juan Ruiz Díaz; teaching assistants: Federico Centurión, Marcela Trotta, Miriam Cañamas, Carolina Armella, Raúl Cracco, Verónica Ruggero and Alfredo Esquivel. AI use statement: Claude and Claude Code (Anthropic) were used as support for coding the site, organising and reviewing the writing; the multimedia resources were produced with the tools declared for each one. The concept, the pedagogical decisions, the experience design and the validation of all content belong to Team 03. Screenshots are from the published site."
  }
 },
 "animacion-los-monstruos-de-berni": {
  "cat": "cont",
  "touch": "cap",
  "title": {
   "es": "Los monstruos de Berni: una animación con IA para la inclusión en la primera infancia",
   "en": "Berni’s monsters: an AI animation for inclusion in early childhood"
  },
  "subtitle": {
   "es": "Una animación narrativa de 1:18, sin diálogos, que muestra en la sala, antes de que pase, cómo acompañar a un compañero que necesita calmarse.",
   "en": "A 1:18 dialogue-free narrative animation that shows the class, before it happens, how to support a classmate who needs to calm down."
  },
  "chips": {
   "es": [
    "Animación",
    "IA generativa",
    "Diseño de personaje",
    "Accesibilidad"
   ],
   "en": [
    "Animation",
    "Generative AI",
    "Character design",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "Una sala de 5 años necesita anticipar una situación sin depender de la palabra: el Estudiante A, un caso ficticio, todavía no lee y se satura con el ruido, y el resto del grupo no sabe cómo acompañarlo.",
    "en": "A class of 5-year-olds needs to anticipate a situation without relying on words: Student A, a fictional case, cannot read yet and is overwhelmed by noise, and the rest of the group does not know how to support them."
   },
   "solution": {
    "es": "Produje un corto sin diálogos con un personaje propio, Berni, que sostuve entre escenas con una imagen de referencia; generé cada escena por separado, revisé cada clip antes de usarlo y escribí la audiodescripción escena por escena.",
    "en": "I produced a dialogue-free short with an original character, Berni, kept consistent across scenes with a reference image; I generated each scene separately, reviewed every clip before using it and wrote the audio description scene by scene."
   },
   "results": [
    {
     "v": "1:18",
     "l": {
      "es": "de animación sin diálogos, para mirar en grupo",
      "en": "of dialogue-free animation, to watch as a group"
     }
    },
    {
     "v": "9",
     "l": {
      "es": "escenas con audiodescripción en texto",
      "en": "scenes with a text audio description"
     }
    },
    {
     "t": {
      "es": "Está etiquetada en YouTube como hecha con IA, y los clips de Veo llevan la marca SynthID.",
      "en": "It is labelled on YouTube as made with AI, and the Veo clips carry the SynthID watermark."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Learning Experience Designer: diseño del personaje, generación de escenas con IA, música y montaje",
    "en": "Learning Experience Designer: character design, AI scene generation, music and editing"
   },
   "timeline": {
    "es": "Agosto 2026 (publicada el 27/8)",
    "en": "August 2026 (published on 27 August)"
   },
   "context": {
    "es": "Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa, UTN FRBA. Trabajo del Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci",
    "en": "Managing Digital Resources with Generative AI, Bachelor’s in Educational Technology, UTN FRBA. Work by Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci"
   },
   "stack": [
    "ChatGPT (GPT-5)",
    "Canva",
    "Veo 3.1 Fast",
    "Suno",
    "Camtasia",
    "YouTube"
   ],
   "methods": {
    "es": [
     "Imagen de referencia",
     "Prompts negativos",
     "Generación por escenas",
     "Audiodescripción",
     "DUA"
    ],
    "en": [
     "Reference image",
     "Negative prompts",
     "Scene-by-scene generation",
     "Audio description",
     "UDL"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Ver la animación en YouTube",
     "en": "Watch the animation on YouTube"
    },
    "url": "https://youtu.be/EffCv8EIAwI"
   },
   {
    "label": {
     "es": "Ver la página del recurso (en vivo)",
     "en": "See the resource page (live)"
    },
    "url": "https://lpedaci.github.io/iag-tif/recursos/animacion.html"
   }
  ],
  "blocks": [
   {
    "t": "cards",
    "cols": 2,
    "h": {
     "es": "Parte del proyecto El aula que incluye",
     "en": "Part of the El aula que incluye project"
    },
    "items": [
     {
      "title": {
       "es": "El aula que incluye: IA generativa para la inclusión en el nivel inicial",
       "en": "The inclusive classroom: generative AI for inclusion in early childhood education"
      },
      "case": "el-aula-que-incluye",
      "caseCta": {
       "es": "Ver el caso del espacio digital completo",
       "en": "See the case for the full digital space"
      },
      "body": {
       "es": "La animación es el recurso de la Unidad 3 del espacio digital, que cuenta un mismo proyecto de sala en cinco formatos.",
       "en": "The animation is the Unit 3 resource of the digital space that tells one class project in five formats."
      }
     },
     {
      "title": {
       "es": "Adaptar para incluir: un documental producido con IA generativa",
       "en": "Adapt to include: a documentary produced with generative AI"
      },
      "body": {
       "es": "El otro video del proyecto, el de la Unidad 5: un documental de 2:04 para docentes y familias.",
       "en": "The project’s other video, for Unit 5: a 2:04 documentary for teachers and families."
      },
      "case": "documental-adaptar-para-incluir",
      "caseCta": {
       "es": "Ver el caso del documental",
       "en": "See the documentary case"
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Para qué y para quién",
     "en": "What for and for whom"
    },
    "items": [
     {
      "k": {
       "es": "Qué es",
       "en": "What it is"
      },
      "v": {
       "es": "Una animación narrativa de 1:18, sin diálogos, que recrea una escena de inclusión en la sala.",
       "en": "A 1:18 dialogue-free narrative animation that recreates an inclusion scene in the classroom."
      }
     },
     {
      "k": {
       "es": "Para qué",
       "en": "What for"
      },
      "v": {
       "es": "Mostrar, antes de que pase, cómo acompañar a un compañero que necesita calmarse.",
       "en": "To show, before it happens, how to support a classmate who needs to calm down."
      }
     },
     {
      "k": {
       "es": "Para quién",
       "en": "For whom"
      },
      "v": {
       "es": "Directo, el Estudiante A (caso ficticio). Ampliado, toda la sala.",
       "en": "Directly, Student A (a fictional case). More broadly, the whole class."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Un corto para mirar antes de la actividad",
     "en": "A short to watch before the activity"
    },
    "p": [
     {
      "es": "Un corto de 1:18 **sin diálogos**, anticipatorio y modelizador: Berni acompaña a un compañero que se tapa los oídos por el ruido hasta un rincón de calma y después lo invita a jugar en ronda. Está pensado para mirar en grupo antes de la actividad de plástica, con el caso ficticio del Estudiante A en mente: la información llega por la imagen y no por la palabra.",
      "en": "A 1:18 **dialogue-free** short that anticipates and models: Berni walks a classmate who covers their ears because of the noise to a calm corner, then invites them to play in a circle. It is meant to be watched as a group before the art activity, with the fictional Student A in mind: the information arrives through images, not words."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "La historia, escena por escena",
     "en": "The story, scene by scene"
    },
    "steps": {
     "es": [
      "Berni, un monstruo azul, saluda en la sala",
      "Se acerca a un compañero que está encogido y triste",
      "El compañero se tapa los oídos por el ruido",
      "Berni lo acompaña a un rincón de calma",
      "Ya tranquilo, lo invita a sumarse a la ronda",
      "Todo el grupo juega junto"
     ],
     "en": [
      "Berni, a blue monster, waves in the classroom",
      "Berni approaches a classmate who is hunched and sad",
      "The classmate covers their ears because of the noise",
      "Berni takes them to a calm corner",
      "Once calm, Berni invites them to join the circle",
      "The whole group plays together"
     ]
    }
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Pipeline de producción",
     "en": "Production pipeline"
    },
    "steps": {
     "es": [
      "Personaje de referencia con ChatGPT (GPT-5)",
      "Escena de apertura con Contenido Mágico de Canva",
      "Escenas por separado con Veo 3.1 Fast, de imagen a video",
      "Revisión de cada clip",
      "Música con Suno",
      "Montaje, audio y créditos en Camtasia",
      "Audiodescripción escrita escena por escena"
     ],
     "en": [
      "Reference character with ChatGPT (GPT-5)",
      "Opening scene with Canva Magic Media",
      "Separate scenes with Veo 3.1 Fast, image to video",
      "Review of every clip",
      "Music with Suno",
      "Editing, audio and credits in Camtasia",
      "Scene-by-scene written audio description"
     ]
    }
   },
   {
    "t": "list",
    "h": {
     "es": "Técnicas para sostener al personaje",
     "en": "Techniques to keep the character consistent"
    },
    "items": [
     {
      "lead": {
       "es": "Imagen de referencia",
       "en": "Reference image"
      },
      "body": {
       "es": "Diseñé a Berni primero y usé esa imagen para animar cada escena, así el personaje no cambia entre planos.",
       "en": "I designed Berni first and used that image to animate every scene, so the character stays the same across shots."
      }
     },
     {
      "lead": {
       "es": "Prompts negativos",
       "en": "Negative prompts"
      },
      "body": {
       "es": "Para excluir lo que no tenía que aparecer: dientes afilados, gestos agresivos, colores estridentes.",
       "en": "To exclude what must not appear: sharp teeth, aggressive gestures, garish colours."
      }
     },
     {
      "lead": {
       "es": "Enfoque modular",
       "en": "Modular approach"
      },
      "body": {
       "es": "Generé cada escena por separado y ensamblé al final, así una escena fallida se rehace sin tocar las demás.",
       "en": "I generated each scene separately and assembled at the end, so a failed scene can be redone without touching the rest."
      }
     }
    ]
   },
   {
    "t": "callout",
    "h": {
     "es": "Problema y solución: una figura que nadie pidió",
     "en": "Problem and solution: a figure nobody asked for"
    },
    "body": {
     "es": "En las primeras versiones de la escena 2, el modelo agregaba **una figura humana infantil que no se había pedido**. La corregí describiendo al nuevo personaje con rasgos claros de monstruo, diferenciándolo por el color, aclarando que no había seres humanos y partiendo de la imagen de referencia. Desde ahí, **revisé cada clip antes de usarlo**.",
     "en": "In the first versions of scene 2, the model kept adding **a child-like human figure nobody had asked for**. I fixed it by describing the new character with clear monster features, setting it apart by colour, stating there were no humans and starting from the reference image. From then on, **I reviewed every clip before using it**."
    }
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "Iteración del personaje",
     "en": "Character iteration"
    },
    "note": {
     "es": "Antes de llegar a la versión final hubo otras iteraciones. Esta es la comparación entre una previa y la que fijó el Paso 0.",
     "en": "There were other iterations before the final version. This compares an earlier one with the one fixed in Step 0."
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Iteración previa",
      "en": "Earlier iteration"
     },
     "after": {
      "es": "Versión final",
      "en": "Final version"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Paleta",
       "en": "Palette"
      },
      "before": {
       "es": "Lavanda y menta pastel, de baja saturación",
       "en": "Pastel lavender and mint, low saturation"
      },
      "after": {
       "es": "**Pelaje azul con destellos blancos** como estrellitas",
       "en": "**Blue fur with white sparkles** like little stars"
      }
     },
     {
      "dim": {
       "es": "Cuerpo",
       "en": "Body"
      },
      "before": {
       "es": "Redondeado, textura suave tipo peluche",
       "en": "Rounded, soft plush texture"
      },
      "after": {
       "es": "Peludo y regordete, con manitas y pies con garritas oscuras",
       "en": "Furry and chubby, with little hands and feet with dark claws"
      }
     },
     {
      "dim": {
       "es": "Rostro",
       "en": "Face"
      },
      "before": {
       "es": "Ojos grandes y expresivos, sonrisa cálida",
       "en": "Large expressive eyes, warm smile"
      },
      "after": {
       "es": "Ojos grandes y celestes, mejillas sonrojadas, sonrisa amplia",
       "en": "Large light-blue eyes, rosy cheeks, a wide smile"
      }
     },
     {
      "dim": {
       "es": "Prompt negativo",
       "en": "Negative prompt"
      },
      "before": {
       "es": "Sin dientes afilados, colores estridentes, texto, elementos de miedo ni rasgos humanos realistas",
       "en": "No sharp teeth, garish colours, text, scary elements or realistic human features"
      },
      "after": {
       "es": "Sin dientes afilados, gesto agresivo, colores estridentes, texto ni rasgos humanos realistas",
       "en": "No sharp teeth, aggressive expression, garish colours, text or realistic human features"
      }
     }
    ]
   },
   {
    "t": "quote",
    "h": {
     "es": "Fragmento del prompt del personaje",
     "en": "Excerpt from the character prompt"
    },
    "body": {
     "es": "Berni es un monstruo peludo y regordete de pelaje azul, cubierto de pequeños destellos blancos brillantes como estrellitas.",
     "en": "Berni is a chubby, furry monster with blue fur, covered in small bright white sparkles like little stars."
    },
    "p": [
     {
      "es": "Paso 0 del trabajo práctico de la Unidad 3. El prompt completo, con su prompt negativo, y la iteración anterior están en la página del recurso.",
      "en": "Step 0 of the Unit 3 assignment (quoted in Spanish in the original). The full prompt, with its negative prompt, and the earlier iteration are on the resource page."
     }
    ]
   },
   {
    "t": "gallery",
    "single": true,
    "compact": true,
    "h": {
     "es": "Berni, la imagen de referencia",
     "en": "Berni, the reference image"
    },
    "images": [
     {
      "src": "aula-berni-referencia.webp",
      "w": 600,
      "h": 600,
      "alt": {
       "es": "Berni, un monstruo azul y peludo con destellos blancos, sentado y sonriendo sobre un fondo beige. Tiene ojos grandes y celestes, mejillas sonrojadas y orejas pequeñas.",
       "en": "Berni, a blue, furry monster with white sparkles, sitting and smiling on a beige background. It has large light-blue eyes, rosy cheeks and small ears."
      },
      "caption": {
       "es": "Imagen generada con IA (ChatGPT, GPT-5) y validada por el Equipo 03. Se usó como referencia para animar cada escena en modo imagen a video.",
       "en": "AI-generated image (ChatGPT, GPT-5), validated by Team 03. It was used as the reference to animate every scene in image-to-video mode."
      },
      "link": {
       "url": "https://lpedaci.github.io/iag-tif/recursos/animacion.html",
       "cta": {
        "es": "Ver la página del recurso",
        "en": "See the resource page"
       }
      }
     }
    ]
   },
   {
    "t": "embed",
    "kind": "video",
    "h": {
     "es": "Ver la animación",
     "en": "Watch the animation"
    },
    "src": "https://www.youtube.com/embed/EffCv8EIAwI",
    "open": "https://youtu.be/EffCv8EIAwI",
    "label": {
     "es": "Los monstruos de Berni: una animación para la inclusión en la primera infancia",
     "en": "Berni’s monsters: an animation for inclusion in early childhood"
    }
   },
   {
    "t": "list",
    "join": true,
    "h": {
     "es": "Audiodescripción",
     "en": "Audio description"
    },
    "note": {
     "es": "La animación no tiene diálogos. Esta es su alternativa en texto, escena por escena.",
     "en": "The animation has no dialogue. This is its text alternative, scene by scene."
    },
    "items": [
     {
      "lead": {
       "es": "Escena 1",
       "en": "Scene 1"
      },
      "body": {
       "es": "Una sala de jardín vacía, en colores pastel, con estantes, una alfombra suave y luz de la mañana. La cámara la recorre despacio.",
       "en": "An empty kindergarten room in pastel colours, with shelves, a soft rug and morning light. The camera pans slowly."
      }
     },
     {
      "lead": {
       "es": "Escena 2",
       "en": "Scene 2"
      },
      "body": {
       "es": "Berni, un monstruo azul y peludo con destellos blancos, saluda con la mano en el centro de la sala.",
       "en": "Berni, a blue, furry monster with white sparkles, waves from the middle of the room."
      }
     },
     {
      "lead": {
       "es": "Escena 3",
       "en": "Scene 3"
      },
      "body": {
       "es": "Berni camina despacio hacia un monstruo verde menta que está sentado en el suelo, encogido y triste, y se agacha a su altura.",
       "en": "Berni walks slowly towards a mint-green monster sitting on the floor, hunched and sad, and crouches to its level."
      }
     },
     {
      "lead": {
       "es": "Escena 4",
       "en": "Scene 4"
      },
      "body": {
       "es": "El monstruo verde menta se tapa las orejas porque hay mucho ruido. Berni se queda a su lado. El murmullo baja hasta el silencio.",
       "en": "The mint-green monster covers its ears because it is too noisy. Berni stays beside it. The murmur fades to silence."
      }
     },
     {
      "lead": {
       "es": "Escena 5",
       "en": "Scene 5"
      },
      "body": {
       "es": "Berni lo acompaña a un rincón de calma con cojines, luz tenue y plantas. Los dos respiran tranquilos.",
       "en": "Berni takes it to a calm corner with cushions, soft light and plants. They both breathe calmly."
      }
     },
     {
      "lead": {
       "es": "Escena 6",
       "en": "Scene 6"
      },
      "body": {
       "es": "Ya calmado, el monstruo verde menta se pone de pie. Berni le da la mano y caminan hacia un grupo de monstruos que juega en ronda. Los demás les hacen lugar.",
       "en": "Calm now, the mint-green monster stands up. Berni takes its hand and they walk towards a group of monsters playing in a circle. The others make room."
      }
     },
     {
      "lead": {
       "es": "Escena 7",
       "en": "Scene 7"
      },
      "body": {
       "es": "El grupo juega en ronda y sonríe. El monstruo verde menta forma parte del grupo.",
       "en": "The group plays in a circle and smiles. The mint-green monster is part of the group."
      }
     },
     {
      "lead": {
       "es": "Escena 8",
       "en": "Scene 8"
      },
      "body": {
       "es": "Berni lo lleva al centro del círculo. Todos se toman de las manos y se balancean riendo suavemente. La cámara se aleja.",
       "en": "Berni brings it to the middle of the circle. They all hold hands and sway, laughing softly. The camera pulls back."
      }
     },
     {
      "lead": {
       "es": "Escena 9",
       "en": "Scene 9"
      },
      "body": {
       "es": "Créditos sobre un fondo azul medianoche con destellos suaves.",
       "en": "Credits over a midnight-blue background with soft sparkles."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Cómo se usa en la sala",
     "en": "How it is used in the classroom"
    },
    "items": [
     {
      "lead": {
       "es": "Antes: anticipar",
       "en": "Before: anticipate"
      },
      "body": {
       "es": "Mirarla en grupo, en un momento tranquilo, antes de la actividad de plástica, con pausas en cada escena.",
       "en": "Watch it as a group, at a quiet moment, before the art activity, pausing at each scene."
      }
     },
     {
      "lead": {
       "es": "Durante: hacer",
       "en": "During: do"
      },
      "body": {
       "es": "Tener armado un rincón de calma como el de Berni, con cojines y luz tenue, y nombrarlo igual que en el video.",
       "en": "Have a calm corner like Berni’s ready, with cushions and soft light, and call it the same as in the video."
      }
     },
     {
      "lead": {
       "es": "Después: volver a mirar",
       "en": "After: look again"
      },
      "body": {
       "es": "Conversar sobre los distintos ritmos de cada quien: qué hizo Berni y qué necesitaba el monstruo verde menta.",
       "en": "Talk about everyone’s different rhythms: what Berni did and what the mint-green monster needed."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Ética y accesibilidad",
     "en": "Ethics and accessibility"
    },
    "items": [
     {
      "lead": {
       "es": "Obras de referencia",
       "en": "Reference works"
      },
      "body": {
       "es": "Las obras de Antonio Berni y de Bortusk Leer inspiran el proyecto de la sala, pero no se reproducen. Berni es un personaje propio.",
       "en": "Works by Antonio Berni and Bortusk Leer inspire the class project but are not reproduced. Berni is an original character."
      }
     },
     {
      "lead": {
       "es": "Sesgos",
       "en": "Bias"
      },
      "body": {
       "es": "Los personajes son monstruos, no niños, y no reproducen estereotipos sobre el autismo.",
       "en": "The characters are monsters, not children, and do not reproduce stereotypes about autism."
      }
     },
     {
      "lead": {
       "es": "Rotulado",
       "en": "Labelling"
      },
      "body": {
       "es": "Etiquetada en YouTube como hecha con IA, con el rótulo del equipo en el recurso. Los clips de Veo incorporan SynthID, una marca de agua imperceptible.",
       "en": "Labelled on YouTube as made with AI, with the team label on the resource. The Veo clips include SynthID, an imperceptible watermark."
      }
     },
     {
      "lead": {
       "es": "Sin reproducción automática",
       "en": "No autoplay"
      },
      "body": {
       "es": "En el sitio, el video carga con una fachada desde el dominio sin cookies de YouTube y nada se reproduce solo: arranca cuando alguien toca Reproducir.",
       "en": "On the site, the video loads through a facade from YouTube’s cookie-free domain and nothing autoplays: it starts when someone presses Play."
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencia",
     "en": "Reference"
    },
    "items": [
     {
      "pre": {
       "es": "Pedaci, L. [El servidor de Lourdes]. (2026a, 27 de agosto).",
       "en": "Pedaci, L. [El servidor de Lourdes]. (2026a, 27 de agosto)."
      },
      "title": {
       "es": "Los monstruos de Berni: una animación para la inclusión en la primera infancia",
       "en": "Los monstruos de Berni: una animación para la inclusión en la primera infancia"
      },
      "post": {
       "es": " [Video]. YouTube.",
       "en": " [Video]. YouTube."
      },
      "url": "https://youtu.be/EffCv8EIAwI"
     }
    ]
   }
  ],
  "outcome": null,
  "credits": {
   "es": "Publicada en el canal El servidor de Lourdes. Diseño del personaje, generación de escenas, música y montaje: Lourdes Pedaci. Autoría académica: Equipo 03 (Clara Argüello, Silvia Costas y Lourdes Pedaci). Cátedra: titular, Mg. Lic. Mónica Leda Torres; adjunto, Mg. Lic. Juan Ruiz Díaz. Contenido generado con IA generativa y validado por el Equipo 03.",
   "en": "Published on the El servidor de Lourdes channel. Character design, scene generation, music and editing: Lourdes Pedaci. Academic authorship: Team 03 (Clara Argüello, Silvia Costas and Lourdes Pedaci). Teaching staff: lead, Mg. Lic. Mónica Leda Torres; associate, Mg. Lic. Juan Ruiz Díaz. Content generated with generative AI and validated by Team 03."
  }
 },
 "documental-adaptar-para-incluir": {
  "cat": "cont",
  "touch": "cap",
  "title": {
   "es": "Adaptar para incluir: un documental producido con IA generativa",
   "en": "Adapt to include: a documentary produced with generative AI"
  },
  "subtitle": {
   "es": "Un documental de 2:04 para docentes de nivel inicial y familias sobre adaptaciones curriculares accesibles con IA generativa: qué permite y qué condiciones hacen falta.",
   "en": "A 2:04 documentary for early childhood teachers and families on accessible curriculum adaptations with generative AI: what it makes possible and what conditions it needs."
  },
  "chips": {
   "es": [
    "Documental",
    "IA generativa",
    "Guion con IA",
    "Accesibilidad"
   ],
   "en": [
    "Documentary",
    "Generative AI",
    "AI-assisted script",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "Las docentes y las familias necesitan entender qué aporta la IA a una sala inclusiva sin un texto académico de por medio, y sin que el mensaje prometa más de lo que la IA puede dar.",
    "en": "Teachers and families need to understand what AI brings to an inclusive classroom without an academic text in between, and without the message promising more than AI can deliver."
   },
   "solution": {
    "es": "Escribí el guion de la voz en off con Claude y generé las escenas en Flow, sin rostros de niñas ni niños; revisé cada clip, sumé voz y música con ElevenLabs, monté en Camtasia y publiqué con subtítulos y transcripción completa.",
    "en": "I wrote the voice-over script with Claude and generated the scenes in Flow, with no children’s faces; I reviewed every clip, added voice and music with ElevenLabs, edited in Camtasia and published with captions and a full transcript."
   },
   "results": [
    {
     "v": "2:04",
     "l": {
      "es": "de documental con voz en off, subtítulos y transcripción",
      "en": "of documentary with voice-over, captions and transcript"
     }
    },
    {
     "v": "4",
     "l": {
      "es": "herramientas evaluadas, una descartada antes de producir",
      "en": "tools evaluated, one dropped before production"
     }
    },
    {
     "t": {
      "es": "Está etiquetado en YouTube como hecho con IA («Made with AI»), y los clips de Veo llevan la marca SynthID.",
      "en": "It is labelled on YouTube as made with AI (“Made with AI”), and the Veo clips carry the SynthID watermark."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Learning Experience Designer: guion, generación de escenas con IA, voz, música y montaje",
    "en": "Learning Experience Designer: script, AI scene generation, voice, music and editing"
   },
   "timeline": {
    "es": "Septiembre 2026 (publicado el 24/9)",
    "en": "September 2026 (published on 24 September)"
   },
   "context": {
    "es": "Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa, UTN FRBA. Trabajo del Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci",
    "en": "Managing Digital Resources with Generative AI, Bachelor’s in Educational Technology, UTN FRBA. Work by Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci"
   },
   "stack": [
    "Claude (Opus 4.8)",
    "Flow",
    "Omni 1.1 Flash",
    "Veo 3.1 Lite",
    "ElevenLabs",
    "Camtasia",
    "YouTube"
   ],
   "methods": {
    "es": [
     "Guion con IA",
     "Prompts negativos",
     "Extensión de escenas",
     "Subtítulos y transcripción",
     "DUA"
    ],
    "en": [
     "AI-assisted script",
     "Negative prompts",
     "Scene extension",
     "Captions and transcript",
     "UDL"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Ver el documental en YouTube",
     "en": "Watch the documentary on YouTube"
    },
    "url": "https://youtu.be/qJ5nEvhGr4I"
   },
   {
    "label": {
     "es": "Ver la página del recurso (en vivo)",
     "en": "See the resource page (live)"
    },
    "url": "https://lpedaci.github.io/iag-tif/recursos/video.html"
   }
  ],
  "blocks": [
   {
    "t": "cards",
    "cols": 2,
    "h": {
     "es": "Parte del proyecto El aula que incluye",
     "en": "Part of the El aula que incluye project"
    },
    "items": [
     {
      "title": {
       "es": "El aula que incluye: IA generativa para la inclusión en el nivel inicial",
       "en": "The inclusive classroom: generative AI for inclusion in early childhood education"
      },
      "case": "el-aula-que-incluye",
      "caseCta": {
       "es": "Ver el caso del espacio digital completo",
       "en": "See the case for the full digital space"
      },
      "body": {
       "es": "El documental es el recurso de la Unidad 5 del espacio digital, que cuenta un mismo proyecto de sala en cinco formatos.",
       "en": "The documentary is the Unit 5 resource of the digital space that tells one class project in five formats."
      }
     },
     {
      "title": {
       "es": "Los monstruos de Berni: una animación con IA para la inclusión en la primera infancia",
       "en": "Berni’s monsters: an AI animation for inclusion in early childhood"
      },
      "body": {
       "es": "El otro video del proyecto, el de la Unidad 3: una animación de 1:18 sin diálogos para mirar en la sala.",
       "en": "The project’s other video, for Unit 3: a 1:18 dialogue-free animation to watch in the classroom."
      },
      "case": "animacion-los-monstruos-de-berni",
      "caseCta": {
       "es": "Ver el caso de la animación",
       "en": "See the animation case"
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Para qué y para quién",
     "en": "What for and for whom"
    },
    "items": [
     {
      "k": {
       "es": "Qué es",
       "en": "What it is"
      },
      "v": {
       "es": "Un documental de 2:04 sobre adaptaciones curriculares accesibles con IA generativa.",
       "en": "A 2:04 documentary on accessible curriculum adaptations with generative AI."
      }
     },
     {
      "k": {
       "es": "Para qué",
       "en": "What for"
      },
      "v": {
       "es": "Mostrar qué permite la IA y qué condiciones hacen falta: conectividad, formación docente y cuidado de la privacidad.",
       "en": "To show what AI makes possible and what conditions it needs: connectivity, teacher training and care for privacy."
      }
     },
     {
      "k": {
       "es": "Para quién",
       "en": "For whom"
      },
      "v": {
       "es": "Docentes de nivel inicial. Ampliado, las familias.",
       "en": "Early childhood teachers. More broadly, families."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Un documental para docentes y familias",
     "en": "A documentary for teachers and families"
    },
    "p": [
     {
      "es": "Un documental de 2:04 sobre adaptaciones curriculares accesibles: el DUA, qué recursos puede generar la IA, las barreras de conectividad, formación y privacidad, y **el lugar de la docente que decide** qué herramienta usar, con qué intención y para quién.",
      "en": "A 2:04 documentary on accessible curriculum adaptations: UDL, which resources AI can generate, the barriers of connectivity, training and privacy, and **the role of the teacher who decides** which tool to use, with what intention and for whom."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "El arco del guion",
     "en": "The script’s arc"
    },
    "steps": {
     "es": [
      "Adaptar no es recortar: es abrir más formas de acceder al mismo contenido",
      "El DUA: un mismo contenido con varias puertas de entrada",
      "Qué puede generar la IA: imágenes, pictogramas, historias sociales y narraciones",
      "Las barreras: conectividad, formación docente y privacidad de los datos de las infancias",
      "Las aplicaciones de apoyo: subtítulos automáticos, lectura por voz y tableros con pictogramas",
      "El cierre: la docente decide qué herramienta usar, con qué intención y para quién"
     ],
     "en": [
      "Adapting is not cutting back: it opens more ways into the same content",
      "UDL: one content with several entry points",
      "What AI can generate: images, pictograms, social stories and narrations",
      "The barriers: connectivity, teacher training and children’s data privacy",
      "Support apps: automatic captions, text to speech and pictogram boards",
      "The close: the teacher decides which tool to use, with what intention and for whom"
     ]
    }
   },
   {
    "t": "quote",
    "h": {
     "es": "La idea que ordena el guion",
     "en": "The idea that shapes the script"
    },
    "body": {
     "es": "Adaptar el currículo no significa simplificarlo.",
     "en": "Adapting the curriculum does not mean simplifying it."
    },
    "p": [
     {
      "es": "Una frase de la voz en off. El resto del guion está en la transcripción, más abajo.",
      "en": "A line from the voice-over (in Spanish in the original). The rest of the script is in the transcript below."
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Pipeline de producción",
     "en": "Production pipeline"
    },
    "steps": {
     "es": [
      "Guion de la voz en off con Claude (Opus 4.8)",
      "Escenas y extensiones con Flow (Omni 1.1 Flash y Veo 3.1 Lite)",
      "Revisión de cada clip, sin rostros de niños",
      "Voz en off y música con ElevenLabs (voz y Music v2)",
      "Montaje en Camtasia",
      "Subtítulos automáticos de YouTube y transcripción"
     ],
     "en": [
      "Voice-over script with Claude (Opus 4.8)",
      "Scenes and extensions with Flow (Omni 1.1 Flash and Veo 3.1 Lite)",
      "Review of every clip, no children’s faces",
      "Voice-over and music with ElevenLabs (voice and Music v2)",
      "Editing in Camtasia",
      "YouTube automatic captions and transcript"
     ]
    }
   },
   {
    "t": "compare",
    "accent": true,
    "arrow": false,
    "h": {
     "es": "Herramientas evaluadas",
     "en": "Tools evaluated"
    },
    "note": {
     "es": "La oferta de herramientas de video con IA cambia rápido, así que probé y comparé antes de elegir.",
     "en": "AI video tools change fast, so I tested and compared before choosing."
    },
    "cols": {
     "dim": {
      "es": "Herramienta",
      "en": "Tool"
     },
     "before": {
      "es": "Para qué",
      "en": "What for"
     },
     "after": {
      "es": "Decisión",
      "en": "Decision"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Flow (Omni 1.1 Flash y Veo 3.1 Lite)",
       "en": "Flow (Omni 1.1 Flash and Veo 3.1 Lite)"
      },
      "before": {
       "es": "Generar escenas y extenderlas",
       "en": "Generating and extending scenes"
      },
      "after": {
       "es": "**Se usó**",
       "en": "**Used**"
      }
     },
     {
      "dim": {
       "es": "ElevenLabs (voz y Music v2)",
       "en": "ElevenLabs (voice and Music v2)"
      },
      "before": {
       "es": "Voz en off y música",
       "en": "Voice-over and music"
      },
      "after": {
       "es": "**Se usó**",
       "en": "**Used**"
      }
     },
     {
      "dim": {
       "es": "Claude (Opus 4.8)",
       "en": "Claude (Opus 4.8)"
      },
      "before": {
       "es": "Guion de la voz en off",
       "en": "Voice-over script"
      },
      "after": {
       "es": "**Se usó**",
       "en": "**Used**"
      }
     },
     {
      "dim": {
       "es": "Seedance 1.0 vía CapCut",
       "en": "Seedance 1.0 via CapCut"
      },
      "before": {
       "es": "Generar escenas",
       "en": "Generating scenes"
      },
      "after": {
       "es": "Se probó y se descartó: no daba la calidad necesaria",
       "en": "Tested and dropped: it did not deliver the quality needed"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resguardos",
     "en": "Safeguards"
    },
    "items": {
     "es": [
      "Planos sin rostros de niñas ni niños.",
      "Prompts negativos para evitar figuras infantiles reconocibles.",
      "Revisión de cada clip antes de usarlo.",
      "Rotulado del origen sintético en el video y en YouTube, con la etiqueta «Made with AI».",
      "Marca SynthID en los clips de Veo."
     ],
     "en": [
      "No shots of children’s faces.",
      "Negative prompts to avoid recognisable child figures.",
      "Every clip reviewed before use.",
      "Synthetic origin labelled in the video and on YouTube, with the “Made with AI” label.",
      "SynthID watermark on the Veo clips."
     ]
    }
   },
   {
    "t": "embed",
    "kind": "video",
    "h": {
     "es": "Ver el documental",
     "en": "Watch the documentary"
    },
    "src": "https://www.youtube.com/embed/qJ5nEvhGr4I",
    "open": "https://youtu.be/qJ5nEvhGr4I",
    "label": {
     "es": "Adaptar para incluir: inteligencia artificial en la educación inicial",
     "en": "Adapt to include: artificial intelligence in early childhood education"
    }
   },
   {
    "t": "ranked",
    "join": true,
    "h": {
     "es": "Transcripción de la voz en off",
     "en": "Voice-over transcript"
    },
    "note": {
     "es": "En español, como el video. Contrastada con los subtítulos automáticos de YouTube.",
     "en": "In Spanish, like the video. Checked against YouTube’s automatic captions."
    },
    "items": [
     "En una sala de cinco años, la inteligencia artificial puede ayudarnos a crear materiales accesibles para todas las infancias.",
     "Adaptar el currículo no significa simplificarlo: es ofrecer varias formas de representar, de expresar y de participar.",
     "El Diseño Universal para el Aprendizaje propone ofrecer un mismo contenido de varias formas, para que todas las niñas y todos los niños tengan una puerta de entrada.",
     "Con la inteligencia artificial generativa, esos recursos se crean en minutos: imágenes, pictogramas, historias sociales y narraciones pensadas para el grupo.",
     "Una historia social, por ejemplo, anticipa una situación cotidiana con imágenes sencillas para volverla previsible, y hoy puede generarse y adaptarse a cada niño en minutos.",
     "Ahora bien, integrar la inteligencia artificial en el nivel inicial no es automático. Hoy pesan las brechas de conectividad e infraestructura, la escasa formación pedagógica de los equipos y las dudas sobre la privacidad de los datos de las infancias.",
     "Frente a estas dificultades, muchos equipos docentes se preguntan por dónde empezar y buscan alternativas concretas para el aula.",
     "Y ahí las aplicaciones de apoyo suman accesibilidad concreta: subtítulos automáticos, lectura por voz y tableros de comunicación con pictogramas.",
     "Detrás de cada recurso hay una docente que decide: qué herramienta usar, con qué intención y para quién.",
     "Es ella quien elige, adapta y prepara el material pensando en su grupo, y lo pone a disposición de cada niño y de cada niña.",
     "Y cuando ese material llega a la sala, se vuelve juego, exploración y encuentro: la tecnología, ahí, se hace inclusión.",
     "Integrar la inteligencia artificial con criterio pedagógico hace del nivel inicial un espacio más accesible para todas las infancias."
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Cómo se usa",
     "en": "How it is used"
    },
    "items": [
     {
      "lead": {
       "es": "Antes: anticipar",
       "en": "Before: anticipate"
      },
      "body": {
       "es": "Verlo en una reunión del equipo docente antes de empezar el proyecto, como disparador.",
       "en": "Watch it in a teaching team meeting before the project starts, as a conversation starter."
      }
     },
     {
      "lead": {
       "es": "Durante: hacer",
       "en": "During: do"
      },
      "body": {
       "es": "Usar la transcripción para relevar qué aplicaciones de apoyo ya hay en la institución.",
       "en": "Use the transcript to survey which support apps the school already has."
      }
     },
     {
      "lead": {
       "es": "Después: volver a mirar",
       "en": "After: look again"
      },
      "body": {
       "es": "Compartirlo con las familias para explicar por qué y cómo se usó la IA en el proyecto.",
       "en": "Share it with families to explain why and how AI was used in the project."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Accesibilidad y transparencia",
     "en": "Accessibility and transparency"
    },
    "items": [
     {
      "lead": {
       "es": "Alternativas",
       "en": "Alternatives"
      },
      "body": {
       "es": "Subtítulos y transcripción completa de la voz en off. En el sitio, el video carga con una fachada desde el dominio sin cookies de YouTube y nada se reproduce solo.",
       "en": "Captions and a full transcript of the voice-over. On the site, the video loads through a facade from YouTube’s cookie-free domain and nothing autoplays."
      }
     },
     {
      "lead": {
       "es": "Rotulado",
       "en": "Labelling"
      },
      "body": {
       "es": "Etiquetado en YouTube como hecho con IA, con el rótulo del equipo en el recurso. Los clips de Veo incorporan SynthID, una marca de agua imperceptible.",
       "en": "Labelled on YouTube as made with AI, with the team label on the resource. The Veo clips include SynthID, an imperceptible watermark."
      }
     },
     {
      "lead": {
       "es": "Límite",
       "en": "Limitation"
      },
      "body": {
       "es": "Los subtítulos son los automáticos de YouTube: coinciden palabra por palabra con la transcripción, pero fallan mayúsculas y puntuación. Queda pendiente subir una versión corregida.",
       "en": "The captions are YouTube’s automatic ones: they match the transcript word for word, but capitalisation and punctuation are off. A corrected version still needs uploading."
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencia",
     "en": "Reference"
    },
    "items": [
     {
      "pre": {
       "es": "Pedaci, L. [El servidor de Lourdes]. (2026b, 24 de septiembre).",
       "en": "Pedaci, L. [El servidor de Lourdes]. (2026b, 24 de septiembre)."
      },
      "title": {
       "es": "Adaptar para incluir: inteligencia artificial en la educación inicial",
       "en": "Adaptar para incluir: inteligencia artificial en la educación inicial"
      },
      "post": {
       "es": " [Video]. YouTube.",
       "en": " [Video]. YouTube."
      },
      "url": "https://youtu.be/qJ5nEvhGr4I"
     }
    ]
   }
  ],
  "outcome": null,
  "credits": {
   "es": "Publicado en el canal El servidor de Lourdes. Guion, generación de escenas, voz, música y montaje: Lourdes Pedaci. Autoría académica: Equipo 03 (Clara Argüello, Silvia Costas y Lourdes Pedaci). Cátedra: titular, Mg. Lic. Mónica Leda Torres; adjunto, Mg. Lic. Juan Ruiz Díaz. Contenido generado con IA generativa y validado por el Equipo 03.",
   "en": "Published on the El servidor de Lourdes channel. Script, scene generation, voice, music and editing: Lourdes Pedaci. Academic authorship: Team 03 (Clara Argüello, Silvia Costas and Lourdes Pedaci). Teaching staff: lead, Mg. Lic. Mónica Leda Torres; associate, Mg. Lic. Juan Ruiz Díaz. Content generated with generative AI and validated by Team 03."
  }
 },
 "podcast-el-aula-que-incluye": {
  "cat": "cont",
  "touch": "cap",
  "title": {
   "es": "Podcast El aula que incluye, a dos voces sintéticas",
   "en": "The El aula que incluye podcast, with two synthetic voices"
  },
  "subtitle": {
   "es": "Un episodio de 2:58 para docentes y familias que explica cómo un mismo cuento puede llegar como texto, pictogramas y audio.",
   "en": "A 2:58 episode for teachers and families that explains how one story can arrive as text, pictograms and audio."
  },
  "chips": {
   "es": [
    "Podcast",
    "Voces sintéticas",
    "Guion con IA",
    "Accesibilidad"
   ],
   "en": [
    "Podcast",
    "Synthetic voices",
    "AI-assisted script",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "El DUA propone ofrecer el mismo contenido por varias vías, pero a una docente le cuesta imaginar cómo se hace sin horas de preparación, y a una familia le cuesta seguirlo si se lo cuentan en lenguaje académico.",
    "en": "UDL calls for offering the same content through several channels, but a teacher struggles to picture doing it without hours of preparation, and a family struggles to follow it in academic language."
   },
   "solution": {
    "es": "Un episodio breve y conversado, con un guion que iteré con Claude en tres versiones, dos voces sintéticas de ElevenLabs que se presentan como tales, cortina musical y transcripción completa.",
    "en": "A short, conversational episode, with a script I iterated with Claude across three versions, two ElevenLabs synthetic voices presented as such, a music bed and a full transcript."
   },
   "results": [
    {
     "v": "2:58",
     "l": {
      "es": "de episodio, con transcripción completa",
      "en": "of episode, with a full transcript"
     }
    },
    {
     "v": "3",
     "l": {
      "es": "iteraciones de guion: diseño, pausas para la síntesis y versión a dos voces",
      "en": "script iterations: design, pauses for synthesis and a two-voice version"
     }
    },
    {
     "t": {
      "es": "El oyente sabe desde el principio que las voces son sintéticas, y el episodio reconoce a las tres integrantes del equipo en el mismo audio.",
      "en": "Listeners know from the start that the voices are synthetic, and the episode credits all three team members in the audio itself."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Learning Experience Designer: guion con IA, dirección de voces, producción sonora y postproducción",
    "en": "Learning Experience Designer: AI-assisted script, voice direction, sound production and post-production"
   },
   "timeline": {
    "es": "Septiembre 2026 (publicado el 11/9)",
    "en": "September 2026 (published on 11 September)"
   },
   "context": {
    "es": "Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa, UTN FRBA. Trabajo del Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci",
    "en": "Managing Digital Resources with Generative AI, Bachelor’s in Educational Technology, UTN FRBA. Work by Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci"
   },
   "stack": [
    "Claude (Opus 4.8)",
    "ElevenLabs Studio",
    "Eleven Multilingual v2",
    "Suno",
    "Camtasia"
   ],
   "methods": {
    "es": [
     "Ingeniería de prompts",
     "Refinamiento iterativo",
     "Diseño sonoro",
     "DUA"
    ],
    "en": [
     "Prompt engineering",
     "Iterative refinement",
     "Sound design",
     "UDL"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Escuchar en el sitio (en vivo)",
     "en": "Listen on the site (live)"
    },
    "url": "https://lpedaci.github.io/iag-tif/recursos/podcast.html"
   }
  ],
  "blocks": [
   {
    "t": "cards",
    "cols": 1,
    "h": {
     "es": "Parte del proyecto El aula que incluye",
     "en": "Part of the El aula que incluye project"
    },
    "caseCta": {
     "es": "Ver el caso del espacio digital completo",
     "en": "See the case for the full digital space"
    },
    "items": [
     {
      "title": {
       "es": "El aula que incluye: IA generativa para la inclusión en el nivel inicial",
       "en": "The inclusive classroom: generative AI for inclusion in early childhood education"
      },
      "body": {
       "es": "El podcast es el recurso de la Unidad 4 del espacio digital, que cuenta un mismo proyecto de sala en cinco formatos.",
       "en": "The podcast is the Unit 4 resource of the digital space that tells one class project in five formats."
      },
      "case": "el-aula-que-incluye"
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Qué es y para quién",
     "en": "What it is and who it is for"
    },
    "p": [
     {
      "es": "Un episodio narrativo y divulgativo en el que **Andrea y Billy**, dos voces sintéticas, explican cómo una docente puede pedirle a la IA un cuento breve a partir de los monstruos de Berni y Bortusk Leer, convertirlo en pictogramas y llevarlo a audio. Suma una vía sonora al proyecto y, en el fondo, explica el DUA con un ejemplo: ==la herramienta genera, pero la decisión sigue siendo humana==.",
      "en": "A narrative, explanatory episode in which **Andrea and Billy**, two synthetic voices, explain how a teacher can ask AI for a short story based on the monsters of Berni and Bortusk Leer, turn it into pictograms and take it to audio. It adds a sound channel to the project and, underneath, explains UDL through an example: ==the tool generates, but the decision stays human==."
     }
    ]
   },
   {
    "t": "cards",
    "cols": 3,
    "h": {
     "es": "El guion, en tres iteraciones",
     "en": "The script, in three iterations"
    },
    "note": {
     "es": "Fragmentos de los prompts reales, con asignación de rol, restricciones explícitas, control del formato de salida y refinamiento iterativo.",
     "en": "Excerpts from the real prompts (in Spanish in the original), with role assignment, explicit constraints, output format control and iterative refinement."
    },
    "items": [
     {
      "title": {
       "es": "01 · Diseño del guion",
       "en": "01 · Script design"
      },
      "tag": {
       "es": "Claude",
       "en": "Claude"
      },
      "body": {
       "es": "«Actuá como Licenciado en Tecnología Educativa. Diseñá el guion de un podcast educativo de 3 minutos como máximo…» con registro hablado y cálido, español rioplatense, enganche inicial, ejemplos concretos y cierre.",
       "en": "“Act as an Educational Technology graduate. Design the script for an educational podcast of at most 3 minutes…” with a warm spoken register, River Plate Spanish, an opening hook, concrete examples and a close."
      }
     },
     {
      "title": {
       "es": "02 · Pausas para la síntesis",
       "en": "02 · Pauses for synthesis"
      },
      "tag": {
       "es": "Claude",
       "en": "Claude"
      },
      "body": {
       "es": "El editor de audio no admitía título ni dos puntos: pedí el mismo guion sin marcas de tiempo ni dos puntos y con una frase inicial que se pudiera leer en voz alta.",
       "en": "The audio editor did not allow a title or colons: I asked for the same script without timestamps or colons and with an opening line that could be read aloud."
      }
     },
     {
      "title": {
       "es": "03 · Versión a dos voces",
       "en": "03 · Two-voice version"
      },
      "tag": {
       "es": "Claude",
       "en": "Claude"
      },
      "body": {
       "es": "Una conductora y un co-conductor que alternan por bloques y suenan como una conversación natural, «sin cambiar el contenido ni el estilo».",
       "en": "A host and a co-host who alternate by blocks and sound like a natural conversation, “without changing the content or the style”."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Voces y producción sonora",
     "en": "Voices and sound production"
    },
    "items": [
     {
      "lead": {
       "es": "Elección de las voces",
       "en": "Choosing the voices"
      },
      "body": {
       "es": "Dos voces en español latino que contrastaran, en ElevenLabs Studio con Eleven Multilingual v2: Andrea, la conductora, y Billy, el co-conductor, creado sobre la voz de biblioteca «Bill».",
       "en": "Two contrasting Latin American Spanish voices in ElevenLabs Studio with Eleven Multilingual v2: Andrea, the host, and Billy, the co-host, built on the library voice “Bill”."
      }
     },
     {
      "lead": {
       "es": "Expresividad",
       "en": "Expressiveness"
      },
      "body": {
       "es": "Activé los ajustes personalizados y bajé levemente la estabilidad. Entre bloques de distinta voz apliqué fundidos cortos para suavizar los cortes.",
       "en": "I turned on custom settings and slightly lowered stability. Between blocks with different voices I applied short fades to smooth the cuts."
      }
     },
     {
      "lead": {
       "es": "Música y cierre",
       "en": "Music and close"
      },
      "body": {
       "es": "Cortina musical lo-fi de Suno y cortina de créditos generada con ElevenLabs. Postproducción en Camtasia.",
       "en": "A lo-fi music bed from Suno and a credits sting generated with ElevenLabs. Post-production in Camtasia."
      }
     },
     {
      "lead": {
       "es": "Una herramienta descartada",
       "en": "A tool that was dropped"
      },
      "body": {
       "es": "Probé Murf AI como comparación y no la usé en la versión final: no daba la calidad necesaria.",
       "en": "I tried Murf AI for comparison and did not use it in the final version: it did not deliver the quality needed."
      }
     }
    ]
   },
   {
    "t": "audio",
    "h": {
     "es": "Escuchar el episodio",
     "en": "Listen to the episode"
    },
    "src": "podcast-el-aula-que-incluye.mp3",
    "dur": "2:58",
    "label": {
     "es": "El aula que incluye: crear contenido educativo con IA generativa (en español)",
     "en": "El aula que incluye: creating educational content with generative AI (in Spanish)"
    },
    "notice": {
     "es": "**Andrea y Billy son voces sintéticas** generadas con ElevenLabs.",
     "en": "**Andrea and Billy are synthetic voices** generated with ElevenLabs."
    },
    "download": {
     "es": "Descargar el MP3",
     "en": "Download the MP3"
    },
    "open": "https://drive.google.com/file/d/1LhOBEpT0pVuegL7HiBLqOZKyaX_B_HoB/view",
    "openL": {
     "es": "Fuente original en Google Drive",
     "en": "Original source on Google Drive"
    },
    "txL": {
     "es": "Leer la transcripción (en español)",
     "en": "Read the transcript (in Spanish)"
    },
    "txLang": "es",
    "lines": [
     {
      "who": "Andrea",
      "text": "¡Hola a todos! Querida audiencia, ¿cómo están? Mi nombre es Andrea."
     },
     {
      "who": "Billy",
      "text": "¡Y yo soy Billy! Sean bienvenidos a otro capítulo de este podcast, «El aula que incluye»."
     },
     {
      "who": "Andrea",
      "text": "En este nuevo episodio vamos a algo bien concreto: cómo crear contenido educativo con inteligencia artificial generativa en el nivel inicial."
     },
     {
      "who": "Billy",
      "text": "Arranquemos con una pregunta. ¿Y si cada niño del jardín pudiera acceder al mismo cuento, pero contado de la forma que mejor entiende? Hace unos años, resolver eso para toda una sala parecía imposible."
     },
     {
      "who": "Andrea",
      "text": "Hoy empieza a tener respuestas, y muchas pasan por la inteligencia artificial generativa. Eso sí, no para reemplazar a quien enseña, sino para ampliar lo que puede ofrecer."
     },
     {
      "who": "Billy",
      "text": "Pensemos en un ejemplo real. Un proyecto de sala que trabaja con los monstruos de Berni y de Bortusk Leer. A partir de esas imágenes, una docente puede pedirle a una IA que redacte un cuento breve, con frases cortas y lenguaje sencillo. En segundos tiene un texto base."
     },
     {
      "who": "Andrea",
      "text": "Que después ajusta con su criterio, claro. Y el texto es apenas el comienzo. Con otra herramienta puede transformar ese cuento en pictogramas, para quienes se apoyan en imágenes para comprender. Con una tercera, puede convertirlo en audio, con una voz clara y expresiva, para quienes aprenden mejor escuchando."
     },
     {
      "who": "Billy",
      "text": "¡Exacto! Entonces, el mismo contenido, ahora disponible en varios formatos. Esto, en el fondo, es diseño universal para el aprendizaje."
     },
     {
      "who": "Andrea",
      "text": "¡Así es, Billy! La IA no inventa la inclusión, pero baja muchísimo la barrera para lograrla. Lo que antes pedía horas de preparación, hoy entra en una tarde de planificación."
     },
     {
      "who": "Billy",
      "text": "Ahora, una aclaración que no es menor. La herramienta genera, pero la decisión sigue siendo humana. Elegir qué monstruo, qué palabras, qué voz, qué le sirve a este grupo y no a cualquiera, eso es trabajo pedagógico."
     },
     {
      "who": "Andrea",
      "text": "La tecnología ofrece opciones, y la docente pone el sentido. Por eso, más que preguntarnos si la IA va a cambiar el aula, conviene preguntarnos cómo queremos acompañar ese cambio."
     },
     {
      "who": "Billy",
      "text": "Con mirada crítica, cuidando los datos de las infancias y sin perder de vista para qué enseñamos."
     },
     {
      "who": "Andrea",
      "text": "Porque la mejor tecnología en educación es la que se vuelve invisible, y deja a la vista lo único que importa, que todos, todos, puedan aprender."
     },
     {
      "who": "Billy",
      "text": "¡Nos escuchamos en el próximo episodio!"
     },
     {
      "who": "Andrea",
      "text": "¡Hasta la próxima!"
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Accesibilidad y transparencia",
     "en": "Accessibility and transparency"
    },
    "items": {
     "es": [
      "El aviso de voces sintéticas va antes del reproductor y de la transcripción: su uso es adecuado siempre que se presenten como tales.",
      "Transcripción completa como alternativa accesible, también para leer sin audio o con datos móviles.",
      "Reproductor nativo que no se reproduce solo y solo carga los metadatos hasta que se pide.",
      "El episodio reconoce en el mismo audio a las tres integrantes del equipo."
     ],
     "en": [
      "The synthetic voice notice comes before the player and the transcript: using them is appropriate as long as they are presented as such.",
      "A full transcript as the accessible alternative, also for reading without audio or on mobile data.",
      "A native player that never autoplays and only loads metadata until asked.",
      "The episode credits all three team members in the audio itself."
     ]
    }
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencia",
     "en": "Reference"
    },
    "items": [
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (Productoras). (2026d, 11 de septiembre).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (Productoras). (2026d, 11 de septiembre)."
      },
      "title": {
       "es": "El aula que incluye: crear contenido educativo con IA generativa",
       "en": "El aula que incluye: crear contenido educativo con IA generativa"
      },
      "post": {
       "es": " [Episodio de podcast de audio]. En El aula que incluye. Google Drive.",
       "en": " [Episodio de podcast de audio]. En El aula que incluye. Google Drive."
      },
      "url": "https://drive.google.com/file/d/1LhOBEpT0pVuegL7HiBLqOZKyaX_B_HoB/view"
     }
    ]
   }
  ],
  "outcome": null,
  "credits": {
   "es": "Guion, voces, producción sonora y postproducción: Lourdes Pedaci. Autoría académica: Equipo 03 (Clara Argüello, Silvia Costas y Lourdes Pedaci). Cátedra: titular, Mg. Lic. Mónica Leda Torres; adjunto, Mg. Lic. Juan Ruiz Díaz. Contenido generado con IA generativa y validado por el Equipo 03.",
   "en": "Script, voices, sound production and post-production: Lourdes Pedaci. Academic authorship: Team 03 (Clara Argüello, Silvia Costas and Lourdes Pedaci). Teaching staff: lead, Mg. Lic. Mónica Leda Torres; associate, Mg. Lic. Juan Ruiz Díaz. Content generated with generative AI and validated by Team 03."
  }
 },
 "preguntale-a-berni": {
  "cat": "cont",
  "touch": "it",
  "title": {
   "es": "Preguntale a Berni: un asistente guiado sin campo de texto",
   "en": "Ask Berni: a guided assistant with no text box"
  },
  "subtitle": {
   "es": "Un chatbot por opciones que orienta a docentes, familias y evaluadores por el sitio El aula que incluye, sin pedir ni guardar datos.",
   "en": "An option-based chatbot that guides teachers, families and assessors through the El aula que incluye site, without asking for or storing data."
  },
  "chips": {
   "es": [
    "Diseño conversacional",
    "Privacidad por diseño",
    "Accesibilidad",
    "JavaScript"
   ],
   "en": [
    "Conversation design",
    "Privacy by design",
    "Accessibility",
    "JavaScript"
   ]
  },
  "summary": {
   "problem": {
    "es": "Un sitio para docentes de nivel inicial necesitaba una guía que respondiera dudas sin que nadie pudiera cargar el nombre o el diagnóstico de un chico, y que no inventara respuestas ni se cayera el día de la corrección.",
    "en": "A site for early childhood teachers needed a guide that answered questions without letting anyone enter a child’s name or diagnosis, and that would not make up answers or go down on assessment day."
   },
   "solution": {
    "es": "Un asistente guiado por opciones, con un árbol de conversación propio en JSON: cada respuesta está revisada y lleva a una página del sitio. Lo diseñé y lo programé, con apoyo de Claude Code.",
    "en": "An option-guided assistant with its own conversation tree in JSON: every answer is reviewed and leads to a page on the site. I designed and coded it, with help from Claude Code."
   },
   "results": [
    {
     "v": "33",
     "l": {
      "es": "nodos y 34 enlaces, sin destinos rotos ni nodos sin salida",
      "en": "nodes and 34 links, with no broken destinations or dead ends"
     }
    },
    {
     "v": "3",
     "l": {
      "es": "elecciones como máximo para llegar a una respuesta",
      "en": "choices at most to reach an answer"
     }
    },
    {
     "t": {
      "es": "Las docentes prefirieron elegir antes que escribir, pero no sabían buscar lo que no estaba. Sumé «No encuentro lo que busco», que lleva al mapa del sitio y a los recorridos por perfil.",
      "en": "Teachers preferred choosing to typing, but did not know how to look for what was not there. I added “I can’t find what I’m looking for”, which leads to the site map and the routes by profile."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Learning Experience Designer: diseño conversacional, diseño UX/UI, programación y pruebas del asistente",
    "en": "Learning Experience Designer: conversation design, UX/UI design, coding and testing of the assistant"
   },
   "timeline": {
    "es": "Octubre a noviembre 2026",
    "en": "October to November 2026"
   },
   "context": {
    "es": "Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa, UTN FRBA. Trabajo del Equipo 03: Clara Argüello, Silvia Costas y Lourdes Pedaci",
    "en": "Managing Digital Resources with Generative AI, Bachelor’s in Educational Technology, UTN FRBA. Work by Team 03: Clara Argüello, Silvia Costas and Lourdes Pedaci"
   },
   "stack": [
    "JavaScript",
    "JSON",
    "HTML/CSS",
    "Node.js",
    "Claude",
    "Claude Code"
   ],
   "methods": {
    "es": [
     "Diseño de chatbots (Unidad 6)",
     "Privacidad por diseño",
     "DUA",
     "WCAG 2.1 AA",
     "Prueba piloto"
    ],
    "en": [
     "Chatbot design (Unit 6)",
     "Privacy by design",
     "UDL",
     "WCAG 2.1 AA",
     "Pilot test"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Probar el asistente (en vivo)",
     "en": "Try the assistant (live)"
    },
    "url": "https://lpedaci.github.io/iag-tif/asistente.html"
   }
  ],
  "blocks": [
   {
    "t": "cards",
    "cols": 1,
    "h": {
     "es": "Parte del proyecto El aula que incluye",
     "en": "Part of the El aula que incluye project"
    },
    "caseCta": {
     "es": "Ver el caso del espacio digital completo",
     "en": "See the case for the full digital space"
    },
    "items": [
     {
      "title": {
       "es": "El aula que incluye: IA generativa para la inclusión en el nivel inicial",
       "en": "The inclusive classroom: generative AI for inclusion in early childhood education"
      },
      "body": {
       "es": "El asistente es el recurso de la Unidad 6 del espacio digital y se abre desde cualquier página con un botón flotante.",
       "en": "The assistant is the Unit 6 resource of the digital space and opens from any page through a floating button."
      },
      "case": "el-aula-que-incluye"
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Qué responde",
     "en": "What it answers"
    },
    "p": [
     {
      "es": "Berni orienta según quién llega: **por dónde empezar** según el perfil, qué recurso usar y para qué, cómo usarlo en la sala (antes, durante y después), qué significan historia social, DUA, TPACK y ADKAR, y cómo se usó la IA. Cada respuesta tiene de una a tres oraciones y **remite a una página del sitio**. No da diagnósticos ni orientación clínica, no reemplaza a la docente y no pide datos.",
      "en": "Berni guides people depending on who they are: **where to start** by profile, which resource to use and what for, how to use it in class (before, during and after), what social story, UDL, TPACK and ADKAR mean, and how AI was used. Each answer is one to three sentences long and **points to a page on the site**. It gives no diagnoses or clinical advice, does not replace the teacher and asks for no data."
     }
    ]
   },
   {
    "t": "bento",
    "h": {
     "es": "Por qué un árbol de opciones y no un campo de texto",
     "en": "Why an option tree and not a text box"
    },
    "items": [
     {
      "size": "s",
      "lead": true,
      "title": {
       "es": "Privacidad por diseño",
       "en": "Privacy by design"
      },
      "body": {
       "es": "Si no se puede escribir, **nadie puede cargar nombres ni diagnósticos de chicos**. Es coherente con lo que el sitio predica.",
       "en": "If you cannot type, **nobody can enter children’s names or diagnoses**. It is consistent with what the site preaches."
      }
     },
     {
      "size": "s",
      "tone": true,
      "title": {
       "es": "Confiabilidad",
       "en": "Reliability"
      },
      "body": {
       "es": "No inventa respuestas ni depende de un servicio externo que pueda caerse o llegar a su límite de uso.",
       "en": "It does not make up answers or depend on an external service that could go down or hit its usage limit."
      }
     },
     {
      "size": "s",
      "title": {
       "es": "Accesibilidad",
       "en": "Accessibility"
      },
      "body": {
       "es": "Elegir es más simple que redactar, sobre todo con dificultades de lectura o motricidad, o si el español no es la lengua de origen.",
       "en": "Choosing is simpler than writing, especially with reading or motor difficulties, or when Spanish is not your first language."
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Los pasos de la Unidad 6",
     "en": "The Unit 6 steps"
    },
    "note": {
     "es": "El material de la materia plantea el diseño de un chatbot en siete pasos. Puse el peso en el flujo conversacional y en las pruebas.",
     "en": "The course material frames chatbot design in seven steps. I put the weight on the conversation flow and on testing."
    },
    "items": [
     {
      "lead": {
       "es": "Objetivos",
       "en": "Goals"
      },
      "body": {
       "es": "Orientar a docentes, familias y evaluadores por el sitio, sin dar diagnósticos ni pedir datos.",
       "en": "Guide teachers, families and assessors through the site, without giving diagnoses or asking for data."
      }
     },
     {
      "lead": {
       "es": "Plataforma",
       "en": "Platform"
      },
      "body": {
       "es": "Propia, en JavaScript y sin servicios externos, para que funcione igual en GitHub Pages.",
       "en": "Our own, in JavaScript with no external services, so it works the same on GitHub Pages."
      }
     },
     {
      "lead": {
       "es": "Flujo conversacional",
       "en": "Conversation flow"
      },
      "body": {
       "es": "Un árbol con un nodo de perfil, un menú de seis opciones y respuestas a no más de tres elecciones. El motor suma siempre «Volver» e «Inicio».",
       "en": "A tree with a profile node, a six-option menu and answers no more than three choices away. The engine always adds “Back” and “Start”."
      }
     },
     {
      "lead": {
       "es": "Entrenamiento",
       "en": "Training"
      },
      "body": {
       "es": "En lugar de entrenar un modelo, redacté las respuestas con apoyo de Claude y el equipo las validó contra los contenidos del sitio.",
       "en": "Instead of training a model, I wrote the answers with help from Claude and the team validated them against the site’s content."
      }
     },
     {
      "lead": {
       "es": "Integración",
       "en": "Integration"
      },
      "body": {
       "es": "Una página propia a ancho completo y un botón flotante en el resto del sitio, que abre un panel lateral en escritorio y a pantalla completa en el celular.",
       "en": "Its own full-width page and a floating button across the rest of the site, opening a side panel on desktop and full screen on phones."
      }
     },
     {
      "lead": {
       "es": "Personalización",
       "en": "Personalisation"
      },
      "body": {
       "es": "El perfil elegido cambia solo la respuesta de «¿Por dónde empiezo?». Se guarda en memoria durante la sesión, no en el navegador.",
       "en": "The chosen profile only changes the answer to “Where do I start?”. It is kept in memory for the session, not in the browser."
      }
     },
     {
      "lead": {
       "es": "Pruebas",
       "en": "Testing"
      },
      "body": {
       "es": "Una prueba automática del árbol y una prueba piloto con docentes.",
       "en": "An automated test of the tree and a pilot test with teachers."
      }
     }
    ]
   },
   {
    "t": "decisionflow",
    "h": {
     "es": "Un tramo del árbol",
     "en": "A stretch of the tree"
    },
    "note": {
     "es": "Del saludo inicial a la opción que sumé después de la prueba piloto. Las respuestas reales del asistente, resumidas.",
     "en": "From the opening greeting to the option I added after the pilot test. The assistant’s real answers, summarised."
    },
    "nodes": [
     {
      "kind": "start",
      "label": {
       "es": "Berni saluda y pregunta «¿Quién sos?»",
       "en": "Berni says hello and asks “Who are you?”"
      }
     },
     {
      "kind": "decision",
      "label": {
       "es": "¿La persona se reconoce en un perfil?",
       "en": "Does the person see themselves in a profile?"
      },
      "branches": [
       {
        "label": {
         "es": "Sí: docente, familia, evaluación o solo mirando",
         "en": "Yes: teacher, family, assessment or just browsing"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Menú «¿Qué querés hacer?», con seis opciones",
           "en": "“What would you like to do?” menu, with six options"
          }
         },
         {
          "kind": "step",
          "label": {
           "es": "«¿Por dónde empiezo?» responde según el perfil y enlaza a una página",
           "en": "“Where do I start?” answers by profile and links to a page"
          }
         }
        ]
       },
       {
        "label": {
         "es": "No: «No encuentro lo que busco»",
         "en": "No: “I can’t find what I’m looking for”"
        },
        "nodes": [
         {
          "kind": "step",
          "label": {
           "es": "Berni lleva al mapa del sitio: todas las páginas a no más de dos clics de Inicio",
           "en": "Berni points to the site map: every page no more than two clicks from Home"
          }
         },
         {
          "kind": "decision",
          "label": {
           "es": "¿Qué recorrido sigue?",
           "en": "Which route next?"
          },
          "branches": [
           {
            "label": {
             "es": "Docentes, familias o evaluación",
             "en": "Teachers, families or assessment"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Recorrido sugerido en el mapa del sitio",
               "en": "Suggested route on the site map"
              }
             }
            ]
           },
           {
            "label": {
             "es": "Ver los recursos",
             "en": "See the resources"
            },
            "nodes": [
             {
              "kind": "step",
              "label": {
               "es": "Ficha breve de cada recurso con su enlace",
               "en": "Short card for each resource with its link"
              }
             }
            ]
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "kind": "end",
      "label": {
       "es": "Una página del sitio, con «Volver» e «Inicio» siempre a mano",
       "en": "A page on the site, with “Back” and “Start” always at hand"
      }
     }
    ]
   },
   {
    "t": "compare",
    "marks": true,
    "h": {
     "es": "Antes y después de la prueba piloto",
     "en": "Before and after the pilot test"
    },
    "note": {
     "es": "Clara Argüello y Silvia Costas probaron el asistente con docentes de la Escuela Infantil N.º 6 (Balvanera, CABA), institución donde trabaja Silvia. Yo hice el ajuste.",
     "en": "Clara Argüello and Silvia Costas tested the assistant with teachers at Escuela Infantil N.º 6 (Balvanera, Buenos Aires), where Silvia works. I made the adjustment."
    },
    "cols": {
     "dim": {
      "es": "Aspecto",
      "en": "Aspect"
     },
     "before": {
      "es": "Antes",
      "en": "Before"
     },
     "after": {
      "es": "Después",
      "en": "After"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Primera pantalla",
       "en": "First screen"
      },
      "before": {
       "es": "Cuatro perfiles: docente, familia, evaluación y solo mirando.",
       "en": "Four profiles: teacher, family, assessment and just browsing."
      },
      "after": {
       "es": "Los cuatro perfiles y **«No encuentro lo que busco»**.",
       "en": "The four profiles and **“I can’t find what I’m looking for”**."
      }
     },
     {
      "dim": {
       "es": "Si lo que busco no está",
       "en": "If what I want is not there"
      },
      "before": {
       "es": "Las docentes no sabían cómo buscarlo.",
       "en": "Teachers did not know how to look for it."
      },
      "after": {
       "es": "Berni deriva al mapa del sitio y a los recorridos para docentes, familias y evaluación.",
       "en": "Berni points to the site map and the routes for teachers, families and assessment."
      }
     },
     {
      "dim": {
       "es": "Lo que se mantuvo",
       "en": "What stayed"
      },
      "before": {
       "es": "Elegir entre opciones, que les resultó más fácil que armar una conversación.",
       "en": "Choosing among options, which they found easier than building a conversation."
      },
      "after": {
       "es": "Igual: sin campo de texto y sin sumar profundidad al árbol.",
       "en": "The same: no text box and no extra depth in the tree."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "single": true,
    "compact": true,
    "h": {
     "es": "El panel del asistente",
     "en": "The assistant panel"
    },
    "images": [
     {
      "src": "aula-04-asistente.webp",
      "w": 690,
      "h": 639,
      "alt": {
       "es": "Panel de Preguntale a Berni: el avatar de Berni, el saludo «¡Hola! Soy Berni, el guía de El aula que incluye…» y cinco botones: Soy docente, Soy de una familia, Vengo a evaluar el trabajo, Solo estoy mirando y No encuentro lo que busco. Al pie, el aviso de que no hay campo para escribir.",
       "en": "The Ask Berni panel: Berni’s avatar, the greeting “Hi! I’m Berni, the guide to El aula que incluye…” and five buttons: I’m a teacher, I’m from a family, I’m here to assess the work, Just browsing and I can’t find what I’m looking for. At the bottom, a note that there is no field to type in."
      },
      "caption": {
       "es": "Primera pantalla, con la opción que sumé después de la prueba piloto.",
       "en": "First screen, with the option I added after the pilot test."
      },
      "link": {
       "url": "https://lpedaci.github.io/iag-tif/asistente.html",
       "cta": {
        "es": "Probar el asistente",
        "en": "Try the assistant"
       }
      }
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Accesibilidad",
     "en": "Accessibility"
    },
    "items": [
     {
      "lead": {
       "es": "Historial anunciado",
       "en": "Announced history"
      },
      "body": {
       "es": "El historial tiene role=\"log\" y aria-live=\"polite\": cada respuesta se anuncia sin interrumpir.",
       "en": "The history has role=\"log\" and aria-live=\"polite\": each answer is announced without interrupting."
      }
     },
     {
      "lead": {
       "es": "Foco en la opción nueva",
       "en": "Focus on the new option"
      },
      "body": {
       "es": "Las opciones son botones en una lista. Al responder, las anteriores se deshabilitan y el foco pasa a la primera opción nueva. Escape cierra el panel y devuelve el foco al lanzador.",
       "en": "Options are buttons in a list. After each answer, the previous ones are disabled and focus moves to the first new option. Escape closes the panel and returns focus to the launcher."
      }
     },
     {
      "lead": {
       "es": "Sin JavaScript",
       "en": "Without JavaScript"
      },
      "body": {
       "es": "Una versión en texto dentro de <noscript>, con las preguntas y respuestas.",
       "en": "A text version inside <noscript>, with the questions and answers."
      }
     },
     {
      "lead": {
       "es": "Modo calma",
       "en": "Calm mode"
      },
      "body": {
       "es": "Sin animación de «escribiendo» ni transiciones.",
       "en": "No “typing” animation and no transitions."
      }
     }
    ]
   },
   {
    "t": "kv",
    "h": {
     "es": "Cómo está hecho",
     "en": "How it is built"
    },
    "items": [
     {
      "k": {
       "es": "Árbol",
       "en": "Tree"
      },
      "v": {
       "es": "chatbot-kb.json, 33 nodos",
       "en": "chatbot-kb.json, 33 nodes"
      }
     },
     {
      "k": {
       "es": "Nodo",
       "en": "Node"
      },
      "v": {
       "es": "Mensaje de 1 a 3 oraciones, enlace opcional y de 2 a 6 opciones",
       "en": "A 1 to 3 sentence message, an optional link and 2 to 6 options"
      }
     },
     {
      "k": {
       "es": "Profundidad",
       "en": "Depth"
      },
      "v": {
       "es": "Tres elecciones como máximo desde el menú",
       "en": "Three choices at most from the menu"
      }
     },
     {
      "k": {
       "es": "Respuestas",
       "en": "Answers"
      },
      "v": {
       "es": "Redactadas con Claude y validadas por el equipo",
       "en": "Written with Claude and validated by the team"
      }
     },
     {
      "k": {
       "es": "Prueba automática",
       "en": "Automated test"
      },
      "v": {
       "es": "tests/chatbot-arbol.js: destinos, huérfanos, enlaces, anclas, profundidad y raya larga",
       "en": "tests/chatbot-arbol.js: destinations, orphans, links, anchors, depth and em dashes"
      }
     },
     {
      "k": {
       "es": "Resultado",
       "en": "Result"
      },
      "v": {
       "es": "34 enlaces revisados, sin errores",
       "en": "34 links checked, no errors"
      }
     }
    ]
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencia",
     "en": "Reference"
    },
    "items": [
     {
      "pre": {
       "es": "Argüello, C., Costas, S., y Pedaci, L. (2026c).",
       "en": "Argüello, C., Costas, S., y Pedaci, L. (2026c)."
      },
      "title": {
       "es": "Preguntale a Berni",
       "en": "Preguntale a Berni"
      },
      "post": {
       "es": " [Chatbot]. El aula que incluye.",
       "en": " [Chatbot]. El aula que incluye."
      },
      "url": "https://lpedaci.github.io/iag-tif/asistente.html"
     }
    ]
   }
  ],
  "outcome": null,
  "credits": {
   "es": "Diseño conversacional, interfaz y programación del asistente: Lourdes Pedaci, con apoyo de Claude Code. Redacción de las respuestas con apoyo de Claude, validada por el equipo. Prueba piloto: Clara Argüello y Silvia Costas. Autoría académica: Equipo 03 (Clara Argüello, Silvia Costas y Lourdes Pedaci). Cátedra: titular, Mg. Lic. Mónica Leda Torres; adjunto, Mg. Lic. Juan Ruiz Díaz. Contenido generado con IA generativa y validado por el Equipo 03.",
   "en": "Conversation design, interface and coding of the assistant: Lourdes Pedaci, with help from Claude Code. Answers written with help from Claude, validated by the team. Pilot test: Clara Argüello and Silvia Costas. Academic authorship: Team 03 (Clara Argüello, Silvia Costas and Lourdes Pedaci). Teaching staff: lead, Mg. Lic. Mónica Leda Torres; associate, Mg. Lic. Juan Ruiz Díaz. Content generated with generative AI and validated by Team 03."
  }
 },
 "taller-ia": {
  "cat": "it",
  "touch": "cap",
  "title": {
   "es": "Taller - IA",
   "en": "Taller - IA"
  },
  "subtitle": {
   "es": "Un entorno de aprendizaje para usar la IA generativa con criterio, diseñado de punta a punta y en desarrollo",
   "en": "A learning environment for using generative AI with judgement, designed end to end and still in progress"
  },
  "chips": {
   "es": [
    "LXD",
    "UX/UI",
    "Material 3",
    "Accesibilidad"
   ],
   "en": [
    "LXD",
    "UX/UI",
    "Material 3",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "La oferta de cursos de IA se centra en herramientas que cambian todo el tiempo, mezcla fuentes de calidad dispar y mide el avance con tiempo en pantalla o rachas, que no dicen si alguien aprendió.",
    "en": "Most AI courses focus on tools that change all the time, mix sources of uneven quality and measure progress with screen time or streaks, which say nothing about whether someone learned."
   },
   "solution": {
    "es": "Un learning environment que enseña primero el criterio (el marco 4D) y después las herramientas, con fuentes oficiales traducidas y citadas, actividades con feedback y un progreso medido por competencias y evidencias.",
    "en": "A learning environment that teaches judgement first (the 4D framework) and tools second, with official sources translated and cited, activities with feedback and progress measured by competencies and evidence."
   },
   "results": [
    {
     "v": "21",
     "l": {
      "es": "módulos en 7 bloques, de lo general a lo particular",
      "en": "modules in 7 blocks, from the general to the specific"
     }
    },
    {
     "v": "25",
     "l": {
      "es": "tipos de actividad interactiva, todos operables con teclado",
      "en": "interactive activity types, all keyboard operable"
     }
    },
    {
     "v": "900",
     "l": {
      "es": "capturas verificadas: 75 pantallas, 6 anchos, claro y oscuro",
      "en": "verified screenshots: 75 screens, 6 widths, light and dark"
     }
    },
    {
     "t": {
      "es": "En desarrollo: las 10 etapas del brief están construidas y verificadas; queda la revisión manual y el primer dictado.",
      "en": "In progress: all 10 stages of the brief are built and verified; manual review and the first run with learners are still ahead."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Experience Designer: diseño instruccional, UX/UI, sistema de diseño, curaduría y redacción del contenido, y dirección del desarrollo con Claude Code",
    "en": "Experience Designer: instructional design, UX/UI, design system, content curation and writing, and directing development with Claude Code"
   },
   "timeline": {
    "es": "Noviembre de 2026, en curso",
    "en": "November 2026, ongoing"
   },
   "context": {
    "es": "Proyecto propio para aprender las bases de la IA generativa a partir de fuentes oficiales y usarlo después para enseñar a personas adultas de LATAM",
    "en": "A personal project to learn the foundations of generative AI from official sources and then use it to teach adults across Latin America"
   },
   "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "JSON",
    "Material 3 Expressive",
    "Playwright",
    "axe-core",
    "GitHub Pages",
    "Claude Code"
   ],
   "methods": {
    "es": [
     "Backward Design",
     "Eventos de Gagné",
     "Marco 4D de AI Fluency",
     "Competencias en IA de la UNESCO",
     "Kirkpatrick niveles 1 y 2"
    ],
    "en": [
     "Backward Design",
     "Gagné’s events",
     "AI Fluency 4D framework",
     "UNESCO AI competency frameworks",
     "Kirkpatrick levels 1 and 2"
    ]
   }
  },
  "links": [
   {
    "label": {
     "es": "Recorrer la versión en desarrollo",
     "en": "Explore the work-in-progress version"
    },
    "url": "https://lpedaci.github.io/taller-ia/#/inicio"
   },
   {
    "label": {
     "es": "Ver el repositorio en GitHub",
     "en": "View the GitHub repository"
    },
    "url": "https://github.com/lpedaci/taller-ia"
   }
  ],
  "blocks": [
   {
    "t": "prose",
    "h": {
     "es": "El desafío",
     "en": "The challenge"
    },
    "toc": {
     "es": "Desafío y público",
     "en": "Challenge and audience"
    },
    "p": [
     {
      "es": "Quería aprender las bases de la IA generativa desde las fuentes de quienes la desarrollan, y no desde listas de trucos que envejecen en semanas. El taller nace de ese recorrido: ordenar lo que publican Anthropic, Google, OpenAI y la UNESCO en un camino propio, en español, que después sirva para enseñar.",
      "en": "I wanted to learn the foundations of generative AI from the people who build it, not from lists of tricks that age in weeks. The workshop grew out of that journey: organising what Anthropic, Google, OpenAI and UNESCO publish into a path of my own, in Spanish, that can then be used to teach."
     },
     {
      "es": "El reto de diseño es que se sienta un **learning environment** y no una página de lectura: la persona entra, sabe en qué punto de su recorrido está, practica con actividades que le devuelven feedback y se va con productos propios, como su biblioteca de prompts y un plan de clase con IA.",
      "en": "The design challenge is to make it feel like a **learning environment** rather than a reading page: people come in, know where they are in their journey, practise with activities that give feedback and leave with their own outputs, such as a prompt library and a lesson plan that uses AI."
     }
    ]
   },
   {
    "t": "cards",
    "join": true,
    "h": {
     "es": "Para quién y para qué",
     "en": "Who it is for and why"
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "Aprender",
       "en": "Learning"
      },
      "tag": {
       "es": "Personas adultas, docentes y estudiantes mayores de 18",
       "en": "Adults, teachers and students over 18"
      },
      "body": {
       "es": "Personas sin formación técnica en IA, de Argentina y el resto de LATAM, que quieren usarla con criterio en su trabajo o en sus estudios. El taller es autoasistido: los módulos no se bloquean y cada persona elige su camino.",
       "en": "People with no technical background in AI, in Argentina and the rest of Latin America, who want to use it with judgement at work or in their studies. The workshop is self-paced: modules are never locked and each person chooses their path."
      }
     },
     {
      "title": {
       "es": "Enseñar",
       "en": "Teaching"
      },
      "tag": {
       "es": "Docentes y capacitadores",
       "en": "Teachers and trainers"
      },
      "body": {
       "es": "El mismo entorno sirve para dar clases sincrónicas: una guía para facilitadores módulo por módulo, rutas cortas para cursos parciales y las animaciones exportadas a video para proyectar.",
       "en": "The same environment supports live online classes: a module-by-module facilitator guide, short routes for partial courses and the animations exported to video for projecting in class."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados de aprendizaje",
     "en": "Learning outcomes"
    },
    "toc": {
     "es": "Diseño instruccional",
     "en": "Instructional design"
    },
    "items": {
     "es": [
      "Explicar qué es la IA generativa, cómo funciona un modelo de lenguaje y por qué se equivoca.",
      "Decidir qué tareas conviene delegar a la IA, cuáles no y en qué modalidad.",
      "Aplicar técnicas de ingeniería de prompts, de básicas a avanzadas, e iterar según el resultado.",
      "Evaluar críticamente lo que produce la IA: precisión, sesgos, alucinaciones y pertinencia.",
      "Usar la IA de forma responsable y cuidar los datos personales propios y ajenos según el marco legal.",
      "Elegir entre ChatGPT, Claude, Gemini y Copilot según la tarea.",
      "Crear código, imagen, audio y video con IA, y diseñar flujos simples de automatización.",
      "Diseñar actividades y materiales de formación que integren la IA de forma intencional."
     ],
     "en": [
      "Explain what generative AI is, how a language model works and why it gets things wrong.",
      "Decide which tasks are worth delegating to AI, which are not, and in which mode.",
      "Apply prompt engineering techniques, from basic to advanced, and iterate based on the result.",
      "Critically evaluate what AI produces: accuracy, bias, hallucinations and relevance.",
      "Use AI responsibly and protect one’s own and other people’s personal data under the law.",
      "Choose between ChatGPT, Claude, Gemini and Copilot depending on the task.",
      "Create code, images, audio and video with AI, and design simple automation flows.",
      "Design learning activities and materials that integrate AI with intent."
     ]
    },
    "foot": {
     "es": "Síntesis de los 11 resultados del brief, definidos antes que el contenido (Backward Design).",
     "en": "A summary of the 11 outcomes in the brief, defined before the content (Backward Design)."
    }
   },
   {
    "join": true,
    "t": "taskflow",
    "h": {
     "es": "De lo general a lo particular",
     "en": "From the general to the specific"
    },
    "note": {
     "es": "El marco y las técnicas van antes que las herramientas a propósito: las herramientas cambian todo el tiempo, el criterio no.",
     "en": "Framework and techniques come before tools on purpose: tools change all the time, judgement does not."
    },
    "steps": {
     "es": [
      "Comprender: qué es la IA y cómo funciona",
      "Criterio: el marco 4D y los prompts",
      "Ética y datos",
      "Asistentes: los cuatro principales y la voz",
      "Crear con IA: código, imagen, audio y video",
      "Automatizar: flujos y agentes",
      "Aplicar: diseñar formación y proyecto final"
     ],
     "en": [
      "Understand: what AI is and how it works",
      "Judgement: the 4D framework and prompting",
      "Ethics and data",
      "Assistants: the main four and voice",
      "Create with AI: code, image, audio and video",
      "Automate: flows and agents",
      "Apply: designing learning and a final project"
     ]
    }
   },
   {
    "join": true,
    "t": "roadmap",
    "h": {
     "es": "Cada lección, con los eventos de Gagné",
     "en": "Every lesson follows Gagné’s events"
    },
    "note": {
     "es": "Robert Gagné, psicólogo educativo, describió nueve eventos de instrucción: los pasos que ayudan a que alguien preste atención, procese lo nuevo y lo recuerde. Son una guía para ordenar una clase, no una receta. El taller los usa en forma liviana, adaptados a una lección en línea de 45 a 75 minutos.",
     "en": "Robert Gagné, an educational psychologist, described nine events of instruction: the steps that help someone pay attention, process new material and remember it. They are a guide for structuring a lesson, not a recipe. The workshop uses them in a light form, adapted to a 45 to 75 minute online lesson."
    },
    "steps": [
     {
      "code": "01",
      "title": {
       "es": "Gancho",
       "en": "Hook"
      },
      "body": {
       "es": "Una situación o pregunta que abre el tema.",
       "en": "A situation or question that opens the topic."
      }
     },
     {
      "code": "02",
      "title": {
       "es": "Objetivo visible",
       "en": "Visible objective"
      },
      "body": {
       "es": "Qué va a poder hacer la persona al terminar.",
       "en": "What the learner will be able to do by the end."
      }
     },
     {
      "code": "03",
      "title": {
       "es": "Activación",
       "en": "Activation"
      },
      "body": {
       "es": "Lo que ya sabe, antes de lo nuevo.",
       "en": "What they already know, before anything new."
      }
     },
     {
      "code": "04",
      "title": {
       "es": "Contenido breve",
       "en": "Short content"
      },
      "body": {
       "es": "Un concepto por paso, con animaciones y gráficos.",
       "en": "One concept per step, with animations and charts."
      }
     },
     {
      "code": "05",
      "title": {
       "es": "Práctica guiada",
       "en": "Guided practice"
      },
      "body": {
       "es": "Una actividad interactiva en cada lección.",
       "en": "An interactive activity in every lesson."
      }
     },
     {
      "code": "06",
      "title": {
       "es": "Feedback",
       "en": "Feedback"
      },
      "body": {
       "es": "Inmediato y explicativo, también cuando la respuesta es correcta.",
       "en": "Immediate and explanatory, also when the answer is right."
      }
     },
     {
      "code": "07",
      "title": {
       "es": "Evaluación corta",
       "en": "Short assessment"
      },
      "body": {
       "es": "Un chequeo formativo de 3 a 5 preguntas, con reintento.",
       "en": "A 3 to 5 question formative check, with retries."
      }
     },
     {
      "code": "08",
      "title": {
       "es": "Transferencia",
       "en": "Transfer"
      },
      "body": {
       "es": "Cómo lo usaría en su trabajo o en su aula.",
       "en": "How they would use it at work or in class."
      }
     }
    ]
   },
   {
    "join": true,
    "t": "kv",
    "h": {
     "es": "Rutas sugeridas y competencias",
     "en": "Suggested routes and competencies"
    },
    "note": {
     "es": "Seis rutas permiten usar el taller por partes en clases o cursos cortos. El avance se mide en 8 competencias con 4 niveles: Sin evidencia, Inicial, En desarrollo y Logrado.",
     "en": "Six routes make it possible to use the workshop in parts for classes or short courses. Progress is measured across 8 competencies with 4 levels: No evidence, Initial, Developing and Achieved."
    },
    "items": [
     {
      "k": {
       "es": "Esencial",
       "en": "Essential"
      },
      "v": {
       "es": "Bloques 1, 2 y 3, más los módulos 11 y 12",
       "en": "Blocks 1, 2 and 3, plus modules 11 and 12"
      }
     },
     {
      "k": {
       "es": "Creativa",
       "en": "Creative"
      },
      "v": {
       "es": "Bloques 1 y 2, más los módulos 15 a 17",
       "en": "Blocks 1 and 2, plus modules 15 to 17"
      }
     },
     {
      "k": {
       "es": "Técnica",
       "en": "Technical"
      },
      "v": {
       "es": "Bloques 1 y 2, más los módulos 14 y 18",
       "en": "Blocks 1 and 2, plus modules 14 and 18"
      }
     },
     {
      "k": {
       "es": "Idiomas y accesibilidad",
       "en": "Languages and accessibility"
      },
      "v": {
       "es": "Bloques 1 y 2, más los módulos 10 y 12",
       "en": "Blocks 1 and 2, plus modules 10 and 12"
      }
     },
     {
      "k": {
       "es": "Formadores",
       "en": "Trainers"
      },
      "v": {
       "es": "La ruta esencial más el bloque 7",
       "en": "The essential route plus block 7"
      }
     },
     {
      "k": {
       "es": "Taller completo",
       "en": "Full workshop"
      },
      "v": {
       "es": "Los 21 módulos, en el orden sugerido",
       "en": "All 21 modules, in the suggested order"
      }
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Decisiones de UX",
     "en": "UX decisions"
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "Medir lo que se aprende, no el tiempo",
       "en": "Measure learning, not time"
      },
      "tag": {
       "es": "Principio del sistema y D-024",
       "en": "System principle and D-024"
      },
      "body": {
       "es": "Sin horas en la plataforma, rachas ni días de inactividad. El inicio muestra objetivos demostrados con evidencias, competencias por nivel y un registro de actividad tipo GitHub que cuenta actividades por día. Los datos de ejemplo solo aparecen con ?demo=1.",
       "en": "No hours on the platform, streaks or inactive days. The home screen shows objectives demonstrated with evidence, competencies by level and a GitHub-style activity log that counts activities per day. Sample data only appears with ?demo=1."
      }
     },
     {
      "title": {
       "es": "Una agenda para la cursada",
       "en": "A schedule for the course"
      },
      "tag": {
       "es": "D-010 y D-027",
       "en": "D-010 and D-027"
      },
      "body": {
       "es": "Vista día, semana y mes, pendientes y eventos propios. Lo que ya pasó se atenúa con color y no con opacidad, para no perder contraste, y lleva la marca \"Finalizado\" escrita.",
       "en": "Day, week and month views, to-dos and personal events. Past items are dimmed with colour rather than opacity, so contrast is kept, and carry a written \"Finished\" label."
      }
     },
     {
      "title": {
       "es": "Navegación por clase de ventana",
       "en": "Navigation by window class"
      },
      "tag": {
       "es": "Material 3, D-009 y D-021",
       "en": "Material 3, D-009 and D-021"
      },
      "body": {
       "es": "Riel expandido en escritorio, colapsado en tablet y barra inferior con \"Más\" en celular. La búsqueda entra en la barra desde 1200 px; por debajo es un botón, para que nunca se corten el título ni las acciones.",
       "en": "An expanded rail on desktop, a collapsed one on tablet and a bottom bar with \"More\" on mobile. Search sits in the top bar from 1200 px; below that it becomes a button, so the title and actions are never cut off."
      }
     },
     {
      "title": {
       "es": "Texto que crece con la persona",
       "en": "Text that grows with the reader"
      },
      "tag": {
       "es": "D-071 y D-072",
       "en": "D-071 and D-072"
      },
      "body": {
       "es": "La tipografía pasó a rem y los cortes de ventana a em: con la letra del navegador al doble, el layout cambia de clase como con el zoom. Además, ninguna barra fija tapa el foco y el botón Atrás devuelve la altura y los filtros.",
       "en": "Type moved to rem and breakpoints to em: with the browser font doubled, the layout switches class as it does with zoom. No fixed bar hides the focus either, and the Back button restores scroll position and filters."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "join": true,
    "h": {
     "es": "El entorno",
     "en": "The environment"
    },
    "rowsOf": [
     2,
     1,
     2
    ],
    "images": [
     {
      "src": "taller-ia-01-inicio.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Inicio del Taller - IA en escritorio, con datos de ejemplo: saludo \"Buen día, Lourdes\", cuatro tarjetas de resumen (6 de 21 módulos completados, 13 de 38 objetivos demostrados, 13 evidencias y el próximo cierre), \"Continuar donde dejaste\" con los módulos en curso, pendientes y una agenda con calendario mensual.",
       "en": "Taller - IA home screen on desktop, with sample data: the greeting \"Good morning, Lourdes\", four summary cards (6 of 21 modules completed, 13 of 38 objectives demonstrated, 13 pieces of evidence and the next deadline), \"Continue where you left off\" with modules in progress, to-dos and a schedule with a monthly calendar."
      },
      "caption": {
       "es": "Inicio en escritorio, con el riel expandido.",
       "en": "Home on desktop, with the expanded rail."
      }
     },
     {
      "src": "taller-ia-02-inicio-celular.webp",
      "w": 780,
      "h": 1688,
      "alt": {
       "es": "El mismo inicio en un celular: tarjetas de resumen en dos columnas, la agenda debajo y la barra de navegación inferior con Inicio, Recorrido, Agenda, Aprendizaje y Más.",
       "en": "The same home screen on a phone: summary cards in two columns, the schedule below and the bottom navigation bar with Home, Journey, Schedule, Learning and More."
      },
      "caption": {
       "es": "En celular, barra inferior.",
       "en": "On mobile, a bottom bar."
      }
     },
     {
      "src": "taller-ia-04-recorrido.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Mi recorrido: la ruta elegida (\"Ruta esencial\", 6 de 13 módulos completados) y los bloques Comprender y Criterio con una tarjeta por módulo, su estado y la marca \"En tu ruta\".",
       "en": "My journey: the chosen route (\"Essential route\", 6 of 13 modules completed) and the Understand and Judgement blocks with one card per module, its status and the \"On your route\" mark."
      },
      "caption": {
       "es": "Mi recorrido, con la ruta elegida.",
       "en": "My journey, with the chosen route."
      }
     },
     {
      "src": "taller-ia-14-mi-aprendizaje.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Mi aprendizaje: dominio de competencias (13 de 38 objetivos demostrados) con el nivel de cada competencia escrito, objetivos personales, evidencias recientes y el próximo paso sugerido.",
       "en": "My learning: competency mastery (13 of 38 objectives demonstrated) with each competency level written out, personal goals, recent evidence and the suggested next step."
      },
      "caption": {
       "es": "Competencias y evidencias, sin tiempo en pantalla.",
       "en": "Competencies and evidence, no screen time."
      }
     },
     {
      "src": "taller-ia-15-agenda.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Agenda en vista semana: siete columnas del lunes al domingo con entregas, tutorías y encuentros sincrónicos, filtros por tipo de evento y el selector día, semana y mes.",
       "en": "Schedule in week view: seven columns from Monday to Sunday with deadlines, tutorials and live sessions, filters by event type and the day, week and month switch."
      },
      "caption": {
       "es": "Agenda en vista semana.",
       "en": "Schedule in week view."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Actividades y animaciones",
     "en": "Activities and animations"
    },
    "p": [
     {
      "es": "Cada lección tiene al menos una actividad, y el taller suma **25 tipos**: clasificar, predecir la palabra siguiente, mejorar un prompt en rondas, encontrar los errores de una respuesta, anonimizar un texto, armar un storyboard o leer la conversación de un agente, entre otros. Todas se completan con teclado, guardan borradores en el navegador y devuelven un feedback que explica el porqué.",
      "en": "Every lesson has at least one activity, and the workshop adds up to **25 types**: sorting, predicting the next word, improving a prompt in rounds, spotting the errors in an answer, anonymising a text, building a storyboard or reading an agent’s conversation, among others. All of them can be completed with the keyboard, save drafts in the browser and give feedback that explains why."
     }
    ]
   },
   {
    "t": "gallery",
    "join": true,
    "h": {
     "es": "Algunas actividades",
     "en": "Some of the activities"
    },
    "rowsOf": [
     3,
     3
    ],
    "images": [
     {
      "src": "taller-ia-06-marco-4d.webp",
      "w": 768,
      "h": 812,
      "alt": {
       "es": "Diagrama del marco 4D: Delegación, Descripción y Discernimiento en un ciclo que se repite hasta que sirve, envueltos por la Diligencia, y debajo las cuatro dimensiones con sus subcompetencias.",
       "en": "Diagram of the 4D framework: Delegation, Description and Discernment in a cycle that repeats until the result works, wrapped by Diligence, with the four dimensions and their sub-competencies below."
      },
      "caption": {
       "es": "El marco 4D, diagrama propio.",
       "en": "The 4D framework, an original diagram."
      }
     },
     {
      "src": "taller-ia-08-predictor.webp",
      "w": 768,
      "h": 719,
      "alt": {
       "es": "Actividad \"¿Qué palabra sigue?\": la frase \"Mañana tengo una reunión con el equipo y quiero\" y cuatro opciones con su probabilidad en barras (preparar 45 %, revisar 25 %, llegar 18 % y pedir 12 %).",
       "en": "The \"Which word comes next?\" activity: a Spanish sentence about a team meeting and four options with their probability shown as bars (45 %, 25 %, 18 % and 12 %)."
      },
      "caption": {
       "es": "Predictor de palabras, con datos fijos.",
       "en": "Word predictor, with fixed data."
      }
     },
     {
      "src": "taller-ia-07-clasificar.webp",
      "w": 768,
      "h": 990,
      "alt": {
       "es": "Actividad \"Ordená los ejemplos\": ocho tarjetas con situaciones cotidianas, cada una con un desplegable para ubicarla en una de tres columnas: sigue reglas fijas, clasifica o recomienda, o genera contenido nuevo.",
       "en": "The \"Sort the examples\" activity: eight cards with everyday situations, each with a drop-down to place it in one of three columns: follows fixed rules, classifies or recommends, or generates new content."
      },
      "caption": {
       "es": "Clasificar, con alternativa al arrastre.",
       "en": "Sorting, with an alternative to dragging."
      }
     },
     {
      "src": "taller-ia-09-subir-de-nivel.webp",
      "w": 768,
      "h": 624,
      "alt": {
       "es": "Actividad \"Subí de nivel\": un prompt para evaluar un curso que se mejora en tres rondas (mostrá ejemplos, separá las partes, pedí que piense antes) y un resultado final.",
       "en": "The \"Level up\" activity: a prompt for evaluating a course that is improved over three rounds (show examples, split the parts, ask it to think first) and a final result."
      },
      "caption": {
       "es": "Un prompt que mejora en rondas.",
       "en": "A prompt that improves in rounds."
      }
     },
     {
      "src": "taller-ia-10-corregir.webp",
      "w": 768,
      "h": 922,
      "alt": {
       "es": "Actividad \"Encontrá los errores\": el pedido hecho a la IA arriba y su respuesta debajo, con cada oración marcable para señalar las cifras inventadas o lo que no se pidió.",
       "en": "The \"Find the errors\" activity: the request made to the AI at the top and its answer below, with each sentence selectable to flag invented figures or anything that was not asked for."
      },
      "caption": {
       "es": "Discernimiento: corregir a la IA.",
       "en": "Discernment: correcting the AI."
      }
     },
     {
      "src": "taller-ia-11-anonimizar.webp",
      "w": 768,
      "h": 763,
      "alt": {
       "es": "Actividad \"Anonimizá este texto\": un correo de ejemplo con datos inventados (nombres, un diagnóstico, un DNI y un teléfono) en el que se tocan las partes que identifican o exponen a una persona.",
       "en": "The \"Anonymise this text\" activity: a sample email with invented data (names, a diagnosis, an ID number and a phone number) where the learner taps the parts that identify or expose a person."
      },
      "caption": {
       "es": "Datos personales, con casos inventados.",
       "en": "Personal data, with invented cases."
      }
     }
    ]
   },
   {
    "join": true,
    "t": "gallery",
    "h": {
     "es": "Animaciones propias",
     "en": "Original animations"
    },
    "note": {
     "es": "Nueve animaciones propias explican lo que cuesta ver: la predicción de tokens, la ventana de contexto, el ciclo 4D, qué pasa con los datos, la difusión, el agente, RAG, el flujo con revisión humana y el modo de voz. Cada una tiene guion, controles, narración, transcripción y una versión estática con movimiento reducido, y se exporta a MP4 en 1920 x 1080 con subtítulos para proyectarla en clase.",
     "en": "Nine original animations explain what is hard to see: token prediction, the context window, the 4D cycle, what happens to data, diffusion, agents, RAG, a flow with human review and voice mode. Each one has a script, controls, narration, a transcript and a static version with reduced motion, and is exported to 1920 x 1080 MP4 with subtitles for projecting in class."
    },
    "wide": true,
    "images": [
     {
      "src": "taller-ia-12-animacion-tokens.webp",
      "w": 768,
      "h": 778,
      "alt": {
       "es": "Animación \"Cómo escribe un asistente: de a un fragmento por vez\", en modo claro: una burbuja de chat que se completa palabra por palabra, la barra de escenas, la velocidad, el botón Narración y la descripción de la escena 1 de 5.",
       "en": "The \"How an assistant writes: one fragment at a time\" animation, in light mode: a chat bubble that fills in word by word, the scene bar, playback speed, the Narration button and the description of scene 1 of 5."
      },
      "caption": {
       "es": "Predicción de tokens, en modo claro.",
       "en": "Token prediction, in light mode."
      }
     },
     {
      "src": "taller-ia-13-animacion-agente.webp",
      "w": 768,
      "h": 778,
      "alt": {
       "es": "Animación \"Cómo trabaja un agente\", en modo oscuro: una caja Objetivo con una flecha hacia Planifica, el texto en pantalla \"Le das un objetivo. El agente lo divide en pasos.\" y los controles del reproductor.",
       "en": "The \"How an agent works\" animation, in dark mode: an Objective box with an arrow to Plan, the on-screen text \"You give it a goal. The agent splits it into steps.\" and the player controls."
      },
      "caption": {
       "es": "El agente, en modo oscuro.",
       "en": "The agent, in dark mode."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Sistema de diseño",
     "en": "Design system"
    },
    "p": [
     {
      "es": "El taller usa un design system propio sobre **Material 3 Expressive**: tokens de color, tipografía, forma y movimiento generados desde una semilla, en modo claro y oscuro y con contraste estándar, medio y alto. La terciaria, un tono miel, se reserva para lo relacionado con el tiempo (agenda, pendientes y cierres) y los niveles de competencia van en la escala azul, siempre con su nombre escrito.",
      "en": "The workshop uses its own design system built on **Material 3 Expressive**: colour, type, shape and motion tokens generated from a seed, in light and dark mode and with standard, medium and high contrast. The tertiary, a honey tone, is kept for anything time-related (schedule, to-dos and deadlines), and competency levels use the blue scale, always with their name written out."
     },
     {
      "es": "estilos.html reúne todos los tokens y componentes con un selector de tema y contraste. Y las reglas no quedan en un documento: npm run auditar revisa cada pantalla en 5 anchos y los dos modos contra el sistema (campos, botones, orden de las acciones, escala tipográfica, forma, espaciado en múltiplos de 4, íconos y color del texto), y cada excepción se documenta.",
      "en": "estilos.html brings together every token and component with a theme and contrast switch. And the rules do not just live in a document: npm run auditar checks every screen at 5 widths and in both modes against the system (fields, buttons, action order, type scale, shape, spacing in multiples of 4, icons and text colour), and every exception is documented."
     }
    ]
   },
   {
    "t": "gallery",
    "join": true,
    "h": {
     "es": "Tokens y temas",
     "en": "Tokens and themes"
    },
    "wide": true,
    "images": [
     {
      "src": "taller-ia-18-estilos.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Página estilos.html del Taller - IA: el título \"Tokens y componentes\", pestañas por sección (color, tipografía, forma, espaciado, componentes, gráficos y estados), los selectores de tema y contraste, y los roles de color de M3 en muestras.",
       "en": "The Taller - IA estilos.html page: the heading \"Tokens and components\", tabs per section (colour, type, shape, spacing, components, charts and states), the theme and contrast switches, and the M3 colour roles as swatches."
      },
      "caption": {
       "es": "estilos.html, con selector de tema y contraste.",
       "en": "estilos.html, with a theme and contrast switch."
      }
     },
     {
      "src": "taller-ia-03-inicio-oscuro.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "El inicio del taller en modo oscuro, con el riel, las tarjetas de resumen, los pendientes y la agenda sobre superficies oscuras.",
       "en": "The workshop home screen in dark mode, with the rail, summary cards, to-dos and schedule on dark surfaces."
      },
      "caption": {
       "es": "El mismo inicio, en modo oscuro.",
       "en": "The same home screen, in dark mode."
      }
     }
    ]
   },
   {
    "t": "compare",
    "h": {
     "es": "Accesibilidad y verificación",
     "en": "Accessibility and verification"
    },
    "note": {
     "es": "Objetivo WCAG 2.2 AA. Cada punto que se puede comprobar con un programa es un comando que se vuelve a correr, así la revisión no es de una sola vez.",
     "en": "Target: WCAG 2.2 AA. Every check a program can run is a command that can be run again, so review is never a one-off."
    },
    "cols": {
     "dim": {
      "es": "Comando",
      "en": "Command"
     },
     "before": {
      "es": "Qué revisa",
      "en": "What it checks"
     },
     "after": {
      "es": "Último resultado",
      "en": "Latest result"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "npm run verificar",
       "en": "npm run verificar"
      },
      "before": {
       "es": "75 pantallas en 6 anchos (360 a 1920 px), claro y oscuro: axe-core, scroll horizontal, áreas táctiles de 48 px, consola, movimiento reducido, rayas y puntos medios, y el design system.",
       "en": "75 screens at 6 widths (360 to 1920 px), light and dark: axe-core, horizontal scroll, 48 px touch targets, console, reduced motion, dashes and middle dots, and the design system."
      },
      "after": {
       "es": "900 capturas, sin problemas",
       "en": "900 screenshots, no issues"
      }
     },
     {
      "dim": {
       "es": "npm run auditar",
       "en": "npm run auditar"
      },
      "before": {
       "es": "Cada pantalla contra las reglas verificables del design system, en 5 anchos y los dos modos.",
       "en": "Every screen against the design system’s verifiable rules, at 5 widths and in both modes."
      },
      "after": {
       "es": "El sistema se cumple",
       "en": "The system holds"
      }
     },
     {
      "dim": {
       "es": "npm run contraste",
       "en": "npm run contraste"
      },
      "before": {
       "es": "Las 75 pantallas con contraste alto, en claro y oscuro, y que el progreso se mantenga al cerrar el navegador.",
       "en": "All 75 screens with high contrast, light and dark, and that progress survives closing the browser."
      },
      "after": {
       "es": "Sin problemas; el progreso se mantiene",
       "en": "No issues; progress is kept"
      }
     },
     {
      "dim": {
       "es": "npm run letra",
       "en": "npm run letra"
      },
      "before": {
       "es": "La letra del navegador al doble en 4 clases de ventana: que el texto crezca, sin scroll horizontal ni texto cortado.",
       "en": "The browser font doubled across 4 window classes: text grows, with no horizontal scroll or clipped text."
      },
      "after": {
       "es": "Sin texto cortado",
       "en": "No clipped text"
      }
     },
     {
      "dim": {
       "es": "npm run textos",
       "en": "npm run textos"
      },
      "before": {
       "es": "Los 3.669 textos del contenido: rayas, inglés sin traducir, citas sin original, signos sin par y menciones a menores.",
       "en": "All 3,669 content strings: dashes, untranslated English, quotes without the original, unpaired signs and mentions of minors."
      },
      "after": {
       "es": "Sin hallazgos",
       "en": "No findings"
      }
     },
     {
      "dim": {
       "es": "npm run enlaces",
       "en": "npm run enlaces"
      },
      "before": {
       "es": "Que todos los enlaces externos respondan.",
       "en": "That every external link responds."
      },
      "after": {
       "es": "95 de 96 funcionan; 1 se revisa a mano",
       "en": "95 of 96 work; 1 is checked by hand"
      }
     }
    ]
   },
   {
    "t": "gallery",
    "join": true,
    "single": true,
    "h": {
     "es": "Diagnóstico sin instalar nada",
     "en": "Diagnostics with nothing to install"
    },
    "note": {
     "es": "Con ?diagnostico=1 aparece un panel que analiza la pantalla actual con axe-core, en español, y permite verla en anchos de celular, tablet y escritorio. Se suma a la prueba de teclado de los 25 tipos de actividad, que es manual. Lo que ningún programa reemplaza queda pendiente: lectores de pantalla y personas usuarias.",
     "en": "With ?diagnostico=1 a panel appears that runs axe-core on the current screen, in Spanish, and lets you view it at mobile, tablet and desktop widths. It adds to the keyboard test of all 25 activity types, done by hand. What no program can replace is still pending: screen readers and real users."
    },
    "images": [
     {
      "src": "taller-ia-19-diagnostico.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Inicio del taller con el panel \"Diagnóstico de accesibilidad\" abierto en la esquina inferior derecha: \"Sin problemas automáticos en #/inicio\" y la aclaración de que las pruebas automáticas detectan solo una parte de los problemas.",
       "en": "The workshop home screen with the \"Accessibility diagnostics\" panel open in the bottom right corner: \"No automatic issues on #/inicio\" and a note that automated tests only catch part of the problems."
      }
     }
    ]
   },
   {
    "t": "prose",
    "h": {
     "es": "Fuentes y contenido",
     "en": "Sources and content"
    },
    "p": [
     {
      "es": "El contenido es original y en español: sintetiza con palabras propias lo que publican Anthropic, Google, OpenAI, la UNESCO y autores de referencia, y enlaza cada fuente. Las citas textuales son pocas y cortas, y se muestran traducidas con el original debajo, en tamaño chico, con su idioma marcado para los lectores de pantalla y la etiqueta \"Traducción oficial\" o \"Traducción propia\".",
      "en": "The content is original and in Spanish: it summarises, in my own words, what Anthropic, Google, OpenAI, UNESCO and reference authors publish, and links every source. Verbatim quotes are few and short, shown translated with the original below in a smaller size, with its language marked for screen readers and an \"Official translation\" or \"Own translation\" label."
     },
     {
      "es": "El **glosario** tiene 40 términos, con el original en inglés, una definición propia y el módulo donde se explican. La **Biblioteca** reúne 56 fuentes en APA 7, filtrables por bloque, nivel, idioma y tipo, con una línea sobre por qué leer cada una. Los datos que cambian rápido (funciones de cada asistente, leyes de la región) viven en archivos aparte, con fecha y fuente.",
      "en": "The **glossary** has 40 terms, with the English original, an original definition and the module where each one is explained. The **Library** gathers 56 sources in APA 7, filterable by block, level, language and type, with a line on why each one is worth reading. Fast-changing data (each assistant’s features, laws across the region) lives in separate files, with a date and a source."
     }
    ]
   },
   {
    "t": "gallery",
    "join": true,
    "h": {
     "es": "Glosario y Biblioteca",
     "en": "Glossary and Library"
    },
    "wide": true,
    "images": [
     {
      "src": "taller-ia-17-glosario.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Glosario: buscador, índice de letras y los términos Agente, Ajuste fino y Alucinación, cada uno con su original en inglés en cursiva, una definición propia y el enlace al módulo donde se explica.",
       "en": "Glossary: search box, letter index and the terms Agent, Fine-tuning and Hallucination, each with the English original in italics, an original definition and a link to the module where it is explained."
      },
      "caption": {
       "es": "Glosario, con el término original.",
       "en": "Glossary, with the original term."
      }
     },
     {
      "src": "taller-ia-16-biblioteca.webp",
      "w": 1440,
      "h": 900,
      "alt": {
       "es": "Biblioteca: filtros por bloque, nivel, idioma y tipo, el total de 56 fuentes y tarjetas con el título, por qué leerlo, la referencia en APA 7, etiquetas de tipo, nivel e idioma y los módulos donde se usa.",
       "en": "Library: filters by block, level, language and type, the total of 56 sources and cards with the title, why to read it, the APA 7 reference, type, level and language tags and the modules where it is used."
      },
      "caption": {
       "es": "Biblioteca, con referencias en APA 7.",
       "en": "Library, with APA 7 references."
      }
     }
    ]
   },
   {
    "t": "taskflow",
    "h": {
     "es": "Cómo trabajo con IA",
     "en": "How I work with AI"
    },
    "note": {
     "es": "Yo decido y valido; Claude Code implementa. Cada pedido queda registrado, y nada se aprueba sin verificar.",
     "en": "I decide and validate; Claude Code implements. Every request is logged, and nothing is approved without verification."
    },
    "steps": {
     "es": [
      "Escribo el brief como especificación",
      "Hago un pedido con mis palabras",
      "Claude Code lo reformula como especificación",
      "Lo registra en DECISIONES.md",
      "Implementa y corre la verificación",
      "Reviso y apruebo o pido cambios"
     ],
     "en": [
      "I write the brief as a specification",
      "I make a request in my own words",
      "Claude Code restates it as a specification",
      "It logs it in DECISIONES.md",
      "It implements and runs the checks",
      "I review and approve or ask for changes"
     ]
    }
   },
   {
    "t": "prose",
    "join": true,
    "h": {
     "es": "Brief, registro y verificación",
     "en": "Brief, log and verification"
    },
    "p": [
     {
      "es": "El brief define el público, los resultados de aprendizaje, el marco pedagógico, el design system, las etapas y los criterios de aceptación. Sobre esa base, DECISIONES.md lleva una entrada por pedido (D-001 a D-073 al día de hoy) con lo solicitado, la decisión y su motivo, los archivos afectados, la verificación y lo que queda pendiente. Cuando el brief se contradice, la inconsistencia se anota y se resuelve conmigo, como la cantidad de bloques del recorrido (D-003) o el uso de la terciaria (D-004).",
      "en": "The brief defines the audience, learning outcomes, pedagogical framework, design system, stages and acceptance criteria. On that basis, DECISIONES.md keeps one entry per request (D-001 to D-073 so far) with what was asked, the decision and its rationale, the files affected, the verification and what is still pending. When the brief contradicts itself, the inconsistency is logged and resolved with me, as with the number of blocks in the journey (D-003) or the use of the tertiary colour (D-004)."
     },
     {
      "es": "La IA acelera la construcción, pero no reemplaza el criterio: el diseño instruccional, el recorte del contenido, la curaduría de fuentes y la aprobación de cada etapa son míos.",
      "en": "AI speeds up the build, but it does not replace judgement: the instructional design, the scope of the content, the curation of sources and the sign-off on each stage are mine."
     }
    ]
   },
   {
    "t": "preview",
    "h": {
     "es": "Recorrer el taller",
     "en": "Explore the workshop"
    },
    "url": "https://lpedaci.github.io/taller-ia/?demo=1#/inicio",
    "img": {
     "src": "taller-ia-05-leccion.webp",
     "w": 1440,
     "h": 900
    },
    "kicker": {
     "es": "En desarrollo",
     "en": "In progress"
    },
    "title": {
     "es": "Una lección con su barra de pasos",
     "en": "A lesson with its step bar"
    },
    "body": {
     "es": "La versión publicada ya tiene los 21 módulos. Con ?demo=1, el inicio y Mi aprendizaje muestran datos de ejemplo; sin ese parámetro, el progreso empieza vacío y se guarda solo en tu navegador.",
     "en": "The published version already has all 21 modules. With ?demo=1, the home screen and My learning show sample data; without it, progress starts empty and is saved only in your browser."
    },
    "cta": {
     "es": "Recorrer la versión en desarrollo",
     "en": "Explore the work-in-progress version"
    }
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Dakan, R., Feller, J. y Anthropic. (s.f.).",
       "en": "Dakan, R., Feller, J., & Anthropic. (n.d.)."
      },
      "title": {
       "es": "AI Fluency: Framework & Foundations",
       "en": "AI Fluency: Framework & Foundations"
      },
      "post": {
       "es": " [Curso en línea]. Anthropic Academy.",
       "en": " [Online course]. Anthropic Academy."
      },
      "url": "https://anthropic.skilljar.com/ai-fluency-framework-foundations"
     },
     {
      "pre": {
       "es": "Gagné, R. M. (1985).",
       "en": "Gagné, R. M. (1985)."
      },
      "title": {
       "es": "The conditions of learning and theory of instruction",
       "en": "The conditions of learning and theory of instruction"
      },
      "post": {
       "es": " (4.ª ed.). Holt, Rinehart and Winston.",
       "en": " (4th ed.). Holt, Rinehart and Winston."
      }
     },
     {
      "pre": {
       "es": "Google. (s.f.).",
       "en": "Google. (n.d.)."
      },
      "title": {
       "es": "Material Design 3",
       "en": "Material Design 3"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://m3.material.io/"
     },
     {
      "pre": {
       "es": "Kirkpatrick, D. L. y Kirkpatrick, J. D. (2006).",
       "en": "Kirkpatrick, D. L., & Kirkpatrick, J. D. (2006)."
      },
      "title": {
       "es": "Evaluating training programs: The four levels",
       "en": "Evaluating training programs: The four levels"
      },
      "post": {
       "es": " (3.ª ed.). Berrett-Koehler.",
       "en": " (3rd ed.). Berrett-Koehler."
      }
     },
     {
      "pre": {
       "es": "UNESCO. (2024).",
       "en": "UNESCO. (2024)."
      },
      "title": {
       "es": "AI competency framework for students",
       "en": "AI competency framework for students"
      },
      "post": {
       "es": ". UNESCO.",
       "en": ". UNESCO."
      },
      "url": "https://www.unesco.org/en/articles/ai-competency-framework-students"
     },
     {
      "pre": {
       "es": "UNESCO. (2024).",
       "en": "UNESCO. (2024)."
      },
      "title": {
       "es": "AI competency framework for teachers",
       "en": "AI competency framework for teachers"
      },
      "post": {
       "es": ". UNESCO.",
       "en": ". UNESCO."
      },
      "url": "https://www.unesco.org/en/articles/ai-competency-framework-teachers"
     },
     {
      "pre": {
       "es": "W3C. (2023).",
       "en": "W3C. (2023)."
      },
      "title": {
       "es": "Web Content Accessibility Guidelines (WCAG) 2.2",
       "en": "Web Content Accessibility Guidelines (WCAG) 2.2"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.w3.org/TR/WCAG22/"
     },
     {
      "pre": {
       "es": "Wiggins, G. y McTighe, J. (2005).",
       "en": "Wiggins, G., & McTighe, J. (2005)."
      },
      "title": {
       "es": "Understanding by design",
       "en": "Understanding by design"
      },
      "post": {
       "es": " (2.ª ed.). ASCD.",
       "en": " (2nd ed.). ASCD."
      }
     }
    ]
   }
  ],
  "outcome": {
   "h": {
    "es": "Estado y próximos pasos",
    "en": "Status and next steps"
   },
   "body": [
    {
     "es": "**Hecho:** las 10 etapas del brief están construidas y verificadas. Los 21 módulos tienen lección y actividades, las nueve animaciones tienen su MP4 con subtítulos, y están el glosario, la Biblioteca, el diario de aprendizaje, el portafolio imprimible y la guía para facilitadores. Los 23 criterios de aceptación del brief se cumplen (D-070).",
     "en": "**Done:** all 10 stages of the brief are built and verified. The 21 modules have a lesson and activities, the nine animations have their MP4 with subtitles, and the glossary, Library, learning journal, printable portfolio and facilitator guide are in place. All 23 acceptance criteria in the brief are met (D-070)."
    },
    {
     "es": "**Falta:** lo que no se comprueba con un programa. Probarlo con lectores de pantalla (NVDA, VoiceOver y TalkBack) y con personas usuarias; una lectura completa de los 21 módulos; confirmar en la fuente oficial las leyes de México y Perú, cuyos sitios no se dejan leer, y una función de Copilot; revisar el tono del glosario, los dilemas y las narraciones; y probar la letra agrandada en teléfonos reales.",
     "en": "**Still to do:** what no program can check. Testing with screen readers (NVDA, VoiceOver and TalkBack) and with real users; a full read-through of the 21 modules; confirming the Mexican and Peruvian laws at the official source, whose sites cannot be read automatically, and one Copilot feature; reviewing the tone of the glossary, dilemmas and narrations; and testing enlarged text on real phones."
    },
    {
     "es": "**Qué se va a medir al dictarlo:** con Kirkpatrick como referencia, la reacción (nivel 1) con una encuesta de cierre opcional y el aprendizaje (nivel 2) con el autodiagnóstico inicial y final, los objetivos demostrados con evidencias y el proyecto final evaluado con rúbrica.",
     "en": "**What will be measured when it runs:** using Kirkpatrick as a reference, reaction (level 1) with an optional closing survey and learning (level 2) with the initial and final self-assessment, objectives demonstrated with evidence and the final project assessed with a rubric."
    }
   ]
  }
 },
 "taller-ciclosuperior": {
  "cat": "cap",
  "touch": "it",
  "title": {
   "es": "Taller - Ciclo superior",
   "en": "Workshop - Higher education pathways"
  },
  "subtitle": {
   "es": "Un taller de desarrollo de carrera que se dicta desde 2019 a estudiantes de 6to y 7mo año de Informática y a adultos que buscan insertarse o reinsertarse en el mundo académico, rediseñado en 2026 como una ruta de aprendizaje autodirigido de diez paradas y tres apartados especiales: entender la oferta de formación, tomar decisiones informadas y seguir capacitándose a su ritmo, con fechas reales del ingreso 2027.",
   "en": "A career development workshop delivered since 2019 to sixth- and seventh-year computing students and to adults looking to enter or return to higher education, redesigned in 2026 as a self-directed learning path with ten stops and three special sections: understanding the education on offer, making informed decisions and keeping on learning at their own pace, with real dates for the 2027 intake."
  },
  "chips": {
   "es": [
    "LXD",
    "UX/UI",
    "Aprendizaje autodirigido",
    "Desarrollo de carrera",
    "Design system",
    "Accesibilidad"
   ],
   "en": [
    "LXD",
    "UX/UI",
    "Self-directed learning",
    "Career development",
    "Design system",
    "Accessibility"
   ]
  },
  "summary": {
   "problem": {
    "es": "La charla existía como diapositivas que crecían cada año con nuevas preguntas de los estudiantes. La información (fechas de inscripción, programas, herramientas del mercado, normativa de títulos) queda vieja de un año al otro, y lo que se ve en una charla se olvida antes de la inscripción, que en muchos casos cierra mientras el estudiante todavía está en la escuela.",
    "en": "The talk lived as a slide deck that grew every year with new questions from students. The information (application dates, programmes, the tools the market asks for, rules on qualifications) goes out of date from one year to the next, and what is covered in a talk is forgotten before applications open, which often close while students are still at school."
   },
   "solution": {
    "es": "Una ruta de aprendizaje autodirigido que sirve para dar el taller y como recurso de consulta permanente (performance support) hasta la inscripción: cada parada con idea clave, cifras citadas y una actividad; fechas de inscripción que muestran su estado según el día; herramientas para la toma de decisiones informada (comparador de planes, escala sin el 7), trabajo sobre autoconocimiento y propósito, y avance guardado para seguir a su ritmo.",
    "en": "A self-directed learning path that works both for running the workshop and as performance support until the day of application: every stop has a key idea, cited figures and an activity; application dates show their status based on today’s date; there are tools for informed decision-making (a study plan comparison, a 1-to-10 scale with no 7), work on self-awareness and purpose, and saved progress so people can carry on at their own pace."
   },
   "results": [
    {
     "v": "~80",
     "l": {
      "es": "estudiantes por año en la escuela desde 2019, en Informática A y B",
      "en": "students a year at the school since 2019, across computing groups A and B"
     }
    },
    {
     "v": "3",
     "l": {
      "es": "públicos: 6to año, 7mo año y adultos que vuelven a estudiar",
      "en": "audiences: sixth year, seventh year and adults returning to study"
     }
    },
    {
     "v": "10",
     "l": {
      "es": "paradas y tres apartados especiales, nacidos de las preguntas de los estudiantes",
      "en": "stops and three special sections, born from students’ questions"
     }
    },
    {
     "t": {
      "es": "El contenido creció con la demanda de cada cohorte (programación, ingeniería frente a licenciatura, psicología) y en 2026 pasó a una ruta de autocapacitación a la que se puede volver cuando haga falta decidir.",
      "en": "The content grew with each cohort’s questions (programming, engineering versus a bachelor’s degree, psychology) and in 2026 became a self-paced learning path people can come back to whenever they need to decide."
     }
    }
   ]
  },
  "facts": {
   "role": {
    "es": "Experience Designer: diseño UX/UI e instruccional, investigación y actualización anual del contenido, desarrollo del sitio (HTML/CSS/JS), animaciones y dictado de la charla",
    "en": "Experience Designer: UX/UI and instructional design, research and yearly content updates, site development (HTML/CSS/JS), animations and delivering the talk"
   },
   "timeline": {
    "es": "Charla dictada todos los años desde 2019; sitio web en octubre de 2026, para el ingreso 2027",
    "en": "Talk delivered every year since 2019; website built in October 2026, for the 2027 intake"
   },
   "context": {
    "es": "6to y 7mo año de secundaria técnica, modalidad Informática (cursos A y B, unos 80 estudiantes por año), Instituto Leonardo Murialdo; y adultos que buscan insertarse o reinsertarse en el mundo académico",
    "en": "Sixth and seventh year of technical secondary school, computing track (groups A and B, about 80 students a year), Instituto Leonardo Murialdo; and adults looking to enter or return to higher education"
   },
   "stack": [
    "HTML/CSS/JS",
    "GitHub Pages",
    "Web Storage (localStorage)",
    "HyperFrames",
    "GSAP"
   ],
   "methods": [
    "Doble Diamante",
    "Aprendizaje autodirigido",
    "Performance support",
    "Arquitectura de información",
    "Sistema de diseño",
    "Auditoría WCAG 2.2 AA",
    "APA 7"
   ]
  },
  "links": [
   {
    "label": {
     "es": "Sitio de la charla (en vivo)",
     "en": "Career talk site (live)"
    },
    "url": "https://lpedaci.github.io/taller-ciclosuperior/"
   }
  ],
  "blocks": [
   {
    "t": "quote",
    "h": {
     "es": "El problema",
     "en": "The problem"
    },
    "body": {
     "es": "Quien termina la secundaria tiene que elegir carrera, institución y fechas de inscripción dentro de un sistema que nadie le explicó, y esa información cambia todos los años.",
     "en": "Anyone finishing secondary school has to choose a degree, an institution and application dates within a system nobody explained to them, and that information changes every year."
    },
    "p": [
     {
      "es": "El taller tiene tres públicos: estudiantes de 6to año, estudiantes de 7mo año y adultos que buscan insertarse o reinsertarse en el mundo académico. A los tres les falta lo mismo: un mapa del nivel superior y criterios para decidir.",
      "en": "The workshop has three audiences: sixth-year students, seventh-year students and adults looking to enter or return to higher education. All three are missing the same thing: a map of higher education and criteria for deciding."
     }
    ],
    "toc": {
     "es": "El problema y el proceso",
     "en": "The problem and the process"
    }
   },
   {
    "t": "diamond",
    "join": true,
    "h": {
     "es": "Proceso: Doble Diamante",
     "en": "Process: Double Diamond"
    },
    "note": {
     "es": "El rediseño se ordenó en los cuatro momentos del Doble Diamante: entender el problema, definir qué resolver, explorar cómo y entregar algo que funcione.",
     "en": "The redesign followed the four moments of the Double Diamond: understand the problem, define what to solve, explore how, and deliver something that works."
    },
    "ends": [
     {
      "es": "Preguntas de cada cohorte",
      "en": "Each cohort’s questions"
     },
     {
      "es": "Problema definido",
      "en": "Defined problem"
     },
     {
      "es": "Sitio publicado",
      "en": "Published site"
     }
    ],
    "phases": [
     {
      "name": "Discover",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Qué necesitan saber antes de elegir qué estudiar?",
       "en": "What do they need to know before choosing what to study?"
      },
      "items": {
       "es": [
        "Preguntas de siete cohortes",
        "Contenido que caduca",
        "Datos del mercado"
       ],
       "en": [
        "Seven cohorts of questions",
        "Content that expires",
        "Market data"
       ]
      }
     },
     {
      "name": "Define",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Qué entra en la charla y qué queda para después?",
       "en": "What goes into the talk and what stays for later?"
      },
      "items": {
       "es": [
        "How Might We",
        "Criterios de éxito"
       ],
       "en": [
        "How Might We",
        "Success criteria"
       ]
      }
     },
     {
      "name": "Develop",
      "mode": {
       "es": "divergir",
       "en": "diverge"
      },
      "q": {
       "es": "¿Cómo se convierte una presentación en un recorrido?",
       "en": "How does a slide deck become a journey?"
      },
      "items": {
       "es": [
        "Arquitectura en dos líneas",
        "Apartados especiales",
        "Decisiones de diseño",
        "Design system"
       ],
       "en": [
        "Two-line architecture",
        "Special sections",
        "Design decisions",
        "Design system"
       ]
      }
     },
     {
      "name": "Deliver",
      "mode": {
       "es": "converger",
       "en": "converge"
      },
      "q": {
       "es": "¿Funciona? ¿Qué entregamos?",
       "en": "Does it work? What do we ship?"
      },
      "items": {
       "es": [
        "Sitio publicado",
        "Accesibilidad",
        "Resultados",
        "Próximos pasos"
       ],
       "en": [
        "Published site",
        "Accessibility",
        "Results",
        "Next steps"
       ]
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "01",
    "name": "Discover",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Entender qué necesita saber alguien de 17 años antes de elegir qué estudiar.",
     "en": "Understand what a 17-year-old needs to know before choosing what to study."
    }
   },
   {
    "t": "prose",
    "h": {
     "es": "De dónde surge",
     "en": "Where it comes from"
    },
    "p": [
     {
      "es": "El taller se dicta todos los años desde 2019 en el Instituto Leonardo Murialdo, con los cursos A y B de la modalidad Informática, en 6to y 7mo año: unos 80 estudiantes por año. También se dicta a adultos que buscan insertarse o reinsertarse en el mundo académico. Los tres públicos comparten la misma necesidad: entender un sistema que nadie les explicó y **decidir con información**.",
      "en": "The workshop has been delivered every year since 2019 at Instituto Leonardo Murialdo, to computing groups A and B in sixth and seventh year: about 80 students a year. It is also delivered to adults looking to enter or return to higher education. All three audiences share the same need: to understand a system nobody explained to them and to **decide with information**."
     },
     {
      "es": "Hasta 2025 fue una presentación de PowerPoint (Pedaci, 2025). Cada año había que rehacer fechas, ejemplos y herramientas, y lo que se veía en la charla se olvidaba antes de la inscripción. Para el ingreso 2027, la inscripción de la UTN.BA va del 27 de agosto al 4 de diciembre de 2026 y la de la UNTREF, del 5 de octubre al 6 de noviembre (Universidad Tecnológica Nacional, Facultad Regional Buenos Aires [UTN.BA], 2026; Universidad Nacional de Tres de Febrero [UNTREF], 2026): las dos cierran antes de que terminen las clases.",
      "en": "Until 2025 it was a PowerPoint deck (Pedaci, 2025). Every year the dates, examples and tools had to be redone, and what was covered in the talk was forgotten before applications opened. For the 2027 intake, applications to UTN.BA run from 27 August to 4 December 2026 and to UNTREF from 5 October to 6 November (Universidad Tecnológica Nacional, Facultad Regional Buenos Aires [UTN.BA], 2026; Universidad Nacional de Tres de Febrero [UNTREF], 2026): both close before the school year ends."
     },
     {
      "es": "El contexto también cambia. La versión 2027 suma el conflicto por el financiamiento universitario (Chequeado, 2026), los títulos y analíticos digitales (Resolución CFE N.º 440/23, 2023; Disposición 15/2025, 2025) y las becas Manuel Belgrano y Progresar (MDZ, 2026; Canal 26, 2026).",
      "en": "The context changes too. The 2027 version adds the dispute over university funding (Chequeado, 2026), digital diplomas and transcripts (Resolución CFE N.º 440/23, 2023; Disposición 15/2025, 2025) and the Manuel Belgrano and Progresar grants (MDZ, 2026; Canal 26, 2026)."
     }
    ]
   },
   {
    "t": "compare",
    "accent": true,
    "h": {
     "es": "Qué quedó viejo en un año",
     "en": "What went out of date in a year"
    },
    "note": {
     "es": "Las filas del desplegable «Qué cambió desde la versión anterior de esta charla», en el apartado de programación. En un año, siete referencias del temario quedaron viejas: el contenido necesitaba un formato que se pudiera actualizar sin rehacerlo.",
     "en": "The rows of the “What changed since the previous version of this talk” panel, in the programming section. In one year, seven references in the syllabus went out of date: the content needed a format that could be updated without starting over."
    },
    "cols": {
     "dim": {
      "es": "Tema",
      "en": "Topic"
     },
     "before": {
      "es": "Versión 2025",
      "en": "2025 version"
     },
     "after": {
      "es": "Versión 2027",
      "en": "2027 version"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "Apps móviles multiplataforma",
       "en": "Cross-platform mobile apps"
      },
      "before": {
       "es": "Xamarin",
       "en": "Xamarin"
      },
      "after": {
       "es": ".NET MAUI: Xamarin dejó de tener soporte el 1 de mayo de 2024 (Microsoft, s.f.).",
       "en": ".NET MAUI: Xamarin support ended on 1 May 2024 (Microsoft, n.d.)."
      }
     },
     {
      "dim": {
       "es": "Servidores y virtualización",
       "en": "Servers and virtualisation"
      },
      "before": {
       "es": "BladeCenter",
       "en": "BladeCenter"
      },
      "after": {
       "es": "Contenedores (Docker y Kubernetes) y máquinas virtuales en la nube. BladeCenter es una línea discontinuada.",
       "en": "Containers (Docker and Kubernetes) and cloud virtual machines. BladeCenter is a discontinued line."
      }
     },
     {
      "dim": {
       "es": "Herramientas de front-end",
       "en": "Front-end build tools"
      },
      "before": {
       "es": "Webpack",
       "en": "Webpack"
      },
      "after": {
       "es": "Vite, que alcanzó a Webpack en uso y lo supera en satisfacción (InfoQ, 2026).",
       "en": "Vite, which has caught up with Webpack in usage and beats it on satisfaction (InfoQ, 2026)."
      }
     },
     {
      "dim": {
       "es": "Bases de datos en memoria",
       "en": "In-memory databases"
      },
      "before": {
       "es": "Redis",
       "en": "Redis"
      },
      "after": {
       "es": "Redis y Valkey: Redis cambió su licencia en 2024, surgió Valkey y en 2025 Redis 8 volvió a una licencia abierta (The Register, 2025).",
       "en": "Redis and Valkey: Redis changed its licence in 2024, Valkey appeared, and in 2025 Redis 8 returned to an open source licence (The Register, 2025)."
      }
     },
     {
      "dim": {
       "es": "Bibliotecas de JavaScript",
       "en": "JavaScript libraries"
      },
      "before": {
       "es": "jQuery",
       "en": "jQuery"
      },
      "after": {
       "es": "jQuery como herramienta heredada: sacó su versión 4 en enero de 2026, pero se encuentra en sistemas viejos, no en proyectos nuevos (DevClass, 2026).",
       "en": "jQuery as a legacy tool: version 4 came out in January 2026, but you find it in older systems, not new projects (DevClass, 2026)."
      }
     },
     {
      "dim": {
       "es": "Desarrollo para iOS",
       "en": "iOS development"
      },
      "before": {
       "es": "Objective-C",
       "en": "Objective-C"
      },
      "after": {
       "es": "Swift y SwiftUI. Objective-C queda para mantener apps antiguas.",
       "en": "Swift and SwiftUI. Objective-C remains for maintaining older apps."
      }
     },
     {
      "dim": {
       "es": "Formación gratuita de la Ciudad",
       "en": "Free training from the City"
      },
      "before": {
       "es": "Codo a Codo",
       "en": "Codo a Codo"
      },
      "after": {
       "es": "Talento Tech, que reunió a Codo a Codo y Aprendé Programando (Gobierno de la Ciudad de Buenos Aires, 2026).",
       "en": "Talento Tech, which brought together Codo a Codo and Aprendé Programando (Gobierno de la Ciudad de Buenos Aires, 2026)."
      }
     }
    ]
   },
   {
    "t": "bars",
    "h": {
     "es": "Lo que dicen los datos",
     "en": "What the data says"
    },
    "note": {
     "es": "Fuentes: Revista Mercado (2026a, 2026b) y World Economic Forum (2025). Son tres mediciones distintas, con las que la parada 8 explica por qué el título abre la puerta pero no alcanza, y por qué hace falta seguir actualizándose.",
     "en": "Sources: Revista Mercado (2026a, 2026b) and World Economic Forum (2025). They are three separate measurements, which stop 8 uses to explain why a qualification opens the door but is not enough, and why people need to keep upskilling."
    },
    "title": {
     "es": "Tres cifras de la parada 8, cada una de una fuente distinta",
     "en": "Three figures from stop 8, each from a different source"
    },
    "rows": [
     {
      "label": {
       "es": "Empleadores en Argentina que no logran cubrir puestos por falta de habilidades",
       "en": "Employers in Argentina unable to fill roles for lack of skills"
      },
      "v": 64
     },
     {
      "label": {
       "es": "Empresas argentinas que no consiguen cubrir sus puestos tecnológicos",
       "en": "Argentine companies unable to fill their tech roles"
      },
      "v": 73
     },
     {
      "label": {
       "es": "Habilidades de un puesto que van a cambiar antes de 2030",
       "en": "Skills in a role that will change before 2030"
      },
      "v": 39
     }
    ]
   },
   {
    "t": "cards",
    "h": {
     "es": "Lo que preguntaban los estudiantes",
     "en": "What students kept asking"
    },
    "note": {
     "es": "Esta es la investigación del caso: siete cohortes de preguntas reales hicieron crecer el temario, y cada pregunta recurrente terminó en una parada o un apartado. Las preguntas están reformuladas, no son citas textuales.",
     "en": "This is the research behind the case: seven cohorts of real questions grew the syllabus, and every recurring question ended up as a stop or a section. The questions are paraphrased, not verbatim quotes."
    },
    "cols": 2,
    "items": [
     {
      "title": {
       "es": "¿Qué hace alguien que programa y por dónde empiezo?",
       "en": "What does a programmer actually do, and where do I start?"
      },
      "tag": {
       "es": "Apartado especial: programación",
       "en": "Special section: programming"
      },
      "body": {
       "es": "Un espectro de roles de UX a datos e IA, las herramientas de 2026 por área y cómo se comunican el front-end y el back-end.",
       "en": "A spectrum of roles from UX to data and AI, the 2026 tools by area and how the front end and back end talk to each other."
      }
     },
     {
      "title": {
       "es": "¿Ingeniería o licenciatura? ¿Cuál es la diferencia?",
       "en": "Engineering or a bachelor’s degree? What is the difference?"
      },
      "tag": {
       "es": "Paradas 5 y 7",
       "en": "Stops 5 and 7"
      },
      "body": {
       "es": "Los seis tipos de título con su duración, y una parada propia para la ingeniería: qué hace quien se recibe y en qué se diferencian Informática, Sistemas y Computación.",
       "en": "The six types of qualification with how long they take, and a stop of its own for engineering: what engineers do and how Computer Science, Information Systems and Computer Engineering differ."
      }
     },
     {
      "title": {
       "es": "¿Y si me interesa psicología?",
       "en": "What if I am interested in psychology?"
      },
      "tag": {
       "es": "Apartado especial: psicología",
       "en": "Special section: psychology"
      },
      "body": {
       "es": "Títulos posibles, dónde estudiar, especializaciones y la matrícula que hace falta para ejercer en la provincia de Buenos Aires.",
       "en": "Possible qualifications, where to study, specialisations and the registration needed to practise in the Province of Buenos Aires."
      }
     },
     {
      "title": {
       "es": "Si dos carreras se llaman igual, ¿son lo mismo?",
       "en": "If two degrees have the same name, are they the same?"
      },
      "tag": {
       "es": "Parada 6",
       "en": "Stop 6"
      },
      "body": {
       "es": "Qué mirar en un plan de estudios, cuatro licenciaturas del mismo campo comparadas y una plantilla para comparar dos planes.",
       "en": "What to look for in a study plan, four bachelor’s degrees in the same field side by side and a template for comparing two plans."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "02",
    "name": "Define",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Decidir qué entra en la charla y qué tiene que quedar disponible para después.",
     "en": "Decide what goes into the talk and what has to stay available for later."
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "How Might We",
     "en": "How Might We"
    },
    "cols": 3,
    "items": [
     {
      "tag": {
       "es": "HMW 1",
       "en": "HMW 1"
      },
      "body": {
       "es": "¿Cómo podríamos explicar el sistema de educación superior completo sin abrumar a quien lo ve por primera vez?",
       "en": "How might we explain the whole higher education system without overwhelming someone seeing it for the first time?"
      }
     },
     {
      "tag": {
       "es": "HMW 2",
       "en": "HMW 2"
      },
      "body": {
       "es": "¿Cómo podríamos evitar que alguien pierda una inscripción por no saber la fecha?",
       "en": "How might we make sure nobody misses an application because they did not know the date?"
      }
     },
     {
      "tag": {
       "es": "HMW 3",
       "en": "HMW 3"
      },
      "body": {
       "es": "¿Cómo podríamos ayudar a decidir sin decidir por el estudiante?",
       "en": "How might we help people decide without deciding for them?"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Criterios de éxito del diseño",
     "en": "Design success criteria"
    },
    "note": {
     "es": "Los criterios con los que se rediseñó la charla.",
     "en": "The criteria the talk was redesigned against."
    },
    "items": {
     "es": [
      "Que se pueda dictar en el tiempo de la charla: 76 minutos de recorrido.",
      "Que cada dato tenga su fuente, citada en APA 7.",
      "Que las fechas digan solas si la inscripción está abierta, por abrir o cerrada.",
      "Que el estudiante salga con algo hecho: una fecha agendada, un plan comparado, la escala completa.",
      "Que funcione en el celular y sea accesible."
     ],
     "en": [
      "It can be delivered within the time of the talk: a 76-minute journey.",
      "Every figure has its source, cited in APA 7.",
      "Dates show on their own whether applications are open, about to open or closed.",
      "Students leave with something done: a date in their calendar, a plan compared, the scale filled in.",
      "It works on a phone and is accessible."
     ]
    }
   },
   {
    "t": "phase",
    "n": "03",
    "name": "Develop",
    "mode": {
     "es": "divergir",
     "en": "diverge"
    },
    "q": {
     "es": "Convertir una presentación lineal en un recorrido.",
     "en": "Turn a linear slide deck into a journey."
    }
   },
   {
    "t": "metro",
    "h": {
     "es": "Arquitectura: dos líneas, diez paradas",
     "en": "Architecture: two lines, ten stops"
    },
    "note": {
     "es": "La metáfora de un mapa de transporte ordena la charla: la primera línea explica cómo está armado el sistema y cuándo anotarse; la segunda, qué estudiar y cómo elegir. Los minutos de cada parada están a la vista.",
     "en": "A transit map metaphor organises the talk: the first line explains how the system is built and when to apply; the second, what to study and how to choose. The minutes for each stop are in plain sight."
    },
    "unit": {
     "es": "min",
     "en": "min"
    },
    "lines": [
     {
      "name": {
       "es": "Línea 1: Conocer el mapa",
       "en": "Line 1: Know the map"
      },
      "sub": {
       "es": "Sistema, ingreso y fechas",
       "en": "System, admission and dates"
      },
      "stops": [
       {
        "n": 1,
        "name": {
         "es": "El sistema educativo",
         "en": "The education system"
        },
        "min": 6
       },
       {
        "n": 2,
        "name": {
         "es": "La educación superior",
         "en": "Higher education"
        },
        "min": 8
       },
       {
        "n": 3,
        "name": {
         "es": "Requisitos de ingreso",
         "en": "Entry requirements"
        },
        "min": 6
       },
       {
        "n": 4,
        "name": {
         "es": "Inscripciones 2027",
         "en": "2027 applications"
        },
        "min": 10
       }
      ]
     },
     {
      "name": {
       "es": "Línea 2: Elegir tu camino",
       "en": "Line 2: Choose your path"
      },
      "sub": {
       "es": "Títulos, carreras, mercado y decisión",
       "en": "Qualifications, degrees, market and decision"
      },
      "stops": [
       {
        "n": 5,
        "name": {
         "es": "Tipos de títulos",
         "en": "Types of qualification"
        },
        "min": 10
       },
       {
        "n": 6,
        "name": {
         "es": "Planes de estudio",
         "en": "Study plans"
        },
        "min": 8
       },
       {
        "n": 7,
        "name": {
         "es": "Ingeniería",
         "en": "Engineering"
        },
        "min": 6
       },
       {
        "n": 8,
        "name": {
         "es": "Qué pide el mercado",
         "en": "What the market wants"
        },
        "min": 8
       },
       {
        "n": 9,
        "name": {
         "es": "¿Qué camino tomar?",
         "en": "Which path to take?"
        },
        "min": 10
       },
       {
        "n": 10,
        "name": {
         "es": "En síntesis",
         "en": "In summary"
        },
        "min": 4
       }
      ]
     }
    ],
    "total": {
     "es": "Total",
     "en": "Total"
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "Apartados especiales",
     "en": "Special sections"
    },
    "note": {
     "es": "Viven en el mismo sitio, fuera del recorrido, para no alargar la línea principal. Programación y psicología surgieron de las preguntas de los estudiantes.",
     "en": "They live on the same site, outside the journey, so the main line does not get longer. Programming and psychology came from students’ questions."
    },
    "cols": 3,
    "caseCta": {
     "es": "Ver el caso",
     "en": "See the case"
    },
    "items": [
     {
      "title": {
       "es": "La particularidad de la programación",
       "en": "What makes programming different"
      },
      "body": {
       "es": "Cómo está el sector según la Cámara de la Industria Argentina del Software (CESSI, 2026), un espectro de roles del foco humano al tecnológico, las herramientas de 2026 por área y una animación que muestra cómo viaja un pedido del front-end al back-end.",
       "en": "How the sector is doing according to the Argentine Software Industry Chamber (CESSI, 2026), a spectrum of roles from human-focused to tech-focused, the 2026 tools by area and an animation showing how a request travels from the front end to the back end."
      }
     },
     {
      "title": {
       "es": "La particularidad de la psicología",
       "en": "What makes psychology different"
      },
      "body": {
       "es": "Títulos posibles, dónde estudiar y especializaciones, y qué tiene que ver la psicología con la tecnología: la experiencia de usuario, los recursos humanos y la educación necesitan entender a las personas.",
       "en": "Possible qualifications, where to study and specialisations, and what psychology has to do with technology: user experience, human resources and education all need to understand people."
      }
     },
     {
      "title": {
       "es": "El servidor de Lourdes",
       "en": "Lourdes’s server"
      },
      "body": {
       "es": "Un repositorio propio de cursos gratuitos o casi, recursos y guías ordenados por tema, para seguir aprendiendo a su ritmo después del taller.",
       "en": "A personal hub of free or nearly free courses, resources and guides organised by topic, to keep learning at one’s own pace after the workshop."
      },
      "case": "servidor"
     }
    ]
   },
   {
    "t": "list",
    "h": {
     "es": "Decisiones de diseño",
     "en": "Design decisions"
    },
    "items": [
     {
      "lead": {
       "es": "Fechas con estado propio",
       "en": "Dates that know their status"
      },
      "body": {
       "es": "Cada institución muestra si la inscripción está abierta, por abrir o cerrada según la fecha de hoy (atributos data-open, data-close y data-tbc), y el calendario del ingreso marca el día actual. La misma información va en una tabla, para no depender del gráfico. Es **performance support**: el sitio sirve el día de la inscripción, no solo el día de la charla.",
       "en": "Each institution shows whether applications are open, about to open or closed based on today’s date (data-open, data-close and data-tbc attributes), and the intake calendar marks the current day. The same information is also in a table, so nothing depends on the chart. This is **performance support**: the site is useful on application day, not just on the day of the talk."
      }
     },
     {
      "lead": {
       "es": "Año de ingreso automático",
       "en": "Automatic intake year"
      },
      "body": {
       "es": "La solapa muestra el año siguiente al actual, así el sitio no envejece de un ciclo al otro.",
       "en": "The tab shows the year after the current one, so the site does not age from one cycle to the next."
      }
     },
     {
      "lead": {
       "es": "Avance guardado",
       "en": "Saved progress"
      },
      "body": {
       "es": "Las paradas recorridas, la lista final y la escala quedan guardadas en el navegador. Cada persona avanza **a su ritmo** y retoma donde dejó, sin crear una cuenta.",
       "en": "Completed stops, the final checklist and the scale are saved in the browser. Everyone moves **at their own pace** and picks up where they left off, without creating an account."
      }
     },
     {
      "lead": {
       "es": "Escala sin el 7",
       "en": "A scale with no 7"
      },
      "body": {
       "es": "Dos carreras, dos preguntas por carrera, del 1 al 10 y sin la opción tibia. Pide una respuesta consistente con lo investigado: es una herramienta de **toma de decisiones informada**, no un test vocacional.",
       "en": "Two degrees, two questions each, from 1 to 10 with no lukewarm option. It asks for an answer consistent with the research already done: a tool for **informed decision-making**, not an aptitude test."
      }
     },
     {
      "lead": {
       "es": "Plantilla para comparar planes",
       "en": "A template for comparing plans"
      },
      "body": {
       "es": "Trece criterios para dos carreras, con copia al portapapeles. Lleva lo visto a la práctica: cada estudiante la completa con los planes oficiales de las carreras que le interesan.",
       "en": "Thirteen criteria for two degrees, with copy to clipboard. It moves learning into practice: each student fills it in with the official plans of the degrees they are considering."
      }
     },
     {
      "lead": {
       "es": "Parada 9: decidir con miedo",
       "en": "Stop 9: deciding while afraid"
      },
      "body": {
       "es": "Propósito y **autoconocimiento**, miedos, excusas y fracaso. Trabaja la tolerancia a la frustración: cambiar de carrera puede ser una decisión pensada y no un fracaso.",
       "en": "Purpose and **self-awareness**, fears, excuses and failure. It builds tolerance to frustration: changing degree can be a considered decision rather than a failure."
      }
     },
     {
      "lead": {
       "es": "Apartados fuera del recorrido",
       "en": "Sections outside the journey"
      },
      "body": {
       "es": "Programación, psicología y el servidor viven en el mismo sitio sin alargar la línea principal.",
       "en": "Programming, psychology and the server live on the same site without making the main line longer."
      }
     },
     {
      "lead": {
       "es": "Contenido modular",
       "en": "Modular content"
      },
      "body": {
       "es": "Cada parada y cada apartado tiene la misma estructura: idea clave, desarrollo con cifras citadas y una actividad corta. Cuando una cohorte trae una pregunta nueva, se suma una parada o un apartado sin rehacer el resto.",
       "en": "Every stop and section has the same structure: a key idea, content with cited figures and a short activity. When a cohort brings a new question, a stop or a section is added without rebuilding the rest."
      }
     }
    ]
   },
   {
    "t": "compare",
    "marks": true,
    "h": {
     "es": "La misma frase, contada de dos formas",
     "en": "The same sentence, told two ways"
    },
    "note": {
     "es": "El ejemplo de la parada 8, junto al modelo de perfil en T: profundidad en un título y amplitud en negocio, usuario, datos e IA y comunicación. Son **habilidades transferibles**, las mismas que se trabajan en programas de crecimiento profesional: contar el impacto de un trabajo a alguien que no es del área.",
     "en": "The example from stop 8, alongside the T-shaped profile: depth in one qualification and breadth across business, users, data and AI, and communication. These are **transferable skills**, the same ones professional growth programmes work on: explaining the impact of a piece of work to someone outside the field."
    },
    "cols": {
     "dim": {
      "es": "Elemento",
      "en": "Element"
     },
     "before": {
      "es": "Solo la herramienta",
      "en": "Just the tool"
     },
     "after": {
      "es": "El problema y el usuario",
      "en": "The problem and the user"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "La frase",
       "en": "The sentence"
      },
      "before": {
       "es": "\"Hice un sistema de turnos en PHP con MySQL.\"",
       "en": "\"I built an appointment system in PHP with MySQL.\""
      },
      "after": {
       "es": "\"El consultorio perdía turnos porque los anotaba en papel. Hablé con la secretaria, armé un sistema de turnos en PHP con MySQL y ahora los pacientes reciben un recordatorio: las ausencias bajaron.\"",
       "en": "\"The practice kept losing appointments because it wrote them down on paper. I talked to the receptionist, built an appointment system in PHP with MySQL and now patients get a reminder: no-shows went down.\""
      }
     },
     {
      "dim": {
       "es": "Qué muestra",
       "en": "What it shows"
      },
      "before": {
       "es": "Qué herramienta se usó.",
       "en": "Which tool was used."
      },
      "after": {
       "es": "Para qué servía, para quién era y qué cambió. Vale para cualquier título: una tecnicatura, una ingeniería o un profesorado.",
       "en": "What it was for, who it was for and what changed. It applies to any qualification: a technical diploma, an engineering degree or a teaching degree."
      }
     }
    ]
   },
   {
    "t": "gallery",
    "h": {
     "es": "Piezas clave del sitio",
     "en": "Key pieces of the site"
    },
    "note": {
     "es": "Capturas del sitio publicado, en tema claro, tomadas el 23 de noviembre de 2026: por eso la línea «Hoy» del calendario cae a fines de noviembre y la UTN.BA figura con la inscripción abierta.",
     "en": "Screenshots of the published site, in light theme, taken on 23 November 2026: that is why the “Today” line on the calendar falls at the end of November and UTN.BA shows applications as open."
    },
    "rowsOf": [
     2,
     2,
     3
    ],
    "images": [
     {
      "src": "taller-ciclosuperior-01-inicio.webp",
      "w": 1440,
      "h": 780,
      "alt": {
       "es": "Inicio de la charla: un cuaderno con la etiqueta 2027, el título Charla de carreras, el texto de presentación y los botones Empezar el recorrido y Ver el mapa; a la derecha, un cartel de dos flechas con la Línea 1, Conocer el mapa, y la Línea 2, Elegir tu camino, con sus paradas numeradas, y la próxima parada.",
       "en": "Home of the talk: a notebook with a 2027 tab, the title Charla de carreras, the intro text and the Start the journey and See the map buttons; on the right, a two-arrow signpost with Line 1, Know the map, and Line 2, Choose your path, with their numbered stops, and the next stop."
      },
      "caption": {
       "es": "Inicio con la señalización de las dos líneas.",
       "en": "Home with the signpost for both lines."
      }
     },
     {
      "src": "taller-ciclosuperior-02-mapa.webp",
      "w": 1360,
      "h": 1185,
      "alt": {
       "es": "El mapa del recorrido: la Línea 1 con cuatro paradas y 30 minutos, la Línea 2 con seis paradas y 46 minutos, cada parada con su número, su ícono y sus minutos; debajo, tres tarjetas de color para los apartados especiales de programación, psicología y el servidor de Lourdes, y una franja con tres indicaciones de uso.",
       "en": "The journey map: Line 1 with four stops and 30 minutes, Line 2 with six stops and 46 minutes, each stop with its number, icon and minutes; below, three coloured cards for the special sections on programming, psychology and Lourdes’s server, and a strip with three usage tips."
      },
      "caption": {
       "es": "El mapa: dos líneas y tres apartados.",
       "en": "The map: two lines and three sections."
      }
     },
     {
      "src": "taller-ciclosuperior-03-calendario.webp",
      "w": 962,
      "h": 481,
      "alt": {
       "es": "Calendario del ingreso 2027 de agosto a marzo: barras de inscripción de UTN.BA (27/8 al 4/12) y UNTREF (5/10 al 6/11), barras de cursos y seminarios de ingreso, barras rayadas para las fechas a confirmar de UNTREF y UBA, y una línea vertical rotulada Hoy a fines de noviembre, con su leyenda.",
       "en": "2027 intake calendar from August to March: application bars for UTN.BA (27/8 to 4/12) and UNTREF (5/10 to 6/11), bars for admission courses and seminars, striped bars for UNTREF and UBA dates still to be confirmed, and a vertical line labelled Today at the end of November, with its legend."
      },
      "caption": {
       "es": "Calendario del ingreso con el día actual.",
       "en": "Intake calendar with the current day."
      }
     },
     {
      "src": "taller-ciclosuperior-04-instituciones.webp",
      "w": 962,
      "h": 1095,
      "alt": {
       "es": "Cuatro tarjetas de institución con su estado: UBA XXI, Febrero, a confirmar; UTN.BA, Abierta hasta el 4/12; UNTREF, Cerrada; Talento Tech, Convocatorias en el año. Cada una con su descripción, fechas citadas y un enlace a la web oficial.",
       "en": "Four institution cards with their status: UBA XXI, February, to be confirmed; UTN.BA, Open until 4/12; UNTREF, Closed; Talento Tech, Calls during the year. Each with its description, cited dates and a link to the official website."
      },
      "caption": {
       "es": "Tarjetas con el estado de cada inscripción.",
       "en": "Cards showing each application’s status."
      }
     },
     {
      "src": "taller-ciclosuperior-05-escala.webp",
      "w": 962,
      "h": 529,
      "alt": {
       "es": "La escala sin el 7: arriba, un texto de ayuda que explica que un mismo número no se puede usar en las dos carreras y cómo liberarlo; debajo, dos columnas, Carrera A y Carrera B, cada una con un campo para el nombre y dos preguntas, ¿Cuánto me gustaría hacer esto? y ¿Qué tanto me veo haciéndolo?, con botones del 1 al 10 donde el 7 aparece tachado, y el botón Borrar.",
       "en": "The scale with no 7: at the top, help text explaining that the same number cannot be used for both degrees and how to free it; below, two columns, Degree A and Degree B, each with a name field and two questions, How much would I like to do this? and How well can I see myself doing it?, with buttons from 1 to 10 where the 7 is crossed out, and a Clear button."
      },
      "caption": {
       "es": "Escala sin el 7, en la parada 9.",
       "en": "The scale with no 7, at stop 9."
      }
     },
     {
      "src": "taller-ciclosuperior-06-plantilla.webp",
      "w": 962,
      "h": 529,
      "alt": {
       "es": "Plantilla en texto monoespaciado para comparar dos planes de estudio, con el botón Copiar: nombre y universidad, duración, título intermedio, materias de matemática, programación y gestión, práctica profesional, trabajo final, modalidad, costo, validez nacional, una materia que entusiasma, una que da miedo y la elección final.",
       "en": "Monospaced template for comparing two study plans, with a Copy button: name and university, length, intermediate qualification, maths, programming and management subjects, professional practice, final project, format, cost, national recognition, a subject that excites you, one that scares you and the final choice."
      },
      "caption": {
       "es": "Plantilla para comparar planes, en la parada 6.",
       "en": "Plan comparison template, at stop 6."
      }
     },
     {
      "src": "taller-ciclosuperior-07-programacion.webp",
      "w": 962,
      "h": 504,
      "alt": {
       "es": "Las herramientas de 2026 por área, en seis tarjetas: Front-end, Back-end, Datos, Nube y DevOps, Móvil e Inteligencia artificial, cada una con su base y sus herramientas en etiquetas, como React, Node.js, PostgreSQL, Docker, Flutter y Agentes.",
       "en": "The 2026 tools by area, in six cards: Front-end, Back-end, Data, Cloud and DevOps, Mobile and Artificial intelligence, each with its basics and its tools as tags, such as React, Node.js, PostgreSQL, Docker, Flutter and Agents."
      },
      "caption": {
       "es": "Herramientas de 2026, en el apartado de programación.",
       "en": "2026 tools, in the programming section."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "",
    "id": "design-system",
    "name": "Design system",
    "mode": {
     "es": "del sitio",
     "en": "of the site"
    },
    "q": {
     "es": "Un sistema propio reutilizado, con solo cuatro componentes nuevos.",
     "en": "A reused in-house system, with only four new components."
    }
   },
   {
    "t": "callout",
    "h": {
     "es": "Un sistema reutilizado",
     "en": "A reused system"
    },
    "body": {
     "es": "El sitio parte del design system de otro sitio propio: tokens de color, tipografías Outfit, Geist y Geist Mono, componentes, animaciones y tema claro y oscuro. Suma solo cuatro componentes en carreras.css: el calendario del ingreso, las tarjetas de institución con estado, la escala y las notas adhesivas. Reutilizar fue una decisión de eficiencia y de consistencia: el tiempo fue al contenido y a lo que esta charla necesitaba de nuevo.",
     "en": "The site builds on the design system of another site of mine: colour tokens, the Outfit, Geist and Geist Mono typefaces, components, animations and light and dark themes. It adds only four components in carreras.css: the intake calendar, institution cards with status, the scale and sticky notes. Reusing it was a decision for efficiency and consistency: the time went into the content and into what this talk needed that was new."
    }
   },
   {
    "t": "anim",
    "h": {
     "es": "Animaciones explicativas",
     "en": "Explainer animations"
    },
    "note": {
     "es": "Las seis piezas en vivo: son las mismas composiciones de HyperFrames y GSAP que usa el sitio. Arrancan al aparecer en pantalla, se pueden pausar y, con movimiento reducido, muestran el cuadro final.",
     "en": "The six pieces, live: the same HyperFrames and GSAP compositions the site uses. They start when they come into view, can be paused and, with reduced motion, show the final frame."
    },
    "items": [
     {
      "id": "niveles",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/niveles/index.html?embed=1&theme=light",
      "title": {
       "es": "Los cuatro niveles",
       "en": "The four levels"
      },
      "caption": {
       "es": "Los cuatro niveles aparecen sobre una línea de edades. La franja obligatoria va de la sala de 4 al final de la secundaria, y el nivel superior empieza a los 18 o 19 años.",
       "en": "The four levels appear on an age line. Compulsory schooling runs from age 4 to the end of secondary school, and higher education starts at 18 or 19."
      }
     },
     {
      "id": "titulos",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/titulos/index.html?embed=1&theme=light",
      "title": {
       "es": "Cuánto dura cada título",
       "en": "How long each qualification takes"
      },
      "caption": {
       "es": "Barras de duración en años: diplomatura, de meses a un año; tecnicatura, 2,5 a 3; profesorado y licenciatura, 4 a 5; ingeniería, 5 a 6. El posgrado empieza después del grado.",
       "en": "Bars showing length in years: a diploma course, months to a year; a technical diploma, 2.5 to 3; teaching and bachelor’s degrees, 4 to 5; engineering, 5 to 6. Postgraduate study starts after a first degree."
      }
     },
     {
      "id": "espectro",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/espectro/index.html?embed=1&theme=light",
      "title": {
       "es": "Del foco humano al foco tecno",
       "en": "From human focus to tech focus"
      },
      "caption": {
       "es": "Una línea va del foco humano al tecnológico, con investigación, diseño, front-end, back-end y datos e IA, y los roles que ocupan cada tramo.",
       "en": "A line runs from human focus to tech focus, through research, design, front end, back end and data and AI, with the roles that cover each stretch."
      }
     },
     {
      "id": "cliente",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/cliente/index.html?embed=1&theme=light",
      "title": {
       "es": "Qué pasa cuando tocás un botón",
       "en": "What happens when you tap a button"
      },
      "caption": {
       "es": "Un botón en el celular, el pedido que viaja hasta el servidor, la API que consulta la base de datos y la respuesta que actualiza la pantalla.",
       "en": "A button on a phone, the request travelling to the server, the API querying the database and the response updating the screen."
      }
     },
     {
      "id": "perfil",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/perfil/index.html?embed=1&theme=light",
      "title": {
       "es": "El perfil en T",
       "en": "The T-shaped profile"
      },
      "caption": {
       "es": "La barra vertical es el título, lo que se sabe hacer muy bien. La horizontal suma negocio, usuario, datos e IA y comunicación.",
       "en": "The vertical bar is the qualification, what you do really well. The horizontal bar adds business, users, data and AI, and communication."
      }
     },
     {
      "id": "escala",
      "src": "https://lpedaci.github.io/taller-ciclosuperior/videos/escala/index.html?embed=1&theme=light",
      "title": {
       "es": "La escala sin el 7",
       "en": "The scale with no 7"
      },
      "caption": {
       "es": "Una escala del 1 al 10 donde el 7 se tacha. La carrera A queda en 6 y la B en 8: sin intermedios, cada una queda de un lado.",
       "en": "A scale from 1 to 10 where the 7 is crossed out. Degree A lands on 6 and degree B on 8: with no middle ground, each falls clearly on one side."
      }
     }
    ]
   },
   {
    "t": "phase",
    "n": "04",
    "name": "Deliver",
    "mode": {
     "es": "converger",
     "en": "converge"
    },
    "q": {
     "es": "Publicar y verificar que el sitio funcione para todos antes de la charla.",
     "en": "Publish and check that the site works for everyone before the talk."
    }
   },
   {
    "t": "bullets",
    "h": {
     "es": "Accesibilidad del sitio",
     "en": "Site accessibility"
    },
    "items": {
     "es": [
      "HTML semántico, enlace para saltar al contenido y foco visible en los controles.",
      "Un calendario visual con su tabla equivalente, y tablas que se apilan en el celular.",
      "Desplegables «Tocá para ver» para el contenido secundario, sin alargar cada parada.",
      "Animaciones con pausa y descripción en texto; con movimiento reducido muestran el cuadro final.",
      "Enlaces externos que avisan que se abren en una pestaña nueva.",
      "Tema claro y oscuro, según el sistema o elegido a mano."
     ],
     "en": [
      "Semantic HTML, a skip-to-content link and visible focus on controls.",
      "A visual calendar with an equivalent table, and tables that stack on phones.",
      "“Tap to see” disclosures for secondary content, without making each stop longer.",
      "Animations with a pause control and a text description; with reduced motion they show the final frame.",
      "External links announce that they open in a new tab.",
      "Light and dark themes, following the system or chosen by hand."
     ]
    },
    "hl": true
   },
   {
    "t": "compare",
    "marks": true,
    "h": {
     "es": "Auditoría WCAG 2.2 AA",
     "en": "WCAG 2.2 AA audit"
    },
    "note": {
     "es": "Auditoría del 23 de noviembre de 2026: revisión del código, contraste de los tokens en tema claro y oscuro, y prueba en navegador a 375 px y en escritorio. Estos son los problemas que se corrigieron. Queda un cambio de diseño menor: una etiqueta visible para el nombre de la carrera en la escala.",
     "en": "Audit carried out on 23 November 2026: code review, contrast of the tokens in light and dark themes, and browser testing at 375 px and on desktop. These are the problems that were fixed. One minor design change remains: a visible label for the degree name in the scale."
    },
    "cols": {
     "dim": {
      "es": "Criterio",
      "en": "Criterion"
     },
     "before": {
      "es": "Problema",
      "en": "Problem"
     },
     "after": {
      "es": "Corrección",
      "en": "Fix"
     }
    },
    "rows": [
     {
      "dim": {
       "es": "4.1.2 Nombre, función, valor (A)",
       "en": "4.1.2 Name, role, value (A)"
      },
      "before": {
       "es": "Debajo de 480 px, el botón del menú de paradas se quedaba sin nombre accesible.",
       "en": "Below 480 px, the stops menu button had no accessible name."
      },
      "after": {
       "es": "aria-label \"Paradas\", igual al texto visible.",
       "en": "An aria-label matching the visible text."
      }
     },
     {
      "dim": {
       "es": "2.4.3 Orden del foco y 2.4.11 Foco no oculto (A y AA)",
       "en": "2.4.3 Focus order and 2.4.11 Focus not obscured (A and AA)"
      },
      "before": {
       "es": "En el celular, con Tab el foco seguía por el contenido tapado por el panel de paradas.",
       "en": "On phones, Tab kept moving focus through content hidden behind the stops panel."
      },
      "after": {
       "es": "Al abrir, el foco pasa a la parada actual; si sale del panel, el panel se cierra.",
       "en": "On opening, focus moves to the current stop; if it leaves the panel, the panel closes."
      }
     },
     {
      "dim": {
       "es": "2.2.2 Pausar, detener, ocultar (A)",
       "en": "2.2.2 Pause, stop, hide (A)"
      },
      "before": {
       "es": "Animaciones decorativas en bucle infinito.",
       "en": "Decorative animations looping forever."
      },
      "after": {
       "es": "Se repiten una o dos veces y terminan antes de los 5 segundos.",
       "en": "They repeat once or twice and end within 5 seconds."
      }
     },
     {
      "dim": {
       "es": "4.1.3 Mensajes de estado (AA)",
       "en": "4.1.3 Status messages (AA)"
      },
      "before": {
       "es": "El lector de pantalla anunciaba el resultado de la escala con cada letra escrita.",
       "en": "The screen reader announced the scale result with every letter typed."
      },
      "after": {
       "es": "El resultado se actualiza al salir del campo o al elegir un número.",
       "en": "The result updates when leaving the field or picking a number."
      }
     },
     {
      "dim": {
       "es": "3.3.2 Etiquetas o instrucciones (A)",
       "en": "3.3.2 Labels or instructions (A)"
      },
      "before": {
       "es": "Nada explicaba por qué algunos números se desactivan ni cómo liberarlos.",
       "en": "Nothing explained why some numbers are disabled or how to free them."
      },
      "after": {
       "es": "Texto de ayuda visible, vinculado a cada grupo con aria-describedby.",
       "en": "Visible help text, linked to each group with aria-describedby."
      }
     },
     {
      "dim": {
       "es": "1.4.11 Contraste no textual (AA)",
       "en": "1.4.11 Non-text contrast (AA)"
      },
      "before": {
       "es": "Bordes del campo y de los números de la escala con 1,37:1 y 2:1.",
       "en": "Borders of the field and scale numbers at 1.37:1 and 2:1."
      },
      "after": {
       "es": "Bordes recalculados para superar 3:1 en los dos temas.",
       "en": "Borders recalculated to exceed 3:1 in both themes."
      }
     },
     {
      "dim": {
       "es": "2.4.7 Foco visible (AA)",
       "en": "2.4.7 Focus visible (AA)"
      },
      "before": {
       "es": "El campo de la escala marcaba el foco solo con un cambio de color.",
       "en": "The scale field showed focus only through a colour change."
      },
      "after": {
       "es": "Contorno de foco de 3 px, como en el resto del sitio.",
       "en": "A 3 px focus outline, as everywhere else on the site."
      }
     },
     {
      "dim": {
       "es": "1.3.1 Información y relaciones (A)",
       "en": "1.3.1 Info and relationships (A)"
      },
      "before": {
       "es": "La cadena Miedos, Excusas y Éxitos tachado no se transmitía a los lectores de pantalla.",
       "en": "The Fears, Excuses and crossed-out Successes chain was not conveyed to screen readers."
      },
      "after": {
       "es": "role=\"img\" para que se lea la frase completa.",
       "en": "role=\"img\" so the full sentence is read."
      }
     },
     {
      "dim": {
       "es": "2.4.6 Encabezados y etiquetas (AA)",
       "en": "2.4.6 Headings and labels (AA)"
      },
      "before": {
       "es": "Los seis botones de animación se llamaban todos \"Reproducir\".",
       "en": "All six animation buttons were called \"Play\"."
      },
      "after": {
       "es": "Cada uno suma el nombre de su animación, por ejemplo \"Reproducir: Los cuatro niveles\".",
       "en": "Each one adds its animation name, for example \"Play: The four levels\"."
      }
     }
    ]
   },
   {
    "t": "live",
    "h": {
     "es": "El sitio, en vivo",
     "en": "The site, live"
    },
    "note": {
     "es": "HTML, CSS y JavaScript sin frameworks ni proceso de compilación, publicado en GitHub Pages.",
     "en": "HTML, CSS and JavaScript with no frameworks and no build step, published on GitHub Pages."
    },
    "src": "https://lpedaci.github.io/taller-ciclosuperior/",
    "url": "https://lpedaci.github.io/taller-ciclosuperior/",
    "label": {
     "es": "Charla de carreras 2027",
     "en": "Career talk 2027"
    }
   },
   {
    "t": "cards",
    "h": {
     "es": "De adolescentes a adultos, del aula a la organización",
     "en": "From teenagers to adults, from the classroom to the organisation"
    },
    "note": {
     "es": "El taller ya se dicta con adultos que vuelven a estudiar. Estas tarjetas muestran cómo su diseño se traslada a programas de desarrollo en organizaciones: es una transferencia de diseño, no algo implementado en una empresa.",
     "en": "The workshop is already delivered to adults returning to study. These cards show how its design carries over to development programmes in organisations: it is a design transfer, not something implemented at a company."
    },
    "cols": 3,
    "items": [
     {
      "title": {
       "es": "Una ruta de desarrollo con paradas",
       "en": "A development path with stops"
      },
      "body": {
       "es": "Etapas claras, minutos a la vista, algo para hacer en cada una y avance guardado para retomar a su ritmo: la misma estructura sirve para planes de carrera y de movilidad interna.",
       "en": "Clear stages, visible timings, something to do at each one and saved progress to pick up at one’s own pace: the same structure works for career plans and internal mobility."
      }
     },
     {
      "title": {
       "es": "Un recurso de consulta que se actualiza solo",
       "en": "Performance support that updates itself"
      },
      "body": {
       "es": "Fechas que muestran su estado según el día, útiles para cualquier proceso con plazos: inscripciones a programas de formación, convocatorias internas o ventanas de evaluación.",
       "en": "Dates that show their status based on today, useful for any process with deadlines: applications to training programmes, internal openings or review windows."
      }
     },
     {
      "title": {
       "es": "Herramientas de decisión y autoconocimiento",
       "en": "Decision-making and self-awareness tools"
      },
      "body": {
       "es": "La escala sin el 7, la plantilla de comparación y el trabajo sobre miedos y propósito se trasladan a conversaciones de desarrollo y a la elección de trayectos de upskilling y reskilling.",
       "en": "The scale with no 7, the comparison template and the work on fears and purpose carry over to development conversations and to choosing upskilling and reskilling paths."
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Resultados",
     "en": "Results"
    },
    "note": {
     "es": "Lo que el proyecto entrega.",
     "en": "What the project delivers."
    },
    "items": {
     "es": [
      "Dictado todos los años desde 2019 a Informática A y B, en 6to y 7mo año (unos 80 estudiantes por año), y a adultos que buscan insertarse o reinsertarse en el mundo académico.",
      "Un temario que creció con la demanda de cada cohorte, hasta sumar las paradas de ingeniería y de planes de estudio y los apartados de programación y psicología.",
      "En 2026 pasó de diapositivas a un sitio con fechas que se actualizan solas y avance guardado: una ruta de **aprendizaje autodirigido** a la que se puede volver hasta el día de la inscripción.",
      "Treinta y cuatro fuentes citadas en APA 7, con el contexto de 2026: financiamiento universitario, títulos digitales y becas."
     ],
     "en": [
      "Delivered every year since 2019 to computing groups A and B in sixth and seventh year (about 80 students a year), and to adults looking to enter or return to higher education.",
      "A syllabus that grew with each cohort’s questions, adding the stops on engineering and study plans and the sections on programming and psychology.",
      "In 2026 it moved from slides to a site with dates that update themselves and saved progress: a **self-directed learning** path people can return to right up to application day.",
      "Thirty-four sources cited in APA 7, covering the 2026 context: university funding, digital diplomas and grants."
     ]
    }
   },
   {
    "t": "phase",
    "id": "cifras",
    "name": {
     "es": "La charla en cifras",
     "en": "The talk in numbers"
    },
    "mode": {
     "es": "alcance",
     "en": "scope"
    },
    "q": {
     "es": "Lo que entra en 76 minutos y lo que queda para consultar después.",
     "en": "What fits into 76 minutes and what stays to look up later."
    }
   },
   {
    "t": "stats",
    "items": [
     {
      "value": {
       "es": "~80",
       "en": "~80"
      },
      "label": {
       "es": "estudiantes por año en la escuela, desde 2019",
       "en": "students a year at the school, since 2019"
      }
     },
     {
      "value": {
       "es": "3",
       "en": "3"
      },
      "label": {
       "es": "públicos: 6to, 7mo y adultos",
       "en": "audiences: sixth year, seventh year and adults"
      }
     },
     {
      "value": {
       "es": "10",
       "en": "10"
      },
      "label": {
       "es": "paradas en dos líneas",
       "en": "stops on two lines"
      }
     },
     {
      "value": {
       "es": "3",
       "en": "3"
      },
      "label": {
       "es": "apartados especiales",
       "en": "special sections"
      }
     },
     {
      "value": {
       "es": "12",
       "en": "12"
      },
      "label": {
       "es": "actividades cortas",
       "en": "short activities"
      }
     },
     {
      "value": {
       "es": "6",
       "en": "6"
      },
      "label": {
       "es": "animaciones explicativas",
       "en": "explainer animations"
      }
     },
     {
      "value": {
       "es": "76 min",
       "en": "76 min"
      },
      "label": {
       "es": "de recorrido",
       "en": "journey"
      }
     },
     {
      "value": {
       "es": "34",
       "en": "34"
      },
      "label": {
       "es": "fuentes citadas en APA 7",
       "en": "sources cited in APA 7"
      }
     }
    ]
   },
   {
    "t": "bullets",
    "h": {
     "es": "Próximos pasos",
     "en": "Next steps"
    },
    "items": {
     "es": [
      "Actualizar las fechas para el ingreso 2028 cambiando solo los atributos data-open y data-close de cada institución.",
      "Seguir sumando paradas o apartados según las preguntas de cada cohorte.",
      "Evaluar ejemplos y paradas pensados para el público adulto: cursadas compatibles con el trabajo, reconocimiento de saberes previos y carreras a distancia."
     ],
     "en": [
      "Update the dates for the 2028 intake by changing only each institution’s data-open and data-close attributes.",
      "Keep adding stops or sections based on each cohort’s questions.",
      "Explore examples and stops designed for adult learners: study schedules that fit around work, recognition of prior learning and distance degrees."
     ]
    }
   },
   {
    "t": "refs",
    "h": {
     "es": "Referencias",
     "en": "References"
    },
    "items": [
     {
      "pre": {
       "es": "Cámara de la Industria Argentina del Software. (2026).",
       "en": "Cámara de la Industria Argentina del Software. (2026)."
      },
      "title": {
       "es": "Industria del software en Argentina al 1.er trimestre de 2026",
       "en": "Industria del software en Argentina al 1.er trimestre de 2026"
      },
      "post": {
       "es": " [Informe del Observatorio Permanente de la Industria del Software y Servicios Informáticos].",
       "en": " [Report of the Permanent Observatory of the Software and IT Services Industry]."
      },
      "url": "https://cessi.org.ar/wp-content/uploads/2026/07/OPSSI-Reporte-Industria-Software-1er.-trim.-2026.pdf"
     },
     {
      "pre": {
       "es": "Canal 26. (2026, 27 de abril).",
       "en": "Canal 26. (2026, April 27)."
      },
      "title": {
       "es": "Últimos días para completar la inscripción para las Becas Progresar 2026",
       "en": "Últimos días para completar la inscripción para las Becas Progresar 2026"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.canal26.com/economia/2026/04/27/se-acaba-el-tiempo-ultimos-dias-para-completar-la-inscripcion-para-las-becas-progresar-2026/"
     },
     {
      "pre": {
       "es": "Chequeado. (2026).",
       "en": "Chequeado. (2026)."
      },
      "title": {
       "es": "Marcha federal universitaria del 15 de octubre de 2026: el gasto cayó 25,3 % desde 2023 y los salarios un 24,2 %",
       "en": "Marcha federal universitaria del 15 de octubre de 2026: el gasto cayó 25,3 % desde 2023 y los salarios un 24,2 %"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://chequeado.com/el-explicador/marcha-federal-universitaria-del-15-de-octubre-de-2026-el-gasto-cayo-253-desde-2023-y-los-salarios-un-242/"
     },
     {
      "pre": {
       "es": "DevClass. (2026, 19 de enero).",
       "en": "DevClass. (2026, January 19)."
      },
      "title": {
       "es": "jQuery 4.0 released, first major version since 2016",
       "en": "jQuery 4.0 released, first major version since 2016"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://devclass.com/2026/01/19/jquery-4-0-released-first-major-version-since-2016/"
     },
     {
      "pre": {
       "es": "Disposición 15/2025 [Dirección Nacional de Validez de Títulos y Estudios]. (2025, 16 de enero).",
       "en": "Disposición 15/2025 [Dirección Nacional de Validez de Títulos y Estudios]. (2025, January 16)."
      },
      "title": {
       "es": "Boletín Oficial de la República Argentina",
       "en": "Boletín Oficial de la República Argentina"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.boletinoficial.gob.ar/detalleAviso/primera/319739/20250116"
     },
     {
      "pre": {
       "es": "Gobierno de la Ciudad de Buenos Aires. (2026, 26 de febrero).",
       "en": "Gobierno de la Ciudad de Buenos Aires. (2026, February 26)."
      },
      "title": {
       "es": "Abrieron las inscripciones para Talento Tech 2026, el programa de formación en tecnología de la Ciudad",
       "en": "Abrieron las inscripciones para Talento Tech 2026, el programa de formación en tecnología de la Ciudad"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://buenosaires.gob.ar/gcaba_historico/noticias/abrieron-las-inscripciones-para-talento-tech-2026-el-programa-de-formacion"
     },
     {
      "pre": {
       "es": "InfoQ. (2026, marzo).",
       "en": "InfoQ. (2026, March)."
      },
      "title": {
       "es": "State of JS survey 2025",
       "en": "State of JS survey 2025"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.infoq.com/news/2026/03/state-of-js-survey-2025"
     },
     {
      "pre": {
       "es": "MDZ. (2026, marzo).",
       "en": "MDZ. (2026, March)."
      },
      "title": {
       "es": "Becas Manuel Belgrano 2026: quiénes pueden inscribirse",
       "en": "Becas Manuel Belgrano 2026: quiénes pueden inscribirse"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.mdzol.com/sociedad/becas-manuel-belgrano-2026-quienes-pueden-inscribirse-y-cobrar-mas-80000-mes-n1467170"
     },
     {
      "pre": {
       "es": "Microsoft. (s.f.).",
       "en": "Microsoft. (n.d.)."
      },
      "title": {
       "es": "Xamarin support policy",
       "en": "Xamarin support policy"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin"
     },
     {
      "pre": {
       "es": "Pedaci, L. (2025).",
       "en": "Pedaci, L. (2025)."
      },
      "title": {
       "es": "Charla de carreras: Modalidad Informática",
       "en": "Charla de carreras: Modalidad Informática"
      },
      "post": {
       "es": " [Diapositivas de PowerPoint].",
       "en": " [PowerPoint slides]."
      }
     },
     {
      "pre": {
       "es": "Resolución CFE N.º 440/23 [Consejo Federal de Educación]. (2023, 9 de febrero).",
       "en": "Resolución CFE N.º 440/23 [Consejo Federal de Educación]. (2023, February 9)."
      },
      "title": {
       "es": "Sistema Federal de Títulos: emisión digital de títulos y certificados",
       "en": "Sistema Federal de Títulos: emisión digital de títulos y certificados"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.uepc.org.ar/conectate/wp-content/uploads/2023/04/RCFE-440-23-Sistema-Federal-Titulos.pdf"
     },
     {
      "pre": {
       "es": "Revista Mercado. (2026a).",
       "en": "Revista Mercado. (2026a)."
      },
      "title": {
       "es": "Escasez de talento: 64% de empleadores en Argentina no logra cubrir puestos",
       "en": "Escasez de talento: 64% de empleadores en Argentina no logra cubrir puestos"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://mercado.com.ar/tendencias/escasez-de-talento-64-de-empleadores-en-argentina-no-logra-cubrir-puestos"
     },
     {
      "pre": {
       "es": "Revista Mercado. (2026b).",
       "en": "Revista Mercado. (2026b)."
      },
      "title": {
       "es": "Experis midió que 73% de las empresas argentinas no cubre puestos tecnológicos",
       "en": "Experis midió que 73% de las empresas argentinas no cubre puestos tecnológicos"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://mercado.com.ar/talento-y-liderazgo/experis-midio-que-73-de-las-empresas-argentinas-no-cubre-puestos-tecnologicos"
     },
     {
      "pre": {
       "es": "The Register. (2025, 1 de mayo).",
       "en": "The Register. (2025, May 1)."
      },
      "title": {
       "es": "Redis \"returns\" to open source with AGPL license",
       "en": "Redis \"returns\" to open source with AGPL license"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.theregister.com/2025/05/01/redis_returns_to_open_source/"
     },
     {
      "pre": {
       "es": "Universidad Nacional de Tres de Febrero. (2026).",
       "en": "Universidad Nacional de Tres de Febrero. (2026)."
      },
      "title": {
       "es": "Admisión",
       "en": "Admisión"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://untref.edu.ar/admision"
     },
     {
      "pre": {
       "es": "Universidad Tecnológica Nacional, Facultad Regional Buenos Aires. (2026).",
       "en": "Universidad Tecnológica Nacional, Facultad Regional Buenos Aires. (2026)."
      },
      "title": {
       "es": "Inscripción ingreso 2027",
       "en": "Inscripción ingreso 2027"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://frba.utn.edu.ar/ingreso/ingresa/"
     },
     {
      "pre": {
       "es": "World Economic Forum. (2025).",
       "en": "World Economic Forum. (2025)."
      },
      "title": {
       "es": "The future of jobs report 2025",
       "en": "The future of jobs report 2025"
      },
      "post": {
       "es": ".",
       "en": "."
      },
      "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
     }
    ]
   }
  ],
  "outcome": null
 }
};
