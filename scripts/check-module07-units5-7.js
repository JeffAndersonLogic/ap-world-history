#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const units = { 5: 10, 6: 8, 7: 9 };
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

for (const [unitText, count] of Object.entries(units)) {
  const unit = Number(unitText);
  const registryPath = path.join(root, 'assets', 'data', `module-07-evidence-unit-${unit}.js`);
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(registryPath, 'utf8'), sandbox, { filename: registryPath });
  const registry = sandbox.window.BH_MODULE7_EVIDENCE || {};

  for (let topic = 1; topic <= count; topic += 1) {
    const key = `${unit}.${topic}`;
    const entry = registry[key];
    if (!entry) { fail(`${key}: missing registry entry`); continue; }
    if (!entry.p || String(entry.p).trim().length < 40) fail(`${key}: prompt is missing or too thin`);
    if (!Array.isArray(entry.c) || entry.c.length < 4) { fail(`${key}: fewer than four evidence cards`); continue; }

    entry.c.forEach((card, i) => {
      const label = `${key} card ${i + 1}`;
      if (!card.t || !card.m || !card.q) fail(`${label}: missing title, provenance/type label, or analysis question`);
      if (!Array.isArray(card.l) || card.l.length < 2) fail(`${label}: needs at least two evidence details`);
      if (String(card.q || '').length < 35) fail(`${label}: analysis question is too thin`);
    });
  }

  const unitDir = path.join(root, `unit-${unit}`);
  const shells = fs.readdirSync(unitDir).filter(name => new RegExp(`^lesson-${unit}-\\d+.*\\.html$`).test(name));
  const lessonShells = shells.filter(name => !name.includes('-student'));
  const expectedRegistry = `../assets/data/module-07-evidence-unit-${unit}.js`;
  const expectedRuntime = '../assets/js/module-07-evidence-runtime.js';
  let wired = 0;
  lessonShells.forEach(name => {
    const html = fs.readFileSync(path.join(unitDir, name), 'utf8');
    if (html.includes(expectedRegistry) && html.includes(expectedRuntime)) wired += 1;
  });
  if (wired < count) fail(`Unit ${unit}: only ${wired}/${count} topic shells are wired to the Module 07 registry/runtime`);
}

if (failures) process.exit(1);
console.log('Module 07 Units 5-7 contract: 27/27 topics have substantive evidence pools and live shell wiring.');
