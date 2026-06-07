(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-2.3.I.B',
      theme: 'Networks of Exchange',
      text: 'Goods being traded along the Silk Roads in the postclassical era included luxury products of the East—silk, porcelain, and spices—as well as horses from Central Asia going east.',
      illustrativeExamples: ['Silk', 'Porcelain', 'Spices', 'Horses']
    },
    {
      code: 'KC-2.3.I.C',
      theme: 'Networks of Exchange',
      text: 'The trade on the Silk Roads had several consequences, including the spread of disease, most notably the Bubonic Plague.',
      illustrativeExamples: ['Bubonic Plague', 'Black Death']
    },
    {
      code: 'KC-2.3.I.D',
      theme: 'Networks of Exchange',
      text: 'The trade on the Silk Roads also contributed to the spread of ideas and technologies, including paper, printing, and gunpowder.',
      illustrativeExamples: ['Paper', 'Printing', 'Gunpowder', 'Compass']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Roads of Silk and Exchange',
    embedUrl: 'first-and-10-topic-2-1-silk-roads.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Overland routes', detail: 'The main Silk Road corridors stretched from China through Central Asia and Persia to the Mediterranean.' },
      { label: 'Relay stations and oases', detail: 'Caravanserais provided rest, security, and commerce at regular intervals along the routes.' },
      { label: 'Pastoral nomads', detail: 'Nomadic peoples in Central Asia served as intermediaries, guides, and protectors of caravans.' },
      { label: 'Geographic takeaway', detail: 'The routes required infrastructure, security, and cooperation across political boundaries.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Along_the_River_During_the_Qingming_Festival_%28detail_of_original%29.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_43_Abu_Zayd_and_al-Harith_travelling.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_06_the_Governor_of_Maraghah.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/A_Library_in_Golden_Islamic_Age.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Hereford-Karte.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Ahmed_Mosque_Istanbul_Turkey_retouched.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/silk-road-merchant.html',
    desc: 'Become a Silk Road merchant in the 13th century, negotiate with caravanserai owners, and decide which goods to carry across Central Asia.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Noodles, Pasta, and Global Food',
    text: 'Historians debate whether pasta traveled westward from China along Silk Road routes, or whether it developed independently in the Mediterranean world. Either way, the Silk Roads carried food crops, cooking techniques, and agricultural knowledge across Afro-Eurasia. Cotton, citrus, and sugarcane all moved along these networks, reshaping diets and landscapes.',
    prompt: 'What does the movement of crops and food ideas along trade routes reveal about connectivity that luxury goods alone cannot?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Cause and Effect Along the Silk Roads',
    intro: 'Causation means identifying WHY something happened and WHAT it caused. For the Silk Roads, you need to explain both what enabled long-distance trade AND what resulted from it.',
    steps: [
      { label: 'Enabling causes', text: 'State-building, pastoral nomads as intermediaries, caravanserais, and demand for luxury goods drove Silk Road exchange.' },
      { label: 'Immediate effects', text: 'Luxury goods, technology, religions, and disease moved across Afro-Eurasia through merchant and traveler networks.' },
      { label: 'Long-term consequences', text: 'Urbanization along routes, wealth accumulation in intermediary states, plague spread, and technology diffusion reshaped societies.' }
    ],
    prompt: 'Identify one cause of Silk Road growth and one effect, then explain the connection between them in 2-3 sentences.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Causes of Silk Road Exchange',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'State-building, pastoral nomads, merchants, and trade infrastructure.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain two causes of growth in Silk Road exchange. Use specific evidence such as state support, pastoral nomads, or caravanserais.',
      responseType: 'Checkpoint 1',
      terms: ['caravanserai', 'pastoral nomads', 'relay stations', 'merchants', 'luxury goods', 'state-building'],
      focus: ['Name at least two factors that enabled Silk Road trade.', 'Explain how each factor supported long-distance exchange.', 'Connect your evidence to the broader pattern of Afro-Eurasian connectivity.']
    },
    {
      title: 'Checkpoint 2: Effects of Silk Road Exchange',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Goods, ideas, technology, disease, and social effects.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain two effects of Silk Road exchange on societies along the routes. Use specific evidence such as trade goods, religions, technology, or plague.',
      responseType: 'Checkpoint 2',
      terms: ['silk', 'porcelain', 'spices', 'paper', 'gunpowder', 'Buddhism', 'Islam', 'plague', 'Black Death', 'diffusion'],
      focus: ['Identify at least two distinct effects.', 'Use specific evidence — name a good, technology, religion, or disease.', 'Explain how the effect changed a society or region along the routes.']
    }
  ];
})();
