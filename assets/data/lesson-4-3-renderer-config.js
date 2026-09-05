(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-4.1.V",
      "theme": "Humans and the Environment",
      "text": "The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.A",
      "theme": "Humans and the Environment",
      "text": "European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.B",
      "theme": "Humans and the Environment",
      "text": "American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.C",
      "theme": "Humans and the Environment",
      "text": "Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons.",
      "illustrativeExamples": [
        "Horses",
        "Pigs",
        "Cattle",
        "Okra",
        "Rice"
      ]
    },
    {
      "code": "KC-4.1.V.D",
      "theme": "Humans and the Environment",
      "text": "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Great Exchange',
    embedUrl: 'first-and-10-topic-4-3-columbian-exchange-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'New World → Old World (crops)', detail: 'Potatoes, maize, tomatoes, cacao, tobacco, and cassava moved from the Americas to Europe, Africa, and Asia, transforming diets and, over generations, supporting population growth in receiving regions.' },
      { label: 'Old World → New World (animals & plants)', detail: 'Horses, cattle, pigs, sheep, wheat, sugarcane, and rice moved from Eurasia and Africa to the Americas, transforming indigenous cultures (especially the horse) and driving new plantation economies (especially sugarcane).' },
      { label: 'Old World → New World (disease)', detail: 'Smallpox, measles, influenza, and other pathogens moved from Afro-Eurasia to the Americas, where indigenous populations had no prior immunity. The result was the largest demographic catastrophe in human history, estimated 50–90% population loss.' },
      { label: 'Geographic takeaway', detail: 'The Columbian Exchange was not symmetric: crops generally moved in both directions, but disease moved overwhelmingly from east to west, and enslaved people moved overwhelmingly from Africa to the Americas. The Atlantic Ocean became a highway for biological and human flows that transformed every ecosystem and society it touched.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-replanting-council.html',
    desc: 'Rebuild the Valley of Mexico after war and smallpox while weighing food security, introduced animals, land claims, labor coercion, and the unequal effects of biological exchange.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: How the Demographic Collapse Led to the Atlantic Slave Trade',
    intro: 'Causation means explaining chains of causation, how one event caused another, which caused another. For Topic 4.3, one of the most important causal chains is: European contact → disease → demographic collapse → labor shortage → Atlantic slave trade. A strong causal argument traces this chain explicitly, explaining each link rather than just asserting the outcome.',
    steps: [
      { label: 'Identify the first cause', text: 'European contact introduced Old World diseases, primarily smallpox, to populations that had no prior immunity. Virgin soil epidemics killed an estimated 50–90% of the indigenous American population within a century of contact. The demographic collapse was the primary cause: disease killed more people than military conquest.' },
      { label: 'Explain the intermediate effect', text: 'The demographic collapse created a massive labor shortage. European colonists had come to the Americas to extract wealth, through mining, agriculture, and plantation work. The encomienda system, which had granted colonists rights to indigenous labor, became unworkable as indigenous populations collapsed. Colonists needed workers; the labor pool had been decimated.' },
      { label: 'Connect to the final outcome', text: 'The labor shortage drove demand for enslaved African workers. African enslavement was not inevitable, it was the response to a specific labor crisis created by epidemic disease. Over three centuries, approximately 12 million Africans were forcibly transported to the Americas to supply the labor that demographic collapse had eliminated. This causal chain, contact → disease → collapse → slave trade, is one of the most consequential in world history.' }
    ],
    prompt: 'In 3–4 sentences, explain the causal chain connecting the Columbian Exchange to the Atlantic slave trade. Trace at least three steps in the chain, explain the mechanism at each step, and explain why the Atlantic slave trade was a consequence of the demographic collapse rather than an independent development.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Crops, Animals, and the Exchange',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Potatoes, maize, horses, sugarcane, the biological transfers that transformed diets and economies on both sides of the Atlantic.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify at least TWO crops transferred from the New World to the Old World and ONE animal or crop transferred from the Old World to the New World. For each, explain the long-term consequence of the transfer, what changed in the receiving region, and why?',
      responseType: 'Checkpoint 1',
      terms: ['potato', 'maize', 'tomato', 'cacao', 'tobacco', 'horse', 'cattle', 'sugarcane', 'wheat', 'cassava'],
      focus: ['Name at least two New World crops moving east and one Old World introduction moving west.', 'For each, explain the specific long-term consequence in the receiving region.', 'Explain WHY the transfer had that consequence, connect crop to demographic or economic outcome.']
    },
    {
      title: 'Checkpoint 2: Disease, Collapse, and Global Consequences',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Virgin soil epidemics, demographic collapse, Atlantic slave trade, Potosí silver, the catastrophic and global consequences of hemispheric contact.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain why Old World diseases were so catastrophic for indigenous American populations. Then trace the causal chain from demographic collapse to the origins of the Atlantic slave trade. Finally, explain how American silver (especially from Potosí) affected global trade. Use specific evidence throughout.',
      responseType: 'Checkpoint 2',
      terms: ['smallpox', 'virgin soil epidemic', 'demographic collapse', 'encomienda', 'Atlantic slave trade', 'Potosí', 'silver', 'labor shortage', 'Tenochtitlan', 'Cuitláhuac'],
      focus: ['Explain the concept of virgin soil epidemic and why indigenous Americans had no immunity.', 'Trace the causal chain: disease → collapse → labor shortage → slave trade.', 'Explain how American silver disrupted global trade and what regions it connected.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Unequal Exchanges and Unequal Consequences',
    task: 'Choose TWO cards that represent different dimensions of the Columbian Exchange: biological movement, epidemic disease, extractive labor, or colonial social change. First establish what each source directly shows. Then build a causal or consequence claim without treating one image as proof of an entire Atlantic system.',
    prompt: 'Using two evidence cards of different types, make one claim about how the Columbian Exchange transformed populations, environments, labor systems, or colonial society. Cite one concrete detail from each source and explain why the two pieces of evidence together support a stronger claim than either source alone.'
  };

  lesson.images = [
    {
      title: 'Columbian Exchange Reference Map',
      url: '../assets/images/instructional-maps/topic-4-3.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-3.svg',
      caption: 'Secondary systems evidence. The BeHistorical reference map traces major movements of crops, animals, people, and disease between hemispheres.',
      prompt: 'NOTICE which exchanges move in each direction and which do not. What broad pattern can you INFER about asymmetry in the Columbian Exchange? What can a systems map not reveal about individual experiences?'
    },
    {
      title: 'Smallpox in the Florentine Codex, 16th Century',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:FlorentineCodex_BK12_F54_smallpox.jpg',
      caption: 'Indigenous-centered epidemic evidence. A panel in the Florentine Codex, compiled in the 16th century with Nahua informants, depicts people suffering from smallpox in central Mexico.',
      prompt: 'NOTICE the bodily and social effects shown. What can you INFER about the human impact of epidemic disease? What perspective makes this different from a European conquest narrative?'
    },
    {
      title: 'Cerro Rico at Potosí, 1552',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cerro_de_Potos%C3%AD._Grabado_en_madera%2C_del_libro_Cr%C3%B3nica_del_Per%C3%BA%2C_1552%2C_de_Pedro_Cieza_de_Le%C3%B3n.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cerro_de_Potos%C3%AD._Grabado_en_madera,_del_libro_Cr%C3%B3nica_del_Per%C3%BA,_1552,_de_Pedro_Cieza_de_Le%C3%B3n.jpg',
      caption: 'Extractive-economy evidence. A 1552 woodcut from Pedro Cieza de León\'s Crónica del Perú represents Cerro Rico, the silver mountain around which colonial Potosí developed.',
      prompt: 'NOTICE how the mountain and settlement are represented. What can you INFER about the scale of colonial interest in mineral extraction? What labor-system evidence would you need to connect the image specifically to mita coercion?'
    },
    {
      title: 'Casta Painting Series',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Casta_painting_all.jpg',
      caption: 'Later colonial social-order evidence. Casta paintings from Spanish America categorized families by ancestry and status, reflecting elite efforts to represent colonial hierarchy.',
      prompt: 'NOTICE the systematic labeling and ordering of people. What can you INFER about how colonial society racialized ancestry after sustained Atlantic mixing? What does an elite genre of painting hide about everyday mobility and resistance?'
    }
  ];
})();
