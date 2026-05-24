// behistorical-topic-renderer-v1.js
// BeHistorical AP World History — Shared Topic Renderer
// Updated: MagicSchool bridge added to First & 10 and both Checkpoints

const L = window.BEHISTORICAL_LESSON;
const byId = id => document.getElementById(id);
const md = s => String(s || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
const kcPills = kc => kc.split(';').map(s => s.trim()).filter(Boolean).map(s => `<span class="inline-target-kc">${s}</span>`).join(' ');

function sanitizeImageUrl(url) {
  const value = String(url || '').trim();
  if (!value) return '';
  return value;
}

function stableImageKey(id) {
  return {
    contentdelivery: 'contentDelivery',
    checkpoint1: 'checkpoint1',
    checkpoint2: 'checkpoint2',
    beintheroom: 'beInTheRoom',
    besurreal: 'beSurreal'
  }[id] || id;
}

function moduleCardImg(id, fallback) {
  const stable = L.stableImages || {};
  return sanitizeImageUrl(stable[stableImageKey(id)] || fallback || ((L.map && L.map.url) ? L.map.url : ''));
}

function videoPreviewImg(video) {
  if (video && video.youtubeId) return `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  return sanitizeImageUrl((video && video.previewImage) || ((L.stableImages && L.stableImages.contentDelivery) || ((L.map && L.map.url) || '')));
}

function applyKeyConceptLabels() {
  if (!L || !L.meta) return;
  const labels = {
    'Topic 1.2': { lt: ['KC-3.1.III.D.iii', 'KC-3.2.I.B', 'KC-3.1.I.D; KC-3.1.III.D.iii'], sc: ['KC-3.2.I.B', 'KC-3.1.III.D.iii', 'KC-3.1.I.D; KC-3.1.III.D.iii'] },
    'Topic 1.3': { lt: ['KC-3.1.III.D.ii; KC-3.1.III.D.iii', 'KC-3.2.I; KC-3.1.I.D', 'KC-3.1.I.D'], sc: ['KC-3.1.III.D.ii; KC-3.1.III.D.iii', 'KC-3.2.I', 'KC-3.1.I.D'] },
    'Topic 1.4': { lt: ['KC-3.2.I.D.i', 'KC-3.2.I.D.i', 'Suggested Skill 3.B — Claims and Evidence in Sources'], sc: ['KC-3.2.I.D.i — State systems in the Americas', 'KC-3.2.I.D.i — State systems in the Americas', 'Suggested Skill 3.B — Evidence used to support an argument'] },
    'Topic 1.5': { lt: ['KC-3.2.I', 'KC-3.1.I.D; KC-3.1.III.D.iii', 'Comparison'], sc: ['KC-3.1.I.D', 'KC-3.1.I.D; KC-3.1.III.D.iii', 'KC-3.2.I'] },
    'Topic 1.6': { lt: ['KC-3.2.I', 'KC-3.1.III.D; KC-3.3', 'Comparison'], sc: ['KC-3.2.I', 'KC-3.3', 'Comparison'] },
    'Topic 1.7': { lt: ['Topic 1.7; Comparison', 'KC-3.1.III.D; Comparison', 'AP Historical Thinking Skill: Comparison'], sc: ['Comparison', 'Evidence', 'Reasoning'] }
  };
  const match = labels[L.meta.topic];
  if (!match) return;
  (L.learningTargets || []).forEach((item, i) => { if (match.lt[i]) item.kc = match.lt[i]; });
  (L.successCriteria || []).forEach((item, i) => { if (match.sc[i]) item.kc = match.sc[i]; });
}

// ── Boot ──────────────────────────────────────────────────────────────────────

if (L) {
  applyKeyConceptLabels();
  document.title = `BeHistorical | AP World ${L.meta.topic} ${L.meta.title}`;
  byId('lesson-title').textContent = `${L.meta.topic} — ${L.meta.title}`;
  byId('lesson-subtitle').textContent = L.meta.subtitle;
  byId('footer-topic-label').textContent = `${L.meta.topic} — ${L.meta.title} · Think Like a Historian.`;
  byId('lecture-title').textContent = L.lecture.title || 'Lecture Cards';
  byId('lecture-intro').textContent = L.lecture.intro || 'Use these cards from the main page. Each card opens a projection-friendly pop-up with enlarged content and a related visual.';

  byId('inline-targets').innerHTML = `
    <div class="inline-targets">
      <article class="inline-target-card">
        <h3>Learning Targets</h3>
        ${(L.learningTargets || []).map((t, i) => `
          <div class="inline-target-item">
            <span class="inline-target-number">${i + 1}</span>
            <div class="inline-target-text">
              <p>${t.target}</p>
              ${t.kc ? `<div class="inline-target-kc-row">${kcPills(t.kc)}</div>` : ''}
            </div>
          </div>`).join('')}
      </article>
      <article class="inline-target-card">
        <h3>Success Criteria</h3>
        ${(L.successCriteria || []).map((c, i) => `
          <div class="inline-target-item">
            <span class="inline-target-number">${i + 1}</span>
            <div class="inline-target-text">
              <p>${c.criteria}</p>
              ${c.kc ? `<div class="inline-target-kc-row">${kcPills(c.kc)}</div>` : ''}
            </div>
          </div>`).join('')}
      </article>
    </div>`;

  renderCollegeBoardFramework();
  renderLectureCards();
  renderVideoClips();
  renderModuleGrid();
  loadAllDrafts();
}

// ── College Board Framework ───────────────────────────────────────────────────

function normalizedKeyConcepts() {
  return (L.collegeBoardKeyConcepts || []).reduce((cards, kc) => {
    const code = String(kc.code || '').trim().toLowerCase();
    const examples = Array.isArray(kc.illustrativeExamples) ? kc.illustrativeExamples : [];
    if (code === 'illustrative examples') {
      const target = [...cards].reverse().find(card => String(card.code || '').trim().toLowerCase() !== 'illustrative examples');
      if (target) {
        target.illustrativeExamples = [...(target.illustrativeExamples || []), ...examples];
        if (!examples.length && kc.text) target.illustrativeExamples.push(kc.text);
      }
      return cards;
    }
    cards.push({ ...kc, illustrativeExamples: [...examples] });
    return cards;
  }, []);
}

function renderCollegeBoardFramework() {
  const section = byId('college-board-key-concepts');
  if (!section) return;
  const keyConcepts = normalizedKeyConcepts();
  section.innerHTML = `
    <div class="section-header">
      <div class="eyebrow">College Board Framework</div>
      <h2>Key Concepts &amp; Illustrative Examples</h2>
      <p>These are the AP World framework anchors for this topic — verbatim from the College Board CED. Connect your lesson work directly to these key concepts.</p>
    </div>
    <div class="cb-framework-grid">
      ${keyConcepts.map(kc => `
        <article class="cb-card">
          <span class="cb-code">${kc.theme || kc.code}</span>
          <h3>${kc.code}</h3>
          <p>${kc.text}</p>
          ${kc.illustrativeExamples && kc.illustrativeExamples.length ? `
            <div class="cb-examples">
              <strong>Illustrative examples</strong>
              <ul>${kc.illustrativeExamples.map(ex => `<li>${ex}</li>`).join('')}</ul>
            </div>` : ''}
        </article>`).join('')}
    </div>`;
}

// ── Lecture cards ─────────────────────────────────────────────────────────────

function renderLectureCards() {
  byId('main-lecture-grid').innerHTML = (L.lecture.segments || []).map((seg, i) => `
    <article class="card dark-card lecture-topic-card" role="button" tabindex="0"
      onclick="openLectureModal(${i})"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLectureModal(${i})}">
      <h3>${seg.title}</h3>
      <ul class="lecture-list">${seg.bullets.map(b => `<li>${md(b)}</li>`).join('')}</ul>
    </article>`).join('');
}

// ── Video clips ───────────────────────────────────────────────────────────────

function renderVideoClips() {
  byId('content-video-clips').innerHTML = (L.lecture.videos || []).map(v => {
    const preview = videoPreviewImg(v);
    return `
      <article class="card video-card">
        <h3>Video Clip</h3>
        <div class="media-card">
          <div class="thumb video-thumb" style="${preview ? `background-image:linear-gradient(rgba(26,28,29,.25),rgba(26,28,29,.55)),url('${preview}')` : ''}">
            <span>Video Clip</span>
          </div>
          <p><strong>${v.title}</strong></p>
          <p>${v.prompt}</p>
          <a class="btn" href="${v.url}" target="_blank" rel="noopener">Open Video</a>
        </div>
      </article>`;
  }).join('');
}

// ── Module grid ───────────────────────────────────────────────────────────────

function defaultModules() {
  return [
    { id: 'map', label: 'Module 01', title: 'Map & Geography Check', desc: 'Connect geography to historical development.', img: moduleCardImg('map', L.map.url), render: renderMap },
    { id: 'first10', label: 'Module 02', title: 'First & 10 Reading', desc: 'Narrative foundation for the topic.', img: moduleCardImg('first10', L.map.url), render: renderFirst10 },
    { id: 'contentdelivery', label: 'Module 03', title: 'Content Delivery', desc: 'Jump down to the main lecture-card section.', img: moduleCardImg('contentdelivery', L.map.url), jump: '#lecture' },
    { id: 'besurreal', label: 'Module 04', title: 'BeSurreal', desc: 'A memorable everyday-life detail.', img: moduleCardImg('besurreal', L.map.url), render: renderBeSurreal },
    { id: 'skill', label: 'Module 05', title: 'AP Skill Builder', desc: (L.skillBuilder && L.skillBuilder.label) || 'Historical thinking practice.', img: moduleCardImg('skill', L.map.url), render: renderSkill },
    { id: 'checkpoint1', label: 'Module 06', title: 'Checkpoint 1', desc: (L.checkpoints && L.checkpoints[0] && L.checkpoints[0].cardDesc) || 'First checkpoint.', img: moduleCardImg('checkpoint1', L.map.url), render: () => renderCheckpoint(L.checkpoints[0], 'checkpoint-one-response') },
    { id: 'evidence', label: 'Module 07', title: 'Evidence Lab', desc: 'Analyze images and source evidence.', img: moduleCardImg('evidence', L.map.url), render: renderEvidence },
    { id: 'source', label: 'Module 08', title: 'Primary Source', desc: 'Read and interpret a source.', img: moduleCardImg('source', L.map.url), render: renderPrimarySource },
    ...(L.beInTheRoom && L.beInTheRoom.url ? [{ id: 'beintheroom', label: 'Module 09', title: 'BeInTheRoom', desc: L.beInTheRoom.desc, img: moduleCardImg('beintheroom', L.map.url), link: L.beInTheRoom.url }] : []),
    { id: 'checkpoint2', label: L.beInTheRoom ? 'Module 10' : 'Module 09', title: 'Checkpoint 2', desc: (L.checkpoints && L.checkpoints[1] && L.checkpoints[1].cardDesc) || 'Final checkpoint.', img: moduleCardImg('checkpoint2', L.map.url), render: () => renderCheckpoint(L.checkpoints[1], 'checkpoint-two-response') }
  ];
}

function renderModuleGrid() {
  window.BEHISTORICAL_MODULES = L.modules || defaultModules();
  byId('module-grid').innerHTML = window.BEHISTORICAL_MODULES.map(m => `
    <article class="module-card" role="button" tabindex="0"
      onclick="${m.link ? `openLinkedModule('${m.link}')` : m.jump ? `jumpToSection('${m.jump}')` : `openModule('${m.id}')`}"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${m.link ? `openLinkedModule('${m.link}')` : m.jump ? `jumpToSection('${m.jump}')` : `openModule('${m.id}')`}}"
      style="--module-img:url('${sanitizeImageUrl(m.img)}')">
      <div class="module-label">${m.label}</div>
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
    </article>`).join('');
}

// ── Modal controls ────────────────────────────────────────────────────────────

function openLinkedModule(url) { window.open(url, '_blank'); }
function jumpToSection(selector) { const el = document.querySelector(selector); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function openModule(id) {
  const mod = window.BEHISTORICAL_MODULES.find(m => m.id === id);
  if (!mod || mod.jump || mod.link) return;
  byId('pop-eyebrow').textContent = mod.label;
  byId('pop-title').textContent = mod.title;
  byId('pop-body').innerHTML = mod.render();
  byId('pop-modal').classList.add('show');
  loadAllDrafts();
}

function closeModule() { byId('pop-modal').classList.remove('show'); }

function openLectureModal(i) {
  const seg = L.lecture.segments[i];
  byId('lecture-modal-title').textContent = seg.title;
  byId('lecture-modal-bullets').innerHTML = seg.bullets.map(b => `<li>${md(b)}</li>`).join('');
  byId('lecture-modal-img').src = sanitizeImageUrl(seg.image.url);
  byId('lecture-modal-img').alt = seg.image.title;
  byId('lecture-modal-caption').innerHTML = `<strong>${seg.image.title}</strong><br>${seg.image.caption}<br><a href="${seg.image.sourceUrl || seg.image.url}" target="_blank" rel="noopener">Open image source</a>`;
  byId('lecture-modal').classList.add('show');
}

function closeLectureModal() { byId('lecture-modal').classList.remove('show'); }

// ── Module render functions ───────────────────────────────────────────────────

function renderMap() {
  if (L.map && L.map.embedUrl) {
    return `<div class="first10-note"><strong>${L.map.title}</strong><br>${L.map.note || 'Use the embedded map window below, then close this pop-out to return to the lesson path.'}</div><div class="first10-frame-wrap"><iframe class="first10-frame" src="${L.map.embedUrl}" title="${L.map.title}"></iframe></div>`;
  }
  return `
    <article class="card map-card">
      <div class="map-grid">
        <figure class="map-figure">
          <img src="${sanitizeImageUrl(L.map.url)}" alt="${L.map.title}" onclick="openMapLightbox()">
          <figcaption><strong>${L.map.caption}</strong><br><a class="source-link" href="${L.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a></figcaption>
        </figure>
        <div class="map-notes">
          <h3>${L.map.title}</h3>
          <p>${L.map.intro}</p>
          <ul>${(L.map.notes || []).map(n => `<li>${md(n)}</li>`).join('')}</ul>
          ${renderMapKey()}
          <div class="question"><strong>Map Question</strong><br>${L.map.prompt}</div>
          ${draftBlock('map-check-response', L.map.prompt, 'Map Check')}
        </div>
      </div>
    </article>`;
}

function renderMapKey() {
  return L.map.key && L.map.key.length ? `
    <div class="map-key">
      <h4>Map Key</h4>
      ${L.map.key.map(k => `<div class="map-key-item"><div class="map-key-label">${k.label}</div><div>${k.detail}</div></div>`).join('')}
    </div>` : '';
}

// ── First & 10 — questions feed the MagicSchool bridge ───────────────────────
//
// Student flow:
//   1. Read the First & 10 narrative
//   2. Answer the three historical thinking questions (each gets its own textarea)
//   3. Click "Build My AI Coach Prompt" — answers package into one MagicSchool prompt
//   4. Copy prompt → Open AI Coach → coaching conversation → move to lecture
//
// The old "one thing I noticed / one question I still have" fields are removed.
// The three First & 10 questions ARE the bridge. Nothing sits separately.

function renderFirst10() {
  const msUrl = (L.first10 && L.first10.magicSchoolBridge && L.first10.magicSchoolBridge.magicSchoolUrl)
    || (L.meta && L.meta.feedbackToolUrl)
    || 'https://app.magicschool.ai/';
  const canvasNote = (L.meta && L.meta.canvasSubmissionNote)
    || 'Use this space to organize your thinking. Your final response must be submitted in Canvas.';
  const topic = (L.meta && L.meta.topic) ? L.meta.topic : 'this topic';
  const topicTitle = (L.meta && L.meta.title) ? L.meta.title : '';
  const questions = (L.first10 && L.first10.questions) ? L.first10.questions : [];

  // Build question blocks — each question gets label + textarea
  const questionBlocks = questions.map((q, i) => `
    <div class="first10-q-block">
      <div class="question">
        <strong>Question ${i + 1}</strong><br>${q}
      </div>
      <textarea
        class="response-area"
        id="first10-q${i + 1}"
        data-response-type="First and 10 Q${i + 1}"
        placeholder="Write your answer here..."
      ></textarea>
      <div class="tool-row" style="margin-top:.4rem;">
        <button class="btn secondary" type="button" onclick="saveDraft('first10-q${i + 1}')">Save Draft</button>
      </div>
      <div id="first10-q${i + 1}-result" class="check-result"></div>
    </div>`).join('');

  // Embedded reading path
  if (L.first10.embedUrl) {
    return `
      <div class="first10-note">
        <strong>${L.first10.title}</strong><br>
        ${L.first10.note || 'Use the embedded reading window below, then answer the questions and build your AI Coach prompt.'}
      </div>
      <div class="first10-frame-wrap">
        <iframe class="first10-frame" src="${L.first10.embedUrl}" title="${L.first10.title}"></iframe>
      </div>
      <div class="card" style="margin-top:1.25rem;">
        <h3>First &amp; 10 Response Questions</h3>
        <p style="font-size:.85rem;opacity:.8;margin-bottom:1rem;">Answer all three questions. Your answers will build your AI Coach prompt.</p>
        ${questionBlocks}
      </div>
      ${renderFirst10AIBridge(msUrl, canvasNote, topic, topicTitle, questions)}`;
  }

  // Inline reading path
  return `
    <div class="card reading">
      <h3>${L.first10.title}</h3>
      ${L.first10.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="card" style="margin-top:1.25rem;">
      <h3>First &amp; 10 Response Questions</h3>
      <p style="font-size:.85rem;opacity:.8;margin-bottom:1rem;">Answer all three questions. Your answers will build your AI Coach prompt before you move to the lecture.</p>
      ${questionBlocks}
    </div>
    ${renderFirst10AIBridge(msUrl, canvasNote, topic, topicTitle, questions)}`;
}

// Renders the AI bridge block that sits below the question boxes
function renderFirst10AIBridge(msUrl, canvasNote, topic, topicTitle, questions) {
  return `
    <div class="magicschool-bridge first10-bridge" style="margin-top:1.25rem;">
      <h3>Take Your Thinking to the AI Coach</h3>
      <p>Before moving to the lecture, use your answers above to build your AI Coach prompt. The coach will ask you one question at a time to strengthen your historical reasoning.</p>
      <p style="font-size:.82rem;opacity:.85;margin:.5rem 0 .75rem;">Click <strong>Build My AI Coach Prompt</strong> to package your answers. Then copy and paste into the BeHistorical AI Coach.</p>
      <div class="copy-template">
        <p class="copy-template-text" id="first10-ms-preview">Your AI Coach prompt will appear here after you click Build My AI Coach Prompt.</p>
      </div>
      <div class="tool-row" style="margin-top:.75rem;">
        <button class="btn" type="button" onclick="generateFirst10Prompt()">Build My AI Coach Prompt</button>
        <button class="btn secondary" type="button" onclick="copyFirst10Prompt()">Copy Prompt</button>
        <a class="btn secondary" href="${msUrl}" target="_blank" rel="noopener">Open AI Coach</a>
      </div>
      <div id="first10-ms-result" class="check-result"></div>
      <p class="canvas-note">${canvasNote}</p>
    </div>`;
}

// ── First & 10 prompt generator ───────────────────────────────────────────────
//
// Reads each question textarea by ID (first10-q1, first10-q2, first10-q3),
// packages answers into a structured MagicSchool-ready prompt,
// and displays it in the preview block.

function generateFirst10Prompt() {
  const previewEl = byId('first10-ms-preview');
  const resultEl  = byId('first10-ms-result');
  const topic     = (L && L.meta && L.meta.topic)  ? L.meta.topic  : 'this topic';
  const topicTitle= (L && L.meta && L.meta.title)  ? L.meta.title  : '';
  const questions = (L && L.first10 && L.first10.questions) ? L.first10.questions : [];

  // Gather answers — fall back to placeholder if blank
  const answers = questions.map((q, i) => {
    const el  = byId(`first10-q${i + 1}`);
    const val = (el && el.value && el.value.trim()) ? el.value.trim() : '[no answer yet]';
    return `${i + 1}. ${val}`;
  });

  // Check that at least one answer is filled in
  const hasAnswer = answers.some(a => !a.includes('[no answer yet]'));
  if (!hasAnswer) {
    if (resultEl) resultEl.textContent = 'Answer at least one question above before building your prompt.';
    return;
  }

  // Build the structured MagicSchool prompt
  const prompt = [
    `${topic}, First & 10 Reflection${topicTitle ? ` — ${topicTitle}` : ''}.`,
    `I just read the First & 10 reading. Here are my responses:`,
    ``,
    ...answers,
    ``,
    `Please coach me by asking one question at a time. Help me strengthen my evidence, historical reasoning, and explanation. Do not write my final answer for me.`
  ].join('\n');

  if (previewEl) previewEl.textContent = prompt;
  if (resultEl)  resultEl.textContent  = 'Prompt ready — click Copy Prompt, then paste it into the BeHistorical AI Coach.';
}

function copyFirst10Prompt() {
  const previewEl = byId('first10-ms-preview');
  const resultEl  = byId('first10-ms-result');
  if (!previewEl || previewEl.textContent.includes('will appear here')) {
    generateFirst10Prompt();
    return;
  }
  navigator.clipboard.writeText(previewEl.textContent)
    .then(()  => { if (resultEl) resultEl.textContent = 'Prompt copied — paste it into the BeHistorical AI Coach.'; })
    .catch(()  => { if (resultEl) resultEl.textContent = 'Copy failed. Select the prompt text above and copy it manually.'; });
}

// ── BeSurreal ─────────────────────────────────────────────────────────────────

function renderBeSurreal() {
  const s = L.beSurreal || {};
  return `
    <article class="card">
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <div class="question"><strong>BeSurreal Question</strong><br>${s.prompt}</div>
    </article>`;
}

// ── Skill Builder ─────────────────────────────────────────────────────────────

function renderSkill() {
  const s = L.skillBuilder || {};
  return `
    <article class="card">
      <h3>${s.title}</h3>
      <p>${s.intro}</p>
      <div class="skill-steps">
        ${(s.steps || []).map(step => `<div class="skill-step"><strong>${step.label}</strong>${step.text}</div>`).join('')}
      </div>
      <div class="question"><strong>Skill Practice</strong><br>${s.prompt}</div>
    </article>
    ${draftBlock('skill-builder-response', s.prompt, 'AP Skill Builder')}`;
}

// ── Checkpoints — with MagicSchool bridge ────────────────────────────────────

function renderCheckpoint(cp, id) {
  if (!cp) return '<p>Checkpoint data not found.</p>';
  const msMode = cp.magicSchoolMode || (id === 'checkpoint-one-response' ? 'Checkpoint 1' : 'Checkpoint 2');
  const topic = (L && L.meta && L.meta.topic) ? L.meta.topic : 'Topic';
  const msUrl = (L && L.meta && L.meta.feedbackToolUrl) || 'https://app.magicschool.ai/';
  const canvasNote = (L && L.meta && L.meta.canvasSubmissionNote) || 'Use this space to organize your thinking. Your final response must be submitted in Canvas.';

  return `
    <div class="component-note"><strong>${cp.subtitle}</strong></div>
    <div class="pop-grid">
      <article class="card pop-half">
        <h3>Learning Target Checked</h3>
        <ul>${(cp.learningTargets || []).map(t => `<li>${t}</li>`).join('')}</ul>
      </article>
      <article class="card pop-half">
        <h3>Success Criteria Checked</h3>
        <ul>${(cp.successCriteria || []).map(c => `<li>${c}</li>`).join('')}</ul>
      </article>
    </div>
    <div class="checkpoint-grid">
      <article class="checkpoint-focus">
        <h4>Focus Terms</h4>
        <p>${(cp.terms || []).map(t => `<strong>${t}</strong>`).join(', ')}</p>
      </article>
      <article class="checkpoint-focus">
        <h4>Strong Answer Checklist</h4>
        <ul>${(cp.focus || []).map(f => `<li>${f}</li>`).join('')}</ul>
      </article>
    </div>
    ${responseBlock(id, cp.prompt, cp.responseType, cp.terms || [])}
    <div class="magicschool-bridge">
      <h3>Take Your Thinking to the AI Coach</h3>
      <p>After drafting your response above, open the BeHistorical AI Coach. Start your message with:</p>
      <div class="copy-template">
        <p class="copy-template-text" id="${id}-ms-preview">${topic}, ${msMode}. My response: [paste your response here]</p>
      </div>
      <div class="tool-row">
        <button class="btn secondary" type="button" onclick="copyCheckpointPrompt('${id}', '${msMode}')">Copy Prompt</button>
        <a class="btn" href="${msUrl}" target="_blank" rel="noopener">Open AI Coach</a>
      </div>
      <div id="${id}-ms-result" class="check-result"></div>
      <p class="canvas-note">${canvasNote}</p>
    </div>`;
}

// ── Checkpoint prompt copy ────────────────────────────────────────────────────

function copyCheckpointPrompt(responseId, msMode) {
  const responseEl = byId(responseId);
  const resultEl = byId(responseId + '-ms-result');
  const topic = (L && L.meta && L.meta.topic) ? L.meta.topic : 'Topic';
  const responseText = (responseEl && responseEl.value && responseEl.value.trim())
    ? responseEl.value.trim()
    : '[paste your response here]';
  const prompt = `${topic}, ${msMode}. My response: ${responseText}`;
  navigator.clipboard.writeText(prompt)
    .then(() => { if (resultEl) resultEl.textContent = 'Prompt copied — paste it into the BeHistorical AI Coach.'; })
    .catch(() => { if (resultEl) resultEl.textContent = 'Copy failed. Select and copy the prompt text manually.'; });
}

// ── Evidence Lab ──────────────────────────────────────────────────────────────

function renderEvidence() {
  return `
    <div class="component-note"><strong>${L.evidenceLab.title}</strong><br>${L.evidenceLab.task}</div>
    <div class="pop-grid">
      ${(L.images || []).map((img, i) => `
        <article class="card image-card pop-half">
          <img src="${sanitizeImageUrl(img.url)}" alt="${img.title}" onclick="openLightbox(${i})">
          <div class="image-caption">
            <strong>${img.title}</strong><br>${img.caption}<br><em>${img.prompt}</em><br>
            <a class="source-link" href="${img.sourceUrl || img.url}" target="_blank" rel="noopener">Open source/image</a>
          </div>
        </article>`).join('')}
    </div>
    ${draftBlock('evidence-response', L.evidenceLab.prompt, 'Evidence Lab')}`;
}

// ── Primary Source ────────────────────────────────────────────────────────────

function renderPrimarySource() {
  return `
    <div class="pop-grid">
      <article class="card pop-two-third">
        <h3>${L.primarySource.title}</h3>
        <p>${L.primarySource.intro}</p>
        <blockquote>${L.primarySource.text}</blockquote>
      </article>
      <aside class="card pop-third">
        <h3>Discussion Questions</h3>
        ${L.primarySource.questions.map((q, i) => `<div class="question"><strong>${i + 1}</strong><br>${q}</div>`).join('')}
      </aside>
    </div>
    ${draftBlock('primary-source-response', L.primarySource.questions.join(' '), 'Primary Source')}`;
}

// ── Shared response/draft blocks ──────────────────────────────────────────────

function draftBlock(id, prompt, responseType) {
  return `
    <div class="prompt-box">
      <h3>Draft Your Thinking</h3>
      <p>${prompt}</p>
      <textarea class="response-area" id="${id}" data-response-type="${responseType}" placeholder="Type your response here..."></textarea>
      <div class="tool-row">
        <button class="btn" type="button" onclick="saveDraft('${id}')">Save Draft</button>
        <button class="btn secondary" type="button" onclick="copyResponse('${id}')">Copy Response</button>
      </div>
      <div id="${id}-result" class="check-result"></div>
    </div>`;
}

function responseBlock(id, prompt, responseType, terms = []) {
  return `
    <div class="prompt-box">
      <h3>Write Your Response</h3>
      <p>${prompt}</p>
      <textarea class="response-area" id="${id}" data-response-type="${responseType}" data-terms="${terms.join('|')}" placeholder="Type your checkpoint response here..."></textarea>
      <div class="tool-row">
        <button class="btn" type="button" onclick="saveDraft('${id}')">Save Draft</button>
        <button class="btn secondary" type="button" onclick="copyResponse('${id}')">Copy Response</button>
        <button class="btn secondary" type="button" onclick="selfCheck('${id}')">Run Self-Check</button>
      </div>
      <div id="${id}-result" class="check-result"></div>
    </div>`;
}

// ── Draft / save / copy / self-check ─────────────────────────────────────────

function saveDraft(id) {
  const t = byId(id);
  if (!t) return;
  localStorage.setItem(`behistorical-draft-${id}`, t.value || '');
  byId(id + '-result').textContent = 'Draft saved on this device.';
}

function loadDraft(id) {
  const t = byId(id);
  if (!t) return;
  const saved = localStorage.getItem(`behistorical-draft-${id}`);
  if (saved) t.value = saved;
}

function loadAllDrafts() {
  document.querySelectorAll('textarea.response-area').forEach(t => loadDraft(t.id));
}

function copyResponse(id) {
  const t = byId(id);
  if (!t) return;
  navigator.clipboard.writeText(t.value || '')
    .then(() => byId(id + '-result').textContent = 'Response copied.')
    .catch(() => byId(id + '-result').textContent = 'Copy failed. Select your text and copy manually.');
}

function selfCheck(id) {
  const t = byId(id);
  if (!t) return;
  const text = (t.value || '').toLowerCase();
  const terms = (t.dataset.terms || '').split('|').filter(Boolean);
  const found = terms.filter(term => text.includes(term.toLowerCase()));
  byId(id + '-result').textContent = `Self-check: ${text.split(/\s+/).filter(Boolean).length} words; evidence terms found: ${found.length ? found.join(', ') : 'none yet'}.`;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function openLightbox(i) { const img = L.images[i]; openImageUrl(sanitizeImageUrl(img.url), `${img.title} — ${img.caption}`); }
function openMapLightbox() { openImageUrl(sanitizeImageUrl(L.map.url), `${L.map.title} — ${L.map.caption}`); }
function openImageUrl(url, caption) {
  byId('lightbox-img').src = sanitizeImageUrl(url);
  byId('lightbox-img').alt = caption;
  byId('lightbox-caption').textContent = caption;
  byId('lightbox').classList.add('show');
}
function closeLightbox() { byId('lightbox').classList.remove('show'); }

// ── Keyboard escape ───────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModule(); closeLightbox(); closeLectureModal(); }
});