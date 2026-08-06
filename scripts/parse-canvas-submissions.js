#!/usr/bin/env node
/**
 * parse-canvas-submissions.js
 *
 * Turns a Canvas "Download Submissions" folder into the long-format table the
 * Teacher Hub and any skills analysis actually want: one row per student per
 * module response.
 *
 * The input is whatever Canvas hands you. On a Text Entry assignment, Download
 * Submissions produces one HTML file per student, named
 *
 *     lastnamefirstname_<userid>_<submissionid>_<assignment>.html
 *     lastnamefirstname_LATE_<userid>_<submissionid>_<assignment>.html
 *
 * The student's identity is in that filename and nowhere else. The paste itself
 * deliberately carries no name, so a mispaste into the wrong assignment is a
 * misfiled response rather than a disclosure.
 *
 * WHAT MAKES THIS DIFFERENT FROM A REGEX OVER THE PASTE
 *
 * The old Google Form pipeline lost rows without saying so, and the failure
 * looked like low student completion. This script refuses to do that. Every
 * response the manifest declares is either parsed into responses.csv or written
 * to exceptions.csv with a reason. Nothing is dropped silently, and no filter
 * anywhere in this file may reduce the row count without recording why.
 *
 * The four things it catches that eyeballing 150 pastes does not:
 *
 *   INCOMPLETE    the manifest declares 9 capture slots and the student
 *                 gathered 4. This is the "empty but valid" submission: a
 *                 wiped localStorage produces a perfectly formatted paste with
 *                 nothing in it, and Canvas records it as submitted.
 *   EDITED        the response text no longer hashes to what the Gather panel
 *                 recorded, so it was changed after gathering.
 *   COUNT_MISMATCH  the manifest says N records and N-1 arrived, so the paste
 *                 was truncated.
 *   NO_MANIFEST   an older submission, gathered before the footer shipped.
 *                 Parsed on a best-effort basis and flagged, never counted as
 *                 clean.
 *
 * Usage:
 *   node scripts/parse-canvas-submissions.js <submissions-dir> [options]
 *
 *   --out <dir>        where to write (default: alongside the input)
 *   --roster <csv>     optional roster to attach class period. Needs a header
 *                      with a name or SIS/Canvas id column plus a period column.
 *   --json             also write responses.json for the Skills Lens
 *   --quiet            summary only
 *
 * This script reads local files and writes local files. It makes no network
 * calls, and it must stay that way: the folder it reads is identifiable student
 * work, and the moment this thing can reach the internet it becomes a data flow
 * somebody has to govern.
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ── Record format, must stay in lockstep with the two renderers ───────────────
//
// assets/js/behistorical-topic-renderer-v1.js and
// foundations/foundations-topic-renderer.js emit this. Change one, change all
// three, and bump SCHEMA_SUPPORTED.

const SCHEMA_SUPPORTED = [1];
const RE_HEADER = /#BHV\|([^#]*?)\|#/g;
const RE_RECORD = /#BHR\|([^#]*?)\|#/g;

// FNV-1a 32-bit. Identical to bhHash() in both renderers.
function bhHash(value) {
  const s = normalizeForHash(value);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

// Canvas rewrites line breaks on the way in and again on the way out, so the
// hash is over collapsed whitespace. The question is "is this the same
// writing", not "are the newlines byte-identical".
function normalizeForHash(value) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
}

function wordCount(value) {
  const s = normalizeForHash(value);
  return s ? s.split(' ').length : 0;
}

function parseFields(blob) {
  const out = {};
  String(blob).split('|').forEach(pair => {
    const eq = pair.indexOf('=');
    if (eq < 1) return;
    out[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  });
  return out;
}

// ── HTML to text ──────────────────────────────────────────────────────────────
//
// Deliberately not a DOM parser. The input is one known generator's output
// rewritten by one known editor, and a dependency-free script is one the
// teacher can still run in three years without an npm install.

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’',
  hellip: '…', mdash: '—', ndash: '–'
};

function decodeEntities(text) {
  return String(text)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => safeCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => safeCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, name) => {
      const key = name.toLowerCase();
      return Object.prototype.hasOwnProperty.call(ENTITIES, key) ? ENTITIES[key] : m;
    });
}

function safeCodePoint(n) {
  if (!Number.isFinite(n) || n < 0 || n > 0x10ffff) return '';
  try { return String.fromCodePoint(n); } catch (e) { return ''; }
}

function htmlToText(html) {
  return decodeEntities(
    String(html)
      .replace(/<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
      .replace(/<\s*br\s*\/?\s*>/gi, '\n')
      .replace(/<\s*\/\s*(p|div|li|h[1-6]|tr|hr)\s*>/gi, '\n')
      .replace(/<\s*(hr|p|div|li|h[1-6]|tr)[^>]*>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t ]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── Filenames ─────────────────────────────────────────────────────────────────

// Canvas's own convention. The trailing ids are what matter; the leading name is
// squashed ("andersonjeff") and only good enough to show a human.
function parseSubmissionFilename(filename) {
  const base = path.basename(filename).replace(/\.(html?|txt)$/i, '');
  const m = base.match(/^(.+?)_(?:(late|LATE)_)?(\d+)_(\d+)(?:_(.*))?$/);
  if (!m) return { displayName: base, canvasUserId: '', submissionId: '', late: false };
  return {
    displayName: m[1],
    late: Boolean(m[2]),
    canvasUserId: m[3],
    submissionId: m[4],
    assignment: m[5] || ''
  };
}

// ── Body parsing ──────────────────────────────────────────────────────────────
//
// The manifest tells us which labels to expect and in what order, so the body is
// split on those labels rather than on a guessed heading pattern. Each search
// starts after the previous match, so a student who quotes a later module's
// heading inside their own answer cannot fool the split.

function findLabelIndex(text, label, from) {
  if (!label) return -1;
  const hay = text.toLowerCase();
  const needle = label.toLowerCase();
  const direct = hay.indexOf(needle, from);
  if (direct !== -1) return direct;
  // Fall back to a whitespace-insensitive search: the paste may have been
  // rewrapped between the label's words.
  const loose = new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'), 'i');
  const tail = text.slice(from);
  const hit = tail.match(loose);
  return hit ? from + hit.index : -1;
}

function extractResponse(section) {
  // Everything after the first "My response:" marker. Without the marker the
  // whole section minus its "Question:" line is the best available guess.
  const marker = section.match(/my response\s*:/i);
  let body = marker ? section.slice(marker.index + marker[0].length) : section;
  if (!marker) body = body.replace(/^\s*question\s*:[^\n]*\n?/i, '');
  return body.replace(/^\s*\n/, '').trim();
}

function extractPrompt(section) {
  const m = section.match(/question\s*:\s*([\s\S]*?)(?=\n\s*my response\s*:|$)/i);
  return m ? m[1].trim() : '';
}

// ── One submission ────────────────────────────────────────────────────────────

function parseSubmission(text, source) {
  const headers = [];
  let m;
  RE_HEADER.lastIndex = 0;
  while ((m = RE_HEADER.exec(text)) !== null) headers.push(parseFields(m[1]));

  const records = [];
  RE_RECORD.lastIndex = 0;
  while ((m = RE_RECORD.exec(text)) !== null) records.push(parseFields(m[1]));

  if (!headers.length) return parseWithoutManifest(text, source);

  // A student who pasted twice produces two manifests. Keep the last, which is
  // the one Canvas shows at the bottom, and flag it.
  const header = headers[headers.length - 1];
  const duplicated = headers.length > 1;

  const version = Number(header.v || 0);
  const bodyEnd = text.indexOf('--- BEHISTORICAL RECORD');
  const body = bodyEnd === -1 ? text : text.slice(0, bodyEnd);

  const responses = [];
  const exceptions = [];

  if (duplicated) {
    exceptions.push({ slot: '', reason: 'DUPLICATE_PASTE',
      detail: `${headers.length} manifests in one submission, read the last` });
  }
  if (!SCHEMA_SUPPORTED.includes(version)) {
    exceptions.push({ slot: '', reason: 'SCHEMA_UNKNOWN',
      detail: `manifest v${header.v || '?'}, this parser knows v${SCHEMA_SUPPORTED.join('/')}` });
  }

  const declared = Number(header.items || 0);
  const expected = Number(header.expected || 0);
  if (records.length !== declared) {
    exceptions.push({ slot: '', reason: 'COUNT_MISMATCH',
      detail: `manifest declares ${declared} records, ${records.length} arrived, paste is truncated` });
  }

  let cursor = 0;
  records.forEach((rec, i) => {
    const label = rec.lab || '';
    const start = findLabelIndex(body, label, cursor);
    if (start === -1) {
      exceptions.push({ slot: rec.slot || `#${i}`, reason: 'MISSING_BODY',
        detail: `manifest lists "${label}" but no such section is in the paste` });
      return;
    }
    const nextLabel = records[i + 1] ? records[i + 1].lab : '';
    let end = nextLabel ? findLabelIndex(body, nextLabel, start + label.length) : -1;
    if (end === -1) end = body.length;
    cursor = start + label.length;

    const section = body.slice(start + label.length, end);
    const response = extractResponse(section);
    const flags = [];

    if (bhHash(response) !== rec.rh) {
      flags.push('EDITED');
      exceptions.push({ slot: rec.slot, reason: 'EDITED',
        detail: `response hash ${bhHash(response)} does not match recorded ${rec.rh}` });
    }
    if (!response) {
      flags.push('BLANK');
      exceptions.push({ slot: rec.slot, reason: 'BLANK',
        detail: 'record present, response text empty' });
    }

    responses.push({
      moduleOrd: rec.i || 'xx',
      slotId: rec.slot || '',
      label: label,
      prompt: extractPrompt(section),
      promptHash: rec.ph || '',
      response: response,
      wordCount: wordCount(response),
      charCount: normalizeForHash(response).length,
      declaredWords: Number(rec.w || 0),
      flags: flags
    });
  });

  // The sum covers slot:hash pairs, so a deleted record line breaks it even
  // when every surviving response still hashes clean.
  const recomputed = bhHash(records.map(r => (r.slot || '') + ':' + (r.rh || '')).join('|'));
  if (header.sum && recomputed !== header.sum) {
    exceptions.push({ slot: '', reason: 'MANIFEST_ALTERED',
      detail: `checksum ${recomputed} does not match recorded ${header.sum}` });
  }

  // The headline check. Expected comes from the lesson, not from the paste, so
  // a student who gathered nothing still has a denominator.
  if (expected && responses.length < expected) {
    const got = new Set(responses.map(r => r.slotId));
    exceptions.push({ slot: '', reason: 'INCOMPLETE',
      detail: `${responses.length} of ${expected} capture slots present`
        + (got.size ? '' : ', paste contains no responses at all') });
  }

  return {
    topicId: header.topic || '',
    copiedAt: header.copied || '',
    declaredItems: declared,
    expectedItems: expected,
    hasManifest: true,
    responses: responses,
    exceptions: exceptions,
    source: source
  };
}

// Submissions gathered before the footer shipped. Parsed on the old grammar so
// existing work is not stranded, and always flagged: without a manifest there is
// no denominator, so "complete" is not a claim this can make.
function parseWithoutManifest(text, source) {
  const head = text.match(/AP WORLD HISTORY,?\s*(?:TOPIC\s+)?([0-9]+\.[0-9]+|F\d+)/i);
  const responses = [];
  const re = /^(module\s+\d+[^\n]*)$/gim;
  const hits = [];
  let m;
  while ((m = re.exec(text)) !== null) hits.push({ label: m[1].trim(), index: m.index, length: m[0].length });

  hits.forEach((hit, i) => {
    const end = hits[i + 1] ? hits[i + 1].index : text.length;
    const section = text.slice(hit.index + hit.length, end);
    const response = extractResponse(section);
    if (!response) return;
    const ord = hit.label.match(/module\s+(\d+)/i);
    responses.push({
      moduleOrd: ord ? ord[1] : 'xx',
      slotId: '',
      label: hit.label,
      prompt: extractPrompt(section),
      promptHash: '',
      response: response,
      wordCount: wordCount(response),
      charCount: normalizeForHash(response).length,
      declaredWords: 0,
      flags: ['NO_MANIFEST']
    });
  });

  return {
    topicId: head ? head[1] : '',
    copiedAt: '',
    declaredItems: 0,
    expectedItems: 0,
    hasManifest: false,
    responses: responses,
    exceptions: [{ slot: '', reason: 'NO_MANIFEST',
      detail: 'no record footer, parsed on the legacy grammar, completeness unknown' }],
    source: source
  };
}

// ── Roster ────────────────────────────────────────────────────────────────────

function csvSplitLine(line) {
  const out = [];
  let cur = '', quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(s => s.trim());
}

// Keyed on whatever the roster offers. A Canvas or SIS id joins exactly; a name
// only joins after squashing to the same shape Canvas puts in the filename.
function loadRoster(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return {};
  const head = csvSplitLine(lines[0]).map(h => h.toLowerCase());
  const idCol = head.findIndex(h => /canvas.*id|user.*id|sis.*id|^id$/.test(h));
  const nameCol = head.findIndex(h => /name|student/.test(h));
  const periodCol = head.findIndex(h => /period|section|class/.test(h));
  if (periodCol === -1) {
    console.warn(`  roster ${path.basename(file)} has no period/section column, skipping`);
    return {};
  }
  const map = {};
  lines.slice(1).forEach(line => {
    const cells = csvSplitLine(line);
    const period = cells[periodCol] || '';
    if (!period) return;
    if (idCol !== -1 && cells[idCol]) map['id:' + cells[idCol]] = period;
    if (nameCol !== -1 && cells[nameCol]) map['name:' + squashName(cells[nameCol])] = period;
  });
  return map;
}

// "Anderson, Jeff" and "Jeff Anderson" both squash to "andersonjeff", which is
// the shape Canvas writes into the filename.
function squashName(name) {
  const parts = String(name).toLowerCase().replace(/[^a-z, ]/g, '').split(',');
  const ordered = parts.length > 1 ? [parts[0], parts.slice(1).join(' ')] : [parts[0]];
  return ordered.join('').replace(/\s+/g, '');
}

// ── CSV out ───────────────────────────────────────────────────────────────────

function csvCell(value) {
  const s = String(value == null ? '' : value);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

// The submissions folder is normally in Downloads, not in the repo, so a
// relative path is a wall of "../". Print whichever form is shorter.
function shortPath(file) {
  const rel = path.relative(process.cwd(), file);
  return rel.startsWith('..') ? file : rel;
}

function writeCsv(file, headers, rows) {
  const body = [headers.join(',')]
    .concat(rows.map(r => headers.map(h => csvCell(r[h])).join(',')))
    .join('\n');
  fs.writeFileSync(file, body + '\n', 'utf8');
}

// ── Main ──────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const opts = { dir: '', out: '', roster: '', json: false, quiet: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') opts.out = argv[++i];
    else if (a === '--roster') opts.roster = argv[++i];
    else if (a === '--json') opts.json = true;
    else if (a === '--quiet') opts.quiet = true;
    else if (a.startsWith('--')) throw new Error(`unknown option ${a}`);
    else if (!opts.dir) opts.dir = a;
  }
  return opts;
}

function main() {
  let opts;
  try { opts = parseArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }

  if (!opts.dir) {
    console.error('Usage: node scripts/parse-canvas-submissions.js <submissions-dir> [--out dir] [--roster file.csv] [--json] [--quiet]');
    process.exit(2);
  }
  if (!fs.existsSync(opts.dir) || !fs.statSync(opts.dir).isDirectory()) {
    console.error(`Not a directory: ${opts.dir}`);
    console.error('Unzip the Canvas "Download Submissions" archive first and point at the folder.');
    process.exit(2);
  }

  const outDir = opts.out || opts.dir;
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(opts.dir)
    .filter(f => /\.(html?|txt)$/i.test(f))
    .sort();

  if (!files.length) {
    console.error(`No .html or .txt files in ${opts.dir}`);
    process.exit(1);
  }

  const roster = opts.roster ? loadRoster(opts.roster) : {};
  const rows = [];
  const exceptionRows = [];
  const seenStudents = new Set();
  let cleanCount = 0;

  files.forEach(file => {
    const full = path.join(opts.dir, file);
    const raw = fs.readFileSync(full, 'utf8');
    const text = /\.txt$/i.test(file) ? raw.replace(/\r\n?/g, '\n') : htmlToText(raw);
    const who = parseSubmissionFilename(file);
    const parsed = parseSubmission(text, file);

    const studentKey = who.canvasUserId || who.displayName;
    seenStudents.add(studentKey);
    const period = roster['id:' + who.canvasUserId] || roster['name:' + squashName(who.displayName)] || '';

    parsed.responses.forEach(r => {
      rows.push({
        student_display: who.displayName,
        canvas_user_id: who.canvasUserId,
        canvas_submission_id: who.submissionId,
        class_period: period,
        late: who.late ? 'yes' : '',
        topic_id: parsed.topicId,
        module_ord: r.moduleOrd,
        slot_id: r.slotId,
        module_label: r.label,
        prompt: r.prompt,
        prompt_hash: r.promptHash,
        response: r.response,
        word_count: r.wordCount,
        char_count: r.charCount,
        copied_at: parsed.copiedAt,
        flags: r.flags.join(';'),
        source_file: file
      });
    });

    parsed.exceptions.forEach(x => {
      exceptionRows.push({
        student_display: who.displayName,
        canvas_user_id: who.canvasUserId,
        class_period: period,
        topic_id: parsed.topicId,
        slot_id: x.slot,
        reason: x.reason,
        detail: x.detail,
        source_file: file
      });
    });

    if (!parsed.exceptions.length) cleanCount++;

    if (!opts.quiet) {
      const status = parsed.exceptions.length
        ? parsed.exceptions.map(x => x.reason).join(',')
        : 'ok';
      const denom = parsed.expectedItems || '?';
      console.log(`  ${who.displayName.padEnd(24)} ${String(parsed.responses.length).padStart(2)}/${denom}  ${status}`);
    }
  });

  const responsesFile = path.join(outDir, 'responses.csv');
  const exceptionsFile = path.join(outDir, 'exceptions.csv');

  writeCsv(responsesFile, [
    'student_display', 'canvas_user_id', 'canvas_submission_id', 'class_period', 'late',
    'topic_id', 'module_ord', 'slot_id', 'module_label', 'prompt', 'prompt_hash',
    'response', 'word_count', 'char_count', 'copied_at', 'flags', 'source_file'
  ], rows);

  writeCsv(exceptionsFile, [
    'student_display', 'canvas_user_id', 'class_period', 'topic_id',
    'slot_id', 'reason', 'detail', 'source_file'
  ], exceptionRows);

  if (opts.json) {
    fs.writeFileSync(path.join(outDir, 'responses.json'),
      JSON.stringify({ responses: rows, exceptions: exceptionRows }, null, 2), 'utf8');
  }

  // Never print a bare n. The whole point of the manifest is that the
  // denominator is knowable, so the summary always shows both numbers.
  const byReason = {};
  exceptionRows.forEach(x => { byReason[x.reason] = (byReason[x.reason] || 0) + 1; });

  console.log('');
  console.log(`  Submissions read     ${files.length}`);
  console.log(`  Students             ${seenStudents.size}`);
  console.log(`  Responses parsed     ${rows.length}`);
  console.log(`  Clean submissions    ${cleanCount} of ${files.length}`);
  if (exceptionRows.length) {
    console.log(`  Exceptions           ${exceptionRows.length}`);
    Object.keys(byReason).sort().forEach(k => {
      console.log(`    ${k.padEnd(18)} ${byReason[k]}`);
    });
  }
  console.log('');
  console.log(`  Wrote ${shortPath(responsesFile)}`);
  console.log(`  Wrote ${shortPath(exceptionsFile)}`);
  if (exceptionRows.length) {
    console.log('');
    console.log('  Read exceptions.csv before running any analysis. An INCOMPLETE or');
    console.log('  BLANK row is a student whose work did not survive the gather, not a');
    console.log('  student who wrote nothing.');
  }
}

if (require.main === module) main();

module.exports = {
  bhHash, normalizeForHash, htmlToText, parseSubmission,
  parseSubmissionFilename, squashName
};
