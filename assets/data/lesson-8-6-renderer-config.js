// lesson-8-6-renderer-config.js
// Topic 8.6 — Newly Independent States
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Dual-LO topic: GOV/LO G (boundary redrawing → new states + conflict/displacement)
// + ECN/LO H (economic changes and continuities from decolonization).
// The renderer's normalizedKeyConcepts() iterates the full collegeBoardKeyConcepts
// array with no entry-count limit — both pairs and all illustrative examples
// are rendered via standard cb-card elements. No renderer modification required.
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
      code: 'Unit 8: Learning Objective G',
      theme: 'Learning Objective',
      text: 'Explain how political changes in the period from c. 1900 to the present led to territorial, demographic, and nationalist developments.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.III.A.i',
      theme: 'Governance',
      text: 'The redrawing of political boundaries after the withdrawal of former colonial authorities led to the creation of new states.',
      illustrativeExamples: [
        'Israel',
        'Cambodia',
        'Pakistan'
      ]
    },
    {
      code: 'KC-6.2.III.A.ii',
      theme: 'Governance',
      text: 'The redrawing of political boundaries in some cases led to conflict as well as population displacement and/or resettlements, including those related to the Partition of India and the creation of the state of Israel.',
      illustrativeExamples: []
    },
    {
      code: 'Thematic Focus — Economic Systems (ECN)',
      theme: 'Economic Systems',
      text: 'Economic Systems',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective H',
      theme: 'Learning Objective',
      text: 'Explain the economic changes and continuities resulting from the process of decolonization.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3.I.C',
      theme: 'Economic Systems',
      text: 'In newly independent states after World War II, governments often took on a strong role in guiding economic life to promote development.',
      illustrativeExamples: [
        "Gamal Abdel Nasser's promotion of economic development in Egypt",
        "Indira Gandhi's economic policies in India",
        "Julius Nyerere's modernization in Tanzania",
        "Sirimavo Bandaranaike's economic policies in Sri Lanka"
      ]
    },
    {
      code: 'KC-6.2.III.B',
      theme: 'Economic Systems',
      text: 'The migration of former colonial subjects to imperial metropoles (the former colonizing country), usually in the major cities, maintained cultural and economic ties between the colony and the metropole even after the dissolution of empires.',
      illustrativeExamples: [
        'South Asians to Britain',
        'Algerians to France',
        'Filipinos to the United States'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Newly Independent States',
    embedUrl: 'first-and-10-topic-8-6-newly-independent-states-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Pakistan (1947)', detail: 'Created through the Partition of British India — the Radcliffe Line drawn in six weeks divided Punjab and Bengal, producing one of the largest forced migrations in history. Approximately 10–20 million people displaced; an estimated 200,000–2 million killed in intercommunal violence.' },
      { label: 'Israel (1948)', detail: 'Created through the end of the British Mandate for Palestine — the UN Partition Plan (Resolution 181) proposed separate Jewish and Arab states. Israel declared independence May 14, 1948; the 1948 Arab-Israeli War immediately followed, displacing approximately 700,000 Palestinian Arabs (the Nakba).' },
      { label: 'Cambodia (1953)', detail: 'Independence from French Indochina through King Norodom Sihanouk\'s diplomacy. Boundaries inherited from French colonial administrative divisions of mainland Southeast Asia.' },
      { label: 'Egypt (economic development)', detail: 'Nasser\'s nationalization of the Suez Canal (1956) funded the Aswan High Dam (built with Soviet assistance). Arab socialism model: nationalization of banks, insurance, and major industries under state direction.' },
      { label: 'Tanzania (economic development)', detail: 'Nyerere\'s 1967 Arusha Declaration committed Tanzania to ujamaa — African socialist communal villages. Nationalization of banks and industry; non-aligned Cold War stance; rural development as economic foundation.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sirimavo_Bandaranaike.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aswan_High_Dam.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Partition_of_India_1947_mass_migration.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nehru_Mountbatten.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jawaharlal_Nehru_1947.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Partition_of_India_1947_mass_migration.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/line-through-punjab.html',
    desc: 'New Delhi, September 1947. India has been independent for weeks. The Radcliffe Line has been published; millions are moving in both directions across the new India–Pakistan border in Punjab; violence and a refugee emergency are overwhelming local administration. You are a senior civil servant in Prime Minister Nehru\'s new government, advising the Emergency Committee of the Cabinet on how to respond to the crisis that is already consuming the subcontinent.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Economic Changes and Continuities from Decolonization',
      subtitle: 'Checks Learning Target 3.',
      cardDesc: 'Economic changes (state-led development) and continuities (migration ties to metropoles) resulting from decolonization.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the economic changes and continuities resulting from the process of decolonization. In your response: (1) explain how at least two of the four CED examples — Gamal Abdel Nasser\'s promotion of economic development in Egypt, Indira Gandhi\'s economic policies in India, Julius Nyerere\'s modernization in Tanzania, or Sirimavo Bandaranaike\'s economic policies in Sri Lanka — illustrate the pattern of newly independent governments taking on a strong role in guiding economic life to promote development; and (2) explain how at least one of the three CED migration examples — South Asians to Britain, Algerians to France, or Filipinos to the United States — illustrates an economic and cultural continuity that persisted between former colony and former colonizer after independence.',
      responseType: 'Checkpoint 1',
      terms: ['Nasser', 'Egypt', 'Suez Canal', 'nationalization', 'Aswan Dam', 'Indira Gandhi', 'India', 'five-year plan', 'nationalization', 'Nyerere', 'Tanzania', 'ujamaa', 'Arusha Declaration', 'Bandaranaike', 'Sri Lanka', 'Ceylon', 'state-led development', 'economic development', 'South Asians', 'Britain', 'Algerians', 'France', 'Filipinos', 'United States', 'migration', 'remittances', 'metropole', 'continuity', 'change', 'decolonization'],
      focus: ['Name at least two CED leaders/governments and explain specifically how they guided economic life — what did they nationalize, what five-year plans did they pursue, what development model did they adopt?', 'Explain the continuity mechanism for at least one migration example: why did migration continue after independence, and what economic and cultural ties did it maintain?', 'Connect change and continuity: explain what changed economically with independence (who controls the economy) and what continued (migration and trade ties to the former colonizer).']
    },
    {
      title: 'Checkpoint 2: Political Changes → Territorial, Demographic, and Nationalist Developments',
      subtitle: 'Checks Learning Targets 1 and 2 (LO G).',
      cardDesc: 'AP-style explanation: how political changes at decolonization led to new state creation, conflict, and mass displacement.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how political changes in the period from c. 1900 to the present led to territorial, demographic, and nationalist developments. In your response: (1) explain how the redrawing of political boundaries after colonial withdrawal led to the creation of at least one new state — using Israel, Cambodia, or Pakistan as your example — and explain what specific political decisions or colonial withdrawals produced that state; (2) explain how boundary redrawing led to conflict and population displacement in either the Partition of India or the creation of the state of Israel — naming the specific populations displaced, the approximate scale of displacement, and the connection between the boundary decision and the human consequences; and (3) connect both parts to the Learning Objective: how did this political change (colonial withdrawal and boundary redrawing) produce a territorial change (new state), a demographic change (population displacement), and a nationalist development (new political identity)?',
      responseType: 'Checkpoint 2',
      terms: ['Partition', 'India', 'Pakistan', 'Radcliffe Line', 'Israel', 'Palestine', 'UN Partition Plan', 'Nakba', 'Cambodia', 'Norodom Sihanouk', 'British Mandate', 'boundary redrawing', 'population displacement', 'colonial withdrawal', 'new state', 'refugee', 'Arab-Israeli War', 'intercommunal violence', 'demographic', 'territorial', 'nationalist', 'decolonization'],
      focus: ['Explain the specific mechanism: not just that a new state was created, but HOW the boundary decision produced it — who drew the line, what colonial withdrawal produced the vacuum, what political decisions were made.', 'For displacement: name both populations affected and the approximate scale. For Partition: 10–20 million displaced, up to 2 million killed. For Israel 1948: approximately 700,000 Palestinian Arabs displaced (Nakba); approximately 850,000 Jews from Arab countries emigrated to Israel.', 'Connect to the LO: territorial development (new map), demographic development (population movement), nationalist development (new political identity formed around new state or secessionist claim).']
    }
  ];

  // Capture points — static hardcoded anchor tags only. Never JS-generated.
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.6+-+Newly+Independent+States&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.6+-+Newly+Independent+States&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
