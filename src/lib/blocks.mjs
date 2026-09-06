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

const facadeIcon = {
  video: icon.play,
  audio: icon.sound,
  doc: icon.doc,
  interactive: icon.spark,
  site: icon.window
};

const ratioFor = (kind) =>
  kind === 'audio' ? 'audio' : kind === 'doc' ? 'tall' : kind === 'site' ? 'site' : 'video';

/* A lazy media surface: nothing third-party loads until the reader asks. */
function mediaFrame({ lang, kind, src, host, label, open, chromeUrl }) {
  const shown = chromeUrl || hostOf(open || src);
  return `<div class="frame">
      <div class="frame__chrome">
        <span class="frame__dots"><i></i><i></i><i></i></span>
        <span class="frame__url">${esc(shown)}</span>
        ${open ? `<a class="frame__open" href="${open}" target="_blank" rel="noopener">${esc(t(ui.openLive, lang))} ${icon.arrowUpRight}</a>` : ''}
      </div>
      <div class="embed" data-ratio="${ratioFor(kind)}" data-src="${esc(src)}" data-title="${esc(t(label, lang))}">
        <button class="facade" type="button">
          <span class="facade__play">${facadeIcon[kind] || icon.play}</span>
          <span class="facade__label">${esc(t(label, lang))}</span>
          <span class="facade__host">${esc(host)}</span>
        </button>
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
    ${mediaFrame({ lang, kind: b.kind, src: b.src, host: b.host, label: b.label, open: b.open })}
  </section>`,

  live: (b, lang) => `<section class="block reveal">
    ${headOf(b, lang)}
    ${mediaFrame({
      lang, kind: 'site', src: b.src, host: hostOf(b.url),
      label: b.label, open: b.url, chromeUrl: b.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
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
