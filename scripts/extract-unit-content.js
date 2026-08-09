#!/usr/bin/env node
'use strict';

/**
 * Lift the hand-authored unit First & 10 readings into content modules.
 *
 *   node scripts/extract-unit-content.js            every unit
 *   node scripts/extract-unit-content.js unit-1     one unit
 *
 * Writes scripts/lib/reading-content/<unit>.js, one module per unit. Readings
 * already generated from scripts/lib/f10-content.js (Units 6 and 9) are skipped:
 * they have a source of truth already, and giving them a second one is the
 * problem this whole exercise exists to remove.
 *
 * This is the Foundations extractor generalised. The differences it has to carry
 * across 58 readings, each of which is preserved verbatim rather than
 * normalised:
 *
 *   - pull-quotes sitting between paragraphs, in 17 of them, which is why
 *     sections are extracted as ordered blocks rather than a paragraph list
 *   - two different AI Coach prompt builders, so each reading's own script
 *     travels with it instead of being flattened to whichever one this script
 *     happened to prefer
 *   - Topic 1.7 asking five questions where every other reading asks three
 *   - Unit 1 using the abbreviated `qta` class and assigning textarea ids at
 *     runtime, which the template does statically and correctly
 *
 * Proof that nothing was lost is scripts/test/readings-golden.js, not this file.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUTDIR = path.join(ROOT, 'scripts', 'lib', 'reading-content');

// Already generated from f10-content.js. Leave them alone.
const ALREADY_GENERATED = new Set(['6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8',
  '9.4', '9.5', '9.6', '9.7', '9.8', '9.9']);

// ── balanced-block helpers (class matched as a whole token, not a substring) ──
function blocks(html, cls) {
  const out = [];
  const open = /<([a-zA-Z][\w]*)\b([^>]*)>/g;
  let m;
  while ((m = open.exec(html)) !== null) {
    const tag = m[1];
    const classAttr = (m[2].match(/\bclass\s*=\s*"([^"]*)"/) || [])[1] || '';
    if (!classAttr.split(/\s+/).includes(cls)) continue;
    const start = open.lastIndex;
    const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g');
    scan.lastIndex = start;
    let depth = 1, s;
    while ((s = scan.exec(html)) !== null) {
      depth += s[1] === '/' ? -1 : 1;
      if (depth === 0) break;
    }
    out.push({ inner: html.slice(start, s ? s.index : html.length), at: m.index });
  }
  return out;
}

const innersOf = (html, cls) => blocks(html, cls).map(b => tidy(b.inner));
const block = (html, cls) => (blocks(html, cls)[0] || { inner: '' }).inner;
const tidy = (s) => String(s || '').replace(/\s+/g, ' ').trim();

function inner(html, tag) {
  const m = html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? tidy(m[1]) : '';
}


// Fields the template escapes are stored as plain text, not as the HTML they
// were lifted from. A vocabulary chip reading "Continuity &amp; Change" in the
// source is the text "Continuity & Change"; storing the entity and escaping it
// again renders the entity itself to the student. Fields the template trusts
// (section blocks, callouts, support cards, the title band) keep their markup.
const { decode } = require('./lib/reading-extract');
const plain = (s) => decode(tidy(s));

const attr = (html, name) => {
  const m = html.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`));
  return m ? m[1] : '';
};

/** Prose and pull-quotes in the order the author wrote them. */
function sectionBlocks(sec) {
  const items = [
    ...blocks(sec, 'reading-text').map(b => ({ type: 'p', html: tidy(b.inner), at: b.at })),
    ...blocks(sec, 'pull-quote').map(b => ({ type: 'pull', html: tidy(inner(b.inner, 'p') || b.inner), at: b.at }))
  ].sort((a, b) => a.at - b.at);
  return items.map(({ type, html }) => ({ type, html }));
}

/**
 * Refuse to read a page this pipeline generated.
 *
 * These extractors are one-way. Run one against an already-migrated reading and
 * it re-ingests the generator's own output, including any escaping bug in it,
 * and writes that back into the content model as though an author had chosen
 * it. That is exactly how "Continuity &amp; Change" became a vocabulary term.
 *
 * A generated reading links the shared stylesheet and carries no inline <style>;
 * every hand-authored one carries its own copy.
 */
function isGenerated(src) {
  return src.includes('assets/css/behistorical-first10.css') && !/<style\b/.test(src);
}

function extract(dir, file) {
  const src = fs.readFileSync(path.join(ROOT, dir, file), 'utf8');
  const topicKey = (src.match(/var\s+TOPIC_KEY\s*=\s*'([^']*)'/) || [])[1];
  if (!topicKey || ALREADY_GENERATED.has(topicKey)) return null;
  if (isGenerated(src)) {
    throw new Error(`${dir}/${file} is already generated. Extract only from the hand-authored `
      + 'originals, e.g. restore them with `git show <pre-migration-ref>:<path>` first. '
      + "Re-extracting from generated output writes the generator's own bugs back into "
      + 'the content model as if an author had chosen them.');
  }

  const supportCardEls = blocks(src, 'support-card').map(c => c.inner);
  const supportCards = supportCardEls.map(c => {
    const body = inner(c, 'p');
    // A few readings write the card body as bare text with no <p>.
    return body || tidy(c.replace(/<h[1-6][\s\S]*?<\/h[1-6]>/, ''));
  });
  const supportHeadings = supportCardEls.map(c => tidy(inner(c, 'h3')));

  const sections = blocks(src, 'section').map(({ inner: sec }) => {
    const callout = block(sec, 'ap-callout');
    // Not every section has one. Emitting the generic fallback where the author
    // wrote none would add coaching text the reading never had.
    if (!callout) {
      return {
        number: tidy(block(sec, 'section-number')),
        label: plain(block(sec, 'section-label')),
        heading: plain(block(sec, 'section-heading')),
        blocks: sectionBlocks(sec),
        callout: null
      };
    }
    return {
      number: tidy(block(sec, 'section-number')),
      label: plain(block(sec, 'section-label')),
      heading: plain(block(sec, 'section-heading')),
      blocks: sectionBlocks(sec),
      callout: {
        label: tidy(block(sec, 'ap-callout-label')),
        // Kept whole. Some callouts hold several paragraphs, and stripping the
        // outer <p> off those leaves stray tags in the middle of the text.
        raw: tidy(callout.replace(/<p class="ap-callout-label">[\s\S]*?<\/p>/, ''))
      }
    };
  });

  const questions = blocks(src, 'question-item').map(({ inner: item }) => {
    const ta = (item.match(/<textarea\b[^>]*>/) || [''])[0];
    return {
      num: tidy(block(item, 'q-num')),
      skill: plain(block(item, 'q-skill')),
      text: plain(block(item, 'q-text')),
      placeholder: decode(attr(ta, 'placeholder'))
    };
  });

  const navs = [...src.matchAll(/<a class="nav-btn[^"]*" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map(m => ({ href: m[1], label: tidy(m[2]) }));

  // Every script block except the shared capture block, which the template emits
  // itself. The id-assigning shim goes too: it exists only because these pages
  // wrote textareas without ids, and the template writes them with ids.
  const scripts = [...src.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const promptScript = scripts
    .map(s => s.split('/* BeHistorical First & 10 answer capture')[0])
    .join('\n')
    .replace(/^[\s\S]*?var\s+TOPIC_LABEL\s*=\s*'[^']*';\s*/, '')
    .replace(/document\.addEventListener\('DOMContentLoaded'[\s\S]*?\}\);?\s*$/m, '')
    .replace(/function openMagicSchool\(\)[\s\S]*?\n\}/, '')
    .replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();

  const beReady = block(src, 'be-ready');

  return {
    topicKey,
    topicLabel: (src.match(/var\s+TOPIC_LABEL\s*=\s*'([^']*)'/) || [])[1],
    sourceFile: file,
    unitDir: dir,
    docTitle: tidy(inner(src, 'title')),
    moduleBadge: tidy(block(src, 'module-badge')),
    moduleName: tidy(block(src, 'module-name')),
    readingEyebrow: tidy(block(src, 'reading-eyebrow')),
    supportHeadings: { before: supportHeadings[0] || 'Before You Read', target: supportHeadings[1] || 'Reading Target' },
    showFooter: /<(?:footer|div)[^>]*class="[^"]*\bmodule-footer\b/.test(src),
    // blocks() matches the class as a whole token. A regex using \b here would
    // also match page-footer-note, which every reading has, so every reading
    // would claim a footer note it does not render.
    showFooterNote: blocks(src, 'footer-note').length > 0,
    headerSubtitle: tidy(block(src, 'module-subtitle')),
    titleHtml: tidy(block(src, 'reading-title')),
    deck: plain(block(src, 'reading-deck')),
    skillTags: blocks(src, 'skill-tag').map(b => plain(b.inner !== undefined ? b.inner : b)),
    supportCards: { beforeYouRead: supportCards[0] || '', readingTarget: supportCards[1] || '' },
    vocabulary: blocks(src, 'term-chip').map(b => plain(b.inner !== undefined ? b.inner : b)),
    sections,
    takeaway: tidy(inner(beReady.replace(/<h3[\s\S]*?<\/h3>/, ''), 'p')),
    checkBadge: tidy(block(src, 'check-badge')),
    checkTitle: tidy(block(src, 'check-title')),
    questions,
    builderBody: tidy(block(src, 'builder-body')),
    submitNote: plain(block(src, 'page-footer-note')),
    footerNote: tidy(block(src, 'footer-note')),
    navPrev: navs[0],
    navNext: navs[1],
    lessonFile: ((navs[0] || {}).href || '').split('#')[0],
    coachUrl: (src.match(/(https:\/\/student\.magicschool\.ai[^'"]*)/) || [])[1],
    padQuestionNumbers: /class="q-num">0\d</.test(src),
    promptScript
  };
}

// ── run ──────────────────────────────────────────────────────────────────────
const only = process.argv.slice(2).find(a => !a.startsWith('-'));
const units = (only ? [only] : ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5',
  'unit-6', 'unit-7', 'unit-8', 'unit-9']);

if (!fs.existsSync(OUTDIR)) fs.mkdirSync(OUTDIR, { recursive: true });

let total = 0;
for (const unit of units) {
  const dir = path.join(ROOT, unit);
  if (!fs.existsSync(dir)) { console.error(`no such unit: ${unit}`); process.exit(2); }

  const files = fs.readdirSync(dir)
    .filter(f => /^first-and-10-.*\.html$/.test(f) && !f.includes('-capture')).sort();

  const content = {};
  for (const f of files) {
    const rec = extract(unit, f);
    if (rec) content[rec.topicKey] = rec;
  }

  const count = Object.keys(content).length;
  if (!count) { console.log(`  ${unit}: nothing to extract, all readings already generated`); continue; }

  const out = path.join(OUTDIR, `${unit}.js`);
  fs.writeFileSync(out, `'use strict';

/**
 * Authored First & 10 content for ${unit}, keyed by topic.
 *
 * Lifted from the hand-authored HTML by scripts/extract-unit-content.js and the
 * source of truth from that point. Edit the reading here, then run
 * \`npm run build:readings\`. Do not hand-edit the generated
 * ${unit}/first-and-10-*.html files; scripts/test/readings-reproducible.test.js
 * fails the build on drift.
 *
 * Section blocks, callout bodies and support cards are trusted author HTML and
 * may carry <span class="kt">, <strong>, <em>, and pull-quotes.
 */

module.exports = ${JSON.stringify(content, null, 2)};
`);
  total += count;
  console.log(`  ${unit}: ${count} readings -> scripts/lib/reading-content/${unit}.js`);
}

console.log(`\n${total} readings extracted.`);
