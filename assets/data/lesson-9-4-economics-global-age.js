(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = brandCss; document.head.appendChild(link);
  }
})();

window.BEHISTORICAL_LESSON = {
  meta: {
    course: 'AP WORLD HISTORY',
    unit: 'Unit 9: Globalization',
    topic: 'Topic 9.4',
    title: 'Economics in the Global Age',
    subtitle: 'Explain the continuities and changes in the global economy from 1900 to present.',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },
  learningTargets: [
    {
      target: 'I can explain the continuities and changes in the global economy from 1900 to present.',
      kc: 'Unit 9: Learning Objective D',
      theme: 'Economic Systems'
    },
    {
      target: 'I can use Deng-era economic reforms and Bangladesh garment manufacturing as evidence and explain how each supports a historical claim.',
      kc: 'KC-6.3.I.D',
      theme: 'Economic Systems'
    },
    {
      target: 'I can qualify an argument about economics in the global age with a meaningful continuity, variation, or limitation.',
      kc: 'KC-6.3.II.B',
      theme: 'Historical Reasoning'
    }
  ],
  successCriteria: [
    {
      criteria: 'I accurately explain Deng-era economic reforms, Bangladesh garment manufacturing, NAFTA and regional trade in relation to the learning objective.',
      kc: 'Unit 9: Learning Objective D'
    },
    {
      criteria: 'I explain how evidence proves my claim instead of listing examples.',
      kc: 'Evidence and Reasoning'
    },
    {
      criteria: 'I address a counterexample, limitation, or continuity that meaningfully qualifies the argument.',
      kc: 'Complexity'
    }
  ],
  collegeBoardKeyConcepts: [
    {
      code: 'Thematic Focus, Economic Systems (ECN)',
      theme: 'Economic Systems',
      text: 'As societies develop, they affect and are affected by the ways that they produce, exchange, and consume goods and services.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 9: Learning Objective D',
      theme: 'Learning Objective',
      text: 'Explain the continuities and changes in the global economy from 1900 to present.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3.I.D',
      theme: 'Economic Systems',
      text: 'In a trend accelerated by the end of the Cold War, many governments encouraged free-market economic policies and promoted economic liberalization in the late 20th century.',
      illustrativeExamples: [
        'The United States under Ronald Reagan',
        'Britain under Margaret Thatcher',
        'China under Deng Xiaoping',
        'Chile under Augusto Pinochet'
      ]
    },
    {
      code: 'KC-6.3.I.E',
      theme: 'Economic Systems',
      text: 'In the late 20th century, revolutions in information and communications technology led to the growth of knowledge economies in some regions, while industrial production and manufacturing were increasingly situated in Asia and Latin America.',
      illustrativeExamples: [
        'Knowledge economies: Finland, Japan, United States',
        'Manufacturing: Vietnam, Bangladesh, Mexico, Honduras'
      ]
    },
    {
      code: 'KC-6.3.II.B',
      theme: 'Economic Systems',
      text: 'Changing economic institutions, multinational corporations, and regional trade agreements reflected the spread of principles and practices associated with free-market economics throughout the world.',
      illustrativeExamples: [
        'WTO',
        'NAFTA',
        'ASEAN',
        'Nestlé',
        'Nissan',
        'Mahindra and Mahindra'
      ]
    }
  ],
  stableImages: {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png'
  },
  map: {
    title: 'Mapping Economics in the Global Age',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
    caption: 'Locate the regions tied to Deng-era economic reforms, Bangladesh garment manufacturing, NAFTA and regional trade, Multinational corporations.',
    intro: 'Global patterns are produced through specific places, routes, institutions, and unequal relationships. Use geography to test the scale of your claim.',
    prompt: 'Which geographic pattern best helps explain economics in the global age, and what evidence supports that conclusion?',
    notes: [
      'Deng-era economic reforms connects a local or regional development to a wider global process.',
      'Bangladesh garment manufacturing connects a local or regional development to a wider global process.',
      'NAFTA and regional trade connects a local or regional development to a wider global process.',
      'Multinational corporations connects a local or regional development to a wider global process.'
    ],
    key: [
      {
        label: 'Deng-era economic reforms',
        detail: 'Use Deng-era economic reforms to connect place, process, and consequence.'
      },
      {
        label: 'Bangladesh garment manufacturing',
        detail: 'Use Bangladesh garment manufacturing to connect place, process, and consequence.'
      },
      {
        label: 'NAFTA and regional trade',
        detail: 'Use NAFTA and regional trade to connect place, process, and consequence.'
      },
      {
        label: 'Multinational corporations',
        detail: 'Use Multinational corporations to connect place, process, and consequence.'
      }
    ]
  },
  first10: {
    title: 'First & 10: Economics in the Global Age',
    embedUrl: 'first-and-10-topic-9-4-economics-global-age-capture.html',
    note: 'Read the narrative, answer three AP-thinking questions, build your coach prompt, and return to Topic 9.4.'
  },
  lecture: {
    title: 'Economics in the Global Age: Global Patterns and Historical Mechanisms',
    intro: 'Explain the continuities and changes in the global economy from 1900 to present.',
    videos: [],
    segments: [
      {
        title: 'Economic Liberalization',
        bullets: [
          'Reagan and Thatcher reduced regulation, taxes, and state ownership while weakening some organized-labor protections.',
          'Deng Xiaoping opened special economic zones and encouraged market activity while the Chinese Communist Party retained political control.',
          'Pinochet’s Chile adopted market reforms under dictatorship, demonstrating that economic liberalization did not necessarily bring political liberalization.'
        ],
        image: {
          title: 'Economic Liberalization',
          caption: 'Evidence anchor 1 for Topic 9.4.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg'
        }
      },
      {
        title: 'The Global Division of Labor',
        bullets: [
          'Digital communication let firms coordinate production across many countries.',
          'Knowledge-intensive work concentrated in some high-income economies while labor-intensive manufacturing expanded in parts of Asia and Latin America.',
          'Workers gained jobs and export opportunities, but wages, safety, and bargaining power remained uneven.'
        ],
        image: {
          title: 'The Global Division of Labor',
          caption: 'Evidence anchor 2 for Topic 9.4.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png'
        }
      },
      {
        title: 'Institutions and Trade Agreements',
        bullets: [
          'The WTO promoted common trade rules and dispute settlement on a global scale.',
          'NAFTA linked Canada, Mexico, and the United States while ASEAN deepened regional economic cooperation in Southeast Asia.',
          'Trade agreements increased exchange but also exposed communities to competition and factory relocation.'
        ],
        image: {
          title: 'Institutions and Trade Agreements',
          caption: 'Evidence anchor 3 for Topic 9.4.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg'
        }
      },
      {
        title: 'Multinational Power and Continuity',
        bullets: [
          'Nestlé, Nissan, and Mahindra and Mahindra illustrate corporations operating production and markets across states.',
          'States still regulated currencies, labor, trade, and investment, so globalization did not erase government power.',
          'A strong continuity-and-change argument weighs new speed and scale against older patterns of unequal exchange and corporate profit.'
        ],
        image: {
          title: 'Multinational Power and Continuity',
          caption: 'Evidence anchor 4 for Topic 9.4.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png'
        }
      }
    ]
  },
  beSurreal: {
    title: 'BeSurreal: The Shirt with Twelve Passports',
    desc: 'Imagine tracing one shirt through cotton, design, finance, dyeing, assembly, shipping, advertising, and sale, each in a different country.',
    intro: 'Imagine tracing one shirt through cotton, design, finance, dyeing, assembly, shipping, advertising, and sale, each in a different country.',
    detail: 'Imagine tracing one shirt through cotton, design, finance, dyeing, assembly, shipping, advertising, and sale, each in a different country.',
    text: 'Imagine tracing one shirt through cotton, design, finance, dyeing, assembly, shipping, advertising, and sale, each in a different country.',
    prompt: 'What does the shirt reveal about the changed geography of production and the continuity of unequal bargaining power?'
  },
  skillBuilder: {
    title: 'AP Skill Builder: Economics in the Global Age',
    label: 'Evidence, causation, and qualification',
    intro: 'Build the argument deliberately: claim, evidence mechanism, then qualification.',
    steps: [
      {
        label: 'Claim',
        text: 'Answer the objective directly: Explain the continuities and changes in the global economy from 1900 to present.'
      },
      {
        label: 'Evidence mechanism',
        text: 'Use Deng-era economic reforms and Bangladesh garment manufacturing; explain how each proves the claim.'
      },
      {
        label: 'Qualification',
        text: 'Use NAFTA and regional trade or Multinational corporations to identify a limit, variation, continuity, or counterargument.'
      }
    ],
    prompt: 'Write a defensible thesis answering: Explain the continuities and changes in the global economy from 1900 to present. Include a line of reasoning and a meaningful qualification.'
  },
  checkpoints: [
    {
      title: 'Checkpoint 1: Explain the Pattern',
      subtitle: 'Checks core content and evidence use.',
      cardDesc: 'Connect Deng-era economic reforms and Bangladesh garment manufacturing to the learning objective.',
      learningTargets: [
        'Explain the core process in Topic 9.4.'
      ],
      successCriteria: [
        'Use two accurate examples and explain the relationship.'
      ],
      prompt: 'Explain how Deng-era economic reforms and Bangladesh garment manufacturing support an answer to this objective: Explain the continuities and changes in the global economy from 1900 to present.',
      responseType: 'Checkpoint 1',
      terms: [
        'Deng-era economic reforms',
        'Bangladesh garment manufacturing',
        'NAFTA and regional trade',
        'Multinational corporations'
      ],
      focus: [
        'Answer the objective',
        'Use specific evidence',
        'Explain how the evidence proves the claim'
      ]
    },
    {
      title: 'Checkpoint 2: Defend and Qualify',
      subtitle: 'Checks the complete Topic argument.',
      cardDesc: 'Develop a defensible, qualified AP argument.',
      learningTargets: [
        'Explain the continuities and changes in the global economy from 1900 to present.'
      ],
      successCriteria: [
        'State a claim, explain evidence, and qualify the conclusion.'
      ],
      prompt: 'Develop and qualify an argument in response to: Explain the continuities and changes in the global economy from 1900 to present.',
      responseType: 'Checkpoint 2',
      terms: [
        'Deng-era economic reforms',
        'Bangladesh garment manufacturing',
        'NAFTA and regional trade',
        'Multinational corporations'
      ],
      focus: [
        'Defensible thesis',
        'Two explained examples',
        'Meaningful qualification or counterargument'
      ]
    }
  ],
  evidenceLab: {
    title: 'Evidence Lab: Economics in the Global Age',
    task: 'Select one evidence card and explain what it reveals, what it cannot prove alone, and how it supports a claim.',
    intro: 'Evidence becomes useful when its relevance and limitation are explained.',
    prompt: 'Which evidence best supports a defensible answer to: Explain the continuities and changes in the global economy from 1900 to present.'
  },
  images: [
    {
      title: 'Economic Liberalization',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
      caption: 'Reagan and Thatcher reduced regulation, taxes, and state ownership while weakening some organized-labor protections.',
      prompt: 'How does this evidence support or qualify a claim about economics in the global age?'
    },
    {
      title: 'The Global Division of Labor',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      caption: 'Digital communication let firms coordinate production across many countries.',
      prompt: 'How does this evidence support or qualify a claim about economics in the global age?'
    },
    {
      title: 'Institutions and Trade Agreements',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      caption: 'The WTO promoted common trade rules and dispute settlement on a global scale.',
      prompt: 'How does this evidence support or qualify a claim about economics in the global age?'
    }
  ],
  primarySource: {
    title: 'Primary Source: Structural Adjustment Agreement, classroom adaptation',
    intro: 'A debtor government agrees to devalue its currency, reduce subsidies, sell selected state enterprises, and open markets in exchange for emergency credit. Supporters predict efficiency and export growth; critics warn that immediate costs will fall on workers and consumers.',
    text: 'A debtor government agrees to devalue its currency, reduce subsidies, sell selected state enterprises, and open markets in exchange for emergency credit. Supporters predict efficiency and export growth; critics warn that immediate costs will fall on workers and consumers.',
    questions: [
      'What conditions shaped the government’s bargaining power?',
      'Who would likely support and oppose these terms?',
      'How can this source demonstrate both change and continuity in the global economy?'
    ],
    prompt: 'Use the source and one outside example to answer the Topic 9.4 learning objective.'
  },
  beInTheRoom: {
    url: '../beintheroom/unit-9/structural-adjustment-cabinet.html',
    desc: 'A debt and currency crisis has emptied foreign-exchange reserves. International lenders offer emergency credit if the government devalues, cuts subsidies, and restructures state enterprises.'
  }
};
