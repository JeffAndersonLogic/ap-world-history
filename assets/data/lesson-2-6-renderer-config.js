(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.1.IV',
      theme: 'Humans and the Environment',
      text: 'There was continued diffusion of crops and pathogens, with epidemic diseases, including the bubonic plague, along trade routes.',
      illustrativeExamples: ['Bananas in Africa', 'New rice varieties in East Asia', 'Spread of citrus in the Mediterranean']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The World the Plague Remade',
    embedUrl: 'first-and-10-topic-2-6-environmental-consequences.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Plague origin region', detail: 'Bubonic plague was endemic in rodent populations in Central Asia — the Mongol trade routes gave it a highway westward.' },
      { label: 'Spread through trade routes', detail: 'The plague followed overland Silk Road routes into Southwest Asia, then maritime routes into the Mediterranean and northern Europe.' },
      { label: 'Areas of devastation', detail: 'Europe lost 30–60% of its population; similar demographic collapse struck the Middle East and parts of Central Asia.' },
      { label: 'Geographic takeaway', detail: 'The same connectivity that enriched Afro-Eurasian societies also accelerated the most catastrophic pandemic in premodern history.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    contentDelivery: '../assets/images/module-cards/steppe-eurasian-1200ce.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    skill:           '../assets/images/module-cards/mogao-caves-dunhuang.jpg',
    checkpoint1:     '../assets/images/module-cards/persepolis-gate-nations.jpg',
    evidence:        '../assets/images/module-cards/abbasid-baghdad-9thc.jpg',
    source:          '../assets/images/module-cards/song-dynasty-kaifeng.jpg',
    beInTheRoom:     '../assets/images/module-cards/sahara-caravan-1300ce.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: 'It is 1347. You are a city official in an Italian port city as the first plague ships arrive. What do you know? What decisions do you face? What will you do?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Plague Doctor\'s Mask',
    text: 'The iconic plague doctor\'s beak mask — filled with herbs and spices — was a 17th-century invention, not a medieval one. But it captures something real: medieval Europeans had no idea what caused the plague. Some blamed bad air (miasma theory). Some blamed Jews. Some blamed the alignment of planets. The Black Death killed roughly 25 million people in Europe — and societies struggled for decades to explain why their world had fallen apart.',
    prompt: 'What does the confusion and fear around the Black Death reveal about the limits of medieval knowledge and the social consequences of epidemic disease?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'How Did Trade Routes Cause Environmental and Demographic Catastrophe?',
    intro: 'Causation means tracing WHY something happened through a chain of causes. The Black Death had an environmental cause (rodent reservoir), a structural cause (trade route connectivity), and cascading social and demographic effects.',
    steps: [
      { label: 'Environmental cause', text: 'Bubonic plague was endemic in Central Asian rodent populations — it was a pre-existing ecological reality waiting for a new pathway.' },
      { label: 'Structural cause', text: 'Mongol trade routes and Indian Ocean maritime networks created the connectivity that allowed plague to travel faster and farther than ever before.' },
      { label: 'Social effects', text: 'Demographic collapse caused labor shortages, weakened feudal and Church institutions, and prompted long-term social and economic reorganization.' }
    ],
    prompt: 'Trace the chain of causation from rodent populations in Central Asia to the weakening of feudalism in Europe in 3-4 sentences.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: How Disease Spread Along Trade Routes',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Plague origins, transmission, and the role of trade connectivity.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how trade routes enabled the spread of epidemic disease. Use specific evidence about the bubonic plague, its origins, and how it traveled.',
      responseType: 'Checkpoint 1',
      terms: ['bubonic plague', 'Yersinia pestis', 'Black Death', 'rodents', 'fleas', 'Central Asia', 'Silk Roads', 'maritime routes'],
      focus: ['Explain where plague originated.', 'Explain the mechanism by which it spread along trade routes.', 'Describe the geographic pattern of its spread.']
    },
    {
      title: 'Checkpoint 2: Demographic and Social Consequences',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Population loss, social upheaval, and long-term consequences.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain two consequences of the Black Death on Afro-Eurasian societies. Consider demographic, social, political, or ecological effects.',
      responseType: 'Checkpoint 2',
      terms: ['demographic collapse', 'labor shortage', 'feudalism', 'Church authority', 'mortality', 'population', 'ecological change'],
      focus: ['Name at least two distinct consequences.', 'Explain how each consequence changed a society or institution.', 'Connect the demographic collapse to longer-term social or political change.']
    }
  ];
})();
