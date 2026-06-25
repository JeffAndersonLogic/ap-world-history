(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.3.I.B',
      theme: 'Social Interactions and Organization',
      text: 'Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.',
      illustrativeExamples: ['Expulsion of Jews from Spain and Portugal; acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire']
    },
    {
      code: 'KC-4.2.III.A',
      theme: 'Social Interactions and Organization',
      text: 'Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.III.B',
      theme: 'Social Interactions and Organization',
      text: 'The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.',
      illustrativeExamples: ['Ottoman timars', 'Russian boyars', 'European nobility']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: New Hierarchies',
    embedUrl: 'first-and-10-topic-4-7-changing-social-hierarchies-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Spanish colonial Americas — casta hierarchy', detail: 'The casta system organized Spanish colonial society from peninsulares (highest — senior office, born in Spain) through creoles, mestizos, and mulattos to indigenous peoples (owed tribute) and enslaved Africans (no legal personhood). Legal status determined who could hold office, who owed tribute, and who could be enslaved. The hierarchy was maintained by colonial courts (audiencias) and the Catholic Church.' },
      { label: 'Portuguese Brazil — more fluid hierarchy', detail: 'Portuguese Brazil developed a more fluid racial hierarchy than Spanish America, with higher manumission rates and a larger free Black and mixed-race population. This did not eliminate racial hierarchy — enslaved Africans remained at the bottom — but it created a more complex middle layer. The difference reflected different colonial economies: plantation sugar in Brazil created different social pressures than silver mining in Spanish America.' },
      { label: 'Dutch and British colonial contexts', detail: 'Dutch commercial colonies in Asia (VOC territories) organized hierarchy around commercial function and ethnic origin rather than Spanish-style racial classification. British colonies in North America and the Caribbean hardened racial categories through the 17th century, with slave codes that made Blackness the legal basis for enslaved status — more binary than the casta, less fluid than Portuguese Brazil.' },
      { label: 'Geographic takeaway', detail: 'Colonial social hierarchies varied by colonial power and regional economy, but all reflected the same underlying logic: race as the legal basis for labor extraction and social control. The Spanish casta was most elaborate; British slave codes were most binary; Portuguese practice was most fluid. Understanding these differences is essential for AP comparison questions about colonial social hierarchies.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: "Navigate the casta as a mestizo merchant seeking legal recognition in New Spain, argue your community's tribute exemption before an audiencia judge, or manage the racial politics of a Portuguese Brazilian plantation as a free Black overseer."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Colonial Social Hierarchies',
    intro: 'Comparison for Topic 4.7 requires identifying both similarities and differences between colonial social hierarchies in different regions — and explaining WHY those patterns exist. The casta system in Spanish America, the plantation hierarchy in Portuguese Brazil, the racial slave codes of British colonies, and the commercial hierarchies of Dutch colonial Asia all organized society differently — but all reflected the same underlying logic of race as the basis for labor coercion.',
    steps: [
      { label: 'Identify the similarity', text: 'All European colonial social hierarchies shared one fundamental feature: they organized who could be forced to work, who could own property, and who could hold power, based on racial or ethnic ancestry. Whether the Spanish casta, British slave codes, or Dutch commercial hierarchy — all were mechanisms for defining who was subject to coercion and who was not. This common logic is the similarity.' },
      { label: 'Identify the meaningful difference', text: 'The methods of classification differed significantly. The Spanish casta was elaborately categorical — dozens of named racial combinations, each with specific legal status. British slave codes were binary — free or enslaved, with Blackness as the legal basis for enslaved status. Portuguese Brazil was more fluid — higher manumission rates and a larger free Black population. The difference reflects different colonial economies and legal traditions.' },
      { label: 'Explain what the comparison reveals', text: 'The comparison reveals that colonial social hierarchy was not a single model but a range of strategies shaped by the specific goals, economies, and legal traditions of each colonial power. Understanding this diversity is essential for AP comparison — avoid treating all colonial hierarchies as identical. The most important insight: racial hierarchy was constructed for economic purposes, not economic inequality constructed from racial hierarchy.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument: compare the casta system in Spanish colonial America to the social hierarchy in ONE other European colonial context (Portuguese Brazil, British Caribbean, or Dutch colonial Asia). Identify one meaningful similarity, one meaningful difference, and explain what the comparison reveals about how European colonialism organized social order.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Casta System in Spanish America',
      subtitle: 'Checks Learning Targets 1 and 2 — racial hierarchy and the casta system.',
      cardDesc: 'Peninsulares, creoles, mestizos, mulattos, indigenous peoples, enslaved Africans, and casta paintings.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain the casta system in Spanish colonial America. Name at least four of the major casta categories and describe their legal status (tribute, office-holding rights, etc.). Then explain WHY the Spanish colonial system created this elaborate racial classification — what economic and social purposes did the casta serve? Use at least one specific piece of evidence (e.g., casta paintings, audiencia records, gracia al sacar).',
      responseType: 'Checkpoint 1',
      terms: ['casta', 'peninsulares', 'creoles', 'mestizos', 'mulattos', 'limpieza de sangre', 'tribute', 'office-holding', 'casta paintings', 'gracia al sacar'],
      focus: ['Name and describe at least four casta categories with their specific legal status.', 'Explain the economic purpose of the casta: it organized who owed tribute, who could be enslaved, who could hold office.', 'Use at least one specific piece of evidence (casta paintings, gracia al sacar, audiencia records).']
    },
    {
      title: 'Checkpoint 2: Continuity, Change, and Comparison',
      subtitle: 'Checks Learning Target 3 — continuity, change, and gender in colonial hierarchies.',
      cardDesc: 'Pre-colonial structures, social mobility, gender roles, and comparing colonial hierarchies.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Identify one CONTINUITY from pre-colonial social structures that persisted into the colonial period (e.g., indigenous nobility retained some status). Then identify one genuine CHANGE that colonialism introduced (e.g., mestizo and mulatto as new categories; racialization of enslaved status). Finally, explain how gender intersected with racial hierarchy — give one specific example of how an indigenous or African woman\'s experience reflected both racial and gender dimensions of colonial hierarchy.',
      responseType: 'Checkpoint 2',
      terms: ['continuity', 'change', 'indigenous nobility', 'kuracas', 'mestizo', 'mulatto', 'racialization', 'gender', 'manumission', 'colonial social mobility'],
      focus: ['Identify one specific continuity from pre-colonial social structure with evidence.', 'Identify one genuine change that colonialism introduced — a category or institution with no pre-colonial equivalent.', 'Explain gender intersection: one specific example of how indigenous or African women experienced both racial and gender dimensions of colonial hierarchy.']
    }
  ];
})();
