/* Motion graphic del hero: "del boceto al producto".
     <div class="mgp" data-max="1.05"></div>   el teléfono
     <ol class="mgp-steps"></ol>               las etapas de la pantalla actual, tipo roadmap
   El teléfono pasa por cuatro pantallas (ideas, requisitos, wireframe, interfaz final).
   Debajo se muestran las etapas de esa pantalla, que se van completando una por una.
   Color con sentido: cada pantalla tiene su color (ideas ámbar, requisitos turquesa, wireframe rosado,
   producto turquesa); los requisitos funcionales van en turquesa y los no funcionales en rosado;
   la prioridad "should" y el aviso de bajo stock van en ámbar. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const T = {
    es: {
      ideas: ['¿ver el stock?', 'alertas', 'pasarlo a excel', '¿quién entra?', 'ventas del mes', 'desde el celu', 'que sea rápido'],
      reqTitle: 'backlog priorizado',
      reqs: [['RF-01', 'iniciar sesión', 'must'], ['RF-02', 'consultar stock', 'must'], ['RF-03', 'alerta de faltantes', 'must'], ['RF-04', 'roles y permisos', 'should'], ['RF-05', 'exportar a Excel', 'could'], ['RNF-01', 'uso en celular', 'must'], ['RNF-02', 'respuesta < 2 s', 'should']],
      wf: 'wireframe', wfAdj: 'wireframe | ajustado',
      search: 'Buscar producto',
      items: [['Tornillos 6 mm', '240 unidades'], ['Tarugos 8 mm', '12 unidades'], ['Mechas 5 mm', '85 unidades']],
      low: 'bajo stock', exp: 'Exportar a Excel',
      phases: ['ideas sueltas', 'requisitos', 'wireframe', 'UX/UI + requisitos'],
      callouts: ['RF-01', 'RF-02', 'RF-03', 'RNF-01', 'RF-05'],
      steps: [['idea', 'relevar'], ['analizar', 'especificar', 'priorizar'], ['wireframe', 'validar', 'ajustar'], ['diseño UI', 'desarrollo', 'QA', 'entrega']],
      pause: 'Pausar animación', play: 'Reanudar animación',
      label: 'Animación: un teléfono pasa de ideas sueltas a requisitos priorizados, a un wireframe y a la interfaz final con cada requisito señalado. Debajo avanzan las etapas: relevar, especificar, validar, desarrollar y entregar.'
    },
    en: {
      ideas: ['check stock?', 'alerts', 'send it to excel', 'who logs in?', 'monthly sales', 'from my phone', 'make it fast'],
      reqTitle: 'prioritised backlog',
      reqs: [['FR-01', 'sign in', 'must'], ['FR-02', 'check stock', 'must'], ['FR-03', 'low-stock alert', 'must'], ['FR-04', 'user roles', 'should'], ['FR-05', 'export to Excel', 'could'], ['NFR-01', 'mobile use', 'must'], ['NFR-02', 'response < 2 s', 'should']],
      wf: 'wireframe', wfAdj: 'wireframe | adjusted',
      search: 'Search product',
      items: [['Screws 6 mm', '240 units'], ['Wall plugs 8 mm', '12 units'], ['Drill bits 5 mm', '85 units']],
      low: 'low stock', exp: 'Export to Excel',
      phases: ['loose ideas', 'requirements', 'wireframe', 'UX/UI + requirements'],
      callouts: ['FR-01', 'FR-02', 'FR-03', 'NFR-01', 'FR-05'],
      steps: [['idea', 'elicit'], ['analyse', 'specify', 'prioritise'], ['wireframe', 'validate', 'adjust'], ['UI design', 'build', 'QA', 'delivery']],
      pause: 'Pause animation', play: 'Resume animation',
      label: 'Animation: a phone goes from loose ideas to prioritised requirements, to a wireframe and to the final interface with every requirement marked. Below, the stages move forward: elicit, specify, validate, build and deliver.'
    }
  };
  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'es');
  const nf = (id) => /^(RNF|NFR)/.test(id); // requisito no funcional
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const stepsHTML = (group, done) => group.map((t, n) => `${n ? `<li class="mgp-steps__arrow${done ? ' is-on' : ''}" aria-hidden="true"><i class="ph ph-arrow-right"></i></li>` : ''}<li class="mgp-steps__step${done ? ' is-done' : ''}"><i class="ph ph-check" aria-hidden="true"></i><span>${esc(t)}</span></li>`).join('');

  const W = 420;
  const H = 470;
  // Rótulos de requisitos a los costados del teléfono: lado y altura, alineados con el elemento que cumplen.
  const CALLOUTS = [['r', 92], ['l', 152], ['r', 214], ['l', 300], ['r', 372]];

  function screenHTML(s) {
    const ideaPos = [[14, 30, 0], [96, 72, 0], [22, 118, -4], [104, 160, 5], [12, 205, 3], [90, 250, -6], [30, 296, 0]];
    return `
      <div class="mgp__sc">
        <div class="mgp__L" data-l="1">${s.ideas.map((t, i) => `<span class="mgp__idea" style="--d:${i};left:${ideaPos[i][0]}px;top:${ideaPos[i][1]}px;rotate:${ideaPos[i][2]}deg;animation-delay:${-i * 0.6}s">${esc(t)}</span>`).join('')}</div>
        <div class="mgp__L" data-l="2">
          <p class="mgp__mono mgp__rqtitle" style="--d:0">${esc(s.reqTitle)}</p>
          ${s.reqs.map((r, i) => `<div class="mgp__rq${nf(r[0]) ? ' is-nf' : ''}" style="--d:${i + 1};top:${48 + i * 42}px"><b>${r[0]}</b><span>${esc(r[1])}</span><i class="mgp__pr mgp__pr--${r[2]}" style="--p:${i}" title="${r[2]}">${r[2][0].toUpperCase()}</i></div>`).join('')}
        </div>
        <div class="mgp__L" data-l="3">
          <div class="mgp__wf" style="--d:0;left:12px;right:12px;top:28px;height:30px"></div>
          <div class="mgp__wf" style="--d:1;left:140px;top:33px;width:20px;height:20px;border-radius:50%"></div>
          <div class="mgp__wf" style="--d:2;left:12px;right:12px;top:70px;height:28px"></div>
          <div style="--d:3;position:absolute;inset:0">
            ${[110, 162, 214].map((y, i) => `<div class="mgp__wf" style="left:12px;right:12px;top:${y}px;height:44px"></div><div class="mgp__wfl" style="left:22px;top:${y + 12}px;width:${[80, 90, 70][i]}px"></div><div class="mgp__wfl" style="left:22px;top:${y + 26}px;width:${[50, 40, 56][i]}px"></div>`).join('')}
          </div>
          <div class="mgp__wf mgp__wfbtn" style="--d:4;left:12px;right:12px;top:270px;height:34px"></div>
          <p class="mgp__mono mgp__wfnote" style="--d:5">${esc(s.wf)}</p>
        </div>
        <div class="mgp__L mgp__ui" data-l="4">
          <div style="--d:0;left:14px;top:30px;font-size:17px;font-weight:500">Stock</div>
          <div class="mgp__avatar" style="--d:1;left:146px;top:30px">LP</div>
          <div class="mgp__search" style="--d:2;top:70px"><i class="ph ph-magnifying-glass" aria-hidden="true"></i>${esc(s.search)}</div>
          ${s.items.map((it, i) => `<div class="mgp__item${i === 1 ? ' is-low' : ''}" style="--d:${i + 3};top:${112 + i * 54}px"><strong>${esc(it[0])}</strong><span>${esc(it[1])}</span>${i === 1 ? `<em>${esc(s.low)}</em>` : ''}</div>`).join('')}
          <div class="mgp__btn" style="--d:6;top:318px">${esc(s.exp)}</div>
        </div>
      </div>`;
  }

  function build(host) {
    const s = T[lang()];
    host.innerHTML = `
      <div class="mgp__in" style="width:${W}px;height:${H}px" role="img" aria-label="${esc(s.label)}">
        <div aria-hidden="true">
          <p class="mgp__mono mgp__plab"></p>
          <div class="mgp__ph">${screenHTML(s)}</div>
          ${s.callouts.map((c, i) => `<div class="mgp__co${nf(c) ? ' is-nf' : ''}" data-c="${i}" style="${CALLOUTS[i][0] === 'r' ? 'right' : 'left'}:0;top:${CALLOUTS[i][1]}px"><b>${c}</b><i class="ph ph-check" aria-hidden="true"></i></div>`).join('')}
        </div>
      </div>
      <button type="button" class="mgp__toggle" aria-pressed="false" aria-label="${esc(s.pause)}"><i class="ph ph-pause" aria-hidden="true"></i></button>`;
    host.querySelector('.mgp__toggle').addEventListener('click', () => ctl.togglePause());
    fit(host);
  }

  function fit(host) {
    const max = parseFloat(host.dataset.max || '1.05');
    const k = Math.min(max, host.clientWidth / W);
    const inner = host.querySelector('.mgp__in');
    if (!inner) return;
    inner.style.transform = `scale(${k})`;
    inner.style.left = `${Math.max(0, (host.clientWidth - W * k) / 2)}px`;
    host.style.height = `${H * k}px`;
  }

  const ctl = {
    host: null, steps: null, cyc: 0, paused: false, visible: true,
    held() { return this.paused || !this.visible; },
    sleep(ms) {
      return new Promise((r) => {
        let left = ms; let last = performance.now();
        const tick = (now) => { if (!ctl.held()) left -= now - last; last = now; left <= 0 ? r() : requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      });
    },
    togglePause() {
      this.paused = !this.paused;
      const s = T[lang()];
      const b = this.host.querySelector('.mgp__toggle');
      b.setAttribute('aria-pressed', String(this.paused));
      b.setAttribute('aria-label', this.paused ? s.play : s.pause);
      b.querySelector('.ph').className = `ph ${this.paused ? 'ph-play' : 'ph-pause'}`;
      this.host.classList.toggle('is-paused', this.paused);
      this.steps?.classList.toggle('is-paused', this.paused);
    },
    q(sel) { return this.host.querySelector(sel); },

    /* Pantalla del teléfono y grupo de etapas que la acompaña */
    async phase(i) {
      const s = T[lang()];
      this.host.querySelectorAll('.mgp__L').forEach((l) => l.classList.toggle('on', Number(l.dataset.l) === i + 1));
      this.q('.mgp__sc').dataset.phase = String(i + 1);
      this.q('.mgp__in').dataset.phase = String(i + 1);
      if (this.steps) this.steps.dataset.phase = String(i + 1);
      const lab = this.q('.mgp__plab');
      lab.style.opacity = 0;
      setTimeout(() => { lab.textContent = s.phases[i]; lab.style.opacity = 1; }, 280);
      if (!this.steps) return;
      this.steps.classList.add('is-swapping');
      await this.sleep(260);
      this.steps.innerHTML = stepsHTML(s.steps[i], false);
      this.steps.classList.remove('is-swapping');
    },
    step(n) {
      if (!this.steps) return;
      const items = this.steps.querySelectorAll('.mgp-steps__step');
      const arrows = this.steps.querySelectorAll('.mgp-steps__arrow');
      items.forEach((el, k) => { el.classList.toggle('is-done', k < n); el.classList.toggle('is-active', k === n); });
      arrows.forEach((el, k) => el.classList.toggle('is-on', k < n));
    },
    finishGroup() {
      if (!this.steps) return;
      this.steps.querySelectorAll('.mgp-steps__step').forEach((el) => { el.classList.remove('is-active'); el.classList.add('is-done'); });
      this.steps.querySelectorAll('.mgp-steps__arrow').forEach((el) => el.classList.add('is-on'));
    },
    /* Las etapas pueden ocupar una o dos líneas según el ancho y el idioma. Para que el hero no salte
       al cambiar de grupo, se reserva la altura del grupo más alto, medido completo y al ancho actual. */
    reserve() {
      const el = this.steps;
      if (!el || !el.clientWidth) return;
      const probe = document.createElement('ol');
      probe.className = 'mgp-steps';
      probe.setAttribute('aria-hidden', 'true');
      probe.style.cssText = `position:absolute;visibility:hidden;pointer-events:none;width:${el.clientWidth}px;min-height:0;margin:0`;
      el.parentElement.appendChild(probe);
      let max = 0;
      T[lang()].steps.forEach((g) => { probe.innerHTML = stepsHTML(g, true); max = Math.max(max, probe.offsetHeight); });
      probe.remove();
      el.style.minHeight = `${Math.ceil(max)}px`;
    },
    callout(i, ok) {
      const el = this.q(`.mgp__co[data-c="${i}"]`);
      el.classList.add('on');
      el.classList.toggle('ok', !!ok);
    },

    async run() {
      const id = ++this.cyc;
      const s = T[lang()];
      const alive = () => id === this.cyc;
      if (reduce) {
        await this.phase(3);
        this.finishGroup();
        [0, 1, 2, 3, 4].forEach((i) => this.callout(i, true));
        return;
      }
      // Ideas sueltas: idea → relevar
      await this.phase(0); this.step(0); await this.sleep(1700); if (!alive()) return;
      this.step(1); await this.sleep(1900); if (!alive()) return;
      this.finishGroup(); await this.sleep(500); if (!alive()) return;
      // Requisitos: analizar → especificar → priorizar
      await this.phase(1); this.step(0); await this.sleep(1300); if (!alive()) return;
      this.step(1); await this.sleep(1300); if (!alive()) return;
      this.step(2); this.q('.mgp__L[data-l="2"]').classList.add('is-prio'); await this.sleep(1800); if (!alive()) return;
      this.finishGroup(); await this.sleep(500); if (!alive()) return;
      // Wireframe: wireframe → validar → ajustar
      await this.phase(2); this.step(0); await this.sleep(1400); if (!alive()) return;
      this.step(1); await this.sleep(1300); if (!alive()) return;
      this.step(2); this.q('.mgp__wfbtn').style.top = '326px'; this.q('.mgp__wfnote').textContent = s.wfAdj;
      await this.sleep(1600); if (!alive()) return;
      this.finishGroup(); await this.sleep(500); if (!alive()) return;
      // Interfaz final: diseño UI → desarrollo → QA → entrega
      await this.phase(3); this.step(0); await this.sleep(1500); if (!alive()) return;
      this.step(1);
      for (let i = 0; i < 5; i++) { this.callout(i); await this.sleep(260); if (!alive()) return; }
      await this.sleep(500);
      this.step(2);
      for (let i = 0; i < 5; i++) { this.callout(i, true); await this.sleep(220); if (!alive()) return; }
      await this.sleep(500);
      this.step(3); await this.sleep(900); if (!alive()) return;
      this.finishGroup();
      await this.sleep(3200);
      if (alive()) this.restart();
    },
    restart() {
      this.cyc += 1;
      build(this.host);
      this.reserve();
      if (this.paused) { this.paused = false; this.togglePause(); }
      this.run();
    },
    init() {
      this.host = document.querySelector('.mgp');
      this.steps = document.querySelector('.mgp-steps');
      if (!this.host) return;
      this.restart();
      new ResizeObserver(() => { fit(this.host); this.reserve(); }).observe(this.host.parentElement);
      new IntersectionObserver((es) => { this.visible = es.some((e) => e.isIntersecting); }).observe(this.host);
      new MutationObserver(() => this.restart()).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
  };

  window.MGP = ctl;
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', () => ctl.init()) : ctl.init();
})();
