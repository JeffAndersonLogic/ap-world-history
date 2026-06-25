(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.1.III',
      theme: 'Governance',
      text: 'New state-supported transoceanic maritime exploration occurred in this period.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.A',
      theme: 'Economic Systems',
      text: 'Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.B',
      theme: 'Economic Systems',
      text: 'Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.C',
      theme: 'Economic Systems',
      text: 'Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Why They Sailed',
    embedUrl: 'first-and-10-topic-4-2-exploration-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Portuguese route — east around Africa', detail: 'The Portuguese route went south along the African coast and around the Cape of Good Hope to reach India — confirmed viable by Dias (1488) and first completed by da Gama (1498). This route gave Portugal direct access to Asian spice markets.' },
      { label: 'Spanish route — west across the Atlantic', detail: 'Columbus sailed west hoping to reach Asia; instead found the Caribbean (1492). Subsequent Spanish voyages established contact with the Americas and enabled the conquest of the Aztec and Inca empires.' },
      { label: 'Treaty of Tordesillas line (1494)', detail: 'A north-south line drawn through the Atlantic divided the world between Spain (west) and Portugal (east). The line gave Brazil to Portugal and most of the Americas to Spain, all without consulting any non-European peoples.' },
      { label: 'Geographic takeaway', detail: 'By 1522, the Magellan-Elcano circumnavigation had proved the world\'s oceans were connected, the Americas were separate from Asia, and the Pacific was vastly larger than Columbus had imagined — establishing the true geographic scale of the planet.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: 'Step into the Spanish court to argue for Columbus\'s Atlantic voyage, navigate the Portuguese route around Africa with Vasco da Gama, or encounter the Treaty of Tordesillas from the perspective of an indigenous leader hearing of European claims to your land.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: Why Did European States Sponsor Exploration?',
    intro: 'Causation requires identifying multiple causes and explaining how they worked together. For Topic 4.2, the question is not just WHAT happened (European states sponsored exploration) but WHY — what combination of motivations, enabling conditions, and specific circumstances produced this historical outcome in this place at this time. A strong causal argument identifies at least two causes, explains how each contributed, and avoids the trap of treating any single factor as the sole explanation.',
    steps: [
      { label: 'Identify multiple causes', text: 'Economic motivation (bypassing Ottoman-controlled spice routes), religious ideology (crusading and converting souls from the Reconquista), state competition (rivalry between Portugal and Spain), and technological readiness (caravel, astrolabe) all contributed. No single cause explains European exploration.' },
      { label: 'Explain how causes worked together', text: 'The disruption of spice trade routes (economic cause) created incentive. The Reconquista ideology (religious cause) provided justification and directed military energy outward. State rivalry (political cause) created urgency — if Portugal found the sea route to Asia, Spain needed its own route. Technology (enabling condition) made all of it feasible.' },
      { label: 'Connect to specific evidence', text: 'Prince Henry\'s court at Sagres combined all these factors: royal patronage (state), crusading purpose (religion), commercial intelligence gathering (economics), and systematic navigation and cartography (technology). Da Gama\'s 1498 voyage succeeded because all four causes aligned at the same moment.' }
    ],
    prompt: 'In 3–4 sentences, explain why European states — specifically Portugal and/or Spain — sponsored maritime exploration after c. 1450. Identify at least two distinct causes (economic, religious, political, or technological), explain how each contributed, and explain why this happened in the Iberian Peninsula rather than elsewhere in Europe.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Motives and the Portuguese Model',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'God, Glory, Gold — the motivations behind European exploration and the Portuguese model of systematic state-sponsored voyaging.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain at least TWO motivations behind European maritime exploration after c. 1450. For each motivation, explain what drove it specifically (not just a label like "gold" but what specific economic reality made profit-seeking a motive), and connect it to a specific state action or voyage.',
      responseType: 'Checkpoint 1',
      terms: ['Reconquista', 'spice trade', 'Prince Henry', 'crusading', 'God Glory Gold', 'state sponsorship', 'Ottoman Empire', 'Lisbon', 'feitorias', 'cartography'],
      focus: ['Name at least two distinct motivations (religious, economic, and/or political).', 'For each, explain the specific historical context that made it a motivation (not just a label).', 'Connect each motivation to a specific Portuguese or Spanish action.']
    },
    {
      title: 'Checkpoint 2: Key Voyages and Multiple Perspectives',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Da Gama to India, Columbus to the Caribbean, Magellan\'s circumnavigation, and the Treaty of Tordesillas.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Describe at least TWO key European voyages of exploration, including what route they followed and what they found or established. Then explain what the Treaty of Tordesillas reveals about European assumptions regarding non-European peoples — and briefly describe how at least one non-European group experienced European exploration.',
      responseType: 'Checkpoint 2',
      terms: ['Vasco da Gama', 'Columbus', 'Magellan', 'Cape of Good Hope', 'Caribbean', 'circumnavigation', 'Treaty of Tordesillas', 'Taíno', 'encomienda', 'indigenous peoples'],
      focus: ['Describe at least two specific voyages with routes and outcomes.', 'Explain the Treaty of Tordesillas and what European assumptions it reflects.', 'Describe the experience of at least one non-European group during the era of exploration.']
    }
  ];
})();
