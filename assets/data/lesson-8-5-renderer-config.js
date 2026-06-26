// lesson-8-5-renderer-config.js
// Topic 8.5 — Decolonization After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// Illustrative examples preserved exactly — including "British Gold Coast (Ghana)",
// "French empire" (lowercase), and the accent in "Québécois".
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
      code: 'Unit 8: Learning Objective F',
      theme: 'Learning Objective',
      text: 'Compare the processes by which various peoples pursued independence after 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.II.A',
      theme: 'Governance',
      text: 'Nationalist leaders and parties in Asia and Africa sought varying degrees of autonomy within or independence from imperial rule.',
      illustrativeExamples: [
        'Indian National Congress',
        'Ho Chi Minh in French Indochina (Vietnam)',
        'Kwame Nkrumah in British Gold Coast (Ghana)',
        'Gamal Abdel Nasser in Egypt'
      ]
    },
    {
      code: 'KC-6.2.II.B',
      theme: 'Governance',
      text: 'After the end of World War II, some colonies negotiated their independence, while others achieved independence through armed struggle.',
      illustrativeExamples: [
        'Negotiated independence: India from the British Empire',
        'Negotiated independence: The Gold Coast from the British Empire',
        'Negotiated independence: French West Africa',
        'Independence through armed struggle: Algeria from the French empire',
        'Independence through armed struggle: Angola from the Portuguese empire',
        'Independence through armed struggle: Vietnam from the French empire'
      ]
    },
    {
      code: 'KC-6.2.I.C',
      theme: 'Governance',
      text: 'Regional, religious, and ethnic movements challenged colonial rule and inherited imperial boundaries. Some of these movements advocated for autonomy.',
      illustrativeExamples: [
        'Muslim League in British India',
        'Québécois separatist movement in Canada',
        'Biafra secessionist movement in Nigeria'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Decolonization After 1900',
    embedUrl: 'first-and-10-topic-8-5-decolonization-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'India (1947)', detail: 'Independence through the Indian Independence Act 1947 — the result of INC mass nonviolent resistance, British wartime exhaustion, and Labour government willingness to negotiate. Accompanied by Partition into India and Pakistan — the violent redrawing of borders along a religious fault line drawn by colonial rule.' },
      { label: 'Gold Coast / Ghana (1957)', detail: 'First sub-Saharan African nation to independence. Nkrumah\'s CPP used Positive Action (nonviolent strikes/boycotts) and won 1951 elections while Nkrumah was in prison — demonstrating British inability to govern without CPP participation.' },
      { label: 'Algeria (1954–1962)', detail: 'Independence through armed struggle — the FLN\'s eight-year war against France, which classified Algeria as a department of France itself. Over 1 million Algerians died. France\'s defeat ended the Fourth Republic and brought de Gaulle back to power.' },
      { label: 'Nigeria / Biafra (1967–1970)', detail: 'Post-independence challenge to inherited colonial boundaries: the Biafran War (1967–1970) when the Igbo-majority southeastern region declared independence. Approximately 1–3 million deaths, many from famine. Nigeria\'s colonial-era boundaries preserved at catastrophic cost.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah_declares_independence.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gamal_Abdel_Nasser_1956.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah_declares_independence.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/positive-action.html',
    desc: 'Accra, Gold Coast, January 1950. You are a senior strategist in Kwame Nkrumah\'s Convention People\'s Party. The colonial government has offered limited constitutional reforms. The CPP demands "Self-Government Now." Nkrumah is weighing Positive Action — a campaign of nonviolent strikes and boycotts. But colonial officials are branding the CPP as communist-influenced, and the question of how the campaign reads in London and Washington matters as much as what happens in Accra. Choose your role, choose your path, and reason from January 1950 — no hindsight about Ghana 1957 allowed.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Nationalist Leaders and the Challenge of Inherited Boundaries',
      subtitle: 'Checks Learning Targets 1 and 3.',
      cardDesc: 'Nationalist strategies for pursuing independence, and how regional/ethnic movements challenged colonial-era boundaries.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how nationalist leaders and parties in Asia and Africa sought independence after 1900. In your response, use at least two of the four CED nationalist examples — the Indian National Congress, Ho Chi Minh in French Indochina, Kwame Nkrumah in British Gold Coast, or Gamal Abdel Nasser in Egypt — and explain the specific strategies each used to challenge imperial rule. Then explain how at least one regional, religious, or ethnic movement challenged inherited imperial boundaries — using the Muslim League, the Québécois separatist movement, or the Biafra secessionist movement — and explain why colonial boundary-drawing produced this challenge.',
      responseType: 'Checkpoint 1',
      terms: ['Indian National Congress', 'INC', 'Gandhi', 'Nehru', 'Salt March', 'nonviolent resistance', 'Ho Chi Minh', 'Viet Minh', 'Nkrumah', 'CPP', 'Positive Action', 'Gold Coast', 'Ghana', 'Nasser', 'Suez Canal', 'Muslim League', 'Jinnah', 'Pakistan', 'Partition', 'Québécois', 'Biafra', 'Igbo', 'decolonization', 'imperial boundaries', 'nationalism'],
      focus: ['Name at least two CED nationalist leaders/parties and explain their specific strategy — not just that they sought independence, but HOW: nonviolent resistance, mass mobilization, armed resistance, coup, canal nationalization.', 'Connect strategy to outcome: why did that strategy work (or partially work) in that specific colonial context?', 'For the boundary challenge: explain why the colonial-era border itself produced the conflict — it\'s not just ethnic tension, it\'s the mismatch between drawn borders and existing communities.']
    },
    {
      title: 'Checkpoint 2: Comparing Processes of Independence',
      subtitle: 'Checks Learning Target 2 and all three Success Criteria.',
      cardDesc: 'AP-style comparison: processes of negotiated vs. armed-struggle independence from the CED cases.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Compare the processes by which various peoples pursued independence after 1900. In your response: (1) identify at least one similarity in how peoples — regardless of path — pursued independence; (2) explain at least one key difference between colonies that negotiated independence and those that achieved independence through armed struggle; and (3) explain at least one factor that accounts for the difference, using specific evidence from at least one negotiated case (India from the British Empire, the Gold Coast from the British Empire, or French West Africa) and at least one armed-struggle case (Algeria from the French empire, Angola from the Portuguese empire, or Vietnam from the French empire).',
      responseType: 'Checkpoint 2',
      terms: ['negotiated independence', 'armed struggle', 'India', 'Gold Coast', 'French West Africa', 'Algeria', 'FLN', 'Angola', 'Vietnam', 'settler colony', 'colonial dependency', 'decolonization', 'process', 'comparison', 'similarity', 'difference', 'factor', 'pied-noir', 'Labour government', 'Cold War', 'Gandhi', 'Nkrumah', 'Ho Chi Minh'],
      focus: ['Open with a similarity: both paths required organized mass action — explain with evidence from at least one negotiated and one armed case.', 'Explain the key difference: settler presence, metropole politics, colonial classification, or Cold War stakes — pick one and explain it with specific cases.', 'Include at least one negotiated case AND one armed-struggle case from the CED examples — name them precisely.']
    }
  ];

  // Capture points — static hardcoded anchor tags only. Never JS-generated.
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.5+-+Decolonization+After+1900&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.5+-+Decolonization+After+1900&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
