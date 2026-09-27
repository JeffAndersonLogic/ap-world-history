#!/usr/bin/env node
'use strict';
/**
 * topic-audit-coverage.test.js
 *
 * Offline contract for the topic-audit record keeping, its coverage index, and the
 * freshness check that is supposed to shout when the whole thing goes quiet.
 *
 * It is mostly negative controls, on purpose. Every assertion in
 * check-audit-freshness.js exists to catch a silence, and a check that watches for
 * silence is exactly the kind that can quietly stop watching: it reports green
 * whether it is working or whether it has been defeated. So each branch is driven
 * to red here, and the all-clean fixture proves it can still go green, because a
 * check that cannot pass gets disabled within a week.
 *
 *   node scripts/test/topic-audit-coverage.test.js
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');

const cov = require('../lib/topic-audit-coverage.js');
const { evaluate } = require('../check-audit-freshness.js');

let pass = 0, fail = 0;
function check(name, fn) {
  try { fn(); console.log(`  PASS  ${name}`); pass++; }
  catch (e) { console.log(`  FAIL  ${name}\n          ${e.message}`); fail++; }
}

// ---------------------------------------------------------------------------
// A synthetic coverage object: one topic taught soon, audited, nothing changed.
// ---------------------------------------------------------------------------
const TODAY = '2026-10-01';
function clean(over) {
  const base = {
    today: TODAY,
    horizon: '2026-10-11',
    horizonDays: 10,
    rows: [
      { topic: '2.6', first: '2026-10-05', last: '2026-10-06',
        days: [{ date: '2026-10-05', cohort: 'green' }, { date: '2026-10-06', cohort: 'silver' }],
        upcoming: true, taught: false, state: 'fresh', why: 'audited 2026-10-01',
        audited: '2026-10-01', mode: 'fix', record: 'topic-2-6-2026-10-01.md',
        ownChanged: '2026-09-30', sharedChanged: null }
    ],
    sweeps: ['2026-09-27'],
    lastSweep: '2026-09-27',
    malformed: []
  };
  return Object.assign(base, over || {});
}

console.log('\nTopic audit coverage and freshness\n');
console.log('  --- the check can pass (without this, every red below is meaningless) ---');

check('a clean fixture passes with no failures', () => {
  const r = evaluate(clean());
  assert.strictEqual(r.failures.length, 0, 'expected no failures, got: ' + JSON.stringify(r.failures));
  assert.strictEqual(r.ok, true);
  assert.strictEqual(r.sweepState, 'alive');
});

console.log('\n  --- negative controls: the automation going quiet ---');

check('a shallow clone fails, because it silently disables the staleness half', () => {
  // The trap this defends against is a one-line workflow change, not an edit to
  // any of this code: drop fetch-depth: 0 and every audited topic reads fresh
  // forever while the check still prints a confident pass. The session that wrote
  // this test was itself running in a shallow clone.
  const r = evaluate(clean({ shallow: true }));
  const f = r.failures.filter(x => /shallow/i.test(x.what));
  assert.strictEqual(f.length, 1, 'a shallow clone must fail');
  assert.ok(/unshallow|fetch-depth/.test(f[0].do), 'should name the fix');
});

check('a full clone does not raise it', () => {
  assert.strictEqual(evaluate(clean({ shallow: false })).failures.filter(x => /shallow/i.test(x.what)).length, 0);
});

check('a missing sweep marker fails as an automation problem', () => {
  const r = evaluate(clean({ sweeps: [], lastSweep: null }));
  const f = r.failures.filter(x => x.kind === 'automation');
  assert.strictEqual(f.length, 1, 'expected 1 automation failure');
  assert.strictEqual(r.sweepState, 'missing');
  assert.ok(/never run/i.test(f[0].why), 'should say it has never run');
});

check('a sweep marker older than the limit fails as overdue', () => {
  const r = evaluate(clean({ sweeps: ['2026-09-01'], lastSweep: '2026-09-01' }));
  assert.strictEqual(r.sweepState, 'overdue');
  assert.strictEqual(r.failures.filter(x => x.kind === 'automation').length, 1);
});

check('a sweep marker exactly at the limit is still alive, not overdue', () => {
  // today - 8 = 2026-09-23. The boundary must not be off by one, or a weekly
  // sweep is reported broken every eighth day for no reason, which is how a
  // check earns its way into being ignored.
  const r = evaluate(clean({ sweeps: ['2026-09-23'], lastSweep: '2026-09-23' }));
  assert.strictEqual(r.sweepState, 'alive', 'boundary date should count as alive');
});

check('one day past the limit does fail, so the boundary is real', () => {
  const r = evaluate(clean({ sweeps: ['2026-09-22'], lastSweep: '2026-09-22' }));
  assert.strictEqual(r.sweepState, 'overdue');
});

console.log('\n  --- negative controls: coverage ---');

check('an upcoming topic with no record fails', () => {
  const rows = clean().rows.map(r => Object.assign({}, r, { state: 'never', why: 'no audit record', audited: null, record: null }));
  const r = evaluate(clean({ rows }));
  const f = r.failures.filter(x => x.kind === 'coverage');
  assert.strictEqual(f.length, 1);
  assert.strictEqual(f[0].topic, '2.6');
  assert.ok(/\/topic-audit 2\.6/.test(f[0].do), 'should name the command to run');
});

check('an upcoming topic revised after its audit fails as stale', () => {
  const rows = clean().rows.map(r => Object.assign({}, r, { state: 'stale', why: 'content changed after the audit' }));
  const r = evaluate(clean({ rows }));
  assert.strictEqual(r.failures.filter(x => x.kind === 'coverage').length, 1);
});

check('a topic NOT taught soon does not fail, however stale', () => {
  const rows = clean().rows.map(r => Object.assign({}, r, { upcoming: false, state: 'never', last: '2026-09-02' }));
  const r = evaluate(clean({ rows }));
  assert.strictEqual(r.failures.filter(x => x.kind === 'coverage').length, 0,
    'the check is about what is about to be taught, not the whole backlog');
});

console.log('\n  --- negative control: the false green this check exists to refuse ---');

check('an exhausted schedule fails instead of reporting all clear', () => {
  // Every row in the past: nothing is "upcoming", so every coverage assertion
  // passes for want of anything to check. Without this branch the script would
  // print PASS on a course nobody is scheduling any more.
  const rows = clean().rows.map(r => Object.assign({}, r,
    { upcoming: false, taught: true, first: '2026-09-01', last: '2026-09-02', state: 'never' }));
  const r = evaluate(clean({ rows }));
  const f = r.failures.filter(x => x.kind === 'schedule');
  assert.strictEqual(f.length, 1, 'an exhausted schedule must fail');
  assert.ok(/run out/i.test(f[0].what));
});

check('a schedule ending inside the window warns but does not fail on its own', () => {
  const rows = clean().rows.concat([]);
  const r = evaluate(clean({ rows }));
  assert.ok(r.notes.some(n => /schedule ends/i.test(n)), 'expected a warning note');
  assert.strictEqual(r.failures.filter(x => x.kind === 'schedule').length, 0);
});

console.log('\n  --- negative control: a record that silently stops counting ---');

check('an unreadable record fails rather than reading as never audited', () => {
  const r = evaluate(clean({ malformed: [{ file: 'topic-2-6-bad.md', problems: ['no valid audited date'] }] }));
  const f = r.failures.filter(x => x.kind === 'record');
  assert.strictEqual(f.length, 1);
  assert.ok(/never audited/i.test(f[0].why));
});

// ---------------------------------------------------------------------------
// The parser and the topic->file mapping, against real fixture files on disk.
// ---------------------------------------------------------------------------
console.log('\n  --- record parsing ---');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-audit-'));
fs.writeFileSync(path.join(tmp, 'topic-2-6-2026-10-01.md'),
  '---\ntopic: "2.6"\naudited: 2026-10-01\nmode: fix\n---\n\n# body\n');
fs.writeFileSync(path.join(tmp, 'topic-2-7-2026-10-02.md'),
  "---\ntopic: '2.7'\naudited: 2026-10-02\nmode: report\n---\n");
fs.writeFileSync(path.join(tmp, 'topic-bad-nofm.md'), '# no front matter at all\n');
fs.writeFileSync(path.join(tmp, 'topic-bad-nodate.md'), '---\ntopic: "3.1"\nmode: fix\n---\n');
fs.writeFileSync(path.join(tmp, 'index.md'), '# not a record\n');

check('valid records parse, both quote styles', () => {
  const recs = cov.auditRecords(tmp);
  const good = recs.filter(r => !r.problems.length);
  assert.strictEqual(good.length, 2, 'expected 2 good records, got ' + good.length);
  assert.deepStrictEqual(good.map(r => r.topic).sort(), ['2.6', '2.7']);
  assert.strictEqual(good.find(r => r.topic === '2.7').mode, 'report');
});

check('index.md is not mistaken for a record', () => {
  assert.ok(!cov.auditRecords(tmp).some(r => r.file === 'index.md'));
});

check('a malformed record is reported, never thrown', () => {
  const bad = cov.auditRecords(tmp).filter(r => r.problems.length);
  assert.strictEqual(bad.length, 2);
  assert.ok(bad.some(r => /no front matter/.test(r.problems.join())));
  assert.ok(bad.some(r => /audited date/.test(r.problems.join())));
});

check('the newest record wins when a topic has several', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-audit2-'));
  for (const d of ['2026-08-01', '2026-10-05', '2026-09-01']) {
    fs.writeFileSync(path.join(dir, `topic-2-6-${d}.md`), `---\ntopic: "2.6"\naudited: ${d}\nmode: fix\n---\n`);
  }
  const c = cov.coverage({
    today: TODAY, auditDir: dir, sweepDir: dir,
    allFiles: ['assets/data/lesson-2-6-x.js'],
    lastChanged: () => null
  });
  const row = c.rows.find(r => r.topic === '2.6');
  assert.strictEqual(row.audited, '2026-10-05', 'should pick the latest audit date');
});

console.log('\n  --- topic to file mapping ---');

check('a unit topic matches its own files', () => {
  const { own } = cov.topicFiles('2.6', [
    'assets/data/lesson-2-6-environmental-consequences.js',
    'teacher/data/topic-2-6-teaching-base.js',
    'unit-2/presentation-topic-2-6-student.html',
    'assets/data/lesson-2-5-silk-roads.js'
  ]);
  assert.ok(own.includes('assets/data/lesson-2-6-environmental-consequences.js'));
  assert.ok(own.includes('teacher/data/topic-2-6-teaching-base.js'));
  assert.ok(!own.some(f => f.includes('2-5')), '2.6 must not claim 2.5 files');
});

check('a topic number is boundary matched, so 2-6 never matches 12-6 or 2-60', () => {
  const { own } = cov.topicFiles('2.6', [
    'assets/data/lesson-12-6-thing.js',
    'assets/data/lesson-2-60-thing.js',
    'assets/data/lesson-2-6-real.js'
  ]);
  assert.deepStrictEqual(own, ['assets/data/lesson-2-6-real.js']);
});

check('generated module art is excluded, so an art rebuild never marks a topic stale', () => {
  const { own } = cov.topicFiles('2.6', [
    'assets/images/module-art/unit-2/topic-2-6/map.svg',
    'assets/images/topics/2-6/README.md',
    'assets/data/lesson-2-6-real.js'
  ]);
  assert.deepStrictEqual(own, ['assets/data/lesson-2-6-real.js']);
});

check('a unit-wide reading module is reported as shared, not as the topic itself', () => {
  const { own, shared } = cov.topicFiles('2.6', [
    'scripts/lib/reading-content/2.js', 'assets/data/lesson-2-6-real.js'
  ]);
  assert.deepStrictEqual(shared, ['scripts/lib/reading-content/2.js']);
  assert.ok(!own.includes('scripts/lib/reading-content/2.js'));
});

check('a Foundations topic maps to foundations-N', () => {
  const { own } = cov.topicFiles('F3', [
    'foundations/foundations-3-states-power.html',
    'foundations/foundations-4-other.html'
  ]);
  assert.deepStrictEqual(own, ['foundations/foundations-3-states-power.html']);
});

console.log('\n  --- state derivation ---');

function stateFor(auditDate, ownChange, sharedChange) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-audit3-'));
  if (auditDate) fs.writeFileSync(path.join(dir, `topic-2-6-${auditDate}.md`),
    `---\ntopic: "2.6"\naudited: ${auditDate}\nmode: fix\n---\n`);
  const c = cov.coverage({
    today: TODAY, auditDir: dir, sweepDir: dir,
    allFiles: ['assets/data/lesson-2-6-x.js', 'scripts/lib/reading-content/2.js'],
    lastChanged: files => (files.some(f => f.includes('reading-content')) ? sharedChange : ownChange)
  });
  return c.rows.find(r => r.topic === '2.6').state;
}

check('no record reads as never', () => assert.strictEqual(stateFor(null, null, null), 'never'));
check('audited with nothing since reads as fresh', () => assert.strictEqual(stateFor('2026-09-20', '2026-09-19', null), 'fresh'));
check('own content changed after the audit reads as stale', () => assert.strictEqual(stateFor('2026-09-20', '2026-09-25', null), 'stale'));
check('a shared unit file changed after the audit reads as shared-changed', () => assert.strictEqual(stateFor('2026-09-20', '2026-09-01', '2026-09-25'), 'shared-changed'));
check('own change outranks a shared change on the same day', () => assert.strictEqual(stateFor('2026-09-20', '2026-09-25', '2026-09-25'), 'stale'));
check('a change on the audit date itself is not stale, since the audit commits its own fixes', () =>
  assert.strictEqual(stateFor('2026-09-20', '2026-09-20', null), 'fresh'));

console.log('\n  --- sweep markers ---');

check('only YYYY-MM-DD.md counts as a sweep marker', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-sweep-'));
  for (const f of ['2026-09-27.md', '2026-10-04.md', 'README.md', 'notes.txt', '2026-9-1.md']) {
    fs.writeFileSync(path.join(dir, f), 'x');
  }
  assert.deepStrictEqual(cov.sweeps(dir), ['2026-09-27', '2026-10-04']);
});

check('a missing sweep directory is empty, not a crash', () => {
  assert.deepStrictEqual(cov.sweeps(path.join(os.tmpdir(), 'bh-nope-' + Date.now())), []);
});

console.log('\n  --- the real repository ---');

check('the committed index matches the records (drift check)', () => {
  const { execFileSync } = require('child_process');
  execFileSync('node', ['scripts/build-topic-audit-index.js', '--check'],
    { cwd: path.resolve(__dirname, '..', '..'), encoding: 'utf8' });
});

check('the generated index carries no date-relative section', () => {
  const { render } = require('../build-topic-audit-index.js');
  const a = render(cov.coverage({ today: '2026-10-01' }));
  const b = render(cov.coverage({ today: '2027-05-01' }));
  assert.strictEqual(a, b, 'the index must not change merely because a day passed');
});

console.log(`\n  ${fail ? 'FAIL' : 'PASS'}  ${pass + fail} assertion(s), ${fail} failed\n`);
process.exit(fail ? 1 : 0);
