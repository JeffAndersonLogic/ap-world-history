#!/usr/bin/env node
'use strict';

/**
 * Compile the deep readings for a volume into one continuous eBook.
 *
 *   node scripts/build-ebook.js            write the volumes
 *   node scripts/build-ebook.js --check    fail on drift, write nothing
 *
 * The eBook is a **second surface on the same source**, not a second copy of
 * the content. Every chapter is the same content module that produces that
 * topic's per-topic deep reading, so the two cannot disagree: rebuild and both
 * move together, and --check in the offline suite fails if either was edited by
 * hand. This is the pattern build-index.js and build-socrates.js already use,
 * and it is the whole reason the eBook is not simply a document someone writes.
 *
 * Why a separate surface at all, when every chapter is already reachable from
 * its own lesson page? Because they answer different questions. The per-topic
 * deep reading serves the student working through Foundations 1 tonight. The
 * eBook serves the student revising in May, the student who missed three weeks,
 * and the case manager who wants to see what is actually being taught. Neither
 * one does the other's job.
 *
 * Volumes are declared below rather than discovered, because a volume is an
 * editorial decision about what belongs together and in what order, which is
 * not something a directory listing knows. The chapters inside a volume are
 * still discovered from the content directory, so adding a chapter is one new
 * content module plus its slug in the right volume.
 */

const fs = require('fs');
const path = require('path');
const { renderEbook } = require('./lib/ebook-page');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(__dirname, 'lib', 'deep-reading-content');
const check = process.argv.includes('--check');

const VOLUMES = [
  {
    id: 'foundations',
    outputFile: 'ebook/foundations.html',
    docTitle: 'BeHistorical | The Foundations eBook',
    eyebrow: 'BeHistorical &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'The Foundations <em>eBook</em>',
    deck: `Everything AP World History assumes you already know before Unit 1 begins. Each chapter goes deeper than its First &amp; 10 reading, because the checkpoints ask you to explain how something worked and why it mattered, and you cannot explain a mechanism you have only been given the name of.`,
    // One ordered list, in teaching order, mixing written chapters with the
    // ones still to come. Unwritten topics are listed in place rather than
    // collected at the end, because a student looking for Foundations 2 looks
    // between Foundations 1 and Foundations 3, and finding it there marked
    // "not written yet" answers the question. Finding nothing does not.
    contents: [
      { slug: 'foundations-1' },
      { pending: { label: 'Foundations 2', title: 'Belief Systems & Cultural Exchange' } },
      { slug: 'foundations-3' },
      { pending: { label: 'Foundations 4', title: 'Trade Networks & Innovation' } },
      { pending: { label: 'Foundations 5', title: 'The World at c.1200' } }
    ]
  }
];

// Exported before the build runs, and the build is guarded below, because
// validate.js requires this file purely to read VOLUMES. Without the guard a
// require() would execute the builder, which would mean the validator writes
// files as a side effect of validating, and a check that silently rebuilds the
// thing it is checking can never fail.
module.exports = { VOLUMES };

if (require.main !== module) return;

function loadChapter(slug) {
  const file = path.join(CONTENT_DIR, `${slug}.js`);
  if (!fs.existsSync(file)) throw new Error(`volume names a chapter with no content module: ${slug}`);
  return require(file);
}

let wrote = 0;
const drifted = [];

for (const volume of VOLUMES) {
  // Resolve the ordered contents into entries the renderer can walk: a written
  // chapter carries its loaded content module, a pending one carries only its
  // label. Order is preserved exactly as declared.
  const entries = volume.contents.map(entry =>
    entry.slug ? { chapter: loadChapter(entry.slug) } : { pending: entry.pending }
  );
  const chapters = entries.filter(e => e.chapter).map(e => e.chapter);
  const target = path.join(ROOT, volume.outputFile);
  const rel = path.relative(ROOT, target);
  const html = renderEbook(volume, entries);

  if (check) {
    const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (onDisk !== html) drifted.push(rel);
    continue;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  wrote++;
  console.log(`  wrote ${rel}  (${chapters.length} chapters)`);
}

if (check) {
  if (drifted.length) {
    console.error('eBook volumes differ from what the content model produces:');
    for (const f of drifted) console.error(`  ${f}`);
    console.error('\nEdit the chapter modules in scripts/lib/deep-reading-content/, then run: npm run build:ebook');
    process.exit(1);
  }
  const one = VOLUMES.length === 1;
  console.log(`${VOLUMES.length} eBook volume${one ? '' : 's'} match${one ? 'es' : ''} the content model`);
} else {
  console.log(`\n${wrote} eBook volume${wrote === 1 ? '' : 's'} rebuilt from the content model.`);
}
