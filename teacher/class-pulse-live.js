/* Class Pulse, live: the teacher's side of the district database.
 *
 * Signs the teacher in with the student backup's own sign-in code
 * (assets/js/behistorical-sync-transport.js, createAuth), then talks to Firestore's
 * REST API with the teacher's token, as the backup does, so firestore/firestore.rules
 * answers every request. Nothing here can widen what a teacher may read: the rules
 * allow a staff account to read, one document at a time, only the work of students
 * on the class list kept under that teacher's own id, and to keep ratings that only
 * that teacher can read (AndersonLogic-OS 04_PRODUCTS/BeHistorical/Decisions.md,
 * 2026-10-31).
 *
 *   roster()            the class list: { classLabel, students: [{ uid, label }] }
 *   answers(topic, ids) each student's Checkpoint 1 and 2 answer with its Submit
 *                       receipt, as rows the engine reads. Only an answer whose
 *                       receipt still matches it counts as submitted.
 *   ratings(topic)      the ratings this teacher has saved for the topic
 *   saveRatings(list)   saves ratings, ten to a request
 *
 * The section a student's device reports is never used: the class list decides. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseLive = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const SLOTS = { cp1: 'checkpoint-one-response', cp2: 'checkpoint-two-response' };
  const RECEIPT = '-submitted';
  const READER = 'claude-for-teachers-pasted';
  const CONCURRENT = 6;
  const PER_COMMIT = 10; // each saved rating costs the rules one class-list lookup; a request allows 20

  function fail(code, message) { const e = new Error(message || code); e.code = code; return e; }

  // '3.2' -> '3-2', the shape the backup stores.
  function topicKey(t) { return String(t).trim().toLowerCase().replace(/^topic\s+/, '').replace(/\./g, '-'); }

  // The receipt reads "Submitted Oct 31, 9:14 AM · fingerprint k2j3h4".
  function receiptPrint(text) { const m = /fingerprint ([0-9a-z]+)\s*$/.exec(String(text || '')); return m ? m[1] : ''; }

  function create(o) {
    // o.projectId, o.tenantId, o.getUser() -> { uid }, o.getToken() -> Promise<token>,
    // o.valueHash(text, confidence) (the backup engine's own), o.fetchImpl, o.apiBase
    const base = (o.apiBase || 'https://firestore.googleapis.com/v1').replace(/\/$/, '');
    const dbPath = 'projects/' + o.projectId + '/databases/(default)/documents';
    const tenant = dbPath + '/tenants/' + o.tenantId;
    const doFetch = o.fetchImpl || ((...a) => globalThis.fetch(...a));
    const me = () => { const u = o.getUser(); if (!u || !u.uid) throw fail('auth', 'not signed in'); return u.uid; };

    async function request(path, init) {
      let token;
      try { token = await o.getToken(); } catch (_) { throw fail('auth', 'Sign in again.'); }
      let res;
      try { res = await doFetch(base + '/' + path, Object.assign({}, init, { headers: Object.assign({ Authorization: 'Bearer ' + token }, init && init.body ? { 'Content-Type': 'application/json' } : {}) })); }
      catch (_) { throw fail('offline', 'Class Pulse could not reach the database. Check the connection and try again.'); }
      const text = await res.text();
      let json = null; try { json = text ? JSON.parse(text) : null; } catch (_) { json = null; }
      if (res.status === 404) return null;
      if (res.ok) return json;
      const err = (Array.isArray(json) ? json[0] : json) || {};
      const status = err.error && err.error.status;
      if (res.status === 401) throw fail('auth', 'Sign in again.');
      if (res.status === 403 || status === 'PERMISSION_DENIED') throw fail('denied', 'The database refused. Check you signed in with your school staff account and that your class list is set up.');
      if (res.status === 429 || status === 'RESOURCE_EXHAUSTED') throw fail('quota', 'The database is busy or out of today\'s free reads. Try again later.');
      throw fail('other', (err.error && err.error.message) || ('HTTP ' + res.status));
    }
    const get = path => request(path, { method: 'GET' });
    const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) });

    // A few at a time, so a class is quick without a burst of a hundred requests.
    async function pool(items, fn) {
      const out = new Array(items.length);
      let next = 0;
      async function worker() { while (next < items.length) { const i = next++; out[i] = await fn(items[i], i); } }
      await Promise.all(Array.from({ length: Math.min(CONCURRENT, items.length) }, worker));
      return out;
    }
    const str = f => (f && f.stringValue != null ? f.stringValue : '');
    const conf = f => (f && f.integerValue != null ? String(f.integerValue) : '');

    return {
      async roster() {
        const uid = me();
        const head = await get(tenant + '/rosters/' + uid);
        if (!head) throw fail('no-roster', 'No class list is set up for this account yet. Run the class-list setup first.');
        const students = [];
        let pageToken = '';
        do {
          const page = await get(tenant + '/rosters/' + uid + '/students?pageSize=300' + (pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : ''));
          ((page && page.documents) || []).forEach(d => students.push({ uid: d.name.slice(d.name.lastIndexOf('/') + 1), label: str(d.fields && d.fields.label) || 'Student' }));
          pageToken = (page && page.nextPageToken) || '';
        } while (pageToken);
        students.sort((a, b) => a.label.localeCompare(b.label));
        return { classLabel: str(head.fields && head.fields.classLabel) || 'My class', students };
      },

      // rows: { cp1: [...], cp2: [...] }, one per student per checkpoint, in roster order.
      async answers(topic, students) {
        const key = topicKey(topic), rows = { cp1: [], cp2: [] };
        const jobs = [];
        students.forEach((st, i) => Object.keys(SLOTS).forEach(cp => jobs.push({ st, i, cp })));
        const got = await pool(jobs, async j => {
          const id = tenant + '/responses/' + j.st.uid + '__' + key + '__' + SLOTS[j.cp];
          const [answer, receipt] = await Promise.all([get(id), get(id + RECEIPT)]);
          return { answer, receipt };
        });
        jobs.forEach((j, n) => {
          const a = got[n].answer, f = (a && a.fields) || {};
          const text = str(f.text).trim(), confidence = conf(f.confidence);
          const print = receiptPrint(got[n].receipt && str(got[n].receipt.fields && got[n].receipt.fields.text));
          const fingerprint = text ? o.valueHash(text, confidence) : '';
          const state = !text ? 'missing' : print && print === fingerprint ? 'verified-submission' : 'completion-unverified';
          rows[j.cp].push({
            key: j.st.uid + '|' + j.cp, student: j.i, uid: j.st.uid, text, confidence, fingerprint,
            completionState: state, changedSinceSubmit: !!(print && text && print !== fingerprint),
            updatedAt: (a && a.updateTime) || ''
          });
        });
        return rows;
      },

      // studentUid|cp -> { codes, criteria, fingerprint, reader, rubricVersion }
      async ratings(topic) {
        const uid = me(), key = topicKey(topic), out = new Map();
        const rows = await post(tenant + '/pulse/' + uid + ':runQuery', { structuredQuery: {
          from: [{ collectionId: 'ratings' }],
          where: { fieldFilter: { field: { fieldPath: 'topicKey' }, op: 'EQUAL', value: { stringValue: key } } }
        } });
        (rows || []).forEach(r => {
          const f = r && r.document && r.document.fields; if (!f) return;
          const cp = Object.keys(SLOTS).find(c => SLOTS[c] === str(f.slotId)); if (!cp) return;
          let reading = null; try { reading = JSON.parse(str(f.reading)); } catch (_) { reading = null; }
          if (!reading || !Array.isArray(reading.criteria)) return;
          out.set(str(f.studentId) + '|' + cp, { codes: str(f.codes), criteria: reading.criteria, fingerprint: str(f.answerFingerprint), reader: str(f.reader), rubricVersion: str(f.rubricVersion) });
        });
        return out;
      },

      // list: [{ studentUid, topic, cp, criteria (engine-validated), fingerprint, rubricVersion }]
      async saveRatings(list) {
        const uid = me();
        for (let i = 0; i < list.length; i += PER_COMMIT) {
          const writes = list.slice(i, i + PER_COMMIT).map(r => {
            const key = topicKey(r.topic), slot = SLOTS[r.cp];
            return {
              update: {
                name: tenant + '/pulse/' + uid + '/ratings/' + r.studentUid + '__' + key + '__' + slot,
                fields: {
                  studentId: { stringValue: r.studentUid }, topicKey: { stringValue: key }, slotId: { stringValue: slot },
                  codes: { stringValue: r.criteria.map(c => c.category).join('') },
                  reading: { stringValue: JSON.stringify({ criteria: r.criteria }) },
                  reader: { stringValue: READER }, rubricVersion: { stringValue: String(r.rubricVersion || '').slice(0, 96) },
                  answerFingerprint: { stringValue: r.fingerprint }, schemaVersion: { integerValue: '1' }
                }
              },
              // The server's clock: the rules require ratedAt == request.time.
              updateTransforms: [{ fieldPath: 'ratedAt', setToServerValue: 'REQUEST_TIME' }]
            };
          });
          await post(dbPath + ':commit', { writes });
        }
        return list.length;
      }
    };
  }

  return { SLOTS, READER, topicKey, receiptPrint, create };
});
