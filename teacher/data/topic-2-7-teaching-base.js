/*
 * Topic 2.7 canonical Teaching OS source.
 * Story spine: same problem, different ground, different tools, same results.
 * Wall version: Geography picked the tools. Demand did the rest.
 * Story approved by Jeff 2026-09-23 (docs/TOPIC-2-7-STORY-DRAFT.md), with a
 * retrieval-based Eras 2 review embedded at the end rather than bolted on.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.7',
    minutes: 90,
    title: 'Comparison of Economic Exchange',
    subtitle: 'Three networks, one problem: distance. Geography picked the tools. Demand did the rest.',
    essentialQuestion: 'What were the similarities and differences among the Silk Roads, Indian Ocean, and trans-Saharan networks from c. 1200 to c. 1450?',
    apFocus: 'Comparison',
    endTarget: 'Students can state one similarity and one difference among the three networks, support each with balanced evidence from two networks, and explain why the pattern existed.'
  },

  priorities: {
    must: [
      'Teach 2.7 as synthesis. No new content: every example comes from 2.1 to 2.6.',
      'Keep the spine visible: the same problem (distance), different geography, different tools, the same results.',
      'Every comparison needs a because. "They were different" is not an answer.',
      'Balanced evidence: the same category on both sides of a comparison.',
      'Protect the CED mechanisms: commercial practices (caravanserai, credit, money economies), demand, trading cities and states, and productive capacity.'
    ],
    should: [
      'Use the matrix as the retelling slide and have students draw it from memory.',
      'Use the Eras 2 review at the end as retrieval through the matrix, not a second lecture.',
      'Name the modules due today: Skill Builder, Checkpoint 1, Evidence Lab, Checkpoint 2.'
    ],
    could: [
      'Use the BeInTheRoom trade-network comparison as an extension for students who finish early.',
      'Point students who missed a network to the First & 10 and the eBook chapter for review before the exam.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'Synthesis, not a new topic. Last class before the exam.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve one tool per network, bridge to the shared problem.', students: 'Answer from memory.', slide: 2 },
    { id: 'recap', label: 'Three Roads', range: '4-6', minutes: 2, teacher: 'Put all three networks on one map.', students: 'Name each network.', slide: 3 },
    { id: 'question', label: 'The Question', range: '6-8', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 4 },
    { id: 'problem', label: 'The Shared Problem', range: '8-13', minutes: 5, teacher: 'Demand plus distance equals the problem everyone solved.', students: 'Say the problem in one sentence.', slide: 5 },
    { id: 'tools', label: 'Geography Picks the Tools', range: '13-20', minutes: 7, teacher: 'The big difference, and why it exists.', students: 'Match each tool to its ground.', slide: 6 },
    { id: 'nodes', label: 'Same Result: Cities', range: '20-25', minutes: 5, teacher: 'Where routes narrow, cities and states grow.', students: 'Name a node per network.', slide: 7 },
    { id: 'production', label: 'Same Result: Production', range: '25-30', minutes: 5, teacher: 'Demand far away grows workshops.', students: 'Explain one production gain.', slide: 8 },
    { id: 'diffusion', label: 'Same Result: Diffusion', range: '30-33', minutes: 3, teacher: 'Quick recap of 2.5 and 2.6 only.', students: 'Name what else moved.', slide: 9 },
    { id: 'matrix', label: 'The Matrix', range: '33-40', minutes: 7, teacher: 'Students draw the matrix from memory.', students: 'Redraw the whole topic.', slide: 10 },
    { id: 'sharpen', label: 'Sharpen the Comparison', range: '40-45', minutes: 5, teacher: 'Model one AP comparison sentence.', students: 'Upgrade a weak claim.', slide: 11 },
    { id: 'skill', label: 'Skill Builder', range: '45-52', minutes: 7, teacher: 'Module 05: one category, two networks.', students: 'Write one comparison.', slide: 12 },
    { id: 'cp1', label: 'Checkpoint 1', range: '52-58', minutes: 6, teacher: 'Independent: one similarity, with a because.', students: 'Work without the coach.', slide: 13 },
    { id: 'evidence', label: 'Evidence Lab', range: '58-68', minutes: 10, teacher: 'Module 07: evidence from two networks.', students: 'Build a claim from two sources.', slide: 14 },
    { id: 'cp2', label: 'Checkpoint 2', range: '68-76', minutes: 8, teacher: 'Module 10: one difference and why. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 15 },
    { id: 'review', label: 'Eras 2 Retrieval', range: '76-88', minutes: 12, teacher: 'Retrieve the unit through the matrix.', students: 'Answer from memory, then check.', slide: 16 },
    { id: 'close', label: 'Landing Sentence', range: '88-90', minutes: 2, teacher: 'Land the answer and bridge to the exam.', students: 'Say the topic in one sentence.', slide: 17 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.7', url: '../unit-2/lesson-2-7-comparison.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-7-comparison-capture.html?v=response-id-fix-v1' },
    { label: 'BeInTheRoom: Trade Network Comparison', url: '../beintheroom/unit-2/trade-network-comparison.html' },
    { label: 'Deep Reading', url: '../unit-2/deep-reading-topic-2-7-comparison.html' },
    { label: 'Unit 2 Review Video', url: 'https://youtu.be/TPQQnXFsUmU' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-7-slide',
    title: 'Topic 2.7 Presentation',
    file: 'present-topic-2-7.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Today is synthesis, not a new topic.',
      subtitle: 'Same problem, different ground, different tools, same results. Nothing students did not meet in 2.1 to 2.6.',
      notes: {
        minutes: 2,
        land: [
          'The learning objective asks for similarities and differences among the networks from c. 1200 to c. 1450. That is the whole job.',
          'If a slide starts teaching a fact students did not meet in 2.1 to 2.6, cut it and move on.',
          'This is the last class before the Eras 2 exam. The review at the end is retrieval through the matrix, so the synthesis and the review are the same work.',
          'Modules due today: 05 Skill Builder, 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2. Checkpoint 2 finishes at home if it is not done in class.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'All three networks solved the same problem, distance, with tools their geography allowed, and all three grew cities, production and diffusion.',
        avoid: 'Avoid reteaching each network in turn. A tour of three networks is the old version of this lesson.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the three networks back from memory.',
      template: {
        questions: [
          { label: 'Topic 2.6', text: 'Name one crop and one disease that traveled on these networks.' },
          { label: 'Ocean', text: 'What made Indian Ocean voyages predictable?' },
          { label: 'Desert', text: 'What made regular crossings of the Sahara possible?' }
        ],
        turn: 'Three networks, three different toolkits. **So why did all three end up with rich cities and busy workshops?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: bananas, rice or citrus, and plague; the monsoon winds; the camel saddle and organized caravans.',
          'The turn is the lesson question in disguise. Do not answer it yet.'
        ],
        ask: 'What did every one of these tools have in common?',
        listenFor: 'They all made long distances cheaper or safer to cross.',
        ap: 'Retrieval plus bridge: the separate topics become cases for one comparison.'
      }
    },
    {
      phase: 'recap', kind: 'image', eyebrow: 'AP World History · Topic 2.7',
      title: 'Three Roads, One Problem',
      visual: { type: 'map' },
      footer: 'For three topics we visited the networks one at a time. Today we line them up.',
      notes: {
        minutes: 2,
        land: [
          'Put all three networks on one map before comparing anything. Students need to see them as cases of one thing.',
          'Point to each: overland across Central Asia, by sea around the Indian Ocean, and across the Sahara.'
        ],
        ask: 'Which of these networks carried the heaviest goods, and why?',
        listenFor: 'The Indian Ocean, because ships move bulk more cheaply than animals.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      title: 'Why did three very different networks end up doing the same things?',
      subtitle: 'Hold that question. By the end of class you can answer it in one sentence.',
      notes: {
        minutes: 2,
        land: [
          'This is the topic question. Leave it on screen long enough for a prediction.',
          'A good prediction names a shared cause. A weak one lists features.'
        ],
        ask: 'Make a prediction: what caused the similarity?',
        listenFor: 'Demand for goods made far away, and the need to beat distance.'
      }
    },
    {
      phase: 'problem', kind: 'equation', eyebrow: 'The Shared Problem',
      title: 'Every network was solving the same problem.',
      footer: 'Whoever made distance cheaper and safer got rich.',
      template: {
        terms: [
          { word: 'Demand', note: 'people wanted silk, porcelain, pepper, gold, salt' },
          { word: 'Distance', note: 'made those goods expensive and dangerous to get' }
        ],
        result: { word: 'The problem', note: 'how to move goods far, cheaply and safely' },
        groups: [
          { from: 0, to: 0, label: 'Makes it worth it' },
          { from: 1, to: 1, label: 'Makes it hard' }
        ]
      },
      notes: {
        minutes: 5,
        land: [
          'This is the similarity underneath every other similarity. Luxury demand gave merchants a reason; distance was the obstacle.',
          'KC-3.1.I.C.i: the growth of trade in luxury goods was encouraged by innovations that lowered the cost and risk of distance.'
        ],
        ask: 'Why would anyone cross a desert with a caravan for months?',
        listenFor: 'Because the goods were worth far more at the other end.'
      }
    },
    {
      phase: 'tools', kind: 'grid', eyebrow: 'The Big Difference',
      title: 'Geography picked the tools.',
      cards: [
        { title: 'OVERLAND', text: 'Caravanserais for safe stops, and credit so merchants did not carry a fortune.' },
        { title: 'BY SEA', text: 'The monsoon winds as a schedule, and ships built to ride them.' },
        { title: 'DESERT', text: 'The camel saddle for heavier loads, and caravans from oasis to oasis.' },
        { title: 'BECAUSE', text: 'Different ground made different problems, so each network needed different tools.' }
      ],
      notes: {
        minutes: 7,
        land: [
          'Overland: caravanserais gave merchants a safe place to stop, and credit meant they did not have to carry a fortune. The Tang used flying cash; the Song issued paper money.',
          'Ocean: sailors learned the monsoon, a wind that reverses with the seasons, and built ships such as dhows and junks to use it. The schedule was the tool.',
          'Desert: the camel saddle let camels carry more, and caravans organized people, water and protection across the oases.',
          'The difference exists because the environments differ. That because is the explanation.'
        ],
        ask: 'Could the Silk Roads have used the monsoon? Why not?',
        listenFor: 'No, it crossed land. The environment decides which tools work.',
        ap: 'Comparison: a difference is only an answer when it comes with the reason it exists.'
      }
    },
    {
      phase: 'nodes', kind: 'grid', eyebrow: 'Same Result #1',
      title: 'Where routes narrow, cities and states grow.',
      cards: [
        { title: 'SILK ROADS', text: 'Samarkand and Kashgar grew where caravans met, under Mongol protection.' },
        { title: 'INDIAN OCEAN', text: 'Calicut and Malacca grew where ships waited for the wind.' },
        { title: 'SAHARA', text: 'Timbuktu grew, and Mali grew rich by taxing and protecting trade.' },
        { title: 'BECAUSE', text: 'Goods had to pass through these places, so rulers could tax and protect them.' }
      ],
      notes: {
        minutes: 5,
        land: [
          'This is the first same result. KC-3.1.I.A.i: improved commercial practices grew powerful new trading cities.',
          'States matter too: Mongol rule protected the Silk Roads, Mali protected and taxed the Sahara trade, and port states welcomed foreign merchants.'
        ],
        ask: 'What do Malacca and Timbuktu have in common, even though one is a port and one is in the desert?',
        listenFor: 'Both sat where trade had to pass, so both grew rich from it.'
      }
    },
    {
      phase: 'production', kind: 'compounding', eyebrow: 'Same Result #2',
      title: 'Demand far away made workshops grow.',
      footer: 'Chinese porcelain and iron, and Indian cotton cloth, grew with the trade.',
      template: {
        steps: [
          { label: 'Demand', text: 'Buyers far away want more.' },
          { label: 'Trade', text: 'Networks carry goods farther.' },
          { label: 'Production', text: 'Artisans make more for export.' },
          { label: 'Capacity', text: 'Whole industries expand.' }
        ]
      },
      notes: {
        minutes: 5,
        land: [
          'KC-3.3.I.B: Chinese, Persian and Indian artisans expanded production of textiles and porcelain for export, and iron and steel production expanded in China.',
          'The point is that trade changed places far from the routes. A potter in China worked for a buyer in East Africa.'
        ],
        ask: 'How can a trade route change a place that is nowhere near it?',
        listenFor: 'Demand travels back along the route, so producers make more.'
      }
    },
    {
      phase: 'diffusion', kind: 'grid', eyebrow: 'Same Result #3 · Quick Recap',
      title: 'The networks carried more than goods.',
      cards: [
        { title: 'BELIEFS', text: 'Islam and Buddhism spread along trade routes (2.5).' },
        { title: 'TECHNOLOGY', text: 'Paper and gunpowder moved west (2.5).' },
        { title: 'CROPS', text: 'Bananas, new rice varieties and citrus (2.6).' },
        { title: 'DISEASE', text: 'The bubonic plague traveled the same routes (2.6).' }
      ],
      notes: {
        minutes: 3,
        land: [
          'This was already taught. Keep it to three minutes: one example per card, from memory if possible.',
          'KC-3.1: deepening networks caused cultural, technological and biological diffusion.'
        ],
        ask: 'Which network carried the plague?',
        listenFor: 'More than one: overland and sea routes both carried it.'
      }
    },
    {
      retelling: true, phase: 'matrix', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'Three networks, one problem.',
      footer: 'Geography picked the tools. Demand did the rest.',
      template: {
        columns: [{ name: 'Silk Roads' }, { name: 'Indian Ocean' }, { name: 'Sahara' }],
        rows: [
          { label: 'Problem', cells: ['Distance and bandits', 'Distance and open sea', 'Distance and desert'] },
          { label: 'Tools', cells: ['Caravanserai, credit', 'Monsoon, ships', 'Camel saddle, caravan'] },
          { label: 'Cities', cells: ['Samarkand, Kashgar', 'Calicut, Malacca', 'Timbuktu, Mali'] }
        ],
        result: { label: 'Result', text: 'On all three, production grew and ideas, crops and disease traveled.' }
      },
      notes: {
        minutes: 7,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students draw it from memory.',
          'Read down a column for one network. Read across a row for a comparison. Across the Tools row is the difference; across the Result row is the similarity.'
        ],
        ask: 'Read across one row. Is that row a similarity or a difference, and why?',
        listenFor: 'Tools differ because geography differs; results are similar because demand and distance were the same everywhere.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Comparison',
      footer: 'Same category on both sides, then because.',
      template: {
        weak: 'The Silk Roads and the Indian Ocean were different.',
        strong: '**Both** networks lowered the cost of distance, **but** the Silk Roads relied on caravanserais and credit while the Indian Ocean relied on the monsoon and ships, **because** one crossed land and the other crossed open water.'
      },
      notes: {
        minutes: 5,
        land: [
          'The weak claim is true and scores nothing. It names no category and gives no reason.',
          'The strong claim has three moves: a similarity, a difference in the same category, and a because.',
          'Unbalanced evidence is the common mistake: one network\'s tools against another network\'s cities.'
        ],
        ask: 'What are the three words that carry the structure?',
        listenFor: 'Both, but, because.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Compare two networks in one category.',
      subtitle: 'Choose two networks. Choose one category. Use evidence from both. Explain why.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-7-comparison.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Circulate for balanced evidence: the same category on both sides.',
          'Push students who finish to add a because that names geography, technology, commercial systems, state support or demand.'
        ],
        ask: 'Is your evidence in the same category on both sides?',
        listenFor: 'A matched pair, such as caravanserai against port cities as places that lowered merchant risk.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'One similarity, with a because.',
      subtitle: 'On your own. Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-7-comparison.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'Independent. Watch for list answers that describe two networks without comparing them.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Where is the similarity, and where is the reason for it?',
        listenFor: 'Both networks grew trading cities because goods had to pass through them.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two networks.',
      subtitle: 'Cite one concrete detail from each source, and explain why the pattern existed.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-7-comparison.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'Students choose two cards from different networks in the same category.',
          'Observation before inference: what the source shows, then what it suggests.'
        ],
        ask: 'What does this source show before you tell me what it means?',
        listenFor: 'A concrete detail from the object, then the inference.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'One difference, and why it existed.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-7-comparison.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Start the review on time even if some students are still drafting. They finish Checkpoint 2 at home.'
        ],
        ask: 'Does your difference come with a because?',
        listenFor: 'A difference explained by geography, technology, commercial systems, state support or demand.'
      }
    },
    {
      phase: 'review', kind: 'grid', eyebrow: 'Eras 2 Retrieval · From Memory First',
      title: 'Say the whole unit from the matrix.',
      subtitle: 'Answer each from memory. Then check your notes. The gaps are what to study.',
      cards: [
        { title: 'WHY TRADE GREW', text: 'Name one tool from each network and the problem it solved. (2.1, 2.3, 2.4)' },
        { title: 'WHO PROTECTED IT', text: 'How did the Mongols and Mali make trade safer, and what did they gain? (2.2, 2.4)' },
        { title: 'WHAT ELSE MOVED', text: 'Name one belief, one technology, one crop and one disease that traveled. (2.5, 2.6)' },
        { title: 'COMPARE', text: 'One similarity, one difference, and a because for each. (2.7)' }
      ],
      notes: {
        minutes: 12,
        land: [
          'This is the exam review, and it is retrieval, not a re-lecture. Give two minutes per card from memory, then two minutes to check notes.',
          'The cards follow the matrix rows, so the synthesis and the review are the same structure.',
          'Answers: caravanserai and credit, monsoon and ships, camel saddle and caravan; Mongol protection of routes and Mali taxing and protecting trade; Islam or Buddhism, paper or gunpowder, bananas, rice or citrus, and plague.',
          'Tell students: whatever they could not retrieve is what to study tonight.'
        ],
        ask: 'Which card was hardest to answer from memory?',
        listenFor: 'An honest gap. That is the study plan.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.7 · Landing Sentence',
      title: 'Geography picked the tools. Demand did the rest.',
      subtitle: 'From c. 1200 to c. 1450, the Silk Roads, Indian Ocean and trans-Saharan networks solved the same problem with different tools, and all three grew trading cities, production and diffusion.',
      visual: { type: 'map' },
      notes: {
        minutes: 2,
        land: [
          'This sentence answers the Topic 2.7 learning objective: a similarity, a difference, and why.',
          'Bridge to Unit 3: these networks carried gunpowder. Next unit is what states did once they had it.'
        ],
        ask: 'What is the one-sentence answer to Topic 2.7?',
        listenFor: 'Same problem, different tools because of geography, same results.'
      }
    }
  ]
};
