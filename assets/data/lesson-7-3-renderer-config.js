// lesson-7-3-renderer-config.js
// Topic 7.3 — Conducting World War I
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus for this topic is TEC (Technology and Innovation),
// not GOV as in Topics 7.1–7.2.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Technology and Innovation (TEC)',
      theme: 'Technology and Innovation',
      text: 'Human adaptation and innovation have resulted in increased efficiency, comfort, and security, and technological advances have shaped human development and interactions with both intended and unintended consequences.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Explain how governments used a variety of methods to conduct war.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.A.i',
      theme: 'Governance',
      text: 'World War I was the first total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies) for the purpose of waging war.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III.C.i',
      theme: 'Technology and Innovation',
      text: 'New military technology led to increased levels of wartime casualties.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Total War',
    embedUrl: 'first-and-10-topic-7-3-conducting-wwi-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'The fronts: where the blocs collided', detail: 'The Western Front froze into a trench line across Belgium and France; the Eastern Front sprawled between Germany, Austria-Hungary, and Russia. Machine guns and artillery made the lines nearly immovable — and a stalemated war became a long war.' },
      { label: 'Stalemate made the war total', detail: 'Because no army could break through, victory came to depend on which society could out-produce, out-supply, and out-endure the other. That is why governments mobilized factories, food, finance, media, and morale — total war was the answer to the deadlock.' },
      { label: 'The empires behind the map', detail: 'Nearly every European belligerent commanded an overseas empire. Colonial troops, laborers, raw materials, and taxes flowed into the war — over a million Indian soldiers for Britain, hundreds of thousands of African and Indochinese troops for France.' },
      { label: 'Geographic takeaway', detail: 'The trenches were European but the war was global: mobilization reached from the home front to the colonies, and the fighting itself spread to Africa, the Middle East, and the Pacific. KC-6.2.IV.A.i’s phrase “both in the home countries and the colonies” is visible on any world map of 1914–1918.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/British_Mark_I_male_tank_Somme_25_September_1916.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitchener-Britons.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Unclesamwantyou.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitchener-Britons.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_bicycle_troops_Somme_1916.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/John_Singer_Sargent_-_Gassed.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Unclesamwantyou.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/British_Mark_I_male_tank_Somme_25_September_1916.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-ministry-of-information.html',
    desc: 'Join Britain’s 1917 information ministry and decide how propaganda, censorship, labor, and colonial service can mobilize total war without destroying public trust.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Secret War of the Famous Authors',
    text: 'In September 1914, the British government quietly summoned the most famous writers in the English language to a building called Wellington House — Arthur Conan Doyle, H.G. Wells, Thomas Hardy, Rudyard Kipling, and more than twenty others. Their mission: write pamphlets, articles, and books supporting the war, published through ordinary commercial presses so readers would never suspect government involvement. Wellington House produced over a thousand propaganda publications, and its existence stayed secret for years. Some of the most "independent" voices of the war were, in fact, the state speaking through its novelists.',
    prompt: 'Why would secret propaganda written by trusted authors be more effective than posters signed by the government? What does Wellington House suggest about how total war blurred the line between persuasion and deception?'
  };

  lesson.skillBuilder = {
    label: 'Sourcing practice',
    title: 'HIPP a Propaganda Poster: Reading Persuasion as Evidence',
    intro: 'Topic 7.3 hands you a gift for the AP exam: propaganda is the perfect source for practicing HIPP analysis — Historical situation, Intended audience, Purpose, and Point of view. A propaganda poster is never a neutral window onto the war; it is a weapon aimed at its audience, and your job is to analyze the aim. Work through the Kitchener "Your Country Needs You" poster (or Uncle Sam) with the steps below.',
    steps: [
      { label: 'Historical situation', text: 'Britain, 1914: no conscription until 1916, so the army depended entirely on volunteers — at the exact moment machine guns and trench warfare began consuming men faster than any war in history. The poster exists because the state needed bodies and could not yet compel them.' },
      { label: 'Intended audience & purpose', text: 'Audience: young men of military age — and, just as deliberately, the families and communities watching whether they enlisted. Purpose: convert enlistment from a choice into a personal, patriotic obligation. The pointing finger and direct address ("YOU") collapse the distance between the state and one individual reader.' },
      { label: 'Point of view & limitation', text: 'The poster embodies the government’s point of view: war as duty and honor, with the costs invisible — no trenches, no gas, no casualty lists. That silence is evidence too: compare it with Wilfred Owen’s "old Lie" to see exactly what official persuasion omitted. A strong essay uses the poster as evidence of mobilization strategy, never as evidence of what war was actually like.' }
    ],
    prompt: 'Choose one propaganda poster from this lesson (Kitchener or Uncle Sam). In two to three sentences, analyze it using at least two HIPP elements — historical situation, intended audience, purpose, or point of view — and explain how the poster served the government’s total-war mobilization.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The First Total War',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Total war defined; propaganda, art, media, nationalism, and colonial mobilization.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain why World War I is considered the first total war, and describe how governments mobilized their populations for it. Your response must define total war, use at least two specific mobilization strategies from the Key Concept (propaganda, art, media, intensified nationalism), and include the colonies — not just the home countries.',
      responseType: 'Checkpoint 1',
      terms: ['total war', 'mobilization', 'propaganda', 'recruitment posters', 'war art', 'newsreels', 'censorship', 'intensified nationalism', 'colonial troops', 'home front'],
      focus: ['Define total war: civilians, industries, and government institutions all mobilized.', 'Use at least two specific mobilization strategies with concrete examples (Kitchener poster, official war art, newsreels).', 'Include colonial mobilization explicitly — troops, labor, and resources from the colonies.']
    },
    {
      title: 'Checkpoint 2: Technology and the Human Cost',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'Machine guns, trenches, tanks, aircraft, chemical weapons — and unprecedented casualties.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how new military technology led to increased levels of wartime casualties in World War I. Use at least three specific technologies, explain the mechanism for each (how it killed or wounded at new scale), and end with one sentence on an ethical question this human cost raised.',
      responseType: 'Checkpoint 2',
      terms: ['machine guns', 'trench warfare', 'stalemate', 'tanks', 'aircraft', 'chemical weapons', 'mustard gas', 'artillery', 'casualties', 'Somme', 'Verdun'],
      focus: ['Name at least three specific technologies as evidence.', 'Explain the mechanism: how did each technology raise casualty levels (e.g., machine guns → massed attacks fail → trench stalemate → battles of attrition)?', 'Close with one ethical question the unprecedented human cost raised.']
    }
  ];

  // Capture points — static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.3+-+Conducting+World+War+I&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.3+-+Conducting+World+War+I&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
