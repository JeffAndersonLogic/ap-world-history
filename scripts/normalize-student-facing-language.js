#!/usr/bin/env node
'use strict';

/** Normalize submission guidance and the MagicSchool classroom link. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SUBMIT = 'Organize your thinking here, submit your final work in Canvas.';
const COACH = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
const roots = ['assets', 'foundations', 'unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5', 'unit-6', 'unit-7', 'unit-8', 'unit-9', 'beintheroom'];

const replacements = [
  [/Use this space to organize your thinking\. Your final response must be submitted in Canvas\./g, SUBMIT],
  [/Use this page to organize your thinking and prepare for coaching\. Your final response must be submitted in Canvas\./g, SUBMIT],
  [/Organize your thinking here, submit final work in Canvas\./g, SUBMIT],
  [/Submit the final AP Reflection in Canvas\. The roleplay is the learning process; the reflection is the assessment artifact\./g, `${SUBMIT} The roleplay is the learning process; the reflection is the assessment artifact.`],
  [/https:\/\/app\.magicschool\.ai\//g, COACH]
];

function files(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...files(full));
    else if (/\.(?:html|js)$/.test(entry.name)) out.push(full);
  }
  return out;
}

let changed = 0;
for (const relative of roots) {
  for (const file of files(path.join(ROOT, relative))) {
    const before = fs.readFileSync(file, 'utf8');
    const after = replacements.reduce((text, [pattern, value]) => text.replace(pattern, value), before);
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8');
      changed += 1;
    }
  }
}

console.log(`Normalized student-facing language in ${changed} file(s).`);
