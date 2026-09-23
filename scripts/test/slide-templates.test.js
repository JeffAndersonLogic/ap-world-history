#!/usr/bin/env node
'use strict';

/* The slide template contract, offline.
 *
 * assets/js/behistorical-slide-templates.js is the one implementation of the
 * Teaching OS slide templates. It only works if every renderer hands template
 * slides to it and every deck page loads it, and both of those fail silently:
 * a renderer without the hook draws a template slide as its generic fallback,
 * and a page that never loads the library does the same, with every other
 * check green. So this proves, for every deck in DECKS:
 *
 *   - its teacher renderer and the shared student renderer carry the hook
 *   - its teacher wrapper and its student shell load the library
 *   - the student generator passes template data through
 *
 * and, for the library itself:
 *
 *   - every template has a catalog example and every example names a template
 *   - every example renders, with no undefined, NaN or [object Object] leaking
 *   - authored text is escaped
 *   - an AI-generated visual always carries exactly the house label, and no
 *     other wording, however the slide's credit is written
 *   - every design-pixel size in the stylesheet was converted
 *
 * Each structural check is a function, and the negative controls at the end
 * run those same functions against a broken input and require them to fail,
 * so a green here is evidence rather than an assumption.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..', '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const exists = rel => fs.existsSync(path.join(ROOT, rel));

let failed = 0;
function check(name, pass, detail = '') {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!pass) failed++;
}

const HOOK = 'if(window.BHSlideTemplates&&window.BHSlideTemplates.has(s.kind))return window.BHSlideTemplates.render(s);';
const LIB = 'behistorical-slide-templates.js';
const LABEL = 'Historical Reconstruction - AI Generated';
const OLD_LABELS = ['Illustration (AI-generated)', 'AI GENERATED', 'AI generated', 'AI-Generated)'];

const T = require('../../assets/js/behistorical-slide-templates.js');

/* The checks, as functions of their inputs. */
const definesRenderer = src => /function (render|renderSlide)\(s\)\{/.test(src);
const hasHook = src => src.includes(HOOK);
const loadsLibraryBefore = (src, before) => {
  const i = src.indexOf(LIB);
  return i >= 0 && (!before || i < src.indexOf(before));
};
const leaks = html => ['undefined', 'NaN', '[object Object]'].filter(bad => html.includes(bad));
const aiLabelled = html => html.includes(LABEL) && !OLD_LABELS.some(l => html.includes(l));
const unconverted = css => (css.match(/\d(?:\.\d+)?u\b/g) || []);

console.log('\nSlide template contract\n');

check('library exposes its templates', Array.isArray(T.kinds) && T.kinds.length > 0, `${T.kinds.length} kinds`);
check('library label is the house label', T.LABEL === LABEL);
check('PRESENTATION-AUTHORING.md names the same label', read('docs/PRESENTATION-AUTHORING.md').includes('`' + LABEL + '`'));
const stray = unconverted(T.css);
check('every design-pixel size in the stylesheet is converted', stray.length === 0, stray.slice(0, 5).join(' '));

/* Examples: both directions. */
const sandbox = { window: {}, encodeURIComponent };
vm.createContext(sandbox);
vm.runInContext(read('teacher/data/slide-template-examples.js'), sandbox);
const EX = sandbox.window.BH_SLIDE_TEMPLATE_EXAMPLES || [];
const exKinds = new Set(EX.map(e => e.slide && e.slide.kind));
const noExample = T.kinds.filter(k => !exKinds.has(k));
const noTemplate = [...exKinds].filter(k => !T.has(k));
check('every template has a catalog example', noExample.length === 0, noExample.join(', '));
check('every catalog example names a real template', noTemplate.length === 0, noTemplate.join(', '));

console.log('\n  Rendering\n');
for (const e of EX) {
  if (!T.has(e.slide.kind)) continue;
  let html = '';
  try { html = T.render(e.slide); } catch (err) { html = ''; check(`${e.slide.kind} renders`, false, err.message); continue; }
  const bad = leaks(html);
  check(`${e.slide.kind} renders cleanly`, html.includes(`data-template="${e.slide.kind}"`) && bad.length === 0, bad.join(', '));
  const json = JSON.stringify(e.slide);
  if (json.includes('"ai":true')) check(`${e.slide.kind} labels its AI image`, aiLabelled(html));
}

/* An empty slide of every kind must still render: a half-written slide in a
   deck is a normal state while a teacher is building. */
const emptyBroken = T.kinds.filter(k => { try { return !T.render({ kind: k }).includes('bht-slide'); } catch (_) { return true; } });
check('every template tolerates a slide with no data yet', emptyBroken.length === 0, emptyBroken.join(', '));

const hostile = T.render({ kind: 'sharpen', eyebrow: '<img src=x onerror=alert(1)>', template: { weak: '<script>alert(1)</script>', strong: '"quoted" & **bold**' } });
check('authored text is escaped', !hostile.includes('<script>') && !hostile.includes('<img src=x') && hostile.includes('<b>bold</b>'));

const credited = T.render({ kind: 'frame-subtitle', template: { line: 'x', visual: { url: 'a.jpg', ai: true, credit: 'Illustration (AI-generated) · old wording' } } });
check('an AI visual shows the house label, never its own credit', aiLabelled(credited));
const source = T.render({ kind: 'frame-subtitle', template: { line: 'x', visual: { url: 'a.jpg', credit: 'Map · BeHistorical visual' } } });
check('a real source keeps its own credit and no AI label', source.includes('Map · BeHistorical visual') && !source.includes(LABEL));

/* Wiring, for every deck. */
const { DECKS } = require('../build-teaching-os-student-decks.js');
console.log('\n  Wiring\n');
const studentRenderer = read('assets/js/behistorical-student-presentation-v1.js');
check('student renderer hands templates to the library', hasHook(studentRenderer));
check('student generator passes template data through', read('scripts/build-teaching-os-student-decks.js').includes('out.template = clone(s.template)'));
for (const deck of DECKS) {
  const key = deck.key.replace('.', '-');
  const pages = [`teacher/topic-${key}-os.html`, `teacher/topic-${key}-story-os.html`].filter(exists).filter(p => definesRenderer(read(p)));
  check(`${deck.key} has a teacher renderer`, pages.length > 0);
  for (const p of pages) check(`${deck.key} ${path.basename(p)} hands templates to the library`, hasHook(read(p)));
  const wrapper = `teacher/data/topic-${key}-teaching.js`;
  check(`${deck.key} teacher wrapper loads the library`, exists(wrapper) && loadsLibraryBefore(read(wrapper)));
  const shell = `unit-2/presentation-topic-${key}-student.html`;
  const shellPath = fs.readdirSync(ROOT).filter(d => /^unit-\d+$/.test(d)).map(d => `${d}/presentation-topic-${key}-student.html`).find(exists) || shell;
  check(`${deck.key} student shell loads the library before the renderer`, exists(shellPath) && loadsLibraryBefore(read(shellPath), 'behistorical-student-presentation-v1.js'));
}

const gallery = 'teacher/slide-templates.html';
check('the catalog page loads the library and its examples', exists(gallery) && read(gallery).includes(LIB) && read(gallery).includes('slide-template-examples.js'));

/* Negative controls: the same checks, fed a broken input, must fail. */
console.log('\n  Negative controls\n');
const sample = read('teacher/topic-2-3-os.html');
check('control: a renderer with the hook removed is caught', hasHook(sample) && !hasHook(sample.replace(HOOK, '')));
const shellSrc = read('unit-2/presentation-topic-2-3-student.html');
const swapped = shellSrc.replace(/<script src="\.\.\/assets\/js\/behistorical-slide-templates\.js"><\/script>/, '') + '<script src="../assets/js/behistorical-slide-templates.js"></script>';
check('control: a shell loading the library after the renderer is caught', loadsLibraryBefore(shellSrc, 'behistorical-student-presentation-v1.js') && !loadsLibraryBefore(swapped, 'behistorical-student-presentation-v1.js'));
check('control: an old AI label is caught', !aiLabelled('<span>Illustration (AI-generated)</span>') && !aiLabelled(`<span>${LABEL}</span><span>AI GENERATED</span>`));
check('control: an unconverted size is caught', unconverted('.x{padding:12u}').length === 1);
check('control: a leak is caught', leaks('<b>undefined</b>').length === 1);

console.log(failed ? `\n${failed} slide template check(s) failed.\n` : '\nSlide templates: all checks passed.\n');
process.exit(failed ? 1 : 0);
