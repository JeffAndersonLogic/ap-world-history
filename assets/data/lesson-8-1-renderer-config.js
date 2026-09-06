// lesson-8-1-renderer-config.js
// Topic 8.1, Setting the Stage for the Cold War and Decolonization
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Governance (GOV)",
      "theme": "Governance",
      "text": "A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 8: Learning Objective A",
      "theme": "Learning Objective",
      "text": "Explain the historical context of the Cold War after 1945.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.II",
      "theme": "Governance",
      "text": "Hopes for greater self-government were largely unfulfilled following World War I; however, in the years following World War II, increasing anti-imperialist sentiment contributed to the dissolution of empires and the restructuring of states.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.IV.C.i",
      "theme": "Governance",
      "text": "Technological and economic gains experienced during World War II by the victorious nations shifted the global balance of power.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Setting the Stage',
    embedUrl: 'first-and-10-topic-8-1-cold-war-stage-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Colonial empires still intact in 1945', detail: 'Britain and France still held vast territories across Africa, Asia, and the Pacific, but WWII had exhausted their ability to maintain them.' },
      { label: 'The two superpowers', detail: 'The United States and Soviet Union emerged from WWII with the industrial capacity, military strength, and ideological ambition to reshape the global order.' },
      { label: 'Where nationalist movements were organized', detail: 'India, Southeast Asia, and parts of West Africa already had organized independence movements by 1945. The question was not if, but when.' },
      { label: 'Geographic takeaway', detail: 'The map shows a world whose political structure was about to change fundamentally, and understanding why requires connecting unfulfilled WWI promises, WWII exhaustion, and superpower rivalry.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mahatma-Gandhi%2C_studio%2C_1931.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atlantic_charter.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_league_of_nations_mandate.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atlantic_charter.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Clement_Attlee.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/empire-accounts.html',
    desc: 'London, February 1947. You are a senior advisor to Prime Minister Attlee\'s cabinet. Three simultaneous crises, an empty treasury, and two superpowers watching. What do you recommend?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Five Weeks to Draw a Border',
    desc: 'Five weeks to partition a subcontinent, by someone who had never visited India.',
    intro: 'When Britain announced Indian independence in June 1947, the boundary commission was given just five weeks to divide the subcontinent.',
    detail: 'Cyril Radcliffe, an English barrister who had never visited India, drew the line separating India and Pakistan. He delivered his maps two days after independence was declared.',
    text: 'When Britain announced Indian independence in June 1947, the boundary commission that would divide the subcontinent into India and Pakistan was given just five weeks to draw a new national border through territories that had never been divided. Cyril Radcliffe, an English barrister who had never visited India, drew the line. He delivered his maps on August 17, 1947, two days after independence. Within months, an estimated 10–14 million people had crossed the boundary, making the Partition of India one of the largest forced migrations in human history.',
    prompt: 'What does it reveal about the nature of British power in 1947 that the empire which had governed India for nearly two centuries entrusted its partition to a lawyer who had never visited the country, with five weeks to finish the job?'
  };

  lesson.skillBuilder = {
    label: 'Contextualization practice',
    title: 'Place the Cold War in Its Historical Context',
    intro: 'Contextualization means explaining the broader historical setting that made an event or development possible. For the Cold War, that means connecting the rivalry to what came before: the unfulfilled promises of WWI self-determination, the exhaustion of European empires after WWII, and the technological and economic gains that made the U.S. and Soviet Union into superpowers.',
    steps: [
      { label: 'Before', text: 'Wilson\'s Fourteen Points (1918) promised self-determination; the Mandate System (1919) instead extended British and French colonial control. Interwar nationalist movements were suppressed but not destroyed.' },
      { label: 'During WWII', text: 'Britain and France were economically devastated. The U.S. expanded its industrial and technological capacity. The Soviet Union industrialized rapidly and built the world\'s largest land army.' },
      { label: 'After 1945', text: 'The old colonial powers were too exhausted to maintain their empires. The U.S. and USSR emerged with rival ideologies and global ambitions. The structural conditions for both decolonization and Cold War rivalry were in place simultaneously.' }
    ],
    prompt: 'Write two contextualization sentences that explain the broader historical setting that made the Cold War possible after 1945. Your sentences should connect at least one development from before WWII and at least one change that WWII produced.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Anti-Imperialism and Decolonization',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Unfulfilled self-determination, imperial exhaustion, and the roots of decolonization.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how unfulfilled promises of self-determination after World War I contributed to anti-imperialist sentiment in the years following World War II. In your response, use at least two specific examples and explain how World War II\'s economic consequences made it more difficult for European colonial powers to resist independence movements.',
      responseType: 'Checkpoint 1',
      terms: ['self-determination', 'Mandate System', 'Indian National Congress', 'Gandhi', 'Nehru', 'Kwame Nkrumah', 'pan-Africanism', 'anti-imperialist', 'dissolution of empires', 'restructuring of states', 'war debt', 'Lend-Lease'],
      focus: ['Name at least one specific example of an unfulfilled post-WWI self-determination promise.', 'Explain how WWII weakened at least one European colonial power (use evidence: debt, military exhaustion, dependency on the US).', 'Connect both points: how did unfulfilled promises + imperial exhaustion together accelerate decolonization?']
    },
    {
      title: 'Checkpoint 2: Contextualization and the Cold War',
      subtitle: 'Checks Learning Target 3 and all three Success Criteria.',
      cardDesc: 'Superpower rivalry, balance of power, and Cold War contextualization.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Write a contextualization statement explaining the historical context in which the Cold War emerged after 1945. In your response, explain how at least TWO of the following helped create the conditions for the Cold War: (1) unfulfilled post-WWI promises of self-government, (2) WWII\'s impact on the global balance of power, (3) the technological and economic gains of the United States and Soviet Union. Use specific historical evidence.',
      responseType: 'Checkpoint 2',
      terms: ['Cold War', 'superpower', 'Marshall Plan', 'NATO', 'Warsaw Pact', 'Soviet sphere', 'Truman Doctrine', 'balance of power', 'rival ideologies', 'Marxism-Leninism', 'contextualization', 'historical context'],
      focus: ['Open with a sentence that explains what broader historical developments preceded the Cold War.', 'Connect at least two specific developments (decolonization context + balance of power shift) to the emergence of Cold War rivalry.', 'Use the word "context" or "conditions" to signal this is a contextualization argument.']
    }
  ];


  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.',
    prompt: 'Build a contextualization claim explaining how World War II and earlier demands for self-government created the conditions for both decolonization and the Cold War after 1945. Use at least two cards from different categories and explain what each can and cannot prove.'
  };

  lesson.images = [
    {
      title: 'League of Nations Mandate Map',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_league_of_nations_mandate.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_league_of_nations_mandate.png',
      caption: 'The League of Nations Mandate System divided Germany\'s former colonies among the victorious Allied powers, principally Britain and France.',
      prompt: 'How does this map challenge Wilson\'s promise of self-determination? What does it reveal about the difference between the rhetoric of 1918 and the reality of 1919?'
    },
    {
      title: 'Clement Attlee\'s Cabinet, 1945',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Clement_Attlee.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clement_Attlee.jpg',
      caption: 'Britain\'s Labour government under Clement Attlee inherited a bankrupted empire in 1945 and faced simultaneous independence crises across Asia and the Middle East.',
      prompt: 'What does a government\'s financial situation reveal about its ability to maintain imperial commitments? How does treasury exhaustion act as an internal factor in imperial decline?'
    },
    {
      title: 'The Marshall Plan, 1948',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Marshall_Plan.png',
      caption: 'The Marshall Plan (1948) committed $13 billion in U.S. aid to rebuild Western Europe, and to anchor it within the American sphere of influence.',
      prompt: 'Is the Marshall Plan better evidence of American generosity or American strategic interest? Can it be both?'
    },
    {
      title: 'Atlantic Charter and self-government',
      label: 'Primary-source excerpt · Atlantic Charter, 1941',
      sourceText: [
        'The signatories "respect the right of all peoples to choose',
        'the form of government under which they will live."',
        'Colonial nationalists quoted the clause back at them.'
      ],
      caption: 'The third clause of the Anglo-American war-aims declaration of August 1941, issued while both signatories held colonies.',
      prompt: 'What claim about rising anti-imperialist expectations can this language support? What additional evidence would you need to show how colonial peoples interpreted it?'
    },
    {
      title: 'Britain needs a postwar loan',
      label: 'Financial-policy record · Anglo-American Loan Agreement, 1946',
      sourceText: [
        'The United States approved a $3.75 billion loan to Britain after wartime Lend-Lease ended.',
        'Britain entered the postwar era with severe balance-of-payments and imperial financing problems.'
      ],
      caption: 'The terms on which Britain financed itself once wartime Lend-Lease stopped.',
      prompt: 'How could this evidence support a claim that World War II weakened Britain\'s capacity to sustain empire? What does one loan not prove about every decolonization case?'
    },
    {
      title: 'India becomes independent',
      label: 'Legal record · Indian Independence Act, 1947',
      sourceText: [
        'British law created the independent dominions of India and Pakistan in August 1947.',
        'The act ended direct British rule while also formalizing partition.'
      ],
      caption: 'The statute that ended British rule in South Asia, passed by the parliament that had governed it.',
      prompt: 'How does this record connect imperial withdrawal to the restructuring of states? What evidence would you need to explain why Britain accepted withdrawal at this moment?'
    }
  ];

})();
