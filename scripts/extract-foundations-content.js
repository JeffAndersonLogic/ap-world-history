#!/usr/bin/env node
'use strict';

/**
 * One-time lift: read the six hand-authored Foundations readings and write their
 * content out as data, so the pages can be generated from then on.
 *
 *   node scripts/extract-foundations-content.js
 *
 * Writes scripts/lib/foundations-f10-content.js. It reads the readings and
 * nothing else, so re-running it on the pre-migration files always produces the
 * same module; it is the migration that is one-way, not this script.
 *
 * Paragraph and callout bodies are taken as raw HTML rather than text, because
 * <span class="kt"> is how a key term is found on the page and <strong> and <em>
 * carry emphasis the author chose. Only the outer wrapper is dropped.
 *
 * What proves this did not lose anything is scripts/test/foundations-golden.js,
 * which compares the extraction of the old page against the extraction of the
 * generated one. This script deliberately does no verification of its own: a
 * tool that both performs a migration and grades it is not a check.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'foundations');
const OUT = path.join(ROOT, 'scripts', 'lib', 'foundations-f10-content.js');

// ── balanced-block helpers ───────────────────────────────────────────────────
/**
 * Inner HTML of every element carrying `cls`, with nesting handled.
 *
 * The class has to match as a whole token, not as a substring with word
 * boundaries: `\bsection\b` also matches `check-section`, `builder-section` and
 * `section-label`, because a hyphen counts as a word boundary. Testing the split
 * class list is the only reading of "has this class" that agrees with the
 * browser.
 */
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
    out.push(html.slice(start, s ? s.index : html.length));
  }
  return out;
}

const block = (html, cls) => blocks(html, cls)[0] || '';
const tidy = (s) => String(s || '').replace(/\s+/g, ' ').trim();

/** Inner HTML of the first <tag>, wrapper removed, whitespace collapsed. */
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

function attr(html, name) {
  const m = html.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`));
  return m ? m[1] : '';
}

// ── per-file extraction ──────────────────────────────────────────────────────
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

function extract(file) {
  const src = fs.readFileSync(path.join(DIR, file), 'utf8');
  if (isGenerated(src)) {
    throw new Error(`${file} is already generated. Extract only from the hand-authored `
      + 'originals, e.g. restore them with `git show <pre-migration-ref>:<path>` first. '
      + "Re-extracting from generated output writes the generator's own bugs back into "
      + 'the content model as if an author had chosen them.');
  }

  const supportCards = blocks(src, 'support-card').map(c => tidy(inner(c, 'p')));
  const sections = blocks(src, 'section').map(sec => {
    const callout = block(sec, 'ap-callout');
    // The callout is a label paragraph followed by body paragraphs. Drop the
    // label, keep the rest as authored HTML.
    const calloutBody = tidy(
      callout.replace(/<p class="ap-callout-label">[\s\S]*?<\/p>/, '')
        .replace(/^\s*<p>([\s\S]*)<\/p>\s*$/, '$1')
    );
    return {
      label: plain(block(sec, 'section-label')),
      heading: plain(block(sec, 'section-heading')),
      paragraphs: blocks(sec, 'reading-text').map(tidy),
      callout: { label: tidy(block(sec, 'ap-callout-label')), html: calloutBody }
    };
  });

  const questions = blocks(src, 'question-item').map(item => {
    const ta = (item.match(/<textarea\b[^>]*>/) || [''])[0];
    return {
      skill: plain(block(item, 'q-skill')),
      text: plain(block(item, 'q-text')),
      placeholder: decode(attr(ta, 'placeholder'))
    };
  });

  const navs = [...src.matchAll(/<a class="nav-btn[^"]*" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map(m => ({ href: m[1], label: tidy(m[2]) }));

  const beReady = block(src, 'be-ready');

  // The whole prompt-building script travels with the reading. Foundations
  // labels each answer with its question; the unit template does not.
  const script = (src.match(/<script[^>]*>([\s\S]*?)<\/script>/) || ['', ''])[1];
  const promptScript = tidy0(
    script
      .replace(/^[\s\S]*?var\s+TOPIC_LABEL\s*=\s*'[^']*';\s*/, '')
      .split('/* BeHistorical First & 10 answer capture')[0]
      // Dropped on purpose: the generated page renders Open MagicSchool as the
      // canonical <a href>, the same shape the other 71 readings use, and the
      // capture wrapper intercepts it by label. The old inline handler opened
      // the identical URL, so this is the same click with less bespoke code.
      .replace(/function openMagicSchool\(\)[\s\S]*?\n\}/, '')
  );

  return {
    topicKey: (src.match(/var\s+TOPIC_KEY\s*=\s*'([^']*)'/) || [])[1],
    topicLabel: (src.match(/var\s+TOPIC_LABEL\s*=\s*'([^']*)'/) || [])[1],
    docTitle: tidy(inner(src, 'title')),
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
    // The readings drive this button through an inline handler rather than an
    // href, so take the URL from wherever it appears in the page.
    coachUrl: (src.match(/(https:\/\/student\.magicschool\.ai[^'"]*)/) || [])[1],
    promptScript
  };
}

// Collapse runs of blank lines but keep real newlines: the prompt script is code
// and stays readable, unlike the HTML fragments above.
function tidy0(s) {
  return String(s || '').replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

// ── write the module ─────────────────────────────────────────────────────────
const files = fs.readdirSync(DIR)
  .filter(f => /^first-and-10-foundations.*\.html$/.test(f) && !f.includes('-capture'))
  .sort();

const content = {};
for (const f of files) {
  const rec = extract(f);
  rec.sourceFile = f;
  rec.lessonFile = (rec.navPrev.href || '').split('#')[0];
  content[rec.topicKey] = rec;
}

const banner = `'use strict';

/**
 * Authored First & 10 content for the six Foundations readings, keyed by topic.
 *
 * Lifted out of the hand-authored HTML by scripts/extract-foundations-content.js
 * on 2026-08-09 and the source of truth from that point. Edit the reading here,
 * then run \`npm run build:foundations\`. Do not hand-edit the generated
 * foundations/first-and-10-foundations-*.html files: they are rebuilt from this,
 * and scripts/test/readings-reproducible.test.js fails the build on drift.
 *
 * Paragraph, callout, and support-card bodies are trusted author HTML and may
 * carry <span class="kt">, <strong>, and <em>.
 */

module.exports = `;

fs.writeFileSync(OUT, banner + JSON.stringify(content, null, 2) + ';\n');
console.log(`wrote ${path.relative(ROOT, OUT)} with ${Object.keys(content).length} topics`);
for (const [k, v] of Object.entries(content)) {
  console.log(`  ${k}  ${v.sections.length} sections, ${v.questions.length} questions, ${v.vocabulary.length} terms`);
}
