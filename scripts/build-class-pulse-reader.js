#!/usr/bin/env node
'use strict';
/**
 * Builds the Class Pulse Reader, the page published as a private artifact in the
 * teacher's Claude for Teachers account (2026-11-16, Jeff).
 *
 *   node scripts/build-class-pulse-reader.js           write it
 *   node scripts/build-class-pulse-reader.js --check   fail on drift, write nothing
 *
 * The Reader must read an answer and check a reply exactly as Class Pulse does, so it
 * carries the engine and the handoff themselves, inlined from teacher/, never a
 * second copy of their rules. It is generated for that reason: change the engine or
 * the handoff, rebuild, and publish the result again, or the two pages disagree
 * about what a valid reading is. --check is in the offline suite.
 *
 * The output is a page fragment (no doctype, html, head or body): the artifact
 * publisher wraps it. It holds no student writing and no answers.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'teacher', 'reader', 'class-pulse-reader.artifact.html');

function build() {
  const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
  let page = read('scripts/lib/class-pulse-reader-template.html');
  for (const [mark, file] of [['/*ENGINE*/', 'teacher/class-pulse-engine.js'], ['/*HANDOFF*/', 'teacher/class-pulse-handoff.js']]) {
    const src = read(file);
    if (/<\/script/i.test(src)) throw new Error(file + ' contains a closing script tag and cannot be inlined');
    if (page.split(mark).length !== 2) throw new Error('The template needs exactly one ' + mark);
    page = page.replace(mark, () => src.trim());
  }
  return page;
}

if (require.main === module) {
  const page = build();
  if (process.argv.includes('--check')) {
    const have = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
    if (have !== page) { console.error('The Class Pulse Reader is out of date. Run: node scripts/build-class-pulse-reader.js, then publish it again.'); process.exit(1); }
    console.log('PASS the Class Pulse Reader matches the engine and the handoff');
  } else {
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, page);
    console.log('Wrote ' + path.relative(ROOT, OUT) + ' (' + page.length + ' characters). Publish it again so the live Reader matches.');
  }
}
module.exports = { build, OUT };
