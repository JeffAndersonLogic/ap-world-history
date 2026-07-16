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
    topic: 'Topic 6.2',
    title: 'State Expansion',
    subtitle: 'Compare processes by which state power shifted in various parts of the world from 1750 to 1900.',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here — submit your final work in Canvas.'
  },
  learningTargets: [
    {
      target: 'I can compare processes by which state power shifted in various parts of the world from 1750 to 1900.',
      kc: 'KC-5.2.I.A',
      theme: 'Governance'
    },
    {
      target: 'I can use specific evidence from King Leopold II and the Belgian Congo and British and French rule in West Africa to support a defensible historical claim.',
      kc: 'KC-5.2.I.B',
      theme: 'Governance'
    },
    {
      target: 'I can explain variation across regions instead of treating state expansion as one uniform process.',
      kc: 'KC-5.2.II.B',
      theme: 'Governance'
    }
  ],
  successCriteria: [
    {
      criteria: 'I accurately explain the relationship among King Leopold II and the Belgian Congo, British and French rule in West Africa, Japanese expansion into East Asia and the topic learning objective.',
      kc: 'KC-5.2.I.A'
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
      code: 'KC-5.2.I.A',
      theme: 'Governance',
      text: 'States strengthened existing colonies and established direct control over territories previously held by non-state entities.',
      illustrativeExamples: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ]
    },
    {
      code: 'KC-5.2.I.B',
      theme: 'Governance',
      text: 'European states, the United States, and Japan acquired territories in Asia and the Pacific while older Spanish and Portuguese influence declined.',
      illustrativeExamples: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ]
    },
    {
      code: 'KC-5.2.I.C',
      theme: 'Governance',
      text: 'European states used warfare and diplomacy to establish empires in Africa.',
      illustrativeExamples: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ]
    },
    {
      code: 'KC-5.2.I.D',
      theme: 'Governance',
      text: 'Europeans established settler colonies in some parts of their empires.',
      illustrativeExamples: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ]
    },
    {
      code: 'KC-5.2.II.B',
      theme: 'Governance',
      text: 'The United States, Russia, and Japan expanded into neighboring territories.',
      illustrativeExamples: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ]
    }
  ],
  stableImages: {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg'
  },
  lecture: {
    title: 'State Expansion: Power, Process, and Consequence',
    intro: 'Compare processes by which state power shifted in various parts of the world from 1750 to 1900. This lesson connects institutional change to lived experience and asks you to compare processes rather than memorize a list.',
    videos: [],
    segments: [
      {
        title: 'The historical mechanism',
        bullets: [
          '**Start with the process:** States strengthened existing colonies and established direct control over territories previously held by non-state entities.',
          '**Track power:** Ask who could make rules, mobilize labor, control land, or redirect trade—and how that power changed from 1750 to 1900.',
          '**Anchor the pattern:** King Leopold II and the Belgian Congo and British and French rule in West Africa show how a global development took different institutional forms.'
        ],
        image: {
          title: 'State Expansion',
          caption: 'A visual anchor for Topic 6.2.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg'
        }
      },
      {
        title: 'Comparison across regions',
        bullets: [
          '**Case one:** King Leopold II and the Belgian Congo reveals the role of policy, bargaining, and coercion.',
          '**Case two:** British and French rule in West Africa shows that similar pressures could produce a different balance of state, company, and community power.',
          '**Comparison rule:** A meaningful comparison identifies a shared process and then explains why its form or result differed.'
        ],
        image: {
          title: 'Regional comparison',
          caption: 'Compare King Leopold II and the Belgian Congo with British and French rule in West Africa.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg'
        }
      },
      {
        title: 'From evidence to AP argument',
        bullets: [
          '**Use a third case:** Japanese expansion into East Asia can confirm, complicate, or limit your emerging claim.',
          '**Name the mechanism:** Link evidence with because, therefore, while, or although; do not leave the relationship implied.',
          '**Qualify the result:** Russian and United States continental expansion reminds us that global patterns were uneven and changed over time.'
        ],
        image: {
          title: 'Argumentation',
          caption: 'Evidence becomes analysis when its relationship to a claim is explained.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg'
        }
      }
    ]
  },
  map: {
    title: 'Mapping State Expansion',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
    caption: 'Locate the regions connected to King Leopold II and the Belgian Congo, British and French rule in West Africa, Japanese expansion into East Asia, Russian and United States continental expansion.',
    intro: 'Geography shaped access to resources, markets, transport routes, and state power. Use the map to connect location to historical process.',
    prompt: 'Which geographic relationship best helps explain state expansion, and what evidence supports your answer?',
    key: [
      {
        label: 'King Leopold II and the Belgian Congo',
        detail: 'Use King Leopold II and the Belgian Congo to connect a specific place to the topic learning objective.'
      },
      {
        label: 'British and French rule in West Africa',
        detail: 'Use British and French rule in West Africa to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Japanese expansion into East Asia',
        detail: 'Use Japanese expansion into East Asia to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Russian and United States continental expansion',
        detail: 'Use Russian and United States continental expansion to connect a specific place to the topic learning objective.'
      }
    ]
  },
  first10: {
    title: 'First & 10: State Expansion',
    embedUrl: 'first-and-10-topic-6-2-state-expansion-capture.html',
    note: 'Read the narrative, answer all three questions, build your feedback prompt, and return to the lesson path.'
  },
  evidenceLab: {
    title: 'Evidence Lab: State Expansion',
    intro: 'Select evidence for a defensible claim and explain its relevance.',
    task: 'Select one evidence card, explain what it reveals, and connect it to a defensible claim.',
    prompt: 'Which evidence most strongly supports a claim answering this objective: Compare processes by which state power shifted in various parts of the world from 1750 to 1900.',
    items: [
      {
        title: 'King Leopold II and the Belgian Congo',
        detail: 'King Leopold II and the Belgian Congo helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'British and French rule in West Africa',
        detail: 'British and French rule in West Africa helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Japanese expansion into East Asia',
        detail: 'Japanese expansion into East Asia helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Russian and United States continental expansion',
        detail: 'Russian and United States continental expansion helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      }
    ]
  },
  primarySource: {
    title: 'Primary-Source Workshop: State Expansion',
    intro: 'The passages below are concise classroom adaptations based on period policies, contracts, speeches, and reports. Analyze perspective and historical situation before using them as evidence.',
    text: 'Adapted period claim: Supporters described state expansion as necessary for order, prosperity, security, or progress.<br><br>Adapted critical response: People affected by the policy argued that its costs and claimed benefits were distributed unequally.<br><br>Historical context: King Leopold II and the Belgian Congo and British and French rule in West Africa provide concrete settings in which to test those competing claims.',
    questions: [
      'Who benefits from the first claim, and how does that shape its language?',
      'What historical evidence would corroborate or challenge the critical response?',
      'How can the sources support a qualified answer to the learning objective?'
    ],
    prompt: 'Write one paragraph that uses a source claim and one specific historical example to answer: Compare processes by which state power shifted in various parts of the world from 1750 to 1900.'
  },
  beSurreal: {
    title: 'BeSurreal: The State Expansion Contradiction',
    desc: 'Use an imaginative analogy to expose a historical contradiction.',
    intro: 'Surreal thinking is useful when it clarifies causation rather than replacing evidence.',
    detail: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in King Leopold II and the Belgian Congo and British and French rule in West Africa.',
    text: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in King Leopold II and the Belgian Congo and British and French rule in West Africa.',
    prompt: 'Describe the machine, then explain in historically precise language what your analogy reveals about state expansion.'
  },
  skillBuilder: {
    label: 'Comparison and causation practice',
    title: 'Building an AP claim about State Expansion',
    intro: 'Move from evidence to reasoning in three deliberate steps.',
    steps: [
      {
        label: 'Make a claim',
        text: 'Answer the objective directly: Compare processes by which state power shifted in various parts of the world from 1750 to 1900.'
      },
      {
        label: 'Explain evidence',
        text: 'Use King Leopold II and the Belgian Congo and British and French rule in West Africa, explaining how each proves the claim.'
      },
      {
        label: 'Qualify',
        text: 'Use Japanese expansion into East Asia or Russian and United States continental expansion to identify variation, limitation, or a competing effect.'
      }
    ],
    prompt: 'Write a defensible thesis that answers: Compare processes by which state power shifted in various parts of the world from 1750 to 1900. Include a clear line of reasoning and a qualification.'
  },
  checkpoints: [
    {
      title: 'Checkpoint 1: Explain the Process',
      subtitle: 'Check core content and causal mechanism.',
      cardDesc: 'Use King Leopold II and the Belgian Congo and British and French rule in West Africa.',
      learningTargets: [
        'Explain the process behind state expansion.'
      ],
      successCriteria: [
        'Use two accurate examples and connect each to the claim.'
      ],
      prompt: 'Explain how King Leopold II and the Belgian Congo and British and French rule in West Africa illustrate the learning objective.',
      responseType: 'Checkpoint 1',
      terms: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
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
      prompt: 'Develop an argument in response to: Compare processes by which state power shifted in various parts of the world from 1750 to 1900.',
      responseType: 'Checkpoint 2',
      terms: [
        'King Leopold II and the Belgian Congo',
        'British and French rule in West Africa',
        'Japanese expansion into East Asia',
        'Russian and United States continental expansion'
      ],
      focus: [
        'Defensible thesis',
        'Two explained examples',
        'Meaningful qualification'
      ]
    }
  ],
  beInTheRoom: {
    url: '../beintheroom/unit-6/the-flag-over-the-congo.html',
    desc: 'Leopold II’s private Congo regime has become an international scandal. Advise how sovereignty should change—and what meaningful control would require.'
  },
  images: [
    {
      title: 'King Leopold II and the Belgian Congo',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      caption: 'King Leopold II and the Belgian Congo helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does King Leopold II and the Belgian Congo support or complicate a claim about state expansion?'
    },
    {
      title: 'British and French rule in West Africa',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      caption: 'British and French rule in West Africa helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does British and French rule in West Africa support or complicate a claim about state expansion?'
    },
    {
      title: 'Japanese expansion into East Asia',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Africa_map_1910.jpg',
      caption: 'Japanese expansion into East Asia helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does Japanese expansion into East Asia support or complicate a claim about state expansion?'
    }
  ]
};
