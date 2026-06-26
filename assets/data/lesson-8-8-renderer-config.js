// lesson-8-8-renderer-config.js
// Topic 8.8 — End of the Cold War
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Single-LO topic: GOV/LO J (explain the causes of the end of the Cold War).
// One KC: KC-6.2.IV.E — three causal strands, NO illustrative examples.
// The CED lists NO illustrative examples for Topic 8.8. Content figures
// (Gorbachev, Reagan, SDI, the Berlin Wall, etc.) are lecture content only —
// they must never be labeled as CED illustrative examples.
// The renderer's normalizedKeyConcepts() iterates the full collegeBoardKeyConcepts
// array with no entry-count limit — all three entries render via standard cb-card elements.
// No renderer modification required.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Governance (GOV)',
      theme: 'Governance',
      text: 'Governance',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective J',
      theme: 'Learning Objective',
      text: 'Explain the causes of the end of the Cold War.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.E',
      theme: 'Governance',
      text: 'Advances in U.S. military and technological development, the Soviet Union\'s costly and ultimately failed invasion of Afghanistan, and public discontent and economic weakness in communist countries led to the end of the Cold War and the collapse of the Soviet Union.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: End of the Cold War',
    embedUrl: 'first-and-10-topic-8-8-end-of-cold-war-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'United States — Reagan\'s defense buildup and SDI (1983)', detail: 'Reagan\'s defense spending rose sharply in the 1980s. The Strategic Defense Initiative (March 1983) proposed space-based missile defense that would render Soviet nuclear deterrence obsolete — creating technological and budgetary pressure the Soviet economy could not match.' },
      { label: 'Afghanistan — Soviet invasion and withdrawal (1979–1989)', detail: 'The Soviet invasion, intended as a quick stabilizing operation, became a nine-year war against Mujahideen resistance supplied by CIA Operation Cyclone. Approximately 15,000 Soviet troops were killed. The withdrawal (February 1989) signaled Soviet limits to Eastern European satellites.' },
      { label: 'Poland — Solidarity and the first crack (1980–1989)', detail: 'The Solidarity trade union under Lech Wałęsa was the first significant popular challenge to Eastern European communist rule. Partially free elections in June 1989 produced the first non-communist government in the Soviet bloc.' },
      { label: 'Berlin — The Wall falls (November 9, 1989)', detail: 'The Berlin Wall fell on November 9, 1989 — triggered by a miscommunicated press conference announcement. The defining image of the Cold War\'s end; within weeks, communist governments across Eastern Europe collapsed.' },
      { label: 'Moscow — Gorbachev\'s reforms and the Soviet dissolution (1985–1991)', detail: 'Gorbachev\'s glasnost and perestroika released forces of criticism and nationalism the party could not control. The failed August 1991 coup attempt fatally weakened central authority. Gorbachev resigned December 25, 1991; the Soviet Union dissolved into fifteen states.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_withdrawal_Afghanistan_1989.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_sdi_speech_1983.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gorbachev_speech_1988.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/kremlin-ledger.html',
    desc: 'Moscow, March 1985. Mikhail Gorbachev has just become General Secretary. You are a senior advisor preparing his first strategic review. The ledger before you: a stagnating economy with chronic shortages, a sixth year of war in Afghanistan with no victory in sight, and an American Strategic Defense Initiative that threatens a new round of arms spending the budget cannot bear.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Two External Pressures',
      subtitle: 'Checks Learning Targets 1 and 2 (LO J / KC-6.2.IV.E).',
      cardDesc: 'Explain how U.S. military and technological development AND the Soviet invasion of Afghanistan each contributed to the end of the Cold War — treating them as two distinct causal mechanisms.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how advances in U.S. military and technological development AND the Soviet Union\'s invasion of Afghanistan contributed to the end of the Cold War. In your response: (1) for the U.S. military/technological strand — explain the specific mechanism: not just that the U.S. spent more, but WHY the technological competition (including SDI) created pressure the Soviet economy could not sustain; (2) for the Afghanistan strand — explain the specific costs and why the failed invasion mattered beyond the military: what did it signal about Soviet power to Eastern European satellites? (3) explain one way in which these two causal strands interacted or compounded each other — did one cause create pressure that the other worsened?',
      responseType: 'Checkpoint 1',
      terms: ['military', 'technological', 'sdi', 'strategic defense initiative', 'star wars', 'reagan', 'defense spending', 'arms race', 'afghanistan', 'mujahideen', 'invasion', 'withdrawal', 'stinger', 'cia', 'operation cyclone', 'casualties', 'drain', 'prestige', 'signal', 'eastern europe', 'satellite', 'mechanism', 'pressure', 'compound', 'interact', 'cold war', 'end'],
      focus: ['For the U.S. military strand: explain the mechanism — why did SDI create pressure the Soviets could not simply absorb? What was the technological gap, and why did it matter that the arms race was moving into domains (microelectronics, precision systems) where the Soviet economy was structurally weakest?', 'For the Afghanistan strand: explain the signal, not just the cost — why did the withdrawal in February 1989 matter to Eastern European populations and communist governments? What did it reveal about Soviet willingness to pay any price to maintain its positions?', 'The interaction is the analytical payoff: did the military-technology pressure make it harder to sustain Afghanistan? Did Afghanistan drain resources needed to close the technology gap? Explain the compounding — this is what LO J\'s "explain the causes" requires, not just naming them.']
    },
    {
      title: 'Checkpoint 2: Explaining the Causes of the End of the Cold War',
      subtitle: 'Checks all three Learning Targets (LO J — full causation).',
      cardDesc: 'AP-style causation: explain the causes of the end of the Cold War, using evidence from at least two of the three causal strands of KC-6.2.IV.E, and include an explicit claim about which cause was most significant.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain the causes of the end of the Cold War. In your response: (1) explain at least two of the three causal strands identified in KC-6.2.IV.E — U.S. military and technological development, the Soviet invasion of Afghanistan, or public discontent and economic weakness in communist countries — using specific historical evidence to illustrate each cause; (2) for each cause, explain the mechanism: not just what happened but HOW it contributed to the Cold War\'s end; (3) make an explicit claim about which of the three causal strands was most significant in causing the end of the Cold War, and defend that claim with at least one piece of specific historical evidence; and (4) acknowledge the strongest counterargument to your significance claim — what evidence would a historian who ranked a different strand first point to?',
      responseType: 'Checkpoint 2',
      terms: ['military', 'technological', 'sdi', 'reagan', 'defense', 'arms race', 'afghanistan', 'mujahideen', 'invasion', 'withdrawal', 'casualt', 'discontent', 'economic', 'weakness', 'stagnation', 'shortages', 'gorbachev', 'glasnost', 'perestroika', 'reform', 'unintended', 'nationalism', 'soviet republic', 'eastern europe', 'berlin wall', 'solidarity', '1989', 'dissolution', 'collapse', 'soviet union', 'causes', 'most significant', 'mechanism', 'compound', 'interact'],
      focus: ['Use at least two strands — but explain each as a mechanism, not a list. "The Soviet economy was weak" is a fact; "economic weakness meant the USSR could not simultaneously fund the arms race, the Afghan war, and the consumer goods demanded by a restless population, creating a dilemma Gorbachev\'s reforms tried and failed to resolve" is a causal explanation.', 'The significance claim is what distinguishes an AP response. Making the claim is not enough — you need to defend it. What is the specific historical evidence that your top-ranked strand was decisive? Why would the Cold War have ended differently if that strand had been absent?', 'Acknowledging the counterargument is a sign of historical sophistication, not weakness. What is the strongest argument for a different ranking? What evidence supports it? Why is your original claim still more persuasive despite that evidence?']
    }
  ];

  // Capture points — static hardcoded anchor tags only. Never JS-generated.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.8+-+End+of+the+Cold+War&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.8+-+End+of+the+Cold+War&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
