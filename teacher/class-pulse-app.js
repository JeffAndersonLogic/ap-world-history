/* Class Pulse teacher page. Stage A: invented data only, and the page's CSP
 * (connect-src 'none') makes that a property rather than a promise.
 *
 * The topic's prompts and criteria come from assets/data/skills-map.js through
 * BHClassPulseEngine.contractFor, so the grid has as many columns as the topic has
 * criteria. The invented answers come from data/class-pulse-demo.js and are read
 * through the real engine with a replay provider, so every level on screen has
 * passed the same validation a model's reply would face. Teacher corrections are
 * kept for this page load only.
 *
 * Levels: D Demonstrating, P Partly there, N Not yet, U Can't tell. Colors are
 * Cardinal red, Ridge gold and Teaching navy (Jeff, 2026-10-23). */
(function () {
  'use strict';
  const E = window.BHClassPulseEngine;
  const Demo = window.BHClassPulseDemo;
  const Calib = window.BHClassPulseCalibration;
  const MAP = window.BEHISTORICAL_SKILLS_MAP;
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const BANDS = { D: 'Demonstrating', P: 'Partly there', N: 'Not yet', U: "Can't tell" };
  const LETTER = { D: 'D', P: 'P', N: 'N', U: '?' };
  const CONF = { 1: 'Lost', 2: 'Shaky', 3: 'Getting there', 4: 'Solid', 5: 'Could teach it' };
  const CPS = ['cp1', 'cp2'];
  const CP_NAME = { cp1: 'Checkpoint 1', cp2: 'Checkpoint 2' };
  const END = 52;
  const READING_FOR = 1.6; // minutes a submission shows as "reading" before its levels appear
  // Demo only: the live version will read the class schedule. Topics after this one
  // show as not yet taught on the course map.
  const DEMO_TAUGHT_THROUGH = '5.6';
  const ELIGIBILITY = {
    'completion-unverified': 'This answer was saved but never submitted as finished, so it was not read.',
    'missing-writing': 'Submitted with no writing.',
    'invalid-response': 'This answer could not be read.'
  };

  const TOPICS = E.topicsFor(MAP);
  const S = {
    tab: 'live', topic: TOPICS.includes('3.2') ? '3.2' : TOPICS[0], section: 'S2',
    minute: 31, playing: false, timer: null, names: 'names', sort: 'roster', cmetric: 'ev', stu: 0,
    overrides: new Map(), loadToken: 0
  };
  let D = null; // { contracts, kind, students, rows, results, cols }

  // ── Loading a topic and class ─────────────────────────────────────────────
  async function load() {
    const token = ++S.loadToken;
    const contracts = { cp1: E.contractFor(MAP, S.topic, 'cp1'), cp2: E.contractFor(MAP, S.topic, 'cp2') };
    const demo = Demo.build(S.topic, contracts, S.section, Calib);
    const engine = E.createEngine({ provider: demo.provider });
    const results = { cp1: new Map(), cp2: new Map() };
    for (const cp of CPS) {
      const rows = demo.rows[cp].filter(r => r.completionState !== 'missing');
      const out = await engine.analyzeMany(rows, contracts[cp]);
      out.forEach((r, i) => results[cp].set(rows[i].student, { result: r, row: rows[i] }));
    }
    if (token !== S.loadToken) return; // a newer choice arrived while this one loaded
    const cols = [];
    CPS.forEach(cp => contracts[cp].criteria.forEach((c, i) => cols.push({ id: cp + '-' + i, cp, ci: i, criterionId: c.id, text: c.text, group: CP_NAME[cp], short: 'C' + (i + 1) })));
    D = { contracts, kind: demo.kind, students: demo.students, rows: demo.rows, results, cols };
    S.overrides = new Map();
    renderAll();
  }

  function title(topicKey) { const t = MAP.topics[topicKey]; return t ? topicKey + ' ' + t.title : topicKey; }
  function shown(st) { return S.names === 'anon' ? 'Student ' + String(st.i + 1).padStart(2, '0') : st.name; }

  // ── Cell state ────────────────────────────────────────────────────────────
  function entry(st, cp) { return D.results[cp].get(st.i) || null; }
  function status(st, cp, minute) {
    const at = st.submittedAt[cp];
    if (at == null) return minute >= END ? 'none' : 'empty';
    if (minute < at) return 'empty';
    if (minute < at + READING_FOR) return 'busy';
    return entry(st, cp) ? 'done' : 'none';
  }
  function overrideFor(e, col) {
    const o = S.overrides.get(e.result.key + '|' + col.criterionId);
    return o && o.revision === e.result.revision ? o : null;
  }
  function band(st, col) {
    const e = entry(st, col.cp);
    if (!e) return null;
    const o = overrideFor(e, col);
    return o ? o.category : e.result.criteria[col.ci].category;
  }
  function endBand(st, col) { return st.submittedAt[col.cp] == null || !entry(st, col.cp) ? 'none' : band(st, col); }

  // ── During class ──────────────────────────────────────────────────────────
  function legend() {
    return '<span class="m-rn" style="display:contents">' + ['D', 'P', 'N'].map(k => `<span><i class="sw cell b-${k}">${k}</i>${BANDS[k]}</span>`).join('') + '</span>' +
      '<span><i class="sw cell b-U">?</i>Can\'t tell, check it</span><span><i class="sw cell b-busy">&middot;</i>Reading it now</span>' +
      '<span><i class="sw cell b-empty"></i>Not submitted yet</span>' +
      '<span><i class="sw" style="position:relative;background:var(--inset)"><i style="position:absolute;top:3px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent)"></i></i>You changed it</span>';
  }
  function needScore(st) {
    let n = 0;
    D.cols.forEach(c => { if (status(st, c.cp, S.minute) === 'done') { const b = band(st, c); n += b === 'N' ? 2 : b === 'P' || b === 'U' ? 1 : 0; } });
    return n;
  }
  function renderLive() {
    $('#live-sub').textContent = 'Topic ' + title(S.topic) + ' · ' + S.section + ' · fills in as checkpoints are submitted';
    $('#legend-live').innerHTML = legend();
    const rows = D.students.slice();
    if (S.sort === 'need') rows.sort((a, b) => needScore(b) - needScore(a) || a.i - b.i);
    const n = D.students.length;
    let h = '<thead><tr><th class="name"></th>';
    CPS.forEach((cp, k) => { if (k) h += '<th class="gap"></th>'; h += `<th class="grp" colspan="${D.contracts[cp].criteria.length}">${CP_NAME[cp]}</th>`; });
    h += '<th class="gap"></th><th class="grp" colspan="2">Confidence</th></tr><tr><th class="name" style="text-align:left;font-size:11px">Student</th>';
    let last = null;
    D.cols.forEach(c => {
      if (last && c.cp !== last) h += '<th class="gap"></th>';
      last = c.cp;
      const cnt = { D: 0, P: 0, N: 0, U: 0 }; let done = 0;
      D.students.forEach(st => { if (status(st, c.cp, S.minute) === 'done') { cnt[band(st, c)]++; done++; } });
      const seg = done ? ['D', 'P', 'N', 'U'].map(k => cnt[k] ? `<i class="b-${k}" style="flex:${cnt[k]}"></i>` : '').join('') : '';
      h += `<th class="colh" title="${esc(c.text)}">${c.short}<div class="minibar m-rn">${seg}</div><span class="minibar-n">${done}/${n}</span></th>`;
    });
    h += '<th class="gap"></th><th class="colh" title="Confidence on Checkpoint 1, from 1 Lost to 5 Could teach it">CP1</th><th class="colh" title="Confidence on Checkpoint 2">CP2</th></tr></thead><tbody>';
    rows.forEach(st => {
      h += `<tr><td class="name">${esc(shown(st))}${st.absent ? '<small>Absent</small>' : ''}</td>`;
      last = null;
      D.cols.forEach(c => {
        if (last && c.cp !== last) h += '<td class="gap"></td>';
        last = c.cp;
        const s = status(st, c.cp, S.minute);
        if (s === 'empty') h += '<td><span class="cell b-empty"></span></td>';
        else if (s === 'none') h += '<td><span class="cell b-none" title="Not submitted">&ndash;</span></td>';
        else if (s === 'busy') h += '<td><span class="cell b-busy" title="Reading it now">&middot;</span></td>';
        else {
          const b = band(st, c), e = entry(st, c.cp), o = overrideFor(e, c);
          h += `<td><button type="button" class="cell b-${b}${o && !o.agreed ? ' over' : ''}" data-s="${st.i}" data-c="${c.id}" aria-label="${esc(shown(st))}, ${c.group} ${c.short}: ${BANDS[b]}">${LETTER[b]}</button></td>`;
        }
      });
      h += '<td class="gap"></td>' + CPS.map(cp => `<td class="conf">${status(st, cp, S.minute) === 'done' ? (st.confidence[cp] || '&ndash;') : ''}</td>`).join('') + '</tr>';
    });
    $('#heat').innerHTML = h + '</tbody>';
    $('#clockfill').style.width = (Math.min(S.minute, END) / END * 100) + '%';
    $('#clocktxt').textContent = S.minute >= END ? 'Bell rang' : 'Minute ' + Math.floor(S.minute) + ' of ' + END;
    $('#play').textContent = S.playing ? 'Pause' : S.minute >= END ? 'Replay the class period' : 'Play the class period';
    renderWatch(); renderWeak(); renderHero();
  }
  function newestCp(st) {
    let best = null, t = -1;
    CPS.forEach(cp => { const at = st.submittedAt[cp]; if (at != null && status(st, cp, S.minute) === 'done' && at > t) { t = at; best = cp; } });
    return best;
  }
  function needsYou(st) {
    const cp = newestCp(st);
    if (!cp) return null;
    const cols = D.cols.filter(c => c.cp === cp);
    const n = cols.filter(c => band(st, c) === 'N').length;
    return n >= 2 ? { cp, n, of: cols.length, col: cols.find(c => band(st, c) === 'N') } : null;
  }
  function renderWatch() {
    const items = D.students.map(st => ({ st, need: needsYou(st) })).filter(x => x.need);
    $('#watch').innerHTML = items.length ? items.map(x => `<li><b>${esc(shown(x.st))}</b><span>${CP_NAME[x.need.cp]}: not yet on ${x.need.n} of ${x.need.of}. <button class="btn" type="button" style="padding:2px 8px;font-size:11px;margin-left:4px" data-s="${x.st.i}" data-c="${x.need.col.id}">Read it</button></span></li>`).join('')
      : '<li class="empty-note">Nobody yet. Checkpoint 1 submissions start around minute 17. Press Play.</li>';
  }
  function renderWeak() {
    let best = null;
    D.cols.forEach(c => {
      let n = 0, bad = 0;
      D.students.forEach(st => { if (status(st, c.cp, S.minute) === 'done') { n++; if (band(st, c) === 'N') bad++; } });
      if (n >= 6 && (!best || bad / n > best.r)) best = { c, n, bad, r: bad / n };
    });
    $('#weak').innerHTML = !best || !best.bad ? 'Not enough work in yet to call one. A weak spot shows once six students have submitted.'
      : `<b>${best.c.group}, ${best.c.short}</b>: ${best.bad} of ${best.n} submissions are not there yet.<br><span class="small">${esc(best.c.text)}</span>`;
  }
  function renderHero() {
    let inN = 0;
    D.students.forEach(st => CPS.forEach(cp => { if (status(st, cp, S.minute) === 'done') inN++; }));
    $('#h-n').textContent = D.students.length;
    $('#h-n-label').textContent = 'Students in ' + S.section;
    $('#h-in').textContent = inN;
    $('#h-need').textContent = D.students.filter(needsYou).length;
    $('#h-topic').textContent = title(S.topic);
    $('#h-min').textContent = S.minute >= END ? 'Bell rang' : 'Minute ' + Math.floor(S.minute) + ' of ' + END;
    $('#h-kind').textContent = D.kind === 'written' ? 'Invented answers with invented writing.'
      : D.kind === 'calibration' ? 'The forty invented calibration answers, dealt round the class.'
      : 'Invented levels only. This topic has no invented writing yet.';
  }
  function tick() { S.minute += .75; if (S.minute >= END) { S.minute = END; stop(); } renderLive(); }
  function play() { if (S.minute >= END) S.minute = 0; S.playing = true; S.timer = setInterval(tick, 400); renderLive(); }
  function stop() { S.playing = false; clearInterval(S.timer); S.timer = null; }

  // ── The drawer ────────────────────────────────────────────────────────────
  let lastFocus = null;
  function markQuote(text, quotes) {
    let out = esc(text);
    (quotes || []).forEach(q => { if (q && text.includes(q)) out = out.replace(esc(q), '<mark>' + esc(q) + '</mark>'); });
    return out;
  }
  function openCell(si, colId) {
    const st = D.students[si], col = D.cols.find(c => c.id === colId), e = entry(st, col.cp);
    if (!e) return;
    const crit = e.result.criteria[col.ci], prop = crit.category, cur = band(st, col), o = overrideFor(e, col);
    lastFocus = document.activeElement;
    $('#dtitle').textContent = shown(st);
    $('#dsub').textContent = 'Topic ' + S.topic + ' · ' + col.group + ', criterion ' + (col.ci + 1);
    const cols = D.cols.filter(c => c.cp === col.cp);
    let h = `<div class="prompt">${esc(D.contracts[col.cp].prompt)}</div>`;
    h += '<div class="crit-tabs m-rn">' + cols.map(c => { const b = band(st, c); return `<button type="button" aria-pressed="${c.id === colId}" data-s="${si}" data-c="${c.id}"><span class="cell b-${b}">${LETTER[b]}</span>Criterion ${c.ci + 1}</button>`; }).join('') + '</div>';
    h += `<div class="small"><b>Criterion ${col.ci + 1}:</b> ${esc(col.text)}</div>`;
    if (e.row.placeholder) h += '<p class="callout">This topic has no invented writing yet, so there is no answer to show. The level is invented.</p>';
    else if (e.row.text) h += `<div class="response">${markQuote(e.row.text, crit.evidence)}</div>`;
    if (e.result.status === 'ineligible') h += `<p class="callout">${esc(ELIGIBILITY[e.result.eligibilityReason] || 'Not read.')}</p>`;
    h += `<div class="verdict"><div class="row m-rn"><span class="cell b-${prop}">${LETTER[prop]}</span><b>The tool proposes: ${BANDS[prop]}</b></div><p class="small">${esc(crit.reason)}</p>`;
    if (crit.evidence.length && !e.row.placeholder && ['D', 'P'].includes(prop)) h += '<p class="small">The highlighted words are the evidence it used. It cannot propose Demonstrating or Partly there without quoting the student.</p>';
    crit.misconceptions.forEach(m => { h += `<div class="row"><span class="chip">Wrong idea: ${esc(m)}</span></div>`; });
    h += '</div>';
    if (e.result.status === 'analyzed') {
      h += `<div class="check"><b style="font-size:13px">Your call (optional)</b><div class="row">
        <button class="btn" type="button" data-agree="${si}|${colId}" aria-pressed="${!!(o && o.agreed)}">${o && o.agreed ? 'You agreed' : 'Agree'}</button>
        ${['D', 'P', 'N'].filter(k => k !== prop).map(k => `<button class="btn" type="button" data-set="${si}|${colId}|${k}" aria-pressed="${!!(o && !o.agreed && cur === k)}">Change to ${BANDS[k]}</button>`).join('')}
      </div><p class="small">Each check feeds the agreement score on After class. Nothing here is a grade, and you never have to check every one. Kept for this visit only.</p></div>`;
    }
    const c = st.confidence[col.cp];
    h += `<p class="small">Confidence the student reported: <b>${c ? c + ' of 5, ' + CONF[c] : 'not given'}</b>.</p>`;
    $('#dbody').innerHTML = h;
    showDrawer();
  }
  function showDrawer() { $('#scrim').hidden = false; $('#drawer').hidden = false; $('#dclose').focus(); }
  function closeDrawer() { $('#scrim').hidden = true; $('#drawer').hidden = true; if (lastFocus && lastFocus.isConnected) lastFocus.focus(); }
  function record(si, colId, category, agreed) {
    const st = D.students[si], col = D.cols.find(c => c.id === colId), e = entry(st, col.cp);
    const o = E.correction(e.result, col.criterionId, category, agreed ? 'Teacher agreed with the proposal.' : 'Teacher changed the level.');
    S.overrides.set(e.result.key + '|' + col.criterionId, Object.assign(o, { agreed }));
    renderAll();
    openCell(si, colId);
    $('#announce').textContent = agreed ? 'Recorded: you agreed' : 'Changed to ' + BANDS[category];
  }

  // ── After class ───────────────────────────────────────────────────────────
  function renderPulse() {
    const n = D.students.length;
    const sub = CPS.map(cp => D.students.filter(st => st.submittedAt[cp] != null).length);
    $('#pulse-title').textContent = 'Topic ' + title(S.topic) + ', ' + S.section;
    $('#pulse-n').textContent = `All ${n} students counted. ${sub[0]} submitted Checkpoint 1, ${sub[1]} submitted Checkpoint 2. Anyone missing shows as their own segment.`;
    let checks = 0, agree = 0;
    S.overrides.forEach(o => { checks++; if (o.agreed) agree++; });
    $('#calib').innerHTML = checks ? `<b>${Math.round(agree / checks * 100)}%</b><span>You checked ${checks} of the tool's calls and agreed with ${agree}. The bar before trusting it is 80% on 100 or more.</span>`
      : '<b>&ndash;</b><span>Agreement with you shows here once you check a few calls. Open any cell and press Agree or Change.</span>';
    let h = '';
    CPS.forEach(cp => {
      const slot = D.contracts[cp];
      h += `<div class="target"><span class="eyebrow">${CP_NAME[cp]}</span>`;
      slot.learningTargets.forEach(t => { h += `<p class="target-q">${esc(t)}</p>`; });
      if (slot.coverageNote) h += `<p class="small">${esc(slot.coverageNote)}</p>`;
      D.cols.filter(c => c.cp === cp).forEach(c => {
        const cnt = { D: 0, P: 0, N: 0, U: 0, none: 0 };
        D.students.forEach(st => { cnt[endBand(st, c)]++; });
        h += `<div class="critrow"><div class="lbl">Criterion ${c.ci + 1}<small>${esc(c.text)}</small></div>
          <div class="stack m-rn">${['N', 'P', 'D', 'U', 'none'].map(k => cnt[k] ? `<i class="${k === 'none' ? 'b-empty' : 'b-' + k}" style="flex:${cnt[k]}" data-seg="${c.id}|${k}" title="${k === 'none' ? 'Not submitted' : BANDS[k]}: ${cnt[k]}">${cnt[k]}</i>` : '').join('')}</div>
          <div class="counts">${cnt.D} D · ${cnt.P} P · ${cnt.N} N${cnt.U ? ' · ' + cnt.U + ' ?' : ''}${cnt.none ? ' · ' + cnt.none + ' missing' : ''}</div></div>`;
      });
      h += '</div>';
    });
    $('#targets').innerHTML = h;

    const mis = new Map();
    CPS.forEach(cp => D.results[cp].forEach((e, si) => e.result.criteria.forEach((c, ci) => c.misconceptions.forEach(m => {
      const x = mis.get(m) || { n: 0, si, colId: cp + '-' + ci };
      x.n++; mis.set(m, x);
    }))));
    $('#mis').innerHTML = mis.size ? [...mis.entries()].sort((a, b) => b[1].n - a[1].n).map(([m, x]) => `<button type="button" data-s="${x.si}" data-c="${x.colId}"><span>${esc(m)}<br><span class="small">Opens the first example.</span></span><b>${x.n}</b></button>`).join('')
      : '<p class="small">No wrong ideas found.</p>';

    let weakest = null;
    D.cols.forEach(c => { let n2 = 0, bad = 0; D.students.forEach(st => { const b = endBand(st, c); if (b !== 'none' && b !== 'U') { n2++; if (b !== 'D') bad++; } }); if (n2 && (!weakest || bad / n2 > weakest.r)) weakest = { c, r: bad / n2 }; });
    if (weakest) {
      const g = { N: [], P: [], D: [], other: [] };
      D.students.forEach(st => { const b = endBand(st, weakest.c); (g[b] || g.other).push(st); });
      const list = (label, xs, move) => `<div class="group"><h3>${label} · ${xs.length}</h3><ul>${xs.map(st => `<li>${esc(shown(st))}</li>`).join('') || '<li>None</li>'}</ul><p class="small">${move}</p></div>`;
      $('#groups').innerHTML = `<p class="small" style="grid-column:1/-1">Weakest: <b>${weakest.c.group}, criterion ${weakest.c.ci + 1}</b>, ${esc(weakest.c.text)}</p>` +
        list('Reteach with you', g.N, 'Model one strong answer aloud, then have them rewrite that part of their own.') +
        list('Revise in pairs', g.P, 'Trade answers, find what the criterion still needs, add it.') +
        list('Stretch', g.D, 'Add another example or write the strongest counterargument.') +
        (g.other.length ? `<p class="small" style="grid-column:1/-1">Not placed (not submitted, or the tool could not tell): ${g.other.map(st => esc(shown(st))).join(', ')}</p>` : '');
    }
    renderScatter();
  }
  function renderScatter() {
    const W = 300, H = 220, pl = 34, pr = 10, pt = 10, pb = 34;
    const pts = [];
    let blank = 0;
    D.students.forEach(st => {
      if (st.submittedAt.cp1 == null) return;
      const conf = Number(st.confidence.cp1);
      if (!conf) { blank++; return; }
      let d = 0, n = 0;
      D.cols.forEach(c => { const b = endBand(st, c); if (b !== 'none') { n++; if (b === 'D') d++; } });
      pts.push({ st, x: conf, y: n ? d / n : 0 });
    });
    const jit = Demo.mulberry32(77);
    const X = v => pl + (v - .5) / 5 * (W - pl - pr), Y = v => pt + (1 - v) * (H - pt - pb);
    let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Confidence on Checkpoint 1 against share of criteria demonstrated">`;
    s += `<rect x="${pl}" y="${pt}" width="${W - pl - pr}" height="${H - pt - pb}" fill="var(--inset)" rx="4"/>`;
    s += `<line x1="${X(3)}" x2="${X(3)}" y1="${pt}" y2="${H - pb}" stroke="var(--line)"/><line x1="${pl}" x2="${W - pr}" y1="${Y(.5)}" y2="${Y(.5)}" stroke="var(--line)"/>`;
    [1, 2, 3, 4, 5].forEach(v => { s += `<text x="${X(v)}" y="${H - pb + 14}" font-size="10" text-anchor="middle">${v}</text>`; });
    s += `<text x="${(pl + W - pr) / 2}" y="${H - 4}" font-size="10" text-anchor="middle">Confidence on Checkpoint 1</text>`;
    [0, .5, 1].forEach(v => { s += `<text x="${pl - 6}" y="${Y(v) + 3}" font-size="10" text-anchor="end">${v * 100}%</text>`; });
    s += `<text x="${X(5.4)}" y="${Y(.06)}" font-size="9" text-anchor="end">Sure, not there yet</text><text x="${X(.6)}" y="${Y(.92)}" font-size="9">Better than they think</text>`;
    pts.forEach(p => {
      const cx = X(p.x + (jit() - .5) * .5), cy = Y(Math.min(1, Math.max(0, p.y + (jit() - .5) * .04)));
      const odd = (p.x >= 4 && p.y < .5) || (p.x <= 2 && p.y >= .5);
      s += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="5" fill="${odd ? 'var(--accent)' : 'var(--muted)'}" stroke="var(--surface)" stroke-width="2"><title>${esc(shown(p.st))}: said ${p.x} of 5, showed ${Math.round(p.y * 100)}%</title></circle>`;
    });
    $('#scatterbox').innerHTML = s + '</svg>';
    $('#scatter-note').textContent = 'Each dot is a student. Top left: sure of themselves, not there yet. Bottom right: better than they think.' + (blank ? ` ${blank} left confidence blank and are not plotted.` : '');
  }
  function showSegment(key) {
    const [colId, b] = key.split('|');
    const col = D.cols.find(c => c.id === colId);
    const who = D.students.filter(st => endBand(st, col) === b);
    lastFocus = document.activeElement;
    $('#dtitle').textContent = (b === 'none' ? 'Not submitted' : BANDS[b]) + ' · ' + who.length;
    $('#dsub').textContent = col.group + ', criterion ' + (col.ci + 1);
    $('#dbody').innerHTML = `<div class="small">${esc(col.text)}</div><ul class="watch">${who.map(st => `<li><b>${esc(shown(st))}</b>${b === 'none' ? '<span>Not submitted</span>' : `<span>${esc(entry(st, col.cp).result.criteria[col.ci].reason)} <button class="btn" type="button" style="padding:2px 8px;font-size:11px" data-s="${st.i}" data-c="${col.id}">Read it</button></span>`}</li>`).join('')}</ul>`;
    showDrawer();
  }

  // ── Across the course (invented numbers except the selected cell) ──────────
  function bucket(v) { return v < 20 ? 1 : v < 40 ? 2 : v < 60 ? 3 : v < 80 ? 4 : 5; }
  function computedShare(which) {
    let k = 0, n = 0;
    D.students.forEach(st => D.cols.forEach(c => { const b = endBand(st, c); if (b !== 'none') { n++; if (b === which) k++; } }));
    return n ? Math.round(k / n * 100) : 0;
  }
  function renderCourse() {
    const m = S.cmetric;
    $('#coursegrid').className = 'course m-' + m;
    $('#legend-course').innerHTML = `<span class="m-${m}" style="display:inline-flex;gap:8px;align-items:center">0% <span class="ramp">${[1, 2, 3, 4, 5].map(i => `<i style="background:var(--k${i})"></i>`).join('')}</span> 100% ${m === 'ev' ? 'of criteria demonstrated' : 'of criteria not yet shown'}</span><span>Dashed: not taught yet</span>`;
    const secs = Demo.SECTIONS.map(s => s.id);
    const lastTaught = TOPICS.indexOf(DEMO_TAUGHT_THROUGH);
    let h = `<thead><tr><th style="text-align:left;position:sticky;left:0;background:var(--surface)">Topic</th>${secs.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>`;
    let unit = null;
    TOPICS.forEach((key, ti) => {
      const t = MAP.topics[key];
      if (t.unit !== unit) { unit = t.unit; h += `<tr class="unit"><td colspan="${secs.length + 1}">Unit ${unit}</td></tr>`; }
      h += `<tr${key === S.topic ? ' class="hot"' : ''}><td class="t"><b>${key}</b> <span>${esc(t.title)}</span></td>`;
      secs.forEach(sec => {
        if (lastTaught >= 0 && ti > lastTaught) { h += '<td><span class="pc future" title="Not taught yet">&middot;</span></td>'; return; }
        let v;
        if (key === S.topic && sec === S.section) v = computedShare(m === 'ev' ? 'D' : 'N');
        else {
          const r = Demo.mulberry32(Demo.seedOf(key + '|' + sec))();
          const d = Math.round(Math.max(8, Math.min(92, 30 + t.unit * 3 + (r - .5) * 40)));
          v = m === 'ev' ? d : Math.round(Math.max(4, (100 - d) * .55));
        }
        const go = key === S.topic && sec === S.section;
        h += `<td><${go ? 'button type="button" data-goto="pulse"' : 'span'} class="pc s${bucket(v)}" title="${esc(key + ', ' + sec + ': ' + v + '%' + (go ? ', computed' : ', invented'))}">${v}</${go ? 'button' : 'span'}></td>`;
      });
      h += '</tr>';
    });
    $('#coursegrid').innerHTML = h + '</tbody>';
  }

  // ── One student ───────────────────────────────────────────────────────────
  function summary(xs) { return !xs.length ? 'none' : E.summary(xs.map(c => ({ category: c }))); }
  function renderStudent() {
    const pick = $('#stpick');
    pick.innerHTML = D.students.map(st => `<option value="${st.i}"${st.i === S.stu ? ' selected' : ''}>${esc(shown(st))}</option>`).join('');
    const st = D.students[S.stu] || D.students[0];
    const lastTaught = TOPICS.indexOf(DEMO_TAUGHT_THROUGH);
    let h = `<div style="display:grid;gap:4px"><h2>${esc(shown(st))}</h2><p class="small">${S.section} · invented except Topic ${S.topic}</p></div><div class="strip">`;
    let unit = null, open = false;
    TOPICS.forEach((key, ti) => {
      const t = MAP.topics[key];
      if (t.unit !== unit) { if (open) h += '</div></div>'; unit = t.unit; h += `<div class="u"><span>Unit ${unit}</span><div class="ts">`; open = true; }
      const cell = (cp, w) => {
        if (lastTaught >= 0 && ti > lastTaught) return '<span class="cell b-empty"></span>';
        let x;
        if (key === S.topic) x = st.submittedAt[cp] == null ? 'none' : summary(D.cols.filter(c => c.cp === cp).map(c => band(st, c)));
        else { const r = Demo.mulberry32(Demo.seedOf(st.name + key + cp))(); const v = st.strength + (r - .5) * .5; x = r < .04 ? 'none' : v > .62 ? 'D' : v > .36 ? 'P' : 'N'; }
        return x === 'none' ? `<span class="cell b-none" title="${key} ${w}: not submitted">&ndash;</span>` : `<span class="cell b-${x}" title="${esc(key + ' ' + w + ': ' + BANDS[x])}">${LETTER[x]}</span>`;
      };
      h += `<div class="tcell"><div class="pair">${cell('cp1', 'Checkpoint 1')}${cell('cp2', 'Checkpoint 2')}</div><small>${key}</small></div>`;
    });
    if (open) h += '</div></div>';
    h += '</div>';
    $('#stleft').innerHTML = h;
    const e = entry(st, 'cp1');
    let r = `<h3>Topic ${esc(S.topic)}, Checkpoint 1</h3>`;
    if (!e) r += '<p class="small">Not submitted.</p>';
    else if (e.row.placeholder) r += '<p class="small">This topic has no invented writing yet.</p>';
    else r += `<div class="response">${esc(e.row.text)}</div><button class="btn" type="button" style="justify-self:start" data-s="${st.i}" data-c="cp1-0">Open with evidence</button>`;
    r += `<h3>Confidence on this topic</h3><p class="small">Checkpoint 1: <b>${st.confidence.cp1 ? st.confidence.cp1 + ' of 5, ' + CONF[st.confidence.cp1] : 'not given'}</b>. Checkpoint 2: <b>${st.confidence.cp2 ? st.confidence.cp2 + ' of 5, ' + CONF[st.confidence.cp2] : 'not given'}</b>.</p>`;
    $('#stright').innerHTML = r;
  }

  // ── Wiring ────────────────────────────────────────────────────────────────
  function renderAll() {
    renderLive();
    if (S.tab === 'pulse') renderPulse();
    if (S.tab === 'course') renderCourse();
    if (S.tab === 'student') renderStudent();
  }
  function setTab(t) {
    if (!['live', 'pulse', 'course', 'student'].includes(t)) t = 'live';
    S.tab = t;
    ['live', 'pulse', 'course', 'student'].forEach(x => { $('#view-' + x).hidden = x !== t; $('#tab-' + x).setAttribute('aria-selected', x === t); });
    if (D) renderAll();
    try { history.replaceState(null, '', '#' + t); } catch (_) { /* file:// or a sandbox */ }
  }
  function seg(id, key, after) {
    $(id).addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$(id + ' button').forEach(x => x.setAttribute('aria-pressed', x === b));
      S[key] = b.dataset.v; after();
    });
  }

  $('#topic').innerHTML = TOPICS.map(k => `<option value="${k}"${k === S.topic ? ' selected' : ''}>${esc(title(k))}</option>`).join('');
  $('#section').innerHTML = Demo.SECTIONS.map(s => `<option value="${s.id}"${s.id === S.section ? ' selected' : ''}>${s.id}, ${s.cohort} (${s.size} students)</option>`).join('');
  $('#topic').addEventListener('change', e => { S.topic = e.target.value; S.stu = 0; load(); });
  $('#section').addEventListener('change', e => { S.section = e.target.value; S.stu = 0; load(); });
  $('#stpick').addEventListener('change', e => { S.stu = Number(e.target.value); renderStudent(); });
  seg('#names', 'names', renderAll);
  seg('#sort', 'sort', renderLive);
  seg('#cmetric', 'cmetric', renderCourse);
  $('#play').addEventListener('click', () => { if (S.playing) { stop(); renderLive(); } else play(); });
  $('#toend').addEventListener('click', () => { stop(); S.minute = END; renderLive(); });
  $('#reset').addEventListener('click', () => { stop(); S.minute = 0; renderLive(); });
  $('nav.tabs').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) setTab(b.dataset.tab); });
  $('#dclose').addEventListener('click', closeDrawer);
  $('#scrim').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if ($('#drawer').hidden) return;
    if (e.key === 'Escape') closeDrawer();
    if (e.key === 'Tab') {
      const f = $$('#drawer button'); if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { f[f.length - 1].focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { f[0].focus(); e.preventDefault(); }
    }
  });
  document.addEventListener('click', e => {
    const cell = e.target.closest('[data-s][data-c]'); if (cell) { openCell(Number(cell.dataset.s), cell.dataset.c); return; }
    const ag = e.target.closest('[data-agree]'); if (ag) { const [s, c] = ag.dataset.agree.split('|'); const col = D.cols.find(x => x.id === c); record(Number(s), c, entry(D.students[Number(s)], col.cp).result.criteria[col.ci].category, true); return; }
    const st = e.target.closest('[data-set]'); if (st) { const [s, c, b] = st.dataset.set.split('|'); record(Number(s), c, b, false); return; }
    const sg = e.target.closest('[data-seg]'); if (sg) { showSegment(sg.dataset.seg); return; }
    const go = e.target.closest('[data-goto]'); if (go) { setTab(go.dataset.goto); }
  });

  setTab((location.hash || '').slice(1) || 'live');
  load();
})();
