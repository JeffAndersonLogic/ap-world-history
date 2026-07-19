// lesson-7-8-renderer-config.js
// Topic 7.8, Mass Atrocities After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus is SIO (Social Interactions and Organization), NOT
// GOV from Topic 7.7. This is the first SIO topic in Unit 7. Do NOT carry the
// GOV text forward from the 7.7 config.
// DESIGN DECISION: Topic 7.8 has NO BeInTheRoom scenario. Students are never
// placed in a decision-making role inside a genocide. Module 09 is replaced by
// a Causes & Consequences Matrix, a structured analysis module. Students
// analyze as historians; they never role-play as participants.
// IMAGE POLICY: No images anywhere in this lesson, not on cards and not in
// modals. Lecture segment image objects carry empty URLs intentionally.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Social Interactions and Organization (SIO)',
      theme: 'Social Interactions and Organization',
      text: 'The process by which societies group their members and the norms that govern the interactions between these groups and between individuals influence political, economic, and cultural institutions and organization.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective H',
      theme: 'Learning Objective',
      text: 'Explain the various causes and consequences of mass atrocities in the period from 1900 to the present.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.III.C',
      theme: 'Social Interactions and Organization',
      text: 'The rise of extremist groups in power led to the attempted destruction of specific populations, notably the Nazi killing of the Jews in the Holocaust during World War II, and to other atrocities, acts of genocide, or ethnic violence.',
      illustrativeExamples: [
        'Genocide, ethnic violence, or attempted destruction of specific populations:',
        'Armenians in the Ottoman Empire during and after World War I',
        'Cambodia during the late 1970s',
        'Tutsi in Rwanda in the 1990s',
        'Ukraine in the Soviet Union in the 1920s and 1930s'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Mass Atrocities After 1900',
    embedUrl: 'first-and-10-topic-7-8-mass-atrocities-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Extremism in power', detail: 'The Key Concept names the cause: the rise of extremist groups in power led to the attempted destruction of specific populations. The named example is the Holocaust, the Nazi killing of the Jews, but the illustrative examples span the century from World War I to the 1990s.' },
      { label: 'Ottoman Empire / Armenia', detail: 'Armenians in the Ottoman Empire during and after World War I. The Young Turk government launched mass deportation and extermination during the empire’s collapse and the pressures of WWI.' },
      { label: 'Soviet Ukraine', detail: 'Ukraine in the Soviet Union in the 1920s and 1930s. The Holodomor, a man-made famine produced by forced collectivization and grain requisitioning, targeted Ukrainian nationalism and consolidated state control.' },
      { label: 'Cambodia', detail: 'Cambodia during the late 1970s. The Khmer Rouge under Pol Pot attempted a radical agrarian communist transformation, targeting intellectuals, professionals, and ethnic minorities.' },
      { label: 'Rwanda', detail: 'Tutsi in Rwanda in the 1990s. The Hutu majority government targeted the Tutsi population, exploiting ethnic divisions entrenched by colonial policies.' }
    ]
  };

  lesson.stableImages = {
    map: lesson.map.url,
    first10: lesson.map.url,
    contentDelivery: lesson.map.url,
    beSurreal: lesson.map.url,
    skill: lesson.map.url,
    checkpoint1: lesson.map.url,
    evidence: lesson.map.url,
    source: lesson.map.url,
    matrix: lesson.map.url,
    checkpoint2: lesson.map.url
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Man Who Named It',
    text: 'Raphael Lemkin was a Polish-Jewish lawyer who spent years trying to convince the world that what had happened to the Armenians, and later to the Jews, needed its own word. He argued that the world could not outlaw something it could not name. In 1944, he combined the Greek word genos (race, tribe) with the Latin suffix -cide (killing) and introduced the term genocide in his book Axis Rule in Occupied Europe. Lemkin then spent years lobbying delegates at the newly formed United Nations, sleeping on park benches and surviving on donated meals. In 1948, the UN General Assembly adopted the Convention on the Prevention and Punishment of the Crime of Genocide, the first human rights treaty the UN approved. Lemkin had given the act a name, and that name became the legal foundation for international prosecution. He died in 1959 in a New York apartment, largely forgotten, with unpaid rent.',
    prompt: 'Lemkin argued that the world could not outlaw what it could not name. How does the creation of the word “genocide”, and the Convention that followed, illustrate the connection between how societies define an act and how they respond to it? What does Lemkin’s story suggest about the gap between naming a crime and preventing it?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Mapping Causes: From Extremism to Atrocity',
    intro: 'Topic 7.8 is built for the causation skill: the Learning Objective asks for causes AND consequences of mass atrocities. A weak answer lists events; a strong one names the cause precisely, connects it to a specific outcome, and explains why the cause produced that outcome. Build the causal chain below.',
    steps: [
      { label: 'Name the cause (with evidence)', text: 'The Key Concept identifies the cause: the rise of extremist groups in power. Pick one illustrative example and name the specific extremist ideology and the group that held power, the Nazi regime and racial supremacy, the Young Turk government and ethnic nationalism, Stalin’s regime and forced collectivization, the Khmer Rouge and radical agrarian communism, or the Hutu Power movement and colonial-era ethnic divisions.' },
      { label: 'Name the consequence (with evidence)', text: 'Identify a specific consequence of the atrocity you chose. Consequences include: the cultural trauma carried by survivors and descendants; international legal frameworks (the Genocide Convention, the ICC); political change (post-genocide reconciliation in Rwanda); or the global awareness and human rights advocacy that followed.' },
      { label: 'Explain the causal connection', text: 'Finish by explaining WHY the cause produced the consequence. Strong causal reasoning does not just say “A happened, then B happened”, it explains the mechanism. For example: the Holocaust revealed that existing international law had no framework for prosecuting the systematic destruction of a people, which directly motivated the drafting of the Genocide Convention in 1948.' }
    ],
    prompt: 'In three to four sentences, explain one cause and one consequence of a mass atrocity after 1900. Name the specific extremist group in power, the specific population targeted, and a specific consequence. Explain why the cause produced the consequence, do not just list events in order.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Extremism and the Attempted Destruction of Populations',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Extremist groups in power and the causes of mass atrocities across five cases.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the rise of extremist groups in power led to the attempted destruction of specific populations after 1900. Use evidence from at least two cases (the Holocaust, the Armenian Genocide, the Holodomor, Cambodia, or Rwanda) and identify the specific causes, the ideology in power, the targeted population, and the conditions that enabled the atrocity.',
      responseType: 'Checkpoint 1',
      terms: ['extremist groups', 'attempted destruction', 'Holocaust', 'Armenian Genocide', 'Holodomor', 'Khmer Rouge', 'Tutsi', 'genocide', 'ethnic violence', 'dehumanization'],
      focus: ['Name the extremist group in power and its ideology for at least two cases.', 'Identify the targeted population in each case.', 'Explain the conditions that enabled each atrocity, not just what happened, but why.']
    },
    {
      title: 'Checkpoint 2: Consequences of Mass Atrocities',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'Cultural trauma, legal frameworks, and political change as consequences.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the consequences of mass atrocities after 1900. Use specific evidence to discuss at least two types of consequences, cultural trauma carried by survivors and descendants, international legal frameworks (the Genocide Convention, the ICC), political change and reconciliation efforts, or global awareness and human rights advocacy. Explain how the atrocities produced these consequences.',
      responseType: 'Checkpoint 2',
      terms: ['cultural trauma', 'Genocide Convention', 'International Criminal Court', 'ICC', 'reconciliation', 'human rights', 'international law', 'survivors', 'consequences', 'prevention'],
      focus: ['Name at least two specific consequences with evidence.', 'Explain the causal connection, how the atrocities produced these consequences.', 'Consider both immediate consequences (trauma, political change) and long-term consequences (legal frameworks, advocacy).']
    }
  ];

  // ── Matrix module render function ─────────────────────────────────────────────
  // Replaces BeInTheRoom for Topic 7.8. Students analyze as historians; they
  // never role-play as participants in a genocide.

  var MATRIX_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+7+-+Global+Conflict&entry.187055090=7.8+-+Mass+Atrocities&entry.1549761827=7.8-matrix-analysis&entry.2107637366=BeInTheRoom';

  function matrixRow(caseName, regime, conditions, target, consequences) {
    var cs = 'padding:.55rem .8rem;border:1px solid var(--gunmetal-gray,#3E4447);color:var(--warm-paper,#F5F0E7);line-height:1.55;vertical-align:top;';
    return '<tr>' +
      '<td style="' + cs + 'font-weight:700;">' + caseName + '</td>' +
      '<td style="' + cs + '">' + regime + '</td>' +
      '<td style="' + cs + '">' + conditions + '</td>' +
      '<td style="' + cs + '">' + target + '</td>' +
      '<td style="' + cs + '">' + consequences + '</td>' +
      '</tr>';
  }

  window.renderMatrix = function() {
    var canvasNote = lesson.meta.canvasSubmissionNote || 'Organize your thinking here, submit your final work in Canvas.';

    return '<div class="component-note"><strong>Causes &amp; Consequences Matrix</strong><br>Map the causes, conditions, targets, and consequences across the five cases of mass atrocity. Use the matrix to identify what the cases share and what differs, then write the synthesis prompt below.</div>' +
      '<div style="overflow-x:auto;margin:1rem 0;">' +
      '<table style="width:100%;border-collapse:collapse;font-family:var(--font-ui,Montserrat,sans-serif);font-size:.78rem;">' +
      '<thead><tr style="background:var(--charcoal-steel,#2B2F31);color:var(--antique-gold,#C9A46A);">' +
      '<th style="padding:.65rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447);font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Case</th>' +
      '<th style="padding:.65rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447);font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Regime &amp; Ideology</th>' +
      '<th style="padding:.65rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447);font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Conditions That Enabled It</th>' +
      '<th style="padding:.65rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447);font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Targeted Population</th>' +
      '<th style="padding:.65rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447);font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Consequences &amp; Aftermath</th>' +
      '</tr></thead><tbody>' +
      matrixRow('The Holocaust', 'Nazi regime, racial supremacy, antisemitism', 'WWII, unchecked state power, propaganda dehumanizing Jews', 'Jews (approx. 6 million killed), Roma, disabled, political prisoners', 'Nuremberg Trials, Genocide Convention (1948), lasting cultural trauma, state of Israel') +
      matrixRow('Armenian Genocide', 'Young Turk government, ethnic nationalism', 'WWI, Ottoman collapse, fear of disloyalty', 'Armenians in the Ottoman Empire (est. 1.5 million killed)', 'Diaspora communities, long campaign for international recognition, term “genocide” coined in response') +
      matrixRow('Holodomor', 'Stalin’s Soviet regime, forced collectivization', 'Five-Year Plans, command economy, suppression of nationalism', 'Ukrainians (millions perished)', 'Lasting national trauma, suppressed history under Soviet rule, post-independence recognition') +
      matrixRow('Cambodia', 'Khmer Rouge under Pol Pot, radical agrarian communism', 'Cold War instability, regime seized total control', 'Intellectuals, professionals, ethnic minorities (est. 1.7 million deaths)', 'Vietnamese intervention, tribunal decades later, devastated society rebuilt') +
      matrixRow('Rwanda', 'Hutu Power movement, colonial-era ethnic divisions', 'Civil war, assassination of president, international inaction', 'Tutsi and moderate Hutus (est. 800,000 killed in ~100 days)', 'Gacaca courts, national reconciliation, ICC precedents, failure-to-intervene debate') +
      '</tbody></table></div>' +
      '<div class="prompt-box" style="margin-top:1.25rem;">' +
      '<h3>Synthesis Prompt</h3>' +
      '<p>Using evidence from at least two cases, explain ONE cause and ONE consequence that mass atrocities after 1900 had in common.</p>' +
      '<textarea class="response-area" id="matrix-response" data-response-type="Matrix Analysis" placeholder="Type your response here..."></textarea>' +
      '<div class="tool-row">' +
      '<button class="btn" type="button" onclick="saveDraft(\'matrix-response\')">Save Draft</button>' +
      '<button class="btn secondary" type="button" onclick="copyResponse(\'matrix-response\')">Copy Response</button>' +
      '<a class="btn-capture" href="' + MATRIX_FORM_URL + '" target="_blank" rel="noopener">Submit to Form</a>' +
      '</div>' +
      '<div id="matrix-response-result" class="check-result"></div>' +
      '<p class="canvas-note">' + canvasNote + '</p>' +
      '</div>';
  };

  // ── Custom 10-module grid ─────────────────────────────────────────────────────
  // Module 09 is the Causes & Consequences Matrix (replaces BeInTheRoom).
  // Functions like renderMap, renderFirst10, etc. are defined in the shared
  // renderer which loads after this config; the closures below defer lookup to
  // call time so the references resolve correctly.

  lesson.modules = [
    { id: 'map', label: 'Module 01', title: 'Map & Geography Check', desc: 'Connect geography to historical development.', img: lesson.map.url, render: function() { return renderMap(); } },
    { id: 'first10', label: 'Module 02', title: 'First & 10 Reading', desc: 'Narrative foundation for the topic.', img: lesson.map.url, render: function() { return renderFirst10(); } },
    { id: 'contentdelivery', label: 'Module 03', title: 'Content Delivery', desc: 'Jump down to the main lecture-card section.', img: lesson.map.url, jump: '#lecture' },
    { id: 'besurreal', label: 'Module 04', title: 'BeSurreal', desc: 'A memorable detail about language and law.', img: lesson.map.url, render: function() { return renderBeSurreal(); } },
    { id: 'skill', label: 'Module 05', title: 'AP Skill Builder', desc: (lesson.skillBuilder && lesson.skillBuilder.label) || 'Causation practice.', img: lesson.map.url, render: function() { return renderSkill(); } },
    { id: 'checkpoint1', label: 'Module 06', title: 'Checkpoint 1', desc: (lesson.checkpoints && lesson.checkpoints[0] && lesson.checkpoints[0].cardDesc) || 'First checkpoint.', img: lesson.map.url, render: function() { return renderCheckpoint(lesson.checkpoints[0], 'checkpoint-one-response'); } },
    { id: 'evidence', label: 'Module 07', title: 'Evidence Lab', desc: 'Analyze text-based source evidence.', img: lesson.map.url, render: function() { return renderEvidence(); } },
    { id: 'source', label: 'Module 08', title: 'Primary Source', desc: 'Read and interpret a source.', img: lesson.map.url, render: function() { return renderPrimarySource(); } },
    { id: 'matrix', label: 'Module 09', title: 'Causes & Consequences Matrix', desc: 'Map causes, conditions, targets, and consequences across five cases.', img: lesson.map.url, render: function() { return renderMatrix(); } },
    { id: 'checkpoint2', label: 'Module 10', title: 'Checkpoint 2', desc: (lesson.checkpoints && lesson.checkpoints[1] && lesson.checkpoints[1].cardDesc) || 'Final checkpoint.', img: lesson.map.url, render: function() { return renderCheckpoint(lesson.checkpoints[1], 'checkpoint-two-response'); } }
  ];

})();
