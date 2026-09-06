(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  if (!lesson.meta.canvasSubmissionNote) {
    lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  }
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1",
      "theme": "Economic Systems",
      "text": "The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.IV",
      "theme": "Technology and Innovation",
      "text": "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3",
      "theme": "Governance",
      "text": "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.",
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
      "theme": "Governance",
      "text": "Nationalism also became a major force shaping the historical development of states and empires.",
      "illustrativeExamples": []
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Write a CCOT claim about the Industrial Age, c. 1750–1900. Use at least one card for change and one for continuity; explain the mechanism that produced each pattern and weigh which mattered more.'
  };

  lesson.images = [
    {
      title: 'Powerloom weaving, 1835',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg',
      caption: 'Engraving of mechanized weaving under one roof, published in 1835. The change side of this topic, drawn at the time.',
      prompt: 'NOTICE the machinery and the scale. INFER what has changed about where cloth is made and by whom. What had NOT changed for most people in the world in 1835?'
    },
    {
      title: '“A Court for King Cholera”',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punch-A_Court_for_King_Cholera.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Punch-A_Court_for_King_Cholera.png',
      caption: 'Punch cartoon, 1852, on sanitation and slum housing in an industrial city.',
      prompt: 'NOTICE what the industrial city has and has not built for the people living in it. INFER whether this is evidence of change, of continuity in how the poor were housed, or of both.'
    },
    {
      title: 'The industrial world, c. 1900',
      url: '../assets/images/instructional-maps/topic-5-10.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-10.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of industrialized regions at the end of the period.',
      prompt: 'NOTICE how much of the map is industrialized and how much is not. INFER what that means for a claim that this period transformed the world. Which is the bigger story here, the change or its limits?'
    },
    {
      title: 'Hierarchy persists',
      label: 'Cross-time social reconstruction · c. 1750–1900',
      sourceText: [
        'Owners and workers remained unequal in wealth and bargaining power.',
        'Reform expanded rights without eliminating class divisions.'
      ],
      caption: 'The continuity card: reform expanded rights without ending the division it addressed.',
      prompt: 'How is this both continuity and change? What evidence would let you decide whether inequality grew or shrank?'
    },
    {
      title: 'Most people still work the land',
      label: 'Global secondary reconstruction · late nineteenth century',
      sourceText: [
        'Industrialization transformed selected regions first.',
        'Large parts of Asia, Africa, Latin America, and rural Europe remained agricultural.'
      ],
      caption: 'The card that sets the limit on every claim built from the others.',
      prompt: 'How does this card qualify a claim that industrialization transformed the whole world uniformly by 1900?'
    }
  ];

})();
