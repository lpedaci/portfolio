/* ==========================================================================
   Lourdes Pedaci — portfolio behaviour
   No dependencies. Everything degrades to a working page without JS.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------ sticky masthead */
  var masthead = document.querySelector('.masthead');
  if (masthead) {
    var onScroll = function () {
      masthead.classList.toggle('is-stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --------------------------------------------------------- mobile sheet */
  var burger = document.querySelector('.burger');
  var sheet = document.getElementById('sheet');
  if (burger && sheet) {
    var setSheet = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      sheet.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        var first = sheet.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      }
    };
    burger.addEventListener('click', function () {
      setSheet(burger.getAttribute('aria-expanded') !== 'true');
    });
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('a')) setSheet(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sheet.classList.contains('is-open')) {
        setSheet(false);
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------------- project filters */
  var filterBar = document.querySelector('.filters');
  var grid = document.getElementById('work-grid');

  if (filterBar && grid) {
    var emptyNote = document.getElementById('work-empty');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      var want = btn.dataset.filter;

      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      var shown = 0;
      grid.querySelectorAll('.card').forEach(function (card) {
        var cats = (card.dataset.cats || '').split(' ');
        var match = want === 'all' || cats.indexOf(want) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });

      if (emptyNote) emptyNote.hidden = shown > 0;
    });
  }

  /* ------------------------------------------- embeds, loaded on demand */
  function mountEmbed(wrap) {
    if (!wrap || wrap.querySelector('iframe')) return;
    var frame = document.createElement('iframe');
    frame.src = wrap.dataset.src;
    frame.loading = 'lazy';
    frame.title = wrap.dataset.title || 'Embedded content';
    frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    wrap.appendChild(frame);
    var facade = wrap.querySelector('.facade');
    if (facade) facade.remove();
  }

  document.querySelectorAll('.embed .facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      mountEmbed(btn.closest('.embed'));
    });
  });

  /* --------------------------------------------------------- image zoom */
  var box = document.getElementById('lightbox');
  if (box) {
    var boxImg = box.querySelector('img');

    document.addEventListener('click', function (e) {
      var img = e.target.closest('.gallery img, .case-cover img');
      if (!img) return;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || '';
      if (typeof box.showModal === 'function') box.showModal();
      else box.setAttribute('open', '');
    });

    box.addEventListener('click', function (e) {
      if (e.target === box || e.target === boxImg) box.close();
    });
    box.addEventListener('close', function () { boxImg.removeAttribute('src'); });
  }

  /* ------------------------------------------------ current section in nav */
  var navLinks = document.querySelectorAll('.nav a[href*="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    navLinks.forEach(function (a) {
      var id = (a.getAttribute('href') || '').split('#')[1];
      if (id) linkFor[id] = a;
    });
    var watched = Object.keys(linkFor)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (watched.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            a.classList.remove('is-current');
            a.removeAttribute('aria-current');
          });
          var a = linkFor[entry.target.id];
          if (a) {
            a.classList.add('is-current');
            a.setAttribute('aria-current', 'true');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      watched.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ----------------------------------------------------- reveal on scroll */
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  targets.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
    io.observe(el);
  });

  /* Safety net: whatever happens to the observer (a backgrounded tab, an
     unsupported edge case), nothing on this site stays invisible. */
  window.setTimeout(function () {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  }, 2500);
})();
