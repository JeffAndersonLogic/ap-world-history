#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const contract = require('../lib/unit2-coherence-contract');

const ROOT = path.resolve(__dirname, '..', '..');
const failures = [];

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/[^a-z0-9.\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function contains(text, phrase) {
  return normalize(text).includes(normalize(phrase));
}

function missingClusters(text, clusters) {
  return clusters.filter(cluster => !cluster.some(term => contains(text, term)));
}

function topicFileKey(topic) {
  return String(topic).replace('.', '-');
}

function sandbox() {
  const box = {
    window: {},
    document: {
      querySelector: () => null,
      createElement: () => ({ setAttribute() {}, appendChild() {}, style: {} }),
      head: { appendChild() {} }
    }
  };
  box.globalThis = box;
  return vm.createContext(box);
}

function loadLesson(topic, slug) {
  const ctx = sandbox();
  const key = topicFileKey(topic);
  const lessonPath = path.join(ROOT, 'assets', 'data', `lesson-${key}-${slug}.js`);
  const rendererPath = path.join(ROOT, 'assets', 'data', `lesson-${key}-renderer-config.js`);
  vm.runInContext(fs.readFileSync(lessonPath, 'utf8'), ctx, { filename: lessonPath });
  vm.runInContext(fs.readFileSync(rendererPath, 'utf8'), ctx, { filename: rendererPath });
  return ctx.window.BEHISTORICAL_LESSON || {};
}

function relExists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

console.log('\nUnit 2 instructional coherence gate');
console.log('Scope: traceability + assessment alignment across canonical lesson, renderer modules, First & 10, Deep Reading, and BeInTheRoom.');
console.log('Human instructional review remains a separate requirement.\n');

for (const [topic, spec] of Object.entries(contract.topics)) {
  const key = topicFileKey(topic);
  const first10Rel = `unit-2/first-and-10-topic-${key}-${spec.slug}.html`;
  const deepRel = `unit-2/deep-reading-topic-${key}-${spec.slug}.html`;
  const requiredFiles = [
    `assets/data/lesson-${key}-${spec.slug}.js`,
    `assets/data/lesson-${key}-renderer-config.js`,
    first10Rel,
    deepRel
  ];

  const missingFiles = requiredFiles.filter(rel => !relExists(rel));
  if (missingFiles.length) {
    failures.push(`Topic ${topic}: missing surfaces: ${missingFiles.join(', ')}`);
    console.log(`  ${topic}  FAIL  missing surface`);
    continue;
  }

  let lesson;
  try {
    lesson = loadLesson(topic, spec.slug);
  } catch (error) {
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

  let roomRel = spec.beInTheRoom || null;
  if (!roomRel && lesson.beInTheRoom && lesson.beInTheRoom.url) {
    const url = String(lesson.beInTheRoom.url).replace(/^\.\.\//, '');
    roomRel = url.startsWith('beintheroom/') ? url : null;
  }
  if (roomRel && !relExists(roomRel)) {
    misses.beInTheRoom = [[roomRel]];
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
  console.error(`\nUnit 2 coherence gate failed (${failures.length} topic issue${failures.length === 1 ? '' : 's'}).`);
  failures.forEach(item => console.error(`  - ${item}`));
  console.error('\nThis gate is a regression tripwire, not a substitute for human instructional review. Repair the stale surface rather than weakening the contract unless the governing CED/topic architecture has intentionally changed.');
  process.exit(1);
}

console.log('\nUnit 2 coherence gate passed. All contracted ideas trace across the student-facing ecosystem and required checkpoint evidence is present.');
