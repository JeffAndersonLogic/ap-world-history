/* Topic 2.5 canonical authored teaching content: cultural consequences of connectivity.
 * Story approved 2026-09-23 as the First & 10 "Goods Were Never the Only Cargo":
 * bigger networks, more contact, diffusion and adaptation, cultural change, told in
 * four beats (beliefs, inventions, cities, travelers). Spine: connectivity changes
 * what societies know, and what they become.
 * Rebuilt 2026-09-24 on the slide templates (assets/js/behistorical-slide-templates.js),
 * following the story beat for beat. The old deck restated the chain on three
 * separate slides and carried a Big Rocks grid, a problem slide and a map check the
 * story does not need; it went from 16 projected slides to 11.
 * Pictures are assigned by slide id in topic-2-5-presentation-assets.js, so the
 * teacher surface and the generated student deck always show the same visuals.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.5',
    dates: 'September 28–29, 2026',
    minutes: 90,
    title: 'Cultural Consequences of Connectivity',
    subtitle: 'Goods were never the only cargo. The same routes carried beliefs, inventions and travelers, and each left a mark on the places it reached.',
    spine: 'Connectivity changes what societies know, and what they become.',
    retelling: 'compounding',
    essentialQuestion: 'How did intensified exchange networks change cultures, cities, and knowledge across Afro-Eurasia from c. 1200 to c. 1450?',
    apFocus: 'Cultural Developments + Causation + Continuity and Change',
    endTarget: 'Students can explain how bigger networks meant more contact, how contact spread beliefs and technologies that receiving societies adapted, how connected cities could rise and fall, and why more travelers wrote accounts of the world they crossed.'
  },

  priorities: {
    must: [
      'Teach the chain, not a list: bigger networks, more contact, diffusion and adaptation, cultural change. Every example proves a link in it.',
      'Name the carrier. “Islam spread” is not an explanation until it says who carried it, along which route, and why the receivers had a reason to adopt it.',
      'Make adaptation visible: paper and gunpowder became something new in the societies that took them in.',
      'Teach city fortunes as variation: Hangzhou rose, Samarkand fell and rose again, Baghdad fell in 1258 and never fully recovered.',
      'Use Ibn Battuta, Marco Polo and Margery Kempe as evidence twice: what they describe, and the fact that so many accounts were written.'
    ],
    should: [
      'Keep the chain slide in view during the First & 10 and return to it at each checkpoint.',
      'Say what each picture is. Angkor Wat, the Djenné mosque, the Catalan Atlas and al-Idrisi’s map are real; say which are older or newer than the period.',
      'Name the modules due today: First & 10, Checkpoint 1, Primary Source and Checkpoint 2.',
      'Keep Topic 2.6 separate: crops and disease are environmental consequences, not today’s story.'
    ],
    could: [
      'Use the full Heimler 2.5 review as retrieval after the chain is clear.',
      'Use the BeInTheRoom Silk Road Scholar activity as extension or reinforcement.',
      'Use the Evidence Lab as homework if the block runs long.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'Lock onto the chain and the four beats.', students: 'Not projected.' },
    { id: 'beready', label: 'BeReady', range: '0–4', minutes: 4, teacher: 'Retrieve Topic 2.4 and ask what rode along for free.', students: 'Answer from memory.' },
    { id: 'open', label: 'The Question', range: '4–6', minutes: 2, teacher: 'Put the story title up as the problem.', students: 'Write the question.' },
    { id: 'chain', label: 'The Chain + First & 10', range: '6–20', minutes: 14, teacher: 'Teach the chain, then leave it up during the reading.', students: 'Read the First & 10 for the chain.' },
    { id: 'beliefs', label: 'Beliefs', range: '20–27', minutes: 7, teacher: 'Name the carrier for each belief.', students: 'Say who carried it and why it was adopted.' },
    { id: 'inventions', label: 'Inventions', range: '27–33', minutes: 6, teacher: 'Diffusion, then adaptation.', students: 'Say what paper and gunpowder became.' },
    { id: 'check1', label: 'Checkpoint 1', range: '33–43', minutes: 10, teacher: 'Coach carrier plus adaptation.', students: 'One belief or one invention, start to finish.' },
    { id: 'cities', label: 'Cities', range: '43–52', minutes: 9, teacher: 'Rise, fall, and rise again.', students: 'Explain what built a city and what reversed it.' },
    { id: 'travelers', label: 'Travelers', range: '52–60', minutes: 8, teacher: 'Evidence twice.', students: 'Place the three travelers and say why they wrote.' },
    { id: 'source', label: 'Primary Source', range: '60–72', minutes: 12, teacher: 'Close read Ibn Battuta at Zaytun, then Module 08.', students: 'Read the passage as evidence of a city and a traveler.' },
    { id: 'check2', label: 'Checkpoint 2', range: '72–87', minutes: 15, teacher: 'Coach one city plus one traveler.', students: 'Write, get coached, revise.' },
    { id: 'close', label: 'Landing + Bridge', range: '87–90', minutes: 3, teacher: 'Land the spine and bridge to 2.6.', students: 'Say the chain from memory.' }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.5', url: '../unit-2/lesson-2-5-cultural-consequences.html' },
    { label: 'Student Presentation 2.5', url: '../unit-2/presentation-topic-2-5-student.html' },
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
      id: 'preflight', phase: 'preflight', kind: 'action', eyebrow: 'Teacher Preflight · Not Projected',
      title: 'Teach the chain, not the souvenirs.',
      subtitle: 'Bigger networks meant more contact. Contact spread beliefs and inventions that receiving societies adapted, built and broke cities, and put more travelers on the road with pens in their hands.',
      big: '2.5',
      notes: {
        minutes: 2,
        land: [
          'Learning Objective J asks how intensified exchange changed cultures and knowledge. The CED names three developments: cultural and technological diffusion (Buddhism, Hinduism, Islam, paper, gunpowder), urban growth and decline, and more travelers writing accounts (Ibn Battuta, Marco Polo, Margery Kempe).',
          'The First & 10 tells it as one chain in four beats: beliefs, inventions, cities, travelers. The deck follows it beat for beat, so a student who read it meets nothing new in shape, only more depth.',
          'Retelling slide: the chain, slide 3. If students can rebuild those four bars from memory and hang one example on each, they can answer both checkpoints.',
          'Every picture is real, and two are outside the period on purpose: Angkor Wat was built in the 1100s and the Djenné mosque in 1907 on an older site. Al-Idrisi’s map is from 1154. Say so when you show them.',
          'The trap is “it spread.” The second trap is “all trade cities grew.” Both get repaired at the checkpoints.'
        ],
        story: 'After 1200 more people moved along the Silk Roads, the Indian Ocean and the Sahara than ever before. Merchants, pilgrims, missionaries and scholars carried their beliefs, so Buddhism, Hinduism and Islam kept taking root in new places, often because rulers and traders had reasons to adopt them. Inventions moved the same way and changed on arrival: paper filled libraries in Baghdad and then European mills, and gunpowder became cannons. The same traffic built great cities, and war could wreck them. And because more people traveled, more wrote down what they saw.',
        ask: 'Before class: can you say the whole topic from the chain slide in thirty seconds?',
        listenFor: 'Because networks grew, contact grew; contact spread and reshaped beliefs and inventions, raised and exposed cities, and produced more travel writing.',
        ap: 'Causation, with continuity and change for the cities.'
      }
    },
    {
      id: 'beready', phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · Recall',
      title: 'Pull the desert story back from memory.',
      template: {
        questions: [
          { label: 'Sahara', text: 'What made regular crossings of the Sahara practical?' },
          { label: 'Mali', text: 'How did Mali make money from the trade that crossed it?' },
          { label: 'Networks', text: 'Name the three networks Unit 2 has studied so far.' }
        ],
        turn: 'Merchants paid to carry gold and salt. **What else rode along with them for free?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast verbal answers and do not reteach Topic 2.4.',
          'Accept brief evidence: the camel saddle and caravans; Mali protecting and taxing the routes; the Silk Roads, the Indian Ocean and the trans-Saharan routes.',
          'Read the turn aloud and take two or three guesses. Do not confirm any yet; the next slide asks it properly.'
        ],
        story: 'Topic 2.4 ended with Mansa Musa, a Muslim ruler whose religion reached West Africa with the traders. That is today’s lesson in miniature.',
        ask: 'Mansa Musa was Muslim. How did Islam get to Mali?',
        listenFor: 'With North African merchants and scholars on the caravan routes.',
        ap: 'Retrieval + contextualization: the networks students already know are the setting for today’s consequences.'
      }
    },
    {
      id: 'hook', phase: 'open', kind: 'frame-letterbox', eyebrow: 'Topic 2.5 · The Question',
      title: 'Goods were never the only cargo.',
      subtitle: 'The routes that carried silk, spices and gold also carried beliefs, inventions and travelers. What did they change?',
      template: {},
      notes: {
        minutes: 2,
        land: [
          'This is the story title and the topic question. Leave it up long enough to write down.',
          'The picture is a real source: a caravan on the Catalan Atlas, a world map made on Majorca in 1375. Point at the riders. Some of the cargo on this road is people.'
        ],
        story: 'The networks students already know are about to be looked at from a different angle: not what they carried to sell, but what they changed.',
        ask: 'Look at the people in the caravan. What might one of them bring home besides goods?',
        listenFor: 'A religion, a language, a story, a skill, a new idea, a book.',
        ap: 'Framing the causal question before the evidence.'
      }
    },
    {
      id: 'chain', phase: 'chain', kind: 'compounding', retelling: true, eyebrow: 'The Lesson in One Chain',
      title: 'Bigger networks, more contact, more change.',
      footer: 'Every example today proves one link. **Read the First & 10 with this chain in front of you.**',
      template: {
        steps: [
          { label: 'Bigger networks', text: 'More traffic on the Silk Roads, the Indian Ocean and the Sahara after 1200' },
          { label: 'More contact', text: 'Merchants, pilgrims, missionaries and scholars meet' },
          { label: 'Diffusion + adaptation', text: 'Beliefs and inventions move, then get reshaped' },
          { label: 'Cultural change', text: 'Societies change what they believe, know and build' }
        ]
      },
      notes: {
        minutes: 14,
        land: [
          'This is the retelling slide. Teach it in two minutes, then leave it up for the First & 10 (Module 02, about ten minutes).',
          'The bars grow on purpose: each link makes the next one bigger. More traffic means more meetings, and more meetings mean more chances for an idea to cross.',
          'Adaptation is the link students skip. Diffusion says how something arrived; adaptation says what it became.',
          'Circulate during the reading for the four beats: beliefs, inventions, cities, travelers.'
        ],
        story: 'The First & 10 calls it the chain: bigger networks, more contact, diffusion and adaptation, cultural and intellectual change. Every example in the reading follows it.',
        ask: 'Which link turns “it moved” into “it changed the place it reached”?',
        listenFor: 'Adaptation: the receiving society reshapes it.',
        ap: 'Causation: a chain with a mechanism, not a list of things that spread.'
      }
    },
    {
      id: 'beliefs', phase: 'beliefs', kind: 'frame-triptych', eyebrow: 'Beat 1 · Beliefs',
      title: 'Beliefs traveled with the people who held them.',
      template: {
        panels: [
          { title: 'Buddhism · East Asia' },
          { title: 'Hinduism and Buddhism · Southeast Asia' },
          { title: 'Islam · West Africa' }
        ]
      },
      notes: {
        minutes: 7,
        land: [
          'Three panels, the three CED examples. For each one, name the carrier.',
          'Buddhism kept shaping East Asia through monasteries, art and schools of thought in China, Korea and Japan. Monks and pilgrims moved along the same roads as merchants.',
          'Angkor Wat, in the Khmer Empire, was built in the 1100s for the Hindu god Vishnu and later became a Buddhist site. Hinduism and Buddhism reached Southeast Asia through trade with India. The temple is older than our period; what matters is that it stayed in use and changed religions.',
          'Islam spread into West Africa and Southeast Asia mostly through traders, scholars and teachers rather than armies. Rulers in Mali and in port cities such as Malacca often converted first, partly because Islam tied them to Muslim merchants and a wider world of law and learning.',
          'The Djenné mosque in the picture is a 1907 building on the site of earlier mosques. Students saw it in 2.4; use that.'
        ],
        story: 'More contact meant more chances for an idea to move. The people who carried beliefs were the same people who carried goods, plus the monks, pilgrims and scholars who traveled beside them.',
        ask: 'Pick one panel. Who carried that belief there, and why would the people receiving it have a reason to adopt it?',
        listenFor: 'Traders and scholars carried Islam; rulers adopted it to connect with Muslim merchants and law.',
        ap: 'Causation: name the carrier, the route and the reason for adoption.',
        avoid: 'Do not imply merchants alone spread religion, or that Islam spread in West Africa by conquest.'
      }
    },
    {
      id: 'inventions', phase: 'inventions', kind: 'split-mirror', eyebrow: 'Beat 2 · Inventions',
      title: 'Inventions changed as they moved.',
      footer: 'Diffusion explains how it arrived. **Adaptation explains what it became.**',
      template: {
        left: { name: 'Paper' },
        right: { name: 'Gunpowder' },
        rows: [
          { label: 'Started', left: 'Invented in China', right: 'Invented in China' },
          { label: 'Traveled', left: 'Into the Islamic world by the 700s, then into Europe', right: 'To Southwest Asia and Europe in the 1200s, on routes the Mongols tied together' },
          { label: 'Became', left: 'Cheap paper filled Baghdad’s libraries; European mills made it from linen rags', right: 'Cannons, and new kinds of warfare in Europe and the Islamic world' }
        ]
      },
      notes: {
        minutes: 6,
        land: [
          'Paper and gunpowder are the CED examples. Read down each side: same start, different road, different result.',
          'Paper had reached Samarkand and Baghdad centuries before 1200. The consequence in our period is what it became: cheap books, big libraries, and later European paper mills.',
          'Gunpowder is the cleaner case of adaptation. Receiving societies did not copy Chinese uses. Over time European and Islamic armies built it into cannons.',
          'The “Became” row is where students earn the point.'
        ],
        story: 'Technologies traveled the same way beliefs did, and changed as they went. A receiving society takes something from outside and reshapes it for its own needs.',
        ask: 'Finish the sentence without stopping at “spread”: gunpowder reached Europe, and then…',
        listenFor: 'Europeans built it into cannons, which changed how wars were fought.',
        ap: 'Causation: contact, diffusion, adaptation, change.',
        avoid: 'Do not stop at Chinese invention. The significance is transfer and adaptation.'
      }
    },
    {
      id: 'check1', phase: 'check1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · On Your Own',
      title: 'One belief or one invention, from start to finish.',
      subtitle: 'Who carried it, along which route, and what did the receiving society make of it?',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-5-cultural-consequences.html#modules' },
      big: '06',
      notes: {
        minutes: 10,
        land: [
          'Checkpoint 1 is the unaided diagnostic: no Socrates. Coach in the room instead.',
          'Strong answers name a carrier and a route, then say how the receiving society adapted it. Weak answers stop at “it spread.”'
        ],
        story: 'This checks the first two beats before the lesson turns to cities.',
        ask: 'Where in your answer is the adaptation?',
        listenFor: 'A sentence that says what the belief or invention became in its new home.',
        ap: 'Causation: mechanism plus consequence.'
      }
    },
    {
      id: 'cities', phase: 'cities', kind: 'split-matrix', eyebrow: 'Beat 3 · Cities',
      title: 'Connected cities could rise, and could fall.',
      footer: 'The same network that fed a city could expose it.',
      template: {
        columns: [ { name: 'Hangzhou' }, { name: 'Samarkand' }, { name: 'Baghdad' } ],
        rows: [
          { label: 'Rose on', cells: ['Rice farming and busy trade', 'A Silk Road market where merchants, goods and ideas met', 'Abbasid capital and a great center of learning'] },
          { label: 'Then', cells: ['One of the largest cities in the world', 'Destroyed by the Mongols in 1220, rebuilt more than a century later as a magnificent capital', 'Sacked by the Mongols in 1258, the caliph killed; it never fully recovered'] }
        ],
        result: { label: 'Pattern', text: 'Trade and productive farming could build a city. **War, conquest or shifting routes could reverse it.**' }
      },
      notes: {
        minutes: 9,
        land: [
          'The CED says the fate of cities varied greatly. Read the columns as three different fates: rose, fell and rose again, fell.',
          'Hangzhou was the Southern Song capital, fed by rice and trade. This growth of cities is urbanization.',
          'Samarkand shows both sides: destroyed in 1220, rebuilt as a capital more than a century later when routes and rulers changed again.',
          'Baghdad had been the Abbasid capital for about five hundred years. The 1258 sack ended the caliphate.'
        ],
        story: 'The same traffic made cities rich, and a connected city could also fall. When routes or rulers changed, a city’s fortunes changed with them.',
        ask: 'How can the same era of expanding trade produce Hangzhou and Baghdad at once?',
        listenFor: 'Cities depended on trade, farming and security; war and route changes could reverse growth.',
        ap: 'Continuity and change: growth was common, not guaranteed.',
        avoid: 'Do not teach “trade made all cities grow.”'
      }
    },
    {
      id: 'travelers', phase: 'travelers', kind: 'timeline-spans', eyebrow: 'Beat 4 · Travelers',
      title: 'More people traveled, so more people wrote it down.',
      footer: 'Evidence twice: **what they describe**, and **the fact that so many were written**.',
      template: {
        range: [1250, 1450],
        tick: 50,
        spans: [
          { name: 'Marco Polo', note: 'Venetian merchant · Mongol China', start: 1271, end: 1295 },
          { name: 'Ibn Battuta', note: 'Moroccan scholar and judge · Africa to China', start: 1325, end: 1354 },
          { name: 'Margery Kempe', note: 'English Christian pilgrim · Jerusalem, Rome, Santiago', start: 1413, end: 1417 }
        ]
      },
      notes: {
        minutes: 8,
        land: [
          'The CED claim is not that travel began. It is that intensified networks produced more travelers whose writings survive.',
          'Ibn Battuta spent about thirty years traveling through North and West Africa, the Middle East, India and China, often working as a judge in Muslim communities.',
          'Marco Polo described his years in Mongol China, and his book made Europeans curious about Asia.',
          'Margery Kempe went on pilgrimage to Jerusalem, Rome and Santiago. Her book is often called the first autobiography in English.',
          'They traveled for trade, faith and service, and wrote for readers back home. Each shows the world from one point of view.'
        ],
        story: 'Because more people traveled, more people recorded what they saw. Their accounts let us see the connected world through the eyes of people who crossed it.',
        ask: 'How does a travel account prove connectivity even before we check whether every detail is accurate?',
        listenFor: 'The traveler could cross the network and carry descriptions back to other readers.',
        ap: 'Evidence: an account is a source about a place and a sign of the network that produced it.'
      }
    },
    {
      id: 'source', phase: 'source', kind: 'source-quote', eyebrow: 'Module 08 · Primary Source · Close Read',
      footer: 'Zaytun is Quanzhou, on the coast of southern China.',
      template: {
        quote: 'The port of Zaytun is one of the largest in the world, or perhaps the very largest. I saw in it about a hundred large junks; as for small junks, they could not be counted for multitude.',
        attribution: { author: 'Ibn Battuta', work: 'Rihla', year: 'describing c. 1345' },
        notice: 'A judge from Morocco is standing in a Chinese port, writing for readers at home. **What does that fact alone tell you?**'
      },
      notes: {
        minutes: 12,
        land: [
          'This is the Module 08 passage, read large. Two minutes together, then students finish Module 08 on the lesson page.',
          'It is evidence for two beats at once: a thriving port city, and a traveler whose writing survived.',
          'Limits: he writes to impress readers at home, and “perhaps the very largest” is his judgment, not a count.'
        ],
        story: 'Ibn Battuta reached Zaytun in the 1340s. The passage shows a connected city at its height, seen by someone the network carried halfway across the world.',
        ask: 'What in the passage shows a city on a network, and what shows a network producing a traveler?',
        listenFor: 'Hundreds of ships; a Moroccan writing about China for readers back home.',
        ap: 'Sourcing: purpose and audience shape what a traveler reports.'
      }
    },
    {
      id: 'check2', phase: 'check2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2 · Draft, Coach, Revise',
      title: 'One city and one traveler.',
      subtitle: 'Explain one way connectivity changed a city and one way a traveler’s account shows a more connected world. Not finished in class? It is homework, all three steps.',
      action: { label: 'Open Student Lesson', url: '../unit-2/lesson-2-5-cultural-consequences.html#modules' },
      big: '10',
      notes: {
        minutes: 15,
        land: [
          'Draft first, then Socrates, then revise. The revised answer in the box is what goes to Canvas.',
          'Repair the second trap here: “all trade cities grew” becomes “city fortunes varied with trade, farming, war and route changes.”'
        ],
        story: 'This checks the last two beats and the chain behind them.',
        ask: 'Where is the sentence that explains how the network caused the change?',
        listenFor: 'Because exchange increased contact, the city grew or was exposed, and the traveler could cross and write.',
        ap: 'Causation plus evidence.'
      }
    },
    {
      id: 'landing', phase: 'close', kind: 'frame-subtitle', eyebrow: 'Topic 2.5 · Landing',
      title: 'Connectivity changes what societies know, and what they become.',
      template: { line: 'Connectivity changes **what societies know**, and **what they become**.' },
      notes: {
        minutes: 3,
        land: [
          'Say the spine, then have two students say the chain from memory.',
          'The map is al-Idrisi’s world map of 1154, made by a Muslim geographer for a Christian king in Sicily from travelers’ reports. It is older than our period and makes the point: knowledge of the world was built by connection.',
          'Bridge to 2.6: the same networks also moved living things, crops and disease, with environmental consequences.'
        ],
        story: 'Bigger networks meant more contact, and more contact meant diffusion and adaptation. Beliefs and inventions moved and were reshaped, cities rose and fell, and travelers wrote down the connected world they crossed.',
        ask: 'What changes when the thing moving through the network is alive?',
        listenFor: 'Crops, disease, population and environment: Topic 2.6.',
        ap: 'Synthesis: this sentence answers Learning Objective J.'
      }
    }
  ]
};
