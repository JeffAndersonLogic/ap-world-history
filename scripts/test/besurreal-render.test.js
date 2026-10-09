#!/usr/bin/env node
'use strict';

// Module 04, BeSurreal, rendered against every unit lesson's real data.
//
// The unit renderer read only `beSurreal.text`, while the 10-module standard
// documents the field as title/desc/intro/detail/prompt. Every topic authored to
// the documented shape (Units 3, 4, 5 and part of 8, 27 topics) showed students
// the word "undefined" where the scene belonged, and every structural check was
// green, because the field was present and well formed. Found by a teacher on
// Topic 3.1 on 2026-10-09.
//
// This lifts the real renderBeSurreal() out of the renderer rather than copying
// it, loads each lesson shell's own data scripts in the order the shell loads
// them, and asserts the rendered card carries the title, a scene and the prompt,
// with no "undefined" or "null" anywhere in it. A negative control runs the
// pre-fix function and must fail, or this check proves nothing.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const RENDERER = path.join(ROOT, 'assets', 'js', 'behistorical-topic-renderer-v1.js');
const failures = [];

function liftRenderBeSurreal(src) {
  const start = src.indexOf('function renderBeSurreal()');
  if (start < 0) throw new Error('renderBeSurreal() not found in the unit renderer');
  const end = src.indexOf('\n}\n', start);
  return src.slice(start, end + 2);
}

const PRE_FIX = `function renderBeSurreal() {
  const s = L.beSurreal || {};
  return \`
    <article class="card">
      <h3>\${s.title}</h3>
      <p>\${s.text}</p>
      <div class="question"><strong>BeSurreal Question</strong><br>\${s.prompt}</div>
    </article>\`;
}`;

function lessonShells() {
  return fs.readdirSync(ROOT)
    .filter(d => /^unit-\d+$/.test(d))
    .flatMap(d => fs.readdirSync(path.join(ROOT, d))
      .filter(f => /^lesson-.*\.html$/.test(f))
      .map(f => path.join(d, f)));
}

function loadLesson(shellRel) {
  const html = fs.readFileSync(path.join(ROOT, shellRel), 'utf8');
  const box = {
    window: {},
    document: {
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createElement: () => ({ setAttribute() {}, appendChild() {}, style: {} }),
      head: { appendChild() {} },
      body: { classList: { add() {}, remove() {}, toggle() {} } }
    },
    setTimeout() {},
    clearTimeout() {}
  };
  box.globalThis = box;
  const ctx = vm.createContext(box);
  const srcs = [...html.matchAll(/<script src="\.\.\/(assets\/data\/[^"?]+)/g)].map(m => m[1]);
  for (const rel of srcs) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  }
  return { lesson: ctx.window.BEHISTORICAL_LESSON, srcs };
}

function render(fnSource, lesson) {
  const ctx = vm.createContext({ L: lesson });
  return vm.runInContext(`${fnSource}\nrenderBeSurreal();`, ctx);
}

function problems(out, lesson) {
  const s = lesson.beSurreal || {};
  const found = [];
  if (/\bundefined\b|\bnull\b/.test(out)) found.push('renders "undefined" or "null"');
  if (!s.title || !out.includes(s.title)) found.push('title missing');
  if (!s.prompt || !out.includes(s.prompt)) found.push('prompt missing');
  const scene = s.text || s.intro || s.detail || s.desc;
  if (!scene || !out.includes(scene)) found.push('no scene text rendered');
  return found;
}

const fixed = liftRenderBeSurreal(fs.readFileSync(RENDERER, 'utf8'));
const shells = lessonShells();
let checked = 0;
let documentedShape = 0;
let preFixBroken = 0;

for (const shell of shells) {
  const { lesson, srcs } = loadLesson(shell);
  if (!srcs.length || !lesson) {
    failures.push(`${shell}: could not load its lesson data`);
    continue;
  }
  if (!lesson.beSurreal) {
    failures.push(`${shell}: no beSurreal field`);
    continue;
  }
  checked++;
  if (!lesson.beSurreal.text) documentedShape++;
  for (const p of problems(render(fixed, lesson), lesson)) failures.push(`${shell}: ${p}`);
  if (problems(render(PRE_FIX, lesson), lesson).length) preFixBroken++;
}

// Negative control: the pre-fix renderer must fail on every documented-shape
// topic, and there must be at least one such topic, or the green above is not
// evidence of anything.
if (documentedShape === 0) failures.push('negative control: no topic uses the documented shape, so the fallback is untested');
if (preFixBroken !== documentedShape) {
  failures.push(`negative control: pre-fix renderer failed ${preFixBroken} topics, expected ${documentedShape}`);
}
if (checked < 71) failures.push(`only ${checked} unit lessons checked, expected 71`);

if (failures.length) {
  console.error(`besurreal-render: ${failures.length} failure(s)`);
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log(`besurreal-render: ${checked} unit lessons render a complete BeSurreal card; ` +
  `negative control caught all ${documentedShape} documented-shape topics on the pre-fix renderer.`);
