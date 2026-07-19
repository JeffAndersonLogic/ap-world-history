(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = brandCss; document.head.appendChild(link);
  }
})();

window.BEHISTORICAL_LESSON = {
  meta: {
    course: 'AP WORLD HISTORY',
    unit: 'Unit 6: Consequences of Industrialization',
    topic: 'Topic 6.4',
    title: 'Global Economic Development',
    subtitle: 'Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },
  learningTargets: [
    {
      target: 'I can explain how environmental factors contributed to the development of the global economy from 1750 to 1900.',
      kc: 'KC-5.1.II.A',
      theme: 'Humans and the Environment'
    },
    {
      target: 'I can use specific evidence from Cotton production in Egypt and Rubber extraction in the Amazon and Congo to support a defensible historical claim.',
      kc: 'KC-5.1.II.A',
      theme: 'Humans and the Environment'
    },
    {
      target: 'I can explain variation across regions instead of treating global economic development as one uniform process.',
      kc: 'KC-5.1.II.A',
      theme: 'Humans and the Environment'
    }
  ],
  successCriteria: [
    {
      criteria: 'I accurately explain the relationship among Cotton production in Egypt, Rubber extraction in the Amazon and Congo, Palm oil in West Africa and the topic learning objective.',
      kc: 'KC-5.1.II.A'
    },
    {
      criteria: 'I distinguish description from analysis by explaining how or why each piece of evidence supports my claim.',
      kc: 'AP Historical Reasoning'
    },
    {
      criteria: 'I qualify my argument with a meaningful regional difference, limitation, or counterexample.',
      kc: 'AP Argumentation'
    }
  ],
  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.II.A',
      theme: 'Humans and the Environment',
      text: 'Demand for raw materials and food created export economies specializing in natural resources, foodstuffs, and industrial crops; profits were used to purchase finished goods.',
      illustrativeExamples: [
        'Cotton production in Egypt',
        'Rubber extraction in the Amazon and Congo',
        'Palm oil in West Africa',
        'Guano, meat, and diamond export economies'
      ]
    }
  ],
  stableImages: {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg'
  },
  lecture: {
    title: 'Global Economic Development: Power, Process, and Consequence',
    intro: 'Explain how environmental factors contributed to the development of the global economy from 1750 to 1900. This lesson connects institutional change to lived experience and asks you to compare processes rather than memorize a list.',
    videos: [],
    segments: [
      {
        title: 'The historical mechanism',
        bullets: [
          '**Start with the process:** Demand for raw materials and food created export economies specializing in natural resources, foodstuffs, and industrial crops; profits were used to purchase finished goods.',
          '**Track power:** Ask who could make rules, mobilize labor, control land, or redirect trade, and how that power changed from 1750 to 1900.',
          '**Anchor the pattern:** Cotton production in Egypt and Rubber extraction in the Amazon and Congo show how a global development took different institutional forms.'
        ],
        image: {
          title: 'Global Economic Development',
          caption: 'A visual anchor for Topic 6.4.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg'
        }
      },
      {
        title: 'Comparison across regions',
        bullets: [
          '**Case one:** Cotton production in Egypt reveals the role of policy, bargaining, and coercion.',
          '**Case two:** Rubber extraction in the Amazon and Congo shows that similar pressures could produce a different balance of state, company, and community power.',
          '**Comparison rule:** A meaningful comparison identifies a shared process and then explains why its form or result differed.'
        ],
        image: {
          title: 'Regional comparison',
          caption: 'Compare Cotton production in Egypt with Rubber extraction in the Amazon and Congo.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg'
        }
      },
      {
        title: 'From evidence to AP argument',
        bullets: [
          '**Use a third case:** Palm oil in West Africa can confirm, complicate, or limit your emerging claim.',
          '**Name the mechanism:** Link evidence with because, therefore, while, or although; do not leave the relationship implied.',
          '**Qualify the result:** Guano, meat, and diamond export economies reminds us that global patterns were uneven and changed over time.'
        ],
        image: {
          title: 'Argumentation',
          caption: 'Evidence becomes analysis when its relationship to a claim is explained.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg'
        }
      }
    ]
  },
  map: {
    title: 'Mapping Global Economic Development',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
    caption: 'Locate the regions connected to Cotton production in Egypt, Rubber extraction in the Amazon and Congo, Palm oil in West Africa, Guano, meat, and diamond export economies.',
    intro: 'Geography shaped access to resources, markets, transport routes, and state power. Use the map to connect location to historical process.',
    prompt: 'Which geographic relationship best helps explain global economic development, and what evidence supports your answer?',
    key: [
      {
        label: 'Cotton production in Egypt',
        detail: 'Use Cotton production in Egypt to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Rubber extraction in the Amazon and Congo',
        detail: 'Use Rubber extraction in the Amazon and Congo to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Palm oil in West Africa',
        detail: 'Use Palm oil in West Africa to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Guano, meat, and diamond export economies',
        detail: 'Use Guano, meat, and diamond export economies to connect a specific place to the topic learning objective.'
      }
    ]
  },
  first10: {
    title: 'First & 10: Global Economic Development',
    embedUrl: 'first-and-10-topic-6-4-global-economic-development-capture.html',
    note: 'Read the narrative, answer all three questions, build your feedback prompt, and return to the lesson path.'
  },
  evidenceLab: {
    title: 'Evidence Lab: Global Economic Development',
    intro: 'Select evidence for a defensible claim and explain its relevance.',
    task: 'Select one evidence card, explain what it reveals, and connect it to a defensible claim.',
    prompt: 'Which evidence most strongly supports a claim answering this objective: Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.',
    items: [
      {
        title: 'Cotton production in Egypt',
        detail: 'Cotton production in Egypt helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Rubber extraction in the Amazon and Congo',
        detail: 'Rubber extraction in the Amazon and Congo helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Palm oil in West Africa',
        detail: 'Palm oil in West Africa helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Guano, meat, and diamond export economies',
        detail: 'Guano, meat, and diamond export economies helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      }
    ]
  },
  primarySource: {
    title: 'Primary-Source Workshop: Global Economic Development',
    intro: 'The passages below are concise classroom adaptations based on period policies, contracts, speeches, and reports. Analyze perspective and historical situation before using them as evidence.',
    text: 'Adapted period claim: Supporters described global economic development as necessary for order, prosperity, security, or progress.<br><br>Adapted critical response: People affected by the policy argued that its costs and claimed benefits were distributed unequally.<br><br>Historical context: Cotton production in Egypt and Rubber extraction in the Amazon and Congo provide concrete settings in which to test those competing claims.',
    questions: [
      'Who benefits from the first claim, and how does that shape its language?',
      'What historical evidence would corroborate or challenge the critical response?',
      'How can the sources support a qualified answer to the learning objective?'
    ],
    prompt: 'Write one paragraph that uses a source claim and one specific historical example to answer: Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.'
  },
  beSurreal: {
    title: 'BeSurreal: The Global Economic Development Contradiction',
    desc: 'Use an imaginative analogy to expose a historical contradiction.',
    intro: 'Surreal thinking is useful when it clarifies causation rather than replacing evidence.',
    detail: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in Cotton production in Egypt and Rubber extraction in the Amazon and Congo.',
    text: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in Cotton production in Egypt and Rubber extraction in the Amazon and Congo.',
    prompt: 'Describe the machine, then explain in historically precise language what your analogy reveals about global economic development.'
  },
  skillBuilder: {
    label: 'Comparison and causation practice',
    title: 'Building an AP claim about Global Economic Development',
    intro: 'Move from evidence to reasoning in three deliberate steps.',
    steps: [
      {
        label: 'Make a claim',
        text: 'Answer the objective directly: Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.'
      },
      {
        label: 'Explain evidence',
        text: 'Use Cotton production in Egypt and Rubber extraction in the Amazon and Congo, explaining how each proves the claim.'
      },
      {
        label: 'Qualify',
        text: 'Use Palm oil in West Africa or Guano, meat, and diamond export economies to identify variation, limitation, or a competing effect.'
      }
    ],
    prompt: 'Write a defensible thesis that answers: Explain how environmental factors contributed to the development of the global economy from 1750 to 1900. Include a clear line of reasoning and a qualification.'
  },
  checkpoints: [
    {
      title: 'Checkpoint 1: Explain the Process',
      subtitle: 'Check core content and causal mechanism.',
      cardDesc: 'Use Cotton production in Egypt and Rubber extraction in the Amazon and Congo.',
      learningTargets: [
        'Explain the process behind global economic development.'
      ],
      successCriteria: [
        'Use two accurate examples and connect each to the claim.'
      ],
      prompt: 'Explain how Cotton production in Egypt and Rubber extraction in the Amazon and Congo illustrate the learning objective.',
      responseType: 'Checkpoint 1',
      terms: [
        'Cotton production in Egypt',
        'Rubber extraction in the Amazon and Congo',
        'Palm oil in West Africa',
        'Guano, meat, and diamond export economies'
      ],
      focus: [
        'Answer the objective',
        'Use specific evidence',
        'Explain the relationship'
      ]
    },
    {
      title: 'Checkpoint 2: Defend the Argument',
      subtitle: 'Check comparison, qualification, and significance.',
      cardDesc: 'Turn the full lesson into an AP-ready argument.',
      learningTargets: [
        'Defend a claim with evidence and reasoning.'
      ],
      successCriteria: [
        'State criteria, weigh evidence, and qualify the conclusion.'
      ],
      prompt: 'Develop an argument in response to: Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.',
      responseType: 'Checkpoint 2',
      terms: [
        'Cotton production in Egypt',
        'Rubber extraction in the Amazon and Congo',
        'Palm oil in West Africa',
        'Guano, meat, and diamond export economies'
      ],
      focus: [
        'Defensible thesis',
        'Two explained examples',
        'Meaningful qualification'
      ]
    }
  ],
  beInTheRoom: {
    url: '../beintheroom/unit-6/the-rubber-quota.html',
    desc: 'A concession company demands more rubber from a river community. Decide how land, labor, and trade should be organized when global demand collides with local survival.'
  },
  images: [
    {
      title: 'Cotton production in Egypt',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      caption: 'Cotton production in Egypt helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does Cotton production in Egypt support or complicate a claim about global economic development?'
    },
    {
      title: 'Rubber extraction in the Amazon and Congo',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      caption: 'Rubber extraction in the Amazon and Congo helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does Rubber extraction in the Amazon and Congo support or complicate a claim about global economic development?'
    },
    {
      title: 'Palm oil in West Africa',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg',
      caption: 'Palm oil in West Africa helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does Palm oil in West Africa support or complicate a claim about global economic development?'
    }
  ]
};
