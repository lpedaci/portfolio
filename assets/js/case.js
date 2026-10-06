(() => {
  const ROOT = '../../';
  // Versión de los archivos (?v= de este script): las hojas que se cargan después la reusan para no quedar en caché.
  const VERSION = new URL(document.currentScript.src).searchParams.get('v') || '';
  const I18N = window.I18N;
  const CASES = window.CASES;
  const PROJECTS = window.PROJECTS;

  const slug = document.body.dataset.slug;
  const mount = document.getElementById('case');
  const state = { lang: 'es' };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } }
  };
  const t = (key) => I18N[state.lang][key] ?? key;
  const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[state.lang] ?? v.es ?? '') : (v ?? ''));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return ''; } };
  const CAT_KEY = { it: 'catIt', cap: 'catCap', cont: 'catCont' };

  /* Nivel de título de los bloques: h2 por defecto. Dentro de una fase (bloque "phase")
     los bloques bajan a h3, así la página tiene un solo h1 y una jerarquía sin saltos. */
  let H = 2;
  const hx = (n, cls, text) => `<h${n} class="${cls}">${text}</h${n}>`;

  const ext = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener"><span>${esc(label)}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>`;

  /* Cada bloque usa la misma grilla: título a la izquierda, contenido a la derecha.
     Los bloques anchos (sitios, videos, galerías, cifras) llevan el contenido a todo el ancho. */
  function blk(b, body, wide, extra = '') {
    const h = b.h ? hx(H, 'blk__h', esc(L(b.h))) : '';
    const n = b.note ? `<p class="blk__note">${esc(L(b.note))}</p>` : '';
    const headless = !h && !n;
    return `<section class="blk${wide || headless ? ' blk--wide' : ''}${extra}${b.hl ? ' blk--outcome' : ''}">${headless ? '' : `<div class="blk__head">${h}${n}</div>`}<div class="blk__body">${body}</div></section>`;
  }

  function frame(kind, src, open, label, title) {
    const safeSrc = src.replace('www.youtube.com/embed', 'www.youtube-nocookie.com/embed');
    const allow = kind === 'video' ? ' allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen' : (kind === 'audio' ? ' allow="encrypted-media"' : ' allowfullscreen');
    // YouTube y Vimeo necesitan saber desde qué sitio se embebe (si no, YouTube muestra el error 153).
    return `
      <div class="frame frame--${kind}">
        <div class="frame__bar"><span>${esc(host(open || src))}</span>${ext(open || src, t('openNew'))}</div>
        <iframe src="${esc(safeSrc)}" title="${esc(title || label)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"${allow}></iframe>
      </div>`;
  }

  /* Reparte las imágenes en filas parejas (5 con máximo 3 por fila: 3 + 2, nunca 3 + 1 + 1).
     Dentro de cada fila, el ancho de cada foto es proporcional a su relación de aspecto,
     así todas quedan con la misma altura. */
  function rows(images, max, sizes) {
    if (sizes) { let i = 0; return sizes.map((n) => images.slice(i, (i += n))); }
    const count = Math.ceil(images.length / max);
    const out = [];
    let i = 0;
    for (let r = 0; r < count; r++) {
      const size = Math.ceil((images.length - i) / (count - r));
      out.push(images.slice(i, i + size));
      i += size;
    }
    return out;
  }
  // flex-grow proporcional a la relación de aspecto (x100: con valores menores a 1, flexbox no llena la fila)
  const picture = (im, grow = true) => {
    const src = `${ROOT}assets/img/${esc(im.src)}`;
    const imgTag = `<a class="js-zoom" href="${src}" aria-haspopup="dialog"><span class="sr-only">${esc(t('zoomOpen'))}: </span><img src="${src}" width="${im.w}" height="${im.h}" alt="${esc(L(im.alt))}" loading="lazy" decoding="async"></a>`;
    const cap = im.caption ? `<figcaption>${esc(L(im.caption))}</figcaption>` : '';
    return `<figure class="pic"${grow ? ` style="flex-grow:${(im.w / im.h * 100).toFixed(2)}"` : ''}>${imgTag}${cap}</figure>`;
  };


  /* Corta un texto en líneas de hasta n caracteres (para los nodos del user flow). */
  const wrap = (s, n) => s.split(' ').reduce((lines, w) => {
    const last = lines[lines.length - 1];
    if (last && (last + ' ' + w).length <= n) lines[lines.length - 1] = `${last} ${w}`; else lines.push(w);
    return lines;
  }, []);
  const svgText = (x, y, s, n, cls) => {
    const lines = wrap(s, n);
    const y0 = y - ((lines.length - 1) * 15) / 2 + 4.5;
    return `<text class="${cls}" x="${x}" y="${y0}" text-anchor="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? 15 : 0}">${esc(l)}</tspan>`).join('')}</text>`;
  };

  function userFlowSVG(b) {
    const N = (k) => L(b.n[k]);
    const M = 170; const R = 440; // columna principal y columna de ramas
    const rect = (x, y, k, w = 230) => `<g class="uf-proc"><rect x="${x - w / 2}" y="${y - 22}" width="${w}" height="44" rx="6"/>${svgText(x, y, N(k), 28, 'uf-t')}</g>`;
    const pill = (x, y, k) => `<g class="uf-pill"><rect x="${x - 90}" y="${y - 20}" width="180" height="40" rx="20"/>${svgText(x, y, N(k), 22, 'uf-t uf-t--dark')}</g>`;
    const dia = (x, y, k) => `<g class="uf-dec"><polygon points="${x},${y - 44} ${x + 112},${y} ${x},${y + 44} ${x - 112},${y}"/>${svgText(x, y, N(k), 18, 'uf-t')}</g>`;
    const io = (x, y, k) => `<g class="uf-io"><polygon points="${x - 105},${y - 22} ${x + 125},${y - 22} ${x + 105},${y + 22} ${x - 125},${y + 22}"/>${svgText(x, y, N(k), 26, 'uf-t')}</g>`;
    const db = (x, y, k) => `<g class="uf-db"><path d="M${x - 60} ${y - 18} v36 a60 10 0 0 0 120 0 v-36"/><ellipse cx="${x}" cy="${y - 18}" rx="60" ry="10"/>${svgText(x, y + 6, N(k), 16, 'uf-t')}</g>`;
    const ar = (d, dashed) => `<path class="uf-a${dashed ? ' uf-a--dash' : ''}" d="${d}" marker-end="url(#uf-arrow)"/>`;
    const lab = (x, y, s) => `<text class="uf-l" x="${x}" y="${y}">${esc(s)}</text>`;
    const Y = { start: 30, menu: 100, pick: 170, acc: 260, login: 360, read: 440, pre: 535, begin: 630, stage: 725, finish: 820, obs: 915, end: 1010 };
    const yes = L(b.yes); const no = L(b.no);
    return `
      <svg class="uf" viewBox="0 0 600 1040" role="img" aria-labelledby="uf-title uf-desc">
        <title id="uf-title">${esc(L(b.h))}</title><desc id="uf-desc">${esc(L(b.desc))}</desc>
        <defs><marker id="uf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>
        ${ar(`M${M} 50 V76`)}${ar(`M${M} 122 V146`)}${ar(`M${M} 192 V214`)}
        ${ar(`M${M} 304 V336`)}${lab(M + 8, 324, yes)}
        ${ar(`M${M + 112} ${Y.acc} H${R - 115}`)}${lab(M + 120, Y.acc - 8, no)}
        ${ar(`M${R} ${Y.acc + 22} V${Y.login - 50} H${M + 40} V${Y.login - 24}`)}
        <path class="uf-a uf-a--dash" d="M${M + 125} ${Y.login} H${R - 62}"/>
        ${ar(`M${M} 382 V416`)}${ar(`M${M} 462 V489`)}
        ${ar(`M${M} 579 V606`)}${lab(M + 8, 598, yes)}
        ${ar(`M${M + 112} ${Y.pre} H${R - 115}`)}${lab(M + 120, Y.pre - 8, no)}
        ${ar(`M${R} ${Y.pre + 22} V${Y.begin} H${M + 117}`)}
        ${ar(`M${M} 652 V679`)}
        ${ar(`M${M} 769 V796`)}${lab(M + 8, 788, yes)}
        ${ar(`M${M + 112} ${Y.stage} H${R - 115}`)}${lab(M + 120, Y.stage - 8, no)}
        ${ar(`M${R} ${Y.stage - 22} V${Y.stage - 62} H${M + 14} V${Y.stage - 46}`)}
        ${ar(`M${M} 842 V869`)}
        ${ar(`M${M} 959 V988`)}${lab(M + 8, 980, no)}
        ${ar(`M${M + 112} ${Y.obs} H${R - 127}`)}${lab(M + 120, Y.obs - 8, yes)}
        ${ar(`M${R} ${Y.obs + 22} V${Y.end} H${M + 92}`)}
        ${pill(M, Y.start, 'start')}${rect(M, Y.menu, 'menu')}${rect(M, Y.pick, 'pick')}
        ${dia(M, Y.acc, 'acc')}${rect(R, Y.acc, 'create', 220)}
        ${io(M, Y.login, 'login')}${db(R, Y.login, 'db')}
        ${rect(M, Y.read, 'read')}${dia(M, Y.pre, 'pre')}${rect(R, Y.pre, 'prereq', 220)}
        ${rect(M, Y.begin, 'begin')}${dia(M, Y.stage, 'stage')}${rect(R, Y.stage, 'redo', 220)}
        ${rect(M, Y.finish, 'finish')}${dia(M, Y.obs, 'obs')}${io(R, Y.obs, 'doc')}
        ${pill(M, Y.end, 'end')}
      </svg>`;
  }

  function diamondSVG() {
    // Solo la forma: el contenido de cada fase está en la grilla de abajo, alineada con cada mitad.
    return `<svg class="dd" viewBox="0 0 1000 200" aria-hidden="true" preserveAspectRatio="none">
      <polygon class="dd__div" points="0,100 250,4 250,196"/><polygon class="dd__con" points="250,4 500,100 250,196"/>
      <polygon class="dd__div" points="500,100 750,4 750,196"/><polygon class="dd__con" points="750,4 1000,100 750,196"/>
      <polyline class="dd__line" points="0,100 250,4 500,100 750,4 1000,100"/><polyline class="dd__line" points="0,100 250,196 500,100 750,196 1000,100"/>
      <line class="dd__mid" x1="250" y1="4" x2="250" y2="196"/><line class="dd__mid" x1="750" y1="4" x2="750" y2="196"/>
    </svg>`;
  }

  function journeyCurve(stages) {
    const pts = stages.map((s, i) => [50 + i * 100, 60 - s.level * 22]);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + p.join(' ')).join(' ');
    return `<svg class="jc" viewBox="0 0 600 130" aria-hidden="true">
      <line class="jc__base" x1="20" y1="60" x2="580" y2="60"/>
      <path class="jc__line" d="${d}"/>
      ${pts.map((p, i) => `<circle class="jc__pt${stages[i].level < 0 ? ' is-neg' : ''}" cx="${p[0]}" cy="${p[1]}" r="6"/><text class="jc__n" x="${p[0]}" y="124" text-anchor="middle">${String(i + 1).padStart(2, '0')}</text>`).join('')}
    </svg>`;
  }

  let fontsLoaded = false;
  function loadMontserrat() {
    if (fontsLoaded) return;
    fontsLoaded = true;
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = `${ROOT}assets/css/fonts-montserrat.css${VERSION ? `?v=${VERSION}` : ''}`;
    document.head.appendChild(l);
  }

  /* Muestra visual de una combinación de colores ("Aa"). Es una imagen decorativa:
     la combinación y su ratio se leen en el texto de la misma celda. */
  const swatchAa = (fg, bg, ring) => `<svg class="aa" viewBox="0 0 40 32" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="39" height="31" rx="6" fill="${bg}" stroke="${ring ? fg : 'rgb(255 255 255 / 0.08)'}" stroke-width="${ring ? 3 : 1}"/>
      <text x="20" y="21" text-anchor="middle" fill="${ring ? '#191919' : fg}">Aa</text></svg>`;

  const BLOCKS = {
    prose: (b) => blk(b, b.p.map((x) => `<p>${esc(L(x))}</p>`).join(''), false, ' prose'),
    list: (b) => blk(b, `<ul class="items">${b.items.map((x) => `<li><strong>${esc(L(x.lead))}</strong><span>${esc(L(x.body))}</span></li>`).join('')}</ul>`),
    roadmap: (b) => blk(b, `<ol class="steps" style="--n:${b.steps.length}">${b.steps.map((x) => `<li><span class="code">${esc(L(x.code))}</span>${hx(H + 1, '', esc(L(x.title)))}<p>${esc(L(x.body))}</p></li>`).join('')}</ol>`, true),
    callout: (b) => blk({}, `<div class="callout">${hx(H + 1, '', esc(L(b.h)))}<p>${esc(L(b.body))}</p></div>`, true),
    stats: (b) => blk({}, `<div class="stats">${b.items.map((x) => `<div><p class="v">${esc(L(x.value))}</p><p class="l">${esc(L(x.label))}</p></div>`).join('')}</div>`, true),
    cases: (b) => blk(b, `<ul class="cases">${b.items.map((x) => `
      <li><span class="tag">${esc(L(x.tag))}</span>${hx(H + 1, '', esc(L(x.title)))}<p>${esc(L(x.body))}</p>
        <div class="lnks">${(x.links || []).map((k) => `<a class="link-arrow" href="${esc(k.url)}" target="_blank" rel="noopener"><span>${esc(L(k.label))}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>`).join('')}</div>
      </li>`).join('')}</ul>`, true),
    live: (b) => blk(b, frame('live', b.src, b.url, L(b.label), L(b.h) || L(b.label)), true),
    embed: (b) => blk(b, frame(b.kind || 'video', b.src, b.open, L(b.label), L(b.h) || L(b.label)), b.kind !== 'audio'),
    gallery: (b) => blk(b, `<div class="gallery${b.single ? (b.images[0].h > b.images[0].w ? ' gallery--tall' : '') : ''}${b.light ? ' gallery--light' : ''}${b.small ? ' gallery--small' : ''}">${rows(b.images, b.wide ? 2 : 3, b.rowsOf || (b.light ? [4, 1] : null)).map((row) => `<div class="gallery__row">${row.map((im) => picture(im)).join('')}</div>`).join('')}</div>`, true),

    /* ---------- Bloques del caso MurialdoLab (también los usa el de riesgos digitales) ---------- */
    phase: (b) => {
      H = 2;
      const html = `<section class="phase" id="fase-${esc(b.id || b.name.toLowerCase().replace(/\s+/g, '-'))}">
        <p class="phase__n">${b.n ? `${esc(b.n)} | ` : ''}${esc(L(b.mode))}</p>
        ${hx(2, 'phase__h', esc(L(b.name)))}
        <p class="phase__q">${esc(L(b.q))}</p>
      </section>`;
      H = 3;
      return html;
    },
    kv: (b) => blk(b, `<dl class="kv">${b.items.map((x) => `<div><dt>${esc(L(x.k))}</dt><dd>${esc(L(x.v))}</dd></div>`).join('')}</dl>`),
    diamond: (b) => blk(b, `${diamondSVG()}${b.ends ? `<p class="dd__ends">${b.ends.map((x) => `<span>${esc(L(x))}</span>`).join('')}</p>` : ''}<ol class="dd__grid">${b.phases.map((p, i) => `
      <li class="dd__phase"><p class="dd__mode">${String(i + 1).padStart(2, '0')} | ${esc(L(p.mode))}</p>${hx(H + 1, 'dd__name', esc(p.name))}<p class="dd__q">${esc(L(p.q))}</p>
        <ul class="chips">${L(p.items).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></li>`).join('')}</ol>`, true),
    quote: (b) => blk(b, `<blockquote class="quote"><p>“${esc(L(b.body))}”</p></blockquote>${(b.p || []).map((x) => `<p class="quote__more">${esc(L(x))}</p>`).join('')}`),
    cards: (b) => blk(b, `<ul class="xcards" style="--cols:${b.cols || 3}">${b.items.map((x) => `
      <li class="xcard">${x.img ? `<div class="xcard__img">${picture(x.img, false)}</div>` : ''}
        <div class="xcard__txt">${x.title ? hx(H + 1, 'xcard__h', esc(L(x.title))) : ''}${x.tag ? `<p class="xcard__tag">${esc(L(x.tag))}</p>` : ''}<p>${esc(L(x.body))}</p>
        ${x.url && b.cta ? `<a class="link-arrow xcard__link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer"><span>${esc(L(b.cta))}<span class="sr-only">: ${esc(L(x.title))}</span></span><i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>` : ''}</div></li>`).join('')}</ul>`, true),
    empathy: (b) => blk(b, `<div class="emp">${b.quads.map((q) => `
      <section class="emp__q emp__q--${q.k}">${hx(H + 1, 'emp__h', esc(L(q.title)))}<ul>${L(q.items).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>`).join('')}</div>`, true),
    persona: (b) => blk(b, `<div class="persona">
        <div class="persona__head">
          <img class="persona__photo" src="${ROOT}assets/img/${esc(b.photo.src)}" width="${b.photo.w}" height="${b.photo.h}" alt="${esc(L(b.photo.alt))}" loading="lazy" decoding="async">
          <div class="persona__id">${hx(H + 1, 'persona__name', esc(b.name))}
            <dl class="persona__meta">${b.meta.map((m) => `<div><dt>${esc(L(m.k))}</dt><dd>${esc(L(m.v))}</dd></div>`).join('')}</dl>
            <p class="persona__bio">${esc(L(b.bio))}</p></div>
        </div>
        <div class="persona__cols">
          <div>${hx(H + 2, 'persona__l', esc(L(b.goalsL)))}<ul>${L(b.goals).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
          <div>${hx(H + 2, 'persona__l', esc(L(b.painsL)))}<ul>${L(b.pains).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        </div></div>`, true),
    journey: (b) => blk(b, `${journeyCurve(b.stages)}<ol class="jr">${b.stages.map((s, i) => `
      <li class="jr__s"><p class="jr__n">${String(i + 1).padStart(2, '0')}</p>${hx(H + 1, 'jr__h', esc(L(s.name)))}
        <p class="jr__emo${s.level < 0 ? ' is-neg' : (s.level > 0 ? ' is-pos' : '')}"><span>${esc(L(b.labels.emotion))}:</span> ${esc(L(s.emo))}</p>
        <dl><dt>${esc(L(b.labels.actions))}</dt><dd>${esc(L(s.actions))}</dd><dt>${esc(L(b.labels.feel))}</dt><dd>${esc(L(s.feel))}</dd></dl></li>`).join('')}</ol>
      <div class="jr__extra">
        <div>${hx(H + 1, 'jr__xh', esc(L(b.labels.actors)))}<ul class="chips">${L(b.actors).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div>${hx(H + 1, 'jr__xh', esc(L(b.labels.touch)))}<ul class="chips">${L(b.touch).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>`, true),
    bullets: (b) => blk(b, `<ul class="checks">${L(b.items).map((x) => `<li><i class="ph ph-check" aria-hidden="true"></i><span>${esc(x)}</span></li>`).join('')}</ul>${b.foot ? `<p class="blk__foot">${esc(L(b.foot))}</p>` : ''}`),
    taskflow: (b) => blk(b, `<ol class="tf">${L(b.steps).map((x, i, a) => `<li><span class="tf__n">${String(i + 1).padStart(2, '0')}</span><span class="tf__t">${esc(x)}</span>${i < a.length - 1 ? '<i class="ph ph-arrow-right tf__a" aria-hidden="true"></i>' : ''}</li>`).join('')}</ol>`, true),
    userflow: (b) => {
      const item = (x) => (Array.isArray(x) ? `<li>${esc(x[0])}<ul>${x[1].map((y) => `<li>${esc(y)}</li>`).join('')}</ul></li>` : `<li>${esc(x)}</li>`);
      return blk(b, `<div class="ufw"><div class="ufw__svg">${userFlowSVG(b)}</div><ol class="ufw__logic">${L(b.logic).map(item).join('')}</ol></div>`, true);
    },
    swatches: (b) => blk(b, b.groups.map((g) => `
      <div class="swg">${hx(H + 1, 'swg__h', esc(L(g.name)))}<ul class="sw${b.compact ? ' sw--compact' : ''}">${g.items.map((s) => `
        <li><div class="sw__chip" style="background:${s.chip || s.hex}" aria-hidden="true"></div><span class="sw__token">${esc(s.token)}</span><span class="sw__hex">${esc(s.hex)}</span>${s.ratio ? `<span class="sw__ratio">${esc(L(s.ratio))}</span>` : ''}<p class="sw__use">${esc(L(s.use))}</p></li>`).join('')}</ul></div>`).join(''), true),
    typescale: (b) => { loadMontserrat(); return blk(b, `<div class="ts" role="table" aria-label="${esc(L(b.h))}">
      <div class="ts__row ts__row--head" role="row"><span role="columnheader">${esc(L(b.cols.style))}</span><span role="columnheader" class="ts__sample-h"><span class="sr-only">${esc(L(b.cols.sample || { es: 'Muestra', en: 'Sample' }))}</span></span><span role="columnheader">${esc(L(b.cols.weight))}</span><span role="columnheader">${esc(L(b.cols.size))}</span><span role="columnheader">${esc(L(b.cols.ls))}</span></div>
      ${b.rows.map((r) => `<div class="ts__row" role="row"><span role="cell" class="ts__name">${esc(r.name)}</span><span role="cell" class="ts__sample" style="font-weight:${r.w};font-size:min(${r.px / 16}rem, 8.5vw);letter-spacing:${parseFloat(r.ls) / 100}em">${esc(L(b.sample))}</span><span role="cell">${esc(r.wl)}</span><span role="cell">${r.px} px</span><span role="cell">${esc(r.ls)}</span></div>`).join('')}
      </div>`, true); },
    /* ---------- Bloques del caso de riesgos digitales ---------- */
    // Barras horizontales sobre una lista de definición: el valor va escrito al lado de cada barra.
    bars: (b) => {
      const max = Math.max(...b.rows.map((r) => r.v));
      const pct = new Intl.NumberFormat(state.lang === 'en' ? 'en-US' : 'es-AR', { maximumFractionDigits: 1 });
      return blk(b, `<figure class="bars"><figcaption class="bars__cap">${esc(L(b.title))}</figcaption>
        <dl>${b.rows.map((r, i) => `<div class="bars__row${b.lead === i ? ' is-lead' : ''}"><dt>${r.flag ? `<img class="bars__flag" src="${ROOT}assets/img/flags/${esc(r.flag)}.svg" width="21" height="14" alt="">` : ''}${esc(L(r.label))}</dt><dd><span class="bars__track" aria-hidden="true"><span class="bars__fill" style="--w:${(r.v / max * 100).toFixed(1)}%"></span></span><span class="bars__v">${pct.format(r.v)}%</span></dd></div>`).join('')}</dl></figure>`);
    },
    activities: (b) => blk(b, `<ol class="acts">${b.items.map((a, i) => `
      <li class="act"><div class="act__head"><p class="act__n">${String(i + 1).padStart(2, '0')}</p>${hx(H + 1, 'act__h', esc(L(a.title)))}
        ${a.tools ? `<ul class="chips" aria-label="${esc(t('fStack'))}">${a.tools.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>
        <ul class="act__pts">${a.points.map((x) => `<li>${x.lead ? `<strong>${esc(L(x.lead))}.</strong> ` : ''}${esc(L(x.body))}</li>`).join('')}</ul></li>`).join('')}</ol>`, true),
    // Piezas embebidas en grilla compacta: se ven sin ocupar toda la pantalla, y cada una abre completa en otra pestaña.
    media: (b) => blk(b, `<ul class="media">${b.items.map((x) => `<li>${hx(H + 1, 'media__h', esc(L(x.title)))}${frame(x.kind, x.src, x.open, L(x.title), L(x.title))}</li>`).join('')}</ul>`, true),
    ranked: (b) => blk(b, `<ol class="ranked">${b.items.map((x, i) => `<li><span class="ranked__n" aria-hidden="true">${i + 1}</span><span lang="es">${esc(x)}</span></li>`).join('')}</ol>`),

    /* ---------- Bloques del caso de rediseño del portfolio ---------- */
    // Tabla de tres columnas (dimensión, antes, después); en pantallas chicas cada fila se apila con su rótulo.
    compare: (b) => blk(b, `<div class="cmp"><table>
        <thead><tr><th scope="col">${esc(L(b.cols.dim))}</th><th scope="col">${esc(L(b.cols.before))}</th><th scope="col">${esc(L(b.cols.after))}</th></tr></thead>
        <tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(L(r.dim))}</th><td data-l="${esc(L(b.cols.before))}">${esc(L(r.before))}</td><td data-l="${esc(L(b.cols.after))}">${esc(L(r.after))}</td></tr>`).join('')}</tbody></table></div>`, true),
    // Hallazgos: severidad y estado siempre escritos (el color acompaña, no informa solo).
    findings: (b) => {
      const lb = b.labels;
      const sev = { Alta: 'high', High: 'high', Media: 'mid', Medium: 'mid', Baja: 'low', Low: 'low' };
      return blk(b, `<ol class="fnd">${b.items.map((x) => `
        <li class="fnd__i${x.fixed ? ' is-fixed' : ''}${x.img && x.img.w <= 900 ? ' has-img' : ''}">
          <div class="fnd__txt"><p class="fnd__top"><span class="fnd__id">${esc(x.id)}</span><span class="fnd__sev fnd__sev--${sev[L(x.sev)] || 'low'}"><span class="sr-only">${esc(L(lb.sev))}: </span>${esc(L(x.sev))}</span>${x.fixed === undefined ? '' : `<span class="fnd__st">${x.fixed ? '<i class="ph ph-check-circle" aria-hidden="true"></i>' : '<span class="fnd__dot" aria-hidden="true"></span>'}${esc(L(x.fixed ? lb.fixed : lb.recorded))}</span>`}</p>
          ${hx(H + 1, 'fnd__h', esc(L(x.title)))}
          <p class="fnd__heur">${esc(L(x.heur))}</p>
          <dl class="fnd__dl"><div><dt>${esc(L(lb.ev))}</dt><dd>${esc(L(x.ev))}</dd></div><div><dt>${esc(L(lb.res))}</dt><dd>${esc(L(x.res))}</dd></div></dl></div>
          ${x.img ? `<div class="fnd__img${x.img.w > 900 ? ' fnd__img--wide' : ''}">${picture(x.img, false)}</div>` : ''}
        </li>`).join('')}</ol>`, true);
    },

    audit: (b) => blk(b, `<div class="audit"><table>
        <thead><tr><th scope="col">${esc(L(b.cols.pair))}</th><th scope="col">${esc(L(b.cols.ratio))}</th><th scope="col">${esc(L(b.cols.result))}</th><th scope="col">${esc(L(b.cols.fix))}</th></tr></thead>
        <tbody>${b.rows.map((r) => `<tr${r.pass ? ' class="is-pass"' : ''}>
          <td data-l="${esc(L(b.cols.pair))}"><div class="audit__cell">${swatchAa(r.fg, r.bg, r.ring)}<span>${esc(L(r.pair))}</span></div></td>
          <td data-l="${esc(L(b.cols.ratio))}" class="audit__ratio">${esc(L(r.ratio))}</td>
          <td data-l="${esc(L(b.cols.result))}">${r.pass ? `<span class="audit__ok"><i class="ph ph-check-circle" aria-hidden="true"></i>${esc(L(b.pass))}</span>` : `<span class="audit__fail"><i class="ph ph-x-circle" aria-hidden="true"></i>${esc(L(b.fail))}</span>`}</td>
          <td data-l="${esc(L(b.cols.fix))}">${r.pass ? `<span class="audit__none">${esc(L(b.nofix))}</span>` : `<div class="audit__cell">${swatchAa(r.fixfg, r.fixbg, r.fixring)}<span>${esc(L(r.fix))}</span></div>`}</td>
        </tr>`).join('')}</tbody></table></div>`, true)
  };

  function render() {
    const c = CASES[slug];
    const p = PROJECTS.find((x) => x.slug === slug);
    if (!c || !p) {
      mount.innerHTML = `<div class="case__head"><h1 class="case__title">${t('caseMissing')}</h1><p class="case__sub">${t('caseMissingBody')}</p></div>`;
      return;
    }
    document.title = `${L(p.title)} | Lourdes Pedaci`;
    mount.closest('.case').dataset.cat = p.cat;
    // touch: color secundario opcional del caso (por ejemplo 'cap', rosado) para acentos puntuales.
    if (c.touch) mount.closest('.case').dataset.touch = c.touch; else delete mount.closest('.case').dataset.touch;

    const f = c.facts || {};
    const fact = (k, v) => (v && (Array.isArray(v) ? v.length : L(v)) ? `<div><dt>${t(k)}</dt><dd>${esc(Array.isArray(v) ? v.join(', ') : L(v))}</dd></div>` : '');
    const links = c.links || [];
    H = 2;
    // Los tokens de CSS que aparecen en el texto (--line, --ink-70) van en mono: en la fuente de texto, "--" se lee como una raya.
    const blocks = c.blocks.map((b) => (BLOCKS[b.t] ? BLOCKS[b.t](b) : '')).join('')
      .replace(/>([^<]+)</g, (m, txt) => `>${txt.replace(/(^|[\s(])(--[a-z][\w-]*)/g, '$1<code class="tok">$2</code>')}<`);
    H = 2;
    const chips = c.chips ? `<ul class="chips case__chips">${L(c.chips).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '';

    const i = PROJECTS.indexOf(p);
    const nxt = PROJECTS[(i + 1) % PROJECTS.length];
    const nextColor = { it: 'var(--it)', cap: 'var(--cap)', cont: 'var(--cont)' }[nxt.cat];

    mount.innerHTML = `
      <a class="case__back" href="${ROOT}?lang=${state.lang}#proyectos"><i class="ph ph-arrow-left" aria-hidden="true"></i><span>${t('backWork')}</span></a>
      <header class="case__head">
        <p class="case__meta"><span class="case__cat">${t(CAT_KEY[p.cat])}</span>${(p.also || []).map((c) => `<span class="case__cat" style="--c: var(--${c})">${t(CAT_KEY[c])}</span>`).join('')}${(p.badges || []).map((x) => `<span class="case__cat">${esc(x)}</span>`).join('')}${c.chips ? '' : `<span>${esc(p.tags[state.lang].join(' / '))}</span>`}<span>${esc(p.year)}</span></p>
        <h1 class="case__title">${esc(L(c.title) || L(p.title))}</h1>
        ${c.subtitle ? `<p class="case__sub">${esc(L(c.subtitle))}</p>` : ''}
        ${chips}
      </header>
      ${(() => { const items = [fact('fRole', f.role), fact('fTimeline', f.timeline), fact('fContext', f.context), fact('fStack', f.stack), fact('fMethods', f.methods)].filter(Boolean); return `<dl class="facts" style="--n:${items.length}">${items.join('')}</dl>`; })()}
      ${links.length ? `<div class="case__links"><span class="case__links-label">${t('liveLinks')}</span>${links.map((k) => `<a class="btn btn--ghost" href="${esc(k.url)}" target="_blank" rel="noopener"><span>${esc(L(k.label))}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>`).join('')}</div>` : ''}
      <div class="blocks">${blocks}</div>
      ${c.outcome ? blk({ h: t('outcome') }, [].concat(c.outcome.body).map((x) => `<p>${esc(L(x))}</p>`).join(''), false, ' blk--outcome') : ''}
      <a class="next" href="${ROOT}casos/${nxt.slug}/?lang=${state.lang}" style="--next-c:${nextColor}">
        <span class="next__label">${t('nextCase')}</span>
        <span class="next__title"><span>${esc(L(nxt.title))}</span><i class="ph ph-arrow-right" aria-hidden="true"></i></span>
      </a>`;
  }

  function applyLang() {
    document.documentElement.lang = state.lang;
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) { const u = new URL(canon.href); u.search = state.lang === 'en' ? '?lang=en' : ''; canon.href = u.href; }
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
    document.querySelectorAll('[data-nav]').forEach((a) => { a.href = `${ROOT}?lang=${state.lang}#${a.dataset.nav}`; });
    render();
  }

  /* ---------- Visor de imágenes ----------
     Las fotos de los casos se amplían en un diálogo sobre la misma página.
     Un clic en la imagen alterna entre ajustada a la pantalla y tamaño real (con scroll). */
  const viewer = document.createElement('dialog');
  viewer.className = 'viewer';
  viewer.innerHTML = `<button type="button" class="viewer__close"><i class="ph ph-x" aria-hidden="true"></i></button>
    <div class="viewer__stage"></div><p class="viewer__cap"></p>`;
  document.body.appendChild(viewer);
  const vImg = document.createElement('img');
  vImg.className = 'viewer__img';
  const vStage = viewer.querySelector('.viewer__stage');
  const vClose = viewer.querySelector('.viewer__close');
  let vTrigger = null;
  const setZoom = (on) => {
    viewer.classList.toggle('is-zoomed', on);
    vImg.title = t(on ? 'zoomOut' : 'zoomIn');
  };
  mount.addEventListener('click', (e) => {
    const a = e.target.closest('.js-zoom');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    const img = a.querySelector('img');
    vTrigger = a;
    vImg.src = a.href;
    if (!vImg.isConnected) vStage.appendChild(vImg);
    vImg.alt = img.alt;
    viewer.querySelector('.viewer__cap').textContent = img.alt;
    viewer.setAttribute('aria-label', img.alt);
    vClose.setAttribute('aria-label', t('zoomClose'));
    setZoom(false);
    viewer.showModal();
    vStage.scrollTo(0, 0);
  });
  vImg.addEventListener('click', (e) => {
    const zoom = !viewer.classList.contains('is-zoomed');
    const r = vImg.getBoundingClientRect();
    const fx = (e.clientX - r.left) / r.width;
    const fy = (e.clientY - r.top) / r.height;
    setZoom(zoom);
    // Al ampliar, centra el punto donde se hizo clic.
    if (zoom) vStage.scrollTo(fx * vStage.scrollWidth - vStage.clientWidth / 2, fy * vStage.scrollHeight - vStage.clientHeight / 2);
  });
  vClose.addEventListener('click', () => viewer.close());
  // Al cerrar, el foco vuelve a la imagen que abrió el visor.
  viewer.addEventListener('close', () => vTrigger?.focus());
  viewer.addEventListener('click', (e) => { if (e.target === viewer || e.target === vStage) viewer.close(); });

  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    state.lang = b.dataset.lang;
    store.set('lang', state.lang);
    const url = new URL(location.href);
    url.searchParams.set('lang', state.lang);
    history.replaceState(null, '', url);
    applyLang();
  }));

  const fromUrl = new URLSearchParams(location.search).get('lang');
  const saved = store.get('lang');
  state.lang = ['es', 'en'].includes(fromUrl) ? fromUrl : (['es', 'en'].includes(saved) ? saved : 'es');
  applyLang();
})();
