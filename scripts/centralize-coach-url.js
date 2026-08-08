#!/usr/bin/env node
/**
 * centralize-coach-url.js
 *
 * Removes every literal MagicSchool joinCode from the repository and routes all
 * coach buttons through `assets/js/behistorical-coach-config.js`.
 *
 * Idempotent. Run it as often as you like; a second run reports 0 changes.
 *
 * Why this exists: the join code was pasted into 249 files in four different
 * shapes, and five generator scripts had it baked in, so `build-unit6.js` or
 * `build-unit9.js` would paste it straight back after any manual cleanup. The
 * only durable fix is one constant, a re-normalizer, and a validator rule.
 *
 * The shapes it rewrites:
 *   1. capture wrappers  const MAGICSCHOOL_URL = '<url>';
 *   2. raw anchors       <a ... href="<url>" ...>
 *   3. inline handlers   window.open('<url>', ...)
 *   4. lesson data       feedbackToolUrl: "<url>"
 *   5. renderer defaults '<url>' as an || fallback
 *   6. generator scripts const COACH = '<url>'
 *
 * Run it after any generator (`build-unit6.js`, `build-unit9.js`,
 * `build-canvas-packets.js`, `normalize-student-facing-language.js`), the same
 * way `remove-google-form-capture.js` is run after anything that touches a
 * wrapper. `validate.js` fails the build if a literal survives.
 *
 * Usage:
 *   node scripts/centralize-coach-url.js          apply
 *   node scripts/centralize-coach-url.js --check  report only, exit 1 if work remains
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CHECK_ONLY = process.argv.includes('--check');

/** Bare URL, no quotes. Non-global so .test() has no lastIndex state. */
const BARE = /https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[A-Za-z0-9]+/;
const BARE_G = new RegExp(BARE.source, 'g');
/** The same URL wrapped in a matched pair of quotes. */
const QUOTED_G = /(['"])https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[A-Za-z0-9]+\1/g;

const FALLBACK = 'https://www.magicschool.ai/';
const CONFIG_REL = 'assets/js/behistorical-coach-config.js';
const CONFIG_BASENAME = 'behistorical-coach-config.js';
const RUNTIME_URL = `(typeof window !== 'undefined' && window.BH_COACH_URL) || '${FALLBACK}'`;

/** The only files permitted to contain a literal join code. */
const ALLOWED = new Set([
  'assets/js/behistorical-coach-config.js',
  'scripts/centralize-coach-url.js',
]);

const EXTS = new Set(['.html', '.js', '.md']);

let changed = 0;
let scanned = 0;
const touched = [];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const rel = (file) => path.relative(ROOT, file).split(path.sep).join('/');
const depthOf = (r) => r.split('/').length - 1;

/** Relative href from an HTML file to the config script. */
function configHref(r) {
  const d = depthOf(r);
  return d === 0 ? CONFIG_REL : '../'.repeat(d) + CONFIG_REL;
}

/** Relative require path from a node script to the config module. */
function configRequire(r) {
  const d = depthOf(r);
  return '../'.repeat(d) + CONFIG_REL;
}

/**
 * Insert the config <script> so it runs before anything reading
 * window.BH_COACH_URL: before the first existing <script>, else before </body>.
 */
function ensureConfigScript(source, r) {
  if (source.includes(CONFIG_BASENAME)) return source;
  const tag = `<script src="${configHref(r)}"></script>`;

  const m = source.match(/<script\b/i);
  if (m) {
    const at = source.indexOf(m[0]);
    return source.slice(0, at) + tag + source.slice(at);
  }
  const close = source.search(/<\/body>/i);
  if (close !== -1) return source.slice(0, close) + tag + source.slice(close);
  return source + tag;
}

function rewriteHtml(source, r) {
  let out = source;

  // 1. Capture-wrapper constant.
  out = out.replace(
    /(const\s+MAGICSCHOOL_URL\s*=\s*)(['"])https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[A-Za-z0-9]+\2/g,
    '$1window.BH_COACH_URL'
  );

  // 2. Raw anchors: opt into the wiring, leave the generic front door as the
  //    no-JS fallback so the button still goes somewhere sensible.
  out = out.replace(
    /href=(['"])https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[A-Za-z0-9]+\1/g,
    `data-bh-coach href="${FALLBACK}"`
  );

  // 3. Inline window.open handlers.
  out = out.replace(
    /window\.open\(\s*(['"])https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[A-Za-z0-9]+\1/g,
    'window.open(window.BH_COACH_URL'
  );

  const needsConfig =
    out !== source ||
    /behistorical-topic-renderer-v1\.js|foundations-topic-renderer\.js|behistorical-room-v2\.js/.test(out);

  return needsConfig ? ensureConfigScript(out, r) : out;
}

function rewriteJs(source, r) {
  // Lesson data: blank every override, whichever shape it takes. Seen in the
  // wild as `feedbackToolUrl: "<url>"`, `lesson.meta.feedbackToolUrl = '<url>'`
  // and `magicSchoolUrl: '<url>'`. The renderer's fallback now resolves through
  // the config, so any per-lesson copy would reopen the 85-file problem.
  if (r.startsWith('assets/data/')) {
    return source.replace(QUOTED_G, '""');
  }

  // room-v2 builds markup in a template literal, so the URL sits bare in HTML.
  if (r === 'assets/js/behistorical-room-v2.js') {
    return source.replace(BARE_G, '${' + RUNTIME_URL + '}');
  }

  // Renderers: swap the whole quoted literal for a runtime lookup.
  if (r.startsWith('assets/js/')) {
    return source.replace(QUOTED_G, RUNTIME_URL);
  }

  // Generator scripts read the constant from the config module.
  if (r.startsWith('scripts/')) {
    return source.replace(QUOTED_G, `require('${configRequire(r)}').RESOLVED`);
  }

  return source;
}

function processFile(file) {
  const r = rel(file);
  if (ALLOWED.has(r)) return;

  const ext = path.extname(file);
  if (!EXTS.has(ext)) return;

  let source;
  try {
    source = fs.readFileSync(file, 'utf8');
  } catch {
    return;
  }
  scanned++;

  // HTML always gets inspected: shells carry no literal but still need the
  // config script, because the renderer they load now reads window.BH_COACH_URL.
  if (!BARE.test(source) && ext !== '.html') return;

  let out = source;
  if (ext === '.html') out = rewriteHtml(out, r);
  else if (ext === '.js') out = rewriteJs(out, r);
  else if (ext === '.md') out = out.replace(BARE_G, `<resolved from ${CONFIG_REL}>`);

  if (out === source) return;

  changed++;
  touched.push(r);
  if (!CHECK_ONLY) fs.writeFileSync(file, out, 'utf8');
}

for (const file of walk(ROOT)) processFile(file);

// Re-read from disk and report anything that survived.
const survivors = [];
for (const file of walk(ROOT)) {
  const r = rel(file);
  if (ALLOWED.has(r) || !EXTS.has(path.extname(file))) continue;
  let source;
  try {
    source = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  if (BARE.test(source)) survivors.push(r);
}

console.log(`scanned ${scanned} files`);
console.log(`${CHECK_ONLY ? 'would change' : 'changed'} ${changed} files`);

if (!CHECK_ONLY && survivors.length) {
  console.log(`\nLITERAL JOIN CODE STILL PRESENT IN ${survivors.length} FILES:`);
  for (const s of survivors.slice(0, 20)) console.log(`  ${s}`);
  process.exit(1);
}
if (!survivors.length) console.log('no literal join code outside the config file');
if (CHECK_ONLY && changed > 0) process.exit(1);
