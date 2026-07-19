(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.mapKey = [
    { label: 'Song Dynasty territory', detail: 'Core area ruled by the Song state shown on the map.' },
    { label: 'Liao and Western Xia', detail: 'Neighboring states that help explain frontier pressure, diplomacy, and military concerns.' },
    { label: 'Major East Asian context', detail: 'The map should be read as part of a wider East Asian world of exchange, influence, and conflict.' },
    { label: 'Geographic takeaway', detail: 'Song China needed bureaucracy, infrastructure, revenue, and trade systems to hold together a complex state.' }
  ];

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.2.I.A',
      text: 'Song China utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.III.D.i',
      text: 'Chinese cultural traditions continued, and they influenced neighboring regions.',
      illustrativeExamples: ['Filial piety', 'Neo-Confucianism']
    },
    {
      code: 'KC-3.1.III.D.ii',
      text: 'Buddhism and its core beliefs continued to shape societies in Asia and included a variety of branches, schools, and practices.',
      illustrativeExamples: ['Theravada', 'Mahayana', 'Tibetan']
    },
    {
      code: 'KC-3.3.III.A.i',
      text: 'The economy of Song China became increasingly commercialized while continuing to depend on free peasant and artisan labor.',
      illustrativeExamples: ['Champa rice', 'Grand Canal', 'Flying cash']
    },
    {
      code: 'KC-3.1.I.D',
      text: "The expansion of empires, including the Song Dynasty, facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors' economies and trade networks.",
      illustrativeExamples: []
    }
  ];

  function addStyles() {
    if (document.getElementById('topic-11-standards-styles')) return;
    const style = document.createElement('style');
    style.id = 'topic-11-standards-styles';
    style.textContent = `
      .college-board-framework{margin-top:-10px}.cb-framework-grid{display:grid;grid-template-columns:1fr;gap:16px}.cb-card{background:var(--clean-paper);border:1px solid var(--paper-line);border-left:7px solid var(--aged-iron);border-radius:18px;padding:20px;box-shadow:var(--soft-shadow)}.cb-card h3{font-family:"Cinzel","Trajan Pro","Times New Roman",Georgia,serif;color:var(--blackened-steel);margin:0 0 10px}.cb-code{display:inline-flex;margin-bottom:10px;padding:5px 10px;border-radius:999px;background:#f1e6d3;color:var(--oxidized-brown);font-family:"Montserrat",Inter,Arial,sans-serif;font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.cb-card p{margin:0 0 12px;line-height:1.55}.cb-examples{margin-top:10px;padding-top:10px;border-top:1px solid rgba(26,28,29,.1)}.cb-examples strong{font-family:"Montserrat",Inter,Arial,sans-serif;color:var(--oxidized-brown);text-transform:uppercase;letter-spacing:.08em;font-size:.72rem}.cb-examples ul{margin:8px 0 0}.map-key{margin-top:16px;background:#f6efe3;border-left:6px solid var(--aged-iron);border-radius:14px;padding:14px 16px}.map-key h4{margin:0 0 10px;font-family:"Montserrat",Inter,Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;color:var(--oxidized-brown)}.map-key-item{display:grid;grid-template-columns:minmax(150px,.45fr) 1fr;gap:10px;padding:8px 0;border-top:1px solid rgba(26,28,29,.1)}.map-key-item:first-of-type{border-top:0}.map-key-label{font-weight:900;color:var(--blackened-steel)}.first10-frame-wrap{width:100%;height:72vh;border:1px solid rgba(26,28,29,.12);border-radius:18px;overflow:hidden;background:var(--blackened-steel);box-shadow:var(--soft-shadow)}.first10-frame{width:100%;height:100%;border:0;display:block}.first10-note{margin:0 0 14px;background:#f6efe3;border-left:6px solid var(--burnished-bronze);border-radius:14px;padding:14px 16px;color:var(--ink)}@media(max-width:720px){.map-key-item{grid-template-columns:1fr}.first10-frame-wrap{height:78vh}}
    `;
    document.head.appendChild(style);
  }

  function renderKeyConceptSection() {
    const targetSection = document.getElementById('learning-targets');
    if (!targetSection || document.getElementById('college-board-key-concepts')) return;
    const section = document.createElement('section');
    section.className = 'section college-board-framework';
    section.id = 'college-board-key-concepts';
    section.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">College Board Framework</div>
        <h2>Key Concepts &amp; Illustrative Examples</h2>
        <p>These are the AP World framework anchors for Topic 1.1. The Key Concept language is included directly below the Learning Targets and Success Criteria so students can connect the lesson work to the College Board framework.</p>
      </div>
      <div class="cb-framework-grid">
        ${lesson.collegeBoardKeyConcepts.map(kc => `
          <article class="cb-card">
            <span class="cb-code">${kc.code}</span>
            <h3>${kc.code}</h3>
            <p>${kc.text}</p>
            ${kc.illustrativeExamples && kc.illustrativeExamples.length ? `
              <div class="cb-examples"><strong>Illustrative examples</strong><ul>${kc.illustrativeExamples.map(ex => `<li>${ex}</li>`).join('')}</ul></div>
            ` : ``}
          </article>
        `).join('')}
      </div>
    `;
    targetSection.insertAdjacentElement('afterend', section);
  }

  function mapKeyHtml() {
    return `<div class="map-key" id="song-map-key"><h4>Map Key</h4>${lesson.mapKey.map(k => `<div class="map-key-item"><div class="map-key-label">${k.label}</div><div>${k.detail}</div></div>`).join('')}</div>`;
  }

  function injectMapKey() {
    const popBody = document.getElementById('pop-body');
    if (!popBody || document.getElementById('song-map-key')) return;
    const mapNotes = popBody.querySelector('.map-notes');
    if (mapNotes) {
      const question = mapNotes.querySelector('.question');
      if (question) question.insertAdjacentHTML('beforebegin', mapKeyHtml());
      else mapNotes.insertAdjacentHTML('beforeend', mapKeyHtml());
    }
  }

  function observeMapModule() {
    const popBody = document.getElementById('pop-body');
    if (!popBody || popBody.dataset.mapKeyObserved) return;
    popBody.dataset.mapKeyObserved = 'true';
    const observer = new MutationObserver(() => injectMapKey());
    observer.observe(popBody, { childList: true, subtree: true });
    document.addEventListener('click', event => {
      const card = event.target.closest('.module-card');
      if (card && card.textContent.includes('Map & Geography Check')) setTimeout(injectMapKey, 60);
    });
  }

  function openFirstAndTenPopout() {
    const modal = document.getElementById('pop-modal');
    const eyebrow = document.getElementById('pop-eyebrow');
    const title = document.getElementById('pop-title');
    const body = document.getElementById('pop-body');
    if (!modal || !eyebrow || !title || !body) return;
    eyebrow.textContent = 'Module 02';
    title.textContent = 'First & 10 Reading';
    body.innerHTML = `
      <div class="first10-note"><strong>The World That Song Built</strong><br>This upgraded First &amp; 10 remains inside the lesson pop-out system. Use the embedded reading window below, then close this pop-out to return to the 1.1 lesson path.</div>
      <div class="first10-frame-wrap"><iframe class="first10-frame" src="first-and-10-topic-1-1-song-china.html" title="First and 10 Reading: The World That Song Built"></iframe></div>
    `;
    modal.classList.add('show');
  }

  function connectUpgradedFirstAndTen() {
    const handleFirstAndTen = event => {
      const card = event.target.closest('.module-card');
      if (!card || !card.textContent.includes('First & 10 Reading')) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      openFirstAndTenPopout();
    };
    document.addEventListener('click', handleFirstAndTen, true);
    document.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      handleFirstAndTen(event);
    }, true);
  }

  function init() {
    addStyles();
    renderKeyConceptSection();
    observeMapModule();
    connectUpgradedFirstAndTen();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
