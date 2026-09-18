(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.3.I.A",
      "theme": "Cultural Developments and Interactions",
      "text": "Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.I",
      "theme": "Cultural Developments and Interactions",
      "text": "The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.II.i",
      "theme": "Cultural Developments and Interactions",
      "text": "Nationalism also became a major force shaping the historical development of states and empires.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.I.C",
      "theme": "Social Interactions and Organization",
      "text": "Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.IV.B",
      "theme": "Social Interactions and Organization",
      "text": "Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies.",
      "illustrativeExamples": [
        "Mary Wollstonecraft’s A Vindication of the Rights of Woman",
        "Olympe de Gouges’s Declaration of the Rights of Woman and of the Female Citizen",
        "Seneca Falls Conference (1848) organized by Elizabeth Cady Stanton and Lucretia Mott"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Age of Reason',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'France and Britain as Enlightenment centers', detail: 'Paris and Edinburgh were the intellectual hearts of the Enlightenment. Paris had the philosophes, the Encyclopédie, and the salons; Edinburgh had Adam Smith, David Hume, and the Scottish Enlightenment. But ideas circulated across borders through the "Republic of Letters", an informal network of correspondence among scholars that operated across political boundaries and in multiple languages. By c. 1750, Enlightenment ideas were being debated in the American colonies, in Portugal and Spain, and in Russia.' },
      { label: 'Print culture and the Republic of Letters', detail: 'Cheap printing and expanding literacy made it possible for Enlightenment ideas to circulate rapidly. The Encyclopédie (1751–1772) reached 25,000 subscribers across Europe despite being banned by the French Crown and the Catholic Church. Newspapers, pamphlets, and pirated editions carried ideas across borders faster than censorship could suppress them. The geographic reach of print culture shaped which ideas reached which audiences, educated Europeans had access to the full canon of Enlightenment thought; enslaved Africans in the Americas had access only to fragments, usually through literate intermediaries.' },
      { label: 'From the Encyclopédie to the barricades', detail: 'The causal chain from Enlightenment text to Atlantic Revolution is not direct, ideas do not cause revolutions by themselves. The French Revolution required both Enlightenment ideas (the vocabulary of natural rights and popular sovereignty) AND structural conditions (French bankruptcy after the Seven Years War and the American Revolution, aristocratic tax exemption, food shortages of 1788–1789). For AP causation arguments, always identify both the intellectual cause and the structural cause.' },
      { label: 'The limits of the Enlightenment on the map', detail: 'Enlightenment universalism was geographically and socially selective. The philosophes wrote in French, Latin, and English, languages accessible primarily to the educated European elite. The salons were in Paris drawing rooms, not on Caribbean plantations. The Encyclopédie circulated to paying subscribers, not to enslaved people. Understanding this geographic and social selectivity helps explain why the Haitian Revolution had to use the Enlightenment\'s ideas against the Enlightenment\'s own practitioners, because the practitioners never intended to apply those ideas to the people in Saint-Domingue.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-natural-rights-test.html',
    desc: "Join a Paris publisher’s salon in 1788–1789 and decide whether natural-rights language will confront its exclusions of women, enslaved people, and the poor."
  };

  lesson.skillBuilder = {
    label: 'Causation and continuity/change practice',
    title: 'Ideas -> Revolution -> Reform',
    intro: 'Topic 5.1 has two time horizons. First, Enlightenment ideas challenged traditional authority and supplied political language for Atlantic revolutions. Second, those same rights claims continued to be used by reformers who pushed political and social rights further during the 19th century.',
    steps: [
      { label: 'Name the idea', text: 'Use a precise Enlightenment idea such as natural rights, social contract, popular sovereignty, separation of powers, religious tolerance, or reason. Identify the thinker when useful.' },
      { label: 'Explain the challenge to authority', text: 'Show which older institution or assumption the idea challenged: divine-right monarchy, hereditary privilege, religious authority, or political exclusion.' },
      { label: 'Trace the effect into reform', text: 'Connect rights language to a later reform movement: expanded suffrage, abolition, ending serfdom, or women’s rights. Explain how reformers extended Enlightenment logic to groups previously excluded.' },
      { label: 'Add complexity', text: 'Recognize that Enlightenment universalism was incomplete in practice. The contradiction between universal rights language and exclusion became a source of later reform pressure.' }
    ],
    prompt: 'Choose one Enlightenment idea and trace it through two stages: first, how it challenged traditional authority or justified revolution; second, how reformers later used the same logic to expand rights. Use at least two specific pieces of evidence.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Enlightenment Ideas and the Challenge to Authority',
      subtitle: 'Checks Learning Targets 1–2 — ideas, diffusion, and political challenge.',
      cardDesc: 'Reason, natural rights, social contract, popular sovereignty, separation of powers, and diffusion.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain THREE Enlightenment ideas using specific thinkers when appropriate. For each idea, explain how it challenged an older source of authority such as divine-right monarchy, hereditary privilege, or religious authority. Then explain ONE mechanism by which Enlightenment ideas spread and how that diffusion helped provide ideological justification for revolution or new political identity.',
      responseType: 'Checkpoint 1',
      terms: ['reason', 'empiricism', 'natural rights', 'social contract', 'popular sovereignty', 'separation of powers', 'Locke', 'Rousseau', 'Montesquieu', 'Voltaire', 'print culture', 'salons', 'nationalism'],
      focus: ['Explain three ideas precisely rather than listing names.', 'Connect each idea to the authority it challenged.', 'Explain one diffusion mechanism and its political effect.']
    },
    {
      title: 'Checkpoint 2: Enlightenment Ideas Become Reform Movements',
      subtitle: 'Checks Learning Target 3 — reform, expanded rights, and feminism.',
      cardDesc: 'Suffrage, abolition, serfdom, Wollstonecraft, de Gouges, and Seneca Falls.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how Enlightenment or religious ideals influenced TWO reform movements from expanded suffrage, abolition of slavery, or the end of serfdom. Then explain how demands for women’s rights used the logic of Enlightenment equality to challenge gender hierarchy. Use at least ONE specific example from Mary Wollstonecraft, Olympe de Gouges, or the Seneca Falls Conference. End by explaining how the exclusion of some groups from early universal-rights claims helped create later reform pressure.',
      responseType: 'Checkpoint 2',
      skill: 'Causation and continuity/change',
      terms: ['expanded suffrage', 'abolition', 'end of serfdom', 'women’s suffrage', 'feminism', 'Mary Wollstonecraft', 'Olympe de Gouges', 'Seneca Falls', 'natural rights', 'equality'],
      focus: ['Use two specific reform movements and explain the idea-to-reform mechanism.', 'Use one named women’s-rights example.', 'Explain how earlier exclusion generated pressure to extend rights.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Build a claim about how Enlightenment ideas challenged traditional authority and continued to shape reform movements. Use at least two cards, including one piece of evidence about rights expansion or women’s rights, and explain the causal connection.'
  };

  lesson.images = [
    {
      title: 'The Enlightenment world',
      url: '../assets/images/instructional-maps/topic-5-1.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-1.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of the centres and circulation of Enlightenment thought.',
      prompt: 'NOTICE where the marked centres cluster. INFER what a network of cities, presses and correspondence made possible that a single court could not. What does a map of centres not show about who was reading?'
    },
    {
      title: 'Locke on political consent',
      label: 'Primary-source excerpt · John Locke, Two Treatises of Government, 1689',
      sourceText: [
        '“Men being by nature all free, equal, and independent…”',
        'Political power requires consent.'
      ],
      caption: 'Written in 1689, in the year after a king had been removed from the English throne.',
      prompt: 'Which phrase is most useful for a claim about legitimate government? What does the passage not reveal about who Locke imagined as fully included?'
    },
    {
      title: 'Wollstonecraft turns rights toward women',
      label: 'Primary-source excerpt · A Vindication of the Rights of Woman, 1792',
      sourceText: [
        '“I do not wish them to have power over men;',
        'but over themselves.”'
      ],
      caption: 'Published in 1792, arguing from inside Enlightenment logic against the people making it.',
      prompt: 'How could this excerpt extend Enlightenment logic while exposing a limit in earlier versions of universal rights?'
    },
    {
      title: 'The Encyclopédie as a print network',
      label: 'Publication record · Encyclopédie, 1751–1772',
      sourceText: [
        '17 volumes of text + 11 volumes of plates',
        'Printed, banned, reprinted, and circulated across Europe'
      ],
      caption: 'The publication record of a work that was banned and printed anyway, over twenty-one years.',
      prompt: 'What can the scale and persistence of publication support about diffusion? What can publication numbers not prove about how ordinary people interpreted the ideas?'
    },
    {
      title: 'de Gouges rewrites the declaration',
      label: 'Primary-source excerpt · Declaration of the Rights of Woman, 1791',
      sourceText: [
        '“Woman is born free and remains equal to man in rights.”',
        'A direct rewrite of revolutionary rights language.'
      ],
      caption: 'A direct rewrite of the revolutionary declaration of 1789, published two years later. Its author was executed in 1793.',
      prompt: 'What contradiction does this evidence make visible? How would you use it to qualify a claim that revolutionary rights were universal?'
    },
    {
      title: 'An Enlightenment salon',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salon_de_Madame_Geoffrin.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Salon_de_Madame_Geoffrin.jpg',
      caption: 'Anicet Charles Gabriel Lemonnier, painted in 1812, reconstructing a reading in Madame Geoffrin’s Paris salon of the 1750s. A later picture of an earlier room.',
      prompt: 'NOTICE who is in the room, who is seated where, and who is not present. INFER what kind of space Enlightenment argument actually happened in. This was painted about sixty years after the scene: what does that cost you as evidence?'
    }
  ];

})();
