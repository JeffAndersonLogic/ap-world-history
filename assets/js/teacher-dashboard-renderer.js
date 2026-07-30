/**
 * BeHistorical Teacher Hub dashboard renderer
 *
 * Every number on this page comes from the Apps Script endpoint reading the live Google
 * Form response Sheet. There is no sample or fallback data: when nothing has been
 * submitted for the current filter, the page says so rather than showing a stand-in.
 *
 * Filter options come from two sources. Units and topics come from BH_FORM in
 * behistorical-form-config.js, which is the same registry the student pages prefill the
 * form with, so the labels always match what lands in the Sheet. Class periods and
 * response types come from the Sheet itself, so they reflect real submissions.
 *
 * Per-topic teaching reference material (pacing, answer keys, misconceptions) is authored
 * content and only exists for some topics. Where it exists it renders; where it does not,
 * the live analysis still works and the page states plainly that the reference is missing.
 */
(function () {
  const authoredTopics = window.BEHISTORICAL_TEACHER_TOPICS || {};
  const form = window.BH_FORM || { topics: {}, units: {}, skills: {}, responseTypes: {} };
  const connection = window.TeacherHubConnection;

  const ALL_UNITS = 'All Units';
  const ALL_TOPICS = 'All Topics';
  const ALL_PERIODS = 'All Periods';
  const ALL_RESPONSE_TYPES = 'All Response Types';

  let sheetIndex = null;
  let analysis = null;
  let lastError = '';
  let requestSequence = 0;

  const byId = function (id) { return document.getElementById(id); };

  function escapeHtml(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/[&<>"]/g, function (ch) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
      });
  }

  function selectValue(id) {
    const el = byId(id);
    return el ? el.value : '';
  }

  /* ─── Topic registry helpers ─────────────────────────────────────────────── */

  /** "1.1" -> "1", "f3" -> "foundations". */
  function unitKeyForTopic(topicKey) {
    const numeric = String(topicKey).match(/^(\d+)\./);
    if (numeric) return numeric[1];
    if (/^f\d+$/.test(String(topicKey))) return 'foundations';
    return '';
  }

  function unitLabel(unitKey) {
    return form.units[unitKey] || '';
  }

  function orderedTopicKeys() {
    return Object.keys(form.topics).sort(function (a, b) {
      const aFoundation = /^f\d+$/.test(a);
      const bFoundation = /^f\d+$/.test(b);
      if (aFoundation !== bFoundation) return aFoundation ? -1 : 1;
      if (aFoundation) return Number(a.slice(1)) - Number(b.slice(1));
      const aParts = a.split('.').map(Number);
      const bParts = b.split('.').map(Number);
      return aParts[0] - bParts[0] || aParts[1] - bParts[1];
    });
  }

  function orderedUnitKeys() {
    return Object.keys(form.units).sort(function (a, b) {
      if (a === 'foundations') return -1;
      if (b === 'foundations') return 1;
      return Number(a) - Number(b);
    });
  }

  /* ─── Dropdowns ──────────────────────────────────────────────────────────── */

  function fillSelect(id, options, selected) {
    const el = byId(id);
    if (!el) return;
    el.innerHTML = options.map(function (option) {
      const value = typeof option === 'string' ? option : option.value;
      const label = typeof option === 'string' ? option : option.label;
      return '<option value="' + escapeHtml(value) + '">' + escapeHtml(label) + '</option>';
    }).join('');
    if (selected) el.value = selected;
  }

  function populateUnitSelect() {
    const options = [{ value: ALL_UNITS, label: ALL_UNITS }];
    orderedUnitKeys().forEach(function (key) {
      options.push({ value: key, label: unitLabel(key) });
    });
    fillSelect('unit-select', options);
  }

  function populateTopicSelect() {
    const unitKey = selectValue('unit-select');
    const previous = selectValue('topic-select');
    const keys = orderedTopicKeys().filter(function (topicKey) {
      return unitKey === ALL_UNITS || unitKeyForTopic(topicKey) === unitKey;
    });
    const options = [{ value: ALL_TOPICS, label: unitKey === ALL_UNITS ? 'All Topics' : 'All Topics in This Unit' }];
    keys.forEach(function (topicKey) {
      options.push({ value: topicKey, label: form.topics[topicKey] });
    });
    fillSelect('topic-select', options, keys.indexOf(previous) >= 0 ? previous : ALL_TOPICS);
  }

  /**
   * Periods and response types come from the Sheet when the index has loaded, so the lists
   * match real submissions instead of a guess. Response types fall back to the canonical
   * BH_FORM list, which is what the student pages actually submit.
   */
  function populateDataDrivenSelects() {
    const periods = (sheetIndex && sheetIndex.classPeriods && sheetIndex.classPeriods.length)
      ? sheetIndex.classPeriods
      : [];
    fillSelect('period-select', [ALL_PERIODS].concat(periods), selectValue('period-select') || ALL_PERIODS);

    const fromSheet = (sheetIndex && sheetIndex.responseTypes) ? sheetIndex.responseTypes : [];
    const canonical = Object.keys(form.responseTypes || {}).map(function (key) { return form.responseTypes[key]; });
    const merged = [];
    fromSheet.concat(canonical).forEach(function (value) {
      if (value && merged.indexOf(value) < 0) merged.push(value);
    });
    fillSelect('response-type-select', [ALL_RESPONSE_TYPES].concat(merged), selectValue('response-type-select') || ALL_RESPONSE_TYPES);
  }

  /**
   * Unit is only sent when no specific topic is chosen. A specific topic already implies
   * its unit, and sending both would drop every row whose Unit cell does not match the
   * registry label character for character.
   */
  function currentFilters() {
    const topicKey = selectValue('topic-select');
    const unitKey = selectValue('unit-select');
    const specificTopic = topicKey && topicKey !== ALL_TOPICS;
    return {
      unit: specificTopic || unitKey === ALL_UNITS ? '' : unitLabel(unitKey),
      topic: specificTopic ? (form.topics[topicKey] || topicKey) : ALL_TOPICS,
      responseType: selectValue('response-type-select') || ALL_RESPONSE_TYPES,
      classPeriod: selectValue('period-select') || ALL_PERIODS
    };
  }

  function currentTopicKey() {
    const topicKey = selectValue('topic-select');
    return topicKey && topicKey !== ALL_TOPICS ? topicKey : '';
  }

  /* ─── Status and header ──────────────────────────────────────────────────── */

  function setStatus(message, kind) {
    const el = byId('analysis-status');
    if (!el) return;
    const label = kind === 'error' ? 'Problem' : kind === 'loading' ? 'Loading' : 'Live data';
    el.innerHTML = '<strong>' + label + ':</strong> ' + escapeHtml(message);
  }

  function formatClock(isoString) {
    if (!isoString) return '&ndash;';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '&ndash;';
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function updateHeader() {
    const topicKey = currentTopicKey();
    const unitKey = selectValue('unit-select');
    const title = topicKey ? form.topics[topicKey] : (unitKey === ALL_UNITS ? 'All Units' : unitLabel(unitKey));
    const authored = topicKey ? authoredTopics[topicKey] : null;

    byId('topic-title').textContent = title || 'Teacher Hub';
    byId('topic-subtitle').textContent = topicKey
      ? (authored && authored.meta.subtitle ? authored.meta.subtitle + ' · ' : '') + (unitLabel(unitKeyForTopic(topicKey)) || '')
      : 'Every topic with responses in your Sheet';
    document.title = 'Teacher Hub | ' + (title || 'BeHistorical');
  }

  function updateStats() {
    const summary = (analysis && analysis.summary) || {};
    const flags = (analysis && analysis.studentFlags) || [];
    byId('stat-responses').textContent = analysis ? (summary.totalResponses || 0) : '–';
    byId('stat-students').textContent = analysis ? (summary.studentCount || 0) : '–';
    byId('stat-confidence').textContent = analysis
      ? (summary.averageConfidence === null || summary.averageConfidence === undefined ? 'n/a' : summary.averageConfidence + '/5')
      : '–';
    byId('stat-followup').textContent = analysis ? flags.length : '–';
    byId('stat-updated').innerHTML = analysis ? formatClock(analysis.generatedAt) : '&ndash;';
  }

  function updateConnectionLabel() {
    const el = byId('connection-label');
    if (!el) return;
    const endpoint = connection.getEndpoint();
    const tail = endpoint ? endpoint.replace(/^https:\/\/script\.google\.com\/macros\/s\//, '').slice(0, 12) : '';
    el.textContent = endpoint ? 'Connected to deployment ' + tail + '…' : 'Not connected';
  }

  /* ─── Data loading ───────────────────────────────────────────────────────── */

  async function refreshFilterIndex() {
    try {
      setStatus('Reading class periods and response types from the Sheet...', 'loading');
      sheetIndex = await connection.fetchIndex();
      populateDataDrivenSelects();
      setStatus('Filter options reloaded from the Sheet. ' + (sheetIndex.totalResponses || 0) + ' total responses on file.', 'live');
    } catch (error) {
      lastError = error.message || String(error);
      setStatus(lastError, 'error');
      render();
    }
  }

  /**
   * write=true asks the script to also refresh TeacherHub_Analysis and
   * TeacherHub_StudentFlags in the Sheet. That is what puts real names next to the
   * numbered labels shown here.
   */
  async function refresh() {
    const sequence = ++requestSequence;
    updateHeader();
    setStatus('Fetching live analysis from your Google Sheet...', 'loading');
    render();
    try {
      const payload = await connection.fetchAnalysis(currentFilters(), true);
      if (sequence !== requestSequence) return;
      analysis = payload;
      lastError = '';
      connection.markConnected();
      const total = (payload.summary && payload.summary.totalResponses) || 0;
      setStatus(total
        ? total + ' matching responses analyzed. Names for the flagged students are in the ' + (payload.namedFlagsTab || 'TeacherHub_StudentFlags') + ' tab of your Sheet.'
        : 'No responses match this filter yet.', 'live');
      render();
    } catch (error) {
      if (sequence !== requestSequence) return;
      analysis = null;
      lastError = error.message || String(error);
      setStatus(lastError, 'error');
      render();
    }
  }

  /* ─── Live panels ────────────────────────────────────────────────────────── */

  function riskClass(status) { return String(status || '').toLowerCase(); }

  function renderMetricGrid(summary) {
    const needSupport = (summary.shortResponseCount || 0) + (summary.blankResponseCount || 0);
    return '<div class="metric-grid">' +
      '<div class="metric"><strong>' + escapeHtml(summary.totalResponses || 0) + '</strong><span>Responses</span></div>' +
      '<div class="metric"><strong>' + escapeHtml(summary.averageConfidence === null || summary.averageConfidence === undefined ? 'n/a' : summary.averageConfidence + '/5') + '</strong><span>Avg confidence</span></div>' +
      '<div class="metric"><strong>' + escapeHtml(summary.lowConfidenceCount || 0) + '</strong><span>Low confidence</span></div>' +
      '<div class="metric"><strong>' + escapeHtml(needSupport) + '</strong><span>Short or blank</span></div>' +
      '</div>';
  }

  function renderCountRow(label, counts) {
    const keys = Object.keys(counts || {});
    if (!keys.length) return '';
    keys.sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });
    return '<div class="pulse-card"><div class="small-label">' + escapeHtml(label) + '</div><div class="tag-row">' +
      keys.map(function (key) {
        return '<span class="tag">' + escapeHtml(key) + ': ' + escapeHtml(counts[key]) + '</span>';
      }).join('') + '</div></div>';
  }

  function renderNoDataPanel() {
    return '<div class="dashboard-grid"><section class="panel full">' +
      '<div class="section-label" style="margin-top:0">Live Class Pulse</div>' +
      '<h2>No responses match this filter yet</h2>' +
      '<p>Nothing in your response Sheet matches the current Unit, Topic, Class Period, and Response Type combination. ' +
      'Widen the filter, or have students submit for this topic and refresh.</p>' +
      '<p style="margin-top:10px;color:var(--muted-sandstone);font-size:13px;">If you expected data here, check that the Topic value your form records ' +
      'matches the registry label exactly, for example <code>1.1 - Song China</code>.</p>' +
      '</section></div>';
  }

  function renderDisconnectedPanel(messageText) {
    return '<div class="dashboard-grid"><section class="panel full">' +
      '<div class="section-label" style="margin-top:0">Not Connected</div>' +
      '<h2>The Teacher Hub could not read your Sheet</h2>' +
      '<p>' + escapeHtml(messageText) + '</p>' +
      '<p style="margin-top:12px"><a class="btn" href="index.html">Check the connection</a></p>' +
      '</section></div>';
  }

  function renderLivePanels() {
    const summary = analysis.summary || {};
    const evidence = analysis.commonEvidence || [];
    const misconceptions = analysis.topMisconceptions || [];
    const reteach = analysis.reteachSuggestions || [];
    const flags = analysis.studentFlags || [];
    const skillGaps = analysis.skillGaps || [];

    const flagCards = flags.length
      ? flags.map(function (flag) {
        return '<div class="data-card"><div class="student-row"><div>' +
          '<div class="student-name">' + escapeHtml(flag.label) + (flag.classPeriod ? ' · ' + escapeHtml(flag.classPeriod) : '') + '</div>' +
          '<p>' + escapeHtml(flag.task) + ', ' + escapeHtml(flag.issue) + '</p>' +
          '<p><strong>Next:</strong> ' + escapeHtml(flag.next) + '</p></div>' +
          '<span class="risk ' + riskClass(flag.status) + '">' + escapeHtml(flag.status) + '</span>' +
          '</div></div>';
      }).join('')
      : '<div class="data-card"><p>No students flagged for this filter.</p></div>';

    return '<div class="dashboard-grid">' +
      '<section class="panel full">' +
      '<div class="section-label" style="margin-top:0">Live Class Pulse</div>' +
      '<h2>' + escapeHtml(analysis.filters.topic === 'All Topics' ? 'All topics with responses' : analysis.filters.topic) + '</h2>' +
      '<p>' + escapeHtml(analysis.classSummary || '') + '</p>' +
      renderMetricGrid(summary) +
      '<div class="pulse-list">' +
      '<div class="pulse-card warning"><div class="small-label">Top reteach priority</div><p>' +
      (reteach[0] ? '<strong>' + escapeHtml(reteach[0].focus) + '</strong>, ' + escapeHtml(reteach[0].action) : 'No reteach priority detected.') +
      '</p></div>' +
      '<div class="pulse-card"><div class="small-label">Specifics students cited most</div><p>' +
      (evidence.length ? evidence.map(escapeHtml).join(' · ') : 'No repeated specific evidence detected yet.') + '</p></div>' +
      '<div class="pulse-card warning"><div class="small-label">Misconception patterns</div><p>' +
      (misconceptions.length ? misconceptions.map(escapeHtml).join(' · ') : escapeHtml(analysis.misconceptionSource || 'None detected.')) + '</p></div>' +
      renderCountRow('Responses by type', summary.responseTypeCounts) +
      renderCountRow('Responses by class period', summary.periodCounts) +
      '</div></section>' +

      '<section class="panel">' +
      '<h3>Students Needing Follow-Up</h3>' +
      '<p style="font-size:12px;color:var(--muted-sandstone)">Numbered labels only. The matching names are on the <code>' +
      escapeHtml(analysis.namedFlagsTab || 'TeacherHub_StudentFlags') + '</code> tab of your Sheet, refreshed each time this page loads.</p>' +
      '<div class="card-list">' + flagCards + '</div>' +
      '</section>' +

      '<section class="panel">' +
      '<h3>Reteach Recommendations</h3>' +
      '<div class="card-list">' + (reteach.length ? reteach.map(function (item) {
        return '<div class="data-card"><div class="small-label">' + escapeHtml(item.priority) + ' priority</div>' +
          '<p><strong>' + escapeHtml(item.focus) + '</strong></p><p>' + escapeHtml(item.action) + '</p></div>';
      }).join('') : '<div class="data-card"><p>No recommendation generated.</p></div>') + '</div>' +
      '</section>' +

      '<section class="panel full">' +
      '<h3>Detected Skill Gaps</h3>' +
      '<div class="tag-row">' + (skillGaps.length
        ? skillGaps.map(function (gap) { return '<span class="tag">' + escapeHtml(gap) + '</span>'; }).join('')
        : '<span class="tag">No major skill gap detected</span>') + '</div>' +
      '</section>' +

      '<section class="panel full">' +
      '<h3>AI Analysis Prompt</h3>' +
      '<p>Built from the responses matching this filter, with student names replaced by numbered labels so it is safe to paste into an external AI tool.</p>' +
      '<div class="copy-box" id="live-ai-prompt">' + escapeHtml(analysis.aiPrompt || '') + '</div>' +
      '<button class="btn secondary" style="margin-top:10px" onclick="TeacherHub.copyText(this,\'live-ai-prompt\')">Copy prompt</button>' +
      '</section>' +
      '</div>';
  }

  /* ─── Topic reference panels ─────────────────────────────────────────────── */

  function renderSkillFocus(topicKey) {
    const skills = (form.skills || {})[topicKey];
    if (!skills) return '';
    const rows = Object.keys(skills).map(function (responseKey) {
      const label = (form.responseTypes || {})[responseKey] || responseKey;
      return '<tr><td><strong>' + escapeHtml(label) + '</strong></td><td>' +
        skills[responseKey].map(function (skill) { return '<span class="tag">' + escapeHtml(skill) + '</span>'; }).join(' ') +
        '</td></tr>';
    }).join('');
    return '<table class="table"><thead><tr><th>Capture point</th><th>AP skill focus</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  function renderAccordion(id, title, subtitle, html, open) {
    return '<div class="acc-item ' + (open ? 'open' : '') + '" id="' + id + '">' +
      '<button class="acc-trigger" aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="' + id + '-body" onclick="TeacherHub.toggleAcc(\'' + id + '\')">' +
      '<div><div class="acc-title">' + title + '</div><div class="acc-subtitle">' + subtitle + '</div></div><span aria-hidden="true">▼</span>' +
      '</button>' +
      '<div class="acc-body" id="' + id + '-body"' + (open ? ' style="max-height:none"' : '') + '><div class="acc-inner">' + html + '</div></div>' +
      '</div>';
  }

  function renderReferenceSection() {
    const topicKey = currentTopicKey();
    if (!topicKey) return '';

    const unitKey = unitKeyForTopic(topicKey);
    const unitHub = unitKey === 'foundations' ? '../foundations/index.html' : '../unit-' + unitKey + '/index.html';
    const authored = authoredTopics[topicKey];
    const panels = [];

    const skillHtml = renderSkillFocus(topicKey);
    if (skillHtml) {
      panels.push(renderAccordion('acc-skills', 'AP Skill Focus by Capture Point',
        'What each response type is graded against for this topic', skillHtml, !authored));
    }

    if (authored) {
      panels.push(renderAccordion('acc-pacing', 'Pacing Guide', 'Module-by-module time estimates',
        '<table class="table"><thead><tr><th>Module</th><th>Time</th><th>Watch-for</th></tr></thead><tbody>' +
        authored.pacing.map(function (row) {
          return '<tr><td><strong>' + escapeHtml(row.module) + '</strong></td><td><span class="badge">' +
            escapeHtml(row.time) + '</span></td><td>' + escapeHtml(row.note) + '</td></tr>';
        }).join('') + '</tbody></table>', true));

      panels.push(renderAccordion('acc-objectives', 'Learning Objectives & Key Concepts', 'College Board alignment',
        '<div class="card-list">' + authored.objectives.map(function (obj) {
          return '<div class="data-card"><div class="small-label">' + escapeHtml(obj.lo) + ' · ' + escapeHtml(obj.theme) + '</div>' +
            '<p><strong>' + escapeHtml(obj.text) + '</strong></p><ul>' +
            obj.concepts.map(function (kc) { return '<li><strong>' + escapeHtml(kc.code) + '</strong>, ' + escapeHtml(kc.text) + '</li>'; }).join('') +
            '</ul></div>';
        }).join('') + '</div><div class="tag-row">' +
        authored.examples.map(function (ex) { return '<span class="tag">' + escapeHtml(ex) + '</span>'; }).join('') + '</div>', false));

      panels.push(renderAccordion('acc-misconceptions', 'Known Misconceptions', 'Authored errors and corrections',
        '<div class="card-list">' + authored.misconceptions.map(function (m) {
          return '<div class="data-card"><div class="small-label">Misconception</div><p>' + escapeHtml(m.misconception) + '</p>' +
            '<div class="small-label" style="margin-top:8px;color:#9fe0ad">Correction</div><p>' + escapeHtml(m.correction) + '</p></div>';
        }).join('') + '</div>', false));

      panels.push(renderAccordion('acc-answers', 'Answer Keys', 'Sample strong responses',
        '<div class="card-list">' + authored.answerKeys.map(function (k) {
          return '<div class="data-card"><div class="small-label">' + escapeHtml(k.part) + '</div>' +
            '<p><em>' + escapeHtml(k.prompt) + '</em></p><p style="margin-top:8px">' + escapeHtml(k.answer) + '</p></div>';
        }).join('') + '</div>', false));

      panels.push(renderAccordion('acc-prompts', 'Saved AI Prompts', 'Copy-ready analysis prompts',
        '<div class="card-list">' + authored.prompts.map(function (p) {
          return '<div class="data-card"><div class="small-label">' + escapeHtml(p.purpose) + '</div>' +
            '<h3>' + escapeHtml(p.title) + '</h3><div class="copy-box" id="' + escapeHtml(p.id) + '">' + escapeHtml(p.text) + '</div>' +
            '<button class="btn secondary" style="margin-top:10px" onclick="TeacherHub.copyText(this,\'' + escapeHtml(p.id) + '\')">Copy prompt</button></div>';
        }).join('') + '</div>', false));

      panels.push(renderAccordion('acc-canvas', 'Canvas Workflow', 'Classroom submission flow',
        '<div class="data-card"><div class="small-label">Canvas assignment</div>' +
        '<p><strong>' + escapeHtml(authored.canvas.title) + '</strong></p><ul>' +
        authored.canvas.workflow.map(function (step) { return '<li>' + escapeHtml(step) + '</li>'; }).join('') +
        '</ul><p style="margin-top:8px"><strong>Language reminder:</strong> ' + escapeHtml(authored.canvas.reminder) + '</p></div>', false));
    }

    const lessonUrl = authored && authored.meta.studentLessonUrl ? authored.meta.studentLessonUrl : unitHub;
    const lessonLabel = authored && authored.meta.studentLessonUrl ? 'Student Lesson' : 'Unit Hub';
    const beInTheRoom = authored && authored.meta.beInTheRoomUrl
      ? '<a class="btn secondary" href="' + escapeHtml(authored.meta.beInTheRoomUrl) + '" target="_blank" rel="noopener">BeInTheRoom</a>'
      : '';

    const linksPanel = '<div class="dashboard-grid"><section class="panel full">' +
      '<div class="student-row"><div><h3>Lesson Links</h3>' +
      '<p>' + (authored
        ? 'Open the student-facing lesson or roleplay for this topic.'
        : 'Detailed teaching reference has not been authored for this topic yet. The live analysis above is complete; these links go to the unit hub.') +
      '</p></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">' +
      '<a class="btn" href="' + escapeHtml(lessonUrl) + '" target="_blank" rel="noopener">' + escapeHtml(lessonLabel) + '</a>' +
      beInTheRoom + '</div></div></section></div>';

    if (!panels.length) return linksPanel;
    return linksPanel + '<div class="section-label">Lesson Delivery Tools</div><div class="accordion">' + panels.join('') + '</div>';
  }

  /* ─── Render ─────────────────────────────────────────────────────────────── */

  function render() {
    updateStats();
    updateConnectionLabel();
    let main;
    if (!analysis) {
      main = lastError
        ? renderDisconnectedPanel(lastError)
        : '<div class="dashboard-grid"><section class="panel full"><h2>Loading live analysis...</h2></section></div>';
    } else if (!(analysis.summary && analysis.summary.totalResponses)) {
      main = renderNoDataPanel();
    } else {
      main = renderLivePanels();
    }
    byId('dashboard').innerHTML = main + renderReferenceSection();
  }

  /* ─── Interaction ────────────────────────────────────────────────────────── */

  function toggleAcc(id) {
    const item = byId(id);
    if (!item) return;
    const body = item.querySelector('.acc-body');
    const trigger = item.querySelector('.acc-trigger');
    if (item.classList.contains('open')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { body.style.maxHeight = '0'; });
      });
      item.classList.remove('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function handler() {
        if (item.classList.contains('open')) body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', handler);
      });
    }
  }

  function copyText(button, id) {
    const el = byId(id);
    if (!el) return;
    const done = function () {
      const original = button.textContent;
      button.textContent = 'Copied';
      button.classList.add('teacher');
      setTimeout(function () { button.textContent = original; button.classList.remove('teacher'); }, 1800);
    };
    navigator.clipboard.writeText(el.innerText).then(done).catch(function () {
      const range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      done();
    });
  }

  /* ─── Init ───────────────────────────────────────────────────────────────── */

  async function init() {
    if (!connection || !connection.isConfigured()) return;

    populateUnitSelect();
    populateTopicSelect();
    populateDataDrivenSelects();
    updateHeader();
    render();

    byId('unit-select').addEventListener('change', function () {
      populateTopicSelect();
      refresh();
    });
    ['topic-select', 'period-select', 'response-type-select'].forEach(function (id) {
      const el = byId(id);
      if (el) el.addEventListener('change', refresh);
    });

    try {
      sheetIndex = await connection.fetchIndex();
      populateDataDrivenSelects();
    } catch (error) {
      lastError = error.message || String(error);
      setStatus(lastError, 'error');
      render();
      return;
    }
    await refresh();
  }

  window.TeacherHub = {
    init: init,
    toggleAcc: toggleAcc,
    copyText: copyText,
    refresh: refresh,
    refreshFilterIndex: refreshFilterIndex
  };
  document.addEventListener('DOMContentLoaded', init);
})();
