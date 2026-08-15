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

/**
 * The brand typefaces, loaded exactly as the 77 First & 10 readings load them.
 *
 * behistorical-deep-reading.css has always asked for Cinzel, Libre Baskerville
 * and Montserrat through its --font-display, --font-body and --font-ui tokens,
 * and no deep reading or eBook page ever loaded them, so every one of these
 * surfaces silently rendered in the Georgia and Arial fallbacks while the rest
 * of the site rendered in the brand faces. The tokens were right; the link was
 * missing.
 *
 * The href is byte-identical to the one the readings use, which is deliberate
 * and is the reason to prefer it over the four other font URLs in this repo: a
 * student moving from a First & 10 reading to the eBook reuses the cached
 * stylesheet and font files rather than fetching a second nearly identical set.
 * It also covers every weight these stylesheets actually ask for, 600 and 700,
 * so nothing is synthetically bolded, and it carries Libre Baskerville italic,
 * which matters because the chapters lean on <em> throughout.
 *
 * `display=swap` is the accessibility-relevant part: text paints immediately in
 * the fallback and swaps when the webfont arrives, so a slow connection never
 * produces invisible text. The fallback stacks stay in the CSS, so a reader
 * with webfonts blocked or no network gets Georgia and loses nothing but the
 * brand.
 */
const FONT_LINKS =
  `  <link rel="preconnect" href="https://fonts.googleapis.com">\n` +
  `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n` +
  `  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">\n`;

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

/* ── "Listen to this section" ────────────────────────────────────────────────
 *
 * Two strings, and between them the whole of what this renderer knows about
 * narration. assets/js/behistorical-listen.js does everything else.
 *
 * The split is the design. A section says *that* it is narratable and *where*
 * its controls belong; it does not carry a single line of playback logic, and
 * no page carries a copy of any. That is what makes the feature reach 43
 * sections today and every section written after today without one of them
 * being wired by hand, which is the failure mode this repo keeps paying for
 * when it does the other thing.
 *
 * Opt-in, not on by default, and the eBook is the only caller that opts in.
 * A standalone deep reading ships no <script> at all, on purpose and in
 * writing: a page with no script cannot ship a SyntaxError that silently
 * discards its own behaviour. Emitting these attributes unconditionally would
 * put dead mount points and a promise of buttons into five pages that have
 * nothing to build them, so `listen` defaults to false and the standalone
 * pages come out byte for byte as they did before this feature existed.
 */
function listenAttrs(on, scope, name) {
  if (!on) return '';
  // Scoped by chapter, because the label is what a screen reader reads out to
  // tell one Listen button from another and a volume is one document. Four of
  // the five Foundations chapters close on a section called "Building an Answer
  // That Scores", so an unscoped name leaves four identical buttons in a list of
  // forty-three and no way to tell which chapter each belongs to.
  const label = [scope, stripMarkup(name)].filter(Boolean).join(', ');
  return ` data-listenable="true" data-listen-label="${esc(label)}"`;
}

/** The mount slot. Empty in the HTML, filled by the shared module on load, and
 *  marked data-no-narrate so the controls are never read out as part of the
 *  reading they control. */
function listenMount(on, indent) {
  return on ? `${indent}<div class="bh-listen-mount" data-listen-mount data-no-narrate></div>\n` : '';
}

/** Section names are authored as HTML for the same reason body copy is. The
 *  accessible label on a button is text, so the markup comes off here rather
 *  than being escaped and read aloud as angle brackets. */
function stripMarkup(html) {
  return String(html == null ? '' : html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function renderEmpire(empire, index, prefix, listen, scope) {
  const id = withPrefix(prefix, empire.id || slugId(empire.name));
  const num = empire.num || String(index + 1).padStart(2, '0');
  const accent = `accent-${empire.accent || 'gold'}`;
  const parts = (empire.parts || []).map(renderPart).join('');

  return (
    `  <section class="empire ${accent}" id="${esc(id)}"${listenAttrs(listen, scope, empire.name)}>\n` +
    `    <div class="dr-ehead">\n` +
    // The section number is how the contents page and the jump bar refer to
    // this section, and it is nothing else: spoken aloud in front of the
    // heading it is a navigational label read as content.
    `      <div class="dr-enum"${listen ? ' data-no-narrate' : ''}>${esc(num)}</div>\n` +
    `      <div>\n` +
    `        <h2>${empire.name}</h2>\n` +
    `        <div class="dr-dates">${empire.dates}</div>\n` +
    `      </div>\n` +
    `      <p class="dr-thesis">${empire.thesis}</p>\n` +
    `    </div>\n` +
    // Under the heading, the dates and the thesis, which is the point at which
    // a student has read enough to decide whether to hear the rest.
    listenMount(listen, '    ') +
    parts +
    renderUseThis(empire.useThis) +
    renderTerms(empire.terms) +
    `  </section>\n`
  );
}

function renderComparisons(closing, prefix, listen, scope) {
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
    `  <section class="dr-closing" id="${esc(withPrefix(prefix, 'compare'))}"${listenAttrs(listen, scope, closing.heading)}>\n` +
    `    <h2>${esc(closing.heading)}</h2>\n` +
    `    <p>${closing.intro}</p>\n` +
    listenMount(listen, '    ') +
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
 * @param {boolean} [opts.listen=false] mark every reading section narratable and
 *        emit its control mount. Off by default; the eBook turns it on. See
 *        listenAttrs() above for why this is opt-in rather than always.
 * @param {string} [opts.listenScope=''] chapter label prefixed to each section's
 *        narration label, so the buttons stay distinguishable across a volume
 */
function renderChapterBody(topic, opts) {
  const prefix = (opts && opts.idPrefix) || '';
  const listen = !!(opts && opts.listen);
  const scope = (opts && opts.listenScope) || '';
  return (
    // The how-to is not narrated. It is instructions for reading the chapter,
    // not the chapter: a student who asked to hear the section wants the
    // history, and hearing "Sections 01 to 06 build the causal chain" first is
    // the audio equivalent of reading the manual before the book. It stays
    // fully on the page, in text, where it is quicker to scan than to hear.
    renderHowTo(topic.howTo, prefix) +
    (topic.empires || []).map((empire, i) => renderEmpire(empire, i, prefix, listen, scope)).join('') +
    renderComparisons(topic.closing, prefix, listen, scope)
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
${FONT_LINKS}  <link rel="stylesheet" href="../assets/css/behistorical-deep-reading.css">
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

module.exports = { renderDeepReadingPage, renderChapterBody, escapeText: esc, FONT_LINKS };
