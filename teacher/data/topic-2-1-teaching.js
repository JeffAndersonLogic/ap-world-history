/*
 * Teacher-only orchestration for Topic 2.1.
 *
 * Design rule: teacher view is dense; projected view is sparse.
 * Student-facing historical detail still lives in the normal 2.1 lesson,
 * First & 10, checkpoints, and evidence modules.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.1',
    date: 'Wednesday, September 16, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Silk Roads: Exchange Across Afro-Eurasia',
    subtitle: 'Connection is a system, not a road.',
    essentialQuestion: 'What made long-distance Silk Road exchange possible, and what happened because Afro-Eurasia became more connected?',
    apFocus: 'Causation + Economic Systems',
    endTarget: 'Students can explain causes and effects of Silk Road exchange with specific evidence and a clear causal mechanism.'
  },

  priorities: {
    must: [
      'Silk Roads = a network, not one road.',
      'Students explain WHY trade expanded, not merely name caravanserais, nomads, or states.',
      'Students distinguish causes from effects.',
      'Students use specific evidence in both checkpoints.',
      'Projected text stays sparse; the explanation comes from the teacher.'
    ],
    should: [
      'Use the relay-system story to explain how goods crossed enormous distances.',
      'Connect caravanserais to the problems they solved: distance, risk, supplies, information, and security.',
      'Make Central Asian pastoral peoples part of the system rather than background scenery.',
      'End on the tension: connectivity creates opportunity and vulnerability.'
    ],
    could: [
      'Use the full Heimler 2.1 review only if the class needs a later retrieval/review pass.',
      'Use Evidence Lab after class or on a reinforcement day.',
      'Use BeInTheRoom as an extension rather than forcing it into this block.'
    ]
  },

  flow: [
    { id: 'quiz', label: 'Unit 1 Quiz', range: '0–15', minutes: 15, teacher: 'Protect the quiz window.', students: 'Complete Unit 1 quiz.', slide: 1 },
    { id: 'frame', label: 'Frame the Problem', range: '15–21', minutes: 6, teacher: 'Make students feel the difficulty of overland trade before naming the solutions.', students: 'Identify the obstacles to long-distance exchange.', slide: 2 },
    { id: 'map', label: 'Map + Network', range: '21–28', minutes: 7, teacher: 'Trace the system, not every route.', students: 'See Central Asia as the geographic middle.', slide: 4 },
    { id: 'clip1', label: 'Clip: Traders', range: '28–30', minutes: 2, teacher: 'Use the clip to make relays and intermediaries concrete.', students: 'Watch for who actually moves goods.', slide: 5 },
    { id: 'first10', label: 'First & 10', range: '30–40', minutes: 10, teacher: 'Circulate; listen for cause/effect confusion.', students: 'Read and respond.', slide: 6 },
    { id: 'causes', label: 'Teach Causes', range: '40–58', minutes: 18, teacher: 'Explain relay systems, infrastructure, intermediaries, state protection, and demand.', students: 'Track the problem each cause solved.', slide: 7 },
    { id: 'check1', label: 'Checkpoint 1', range: '58–64', minutes: 6, teacher: 'Look for mechanism, not lists.', students: 'Explain two causes.', slide: 12 },
    { id: 'exchange', label: 'What Moved', range: '64–75', minutes: 11, teacher: 'Move from causes to exchange: goods, technology, beliefs, information.', students: 'Sort examples by what moved.', slide: 13 },
    { id: 'clip2', label: 'Clip: Buddhism', range: '75–77', minutes: 2, teacher: 'Use the clip as evidence that trade networks move ideas too.', students: 'Watch for how belief travels through merchant networks.', slide: 14 },
    { id: 'effects', label: 'Effects + Plague', range: '77–84', minutes: 7, teacher: 'Land cities, wealth, diffusion, and disease.', students: 'Explain how connectivity changes societies.', slide: 15 },
    { id: 'clip3', label: 'Clip: Disease', range: '84–86', minutes: 2, teacher: 'Use the final clip to sharpen opportunity vs vulnerability.', students: 'Watch for the network effect of disease.', slide: 17 },
    { id: 'check2', label: 'Checkpoint 2', range: '86–89', minutes: 3, teacher: 'Use as an exit-style response if time is tight.', students: 'Explain two effects.', slide: 18 },
    { id: 'close', label: 'Close', range: '89–90', minutes: 1, teacher: 'Land one sentence and bridge to the Mongols.', students: 'Leave with the Unit 2 thesis.', slide: 19 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.1', url: '../unit-2/lesson-2-1-silk-roads.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1' },
    { label: 'Full Heimler Review', url: 'https://youtu.be/daiQ6aChKfk' },
    { label: 'BeInTheRoom', url: '../beintheroom/unit-2/silk-road-merchant.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-1-slide',
    title: 'Topic 2.1 Presentation',
    file: 'present-topic-2-1.html'
  },

  slides: [
    {
      phase: 'open', kind: 'hero', eyebrow: 'AP World History · Topic 2.1',
      title: 'The Silk Roads', subtitle: 'Connection is a system, not a road.',
      visual: { type: 'map' },
      notes: {
        minutes: 1,
        land: ['Unit 1 focused on regional states. Unit 2 changes the scale to connections among those regions.', 'The Silk Roads were a network of routes, markets, stopping points, states, and intermediaries.'],
        ask: 'What has to exist before valuable goods can cross thousands of miles?',
        listenFor: 'Safety, demand, supplies, routes, guides, money, stable political conditions.'
      }
    },
    {
      phase: 'quiz', kind: 'prompt', eyebrow: 'Unit 1 Quiz',
      title: 'Finish Unit 1.', subtitle: 'Then we connect it.',
      notes: { minutes: 15, land: ['Protect the quiz window.'], avoid: 'Do not begin 2.1 content while students are still testing.' }
    },
    {
      phase: 'frame', kind: 'question', eyebrow: 'The Problem',
      title: '4,000 miles.', subtitle: 'No trucks. No railroad. No single government.',
      notes: {
        minutes: 3,
        land: ['Make the logistical problem feel real before giving students vocabulary.', 'Long-distance exchange requires systems that lower risk and make profit possible.'],
        ask: 'What would stop you from sending a $100,000 shipment across this world?',
        listenFor: 'Theft, water, food, animals, weather, language, information, trust, border crossings.'
      }
    },
    {
      phase: 'frame', kind: 'process', eyebrow: 'Today’s Logic',
      title: 'Risk ↓  →  Reach ↑  →  Exchange ↑',
      steps: [
        { label: 'CAUSE', text: 'Make trade safer or easier' },
        { label: 'NETWORK', text: 'More movement across distance' },
        { label: 'EFFECT', text: 'Societies change' }
      ],
      notes: {
        minutes: 3,
        land: ['This is the causal spine for the lesson.', 'Students do not need to copy it word for word; they need to understand the logic.'],
        ask: 'Which part of this chain is the mechanism?',
        listenFor: 'The way a cause reduces risk / makes exchange practical.'
      }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'A Network, Not a Road',
      title: 'East Asia ↔ Central Asia ↔ Southwest Asia ↔ Mediterranean',
      visual: { type: 'map' },
      footer: 'Look at the middle.',
      notes: {
        minutes: 7,
        land: ['Do not trace every line. Trace the big east-west system and stop in Central Asia.', 'Oases, steppe corridors, and trading cities mattered because geography forced movement through usable routes.', 'Samarkand and Kashgar are nodes, not random vocabulary.'],
        ask: 'Why does the middle of the map matter?',
        listenFor: 'Intermediaries, local knowledge, oasis cities, route control, exchange points.'
      }
    },
    {
      phase: 'clip1', kind: 'video', eyebrow: 'Watch · 1:05',
      title: 'Who actually moves the goods?',
      video: { youtubeId: 'vfe-eNq-Qyg', start: 211, end: 276, label: 'Crash Course: Nomads, Caravans, and Traders' },
      footer: 'Watch for relays, caravans, and intermediaries.',
      notes: {
        minutes: 2,
        land: ['This Crash Course section gives a fast visual model of nomads, caravans, and traders.', 'Frame it as background continuity: the network predates 1200; our AP period asks why exchange intensifies and what changes from c. 1200–1450.'],
        ask: 'Did one merchant usually carry a product from China all the way to Europe?',
        listenFor: 'No. Goods moved in stages through multiple merchants and intermediaries.',
        avoid: 'Do not let the clip substitute for the 1200–1450 explanation.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Read for two things.', subtitle: 'What made exchange possible? What changed because of it?',
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 10,
        land: ['Students already have detailed text in BeHistorical. The projection does not need to reproduce it.', 'Circulate and look specifically for cause/effect confusion.'],
        ask: 'Which sentence in your response actually explains WHY?',
        listenFor: 'Because, reduced, allowed, made possible, therefore.'
      }
    },
    {
      phase: 'causes', kind: 'question', eyebrow: 'Cause 1',
      title: 'Merchants work in relays.', subtitle: 'The product travels farther than the person.',
      notes: {
        minutes: 4,
        land: ['Most merchants did not travel the entire network.', 'Goods moved through successive markets and hands. Each merchant specialized in a smaller geographic zone.', 'Relay exchange lowers the knowledge, language, and travel burden placed on any one trader.'],
        ask: 'Why is a relay system more practical than one end-to-end merchant?',
        listenFor: 'Local knowledge, specialization, lower risk, regional contacts, languages, shorter journeys.'
      }
    },
    {
      phase: 'causes', kind: 'question', eyebrow: 'Cause 2',
      title: 'Distance needs infrastructure.', subtitle: 'Caravanserais turn one impossible journey into manageable stages.',
      notes: {
        minutes: 4,
        land: ['Caravanserais provided rest, water, food, shelter, security, markets, and information.', 'The important idea is not “roadside hotel.” The historical significance is that infrastructure lowers transaction and travel costs.', 'States and local rulers had an incentive to support trade infrastructure because commerce could be taxed.'],
        ask: 'What problem does a caravanserai solve?',
        listenFor: 'Resupply, security, rest, animals, information, predictable stopping points.'
      }
    },
    {
      phase: 'causes', kind: 'question', eyebrow: 'Cause 3',
      title: 'Who owns the middle?', subtitle: 'Pastoral peoples know the terrain settled merchants do not.',
      notes: {
        minutes: 4,
        land: ['Central Asian pastoral nomads were guides, guards, traders, translators, intermediaries, and sometimes threats.', 'Their mobility and geographic knowledge made them central to the network.', 'This corrects the common student assumption that nomads were peripheral to civilization and trade.'],
        ask: 'Why can mobility become an economic advantage?',
        listenFor: 'Knowledge of routes, seasonal conditions, water, animals, protection, contact between regions.'
      }
    },
    {
      phase: 'causes', kind: 'question', eyebrow: 'Cause 4',
      title: 'Safe trade is profitable.', subtitle: 'States protect routes because commerce produces wealth.',
      notes: {
        minutes: 3,
        land: ['Political stability and state protection change the merchant calculation of risk versus reward.', 'Commercial practices such as credit, paper money, and money economies make transactions easier.', 'Demand for high-value goods makes the risk of long-distance transport worthwhile.'],
        ask: 'Why would a ruler spend resources protecting merchants?',
        listenFor: 'Taxes, tolls, urban growth, political wealth, access to desired goods.'
      }
    },
    {
      phase: 'causes', kind: 'process', eyebrow: 'The AP Move',
      title: 'Cause ≠ vocabulary.',
      steps: [
        { label: 'NAME', text: 'Caravanserais' },
        { label: 'EXPLAIN', text: 'Reduced risk + resupply problems' },
        { label: 'CONNECT', text: 'Long-distance trade became more practical' }
      ],
      footer: 'The middle box earns the reasoning.',
      notes: {
        minutes: 3,
        land: ['Students tend to name factors and stop. The mechanism is the reasoning.', 'Model one sentence aloud: Because caravanserais reduced risk and resupply problems, merchants could travel farther and more predictably.'],
        ask: 'Which box is missing when an answer is only a list?',
        listenFor: 'Explain / mechanism.'
      }
    },
    {
      phase: 'check1', kind: 'action', eyebrow: 'Checkpoint 1',
      title: 'Why did Silk Road exchange grow?', subtitle: 'Two causes. Specific evidence. Explain how each one helped.',
      action: { label: 'Open Checkpoint 1', url: '../unit-2/lesson-2-1-silk-roads.html#modules' },
      notes: {
        minutes: 6,
        land: ['This is the first proof point.', 'Confer only on missing mechanism or weak evidence.'],
        ask: 'How did that factor actually increase exchange?',
        listenFor: 'Cause + evidence + mechanism.'
      }
    },
    {
      phase: 'exchange', kind: 'grid', eyebrow: 'What Moves?',
      title: 'Goods. Technology. Beliefs. Disease.',
      cards: [
        { title: 'GOODS', text: 'silk · porcelain · spices · horses' },
        { title: 'TECH', text: 'paper · printing · gunpowder · compass' },
        { title: 'BELIEF', text: 'Buddhism · Islam · Christianity' },
        { title: 'DISEASE', text: 'plague' }
      ],
      notes: {
        minutes: 5,
        land: ['Keep this visual sparse. Give the examples verbally.', 'The larger concept is diffusion: networks move non-material things as effectively as goods.', 'Paper, printing, gunpowder, and compass technologies spread outward from East Asia across Afro-Eurasia.'],
        ask: 'Which category is easiest to overlook when students think “trade”?',
        listenFor: 'Beliefs / technology / disease.'
      }
    },
    {
      phase: 'clip2', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'Trade routes move beliefs.',
      video: { youtubeId: 'vfe-eNq-Qyg', start: 400, end: 455, label: 'Crash Course: The Silk Road and Buddhism' },
      footer: 'Listen for the relationship between merchants and Buddhism.',
      notes: {
        minutes: 2,
        land: ['Use this as a visual example of cultural diffusion through merchant networks.', 'Then return immediately to the AP period: the pattern continues into c. 1200–1450 alongside Islam and other belief systems.'],
        ask: 'Why are merchants effective carriers of religion?',
        listenFor: 'Mobility, repeated contact, diaspora communities, shared institutions and networks.'
      }
    },
    {
      phase: 'effects', kind: 'question', eyebrow: 'Effects',
      title: 'Connection changes places.', subtitle: 'Cities grow. Wealth concentrates. Ideas spread.',
      notes: {
        minutes: 4,
        land: ['Trading cities such as Samarkand and Kashgar grew wealthy and cosmopolitan because they sat at key network nodes.', 'States and cities accumulated wealth through taxes, tolls, services, and commerce.', 'Cultural and technological diffusion changed societies far from the original source.'],
        ask: 'Why does a city at a trade node become more than a marketplace?',
        listenFor: 'People, languages, religions, technology, information, wealth, services.'
      }
    },
    {
      phase: 'effects', kind: 'question', eyebrow: 'The Cost of Connection',
      title: 'The network does not care what it carries.', subtitle: 'Silk can move. So can plague.',
      notes: {
        minutes: 3,
        land: ['The same connectivity that creates prosperity also creates vulnerability.', 'The Black Death is not a random add-on. It is evidence of the power of the network.', 'Avoid reducing plague transmission to a single simplistic route; emphasize interconnected movement across Eurasian exchange networks.'],
        ask: 'Why is disease an especially powerful example of a trade-network effect?',
        listenFor: 'It spreads through the same movement of people, animals, goods, and connected cities.'
      }
    },
    {
      phase: 'clip3', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'Disease follows connection.',
      video: { youtubeId: 'vfe-eNq-Qyg', start: 500, end: 562, label: 'Crash Course: The Silk Road and Disease' },
      footer: 'One network. Opposite outcomes.',
      notes: {
        minutes: 2,
        land: ['Use this as the final visual proof of the connectivity argument.', 'The lesson should end with tension, not “trade was good.”'],
        ask: 'Does stronger connectivity make societies safer or more vulnerable?',
        listenFor: 'Both — greater access and prosperity, but faster transmission of disruption and disease.'
      }
    },
    {
      phase: 'check2', kind: 'action', eyebrow: 'Checkpoint 2',
      title: 'What changed because of exchange?', subtitle: 'Two effects. Specific evidence. Explain the change.',
      action: { label: 'Open Checkpoint 2', url: '../unit-2/lesson-2-1-silk-roads.html#modules' },
      notes: {
        minutes: 3,
        land: ['If short on time, treat this as the exit response and finish in Canvas as needed.'],
        ask: 'What changed in a society because that moved?',
        listenFor: 'Effect + evidence + explanation of change.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.1 · The Argument',
      title: 'Connectivity creates opportunity — and vulnerability.',
      subtitle: 'Next: What happens when the Mongols control much of the network?',
      visual: { type: 'map' },
      notes: {
        minutes: 1,
        land: ['This is the sentence to carry into 2.2.', 'Mongol rule matters because political control can alter the risk environment of an existing exchange network.'],
        ask: 'If one empire controlled much of this map, what might happen to trade?',
        listenFor: 'More security, movement, exchange, diffusion — and potentially disease.'
      }
    }
  ]
};
