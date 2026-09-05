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
    url: '',
    desc: 'Travel across three empires and compare how rulers solved the same problems of expansion, administration, and religious diversity, then build a comparison argument from your observations.'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Writing a Comparison Argument: Land-Based Empires',
    intro: 'A strong AP comparison argument is not a list. It requires a claim, evidence from at least two cases, and an explanation of what the comparison reveals. Topic 3.4 is the comparison topic, you need to be able to identify both similarities and differences across empires and explain why those patterns existed.',
    steps: [
      { label: 'Choose a dimension to compare', text: 'Religious policy, administrative systems, military recruitment, or treatment of conquered populations are the strongest comparison dimensions for Unit 3. Pick one and stick to it.' },
      { label: 'Build the comparison', text: 'Name the similarity or difference, provide specific evidence from at least two empires, and explain why the pattern existed. The "why" is what separates description from historical analysis.' },
      { label: 'Connect to a larger claim', text: 'The best comparison arguments conclude with a statement about what the comparison reveals, about the nature of imperial rule, the role of religion, or the challenge of governing diverse populations.' }
    ],
    prompt: 'Write a comparison argument (3–4 sentences) that identifies one meaningful similarity and one meaningful difference across at least two land-based empires from c. 1450–c. 1750. Include specific evidence and explain what the comparison reveals about imperial rule.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Similarities Across Land-Based Empires',
      subtitle: 'Checks Learning Target 1 — identifying and explaining shared patterns across empires.',
      cardDesc: 'Gunpowder, loyalty systems, religious legitimation, shared patterns across five empires.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify one meaningful similarity shared by at least two of the major land-based empires (Ottoman, Safavid, Mughal, Qing, or Russian). Use specific evidence from each empire and explain why the similarity existed, what shared challenge produced the shared response?',
      responseType: 'Checkpoint 1',
      terms: ['gunpowder', 'devshirme', 'mansabdar', 'Banner system', 'caliphate', 'legitimacy', 'bureaucracy', 'loyalty', 'conquest', 'Janissary'],
      focus: ['Name the similarity and identify the two or more empires it applies to.', 'Provide specific evidence from each empire.', 'Explain why similar conditions produced similar responses across different empires.']
    },
    {
      title: 'Checkpoint 2: Writing a Full Comparison Argument',
      subtitle: 'Checks Learning Targets 2–3 — differences and constructing a supported argument.',
      cardDesc: 'Religious policy, administration, and the skill of writing a full comparison argument.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Write a comparison argument that addresses both a similarity and a difference across at least two land-based empires. Your response must include: (1) a clear comparison claim, (2) specific evidence from at least two empires, and (3) a statement explaining what the comparison reveals about the nature of imperial rule c. 1450–c. 1750.',
      responseType: 'Checkpoint 2',
      terms: ['comparison', 'similarity', 'difference', 'religious policy', 'millet system', 'Din-i-Ilahi', 'devshirme', 'mansabdar', 'Banner system', 'Akbar', 'Aurangzeb', 'Ottoman', 'Mughal', 'Qing'],
      focus: ['State a clear comparison claim (similarity AND difference).', 'Use specific evidence from at least two different empires.', 'Explain what the comparison reveals, connect it to a broader historical argument about imperial rule.']
    }
  ];
  lesson.collegeBoardKeyConcepts = [
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
      title: 'Ottoman Expansion — Geographic Scale',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
      caption: 'Ottoman / geographic scale. A secondary reconstruction shows the Ottoman state expanding from Anatolia across the Balkans, Southwest Asia, and North Africa.',
      prompt: 'NOTICE the empire\'s multi-regional reach. What governance or military problems would that scale create? Compare with another geographic-scale card and explain one meaningful similarity or difference.'
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
