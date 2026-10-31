#!/usr/bin/env node
/**
 * class-pulse-roster.js
 *
 * Sets up a teacher's Class Pulse class list in the district database: which
 * students' submitted work that teacher may read. firestore/firestore.rules lets no
 * browser write a class list, the teacher's own included, so this runs with the
 * project owner's administrator credentials, in Google Cloud Shell.
 *
 * The list of students is a private file that never enters this repository (the
 * repository is public; the script refuses a file inside it). Two columns:
 *
 *   email,name
 *   ana.ruiz@stumail.zcs.k12.in.us,Ana Ruiz
 *   ben.cole@stumail.zcs.k12.in.us,Ben Cole
 *
 * A student must have signed in to BeHistorical once, so their account exists.
 * Anyone who has not is listed, and left off until the next run.
 *
 * Dry run first (nothing is written), then the same command with --apply:
 *
 *   node scripts/class-pulse-roster.js ~/g4.csv --teacher you@zcs.k12.in.us \
 *     --class G4 --approval "Dan Layton, email of 2026-10-22"
 *
 * Running it again later adds new students and updates names. A student taken
 * off the file stays on the list unless --remove-missing is given.
 *
 * Steps for Jeff, in plain language: docs/claude/student-work-persistence.md,
 * "Setting up the class list".
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PROJECT = 'behistoric';
const TENANT = 'zcs';
const STAFF = 'zcs.k12.in.us';
const STUDENT = 'stumail.zcs.k12.in.us';

function fail(message) { const e = new Error(message); e.userFacing = true; return e; }
const domainOf = email => email.slice(email.lastIndexOf('@') + 1);

function parseArgs(argv) {
  const out = { file: null, teacher: null, classLabel: null, approval: null, apply: false, removeMissing: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--apply') out.apply = true;
    else if (a === '--remove-missing') out.removeMissing = true;
    else if (a === '--teacher') out.teacher = argv[++i];
    else if (a === '--class') out.classLabel = argv[++i];
    else if (a === '--approval') out.approval = argv[++i];
    else if (!out.file) out.file = a;
    else throw fail('Unexpected argument: ' + a);
  }
  if (!out.file) throw fail('Give the class list file first, for example ~/g4.csv');
  if (!out.teacher) throw fail('Give your staff email with --teacher');
  if (!out.classLabel) throw fail('Give the class name with --class, for example G4');
  if (!out.approval || out.approval.trim().length < 8) throw fail('Give the district approval with --approval, for example "Dan Layton, email of 2026-10-22"');
  return out;
}

// The file stays private: never inside this repository, which is public.
function readList(file) {
  const abs = path.resolve(file);
  const rel = path.relative(ROOT, abs);
  if (!rel.startsWith('..') && !path.isAbsolute(rel)) throw fail('Keep the class list outside the course repository; it is public. Move it to your home folder, for example ~/g4.csv');
  if (!fs.existsSync(abs)) throw fail('No file at ' + abs);
  const lines = fs.readFileSync(abs, 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length && /^email\s*,/i.test(lines[0])) lines.shift();
  const seen = new Set(), students = [], problems = [];
  lines.forEach((line, n) => {
    const [emailRaw, ...rest] = line.split(',');
    const email = String(emailRaw || '').trim().toLowerCase(), name = rest.join(',').trim().replace(/^"|"$/g, '');
    if (!/^[^@\s]+@[^@\s]+$/.test(email)) problems.push('Line ' + (n + 1) + ': not an email address');
    else if (domainOf(email) !== STUDENT) problems.push('Line ' + (n + 1) + ': ' + email + ' is not a student account (@' + STUDENT + ')');
    else if (!name) problems.push('Line ' + (n + 1) + ': no name after the email');
    else if (name.length > 80) problems.push('Line ' + (n + 1) + ': the name is too long');
    else if (seen.has(email)) problems.push('Line ' + (n + 1) + ': ' + email + ' is listed twice');
    else { seen.add(email); students.push({ email, name }); }
  });
  if (problems.length) throw fail('Fix the class list first:\n  ' + problems.join('\n  '));
  if (!students.length) throw fail('The class list has no students in it.');
  if (students.length > 60) throw fail('That is more than 60 students; one class list is one class.');
  return students;
}

// Works out what would change. `auth` and `db` are firebase-admin's, or stand-ins in tests.
async function plan(opts, students, auth, db) {
  const teacherEmail = String(opts.teacher).trim().toLowerCase();
  if (domainOf(teacherEmail) !== STAFF) throw fail('--teacher must be your staff account (@' + STAFF + ')');
  let teacher;
  try { teacher = await auth.getUserByEmail(teacherEmail); }
  catch (_) { throw fail(teacherEmail + ' has not signed in to BeHistorical yet. Open any lesson, sign in once, and run this again.'); }
  const found = [], notYet = [];
  for (const s of students) {
    try { const u = await auth.getUserByEmail(s.email); found.push({ uid: u.uid, name: s.name, email: s.email }); }
    catch (_) { notYet.push(s.email); }
  }
  const listRef = db.collection('tenants').doc(TENANT).collection('rosters').doc(teacher.uid);
  const existing = (await listRef.collection('students').get()).docs.map(d => d.id);
  const keep = new Set(found.map(f => f.uid));
  return { teacher: { uid: teacher.uid, email: teacherEmail }, found, notYet, extra: existing.filter(id => !keep.has(id)), listRef };
}

async function apply(opts, p, FieldValue) {
  const batch = p.listRef.firestore.batch();
  batch.set(p.listRef, { classLabel: opts.classLabel, approvalReference: opts.approval.trim(), studentCount: p.found.length, updatedAt: FieldValue.serverTimestamp() });
  p.found.forEach(f => batch.set(p.listRef.collection('students').doc(f.uid), { label: f.name }));
  if (opts.removeMissing) p.extra.forEach(id => batch.delete(p.listRef.collection('students').doc(id)));
  await batch.commit();
}

function report(opts, p) {
  const lines = [
    'Class list for ' + p.teacher.email + ', class ' + opts.classLabel + ':',
    '  ' + p.found.length + ' students found' + (opts.apply ? ' and saved' : ''),
  ];
  if (p.notYet.length) lines.push('  ' + p.notYet.length + ' have not signed in to BeHistorical yet, so they are left off for now:', ...p.notYet.map(e => '    ' + e));
  if (p.extra.length) lines.push('  ' + p.extra.length + ' already on the list are not in this file' + (opts.removeMissing ? (opts.apply ? ' and were removed' : ' and would be removed') : '; they stay (add --remove-missing to take them off)'));
  lines.push(opts.apply ? 'Done. Open Class Pulse, choose My class and sign in.' : 'Nothing was written. Check the numbers, then run the same command with --apply at the end.');
  return lines.join('\n');
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const students = readList(opts.file);
  let admin;
  try { admin = require('firebase-admin'); }
  catch (_) { throw fail('Install the admin library first: npm install --no-save firebase-admin'); }
  const appOpts = { projectId: PROJECT };
  if (admin.credential && admin.credential.applicationDefault) appOpts.credential = admin.credential.applicationDefault();
  admin.initializeApp(appOpts);
  const p = await plan(opts, students, admin.auth(), admin.firestore());
  if (opts.apply) await apply(opts, p, admin.firestore.FieldValue);
  console.log(report(opts, p));
}

module.exports = { parseArgs, readList, plan, apply, report, ROOT };

if (require.main === module) {
  main().catch(e => {
    console.error(e.userFacing ? e.message : 'The setup stopped: ' + (e.message || e) + '\nIf it mentions a quota project or credentials, run: gcloud auth application-default login, then try again.');
    process.exit(1);
  });
}
