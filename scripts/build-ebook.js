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
 * content module plus its filename in the right volume's contents.
 */

const fs = require('fs');
const path = require('path');
const { renderEbook, renderLibrary } = require('./lib/ebook-page');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(__dirname, 'lib', 'deep-reading-content');
const check = process.argv.includes('--check');

// The library page: the one stable eBook URL. It is what index.html links and
// what gets pasted into Canvas, so it must keep working as volumes are added.
// Linking a volume file directly from the front door would mean changing the
// front door, and re-pasting the Canvas link, every time a volume lands.
const LIBRARY = {
  outputFile: 'ebook/index.html',
  docTitle: 'BeHistorical | The eBook',
  eyebrow: 'BeHistorical &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The BeHistorical <em>eBook</em>',
  deck: `The course reading, in one place, written for this class rather than adapted from a textbook. Each chapter goes deeper than the First &amp; 10 for that topic, because the checkpoints ask you to explain how something worked and why it mattered, and a name is not a mechanism.`,
  note: `Volumes are added as they are written. A topic listed as not written yet has its First &amp; 10 reading and its lecture cards on the lesson page already; what it does not have yet is a chapter here.`
};

const VOLUMES = [
  {
    id: 'foundations',
    outputFile: 'ebook/foundations.html',
    blurb: `The pre-1200 bridge unit: how geography produced the first civilizations, how classical states held power, and what AP World assumes you already know before Unit 1 begins.`,
    docTitle: 'BeHistorical | The Foundations eBook',
    eyebrow: 'BeHistorical &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'The Foundations <em>eBook</em>',
    deck: `Everything AP World History assumes you already know before Unit 1 begins. Each chapter goes deeper than its First &amp; 10 reading, because the checkpoints ask you to explain how something worked and why it mattered, and you cannot explain a mechanism you have only been given the name of.`,
    // One ordered list, in teaching order, mixing written chapters with the
    // ones still to come. Unwritten topics are listed in place rather than
    // collected at the end, because a student looking for Foundations 2 looks
    // between Foundations 1 and Foundations 3, and finding it there marked
    // "not written yet" answers the question. Finding nothing does not.
    // `module` is the CONTENT MODULE FILENAME in deep-reading-content/, which is
    // not the same string as the `slug` field inside that module. The module is
    // foundations-4.js; its slug is foundations-4-trade-networks. Naming this
    // key `slug` invited exactly that confusion, so it does not.
    contents: [
      { module: 'foundations-1' },
      { module: 'foundations-2' },
      { module: 'foundations-3' },
      { module: 'foundations-4' },
      { module: 'foundations-5' }
    ]
  },
  {
    id: 'unit-1',
    outputFile: 'ebook/unit-1.html',
    blurb: `The Global Tapestry: six regions in the century either side of <span class="num">1200</span>, each answering the same questions about power, belief and wealth, and the comparison chapter that puts the answers side by side.`,
    docTitle: 'BeHistorical | The Unit 1 eBook',
    eyebrow: 'BeHistorical &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'The Unit 1 <em>eBook</em>',
    deck: `Unit 1 is the course's survey of the world as it stood around <span class="num">1200</span>, and a survey is exactly the format that has no room to explain how anything worked. Each chapter here takes one topic and gives you the working parts: not that the Song had an examination, but how sealed names and recopied papers made it work and whom it still shut out.`,
    // Teaching order is topic order here, and every chapter is written, so this
    // volume carries no pending entries. It will if Unit 1 ever gains a topic.
    contents: [
      { module: 'topic-1-1' },
      { module: 'topic-1-2' },
      { module: 'topic-1-3' },
      { module: 'topic-1-4' },
      { module: 'topic-1-5' },
      { module: 'topic-1-6' },
      { module: 'topic-1-7' }
    ]
  }
];

// Exported before the build runs, and the build is guarded below, because
// validate.js requires this file purely to read VOLUMES. Without the guard a
// require() would execute the builder, which would mean the validator writes
// files as a side effect of validating, and a check that silently rebuilds the
// thing it is checking can never fail.
module.exports = { VOLUMES, LIBRARY };

if (require.main !== module) return;

function loadChapter(moduleName) {
  const file = path.join(CONTENT_DIR, `${moduleName}.js`);
  if (!fs.existsSync(file)) {
    throw new Error(`volume names a chapter with no content module: scripts/lib/deep-reading-content/${moduleName}.js`);
  }
  return require(file);
}

let wrote = 0;
const drifted = [];

for (const volume of VOLUMES) {
  // Resolve the ordered contents into entries the renderer can walk: a written
  // chapter carries its loaded content module, a pending one carries only its
  // label. Order is preserved exactly as declared.
  const entries = volume.contents.map(entry =>
    entry.module ? { chapter: loadChapter(entry.module) } : { pending: entry.pending }
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

// The library indexes whatever volumes exist, so it is regenerated with them.
{
  const target = path.join(ROOT, LIBRARY.outputFile);
  const rel = path.relative(ROOT, target);
  const html = renderLibrary(LIBRARY, VOLUMES.map(v => ({
    volume: v,
    entries: v.contents.map(e =>
      e.module ? { chapter: loadChapter(e.module) } : { pending: e.pending })
  })));

  if (check) {
    const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (onDisk !== html) drifted.push(rel);
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, html);
    wrote++;
    console.log(`  wrote ${rel}  (library, ${VOLUMES.length} volume${VOLUMES.length === 1 ? '' : 's'})`);
  }
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
