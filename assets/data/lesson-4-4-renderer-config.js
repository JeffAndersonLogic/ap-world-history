(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-4.3.II.A.i",
      "theme": "Governance",
      "text": "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks. Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies.",
      "illustrativeExamples": [
        "Ming China",
        "Tokugawa Japan"
      ]
    },
    {
      "code": "KC-4.3.II.C",
      "theme": "Governance",
      "text": "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.A.ii",
      "theme": "Governance",
      "text": "The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.A.iii",
      "theme": "Economic Systems",
      "text": "Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants.",
      "illustrativeExamples": [
        "Swahili Arabs",
        "Omanis",
        "Gujaratis",
        "Javanese"
      ]
    },
    {
      "code": "KC-4.2.II.D",
      "theme": "Economic Systems",
      "text": "Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.II.B",
      "theme": "Social Interactions and Organization",
      "text": "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.II.C",
      "theme": "Social Interactions and Organization",
      "text": "The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Building Empires at Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Estado da India ports', detail: 'Goa (1510, western India), Malacca (1511, Strait between Indian Ocean and South China Sea), Hormuz (1515, entrance to Persian Gulf), three chokepoints that gave Portugal control over Indian Ocean trade without requiring territorial conquest.' },
      { label: 'Spanish colonial Americas', detail: 'New Spain (Mexico, 1521, after Aztec conquest) and Peru (after Inca conquest, 1532) became the two viceroyalties of the Spanish colonial empire, organized administrative units governed by royal appointees.' },
      { label: 'Dutch/British commercial networks', detail: 'By c. 1620, the VOC had established Batavia (Jakarta) as its Asian headquarters and was displacing the Portuguese across the Indian Ocean. The British EIC established trading posts at Surat, Madras, Bombay, and Calcutta.' },
      { label: 'Geographic takeaway', detail: 'Three different geographic logics drove three different empire models: Portuguese controlled ocean chokepoints; Spanish controlled vast interior territories; Dutch and British controlled commercial nodes in existing trade networks. Each model reflected the goals and capacities of the state that used it.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-goa-fort-council.html',
    desc: 'Shape the Estado da Índia after Albuquerque: choose between forts, territory, treaties, sea passes, and local accommodation in an Indian Ocean whose established merchants remain indispensable.'
  };

  lesson.skillBuilder = {
    label: 'Continuity and change practice',
    title: 'What Changed When Maritime Empires Expanded?',
    intro: 'Topic 4.4 is best organized as a continuity-and-change problem. New maritime empires and states grew, but older Indian Ocean commerce and older forms of labor and enslavement did not simply disappear.',
    steps: [
      { label: 'State power', text: 'Use one European maritime empire and one African state such as Kongo or Asante to show how participation in expanding trade networks could increase political influence in different ways.' },
      { label: 'Trade continuity', text: 'Identify one European disruption in the Indian Ocean, then explain why intra-Asian commerce and merchants such as Gujaratis, Omanis, Swahili Arabs, or Javanese continued.' },
      { label: 'Labor continuity and change', text: 'Compare an adapted older labor system such as the Incan mit’a with a new or expanded colonial system such as encomienda, hacienda, indentured servitude, or chattel slavery.' },
      { label: 'Slavery continuity and change', text: 'Distinguish older African/Mediterranean/Indian Ocean forms of enslavement from the much larger plantation-driven Atlantic demand for enslaved labor.' }
    ],
    prompt: 'Choose TWO Topic 4.4 developments and write a continuity-and-change explanation for each. Use specific evidence and explain the mechanism behind the change or persistence.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Maritime States and Indian Ocean Continuity',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'European maritime empire, African state growth, and continuity inside Indian Ocean trade.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how expanding maritime trade increased the power of ONE European maritime empire and ONE African state such as Kongo or Asante. Then explain one important continuity in Indian Ocean trade despite Portuguese or Dutch disruption, using a specific merchant group or intra-Asian trade example.',
      responseType: 'Checkpoint 1',
      terms: ['Estado da Índia', 'Spanish Empire', 'Kongo', 'Asante', 'trading posts', 'Indian Ocean', 'intra-Asian trade', 'Gujaratis', 'Omanis', 'Swahili Arabs', 'Javanese'],
      focus: ['Use one specific European state-building example.', 'Use one specific African state-growth example.', 'Explain one Indian Ocean continuity and why European arrival did not erase it.']
    },
    {
      title: 'Checkpoint 2: Labor and Slavery — Continuity and Change',
      subtitle: 'Checks Learning Targets 3–4 and Success Criteria 3–4.',
      cardDesc: 'Mit’a, encomienda, hacienda, indentured servitude, chattel slavery, and older forms of enslavement.',
      learningTargets: [lesson.learningTargets[2].target, lesson.learningTargets[3].target],
      successCriteria: [lesson.successCriteria[2].criteria, lesson.successCriteria[3].criteria],
      prompt: 'Explain one continuity and one change in labor systems in the Americas after 1500. Then explain one continuity and one change in slavery across Africa, the Indian Ocean, and the Atlantic world. Use at least THREE specific terms or examples and make clear what persisted versus what expanded or changed.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change Over Time',
      terms: ['Incan mit’a', 'mita', 'encomienda', 'hacienda', 'indentured servitude', 'chattel slavery', 'plantation economy', 'African enslavement', 'Mediterranean', 'Indian Ocean', 'Atlantic slave trade'],
      focus: ['Compare an older/adapted labor system with a new or expanded colonial labor system.', 'Explain that enslavement in Africa predated Atlantic expansion.', 'Explain how plantation demand changed the scale, destination, and social effects of enslaved labor.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: State Power, Trade Continuity, and Labor Change',
    task: 'Choose TWO cards that illuminate different Topic 4.4 developments: state expansion, Indian Ocean continuity, colonial labor, or slavery. Identify what each source can show and what it cannot before using it as evidence.',
    prompt: 'Using two evidence cards, make one claim about continuity and change as maritime empires expanded. Cite concrete details from both sources, explain the historical mechanism, and identify one source limitation.'
  };

  lesson.images = [
    {
      title: 'Vasco da Gama Pillar — Portuguese Trading-Post Model',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pillar_of_Vasco_da_Gama.jpg',
      caption: 'Portuguese evidence. A coastal monument at Malindi reflects the route-marking, diplomacy, and strategic port orientation of Portuguese expansion in the Indian Ocean.',
      prompt: 'NOTICE the coastal location and imperial/religious symbolism. What can you INFER about a strategy based on ports and sea lanes rather than large inland conquest? What local African or Asian perspective is missing?'
    },
    {
      title: 'Estado da Índia and Maritime Chokepoints',
      url: '../assets/images/instructional-maps/topic-4-4.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-4.svg',
      caption: 'Secondary geographic evidence. The BeHistorical map reconstructs Portuguese, Spanish, and Dutch/British imperial nodes and routes.',
      prompt: 'NOTICE where Portuguese power clusters around chokepoints and ports. Compare that pattern with Spanish territorial holdings or Dutch commercial nodes. What does geography suggest about why empire models differed?'
    },
    {
      title: 'Columbus Taking Possession — Spanish Territorial Claim',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Columbus_Taking_Possession.jpg',
      caption: 'Later Spanish-imperial memory. A later representation depicts formal possession-taking in the Caribbean, centering crown authority over inhabited territory.',
      prompt: 'NOTICE the ritual of claiming land and the people placed at the edges of the scene. What can you INFER about the logic of territorial empire? Why is later imperial art weaker evidence for the exact events of 1492?'
    },
    {
      title: 'Dutch East India Company charter, 1602',
      label: 'Charter record · Dutch Republic, 20 March 1602',
      sourceText: [
        'The States General chartered the VOC with a 21-year monopoly',
        'on Dutch trade east of the Cape of Good Hope.',
        'The charter granted powers to build forts, keep troops,',
        'and make treaties with local rulers.'
      ],
      caption: 'The founding charter of a trading company, granting it powers a state would normally keep for itself.',
      prompt: 'NOTICE which powers in this charter are commercial and which are ones you would expect only a government to hold. INFER how a company could come to govern territory. How does this differ from direct royal administration, and what would you need to show it worked that way in practice?'
    },
    {
      title: 'Casta Painting — Consequence of Spanish Territorial Empire',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Casta_painting_all.jpg',
      caption: 'Colonial-society evidence. Casta painting represents a social world created by long-term Spanish territorial settlement, coerced labor, migration, and racial classification in the Americas.',
      prompt: 'NOTICE how people are categorized and ranked. What can you INFER about the depth of territorial colonial rule compared with a trading-post empire? What does this elite genre simplify about real colonial society?'
    }
  ];
})();
