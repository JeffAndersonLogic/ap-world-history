(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1",
      "theme": "Networks of Exchange",
      "text": "A deepening and widening of networks of human interaction within and across regions contributed to cultural, technological, and biological diffusion within and between various societies.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.1.I.A.i",
      "theme": "Networks of Exchange",
      "text": "Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes—including the Silk Roads—promoting the growth of powerful new trading cities.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.1.I.C.i",
      "theme": "Networks of Exchange",
      "text": "The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.3",
      "theme": "Networks of Exchange",
      "text": "Changes in trade networks resulted from and stimulated increasing productive capacity, with important implications for social and gender structures and environmental processes.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.3.I.B",
      "theme": "Networks of Exchange",
      "text": "Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Comparing the Networks',
    embedUrl: 'first-and-10-topic-2-7-comparison-capture.html',
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
    first10:         '../assets/images/module-art/unit-2/topic-2-7/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-7/contentdelivery.svg',
    beSurreal:       '../assets/images/module-art/unit-2/topic-2-7/besurreal.svg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
    checkpoint1:     '../assets/images/module-art/unit-2/topic-2-7/checkpoint1.svg',
    evidence:        '../assets/images/module-art/unit-2/topic-2-7/evidence.svg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom:     '../assets/images/module-art/unit-2/topic-2-7/beintheroom.svg',
    checkpoint2:     '../assets/images/module-art/unit-2/topic-2-7/checkpoint2.svg'
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
    title: 'AP Skill Builder: Compare the Trade Networks',
    intro: 'Comparison is strongest when you choose TWO networks and compare the SAME category in both. Use the matrix to select a category, collect balanced evidence, state a similarity or difference, and then explain why the pattern existed. Do not write three separate network summaries.',
    steps: [
      { label: '1. Choose two networks and one category', text: '<div style="overflow-x:auto;margin-top:.6rem"><table style="width:100%;border-collapse:collapse;font-size:.88rem"><thead><tr><th style="padding:.5rem;border:1px solid #999;text-align:left">Category</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Silk Roads</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Indian Ocean</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Trans-Saharan</th></tr></thead><tbody><tr><td style="padding:.5rem;border:1px solid #999"><strong>Geography</strong></td><td style="padding:.5rem;border:1px solid #999">Overland; steppe and deserts</td><td style="padding:.5rem;border:1px solid #999">Maritime; seasonal monsoon winds</td><td style="padding:.5rem;border:1px solid #999">Desert crossing; Sahara and Sahel</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Transportation / technology</strong></td><td style="padding:.5rem;border:1px solid #999">Camels, caravans, caravanserais</td><td style="padding:.5rem;border:1px solid #999">Dhows/larger ships, compass, astrolabe, monsoon knowledge</td><td style="padding:.5rem;border:1px solid #999">Camels, improved saddles, caravans, oases</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Major goods</strong></td><td style="padding:.5rem;border:1px solid #999">Silk, porcelain, luxury goods</td><td style="padding:.5rem;border:1px solid #999">Spices, textiles, gold, porcelain</td><td style="padding:.5rem;border:1px solid #999">Gold, salt, textiles</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Cultural diffusion</strong></td><td style="padding:.5rem;border:1px solid #999">Buddhism, Islam, technology, plague</td><td style="padding:.5rem;border:1px solid #999">Islam, merchant diasporas, blended port cultures</td><td style="padding:.5rem;border:1px solid #999">Islam, scholarship, Arabic literacy</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>States / cities</strong></td><td style="padding:.5rem;border:1px solid #999">Mongol khanates, Samarkand, Kashgar</td><td style="padding:.5rem;border:1px solid #999">Kilwa, Calicut, Malacca</td><td style="padding:.5rem;border:1px solid #999">Mali, Timbuktu</td></tr></tbody></table></div>' },
      { label: '2. Gather balanced evidence', text: 'Use one specific piece of evidence from each network in the SAME row/category. A comparison needs evidence on both sides.' },
      { label: '3. State the similarity or difference', text: 'Be precise. Example: both routes depended on specialized transportation, but Indian Ocean trade relied on seasonal wind knowledge while trans-Saharan trade relied on camel technology and oasis networks.' },
      { label: '4. Explain why', text: 'Connect the pattern to geography, technology, demand, political support, or cultural networks. This is what turns a list of facts into historical comparison.' },
      { label: 'Response frame', text: 'Both ___ and ___ ___. <strong>However</strong>, ___ while ___ <strong>because</strong> ___.' }
    ],
    prompt: 'Choose TWO trade networks and ONE category from the matrix. Write 3–4 sentences identifying one meaningful similarity OR difference, using specific evidence from both networks and explaining why the pattern existed.'
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
