#!/usr/bin/env node
'use strict';

/**
 * sync-engine.test.js
 *
 * Proves the backup engine in assets/js/behistorical-sync.js does what the
 * architecture record says it must, against a fake server that behaves the way
 * Firestore does where it matters (a create on an existing document fails, an
 * update against a stale revision fails, the network can drop) and a virtual
 * clock, so a school day runs in milliseconds.
 *
 * The questions this answers are the ones the district asked and the ones the
 * architecture record calls out as easy to get wrong:
 *   - does a wiped device get its work back
 *   - is an answer ever replaced by a different answer without the student choosing
 *   - is an empty box ever written
 *   - what happens if something loops, goes offline, hits the quota
 *
 * Offline and dependency-free, so it sits in the push gate. What it cannot see
 * is Google: sign-in, the real REST endpoints and the rules are covered by
 * sync-transport.test.js against the emulator, and the first real classroom use
 * is a pretend student, not this file.
 *
 * The last section mutates the engine and asserts these checks go red. A green
 * result from a check never shown capable of failing is not evidence.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'assets', 'js', 'behistorical-sync.js');
const TRANSPORT = path.join(ROOT, 'assets', 'js', 'behistorical-sync-transport.js');

const R = '\x1b[31m', G = '\x1b[32m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

// ── The sandbox ──────────────────────────────────────────────────────────────

function loadEngine(source) {
  const m = { exports: {} };
  new Function('module', source)(m);
  return m.exports;
}

function makeStorage() {
  const data = new Map();
  return {
    getItem: k => (data.has(k) ? data.get(k) : null),
    setItem: (k, v) => { data.set(k, String(v)); },
    removeItem: k => { data.delete(k); },
    keys: () => Array.from(data.keys()),
    dump: () => Array.from(data.entries())
  };
}

// A clock and a timer wheel that only move when told to.
function makeClock(start) {
  let t = start;
  let seq = 0;
  const timers = new Map();
  const settle = () => new Promise(r => setImmediate(r));
  return {
    now: () => t,
    setTimeout(fn, ms) { const id = ++seq; timers.set(id, { at: t + Math.max(0, ms), fn }); return id; },
    clearTimeout(id) { timers.delete(id); },
    pending: () => timers.size,
    async advance(ms) {
      const end = t + ms;
      let fired = 0;
      for (;;) {
        await settle();
        let nextId = null, nextAt = Infinity;
        timers.forEach((v, id) => { if (v.at < nextAt) { nextAt = v.at; nextId = id; } });
        if (nextId === null || nextAt > end) break;
        t = Math.max(t, nextAt);
        if (++fired > 20000) throw new Error('timer storm: timers keep firing without time passing');
        const { fn } = timers.get(nextId);
        timers.delete(nextId);
        fn();
      }
      t = end;
      await settle();
    },
    settle
  };
}

// Behaves like the parts of Firestore the engine depends on.
function makeServer() {
  const docs = new Map();
  const server = {
    docs,
    rev: 0,
    online: true,
    hold: null,           // a promise a fetch waits on, to put a request in flight
    failWith: null,       // 'quota' | 'denied' | 'auth'
    attempts: 0,          // every call that reached the server, accepted or not
    log: [],
    put(slot, text, confidence) {
      server.rev += 1;
      docs.set(slot, { text, confidence: confidence || '', rev: 'r' + server.rev });
    },
    writes() { return server.log.filter(e => e.op === 'create' || e.op === 'update'); }
  };
  function gate(op) {
    server.attempts += 1;
    if (!server.online) { const e = new Error('offline'); e.code = 'offline'; throw e; }
    if (server.failWith) { const e = new Error(server.failWith); e.code = server.failWith; throw e; }
    void op;
  }
  server.transport = function (initialUser) {
    let user = initialUser === undefined ? { uid: 'u1' } : initialUser;
    let listener = null;
    return {
      ready: () => Promise.resolve(),
      user: () => user,
      onAuthChange: cb => { listener = cb; },
      signIn: () => { user = { uid: 'u1' }; if (listener) listener(user); return Promise.resolve(); },
      // A different account becoming the signed-in one, the way the SDK reports it.
      as: uid => { user = uid ? { uid } : null; if (listener) listener(user); },
      async fetch() {
        gate('fetch');
        if (server.hold) await server.hold;
        server.log.push({ op: 'fetch' });
        const out = {};
        docs.forEach((v, k) => { out[k] = { text: v.text, confidence: v.confidence, rev: v.rev }; });
        return out;
      },
      async create(topic, slot, value) {
        gate('create');
        if (docs.has(slot)) { const e = new Error('exists'); e.code = 'exists'; throw e; }
        server.put(slot, value.text, value.confidence);
        server.log.push({ op: 'create', slot, text: value.text });
        return { rev: docs.get(slot).rev };
      },
      async update(topic, slot, value, client, rev) {
        gate('update');
        const cur = docs.get(slot);
        if (!cur || cur.rev !== rev) { const e = new Error('conflict'); e.code = 'conflict'; throw e; }
        server.put(slot, value.text, value.confidence);
        server.log.push({ op: 'update', slot, text: value.text });
        return { rev: docs.get(slot).rev };
      }
    };
  };
  return server;
}

// A page: a bag of answers the engine reads, and a record of what it put back.
function makePage(initial) {
  const answers = Object.assign({}, initial || {});
  const applied = [];
  return {
    answers,
    applied,
    type(id, text, confidence) { answers[id] = { text, confidence: confidence || '' }; },
    clear(id) { delete answers[id]; },
    slots: () => Object.keys(answers).map(id => ({ id, text: answers[id].text, confidence: answers[id].confidence })),
    apply(id, value) { applied.push({ id, text: value.text }); answers[id] = { text: value.text, confidence: value.confidence }; }
  };
}

const START = new Date(2026, 9, 6, 10, 0, 0).getTime();

function rig(Sync, config) {
  const clock = makeClock(START);
  const server = (config && config.server) || makeServer();
  const storage = (config && config.storage) || makeStorage();
  const page = (config && config.page) || makePage();
  const states = [];
  const transport = server.transport(config && config.user);
  const engine = Sync.create(Object.assign({
    topicKey: '1.4',
    slots: page.slots,
    apply: page.apply,
    storage,
    transport,
    now: clock.now,
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
    isOnline: () => server.online,
    onState: s => states.push(s)
  }, (config && config.engine) || {}));
  return { engine, clock, server, storage, page, states, transport };
}

// ── Checks ───────────────────────────────────────────────────────────────────

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

async function suite(Sync) {
  // ── The decision rule, exhaustively ────────────────────────────────────────
  section('The decision rule');
  const L = (t, c) => ({ text: t, confidence: c || '' });
  const h = (t, c) => Sync.valueHash(t, c || '');
  const d = Sync.decide;
  check('nothing anywhere does nothing', d(null, null, undefined) === 'noop');
  check('wiped device (nothing local, never confirmed) restores', d(null, L('saved'), undefined) === 'restore');
  check('a box the student cleared here is not resurrected', d(null, L('saved'), h('saved')) === 'noop');
  check('an empty box is not pushed over a saved answer', d(L(''), L('saved'), h('saved')) === 'noop');
  check('new answer, no document, creates', d(L('mine'), null, undefined) === 'push-create');
  check('answer over an empty document updates', d(L('mine'), L(''), undefined) === 'push-update');
  check('identical copies just record the baseline', d(L('same'), L('same'), undefined) === 'base');
  check('edited here, unchanged in the cloud: push', d(L('mine v2'), L('v1'), h('v1')) === 'push-update');
  check('unchanged here, changed elsewhere: take the newer', d(L('v1'), L('theirs'), h('v1')) === 'adopt');
  check('both changed: ask, never overwrite', d(L('mine'), L('theirs'), h('v0')) === 'conflict');
  check('different with no baseline: ask, never overwrite', d(L('mine'), L('theirs'), undefined) === 'conflict');
  check('same words, confidence only here: nobody is asked', d(L('same', '3'), L('same', '4'), h('same', '4')) === 'push-update');
  check('same words, no confidence here: take the saved rating', d(L('same', ''), L('same', '4'), undefined) === 'adopt-confidence');

  // ── Restoring a wiped device ───────────────────────────────────────────────
  section('A wiped or new device gets its work back');
  {
    const server = makeServer();
    server.put('checkpoint-one-response', 'Song China used paper money.', '4');
    server.put('first10-q1', 'Because of rice.', '');
    const r = rig(Sync, { server });
    await r.engine.start();
    await r.clock.advance(100);
    check('both saved answers are put back', r.page.applied.length === 2, JSON.stringify(r.page.applied.map(a => a.id)));
    check('nothing is written back to the server', server.writes().length === 0);
    check('the state is saved', r.engine.state().code === 'saved', r.engine.state().message);
    await r.clock.advance(120000);
    check('a restore does not echo into a write later', server.writes().length === 0);
  }

  // ── One account per device ─────────────────────────────────────────────────
  //
  // Students keep one Chromebook for years, so the case is a swapped or
  // inherited device, not a shared one. Without this the engine treated whatever
  // was saved in the browser as belonging to whoever signed in, and would have
  // uploaded the first student's answers into the second student's record.
  section('A second account on the same device is refused');
  {
    const storage = makeStorage();
    const first = rig(Sync, { storage, user: { uid: 'alice' } });
    await first.engine.start();
    await first.clock.advance(100);
    first.page.type('checkpoint-one-response', 'Alice wrote this.', '3');
    await first.clock.advance(5000);
    check('the first account backs up as normal', first.server.writes().length === 1);
    check('the device remembers whose it is', storage.getItem('behistorical-sync-owner') === 'alice');
    check('the owner record holds an id and none of the writing', storage.dump().filter(e => e[0] === 'behistorical-sync-owner').every(e => e[1] === 'alice'));

    const secondServer = makeServer();
    secondServer.put('checkpoint-one-response', 'Bob wrote this elsewhere.', '2');
    const second = rig(Sync, { storage, user: { uid: 'bob' }, server: secondServer, page: makePage({ 'checkpoint-one-response': { text: 'Alice wrote this.', confidence: '3' } }) });
    await second.engine.start();
    await second.clock.advance(100);
    check('a different account on this device is refused', second.engine.state().code === 'problem' && /different account/.test(second.engine.state().message), second.engine.state().message);
    check('the refused account reads nothing from the cloud', secondServer.log.length === 0 && secondServer.attempts === 0, `${secondServer.attempts} calls`);
    check('the refused account is not handed its own saved answers over the first one', second.page.applied.length === 0);
    second.page.type('first10-q1', 'typed after the refusal');
    await second.clock.advance(120000);
    check('and nothing is ever written under the refused account', secondServer.writes().length === 0 && secondServer.attempts === 0, `${secondServer.attempts} calls`);
    check('the device still belongs to the first account', storage.getItem('behistorical-sync-owner') === 'alice');

    const back = rig(Sync, { storage, user: { uid: 'alice' }, server: first.server, page: first.page });
    await back.engine.start();
    await back.clock.advance(100);
    check('the first account is welcomed back', back.engine.state().code === 'saved', back.engine.state().message);
  }
  {
    // A device with a baseline from before this rule existed has no owner yet:
    // the first account to sign in on it claims it, and nobody is locked out.
    const storage = makeStorage();
    storage.setItem('behistorical-sync-meta-1-4', JSON.stringify({ v: 1, base: {} }));
    const r = rig(Sync, { storage, user: { uid: 'carol' } });
    await r.engine.start();
    await r.clock.advance(100);
    check('a device that predates the rule is claimed by the first account', storage.getItem('behistorical-sync-owner') === 'carol' && r.engine.state().code === 'saved');
  }
  {
    // The account changes inside one page, with nothing reloaded.
    const r = rig(Sync, { user: { uid: 'alice' } });
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('checkpoint-one-response', 'Alice again.');
    await r.clock.advance(5000);
    const before = r.server.writes().length;
    r.transport.as('bob');
    await r.clock.advance(100);
    check('switching accounts in one page is refused', r.engine.state().code === 'problem' && /different account/.test(r.engine.state().message), r.engine.state().message);
    r.page.type('checkpoint-one-response', 'Typed while Bob is signed in.');
    await r.clock.advance(120000);
    check('switching accounts in one page writes nothing under the new one', r.server.writes().length === before, `${r.server.writes().length - before} extra writes`);
    r.transport.as('alice');
    await r.clock.advance(60000);
    check('the owner signing back in resumes the backup', r.engine.state().code === 'saved' && r.server.writes().length > before, r.engine.state().message);
  }
  {
    // The second account signs in while the first account's request is still
    // out. What comes back belongs to the first and must not land on the second.
    const server = makeServer();
    server.put('checkpoint-one-response', 'Alice saved this.', '4');
    let release;
    server.hold = new Promise(res => { release = res; });
    const r = rig(Sync, { server, user: { uid: 'alice' } });
    r.engine.start();
    await r.clock.advance(50);
    r.transport.as('bob');
    await r.clock.advance(50);
    release();
    await r.clock.advance(200);
    check('an answer in flight for one account is not given to the next', r.page.applied.length === 0, JSON.stringify(r.page.applied));
    check('and the second account stays refused', r.engine.state().code === 'problem');
  }

  // ── Throttle and the runaway loop ──────────────────────────────────────────
  section('Writes are bounded');
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('checkpoint-one-response', 'a');
    await r.clock.advance(4000);
    check('the first edit goes out promptly', r.server.writes().length === 1, `${r.server.writes().length} writes`);
    // Keystrokes every second for two minutes.
    for (let i = 0; i < 120; i++) {
      r.page.type('checkpoint-one-response', 'a'.repeat(i + 2));
      await r.clock.advance(1000);
    }
    const n = r.server.writes().length;
    check('two minutes of typing is at most one write per 30 seconds', n >= 3 && n <= 6, `${n} writes`);
    await r.clock.advance(60000);
    check('the last words arrive', r.server.docs.get('checkpoint-one-response').text === 'a'.repeat(121));
    check('the state settles to saved', r.engine.state().code === 'saved');
  }
  {
    // A bug in one of the three local writers that rewrites its box every
    // second must move the snapshot and nothing else.
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    for (let i = 0; i < 600; i++) {
      r.page.type('beintheroom-response', 'loop ' + i);
      await r.clock.advance(1000);
    }
    const n = r.server.writes().length;
    check('ten minutes of a runaway writer is about twenty writes, not six hundred', n <= 22, `${n} writes`);
  }
  {
    const r = rig(Sync, { engine: { windowMs: 1000, minGapMs: 100, sessionCap: 25, dayCap: 1000 } });
    await r.engine.start();
    await r.clock.advance(100);
    for (let i = 0; i < 200; i++) { r.page.type('map-check-response', 'x' + i); await r.clock.advance(1100); }
    check('the brake stops a session at its cap', r.server.writes().length === 25, `${r.server.writes().length} writes`);
    check('and says so out loud', r.engine.state().code === 'problem', r.engine.state().message);
  }
  {
    const storage = makeStorage();
    const first = rig(Sync, { storage, engine: { windowMs: 1000, minGapMs: 100, sessionCap: 1000, dayCap: 10 } });
    await first.engine.start();
    await first.clock.advance(100);
    for (let i = 0; i < 40; i++) { first.page.type('map-check-response', 'x' + i); await first.clock.advance(1100); }
    const second = rig(Sync, { storage, server: first.server, engine: { windowMs: 1000, minGapMs: 100, sessionCap: 1000, dayCap: 10 } });
    await second.engine.start();
    await second.clock.advance(100);
    for (let i = 0; i < 40; i++) { second.page.type('map-check-response', 'y' + i); await second.clock.advance(1100); }
    check('the daily cap survives a page reload', first.server.writes().length === 10, `${first.server.writes().length} writes`);
  }

  // ── Never write an empty box ───────────────────────────────────────────────
  section('An empty answer is never written');
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('checkpoint-two-response', 'My real answer.');
    await r.clock.advance(5000);
    const before = r.server.writes().length;
    r.page.clear('checkpoint-two-response');
    await r.clock.advance(120000);
    check('clearing the box writes nothing', r.server.writes().length === before);
    check('the saved answer is still in the cloud', r.server.docs.get('checkpoint-two-response').text === 'My real answer.');
    r.page.type('checkpoint-two-response', '');
    await r.clock.advance(120000);
    check('a blank string is no different', r.server.docs.get('checkpoint-two-response').text === 'My real answer.');
  }
  {
    const storage = makeStorage();
    const server = makeServer();
    const first = rig(Sync, { storage, server });
    await first.engine.start();
    await first.clock.advance(100);
    first.page.type('checkpoint-two-response', 'Kept answer.');
    await first.clock.advance(5000);
    // The student clears it, closes the lesson and opens it again.
    const page2 = makePage();
    const second = rig(Sync, { storage, server, page: page2 });
    await second.engine.start();
    await second.clock.advance(100);
    check('a box this device has confirmed and the student emptied is left alone', page2.applied.length === 0);
    // A brand new profile sees the same cloud.
    const page3 = makePage();
    const third = rig(Sync, { storage: makeStorage(), server, page: page3 });
    await third.engine.start();
    await third.clock.advance(100);
    check('a wiped profile gets it back', page3.applied.length === 1 && page3.applied[0].text === 'Kept answer.');
  }

  // ── Two copies that disagree ───────────────────────────────────────────────
  section('Two versions of an answer');
  {
    const server = makeServer();
    server.put('checkpoint-one-response', 'Written at home.');
    const page = makePage({ 'checkpoint-one-response': { text: 'Written at school.', confidence: '' } });
    const r = rig(Sync, { server, page });
    await r.engine.start();
    await r.clock.advance(100);
    check('both non-empty and different is a question for the student', r.engine.state().code === 'problem' && r.engine.state().conflicts.length === 1);
    await r.clock.advance(120000);
    check('nothing is overwritten while the question is open', server.writes().length === 0 && server.docs.get('checkpoint-one-response').text === 'Written at home.');
    check('and the page text is untouched', page.answers['checkpoint-one-response'].text === 'Written at school.');
    r.engine.resolve('checkpoint-one-response', 'mine');
    await r.clock.advance(5000);
    check('keeping this device updates the cloud', server.docs.get('checkpoint-one-response').text === 'Written at school.');
    const rec = r.engine.recovered()['checkpoint-one-response'] || [];
    check('and the other version is kept', rec.some(v => v.text === 'Written at home.'));
    check('the question is closed', r.engine.state().code === 'saved', r.engine.state().message);
  }
  {
    const server = makeServer();
    server.put('checkpoint-one-response', 'Written at home.');
    const page = makePage({ 'checkpoint-one-response': { text: 'Written at school.', confidence: '' } });
    const r = rig(Sync, { server, page });
    await r.engine.start();
    await r.clock.advance(100);
    r.engine.resolve('checkpoint-one-response', 'saved');
    await r.clock.advance(60000);
    check('using the saved version changes the page, not the cloud', page.answers['checkpoint-one-response'].text === 'Written at home.' && server.writes().length === 0);
    const rec = r.engine.recovered()['checkpoint-one-response'] || [];
    check('and this device\'s version is kept', rec.some(v => v.text === 'Written at school.'));
  }
  {
    // Another device wrote later, this one has not touched it since it last synced.
    const storage = makeStorage();
    const server = makeServer();
    const first = rig(Sync, { storage, server });
    await first.engine.start();
    await first.clock.advance(100);
    first.page.type('evidence-response', 'Version one.');
    await first.clock.advance(5000);
    server.put('evidence-response', 'Version two from home.');
    const page2 = makePage({ 'evidence-response': { text: 'Version one.', confidence: '' } });
    const second = rig(Sync, { storage, server, page: page2 });
    await second.engine.start();
    await second.clock.advance(100);
    check('a copy that is just older is replaced without asking', page2.answers['evidence-response'].text === 'Version two from home.' && second.engine.state().code === 'saved');
  }
  {
    // Mid session: another device writes while this page is open and then this
    // page tries to push over it.
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('primary-source-response', 'Mine, first.');
    await r.clock.advance(5000);
    r.server.put('primary-source-response', 'Theirs, meanwhile.');
    r.page.type('primary-source-response', 'Mine, second.');
    await r.clock.advance(60000);
    check('a stale revision does not overwrite', r.server.docs.get('primary-source-response').text === 'Theirs, meanwhile.');
    check('it becomes a question instead', r.engine.state().code === 'problem' && r.engine.state().conflicts.includes('primary-source-response'));
  }

  // ── Offline, quota, refusal ────────────────────────────────────────────────
  section('When the network or the server will not take it');
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.server.online = false;
    r.page.type('checkpoint-one-response', 'Typed on the bus.');
    await r.clock.advance(600000);
    const calls = r.server.attempts;
    check('offline is "saved on this device only"', r.engine.state().code === 'device', r.engine.state().message);
    check('ten minutes offline does not hammer the server', r.server.writes().length === 0);
    check('retries back off rather than looping', calls <= 20, `${calls} attempts in ten minutes`);
    r.server.online = true;
    r.engine.online();
    await r.clock.advance(5000);
    check('coming back online sends it', r.server.docs.get('checkpoint-one-response').text === 'Typed on the bus.');
    check('and the state follows', r.engine.state().code === 'saved');
  }
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.server.failWith = 'quota';
    r.page.type('checkpoint-one-response', 'Typed after the quota ran out.');
    await r.clock.advance(300000);
    check('a spent daily quota is loud', r.engine.state().code === 'problem' && /tomorrow/.test(r.engine.state().message), r.engine.state().message);
    const tries = r.server.attempts;
    await r.clock.advance(3600000);
    check('and it stops asking', r.server.attempts === tries);
  }
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.server.failWith = 'denied';
    r.page.type('checkpoint-one-response', 'Refused.');
    await r.clock.advance(300000);
    check('a refused account is loud and tells the student what to do', r.engine.state().code === 'problem' && /teacher/i.test(r.engine.state().message));
    const tries = r.server.attempts;
    await r.clock.advance(3600000);
    check('and it does not retry a refusal', r.server.attempts === tries);
  }
  {
    const r = rig(Sync, { user: null });
    await r.engine.start();
    await r.clock.advance(10000);
    check('signed out is "saved on this device only" with a way in', r.engine.state().code === 'device' && r.engine.state().needsSignIn === true);
    check('and nothing is sent', r.server.attempts === 0);
    r.page.type('checkpoint-one-response', 'Typed before signing in.');
    await r.clock.advance(1000);
    await r.engine.signIn();
    await r.clock.advance(5000);
    check('signing in backs up what was typed before', r.server.docs.get('checkpoint-one-response').text === 'Typed before signing in.');
  }

  // ── Page closing ───────────────────────────────────────────────────────────
  section('A page that is closing');
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('checkpoint-one-response', 'one');
    await r.clock.advance(5000);
    r.page.type('checkpoint-one-response', 'one two');
    await r.clock.advance(6000);
    check('inside the window the tail is waiting', r.server.docs.get('checkpoint-one-response').text === 'one');
    r.engine.flush();
    await r.clock.advance(100);
    check('closing the page sends it', r.server.docs.get('checkpoint-one-response').text === 'one two');
    r.page.type('checkpoint-one-response', 'one two three');
    r.engine.flush();
    await r.clock.advance(100);
    check('but never twice inside the minimum gap', r.server.docs.get('checkpoint-one-response').text === 'one two');
  }

  // ── Slots the rules would refuse ───────────────────────────────────────────
  section('Slots the rules would refuse');
  {
    const page = makePage();
    page.answers['Bad Slot!!'] = { text: 'fine words', confidence: '' };
    page.answers['x'.repeat(70)] = { text: 'too long a name', confidence: '' };
    page.answers['map-check-response'] = { text: 'good', confidence: '' };
    page.answers['evidence-response'] = { text: 'y'.repeat(20001), confidence: '' };
    const r = rig(Sync, { page });
    await r.engine.start();
    await r.clock.advance(5000);
    const slots = r.server.writes().map(w => w.slot);
    check('a good slot still backs up', slots.includes('map-check-response'));
    check('a name the rules would refuse is a problem, not a retry loop', !slots.includes('x'.repeat(70)) && r.engine.state().code === 'problem');
    check('an answer past the size ceiling is not sent', !slots.includes('evidence-response'));
  }

  // ── What is stored locally ─────────────────────────────────────────────────
  section('What the engine keeps on the device');
  {
    const r = rig(Sync);
    await r.engine.start();
    await r.clock.advance(100);
    r.page.type('checkpoint-one-response', 'A very particular sentence nobody else wrote.', '3');
    await r.clock.advance(5000);
    const dump = JSON.stringify(r.storage.dump().filter(([k]) => k.indexOf('behistorical-sync-recover') !== 0));
    check('the baseline holds hashes and never the writing', dump.indexOf('particular sentence') === -1);
    check('every key is outside the draft prefix collectLessonWork sweeps',
      r.storage.keys().every(k => k.indexOf('behistorical-sync-') === 0));
    r.page.type('checkpoint-one-response', 'A very particular sentence nobody else wrote.', '5');
    await r.clock.advance(60000);
    check('the new rating reaches the server', r.server.docs.get('checkpoint-one-response').confidence === '5');
  }
}


// ── Sign-in ──────────────────────────────────────────────────────────────────
//
// The real createAuth() from the transport, handed a fake Firebase SDK. What it
// proves is the logic around Google, not Google: which accounts are let in,
// what a closed popup does, and that the user is known the moment signIn()
// resolves, because the engine asks straight away.
async function signInSuite(Transport) {
  section('Sign-in');
  const cfg = {
    sdkVersion: '0.0.0', allowedDomains: ['zcs.k12.in.us', 'stumail.zcs.k12.in.us'],
    firebase: { apiKey: 'k', authDomain: 'a', projectId: 'p', appId: 'i' }
  };
  function fakeSdk(popup) {
    const state = { signedOut: false, auth: { currentUser: null, authStateReady: () => Promise.resolve() } };
    const app = { initializeApp: () => ({}) };
    const authMod = {
      getAuth: () => state.auth,
      onAuthStateChanged: () => {},
      GoogleAuthProvider: function () { this.setCustomParameters = p => { state.params = p; }; },
      signInWithPopup: () => popup(),
      signOut: () => { state.signedOut = true; return Promise.resolve(); }
    };
    return { state, importModule: url => Promise.resolve(/firebase-app/.test(url) ? app : authMod) };
  }
  const result = email => () => Promise.resolve({ user: { uid: 'u1', email } });
  async function attempt(popup) {
    const sdk = fakeSdk(popup);
    const auth = Transport.createAuth(cfg, { importModule: sdk.importModule });
    await auth.ready();
    let error = null;
    try { await auth.signIn(); } catch (e) { error = e; }
    return { auth, sdk, error };
  }

  let r = await attempt(result('sam@stumail.zcs.k12.in.us'));
  check('a student on a stumail address is let in', !r.error && r.auth.user() && r.auth.user().uid === 'u1');
  check('and is known the moment signIn resolves', r.auth.user() && r.auth.user().email === 'sam@stumail.zcs.k12.in.us');
  r = await attempt(result('Teacher@ZCS.k12.in.us'));
  check('staff are let in, whatever the case of the address', !r.error && !!r.auth.user());
  for (const bad of ['x@gmail.com', 'x@evilzcs.k12.in.us', 'x@stumail.zcs.k12.in.us.evil.com', 'x@lab.stumail.zcs.k12.in.us']) {
    r = await attempt(result(bad));
    check(`${bad} is refused and signed out`, r.error && r.error.code === 'denied' && r.sdk.state.signedOut && !r.auth.user());
  }
  r = await attempt(() => Promise.reject(Object.assign(new Error('x'), { code: 'auth/popup-closed-by-user' })));
  check('closing the popup is not an error', !r.error && !r.auth.user());
  r = await attempt(() => Promise.reject(Object.assign(new Error('x'), { code: 'auth/network-request-failed' })));
  check('a network failure is "offline"', r.error && r.error.code === 'offline');
  r = await attempt(() => Promise.reject(Object.assign(new Error('x'), { code: 'auth/unauthorized-domain' })));
  check('an unapproved site is "denied", so the student is told', r.error && r.error.code === 'denied');
  check('the chooser always asks which account', (await attempt(result('a@zcs.k12.in.us'))).sdk.state.params.prompt === 'select_account');
}

(async () => {
  console.log(`${W}Sync engine${X}  ${D}${path.relative(ROOT, SOURCE)}${X}`);
  const source = fs.readFileSync(SOURCE, 'utf8');
  const Sync = loadEngine(source);
  await suite(Sync);
  const transportSource = fs.readFileSync(TRANSPORT, 'utf8');
  await signInSuite(loadEngine(transportSource));

  // ── Negative controls ──────────────────────────────────────────────────────
  console.log(`\n${W}Negative controls${X}  ${D}each mutation must turn a check above red${X}`);
  const controls = [
    {
      name: 'an empty box is written like any other answer',
      patch: s => s.replace("        if (!text) return;\n        var id = normaliseSlot", "        var id = normaliseSlot")
        .replace("      if (!local || !String(local.text || '').trim()) return Promise.resolve();\n", ""),
      expect: /a blank string is no different/
    },
    {
      name: 'the write window is ignored',
      patch: s => s.replace("      var earliest = rec.lastWriteAt ? rec.lastWriteAt + gap : 0;", "      var earliest = 0; void gap;"),
      expect: /at most one write per 30 seconds|runaway writer/
    },
    {
      name: 'the brake never trips',
      patch: s => s.replace("    function braked() {\n      if (tripped) return true;", "    function braked() {\n      return false;\n      if (tripped) return true;"),
      expect: /the brake stops a session|daily cap survives/
    },
    {
      name: 'disagreeing copies are overwritten instead of asked about',
      patch: s => s.replace("    return 'conflict';\n  }", "    return 'push-update';\n  }"),
      expect: /both non-empty and different|nothing is overwritten while|a stale revision/
    },
    {
      name: 'a box the student cleared is restored from the cloud',
      patch: s => s.replace("      return base === undefined ? 'restore' : 'noop';", "      return 'restore';"),
      expect: /a box the student cleared|a box this device has confirmed/
    },
    {
      name: 'a wiped device is not restored',
      patch: s => s.replace("      return base === undefined ? 'restore' : 'noop';", "      return 'noop';"),
      expect: /both saved answers are put back|a wiped profile gets it back/
    },
    {
      name: 'a failure retries immediately instead of backing off',
      patch: s => s.replace("      return Math.min(cfg.backoffMaxMs, cfg.backoffBaseMs * Math.pow(2, Math.max(0, failures - 1)));", "      return 0;"),
      expect: /does not hammer|retries back off/
    },
    {
      name: 'any account may use any device',
      patch: s => s.replace("      if (owner && owner !== uid) return false;\n", ""),
      expect: /different account on this device is refused|second account|nothing is ever written under the refused/
    },
    {
      name: 'a switch of account inside one page keeps the old account\'s state',
      patch: s => s.replace("      if (prev && prev.uid !== user.uid) {", "      if (false) {"),
      expect: /switching accounts in one page/
    },
    {
      name: 'a request still out for the last account is trusted for the next',
      patch: s => s.replace("          if (!user || user.uid !== forUid) { again = !!user; return; }\n", ""),
      expect: /in flight for one account/
    },
    {
      name: 'the baseline stores the writing itself',
      patch: s => s.replace("    function saveMeta() { writeJson(storage, META_PREFIX + topic, meta); }",
        "    function saveMeta() { meta.leak = JSON.stringify(opts.slots()); writeJson(storage, META_PREFIX + topic, meta); }"),
      expect: /hashes and never the writing/
    }
  ];

  const signInControls = [
    {
      name: 'the school domain is checked as a suffix',
      patch: t => t.replace("allowed.indexOf(domain) === -1", "!allowed.some(function (d) { return domain.slice(-d.length) === d; })"),
      expect: /is refused and signed out/
    },
    {
      name: 'the student domain is not in the allowed list at all',
      patch: t => t.replace("var allowed = cfg.allowedDomains || [];", "var allowed = ['zcs.k12.in.us'];"),
      expect: /student on a stumail address is let in/
    },
    {
      name: 'the user is only known after the state listener fires',
      patch: t => t.replace("          current = { uid: result.user.uid, email: email };", ""),
      expect: /known the moment signIn resolves/
    }
  ];

  let controlFailures = 0;
  for (const c of signInControls) {
    const mutated = c.patch(transportSource);
    if (mutated === transportSource) {
      console.log(`  ${R}FAIL${X} control "${c.name}" no longer matches the source, so it proves nothing`);
      controlFailures++;
      continue;
    }
    const before = failures;
    quiet = true;
    failed.length = 0;
    let crashed = null;
    try { await signInSuite(loadEngine(mutated)); } catch (e) { crashed = e; }
    quiet = false;
    const caught = failed.filter(label => c.expect.test(label));
    failures = before;
    if (crashed || caught.length) console.log(`  ${G}PASS${X} "${c.name}" turns the checks red  ${D}(${caught.length} checks caught it)${X}`);
    else { console.log(`  ${R}FAIL${X} "${c.name}" went unnoticed`); controlFailures++; }
  }
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
    try { await suite(loadEngine(mutated)); } catch (e) { crashed = e; }
    quiet = false;
    const caught = failed.filter(label => c.expect.test(label));
    const redCount = failures - before;
    failures = before; // the controls are expected to fail; only a miss counts
    if (crashed || caught.length) {
      console.log(`  ${G}PASS${X} "${c.name}" turns the checks red  ${D}(${crashed ? 'crashed' : caught.length + ' checks caught it, ' + redCount + ' red in all'})${X}`);
    } else {
      console.log(`  ${R}FAIL${X} "${c.name}" went unnoticed`);
      controlFailures++;
    }
  }
  failures += controlFailures;

  loadEngine(source); // leave the module clean
  console.log(failures ? `\n${R}${W}${failures} failed${X}` : `\n${G}${W}All sync engine checks passed.${X}`);
  process.exit(failures ? 1 : 0);
})();
