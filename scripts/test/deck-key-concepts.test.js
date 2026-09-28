#!/usr/bin/env node
'use strict';

/* The Key Concept band contract, offline.
 *
 * A class slide that teaches a CED Key Concept names it, `kc: 'KC-3.1.IV'`,
 * and every renderer draws a band across the top of the board carrying that
 * code and its CED wording (assets/js/behistorical-slide-templates.js,
 * withKeyConcept). Every part of that fails silently:
 *
 *   - a code with a typo draws a band with a code and no wording
 *   - a code from another topic draws the other topic's wording
 *   - a renderer without the hook, or a page that never loads
 *     assets/data/key-concepts.js, draws no band at all
 *   - a deck that never tags one of its topic's KCs leaves that KC off the
 *     projector for the whole lesson
 *
 * with every other check green. So, for every deck in DECKS:
 *
 *   - every `kc` is one of that topic's own Key Concepts
 *   - every one of the topic's Key Concepts is on at least one projected slide
 *   - no band on Teacher Preflight or BeReady, which are not CED content
 *   - the student deck carries the same tags as the projected teacher slides
 *   - its teacher renderer and the student renderer carry the hook, and its
 *     wrapper and student shell load the Key Concept data
 *
 * and, for the library, that a slide with no `kc` comes back byte for byte
 * untouched, and that the band escapes what it prints.
 *
 * The negative controls at the end run the same checks against broken input
 * and require each to fail, so a green here is evidence.
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

const HOOK = 'window.BHSlideTemplates?window.BHSlideTemplates.withKeyConcept(s,';
const DATA = 'key-concepts.js';
const NO_BAND_PHASES = ['preflight', 'beready'];

const { DECKS } = require('../build-teaching-os-student-decks.js');
const T = require('../../assets/js/behistorical-slide-templates.js');

function loadInto(files) {
  const sandbox = { window: {}, console: { log() {}, warn() {}, error() {} }, encodeURIComponent, decodeURIComponent };
  vm.createContext(sandbox);
  for (const rel of files) vm.runInContext(read(rel), sandbox, { filename: rel });
  return sandbox.window;
}
const KC = loadInto(['assets/data/key-concepts.js']).BEHISTORICAL_KEY_CONCEPTS || {};

/* The checks, as functions of their inputs. */
const tagsOf = slides => slides.filter(s => s && s.kc !== undefined);
const badType = slides => tagsOf(slides).filter(s => typeof s.kc !== 'string' || !s.kc).map(s => s.title || s.id || '?');
const foreign = (slides, topicKcs) => tagsOf(slides).filter(s => !topicKcs.some(k => k.code === s.kc)).map(s => s.kc);
const uncovered = (slides, topicKcs) => topicKcs.map(k => k.code).filter(c => !slides.some(s => s.phase !== 'preflight' && s.kc === c));
const onWrongPhase = slides => tagsOf(slides).filter(s => NO_BAND_PHASES.includes(s.phase)).map(s => s.phase);
const hasHook = src => src.includes(HOOK);
const loadsDataBefore = (src, before) => {
  const i = src.indexOf(DATA);
  return i >= 0 && (!before || i < src.indexOf(before));
};

console.log('\nKey Concept band contract\n');

check('the Key Concept data covers the unit topics', Object.keys(KC).length > 0, `${Object.keys(KC).length} topics`);
check('the library exposes withKeyConcept', typeof T.withKeyConcept === 'function');
const plain = '<section class="slide">x</section>';
check('a slide with no kc comes back untouched', T.withKeyConcept({ kind: 'question' }, plain) === plain);
check('the band is not a slide template kind', !T.has('kc') && !T.kinds.some(k => /^kc|key-?concept/i.test(k)));
const hostile = T.withKeyConcept({ kc: '<img src=x onerror=alert(1)>' }, plain);
check('the band escapes the code it prints', !hostile.includes('<img src=x') && hostile.includes('&lt;img'));

console.log('\n  Decks\n');
const studentRenderer = read('assets/js/behistorical-student-presentation-v1.js');
check('student renderer draws the band', hasHook(studentRenderer));
check('student generator passes kc through', read('scripts/build-teaching-os-student-decks.js').includes('out.kc = s.kc'));

for (const deck of DECKS) {
  const key = deck.key.replace('.', '-');
  const topicKcs = KC[deck.key] || [];
  const teaching = loadInto(deck.sources).BEHISTORICAL_TEACHING;
  const slides = (teaching && teaching.slides) || [];
  const projected = slides.filter(s => s.phase !== 'preflight');

  check(`${deck.key} topic has Key Concepts in its lesson data`, topicKcs.length > 0);
  const bt = badType(slides);
  check(`${deck.key} every kc is one code, as a string`, bt.length === 0, bt.join(', '));
  const fk = foreign(slides, topicKcs);
  check(`${deck.key} every kc is one of Topic ${deck.key}'s own Key Concepts`, fk.length === 0, fk.join(', '));
  const un = uncovered(slides, topicKcs);
  check(`${deck.key} every Key Concept of the topic is on a projected slide`, un.length === 0, un.length ? `missing ${un.join(', ')}` : `${tagsOf(projected).length} of ${projected.length} slides banded`);
  const wp = onWrongPhase(slides);
  check(`${deck.key} no band on Teacher Preflight or BeReady`, wp.length === 0, wp.join(', '));

  if (exists(deck.student)) {
    const student = loadInto([deck.student]).BEHISTORICAL_STUDENT_DECK || { slides: [] };
    const want = projected.map(s => s.kc || null).join('|');
    const have = student.slides.map(s => s.kc || null).join('|');
    check(`${deck.key} student deck carries the same bands`, want === have);
  }

  const pages = [`teacher/topic-${key}-os.html`, `teacher/topic-${key}-story-os.html`]
    .filter(exists).filter(p => /function (render|renderSlide)\(s\)\{/.test(read(p)));
  check(`${deck.key} has a teacher renderer`, pages.length > 0);
  for (const p of pages) check(`${deck.key} ${path.basename(p)} draws the band`, hasHook(read(p)));
  const wrapper = `teacher/data/topic-${key}-teaching.js`;
  check(`${deck.key} teacher wrapper loads the Key Concept data`, exists(wrapper) && loadsDataBefore(read(wrapper)));
  const shell = fs.readdirSync(ROOT).filter(d => /^unit-\d+$/.test(d))
    .map(d => `${d}/presentation-topic-${key}-student.html`).find(exists);
  check(`${deck.key} student shell loads the Key Concept data before the renderer`,
    !!shell && loadsDataBefore(read(shell), 'behistorical-student-presentation-v1.js'));
}

/* Negative controls: the same checks, fed a broken input, must fail. */
console.log('\n  Negative controls\n');
const kcs = KC['2.6'] || [];
const good = [{ phase: 'turn', kc: kcs[0] && kcs[0].code }];
check('control: a typo in a code is caught', foreign(good, kcs).length === 0 && foreign([{ kc: 'KC-3.1.1V' }], kcs).length === 1);
check('control: another topic\'s code is caught', foreign([{ kc: (KC['2.3'] || [{}])[0].code }], kcs).length === 1);
check('control: a Key Concept left off every slide is caught', uncovered(good, kcs).length === 0 && uncovered([], kcs).length === kcs.length);
check('control: a band on the preflight slide alone does not count as coverage', uncovered([{ phase: 'preflight', kc: good[0].kc }], kcs).length === kcs.length);
check('control: a band on BeReady is caught', onWrongPhase([{ phase: 'beready', kc: 'x' }]).length === 1);
check('control: a list of codes is caught', badType([{ kc: ['KC-3.1.IV'] }]).length === 1);
const sample = read('teacher/topic-2-6-story-os.html');
check('control: a renderer with the hook removed is caught', hasHook(sample) && !hasHook(sample.replace(HOOK, 'x(')));
const shellSrc = read('unit-2/presentation-topic-2-6-student.html');
const late = shellSrc.replace('<script src="../assets/data/key-concepts.js"></script>', '') + '<script src="../assets/data/key-concepts.js"></script>';
check('control: a shell loading the data after the renderer is caught',
  loadsDataBefore(shellSrc, 'behistorical-student-presentation-v1.js') && !loadsDataBefore(late, 'behistorical-student-presentation-v1.js'));

console.log(failed ? `\n${failed} Key Concept band check(s) failed.\n` : '\nKey Concept band: all checks passed.\n');
process.exit(failed ? 1 : 0);
