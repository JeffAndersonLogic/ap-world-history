#!/usr/bin/env node
'use strict';

/**
 * Builds local instructional maps for the Map & Geography Check module.
 *
 * Every map here replaces a slot that used to hold something that was not a map
 * of the topic: a portrait, a painting, a photograph, or a blank world outline.
 * Because the output is a local SVG, these can never fail to load, and because
 * each one is generated from a topic-specific spec, they can never be off-topic.
 *
 *   node scripts/build-instructional-maps.js
 */

const fs = require('fs');
const path = require('path');
const { renderMap } = require('./lib/map-render');
const specs = require('./lib/instructional-map-specs');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'assets', 'images', 'instructional-maps');

function main() {
  fs.mkdirSync(OUTPUT, { recursive: true });
  const seen = new Set();
  const crowded = [];
  for (const spec of specs) {
    if (seen.has(spec.id)) throw new Error(`duplicate instructional map id: ${spec.id}`);
    seen.add(spec.id);
    if (!spec.title || !spec.code) throw new Error(`instructional map ${spec.id} needs a title and code`);
    const { svg, forced } = renderMap(spec);
    if (forced > 0) crowded.push(`${spec.id} (${forced} label${forced === 1 ? '' : 's'})`);
    fs.writeFileSync(path.join(OUTPUT, `${spec.id}.svg`), svg);
  }
  if (crowded.length) {
    console.error('Labels could not be placed without overlapping on:');
    crowded.forEach((entry) => console.error(`  ${entry}`));
    console.error('Reduce the highlights, flows, or points in the spec for those maps.');
    process.exit(1);
  }
  console.log(`Built ${specs.length} instructional maps in assets/images/instructional-maps.`);
}

main();
