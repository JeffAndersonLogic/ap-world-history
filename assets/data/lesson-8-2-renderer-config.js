// lesson-8-2-renderer-config.js
// Topic 8.2 — The Cold War
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Cultural Developments and Interactions (CDI)',
      theme: 'Cultural Developments and Interactions',
      text: 'The development of ideas, beliefs, and religions illustrates how groups in society view themselves, and the interactions of societies and their beliefs often have political, social, and cultural implications.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain the causes and effects of the ideological struggle of the Cold War.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.C.ii',
      theme: 'Cultural Developments and Interactions',
      text: 'The global balance of economic and political power shifted during and after World War II and rapidly evolved into the Cold War. The democracy of the United States and the authoritarian communist Soviet Union emerged as superpowers, which led to ideological conflict and a power struggle between capitalism and communism across the globe.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.V.B',
      theme: 'Cultural Developments and Interactions',
      text: 'Groups and individuals, including the Non-Aligned Movement, opposed and promoted alternatives to the existing economic, political, and social orders.',
      illustrativeExamples: [
        'Non-Aligned Movement: Sukarno in Indonesia',
        'Non-Aligned Movement: Kwame Nkrumah in Ghana'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Cold War',
    embedUrl: 'first-and-10-topic-8-2-cold-war-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'NATO alliance zone', detail: 'Western Europe, North America, and Turkey — committed to collective defense under American leadership, containing Soviet expansion westward.' },
      { label: 'Warsaw Pact zone', detail: 'Eastern Europe under Soviet domination, with communist governments installed by Soviet military presence after WWII.' },
      { label: 'Unaligned regions', detail: 'Most of Asia, Africa, and Latin America — newly decolonizing or recently independent nations that refused to join either Cold War bloc.' },
      { label: 'Geographic takeaway', detail: 'The Cold War\'s formal alliance structure covered a minority of the world\'s people. The Non-Aligned Movement occupied the vast space outside both blocs.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_1945_CC.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_1945_CC.jpg',
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
      prompt: 'Explain how the shift in the global balance of power during and after World War II produced ideological conflict between the United States and Soviet Union. In your response, explain at least two effects of this ideological struggle on international relations — including at least one specific military alliance and at least one proxy conflict.',
      responseType: 'Checkpoint 1',
      terms: ['Cold War', 'superpower', 'liberal capitalism', 'Marxism-Leninism', 'Truman Doctrine', 'Marshall Plan', 'containment', 'NATO', 'Warsaw Pact', 'Iron Curtain', 'nuclear arms race', 'Korean War', 'Vietnam War', 'proxy conflict', 'ideological conflict'],
      focus: ['Identify how WWII\'s shift in global power produced two rival superpowers with incompatible ideologies.', 'Name at least one specific military alliance (NATO or Warsaw Pact) as an effect.', 'Name at least one proxy conflict (Korea or Vietnam) as an effect — explain the connection to the ideological struggle.']
    },
    {
      title: 'Checkpoint 2: Causation and the Cold War',
      subtitle: 'Checks Learning Target 3 and all three Success Criteria.',
      cardDesc: 'AP-style causation: causes and effects of the Cold War ideological struggle, including the Non-Aligned Movement.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the causes and effects of the ideological struggle of the Cold War. In your response: (1) identify at least one cause of the Cold War rooted in the post-WWII balance of power; (2) explain at least two effects of the ideological struggle — one from the alliance or arms race dimension, one from the Non-Aligned Movement or proxy conflict dimension; and (3) use specific historical evidence throughout, including at least one reference to Sukarno or Kwame Nkrumah.',
      responseType: 'Checkpoint 2',
      terms: ['Non-Aligned Movement', 'Bandung Conference', 'Sukarno', 'Kwame Nkrumah', 'Nehru', 'anti-colonialism', 'self-determination', 'sovereignty', 'Cold War', 'causation', 'ideological struggle', 'capitalism', 'communism'],
      focus: ['Open with the cause: how did WWII produce rival superpowers with incompatible ideologies?', 'Explain one alliance or arms race effect with specific evidence (NATO, Warsaw Pact, nuclear weapons, Korean War).', 'Explain the Non-Aligned Movement as a response or effect — use Sukarno or Nkrumah as evidence with explanation.']
    }
  ];

  // Capture points — static hardcoded anchor tags only. Never JS-generated.
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.2+-+The+Cold+War&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.2+-+The+Cold+War&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
