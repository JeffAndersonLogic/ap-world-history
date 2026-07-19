(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.3.II',
      theme: 'Governance',
      text: 'Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II.B',
      theme: 'Governance',
      text: 'Land empires included the Manchu in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.i',
      theme: 'Governance',
      text: 'Political and religious disputes led to rivalries and conflict between states.',
      illustrativeExamples: ['Safavid–Mughal conflict', 'Songhai Empire’s conflict with Morocco']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Gunpowder Empires',
    embedUrl: 'first-and-10-topic-3-1-empires-expand-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Anatolian origins', detail: 'The Ottoman state began as a small principality in northwestern Anatolia around 1299 and expanded rapidly in the 14th century.' },
      { label: 'The Balkans and Europe', detail: 'Ottoman forces crossed into Europe at Gallipoli (1354) and steadily conquered the Balkans throughout the 14th and 15th centuries, reaching the walls of Vienna twice.' },
      { label: 'Constantinople and control of the straits', detail: 'The 1453 conquest gave the Ottomans the Bosphorus and Dardanelles, controlling sea traffic between the Black Sea and the Mediterranean.' },
      { label: 'Three-continent empire', detail: 'By the early 16th century, Ottoman expansion into Egypt, Syria, and North Africa made the empire a genuinely intercontinental power spanning Europe, Asia, and Africa.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Akbar_receiving_nobles.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-3/the-constantinople-breach.html',
    desc: 'Join Mehmed II’s siege council in 1453. Combine gunpowder, infantry, naval pressure, logistics, and diplomacy to turn a damaged wall into durable imperial expansion.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: You Are a Janissary Recruit, Edirne, 1452',
    desc: 'The night before the Ottoman army begins its march toward Constantinople, you are a 17-year-old devshirme conscript from the Balkans. You were taken from your village six years ago. You have converted to Islam, learned Ottoman Turkish, mastered the matchlock musket, and been absorbed into the most elite infantry force in the known world. The smell of gunpowder and forge-smoke fills the camp. Tomorrow, the march begins.',
    intro: 'You are sitting in the Janissary barracks in Edirne, the Ottoman capital before Istanbul, cleaning your matchlock rifle by firelight. Around you, thousands of men are doing the same. The great bombard cannons, each one requiring sixty oxen to move, have already been sent ahead toward Constantinople. You have heard that Sultan Mehmed II has ordered the largest siege artillery ever assembled. You have heard that the Theodosian Walls have held for a thousand years. You have heard that God is on your side.',
    detail: 'You were eight years old when the devshirme collectors came to your village in Serbia. You do not remember your parents\' faces clearly anymore. You remember the walk to the capital, the language lessons, the prayers, the drilling. You remember learning that loyalty to the sultan was everything, that the corps was your family now. You do not think of yourself as Serbian anymore. You are a Janissary. Tomorrow you will march toward the greatest city in the world and put its walls to the test of Ottoman cannon and Ottoman will.',
    prompt: 'You have one hour before lights out. Write a letter you will never send, to the family you no longer remember clearly. What do you tell them about who you have become? What do you feel about what tomorrow holds? Do you believe in what you are doing, or is belief beside the point?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: How Gunpowder Caused Imperial Expansion',
    intro: 'Causation means explaining WHY something happened, identifying the causes that produced a specific historical outcome. For Topic 3.1, you need to explain how gunpowder technology caused the expansion of land-based empires after c. 1450. A strong causal argument does more than list what happened, it explains the connection between cause and effect.',
    steps: [
      { label: 'Identify the cause', text: 'Gunpowder weapons, specifically large-caliber cannons and matchlock firearms, became available to rulers across Eurasia after c. 1450 through a combination of technological diffusion from China, improvements in iron casting, and state investment in military production.' },
      { label: 'Explain the mechanism', text: 'Cannons made traditional fortifications, stone walls, castles, city defenses, vulnerable for the first time. Rulers with gunpowder artillery could breach walls that had previously been impregnable, enabling conquest of territories that would have been impossible to take with pre-gunpowder armies.' },
      { label: 'Connect to the effect', text: 'Because gunpowder weapons gave states decisive military advantages, rulers who acquired them could expand rapidly at the expense of states that lacked them. The Ottoman conquest of Constantinople (1453) is the clearest example: the Theodosian Walls had resisted sieges for a thousand years, but fell within weeks to Ottoman bombard artillery.' }
    ],
    prompt: 'In 2–3 sentences, explain how gunpowder technology caused the expansion of ONE specific land-based empire. Identify the cause (gunpowder), explain the mechanism (what it allowed the empire to do), and connect it to a specific territorial gain or conquest.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Gunpowder and Military Expansion',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Gunpowder weapons, cannons, matchlocks, and military advantage.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how gunpowder technology changed warfare and enabled land-based empires to expand their territories after c. 1450. Use specific evidence, name a specific weapon, empire, or military event.',
      responseType: 'Checkpoint 1',
      terms: ['gunpowder', 'cannon', 'matchlock', 'bombard', 'Janissaries', 'devshirme', 'Ottoman', 'Mughal', 'Safavid', 'Qing'],
      focus: ['Name at least one specific gunpowder weapon and explain how it changed warfare.', 'Connect the military technology to territorial expansion by at least one empire.', 'Explain what advantage gunpowder weapons gave empires over their opponents.']
    },
    {
      title: 'Checkpoint 2: Empires and Constantinople',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Major empires, their geographic expansion, and the significance of 1453.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Describe the geographic expansion of at least TWO land-based empires after c. 1450. Then explain why the Ottoman conquest of Constantinople in 1453 was historically significant. Use specific evidence.',
      responseType: 'Checkpoint 2',
      terms: ['Ottoman Empire', 'Safavid Empire', 'Mughal Empire', 'Qing Dynasty', 'Constantinople', 'Istanbul', 'Byzantine Empire', 'Mehmed II', 'Bosphorus', 'trade routes'],
      focus: ['Name at least two land-based empires and describe specific regions they conquered.', 'Explain at least two reasons why the 1453 conquest of Constantinople mattered.', 'Connect the fall of Constantinople to broader changes in Eurasian trade or politics.']
    }
  ];
})();
