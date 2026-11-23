#!/usr/bin/env node
'use strict';

/**
 * backup-lookup.test.js
 *
 * The one-student backup lookup, scripts/backup-lookup.js, with stand-ins for
 * firebase-admin. Offline, so it runs on every push.
 *
 * What it proves:
 *   - only a district account is looked up, and --answers needs one topic, so a
 *     recovery lookup never prints a student's whole year;
 *   - "2.6", "Topic 2.6", "F1" and "Foundations 1" reach the stored topic keys;
 *   - an account that has never signed in is said plainly, and a credentials
 *     failure is NOT reported as "never signed in" (that would be a wrong answer
 *     delivered with confidence);
 *   - only the looked-up student's records are read;
 *   - the writing is hidden unless --answers is given;
 *   - a First & 10 question that never reached the backup is named;
 *   - times are Indiana time, not Cloud Shell's UTC;
 *   - answers saved from several browsers are flagged;
 *   - nothing is ever written.
 *
 * Negative controls at the end load broken copies of the script and prove the
 * assertions go red.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'scripts', 'backup-lookup.js');

const ANA = 'ana.ruiz@stumail.zcs.k12.in.us';
const NEW_KID = 'new.kid@stumail.zcs.k12.in.us';
const NO_RECORDS = 'quiet.kid@stumail.zcs.k12.in.us';

// Ana's backup: two First & 10 answers and Checkpoint 1 on 2.6 (Q3 never arrived),
// all three on 2.5, from two browsers. Ben's record is in the same collection and
// must never be read.
const at = iso => new Date(iso);
const DOCS = [
  { studentId: 'a1', topicKey: '2-6', slotId: 'first10-q1', text: 'ANA-2.6-Q1 Trade moved goods and ideas.', confidence: 3, updatedAt: at('2026-11-04T01:30:00Z'), clientId: 'c1' },
  { studentId: 'a1', topicKey: '2-6', slotId: 'first10-q2', text: 'ANA-2.6-Q2', confidence: '', updatedAt: at('2026-11-03T14:10:00Z'), clientId: 'c1' },
  { studentId: 'a1', topicKey: '2-6', slotId: 'checkpoint-one-response', text: 'ANA-2.6-CP1', confidence: 4, updatedAt: at('2026-11-03T15:00:00Z'), clientId: 'c1' },
  { studentId: 'a1', topicKey: '2-5', slotId: 'first10-q1', text: 'ANA-2.5-Q1', confidence: 2, updatedAt: at('2026-10-30T14:00:00Z'), clientId: 'c2' },
  { studentId: 'a1', topicKey: '2-5', slotId: 'first10-q2', text: 'ANA-2.5-Q2', confidence: 2, updatedAt: at('2026-10-30T14:01:00Z'), clientId: 'c2' },
  { studentId: 'a1', topicKey: '2-5', slotId: 'first10-q3', text: 'ANA-2.5-Q3', confidence: 2, updatedAt: at('2026-10-30T14:02:00Z'), clientId: 'c2' },
  { studentId: 'b1', topicKey: '2-6', slotId: 'first10-q3', text: 'BEN-PRIVATE', confidence: 5, updatedAt: at('2026-11-03T14:00:00Z'), clientId: 'c9' }
];

function fakes(opts) {
  const o = opts || {};
  const writes = [];
  const users = { [ANA]: 'a1', [NO_RECORDS]: 'q1', 'ben.cole@stumail.zcs.k12.in.us': 'b1' };
  const auth = {
    async getUserByEmail(e) {
      if (o.authBroken) { const err = new Error('Could not load the default credentials'); err.code = 'app/invalid-credential'; throw err; }
      if (!users[e]) { const err = new Error('no user'); err.code = 'auth/user-not-found'; throw err; }
      return { uid: users[e], metadata: { creationTime: 'Wed, 07 Oct 2026 13:02:00 GMT', lastSignInTime: 'Tue, 03 Nov 2026 13:15:00 GMT', lastRefreshTime: 'Tue, 17 Nov 2026 18:40:00 GMT' } };
    }
  };
  const snap = docs => ({ docs: docs.map(d => ({ id: d.studentId + '__' + d.topicKey + '__' + d.slotId, data: () => Object.assign({}, d) })) });
  const writer = name => (...args) => { writes.push([name, args]); return Promise.resolve(); };
  const node = p => ({
    path: p,
    set: writer('set'), update: writer('update'), delete: writer('delete'), add: writer('add'),
    collection: c => coll(p + '/' + c),
    doc: d => node(p + '/' + d)
  });
  const coll = p => Object.assign(node(p), {
    where: (field, op, value) => ({ get: async () => snap(DOCS.filter(d => op === '==' && d[field] === value)) }),
    get: async () => snap(DOCS)
  });
  const db = { collection: c => coll(c), batch: () => ({ set: writer('batch.set'), commit: writer('commit') }) };
  return { auth, db, writes };
}

const checks = [];
const check = (name, fn) => checks.push({ name, fn });

async function run1(M, args, f) {
  const opts = M.parseArgs(args);
  const result = await M.lookup(opts, f.auth, f.db);
  return M.report(opts, result);
}

check('only district accounts are looked up', async (M) => {
  assert.throws(() => M.parseArgs(['someone@gmail.com']), /not a school account/);
  assert.throws(() => M.parseArgs(['ana@stumail.zcs.k12.in.us.evil.com']), /not a school account/);
  assert.equal(M.parseArgs([ANA]).email, ANA);
  assert.equal(M.parseArgs(['Teacher@ZCS.k12.in.us']).email, 'teacher@zcs.k12.in.us');
});

check('--answers needs one topic', async (M) => {
  assert.throws(() => M.parseArgs([ANA, '--answers']), /needs one topic/);
  assert.equal(M.parseArgs([ANA, '--topic', '2.6', '--answers']).answers, true);
});

check('topic numbers in any spelling reach the stored keys', async (M) => {
  for (const s of ['2.6', 'Topic 2.6', '2-6', ' 2.6 ']) assert.equal(M.normaliseTopic(s), '2-6', s);
  for (const s of ['F1', 'Foundations 1', 'foundations-1', 'f1']) assert.equal(M.normaliseTopic(s), 'f1', s);
  assert.equal(M.normaliseTopic('two point six'), '');
  assert.throws(() => M.parseArgs([ANA, '--topic', 'banana split']), /not a topic number/);
});

check('a student who never signed in is said plainly', async (M) => {
  const out = await run1(M, [NEW_KID], fakes());
  assert.match(out, /never signed in/);
  assert.match(out, /Back up my work/);
});

check('a credentials failure is not reported as never signed in', async (M) => {
  const M2 = M;
  await assert.rejects(() => M2.lookup(M2.parseArgs([ANA]), fakes({ authBroken: true }).auth, fakes().db), /credentials/);
});

check('an account with nothing backed up gets the likely causes', async (M) => {
  const out = await run1(M, [NO_RECORDS], fakes());
  assert.match(out, /No answer from this student has ever been backed up/);
  assert.match(out, /Another student signed in on this Chromebook first/);
});

check('only this student\'s records are read', async (M) => {
  const out = await run1(M, [ANA], fakes());
  assert.match(out, /Backed up: 6 answers across 2 topics/);
  const shown = await run1(M, [ANA, '--topic', '2.6', '--answers'], fakes());
  assert.doesNotMatch(shown, /BEN-PRIVATE/);
});

check('the writing stays hidden unless asked', async (M) => {
  const out = await run1(M, [ANA, '--topic', '2.6'], fakes());
  assert.doesNotMatch(out, /ANA-2\.6/);
  assert.match(out, /First & 10, Question 1 +saved/);
  const shown = await run1(M, [ANA, '--topic', '2.6', '--answers'], fakes());
  assert.match(shown, /\| ANA-2\.6-Q1 Trade moved goods and ideas\./);
  assert.match(shown, /\| ANA-2\.6-CP1/);
  assert.doesNotMatch(shown, /ANA-2\.5/, 'another topic\'s writing leaked into a one-topic lookup');
});

check('a First & 10 question that never arrived is named', async (M) => {
  const out = await run1(M, [ANA, '--topic', '2.6'], fakes());
  assert.match(out, /First & 10, Question 3 +NOT BACKED UP/);
  assert.match(out, /1 of the 3 First & 10 answers for this topic never reached the backup/);
  const full = await run1(M, [ANA, '--topic', '2.5'], fakes());
  assert.doesNotMatch(full, /NOT BACKED UP/);
  assert.match(full, /All three First & 10 answers are backed up/);
  const none = await run1(M, [ANA, '--topic', '3.1'], fakes());
  assert.match(none, /Nothing from Topic 3\.1 reached the backup/);
});

check('times are Indiana time', async (M) => {
  // 01:30 UTC on Nov 4 is 8:30 PM on Nov 3 in Indiana. UTC would print Nov 4.
  const out = await run1(M, [ANA, '--topic', '2.6'], fakes());
  assert.match(out, /Question 1 +saved Nov 3, 2026, 8:30 PM/);
  assert.equal(M.TIME_ZONE, 'America/Indiana/Indianapolis');
});

check('answers saved from several browsers are flagged', async (M) => {
  const out = await run1(M, [ANA], fakes());
  assert.match(out, /2 different browsers/);
});

check('the lookup is read only', async (M) => {
  for (const args of [[ANA], [ANA, '--topic', '2.6', '--answers'], [NEW_KID], [NO_RECORDS]]) {
    const f = fakes();
    await run1(M, args, f);
    assert.deepEqual(f.writes, [], 'wrote: ' + JSON.stringify(f.writes));
  }
  const src = fs.readFileSync(SOURCE, 'utf8').replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
  assert.doesNotMatch(src, /\.(set|update|delete|add|batch|commit)\(|writeFile|appendFile/, 'the script carries a write call');
});

function load(source) {
  const sandbox = { module: { exports: {} }, require, __dirname: path.dirname(SOURCE), process, console };
  vm.runInNewContext(source, sandbox);
  return sandbox.module.exports;
}
async function run(M, quiet) {
  const failed = [];
  for (const c of checks) {
    try { await c.fn(M); if (!quiet) console.log('  \x1b[32m✓\x1b[0m ' + c.name); }
    catch (e) { failed.push(c.name); if (!quiet) console.log('  \x1b[31m✗\x1b[0m ' + c.name + '\n      ' + e.message); }
  }
  return failed;
}

(async () => {
  console.log('\x1b[1mBackup lookup\x1b[0m');
  let failures = (await run(require(SOURCE), false)).length;
  console.log('\n\x1b[1mNegative controls\x1b[0m');
  const src = fs.readFileSync(SOURCE, 'utf8');
  const controls = [
    ['a personal account is looked up', 'if (!DOMAINS.includes(domainOf(out.email))) throw', 'if (false) throw', /district accounts/],
    ['--answers works without a topic', 'if (out.answers && !out.topic) throw', 'if (false) throw', /needs one topic/],
    ['the writing is printed without --answers', 'if (opts.answers) {', 'if (true) {', /hidden unless asked/],
    ['a missing First & 10 question goes unmentioned', 'for (const id of missing) rows.push', 'for (const id of []) rows.push', /never arrived is named/],
    ['times print in UTC', 'timeZone: TIME_ZONE,', "timeZone: 'UTC',", /Indiana time/],
    ['every sign-in error reads as never signed in', "if (e && e.code === 'auth/user-not-found') return", 'if (e) return', /credentials failure/],
    ['every student\'s records are read', ".where('studentId', '==', user.uid).get()", '.get()', /only this student/],
    ['a write sneaks in', 'const snap = await db.collection', "await db.collection('tenants').doc(TENANT).set({ touched: true }); const snap = await db.collection", /read only/],
    ['a Foundations topic is not recognised', ".replace(/^foundations?[\\s-]*(\\d+)$/, 'f$1')", '', /any spelling/]
  ];
  for (const [name, from, to, expect] of controls) {
    if (!src.includes(from)) { console.log('  \x1b[31m✗\x1b[0m "' + name + '" no longer matches the script'); failures++; continue; }
    const caught = (await run(load(src.replace(from, to)), true)).filter(n => expect.test(n));
    if (caught.length) console.log('  \x1b[32m✓\x1b[0m "' + name + '" turns the checks red');
    else { console.log('  \x1b[31m✗\x1b[0m "' + name + '" went unnoticed'); failures++; }
  }
  console.log(failures ? '\n\x1b[31m' + failures + ' failed\x1b[0m' : '\n\x1b[32mAll backup lookup checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
