(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.1.I.A',
      theme: 'Governance / Social Structures',
      text: 'Enlightenment thinkers, building on the Scientific Revolution and Renaissance humanism, argued that reason could discover natural laws governing human society and politics. Core concepts included natural rights (Locke), social contract theory (Rousseau), popular sovereignty, separation of powers (Montesquieu), religious tolerance (Voltaire), and free market economics (Smith). These ideas challenged the divine right of kings, hereditary aristocracy, and Church authority, providing intellectual foundations for the Atlantic Revolutions.',
      illustrativeExamples: ["Locke's Two Treatises of Government (1689)", "Rousseau's Social Contract (1762)", "Montesquieu's Spirit of the Laws (1748)", "Voltaire's Candide (1759)", "Wollstonecraft's Vindication of the Rights of Woman (1792)", "Adam Smith's Wealth of Nations (1776)", "The Encyclopédie (1751–1772)"]
    },
    {
      code: 'KC-5.1.I.B',
      theme: 'Cultural Developments and Interactions',
      text: 'Enlightenment ideas spread across Europe and the Atlantic world through print culture, salons, coffeehouses, and universities. However, Enlightenment universalism had significant limits: most philosophes excluded women from political rights; enslaved people and colonial subjects were denied the natural rights claimed by white Europeans; and prominent philosophes wrote in racist terms about non-European peoples. These limits made Enlightenment ideas simultaneously revolutionary and exclusionary.',
      illustrativeExamples: ["Encyclopédie (Diderot and d'Alembert, 1751–1772)", "Parisian salons hosted by women (Marie-Thérèse Rodet Geoffrin)", "Wollstonecraft's Vindication as response to Rousseau's exclusion of women", "Locke's investment in the Royal African Company", "Voltaire's racist descriptions of Africans and Asians"]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Age of Reason',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'France and Britain as Enlightenment centers', detail: 'Paris and Edinburgh were the intellectual hearts of the Enlightenment. Paris had the philosophes, the Encyclopédie, and the salons; Edinburgh had Adam Smith, David Hume, and the Scottish Enlightenment. But ideas circulated across borders through the "Republic of Letters" — an informal network of correspondence among scholars that operated across political boundaries and in multiple languages. By c. 1750, Enlightenment ideas were being debated in the American colonies, in Portugal and Spain, and in Russia.' },
      { label: 'Print culture and the Republic of Letters', detail: 'Cheap printing and expanding literacy made it possible for Enlightenment ideas to circulate rapidly. The Encyclopédie (1751–1772) reached 25,000 subscribers across Europe despite being banned by the French Crown and the Catholic Church. Newspapers, pamphlets, and pirated editions carried ideas across borders faster than censorship could suppress them. The geographic reach of print culture shaped which ideas reached which audiences — educated Europeans had access to the full canon of Enlightenment thought; enslaved Africans in the Americas had access only to fragments, usually through literate intermediaries.' },
      { label: 'From the Encyclopédie to the barricades', detail: 'The causal chain from Enlightenment text to Atlantic Revolution is not direct — ideas do not cause revolutions by themselves. The French Revolution required both Enlightenment ideas (the vocabulary of natural rights and popular sovereignty) AND structural conditions (French bankruptcy after the Seven Years War and the American Revolution, aristocratic tax exemption, food shortages of 1788–1789). For AP causation arguments, always identify both the intellectual cause and the structural cause.' },
      { label: 'The limits of the Enlightenment on the map', detail: 'Enlightenment universalism was geographically and socially selective. The philosophes wrote in French, Latin, and English — languages accessible primarily to the educated European elite. The salons were in Paris drawing rooms, not on Caribbean plantations. The Encyclopédie circulated to paying subscribers, not to enslaved people. Understanding this geographic and social selectivity helps explain why the Haitian Revolution had to use the Enlightenment\'s ideas against the Enlightenment\'s own practitioners — because the practitioners never intended to apply those ideas to the people in Saint-Domingue.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
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
    url: '',
    desc: "Debate whether Rousseau or Locke better explains the relationship between the individual and the state, advise Diderot on which articles to include in the Encyclopédie despite royal censorship, or challenge a salon philosophe on why his natural rights theory does not extend to enslaved Africans."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Tracing the Intellectual Causes of the Atlantic Revolutions',
    intro: 'Causation for Topic 5.1 requires explaining how Enlightenment ideas caused the Atlantic Revolutions — and also recognizing that ideas alone are never sufficient causes. Every Atlantic Revolution required both Enlightenment ideas (which provided the vocabulary and the justification) AND structural conditions (which created the crisis that made revolution possible). The most common AP error is treating Enlightenment ideas as the sole cause without explaining the structural conditions that made those ideas explosive.',
    steps: [
      { label: 'Identify the intellectual cause and its mechanism', text: 'Intellectual cause: Enlightenment thinkers articulated the concept of natural rights — the idea that all humans possess inherent rights (life, liberty, property) that government cannot legitimately violate. The mechanism: when a government imposed taxation without consent (Britain in the American colonies), or maintained a hereditary aristocracy immune from taxation (France), or maintained a plantation system based on racial slavery (Saint-Domingue), the natural rights framework provided a vocabulary for describing these conditions as illegitimate. Without natural rights theory, the same conditions might have produced rebellion or reform; with it, they produced revolution — because natural rights theory claimed that the existing order was not merely unjust but fundamentally illegitimate.' },
      { label: 'Identify the structural cause and its mechanism', text: 'Structural cause: The Seven Years War (1756–1763) created a fiscal crisis that destabilized both the British Empire (leading to new colonial taxation) and the French monarchy (leading to the conditions for the French Revolution). Britain\'s attempt to tax its colonies to pay war debts created the immediate grievance that activated Locke\'s natural rights theory. France\'s near-bankruptcy after supporting the American Revolution forced the Crown to call the Estates-General (1789) — the first time it had done so in 175 years — which created the political opening for the French Revolution. Structural conditions without Enlightenment ideas produce different outcomes; ideas without structural conditions produce books, not revolutions.' },
      { label: 'Connect intellectual and structural causes in an argument', text: 'A strong causation argument explains how intellectual causes and structural causes interacted: "The American Revolution was caused by the combination of Enlightenment natural rights theory AND British fiscal policy after the Seven Years War. Enlightenment ideas provided the framework (government requires consent; taxation without representation violates natural rights), while British fiscal policy provided the specific grievance that made those ideas politically explosive. Without both — without the ideas AND the crisis — the Revolution would not have happened when and how it did." This two-part causal argument is stronger than attributing the revolution to either ideas or structural conditions alone.' }
    ],
    prompt: 'In 3–4 sentences, explain how Enlightenment ideas caused the American or French Revolution. Identify one specific Enlightenment idea and one specific structural condition. Explain how the two interacted — how the structural condition gave the Enlightenment idea its political force. End with a statement about what this reveals about the relationship between intellectual change and political revolution.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Philosophes and Their Core Ideas',
      subtitle: 'Checks Learning Target 1 — Enlightenment ideas and their challenge to traditional authority.',
      cardDesc: 'Natural rights, social contract, popular sovereignty, separation of powers, and the philosophes who articulated them.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Name three Enlightenment philosophes and explain the core idea each contributed to political thought. For each, explain how their idea challenged one of the traditional pillars of European authority (divine right of kings, hereditary aristocracy, or Church authority). Then explain why Locke\'s idea — that government derives authority from the consent of the governed — was the most directly influential for the Atlantic Revolutions.',
      responseType: 'Checkpoint 1',
      terms: ['natural rights', 'social contract', 'popular sovereignty', 'separation of powers', 'Locke', 'Rousseau', 'Montesquieu', 'Voltaire', 'Wollstonecraft', 'divine right of kings'],
      focus: ['Name three philosophes and their core ideas — be specific about each person\'s contribution.', 'Explain how each idea challenged traditional authority — which pillar (divine right, aristocracy, Church) and how.', 'Explain why Locke\'s consent of the governed was the most directly influential for the Atlantic Revolutions.']
    },
    {
      title: 'Checkpoint 2: The Spread and Limits of Enlightenment Universalism',
      subtitle: 'Checks Learning Target 2 — how Enlightenment ideas spread and why their universalism was limited.',
      cardDesc: 'Print culture, salons, the Encyclopédie, and the exclusion of women, enslaved people, and colonial subjects.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Describe two mechanisms by which Enlightenment ideas spread (print culture, salons, coffeehouses, universities). Then identify two groups that Enlightenment universalism excluded — women, enslaved Africans, or colonized peoples — and explain the specific structural reasons for each exclusion. End with a synthesis: was Enlightenment universalism a genuine breakthrough for human rights, a hypocritical façade, or something more complex? Defend your position with specific evidence.',
      responseType: 'Checkpoint 2',
      terms: ['Encyclopédie', 'salons', 'print culture', 'Republic of Letters', 'Wollstonecraft', 'Royal African Company', 'universalism', 'exclusion', 'contradiction'],
      focus: ['Describe two specific mechanisms of spread — be concrete (Encyclopédie, salons, coffeehouses).', 'Identify two excluded groups and explain the structural reasons for each exclusion — be specific.', 'Write a synthesis: was Enlightenment universalism genuine, hypocritical, or complex? Defend with evidence.']
    }
  ];
})();
