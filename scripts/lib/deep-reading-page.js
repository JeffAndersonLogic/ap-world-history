'use strict';

/**
 * The one renderer for deep readings.
 *
 * A deep reading is the optional push-further layer under Content Delivery: the
 * textbook-depth treatment of a topic the ten modules assume a student already
 * has. Foundations 3 is the case that produced it. Its First & 10 carried 716
 * words across four classical states, about 179 each, while its success criteria
 * ask a student to name a tool of rule, explain the mechanism by which it worked,
 * and compare two states inside one category. The reading named the tools. It
 * could not supply the mechanisms, because there was no room.
 *
 * Deliberately NOT a First & 10:
 *
 *   - No questions, so no textareas, so no capture block, no storage key, and
 *     none of the four-files-must-agree failure modes that come with them. A
 *     deep reading has nothing to submit; the modules remain the only path by
 *     which student writing reaches Canvas.
 *   - No coach bridge. Socrates is told about exactly four assignments, and
 *     adding a fifth surface silently would mean the coach meets work it was
 *     told does not exist. See the Socrates section of CLAUDE.md.
 *   - No <script> at all. A page with no script cannot ship a SyntaxError that
 *     discards its own behaviour, which is the failure readings-parse.test.js
 *     exists to catch on the 77.
 *
 * The filename prefix is load-bearing. validate.js globs foundations lesson
 * shells with /^foundations-\d+.*\.html$/ and Foundations readings with
 * /^first-and-10-foundations.*\.html$/. A deep reading must miss both, or it is
 * checked against a contract it was never meant to satisfy. Hence
 * `deep-reading-<slug>.html`. If you rename these, re-read those two globs first.
 *
 * ── Reused by the eBook ──────────────────────────────────────────────────────
 *
 * scripts/lib/ebook-page.js renders each chapter by calling renderChapterBody
 * here rather than reimplementing it, so a volume and a standalone page cannot
 * render the same content differently. The only thing the eBook needs that a
 * standalone page does not is an `idPrefix`: several chapters legitimately use
 * the same section ids, and the closing section is `compare` in every one of
 * them, so concatenating chapters into one document without namespacing the ids
 * produces duplicates and every in-page link lands on the first chapter.
 * The prefix defaults to empty, which is exactly the standalone behaviour.
 */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

/** Escape text destined for an attribute or a text node. Body copy is authored
 *  as HTML on purpose (a `<span class="kt">` is how a key term is found on the
 *  page, so stripping it would lose teaching, not styling) and is never run
 *  through this. */
function esc(value) {
  return String(value == null ? '' : value).replace(/[&<>"]/g, ch => ESCAPES[ch]);
}

function slugId(value) {
  return String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Namespace a section id for the eBook, leave it alone for a standalone page. */
function withPrefix(prefix, id) {
  return prefix ? `${prefix}-${id}` : id;
}

function renderNote(note) {
  const kind = note.kind === 'misconception' ? 'misconception' : 'howknow';
  return `      <aside class="dr-note ${kind}"><b>${esc(note.label)}</b><p>${note.html}</p></aside>\n`;
}

function renderPart(part) {
  const blocks = (part.blocks || []).map(block => {
    if (block.note) return renderNote(block.note);
    return `      <p>${block.p}</p>\n`;
  }).join('');
  return `    <div class="dr-part">\n      <h3>${esc(part.heading)}</h3>\n${blocks}    </div>\n`;
}

function renderUseThis(useThis) {
  if (!useThis) return '';
  const rows = [
    ['Strongest tool, with its mechanism', useThis.tool],
    ['Best evidence of exclusion or limit', useThis.limit],
    ['Comparison hook', useThis.comparison]
  ].filter(([, html]) => html);

  const items = rows
    .map(([label, html]) => `        <div><dt>${esc(label)}</dt><dd>${html}</dd></div>\n`)
    .join('');

  return `    <div class="dr-usethis">\n      <b>Use this in your answer</b>\n      <dl>\n${items}      </dl>\n    </div>\n`;
}

function renderTerms(terms) {
  if (!terms || !terms.length) return '';
  const items = terms
    .map(([term, definition]) => `        <div><dt>${esc(term)}</dt><dd>${definition}</dd></div>\n`)
    .join('');
  return `    <div class="dr-terms">\n      <h3>Terms to use precisely</h3>\n      <dl>\n${items}      </dl>\n    </div>\n`;
}

function renderEmpire(empire, index, prefix) {
  const id = withPrefix(prefix, empire.id || slugId(empire.name));
  const num = empire.num || String(index + 1).padStart(2, '0');
  const accent = `accent-${empire.accent || 'gold'}`;
  const parts = (empire.parts || []).map(renderPart).join('');

  return (
    `  <section class="empire ${accent}" id="${esc(id)}">\n` +
    `    <div class="dr-ehead">\n` +
    `      <div class="dr-enum">${esc(num)}</div>\n` +
    `      <div>\n` +
    `        <h2>${empire.name}</h2>\n` +
    `        <div class="dr-dates">${empire.dates}</div>\n` +
    `      </div>\n` +
    `      <p class="dr-thesis">${empire.thesis}</p>\n` +
    `    </div>\n` +
    parts +
    renderUseThis(empire.useThis) +
    renderTerms(empire.terms) +
    `  </section>\n`
  );
}

function renderComparisons(closing, prefix) {
  if (!closing || !closing.pairs || !closing.pairs.length) return '';
  const cards = closing.pairs
    .map(pair =>
      `      <article class="dr-pair">\n` +
      `        <span class="cat">${esc(pair.category)}</span>\n` +
      `        <h3>${pair.title}</h3>\n` +
      `        <p>${pair.body}</p>\n` +
      `      </article>\n`
    )
    .join('');

  return (
    `  <section class="dr-closing" id="${esc(withPrefix(prefix, 'compare'))}">\n` +
    `    <h2>${esc(closing.heading)}</h2>\n` +
    `    <p>${closing.intro}</p>\n` +
    `    <div class="dr-pairs">\n${cards}    </div>\n` +
    `  </section>\n`
  );
}

function renderHowTo(howTo, prefix) {
  if (!howTo) return '';
  const steps = (howTo.steps || [])
    .map(step => `        <li>${step}</li>\n`)
    .join('');
  return (
    `  <section class="dr-howto" id="${esc(withPrefix(prefix, 'howto'))}">\n` +
    `    <h2>${esc(howTo.heading || 'How to Use This')}</h2>\n` +
    `    <p>${howTo.intro}</p>\n` +
    (steps ? `    <ol>\n${steps}    </ol>\n` : '') +
    `  </section>\n`
  );
}

function renderJumpNav(topic) {
  const links = [];
  if (topic.howTo) links.push(`      <li><a href="#howto">How to use this</a></li>\n`);
  (topic.empires || []).forEach((empire, index) => {
    const id = empire.id || slugId(empire.name);
    const num = empire.num || String(index + 1).padStart(2, '0');
    links.push(`      <li><a href="#${esc(id)}"><span class="n">${esc(num)}</span>${esc(empire.navLabel || empire.name)}</a></li>\n`);
  });
  if (topic.closing) links.push(`      <li><a href="#compare">${esc(topic.closing.navLabel || 'Building a comparison')}</a></li>\n`);

  return `<nav class="dr-jump" aria-label="Jump to section">\n  <ul>\n${links.join('')}  </ul>\n</nav>\n`;
}

/**
 * The chapter body: how-to, every section, and the closing comparison. Shared
 * by the standalone deep reading and the eBook.
 *
 * @param {object} topic              a module from scripts/lib/deep-reading-content/
 * @param {object} [opts]
 * @param {string} [opts.idPrefix=''] namespace for section ids, used by the eBook
 */
function renderChapterBody(topic, opts) {
  const prefix = (opts && opts.idPrefix) || '';
  return (
    renderHowTo(topic.howTo, prefix) +
    (topic.empires || []).map((empire, i) => renderEmpire(empire, i, prefix)).join('') +
    renderComparisons(topic.closing, prefix)
  );
}

/**
 * Render one complete standalone deep reading page.
 *
 * @param {object} topic  a module from scripts/lib/deep-reading-content/
 * @returns {string} the full HTML document, newline-terminated
 */
function renderDeepReadingPage(topic) {
  const meta = (topic.meta || []).map(item => `      <span>${esc(item)}</span>\n`).join('');

  return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(topic.docTitle)}</title>
  <link rel="stylesheet" href="../assets/css/behistorical-deep-reading.css">
</head>
<body>
<header class="dr-masthead">
  <div class="dr-wrap">
    <div class="dr-eyebrow">${topic.eyebrow}</div>
    <h1>${topic.titleHtml}</h1>
    <p class="dr-deck">${topic.deck}</p>
${meta ? `    <div class="dr-meta">\n${meta}    </div>\n` : ''}  </div>
</header>
${renderJumpNav(topic)}<div class="dr-wrap">
${renderChapterBody(topic)}  <footer class="dr-footer">
    <span class="dr-footer-note">${topic.footerNote}</span>
    <nav class="dr-nav" aria-label="Back to the lesson">
      <a href="${esc(topic.lessonFile)}#modules">Back to Modules</a>
      <a href="${esc(topic.lessonFile)}#lecture">Content Delivery</a>
    </nav>
  </footer>
</div>
</body>
</html>
`);
}

module.exports = { renderDeepReadingPage, renderChapterBody, escapeText: esc };
