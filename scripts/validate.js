#!/usr/bin/env node
/**
 * BeHistorical Validator
 * Run: node scripts/validate.js
 *
 * Checks every data file, renderer config, F&10 HTML, and lesson shell for
 * the structural and content requirements documented in CLAUDE.md.
 *
 * Architecture notes:
 *   Unit 1 — data file is self-contained (has checkpoints, stableImages, etc. inline).
 *             Renderer config is thin (stableImages only or minimal amendments).
 *   Unit 2+ — data file has base content; renderer config amends with checkpoints,
 *             skillBuilder, stableImages, beSurreal, beInTheRoom, embedUrl.
 *   Foundations — uses window.FOUNDATION_TOPIC, not window.BEHISTORICAL_LESSON.
 *
 * The validator checks the DATA FILE + RENDERER CONFIG *together* so that a key
 * present in either file satisfies the requirement.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ─── ANSI colors ─────────────────────────────────────────────────────────────
const R = '\x1b[31m';
const G = '\x1b[32m';
const Y = '\x1b[33m';
const B = '\x1b[34m';
const C = '\x1b[36m';
const W = '\x1b[1m';
const X = '\x1b[0m';

// ─── Counters ─────────────────────────────────────────────────────────────────
let totalErrors   = 0;
let totalWarnings = 0;
let totalChecks   = 0;
let sectionErrors = 0;

function err(file, msg) {
  totalErrors++;
  sectionErrors++;
  const short = path.relative(ROOT, file);
  console.log(`  ${R}✗${X} ${W}${short}${X}: ${msg}`);
}
function warn(file, msg) {
  totalWarnings++;
  const short = path.relative(ROOT, file);
  console.log(`  ${Y}⚠${X} ${W}${short}${X}: ${msg}`);
}
function section(title) {
  sectionErrors = 0;
  console.log(`\n${C}${W}── ${title} ${X}`);
}
function sectionDone(label) {
  if (sectionErrors === 0) console.log(`  ${G}✓${X} ${label} — all clear`);
}
function read(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); }
  catch { return null; }
}
function exists(p) { return fs.existsSync(p); }
function glob(dir, re) {
  if (!exists(dir)) return [];
  return fs.readdirSync(dir).filter(f => re.test(f)).map(f => path.join(dir, f));
}

// ─── Parentheses-in-URL checker ──────────────────────────────────────────────
// Matches url: '...(...)...' patterns where the path component contains ( or )
// Also matches CSS url('...(...)')
function findParenUrls(src) {
  const results = [];
  // JS `url: '...(...)...'` — use \b so sourceUrl: is excluded
  const re1 = /\burl\s*:\s*['"]([^'"]*\([^'"]*)['"]/g;
  let m;
  while ((m = re1.exec(src)) !== null) results.push(m[0].slice(0, 100));
  // CSS url('path/with(parens).ext')
  const re2 = /url\s*\(\s*['"]([^'"]*\([^'")]*)['"]\s*\)/g;
  while ((m = re2.exec(src)) !== null) results.push(m[0].slice(0, 100));
  return results;
}

// ─── BH_FORM topic keys ───────────────────────────────────────────────────────
function loadTopicKeys() {
  const src = read(path.join(ROOT, 'assets/js/behistorical-form-config.js'));
  if (!src) return new Set();
  const keys = new Set();
  const re = /'([\d.]+|foundations-\d+)'\s*:/g;
  let m;
  while ((m = re.exec(src)) !== null) keys.add(m[1]);
  return keys;
}

// ════════════════════════════════════════════════════════════════════════════
//  1. UNIT DATA FILES
// ════════════════════════════════════════════════════════════════════════════
function checkDataFile(filePath) {
  totalChecks++;
  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  if (!src.includes('window.BEHISTORICAL_LESSON')) {
    err(filePath, 'missing window.BEHISTORICAL_LESSON assignment');
  }

  const requiredKeys = ['meta:', 'learningTargets:', 'successCriteria:', 'lecture:', 'map:', 'first10:', 'evidenceLab:', 'primarySource:'];
  for (const k of requiredKeys) {
    if (!src.includes(k)) err(filePath, `missing required key: ${k}`);
  }

  if (!src.includes('feedbackToolUrl')) warn(filePath, 'meta missing feedbackToolUrl');
  if (!src.includes('canvasSubmissionNote')) warn(filePath, 'meta missing canvasSubmissionNote');

  if (/youtubeId\s*:\s*['"]YT_/.test(src)) {
    warn(filePath, 'placeholder YouTube ID(s) — replace with real Heimler\'s History video IDs');
  }

  for (const hit of findParenUrls(src)) {
    err(filePath, `image URL has parentheses in filename (breaks CSS url()): ${hit}`);
  }

  // Segment count sanity check
  if (src.includes('segments:')) {
    const count = (src.match(/bullets\s*:/g) || []).length;
    if (count < 3) warn(filePath, `lecture.segments may have only ${count} bullet array(s) — expected 3`);
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  2. RENDERER CONFIGS — checked together with their data file
// ════════════════════════════════════════════════════════════════════════════
function checkRendererConfig(rcPath, unitDir) {
  totalChecks++;
  const rcSrc = read(rcPath);
  if (!rcSrc) return err(rcPath, 'file not readable');

  // Find the matching data file so we can check combined coverage
  const base = path.basename(rcPath); // lesson-2-1-renderer-config.js
  const m = base.match(/^lesson-(\d+)-(\d+)-renderer-config\.js$/);
  let dataSrc = '';
  if (m) {
    // data file glob: lesson-2-1-*.js (not renderer-config)
    const dataDir = path.dirname(rcPath);
    const candidates = glob(dataDir, new RegExp(`^lesson-${m[1]}-${m[2]}-(?!renderer).*\\.js$`));
    if (candidates.length) dataSrc = read(candidates[0]) || '';
  }
  const combined = rcSrc + dataSrc;

  // embedUrl — check combined; error if genuinely missing
  const embedMatch = combined.match(/embedUrl\s*:\s*['"]([^'"?]+)/);
  if (!embedMatch) {
    err(rcPath, 'embedUrl not found in renderer-config or data file — First & 10 module will be blank');
  } else {
    const target = path.join(unitDir, embedMatch[1]);
    if (!exists(target)) {
      err(rcPath, `embedUrl target not found on disk: ${embedMatch[1]}`);
    }
  }

  // Keys that must exist somewhere in combined data+config
  const combinedRequired = ['stableImages', 'checkpoints', 'skillBuilder', 'beSurreal'];
  for (const key of combinedRequired) {
    if (!combined.includes(key)) {
      err(rcPath, `'${key}' missing from both data file and renderer-config`);
    }
  }

  // Parentheses in stableImages URLs
  for (const hit of findParenUrls(rcSrc)) {
    err(rcPath, `image URL has parentheses in filename (breaks CSS url()): ${hit}`);
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  3. F&10 HTML FILES
// ════════════════════════════════════════════════════════════════════════════
function checkFirst10(filePath, topicKeys) {
  totalChecks++;
  // Skip legacy capture files
  if (path.basename(filePath).includes('-capture')) {
    console.log(`  ${B}–${X} ${path.relative(ROOT, filePath)}: skipped (legacy -capture variant)`);
    return;
  }

  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  // TOPIC_KEY + TOPIC_LABEL
  const keyMatch = src.match(/var\s+TOPIC_KEY\s*=\s*['"]([^'"]+)['"]/);
  if (!keyMatch) {
    err(filePath, 'missing var TOPIC_KEY');
  } else if (!topicKeys.has(keyMatch[1])) {
    err(filePath, `TOPIC_KEY '${keyMatch[1]}' not in BH_FORM.topics — Google Form prefill will break`);
  }
  if (!src.match(/var\s+TOPIC_LABEL\s*=/)) err(filePath, 'missing var TOPIC_LABEL');

  // Builder output IDs
  if (!src.includes('id="google-output"') && !src.includes("id='google-output'")) {
    err(filePath, 'missing id="google-output"');
  }
  if (!src.includes('id="ai-output"') && !src.includes("id='ai-output'")) {
    err(filePath, 'missing id="ai-output"');
  }

  // Builder functions
  for (const fn of ['buildGooglePrompt', 'submitToGoogleForm', 'buildAiPrompt', 'copyAiPrompt']) {
    if (!src.includes(`function ${fn}`)) err(filePath, `missing function ${fn}()`);
  }

  // BH_FORM script loaded
  if (!src.includes('behistorical-form-config.js')) err(filePath, 'behistorical-form-config.js not loaded');

  // Textarea count — accept both class names used across Unit 1 and Unit 2+
  const qtaCount = (src.match(/class=["']qta["']|class=["']q-textarea["']/g) || []).length;
  if (qtaCount < 3) warn(filePath, `${qtaCount} response textarea(s) found — expected at least 3`);

  // DOMContentLoaded id handler
  if (!src.includes('DOMContentLoaded')) warn(filePath, 'missing DOMContentLoaded handler for textarea id assignment');

  // BH_FORM URL pattern
  if (!src.includes('BH_FORM') && !src.includes('BH_FORM?.baseURL')) {
    warn(filePath, 'submitToGoogleForm may not use BH_FORM.baseURL — check for hardcoded form URL');
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  4. LESSON HTML SHELLS
// ════════════════════════════════════════════════════════════════════════════
const REQUIRED_IDS = [
  'inline-targets', 'module-grid', 'main-lecture-grid', 'content-video-clips',
  'lesson-title', 'lesson-subtitle', 'lecture-title', 'lecture-intro',
  'pop-modal', 'pop-eyebrow', 'pop-title', 'pop-body',
  'lecture-modal', 'lecture-modal-title', 'lecture-modal-bullets',
  'lecture-modal-img', 'lecture-modal-caption',
  'lightbox', 'lightbox-img', 'lightbox-caption',
];
const WRONG_IDS = [
  { bad: '"targets"',      good: '"inline-targets"' },
  { bad: '"lecture-grid"', good: '"main-lecture-grid"' },
  { bad: '"video-grid"',   good: '"content-video-clips"' },
  { bad: '"block-plan"',   good: '"block-plan-roadmap"' },
];

function checkLessonShell(filePath) {
  totalChecks++;
  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  for (const id of REQUIRED_IDS) {
    if (!src.includes(`id="${id}"`) && !src.includes(`id='${id}'`)) {
      err(filePath, `missing required DOM id: #${id}`);
    }
  }
  for (const { bad, good } of WRONG_IDS) {
    if (src.includes(`id=${bad}`) || src.includes(`id='${bad.slice(1, -1)}'`)) {
      err(filePath, `wrong id=${bad} — use id=${good}`);
    }
  }

  // Script loading order
  const fi = src.indexOf('behistorical-form-config.js');
  const di = src.search(/assets\/data\/lesson-\d+-\d+-(?!renderer)[^"']+\.js/);
  const ri = src.search(/lesson-\d+-\d+-renderer-config\.js/);
  const vi = src.indexOf('behistorical-topic-renderer-v1.js');

  if (fi === -1) err(filePath, 'behistorical-form-config.js not loaded');
  else if (di > -1 && fi > di) err(filePath, 'order: behistorical-form-config.js must load BEFORE the data file');

  if (di > -1 && ri > -1 && di > ri) err(filePath, 'order: data file must load BEFORE renderer-config.js');
  if (ri > -1 && vi > -1 && ri > vi) err(filePath, 'order: renderer-config.js must load BEFORE behistorical-topic-renderer-v1.js');
}

// ════════════════════════════════════════════════════════════════════════════
//  5. FOUNDATIONS DATA FILES
// ════════════════════════════════════════════════════════════════════════════
function checkFoundationsData(filePath) {
  totalChecks++;
  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  if (!src.includes('window.FOUNDATION_TOPIC')) err(filePath, 'missing window.FOUNDATION_TOPIC assignment');

  for (const k of ['id:', 'title:', 'subtitle:', 'learningTargets:', 'successCriteria:', 'lecture:', 'first10:']) {
    if (!src.includes(k)) err(filePath, `missing required key: ${k}`);
  }
  if (/youtubeId\s*:\s*['"]YT_/.test(src)) warn(filePath, 'placeholder YouTube ID(s) present');
  for (const hit of findParenUrls(src)) {
    err(filePath, `image URL has parentheses in filename: ${hit}`);
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  6. FOUNDATIONS HTML PAGES
// ════════════════════════════════════════════════════════════════════════════
const FOUNDATIONS_REQUIRED_IDS = [
  ...REQUIRED_IDS,
  'block-plan-roadmap',
];

function checkFoundationsHtml(filePath) {
  totalChecks++;
  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  for (const id of FOUNDATIONS_REQUIRED_IDS) {
    if (!src.includes(`id="${id}"`) && !src.includes(`id='${id}'`)) {
      err(filePath, `missing required DOM id: #${id}`);
    }
  }
  for (const { bad, good } of WRONG_IDS) {
    if (src.includes(`id=${bad}`)) err(filePath, `wrong id=${bad} — use id=${good}`);
  }

  const fi = src.indexOf('behistorical-form-config.js');
  const di = src.search(/foundations-\d+.*-data\.js|foundations-0\d.*-data\.js/);
  const ri = src.indexOf('foundations-topic-renderer.js');

  if (fi === -1) err(filePath, 'behistorical-form-config.js not loaded');
  else if (di > -1 && fi > di) err(filePath, 'order: behistorical-form-config.js must load BEFORE the data file');
  if (di > -1 && ri > -1 && di > ri) err(filePath, 'order: data file must load BEFORE foundations-topic-renderer.js');
}

// ════════════════════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════════════════════
console.log(`\n${W}${B}BeHistorical Validator${X}`);
console.log(`Root: ${ROOT}\n`);

const topicKeys = loadTopicKeys();
console.log(`${G}✓${X} Loaded ${topicKeys.size} topic keys from behistorical-form-config.js`);

const dataDir       = path.join(ROOT, 'assets/data');
const foundationsDir = path.join(ROOT, 'foundations');

// 1. Data files
section('Unit data files (assets/data/lesson-N-N-*.js)');
const dataFiles = glob(dataDir, /^lesson-\d+-\d+-(?!renderer).*\.js$/)
  .filter(f => !f.endsWith('-standards-addon.js'));
for (const f of dataFiles) checkDataFile(f);
sectionDone(`${dataFiles.length} data files`);

// 2. Renderer configs
section('Renderer config files (assets/data/lesson-N-N-renderer-config.js)');
const rcFiles = glob(dataDir, /^lesson-\d+-\d+-renderer-config\.js$/);
for (const f of rcFiles) {
  const m = path.basename(f).match(/^lesson-(\d+)-/);
  const unitDir = m ? path.join(ROOT, `unit-${m[1]}`) : ROOT;
  checkRendererConfig(f, unitDir);
}
sectionDone(`${rcFiles.length} renderer configs`);

// 3. Unit F&10 HTML
section('F&10 HTML files (unit-N/first-and-10-*.html)');
const unitFirst10 = [];
for (let u = 1; u <= 9; u++) {
  glob(path.join(ROOT, `unit-${u}`), /^first-and-10-topic-\d+.*\.html$/)
    .forEach(f => unitFirst10.push(f));
}
for (const f of unitFirst10) checkFirst10(f, topicKeys);
sectionDone(`${unitFirst10.length} F&10 files checked`);

// 4. Lesson shells
section('Lesson HTML shells (unit-N/lesson-N-N-*.html)');
const lessonShells = [];
for (let u = 1; u <= 9; u++) {
  glob(path.join(ROOT, `unit-${u}`), /^lesson-\d+-\d+-.*\.html$/)
    .forEach(f => lessonShells.push(f));
}
for (const f of lessonShells) checkLessonShell(f);
sectionDone(`${lessonShells.length} lesson shells`);

// 5. Foundations data
section('Foundations data files (foundations/*-data.js)');
const fDataFiles = glob(foundationsDir, /^foundations.*-data\.js$/);
for (const f of fDataFiles) checkFoundationsData(f);
sectionDone(`${fDataFiles.length} foundations data files`);

// 6. Foundations HTML
section('Foundations HTML pages (foundations/foundations-*.html)');
const fHtmlFiles = glob(foundationsDir, /^foundations-\d+.*\.html$|^foundations-0\d.*\.html$/)
  .filter(f => !f.endsWith('-template.html'));
for (const f of fHtmlFiles) checkFoundationsHtml(f);
sectionDone(`${fHtmlFiles.length} foundations HTML pages`);

// 7. Foundations F&10
section('Foundations F&10 files (foundations/first-and-10-foundations-*.html)');
const fFirst10 = glob(foundationsDir, /^first-and-10-foundations.*\.html$/);
for (const f of fFirst10) checkFirst10(f, topicKeys);
sectionDone(`${fFirst10.length} foundations F&10 files`);

// 8. Topic key audit
section('behistorical-form-config.js topic key audit');
{
  totalChecks++;
  const allFirst10 = [...unitFirst10, ...fFirst10];
  let mismatches = 0;
  for (const f of allFirst10) {
    if (path.basename(f).includes('-capture')) continue;
    const src = read(f);
    if (!src) continue;
    const m = src.match(/var\s+TOPIC_KEY\s*=\s*['"]([^'"]+)['"]/);
    if (m && !topicKeys.has(m[1])) {
      err(f, `TOPIC_KEY '${m[1]}' has no BH_FORM.topics entry — Google Form prefill will break`);
      mismatches++;
    }
  }
  if (mismatches === 0) console.log(`  ${G}✓${X} All F&10 TOPIC_KEYs matched to BH_FORM.topics`);
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(60)}`);
console.log(`${W}Summary${X}  |  ${totalChecks} files checked`);
if (totalErrors === 0 && totalWarnings === 0) {
  console.log(`${G}${W}All checks passed.${X}`);
} else {
  if (totalErrors > 0)   console.log(`  ${R}${W}${totalErrors} error(s)${X}  — must fix before deploying`);
  if (totalWarnings > 0) console.log(`  ${Y}${totalWarnings} warning(s)${X} — should fix before class`);
}
console.log('');
process.exit(totalErrors > 0 ? 1 : 0);
