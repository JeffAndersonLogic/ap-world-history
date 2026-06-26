// lesson-7-9-renderer-config.js
// Topic 7.9 — Causation in Global Conflict
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// THEMATIC FOCUS: The CED provides NO thematic focus for Topic 7.9. The
// collegeBoardKeyConcepts array below opens directly with the Learning
// Objective, with no Thematic Focus entry — do not add one.
//
// MODULE STRUCTURE: Topic 7.9 is the Unit 7 capstone. Module 09 is the
// Causation Matrix, a synthesis module providing the sixth capture point.
// lesson.modules is set as a custom 10-module array; the renderer's
// defaultModules() is bypassed.
//
// KC COUNT: 13 Key Concepts exactly. Do not add KC-6.2.I.B or KC-6.3 series.
// No illustrative examples block for this topic.
//
// HIGH-RISK VERBATIM FLAGS (verified against CED working copy):
//   KC-6.1.III.C.ii — quotation marks around "total war" are verbatim CED.
//   KC-6.2.IV.B.ii — "especially" and "engendered by" are verbatim CED.
//   KC-6.2.IV.A.ii — "colonies or former colonies" and second sentence on
//     ideologies/totalitarian repression are verbatim CED.
//   KC-6.2.I.A — "eventually led to communist revolution" is verbatim CED.
//   KC-6.2.II.D — "political crisis" end phrase is verbatim CED.
// ─────────────────────────────────────────────────────────────────────────────

// renderCausationMatrix is defined in global scope so it is accessible
// via the mod.render() call inside openModule() after the renderer loads.
window.renderCausationMatrix = function () {
  var L = window.BEHISTORICAL_LESSON;
  var cm = (L && L.causationMatrix) || {};
  var rows = cm.rows || [
    'Imperialist expansion and competition for resources',
    'Intense nationalism',
    'Alliance systems and diplomatic failure',
    'Collapse of empires (Ottoman, Russian, Qing)',
    'Economic crisis (Great Depression / Versailles settlement)',
    'Rise of fascist and totalitarian regimes',
    'New military technology'
  ];
  var canvasNote = (L && L.meta && L.meta.canvasSubmissionNote) || 'Organize your thinking here — submit your final work in Canvas.';
  var captureBtn = (L && L.captureUrls && L.captureUrls.matrixAnalysis) || '';

  var tableRows = rows.map(function (row, i) {
    return '<tr>'
      + '<td class="matrix-cause"><strong>' + row + '</strong></td>'
      + '<td class="matrix-cell"><textarea class="matrix-textarea" id="matrix-wwi-' + i + '" placeholder="Evidence from World War I..."></textarea></td>'
      + '<td class="matrix-cell"><textarea class="matrix-textarea" id="matrix-wwii-' + i + '" placeholder="Evidence from World War II..."></textarea></td>'
      + '<td class="matrix-cell"><textarea class="matrix-textarea" id="matrix-rank-' + i + '" placeholder="Rank (1 = most significant) and justify..."></textarea></td>'
      + '</tr>';
  }).join('');

  return '<style>'
    + '.matrix-table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.82rem}'
    + '.matrix-table th{background:var(--charcoal-steel,#2B2F31);color:var(--antique-gold,#C9A46A);font-family:var(--font-ui,"Montserrat",sans-serif);font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:.6rem .8rem;text-align:left;border:1px solid var(--gunmetal-gray,#3E4447)}'
    + '.matrix-table td{border:1px solid var(--gunmetal-gray,#3E4447);padding:.35rem .4rem;vertical-align:top}'
    + '.matrix-cause{width:20%;padding:.5rem .8rem!important;font-size:.8rem;color:var(--warm-paper,#F5F0E7)}'
    + '.matrix-cell{width:26.6%}'
    + '.matrix-textarea{width:100%;min-height:72px;background:#1e2022;border:none;padding:.4rem .5rem;font-family:var(--font-body,"Libre Baskerville",Georgia,serif);font-size:.77rem;color:var(--warm-paper,#F5F0E7);line-height:1.65;resize:vertical;outline:none}'
    + '.matrix-textarea:focus{background:#23272a}'
    + '.matrix-synthesis{background:var(--charcoal-steel,#2B2F31);border-left:3px solid var(--antique-gold,#C9A46A);padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:0 3px 3px 0}'
    + '.matrix-synthesis-label{font-family:var(--font-ui,"Montserrat",sans-serif);font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--antique-gold,#C9A46A);margin-bottom:.4rem}'
    + '.matrix-synthesis p{font-family:var(--font-body,"Libre Baskerville",Georgia,serif);font-size:.88rem;color:var(--warm-paper,#F5F0E7);line-height:1.7;font-style:italic}'
    + '</style>'
    + '<div class="component-note"><strong>Causation Matrix: Unit 7 Synthesis</strong> — Fill in evidence for each cause across both world wars, then rank the causes by relative significance with justification. Use your completed matrix to build the synthesis argument below.</div>'
    + '<div style="overflow-x:auto;margin:1rem 0">'
    + '<table class="matrix-table">'
    + '<thead><tr>'
    + '<th>Cause of Global Conflict</th>'
    + '<th>Evidence from World War I</th>'
    + '<th>Evidence from World War II</th>'
    + '<th>Significance Ranking + Justification</th>'
    + '</tr></thead>'
    + '<tbody>' + tableRows + '</tbody>'
    + '</table>'
    + '</div>'
    + '<div class="matrix-synthesis">'
    + '<div class="matrix-synthesis-label">LEQ Synthesis Prompt</div>'
    + '<p>Develop a defensible claim that evaluates the relative significance of the causes of global conflict in the period 1900 to the present. Support your ranking with specific evidence from at least three topics in this unit.</p>'
    + '</div>'
    + '<div class="prompt-box">'
    + '<h3>Draft Your Argument</h3>'
    + '<p>Organize your thinking here — submit your final work in Canvas.</p>'
    + '<textarea class="response-area" id="matrix-synthesis-response" data-response-type="Matrix Analysis" placeholder="My claim about relative significance: [state your ranking and the most significant cause]. Evidence from Topic [X]: ... Evidence from Topic [Y]: ... Evidence from Topic [Z]: ... I rank [cause] as most significant because..."></textarea>'
    + '<div class="tool-row">'
    + '<button class="btn" type="button" onclick="saveDraft(\'matrix-synthesis-response\')">Save Draft</button>'
    + '<button class="btn secondary" type="button" onclick="copyResponse(\'matrix-synthesis-response\')">Copy Response</button>'
    + captureBtn
    + '</div>'
    + '<div id="matrix-synthesis-response-result" class="check-result"></div>'
    + '<p class="canvas-note">' + canvasNote + '</p>'
    + '</div>';
};

(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  // ── College Board Key Concepts (13, verbatim CED) ────────────────────────────
  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Unit 7: Learning Objective I',
      theme: 'Learning Objective',
      text: 'Explain the relative significance of the causes of global conflict in the period 1900 to the present.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1',
      theme: 'Technology and Innovation',
      text: 'Rapid advances in science and technology altered the understanding of the universe and the natural world and led to advances in communication, transportation, industry, agriculture, and medicine.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2',
      theme: 'Governance',
      text: 'Peoples and states around the world challenged the existing political and social order in varying ways, leading to unprecedented worldwide conflicts.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.I',
      theme: 'Governance',
      text: 'The West dominated the global political order at the beginning of the 20th century, but both land-based and maritime empires gave way to new states by the century\'s end.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.I.A',
      theme: 'Governance',
      text: 'The older, land-based Ottoman, Russian, and Qing empires collapsed due to a combination of internal and external factors. These changes in Russia eventually led to communist revolution.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.II.D',
      theme: 'Governance',
      text: 'States around the world challenged the existing political and social order, including the Mexican Revolution that arose as a result of political crisis.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV',
      theme: 'Governance',
      text: 'Global conflicts were influenced by economic, political, and social factors.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.B.i',
      theme: 'Governance',
      text: 'The causes of World War I included imperialist expansion and competition for resources. In addition, territorial and regional conflicts combined with a flawed alliance system and intense nationalism to escalate the tensions into global conflict.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.B.ii',
      theme: 'Governance',
      text: 'The causes of World War II included the unsustainable peace settlement after World War I, the global economic crisis engendered by the Great Depression, continued imperialist aspirations, and especially the rise to power of fascist and totalitarian regimes that resulted in the aggressive militarism of Nazi Germany under Adolf Hitler.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.A.i',
      theme: 'Governance',
      text: 'World War I was the first total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies) for the purpose of waging war.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.A.ii',
      theme: 'Governance',
      text: 'World War II was a total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies or former colonies) for the purpose of waging war. Governments used ideologies, including fascism and communism, to mobilize all of their state\'s resources for war and, in the case of totalitarian states, to repress basic freedoms and dominate many aspects of daily life during the course of the conflicts and beyond.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III.C.i',
      theme: 'Technology and Innovation',
      text: 'New military technology led to increased levels of wartime casualties.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III.C.ii',
      theme: 'Technology and Innovation',
      text: 'New military technology and new tactics, including the atomic bomb, fire-bombing, and the waging of "total war" led to increased levels of wartime casualties.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.III.C',
      theme: 'Governance',
      text: 'The rise of extremist groups in power led to the attempted destruction of specific populations, notably the Nazi killing of the Jews in the Holocaust during World War II, and to other atrocities, acts of genocide, or ethnic violence.',
      illustrativeExamples: []
    }
  ];

  // ── First & 10 ────────────────────────────────────────────────────────────────
  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Weighing What Mattered Most',
    embedUrl: 'first-and-10-topic-7-9-causation-global-conflict-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.9 lesson path.'
  };

  // ── Map key ──────────────────────────────────────────────────────────────────
  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Underlying causes', detail: 'Empire collapse (Topics 7.1–7.2), imperial competition, intense nationalism, and alliance systems are all underlying causes — long-term structural factors that created the conditions for global conflict. They appear on this map as borders, imperial territories, and the power vacuums left by fallen empires.' },
      { label: 'Immediate triggers', detail: 'The Sarajevo assassination (1914) and the German invasion of Poland (1939) are immediate triggers — specific events that set conflicts in motion. They matter, but historians generally give more weight to underlying causes in significance arguments.' },
      { label: 'The CED\'s causal ranking', detail: 'The WWII Key Concept names four causes and ranks one with the word "especially": the rise of fascist and totalitarian regimes. That ranking is embedded in the Key Concept itself. Your job in the Causation Matrix is to evaluate that claim using evidence from across Unit 7.' },
      { label: 'Braided causes', detail: 'The Depression (Topic 7.4) fueled fascist rise (Topic 7.6); the failed peace (Topic 7.5) fed nationalist resentment; imperial competition (Topics 7.2, 7.5) continued even after WWI. Causes braid together. A strong argument traces which strand carried the most weight — and why.' }
    ]
  };

  // ── Stable images ─────────────────────────────────────────────────────────────
  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg',
    causationMatrix: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg'
  };

  // ── BeSurreal ─────────────────────────────────────────────────────────────────
  // lesson.beSurreal is set in the data file.

  // ── AP Skill Builder ──────────────────────────────────────────────────────────
  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Building the Significance Argument: Claim, Evidence, Weighing',
    intro: 'Topic 7.9 is the causation capstone. The skill here is not identifying causes — you can list those from six prior lessons. The skill is RANKING them and DEFENDING the ranking with specific evidence and weighing language. A weak argument says "all causes were important." A strong one says "X was more significant than Y because..." and explains the criterion behind the judgment.',
    steps: [
      { label: 'Make a defensible claim', text: 'State a single most-significant cause and a reason. Example: "The rise of fascist and totalitarian regimes was the most significant cause of global conflict in the period 1900 to the present because it converted the underlying conditions created by the Versailles settlement and the Great Depression into active, militaristic aggression." The claim is arguable — another historian could rank empire collapse or economic crisis first. That is what makes it defensible rather than obvious.' },
      { label: 'Support with specific evidence from at least three topics', text: 'Pull evidence across Unit 7, not just from the topic that introduced each cause. Example: Topic 7.6 (Nazi rise to power), Topic 7.4 (Depression as enabling condition), Topic 7.2 (WWI alliance system as parallel cause). Each piece of evidence should directly support the significance claim — not just name the cause, but explain how the cause operated.' },
      { label: 'Weigh and explain the ranking', text: 'Use weighing language and explain your criterion. Example: "The rise of fascist regimes was more significant than the Versailles settlement because the settlement was a necessary condition — it created grievance and instability — but did not by itself cause war. The Nazi regime supplied the militarized will to act on those conditions. Without the regime, the grievances of Versailles need not have produced a second world war." That is a weighing argument: it names both causes, explains the relationship between them, and defends the ranking.' }
    ],
    prompt: 'In three to four sentences, make a defensible claim about the most significant cause of global conflict in the period 1900 to the present. Use evidence from at least two Unit 7 topics, and use at least one piece of weighing language (most significant because, more significant than, underlying cause, immediate trigger, necessary condition, enabling condition, without which).'
  };

  // ── Checkpoints ──────────────────────────────────────────────────────────────
  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Identifying and Evaluating the Causes',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Identify and compare the major causes of WWI and WWII across Unit 7.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain two causes of global conflict in the period 1900 to the present — one that was significant for World War I and one that was significant for World War II. For each cause, use at least one specific piece of evidence and explain how the cause contributed to the conflict. Then evaluate: which of the two causes you described was more significant in producing global conflict overall, and why?',
      responseType: 'Checkpoint 1',
      terms: ['imperialist expansion', 'nationalism', 'alliance system', 'empire collapse', 'Great Depression', 'Versailles settlement', 'fascist regimes', 'totalitarian', 'new military technology', 'relative significance'],
      focus: ['Name a distinct cause for WWI and a distinct cause for WWII with specific evidence for each.', 'Use at least one piece of evidence — a specific event, policy, or actor — not just the cause category.', 'Take a position on relative significance and explain the criterion behind your ranking.']
    },
    {
      title: 'Checkpoint 2: Construct and Defend the Argument',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'Rank causes by significance and defend your argument with weighing language.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Develop a defensible claim that evaluates the relative significance of the causes of global conflict in the period 1900 to the present. Rank at least two causes from most to least significant and support your ranking with specific evidence from at least two different topics in Unit 7. Use at least one piece of weighing language: most significant because, more significant than, underlying cause, immediate trigger, necessary condition, enabling condition, or without which.',
      responseType: 'Checkpoint 2',
      terms: ['relative significance', 'underlying cause', 'immediate trigger', 'necessary condition', 'enabling condition', 'most significant because', 'more significant than', 'without which', 'defensible claim', 'specific evidence'],
      focus: ['Open with a defensible claim naming the most significant cause.', 'Support the claim with specific evidence from at least two Unit 7 topics.', 'Use at least one piece of weighing language to explain why one cause outranks another.']
    }
  ];

  // ── Capture points — static hardcoded anchors (never JS-generated) ───────────
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  // matrixAnalysis is the sixth capture point (Response Type: Matrix Analysis).
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.9+-+Causation+in+Global+Conflict&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    matrixAnalysis: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.9+-+Causation+in+Global+Conflict&entry.2107637366=Matrix+Analysis" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.9+-+Causation+in+Global+Conflict&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };

  // ── Custom 10-module array ────────────────────────────────────────────────────
  // Module 09 is the Causation Matrix. renderCausationMatrix is defined in
  // global scope above so openModule() can call mod.render() after load.
  const si = lesson.stableImages;
  lesson.modules = [
    {
      id: 'map',
      label: 'Module 01',
      title: 'Map & Geography Check',
      desc: 'Connect geography to the causes of global conflict across Unit 7.',
      img: si.map,
      render: function () { return renderMap(); }
    },
    {
      id: 'first10',
      label: 'Module 02',
      title: 'First & 10 Reading',
      desc: 'Narrative foundation: weighing the relative significance of causes.',
      img: si.first10,
      render: function () { return renderFirst10(); }
    },
    {
      id: 'contentdelivery',
      label: 'Module 03',
      title: 'Content Delivery',
      desc: 'Jump to the lecture cards — six synthesis and skill cards for Unit 7.',
      img: si.contentDelivery,
      jump: '#lecture'
    },
    {
      id: 'besurreal',
      label: 'Module 04',
      title: 'BeSurreal',
      desc: 'The wrong turn that started a world war — underlying causes versus immediate triggers.',
      img: si.beSurreal,
      render: function () { return renderBeSurreal(); }
    },
    {
      id: 'skill',
      label: 'Module 05',
      title: 'AP Skill Builder',
      desc: 'Causation practice: claim, evidence, and weighing language.',
      img: si.skill,
      render: function () { return renderSkill(); }
    },
    {
      id: 'checkpoint1',
      label: 'Module 06',
      title: 'Checkpoint 1',
      desc: 'Identify and compare the major causes of WWI and WWII.',
      img: si.checkpoint1,
      render: function () { return renderCheckpoint(window.BEHISTORICAL_LESSON.checkpoints[0], 'checkpoint-one-response'); }
    },
    {
      id: 'evidence',
      label: 'Module 07',
      title: 'Evidence Lab',
      desc: 'Rank the causes using four images representing four causal categories.',
      img: si.evidence,
      render: function () { return renderEvidence(); }
    },
    {
      id: 'source',
      label: 'Module 08',
      title: 'Primary Source',
      desc: 'Article 231, Treaty of Versailles — the War Guilt Clause as a causal argument.',
      img: si.source,
      render: function () { return renderPrimarySource(); }
    },
    {
      id: 'causationmatrix',
      label: 'Module 09',
      title: 'Causation Matrix',
      desc: 'Rank seven causes of global conflict across WWI and WWII — the unit capstone.',
      img: si.causationMatrix,
      render: function () { return window.renderCausationMatrix(); }
    },
    {
      id: 'checkpoint2',
      label: 'Module 10',
      title: 'Checkpoint 2',
      desc: 'Construct and defend your significance argument with weighing language.',
      img: si.checkpoint2,
      render: function () { return renderCheckpoint(window.BEHISTORICAL_LESSON.checkpoints[1], 'checkpoint-two-response'); }
    }
  ];
})();
