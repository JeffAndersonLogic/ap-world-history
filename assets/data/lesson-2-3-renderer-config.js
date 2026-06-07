(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-2.3.III.A',
      theme: 'Networks of Exchange',
      text: 'The Indian Ocean trading network was the world\'s largest sea-based system of exchange, connecting East Africa, the Arabian Peninsula, South Asia, and Southeast Asia.',
      illustrativeExamples: ['Dhow', 'Monsoon winds', 'Compass']
    },
    {
      code: 'KC-2.3.III.B',
      theme: 'Networks of Exchange',
      text: 'Goods traded in the Indian Ocean network included spices, textiles, precious metals, and enslaved people, creating interdependence across regions.',
      illustrativeExamples: ['Spices', 'Cotton textiles', 'Gold', 'Ivory']
    },
    {
      code: 'KC-2.3.III.C',
      theme: 'Networks of Exchange',
      text: 'The expansion of Indian Ocean trade led to the growth of port cities, the spread of Islam, and the development of diasporic merchant communities.',
      illustrativeExamples: ['Kilwa', 'Calicut', 'Malacca', 'Quanzhou']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Ocean That Connected the World',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Monsoon wind patterns', detail: 'Seasonal winds enabled predictable round-trip voyages between East Africa, Arabia, India, and Southeast Asia.' },
      { label: 'Major port cities', detail: 'Kilwa, Aden, Calicut, Quanzhou, and Malacca served as commercial hubs and centers of cultural exchange.' },
      { label: 'Trade goods and routes', detail: 'Spices from Southeast Asia, textiles from India, gold from East Africa, and porcelain from China all circulated across the network.' },
      { label: 'Geographic takeaway', detail: 'The Indian Ocean was not a barrier but a highway — predictable winds and maritime technology made it the world\'s busiest sea-based trade network.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Angkor_Wat_001.JPG',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur%20ship.JPG',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Hampi%20virupaksha%20temple.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_43_Abu_Zayd_and_al-Harith_travelling.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/A_Library_in_Golden_Islamic_Age.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Aqsa_mosque_(8682155875).jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Qutb_Minar_2022.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/indian-ocean-port.html',
    desc: 'You arrive in Kilwa, the great Swahili port city, as a merchant from Arabia. Navigate the market, negotiate with local rulers, and decide which goods to load for the return voyage.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Ibn Battuta\'s 75,000-Mile Journey',
    text: 'Ibn Battuta of Morocco traveled approximately 75,000 miles across the Indian Ocean world between 1325 and 1354 — more than any other person before the age of motorized transport. He visited Kilwa, Calicut, the Maldives, and dozens of other port cities. His journeys were possible because of the Indian Ocean\'s merchant networks, Arabic as a common language of commerce, and Islam as a shared cultural framework.',
    prompt: 'What made it possible for one man to travel 75,000 miles in the 14th century? What does that reveal about Indian Ocean connectivity?'
  };

  lesson.skillBuilder = {
    label: 'Contextualization practice',
    title: 'Place Indian Ocean Trade in the Bigger Picture',
    intro: 'Contextualization means explaining the broader historical setting around a topic. For Indian Ocean trade, that means connecting it to the wider patterns of Afro-Eurasian exchange, the spread of Islam, and the role of technology in enabling commerce.',
    steps: [
      { label: 'Before c. 1200', text: 'Indian Ocean trade had existed for centuries, connecting Rome, Arabia, India, and China through seasonal monsoon voyages.' },
      { label: 'c. 1200–1450', text: 'Trade intensified as port cities grew, Islamic merchant networks expanded, and demand for luxury goods increased across Afro-Eurasia.' },
      { label: 'Effects on societies', text: 'Port cities like Kilwa and Malacca grew wealthy; Islam spread through merchant diasporas; cultural blending produced Swahili civilization.' }
    ],
    prompt: 'Write two contextualization sentences that explain the broader setting for Indian Ocean trade before making a claim about its effects.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Technology and Patterns of Exchange',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Maritime technology, monsoon winds, and the mechanics of Indian Ocean trade.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how maritime technology and knowledge of monsoon winds enabled Indian Ocean trade. Use at least two specific examples.',
      responseType: 'Checkpoint 1',
      terms: ['monsoon', 'dhow', 'compass', 'lateen sail', 'navigation', 'seasonal winds'],
      focus: ['Name at least two pieces of technology or environmental knowledge.', 'Explain how each enabled long-distance sea trade.', 'Connect the technology to the broader pattern of Indian Ocean exchange.']
    },
    {
      title: 'Checkpoint 2: Goods, Peoples, and Cultural Consequences',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Trade goods, merchant diasporas, port cities, and the spread of Islam.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain two effects of Indian Ocean trade on the societies connected by these routes. Use specific evidence such as goods traded, diasporic communities, or the spread of Islam.',
      responseType: 'Checkpoint 2',
      terms: ['spices', 'textiles', 'gold', 'ivory', 'diaspora', 'Islam', 'Kilwa', 'Calicut', 'Swahili', 'port city'],
      focus: ['Name at least two effects.', 'Use specific place names or goods as evidence.', 'Explain how the effect changed societies along the Indian Ocean world.']
    }
  ];
})();
