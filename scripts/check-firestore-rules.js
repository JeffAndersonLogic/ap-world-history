#!/usr/bin/env node
'use strict';

/**
 * check-firestore-rules.js
 *
 * The offline half of the Firestore security contract, in the push gate.
 *
 * WHY AN OFFLINE CHECK EXISTS AT ALL
 *
 * The real check is scripts/test/firestore-rules.test.js, which runs the rules
 * against Firestore's own engine in the emulator. That check needs firebase-tools,
 * a Java runtime and a running emulator, none of which this repository installs,
 * so it exits 2 and SKIPS on a bare checkout. CLAUDE.md is blunt about what that
 * means: a check allowed to skip will skip in precisely the environment where
 * nobody is watching for it.
 *
 * So the dangerous shapes are also caught here, textually, with no dependencies,
 * on every push. This cannot tell you the rules are correct. It can tell you
 * they have not been loosened into the one shape that has leaked more student
 * data than every other Firestore mistake combined:
 *
 *     allow read, write: if request.auth != null;
 *
 * That line looks like security. It says any signed-in person may read every
 * record in the collection, which in this course is every student's writing
 * readable by any student who opens dev tools.
 *
 * WHAT THIS DOES NOT DO
 *
 * It does not evaluate the rules. A condition naming ownsStored() could still be
 * wrong; only the emulator knows. Read a green here as "not obviously
 * catastrophic", never as "reviewed".
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RULES = path.join(ROOT, 'firestore', 'firestore.rules');

const R = '\x1b[31m', G = '\x1b[32m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

// The path the architecture record specifies. Stated here so a rules file that
// quietly starts protecting some other collection fails rather than passing on
// a technicality.
const RESPONSE_PATH = 'match /tenants/{tenantId}/responses/{responseId}';

// A condition that does not name one of these is not constrained by identity.
// `false` is the other acceptable answer, and it is checked separately.
// The Class Pulse helpers (2026-10-31) name a record too: the teacher's own list,
// the teacher's own ratings, a student on the teacher's own list.
const OWNERSHIP_TOKENS = ['ownsStored', 'ownsIncoming', 'ownsRoster', 'ownsPulse', 'rosterHolds'];
const TENANT_TOKENS = ['inTenant'];

// Comments are stripped before anything is parsed, and this is not tidiness.
// The first version of this file did not, and the prose in firestore.rules
// explaining why a catch-all deny is useless CONTAINS the literal
// `allow read, write: if false;`. The check duly found five allow statements in
// a file with four, and reported a wildcard block that does not exist as safely
// denied. It passed, on a comment. A checker that reads documentation as code
// can be made to pass by writing a sentence.
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .map(line => line.replace(/\/\/.*$/, ''))
    .join('\n');
}

function allowStatements(source) {
  // Conditions in this file carry no semicolons, so the terminator is
  // unambiguous. A condition that ever needs one has to change this parser
  // rather than silently matching half of itself.
  const out = [];
  const re = /allow\s+([a-z,\s]+?)\s*:\s*if\s+([^;]+);/g;
  let m;
  while ((m = re.exec(source))) {
    out.push({
      verbs: m[1].split(',').map(s => s.trim()).filter(Boolean),
      condition: m[2].replace(/\s+/g, ' ').trim(),
      raw: m[0]
    });
  }
  return out;
}

// The body of one rules function, up to the closing brace on its own line.
function fnBody(source, name) {
  const m = new RegExp('function ' + name + '\\([^)]*\\)\\s*\\{([\\s\\S]*?)\\n\\s*\\}').exec(source);
  return m ? m[1] : '';
}

// The assertions, factored out so the negative controls below can run the exact
// same set against a mutated file. A check whose negative control tests a
// different thing than the real run is not a negative control.
function assertRules(rawSource, report) {
  const source = stripComments(rawSource);
  report('the rules declare version 2', /rules_version\s*=\s*'2'/.test(source),
    'v1 evaluates differently and silently');

  report('the response collection is the one the architecture record specifies',
    source.includes(RESPONSE_PATH), RESPONSE_PATH);

  const allows = allowStatements(source);
  report('the file contains allow statements to check', allows.length > 0, `${allows.length} found`);

  let reads = 0, writes = 0, denies = 0;

  for (const a of allows) {
    const cond = a.condition;
    const label = `allow ${a.verbs.join(', ')}`;

    if (cond === 'false') {
      denies++;
      continue;
    }

    // The one that matters. A condition is only allowed to grant access if it
    // also says WHOSE record, and WHICH tenant.
    const ownership = OWNERSHIP_TOKENS.some(t => cond.includes(t));
    const tenant = TENANT_TOKENS.some(t => cond.includes(t));

    report(`${label} names whose record it is`, ownership, cond);
    report(`${label} names which tenant`, tenant, cond);

    // Belt and braces on the specific catastrophic literals, because a future
    // helper could be named something that satisfies the token check above
    // while evaluating to "signed in".
    report(`${label} is not satisfiable by authentication alone`,
      !/^\s*(true|signedIn\(\)|request\.auth\s*!=\s*null)\s*$/.test(cond), cond);

    for (const verb of a.verbs) {
      if (verb === 'read' || verb === 'get' || verb === 'list') reads++;
      if (verb === 'write' || verb === 'create' || verb === 'update') writes++;
    }
  }

  report('some read path is granted, so the rules are not vacuous', reads > 0, `${reads} read verb(s)`);
  report('some write path is granted, so the rules are not vacuous', writes > 0, `${writes} write verb(s)`);
  report('delete is refused outright', denies > 0 && /allow\s+delete\s*:\s*if\s+false\s*;/.test(source));

  // A wildcard match that grants anything reaches every collection in the
  // project at once, including ones nobody has written yet.
  const wildcard = /match\s+\/\{[A-Za-z_]+=\*\*\}\s*\{([\s\S]*?)\n\s*\}/.exec(source);
  if (wildcard) {
    const inner = allowStatements(wildcard[1]);
    report('no wildcard match grants access', inner.every(a => a.condition === 'false'),
      inner.map(a => a.condition).join(' | '));
  } else {
    report('no wildcard match block is present', true, 'nothing to over-grant');
  }

  // The write shape allowlist. hasOnly is what stops an arbitrary field being
  // parked in an otherwise valid record; a rules file that drops it still works
  // and still passes every other check here.
  // Every shape function, so a second collection's allowlist cannot stand in for
  // a missing first one (the case once Class Pulse ratings added their own).
  const shapes = ['shapeIsValid', 'ratingShapeIsValid'].map(n => fnBody(source, n));
  report('writes are validated against a closed field allowlist',
    shapes.every(b => /\.keys\(\)\.hasOnly\(/.test(b)));

  // The per-document ceiling is this system's only enforceable cost control,
  // since Firestore cannot be spend-capped. Losing it is silent.
  // Specifically the response body's ceiling. A generic `.size() <= N` match
  // stopped meaning anything once the short metadata fields grew their own
  // bounds: removing the one that matters left three others satisfying it,
  // and the negative control caught that rather than prose.
  report('a per-document size ceiling is enforced on the response body',
    /text\.size\(\)\s*<=\s*\d+/.test(source));

  // ── The four invariants an external review added on 2026-09-29 ────────────
  //
  // Each was a real hole and each would be silent if it came back: the rules
  // would still compile, still deny an outsider, and still pass every check
  // above.

  // Without a derived id, one signed-in student can create unlimited documents
  // by varying the document name, which is unbounded storage and unbounded
  // writes with nothing in the rules to notice.
  report('the document id is derived from author, topic and slot',
    /responseId\s*==\s*request\.auth\.uid\s*\+/.test(source));

  // A client-supplied updatedAt makes the conflict rule guessable and lets a
  // device backdate a write to win a merge it should have lost.
  report('timestamps are pinned to server time',
    /updatedAt\s*==\s*request\.time/.test(source));

  // Without this a student who owns a record can move it to another topic or
  // slot, or rewrite when it was created, and it still passes every other test.
  report('an update may only touch the mutable fields',
    /affectedKeys\(\)/.test(source) && /\.hasOnly\(\['text'/.test(source));

  // Verified district email is the real check. Pinning the provider means that
  // enabling another sign-in method later cannot quietly widen who satisfies it.
  report('the sign-in provider is pinned',
    /sign_in_provider\s*==\s*'google\.com'/.test(source));

  // ── Class Pulse, added 2026-10-31 ──────────────────────────────────────────
  //
  // A teacher reads a student's work only when that student is on the teacher's
  // own class list, and the list is written with administrator credentials only.
  // Each of these is silent if it goes: the rules still compile and still keep
  // students out of each other's work.
  const body = name => fnBody(source, name);
  report('staff means the staff domain exactly, never the student domain',
    /split\('@'\)\[1\]\s*==\s*'zcs\.k12\.in\.us'/.test(body('isStaffIn')) && body('isStaffIn').includes('inTenant('));
  report('every Class Pulse grant requires staff',
    ['rosterHolds', 'ownsRoster', 'ownsPulse'].every(f => body(f).includes('isStaffIn(')));
  report('a teacher reads only students on their own list, by the caller\'s own id',
    /rosters\/\$\(request\.auth\.uid\)\/students\//.test(body('rosterHolds')));
  const lists = /match \/tenants\/\{tenantId\}\/rosters\/\{teacherUid\} \{([\s\S]*?)\n\s*\}/.exec(source);
  const students = /match \/tenants\/\{tenantId\}\/rosters\/\{teacherUid\}\/students\/\{studentUid\} \{([\s\S]*?)\n\s*\}/.exec(source);
  report('no browser can write a class list',
    !!lists && !!students && [lists[1], students[1]].every(b => /allow write: if false;/.test(b)
      && allowStatements(b).every(a => a.condition === 'false' || !a.verbs.some(v => ['write', 'create', 'update', 'delete'].includes(v)))));
  report('a teacher reads checkpoint answers only, not everything a student has saved',
    /responseId\.split\('__'\)\[2\] in \['checkpoint-one-response'/.test(fnBody(source, 'rosterHoldsAuthor')));
  report('a teacher\'s read of student work is one document at a time, never a query',
    /allow get: if [^;]*rosterHoldsAuthor\(\)/.test(source) && !/allow [a-z, ]*list[a-z, ]*: if [^;]*rosterHoldsAuthor/.test(source));
}

// ── The run ──────────────────────────────────────────────────────────────────

let failures = 0;
function check(label, condition, detail) {
  if (condition) {
    console.log(`  ${G}PASS${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  } else {
    console.log(`  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
    failures++;
  }
}

console.log(`${W}Firestore rules: not loosened into the shape that leaks everything${X}\n`);

if (!fs.existsSync(RULES)) {
  console.log(`  ${R}FAIL${X} firestore/firestore.rules is missing`);
  process.exit(1);
}

const source = fs.readFileSync(RULES, 'utf8');
assertRules(source, check);

// ── Proving the check can fail ───────────────────────────────────────────────
//
// Required by CLAUDE.md: a check used as evidence of completion must be shown
// capable of failing. Each mutation below is a real way these rules get
// loosened, three of them by someone trying to fix a bug in a hurry.
console.log(`\n${W}Negative controls${X}  ${D}each mutation must turn the checks above red${X}`);

const MUTATIONS = [
  ['the classic: any signed-in user may read and write',
    s => s.replace(/allow get, list: if [^;]+;/, 'allow get, list: if request.auth != null;')],
  ['ownership dropped from update, tenant kept',
    s => s.replace(/allow update: if [^;]+;/, 'allow update: if inTenant(tenantId);')],
  ['tenant dropped from read, ownership kept',
    s => s.replace(/allow get, list: if [^;]+;/, 'allow get, list: if ownsStored();')],
  ['the field allowlist becomes a floor',
    s => s.replace(/\.keys\(\)\.hasOnly\(/, '.keys().hasAny(')],
  ['the per-document size ceiling is removed',
    s => s.replace(/&&\s*request\.resource\.data\.text\.size\(\)\s*<=\s*\d+/, '')],
  ['the document id goes back to whatever the client names it',
    s => s.replace(/responseId == request\.auth\.uid \+/, 'responseId == responseId + \'\' +')],
  ['updatedAt is trusted from the client again',
    s => s.replace(/request\.resource\.data\.updatedAt == request\.time/, 'request.resource.data.updatedAt is timestamp')],
  ['an update may touch any field again',
    s => s.replace(/&&\s*onlyMutableFieldsChanged\(\)/, '')
          .replace(/request\.resource\.data\.diff\(resource\.data\)\.affectedKeys\(\)\n\s*\.hasOnly\(\[[^\]]*\]\)/, 'true')],
  ['the sign-in provider check is dropped',
    s => s.replace(/&&\s*request\.auth\.token\.firebase\.sign_in_provider == 'google\.com'/, '')],
  ['delete is opened up to the author',
    s => s.replace(/allow delete: if false;/, 'allow delete: if ownsStored();')],
  ['a teacher may add students to their own class list',
    s => s.replace(/(rosters\/\{teacherUid\}\/students\/\{studentUid\} \{[\s\S]*?)allow write: if false;/, '$1allow write: if inTenant(tenantId) && ownsRoster(tenantId, teacherUid);')],
  ['students count as staff',
    s => s.replace(/split\('@'\)\[1\] == 'zcs\.k12\.in\.us'/, "split('@')[1] in ['zcs.k12.in.us', 'stumail.zcs.k12.in.us']")],
  ['the staff check is dropped from the class-list lookup',
    s => s.replace(/return isStaffIn\(tenantId\)\n(\s*)&& exists/, 'return inTenant(tenantId)\n$1&& exists')],
  ['the class list is looked up under any teacher, not the caller',
    s => s.replace(/rosters\/\$\(request\.auth\.uid\)\/students\//, 'rosters/$(studentUid)/students/')],
  ['a teacher may read every slot of a student on their list',
    s => s.replace(/&& responseId\.split\('__'\)\[2\] in \[[^\]]*\]/, '')],
  ['a teacher may query all student work',
    s => s.replace(/allow get: if inTenant\(tenantId\) && rosterHoldsAuthor\(\);/, 'allow get, list: if inTenant(tenantId) && rosterHoldsAuthor();')],
  ['a wildcard match is added "temporarily" while debugging',
    s => s.replace(/service cloud\.firestore \{\n(\s*)match \/databases\/\{database\}\/documents \{/,
      'service cloud.firestore {\n$1match /databases/{database}/documents {\n      match /{document=**} {\n        allow read, write: if request.auth != null;\n      }')]
];

for (const [name, mutate] of MUTATIONS) {
  const broken = mutate(source);
  if (broken === source) {
    console.log(`  ${R}FAIL${X} mutation "${name}" changed nothing, so it proves nothing`);
    failures++;
    continue;
  }
  let sawFailure = false;
  const swallow = (_label, condition) => { if (!condition) sawFailure = true; };
  try {
    assertRules(broken, swallow);
  } catch (error) {
    sawFailure = true;
  }
  if (sawFailure) {
    console.log(`  ${G}PASS${X} ${name} ${D}(caught)${X}`);
  } else {
    console.log(`  ${R}FAIL${X} ${name} ${D}(NOT caught, these checks cannot fail)${X}`);
    failures++;
  }
}

console.log('');
if (failures) {
  console.log(`${R}${W}Firestore rules: ${failures} check(s) failed.${X}`);
  process.exit(1);
}
console.log(`${G}${W}Firestore rules: all checks passed.${X}`);
