// lesson-7-6-renderer-config.js
// Topic 7.6, Causes of World War II
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus is GOV (Governance), unchanged from Topic 7.5.
// Topic 7.6 has NO CED illustrative examples, there is intentionally no
// illustrativeExamples structure on any Key Concept entry below (the shared
// renderer renders the examples block only when the array is non-empty, so an
// empty group is omitted entirely rather than carried over from 7.5). The KC is
// a single long sentence: it must survive verbatim, including the word
// "especially" (the CED's own causal weighting) and the phrase "engendered by".
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Governance (GOV)',
      theme: 'Governance',
      text: 'A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.'
    },
    {
      code: 'Unit 7: Learning Objective F',
      theme: 'Learning Objective',
      text: 'Explain the causes and consequences of World War II.'
    },
    {
      code: 'KC-6.2.IV.B.ii',
      theme: 'Governance',
      text: 'The causes of World War II included the unsustainable peace settlement after World War I, the global economic crisis engendered by the Great Depression, continued imperialist aspirations, and especially the rise to power of fascist and totalitarian regimes that resulted in the aggressive militarism of Nazi Germany under Adolf Hitler.'
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Four Roads to One War',
    embedUrl: 'first-and-10-topic-7-6-causes-wwii-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'A failed peace', detail: 'The unsustainable peace settlement after World War I, the Treaty of Versailles\' reparations, territorial losses, and war-guilt clause, left Germany humiliated and resentful, creating fertile ground for radical political movements determined to overturn it. Cause one is written into the map\'s borders.' },
      { label: 'A global collapse', detail: 'The global economic crisis engendered by the Great Depression (Topic 7.4) discredited democratic governments and made extremist promises of order and revival attractive. Economic desperation was the accelerant that turned grievance into mass political extremism.' },
      { label: 'Aggressive militarism, three powers', detail: 'Continued imperialist aspirations drove aggressive militarism across three regions: German expansion in Europe, Italian ambitions in the Mediterranean and Africa, and Japanese expansion in Asia (Manchukuo, from Topic 7.5). The League of Nations could not respond effectively, and unpunished aggression emboldened them all.' },
      { label: 'Especially the regimes', detail: 'The Key Concept ranks its causes: it was ESPECIALLY the rise to power of fascist and totalitarian regimes, the aggressive militarism of Nazi Germany under Adolf Hitler. Versailles supplied the grievance and the Depression the desperation, but the Nazi regime supplied the militarized will to act on both. Weigh that "especially" as you read the map.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Neville_Chamberlain.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-munich-table.html',
    desc: 'Enter the Munich Conference and weigh immediate peace, Czech sovereignty, Western military readiness, collective security, and the risk that concession will reward fascist expansion.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: When Money Was Cheaper Than Firewood',
    text: 'Before the Depression even arrived, the Versailles reparations helped drive Germany into the hyperinflation of 1923, a collapse so total that money stopped behaving like money. A loaf of bread that cost 250 marks in early 1923 cost 200 billion marks by November. Workers were paid twice a day and shopped on their lunch break before prices doubled again. People papered their walls with banknotes because wallpaper cost more; they burned bundles of cash in their stoves because it was cheaper than buying firewood; children built block towers and flew kites out of bricks of money no longer worth carrying to the store. A wheelbarrow of cash could be stolen, by dumping out the worthless money and taking the wheelbarrow.',
    prompt: 'Hyperinflation wiped out the savings of millions of ordinary Germans and taught them that their government could not protect the most basic thing money is supposed to do, hold its value. How does an experience like this help explain why a humiliated, economically broken population became "fertile ground for radical political movements"?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Weighing the Causes: Evaluating the CED\'s "Especially"',
    intro: 'Topic 7.6 is a causation topic where the framework has already done some of the arguing for you: the Key Concept names four causes but ranks one with the word "especially." A weak answer lists the four causes; a strong one weighs them, distinguishing the deeper background conditions from the immediate trigger, and taking a defensible position on which mattered most. Build the argument below.',
    steps: [
      { label: 'Name the four causes (with evidence)', text: 'Lay out the CED\'s causes with specifics: (1) the unsustainable peace, Versailles\' reparations, territorial losses, and war-guilt clause; (2) the global economic crisis engendered by the Great Depression, unemployment that discredited democracies; (3) continued imperialist aspirations, aggressive militarism by Germany, Italy, and Japan; (4) and especially the rise of fascist and totalitarian regimes, Nazi Germany under Hitler rearming and expanding.' },
      { label: 'Separate background from trigger', text: 'Sort the causes by type. Versailles and the Depression are long-term BACKGROUND CONDITIONS, they created grievance and desperation but did not, by themselves, start a war. The rise of the Nazi regime and its aggressive militarism is the PROXIMATE cause, the actor that converted conditions into invasions. The CED\'s "especially" is a claim that the trigger mattered more than the conditions.' },
      { label: 'Take and defend a position', text: 'Finish with a judgment, not a shrug. Defend the CED ("without Hitler\'s regime, the grievances of Versailles and the pain of the Depression need not have produced a world war"), or push back ("without the failed peace and the Depression, Hitler never rises; the conditions made the trigger possible"). Either way, name your criterion for "most significant" and argue it. That is exactly the move the 7.9 capstone will demand.' }
    ],
    prompt: 'In three to four sentences, evaluate the CED\'s claim that World War II was "especially" caused by the rise of fascist and totalitarian regimes. Name at least two of the four causes, distinguish background conditions from the immediate trigger, and take a defensible position on which cause was most significant, and why.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Conditions, Peace, Depression, and Empire',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'The unsustainable peace, the Great Depression, and continued imperialist aspirations.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the unsustainable peace settlement after World War I, the Great Depression, and continued imperialist aspirations each contributed to the outbreak of World War II. Use specific evidence for each, the Treaty of Versailles, the economic collapse, and the aggressive militarism of Germany, Italy, or Japan in the 1930s.',
      responseType: 'Checkpoint 1',
      terms: ['unsustainable peace settlement', 'Treaty of Versailles', 'reparations', 'territorial losses', 'Great Depression', 'unemployment', 'continued imperialist aspirations', 'aggressive militarism', 'League of Nations', 'appeasement'],
      focus: ['Tie the Treaty of Versailles to humiliation, economic burden, and fertile ground for radical movements.', 'Explain how the Great Depression discredited democracies and made extremism attractive.', 'Connect continued imperialist aspirations to aggressive militarism in Europe, Africa, and Asia.']
    },
    {
      title: 'Checkpoint 2: "Especially", The Rise of the Regimes',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'Hitler, the Nazi regime, and evaluating the CED\'s causal weighting.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how the rise of fascist and totalitarian regimes, especially Nazi Germany under Adolf Hitler, led to aggressive militarism and war. Then evaluate the CED\'s claim that this was "especially" the cause: do you agree it mattered more than the unsustainable peace, the Depression, and imperialist aspirations? Defend your position with specific evidence.',
      responseType: 'Checkpoint 2',
      terms: ['fascist and totalitarian regimes', 'Adolf Hitler', 'Nazi Party', 'nationalist resentment', 'rearmament', 'expansionist policy', 'aggressive militarism', 'especially', 'proximate cause', 'background conditions'],
      focus: ['Explain how Hitler turned nationalist resentment and the desire for revenge into expansionist policy.', 'Distinguish the rise of the regimes (the trigger) from Versailles and the Depression (the conditions).', 'Take and defend a position on the CED\'s "especially", agree or push back, with evidence.']
    }
  ];

  // Capture points, static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.6+-+Causes+of+World+War+II&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.6+-+Causes+of+World+War+II&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
