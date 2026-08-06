#!/usr/bin/env node
'use strict';
//
// add-first10-capture.js
//
// Teaches every First & 10 reading to save its three check answers, and to save
// them somewhere the lesson page can find.
//
// The bug this fixes had two halves. The reading's textareas carry neither an id
// nor the response-area class, so the lesson page's Copy All My Work could never
// see them; and the reading held no localStorage call at all, so closing the
// module lost everything a student had typed. The three answers students were
// asked to write were the only ones that never reached Canvas.
//
// The reading lives in an iframe, so the lesson page cannot reach into it: the
// modal is destroyed the moment a student opens a different module. The fix is a
// handoff through storage, which both sides already share an origin on.
//
//   key    behistorical-first10-<TOPIC_KEY>      (TOPIC_KEY is 'f1', '1.1', ...)
//   value  [{"q":"question text","a":"answer"}, ...]
//
// The question text rides along with the answer so the lesson page can label
// each response with what the student was actually asked, matching how every
// other module exports. Both renderers read this key; see the injectFirst10
// blocks in foundations-topic-renderer.js and behistorical-topic-renderer-v1.js.
//
// Idempotent. Run again after adding a reading.
//
// Run: node scripts/add-first10-capture.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MARKER = 'BeHistorical First & 10 answer capture';

const SNIPPET = `
/* ${MARKER} ------------------------------------------------------------
 * These three textareas sit inside an iframe, so the lesson page cannot read
 * them directly and, before this, nothing saved them at all: closing the module
 * lost the work. Answers and their questions go to one key that both the
 * Foundations renderer and behistorical-topic-renderer-v1.js read when they
 * assemble Copy All My Work. Never throws: a browser that refuses storage
 * degrades to no autosave rather than breaking the reading.
 */
(function () {
  var KEY = 'behistorical-first10-' + TOPIC_KEY;
  var boxes = function () {
    return Array.prototype.slice.call(document.querySelectorAll('.q-textarea, .qta'));
  };
  var questions = function () {
    return Array.prototype.slice.call(document.querySelectorAll('.q-text, .qt'))
      .map(function (el) { return (el.textContent || '').replace(/\\s+/g, ' ').trim(); });
  };
  var save = function () {
    var qs = questions();
    var payload = boxes().map(function (t, i) {
      return { q: qs[i] || '', a: t.value || '' };
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
    });
  };

  boxes().forEach(function (t, i) { if (!t.id) t.id = 'first10-q' + (i + 1); });
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
`;

function readingFiles() {
  const dirs = fs.readdirSync(ROOT)
    .filter(d => /^unit-\d+$/.test(d) || d === 'foundations')
    .map(d => path.join(ROOT, d));
  const out = [];
  dirs.forEach(dir => {
    fs.readdirSync(dir)
      .filter(f => f.startsWith('first-and-10-') && f.endsWith('.html') && !f.endsWith('-capture.html'))
      .forEach(f => out.push(path.join(dir, f)));
  });
  return out.sort();
}

function main() {
  const files = readingFiles();
  let patched = 0, already = 0;
  const skipped = [];

  files.forEach(file => {
    const rel = path.relative(ROOT, file);
    let src = fs.readFileSync(file, 'utf8');

    if (src.includes(MARKER)) { already++; return; }

    // TOPIC_KEY is what the lesson page uses to find this reading's answers.
    if (!/var\s+TOPIC_KEY\s*=/.test(src)) { skipped.push(`${rel}: no TOPIC_KEY`); return; }

    const close = src.lastIndexOf('</script>');
    if (close < 0) { skipped.push(`${rel}: no closing script tag`); return; }

    // The snippet must land inside the block that declares TOPIC_KEY.
    const open = src.lastIndexOf('<script>', close);
    if (open < 0 || src.slice(open, close).indexOf('TOPIC_KEY') < 0) {
      skipped.push(`${rel}: TOPIC_KEY is not in the final script block`);
      return;
    }

    src = src.slice(0, close) + SNIPPET + src.slice(close);
    fs.writeFileSync(file, src);
    patched++;
  });

  console.log(`${files.length} readings found`);
  console.log(`  patched        ${patched}`);
  console.log(`  already had it ${already}`);
  if (skipped.length) {
    console.log(`  SKIPPED        ${skipped.length}`);
    skipped.forEach(s => console.log(`    ${s}`));
    process.exitCode = 1;
  }
}

main();
