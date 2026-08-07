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
        if (input) input.checked = true;
      }
    });
  };

  // Built here rather than written into all 77 readings: their markup has
  // drifted, and one runtime implementation cannot drift. Real radios in a
  // fieldset, so a screen reader announces "1 of 5" and arrow keys work without
  // a keyboard handler of our own.
  var addConfidence = function () {
    boxes().forEach(function (t, i) {
      if (document.getElementById('bh-conf-row-' + i)) return;
      var wrap = document.createElement('fieldset');
      wrap.id = 'bh-conf-row-' + i;
      wrap.setAttribute('style', 'margin:12px 0 0;padding:10px 12px;border:1px solid rgba(23,36,59,.18);border-radius:10px;background:#f4efe3');
      var legend = document.createElement('legend');
      legend.setAttribute('style', 'padding:0 6px;font:700 .7rem Montserrat,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8b5f16');
      legend.textContent = 'How confident are you in this answer?';
      wrap.appendChild(legend);
      var scale = document.createElement('div');
      scale.setAttribute('style', 'display:flex;flex-wrap:wrap;gap:6px;margin-top:4px');
      [1, 2, 3, 4, 5].forEach(function (n) {
        var label = document.createElement('label');
        label.setAttribute('style', 'position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:70px;padding:6px 8px;border:1px solid rgba(23,36,59,.2);border-radius:8px;background:#fff;cursor:pointer;text-align:center');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'bh-conf-' + i;
        input.value = String(n);
        input.setAttribute('style', 'position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;cursor:pointer');
        input.addEventListener('change', function () {
          Array.prototype.slice.call(scale.children).forEach(function (el) {
            el.style.background = '#fff';
            el.style.color = '';
          });
          label.style.background = '#8b5f16';
          label.style.color = '#fff';
          save();
        });
        var num = document.createElement('span');
        num.setAttribute('aria-hidden', 'true');
        num.setAttribute('style', 'font:700 1.05rem Georgia,serif;line-height:1;color:inherit');
        num.textContent = String(n);
        var text = document.createElement('span');
        text.setAttribute('style', 'font:.66rem Montserrat,Arial,sans-serif;line-height:1.2;color:inherit');
        text.textContent = LABELS[n];
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
})();`;

module.exports = { CAPTURE_BLOCK };
