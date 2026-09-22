/*
 * Topic 2.6 canonical Teaching OS source.
 * Story spine: trade accidentally connected ecosystems. The same network could feed you and kill you.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.6',
    minutes: 90,
    title: 'Environmental Consequences of Connectivity',
    subtitle: 'Trade networks moved living things: crops, rats, fleas, and pathogens.',
    essentialQuestion: 'How did Afro-Eurasian exchange networks spread crops and pathogens from c. 1200 to c. 1450?',
    apFocus: 'Humans and the Environment + Causation',
    endTarget: 'Students can explain how the same exchange networks diffused useful crops and epidemic disease, producing opposite environmental and demographic consequences.'
  },

  priorities: {
    must: [
      'Teach Topic 2.6 as environmental history: trade accidentally connected ecosystems, not only economies.',
      'Keep both halves visible: crop diffusion and pathogen diffusion. Do not let the Black Death swallow the whole topic.',
      'Attach consequences to every required crop example: bananas in Africa, new rice varieties in East Asia, and citrus in the Mediterranean.',
      'Make the mechanism explicit: network -> living thing moves -> new environment or population -> consequence.',
      'Use bubonic plague as the pathogen example, but do not turn the lesson into a plague biography.'
    ],
    should: [
      'Use the recurring line: the same network could feed you and kill you.',
      'Frame connectivity as powerful rather than simply good or bad.',
      'Stress that explain means because: students need a causal sentence, not a list.',
      'Bridge from 2.5: ideas moved through networks; now living things move through networks.'
    ],
    could: [
      'Use the Boccaccio source after the main causal model is built.',
      'Use the BeInTheRoom plague activity as an extension, not as the whole lesson.',
      'Preview Unit 4 by noting that the Columbian Exchange repeats this biological-movement pattern at a larger interhemispheric scale.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'Protect the balance: crops and pathogens, not just plague.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve Topic 2.5 and bridge to accidental cargo.', students: 'Answer from memory.', slide: 2 },
    { id: 'recap', label: 'Unit Recap', range: '4-6', minutes: 2, teacher: 'Connect 2.6 back to 2.1-2.5.', students: 'Name what moved before today.', slide: 3 },
    { id: 'turn', label: 'The Turn: Living Things', range: '6-13', minutes: 7, teacher: 'Introduce biological corridors.', students: 'Predict what else moves.', slide: 4 },
    { id: 'spine', label: 'Three Big Rocks', range: '13-18', minutes: 5, teacher: 'Give students the whole model.', students: 'Copy the three-part frame.', slide: 5 },
    { id: 'first10', label: 'First & 10', range: '18-28', minutes: 10, teacher: 'Read for two branches: crops and pathogens.', students: 'Annotate examples + consequences.', slide: 6 },
    { id: 'crops', label: 'Cargo #1: Crops', range: '28-46', minutes: 18, teacher: 'Teach each crop as evidence with a consequence.', students: 'Build one crop causal chain.', slide: 7 },
    { id: 'cropcheck', label: 'Checkpoint 1', range: '46-52', minutes: 6, teacher: 'Require because language.', students: 'Explain one crop effect.', slide: 10 },
    { id: 'pathogens', label: 'Cargo #2: Pathogens', range: '52-68', minutes: 16, teacher: 'Teach plague as connectivity vulnerability.', students: 'Explain why route density matters.', slide: 11 },
    { id: 'power', label: 'Power of the Network', range: '68-75', minutes: 7, teacher: 'Avoid moralizing: networks became powerful.', students: 'Explain same cause, opposite effect.', slide: 13 },
    { id: 'chains', label: 'Twin Causal Chains', range: '75-83', minutes: 8, teacher: 'Make students rehearse the side-by-side model.', students: 'Write both chains.', slide: 14 },
    { id: 'verb', label: 'Explain Means Because', range: '83-88', minutes: 5, teacher: 'Turn memory into AP writing.', students: 'Upgrade a list into an explanation.', slide: 15 },
    { id: 'close', label: 'Landing Sentence', range: '88-90', minutes: 2, teacher: 'Land the answer and bridge to 2.7.', students: 'Say the topic in one sentence.', slide: 16 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.6', url: '../unit-2/lesson-2-6-environmental-consequences.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-6-environmental-consequences-capture.html?v=response-id-fix-v1' },
    { label: 'BeInTheRoom: Plague Europe', url: '../beintheroom/unit-2/plague-europe.html' },
    { label: 'Deep Reading', url: '../unit-2/deep-reading-topic-2-6-environmental-consequences.html' },
    { label: 'Heimler 2.6 Review', url: 'https://youtu.be/PKQzXPAAFBA' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-6-slide',
    title: 'Topic 2.6 Presentation',
    file: 'present-topic-2-6.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'This is not only the Black Death lesson.',
      subtitle: 'Teach the environmental story: exchange networks moved living things. Crops and pathogens are opposite consequences of the same connectivity.',
      notes: {
        minutes: 2,
        land: [
          'The CED for 2.6 is short, but it is easy to distort. It asks for environmental effects of networks of exchange: crops and pathogens.',
          'Do not let the dramatic plague material erase crop diffusion. Bananas, rice varieties, and citrus all need consequences attached.',
          'The ninth-grade story is simple: trade accidentally connected ecosystems.'
        ],
        ask: 'What is the one sentence I want students to leave with?',
        listenFor: 'The same networks moved useful crops and destructive pathogens.',
        avoid: 'Avoid teaching every plague detail or jumping to later Columbian Exchange content as the main topic.'
      }
    },
    {
      phase: 'beready', kind: 'process', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the network story back from memory.',
      subtitle: 'Short answers are enough. Retrieve first; we will build from them.',
      steps: [
        { label: 'BELIEF', text: 'Name one belief system that spread along a trade network, and the network it used.' },
        { label: 'TECHNOLOGY', text: 'Name one technology that moved from one region to another.' },
        { label: 'CITIES', text: 'Why could a network make one city boom and let another decline?' },
        { label: 'BRIDGE', text: 'People chose to carry goods and ideas. What moved on these routes that nobody chose to carry?' }
      ],
      footer: 'Retrieve -> connect -> enter the new problem.',
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast verbal answers and do not reteach Topic 2.5.',
          'Accept brief evidence: Buddhism or Islam and a route; paper, printing, gunpowder, or navigation tools; a city rising at a node, or declining when routes shifted.'
        ],
        ask: 'What could ride along on a caravan or a ship without anyone meaning to bring it?',
        listenFor: 'Seeds, animals, insects, rats, fleas, germs, disease.',
        ap: 'Retrieval + contextualization: yesterday was intentional transfer; today is accidental biological transfer on the same networks.'
      }
    },
    {
      phase: 'recap', kind: 'hero', eyebrow: 'AP World History · Topic 2.6',
      title: 'The Cargo Nobody Ordered',
      subtitle: 'In 2.1-2.4, people built the roads. In 2.5, ideas moved. Now living things get on the same roads.',
      visual: { type: 'map' },
      notes: {
        minutes: 2,
        land: [
          'Start with continuity across the unit. Students already know the networks; they need to see why this topic is the payoff.',
          'The question is no longer only what merchants carried intentionally. Ask what moved accidentally with people, animals, cargo, ships, and caravans.'
        ],
        ask: 'What moved through networks before today?',
        listenFor: 'Goods, money, technologies, beliefs, travelers, information.'
      }
    },
    {
      phase: 'turn', kind: 'question', eyebrow: 'The Turn',
      title: 'Trade accidentally connected ecosystems.',
      subtitle: 'A route is not just an economic corridor. It can become a biological corridor.',
      notes: {
        minutes: 5,
        land: [
          'This is the thesis sentence. The word accidentally matters. Nobody designed the network to move fleas, rats, pathogens, or every crop that later took root.',
          'Environmental history here means biology and ecology: what grows where, which diseases move where, and how many people a region can support.'
        ],
        ask: 'What kinds of living things could ride along with people or cargo?',
        listenFor: 'Seeds, plants, food, animals, rats, fleas, germs, disease.'
      }
    },
    {
      phase: 'spine', kind: 'grid', eyebrow: 'Three Big Rocks',
      title: 'The whole topic has two branches.',
      cards: [
        { title: 'BIOLOGICAL CORRIDORS', text: 'Networks connected environments as well as markets.' },
        { title: 'CROPS', text: 'Useful plants moved into new regions and could support more food production.' },
        { title: 'PATHOGENS', text: 'Disease moved through the same connections and could devastate populations.' },
        { title: 'AP VERB', text: 'Explain means because. Lists do not score by themselves.' }
      ],
      notes: {
        minutes: 4,
        land: [
          'Give the structure early so students can sort evidence as they learn it.',
          'The two branches are not two separate topics. They are opposite consequences of the same system.'
        ],
        ask: 'Why are crops and plague part of the same topic?',
        listenFor: 'Both are living things moving through networks; both are environmental effects of connectivity.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Read for two branches.',
      subtitle: 'Branch 1: crops that changed food supply. Branch 2: pathogens that changed populations.',
      big: '10',
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-6-environmental-consequences-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 10,
        land: [
          'Circulate for students connecting each example to a consequence. Do not accept example-only notes.',
          'Prompt students to underline the because sentences.'
        ],
        ask: 'Which crop or pathogen is being moved, and what changes because it moved?',
        listenFor: 'Crop plus destination plus agricultural/population consequence; plague plus route movement plus mortality consequence.'
      }
    },
    {
      phase: 'crops', kind: 'image', eyebrow: 'Cargo #1 · Crops',
      title: 'The road brings food.',
      visual: {
        url: '../assets/images/instructional-maps/topic-2-6-crops.svg',
        alt: 'Instructional map of crop diffusion across Afro-Eurasia'
      },
      footer: 'Bananas in Africa · new rice varieties in East Asia · citrus in the Mediterranean',
      notes: {
        minutes: 6,
        land: [
          'Use the map to establish the three CED examples together. Do not overbuild each crop into its own mini-lecture.',
          'The point is not the crop name alone. The point is crop movement into a new environment and what that made possible.'
        ],
        ask: 'What pattern do all three crop examples share?',
        listenFor: 'A useful plant moves through networks into a new region and changes agriculture, diet, or population-supporting capacity.'
      }
    },
    {
      phase: 'crops', kind: 'grid', eyebrow: 'Crop Consequences',
      title: 'Every example needs a so what.',
      cards: [
        { title: 'BANANAS -> AFRICA', text: 'New agricultural possibilities in suitable tropical environments.' },
        { title: 'RICE -> EAST ASIA', text: 'Higher productive capacity and support for larger populations.' },
        { title: 'CITRUS -> MEDITERRANEAN', text: 'New crops changed regional agriculture and diets.' },
        { title: 'BECAUSE', text: 'Connectivity moved crops beyond earlier ranges.' }
      ],
      notes: {
        minutes: 7,
        land: [
          'This is the exam-facing crop slide. Students need the example paired with the effect.',
          'Keep the wording clean and defensible. Do not overclaim beyond what AP needs.'
        ],
        ask: 'Which of these is the strongest AP sentence: the crop name, the destination, or the consequence?',
        listenFor: 'The consequence, connected to the network mechanism.'
      }
    },
    {
      phase: 'crops', kind: 'process', eyebrow: 'Crop Mechanism',
      title: 'A crop matters when it changes what land can support.',
      steps: [
        { label: 'NETWORK', text: 'Routes connect regions' },
        { label: 'CROP MOVES', text: 'A useful plant travels' },
        { label: 'ADOPTION', text: 'People grow it somewhere new' },
        { label: 'CONSEQUENCE', text: 'Food supply or population support changes' }
      ],
      footer: 'Bananas, rice, and citrus are evidence for this mechanism.',
      notes: {
        minutes: 5,
        land: [
          'Students can now explain any of the crop examples with the same chain.',
          'Do not let them stop at spread. Spread is the middle of the chain, not the answer.'
        ],
        ask: 'Where is the historical effect in this chain?',
        listenFor: 'The consequence: food supply, agricultural productivity, or population-supporting capacity.'
      }
    },
    {
      phase: 'cropcheck', kind: 'action', eyebrow: 'Checkpoint 1',
      title: 'Trace one crop from network to consequence.',
      subtitle: 'Name the crop. Name the region. Explain what changed because it moved.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-6-environmental-consequences.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'This checkpoint catches the most common weak answer: naming bananas, rice, or citrus without explaining an effect.',
          'Require a because sentence.'
        ],
        ask: 'Where is your because?',
        listenFor: 'Because exchange networks connected regions, the crop could move and affect agriculture, diets, or population support.'
      }
    },
    {
      phase: 'pathogens', kind: 'image', eyebrow: 'Cargo #2 · Pathogens',
      title: 'The same road brings death.',
      visual: {
        url: '../assets/images/instructional-maps/topic-2-6.svg',
        alt: 'Instructional map of the spread of the Black Death'
      },
      footer: 'Bubonic plague moved through connected trade routes and port cities.',
      notes: {
        minutes: 7,
        land: [
          'Use the map to show the pattern of spread across connected regions.',
          'Students do not need a microbiology lesson. They need to see that disease had routes, ships, caravans, port cities, and dense populations as pathways.'
        ],
        ask: 'Why does a trade-route map help explain a disease map?',
        listenFor: 'The same paths and nodes that moved goods could move people, animals, fleas, rats, and pathogens.'
      }
    },
    {
      phase: 'pathogens', kind: 'process', eyebrow: 'Pathogen Mechanism',
      title: 'The plague was not new. The highway system was better.',
      steps: [
        { label: 'OUTBREAK', text: 'Disease exists in one region' },
        { label: 'MOVEMENT', text: 'Ships, caravans, people, and animals connect regions' },
        { label: 'JUMP', text: 'Pathogens reach new populations' },
        { label: 'EPIDEMIC', text: 'Mortality spreads across connected societies' }
      ],
      footer: 'Connectivity increased the speed and range of vulnerability.',
      notes: {
        minutes: 6,
        land: [
          'This is the counterfactual without the historical overstatement: plague existed before, but denser and more regular connections created more opportunities for long-distance spread.',
          'Do not say there were no roads in 900. Say that intensified connectivity changed the range and speed of possible transmission.'
        ],
        ask: 'Why does the density of connection matter?',
        listenFor: 'More movement creates more chances for disease to jump between distant population centers.'
      }
    },
    {
      phase: 'pathogens', kind: 'hero', eyebrow: 'Human Consequence',
      title: 'Connection can become catastrophe.',
      subtitle: 'The Black Death caused massive mortality and demographic disruption across connected Afro-Eurasian regions.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Danse_macabre_by_Michael_Wolgemut.png',
        alt: 'Michael Wolgemut print of the Dance of Death, 1493'
      },
      notes: {
        minutes: 5,
        land: [
          'This is a later cultural-memory image, not an eyewitness picture of 1348. Use it carefully as evidence that mass mortality shaped memory and imagination.',
          'The AP consequence is demographic: population loss and disruption. Keep students focused on environmental/demographic effect.'
        ],
        ask: 'What is the consequence we have to explain, not just describe?',
        listenFor: 'Mortality and demographic disruption caused by pathogen diffusion through networks.'
      }
    },
    {
      phase: 'power', kind: 'question', eyebrow: 'The Big Turn',
      title: 'The networks did not become bad. They became powerful.',
      subtitle: 'A powerful network amplifies whatever enters it: crops, ideas, people, goods, or pathogens.',
      notes: {
        minutes: 4,
        land: [
          'This line prevents moralizing. Connectivity is not automatically good or bad; it increases movement and reach.',
          'Immediately undercut the tagline: feed you or kill you is not either/or. It was both, at the same time, through the same networks.'
        ],
        ask: 'Why is powerful a better word than good or bad?',
        listenFor: 'The network amplifies what enters it; consequences depend on what moves and where it arrives.'
      }
    },
    {
      retelling: true, phase: 'chains', kind: 'process', eyebrow: 'Same Cause · Opposite Effects',
      title: 'The same network could feed you and kill you.',
      steps: [
        { label: 'CROP', text: 'Network -> crop moves -> grows somewhere new -> food/productivity can increase' },
        { label: 'PATHOGEN', text: 'Network -> disease moves -> reaches new populations -> mortality can increase' },
        { label: 'SAME CAUSE', text: 'Intensified connectivity moves living things farther' },
        { label: 'OPPOSITE EFFECTS', text: 'Productive capacity and demographic catastrophe can happen together' }
      ],
      footer: 'This is the slide the lesson is driving toward.',
      notes: {
        minutes: 7,
        land: [
          'Make students say both chains aloud or write both chains quickly.',
          'The slide shows comparison without requiring the CED to name comparison as the task. It supports explanation.'
        ],
        ask: 'What is the same in both chains, and what changes at the end?',
        listenFor: 'Same network mechanism; different biological cargo and different consequences.'
      }
    },
    {
      phase: 'verb', kind: 'grid', eyebrow: 'AP Writing Move',
      title: 'Explain means because.',
      cards: [
        { title: 'LIST', text: 'Bananas spread to Africa.' },
        { title: 'EXPLAIN', text: 'Because Indian Ocean networks moved crops, bananas could spread into suitable African environments and support new agricultural possibilities.' },
        { title: 'LIST', text: 'The plague spread on trade routes.' },
        { title: 'EXPLAIN', text: 'Because trade connected ports and cities more densely, plague could move farther and cause massive mortality.' }
      ],
      notes: {
        minutes: 5,
        land: [
          'This is where the lesson converts into AP writing. Students should see exactly why a memorized example is not enough.',
          'Have students upgrade one list sentence into an explain sentence.'
        ],
        ask: 'Which word turns recall into causation?',
        listenFor: 'Because.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.6 · Landing Sentence',
      title: 'Connectivity connected ecosystems.',
      subtitle: 'From c. 1200 to c. 1450, exchange networks spread crops that could increase productive capacity and pathogens that could cause devastating demographic decline.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
        alt: 'Map of major Afro-Eurasian exchange routes'
      },
      notes: {
        minutes: 2,
        land: [
          'This sentence directly answers the Topic 2.6 learning objective.',
          'Bridge to 2.7: next students compare the major networks and their effects rather than studying one new consequence.'
        ],
        ask: 'What is the one-sentence answer to Topic 2.6?',
        listenFor: 'Networks moved crops and pathogens, creating environmental and demographic effects.'
      }
    }
  ]
};
