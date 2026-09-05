(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-4.1.III",
      "theme": "Governance",
      "text": "New state-supported transoceanic maritime exploration occurred in this period.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.A",
      "theme": "Economic Systems",
      "text": "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.B",
      "theme": "Economic Systems",
      "text": "Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.C",
      "theme": "Economic Systems",
      "text": "Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Why They Sailed',
    embedUrl: 'first-and-10-topic-4-2-exploration-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Portuguese route, east around Africa', detail: 'The Portuguese route went south along the African coast and around the Cape of Good Hope to reach India, confirmed viable by Dias (1488) and first completed by da Gama (1498). This route gave Portugal direct access to Asian spice markets.' },
      { label: 'Spanish route, west across the Atlantic', detail: 'Columbus sailed west hoping to reach Asia; instead found the Caribbean (1492). Subsequent Spanish voyages established contact with the Americas and enabled the conquest of the Aztec and Inca empires.' },
      { label: 'Treaty of Tordesillas line (1494)', detail: 'A north-south line drawn through the Atlantic divided the world between Spain (west) and Portugal (east). The line gave Brazil to Portugal and most of the Americas to Spain, all without consulting any non-European peoples.' },
      { label: 'Geographic takeaway', detail: 'By 1522, the Magellan-Elcano circumnavigation had proved the world\'s oceans were connected, the Americas were separate from Asia, and the Pacific was vastly larger than Columbus had imagined, establishing the true geographic scale of the planet.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-santa-fe-bargain.html',
    desc: 'Negotiate the 1492 Santa Fe bargain: decide whether to sponsor Columbus, limit his contractual authority, and define Spanish conduct toward rival claims and inhabited lands.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: Why Did European States Sponsor Exploration?',
    intro: 'Causation requires identifying multiple causes and explaining how they worked together. For Topic 4.2, the question is not just WHAT happened (European states sponsored exploration) but WHY, what combination of motivations, enabling conditions, and specific circumstances produced this historical outcome in this place at this time. A strong causal argument identifies at least two causes, explains how each contributed, and avoids the trap of treating any single factor as the sole explanation.',
    steps: [
      { label: 'Identify multiple causes', text: 'Economic motivation (bypassing Ottoman-controlled spice routes), religious ideology (crusading and converting souls from the Reconquista), state competition (rivalry between Portugal and Spain), and technological readiness (caravel, astrolabe) all contributed. No single cause explains European exploration.' },
      { label: 'Explain how causes worked together', text: 'The disruption of spice trade routes (economic cause) created incentive. The Reconquista ideology (religious cause) provided justification and directed military energy outward. State rivalry (political cause) created urgency, if Portugal found the sea route to Asia, Spain needed its own route. Technology (enabling condition) made all of it feasible.' },
      { label: 'Connect to specific evidence', text: 'Prince Henry\'s court at Sagres combined all these factors: royal patronage (state), crusading purpose (religion), commercial intelligence gathering (economics), and systematic navigation and cartography (technology). Da Gama\'s 1498 voyage succeeded because all four causes aligned at the same moment.' }
    ],
    prompt: 'In 3–4 sentences, explain why European states, specifically Portugal and/or Spain, sponsored maritime exploration after c. 1450. Identify at least two distinct causes (economic, religious, political, or technological), explain how each contributed, and explain why this happened in the Iberian Peninsula rather than elsewhere in Europe.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Motives and the Portuguese Model',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'God, Glory, Gold, the motivations behind European exploration and the Portuguese model of systematic state-sponsored voyaging.',
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
      prompt: 'Describe at least TWO key European voyages of exploration, including what route they followed and what they found or established. Then explain what the Treaty of Tordesillas reveals about European assumptions regarding non-European peoples, and briefly describe how at least one non-European group experienced European exploration.',
      responseType: 'Checkpoint 2',
      skill: '',
      terms: ['Vasco da Gama', 'Columbus', 'Magellan', 'Cape of Good Hope', 'Caribbean', 'circumnavigation', 'Treaty of Tordesillas', 'Taíno', 'encomienda', 'indigenous peoples'],
      focus: ['Describe at least two specific voyages with routes and outcomes.', 'Explain the Treaty of Tordesillas and what European assumptions it reflects.', 'Describe the experience of at least one non-European group during the era of exploration.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Voyages, Claims, and the Map of a New Oceanic World',
    task: 'Choose TWO cards that help answer why exploration mattered, not just where explorers went. Distinguish contemporary traces, later commemorations, and secondary maps. Look for evidence of state sponsorship, territorial claiming, route knowledge, or changing geographic understanding, then identify what each source leaves out.',
    prompt: 'Using two evidence cards, make one claim about how state-sponsored exploration changed European geographic knowledge or imperial ambitions after c. 1450. Cite one concrete detail from each source, explain how it supports your claim, and identify one perspective or chronology limitation.'
  };

  lesson.images = [
    {
      title: 'Vasco da Gama Pillar, Malindi',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pillar_of_Vasco_da_Gama.jpg',
      caption: 'Portuguese route-and-claim evidence. The pillar at Malindi on the East African coast commemorates the Portuguese presence along the route da Gama used toward India.',
      prompt: 'NOTICE the monument\'s placement and Christian/royal symbolism. What can you INFER about how Portuguese voyages combined navigation, diplomacy, and territorial claims? What can the monument not tell you about how local rulers viewed the Portuguese?'
    },
    {
      title: 'Columbus Taking Possession',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Columbus_Taking_Possession.jpg',
      caption: 'Later imperial-memory evidence. A later European representation depicts Columbus formally claiming land in the Caribbean for the Spanish crown.',
      prompt: 'NOTICE who performs the claim, who witnesses it, and whose authority is visually centered. What can you INFER about European assumptions of sovereignty? Why is a later commemorative image not neutral eyewitness evidence of 1492?'
    },
    {
      title: 'Waldseemüller World Map, 1507',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg',
      caption: 'Changing-knowledge evidence. The printed Waldseemüller map incorporated recent Atlantic information and famously applied the name America to lands across the Atlantic.',
      prompt: 'NOTICE how the Atlantic world is represented relative to older map traditions. What can you INFER about the speed at which voyage reports changed European geographic knowledge? What uncertainties remain visible?'
    },
    {
      title: 'Exploration Routes and Treaty of Tordesillas',
      url: '../assets/images/instructional-maps/topic-4-2.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-2.svg',
      caption: 'Secondary geographic reconstruction. The BeHistorical map compares Portuguese and Spanish routes and marks the Treaty of Tordesillas division.',
      prompt: 'NOTICE how routes and the treaty line divide oceanic space. What can you INFER about state rivalry and imperial ambition? What does a modern reconstruction not show about Indigenous sovereignty or local knowledge?'
    }
  ];
})();
