#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const contract = require('../lib/ced-unit2-contract');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
const MIN = contract.minimumScore || 95;
const failures = [];

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

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/[^a-z0-9.\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function contains(haystack, needle) {
  return normalize(haystack).includes(normalize(needle));
}

function flattenInstruction(lesson) {
  return JSON.stringify({
    lecture: lesson.lecture || {},
    map: lesson.map || {},
    evidenceLab: lesson.evidenceLab || {},
    primarySource: lesson.primarySource || {},
    deepReading: lesson.deepReading || {},
    first10: lesson.first10 || {}
  });
}

function ratio(found, total) {
  return total ? found / total : 1;
}

console.log('\nUnit 2 CED instructional contract');
console.log(`Minimum passing score: ${MIN}%`);

for (const [topic, spec] of Object.entries(contract.topics)) {
  const file = path.join(DATA, spec.file);
  if (!fs.existsSync(file)) {
    failures.push(`Topic ${topic}: missing ${spec.file}`);
    console.log(`  ${topic}  0%  MISSING LESSON FILE`);
    continue;
  }

  const ctx = sandbox();
  try {
    vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: spec.file });
  } catch (error) {
    failures.push(`Topic ${topic}: lesson data could not be evaluated: ${error.message}`);
    console.log(`  ${topic}  0%  PARSE FAILURE`);
    continue;
  }

  const lesson = ctx.window.BEHISTORICAL_LESSON || {};
  const declared = Array.isArray(lesson.collegeBoardKeyConcepts) ? lesson.collegeBoardKeyConcepts : [];
  const declaredCodes = declared.map(item => String(item.code || ''));
  const lessonText = JSON.stringify(lesson);
  const instructionalText = flattenInstruction(lesson);
  const targetText = JSON.stringify([lesson.learningTargets || [], lesson.successCriteria || []]);

  const kcHits = spec.keyConcepts.filter(code => declaredCodes.includes(code));
  const exampleHits = spec.illustrativeExamples.filter(example => contains(lessonText, example));
  const evidenceHits = spec.instructionalEvidence.filter(cluster => cluster.some(term => contains(instructionalText, term)));
  const targetHits = spec.keyConcepts.filter(code => contains(targetText, code));

  const score = Math.round(
    ratio(kcHits.length, spec.keyConcepts.length) * 30 +
    ratio(exampleHits.length, spec.illustrativeExamples.length) * 20 +
    ratio(evidenceHits.length, spec.instructionalEvidence.length) * 35 +
    ratio(targetHits.length, spec.keyConcepts.length) * 15
  );

  const misses = [];
  spec.keyConcepts.filter(code => !declaredCodes.includes(code)).forEach(code => misses.push(`KC ${code}`));
  spec.illustrativeExamples.filter(example => !contains(lessonText, example)).forEach(example => misses.push(`example: ${example}`));
  spec.instructionalEvidence.filter(cluster => !cluster.some(term => contains(instructionalText, term))).forEach(cluster => misses.push(`instruction: ${cluster.join(' / ')}`));
  spec.keyConcepts.filter(code => !contains(targetText, code)).forEach(code => misses.push(`target/criteria: ${code}`));

  const state = score >= MIN ? 'PASS' : 'FAIL';
  console.log(`  ${topic}  ${score}%  ${state}${misses.length ? `  - ${misses.join('; ')}` : ''}`);
  if (score < MIN) failures.push(`Topic ${topic}: ${score}% CED coverage; ${misses.join('; ')}`);
}

if (failures.length) {
  console.error(`\nUnit 2 CED gate failed (${failures.length} topic issue${failures.length === 1 ? '' : 's'}).`);
  failures.forEach(item => console.error(`  - ${item}`));
  console.error('\nA topic below 95% may not merge. Repair the lesson or update the locked contract only when the CED itself changes.');
  process.exit(1);
}

console.log('\nUnit 2 CED gate passed: every topic is at least 95% aligned to its locked instructional contract.');
