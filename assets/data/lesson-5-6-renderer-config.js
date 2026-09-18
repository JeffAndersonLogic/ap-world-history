(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.1.V.C',
      theme: 'Governance',
      text: 'As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization.',
      illustrativeExamples: ['Muhammad Ali’s development of a cotton textile industry in Egypt']
    },
    {
      code: 'KC-5.2.II.A',
      theme: 'Governance',
      text: 'The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The State Steps In',
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Egypt under Muhammad Ali', detail: 'Egypt used state monopolies, cotton cultivation, irrigation projects, imported machinery, textile mills, and military factories to try to build industrial and military independence. The case shows why governments that industrialized later sometimes substituted state direction for weak private capital.' },
      { label: 'Meiji Japan', detail: 'The Meiji government combined tax reform, education, model factories, shipyards, railroads, telegraphs, imported experts, and later private enterprise. Industrial policy was part of a larger state-building strategy aimed at resisting Western domination and increasing Japanese regional power.' },
      { label: 'External pressure', detail: 'State-sponsored industrialization was often a response to an unequal international environment. Industrial powers possessed stronger militaries, more capital, and greater control over trade. Governments intervened because economic weakness had become a sovereignty problem.' },
      { label: 'Comparison takeaway', detail: 'Egypt and Japan both used government action to accelerate industrialization. Japan’s broader institutional reforms and greater ability to sustain policy produced a more durable transformation, while Egypt faced heavier fiscal, coercive, and European constraints.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-meiji-investment-ledger.html',
    desc: "Advise Meiji officials on where the state should invest first — rail, textiles, shipbuilding, education, or military industry — and defend the strategy with evidence."
  };

  lesson.skillBuilder = {
    label: 'Comparison and causation practice',
    title: 'Egypt and Japan: Two State-Led Industrialization Strategies',
    intro: 'The Topic 5.6 comparison is not state versus market in the abstract. It asks why governments intervened, what instruments they used, and how state capacity plus international pressure shaped outcomes.',
    steps: [
      { label: 'Identify the strategic problem', text: 'For each state, begin with the problem government leaders believed industrialization would solve: military weakness, economic dependence, fiscal weakness, or vulnerability to foreign pressure.' },
      { label: 'Name the state instruments', text: 'Use concrete policy evidence: Muhammad Ali’s cotton and factory monopolies, irrigation and military production; Meiji taxation, education, railroads, telegraphs, model factories, shipyards, imported experts, and support for private firms.' },
      { label: 'Explain the mechanism', text: 'Do not write “the government helped industrialization.” Explain how the policy supplied capital, infrastructure, skills, demand, or protection that private firms could not yet provide.' },
      { label: 'Compare outcomes and limits', text: 'Finish by explaining why Japan’s industrialization became more durable and connected to regional power while Egypt’s program faced stronger internal and external constraints.' }
    ],
    prompt: 'Compare Muhammad Ali’s Egypt and Meiji Japan as cases of state-sponsored industrialization. Explain one shared strategic motive, two specific government actions in each case, and one reason their outcomes differed.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Why the State Industrializes',
      subtitle: 'Checks Learning Target 1 — state-sponsored industrialization and the catch-up problem.',
      cardDesc: 'Muhammad Ali, cotton textiles, state monopolies, factories, irrigation, and military modernization.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain why a government that industrialized later might intervene directly in the economy instead of waiting for private industry to develop. Then use Muhammad Ali’s Egypt as evidence: explain at least THREE state actions—such as cotton cultivation, textile factories, state monopolies, irrigation, military factories, or imported expertise—and show how each action was intended to increase industrial or military capacity.',
      responseType: 'Checkpoint 1',
      terms: ['state-sponsored industrialization', 'Muhammad Ali', 'Egypt', 'cotton textile industry', 'state monopoly', 'irrigation', 'factory', 'military modernization', 'import substitution'],
      focus: ['Explain the late-industrializer catch-up problem.', 'Use at least three specific Egyptian state policies.', 'Explain the mechanism connecting each policy to industrial or military capacity.']
    },
    {
      title: 'Checkpoint 2: Egypt vs. Meiji Japan',
      subtitle: 'Checks Learning Target 2 — comparative state strategy and outcomes.',
      cardDesc: 'Meiji reforms, model factories, infrastructure, education, private firms, and regional power.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Compare state-sponsored industrialization in Muhammad Ali’s Egypt and Meiji Japan. Identify one important similarity in why governments intervened, explain at least THREE specific Meiji reforms that supported industrialization, and explain one reason Japan’s strategy produced a more durable increase in industrial and regional power. Your explanation must connect policy to outcome.',
      responseType: 'Checkpoint 2',
      skill: 'Comparison and causation',
      terms: ['Meiji Restoration', 'Iwakura Mission', 'railroads', 'telegraph', 'education', 'model factories', 'shipyards', 'zaibatsu', 'Sino-Japanese War', 'regional power', 'Muhammad Ali'],
      focus: ['Compare the strategic motive for state intervention in Egypt and Japan.', 'Use at least three specific Meiji reforms.', 'Explain why outcomes differed using state capacity, external pressure, institutions, or private-sector development.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Evaluate the role of governments in industrialization. Use evidence from at least two states and decide whether state action was mainly an accelerator, a substitute for private capital, or both.'
  };

  lesson.images = [
    {
      title: 'States and industrialization',
      url: '../assets/images/instructional-maps/topic-5-6.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-6.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of state-led industrial projects across several regions.',
      prompt: 'NOTICE how widely spread the marked projects are. INFER what problem the states involved shared. What does a map of projects not show about whether any of them worked?'
    },
    {
      title: 'Meiji state-sponsored industry',
      label: 'Policy record · Japan, 1870s',
      sourceText: [
        'Government built model factories and shipyards.',
        'Many enterprises were later sold to private business groups.'
      ],
      caption: 'A sequence rather than a policy: the state built, then sold. Both halves are the evidence.',
      prompt: 'What does the sequence state-build then private-sale suggest about government’s role? What would count as evidence of private initiative?'
    },
    {
      title: 'The Iwakura Mission, 1872',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iwakura_mission.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Iwakura_mission.jpg',
      caption: 'Five leaders of the Meiji government photographed abroad during a two-year study tour of the United States and Europe. Iwakura Tomomi is in Japanese dress; the others are not.',
      prompt: 'NOTICE what each man is wearing and where he is standing. INFER what decision about Japan’s future the photograph is making visible. A posed photograph is an argument: what is this one arguing?'
    },
    {
      title: 'Witte and Russian rail finance',
      label: 'State policy record · Russia, 1890s',
      sourceText: [
        'Finance Minister Sergei Witte promoted railroads and heavy industry.',
        'Foreign capital and protective tariffs supported expansion.'
      ],
      caption: 'State direction and foreign capital in the same programme, which is what makes Russia hard to file.',
      prompt: 'How does this mix of state direction and foreign capital complicate a simple state-versus-market comparison?'
    },
    {
      title: 'Muhammad Ali of Egypt',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg',
      caption: 'A commissioned portrait of the Ottoman governor who built state arms factories, textile mills and a conscript army in Egypt from the 1810s.',
      prompt: 'NOTICE how the sitter is dressed, seated and lit, and what he is holding. INFER what claim about his authority the portrait is composed to make. A ruler chooses how a commissioned portrait shows him: how does that make it evidence rather than decoration?'
    }
  ];

})();
