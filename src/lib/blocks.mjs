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
