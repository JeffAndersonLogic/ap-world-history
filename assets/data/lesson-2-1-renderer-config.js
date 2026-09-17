(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  // Renderer-only enrichment for Topic 2.1. Keep the canonical lesson data as
  // the instructional source of truth and do not reintroduce later Unit 2
  // diffusion/plague content here.
  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Why Silk Roads Trade Expanded',
    embedUrl: 'first-and-10-topic-2-1-silk-roads-capture.html',
    note: 'Read for the economic chain: demand -> lower trade friction -> more exchange -> city and production growth.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Overland corridors', detail: 'The Silk Roads linked East Asia, Central Asia, Persia, and the Mediterranean through existing overland routes.' },
      { label: 'Trading nodes', detail: 'Cities such as Kashgar and Samarkand prospered because merchants needed places to exchange, resupply, and connect routes.' },
      { label: 'Caravanserais', detail: 'Roadside inns reduced the cost and risk of long-distance travel by providing shelter, supplies, information, and security.' },
      { label: 'Commercial systems', detail: 'Credit, banking houses, bills of exchange, and paper money reduced the need to move large quantities of coin.' },
      { label: 'Supporting political condition', detail: 'Periods of relative political stability, including the Pax Mongolica, lowered merchant risk and helped exchange intensify.' }
    ]
  };

  lesson.stableImages = {
    map: '../assets/images/topics/2-1/2.1 - Silk Road Map.png',
    first10: '../assets/images/module-art/unit-2/topic-2-1/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-1/contentdelivery.svg',
    beSurreal: '../assets/images/topics/2-1/2.1 - Chinese Paper Money.jpg',
    skill: '../assets/images/topics/2-1/2.1 - Caravanserai Reconstruction.png',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-1/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-1/evidence.svg',
    source: '../assets/images/topics/2-1/2.1 - Chinese Paper Money.jpg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-1/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-1/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/silk-road-merchant.html',
    desc: 'Become a Silk Road merchant and decide how credit, caravanserais, political protection, and market demand shape a long-distance trading journey.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Carry Trust Instead of Coins',
    text: 'Imagine crossing thousands of miles while carrying enough metal currency to pay for every purchase. Now imagine replacing much of that weight and theft risk with credit, bills of exchange, banking relationships, or paper money. Commercial innovation changed what was practical for merchants.',
    prompt: 'How could a financial tool increase both the volume and the geographic range of trade even if the physical roads stayed the same?'
  };

  lesson.classPresentation = {
    title: 'Class Slides: The Silk Roads',
    desc: 'Review the causal story: luxury demand, systems that lowered trade friction, and the resulting growth of exchange, trading cities, and production.',
    url: 'presentation-topic-2-1-student.html'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'AP Skill Builder: Explain the Silk Roads Growth Chain',
    intro: 'Strong causation explains a mechanism. Do not stop at naming a cause. Show how demand or a trade-supporting system lowered cost or risk, then connect that change to a measurable effect.',
    steps: [
      { label: '1. Name a cause', text: '<strong>Choose one:</strong> rising demand for luxury goods; caravanserais; credit and banking; paper money; or relative political stability such as the Pax Mongolica.' },
      { label: '2. State its function', text: 'Explain what the cause actually did. Example: caravanserais gave merchants secure places to rest, resupply, exchange information, and conduct business.' },
      { label: '3. Explain the mechanism', text: 'Show how that function reduced cost, risk, or difficulty for long-distance merchants.' },
      { label: '4. Connect to an effect', text: '<strong>Effects:</strong> greater trade volume and geographic range, growth of Kashgar and Samarkand, and expanded textile, porcelain, iron, or steel production.' },
      { label: 'Response frame', text: 'Because ___ reduced/increased ___ by ___, merchants could ___. <strong>As a result</strong>, ___ expanded, which contributed to ___.' }
    ],
    prompt: 'Write 2–3 sentences explaining one cause of Silk Roads growth and one resulting effect. Use specific evidence and make the mechanism explicit.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Why Did Silk Roads Trade Expand?',
      subtitle: 'Checks the causes of network growth.',
      cardDesc: 'Demand, caravanserais, credit, banking, money economies, and supporting political stability.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how TWO factors increased Silk Roads trade after 1200. At least one factor must be a transportation or commercial practice. Explain the mechanism for each.',
      responseType: 'Checkpoint 1',
      terms: ['luxury goods', 'caravanserai', 'credit', 'bills of exchange', 'banking houses', 'paper money', 'Pax Mongolica'],
      focus: ['Name two causes.', 'Explain how each lowered cost/risk or increased incentive.', 'Connect the causes to greater trade volume or geographic range.']
    },
    {
      title: 'Checkpoint 2: What Changed Because Trade Grew?',
      subtitle: 'Checks the effects of Silk Roads growth.',
      cardDesc: 'Trading cities and production respond to expanding exchange.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain TWO effects of expanded Silk Roads trade after 1200. Use specific evidence from trading cities and/or production.',
      responseType: 'Checkpoint 2',
      terms: ['Kashgar', 'Samarkand', 'textiles', 'porcelain', 'iron', 'steel', 'production', 'trade volume'],
      focus: ['Identify two effects.', 'Use specific CED-aligned evidence.', 'Explain how expanding trade produced each effect.']
    }
  ];
})();