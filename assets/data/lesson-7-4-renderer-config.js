// lesson-7-4-renderer-config.js
// Topic 7.4 — Economy in the Interwar Period
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus for this topic is ECN (Economic Systems), not TEC
// as in Topic 7.3. The illustrative-examples block (heading + three bullets)
// is verbatim CED text, attached to KC-6.3.I.B with the heading as the lead
// entry, matching the flat-array structure used across Unit 4–6 configs.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Economic Systems (ECN)',
      theme: 'Economic Systems',
      text: 'As societies develop, they affect and are affected by the ways that they produce, exchange, and consume goods and services.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective D',
      theme: 'Learning Objective',
      text: 'Explain how different governments responded to economic crisis after 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3.I.B',
      theme: 'Economic Systems',
      text: 'Following World War I and the onset of the Great Depression, governments began to take a more active role in economic life.',
      illustrativeExamples: [
        'Government intervention in the economy:',
        'The New Deal',
        'The fascist corporatist economy',
        'Governments with strong popular support in Brazil and Mexico'
      ]
    },
    {
      code: 'KC-6.3.I.A.i',
      theme: 'Economic Systems',
      text: 'In the Soviet Union, the government controlled the national economy through the Five-Year Plans, often implementing repressive policies, with negative repercussions for the population.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: When the Money Stopped',
    embedUrl: 'first-and-10-topic-7-4-interwar-economy-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'A global crisis', detail: 'The 1929 crash spread along the arteries of a connected world economy — trade, loans, and empires transmitted the collapse from Wall Street to every continent. Unemployment, business failures, and collapsing global trade were worldwide facts by 1932.' },
      { label: 'National answers, rival ideologies', detail: 'The United States answered within democracy (the New Deal); Italy within fascism (the corporatist economy); the Soviet Union within communism (the Five-Year Plans — launched even before the crash). Same crisis, ideologically opposite machinery.' },
      { label: 'The Latin American path', detail: 'Brazil under Vargas and Mexico under Cárdenas built state-led national economies with strong popular support: state-owned enterprises, import substitution industrialization, land reform, and the 1938 oil nationalization that created Pemex.' },
      { label: 'Geographic takeaway', detail: 'One depression, four answers. Everywhere on the map, KC-6.3.I.B holds: after World War I and the onset of the Great Depression, governments took a more active role in economic life — the disagreement was about who controls, who benefits, and at what cost to rights.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Zapata,_1914.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/JStalin_Secretary_general_CCCP_1942.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/mexico-city-1938.html',
    desc: 'Mexico City, March 1938. President Cárdenas is hours from announcing the expropriation of foreign oil companies. Take a seat in the room — as an adviser, a union leader, an American oilman, or a British diplomat — and argue what nationalization will cost, and what it will buy.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Trains That Ran on Coffee',
    text: 'When world coffee prices collapsed after 1929, Brazil — supplier of most of the world\'s coffee — found itself drowning in beans nobody could afford. The Vargas government bought the surplus and destroyed it to prop up prices: tens of millions of bags were burned, dumped at sea, even mixed into road surfacing. And because coffee burns, some Brazilian locomotives were actually fired with coffee beans instead of coal — trains literally running on the crop that had crashed. The destruction of mountains of perfectly good coffee, while people elsewhere stood in bread lines, became one of the Depression\'s strangest images of a broken global market.',
    prompt: 'Brazil burned food to save its economy while other countries could not feed their unemployed. What does this paradox reveal about how the global market had failed — and why governments everywhere concluded they had to intervene?'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Four Answers to One Crisis: Building a Comparison Argument',
    intro: 'Topic 7.4 is the AP\'s favorite kind of comparison: one common cause (the Depression), multiple responses (New Deal, fascist corporatist economy, Five-Year Plans, Brazil and Mexico). A weak answer describes each response separately; a strong one names a precise similarity, a precise difference, and what the difference reveals about ideology. Build the frame below.',
    steps: [
      { label: 'Name the similarity (with evidence)', text: 'All four responses fit KC-6.3.I.B: government took a more active role in economic life. Evidence: the WPA put millions on the federal payroll; Mussolini\'s corporations fused state and industry; the Five-Year Plans put the whole economy under state command; Vargas built state-owned enterprises and Cárdenas nationalized oil. The similarity is real and specific — not just "governments did stuff."' },
      { label: 'Name the difference (with evidence)', text: 'The responses differed in who controlled the economy and what happened to rights. The New Deal expanded intervention inside democracy — courts, elections, and unions survived. The fascist corporatist economy curtailed unions and individual rights in service of nationalist goals. The Soviet plans abolished private control entirely and enforced the system with repression — collectivization, forced labor, and famine. Brazil and Mexico tied state ownership to popular nationalism.' },
      { label: 'Say what the difference reveals', text: 'Finish with the analytical payoff: the same economic crisis was refracted through ideology. Where power was accountable, intervention came with rights attached; where it was not, intervention became an instrument of state power over the population — most catastrophically in the Soviet case, where the Key Concept itself notes "repressive policies, with negative repercussions for the population."' }
    ],
    prompt: 'In three to four sentences, compare TWO government responses to the interwar economic crisis (choose from: the New Deal, the fascist corporatist economy, the Soviet Five-Year Plans, Brazil/Mexico). Name one specific similarity, one specific difference, and explain what the difference reveals about the ideology behind each response.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Crisis and Command — Why Governments Stepped In',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'The Depression ends laissez-faire; the Soviet Five-Year Plans and their human cost.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain why governments took a more active role in economic life after World War I and the onset of the Great Depression — then use the Soviet Union as your case study: how did the Five-Year Plans control the national economy, and what were the repercussions for the population?',
      responseType: 'Checkpoint 1',
      terms: ['Great Depression', 'stock market crash', 'unemployment', 'global trade', 'Five-Year Plans', 'rapid industrialization', 'collectivization', 'forced labor', 'Holodomor', 'repressive policies'],
      focus: ['Connect WWI exhaustion and the 1929 crash to the end of hands-off government.', 'Explain the mechanism of the Five-Year Plans: state control, industrialization targets, collectivization.', 'Name the repercussions for the population explicitly — repression, forced labor, and the famine in Ukraine.']
    },
    {
      title: 'Checkpoint 2: Comparing the Answers',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'New Deal vs. fascist corporatism vs. Brazil and Mexico — intervention across ideologies.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Compare government intervention in the economy across at least two of the CED\'s illustrative examples — the New Deal, the fascist corporatist economy, and governments with strong popular support in Brazil and Mexico. Identify one similarity and one difference, and explain what the difference reveals about each government\'s ideology.',
      responseType: 'Checkpoint 2',
      terms: ['New Deal', 'Social Security Act', 'WPA', 'corporatist economy', 'Mussolini', 'autarky', 'Vargas', 'import substitution industrialization', 'Cárdenas', 'Pemex', 'oil nationalization', 'land reform'],
      focus: ['Use at least two illustrative examples with specific evidence for each.', 'Name one precise similarity (all expanded the state\'s economic role) and one precise difference (rights, control, beneficiaries).', 'Close with what the difference reveals: ideology shaped how each state intervened.']
    }
  ];

  // Capture points — static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    skillBuilder: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.4+-+Economy+in+the+Interwar+Period&entry.2107637366=AP+Skill+Builder" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.4+-+Economy+in+the+Interwar+Period&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    evidenceLab: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.4+-+Economy+in+the+Interwar+Period&entry.2107637366=Evidence+Lab" target="_blank" rel="noopener">Submit to Form</a>',
    primarySource: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.4+-+Economy+in+the+Interwar+Period&entry.2107637366=Primary+Source" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.4+-+Economy+in+the+Interwar+Period&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
