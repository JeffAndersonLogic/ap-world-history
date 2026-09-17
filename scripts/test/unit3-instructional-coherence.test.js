#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const contract = require('../lib/unit3-coherence-contract');

const ROOT = path.resolve(__dirname, '..', '..');
const failures = [];

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9.'\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function contains(text, phrase) { return normalize(text).includes(normalize(phrase)); }
function missingClusters(text, clusters) { return clusters.filter(cluster => !cluster.some(term => contains(text, term))); }
function key(topic) { return String(topic).replace('.', '-'); }
function sandbox() {
  const box = {
    window: {},
    document: {
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: () => ({ setAttribute() {}, appendChild() {}, style: {} }),
      head: { appendChild() {} },
      body: { classList: { add() {}, remove() {}, toggle() {} } }
    },
    setTimeout() {},
    clearTimeout() {}
  };
  box.globalThis = box;
  return vm.createContext(box);
}
function loadLesson(topic, slug) {
  const ctx = sandbox();
  const k = key(topic);
  const lessonPath = path.join(ROOT, 'assets', 'data', `lesson-${k}-${slug}.js`);
  const rendererPath = path.join(ROOT, 'assets', 'data', `lesson-${k}-renderer-config.js`);
  vm.runInContext(fs.readFileSync(lessonPath, 'utf8'), ctx, { filename: lessonPath });
  vm.runInContext(fs.readFileSync(rendererPath, 'utf8'), ctx, { filename: rendererPath });
  return ctx.window.BEHISTORICAL_LESSON || {};
}
function exists(rel) { return fs.existsSync(path.join(ROOT, rel)); }

console.log('\nUnit 3 instructional coherence gate');
console.log('Scope: runtime lesson, First & 10, Deep Reading, checkpoints, and BeInTheRoom.\n');

for (const [topic, spec] of Object.entries(contract.topics)) {
  const k = key(topic);
  const first10Rel = `unit-3/first-and-10-topic-${k}-${spec.slug}.html`;
  const deepRel = `unit-3/deep-reading-topic-${k}-${spec.slug}.html`;
  const requiredFiles = [
    `assets/data/lesson-${k}-${spec.slug}.js`,
    `assets/data/lesson-${k}-renderer-config.js`,
    first10Rel,
    deepRel,
    spec.beInTheRoom
  ];
  const missingFiles = requiredFiles.filter(rel => !exists(rel));
  if (missingFiles.length) {
    failures.push(`Topic ${topic}: missing surfaces: ${missingFiles.join(', ')}`);
    console.log(`  ${topic}  FAIL  missing surface`);
    continue;
  }

  let lesson;
  try { lesson = loadLesson(topic, spec.slug); }
  catch (error) {
    failures.push(`Topic ${topic}: lesson/renderer evaluation failed: ${error.message}`);
    console.log(`  ${topic}  FAIL  lesson/renderer parse`);
    continue;
  }

  const rendererText = JSON.stringify(lesson);
  const assessmentText = JSON.stringify(lesson.checkpoints || []);
  const first10Text = fs.readFileSync(path.join(ROOT, first10Rel), 'utf8');
  const deepText = fs.readFileSync(path.join(ROOT, deepRel), 'utf8');

  const misses = {
    renderer: missingClusters(rendererText, spec.rendererRequired || []),
    first10: missingClusters(first10Text, spec.first10Required || []),
    deepReading: missingClusters(deepText, spec.deepReadingRequired || []),
    assessment: missingClusters(assessmentText, spec.assessmentRequired || [])
  };

  const runtimeRoom = lesson.beInTheRoom && lesson.beInTheRoom.url
    ? String(lesson.beInTheRoom.url).replace(/^\.\.\//, '')
    : '';
  if (!runtimeRoom || runtimeRoom !== spec.beInTheRoom) {
    misses.beInTheRoomWiring = [[spec.beInTheRoom]];
  }

  const labels = [];
  for (const [surface, clusters] of Object.entries(misses)) {
    if (!clusters || !clusters.length) continue;
    labels.push(`${surface}: ${clusters.map(c => c.join(' / ')).join(', ')}`);
  }

  if (labels.length) {
    failures.push(`Topic ${topic}: ${labels.join('; ')}`);
    console.log(`  ${topic}  FAIL  ${labels.join('; ')}`);
  } else {
    console.log(`  ${topic}  PASS  cross-surface traceability and assessment alignment`);
  }
}

if (failures.length) {
  console.error(`\nUnit 3 coherence gate failed (${failures.length} topic issue${failures.length === 1 ? '' : 's'}).`);
  failures.forEach(item => console.error(`  - ${item}`));
  console.error('\nRepair the stale surface rather than weakening the contract unless the governing CED/topic architecture intentionally changes.');
  process.exit(1);
}
console.log('\nUnit 3 coherence gate passed.');
