(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective A",
      "theme": "Learning Objective",
      "text": "Explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 5: Learning Objective B",
      "theme": "Learning Objective",
      "text": "Explain how the Enlightenment affected societies over time.",
      "illustrativeExamples": []
    },
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
    title: 'First & 10: By What Right?',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Where the ideas came from', detail: 'France (the salons of Paris and the Encyclopédie, published from 1751 to 1772) and Britain (Locke, who published his arguments about natural rights and consent in 1689). The ideas traveled in books, pamphlets, newspapers, and letters.' },
      { label: 'Across the Atlantic', detail: 'Arrow 1: the ideas reached Spanish America. In Bogotá, Antonio Nariño secretly printed a Spanish translation of France\'s declaration of rights in 1793 or 1794, and was arrested for it in 1794. Arrow 2: antislavery and rights campaigners in Britain and the United States wrote to each other, traveled, and met, as at the London antislavery convention of 1840.' },
      { label: 'Where rights were demanded and won, and when', detail: 'Serfdom ended in the Austrian Empire in 1848 and in Russia in 1861. Women met at Seneca Falls, New York, in 1848 to demand equal rights and the vote. Brazil was the last country in the Americas to end slavery, in 1888.' },
      { label: 'Reading the map', detail: 'The shaded areas mark regions, not exact borders. Read the dates from earliest to latest: the ideas came first, and the rights they promised reached different places decades apart.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-1.svg',
    first10:         '../assets/images/topics/5-1/air-pump-experiment-green-1769.jpg',
    contentDelivery: '../assets/images/topics/5-1/encyclopedie-title-lucca-1758.jpg',
    beSurreal:       '',
    skill:           '../assets/images/topics/5-1/encyclopedie-plate-fan-maker.jpg',
    checkpoint1:     '../assets/images/topics/5-1/encyclopedie-title-lucca-1758.jpg',
    evidence:        '../assets/images/topics/5-1/abolitionist-jug-c1820.jpg',
    source:          '',
    beInTheRoom:     '',
    checkpoint2:     '../assets/images/topics/5-1/liberty-arts-sciences-jennings-c1792.jpg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: By What Right?',
    desc: 'Follow the story: how a new way of finding out what is true led writers to ask every old authority "by what right?", the new answers they gave, how those ideas spread before the Atlantic revolutions, and how reformers and the people left out pressed the same words until rights reached further by 1900, and what stayed the same.',
    url: 'presentation-topic-5-1-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-natural-rights-test.html',
    desc: 'Paris, 1788 to 1789. A publisher must decide what a pamphlet on natural rights will claim, whose voices it will print, and who will get to read it, when the people paying for it, the writers, and the people the words leave out all want different things.'
  };

  lesson.skillBuilder = {
    label: 'Claims and evidence practice',
    title: 'Find the Claim',
    intro: 'A claim is what a writer wants you to believe. The Enlightenment was an age of arguments, so its sources are full of claims. To identify a claim, find the sentence that says what the writer wants you to believe. To describe it, say it in your own words, and say what older idea it argues against. Watch the move on one source, then try it on three new ones.',
    steps: [
      { label: 'Read the source', text: 'Montesquieu, The Spirit of the Laws, 1748, in an English translation of 1750: "When the legislative and executive powers are united in the same person, or in the same body of magistrates, there can be no liberty." (The legislative power makes the laws; the executive power carries them out; magistrates are officials.)' },
      { label: 'Identify the claim', text: 'Find what Montesquieu wants you to believe. Here it is the end of the sentence: when one person or group both makes and carries out the laws, people are not free.' },
      { label: 'Describe it in your own words', text: 'Montesquieu claims that people stay free only when no one person or group holds all the power.' },
      { label: 'Say what it argues against', text: 'Montesquieu is arguing against a king who makes the laws, carries them out, and judges them all himself, as Louis XIV did. Use this frame: "[The writer] claims that [the claim in your own words], arguing against [the older idea]."' }
    ],
    prompt: 'Now do it yourself. Choose TWO of these three sources. (1) Jean-Jacques Rousseau, 1762, the first line of his book on the social contract: "Man is born free; and everywhere he is in chains." (2) Immanuel Kant, 1784, the motto of his essay "What Is Enlightenment?": "Dare to know," which he explained as having the courage to use your own understanding. (3) The motto of a society founded in London in 1787 to end the British slave trade, under a picture of a kneeling African man in chains: "Am I not a man and a brother?" For EACH source you choose, write two sentences: identify and describe the claim in your own words, then say what older idea or practice it argues against.',
    criteria: [
      'I identified the claim in each source.',
      'I described it in my own words, not by copying the quotation.',
      'I said what older idea or practice it argues against.',
      'I used two of the three sources.'
    ]
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Ideas Behind the Revolutions',
      subtitle: 'Checks Learning Targets 1 and 2 and Success Criteria 1 and 2.',
      cardDesc: 'One new Enlightenment idea, the old answer it challenged, how the ideas spread before the Atlantic revolutions, and how the people became the nation.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Answer in three steps. (1) Before the Enlightenment, most rulers said their power came from God, tradition, and birth. Choose ONE new Enlightenment idea: natural rights, the social contract, the separation of powers, or religious toleration. Explain what it said and name a writer who argued it. (2) Explain how that idea challenged the old answer. (3) Explain how Enlightenment ideas spread, using one example (books such as the Encyclopédie, salons, coffeehouses, or letters), and explain what it means that the ideas came before the revolutions that began in 1775, 1789, 1791, and 1810. (4) If a state belongs to its people, which people? Explain how "the people" came to mean the nation.',
      responseType: 'Checkpoint 1',
      terms: ['divine right', 'reason', 'evidence', 'empiricism', 'natural rights', 'social contract', 'consent', 'separation of powers', 'religious toleration', 'deism', 'Locke', 'Rousseau', 'Montesquieu', 'Voltaire', 'Calas', 'Encyclopédie', 'salon', 'print', 'came before', 'preceded', 'revolution', 'nation', 'nationalism'],
      focus: ['Explain one new idea and name a writer who argued it.', 'Explain how it challenged the old answer: God, tradition, and birth.', 'Explain how the ideas spread, and that they came before the revolutions.', 'Explain how "the people" came to mean the nation.']
    },
    {
      title: 'Checkpoint 2: What the Ideas Changed Over Time',
      subtitle: 'Checks Learning Target 3, Success Criterion 3, and Unit 5 Learning Objective B.',
      cardDesc: 'One reform movement, what drove it, how far it got by 1900, and what had still not changed.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how the Enlightenment affected societies over time, between 1750 and 1900. (1) Choose ONE reform movement: abolishing slavery, ending serfdom, widening the right to vote, or women\'s rights. (2) Explain how Enlightenment ideas, religious faith, or both pushed it forward. Use at least one specific piece of evidence, for example the 1787 antislavery society in London, Olaudah Equiano, Russia in 1861, France in 1848, Olympe de Gouges, Mary Wollstonecraft, or the Seneca Falls convention. (3) Explain what the movement had changed by 1900, with a date. (4) Explain one thing that had still not changed by 1900.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change',
      terms: ['reform movement', 'abolition', 'slavery', 'Quakers', 'Equiano', 'serfdom', 'serfs', 'suffrage', 'vote', 'women\'s rights', 'feminism', 'de Gouges', 'Wollstonecraft', 'Seneca Falls', 'Stanton', 'Mott', 'natural rights', 'religious', 'faith', 'continuity', 'change', '1900'],
      focus: ['Choose one reform movement and explain what drove it: ideas, faith, or both.', 'Explain what it had changed by 1900, with a date and a piece of evidence.', 'Explain one thing that had still not changed by 1900.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: By What Right?',
    task: 'Choose TWO cards. For each, decide what claim the source makes or what it shows about Enlightenment ideas and their effects. An object can make a claim too, without a single sentence of argument.',
    prompt: 'For EACH of your two cards: (1) say what kind of source it is, who made it, and when, (2) identify and describe the claim it makes, or what it shows, in your own words, using one detail you can see or read, and (3) name one thing the source cannot tell you. Finish with one sentence: do your two cards show a change, a continuity, or both?'
  };

  lesson.images = [
    {
      title: 'An Experiment at Home, 1769',
      alt: 'Black-and-white print of a candlelit room at night: a lecturer with long grey hair stands behind a glass globe with a bird inside, his hand on the pump; around the table a family and their friends watch, two young girls look upset, and a boy by the window holds a birdcage.',
      url: '../assets/images/topics/5-1/air-pump-experiment-green-1769.jpg',
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/359795',
      caption: 'A mezzotint (a kind of print) made by Valentine Green in London in 1769, copying Joseph Wright of Derby\'s painting of 1768. A traveling lecturer pumps the air out of a glass globe with a bird inside, to show that living things need air. Metropolitan Museum of Art.',
      prompt: 'NOTICE who is watching and how each person reacts. INFER what this scene claims about how people should find out what is true. Science lectures like this were shown to paying audiences. What can this print not tell you about how most people in 1769 learned about the world?'
    },
    {
      title: 'The Encyclopédie, Printed in Italy, 1758',
      alt: 'The title page of a large old printed book: ENCYCLOPÉDIE, OU DICTIONNAIRE RAISONNÉ DES SCIENCES, DES ARTS ET DES MÉTIERS, with the names Diderot and d\'Alembert, Tome Premier, a small engraving of classical figures, and A LUCQUES, M.DCC.LVIII at the bottom.',
      url: '../assets/images/topics/5-1/encyclopedie-title-lucca-1758.jpg',
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/716639',
      caption: 'The title page of volume 1 of the Encyclopédie\'s second edition, printed in Lucca, Italy, in 1758, while the first edition was still coming out in Paris. The title means "Encyclopedia, or a Dictionary of the Sciences, Arts, and Crafts, Explained by Reason." Metropolitan Museum of Art.',
      prompt: 'NOTICE the title and the place and date at the bottom (M.DCC.LVIII is 1758). INFER what it shows about how far Enlightenment ideas spread, and what the title claims about how knowledge should be organized. What can a title page not tell you about who read the book, or what they thought of it?'
    },
    {
      title: '"Am Not I a Man and a Brother," About 1820',
      alt: 'A small cream-colored pottery jug with a copper-colored rim; printed on its side in black, a man of African descent sits on a rock by the sea holding a chain, a sailing ship behind him, and the words AM NOT I A MAN AND A BROTHER.',
      url: '../assets/images/topics/5-1/abolitionist-jug-c1820.jpg',
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/841224',
      caption: 'A pottery jug made about 1820, printed with a man of African descent holding a chain and the motto first used in 1787 by the London society to end the British slave trade. By about 1820 the trade had been banned, and campaigners were working to end slavery itself. Abolitionists put the motto on everyday objects people used at home. Metropolitan Museum of Art.',
      prompt: 'NOTICE the words and the picture. INFER what claim the jug makes, and why someone would put it on a jug instead of in a book. The people who made and bought objects like this were mostly white Britons. What can the jug not tell you about what enslaved people themselves thought or did?'
    },
    {
      title: 'John Locke on Consent, 1689',
      label: 'Primary-source excerpt · John Locke, Second Treatise of Government, 1689, section 95',
      sourceText: [
        '“Men being ... by nature, all free, equal, and independent, no one can be put out of this estate, and subjected to the political power of another, without his own consent.”',
        '(“This estate” means this condition: being free and equal.)'
      ],
      caption: 'Published in 1689, just after the English Parliament replaced King James II. Locke had written most of it about ten years earlier, when some members of Parliament were trying to keep James from becoming king.',
      prompt: 'Identify Locke\'s claim and describe it in your own words. What older idea about where a ruler\'s power comes from is he arguing against? Who might Locke not have had in mind when he wrote "men"?'
    },
    {
      title: 'Mary Wollstonecraft Answers Rousseau, 1792',
      label: 'Primary-source excerpt · Mary Wollstonecraft, A Vindication of the Rights of Woman, 1792, chapter 4',
      sourceText: [
        '“‘Educate women like men,’ says Rousseau, ‘and the more they resemble our sex the less power will they have over us.’',
        'This is the very point I aim at. I do not wish them to have power over men; but over themselves.”'
      ],
      caption: 'Wollstonecraft quotes the Geneva-born writer Rousseau, who had argued that a woman\'s education should be planned around men, and then answers him.',
      prompt: 'Identify Wollstonecraft\'s claim and describe it in your own words. What does she mean by power "over themselves"? Whose argument is she answering, and how?'
    },
    {
      title: 'Seneca Falls, 1848',
      label: 'Primary-source excerpt · Declaration of Sentiments, Women\'s Rights Convention, Seneca Falls, New York, 1848',
      sourceText: [
        '“We hold these truths to be self-evident; that all men and women are created equal.”',
        '“He has never permitted her to exercise her inalienable right to the elective franchise.”'
      ],
      caption: 'The declaration copied the opening of the Declaration of Independence of 1776, which reads "all men are created equal," and added two words. "The elective franchise" means the right to vote; "he" means men, or the government men ran.',
      prompt: 'Which two words did the women at Seneca Falls add to the sentence from 1776? Describe the claim the declaration makes. Is it a change, a continuity, or both, compared with the Declaration of Independence?'
    }
  ];

})();
