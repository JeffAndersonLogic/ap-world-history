(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Comparing the Empires',
    embedUrl: 'first-and-10-topic-3-4-comparison-capture.html',
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
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Akbar_receiving_nobles.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png'
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
      subtitle: 'Checks Learning Target 1, identifying and explaining shared patterns across empires.',
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
      subtitle: 'Checks Learning Targets 2–3, differences and constructing a supported argument.',
      cardDesc: 'Religious policy, administration, and the skill of writing a full comparison argument.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Write a comparison argument that addresses both a similarity and a difference across at least two land-based empires. Your response must include: (1) a clear comparison claim, (2) specific evidence from at least two empires, and (3) a statement explaining what the comparison reveals about the nature of imperial rule c. 1450–c. 1750.',
      responseType: 'Checkpoint 2',
      terms: ['comparison', 'similarity', 'difference', 'religious policy', 'millet system', 'Din-i-Ilahi', 'devshirme', 'mansabdar', 'Banner system', 'Akbar', 'Aurangzeb', 'Ottoman', 'Mughal', 'Qing'],
      focus: ['State a clear comparison claim (similarity AND difference).', 'Use specific evidence from at least two different empires.', 'Explain what the comparison reveals, connect it to a broader historical argument about imperial rule.']
    }
  ];
})();
