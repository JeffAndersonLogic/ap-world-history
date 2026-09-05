(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-4.1.IV.C",
      "theme": "Governance",
      "text": "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.III.ii",
      "theme": "Governance",
      "text": "Economic disputes led to rivalries and conflict between states.",
      "illustrativeExamples": [
        "Muslim–European rivalry in the Indian Ocean",
        "Moroccan conflict with the Songhai Empire"
      ]
    },
    {
      "code": "KC-4.1.IV.D.i",
      "theme": "Economic Systems",
      "text": "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.IV",
      "theme": "Economic Systems",
      "text": "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.II.A",
      "theme": "Economic Systems",
      "text": "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased.",
      "illustrativeExamples": [
        "Western Europe—wool and linen",
        "India—cotton",
        "China—silk"
      ]
    },
    {
      "code": "KC-4.2.III.C",
      "theme": "Social Interactions and Organization",
      "text": "Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.IV.D.ii",
      "theme": "Social Interactions and Organization",
      "text": "The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.VI",
      "theme": "Cultural Developments and Interactions",
      "text": "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Labor of Empire',
    embedUrl: 'first-and-10-topic-4-5-maritime-empires-maintained-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Potosí and the mita zone', detail: 'Potosí (modern Bolivia) produced roughly 60% of the world\'s silver in the 16th–17th centuries. The mita system conscripted indigenous workers from a radius of hundreds of miles. By 1600, Potosí was the largest city in the Western Hemisphere, sustained entirely by silver extraction.' },
      { label: 'Manila Galleon route (Acapulco → Manila)', detail: 'The Manila Galleon trade (1565–1815) was the world\'s first regularly scheduled transoceanic route. Mexican silver crossed the Pacific to Manila, where it was exchanged for Chinese silk, porcelain, and spices. Chinese demand for silver, driven by the Single Whip Tax Reform (1581), pulled the entire circuit.' },
      { label: 'Atlantic silver route (Potosí → Seville)', detail: 'Silver traveled from Potosí overland to the Pacific coast, by ship to Portobelo or Veracruz, and then across the Atlantic to Seville\'s Casa de Contratación. The Casa held a monopoly on all colonial trade and channeled silver into European money markets, funding Spanish military campaigns and triggering the global price revolution.' },
      { label: 'Geographic takeaway', detail: 'By c. 1580, a single commodity, silver, connected three continents into a global economy. The direction of flow reflects where demand was highest: China needed silver for its tax system, creating an enormous pull across the Pacific that drove the entire network. Understanding this geography is essential for AP arguments about global trade in c. 1450–1750.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-potosi-production-order.html',
    desc: 'Reorganize Potosí in 1573: connect labor, mercury, royal taxation, and Atlantic-Pacific silver flows while confronting the community and environmental costs of imperial extraction.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Tracing the Silver Economy: From Mine to Market',
    intro: 'Causation practice for Topic 4.5 requires tracing how one factor, silver extraction at Potosí, caused changes across multiple systems: labor, administration, and global trade. A strong causation argument identifies specific causes and effects, uses specific evidence, and explains the mechanism by which cause produced effect. Avoid vague claims like "silver caused change", explain HOW the silver flowed, WHO it affected, and WHAT specifically changed.',
    steps: [
      { label: 'Identify the cause', text: 'The mita system at Potosí forced indigenous labor to extract silver at industrial scale. The cause is specific: the combination of Spanish colonial demand for revenue, Chinese fiscal demand for silver (Single Whip Tax Reform, 1581), and the forced labor of mita workers who had no alternative because tribute obligations required silver payment.' },
      { label: 'Trace the effects', text: 'Silver flowing from Potosí through Acapulco to Manila (Manila Galleon) and through Veracruz to Seville (Atlantic route) created the first genuinely global trade circuit. Chinese merchants in Manila received silver in exchange for silk and porcelain; European merchants received silver that funded expansion; and the enormous silver influx caused the global price revolution, inflation across Europe and Asia.' },
      { label: 'Explain the mechanism', text: 'The mechanism connecting cause and effect was demand. Chinese demand for silver created the pull that made the Manila Galleon profitable; Spanish crown demand for revenue created the push that forced the mita; indigenous workers had no choice because their tribute obligations required silver they could only earn by mining it. Understanding the mechanism, not just the fact of silver flow, is what makes a causation argument strong.' }
    ],
    prompt: 'In 3–4 sentences, write a causation argument: explain how the extraction of silver at Potosí, using the mita labor system, caused changes in global trade networks. Use specific evidence (Potosí, Manila Galleon, Seville, Chinese demand for silver) and explain the mechanism by which silver extraction transformed global commerce.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Labor Systems and Colonial Administration',
      subtitle: 'Checks Learning Targets 1 and 2 — labor systems and colonial administration.',
      cardDesc: 'Encomienda, mita, chattel slavery, viceroyalties, audiencias, and the Catholic Church.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the mita system worked at Potosí and describe the conditions it created for indigenous workers. Then explain how the viceregal system and Catholic Church maintained colonial administration across vast distances. Use specific evidence for each and explain ONE key similarity between the encomienda and mita systems.',
      responseType: 'Checkpoint 1',
      terms: ['encomienda', 'mita', 'Potosí', 'chattel slavery', 'viceroyalty', 'audiencia', 'Jesuit missions', 'las Casas', 'New Spain', 'Peru'],
      focus: ['Explain the mita system: origins, conscription zone, conditions at Potosí, and why death rates were so high.', 'Describe how the viceregal system and Church maintained colonial order, use specific institutional names.', 'Identify one key similarity between the encomienda and mita (e.g., both used coercion; both served colonial extraction goals).']
    },
    {
      title: 'Checkpoint 2: Silver and Global Trade',
      subtitle: 'Checks Learning Target 3 — the silver economy and global price revolution.',
      cardDesc: 'Potosí, Manila Galleon, Seville, Chinese demand for silver, and the global price revolution.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how silver from Potosí connected the Americas, Europe, and Asia into a global trade network. Describe at least two trade routes (Manila Galleon and Atlantic crossing) and explain how Chinese demand for silver drove the entire system. Then identify one continuity: what pre-existing trade networks did the silver economy build upon or incorporate?',
      responseType: 'Checkpoint 2',
      terms: ['Potosí', 'Manila Galleon', 'Casa de Contratación', 'global price revolution', 'Chinese demand', 'silver economy', 'Seville', 'Single Whip Tax Reform'],
      focus: ['Explain the Manila Galleon trade: route, commodities exchanged, why Chinese demand drove it.', 'Describe the Atlantic silver route through Seville and explain the global price revolution.', 'Identify one continuity: what existing trade network did the silver economy build upon?']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Labor, Silver, and the First Global Economy',
    task: 'Choose TWO cards that trace different links in an economic chain: coerced labor, commodity extraction, global circulation, or corporate/mercantilist organization. Observe the source first, then explain the mechanism connecting it to the larger system. A painting of a mine or plantation can reveal production and social order, but it does not by itself quantify output or prove every labor condition.',
    prompt: 'Using two evidence cards, build one causal claim about how labor systems and global demand sustained maritime empires from c. 1450 to c. 1750. Cite one concrete detail from each source, explain the mechanism connecting the evidence, and identify one limit in either source.'
  };

  lesson.images = [
    {
      title: 'Cerro Rico at Potosí, 1552',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cerro_de_Potos%C3%AD._Grabado_en_madera%2C_del_libro_Cr%C3%B3nica_del_Per%C3%BA%2C_1552%2C_de_Pedro_Cieza_de_Le%C3%B3n.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cerro_de_Potos%C3%AD._Grabado_en_madera,_del_libro_Cr%C3%B3nica_del_Per%C3%BA,_1552,_de_Pedro_Cieza_de_Le%C3%B3n.jpg',
      caption: 'Silver-production evidence. A mid-16th-century woodcut represents Cerro Rico shortly after Potosí became a major Spanish mining center.',
      prompt: 'NOTICE how the mountain and settlement are represented. What can you INFER about the concentration of colonial investment around silver? What written evidence would you need to establish the scale and coercion of mita labor?'
    },
    {
      title: 'Brazilian Sugar Mill and Casa Grande, 1661',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar%2C_1661.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar,_1661.jpg',
      caption: 'Plantation-economy evidence. Frans Post\'s 1661 painting depicts a sugar mill and elite residence in colonial Brazil, where sugar production depended heavily on enslaved African labor.',
      prompt: 'NOTICE the relationship among production space, residence, land, and workers. What can you INFER about plantation organization and wealth? How might an elite European artist sanitize or omit coercion?'
    },
    {
      title: 'Global Silver and Manila Galleon Routes',
      url: '../assets/images/instructional-maps/topic-4-5.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-5.svg',
      caption: 'Secondary systems evidence. The BeHistorical map traces silver from the Americas toward Europe and Asia, including the Manila Galleon connection to Chinese markets.',
      prompt: 'NOTICE where American silver travels and where major demand centers sit. What can you INFER about why a mine in the Andes mattered to merchants in Manila and China? What can a route map not show about prices or individual transactions?'
    },
    {
      title: 'Dutch East India Company (VOC)',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voc.jpg',
      caption: 'Commercial-organization evidence. The VOC symbolizes the joint-stock company model through which states and merchants mobilized capital for long-distance commerce and imperial competition.',
      prompt: 'NOTICE the company identity and state connection. What can you INFER about how finance and monopoly privileges supported maritime empire? What accounting or charter evidence would you need to demonstrate actual profits or legal powers?'
    }
  ];
})();
