#!/usr/bin/env node
/**
 * xray-core.test.js
 *
 * The Curriculum X-Ray's calculations, against an invented class whose planted
 * patterns are known. Offline and dependency-free, in the push gate.
 *
 * WHAT IT PROVES
 *   - Every signal the page can show has a row in the measurement contract saying
 *     what it can and cannot tell a teacher, and every row says both.
 *   - The detectors find exactly the four planted patterns and raise NOTHING
 *     else, in both class periods. Finding the plant is half of a detector; not
 *     crying wolf on everything else is the other half.
 *   - Period filtering, the set-aside rule for half-typed answers, the thin rule,
 *     the unmatched-prompt count and the unassigned bucket behave as documented.
 *   - A student is never named: nothing but a short code leaves the library.
 *   - A later AI source cannot change what Phase A says.
 *   - The page is not stale against its sources.
 *
 * WHY IT CARRIES NEGATIVE CONTROLS
 * A check used as evidence has to be shown able to fail. Section "Negative
 * controls" below breaks each detector on purpose and requires the planted-pattern
 * assertions to turn red, and patches the library source to require the same of
 * the echoed-prompt-word rule.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const X = require('../lib/xray-core.js');
const D = require('../lib/xray-demo-data.js');

const R = '\x1b[31m', G = '\x1b[32m', W = '\x1b[1m', Dm = '\x1b[2m', Z = '\x1b[0m';
let failures = 0;
function check(label, ok, detail) {
  console.log(`  ${ok ? G + 'PASS' : R + 'FAIL'}${Z} ${label}${detail ? `  ${Dm}(${detail})${Z}` : ''}`);
  if (!ok) failures++;
  return ok;
}

function catalogFor(topic) {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets/data/skills-map.js'), 'utf8'), sandbox);
  return X.buildCatalog(sandbox.window.BEHISTORICAL_SKILLS_MAP.topics, topic);
}

const CAT = catalogFor('2.3');
const demo = D.makeDemo();
const Sx = require('../lib/xray-sections.js');
const SECTION_IDS = Sx.SECTIONS.map(x => x.id);
const base = { records: demo.records, catalog: CAT, sectionSizes: demo.roster.enrolled, sectionByUid: demo.roster.sectionByUid, nowMs: demo.nowMs };
const run = (section, over, lib) => (lib || X).analyze(Object.assign({}, base, { section }, over || {}));
const flagsOf = a => a.slots.filter(s => s.flags.length).map(s => `${s.slotId}:${s.flags.map(f => f.id).sort().join('+')}`).sort();

// The planted patterns, written down independently of the code that finds them.
const EXPECTED = {
  g1: ['checkpoint-two-response:confidentThin'],
  g3: ['checkpoint-one-response:ceiling'],
  s2: ['evidence-response:floor'],
  s3: ['primary-source-response:skipped'],
  g4: [], s1: [], s4: []
};
function plantedFound(over, lib) {
  return SECTION_IDS.every(sec =>
    JSON.stringify(flagsOf(run(sec, over, lib))) === JSON.stringify(EXPECTED[sec].slice().sort()));
}

console.log(`${W}Curriculum X-Ray calculations${Z}\n`);

// ── The measurement contract ────────────────────────────────────────────────
console.log(`${W}The measurement contract${Z}`);
check('every contract row says what it tells and what it cannot',
  Object.keys(X.CONTRACT).every(k => X.CONTRACT[k].name && X.CONTRACT[k].tells && X.CONTRACT[k].cannotTell));
const emitted = new Set();
SECTION_IDS.concat(['all', 'unassigned']).forEach(sec => {
  const a = run(sec);
  a.slots.forEach(s => s.flags.forEach(f => emitted.add('flag:' + f.id)));
});
demo.records.slice(0, 60).forEach(r => X.normalizeRecord(r).observations.forEach(o => emitted.add('obs:' + o.signal)));
check('every observation the library emits has a contract row',
  [...emitted].filter(e => e.startsWith('obs:')).every(e => X.CONTRACT[e.slice(4)]),
  [...emitted].filter(e => e.startsWith('obs:')).join(' '));
check('every flag has a definition, and flags have a contract row',
  [...emitted].filter(e => e.startsWith('flag:')).every(e => X.FLAG_DEFS[e.slice(5)]) && Boolean(X.CONTRACT.flags));
check('the AI row exists and says it is provisional', /provisional/i.test(X.CONTRACT.ai.tells + X.CONTRACT.ai.cannotTell));
check('confidence words are BeHistorical\'s own scale',
  JSON.stringify(X.CONFIDENCE_WORDS) === JSON.stringify({ 1: 'Lost', 2: 'Shaky', 3: 'Getting there', 4: 'Solid', 5: 'Could teach it' }));

// ── The planted patterns, and nothing else ──────────────────────────────────
console.log(`\n${W}Detectors find the planted patterns and nothing else${Z}`);
SECTION_IDS.forEach(sec => {
  const got = flagsOf(run(sec));
  check(`${sec.toUpperCase()}: exactly the planted flags`, JSON.stringify(got) === JSON.stringify(EXPECTED[sec].slice().sort()), got.join(' | ') || 'none');
});
const everySize = Object.assign({}, demo.roster.enrolled, { unassigned: 3 });
const allPrimary = run('all', { sectionSizes: everySize }).slots.find(s => s.slotId === 'primary-source-response');
check('the combined view hides S3\'s Few records, which is why flags are per class',
  allPrimary.flags.every(f => f.id !== 'skipped'), `${allPrimary.n + allPrimary.pending} of ${allPrimary.size} combined`);

// ── Priorities and the answer queue, which the page is a thin layer over ────
console.log(`\n${W}Priorities and the answers to read${Z}`);
const byPeriod = SECTION_IDS.map(id => ({ id, label: id.toUpperCase(), analysis: run(id) }));
const pri = X.priorities(byPeriod);
const priKeys = pri.map(p => `${p.periodId}:${p.slotId}:${p.flag.id}`);
const EXPECTED_ORDER = ['s2:evidence-response:floor', 'g1:checkpoint-two-response:confidentThin',
  's3:primary-source-response:skipped', 'g3:checkpoint-one-response:ceiling'];
check('priorities list every flag, instructional signals first, then missing records, then widely-used terms',
  JSON.stringify(priKeys) === JSON.stringify(EXPECTED_ORDER), priKeys.join(' > '));
check('every flag is labelled in plain words, with a glyph and a caveat that travels with it',
  Object.keys(X.FLAG_DEFS).every(k => X.FLAG_DEFS[k].label && X.FLAG_DEFS[k].glyph && X.FLAG_DEFS[k].caveat.length > 20) &&
  pri.every(p => p.flag.caveat && p.flag.label));
check('no flag label uses the technical names', Object.keys(X.FLAG_DEFS).every(k => !/^(Floor|Ceiling|Skipped)$/.test(X.FLAG_DEFS[k].label)));
check('the "few records" caveat refuses to call a missing record a skipped task',
  /do not prove/i.test(X.FLAG_DEFS.skipped.caveat) && X.FLAG_DEFS.skipped.label === 'Few records');
const flaggedQueue = X.evidenceQueue(byPeriod);
check('the flagged queue walks the priorities in order and reads at least one answer from each',
  flaggedQueue.length > 0 && pri.every(p => flaggedQueue.some(q => q.periodId === p.periodId && q.slotId === p.slotId)),
  `${flaggedQueue.length} answers`);
check('the first answers to read belong to the first priority',
  flaggedQueue[0].periodId === pri[0].periodId && flaggedQueue[0].slotId === pri[0].slotId);
check('an answer appears once in the queue',
  new Set(flaggedQueue.map(q => q.periodId + q.slotId + q.answer.code)).size === flaggedQueue.length);
const evQueue = X.evidenceQueue(byPeriod, 'evidence-response');
check('a prompt\'s own queue holds only that prompt, from every class in scope',
  evQueue.length > 0 && evQueue.every(q => q.slotId === 'evidence-response') &&
  new Set(evQueue.map(q => q.periodId)).size === SECTION_IDS.length);
check('no queue item carries a student id', !/demo-[a-z0-9]+-\d\d/.test(JSON.stringify([flaggedQueue, evQueue, pri])));

// ── Period filtering, settling, thin, unmatched, unassigned ─────────────────
console.log(`\n${W}Behaviour the page relies on${Z}`);
const s = run('s2'), u = run('unassigned'), all = run('all');
const perSection = SECTION_IDS.map(id => run(id).records);
check('class filter: each class holds only its own answers, and every answer is in exactly one',
  perSection.reduce((a, b) => a + b, 0) + u.records === all.records, `${perSection.join('+')}+${u.records}=${all.records}`);
check('three half-typed answers are set aside, not analyzed', all.setAside === 3, `${all.setAside}`);
const s2Ev = s.slots.find(x => x.slotId === 'evidence-response');
check('a set-aside answer still counts as a student who responded',
  s2Ev.pending === 3 && s2Ev.respondedShare === (s2Ev.n + 3) / 23, `${s2Ev.n}+${s2Ev.pending} of 23`);
check('with settling off, nothing is set aside', run('all', { thresholds: { settleMinutes: 0 } }).setAside === 0);
check('one record naming a prompt outside the topic is counted and left out', all.unmatched === 1);
check('the unassigned bucket exists and is too thin to flag',
  u.records > 0 && flagsOf(u).length === 0 && u.slots.filter(x => x.n).every(x => x.thin));
check('with no section size, Skipped cannot be judged and is never raised',
  flagsOf(run('s3', { sectionSizes: {} })).every(f => !f.endsWith(':skipped')));
check('the combined view needs every section\'s size',
  run('all', { sectionSizes: { g1: 22 } }).sizeKnown === false);

// Thin: extreme data under the minimum n raises nothing.
const tiny = [1, 2, 3, 4].map(i => ({ studentId: 'demo-t-' + i, sectionId: 'x', topicKey: '2-3', slotId: 'checkpoint-two-response',
  text: 'ok', confidence: 5, updatedAt: demo.nowMs - 3600000 }));
const tinyOut = X.analyze({ records: tiny, catalog: CAT, section: 'all', sectionSizes: { x: 30 }, nowMs: demo.nowMs });
check('under the minimum, four confident one-word answers raise no flag',
  flagsOf(tinyOut).length === 0 && tinyOut.slots.find(x => x.slotId === 'checkpoint-two-response').thin);

// ── Term matching ───────────────────────────────────────────────────────────
console.log(`\n${W}Term matching${Z}`);
const ws = t => X.wordSet(t);
const prompt = ws('Why did trade grow around the Indian Ocean?');
check('the whole phrase counts', X.matchTerm('gold trade', 'the gold trade grew', ws('the gold trade grew'), prompt) === 'full');
check('a word the prompt already contains earns no partial match',
  X.matchTerm('gold trade', 'trade grew a lot', ws('trade grew a lot'), prompt) === 'none');
check('a word the prompt does not contain does',
  X.matchTerm('gold trade', 'there was gold', ws('there was gold'), prompt) === 'partial');
check('a plural matches its singular', X.matchTerm('monsoon winds', 'the monsoon wind', ws('the monsoon wind'), {}) === 'full');
check('a term made only of prompt words must match in full (a known undercount, documented)',
  X.matchTerm('monsoon winds', 'the monsoon', ws('the monsoon'), ws('how did monsoon winds help')) === 'none');

// ── Privacy ─────────────────────────────────────────────────────────────────
console.log(`\n${W}A student is never named${Z}`);
const dump = JSON.stringify([all, s, u]);
check('no student id appears anywhere in the output', !/demo-[a-z0-9]+-\d\d/.test(dump));
check('every answer is labelled with a short code only', /S-[0-9A-Z]{5}/.test(dump) && X.studentCode('demo-g1-01') !== X.studentCode('demo-g1-02'));
check('a code is stable', X.studentCode('demo-g1-01') === X.studentCode('demo-g1-01'));

// ── Determinism ─────────────────────────────────────────────────────────────
console.log(`\n${W}Same input, same output${Z}`);
check('the invented class is identical on every build', JSON.stringify(D.makeDemo()) === JSON.stringify(demo));
const shuffled = demo.records.slice().reverse();
check('the result does not depend on record order',
  JSON.stringify(flagsOf(run('all', { records: shuffled }))) === JSON.stringify(flagsOf(all)) &&
  JSON.stringify(run('s2', { records: shuffled }).slots.map(x => x.words && x.words.median)) ===
  JSON.stringify(s.slots.map(x => x.words && x.words.median)));

// ── A later AI source cannot change Phase A ─────────────────────────────────
console.log(`\n${W}Room for later analysis, without changing this one${Z}`);
check('every observation produced today is tagged as coming from a rule',
  demo.records.every(r => X.normalizeRecord(r).observations.every(o => o.source === 'rule')));
const withAi = demo.records.map(r => Object.assign({}, r, { aiLevel: 'Strong', observations: [{ source: 'ai', signal: 'reasoning', value: 3 }] }));
check('extra AI fields on a record change no flag and no figure',
  JSON.stringify(run('s2', { records: withAi })) === JSON.stringify(s));

// ── The page is not stale ───────────────────────────────────────────────────
console.log(`\n${W}The page matches its sources${Z}`);
const built = cp.spawnSync(process.execPath, [path.join(ROOT, 'scripts/build-xray.js'), '--check'], { encoding: 'utf8' });
check('teacher/xray.html is up to date with the library, the demo data and the catalog', built.status === 0,
  (built.stderr || built.stdout || '').trim().split('\n')[0]);
const page = fs.readFileSync(path.join(ROOT, 'teacher/xray.html'), 'utf8');
check('the page forbids every network route', /connect-src 'none'/.test(page) && /default-src 'none'/.test(page));
check('the page says it is demonstration data, in the header and in a note', /Demo data/.test(page) && /Invented students/.test(page));

// ── Negative controls ───────────────────────────────────────────────────────
console.log(`\n${W}Negative controls${Z}  ${Dm}each break must turn the planted-pattern check red${Z}`);
check('(the check itself passes on the real library)', plantedFound());
[
  ['Skipped can never fire', { thresholds: { skippedBelow: 0 } }],
  ['Floor can never fire', { thresholds: { floorShare: 2 } }],
  ['Ceiling can never fire', { thresholds: { ceilingShare: 2 } }],
  ['Confident but thin can never fire', { thresholds: { confidentThinShare: 2 } }],
  ['everything is flagged', { thresholds: { skippedBelow: 2, floorShare: 0, ceilingShare: 0, confidentThinMin: 0, confidentThinShare: 0 } }]
].forEach(([name, over]) => check(`${name}, and the check notices`, plantedFound(over) === false));

(function patchedSource(name, from, to) {
  const src = fs.readFileSync(path.join(ROOT, 'scripts/lib/xray-core.js'), 'utf8');
  if (!src.includes(from)) return check(`${name}: the mutation changed nothing, so it proves nothing`, false);
  const mod = { exports: {} };
  new Function('module', 'exports', src.replace(from, to))(mod, mod.exports);
  const broken = mod.exports;
  // Two ways the break must be noticed: the direct assertion on the rule, and the
  // planted Silver Floor, which depends on echoed prompt words earning nothing.
  const pw = X.wordSet('Why did trade grow around the Indian Ocean?');
  check(`${name}, and the term assertion notices`,
    broken.matchTerm('gold trade', 'trade grew a lot', X.wordSet('trade grew a lot'), pw) !== 'none');
  check(`${name}, and the planted Floor goes missing`, plantedFound({}, broken) === false);
})('echoed prompt words earn a partial match again', '!echoed[w] && words[w]', 'words[w]');

function patched(from, to) {
  const src = fs.readFileSync(path.join(ROOT, 'scripts/lib/xray-core.js'), 'utf8');
  if (!src.includes(from)) return null;
  const mod = { exports: {} };
  new Function('module', 'exports', src.replace(from, to))(mod, mod.exports);
  return mod.exports;
}
(function () {
  const lib = patched("var PRIORITY_ORDER = ['floor', 'confidentThin', 'skipped', 'ceiling'];", "var PRIORITY_ORDER = ['ceiling', 'skipped', 'confidentThin', 'floor'];");
  if (!lib) return check('priority order mutation changed nothing, so it proves nothing', false);
  const bp = SECTION_IDS.map(id => ({ id, label: id.toUpperCase(), analysis: run(id, {}, lib) }));
  const got = lib.priorities(bp).map(p => `${p.periodId}:${p.slotId}:${p.flag.id}`);
  check('the priority order is reversed, and the check notices', JSON.stringify(got) !== JSON.stringify(EXPECTED_ORDER));
})();
(function () {
  const lib = patched('caveat: FLAG_DEFS[id].caveat,', "caveat: '',");
  if (!lib) return check('caveat mutation changed nothing, so it proves nothing', false);
  const a = run('s2', {}, lib);
  check('a flag loses its caveat, and the check notices', a.slots.some(s => s.flags.some(f => !f.caveat)));
})();

(function patchedSource(name, from, to) {
  const src = fs.readFileSync(path.join(ROOT, 'scripts/lib/xray-core.js'), 'utf8');
  if (!src.includes(from)) return check(`${name}: the mutation changed nothing, so it proves nothing`, false);
  const mod = { exports: {} };
  new Function('module', 'exports', src.replace(from, to))(mod, mod.exports);
  const a = mod.exports.analyze(Object.assign({}, base, { section: 's2' }));
  const ev = a.slots.find(x => x.slotId === 'evidence-response');
  check(`${name}, and the check notices`, ev.respondedShare !== (ev.n + 3) / 23);
})('a set-aside answer stops counting as a response', 'respondedShare: size ? (n + pending) / size : null', 'respondedShare: size ? n / size : null');

console.log('');
if (failures) {
  console.log(`${R}${W}Curriculum X-Ray: ${failures} check(s) failed.${Z}`);
  process.exit(1);
}
console.log(`${G}${W}Curriculum X-Ray: all checks passed.${Z}`);
