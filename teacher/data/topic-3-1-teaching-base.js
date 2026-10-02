/*
 * Topic 3.1 canonical Teaching OS source.
 * Story spine: cannons could break the old walls, and only big, rich states
 * could afford cannons, so big states got bigger.
 * Wall version: Guns take land. Land pays for guns.
 * Story approved by Jeff 2026-10-02 (docs/TOPIC-3-1-STORY-DRAFT.md), with
 * "could break" in place of the story map's "useless", the gunpowder loop as
 * the retelling slide, Kandahar's failed Mughal sieges kept as the limit of
 * guns, and one line each for Russia and Chaldiran.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '3.1',
    minutes: 90,
    title: 'Empires Expand',
    subtitle: 'Cannons could break the old walls, and only big, rich states could afford cannons, so big states got bigger.',
    essentialQuestion: 'How and why did land-based empires develop and expand from 1450 to 1750?',
    apFocus: 'Causation',
    endTarget: 'Students can explain how gunpowder let large, wealthy states expand, name the four land empires the CED lists, and explain one rivalry between states using a political or religious dispute.'
  },

  priorities: {
    must: [
      'Teach the loop, not a list of empires: guns take land, land pays taxes, taxes buy more guns.',
      'Keep the mechanism visible: a cannon is a bill as much as a weapon, so guns rewarded states that were already big and rich.',
      'Name the CED\'s four land empires: Ottoman, Safavid, Mughal, and Manchu (Qing).',
      'Teach both CED rivalries with their dispute: Kandahar (Safavid and Mughal, political) and Tondibi (Morocco and Songhai, political and religious).',
      'Keep the limit: guns did not always win. Kandahar held against Mughal guns three times.'
    ],
    should: [
      'Use the gunpowder loop as the retelling slide and have students draw it from memory.',
      'Keep devshirme and the Janissaries to "who fired the guns". Topic 3.2 owns them.',
      'Name the modules due today: 02 First & 10, 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2.'
    ],
    could: [
      'Use the Constantinople Breach BeInTheRoom as an extension for students who finish early.',
      'Point students who want depth to the deep reading, "The Wall That Stopped Working".'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The loop is the lesson. The empires are evidence inside it.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 2.7 and gunpowder from 2.5, bridge to what states did with it.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-6', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '6-16', minutes: 10, teacher: 'Module 02: the whole story once, before the slides.', students: 'Read and answer three questions.', slide: 4 },
    { id: 'oldrule', label: 'The Old Rule', range: '16-20', minutes: 4, teacher: 'A wall beat an army, until 1453.', students: 'Spot what changed between 1422 and 1453.', slide: 5 },
    { id: 'gun', label: 'The Gun Itself', range: '20-26', minutes: 6, teacher: 'Read a real Ottoman bombard as evidence.', students: 'Infer what it took to build one.', slide: 6 },
    { id: 'bill', label: 'The Bill', range: '26-31', minutes: 5, teacher: 'The mechanism: a cannon is a bill.', students: 'Name what a siege gun costs.', slide: 7 },
    { id: 'loop', label: 'Big States Got Bigger', range: '31-35', minutes: 4, teacher: 'Guns take land, land pays for guns.', students: 'Say the loop.', slide: 8 },
    { id: 'cp1', label: 'Checkpoint 1', range: '35-41', minutes: 6, teacher: 'Independent: how gunpowder enabled expansion.', students: 'Work without the coach.', slide: 9 },
    { id: 'map', label: 'Four Empires', range: '41-43', minutes: 2, teacher: 'Put the CED\'s four on one map.', students: 'Name each empire.', slide: 10 },
    { id: 'moments', label: 'One Loop, Four Times', range: '43-50', minutes: 7, teacher: 'One gunpowder moment per empire.', students: 'Match each empire to its moment.', slide: 11 },
    { id: 'rivals', label: 'Rivals at the Edges', range: '50-57', minutes: 7, teacher: 'Kandahar and Tondibi: the dispute, the guns, the lesson.', students: 'Name the dispute in each.', slide: 12 },
    { id: 'route', label: 'Across the Sahara', range: '57-61', minutes: 4, teacher: 'Trace the Moroccan army to Tondibi.', students: 'Explain why a small army won.', slide: 13 },
    { id: 'retell', label: 'The Gunpowder Loop', range: '61-67', minutes: 6, teacher: 'Students draw the loop from memory.', students: 'Redraw the whole topic.', slide: 14 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '67-71', minutes: 4, teacher: 'Upgrade a weak causation claim.', students: 'Add the cost, the loop and a limit.', slide: 15 },
    { id: 'evidence', label: 'Evidence Lab', range: '71-80', minutes: 9, teacher: 'Module 07: two pieces of evidence, one claim.', students: 'Observe, then infer.', slide: 16 },
    { id: 'cp2', label: 'Checkpoint 2', range: '80-88', minutes: 8, teacher: 'Module 10: two empires and one rivalry. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 17 },
    { id: 'close', label: 'Landing Sentence', range: '88-90', minutes: 2, teacher: 'Land the answer and hand off to 3.2.', students: 'Say the topic in one sentence.', slide: 18 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 3.1', url: '../unit-3/lesson-3-1-empires-expand.html' },
    { label: 'First & 10', url: '../unit-3/first-and-10-topic-3-1-empires-expand-capture.html?v=response-id-fix-v1' },
    { label: 'BeInTheRoom: The Constantinople Breach', url: '../beintheroom/unit-3/the-constantinople-breach.html' },
    { label: 'Deep Reading', url: '../unit-3/deep-reading-topic-3-1-empires-expand.html' },
    { label: 'Empires Expand review video', url: 'https://youtu.be/kG_A3ET3foc' }
  ],

  projection: {
    storageKey: 'behistorical-topic-3-1-slide',
    title: 'Topic 3.1 Presentation',
    file: 'present-topic-3-1.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'The loop is the lesson. The empires are evidence inside it.',
      subtitle: 'Cannons could break the old walls, and only big, rich states could afford cannons, so big states got bigger.',
      notes: {
        minutes: 2,
        land: [
          'The learning objective asks how and why land-based empires developed and expanded from 1450 to 1750. Causation: every claim needs a mechanism.',
          'The mechanism is the loop: guns break walls, guns cost money only big states have, conquest brings land and taxes, taxes buy more guns.',
          'The CED names four land empires (Ottoman, Safavid, Mughal, Manchu/Qing) and two rivalries (Safavid and Mughal, Songhai and Morocco). All six appear today, as evidence inside claims, not as a tour.',
          'Devshirme and the Janissaries belong to Topic 3.2. Today they are only who fired the guns.',
          'Modules due today: 02 First & 10, 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2. Checkpoint 2 finishes at home if it is not done in class.'
        ],
        ask: 'What is the one sentence every student should leave with?',
        listenFor: 'Gunpowder let big, rich states take more land, and the land paid for more guns, until growing empires ran into each other.',
        avoid: 'Avoid "gunpowder made empires big" with no cost and no limit. Guns were necessary, not sufficient: money, cavalry and alliances mattered too.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the last unit back from memory.',
      template: {
        questions: [
          { label: 'Topic 2.7', text: 'What problem did all three trade networks solve?' },
          { label: 'Topic 2.5', text: 'Name one technology that traveled west from China along those routes.' },
          { label: 'Topic 2.4', text: 'Which West African empire grew rich from the Sahara trade?' }
        ],
        turn: 'These networks moved gunpowder. **This unit: what states did once they had it.**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: distance (moving goods far, cheaply and safely); gunpowder or paper; Mali (Songhai is also fine, and it matters later today).',
          'The turn is the 2.7 hand-off. Gunpowder was cargo in Unit 2. In Unit 3 it is power.'
        ],
        ask: 'If gunpowder was just one more thing traveling the routes, why would a ruler care about it?',
        listenFor: 'Because it could be turned into weapons that win wars.',
        ap: 'Retrieval plus bridge: a Unit 2 technology becomes the cause in Unit 3.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 3: Learning Objective A',
      title: 'Why did a few empires get so big between 1450 and 1750?',
      subtitle: 'Hold that question. By the end of class you can answer it in one sentence, with a because.',
      notes: {
        minutes: 2,
        land: [
          'This is the learning objective as a question. Leave it on screen long enough for a prediction.',
          'A strong prediction names a cause. A weak one names an empire.'
        ],
        ask: 'Make a prediction: what made these empires grow?',
        listenFor: 'Weapons, money, or strong rulers. Any cause is a good start; we will test it.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read the whole story once.',
      subtitle: 'Read "Big States Got Bigger", then answer the three questions and rate your confidence.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'The First & 10 tells the same story as the slides: the old rule, 1453, the bill, the loop, four empires, and the rivals at the edges.',
          'Circulate. The question students get wrong most often is the third one: the dispute behind a rivalry, not just who fought whom.'
        ],
        ask: 'What is one thing a cannon needs besides a soldier?',
        listenFor: 'Metal, a foundry, gunpowder, oxen to move it, money to pay for all of it.'
      }
    },
    {
      phase: 'oldrule', kind: 'timeline', eyebrow: 'The Old Rule',
      kc: 'KC-4.3.II', title: 'For a thousand years, a wall beat an army.',
      footer: 'Constantinople\'s land walls held for a thousand years. In 1453 they did not. What changed?',
      template: {
        range: [400, 1460],
        tick: 100,
        events: [
          { year: 413, label: 'c. 413', text: 'The great land walls of Constantinople are built.' },
          { year: 626, label: '626', text: 'An Avar army, allied with Persia, besieges the city. The walls hold.' },
          { year: 717, label: '717', text: 'An Arab army besieges it for a year. The walls hold.' },
          { year: 1422, label: '1422', text: 'The Ottomans try, with small cannons. The walls hold.' },
          { year: 1453, label: '1453', text: 'The Ottomans return with giant cannons. The walls fall.' }
        ]
      },
      notes: {
        minutes: 4,
        land: [
          'The land walls were built under Theodosius II in the 400s and held against every army that attacked them by land for about a thousand years.',
          'Precision matters here: the city itself did fall once before, in 1204, when the Fourth Crusade broke in through the sea walls on the Golden Horn. The land walls were never broken by assault before 1453. If a student knows about 1204, that is the answer.',
          'The key comparison is 1422 against 1453: the same attacker, the same walls, thirty years apart. The difference is the size of the guns.'
        ],
        ask: 'Same walls, same attacker, 1422 and 1453. What was different the second time?',
        listenFor: 'Much bigger cannons.',
        ap: 'Causation starts with change over time: find what changed between the failure and the success.'
      }
    },
    {
      phase: 'gun', kind: 'annotated', eyebrow: 'Evidence · The Gun Itself',
      kc: 'KC-4.3.II', title: 'Read the gun before you read the history.',
      footer: 'The Dardanelles Gun, cast for Mehmed II in 1464. About 17 tonnes of bronze, in two halves.',
      template: {
        visual: {
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Turkish_Bombard_at_Fort_Nelson.JPG?width=1200',
          alt: 'The Dardanelles Gun, a huge green bronze Ottoman cannon displayed in two separate halves on wooden blocks in a museum hall',
          credit: 'Dardanelles Gun, 1464 · Royal Armouries, Fort Nelson · Wikimedia Commons',
          position: '100% 50%'
        },
        pins: [
          { x: 0.35, y: 0.51, label: 'The bore', text: 'Stone balls about 63 cm across were fired down this barrel.' },
          { x: 0.52, y: 0.52, label: 'Two halves', text: 'Cast separately and screwed together at these lugs, so it could be moved.' },
          { x: 0.71, y: 0.54, label: 'Bronze', text: 'About 17 tonnes of cast metal.' },
          { x: 0.89, y: 0.57, label: 'The breech', text: 'The powder chamber. Firing it took a trained crew.' }
        ]
      },
      notes: {
        minutes: 6,
        land: [
          'This is a real object: the Dardanelles Gun, cast in 1464 by Munir Ali for Mehmed II, eleven years after Constantinople. It is now in the Royal Armouries at Fort Nelson in England. It is the same kind of gun Mehmed brought in 1453, not one of those guns.',
          'Observation first: size, metal, two pieces, the screw lugs. Then inference: what does it take to make, move and fire this?',
          'Figures for teaching: about 17 tonnes, about 5 meters long, a bore of about 63 cm. Say "about".',
          'The museum placard in the photograph stands about waist height, which is the easiest scale reference in the picture.'
        ],
        ask: 'Before any history: what would you need to build this, move it a hundred miles, and fire it?',
        listenFor: 'Metal, a foundry, skilled casters, animals and roads to haul it, gunpowder, a trained crew. In a word: money.',
        ap: 'Sourcing an object: what it shows directly (size, metal, design) before what it suggests (cost, state power).'
      }
    },
    {
      phase: 'bill', kind: 'equation-stack', eyebrow: 'The Mechanism',
      kc: 'KC-4.3.II', title: 'A cannon is a bill.',
      footer: 'The engineer who cast Mehmed\'s biggest gun offered it to the Byzantine emperor first. The emperor could not pay him. (Doukas, a Byzantine chronicler)',
      template: {
        terms: [
          { word: 'Metal and a foundry', note: 'tonnes of bronze, and somewhere to cast it' },
          { word: 'Specialists', note: 'founders and gunners who know the craft' },
          { word: 'Gunpowder', note: 'by the ton, for a siege of weeks' },
          { word: 'Oxen, roads, soldiers', note: 'to haul the guns and protect them' }
        ],
        result: { word: 'A siege train only a rich state could pay for' }
      },
      notes: {
        minutes: 5,
        land: [
          'This is the mechanism slide. A siege gun is not just a weapon; it is a project, and projects need treasuries.',
          'The Urban story: a founder named Urban, usually called Hungarian, offered his services to the Byzantine emperor Constantine XI, who could not pay what he asked. He went to Mehmed II, who could. This comes from Doukas, a Byzantine historian writing soon after 1453, so it is attributed, not stated as certain fact.',
          'Reported for the largest gun: dozens of oxen and hundreds of men to move it from Edirne to Constantinople. These are chronicle figures; use them as "reported".'
        ],
        ask: 'Who in 1453 could afford this list, and who could not?',
        listenFor: 'The Ottoman sultan could. The Byzantine emperor, ruling one shrinking city, could not.',
        ap: 'Mechanism: the step between "gunpowder existed" and "big empires grew" is cost.'
      }
    },
    {
      phase: 'loop', kind: 'compounding', eyebrow: 'The Spine',
      kc: 'KC-4.3.II', title: 'Big states got bigger.',
      footer: 'Guns take land. Land pays for guns.',
      template: {
        steps: [
          { label: 'Guns', text: 'A rich state buys siege guns.' },
          { label: 'Land', text: 'Guns break walls and win battles.' },
          { label: 'Taxes', text: 'Conquered land pays the ruler.' },
          { label: 'More guns', text: 'The bigger treasury buys more.' }
        ]
      },
      notes: {
        minutes: 4,
        land: [
          'This is the spine, said as a loop: guns take land, land pays for guns.',
          'It is why the gunpowder age favored big states over small ones. A small state could buy a few handguns; it could not field a siege train.',
          'Honest limit, said once: guns were necessary, not sufficient. These empires also ran on cavalry, alliances and good administration. Topic 3.2 is about the administration.'
        ],
        ask: 'Why would this loop make the gap between big and small states grow over time?',
        listenFor: 'Each win made the big state richer, so it could afford the next win.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'How did gunpowder help empires expand?',
      subtitle: 'On your own. Name a weapon, an empire and what the weapon let it do. Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'Independent. Watch for answers that say "gunpowder was powerful" with no mechanism.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'What did the weapon let the empire do that it could not do before?',
        listenFor: 'Ottoman cannons broke the walls of Constantinople in 1453, which let the Ottomans take a city that had held for a thousand years.'
      }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Four Empires',
      kc: 'KC-4.3.II.B', title: 'Four empires ran the loop.',
      visual: { type: 'map' },
      footer: 'Ottoman, Safavid, Mughal and Manchu (Qing): the four land empires the CED names.',
      notes: {
        minutes: 2,
        land: [
          'Put all four on one map before saying anything about each. Students need to see them as four cases of one pattern.',
          'Point to each: Ottoman across Southern Europe, the Middle East and North Africa; Safavid in Iran; Mughal across South Asia; Qing across China and then Central and East Asia.',
          'The zones on this map mark where each empire was centered, not its borders. Leave Kandahar and Tondibi for later.'
        ],
        ask: 'Which two empires are neighbors? Where would you expect them to fight?',
        listenFor: 'Ottoman and Safavid, or Safavid and Mughal, along their borders.'
      }
    },
    {
      phase: 'moments', kind: 'grid', eyebrow: 'One Loop, Four Times',
      kc: 'KC-4.3.II.B', title: 'Each empire has a gunpowder moment.',
      footer: 'Russia grew across Siberia the same way in these centuries.',
      cards: [
        { title: 'OTTOMAN', text: '1453: cannons break the walls of Constantinople.' },
        { title: 'MUGHAL', text: '1526: Babur\'s field guns win at Panipat and open northern India.' },
        { title: 'SAFAVID', text: 'After losing to Ottoman guns at Chaldiran in 1514, Shah Abbas I builds musket and cannon units.' },
        { title: 'QING (MANCHU)', text: 'Armies with cannon take China, then Mongolia, Tibet and Xinjiang by the 1750s.' }
      ],
      notes: {
        minutes: 7,
        land: [
          'Four cases of the same loop. Each card is one moment, not a history of the empire.',
          'Ottoman: Mehmed II, 1453.',
          'Mughal: Babur won at Panipat in 1526 against a much larger army, using field guns and matchlocks, which opened northern India to Mughal rule.',
          'Safavid: one line only, because Topic 3.3 owns Chaldiran\'s religious meaning. The Safavids lost to Ottoman guns there in 1514; later, Shah Abbas I (r. 1588 to 1629) built standing units of musketeers and artillery.',
          'Qing: the Manchus conquered Ming China from 1644 and used cannon in their campaigns. By the 1750s they had destroyed the Zunghar Mongol state and taken Xinjiang.',
          'Russia: one line. Real gunpowder expansion, but not one of the CED\'s four in this Key Concept.'
        ],
        ask: 'What do all four cards have in common?',
        listenFor: 'Each empire grew when gunpowder let it win, and each was big and rich enough to afford it.'
      }
    },
    {
      phase: 'rivals', kind: 'split-mirror', eyebrow: 'The Twist · Rivals',
      kc: 'KC-4.3.III.i', title: 'Growing empires ran into each other.',
      footer: 'Political and religious disputes turned neighbors into rivals. Guns often decided the fight, but not always.',
      template: {
        left: { name: 'Kandahar' },
        right: { name: 'Tondibi' },
        rows: [
          { label: 'The dispute', left: 'Political: Safavids and Mughals both want the fortress on the road between Iran and India', right: 'Political and religious: Morocco claims to rule all Muslims and wants Songhai\'s salt revenue' },
          { label: 'What happened', left: 'It changed hands four times, 1595 to 1649', right: 'A few thousand Moroccans with guns beat a far larger Songhai army, 1591' },
          { label: 'Did guns decide it?', left: 'No. Mughal guns failed to retake it three times', right: 'Yes. Songhai never recovered as an empire' }
        ]
      },
      notes: {
        minutes: 7,
        land: [
          'These are the two rivalries the CED names. Each needs its dispute, not just the names of the sides.',
          'Kandahar is political, not religious. Both courts were Muslim and Persian in culture; they fought over a strategic fortress and trade road. Do not call it a Sunni and Shia war. It changed hands in 1595, 1622, 1638 and 1649, and the Mughals failed to take it back in 1649, 1652 and 1653.',
          'Tondibi carries the religious half: Ahmad al-Mansur of Morocco claimed to be the rightful caliph of all Muslims and demanded that Songhai pay him the revenue of the Taghaza salt mines. When Songhai refused, he sent an army across the Sahara.',
          'The Tondibi army\'s size and the Songhai army\'s size come from chronicles. Say "a few thousand" and "many times larger", not exact numbers.'
        ],
        ask: 'Which rivalry shows the limit of the loop, and why?',
        listenFor: 'Kandahar, because Mughal guns could not retake it. Guns did not always win.',
        ap: 'Causation with a limit: the strongest claim names where the cause stopped working.'
      }
    },
    {
      phase: 'route', kind: 'frame-route', eyebrow: 'Close-up · Tondibi',
      kc: 'KC-4.3.III.i', title: 'Morocco crosses the Sahara, 1590 to 1591.',
      footer: 'The same desert and the same gold and salt as Topic 2.4. This time the caravan carried guns.',
      template: {
        visual: {
          url: '../assets/images/topics/2-4/2.4%20-%20Africa%20Satellite.jpg',
          alt: 'Satellite image of northwest Africa, the Sahara in tan and the Sahel in green, with the route from Marrakesh to the Niger',
          credit: 'Satellite image · Africa'
        },
        ratio: 1.0047923322683705,
        view: { x: 0.08, y: 0.03, w: 0.32, h: 0.37 },
        stops: [
          { name: 'Marrakesh', text: 'Late 1590: a Moroccan army of a few thousand sets out, with guns', x: 0.161, y: 0.105 },
          { name: 'Tondibi', text: 'March 1591: guns break a far larger Songhai army, near Gao', x: 0.245, y: 0.276 },
          { name: 'Timbuktu', text: '1591: Moroccan troops occupy the city', x: 0.211, y: 0.275 }
        ]
      },
      notes: {
        minutes: 4,
        land: [
          'Trace the route: Marrakesh, across the desert, to the Niger near Gao, the Songhai capital. The crossing took months.',
          'The battle near Tondibi was in March 1591. The Songhai army was far larger; the Moroccans had firearms and light artillery. The Songhai tried to stampede cattle into the Moroccan line, and the gunfire turned the herd back.',
          'The tie to Unit 2: this is the same gold and salt trade from Topic 2.4. Morocco wanted it.',
          'Aftermath, if there is time: Morocco won the battle but could not govern the region from across the desert. Guns take a place; they do not run it. That is Topic 3.2\'s question.'
        ],
        ask: 'Why could a few thousand soldiers beat an army many times larger?',
        listenFor: 'Guns. The Songhai army did not have firearms.'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'The gunpowder loop.',
      footer: 'At the edge of the loop: borders meet rivals, and wars over land, wealth and the right to rule.',
      template: {
        steps: [
          { label: 'Cannons break walls', text: 'The old rule ends in 1453' },
          { label: 'Only rich states can pay', text: 'A siege gun is a bill', key: true },
          { label: 'Conquest brings land', text: 'and the taxes on it' },
          { label: 'Taxes buy more guns', text: 'and the loop starts again' }
        ],
        links: ['but', 'so', 'so']
      },
      notes: {
        minutes: 6,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students draw it from memory, including the arrow out of the loop.',
          'Read it as one sentence: cannons broke walls, but only rich states could pay for them, so conquest brought land and taxes, so the taxes bought more guns.',
          'The footer is the rivalry beat: an empire that keeps growing meets another one.'
        ],
        ask: 'Draw it from memory. Where does the loop go back to the start, and where does it lead out?',
        listenFor: 'Taxes buy more guns, which takes it back to the start. Growing borders meet rivals, which leads out to war.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      footer: 'Name the cause, the mechanism and a limit.',
      template: {
        weak: 'Gunpowder made empires big.',
        strong: 'Gunpowder let states that were **already rich** break walls and win battles, **so** they took land whose taxes bought more guns, **although** guns did not always win, as the Mughals found at Kandahar.'
      },
      notes: {
        minutes: 4,
        land: [
          'The weak claim is true and scores little. It names no mechanism and no limit.',
          'The strong claim has three moves: the condition (already rich), the mechanism (the loop), and a limit (Kandahar).'
        ],
        ask: 'What does the word "although" add to the strong claim?',
        listenFor: 'A limit, which shows the cause did not always work.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two pieces of evidence.',
      subtitle: 'Say what each source shows before what it means. Name one limit of one source.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 9,
        land: [
          'The Evidence Lab has the 1464 bombard, the Panipat painting, the 1453 siege record and maps of the Mughal and Safavid empires.',
          'Observation before inference. The Panipat painting was made decades after the battle for a Mughal court: that is a limit worth naming.'
        ],
        ask: 'What does this source show before you tell me what it means?',
        listenFor: 'A concrete detail first, then the inference.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Two empires, and one rivalry.',
      subtitle: 'Describe two empires\' expansion, then explain Kandahar or Tondibi with its dispute. Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'The rivalry half is where answers go thin: push for the dispute (political or religious), not just who fought.'
        ],
        ask: 'What was the dispute behind your rivalry?',
        listenFor: 'Control of the Kandahar fortress and road; or Morocco\'s claim to rule all Muslims and its demand for Songhai\'s salt revenue.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 3.1 · Landing Sentence',
      title: 'Guns take land. Land pays for guns.',
      subtitle: 'From 1450 to 1750, cannons could break the old walls, and only big, rich states could afford them, so the Ottoman, Safavid, Mughal and Qing empires grew, until their borders met rivals.',
      visual: { type: 'map' },
      notes: {
        minutes: 2,
        land: [
          'This sentence answers the Topic 3.1 learning objective: how (gunpowder and the loop) and why (only big, rich states could afford it).',
          'Hand-off to 3.2: Mehmed took Constantinople in seven weeks. Now he has to run it.'
        ],
        ask: 'What is the one-sentence answer to Topic 3.1?',
        listenFor: 'Guns let rich states take land that paid for more guns, so big states got bigger.'
      }
    }
  ]
};
