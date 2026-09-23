/*
 * Topic 2.5 canonical Teaching OS source.
 * Modeled on Topic 2.1: one visible AP argument, three Big Rocks, repeated mechanism,
 * lean projected copy, and teacher-only intelligence.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.5',
    minutes: 90,
    title: 'Cultural Consequences of Connectivity',
    subtitle: 'Trade networks moved more than goods. They changed culture, cities, and knowledge.',
    essentialQuestion: 'How did intensified exchange networks change cultures, cities, and knowledge across Afro-Eurasia from c. 1200 to c. 1450?',
    apFocus: 'Cultural Developments + Causation + Continuity and Change',
    endTarget: 'Students can explain three consequences of intensified exchange: cultural and technological diffusion, changing urban fortunes, and the growth of written travel accounts.'
  },

  priorities: {
    must: [
      'Teach this as three consequences of connectivity, not a list of things that spread.',
      'Combine cultural and technological diffusion into one Big Rock because both belong to KC-3.1.III.D.',
      'Make the mechanism visible: repeated contact -> transmission -> adoption/adaptation -> consequence.',
      'Teach urbanization with variation: expanding networks could help cities grow, but war, route shifts, or political disruption could contribute to decline.',
      'Use Ibn Battuta, Marco Polo, and Margery Kempe as evidence that intensified networks produced more written travel accounts.'
    ],
    should: [
      'Return to the three Big Rocks every few slides so students keep the CED structure in view.',
      'Keep projected copy sparse; the richer explanation belongs in Teacher Intelligence.',
      'Use images as historical evidence, not decoration: ask what each visual can and cannot prove.',
      'Keep Topic 2.6 separate: crops and pathogens are environmental consequences, not today\'s cultural story.'
    ],
    could: [
      'Use the full Heimler 2.5 review after the three-part framework is clear.',
      'Use the BeInTheRoom Silk Road Scholar activity as extension or reinforcement.',
      'Use the Evidence Lab if time allows after the checkpoint.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'Lock onto the three consequences and the diffusion mechanism.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve Topic 2.4 and bridge to what else travels.', students: 'Answer from memory.', slide: 2 },
    { id: 'launch', label: 'Launch the Consequence Story', range: '4-9', minutes: 5, teacher: 'Show the whole argument before examples.', students: 'Write the three-part frame.', slide: 3 },
    { id: 'targets', label: 'Three Big Rocks', range: '9-12', minutes: 3, teacher: 'Name the three CED developments.', students: 'Sort examples into the three rocks.', slide: 5 },
    { id: 'problem', label: 'What Else Travels?', range: '12-18', minutes: 6, teacher: 'Shift from cargo to contact.', students: 'Predict non-economic consequences.', slide: 6 },
    { id: 'mechanism', label: 'Diffusion Mechanism', range: '18-24', minutes: 6, teacher: 'Model contact -> transmission -> adoption -> consequence.', students: 'Track mechanism, not vocabulary.', slide: 7 },
    { id: 'diffusion', label: 'Big Rock 1: Diffusion', range: '24-43', minutes: 19, teacher: 'Use beliefs and technologies as two forms of the same process.', students: 'Explain one cultural and one technological example.', slide: 8 },
    { id: 'cities', label: 'Big Rock 2: Cities', range: '43-59', minutes: 16, teacher: 'Teach urban growth and decline as variation.', students: 'Explain why a network node can rise or fall.', slide: 11 },
    { id: 'travelers', label: 'Big Rock 3: Travelers', range: '59-69', minutes: 10, teacher: 'Turn travel writing into evidence of connectivity.', students: 'Use a named traveler as evidence.', slide: 13 },
    { id: 'map', label: 'Map the Movement', range: '69-75', minutes: 6, teacher: 'Trace movement rather than memorizing lines.', students: 'Connect one example to a network.', slide: 14 },
    { id: 'checkpoint', label: 'Checkpoint Writing', range: '75-84', minutes: 9, teacher: 'Coach mechanism and evidence.', students: 'Explain one intellectual or cultural effect.', slide: 15 },
    { id: 'debrief', label: 'Common Traps', range: '84-88', minutes: 4, teacher: 'Repair vague diffusion statements.', students: 'Upgrade one weak sentence.', slide: 16 },
    { id: 'close', label: 'Landing Sentence', range: '88-90', minutes: 2, teacher: 'Land the CED answer and bridge to environmental effects.', students: 'State the three-part answer.', slide: 17 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.5', url: '../unit-2/lesson-2-5-cultural-consequences.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-5-cultural-consequences-capture.html?v=cargo-v1' },
    { label: 'BeInTheRoom: Silk Road Scholar', url: '../beintheroom/unit-2/silk-road-scholar.html' },
    { label: 'Deep Reading', url: '../unit-2/deep-reading-topic-2-5-cultural-consequences.html' },
    { label: 'Heimler 2.5 Review', url: 'https://youtu.be/buccc2fFw4U' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-5-slide',
    title: 'Topic 2.5 Presentation',
    file: 'present-topic-2-5.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Do not teach the souvenirs. Teach what connectivity changes.',
      subtitle: 'Networks increase contact. Contact moves beliefs and technologies, reshapes city fortunes, and produces new written knowledge about distant societies.',
      notes: {
        minutes: 2,
        land: [
          'Topic 2.5 is an effects lesson. The network mechanics were built in 2.1-2.4; now ask what deeper contact does to societies.',
          'The whole lesson fits three CED developments: diffusion, city fortunes, and travelers.',
          'Every named example must prove one of those three claims.'
        ],
        ask: 'What are the three consequences I am proving today?',
        listenFor: 'Diffusion, changing cities, travel accounts.',
        avoid: 'Do not drift into crops and plague; those belong to Topic 2.6.'
      }
    },
    {
      phase: 'beready', kind: 'process', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the network story back from memory.',
      subtitle: 'Short answers are enough. Retrieve first; we will build from them.',
      steps: [
        { label: 'SAHARA', text: 'What made crossing the Sahara practical at a larger scale?' },
        { label: 'MALI', text: 'How did Mali profit from trade and also help sustain it?' },
        { label: 'NETWORKS', text: 'Name the three networks Unit 2 has studied so far.' },
        { label: 'BRIDGE', text: 'Merchants paid to carry goods. What else traveled with them for free?' }
      ],
      footer: 'Retrieve -> connect -> enter the new problem.',
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast verbal answers and do not reteach Topic 2.4.',
          'Accept brief evidence: camel saddles and caravans; Mali taxing and protecting trade; Silk Roads, Indian Ocean, trans-Saharan.'
        ],
        ask: 'If a merchant crosses three cultures to sell cloth, what comes home with him besides money?',
        listenFor: 'Religion, language, stories, technologies, knowledge, people.',
        ap: 'Retrieval + contextualization: the networks students already know are the setting for today\'s consequences.'
      }
    },
    {
      phase: 'launch', kind: 'hero', eyebrow: 'AP World History · Topic 2.5',
      title: 'What Traveled Without Paying Freight?',
      subtitle: 'Goods moved through networks. So did beliefs, technologies, people, and information.',
      visual: { type: 'map' },
      notes: {
        minutes: 3,
        land: [
          'Students already know the Silk Roads, Indian Ocean, and trans-Saharan routes.',
          'The question changes today: not why the networks grew, but what intensified contact changed.'
        ],
        ask: 'If merchants can move through these routes, what can travel with them besides cargo?',
        listenFor: 'Religion, language, technology, stories, knowledge, people.'
      }
    },
    {
      retelling: true, phase: 'launch', kind: 'process', eyebrow: 'The Lesson in One Chain',
      title: 'Networks -> Contact -> Cultural Change',
      steps: [
        { label: 'NETWORKS', text: 'Movement becomes more frequent' },
        { label: 'CONTACT', text: 'People and societies interact' },
        { label: 'TRANSFER', text: 'Ideas, technologies, and knowledge move' },
        { label: 'CONSEQUENCES', text: 'Cultures and cities change' }
      ],
      footer: 'This is the whole lesson. Every example fits inside this chain.',
      notes: {
        minutes: 4,
        land: [
          'Show the causal frame before introducing names.',
          'Students are not collecting examples. They are proving what repeated contact does.'
        ],
        ask: 'Which box is the bridge between trade and cultural change?',
        listenFor: 'Contact or repeated interaction.'
      }
    },
    {
      phase: 'targets', kind: 'grid', eyebrow: 'What Students Must Know',
      title: 'Three Big Rocks',
      cards: [
        { title: '1 · DIFFUSION', text: 'Beliefs and technologies move across regions.' },
        { title: '2 · CITIES', text: 'Network nodes can grow — or decline.' },
        { title: '3 · TRAVELERS', text: 'More movement creates more written accounts.' },
        { title: 'AP SKILL', text: 'Explain the mechanism, not just “it spread.”' }
      ],
      notes: {
        minutes: 5,
        land: [
          'These are the three historical developments in the Topic 2.5 CED.',
          'Named evidence: Buddhism, Hinduism, Islam, paper, gunpowder, Ibn Battuta, Marco Polo, and Margery Kempe.'
        ],
        ask: 'Where would paper fit? Where would Ibn Battuta fit?',
        listenFor: 'Paper = diffusion; Ibn Battuta = travelers.'
      }
    },
    {
      phase: 'problem', kind: 'question', eyebrow: 'The Consequence Problem',
      title: 'A trade route carries more than cargo.',
      subtitle: 'Every merchant, monk, pilgrim, scholar, envoy, and conquest creates contact.',
      notes: {
        minutes: 6,
        land: [
          'Make contact the mechanism students can see.',
          'A route is historically important because repeated movement links people who otherwise would interact less often.'
        ],
        ask: 'Why does repeated contact matter more than one isolated encounter?',
        listenFor: 'Ideas can be taught, translated, copied, adapted, repeated, and carried farther.'
      }
    },
    {
      phase: 'mechanism', kind: 'process', eyebrow: 'Diffusion Mechanism',
      title: 'Contact does not mean copy-and-paste.',
      steps: [
        { label: 'CONTACT', text: 'People meet through networks' },
        { label: 'TRANSMIT', text: 'A belief, practice, or technology moves' },
        { label: 'ADAPT', text: 'A receiving society uses or reshapes it' },
        { label: 'CONSEQUENCE', text: 'Culture or knowledge changes' }
      ],
      footer: 'The third box is the reasoning students usually miss.',
      notes: {
        minutes: 6,
        land: [
          'Model diffusion as a process rather than a destination.',
          'Receiving societies do not passively copy. They select, translate, combine, and adapt.'
        ],
        ask: 'Why is “Buddhism spread” an incomplete AP explanation?',
        listenFor: 'It does not explain how contact enabled movement or how societies received/adapted it.'
      }
    },
    {
      phase: 'diffusion', kind: 'image', eyebrow: 'Big Rock 1 · Cultural Diffusion',
      title: 'Beliefs crossed regions.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg',
        alt: 'Great Buddha in Cave 96 at the Mogao Caves in Dunhuang'
      },
      footer: 'Buddhism · Hinduism · Islam',
      notes: {
        minutes: 8,
        land: [
          'The CED examples are Buddhism in East Asia; Hinduism and Buddhism in Southeast Asia; and Islam in sub-Saharan Africa and Asia.',
          'Use Dunhuang as visible evidence that a major Silk Road oasis could become a center of Buddhist patronage and practice.',
          'Do not imply merchants alone caused religious diffusion; monks, missionaries, scholars, rulers, and migrants also moved through connected worlds.'
        ],
        ask: 'What can this site prove about Buddhism at a trade-route oasis — and what can it not prove by itself?',
        listenFor: 'It proves strong Buddhist presence/patronage; it does not by itself prove every route or actor that spread Buddhism.'
      }
    },
    {
      phase: 'diffusion', kind: 'image', eyebrow: 'Big Rock 1 · Technological Diffusion',
      title: 'Technology traveled too.',
      visual: {
        url: '../assets/images/topics/2-1/2.1 - Chinese Paper Money.jpg',
        alt: 'Chinese paper money showing established use of paper and printing'
      },
      footer: 'Paper + gunpowder moved outward from China.',
      notes: {
        minutes: 7,
        land: [
          'Paper and gunpowder are the CED examples.',
          'This image establishes sophisticated use of paper and printing in China. Papermaking had already spread west to Samarkand and Baghdad by the 700s, centuries before paper money, so the network story explains a diffusion that began long before this note.',
          'The significance is transfer and adaptation, not simply Chinese invention.'
        ],
        ask: 'What does this visual establish — and what part of the diffusion story still requires other evidence?',
        listenFor: 'It establishes paper technology in China; it does not show the full westward route or timing by itself.'
      }
    },
    {
      phase: 'diffusion', kind: 'process', eyebrow: 'Put Diffusion Together',
      title: 'A network amplifies an idea by repeating contact.',
      steps: [
        { label: 'ORIGIN', text: 'A tradition or technology exists somewhere' },
        { label: 'MOVEMENT', text: 'People or texts carry it' },
        { label: 'ADOPTION', text: 'Another society uses or adapts it' },
        { label: 'WIDER REACH', text: 'The network carries it farther' }
      ],
      footer: 'Diffusion is movement + adoption, not just movement.',
      notes: {
        minutes: 4,
        land: [
          'Return to mechanism before changing Big Rocks.',
          'Students should now be able to use either a religion or a technology in a causation sentence.'
        ],
        ask: 'Which step turns simple movement into historical diffusion?',
        listenFor: 'Adoption/adaptation by receiving societies.'
      }
    },
    {
      phase: 'cities', kind: 'image', eyebrow: 'Big Rock 2 · Urban Growth',
      title: 'Networks can make cities boom.',
      visual: {
        url: '../assets/images/topics/2-1/2.1 - Samarkand.jpg',
        alt: 'Samarkand, a major Afro-Eurasian trading city'
      },
      footer: 'Trade + productivity can concentrate people, services, and wealth.',
      notes: {
        minutes: 7,
        land: [
          'KC-3.3.II says rising productivity and expanding trade networks could buoy urbanization.',
          'A network node attracts merchants, artisans, transport workers, storage, services, tax revenue, and information.',
          'The picture is an AI reconstruction, labeled on the slide: it sets the scene and is not evidence. The evidence is what historians know about Samarkand as a Silk Road market where traffic concentrated economic and cultural life.'
        ],
        ask: 'Why does repeated traffic turn a stop into a city?',
        listenFor: 'Demand for services, markets, labor, storage, taxes, information, and settlement.'
      }
    },
    {
      phase: 'cities', kind: 'image', eyebrow: 'Big Rock 2 · Urban Decline',
      title: 'But connectivity never guarantees permanent growth.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg',
        alt: 'Later medieval manuscript depiction of the Mongol siege of Baghdad'
      },
      footer: 'War · route shifts · political disruption can reverse urban fortunes.',
      notes: {
        minutes: 7,
        land: [
          'The CED explicitly says the fate of cities varied greatly.',
          'Use Baghdad as supporting evidence for how war can devastate a major urban center; do not present it as a CED illustrative example.',
          'Route shifts and political breakdown can also redirect merchants, revenue, and population away from a city.'
        ],
        ask: 'How can the same era of expanding trade produce growth in one city and decline in another?',
        listenFor: 'Networks are uneven; cities depend on route location, security, state power, productivity, and continued traffic.',
        avoid: 'Do not teach “trade made all cities grow.”'
      }
    },
    {
      phase: 'travelers', kind: 'hero', eyebrow: 'Big Rock 3 · Travel Accounts',
      title: 'More movement created more observers.',
      subtitle: 'Ibn Battuta · Marco Polo · Margery Kempe',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg',
        alt: 'Marco Polo caravan depicted in the Catalan Atlas of 1375'
      },
      notes: {
        minutes: 8,
        land: [
          'The CED claim is not that travel suddenly began. It is that intensified exchange networks produced increasing numbers of travelers whose writings survive.',
          'Ibn Battuta, Marco Polo, and Margery Kempe traveled for different reasons, but each left accounts of distant societies.',
          'Travel accounts are both evidence of connectivity and imperfect sources shaped by the traveler\'s perspective.'
        ],
        ask: 'How does a travel account prove connectivity even before we evaluate whether every detail is accurate?',
        listenFor: 'The traveler could move across long-distance networks and transmit descriptions to other audiences.'
      }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Map Check',
      title: 'Follow the movement, not just the route.',
      visual: { type: 'map' },
      footer: 'The same networks moved culture, technology, people, and knowledge.',
      notes: {
        minutes: 6,
        land: [
          'Trace one religion, one technology, and one traveler through the three networks students already know.',
          'Use the map to synthesize Unit 2 rather than memorize additional place names.'
        ],
        ask: 'Which network best explains each example you choose — and where do networks overlap?',
        listenFor: 'Silk Roads, Indian Ocean, and trans-Saharan routes all support different examples and often connect to one another.'
      }
    },
    {
      phase: 'checkpoint', kind: 'action', eyebrow: 'Checkpoint Writing',
      title: 'Explain ONE intellectual or cultural effect of connectivity.',
      subtitle: 'Use one specific CED example and explain the mechanism.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-5-cultural-consequences.html#modules' },
      notes: {
        minutes: 9,
        land: [
          'Require evidence plus mechanism.',
          'Strong pattern: intensified network -> repeated contact/movement -> specific example -> cultural or intellectual consequence.'
        ],
        ask: 'Where is the sentence that explains how the network caused the effect?',
        listenFor: 'Because exchange increased contact/movement, the idea, technology, or traveler could move and affect another society.'
      }
    },
    {
      phase: 'debrief', kind: 'grid', eyebrow: 'Common Traps',
      title: '“It spread” is not an explanation.',
      cards: [
        { title: 'WEAK', text: 'Buddhism spread through Asia.' },
        { title: 'BETTER', text: 'Repeated trade and pilgrimage contacts helped Buddhist teachings move and take root in new societies.' },
        { title: 'WEAK', text: 'All trade cities grew.' },
        { title: 'BETTER', text: 'City fortunes varied with trade, productivity, warfare, and route shifts.' }
      ],
      notes: {
        minutes: 4,
        land: [
          'The upgrade is mechanism and variation, not more vocabulary.',
          'Have students repair one sentence before the close.'
        ],
        ask: 'What makes the better statements historically defensible?',
        listenFor: 'They explain process and avoid overgeneralization.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.5 · Landing Sentence',
      title: 'Connectivity changes what societies know — and what they become.',
      subtitle: 'From c. 1200 to c. 1450, intensified exchange diffused beliefs and technologies, altered city fortunes, and increased travel writing across Afro-Eurasia.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
        alt: 'Al-Idrisi world map representing accumulated Afro-Eurasian geographic knowledge'
      },
      notes: {
        minutes: 2,
        land: [
          'This sentence directly answers Learning Objective J.',
          'Bridge to 2.6: the same networks also moved living things — crops and pathogens — producing environmental consequences.'
        ],
        ask: 'What changes when the thing moving through the network is biological rather than cultural?',
        listenFor: 'Crops, disease, population, environment — Topic 2.6.'
      }
    }
  ]
};
