(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.2.I.A',
      theme: 'Governance',
      text: 'Song China utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.III.D.i',
      theme: 'Culture',
      text: 'Chinese cultural traditions continued, and they influenced neighboring regions.',
      illustrativeExamples: ['Filial piety', 'Neo-Confucianism']
    },
    {
      code: 'KC-3.1.III.D.ii',
      theme: 'Culture',
      text: 'Buddhism and its core beliefs continued to shape societies in Asia and included a variety of branches, schools, and practices.',
      illustrativeExamples: ['Theravada', 'Mahayana', 'Tibetan']
    },
    {
      code: 'KC-3.3.III.A.i',
      theme: 'Economics',
      text: 'The economy of Song China became increasingly commercialized while continuing to depend on free peasant and artisan labor.',
      illustrativeExamples: ['Champa rice', 'Grand Canal', 'Flying cash']
    },
    {
      code: 'KC-3.1.I.D',
      theme: 'Economics',
      text: "The expansion of empires—including the Song Dynasty—facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors' economies and trade networks.",
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The World That Song Built',
    embedUrl: 'first-and-10-topic-1-1-song-china.html?v=response-builder-v3',
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
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Huizong.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song%20Imperial%20Examination.JPG',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Palastexamen-SongDynastie.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zhu%20xi.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Confucius_Tang_Dynasty.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Huizong.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg'
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
    title: 'Place Song China in the Bigger Historical Picture',
    intro: 'Contextualization means explaining the broader historical setting around a topic. For Song China, that means connecting the dynasty to long-standing Chinese traditions and to wider Afro-Eurasian patterns of trade, technology, urbanization, and state power.',
    steps: [
      { label: 'Before', text: 'Earlier Chinese dynasties had already used Confucian ideas, imperial rule, bureaucracy, and the Mandate of Heaven.' },
      { label: 'During', text: 'The Song expanded scholar-official government while agriculture, canals, printing, paper money, and cities strengthened the economy.' },
      { label: 'Beyond China', text: 'Song products, technologies, and commercial activity connected East Asia to wider Afro-Eurasian trade networks.' }
    ],
    prompt: 'Write two contextualization sentences that explain the broader setting for Song China before making a claim about its power or prosperity.'
  };

  lesson.captureUrls = {
    first10:       '',
    skillBuilder:  '<a class="btn secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=1.1+-+Song+China&entry.2107637366=AP+Skill+Builder" target="_blank" rel="noopener">SUBMIT TO GOOGLE FORM</a>',
    checkpoint1:   '<a class="btn secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=1.1+-+Song+China&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">SUBMIT TO GOOGLE FORM</a>',
    evidenceLab:   '<a class="btn secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=1.1+-+Song+China&entry.2107637366=Evidence+Lab" target="_blank" rel="noopener">SUBMIT TO GOOGLE FORM</a>',
    primarySource: '<a class="btn secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=1.1+-+Song+China&entry.2107637366=Primary+Source" target="_blank" rel="noopener">SUBMIT TO GOOGLE FORM</a>',
    checkpoint2:   '<a class="btn secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=1.1+-+Song+China&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">SUBMIT TO GOOGLE FORM</a>',
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
      prompt: 'Explain how cultural traditions and economic developments helped Song China influence East Asia and become more commercialized.',
      responseType: 'Checkpoint 2',
      terms: ['Confucianism', 'Buddhism', 'Champa rice', 'Grand Canal', 'paper money', 'commercialization', 'urbanization', 'printing'],
      focus: ['Use one cultural example.', 'Use one economic or technological example.', 'Explain the connection to East Asian influence, population growth, commercial expansion, or trade networks.']
    }
  ];
})();