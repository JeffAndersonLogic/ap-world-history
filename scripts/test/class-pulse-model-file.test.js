#!/usr/bin/env node
'use strict';

/**
 * Class Pulse, the model answers file (teacher/class-pulse-model-file.js): the
 * reader that lets the teacher load every model answer at once instead of pasting
 * each one (Jeff, 2026-11-10).
 *
 * What it proves:
 *   - each "## Topic X.Y · Checkpoint N" heading starts an answer, written with a
 *     middle dot, a comma, a colon, a dash or nothing between the two, with or
 *     without the word Topic;
 *   - the answer keeps one paragraph per blank-line block, so paragraph N is still
 *     criterion N's, and a paragraph wrapped over several lines becomes one line;
 *   - any other heading ends an answer, so a title, a note or a reviewer's section
 *     in the same file is never shown on the projector;
 *   - an empty answer and a repeated one are named, never loaded silently, and a
 *     file with no answers in it says so.
 *
 * The fixtures are placeholder sentences on purpose: real model answers never go
 * in this public repository (scripts/test/no-answer-keys.test.js).
 *
 * Negative controls at the end load deliberately broken copies of the module and
 * prove the assertions go red.
 */

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'teacher', 'class-pulse-model-file.js');

const FILE = [
  '# Unit 4 model answers',
  '',
  'A note for the teacher that must never be shown.',
  '',
  '## Topic 4.1 · Checkpoint 1',
  '',
  'Alpha one.',
  '',
  'Alpha two,',
  '  wrapped onto a second line.',
  '',
  '',
  'Alpha three.',
  '',
  '## 4.1, Checkpoint 2',
  'Beta one.',
  '',
  'Beta two.',
  '',
  '### Topic 4.2: checkpoint 1 ###',
  '',
  'Gamma one.',
  '',
  '## Teacher note',
  '',
  'A mid-file note that must never be shown.',
  '',
  '## Topic 4.2 - Checkpoint 2',
  '',
  '## Topic 4.1 · Checkpoint 1',
  '',
  'A second copy that must not win.',
  '',
  '## Claims',
  '',
  '- A reviewer claim that must never be shown.'
].join('\r\n');

let failures = 0;
let quiet = false;
const failed = [];
function check(name, ok, detail) {
  if (ok) { if (!quiet) console.log(`  \x1b[32m✓\x1b[0m ${name}`); return; }
  failed.push(name);
  failures++;
  if (!quiet) console.log(`  \x1b[31m✗\x1b[0m ${name}${detail ? '\n      ' + detail : ''}`);
}

function load(source) {
  const sandbox = { module: { exports: {} } };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(source, sandbox, { filename: SOURCE });
  return sandbox.module.exports;
}

function suite(MF) {
  const r = MF.parse(FILE);
  const by = k => r.answers.find(a => a.topic + '|' + a.cp === k);
  check('every heading style is read as an answer', ['4.1|cp1', '4.1|cp2', '4.2|cp1'].every(by) && r.answers.length === 3, JSON.stringify(r.answers.map(a => a.topic + '|' + a.cp)));
  check('paragraphs stay one per criterion, and a wrapped one is joined',
    by('4.1|cp1') && by('4.1|cp1').text === 'Alpha one.\n\nAlpha two, wrapped onto a second line.\n\nAlpha three.', JSON.stringify(by('4.1|cp1')));
  check('an answer with no blank line after its heading still reads', by('4.1|cp2') && by('4.1|cp2').text === 'Beta one.\n\nBeta two.', JSON.stringify(by('4.1|cp2')));
  const all = r.answers.map(a => a.text).join(' ');
  check('a note or a reviewer section is never part of an answer', !/never be shown|must not win/.test(all), all);
  check('an empty answer is named', r.problems.some(p => /4\.2 Checkpoint 2 has a heading but no answer/.test(p)), JSON.stringify(r.problems));
  check('a repeated answer is named and the first kept', r.problems.some(p => /4\.1 Checkpoint 1 appears twice/.test(p)), JSON.stringify(r.problems));
  const none = MF.parse('Just some text with no headings.');
  check('a file with no answers says so', none.answers.length === 0 && /No model answers found/.test(none.problems.join(' ')), JSON.stringify(none));
  check('nothing at all is not a crash', MF.parse(undefined).answers.length === 0);
}

console.log('Class Pulse model answers file');
const real = fs.readFileSync(SOURCE, 'utf8');
suite(load(real));

console.log('\nNegative controls');
const controls = [
  { name: 'only the middle dot is accepted', from: '[\\u00b7\\u2022,:|\\u2013\\u2014-]?', to: '\\u00b7' },
  { name: 'paragraphs are merged into one', from: "paras.join('\\n\\n')", to: "paras.join(' ')" },
  { name: 'other headings do not end an answer', from: 'if (HEADING.test(line.trim())) { close(); return; }', to: '' },
  { name: 'a repeated answer replaces the first', from: "else if (seen.has(open.topic + '|' + open.cp))", to: 'else if (false)' },
  { name: 'an empty answer is loaded silently', from: "if (!paras.length) problems.push(label + ' has a heading but no answer under it.');\n      else ", to: '' }
];
let controlFailures = 0;
for (const c of controls) {
  if (!real.includes(c.from)) { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" no longer matches the module`); controlFailures++; continue; }
  const before = failures;
  quiet = true; failed.length = 0;
  try { suite(load(real.replace(c.from, c.to))); } catch (e) { failed.push('crashed: ' + e.message); }
  quiet = false;
  const caught = failed.length > 0;
  failures = before;
  if (caught) console.log(`  \x1b[32m✓\x1b[0m "${c.name}" turns the checks red`);
  else { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" went unnoticed`); controlFailures++; }
}
failures += controlFailures;

console.log(failures ? `\n\x1b[31m${failures} failed\x1b[0m` : '\n\x1b[32mAll model answers file checks passed.\x1b[0m');
process.exit(failures ? 1 : 0);
