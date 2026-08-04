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
    topic: 'Topic 6.5',
    title: 'Economic Imperialism',
    subtitle: 'Explain how economic factors contributed to the development of the global economy from 1750 to 1900.',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },
  learningTargets: [
    {
      target: 'I can explain how economic factors contributed to the development of the global economy from 1750 to 1900.',
      kc: 'KC-5.2.I.E',
      theme: 'Economic Systems'
    },
    {
      target: 'I can use specific evidence from British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires to support a defensible historical claim.',
      kc: 'KC-5.1.II.C',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain variation across regions instead of treating economic imperialism as one uniform process.',
      kc: 'KC-5.1.II.C',
      theme: 'Economic Systems'
    }
  ],
  successCriteria: [
    {
      criteria: 'I accurately explain the relationship among British and French pressure on China through the Opium Wars, British investment in the port of Buenos Aires, Cotton exports from South Asia and Egypt and the topic learning objective.',
      kc: 'KC-5.2.I.E'
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
      code: 'KC-5.2.I.E',
      theme: 'Economic Systems',
      text: 'Industrialized states and businesses practiced economic imperialism in Asia and Latin America.',
      illustrativeExamples: [
        'British and French pressure on China through the Opium Wars',
        'British investment in the port of Buenos Aires',
        'Cotton exports from South Asia and Egypt',
        'Palm oil and copper commodity chains'
      ]
    },
    {
      code: 'KC-5.1.II.C',
      theme: 'Economic Systems',
      text: 'Global commodity trade was organized to benefit merchants and companies in Europe and the United States.',
      illustrativeExamples: [
        'British and French pressure on China through the Opium Wars',
        'British investment in the port of Buenos Aires',
        'Cotton exports from South Asia and Egypt',
        'Palm oil and copper commodity chains'
      ]
    }
  ],
  stableImages: {
    map: '../assets/images/module-art/unit-6/topic-6-5/map.svg',
    first10: '../assets/images/module-art/unit-6/topic-6-5/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-6/topic-6-5/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-6/topic-6-5/besurreal.svg',
    skill: '../assets/images/module-art/unit-6/topic-6-5/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-6/topic-6-5/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-6/topic-6-5/evidence.svg',
    source: '../assets/images/module-art/unit-6/topic-6-5/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-6/topic-6-5/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-6/topic-6-5/checkpoint2.svg'
  },
  lecture: {
    title: 'Economic Imperialism: Power, Process, and Consequence',
    intro: 'Explain how economic factors contributed to the development of the global economy from 1750 to 1900. This lesson connects institutional change to lived experience and asks you to compare processes rather than memorize a list.',
    videos: [],
    segments: [
      {
        title: 'The historical mechanism',
        bullets: [
          '**Start with the process:** Industrialized states and businesses practiced economic imperialism in Asia and Latin America.',
          '**Track power:** Ask who could make rules, mobilize labor, control land, or redirect trade, and how that power changed from 1750 to 1900.',
          '**Anchor the pattern:** British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires show how a global development took different institutional forms.'
        ],
        image: {
          title: 'The port of Buenos Aires',
          caption: "British capital financed Argentina's docks and railways. Economic imperialism could direct an economy without formal colonial rule.",
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Buenos_Aires_Port.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buenos_Aires_Port.jpg'
        }
      },
      {
        title: 'Comparison across regions',
        bullets: [
          '**Case one:** British and French pressure on China through the Opium Wars reveals the role of policy, bargaining, and coercion.',
          '**Case two:** British investment in the port of Buenos Aires shows that similar pressures could produce a different balance of state, company, and community power.',
          '**Comparison rule:** A meaningful comparison identifies a shared process and then explains why its form or result differed.'
        ],
        image: {
          title: 'Regional comparison',
          caption: 'Compare British and French pressure on China through the Opium Wars with British investment in the port of Buenos Aires.',
          url: '',
          sourceUrl: ''
        }
      },
      {
        title: 'From evidence to AP argument',
        bullets: [
          '**Use a third case:** Cotton exports from South Asia and Egypt can confirm, complicate, or limit your emerging claim.',
          '**Name the mechanism:** Link evidence with because, therefore, while, or although; do not leave the relationship implied.',
          '**Qualify the result:** Palm oil and copper commodity chains reminds us that global patterns were uneven and changed over time.'
        ],
        image: {
          title: 'Argumentation',
          caption: 'Evidence becomes analysis when its relationship to a claim is explained.',
          url: '',
          sourceUrl: ''
        }
      }
    ]
  },
  map: {
    title: 'Mapping Economic Imperialism',
    url: '../assets/images/instructional-maps/topic-6-5.svg',
    sourceUrl: '../assets/images/instructional-maps/topic-6-5.svg',
    caption: 'Locate the regions connected to British and French pressure on China through the Opium Wars, British investment in the port of Buenos Aires, Cotton exports from South Asia and Egypt, Palm oil and copper commodity chains.',
    intro: 'Geography shaped access to resources, markets, transport routes, and state power. Use the map to connect location to historical process.',
    prompt: 'Which geographic relationship best helps explain economic imperialism, and what evidence supports your answer?',
    key: [
      {
        label: 'British and French pressure on China through the Opium Wars',
        detail: 'Use British and French pressure on China through the Opium Wars to connect a specific place to the topic learning objective.'
      },
      {
        label: 'British investment in the port of Buenos Aires',
        detail: 'Use British investment in the port of Buenos Aires to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Cotton exports from South Asia and Egypt',
        detail: 'Use Cotton exports from South Asia and Egypt to connect a specific place to the topic learning objective.'
      },
      {
        label: 'Palm oil and copper commodity chains',
        detail: 'Use Palm oil and copper commodity chains to connect a specific place to the topic learning objective.'
      }
    ]
  },
  first10: {
    title: 'First & 10: Economic Imperialism',
    embedUrl: 'first-and-10-topic-6-5-economic-imperialism-capture.html?v=response-id-fix-v1',
    note: 'Read the narrative, answer all three questions, build your feedback prompt, and return to the lesson path.'
  },
  evidenceLab: {
    title: 'Evidence Lab: Economic Imperialism',
    intro: 'Select evidence for a defensible claim and explain its relevance.',
    task: 'Select one evidence card, explain what it reveals, and connect it to a defensible claim.',
    prompt: 'Which evidence most strongly supports a claim answering this objective: Explain how economic factors contributed to the development of the global economy from 1750 to 1900.',
    items: [
      {
        title: 'British and French pressure on China through the Opium Wars',
        detail: 'British and French pressure on China through the Opium Wars helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'British investment in the port of Buenos Aires',
        detail: 'British investment in the port of Buenos Aires helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Cotton exports from South Asia and Egypt',
        detail: 'Cotton exports from South Asia and Egypt helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.'
      },
      {
        title: 'Palm oil and copper commodity chains',
        detail: 'Palm oil and copper commodity chains helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.'
      }
    ]
  },
  primarySource: {
    title: 'Primary-Source Workshop: Economic Imperialism',
    intro: 'The passages below are concise classroom adaptations based on period policies, contracts, speeches, and reports. Analyze perspective and historical situation before using them as evidence.',
    text: 'Adapted period claim: Supporters described economic imperialism as necessary for order, prosperity, security, or progress.<br><br>Adapted critical response: People affected by the policy argued that its costs and claimed benefits were distributed unequally.<br><br>Historical context: British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires provide concrete settings in which to test those competing claims.',
    questions: [
      'Who benefits from the first claim, and how does that shape its language?',
      'What historical evidence would corroborate or challenge the critical response?',
      'How can the sources support a qualified answer to the learning objective?'
    ],
    prompt: 'Write one paragraph that uses a source claim and one specific historical example to answer: Explain how economic factors contributed to the development of the global economy from 1750 to 1900.'
  },
  beSurreal: {
    title: 'BeSurreal: The Economic Imperialism Contradiction',
    desc: 'Use an imaginative analogy to expose a historical contradiction.',
    intro: 'Surreal thinking is useful when it clarifies causation rather than replacing evidence.',
    detail: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires.',
    text: 'Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires.',
    prompt: 'Describe the machine, then explain in historically precise language what your analogy reveals about economic imperialism.'
  },
  skillBuilder: {
    label: 'Comparison and causation practice',
    title: 'Building an AP claim about Economic Imperialism',
    intro: 'Move from evidence to reasoning in three deliberate steps.',
    steps: [
      {
        label: 'Make a claim',
        text: 'Answer the objective directly: Explain how economic factors contributed to the development of the global economy from 1750 to 1900.'
      },
      {
        label: 'Explain evidence',
        text: 'Use British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires, explaining how each proves the claim.'
      },
      {
        label: 'Qualify',
        text: 'Use Cotton exports from South Asia and Egypt or Palm oil and copper commodity chains to identify variation, limitation, or a competing effect.'
      }
    ],
    prompt: 'Write a defensible thesis that answers: Explain how economic factors contributed to the development of the global economy from 1750 to 1900. Include a clear line of reasoning and a qualification.'
  },
  checkpoints: [
    {
      title: 'Checkpoint 1: Explain the Process',
      subtitle: 'Check core content and causal mechanism.',
      cardDesc: 'Use British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires.',
      learningTargets: [
        'Explain the process behind economic imperialism.'
      ],
      successCriteria: [
        'Use two accurate examples and connect each to the claim.'
      ],
      prompt: 'Explain how British and French pressure on China through the Opium Wars and British investment in the port of Buenos Aires illustrate the learning objective.',
      responseType: 'Checkpoint 1',
      terms: [
        'British and French pressure on China through the Opium Wars',
        'British investment in the port of Buenos Aires',
        'Cotton exports from South Asia and Egypt',
        'Palm oil and copper commodity chains'
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
      prompt: 'Develop an argument in response to: Explain how economic factors contributed to the development of the global economy from 1750 to 1900.',
      responseType: 'Checkpoint 2',
      terms: [
        'British and French pressure on China through the Opium Wars',
        'British investment in the port of Buenos Aires',
        'Cotton exports from South Asia and Egypt',
        'Palm oil and copper commodity chains'
      ],
      focus: [
        'Defensible thesis',
        'Two explained examples',
        'Meaningful qualification'
      ]
    }
  ],
  beInTheRoom: {
    url: '../beintheroom/unit-6/the-customs-house-loan.html',
    desc: 'Argentina needs capital to expand its port and rail links. A British-led syndicate offers financing in exchange for revenue guarantees and commercial privileges.'
  },
  images: [
    {
      title: 'British and French pressure on China through the Opium Wars',
      url: '',
      sourceUrl: '',
      caption: 'British and French pressure on China through the Opium Wars helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does British and French pressure on China through the Opium Wars support or complicate a claim about economic imperialism?'
    },
    {
      title: 'British investment in the port of Buenos Aires',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Buenos_Aires_Port.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buenos_Aires_Port.jpg',
      caption: 'British investment in the port of Buenos Aires helps explain how institutions and local choices shaped this global pattern. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does British investment in the port of Buenos Aires support or complicate a claim about economic imperialism?'
    },
    {
      title: 'Cotton exports from South Asia and Egypt',
      url: '',
      sourceUrl: '',
      caption: 'Cotton exports from South Asia and Egypt helps explain how power and economic incentives turned a broad trend into a specific historical outcome. Use it to support a claim, then explain why the evidence proves the claim.',
      prompt: 'How does Cotton exports from South Asia and Egypt support or complicate a claim about economic imperialism?'
    }
  ]
};
