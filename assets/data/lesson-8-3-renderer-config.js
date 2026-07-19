// lesson-8-3-renderer-config.js
// Topic 8.3, Effects of the Cold War
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Governance (GOV)',
      theme: 'Governance',
      text: 'Governance',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Compare the ways in which the United States and the Soviet Union sought to maintain influence over the course of the Cold War.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.D',
      theme: 'Governance',
      text: 'The Cold War produced new military alliances, including NATO and the Warsaw Pact, and led to nuclear proliferation and proxy wars between and within postcolonial states in Latin America, Africa, and Asia.',
      illustrativeExamples: [
        'Proxy wars: Korean War',
        'Proxy wars: Angolan Civil War',
        'Proxy wars: Sandinista–Contras conflict in Nicaragua'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Effects of the Cold War',
    embedUrl: 'first-and-10-topic-8-3-effects-cold-war-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'U.S.-aligned / NATO zone', detail: 'Western Europe and North America committed to collective defense under American leadership; U.S. nuclear weapons and bases extended deterrence across the alliance.' },
      { label: 'Soviet-aligned / Warsaw Pact zone', detail: 'Eastern Europe under Soviet domination, with communist governments enforced by Soviet military presence and the Brezhnev Doctrine.' },
      { label: 'Korean Peninsula', detail: 'Divided at the 38th parallel after the 1950–1953 war, the first major Cold War proxy conflict, fought between Soviet/Chinese-backed North Korea and U.S.-led coalition supporting South Korea.' },
      { label: 'Angola / Sub-Saharan Africa', detail: 'Site of the Angolan Civil War (1975–2002): Soviet/Cuban support for the MPLA vs. U.S./South African support for UNITA, Cold War competition in postcolonial Africa.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_1945_CC.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_1945_CC.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/NATO_signing.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Truman_signing_bills.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Agostinho_Neto.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/luanda-decision.html',
    desc: 'Luanda, Angola, November 1975. Portugal is withdrawing; independence day approaches; three armed movements claim the country. South African forces advance from the south, FNLA forces press from the north, and both superpowers extend offers. You are a senior advisor within the MPLA leadership circle. Do you accept Cuban troops and Soviet arms, pursue quiet talks with U.S. intermediaries, or appeal to the Organisation of African Unity for an African solution?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Alliances, Arms, and Deterrence',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Military alliances as instruments of influence, nuclear proliferation, and Mutually Assured Destruction.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the United States and the Soviet Union used new military alliances to maintain influence during the Cold War. In your response, explain the function of NATO and the Warsaw Pact as instruments of influence, not just defense, and explain how nuclear proliferation and the doctrine of Mutually Assured Destruction shaped superpower behavior.',
      responseType: 'Checkpoint 1',
      terms: ['NATO', 'Warsaw Pact', 'collective defense', 'Brezhnev Doctrine', 'nuclear proliferation', 'Mutually Assured Destruction', 'MAD', 'deterrence', 'nuclear umbrella', 'military-industrial complex', 'arms race', 'thermonuclear', 'Cold War', 'superpower', 'influence'],
      focus: ['Explain NATO as a U.S. instrument of influence, not just a defensive alliance.', 'Explain the Warsaw Pact as a Soviet instrument of control over Eastern Europe.', 'Explain how MAD shaped superpower behavior: deterring direct conflict while redirecting competition into proxy wars.']
    },
    {
      title: 'Checkpoint 2: Comparing Superpower Methods',
      subtitle: 'Checks Learning Target 3 and all three Success Criteria.',
      cardDesc: 'AP-style comparison: similarities and differences in how the U.S. and Soviet Union used proxy wars to maintain influence.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Compare the ways in which the United States and the Soviet Union sought to maintain influence over the course of the Cold War. In your response: (1) identify at least one similarity in their methods; (2) explain at least one difference in their methods; and (3) use specific historical evidence from at least two of the three CED proxy-war examples, the Korean War, the Angolan Civil War, and the Sandinista–Contras conflict in Nicaragua.',
      responseType: 'Checkpoint 2',
      terms: ['proxy war', 'Korean War', 'Angolan Civil War', 'Sandinista', 'Contras', 'Nicaragua', 'MPLA', 'UNITA', 'Cuba', 'arms transfer', 'military advisor', 'client state', 'comparison', 'similarity', 'difference', 'influence', 'postcolonial'],
      focus: ['Open with a similarity: both superpowers used arms, advisors, and local clients, explain this with evidence from at least two proxy wars.', 'Explain at least one difference: framing (anti-communist vs. anti-imperialist) or structural method (multilateral alliance vs. direct coercion).', 'Use the names of specific proxy conflicts from the CED, including the en dash in Sandinista–Contras, as evidence.']
    }
  ];

  // Capture points, static hardcoded anchor tags only. Never JS-generated.
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.3+-+Effects+of+the+Cold+War&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.3+-+Effects+of+the+Cold+War&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
