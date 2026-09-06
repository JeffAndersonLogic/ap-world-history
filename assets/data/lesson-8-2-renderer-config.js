// lesson-8-2-renderer-config.js
// Topic 8.2, The Cold War
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Cultural Developments and Interactions (CDI)",
      "theme": "Cultural Developments and Interactions",
      "text": "The development of ideas, beliefs, and religions illustrates how groups in society view themselves, and the interactions of societies and their beliefs often have political, social, and cultural implications.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 8: Learning Objective B",
      "theme": "Learning Objective",
      "text": "Explain the causes and effects of the ideological struggle of the Cold War.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.IV.C.ii",
      "theme": "Cultural Developments and Interactions",
      "text": "The global balance of economic and political power shifted during and after World War II and rapidly evolved into the Cold War. The democracy of the United States and the authoritarian communist Soviet Union emerged as superpowers, which led to ideological conflict and a power struggle between capitalism and communism across the globe.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.V.B",
      "theme": "Cultural Developments and Interactions",
      "text": "Groups and individuals, including the Non-Aligned Movement, opposed and promoted alternatives to the existing economic, political, and social orders.",
      "illustrativeExamples": [
        "Sukarno in Indonesia",
        "Kwame Nkrumah in Ghana"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Cold War',
    embedUrl: 'first-and-10-topic-8-2-cold-war-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'NATO alliance zone', detail: 'Western Europe, North America, and Turkey, committed to collective defense under American leadership, containing Soviet expansion westward.' },
      { label: 'Warsaw Pact zone', detail: 'Eastern Europe under Soviet domination, with communist governments installed by Soviet military presence after WWII.' },
      { label: 'Unaligned regions', detail: 'Most of Asia, Africa, and Latin America, newly decolonizing or recently independent nations that refused to join either Cold War bloc.' },
      { label: 'Geographic takeaway', detail: 'The Cold War\'s formal alliance structure covered a minority of the world\'s people. The Non-Aligned Movement occupied the vast space outside both blocs.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atlantic_charter.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/bandung-table.html',
    desc: 'Bandung, April 1955. You are a senior advisor in President Sukarno\'s foreign ministry as 29 newly independent and decolonizing nations gather. Do you push for a formal non-aligned bloc, accept superpower aid with strings attached, or hold a harder line on colonialism in all its forms?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Superpower Rivalry and Its Effects',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Ideological conflict, military alliances, the arms race, and proxy wars.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the shift in the global balance of power during and after World War II produced ideological conflict between the United States and Soviet Union. In your response, explain at least two effects of this ideological struggle on international relations, including at least one specific military alliance and at least one proxy conflict.',
      responseType: 'Checkpoint 1',
      terms: ['Cold War', 'superpower', 'liberal capitalism', 'Marxism-Leninism', 'Truman Doctrine', 'Marshall Plan', 'containment', 'NATO', 'Warsaw Pact', 'Iron Curtain', 'nuclear arms race', 'Korean War', 'Vietnam War', 'proxy conflict', 'ideological conflict'],
      focus: ['Identify how WWII\'s shift in global power produced two rival superpowers with incompatible ideologies.', 'Name at least one specific military alliance (NATO or Warsaw Pact) as an effect.', 'Name at least one proxy conflict (Korea or Vietnam) as an effect, explain the connection to the ideological struggle.']
    },
    {
      title: 'Checkpoint 2: Causation and the Cold War',
      subtitle: 'Checks Learning Target 3 and all three Success Criteria.',
      cardDesc: 'AP-style causation: causes and effects of the Cold War ideological struggle, including the Non-Aligned Movement.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the causes and effects of the ideological struggle of the Cold War. In your response: (1) identify at least one cause of the Cold War rooted in the post-WWII balance of power; (2) explain at least two effects of the ideological struggle, one from the alliance or arms race dimension, one from the Non-Aligned Movement or proxy conflict dimension; and (3) use specific historical evidence throughout, including at least one reference to Sukarno or Kwame Nkrumah.',
      responseType: 'Checkpoint 2',
      terms: ['Non-Aligned Movement', 'Bandung Conference', 'Sukarno', 'Kwame Nkrumah', 'Nehru', 'anti-colonialism', 'self-determination', 'sovereignty', 'Cold War', 'causation', 'ideological struggle', 'capitalism', 'communism'],
      focus: ['Open with the cause: how did WWII produce rival superpowers with incompatible ideologies?', 'Explain one alliance or arms race effect with specific evidence (NATO, Warsaw Pact, nuclear weapons, Korean War).', 'Explain the Non-Aligned Movement as a response or effect, use Sukarno or Nkrumah as evidence with explanation.']
    }
  ];


  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.',
    prompt: 'Explain the causes and effects of the Cold War\'s ideological struggle. Build a claim with evidence from at least two different types of Cold War activity, and use one card to test or complicate a simple two-bloc interpretation.'
  };

  lesson.images = [
    {
      title: 'The Marshall Plan, 1948',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Marshall_Plan.png',
      caption: 'The Marshall Plan (1948) committed $13 billion in U.S. aid to rebuild Western Europe, and to anchor it within the American sphere of influence.',
      prompt: 'Is the Marshall Plan best understood as American generosity, American strategy, or both? What does this source reveal about how the U.S. used economic power as an instrument of Cold War competition?'
    },
    {
      title: 'The Berlin Wall, 1961',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Berlinermauer.jpg',
      caption: 'The Berlin Wall, built in 1961, became the most visible symbol of the Iron Curtain, dividing communist East Germany from capitalist West Berlin.',
      prompt: 'What does the Berlin Wall reveal about the nature of the Cold War divide? How does a physical wall embody the ideological conflict between capitalism and communism?'
    },
    {
      title: 'Kwame Nkrumah, Ghana, 1957',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah.jpg',
      caption: 'Kwame Nkrumah led Ghana to independence in 1957 and became one of the founding voices of the Non-Aligned Movement.',
      prompt: 'How does Nkrumah\'s background, colonial subject, pan-Africanist, leader of the first sub-Saharan African independent state, shape his position on Cold War superpower rivalry?'
    },
    {
      title: 'Truman Doctrine',
      label: 'Primary-source excerpt · President Harry Truman, 1947',
      sourceText: [
        'Truman asked Congress to "support free peoples who are resisting',
        'attempted subjugation by armed minorities or by outside pressures."',
        'The speech framed containment as a global commitment.'
      ],
      caption: 'The American framing of the conflict, addressed to Congress in March 1947.',
      prompt: 'What ideological assumption is visible in this policy language? What evidence would you need before treating the speech as a complete explanation of U.S. motives?'
    },
    {
      title: 'Zhdanov\'s two camps',
      label: 'Primary-source excerpt · Andrei Zhdanov, Cominform speech, 1947',
      sourceText: [
        'Zhdanov divided the postwar world into an \'imperialist\' camp and an \'anti-imperialist\' camp.',
        'The speech presented Soviet leadership as the alternative to U.S.-led capitalism.'
      ],
      caption: 'The Soviet framing of the same conflict, delivered to the founding meeting of the Cominform months later.',
      prompt: 'How does this evidence corroborate or complicate the Truman Doctrine as evidence of ideological polarization? What is still missing about state behavior?'
    },
    {
      title: 'Bandung refuses a forced choice',
      label: 'Conference record · Bandung Conference, Indonesia, 1955',
      sourceText: [
        'Delegates from 29 Asian and African states discussed sovereignty, anti-colonialism, and cooperation.',
        'The conference helped establish the political foundations of later non-alignment.'
      ],
      caption: 'A third answer, from states that declined both camps, meeting in Indonesia in 1955.',
      prompt: 'How does Bandung complicate a claim that the Cold War divided every state neatly into two camps? Which Cold War pressure would you pair with it to explain why non-alignment emerged?'
    }
  ];

})();
