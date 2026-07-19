(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.1',
      theme: 'Networks of Exchange',
      text: 'A deepening and widening of networks of human interaction within and across regions contributed to cultural, technological, and biological diffusion within and between various societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.A.i',
      theme: 'Networks of Exchange',
      text: 'Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the Silk Roads, promoting the growth of powerful new trading cities.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.C.i',
      theme: 'Networks of Exchange',
      text: 'The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3',
      theme: 'Networks of Exchange',
      text: 'Changes in trade networks resulted from and stimulated increasing productive capacity, with important implications for social and gender structures and environmental processes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3.I.B',
      theme: 'Networks of Exchange',
      text: 'Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Comparing the Networks',
    embedUrl: 'first-and-10-topic-2-7-comparison.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silk Roads (overland)', detail: 'Stretched from China through Central Asia and Persia to the Mediterranean; used camels and relay stations.' },
      { label: 'Indian Ocean (maritime)', detail: 'Connected East Africa, Arabia, India, and Southeast Asia using seasonal monsoon winds and dhow ships.' },
      { label: 'Trans-Saharan (desert)', detail: 'Linked West Africa to North Africa and the Mediterranean using camel caravans and oasis towns.' },
      { label: 'Geographic takeaway', detail: 'All three networks overlapped at key nodes like Cairo and Aden, creating an integrated Afro-Eurasian exchange system.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    first10:         '../assets/images/module-cards/steppe-eurasian-1200ce.jpg',
    contentDelivery: '../assets/images/module-cards/kilwa-kisiwani-mosque.jpg',
    beSurreal:       '../assets/images/module-cards/sahara-caravan-1300ce.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
    checkpoint1:     '../assets/images/module-cards/mogao-caves-dunhuang.jpg',
    evidence:        '../assets/images/module-cards/mosque-kairouan-800ce.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom:     '../assets/images/module-cards/angkor-wat-1150ce.jpg',
    checkpoint2:     '../assets/images/module-cards/persepolis-gate-nations.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: 'You are a historian writing a comparative analysis of trade networks for a sultan\'s library. Use primary sources from three networks to build your argument about similarities and differences.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Ibn Battuta Compared All Three',
    text: 'Ibn Battuta of Morocco traveled on all three trade networks, he crossed the Sahara to Mali, sailed the Indian Ocean from East Africa to India and Southeast Asia, and traveled overland through Persia and Central Asia. No one in the 14th century had a better comparative view of Afro-Eurasian trade. His accounts reveal that the three networks were connected nodes in a single interlocking system, not isolated routes.',
    prompt: 'If you could travel all three networks as Ibn Battuta did, what single most important similarity and one most important difference would you report?'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Compare the Trade Networks: Similarities and Differences',
    intro: 'Comparison is a core AP World History skill. AP comparison questions ask you to identify a similarity AND a difference between two or more historical cases, with specific evidence for both.',
    steps: [
      { label: 'Similarity frame', text: 'All three networks: moved luxury goods long distances; spread religions via merchant contact; produced diasporic communities; generated wealth for intermediary states.' },
      { label: 'Difference frame', text: 'Technology: overland camels vs. monsoon sailing vs. desert caravans. Goods: silk/porcelain vs. spices/textiles vs. gold/salt. Cultural effects: Silk Roads spread Buddhism; Indian Ocean spread Islam to Southeast Asia; trans-Saharan spread Islam into West Africa.' },
      { label: 'AP writing tip', text: 'State the similarity or difference directly, then provide evidence from at least two networks. Explain WHY the similarity or difference matters historically.' }
    ],
    prompt: 'Write one similarity sentence and one difference sentence about any two trade networks. Use specific evidence in each sentence.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Similarities Across Trade Networks',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'What the Silk Roads, Indian Ocean, and trans-Saharan routes shared.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify two similarities between any two of the three main trade networks (Silk Roads, Indian Ocean, trans-Saharan). Use specific evidence for each similarity.',
      responseType: 'Checkpoint 1',
      terms: ['similarity', 'luxury goods', 'religion', 'diaspora', 'connectivity', 'merchant community', 'cultural diffusion'],
      focus: ['State each similarity directly and clearly.', 'Use specific evidence from two different networks.', 'Explain why the similarity reveals a broader pattern of Afro-Eurasian connectivity.']
    },
    {
      title: 'Checkpoint 2: Differences Between Trade Networks',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'What distinguished the Silk Roads, Indian Ocean, and trans-Saharan routes from each other.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Identify two differences between any two of the three trade networks. Use specific evidence and explain why each difference mattered historically.',
      responseType: 'Checkpoint 2',
      terms: ['difference', 'technology', 'geography', 'goods', 'camel', 'dhow', 'monsoon', 'silk', 'gold', 'spices'],
      focus: ['State each difference directly and clearly.', 'Use specific evidence, technology, goods, or cultural effects.', 'Explain the historical significance of each difference.']
    }
  ];
})();
