(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-2.3.V.A',
      theme: 'Networks of Exchange',
      text: 'As trade networks intensified, so did the diffusion of religions, most notably Islam and Buddhism, into new regions via merchant contacts.',
      illustrativeExamples: ['Islam in West Africa', 'Buddhism in Southeast Asia', 'Christianity in East Africa']
    },
    {
      code: 'KC-2.3.V.B',
      theme: 'Networks of Exchange',
      text: 'Technologies including paper, printing, gunpowder, and the magnetic compass diffused along trade routes from their places of origin to new regions.',
      illustrativeExamples: ['Paper from China to Islamic world to Europe', 'Compass from China to Indian Ocean sailors', 'Gunpowder westward']
    },
    {
      code: 'KC-2.3.V.C',
      theme: 'Networks of Exchange',
      text: 'Agricultural products and crops, including cotton, sugar, and citrus fruits, spread along trade networks, transforming economies and diets.',
      illustrativeExamples: ['Cotton', 'Sugar', 'Citrus', 'Champa rice']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Ideas on the Move',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silk Roads cultural corridor', detail: 'The overland routes carried not only goods but Buddhism, Islam, paper, printing, and gunpowder across Afro-Eurasia.' },
      { label: 'Islam\'s spread via trade', detail: 'Muslim merchants carried their faith along Indian Ocean and trans-Saharan routes into Southeast Asia, East Africa, and West Africa.' },
      { label: 'Technology diffusion direction', detail: 'Many technologies moved from east to west: Chinese paper and printing reached the Islamic world, then Europe.' },
      { label: 'Geographic takeaway', detail: 'Cultural diffusion followed the same routes as goods — trade networks were also highways for religion, technology, and ideas.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/silk-road-scholar.html',
    desc: 'You are a scholar traveling between Baghdad and Chang\'an. What knowledge do you carry? What will you bring back? Navigate the intellectual exchange of the Abbasid and Tang/Song worlds.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: How Paper Changed Everything',
    text: 'Paper was invented in China roughly 2,000 years ago. It reached the Islamic world through the Silk Roads by the 8th century, where scholars in Baghdad\'s House of Wisdom used it to preserve and translate Greek, Indian, and Persian texts. By the 11th century paper reached Europe. Without the Silk Roads, the Islamic Golden Age — and later the European Renaissance — would have been slower, harder, and very different.',
    prompt: 'How did a single material traveling across trade routes change the history of human knowledge? What does this reveal about how cultural diffusion works?'
  };

  lesson.skillBuilder = {
    label: 'Continuity and Change practice',
    title: 'What Changed — and What Stayed the Same — As Ideas Spread?',
    intro: 'Cultural diffusion along trade routes rarely produced exact copies of originals. Religions, technologies, and ideas adapted as they moved. CCOT helps you track what changed and what remained recognizable.',
    steps: [
      { label: 'What stayed the same', text: 'Core doctrines of Buddhism and Islam remained recognizable across regions even as they adapted to local contexts.' },
      { label: 'What changed', text: 'Buddhism developed distinct branches (Mahayana in East Asia, Theravada in Southeast Asia, Tibetan in the Himalayas) as it diffused along trade routes.' },
      { label: 'Technology diffusion pattern', text: 'Technologies like paper and printing diffused from east to west, but their applications and social effects varied by region.' }
    ],
    prompt: 'Choose one religion or technology that spread along trade routes. Write two sentences: one about what stayed the same and one about what changed as it spread.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Religion and Cultural Diffusion',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Islam, Buddhism, Christianity, and how religions spread via trade.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how one religion spread along trade networks between c. 1200 and c. 1450. Use specific evidence about where, how, and through whom it spread.',
      responseType: 'Checkpoint 1',
      terms: ['Islam', 'Buddhism', 'Christianity', 'merchant', 'diaspora', 'mosque', 'diffusion', 'trade route'],
      focus: ['Name a specific religion.', 'Explain the mechanism of spread — who carried it and along which routes.', 'Describe where it spread and what effect it had on receiving societies.']
    },
    {
      title: 'Checkpoint 2: Technology and Agricultural Diffusion',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Paper, printing, gunpowder, compass, and crop diffusion.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how one technology or crop diffused along trade routes and affected societies. Use specific evidence.',
      responseType: 'Checkpoint 2',
      terms: ['paper', 'printing', 'gunpowder', 'compass', 'cotton', 'sugar', 'citrus', 'diffusion', 'technology transfer'],
      focus: ['Name a specific technology or crop.', 'Explain where it originated and where it spread to.', 'Explain how it changed the society that received it.']
    }
  ];
})();
