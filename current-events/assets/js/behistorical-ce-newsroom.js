/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, SHARED NEWSROOM BEHAVIOR
   File: assets/js/behistorical-ce-newsroom.js

   Progressive enhancement only. Every page works with this file blocked:
   the ticker sits still, sections are visible, and the scale rail falls back
   to stacked panels. Nothing here is required to read the page.

   Provides window.CE with:
     CE.spineColor(i, total)  interpolated NOW -> ORIGIN color for spine nodes
     CE.paintSpine(root)      sets --node on every .spine-item under root
     CE.reveal(root)          scroll reveals, skipped under reduced motion
     CE.wireScaleRail(root)   Local to Global tab behavior
     CE.esc(str)              minimal HTML escape for data-driven rendering
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── color helpers ─────────────────────────────────────────────────────── */
  function token(name, fallback) {
    var v = getComputedStyle(document.documentElement)
      .getPropertyValue(name).trim();
    return v || fallback;
  }
  function hexToRgb(hex) {
    var h = hex.replace('#', '').trim();
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  /**
   * The gradient that carries the meaning: lit present, dark past.
   * i = 0 is NOW (--signal), i = total - 1 is ORIGIN (--archive).
   */
  function spineColor(i, total) {
    var a = hexToRgb(token('--signal', '#5E6D79'));
    var b = hexToRgb(token('--archive', '#1F2A34'));
    var t = total > 1 ? i / (total - 1) : 0;
    var mix = a.map(function (c, k) { return Math.round(c + (b[k] - c) * t); });
    return 'rgb(' + mix.join(',') + ')';
  }

  /**
   * Sets --node on each .spine-item so dots, tags, and borders cool together.
   *
   * The trace cards get the whole gradient to themselves, NOW to ORIGIN, because
   * they are the part that is actually about time. The framing steps around them
   * pin to the nearest end: everything above the trace stays bright, everything
   * below it stays dark. Without this the trace would only ever use the middle
   * of the range and the signature element would read as muddy.
   */
  function paintSpine(root) {
    var items = Array.prototype.slice.call(
      (root || document).querySelectorAll('.spine-item'));
    if (!items.length) return;

    var traceIdx = [];
    items.forEach(function (el, i) {
      if (el.querySelector('.trace-card')) traceIdx.push(i);
    });

    // No trace on this page: fall back to a straight run across every item.
    if (!traceIdx.length) {
      items.forEach(function (el, i) {
        el.style.setProperty('--node', spineColor(i, items.length));
      });
      return;
    }

    var first = traceIdx[0];
    var last  = traceIdx[traceIdx.length - 1];
    var lit  = spineColor(0, 2);           // pure --signal
    var dark = spineColor(1, 2);           // pure --archive

    items.forEach(function (el, i) {
      var c;
      if (i < first)      c = lit;
      else if (i > last)  c = dark;
      else                c = spineColor(traceIdx.indexOf(i), traceIdx.length);
      el.style.setProperty('--node', c);
    });
  }

  /* ── ticker ────────────────────────────────────────────────────────────── */
  function wireTicker() {
    var ticker = document.querySelector('.ticker');
    if (!ticker) return;

    var track = ticker.querySelector('.ticker-track');
    var pause = ticker.querySelector('.ticker-pause');

    if (track && !reduceMotion) {
      // Duplicate the run once so the -50% crawl loops seamlessly.
      track.innerHTML += track.innerHTML;
      // Pace the crawl by content length, not by a fixed clock.
      var seconds = Math.max(30, Math.round(track.scrollWidth / 60));
      track.style.setProperty('--crawl', seconds + 's');
    }

    if (!pause) return;
    if (reduceMotion) { pause.hidden = true; return; }

    pause.addEventListener('click', function () {
      var paused = ticker.getAttribute('data-paused') === 'true';
      ticker.setAttribute('data-paused', paused ? 'false' : 'true');
      pause.textContent = paused ? 'Pause' : 'Play';
      pause.setAttribute('aria-pressed', paused ? 'false' : 'true');
    });
  }

  /* ── scroll reveals ────────────────────────────────────────────────────── */
  function reveal(root) {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var targets = (root || document).querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add('reveal');
      io.observe(targets[i]);
    }
  }

  /* ── Local to Global rail ──────────────────────────────────────────────── */
  /*
     There can be more than one rail on a page: a fast toggle up in the hero and
     a second copy down in step 02 where the panels actually live. They share one
     piece of state, so selecting a scale anywhere selects it everywhere.
  */
  function wireScaleRail(root) {
    var scope  = root || document;
    var rails  = scope.querySelectorAll('[data-scale-rail]');
    var panels = scope.querySelectorAll('[data-scale-panel]');
    var locators = scope.querySelectorAll('[data-scale-locator]');
    if (!rails.length || !panels.length) return;

    var allBtns = scope.querySelectorAll('[data-scale-rail] .rail-btn');

    function select(scale) {
      for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].setAttribute('aria-selected',
          allBtns[i].getAttribute('data-scale') === scale ? 'true' : 'false');
      }
      for (var j = 0; j < panels.length; j++) {
        panels[j].hidden = panels[j].getAttribute('data-scale-panel') !== scale;
      }
      // The locator diagram highlights the ring for the selected scale.
      for (var m = 0; m < locators.length; m++) {
        locators[m].setAttribute('data-scale', scale);
      }
    }

    for (var k = 0; k < allBtns.length; k++) {
      allBtns[k].addEventListener('click', function () {
        select(this.getAttribute('data-scale'));
      });
      // Left/right arrows move between scales, as a tablist should.
      allBtns[k].addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        var list = Array.prototype.slice.call(this.parentNode.querySelectorAll('.rail-btn'));
        var at = list.indexOf(this);
        var next = list[(at + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
        next.focus();
        select(next.getAttribute('data-scale'));
      });
    }

    select(rails[0].getAttribute('data-default') ||
           allBtns[0].getAttribute('data-scale'));
  }

  /* ── masthead over a full-bleed hero ───────────────────────────────────── */
  /*
     On a page with class="has-hero" the masthead floats transparently over the
     hero image and turns solid once the hero has scrolled past. Purely visual:
     without this the masthead stays in overlay mode, which still reads fine
     because the hero behind it is always dark.
  */
  function wireMasthead() {
    if (!document.body.classList.contains('has-hero')) return;
    var bar  = document.querySelector('.masthead');
    var hero = document.querySelector('.hero');
    if (!bar || !hero) return;

    var ticking = false;
    function update() {
      ticking = false;
      var trigger = hero.offsetHeight - bar.offsetHeight - 40;
      bar.classList.toggle('is-solid', window.scrollY > trigger);
    }
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ── dateline ──────────────────────────────────────────────────────────── */
  function wireDateline() {
    var el = document.querySelector('[data-dateline]');
    if (!el) return;
    var d = new Date();
    var date = d.toLocaleDateString('en-US',
      { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    el.textContent = (el.getAttribute('data-dateline') || '') + ' · ' + date;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  window.CE = {
    reduceMotion: reduceMotion,
    spineColor: spineColor,
    paintSpine: paintSpine,
    reveal: reveal,
    wireScaleRail: wireScaleRail,
    esc: esc
  };

  function boot() {
    wireTicker();
    wireMasthead();
    wireDateline();
    wireScaleRail(document);
    paintSpine(document);
    reveal(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
