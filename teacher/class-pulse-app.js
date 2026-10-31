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
 * The Reader menu picks which AI's levels are shown (data/class-pulse-readers.js).
 * Where a reader has recorded readings for the topic, they are replayed through the
 * engine in place of the invented levels, and the drawer shows every reader's level
 * for the open criterion side by side. In the real tool the menu lists only readers
 * the district has approved, and changing it reads the work again.
 *
 * Read by copy and paste (class-pulse-handoff.js): on After class the teacher copies
 * each checkpoint's answers in batches, pastes them into Claude for Teachers, and
 * pastes the reply back. The replies become one more reader, "Claude for Teachers,
 * pasted", run through the engine like any other, and are kept for this page load
 * only. Before a batch can be copied, each answer is checked for anything that could
 * identify the student (a name, a family detail, a teacher, the school), and the
 * teacher removes it from the copy or keeps it. Real writing is never offered for
 * copying until the district approves.
 *
 * My class (live, class-pulse-live.js): the teacher signs in with a school staff
 * account and the page reads, from the district database, the Checkpoint 1 and 2
 * answers of students on that teacher's class list, counting only answers whose
 * Submit receipt still matches. Ratings pasted back are saved to the teacher's own
 * area of the database and read back on every load, so they are there tomorrow.
 * A submitted answer with no saved rating shows as "not read yet", never as a
 * level. Copying real writing out stays locked until the district approves
 * (APPROVAL in class-pulse-handoff.js). Across the course and One student are
 * demo-only and are switched off in My class.
 *
 * Levels: D Demonstrating, P Partly there, N Not yet, U Can't tell. Colors are
 * Cardinal red, Ridge gold and Teaching navy (Jeff, 2026-10-23). */
(function () {
  'use strict';
  const E = window.BHClassPulseEngine;
  const Demo = window.BHClassPulseDemo;
  const Calib = window.BHClassPulseCalibration;
  const Rubrics = window.BHClassPulseRubrics;
  const Readers = window.BHClassPulseReaders;
  const H = window.BHClassPulseHandoff;
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
    overrides: new Map(), loadToken: 0, reader: 'invented',
    pasted: new Map(), // topic|section -> Map(batch id -> { checkpoint, read, at })
    checks: new Map(), // batch id -> the teacher's decisions in the check before copying
    source: 'demo',    // 'demo' (invented students) or 'live' (my class, from the database)
    service: (() => { try { const v = localStorage.getItem('class-pulse-service'); return H && H.SERVICES.some(x => x.id === v) ? v : 'claude-for-teachers'; } catch (_) { return 'claude-for-teachers'; } })(),
    live: null         // { auth, api, roster } once My class is chosen
  };
  let D = null; // { contracts, kind, students, rows, results, cols }

  // ── Readers ───────────────────────────────────────────────────────────────
  function recordedFor(readerId, topicKey) {
    const all = (Readers && Readers.RECORDED[readerId]) || {};
    return Object.keys(all).filter(id => Readers.topicOf(id) === topicKey);
  }
  const pastedHere = () => S.pasted.get(S.topic + '|' + S.section) || new Map();
  function readerAvailable(readerId, topicKey) {
    if (H && readerId === H.READER.id) return topicKey === S.topic && pastedHere().size > 0;
    return readerId === 'invented' || recordedFor(readerId, topicKey).length > 0;
  }
  function readerLabel(readerId) {
    if (H && readerId === H.READER.id) {
      const used = [...new Set([...pastedHere().values()].map(x => H.serviceLabel(x.service)))];
      return H.READER.label + (used.length ? ' (' + used.join(', ') + ')' : '');
    }
    const r = Readers && Readers.READERS.find(x => x.id === readerId); return r ? r.label : readerId;
  }
  function renderReaderPick() {
    if (!Readers) { $('#reader').closest('div').hidden = true; return; }
    const list = Readers.READERS.concat(H ? [H.READER] : []);
    $('#reader').innerHTML = list.map(r => {
      const ok = readerAvailable(r.id, S.topic);
      const why = H && r.id === H.READER.id ? ' (paste a reply on After class first)' : ' (not run on this topic yet)';
      return `<option value="${r.id}"${r.id === S.reader ? ' selected' : ''}${ok ? '' : ' disabled'}>${esc(r.label)}${ok ? '' : why}</option>`;
    }).join('');
  }
  // Replays one reader's recorded replies. The engine only ever hands a provider the
  // response text, so the replies are found by checkpoint and text, as a model would
  // see them.
  function recordedProvider(readerId, demo) {
    const replies = new Map(), rec = Readers.RECORDED[readerId];
    CPS.forEach(cp => demo.rows[cp].forEach(r => { if (r.caseId && rec[r.caseId]) replies.set(cp + '|' + r.text, rec[r.caseId]); }));
    return {
      id: 'recorded-' + readerId, version: 'calibration-page', kind: 'replay',
      async interpret({ contract, response }) {
        const reply = replies.get(contract.checkpoint + '|' + response.text);
        if (!reply) throw new Error('This reader has no recorded reading of this answer');
        return { criteria: JSON.parse(JSON.stringify(reply.criteria)) };
      }
    };
  }

  // checkpoint|answer text -> the service its pasted reply came from.
  function pastedServices() {
    const out = new Map();
    pastedHere().forEach(x => x.read.results.forEach(r => { if (r.entry) out.set(x.checkpoint + '|' + r.text, H.serviceLabel(x.service)); }));
    return out;
  }

  // ── Loading a topic and class ─────────────────────────────────────────────
  async function load() {
    const token = ++S.loadToken;
    const contracts = { cp1: E.contractFor(MAP, S.topic, 'cp1', Rubrics), cp2: E.contractFor(MAP, S.topic, 'cp2', Rubrics) };
    let src, provider;
    if (S.source === 'live') {
      try { src = await liveBuild(); }
      catch (e) { if (token === S.loadToken) liveSay(e.message); return; }
      provider = src.provider;
    } else {
      src = Demo.build(S.topic, contracts, S.section, Calib);
      if (!readerAvailable(S.reader, S.topic)) S.reader = 'invented';
      renderReaderPick();
      provider = S.reader === 'invented' ? src.provider
        : H && S.reader === H.READER.id ? H.provider([...pastedHere().values()]) : recordedProvider(S.reader, src);
    }
    const engine = E.createEngine({ provider });
    const results = { cp1: new Map(), cp2: new Map() }, unread = new Set();
    // Which AI proposed each reading shown, when it came from a pasted reply.
    const readBy = new Map();
    const byText = src.readBy || (S.source !== 'live' && H && S.reader === H.READER.id ? pastedServices() : null);
    for (const cp of CPS) {
      const rows = src.rows[cp].filter(r => r.completionState !== 'missing');
      const out = await engine.analyzeMany(rows, contracts[cp]);
      out.forEach((r, i) => {
        results[cp].set(rows[i].student, { result: r, row: rows[i] });
        // Read by nobody yet, as opposed to read and found unclear.
        if (provider.has && !E.eligibility(rows[i]) && !provider.has(cp, rows[i].text)) unread.add(cp + '|' + rows[i].student);
        else if (byText && byText.has(cp + '|' + rows[i].text)) readBy.set(cp + '|' + rows[i].student, byText.get(cp + '|' + rows[i].text));
      });
    }
    const batches = { cp1: [], cp2: [] };
    if (H) for (const cp of CPS) batches[cp] = await H.batches(contracts[cp], src.rows[cp]);
    if (token !== S.loadToken) return; // a newer choice arrived while this one loaded
    const cols = [];
    CPS.forEach(cp => contracts[cp].criteria.forEach((c, i) => cols.push({ id: cp + '-' + i, cp, ci: i, criterionId: c.id, text: c.text, group: CP_NAME[cp], short: 'C' + (i + 1) })));
    D = { contracts, kind: src.kind, students: src.students, rows: src.rows, results, cols, batches, unread, readBy };
    S.overrides = new Map();
    renderAll();
    renderPaste();
    if (S.source === 'live' && S.live && S.live.roster) {
      const sub = CPS.map(cp => src.rows[cp].filter(r => r.completionState === 'verified-submission').length);
      liveSay(`${S.live.roster.classLabel}, Topic ${S.topic}: ${sub[0]} submitted Checkpoint 1, ${sub[1]} submitted Checkpoint 2, pulled ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}.`);
    }
  }

  // ── My class, from the database ───────────────────────────────────────────
  function liveSay(t) { $('#live-status').textContent = t; }
  function classLabel() { return S.source === 'live' && S.live && S.live.roster ? S.live.roster.classLabel : S.section; }
  // The same shape Demo.build returns. With no class list yet, an empty class.
  async function liveBuild() {
    const L = S.live;
    if (!L || !L.roster) return { kind: 'live', students: [], rows: { cp1: [], cp2: [] }, provider: { id: 'none', version: '1', has: () => false, async interpret() { throw new Error('Not read yet'); } } };
    const rows = await L.api.answers(S.topic, L.roster.students);
    const ratings = await L.api.ratings(S.topic);
    const students = L.roster.students.map((st, i) => ({
      i, name: st.label, uid: st.uid, absent: false, strength: .5,
      submittedAt: { cp1: rows.cp1[i].completionState === 'verified-submission' ? 0 : null, cp2: rows.cp2[i].completionState === 'verified-submission' ? 0 : null },
      confidence: { cp1: rows.cp1[i].confidence, cp2: rows.cp2[i].confidence }
    }));
    // A saved rating counts only for the very answer it was made from.
    const byText = new Map(), readBy = new Map();
    CPS.forEach(cp => rows[cp].forEach(r => {
      const g = ratings.get(r.uid + '|' + cp);
      if (g && r.completionState === 'verified-submission' && g.fingerprint === r.fingerprint) {
        byText.set(cp + '|' + r.text, g.criteria);
        readBy.set(cp + '|' + r.text, H ? H.serviceLabel(String(g.reader).replace(/-pasted$/, '')) : g.reader);
      }
    }));
    return { kind: 'live', students, rows, readBy, provider: {
      id: 'saved-ratings', version: '1', has: (cp, text) => byText.has(cp + '|' + text),
      async interpret({ contract, response }) {
        const c = byText.get(contract.checkpoint + '|' + response.text);
        if (!c) throw new Error('Not read yet');
        return { criteria: JSON.parse(JSON.stringify(c)) };
      }
    } };
  }
  function startLive() {
    if (S.live) return;
    const cfg = window.BH_CLASS_PULSE_CONFIG, T = window.BHSyncTransport, LV = window.BHClassPulseLive, Sync = window.BHSync;
    if (!cfg || !T || !LV || !Sync) { liveSay('My class is not available on this copy of the page.'); return; }
    const auth = T.createAuth(cfg);
    const api = LV.create({ projectId: cfg.firebase.projectId, tenantId: cfg.tenantId, getUser: () => auth.user(), getToken: () => auth.getToken(), valueHash: Sync.valueHash });
    S.live = { auth, api, roster: null };
    liveSay('Loading sign-in...');
    auth.ready().then(() => { if (auth.user()) connect(); else liveSay('Sign in to see your class.'); },
      () => liveSay('Sign-in could not load. Check the connection and choose My class again.'));
  }
  async function connect() {
    liveSay('Reading your class list...');
    try { S.live.roster = await S.live.api.roster(); }
    catch (e) { liveSay(e.message); return; }
    $('#live-signin').hidden = true;
    $('#live-refresh').hidden = false;
    applySource();
    load();
  }
  function applySource() {
    const live = S.source === 'live';
    $$('#source button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === S.source));
    $('#live-panel').hidden = !live;
    ['#play', '#toend', '#reset'].forEach(id => { $(id).hidden = live; });
    $('.clock').hidden = live;
    $('#reader').closest('div').hidden = live || !Readers;
    $('#section').disabled = live;
    $('#section').innerHTML = live
      ? `<option>${esc(S.live && S.live.roster ? S.live.roster.classLabel + ' (' + S.live.roster.students.length + ' students)' : 'Sign in first')}</option>`
      : Demo.SECTIONS.map(x => `<option value="${x.id}"${x.id === S.section ? ' selected' : ''}>${x.id}, ${x.cohort} (${x.size} students)</option>`).join('');
    ['course', 'student'].forEach(t => { const b = $('#tab-' + t); b.disabled = live; b.title = live ? 'Demo only for now' : ''; });
    if (live && (S.tab === 'course' || S.tab === 'student')) setTab('live');
    $('#mode-pill').textContent = live ? 'My class: real students' : 'Demo: invented students';
    $('#hero-lede').textContent = live
      ? 'How each student\'s submitted Checkpoint 1 and 2 writing meets each criterion, from the district database. Only you can see this, and only for students on your class list.'
      : 'How each student\'s Checkpoint 1 and 2 writing meets each criterion, as they submit it. Every student and answer here is invented. Real work is read only after the district approves.';
    if (live) { stop(); S.minute = END; startLive(); }
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
    return entry(st, cp) ? (D.unread.has(cp + '|' + st.i) ? 'unread' : 'done') : 'none';
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
  function endBand(st, col) {
    if (st.submittedAt[col.cp] == null || !entry(st, col.cp)) return 'none';
    return D.unread.has(col.cp + '|' + st.i) ? 'wait' : band(st, col);
  }

  // ── During class ──────────────────────────────────────────────────────────
  function legend() {
    return '<span class="m-rn" style="display:contents">' + ['D', 'P', 'N'].map(k => `<span><i class="sw cell b-${k}">${k}</i>${BANDS[k]}</span>`).join('') + '</span>' +
      '<span><i class="sw cell b-U">?</i>Can\'t tell, check it</span><span><i class="sw cell b-busy">&middot;</i>Reading it now</span>' +
      '<span><i class="sw cell b-empty"></i>Not submitted yet</span>' +
      (D.unread.size ? '<span><i class="sw cell b-wait">&middot;</i>Submitted, not read yet</span>' : '') +
      '<span><i class="sw" style="position:relative;background:var(--inset)"><i style="position:absolute;top:3px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent)"></i></i>You changed it</span>';
  }
  function needScore(st) {
    let n = 0;
    D.cols.forEach(c => { if (status(st, c.cp, S.minute) === 'done') { const b = band(st, c); n += b === 'N' ? 2 : b === 'P' || b === 'U' ? 1 : 0; } });
    return n;
  }
  function renderLive() {
    $('#live-sub').textContent = 'Topic ' + title(S.topic) + ' · ' + classLabel() + (S.source === 'live' ? ' · submitted answers, as of your last pull' : ' · fills in as checkpoints are submitted');
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
        else if (s === 'unread') h += '<td><span class="cell b-wait" title="Submitted, not read yet">&middot;</span></td>';
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
    $('#h-n-label').textContent = 'Students in ' + classLabel();
    $('#h-in').textContent = inN;
    $('#h-need').textContent = D.students.filter(needsYou).length;
    $('#h-topic').textContent = title(S.topic);
    $('#h-min').textContent = S.source === 'live' ? 'Live' : S.minute >= END ? 'Bell rang' : 'Minute ' + Math.floor(S.minute) + ' of ' + END;
    $('#h-kind').textContent = D.kind === 'live' ? (D.students.length ? 'Your students\' submitted answers. ' + (D.unread.size ? D.unread.size + ' submitted answers are not read yet.' : 'Every submitted answer is read.') : 'Sign in with your school account to see your class.') : ((D.kind === 'written' ? 'Invented answers with invented writing.'
      : D.kind === 'calibration' ? 'The forty invented calibration answers, dealt round the class.'
      : 'Invented levels only. This topic has no invented writing yet.') +
      (S.reader === 'invented' ? '' : ' Levels read by ' + readerLabel(S.reader) + '.'));
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
    const by = D.readBy.get(col.cp + '|' + si);
    if (by) h += `<p class="small read-by">Read by <b>${esc(by)}</b>, pasted.</p>`;
    // What this level means here, from the same rubric the provider was given.
    const ruled = D.contracts[col.cp].criteria[col.ci].rubric;
    const meaning = ruled && ruled[prop] ? ruled[prop] : D.contracts[col.cp].levels && D.contracts[col.cp].levels[prop];
    if (meaning) h += `<p class="small rubric-line"><b>${ruled && ruled[prop] ? 'The rubric for this criterion' : 'The rubric'}:</b> ${esc(meaning)}</p>`;
    if (crit.evidence.length && !e.row.placeholder && ['D', 'P'].includes(prop)) h += '<p class="small">The highlighted words are the evidence it used. It cannot propose Demonstrating or Partly there without quoting the student.</p>';
    crit.misconceptions.forEach(m => { h += `<div class="row"><span class="chip">Wrong idea: ${esc(m)}</span></div>`; });
    h += '</div>';
    h += everyReader(e.row, col);
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
  // Every AI reader's level for this criterion of this answer, where recorded, so a
  // disagreement between readers is visible before trusting any one of them.
  function everyReader(row, col) {
    if (!Readers || !row.caseId) return '';
    const got = Readers.READERS.filter(r => r.id !== 'invented' && Readers.RECORDED[r.id] && Readers.RECORDED[r.id][row.caseId]);
    if (!got.length) return '';
    return '<div class="readers-cmp"><b style="font-size:13px">Every reader</b>' + got.map(r => {
      const c = Readers.RECORDED[r.id][row.caseId].criteria[col.ci];
      return `<div class="row m-rn"><span class="cell b-${c.category}">${LETTER[c.category]}</span><span class="small"><b>${esc(r.label)}${r.id === S.reader ? ' (shown)' : ''}:</b> ${esc(c.reason)}</span></div>`;
    }).join('') + (got.length < Readers.READERS.length - 1 ? '<p class="small">The other readers have not read this answer yet.</p>' : '') + '</div>';
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
    $('#pulse-title').textContent = 'Topic ' + title(S.topic) + ', ' + classLabel();
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
        const cnt = { D: 0, P: 0, N: 0, U: 0, wait: 0, none: 0 };
        D.students.forEach(st => { cnt[endBand(st, c)]++; });
        h += `<div class="critrow"><div class="lbl">Criterion ${c.ci + 1}<small>${esc(c.text)}</small></div>
          <div class="stack m-rn">${['N', 'P', 'D', 'U', 'wait', 'none'].map(k => cnt[k] ? `<i class="${k === 'none' ? 'b-empty' : 'b-' + k}" style="flex:${cnt[k]}" data-seg="${c.id}|${k}" title="${k === 'none' ? 'Not submitted' : k === 'wait' ? 'Not read yet' : BANDS[k]}: ${cnt[k]}">${cnt[k]}</i>` : '').join('')}</div>
          <div class="counts">${cnt.D} D · ${cnt.P} P · ${cnt.N} N${cnt.U ? ' · ' + cnt.U + ' ?' : ''}${cnt.wait ? ' · ' + cnt.wait + ' not read yet' : ''}${cnt.none ? ' · ' + cnt.none + ' missing' : ''}</div></div>`;
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
    D.cols.forEach(c => { let n2 = 0, bad = 0; D.students.forEach(st => { const b = endBand(st, c); if (b !== 'none' && b !== 'U' && b !== 'wait') { n2++; if (b !== 'D') bad++; } }); if (n2 && (!weakest || bad / n2 > weakest.r)) weakest = { c, r: bad / n2 }; });
    if (weakest) {
      const g = { N: [], P: [], D: [], other: [] };
      D.students.forEach(st => { const b = endBand(st, weakest.c); (g[b] || g.other).push(st); });
      const list = (label, xs, move) => `<div class="group"><h3>${label} · ${xs.length}</h3><ul>${xs.map(st => `<li>${esc(shown(st))}</li>`).join('') || '<li>None</li>'}</ul><p class="small">${move}</p></div>`;
      $('#groups').innerHTML = `<p class="small" style="grid-column:1/-1">Weakest: <b>${weakest.c.group}, criterion ${weakest.c.ci + 1}</b>, ${esc(weakest.c.text)}</p>` +
        list('Reteach with you', g.N, 'Model one strong answer aloud, then have them rewrite that part of their own.') +
        list('Revise in pairs', g.P, 'Trade answers, find what the criterion still needs, add it.') +
        list('Stretch', g.D, 'Add another example or write the strongest counterargument.') +
        (g.other.length ? `<p class="small" style="grid-column:1/-1">Not placed (not submitted, not read yet, or the tool could not tell): ${g.other.map(st => esc(shown(st))).join(', ')}</p>` : '');
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
      D.cols.forEach(c => { const b = endBand(st, c); if (b !== 'none' && b !== 'wait') { n++; if (b === 'D') d++; } });
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
    $('#dtitle').textContent = (b === 'none' ? 'Not submitted' : b === 'wait' ? 'Not read yet' : BANDS[b]) + ' · ' + who.length;
    $('#dsub').textContent = col.group + ', criterion ' + (col.ci + 1);
    $('#dbody').innerHTML = `<div class="small">${esc(col.text)}</div><ul class="watch">${who.map(st => `<li><b>${esc(shown(st))}</b>${b === 'none' ? '<span>Not submitted</span>' : b === 'wait' ? '<span>Submitted, not read yet</span>' : `<span>${esc(entry(st, col.cp).result.criteria[col.ci].reason)} <button class="btn" type="button" style="padding:2px 8px;font-size:11px" data-s="${st.i}" data-c="${col.id}">Read it</button></span>`}</li>`).join('')}</ul>`;
    showDrawer();
  }

  // ── Read by copy and paste ────────────────────────────────────────────────
  // Rendered when a topic or class loads and after each pasted reply, never on the
  // ordinary redraws, so a reply half pasted into a box is not wiped. A decision in the
  // check before copying redraws only its own batch.
  const WORDS = new Set((window.BHClassPulseCourseWords && window.BHClassPulseCourseWords.words) || []);
  const FLAG_KIND = { name: 'Name', personal: 'Personal detail', staff: 'Staff name', contact: 'Contact', school: 'School or class', signature: 'Signature' };
  function batchOf(id) { for (const cp of CPS) { const b = D.batches[cp].find(x => x.id === id); if (b) return { cp, b }; } return null; }
  // batch id -> Map(answer key -> Map(flagged words -> 'remove' | 'keep')), this visit only.
  function decisions(id) { if (!S.checks.has(id)) S.checks.set(id, new Map()); return S.checks.get(id); }
  function flagged(b) { return b.answers.map(a => ({ a, flags: H.flagsFor(a.text, WORDS) })).filter(x => x.flags.length); }
  function undecided(b) { const d = decisions(b.id); return flagged(b).reduce((n, x) => n + x.flags.filter(f => !(d.get(x.a.key) && d.get(x.a.key).has(f.span))).length, 0); }
  // The batch exactly as it will be copied, with every removed span replaced.
  function asCopied(b) {
    const removed = new Map();
    decisions(b.id).forEach((m, key) => removed.set(key, [...m].filter(([, v]) => v === 'remove').map(([span]) => span)));
    return H.redact(b, removed);
  }
  function markFlags(text, flags) {
    let out = esc(text);
    flags.slice().sort((x, y) => y.span.length - x.span.length).forEach(f => { out = out.split(esc(f.span)).join('<mark>' + esc(f.span) + '</mark>'); });
    return out;
  }
  function checkHtml(b) {
    const list = flagged(b), d = decisions(b.id);
    if (!list.length) return '<p class="small check-ok">Checked: no answer in this batch names a person or gives a personal detail.</p>';
    const left = undecided(b);
    return `<div class="precheck"><p class="small"><b>Check before copying.</b> ${list.length} ${list.length === 1 ? 'answer mentions' : 'answers mention'} something that could identify a student. Remove it from the copy or keep it; the student's work is not changed. ${left ? left + ' still to decide.' : 'All decided.'}</p>` +
      list.map(x => `<div class="flagged"><p class="response small">${markFlags(x.a.text, x.flags)}</p>` + x.flags.map(f => {
        const v = d.get(x.a.key) && d.get(x.a.key).get(f.span);
        return `<div class="row flagrow"><span class="chip">${esc(FLAG_KIND[f.kind] || f.kind)}</span><span class="small"><b>${esc(f.span.length > 70 ? f.span.slice(0, 67) + '...' : f.span)}</b> ${esc(f.why)}</span>
          <button class="btn" type="button" data-flag="${b.id}|${x.a.key}|remove" data-span="${esc(f.span)}" aria-pressed="${v === 'remove'}">Remove from the copy</button>
          <button class="btn" type="button" data-flag="${b.id}|${x.a.key}|keep" data-span="${esc(f.span)}" aria-pressed="${v === 'keep'}">Keep it</button></div>`;
      }).join('') + '</div>').join('') + '</div>';
  }
  function batchHtml(cp, b, n, open) {
    const got = pastedHere().get(b.id), first = b.answers[0].key, last = b.answers[b.answers.length - 1].key, left = undecided(b);
    const state = got ? got.read.passed + ' of ' + b.answers.length + ' read' + (got.read.failed + got.read.missing ? ', ' + (got.read.failed + got.read.missing) + ' show as Can\'t tell' : '') : 'Not pasted yet';
    return `<div class="batch${got ? ' done' : ''}" data-card="${b.id}"><div class="batch-top"><b>${CP_NAME[cp]}, batch ${n + 1} of ${D.batches[cp].length}</b><span class="small">Answers ${first} to ${last} · ${esc(state)}</span></div>
      ${checkHtml(b)}
      <div class="row"><button class="btn primary" type="button" data-copy="${b.id}"${left ? ' disabled' : ''}>Copy batch</button><span class="small" data-copied="${b.id}" role="status">${left ? 'Decide each flag above first.' : ''}</span></div>
      <details data-batch="${b.id}"${open ? ' open' : ''}><summary>Paste the reply</summary>
        <textarea data-paste="${b.id}" aria-label="${CP_NAME[cp]}, batch ${n + 1}: paste the reply" placeholder="Paste the whole reply here"></textarea>
        <div class="row"><button class="btn dark" type="button" data-read="${b.id}">Read this reply</button><span class="small" data-said="${b.id}" role="status"></span></div>
        ${left ? '' : `<p class="small">If Copy does not work on this device, select all of the text below and copy it yourself.</p>
        <textarea readonly class="batch-text" data-text="${b.id}" aria-label="The text to paste">${esc(H.promptFor(D.contracts[cp], asCopied(b)))}</textarea>`}
      </details></div>`;
  }
  function renderPaste() {
    if (!H) { $('#paste-panel').hidden = true; return; }
    const rows = CPS.flatMap(cp => D.rows[cp].filter(r => !E.eligibility(r)));
    const gate = H.gate(rows, undefined, S.service);
    const open = new Set($$('#paste-batches details[open]').map(d => d.dataset.batch));
    $('#paste-service').innerHTML = H.SERVICES.map(x => `<option value="${x.id}"${x.id === S.service ? ' selected' : ''}>${esc(x.label)}</option>`).join('');
    $('#paste-gate').textContent = gate.reason;
    let h = '';
    if (D.kind === 'levels') h = '<p class="small">This topic has invented levels but no invented writing, so there is nothing to copy. Topics 2.3 and 3.2 have writing.</p>';
    else if (D.kind === 'live' && !rows.length) h = '<p class="small">No submitted answers for this topic yet. Pull again after students press Submit.</p>';
    else if (!gate.ok) h = '<p class="small"><b>Locked.</b> ' + esc(gate.reason) + ' The submitted answers are on the grid; reading them waits for that approval.</p>';
    else if (gate.ok) CPS.forEach(cp => D.batches[cp].forEach((b, n) => { h += batchHtml(cp, b, n, open.has(b.id)); }));
    $('#paste-batches').innerHTML = h;
    $('#paste-steps').hidden = !gate.ok || D.kind === 'levels' || !rows.length;
  }
  function decide(id, key, span, v) {
    const d = decisions(id);
    if (!d.has(key)) d.set(key, new Map());
    d.get(key).set(span, v);
    const { cp, b } = batchOf(id), card = $(`[data-card="${id}"]`);
    const open = card && card.querySelector('details').open, paste = card && card.querySelector('[data-paste]').value;
    card.outerHTML = batchHtml(cp, b, D.batches[cp].indexOf(b), open);
    const again = $(`[data-card="${id}"] [data-paste]`); if (again && paste) again.value = paste;
  }
  async function copyBatch(id) {
    const { cp, b } = batchOf(id), note = $(`[data-copied="${id}"]`);
    if (undecided(b)) { note.textContent = 'Decide each flag above first.'; return; }
    const text = H.promptFor(D.contracts[cp], asCopied(b));
    let done = false;
    try { await navigator.clipboard.writeText(text); done = true; }
    catch (_) {
      const t = $(`[data-text="${id}"]`); t.closest('details').open = true; t.select();
      try { done = document.execCommand('copy'); } catch (__) { done = false; }
    }
    note.textContent = done ? 'Copied. Paste it into a new chat in ' + H.serviceLabel(S.service) + '.' : 'This browser blocked copying. Open "Paste the reply" and copy the text there yourself.';
  }
  async function readPasted(id) {
    const { cp, b } = batchOf(id), raw = $(`[data-paste="${id}"]`).value, say = $(`[data-said="${id}"]`);
    if (!raw.trim()) { say.textContent = 'Paste the reply first.'; return; }
    let read;
    try { read = H.readReply(D.contracts[cp], asCopied(b), raw); }
    catch (err) { say.textContent = err.message; return; }
    if (S.source === 'live') {
      // Saved for every student whose submitted answer is these exact words. An answer
      // that failed the checks is not saved, so it stays "not read yet".
      const save = [];
      read.results.filter(x => x.status === 'passed').forEach(x => D.rows[cp].forEach(r => {
        if (r.text === x.text && r.completionState === 'verified-submission') save.push({ studentUid: r.uid, topic: S.topic, cp, criteria: x.output.criteria, fingerprint: r.fingerprint, rubricVersion: D.contracts[cp].rubricVersion || '', reader: S.service + '-pasted' });
      }));
      say.textContent = 'Saving ' + save.length + ' ratings...';
      try { await S.live.api.saveRatings(save); }
      catch (err) { say.textContent = 'Not saved: ' + err.message; return; }
      const bad = read.failed + read.missing;
      $('#announce').textContent = 'Saved ' + save.length + ' ratings' + (bad ? '; ' + bad + ' answers did not pass the checks and stay not read yet' : '');
      load();
      return;
    }
    const key = S.topic + '|' + S.section;
    if (!S.pasted.has(key)) S.pasted.set(key, new Map());
    S.pasted.get(key).set(id, { checkpoint: cp, read, service: S.service, at: new Date().toISOString() });
    const bad = read.failed + read.missing;
    $('#announce').textContent = read.passed + ' of ' + b.answers.length + ' answers read' + (bad ? '; ' + bad + ' did not pass the checks and show as Can\'t tell' : '');
    S.reader = H.READER.id;
    load();
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
    if (S.source === 'live' && (t === 'course' || t === 'student')) t = 'live';
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
  $('#reader').addEventListener('change', e => { S.reader = e.target.value; load(); });
  $('#source').addEventListener('click', e => {
    const b = e.target.closest('button[data-v]'); if (!b || b.dataset.v === S.source) return;
    S.source = b.dataset.v; S.stu = 0; applySource(); load();
  });
  $('#live-signin').addEventListener('click', () => {
    if (!S.live) return;
    liveSay('Waiting for Google sign-in...');
    S.live.auth.signIn().then(() => { if (S.live.auth.user()) connect(); else liveSay('Sign-in did not finish. Try again.'); },
      e => liveSay(e && e.code === 'denied' ? 'Use your school staff account (zcs.k12.in.us).' : e && e.code === 'offline' ? 'Sign-in could not reach Google. Check the connection.' : 'Sign-in did not finish. If a popup was blocked, allow popups for this page and try again.'));
  });
  $('#paste-service').addEventListener('change', e => {
    S.service = e.target.value;
    try { localStorage.setItem('class-pulse-service', S.service); } catch (_) { /* a private window */ }
    renderPaste();
  });
  $('#live-refresh').addEventListener('click', () => { liveSay('Pulling the latest answers...'); load(); });
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
    const go = e.target.closest('[data-goto]'); if (go) { setTab(go.dataset.goto); return; }
    const cp = e.target.closest('[data-copy]'); if (cp) { copyBatch(cp.dataset.copy); return; }
    const rd = e.target.closest('[data-read]'); if (rd) { readPasted(rd.dataset.read); return; }
    const fl = e.target.closest('[data-flag]'); if (fl) { const [id, key, v] = fl.dataset.flag.split('|'); decide(id, key, fl.dataset.span, v); }
  });

  setTab((location.hash || '').slice(1) || 'live');
  load();
})();
