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
// isReader() is the other acceptable answer to "whose record": a closed list of
// named teachers. It is checked on its own terms below, because a function with
// a reassuring name can say anything.
const OWNERSHIP_TOKENS = ['ownsStored', 'ownsIncoming', 'isReader'];
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

  // ── The teacher readers ────────────────────────────────────────────────────
  //
  // The only way anyone but the author reads a student's response. The failure
  // to rule out is the tempting one: "staff may read", which is every adult in
  // the district. The rules cannot be evaluated here, so what is checked is the
  // SHAPE that makes that mistake impossible, and each piece has a mutation
  // below that proves it can fail.
  const readerFn = /function\s+isReader\(\)\s*\{([\s\S]*?)\n    \}/.exec(source);
  const readerBody = readerFn ? readerFn[1] : '';
  report('a named-reader function exists', Boolean(readerFn));
  const listMatch = /\.lower\(\)\s+in\s+\[([^\]]*)\]/.exec(readerBody);
  const readers = listMatch ? (listMatch[1].match(/'[^']*'/g) || []).map(x => x.slice(1, -1)) : [];
  report('readers are matched against a closed list of exact addresses',
    readers.length > 0 && readers.every(a => /^[a-z0-9._-]+@[a-z0-9.-]+$/.test(a)), readers.join(', '));
  report('the reader list is short enough to read at a glance', readers.length > 0 && readers.length <= 5,
    `${readers.length} reader(s)`);
  report('every reader is a district STAFF address, never a student one',
    readers.length > 0 && readers.every(a => a.endsWith('@zcs.k12.in.us')));
  report('the reader check never uses a suffix, prefix, pattern or local-part test',
    readerFn && !/matches\(|endsWith\(|startsWith\(|contains\(|split\('@'\)\[0\]/.test(readerBody));
  report('the reader check needs a verified email and the pinned provider',
    /email_verified\s*==\s*true/.test(readerBody) && /viaGoogle\(\)/.test(readerBody));
  const readerAllows = allows.filter(a => a.condition.includes('isReader'));
  report('isReader is used, and only to read',
    readerAllows.length > 0 && readerAllows.every(a => a.verbs.every(v => v === 'get' || v === 'list' || v === 'read')),
    readerAllows.map(a => a.verbs.join(',')).join(' | '));

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
  report('writes are validated against a closed field allowlist',
    /\.keys\(\)\.hasOnly\(/.test(source));

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
  ['every district account becomes a reader',
    s => s.replace(/function isReader\(\) \{[\s\S]*?\n    \}/, 'function isReader() {\n      return true;\n    }')],
  ['the reader test becomes a local-part match',
    s => s.replace(/\.lower\(\) in \[[^\]]*\]/, ".lower().split('@')[0] == 'janderson'")],
  ['a student address is added to the readers',
    s => s.replace(/\.lower\(\) in \['janderson@zcs\.k12\.in\.us'/, ".lower() in ['janderson@zcs.k12.in.us', 'janderson@stumail.zcs.k12.in.us'")],
  ['the reader list swells past five',
    s => s.replace(/\.lower\(\) in \['janderson@zcs\.k12\.in\.us'/, ".lower() in ['janderson@zcs.k12.in.us', 'a@zcs.k12.in.us', 'b@zcs.k12.in.us', 'c@zcs.k12.in.us', 'd@zcs.k12.in.us', 'e@zcs.k12.in.us'")],
  ['a reader is allowed to delete',
    s => s.replace(/allow delete: if false;/, 'allow delete: if inTenant(tenantId) && isReader();')],
  ['the reader check stops requiring a verified email',
    s => s.replace(/&&\s*request\.auth\.token\.email_verified == true\n\s*&&\s*request\.auth\.token\.email\.lower\(\) in/, '&& request.auth.token.email.lower() in')],
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
