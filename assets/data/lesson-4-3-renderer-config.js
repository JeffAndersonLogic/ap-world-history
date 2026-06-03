(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.3.I.A',
      theme: 'Interaction',
      text: 'The transfer of new crops and animals created new food sources and affected population growth. New World crops transformed agriculture and diets in the Eastern Hemisphere; Old World animals transformed economies and cultures in the Americas.',
      illustrativeExamples: ['Potato in Europe', 'Maize in Africa and China', 'Horse in the Americas', 'Sugarcane in the Caribbean', 'Tomatoes in the Mediterranean']
    },
    {
      code: 'KC-4.3.I.B',
      theme: 'Interaction',
      text: 'The spread of disease from Afro-Eurasia to the Americas caused a massive demographic catastrophe. Old World diseases (especially smallpox) killed an estimated 50–90% of indigenous American populations who had no prior immunity — the concept of the "virgin soil epidemic."',
      illustrativeExamples: ['Smallpox in Tenochtitlan (1520)', 'Virgin soil epidemics', 'Death of Cuitláhuac', 'Demographic collapse of indigenous Caribbean peoples']
    },
    {
      code: 'KC-4.3.I.C',
      theme: 'Interaction',
      text: 'The Columbian Exchange also resulted in environmental changes and new economic systems. American silver flowed into global trade; demographic collapse created labor shortages that drove demand for enslaved African workers.',
      illustrativeExamples: ['Potosí silver mines', 'Atlantic slave trade origins', 'Encomienda system', 'Deforestation of the Americas', 'American silver disrupting Asian monetary systems']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Great Exchange',
    embedUrl: 'first-and-10-topic-4-3-columbian-exchange-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'New World → Old World (crops)', detail: 'Potatoes, maize, tomatoes, cacao, tobacco, and cassava moved from the Americas to Europe, Africa, and Asia — transforming diets and, over generations, supporting population growth in receiving regions.' },
      { label: 'Old World → New World (animals & plants)', detail: 'Horses, cattle, pigs, sheep, wheat, sugarcane, and rice moved from Eurasia and Africa to the Americas — transforming indigenous cultures (especially the horse) and driving new plantation economies (especially sugarcane).' },
      { label: 'Old World → New World (disease)', detail: 'Smallpox, measles, influenza, and other pathogens moved from Afro-Eurasia to the Americas, where indigenous populations had no prior immunity. The result was the largest demographic catastrophe in human history — estimated 50–90% population loss.' },
      { label: 'Geographic takeaway', detail: 'The Columbian Exchange was not symmetric: crops generally moved in both directions, but disease moved overwhelmingly from east to west, and enslaved people moved overwhelmingly from Africa to the Americas. The Atlantic Ocean became a highway for biological and human flows that transformed every ecosystem and society it touched.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/columbian-exchange.html',
    desc: 'Step into Tenochtitlan during the smallpox epidemic of 1520, navigate the economic logic of the Atlantic slave trade, or examine the transformation of European diets as New World crops spread across the globe.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: How the Demographic Collapse Led to the Atlantic Slave Trade',
    intro: 'Causation means explaining chains of causation — how one event caused another, which caused another. For Topic 4.3, one of the most important causal chains is: European contact → disease → demographic collapse → labor shortage → Atlantic slave trade. A strong causal argument traces this chain explicitly, explaining each link rather than just asserting the outcome.',
    steps: [
      { label: 'Identify the first cause', text: 'European contact introduced Old World diseases — primarily smallpox — to populations that had no prior immunity. Virgin soil epidemics killed an estimated 50–90% of the indigenous American population within a century of contact. The demographic collapse was the primary cause: disease killed more people than military conquest.' },
      { label: 'Explain the intermediate effect', text: 'The demographic collapse created a massive labor shortage. European colonists had come to the Americas to extract wealth — through mining, agriculture, and plantation work. The encomienda system, which had granted colonists rights to indigenous labor, became unworkable as indigenous populations collapsed. Colonists needed workers; the labor pool had been decimated.' },
      { label: 'Connect to the final outcome', text: 'The labor shortage drove demand for enslaved African workers. African enslavement was not inevitable — it was the response to a specific labor crisis created by epidemic disease. Over three centuries, approximately 12 million Africans were forcibly transported to the Americas to supply the labor that demographic collapse had eliminated. This causal chain — contact → disease → collapse → slave trade — is one of the most consequential in world history.' }
    ],
    prompt: 'In 3–4 sentences, explain the causal chain connecting the Columbian Exchange to the Atlantic slave trade. Trace at least three steps in the chain, explain the mechanism at each step, and explain why the Atlantic slave trade was a consequence of the demographic collapse rather than an independent development.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Crops, Animals, and the Exchange',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Potatoes, maize, horses, sugarcane — the biological transfers that transformed diets and economies on both sides of the Atlantic.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify at least TWO crops transferred from the New World to the Old World and ONE animal or crop transferred from the Old World to the New World. For each, explain the long-term consequence of the transfer — what changed in the receiving region, and why?',
      responseType: 'Checkpoint 1',
      terms: ['potato', 'maize', 'tomato', 'cacao', 'tobacco', 'horse', 'cattle', 'sugarcane', 'wheat', 'cassava'],
      focus: ['Name at least two New World crops moving east and one Old World introduction moving west.', 'For each, explain the specific long-term consequence in the receiving region.', 'Explain WHY the transfer had that consequence — connect crop to demographic or economic outcome.']
    },
    {
      title: 'Checkpoint 2: Disease, Collapse, and Global Consequences',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Virgin soil epidemics, demographic collapse, Atlantic slave trade, Potosí silver — the catastrophic and global consequences of hemispheric contact.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain why Old World diseases were so catastrophic for indigenous American populations. Then trace the causal chain from demographic collapse to the origins of the Atlantic slave trade. Finally, explain how American silver (especially from Potosí) affected global trade. Use specific evidence throughout.',
      responseType: 'Checkpoint 2',
      terms: ['smallpox', 'virgin soil epidemic', 'demographic collapse', 'encomienda', 'Atlantic slave trade', 'Potosí', 'silver', 'labor shortage', 'Tenochtitlan', 'Cuitláhuac'],
      focus: ['Explain the concept of virgin soil epidemic and why indigenous Americans had no immunity.', 'Trace the causal chain: disease → collapse → labor shortage → slave trade.', 'Explain how American silver disrupted global trade and what regions it connected.']
    }
  ];
})();
