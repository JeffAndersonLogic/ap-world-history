'use strict';
/* =========================================================
   THE CANVAS PASTE PAGES, THE HTML FLAVOUR

   docs/canvas/calendar-events.html and docs/canvas/assignments.html,
   written by scripts/build-canvas-events.js beside the two .md
   documents. Open one in a browser next to Canvas: each event or
   assignment shows a preview, the raw HTML in a box, and a Copy
   button.

   THIS FILE BUILDS NO CANVAS MARKUP OF ITS OWN. Every block it
   shows is the exact string the .md document prints, handed in by
   the builder, because two builders would mean the code fence and
   the Copy button could hand you two different events with nothing
   able to say which was right. scripts/test/canvas-paste-page.test.js
   proves every block on the page is byte for byte a block in the
   matching .md.

   SELF-CONTAINED ON PURPOSE. No stylesheet link, no webfont, no
   third-party script: the file gets opened as a bare file on a
   classroom machine as often as over the site. navigator.clipboard
   needs a secure context, which file:// is not, so the button falls
   back to selecting the box and the old copy command, and selecting
   the box by hand is the path that always works.

   The preview is the pasted HTML rendered as it stands. Nothing on
   this page restyles it, so what you see is what Canvas receives,
   apart from the font Canvas substitutes for any webfont it will not
   load.
   ========================================================= */

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* "Topic 5.1: The Enlightenment" -> "topic-5-1". A non-topic day keeps a
   readable slug of its title, so a link to the Era 3 Exam still works. */
function anchorFor(code) {
  const c = String(code || '').trim();
  if (/^(\d+\.\d+|F\d+)$/i.test(c)) return 'topic-' + c.toLowerCase().replace(/\./g, '-');
  return c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'entry';
}

/* Inside a <textarea> only & and < need escaping. Quotes stay literal, so the
   box reads the same as the .md code fence and the site validator's image-URL
   check sees src="...png" rather than a filename ending in &quot;. */
function escText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function copyButton(targetId, label) {
  return `<button type="button" class="copy" data-copy="${targetId}">${escHtml(label)}</button>`;
}

function entryBlock(e, i) {
  const boxId = `html-${i}`;
  const titleId = `title-${i}`;
  const lines = [];
  lines.push(`<section class="entry" id="${escHtml(e.anchor)}">`);
  lines.push(`  <h2>${escHtml(e.heading)}</h2>`);
  if (e.title) {
    lines.push(`  <p class="meta"><span class="k">${escHtml(e.titleLabel)}</span> ` +
      `<input id="${titleId}" class="title-box" readonly value="${escHtml(e.title)}"> ` +
      copyButton(titleId, 'Copy title') + '</p>');
  }
  for (const m of e.meta || []) {
    lines.push(`  <p class="meta"><span class="k">${escHtml(m[0])}</span> ${escHtml(m[1])}</p>`);
  }
  lines.push('  <table class="assign"><caption>Assign to, one row per section</caption>');
  lines.push('    <thead><tr>' + e.rowHeads.map((h) => `<th scope="col">${escHtml(h)}</th>`).join('') + '</tr></thead>');
  lines.push('    <tbody>');
  for (const r of e.rows) {
    lines.push('      <tr>' + r.map((c) => `<td>${escHtml(c)}</td>`).join('') + '</tr>');
  }
  lines.push('    </tbody>');
  lines.push('  </table>');
  lines.push('  <div class="actions">' + copyButton(boxId, 'Copy HTML') +
    '<span class="status" role="status" aria-live="polite"></span></div>');
  lines.push(`  <label class="k" for="${boxId}">HTML to paste into the <code>&lt;/&gt;</code> editor</label>`);
  lines.push(`  <textarea id="${boxId}" class="raw" readonly spellcheck="false">${escText(e.html)}</textarea>`);
  lines.push('  <details class="preview-wrap"><summary>Preview</summary>');
  lines.push('  <div class="preview">');
  lines.push(e.html);
  lines.push('  </div>');
  lines.push('  </details>');
  lines.push('  <p class="top"><a href="#contents">Back to the list</a></p>');
  lines.push('</section>');
  return lines.join('\n');
}

const SCRIPT = `
(function () {
  function flash(btn, text) {
    var status = btn.parentNode && btn.parentNode.querySelector('.status');
    var old = btn.textContent;
    btn.textContent = text;
    if (status) status.textContent = text;
    setTimeout(function () { btn.textContent = old; if (status) status.textContent = ''; }, 1800);
  }
  function fallback(field, btn) {
    field.focus();
    field.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    flash(btn, ok ? 'Copied' : 'Selected: press Ctrl+C');
  }
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest ? ev.target.closest('button.copy') : null;
    if (!btn) return;
    var field = document.getElementById(btn.getAttribute('data-copy'));
    if (!field) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(field.value).then(function () { flash(btn, 'Copied'); },
        function () { fallback(field, btn); });
    } else {
      fallback(field, btn);
    }
  });
})();
`;

const STYLE = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #ece6da; color: #151718;
    font: 15px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; }
  header.band { background: #1a1c1d; border-top: 4px solid #c9a46a; color: #f5f0e7; padding: 18px 16px; }
  header.band .eyebrow { font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: #c9a46a; }
  header.band h1 { margin: 4px 0 0; font-size: 22px; }
  main { max-width: 980px; margin: 0 auto; padding: 16px; }
  .howto, nav, .entry { background: #fffdf7; border: 1px solid #ddd2be; border-left: 5px solid #6b3e1f;
    padding: 14px 16px; margin: 0 0 16px; }
  .howto ol { margin: 6px 0 0 18px; padding: 0; }
  .howto li { margin: 0 0 4px; }
  nav h2, .howto h2 { margin: 0 0 8px; font-size: 15px; letter-spacing: .1em; text-transform: uppercase; color: #6b3e1f; }
  nav .unit { margin: 0 0 8px; }
  nav .unit-name { font-weight: 700; font-size: 13px; color: #57544c; display: block; margin-bottom: 4px; }
  nav a { display: inline-block; margin: 0 6px 6px 0; padding: 3px 9px; border: 1px solid #ddd2be;
    border-radius: 2px; color: #4a2a15; text-decoration: none; font-size: 14px; background: #f5f0e7; }
  nav a:hover, nav a:focus { border-color: #6b3e1f; }
  .entry h2 { margin: 0 0 10px; font-size: 19px; }
  .meta { margin: 0 0 8px; }
  .k { font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #6b3e1f; }
  .title-box { width: min(100%, 460px); font: inherit; padding: 4px 6px; border: 1px solid #ddd2be; background: #f5f0e7; }
  table.assign { border-collapse: collapse; margin: 6px 0 12px; font-size: 14px; }
  table.assign caption { text-align: left; font-size: 12px; font-weight: 700; letter-spacing: .1em;
    text-transform: uppercase; color: #6b3e1f; padding-bottom: 4px; }
  table.assign th, table.assign td { border: 1px solid #ddd2be; padding: 4px 10px; text-align: left; }
  table.assign th { background: #f5f0e7; }
  .actions { display: flex; align-items: center; gap: 10px; margin: 4px 0 6px; flex-wrap: wrap; }
  button.copy { font: inherit; font-weight: 700; padding: 6px 14px; border: 0; border-radius: 2px;
    background: #6b3e1f; color: #fffdf7; cursor: pointer; }
  button.copy:hover { background: #4a2a15; }
  button.copy:focus-visible, nav a:focus-visible, summary:focus-visible { outline: 3px solid #151718; outline-offset: 2px; }
  .status { font-size: 13px; color: #57544c; }
  textarea.raw { display: block; width: 100%; height: 150px; margin: 4px 0 10px; padding: 8px;
    font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace; border: 1px solid #ddd2be; background: #f5f0e7; resize: vertical; }
  details.preview-wrap summary { cursor: pointer; font-weight: 700; color: #4a2a15; }
  .preview { margin-top: 10px; padding: 12px; background: #fff; border: 1px dashed #ddd2be; overflow-x: auto; }
  .top { margin: 10px 0 0; font-size: 13px; }
  .top a { color: #4a2a15; }
  footer { text-align: center; color: #57544c; font-size: 13px; padding: 0 16px 24px; }
`;

/* kind: 'events' or 'assignments'. entries carry the exact HTML strings
   the .md document prints. */
function renderPastePage({ kind, title, intro, steps, entries, summary }) {
  const units = [];
  const byUnit = new Map();
  for (const e of entries) {
    const u = e.unit || 'Other';
    if (!byUnit.has(u)) { byUnit.set(u, []); units.push(u); }
    byUnit.get(u).push(e);
  }
  const nav = ['<nav id="contents" aria-label="Topics on this page">', '  <h2>Jump to a topic</h2>'];
  for (const u of units) {
    nav.push(`  <div class="unit"><span class="unit-name">${escHtml(u)}</span>` +
      byUnit.get(u).map((e) => `<a href="#${escHtml(e.anchor)}">${escHtml(e.navLabel)}</a>`).join('') +
      '</div>');
  }
  nav.push('</nav>');

  return [
    '<!doctype html>',
    '<html lang="en">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${escHtml(title)}</title>`,
    '<!-- Generated by scripts/build-canvas-events.js. Do not hand-edit. -->',
    `<style>${STYLE}</style>`,
    '</head>',
    '<body>',
    '<header class="band">',
    `  <div class="eyebrow">BeHistorical &middot; Canvas paste kit</div>`,
    `  <h1>${escHtml(title)}</h1>`,
    '</header>',
    '<main>',
    '<section class="howto">',
    '  <h2>How to paste one of these</h2>',
    `  <p>${intro}</p>`,
    '  <ol>',
    ...steps.map((s) => `    <li>${s}</li>`),
    '  </ol>',
    '</section>',
    nav.join('\n'),
    entries.map(entryBlock).join('\n\n'),
    '</main>',
    `<footer>${escHtml(summary)} Generated by <code>scripts/build-canvas-events.js</code> from the schedule and the lesson data. The same blocks are in <code>docs/canvas/${kind === 'events' ? 'calendar-events' : 'assignments'}.md</code>.</footer>`,
    `<script>${SCRIPT}</script>`,
    '</body>',
    '</html>',
    ''
  ].join('\n');
}

module.exports = { renderPastePage, anchorFor, escHtml };
