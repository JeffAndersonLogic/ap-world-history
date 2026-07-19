// lesson-8-7-renderer-config.js
// Topic 8.7, Global Resistance to Established Power Structures After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Single-LO topic: CDI/LO I (various reactions to existing power structures after 1900).
// Four KCs: KC-6.2.V (umbrella framing) + KC-6.2.V.A + KC-6.2.V.C + KC-6.2.V.D.
// Note: the en dash in "military–industrial complex" is verbatim CED, do not replace with hyphen.
// The renderer's normalizedKeyConcepts() iterates the full collegeBoardKeyConcepts
// array with no entry-count limit, all six entries render via standard cb-card elements.
// No renderer modification required.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Cultural Developments and Interactions (CDI)',
      theme: 'Cultural Developments and Interactions',
      text: 'Cultural Developments and Interactions',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective I',
      theme: 'Learning Objective',
      text: 'Explain various reactions to existing power structures in the period after 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.V',
      theme: 'Cultural Developments and Interactions',
      text: 'Although conflict dominated much of the 20th century, many individuals and groups, including states, opposed this trend. Some individuals and groups, however, intensified the conflicts.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.V.A',
      theme: 'Cultural Developments and Interactions',
      text: 'Groups and individuals challenged the many wars of the century, and some, such as Mohandas Gandhi, Martin Luther King Jr., and Nelson Mandela, promoted the practice of nonviolence as a way to bring about political change.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.V.C',
      theme: 'Cultural Developments and Interactions',
      text: 'Militaries and militarized states often responded to the proliferation of conflicts in ways that further intensified conflict.',
      illustrativeExamples: [
        'Chile under Augusto Pinochet',
        'Spain under Francisco Franco',
        'Uganda under Idi Amin',
        'The buildup of the military–industrial complex and weapons trading'
      ]
    },
    {
      code: 'KC-6.2.V.D',
      theme: 'Cultural Developments and Interactions',
      text: 'Some movements used violence against civilians in an effort to achieve political aims.',
      illustrativeExamples: [
        'Shining Path',
        'Al-Qaeda'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Global Resistance to Established Power Structures After 1900',
    embedUrl: 'first-and-10-topic-8-7-global-resistance-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'India, Gandhi and the Salt March (1930)', detail: 'Gandhi\'s satyagraha developed in South Africa (1906–1915) and brought to India, the Salt March (1930) demonstrated disciplined noncooperation designed to make colonial authority ungovernable. Gandhi\'s method required the colonial power to have some sensitivity to international and domestic opinion.' },
      { label: 'United States, Martin Luther King Jr. and the Civil Rights Movement', detail: 'King explicitly built on Gandhi\'s method, visiting India in 1959 to study satyagraha. The Birmingham Campaign (1963) produced images of fire hoses and police dogs against peaceful protesters that accelerated passage of the Civil Rights Act of 1964.' },
      { label: 'South Africa, Nelson Mandela and the ANC', detail: 'The ANC\'s Defiance Campaign (1952) was explicitly Gandhian. After the Sharpeville Massacre (1960) and the banning of the ANC, Mandela and others formed Umkhonto we Sizwe (MK), committing to infrastructure sabotage rather than civilian targets. Mandela served 27 years before the 1994 transition.' },
      { label: 'Chile, Pinochet\'s Military Regime (1973–1990)', detail: 'September 11, 1973 coup overthrew elected socialist President Allende. Pinochet\'s junta detained, tortured, and executed thousands of political opponents, making Chile a case of militarized-state response that intensified political conflict into state terror.' },
      { label: 'Peru, Shining Path (1980s–1990s)', detail: 'Maoist insurgency launched its armed campaign on the day Peru returned to democratic elections (1980). Both Shining Path and Peruvian security forces committed atrocities against civilian populations. Estimated 70,000 deaths. Guzmán captured 1992.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nelson_Mandela_1990.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Birmingham_campaign.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Luther_King_Jr_NYWTS.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sharpeville_massacre.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Moneda_1973.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/after-sharpeville.html',
    desc: 'Johannesburg, South Africa, June 1961. Fifteen months after the Sharpeville Massacre, the apartheid state has banned the ANC and imprisoned its leadership. You are a strategist in the banned ANC\'s underground leadership circle as the movement debates its path, the real historical debate from which Umkhonto we Sizwe emerged.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Nonviolent Challenge to Power Structures',
      subtitle: 'Checks Learning Target 1 (LO I / KC-6.2.V.A).',
      cardDesc: 'Explain how at least two of the three named individuals promoted nonviolence as a way to bring about political change, and why nonviolence was a deliberate strategic choice.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how groups and individuals promoted the practice of nonviolence as a way to bring about political change after 1900. In your response: (1) explain how at least two of the three CED individuals, Mohandas Gandhi, Martin Luther King Jr., or Nelson Mandela, specifically promoted nonviolence, naming the campaigns, methods, or contexts involved; (2) explain nonviolence as a deliberate strategic choice, what was the theory of political change behind it, and why did it work in the contexts where it was applied; and (3) explain at least one way in which the nonviolent method was challenged or complicated, either by the state\'s response, by internal debates, or by the limits of the method itself.',
      responseType: 'Checkpoint 1',
      terms: ['gandhi', 'satyagraha', 'salt march', 'nonviolence', 'martin luther king', 'mlk', 'birmingham', 'montgomery', 'boycott', 'civil rights', 'mandela', 'anc', 'defiance campaign', 'sharpeville', 'political change', 'noncooperation', 'protest', 'moral witness', 'tension', 'direct action', 'strategy', 'method', 'colonial', 'segregation', 'apartheid', 'challenge', 'power structure'],
      focus: ['Name at least two individuals specifically and explain what they DID, not just that they were nonviolent, but what specific campaigns, marches, boycotts, or strategies they used and why those methods created political pressure.', 'Explain the theory: nonviolence works by making the cost of repression visible and unsustainable. What conditions were necessary for the method to produce political change? Why did it work in India and the American South?', 'Acknowledge complexity: Mandela\'s ANC eventually formed an armed wing; King faced criticism from those who thought nonviolence was too slow. How does acknowledging the limits of nonviolent strategy strengthen rather than undermine your explanation of KC-6.2.V.A?']
    },
    {
      title: 'Checkpoint 2: Various Reactions to Existing Power Structures After 1900',
      subtitle: 'Checks all three Learning Targets (LO I — full synthesis).',
      cardDesc: 'AP-style synthesis: explain the range of reactions to existing power structures after 1900, using evidence from at least two of the three CED categories.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain various reactions to existing power structures in the period after 1900. In your response: (1) explain at least two distinct types of reactions from the three CED categories, nonviolent challenge (KC-6.2.V.A), militarized-state response that intensified conflict (KC-6.2.V.C), or movements using violence against civilians (KC-6.2.V.D), using specific CED examples to illustrate each type; (2) for each type, explain the method used, what the actors were trying to achieve, and why that method constituted a reaction to existing power structures; and (3) explain one way in which your two examples differ, in method, in target, in context, or in outcome, and what that difference reveals about the range of reactions the CED identifies.',
      responseType: 'Checkpoint 2',
      terms: ['gandhi', 'mlk', 'mandela', 'nonviolence', 'pinochet', 'chile', 'coup', 'franco', 'spain', 'amin', 'uganda', 'military-industrial', 'weapons', 'shining path', 'peru', 'al-qaeda', 'terrorism', 'civilians', 'intensify', 'conflict', 'state', 'repression', 'reaction', 'power structure', 'various', 'compare', 'contrast', 'method', 'target', 'political aim', 'distinguish', 'category'],
      focus: ['Use at least two categories (not two examples from the same category). LO I asks for \'various\' reactions, the skill is showing the range.', 'For each example, explain the mechanism: not just "Gandhi was nonviolent" but HOW nonviolent resistance created political pressure and what conditions made it effective in that context.', 'The comparison at the end is the analytical payoff: how do the two reactions you chose differ, and what does the difference reveal about how power structures can be challenged (or reinforced)?']
    }
  ];

  // Capture points, static hardcoded anchor tags only. Never JS-generated.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.7+-+Global+Resistance+to+Established+Power&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.7+-+Global+Resistance+to+Established+Power&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
