(() => {
  'use strict';

  const scenario = window.BH_ROOM_SCENARIO;
  const app = document.getElementById('room-app');
  if (!scenario || !app) return;

  const storageKey = `behistorical-room-v2-${scenario.id}`;
  const initial = { role: '', evidence: [], decisions: {}, argument: '', tradeoff: '', opposition: '', reflection: '' };
  let state = load();

  function load() {
    try { return { ...initial, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; }
    catch { return { ...initial }; }
  }

  function save() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    updateProgress();
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }

  function roleCard(role) {
    const pressed = state.role === role.id;
    return `<button class="room-choice" type="button" data-role="${esc(role.id)}" aria-pressed="${pressed}">
      <span class="room-choice-title">${esc(role.name)}</span>
      <span class="room-choice-summary">${esc(role.position)}</span>
    </button>`;
  }

  function evidenceCard(item) {
    const pressed = state.evidence.includes(item.id);
    return `<button class="room-choice room-evidence" type="button" data-evidence="${esc(item.id)}" aria-pressed="${pressed}">
      <span class="room-choice-title">${esc(item.label)}</span>
      <span class="room-choice-summary">${esc(item.text)}</span>
    </button>`;
  }

  function optionCard(decision, option) {
    const pressed = state.decisions[decision.id] === option.id;
    return `<button class="room-choice" type="button" data-decision="${esc(decision.id)}" data-option="${esc(option.id)}" aria-pressed="${pressed}">
      <span class="room-choice-title">${esc(option.title)}</span>
      <span class="room-choice-summary">${esc(option.action)}</span>
      <span class="room-option-meta">
        <span><strong>Who benefits:</strong> ${esc(option.benefits)}</span>
        <span><strong>Who worries:</strong> ${esc(option.worries)}</span>
        <span><strong>Tradeoff:</strong> ${esc(option.tradeoff)}</span>
      </span>
    </button>`;
  }

  function render() {
    const title = scenario.title.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    app.innerHTML = `
      <nav class="room-topbar">
        <span class="room-brand">BeInTheRoom</span>
        <a class="room-back" href="${esc(scenario.lessonUrl)}">← Return to Topic ${esc(scenario.id)}</a>
      </nav>
      <header class="room-hero">
        <div class="room-hero-inner">
          <div class="room-kicker">Unit ${esc(scenario.unit)} · Topic ${esc(scenario.id)} · AP World History</div>
          <h1>${title}</h1>
          <div class="room-date">${esc(scenario.location)} · ${esc(scenario.date)}</div>
          <div class="room-premise">${scenario.premise.map(p => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="room-dilemma"><strong>Central dilemma:</strong> ${esc(scenario.centralQuestion)}</div>
        </div>
      </header>
      <main class="room-main">
        <section class="room-standard" aria-label="AP alignment">
          <div class="room-standard-item"><span class="room-card-label">Thematic focus</span><p>${esc(scenario.alignment.theme)}</p></div>
          <div class="room-standard-item"><span class="room-card-label">Learning objective</span><p>${esc(scenario.alignment.objective)}</p></div>
          <div class="room-standard-item"><span class="room-card-label">Reasoning skill</span><p>${esc(scenario.alignment.skill)}</p></div>
          <div class="room-standard-item"><span class="room-card-label">Key concepts</span><p>${esc(scenario.alignment.keyConcepts.join(' · '))}</p></div>
        </section>
        <div class="room-progress"><div class="room-progress-fill" id="room-progress-fill"></div></div>
        <div class="room-progress-label" id="room-progress-label"></div>

        <section class="room-section" id="role-section">
          <div class="room-step"><span class="room-step-num">1</span><span class="room-step-label">Choose a historical perspective</span></div>
          <p class="room-intro">Each role has real influence, real limits, and a blind spot. Choose the perspective you will defend.</p>
          <div class="room-grid" id="room-roles">${scenario.roles.map(roleCard).join('')}</div>
          <div id="room-role-detail"></div>
        </section>

        <section class="room-section" id="evidence-section">
          <div class="room-step"><span class="room-step-num">2</span><span class="room-step-label">Examine and select evidence</span></div>
          <p class="room-intro">Select at least two evidence cards. Strong recommendations connect facts to the role's goals and the decision's tradeoffs.</p>
          <div class="room-evidence-grid" id="room-evidence">${scenario.evidence.map(evidenceCard).join('')}</div>
          <div class="room-counter" id="room-evidence-count"></div>
        </section>

        <section class="room-section" id="decision-section">
          <div class="room-step"><span class="room-step-num">3</span><span class="room-step-label">Make the decisions</span></div>
          <p class="room-intro">There is no perfect answer. Choose one option for each decision and pay attention to who gains, who resists, and what your policy cannot solve.</p>
          ${scenario.decisions.map((decision, index) => `<article class="room-decision">
            <h3>${index + 1}. ${esc(decision.title)}</h3>
            <p class="room-decision-prompt">${esc(decision.prompt)}</p>
            <div class="room-grid" id="decision-${esc(decision.id)}">${decision.options.map(option => optionCard(decision, option)).join('')}</div>
          </article>`).join('')}
        </section>

        <section class="room-section" id="builder-section">
          <div class="room-step"><span class="room-step-num">4</span><span class="room-step-label">Build your position</span></div>
          <div class="room-builder">
            <div class="room-field full"><label for="room-argument">Your historically defensible recommendation</label><textarea id="room-argument" placeholder="State what your role recommends, explain why, and use specific selected evidence.">${esc(state.argument)}</textarea></div>
            <div class="room-field"><label for="room-tradeoff">The most serious cost or limitation</label><textarea id="room-tradeoff" placeholder="What is risky, costly, or incomplete about your recommendation?">${esc(state.tradeoff)}</textarea></div>
            <div class="room-field"><label for="room-opposition">The strongest opposing perspective</label><textarea id="room-opposition" placeholder="Which role would disagree, and what evidence supports that disagreement?">${esc(state.opposition)}</textarea></div>
          </div>
        </section>

        <section class="room-section" id="coach-section">
          <div class="room-step"><span class="room-step-num">5</span><span class="room-step-label">Use the AI Coach</span></div>
          <p class="room-intro">Build a prompt that asks the coach to question and strengthen your reasoning without writing the answer for you.</p>
          <div class="room-actions">
            <button class="room-button" id="room-build-prompt" type="button">Build AI Coach prompt</button>
            <button class="room-button secondary" id="room-copy-prompt" type="button">Copy prompt</button>
            <a class="room-button magic" href="https://student.magicschool.ai/s/login?joinCode=czwb9Q" target="_blank" rel="noopener">Open MagicSchool</a>
          </div>
          <div class="room-status" id="room-status" role="status" aria-live="polite"></div>
          <div class="room-prompt" id="room-prompt" tabindex="0">Your prompt will appear here after your selections and draft are complete.</div>
        </section>

        <section class="room-section room-reflection" id="reflection-section">
          <div class="room-step"><span class="room-step-num">6</span><span class="room-step-label">Step out of the room</span></div>
          <p class="room-intro">${esc(scenario.reflectionPrompt)}</p>
          <div class="room-field"><label for="room-reflection">AP reflection</label><textarea id="room-reflection" placeholder="Step out of character and explain what this dilemma reveals about Topic ${esc(scenario.id)}.">${esc(state.reflection)}</textarea></div>
          <h3>Historical references consulted</h3>
          <ul class="room-source-list">${scenario.sources.map(source => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener">${esc(source.label)}</a></li>`).join('')}</ul>
        </section>
      </main>
      <footer class="room-footer">BeHistorical · BeInTheRoom · Topic ${esc(scenario.id)}</footer>`;

    bind();
    updateRoleDetail();
    updateEvidenceCount();
    updateProgress();
  }

  function bind() {
    document.querySelectorAll('[data-role]').forEach(button => button.addEventListener('click', () => {
      state.role = button.dataset.role;
      document.querySelectorAll('[data-role]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      updateRoleDetail();
      save();
    }));

    document.querySelectorAll('[data-evidence]').forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.evidence;
      state.evidence = state.evidence.includes(id) ? state.evidence.filter(item => item !== id) : [...state.evidence, id];
      button.setAttribute('aria-pressed', String(state.evidence.includes(id)));
      updateEvidenceCount();
      save();
    }));

    document.querySelectorAll('[data-decision]').forEach(button => button.addEventListener('click', () => {
      const decision = button.dataset.decision;
      state.decisions[decision] = button.dataset.option;
      document.querySelectorAll(`[data-decision="${decision}"]`).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      save();
    }));

    ['argument', 'tradeoff', 'opposition', 'reflection'].forEach(field => {
      const element = document.getElementById(`room-${field}`);
      element.addEventListener('input', () => { state[field] = element.value; save(); });
    });

    document.getElementById('room-build-prompt').addEventListener('click', buildPrompt);
    document.getElementById('room-copy-prompt').addEventListener('click', copyPrompt);
  }

  function updateRoleDetail() {
    const container = document.getElementById('room-role-detail');
    const role = scenario.roles.find(item => item.id === state.role);
    if (!role) { container.innerHTML = ''; return; }
    container.innerHTML = `<div class="room-detail"><h3>${esc(role.name)}</h3><div class="room-detail-grid">
      <p><strong>Power and limits:</strong> ${esc(role.power)}</p><p><strong>Goals:</strong> ${esc(role.goals)}</p>
      <p><strong>Fears:</strong> ${esc(role.fears)}</p><p><strong>Historical lens:</strong> ${esc(role.lens)}</p>
      <p><strong>Likely preference:</strong> ${esc(role.preference)}</p><p><strong>Blind spot:</strong> ${esc(role.blindSpot)}</p>
    </div></div>`;
  }

  function updateEvidenceCount() {
    const counter = document.getElementById('room-evidence-count');
    counter.textContent = `${state.evidence.length} selected · minimum 2`;
    counter.classList.toggle('ready', state.evidence.length >= 2);
  }

  function completion() {
    const checks = [state.role, state.evidence.length >= 2, scenario.decisions.every(item => state.decisions[item.id]), state.argument.trim(), state.tradeoff.trim(), state.opposition.trim(), state.reflection.trim()];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }

  function updateProgress() {
    const value = completion();
    document.getElementById('room-progress-fill').style.width = `${value}%`;
    document.getElementById('room-progress-label').textContent = `${value}% complete · saved locally on this device`;
  }

  function selectedRole() { return scenario.roles.find(item => item.id === state.role); }
  function selectedEvidence() { return state.evidence.map(id => scenario.evidence.find(item => item.id === id)).filter(Boolean); }
  function selectedDecisions() {
    return scenario.decisions.map(decision => ({ decision, option: decision.options.find(item => item.id === state.decisions[decision.id]) })).filter(item => item.option);
  }

  function buildPrompt() {
    const status = document.getElementById('room-status');
    const missing = [];
    if (!state.role) missing.push('choose a role');
    if (state.evidence.length < 2) missing.push('select at least two evidence cards');
    if (!scenario.decisions.every(item => state.decisions[item.id])) missing.push('complete every decision');
    if (!state.argument.trim()) missing.push('draft your recommendation');
    if (!state.tradeoff.trim()) missing.push('identify a tradeoff');
    if (!state.opposition.trim()) missing.push('address an opposing perspective');
    if (missing.length) {
      status.classList.remove('success');
      status.textContent = `Before building: ${missing.join('; ')}.`;
      return;
    }

    const role = selectedRole();
    const facts = selectedEvidence().map(item => `- ${item.label}: ${item.text}`);
    const decisions = selectedDecisions().map(item => `- ${item.decision.title}: ${item.option.title} — ${item.option.action}`);
    const prompt = `You are the BeInTheRoom Historical Thinking Coach for an AP World History student. Ask one question at a time. Do not write my final answer. Help me test accuracy, connect evidence to claims, recognize tradeoffs, and revise my reasoning.\n\nScenario: ${scenario.title.replaceAll('*', '')}\nTopic: ${scenario.id} — ${scenario.topicTitle}\nCentral dilemma: ${scenario.centralQuestion}\n\nMy role: ${role.name}\nPower and limits: ${role.power}\nGoals: ${role.goals}\nFears: ${role.fears}\nBlind spot: ${role.blindSpot}\n\nMy decisions:\n${decisions.join('\n')}\n\nMy selected evidence:\n${facts.join('\n')}\n\nMy first draft:\n${state.argument}\n\nTradeoff or risk:\n${state.tradeoff}\n\nStrongest opposing perspective:\n${state.opposition}\n\nCoach me through role understanding, evidence, tradeoffs, opposing perspectives, and historical reasoning. End by asking me to revise in 4–6 sentences and then step out of character to explain what this scenario reveals about Topic ${scenario.id}.`;
    document.getElementById('room-prompt').textContent = prompt;
    status.classList.add('success');
    status.textContent = 'Prompt built. Read it once, then copy it to the AI Coach.';
    save();
  }

  async function copyPrompt() {
    const prompt = document.getElementById('room-prompt').textContent;
    const status = document.getElementById('room-status');
    if (prompt.startsWith('Your prompt')) { buildPrompt(); return; }
    try {
      await navigator.clipboard.writeText(prompt);
      status.classList.add('success');
      status.textContent = 'Prompt copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('room-prompt'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Clipboard access was unavailable; the prompt text is selected for manual copying.';
    }
  }

  render();
})();
