#!/usr/bin/env node
'use strict';

/**
 * Class Pulse reader: the contract for every unit topic, and the engine around it.
 *
 * The contract is the instructional promise: what a provider is asked to judge
 * must be the topic's own prompt and criteria, word for word, from the skills
 * map, for every unit topic and whatever its criteria count. The engine is the
 * privacy and honesty promise: no student identifier reaches a provider, only
 * finished work is read, and a reply that invents a quote or hides uncertainty
 * becomes "Can't tell" rather than a level.
 *
 * Negative controls at the end load deliberately broken copies of the engine and
 * prove the assertions that guard each promise go red.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');
const ENGINE = path.join(ROOT, 'teacher', 'class-pulse-engine.js');
const E = require(ENGINE);
const R = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-rubrics.js'));

const box = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets', 'data', 'skills-map.js'), 'utf8'), box);
const MAP = JSON.parse(JSON.stringify(box.window.BEHISTORICAL_SKILLS_MAP));

function load(source) {
  const sandbox = { module: { exports: {} }, TextEncoder, require };
  vm.runInNewContext(source, sandbox);
  return sandbox.module.exports;
}

// A well-formed reply that quotes the response: every criterion Demonstrating.
function goodReply(contract, text) {
  const quote = text.slice(0, 24);
  return {
    criteria: contract.criteria.map(c => ({
      criterionId: c.id, category: 'D', evidence: [quote], reason: 'Quoted evidence meets the criterion.',
      misconceptions: [], uncertainty: [], reviewRequired: false
    }))
  };
}

function row(over = {}) {
  return {
    key: 'R1', text: 'The Mughal mansabdar system ranked officials, and the Ottoman devshirme took boys to serve the sultan.',
    completionState: 'verified-submission', updatedAt: '2026-10-28T12:00:00Z',
    studentId: 'NEVER-SEND-UID', sectionId: 'NEVER-SEND-SECTION', confidence: 4, ...over
  };
}

function checkContracts(api) {
  const unitTopics = Object.keys(MAP.topics).filter(k => MAP.topics[k].kind === 'unit');
  const listed = api.topicsFor(MAP);
  assert.deepEqual(listed, unitTopics, 'every unit topic is readable, in course order');
  let checked = 0;
  for (const key of unitTopics) {
    for (const cp of ['cp1', 'cp2']) {
      const slot = MAP.topics[key].slots[api.SLOTS[cp]];
      const c = api.contractFor(MAP, key, cp);
      assert.equal(c.prompt, slot.prompt, key + ' ' + cp + ' prompt is verbatim');
      assert.deepEqual(c.criteria.map(x => x.text), slot.criteria, key + ' ' + cp + ' criteria are verbatim and complete');
      assert.deepEqual(c.criteria.map(x => x.id), slot.criteria.map((_, i) => 'criterion-' + (i + 1)));
      assert.deepEqual(c.learningTargets, slot.learningTargets);
      assert.deepEqual(c.successCriteria, slot.successCriteria);
      assert.equal(c.topicKey, key.replace('.', '-'));
      checked++;
    }
  }
  return checked;
}

(async () => {
  // 1. Every unit topic, both checkpoints, verbatim.
  const checked = checkContracts(E);
  assert.ok(checked >= 140, 'expected the whole course, got ' + checked + ' checkpoints');

  // 2. Criteria counts follow the topic, not a fixed three.
  assert.equal(E.contractFor(MAP, '5.1', 'cp1').criteria.length, MAP.topics['5.1'].slots['checkpoint-one-response'].criteria.length);
  const five = E.contractFor(MAP, '5.3', 'cp2');
  assert.equal(five.criteria.length, MAP.topics['5.3'].slots['checkpoint-two-response'].criteria.length);
  assert.ok(five.criteria.length > 3, '5.3 Checkpoint 2 is the five-criterion case this test depends on');

  // 3. The rubric travels in the contract: course-wide levels and rules for every
  // topic, per-criterion descriptors where written, refused when its wording drifts.
  for (const key of Object.keys(R.TOPICS)) for (const cp of ['cp1', 'cp2']) {
    const c = E.contractFor(MAP, key, cp, R);
    assert.equal(c.rubricVersion, R.VERSION);
    assert.ok(c.criteria.every((x, i) => x.rubric && x.rubric.D === R.TOPICS[key][cp][i].D && x.rubric.P && x.rubric.N), key + ' ' + cp + ' carries its rubric');
  }
  assert.deepEqual(Object.keys(E.contractFor(MAP, '3.2', 'cp1', R).levels), ['D', 'P', 'N', 'U']);
  assert.ok(E.contractFor(MAP, '3.2', 'cp1', R).criteria.every(c => !('rubric' in c)), 'no invented descriptors for a topic without them');
  assert.ok(!('levels' in E.contractFor(MAP, '3.2', 'cp1')), 'no rubric unless one is passed');
  const drifted = JSON.parse(JSON.stringify(R));
  drifted.TOPICS['2.3'].cp1[0].criterion += ' (edited)';
  assert.throws(() => E.contractFor(MAP, '2.3', 'cp1', drifted), /does not match its criteria/);
  assert.match(E.contractFor(MAP, '2.3', 'cp1').coverageNote, /not assessed/);
  assert.ok(!('coverageNote' in E.contractFor(MAP, '3.2', 'cp2')));
  assert.match(E.INSTRUCTIONS, /uncertainty field is ONLY for category U/);
  assert.match(E.INSTRUCTIONS, /choose the lower one/);

  // 4. Refusals: Foundations, unknown topics, unknown checkpoints.
  assert.throws(() => E.contractFor(MAP, 'f1', 'cp1'), /unit topics only/);
  assert.throws(() => E.contractFor(MAP, '10.1', 'cp1'), /Unknown topic/);
  assert.throws(() => E.contractFor(MAP, '3.2', 'cp3'), /Unknown checkpoint/);
  const emptied = JSON.parse(JSON.stringify(MAP));
  emptied.topics['3.2'].slots['checkpoint-one-response'].criteria = [];
  assert.throws(() => E.contractFor(emptied, '3.2', 'cp1'), /written criteria/);

  // 5. What reaches a provider, and caching.
  const cp = E.contractFor(MAP, '3.2', 'cp1');
  let calls = 0, payload = null;
  const engine = E.createEngine({ provider: { id: 'spy', version: '1', async interpret(p) { calls++; payload = p; return goodReply(p.contract, p.response.text); } } });
  const a = await engine.analyze(row(), cp);
  assert.equal(a.status, 'analyzed');
  assert.equal(a.source, 'model-proposed');
  assert.equal(calls, 1);
  assert.doesNotMatch(JSON.stringify(payload), /NEVER-SEND|studentId|sectionId|confidence|"R1"/, 'no identifier or rating reaches the provider');
  assert.match(payload.instructions, /UNTRUSTED DATA/);
  await Promise.all([engine.analyze(row(), cp), engine.analyze(row(), cp)]);
  assert.equal(calls, 1, 'identical requests coalesce and cache');
  await engine.analyze(row({ text: row().text + ' Changed.' }), cp);
  assert.equal(calls, 2, 'changed writing is read again');

  // 6. Only finished work is read; a backup snapshot never reaches a provider.
  for (const [over, reason] of [[{ completionState: 'backup-snapshot' }, 'completion-unverified'], [{ text: '   ' }, 'missing-writing']]) {
    const before = calls;
    const r = await engine.analyze(row({ key: 'R-' + reason, ...over }), cp);
    assert.equal(r.status, 'ineligible');
    assert.equal(r.eligibilityReason, reason);
    assert.ok(r.criteria.every(c => c.category === 'U'));
    assert.equal(calls, before, reason + ' made no provider call');
  }

  // 7. Replies that must fail closed.
  const text = row().text;
  for (const mutate of [
    r => r.criteria.pop(),
    r => { r.criteria[0].evidence = ['Invented quote']; },
    r => { r.criteria[0].category = 'A+'; },
    r => { r.criteria[0].evidence = []; },
    r => { r.criteria[0].uncertainty = ['Contradiction']; r.criteria[0].reviewRequired = true; },
    r => { r.criteria[0].category = 'U'; r.criteria[0].reviewRequired = false; },
    r => { r.criteria[1].criterionId = 'criterion-1'; }
  ]) {
    const bad = goodReply(cp, text);
    mutate(bad);
    assert.throws(() => E.validateOutput(bad, cp, text));
  }
  // A three-criterion reply cannot answer a five-criterion checkpoint.
  assert.throws(() => E.validateOutput(goodReply(cp, text), five, text), /Incomplete/);
  const broken = E.createEngine({ provider: { id: 'bad', version: '1', async interpret() { return { criteria: [] }; } } });
  const failed = await broken.analyze(row(), cp);
  assert.equal(failed.status, 'error');
  assert.ok(failed.criteria.every(c => c.category === 'U'));
  assert.equal(broken.cacheSize(), 0, 'failures are retried, never cached');

  // 8. Teacher corrections and the class tally.
  const override = E.correction(a, 'criterion-1', 'P', 'Names the systems but not the empires.');
  const tally = E.aggregate([a, failed], cp, new Map([[a.key + '|criterion-1', override]]));
  assert.equal(tally.criteria[0].counts.P, 1);
  assert.equal(tally.criteria[0].counts.U, 1);
  assert.equal(tally.criteria[0].n, 2, 'a student the tool could not read stays in the count');
  assert.equal(a.criteria[0].category, 'D', 'the original proposal is kept');
  assert.throws(() => E.correction(a, 'criterion-1', 'D', ''), /reason/);

  // Negative controls: each broken engine must turn its guarding assertion red.
  const source = fs.readFileSync(ENGINE, 'utf8');
  const controls = [
    ['assumes three criteria', "const criteria = Array.isArray(slot.criteria) ? slot.criteria : [];",
      "const criteria = Array.isArray(slot.criteria) ? slot.criteria.slice(0, 3) : [];",
      m => checkContracts(m)],
    ['reads Foundations topics', "if (topic.kind !== 'unit') throw new Error('Class Pulse reads unit topics only, not ' + topicKey);", '',
      m => assert.throws(() => m.contractFor(MAP, 'f1', 'cp1'), /unit topics only/)],
    ['applies a rubric whose wording drifted', "if (own && (own.length !== criteria.length || own.some((r, i) => r.criterion !== criteria[i]))) {", 'if (false) {',
      m => { const d = JSON.parse(JSON.stringify(R)); d.TOPICS['2.3'].cp1[0].criterion += ' (edited)'; assert.throws(() => m.contractFor(MAP, '2.3', 'cp1', d), /does not match/); }],
    ['accepts invented quotes', "if (r.evidence.some(q => !text.includes(q))) throw new Error('Evidence quote absent from response');", '',
      m => { const bad = goodReply(cp, text); bad.criteria[0].evidence = ['Invented quote']; assert.throws(() => m.validateOutput(bad, cp, text)); }],
    ['sends the response key', 'response: { text: row.text }', 'response: { text: row.text, key: row.key }',
      async m => {
        let seen = null;
        await m.createEngine({ provider: { id: 's', version: '1', async interpret(p) { seen = p; return goodReply(p.contract, p.response.text); } } }).analyze(row(), cp);
        assert.doesNotMatch(JSON.stringify(seen), /"R1"/);
      }]
  ];
  for (const [name, from, to, check] of controls) {
    assert.ok(source.includes(from), 'negative control "' + name + '" no longer matches the engine source');
    const mutant = load(source.replace(from, to));
    let red = false;
    try { await check(mutant); } catch (_) { red = true; }
    assert.ok(red, 'negative control "' + name + '" stayed green: its assertion guards nothing');
  }

  console.log('PASS Class Pulse reader: ' + checked + ' checkpoint contracts verbatim, variable criteria counts, no identifiers sent, finished work only, fail-closed replies, ' + controls.length + ' negative controls red');
})().catch(e => { console.error(e); process.exitCode = 1; });
