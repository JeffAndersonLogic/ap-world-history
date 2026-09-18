(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1.I.B",
      "theme": "Technology and Innovation",
      "text": "The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.I.E",
      "theme": "Technology and Innovation",
      "text": "The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.IV",
      "theme": "Technology and Innovation",
      "text": "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Energy Machine',
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Railroad networks and market integration', detail: 'By 1870, Britain had approximately 15,000 miles of railroad track; the United States had 53,000; Germany had 12,000; France had 11,000. These networks linked coal fields to ports, agricultural regions to industrial cities, and domestic markets to each other. The economic effect was dramatic: transportation costs fell 80–90% compared to pre-railroad overland shipping. Regions that had been economically isolated, the American Midwest, the German interior, Russia\'s Siberia, became integrated into national and global markets. The railroad was not just a technology of movement; it was a technology of market creation. Wherever a railroad went, commodity prices equalized, land values rose, and industrial investment followed.' },
      { label: 'Resource extraction zones and industrial demand', detail: 'The industrial core\'s demand for raw materials reorganized economic activity in distant regions. Identify the resource extraction zones on the map: rubber from the Congo basin and Amazon river valley; guano from Peru\'s Chincha Islands; cotton from the American South, India, and Egypt; copper from Chile and the American Southwest; timber from North American and Siberian forests. In each case, industrial demand in Britain, Belgium, Germany, or the United States created or intensified resource extraction in regions that were colonized, semi-colonized, or economically dominated. The environmental and labor consequences of this extraction were concentrated in these peripheral zones, while the economic benefits flowed primarily to industrial centers.' },
      { label: 'The telegraph network and commercial coordination', detail: 'The submarine telegraph cable network, connecting continents by 1866, created the first real-time global communication system. The key nodes: London to New York (1866), London to Bombay (1870), London to Australia (1872), transcontinental US lines (1861). These connections transformed commercial life: commodity prices in Chicago were known in London within minutes; shipping schedules in Liverpool coordinated with cotton harvests in Alabama and India; financial markets in New York, London, and Paris became interdependent. The telegraph made the global industrial economy legible as a single system rather than disconnected regional markets. It also made colonial administration more efficient, orders from London reached Calcutta in hours rather than months.' },
      { label: 'Environmental consequences: coal fields and industrial pollution', detail: 'The geography of coal fields largely determined the geography of industrialization, and industrial pollution. The British coal fields (South Wales, Yorkshire, Lancashire, Northumberland) powered the first industrial revolution; the Ruhr valley in Germany became the most productive coal region in continental Europe. In industrial cities built over or near coal fields, Manchester, Sheffield, Birmingham, the Ruhr cities, coal combustion produced chronic air pollution, acidic water runoff, and ground contamination on scales that transformed local environments. Life expectancy in Manchester in the 1840s was 28–29 years; atmospheric lead and sulfur dioxide levels in British industrial cities far exceeded anything in pre-industrial history. The environmental costs of industrialization were, like its labor costs, disproportionately concentrated in specific places.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-iron-road-contract.html',
    desc: "Approve an 1853 colonial railway contract in India and weigh market integration, extraction, military mobility, finance, land, and labor."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Technology -> Production -> Exchange',
    intro: 'Topic 5.5 rewards mechanism. Name the technology, identify the physical or economic constraint it changed, then trace the effect into production, transportation, communication, trade, or migration.',
    steps: [
      { label: 'Start with energy', text: 'Explain what changed when steam engines used coal or internal combustion engines used oil. The important effect is not the machine name but the increase in reliable, concentrated mechanical energy.' },
      { label: 'Move into production', text: 'Use steel, chemicals, electricity, or precision machinery to explain a production change: cheaper material, new product, longer operating time, or more standardized output.' },
      { label: 'Move across distance', text: 'Use railroad, steamship, or telegraph networks to explain how lower transport costs or faster information expanded markets and opened interior regions.' },
      { label: 'Finish with the economic effect', text: 'Connect the technological chain to increased production, trade, migration, or resource development. Do not stop at “it made things faster.”' }
    ],
    prompt: 'Choose one energy technology, one production technology, and one transport/communication technology. Build a causal chain showing how they worked together to reshape economic production or exchange.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Energy and the Second Industrial Revolution',
      subtitle: 'Checks Learning Targets 1–2 — fossil-fuel energy and new production technologies.',
      cardDesc: 'Steam, coal, internal combustion, oil, steel, chemicals, electricity, and precision machinery.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how ONE engine-energy pair—steam engine + coal OR internal combustion engine + oil—increased the energy available for economic production or transportation. Then choose TWO second-industrial technologies from steel, chemicals, electricity, or precision machinery and explain the specific production change each one enabled. Build at least one causal connection between the energy revolution and the new production technology.',
      responseType: 'Checkpoint 1',
      terms: ['steam engine', 'coal', 'internal combustion engine', 'oil', 'fossil fuels', 'Bessemer process', 'steel', 'chemicals', 'electricity', 'precision machinery', 'Second Industrial Revolution'],
      focus: ['Explain the energy mechanism, not just identify the fuel.', 'Use two specific second-industrial technologies.', 'Connect increased energy to changed productive capacity.']
    },
    {
      title: 'Checkpoint 2: Transportation, Communication, Trade, and Migration',
      subtitle: 'Checks Learning Target 3 — how infrastructure changed the economics of distance.',
      cardDesc: 'Railroads, steamships, telegraph, interior development, trade, and migration.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the distinct role of railroads, steamships, and the telegraph in reducing the economic effects of distance. For at least TWO of the three technologies, explain a specific mechanism connecting the technology to increased trade, migration, or development of an interior region. End by explaining why faster information and faster physical transport were complementary rather than interchangeable.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['railroad', 'steamship', 'telegraph', 'transatlantic cable', 'interior development', 'market integration', 'trade', 'migration', 'transport costs', 'communication'],
      focus: ['Distinguish transportation from communication.', 'Explain two specific technology-to-economic-effect mechanisms.', 'Connect infrastructure to increased trade, migration, or interior development.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Make a claim about how new technologies changed production, transportation, or communication in the Industrial Age. Use evidence from at least two sectors and explain the mechanism of change.'
  };

  lesson.images = [
    {
      title: 'Technology and the shrinking world',
      url: '../assets/images/instructional-maps/topic-5-5.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-5.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of cables, canals and rail and steamship routes.',
      prompt: 'NOTICE which chokepoints and cables the map marks. INFER what controlling one of them would be worth. What does a map of infrastructure not show about who paid for it?'
    },
    {
      title: 'A Bessemer converter in operation',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bessemer_converter.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bessemer_converter.jpg',
      caption: 'The vessel that made bulk steel cheap by blowing air through molten iron. Steel fell from a specialty metal to a structural one within a generation.',
      prompt: 'NOTICE the scale of the vessel against the people working near it. INFER what changed about what could now be built, and about what the work was like. What does the photograph not show you about who owned it?'
    },
    {
      title: 'Permanent transatlantic telegraph',
      label: 'Infrastructure record · cable completed 1866',
      sourceText: [
        'Messages crossed the Atlantic in minutes rather than weeks.',
        'Markets and governments could react much faster.'
      ],
      caption: 'The date a message first crossed the Atlantic in minutes rather than weeks, and stayed working.',
      prompt: 'What historical process becomes possible when information outruns physical travel? How could you connect this to trade or empire?'
    },
    {
      title: 'A medal struck for the opening of the Suez Canal',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Inauguration_et_ouverture_%C3%A0_la_navigation_du_Canal_de_Suez%2C_17_novembre_1869%2C_ND314.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Inauguration_et_ouverture_%C3%A0_la_navigation_du_Canal_de_Suez%2C_17_novembre_1869%2C_ND314.jpg',
      caption: 'A commemorative medal by the French medallist Charles Trotin, about 1869, 7.3 cm across. Struck to mark the inauguration of 17 November 1869.',
      prompt: 'NOTICE what is shown on the medal, and what language it is inscribed in. INFER who had it struck, for whom, and whose achievement it says the canal was. The canal was cut through Egyptian territory by Egyptian labour: what does an object like this leave out, and why would it?'
    },
    {
      title: 'Electric power enters the city',
      label: 'Infrastructure record · Pearl Street Station, New York, 1882',
      sourceText: [
        'Central-station electric power served paying customers.',
        'Lighting and motors reduced dependence on daylight and line shafts.'
      ],
      caption: 'One central station in one city in 1882, which is both the point and the limit of the card.',
      prompt: 'How might electric power change factory location or working time? Why should one city installation not be treated as universal adoption?'
    }
  ];

})();
