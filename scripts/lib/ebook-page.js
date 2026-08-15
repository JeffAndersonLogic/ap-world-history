'use strict';

/**
 * Render an eBook volume: a cover, a contents page, and every chapter in order
 * as one continuous document.
 *
 * This file renders; it does not author. Every word of every chapter comes from
 * the same content module that produces that topic's standalone deep reading,
 * so the eBook and the per-topic page cannot drift apart. If you find yourself
 * about to type a sentence of history here, it belongs in a content module.
 *
 * The chapter body is rendered by the deep-reading renderer, reused rather than
 * reimplemented, for the same reason canvas-parse-core.js is inlined into the
 * Skills Lens instead of copied: two implementations would eventually give two
 * different answers, and nothing would tell you which one a student had read.
 */

const { renderChapterBody, escapeText } = require('./deep-reading-page');

const esc = escapeText;

/**
 * The skip link, first focusable element on both eBook page types.
 *
 * It has to come before the cover in source order, not merely be styled to look
 * first, because "first focusable" is a fact about the document rather than
 * about the layout. Its target is the <main id="main-content"> each renderer
 * opens after the cover, so one Tab and one Enter steps a keyboard user over the
 * masthead and, on a volume page, over a contents list that is one link per
 * chapter plus one per section. On Foundations that is 30 links to tab past to
 * reach the first sentence of chapter one.
 *
 * One constant rather than the string typed twice, so the two page types cannot
 * end up pointing at different ids. behistorical-deep-reading.css positions it
 * off-screen until focused; it is never display:none, which would take it out of
 * the focus order and leave a skip link only the mouse could not use anyway.
 */
const SKIP_LINK = `<a class="skip-link" href="#main-content">Skip to main content</a>\n`;

function chapterNav(entries) {
  const rows = entries.map(entry => {
    if (entry.pending) {
      return (
        `      <li class="eb-toc-pending">\n` +
        `        <span class="eb-toc-n">&mdash;</span>\n` +
        `        <span class="eb-toc-body">\n` +
        `          <span class="eb-toc-title">${esc(entry.pending.title)}</span>\n` +
        `          <span class="eb-toc-meta">${esc(entry.pending.label)} &nbsp;·&nbsp; chapter not written yet</span>\n` +
        `        </span>\n` +
        `      </li>\n`
      );
    }

    const chapter = entry.chapter;
    const empires = chapter.empires || [];

    // Sections are listed too, not just chapters. At book length a contents
    // page that stops at the chapter is a list of five links and no help to
    // someone revising one idea. The ids are namespaced by topicKey, matching
    // the idPrefix renderChapterBody is called with.
    const sections = empires.map(empire =>
      `          <li><a href="#${esc(chapter.topicKey)}-${esc(empire.id)}">` +
      `<span class="eb-sec-n">${esc(empire.num)}</span>${esc(empire.navLabel || empire.name)}</a></li>\n`
    ).join('');

    return (
      `      <li>\n` +
      `        <a class="eb-toc-chapter" href="#chapter-${esc(chapter.topicKey)}">\n` +
      `          <span class="eb-toc-n">${esc(chapterNumber(chapter))}</span>\n` +
      `          <span class="eb-toc-body">\n` +
      `            <span class="eb-toc-title">${chapter.titleHtml}</span>\n` +
      `            <span class="eb-toc-meta">${esc(tocLabel(chapter))} &nbsp;·&nbsp; ${empires.length} sections</span>\n` +
      `          </span>\n` +
      `        </a>\n` +
      (sections ? `        <ul class="eb-toc-sections">\n${sections}        </ul>\n` : '') +
      `      </li>\n`
    );
  }).join('');

  return (
    `  <section class="eb-contents" id="contents">\n` +
    `    <h2>Contents</h2>\n` +
    `    <ol class="eb-toc">\n${rows}    </ol>\n` +
    `  </section>\n`
  );
}

/**
 * The chapter's number in the contents, taken from the topic it covers rather
 * than from its position in the list. Sequential numbering would make the
 * Foundations 3 chapter "Chapter 02" while Foundations 2 is unwritten, and
 * would silently renumber every chapter the moment a gap is filled.
 */
function chapterNumber(chapter) {
  const m = /^foundations-(\d+)/.exec(chapter.slug || '');
  if (m) return m[1].padStart(2, '0');
  const u = /^topic-(\d+)-(\d+)/.exec(chapter.slug || '');
  if (u) return `${u[1]}.${u[2]}`;
  return '';
}

/**
 * The lesson page's path relative to the eBook. The eBook lives in ebook/ and
 * the lessons live in foundations/ or unit-N/, so a bare "../<lessonFile>"
 * resolves to the repo root and 404s. Derived from the slug the same way
 * build-deep-readings.js derives the output directory, so the two cannot
 * disagree about where a topic lives.
 */
function lessonHref(chapter) {
  const file = chapter.lessonFile || '';
  if (/^foundations-/.test(chapter.slug || '')) return `../foundations/${file}`;
  const unit = /^topic-(\d)/.exec(chapter.slug || '');
  if (unit) return `../unit-${unit[1]}/${file}`;
  return `../${file}`;
}

/** "Foundations 1" from the slug, for the contents line. */
function tocLabel(chapter) {
  const m = /^foundations-(\d+)/.exec(chapter.slug || '');
  if (m) return `Foundations ${m[1]}`;
  const u = /^topic-(\d+)-(\d+)/.exec(chapter.slug || '');
  if (u) return `Topic ${u[1]}.${u[2]}`;
  return chapter.slug || '';
}

function renderChapter(chapter) {
  return (
    `  <section class="eb-chapter" id="chapter-${esc(chapter.topicKey)}">\n` +
    `    <header class="eb-chapter-head">\n` +
    `      <div class="eb-chapter-label">${esc(tocLabel(chapter))}</div>\n` +
    `      <h2>${chapter.titleHtml}</h2>\n` +
    `      <p class="eb-chapter-deck">${chapter.deck}</p>\n` +
    `      <p class="eb-chapter-return"><a href="${esc(lessonHref(chapter))}">Go to the ${esc(tocLabel(chapter))} lesson</a> &nbsp;·&nbsp; <a href="#contents">Back to contents</a></p>\n` +
    `    </header>\n` +
    renderChapterBody(chapter, { idPrefix: chapter.topicKey }) +
    `  </section>\n`
  );
}

/**
 * @param {object} volume    a VOLUMES entry from scripts/build-ebook.js
 * @param {object[]} entries ordered contents: {chapter} for written, {pending} for not
 * @returns {string} the full HTML document, newline-terminated
 */
function renderEbook(volume, entries) {
  const chapters = entries.filter(e => e.chapter).map(e => e.chapter);
  const body = chapters.map(renderChapter).join('');
  const chapterCount = chapters.length;
  const sectionCount = chapters.reduce((sum, c) => sum + (c.empires || []).length, 0);

  return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(volume.docTitle)}</title>
  <link rel="stylesheet" href="../assets/css/behistorical-deep-reading.css">
  <link rel="stylesheet" href="../assets/css/behistorical-ebook.css">
</head>
<body class="eb-body">
${SKIP_LINK}<header class="eb-cover">
  <div class="dr-wrap">
    <div class="dr-eyebrow">${volume.eyebrow}</div>
    <h1>${volume.titleHtml}</h1>
    <p class="eb-cover-deck">${volume.deck}</p>
    <div class="eb-cover-meta">
      <span>${chapterCount} chapter${chapterCount === 1 ? '' : 's'}</span>
      <span>${sectionCount} sections</span>
      <span>Read straight through or jump to a chapter</span>
    </div>
  </div>
</header>
<main id="main-content" class="dr-wrap">
${chapterNav(entries)}${body}</main>
<div class="dr-wrap">
  <footer class="dr-footer">
    <span class="dr-footer-note">BeHistorical &nbsp;·&nbsp; The Foundations eBook &nbsp;·&nbsp; Generated from the course content model</span>
    <nav class="dr-nav" aria-label="Course navigation">
      <a href="../index.html">Course Home</a>
      <a href="../foundations/index.html">Foundations</a>
      <a href="#contents">Contents</a>
    </nav>
  </footer>
</div>
</body>
</html>
`);
}


/**
 * The library page: one card per volume, listing what is written and what is
 * not. This is the stable eBook URL that index.html links and that gets pasted
 * into Canvas, which is why the front door points here rather than at a volume
 * file: adding a volume must never require editing the front door or re-sharing
 * a link.
 *
 * @param {object} library  the LIBRARY config from scripts/build-ebook.js
 * @param {object[]} volumes [{ volume, entries }] where entries are the volume's
 *        ordered contents, {chapter} for written and {pending} for not
 */
function renderLibrary(library, volumes) {
  const cards = volumes.map(({ volume, entries }) => {
    const chapters = entries.filter(e => e.chapter).map(e => e.chapter);
    const pending = entries.filter(e => e.pending).map(e => e.pending);
    const sections = chapters.reduce((sum, c) => sum + (c.empires || []).length, 0);

    // Walked in declared order, so written and unwritten chapters interleave in
    // teaching order. Listing every written chapter first and the gaps after
    // tells a student looking for Foundations 2 to check the bottom of the list,
    // which is the wrong place to look.
    const rows = entries.map(entry => {
      if (entry.pending) {
        return `          <li class="eb-lib-pending"><span class="eb-sec-n">&mdash;</span>${esc(entry.pending.title)}</li>\n`;
      }
      const c = entry.chapter;
      return `          <li><a href="${esc(path_basename(volume.outputFile))}#chapter-${esc(c.topicKey)}">` +
             `<span class="eb-sec-n">${esc(chapterNumber(c))}</span>${esc(stripTags(c.titleHtml))}</a></li>\n`;
    }).join('');

    return (
      `      <article class="eb-lib-card">\n` +
      `        <a class="eb-lib-open" href="${esc(path_basename(volume.outputFile))}">\n` +
      `          <h3>${volume.titleHtml}</h3>\n` +
      `          <p class="eb-lib-blurb">${volume.blurb}</p>\n` +
      `          <p class="eb-lib-meta">${chapters.length} chapter${chapters.length === 1 ? '' : 's'}` +
      ` &nbsp;·&nbsp; ${sections} sections` +
      `${pending.length ? ` &nbsp;·&nbsp; ${pending.length} still to come` : ''}</p>\n` +
      `        </a>\n` +
      `        <ul class="eb-lib-chapters">\n${rows}        </ul>\n` +
      `      </article>\n`
    );
  }).join('');

  return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(library.docTitle)}</title>
  <link rel="stylesheet" href="../assets/css/behistorical-deep-reading.css">
  <link rel="stylesheet" href="../assets/css/behistorical-ebook.css">
</head>
<body class="eb-body">
${SKIP_LINK}<header class="eb-cover">
  <div class="dr-wrap">
    <div class="dr-eyebrow">${library.eyebrow}</div>
    <h1>${library.titleHtml}</h1>
    <p class="eb-cover-deck">${library.deck}</p>
  </div>
</header>
<main id="main-content" class="dr-wrap">
  <section class="eb-library">
    <h2>Volumes</h2>
    <div class="eb-lib-grid">
${cards}    </div>
    <p class="eb-lib-note">${library.note}</p>
  </section>
</main>
<div class="dr-wrap">
  <footer class="dr-footer">
    <span class="dr-footer-note">BeHistorical &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; Generated from the course content model</span>
    <nav class="dr-nav" aria-label="Course navigation">
      <a href="../index.html">Course Home</a>
      <a href="../foundations/index.html">Foundations</a>
    </nav>
  </footer>
</div>
</body>
</html>
`);
}

/** basename without pulling in path, since this file renders and does no I/O. */
function path_basename(p) { return String(p).split('/').pop(); }

/** The volume title is authored as HTML for the <em> highlight; the library
 *  chapter list needs it as plain text. */
function stripTags(html) { return String(html || '').replace(/<[^>]+>/g, ''); }

module.exports = { renderEbook, renderLibrary };
