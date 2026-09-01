#!/usr/bin/env node
/**
 * BeHistorical Validator
 * Run: node scripts/validate.js
 *
 * Checks every data file, renderer config, F&10 HTML, and lesson shell for
 * the structural and content requirements documented in CLAUDE.md.
 *
 * Architecture notes:
 *   Unit 1, data file is self-contained (has checkpoints, stableImages, etc. inline).
 *             Renderer config is thin (stableImages only or minimal amendments).
 *   Unit 2+, data file has base content; renderer config amends with checkpoints,
 *             skillBuilder, stableImages, beSurreal, beInTheRoom, embedUrl.
 *   Foundations, uses window.FOUNDATION_TOPIC, not window.BEHISTORICAL_LESSON.
 *
 * The validator checks the DATA FILE + RENDERER CONFIG *together* so that a key
 * present in either file satisfies the requirement.
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT = path.resolve(__dirname, '..');

// The localStorage key prefix that carries the three First & 10 answers and
// their confidence ratings from the reading to Gather All My Work, and from
// there to Canvas. It is the only path those answers travel. Four files have to
// agree on this literal, and nothing but this check makes them:
//
//   write  scripts/lib/first10-capture-block.js, installed into all 77 readings
//   read   assets/js/behistorical-topic-renderer-v1.js
//   read   foundations/foundations-topic-renderer.js
//
// Rename it in one place and the build still passes every structural check
// while every student answer goes to a key nobody reads.
const FIRST10_STORAGE_PREFIX = 'behistorical-first10-';

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
  if (sectionErrors === 0) console.log(`  ${G}✓${X} ${label}, all clear`);
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

/**
 * Every standalone deep reading on disk, wherever build-deep-readings.js writes
 * them: foundations/ for a Foundations topic and unit-N/ for a unit topic.
 *
 * One list rather than a glob repeated at each call site, because the checks
 * that use it are the ones that keep a deep reading script-free, and a glob
 * naming only foundations/ silently stops covering the moment a volume outside
 * Foundations is written. That is the failure this repo keeps paying for: not a
 * check that fails, a check that quietly examines less than it says it does.
 */
function standaloneDeepReadings() {
  const dirs = [path.join(ROOT, 'foundations'), ...Array.from({ length: 9 }, (_, i) => path.join(ROOT, `unit-${i + 1}`))];
  return dirs.flatMap(dir => glob(dir, /^deep-reading-.*\.html$/));
}

// ─── Parentheses-in-URL checker ──────────────────────────────────────────────
// Matches url: '...(...)...' patterns where the path component contains ( or )
// Also matches CSS url('...(...)')
function findParenUrls(src) {
  const results = [];
  // JS `url: '...(...)...'`, use \b so sourceUrl: is excluded
  const re1 = /\burl\s*:\s*['"]([^'"]*\([^'"]*)['"]/g;
  let m;
  while ((m = re1.exec(src)) !== null) results.push(m[0].slice(0, 100));
  // CSS url('path/with(parens).ext')
  const re2 = /url\s*\(\s*['"]([^'"]*\([^'")]*)['"]\s*\)/g;
  while ((m = re2.exec(src)) !== null) results.push(m[0].slice(0, 100));
  return results;
}

function loadTopicKeys() {
  const src = read(path.join(ROOT, 'assets/js/behistorical-form-config.js'));
  if (!src) return new Set();
  const keys = new Set();
  const re = /'([\d.]+|f\d+|foundations-\d+)'\s*:/g;
  let m;
  while ((m = re.exec(src)) !== null) keys.add(m[1]);
  return keys;
}


function primaryReasoningSkill(topicKey, topicLabel) {
  const foundations = { f1: 'Causation', f2: 'Comparison', f3: 'Comparison', f4: 'Causation', f5: 'Comparison' };
  if (foundations[topicKey]) return foundations[topicKey];
  const label = topicLabel.toLowerCase();
  if (label.includes('comparison')) return 'Comparison';
  if (label.includes('continuity and change')) return 'Continuity and Change Over Time (CCOT)';
  return 'Causation';
}

function normalizeDisplayedSkill(label, topicKey, topicLabel) {
  const normalized = label.replace(/&amp;/g, '&').trim();
  if (normalized === 'Causation / Comparison') return ['Causation', 'Comparison'];
  if (normalized === 'CCOT' || /^Continuity (?:&|and) Change(?: Over Time)?$/.test(normalized)) {
    return ['Continuity and Change Over Time (CCOT)'];
  }
  if (normalized === 'Developments and Processes') return ['Evidence Usage'];
  if (normalized === 'Evaluation') return ['Argumentation'];
  if (normalized === 'Historical Thinking') return [primaryReasoningSkill(topicKey, topicLabel)];
  return [normalized];
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
    warn(filePath, 'placeholder YouTube ID(s), replace with real Heimler\'s History video IDs');
  }

  for (const hit of findParenUrls(src)) {
    err(filePath, `image URL has parentheses in filename (breaks CSS url()): ${hit}`);
  }

  // Segment count sanity check
  if (src.includes('segments:')) {
    const count = (src.match(/bullets\s*:/g) || []).length;
    if (count < 3) warn(filePath, `lecture.segments may have only ${count} bullet array(s), expected 3`);
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  2. RENDERER CONFIGS, checked together with their data file
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

  // embedUrl, check combined; error if genuinely missing
  const embedMatch = combined.match(/embedUrl\s*:\s*['"]([^'"?]+)/);
  if (!embedMatch) {
    err(rcPath, 'embedUrl not found in renderer-config or data file, First & 10 module will be blank');
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
  // Capture wrappers are audited separately against the central form config.
  if (path.basename(filePath).includes('-capture')) {
    return;
  }

  const src = read(filePath);
  if (!src) return err(filePath, 'file not readable');

  // Visual contract: every First & 10 must use the established charcoal,
  // bronze, paper, and serif reading system. Generated pages use the shared
  // stylesheet; legacy hand-authored pages carry the same tokens inline.
  const hasCanonicalStyles = src.includes('behistorical-first10.css') || src.includes('--blackened-steel');
  // `builder-section` is deliberately absent: the reading's coach prompt builder
  // was removed on 2026-08-31 and its absence is asserted below.
  const visualMarkers = ['class="module"', 'class="reading-title-band"', 'class="vocab-strip"', 'class="check-header"'];
  if (!hasCanonicalStyles) err(filePath, 'does not use the canonical BeHistorical First & 10 visual system');
  for (const marker of visualMarkers) {
    if (!src.includes(marker)) err(filePath, `missing canonical First & 10 structure: ${marker}`);
  }
  if (src.includes('background:#17243b') && !src.includes('--blackened-steel')) {
    err(filePath, 'uses the retired blue First & 10 template');
  }

  // TOPIC_KEY + TOPIC_LABEL
  const keyMatch = src.match(/var\s+TOPIC_KEY\s*=\s*['"]([^'"]+)['"]/);
  if (!keyMatch) {
    err(filePath, 'missing var TOPIC_KEY');
  }
  if (!src.match(/var\s+TOPIC_LABEL\s*=/)) err(filePath, 'missing var TOPIC_LABEL');

  // The storage key itself, not just the block around it. Removing the capture
  // block is caught by the TOPIC_KEY and buildAiPrompt checks above, but
  // *renaming* the key is not: the block stays well-formed, every symbol above
  // is still present, and the three answers quietly write to a key that neither
  // renderer reads. That is silent data loss, and it looks like a clean build.
  //
  // Three files have to agree on this literal. The write side is
  // scripts/lib/first10-capture-block.js; the read side is
  // behistorical-topic-renderer-v1.js and foundations-topic-renderer.js, both of
  // which read `behistorical-first10-${topicKey}` for Gather All My Work.
  if (!src.includes(FIRST10_STORAGE_PREFIX)) {
    err(filePath, `capture block does not write to ${FIRST10_STORAGE_PREFIX}<TOPIC_KEY>, answers will never reach Canvas`);
  }

  // A reading no longer reaches Socrates, and must not grow a way back.
  //
  // The First & 10 Reflection stopped being a coached surface on 2026-08-31.
  // Coaching there added a vendor round trip to the lowest-stakes writing in the
  // lesson, and the reading is now read, answer, move on.
  //
  // These are prohibitions rather than requirements, which is the inversion of
  // what this block checked until then. A reading that regrew a builder would
  // look completely normal: three questions, a capture block, every other check
  // green, and a coach conversation nobody decided to have.
  //
  // The capture block is the thing that must NOT go with it, which is why the
  // TOPIC_KEY and storage-key checks above stay exactly as they were. Those
  // three answers reaching Canvas is the reading's entire job.
  for (const gone of ['id="ai-output"', "id='ai-output'", 'function buildAiPrompt',
    'function copyAiPrompt', 'class="builder-section"', 'magicschool-open-link', 'joinCode=']) {
    if (src.includes(gone)) {
      err(filePath, `reading has regrown coach wiring (${gone}); the First & 10 is not a coached surface`);
    }
  }

  // Textarea count, treat qta and q-textarea as class tokens so multi-class
  // attributes such as class="q-textarea qta" are recognized correctly.
  const responseTextareas = [...src.matchAll(/<textarea\b[^>]*class=["'][^"']*\b(?:qta|q-textarea)\b[^"']*["'][^>]*>/g)];
  const qtaCount = responseTextareas.length;
  if (qtaCount < 3) warn(filePath, `${qtaCount} response textarea(s) found, expected at least 3`);

  // Dynamic ID assignment is required only when the builder references fixed
  // q1-q3 IDs and the textareas do not already provide those IDs. Class-based
  // collectors do not need textarea IDs.
  const textareaIds = new Set(responseTextareas.map((match) => {
    const idMatch = match[0].match(/\bid=["']([^"']+)["']/);
    return idMatch ? idMatch[1] : '';
  }).filter(Boolean));
  const usesFixedQuestionIds = /getElementById\(\s*["']q[1-3]["']\s*\)/.test(src);
  const hasAllQuestionIds = ['q1', 'q2', 'q3'].every((id) => textareaIds.has(id));
  if (usesFixedQuestionIds && !hasAllQuestionIds && !src.includes('DOMContentLoaded')) {
    warn(filePath, 'builder references q1-q3 but response textarea IDs are not assigned');
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
      err(filePath, `wrong id=${bad}, use id=${good}`);
    }
  }

  // Script loading order
  const di = src.search(/assets\/data\/lesson-\d+-\d+-(?!renderer)[^"']+\.js/);
  const ri = src.search(/lesson-\d+-\d+-renderer-config\.js/);
  const vi = src.indexOf('behistorical-topic-renderer-v1.js');

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

  // beSurreal, required per 10-module standard
  if (!src.includes('beSurreal:')) {
    err(filePath, "missing 'beSurreal' field, required by 10-module standard (needs title/desc/intro/detail/prompt)");
  }

  // first10.embedUrl must point to a capture wrapper, not a standalone file
  const embedMatch = src.match(/embedUrl\s*:\s*['"]([^'"]+)['"]/);
  if (embedMatch) {
    // Strip any cache-busting query string before checking the suffix and the path on disk.
    const embedPath = embedMatch[1].split('?')[0];
    if (!embedPath.endsWith('-capture.html')) {
      err(filePath, `embedUrl '${embedMatch[1]}' must end with -capture.html (not a standalone HTML file)`);
    }
    const captureTarget = path.join(path.dirname(filePath), embedPath);
    if (!exists(captureTarget)) {
      err(filePath, `embedUrl target not found on disk: ${embedMatch[1]}`);
    }
  } else if (src.includes("paragraphs:")) {
    err(filePath, "first10 uses inline paragraphs array, must use embedUrl pointing to a capture wrapper");
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
    if (src.includes(`id=${bad}`)) err(filePath, `wrong id=${bad}, use id=${good}`);
  }

  const di = src.search(/foundations-\d+.*-data\.js|foundations-0\d.*-data\.js/);
  const ri = src.indexOf('foundations-topic-renderer.js');
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
sectionDone(`${unitFirst10.filter(f => !path.basename(f).includes('-capture')).length} standalone F&10 files`);

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

// 5b. Foundations 10-module structure
section('Foundations renderer, 10-module standard');
{
  totalChecks++;
  const CANONICAL_IDS = ['map','first10','contentdelivery','besurreal','skill','checkpoint1','evidence','coach','beintheroom','checkpoint2'];
  const rendSrc = read(path.join(foundationsDir, 'foundations-topic-renderer.js'));
  if (!rendSrc) {
    err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'renderer not readable');
  } else {
    const found = [...rendSrc.matchAll(/\{id:'([^']+)'/g)].map(m => m[1]).filter(id => CANONICAL_IDS.includes(id));
    if (found.length !== 10) {
      err(path.join(foundationsDir, 'foundations-topic-renderer.js'), `module count: expected 10, found ${found.length} canonical IDs, ${JSON.stringify(found)}`);
    }
    for (const id of CANONICAL_IDS) {
      if (!found.includes(id)) {
        err(path.join(foundationsDir, 'foundations-topic-renderer.js'), `missing module id: '${id}'`);
      }
    }
    if (!rendSrc.includes('renderBeSurreal')) err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'missing renderBeSurreal function');
    if (!rendSrc.includes('renderCheckpoint1')) err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'missing renderCheckpoint1 function');
    if (!rendSrc.includes('renderCheckpoint2')) err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'missing renderCheckpoint2 function');
    if (!rendSrc.includes('m.link')) err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'module grid does not handle link: property (needed for BeInTheRoom)');
    sectionDone('Foundations renderer');
  }
}

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
sectionDone(`${fFirst10.filter(f => !path.basename(f).includes('-capture')).length} standalone foundations F&10 files`);

// 7b. Both ends of the First & 10 storage key.
//
// checkFirst10 above asserts the 77 writers use the prefix. That is only half a
// contract: if the renderers were changed to read a different key, all 77
// readings would still validate clean and every answer would still be lost.
// This closes the loop by asserting the readers use the same literal.
section('First & 10 storage key, write and read sides agree');
{
  const endpoints = [
    [path.join(ROOT, 'scripts', 'lib', 'first10-capture-block.js'), 'the canonical capture block installs'],
    [path.join(ROOT, 'assets', 'js', 'behistorical-topic-renderer-v1.js'), 'the unit renderer reads'],
    [path.join(ROOT, 'foundations', 'foundations-topic-renderer.js'), 'the foundations renderer reads']
  ];

  for (const [file, role] of endpoints) {
    totalChecks++;
    if (!fs.existsSync(file)) {
      err(file, 'missing, but Gather All My Work depends on it');
      continue;
    }
    if (!read(file).includes(FIRST10_STORAGE_PREFIX)) {
      err(file, `${role} a key other than ${FIRST10_STORAGE_PREFIX}<TOPIC_KEY>`);
    }
  }
  sectionDone(`3 endpoints agree on ${FIRST10_STORAGE_PREFIX}<TOPIC_KEY>`);
}

// 7c. Deep readings are reachable from the lesson that owns them.
//
// A deep reading is generated into the lesson's folder but is reached only by
// the `deepReading` block in that topic's data file, which the renderer turns
// into the card under the lecture grid. Nothing else points at the page, so a
// missing or mistyped url leaves a complete reading sitting on disk, served by
// Pages, and reachable only by someone who types the filename. Every structural
// check stays green: the file is there, the data file parses, the lesson
// renders. It is the orphaned-page failure, and it is silent by construction.
//
// Both directions are checked, because each fails on its own. A data file
// pointing at a page that does not exist is a dead card; a generated page no
// data file points at is an unreachable reading.
section('Deep readings are linked from their lesson');
{
  const contentDir = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content');
  const modules = exists(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.js')).sort()
    : [];

  // Two sets, deliberately. `generated` is every page a content module claims,
  // whether or not its link checked out; `linked` is the ones that fully passed.
  // The orphan sweep below must use `generated`, or a topic that fails the link
  // check also gets reported as hand-authored, which is a second error for one
  // fault and sends you looking in the wrong directory.
  const generated = new Set();
  const linked = new Set();

  for (const file of modules) {
    totalChecks++;
    let topic;
    try {
      topic = require(path.join(contentDir, file));
    } catch (e) {
      err(path.join(contentDir, file), `content module does not load: ${e.message}`);
      continue;
    }

    const dir = /^foundations-/.test(topic.slug || '')
      ? path.join(ROOT, 'foundations')
      : path.join(ROOT, `unit-${(/^topic-(\d)/.exec(topic.slug || '') || [])[1]}`);

    if (topic.sourceFile) generated.add(topic.sourceFile);

    const page = path.join(dir, topic.sourceFile || '');
    const lesson = path.join(dir, topic.lessonFile || '');
    // The lesson shell names its data file; the deepReading block lives there.
    //
    // The two lesson systems keep that data file in different places, and the
    // check has to know which: a Foundations topic keeps it beside the shell as
    // foundations-3-states-power-data.js, while a unit topic keeps it in
    // assets/data/ under the shell's own name, because the shell loads it with a
    // <script src>. Resolving a unit topic the Foundations way looks for
    // unit-1/lesson-1-1-song-china-data.js, which no unit topic has ever had, so
    // every unit deep reading would fail this check for a file that was never
    // supposed to exist.
    const data = /^foundations-/.test(topic.slug || '')
      ? lesson.replace(/\.html$/, '-data.js')
      : path.join(ROOT, 'assets', 'data', path.basename(topic.lessonFile || '').replace(/\.html$/, '.js'));

    if (!exists(page)) {
      err(page, `generated page missing, run: npm run build:deep-readings`);
      continue;
    }
    if (!exists(data)) {
      err(data, `deep reading ${topic.sourceFile} names a lesson with no data file`);
      continue;
    }

    const src = read(data) || '';
    if (!/\bdeepReading\s*:/.test(src)) {
      err(data, `deep reading ${topic.sourceFile} exists but this lesson has no deepReading block, so nothing links to it`);
      continue;
    }
    if (!src.includes(topic.sourceFile)) {
      err(data, `deepReading.url does not point at ${topic.sourceFile}, so the card is a dead link`);
      continue;
    }
    linked.add(topic.sourceFile);
  }

  // The other direction: a page on disk that no content module produces is a
  // hand-authored deep reading, which is the thing the content model exists to
  // prevent. Only foundations/ and unit-N/ are scanned, matching where the
  // builder writes.
  for (const found of standaloneDeepReadings()) {
    totalChecks++;
    if (!generated.has(path.basename(found))) {
      err(found, 'deep reading has no content module in scripts/lib/deep-reading-content/, so a rebuild cannot reproduce it');
    }
  }

  sectionDone(`${linked.size} deep reading${linked.size === 1 ? '' : 's'} generated and linked`);
}

// 7d. eBook volumes exist, and something links to them.
//
// The eBook is a second surface on the chapter modules, generated by
// scripts/build-ebook.js. It has the same silent failure the deep readings do,
// one directory further away: a volume that no page links to is served by Pages
// and reachable only by typing the URL. It also has a failure of its own, since
// a volume names its chapters by slug, and a slug with no content module would
// mean a book with a chapter missing.
section('eBook volumes are generated and linked');
{
  let VOLUMES = [], LIBRARY = null;
  try {
    ({ VOLUMES, LIBRARY } = require(path.join(ROOT, 'scripts', 'build-ebook.js')));
  } catch (e) {
    err(path.join(ROOT, 'scripts', 'build-ebook.js'), `does not load: ${e.message}`);
  }

  // Pages that are allowed to be the front door for a volume. A volume linked
  // from nowhere is the orphan failure; one linked from any of these is fine.
  const entryPoints = [
    path.join(ROOT, 'index.html'),
    path.join(ROOT, 'foundations', 'index.html'),
    ...Array.from({ length: 9 }, (_, i) => path.join(ROOT, `unit-${i + 1}`, 'index.html'))
  ].filter(exists);
  const entrySrc = entryPoints.map(read).join('\n');

  /**
   * The accessibility scaffolding both eBook page types are generated with.
   *
   * These live in one template each in scripts/lib/ebook-page.js, so they cannot
   * go missing from one page and not the other, which is exactly why they are
   * cheap to check and worth checking: every one of them fails silently. A skip
   * link that stops pointing at a real id still renders, still takes focus, and
   * simply does nothing when activated. A <main> that swallows the footer still
   * looks identical. Nothing offline can see either, and no student would report
   * it, because the students who would notice are the ones least likely to be
   * asked.
   */
  function checkEbookLandmarks(file, label) {
    const src = read(file) || '';

    totalChecks++;
    if (!/<html lang="en">/.test(src)) {
      err(file, `${label} lost <html lang="en">, so a screen reader guesses the language`);
    }

    // First focusable, not merely present. Styling can put it anywhere on screen;
    // only source order decides what Tab reaches first.
    totalChecks++;
    const skip = '<a class="skip-link" href="#main-content">Skip to main content</a>';
    const bodyStart = src.indexOf('<body');
    const bodyOpenEnd = src.indexOf('>', bodyStart);
    if (!src.includes(skip)) {
      err(file, `${label} has no skip link, so reaching the text means tabbing every contents link`);
    } else if (src.slice(bodyOpenEnd + 1).trimStart().indexOf(skip) !== 0) {
      err(file, `${label} has a skip link that is not the first element in <body>, so it is not the first thing Tab reaches`);
    }

    // The link is only a link if its target exists.
    totalChecks++;
    if (!/<main id="main-content"/.test(src)) {
      err(file, `${label} has no <main id="main-content">, so the skip link points at nothing and there is no main landmark`);
    }

    // The footer belongs to the page, not to the main content. A footer inside
    // <main> is announced as part of the article and is skipped over by anyone
    // jumping to the contentinfo landmark.
    totalChecks++;
    const mainEnd = src.indexOf('</main>');
    const footer = src.indexOf('<footer');
    if (mainEnd !== -1 && footer !== -1 && footer < mainEnd) {
      err(file, `${label} has its footer inside <main>, which puts the site footer in the main landmark`);
    }
  }

  for (const volume of VOLUMES) {
    totalChecks++;
    const target = path.join(ROOT, volume.outputFile);

    if (!exists(target)) {
      err(target, 'eBook volume missing, run: npm run build:ebook');
      continue;
    }

    for (const entry of volume.contents || []) {
      if (!entry.module) continue;               // a pending topic has no module yet, by design
      const mod = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content', `${entry.module}.js`);
      if (!exists(mod)) {
        err(path.join(ROOT, 'scripts', 'build-ebook.js'), `volume "${volume.id}" names chapter module "${entry.module}" that does not exist`);
      }
    }

    // basename is enough: the link is written relative to whichever page
    // carries it, so matching the full path would fail on a correct link.
    if (!entrySrc.includes(path.basename(volume.outputFile))) {
      err(target, `no hub page links to this volume, so students can only reach it by typing the URL`);
    }

    checkEbookLandmarks(target, `eBook volume "${volume.id}"`);
  }

  // The library is the one stable eBook URL and the only one the front door
  // links, so it carries the reachability contract for every volume behind it:
  // if the library is missing or the home page stops linking it, every volume
  // becomes unreachable at once while each individual volume file still exists.
  if (LIBRARY) {
    totalChecks++;
    const lib = path.join(ROOT, LIBRARY.outputFile);
    if (!exists(lib)) {
      err(lib, 'eBook library missing, run: npm run build:ebook');
    } else {
      const home = read(path.join(ROOT, 'index.html')) || '';
      if (!home.includes(LIBRARY.outputFile)) {
        err(path.join(ROOT, 'index.html'), `the front door does not link ${LIBRARY.outputFile}, so the eBook is reachable only by typing the URL`);
      }
      checkEbookLandmarks(lib, 'the eBook library');
      const libSrc = read(lib) || '';
      for (const volume of VOLUMES) {
        totalChecks++;
        if (!libSrc.includes(path.basename(volume.outputFile))) {
          err(lib, `library does not list volume "${volume.id}"`);
        }
      }
    }
  }

  sectionDone(`${VOLUMES.length} eBook volume${VOLUMES.length === 1 ? '' : 's'} in a library the front door links`);
}

// 7e. "Listen to this section" is generated, shared, and reaches every section.
//
// The feature is an instructional listening layer over the eBook, described in
// CLAUDE.md. Its failures are the quiet kind, which is why they are checked here
// rather than left to a browser:
//
//   - A volume that marks its sections and does not load the module shows no
//     controls at all, on a page that is otherwise perfect. Nothing renders
//     wrong, nothing errors, the feature is simply not there.
//   - A volume that loads the module and stops marking its sections is the same
//     silence from the opposite direction.
//   - A section that gains the attribute but loses its mount still gets
//     controls, prepended above its own heading, which reads as a toolbar
//     bolted to the top of the reading.
//   - A count that drifts below what the content modules contain is the worst
//     of the four, because a chapter with narration on four of its five
//     sections looks entirely finished.
//
// What a browser has to prove instead is in scripts/test/ebook-listen.test.js:
// that the buttons work, that one section cancels another, and that the
// extractor reads the history and not the furniture.
section('eBook narration is generated and shared');
{
  const LISTEN_MODULE = path.join(ROOT, 'assets', 'js', 'behistorical-listen.js');
  const SCRIPT_TAG = 'src="../assets/js/behistorical-listen.js"';

  let VOLUMES = [], LIBRARY = null;
  try {
    ({ VOLUMES, LIBRARY } = require(path.join(ROOT, 'scripts', 'build-ebook.js')));
  } catch (e) { /* 7d already reported this */ }

  totalChecks++;
  const moduleSrc = exists(LISTEN_MODULE) ? read(LISTEN_MODULE) : null;
  if (!moduleSrc) {
    err(LISTEN_MODULE, 'the one narration module is missing, so every Listen control on every volume is dead');
  } else if (!/speechSynthesis/.test(moduleSrc)) {
    err(LISTEN_MODULE, 'the narration module no longer uses window.speechSynthesis');
  }

  let listenable = 0;

  for (const volume of VOLUMES) {
    const target = path.join(ROOT, volume.outputFile);
    if (!exists(target)) continue;                 // 7d reports a missing volume
    const src = read(target) || '';

    // How many sections this volume's content modules actually contain. Derived
    // from the source of truth rather than from the page, because comparing a
    // page against itself can only ever agree with itself.
    let expected = 0;
    for (const entry of volume.contents || []) {
      if (!entry.module) continue;
      const modFile = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content', `${entry.module}.js`);
      if (!exists(modFile)) continue;              // 7d reports this too
      let mod;
      try { mod = require(modFile); } catch (e) { continue; }
      expected += (mod.empires || []).length;
      if (mod.closing && (mod.closing.pairs || []).length) expected += 1;
    }

    const marked = (src.match(/data-listenable="true"/g) || []).length;
    const mounts = (src.match(/data-listen-mount/g) || []).length;
    listenable += marked;

    totalChecks++;
    if (marked !== expected) {
      err(target, `volume "${volume.id}" marks ${marked} narratable sections but its chapter modules contain ${expected}, so ${Math.abs(expected - marked)} section${Math.abs(expected - marked) === 1 ? ' has' : 's have'} no Listen control`);
    }

    totalChecks++;
    if (mounts !== marked) {
      err(target, `volume "${volume.id}" has ${marked} narratable sections and ${mounts} control mounts, so the controls land above the section heading instead of under it`);
    }

    totalChecks++;
    const tags = (src.match(/behistorical-listen\.js/g) || []).length;
    if (marked && tags !== 1) {
      err(target, tags === 0
        ? `volume "${volume.id}" marks ${marked} narratable sections but never loads ${SCRIPT_TAG}, so no control is ever built`
        : `volume "${volume.id}" loads the narration module ${tags} times, which builds a duplicate control in every section`);
    }
  }

  // The library is a shelf, not a reading. Both directions are asserted, because
  // "no controls here" is a decision and a decision that nothing enforces is a
  // preference. See ebook-page.js.
  if (LIBRARY) {
    const lib = path.join(ROOT, LIBRARY.outputFile);
    if (exists(lib)) {
      const src = read(lib) || '';
      totalChecks++;
      if (/data-listenable/.test(src) || /behistorical-listen\.js/.test(src)) {
        err(lib, 'the eBook library carries narration, but it has no reading section to narrate; see the LISTEN_SCRIPT note in scripts/lib/ebook-page.js');
      }
    }
  }

  // Narration logic lives in one file. A page that grew its own copy is the
  // beginning of the 64-prompt-builders problem, ten of which were malformed
  // badly enough to kill their page's whole script block, and it is far cheaper
  // to refuse the first copy than to find the tenth.
  const generated = [
    ...(VOLUMES.map(v => path.join(ROOT, v.outputFile))),
    ...(LIBRARY ? [path.join(ROOT, LIBRARY.outputFile)] : []),
    ...standaloneDeepReadings()
  ].filter(exists);

  for (const file of generated) {
    totalChecks++;
    const src = read(file) || '';
    if (/speechSynthesis|SpeechSynthesisUtterance/.test(src)) {
      err(file, 'narration code is inlined in a generated page; it belongs only in assets/js/behistorical-listen.js');
    }
  }

  // The standalone deep readings ship no <script> at all, which is a contract
  // predating this feature and one it must not quietly break: a page with no
  // script cannot ship a SyntaxError that discards its own behaviour. The eBook
  // is where narration lives; a deep reading that grew a script tag is the
  // first step towards a fifth surface nobody decided to add.
  for (const file of standaloneDeepReadings()) {
    totalChecks++;
    if (/<script/i.test(read(file) || '')) {
      err(file, 'a deep reading has grown a <script> tag; see the header of scripts/lib/deep-reading-page.js');
    }
  }

  sectionDone(`${listenable} eBook sections narratable from one shared module`);
}

// 8. The Google Form is retired. This check keeps it retired.
//
// Student work goes to Canvas through Gather All My Work. A second collection
// channel splits the record and fails silently, which is how the form lost the
// Topic field on six lessons and every Student Response for an unknown period.
// MagicSchool is not a capture channel and must survive: it is where students
// take their thinking to be questioned.
section('Google Form retirement and MagicSchool wiring');
{
  const banned = [
    ['docs.google.com/forms', 'a Google Form URL'],
    ['behistorical-form-config', 'the retired form config'],
    ['submitToGoogleForm', 'a form submit handler'],
    ['buildGooglePrompt', 'the form prompt builder'],
    ['PREFILLED_FIRST10_FORM', 'a prefilled form URL'],
    ['BH_FORM', 'the retired BH_FORM global'],
  ];
  const surfaces = [...unitFirst10, ...fFirst10, ...lessonShells, ...fHtmlFiles];
  let offenders = 0;

  for (const filePath of surfaces) {
    totalChecks++;
    const src = read(filePath);
    if (!src) continue;
    for (const [needle, label] of banned) {
      if (src.includes(needle)) {
        err(filePath, `${label} is still wired here, run scripts/remove-google-form-capture.js`);
        offenders++;
      }
    }
  }

  // A wrapper embeds the reading and does nothing else.
  //
  // It used to intercept the reading's "Open MagicSchool" click by label,
  // because most readings rendered that button with no onclick of their own.
  // That button is gone with the coach builder, so the interception, the join
  // link and the classroom resolver went with it: there is nothing left in a
  // reading to intercept. These checks are inverted rather than deleted, for the
  // same reason as the reading's own, so the pair cannot come back on one side.
  const wrappers = [...unitFirst10, ...fFirst10].filter(f => path.basename(f).includes('-capture'));
  for (const filePath of wrappers) {
    totalChecks++;
    const src = read(filePath) || '';
    if (!src.includes('first10-frame')) {
      err(filePath, 'capture wrapper does not embed the reading, the module would show nothing');
      offenders++;
    }
    for (const gone of ['MAGICSCHOOL_URL', 'joinCode=', 'behistorical-classroom.js']) {
      if (src.includes(gone)) {
        err(filePath, `capture wrapper still carries coach wiring (${gone}); the reading it embeds has no coach button`);
        offenders++;
      }
    }
  }

  // embedUrl must name the capture wrapper, not the reading. Seven Unit 2 topics
  // pointed straight at the reading because their renderer-config overrode the
  // data file's correct value, and the config loads second. The wrapper is what
  // intercepts MagicSchool, so those seven buttons opened a blank tab.
  [...dataFiles, ...rcFiles].forEach(filePath => {
    const src = read(filePath);
    if (!src) return;
    // Scope to First & 10 embeds by filename. Topic 1.3's map module is also an
    // embedUrl, and it legitimately points at a map page, not a capture wrapper.
    const embeds = [...src.matchAll(/embedUrl:\s*'([^']+)'/g)]
      .map(m => m[1])
      .filter(u => /(^|\/)first-and-10-/.test(u));
    embeds.forEach(url => {
      totalChecks++;
      if (!/-capture\.html$/.test(url.split('?')[0])) {
        err(filePath, `first10.embedUrl points at the reading, not its capture wrapper: ${url}`);
      }
    });
  });

  // A reading carries no route to Socrates at all, as of 2026-08-31.
  //
  // These three checks used to require the opposite: a MagicSchool button, a
  // prompt builder, and a classroom-aware link. They are inverted rather than
  // deleted, because the failure they now guard is the same shape it always was,
  // pointing the other way. A reading that regrew a button would render
  // perfectly and send students on a vendor round trip nobody decided to add.
  //
  // The classroom resolver goes with it: a reading inlined that source only to
  // resolve this button's href, so with no button there is nothing to resolve.
  // Kelly's students are unaffected, because the surfaces that still reach
  // Socrates, Checkpoint 2 and BeInTheRoom, keep their own wiring and their own
  // checks below.
  const readings = [...unitFirst10, ...fFirst10].filter(f => !path.basename(f).includes('-capture'));
  for (const filePath of readings) {
    totalChecks++;
    const src = read(filePath) || '';
    for (const gone of ['Open MagicSchool', 'Open AI Coach', 'buildAiPrompt',
      'id="magicschool-open-link"', 'resolveMagicSchoolUrl', 'joinCode=']) {
      if (src.includes(gone)) {
        err(filePath, `reading still carries coach wiring (${gone}); the First & 10 is not a coached surface`);
        offenders++;
      }
    }
  }

  sectionDone(`${surfaces.length} surfaces clean of the form; ${wrappers.length} wrappers keep MagicSchool; ${readings.length} readings carry no coach route`);
}

// 11. BeInTheRoom links and v2 scenario contract
section('BeInTheRoom scenario links and v2 quality contract');
{
  const linkedTargets = new Set();
  for (const dataFile of dataFiles) {
    const nameMatch = path.basename(dataFile).match(/^lesson-(\d+)-(\d+)-/);
    if (!nameMatch) continue;
    const [, unit, topic] = nameMatch;
    const rendererPath = path.join(dataDir, `lesson-${unit}-${topic}-renderer-config.js`);
    const combined = `${read(dataFile) || ''}\n${read(rendererPath) || ''}`;
    const urls = [...combined.matchAll(/beInTheRoom\s*[:=]\s*\{\s*url:\s*(['"])(.*?)\1/g)]
      .map((match) => match[2]).filter(Boolean);
    if (!urls.length) continue;
    totalChecks++;
    const target = path.resolve(ROOT, `unit-${unit}`, urls[urls.length - 1]);
    if (!target.startsWith(ROOT)) {
      err(dataFile, `BeInTheRoom URL resolves outside the repository: ${urls[urls.length - 1]}`);
      continue;
    }
    if (!exists(target)) {
      err(dataFile, `BeInTheRoom target does not exist: ${path.relative(ROOT, target)}`);
      continue;
    }
    linkedTargets.add(target);
  }

  const v2Files = [];
  for (let unit = 1; unit <= 9; unit++) {
    const roomDir = path.join(ROOT, 'beintheroom', `unit-${unit}`);
    for (const filePath of glob(roomDir, /\.html$/)) {
      const source = read(filePath) || '';
      if (source.includes('window.BH_ROOM_SCENARIO')) v2Files.push(filePath);
    }
  }

  for (const filePath of v2Files) {
    totalChecks++;
    const source = read(filePath) || '';
    if (!source.includes('behistorical-room-v2.css')) err(filePath, 'missing shared BeInTheRoom v2 stylesheet');
    if (!source.includes('behistorical-room-v2.js')) err(filePath, 'missing shared BeInTheRoom v2 renderer');
    if (!source.includes('behistorical-beintheroom-capture.js')) {
      err(filePath, 'v2 scenario does not load the BeInTheRoom capture bridge, its AP reflection would never reach Gather All My Work');
    }
    const configMatch = source.match(/window\.BH_ROOM_SCENARIO\s*=\s*([\s\S]*?);<\/script>/);
    if (!configMatch) {
      err(filePath, 'could not locate generated BH_ROOM_SCENARIO configuration');
      continue;
    }
    let scenario;
    try { scenario = JSON.parse(configMatch[1]); }
    catch (error) {
      err(filePath, `invalid BH_ROOM_SCENARIO JSON: ${error.message}`);
      continue;
    }
    if (!scenario.alignment?.theme || !scenario.alignment?.objective || !scenario.alignment?.skill) {
      err(filePath, 'Step 0 alignment must include theme, objective, and reasoning skill');
    }
    if (!Array.isArray(scenario.roles) || scenario.roles.length < 4) err(filePath, 'v2 scenario requires at least four historical roles');
    if (!Array.isArray(scenario.evidence) || scenario.evidence.length < 8 || scenario.evidence.length > 12) err(filePath, 'v2 scenario requires 8-12 evidence items');
    if (!Array.isArray(scenario.decisions) || scenario.decisions.length !== 3) err(filePath, 'v2 scenario requires exactly three tradeoff decisions');
    for (const decision of scenario.decisions || []) {
      if (!Array.isArray(decision.options) || decision.options.length < 3 || decision.options.length > 4) {
        err(filePath, `decision '${decision.id || 'unknown'}' requires 3-4 options`);
      }
      for (const option of decision.options || []) {
        if (!option.benefits || !option.worries || !option.tradeoff) err(filePath, `decision option '${option.id || 'unknown'}' is missing benefits, worries, or tradeoff`);
      }
    }
    if (!scenario.centralQuestion || !scenario.reflectionPrompt) err(filePath, 'missing central dilemma or AP reflection');
    if (!Array.isArray(scenario.sources) || scenario.sources.length < 2) err(filePath, 'v2 scenario requires at least two historical references');
    if (!linkedTargets.has(filePath)) err(filePath, 'v2 scenario exists but is not linked from its lesson data/config');
  }

  // v1 scenarios build their MagicSchool button by hand instead of through the
  // shared v2 renderer, so each one has to carry its own classroom resolver.
  // See scripts/wire-beintheroom-magicschool.js, which wired all of these once;
  // this is what catches a future scenario, or a hand-revert, that skips it.
  let v1Wired = 0;
  for (let unit = 1; unit <= 9; unit++) {
    const roomDir = path.join(ROOT, 'beintheroom', `unit-${unit}`);
    for (const filePath of glob(roomDir, /\.html$/)) {
      const source = read(filePath) || '';
      if (source.includes('window.BH_ROOM_SCENARIO')) continue;
      if (!source.includes('joinCode=')) continue;
      totalChecks++;
      v1Wired++;
      if (!source.includes('id="magicschool-open-link"') || !source.includes('behistorical-classroom.js')) {
        err(filePath, 'v1 BeInTheRoom scenario\'s MagicSchool button is not classroom-aware, Kelly\'s students would land in Anderson\'s classroom');
      }

      // Only a scenario a lesson page can actually reach needs the capture
      // bridge: a file no lesson data links to has no topic key to write
      // under and no student ever opens it through the module path. See
      // scripts/wire-beintheroom-work-capture.js, which wired all of these
      // once; this is what catches a future scenario, or a hand-revert, that
      // skips it.
      if (linkedTargets.has(filePath) && !source.includes('behistorical-beintheroom-capture.js')) {
        err(filePath, 'v1 BeInTheRoom scenario does not load the BeInTheRoom capture bridge, its AP reflection would never reach Gather All My Work');
      }
    }
  }

  // What a scenario pastes must not overwrite the coach it is pasting into.
  //
  // The persona treats the pasted block as authoritative over anything Socrates
  // remembers. That is what lets one bot serve 77 topics, and it is why a paste
  // is the one place that can silently replace him. Two strings did exactly
  // that in every hand-authored scenario until 2026-08-31:
  //
  //   - a paste naming some other coach, which meant the student building one
  //     relationship with Socrates across nine units met an unnamed second bot
  //     in the module where the coach is most present;
  //   - "ask me one question at a time", which is version 1 of the persona's own
  //     rule restated in the place the persona says wins. It was removed from
  //     the checkpoint paste on 2026-08-29 for the reasons at the bottom of
  //     assets/js/behistorical-coach-prompt.js, and it survived here, so
  //     BeInTheRoom went on running the coach students complained about while
  //     every structural check stayed green.
  //
  // Neither failure is visible on the page: the scenario renders perfectly and
  // the wrong conversation happens somewhere this repo cannot see. So the strings
  // are prohibited rather than remembered. See
  // scripts/wire-beintheroom-coach-prompt.js, which normalized all of them once.
  const BANNED_PASTE = [
    [/Historical Thinking Coach/i, 'names a second coach instead of Socrates'],
    [/one question at a time/i, 'restates version 1 of the persona one-ask rule'],
    [/Act as an AP World History coach/i, 'names a generic coach instead of Socrates'],
    [/coach me through these stages/i, 'reinstates the six-stage walk the bounded ask replaced']
  ];
  // The v2 renderer builds its paste at runtime, so its wording never lands in a
  // scenario file and scanning beintheroom/ alone would cover 38 scenarios while
  // reporting green for the 26 that share this one builder. The two unit
  // generators are scanned for the same reason one step earlier: their output is
  // caught here only after a rebuild.
  const pasteSources = [
    path.join(ROOT, 'assets', 'js', 'behistorical-room-v2.js'),
    path.join(ROOT, 'scripts', 'build-unit6.js'),
    path.join(ROOT, 'scripts', 'build-unit9.js')
  ];
  let pasteChecked = 0;
  for (let unit = 1; unit <= 9; unit++) {
    const roomDir = path.join(ROOT, 'beintheroom', `unit-${unit}`);
    for (const filePath of glob(roomDir, /\.html$/)) pasteSources.push(filePath);
  }
  for (const filePath of pasteSources) {
    const source = read(filePath) || '';
    totalChecks++;
    pasteChecked++;
    for (const [re, why] of BANNED_PASTE) {
      if (re.test(source)) err(filePath, `BeInTheRoom paste ${why}`);
    }
  }

  sectionDone(`${linkedTargets.size} linked scenarios; ${v2Files.length} v2 scenarios; ${v1Wired} v1 scenarios classroom-aware; ${pasteChecked} pastes clean of version 1 coach wording`);
}

// 11b. Checkpoint 1 is independent, and stays that way.
//
// Checkpoint 1 became the lesson's unaided formative diagnostic on 2026-08-31.
// Coaching it before it is captured measures the coaching rather than the
// student, which is the whole reason it is the one written module with no
// Socrates on it.
//
// Nothing offline can see which conversation a student had, and nothing visible
// on the page would look wrong if a bridge came back: the card would simply have
// a button again, exactly as it did all last year. So the shape is asserted at
// the source, in both renderers, rather than remembered.
section('Checkpoint 1 is independent of Socrates');
{
  const renderers = [
    ['assets/js/behistorical-topic-renderer-v1.js', /msMode === 'Checkpoint 1' \? independentCheckpointNote\(\)/],
    ['foundations/foundations-topic-renderer.js', /\$\{independentCheckpointNote\(\)\}`\}/]
  ];
  for (const [rel, wired] of renderers) {
    const filePath = path.join(ROOT, rel);
    const source = read(filePath) || '';
    totalChecks++;
    if (!source.includes('function independentCheckpointNote')) {
      err(filePath, 'renderer has no independentCheckpointNote, Checkpoint 1 would render nothing in its place');
    } else if (!wired.test(source)) {
      err(filePath, 'Checkpoint 1 does not render the independent note, it may have regrown a coach bridge');
    }
    totalChecks++;
    if (/coachBridge\([^)]*Checkpoint 1/.test(source)) {
      err(filePath, 'Checkpoint 1 builds a coach bridge again, so it is no longer an independent diagnostic');
    }
  }
  sectionDone('both renderers keep Checkpoint 1 unaided');
}

// 12. Generated project inventory must agree with the completed filesystem.
section('Generated project status inventory');
{
  const manifestPath = path.join(ROOT, 'assets', 'data', 'project-status-manifest.js');
  totalChecks++;
  const manifest = read(manifestPath) || '';
  if (!manifest) err(manifestPath, 'generated project status manifest is missing or empty');
  if (/"beInTheRoom":\s*"missing"/.test(manifest)) err(manifestPath, 'generated inventory still reports missing BeInTheRoom work');
  if (/"beInTheRoom":\s*"broken-link"/.test(manifest)) err(manifestPath, 'generated inventory reports a broken BeInTheRoom link');
  sectionDone('61 built; 0 missing; 0 broken BeInTheRoom entries');
}

// 13. Every picture a student can see must exist and must be a real image.
//
// This section exists because the course once shipped eleven 21-byte text files
// named *.jpg. They passed a file-exists check and rendered as nothing.
section('Image integrity');
{
  const IMAGE_MAGIC = [
    { ext: 'jpg', bytes: [0xff, 0xd8, 0xff] },
    { ext: 'png', bytes: [0x89, 0x50, 0x4e, 0x47] },
    { ext: 'gif', bytes: [0x47, 0x49, 0x46, 0x38] },
    { ext: 'webp', bytes: [0x52, 0x49, 0x46, 0x46] }
  ];

  function isRealImage(file) {
    const buffer = fs.readFileSync(file);
    if (/\.svg$/i.test(file)) {
      return buffer.length > 80 && buffer.toString('utf8', 0, 400).includes('<svg');
    }
    return IMAGE_MAGIC.some((kind) => kind.bytes.every((byte, index) => buffer[index] === byte));
  }

  // Collect every local image reference the browser will actually request.
  const references = [];
  const IMAGE_EXT = /\.(svg|jpe?g|png|gif|webp)$/i;
  const addRef = (from, url) => {
    const raw = String(url || '').trim();
    if (!raw || /^https?:/i.test(raw) || raw.startsWith('data:')) return;
    if (raw.includes('${') || raw.includes('{{')) return;   // runtime-built src
    if (!IMAGE_EXT.test(raw.split(/[?#]/)[0])) return;      // not an image slot
    references.push({ from, url: raw, target: path.resolve(path.dirname(from), raw.split(/[?#]/)[0]) });
  };

  const htmlFiles = [];
  const walkHtml = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkHtml(full);
      else if (/\.html$/i.test(entry.name)) htmlFiles.push(full);
    }
  };
  walkHtml(ROOT);
  // assets/templates holds an uncopied page skeleton: its relative paths only
  // resolve once it has been copied into a unit-N folder.
  const scannedHtml = htmlFiles.filter((file) => !file.includes(`${path.sep}templates${path.sep}`));

  for (const file of scannedHtml) {
    const src = read(file) || '';
    for (const match of src.matchAll(/<img[^>]*?\ssrc=["']([^"']+)["']/gi)) addRef(file, match[1]);
    for (const match of src.matchAll(/--img:([^;"]+)/g)) {
      for (const layer of match[1].matchAll(/url\((['"]?)([^'")]+)\1\)/g)) addRef(file, layer[2]);
    }
  }

  // Lesson and Foundations data: map, lecture, and evidence pictures.
  const dataFiles = [
    ...glob(path.join(ROOT, 'assets', 'data'), /^lesson-\d+-\d+-.*\.js$/),
    ...glob(path.join(ROOT, 'foundations'), /-data\.js$/)
  ];
  for (const file of dataFiles) {
    const src = read(file) || '';
    for (const match of src.matchAll(/\b(?:url|sourceUrl)\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/g)) {
      // Data-file paths are written relative to the lesson page, one level down.
      const url = match[2];
      if (!url || /^https?:/i.test(url)) continue;
      if (!IMAGE_EXT.test(url.split(/[?#]/)[0])) continue;  // beInTheRoom urls point at pages
      references.push({ from: file, url, target: path.resolve(ROOT, 'unit-1', url.split(/[?#]/)[0]) });
    }
  }

  const seen = new Set();
  let checked = 0;
  for (const ref of references) {
    const key = `${ref.from}|${ref.url}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (/module-cards\//.test(ref.url)) {
      err(ref.from, `references the retired stub image directory: ${ref.url}`);
      continue;
    }
    if (!exists(ref.target)) {
      err(ref.from, `image file does not exist: ${ref.url}`);
      continue;
    }
    if (!isRealImage(ref.target)) {
      err(ref.from, `not a real image file, it will render as nothing: ${ref.url}`);
      continue;
    }
    checked++;
  }

  // Hub topic cards carry their artwork as two <img> layers: local art
  // underneath, the photograph on top with an onerror that removes itself. A
  // photograph on its own would leave an empty tile when the URL dies, and a
  // CSS custom property cannot be used here at all, because a relative url()
  // inside one resolves against the stylesheet's folder rather than the page.
  for (const file of scannedHtml.filter((f) => /(^|[\\/])index\.html$/i.test(f))) {
    const src = read(file) || '';
    if (src.includes('--img')) {
      err(file, 'hub card still uses --img; relative paths inside a custom property resolve against the stylesheet and 404');
    }
    for (const card of src.matchAll(/<a class="unit-card"[^>]*>([\s\S]*?)<div class="unit-content">/g)) {
      const layers = card[1];
      const art = layers.match(/class="card-art"\s+src="([^"]+)"/);
      const photo = layers.match(/class="card-photo"\s+src="([^"]+)"/);
      const label = (src.slice(card.index).match(/<div class="unit-num">([^<]*)</) || [, '?'])[1];
      if (!art) {
        err(file, `hub card ${label} has no local card-art layer`);
        continue;
      }
      if (/^https?:/i.test(art[1])) err(file, `hub card ${label} card-art layer must be local, got ${art[1]}`);
      if (photo && !/onerror=/.test(layers)) {
        err(file, `hub card ${label} has a photograph with no onerror fallback`);
      }
    }
  }

  // Generated local maps must be present for every slot that points at one.
  const mapDir = path.join(ROOT, 'assets', 'images', 'instructional-maps');
  totalChecks++;
  if (!exists(mapDir)) {
    err(mapDir, 'generated instructional maps are missing, run node scripts/build-instructional-maps.js');
  }

  // Every local SVG needs intrinsic dimensions. With only a viewBox, an <img>
  // holding it can be stretched by its container until object-fit letterboxes
  // the picture out of view, which is how a working image reads as a blank box.
  const svgFiles = [path.join(ROOT, 'assets', 'images', 'media-fallback.svg')];
  const walkSvg = (dir) => {
    if (!exists(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkSvg(full);
      else if (/\.svg$/.test(entry.name)) svgFiles.push(full);
    }
  };
  walkSvg(mapDir);
  walkSvg(path.join(ROOT, 'assets', 'images', 'module-art'));
  walkSvg(path.join(ROOT, 'assets', 'images', 'unit-1'));
  const unsized = svgFiles.filter(exists).filter((file) => {
    const tag = (fs.readFileSync(file, 'utf8').slice(0, 500).match(/<svg[^>]*>/) || [''])[0];
    return !/\swidth=/.test(tag) || !/\sheight=/.test(tag);
  });
  for (const file of unsized.slice(0, 5)) {
    err(file, 'SVG has no intrinsic width/height, so an <img> using it can be stretched off-screen');
  }
  if (unsized.length > 5) err(mapDir, `${unsized.length - 5} more SVGs are missing intrinsic width/height`);

  sectionDone(`${checked} local image references resolve to real image files`);
}

// ── Skills Lens inlined libraries ─────────────────────────────────────────────
// 14. A remote image filename must carry exactly one extension, at the end.
//
// This is the offline half of the image contract, and it exists because of a
// specific failure on 2026-09-01. A sweep that percent-encoded parentheses in
// 72 Commons filenames substituted each encoded name in for the *unencoded
// prefix*, which left the tail of the old name attached:
//
//   Khmer_Empire_1203_Map_%28cropped%29.png).png
//                                         ^^^^^
//
// Commons has no such file, so Topic 1.3's Map module drew its "did not load"
// fallback where the mainland map belongs, and five other pictures across four
// units went the same way in the same commit. Every check in this file stayed
// green, because nothing offline had ever looked at the shape of a remote URL:
// the Image integrity section above skips anything matching /^https?:/ by
// design, since it cannot stat a file on someone else's server.
//
// check-image-urls.js does catch this, and did not get the chance: it is
// nightly on purpose, because commons.wikimedia.org must never fail a commit.
// So a broken map reached students first and a teacher found it, which is the
// gap this section closes. It needs no network, because a filename carrying a
// second extension after the first is malformed on its face, whatever the host
// would have said about it.
//
// The rule is deliberately narrow: exactly one image extension, ending the
// name. All 431 remote Commons URLs in the repo satisfy it, so a hit is a
// corrupted name rather than an unusual one.
section('Remote image URLs are well formed');
{
  const IMAGE_EXT_ANY = /\.(svg|jpe?g|png|gif|tiff?|webp)/i;

  // Every place a remote picture can be named: quoted url:/sourceUrl: fields in
  // data and script files, and src=/href= attributes in pages. Walking the repo
  // rather than a typed file list, for the same reason the eBook tests read
  // VOLUMES: a list goes on reporting green while covering less each time
  // something new lands.
  const SKIP_DIRS = new Set(['node_modules', '.git', 'submissions', '.github']);
  const scanFiles = [];
  const walkAll = (dir) => {
    if (!exists(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (SKIP_DIRS.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkAll(full);
      else if (/\.(html|js)$/i.test(entry.name)) scanFiles.push(full);
    }
  };
  walkAll(ROOT);

  // A URL ends at a quote, whitespace, or a markup delimiter. It does NOT end
  // at the first ")", which is the trap: a percent-encoded name is allowed to
  // contain one, and truncating there hides the very corruption being hunted.
  const URL_RE = /https?:\/\/[^\s"'`<>\\]+/g;

  let malformed = 0;
  const reported = new Set();
  for (const file of scanFiles) {
    const src = read(file) || '';
    for (const match of src.matchAll(URL_RE)) {
      const url = match[0].replace(/[.,;:]+$/, '');
      const name = url.split(/[?#]/)[0].split('/').pop();
      if (!name || !IMAGE_EXT_ANY.test(name)) continue;

      const hit = name.match(IMAGE_EXT_ANY);
      const endsAtFirstExt = hit.index + hit[0].length === name.length;
      if (endsAtFirstExt) continue;

      totalChecks++;
      malformed++;
      const key = `${path.relative(ROOT, file)}|${name}`;
      if (reported.has(key)) continue;
      reported.add(key);
      err(file, `remote image filename carries a second extension, so it names no real file: ${name}`);
    }
  }

  totalChecks++;
  if (!scanFiles.length) {
    err(ROOT, 'found no pages to scan for remote image URLs, the walk is broken');
  }
  sectionDone(`${scanFiles.length} pages and scripts scanned for remote image URLs`);
}

//
// The Lens reads a Canvas zip in the browser, using the identical parser the
// command line uses. "Identical" is only true while the inlined copy matches
// scripts/lib/canvas-parse-core.js, and nothing about an out-of-date copy looks
// wrong on screen: the page still loads, still reads a zip, and still fills
// every panel. It just answers a slightly different question than the CLI does,
// and the first sign would be a handful of EDITED flags nobody can account for.
//
// The Lens used to carry one hand-copied function under a comment promising to
// keep it in step by hand. This section is what replaces that promise.
section('Skills Lens inlined libraries');
{
  const lens = path.join(ROOT, 'teacher', 'skills-lens.html');
  totalChecks++;
  const src = read(lens);
  if (!src) {
    err(lens, 'teacher/skills-lens.html is missing');
  } else {
    let build;
    try { build = require('./build-skills-lens'); } catch (e) { build = null; }
    if (!build) {
      err(lens, 'scripts/build-skills-lens.js is missing, so the inlined copy cannot be checked');
    } else {
      const start = src.indexOf(build.OPEN);
      const end = src.indexOf(build.CLOSE);
      if (start === -1 || end === -1) {
        err(lens, 'the inline-libs sentinels are gone, run node scripts/build-skills-lens.js');
      } else {
        // Re-derive the block from source and compare. Same computation the
        // builder does, so there is no second implementation to drift either.
        const wanted = build.LIBS.map(rel => {
          const lib = read(path.join(ROOT, rel));
          return `<script>\n/* ${rel}\n   Generated copy. Edit the source and run: node scripts/build-skills-lens.js */\n${lib}</script>`;
        });
        const expected = [build.OPEN].concat(wanted).concat([build.CLOSE]).join('\n');
        if (src.slice(start, end + build.CLOSE.length) !== expected) {
          err(lens, 'its inlined copy of the shared parser has drifted from scripts/lib/, run node scripts/build-skills-lens.js');
        }
      }
      // The whole privacy argument rests on this page being unable to reach the
      // network. A zip reader that needed fetch would have quietly required
      // loosening it, so the policy is asserted rather than assumed.
      totalChecks++;
      if (!/connect-src 'none'/.test(src) || !/default-src 'none'/.test(src)) {
        err(lens, "lost its `default-src 'none'; connect-src 'none'` policy, so student work could leave the page");
      }
      // A teacher tool, never linked from anything a student opens.
      for (const file of [...lessonShells, ...unitFirst10, ...fHtmlFiles]) {
        const page = read(file);
        totalChecks++;
        if (page && page.includes('skills-lens')) {
          err(file, 'links the teacher Skills Lens from a student-facing page');
        }
      }
    }
    sectionDone(`${build ? build.LIBS.length : 0} inlined libraries match their source; page is network-locked and unlinked from student pages`);
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(60)}`);
console.log(`${W}Summary${X}  |  ${totalChecks} files checked`);
if (totalErrors === 0 && totalWarnings === 0) {
  console.log(`${G}${W}All checks passed.${X}`);
} else {
  if (totalErrors > 0)   console.log(`  ${R}${W}${totalErrors} error(s)${X} , must fix before deploying`);
  if (totalWarnings > 0) console.log(`  ${Y}${totalWarnings} warning(s)${X}, should fix before class`);
}
console.log('');
process.exit(totalErrors > 0 ? 1 : 0);
