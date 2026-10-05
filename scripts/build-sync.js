#!/usr/bin/env node
/**
 * build-sync.js
 *
 * Inlines the student response backup, its on/off configuration and the engine
 * in `assets/js/behistorical-sync.js`, into both lesson renderers between
 * sentinels, the same way `build-save-health.js` inlines the save counter and
 * for the same reason: another `<script src>` would be a sweep across hundreds
 * of hand-authored shells, and a sweep is permanent maintenance debt.
 *
 * TWO THINGS ARE INLINED, IN THIS ORDER
 *
 *   1. `window.BH_SYNC_CONFIG`, generated from `scripts/lib/sync-config.js`.
 *      That file is where the backup is switched on, so the switch is one
 *      reviewable line in one place and cannot differ between the two renderers.
 *   2. The engine, `assets/js/behistorical-sync.js`, unchanged.
 *
 * What is NOT inlined is `assets/js/behistorical-sync-transport.js`, the part
 * that talks to Google. The engine loads it on demand, and only when the backup
 * is on, so a student with it off never downloads it or contacts Google.
 *
 * `--check` re-derives the block and fails if a renderer's copy no longer
 * matches. `validate.js` and the offline suite run that on every push. Never
 * hand-edit between the sentinels.
 *
 * Usage: node scripts/build-sync.js [--check]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ENGINE = path.join(ROOT, 'assets', 'js', 'behistorical-sync.js');
const CONFIG = require('./lib/sync-config.js');

const TARGETS = [
  path.join(ROOT, 'assets', 'js', 'behistorical-topic-renderer-v1.js'),
  path.join(ROOT, 'foundations', 'foundations-topic-renderer.js')
];
const CHECK = process.argv.includes('--check');

const OPEN = '// ── BEGIN INLINED SYNC ──────────────────────────────────────────────────────';
const CLOSE = '// ── END INLINED SYNC ────────────────────────────────────────────────────────';

function inlinedBlock() {
  const engine = fs.readFileSync(ENGINE, 'utf8').trimEnd();
  const config = JSON.stringify(CONFIG, null, 2);
  return [
    OPEN,
    '//',
    '// Derived from scripts/lib/sync-config.js and assets/js/behistorical-sync.js by',
    '// scripts/build-sync.js. Do not hand-edit: the offline suite re-derives this',
    '// block and fails the push on drift. Change the source and rebuild.',
    '//',
    '// The backup is OFF unless `enabled` (or, for one browser, `pilot`) says',
    '// otherwise in scripts/lib/sync-config.js.',
    'window.BH_SYNC_CONFIG = Object.freeze(' + config + ');',
    engine,
    CLOSE
  ].join('\n');
}

let drift = 0;
let wrote = 0;

for (const TARGET of TARGETS) {
  const rel = path.relative(ROOT, TARGET);
  const target = fs.readFileSync(TARGET, 'utf8');
  const start = target.indexOf(OPEN);
  const end = target.indexOf(CLOSE);

  if (start === -1 || end === -1) {
    console.error(`FAIL ${rel} has no sync sentinels.`);
    console.error('Add these two lines around the inlined region, then rebuild:');
    console.error(`  ${OPEN}`);
    console.error(`  ${CLOSE}`);
    process.exit(1);
  }

  const rebuilt = target.slice(0, start) + inlinedBlock() + target.slice(end + CLOSE.length);

  if (CHECK) {
    if (rebuilt !== target) {
      console.error(`DRIFT ${rel}: the inlined sync block no longer matches`
        + ' scripts/lib/sync-config.js and assets/js/behistorical-sync.js.');
      drift++;
    }
  } else if (rebuilt !== target) {
    fs.writeFileSync(TARGET, rebuilt);
    wrote++;
    console.log(`wrote ${rel}`);
  }
}

if (CHECK) {
  if (drift) {
    console.error('Run: node scripts/build-sync.js');
    process.exit(1);
  }
  console.log(`sync: ${TARGETS.length} inlined copies match the engine and its config`);
} else {
  console.log(wrote ? `updated ${wrote} file(s)` : 'sync: already current');
}
