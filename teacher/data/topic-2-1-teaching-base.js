/*
 * Teacher-only orchestration for Topic 2.1.
 * Rebuilt around a visible AP economic causation spine:
 * demand + trade systems -> lower risk/cost -> expanded exchange -> cities and production grow.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    omits: {
      beready: 'Built and taught before the BeReady standard was added on 2026-09-22. Add one on the next revision of this deck.'
    },
    topic: '2.1',
    date: 'Thursday, September 17, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Silk Roads',
    subtitle: 'Demand + trade systems made overland exchange expand after 1200.',
    essentialQuestion: 'Why did Silk Roads trade grow after 1200, and what changed because it did?',
    apFocus: 'Causation + Economic Systems',
    endTarget: 'Students can explain how demand, caravanserai, credit, banking houses, paper money, and trading cities fit into one cause-and-effect chain.'
  },

  priorities: {
    must: [
      'Teach this as one economic argument, not a tour of interesting Silk Road facts.',
      'Anchor every slide to the causal chain: demand + systems lower risk/cost, which expands trade.',
      'Use caravanserai, bills of exchange, banking houses, and paper money as mechanisms, not vocabulary.',
      'Use Kashgar and Samarkand as evidence that trade networks create powerful urban nodes.',
      'Use porcelain, textiles, iron, and steel as evidence that demand changed production.'
    ],
    should: [
      'Return to the causal chain every few slides so students never lose the big picture.',
      'Keep Cinzel for big slide headlines only; explanatory text stays clean and readable.',
      'Preview Mongols only as tomorrow’s bridge, not as today’s main lesson.'
    ],
    could: [
      'Use the video only as review after the causal framework is clear.',
      'Save cultural diffusion and plague for later Unit 2 topics unless students ask.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'Read the brief and lock onto the causal chain.', students: 'Not projected.', slide: 1 },
    { id: 'launch', label: 'Launch the Argument', range: '0-6', minutes: 6, teacher: 'Tell students the lesson in one sentence before details.', students: 'Write the one-sentence argument.', slide: 2 },
    { id: 'targets', label: 'Targets + Key Concepts', range: '6-10', minutes: 4, teacher: 'Show what AP expects and what evidence proves it.', students: 'Identify the three big rocks.', slide: 3 },
    { id: 'problem', label: 'The Trade Problem', range: '10-16', minutes: 6, teacher: 'Make distance feel like a real economic problem.', students: 'Name risks merchants faced.', slide: 4 },
    { id: 'spine', label: 'Causal Spine', range: '16-21', minutes: 5, teacher: 'Build the causal chain visually.', students: 'Track cause -> mechanism -> effect.', slide: 5 },
    { id: 'demand', label: 'Big Rock 1: Demand', range: '21-31', minutes: 10, teacher: 'Explain why luxury goods were worth moving.', students: 'Connect demand to production.', slide: 6 },
    { id: 'systems', label: 'Big Rock 2: Trade Systems', range: '31-48', minutes: 17, teacher: 'Explain how each system lowers cost or risk.', students: 'Complete mechanism sentences.', slide: 7 },
    { id: 'cities', label: 'Big Rock 3: Cities', range: '48-60', minutes: 12, teacher: 'Make Kashgar and Samarkand meaningful evidence.', students: 'Explain why cities grew.', slide: 10 },
    { id: 'map', label: 'Visual Map Check', range: '60-66', minutes: 6, teacher: 'Use geography to reinforce nodes and routes.', students: 'Find why the middle matters.', slide: 11 },
    { id: 'checkpoint', label: 'Checkpoint Writing', range: '66-78', minutes: 12, teacher: 'Coach mechanism, not longer answers.', students: 'Write the AP explanation.', slide: 12 },
    { id: 'debrief', label: 'Debrief + Common Trap', range: '78-86', minutes: 8, teacher: 'Separate facts from reasoning.', students: 'Fix weak explanations.', slide: 13 },
    { id: 'close', label: 'Bridge to 2.2', range: '86-90', minutes: 4, teacher: 'End with one sentence and preview Mongols.', students: 'Say the lesson in one sentence.', slide: 14 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.1', url: '../unit-2/lesson-2-1-silk-roads.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1' },
    { label: 'Full Heimler Review', url: 'https://youtu.be/daiQ6aChKfk' },
    { label: 'Caravanserai Reconstruction', url: 'https://www.canva.com/d/gBexzatsmhMDKh4' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-1-slide',
    title: 'Topic 2.1 Presentation',
    file: 'present-topic-2-1.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Do not teach the road. Teach the system.',
      subtitle: 'Demand + better trade systems lowered risk and cost, so exchange expanded and cities and production grew.',
      notes: {
        minutes: 2,
        land: [
          'The story today is not: here are things on the Silk Road.',
          'The story is: after 1200, demand for luxury goods and improved commercial systems made long-distance exchange easier and more profitable.',
          'Everything today must serve that causal chain: demand, systems, cities, production.'
        ],
        ask: 'What is the single economic mechanism I am proving today?',
        listenFor: 'Systems reduce risk/cost, which expands trade.',
        avoid: 'Do not let Buddhism, plague, Marco Polo, or the Mongols become today’s main lesson.'
      }
    },
    {
      phase: 'launch', kind: 'hero', eyebrow: 'AP World History · Topic 2.1',
      title: 'The Silk Roads', subtitle: 'Why did trade grow after 1200?',
      visual: { type: 'map' },
      notes: {
        minutes: 3,
        land: [
          'Unit 1 studied regions. Unit 2 studies connections among regions.',
          'Today is an economic systems lesson. Students need to explain why exchange expanded after 1200.'
        ],
        ask: 'What would have to be true for goods to move thousands of miles overland?',
        listenFor: 'Demand, safety, money, rest stops, routes, merchants, cities.'
      }
    },
    {
      retelling: true, phase: 'launch', kind: 'process', eyebrow: 'The Lesson in One Chain',
      title: 'Demand + Systems -> Trade Growth',
      steps: [
        { label: 'DEMAND', text: 'Luxury goods are worth moving' },
        { label: 'SYSTEMS', text: 'Risk and cost go down' },
        { label: 'EXCHANGE', text: 'Volume and range increase' },
        { label: 'EFFECTS', text: 'Cities and production grow' }
      ],
      footer: 'This is the whole lesson. Every example fits here.',
      notes: {
        minutes: 3,
        land: [
          'Show students the full structure before any examples.',
          'Tell them they are not collecting facts. They are proving this chain.'
        ],
        ask: 'Which box explains WHY trade expands?',
        listenFor: 'Systems lower risk/cost; demand gives incentive.'
      }
    },
    {
      phase: 'targets', kind: 'grid', eyebrow: 'What Students Must Know',
      title: 'Three Big Rocks',
      cards: [
        { title: '1 · DEMAND', text: 'Luxury goods drove long-distance trade.' },
        { title: '2 · SYSTEMS', text: 'Caravanserai, credit, banking, paper money lowered risk.' },
        { title: '3 · EFFECTS', text: 'Trade cities and export production grew.' },
        { title: 'AP SKILL', text: 'Explain the mechanism, not just the term.' }
      ],
      notes: {
        minutes: 4,
        land: [
          'These match the three required AP key concepts for 2.1.',
          'The evidence set is concise: caravanserai, bills of exchange, banking houses, paper money, Kashgar, Samarkand, porcelain, textiles, iron, steel.'
        ],
        ask: 'Which of these is a cause? Which is an effect?',
        listenFor: 'Demand and systems are causes; cities and production are effects.'
      }
    },
    {
      phase: 'problem', kind: 'question', eyebrow: 'The Economic Problem',
      title: 'A luxury good is valuable only if it survives the journey.',
      subtitle: 'Distance creates risk. Risk creates cost. Cost limits trade.',
      notes: {
        minutes: 6,
        land: [
          'Start with the merchant problem: water, animals, theft, weather, language, storage, trust, currency, and information.',
          'The Silk Roads grew when systems developed that made this problem more manageable.'
        ],
        ask: 'What could make a merchant decide the journey is worth the risk?',
        listenFor: 'High profit, safer routes, rest stops, credit, trusted markets, cities.'
      }
    },
    {
      phase: 'spine', kind: 'process', eyebrow: 'Causation Spine',
      title: 'The AP Explanation Formula',
      steps: [
        { label: 'NAME', text: 'Caravanserai' },
        { label: 'FUNCTION', text: 'Rest, storage, water, safety' },
        { label: 'MECHANISM', text: 'Lowered risk and cost' },
        { label: 'RESULT', text: 'More long-distance trade' }
      ],
      footer: 'The third box is the reasoning students usually miss.',
      notes: {
        minutes: 5,
        land: [
          'Model this sentence: Caravanserai helped Silk Roads trade grow because they gave merchants predictable places to rest, resupply, protect goods, and exchange information, lowering the risk of long-distance travel.',
          'This formula works for credit, banking houses, and paper money too.'
        ],
        ask: 'What happens if an answer only names caravanserai?',
        listenFor: 'It lacks the mechanism.'
      }
    },
    {
      phase: 'demand', kind: 'image', eyebrow: 'Big Rock 1 · Demand',
      title: 'Luxury goods made distance worth it.',
      visual: {
        type: 'image',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jingdezhen%20blue%20and%20white%20plate%20Yuan%20period%20mid%2014th%20century.jpg',
        alt: 'Blue and white Jingdezhen porcelain plate from the Yuan dynasty, mid-1300s'
      },
      footer: 'Porcelain · textiles · silk · spices · iron · steel',
      notes: {
        minutes: 10,
        land: [
          'Luxury goods are high-value and portable, which makes long-distance trade worthwhile.',
          'AP evidence: demand increased in Afro-Eurasia; Chinese, Persian, and Indian artisans and merchants expanded production of textiles and porcelains for export; manufacture of iron and steel expanded in China.',
          'Do not just say goods moved. Say demand caused production and exchange to expand.'
        ],
        ask: 'Why would porcelain or silk be more likely to move long distance than grain?',
        listenFor: 'High value, portable, elite demand, profit margin.'
      }
    },
    {
      phase: 'systems', kind: 'embed', eyebrow: 'Big Rock 2 · Transportation Infrastructure',
      title: 'Caravanserai made distance manageable.',
      embed: {
        url: 'https://www.canva.com/design/DAHU8YGxw5k/view?embed',
        fallback: 'https://www.canva.com/d/gBexzatsmhMDKh4',
        label: 'Caravanserai reconstruction'
      },
      footer: 'Rest · water · animals · storage · safety · information',
      notes: {
        minutes: 7,
        land: [
          'Use the image as a checklist. Students should see the function: rest, resupply, animal care, protected storage, security, markets, and information.',
          'Caravanserai did not cause trade because they were buildings. They mattered because they reduced the practical risk and cost of moving goods.'
        ],
        ask: 'Which part of this scene lowers risk for merchants?',
        listenFor: 'Water, walls, guards, rooms, animals, other merchants, market activity.'
      }
    },
    {
      phase: 'systems', kind: 'grid', eyebrow: 'Big Rock 2 · Commercial Practices',
      title: 'Merchants also needed financial systems.',
      cards: [
        { title: 'BILLS OF EXCHANGE', text: 'A safer written promise of payment.' },
        { title: 'BANKING HOUSES', text: 'Institutions that handled money and credit.' },
        { title: 'PAPER MONEY', text: 'Portable currency for easier transactions.' },
        { title: 'MONEY ECONOMIES', text: 'More exchange through accepted currency.' }
      ],
      notes: {
        minutes: 7,
        land: [
          'The point is not financial vocabulary. The point is that merchants needed ways to trade without carrying all their wealth across dangerous routes.',
          'Credit and banking reduced the danger of robbery and made long-distance transactions more practical.'
        ],
        ask: 'Why is carrying paper or credit safer than carrying metal money?',
        listenFor: 'Less theft risk, easier transport, easier payment across distance.'
      }
    },
    {
      phase: 'systems', kind: 'process', eyebrow: 'Put the Cause Together',
      title: 'Demand alone is not enough.',
      steps: [
        { label: 'WANT', text: 'People want luxury goods' },
        { label: 'PROBLEM', text: 'Distance is risky and expensive' },
        { label: 'SOLUTION', text: 'Infrastructure + credit' },
        { label: 'OUTCOME', text: 'Trade expands' }
      ],
      notes: {
        minutes: 3,
        land: [
          'This is the moment to restate the big picture before moving into effects.',
          'Students should understand that growth required both demand and practical systems.'
        ],
        ask: 'Why would demand without systems not be enough?',
        listenFor: 'People may want goods, but merchants still need safe and profitable ways to move them.'
      }
    },
    {
      phase: 'cities', kind: 'image', eyebrow: 'Big Rock 3 · Trading Cities',
      title: 'Trade networks create powerful nodes.',
      visual: {
        type: 'image',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg',
        alt: 'Registan square in Samarkand'
      },
      footer: 'Kashgar and Samarkand are evidence, not trivia.',
      notes: {
        minutes: 8,
        land: [
          'Improved commercial practices expanded trade volume and geographic range. That promoted the growth of trading cities.',
          'Kashgar and Samarkand grew because they sat at strategic crossroads where merchants exchanged goods, money, animals, languages, and information.',
          'A trading city is not just a market. It becomes a service center, cultural meeting place, and source of tax revenue.'
        ],
        ask: 'Why does a city at a route junction become wealthier than a city away from the route?',
        listenFor: 'Traffic, services, taxes, merchants, storage, exchange, information.'
      }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Map Check',
      title: 'Follow the nodes, not just the line.',
      visual: { type: 'map' },
      footer: 'Central Asia matters because routes, cities, and intermediaries converged there.',
      notes: {
        minutes: 6,
        land: [
          'Do not trace every route. Stop at Central Asia and ask why cities there matter.',
          'Use the map to reinforce geographic range, trading-city growth, and the need for infrastructure.'
        ],
        ask: 'Where would you expect cities, inns, and markets to grow? Why?',
        listenFor: 'Junctions, oases, mountain passes, desert edges, places where merchants must stop.'
      }
    },
    {
      phase: 'checkpoint', kind: 'action', eyebrow: 'Checkpoint Writing',
      title: 'Explain why Silk Roads trade grew after 1200.',
      subtitle: 'Use two specific pieces of evidence and explain the mechanism for each.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-1-silk-roads.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Require the mechanism. A list of terms is not enough.',
          'Strong answer pattern: Evidence -> function -> reduced risk/cost -> expanded trade.'
        ],
        ask: 'Where is your “because” sentence?',
        listenFor: 'Because caravanserai/credit/banking/paper money made trade safer, easier, or more profitable.'
      }
    },
    {
      phase: 'debrief', kind: 'grid', eyebrow: 'Common Trap',
      title: 'Fact piles are not explanations.',
      cards: [
        { title: 'WEAK', text: 'Caravanserai, bills of exchange, and Samarkand helped trade.' },
        { title: 'BETTER', text: 'Caravanserai lowered travel risk by giving merchants rest and resupply points.' },
        { title: 'WEAK', text: 'Luxury goods moved on the Silk Roads.' },
        { title: 'BETTER', text: 'Demand for luxury goods encouraged expanded production and long-distance trade.' }
      ],
      notes: {
        minutes: 8,
        land: [
          'Have students revise one sentence from weak to better.',
          'The correction is not more detail. It is clearer reasoning.'
        ],
        ask: 'Which sentence proves cause and effect?',
        listenFor: 'The sentence with lowered, encouraged, expanded, reduced, increased, promoted.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.1 · Landing Sentence',
      title: 'Demand plus systems expanded exchange.',
      subtitle: 'After 1200, luxury demand and better commercial practices increased Silk Roads trade, helping cities and export production grow.',
      visual: { type: 'map' },
      notes: {
        minutes: 4,
        land: [
          'Students should leave with this exact argument.',
          'Bridge to 2.2: tomorrow, the Mongols matter because political control can make these networks safer, faster, and more connected.'
        ],
        ask: 'What happens if one empire controls much of this network?',
        listenFor: 'More safety, more trade, faster communication, wider exchange.'
      }
    }
  ]
};
