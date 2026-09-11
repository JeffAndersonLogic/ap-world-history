/*
 * Teacher-only orchestration for Topic 2.1.
 * Shared content, images, checkpoints, and evidence remain sourced from
 * assets/data/lesson-2-1-silk-roads.js and lesson-2-1-renderer-config.js.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.1',
    date: 'Wednesday, September 16, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Silk Roads: Exchange Across Afro-Eurasia',
    subtitle: 'The road only works when a whole system works.',
    essentialQuestion: 'What made long-distance Silk Road exchange possible, and what happened because Afro-Eurasia became more connected?',
    apFocus: 'Causation + Economic Systems',
    endTarget: 'Students can explain at least two causes of Silk Road growth and at least two effects of exchange using specific evidence about infrastructure, intermediaries, commercial practices, goods, ideas, technology, cities, or disease.'
  },

  priorities: {
    must: [
      'Students understand that the Silk Roads were a NETWORK of routes, not one road.',
      'Students explain WHY long-distance trade expanded: infrastructure, intermediaries, state protection, and economic demand.',
      'Students distinguish causes from effects rather than listing facts.',
      'Students use specific evidence: caravanserais, pastoral nomads, luxury goods, paper/gunpowder, trading cities, or the Black Death.',
      'Students complete both cause and effect checkpoints.'
    ],
    should: [
      'Model the merchant-relay system: most merchants did not travel the entire route; goods moved through many hands.',
      'Connect caravanserais to the problem they solved: risk, resupply, information, and security.',
      'Show how states benefited from trade and therefore had reasons to protect routes and infrastructure.',
      'Frame connectivity as both opportunity and vulnerability.'
    ],
    could: [
      'Use the AP review video if retrieval is weak.',
      'Use the Evidence Lab for a second pass at cause-and-effect reasoning.',
      'Use BeInTheRoom as an extension if students finish early or for a later reinforcement day.'
    ]
  },

  flow: [
    { id: 'quiz', label: 'Unit 1 Quiz', range: '0–15', minutes: 15, teacher: 'Start cleanly and protect the time. No 2.1 content until the quiz is collected.', students: 'Complete the Unit 1 quiz.', slide: 1 },
    { id: 'frame', label: 'Reset + Frame', range: '15–20', minutes: 5, teacher: 'Reset the room and introduce the central problem of moving goods thousands of miles overland.', students: 'Shift from Unit 1 regional states to Unit 2 exchange networks.', slide: 2 },
    { id: 'map', label: 'Map', range: '20–27', minutes: 7, teacher: 'Trace the network and make geography do explanatory work.', students: 'Identify why Central Asia and route nodes mattered.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '27–37', minutes: 10, teacher: 'Students work independently; circulate and listen for cause/effect confusion.', students: 'Complete the required First & 10 reading/response.', slide: 6 },
    { id: 'causes', label: 'Content: Causes', range: '37–58', minutes: 21, teacher: 'Teach the system behind the road: infrastructure, intermediaries, protection, and commercial incentives.', students: 'Track what problem each cause solved.', slide: 7 },
    { id: 'check1', label: 'Checkpoint 1', range: '58–64', minutes: 6, teacher: 'Launch the causes checkpoint and confer only where reasoning is missing.', students: 'Explain two causes of Silk Road growth.', slide: 12 },
    { id: 'exchange', label: 'Content: Exchange', range: '64–76', minutes: 12, teacher: 'Shift from why the network worked to what moved through it.', students: 'Sort examples into goods, technology, beliefs, and disease.', slide: 13 },
    { id: 'effects', label: 'Content: Effects', range: '76–82', minutes: 6, teacher: 'Land cities, wealth, diffusion, and plague as effects of connectivity.', students: 'Connect movement to changes in societies.', slide: 16 },
    { id: 'check2', label: 'Checkpoint 2', range: '82–88', minutes: 6, teacher: 'Launch the effects checkpoint; look for explanation of change, not just naming examples.', students: 'Explain two effects using specific evidence.', slide: 18 },
    { id: 'close', label: 'Close', range: '88–90', minutes: 2, teacher: 'Land the connectivity thesis and bridge to the Mongols.', students: 'Leave with one sentence that captures opportunity and vulnerability.', slide: 19 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.1', url: '../unit-2/lesson-2-1-silk-roads.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1' },
    { label: 'Unit 2 eBook', url: '../ebook/unit-2.html' },
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
      title: 'The Road Only Works When a Whole System Works.',
      subtitle: 'The Silk Roads: Exchange Across Afro-Eurasia, c. 1200–1450',
      visual: { type: 'map' },
      notes: { minutes: 1, land: ['Unit 2 changes the scale. Unit 1 asked how regions built states; Unit 2 asks what happens when those regions become more connected.', 'The Silk Roads were not one road. They were a web of overland routes linking East Asia, Central Asia, Southwest Asia, and the Mediterranean.'], ask: 'What would have to be true before a merchant would risk sending valuable goods across thousands of miles?', listenFor: 'Safety, demand, roads/routes, shelter, guides, money/credit, stable states.' }
    },
    {
      phase: 'quiz', kind: 'prompt', eyebrow: 'Unit 1 Quiz · 15 Minutes',
      title: 'Finish Unit 1 before we open Unit 2.',
      bullets: ['Work independently', 'Submit when finished', 'Keep devices closed until directed'],
      footer: 'When the quiz is collected, we shift from regional states to exchange networks.',
      notes: { minutes: 15, land: ['Do not leak 2.1 teaching into the quiz window.'], ask: '', listenFor: '', avoid: 'Do not let quiz logistics consume the rest of the block.' }
    },
    {
      phase: 'frame', kind: 'question', eyebrow: 'The Problem',
      title: 'How do you move a luxury good across a continent without trucks, railroads, or a single government?',
      subtitle: 'That problem is the key to understanding the Silk Roads.',
      notes: { minutes: 2, land: ['Trade did not happen automatically. Long-distance exchange required infrastructure, security, intermediaries, and economic motivation.'], ask: 'Which obstacle is hardest: distance, danger, supplies, information, or trust?', listenFor: 'Any defensible answer that identifies a real long-distance trade problem.' }
    },
    {
      phase: 'frame', kind: 'process', eyebrow: 'Today’s Causal Frame',
      title: 'Causes → Exchange → Effects',
      steps: [
        { label: '1', text: 'Infrastructure + intermediaries + state support + demand' },
        { label: '2', text: 'Goods, technologies, religions, people, information' },
        { label: '3', text: 'Wealth, trading cities, cultural diffusion, disease' },
        { label: 'AP', text: 'Explain the mechanism connecting each step' }
      ],
      footer: 'A list is not causation. The connection is the reasoning.',
      notes: { minutes: 3, land: ['This frame organizes the entire lesson and both checkpoints.', 'Students should always be able to answer: what problem did this cause solve, or what change did this effect produce?'], ask: 'Which arrow requires the most explanation?', listenFor: 'The causal mechanism between cause and result.' }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Map · A Network, Not a Road',
      title: 'The Silk Roads crossed deserts, mountains, steppe, and political borders.',
      visual: { type: 'map' },
      footer: 'Trace China → Central Asia → Persia/Southwest Asia → Mediterranean.',
      notes: { minutes: 4, land: ['The routes clustered around usable corridors, oases, and trading cities.', 'Central Asia was not empty space between civilizations; it was the geographic middle of the system.'], ask: 'Where would merchants need the most local knowledge and help?', listenFor: 'Central Asia; deserts; mountain corridors; places between major settled states.' }
    },
    {
      phase: 'map', kind: 'grid', eyebrow: 'Geography Creates Roles',
      title: 'Different places solved different parts of the trade problem.',
      cards: [
        { title: 'Oasis Cities', text: 'Rest, markets, information, storage, and exchange points' },
        { title: 'Pastoral Nomads', text: 'Guides, intermediaries, protection, mobility, local knowledge' },
        { title: 'States', text: 'Security, roads, posts, infrastructure, taxation' },
        { title: 'Merchants', text: 'Capital, risk-taking, market knowledge, networks' },
        { title: 'Artisans', text: 'Production of high-value goods for export' },
        { title: 'Consumers', text: 'Demand that made the whole system profitable' }
      ],
      notes: { minutes: 3, land: ['The network worked because many actors benefited from it.', 'This is a system, not a heroic story of one merchant traveling from China to Europe.'], ask: 'Who has an incentive to keep the roads safe?', listenFor: 'States that tax trade; merchants; cities; intermediaries.' }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Roads of Silk and Exchange',
      subtitle: 'Read for what made the network possible and what moved along it.',
      bullets: ['Complete the three supported responses', 'Track causes separately from effects', 'Use the reading as evidence, not as copy-ready answers'],
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1' },
      notes: { minutes: 10, land: ['Students were assigned the Unit 2.1 eBook reading in advance; this is a short active-reading pass, not a second full content lesson.'], ask: 'Which sentence in your response actually explains a cause?', listenFor: 'Because / allowed / reduced / made possible / therefore.' }
    },
    {
      phase: 'causes', kind: 'question', eyebrow: 'Cause 1 · The Relay System',
      title: 'Most merchants did NOT travel the entire Silk Road.',
      subtitle: 'Goods passed through many hands, markets, and relay points.',
      notes: { minutes: 3, land: ['The First & 10 source explicitly notes that merchants rarely traveled the entire distance themselves.', 'Goods were handed off and marked up at successive relay points. This made long-distance exchange possible without requiring one person to master the whole route.'], ask: 'Why would a relay system be safer and more practical than one merchant traveling end to end?', listenFor: 'Local knowledge, shorter risk exposure, specialization, access to regional markets and languages.' }
    },
    {
      phase: 'causes', kind: 'comparison-image', eyebrow: 'Cause 2 · Infrastructure',
      title: 'Caravanserais turned dangerous distance into manageable stages.',
      left: { label: 'The Problem', text: 'Merchants and animals needed food, water, rest, information, shelter, and security.', visual: { type: 'map' } },
      right: { label: 'The Solution', text: 'Caravanserais provided places to rest, resupply, trade, share information, and reduce risk.', visual: { type: 'stable', key: 'contentDelivery' } },
      footer: 'Infrastructure lowered the cost and danger of long-distance trade.',
      notes: { minutes: 4, land: ['States and rulers had an economic reason to support this infrastructure because profitable trade could be taxed.', 'Do not reduce caravanserai to “hotel.” It was part of the commercial infrastructure of the route.'], ask: 'What problem did caravanserais solve that directly increased trade?', listenFor: 'Risk, distance between supplies, security, information, predictable stopping points.' }
    },
    {
      phase: 'causes', kind: 'grid', eyebrow: 'Cause 3 · Intermediaries',
      title: 'Pastoral nomads were in the middle of the commercial system.',
      cards: [
        { title: 'Mobility', text: 'They were adapted to movement across Central Asian steppe environments.' },
        { title: 'Local Knowledge', text: 'They knew terrain, routes, water, and seasonal conditions.' },
        { title: 'Protection', text: 'They could guard caravans or threaten them.' },
        { title: 'Guides', text: 'They connected merchants to unfamiliar landscapes and routes.' },
        { title: 'Intermediaries', text: 'They linked settled societies on either side of Central Asia.' },
        { title: 'Profit', text: 'Fees, tolls, trade, and service tied them directly to exchange.' }
      ],
      notes: { minutes: 4, land: ['The lesson source emphasizes that pastoral nomads were crucial intermediaries, not outsiders to the commercial world.', 'Their mobility made them useful precisely because settled merchants lacked that mobility and local knowledge.'], ask: 'Why does geography make pastoral nomads economically important?', listenFor: 'They occupied and understood the geographic middle of the network.' }
    },
    {
      phase: 'causes', kind: 'grid', eyebrow: 'Cause 4 · States + Commercial Practices',
      title: 'Trade expands when risk falls and transactions get easier.',
      cards: [
        { title: 'State Protection', text: 'Safer routes encourage merchants to move more goods.' },
        { title: 'Relay Stations', text: 'Posts and stopping points make long journeys manageable.' },
        { title: 'Money Economies', text: 'Portable currency supports commercial exchange.' },
        { title: 'Credit', text: 'Commercial practices reduce the need to move all wealth as coin.' },
        { title: 'Trading Cities', text: 'Kashgar and Samarkand grow as nodes in the network.' },
        { title: 'Demand', text: 'High-value luxury goods make long-distance transport worth the risk.' }
      ],
      notes: { minutes: 5, land: ['The CED-aligned lesson emphasizes caravanserais, forms of credit, money economies, and growing trading cities.', 'State protection matters because stability changes the merchant calculation of risk versus reward.'], ask: 'Which of these causes reduces risk? Which increases profit?', listenFor: 'Protection/infrastructure/credit reduce risk; demand and city markets increase profit.' }
    },
    {
      phase: 'causes', kind: 'process', eyebrow: 'Causation Model',
      title: 'Because caravanserais reduced risk and resupply problems, merchants could travel farther and more predictably.',
      steps: [
        { label: 'Cause', text: 'Caravanserais and route infrastructure' },
        { label: 'Mechanism', text: 'Reduced danger, uncertainty, and supply problems' },
        { label: 'Result', text: 'More practical long-distance exchange' },
        { label: 'Effect', text: 'More goods, ideas, and disease moved across Afro-Eurasia' }
      ],
      footer: 'Name the mechanism. That is the AP reasoning move.',
      notes: { minutes: 5, land: ['Use this as the model students imitate in Checkpoint 1.', 'A cause only becomes historical reasoning when they explain how it produced the outcome.'], ask: 'What word or phrase tells you the mechanism here?', listenFor: 'Reduced risk / reduced resupply problems / made travel more predictable.' }
    },
    {
      phase: 'check1', kind: 'action', eyebrow: 'Checkpoint 1 · 6 Minutes',
      title: 'Explain two causes of Silk Road growth.',
      subtitle: 'Use specific evidence such as state support, pastoral nomads, or caravanserais.',
      bullets: ['Name two factors', 'Explain how each supported long-distance exchange', 'Use causal language: because, which allowed, therefore, as a result'],
      action: { label: 'Open Topic 2.1', url: '../unit-2/lesson-2-1-silk-roads.html#modules' },
      notes: { minutes: 6, land: ['Look for mechanism, not just vocabulary.'], ask: 'What problem did that factor solve?', listenFor: 'A clear how/why connection between evidence and trade growth.', avoid: 'Do not accept “caravanserais helped trade” as complete reasoning.' }
    },
    {
      phase: 'exchange', kind: 'grid', eyebrow: 'What Moved?',
      title: 'The network carried more than silk.',
      cards: [
        { title: 'Luxury Goods', text: 'Silk, porcelain, spices, glassware, horses, precious metals' },
        { title: 'Technology', text: 'Paper, printing, gunpowder, magnetic compass' },
        { title: 'Religions', text: 'Buddhism and Islam moved with travelers, merchants, and communities' },
        { title: 'Information', text: 'Market knowledge, route conditions, geographic knowledge' },
        { title: 'People', text: 'Merchants, scholars, guides, travelers, craftspeople' },
        { title: 'Disease', text: 'Plague moved through the same connected system' }
      ],
      notes: { minutes: 4, land: ['The important move is from “things moved” to “movement changed societies.”', 'Do not get trapped in memorizing a shopping list of goods.'], ask: 'Which category would have the deepest long-term effects: goods, technology, beliefs, or disease?', listenFor: 'Any defended answer connected to historical change.' }
    },
    {
      phase: 'exchange', kind: 'comparison-image', eyebrow: 'Commercial Evidence',
      title: 'Demand and money economies powered the system.',
      left: { label: 'Network', text: 'Long-distance routes connected production centers and consumers across Afro-Eurasia.', visual: { type: 'evidence', index: 3 } },
      right: { label: 'Money Economy', text: 'Song paper money reflects a highly commercialized economy tied to demand for exchange.', visual: { type: 'evidence', index: 1 } },
      footer: 'Long-distance trade grows when people want what distant producers can supply.',
      notes: { minutes: 4, land: ['The lesson source uses paper money as evidence of the commercial economy surrounding Silk Road demand.', 'Be careful: paper money alone does not prove Silk Road trade volume. It supports a broader argument about commercial development.'], ask: 'What can this paper-money evidence support, and what can it NOT prove by itself?', listenFor: 'Supports commercialization/money economy; cannot alone prove route volume or direct trade flows.' }
    },
    {
      phase: 'exchange', kind: 'question', eyebrow: 'Cultural Diffusion',
      title: 'A trade route is also an information route.',
      subtitle: 'Paper, printing, gunpowder, Buddhism, Islam, and geographic knowledge moved with people across Afro-Eurasia.',
      notes: { minutes: 4, land: ['The First & 10 reading explicitly frames technology and religion as moving through the same networks as goods.', 'These transfers often happened gradually through travelers, merchants, and scholars rather than one planned “technology transfer.”'], ask: 'Why do commercial networks spread ideas even when nobody is trying to export a religion or technology?', listenFor: 'People carry knowledge and beliefs; repeated contact creates opportunities for adoption and adaptation.' }
    },
    {
      phase: 'effects', kind: 'grid', eyebrow: 'Effects of Connectivity',
      title: 'The same network produced prosperity and vulnerability.',
      cards: [
        { title: 'Trading Cities', text: 'Samarkand and Kashgar grew as powerful exchange nodes.' },
        { title: 'Wealth', text: 'States and cities gained from taxes, tolls, and commerce.' },
        { title: 'Urban Growth', text: 'Route nodes attracted merchants, scholars, and craftspeople.' },
        { title: 'Diffusion', text: 'Religions, technologies, and knowledge spread farther.' },
        { title: 'Interdependence', text: 'Distant societies became tied into shared commercial systems.' },
        { title: 'Disease', text: 'Connectivity also accelerated the movement of plague.' }
      ],
      notes: { minutes: 3, land: ['The AP-level point is tension: connection creates benefits and risks at the same time.'], ask: 'Which effect could be both positive and negative depending on perspective?', listenFor: 'Connectivity/interdependence/urban growth/diffusion.' }
    },
    {
      phase: 'effects', kind: 'contrast', eyebrow: 'The Harder Argument',
      title: 'Connectivity creates opportunity AND vulnerability.',
      left: { label: 'Opportunity', text: 'Trade, wealth, urban growth, technology transfer, religious and intellectual diffusion.' },
      right: { label: 'Vulnerability', text: 'The same routes also moved disruption and epidemic disease across long distances.' },
      footer: 'The Black Death makes the costs of connectivity impossible to ignore.',
      notes: { minutes: 3, land: ['The First & 10 reading uses the Black Death to force students beyond “trade is good.”', 'The same infrastructure that makes exchange efficient can also make disease movement efficient.'], ask: 'Why is plague an effect of connectivity rather than a separate story?', listenFor: 'Disease used the same movement networks as people and goods.' }
    },
    {
      phase: 'check2', kind: 'action', eyebrow: 'Checkpoint 2 · 6 Minutes',
      title: 'Explain two effects of Silk Road exchange.',
      subtitle: 'Use specific evidence such as trade goods, religions, technology, trading cities, or plague.',
      bullets: ['Identify two distinct effects', 'Use specific evidence', 'Explain how the effect changed a society or region'],
      action: { label: 'Open Topic 2.1', url: '../unit-2/lesson-2-1-silk-roads.html#modules' },
      notes: { minutes: 6, land: ['Look for change over time or change in a society, not a list of things that moved.'], ask: 'What changed because this moved?', listenFor: 'A specific social, economic, cultural, urban, or demographic consequence.' }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'The Unit 2 Idea',
      title: 'Connection Changes Everything.',
      subtitle: 'The Silk Roads created wealth, cities, diffusion, and vulnerability. Next: the Mongols make this old network operate on a new scale.',
      visual: { type: 'map' },
      notes: { minutes: 2, land: ['Bridge directly into Topic 2.2: the Mongols did not invent the Silk Roads; they intensified an already old exchange system.'], ask: 'If political stability makes trade easier, what might happen when one empire controls much of the overland route?', listenFor: 'Trade intensifies; movement becomes safer/faster/more systematic; exchange expands.' }
    }
  ]
};
