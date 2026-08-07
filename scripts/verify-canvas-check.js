#!/usr/bin/env node
/**
 * verify-canvas-check.js
 *
 * The one thing that cannot be verified from inside this repository: what Canvas
 * actually does to a pasted document.
 *
 * Everything upstream of Canvas is tested in a real browser. Both renderers, the
 * record manifest, the confidence scale, the parser, the Skills Lens. But Canvas
 * has its own rich content editor, it rewrites markup on the way in and again on
 * the way out, and no amount of local simulation settles what it does to a curly
 * apostrophe or a paragraph break. So one submission has to make the round trip
 * for real, and something has to compare the far end against the near end
 * character by character. Eyeballing 2,000 words does not count: truncation and
 * entity leakage both look fine at a glance, and both would corrupt every
 * response the Skills Lens reads from then on.
 *
 * Usage:
 *   node scripts/verify-canvas-check.js <parsed-dir> [--answers <file>] [--student <name>]
 *
 *   <parsed-dir>   the folder scripts/parse-canvas-submissions.js wrote
 *                  responses.csv into
 *   --answers      what was typed, default scripts/test/fixtures/canvas-check-answers.txt
 *   --student      which submission to check, when the folder holds more than one.
 *                  Matches on the leading name in the Canvas filename.
 *
 * Reads local files only. See docs/CANVAS-CHECK.md for the full runbook.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── CSV, RFC4180 ──────────────────────────────────────────────────────────────
// Responses contain commas, quotes and newlines, so a split(',') reader would
// silently mangle exactly the rows this check exists to inspect.
function parseCsv(text) {
  const rows = [];
  let row = [], cur = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') quoted = false;
      else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
    else if (c !== '\r') cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  if (!rows.length) return [];
  const head = rows[0];
  return rows.slice(1).filter(r => r.length === head.length)
    .map(r => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

function parseAnswers(text) {
  const out = {};
  let slot = null, buf = [];
  text.split(/\r?\n/).forEach(line => {
    const m = line.match(/^==([a-z0-9-]+)==\s*$/);
    if (m) {
      if (slot) out[slot] = buf.join('\n').trim();
      slot = m[1]; buf = [];
      return;
    }
    if (slot === null && line.startsWith('#')) return;
    if (slot !== null) buf.push(line);
  });
  if (slot) out[slot] = buf.join('\n').trim();
  return out;
}

// Canvas rewrites line breaks, and so does the clipboard. Paragraph structure is
// compared separately; this is the "is it the same writing" comparison.
function norm(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }

// Corruption that looks fine at a glance. Each of these has a specific cause
// worth naming in the report, because the fix differs.
const SMELLS = [
  [/&(amp|lt|gt|quot|apos|nbsp|#\d+|#x[0-9a-f]+);/i, 'an HTML entity survived as text, so a decode step was skipped'],
  [/Ã.|â€|�/, 'mojibake, the text was decoded as the wrong character set'],
  [/\bundefined\b|\bnull\b|\[object Object\]/, 'a JavaScript value leaked into the response text'],
  [/<\/?[a-z][^>]*>/i, 'raw HTML survived into the parsed text'],
];

function firstDifference(a, b) {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) if (a[i] !== b[i]) return i;
  return a.length === b.length ? -1 : n;
}

function context(s, at, span = 34) {
  const from = Math.max(0, at - span), to = Math.min(s.length, at + span);
  return (from ? '...' : '') + s.slice(from, to).replace(/\n/g, '\\n') + (to < s.length ? '...' : '');
}

function main() {
  const argv = process.argv.slice(2);
  let dir = '', answersPath = path.join(ROOT, 'scripts/test/fixtures/canvas-check-answers.txt'), student = '';
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--answers') answersPath = argv[++i];
    else if (argv[i] === '--student') student = String(argv[++i]).toLowerCase();
    else if (!dir) dir = argv[i];
  }
  if (!dir) {
    console.error('Usage: node scripts/verify-canvas-check.js <parsed-dir> [--answers file] [--student name]');
    console.error('See docs/CANVAS-CHECK.md for the runbook.');
    process.exit(2);
  }

  const csvPath = path.join(dir, 'responses.csv');
  if (!fs.existsSync(csvPath)) {
    console.error(`No responses.csv in ${dir}. Run scripts/parse-canvas-submissions.js on the unzipped submissions folder first.`);
    process.exit(2);
  }

  const expected = parseAnswers(fs.readFileSync(answersPath, 'utf8'));
  let rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  if (student) rows = rows.filter(r => String(r.student_display || '').toLowerCase().includes(student));

  const names = [...new Set(rows.map(r => r.student_display))];
  if (names.length > 1) {
    console.error(`This folder holds ${names.length} students: ${names.join(', ')}`);
    console.error('Pass --student <name> to pick one.');
    process.exit(2);
  }
  if (!rows.length) {
    console.error('No rows matched. Check the folder and the --student filter.');
    process.exit(2);
  }

  console.log(`  Checking ${names[0]}, ${rows.length} parsed responses against ${path.basename(answersPath)}\n`);

  const bySlot = Object.fromEntries(rows.map(r => [r.slot_id, r]));
  let fail = 0, checked = 0;

  Object.keys(expected).forEach(slot => {
    const want = expected[slot];
    const row = bySlot[slot];
    checked++;

    if (!row) {
      fail++;
      console.log(`  FAIL  ${slot.padEnd(24)} no parsed row for this slot`);
      return;
    }

    const got = row.response || '';
    const problems = [];

    if (norm(got) !== norm(want)) {
      const at = firstDifference(norm(want), norm(got));
      problems.push(`text differs at character ${at} of ${norm(want).length}`);
      problems.push(`    typed:  ${context(norm(want), at)}`);
      problems.push(`    parsed: ${context(norm(got), at)}`);
      if (norm(got).length < norm(want).length * 0.95) {
        problems.push(`    parsed text is ${norm(want).length - norm(got).length} characters shorter, this looks like truncation`);
      }
    }

    // Paragraph structure is a separate question from wording. Canvas rewrites
    // blank lines, and losing them turns a two-part answer into a wall.
    const wantParas = want.split(/\n{2,}/).length;
    const gotParas = got.split(/\n{2,}/).length;
    if (wantParas > 1 && gotParas !== wantParas) {
      problems.push(`paragraph breaks: typed ${wantParas} paragraphs, parsed ${gotParas}`);
    }

    SMELLS.forEach(([re, why]) => {
      const hit = got.match(re);
      if (hit) problems.push(`${why} (found ${JSON.stringify(hit[0])})`);
    });

    if (row.flags) problems.push(`parser flagged this row: ${row.flags}`);

    if (problems.length) {
      fail++;
      console.log(`  FAIL  ${slot.padEnd(24)} ${problems[0]}`);
      problems.slice(1).forEach(p => console.log(`        ${p}`));
    } else {
      console.log(`  PASS  ${slot.padEnd(24)} ${norm(got).length} chars, byte-for-byte after whitespace normalisation`);
    }
  });

  const extra = Object.keys(bySlot).filter(s => s && !(s in expected));
  if (extra.length) console.log(`\n  Note: ${extra.length} parsed slot(s) not in the answers file: ${extra.join(', ')}`);

  const conf = rows.filter(r => r.confidence);
  console.log(`\n  Confidence ratings present: ${conf.length} of ${rows.length}`);

  console.log(`\n  ${checked - fail}/${checked} slots survived the round trip`);
  if (fail) {
    console.log('\n  Do not roll this out to students yet. A difference here means Canvas is');
    console.log('  altering student writing between the paste and the download, and every');
    console.log('  response the Skills Lens reads would carry the same corruption.');
  } else {
    console.log('\n  Canvas returned every response unchanged. The pipeline holds end to end.');
  }
  process.exit(fail ? 1 : 0);
}

if (require.main === module) main();
module.exports = { parseCsv, parseAnswers, norm };
