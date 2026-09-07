import { ui } from '../data/site.mjs';
import { icon } from './icons.mjs';
import { t, esc, rel, hostOf } from './layout.mjs';

const headOf = (b, lang) => {
  if (!b.h && !b.note) return '';
  return `<div class="block__head">
      ${b.h ? `<h2>${esc(t(b.h, lang))}</h2>` : ''}
      ${b.note ? `<p class="block__note">${esc(t(b.note, lang))}</p>` : ''}
    </div>`;
};

const ratioFor = (kind) =>
  kind === 'audio' ? 'audio' : kind === 'doc' ? 'tall' : kind === 'site' ? 'site' : 'video';

/* Providers only grant what the frame asks for. Anything not listed here gets
   the plain permission set, which is all an ordinary page needs. */
function allowFor(src) {
  const h = hostOf(src);
  if (/youtube|youtu\.be/.test(h)) {
    return 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  }
  if (/vimeo/.test(h))  return 'autoplay; fullscreen; picture-in-picture';
  if (/spotify/.test(h)) return 'autoplay; clipboard-write; encrypted-media; picture-in-picture';
  if (/google/.test(h))  return 'autoplay';
  return '';
}

/* Every embed needs a way out. When a block does not name one, the source URL
   itself is the escape hatch, so a provider that refuses to be framed still
   leaves the reader something to click. */
function escapeHatch(open, src) {
  if (open) return open;
  return src.replace(/\/preview(\?.*)?$/, '/view');
}

/* The iframe ships in the HTML: the material is live the moment the reader
   arrives, with or without JavaScript. The skeleton only holds the reserved
   box while the provider responds. */
function mediaFrame({ lang, kind, src, label, open, chromeUrl }) {
  const out = escapeHatch(open, src);
  const shown = chromeUrl || hostOf(out);
  const allow = allowFor(src);
  const title = esc(t(label, lang));
  return `<div class="frame">
      <div class="frame__chrome">
        <span class="frame__dots"><i></i><i></i><i></i></span>
        <span class="frame__url">${esc(shown)}</span>
        <a class="frame__open" href="${out}" target="_blank" rel="noopener">${esc(t(ui.openLive, lang))} ${icon.arrowUpRight}</a>
      </div>
      <div class="embed" data-ratio="${ratioFor(kind)}">
        <span class="embed__skeleton" aria-hidden="true"></span>
        <iframe
          src="${esc(src)}"
          title="${title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          ${allow ? `allow="${allow}"` : ''}
          allowfullscreen></iframe>
      </div>
    </div>`;
}

const render = {
  prose: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="prose">${b.p.map((p) => `<p>${esc(t(p, lang))}</p>`).join('')}</div>
  </section>`,

  list: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <dl class="deflist">
      ${b.items.map((it) => `<div>
        <dt>${esc(t(it.lead, lang))}</dt>
        <dd>${esc(t(it.body, lang))}</dd>
      </div>`).join('\n      ')}
    </dl>
  </section>`,

  roadmap: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="roadmap">
      ${b.steps.map((st) => `<article class="rm-step">
        <span class="rm-step__code">${esc(st.code)}</span>
        <h3>${esc(t(st.title, lang))}</h3>
        <p>${esc(t(st.body, lang))}</p>
      </article>`).join('\n      ')}
    </div>
  </section>`,

  callout: (b, lang) => `<aside class="block callout reveal">
    <h2>${esc(t(b.h, lang))}</h2>
    <p>${esc(t(b.body, lang))}</p>
  </aside>`,

  stats: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="statgrid">
      ${b.items.map((s) => `<div><b class="num">${esc(s.value)}</b><span>${esc(t(s.label, lang))}</span></div>`).join('\n      ')}
    </div>
  </section>`,

  cases: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="casegrid">
      ${b.items.map((c) => `<article class="casecard">
        <span class="casecard__tag">${esc(t(c.tag, lang))}</span>
        <h3>${esc(t(c.title, lang))}</h3>
        <p>${esc(t(c.body, lang))}</p>
        <div class="casecard__links">
          ${c.links.map((l) => `<a class="pill pill--ghost" href="${l.url}" target="_blank" rel="noopener">${esc(t(l.label, lang))} ${icon.arrowUpRight}</a>`).join('\n          ')}
        </div>
      </article>`).join('\n      ')}
    </div>
  </section>`,

  embed: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    ${mediaFrame({ lang, kind: b.kind, src: b.src, label: b.label, open: b.open })}
  </section>`,

  live: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    ${mediaFrame({
      lang, kind: 'site', src: b.src, label: b.label, open: b.url, chromeUrl: b.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    })}
  </section>`,

  /* ---------------------------------------------------------------------
     The blocks below exist for one case study: the audit of this site. They
     are specimens, not illustrations. Every swatch is a real token, every
     type row is set in the size it names, every atom is the same markup the
     rest of the site ships. A design system documented in screenshots starts
     lying the day after it is exported; this one cannot drift, because it is
     drawn by the stylesheet it describes.
     --------------------------------------------------------------------- */

  /* swatches: the colour atoms, each carrying its measured contrast. */
  swatches: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="swatches">
      ${b.items.map((c) => `<figure class="swatch">
        ${c.rule
          ? `<span class="swatch__chip swatch__chip--rule"><i style="background:${esc(c.hex)}"></i><i style="background:${esc(c.hex)}"></i><i style="background:${esc(c.hex)}"></i></span>`
          : `<span class="swatch__chip" style="background:${esc(c.hex)}"></span>`}
        <figcaption>
          <b class="swatch__token">${esc(c.token)}</b>
          <span class="swatch__hex num">${esc(c.hex)}</span>
          <span class="swatch__use">${esc(t(c.use, lang))}</span>
          ${c.ratio ? `<span class="swatch__ratio num" data-pass="${c.pass === false ? 'no' : 'yes'}">${esc(c.ratio)}</span>` : ''}
        </figcaption>
      </figure>`).join('\n      ')}
    </div>
  </section>`,

  /* scale: the type ramp, every row set in the step it documents. */
  scale: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="ramp">
      ${b.steps.map((st) => `<div class="ramp__row">
        <div class="ramp__spec">
          <b>${esc(st.name)}</b>
          <span class="num">${esc(st.size)}</span>
          <span>${esc(t(st.use, lang))}</span>
        </div>
        <p class="ramp__specimen ${esc(st.cls)}">${esc(t(st.sample, lang))}</p>
      </div>`).join('\n      ')}
    </div>
  </section>`,

  /* atoms: live components, rendered from the same classes the site uses. */
  atoms: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="atoms">
      ${b.items.map((a) => `<article class="atom">
        <header class="atom__head">
          <b>${esc(a.name)}</b>
          <code>${esc(a.sel)}</code>
        </header>
        <div class="atom__stage">${a.demo}</div>
        <p class="atom__note">${esc(t(a.note, lang))}</p>
      </article>`).join('\n      ')}
    </div>
  </section>`,

  /* journey: what the visitor is doing, and what the interface owes them. */
  journey: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <ol class="journey">
      ${b.stages.map((st, i) => `<li class="jstage">
        <span class="jstage__code num">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(t(st.stage, lang))}</h3>
        <p class="jstage__goal">${esc(t(st.goal, lang))}</p>
        <dl class="jstage__rows">
          <div><dt>${lang === 'es' ? 'Qué hace' : 'Doing'}</dt><dd>${esc(t(st.doing, lang))}</dd></div>
          <div><dt>${lang === 'es' ? 'Qué responde el sitio' : 'What the site answers with'}</dt><dd>${esc(t(st.answer, lang))}</dd></div>
          <div class="jstage__risk"><dt>${lang === 'es' ? 'Dónde se cae' : 'Where it breaks'}</dt><dd>${esc(t(st.risk, lang))}</dd></div>
        </dl>
      </li>`).join('\n      ')}
    </ol>
  </section>`,

  /* compare: the previous build against this one, one dimension per row. */
  compare: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="compare" role="table" aria-label="${esc(t(b.h, lang))}">
      <div class="compare__head" role="row">
        <span role="columnheader">${esc(t(b.dimension, lang))}</span>
        <span role="columnheader">${esc(b.beforeLabel)}</span>
        <span role="columnheader">${esc(b.afterLabel)}</span>
      </div>
      ${b.rows.map((r) => `<div class="compare__row" role="row">
        <span class="compare__dim" role="rowheader">${esc(t(r.dim, lang))}</span>
        <span class="compare__was" role="cell"><em>${esc(b.beforeLabel)}</em>${esc(t(r.was, lang))}</span>
        <span class="compare__now" role="cell"><em>${esc(b.afterLabel)}</em>${esc(t(r.now, lang))}</span>
      </div>`).join('\n      ')}
    </div>
    ${b.foot ? `<p class="block__note compare__foot">${esc(t(b.foot, lang))}</p>` : ''}
  </section>`,

  /* findings: the audit itself, severity first, each with its evidence. */
  findings: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    <ol class="findings">
      ${b.items.map((f) => `<li class="finding" data-state="${esc(f.state)}">
        <div class="finding__meta">
          <span class="finding__id num">${esc(f.id)}</span>
          <span class="finding__sev" data-sev="${esc(f.severity)}">${esc(t(f.severityLabel, lang))}</span>
          <span class="finding__state">${esc(t(f.stateLabel, lang))}</span>
        </div>
        <div class="finding__body">
          <h3>${esc(t(f.title, lang))}</h3>
          <p class="finding__heur">${esc(t(f.heuristic, lang))}</p>
          <dl>
            <div><dt>${lang === 'es' ? 'Evidencia' : 'Evidence'}</dt><dd>${esc(t(f.evidence, lang))}</dd></div>
            <div><dt>${lang === 'es' ? 'Resolución' : 'Resolution'}</dt><dd>${esc(t(f.fix, lang))}</dd></div>
          </dl>
        </div>
      </li>`).join('\n      ')}
    </ol>
  </section>`,

  gallery: (b, lang, depth) => `<section class="block reveal">
    ${headOf(b, lang)}
    <div class="gallery${b.wide ? ' gallery--wide' : ''}">
      ${b.images.map((im) => `<figure><img src="${rel(depth, 'assets/img/' + im.src)}" alt="${esc(t(im.alt, lang))}" loading="lazy" decoding="async"></figure>`).join('\n      ')}
      <p class="gallery__hint">${esc(t(ui.zoomHint, lang))}</p>
    </div>
  </section>`
};

export function renderBlocks(blocks, lang, depth) {
  return blocks
    .map((b) => (render[b.t] ? render[b.t](b, lang, depth) : ''))
    .join('\n\n  ');
}
