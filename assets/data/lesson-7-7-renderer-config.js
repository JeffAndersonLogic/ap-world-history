// lesson-7-7-renderer-config.js
// Topic 7.7, Conducting World War II
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus is GOV (Governance), unchanged from Topic 7.6. This
// differs from Topic 7.3 (TEC), do NOT copy 7.3's thematic focus even though
// the topics are parallel. KC-6.2.IV.A.ii closely parallels the WWI mobilization
// KC in the 7.3 config but is NOT identical: it says "colonies or former
// colonies" and includes the full second sentence on ideologies and
// totalitarian repression. It is copied fresh from the 7.7 CED block, not the
// 7.3 config. The two-heading illustrative-examples block (Western democracies /
// Totalitarian states) is attached to KC-6.2.IV.A.ii as a flat array, matching
// the Topic 7.5 structure. The quotation marks around "total war" in
// KC-6.1.III.C.ii are verbatim CED.
// FIRE-BOMBING HYPHEN FLAG: "fire-bombing" sits on a PDF line break in the
// source CED; the hyphen here should be spot-checked against the CED PDF by the
// owner (see session report).
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Governance (GOV)',
      theme: 'Governance',
      text: 'A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective G',
      theme: 'Learning Objective',
      text: 'Explain similarities and differences in how governments used a variety of methods to conduct war.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.A.ii',
      theme: 'Governance',
      text: 'World War II was a total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies or former colonies) for the purpose of waging war. Governments used ideologies, including fascism and communism, to mobilize all of their state\'s resources for war and, in the case of totalitarian states, to repress basic freedoms and dominate many aspects of daily life during the course of the conflicts and beyond.',
      illustrativeExamples: [
        'Western democracies mobilizing for war:',
        'Great Britain under Winston Churchill',
        'United States under Franklin Roosevelt',
        'Totalitarian states mobilizing for war:',
        'Germany under Adolf Hitler',
        'USSR under Joseph Stalin'
      ]
    },
    {
      code: 'KC-6.1.III.C.ii',
      theme: 'Technology and Innovation',
      text: 'New military technology and new tactics, including the atomic bomb, fire-bombing, and the waging of "total war" led to increased levels of wartime casualties.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Mobilizing Everything',
    embedUrl: 'first-and-10-topic-7-7-conducting-wwii-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'A total war', detail: 'World War II was a total war. Every major power mobilized propaganda, art, media, and intensified forms of nationalism to wage it, and turned its entire economy to military production. The Learning Objective asks for the similarities AND differences in how governments conducted that war.' },
      { label: 'Democracies mobilizing', detail: 'Great Britain under Winston Churchill and the United States under Franklin Roosevelt mobilized as democracies, Churchill\'s speeches and the BBC, Roosevelt\'s Fireside Chats, Lend-Lease, war bonds, rationing, and the War Production Board. Total in their demands, but persuading a free public rather than silencing it.' },
      { label: 'Totalitarian states mobilizing', detail: 'Germany under Adolf Hitler and the USSR under Joseph Stalin mobilized as totalitarian states, Goebbels\'s Ministry of Propaganda and Stalin\'s Great Patriotic War narrative, using ideology (fascism and communism) to repress basic freedoms and dominate daily life. Same methods, but pushed into total control.' },
      { label: 'Home and colonies; new casualties', detail: 'Mobilization reached both the home countries and the colonies or former colonies, drawing troops and resources from global empires. And new military technology and tactics, the atomic bomb, fire-bombing, and the waging of total war, put civilians inside the target zone and drove wartime casualties beyond even World War I.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Winston_Churchill_-_19086236948.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/JStalin_Secretary_general_CCCP_1942.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Winston_Churchill_-_19086236948.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Winston_Churchill_-_19086236948.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-war-production-board.html',
    desc: 'Join a 1942 war-production board and decide how a democracy should coordinate factories, labor, rationing, equal opportunity, and civil liberties during total war.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Army Made of Rubber and Sound',
    text: 'One of the strangest units of World War II carried almost no real weapons. The U.S. 23rd Headquarters Special Troops, nicknamed the "Ghost Army", was a secret outfit of artists, designers, sound engineers, and actors whose job was to deceive the enemy with illusion. Their arsenal included inflatable rubber tanks, trucks, jeeps, and aircraft that could be set up overnight to fake an entire armored division; giant speakers that broadcast prerecorded sound effects of marching troops and rumbling tank columns, audible for miles; and phony radio traffic impersonating real units. Many of its soldiers went on to famous careers in fashion, painting, and design. They staged more than twenty battlefield "performances," conjuring whole armies out of rubber and noise to draw German attention away from where the real forces actually were.',
    prompt: 'The Ghost Army weaponized exactly what the Key Concept names, art, media, and staged illusion, but aimed it at the enemy instead of the home front. What does this unit reveal about how thoroughly World War II turned art, media, and information into instruments of total war?'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Same Toolkit, Different Limits: Comparing Mobilization',
    intro: 'Topic 7.7 is built for the comparison skill: the Learning Objective asks for the similarities AND differences in how governments conducted total war. A weak answer describes four countries in turn; a strong one names a precise shared method, a precise difference, and explains what the difference reveals about democratic versus totalitarian power. Build the frame below.',
    steps: [
      { label: 'Name the similarity (with evidence)', text: 'All four states fit the Key Concept: they mobilized populations and resources for total war using propaganda, art, media, and intensified nationalism. Evidence: Churchill\'s speeches and the BBC; Roosevelt\'s Fireside Chats, Lend-Lease, and the War Production Board; Goebbels\'s Ministry of Propaganda; Stalin\'s Great Patriotic War narrative. Every government turned its whole society toward the front.' },
      { label: 'Name the difference (with evidence)', text: 'The difference is what mobilization was allowed to cost the population. Britain and the United States mobilized within democracy, persuading a free public, with elections, a free press, and independent unions intact. Germany and the USSR mobilized as totalitarian states, using fascism and communism to repress basic freedoms and dominate daily life, through Goebbels\'s media monopoly, forced labor, and Stalin\'s political repression.' },
      { label: 'Say what the difference reveals', text: 'Finish with the analytical payoff: same methods, different limits. The democracies show that total mobilization did not require totalitarian control, persuasion and consent could move a whole society. The dictatorships show what happens when mobilization is fused with ideology and unchecked power: the state dominates every aspect of life. That contrast is the bridge to Topic 7.8, where total power over populations reaches its atrocity-producing extreme.' }
    ],
    prompt: 'In three to four sentences, compare how a Western democracy (Britain or the United States) and a totalitarian state (Germany or the USSR) conducted total war. Name one specific shared method of mobilization, one specific difference, and explain what the difference reveals about democratic versus totalitarian power.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Mobilizing Society — Democracies and Dictatorships',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Propaganda, media, and nationalism across Britain, the U.S., Germany, and the USSR.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how governments used propaganda, media, and intensified nationalism to mobilize populations for total war, then compare a Western democracy and a totalitarian state. Use specific evidence (Churchill, Roosevelt, Goebbels/Hitler, or Stalin), name one shared method, and explain the key difference, totalitarian states repressing basic freedoms and dominating daily life.',
      responseType: 'Checkpoint 1',
      terms: ['total war', 'political propaganda', 'media', 'intensified nationalism', 'Winston Churchill', 'Franklin Roosevelt', 'Lend-Lease', 'Joseph Goebbels', 'Great Patriotic War', 'repress basic freedoms'],
      focus: ['Use specific mobilization evidence for at least one democracy and one totalitarian state.', 'Name a shared method: propaganda, media, art, intensified nationalism, full resource mobilization.', 'State the key difference: totalitarian states repressed basic freedoms and dominated daily life.']
    },
    {
      title: 'Checkpoint 2: New Technology, New Casualties',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'The atomic bomb, fire-bombing, and the waging of total war drive casualties higher.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how new military technology and tactics, including the atomic bomb, fire-bombing, and the waging of total war, led to increased levels of wartime casualties. Use specific evidence and explain how these methods put civilians inside the target zone, escalating beyond even World War I (callback to Topic 7.3).',
      responseType: 'Checkpoint 2',
      terms: ['atomic bomb', 'fire-bombing', 'total war', 'wartime casualties', 'Hiroshima', 'Nagasaki', 'Dresden', 'Tokyo', 'civilian targets', 'military technology'],
      focus: ['Name specific new technology and tactics: the atomic bomb and fire-bombing.', 'Explain how total war put civilians inside the target zone.', 'Connect to Topic 7.3: each war\'s technology made the next deadlier.']
    }
  ];

  // Capture points, static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.7+-+Conducting+World+War+II&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.7+-+Conducting+World+War+II&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
