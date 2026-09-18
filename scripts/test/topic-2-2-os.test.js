#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..', '..');
let failures = 0;

function check(name, ok, detail = '') {
  if (ok) console.log(`  PASS  ${name}${detail ? `  (${detail})` : ''}`);
  else { failures++; console.error(`  FAIL  ${name}${detail ? `  (${detail})` : ''}`); }
}

function runFile(rel, sandbox) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel });
}

function loadTeaching22() {
  const sandbox = { window: {}, console, encodeURIComponent, decodeURIComponent };
  vm.createContext(sandbox);
  runFile('teacher/data/topic-2-2-teaching-base.js', sandbox);
  runFile('teacher/data/topic-2-2-presentation-assets.js', sandbox);
  return sandbox.window.BEHISTORICAL_TEACHING;
}

function loadStudent22() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  runFile('assets/data/presentations/topic-2-2-student.js', sandbox);
  return sandbox.window.BEHISTORICAL_STUDENT_DECK;
}

const teaching = loadTeaching22();
const student = loadStudent22();
const titles = (teaching.slides || []).map(s => s.title || '');
const studentTitles = (student.slides || []).map(s => s.title || '');
const all = JSON.stringify(teaching.slides || []);
const studentAll = JSON.stringify(student.slides || []);

console.log('\n  Topic 2.2 lean Teaching OS contract');
check('2.2 teacher deck has 15 projected slides', titles.length === 15, `slides=${titles.length}`);
check('2.2 student deck mirrors the 15-slide sequence', studentTitles.length === 15 && JSON.stringify(titles) === JSON.stringify(studentTitles), `student=${studentTitles.length}`);
check('2.2 removes the routes-are-older slide', !titles.some(t => /The routes were older/i.test(t)));
check('2.2 adds the siege-technology slide', titles.some(t => /Mongols stole what worked/i.test(t)) && /Mongols Borrow Siege Technology\.jpeg/i.test(all));
check('2.2 final slide names Pax Mongolica', /Pax Mongolica/i.test(titles[titles.length - 1] + ' ' + (teaching.slides[titles.length - 1].subtitle || '')));
check('2.2 final slide uses the Mongol caravan image', /Cinematic Mongol Caravan\.png/i.test(JSON.stringify(teaching.slides[titles.length - 1].visual || {})));
check('2.2 student deck keeps Pax Mongolica language', /Pax Mongolica/i.test(studentAll));
check('2.2 student deck keeps siege technology image', /Mongols%20Borrow%20Siege%20Technology\.jpeg/i.test(studentAll));
check('2.2 student deck does not expose teacher notes', !studentAll.includes('listenFor') && !studentAll.includes('avoid'));
check('2.2 still teaches required transfer examples together', /Greco-Islamic medical knowledge/i.test(all) && /Numbering systems/i.test(all) && /Uyghur script/i.test(all));
check('2.2 keeps the core state-change map', /Map of the Khanates\.png/i.test(all));

if (failures) {
  console.error(`\n${failures} Topic 2.2 contract(s) failed`);
  process.exit(1);
}
console.log('\n  Topic 2.2 lean deck contract passed');
