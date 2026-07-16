// lesson-7-2-renderer-config.js
// Topic 7.2 — Causes of World War I
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Governance (GOV)',
      theme: 'Governance',
      text: 'A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain the causes and consequences of World War I.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.B.i',
      theme: 'Governance',
      text: 'The causes of World War I included imperialist expansion and competition for resources. In addition, territorial and regional conflicts combined with a flawed alliance system and intense nationalism to escalate the tensions into global conflict.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Powder Keg',
    embedUrl: 'first-and-10-topic-7-2-causes-wwi-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Triple Alliance', detail: 'Germany, Austria-Hungary, and Italy — the Central European bloc. Germany’s unconditional backing of Austria-Hungary (the “blank check”) turned Vienna’s Balkan quarrel into a great-power commitment.' },
      { label: 'Triple Entente', detail: 'France, Russia, and Britain — the encircling bloc. Russia’s patronage of Serbia and France’s alliance with Russia meant any Austro-Serbian war reached Paris and St. Petersburg almost automatically.' },
      { label: 'The Balkan powder keg', detail: 'Serbia and its neighbors sat in the vacuum left by Ottoman decline (Topic 7.1), with Austria-Hungary and Russia competing to dominate the region. Two Balkan Wars in 1912–1913 had already redrawn the map twice.' },
      { label: 'Geographic takeaway', detail: 'Two armed blocs plus one contested region equals escalation by design: the alliance map shows why the July Crisis of 1914 went from regional conflict to global conflict in a single week.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-july-crisis-telegram.html',
    desc: 'Enter the July Crisis of 1914 and decide, telegram by telegram, how Vienna, Berlin, St. Petersburg, and London can defend credibility without triggering general war.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Wrong Turn That Started a World War',
    text: 'The assassination that triggered World War I almost did not happen. Earlier on 28 June 1914, a first bomb attack on Archduke Franz Ferdinand’s motorcade failed — the bomb bounced off his car. Hours later, the Archduke’s driver, who had not been told the route had changed, took a wrong turn and stopped to reverse — directly in front of Gavrilo Princip, who had given up and was standing outside a Sarajevo delicatessen. Princip stepped forward and fired twice. A missed route briefing put the heir to the Austro-Hungarian throne five feet from the one man in the city still ready to kill him.',
    prompt: 'If the spark was this accidental, what does that suggest about the deeper causes? Would Europe have found another spark — and what evidence from this topic supports your answer?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Powder vs. Spark: Ranking the Causes of World War I',
    intro: 'Topic 7.2 asks for more than a list of causes — the CED names four (imperialist competition, territorial and regional conflicts, a flawed alliance system, intense nationalism) and the AP skill is weighing their relative significance. Build the layered frame below, then take a position. This extends the internal/external sort you built in Topic 7.1 and feeds the Topic 7.9 causation capstone.',
    steps: [
      { label: 'Long-term causes (the powder)', text: 'Structural pressures that built for decades: imperialist expansion and competition for resources (Scramble for Africa, Berlin Conference, Moroccan crises), the arms race, and intense nationalism in both great powers and Balkan self-determination movements.' },
      { label: 'Intermediate causes (the fuse)', text: 'Developments that channeled the pressure toward one region: Ottoman decline opening the Balkans (Topic 7.1), the Balkan Wars of 1912–1913, and the hardening of the Triple Alliance and Triple Entente with secret commitments and mutual suspicion.' },
      { label: 'Immediate cause (the spark)', text: 'The assassination of Archduke Franz Ferdinand on 28 June 1914 and the July Crisis — ultimatum, blank check, and the mobilization chain reaction that made the war general within a week.' }
    ],
    prompt: 'In two to three sentences, take a position: which cause of World War I was most significant — the alliance system, nationalism, imperial rivalry, or regional conflict in the Balkans? Defend your ranking with at least one specific piece of evidence, and name one cause you rank lower and why.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Imperial Rivalry and Competition for Resources',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Imperialist expansion, the Scramble for Africa, and great-power competition for resources.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how imperialist expansion and competition for resources increased tensions among European powers before 1914. Use at least two specific examples — such as the Scramble for Africa, the Berlin Conference, the Moroccan crises, or the Anglo-German naval race — and explain how each made a general war more likely.',
      responseType: 'Checkpoint 1',
      terms: ['imperialist expansion', 'competition for resources', 'Scramble for Africa', 'Berlin Conference', 'raw materials', 'markets', 'strategic territory', 'Moroccan crises', 'naval race', 'militarism'],
      focus: ['Use at least two specific examples of imperial competition.', 'Connect each example to rising tension between named great powers.', 'Explain the mechanism: how did rivalry abroad make war in Europe more likely?']
    },
    {
      title: 'Checkpoint 2: From Regional Crisis to Global War',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'The Balkans, the assassination, the flawed alliance system, and intense nationalism.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Trace how the assassination of Archduke Franz Ferdinand escalated into a global war. Your response must explain the role of territorial and regional conflicts in the Balkans, the flawed alliance system (Triple Alliance and Triple Entente), AND intense nationalism — and how they combined, exactly as the CED describes.',
      responseType: 'Checkpoint 2',
      terms: ['Balkans', 'powder keg', 'Balkan Wars', 'Franz Ferdinand', 'Gavrilo Princip', 'ultimatum', 'Triple Alliance', 'Triple Entente', 'blank check', 'mobilization', 'nationalism', 'self-determination'],
      focus: ['Trace the escalation chain in order: assassination → ultimatum → alliance commitments → general war.', 'Name both alliance blocs and at least one specific commitment that pulled a new power in.', 'Explain how nationalism intensified each step — in the Balkans AND among the great powers.']
    }
  ];

  // Capture points — static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.2+-+Causes+of+World+War+I&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.2+-+Causes+of+World+War+I&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
