(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.2.I.A',
      theme: 'Governance',
      text: 'Empires used bureaucracies, military forces, and legal systems to govern their territories and maintain control over diverse populations.',
      illustrativeExamples: ['Ottoman timar system', 'Qing civil service examination', 'Tax farming', 'Tribute networks']
    },
    {
      code: 'KC-3.2.I.B',
      theme: 'Governance',
      text: 'Rulers recruited and appointed administrators from outside traditional noble classes to build loyal bureaucracies and limit the independent power of hereditary elites.',
      illustrativeExamples: ['Devshirme system', 'Janissaries', 'Mansabdar system', 'Jagir assignments']
    },
    {
      code: 'KC-3.2.I.C',
      theme: 'Governance',
      text: 'To maintain stability, empires incorporated local elites into administrative systems and accommodated existing cultural and religious practices rather than imposing uniform control.',
      illustrativeExamples: ['Akbar and Rajput nobles', 'Ottoman millet system', 'Qing accommodation of Chinese bureaucratic tradition', 'Russian expansion of serfdom to bind nobles']
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
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-3/empires-administration.html',
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
