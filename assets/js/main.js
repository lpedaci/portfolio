/* ============================================================
   Language toggle (English default, persisted)
   ============================================================ */
function setLang(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.body.classList.toggle('es', lang === 'es');
  document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
  document.getElementById('btn-en').setAttribute('aria-pressed', lang === 'en');
  document.getElementById('btn-es').setAttribute('aria-pressed', lang === 'es');
  try{ localStorage.setItem('lang', lang); }catch(e){}
}
(function(){
  let saved = null;
  try{ saved = localStorage.getItem('lang'); }catch(e){}
  if(saved === 'es') setLang('es');
})();

/* ============================================================
   Dialogs (case studies)
   ============================================================ */
function loadEmbed(wrap){
  if(wrap.querySelector('iframe')) return;
  const iframe = document.createElement('iframe');
  iframe.src = wrap.dataset.src;
  iframe.loading = 'lazy';
  iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  const lbl = wrap.querySelector('.lbl');
  iframe.title = lbl ? lbl.textContent.trim() : 'Embedded content';
  wrap.appendChild(iframe);
  const f = wrap.querySelector('.facade');
  if(f) f.hidden = true;
}
function openDialog(id){
  const d = document.getElementById(id);
  if(!d) return;
  if(typeof d.showModal === 'function'){ if(!d.open) d.showModal(); }
  else { d.setAttribute('open',''); d.scrollIntoView(); }
  /* embeds load automatically when the case study opens */
  d.querySelectorAll('.embed[data-src]').forEach(loadEmbed);
}
/* close on backdrop click */
document.querySelectorAll('dialog.case').forEach(d => {
  d.addEventListener('click', e => {
    if(e.target === d) d.close();
  });
  /* unload heavy iframes on close to free memory */
  d.addEventListener('close', () => {
    d.querySelectorAll('.embed iframe').forEach(f => {
      const wrap = f.parentElement;
      const src = wrap.dataset.src;
      f.remove();
      if(wrap.querySelector('.facade')) wrap.querySelector('.facade').hidden = false;
    });
  });
});

/* ============================================================
   Lazy embeds: iframes load only on demand (performance)
   ============================================================ */
document.querySelectorAll('.embed .facade').forEach(btn => {
  btn.addEventListener('click', () => loadEmbed(btn.parentElement));
});

/* ============================================================
   Project filters
   ============================================================ */
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed','false'));
    chip.setAttribute('aria-pressed','true');
    const f = chip.dataset.filter;
    document.querySelectorAll('#grid .card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cats.split(' ').includes(f)) ? '' : 'none';
    });
  });
});

/* ============================================================
   Image lightbox: click to expand, click image to zoom,
   click outside (backdrop) to close
   ============================================================ */
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
document.querySelectorAll('.gallery img, .about-photo img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lbImg.classList.remove('zoomed');
    if(typeof lb.showModal === 'function') lb.showModal();
    else lb.setAttribute('open','');
  });
});
lbImg.addEventListener('click', e => {
  e.stopPropagation();
  lbImg.classList.toggle('zoomed');
});
lb.addEventListener('click', e => {
  if(e.target !== lbImg) lb.close();
});
lb.addEventListener('close', () => { lbImg.src=''; lbImg.classList.remove('zoomed'); });

document.getElementById('year').textContent = new Date().getFullYear();
