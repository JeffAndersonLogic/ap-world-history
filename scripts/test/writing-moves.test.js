#!/usr/bin/env node
'use strict';

/**
 * The exam-writing spine and Yukichi, the writing coach (Jeff, 2026-11-22).
 * Offline, in the push gate.
 *
 * scripts/lib/writing-moves.js is the one place the course says what each
 * move of AP free-response writing is. The lesson pages and Yukichi are both
 * built from it, so this test holds five things:
 *
 *   1. The generated files (assets/data/writing-moves.js and the two Yukichi
 *      files in docs/yukichi/) match what the builder produces now, and every
 *      CED skill and rubric row a move cites exists in
 *      scripts/lib/ced-source/free-response.js.
 *   2. No student-facing writing-move text names a point value, a score or a
 *      grade. Jeff's rule: students learn the rubric's vocabulary and what
 *      earns credit, never the points.
 *   3. Every lesson that declares a writingMove names a move that exists.
 *   4. Every lesson page that declares one loads assets/data/writing-moves.js
 *      before the renderer. Without it the box silently does not draw, and
 *      the module still looks complete.
 *   5. Yukichi's persona keeps the rules that make him a coach rather than a
 *      ghostwriter, and names no unit or topic (one bot serves every topic).
 *
 * Each check is a function, and each is run once against a deliberately broken
 * input to prove it can fail before its green result is trusted.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');
const { MOVES, byId } = require('../lib/writing-moves');
const { YUKICHI_PERSONA } = require('../lib/yukichi-persona');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
let failed = 0;
function check(name, ok, detail) {
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed++;
}

// ── The checks ───────────────────────────────────────────────────────────────

// Point language. "point of view" is a sourcing lens and is allowed.
const POINT_WORDS = /\b\d+\s*(?:pts?|points?)\b|\bpoints?\b(?!\s+of\s+view)|\bscor(?:e|es|ed|ing)\b|\bgrade[ds]?\b|\bearns?\b/i;
function pointProblems(label, text) {
  const m = String(text || '').match(POINT_WORDS);
  return m ? [`${label}: "${m[0]}"`] : [];
}
function studentText(move) {
  return [move.name, move.what, move.onTheExam, ...(move.steps || []), ...(move.avoid || [])].join(' ');
}
function exampleText(wm) {
  const ex = (wm && wm.example) || {};
  return [ex.question, ex.weak, ex.strong, ex.why].join(' ');
}
function moveProblems(topic, wm) {
  if (!wm) return [];
  if (!wm.id || !byId[wm.id]) return [`${topic}: writingMove "${wm && wm.id}" is not a move in scripts/lib/writing-moves.js`];
  return pointProblems(`${topic} example`, exampleText(wm));
}
function shellProblems(file, html) {
  const data = html.indexOf('assets/data/writing-moves.js');
  const renderer = html.indexOf('assets/js/behistorical-topic-renderer-v1.js');
  if (data < 0) return [`${file}: declares a writing move but does not load assets/data/writing-moves.js`];
  if (renderer >= 0 && data > renderer) return [`${file}: loads writing-moves.js after the renderer`];
  return [];
}
function personaProblems(text) {
  const out = [];
  const must = [
    [/Never write, rewrite, finish, or dictate any part of a student's answer/, 'the never-write rule'],
    [/Never invent a model or example answer/, 'the no-model rule'],
    [/Never give a score, a grade, a number of points/, 'the no-points rule'],
    [/Never supply historical facts the student has not used/, 'the no-new-facts rule'],
    [/One thing at a time/, 'the one-thing-at-a-time rule'],
    [/Leaving Asia/, 'the honest answer about his name']
  ];
  for (const [re, what] of must) if (!re.test(text)) out.push(`persona lost ${what}`);
  const content = text.match(/\b(?:Unit|Topic)\s+\d/);
  if (content) out.push(`persona names "${content[0]}"; one bot serves every topic`);
  return out;
}

// ── Load every unit lesson's data, the way the page does ─────────────────────

function sandbox() {
  const box = {
    window: {}, console: { log() {}, warn() {}, error() {} },
    document: {
      addEventListener() {}, getElementById: () => null, querySelectorAll: () => [], querySelector: () => null,
      createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
      head: { appendChild() {} }, body: { appendChild() {} }
    }
  };
  box.globalThis = box;
  return vm.createContext(box);
}
function lessons() {
  const out = [];
  for (const f of fs.readdirSync(DATA).filter(f => /^lesson-\d-\d+-[a-z][\w-]*\.js$/.test(f) && !/renderer-config|standards-addon/.test(f))) {
    const [, u, t] = f.match(/^lesson-(\d)-(\d+)-/);
    const ctx = sandbox();
    vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx);
    const cfg = path.join(DATA, `lesson-${u}-${t}-renderer-config.js`);
    if (fs.existsSync(cfg)) vm.runInContext(fs.readFileSync(cfg, 'utf8'), ctx);
    const L = ctx.window.BEHISTORICAL_LESSON || {};
    const dir = path.join(ROOT, `unit-${u}`);
    const shell = fs.existsSync(dir) ? fs.readdirSync(dir).find(h => h.startsWith(`lesson-${u}-${t}-`) && h.endsWith('.html')) : null;
    out.push({ topic: `${u}.${t}`, L, shell: shell ? path.join(dir, shell) : null });
  }
  return out;
}

// ── Negative controls: each check must be able to fail ───────────────────────

console.log('\n  Negative controls\n');
check('control: a point value in move text is refused', pointProblems('x', 'This earns 1 point.').length === 1);
check('control: "score" in an example is refused', moveProblems('9.9', { id: 'thesis', example: { why: 'This would score well.' } }).length === 1);
check('control: "point of view" is allowed', pointProblems('x', 'Explain the point of view of the author.').length === 0);
check('control: an unknown move id is refused', moveProblems('9.9', { id: 'no-such-move' }).length === 1);
check('control: a page that declares a move without the data file is refused',
  shellProblems('x.html', '<script src="../assets/js/behistorical-topic-renderer-v1.js"></script>').length === 1);
check('control: loading the data after the renderer is refused',
  shellProblems('x.html', '<script src="../assets/js/behistorical-topic-renderer-v1.js"></script><script src="../assets/data/writing-moves.js"></script>').length === 1);
check('control: a persona that drops the never-write rule is refused',
  personaProblems(YUKICHI_PERSONA.replace("Never write, rewrite, finish, or dictate any part of a student's answer", 'Help')).length === 1);
check('control: a persona that names a topic is refused', personaProblems(`${YUKICHI_PERSONA}\nTopic 5.1 is about revolutions.`).length === 1);

// ── The real checks ──────────────────────────────────────────────────────────

console.log('\n  The writing moves and Yukichi\n');

const build = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'build-writing-moves.js'), '--check'], { encoding: 'utf8' });
check('generated files match scripts/lib/writing-moves.js, and every CED citation resolves', build.status === 0,
  build.status === 0 ? `${MOVES.length} moves` : (build.stderr || build.stdout).trim().split('\n').slice(0, 3).join('; '));

const movePoint = MOVES.flatMap(m => pointProblems(m.id, studentText(m)));
check('no move names a point value, a score or a grade', movePoint.length === 0, movePoint.join('; '));

const generated = fs.readFileSync(path.join(DATA, 'writing-moves.js'), 'utf8').replace(/^\/\/.*$/gm, '');
check('the browser copy carries no point language', pointProblems('assets/data/writing-moves.js', generated).length === 0);

const personaIssues = personaProblems(YUKICHI_PERSONA);
check('Yukichi keeps his coaching rules and names no unit or topic', personaIssues.length === 0, personaIssues.join('; '));

let declared = 0;
const lessonIssues = [];
for (const { topic, L, shell } of lessons()) {
  const wms = [L.skillBuilder && L.skillBuilder.writingMove, L.primarySource && L.primarySource.writingMove].filter(Boolean);
  if (!wms.length) continue;
  declared++;
  for (const wm of wms) lessonIssues.push(...moveProblems(topic, wm));
  if (!shell) lessonIssues.push(`${topic}: declares a writing move but has no lesson page`);
  else lessonIssues.push(...shellProblems(path.relative(ROOT, shell), fs.readFileSync(shell, 'utf8')));
}
check(`every lesson that declares a writing move names a real move and loads its data`, lessonIssues.length === 0,
  lessonIssues.length ? lessonIssues.join('; ') : `${declared} lesson(s)`);

console.log(failed ? `\n  ${failed} check(s) failed\n` : '\n  all checks passed\n');
process.exit(failed ? 1 : 0);
