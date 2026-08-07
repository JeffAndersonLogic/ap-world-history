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
const { CAPTURE_BLOCK, BLOCK_OPEN, BLOCK_CLOSE } = require('./lib/first10-capture-block');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry-run');


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

// The existing block runs between two sentinels.
//
// This used to brace-match the IIFE, which meant parsing JavaScript with a
// regex. It got it wrong: an apostrophe inside a `//` comment read as an opening
// string delimiter, the scanner never found the closing brace, findExistingBlock
// returned null, and the installer took that to mean "no block here" and
// inserted a second copy. Four runs later every reading held four copies.
//
// Sentinels cannot have that class of bug. The fallback below still brace-counts,
// but only for blocks installed before the end sentinel existed, and it is
// comment-aware so it cannot repeat the original mistake.
function findExistingBlock(html) {
  const start = html.indexOf(BLOCK_OPEN);
  if (start === -1) return null;

  const closeAt = html.indexOf(BLOCK_CLOSE, start);
  if (closeAt !== -1) {
    let end = closeAt + BLOCK_CLOSE.length;
    const tail = html.slice(end).match(/^[ \t]*\n?/);
    if (tail) end += tail[0].length;
    return { start, end };
  }
  return findLegacyBlock(html, start);
}

// Pre-sentinel blocks. Skips comments, strings and regex literals so an
// apostrophe in prose cannot throw the count off.
function findLegacyBlock(html, start) {
  const iife = html.indexOf('(function', start);
  if (iife === -1) return null;
  let i = html.indexOf('{', iife);
  if (i === -1) return null;

  let depth = 0;
  for (; i < html.length; i++) {
    const c = html[i], next = html[i + 1];
    if (c === '/' && next === '/') { i = html.indexOf('\n', i); if (i === -1) return null; continue; }
    if (c === '/' && next === '*') { i = html.indexOf('*/', i); if (i === -1) return null; i++; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const quote = c;
      for (i++; i < html.length; i++) {
        if (html[i] === '\\') i++;
        else if (html[i] === quote) break;
      }
      continue;
    }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) break; }
  }
  if (depth !== 0) return null;

  const tail = html.slice(i + 1).match(/^\s*\)\s*\(\s*\)\s*;?\s*/);
  if (!tail) return null;
  return { start, end: i + 1 + tail[0].length };
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

  const copies = original.split(BLOCK_OPEN).length - 1;
  if (copies > 1) {
    return { file, changed: false, problem: `${copies} copies of the capture block, refusing to guess which to keep` };
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

module.exports = { findExistingBlock, findLegacyBlock, insertionPoint };
