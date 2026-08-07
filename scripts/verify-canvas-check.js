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
 * TWO MODES, AND THE DEFAULT IS THE USEFUL ONE
 *
 * The record footer carries a hash of every response, written at the moment
 * Gather assembled the document. Recomputing those hashes from what came back
 * out of Canvas settles the round trip against *whatever the student actually
 * typed*, with no need for them to have typed a particular script. That is the
 * default, and it is the mode to use on a real submission.
 *
 * The first version of this file only had the other mode: diff against a fixture
 * file of known text. That is a stricter check of the same thing, but it fails
 * loudly and uselessly the moment someone writes their own answers, which is
 * exactly what a teacher testing their own lesson will do. It is now opt-in.
 *
 * Usage:
 *   node scripts/verify-canvas-check.js <dir> [--answers <file>] [--student <name>]
 *
 *   <dir>          the unzipped Canvas submissions folder, after
 *                  scripts/parse-canvas-submissions.js has run on it
 *   --answers      also diff against a file of known typed text, for a run where
 *                  the tester used scripts/test/fixtures/canvas-check-answers.txt
 *   --student      which submission, when the folder holds more than one
 *
 * Reads local files only. See docs/CANVAS-CHECK.md for the full runbook.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const { bhHash, htmlToText } = require('./parse-canvas-submissions');

// Same record grammar the renderers emit and the parser reads.
const RE_RECORD = /#BHR\|([^#]*?)\|#/g;
function parseFields(blob) {
  const out = {};
  String(blob).split('|').forEach(pair => {
    const eq = pair.indexOf('=');
    if (eq > 0) out[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  });
  return out;
}

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
  let dir = '', answersPath = '', student = '';
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

  const expected = answersPath ? parseAnswers(fs.readFileSync(answersPath, 'utf8')) : null;
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

  // Recompute from the raw submission, so this is a check of the round trip and
  // not a restatement of what the parser already decided.
  const source = rows[0].source_file;
  const raw = fs.readFileSync(path.join(dir, source), 'utf8');
  const text = /\.txt$/i.test(source) ? raw.replace(/\r\n?/g, '\n') : htmlToText(raw);
  const recorded = {};
  let m;
  RE_RECORD.lastIndex = 0;
  while ((m = RE_RECORD.exec(text)) !== null) {
    const f = parseFields(m[1]);
    if (f.slot) recorded[f.slot] = f;
  }

  console.log(`  ${names[0]}, ${rows.length} responses, ${Object.keys(recorded).length} manifest records\n`);

  let fail = 0;
  rows.forEach(row => {
    const slot = row.slot_id;
    const got = row.response || '';
    const rec = recorded[slot];
    const problems = [];

    // The headline check. If Canvas altered a character, this hash moves.
    if (!rec) {
      problems.push('no manifest record for this slot, so fidelity cannot be checked');
    } else if (bhHash(got) !== rec.rh) {
      problems.push(`Canvas altered this response: hash ${bhHash(got)} against recorded ${rec.rh}`);
      if (norm(got).length < Number(rec.c || 0) * 0.95) {
        problems.push(`    parsed text is shorter than the ${rec.c} characters recorded, this looks like truncation`);
      }
    }

    SMELLS.forEach(([re, why]) => {
      const hit = got.match(re);
      if (hit) problems.push(`${why} (found ${JSON.stringify(hit[0])})`);
    });

    if (row.flags) problems.push(`parser flagged this row: ${row.flags}`);

    // Optional stricter pass, only when a known-text file was supplied.
    if (expected && expected[slot] !== undefined && norm(got) !== norm(expected[slot])) {
      const at = firstDifference(norm(expected[slot]), norm(got));
      problems.push(`differs from the answers file at character ${at}`);
      problems.push(`    typed:  ${context(norm(expected[slot]), at)}`);
      problems.push(`    parsed: ${context(norm(got), at)}`);
    }

    if (problems.length) {
      fail++;
      console.log(`  FAIL  ${slot.padEnd(24)} ${problems[0]}`);
      problems.slice(1).forEach(p => console.log(`        ${p}`));
    } else {
      const paras = got.split(/\n{2,}/).length;
      console.log(`  PASS  ${slot.padEnd(24)} ${row.word_count} words, ${paras} paragraph${paras === 1 ? '' : 's'}, unchanged`);
    }
  });

  const multi = rows.filter(r => (r.response || '').split(/\n{2,}/).length > 1).length;
  const conf = rows.filter(r => r.confidence).length;
  console.log(`\n  Confidence ratings present: ${conf} of ${rows.length}`);
  console.log(`  Multi-paragraph responses:  ${multi} of ${rows.length}`);
  if (!multi) {
    console.log('  No response had a blank line in it, so paragraph preservation is');
    console.log('  untested by this run. Include one next time to cover it.');
  }

  console.log(`\n  ${rows.length - fail}/${rows.length} responses survived the round trip`);
  if (fail) {
    console.log('\n  Do not roll this out to students yet. A difference here means Canvas is');
    console.log('  altering student writing between the paste and the download, and every');
    console.log('  response the Skills Lens reads would carry the same corruption.');
  } else {
    console.log('\n  Canvas returned every response byte-identical to what Gather recorded.');
    console.log('  The pipeline holds end to end.');
  }
  process.exit(fail ? 1 : 0);
}

if (require.main === module) main();
module.exports = { parseCsv, parseAnswers, norm };
