(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.1.I.A.ii',
      theme: 'Economic Systems',
      text: 'Improved transportation technologies and commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the Indian Ocean, promoting the growth of powerful new trading cities.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.C.ii',
      theme: 'Economic Systems',
      text: 'The growth of interregional trade in luxury goods was encouraged by significant innovations in previously existing transportation and commercial technologies, including the use of the compass, the astrolabe, and larger ship designs.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.A.iii',
      theme: 'Economic Systems',
      text: 'The Indian Ocean trading network fostered the growth of states.',
      illustrativeExamples: ['City-states of the Swahili Coast', 'Gujarat', 'Sultanate of Malacca']
    },
    {
      code: 'KC-3.1.III.B',
      theme: 'Cultural Developments and Interactions',
      text: 'In key places along important trade routes, merchants set up diasporic communities where they introduced their own cultural traditions into the indigenous cultures and, in turn, indigenous cultures influenced merchant cultures.',
      illustrativeExamples: ['Arab and Persian communities in East Africa', 'Chinese merchant communities in Southeast Asia', 'Malay communities in the Indian Ocean basin']
    },
    {
      code: 'KC-3.2.II.A.iii',
      theme: 'Cultural Developments and Interactions',
      text: 'Interregional contacts and conflicts between states and empires encouraged significant technological and cultural transfers, including during Chinese maritime activity led by Ming admiral Zheng He.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.II.A.i',
      theme: 'Humans and the Environment',
      text: 'The expansion and intensification of long-distance trade routes often depended on environmental knowledge, including advanced knowledge of the monsoon winds.',
      illustrativeExamples: []
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
    first10:         '../assets/images/module-cards/kilwa-kisiwani-mosque.jpg',
    contentDelivery: '../assets/images/module-cards/angkor-wat-1150ce.jpg',
    beSurreal:       '../assets/images/module-cards/borobudur-temple-9thc.jpg',
    skill:           '../assets/images/module-cards/mosque-kairouan-800ce.jpg',
    checkpoint1:     '../assets/images/module-cards/abbasid-baghdad-9thc.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    source:          '../assets/images/module-cards/persepolis-gate-nations.jpg',
    beInTheRoom:     '../assets/images/module-cards/lalibela-bete-giyorgis.jpg',
    checkpoint2:     '../assets/images/module-cards/sahara-caravan-1300ce.jpg'
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
