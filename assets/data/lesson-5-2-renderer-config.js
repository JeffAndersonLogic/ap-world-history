(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.3.II.ii',
      theme: 'Governance',
      text: 'People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3',
      theme: 'Governance',
      text: 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.A.i',
      theme: 'Governance',
      text: 'Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.III.B',
      theme: 'Governance',
      text: 'Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals. The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed. The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I.B',
      theme: 'Governance',
      text: 'The ideas of Enlightenment philosophers, as reflected in revolutionary documents, including the American Declaration of Independence during the American Revolution, the French Declaration of the Rights of Man and of the Citizen during the French Revolution, and Bolívar’s Letter from Jamaica on the eve of the Latin American revolutions, influenced resistance to existing political authority, often in pursuit of independence and democratic ideals.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.II.iii',
      theme: 'Governance',
      text: 'Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions.',
      illustrativeExamples: ['Propaganda Movement in the Philippines', 'Māori nationalism and the New Zealand wars in New Zealand', 'Puerto Rico, writings of Lola Rodríguez de Tió', 'German and Italian unifications', 'Balkan nationalisms', 'Ottomanism']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Revolutionary Atlantic',
    embedUrl: 'first-and-10-topic-5-2-nationalism-and-revolutions-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'The Atlantic Revolutionary wave, 1776–1825', detail: 'The four major Atlantic Revolutions happened in a 50-year window: American (1776), French (1789), Haitian (1791–1804), Latin American (1810–1825). They were connected, the American Revolution inspired the French; the French Revolution\'s declaration of universal rights created the context for the Haitian Revolution; and Latin American independence leaders explicitly cited both. But each was also shaped by its local conditions: who was enslaved, who held power, what the colonial relationship looked like, and what structural crises made revolution possible.' },
      { label: 'Saint-Domingue as the crucible', detail: 'Saint-Domingue (modern Haiti) was France\'s most profitable colony, producing 40% of Europe\'s sugar and 60% of its coffee in the 1780s. Its population was approximately 500,000 enslaved people, 32,000 white colonists, and 28,000 free people of color (many of mixed race). This demography, enormous enslaved majority, small white minority, significant free colored population with ambiguous legal status, made Saint-Domingue uniquely explosive when the French Revolution declared universal rights. The Haitian Revolution was not a generic slave revolt; it was a specific application of Enlightenment principles to a specific colonial situation.' },
      { label: 'Nationalism and the multiethnic empires', detail: 'After 1825, the most important application of revolutionary-era nationalism was in Europe, where multiethnic empires, Ottoman, Habsburg, and Russian, faced increasingly powerful nationalist movements demanding self-determination. Greek independence (1821–1829) was the first successful nationalist challenge to the Ottoman Empire, with European liberal support. Italian unification (1861) and German unification (1871) reshaped the European state system. For the AP exam, nationalism matters primarily as a cause of imperial instability, it helps explain why the Ottoman, Habsburg, and Austro-Hungarian empires collapsed in the 19th and early 20th centuries.' },
      { label: 'Revolutionary outcomes: radical vs. conservative', detail: 'The most important geographic and comparative pattern: revolutionary outcomes varied dramatically depending on who led the revolution and who benefited. The American Revolution was led by white colonial property owners and produced a republic that preserved slavery. The French Revolution was led by bourgeois lawyers and produced a republic that briefly abolished slavery and then reimposed it under Napoleon. The Haitian Revolution was led by enslaved people and produced the first Black republic, and paid an enormous price for it. Latin American independence was led by creole elites and mostly reproduced colonial social hierarchies under new management.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-saint-domingue-constitution.html',
    desc: "Join Saint-Domingue’s 1801 constitutional council and balance emancipation, plantation production, citizenship, and survival under French pressure."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing the Atlantic Revolutions: Who Applied Enlightenment Ideals, and Who Did Not?',
    intro: 'Comparison for Topic 5.2 requires identifying both similarities and differences among the Atlantic Revolutions, and explaining what those comparisons reveal. The most common AP error is describing each revolution separately without identifying the specific similarity or difference being compared. A strong comparison argument uses the structure: "Both X and Y did [similarity], but X differed from Y in [difference], which reveals [broader point]."',
    steps: [
      { label: 'Identify a meaningful similarity (with evidence)', text: 'Similarity: All four Atlantic Revolutions drew on Enlightenment natural rights theory to justify the overthrow of existing authority. Evidence: The American Declaration of Independence (1776) cited Locke\'s natural rights language almost verbatim; the French Declaration of the Rights of Man (1789) declared universal natural rights; Toussaint Louverture\'s writings explicitly invoked French revolutionary principles; Bolívar\'s proclamations cited both Locke and Rousseau. The similarity is not superficial, the same vocabulary appeared in all four because all four revolutionaries were reading the same Enlightenment texts.' },
      { label: 'Identify a meaningful difference (with evidence)', text: 'Difference: The four revolutions defined the population covered by "natural rights" very differently. The American Revolution explicitly excluded enslaved Africans (Jefferson owned enslaved people while writing "all men are created equal"). The French Revolution briefly included enslaved people (abolition in 1794) then reversed itself (Napoleon\'s reimposition, 1802). The Haitian Revolution included everyone, and is the only Atlantic Revolution where the universal claim was actually applied universally. Latin American independence mostly transferred power from one elite to another without fundamentally changing social hierarchies. The difference reveals that "universal" rights in the Enlightenment era were always defined by who held power.' },
      { label: 'Write the synthesis statement', text: 'A strong comparison ends with synthesis: what does the pattern of similarities and differences reveal? All Atlantic Revolutions claimed to apply Enlightenment natural rights theory; none applied it without contradiction. The American Revolution preserved slavery while creating a republic. The French Revolution proclaimed universal rights while reimposing slavery in its colonies. The Haitian Revolution applied the universal claim most consistently, and was punished for it by every other Atlantic revolutionary state. The comparison reveals that the Enlightenment\'s promise of universal rights and the practice of Atlantic revolutionary politics were fundamentally in tension, and that the resolution of that tension depended entirely on who led the revolution and who controlled its outcome.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument about the Atlantic Revolutions. Identify one meaningful similarity and one meaningful difference between the Haitian Revolution and either the American or the French Revolution. Explain what the difference reveals about the relationship between Enlightenment ideals and political reality in the Atlantic Revolutionary era.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Atlantic Revolutions and the Haitian Revolution',
      subtitle: 'Checks Learning Targets 1 and 2, Atlantic Revolutions and the most radical application of Enlightenment ideas.',
      cardDesc: 'American, French, Haitian, and Latin American revolutions, causes, outcomes, and the question of who was included.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Choose two Atlantic Revolutions (American, French, Haitian, or Latin American). For each, identify one specific Enlightenment idea it drew on AND one structural condition that also contributed to its outbreak. Then compare the two: in what way was the Haitian Revolution more radical than the other? Be specific about what "most radical" means, what did the Haitian Revolution challenge that the other revolutions did not?',
      responseType: 'Checkpoint 1',
      terms: ['natural rights', 'popular sovereignty', 'Toussaint Louverture', 'Bois Caïman', 'Haitian Revolution', 'Declaration of Independence', 'Declaration of Rights of Man', 'Seven Years War', 'Saint-Domingue', 'Napoleon'],
      focus: ['Identify one Enlightenment idea AND one structural condition for each revolution you choose.', 'Compare: explain specifically what made the Haitian Revolution more radical than your other example.', "Be specific about what 'most radical' means, what did Haiti challenge that others didn't?"]
    },
    {
      title: 'Checkpoint 2: Nationalism and Its Impact on Multiethnic Empires',
      subtitle: 'Checks Learning Target 3, nationalism as a destabilizing force in 19th-century politics.',
      cardDesc: 'Nationalism, self-determination, and the challenge to Ottoman, Habsburg, and Russian empires.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Define nationalism in your own words, what does it mean, and how does it differ from patriotism or loyalty to a monarch? Explain how nationalism emerged from the Atlantic Revolutionary movements. Then give one specific example of a nationalist movement challenging a multiethnic empire in the 19th century. Explain: what specific group wanted self-determination, which empire did it challenge, and what was the outcome?',
      responseType: 'Checkpoint 2',
      terms: ['nationalism', 'self-determination', 'multiethnic empire', 'Ottoman Empire', 'Habsburg Empire', 'Greek independence', 'Italian unification', 'German unification', 'Bolívar', 'creole'],
      focus: ['Define nationalism clearly, how is it different from loyalty to a dynasty or a religion?', 'Explain the causal chain: how did Atlantic Revolutions produce nationalism as an ideology?', 'Give one specific nationalist movement, the empire it challenged, and the outcome, be concrete.']
    }
  ];
})();
