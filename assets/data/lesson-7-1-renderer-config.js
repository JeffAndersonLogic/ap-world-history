// lesson-7-1-renderer-config.js
// Topic 7.1 — Shifting Power After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Governance (GOV)',
      theme: 'Governance',
      text: 'A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective A',
      theme: 'Learning Objective',
      text: 'Explain how internal and external factors contributed to change in various states after 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.I',
      theme: 'Governance',
      text: "The West dominated the global political order at the beginning of the 20th century, but both land-based and maritime empires gave way to new states by the century's end.",
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
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: When Empires Fall',
    embedUrl: 'first-and-10-topic-7-1-shifting-power-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Western dominance of the global political order', detail: 'In 1900 the industrialized West — Britain, France, Germany, the United States, and their rivals — controlled colonies, sea lanes, and capital across the globe. This is KC-6.2.I made visible: the century opens with Western power at its height.' },
      { label: 'Three land-based empires under strain', detail: 'The Ottoman, Russian, and Qing empires were enormous, multiethnic, land-based states. Each was struggling to industrialize and reform while holding restless nationalities together along immense, exposed borders.' },
      { label: 'External pressure points', detail: 'Foreign spheres of influence in Qing China, Russian defeat by Japan in 1904–1905, and Great Power rivalry over Ottoman territory show how external factors compounded each empire’s internal weaknesses.' },
      { label: 'Geographic takeaway', detail: 'Size was not strength. The empires that collapsed between 1911 and 1923 were the large land-based ones caught between internal crisis and external attack — and revolutionary Mexico shows the same pattern of challenge to the existing order in the Americas.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boxer_Rebellion.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/MustafaKemalAtaturk.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boxer_Rebellion.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Zapata,_1914.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-petrograd-order.html',
    desc: 'Join the Petrograd Soviet in March 1917 and decide how soldiers, workers, ministers, and revolutionaries should handle war, land, food, and divided authority.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Revolution That Started in a Bread Line',
    text: 'The revolution that ended three hundred years of Romanov rule did not begin with a battle plan. It began with bread. In late February 1917 (early March by the Western calendar), women textile workers in Petrograd walked out of their factories on International Women’s Day to protest bread shortages and freezing queues. Within days, hundreds of thousands were in the streets; the soldiers sent to disperse them joined them instead. Within a week, Tsar Nicholas II — commander of the largest army in the world — had abdicated.',
    prompt: 'What does it reveal about the condition of the Russian state that bread lines — not enemy armies — set off the revolution that destroyed it?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Internal vs. External: Building the Causation Frame',
    intro: 'Topic 7.1 is a causation topic. The CED frames every collapse the same way: empires fell "due to a combination of internal and external factors." Strong AP causation writing does not just list causes — it sorts them, weighs them, and explains how they interact. Build that habit now: it returns in Topic 7.9, the causation capstone for all of Unit 7.',
    steps: [
      { label: 'Internal factors', text: 'Pressures from inside the state: ethnic and nationalist tension (Ottoman Balkans), autocratic misrule and failed reform (Romanov Russia), peasant land hunger (Mexico under Díaz, Russia), and governments that lost legitimacy with their own people.' },
      { label: 'External factors', text: 'Pressures from outside the state: foreign imperialism and spheres of influence (Qing China), military defeat (Russia by Japan in 1905, the Ottomans in World War I), and the strain of total war after 1914.' },
      { label: 'Interaction', text: 'The strongest analysis shows how the two reinforce each other: external defeat exposes internal weakness, and internal weakness invites external pressure. Russia in 1917 is the model case — war (external) broke a regime already hollowed out by autocracy and peasant misery (internal).' }
    ],
    prompt: 'Choose ONE empire — Ottoman, Russian, or Qing. In two to three sentences, identify one internal factor and one external factor in its collapse, and explain how the two factors reinforced each other rather than acting separately.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Three Empires Collapse',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Internal and external factors in the Ottoman, Russian, and Qing collapses.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose TWO of the three collapsing land-based empires (Ottoman, Russian, Qing). For each, identify one internal factor and one external factor that contributed to its collapse, and explain how those factors worked together to bring the empire down.',
      responseType: 'Checkpoint 1',
      terms: ['internal factors', 'external factors', 'ethnic tensions', 'Young Turks', 'World War I', 'Atatürk', 'Revolution of 1905', 'Nicholas II', 'foreign imperialism', 'Boxer Rebellion', 'Xinhai Revolution'],
      focus: ['Name one internal AND one external factor for each empire you choose.', 'Use specific evidence — names, events, dates — not general labels.', 'Explain the interaction: how did external pressure expose or worsen internal weakness?']
    },
    {
      title: 'Checkpoint 2: Revolution in Russia and Mexico',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Communist revolution in Russia; the Mexican Revolution’s challenge to the existing order.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how political crisis produced revolution in BOTH Russia and Mexico. Trace how Russia’s crisis led to communist revolution in 1917, and explain how the Mexican Revolution challenged the existing political and social order.',
      responseType: 'Checkpoint 2',
      terms: ['February Revolution', 'Provisional Government', 'October Revolution', 'Lenin', 'Bolsheviks', 'political crisis', 'Porfirio Díaz', 'Zapata', 'Villa', 'Constitution of 1917', 'land reform'],
      focus: ['For Russia: trace the chain from February 1917 through the Provisional Government’s failure to the October Revolution.', 'For Mexico: name the old order (Díaz) and the specific challenges to it (Zapata, Villa, the 1917 Constitution).', 'Connect both to the CED language: political crisis challenging the existing political and social order.']
    }
  ];

  // Capture points — static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.1+-+Shifting+Power+After+1900&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.1+-+Shifting+Power+After+1900&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
