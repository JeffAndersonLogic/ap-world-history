#!/usr/bin/env node
'use strict';
// node scripts/report-evidence-authenticity.js [unit] [--summaries]
//
// What is actually in front of a student in Module 07, on every topic in the
// course, sorted into three buckets:
//
//   OBJECT   a real picture: a photograph, map, cartoon, poster, artifact.
//   RECORD   no picture, but the words carry a quotation or figures, so there is
//            still something to read closely. A law, a treaty clause, a casualty
//            count, a dated sequence.
//   SUMMARY  no picture and no verbatim trace. The author's own sentences about
//            what happened. Nothing left for the student to observe, which means
//            the observation step of evidence -> observation -> inference -> claim
//            has already been done for them.
//
// **Deliberately not in any suite, and it exits 0 always**, the same as
// report-absolutes.js and report-skill-alignment.js. The classifier is a proxy:
// it looks for a URL, a quotation mark, or a numeral. Whether a card is really a
// historical object is a judgment about teaching that no grep can make, and a
// gate that failed a push over it would teach exactly one behavior, which is
// bolting a numeral onto a summary until the report goes quiet. The A-grade
// decision stays with a person; see the authenticity gate in
// docs/module-07-scaffolding-standard.md.
//
// Read a high SUMMARY count as a question, not a verdict: is there a real object
// available for this card that we are not using? On Topic 7.8 the answer is no,
// and its documentary pool is correct. On Topic 7.2 the answer was yes, and the
// alliance map had been sitting in the data file, shadowed, the whole time.

const { unitTopics, foundationsTopics, resolveUnitPool, classify } = require('./lib/evidence-pools');

const args = process.argv.slice(2);
const showSummaries = args.includes('--summaries');
const onlyUnit = args.find(a => /^\d+$/.test(a));

const W = '\x1b[1m', D = '\x1b[2m', G = '\x1b[32m', Y = '\x1b[33m', R = '\x1b[31m', X = '\x1b[0m';

const rows = [];

for (const topic of foundationsTopics()) {
  if (onlyUnit) break;
  rows.push({ key: topic.key, source: topic.source, cards: topic.cards });
}

for (const topic of unitTopics()) {
  if (onlyUnit && String(topic.unit) !== onlyUnit) continue;
  const pool = resolveUnitPool(topic);
  rows.push({ key: topic.key, source: pool.source, cards: pool.cards });
}

const total = { object: 0, record: 0, summary: 0, cards: 0 };
const flagged = [];

console.log(`\n${W}Module 07 evidence authenticity${X}  ${D}object / record / summary${X}\n`);

for (const row of rows) {
  const counts = { object: 0, record: 0, summary: 0 };
  row.cards.forEach(card => { counts[classify(card)] += 1; });
  const n = row.cards.length;
  total.object += counts.object;
  total.record += counts.record;
  total.summary += counts.summary;
  total.cards += n;

  const real = counts.object + counts.record;
  const majoritySummary = n > 0 && counts.summary * 2 > n;
  const noObject = n > 0 && counts.object === 0;
  const colour = !n ? R : majoritySummary ? R : noObject ? Y : G;
  const flag = !n ? 'renders ZERO evidence cards' : majoritySummary ? 'mostly author summary' : noObject ? 'no picture in the pool' : '';
  if (flag) flagged.push({ key: row.key, flag, counts, n, source: row.source });

  console.log(
    `  ${colour}${row.key.padEnd(5)}${X} ${String(counts.object).padStart(2)} / ${String(counts.record).padStart(2)} / ${String(counts.summary).padStart(2)}` +
    `   ${D}${String(real)}/${n} carry something to examine${X}   ${D}${row.source}${X}` +
    (flag ? `  ${colour}${flag}${X}` : '')
  );

  if (showSummaries) {
    row.cards.filter(card => classify(card) === 'summary')
      .forEach(card => console.log(`        ${D}summary card:${X} ${card.title}`));
  }
}

const realTotal = total.object + total.record;
console.log(`\n${W}Course total${X}  ${total.cards} cards: ${G}${total.object} objects${X}, ${total.record} records, ${total.summary} summaries.`);
console.log(`${realTotal} of ${total.cards} cards (${Math.round((realTotal / total.cards) * 100)}%) put something in front of the student to examine.`);

if (flagged.length) {
  console.log(`\n${W}Worth a look${X}  ${flagged.length} topic(s). A flag is a question, not a failure:`);
  console.log(`${D}  is there a real object available for this card that the lesson is not using?${X}`);
  flagged.forEach(f => console.log(`  ${f.key.padEnd(5)} ${f.flag}  ${D}(${f.counts.object} obj, ${f.counts.record} rec, ${f.counts.summary} sum of ${f.n})${X}`));
}

console.log('');
process.exit(0);
