(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.4.I.A',
      theme: 'Interaction',
      text: 'Portuguese established a trading post empire in South and Southeast Asia, and on the coasts of Africa and Brazil — based on fortified ports (feitorias) at strategic locations rather than territorial conquest.',
      illustrativeExamples: ['Estado da India', 'Goa (1510)', 'Malacca (1511)', 'Strait of Hormuz', 'Mozambique', 'Afonso de Albuquerque']
    },
    {
      code: 'KC-4.4.I.B',
      theme: 'Interaction',
      text: 'The Spanish established colonial settlements and conquests throughout the Americas, using encomienda labor and viceregal administration to build a territorial empire based on resource extraction and conversion.',
      illustrativeExamples: ['Hernán Cortés and the Aztec Empire (1521)', 'Francisco Pizarro and the Inca Empire (1532)', 'Encomienda system', 'Viceroyalties of New Spain and Peru', 'Catholic missionaries']
    },
    {
      code: 'KC-4.4.I.C',
      theme: 'Interaction',
      text: 'The Dutch, British, and French established maritime empires using joint-stock trading companies that spread financial risk among private investors and allowed commercial expansion without full state control.',
      illustrativeExamples: ['Dutch East India Company (VOC, 1602)', 'British East India Company (EIC, 1600)', 'Batavia (Jakarta)', 'French East India Company (1664)', 'Joint-stock company model']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Building Empires at Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Estado da India ports', detail: 'Goa (1510, western India), Malacca (1511, Strait between Indian Ocean and South China Sea), Hormuz (1515, entrance to Persian Gulf) — three chokepoints that gave Portugal control over Indian Ocean trade without requiring territorial conquest.' },
      { label: 'Spanish colonial Americas', detail: 'New Spain (Mexico, 1521, after Aztec conquest) and Peru (after Inca conquest, 1532) became the two viceroyalties of the Spanish colonial empire — organized administrative units governed by royal appointees.' },
      { label: 'Dutch/British commercial networks', detail: 'By c. 1620, the VOC had established Batavia (Jakarta) as its Asian headquarters and was displacing the Portuguese across the Indian Ocean. The British EIC established trading posts at Surat, Madras, Bombay, and Calcutta.' },
      { label: 'Geographic takeaway', detail: 'Three different geographic logics drove three different empire models: Portuguese controlled ocean chokepoints; Spanish controlled vast interior territories; Dutch and British controlled commercial nodes in existing trade networks. Each model reflected the goals and capacities of the state that used it.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/maritime-empires-established.html',
    desc: "Navigate the Estado da India from a Portuguese factor's perspective at Goa, argue the ethics of the encomienda system with Bartolomé de las Casas, or manage the VOC's Spice Islands trade network from Batavia."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Three Models of Maritime Empire',
    intro: 'Comparison requires identifying both similarities and differences and explaining WHY the patterns exist. For Topic 4.4, you need to compare three distinct models of European maritime empire: the Portuguese trading post empire, the Spanish territorial colonial empire, and the Dutch/British joint-stock company model. A strong comparison argument identifies one similarity and one meaningful difference, provides specific evidence, and explains what the comparison reveals about how different states approached empire.',
    steps: [
      { label: 'Identify the similarity', text: 'All three models were driven by the same ultimate goal: extracting profit from global trade and resources. The Portuguese wanted spice profits from Indian Ocean trade; the Spanish wanted gold, silver, and agricultural surplus from the Americas; the Dutch and British wanted commercial profit from Asian goods. The goal was common — the methods differed.' },
      { label: 'Identify the meaningful difference', text: 'The methods reflected each state\'s capacity and geography. Portugal (population ~1 million) could not govern vast territories — so it controlled chokepoints. Spain had crusading institutions and found territories with enormous populations and resources — so it conquered and governed. The Dutch and British had sophisticated financial markets — so they used private capital and joint-stock companies.' },
      { label: 'Explain what the comparison reveals', text: 'The comparison reveals that "European empire" was not a single model but a range of strategies shaped by the specific goals, capacities, and opportunities available to each state. Understanding this diversity is essential for AP comparison — avoid treating all European empires as identical.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument about two of the three models of European maritime empire (Portuguese trading post, Spanish colonial, or Dutch/British joint-stock). Identify one meaningful similarity and one meaningful difference, provide specific evidence for each, and explain what the comparison reveals about how different states approached empire-building.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Estado da India and Spanish Conquest',
      subtitle: 'Checks Learning Targets 1 and 2 — Portuguese and Spanish models of empire.',
      cardDesc: 'Fortified ports, sea lane control, conquest, encomienda, and viceroyalties.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the Portuguese Estado da India established control over Asian trade routes. Then describe how Spain established colonial rule in the Americas after the Aztec and Inca conquests. Use specific evidence for each empire, and explain ONE key difference between the two models.',
      responseType: 'Checkpoint 1',
      terms: ['Estado da India', 'Goa', 'Malacca', 'cartaz', 'feitoria', 'Cortés', 'Pizarro', 'encomienda', 'viceroyalty', 'Las Casas'],
      focus: ['Explain the Estado da India model: fortified ports at chokepoints, cartaz system, naval coercion.', 'Describe Spanish conquest and the encomienda system using specific examples.', 'Identify one key difference between the Portuguese and Spanish approaches to empire.']
    },
    {
      title: 'Checkpoint 2: The Joint-Stock Company and Comparing Models',
      subtitle: 'Checks Learning Target 3 — Dutch/British model and comparison across all three.',
      cardDesc: 'VOC, British EIC, joint-stock companies, and comparing three models of maritime empire.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain what a joint-stock company was and how the Dutch VOC used this model to build a maritime empire. Then write a comparison argument: identify one similarity and one difference between the joint-stock company model and either the Portuguese or Spanish model. Explain what the comparison reveals about European empire-building strategies.',
      responseType: 'Checkpoint 2',
      terms: ['VOC', 'Dutch East India Company', 'joint-stock company', 'British EIC', 'Batavia', 'Spice Islands', 'private capital', 'shared risk', 'charter', 'comparison'],
      focus: ['Explain how joint-stock companies spread risk and mobilized private capital for empire.', 'Give one specific example of VOC power (military, legal, or commercial).', 'Identify one similarity and one difference between the joint-stock model and one other model, with specific evidence.']
    }
  ];
})();
