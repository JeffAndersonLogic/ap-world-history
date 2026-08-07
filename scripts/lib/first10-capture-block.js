'use strict';

/**
 * The one canonical First & 10 answer-capture block.
 *
 * The three reading questions sit inside an iframe, so the lesson page cannot
 * read them. This block writes them to `behistorical-first10-<TOPIC_KEY>`, which
 * both renderers read when they assemble Gather All My Work. Drop it and those
 * three answers never reach Canvas, which is exactly what had silently happened
 * on 19 of the 77 topics before 2026-08-07.
 *
 * It also injects the confidence scale. The readings are 77 hand-built and
 * generated pages with drifting markup, so adding a fieldset to each one by hand
 * would be 77 chances to get it wrong. Building the control at runtime, from the
 * textareas the script has already found, means one implementation and no markup
 * surgery. Styles are inline for the same reason: the readings do not share a
 * stylesheet with the lesson pages.
 *
 * Three writers use this module: scripts/lib/first10-page.js and the two unit
 * builders. Change it here, not in a copy.
 */

// One readable form, used everywhere. The generators build their whole page as a
// single template literal, and a template literal happily contains newlines, so
// there is no reason to keep a minified twin that could drift from this one.
const CAPTURE_BLOCK = `/* BeHistorical First & 10 answer capture ------------------------------------------------------------
 * These three textareas sit inside an iframe, so the lesson page cannot read
 * them directly. Answers, their questions, and the student's confidence go to
 * one key that both renderers read when they assemble Gather All My Work.
 * See docs/CANVAS-CAPTURE.md. Never throws: a browser that refuses storage
 * degrades to no autosave rather than breaking the reading.
 */
(function () {
  var KEY = 'behistorical-first10-' + TOPIC_KEY;
  var LABELS = { 1: 'Lost', 2: 'Shaky', 3: 'Getting there', 4: 'Solid', 5: 'Could teach it' };

  var boxes = function () {
    return Array.prototype.slice.call(document.querySelectorAll('.q-textarea, .qta'));
  };
  var questions = function () {
    return Array.prototype.slice.call(document.querySelectorAll('.q-text, .qt'))
      .map(function (el) { return (el.textContent || '').replace(/\\s+/g, ' ').trim(); });
  };
  var confidenceOf = function (i) {
    var picked = document.querySelector('input[name="bh-conf-' + i + '"]:checked');
    return picked ? picked.value : '';
  };

  var save = function () {
    var qs = questions();
    var payload = boxes().map(function (t, i) {
      return { q: qs[i] || '', a: t.value || '', c: confidenceOf(i) };
    });
    try { localStorage.setItem(KEY, JSON.stringify(payload)); } catch (e) {}
  };

  var restore = function () {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { return; }
    if (!raw) return;
    var saved;
    try { saved = JSON.parse(raw); } catch (e) { return; }
    if (!saved || !saved.length) return;
    boxes().forEach(function (t, i) {
      if (saved[i] && saved[i].a && !t.value) t.value = saved[i].a;
      // Payloads written before the confidence field simply have no c.
      if (saved[i] && /^[1-5]$/.test(String(saved[i].c || ''))) {
        var input = document.querySelector('input[name="bh-conf-' + i + '"][value="' + saved[i].c + '"]');
        if (input) { input.checked = true; paint(input.parentNode, true); }
      }
    });
  };

  // Built here rather than written into all 77 readings: their markup has
  // drifted, and one runtime implementation cannot drift. Real radios in a
  // fieldset, so a screen reader announces "1 of 5" and arrow keys work without
  // a keyboard handler of our own.
  //
  // Colours are stated outright, never inherited. The first version set a white
  // chip and let the text inherit, which on the reading's dark question card
  // meant near-white text on white: five blank boxes. The fieldset also carries
  // no border, because a legend sitting on a border clips against the textarea
  // above it.
  var INK = '#1A1C1D', CARD = '#23272a', LINE = '#3E4447';
  var GOLD = '#C9A46A', PAPER = '#F5F0E7', SAND = '#D2B48C';

  var paint = function (label, on) {
    label.style.background = on ? GOLD : CARD;
    label.style.borderColor = on ? GOLD : LINE;
    label.querySelector('[data-n]').style.color = on ? INK : GOLD;
    label.querySelector('[data-t]').style.color = on ? INK : SAND;
  };

  var addConfidence = function () {
    boxes().forEach(function (t, i) {
      if (document.getElementById('bh-conf-row-' + i)) return;

      var wrap = document.createElement('fieldset');
      wrap.id = 'bh-conf-row-' + i;
      wrap.setAttribute('style', 'margin:0;padding:.75rem 1.1rem .9rem;border:0;'
        + 'border-top:1px solid ' + LINE + ';background:transparent;min-width:0');

      var legend = document.createElement('legend');
      // float plus full width makes a legend lay out as an ordinary block, which
      // keeps it clear of the field above instead of straddling a border.
      legend.setAttribute('style', 'float:left;width:100%;padding:0;margin:0 0 .5rem;'
        + 'font:700 .62rem Montserrat,Arial,sans-serif;letter-spacing:.1em;'
        + 'text-transform:uppercase;color:' + SAND);
      legend.textContent = 'How confident are you in this answer?';
      wrap.appendChild(legend);

      var scale = document.createElement('div');
      scale.setAttribute('style', 'clear:both;display:flex;flex-wrap:wrap;gap:.4rem');

      [1, 2, 3, 4, 5].forEach(function (n) {
        var label = document.createElement('label');
        label.setAttribute('style', 'position:relative;display:flex;align-items:baseline;'
          + 'gap:.4rem;padding:.34rem .6rem;border:1px solid ' + LINE + ';border-radius:3px;'
          + 'background:' + CARD + ';cursor:pointer;transition:background .12s ease');

        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'bh-conf-' + i;
        input.value = String(n);
        input.setAttribute('style', 'position:absolute;opacity:0;top:0;left:0;'
          + 'width:100%;height:100%;margin:0;cursor:pointer');

        var num = document.createElement('span');
        num.setAttribute('data-n', '');
        num.setAttribute('aria-hidden', 'true');
        num.setAttribute('style', 'font:700 .82rem Georgia,serif;line-height:1;color:' + GOLD);
        num.textContent = String(n);

        var text = document.createElement('span');
        text.setAttribute('data-t', '');
        text.setAttribute('style', 'font:.64rem Montserrat,Arial,sans-serif;'
          + 'letter-spacing:.02em;line-height:1;color:' + SAND);
        text.textContent = LABELS[n];

        input.addEventListener('change', function () {
          Array.prototype.slice.call(scale.children).forEach(function (el) { paint(el, false); });
          paint(label, true);
          save();
        });
        // The input is transparent, so the keyboard ring has to come from the
        // chip or arrowing through the scale is invisible.
        input.addEventListener('focus', function () { label.style.outline = '2px solid ' + PAPER; label.style.outlineOffset = '1px'; });
        input.addEventListener('blur', function () { label.style.outline = 'none'; });

        label.appendChild(input);
        label.appendChild(num);
        label.appendChild(text);
        scale.appendChild(label);
      });

      wrap.appendChild(scale);
      if (t.parentNode) t.parentNode.insertBefore(wrap, t.nextSibling);
    });
  };

  boxes().forEach(function (t, i) { if (!t.id) t.id = 'first10-q' + (i + 1); });
  addConfidence();
  restore();

  var timer;
  document.addEventListener('input', function (event) {
    var t = event.target;
    if (!t || !t.classList) return;
    if (!t.classList.contains('q-textarea') && !t.classList.contains('qta')) return;
    clearTimeout(timer);
    timer = setTimeout(save, 500);
  });
  // A student who closes the tab mid-sentence still keeps the sentence.
  window.addEventListener('beforeunload', save);
})();
/* end BeHistorical First & 10 answer capture */`;

// The installer finds an existing copy between these two markers. Sentinels, not
// brace matching: the block is JavaScript, a regex is not a parser, and getting
// that wrong once already duplicated the block in all 77 readings.
const BLOCK_OPEN = '/* BeHistorical First & 10 answer capture';
const BLOCK_CLOSE = '/* end BeHistorical First & 10 answer capture */';

module.exports = { CAPTURE_BLOCK, BLOCK_OPEN, BLOCK_CLOSE };
