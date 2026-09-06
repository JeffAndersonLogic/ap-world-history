// lesson-8-3-renderer-config.js
// Topic 8.3, Effects of the Cold War
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Governance (GOV)",
      "theme": "Governance",
      "text": "Governance",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 8: Learning Objective C",
      "theme": "Learning Objective",
      "text": "Compare the ways in which the United States and the Soviet Union sought to maintain influence over the course of the Cold War.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.IV.D",
      "theme": "Governance",
      "text": "The Cold War produced new military alliances, including NATO and the Warsaw Pact, and led to nuclear proliferation and proxy wars between and within postcolonial states in Latin America, Africa, and Asia.",
      "illustrativeExamples": [
        "Korean War",
        "Angolan Civil War",
        "Sandinista-Contras conflict in Nicaragua"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Effects of the Cold War',
    embedUrl: 'first-and-10-topic-8-3-effects-cold-war-capture.html?v=response-id-fix-v1',
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
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Truman_signing_North_Atlantic_Treaty.jpg',
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


  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.',
    prompt: 'Compare how the United States and Soviet Union maintained influence during the Cold War. Use evidence from at least two settings and make one explicit similarity or difference in method, then identify a limit to your comparison.'
  };

  lesson.images = [
    {
      title: 'NATO founding ceremony, 1949',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Truman_signing_North_Atlantic_Treaty.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Truman_signing_North_Atlantic_Treaty.jpg',
      caption: 'The signing of the North Atlantic Treaty, April 4, 1949, formalizing the Western military alliance under American leadership as the primary U.S. instrument for maintaining influence in Europe.',
      prompt: 'Who signed NATO, and who did not? What does the treaty\'s membership reveal about how the United States used the alliance system to extend its influence beyond its own borders?'
    },
    {
      title: 'Cuban troops in Angola, 1975',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cuito_Cuanavale_Montage.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuito_Cuanavale_Montage.jpg',
      caption: 'Cuban combat troops deployed to Angola in 1975 at the request of the Soviet-backed MPLA, one of the most direct forms of proxy war intervention in Cold War Africa.',
      prompt: 'What does Cuba\'s military deployment to Angola reveal about how the Soviet bloc used local clients and third-party forces to pursue Cold War objectives? How is this similar to or different from U.S. methods in Nicaragua?'
    },
    {
      title: 'Sandinista soldiers, Nicaragua, 1980s',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Revoluci%C3%B3n_sandinista.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Revoluci%C3%B3n_sandinista.png',
      caption: 'Sandinista fighters in Nicaragua during the 1980s Contra conflict, a proxy war in which the U.S. funded insurgents to destabilize a Soviet-aligned government.',
      prompt: 'How does the Nicaraguan conflict illustrate the comparison AP LO C demands? What methods did the U.S. use to maintain influence, and how did those compare to Soviet methods in Angola or Korea?'
    },
    {
      title: 'Warsaw Pact and Soviet control',
      label: 'Alliance record · Warsaw Pact, founded 1955',
      sourceText: [
        'The Soviet Union and Eastern European communist states formed a collective military alliance.',
        'Soviet forces later participated in interventions in Hungary in 1956 and Czechoslovakia in 1968.'
      ],
      caption: 'The Eastern alliance, and what its forces were used for inside its own bloc.',
      prompt: 'How does this evidence compare with NATO as a mechanism of influence? Which detail is most useful for arguing a difference in coercion or member autonomy?'
    },
    {
      title: 'Korea as a proxy battlefield',
      label: 'Conflict record · Korean War, 1950-1953',
      sourceText: [
        'The United States supplied the largest share of U.N. combat forces supporting South Korea.',
        'China intervened directly for North Korea while the Soviet Union provided weapons, advisers, and support.'
      ],
      caption: 'Who actually fought in Korea, listed by the side each power supported.',
      prompt: 'What similarity in superpower behavior can you infer from this conflict? What feature prevents Korea from being a perfectly symmetrical comparison?'
    }
  ];

})();
