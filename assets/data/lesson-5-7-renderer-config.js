(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1.III.A",
      "theme": "Economic Systems",
      "text": "Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.III.B",
      "theme": "Economic Systems",
      "text": "The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance.",
      "illustrativeExamples": [
        "Hong Kong and Shanghai Banking Corporation (HSBC)",
        "Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo",
        "Stock markets",
        "Limited-liability corporations"
      ]
    },
    {
      "code": "KC-5.1",
      "theme": "Economic Systems",
      "text": "The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Consumer Economy',
    embedUrl: 'first-and-10-topic-5-7-economic-developments-and-innovations-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Free trade and industrial markets', detail: 'Western European economies increasingly challenged mercantilist restrictions with laissez-faire and free-trade arguments. Britain’s repeal of the Corn Laws in 1846 is a useful policy marker for this shift.' },
      { label: 'Transnational business and finance', detail: 'Industrial-scale enterprise required pooled capital, limited liability, stock markets, and banks capable of moving credit across borders. Institutions such as HSBC connected Asian commercial centres to British and global financial networks.' },
      { label: 'Mass production and consumer goods', detail: 'Improved manufacturing methods increased the volume and variety of textiles, household goods, tools, and other products while lowering many prices. Industrial capitalism therefore changed everyday consumption, not just factory ownership.' },
      { label: 'Standards of living: improvement with limits', detail: 'Over the 19th century, rising real incomes and cheaper goods improved material living standards for some workers and especially middle-class consumers. Those gains were uneven by class, region, gender, and imperial position, so the evidence supports a qualified rather than universal claim.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-debt-conversion-table.html',
    desc: "Negotiate the Ottoman Public Debt settlement in 1881 and decide how foreign creditors can gain confidence without taking control of domestic sovereignty."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'How Industrial Capitalism Scaled',
    intro: 'Topic 5.7 is a system-building problem. Explain how an economic idea, a financial institution, and improved manufacturing reinforced one another rather than treating free trade, finance, and consumer goods as unrelated facts.',
    steps: [
      { label: 'Begin with economic ideology', text: 'Explain how laissez-faire/free-trade ideas challenged mercantilist restrictions and widened markets for industrial producers.' },
      { label: 'Add financial infrastructure', text: 'Explain how limited liability, stock markets, banks, or transnational firms reduced risk and pooled enough capital for large industrial or commercial ventures.' },
      { label: 'Connect to production and consumption', text: 'Show how improved manufacturing increased output and reduced prices, expanding the availability and variety of consumer goods.' },
      { label: 'Qualify the living-standard effect', text: 'Explain that standards of living increased for some rather than all people. Identify a class, region, or period where benefits were limited or delayed.' }
    ],
    prompt: 'Build a causal chain from free-market ideology to finance/business institutions to industrial production and consumer goods. Explain one way standards of living improved and one reason the improvement was uneven.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Free Trade and Transnational Finance',
      subtitle: 'Checks Learning Targets 1–2 — economic ideology, business scale, and financial institutions.',
      cardDesc: 'Adam Smith, laissez-faire, Corn Laws, limited liability, stock markets, banking, and HSBC.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how free-trade and laissez-faire ideas challenged mercantilist economic policies. Use Adam Smith or the repeal of the Corn Laws as specific evidence. Then explain how TWO financial or business innovations—such as limited liability, stock markets, investment banking, HSBC, or another transnational firm—made larger industrial or global enterprise possible. Explain the mechanism for each innovation.',
      responseType: 'Checkpoint 1',
      terms: ['Adam Smith', 'laissez-faire', 'free trade', 'mercantilism', 'Corn Laws', 'limited liability', 'stock market', 'banking', 'HSBC', 'transnational business'],
      focus: ['Explain the ideological shift away from mercantilism.', 'Use two financial/business innovations.', 'Explain how each innovation reduced risk, pooled capital, or enabled cross-border enterprise.']
    },
    {
      title: 'Checkpoint 2: Industrial Capitalism and the Consumer',
      subtitle: 'Checks Learning Target 3 — living standards and consumer-goods availability.',
      cardDesc: 'Mass production, cheaper goods, greater variety, rising living standards for some, and uneven benefits.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how improved industrial manufacturing changed consumer life from 1750 to 1900. Use at least TWO specific examples of goods, industries, or production changes to show how manufactured products became more available, affordable, or varied. Then explain one way standards of living improved for some people and one important qualification showing why the improvement was not universal.',
      responseType: 'Checkpoint 2',
      skill: 'Causation and qualification',
      terms: ['industrial capitalism', 'mass production', 'consumer goods', 'availability', 'affordability', 'variety', 'standards of living', 'real wages', 'middle class', 'working class'],
      focus: ['Connect manufacturing improvements to cheaper or more abundant goods.', 'Explain a specific living-standard improvement.', 'Qualify who benefited, where, or when.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Build a claim about how economic ideology, finance, and industrial production changed economic life. Use at least two different kinds of evidence and include an effect on consumer goods or standards of living.'
  };

  lesson.images = [
    {
      title: 'Capital, firms and markets',
      url: '../assets/images/instructional-maps/topic-5-7.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-7.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of financial centres, exchanges and the networks between them.',
      prompt: 'NOTICE where the marked centres are and what they connect. INFER what a producer far from any of them is exposed to. What does a map of finance not show about who bears the risk?'
    },
    {
      title: 'Limited liability becomes law',
      label: 'Legal record · Britain, Limited Liability Act, 1855',
      sourceText: [
        'Shareholders’ losses were limited to their investment.',
        'Large ventures became less personally risky for investors.'
      ],
      caption: 'A statute of 1855 that changed what an investor stood to lose.',
      prompt: 'How could limited liability increase the amount of capital available to firms? What does the law not prove about who benefited?'
    },
    {
      title: 'Standard Oil as an octopus',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Standard_oil_octopus_loc_color.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Standard_oil_octopus_loc_color.jpg',
      caption: 'Udo Keppler in Puck, 1904, published two years before the federal antitrust suit against Standard Oil.',
      prompt: 'NOTICE what the tentacles are holding and what one of them is reaching towards. INFER what the cartoonist believed vertical integration had reached beyond the oil business. This was drawn after 1900: how does that change what it can be evidence for in this unit?'
    },
    {
      title: 'Transnational banking',
      label: 'Institutional record · HSBC founded 1865',
      sourceText: [
        'A bank organized finance between Asian ports and British markets.',
        'Credit moved through imperial and commercial networks.'
      ],
      caption: 'A bank founded in 1865 to move credit between Asian ports and British markets.',
      prompt: 'How did banking reduce barriers to long-distance business? What political context shaped where this finance could operate?'
    },
    {
      title: '“The Bosses of the Senate”, 1889',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg',
      caption: 'Joseph Keppler in Puck, 1889. The trusts are drawn as figures in the Senate chamber; the public entrance is marked closed.',
      prompt: 'NOTICE the relative size of the figures and what the two doors are labelled. INFER what claim the cartoonist is making about corporate scale and government. A cartoon is an accusation: what evidence would you need to test it?'
    }
  ];

})();
