#!/usr/bin/env node
'use strict';

/**
 * Content preserved across the unit readings migration.
 *
 *   node scripts/test/readings-golden.js              against the frozen fixture
 *   node scripts/test/readings-golden.js --from-disk  against the files as they are now
 *
 * --from-disk is the migration run, used while the hand-authored pages are still
 * on disk. After they are replaced it would compare the generated page against
 * itself, so the committed fixture is the baseline from then on.
 */

const fs = require('fs');
const path = require('path');
const { extractReading, diffReadings } = require('../lib/reading-extract');
const { build, allTopics } = require('../build-unit-readings');

const ROOT = path.resolve(__dirname, '..', '..');
const FIXTURE = path.join(__dirname, 'fixtures', 'readings-before.json');
const fromDisk = process.argv.includes('--from-disk');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

let baseline = null;
if (!fromDisk) {
  if (!fs.existsSync(FIXTURE)) {
    console.error('No baseline fixture. Run with --from-disk while the originals are still present.');
    process.exit(1);
  }
  baseline = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
}

let failed = 0, checked = 0;
const failures = [];
console.log(`\n${W}Unit readings, content preserved${X} ${D}(${fromDisk ? 'baseline: files on disk' : 'baseline: committed fixture'})${X}\n`);

for (const topic of allTopics()) {
  const rel = `${topic.unitDir}/${topic.sourceFile}`;
  let before;
  if (fromDisk) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) { console.log(`  ${R}✗${X} ${topic.topicKey}  missing ${rel}`); failed++; continue; }
    before = extractReading(fs.readFileSync(p, 'utf8'));
  } else {
    const rec = baseline.topics[topic.topicKey];
    if (!rec) { console.log(`  ${R}✗${X} ${topic.topicKey}  no recorded baseline`); failed++; continue; }
    before = rec.extraction;
  }

  const diffs = diffReadings(before, extractReading(build(topic)));
  checked++;
  if (diffs.length === 0) continue;
  failed++;
  failures.push({ key: topic.topicKey, rel, diffs });
}

for (const f of failures) {
  console.log(`  ${R}✗${X} ${W}${f.key}${X}  ${f.diffs.length} difference(s)  ${D}${f.rel}${X}`);
  for (const d of f.diffs.slice(0, 6)) console.log(`      ${Y}${d}${X}`);
  if (f.diffs.length > 6) console.log(`      ${D}...and ${f.diffs.length - 6} more${X}`);
}

console.log(`\n${'─'.repeat(60)}`);
if (failed) {
  console.log(`${R}${W}${failed} of ${checked} readings differ.${X}  ${G}${checked - failures.length} identical.${X}`);
  process.exit(1);
}
console.log(`${G}${W}${checked} readings carry identical content to the hand-authored originals.${X}`);
