/* Retake Planner, the page. Everything it reads stays in this tab: the files are read
 * with FileReader, held in memory, and dropped on Start over or when the tab closes.
 * Nothing is written to localStorage, sent, or logged. The engine
 * (retake-planner-engine.js) does the reading and counting; this file draws it.
 *
 * Every string from a file (a student's name, an answer, a question) is escaped
 * before it reaches the page. */
(function () {
  'use strict';
  const E = window.BHRetakePlanner;
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = x => (x == null ? 'n/a' : Math.round(x * 100) + '%');

  const state = { exportText: null, exportName: '', mapText: null, mapName: '', rule: 'any', anon: false, section: '', tab: 'targets', demo: false };
  let model = null; // { map, exp, matched, analysis }

  /* ── demo: invented questions, invented students ──────────────────────── */
  // Placeholder questions only. Nothing here comes from a real test.
  function demoFiles() {
    const targets = {
      'D.1 LT1': 'I can explain the first demo idea.',
      'D.1 LT2': 'I can describe the second demo idea.',
      'D.2 LT1': 'I can compare two demo cases.',
      'D.2 LT2': 'I can explain what caused the demo change.'
    };
    const lts = Object.keys(targets);
    const questions = [];
    for (let n = 1; n <= 8; n += 1) {
      const lt = lts[Math.floor((n - 1) / 2)];
      questions.push({
        n, topic: lt.slice(0, 3), lt, stem: 'Demo question ' + n + ', invented for this page (' + lt + ')',
        options: ['A', 'B', 'C', 'D'].map(l => 'Demo question ' + n + ', invented choice ' + l),
        answer: (n * 3) % 4, points: 2, rationale: 'Invented. Real maps carry the reason each wrong choice is wrong.'
      });
    }
    const map = { format: E.MAP_FORMAT, title: 'Demo test (invented)', version: 'demo', targets, questions };
    const names = ['Avery Demo', 'Blake Demo', 'Casey Demo', 'Devon Demo', 'Emery Demo', 'Finley Demo', 'Harper Demo', 'Jordan Demo', 'Kai Demo', 'Logan Demo', 'Morgan Demo', 'Quinn Demo'];
    // Canvas order is shuffled on purpose: the page must not depend on it.
    const order = [3, 0, 6, 1, 7, 4, 2, 5];
    const head = ['name', 'id', 'section', 'attempt'];
    order.forEach(i => { head.push((7000 + i) + ': ' + questions[i].stem); head.push('2.0'); });
    head.push('n correct', 'n incorrect', 'score');
    const rows = [head];
    names.forEach((name, s) => {
      const r = [name, String(100 + s), s % 2 ? 'Silver' : 'Green', '1'];
      order.forEach(i => {
        const q = questions[i];
        const miss = s !== 2 && s !== 8 && ((s * 5 + i * 3) % 7 === 0 || (s % 4 === 1 && i >= 6) || (s === 7 && i < 3));
        const blank = s === 10 && i === 4;
        const choice = miss ? (q.answer + 1 + (s % 3)) % 4 : q.answer;
        r.push(blank ? '' : q.options[choice]);
        r.push(miss || blank ? '0.0' : '2.0');
      });
      r.push('', '', '');
      rows.push(r);
    });
    return { map: JSON.stringify(map), csv: rows.map(r => r.map(E.csvCell).join(',')).join('\n') };
  }

  /* ── loading ──────────────────────────────────────────────────────────── */
  function looksLikeMap(text) {
    const t = String(text).replace(/^﻿/, '').trimStart();
    return t[0] === '{';
  }
  function readFile(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(String(fr.result));
      fr.onerror = () => reject(fr.error || new Error('could not read'));
      fr.readAsText(file);
    });
  }
  async function takeFiles(list) {
    const files = [...list];
    for (const f of files) {
      let text;
      try { text = await readFile(f); } catch (e) { showStatus([{ kind: 'warn', html: esc(f.name) + ' could not be read.' }]); continue; }
      if (/\.json$/i.test(f.name) || looksLikeMap(text)) { state.mapText = text; state.mapName = f.name; }
      else { state.exportText = text; state.exportName = f.name; }
    }
    state.demo = false;
    rebuild();
  }

  function fileState() {
    const ex = $('f-export'); const mp = $('f-map');
    ex.classList.toggle('ready', !!state.exportText);
    mp.classList.toggle('ready', !!state.mapText);
    $('f-export-state').textContent = state.exportText ? 'Loaded: ' + state.exportName : 'Not loaded. A .csv file from the quiz\'s Student Analysis report.';
    $('f-map-state').textContent = state.mapText ? 'Loaded: ' + state.mapName : 'Not loaded. A file ending in Retake-Map.json, from your department\'s shared folder.';
    $('clear').hidden = !(state.exportText || state.mapText);
  }

  function showStatus(items) {
    $('status').innerHTML = items.map(i => '<div class="notice ' + i.kind + '">' + i.html + '</div>').join('');
  }

  function rebuild() {
    fileState();
    model = null;
    const notices = [];
    let map = null;
    if (state.mapText) {
      const pm = E.parseMap(state.mapText);
      if (!pm.map) notices.push({ kind: 'warn', html: '<b>The question map could not be used.</b><ul>' + pm.problems.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' });
      else {
        map = pm.map;
        if (pm.warnings.length) notices.push({ kind: 'warn', html: '<b>About the question map:</b><ul>' + pm.warnings.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' });
      }
    }
    let exp = null;
    if (state.exportText) {
      exp = E.readExport(state.exportText);
      if (!exp.items.length || !exp.students.length) {
        notices.push({ kind: 'warn', html: '<b>The Canvas file could not be read as quiz results.</b><ul>' + (exp.notes.length ? exp.notes : ['No question columns were found.']).map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>Use the Student Analysis report from the quiz\'s Reports page.' });
        exp = null;
      }
    }
    if (!map || !exp) {
      if (!notices.length && (state.mapText || state.exportText)) notices.push({ kind: 'ok', html: 'One file loaded. Add the ' + (state.mapText ? 'Canvas results' : 'question map') + ' to see the plan.' });
      showStatus(notices);
      $('results').hidden = true;
      stats(null);
      return;
    }
    const matched = E.match(map, exp);
    const total = map.questions.length;
    const placed = matched.pairs.length;
    const head = state.demo ? '<b>Demo.</b> Every student and question here is invented. ' : '';
    if (!placed) {
      notices.push({ kind: 'warn', html: head + '<b>None of the Canvas questions matched this map.</b> Check that the map is for the same test (' + esc(map.title) + ') as the Canvas file.' });
      showStatus(notices);
      $('results').hidden = true;
      stats(null);
      return;
    }
    const sum = head + 'Matched <b>' + placed + ' of ' + total + '</b> questions in ' + esc(map.title) + (map.version && map.version !== 'demo' ? ' (Version ' + esc(map.version) + ')' : '') + ' to the Canvas file (' + (exp.layout === 'long' ? 'one row per answer' : 'one row per student') + ').';
    const problems = [];
    if (matched.unmatchedQuestions.length) problems.push('Not found in the Canvas file, so left out of every count: question' + (matched.unmatchedQuestions.length > 1 ? 's ' : ' ') + matched.unmatchedQuestions.map(q => q.n).join(', ') + '.');
    const stray = matched.unmatchedItems.filter(i => i.answered > 0);
    if (stray.length) problems.push(stray.length + ' Canvas column(s) with answers in them did not match any question in the map, for example "' + esc(stray[0].label.slice(0, 80)) + '".');
    matched.pairs.filter(p => p.partial).forEach(p => problems.push('Question ' + p.q.n + ' was matched, but some answers in that column are not among its choices (' + esc(p.how) + ').'));
    notices.push({ kind: problems.length ? 'warn' : 'ok', html: sum + (problems.length ? '<ul>' + problems.map(p => '<li>' + p + '</li>').join('') + '</ul>' : '') });
    exp.notes.forEach(n => notices.push({ kind: 'ok', html: esc(n) }));
    model = { map, exp, matched };
    // Classes, for a department file holding several sections.
    const sections = [...new Set(exp.students.map(s => s.section).filter(Boolean))].sort();
    $('section-wrap').hidden = sections.length < 2;
    if (!sections.includes(state.section)) state.section = '';
    $('section').innerHTML = '<option value="">All classes</option>' + sections.map(s => '<option' + (s === state.section ? ' selected' : '') + ' value="' + esc(s) + '">' + esc(s) + '</option>').join('');
    model.baseNotices = notices;
    draw();
  }

  /* ── drawing ──────────────────────────────────────────────────────────── */
  function stats(a) {
    $('s-students').textContent = a ? a.took : '0';
    const avg = a && a.took ? a.students.filter(s => s.took).reduce((t, s) => t + (s.possible ? s.earned / s.possible : 0), 0) / a.took : null;
    $('s-average').textContent = avg == null ? '0' : pct(avg);
    $('s-retake').textContent = a ? a.students.filter(s => s.took && s.targetsMissed.length).length : '0';
  }

  function who(s) { return E.display(s, state.anon); }
  function hidden() { return '<span class="hidden-note">hidden on the projector</span>'; }

  function draw() {
    if (!model) return;
    const a = E.analyze(model.map, model.exp, model.matched, { rule: state.rule, section: state.section });
    model.analysis = a;
    showStatus(model.baseNotices.concat(a.notes.map(n => ({ kind: 'warn', html: esc(n) }))));
    stats(a);
    $('results').hidden = false;
    $('anon-note').hidden = !state.anon;
    const byKey = new Map(a.students.map(s => [s.key, s]));
    const took = a.students.filter(s => s.took);

    // By learning target: the retake-writing view. One card per target, weakest first.
    const ts = a.targets.slice().sort((x, y) => (y.needCount - x.needCount) || ((x.pct == null ? 2 : x.pct) - (y.pct == null ? 2 : y.pct)));
    $('view-targets').innerHTML = '<p class="muted small intro">Each target lists the students who need new questions on it. Write retake questions for the targets at the top first.</p><div class="targets">' + ts.map(t => {
      const names = t.need.map(k => byKey.get(k)).filter(Boolean);
      return '<article class="target"><div class="target-head"><span class="lt">' + esc(t.lt) + '</span><span class="muted small">Question' + (t.questions.length > 1 ? 's ' : ' ') + esc(t.questions.join(', ')) + '</span></div>'
        + (t.text ? '<p class="wording">' + esc(t.text) + '</p>' : '')
        + '<div class="bar"><span class="track"><span class="fill" data-w="' + (t.pct == null ? 0 : Math.round(t.pct * 100)) + '"></span></span><b>' + pct(t.pct) + ' correct</b></div>'
        + '<div><span class="ctl-label">' + names.length + ' to retake</span></div>'
        + (names.length ? '<div class="chips">' + names.map(s => '<span class="chip need">' + esc(who(s)) + '</span>').join('') + '</div>' : '<p class="empty">Nobody needs a retake on this target.</p>')
        + '</article>';
    }).join('') + '</div>';

    // Widths through the style object: the page's lock refuses inline style attributes.
    $('view-targets').querySelectorAll('[data-w]').forEach(el => { el.style.width = el.dataset.w + '%'; });

    // By student.
    $('view-students').innerHTML = took.length ? '<div class="scroller"><table><thead><tr><th scope="col">Student</th>' + (state.anon ? '' : '<th scope="col">Class</th>') + '<th scope="col">Score</th><th scope="col">Targets to retake</th><th scope="col">Missed questions</th></tr></thead><tbody>'
      + took.map(s => {
        const missed = s.results.filter(r => r.status === 'wrong' || r.status === 'blank');
        const detail = missed.length ? '<details><summary>' + missed.length + ' missed</summary><ul class="misslist">' + missed.map(r => '<li><span class="mark ' + r.status + '">Q' + esc(r.q.n) + '</span> ' + esc(r.q.lt) + ': '
          + (r.status === 'blank' ? 'left blank' : (state.anon ? hidden() : '<span class="answer">chose “' + esc(r.response) + '”</span>')) + '</li>').join('') + '</ul></details>' : '<span class="empty">none</span>';
        return '<tr><td>' + esc(who(s)) + '</td>' + (state.anon ? '' : '<td>' + esc(s.section) + '</td>') + '<td class="num">' + s.earned + ' / ' + s.possible + '</td><td>'
          + (s.targetsMissed.length ? '<div class="chips">' + s.targetsMissed.map(e => '<span class="chip lt" title="missed ' + e.missed + ' of ' + e.of + '">' + esc(e.lt) + ' · ' + e.missed + '/' + e.of + '</span>').join('') + '</div>' : '<span class="empty">nothing to retake</span>')
          + '</td><td>' + detail + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="empty">No student in this class has answers in the file.</p>';

    // By question.
    $('view-questions').innerHTML = '<p class="muted small intro">Numbered as in the question map (the teacher key\'s order), not Canvas\'s order. The most-chosen wrong answer usually names the misunderstanding to reteach.</p><div class="scroller"><table><thead><tr><th scope="col">Q</th><th scope="col">Target</th><th scope="col">Correct</th><th scope="col">Most-chosen wrong answer</th><th scope="col">Why the wrong answers are wrong</th></tr></thead><tbody>'
      + a.questions.map(x => '<tr><td class="num">' + esc(x.q.n) + '</td><td>' + esc(x.q.lt) + '</td><td class="num">' + pct(x.pct) + ' <span class="muted small">(' + x.correct + ' of ' + x.answered + ')</span></td><td>'
        + (x.topWrong ? (state.anon ? hidden() : '<span class="answer">' + esc(x.topWrong.text) + '</span>') + ' <span class="muted small">(' + x.topWrong.count + ')</span>' : '<span class="empty">none</span>')
        + '</td><td>' + (x.q.rationale ? (state.anon ? hidden() : '<details><summary>Show</summary><p class="answer reveal">' + esc(x.q.rationale) + '</p></details>') : '<span class="empty">not in the map</span>') + '</td></tr>').join('')
      + '</tbody></table></div>';

    // Same retake: students whose list of targets is identical.
    const shared = a.groups.filter(g => g.students.length > 1);
    $('view-groups').innerHTML = '<p class="muted small intro">Students who need exactly the same targets can take the same retake.</p>'
      + (shared.length ? '<div class="targets">' + shared.map(g => '<article class="target"><div class="target-head"><span class="lt">' + g.students.length + ' students</span></div><div class="chips">' + g.lts.map(lt => '<span class="chip lt">' + esc(lt) + '</span>').join('') + '</div><div class="chips">' + g.students.map(k => '<span class="chip need">' + esc(who(byKey.get(k))) + '</span>').join('') + '</div></article>').join('') + '</div>'
        : '<p class="empty">No two students need exactly the same set of targets. Use By learning target to write one set of questions per target and give each student the sets they need.</p>');
  }

  /* ── controls ─────────────────────────────────────────────────────────── */
  function seg(id, key, after) {
    $(id).addEventListener('click', e => {
      const b = e.target.closest('button[data-v]');
      if (!b) return;
      $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      after(b.dataset.v);
      draw();
    });
  }
  seg('rule', 'rule', v => { state.rule = v; });
  seg('names', 'anon', v => { state.anon = v === 'anon'; });
  $('section').addEventListener('change', e => { state.section = e.target.value; draw(); });

  const TABS = ['targets', 'students', 'questions', 'groups'];
  function selectTab(name, focus) {
    state.tab = name;
    TABS.forEach(t => {
      const on = t === name;
      $('tab-' + t).setAttribute('aria-selected', String(on));
      $('tab-' + t).tabIndex = on ? 0 : -1;
      $('view-' + t).hidden = !on;
    });
    if (focus) $('tab-' + name).focus();
  }
  TABS.forEach((t, i) => {
    $('tab-' + t).addEventListener('click', () => selectTab(t));
    $('tab-' + t).addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        selectTab(TABS[(i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length], true);
      }
    });
  });

  $('filepick').addEventListener('change', e => { takeFiles(e.target.files); e.target.value = ''; });
  const drop = $('drop');
  ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', e => { if (e.dataTransfer && e.dataTransfer.files.length) takeFiles(e.dataTransfer.files); });
  // A file dropped anywhere else would make the browser navigate away from the page.
  ['dragover', 'drop'].forEach(ev => window.addEventListener(ev, e => e.preventDefault()));

  $('demo').addEventListener('click', () => {
    const d = demoFiles();
    state.mapText = d.map; state.mapName = 'Demo-Retake-Map.json (invented)';
    state.exportText = d.csv; state.exportName = 'Demo Student Analysis Report.csv (invented)';
    state.demo = true;
    rebuild();
  });
  $('clear').addEventListener('click', () => {
    Object.assign(state, { exportText: null, exportName: '', mapText: null, mapName: '', section: '', demo: false });
    model = null;
    $('status').innerHTML = '';
    $('results').hidden = true;
    fileState();
    stats(null);
  });

  function flash(btn, text) {
    const was = btn.textContent;
    btn.textContent = text;
    setTimeout(() => { btn.textContent = was; }, 1800);
  }
  $('copy').addEventListener('click', async () => {
    if (!model || !model.analysis) return;
    const text = E.planText(model.analysis, { anon: state.anon });
    try { await navigator.clipboard.writeText(text); flash($('copy'), 'Copied'); }
    catch (e) {
      // No clipboard permission (an older browser, or a file:// page): show the text to copy by hand.
      showStatus(model.baseNotices.concat([{ kind: 'ok', html: '<b>Copy this by hand:</b><pre class="copytext">' + esc(text) + '</pre>' }]));
    }
  });
  $('download').addEventListener('click', () => {
    if (!model || !model.analysis) return;
    const blob = new Blob(['﻿' + E.planCsv(model.analysis, { anon: state.anon })], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = (model.map.title || 'Retake').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-Retake-Plan.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  fileState();
})();
