#!/usr/bin/env node
/**
 * xray-roster.test.js
 *
 * The class-list join: two exports in, "backup account to class" out, and nothing
 * else. Offline and dependency-free, in the push gate.
 *
 * WHAT IT PROVES
 *   - A section name is read the way a teacher writes it, and a class that does not
 *     exist (G2) or a number that is not alone (G12) is not read as one.
 *   - Both exports parse the way real ones look: Canvas's "Points Possible" and test
 *     student rows, a byte-order mark, CRLF, quoted commas, a Firebase CSV with no
 *     header row.
 *   - The join is careful. A staff account is never filed into a class. A student
 *     in two classes, or an address matching two accounts, is left out instead of
 *     guessed. Mixed case matches. Enrolled students with no account are counted,
 *     because that is what the Few records flag exists to notice.
 *   - Class only: no email, login or name appears anywhere in the result.
 *   - A join that matches nothing says so, rather than showing zeros.
 *   - The invented class's files rebuild exactly the roster the demo claims.
 *
 * WHY IT CARRIES NEGATIVE CONTROLS
 * Each protection above is broken on purpose in a copy of the library and the
 * assertion that guards it must go red.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const Sx = require('../lib/xray-sections.js');
const R = require('../lib/xray-roster.js');
const D = require('../lib/xray-demo-data.js');

const G = '\x1b[32m', Rd = '\x1b[31m', W = '\x1b[1m', Dm = '\x1b[2m', Z = '\x1b[0m';
let failures = 0;
function check(label, ok, detail) {
  console.log(`  ${ok ? G + 'PASS' : Rd + 'FAIL'}${Z} ${label}${detail ? `  ${Dm}(${detail})${Z}` : ''}`);
  if (!ok) failures++;
  return ok;
}
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const SD = 'stumail.zcs.k12.in.us';

console.log(`${W}Class list: two exports in, account to class out${Z}\n`);

// ── Section names ───────────────────────────────────────────────────────────
console.log(`${W}Reading a section name${Z}`);
const sec = t => Sx.recognizeAll(t);
check('the seven classes are G1, G3, G4, S1, S2, S3 and S4, and there is no G2',
  eq(Sx.SECTIONS.map(s => s.id).sort(), ['g1', 'g3', 'g4', 's1', 's2', 's3', 's4']));
check('Mike Kelly teaches G1 and G3, and Jeff Anderson teaches the rest',
  eq(Sx.SECTIONS.filter(s => s.teacher === 'kelly').map(s => s.id), ['g1', 'g3']) &&
  eq(Sx.SECTIONS.filter(s => s.teacher === 'anderson').map(s => s.id).sort(), ['g4', 's1', 's2', 's3', 's4']));
check('"G1 - AP World History (Kelly)" reads as g1', eq(sec('G1 - AP World History (Kelly)'), ['g1']));
check('"s 3", "S3" and "Period S3 2026" read as s3', eq(sec('s 3'), ['s3']) && eq(sec('S3'), ['s3']) && eq(sec('Period S3 2026'), ['s3']));
check('G2 is not a class', eq(sec('G2 Advisory'), []));
check('a number that is not alone is not read (G12), and neither is a letter inside a word (BIG1)',
  eq(sec('G12'), []) && eq(sec('BIG1'), []));
check('two classes in one cell are both found, once each', eq(sec('G4 AP World History, S1 AP World History, g4'), ['g4', 's1']));
check('nothing in the text reads as nothing', eq(sec('Period 5'), []) && eq(sec(''), []) && eq(sec(null), []));

// ── CSV and the two exports ─────────────────────────────────────────────────
console.log(`\n${W}Parsing the files the way real ones look${Z}`);
const csv = R.parseCsv('﻿a,"b,c","say ""hi"""\r\n1,2,3\r\n"multi\nline",x,y');
check('CSV: byte-order mark, quoted comma, doubled quote, CRLF, newline inside quotes',
  eq(csv, [['a', 'b,c', 'say "hi"'], ['1', '2', '3'], ['multi\nline', 'x', 'y']]), JSON.stringify(csv[0]));

const fbJson = JSON.stringify({ users: [{ localId: 'u1', email: 'A@' + SD }, { uid: 'u2', email: 'b@' + SD }, { localId: 'u3' }] });
check('Firebase JSON: both id spellings, email lowercased, a user with no email skipped',
  eq(R.parseFirebaseUsers(fbJson).users, [{ uid: 'u1', email: 'a@' + SD }, { uid: 'u2', email: 'b@' + SD }]));
check('Firebase JSON as a bare array', R.parseFirebaseUsers(JSON.stringify([{ localId: 'u1', email: 'a@' + SD }])).users.length === 1);
check('Firebase CSV with no header row: id first, email second',
  eq(R.parseFirebaseUsers('u1,a@' + SD + ',true,hash\nu2,b@' + SD + ',true,hash').users.map(u => u.uid), ['u1', 'u2']));
check('Firebase CSV with a header row', eq(R.parseFirebaseUsers('UID,Email\nu1,a@' + SD).users.map(u => u.uid), ['u1']));
check('broken Firebase JSON is reported, not thrown', /not valid JSON/.test(R.parseFirebaseUsers('{ nope').problem));

const canvas = R.parseCanvasRoster(
  'Student,ID,SIS User ID,SIS Login ID,Section,Hw (1)\r\n    Points Possible,,,,,10\r\n"Student, Test",9,,teststudent,G4,\r\n' +
  '"Lee, Ann",1,2,ALee1,G1 - AP World,\r\n"Roe, Bo",3,4,,S2,\r\n');
check('Canvas: "Points Possible" and the test student are not students, and a row with no login is skipped',
  eq(canvas.rows, [{ key: 'alee1', sectionText: 'G1 - AP World' }]), JSON.stringify(canvas.rows));
check('Canvas: a full email in the login column is cut to its local part',
  eq(R.parseCanvasRoster('Student,SIS Login ID,Section\nX,Pat@stumail.zcs.k12.in.us,S1').rows, [{ key: 'pat', sectionText: 'S1' }]));
check('Canvas without a Section column says so', /No Section column/.test(R.parseCanvasRoster('Student,SIS Login ID\nX,y').problem));
check('Canvas without a login or email column says so', /No login or email column/.test(R.parseCanvasRoster('Student,Section\nX,G1').problem));

// ── The join ────────────────────────────────────────────────────────────────
console.log(`\n${W}The join is careful, and class only comes out${Z}`);
const FB = JSON.stringify({ users: [
  { localId: 'u1', email: 'Alice1@' + SD },
  { localId: 'u2', email: 'bob2@' + SD },
  { localId: 'u3', email: 'carol3@' + SD },
  { localId: 'u4', email: 'dup@' + SD },
  { localId: 'u5', email: 'DUP@' + SD },
  { localId: 'u6', email: 'alice1@zcs.k12.in.us' },   // STAFF, same local part as a student
  { localId: 'u7', email: 'orphan@' + SD }
] });
const CV = [
  'Student,ID,SIS User ID,SIS Login ID,Section',
  '    Points Possible,,,,',
  '"Smith, Alice",1,1,ALICE1,G1 AP World',
  '"Jones, Bob",2,2,bob2,S2 AP World',
  '"Reed, Carol",3,3,carol3,G2 Advisory',
  '"Park, Dave",4,4,dave4,G4 AP World',
  '"Cole, Dup",5,5,dup,S3 AP World',
  '"Vale, Eve",6,6,eve5,"G1 AP World, S1 AP World"'
].join('\r\n');
const out = R.buildClassList({ firebaseText: FB, canvasText: CV });
check('accounts land in their class, whatever the capitalization of either list', eq(out.sectionByUid, { u1: 'g1', u2: 's2' }), JSON.stringify(out.sectionByUid));
check('a staff account that shares a student\'s local part is not filed into the student\'s class', out.sectionByUid.u6 === undefined);
check('enrolled counts come from the roster, not from accounts',
  out.enrolled.g1 === 1 && out.enrolled.s2 === 1 && out.enrolled.g4 === 1 && out.enrolled.s3 === 1 && out.enrolled.s1 === 0,
  JSON.stringify(out.enrolled));
check('an enrolled student with no backup account is counted as such', out.stats.noBackupYet === 1);
check('an address matching two accounts is left out, not guessed', out.stats.ambiguousAccounts === 1 && out.sectionByUid.u4 === undefined && out.sectionByUid.u5 === undefined);
check('a student in two classes at once is left out and counted', out.stats.inTwoSections === 1);
check('a section that is not one of the seven is named, with its count', eq(out.stats.unrecognizedSections, { 'G2 Advisory': 1 }));
check('staff accounts are set aside and counted', out.stats.otherDomainAccounts === 1);
check('accounts that are on no class list are counted (the unmatched student accounts)', out.stats.accountsNotOnRoster === 4, `${out.stats.accountsNotOnRoster}`);

const dump = JSON.stringify(out);
check('no email, login or name appears anywhere in the result',
  dump.indexOf('@') === -1 && !/alice|bob|carol|dave|dup|eve|orphan|Smith|Jones|Reed|Park|Cole|Vale/i.test(dump.replace(/"u\d"/g, '')));
check('the only account ids in the result are the matched ones', eq(Object.keys(out.sectionByUid).sort(), ['u1', 'u2']));

const none = R.buildClassList({ firebaseText: FB, canvasText: 'Student,SIS Login ID,Section\nX,12345,G1\nY,67890,S2' });
check('a join that matches nothing says the login column is probably not the district email',
  none.stats.matched === 0 && none.warnings.some(w => /No roster student matched/.test(w)));
const noSec = R.buildClassList({ firebaseText: FB, canvasText: 'Student,SIS Login ID,Section\nX,alice1,Period 5' });
check('a roster naming none of the seven classes says so', noSec.warnings.some(w => /named one of the seven/.test(w)));
check('a missing or broken file is a warning, never an exception',
  R.buildClassList({ firebaseText: '', canvasText: '' }).warnings.length >= 1);

// ── The invented class takes the same road ──────────────────────────────────
console.log(`\n${W}The demo's files rebuild the roster the demo claims${Z}`);
const demo = D.makeDemo();
const rebuilt = R.buildClassList({ firebaseText: demo.files.firebaseText, canvasText: demo.files.canvasText });
check('rebuilding from the two files gives exactly the demo roster', eq(rebuilt, demo.roster));
const wanted = {};
demo.records.forEach(r => { const m = /^demo-([gs][1-4])-\d\d$/.exec(r.studentId); if (m) wanted[r.studentId] = m[1]; });
check('every demo student lands in the class their id names',
  Object.keys(wanted).every(uid => demo.roster.sectionByUid[uid] === wanted[uid]), `${Object.keys(wanted).length} students`);
check('the three accounts on no roster and the staff account are filed nowhere',
  ['demo-x-01', 'demo-x-02', 'demo-x-03', 'demo-staff-01'].every(u => demo.roster.sectionByUid[u] === undefined));
check('enrolled counts are the seven class sizes, with G2 rows and the dual-section student left out',
  eq(demo.roster.enrolled, { g4: 25, s1: 24, s2: 23, s3: 21, s4: 26, g1: 22, g3: 20 }) &&
  demo.roster.stats.inTwoSections === 1 && eq(demo.roster.stats.unrecognizedSections, { 'G2 Advisory': 2 }));

// ── Negative controls ───────────────────────────────────────────────────────
console.log(`\n${W}Negative controls${Z}  ${Dm}each break must turn its assertion red${Z}`);
const SRC = fs.readFileSync(path.join(ROOT, 'scripts/lib/xray-roster.js'), 'utf8');
function patched(from, to) {
  if (!SRC.includes(from)) return null;
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', SRC.replace(from, to))(mod, mod.exports, () => Sx);
  return mod.exports;
}
function control(name, from, to, caught) {
  const lib = patched(from, to);
  if (!lib) return check(`${name}: the mutation changed nothing, so it proves nothing`, false);
  check(`${name}, and the check notices`, caught(lib.buildClassList({ firebaseText: FB, canvasText: CV })) === true);
}
control('staff accounts stop being set aside',
  "if (domainOf(u.email) !== STUDENT_DOMAIN) { stats.otherDomainAccounts++; return; }", '',
  r => r.sectionByUid.u1 === undefined || r.stats.otherDomainAccounts === 0);
control('an address matching two accounts is guessed at',
  'if (uids.length === 1) {', 'if (uids.length >= 1) {',
  r => r.sectionByUid.u4 !== undefined);
control('a student in two classes is filed in the first',
  "if (found.length > 1) { stats.inTwoSections++; return; }", '',
  r => r.stats.inTwoSections === 0);
control('the result starts carrying addresses',
  'return { sectionByUid: sectionByUid,', 'return { emails: Object.keys(byKey), sectionByUid: sectionByUid,',
  r => JSON.stringify(r).indexOf('@') !== -1 || /alice|bob/i.test(JSON.stringify(r.emails)));
control('matching stops ignoring capitalization',
  ".trim().toLowerCase();\n    var at = v.indexOf('@');\n    return at === -1 ? v : v.slice(0, at);", ".trim();\n    var at = v.indexOf('@');\n    return at === -1 ? v : v.slice(0, at);",
  r => r.sectionByUid.u1 === undefined);
control('a class that does not exist (G2) is accepted',
  "var found = Sections.recognizeAll(r.sectionText);", "var found = (/g2/i.test(r.sectionText) ? ['g4'] : Sections.recognizeAll(r.sectionText));",
  r => Object.keys(r.stats.unrecognizedSections).length === 0);

console.log('');
if (failures) {
  console.log(`${Rd}${W}Class list: ${failures} check(s) failed.${Z}`);
  process.exit(1);
}
console.log(`${G}${W}Class list: all checks passed.${Z}`);
