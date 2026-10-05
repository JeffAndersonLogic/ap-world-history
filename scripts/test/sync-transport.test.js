#!/usr/bin/env node
'use strict';

/**
 * sync-transport.test.js
 *
 * The backup's Firestore REST calls, run against Firestore's own engine in the
 * emulator with the real firestore/firestore.rules loaded. sync-engine.test.js
 * proves the engine's decisions against a fake server; this proves the real
 * requests are the ones the real rules accept, that the conflict precondition
 * really refuses a stale write, and that the engine and the transport work
 * together end to end.
 *
 * It lives in the `rules` suite, not offline, for the same reason
 * firestore-rules.test.js does: it needs the emulator and a Java runtime, so it
 * exits 2 (SKIP) on a bare checkout. A SKIP is not a pass. Pass --strict
 * anywhere the emulator is meant to be running.
 *
 *   npm run test:rules:emulator
 *
 * WHAT IT CANNOT SEE: Google sign-in itself. The emulator is handed a token for
 * a student the way Firebase Authentication would issue one, as an unsigned JWT
 * with the claims the rules read. The popup, the Workspace app-access setting
 * and the real ID token are exactly what a pretend student is for.
 *
 * The last section mutates the transport and asserts these checks go red.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const TRANSPORT = path.join(ROOT, 'assets', 'js', 'behistorical-sync-transport.js');
const ENGINE = path.join(ROOT, 'assets', 'js', 'behistorical-sync.js');
const STRICT = process.argv.includes('--strict');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

const HOST = process.env.FIRESTORE_EMULATOR_HOST;
if (!HOST) {
  if (STRICT) {
    console.log(`${R}${W}Sync transport (emulator): no emulator is running, and --strict forbids skipping.${X}`);
    process.exit(1);
  }
  console.log(`${Y}SKIP${X} Sync transport (emulator): no emulator is running.`);
  console.log(`${D}  npm run test:rules:emulator${X}`);
  process.exit(2);
}

const PROJECT = 'demo-behistorical-rules';
const API = `http://${HOST}/v1`;

function loadModule(source) {
  const m = { exports: {} };
  new Function('module', source)(m);
  return m.exports;
}

// The token Firebase Authentication would issue, minus the signature, which the
// emulator does not check. These are the claims firestore.rules reads.
function tokenFor(uid, email, provider) {
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  return [
    b64({ alg: 'none', typ: 'JWT' }),
    b64({
      iss: 'https://securetoken.google.com/' + PROJECT, aud: PROJECT, auth_time: now, iat: now, exp: now + 3600,
      sub: uid, user_id: uid, email, email_verified: true,
      firebase: { identities: { email: [email] }, sign_in_provider: provider || 'google.com' }
    }),
    ''
  ].join('.');
}

let failures = 0;
let quiet = false;
const failed = [];
function check(label, condition, detail) {
  if (!condition) { failures++; failed.push(label); }
  if (quiet) return !!condition;
  if (condition) console.log(`  ${G}PASS${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  else console.log(`  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  return !!condition;
}
function section(title) { if (!quiet) console.log(`\n${W}${title}${X}`); }

let counter = 0;
function student(Transport, name, email, overrides) {
  const uid = (name || 'student') + String(Date.now()).slice(-6) + (++counter);
  const o = Object.assign({
    projectId: PROJECT, tenantId: 'zcs', courseId: 'apwh',
    getUser: () => ({ uid }),
    getToken: () => Promise.resolve(tokenFor(uid, email || (uid + '@zcs.k12.in.us'))),
    apiBase: API
  }, overrides || {});
  return { uid, rest: Transport.createRest(o), opts: o };
}

async function code(promise) {
  try { await promise; return 'ok'; } catch (e) { return e.code || ('threw ' + e.message); }
}

async function rawDoc(uid, topic, slot) {
  const name = `projects/${PROJECT}/databases/(default)/documents/tenants/zcs/responses/${uid}__${topic}__${slot}`;
  const res = await fetch(`${API}/${name}`, { headers: { Authorization: 'Bearer owner' } });
  return res.status === 200 ? res.json() : null;
}

async function suite(Transport, Sync, withEngine) {
  section('Writing and reading through the real rules');
  const a = student(Transport, 'alice');
  const v1 = await a.rest.create('1-4', 'checkpoint-one-response', { text: 'Song China used paper money.', confidence: '4' }, 'clientA');
  check('a first write is accepted', !!v1.rev, v1.rev);
  const got = await a.rest.fetch('1-4');
  check('and read back by topic', got['checkpoint-one-response'] && got['checkpoint-one-response'].text === 'Song China used paper money.');
  check('with its rating as a number', got['checkpoint-one-response'].confidence === '4');
  const raw = await rawDoc(a.uid, '1-4', 'checkpoint-one-response');
  check('the server, not the browser, set both times', raw && raw.fields.createdAt && raw.fields.createdAt.timestampValue && raw.fields.updatedAt && raw.fields.updatedAt.timestampValue);
  check('the document carries only the fields the rules allow', raw && Object.keys(raw.fields).sort().join() ===
    ['clientId', 'confidence', 'courseId', 'createdAt', 'schemaVersion', 'slotId', 'studentId', 'tenantId', 'text', 'topicKey', 'updatedAt'].join());
  check('no student name or email is stored', !JSON.stringify(raw).includes('@') && !JSON.stringify(raw).includes('alice'.toUpperCase()));

  const v2 = await a.rest.update('1-4', 'checkpoint-one-response', { text: 'Song China used paper money, called jiaozi.', confidence: '5' }, 'clientA', v1.rev);
  check('an update that names the current revision is accepted', !!v2.rev && v2.rev !== v1.rev);
  const got2 = await a.rest.fetch('1-4');
  check('and replaces the text and rating', got2['checkpoint-one-response'].text.endsWith('jiaozi.') && got2['checkpoint-one-response'].confidence === '5');

  section('Conflicts');
  check('an update against a stale revision is refused', await code(a.rest.update('1-4', 'checkpoint-one-response', { text: 'stale write', confidence: '' }, 'clientB', v1.rev)) === 'conflict');
  check('and the stored answer is untouched', (await a.rest.fetch('1-4'))['checkpoint-one-response'].text.endsWith('jiaozi.'));
  check('a second create over an existing answer is refused as "exists"', await code(a.rest.create('1-4', 'checkpoint-one-response', { text: 'second device', confidence: '' }, 'clientB')) === 'exists');
  check('an update to an answer that does not exist is a conflict, not a crash', await code(a.rest.update('1-4', 'never-created', { text: 'x', confidence: '' }, 'c', '2026-01-01T00:00:00Z')) === 'conflict');

  section('Who may do what');
  const b = student(Transport, 'bob');
  check('another student reads nothing of hers', Object.keys(await b.rest.fetch('1-4')).length === 0);
  const asBobOnAlice = Transport.createRest(Object.assign({}, b.opts, { getUser: () => ({ uid: a.uid }) }));
  check('and cannot read her answers by claiming her id', await code(asBobOnAlice.fetch('1-4')) === 'denied');
  const fresh = await rawDoc(a.uid, '1-4', 'checkpoint-one-response');
  check('cannot overwrite her answer', await code(asBobOnAlice.update('1-4', 'checkpoint-one-response', { text: 'bob was here', confidence: '' }, 'c', fresh.updateTime)) === 'denied');
  check('cannot create in her name', await code(asBobOnAlice.create('1-4', 'evidence-response', { text: 'bob was here', confidence: '' }, 'c')) === 'denied');
  const pupil = student(Transport, 'sam', 'sam@stumail.zcs.k12.in.us');
  check('a student on a stumail address can back up their work', await code(pupil.rest.create('1-4', 'map-check-response', { text: 'a student answer', confidence: '2' }, 'c')) === 'ok');
  check('and read it back', ((await pupil.rest.fetch('1-4'))['map-check-response'] || {}).text === 'a student answer');
  const outsider = student(Transport, 'mallory', 'mallory@gmail.com');
  check('an account outside the school domain is refused', await code(outsider.rest.create('1-4', 'map-check-response', { text: 'hello', confidence: '' }, 'c')) === 'denied');
  const wrongProvider = student(Transport, 'eve', 'eve@zcs.k12.in.us', { getToken: () => Promise.resolve(tokenFor('eve1', 'eve@zcs.k12.in.us', 'password')), getUser: () => ({ uid: 'eve1' }) });
  check('a sign-in that is not Google is refused', await code(wrongProvider.rest.create('1-4', 'map-check-response', { text: 'hello', confidence: '' }, 'c')) === 'denied');

  section('Shapes the rules refuse');
  check('an answer over the size ceiling is refused', await code(a.rest.create('1-4', 'evidence-response', { text: 'z'.repeat(20001), confidence: '' }, 'c')) === 'denied');
  check('an answer exactly at the ceiling is accepted', await code(a.rest.create('1-4', 'primary-source-response', { text: 'z'.repeat(20000), confidence: '' }, 'c')) === 'ok');
  check('a topic the rules do not recognise is refused', await code(a.rest.create('topic.1.4', 'map-check-response', { text: 'hello', confidence: '' }, 'c')) === 'denied');
  check('a blank rating is accepted', await code(a.rest.create('1-4', 'skill-builder-response', { text: 'no rating given', confidence: '' }, 'c')) === 'ok');
  const blank = (await a.rest.fetch('1-4'))['skill-builder-response'];
  check('and reads back as blank', blank && blank.confidence === '');

  section('The network');
  const down = student(Transport, 'dora', null, { fetchImpl: () => Promise.reject(new TypeError('fetch failed')) });
  check('no route to the server is "offline"', await code(down.rest.fetch('1-4')) === 'offline');
  check('and so is a failed write', await code(down.rest.create('1-4', 'map-check-response', { text: 'hello', confidence: '' }, 'c')) === 'offline');
  const noToken = student(Transport, 'nina', null, { getToken: () => Promise.reject(Object.assign(new Error('x'), { code: 'auth' })) });
  check('a sign-in that cannot produce a token is "auth"', await code(noToken.rest.fetch('1-4')) === 'auth');

  if (withEngine) {
    section('The engine and the transport together');
    // A different device for the same student: new storage, an empty page.
    const wipedPage = { answers: {}, applied: [] };
    const store = (() => { const m = new Map(); return { getItem: k => m.has(k) ? m.get(k) : null, setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) }; })();
    const engine = Sync.create({
      topicKey: '1.4',
      slots: () => Object.keys(wipedPage.answers).map(id => ({ id, text: wipedPage.answers[id].text, confidence: wipedPage.answers[id].confidence })),
      apply: (id, v) => { wipedPage.applied.push(id); wipedPage.answers[id] = v; },
      storage: store,
      transport: { ready: () => Promise.resolve(), user: () => ({ uid: a.uid }), onAuthChange() {}, signIn: () => Promise.resolve(), fetch: a.rest.fetch, create: a.rest.create, update: a.rest.update },
      windowMs: 200, minGapMs: 50, tickMs: 50
    });
    await engine.start();
    await new Promise(r => setTimeout(r, 600));
    check('a wiped device gets every saved answer back through the real rules', wipedPage.applied.includes('checkpoint-one-response') && wipedPage.applied.includes('skill-builder-response'), wipedPage.applied.join(','));
    wipedPage.answers['beintheroom-response'] = { text: 'Typed on the new device.', confidence: '2' };
    await new Promise(r => setTimeout(r, 900));
    const there = (await a.rest.fetch('1-4'))['beintheroom-response'];
    check('and what it types next is backed up', there && there.text === 'Typed on the new device.' && there.confidence === '2');
    check('with the state saved', engine.state().code === 'saved', engine.state().message);
    engine.stop();
  }
}

(async () => {
  console.log(`${W}Sync transport${X}  ${D}${path.relative(ROOT, TRANSPORT)} against ${HOST}${X}`);
  const source = fs.readFileSync(TRANSPORT, 'utf8');
  const engineSource = fs.readFileSync(ENGINE, 'utf8');
  const Sync = loadModule(engineSource);
  await suite(loadModule(source), Sync, true);

  console.log(`\n${W}Negative controls${X}  ${D}each mutation must turn a check above red${X}`);
  const controls = [
    {
      name: 'an update does not name the revision it was based on',
      patch: s => s.replace("            currentDocument: { updateTime: rev },\n", ""),
      expect: /stale revision/
    },
    {
      name: 'an update replaces the whole document instead of three fields',
      patch: s => s.replace("            updateMask: { fieldPaths: ['text', 'confidence', 'clientId'] },\n", ""),
      expect: /names the current revision is accepted/
    },
    {
      name: 'an answer an administrator deleted reads as a refused account',
      patch: s => s.replace("throw docs[slot] ? error : fail('conflict', 'the saved copy is gone');", "throw error;"),
      expect: /does not exist is a conflict/
    },
    {
      name: 'the browser sets the timestamps instead of the server',
      patch: s => s.replace("              { fieldPath: 'createdAt', setToServerValue: 'REQUEST_TIME' },\n              { fieldPath: 'updatedAt', setToServerValue: 'REQUEST_TIME' }\n", ""),
      expect: /first write is accepted|server, not the browser/
    },
    {
      name: 'a refused create is reported as an existing document',
      patch: s => s.replace("throw there ? fail('exists', 'document already exists') : error;", "throw fail('exists', 'document already exists');"),
      expect: /outside the school domain|cannot create in her name|over the size ceiling/
    }
  ];

  let controlFailures = 0;
  for (const c of controls) {
    const mutated = c.patch(source);
    if (mutated === source) {
      console.log(`  ${R}FAIL${X} control "${c.name}" no longer matches the source, so it proves nothing`);
      controlFailures++;
      continue;
    }
    const before = failures;
    quiet = true;
    failed.length = 0;
    let crashed = null;
    try { await suite(loadModule(mutated), Sync, false); } catch (e) { crashed = e; }
    quiet = false;
    const caught = failed.filter(label => c.expect.test(label));
    failures = before;
    // A crash counts only when it is the transport itself failing (it carries a
    // code), never a typo in a control that would pass for the wrong reason.
    if (caught.length || (crashed && crashed.code)) {
      console.log(`  ${G}PASS${X} "${c.name}" turns the checks red  ${D}(${caught.length} checks caught it)${X}`);
    } else {
      console.log(`  ${R}FAIL${X} "${c.name}" went unnoticed${crashed ? '  ' + D + '(crashed: ' + crashed.message + ')' + X : ''}`);
      controlFailures++;
    }
  }
  failures += controlFailures;
  console.log(failures ? `\n${R}${W}${failures} failed${X}` : `\n${G}${W}All sync transport checks passed.${X}`);
  process.exit(failures ? 1 : 0);
})();
