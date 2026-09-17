#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const contract = require('../lib/ced-unit3-contract');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
const failures = [];

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

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9.'\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function contains(haystack, needle) {
  return normalize(haystack).includes(normalize(needle));
}

function load(topic, spec) {
  const ctx = sandbox();
  const lessonPath = path.join(DATA, spec.file);
  const rendererPath = path.join(DATA, spec.renderer);
  vm.runInContext(fs.readFileSync(lessonPath, 'utf8'), ctx, { filename: lessonPath });
  const base = JSON.parse(JSON.stringify(ctx.window.BEHISTORICAL_LESSON || {}));
  vm.runInContext(fs.readFileSync(rendererPath, 'utf8'), ctx, { filename: rendererPath });
  const runtime = JSON.parse(JSON.stringify(ctx.window.BEHISTORICAL_LESSON || {}));
  return { base, runtime };
}

function instructionalText(lesson) {
  return JSON.stringify({
    lecture: lesson.lecture || {},
    map: lesson.map || {},
    evidenceLab: lesson.evidenceLab || {},
    primarySource: lesson.primarySource || {},
    deepReading: lesson.deepReading || {},
    first10: lesson.first10 || {},
    beSurreal: lesson.beSurreal || {},
    skillBuilder: lesson.skillBuilder || {}
  });
}

console.log('\nUnit 3 CED instructional contract');
console.log('Required score: 100%');

for (const [topic, spec] of Object.entries(contract.topics)) {
  const missingFiles = [spec.file, spec.renderer].filter(name => !fs.existsSync(path.join(DATA, name)));
  if (missingFiles.length) {
    failures.push(`Topic ${topic}: missing ${missingFiles.join(', ')}`);
    console.log(`  ${topic}  0%  MISSING FILE`);
    continue;
  }

  let loaded;
  try {
    loaded = load(topic, spec);
  } catch (error) {
    failures.push(`Topic ${topic}: evaluation failed: ${error.message}`);
    console.log(`  ${topic}  0%  PARSE FAILURE`);
    continue;
  }

  const misses = [];
  for (const scope of ['base', 'runtime']) {
    const lesson = loaded[scope];
    const declared = Array.isArray(lesson.collegeBoardKeyConcepts) ? lesson.collegeBoardKeyConcepts : [];
    const codes = declared.map(item => String(item.code || ''));
    const objectiveText = declared.filter(item => String(item.theme || '') === 'Learning Objective').map(item => item.text).join(' | ');

    spec.learningObjectives.forEach(lo => {
      if (!contains(objectiveText, lo)) misses.push(`${scope} learning objective: ${lo}`);
    });
    spec.keyConcepts.forEach(code => {
      if (!codes.includes(code)) misses.push(`${scope} KC: ${code}`);
    });
  }

  const baseText = JSON.stringify(loaded.base);
  spec.illustrativeExamples.forEach(example => {
    if (!contains(baseText, example)) misses.push(`illustrative example: ${example}`);
  });

  const targetText = JSON.stringify([loaded.runtime.learningTargets || [], loaded.runtime.successCriteria || []]);
  spec.targetCodes.forEach(code => {
    if (!contains(targetText, code)) misses.push(`target/criteria mapping: ${code}`);
  });

  const instruction = instructionalText(loaded.runtime);
  spec.instructionalEvidence.forEach(cluster => {
    if (!cluster.some(term => contains(instruction, term))) {
      misses.push(`instruction: ${cluster.join(' / ')}`);
    }
  });

  const score = misses.length ? 0 : 100;
  console.log(`  ${topic}  ${score}%  ${misses.length ? 'FAIL' : 'PASS'}${misses.length ? '  - ' + misses.join('; ') : ''}`);
  if (misses.length) failures.push(`Topic ${topic}: ${misses.join('; ')}`);
}

if (failures.length) {
  console.error(`\nUnit 3 CED gate failed (${failures.length} topic issue${failures.length === 1 ? '' : 's'}).`);
  failures.forEach(item => console.error(`  - ${item}`));
  console.error('\nRepair the stale instructional surface. Update the locked contract only when the governing CED changes.');
  process.exit(1);
}

console.log('\nUnit 3 CED gate passed: every topic satisfies 100% of its locked instructional contract.');
