/*
 * Topic 4.2 canonical Teaching OS source.
 * CED: Fall 2026 pp. 79-80 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Causation. Suggested skill: 5.B Making Connections. Two learning objectives:
 * B (the role of states) and C (economic causes and effects).
 * Story: docs/TOPIC-4-2-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Who Paid?" is
 * written from the same story, and this deck retells it in the same words.
 * Spine: Rulers paid for voyages because they wanted the trade, and every voyage
 * that paid made the next one easier to fund.
 * Wall version: Rulers backed the voyages. Voyages paid back. More ships sailed.
 * Retelling slide: the three-column matrix (phase 'matrix').
 *
 * Taught Green Friday 2026-10-30 and Silver Monday 2026-11-02. Required modules:
 * 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.2',
    minutes: 90,
    title: 'Exploration: Causes and Events',
    subtitle: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
    essentialQuestion: 'What role did states play in maritime exploration from 1450 to 1750, and what were its economic causes and effects?',
    apFocus: 'Causation, with Making Connections 5.B',
    endTarget: 'Students can explain why and how rulers backed ocean voyages, by paying for them or by granting explorers rights; trace who paid, what they wanted and what they got for Portugal, Spain, and England, France and the Dutch; and connect one state\'s voyage to another state\'s decision to sponsor its own.'
  },

  priorities: {
    must: [
      'Answer both learning objectives: the role of states (who backed the voyages, by paying or by granting rights) and the economic causes and effects (what they wanted, and what they got).',
      'State the economic cause as a mechanism: spices passed through many middlemen, so a sea route to India meant buying cheap and selling dear.',
      'Give the northern crossings equal standing: England, France and the Dutch looked for another way to Asia, never found it, and got fish, furs and claims.',
      'Land the spine with the matrix: every voyage that paid made the next one easier to fund, and made rivals want their own.'
    ],
    should: [
      'Correct three myths on the way: 1453 did not close the spice trade, Henry ran no school at Sagres, and Magellan did not finish the voyage around the world.',
      'Model one Making Connections sentence: Portugal held the African route, so Spain had to go west.',
      'Say "Historical Reconstruction" when the Calicut picture is on screen.'
    ],
    could: [
      'Use the BeInTheRoom Santa Fe Bargain as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Who Paid, and What For."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the two objectives, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.1 and 2.3. Bridge to who paid.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Who Paid?" in class.', students: 'For each state: who paid, what they wanted, what they got.', slide: 4 },
    { id: 'spice', label: 'The Spice Chain', range: '17-20', minutes: 3, teacher: 'Every middleman took a cut.', students: 'Say why a sea route would pay.', slide: 5 },
    { id: 'state', label: 'How Rulers Backed Voyages', range: '20-23', minutes: 3, teacher: 'Two ways to back a voyage.', students: 'Say what a ruler gave and wanted back.', slide: 6 },
    { id: 'portugal', label: 'Portugal, Step by Step', range: '23-26', minutes: 3, teacher: 'Ceuta to Malacca.', students: 'Find where each return paid for the next.', slide: 7 },
    { id: 'calicut', label: 'Calicut, 1498', range: '26-27', minutes: 1, teacher: 'Reconstruction: newcomers in a busy ocean.', students: 'Say what da Gama came for.', slide: 8 },
    { id: 'posts', label: 'What Portugal Got', range: '27-29', minutes: 2, teacher: 'The trading-post empire.', students: 'Ports, not lands.', slide: 9 },
    { id: 'contract', label: 'The Contract', range: '29-32', minutes: 3, teacher: 'Santa Fe, April 1492.', students: 'Say what the rulers gave and what they wanted.', slide: 10 },
    { id: 'spain', label: 'Interest Grows', range: '32-35', minutes: 3, teacher: 'Three ships, then seventeen, then the Pacific.', students: 'Name the effect the CED names.', slide: 11 },
    { id: 'line', label: 'Tordesillas', range: '35-37', minutes: 2, teacher: 'Two crowns split the claims.', students: 'Say who was left out.', slide: 12 },
    { id: 'north', label: 'The Northern Crossings', range: '37-41', minutes: 4, teacher: 'England, France, Dutch.', students: 'What they looked for, what they found.', slide: 13 },
    { id: 'map', label: 'Three Ways to Asia', range: '41-43', minutes: 2, teacher: 'The whole topic on one map.', students: 'Trace each sponsor\'s route.', slide: 14 },
    { id: 'pattern', label: 'The Pattern', range: '43-45', minutes: 2, teacher: 'Pay, return, pay again, rivals join.', students: 'Name the link that brought in rivals.', slide: 15 },
    { id: 'myths', label: 'Myth and Evidence', range: '45-48', minutes: 3, teacher: '1453, Sagres, Magellan.', students: 'Correct each myth.', slide: 16 },
    { id: 'matrix', label: 'Who Paid, What For', range: '48-53', minutes: 5, teacher: 'Students redraw the matrix from memory.', students: 'Retell the whole topic.', slide: 17 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '53-56', minutes: 3, teacher: 'Model one connection sentence.', students: 'Upgrade a weak claim.', slide: 18 },
    { id: 'skill', label: 'Skill Builder', range: '56-63', minutes: 7, teacher: 'Module 05: Making Connections.', students: 'Connect one state\'s voyage to another\'s decision.', slide: 19 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: the role of states.', students: 'Work without the coach.', slide: 20 },
    { id: 'evidence', label: 'Evidence Lab', range: '63-71', minutes: 8, teacher: 'Module 07: one claim from two sources.', students: 'Observe, then infer, then name a limit.', slide: 21 },
    { id: 'cp2', label: 'Checkpoint 2', range: '71-81', minutes: 10, teacher: 'Module 10: one Iberian and one northern voyage, cause and effect. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 22 },
    { id: 'close', label: 'Landing Sentence', range: '81-83', minutes: 2, teacher: 'Land the answer and hand off to 4.3.', students: 'Say the topic in one sentence.', slide: 23 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.2', url: '../unit-4/lesson-4-2-exploration.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-2-exploration-capture.html' },
    { label: 'BeInTheRoom: The Santa Fe Bargain', url: '../beintheroom/unit-4/the-santa-fe-bargain.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-2-exploration.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-2-slide',
    title: 'Topic 4.2 Presentation',
    file: 'present-topic-4-2.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
      subtitle: 'Causation, with Making Connections 5.B. Who paid, what they wanted, what they got: for Portugal, Spain, and England, France and the Dutch.',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 79 and 80. Learning Objective B: describe the role of states in the expansion of maritime exploration from 1450 to 1750. Learning Objective C: explain the economic causes and effects of maritime exploration by the various European states. The story answers both: who paid, and what the voyages were for and produced.',
          'KC-4.1.III: new state-supported transoceanic maritime exploration. III.A: Portugal\'s technology and navigation led to more travel and trade with Africa and Asia and a global trading-post empire. III.B: Spanish sponsorship of Columbus and later Atlantic and Pacific voyages dramatically increased European interest in ocean travel and trade. III.C: English, French and Dutch northern crossings, often looking for another route to Asia.',
          'The CED gives 4.2 no illustrative examples. Every name in this deck is a teaching choice; the Key Concept sentences are what is required.',
          'Owns: state sponsorship; Portugal around Africa and its trading-post empire; Spain, Columbus, Tordesillas and the Pacific; the northern crossings; the qualified 1453 story.',
          'Bridge only: the conquests, smallpox and the Taíno (4.3); how the trading posts worked, labor systems and the slave trade (4.4); joint-stock companies, the VOC as a company, silver and the Manila galleons (4.5).',
          'Three myths students may bring in: that 1453 closed the spice road (it did not), that Henry ran a navigation school at Sagres (a later legend; the 4.1 deck said so too), and that Magellan sailed around the world (he died in 1521; Elcano finished). The old 4.2 pages taught all three.',
          'One picture is an AI reconstruction from the 4.1 deck (Calicut). It is labeled on screen and is not evidence.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Rulers paid for voyages because they wanted the trade, and every voyage that paid made the next one easier to fund and made rivals want their own.',
        avoid: 'Avoid teaching the conquests of the Mexica and Inca, smallpox or encomienda here. They are what happened next, and 4.3 and 4.4 own them.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the last topic back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.1', text: 'Why was getting home the hardest part of an Atlantic voyage?' },
          { label: 'Topic 4.1', text: 'Name one tool Europe borrowed, and where it came from.' },
          { label: 'Topic 2.3', text: 'Name one good that traveled from the Indian Ocean toward Europe.' }
        ],
        turn: 'Ships could now go and come back. But a voyage cost a fortune. **Who paid for them, and what did they want?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: the trade winds blow from the northeast nearly all year and never turn around; compass from China, astrolabe and astronomical charts from Greek and Islamic astronomy, lateen sail from the Mediterranean; spices such as pepper, cotton cloth, silk or porcelain.',
          'This is 4.1\'s hand-off, word for word. The CED\'s sample activity for 4.2 (p. 77) starts the same way: what students remember about Asian technology, connected to exploration.',
          'The third prompt sets up the cause: the goods were in Asia, and Europe paid a lot for them.'
        ],
        ask: 'If you were a king in 1450, why would you pay for a voyage that might never come back?',
        listenFor: 'Because if it worked, you could get the trade of Asia for yourself.',
        ap: 'Retrieval plus bridge: 4.1 answered how ships could go and come back; 4.2 asks who paid and why.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 4: Learning Objective B',
      title: 'Why did rulers pay for ocean voyages, and what did they get?',
      subtitle: 'Hold that question. Every state in today\'s story answers it differently.',
      notes: {
        minutes: 1,
        land: [
          'This is both learning objectives in a ninth grader\'s words: the role of states (who paid) and the economic causes and effects (why, and what they got).',
          'A good prediction names a ruler and a motive. A weak one lists explorers.'
        ],
        ask: 'Predict: what would make a ruler pay for a voyage?',
        listenFor: 'Money from trade, beating rivals, spreading their religion.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read for three questions.',
      subtitle: 'For every state: who paid, what did they want, and what did they get?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-2-exploration-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "Who Paid?" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort by state (Portugal, Spain, the northern states), not just by explorer.',
          'The three questions at the bottom are the First & 10 capture and reach Canvas through Gather All My Work.'
        ],
        ask: 'Which sentence explains how rulers backed the voyages?',
        listenFor: 'Sometimes they paid for the ships; sometimes they gave an explorer permission and rights in return for a share.'
      }
    },
    {
      phase: 'spice', kind: 'story-steps', eyebrow: 'The Economic Cause',
      kc: 'Unit 4: Learning Objective C', title: 'Every middleman took a cut.',
      template: {
        steps: [
          { label: 'India', text: 'Pepper grows on the southwest coast and costs little.' },
          { label: 'The ocean', text: 'Indian Ocean merchants carry it to the Red Sea or the Persian Gulf.' },
          { label: 'Egypt or Syria', text: 'It crosses by land and is sold again in ports such as Alexandria.' },
          { label: 'Venice', key: true, text: 'Venetian merchants ship it to Europe, where it costs many times more.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'Learning Objective C asks for economic causes. This is the main one, stated as a mechanism: a sea route straight to India meant buying at the India price and selling at the Europe price.',
          'A historian\'s figures, if a student wants a number (M. N. Pearson, as summarized by World History Encyclopedia): a kilo of pepper cost about 1 to 2 grams of silver where it grew, 10 to 14 in Alexandria, 14 to 18 in Venice, and 20 to 30 elsewhere in Europe.',
          'The Red Sea route ran through Mamluk Egypt, which the Ottomans did not take until 1517. That is why the 1453 story fails (myth slide).'
        ],
        ask: 'If you could sail straight to India, which of these steps would you skip?',
        listenFor: 'All the middle ones: you buy in India and sell in Europe yourself.',
        ap: 'Causation: name the cause as a mechanism, not a label. "They wanted spices" is a label.'
      }
    },
    {
      phase: 'state', kind: 'split-mirror', eyebrow: 'The Role of States',
      kc: 'KC-4.1.III', title: 'Two ways a ruler backed a voyage.',
      footer: 'Either way, the ruler set the terms and claimed the results.',
      template: {
        left: { name: 'Paid for it' },
        right: { name: 'Gave permission' },
        rows: [
          { label: 'Example', left: 'Isabella and Ferdinand, for Columbus, 1492', right: 'Henry VII of England, for Cabot, 1496' },
          { label: 'Who paid', left: 'The crown, with help from backers', right: 'Cabot and his backers' },
          { label: 'Ruler gave', left: 'Ships, money, titles, a share', right: 'Permission to sail and claim land' },
          { label: 'Ruler got', left: 'Most of the profit and the new lands', right: 'A fifth of the profit, and the claims' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'This is Learning Objective B: the role of states. The CED says "state-supported" and "under ... sponsorship," not "paid for by rulers alone," and the sources show both kinds.',
          'Henry VII\'s letters patent (5 March 1496) let Cabot sail "at their own proper costs and charges" and gave the king "the fifth part of the whole capital gained." Portugal did the same in 1469, leasing the Guinea trade to the merchant Fernão Gomes on condition that he explore a hundred leagues of new coast a year.',
          'The Columbus contract (next Spain slide) is the other kind: the crown paid most of the cost, with the town of Palos ordered to supply two ships and Columbus\'s backers paying part.',
          'A royal monopoly is the crown\'s sole right to a trade. Portugal\'s crown ran the pepper trade that way through its trading house in Lisbon, the Casa da Índia.',
          'Rulers had other motives too, spreading Christianity and beating rival kingdoms among them. Do not teach "God, Glory, and Gold" as the answer; it names three categories and explains nothing.'
        ],
        ask: 'Why would a king license a voyage instead of paying for it?',
        listenFor: 'He risks nothing, and still gets a share and a claim if it works.',
        ap: 'Causation: the state\'s role is a cause of exploration, not just background.'
      }
    },
    {
      phase: 'portugal', kind: 'timeline', eyebrow: 'Portugal · Step by Step',
      kc: 'KC-4.1.III.A', title: 'Each return made the next voyage easier to pay for.',
      footer: 'Spacing is true to scale: nearly a century, step by step.',
      template: {
        range: [1410, 1515], tick: 15,
        events: [
          { year: 1415, label: '1415', text: 'Portugal captures Ceuta in North Africa.' },
          { year: 1444, label: '1440s', text: 'Caravels reach West Africa; gold, ivory and enslaved Africans brought back.' },
          { year: 1482, label: '1482', text: 'Fort at Elmina to control the gold trade.' },
          { year: 1498, label: '1498', text: 'Da Gama reaches Calicut in India.' },
          { year: 1511, label: '1510 to 1511', text: 'Forts at Goa and Malacca.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.1.III.A: Portuguese maritime technology and navigational skill led to more travel to and trade with Africa and Asia, and to a global trading-post empire. Name the cause out loud: light caravels, charts made voyage by voyage, and the volta do mar from 4.1. Each voyage\'s charts helped the next one go farther. The rest of the line is the "led to."',
          'Prince Henry, a son of the king, paid for the West African voyages from the 1420s. He did not go on them, and the "school of Sagres" is a legend traced to writers of the 1600s and 1700s.',
          'From the 1440s the voyages brought back enslaved Africans; a large group was sold at Lagos, Portugal, in 1444 (the chronicler Zurara). Name it plainly. The Atlantic slave trade itself is 4.4.',
          'Dias sailed around the southern tip of Africa in 1488. Da Gama left Lisbon in July 1497, reached Calicut in May 1498, and lost two of four ships and more than half his men.',
          'Do not repeat the "sixty times the cost" figure the old pages used. No source says where it comes from. "The spices showed how much money the route could make" is what the evidence supports.'
        ],
        ask: 'Where on this line did one return pay for the next step?',
        listenFor: 'The gold and goods from West Africa kept the voyages going until they reached India.',
        ap: 'Causation: one state, one chain, cause to effect.'
      }
    },
    {
      phase: 'calicut', kind: 'frame-letterbox', eyebrow: 'Calicut, India, May 1498',
      kc: 'KC-4.1.III.A',
      title: 'Newcomers in a busy ocean.',
      subtitle: 'Da Gama came for pepper, and found a market that had been trading for centuries.',
      notes: {
        minutes: 1,
        land: [
          'Historical Reconstruction, AI generated, from the 4.1 deck. It sets the scene; it is not evidence.',
          'What it gets right: the big ships anchor offshore, because Calicut had no deep harbor; local ships far outnumber them; Kerala-style roofs. Some lateen-sailed ships have European-style hulls, so do not ask students to count Portuguese ships.',
          'The goods da Gama brought to trade (cloth, hats, basins) did not interest Calicut\'s merchants. That is in the eBook chapter if a student asks; what the Portuguese did about it is 4.4.'
        ],
        ask: 'What did the Portuguese want from this harbor?',
        listenFor: 'Pepper and spices, bought here instead of through the middlemen.'
      }
    },
    {
      phase: 'posts', kind: 'grid', eyebrow: 'What Portugal Got',
      kc: 'KC-4.1.III.A', title: 'A trading-post empire.',
      cards: [
        { title: 'GOLD · ELMINA', text: 'A royal trade in gold from the fort built on the Gold Coast in 1482.' },
        { title: 'PEPPER · LISBON', text: 'Lisbon became a major pepper market, and the crown ran the pepper trade itself.' },
        { title: 'FORTS · GOA AND MALACCA', text: 'Fortified ports from Africa to India and Southeast Asia, seized in 1510 and 1511.' },
        { title: 'PORTS, NOT LANDS', text: 'Portugal held ports and tried to control the sea trade between them.' }
      ],
      footer: 'How the posts worked, and how Asian and African rulers answered them, is Topic 4.4.',
      notes: {
        minutes: 2,
        land: [
          '"Global trading-post empire" is the CED\'s phrase for the effect. Use it.',
          'Goa was taken from the Bijapur Sultanate in 1510, Malacca in 1511, Hormuz in 1515. Ships in Portuguese waters were made to carry licences, the cartaz; that is how the posts worked, and it is 4.4\'s story.',
          'The Casa da Índia enforced the royal monopoly on pepper, cloves and cinnamon.'
        ],
        ask: 'Why hold ports instead of conquering whole countries?',
        listenFor: 'The goal was the trade, and ports control the trade.',
        ap: 'Economic effect: name it as the CED does, a global trading-post empire.'
      }
    },
    {
      phase: 'contract', kind: 'case-file', eyebrow: 'Spain · The Contract',
      kc: 'KC-4.1.III.B', title: 'What two rulers promised a sailor.',
      template: {
        tag: 'Contract', place: 'Santa Fe, outside Granada', date: 'April 1492',
        rows: [
          { label: 'Who paid', text: '**Isabella and Ferdinand**, just after conquering Granada' },
          { label: 'The bet', text: 'Reach Asia by sailing **west**; Portugal already held the route around Africa' },
          { label: 'If he won', text: 'Admiral of the Ocean Sea, governor of what he found, **a tenth** of the wealth' },
          { label: 'Turned down', text: 'Portugal\'s experts said Asia was too far. **They were right**.' }
        ],
        proves: 'A ruler paid for the voyage and wrote the terms.'
      },
      notes: {
        minutes: 3,
        land: [
          'The Capitulations of Santa Fe, signed 17 April 1492. Granada surrendered on 2 January 1492.',
          'The promise cost the crown nothing up front. That is the point: rulers paid in titles and shares as well as money.',
          'Funding was mixed. The crown ordered the town of Palos to supply two caravels; the royal official Luis de Santángel helped raise the crown\'s share; Columbus\'s backers paid part.',
          'Portugal\'s King João II turned Columbus down around 1484 because his experts judged the distance to Asia far greater than Columbus claimed. Nobody doubted the earth was round; the argument was about its size.',
          'Making Connections: Portugal\'s hold on the African route is why Spain\'s bet had to go west. The 1479 Treaty of Alcáçovas had recognized Portugal\'s rights down the African coast.'
        ],
        ask: 'Why promise Columbus so much?',
        listenFor: 'Because it cost nothing unless he succeeded.',
        ap: 'Making Connections 5.B: one state\'s decision (Portugal\'s) shaped another\'s (Spain\'s).'
      }
    },
    {
      phase: 'spain', kind: 'timeline', eyebrow: 'Spain · The Effect',
      kc: 'KC-4.1.III.B', title: 'Interest in ocean trade grew fast.',
      footer: 'Three ships in 1492, at least seventeen in 1493.',
      template: {
        range: [1490, 1525], tick: 5,
        events: [
          { year: 1492, label: '1492', text: 'Three ships reach the Caribbean.' },
          { year: 1493, label: '1493', text: 'Letter printed across Europe; at least 17 ships sail.' },
          { year: 1494, label: '1494', text: 'Tordesillas splits the claims.' },
          { year: 1519, label: '1519', text: 'Magellan\'s fleet sails west.' },
          { year: 1522, label: '1522', text: 'Elcano brings one ship home.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.1.III.B: Spanish sponsorship of Columbus and later voyages across the Atlantic and Pacific dramatically increased European interest in ocean travel and trade. The stairs show that effect.',
          'Elcano brought one ship home in 1522; Magellan was killed in 1521 (myth slide). The 1492 fleet reached the Caribbean, not Asia.',
          'Columbus brought back little gold from the first voyage. It paid in news: his letter was printed at least six times in Latin in 1493 alone, plus Spanish and Italian editions. The second fleet was at least 17 ships and more than 1,200 people (Britannica: more than 1,300).',
          'Magellan, a Portuguese captain sailing for Spain, left in 1519 with five ships and about 270 men to reach the Spice Islands by sailing west. He was killed at Mactan in the Philippines in 1521. Elcano brought the Victoria home in 1522 with 18 men.',
          'Columbus died in 1506 still believing he had reached Asia. The conquests that followed are 4.3 and 4.4.'
        ],
        ask: 'Columbus found little gold. Why did Spain send a much bigger fleet the next year?',
        listenFor: 'Because the news of new lands made the rulers and investors want more.',
        ap: 'Economic effect: interest, shown by money. Count the ships.'
      }
    },
    {
      phase: 'line', kind: 'face-off', eyebrow: 'Rivals · 1494',
      kc: 'KC-4.1.III', title: 'Two crowns split the claims.',
      footer: 'Nobody asked the people who lived in those lands, and the northern states ignored the line.',
      template: {
        left: { name: 'Spain', note: 'Lands west of the line' },
        right: { name: 'Portugal', note: 'Lands east of the line, and the route around Africa' },
        between: { label: 'Divided', name: 'Treaty of Tordesillas', note: 'A line through the Atlantic' },
        disputes: [
          { tag: 'Political', text: 'Both crowns claimed the newly found lands, so they negotiated a line between them.' },
          { tag: 'Economic', text: 'Each wanted its own route to the trade of Asia, closed to the other.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Tordesillas, 7 June 1494, was negotiated by ambassadors of the two crowns (UNESCO Memory of the World). It moved a line the pope had drawn in 1493 to 370 leagues west of the Cape Verde Islands. Do not say the pope drew the Tordesillas line; the old 4.2 reading did.',
          'The line later put Brazil on Portugal\'s side: Cabral reached it in 1500 on his way to India and claimed it.',
          'Set up the northern crossings: two states had split the southern routes between them. Everyone else had to look elsewhere.'
        ],
        ask: 'If you were the king of England, what would this treaty make you do?',
        listenFor: 'Look for a different route, one Spain and Portugal did not hold.'
      }
    },
    {
      phase: 'north', kind: 'split-matrix', eyebrow: 'The Northern Crossings',
      kc: 'KC-4.1.III.C', title: 'Looking for another way to Asia.',
      footer: 'None found a route to Asia. North America and Arctic ice blocked every way through.',
      template: {
        columns: [{ name: 'England' }, { name: 'France' }, { name: 'The Dutch' }],
        rows: [
          { label: 'Sailed', cells: ['Cabot, 1497', 'Verrazzano, 1524; Cartier, 1530s', 'Barentsz, 1590s; Hudson, 1609'] },
          { label: 'Looking for', cells: ['A route to Asia across the North Atlantic', 'A passage to Asia; gold', 'A route north of Russia'] },
          { label: 'Found instead', cells: ['Cod off Newfoundland', 'Furs on the St. Lawrence', 'The Hudson River and its fur trade'] }
        ],
        result: { label: 'Result', text: 'No route to Asia, but fish, furs, and claims to North American coasts.' }
      },
      notes: {
        minutes: 4,
        land: [
          'KC-4.1.III.C: northern Atlantic crossings under English, French and Dutch sponsorship, often to find alternative sailing routes to Asia. Give this row the same time as Portugal and Spain; the old pages gave it the least.',
          'Henry VII gave John Cabot, a Venetian citizen born in Italy, letters patent in March 1496; Cabot reached North America in June 1497, probably Newfoundland or Cape Breton. A letter from London that December reported the sea "swarming with fish."',
          'Verrazzano sailed for Francis I in 1524. Cartier made three voyages, 1534, 1535 to 1536 and 1541 to 1542, looking for a passage and for gold; he traded with the Mi\'kmaq for furs and kidnapped Donnacona and others.',
          'Barentsz made three Dutch voyages from 1594 and wintered on Novaya Zemlya. Hudson was hired in 1609 by the Dutch East India Company to try a northeast route, turned west against his orders, and explored the Hudson River. What that company was is 4.5.',
          'By the 1520s French ports sent dozens of ships a year to fish off Newfoundland. No ship sailed through the Northwest Passage until 1903 to 1906.'
        ],
        ask: 'They all failed to reach Asia. Were the voyages a waste?',
        listenFor: 'No: they found fish, furs and land, and those paid.',
        ap: 'Economic effect: say what the voyage produced, not just what it was looking for.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'The Whole Topic on One Map',
      kc: 'KC-4.1.III', title: 'Three ways to Asia, and who paid.',
      footer: 'Not drawn: Magellan\'s fleet, which sailed on across the Pacific, 1519 to 1522.',
      visual: { url: '../assets/images/instructional-maps/topic-4-2.svg', alt: 'Map of routes: Portugal around Africa to India, Spain west to the Caribbean, England, France and the Dutch across the North Atlantic and toward the Arctic' },
      notes: {
        minutes: 2,
        land: [
          'Routes are schematic. Magellan\'s route is not drawn; the note at the bottom of the map describes it.',
          'Read it by sponsor: south and east for Portugal, west for Spain, north for everyone else.',
          'The map\'s own key is small when projected. Name the five numbered routes aloud, or open the map file full screen (assets/images/instructional-maps/topic-4-2.svg) to read the key.'
        ],
        ask: 'Why did the northern states sail north and not south?',
        listenFor: 'Portugal and Spain held the southern routes.'
      }
    },
    {
      phase: 'pattern', kind: 'compounding-snowball', eyebrow: 'The Pattern',
      kc: 'KC-4.1.III', title: 'Every voyage that paid brought more ships.',
      footer: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
      template: {
        steps: [
          { label: 'A ruler backs it', text: 'Money, ships, rights, promises' },
          { label: 'A voyage returns', text: 'With gold, spices, or news' },
          { label: 'The next is easier', text: 'More money, more ships' },
          { label: 'Rivals join', text: 'Other rulers want their own', twist: true }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'This is the spine as a mechanism. The last step is the twist: success did not only fund more voyages, it pulled in rivals.',
          '"Paid back" includes news. Columbus\'s first voyage brought little gold and still produced a far bigger second fleet.'
        ],
        ask: 'Which link brought England, France and the Dutch into the story?',
        listenFor: 'Rivals join: other rulers saw Portugal and Spain succeed and wanted their own route.',
        ap: 'Causation: a cycle, where each effect becomes the next cause.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The real causes are more useful than the myths.',
      template: {
        rows: [
          { myth: 'The Ottomans closed the spice road in 1453, so Europe had to go by sea.', evidence: 'The trade through Egypt and Venice kept running, and Portugal\'s voyages had begun decades earlier.', source: 'A. H. Lybyer, 1915' },
          { myth: 'Prince Henry ran a school of navigation at Sagres.', evidence: 'He paid for voyages. No record from his time describes a school; the story was written down centuries later.', source: 'Historians of Henry' },
          { myth: 'Magellan sailed around the world.', evidence: 'He was killed in the Philippines in 1521. Elcano brought the last ship home in 1522.', source: 'Pigafetta\'s journal of the voyage' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'Row 1: A. H. Lybyer showed in 1915 that spice prices did not jump after 1453; the conquest "has been imagined to have closed the routes." The main spice route ran through Mamluk Egypt until 1517. The unit story map gives 4.2 this qualified version and no other.',
          'Row 2: the Sagres school is traced to writers such as Samuel Purchas and the Abbé Prévost and was romanticized in the 1800s. Henry fought at Ceuta in 1415 but did not go on the voyages he paid for.',
          'Row 3: Magellan led the expedition, which is why it carries his name. Elcano completed it.'
        ],
        ask: 'If 1453 did not cause the voyages, what did?',
        listenFor: 'The cost of the middlemen, and rulers who wanted the trade for themselves.'
      }
    },
    {
      retelling: true, phase: 'matrix', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'Who paid, what they wanted, what they got.',
      template: {
        columns: [{ name: 'Portugal' }, { name: 'Spain' }, { name: 'The north' }],
        rows: [
          { label: 'Who backed', cells: ['Prince Henry, then the kings', 'Isabella and Ferdinand', 'Kings; Dutch leaders, later a company'] },
          { label: 'Wanted', cells: ['Gold, then spices, around Africa', 'Asia\'s trade, by sailing west', 'Another route to Asia, in the north'] },
          { label: 'Got', cells: ['A trading-post empire', 'New lands; all Europe interested', 'No route; fish, furs, claims'] }
        ],
        result: { label: 'So', text: 'Every voyage that paid made the next easier to fund, and made rivals want their own.' }
      },
      notes: {
        minutes: 5,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the nine cells from memory.',
          'In row 1, England\'s king licensed Cabot rather than paying; the Dutch Republic had no king: Barentsz\'s voyages were backed by the States-General, Prince Maurice and the city of Amsterdam, and Hudson in 1609 by the Dutch East India Company, founded in 1602.',
          'Row 1 answers Learning Objective B (the role of states). Rows 2 and 3 answer Learning Objective C (economic causes and effects). Each column is one complete cause-to-effect chain.',
          'Reading across a row is the suggested skill, 5.B: how one state\'s choice connects to the next.'
        ],
        ask: 'Which column would you use to explain an economic effect that was not what the state wanted?',
        listenFor: 'England, France and the Dutch: they wanted a route to Asia and got fish, furs and claims.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      footer: 'Who paid, what they wanted, what it caused, and how it connects.',
      template: {
        weak: 'Europeans explored for God, glory, and gold.',
        strong: '**Portugal\'s crown** backed voyages around Africa to reach Asia\'s spices without the middlemen, and **because Portugal already held that route**, Spain\'s rulers **paid Columbus to sail west**, which led other states to sponsor voyages of their own.'
      },
      notes: {
        minutes: 3,
        land: [
          'The weak claim is a slogan: three categories, no state, no mechanism, no effect.',
          'The strong claim names who paid (role of states), what they wanted (economic cause), and one connection between two states (5.B).',
          'Have students write their own with a different pair, for example Spain and England.'
        ],
        ask: 'Where in the strong claim is the connection between two states?',
        listenFor: 'Because Portugal already held that route, Spain paid Columbus to sail west.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Connect one state\'s voyage to another\'s decision.',
      subtitle: 'What did one state do, and how did it change what another state paid for?',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-2-exploration.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 5.B Making Connections: explain how one development relates to another.',
          'Strong pairs: Portugal\'s African route and Spain\'s westward bet; Spain and Portugal\'s split at Tordesillas and the northern crossings; Columbus\'s news and the bigger 1493 fleet.'
        ],
        ask: 'What did the first state do, and what did the second state do because of it?',
        listenFor: 'A specific action, then a specific decision, joined by because or so.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'The role of states.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-2-exploration.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.2. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Who backed the voyage, what did they give the explorer, and what did they want back?',
        listenFor: 'A named ruler, a named promise (titles, a share, governorship), and a named goal.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'What does each source show about who paid and what they wanted? Name one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-2-exploration.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Observation before inference: what the source shows, then what it suggests.',
          'Two of the cards are later pictures or modern maps, not eyewitness records. Students should say what kind of source each one is. The Calicut reconstruction from today\'s slides is not in the Evidence Lab and is not evidence.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Two voyages, two sponsors, cause and effect.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-2-exploration.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for one Portuguese or Spanish voyage and one English, French or Dutch voyage: the state that backed it and what it gave, one economic cause and one economic effect for each, then one connection between them. That covers both learning objectives, KC-4.1.III, KC-4.1.III.C, and III.A or III.B depending on the voyage the student picks; the other Iberian Key Concept is carried by the First & 10 and the Skill Builder.',
          'Push students past the goal to the effect: a northern voyage that found no route to Asia still had an effect.'
        ],
        ask: 'Does each voyage have a sponsor, a cause and an effect?',
        listenFor: 'A named state, a named economic reason, and a named result.'
      }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Topic 4.2 · Landing Sentence',
      kc: 'Unit 4: Learning Objective C',
      title: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
      subtitle: 'Rulers backed voyages because they wanted the trade of Asia, and every voyage that paid made the next one easier to fund. Next: Columbus was looking for a route to Asia. What he started was an exchange of living things nobody planned.',
      notes: {
        minutes: 2,
        land: [
          'This sentence answers both 4.2 learning objectives: the role of states and the economic causes and effects.',
          'Hand off to 4.3 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.2?',
        listenFor: 'Rulers paid for voyages to get the trade of Asia, and every voyage that paid led to more.'
      }
    }
  ]
};
