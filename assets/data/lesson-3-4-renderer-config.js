(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Same Jobs, Different Tools',
    embedUrl: 'first-and-10-topic-3-4-comparison-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 3.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Ottoman Empire', detail: 'Southeastern Europe, Anatolia, Levant, North Africa, Arabia. Sunni Islam, devshirme, millet system.' },
      { label: 'Safavid Empire', detail: 'Persian plateau (Iran/Iraq). Shia Islam imposed, Persian bureaucracy, permanent Sunni-Shia conflict with Ottomans.' },
      { label: 'Mughal Empire', detail: 'Indian subcontinent. Muslim ruling dynasty over Hindu majority, mansabdar system, Akbar\'s tolerance policy.' },
      { label: 'Qing Dynasty', detail: 'China, Mongolia, Tibet, Xinjiang. Manchu ruling minority, Banner system, Confucian civil service exam retained.' },
      { label: 'Russian Empire', detail: 'Russia, Siberia, Central Asia. Orthodox Christianity, serfdom, colonial extraction model in Siberia.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-3/imperial-influence-comparison.html',
    desc: 'Act as a historical adviser. Compare one shared method across two land-based empires and explain how it increased imperial influence.'
  };

  lesson.skillBuilder = {
    label: 'Comparison and argumentation practice',
    title: 'Comparing Methods of Increasing Imperial Influence',
    intro: 'Compare the job, not the empire. Choose one shared job, expand, hold, pay, or justify, compare two methods for doing that job, and explain how both methods increased imperial influence.',
    steps: [
      { label: 'Choose the method', text: 'Strong categories include military expansion, administrative or revenue systems, incorporation of elites, and religious or cultural legitimation.' },
      { label: 'Build the comparison', text: 'Identify a meaningful similarity or difference, then use specific evidence from at least two empires. Keep the category constant so you are comparing the same process.' },
      { label: 'Tie every example to influence', text: 'Do not stop at naming devshirme, mansabdars, monuments, or gunpowder. Explain how the method helped the empire expand, consolidate authority, command resources, win loyalty, or project legitimacy.' },
      { label: 'Explain why the pattern existed', text: 'Finish by explaining why the similarity or difference makes historical sense given each empire\'s geography, population, rivalries, or governing problem.' }
    ],
    prompt: 'Compare the methods by which at least two empires increased their influence from 1450 to 1750. Make a defensible comparison claim, use specific evidence from both empires, and explain how each method increased imperial influence.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Shared Methods of Increasing Influence',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Compare one method two empires used to expand or consolidate influence.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Choose TWO land-based empires and compare ONE method they used to increase their influence from 1450 to 1750. Identify one meaningful similarity or difference, use specific evidence from both empires, and explain how the method increased influence.',
      responseType: 'Checkpoint 1',
      terms: ['gunpowder', 'devshirme', 'mansabdar', 'Banner system', 'tax farming', 'tribute', 'monumental architecture', 'religious legitimation', 'elite incorporation', 'imperial influence'],
      focus: ['Keep one shared comparison category.', 'Use specific evidence from both empires.', 'Explain how the method increased territorial, political, economic, or cultural influence.']
    },
    {
      title: 'Checkpoint 2: Full Unit 3 Comparison Argument',
      subtitle: 'Checks all Topic 3.4 learning targets and success criteria.',
      cardDesc: 'A supported argument answering the College Board comparison objective.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Compare the methods by which various empires increased their influence from 1450 to 1750. Write a short argument that includes a defensible comparison claim, at least two specific pieces of evidence from different empires, and explanation of how the evidence supports your claim. Include both a similarity and a difference or a meaningful qualification.',
      responseType: 'Checkpoint 2',
      skill: 'Comparison and Argumentation',
      terms: ['comparison', 'similarity', 'difference', 'qualification', 'gunpowder', 'administration', 'revenue', 'legitimation', 'religious policy', 'Ottoman', 'Safavid', 'Mughal', 'Qing', 'Russian'],
      focus: ['Answer the exact increased-influence question.', 'Use relevant evidence from at least two different empires.', 'Explain how the evidence supports the comparison, not just what each empire did.']
    }
  ];

  lesson.classPresentation = {
    title: 'Class Slides: Comparison in Land-Based Empires',
    desc: 'Compare the job, not the empire: expand, hold, pay, or justify. Keep one category constant and connect both methods to increased influence.',
    url: 'presentation-topic-3-4-student.html'
  };

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 3: Learning Objective D",
      "theme": "Learning Objective",
      "text": "Compare the methods by which various empires increased their influence from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1",
      "theme": "Land-Based Empires",
      "text": "The interconnection of the Eastern and Western Hemispheres made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.VI",
      "theme": "Land-Based Empires",
      "text": "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3",
      "theme": "Land-Based Empires",
      "text": "Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II",
      "theme": "Land-Based Empires",
      "text": "Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.B",
      "theme": "Land-Based Empires",
      "text": "Land empires included the Manchu in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.III.i",
      "theme": "Land-Based Empires",
      "text": "Political and religious disputes led to rivalries and conflict between states.",
      "illustrativeExamples": []
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Same Job, Matched Evidence',
    task: 'Choose TWO cards from different empires that answer the SAME imperial job. Keep the category constant: expand, hold, pay, or justify. Use observation and source limits before writing the comparison; a true fact is not relevant evidence unless it supports the job you chose.',
    prompt: 'Using two evidence cards from different land-based empires, make one comparison claim about the same imperial job. Cite one concrete detail from each source, explain the similarity or difference, explain one historical reason for the pattern, and connect both methods to increased imperial influence.'
  };

  lesson.images = [
    {
      title: 'Battle of Chaldiran, Selim-nama, 1524 — Expand',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma%2C_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB%2C_1524_%28National_Library_of_Israel%2C_Ms._Yah._Ar._1116%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma,_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB,_1524_(National_Library_of_Israel,_Ms._Yah._Ar._1116).jpg',
      caption: 'Ottoman-Safavid / military expansion. An Ottoman manuscript miniature made about a decade after the 1514 battle depicts the conflict in which Ottoman gunpowder weapons helped defeat Safavid forces.',
      prompt: 'NOTICE how weapons and formations are represented. What can you INFER about military technology as a method of increasing influence? Compare this only with another expansion card, and remember that an Ottoman victory narrative is not neutral evidence about the Safavids.'
    },
    {
      title: 'First Battle of Panipat, 1526 — Expand',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/1526-First_Battle_of_Panipat-Ibrahim_Lodhi_and_Babur.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:1526-First_Battle_of_Panipat-Ibrahim_Lodhi_and_Babur.jpg',
      caption: 'Mughal / military expansion. A late-16th-century Baburnama illustration commemorates Babur\'s victory at Panipat, where field artillery and firearms helped establish Mughal rule in northern India.',
      prompt: 'NOTICE how troops, commanders, and weapons are represented. What can you INFER about military conquest as a method of increasing Mughal influence? Compare this with Chaldiran and explain what a later court painting cannot prove about the battle by itself.'
    },
    {
      title: 'Court of Akbar — Hold / Justify',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Court_of_Akbar_from_Akbarnama.jpg',
      caption: 'Mughal / elite organization. A court painting from Akbar\'s official history places the emperor at the center of an imperial elite drawn from varied backgrounds.',
      prompt: 'NOTICE the visual hierarchy and the people gathered around Akbar. What can you INFER about incorporating elites as a way to hold a diverse empire or justify the emperor\'s authority? What might an official court history show in its best light?'
    },
    {
      title: 'Qianlong Emperor — Hold / Justify',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg',
      caption: 'Qing / ruler representation. A court portrait presents a Manchu emperor ruling a vast multiethnic state while drawing on Chinese traditions of emperorship.',
      prompt: 'NOTICE clothing, pose, and visual conventions. What can you INFER about how representation could help a minority dynasty hold power or justify its rule? Compare with the Akbar card and explain what a portrait cannot prove about everyday administration.'
    },
    {
      title: 'Ottoman Defter — Bayt Nabala Tax Record, 1526 — Pay',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_Defter_of_Liwa_of_al-Quds_-_Bayt_Nabala_Tax_Record.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ottoman_Defter_of_Liwa_of_al-Quds_-_Bayt_Nabala_Tax_Record.jpg',
      caption: 'Ottoman / revenue administration. This 1526 tax-register entry from the district of Jerusalem records annual revenue associated with Bayt Nabala in akçe.',
      prompt: 'NOTICE the kind of information a tax register records. What can you INFER about how written revenue administration helped an empire turn territory into usable state income? Compare this with the Mughal revenue card and identify one thing a single local entry cannot prove about the whole Ottoman system.'
    },
    {
      title: 'Ain-i-Akbari — Akbar\'s Grain Revenue — Pay',
      label: 'Administrative record · Mughal Empire · c. 1590s',
      sourceText: [
        'His Majesty takes from each bigha of tilled land ten sers of grain as a royalty.',
        'Store-houses have been constructed in every district.',
        'He appoints experienced people to look after the store-houses and writers who watch the receipts and charges.'
      ],
      sourceUrl: 'https://persian.packhum.org/text/000702051/6',
      caption: 'Mughal / revenue administration. Abu\'l-Fazl\'s Ain-i-Akbari, an official account of Akbar\'s government, describes assessment, storage, and record keeping in the imperial revenue system.',
      prompt: 'NOTICE the rate, store-houses, and officials named in the record. What can you INFER about how regular assessment and record keeping supported Mughal power? Compare this with the Ottoman tax register and explain why an official manual may describe the intended system better than uneven local practice.'
    }
  ];
})();
