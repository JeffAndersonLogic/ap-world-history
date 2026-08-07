#!/usr/bin/env node
/**
 * sync-first10-capture.js
 *
 * Installs the canonical First & 10 answer-capture block from
 * scripts/lib/first10-capture-block.js into all 77 reading pages, replacing any
 * older copy and inserting one where none exists.
 *
 * WHY THIS EXISTS
 *
 * The block is the only path by which the three reading answers reach Canvas:
 * the questions live inside an iframe, so the lesson page cannot read them, and
 * this writes them to a key both renderers pick up in Gather All My Work.
 *
 * It has already gone missing twice, in two different ways, and both failures
 * were silent. Six Unit 1 readings had it nested inside a <script src="...">,
 * where a script element ignores its inline body, so it never ran. Thirteen
 * generated readings never had it at all because the generator template omitted
 * it. That was 19 of 77 topics quietly not capturing a third of each lesson.
 *
 * One source, one installer, and a validator check is the answer to that. Do not
 * hand-edit the block inside a reading; edit the lib and re-run this.
 *
 * Idempotent. Running it twice changes nothing the second time.
 *
 * Usage:
 *   node scripts/sync-first10-capture.js [--dry-run]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { CAPTURE_BLOCK } = require('./lib/first10-capture-block');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry-run');

const OPEN = '/* BeHistorical First & 10 answer capture';

function readings() {
  const out = [];
  fs.readdirSync(ROOT).forEach(dir => {
    if (!/^(unit-\d+|foundations)$/.test(dir)) return;
    fs.readdirSync(path.join(ROOT, dir)).forEach(f => {
      if (/^first-and-10-.*\.html$/.test(f) && !/-capture\.html$/.test(f)) out.push(path.join(dir, f));
    });
  });
  return out.sort();
}

// The existing block runs from the start of its banner comment to the end of its
// IIFE. Brace-matching the IIFE rather than regexing to `})();` means a nested
// arrow body or an object literal inside it cannot end the match early.
function findExistingBlock(html) {
  const start = html.indexOf(OPEN);
  if (start === -1) return null;

  const iife = html.indexOf('(function', start);
  if (iife === -1) return null;

  let i = html.indexOf('{', iife);
  if (i === -1) return null;
  let depth = 0;
  let quote = '';
  for (; i < html.length; i++) {
    const c = html[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  if (depth !== 0) return null;

  // Swallow the closing `)();` and any trailing semicolon or blank line.
  const tail = html.slice(i + 1).match(/^\s*\)\s*\(\s*\)\s*;?\s*/);
  if (!tail) return null;
  return { start: start, end: i + 1 + tail[0].length };
}

// Without an existing block, put it at the end of the last inline <script>, which
// is where TOPIC_KEY is declared and therefore the only place the block can see it.
function insertionPoint(html) {
  const close = html.lastIndexOf('</script>');
  if (close === -1) return null;
  const open = html.lastIndexOf('<script', close);
  if (open === -1) return null;
  // A <script src="..."> has no usable body; the block must go in an inline one.
  const tag = html.slice(open, html.indexOf('>', open) + 1);
  if (/\bsrc=/.test(tag)) return null;
  return close;
}

function sync(file) {
  const full = path.join(ROOT, file);
  const original = fs.readFileSync(full, 'utf8');

  if (!/TOPIC_KEY/.test(original)) {
    return { file, changed: false, problem: 'no TOPIC_KEY, the block would have nothing to key on' };
  }

  const found = findExistingBlock(original);
  let html;
  let action;

  if (found) {
    html = original.slice(0, found.start) + CAPTURE_BLOCK + '\n' + original.slice(found.end);
    action = 'replaced';
  } else {
    const at = insertionPoint(original);
    if (at === null) return { file, changed: false, problem: 'no inline <script> to hold the block' };
    html = original.slice(0, at) + '\n' + CAPTURE_BLOCK + '\n' + original.slice(at);
    action = 'inserted';
  }

  return { file, changed: html !== original, html, action };
}

function main() {
  const files = readings();
  const results = files.map(sync);
  const problems = results.filter(r => r.problem);
  const changed = results.filter(r => r.changed);
  const inserted = changed.filter(r => r.action === 'inserted');

  problems.forEach(r => console.log(`  ! ${r.file}: ${r.problem}`));
  inserted.forEach(r => console.log(`  + ${r.file}: had no capture block at all`));

  if (!DRY) changed.forEach(r => fs.writeFileSync(path.join(ROOT, r.file), r.html, 'utf8'));

  console.log('');
  console.log(`  Readings scanned     ${files.length}`);
  console.log(`  ${DRY ? 'Would change' : 'Changed'}${DRY ? '         ' : '              '}${changed.length}`);
  console.log(`  Inserted from new    ${inserted.length}`);
  console.log(`  Problems             ${problems.length}`);
  if (DRY) console.log('\n  Dry run, nothing written.');
  if (problems.length) process.exitCode = 1;
}

if (require.main === module) main();

module.exports = { findExistingBlock, insertionPoint };
