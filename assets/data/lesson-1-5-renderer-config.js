(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Mansa_Musa.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Zimbabwe.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe_Bird.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/A_Library_in_Golden_Islamic_Age.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Mali_Empire.png'
  };
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.2.I.D.ii",
      "theme": "Governance",
      "text": "In Africa, as in Eurasia and the Americas, state systems demonstrated continuity, innovation, and diversity and expanded in scope and reach.",
      "illustrativeExamples": [
        "Great Zimbabwe",
        "Ethiopia",
        "Hausa kingdoms"
      ]
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Three African Paths to State Power',
    task: 'Compare evidence from at least TWO African states. Separate observation from inference: first identify what the object, building, or map actually shows; then explain what it suggests about labor, trade, religion, geography, or political authority. Do not assume every African state built power in the same way.',
    prompt: 'Using evidence from two different African states, make one claim about how geography, trade, religion, or organized labor shaped state power from c. 1200 to c. 1450. Cite one concrete detail from each card and explain why the two pieces of evidence support your claim.'
  };

  lesson.images = [
    {
      title: 'Great Enclosure at Great Zimbabwe',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great-Zimbabwe-2.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great-Zimbabwe-2.jpg',
      caption: 'Great Zimbabwe evidence. The Great Enclosure was constructed from carefully fitted stone without mortar at a major political and commercial center in southern Africa.',
      prompt: 'NOTICE one feature of scale or construction. What can you INFER about organized labor and political authority? What additional evidence would you need to connect the walls specifically to gold and Indian Ocean trade?'
    },
    {
      title: 'Zimbabwe Bird',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe_Bird.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zimbabwe_Bird.jpg',
      caption: 'Material-culture evidence. Soapstone bird sculptures were found at Great Zimbabwe and are associated with the site\'s elite and ritual spaces.',
      prompt: 'NOTICE what kind of object this is and where it was found. What can you cautiously INFER about elite identity or sacred authority? What can this artifact not prove about the state\'s economy by itself?'
    },
    {
      title: 'Bete Giyorgis, Lalibela, Ethiopia',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bete_Giyorgis_Lalibela.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bete_Giyorgis_Lalibela.jpg',
      caption: 'Ethiopian evidence. Bete Giyorgis is one of the rock-hewn churches at Lalibela, carved into living stone around the beginning of the period studied in Topic 1.5.',
      prompt: 'NOTICE one feature of the church\'s construction. What can you INFER about skilled labor, resources, and Christian state identity? How could this support a claim about religious legitimacy?'
    },
    {
      title: 'African States and Trade Routes, c. 1200–1450',
      url: '../assets/images/instructional-maps/topic-1-5.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-1-5.svg',
      caption: 'Secondary geographic evidence. The BeHistorical reference map places Hausa city-states near trans-Saharan routes, Ethiopia near Red Sea connections, and Great Zimbabwe between interior resources and Indian Ocean trade.',
      prompt: 'NOTICE the location of the Hausa states relative to trade routes and neighboring regions. What can you INFER about why market control and Islamic commercial connections mattered? What does a map alone not prove about how Hausa rulers governed?'
    }
  ];
})();
