(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-2.3.II.A',
      theme: 'Networks of Exchange',
      text: 'The Mongols\' conquest of much of Eurasia and their subsequent tolerance of local cultures helped facilitate trade and communication across that area.',
      illustrativeExamples: ['Pax Mongolica', 'Yam postal system', 'Khanates']
    },
    {
      code: 'KC-2.3.II.B',
      theme: 'Networks of Exchange',
      text: 'The Mongol Empire\'s expansion devastated many settled societies but created the conditions for intensified Afro-Eurasian exchange.',
      illustrativeExamples: ['Siege warfare', 'Conquest of Persia', 'Conquest of China']
    },
    {
      code: 'KC-2.3.II.C',
      theme: 'Networks of Exchange',
      text: 'The transmission of the bubonic plague across the Mongol Empire led to the devastating loss of life known as the Black Death.',
      illustrativeExamples: ['Bubonic plague', 'Black Death', 'Demographic collapse']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The World the Mongols Made',
    embedUrl: 'first-and-10-topic-2-2-mongol-empire.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Extent of the Mongol Empire', detail: 'At its height the Mongol Empire stretched from the Pacific coast of China to Eastern Europe.' },
      { label: 'The four khanates', detail: 'The empire was eventually divided into four khanates — Yuan, Ilkhanate, Golden Horde, and Chagatai — each governing a vast region.' },
      { label: 'Trade corridors', detail: 'The Pax Mongolica made Silk Road travel safer, enabling merchants, diplomats, and missionaries to cross Eurasia.' },
      { label: 'Geographic takeaway', detail: 'Mongol control of overland routes from China to Persia and beyond created an unprecedented transregional network.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/mongol-court.html',
    desc: 'Enter the Mongol court of Kublai Khan. You are a foreign diplomat or merchant — navigate the court, negotiate trade access, and report back to your home ruler.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Marco Polo\'s Kublai Khan',
    text: 'Marco Polo spent 17 years in Kublai Khan\'s court and returned to describe marvels that Europeans dismissed as fantasy: paper money, coal as fuel, cities of millions, and postal relay stations every 25 miles. His account reveals the scale of the Mongol Empire and why the Pax Mongolica made it possible for a Venetian merchant to travel from Italy to China.',
    prompt: 'What does Marco Polo\'s experience reveal about what the Pax Mongolica made possible that had never existed before?'
  };

  lesson.skillBuilder = {
    label: 'Continuity and Change practice',
    title: 'What Did the Mongols Change — and What Stayed the Same?',
    intro: 'Continuity and Change Over Time (CCOT) asks what transformed and what persisted. The Mongol conquests disrupted many societies while also continuing and intensifying existing patterns of exchange.',
    steps: [
      { label: 'Before the Mongols', text: 'The Silk Roads already existed, but political fragmentation made long-distance travel dangerous and expensive.' },
      { label: 'During Mongol rule', text: 'The Pax Mongolica reduced political barriers to travel; trade, diplomacy, and disease all moved faster.' },
      { label: 'After the Mongol collapse', text: 'The khanates fragmented, but trade networks, the bubonic plague, and cultural exchanges they enabled persisted.' }
    ],
    prompt: 'Write two sentences: one describing a continuity in Afro-Eurasian exchange across the Mongol period, and one describing a significant change.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Mongol Conquest and Administration',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Military tactics, governance, religious tolerance, and administration.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how the Mongols conquered and administered their vast empire. Use specific evidence such as military tactics, the khanate system, or religious tolerance.',
      responseType: 'Checkpoint 1',
      terms: ['Genghis Khan', 'khanate', 'Pax Mongolica', 'Yam', 'siege warfare', 'cavalry', 'religious tolerance'],
      focus: ['Describe at least one military method.', 'Describe at least one administrative method.', 'Explain how these methods helped hold together a vast, diverse empire.']
    },
    {
      title: 'Checkpoint 2: The Pax Mongolica and Its Consequences',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Trade, exchange, plague, and the effects of connectivity.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain two effects of the Pax Mongolica on Afro-Eurasian exchange. Consider both positive effects (trade, diplomacy) and negative effects (plague).',
      responseType: 'Checkpoint 2',
      terms: ['Pax Mongolica', 'trade', 'diplomacy', 'plague', 'Black Death', 'Marco Polo', 'Ibn Battuta', 'connectivity'],
      focus: ['Name at least two distinct effects.', 'Explain whether each effect was connective, destructive, or both.', 'Connect the Pax Mongolica to wider Afro-Eurasian patterns of exchange and disruption.']
    }
  ];
})();
