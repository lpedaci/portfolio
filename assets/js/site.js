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
  /* The sheet covers the whole viewport, so it is a modal whether or not it
     was built as one. Without the trap, Tab past the last link walks the page
     underneath the overlay and the reader loses the menu without knowing it. */
  var burger = document.querySelector('.burger');
  var sheet = document.getElementById('sheet');
  if (burger && sheet) {
    var setSheet = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      sheet.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        /* This lands synchronously because the stylesheet flips the sheet to
           visible with no delay on the way in. It used to fail silently: while
           visibility was still transitioning, nothing inside was focusable. */
        var first = sheet.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      } else {
        burger.focus({ preventScroll: true });
      }
    };
    burger.addEventListener('click', function () {
      setSheet(burger.getAttribute('aria-expanded') !== 'true');
    });
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('a')) setSheet(false);
    });
    document.addEventListener('keydown', function (e) {
      if (!sheet.classList.contains('is-open')) return;
      if (e.key === 'Escape') { setSheet(false); return; }
      if (e.key !== 'Tab') return;
      /* The burger is the way out, so it belongs inside the cycle. */
      var stops = [burger].concat(
        Array.prototype.slice.call(sheet.querySelectorAll('a[href], button'))
      );
      var first = stops[0];
      var last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  /* ------------------------------------------------------- project filters */
  var filterBar = document.querySelector('.filters');
  var grid = document.getElementById('work-grid');

  if (filterBar && grid) {
    var emptyNote = document.getElementById('work-empty');
    /* Filtering rewrites the grid silently: a sighted reader sees ten cards
       become three, a screen-reader reader hears nothing at all. One atomic
       status message, phrased as a sentence rather than a bare number. */
    var status = document.getElementById('work-status');

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
      if (status) {
        /* "Showing 11 projects in All" is a sentence nobody says. The
           unfiltered view gets its own phrasing. */
        var tpl = want === 'all' ? status.dataset.all
                : shown === 1 ? status.dataset.one
                : status.dataset.many;
        status.textContent = tpl
          .replace('{n}', String(shown))
          .replace('{cat}', btn.textContent.trim());
      }
    });
  }

  /* ------------------------------------------------------------- embeds */
  /* Iframes ship in the HTML and load natively, so every embed is already
     playable when the visitor gets there, with or without JS. All this does
     is retire the placeholder once the provider has painted. */
  document.querySelectorAll('.embed').forEach(function (wrap) {
    var frame = wrap.querySelector('iframe');
    if (!frame) return;
    var settle = function () { wrap.classList.add('is-ready'); };
    if (frame.complete) settle();
    frame.addEventListener('load', settle, { once: true });
    /* Providers that never fire load (cross-origin quirks, blocked third-party
       cookies) must not leave a shimmer running forever. */
    window.setTimeout(settle, 6000);
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

  /* Anything already on screen at first paint is shown immediately and never
     observed. The reveal is a scroll reward; it has no business holding the
     h1, the lead and the portrait at opacity 0 while the observer warms up. */
  var fold = window.innerHeight * 0.94;
  var pending = [];
  targets.forEach(function (el) {
    /* is-instant, not just is-in: a 700ms fade on the h1 is still 700ms of
       the reader looking at nothing. Above the fold there is no scroll to
       reward, so the element is simply there. */
    if (el.getBoundingClientRect().top < fold) el.classList.add('is-in', 'is-instant');
    else pending.push(el);
  });
  if (!pending.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  pending.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
    io.observe(el);
  });

  /* Safety net: whatever happens to the observer (a backgrounded tab, an
     unsupported edge case), nothing on this site stays invisible. */
  window.setTimeout(function () {
    pending.forEach(function (el) { el.classList.add('is-in'); });
  }, 2500);
})();
