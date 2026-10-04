(() => {
  const I18N = window.I18N;
  const PROJECTS = window.PROJECTS;

  const section = document.getElementById('proyectos');
  const track = document.getElementById('track');
  const status = document.getElementById('work-status');
  const arrows = section.querySelectorAll('.arrow[data-dir]');
  const autoBtn = section.querySelector('.arrow--auto');
  const pathList = document.getElementById('path-list');
  const skillsGrid = document.getElementById('skills-grid');

  const state = { lang: 'es', filter: 'it', view: 'carousel' };

  const CAT_KEY = { it: 'catIt', cap: 'catCap', cont: 'catCont' };

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
    const tags = p.tags[L].map((x) => `<li>${escape(x)}</li>`).join('');
    const skills = p.skills[L].map((x) => `<li>${escape(x)}</li>`).join('');
    const result = p.result
      ? `<dl class="card__result"><dt>${t('result')}</dt><dd>${escape(p.result[L])}</dd></dl>`
      : '';
    return `
      <li style="--i:${i}" aria-label="${i + 1} / ${n}">
        <article class="card" data-cat="${p.cat}">
          <div class="card__top">
            <span class="card__num">${num} | ${escape(p.year)}</span>
            <ul class="card__tags" aria-label="${t(CAT_KEY[p.cat])}">${tags}</ul>
          </div>
          <h3 class="card__title">${escape(p.title[L])}</h3>
          <p class="card__desc">${escape(p.desc[L])}</p>
          ${result}
          <div class="card__foot">
            <ul class="chips">${skills}</ul>
            <a class="card__link" href="casos/${p.slug}/?lang=${L}">
              <span>${t('viewCase')}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      </li>`;
  }

  function render(announce = true) {
    const list = PROJECTS.filter((p) => state.filter === 'all' || p.cat === state.filter);
    track.innerHTML = list.map((p, i) => card(p, i, list.length)).join('');
    track.scrollLeft = 0;
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
      && document.visibilityState === 'visible' && state.view === 'carousel'
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

  /* ---------- Habilidades ---------- */
  function renderSkills() {
    skillsGrid.innerHTML = t('skills').map((g, i) => `
      <li class="skill" data-cat="${g.cat}" style="--i:${i}">
        <h4>${escape(g.name)}</h4>
        <ul class="chips">${g.items.map((x) => `<li>${escape(x)}</li>`).join('')}</ul>
      </li>`).join('');
  }

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
  applyLang();
})();
