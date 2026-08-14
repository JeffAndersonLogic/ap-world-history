#!/usr/bin/env node
'use strict';

/**
 * Rebuild the generated deep readings from scripts/lib/deep-reading-content/.
 *
 *   node scripts/build-deep-readings.js            write the pages
 *   node scripts/build-deep-readings.js --check    fail on drift, write nothing
 *
 * --check is what scripts/test/readings-reproducible.test.js runs, so a
 * hand-edit to a generated page fails the push instead of surviving until the
 * next rebuild silently reverts it.
 *
 * A deep reading is the optional push-further layer under Content Delivery, for
 * a topic whose modules assume more background than its First & 10 has room to
 * carry. It is not part of the ten-module path, nothing is submitted from it,
 * and a topic without one shows no trace of the feature. See
 * scripts/lib/deep-reading-page.js for what a deep reading deliberately is not.
 *
 * Content modules are discovered rather than listed, so adding a topic is one
 * new file here plus a `deepReading` field in that topic's lesson data. The
 * discovery is a directory read for the same reason the rest of the repo
 * prefers it: a hand-maintained list is a second place to forget something.
 */

const fs = require('fs');
const path = require('path');
const { renderDeepReadingPage } = require('./lib/deep-reading-page');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(__dirname, 'lib', 'deep-reading-content');
const check = process.argv.includes('--check');

/** Every content module in the content directory, sorted so output order is
 *  stable across filesystems. */
function loadContent() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.js'))
    .sort()
    .map(f => require(path.join(CONTENT_DIR, f)));
}

/**
 * Where a topic's page is written. Foundations topics live in foundations/,
 * unit topics in unit-N/, taken from the lesson file the content module names,
 * so the page always lands beside the lesson it belongs to.
 */
function outputDir(topic) {
  if (topic.outputDir) return path.join(ROOT, topic.outputDir);
  if (/^foundations-/.test(topic.slug || '')) return path.join(ROOT, 'foundations');
  const unit = /^topic-(\d)/.exec(topic.slug || '');
  if (unit) return path.join(ROOT, `unit-${unit[1]}`);
  throw new Error(`cannot place deep reading "${topic.slug}": add an outputDir to its content module`);
}

const topics = loadContent();

if (!topics.length) {
  // An empty build is a legitimate state only if the directory is genuinely
  // empty. Reporting it plainly beats printing "0 rebuilt" as though it passed.
  console.log('No deep-reading content modules found in scripts/lib/deep-reading-content/');
  process.exit(0);
}

let wrote = 0;
const drifted = [];

for (const topic of topics) {
  const dir = outputDir(topic);
  const target = path.join(dir, topic.sourceFile);
  const rel = path.relative(ROOT, target);
  const html = renderDeepReadingPage(topic);

  if (check) {
    const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (onDisk !== html) drifted.push(rel);
    continue;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(target, html);
  wrote++;
  console.log(`  wrote ${rel}`);
}

if (check) {
  if (drifted.length) {
    console.error('Deep readings differ from what the content model produces:');
    for (const f of drifted) console.error(`  ${f}`);
    console.error('\nEdit the module in scripts/lib/deep-reading-content/, then run: npm run build:deep-readings');
    process.exit(1);
  }
  const one = topics.length === 1;
  console.log(`${topics.length} deep reading${one ? '' : 's'} match${one ? 'es' : ''} the content model`);
} else {
  console.log(`\n${wrote} deep reading${wrote === 1 ? '' : 's'} rebuilt from the content model.`);
}
