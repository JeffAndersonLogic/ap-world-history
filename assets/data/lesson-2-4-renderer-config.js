(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.1.II.A.ii',
      theme: 'Technology and Innovation',
      text: 'The growth of interregional trade was encouraged by innovations in existing transportation technologies.',
      illustrativeExamples: ['Camel saddle', 'Caravans']
    },
    {
      code: 'KC-3.1.I.A.iv',
      theme: 'Technology and Innovation',
      text: 'Improved transportation technologies and commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the trans-Saharan trade network.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.E.ii',
      theme: 'Governance',
      text: 'The expansion of empires, including Mali in West Africa, facilitated Afro-Eurasian trade and communication as new people were drawn into the economies and trade networks.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Gold, Salt, and the Desert Road',
    embedUrl: 'first-and-10-topic-2-4-trans-saharan.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Trans-Saharan routes', detail: 'Major caravan routes crossed the Sahara connecting the Mediterranean coast to the Sahel and West African states.' },
      { label: 'West African goldfields', detail: 'The Wangara gold-producing region in West Africa supplied gold that was essential to Mediterranean and Islamic economies.' },
      { label: 'Salt mines', detail: 'Saharan salt deposits at Taghaza were as valuable as gold to West African societies that lacked dietary salt.' },
      { label: 'Geographic takeaway', detail: 'The Sahara was not a barrier but a connector, camel technology made the desert crossable and created mutual dependency between north and south.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/module-cards/sahara-caravan-1300ce.jpg',
    first10:         '../assets/images/module-cards/mosque-kairouan-800ce.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wall_of_the_great_enclosure%2C_Great_Zimbabwe.JPG',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg',
    skill:           '../assets/images/module-cards/kilwa-kisiwani-mosque.jpg',
    checkpoint1:     '../assets/images/module-cards/persepolis-gate-nations.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Interior_of_great_enclosure%2CG.Zimbabwe.JPG',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom:     '../assets/images/module-cards/abbasid-baghdad-9thc.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Biet_Giorgis%2C_Lalibela%2C_Ethiopia_(24076354516).jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/mali-court.html',
    desc: 'You are a merchant arriving in Mali\'s capital. Negotiate with royal officials, observe the court of Mansa Musa, and decide how to present your goods and intentions.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Mansa Musa\'s Hajj and the Price of Gold',
    text: 'In 1324–1325, Mansa Musa of Mali made his pilgrimage to Mecca with a caravan of 60,000 people and 100 camel-loads of gold dust. He distributed so much gold in Cairo and along his route that gold prices in the Mediterranean world crashed and did not recover for over a decade. One man\'s religious journey accidentally caused an economic crisis across two continents.',
    prompt: 'What does the economic impact of Mansa Musa\'s pilgrimage reveal about how connected the Afro-Eurasian world was by 1324?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'What Caused Trans-Saharan Trade to Grow?',
    intro: 'Causation means identifying the factors that made something possible or caused it to change. For trans-Saharan trade, you need to explain both the technological and environmental causes AND the economic and cultural causes of growth.',
    steps: [
      { label: 'Technology as cause', text: 'The improved camel saddle allowed camels to carry heavier loads more efficiently, making large-scale trans-Saharan caravans viable.' },
      { label: 'Economic cause', text: 'Demand for gold in the Islamic world and Mediterranean economies, combined with West African need for salt, created the economic logic for trans-Saharan exchange.' },
      { label: 'State-building effect', text: 'Trans-Saharan trade generated enormous wealth that funded powerful West African states like Ghana and Mali, which in turn protected and expanded trade routes.' }
    ],
    prompt: 'Write two sentences explaining how camel technology and economic demand together caused the growth of trans-Saharan trade.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Technology and Trade Goods',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Camel technology, caravan organization, gold, and salt.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how camel technology and demand for specific goods made trans-Saharan trade possible. Use specific evidence.',
      responseType: 'Checkpoint 1',
      terms: ['camel', 'camel saddle', 'caravan', 'gold', 'salt', 'Taghaza', 'Wangara', 'oasis'],
      focus: ['Explain the role of camels or camel technology.', 'Name the main goods traded and why each was valuable.', 'Connect the technology and goods to why this trade route existed.']
    },
    {
      title: 'Checkpoint 2: West African States and Cultural Effects',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Mali Empire, Islam, Timbuktu, and Mansa Musa.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain two effects of trans-Saharan trade on West African societies. Use specific evidence such as the Mali Empire, Mansa Musa, or the spread of Islam.',
      responseType: 'Checkpoint 2',
      terms: ['Mali Empire', 'Mansa Musa', 'Timbuktu', 'Islam', 'hajj', 'mosque', 'scholarship', 'gold'],
      focus: ['Name at least two effects of trans-Saharan trade on West Africa.', 'Use specific evidence, a ruler, city, religion, or institution.', 'Explain how each effect changed West African society or its connections to the wider world.']
    }
  ];
})();
