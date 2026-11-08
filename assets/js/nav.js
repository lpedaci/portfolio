/* Menú del navbar en pantallas chicas: botón que abre y cierra la lista de secciones.
   Se cierra al elegir una sección, con Escape o al tocar fuera. Compartido por todas las páginas. */
(() => {
  const nav = document.querySelector('.nav');
  const toggle = nav?.querySelector('.nav__toggle');
  const list = nav?.querySelector('.nav__links');
  if (!toggle || !list) return;

  const t = (key) => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    return window.I18N?.[lang]?.[key] ?? key;
  };
  const sync = () => {
    const open = nav.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
    toggle.querySelector('.ph').className = `ph ${open ? 'ph-x' : 'ph-list'}`;
  };
  const setOpen = (open) => { nav.classList.toggle('is-open', open); sync(); };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  list.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false); });
  // La etiqueta del botón sigue al idioma de la página
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  sync();

  /* Los links que abren otra pestaña lo avisan a los lectores de pantalla.
     Se aplica también a los links que se dibujan después (casos, cambio de idioma). */
  const markNewTab = () => {
    document.querySelectorAll('a[target="_blank"]').forEach((a) => {
      let s = a.querySelector('.js-newtab');
      if (!s) { s = document.createElement('span'); s.className = 'sr-only js-newtab'; a.appendChild(s); }
      if (s.textContent !== ` ${t('newTab')}`) s.textContent = ` ${t('newTab')}`;
    });
  };
  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; markNewTab(); });
  }).observe(document.body, { childList: true, subtree: true });
  new MutationObserver(markNewTab).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  markNewTab();
})();

/* Fondo: el mismo efecto del hero (grilla que se desvanece, brillo pastel y cuadrados sueltos) repartido al azar
   a lo largo de la página, alternando lados. Es decorativo (aria-hidden) y no tiene movimiento.
   Se rearma solo si la página crece o se achica bastante (por ejemplo, cuando un caso termina de dibujarse). */
(() => {
  const layer = document.createElement('div');
  layer.className = 'fx';
  layer.setAttribute('aria-hidden', 'true');
  document.body.prepend(layer);
  const COLORS = ['var(--it-bright)', 'var(--cap-bright)', 'var(--cont-bright)'];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  let built = 0;
  function build() {
    const h = document.documentElement.scrollHeight;
    // El hero de la portada ya tiene su propio fondo: las manchas empiezan debajo.
    const start = document.querySelector('.hero__bg') ? 900 : 120;
    const step = innerWidth < 768 ? 900 : 1100;
    const n = Math.max(1, Math.floor((h - start) / step));
    if (n === built) return;
    built = n;
    let side = Math.random() < 0.5 ? -1 : 1;
    layer.innerHTML = Array.from({ length: n }, (_, i) => {
      side = -side;
      const top = start + i * step + rnd(0, step * 0.4);
      const left = side < 0 ? rnd(-12, 18) : rnd(52, 82);
      const [a, b, c] = [...COLORS].sort(() => Math.random() - 0.5);
      const squares = Array.from({ length: 3 }, () => `<i style="--x:${rnd(5, 92).toFixed(1)}%;--y:${rnd(10, 85).toFixed(1)}%;--c:${pick(COLORS)}"></i>`).join('');
      return `<div class="fx__spot" style="top:${Math.round(top)}px;left:${left.toFixed(1)}%;--a:${a};--b:${b};--c3:${c}">${squares}</div>`;
    }).join('');
  }
  build();
  let queued = 0;
  new ResizeObserver(() => { clearTimeout(queued); queued = setTimeout(build, 250); }).observe(document.body);
})();
