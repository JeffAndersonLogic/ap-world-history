(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.3.I.C',
      theme: 'Governance',
      text: 'Recruitment and use of bureaucratic elites, as well as the development of military professionals, became more common among rulers who wanted to maintain centralized control over their populations and resources.',
      illustrativeExamples: ['Ottoman devshirme', 'Salaried samurai']
    },
    {
      code: 'KC-4.3.I.A',
      theme: 'Governance',
      text: 'Rulers continued to use religious ideas, art, and monumental architecture to legitimize their rule.',
      illustrativeExamples: ['Mexica practice of human sacrifice', 'European notions of divine right', 'Songhai promotion of Islam', 'Qing imperial portraits', 'Incan sun temple of Cuzco', 'Mughal mausolea and mosques', 'European palaces, such as Versailles']
    },
    {
      code: 'KC-4.3.I.D',
      theme: 'Governance',
      text: 'Rulers used tribute collection, tax farming, and innovative tax-collection systems to generate revenue in order to forward state power and expansion.',
      illustrativeExamples: ['Mughal zamindar tax collection', 'Ottoman tax farming', 'Mexica tribute lists', 'Ming practice of collecting taxes in hard currency']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Running an Empire',
    embedUrl: 'first-and-10-topic-3-2-empires-administration-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Provincial structure', detail: 'The Mughal Empire divided its territory into provinces (subah), each governed by an appointed official (subadar) who answered to the emperor.' },
      { label: 'Mansabdar network', detail: 'Provincial governors and military commanders were mansabdars — ranked officials whose revenue rights (jagir) were assigned and revoked by the emperor, not inherited.' },
      { label: 'Rajput incorporation', detail: 'Hindu Rajput kingdoms in northern India were incorporated into Mughal administration through mansabdar appointments and strategic marriages, not conquest alone.' },
      { label: 'Geographic takeaway', detail: 'The scale of the empire made direct central control impossible — the mansabdar system created a network of personally loyal officials across vast distances.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Akbar_receiving_nobles.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: 'Step into the imperial court and negotiate your place in the system. Will you accept a mansabdar rank from the Mughal emperor, serve as a devshirme official in the Ottoman court, or press for local autonomy as a Rajput noble?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: You Are a Mansabdar in Akbar\'s Court, Delhi, c. 1580',
    desc: 'You hold a rank of 1,000 in the Mughal imperial service — commanding 1,000 cavalry soldiers in exchange for revenue rights over your assigned jagir.',
    intro: 'You are a Rajput Hindu nobleman who has accepted a mansabdar rank from the Mughal Emperor Akbar. You hold a rank of 1,000 (mansab), which means you must maintain and present 1,000 cavalry soldiers when called upon. In exchange, you have been assigned a jagir — the right to collect revenue from a designated territory in Rajasthan. You speak Persian at court, maintain your Hindu religious practices in private, and serve alongside Muslim, Hindu, and Central Asian commanders in a single imperial army.',
    detail: 'Your situation is neither prisoner nor free lord. You accepted the rank because refusing would mean losing your kingdom — but accepting means your lands are technically imperial grants, revocable at the emperor\'s pleasure. Your son will not automatically inherit your rank or your jagir. You are part of a system designed to make you depend on the emperor rather than on your own inherited wealth. Yet within that system, you have real power, real status, and real revenue. Akbar has treated your religious practices with respect — he has even abolished the jizya tax on non-Muslims — and you have come to see the Mughal system as compatible with your identity, even if you did not choose it freely.',
    prompt: 'Was Akbar\'s incorporation of Rajput nobles into the mansabdar system a sign of imperial strength or imperial weakness? Use evidence from the scenario to support your argument.'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Administrative Systems Across Empires',
    intro: 'Comparison means identifying both similarities and differences between historical cases and explaining WHY those patterns exist. For Topic 3.2, you need to compare how different empires solved the same problem: governing large, diverse territories without triggering revolt or losing control to independent nobles.',
    steps: [
      { label: 'Identify the shared problem', text: 'All land-based empires needed loyal administrators, reliable revenue, and military service. The problem was universal — the solutions differed.' },
      { label: 'Compare the Ottoman and Mughal systems', text: 'Devshirme created loyalty by removing recruits from their families; mansabdar created loyalty by making rank non-hereditary and revenue conditional on service. Both solved the loyalty problem — through different mechanisms.' },
      { label: 'Explain the difference', text: 'Context shaped the solution. The Ottomans drew on a diverse Balkan population; the Mughals governed a majority-Hindu subcontinent. Each system reflected the specific ethnic, religious, and geographic challenge each empire faced.' }
    ],
    prompt: 'In 3–4 sentences, compare how the Ottoman devshirme system and the Mughal mansabdar system each solved the problem of administrative loyalty. Identify one similarity and one difference, and explain why the difference existed.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Bureaucracy, Taxation, and Military Recruitment',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'How empires connected the imperial center to the periphery through administration.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how land-based empires used bureaucracies, taxation systems, or military recruitment to consolidate power over diverse populations. Use at least two specific examples.',
      responseType: 'Checkpoint 1',
      terms: ['devshirme', 'mansabdar', 'jagir', 'timar', 'tax farming', 'tribute', 'civil service examination', 'Banner system', 'janissary', 'grand vizier'],
      focus: ['Name at least two specific administrative or military systems.', 'Explain how each system extracted resources or maintained loyalty.', 'Connect your examples to the broader challenge of governing diverse, large territories.']
    },
    {
      title: 'Checkpoint 2: Specific Systems and Accommodation',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Devshirme, mansabdar, millet, and the strategy of incorporating local elites.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Describe two specific administrative systems from different empires. Then explain why rulers sometimes chose to accommodate local elites rather than impose direct control — and whether accommodation was a sign of strength or weakness.',
      responseType: 'Checkpoint 2',
      terms: ['devshirme', 'mansabdar', 'millet system', 'Akbar', 'Rajput', 'jagir', 'co-optation', 'accommodation', 'centralization', 'loyalty'],
      focus: ['Describe at least two distinct administrative systems from two different empires.', 'Explain how each system solved the loyalty or revenue problem.', 'Take a position on accommodation: strength or weakness? Support it with evidence.']
    }
  ];
})();
