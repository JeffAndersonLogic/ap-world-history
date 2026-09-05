#!/usr/bin/env node
'use strict';
// The contract for a Module 07 unit that has been converted to a single authored
// evidence pool. In the offline suite.
//
// CONVERTED lists the units that have made the move. It is a declared list, not
// a glob, for the same reason VOLUMES is declared in build-ebook.js: which units
// have been converted is an editorial fact, and a glob would quietly report green
// over a unit nobody had actually done.
//
// What it proves, and why each half is here:
//
//   one pool      the topic's renderer config declares lesson.images, and its
//                 shell loads neither the registry nor the evidence runtime. Two
//                 pools with a runtime silently replacing one is the failure this
//                 conversion exists to end: the real images sat in the data file,
//                 shadowed, and nothing on the page or in any check could say
//                 which pool a student read.
//   a real object  every card is either a picture or declares sourceText, so a
//                 card can never be an author's summary with nothing to observe.
//   the plate      a shell carrying text evidence loads the shared text-card
//                 module, or those cards render as blank local artwork.
//
// It deliberately does NOT score teaching quality. The authenticity ratio is a
// judgment call and lives in scripts/report-evidence-authenticity.js, which
// exits 0 always.

const fs = require('fs');
const path = require('path');
const { ROOT, unitTopics, resolveUnitPool, isPicture } = require('./lib/evidence-pools');

const CONVERTED = [7];
const TEXT_CARD_MODULE = 'assets/js/behistorical-evidence-text-card.js';

let failures = 0;
const fail = message => { failures += 1; console.error(`FAIL: ${message}`); };

let checked = 0;
let objects = 0;
let records = 0;

for (const unit of CONVERTED) {
  const registry = path.join(ROOT, 'assets', 'data', `module-07-evidence-unit-${unit}.js`);
  if (fs.existsSync(registry)) {
    fail(`Unit ${unit}: the evidence registry still exists at ${path.relative(ROOT, registry)}; a converted unit authors its pools in its renderer configs`);
  }

  const topics = unitTopics().filter(topic => topic.unit === unit);
  if (!topics.length) { fail(`Unit ${unit}: no topics found`); continue; }

  for (const topic of topics) {
    checked += 1;
    const pool = resolveUnitPool(topic);
    const shell = pool.shellPath ? fs.readFileSync(pool.shellPath, 'utf8') : '';

    if (!pool.shellPath) { fail(`${topic.key}: no lesson shell found`); continue; }
    if (pool.source !== 'authored:config') {
      fail(`${topic.key}: evidence pool resolves from "${pool.source}", expected the topic's renderer config`);
    }
    if (shell.includes('module-07-evidence-runtime.js') || shell.includes(`module-07-evidence-unit-${unit}.js`)) {
      fail(`${topic.key}: shell still loads the registry or the evidence runtime, so its authored pool would be overwritten at load`);
    }

    const cards = pool.cards || [];
    if (cards.length < 4 || cards.length > 6) {
      fail(`${topic.key}: ${cards.length} evidence cards, expected 4 to 6`);
    }

    let needsPlate = false;
    cards.forEach((card, i) => {
      const label = `${topic.key} card ${i + 1}`;
      if (!card.title) fail(`${label}: no title`);
      if (!card.caption) fail(`${label}: no caption identifying the object`);
      if (!card.prompt || String(card.prompt).length < 35) fail(`${label}: prompt is missing or too thin`);

      const hasImage = isPicture(card.url);
      const text = Array.isArray(card.sourceText) ? card.sourceText : [];
      if (hasImage) {
        objects += 1;
        if (!card.sourceUrl) fail(`${label}: an image card needs a sourceUrl so the student can open the source`);
      } else if (text.length >= 2) {
        records += 1;
        needsPlate = true;
        if (!card.label) fail(`${label}: text evidence needs a label naming what kind of record it is`);
      } else {
        fail(`${label}: neither a picture nor declared text evidence. An author's summary with nothing to observe cannot be an evidence card`);
      }
    });

    if (needsPlate && !shell.includes(TEXT_CARD_MODULE)) {
      fail(`${topic.key}: carries text evidence but its shell does not load ${TEXT_CARD_MODULE}`);
    }
  }
}

if (failures) process.exit(1);
console.log(`Module 07 authored pools: ${checked} topic(s) across unit(s) ${CONVERTED.join(', ')}, one pool each, ${objects} pictures and ${records} documentary records, no unsourced summaries.`);
