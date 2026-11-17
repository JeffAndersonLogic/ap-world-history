#!/usr/bin/env node
/**
 * backup-lookup.js
 *
 * Answers "did this student's work reach the backup?" for one student, from the
 * district database itself. Built 2026-11-17 for the case it is named after: a
 * student who keeps losing her First & 10 answers, and a teacher who needs to know
 * whether the cloud copy exists, and if not, why not.
 *
 * READ ONLY. It looks a student up and prints what it finds. It never writes,
 * edits or deletes anything, and it saves nothing to a file.
 *
 * WHY A COMMAND AND NOT A PAGE. firestore/firestore.rules lets a teacher's browser
 * read only Checkpoint 1 and 2 answers of students on their class list (Dan
 * Layton's approval of 2026-11-05 covers exactly that). First & 10 answers are
 * not readable from a teacher page, and widening that is a district decision.
 * This runs instead with the project owner's administrator credentials, in Google
 * Cloud Shell, the same way scripts/class-pulse-roster.js does, which is the same
 * access the owner already has in the Firebase console, made quicker to use.
 *
 * ANSWER TEXT IS SHOWN ONLY WHEN ASKED, AND ONLY FOR ONE TOPIC. Without --answers
 * it prints when each answer was saved, how long it is and its confidence rating:
 * enough to diagnose. --answers adds the writing itself and requires --topic, so a
 * lookup to recover one lesson never prints a student's whole year.
 *
 *   node scripts/backup-lookup.js ana.ruiz@stumail.zcs.k12.in.us
 *   node scripts/backup-lookup.js ana.ruiz@stumail.zcs.k12.in.us --topic 2.6
 *   node scripts/backup-lookup.js ana.ruiz@stumail.zcs.k12.in.us --topic 2.6 --answers
 *
 * Steps for Jeff, in plain language: docs/claude/student-work-persistence.md,
 * "Looking up one student's backup".
 */
'use strict';

const PROJECT = 'behistoric';
const TENANT = 'zcs';
const DOMAINS = ['stumail.zcs.k12.in.us', 'zcs.k12.in.us'];
// Zionsville keeps Indiana's Eastern time. Cloud Shell's clock is UTC, so a time
// printed without this reads four or five hours off, and an answer saved at 8 PM
// would show as the next morning.
const TIME_ZONE = 'America/Indiana/Indianapolis';
const FIRST10 = ['first10-q1', 'first10-q2', 'first10-q3'];

// Both renderers' slot ids (unit lessons and Foundations), in module order.
const SLOTS = [
  ['map-check-response', 'Map & Geography Check'],
  ['map', 'Map & Geography Check'],
  ['first10-q1', 'First & 10, Question 1'],
  ['first10-q2', 'First & 10, Question 2'],
  ['first10-q3', 'First & 10, Question 3'],
  ['first10', 'First & 10 Reading'],
  ['besurreal', 'BeSurreal'],
  ['skill-builder-response', 'AP Skill Builder'],
  ['skill', 'AP Skill Builder'],
  ['checkpoint-one-response', 'Checkpoint 1'],
  ['checkpoint', 'Checkpoint 1'],
  ['checkpoint-one-response-submitted', 'Checkpoint 1, Submit receipt'],
  ['evidence-response', 'Evidence Lab'],
  ['evidence', 'Evidence Lab'],
  ['primary-source-response', 'Primary Source'],
  ['coach', 'Reasoning Prompts'],
  ['beintheroom-response', 'BeInTheRoom Reflection'],
  ['checkpoint-two-response', 'Checkpoint 2'],
  ['checkpoint2', 'Checkpoint 2'],
  ['checkpoint-two-response-submitted', 'Checkpoint 2, Submit receipt']
];
const SLOT_ORDER = new Map(SLOTS.map(([id], i) => [id, i]));
const SLOT_LABEL = new Map(SLOTS);

function fail(message) { const e = new Error(message); e.userFacing = true; return e; }
const domainOf = email => email.slice(email.lastIndexOf('@') + 1);

// "2.6", "Topic 2.6" and "2-6" are one topic, stored as "2-6". Foundations topics
// are stored as "f1": "F1", "Foundations 1" and "foundations-1" all reach it.
function normaliseTopic(raw) {
  const s = String(raw == null ? '' : raw).trim().toLowerCase()
    .replace(/^topic\s+/, '')
    .replace(/^foundations?[\s-]*(\d+)$/, 'f$1')
    .replace(/\./g, '-');
  return /^[a-z0-9]{1,4}-?[0-9]{0,2}$/.test(s) ? s : '';
}
const topicName = key => /^f\d+$/.test(key) ? 'Foundations ' + key.slice(1) : 'Topic ' + key.replace('-', '.');
const slotName = id => SLOT_LABEL.get(id) || id.replace(/-/g, ' ');

function parseArgs(argv) {
  const out = { email: null, topic: null, answers: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--answers') out.answers = true;
    else if (a === '--topic') {
      const raw = argv[++i];
      out.topic = normaliseTopic(raw);
      if (!out.topic) throw fail('"' + (raw || '') + '" is not a topic number. Use the number, for example --topic 2.6 or --topic F1');
    }
    else if (!out.email) out.email = String(a).trim().toLowerCase();
    else throw fail('Unexpected argument: ' + a);
  }
  if (!out.email) throw fail('Give the student\'s school email first, for example ana.ruiz@stumail.zcs.k12.in.us');
  if (!/^[^@\s]+@[^@\s]+$/.test(out.email)) throw fail(out.email + ' is not an email address');
  if (!DOMAINS.includes(domainOf(out.email))) throw fail(out.email + ' is not a school account. Student addresses end @' + DOMAINS[0]);
  if (out.answers && !out.topic) throw fail('--answers shows the writing itself, so it needs one topic, for example --topic 2.6 --answers');
  return out;
}

// A Firestore Timestamp, a Date, or the date strings Firebase Auth keeps.
function toDate(v) {
  if (!v) return null;
  if (typeof v.toDate === 'function') return v.toDate();
  const d = v instanceof Date ? v : new Date(v);
  return isNaN(d.getTime()) ? null : d;
}
function when(v) {
  const d = toDate(v);
  if (!d) return 'unknown';
  return d.toLocaleString('en-US', { timeZone: TIME_ZONE, month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

// Reads only. `auth` and `db` are firebase-admin's, or stand-ins in tests.
async function lookup(opts, auth, db) {
  let user;
  try { user = await auth.getUserByEmail(opts.email); }
  catch (e) {
    if (e && e.code === 'auth/user-not-found') return { account: null, records: [] };
    throw e;
  }
  const meta = user.metadata || {};
  const account = { uid: user.uid, created: meta.creationTime, lastSignIn: meta.lastSignInTime, lastActive: meta.lastRefreshTime };
  const snap = await db.collection('tenants').doc(TENANT).collection('responses')
    .where('studentId', '==', user.uid).get();
  const records = snap.docs.map(d => {
    const r = d.data() || {};
    return {
      topicKey: String(r.topicKey || ''), slotId: String(r.slotId || ''), text: String(r.text || ''),
      confidence: r.confidence, updatedAt: toDate(r.updatedAt), createdAt: toDate(r.createdAt), clientId: String(r.clientId || '')
    };
  }).filter(r => r.topicKey && r.slotId);
  return { account, records };
}

const byTopic = (a, b) => a.localeCompare(b, 'en', { numeric: true });
const bySlot = (a, b) => (SLOT_ORDER.has(a) ? SLOT_ORDER.get(a) : 999) - (SLOT_ORDER.has(b) ? SLOT_ORDER.get(b) : 999) || a.localeCompare(b);

function recordLine(r) {
  const bits = ['saved ' + when(r.updatedAt), r.text.length + ' characters'];
  if (r.confidence !== '' && r.confidence != null) bits.push('confidence ' + r.confidence);
  return '    ' + slotName(r.slotId).padEnd(32) + bits.join(', ');
}

function report(opts, result) {
  const L = ['Backup lookup for ' + opts.email + ' (read only: nothing was changed)', ''];
  if (!result.account) {
    L.push('This account has never signed in to BeHistorical, so nothing of theirs has been backed up.',
      'Everything they typed lived only in the browser on their Chromebook.', '',
      'What to do: on any lesson page, have them click "Back up my work" and sign in with their',
      'school account. Work lost before that cannot be recovered from the backup.');
    return L.join('\n');
  }
  const a = result.account;
  L.push('Account',
    '  First signed in:  ' + when(a.created),
    '  Last signed in:   ' + when(a.lastSignIn),
    '  Last active:      ' + when(a.lastActive) + '   (the last time a signed-in page checked in)', '');

  const all = result.records;
  if (!all.length) {
    L.push('No answer from this student has ever been backed up, although the account exists.', '',
      'Most likely causes, in order:',
      '  1. Another student signed in on this Chromebook first. The backup then pauses for',
      '     everyone else and the box on the lesson page says so.',
      '  2. The Chromebook was offline, or they were signed out, while they worked. The box',
      '     reads "Saved on this device only".',
      'What to do: open a lesson page on their Chromebook and read the backup box to them.');
    return L.join('\n');
  }

  const topics = Array.from(new Set(all.map(r => r.topicKey))).sort(byTopic);
  const latest = all.reduce((m, r) => (r.updatedAt && (!m || r.updatedAt > m) ? r.updatedAt : m), null);
  L.push('Backed up: ' + all.length + ' answers across ' + topics.length + (topics.length === 1 ? ' topic' : ' topics')
    + ', most recently ' + when(latest));
  const browsers = new Set(all.map(r => r.clientId).filter(Boolean)).size;
  if (browsers > 1) {
    L.push('  These were last saved from ' + browsers + ' different browsers. Each browser gets a new ID when it',
      '  starts fresh, so more than one means a second computer, or a Chromebook whose saved',
      '  data was wiped. Repeated wipes are a common cause of "my answers disappeared".');
  }
  L.push('');

  const shown = opts.topic ? [opts.topic] : topics;
  for (const t of shown) {
    const rs = all.filter(r => r.topicKey === t).sort((x, y) => bySlot(x.slotId, y.slotId));
    L.push(topicName(t));
    if (!rs.length) {
      L.push('    Nothing from this topic was backed up.', '');
      continue;
    }
    // First & 10 is listed in full on every topic that has any backup, so a
    // question that never arrived is named rather than simply absent.
    const missing = FIRST10.filter(id => !rs.some(r => r.slotId === id));
    const rows = rs.concat([]);
    for (const id of missing) rows.push({ slotId: id, missing: true });
    rows.sort((x, y) => bySlot(x.slotId, y.slotId));
    for (const r of rows) {
      if (r.missing) { L.push('    ' + slotName(r.slotId).padEnd(32) + 'NOT BACKED UP'); continue; }
      L.push(recordLine(r));
      if (opts.answers) {
        L.push(...r.text.split(/\r?\n/).map(line => '        | ' + line), '');
      }
    }
    L.push('');
  }

  if (opts.topic) {
    const rs = all.filter(r => r.topicKey === opts.topic);
    const f10 = rs.filter(r => FIRST10.includes(r.slotId)).length;
    L.push('What this means');
    if (!rs.length) {
      L.push('  Nothing from ' + topicName(opts.topic) + ' reached the backup, though other topics did. The usual',
        '  reasons: the work was done with the lesson page closed (the backup only runs while a',
        '  lesson page is open), or that day they were signed out or offline.');
    } else if (f10 < FIRST10.length) {
      L.push('  ' + (FIRST10.length - f10) + ' of the 3 First & 10 answers for this topic never reached the backup. The usual',
        '  reasons: the reading was opened on its own rather than from the lesson page (the backup',
        '  runs only while the lesson page is open), or the tab was closed within about 30',
        '  seconds of typing, before the next backup.');
    } else {
      L.push('  All three First & 10 answers are backed up, so the work is safe. To put it back,',
        '  have them open this topic\'s lesson page, signed in. If the boxes still come up empty,',
        '  run this again with --answers and copy the text for them.');
    }
  } else {
    L.push('Add --topic 2.6 (any topic number) to focus on one lesson; add --answers as well to see the writing.');
  }
  return L.join('\n');
}

// firebase-admin through its per-service entry points, as class-pulse-roster.js
// does and for the same reason: version 14 removed admin.auth(), and Cloud Shell
// installs the newest. `req` is require, or a stand-in in the tests.
function adminClients(req) {
  let appMod, authMod, fsMod;
  try {
    appMod = req('firebase-admin/app');
    authMod = req('firebase-admin/auth');
    fsMod = req('firebase-admin/firestore');
  } catch (_) {
    throw fail('Install the admin library first: npm install --no-save firebase-admin');
  }
  const app = appMod.initializeApp({ projectId: PROJECT, credential: appMod.applicationDefault() });
  return { auth: authMod.getAuth(app), db: fsMod.getFirestore(app) };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const { auth, db } = adminClients(require);
  console.log(report(opts, await lookup(opts, auth, db)));
}

module.exports = { parseArgs, normaliseTopic, lookup, report, adminClients, TIME_ZONE };

if (require.main === module) {
  main().catch(e => {
    console.error(e.userFacing ? e.message : 'The lookup stopped: ' + (e.message || e) + '\nIf it mentions a quota project or credentials, run: gcloud auth application-default login, then try again.');
    process.exit(1);
  });
}
