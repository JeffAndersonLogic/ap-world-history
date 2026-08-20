'use strict';

// Renders docs/canvas/canvas-events.html, the paste console.
//
// Same data as the three markdown files, same generator run, so the console
// cannot describe an event the markdown does not. It exists because the markdown
// is a diffable record and this is the thing you actually operate with Canvas
// open in the next tab.
//
// The page is self-contained: no build step, no bundle, and nothing it needs is
// fetched except the two brand typefaces, which have real fallbacks.

// Canvas strips <style> blocks and most class attributes from a pasted body, so
// everything inside a payload is inline-styled on the element. That constraint
// applies to the payloads only; the console around them is an ordinary page.
const CANVAS_SAFE_NOTE =
  'Canvas strips style blocks and most classes. Every payload here is inline-styled already, so paste it as it is.';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// The submission path of Section 8, as a Canvas assignment body. Section 8 says
// this belongs in the assignment body and not only in the calendar event,
// because step 1 is where students lose work.
function assignmentBody(item) {
  const p = 'margin: 0 0 12px 0;';
  return [
    `<p style="${p}"><strong>Work the lesson on BeHistorical, then paste your work here.</strong></p>`,
    `<p style="${p}"><a class="inline_disabled" href="${item.href}" target="_blank" rel="noopener">${esc(item.linkText)}</a></p>`,
    '<ol style="margin: 0 0 12px 0; padding-left: 24px;">',
    '    <li style="margin-bottom: 6px;">Work the lesson in BeHistorical. Your typing saves on this computer only, and saving is not submitting.</li>',
    '    <li style="margin-bottom: 6px;">Scroll to the <strong>Save Your Work</strong> panel, below the module cards.</li>',
    '    <li style="margin-bottom: 6px;">Click <strong>Gather All My Work</strong>, then <strong>Copy to Clipboard</strong>.</li>',
    '    <li style="margin-bottom: 6px;">Paste into the box below and submit.</li>',
    '</ol>',
    `<p style="${p}">If you never opened the First &amp; 10 reading, those answers come through empty. Open it before you gather.</p>`
  ].join('\n');
}

const FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Montserrat:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">';

const CSS = `
:root {
  --ground: #F5F0E7;
  --card: #FFFDF7;
  --sunk: #EFE7D8;
  --ink: #151718;
  --ink-soft: #55504A;
  --ink-faint: #837C72;
  --rule: rgba(26,28,29,.14);
  --rule-firm: rgba(26,28,29,.26);
  --accent: #6B3E1F;
  --accent-soft: rgba(107,62,31,.10);
  --good: #3F5E33;
  --good-soft: rgba(63,94,51,.12);
  --shadow: 0 10px 26px rgba(26,28,29,.09);

  --font-display: 'Cinzel', Georgia, 'Times New Roman', serif;
  --font-ui: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --ground: #1A1C1D;
    --card: #24282A;
    --sunk: #141718;
    --ink: #F0EBE1;
    --ink-soft: #B9B2A6;
    --ink-faint: #8B857B;
    --rule: rgba(245,240,231,.14);
    --rule-firm: rgba(245,240,231,.28);
    --accent: #C9A46A;
    --accent-soft: rgba(201,164,106,.14);
    --good: #9DBB8A;
    --good-soft: rgba(157,187,138,.16);
    --shadow: 0 10px 26px rgba(0,0,0,.34);
  }
}

:root[data-theme="dark"] {
  --ground: #1A1C1D;
  --card: #24282A;
  --sunk: #141718;
  --ink: #F0EBE1;
  --ink-soft: #B9B2A6;
  --ink-faint: #8B857B;
  --rule: rgba(245,240,231,.14);
  --rule-firm: rgba(245,240,231,.28);
  --accent: #C9A46A;
  --accent-soft: rgba(201,164,106,.14);
  --good: #9DBB8A;
  --good-soft: rgba(157,187,138,.16);
  --shadow: 0 10px 26px rgba(0,0,0,.34);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--ground);
  color: var(--ink);
  font-family: var(--font-ui);
  font-size: 15px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.skip {
  position: absolute; left: -9999px; top: 0; z-index: 100;
  background: var(--card); color: var(--ink);
  padding: 10px 16px; border: 2px solid var(--accent); border-radius: 4px;
  font-weight: 700;
}
.skip:focus { left: 12px; top: 12px; }

:where(a, button, summary, input, [tabindex]):focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
  border-radius: 3px;
}

.wrap { max-width: 940px; margin: 0 auto; padding: 0 20px; }

/* ---- masthead ---- */

.masthead {
  border-bottom: 1px solid var(--rule);
  background: var(--card);
  padding: 34px 0 26px;
}
.masthead h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.55rem, 1.1rem + 2vw, 2.3rem);
  letter-spacing: .01em;
  margin: 0 0 6px;
  overflow-wrap: break-word;
  text-wrap: balance;
}
.eyebrow {
  font-size: .68rem; font-weight: 800; letter-spacing: .16em;
  text-transform: uppercase; color: var(--accent); margin: 0 0 10px;
}
.masthead p.lede {
  margin: 0 0 10px; max-width: 62ch; color: var(--ink-soft); font-size: .95rem;
}
.masthead p.note {
  margin: 0; max-width: 62ch; font-size: .82rem; color: var(--ink-faint);
  border-left: 2px solid var(--accent); padding-left: 11px;
}

/* ---- order strip: a real sequence, the assignment must exist first ---- */

.order {
  display: grid; gap: 10px; margin: 22px 0 0;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
  padding: 0; list-style: none;
}
.order li {
  background: var(--sunk); border: 1px solid var(--rule); border-radius: 3px;
  padding: 11px 13px; font-size: .82rem; color: var(--ink-soft);
  display: flex; gap: 10px; align-items: baseline;
}
.order .n {
  font-family: var(--font-mono); font-size: .74rem; font-weight: 600;
  color: var(--accent); flex: none;
}
.order b { color: var(--ink); font-weight: 700; }

/* ---- controls ---- */

.controls {
  position: sticky; top: 0; z-index: 20;
  background: var(--ground);
  border-bottom: 1px solid var(--rule);
  padding: 12px 0;
  margin-bottom: 26px;
}
.controls .wrap {
  display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
  justify-content: space-between;
}
.seg { display: flex; flex-wrap: wrap; gap: 6px; }
.seg button {
  font-family: inherit; font-size: .78rem; font-weight: 700;
  letter-spacing: .04em; text-transform: uppercase;
  padding: 7px 13px; border-radius: 2px; cursor: pointer;
  background: transparent; color: var(--ink-soft);
  border: 1px solid var(--rule-firm);
}
.seg button:hover { color: var(--ink); border-color: var(--accent); }
.seg button[aria-pressed="true"] {
  background: var(--accent); border-color: var(--accent);
  color: var(--card);
}
.tally {
  font-family: var(--font-mono); font-size: .78rem; color: var(--ink-faint);
  font-variant-numeric: tabular-nums;
}
.tally b { color: var(--ink); font-weight: 600; }

/* ---- volume heads ---- */

.vol-head {
  display: flex; align-items: baseline; gap: 12px;
  margin: 34px 0 14px; padding-bottom: 8px;
  border-bottom: 2px solid var(--rule-firm);
}
.vol-head h2 {
  font-family: var(--font-display); font-weight: 700;
  font-size: 1.18rem; margin: 0; letter-spacing: .01em;
}
.vol-head span { font-size: .78rem; color: var(--ink-faint); }

/* ---- topic card ---- */

.topic {
  background: var(--card); border: 1px solid var(--rule);
  border-radius: 3px; box-shadow: var(--shadow);
  margin-bottom: 16px; overflow: hidden;
}
.topic[data-done="1"] { opacity: .58; }
.topic[data-done="1"] .thead { background: var(--good-soft); }

.thead {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  padding: 13px 16px; border-bottom: 1px solid var(--rule);
  background: var(--sunk);
}
.code {
  font-family: var(--font-mono); font-size: .8rem; font-weight: 600;
  color: var(--card); background: var(--accent);
  padding: 3px 8px; border-radius: 2px; flex: none;
  font-variant-numeric: tabular-nums;
}
.thead h3 { margin: 0; font-size: .97rem; font-weight: 700; flex: 1 1 12ch; }
.done {
  display: flex; align-items: center; gap: 7px; cursor: pointer;
  font-size: .76rem; font-weight: 700; letter-spacing: .05em;
  text-transform: uppercase; color: var(--ink-faint); user-select: none;
}
.done input { width: 15px; height: 15px; accent-color: var(--good); cursor: pointer; }
.topic[data-done="1"] .done { color: var(--good); }

.rows { display: flex; flex-direction: column; }

.row { border-bottom: 1px solid var(--rule); }
.row:last-child { border-bottom: 0; }

.rhead {
  display: flex; align-items: center; gap: 11px; flex-wrap: wrap;
  padding: 11px 16px;
}
.step {
  font-family: var(--font-mono); font-size: .72rem; font-weight: 600;
  color: var(--accent); flex: none;
}
.rlabel {
  font-size: .74rem; font-weight: 800; letter-spacing: .1em;
  text-transform: uppercase; color: var(--ink-soft); flex: none;
}
.rvalue {
  font-family: var(--font-mono); font-size: .84rem; color: var(--ink);
  flex: 1 1 14ch; min-width: 0; overflow-wrap: break-word;
}
.rnote { font-size: .76rem; color: var(--ink-faint); flex: 1 1 14ch; }

.copy {
  font-family: inherit; font-size: .74rem; font-weight: 800;
  letter-spacing: .07em; text-transform: uppercase;
  padding: 7px 14px; border-radius: 2px; cursor: pointer; flex: none;
  background: var(--accent); color: var(--card); border: 1px solid var(--accent);
}
.copy:hover { filter: brightness(1.12); }
.copy[data-state="ok"] {
  background: var(--good); border-color: var(--good);
}
.copy[data-state="manual"] {
  background: transparent; color: var(--accent);
}

details.peek > summary {
  cursor: pointer; list-style: none;
  padding: 0 16px 11px; margin: 0;
  font-size: .74rem; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; color: var(--ink-faint);
}
details.peek > summary::-webkit-details-marker { display: none; }
details.peek > summary::before { content: "▸ "; }
details.peek[open] > summary::before { content: "▾ "; }
details.peek > summary:hover { color: var(--accent); }

pre {
  margin: 0 16px 14px; padding: 13px 15px;
  background: var(--sunk); border: 1px solid var(--rule); border-radius: 2px;
  overflow-x: auto; max-height: 340px; overflow-y: auto;
  font-family: var(--font-mono); font-size: .76rem; line-height: 1.5;
  color: var(--ink-soft);
}
pre code { font: inherit; color: inherit; }

.meta {
  padding: 11px 16px; background: var(--sunk);
  font-size: .76rem; color: var(--ink-faint);
  display: flex; flex-wrap: wrap; gap: 6px 18px;
}
.meta a { color: var(--accent); }

/* ---- footer ---- */

.foot {
  border-top: 1px solid var(--rule); margin-top: 44px;
  padding: 24px 0 46px; font-size: .8rem; color: var(--ink-faint);
}
.foot p { margin: 0 0 8px; max-width: 68ch; }
.foot code {
  font-family: var(--font-mono); font-size: .95em;
  background: var(--sunk); padding: 1px 5px; border-radius: 2px;
}

.live {
  position: absolute; width: 1px; height: 1px; overflow: hidden;
  clip: rect(0 0 0 0); white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
`;

const JS = `
(function () {
  var payloads = window.__PAYLOADS__ || {};

  function flash(btn, label, state) {
    var original = btn.getAttribute('data-label');
    btn.textContent = label;
    btn.setAttribute('data-state', state);
    window.setTimeout(function () {
      btn.textContent = original;
      btn.removeAttribute('data-state');
    }, 1800);
  }

  // Clipboard permission is tighter in a sandboxed frame, which is where this
  // page usually runs. Falling back to a selection and a Ctrl-C prompt is what
  // the lesson pages already do rather than reporting a failure the reader
  // cannot act on.
  function manualCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '50%';
    ta.style.left = '50%';
    ta.style.transform = 'translate(-50%,-50%)';
    ta.style.width = '80vw';
    ta.style.height = '40vh';
    ta.style.zIndex = '9999';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    if (ok) {
      document.body.removeChild(ta);
      flash(btn, 'Copied', 'ok');
      say('Copied.');
      return;
    }
    flash(btn, 'Press Ctrl+C', 'manual');
    say('Selected. Press Control C, or Command C, to copy.');
    ta.addEventListener('blur', function () {
      if (ta.parentNode) { ta.parentNode.removeChild(ta); }
    });
  }

  function say(msg) {
    var live = document.getElementById('live');
    if (live) { live.textContent = msg; }
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.copy');
    if (!btn) { return; }
    var text = payloads[btn.getAttribute('data-key')];
    if (typeof text !== 'string') { return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flash(btn, 'Copied', 'ok');
        say('Copied.');
      }, function () {
        manualCopy(text, btn);
      });
    } else {
      manualCopy(text, btn);
    }
  });

  // Progress. Twenty events is more than one sitting, so where you stopped is
  // worth keeping. A number in localStorage, nothing else, and nothing leaves
  // the device.
  var STORE = 'behistorical-canvas-console-done';
  var done = {};
  try { done = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (err) { done = {}; }

  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(done)); } catch (err) { /* private mode */ }
  }

  function tally() {
    var cards = [].slice.call(document.querySelectorAll('.topic'));
    var shown = cards.filter(function (c) { return c.style.display !== 'none'; });
    var n = shown.filter(function (c) { return c.getAttribute('data-done') === '1'; }).length;
    var el = document.getElementById('tally');
    if (el) { el.innerHTML = '<b>' + n + '</b> of <b>' + shown.length + '</b> pasted'; }
  }

  [].forEach.call(document.querySelectorAll('.topic'), function (card) {
    var key = card.getAttribute('data-code');
    var box = card.querySelector('.done input');
    if (done[key]) { card.setAttribute('data-done', '1'); box.checked = true; }
    box.addEventListener('change', function () {
      if (box.checked) { done[key] = 1; card.setAttribute('data-done', '1'); }
      else { delete done[key]; card.removeAttribute('data-done'); }
      save();
      tally();
    });
  });

  // Volume filter.
  var seg = document.getElementById('seg');
  if (seg) {
    seg.addEventListener('click', function (ev) {
      var btn = ev.target.closest('button');
      if (!btn) { return; }
      var want = btn.getAttribute('data-vol');
      [].forEach.call(seg.querySelectorAll('button'), function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      [].forEach.call(document.querySelectorAll('[data-vol-section]'), function (sec) {
        sec.style.display = (want === 'all' || sec.getAttribute('data-vol-section') === want) ? '' : 'none';
      });
      [].forEach.call(document.querySelectorAll('.topic'), function (card) {
        card.style.display = (want === 'all' || card.getAttribute('data-vol') === want) ? '' : 'none';
      });
      tally();
    });
  }

  tally();
})();
`;

function copyRow({ step, label, value, note, key, buttonLabel }) {
  const mid = value
    ? `<div class="rvalue">${esc(value)}</div>`
    : `<div class="rnote">${esc(note || '')}</div>`;
  return [
    '        <div class="rhead">',
    `          <span class="step">${step}</span>`,
    `          <span class="rlabel">${esc(label)}</span>`,
    `          ${mid}`,
    `          <button class="copy" type="button" data-key="${esc(key)}" data-label="${esc(buttonLabel)}">${esc(buttonLabel)}</button>`,
    '        </div>'
  ].join('\n');
}

function topicCard(item, payloads) {
  const kEventTitle = `${item.code}|event-title`;
  const kEventBody = `${item.code}|event-body`;
  const kAssignName = `${item.code}|assign-name`;
  const kAssignBody = `${item.code}|assign-body`;

  payloads[kEventTitle] = item.eventTitle;
  payloads[kEventBody] = item.table;
  payloads[kAssignName] = item.assignmentName;
  payloads[kAssignBody] = assignmentBody(item);

  return [
    `      <article class="topic" data-vol="${esc(item.vol)}" data-code="${esc(item.code)}">`,
    '        <div class="thead">',
    `          <span class="code">${esc(item.code)}</span>`,
    `          <h3>${esc(item.title)}</h3>`,
    '          <label class="done"><input type="checkbox"> Pasted</label>',
    '        </div>',
    '        <div class="rows">',
    '          <div class="row">',
    copyRow({
      step: '01', label: 'Assignment name', value: item.assignmentName,
      key: kAssignName, buttonLabel: 'Copy name'
    }),
    '          </div>',
    '          <div class="row">',
    copyRow({
      step: '02', label: 'Assignment body',
      note: 'The submission path. Paste through the </> editor.',
      key: kAssignBody, buttonLabel: 'Copy body'
    }),
    '            <details class="peek"><summary>Show assignment body</summary>',
    `            <pre><code>${esc(assignmentBody(item))}</code></pre></details>`,
    '          </div>',
    '          <div class="row">',
    copyRow({
      step: '03', label: 'Event title', value: item.eventTitle,
      key: kEventTitle, buttonLabel: 'Copy title'
    }),
    '          </div>',
    '          <div class="row">',
    copyRow({
      step: '04', label: 'Event body',
      note: 'The five-row table. Paste through the </> editor.',
      key: kEventBody, buttonLabel: 'Copy event HTML'
    }),
    '            <details class="peek"><summary>Show event HTML</summary>',
    `            <pre><code>${esc(item.table)}</code></pre></details>`,
    '          </div>',
    '        </div>',
    '        <div class="meta">',
    `          <span>Lesson: <a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.shellLabel)}</a></span>`,
    `          <span>Source: ${esc(item.sources)}</span>`,
    '        </div>',
    '      </article>'
  ].join('\n');
}

function render(volumes) {
  const payloads = {};
  const body = [];

  volumes.forEach(vol => {
    body.push(`      <section data-vol-section="${esc(vol.id)}">`);
    body.push('        <div class="vol-head">');
    body.push(`          <h2>${esc(vol.heading)}</h2>`);
    body.push(`          <span>${vol.items.length} events</span>`);
    body.push('        </div>');
    body.push('      </section>');
    vol.items.forEach(item => body.push(topicCard(item, payloads)));
  });

  const segButtons = [
    '          <button type="button" data-vol="all" aria-pressed="true">All</button>',
    ...volumes.map(v => `          <button type="button" data-vol="${esc(v.id)}" aria-pressed="false">${esc(v.short)}</button>`)
  ].join('\n');

  const total = volumes.reduce((n, v) => n + v.items.length, 0);

  // JSON.stringify escapes the payloads; the < is neutralised so a table's own
  // markup can never close this script element early.
  const payloadJson = JSON.stringify(payloads).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Canvas Paste Console</title>
${FONT_LINK}
<style>${CSS}</style>
</head>
<body>
<a class="skip" href="#events">Skip to the events</a>
<p class="live" id="live" role="status" aria-live="polite"></p>

<header class="masthead">
  <div class="wrap">
    <p class="eyebrow">BeHistorical &middot; AP World History</p>
    <h1>Canvas Paste Console</h1>
    <p class="lede">${total} calendar events and their assignments, generated from the lesson data files. Copy a block, paste it into Canvas, tick it off.</p>
    <p class="note">${esc(CANVAS_SAFE_NOTE)}</p>
    <ol class="order">
      <li><span class="n">01</span><span>Create the <b>assignment</b> first. The course-links panel can only insert one that already exists.</span></li>
      <li><span class="n">02</span><span>Build the <b>calendar event</b> and paste the table through the <b>&lt;/&gt;</b> editor, never the visual one.</span></li>
      <li><span class="n">03</span><span>Insert the assignment link from the <b>course-links panel</b>. A hand-typed link resolves to nothing.</span></li>
      <li><span class="n">04</span><span>Add the <b>module text header</b> and indent the assignment under it.</span></li>
    </ol>
  </div>
</header>

<div class="controls">
  <div class="wrap">
    <div class="seg" id="seg">
${segButtons}
    </div>
    <p class="tally" id="tally"></p>
  </div>
</div>

<main class="wrap" id="events">
${body.join('\n')}
</main>

<footer class="foot">
  <div class="wrap">
    <p><strong>Do not edit a learning target in Canvas.</strong> Targets and criteria here are lifted verbatim from each topic's data file. Change one at the source, run <code>node tools/build-canvas-events.js</code>, and repaste the affected event.</p>
    <p>Set the submission type to <strong>Online, Text Entry</strong> and attempts to <strong>unlimited</strong>. Leave peer review and anonymous grading off; anonymous grading suppresses the student name the submission parser needs. Points and assignment group are your call.</p>
    <p>Generated by <code>tools/build-canvas-events.js</code>. Never hand-edit this page.</p>
  </div>
</footer>

<script>window.__PAYLOADS__ = ${payloadJson};</script>
<script>${JS}</script>
</body>
</html>
`;
}

module.exports = { render, assignmentBody };
