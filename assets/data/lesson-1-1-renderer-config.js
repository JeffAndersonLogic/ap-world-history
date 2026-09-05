(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.2.I.A",
      "theme": "Governance",
      "text": "Empires and states in Afro-Eurasia and the Americas demonstrated continuity, innovation, and diversity in the 13th century. This included the Song Dynasty of China, which utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.1.III.D.i",
      "theme": "Culture",
      "text": "Chinese cultural traditions continued, and they influenced neighboring regions.",
      "illustrativeExamples": [
        "Filial piety in East Asia",
        "Influence of Neo-Confucianism and Buddhism in East Asia",
        "Confucian traditions of both respect for and expected deference from women",
        "Chinese literary and scholarly traditions and their spread to Heian Japan and Korea"
      ]
    },
    {
      "code": "KC-3.1.III.D.ii",
      "theme": "Culture",
      "text": "Buddhism and its core beliefs continued to shape societies in Asia and included a variety of branches, schools, and practices.",
      "illustrativeExamples": [
        "Theravada",
        "Mahayana",
        "Tibetan"
      ]
    },
    {
      "code": "KC-3.3.III.A.i",
      "theme": "Economics",
      "text": "The economy of Song China became increasingly commercialized while continuing to depend on free peasant and artisanal labor.",
      "illustrativeExamples": [
        "Champa rice",
        "Transportation innovations, like the Grand Canal expansion",
        "Steel and iron production",
        "Textiles and porcelains for export"
      ]
    },
    {
      "code": "KC-3.1.I.D",
      "theme": "Economics",
      "text": "The economy of Song China flourished as a result of increased productive capacity, expanding trade networks, and innovations in agriculture and manufacturing.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The World That Song Built',
    embedUrl: 'first-and-10-topic-1-1-song-china-capture.html?v=response-id-fix-v1',
    note: 'Use the embedded rich narrative reading window below. Answer the three questions, build your AI Coach prompt, then return to the 1.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Song Dynasty territory', detail: 'Core area ruled by the Song state shown on the map.' },
      { label: 'Liao and Western Xia', detail: 'Neighboring states that help explain frontier pressure, diplomacy, and military concerns.' },
      { label: 'Major East Asian context', detail: 'The map should be read as part of a wider East Asian world of exchange, influence, and conflict.' },
      { label: 'Geographic takeaway', detail: 'Song China needed bureaucracy, infrastructure, revenue, and trade systems to hold together a complex state.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/China_-_Song_Dynasty-en.svg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Along_the_River_During_the_Qingming_Festival_%28detail_of_original%29.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Huizong.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song%20Imperial%20Examination.JPG',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Palastexamen-SongDynastie.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zhu%20xi.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Confucius_Tang_Dynasty.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Huizong.jpg',
    checkpoint2: '../assets/images/module-art/unit-1/topic-1-1/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-1/song-court.html',
    desc: 'Enter the Song court, choose a historical role, advise the emperor, and defend a policy recommendation with evidence.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Printed Menus and Urban Food Culture',
    text: 'Song cities were so commercialized that some urban restaurants used printed menus and specialized food services. That small detail matters: it shows that printing, urbanization, consumer culture, and commerce were not abstract developments. They shaped everyday life in crowded cities such as Kaifeng and Hangzhou.',
    prompt: 'What does this detail reveal about Song China beyond emperors and exams?'
  };

  lesson.skillBuilder = {
    label: 'Contextualization practice',
    title: 'AP Skill Builder: Place Song China in the Bigger Historical Picture',
    intro: 'Contextualization explains the broader historical setting that helps a reader understand your argument. It is not just another fact about Song China. Good context begins before the specific claim, establishes a larger pattern, and then bridges that pattern to the topic you are about to explain.',
    steps: [
      { label: '1. Choose a broader setting', text: '<strong>Earlier Chinese tradition:</strong> imperial rule, Confucianism, bureaucracy, Mandate of Heaven.<br><strong>Wider East Asian setting:</strong> Chinese cultural influence, Buddhism, neighboring states.<br><strong>Afro-Eurasian setting:</strong> expanding trade, urbanization, technology, and commercial exchange.' },
      { label: '2. Explain the context', text: 'Write what was already happening before or around the Song period. Do not jump immediately to your main Song evidence.' },
      { label: '3. Bridge to Song China', text: 'Show how the broader pattern helps explain the specific topic. Example: earlier Chinese governments already used Confucian bureaucracy; the Song expanded and deepened that tradition through scholar-official government.' },
      { label: '4. Keep context separate from the claim', text: 'Context sets the stage. Your claim answers the question. A strong response uses context to make the claim easier to understand, not to replace it.' },
      { label: 'Response frame', text: '<strong>Before c. 1200</strong>, ___. This broader pattern mattered because ___. <strong>By the Song period</strong>, ___.' }
    ],
    prompt: 'Write 2–3 contextualization sentences for a claim about Song China. Establish one broader historical pattern, explain why it matters, and bridge it directly to Song political power, cultural influence, or economic prosperity.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Government and Belief Systems',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Government, Confucianism, bureaucracy, and legitimacy.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how Song China used Confucianism, imperial bureaucracy, and/or civil service exams to maintain and justify rule.',
      responseType: 'Checkpoint 1',
      terms: ['bureaucracy', 'civil service exams', 'scholar-officials', 'Confucianism', 'Neo-Confucianism', 'Mandate of Heaven'],
      focus: ['Name at least one governing institution.', 'Name at least one belief system or political idea.', 'Explain how the institution or belief helped rulers maintain order, legitimacy, or control.']
    },
    {
      title: 'Checkpoint 2: Culture, Economy, and Connections',
      subtitle: 'Checks Learning Targets 2-3 and Success Criteria 2-3.',
      cardDesc: 'Culture, economy, commercialization, and influence.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'How did Song China\'s economic innovations, including new agricultural techniques, manufacturing advances, and the commercialization of its economy, affect not only Chinese society but also trade across the wider Afro-Eurasian world? In your response, connect at least one Song development to the Indian Ocean trade networks or Silk Road exchange routes that linked China to South Asia, Southeast Asia, the Islamic world, and beyond.',
      responseType: 'Checkpoint 2',
      skill: 'Causation and contextualization',
      terms: ['Confucianism', 'Buddhism', 'Champa rice', 'Grand Canal', 'paper money', 'commercialization', 'urbanization', 'printing', 'Indian Ocean trade networks', 'Silk Road connections'],
      focus: ['Use one cultural example.', 'Use one economic or technological example.', 'Explain the connection to East Asian influence, population growth, commercial expansion, or trade networks.']
    }
  ];
})();