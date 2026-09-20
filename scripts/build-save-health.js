#!/usr/bin/env node
/**
 * build-save-health.js
 *
 * Inlines `assets/js/behistorical-save-health.js` into both lesson renderers
 * between sentinels, exactly the way `build-coach-prompt.js` inlines the coach
 * prompt builder and for the same reason.
 *
 * WHY INLINE RATHER THAN ADD A SCRIPT TAG
 *
 * The alternative is another `<script src>` in all 77 lesson shells plus the
 * Foundations shells. That is a sweep across hand-authored HTML, and every
 * sweep script in this repository is permanent maintenance debt that can only
 * fix a problem someone already knows about. Both renderers are already loaded
 * by every lesson page, so inlining reaches all of them with no shell change.
 *
 * The cost is a derived copy, which is the thing this subsystem exists to
 * avoid, so it is a *checked* copy: `--check` re-derives the block and fails if
 * a renderer's copy no longer matches the source. `validate.js` runs that on
 * every push. Never hand-edit between the sentinels.
 *
 * Two renderers rather than three: `behistorical-room-v2.js` carries the
 * classroom config because its scenarios build a MagicSchool button, but it
 * writes no drafts through BHDraftStore, so there is nothing here for it to
 * count. When the BeInTheRoom capture path is instrumented it gets its own
 * wiring rather than a third copy of this.
 *
 * Usage: node scripts/build-save-health.js [--check]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'assets', 'js', 'behistorical-save-health.js');

const TARGETS = [
  path.join(ROOT, 'assets', 'js', 'behistorical-topic-renderer-v1.js'),
  path.join(ROOT, 'foundations', 'foundations-topic-renderer.js')
];
const CHECK = process.argv.includes('--check');

const OPEN = '// ── BEGIN INLINED SAVE HEALTH ───────────────────────────────────────────────';
const CLOSE = '// ── END INLINED SAVE HEALTH ─────────────────────────────────────────────────';

function inlinedBlock() {
  const src = fs.readFileSync(SOURCE, 'utf8').trimEnd();
  return [
    OPEN,
    '//',
    '// Derived from assets/js/behistorical-save-health.js by',
    '// scripts/build-save-health.js. Do not hand-edit: validate.js re-derives',
    '// this block and fails the push on drift. Change the source file and rebuild.',
    src,
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
    console.error(`FAIL ${rel} has no save-health sentinels.`);
    console.error('Add these two lines around the inlined region, then rebuild:');
    console.error(`  ${OPEN}`);
    console.error(`  ${CLOSE}`);
    process.exit(1);
  }

  const rebuilt = target.slice(0, start) + inlinedBlock() + target.slice(end + CLOSE.length);

  if (CHECK) {
    if (rebuilt !== target) {
      console.error(`DRIFT ${rel}: the inlined save health module no longer matches`
        + ' assets/js/behistorical-save-health.js.');
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
    console.error('Run: node scripts/build-save-health.js');
    process.exit(1);
  }
  console.log(`save health: ${TARGETS.length} inlined copies match assets/js/behistorical-save-health.js`);
} else {
  console.log(wrote ? `updated ${wrote} file(s)` : 'save health: already current');
}
