(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-4.3.I.B",
      "theme": "Social Interactions and Organization",
      "text": "Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.",
      "illustrativeExamples": [
        "Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire",
        "Restrictive policies against Han Chinese in Qing China",
        "Varying status of different classes of women within the Ottoman Empire"
      ]
    },
    {
      "code": "KC-4.2.III.A",
      "theme": "Social Interactions and Organization",
      "text": "Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.III.B",
      "theme": "Social Interactions and Organization",
      "text": "The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.",
      "illustrativeExamples": [
        "Ottoman timars",
        "Russian boyars",
        "European nobility"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: New Hierarchies',
    embedUrl: 'first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Spanish colonial Americas, casta hierarchy', detail: 'The casta system organized Spanish colonial society from peninsulares (highest, senior office, born in Spain) through creoles, mestizos, and mulattos to indigenous peoples (owed tribute) and enslaved Africans (no legal personhood). Legal status determined who could hold office, who owed tribute, and who could be enslaved. The hierarchy was maintained by colonial courts (audiencias) and the Catholic Church.' },
      { label: 'Portuguese Brazil, more fluid hierarchy', detail: 'Portuguese Brazil developed a more fluid racial hierarchy than Spanish America, with higher manumission rates and a larger free Black and mixed-race population. This did not eliminate racial hierarchy, enslaved Africans remained at the bottom, but it created a more complex middle layer. The difference reflected different colonial economies: plantation sugar in Brazil created different social pressures than silver mining in Spanish America.' },
      { label: 'Dutch and British colonial contexts', detail: 'Dutch commercial colonies in Asia (VOC territories) organized hierarchy around commercial function and ethnic origin rather than Spanish-style racial classification. British colonies in North America and the Caribbean hardened racial categories through the 17th century, with slave codes that made Blackness the legal basis for enslaved status, more binary than the casta, less fluid than Portuguese Brazil.' },
      { label: 'Geographic takeaway', detail: 'Colonial social hierarchies varied by colonial power and regional economy, but all reflected the same underlying logic: race as the legal basis for labor extraction and social control. The Spanish casta was most elaborate; British slave codes were most binary; Portuguese practice was most fluid. Understanding these differences is essential for AP comparison questions about colonial social hierarchies.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-identity-dossier.html',
    desc: 'Hear a Mexico City status petition and distinguish elite casta representations from the fluid but unequal interaction of ancestry, wealth, gender, reputation, service, and corporate privilege.'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Colonial Social Hierarchies',
    intro: 'Comparison for Topic 4.7 requires identifying both similarities and differences between colonial social hierarchies in different regions, and explaining WHY those patterns exist. The casta system in Spanish America, the plantation hierarchy in Portuguese Brazil, the racial slave codes of British colonies, and the commercial hierarchies of Dutch colonial Asia all organized society differently, but all reflected the same underlying logic of race as the basis for labor coercion.',
    steps: [
      { label: 'Identify the similarity', text: 'All European colonial social hierarchies shared one fundamental feature: they organized who could be forced to work, who could own property, and who could hold power, based on racial or ethnic ancestry. Whether the Spanish casta, British slave codes, or Dutch commercial hierarchy, all were mechanisms for defining who was subject to coercion and who was not. This common logic is the similarity.' },
      { label: 'Identify the meaningful difference', text: 'The methods of classification differed significantly. The Spanish casta was elaborately categorical, dozens of named racial combinations, each with specific legal status. British slave codes were binary, free or enslaved, with Blackness as the legal basis for enslaved status. Portuguese Brazil was more fluid, higher manumission rates and a larger free Black population. The difference reflects different colonial economies and legal traditions.' },
      { label: 'Explain what the comparison reveals', text: 'The comparison reveals that colonial social hierarchy was not a single model but a range of strategies shaped by the specific goals, economies, and legal traditions of each colonial power. Understanding this diversity is essential for AP comparison, avoid treating all colonial hierarchies as identical. The most important insight: racial hierarchy was constructed for economic purposes, not economic inequality constructed from racial hierarchy.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument: compare the casta system in Spanish colonial America to the social hierarchy in ONE other European colonial context (Portuguese Brazil, British Caribbean, or Dutch colonial Asia). Identify one meaningful similarity, one meaningful difference, and explain what the comparison reveals about how European colonialism organized social order.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Diversity Policy and New Elites',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Accommodation/suppression of groups plus new political and economic elites such as the casta hierarchy.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Give ONE example of a state accommodating an ethnic or religious group and ONE example of a state suppressing or restricting a group. Explain why each policy served the state. Then explain how imperial conquest or global economic opportunity produced a new elite or hierarchy, using the casta system or Qing transition as specific evidence.',
      responseType: 'Checkpoint 1',
      terms: ['Ottoman Empire', 'Jews', 'millet', 'Mughal', 'Qing', 'Han Chinese', 'accommodation', 'suppression', 'casta', 'peninsulares', 'creoles', 'new elites'],
      focus: ['Use one specific accommodation example and explain the state interest behind it.', 'Use one specific suppression/restriction example and explain the state interest behind it.', 'Explain how conquest or economic opportunity produced a new elite or hierarchy.']
    },
    {
      title: 'Checkpoint 2: Existing Elites Under Centralizing States',
      subtitle: 'Checks Learning Target 3 and Success Criterion 3.',
      cardDesc: 'Timar holders, Russian boyars, European nobility, and the changing power of older elites.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how the power of TWO existing elite groups changed as states centralized from c. 1450 to c. 1750. Use two examples such as Ottoman timar holders, Russian boyars, or European nobility. For each, explain what power the elite had before, what the ruler or state changed, and whether the elite lost influence, adapted through state service, or gained a new route to status.',
      responseType: 'Checkpoint 2',
      terms: ['timar', 'Ottoman elites', 'boyars', 'Peter the Great', 'European nobility', 'centralization', 'court', 'state service', 'elite power'],
      focus: ['Use two specific existing-elite examples from different states.', 'Explain the mechanism by which centralization altered elite power.', 'Distinguish loss of independent power from adaptation into court or state service.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Hierarchy Is Represented, Enforced, and Contested',
    task: 'Choose TWO cards from different settings and decide which Topic 4.7 process each best shows: accommodation/suppression of diversity, formation of new elites, or changing power of existing elites. Ask whose authority produced the hierarchy and who is missing.',
    prompt: 'Using two evidence cards from different settings, make one comparison claim about how early modern empires organized social hierarchy. Cite one concrete detail from each source, explain one similarity OR difference, and evaluate one way the source creator or genre may distort the hierarchy it represents.'
  };

  lesson.images = [
    {
      title: 'Casta Painting Series — Spanish America',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Casta_painting_all.jpg',
      caption: 'Colonial classification evidence. Casta paintings systematically categorized family combinations by ancestry and status in Spanish America.',
      prompt: 'NOTICE the labels, clothing, occupations, and ordering. What can you INFER about elite attempts to make ancestry legible as social rank? What does this genre hide about people who crossed or manipulated categories?'
    },
    {
      title: 'Brazilian Sugar Mill and Casa Grande, 1661',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar%2C_1661.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar,_1661.jpg',
      caption: 'Portuguese Brazil / plantation hierarchy. Frans Post depicts a sugar-producing estate where landownership, race, and coerced labor structured social power.',
      prompt: 'NOTICE the spatial separation of elite residence, production, land, and workers. What can you INFER about hierarchy built around plantation wealth? How might the painting minimize violence or forced labor?'
    },
    {
      title: 'Qianlong Emperor — Qing China',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg',
      caption: 'Imperial-elite evidence. A Manchu emperor is presented through Chinese imperial visual traditions while ruling a majority-Han population under Qing institutions.',
      prompt: 'NOTICE clothing, pose, and symbols of office. What can you INFER about how a conquering minority presented legitimate hierarchy? What written evidence would you need to explain restrictions on Han elites or Banner privileges?'
    },
    {
      title: 'Suleiman the Magnificent — Ottoman Empire',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
      caption: 'Imperial-elite evidence. A portrait of Suleiman represents Ottoman dynastic authority over a multiethnic and multireligious empire that used differentiated legal and communal status.',
      prompt: 'NOTICE symbols of rulership and elite dress. What can you INFER about dynastic hierarchy? What can a ruler portrait not reveal about the millet system, women of different classes, or the status of religious minorities?'
    },
    {
      title: 'Dutch East India Company charter, 1602 — Commercial Elite Power',
      label: 'Charter record · Dutch Republic, 20 March 1602',
      sourceText: [
        'The States General chartered the VOC with a 21-year monopoly',
        'on Dutch trade east of the Cape of Good Hope.',
        'The charter granted powers to build forts, keep troops,',
        'and make treaties with local rulers.'
      ],
      caption: 'A charter that made a new kind of elite possible: authority and wealth derived from a company rather than from birth or a crown.',
      prompt: 'NOTICE that these powers are granted to directors and shareholders rather than to a noble house. INFER how long-distance trade created status outside older hierarchies. Compare that route to power with the dynastic hierarchy in another card.'
    }
  ];
})();
