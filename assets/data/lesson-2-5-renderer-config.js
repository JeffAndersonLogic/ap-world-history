(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1.III.D",
      "theme": "Cultural Developments and Interactions",
      "text": "Increased cross-cultural interactions resulted in the diffusion of literary, artistic, and cultural traditions, as well as scientific and technological innovations.",
      "illustrativeExamples": [
        "The influence of Buddhism in East Asia",
        "The spread of Hinduism and Buddhism into Southeast Asia",
        "The spread of Islam in sub-Saharan Africa and Asia",
        "Gunpowder from China",
        "Paper from China"
      ]
    },
    {
      "code": "KC-3.3.II",
      "theme": "Cultural Developments and Interactions",
      "text": "The fate of cities varied greatly, with periods of significant decline and periods of increased urbanization, buoyed by rising productivity and expanding trade networks.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.1.III.C",
      "theme": "Cultural Developments and Interactions",
      "text": "As exchange networks intensified, an increasing number of travelers within Afro-Eurasia wrote about their travels.",
      "illustrativeExamples": [
        "Ibn Battuta",
        "Margery Kempe",
        "Marco Polo"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Ideas on the Move',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 2.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silk Roads cultural corridor', detail: 'The overland routes carried not only goods but Buddhism, Islam, paper, printing, and gunpowder across Afro-Eurasia.' },
      { label: 'Islam\'s spread via trade', detail: 'Muslim merchants carried their faith along Indian Ocean and trans-Saharan routes into Southeast Asia, East Africa, and West Africa.' },
      { label: 'Technology diffusion direction', detail: 'Many technologies moved from east to west: Chinese paper and printing reached the Islamic world, then Europe.' },
      { label: 'Geographic takeaway', detail: 'Cultural diffusion followed the same routes as goods, trade networks were also highways for religion, technology, and ideas.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_Trade_%28c.1200_CE%29.jpg',
    first10: '../assets/images/module-art/unit-2/topic-2-5/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-5/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-5/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-5/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-5/checkpoint1.svg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    source: '../assets/images/module-art/unit-2/topic-2-5/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-5/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-5/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/silk-road-scholar.html',
    desc: 'You are a scholar traveling between Baghdad and Chang\'an. What knowledge do you carry? What will you bring back? Navigate the intellectual exchange of the Abbasid and Tang/Song worlds.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: How Paper Changed Everything',
    text: 'Paper was invented in China roughly 2,000 years ago. It reached the Islamic world through the Silk Roads by the 8th century, where scholars in Baghdad\'s House of Wisdom used it to preserve and translate Greek, Indian, and Persian texts. By the 11th century paper reached Europe. Without the Silk Roads, the Islamic Golden Age, and later the European Renaissance, would have been slower, harder, and very different.',
    prompt: 'How did a single material traveling across trade routes change the history of human knowledge? What does this reveal about how cultural diffusion works?'
  };

  lesson.skillBuilder = {
    label: 'Continuity and Change practice',
    title: 'AP Skill Builder: Track What Stayed the Same and What Changed as Ideas Spread',
    intro: 'CCOT is easier when you track ONE religion, technology, or cultural practice across time and space. First identify what remained recognizable; then identify what changed as the idea entered a new region. Finally, explain why adaptation or continuity occurred.',
    steps: [
      { label: '1. Choose one thing to track', text: '<strong>Religion choices:</strong> Buddhism or Islam.<br><strong>Technology choices:</strong> paper, printing, gunpowder, compass.<br><strong>Traveler/network choices:</strong> merchant diasporas or travel writing.' },
      { label: '2. Identify a continuity', text: '<strong>Buddhism:</strong> core teachings remained recognizable across regions.<br><strong>Islam:</strong> core beliefs and practices remained recognizable even as local customs differed.<br><strong>Technology:</strong> the basic function of paper, printing, or gunpowder persisted as it moved.' },
      { label: '3. Identify a change', text: '<strong>Buddhism:</strong> regional branches such as Mahayana, Theravada, and Tibetan traditions developed.<br><strong>Islam:</strong> local cultural practices blended with Islamic institutions in Africa and Southeast Asia.<br><strong>Technology:</strong> societies adapted imported technologies to new military, administrative, or commercial uses.' },
      { label: '4. Explain why', text: 'Ask what caused the change or preserved the continuity: local traditions, political needs, merchant communities, religious institutions, or the practical usefulness of the technology.' },
      { label: 'Response frame', text: '<strong>As ___ spread</strong>, ___ remained consistent because ___. <strong>However</strong>, ___ changed when/in ___ because ___.' }
    ],
    prompt: 'Choose ONE religion or technology that spread along trade routes. Write 3–4 sentences identifying one continuity and one change, using specific regional evidence and explaining why the change occurred or why the continuity persisted.'
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
      focus: ['Name a specific religion.', 'Explain the mechanism of spread, who carried it and along which routes.', 'Describe where it spread and what effect it had on receiving societies.']
    },
    {
      title: 'Checkpoint 2: Technology and Agricultural Diffusion',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Paper, printing, gunpowder, compass, and crop diffusion.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how one technology or crop diffused along trade routes and affected societies. Use specific evidence.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['paper', 'printing', 'gunpowder', 'compass', 'cotton', 'sugar', 'citrus', 'diffusion', 'technology transfer'],
      focus: ['Name a specific technology or crop.', 'Explain where it originated and where it spread to.', 'Explain how it changed the society that received it.']
    }
  ];
})();
