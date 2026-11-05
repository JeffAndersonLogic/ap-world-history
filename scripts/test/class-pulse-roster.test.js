#!/usr/bin/env node
'use strict';

/**
 * class-pulse-roster.test.js
 *
 * The class-list setup, scripts/class-pulse-roster.js, with stand-ins for
 * firebase-admin. Offline, so it runs on every push.
 *
 * What it proves:
 *   - the private class list is refused if it sits inside this public repository;
 *   - a line that is not a student account, has no name or is listed twice stops
 *     the run before anything is looked up;
 *   - the teacher must be a staff account that has signed in;
 *   - a student who has not signed in yet is reported and left off, not guessed;
 *   - a dry run writes nothing; --apply writes the list under the teacher's own id,
 *     names only, with the approval reference; students not in the file stay
 *     unless --remove-missing is given.
 *
 * Negative controls at the end load broken copies of the script and prove the
 * assertions go red.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'scripts', 'class-pulse-roster.js');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'roster-'));
const file = (name, body) => { const p = path.join(TMP, name); fs.writeFileSync(p, body); return p; };

const GOOD = file('g4.csv', 'email,name\nana.ruiz@stumail.zcs.k12.in.us,Ana Ruiz\nben.cole@stumail.zcs.k12.in.us,Ben Cole\nnew.kid@stumail.zcs.k12.in.us,New Kid\n');
const ARGS = [GOOD, '--teacher', 'Teacher@zcs.k12.in.us', '--class', 'G4', '--approval', 'Dan Layton, email of 2026-10-22'];

// firebase-admin stand-ins: accounts that exist, and a recorder for writes.
function fakes(existing) {
  const users = { 'teacher@zcs.k12.in.us': 't1', 'ana.ruiz@stumail.zcs.k12.in.us': 'a1', 'ben.cole@stumail.zcs.k12.in.us': 'b1' };
  const writes = [];
  const auth = { async getUserByEmail(e) { if (!users[e]) throw new Error('no user'); return { uid: users[e] }; } };
  const ref = p => ({
    path: p, firestore: { batch: () => ({ set: (r, d) => writes.push(['set', r.path, d]), delete: r => writes.push(['delete', r.path]), commit: async () => writes.push(['commit']) }) },
    collection: c => ({ doc: d => ref(p + '/' + c + '/' + d), get: async () => ({ docs: (existing || []).map(id => ({ id })) }) })
  });
  const db = { collection: c => ({ doc: d => ref(c + '/' + d) }) };
  return { auth, db, writes, FieldValue: { serverTimestamp: () => 'SERVER_TIME' } };
}

const checks = [];
const check = (name, fn) => checks.push({ name, fn });

check('a class list inside the public repository is refused', async (M) => {
  const inside = path.join(ROOT, 'scripts', 'tmp-roster-test.csv');
  fs.writeFileSync(inside, 'email,name\nana.ruiz@stumail.zcs.k12.in.us,Ana Ruiz\n');
  try { assert.throws(() => M.readList(inside), /outside the course repository/); }
  finally { fs.unlinkSync(inside); }
});

check('a bad line stops the run before anything is looked up', async (M) => {
  assert.throws(() => M.readList(file('staff.csv', 'teacher@zcs.k12.in.us,A Teacher\n')), /not a student account/);
  assert.throws(() => M.readList(file('noname.csv', 'ana.ruiz@stumail.zcs.k12.in.us,\n')), /no name/);
  assert.throws(() => M.readList(file('twice.csv', 'ana.ruiz@stumail.zcs.k12.in.us,Ana\nANA.RUIZ@stumail.zcs.k12.in.us,Ana\n')), /listed twice/);
  assert.throws(() => M.readList(file('look.csv', 'x@evilstumail.zcs.k12.in.us,X\n')), /not a student account/);
});

check('the teacher must be a staff account that has signed in', async (M) => {
  const f = fakes();
  await assert.rejects(M.plan(M.parseArgs([GOOD, '--teacher', 'kid@stumail.zcs.k12.in.us', '--class', 'G4', '--approval', 'Dan Layton, email']), M.readList(GOOD), f.auth, f.db), /staff account/);
  await assert.rejects(M.plan(M.parseArgs([GOOD, '--teacher', 'nobody@zcs.k12.in.us', '--class', 'G4', '--approval', 'Dan Layton, email']), M.readList(GOOD), f.auth, f.db), /has not signed in/);
  assert.throws(() => M.parseArgs([GOOD, '--teacher', 'teacher@zcs.k12.in.us', '--class', 'G4']), /approval/);
});

check('a student who has not signed in is reported and left off', async (M) => {
  const f = fakes();
  const p = await M.plan(M.parseArgs(ARGS), M.readList(GOOD), f.auth, f.db);
  assert.deepEqual(p.found.map(x => x.uid), ['a1', 'b1']);
  assert.deepEqual(p.notYet, ['new.kid@stumail.zcs.k12.in.us']);
  assert.match(M.report(M.parseArgs(ARGS), p), /1 have not signed in[\s\S]*new\.kid@/);
});

check('a dry run writes nothing', async (M) => {
  const f = fakes();
  const opts = M.parseArgs(ARGS);
  const p = await M.plan(opts, M.readList(GOOD), f.auth, f.db);
  assert.equal(f.writes.length, 0);
  assert.match(M.report(opts, p), /Nothing was written/);
});

check('--apply writes the list under the teacher\'s own id, names only', async (M) => {
  const f = fakes(['a1', 'gone1']);
  const opts = M.parseArgs(ARGS.concat(['--apply']));
  const p = await M.plan(opts, M.readList(GOOD), f.auth, f.db);
  await M.apply(opts, p, f.FieldValue);
  const sets = f.writes.filter(w => w[0] === 'set');
  assert.deepEqual(sets[0], ['set', 'tenants/zcs/rosters/t1', { classLabel: 'G4', approvalReference: 'Dan Layton, email of 2026-10-22', studentCount: 2, updatedAt: 'SERVER_TIME' }]);
  assert.deepEqual(sets.slice(1).map(w => [w[1], w[2]]), [['tenants/zcs/rosters/t1/students/a1', { label: 'Ana Ruiz' }], ['tenants/zcs/rosters/t1/students/b1', { label: 'Ben Cole' }]]);
  assert.ok(!JSON.stringify(f.writes).includes('@'), 'no email is stored');
  assert.ok(!f.writes.some(w => w[0] === 'delete'), 'a student not in the file stays without --remove-missing');
  assert.ok(f.writes.some(w => w[0] === 'commit'));
});

check('--remove-missing takes off students not in the file', async (M) => {
  const f = fakes(['a1', 'gone1']);
  const opts = M.parseArgs(ARGS.concat(['--apply', '--remove-missing']));
  await M.apply(opts, await M.plan(opts, M.readList(GOOD), f.auth, f.db), f.FieldValue);
  assert.deepEqual(f.writes.filter(w => w[0] === 'delete'), [['delete', 'tenants/zcs/rosters/t1/students/gone1']]);
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
  console.log('\x1b[1mClass Pulse class-list setup\x1b[0m');
  let failures = (await run(require(SOURCE), false)).length;
  console.log('\n\x1b[1mNegative controls\x1b[0m');
  const src = fs.readFileSync(SOURCE, 'utf8');
  const controls = [
    ['a list inside the repository is accepted', "if (!rel.startsWith('..') && !path.isAbsolute(rel)) throw", 'if (false) throw', /inside the public repository/],
    ['staff accounts pass as students', 'else if (domainOf(email) !== STUDENT)', 'else if (false)', /bad line stops/],
    ['a student who has not signed in is guessed at', "catch (_) { notYet.push(s.email); }", "catch (_) { found.push({ uid: s.email, name: s.name, email: s.email }); }", /reported and left off/],
    ['emails are stored with names', "batch.set(p.listRef.collection('students').doc(f.uid), { label: f.name })", "batch.set(p.listRef.collection('students').doc(f.uid), { label: f.name, email: f.email })", /names only/],
    ['students are removed without being asked', 'if (opts.removeMissing) p.extra.forEach', 'if (true) p.extra.forEach', /names only/]
  ];
  for (const [name, from, to, expect] of controls) {
    if (!src.includes(from)) { console.log('  \x1b[31m✗\x1b[0m "' + name + '" no longer matches the script'); failures++; continue; }
    const caught = (await run(load(src.replace(from, to)), true)).filter(n => expect.test(n));
    if (caught.length) console.log('  \x1b[32m✓\x1b[0m "' + name + '" turns the checks red');
    else { console.log('  \x1b[31m✗\x1b[0m "' + name + '" went unnoticed'); failures++; }
  }
  fs.rmSync(TMP, { recursive: true, force: true });
  console.log(failures ? '\n\x1b[31m' + failures + ' failed\x1b[0m' : '\n\x1b[32mAll class-list setup checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
