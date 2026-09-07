import { site, ui, home, categories } from '../data/site.mjs';
import { projects } from '../data/projects.mjs';
import { icon, monogram } from './icons.mjs';
import { page, t, esc, rel, paths, depthOf } from './layout.mjs';
import { renderBlocks } from './blocks.mjs';
import {
  identityAlt, projectAlt, identityCardFile, projectCardFile, CARD_W, CARD_H
} from '../og/card.mjs';

/* Every page carries a share card of the same shape, in its own language.
   Built by `npm run og`; see src/og/card.mjs. */
const identityCard = (lang) => ({
  ogImage: identityCardFile(lang),
  ogWidth: CARD_W,
  ogHeight: CARD_H,
  ogAlt: identityAlt(lang)
});

const projectCard = (p, lang) => ({
  ogImage: projectCardFile(p, lang),
  ogWidth: CARD_W,
  ogHeight: CARD_H,
  ogAlt: projectAlt(p, lang)
});

const img = (depth, file) => rel(depth, 'assets/img/' + file);
const catLabel = (id, lang) => {
  const c = categories.find((x) => x.id === id);
  return c ? t(c.label, lang) : id;
};
const idx = (n) => String(n + 1).padStart(2, '0');

/* ---------------------------------------------------------- shared block */
/* The three disciplines as one circuit. The page argues that pedagogy, interface
   and evidence are not separate jobs, and the closing block had dead space on the
   right to say it with: three nodes, three edges, and a signal that keeps moving
   between them. Drawn by hand because it is a diagram of an argument, not an icon. */
function triad(lang) {
  const label = lang === 'es'
    ? 'Diseño de experiencias de aprendizaje, UX y datos, conectados como una sola práctica.'
    : 'Learning experience design, UX and data, connected as one practice.';
  const node = (x, y, text, i) => `<g class="triad__node" style="--i:${i}">
          <circle cx="${x}" cy="${y}" r="43"></circle>
          <text x="${x}" y="${y}" dominant-baseline="central" text-anchor="middle">${text}</text>
        </g>`;
  return `<div class="contact__viz" aria-hidden="false">
        <svg viewBox="0 0 300 272" role="img" aria-label="${esc(label)}">
          <g class="triad__wires">
            <path d="M150 56 L246 212"></path>
            <path d="M246 212 L54 212"></path>
            <path d="M54 212 L150 56"></path>
          </g>
          <circle class="triad__spark" r="4.5" style="--path:path('M150 56 L246 212');--dur:4.2s;--delay:0s"></circle>
          <circle class="triad__spark" r="4.5" style="--path:path('M246 212 L54 212');--dur:4.8s;--delay:.9s"></circle>
          <circle class="triad__spark" r="4.5" style="--path:path('M54 212 L150 56');--dur:4.5s;--delay:1.8s"></circle>
          ${node(150, 56, 'LxD', 0)}
          ${node(246, 212, 'UX', 1)}
          ${node(54, 212, 'Data', 2)}
        </svg>
      </div>`;
}

function contactSection(lang, depth, compact = false) {
  return `<section class="section${compact ? '--tight' : ''}" id="contact">
  <div class="shell">
    <div class="contact${compact ? ' contact--compact' : ''} reveal">
      ${monogram('contact__mark')}
      <div class="contact__copy">
      <div class="contact__inner">
        <p class="eyebrow">${esc(t(home.contactKicker, lang))}</p>
        <h2 class="h-xl" style="margin-top:16px">${esc(t(home.contactTitle, lang))}</h2>
      </div>
      <p>${esc(t(home.contactBody, lang))}</p>
      <div class="contact__actions">
        <a class="pill" href="mailto:${site.email}">${icon.mail} ${site.email}</a>
        <a class="pill pill--outline" href="${site.links.cv}" target="_blank" rel="noopener">${esc(t(ui.viewCv, lang))} ${icon.arrowUpRight}</a>
        <a class="pill pill--outline" href="${site.links.linkedin}" target="_blank" rel="noopener">${icon.linkedin} LinkedIn</a>
        <a class="pill pill--outline" href="${site.links.github}" target="_blank" rel="noopener">${icon.github} GitHub</a>
      </div>
      </div>
      ${triad(lang)}
    </div>
  </div>
</section>`;
}

function cardMarkup(p, i, lang, depth) {
  const href = rel(depth, paths.project(lang, p.slug));
  return `<a class="card reveal" href="${href}" data-cats="${p.cats.join(' ')}">
      <div class="card__frame">
        <img src="${img(depth, p.cover)}" alt="${esc(t(p.coverAlt, lang))}" loading="lazy" decoding="async">
        <span class="card__year num">${idx(i)} / ${esc(p.year)}</span>
        <span class="card__go">${icon.arrowUpRight}</span>
      </div>
      <div class="card__body">
        <span class="card__flag">${esc(catLabel(p.cats[0], lang))}</span>
        <h3 class="card__title">${esc(t(p.title, lang))}</h3>
        <p class="card__desc">${esc(t(p.summary, lang))}</p>
        <div class="tag-row">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
      </div>
    </a>`;
}

/* ------------------------------------------------------------- home page */
export function homePage(lang) {
  const depth = depthOf.home[lang];
  const h = home.headline[lang];

  const body = `
<section class="hero shell">
  <div class="hero__grid">
    <div class="hero__copy">
      <p class="eyebrow reveal">${esc(t(home.eyebrow, lang))}</p>
      <h1 class="display hero__title reveal">${h.map((w) => `<span>${esc(w)}</span>`).join('')}</h1>
      <p class="lead hero__lead reveal">${esc(t(home.lead, lang))}</p>

      <div class="hero__stats reveal">
        ${home.stats.map((s) => `<div class="stat">
          <span class="stat__value num">${esc(t(s.value, lang))}</span>
          <span class="stat__label">${esc(t(s.label, lang))}</span>
        </div>`).join('\n        ')}
      </div>

      <div class="hero__actions reveal">
        <a class="pill pill--ink" href="${site.links.cv}" target="_blank" rel="noopener">${esc(t(ui.viewCv, lang))} ${icon.arrowUpRight}</a>
        <a class="pill" href="${site.links.linkedin}" target="_blank" rel="noopener">${icon.linkedin} LinkedIn</a>
        <a class="pill" href="${site.links.github}" target="_blank" rel="noopener">${icon.github} GitHub</a>
        <a class="pill pill--ghost" href="#work">${esc(t(ui.navWork, lang))} ${icon.arrowDown}</a>
      </div>
    </div>

    <div class="hero__panel reveal">
      <div class="panel"${site.heroPortrait ? ' data-hero="full"' : ''}>
        <div class="panel__crop">
          ${monogram('panel__mark')}
          <span class="panel__ring"></span>
          <img class="panel__photo" src="${img(depth, site.heroPortrait || 'profile-hero.webp')}" alt="${site.name}" fetchpriority="high">
        </div>
        <div class="panel__rail">
          <span class="orb orb--sage">${icon.spark}</span>
          <a class="orb" href="#work" aria-label="${esc(t(ui.navWork, lang))}">${icon.arrowUpRight}</a>
        </div>
        <a class="orb panel__badge" href="${rel(depth, paths.home(lang === 'en' ? 'es' : 'en'))}" aria-label="${lang === 'en' ? 'Ver en español' : 'Read in English'}">${icon.globe}</a>
        <span class="pill panel__caption">UX · LXD · Data</span>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    ${[0, 1].map(() => `<div class="marquee__group">${home.marquee.map((w) => `<span>${esc(w)}</span>`).join('')}</div>`).join('\n    ')}
  </div>
</div>

<section class="section" id="practice">
  <div class="shell">
    <div class="section-head">
      <div class="section-head__title">
        <p class="eyebrow eyebrow--clay reveal">${esc(t(ui.navPractice, lang))} / 01</p>
        <h2 class="h-lg reveal">${esc(t(home.practiceTitle, lang))}</h2>
      </div>
      <p class="lead reveal">${esc(t(home.practiceLead, lang))}</p>
    </div>

    <div class="practice reveal">
      ${home.practices.map((p) => `<article class="practice__cell">
        <span class="practice__num">${p.num}</span>
        <h3 class="h-sm">${esc(t(p.title, lang))}</h3>
        <p class="practice__body">${esc(t(p.body, lang))}</p>
        <div class="tag-row practice__tools">${p.tools.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section" id="work">
  <div class="shell">
    <div class="section-head">
      <div class="section-head__title">
        <p class="eyebrow eyebrow--clay reveal">${esc(t(ui.navWork, lang))} / 02</p>
        <h2 class="h-lg reveal">${esc(t(home.workTitle, lang))}</h2>
      </div>
      <p class="lead reveal">${esc(t(home.workLead, lang))}</p>
    </div>

    <div class="filters reveal" role="group" aria-label="${esc(t(ui.navWork, lang))}">
      <button type="button" data-filter="all" aria-pressed="true">${esc(t(ui.filterAll, lang))}</button>
      ${categories.map((c) => `<button type="button" data-filter="${c.id}" aria-pressed="false">${esc(t(c.label, lang))}</button>`).join('\n      ')}
    </div>

    <p class="filters__status" id="work-status" role="status" aria-atomic="true"
       data-all="${esc(t(ui.showingAll, lang).replace('{n}', String(projects.length)))}"
       data-one="${esc(t(ui.showingOne, lang))}"
       data-many="${esc(t(ui.showingMany, lang))}">${esc(t(ui.showingAll, lang).replace('{n}', String(projects.length)))}</p>

    <div class="work" id="work-grid">
      ${projects.map((p, i) => cardMarkup(p, i, lang, depth)).join('\n      ')}
      <p class="work__empty" id="work-empty" hidden>${esc(t(ui.noMatches, lang))}</p>
    </div>
  </div>
</section>

<section class="section" id="process">
  <div class="shell">
    <div class="section-head">
      <div class="section-head__title">
        <p class="eyebrow eyebrow--clay reveal">${esc(t(ui.navProcess, lang))} / 03</p>
        <h2 class="h-lg reveal">${esc(t(home.processTitle, lang))}</h2>
      </div>
    </div>

    <div class="process">
      <div class="quotecard reveal">
        <blockquote>${esc(t(home.processQuote, lang))}</blockquote>
        <p>${esc(t(home.processQuoteNote, lang))}</p>
      </div>
      <div class="steps">
        ${home.process.map((s) => `<article class="step reveal">
          <span class="step__num">${s.num}</span>
          <h3 class="h-sm">${esc(t(s.title, lang))}</h3>
          <p class="step__body">${esc(t(s.body, lang))}</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="shell">
    <div class="section-head">
      <div class="section-head__title">
        <p class="eyebrow eyebrow--clay reveal">${esc(t(ui.navAbout, lang))} / 04</p>
        <h2 class="h-lg reveal">${esc(t(home.aboutKicker, lang))}</h2>
      </div>
    </div>

    <div class="about">
      <div class="about__portrait reveal">
        <img src="${img(depth, site.heroPortrait || 'profile-hero.webp')}" alt="${site.name}" width="493" height="890" loading="lazy">
        <span class="tag">${esc(t(site.location, lang))}</span>
      </div>
      <div class="reveal">
        <div class="prose">${home.aboutBody[lang].map((p) => `<p>${esc(p)}</p>`).join('')}</div>
        <dl class="facts">
          ${home.aboutFacts.map((f) => `<div>
            <dt>${esc(t(f.label, lang))}</dt>
            <dd>${esc(t(f.value, lang))}</dd>
          </div>`).join('\n          ')}
        </dl>
      </div>
    </div>
  </div>
</section>

${contactSection(lang, depth)}`;

  const title = lang === 'es'
    ? `${site.name} · Diseño de Experiencias de Aprendizaje, UX y Datos`
    : `${site.name} · Learning Experience Design, UX & Data`;

  return page({
    lang,
    depth,
    title,
    description: t(home.lead, lang),
    canonicalPath: paths.home(lang),
    altPath: paths.home(lang === 'en' ? 'es' : 'en'),
    enPath: paths.home('en'),
    esPath: paths.home('es'),
    ...identityCard(lang),
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      jobTitle: t(site.role, lang),
      email: `mailto:${site.email}`,
      url: `${site.domain}/${paths.home(lang)}`,
      sameAs: [site.links.linkedin, site.links.github, site.links.behance],
      knowsLanguage: ['es-AR', 'en'],
      address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' }
    }
  });
}

/* ---------------------------------------------------------- project page */
export function projectPage(p, i, lang) {
  const depth = depthOf.project[lang];

  const factRow = (label, value) =>
    `<div><dt>${esc(label)}</dt><dd>${value}</dd></div>`;

  const body = `
<section class="case-hero shell">
  <div class="case-hero__top">
    <a class="pill pill--ghost" href="${rel(depth, paths.home(lang))}#work">${icon.arrowLeft} ${esc(t(ui.backWork, lang))}</a>
    <span class="tag num">${idx(i)} / ${esc(p.year)}</span>
  </div>

  <div class="case-hero__grid">
    <div>
      <p class="eyebrow eyebrow--clay reveal">${p.cats.map((c) => esc(catLabel(c, lang))).join(' · ')}</p>
      <h1 class="h-xl reveal" style="margin-top:18px">${esc(t(p.title, lang))}</h1>
      <p class="case-hero__sub reveal">${esc(t(p.subtitle, lang))}</p>
    </div>
    <div class="tag-row reveal">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
  </div>
</section>

<div class="shell case-body">
  <aside class="factsheet reveal">
    <h2>${esc(t(ui.factsheet, lang))}</h2>
    <dl>
      ${factRow(t(ui.fRole, lang), esc(t(p.facts.role, lang)))}
      ${factRow(t(ui.fTimeline, lang), esc(t(p.facts.timeline, lang)))}
      ${factRow(t(ui.fContext, lang), esc(t(p.facts.context, lang)))}
      ${factRow(t(ui.fStack, lang), `<div class="tag-row">${p.facts.stack.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>`)}
      ${factRow(t(ui.fMethods, lang), `<div class="tag-row">${p.facts.methods.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>`)}
    </dl>
    ${p.links.length ? `<div class="factsheet__links">
      ${p.links.map((l) => `<a class="pill pill--ghost" href="${l.url}" target="_blank" rel="noopener">${esc(t(l.label, lang))} ${icon.arrowUpRight}</a>`).join('\n      ')}
    </div>` : ''}
  </aside>

  <div class="blocks">
  ${renderBlocks(p.blocks, lang, depth)}

  ${p.outcome ? `<section class="block outcome reveal">
    <h2>${esc(t(p.outcome.h, lang))}</h2>
    <p>${esc(t(p.outcome.body, lang))}</p>
  </section>` : ''}
  </div>
</div>

${contactSection(lang, depth, true)}`;

  return page({
    lang,
    depth,
    title: `${t(p.title, lang)} · ${site.name}`,
    description: t(p.summary, lang),
    canonicalPath: paths.project(lang, p.slug),
    altPath: paths.project(lang === 'en' ? 'es' : 'en', p.slug),
    enPath: paths.project('en', p.slug),
    esPath: paths.project('es', p.slug),
    ...projectCard(p, lang),
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: t(p.title, lang),
      description: t(p.summary, lang),
      inLanguage: lang === 'es' ? 'es-AR' : 'en',
      dateCreated: String(p.year).slice(0, 4),
      creator: { '@type': 'Person', name: site.name, url: site.domain },
      image: `${site.domain}/assets/img/${p.cover}`,
      url: `${site.domain}/${paths.project(lang, p.slug)}`
    }
  });
}

/* -------------------------------------------------------------- 404 page */
/* The dead end. The contact block draws the practice as a circuit: paper nodes,
   dashed ink wires, a sage signal running an offset-path between them. This page
   is that same drawing with the circuit broken. A signal leaves the node it knows
   about, the wire thins out under it, and the node it was heading for never
   resolves: it stays a dashed clay outline, breathing, unreachable. The picture
   is the error message, so it is the only thing on the page that moves. */
function deadEnd(lang) {
  const label = lang === 'es'
    ? 'Una señal sale de una página que existe hacia otra que no: el trazo se desvanece antes de llegar y el destino queda dibujado en punteado.'
    : 'A signal leaves a page that exists and heads for one that does not: the wire fades out before it arrives and the destination stays drawn as an outline.';

  /* The wire runs from the edge of the live node toward the edge of the ghost
     node. Its fade is a user-space gradient so the axis follows that exact
     line rather than the bounding box diagonal. */
  return `<div class="oops__viz reveal">
        <svg viewBox="0 0 320 240" role="img" aria-label="${esc(label)}">
          <defs>
            <linearGradient id="routeFade" gradientUnits="userSpaceOnUse" x1="84" y1="163" x2="217" y2="89">
              <stop offset="0" stop-opacity=".32"></stop>
              <stop offset=".58" stop-opacity=".32"></stop>
              <stop offset=".92" stop-opacity="0"></stop>
            </linearGradient>
          </defs>

          <path class="route__wire" d="M84 163 L217 89"></path>
          <circle class="route__spark" r="4.5"></circle>

          <g class="route__node">
            <circle cx="54" cy="180" r="34"></circle>
          </g>
          <circle class="route__ghost" cx="254" cy="68" r="42"></circle>
        </svg>
      </div>`;
}

export function notFoundPage(lang = 'en') {
  const body = `
<section class="shell oops">
  <div class="oops__copy">
    <p class="eyebrow eyebrow--clay num reveal">404</p>
    <h1 class="display oops__title reveal">${lang === 'es' ? 'perdido' : 'lost'}</h1>
    <p class="lead reveal">${esc(t(ui.notFoundBody, lang))}</p>
    <div class="oops__actions reveal">
      <a class="pill pill--ink" href="${site.domain}/${paths.home(lang)}">${esc(t(ui.backIndex, lang))} ${icon.arrowUpRight}</a>
      <a class="pill" href="${site.domain}/${paths.home(lang)}#work">${esc(t(ui.navWork, lang))} ${icon.arrowRight}</a>
    </div>
  </div>
  ${deadEnd(lang)}
</section>`;

  const self = lang === 'es' ? 'es/404.html' : '404.html';
  const other = lang === 'es' ? '404.html' : 'es/404.html';

  const html = page({
    lang,
    depth: 0,
    title: `${t(ui.notFound, lang)} · ${site.name}`,
    description: t(ui.notFoundBody, lang),
    canonicalPath: self,
    altPath: other,
    enPath: paths.home('en'),
    esPath: paths.home('es'),
    ...identityCard(lang),
    body
  })
    /* The host serves this one file for every missing path, so the page has no
       reliable idea of how deep it sits. Relative links would resolve against
       the broken URL instead of the site root, so every internal link is made
       absolute. Fragments, mail, and data URIs are already location-free. */
    .replace(/(href|src)="(?!https?:|mailto:|#|data:|\/)(?:\.\/)?([^"]*)"/g,
             `$1="${site.domain}/$2"`);

  /* GitHub Pages only ever serves the root 404, so a reader who loses their
     way inside /es/ would land on the English one. Hand them over before the
     English copy paints. */
  return lang === 'en'
    ? html.replace('<body>', `<body>
<script>if(location.pathname.indexOf('/es/')!==-1)location.replace('${site.domain}/es/404.html')</script>`)
    : html;
}
