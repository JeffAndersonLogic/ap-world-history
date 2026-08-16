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
  // Shown only while some volume still lists a pending topic, which none does
  // now that all ten volumes are complete. renderLibrary derives that from the
  // contents rather than taking it on trust, so this text cannot outlive the
  // gaps it explains and does not have to be remembered when one reopens.
  note: `Volumes are added as they are written. A topic listed as not written yet has its First &amp; 10 reading and its lecture cards on the lesson page already; what it does not have yet is a chapter here.`
};

const VOLUMES = [
  {
    id: 'foundations',
    outputFile: 'ebook/foundations.html',
    blurb: `The pre-1200 bridge unit: how geography produced the first civilizations, how classical states held power, and what AP World assumes you already know before Unit 1 begins.`,
    label: 'Foundations',
    docTitle: 'BeHistorical | Foundations: Before the Modern World',
    eyebrow: 'Foundations &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Before the Modern <em>World</em>',
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
    label: 'Unit 01',
    docTitle: 'BeHistorical | Unit 1: The Global Tapestry',
    eyebrow: 'Unit 01 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'The Global <em>Tapestry</em>',
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
  },
  {
    id: 'unit-2',
    outputFile: 'ebook/unit-2.html',
    blurb: `Networks of Exchange: the three great trade systems of Afro-Eurasia treated as businesses, with the capital, the contracts, the ships and the animals, and then what the connection carried that nobody ordered.`,
    label: 'Unit 02',
    docTitle: 'BeHistorical | Unit 2: Networks of Exchange',
    eyebrow: 'Unit 02 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Networks of <em>Exchange</em>',
    deck: `Unit 2 is about connection, and connection is easy to describe and hard to explain. These chapters give the machinery: what a caravan cost to run, why a ship could carry rice when a camel could not, what a harbor master did, and why the same routes that carried Persian cobalt to Chinese kilns carried a pandemic to every port on the map.`,
    contents: [
      { module: 'topic-2-1' },
      { module: 'topic-2-2' },
      { module: 'topic-2-3' },
      { module: 'topic-2-4' },
      { module: 'topic-2-5' },
      { module: 'topic-2-6' },
      { module: 'topic-2-7' }
    ]
  },
  {
    id: 'unit-3',
    outputFile: 'ebook/unit-3.html',
    blurb: `Land-Based Empires: how artillery made the old fortress useless, what it cost to keep an army that could use it, and how five empires governed enormous populations who did not share their religion.`,
    label: 'Unit 03',
    docTitle: 'BeHistorical | Unit 3: Land-Based Empires',
    eyebrow: 'Unit 03 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Land-Based <em>Empires</em>',
    deck: `Four chapters for four topics, and one argument running through them: gunpowder is a fiscal problem before it is a military one, so the empires that expanded were the ones that could pay, and everything they built afterward, the levied servants, the tax farms, the endowed mosque complexes, follows from having to keep paying.`,
    contents: [
      { module: 'topic-3-1' },
      { module: 'topic-3-2' },
      { module: 'topic-3-3' },
      { module: 'topic-3-4' }
    ]
  },
  {
    id: 'unit-4',
    outputFile: 'ebook/unit-4.html',
    blurb: `Transoceanic Connections: the ships that could come home against the wind, the three incompatible ways of holding an ocean, the silver that paid for all of it, and the honest account of what Europeans still could not do in 1750.`,
    label: 'Unit 04',
    docTitle: 'BeHistorical | Unit 4: Transoceanic Connections',
    eyebrow: 'Unit 04 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Transoceanic <em>Connections</em>',
    deck: `Eight chapters for eight topics, and two arguments running through them. The first is that every empire in this unit took the shape of what it was extracting and what stood in its way, which is why Portugal took harbors, Spain took land, and the Dutch chartered a company that could declare war. The second is the correction the unit needs: Europeans dominated the ocean routes and the Americas while remaining customers of Asian economies they could not match in production, and knowing where that line falls is what makes Unit 5 legible.`,
    contents: [
      { module: 'topic-4-1' },
      { module: 'topic-4-2' },
      { module: 'topic-4-3' },
      { module: 'topic-4-4' },
      { module: 'topic-4-5' },
      { module: 'topic-4-6' },
      { module: 'topic-4-7' },
      { module: 'topic-4-8' }
    ]
  },
  {
    id: 'unit-5',
    outputFile: 'ebook/unit-5.html',
    blurb: `Revolutions: where authority comes from and who counted as the people, why industrialization began in one set of counties and was blocked everywhere else, and the five competing explanations of why an economy producing unprecedented wealth also produced unprecedented misery.`,
    label: 'Unit 05',
    docTitle: 'BeHistorical | Unit 5: Revolutions',
    eyebrow: 'Unit 05 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: '<em>Revolutions</em>',
    deck: `Ten chapters for ten topics, and one argument connecting the political half to the industrial one. A set of writers claimed that authority comes from the governed and that rights belong to people as such, and then wrote those claims down, where everyone they excluded could read them. The rest of the unit is what happened as revolutionaries, the enslaved, nationalists, women and factory workers each held that principle to its own terms, against states that were simultaneously being remade by coal.`,
    contents: [
      { module: 'topic-5-1' },
      { module: 'topic-5-2' },
      { module: 'topic-5-3' },
      { module: 'topic-5-4' },
      { module: 'topic-5-5' },
      { module: 'topic-5-6' },
      { module: 'topic-5-7' },
      { module: 'topic-5-8' },
      { module: 'topic-5-9' },
      { module: 'topic-5-10' }
    ]
  },
  {
    id: 'unit-6',
    outputFile: 'ebook/unit-6.html',
    blurb: `Consequences of Industrialization: why conquest suddenly became affordable, what an export crop does to a country that has only one, the five different things the word resistance covers, and the hundred and fifty million people who moved.`,
    label: 'Unit 06',
    docTitle: 'BeHistorical | Unit 6: Consequences of Industrialization',
    eyebrow: 'Unit 06 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Consequences of <em>Industrialization</em>',
    deck: `Eight chapters for eight topics, and one argument running through them: industrial production created a demand that could only be met somewhere else, and everything in this unit follows from how that demand was satisfied. Conquest became cheap enough to be a police action, whole regions were rebuilt around a single crop, states lost the power to set their own tariffs without losing their flags, and a hundred and fifty million people moved to do the work. The last chapter is about weighing those against each other, because by then you will have more evidence than any essay can hold.`,
    contents: [
      { module: 'topic-6-1' },
      { module: 'topic-6-2' },
      { module: 'topic-6-3' },
      { module: 'topic-6-4' },
      { module: 'topic-6-5' },
      { module: 'topic-6-6' },
      { module: 'topic-6-7' },
      { module: 'topic-6-8' }
    ]
  },
  {
    id: 'unit-7',
    outputFile: 'ebook/unit-7.html',
    blurb: `Global Conflict: why three empires could not afford an industrial army, how a war became unendable by battle and therefore consumed whole societies, and what the same capacity did when a state turned it on a population inside its own reach.`,
    label: 'Unit 07',
    docTitle: 'BeHistorical | Unit 7: Global Conflict',
    eyebrow: 'Unit 07 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Global <em>Conflict</em>',
    deck: `Nine chapters for nine topics, and one argument running through them: total war is a capacity rather than a mood. Once a factory system can replace losses faster than battles inflict them, beating an army stops ending a war, so states reach into kitchens, newspapers, colonies and eventually other people's cities. The same censuses, railways and chains of command that made this possible are what Topic 7.8 describes a state turning inward, which is why the atrocities of this century belong in a unit about industrial capacity rather than in a separate box about human wickedness.`,
    contents: [
      { module: 'topic-7-1' },
      { module: 'topic-7-2' },
      { module: 'topic-7-3' },
      { module: 'topic-7-4' },
      { module: 'topic-7-5' },
      { module: 'topic-7-6' },
      { module: 'topic-7-7' },
      { module: 'topic-7-8' },
      { module: 'topic-7-9' }
    ]
  },
  {
    id: 'unit-8',
    outputFile: 'ebook/unit-8.html',
    blurb: `Cold War and Decolonization: two things that happened at once and are usually taught apart, because a standoff that could not be fought in Europe turned every newly independent state into a place where it could be fought instead.`,
    label: 'Unit 08',
    docTitle: 'BeHistorical | Unit 8: Cold War and Decolonization',
    eyebrow: 'Unit 08 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: 'Cold War &amp; <em>Decolonization</em>',
    deck: `Nine chapters for nine topics, and one argument holding them together: this unit teaches two processes in separate topics and they are one system. European empires ran out of money and will at the same moment two powers with incompatible systems were left facing each other, and because the rivalry could not be fought directly in Europe it was fought through the states coming into existence everywhere else. That is why non-alignment was so attractive and so nearly impossible to sustain, and why the rivalry ending in <span class="num">1991</span> did not end the wars it had funded.`,
    contents: [
      { module: 'topic-8-1' },
      { module: 'topic-8-2' },
      { module: 'topic-8-3' },
      { module: 'topic-8-4' },
      { module: 'topic-8-5' },
      { module: 'topic-8-6' },
      { module: 'topic-8-7' },
      { module: 'topic-8-8' },
      { module: 'topic-8-9' }
    ]
  },
  {
    id: 'unit-9',
    outputFile: 'ebook/unit-9.html',
    blurb: `Globalization: not connection, which is old and belongs to Unit 2, but a collapse in the cost of moving goods, money, people and information, and the question that follows it, which is who captured the savings and who absorbed the costs left off the invoice.`,
    label: 'Unit 09',
    docTitle: 'BeHistorical | Unit 9: Globalization',
    eyebrow: 'Unit 09 &nbsp;·&nbsp; The eBook &nbsp;·&nbsp; AP World History: Modern',
    titleHtml: '<em>Globalization</em>',
    deck: `Nine chapters for nine topics, and one question running under all of them. Globalization is not the fact of long-distance connection, which Unit 2 already covered seven centuries earlier; it is a collapse in what distance costs. Almost everything in this unit follows from asking who received those savings and who absorbed the costs that were never billed, from a container that is not unpacked between the factory and the store, to a cure that exists and does not arrive, to rules written by bodies nobody can vote out. The last chapter closes the course.`,
    contents: [
      { module: 'topic-9-1' },
      { module: 'topic-9-2' },
      { module: 'topic-9-3' },
      { module: 'topic-9-4' },
      { module: 'topic-9-5' },
      { module: 'topic-9-6' },
      { module: 'topic-9-7' },
      { module: 'topic-9-8' },
      { module: 'topic-9-9' }
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
