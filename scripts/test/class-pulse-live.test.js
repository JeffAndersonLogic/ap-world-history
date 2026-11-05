#!/usr/bin/env node
'use strict';

/**
 * class-pulse-live.test.js
 *
 * Class Pulse's live side, teacher/class-pulse-live.js, against the Firestore
 * emulator with the real firestore/firestore.rules loaded: the requests the
 * teacher page makes are the ones the rules accept, and what comes back is read
 * the way the page needs it.
 *
 * What it proves:
 *   - a teacher reads their own class list, sorted, and an account with none is
 *     told so rather than shown an empty class;
 *   - an answer counts as submitted only while its Submit receipt still matches
 *     it: a changed answer, an answer with no receipt and a missing answer are
 *     each told apart;
 *   - a student not on the list cannot be read, and a student cannot read a list;
 *   - ratings save in batches the rules accept, with the server's time, and read
 *     back for their topic only.
 *
 * Like firestore-rules.test.js and sync-transport.test.js it needs the emulator
 * and lives in the `rules` suite:
 *
 *   npm run test:rules:emulator
 *
 * The last section loads broken copies of the module and asserts the checks go red.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'teacher', 'class-pulse-live.js');
const Sync = require(path.join(ROOT, 'assets', 'js', 'behistorical-sync.js'));
const STRICT = process.argv.includes('--strict');
const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

const HOST = process.env.FIRESTORE_EMULATOR_HOST;
if (!HOST) {
  if (STRICT) { console.log(`${R}${W}Class Pulse live (emulator): no emulator is running, and --strict forbids skipping.${X}`); process.exit(1); }
  console.log(`${Y}SKIP${X} Class Pulse live (emulator): no emulator is running.`);
  console.log(`${D}  npm run test:rules:emulator${X}`);
  process.exit(2);
}
const PROJECT = process.env.GCLOUD_PROJECT || 'demo-behistorical-rules';
const API = `http://${HOST}/v1`;
const DB = `projects/${PROJECT}/databases/(default)/documents`;

function tokenFor(uid, email) {
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  return [b64({ alg: 'none', typ: 'JWT' }), b64({
    iss: 'https://securetoken.google.com/' + PROJECT, aud: PROJECT, auth_time: now, iat: now, exp: now + 3600,
    sub: uid, user_id: uid, email, email_verified: true,
    firebase: { identities: { email: [email] }, sign_in_provider: 'google.com' }
  }), ''].join('.');
}

// Seeding bypasses the rules, as the class-list setup's administrator credentials do.
async function seed(name, fields) {
  const res = await fetch(`${API}/${DB}/${name}`, { method: 'PATCH', headers: { Authorization: 'Bearer owner', 'Content-Type': 'application/json' }, body: JSON.stringify({ fields }) });
  if (!res.ok) throw new Error('seed failed ' + name + ' ' + res.status + ' ' + await res.text());
}
const s = v => ({ stringValue: v });
const answer = (uid, topic, slot, text, confidence) => ({
  tenantId: s('zcs'), studentId: s(uid), courseId: s('apwh'), topicKey: s(topic), slotId: s(slot), text: s(text),
  confidence: confidence ? { integerValue: String(confidence) } : s(''), createdAt: { timestampValue: new Date().toISOString() },
  updatedAt: { timestampValue: new Date().toISOString() }, schemaVersion: { integerValue: '1' }
});

let failures = 0, quiet = false;
const failed = [];
function check(label, ok, detail) {
  if (!ok) { failures++; failed.push(label); }
  if (!quiet) console.log(ok ? `  ${G}PASS${X} ${label}` : `  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
}
const code = async p => { try { await p; return 'ok'; } catch (e) { return e.code || 'threw'; } };

const RUN = String(Date.now()).slice(-6);
const T = 'teach' + RUN, OTHER = 'other' + RUN, A = 'ana' + RUN, B = 'ben' + RUN, C = 'cal' + RUN, OUT = 'out' + RUN;

async function seedAll() {
  await seed(`tenants/zcs/rosters/${T}`, { classLabel: s('G4') });
  await seed(`tenants/zcs/rosters/${T}/students/${A}`, { label: s('Ana Ruiz') });
  await seed(`tenants/zcs/rosters/${T}/students/${B}`, { label: s('Ben Cole') });
  await seed(`tenants/zcs/rosters/${T}/students/${C}`, { label: s('Cal Ito') });
  // Ana submitted and has not changed it. Ben submitted, then edited. Cal wrote and never submitted.
  const r = (uid, slot, text, conf) => seed(`tenants/zcs/responses/${uid}__3-2__${slot}`, answer(uid, '3-2', slot, text, conf));
  await r(A, 'checkpoint-one-response', 'Akbar used the mansabdar system.', 4);
  await r(A, 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:14 AM · fingerprint ' + Sync.valueHash('Akbar used the mansabdar system.', '4'));
  await r(B, 'checkpoint-one-response', 'The devshirme took boys, and I added this later.', 3);
  await r(B, 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:20 AM · fingerprint ' + Sync.valueHash('The devshirme took boys.', '3'));
  await r(C, 'checkpoint-one-response', 'Half an', '');
  await r(OUT, 'checkpoint-one-response', 'Not in this class.', 2);
}

function live(M, uid, email) {
  return M.create({ projectId: PROJECT, tenantId: 'zcs', apiBase: API, valueHash: Sync.valueHash,
    getUser: () => ({ uid }), getToken: () => Promise.resolve(tokenFor(uid, email)) });
}

async function suite(M) {
  const teacher = live(M, T, 'teach@zcs.k12.in.us');
  const roster = await teacher.roster().catch(e => ({ error: e.code }));
  check('a teacher reads their own class list, sorted', roster.classLabel === 'G4' && roster.students && roster.students.map(x => x.label).join(',') === 'Ana Ruiz,Ben Cole,Cal Ito', JSON.stringify(roster));
  check('an account with no class list is told so', await code(live(M, OTHER, 'other@zcs.k12.in.us').roster()) === 'no-roster');
  check('a student cannot read a class list', await code(live(M, A, 'ana@stumail.zcs.k12.in.us').roster()) !== 'ok');

  const rows = roster.students ? await teacher.answers('3.2', roster.students).catch(e => ({ error: e.code })) : {};
  const by = uid => ((rows.cp1 || []).find(r => r.uid === uid) || {});
  check('a submitted, unchanged answer counts as submitted', by(A).completionState === 'verified-submission' && by(A).text === 'Akbar used the mansabdar system.' && by(A).confidence === '4', JSON.stringify(by(A)));
  check('an answer changed after Submit does not', by(B).completionState === 'completion-unverified' && by(B).changedSinceSubmit === true, JSON.stringify(by(B)));
  check('an answer never submitted does not', by(C).completionState === 'completion-unverified' && by(C).changedSinceSubmit === false, JSON.stringify(by(C)));
  check('a checkpoint with no answer is missing, for everyone', (rows.cp2 || []).length === 3 && rows.cp2.every(r => r.completionState === 'missing'));
  check('a student not on the list cannot be read', await code(teacher.answers('3.2', [{ uid: OUT, label: 'x' }])) === 'denied');

  const criteria = [{ criterionId: 'criterion-1', category: 'D', evidence: ['mansabdar'], reason: 'r', misconceptions: [], uncertainty: [], reviewRequired: false }];
  // Twelve different ratings, so the save takes more than one request.
  const list = [];
  for (const topic of ['3.2', '3.4']) for (const cp of ['cp1', 'cp2']) for (const uid of [A, B, C]) list.push({ studentUid: uid, topic, cp, criteria, fingerprint: Sync.valueHash('x', ''), rubricVersion: 'v' });
  check('ratings save in batches the rules accept', await code(teacher.saveRatings(list)) === 'ok');
  const back = await teacher.ratings('3.2').catch(() => new Map());
  check('and read back for the topic', back.size === 6 && back.get(A + '|cp1') && back.get(A + '|cp1').codes === 'D' && back.get(A + '|cp1').criteria[0].evidence[0] === 'mansabdar');
  check('only for that topic', (await teacher.ratings('3.3').catch(() => new Map([[1, 1]]))).size === 0);
  const refused = await code(teacher.saveRatings([{ studentUid: OUT, topic: '3.2', cp: 'cp1', criteria, fingerprint: 'abc', rubricVersion: 'v' }]));
  check('a rating for a student not on the list is refused', refused === 'denied', refused);
}

// Loads the real rules into the emulator first. The rules suite's negative controls
// leave their last broken copy loaded, and a check run against that proves nothing.
async function loadRealRules() {
  const content = fs.readFileSync(path.join(ROOT, 'firestore', 'firestore.rules'), 'utf8');
  const res = await fetch(`http://${HOST}/emulator/v1/projects/${PROJECT}:securityRules`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rules: { files: [{ name: 'firestore.rules', content }] } }) });
  if (!res.ok) throw new Error('could not load the real rules: ' + res.status + ' ' + await res.text());
}

(async () => {
  console.log(`${W}Class Pulse live, against the real rules${X}\n`);
  await loadRealRules();
  await seedAll();
  await suite(require(SOURCE));

  console.log(`\n${W}Negative controls${X}`);
  const src = fs.readFileSync(SOURCE, 'utf8');
  const controls = [
    ['any answer with a receipt counts as submitted', "print && print === fingerprint ? 'verified-submission'", "print ? 'verified-submission'", /changed after Submit/],
    ['ratings are written with the browser\'s clock', "updateTransforms: [{ fieldPath: 'ratedAt', setToServerValue: 'REQUEST_TIME' }]", "update: undefined && 0, x: 0", /save in batches/],
    ['a missing class list reads as an empty class', "if (!head) throw fail('no-roster'", "if (false) throw fail('no-roster'", /no class list is told/]
  ];
  for (const [name, from, to, expect] of controls) {
    if (!src.includes(from)) { console.log(`  ${R}FAIL${X} "${name}" no longer matches the module`); failures++; continue; }
    const sandbox = { module: { exports: {} }, globalThis, fetch };
    let M;
    try { vm.runInNewContext(src.replace(from, to), sandbox); M = sandbox.module.exports; } catch (e) { console.log(`  ${R}FAIL${X} "${name}" did not load: ${e.message}`); failures++; continue; }
    const before = failures; quiet = true; failed.length = 0;
    try { await suite(M); } catch (e) { failed.push('crashed ' + e.message); }
    quiet = false; const caught = failed.some(l => expect.test(l)); failures = before;
    if (caught) console.log(`  ${G}PASS${X} "${name}" turns the checks red`);
    else { console.log(`  ${R}FAIL${X} "${name}" went unnoticed`); failures++; }
  }

  console.log(failures ? `\n${R}${W}Class Pulse live: ${failures} check(s) failed.${X}` : `\n${G}${W}Class Pulse live: all checks passed.${X}`);
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
