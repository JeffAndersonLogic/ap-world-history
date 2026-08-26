#!/usr/bin/env node
/**
 * wire-beintheroom-magicschool.js
 *
 * BeInTheRoom v1 scenarios (the ones with no `window.BH_ROOM_SCENARIO`, see
 * behistorical-room-v2.js for the ones that do) are standalone hand-authored
 * pages, one bespoke script per file, with no shared generator. Each one built
 * its "Open MagicSchool" button as a static `href` pointing at Anderson's own
 * join link, which is exactly what a second teacher's students must not open.
 *
 * This sweep gives that button an id and a `data-default-href`, adds the one
 * `<script src>` that loads the classroom resolver, and appends the same
 * three-line wiring snippet that build-unit6.js, build-unit9.js, and
 * scripts/lib/first10-page.js all use to point the button at the join link a
 * student's own `?classroom=<key>` link resolved, defaulting to whatever href
 * the page already had.
 *
 * Idempotent. Running it twice changes nothing the second time, and it skips
 * any file already wired, which is what lets it run again safely once
 * build-unit6.js/build-unit9.js also learn to wire their own output.
 *
 * Usage:
 *   node scripts/wire-beintheroom-magicschool.js [--dry-run]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry-run');

const ANCHOR_RE = /(<a\s+class="[^"]*"\s+)href="(https:\/\/student\.magicschool\.ai\/s\/login\?joinCode=[^"]+)"(\s+target="_blank"\s+rel="noopener">)/;
const SCRIPT_TAG = '<script src="../../assets/js/behistorical-classroom.js"></script>';
const WIRE_SNIPPET = "(function(){var link=document.getElementById('magicschool-open-link');"
  + "if(link&&window.BHClassroom){link.href=window.BHClassroom.resolveMagicSchoolUrl("
  + "link.getAttribute('data-default-href')||link.href);}})();";

function scenarioFiles() {
  const out = [];
  for (let unit = 1; unit <= 9; unit++) {
    const dir = path.join(ROOT, 'beintheroom', `unit-${unit}`);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.html')) out.push(path.join(dir, f));
    }
  }
  return out.sort();
}

let wired = 0;
let skippedV2 = 0;
let skippedWired = 0;
let skippedNoMatch = 0;

for (const filePath of scenarioFiles()) {
  const rel = path.relative(ROOT, filePath);
  const src = fs.readFileSync(filePath, 'utf8');

  if (src.includes('window.BH_ROOM_SCENARIO')) { skippedV2++; continue; }
  if (src.includes('id="magicschool-open-link"')) { skippedWired++; continue; }

  const match = src.match(ANCHOR_RE);
  if (!match) { skippedNoMatch++; continue; }

  const defaultHref = match[2];
  let next = src.replace(
    ANCHOR_RE,
    `$1id="magicschool-open-link" data-default-href="${defaultHref}" href="${defaultHref}"$3`
  );

  // The script tag goes immediately before the page's own closing </script>,
  // the way build-unit6.js and build-unit9.js already place it: after the
  // static markup, before the inline script that needs BHClassroom defined.
  const scriptOpen = next.indexOf('<script>');
  if (scriptOpen === -1) { skippedNoMatch++; continue; }
  next = next.slice(0, scriptOpen) + SCRIPT_TAG + next.slice(scriptOpen);

  // Append the wiring call at the very end of the page's own script, right
  // before its closing tag, so it runs after that script has already set up
  // whatever it needs (render(), event listeners, etc.).
  const scriptClose = next.lastIndexOf('</script>');
  if (scriptClose === -1) { skippedNoMatch++; continue; }
  next = next.slice(0, scriptClose) + WIRE_SNIPPET + next.slice(scriptClose);

  if (next === src) { skippedNoMatch++; continue; }

  if (DRY) {
    console.log(`would wire ${rel}`);
  } else {
    fs.writeFileSync(filePath, next);
    console.log(`wired ${rel}`);
  }
  wired++;
}

console.log(`\n${wired} file(s) ${DRY ? 'would be ' : ''}wired, `
  + `${skippedWired} already wired, ${skippedV2} v2 scenarios (wired via behistorical-room-v2.js), `
  + `${skippedNoMatch} did not match the expected shape.`);

if (skippedNoMatch) {
  console.error('Some scenario files did not match the expected MagicSchool anchor shape; check them by hand.');
  process.exit(1);
}
