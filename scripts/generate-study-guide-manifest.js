#!/usr/bin/env node
/**
 * generate-study-guide-manifest.js
 *
 * Builds assets/data/study-guide-manifest.js , a plain
 * window.STUDY_GUIDE_MANIFEST global consumed by study-guide.html .
 *
 * The personalized study guide never re-parses the 71 lesson data files at
 * runtime. Instead this script executes each topic's data file + renderer
 * config together (the same load order the browser uses) inside a minimal
 * DOM/window sandbox, harvests the AP taxonomy already stored there, and
 * writes one compact per-unit inventory:
 *
 *   - success criteria (the "I can ..." statements students self-assess)
 *   - College Board key concepts + illustrative examples (facts to review)
 *   - checkpoint vocabulary (the must-know terms)
 *   - the AP reasoning skills the unit practices (from behistorical-form-config.js)
 *   - a deep link back to each lesson shell
 *
 * study-guide.html turns a student's "still shaky" selections into a
 * MagicSchool AI-coach prompt, so the assembly logic lives in data, not in
 * the page. This mirrors generate-status-manifest.js: deterministic,
 * re-runnable, and validated by scripts/validate.js pathways.
 *
 * Usage: node scripts/generate-study-guide-manifest.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT = path.resolve(__dirname, '..');

const MAGICSCHOOL_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';

function read(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } }
function exists(p) { return fs.existsSync(p); }
function glob(dir, re) {
  if (!exists(dir)) return [];
  return fs.readdirSync(dir).filter(f => re.test(f));
}
function uniq(arr) { return [...new Set(arr.filter(Boolean))]; }

// ── Minimal DOM/window sandbox ──────────────────────────────────────────────
// Lesson data files open with a branding IIFE that touches document; renderer
// configs mutate window.BEHISTORICAL_LESSON. We only need the resulting data,
// so every DOM call is a no-op and every query returns "not found".
function makeEl() {
  const store = {};
  return new Proxy(store, {
    get(t, k) {
      if (k in t) return t[k];
      if (k === 'style' || k === 'dataset' || k === 'classList') { t[k] = makeEl(); return t[k]; }
      // Any method (appendChild, setAttribute, insertBefore, ...) is a no-op
      // that echoes back a node so chained calls keep working.
      return (...args) => (args[0] && typeof args[0] === 'object') ? args[0] : makeEl();
    },
    set(t, k, v) { t[k] = v; return true; },
  });
}

function makeContext() {
  const documentStub = new Proxy({}, {
    get(t, k) {
      if (k === 'querySelectorAll') return () => [];
      if (k === 'querySelector' || k === 'getElementById') return () => null;
      if (k === 'createElement' || k === 'createElementNS') return () => makeEl();
      if (k === 'head' || k === 'body' || k === 'documentElement') {
        if (!t[k]) t[k] = makeEl();
        return t[k];
      }
      if (k === 'addEventListener' || k === 'removeEventListener') return () => {};
      if (k in t) return t[k];
      return () => {};
    },
    set(t, k, v) { t[k] = v; return true; },
  });

  const context = {
    document: documentStub,
    URLSearchParams,
    console: { log() {}, warn() {}, error() {} },
    location: { href: '', search: '' },
    navigator: { userAgent: 'node' },
    setTimeout: () => {},
  };
  context.window = context;
  return context;
}

// Execute the data file then the renderer config in one sandbox and return the
// assembled window.BEHISTORICAL_LESSON (or null if the topic could not load).
function loadLesson(dataPath, rcPath) {
  const context = makeContext();
  vm.createContext(context);
  for (const p of [dataPath, rcPath]) {
    if (!p) continue;
    const src = read(p);
    if (!src) continue;
    try {
      vm.runInContext(src, context, { filename: p });
    } catch (error) {
      console.warn(`  ! ${path.relative(ROOT, p)}: ${error.message}`);
      return null;
    }
  }
  return context.window.BEHISTORICAL_LESSON || null;
}

// ── Load the AP skill map from the central form config ──────────────────────
function loadFormSkills() {
  const filePath = path.join(ROOT, 'assets/js/behistorical-form-config.js');
  const src = read(filePath);
  if (!src) return {};
  const context = { URLSearchParams };
  context.window = context;
  try {
    vm.runInNewContext(src, context, { filename: filePath });
    return (context.BH_FORM && context.BH_FORM.skills) || {};
  } catch (error) {
    console.warn(`  ! could not evaluate form config: ${error.message}`);
    return {};
  }
}

// ── Parse a unit hub page for its planned topic list ────────────────────────
function parseUnitTopics(unitNum) {
  const src = read(path.join(ROOT, `unit-${unitNum}`, 'index.html'));
  if (!src) return [];
  const cardRe = /<div class="unit-num">TOPIC ([\d.]+)<\/div>\s*<h3>([^<]+)<\/h3>/g;
  const topics = [];
  let m;
  while ((m = cardRe.exec(src)) !== null) topics.push({ num: m[1], title: m[2].trim() });
  return topics;
}

function unitTitle(unitNum) {
  const src = read(path.join(ROOT, `unit-${unitNum}`, 'index.html')) || '';
  const m = src.match(/<div class="center">[\s\S]*?<h2>([^<]+)<\/h2>/);
  return m ? m[1].trim() : `Unit ${unitNum}`;
}

// ── Harvest one topic into a study-guide record ─────────────────────────────
function harvestTopic(unitNum, topicNum, hubTitle, formSkills) {
  const [, minor] = topicNum.split('.');
  const unitDir = path.join(ROOT, `unit-${unitNum}`);
  const dataDir = path.join(ROOT, 'assets/data');

  const shell = glob(unitDir, new RegExp(`^lesson-${unitNum}-${minor}-.*\\.html$`))[0] || null;
  const dataFile = glob(dataDir, new RegExp(`^lesson-${unitNum}-${minor}-(?!renderer-config).*\\.js$`))
    .filter(f => !f.endsWith('-standards-addon.js'))[0] || null;
  const rc = `lesson-${unitNum}-${minor}-renderer-config.js`;
  const rcFile = exists(path.join(dataDir, rc)) ? rc : null;

  if (!dataFile) return null;

  const lesson = loadLesson(
    path.join(dataDir, dataFile),
    rcFile ? path.join(dataDir, rcFile) : null,
  );
  if (!lesson) return null;

  const criteria = (lesson.successCriteria || []).map(sc => ({
    text: sc.criteria || sc.text || '',
    theme: sc.theme || '',
    kc: sc.kc || '',
  })).filter(c => c.text);

  const keyConcepts = (lesson.collegeBoardKeyConcepts || []).map(kc => ({
    code: kc.code || '',
    theme: kc.theme || '',
    text: kc.text || '',
    examples: Array.isArray(kc.illustrativeExamples) ? kc.illustrativeExamples : [],
  })).filter(kc => kc.code || kc.text);

  const terms = uniq((lesson.checkpoints || []).flatMap(cp => cp.terms || []));

  const skillMap = formSkills[topicNum] || {};
  const skills = uniq(Object.values(skillMap).flat());

  const themes = uniq([
    ...criteria.map(c => c.theme),
    ...keyConcepts.map(k => k.theme),
  ]);

  return {
    key: topicNum,
    num: topicNum,
    title: (lesson.meta && lesson.meta.title) || hubTitle,
    lessonUrl: shell ? `unit-${unitNum}/${shell}` : null,
    themes,
    skills,
    criteria,
    keyConcepts,
    terms,
  };
}

// ── Build the manifest ──────────────────────────────────────────────────────
const formSkills = loadFormSkills();
const manifest = {
  generatedAt: new Date().toISOString(),
  magicSchoolUrl: MAGICSCHOOL_URL,
  units: [],
};

let topicCount = 0;
for (let u = 1; u <= 9; u++) {
  const topics = parseUnitTopics(u)
    .map(t => harvestTopic(u, t.num, t.title, formSkills))
    .filter(Boolean);
  topicCount += topics.length;
  manifest.units.push({ num: u, title: unitTitle(u), topics });
}

const out = `// AUTO-GENERATED by scripts/generate-study-guide-manifest.js, do not hand-edit.
// Regenerate: node scripts/generate-study-guide-manifest.js
window.STUDY_GUIDE_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;

const outPath = path.join(ROOT, 'assets/data/study-guide-manifest.js');
fs.writeFileSync(outPath, out);

console.log(`Wrote ${path.relative(ROOT, outPath)}`);
console.log(`${topicCount} topics harvested across ${manifest.units.length} units.`);
