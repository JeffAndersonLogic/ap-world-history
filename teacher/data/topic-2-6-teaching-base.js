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
      id: 'preflight', phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
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
      id: 'beready', phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · Recall · No Notes',
      title: 'Pull the network story back from memory.',
      template: {
        questions: [
          { label: 'Belief', text: 'Name one belief system that spread along a trade network, and the network it used.' },
          { label: 'Technology', text: 'Name one technology that moved from one region to another.' },
          { label: 'Cities', text: 'Why could a network make one city boom and let another decline?' }
        ],
        turn: 'People chose to carry goods and ideas. **What moved on these routes that nobody chose to carry?**'
      },
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
      id: 'hook', phase: 'recap', kind: 'frame-cover', eyebrow: 'AP World History · Topic 2.6',
      title: 'The Cargo Nobody Ordered',
      template: {
        masthead: 'CONNECTED',
        issue: 'Topic 2.6 · The Living Things Issue',
        story: { tag: 'Cover Story', title: 'The Cargo Nobody Ordered' },
        lines: [
          'In 2.1 to 2.4, people built the roads',
          'In 2.5, ideas moved along them',
          'Now living things get on the same roads'
        ]
      },
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
      id: 'turn', phase: 'turn', kind: 'question', eyebrow: 'The Turn',
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
      id: 'spine', phase: 'spine', kind: 'grid', eyebrow: 'The Shape of the Topic',
      title: 'The whole topic has two branches.',
      cards: [
        { title: 'BIOLOGICAL CORRIDORS', text: 'Networks connected environments as well as markets.' },
        { title: 'BRANCH 1 · CROPS', text: 'Useful plants moved into new regions and could support more food production.' },
        { title: 'BRANCH 2 · PATHOGENS', text: 'Disease moved through the same connections and could devastate populations.' }
      ],
      footer: 'Not two topics. **Opposite consequences of the same system.**',
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
      id: 'first10', phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 10 Minutes',
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
      id: 'crops-map', phase: 'crops', kind: 'frame-placard', eyebrow: 'Cargo 1 · Crops',
      title: 'The road brings food.',
      template: {
        placard: {
          tag: 'Crop Diffusion · Three Movements',
          name: 'The road brings food.',
          text: 'Bananas into Africa. New rice varieties in East Asia. Citrus around the Mediterranean. Each one is a plant arriving where it had not grown before.'
        }
      },
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
      id: 'crop-so-what', phase: 'crops', kind: 'equation-stack', eyebrow: 'Crop Consequences',
      title: 'Every example needs a so what.',
      footer: 'A crop name with no consequence attached is **not an answer**.',
      template: {
        terms: [
          { word: 'Bananas', note: 'Into Africa: new agricultural possibilities in suitable tropical environments' },
          { word: 'New rice varieties', note: 'In East Asia: higher productive capacity, supporting larger populations' },
          { word: 'Citrus', note: 'Around the Mediterranean: changed regional agriculture and diets' }
        ],
        result: { word: 'What the land could support', note: 'Because connectivity moved crops beyond their earlier ranges' }
      },
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
      id: 'crop-chain', phase: 'crops', kind: 'process', eyebrow: 'Crop Mechanism',
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
      id: 'check1', phase: 'cropcheck', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
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
      id: 'plague-map', phase: 'pathogens', kind: 'frame-placard', eyebrow: 'Cargo 2 · Pathogens',
      title: 'The same road brings death.',
      template: {
        placard: {
          tag: 'Reconstructed Map · c. 1340 to 1353',
          name: 'The same road brings death.',
          text: 'Bubonic plague plotted along the trade corridors, coastlines and port cities. A reconstruction shows the pattern of spread; it cannot show any single transmission.'
        }
      },
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
      id: 'plague-chain', phase: 'pathogens', kind: 'process', eyebrow: 'Pathogen Mechanism',
      title: 'The plague was not new. The highway system was better.',
      steps: [
        { label: 'OUTBREAK', text: 'Disease exists in one region' },
        { label: 'MOVEMENT', text: 'Ships, caravans, people, and the rats and fleas aboard them' },
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
      id: 'memory', phase: 'pathogens', kind: 'frame-placard', eyebrow: 'Human Consequence',
      title: 'Connection can become catastrophe.',
      template: {
        placard: {
          tag: 'Later Evidence · Printed 1493',
          name: 'The Dance of Death',
          text: 'Michael Wolgemut printed this about 145 years after the outbreak. It is evidence of how Europe remembered mass mortality, not a picture of 1348.'
        }
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
      id: 'power', phase: 'power', kind: 'question', eyebrow: 'The Big Turn',
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
      id: 'retelling', retelling: true, phase: 'chains', kind: 'split-mirror', eyebrow: 'Same Cause · Opposite Effects',
      title: 'The same network could feed you and kill you.',
      footer: 'Same first three rows. **Opposite last row.** Both were happening at once.',
      template: {
        left: { name: 'Crops' },
        right: { name: 'Pathogens' },
        rows: [
          { label: 'Network', left: 'Regions connect more often', right: 'Regions connect more often' },
          { label: 'What moves', left: 'A useful plant travels with people and cargo', right: 'A pathogen travels with people and cargo' },
          { label: 'Where it lands', left: 'An environment where it grows well', right: 'A population with no prior exposure' },
          { label: 'Consequence', left: 'Production and the population a region can support **rise**', right: 'Mortality **rises** and population falls' }
        ]
      },
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
      id: 'sharpen', phase: 'verb', kind: 'sharpen', eyebrow: 'AP Writing Move · Explain Means Because',
      title: 'Explain means because.',
      footer: 'An AP-sized claim names the **network**, the **movement**, and the **consequence**.',
      template: {
        weak: 'Bananas spread to Africa.',
        strong: 'Because Indian Ocean networks **moved crops** between regions, bananas could spread into suitable African environments and **open new agricultural possibilities**.'
      },
      notes: {
        minutes: 5,
        land: [
          'This is where the lesson converts into AP writing. Students should see exactly why a memorized example is not enough.',
          'Read the weak claim first and ask what is missing. It is true and it explains nothing: no network, no movement, no consequence.',
          'Then run the plague pair verbally as the second rep. Weak: "The plague spread on trade routes." Strong: "Because trade connected ports and cities more densely, plague could reach populations with no prior exposure and cause massive mortality." This template holds one pair on screen on purpose; the second one is yours to say.',
          'Have students upgrade one of their own sentences the same way before Checkpoint 2.'
        ],
        ask: 'Which word turns recall into causation?',
        listenFor: 'Because.'
      }
    },
    {
      id: 'landing', phase: 'close', kind: 'question', eyebrow: 'Topic 2.6 · Landing Sentence',
      title: 'Connectivity connected ecosystems.',
      subtitle: 'From c. 1200 to c. 1450, exchange networks spread crops that could increase productive capacity and pathogens that could cause devastating demographic decline.',
      notes: {
        minutes: 2,
        land: [
          'This sentence directly answers the Topic 2.6 learning objective. Leave it on screen while students copy it.',
          'It carries no picture on purpose. It used to reuse the same network map as the opening slide, and a 25-word thesis does not want a photograph competing with it.',
          'Bridge to 2.7: next students compare the major networks and their effects rather than studying one new consequence.'
        ],
        ask: 'What is the one-sentence answer to Topic 2.6?',
        listenFor: 'Networks moved crops and pathogens, creating environmental and demographic effects.'
      }
    }
  ]
};
