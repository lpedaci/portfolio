/* Animación del hero: una app para sacar turnos que se diseña y se usa (marcado en index.html, estilos en styles.css).
   1 boceto → 2 wireframe → 3 interfaz (se elige fecha y horario y se confirma) → 4 producto: turno confirmado.
   Las escenas se cambian con data-scene; los toques mueven un círculo hasta cada elemento y lo marcan.
   Se pausa mientras el cursor está encima (o con el foco del teclado, o con un toque en pantallas táctiles),
   cuando sale de la pantalla y con la pestaña oculta. Movimiento reducido: queda en la escena 4. */
(() => {
  const root = document.querySelector('.demo');
  if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel) => root.querySelector(sel);
  const steps = [...root.querySelectorAll('.demo__steps li')];
  const screen = $('.device__screen');
  const touch = $('.touch');

  let paused = false;
  let visible = true;
  let cycle = 0;
  const held = () => paused || !visible || document.hidden;

  // Espera que se detiene mientras la animación está pausada o fuera de la vista
  const sleep = (ms) => new Promise((done) => {
    let left = ms; let last = performance.now();
    const tick = (now) => { if (!held()) left -= now - last; last = now; left <= 0 ? done() : requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });

  function scene(n) {
    root.dataset.scene = String(n);
    steps.forEach((li, i) => { li.classList.toggle('is-on', i + 1 === n); li.classList.toggle('is-done', i + 1 < n); });
  }
  const pop = (name, on = true) => $(`.pop--${name}`).classList.toggle('is-on', on);

  // Lleva el círculo de toque hasta el centro del elemento (en coordenadas de la pantalla, sin la escala de la cámara)
  async function tap(name) {
    const el = $(`[data-tap="${name}"]`);
    const s = screen.getBoundingClientRect(); const r = el.getBoundingClientRect();
    const k = s.width / screen.offsetWidth || 1;
    touch.style.left = `${(r.left + r.width / 2 - s.left) / k}px`;
    touch.style.top = `${(r.top + r.height / 2 - s.top) / k}px`;
    touch.classList.add('is-on');
    await sleep(650);
    touch.classList.remove('is-tap'); void touch.offsetWidth; touch.classList.add('is-tap');
    if (name === 'cta') el.classList.add('is-press'); else el.classList.add('is-sel');
    await sleep(380);
    if (name === 'cta') el.classList.remove('is-press');
  }

  function reset() {
    root.querySelectorAll('.is-sel').forEach((el) => el.classList.remove('is-sel'));
    root.querySelectorAll('.pop').forEach((el) => el.classList.remove('is-on'));
    touch.classList.remove('is-on', 'is-tap');
    touch.style.left = '70%'; touch.style.top = '95%';
  }

  async function run() {
    const id = ++cycle;
    const alive = () => id === cycle;
    reset();
    if (reduce) { scene(4); steps.forEach((li) => li.classList.add('is-done')); return; }

    scene(1); await sleep(500); if (!alive()) return;
    pop('note'); await sleep(2600); if (!alive()) return;

    scene(2); pop('note', false); await sleep(500); if (!alive()) return;
    pop('req'); await sleep(2400); if (!alive()) return;

    scene(3); pop('req', false); await sleep(1300); if (!alive()) return;
    await tap('date'); await sleep(450); if (!alive()) return;
    await tap('time'); await sleep(500); if (!alive()) return;
    await tap('cta'); if (!alive()) return;

    touch.classList.remove('is-on');
    scene(4); await sleep(1500); if (!alive()) return;
    pop('push'); await sleep(3600); if (!alive()) return;
    pop('push', false); await sleep(500);
    if (alive()) run();
  }

  // Pausa: con el cursor encima (y sigue al salir), con el foco del teclado o, en táctiles, tocando la animación
  const setPaused = (v) => { paused = v; root.classList.toggle('is-paused', v); };
  root.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') setPaused(true); });
  root.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') setPaused(false); });
  root.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') setPaused(!paused); });
  root.addEventListener('focus', () => setPaused(true));
  root.addEventListener('blur', () => setPaused(false));
  new IntersectionObserver((es) => { visible = es.some((e) => e.isIntersecting); }).observe(root);

  run();
})();
