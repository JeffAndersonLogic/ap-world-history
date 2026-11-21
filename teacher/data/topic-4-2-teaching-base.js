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
 * Taught Green Friday 2026-10-30 and Silver Monday 2026-11-02. Required modules,
 * from the schedule (Jeff's Unit 4 module review, 2026-10-23): 02 First & 10,
 * 06 Checkpoint 1, 09 BeInTheRoom (the Santa Fe Bargain, whose reflection is
 * the 5.B connection) and 10 Checkpoint 2. The deck predated that review: it
 * launched 05 Skill Builder and 07 Evidence Lab, marked Checkpoint 1 optional
 * and offered the Santa Fe Bargain as an extension. Skill Builder and Evidence
 * Lab are now the early-finisher options.
 *
 * Outline format, 2026-11-21 (Jeff, 2026-11-08: the 4.4 outline is the
 * standard for every topic; slides that only point to a module are cut; the
 * lecture tells the story. Jeff asked for 4.2 on 2026-11-21). The briefing
 * opens on the outline below, a road map before the First & 10 shows students
 * the same six section headers, every story slide's eyebrow names its section,
 * minute counts are off the projected slides, the myths moved to the outline's
 * Watch for list and the retelling slide's notes, and one Work Time slide
 * replaced Myth and Evidence, Sharpen the Claim and the four module launch
 * slides. No story slide changed. 23 slides to 19. Sharpen the Claim did not
 * stay: it carried no learning objective and no CED sample activity, and its
 * 5.B connection is modeled on the contract slide (section IV) and practiced
 * in the BeInTheRoom reflection and Checkpoint 2, so its weak and strong claims
 * moved into the Work Time notes, given aloud.
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
      'Correct three myths when they come up (the outline\'s Watch for list; the retelling slide\'s notes): 1453 did not close the spice trade, Henry ran no school at Sagres, and Magellan did not finish the voyage around the world.',
      'Model one Making Connections sentence on the contract slide (section IV): Portugal held the African route, so Spain had to go west.',
      'Say "Historical Reconstruction" when the Calicut picture is on screen.'
    ],
    could: [
      'Send students who finish Work Time early to the Skill Builder (Module 05) or the Evidence Lab (Module 07).',
      'Point students who want more depth to the eBook chapter, "Who Paid, and What For."'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "Who Paid?"; nothing is new.
  // Required modules are the schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '06 Checkpoint 1', '09 BeInTheRoom', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Why a sea route would pay', kc: 'Learning Objective C', points: [
        'Pepper cheap in India, many times dearer in Europe',
        'The chain: Indian Ocean merchants, Red Sea or Gulf, Egypt or Syria, Venice',
        'Every middleman took a cut',
        'Sea route: buy at the India price, sell at Europe\'s',
        'Say the cause as a mechanism, not "they wanted spices"',
        'The Red Sea route ran through Mamluk Egypt (Ottoman only from 1517)'
      ] },
      { label: 'II', title: 'How rulers backed voyages', kc: 'Learning Objective B · KC-4.1.III', points: [
        'Too risky for merchants alone, so rulers stepped in',
        'Paid for it: Isabella and Ferdinand, for Columbus, 1492',
        'Gave permission: Henry VII licensed Cabot, 1496, for a fifth of the profit',
        'Paid in titles and shares too, at no cost up front',
        'Royal monopoly: the crown\'s sole right to a trade',
        'Other motives (Christianity, beating rivals), but trade kept the money coming',
        'Skip "God, Glory, Gold": three labels, no explanation'
      ] },
      { label: 'III', title: 'Portugal, step by step', kc: 'KC-4.1.III.A', points: [
        'Ceuta 1415; Prince Henry paid for West African voyages from the 1420s, never sailed',
        'Cause: light caravels, charts made voyage by voyage, the volta do mar',
        'Each return paid for the next: gold, ivory, and from the 1440s enslaved Africans',
        'Elmina 1482; Dias rounds Africa 1488; da Gama at Calicut 1498',
        'Calicut: newcomers in a market centuries old',
        'Effect: a global trading-post empire, ports not lands (Goa 1510, Malacca 1511)',
        'Crown monopoly on pepper (the Casa da Índia)'
      ] },
      { label: 'IV', title: 'Spain goes west', kc: 'KC-4.1.III.B', points: [
        'Portugal turned Columbus down: Asia too far (distance, not a flat earth)',
        'Santa Fe, April 1492: admiral, governor, a tenth of the wealth',
        'Funding mixed: the crown, the town of Palos, backers',
        'Reached the Caribbean, not Asia; little gold, but the news spread',
        'Three ships in 1492, at least seventeen in 1493',
        'Tordesillas 1494: ambassadors split the claims; nobody asked the people there',
        'Magellan killed 1521; Elcano home 1522',
        'Effect (CED): European interest in ocean travel and trade grew dramatically'
      ], skill: 'You model Making Connections (5.B) out loud on the contract: Portugal already held the route around Africa, so Spain\'s bet had to go west. Students practice it in the BeInTheRoom reflection and the Checkpoint 2 connection.' },
      { label: 'V', title: 'The northern crossings', kc: 'KC-4.1.III.C', points: [
        'Portugal held the south, Spain the west, so look north',
        'England: Cabot 1497, a sea "swarming with fish"',
        'France: Verrazzano 1524; Cartier 1530s, furs on the St. Lawrence',
        'Dutch: Barentsz 1590s; Hudson 1609',
        'No route to Asia: land and Arctic ice blocked every way through',
        'Not a waste: cod, furs, claims to North American coasts'
      ] },
      { label: 'VI', title: 'The pattern', kc: 'KC-4.1.III', points: [
        'One map: south for Portugal, west for Spain, north for everyone else',
        'A ruler backs it; a voyage returns with gold, spices or news',
        'The next voyage is easier to fund',
        'The twist: rivals want their own'
      ] }
    ],
    wrap: { title: 'Put it together', columns: ['Who backed it', 'What they wanted', 'What they got'], rows: [
      { label: 'Portugal', cells: ['Prince Henry, then the kings', 'Gold, then spices, around Africa', 'A trading-post empire'] },
      { label: 'Spain', cells: ['Isabella and Ferdinand', 'Asia\'s trade, by sailing west', 'New lands; all Europe interested'] },
      { label: 'The north', cells: ['Kings (England licensed Cabot); Dutch leaders, later a company', 'Another route to Asia, in the north', 'No route; fish, furs, claims'] }
    ] },
    vocabulary: [
      { term: 'Spice trade', def: 'Europe\'s trade for the goods of Asia, above all spices such as pepper.' },
      { term: 'Middlemen', def: 'The merchants between India and Europe who each took a profit, so pepper in Europe cost many times more.' },
      { term: 'State sponsorship', def: 'A government backing exploration: paying for the ships, or granting permission and trade rights in return for a share.' },
      { term: 'Royal monopoly', def: 'The crown\'s sole right to a trade, like Portugal\'s pepper trade run from Lisbon.' },
      { term: 'Trading-post empire', def: 'A chain of fortified ports, and control of the sea trade between them, instead of large lands.' },
      { term: 'Calicut', def: 'A busy trading port on the southwest coast of India; da Gama reached it in 1498.' },
      { term: 'Treaty of Tordesillas', def: 'The 1494 treaty that drew a line through the Atlantic: lands to the west for Spain, to the east for Portugal.' },
      { term: 'Circumnavigation', def: 'A voyage all the way around the world. Elcano completed the first in 1522.' },
      { term: 'Northwest Passage', def: 'A hoped-for sea route to Asia above North America. Nobody found one.' },
      { term: 'Fur trade', def: 'The French trade with Indigenous peoples for furs along the St. Lawrence.' }
    ],
    watch: [
      { myth: '"The Ottomans closed the spice road in 1453."', fix: 'The trade through Egypt and Venice kept running, and Portugal\'s voyages began decades earlier. The cause was the middlemen\'s cut. But do not swing to "spices did not matter": they are the cause.' },
      { myth: '"Prince Henry ran a navigation school at Sagres."', fix: 'A legend written down centuries later. But he mattered: he paid for the voyages, and never went on them.' },
      { myth: '"Magellan sailed around the world."', fix: 'He was killed in the Philippines in 1521; Elcano brought the last ship home in 1522. Magellan led it, which is why it carries his name.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the two objectives, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.1 and 2.3. Bridge to who paid.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question.', students: 'Predict an answer.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the six sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Who Paid?" in class.', students: 'For each state: who paid, what they wanted, what they got.', slide: 5 },
    { id: 'spice', label: 'The Spice Chain', range: '18-21', minutes: 3, teacher: 'Every middleman took a cut.', students: 'Say why a sea route would pay.', slide: 6 },
    { id: 'state', label: 'How Rulers Backed Voyages', range: '21-24', minutes: 3, teacher: 'Two ways to back a voyage.', students: 'Say what a ruler gave and wanted back.', slide: 7 },
    { id: 'portugal', label: 'Portugal, Step by Step', range: '24-27', minutes: 3, teacher: 'Ceuta to Malacca.', students: 'Find where each return paid for the next.', slide: 8 },
    { id: 'calicut', label: 'Calicut, 1498', range: '27-28', minutes: 1, teacher: 'Reconstruction: newcomers in a busy ocean.', students: 'Say what da Gama came for.', slide: 9 },
    { id: 'posts', label: 'What Portugal Got', range: '28-30', minutes: 2, teacher: 'The trading-post empire.', students: 'Ports, not lands.', slide: 10 },
    { id: 'contract', label: 'The Contract', range: '30-33', minutes: 3, teacher: 'Santa Fe, April 1492. Model 5.B: Portugal held Africa, so Spain went west.', students: 'Say what the rulers gave and what they wanted.', slide: 11 },
    { id: 'spain', label: 'Interest Grows', range: '33-36', minutes: 3, teacher: 'Three ships, then seventeen, then the Pacific.', students: 'Name the effect the CED names.', slide: 12 },
    { id: 'line', label: 'Tordesillas', range: '36-38', minutes: 2, teacher: 'Two crowns split the claims.', students: 'Say who was left out.', slide: 13 },
    { id: 'north', label: 'The Northern Crossings', range: '38-42', minutes: 4, teacher: 'England, France, Dutch.', students: 'What they looked for, what they found.', slide: 14 },
    { id: 'map', label: 'Three Ways to Asia', range: '42-44', minutes: 2, teacher: 'The whole topic on one map.', students: 'Trace each sponsor\'s route.', slide: 15 },
    { id: 'pattern', label: 'The Pattern', range: '44-46', minutes: 2, teacher: 'Pay, return, pay again, rivals join.', students: 'Name the link that brought in rivals.', slide: 16 },
    { id: 'matrix', label: 'Who Paid, What For', range: '46-51', minutes: 5, teacher: 'Students redraw the matrix from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 17 },
    { id: 'worktime', label: 'Work Time', range: '51-81', minutes: 30, teacher: 'Modules 06, 09 and 10, in that order: Checkpoint 1 with no coach, the Santa Fe Bargain, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Checkpoint 1, the Santa Fe Bargain, Checkpoint 2.', slide: 18 },
    { id: 'close', label: 'Landing Sentence', range: '81-83', minutes: 2, teacher: 'Land the answer and hand off to 4.3.', students: 'Say the topic in one sentence.', slide: 19 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
      subtitle: 'Causation, with Making Connections 5.B. Who paid, what they wanted, what they got: for Portugal, Spain, and England, France and the Dutch.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: rulers backed, voyages paid, more sailed',
          'Objectives: role of states; economic causes and effects',
          'Cause as mechanism: skip the middlemen',
          'Northern crossings get equal time',
          'Conquests and smallpox are 4.3 and 4.4',
          'Three myths: 1453, Sagres, Magellan'
        ],
        land: [
          'CED pp. 79 and 80. Learning Objective B: describe the role of states in the expansion of maritime exploration from 1450 to 1750. Learning Objective C: explain the economic causes and effects of maritime exploration by the various European states. The story answers both: who paid, and what the voyages were for and produced.',
          'KC-4.1.III: new state-supported transoceanic maritime exploration. III.A: Portugal\'s technology and navigation led to more travel and trade with Africa and Asia and a global trading-post empire. III.B: Spanish sponsorship of Columbus and later Atlantic and Pacific voyages dramatically increased European interest in ocean travel and trade. III.C: English, French and Dutch northern crossings, often looking for another route to Asia.',
          'The CED gives 4.2 no illustrative examples. Every name in this deck is a teaching choice; the Key Concept sentences are what is required.',
          'Owns: state sponsorship; Portugal around Africa and its trading-post empire; Spain, Columbus, Tordesillas and the Pacific; the northern crossings; the qualified 1453 story.',
          'Bridge only: the conquests, smallpox and the Taíno (4.3); how the trading posts worked, labor systems and the slave trade (4.4); joint-stock companies, the VOC as a company, silver and the Manila galleons (4.5).',
          'Three myths students may bring in, in the outline\'s Watch for list and corrected on the retelling slide (17) if they come up: that 1453 closed the spice road (it did not), that Henry ran a navigation school at Sagres (a later legend; the 4.1 deck said so too), and that Magellan sailed around the world (he died in 1521; Elcano finished). The old 4.2 pages taught all three.',
          'One picture is an AI reconstruction from the 4.1 deck (Calicut). It is labeled on screen and is not evidence.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Rulers paid for voyages because they wanted the trade, and every voyage that paid made the next one easier to fund and made rivals want their own.',
        avoid: 'Avoid teaching the conquests of the Mexica and Inca, smallpox or encomienda here. They are what happened next, and 4.3 and 4.4 own them.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
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
        keys: [
          'Fast answers, no reteaching',
          '4.1: trade winds never turn around',
          'Asian goods cost Europe a lot',
          'Set up: why pay for a risky voyage?'
        ],
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
        keys: [
          'Both objectives in ninth-grade words',
          'Good prediction: a ruler and a motive',
          'Weak prediction lists explorers'
        ],
        land: [
          'This is both learning objectives in a ninth grader\'s words: the role of states (who paid) and the economic causes and effects (why, and what they got).',
          'A good prediction names a ruler and a motive. A weak one lists explorers.'
        ],
        ask: 'Predict: what would make a ruler pay for a voyage?',
        listenFor: 'Money from trade, beating rivals, spreading their religion.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Why did rulers pay for ocean voyages, and what did they get?',
        stops: [
          { label: 'I', text: 'Why a sea route would pay' },
          { label: 'II', text: 'How rulers backed voyages' },
          { label: 'III', text: 'Portugal, step by step' },
          { label: 'IV', text: 'Spain goes west' },
          { label: 'V', text: 'The northern crossings' },
          { label: 'VI', text: 'The pattern' },
          { label: '✓', text: 'Put it together: who paid, what they wanted, what they got', key: true }
        ],
        thenLabel: 'Then',
        then: 'Checkpoint 1 · BeInTheRoom · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Six sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the six headers aloud before the First & 10, so students know the story\'s shape before they read it. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to VI), so the class can see where it is all period.',
          'The question at the top is the topic question. Sections I and II are the two learning objectives\' starting points (the economic cause, the role of states); III to V are the three state stories, one per Key Concept; VI is the spine as a pattern.'
        ],
        ask: 'Which section do you think answers "who paid"?',
        listenFor: 'II, how rulers backed voyages; then each state\'s section names its own sponsor.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read for three questions.',
      subtitle: 'For every state: who paid, what did they want, and what did they get?',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-2-exploration-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Sort by state, not explorer',
          'Rulers paid, or granted rights for a share',
          'Answers reach Canvas via Gather'
        ],
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
      phase: 'spice', kind: 'story-steps', eyebrow: 'I · Why a Sea Route Would Pay · The Economic Cause',
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
        keys: [
          'Main economic cause: every middleman’s cut',
          'Sea route: buy at India price, sell at Europe’s',
          'Red Sea route ran through Mamluk Egypt',
          'Pepper price figures are in the full notes'
        ],
        land: [
          'Learning Objective C asks for economic causes. This is the main one, stated as a mechanism: a sea route straight to India meant buying at the India price and selling at the Europe price.',
          'A historian\'s figures, if a student wants a number (M. N. Pearson, as summarized by World History Encyclopedia): a kilo of pepper cost about 1 to 2 grams of silver where it grew, 10 to 14 in Alexandria, 14 to 18 in Venice, and 20 to 30 elsewhere in Europe.',
          'The Red Sea route ran through Mamluk Egypt, which the Ottomans did not take until 1517. That is why the 1453 story fails (a myth in the outline\'s Watch for list, corrected on the retelling slide).'
        ],
        ask: 'If you could sail straight to India, which of these steps would you skip?',
        listenFor: 'All the middle ones: you buy in India and sell in Europe yourself.',
        ap: 'Causation: name the cause as a mechanism, not a label. "They wanted spices" is a label.'
      }
    },
    {
      phase: 'state', kind: 'split-mirror', eyebrow: 'II · How Rulers Backed Voyages · The Role of States',
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
        keys: [
          'Two ways: pay for it, or license it',
          'License: explorer pays, king takes a share',
          'Cabot, 1496: the king got one-fifth',
          'Royal monopoly: the crown’s sole right to a trade',
          'Skip "God, Glory, Gold": it explains nothing'
        ],
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
      phase: 'portugal', kind: 'timeline', eyebrow: 'III · Portugal, Step by Step · 1415 to 1511',
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
        keys: [
          'Each return paid for the next step',
          'Cause: caravels, charts, volta do mar',
          'Henry paid, never sailed; no Sagres school',
          'From the 1440s: enslaved Africans brought back',
          'Dias 1488; da Gama to Calicut 1498',
          'Never "sixty times the cost"'
        ],
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
      phase: 'calicut', kind: 'frame-letterbox', eyebrow: 'III · Portugal, Step by Step · Calicut, May 1498',
      kc: 'KC-4.1.III.A',
      title: 'Newcomers in a busy ocean.',
      subtitle: 'Da Gama came for pepper, and found a market that had been trading for centuries.',
      notes: {
        minutes: 1,
        keys: [
          'AI scene, not evidence',
          'Came for pepper without the middlemen',
          'A market already centuries old',
          'Do not count Portuguese ships'
        ],
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
      phase: 'posts', kind: 'grid', eyebrow: 'III · Portugal, Step by Step · What Portugal Got',
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
        keys: [
          'CED phrase: "global trading-post empire"',
          'Ports, not lands: control the sea trade',
          'Elmina 1482, Goa 1510, Malacca 1511',
          'Crown monopoly on pepper (Casa da Índia)',
          'AI scene; its modern flag is an error',
          'How the posts worked is 4.4'
        ],
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
      phase: 'contract', kind: 'case-file', eyebrow: 'IV · Spain Goes West · The Contract',
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
        keys: [
          'Santa Fe, April 1492: titles and shares',
          'Cost the crown nothing up front',
          'Funding mixed: crown, Palos, backers',
          'Portugal refused: distance, not a flat earth',
          'Portugal held Africa, so Spain went west'
        ],
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
      phase: 'spain', kind: 'timeline', eyebrow: 'IV · Spain Goes West · The Effect',
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
        keys: [
          'Three ships 1492; seventeen-plus in 1493',
          'Little gold; it paid in news',
          'Interest in ocean trade grew fast',
          'Magellan died 1521; Elcano finished 1522',
          'Reached the Caribbean, not Asia'
        ],
        land: [
          'KC-4.1.III.B: Spanish sponsorship of Columbus and later voyages across the Atlantic and Pacific dramatically increased European interest in ocean travel and trade. The timeline shows that effect: three ships in 1492, at least seventeen in 1493, then the Pacific.',
          'Elcano brought one ship home in 1522; Magellan was killed in 1521 (a myth to correct on the retelling slide if it comes up). The 1492 fleet reached the Caribbean, not Asia.',
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
      phase: 'line', kind: 'face-off', eyebrow: 'IV · Spain Goes West · Tordesillas, 1494',
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
        keys: [
          'Tordesillas 1494: ambassadors, not the pope',
          'The line put Brazil on Portugal’s side',
          'Nobody asked the people living there',
          'Everyone else had to look north'
        ],
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
      phase: 'north', kind: 'split-matrix', eyebrow: 'V · The Northern Crossings · England, France, the Dutch',
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
        keys: [
          'Equal time with Portugal and Spain',
          'England: Cabot, 1497, sea "swarming with fish"',
          'France: Verrazzano 1524; Cartier, furs',
          'Dutch: Barentsz 1590s; Hudson 1609',
          'No route to Asia found',
          'Not a waste: fish, furs, land paid'
        ],
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
      phase: 'map', kind: 'map', eyebrow: 'VI · The Pattern · The Whole Topic on One Map',
      kc: 'KC-4.1.III', title: 'Three ways to Asia, and who paid.',
      footer: 'Not drawn: Magellan\'s fleet, which sailed on across the Pacific, 1519 to 1522.',
      visual: { url: '../assets/images/instructional-maps/topic-4-2.svg', alt: 'Map of routes: Portugal around Africa to India, Spain west to the Caribbean, England, France and the Dutch across the North Atlantic and toward the Arctic' },
      notes: {
        minutes: 2,
        keys: [
          'Read by sponsor: south, west, north',
          '1 Portugal around Africa; 2 Spain west',
          '3 Cabot; 4 Cartier; 5 Barentsz',
          'Key is small: name routes aloud',
          'Magellan not drawn: say so'
        ],
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
      phase: 'pattern', kind: 'compounding-snowball', eyebrow: 'VI · The Pattern · Every Voyage That Paid',
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
        keys: [
          'The spine as a mechanism',
          '"Paid back" includes news',
          'Success pulled in rivals'
        ],
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
      retelling: true, phase: 'matrix', kind: 'split-matrix', eyebrow: 'Put It Together · The Whole Topic',
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
        keys: [
          'Show it, hide it, redraw nine cells',
          'Row 1: role of states (objective B)',
          'Rows 2 and 3: causes and effects (C)',
          'Each column: one cause-to-effect chain',
          'Northern effect: wanted Asia, got fish, furs',
          'Correct the three myths here if raised'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the nine cells from memory.',
          'In row 1, England\'s king licensed Cabot rather than paying; the Dutch Republic had no king: Barentsz\'s voyages were backed by the States-General, Prince Maurice and the city of Amsterdam, and Hudson in 1609 by the Dutch East India Company, founded in 1602.',
          'Row 1 answers Learning Objective B (the role of states). Rows 2 and 3 answer Learning Objective C (economic causes and effects). Each column is one complete cause-to-effect chain.',
          'Reading across a row is the suggested skill, 5.B: how one state\'s choice connects to the next.',
          'Correct the three myths here if they come up (they were the Myth and Evidence slide until 2026-11-21, and are in the outline\'s Watch for list), naming the opposite mistake each time. 1453: A. H. Lybyer showed in 1915 that spice prices did not jump after 1453, the main spice route ran through Mamluk Egypt until 1517, and Portugal\'s voyages had begun decades earlier; but do not swing to "spices did not matter": the middlemen\'s cut on spices is the main cause (the unit story map gives 4.2 this qualified version and no other). Sagres: the school is traced to writers such as Samuel Purchas and the Abbé Prévost and was romanticized in the 1800s; but do not swing to "Henry did nothing": he fought at Ceuta in 1415 and paid for the voyages, though he did not go on them. Magellan: he was killed at Mactan in the Philippines in 1521 and Elcano brought the Victoria home in 1522 (Pigafetta\'s journal); but Magellan led the expedition, which is why it carries his name. The real causes: the cost of the middlemen, and rulers who wanted the trade for themselves.'
        ],
        ask: 'Which column would you use to explain an economic effect that was not what the state wanted?',
        listenFor: 'England, France and the Dutch: they wanted a route to Asia and got fish, furs and claims.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 06, 09, 10',
      title: 'Now you do the history.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-4/lesson-4-2-exploration.html#modules' },
          { code: 'Module 09', name: 'BeInTheRoom', note: 'The Santa Fe Bargain, April 1492.', url: '../beintheroom/unit-4/the-santa-fe-bargain.html' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-4/lesson-4-2-exploration.html#modules' }
        ]
      },
      notes: {
        minutes: 30,
        keys: [
          'All three required today, in order',
          'Checkpoint 1: no coach; ruler, gift, goal',
          'Santa Fe: pay Columbus, and on what terms?',
          'Checkpoint 2: one Iberian, one northern voyage',
          'Checkpoint 2 unfinished = homework',
          'Early finishers: Skill Builder or Evidence Lab'
        ],
        land: [
          'This one slide replaces six (Myth and Evidence, Sharpen the Claim, and the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-21). Modules 06, 09 and 10 are the required modules on the schedule (Jeff\'s Unit 4 module review, 2026-10-23); this deck was built before that review and had launched 05 and 07, with Checkpoint 1 optional and the Santa Fe Bargain an extension. Each button opens its module.',
          'Checkpoint 1 (Module 06), with no coach, asks for one economic reason rulers backed voyages, shown as a mechanism ("spices passed through many sellers, so ..."), then one ruler or royal sponsor and how they backed a voyage: what they gave (money, ships, permission, titles or a share) and what they wanted back. Listen for a named ruler, a named promise and a named goal. Give feedback in the room: on an alternating block nothing carries over.',
          'The Santa Fe Bargain (Module 09) puts students at the royal camp outside Granada in April 1492, advising Isabella and Ferdinand before they sign: whether to pay, what to promise Columbus, and what to do about Portugal and any lands found, using only what people knew in 1492. Its reflection is the 5.B connection: the crown\'s role, one economic reason it paid, and how Portugal\'s voyages connected to Spain\'s decision to send Columbus west. It is section IV in a decision.',
          'Checkpoint 2 (Module 10) asks for one Portuguese or Spanish voyage and one English, French or Dutch voyage: the state that backed it and what it gave, one economic cause and one economic effect for each, then one connection between them. That covers both learning objectives, KC-4.1.III, KC-4.1.III.C, and III.A or III.B depending on the voyage the student picks; the other Iberian Key Concept is carried by the First & 10 and the story slides. Push students past the goal to the effect: a northern voyage that found no route to Asia still had an effect. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud (it was the Sharpen slide). The weak claim, "Europeans explored for God, glory, and gold," is a slogan: three categories, no state, no mechanism, no effect. A strong one names who paid (the role of states), what they wanted (the economic cause) and one connection between two states (5.B): "Portugal\'s crown backed voyages around Africa to reach Asia\'s spices without the middlemen, and because Portugal already held that route, Spain\'s rulers paid Columbus to sail west, which led other states to sponsor voyages of their own." Students write their own with a different pair, for example Spain and England; do not leave the model on the board.',
          'Early finishers: the Skill Builder (Module 05, Making Connections 5.B: connect one state\'s voyage to another\'s decision; strong pairs are Portugal\'s African route and Spain\'s westward bet, Tordesillas and the northern crossings, Columbus\'s news and the bigger 1493 fleet), or the Evidence Lab (Module 07: one claim from two sources, observe, then infer, then name a limit; two of the cards are later pictures or modern maps, so students say what kind of source each one is, and the Calicut reconstruction from the slides is not in the Evidence Lab and is not evidence).'
        ],
        ask: 'Does each voyage have a sponsor, a cause and an effect, and is there one connection between them?',
        listenFor: 'A named state, a named economic reason and a named result for each, joined by because or so: Portugal held the African route, so Spain went west.'
      }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Topic 4.2 · Landing Sentence',
      kc: 'Unit 4: Learning Objective C',
      title: 'Rulers backed the voyages. Voyages paid back. More ships sailed.',
      subtitle: 'Rulers backed voyages because they wanted the trade of Asia, and every voyage that paid made the next one easier to fund. Next: Columbus was looking for a route to Asia. What he started was an exchange of living things nobody planned.',
      notes: {
        minutes: 2,
        keys: [
          'The sentence answers both objectives',
          'AI scene: ship name, sack labels invented',
          'Hand off to 4.3: an exchange nobody planned'
        ],
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
