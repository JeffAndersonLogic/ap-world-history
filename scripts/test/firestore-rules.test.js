#!/usr/bin/env node
'use strict';

/**
 * firestore-rules.test.js
 *
 * The rules, run against Firestore's own engine in the emulator. This is the
 * check that actually knows whether the security model works;
 * scripts/check-firestore-rules.js only knows the rules have not been loosened
 * into a shape that is catastrophic on its face.
 *
 * WHY IT IS NOT IN THE OFFLINE SUITE
 *
 * It needs @firebase/rules-unit-testing, the firebase SDK, firebase-tools, a
 * Java runtime and a running emulator. validate.js has to stay runnable on a
 * bare checkout, so none of that is installed by default and this exits 2, which
 * run-tests.js prints as SKIP. Same contract as every browser test here.
 *
 *   npm i -D @firebase/rules-unit-testing firebase firebase-tools
 *   npx firebase emulators:exec --only firestore \
 *     "node scripts/run-tests.js rules --strict"
 *
 * A SKIP IS NOT A PASS, and CLAUDE.md says why that sentence is in this file
 * rather than assumed: a check allowed to skip will skip in precisely the
 * environment where nobody is watching for it. Pass --strict, which turns the
 * skip into a failure, anywhere the emulator is supposed to be running.
 *
 * FIRST GREEN RUN: 2026-09-29, against cloud-firestore-emulator v1.22.0. All 37
 * assertions passed and all 8 negative controls caught, with no rule changes
 * needed. Before that this file carried a warning that it had never been
 * executed; it is recorded here rather than deleted, because "written" and
 * "run" are different claims and the gap between them lasted a day.
 *
 * WHAT THE ENGINE PRINTS THAT LOOKS LIKE A PROBLEM AND IS NOT
 *
 * A run logs many `evaluation error at L<n>` lines beside its PERMISSION_DENIED
 * results. Firestore evaluates every allow statement that matches the path, so a
 * create attempt also evaluates `allow update`, whose `ownsStored()` reads
 * `resource.data` on a document that does not exist yet and throws. The write is
 * denied either way. What matters is that the paths which SHOULD succeed
 * evaluate cleanly, and every positive assertion here passes.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const RULES_PATH = path.join(ROOT, 'firestore', 'firestore.rules');
const STRICT = process.argv.includes('--strict');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

function skip(reason) {
  if (STRICT) {
    console.log(`${R}${W}Firestore rules (emulator): ${reason}, and --strict forbids skipping.${X}`);
    process.exit(1);
  }
  console.log(`${Y}SKIP${X} Firestore rules (emulator): ${reason}.`);
  console.log(`${D}  npm i -D @firebase/rules-unit-testing firebase firebase-tools${X}`);
  console.log(`${D}  npx firebase emulators:exec --only firestore "node scripts/run-tests.js rules --strict"${X}`);
  process.exit(2);
}

let testing, fst;
try {
  testing = require('@firebase/rules-unit-testing');
  fst = require('firebase/firestore');
} catch (error) {
  skip('@firebase/rules-unit-testing or the firebase SDK is not installed');
}

const { initializeTestEnvironment, assertFails, assertSucceeds } = testing;
const { doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, getDocs, serverTimestamp } = fst;

let failures = 0;
function record(label, ok, detail) {
  if (ok) {
    console.log(`  ${G}PASS${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  } else {
    console.log(`  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
    failures++;
  }
}

const ZCS = 'zcs';
const GOOGLE = { firebase: { sign_in_provider: 'google.com' } };
const ALEX = Object.assign({ email: 'alex@zcs.k12.in.us', email_verified: true }, GOOGLE);
const BRIT = Object.assign({ email: 'brit@zcs.k12.in.us', email_verified: true }, GOOGLE);
const OUTSIDER = Object.assign({ email: 'someone@gmail.com', email_verified: true }, GOOGLE);
// ZCS students sign in with stumail addresses and staff with zcs.k12.in.us. Both
// are one tenant; neither lookalike below is any tenant.
const STUDENT = Object.assign({ email: 'sam@stumail.zcs.k12.in.us', email_verified: true }, GOOGLE);
const LOOKALIKES = [
  ['a suffix lookalike of the staff domain', 'x@evilzcs.k12.in.us'],
  ['a suffix lookalike of the student domain', 'x@notstumail.zcs.k12.in.us'],
  ['a district name used as a path', 'x@stumail.zcs.k12.in.us.evil.com'],
  ['a deeper subdomain', 'x@lab.stumail.zcs.k12.in.us']
].map(([label, email]) => [label, Object.assign({ email, email_verified: true }, GOOGLE)]);
const UNVERIFIED = Object.assign({ email: 'new@zcs.k12.in.us', email_verified: false }, GOOGLE);
// Same district address, wrong provider. Verified email is the real check; this
// is the one the provider pin exists for.
const PASSWORD_USER = { email: 'alex@zcs.k12.in.us', email_verified: true, firebase: { sign_in_provider: 'password' } };

const UID_ALEX = 'uid-alex';
const UID_BRIT = 'uid-brit';

// The id is derived, so the test derives it too rather than hardcoding strings
// that would drift from the rule the moment the format changed.
const idFor = (uid, topicKey, slotId) => `${uid}__${topicKey}__${slotId}`;
const pathFor = (tenant, id) => `tenants/${tenant}/responses/${id}`;

function response(overrides) {
  return Object.assign({
    tenantId: ZCS,
    studentId: UID_ALEX,
    courseId: 'apwh',
    sectionId: 'green',
    topicKey: '1-4',
    slotId: 'checkpoint-two-response',
    text: 'Song China centralized power through the examination system.',
    confidence: 4,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    clientId: 'chromebook-1',
    schemaVersion: 1
  }, overrides || {});
}

async function assertContracts(env, report) {
  // Seeded with rules off, which is the only way to get a stored document
  // belonging to someone other than the caller, and the only way to plant a
  // record whose timestamps are not request.time.
  await env.withSecurityRulesDisabled(async ctx => {
    const db = ctx.firestore();
    const now = new Date();
    const seed = (o) => Object.assign(response(o), { createdAt: now, updatedAt: now });
    await setDoc(doc(db, pathFor(ZCS, idFor(UID_ALEX, '1-4', 'checkpoint-two-response'))), seed());
    await setDoc(doc(db, pathFor(ZCS, idFor(UID_BRIT, '1-4', 'checkpoint-two-response'))), seed({ studentId: UID_BRIT }));
    await setDoc(doc(db, pathFor('other-district', idFor(UID_ALEX, '1-4', 'map-check-response'))),
      seed({ tenantId: 'other-district', slotId: 'map-check-response' }));
  });

  const alexDb = env.authenticatedContext(UID_ALEX, ALEX).firestore();
  const britDb = env.authenticatedContext(UID_BRIT, BRIT).firestore();
  const outsiderDb = env.authenticatedContext('uid-out', OUTSIDER).firestore();
  const unverifiedDb = env.authenticatedContext('uid-unv', UNVERIFIED).firestore();
  const passwordDb = env.authenticatedContext(UID_ALEX, PASSWORD_USER).firestore();
  const anonDb = env.unauthenticatedContext().firestore();

  const can = async (p) => { try { await assertSucceeds(p); return true; } catch (e) { return false; } };
  const cannot = async (p) => { try { await assertFails(p); return true; } catch (e) { return false; } };

  const ALEX_CP2 = pathFor(ZCS, idFor(UID_ALEX, '1-4', 'checkpoint-two-response'));
  const BRIT_CP2 = pathFor(ZCS, idFor(UID_BRIT, '1-4', 'checkpoint-two-response'));

  // ── Confidentiality ──────────────────────────────────────────────────────
  report('a student can read their own record', await can(getDoc(doc(alexDb, ALEX_CP2))));
  report('a student cannot read another student\'s record', await cannot(getDoc(doc(alexDb, BRIT_CP2))));
  report('a student cannot write to another student\'s record',
    await cannot(updateDoc(doc(alexDb, BRIT_CP2), { text: 'mine now', updatedAt: serverTimestamp() })));
  report('an unauthenticated visitor cannot read anything', await cannot(getDoc(doc(anonDb, ALEX_CP2))));
  report('an unauthenticated visitor cannot write anything',
    await cannot(setDoc(doc(anonDb, pathFor(ZCS, idFor('anon', '1-4', 'x'))), response())));
  report('a student cannot read outside their tenant',
    await cannot(getDoc(doc(alexDb, pathFor('other-district', idFor(UID_ALEX, '1-4', 'map-check-response'))))));
  report('an account outside the district domain is refused',
    await cannot(setDoc(doc(outsiderDb, pathFor(ZCS, idFor('uid-out', '1-4', 'a'))), response({ studentId: 'uid-out' }))));
  // The student domain. This is the case the rules failed on before 2026-10-05:
  // they accepted staff addresses only, which would have refused every student.
  const UID_SAM = 'uid-sam';
  const samDb = env.authenticatedContext(UID_SAM, STUDENT).firestore();
  const SAM_CP2 = pathFor(ZCS, idFor(UID_SAM, '1-4', 'checkpoint-two-response'));
  report('a student on a stumail address can create their own record',
    await can(setDoc(doc(samDb, SAM_CP2), response({ studentId: UID_SAM }))));
  report('and read it back',
    await can(getDoc(doc(samDb, SAM_CP2))));
  report('but not another student\'s',
    await cannot(getDoc(doc(samDb, BRIT_CP2))));
  for (const [label, claims] of LOOKALIKES) {
    const uid = 'uid-look-' + label.length;
    report(`${label} is refused`,
      await cannot(setDoc(doc(env.authenticatedContext(uid, claims).firestore(), pathFor(ZCS, idFor(uid, '1-4', 'a'))), response({ studentId: uid, slotId: 'a' }))));
  }
  report('an unverified district address is refused',
    await cannot(setDoc(doc(unverifiedDb, pathFor(ZCS, idFor('uid-unv', '1-4', 'a'))), response({ studentId: 'uid-unv' }))));
  report('the same district address on a different sign-in provider is refused',
    await cannot(getDoc(doc(passwordDb, ALEX_CP2))));

  // ── Queries. Rules are not filters. ──────────────────────────────────────
  //
  // A list whose query does not itself guarantee the constraint is refused
  // outright rather than quietly narrowed, so both directions matter.
  const responses = collection(alexDb, `tenants/${ZCS}/responses`);
  report('a query constrained to the student\'s own records is allowed',
    await can(getDocs(query(responses, where('studentId', '==', UID_ALEX)))));
  report('an unconstrained list of the collection is refused',
    await cannot(getDocs(query(responses))));
  report('a query for another student\'s records is refused',
    await cannot(getDocs(query(responses, where('studentId', '==', UID_BRIT)))));

  // ── Authorship on the way in ─────────────────────────────────────────────
  report('a student can create their own record',
    await can(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '1-5', 'evidence-response'))),
      response({ topicKey: '1-5', slotId: 'evidence-response' }))));
  report('a student cannot create a record authored by someone else',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_BRIT, '1-5', 'evidence-response'))),
      response({ studentId: UID_BRIT, topicKey: '1-5', slotId: 'evidence-response' }))));
  report('a student cannot reassign their own record to someone else',
    await cannot(updateDoc(doc(alexDb, ALEX_CP2), { studentId: UID_BRIT, updatedAt: serverTimestamp() })));

  // ── The document id is derived, which is what bounds document count ──────
  report('a client-chosen document id is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, 'whatever-i-like')), response())));
  report('an id naming the right author but the wrong slot is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '1-4', 'map-check-response'))),
      response({ slotId: 'evidence-response' }))));
  report('a random id per write, the runaway shape, is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '1-4', 'cp2') + '-' + Math.random())), response())));

  // ── Timestamps are the server's ──────────────────────────────────────────
  report('a client-supplied updatedAt is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '2-1', 'skill-builder-response'))),
      response({ topicKey: '2-1', slotId: 'skill-builder-response', updatedAt: new Date(2020, 0, 1) }))));
  report('a backdated update is refused',
    await cannot(updateDoc(doc(alexDb, ALEX_CP2), { text: 'edited', updatedAt: new Date(2020, 0, 1) })));

  // ── An edit may only touch what an edit touches ──────────────────────────
  report('an ordinary edit is allowed',
    await can(updateDoc(doc(alexDb, ALEX_CP2), { text: 'A revised answer.', confidence: 5, updatedAt: serverTimestamp() })));
  report('an edit cannot move the record to another topic',
    await cannot(updateDoc(doc(alexDb, ALEX_CP2), { topicKey: '9-9', updatedAt: serverTimestamp() })));
  report('an edit cannot move the record to another slot',
    await cannot(updateDoc(doc(alexDb, ALEX_CP2), { slotId: 'map-check-response', updatedAt: serverTimestamp() })));
  report('an edit cannot rewrite when the record was created',
    await cannot(updateDoc(doc(alexDb, ALEX_CP2), { createdAt: serverTimestamp(), updatedAt: serverTimestamp() })));

  // ── The shape is an allowlist, and every permitted field is bounded ──────
  const at = (topic, slot, o) => setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, topic, slot))),
    response(Object.assign({ topicKey: topic, slotId: slot }, o)));
  report('an unexpected field is refused', await cannot(at('3-1', 'a', { isTeacher: true })));
  report('a missing required field is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '3-2', 'b'))),
      { tenantId: ZCS, studentId: UID_ALEX, topicKey: '3-2', slotId: 'b' })));
  report('a missing confidence is refused rather than silently erroring',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '3-3', 'c'))),
      (() => { const r = response({ topicKey: '3-3', slotId: 'c' }); delete r.confidence; return r; })())));
  report('a blank confidence is accepted', await can(at('3-4', 'd', { confidence: '' })));
  report('a confidence outside 1 to 5 is refused', await cannot(at('3-5', 'e', { confidence: 9 })));
  report('a document over the size ceiling is refused', await cannot(at('3-6', 'f', { text: 'x'.repeat(20001) })));
  report('a long but reasonable answer is accepted', await can(at('3-7', 'g', { text: 'x'.repeat(8000) })));
  report('an oversized optional field is refused', await cannot(at('3-8', 'h', { clientId: 'x'.repeat(65) })));
  report('a malformed topicKey is refused', await cannot(at('NOT A TOPIC', 'i', {})));
  report('a malformed slotId is refused', await cannot(at('4-1', 'Has Spaces', {})));
  report('a record whose tenantId disagrees with its path is refused',
    await cannot(setDoc(doc(alexDb, pathFor(ZCS, idFor(UID_ALEX, '4-2', 'j'))),
      response({ tenantId: 'other-district', topicKey: '4-2', slotId: 'j' }))));

  // ── Deletion is nobody's ─────────────────────────────────────────────────
  report('a student cannot delete their own record', await cannot(deleteDoc(doc(alexDb, ALEX_CP2))));

  // Brit proves the rules are not simply denying everything to everyone, which
  // every assertion above would also be consistent with.
  report('the other student can still read their own record', await can(getDoc(doc(britDb, BRIT_CP2))));
}

async function makeEnv(rules) {
  return initializeTestEnvironment({ projectId: 'demo-behistorical-rules', firestore: { rules } });
}

(async () => {
  console.log(`${W}Firestore rules against the real engine${X}\n`);

  const rules = fs.readFileSync(RULES_PATH, 'utf8');

  let env;
  try {
    env = await makeEnv(rules);
  } catch (error) {
    skip(`the Firestore emulator is not reachable (${error && error.message ? error.message : error})`);
  }

  await assertContracts(env, record);
  await env.clearFirestore();
  await env.cleanup();

  // ── Proving the checks can fail ────────────────────────────────────────────
  console.log(`\n${W}Negative controls${X}  ${D}each loosening must turn the assertions above red${X}`);

  const MUTATIONS = [
    ['ownership dropped from reads',
      s => s.replace(/allow get, list: if [^;]+;/, 'allow get, list: if inTenant(tenantId);')],
    ['the tenant check always answers true',
      s => s.replace(/function inTenant\(tenantId\) \{[\s\S]*?\n    \}/, 'function inTenant(tenantId) {\n      return true;\n    }')],
    ['the field allowlist is removed',
      s => s.replace(/request\.resource\.data\.keys\(\)\.hasOnly\(\[[\s\S]*?\]\)/, 'true')],
    ['the derived id is no longer required',
      s => s.replace(/&&\s*idIsDerived\(\)/, '')],
    ['timestamps are trusted from the client',
      s => s.replace(/request\.resource\.data\.updatedAt == request\.time/, 'request.resource.data.updatedAt is timestamp')],
    ['an update may touch any field',
      s => s.replace(/&&\s*onlyMutableFieldsChanged\(\)/, '')],
    ['the district check becomes a suffix match',
      s => s.replace(/\.split\('@'\)\[1\] in \[[^\]]*\]/, () => ".matches('.*zcs\\\\.k12\\\\.in\\\\.us$')")],
    ['the student domain is dropped',
      s => s.replace(/, 'stumail\.zcs\.k12\.in\.us'/, '')],
    ['the provider pin is dropped',
      s => s.replace(/&&\s*request\.auth\.token\.firebase\.sign_in_provider == 'google\.com'/, '')],
    ['delete is opened to the author',
      s => s.replace(/allow delete: if false;/, 'allow delete: if ownsStored();')]
  ];

  for (const [name, mutate] of MUTATIONS) {
    const broken = mutate(rules);
    if (broken === rules) {
      console.log(`  ${R}FAIL${X} mutation "${name}" changed nothing, so it proves nothing`);
      failures++;
      continue;
    }
    let sawFailure = false;
    let brokenEnv;
    try {
      brokenEnv = await makeEnv(broken);
      await assertContracts(brokenEnv, (_l, ok) => { if (!ok) sawFailure = true; });
    } catch (error) {
      sawFailure = true;
    } finally {
      if (brokenEnv) {
        try { await brokenEnv.clearFirestore(); await brokenEnv.cleanup(); } catch (e) { /* best effort */ }
      }
    }
    console.log(sawFailure
      ? `  ${G}PASS${X} ${name} ${D}(caught)${X}`
      : `  ${R}FAIL${X} ${name} ${D}(NOT caught, these assertions cannot fail)${X}`);
    if (!sawFailure) failures++;
  }

  console.log('');
  if (failures) {
    console.log(`${R}${W}Firestore rules: ${failures} check(s) failed.${X}`);
    process.exit(1);
  }
  console.log(`${G}${W}Firestore rules: all checks passed.${X}`);
})().catch(error => {
  console.log(`${R}${W}Firestore rules: the run itself failed.${X}`);
  console.error(error);
  process.exit(1);
});
