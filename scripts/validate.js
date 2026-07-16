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
const vm   = require('vm');

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
  const re = /'([\d.]+|f\d+|foundations-\d+)'\s*:/g;
  let m;
  while ((m = re.exec(src)) !== null) keys.add(m[1]);
  return keys;
}

function loadFormContext() {
  const filePath = path.join(ROOT, 'assets/js/behistorical-form-config.js');
  const src = read(filePath);
  if (!src) return null;
  const context = { URLSearchParams };
  context.window = context;
  try {
    vm.runInNewContext(src, context, { filename: filePath });
    return context;
  } catch (error) {
    err(filePath, `could not evaluate form configuration: ${error.message}`);
    return null;
  }
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
  const visualMarkers = ['class="module"', 'class="reading-title-band"', 'class="vocab-strip"', 'class="check-header"', 'class="builder-section"'];
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

  // Textarea count — treat qta and q-textarea as class tokens so multi-class
  // attributes such as class="q-textarea qta" are recognized correctly.
  const responseTextareas = [...src.matchAll(/<textarea\b[^>]*class=["'][^"']*\b(?:qta|q-textarea)\b[^"']*["'][^>]*>/g)];
  const qtaCount = responseTextareas.length;
  if (qtaCount < 3) warn(filePath, `${qtaCount} response textarea(s) found — expected at least 3`);

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

  // BH_FORM URL pattern
  if (!src.includes('BH_FORM') && !src.includes('buildFormURL')) {
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

  // beSurreal — required per 10-module standard
  if (!src.includes('beSurreal:')) {
    err(filePath, "missing 'beSurreal' field — required by 10-module standard (needs title/desc/intro/detail/prompt)");
  }

  // first10.embedUrl must point to a capture wrapper, not a standalone file
  const embedMatch = src.match(/embedUrl\s*:\s*['"]([^'"]+)['"]/);
  if (embedMatch) {
    if (!embedMatch[1].endsWith('-capture.html')) {
      err(filePath, `embedUrl '${embedMatch[1]}' must end with -capture.html (not a standalone HTML file)`);
    }
    const captureTarget = path.join(path.dirname(filePath), embedMatch[1]);
    if (!exists(captureTarget)) {
      err(filePath, `embedUrl target not found on disk: ${embedMatch[1]}`);
    }
  } else if (src.includes("paragraphs:")) {
    err(filePath, "first10 uses inline paragraphs array — must use embedUrl pointing to a capture wrapper");
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
section('Foundations renderer — 10-module standard');
{
  totalChecks++;
  const CANONICAL_IDS = ['map','first10','contentdelivery','besurreal','skill','checkpoint1','evidence','coach','beintheroom','checkpoint2'];
  const rendSrc = read(path.join(foundationsDir, 'foundations-topic-renderer.js'));
  if (!rendSrc) {
    err(path.join(foundationsDir, 'foundations-topic-renderer.js'), 'renderer not readable');
  } else {
    const found = [...rendSrc.matchAll(/\{id:'([^']+)'/g)].map(m => m[1]).filter(id => CANONICAL_IDS.includes(id));
    if (found.length !== 10) {
      err(path.join(foundationsDir, 'foundations-topic-renderer.js'), `module count: expected 10, found ${found.length} canonical IDs — ${JSON.stringify(found)}`);
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

// 9. Complete form-skill mapping audit
section('Google Form skill mappings');
{
  totalChecks++;
  const formContext = loadFormContext();
  if (formContext) {
    const form = formContext.BH_FORM;
    const requiredResponseTypes = [
      'first10', 'skillBuilder', 'checkpoint1', 'evidenceLab',
      'primarySource', 'beInTheRoom', 'checkpoint2'
    ];
    const validSkills = new Set([
      'Causation', 'Comparison', 'Continuity and Change Over Time (CCOT)',
      'Contextualization', 'Argumentation', 'Evidence Usage', 'Sourcing',
      'Complexity', 'Claims & Thesis'
    ]);
    const lessonTopics = Object.keys(form.topics)
      .filter((topicKey) => /^\d+\.\d+$/.test(topicKey) || /^f\d+$/.test(topicKey))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const standaloneFirst10 = [...unitFirst10, ...fFirst10]
      .filter((filePath) => !path.basename(filePath).includes('-capture'));

    for (const topicKey of lessonTopics) {
      const mapping = form.skills && form.skills[topicKey];
      if (!mapping) {
        err(path.join(ROOT, 'assets/js/behistorical-form-config.js'), `missing skill mapping for Topic ${topicKey}`);
        continue;
      }
      for (const responseType of requiredResponseTypes) {
        const skills = mapping[responseType];
        if (!Array.isArray(skills) || skills.length === 0) {
          err(path.join(ROOT, 'assets/js/behistorical-form-config.js'), `Topic ${topicKey} missing non-empty ${responseType} skill mapping`);
          continue;
        }
        for (const skill of skills) {
          if (!validSkills.has(skill)) {
            err(path.join(ROOT, 'assets/js/behistorical-form-config.js'), `Topic ${topicKey} ${responseType} uses invalid skill '${skill}'`);
          }
        }
      }

      const topicPrefix = /^f\d+$/.test(topicKey)
        ? `first-and-10-foundations-${topicKey.slice(1)}-`
        : `first-and-10-topic-${topicKey.replace('.', '-')}-`;
      const first10File = standaloneFirst10.find((filePath) => path.basename(filePath).startsWith(topicPrefix));
      const first10Source = first10File && read(first10File);
      if (!first10Source) {
        err(path.join(ROOT, 'assets/js/behistorical-form-config.js'), `could not locate First & 10 page for Topic ${topicKey}`);
      } else {
        const displayedSkills = [];
        for (const match of first10Source.matchAll(/<span class="q-skill">([^<]+)<\/span>/g)) {
          for (const skill of normalizeDisplayedSkill(match[1], topicKey, form.topics[topicKey])) {
            if (validSkills.has(skill) && !displayedSkills.includes(skill)) displayedSkills.push(skill);
          }
        }
        if (JSON.stringify(mapping.first10) !== JSON.stringify(displayedSkills)) {
          err(first10File, `First & 10 form skills ${JSON.stringify(mapping.first10)} do not match displayed skills ${JSON.stringify(displayedSkills)}`);
        }
      }
    }
    sectionDone(`${lessonTopics.length} topic mappings`);
  }
}

// 10. Capture wrappers must carry the exact centrally generated First & 10 URL
section('First & 10 capture-wrapper form wiring');
{
  const formContext = loadFormContext();
  const captureFiles = [...unitFirst10, ...fFirst10]
    .filter((filePath) => path.basename(filePath).includes('-capture'));
  for (const filePath of captureFiles) {
    totalChecks++;
    const source = read(filePath);
    const fileName = path.basename(filePath);
    const topicMatch = fileName.match(/^first-and-10-topic-(\d+)-(\d+)-.*-capture\.html$/);
    const foundationMatch = fileName.match(/^first-and-10-foundations-(\d+)-.*-capture\.html$/);
    if (!source || (!topicMatch && !foundationMatch)) {
      err(filePath, 'capture wrapper is unreadable or has an invalid topic filename');
      continue;
    }
    const topicKey = topicMatch ? `${topicMatch[1]}.${topicMatch[2]}` : `f${foundationMatch[1]}`;
    const constantMatch = source.match(/const\s+PREFILLED_FIRST10_FORM\s*=\s*['"]([^'"]+)['"]/);
    if (!constantMatch) {
      err(filePath, 'missing PREFILLED_FIRST10_FORM constant');
      continue;
    }
    if (formContext) {
      const expected = formContext.buildFormURL(topicKey, 'first10');
      if (constantMatch[1] !== expected) {
        err(filePath, `prefilled URL does not match central form configuration for Topic ${topicKey}`);
      }
    }
    const prefilledReferences = source.match(/PREFILLED_FIRST10_FORM/g) || [];
    if (prefilledReferences.length < 2) {
      err(filePath, 'capture wiring does not use PREFILLED_FIRST10_FORM');
    }
  }
  sectionDone(`${captureFiles.length} capture wrappers`);
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
  sectionDone(`${linkedTargets.size} linked scenarios; ${v2Files.length} v2 scenarios`);
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
