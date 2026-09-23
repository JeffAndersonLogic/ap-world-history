#!/usr/bin/env node
'use strict';

/**
 * Refuse a change that would alter a topic while it is being taught.
 *
 *   node scripts/check-teaching-freeze.js [--base <ref>] [--head <ref>] [--date YYYY-MM-DD] [--ci] [--strict]
 *
 * Compares <base>..<head> (default: merge-base with origin/main, then HEAD),
 * finds which scheduled topics are frozen today in the school's time zone, and
 * fails if the change touches a frozen topic's student or projector files. A
 * commit carrying a `Ship-this-fix: <reason>` trailer lets the change through;
 * write that trailer only when Jeff has said "ship this fix".
 *
 * Exit 0: allowed. Exit 1: blocked. Exit 2: could not tell (no base to compare
 * against), which --strict turns into a failure so CI can never pass having
 * compared nothing.
 *
 * Where it runs, and why three places. The Validate workflow runs it on every
 * push, which is the gate main actually enforces. But a required check binds to
 * a commit, not a day: a branch that went green the evening before Green's class
 * can be fast-forwarded onto main the next morning without the check running
 * again. So the pre-push hook runs it on any push to main, and the ship-to-main
 * skill runs it immediately before the fast-forward. On main itself the workflow
 * runs it after the fact, which cannot block but does leave a red record.
 *
 * Not covered, deliberately: shared code that every topic uses, such as the
 * renderers and stylesheets. The freeze is about one topic's lesson changing
 * between two rooms, and a rule that froze the shared renderer would freeze the
 * whole course on every school day.
 */

const { execFileSync } = require('child_process');
const vm = require('vm');
const F = require('./lib/teaching-freeze');

const SCHEDULE = 'assets/data/announcements-schedule.js';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}
const has = name => process.argv.includes(name);
const strict = has('--strict');

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}
function tryGit(...args) {
  try { return git(...args); } catch { return null; }
}
function show(ref, path) {
  return tryGit('show', `${ref}:${path}`);
}

function unresolved(msg) {
  console.error(`teaching freeze: ${msg}`);
  console.error('teaching freeze: nothing was compared, so this is not a pass.');
  process.exit(strict ? 1 : 2);
}

function resolveBase(head) {
  const explicit = arg('--base');
  if (explicit) return tryGit('rev-parse', '--verify', `${explicit}^{commit}`);
  if (has('--ci') && process.env.GITHUB_REF === 'refs/heads/main') {
    const before = process.env.FREEZE_BEFORE || '';
    if (/^0+$/.test(before) || !before) return null;
    return tryGit('rev-parse', '--verify', `${before}^{commit}`);
  }
  return tryGit('merge-base', 'origin/main', head) || tryGit('rev-parse', '--verify', 'origin/main^{commit}');
}

function loadSchedule(src) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: SCHEDULE });
  return sandbox.window.BEHISTORICAL_SCHEDULE;
}

// What a multi-topic runtime file hands one topic's lesson, as JSON.
function evaluateForTopic(src, topic) {
  if (src == null) return null;
  const lesson = { meta: { topic: `Topic ${topic}` } };
  const sandbox = { window: { BEHISTORICAL_LESSON: lesson } };
  try {
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { timeout: 2000 });
  } catch (e) {
    return `error: ${e.message}`;
  }
  return JSON.stringify(sandbox.window.BEHISTORICAL_LESSON);
}

const head = tryGit('rev-parse', '--verify', `${arg('--head') || 'HEAD'}^{commit}`);
if (!head) unresolved('cannot resolve the head commit.');
const base = resolveBase(head);
if (!base) unresolved('no base commit to compare against (is origin/main fetched?).');

const date = arg('--date') || F.schoolDate(new Date());
const scheduleSrc = show(base, SCHEDULE) || show(head, SCHEDULE);
if (!scheduleSrc) unresolved(`cannot read ${SCHEDULE}.`);
const frozen = F.frozenTopics(loadSchedule(scheduleSrc), date);

if (!frozen.length) {
  console.log(`teaching freeze: nothing is frozen on ${date}.`);
  process.exit(0);
}

const changed = (tryGit('diff', '--name-only', base, head) || '').split('\n').filter(Boolean);
const tracked = (tryGit('ls-tree', '-r', '--name-only', head) || '').split('\n');

const extraOwned = {};
const multiTopicHits = {};
for (const { topic } of frozen) {
  const patterns = F.topicPatterns(topic);
  const dataFiles = tracked.filter(p =>
    (p.startsWith('assets/data/') || p.startsWith('foundations/')) && p.endsWith('.js') &&
    patterns.some(re => re.test(p)));
  const sources = dataFiles.flatMap(p => [show(head, p), show(base, p)]).filter(Boolean);
  extraOwned[topic] = F.linkedScenarios(sources);

  for (const file of F.MULTI_TOPIC_FILES) {
    if (!changed.includes(file)) continue;
    if (evaluateForTopic(show(base, file), topic) !== evaluateForTopic(show(head, file), topic)) {
      (multiTopicHits[topic] = multiTopicHits[topic] || []).push(file);
    }
  }
}

const found = F.violations(changed, frozen, extraOwned, multiTopicHits);
const names = frozen.map(f => `${f.topic} (${f.first} to ${f.last})`).join(', ');

if (!found.length) {
  console.log(`teaching freeze: ${date}, frozen ${names}. This change touches none of them.`);
  process.exit(0);
}

const messages = (tryGit('log', '--format=%B%x00', `${base}..${head}`) || '').split('\0');
const reason = F.overrideReason(messages);

for (const v of found) {
  console.log(`\nTopic ${v.topic} is being taught (${v.first} to ${v.last}). This change touches:`);
  for (const f of v.files) console.log(`  ${f}`);
}

if (reason) {
  console.log(`\nteaching freeze: allowed by "Ship-this-fix: ${reason}".`);
  console.log('teaching freeze: tell the cohort that was already taught about the fix at their next class.');
  process.exit(0);
}

console.error(`\nteaching freeze: BLOCKED on ${date}.`);
console.error('Green and Silver must be taught the same lesson. Hold this change until the');
console.error('topic thaws, or, only if Jeff has said "ship this fix" for a broken lesson,');
console.error('add a commit whose message has the line:  Ship-this-fix: <what was broken>');
process.exit(1);
