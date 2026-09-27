#!/usr/bin/env node
'use strict';

/**
 * The teaching freeze check, proved able to fail.
 *
 * Two layers. The pure logic runs against the real schedule. The command-line
 * check runs end to end inside a throwaway git repository built from real repo
 * files, because a check that is only ever run against the repository it lives
 * in can only ever say what that repository's history happens to allow.
 *
 * The central case is the one that produced the rule: on 2026-09-22 Topic 2.3's
 * First & 10 was rewritten between Green's class and Silver's. That change must
 * be refused on that date and allowed after Silver.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFileSync, spawnSync } = require('child_process');
const F = require('../lib/teaching-freeze');

const ROOT = path.resolve(__dirname, '..', '..');
const CHECK = path.join(ROOT, 'scripts', 'check-teaching-freeze.js');
let failures = 0;
let passes = 0;

function ok(cond, msg) {
  if (cond) { passes++; console.log(`  PASS  ${msg}`); }
  else { failures++; console.log(`  FAIL  ${msg}`); }
}

function loadSchedule() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/data/announcements-schedule.js'), 'utf8'), sandbox);
  return sandbox.window.BEHISTORICAL_SCHEDULE;
}

console.log('\nTeaching freeze: logic against the real schedule');
const schedule = loadSchedule();
const w = F.freezeWindows(schedule);
ok(w['2.3'] && w['2.3'].first === '2026-09-22' && w['2.3'].last === '2026-09-23', 'Topic 2.3 is frozen 2026-09-22 through 2026-09-23');
ok(F.frozenTopics(schedule, '2026-09-22').some(f => f.topic === '2.3'), '2.3 is frozen on Green\'s day');
ok(F.frozenTopics(schedule, '2026-09-23').some(f => f.topic === '2.3'), '2.3 is still frozen on Silver\'s day');
ok(!F.frozenTopics(schedule, '2026-09-24').some(f => f.topic === '2.3'), '2.3 thaws the day after Silver');
ok(F.frozenTopics(schedule, '2026-09-20').some(f => f.topic === '2.2'), 'a Friday Green and Monday Silver freeze the weekend between');

ok(F.schoolDate(new Date('2026-09-23T02:00:00Z')) === '2026-09-22', 'the date is the school\'s, not UTC: 10pm in Indiana is still Green\'s day');

const frozen23 = [{ topic: '2.3', first: '2026-09-22', last: '2026-09-23' }];
const rewrite = ['unit-2/first-and-10-topic-2-3-indian-ocean.html', 'assets/data/lesson-2-3-renderer-config.js'];
ok(F.violations(rewrite, frozen23).length === 1, 'the 2.3 First & 10 rewrite is a violation');
ok(F.violations(['unit-2/first-and-10-topic-2-4-trans-saharan.html', 'CLAUDE.md', 'assets/js/behistorical-topic-renderer-v1.js'], frozen23).length === 0, 'another topic, the rules file and shared code are not');
ok(F.violations(['docs/TOPIC-2-3-NOTES.md'], frozen23).length === 0, 'a document under docs/ is not student-facing');
ok(F.violations(['beintheroom/unit-2/indian-ocean-port.html'], frozen23, { '2.3': ['beintheroom/unit-2/indian-ocean-port.html'] }).length === 1, 'the scenario a topic links is that topic\'s');

const frozen51 = [{ topic: '5.1', first: 'x', last: 'y' }];
ok(F.violations(['assets/data/lesson-5-10-something.js'], frozen51).length === 0, 'Topic 5.1 does not claim Topic 5.10\'s files');
ok(F.violations(['assets/data/lesson-5-1-something.js'], frozen51).length === 1, 'Topic 5.1 does claim its own');
ok(F.violations(['foundations/first-and-10-foundations-3-states-power.html'], [{ topic: 'F3', first: 'x', last: 'y' }]).length === 1, 'Foundations topics are matched too');

ok(F.overrideReason(['Fix it\n\nShip-this-fix: save button lost work']) === 'save button lost work', 'the override trailer is read');
ok(F.overrideReason(['Mentions Ship-this-fix: inline, not as a trailer line']) === null, 'the override must be its own line');

console.log('\nTeaching freeze: the command-line check, end to end');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'freeze-'));
const g = (...a) => execFileSync('git', a, { cwd: tmp, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
function write(rel, content) {
  fs.mkdirSync(path.dirname(path.join(tmp, rel)), { recursive: true });
  fs.writeFileSync(path.join(tmp, rel), content);
}
function copy(rel) { write(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8')); }
function run(...a) {
  const r = spawnSync('node', [CHECK, ...a], { cwd: tmp, encoding: 'utf8' });
  return r.status;
}

try {
  g('init', '-q', '-b', 'main');
  g('config', 'user.email', 'test@example.com');
  g('config', 'user.name', 'Freeze Test');
  copy('assets/data/announcements-schedule.js');
  copy('assets/data/ap-practice-units-1-2.js');
  write('unit-2/first-and-10-topic-2-3-indian-ocean.html', '<p>before</p>\n');
  write('unit-2/first-and-10-topic-2-7-comparison.html', '<p>before</p>\n');
  g('add', '-A'); g('commit', '-q', '-m', 'base');
  const base = g('rev-parse', 'HEAD').trim();

  g('checkout', '-q', '-b', 'work');
  write('unit-2/first-and-10-topic-2-3-indian-ocean.html', '<p>rewritten between the two rooms</p>\n');
  g('commit', '-qam', 'Rewrite the 2.3 reading');
  ok(run('--base', base, '--date', '2026-09-22') === 1, 'the rewrite is BLOCKED on Green\'s day');
  ok(run('--base', base, '--date', '2026-09-23') === 1, 'and on Silver\'s day');
  ok(run('--base', base, '--date', '2026-09-24') === 0, 'and allowed once Silver has been taught');

  g('commit', '-q', '--allow-empty', '-m', 'Override\n\nShip-this-fix: the answer box did not save');
  ok(run('--base', base, '--date', '2026-09-22') === 0, 'a Ship-this-fix trailer lets it through');

  g('checkout', '-q', 'main'); g('checkout', '-q', '-b', 'other');
  write('unit-2/first-and-10-topic-2-7-comparison.html', '<p>2.7 work</p>\n');
  g('commit', '-qam', 'Work on 2.7');
  ok(run('--base', base, '--date', '2026-09-22') === 0, 'work on a topic that is not frozen is allowed');

  const ap = path.join(tmp, 'assets/data/ap-practice-units-1-2.js');
  const src = fs.readFileSync(ap, 'utf8');
  const in27 = 'Build and Stress-Test a Network Comparison';
  const in23 = 'Connect Environment, Technology, and Port-City Growth';
  ok(src.includes(in27) && src.includes(in23), 'fixture strings exist in the shared Units 1-2 file');
  fs.writeFileSync(ap, src.replace(in27, in27 + ' (revised)'));
  g('commit', '-qam', 'Edit only the 2.7 entry of the shared file');
  ok(run('--base', base, '--date', '2026-09-22') === 0, 'editing another topic\'s entry in the shared file is allowed');
  fs.writeFileSync(ap, fs.readFileSync(ap, 'utf8').replace(in23, in23 + ' (revised)'));
  g('commit', '-qam', 'Edit the 2.3 entry of the shared file');
  ok(run('--base', base, '--date', '2026-09-22') === 1, 'editing the frozen topic\'s entry in the shared file is BLOCKED');

  ok(run('--base', 'does-not-exist', '--date', '2026-09-22') === 2, 'no base to compare is exit 2, not a pass');
  ok(run('--base', 'does-not-exist', '--date', '2026-09-22', '--strict') === 1, 'and --strict makes it a failure');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

console.log(`\n${passes} passed, ${failures} failed.`);
process.exit(failures ? 1 : 0);
