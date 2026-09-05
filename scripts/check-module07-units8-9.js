#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const topics = {
  8: {
    '8.1': 'lesson-8-1-cold-war-stage.html',
    '8.2': 'lesson-8-2-the-cold-war.html',
    '8.3': 'lesson-8-3-effects-cold-war.html',
    '8.4': 'lesson-8-4-spread-of-communism.html',
    '8.5': 'lesson-8-5-decolonization.html',
    '8.6': 'lesson-8-6-newly-independent-states.html',
    '8.7': 'lesson-8-7-global-resistance.html',
    '8.8': 'lesson-8-8-end-of-cold-war.html'
  },
  9: {
    '9.1': 'lesson-9-1-technology-exchange.html',
    '9.2': 'lesson-9-2-disease.html',
    '9.3': 'lesson-9-3-environment.html',
    '9.4': 'lesson-9-4-economics-global-age.html',
    '9.5': 'lesson-9-5-calls-for-reform-responses.html',
    '9.6': 'lesson-9-6-globalized-culture.html',
    '9.7': 'lesson-9-7-resistance-globalization.html',
    '9.8': 'lesson-9-8-institutions-globalized-world.html',
    '9.9': 'lesson-9-9-continuity-change-globalized-world.html'
  }
};

let failures = 0;
function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

for (const [unitText, topicMap] of Object.entries(topics)) {
  const unit = Number(unitText);
  const registryPath = path.join(root, 'assets', 'data', `module-07-evidence-unit-${unit}.js`);
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(registryPath, 'utf8'), sandbox, { filename: registryPath });
  const registry = sandbox.window.BH_MODULE7_EVIDENCE || {};

  for (const [key, shellName] of Object.entries(topicMap)) {
    const entry = registry[key];
    if (!entry) {
      fail(`${key}: missing registry entry`);
      continue;
    }
    if (!entry.p || String(entry.p).trim().length < 60) fail(`${key}: prompt is missing or too thin`);
    if (!Array.isArray(entry.c) || entry.c.length < 5) {
      fail(`${key}: fewer than five evidence cards`);
      continue;
    }

    entry.c.forEach((card, index) => {
      const label = `${key} card ${index + 1}`;
      if (!card.t || !card.m || !card.q) fail(`${label}: missing title, provenance/type label, or analysis question`);
      if (!Array.isArray(card.l) || card.l.length < 2) fail(`${label}: needs at least two evidence details`);
      if (String(card.q || '').length < 55) fail(`${label}: analysis question is too thin for late-course independent evidence work`);
      if (!/(record|excerpt|reconstruction|document|treaty|policy|movement|institution|legal|political|financial|conflict|technology|medical|demographic|health|measurement|timeline|conference|election|event|source)/i.test(String(card.m || ''))) {
        fail(`${label}: provenance/type label is not explicit enough`);
      }
    });

    const shellPath = path.join(root, `unit-${unit}`, shellName);
    const html = fs.readFileSync(shellPath, 'utf8');
    const expectedRegistry = `../assets/data/module-07-evidence-unit-${unit}.js`;
    const expectedRuntime = '../assets/js/module-07-evidence-runtime.js';
    if (!html.includes(expectedRegistry) || !html.includes(expectedRuntime)) {
      fail(`${key}: lesson shell is not wired to the Module 07 registry/runtime`);
    }
  }
}

// Topic 8.9 is a documented six-module capstone variant. It contains legacy
// evidenceLab-shaped data used by its custom synthesis path, but the lesson shell
// intentionally does not expose the standard Module 07 registry/runtime.
const capstone = fs.readFileSync(path.join(root, 'unit-8', 'lesson-8-9-causation-capstone.html'), 'utf8');
if (capstone.includes('module-07-evidence-unit-8.js') || capstone.includes('module-07-evidence-runtime.js')) {
  fail('8.9: capstone exception was accidentally wired to standard Module 07');
}

if (failures) process.exit(1);
console.log('Module 07 Units 8-9 contract: 17/17 active Evidence Labs have substantive evidence pools and live shell wiring; Topic 8.9 capstone exception preserved.');
