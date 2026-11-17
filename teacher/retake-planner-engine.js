/* Retake Planner engine. Shared by the teacher page and Node, with no network, no
 * storage and no provider of its own (Jeff, 2026-11-17).
 *
 * What it is for. A student who retakes a test, or writes test corrections, has
 * usually seen their test, so asking the same questions again measures whether they
 * remember the answer rather than whether they understand the idea. The Retake
 * Planner reads which questions each student missed, turns those into the learning
 * targets each student has not yet shown, and so lets a teacher write new questions
 * on those targets. It reads results; it does not grade, and nothing it shows feeds a
 * grade. Canvas holds every grade.
 *
 * Two files, both picked by the teacher on their own computer and read in the tab:
 *
 * 1. The Canvas export: New Quizzes, Reports, Student Analysis, Export CSV. Canvas
 *    does not publish the exact columns of that file and sources disagree on details
 *    (all attempts or the latest), so this reader does not depend on column names
 *    for the questions. It recognises the student columns by name, treats every other
 *    column as a possible question, and decides which question each one is by what
 *    students answered in it: every Unit 3 answer choice is unique across the quiz,
 *    so the choices students picked identify the question even if Canvas shuffled
 *    the order or the teacher's copy numbers them differently. Both shapes are read:
 *    one row per student (wide) and one row per student per question (long).
 *    readExport() reports the shape it found and match() reports every question it
 *    could not place, so an unfamiliar file says so on screen instead of quietly
 *    producing a wrong plan.
 *
 * 2. The question map, which holds the answer key and so never lives on this public
 *    site (scripts/test/no-answer-keys.test.js). It is built in the private
 *    AndersonLogic-OS repository, 04_PRODUCTS/BeHistorical/Assessments/Retake-Planner/,
 *    by build_retake_map.py from the assessment's own source file. Format
 *    "behistorical-retake-map/1", JSON:
 *
 *      { format, title, version, subtitle,
 *        targets:   { "3.1 LT1": "I can explain ...", ... },
 *        questions: [ { n, topic, lt, kc, skill, reasoning, source, stem,
 *                       options: [text, ...], answer: index (or "B"), points,
 *                       rationale } ] }
 *
 * Who is right when Canvas and the key disagree. Canvas's score is the grade, so a
 * question Canvas scored full marks is correct here even if the key says otherwise
 * (a regraded question, for instance). The count of such answers is reported.
 *
 *   parseCsv(text)                       -> rows (arrays of strings)
 *   parseMap(text)                       -> { map, problems, warnings }
 *   readExport(text)                     -> { layout, students, items, notes }
 *   match(map, exp)                      -> { pairs, unmatchedItems, unmatchedQuestions }
 *   analyze(map, exp, matched, options)  -> { students, targets, questions, notes, ... }
 *   planText(analysis, options)          -> plain text, one block per student
 *   planCsv(analysis, options)           -> CSV, one row per student per target */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHRetakePlanner = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VERSION = 'retake-planner/1.0.0';
  const MAP_FORMAT = 'behistorical-retake-map/1';
  const LETTERS = 'ABCDEFGH';

  /* ── text ─────────────────────────────────────────────────────────────── */

  const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"', ndash: '-', mdash: '-', hellip: '...' };
  function stripHtml(s) {
    return String(s == null ? '' : s)
      .replace(/<[^>]*>/g, ' ')
      .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
        if (e[0] === '#') {
          const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
          return Number.isFinite(code) ? String.fromCodePoint(code) : m;
        }
        const v = ENTITIES[e.toLowerCase()];
        return v == null ? m : v;
      });
  }
  // Compare text the way a person would: case, accents, quotes, dashes, spacing and
  // punctuation do not make two answers different.
  function norm(s) {
    return stripHtml(s)
      .normalize('NFKD').replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }
  function plain(s) { return stripHtml(s).replace(/\s+/g, ' ').trim(); }

  /* ── CSV ──────────────────────────────────────────────────────────────── */

  function parseCsv(text) {
    const s = String(text == null ? '' : text).replace(/^﻿/, '');
    // Excel saved as "CSV" in some locales uses semicolons; Canvas uses commas.
    const firstLine = s.slice(0, s.search(/\r?\n|$/));
    const delim = (firstLine.split(';').length > firstLine.split(',').length && firstLine.indexOf('\t') < 0) ? ';'
      : (firstLine.split('\t').length > firstLine.split(',').length ? '\t' : ',');
    const rows = [];
    let row = [];
    let cell = '';
    let quoted = false;
    for (let i = 0; i < s.length; i += 1) {
      const c = s[i];
      if (quoted) {
        if (c === '"') {
          if (s[i + 1] === '"') { cell += '"'; i += 1; } else quoted = false;
        } else cell += c;
      } else if (c === '"' && cell === '') quoted = true;
      else if (c === delim) { row.push(cell); cell = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && s[i + 1] === '\n') i += 1;
        row.push(cell); rows.push(row); row = []; cell = '';
      } else cell += c;
    }
    if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(r => r.some(v => String(v).trim() !== ''));
  }

  function csvCell(v) {
    const s = v == null ? '' : String(v);
    return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  /* ── the question map ─────────────────────────────────────────────────── */

  function parseMap(text) {
    const problems = [];
    const warnings = [];
    let data;
    try { data = typeof text === 'string' ? JSON.parse(String(text).replace(/^﻿/, '')) : text; }
    catch (e) { return { map: null, problems: ['This is not a question map: it could not be read as JSON. Pick the file that ends in Retake-Map.json.'], warnings }; }
    if (!data || typeof data !== 'object') return { map: null, problems: ['This is not a question map.'], warnings };
    if (data.format !== MAP_FORMAT) {
      return { map: null, problems: ['This is not a Retake Planner question map (its format line is "' + (data.format || 'missing') + '", expected "' + MAP_FORMAT + '").'], warnings };
    }
    const targets = data.targets && typeof data.targets === 'object' ? data.targets : {};
    const qs = Array.isArray(data.questions) ? data.questions : [];
    if (!qs.length) problems.push('The question map has no questions.');
    const seenN = new Set();
    const questions = [];
    qs.forEach((q, i) => {
      const label = 'Question ' + (q && q.n != null ? q.n : i + 1);
      if (!q || typeof q !== 'object') { problems.push(label + ' is empty.'); return; }
      const options = Array.isArray(q.options) ? q.options.map(String) : [];
      if (options.length < 2) { problems.push(label + ' has fewer than two answer choices.'); return; }
      let answer = q.answer;
      if (typeof answer === 'string' && /^[A-Ha-h]$/.test(answer.trim())) answer = LETTERS.indexOf(answer.trim().toUpperCase());
      if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) { problems.push(label + ' has no valid correct answer.'); return; }
      const n = q.n != null ? q.n : i + 1;
      if (seenN.has(String(n))) { problems.push(label + ' appears twice.'); return; }
      seenN.add(String(n));
      if (!q.lt) { problems.push(label + ' does not name a learning target.'); return; }
      if (!targets[q.lt]) warnings.push(label + ' names ' + q.lt + ', which has no wording in the map.');
      const normed = options.map(norm);
      if (new Set(normed).size !== normed.length) warnings.push(label + ' has two answer choices that read the same.');
      const points = Number(q.points);
      questions.push({
        n, topic: String(q.topic || ''), lt: String(q.lt), kc: String(q.kc || ''), skill: String(q.skill || ''),
        reasoning: String(q.reasoning || ''), source: String(q.source || ''), stem: String(q.stem || ''),
        options, answer, points: Number.isFinite(points) && points > 0 ? points : 1, rationale: String(q.rationale || ''),
        _opts: normed, _stem: norm(q.stem || '')
      });
    });
    // A choice that appears in two questions cannot tell them apart by itself.
    const owners = new Map();
    questions.forEach(q => q._opts.forEach(o => { if (!owners.has(o)) owners.set(o, new Set()); owners.get(o).add(q.n); }));
    const shared = [...owners.values()].filter(set => set.size > 1).length;
    if (shared) warnings.push(shared + ' answer choice(s) appear in more than one question; those questions are told apart by their wording instead.');
    if (problems.length) return { map: null, problems, warnings };
    return {
      map: {
        format: data.format, title: String(data.title || 'Untitled assessment'), version: String(data.version || ''),
        subtitle: String(data.subtitle || ''), targets, questions, _owners: owners
      },
      problems, warnings
    };
  }

  /* ── the Canvas export ────────────────────────────────────────────────── */

  // Student and bookkeeping columns, by their header with case and punctuation
  // ignored. Anything not listed here is a possible question.
  const ROLE = {
    name: ['name', 'student', 'student name', 'full name', 'user name', 'display name', 'sortable name'],
    id: ['id', 'student id', 'user id', 'canvas user id', 'canvas id', 'student canvas id', 'participant id'],
    sis: ['sis id', 'sis user id', 'student sis id', 'sis login id', 'login id'],
    section: ['section', 'section name', 'sections', 'student section'],
    attempt: ['attempt', 'attempt number', 'attempt no', 'attempt id'],
    meta: ['section id', 'section sis id', 'submitted', 'submitted at', 'submission date', 'n correct', 'n incorrect', 'score',
      'total score', 'attempt score', 'final score', 'quiz score', 'points', 'total points', 'kept score', 'percentage', 'percent',
      'time', 'time spent', 'duration', 'started', 'started at', 'finished', 'finished at', 'email', 'course', 'course id',
      'quiz id', 'quiz title', 'assignment id', 'user', 'graded', 'graded at']
  };
  // Long layout: one row per student per question.
  const LONG = {
    item: ['item id', 'question id', 'item', 'question', 'item name', 'question name', 'item title', 'question title', 'title',
      'question text', 'item text', 'stem', 'item position', 'question position', 'position', 'question number', 'item number'],
    text: ['question text', 'item text', 'question', 'item title', 'question title', 'title', 'stem', 'item name', 'question name', 'item'],
    pos: ['item position', 'question position', 'position', 'question number', 'item number'],
    response: ['response', 'answer', 'answers', 'student answer', 'student response', 'answer text', 'selected answer', 'selected answers', 'response text', 'student answer text'],
    score: ['score', 'points', 'points earned', 'points received', 'points awarded', 'item score', 'question score', 'earned'],
    possible: ['points possible', 'possible points', 'max score', 'max points', 'item points possible', 'question points possible', 'points available'],
    status: ['status', 'item status', 'question status', 'state']
  };
  // A per-question column's suffix in a wide layout ("... - Points", "(Status)").
  // A separator is required, so a question whose own wording ends in "answer" stays
  // a question.
  const SUFFIX = /^(.*?)\s*(?:[-–—:|]|[([])\s*(response|answer|student answer|points earned|points possible|points|score|status|correct)\s*[)\]]?\s*$/i;

  function findCol(heads, names) {
    for (const want of names) {
      const i = heads.indexOf(want);
      if (i >= 0) return i;
    }
    return -1;
  }
  function num(v) {
    const s = String(v == null ? '' : v).trim().replace(/,/g, '.');
    if (s === '' || !/^-?\d+(\.\d+)?$/.test(s)) return null;
    return Number(s);
  }
  function statusOf(v) {
    const s = norm(v);
    if (!s) return '';
    if (s === 'not attempted' || s === 'not supported' || s === 'n a' || s === 'na') return 'absent';
    if (s === 'no answer' || s === 'unanswered' || s === 'blank') return 'blank';
    if (s === 'not graded' || s === 'needs grading' || s === 'pending') return 'ungraded';
    return 'graded';
  }

  function readExport(text) {
    const rows = parseCsv(text);
    const notes = [];
    if (rows.length < 2) return { layout: 'empty', students: [], items: [], notes: ['The Canvas file has no student rows.'] };
    const header = rows[0].map(h => String(h));
    const heads = header.map(norm);
    const col = {
      name: findCol(heads, ROLE.name), id: findCol(heads, ROLE.id), sis: findCol(heads, ROLE.sis),
      section: findCol(heads, ROLE.section), attempt: findCol(heads, ROLE.attempt)
    };
    const respCol = findCol(heads, LONG.response);
    const itemCol = findCol(heads, LONG.item);
    const isLong = respCol >= 0 && itemCol >= 0 && itemCol !== respCol;
    const studentKeyOf = r => {
      const id = col.id >= 0 ? String(r[col.id] || '').trim() : '';
      const sis = col.sis >= 0 ? String(r[col.sis] || '').trim() : '';
      const name = col.name >= 0 ? String(r[col.name] || '').trim() : '';
      return id || sis || name;
    };
    if (col.name < 0 && col.id < 0 && col.sis < 0) {
      return { layout: 'unknown', students: [], items: [], notes: ['No student column was found. The first row should name a column "name", "student name" or "id".'] };
    }

    const students = new Map();
    const touch = r => {
      const key = studentKeyOf(r);
      if (!key) return null;
      if (!students.has(key)) {
        students.set(key, {
          key,
          name: col.name >= 0 ? plain(r[col.name]) : '',
          id: col.id >= 0 ? String(r[col.id] || '').trim() : '',
          section: col.section >= 0 ? plain(r[col.section]) : ''
        });
      }
      return key;
    };
    const attemptOf = r => (col.attempt >= 0 ? num(r[col.attempt]) : null);

    if (isLong) {
      const textCol = findCol(heads, LONG.text);
      const posCol = findCol(heads, LONG.pos);
      const scoreCol = findCol(heads, LONG.score);
      const possibleCol = findCol(heads, LONG.possible);
      const statusCol = findCol(heads, LONG.status);
      const items = new Map();
      // Latest attempt per student, decided before anything is recorded.
      const latest = new Map();
      rows.slice(1).forEach(r => {
        const k = studentKeyOf(r);
        if (!k) return;
        const a = attemptOf(r);
        if (a != null && (!latest.has(k) || a > latest.get(k))) latest.set(k, a);
      });
      let multi = 0;
      rows.slice(1).forEach(r => {
        const k = touch(r);
        if (!k) return;
        const a = attemptOf(r);
        if (latest.has(k) && a != null && a !== latest.get(k)) { multi += 1; return; }
        const itemKey = String(r[itemCol] || '').trim() || (posCol >= 0 ? String(r[posCol] || '').trim() : '');
        if (!itemKey) return;
        if (!items.has(itemKey)) {
          items.set(itemKey, {
            key: itemKey,
            label: plain(textCol >= 0 ? r[textCol] : r[itemCol]),
            position: posCol >= 0 ? num(r[posCol]) : null,
            responses: {}
          });
        }
        items.get(itemKey).responses[k] = {
          response: plain(r[respCol]),
          score: scoreCol >= 0 ? num(r[scoreCol]) : null,
          possible: possibleCol >= 0 ? num(r[possibleCol]) : null,
          status: statusCol >= 0 ? statusOf(r[statusCol]) : ''
        };
      });
      if (multi) notes.push('Some students have more than one attempt; the latest attempt is used.');
      return { layout: 'long', students: [...students.values()], items: [...items.values()], notes };
    }

    // Wide: one row per student, questions across the columns.
    const known = new Set(Object.values(col).filter(i => i >= 0));
    heads.forEach((h, i) => { if (ROLE.meta.includes(h)) known.add(i); });
    const groups = new Map();
    let lastGroup = null;
    heads.forEach((h, i) => {
      if (known.has(i)) { lastGroup = null; return; }
      const raw = header[i];
      // A bare number header ("2.0") is the score column for the question before it,
      // the way Canvas lays out a Student Analysis report.
      if (num(raw) != null || h === '') {
        if (lastGroup && lastGroup.score < 0) lastGroup.score = i;
        return;
      }
      const m = SUFFIX.exec(plain(raw));
      let key = plain(raw);
      let role = 'response';
      if (m && m[1] && norm(m[1])) {
        key = plain(m[1]);
        const word = norm(m[2]);
        role = word === 'status' ? 'status' : (word === 'points possible' ? 'possible' : (/points|score|correct/.test(word) ? 'score' : 'response'));
      }
      if (!groups.has(key)) groups.set(key, { key, label: key, response: -1, score: -1, possible: -1, status: -1, first: i });
      const g = groups.get(key);
      if (g[role] < 0) g[role] = i;
      lastGroup = g;
    });
    const items = [...groups.values()].filter(g => g.response >= 0).sort((a, b) => a.first - b.first).map((g, idx) => ({
      key: g.key, label: g.label.replace(/^\s*\d+\s*:\s*/, ''), position: idx + 1, responses: {}, _cols: g
    }));
    // One row per student: the highest attempt number, or the later row when the
    // file has no attempt column.
    const byStudent = new Map();
    rows.slice(1).forEach(r => {
      const k = studentKeyOf(r);
      if (!k) return;
      const a = attemptOf(r);
      const prev = byStudent.get(k);
      if (!prev) { byStudent.set(k, { r, a, multi: false }); return; }
      prev.multi = true;
      if (a == null || prev.a == null || a >= prev.a) { prev.r = r; prev.a = a; }
    });
    let multi = 0;
    byStudent.forEach(({ r, multi: m }) => {
      if (m) multi += 1;
      const k = touch(r);
      items.forEach(it => {
        const c = it._cols;
        it.responses[k] = {
          response: plain(r[c.response]),
          score: c.score >= 0 ? num(r[c.score]) : null,
          possible: c.possible >= 0 ? num(r[c.possible]) : (c.score >= 0 && num(header[c.score]) != null ? num(header[c.score]) : null),
          status: c.status >= 0 ? statusOf(r[c.status]) : ''
        };
      });
    });
    items.forEach(it => { delete it._cols; });
    if (multi) notes.push(multi + ' student(s) appear on more than one row; the latest attempt is used.');
    return { layout: 'wide', students: [...students.values()], items, notes };
  }

  /* ── matching Canvas's questions to the map ───────────────────────────── */

  function optionIndex(q, response) {
    const r = norm(response);
    if (!r) return -1;
    let i = q._opts.indexOf(r);
    if (i >= 0) return i;
    // A response Canvas cut short, or one carrying a leading "B." or a trailing note.
    if (r.length >= 20) {
      i = q._opts.findIndex(o => o.length >= 20 && (o.startsWith(r) || r.startsWith(o) || r.endsWith(' ' + o)));
    }
    return i;
  }

  function match(map, exp) {
    const candidates = [];
    const stemCount = new Map();
    map.questions.forEach(q => stemCount.set(q._stem, (stemCount.get(q._stem) || 0) + 1));
    exp.items.forEach((it, ii) => {
      const answers = Object.values(it.responses).map(r => r.response).filter(Boolean);
      const distinct = [...new Set(answers.map(norm))].filter(Boolean);
      const label = norm(it.label);
      map.questions.forEach((q, qi) => {
        let hits = 0;
        distinct.forEach(a => { if (optionIndex(q, a) >= 0) hits += 1; });
        const stemHit = q._stem.length >= 12 && label.length >= 12 && (label.includes(q._stem) || q._stem.includes(label));
        const uniqueStem = stemHit && stemCount.get(q._stem) === 1;
        if (!hits && !uniqueStem) return;
        const ratio = distinct.length ? hits / distinct.length : 0;
        // Every distinct answer students gave matches this question's choices: strong.
        // The wording matches: a tiebreaker, or the only evidence when nobody answered.
        const score = ratio * 10 + (stemHit ? 2 : 0) + (it.position === q.n ? 0.25 : 0);
        candidates.push({ ii, qi, score, hits, distinct: distinct.length, stemHit,
          how: hits ? (ratio === 1 ? 'every answer matches its choices' : hits + ' of ' + distinct.length + ' answers match its choices') : 'its wording matches' });
      });
    });
    candidates.sort((a, b) => b.score - a.score || a.qi - b.qi);
    const usedI = new Set();
    const usedQ = new Set();
    const pairs = [];
    candidates.forEach(c => {
      if (usedI.has(c.ii) || usedQ.has(c.qi)) return;
      // Fewer than half the answers matching is not enough to call it this question.
      if (c.hits && c.distinct && c.hits / c.distinct < 0.5 && !c.stemHit) return;
      usedI.add(c.ii); usedQ.add(c.qi);
      pairs.push({ item: exp.items[c.ii], q: map.questions[c.qi], how: c.how, partial: c.hits < c.distinct });
    });
    pairs.sort((a, b) => map.questions.indexOf(a.q) - map.questions.indexOf(b.q));
    // An item nobody answered with words (no responses at all) is usually a stimulus
    // or a text block, not a missed question; it is listed separately.
    const unmatchedItems = exp.items.filter((it, i) => !usedI.has(i)).map(it => ({
      label: it.label, answered: Object.values(it.responses).filter(r => r.response).length
    }));
    const unmatchedQuestions = map.questions.filter((q, i) => !usedQ.has(i));
    return { pairs, unmatchedItems, unmatchedQuestions };
  }

  /* ── the analysis ─────────────────────────────────────────────────────── */

  function judge(pair, r) {
    const q = pair.q;
    if (!r) return { status: 'absent', response: '', choice: -1 };
    if (r.status === 'absent') return { status: 'absent', response: r.response, choice: -1 };
    const choice = optionIndex(q, r.response);
    if (r.status === 'blank' || (!r.response && r.score == null)) return { status: 'blank', response: '', choice: -1 };
    if (r.status === 'ungraded' && r.score == null) return { status: 'absent', response: r.response, choice };
    const keyRight = choice === q.answer;
    let right = keyRight;
    let disagree = false;
    if (r.score != null) {
      const possible = r.possible != null && r.possible > 0 ? r.possible : null;
      right = possible != null ? r.score >= possible - 1e-9 : r.score > 0;
      if (choice >= 0 && right !== keyRight) disagree = true;
    } else if (choice < 0) {
      return { status: 'unknown', response: r.response, choice };
    }
    if (!r.response && !right) return { status: 'blank', response: '', choice: -1, disagree };
    return { status: right ? 'correct' : 'wrong', response: r.response, choice, disagree };
  }

  // options.rule: 'any' (a target needs a retake if any of its questions was missed,
  // the default) or 'most' (only if more than half were missed).
  function analyze(map, exp, matched, options) {
    const rule = options && options.rule === 'most' ? 'most' : 'any';
    const section = options && options.section ? options.section : '';
    const notes = [];
    let disagreements = 0;
    let unknown = 0;
    const roster = exp.students.filter(s => !section || s.section === section);
    const pairs = matched.pairs;
    const ltOrder = [];
    map.questions.forEach(q => { if (!ltOrder.includes(q.lt)) ltOrder.push(q.lt); });
    // "3.1 LT2" before "3.1 LT10" before "3.2 LT1": course order, not quiz order.
    ltOrder.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    const students = roster.map(s => {
      const results = pairs.map(p => {
        const j = judge(p, p.item.responses[s.key]);
        if (j.disagree) disagreements += 1;
        if (j.status === 'unknown') unknown += 1;
        return Object.assign({ q: p.q }, j);
      });
      const counted = results.filter(r => r.status !== 'absent' && r.status !== 'unknown');
      const earned = counted.filter(r => r.status === 'correct').reduce((t, r) => t + r.q.points, 0);
      const possible = counted.reduce((t, r) => t + r.q.points, 0);
      const byLt = new Map();
      counted.forEach(r => {
        if (!byLt.has(r.q.lt)) byLt.set(r.q.lt, { lt: r.q.lt, of: 0, missed: 0, questions: [] });
        const e = byLt.get(r.q.lt);
        e.of += 1;
        if (r.status !== 'correct') { e.missed += 1; e.questions.push(r.q.n); }
      });
      const targetsMissed = ltOrder.map(lt => byLt.get(lt)).filter(e => e && e.missed > 0 && (rule === 'any' || e.missed * 2 > e.of));
      return { key: s.key, name: s.name, id: s.id, section: s.section, results, earned, possible, took: counted.length > 0, targetsMissed };
    });
    const took = students.filter(s => s.took);
    // "Student 3" means the same student on every panel and in every copy.
    took.forEach((s, i) => { s.n = i + 1; });

    const questions = pairs.map((p, pi) => {
      const rs = took.map(s => s.results[pi]).filter(r => r.status !== 'absent' && r.status !== 'unknown');
      const correct = rs.filter(r => r.status === 'correct').length;
      const wrongCounts = new Map();
      rs.forEach(r => {
        if (r.status === 'wrong' && r.choice >= 0) wrongCounts.set(r.choice, (wrongCounts.get(r.choice) || 0) + 1);
      });
      let topWrong = null;
      wrongCounts.forEach((count, choice) => { if (!topWrong || count > topWrong.count) topWrong = { choice, text: p.q.options[choice], count }; });
      return { q: p.q, answered: rs.length, correct, blank: rs.filter(r => r.status === 'blank').length,
        pct: rs.length ? correct / rs.length : null, topWrong };
    });

    const targets = ltOrder.map(lt => {
      const qs = questions.filter(x => x.q.lt === lt);
      const answered = qs.reduce((t, x) => t + x.answered, 0);
      const correct = qs.reduce((t, x) => t + x.correct, 0);
      const need = took.filter(s => s.targetsMissed.some(e => e.lt === lt));
      return { lt, text: map.targets[lt] || '', questions: qs.map(x => x.q.n), pct: answered ? correct / answered : null,
        need: need.map(s => s.key), needCount: need.length };
    });

    // Students who need exactly the same targets can take the same retake.
    const groupMap = new Map();
    took.forEach(s => {
      const key = s.targetsMissed.map(e => e.lt).join(' + ');
      if (!groupMap.has(key)) groupMap.set(key, { lts: s.targetsMissed.map(e => e.lt), students: [] });
      groupMap.get(key).students.push(s.key);
    });
    const groups = [...groupMap.values()].filter(g => g.lts.length).sort((a, b) => b.students.length - a.students.length || a.lts.length - b.lts.length);

    if (disagreements) notes.push(disagreements + ' answer(s) were scored differently by Canvas than by the key. Canvas holds the grade, so Canvas\'s score was used. A regraded question is the usual reason.');
    if (unknown) notes.push(unknown + ' answer(s) could not be read as one of the choices and had no Canvas score, so they are left out of every count.');
    const absent = students.length - took.length;
    if (absent) notes.push(absent + ' student(s) have no answers to any matched question and are left out.');

    return {
      version: VERSION, rule, section, title: map.title, students, took: took.length, questions, targets, groups, notes,
      possible: pairs.reduce((t, p) => t + p.q.points, 0)
    };
  }

  /* ── output a teacher can keep ───────────────────────────────────────── */

  function display(s, anon) { return anon ? 'Student ' + s.n : (s.name || s.id || s.key); }

  function planText(a, options) {
    const anon = !!(options && options.anon);
    const lines = [a.title + ': retake plan', 'A target is listed when the student ' + (a.rule === 'most' ? 'missed most of its questions.' : 'missed any of its questions.'), ''];
    a.students.filter(s => s.took).forEach(s => {
      lines.push(display(s, anon) + (s.section && !anon ? ' (' + s.section + ')' : '') + ': ' + s.earned + ' of ' + s.possible + ' points');
      if (!s.targetsMissed.length) lines.push('  Nothing to retake.');
      s.targetsMissed.forEach(e => {
        const t = a.targets.find(x => x.lt === e.lt);
        lines.push('  ' + e.lt + ' (missed ' + e.missed + ' of ' + e.of + '; question' + (e.questions.length > 1 ? 's ' : ' ') + e.questions.join(', ') + ')' + (t && t.text ? ': ' + t.text : ''));
      });
      lines.push('');
    });
    return lines.join('\n').replace(/\n+$/, '\n');
  }

  function planCsv(a, options) {
    const anon = !!(options && options.anon);
    const head = ['student', 'section', 'points', 'points possible', 'learning target', 'missed', 'of', 'questions missed', 'target wording'];
    const out = [head.map(csvCell).join(',')];
    a.students.filter(s => s.took).forEach(s => {
      const base = [display(s, anon), anon ? '' : s.section, s.earned, s.possible];
      if (!s.targetsMissed.length) out.push(base.concat(['(none)', 0, '', '', '']).map(csvCell).join(','));
      s.targetsMissed.forEach(e => {
        const t = a.targets.find(x => x.lt === e.lt);
        out.push(base.concat([e.lt, e.missed, e.of, e.questions.join(' '), t ? t.text : '']).map(csvCell).join(','));
      });
    });
    return out.join('\r\n') + '\r\n';
  }

  return { VERSION, MAP_FORMAT, parseCsv, csvCell, norm, plain, display, parseMap, readExport, match, analyze, planText, planCsv };
});
