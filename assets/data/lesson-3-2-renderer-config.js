(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.classPresentation = {
    title: 'Class Slides: Empires: Administration',
    desc: 'Follow the story: guns won the land, and every ruler then had three jobs to hold it: find people who would serve, convince everyone he deserved to rule, and collect the money to pay for it all.',
    url: 'presentation-topic-3-2-student.html'
  };

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Unit 3: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain how rulers used a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      "code": "KC-4.3.I.C",
      "theme": "Governance",
      "text": "Recruitment and use of bureaucratic elites, as well as the development of military professionals, became more common among rulers who wanted to maintain centralized control over their populations and resources.",
      "illustrativeExamples": [
        "Ottoman devshirme",
        "Salaried samurai"
      ]
    },
    {
      "code": "KC-4.3.I.A",
      "theme": "Governance",
      "text": "Rulers continued to use religious ideas, art, and monumental architecture to legitimize their rule.",
      "illustrativeExamples": [
        "Mexica practice of human sacrifice",
        "European notions of divine right",
        "Songhai promotion of Islam",
        "Qing imperial portraits",
        "Incan sun temple of Cuzco",
        "Mughal mausolea and mosques",
        "European palaces, such as Versailles"
      ]
    },
    {
      "code": "KC-4.3.I.D",
      "theme": "Governance",
      "text": "Rulers used tribute collection, tax farming, and innovative tax-collection systems to generate revenue in order to forward state power and expansion.",
      "illustrativeExamples": [
        "Mughal zamindar tax collection",
        "Ottoman tax farming",
        "Mexica tribute lists",
        "Ming practice of collecting taxes in hard currency"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Holding What You Won',
    embedUrl: 'first-and-10-topic-3-2-empires-administration-capture.html?v=response-id-fix-v1',
    note: 'Read for the story: winning land was fast and holding it was hard, so every ruler needed people who serve, symbols that justify, and systems that pay.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'People who serve', detail: 'The Ottoman devshirme, Japan\'s salaried samurai and the Mughal mansabdars.' },
      { label: 'Symbols that justify', detail: 'Divine right and Versailles in France, Songhai\'s promotion of Islam, Qing imperial portraits, and Mughal tombs and mosques.' },
      { label: 'Systems that pay', detail: 'Ottoman tax farming, Mughal zamindars, Mexica tribute lists and Ming taxes in silver.' },
      { label: 'Geographic takeaway', detail: 'These rulers lived on four continents, and many never had any contact with each other, yet each faced the same problem of holding what he had won or inherited.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-3-2.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-3/the-imperial-rank-roll.html',
    desc: 'Serve on Akbar’s administrative commission at Fatehpur Sikri. Balance mansab rank, revenue assessment, jagir assignments, and local elite cooperation without creating independent provincial powers.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: You Are a Noble Called to Versailles, c. 1690',
    desc: 'You are a French noble with an estate far from Paris. The king expects you at his palace at Versailles, and so does everyone who matters.',
    intro: 'You are a French noble. Your family owns land and a château far from Paris, where local people have known your name for generations. Your grandfather lived through the Fronde, the years when great nobles rose up against the crown. Now King Louis XIV has moved his court to his enormous palace at Versailles, and the great nobles of France spend their days there: at the king\'s ceremonies, at his table, in the long halls where everyone watches who the king speaks to.',
    detail: 'At Versailles you have no army and no say over your own lands while you are away. What you have is a chance at the king\'s favor: a post, a pension, an honor for your family. Every day the king\'s routine is a ceremony, and nobles compete for the right to be close to him. Back home, your estate is run by others while you wait in the halls. You are surrounded by gold, mirrors and painted ceilings that all say the same thing: the king is the center of France, and his power comes from God.',
    // The renderer prints `text`; intro and detail stay for the generators that read them.
    text: 'You are a French noble. Your family owns land and a château far from Paris, where local people have known your name for generations. Your grandfather lived through the Fronde, the years when great nobles rose up against the crown. Now King Louis XIV has moved his court to his enormous palace at Versailles, and the great nobles of France spend their days there: at the king\'s ceremonies, at his table, in the long halls where everyone watches who the king speaks to.</p><p>At Versailles you have no army and no say over your own lands while you are away. What you have is a chance at the king\'s favor: a post, a pension, an honor for your family. Every day the king\'s routine is a ceremony, and nobles compete for the right to be close to him. Back home, your estate is run by others while you wait in the halls. You are surrounded by gold, mirrors and painted ceilings that all say the same thing: the king is the center of France, and his power comes from God.',
    prompt: 'Is Versailles a palace or a cage? Argue whether Louis XIV gained more by impressing nobles like you or by keeping you where he could watch you, and use details from the scenario to support your answer.'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Same Job, Different Tools: Devshirme and Salaried Samurai',
    intro: 'Comparison means finding how two cases are alike and how they differ, then explaining WHY they differ. In Topic 3.2 the why is the context: the situation each ruler was in. The Ottoman devshirme and Japan\'s salaried samurai did the same job, giving a ruler soldiers and officials who depended on him. They did it in different ways.',
    steps: [
      { label: 'Name the shared job', text: 'Both systems answered the same question: who will serve me and not turn on me?' },
      { label: 'Find a similarity', text: 'Look for what both did to make soldiers and officials depend on the ruler for their pay and position.' },
      { label: 'Find a difference', text: 'Who did each system use? The devshirme took Christian boys and trained them; Japan\'s rulers moved an old warrior class off its land.' },
      { label: 'Explain why: the context', text: 'What was each ruler afraid of? The Ottoman sultan feared powerful Turkish families; in Japan, after more than a century of civil war, the new rulers and the great lords wanted warriors with no land of their own to rebel from.' }
    ],
    prompt: 'In 3 to 4 sentences, compare the Ottoman devshirme and Japan\'s salaried samurai. Give one similarity and one difference, and explain why they differed by describing the situation each ruler was in.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: People Who Serve',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Compare two ways rulers built officials and soldiers who depended on them.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Compare the Mughal mansabdar system with EITHER the Ottoman devshirme OR Japan\'s salaried samurai. Explain one way they were alike and one way they were different in how they gave a ruler officials or soldiers who depended on him, and explain why they were different.',
      responseType: 'Checkpoint 1',
      terms: ['mansabdar', 'mansab', 'jagir', 'devshirme', 'Janissaries', 'salaried samurai', 'grand vizier', 'bureaucratic elites', 'military professionals', 'centralized control'],
      focus: ['Name both systems and the empire each belonged to.', 'Give one similarity and one difference in how each made officials or soldiers depend on the ruler.', 'Explain why they differed by describing each ruler\'s situation.']
    },
    {
      title: 'Checkpoint 2: Symbols and Revenue',
      subtitle: 'Checks Learning Targets 2 and 3 and Success Criteria 2 and 3.',
      cardDesc: 'How rulers made their power look rightful, and how they paid for it.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain TWO methods rulers used to legitimize and consolidate their power: (1) one example of religious ideas, art, or monumental architecture that made a ruler\'s power look rightful, and (2) two systems for collecting tribute or taxes, from different empires, that paid for state power. For the symbol and for at least one of the tax systems, describe the context (the situation the ruler was in) and explain how the method strengthened him.',
      responseType: 'Checkpoint 2',
      // This checkpoint asks for each method in its context, the CED's suggested
      // skill for 3.2 (4.A); the Skill Builder's comparison label does not fit it.
      skill: 'Contextualization',
      terms: ['divine right', 'Songhai promotion of Islam', 'Qing imperial portraits', 'Mughal mausolea', 'Versailles', 'zamindar', 'Ottoman tax farming', 'Mexica tribute', 'Ming taxes in silver', 'legitimacy', 'revenue'],
      focus: ['Name one religious idea, work of art, or building and the ruler who used it.', 'Name two tribute or tax systems and the empire that used each.', 'For the symbol and at least one tax system, describe the context, the ruler\'s situation, and explain how the method strengthened his power.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: How Rulers Held What They Won',
    task: 'Choose TWO cards from different empires. For each, decide which job it is evidence for: people who serve, or symbols that justify. Start with what the source directly shows, then infer what it suggests. A painting or a building can show how a ruler wanted to be seen or how he treated his servants; it cannot by itself show how taxes were collected or whether officials stayed loyal.',
    prompt: 'Using two cards from different empires, make one claim about how rulers kept control of large empires. Cite one concrete detail from each source, explain how each detail supports your claim, and name one thing either source cannot show.'
  };

  lesson.images = [
    {
      title: 'The young Akbar watches an arrest, from the Akbarnama',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Court_of_Akbar_from_Akbarnama.jpg',
      caption: 'A page from the Akbarnama, the official history of Akbar\'s reign, designed by Basawan and painted by Shankar about 1590 to 1595 (Art Institute of Chicago). It shows Akbar at thirteen, days after he became emperor in 1556, as Shah Abu\'l-Maali, a powerful favorite of his late father, is seized.',
      prompt: 'NOTICE where the young Akbar sits and what is happening to the man beside him. What can you INFER about how a new ruler dealt with a powerful servant who might not obey him? How is this like Mehmed\'s arrest of Çandarlı Halil? This page was made decades later for Akbar\'s own official history: what might it show in its best light?'
    },
    {
      title: 'The Qianlong Emperor, by Giuseppe Castiglione',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg',
      caption: 'Part of a Qing court handscroll of the Qianlong Emperor and his consorts, painted by the Italian court artist Giuseppe Castiglione in 1736, the first year of the emperor\'s reign. The Qing emperors were Manchus ruling an empire where most people were Han Chinese.',
      prompt: 'NOTICE the yellow color, the dragons, the fur collar and the hat. Yellow and dragons were the color and symbol of a Chinese emperor; the hat, the fur and the cut of the robe were Qing court dress that kept Manchu styles. What can you INFER about how the Qing court wanted its emperor shown and remembered? What can a portrait not tell you about how the empire was actually governed?'
    },
    {
      title: 'The Taj Mahal, Agra (modern photograph)',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal_in_March_2004.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_in_March_2004.jpg',
      caption: 'A photograph taken in 2004 of the Taj Mahal, the mausoleum the Mughal emperor Shah Jahan built for his wife in the 1600s.',
      prompt: 'NOTICE the size, the symmetry and the materials. What can you INFER about the message this tomb sent about the Mughal dynasty? What does a building like this not tell you about the people who paid for it?'
    },
    {
      title: 'Topkapı Palace from the water (modern photograph)',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Topkapi_Palace_Bosphorus.JPG',
      caption: 'A photograph taken in 2007 of Topkapı Palace in Istanbul, which Mehmed II began building in 1459, after the conquest of Constantinople. Its palace school trained the most promising devshirme recruits for high office.',
      prompt: 'NOTICE where the palace sits, on a point of land above the water, and how much ground its walls and buildings cover. What can you INFER about why a sultan would raise and train his top servants inside a place like this? What would you need written records to learn about the devshirme?'
    }
  ];
})();
