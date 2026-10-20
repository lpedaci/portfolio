(() => {
  const I18N = window.I18N;
  const PROJECTS = window.PROJECTS;

  const section = document.getElementById('proyectos');
  const track = document.getElementById('track');
  const status = document.getElementById('work-status');
  const arrows = section.querySelectorAll('.arrow[data-dir]');
  const autoBtn = section.querySelector('.arrow--auto');
  const pos = document.getElementById('work-pos');
  // En celular: solo carrusel (se desliza con el dedo), sin controles de vista, sin flechas y sin avance automático.
  const mobile = matchMedia('(max-width: 767px)');
  const pathList = document.getElementById('path-list');
  const skillsGrid = document.getElementById('skills-grid');

  const state = { lang: 'es', filter: 'it', view: 'carousel' };

  const CAT_KEY = { it: 'catIt', cap: 'catCap', cont: 'catCont' };
  const CAT_ORDER = ['it', 'cap', 'cont'];

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } }
  };

  const t = (key) => I18N[state.lang][key] ?? key;
  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- Idioma ---------- */
  function applyLang() {
    const L = state.lang;
    document.documentElement.lang = L;
    document.title = t('docTitle');
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) { const u = new URL(canon.href); u.search = state.lang === 'en' ? '?lang=en' : ''; canon.href = u.href; }
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === L)));
    render(false);
    renderPath();
    renderSkills();
    if (autoBtn && typeof syncAutoBtn === 'function') syncAutoBtn();
  }

  /* ---------- Proyectos ---------- */
  function card(p, i, n) {
    const L = state.lang;
    const num = String(PROJECTS.indexOf(p) + 1).padStart(2, '0');
    // Etiquetas como chips, cada una con el color de su categoría y ordenadas IT, capacitación, contenido.
    // also: categorías adicionales del proyecto (por ejemplo IT que además fue capacitación).
    const tags = [...p.tags[L].map((x) => [p.cat, x]), ...(p.also || []).map((c) => [c, p.alsoTags?.[c]?.[L] ?? t(CAT_KEY[c]).toLowerCase()])]
      .sort((a, b) => CAT_ORDER.indexOf(a[0]) - CAT_ORDER.indexOf(b[0]))
      .map(([c, x]) => `<li style="--c: var(--${c})">${escape(x)}</li>`).join('');
    // Sin "+N" en la tarjeta: las etiquetas van en una sola línea y la lista completa está en el caso.
    // La tarjeta muestra lo esencial (portada, título, descripción y resultado); herramientas y detalle quedan en el caso.
    const result = p.result ? `<p class="card__result"><span class="sr-only">${t('result')}: </span>${escape(p.result[L])}</p>` : '';
    // Portada: captura del proyecto o, si no hay, una generada con el color de la categoría.
    // Es decorativa (alt vacío): el título de la card ya nombra el proyecto.
    const src = p.cover || '';
    const media = src
      ? `<img src="${src}" alt="" loading="lazy" decoding="async" width="800" height="500">${p.video ? '<span class="card__play" aria-hidden="true"><i class="ph ph-play"></i></span>' : ''}`
      : `<span class="card__ph" aria-hidden="true"><span class="card__ph-n">${num}</span><span class="card__ph-t">${escape(t(CAT_KEY[p.cat]))}</span></span>`;
    // Toda la tarjeta es un enlace: el título lleva el enlace y su ::after cubre la tarjeta
    return `
      <li style="--i:${i}" aria-label="${i + 1} / ${n}">
        <article class="card" data-cat="${p.cat}">
          <div class="card__media${src ? '' : ' card__media--ph'}" aria-hidden="true">${media}<span class="card__year">${escape(p.year)}</span></div>
          <div class="card__body">
            <ul class="card__tags" aria-label="${t(CAT_KEY[p.cat])}">${tags}</ul>
            <h3 class="card__title"><a class="card__hit" href="casos/${p.slug}/?lang=${L}">${escape(p.title[L])}</a></h3>
            <p class="card__desc">${escape(p.desc[L])}</p>
            <p class="sr-only">${escape(p.year)}</p>
            ${result}
            <span class="card__go" aria-hidden="true"><i class="ph ph-arrow-up-right"></i></span>
          </div>
        </article>
      </li>`;
  }

  function render(announce = true) {
    const list = PROJECTS.filter((p) => state.filter === 'all' || p.cat === state.filter || (p.also || []).includes(state.filter));
    track.innerHTML = list.map((p, i) => card(p, i, list.length)).join('');
    track.scrollLeft = 0;
    observePos();
    if (announce) {
      status.textContent = (list.length === 1 ? t('countOne') : t('countMany')).replace('{n}', list.length);
    }
    observeEdges();
  }

  function setFilter(f) {
    state.filter = f;
    section.dataset.filter = f;
    section.querySelectorAll('[data-filter].seg__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === f)));
    render();
    if (typeof autoRestart === 'function') autoRestart();
  }

  function setView(v) {
    state.view = v;
    section.dataset.view = v;
    section.querySelectorAll('[data-view].seg__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
    track.scrollLeft = 0;
    observeEdges();
  }

  /* ---------- Carrusel: flechas y estado de bordes ---------- */
  function step(dir) {
    const item = track.firstElementChild;
    if (!item) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: dir * (item.getBoundingClientRect().width + gap), behavior: 'smooth' });
  }

  let edgeObserver;
  function observeEdges() {
    edgeObserver?.disconnect();
    const first = track.firstElementChild;
    const last = track.lastElementChild;
    if (!first || state.view !== 'carousel') return;
    const seen = new Map();
    edgeObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.intersectionRatio > 0.9));
      arrows[0].disabled = seen.get(first) ?? true;
      arrows[1].disabled = seen.get(last) ?? true;
    }, { root: track, threshold: [0, 0.9, 1] });
    edgeObserver.observe(first);
    if (last !== first) edgeObserver.observe(last);
    else arrows[1].disabled = true;
  }

  /* ---------- Carrusel en celular: posición "3 / 13" según la tarjeta visible ---------- */
  let posObserver;
  function observePos() {
    posObserver?.disconnect();
    const items = [...track.children];
    if (!pos) return;
    pos.textContent = items.length ? `1 / ${items.length}` : '';
    if (!items.length || !('IntersectionObserver' in window)) return;
    posObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.intersectionRatio > 0.6) pos.textContent = `${items.indexOf(e.target) + 1} / ${items.length}`; });
    }, { root: track, threshold: [0.6] });
    items.forEach((li) => posObserver.observe(li));
  }

  /* ---------- Carrusel: desplazamiento automático ----------
     Avanza una tarjeta cada 5 s y vuelve al inicio al llegar al final.
     Se detiene con el mouse encima, con el foco dentro, fuera de pantalla,
     con la pestaña en segundo plano, en vista grilla y con movimiento reducido. */
  const AUTO_MS = 5000;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const auto = { paused: reduceMotion, hover: false, focus: false, visible: false, touchUntil: 0, timer: null };

  function autoAdvance() {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
    else step(1);
  }
  function autoTick() {
    const canRun = !auto.paused && !auto.hover && !auto.focus && auto.visible
      && document.visibilityState === 'visible' && state.view === 'carousel' && !mobile.matches
      && Date.now() > auto.touchUntil && track.scrollWidth > track.clientWidth + 4;
    if (canRun) autoAdvance();
  }
  function autoRestart() {
    clearInterval(auto.timer);
    auto.timer = setInterval(autoTick, AUTO_MS);
  }
  function syncAutoBtn() {
    autoBtn.setAttribute('aria-pressed', String(auto.paused));
    autoBtn.setAttribute('aria-label', t(auto.paused ? 'autoPlay' : 'autoPause'));
    autoBtn.querySelector('.ph').className = `ph ${auto.paused ? 'ph-play' : 'ph-pause'}`;
  }
  autoBtn.addEventListener('click', () => { auto.paused = !auto.paused; syncAutoBtn(); autoRestart(); });
  track.addEventListener('mouseenter', () => { auto.hover = true; });
  track.addEventListener('mouseleave', () => { auto.hover = false; autoRestart(); });
  track.addEventListener('focusin', () => { auto.focus = true; });
  track.addEventListener('focusout', () => { auto.focus = false; autoRestart(); });
  track.addEventListener('touchstart', () => { auto.touchUntil = Date.now() + 8000; }, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { auto.visible = e.isIntersecting; }, { threshold: 0.4 }).observe(track);
  } else {
    auto.visible = true;
  }
  autoRestart();

  /* ---------- Recorrido ---------- */
  function renderPath() {
    const steps = t('path');
    const last = steps.length - 1;
    pathList.innerHTML = steps.map((s, i) => {
      const tag = i === 0 ? `<span class="step__tag">${t('pathFrom')}</span>` : (s.target ? `<span class="step__tag">${t('pathTo')}</span>` : '');
      return `
        <li class="step${s.target ? ' step--target' : ''}" style="--t:${(i / last).toFixed(3)};--i:${i}">
          <p class="step__meta"><span class="step__year">${escape(s.year)}</span>${tag}<span class="step__org">${escape(s.org)}</span></p>
          <h3 class="step__role">${escape(s.role)}${s.role2 ? `<span class="step__plus"><span aria-hidden="true">+ </span>${escape(s.role2)}</span>` : ''}</h3>
          <p class="step__body">${escape(s.body)}</p>
        </li>`;
    }).join('');
  }

  /* ---------- Hero ---------- */
  /* Franja de herramientas: solo herramientas reales (las de Habilidades y las de las cards), mezcladas
     para que se vea cada área enseguida. El color es el de la categoría. Los nombres no se traducen. */
  const TOOLS = [
    ['it', 'Claude'], ['it', 'Figma'], ['cap', 'Articulate 360'], ['cont', 'Camtasia'],
    ['it', 'ChatGPT'], ['it', 'Notion'], ['cap', 'Moodle'], ['cont', 'CapCut'],
    ['it', 'Gemini'], ['it', 'SQL'], ['cap', 'Canva'], ['cont', 'Adobe Premiere'],
    ['it', 'NotebookLM'], ['it', 'Power BI'], ['cap', 'Storyline'], ['cont', 'After Effects'],
    ['it', 'Copilot'], ['it', 'GitHub'], ['cap', 'Genially'], ['cont', 'vMix'],
    ['it', 'ElevenLabs'], ['it', 'Excel'], ['cap', 'Rise'], ['cont', 'YouTube'],
    ['it', 'Suno'], ['it', 'JavaScript'], ['cap', 'iSpring'], ['it', 'Runway ML'],
    ['it', 'HTML'], ['cap', 'MS Teams'], ['it', 'Adobe Firefly'], ['it', 'CSS'],
    ['cap', 'PowerPoint'], ['it', 'MySQL Workbench'], ['cap', 'PowToon'], ['it', 'Google Sheets'],
    ['cap', 'LinkedIn Learning'], ['it', 'Google Apps Script'], ['it', 'Lighthouse'], ['it', 'GitHub Pages'],
    ['it', 'PageSpeed Insights'], ['it', 'Slack'], ['it', 'Node'], ['it', 'Google Workspace'], ['it', 'Microsoft Office']
  ];
  function initHero() {
    const stream = document.getElementById('hero-stream');
    if (stream) {
      // La lista va dos veces para que el desplazamiento no tenga corte; la copia se oculta a lectores de pantalla
      const li = (hide) => TOOLS.map(([c, x]) => `<li style="--c:var(--${c}-bright)"${hide ? ' aria-hidden="true"' : ''}>${escape(x)}</li>`).join('');
      stream.innerHTML = li(false) + li(true);
      const pace = () => stream.style.setProperty('--dur', `${Math.round(stream.scrollWidth / 2 / 38)}s`);
      pace();
      document.fonts?.ready.then(pace);
    }
    // Cantidades por categoría principal, tomadas de PROJECTS
    const n = { it: 0, cap: 0, cont: 0 };
    PROJECTS.forEach((p) => { n[p.cat] += 1; });
    Object.keys(n).forEach((c) => {
      const num = document.querySelector(`.count__legend [data-n="${c}"]`);
      if (num) num.textContent = n[c];
      document.querySelector(`.count__bar [data-cat="${c}"]`)?.style.setProperty('--n', n[c]);
    });
    const out = document.getElementById('hero-n');
    if (out) {
      const total = PROJECTS.length;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) out.textContent = total;
      else {
        const t0 = performance.now() + 350;
        const tick = (now) => {
          const k = Math.min(1, Math.max(0, (now - t0) / 900));
          out.textContent = Math.round(total * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(tick);
        };
        out.textContent = 0;
        requestAnimationFrame(tick);
      }
    }

  }

  /* ---------- Habilidades ---------- */
  function renderSkills() {
    skillsGrid.innerHTML = t('skills').map((g, i) => `
      <li class="skill" data-cat="${g.cat}"${g.tone ? ` data-tone="${g.tone}"` : ''} style="--i:${i}">
        <h4>${escape(g.name)}</h4>
        <ul class="chips">${g.items.map((x, k) => `<li style="--k:${k}">${escape(x)}</li>`).join('')}</ul>
      </li>`).join('');
    skillsGrid.querySelectorAll('.chips').forEach((ul) => { packChips(ul); chipsObserver?.observe(ul); });
  }

  /* Chips de habilidades sin huecos: respetan su orden y, cuando el siguiente no entra en la fila,
     se trae uno posterior que sí entre (relleno hacia atrás). Solo cambia el orden visual (CSS order);
     las filas después se estiran para completar el ancho. Se recalcula cuando cambia el ancho. */
  function packChips(ul) {
    const items = [...ul.children];
    ul.classList.add('is-measuring');
    const width = ul.clientWidth;
    const gap = parseFloat(getComputedStyle(ul).columnGap) || 0;
    const w = items.map((li) => li.getBoundingClientRect().width);
    ul.classList.remove('is-measuring');
    const left = items.map((_, i) => i);
    let order = 0;
    while (left.length) {
      let used = 0;
      for (let k = 0; k < left.length;) {
        const i = left[k];
        const need = (used ? gap : 0) + w[i];
        if (used === 0 || used + need <= width + 0.5) {
          items[i].style.order = order++;
          used += need;
          left.splice(k, 1);
        } else k++;
      }
    }
  }
  const chipWidths = new WeakMap();
  const chipsObserver = 'ResizeObserver' in window ? new ResizeObserver((entries) => {
    entries.forEach((e) => {
      const w = Math.round(e.contentRect.width);
      if (chipWidths.get(e.target) !== w) { chipWidths.set(e.target, w); packChips(e.target); }
    });
  }) : null;

  // La línea y los pasos aparecen una sola vez, cuando la sección entra en pantalla
  if ('IntersectionObserver' in window) {
    pathList.classList.add('is-pending');
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        pathList.classList.remove('is-pending');
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(pathList);
  }

  // Las tarjetas de habilidades entran una sola vez, al llegar a ellas
  if ('IntersectionObserver' in window) {
    skillsGrid.classList.add('is-pending');
    const sio = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { skillsGrid.classList.remove('is-pending'); sio.disconnect(); }
    }, { threshold: 0.1 });
    sio.observe(skillsGrid);
  }

  /* ---------- Navbar: resalta la sección visible ----------
     Una franja en el centro de la pantalla decide qué sección está activa.
     Al hacer clic, el link queda marcado y se ignoran las secciones intermedias
     hasta que termina el desplazamiento. Al llegar al pie, se marca Contacto. */
  const navLinks = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const spySections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  let spyLock = 0;
  let spyCurrent = null;
  function setActive(id) {
    if (id === spyCurrent) return;
    spyCurrent = id;
    navLinks.forEach((a) => {
      const on = id !== null && a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window && spySections.length) {
    const inBand = new Set();
    let atBottom = false;
    const decide = () => {
      if (Date.now() < spyLock) return;
      if (atBottom) { setActive(spySections[spySections.length - 1].id); return; }
      const visible = spySections.filter((sec) => inBand.has(sec.id));
      setActive(visible.length ? visible[visible.length - 1].id : null);
    };
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? inBand.add(e.target.id) : inBand.delete(e.target.id)));
      decide();
    }, { rootMargin: '-45% 0px -50% 0px' });
    spySections.forEach((sec) => spy.observe(sec));
    const foot = document.querySelector('.foot');
    if (foot) {
      new IntersectionObserver(([e]) => { atBottom = e.isIntersecting; decide(); }, { threshold: 0.5 }).observe(foot);
    }
    navLinks.forEach((a) => a.addEventListener('click', () => {
      setActive(a.getAttribute('href').slice(1));
      spyLock = Date.now() + 1200;
    }));
    window.addEventListener('scrollend', () => { spyLock = 0; decide(); });
    document.querySelector('.nav__brand')?.addEventListener('click', () => { setActive(null); spyLock = Date.now() + 1200; });
  }

  /* ---------- Eventos ---------- */
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    state.lang = b.dataset.lang;
    store.set('lang', state.lang);
    const url = new URL(location.href);
    url.searchParams.set('lang', state.lang);
    history.replaceState(null, '', url);
    applyLang();
  }));
  section.querySelectorAll('[data-filter].seg__btn').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  section.querySelectorAll('[data-view].seg__btn').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
  // Al pasar a celular, la vista vuelve a carrusel (la grilla no se puede elegir ahí)
  mobile.addEventListener('change', (e) => { if (e.matches && state.view !== 'carousel') setView('carousel'); });
  document.fonts?.ready.then(() => { skillsGrid.querySelectorAll('.chips').forEach(packChips); });
  arrows.forEach((a) => a.addEventListener('click', () => { step(Number(a.dataset.dir)); autoRestart(); }));
  track.addEventListener('keydown', (e) => {
    if (state.view !== 'carousel') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); autoRestart(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); autoRestart(); }
  });

  /* ---------- Inicio ---------- */
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const saved = store.get('lang');
  state.lang = ['es', 'en'].includes(fromUrl) ? fromUrl : (['es', 'en'].includes(saved) ? saved : 'es');
  initHero();
  applyLang();
})();
