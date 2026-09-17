(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Comparing the Empires',
    embedUrl: 'first-and-10-topic-3-4-comparison-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.4 lesson path.'
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
    intro: 'Topic 3.4 has one governing question: how did different empires increase their influence from 1450 to 1750? Choose a shared category, compare at least two empires, and explain how specific evidence supports the comparison rather than listing features.',
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
    title: 'Evidence Lab: Comparing Land Empires with Matched Evidence',
    task: 'Choose TWO cards from different empires and compare the SAME category. Cards are labeled as geographic scale, court/elite organization, or ruler representation. Do not compare an empire\'s territorial map with another empire\'s portrait unless your claim explicitly explains why those different source types answer the same question. Use observation, inference, and source limits before writing the comparison.',
    prompt: 'Using two evidence cards from different land-based empires, make one comparison claim about imperial scale, elite organization, or political legitimacy. Cite one concrete detail from each source, explain the similarity OR difference, and explain one historical reason the pattern existed.'
  };

  lesson.images = [
    {
      title: 'Suleiman the Magnificent — Ruler Representation',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
      caption: 'Ottoman / ruler representation. A portrait of Suleiman presents dynastic authority over a multiethnic, multireligious empire.',
      prompt: 'NOTICE the symbols of rank and the dress. INFER what claim to authority the image is making. Set it beside the Qianlong and Peter the Great cards: what do three very different empires share in how their rulers chose to be seen?'
    },
    {
      title: 'Safavid Empire, c. 1630 — Geographic Scale',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_the_Safavid_Empire,_circa_1630.png',
      caption: 'Safavid / geographic scale. A secondary map locates a Persian-centered empire between Ottoman, Mughal, and Central Asian rivals.',
      prompt: 'NOTICE the Safavid frontier position. What can you INFER about external rivalry and the political value of a distinct Shia identity? What does a map alone not prove about internal religious policy?'
    },
    {
      title: 'Court of Akbar — Elite Organization',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Court_of_Akbar_from_Akbarnama.jpg',
      caption: 'Mughal / court and elite organization. A Mughal court painting depicts Akbar at the center of an imperial elite drawn from varied backgrounds.',
      prompt: 'NOTICE the visual hierarchy and composition of the court. What can you INFER about incorporating elites around the emperor? Compare with a ruler-representation or court card only if your category is legitimacy or elite organization.'
    },
    {
      title: 'Qianlong Emperor — Ruler Representation',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg',
      caption: 'Qing / ruler representation. An imperial portrait presents a Manchu emperor ruling a vast multiethnic state while drawing on Chinese traditions of emperorship.',
      prompt: 'NOTICE clothing, pose, and visual conventions. What can you INFER about Qing legitimacy and adaptation? Compare with another ruler-representation card and explain how political context shaped the image.'
    },
    {
      title: 'Peter the Great — Ruler Representation',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peter_the_Great%2C_Tsar_of_Russia.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Peter_the_Great,_Tsar_of_Russia.jpg',
      caption: 'Russia / ruler representation. An early-18th-century portrait by Gustav von Mardefeld presents Peter I in the visual language of European monarchy.',
      prompt: 'NOTICE clothing, posture, and symbols of rank. What can you INFER about Peter\'s presentation of Russian imperial authority? Compare with the Qianlong card on how rulers used visual culture to legitimize very different empires.'
    },
    {
      title: 'Mughal Empire, c. 1700 — Geographic Scale',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mughal_Empire_(1700).png',
      caption: 'Mughal / geographic scale. A secondary reconstruction shows the Mughal Empire near its territorial height across much of the Indian subcontinent.',
      prompt: 'NOTICE the size and internal geographic diversity. What can you INFER about why rulers needed ranked officials, revenue systems, and accommodation of local elites? Compare with another geographic-scale card.'
    }
  ];
})();
