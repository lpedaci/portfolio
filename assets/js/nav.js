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
