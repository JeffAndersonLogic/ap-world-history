(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1.I.A.i",
      "theme": "Economic Systems",
      "text": "Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes—including the Silk Roads—promoting the growth of powerful new trading cities.",
      "illustrativeExamples": [
        "Kashgar",
        "Samarkand"
      ]
    },
    {
      "code": "KC-3.1.I.C.i",
      "theme": "Economic Systems",
      "text": "The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.",
      "illustrativeExamples": [
        "Bills of exchange",
        "Banking houses",
        "Use of paper money"
      ]
    },
    {
      "code": "KC-3.3.I.B",
      "theme": "Economic Systems",
      "text": "Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Roads of Silk and Exchange',
    embedUrl: 'first-and-10-topic-2-1-silk-roads-capture.html',
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
    first10: '../assets/images/module-art/unit-2/topic-2-1/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-1/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-1/besurreal.svg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_Trade_%28c.1200_CE%29.jpg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-1/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-1/evidence.svg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-1/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-1/checkpoint2.svg'
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
    title: 'AP Skill Builder: Build a Silk Roads Cause-and-Effect Chain',
    intro: 'Causation asks WHY a development occurred, HOW a cause produced an outcome, and WHAT effects followed. For the Silk Roads, separate enabling causes from effects, then make the connection between them explicit. Do not simply list one cause and one effect as unrelated facts.',
    steps: [
      { label: '1. Choose an enabling cause', text: '<strong>Possible causes:</strong> state protection, pastoral nomad intermediaries, caravanserais and relay stations, credit and money economies, or rising demand for luxury goods.' },
      { label: '2. Explain the mechanism', text: 'Ask what problem the cause solved. Example: caravanserais reduced the risk and cost of long-distance travel by giving merchants secure places to rest, trade, and resupply.' },
      { label: '3. Choose an effect', text: '<strong>Immediate effects:</strong> movement of luxury goods, religions, technologies, and disease.<br><strong>Longer-term effects:</strong> growth of trading cities, wealth for intermediary states, wider cultural diffusion, and vulnerability to plague.' },
      { label: '4. Connect cause to effect', text: 'Use causal language such as <strong>because</strong>, <strong>therefore</strong>, <strong>which allowed</strong>, or <strong>as a result</strong>. The connection is the reasoning.' },
      { label: 'Response frame', text: 'Because ___ made long-distance exchange ___, ___. <strong>As a result</strong>, ___, which changed ___ by ___.' }
    ],
    prompt: 'Write 2–3 sentences identifying one cause of Silk Road growth and one effect. Use specific evidence and explain the mechanism connecting the cause to the effect.'
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
      focus: ['Identify at least two distinct effects.', 'Use specific evidence, name a good, technology, religion, or disease.', 'Explain how the effect changed a society or region along the routes.']
    }
  ];
})();
