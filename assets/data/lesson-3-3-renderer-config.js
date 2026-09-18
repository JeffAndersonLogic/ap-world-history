(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Unit 3: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Explain continuity and change within the various belief systems during the period from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      "code": "KC-4.1.VI.i",
      "theme": "Cultural Developments and Interactions",
      "text": "The Protestant Reformation marked a break with existing Christian traditions and both the Protestant and Catholic reformations contributed to the growth of Christianity.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.VI.ii",
      "theme": "Cultural Developments and Interactions",
      "text": "Political rivalries between the Ottoman and Safavid empires intensified the split within Islam between Sunni and Shi’a.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.VI.iii",
      "theme": "Cultural Developments and Interactions",
      "text": "Sikhism developed in South Asia in a context of interactions between Hinduism and Islam.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: God, Power, and Empire',
    embedUrl: 'first-and-10-topic-3-3-belief-systems-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Ottoman Empire (Sunni)', detail: 'The Ottomans controlled Anatolia, the Arab world, and the Balkans. Their sultan claimed the title of Caliph, protector of Sunni Islam worldwide.' },
      { label: 'Safavid Empire (Shia)', detail: 'The Safavids controlled modern-day Iran. Shah Ismail I forced conversion to Shia Islam, creating a religiously distinct state on the Ottoman border.' },
      { label: 'Mughal Empire', detail: 'The Mughals ruled most of the Indian subcontinent. Under Akbar, they pursued religious tolerance; under Aurangzeb, strict Sunni enforcement.' },
      { label: 'Geographic takeaway', detail: 'The Safavid state was geographically surrounded by Sunni powers, making Shia identity an essential distinguishing mark of political loyalty.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg'
  };

  lesson.skillBuilder = {
    label: 'Sourcing and situation practice',
    title: 'How Context Shapes Evidence About Religious Change',
    intro: 'Topic 3.3 pairs belief-system change with AP sourcing. A source does not speak for an entire religion by itself. Ask who produced it, for whom, in what historical situation, and for what purpose before using it to explain continuity or change.',
    steps: [
      { label: 'Identify the source situation', text: 'A Luther portrait from the Reformation, an Ottoman victory manuscript about Chaldiran, and a later devotional portrait of Guru Nanak were produced in very different historical situations.' },
      { label: 'Explain perspective or purpose', text: 'Ask what the creator or patron wanted an audience to see. A court victory image can glorify a ruler; a devotional image can preserve religious memory; a reform-era portrait can elevate a religious leader.' },
      { label: 'Connect sourcing to the historical claim', text: 'Use the sourcing factor to qualify what the source can prove. Then connect it to the Topic 3.3 question: what changed, what continued, and how did political or cultural interaction shape that development?' }
    ],
    prompt: 'Choose one Topic 3.3 evidence source. Explain one relevant sourcing factor (point of view, purpose, historical situation, or audience) and how that factor affects the source\'s usefulness for explaining continuity or change in a belief system from 1450 to 1750.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Reformation — Change Within Christianity',
      subtitle: 'Checks Learning Target 1 and Success Criterion 1.',
      cardDesc: 'Protestant break, Catholic reform, and the continued growth of Christianity.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain one major change produced by the Protestant Reformation and one way the Catholic Reformation responded. Then explain how both Protestant and Catholic reform movements contributed to the continued growth of Christianity.',
      responseType: 'Checkpoint 1',
      terms: ['Martin Luther', 'Protestant Reformation', 'Catholic Reformation', 'Council of Trent', 'Jesuits', 'Church authority', 'denominations', 'continuity', 'change'],
      focus: ['Name a specific Protestant Reformation change.', 'Name a specific Catholic reform or response.', 'Explain both change within Christianity and continuity in Christianity\'s wider growth or influence.']
    },
    {
      title: 'Checkpoint 2: Rivalry and New Religious Development',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Ottoman-Safavid rivalry, the Sunni-Shia divide, and Sikhism in South Asia.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain TWO developments in belief systems from 1450 to 1750: (1) how Ottoman-Safavid political rivalry intensified the existing Sunni-Shia split within Islam, and (2) how Sikhism developed in South Asia in a context of interaction between Hinduism and Islam. Use specific evidence for both.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change',
      terms: ['Ottoman', 'Safavid', 'Sunni', 'Shia', 'Chaldiran', 'political rivalry', 'Guru Nanak', 'Punjab', 'Sikhism', 'Hinduism', 'Islam', 'interaction'],
      focus: ['Make clear that Ottoman-Safavid rivalry intensified an existing Sunni-Shia division rather than creating it.', 'Use Chaldiran or another specific rivalry detail as evidence.', 'Explain the Hindu-Muslim interaction context of Sikhism while recognizing Sikhism as a distinct religious tradition.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Belief as Reform, Rivalry, and Political Strategy',
    task: 'Choose TWO cards from different religious settings. Decide what each source actually reveals before deciding what historical claim it can support. Pay attention to when the image was created: a contemporary court image and a later devotional portrait do different kinds of historical work.',
    prompt: 'Using two evidence cards from different religious settings, make one claim about continuity or change within belief systems from c. 1450 to c. 1750. Cite one concrete detail from each source, explain how political or cultural interaction shaped the development, and explain one limitation or perspective issue that affects your interpretation.'
  };

  lesson.images = [
    {
      title: 'Martin Luther, c. 1530',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lucas_Cranach_-_Portrait_of_Martin_Luther%2C_circa_1530.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lucas_Cranach_-_Portrait_of_Martin_Luther,_circa_1530.jpg',
      caption: 'Reformation evidence. A portrait produced in the circle of Lucas Cranach the Elder represents Martin Luther during the early decades of the Protestant Reformation.',
      prompt: 'NOTICE how Luther is represented as an individual religious authority. What can you INFER about the visibility of reform leaders in an age of print and confessional conflict? What can a portrait not prove about why ordinary people adopted Protestant ideas?'
    },
    {
      title: 'Battle of Chaldiran, Selim-nama, 1524',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma%2C_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB%2C_1524_%28National_Library_of_Israel%2C_Ms._Yah._Ar._1116%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma,_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB,_1524_(National_Library_of_Israel,_Ms._Yah._Ar._1116).jpg',
      caption: 'Ottoman-Safavid rivalry evidence. An Ottoman manuscript miniature made about a decade after the 1514 battle depicts the conflict between the Sunni Ottoman and Shia Safavid empires.',
      prompt: 'NOTICE how the battle and opposing forces are represented. What can you INFER about the importance of the conflict in Ottoman political memory? Why should a historian be cautious about using an Ottoman victory narrative as neutral evidence about the Safavids?'
    },
    {
      title: 'Court of Akbar, Akbarnama',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Court_of_Akbar_from_Akbarnama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Court_of_Akbar_from_Akbarnama.jpg',
      caption: 'Mughal accommodation evidence. A Mughal court image represents Akbar at the center of a diverse imperial elite during a reign associated with religious accommodation and debate.',
      prompt: 'NOTICE who is gathered around the emperor and how hierarchy is organized. What can you INFER about Akbar\'s strategy of incorporating varied elites? What written policy evidence would you need before claiming the image proves religious tolerance by itself?'
    },
    {
      title: 'Guru Nanak, 19th-Century Devotional Portrait',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Guru_Nanak.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Portrait_of_Guru_Nanak.png',
      caption: 'Later Sikh memory. This 19th-century portrait depicts Guru Nanak, the first Sikh Guru, whose teachings emerged in 15th- and 16th-century Punjab amid sustained Hindu-Muslim interaction.',
      prompt: 'NOTICE the devotional presentation of Guru Nanak. What can you INFER about his long-term importance to Sikh identity? Why is this later portrait evidence of memory and devotion rather than direct evidence of what Nanak looked like or how Sikhism first developed?'
    }
  ];
})();
