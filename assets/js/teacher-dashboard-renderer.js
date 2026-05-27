// BeHistorical Teacher Hub dashboard renderer
(function(){
  const topics = window.BEHISTORICAL_TEACHER_TOPICS || {};
  const byId = id => document.getElementById(id);

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

  function renderMetricGrid(summary){
    return `<div class="metric-grid">
      <div class="metric"><strong>${escapeHtml(summary.totalResponses)}</strong><span>Total responses</span></div>
      <div class="metric"><strong>${escapeHtml(summary.completionRate)}</strong><span>Completion</span></div>
      <div class="metric"><strong>${escapeHtml(summary.strongResponses)}</strong><span>Strong</span></div>
      <div class="metric"><strong>${escapeHtml(summary.needsSupport)}</strong><span>Need support</span></div>
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
    byId('stat-responses').textContent = topic.stats.studentResponses;

    const pulse = topic.classPulse;
    const pacingHtml = `<table class="table"><thead><tr><th>Module</th><th>Time</th><th>Watch-for</th></tr></thead><tbody>${topic.pacing.map(row => `<tr><td><strong>${escapeHtml(row.module)}</strong></td><td><span class="badge">${escapeHtml(row.time)}</span></td><td>${escapeHtml(row.note)}</td></tr>`).join('')}</tbody></table>`;
    const objectivesHtml = `<div class="card-list">${topic.objectives.map(obj => `<div class="data-card"><div class="small-label">${escapeHtml(obj.lo)} · ${escapeHtml(obj.theme)}</div><p><strong>${escapeHtml(obj.text)}</strong></p><ul>${obj.concepts.map(kc => `<li><strong>${escapeHtml(kc.code)}</strong> — ${escapeHtml(kc.text)}</li>`).join('')}</ul></div>`).join('')}</div><div class="tag-row">${topic.examples.map(ex => `<span class="tag">${escapeHtml(ex)}</span>`).join('')}</div>`;
    const misconceptionsHtml = `<div class="card-list">${topic.misconceptions.map(m => `<div class="data-card"><div class="small-label">Misconception</div><p>${escapeHtml(m.misconception)}</p><div class="small-label" style="margin-top:8px;color:#9fe0ad">Correction</div><p>${escapeHtml(m.correction)}</p></div>`).join('')}</div>`;
    const answerHtml = `<div class="card-list">${topic.answerKeys.map(k => `<div class="data-card"><div class="small-label">${escapeHtml(k.part)}</div><p><em>${escapeHtml(k.prompt)}</em></p><p style="margin-top:8px">${escapeHtml(k.answer)}</p></div>`).join('')}</div>`;
    const promptHtml = `<div class="card-list">${topic.prompts.map(p => `<div class="data-card"><div class="small-label">${escapeHtml(p.purpose)}</div><h3>${escapeHtml(p.title)}</h3><div class="copy-box" id="${escapeHtml(p.id)}">${escapeHtml(p.text)}</div><button class="btn secondary" style="margin-top:10px" onclick="TeacherHub.copyText(this,'${escapeHtml(p.id)}')">Copy prompt</button></div>`).join('')}</div>`;
    const formsHtml = `<div class="card-list">${topic.forms.map(f => `<div class="data-card"><div class="student-row"><div><div class="student-name">${escapeHtml(f.name)}</div><p>${escapeHtml(f.description)}</p></div><a class="btn secondary" href="${escapeHtml(f.url)}" target="_blank" rel="noopener">Open</a></div></div>`).join('')}</div><div class="notice"><strong>Prototype note:</strong> live Sheet/API analysis is not wired yet. This page currently uses mock class-pulse data and copy-ready AI prompts.</div>`;
    const canvasHtml = `<div class="data-card"><div class="small-label">Canvas assignment</div><p><strong>${escapeHtml(topic.canvas.title)}</strong></p><ul>${topic.canvas.workflow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ul><p style="margin-top:8px"><strong>Language reminder:</strong> ${escapeHtml(topic.canvas.reminder)}</p></div>`;

    byId('dashboard').innerHTML = `
      <div class="dashboard-grid">
        <section class="panel full">
          <div class="section-label" style="margin-top:0">Class Pulse Prototype</div>
          <h2>Data-driven snapshot for Topic ${escapeHtml(topic.meta.topic)}</h2>
          <p>This prototype shows the intended Teacher Hub behavior using sample response data. The next phase is connecting this panel to the BeHistorical Google Form response Sheet through a protected Apps Script or API layer.</p>
          ${renderMetricGrid(pulse.summary)}
          <div class="pulse-list">
            <div class="pulse-card warning"><div class="small-label">Suggested reteach priority</div><p><strong>${escapeHtml(pulse.reteach[0].focus)}</strong> — ${escapeHtml(pulse.reteach[0].action)}</p></div>
            <div class="pulse-card"><div class="small-label">Common evidence</div><p>${pulse.commonEvidence.map(escapeHtml).join(' · ')}</p></div>
            <div class="pulse-card warning"><div class="small-label">Common misconceptions</div><p>${pulse.topMisconceptions.map(escapeHtml).join(' · ')}</p></div>
          </div>
        </section>
        <section class="panel">
          <h3>Students Needing Follow-Up</h3>
          <div class="card-list">${topic.students.map(s => `<div class="data-card"><div class="student-row"><div><div class="student-name">${escapeHtml(s.name)}</div><p>${escapeHtml(s.task)} — ${escapeHtml(s.issue)}</p><p><strong>Next:</strong> ${escapeHtml(s.next)}</p></div><span class="risk ${riskClass(s.status)}">${escapeHtml(s.status)}</span></div></div>`).join('')}</div>
        </section>
        <section class="panel">
          <h3>Reteach Recommendations</h3>
          <div class="card-list">${pulse.reteach.map(r => `<div class="data-card"><div class="small-label">${escapeHtml(r.priority)} priority</div><p><strong>${escapeHtml(r.focus)}</strong></p><p>${escapeHtml(r.action)}</p></div>`).join('')}</div>
        </section>
        <section class="panel full">
          <div class="student-row"><div><h3>Lesson Links</h3><p>Open the student-facing lesson or roleplay activity without leaving the Teacher Hub.</p></div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end"><a class="btn" href="${escapeHtml(topic.meta.studentLessonUrl)}" target="_blank" rel="noopener">Student Lesson</a><a class="btn secondary" href="${escapeHtml(topic.meta.beInTheRoomUrl)}" target="_blank" rel="noopener">BeInTheRoom</a></div></div>
        </section>
      </div>
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
    const topicSelect = byId('topic-select');
    if(topicSelect){
      topicSelect.addEventListener('change', () => renderTopic(topics[topicSelect.value]));
      renderTopic(topics[topicSelect.value] || topics['1.1']);
    }
  }

  window.TeacherHub = { init, toggleAcc, copyText };
  document.addEventListener('DOMContentLoaded', init);
})();
