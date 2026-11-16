#!/usr/bin/env node
'use strict';

/**
 * Builds the live-mode BeInTheRoom scenarios from scripts/lib/live-rooms/.
 *
 *   node scripts/build-live-rooms.js            write the pages
 *   node scripts/build-live-rooms.js --check    fail on drift, write nothing
 *   node scripts/build-live-rooms.js --preview <file>
 *       also write the first scenario as ONE self-contained file (styles and
 *       scripts inlined), for showing a prototype outside the site.
 */

const fs = require('fs');
const path = require('path');
const { renderLiveRoomPage, safeJson } = require('./lib/room-live-page');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(__dirname, 'lib', 'live-rooms');
const check = process.argv.includes('--check');
const previewAt = process.argv.indexOf('--preview');

const scenarios = fs.readdirSync(SOURCE).filter(name => name.endsWith('.js')).sort()
  .map(name => require(path.join(SOURCE, name)));

let drift = 0;
for (const scenario of scenarios) {
  const destination = path.join(ROOT, 'beintheroom', `unit-${scenario.unit}`, scenario.file);
  const page = renderLiveRoomPage(scenario);
  const relative = path.relative(ROOT, destination);
  if (check) {
    const current = fs.existsSync(destination) ? fs.readFileSync(destination, 'utf8') : null;
    if (current !== page) { drift++; console.error(`DRIFT ${relative}: run node scripts/build-live-rooms.js`); }
    else console.log(`ok ${relative}`);
  } else {
    fs.writeFileSync(destination, page, 'utf8');
    console.log(`Wrote ${relative}`);
  }
}

if (previewAt !== -1 && scenarios.length) {
  const target = process.argv[previewAt + 1];
  if (!target) { console.error('--preview needs a file path'); process.exit(1); }
  const scenario = scenarios[0];
  const asset = file => fs.readFileSync(path.join(ROOT, 'assets', file), 'utf8');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>BeInTheRoom Live Prototype</title>
<style>${asset('css/behistorical-room-live.css')}</style>
</head>
<body>
<div id="room-app"></div>
<script>window.BH_LIVE_ROOM = ${safeJson({ ...scenario, lessonUrl: '#' })};</script>
<script>${asset('js/behistorical-beintheroom-capture.js')}</script>
<script>${asset('js/behistorical-room-live.js')}</script>
</body>
</html>
`;
  fs.writeFileSync(target, html, 'utf8');
  console.log(`Wrote preview ${target}`);
}

if (drift) process.exit(1);
