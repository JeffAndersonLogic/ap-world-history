// BeHistorical Teacher Hub dashboard renderer
(function(){
  const topics = window.BEHISTORICAL_TEACHER_TOPICS || {};
  const byId = id => document.getElementById(id);
  const STORAGE_KEY = 'behistoricalTeacherHubAnalysisEndpoint';
  let latestAnalysis = null;

  function escapeHtml(value){
    return String(value || '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  }

  function toggleAcc(id){
    const item = byId(id);
    if(!item) return;
    const body = item.querySelector('.acc-body');
    const trigger = item.querySelector('.acc-trigger');
    const isOpen = item.classList.contains('open');
    if(isOpen){
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => requestAnimationFrame(() => { body.style.maxHeight = '0'; }));
      item.classList.remove('open');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    } else {
      item.classList.add('open');
      if(trigger) trigger.setAttribute('aria-expanded','true');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function handler(){
        if(item.classList.contains('open')) body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', handler);
      });
    }
  }

  function copyText(button, id){
    const el = byId(id);
    if(!el) return;
    navigator.clipboard.writeText(el.innerText).then(() => {
      const original = button.textContent;
      button.textContent = 'Copied';
      button.classList.add('teacher');
      setTimeout(() => { button.textContent = original; button.classList.remove('teacher'); }, 1800);
    }).catch(() => {
      const range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      const original = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = original; }, 1800);
    });
  }

  function riskClass(status){ return String(status || '').toLowerCase(); }

  function getCurrentTopic(){
    const topicSelect = byId('topic-select');
    return topics[(topicSelect && topicSelect.value) || '1.1'] || topics['1.1'];
  }

  function getCurrentFilters(){
    const topicSelect = byId('topic-select');
    const periodSelect = byId('period-select');
    const responseTypeSelect = byId('response-type-select');
    return {
      unit: 'Unit 1 - The Global Tapestry',
      topic: topicSelect && topicSelect.value === '1.1' ? '1.1 - Song China' : '1.1 - Song China',
      responseType: responseTypeSelect ? responseTypeSelect.value : 'All Response Types',
      classPeriod: periodSelect ? periodSelect.value : 'All Periods'
    };
  }

  function setStatus(message, kind){
    const el = byId('analysis-status');
    if(!el) return;
    const label = kind === 'error' ? 'Analysis error' : kind === 'live' ? 'Live analysis' : 'Teacher Hub';
    el.innerHTML = `<strong>${label}:</strong> ${escapeHtml(message)}`;
  }

  function saveEndpoint(){
    const input = byId('analysis-endpoint');
    if(!input || !input.value.trim()){
      setStatus('Paste the deployed Apps Script Web App URL before saving.', 'error');
      return;
    }
    localStorage.setItem(STORAGE_KEY, input.value.trim());
    setStatus('Apps Script endpoint saved in this browser. Click Refresh Analysis to pull live Sheet data.', 'live');
  }

  function clearEndpoint(){
    localStorage.removeItem(STORAGE_KEY);
    latestAnalysis = null;
    const input = byId('analysis-endpoint');
    if(input) input.value = '';
    setStatus('Endpoint cleared. The dashboard is back in mock-data mode.', 'mock');
    renderTopic(getCurrentTopic());
  }

  function buildAnalysisUrl(baseUrl){
    const filters = getCurrentFilters();
    const url = new URL(baseUrl);
    url.searchParams.set('unit', filters.unit);
    url.searchParams.set('topic', filters.topic);
    url.searchParams.set('responseType', filters.responseType);
    url.searchParams.set('classPeriod', filters.classPeriod);
    url.searchParams.set('write', 'true');
    return url.toString();
  }

  async function runLiveAnalysis(){
    const input = byId('analysis-endpoint');
    const endpoint = (input && input.value.trim()) || localStorage.getItem(STORAGE_KEY);
    if(!endpoint){
      setStatus('No Apps Script endpoint is saved yet. Use the Setup link, deploy the script, paste the Web App URL, then save it.', 'error');
      return;
    }
    try{
      saveEndpoint();
      setStatus('Fetching live response analysis from Google Sheets...', 'live');
      const response = await fetch(buildAnalysisUrl(endpoint), { method:'GET' });
      if(!response.ok) throw new Error(`Endpoint returned ${response.status}`);
      latestAnalysis = await response.json();
      setStatus(`Updated from Google Sheets. ${latestAnalysis.summary?.totalResponses || 0} matching responses analyzed.`, 'live');
      renderTopic(getCurrentTopic());
    }catch(error){
      setStatus(`Could not load live analysis. ${error.message || error}`, 'error');
    }
  }

  function renderMetricGrid(summary){
    return `<div class="metric-grid">
      <div class="metric"><strong>${escapeHtml(summary.totalResponses)}</strong><span>Total responses</span></div>
      <div class="metric"><strong>${escapeHtml(summary.completionRate)}</strong><span>Completion</span></div>
      <div class="metric"><strong>${escapeHtml(summary.strongResponses)}</strong><span>Strong</span></div>
      <div class="metric"><strong>${escapeHtml(summary.needsSupport)}</strong><span>Need support</span></div>
    </div>`;
  }

  function renderLiveMetricGrid(analysis){
    const summary = analysis.summary || {};
    return `<div class="metric-grid">
      <div class="metric"><strong>${escapeHtml(summary.totalResponses || 0)}</strong><span>Total responses</span></div>
      <div class="metric"><strong>${escapeHtml(summary.averageConfidence == null ? ', ' : summary.averageConfidence + '/5')}</strong><span>Avg confidence</span></div>
      <div class="metric"><strong>${escapeHtml(summary.lowConfidenceCount || 0)}</strong><span>Low confidence</span></div>
      <div class="metric"><strong>${escapeHtml((summary.shortResponseCount || 0) + (summary.blankResponseCount || 0))}</strong><span>Need support</span></div>
    </div>`;
  }

  function renderAccordion(id, title, subtitle, html, open){
    return `<div class="acc-item ${open ? 'open' : ''}" id="${id}">
      <button class="acc-trigger" aria-expanded="${open ? 'true' : 'false'}" aria-controls="${id}-body" onclick="TeacherHub.toggleAcc('${id}')">
        <div><div class="acc-title">${title}</div><div class="acc-subtitle">${subtitle}</div></div><span aria-hidden="true">▼</span>
      </button>
      <div class="acc-body" id="${id}-body" ${open ? 'style="max-height:none"' : ''}><div class="acc-inner">${html}</div></div>
    </div>`;
  }

  function renderLiveAnalysisPanel(topic, analysis){
    const evidence = analysis.commonEvidence || [];
    const misconceptions = analysis.topMisconceptions || [];
    const reteach = analysis.reteachSuggestions || [];
    const flags = analysis.studentFlags || [];
    const skillGaps = analysis.skillGaps || [];
    const promptId = 'live-ai-prompt';

    return `
      <div class="dashboard-grid">
        <section class="panel full">
          <div class="section-label" style="margin-top:0">Live Class Pulse</div>
          <h2>Data-driven snapshot for Topic ${escapeHtml(topic.meta.topic)}</h2>
          <p>${escapeHtml(analysis.classSummary || 'Live analysis loaded from the Google Sheet.')}</p>
          ${renderLiveMetricGrid(analysis)}
          <div class="pulse-list">
            <div class="pulse-card warning"><div class="small-label">Suggested reteach priority</div><p>${reteach[0] ? `<strong>${escapeHtml(reteach[0].focus)}</strong>, ${escapeHtml(reteach[0].action)}` : 'No reteach priority detected yet.'}</p></div>
            <div class="pulse-card"><div class="small-label">Common evidence</div><p>${evidence.length ? evidence.map(escapeHtml).join(' · ') : 'No common evidence detected yet.'}</p></div>
            <div class="pulse-card warning"><div class="small-label">Common misconceptions</div><p>${misconceptions.length ? misconceptions.map(escapeHtml).join(' · ') : 'No misconception pattern detected yet.'}</p></div>
          </div>
        </section>
        <section class="panel">
          <h3>Students Needing Follow-Up</h3>
          <div class="card-list">${flags.length ? flags.map(s => `<div class="data-card"><div class="student-row"><div><div class="student-name">${escapeHtml(s.student)}</div><p>${escapeHtml(s.task)}, ${escapeHtml(s.issue)}</p><p><strong>Next:</strong> ${escapeHtml(s.next)}</p></div><span class="risk ${riskClass(s.status)}">${escapeHtml(s.status)}</span></div></div>`).join('') : '<div class="data-card"><p>No student flags generated for the current filter.</p></div>'}</div>
        </section>
        <section class="panel">
          <h3>Reteach Recommendations</h3>
          <div class="card-list">${reteach.map(r => `<div class="data-card"><div class="small-label">${escapeHtml(r.priority)} priority</div><p><strong>${escapeHtml(r.focus)}</strong></p><p>${escapeHtml(r.action)}</p></div>`).join('') || '<div class="data-card"><p>No reteach recommendation generated yet.</p></div>'}</div>
        </section>
        <section class="panel full">
          <h3>AI Prompt From Live Responses</h3>
          <p>Use this if you want to send the current filtered response set to ChatGPT, Claude, Gemini, or MagicSchool for richer interpretation.</p>
          <div class="copy-box" id="${promptId}">${escapeHtml(analysis.aiPrompt || '')}</div>
          <button class="btn secondary" style="margin-top:10px" onclick="TeacherHub.copyText(this,'${promptId}')">Copy live AI prompt</button>
        </section>
        <section class="panel full">
          <h3>Detected Skill Gaps</h3>
          <div class="tag-row">${skillGaps.length ? skillGaps.map(gap => `<span class="tag">${escapeHtml(gap)}</span>`).join('') : '<span class="tag">No major skill gap detected</span>'}</div>
        </section>
      </div>`;
  }

  function renderTopic(topic){
    if(!topic){
      byId('dashboard').innerHTML = '<div class="panel"><h2>Topic not available yet.</h2><p>This Teacher Hub prototype currently supports Topic 1.1 only.</p></div>';
      return;
    }
    document.title = `Teacher Hub | Topic ${topic.meta.topic}: ${topic.meta.title}`;
    byId('topic-title').textContent = `Topic ${topic.meta.topic}: ${topic.meta.title}`;
    byId('topic-subtitle').textContent = `${topic.meta.subtitle} · ${topic.meta.unit}`;
    byId('stat-los').textContent = topic.stats.learningObjectives;
    byId('stat-kcs').textContent = topic.stats.keyConcepts;
    byId('stat-periods').textContent = topic.stats.classPeriods;
    byId('stat-themes').textContent = topic.stats.themes;
    byId('stat-responses').textContent = latestAnalysis ? (latestAnalysis.summary?.totalResponses || 0) : topic.stats.studentResponses;

    const pulse = topic.classPulse;
    const pacingHtml = `<table class="table"><thead><tr><th>Module</th><th>Time</th><th>Watch-for</th></tr></thead><tbody>${topic.pacing.map(row => `<tr><td><strong>${escapeHtml(row.module)}</strong></td><td><span class="badge">${escapeHtml(row.time)}</span></td><td>${escapeHtml(row.note)}</td></tr>`).join('')}</tbody></table>`;
    const objectivesHtml = `<div class="card-list">${topic.objectives.map(obj => `<div class="data-card"><div class="small-label">${escapeHtml(obj.lo)} · ${escapeHtml(obj.theme)}</div><p><strong>${escapeHtml(obj.text)}</strong></p><ul>${obj.concepts.map(kc => `<li><strong>${escapeHtml(kc.code)}</strong>, ${escapeHtml(kc.text)}</li>`).join('')}</ul></div>`).join('')}</div><div class="tag-row">${topic.examples.map(ex => `<span class="tag">${escapeHtml(ex)}</span>`).join('')}</div>`;
    const misconceptionsHtml = `<div class="card-list">${topic.misconceptions.map(m => `<div class="data-card"><div class="small-label">Misconception</div><p>${escapeHtml(m.misconception)}</p><div class="small-label" style="margin-top:8px;color:#9fe0ad">Correction</div><p>${escapeHtml(m.correction)}</p></div>`).join('')}</div>`;
    const answerHtml = `<div class="card-list">${topic.answerKeys.map(k => `<div class="data-card"><div class="small-label">${escapeHtml(k.part)}</div><p><em>${escapeHtml(k.prompt)}</em></p><p style="margin-top:8px">${escapeHtml(k.answer)}</p></div>`).join('')}</div>`;
    const promptHtml = `<div class="card-list">${topic.prompts.map(p => `<div class="data-card"><div class="small-label">${escapeHtml(p.purpose)}</div><h3>${escapeHtml(p.title)}</h3><div class="copy-box" id="${escapeHtml(p.id)}">${escapeHtml(p.text)}</div><button class="btn secondary" style="margin-top:10px" onclick="TeacherHub.copyText(this,'${escapeHtml(p.id)}')">Copy prompt</button></div>`).join('')}</div>`;
    const formsHtml = `<div class="card-list">${topic.forms.map(f => `<div class="data-card"><div class="student-row"><div><div class="student-name">${escapeHtml(f.name)}</div><p>${escapeHtml(f.description)}</p></div><a class="btn secondary" href="${escapeHtml(f.url)}" target="_blank" rel="noopener">Open</a></div></div>`).join('')}</div><div class="notice"><strong>Functional note:</strong> use the Apps Script endpoint above to replace mock pulse data with live Sheet analysis.</div>`;
    const canvasHtml = `<div class="data-card"><div class="small-label">Canvas assignment</div><p><strong>${escapeHtml(topic.canvas.title)}</strong></p><ul>${topic.canvas.workflow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ul><p style="margin-top:8px"><strong>Language reminder:</strong> ${escapeHtml(topic.canvas.reminder)}</p></div>`;
    const pulsePanel = latestAnalysis ? renderLiveAnalysisPanel(topic, latestAnalysis) : `
      <div class="dashboard-grid">
        <section class="panel full">
          <div class="section-label" style="margin-top:0">Class Pulse Prototype</div>
          <h2>Data-driven snapshot for Topic ${escapeHtml(topic.meta.topic)}</h2>
          <p>This prototype shows the intended Teacher Hub behavior using sample response data. Paste and save the Apps Script endpoint above to load live Google Sheet data.</p>
          ${renderMetricGrid(pulse.summary)}
          <div class="pulse-list">
            <div class="pulse-card warning"><div class="small-label">Suggested reteach priority</div><p><strong>${escapeHtml(pulse.reteach[0].focus)}</strong>, ${escapeHtml(pulse.reteach[0].action)}</p></div>
            <div class="pulse-card"><div class="small-label">Common evidence</div><p>${pulse.commonEvidence.map(escapeHtml).join(' · ')}</p></div>
            <div class="pulse-card warning"><div class="small-label">Common misconceptions</div><p>${pulse.topMisconceptions.map(escapeHtml).join(' · ')}</p></div>
          </div>
        </section>
        <section class="panel">
          <h3>Students Needing Follow-Up</h3>
          <div class="card-list">${topic.students.map(s => `<div class="data-card"><div class="student-row"><div><div class="student-name">${escapeHtml(s.name)}</div><p>${escapeHtml(s.task)}, ${escapeHtml(s.issue)}</p><p><strong>Next:</strong> ${escapeHtml(s.next)}</p></div><span class="risk ${riskClass(s.status)}">${escapeHtml(s.status)}</span></div></div>`).join('')}</div>
        </section>
        <section class="panel">
          <h3>Reteach Recommendations</h3>
          <div class="card-list">${pulse.reteach.map(r => `<div class="data-card"><div class="small-label">${escapeHtml(r.priority)} priority</div><p><strong>${escapeHtml(r.focus)}</strong></p><p>${escapeHtml(r.action)}</p></div>`).join('')}</div>
        </section>
        <section class="panel full">
          <div class="student-row"><div><h3>Lesson Links</h3><p>Open the student-facing lesson or roleplay activity without leaving the Teacher Hub.</p></div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end"><a class="btn" href="${escapeHtml(topic.meta.studentLessonUrl)}" target="_blank" rel="noopener">Student Lesson</a><a class="btn secondary" href="${escapeHtml(topic.meta.beInTheRoomUrl)}" target="_blank" rel="noopener">BeInTheRoom</a></div></div>
        </section>
      </div>`;

    byId('dashboard').innerHTML = `
      ${pulsePanel}
      <div class="section-label">Lesson Delivery Tools</div>
      <div class="accordion">
        ${renderAccordion('acc-pacing','Pacing Guide','Module-by-module time estimates',pacingHtml,true)}
        ${renderAccordion('acc-objectives','Learning Objectives & Key Concepts','College Board alignment quick reference',objectivesHtml,false)}
        ${renderAccordion('acc-misconceptions','Common Misconceptions','High-frequency errors and corrections',misconceptionsHtml,false)}
        ${renderAccordion('acc-answers','Answer Keys','Sample strong SAQ responses',answerHtml,false)}
        ${renderAccordion('acc-prompts','AI Analysis Prompts','Copy-ready class analysis prompts',promptHtml,false)}
        ${renderAccordion('acc-forms','Google Form / Response Capture','Prototype links and future data source',formsHtml,false)}
        ${renderAccordion('acc-canvas','Canvas Workflow','Three-layer classroom workflow',canvasHtml,false)}
      </div>`;
  }

  function init(){
    const endpointInput = byId('analysis-endpoint');
    const savedEndpoint = localStorage.getItem(STORAGE_KEY);
    if(endpointInput && savedEndpoint) endpointInput.value = savedEndpoint;
    const topicSelect = byId('topic-select');
    const periodSelect = byId('period-select');
    const responseTypeSelect = byId('response-type-select');
    if(topicSelect){
      topicSelect.addEventListener('change', () => { latestAnalysis = null; renderTopic(topics[topicSelect.value]); });
      renderTopic(topics[topicSelect.value] || topics['1.1']);
    }
    [periodSelect, responseTypeSelect].forEach(select => {
      if(select) select.addEventListener('change', () => {
        latestAnalysis = null;
        setStatus('Filters changed. Click Refresh Analysis to load matching live data.', 'mock');
        renderTopic(getCurrentTopic());
      });
    });
  }

  window.TeacherHub = { init, toggleAcc, copyText, saveEndpoint, clearEndpoint, runLiveAnalysis };
  document.addEventListener('DOMContentLoaded', init);
})();
