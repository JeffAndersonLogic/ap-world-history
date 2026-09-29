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
 * It needs @firebase/rules-unit-testing, firebase-tools, a Java runtime and a
 * running emulator. validate.js has to stay runnable on a bare checkout, so none
 * of that is installed by default and this exits 2, which run-tests.js prints as
 * SKIP. Same contract as every browser test here.
 *
 *   npm i -D @firebase/rules-unit-testing firebase-tools
 *   npx firebase emulators:exec --only firestore \
 *     "node scripts/test/firestore-rules.test.js --strict"
 *
 * A SKIP IS NOT A PASS, and CLAUDE.md says why that sentence is in this file
 * rather than assumed: a check allowed to skip will skip in precisely the
 * environment where nobody is watching for it. Pass --strict, which turns the
 * skip into a failure, anywhere the emulator is supposed to be running. Nothing
 * in this repository may be reported as having a reviewed security model on the
 * strength of a run where this printed SKIP.
 *
 * WHAT IT PROVES AND WHAT IT DOES NOT
 *
 * It proves these rules behave as intended against the real evaluator. It says
 * nothing about whether the application sends the right studentId, because no
 * application code reads or writes Firestore yet. Phase 2 is not authorized to
 * ship: ZCS approved the free plan and FERPA on 2026-09-29, and under-18 app
 * approval is still outstanding.
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
  console.log(`${D}  npm i -D @firebase/rules-unit-testing firebase-tools${X}`);
  console.log(`${D}  npx firebase emulators:exec --only firestore "node scripts/test/firestore-rules.test.js --strict"${X}`);
  process.exit(2);
}

let testing;
try {
  testing = require('@firebase/rules-unit-testing');
} catch (error) {
  skip('@firebase/rules-unit-testing is not installed');
}

const { initializeTestEnvironment, assertFails, assertSucceeds } = testing;

let failures = 0;
function record(label, ok, detail) {
  if (ok) {
    console.log(`  ${G}PASS${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  } else {
    console.log(`  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
    failures++;
  }
}

// Two students in the district, one outside it, and one who never signed in.
const ZCS = 'zcs';
const ALEX = { uid: 'uid-alex', email: 'alex@zcs.k12.in.us', email_verified: true };
const BRIT = { uid: 'uid-brit', email: 'brit@zcs.k12.in.us', email_verified: true };
const OUTSIDER = { uid: 'uid-out', email: 'someone@gmail.com', email_verified: true };
const UNVERIFIED = { uid: 'uid-unv', email: 'new@zcs.k12.in.us', email_verified: false };

function response(overrides) {
  return Object.assign({
    tenantId: ZCS,
    studentId: ALEX.uid,
    courseId: 'apwh',
    sectionId: 'green',
    topicKey: '1-4',
    slotId: 'checkpoint-two-response',
    text: 'Song China centralized power through the examination system.',
    confidence: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    clientId: 'chromebook-1',
    schemaVersion: 1
  }, overrides || {});
}

const docPath = (tenant, id) => `tenants/${tenant}/responses/${id}`;

// The assertions, factored out so the negative controls run the identical set
// against deliberately broken rules. A negative control that exercises a
// different set than the real run proves nothing about the real run.
async function assertContracts(env, report) {
  // Seed two records with the rules switched off, which is the only way to get
  // a stored document belonging to someone other than the caller.
  await env.withSecurityRulesDisabled(async ctx => {
    const db = ctx.firestore();
    await db.doc(docPath(ZCS, 'alex-1-4')).set(response());
    await db.doc(docPath(ZCS, 'brit-1-4')).set(response({ studentId: BRIT.uid }));
    await db.doc(docPath('other-district', 'someone')).set(response({ tenantId: 'other-district' }));
  });

  const alex = env.authenticatedContext(ALEX.uid, ALEX).firestore();
  const brit = env.authenticatedContext(BRIT.uid, BRIT).firestore();
  const outsider = env.authenticatedContext(OUTSIDER.uid, OUTSIDER).firestore();
  const unverified = env.authenticatedContext(UNVERIFIED.uid, UNVERIFIED).firestore();
  const anon = env.unauthenticatedContext().firestore();

  const can = async (p) => { try { await assertSucceeds(p); return true; } catch (e) { return false; } };
  const cannot = async (p) => { try { await assertFails(p); return true; } catch (e) { return false; } };

  // 1. A student reads their own work.
  report('a student can read their own record',
    await can(alex.doc(docPath(ZCS, 'alex-1-4')).get()));

  // 2. The contract the architecture record names first.
  report('a student cannot read another student\'s record',
    await cannot(alex.doc(docPath(ZCS, 'brit-1-4')).get()));
  report('a student cannot write to another student\'s record',
    await cannot(alex.doc(docPath(ZCS, 'brit-1-4')).update({ text: 'mine now', updatedAt: new Date() })));

  // 3. An unauthenticated visitor reaches nothing.
  report('an unauthenticated visitor cannot read anything',
    await cannot(anon.doc(docPath(ZCS, 'alex-1-4')).get()));
  report('an unauthenticated visitor cannot write anything',
    await cannot(anon.doc(docPath(ZCS, 'new-doc')).set(response())));

  // 4. Nobody reaches outside their own tenant.
  report('a student cannot read outside their tenant',
    await cannot(alex.doc(docPath('other-district', 'someone')).get()));
  report('a student cannot write outside their tenant',
    await cannot(alex.doc(docPath('other-district', 'new-doc')).set(response({ tenantId: 'other-district' }))));

  // 5. Identity comes from a verified district address, so neither half is
  //    optional. An outside domain is not in any tenant; an unverified address
  //    is not yet evidence of anything.
  report('an account outside the district domain is refused',
    await cannot(outsider.doc(docPath(ZCS, 'out-1')).set(response({ studentId: OUTSIDER.uid }))));
  report('an unverified district address is refused',
    await cannot(unverified.doc(docPath(ZCS, 'unv-1')).set(response({ studentId: UNVERIFIED.uid }))));

  // 6. Authorship, on the way in as well as the way out.
  report('a student can create their own record',
    await can(alex.doc(docPath(ZCS, 'alex-1-5')).set(response({ slotId: 'evidence-response' }))));
  report('a student cannot create a record authored by someone else',
    await cannot(alex.doc(docPath(ZCS, 'forged')).set(response({ studentId: BRIT.uid }))));
  report('a student cannot reassign their own record to someone else',
    await cannot(alex.doc(docPath(ZCS, 'alex-1-4')).update({ studentId: BRIT.uid, updatedAt: new Date() })));

  // 7. The record cannot lie about where it lives, or a document under one
  //    tenant's path would claim to belong to another on export.
  report('a record whose tenantId disagrees with its path is refused',
    await cannot(alex.doc(docPath(ZCS, 'liar')).set(response({ tenantId: 'other-district' }))));

  // 8. The shape is an allowlist.
  report('an unexpected field is refused',
    await cannot(alex.doc(docPath(ZCS, 'extra')).set(response({ isTeacher: true }))));
  report('a missing required field is refused',
    await cannot(alex.doc(docPath(ZCS, 'thin')).set({ tenantId: ZCS, studentId: ALEX.uid })));

  // 9. The per-document ceiling, which is the only enforceable cost control
  //    this system has, because Firestore cannot be spend-capped.
  report('a document over the size ceiling is refused',
    await cannot(alex.doc(docPath(ZCS, 'huge')).set(response({ text: 'x'.repeat(65537) }))));
  report('a long but reasonable answer is accepted',
    await can(alex.doc(docPath(ZCS, 'long')).set(response({ text: 'x'.repeat(8000) }))));

  // 10. Confidence mirrors the existing scale, and blank is a real answer.
  report('a blank confidence is accepted',
    await can(alex.doc(docPath(ZCS, 'blank-conf')).set(response({ confidence: '' }))));
  report('a confidence outside 1 to 5 is refused',
    await cannot(alex.doc(docPath(ZCS, 'bad-conf')).set(response({ confidence: 9 }))));

  // 11. Deletion is nobody's, including the author's.
  report('a student cannot delete their own record',
    await cannot(alex.doc(docPath(ZCS, 'alex-1-4')).delete()));

  // Brit is here to prove the rules are not simply denying everything to
  // everyone, which every assertion above would also be consistent with.
  report('the other student can still read their own record',
    await can(brit.doc(docPath(ZCS, 'brit-1-4')).get()));
}

async function makeEnv(rules) {
  return initializeTestEnvironment({
    projectId: 'behistorical-rules-test',
    firestore: { rules }
  });
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
  //
  // Required by CLAUDE.md. These are the same loosenings the offline check
  // guards textually, run here against the real evaluator, because "the text
  // changed" and "the behaviour changed" are different claims.
  console.log(`\n${W}Negative controls${X}  ${D}each loosening must turn the assertions above red${X}`);

  const MUTATIONS = [
    ['ownership dropped from reads',
      s => s.replace(/allow get, list: if [^;]+;/, 'allow get, list: if inTenant(tenantId);')],
    ['the tenant check always answers true',
      s => s.replace(/function inTenant\(tenantId\) \{[\s\S]*?\n    \}/, 'function inTenant(tenantId) {\n      return true;\n    }')],
    ['the field allowlist is removed',
      s => s.replace(/request\.resource\.data\.keys\(\)\.hasOnly\(\[[\s\S]*?\]\)/, 'true')],
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
      // A mutation that will not even compile is still a caught loosening.
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
