#!/usr/bin/env node
/**
 * remove-google-form-capture.js
 *
 * Retires the Google Form path. Student work now goes to Canvas through the
 * Gather All My Work panel, and a second collection channel that nobody reads
 * is worse than no second channel: it splits the record, and the form's failures
 * are silent by design.
 *
 * MagicSchool stays. It is not a capture channel, it is where students take
 * their thinking to be questioned, and it is the only reason the AI Coach prompt
 * builders exist.
 *
 * WHAT IT TOUCHES
 *
 * First & 10 readings (77):
 *   - deletes the "Build Your Google Form Response" builder section
 *   - deletes buildGooglePrompt() and submitToGoogleForm()
 *   - drops the behistorical-form-config.js script tag
 *
 * Lesson shells (77):
 *   - drops the behistorical-form-config.js script tag
 *   - leaves the AI Coach builder section entirely alone
 *
 * Capture wrappers (77):
 *   - regenerated to one canonical shape, iframe plus MagicSchool interception
 *
 * Wrappers are rewritten rather than patched because they had drifted into four
 * different shapes. 41 of the 77 readings render their MagicSchool button with
 * no onclick at all and depend on the wrapper catching the click by label, so
 * the interception has to survive. Seven Unit 6 wrappers never wired MagicSchool
 * in the first place, which means those buttons have been opening '#'.
 * Normalizing fixes them.
 *
 * Idempotent. Running it twice changes nothing the second time.
 *
 * Usage:
 *   node scripts/remove-google-form-capture.js [--dry-run]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { captureWrapper } = require('./lib/first10-capture-wrapper');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry-run');

function readingFiles() {
  const out = [];
  fs.readdirSync(ROOT).forEach(dir => {
    if (!/^(unit-\d+|foundations)$/.test(dir)) return;
    fs.readdirSync(path.join(ROOT, dir)).forEach(f => {
      if (/^first-and-10-.*\.html$/.test(f)) out.push(path.join(dir, f));
    });
  });
  return out.sort();
}

// Walks forward from an opening tag to its matching close, so a nested
// .tool-row cannot end the block early. Returns the index just past the close.
// Handles div and section: the builder sections are written both ways, div in
// the hand-built readings and section in the ones build-unit6.js emits.
function matchBlock(html, openIndex, tag) {
  const re = new RegExp('<\\s*(\\/?)' + tag + '\\b[^>]*>', 'gi');
  re.lastIndex = openIndex;
  let depth = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    depth += m[1] ? -1 : 1;
    if (depth === 0) return re.lastIndex;
  }
  return -1;
}

// Finds the .builder-section whose *body* is the Google builder and drops it.
//
// Do not search for the heading text and then scan backward for a <div>: the
// phrase's first occurrence is inside the `<!-- SECTION 2: ... -->` comment, so
// the backward scan lands on whatever div preceded the comment and matchDiv
// then closes on the wrong element. Enumerate the builder sections instead and
// test each one's contents.
function stripGoogleBuilderSection(html) {
  const re = /<(div|section)[^>]*class=["'][^"']*\bbuilder-section\b[^"']*["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const open = m.index;
    const close = matchBlock(html, open, m[1].toLowerCase());
    if (close === -1) return { html: html, changed: false, problem: 'unbalanced tags in a builder-section' };

    const inner = html.slice(open, close);
    const isGoogle = /Build Your Google Form Response/i.test(inner)
      || /buildGooglePrompt|submitToGoogleForm|google-output/.test(inner);
    // The AI Coach section must survive even though it sits in the same wrapper.
    if (!isGoogle || /buildAiPrompt|ai-output/.test(inner)) continue;

    // Swallow an immediately preceding comment labelling the section.
    let from = open;
    const comment = html.slice(Math.max(0, open - 200), open).match(/<!--[^>]*-->\s*$/);
    if (comment) from = open - comment[0].length;

    return { html: html.slice(0, from) + html.slice(close), changed: true };
  }
  return { html: html, changed: false };
}

// Brace-matches a function body so a nested block cannot end it early.
function stripFunction(js, name) {
  const decl = new RegExp('function\\s+' + name + '\\s*\\([^)]*\\)\\s*\\{');
  const m = js.match(decl);
  if (!m) return { js: js, changed: false };

  let i = m.index + m[0].length;
  let depth = 1;
  let quote = '';
  while (i < js.length && depth > 0) {
    const c = js[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = '';
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  if (depth !== 0) return { js: js, changed: false, problem: `unbalanced braces in ${name}()` };

  let end = i;
  const trailing = js.slice(end).match(/^\s*\n/);
  if (trailing) end += trailing[0].length;
  return { js: js.slice(0, m.index) + js.slice(end), changed: true };
}

function cleanReading(file) {
  const full = path.join(ROOT, file);
  const original = fs.readFileSync(full, 'utf8');
  let html = original;
  const problems = [];

  const section = stripGoogleBuilderSection(html);
  if (section.problem) problems.push(section.problem);
  html = section.html;

  ['buildGooglePrompt', 'submitToGoogleForm'].forEach(fn => {
    const r = stripFunction(html, fn);
    if (r.problem) problems.push(r.problem);
    html = r.js;
  });

  // The form config is the only thing that file was loaded for.
  //
  // Six Unit 1 readings (1.2 to 1.7) wrap the First & 10 answer-capture block
  // *inside* the config's own <script src="..."> tag. A script element with a
  // src ignores its inline body, so that capture has never run on those topics
  // and their three reading answers have never been saved. Dropping just the
  // src attribute retires the form and revives the capture in one edit. Removing
  // the whole element would delete the capture along with it.
  html = html.replace(
    /([ \t]*<script)([^>]*\bsrc=["'][^"']*behistorical-form-config\.js[^"']*["'])([^>]*>)([\s\S]*?)(<\/script>)/gi,
    (whole, open, src, rest, body, close) =>
      body.trim() ? open + rest + body + close : ''
  );
  html = html.replace(/[ \t]*<script[^>]*behistorical-form-config\.js[^>]*>\s*<\/script>\s*\n?/gi, '');

  // Leftovers that would now throw or point at nothing.
  html = html.replace(/[ \t]*<textarea[^>]*id=["']google-output["'][^>]*>\s*<\/textarea>\s*\n?/gi, '');

  // 14 readings resolve TOPIC_LABEL off BH_FORM with a literal fallback. The
  // global is gone, so the fallback is now the only branch that can ever run.
  // Collapse it: buildAiPrompt still uses TOPIC_LABEL, and a live reference to a
  // deleted global is an invitation to wire the form back up.
  html = html.replace(
    /var TOPIC_LABEL\s*=\s*\(\s*window\.BH_FORM\s*&&\s*BH_FORM\.topics\[\s*TOPIC_KEY\s*\]\s*\)\s*\|\|\s*('[^']*'|"[^"]*")\s*;/g,
    'var TOPIC_LABEL = $1;'
  );

  return { file, original, html, problems, changed: html !== original };
}

function cleanWrapper(file) {
  const full = path.join(ROOT, file);
  const original = fs.readFileSync(full, 'utf8');
  const problems = [];

  const src = original.match(/<iframe[^>]*\bsrc=["']([^"']+)["']/i);
  const title = original.match(/<title>([^<]*)<\/title>/i);
  if (!src) problems.push('no iframe src found, left untouched');

  const html = src ? captureWrapper(src[1], (title ? title[1] : 'First &amp; 10').trim()) : original;
  return { file, original, html, problems, changed: html !== original };
}

// Every lesson shell loads the form config. Nothing reads it any more.
function shellFiles() {
  const out = [];
  fs.readdirSync(ROOT).forEach(dir => {
    if (!/^(unit-\d+|foundations)$/.test(dir)) return;
    fs.readdirSync(path.join(ROOT, dir)).forEach(f => {
      if (/^(lesson-|foundations-)\d.*\.html$/.test(f)) out.push(path.join(dir, f));
    });
  });
  return out.sort();
}

function cleanShell(file) {
  const full = path.join(ROOT, file);
  const original = fs.readFileSync(full, 'utf8');
  const html = original.replace(
    /[ \t]*<script[^>]*behistorical-form-config\.js[^>]*>\s*<\/script>\s*\n?/gi, ''
  );
  return { file, original, html, problems: [], changed: html !== original };
}

function main() {
  const all = readingFiles();
  const readings = all.filter(f => !/-capture\.html$/.test(f));
  const wrappers = all.filter(f => /-capture\.html$/.test(f));
  const shells = shellFiles();

  const results = readings.map(cleanReading)
    .concat(wrappers.map(cleanWrapper))
    .concat(shells.map(cleanShell));
  const problems = results.filter(r => r.problems.length);
  const changed = results.filter(r => r.changed);

  problems.forEach(r => r.problems.forEach(p => console.log(`  ! ${r.file}: ${p}`)));

  if (!DRY) results.filter(r => r.changed).forEach(r => fs.writeFileSync(path.join(ROOT, r.file), r.html, 'utf8'));

  console.log('');
  console.log(`  Readings scanned     ${readings.length}`);
  console.log(`  Wrappers scanned     ${wrappers.length}`);
  console.log(`  Lesson shells        ${shells.length}`);
  console.log(`  Files ${DRY ? 'that would change' : 'changed'}   ${changed.length}`);
  console.log(`  Problems             ${problems.length}`);
  if (DRY) console.log('\n  Dry run, nothing written.');
}

if (require.main === module) main();
