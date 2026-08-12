#!/usr/bin/env node
/**
 * build-coach-prompt.js
 *
 * Inlines `assets/js/behistorical-coach-prompt.js` into the topic renderer
 * between sentinels, the same way `build-skills-lens.js` inlines the Canvas
 * parser into the Skills Lens.
 *
 * WHY INLINE RATHER THAN ADD A SCRIPT TAG
 *
 * The alternative is a fourth `<script src>` in all 77 lesson shells. That is a
 * sweep across 77 hand-authored HTML files, and every sweep script is permanent
 * maintenance debt that can only fix a problem someone already knows about. The
 * renderer is already loaded by all 77, so inlining reaches every page with no
 * shell change at all.
 *
 * The cost of inlining is a second copy, which is exactly what this whole
 * subsystem exists to avoid. So it is a *derived* copy with a drift check:
 * `--check` re-derives the block and fails if the renderer's copy no longer
 * matches the source, and `validate.js` runs that on every push. Never hand-edit
 * between the sentinels.
 *
 * Usage: node scripts/build-coach-prompt.js [--check]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'assets', 'js', 'behistorical-coach-prompt.js');

// Both renderers, because both carry a checkpoint bridge and neither can require
// a module: they are plain scripts served from a static host.
const TARGETS = [
  path.join(ROOT, 'assets', 'js', 'behistorical-topic-renderer-v1.js'),
  path.join(ROOT, 'foundations', 'foundations-topic-renderer.js')
];
const CHECK = process.argv.includes('--check');

const OPEN = '// ── BEGIN INLINED COACH PROMPT BUILDER ──────────────────────────────────────';
const CLOSE = '// ── END INLINED COACH PROMPT BUILDER ────────────────────────────────────────';

function inlinedBlock() {
  const src = fs.readFileSync(SOURCE, 'utf8').trimEnd();
  return [
    OPEN,
    '//',
    '// Derived from assets/js/behistorical-coach-prompt.js by',
    '// scripts/build-coach-prompt.js. Do not hand-edit: validate.js re-derives',
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
    console.error(`FAIL ${rel} has no coach-prompt sentinels.`);
    console.error('Add these two lines around the inlined region, then rebuild:');
    console.error(`  ${OPEN}`);
    console.error(`  ${CLOSE}`);
    process.exit(1);
  }

  const rebuilt = target.slice(0, start) + inlinedBlock() + target.slice(end + CLOSE.length);

  if (CHECK) {
    if (rebuilt !== target) {
      console.error(`DRIFT ${rel}: the inlined coach prompt builder no longer matches`
        + ' assets/js/behistorical-coach-prompt.js.');
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
    console.error('Run: node scripts/build-coach-prompt.js');
    process.exit(1);
  }
  console.log(`coach prompt builder: inlined copies match source in ${TARGETS.length} renderers`);
} else {
  console.log(wrote
    ? `inlined ${(fs.readFileSync(SOURCE, 'utf8').length / 1024).toFixed(1)} KB into ${wrote} renderer(s)`
    : 'coach prompt builder: already current');
}
