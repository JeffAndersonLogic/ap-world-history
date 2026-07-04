#!/usr/bin/env node
/**
 * fix-unit4-5-first10.js
 *
 * One-time correction script for the known Unit 4/5 First & 10 validator
 * errors documented in PROJECT_STATUS.md:
 *   - missing var TOPIC_KEY
 *   - missing var TOPIC_LABEL
 *   - behistorical-form-config.js not loaded
 * Also repairs the stub submitToGoogleForm() so the raw file works correctly
 * on its own (defense-in-depth, matching the Unit 1 pattern), not just when
 * wrapped by the -capture.html iframe wrapper.
 *
 * Usage:
 *   node scripts/fix-unit4-5-first10.js           # apply fixes
 *   node scripts/fix-unit4-5-first10.js --dry-run # preview only, no writes
 *
 * Safe to re-run: every check is idempotent (skips files already fixed).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');
const TARGET_UNITS = [4, 5];

// ---- 1. Load TOPIC_KEY -> TOPIC_LABEL map from the single source of truth ----
const formConfigPath = path.join(ROOT, 'assets/js/behistorical-form-config.js');
const formConfigSrc = fs.readFileSync(formConfigPath, 'utf8');
const topicMap = {};
const topicRe = /'(\d+\.\d+)':\s*'([^']+)'/g;
let m;
while ((m = topicRe.exec(formConfigSrc)) !== null) {
  topicMap[m[1]] = m[2];
}

// ---- 2. Collect target files ----
const files = [];
for (const unit of TARGET_UNITS) {
  const dir = path.join(ROOT, `unit-${unit}`);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (/^first-and-10-topic-\d+-\d+.*\.html$/.test(f) && !f.endsWith('-capture.html')) {
      files.push(path.join(dir, f));
    }
  }
}

console.log(`Found ${files.length} target First & 10 files across unit-${TARGET_UNITS.join(', unit-')}\n`);

let fixedCount = 0;
let skippedCount = 0;

for (const filePath of files) {
  const relPath = path.relative(ROOT, filePath);
  const fileName = path.basename(filePath);

  // Derive TOPIC_KEY from filename: first-and-10-topic-4-1-...html -> "4.1"
  const keyMatch = fileName.match(/^first-and-10-topic-(\d+)-(\d+)-/);
  if (!keyMatch) {
    console.log(`  ⚠ ${relPath}: could not derive topic key from filename, skipping`);
    skippedCount++;
    continue;
  }
  const topicKey = `${keyMatch[1]}.${keyMatch[2]}`;
  const topicLabel = topicMap[topicKey];
  if (!topicLabel) {
    console.log(`  ⚠ ${relPath}: no entry for '${topicKey}' in behistorical-form-config.js, skipping`);
    skippedCount++;
    continue;
  }

  let src = fs.readFileSync(filePath, 'utf8');
  const original = src;
  const changes = [];

  // --- Fix A: insert form-config script tag before the inline <script> block ---
  if (!src.includes('behistorical-form-config.js')) {
    const scriptTagRe = /<script>/; // first bare <script> block in these files
    if (scriptTagRe.test(src)) {
      src = src.replace(
        scriptTagRe,
        `<script src="../assets/js/behistorical-form-config.js?v=unified-v2"></script>\n<script>`
      );
      changes.push('added behistorical-form-config.js script tag');
    } else {
      console.log(`  ⚠ ${relPath}: no <script> block found, skipping script-tag fix`);
    }
  }

  // --- Fix B: insert TOPIC_KEY / TOPIC_LABEL as first line of the inline script ---
  if (!/var\s+TOPIC_KEY\s*=/.test(src)) {
    src = src.replace(
      /<script>\n/,
      `<script>\nvar TOPIC_KEY='${topicKey}';var TOPIC_LABEL='${topicLabel.replace(/'/g, "\\'")}';\n`
    );
    changes.push(`added TOPIC_KEY='${topicKey}' / TOPIC_LABEL`);
  }

  // --- Fix C: repair the stub submitToGoogleForm() to actually build the form URL ---
  const stubRe = /function submitToGoogleForm\(\)\s*\{\s*buildGooglePrompt\(\);\s*\/\/ intercepted by capture wrapper\s*\}/;
  if (stubRe.test(src)) {
    src = src.replace(
      stubRe,
      `function submitToGoogleForm() {
  buildGooglePrompt();
  var content = document.getElementById('google-output') ? document.getElementById('google-output').value : '';
  if (content) { try { navigator.clipboard.writeText(content); } catch(e) {} }
  var u = (window.BH_FORM && typeof buildFormURL === 'function') ? buildFormURL(TOPIC_KEY, 'first10') : '';
  if (u) window.open(u, '_blank', 'noopener');
}`
    );
    changes.push('replaced stub submitToGoogleForm() with real BH_FORM.buildFormURL() call');
  }

  if (changes.length === 0) {
    console.log(`  – ${relPath}: already correct, no changes needed`);
    skippedCount++;
    continue;
  }

  console.log(`  ✓ ${relPath} [${topicKey}]`);
  changes.forEach(c => console.log(`      - ${c}`));

  if (!DRY_RUN && src !== original) {
    fs.writeFileSync(filePath, src, 'utf8');
    fixedCount++;
  } else if (DRY_RUN) {
    fixedCount++;
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] Would fix' : 'Fixed'} ${fixedCount} file(s). Skipped ${skippedCount}.`);
if (DRY_RUN) console.log('Re-run without --dry-run to apply.');
