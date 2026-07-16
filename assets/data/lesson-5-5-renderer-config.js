(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.1.I.B',
      theme: 'Technology and Innovation',
      text: 'The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.I.E',
      theme: 'Technology and Innovation',
      text: 'The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.IV',
      theme: 'Technology and Innovation',
      text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Iron Road',
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Railroad networks and market integration', detail: 'By 1870, Britain had approximately 15,000 miles of railroad track; the United States had 53,000; Germany had 12,000; France had 11,000. These networks linked coal fields to ports, agricultural regions to industrial cities, and domestic markets to each other. The economic effect was dramatic: transportation costs fell 80–90% compared to pre-railroad overland shipping. Regions that had been economically isolated — the American Midwest, the German interior, Russia\'s Siberia — became integrated into national and global markets. The railroad was not just a technology of movement; it was a technology of market creation. Wherever a railroad went, commodity prices equalized, land values rose, and industrial investment followed.' },
      { label: 'Resource extraction zones and industrial demand', detail: 'The industrial core\'s demand for raw materials reorganized economic activity in distant regions. Identify the resource extraction zones on the map: rubber from the Congo basin and Amazon river valley; guano from Peru\'s Chincha Islands; cotton from the American South, India, and Egypt; copper from Chile and the American Southwest; timber from North American and Siberian forests. In each case, industrial demand in Britain, Belgium, Germany, or the United States created or intensified resource extraction in regions that were colonized, semi-colonized, or economically dominated. The environmental and labor consequences of this extraction were concentrated in these peripheral zones, while the economic benefits flowed primarily to industrial centers.' },
      { label: 'The telegraph network and commercial coordination', detail: 'The submarine telegraph cable network — connecting continents by 1866 — created the first real-time global communication system. The key nodes: London to New York (1866), London to Bombay (1870), London to Australia (1872), transcontinental US lines (1861). These connections transformed commercial life: commodity prices in Chicago were known in London within minutes; shipping schedules in Liverpool coordinated with cotton harvests in Alabama and India; financial markets in New York, London, and Paris became interdependent. The telegraph made the global industrial economy legible as a single system rather than disconnected regional markets. It also made colonial administration more efficient — orders from London reached Calcutta in hours rather than months.' },
      { label: 'Environmental consequences: coal fields and industrial pollution', detail: 'The geography of coal fields largely determined the geography of industrialization — and industrial pollution. The British coal fields (South Wales, Yorkshire, Lancashire, Northumberland) powered the first industrial revolution; the Ruhr valley in Germany became the most productive coal region in continental Europe. In industrial cities built over or near coal fields — Manchester, Sheffield, Birmingham, the Ruhr cities — coal combustion produced chronic air pollution, acidic water runoff, and ground contamination on scales that transformed local environments. Life expectancy in Manchester in the 1840s was 28–29 years; atmospheric lead and sulfur dioxide levels in British industrial cities far exceeded anything in pre-industrial history. The environmental costs of industrialization were, like its labor costs, disproportionately concentrated in specific places.' }
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
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-iron-road-contract.html',
    desc: "Approve an 1853 colonial railway contract in India and weigh market integration, extraction, military mobility, finance, land, and labor."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'How Railroads Caused Industrialization to Accelerate: Tracing the Causal Mechanism',
    intro: 'Causation for Topic 5.5 requires identifying not just that railroads caused industrial growth, but specifically how — the mechanism by which one thing caused another. The most common AP error is writing "railroads caused industrial growth" without explaining the causal mechanism. A strong causation argument answers: what specifically changed, and through exactly what process did the change occur?',
    steps: [
      { label: 'Identify the direct effect (first-order cause)', text: 'Railroads\' most direct effect was reducing transportation costs. Moving one ton of goods 100 miles by railroad in the 1850s cost approximately 2–3 cents; the same journey by wagon cost 15–20 cents. This 80–90% reduction in transportation costs was the immediate, direct effect of railroad construction. But cost reduction is not the same as industrial acceleration — the causal chain has more steps. Why did cheaper transportation lead to more industrial production? Because cheaper transportation expanded the geographic market for any given product. A Manchester textile manufacturer who could previously sell only within a 50-mile radius (the economical range for horse-drawn transport) could now sell across all of Britain, then across Europe, and eventually — via steam-powered ocean shipping — across the world. Bigger markets justified larger factories, which justified more machinery, which required more coal and iron.' },
      { label: 'Identify the indirect effects (second- and third-order causes)', text: 'Second-order effect: expanded markets justified large-scale factory production. Third-order effect: large-scale production created demand for iron, then steel (Bessemer process), coal, and engineering labor — which drove the expansion of mining, steel production, and engineering industries. Fourth-order effect: the railroad industry itself was the largest single consumer of iron and steel in the mid-19th century — building 10,000 miles of track required millions of tons of iron rails, creating demand that pushed metallurgical industries to expand and innovate. So railroads caused industrial acceleration not just by expanding markets but by directly creating demand for the foundational industries of industrialization. This is technological interdependence: railroads required iron and coal; iron and coal production required railroads to ship their products; the industries created each other\'s conditions of existence.' },
      { label: 'Write the causation argument', text: 'A strong causation argument for Topic 5.5 uses this structure: "The railroad caused industrial acceleration through [specific mechanism]. This led to [specific second-order effect], which in turn [specific third-order effect], revealing the broader pattern that [synthesis statement about technology and economic change]." Example: "The railroad caused industrial acceleration primarily by reducing transportation costs, which expanded the geographic market for manufactured goods, which justified investment in larger factories and more machinery, which drove demand for coal and iron, which pushed metallurgical industries to innovate — producing the Bessemer process and cheap steel, which in turn enabled more railroad construction at lower cost. This self-reinforcing cycle reveals that the Industrial Revolution was not driven by any single technology but by the interdependence of technologies: each innovation created conditions that made other innovations necessary and profitable."' }
    ],
    prompt: 'In 3–4 sentences, write a causation argument about how one industrial technology (railroad, telegraph, or Bessemer process) caused changes in at least two other aspects of industrial society or the global economy. Be specific about the mechanism — explain exactly how the cause produced the effect, not just that it did. End with a synthesis statement about what this causal chain reveals about the nature of technological change during industrialization.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Technologies of Industrialization',
      subtitle: 'Checks Learning Target 1 — how industrial technologies transformed economic life.',
      cardDesc: 'Railroads, telegraph, Bessemer steel, electricity, and their interdependence.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose two of the following technologies: railroad, telegraph, Bessemer process, electricity. For each, explain one specific mechanism by which it transformed industrial economies — not just "it was important" but exactly how it changed production, markets, or coordination. Then explain the interdependence between your two chosen technologies: how did each one require or enable the other? End with a synthesis: what does the interdependence of industrial technologies reveal about how technological change works?',
      responseType: 'Checkpoint 1',
      terms: ["Stephenson's Rocket", 'transcontinental railroad', 'Trans-Siberian Railroad', 'Morse telegraph', 'transatlantic cable', 'Bessemer process', 'surplus value', 'technological interdependence', 'national market integration', 'steam power'],
      focus: ['Explain the specific mechanism for each technology — how exactly did it change economic life?', 'Explain the interdependence between your two chosen technologies.', 'Synthesize: what does technological interdependence reveal about how industrial change worked?']
    },
    {
      title: 'Checkpoint 2: Environmental and Social Costs of Industrialization',
      subtitle: 'Checks Learning Target 2 — how industrial demand transformed environments and labor in colonized regions.',
      cardDesc: 'Coal pollution, rubber extraction, guano, deforestation, and the global reach of industrial demand.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Choose one specific example of industrial resource extraction from colonized or semi-colonized regions (options: rubber extraction in the Congo or Amazon; guano extraction in Peru; cotton production in India or the American South; deforestation for railroad construction). Describe the specific labor system used in your chosen example — who did the work, under what conditions, and who benefited from the proceeds. Then explain the connection between this extraction system and industrial technology in Europe or North America: what specific industrial demand drove this extraction? End with a broader claim: what does this example reveal about who bore the environmental and labor costs of industrialization, and who captured its economic benefits?',
      responseType: 'Checkpoint 2',
      terms: ['Congo rubber extraction', 'Force Publique', 'guano', 'Chincha Islands', 'debt peonage', 'coercive labor', 'deindustrialization', 'resource periphery', 'industrial core', 'environmental transformation'],
      focus: ['Describe the specific labor system — who worked, under what conditions, who benefited.', 'Connect the extraction system to specific industrial demand in Europe or North America.', 'Make a supported claim: who bore the costs of industrialization, and who captured its benefits?']
    }
  ];
})();
