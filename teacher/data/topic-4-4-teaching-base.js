/*
 * Topic 4.4 canonical Teaching OS source.
 * CED: Fall 2026 pp. 83-84 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Continuity and Change. Suggested skill: 2.A Sourcing and Situation. Three
 * learning objectives: E (state building and expansion), F (continuities and
 * changes in economic and labor systems) and G (changes and continuities in
 * systems of slavery).
 * Story: docs/TOPIC-4-4-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Empires from
 * the Sea" is written from the same story, and this deck retells it.
 * Spine: Europeans built empires from the sea, but much of the world kept its
 * own rules: some things changed fast and some barely moved.
 * Wall version: Empires from the sea. A world with its own rules.
 * Retelling slide: the continuity-and-change ledger (phase 'ledger').
 *
 * Class dates: Green Thursday 2026-11-05, Silver Friday 2026-11-06. Required
 * modules, from the schedule (Jeff's Unit 4 module review, 2026-10-23): 02
 * First & 10, 06 Checkpoint 1, 08 Primary Source (Afonso I's letter), 09
 * BeInTheRoom (the Goa Fort Council) and 10 Checkpoint 2. Skill Builder and
 * Evidence Lab are optional, so they have no slide.
 *
 * Revised 2026-11-05 (Jeff): the Indian Ocean story told as three slides,
 * Calicut 1498, from traders to a navy, and Albuquerque's three gates (two
 * taken, Aden missed), leading into the Goa Fort Council. Five slides trimmed
 * as repetitive or optional today: Labor on the Page, How Many (its number
 * moved into the plantation slide), Myth and Evidence (its corrections live on
 * the ledger), Skill Builder and Evidence Lab. How the Dutch took Portugal's
 * posts stays in 4.5, which owns joint-stock companies.
 *
 * Outline and road map pilot, 2026-11-06 (Jeff, this topic only first). Jeff
 * teaches from the story slides and skipped the module slides, so: `outline`
 * below is a plain teaching outline the briefing shows first (five section
 * headers with short bullets, the vocabulary from the First & 10 with
 * definitions, and the three myths to watch for), and the run of show folds
 * away under it. A road-map slide before the First & 10 shows students the same
 * five headers, every story slide's eyebrow names its section, minute counts
 * are off the projected slides (they stay in `flow` and the notes), and the
 * Sharpen slide and the three module action slides became one Work Time slide.
 * No story slide changed.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.4',
    minutes: 90,
    title: 'Maritime Empires Established',
    subtitle: 'Europeans built empires from the sea, but much of the world kept its own rules.',
    essentialQuestion: 'When Europeans built maritime empires from 1450 to 1750, what changed and what continued in who ruled, in trade and labor, and in slavery?',
    apFocus: 'Continuity and Change, with Sourcing and Situation 2.A',
    endTarget: 'Students can name the political, religious and economic rivalries that drove five European maritime empires; explain one change (trading posts, a new labor system, plantation slavery) and one continuity (Ming and Tokugawa limits, Asian merchants in the Indian Ocean, the mit’a reused, slavery in Africa in its older forms) for each of the three learning objectives; explain how Kongo and Asante grew stronger through the trade; and name a source’s author, audience, purpose and situation, and say how they change what it means.'
  },

  priorities: {
    must: [
      'Answer all three learning objectives, each as a change and a continuity: who ruled (E), trade and labor (F), slavery (G).',
      'Teach the Ming and Tokugawa limits on European trade (KC-4.3.II.A.i, second sentence): the old 4.4 pages never did.',
      'Teach Kongo and Asante as states that grew stronger through the trade (KC-4.3.II.A.ii).',
      'Land the spine with the ledger slide: Europeans built empires from the sea, but much of the world kept its own rules.'
    ],
    should: [
      'Tell the Indian Ocean story: at Calicut in 1498 Portugal had little Asia wanted to buy, so it competed with warships and forts, and took two of the three gates of the ocean (Malacca, Hormuz) but not Aden.',
      'Model 2.A once on the 1635 Tokugawa memorandum, then let students source Afonso\'s 1526 letter themselves.',
      'Correct three myths on the ledger slide: "Europe took over the world after 1500," "slavery began with the Atlantic trade," and "African rulers had no power in the trade."',
      'Name the rivalries (political, religious, economic) as the cause of the empires (KC-4.3.II.C).'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Empires from the Sea."'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "Empires from the Sea"; nothing is
  // new. Required modules are the schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '06 Checkpoint 1', '08 Primary Source', '09 BeInTheRoom', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Why Europeans went to sea', kc: 'KC-4.3.II.C · KC-4.3.II.A.i', points: [
        'Cause = rivalries: political, religious, economic',
        'Political: Tordesillas, the Dutch revolt, England vs. France',
        'Religious: war on Muslim powers; Catholic vs. Protestant',
        'Economic: gold, spices, sugar',
        'Five empires: Portugal, Spain, Dutch, France, Britain',
        'Trading post = a fort that controls trade, not a country',
        'Elmina, 1482: Gold Coast gold (later a slave-trade center)',
        'Profitable for rulers and merchants'
      ] },
      { label: 'II', title: 'Portugal in the Indian Ocean', kc: 'KC-4.3.II.A.i · KC-4.3.II.A.iii', points: [
        'Calicut, 1498: da Gama\'s gifts get laughed at; Portugal has little Asia wants',
        'The Zamorin is a Hindu king (no Mughals until 1526)',
        'Can\'t out-trade them, so out-gun them: Cabral 1500, da Gama 1502',
        'The gates of the ocean: Goa 1510 (base), Malacca 1511, Hormuz 1515',
        'Aden 1513 fails, so the Red Sea stays open',
        'Change: the cartaz, a pass Asian ships must buy',
        'Continuity: Gujarati, Swahili, Omani, Javanese merchants trade on; most trade stays intra-Asian',
        'Oman pushes Portugal out: Muscat 1650, Mombasa 1698'
      ] },
      { label: 'III', title: 'China and Japan set the rules', kc: 'KC-4.3.II.A.i', points: [
        'Some Asian states limited European trade',
        'Ming China: the Portuguese stay at Macau only by Chinese permission',
        'Tokugawa Japan: orders of 1633 to 1639; Spanish expelled 1624',
        'Dutch confined to Dejima, 1641; Japan still trades with the Dutch, Chinese and Korea',
        '"Closed country" is a later label (1801)'
      ], skill: 'You model sourcing (2.A) out loud on the 1635 orders to the Nagasaki officials. The audience is officials, not foreigners, so the orders show real intent.' },
      { label: 'IV', title: 'Kongo and Asante grow stronger', kc: 'KC-4.3.II.A.ii', points: [
        'Joining the trade increased their influence',
        'Kongo: Portuguese ally, Christian court',
        'Asante: victory at Feyiase, 1701; gold and guns',
        'Both also sold captives'
      ], skill: 'Students source Afonso I\'s 1526 letter themselves. Audience: the king of Portugal. Purpose: stop the kidnapping of his own subjects. It is about control, not ending slavery.' },
      { label: 'V', title: 'Who did the work: labor and slavery', kc: 'KC-4.2.II.D · KC-4.2.II.B · KC-4.2.II.C', groups: [
        { name: 'Labor in the Americas', points: [
          'Colonies depend on agriculture and mines',
          'Kept, in a new form: the mit\'a, now serving Spain (Potosí took 1 in 7 men)',
          'New: encomienda, then hacienda; indentured servitude; chattel slavery'
        ] },
        { name: 'Slavery', points: [
          'Continuity: slavery in Africa in its older forms (households; exports to the Mediterranean and Indian Ocean)',
          'Change: plantations raise demand for enslaved labor in the Americas',
          'Estimates: about 277,000 in the 1500s; about 2.5 million, 1701 to 1750',
          'Demographic, social (tied to race, almost no way out), cultural (mixing is 4.5)'
        ] }
      ] }
    ],
    wrap: { title: 'Put it together', columns: ['Changed', 'Kept going'], rows: [
      { label: 'Who ruled', cells: ['European trading posts; Kongo and Asante stronger', 'Ming and Tokugawa set the terms'] },
      { label: 'Trade and labor', cells: ['The cartaz; encomienda, hacienda, indentured servitude, chattel slavery', 'Asian merchants trade on; the mit\'a reused'] },
      { label: 'Slavery', cells: ['Plantation slavery in the Americas (the biggest change)', 'Older forms in Africa'] }
    ] },
    vocabulary: [
      { term: 'Maritime empire', def: 'An empire held together by ships: ports, forts and colonies linked by sea.' },
      { term: 'Trading post', def: 'A small fortified base where a foreign state\'s merchants buy and sell.' },
      { term: 'Cartaz', def: 'A Portuguese pass Asian ships had to buy; ships without one could be attacked.' },
      { term: 'Intra-Asian trade', def: 'Trade from one Asian port to another. Still most of the ocean\'s trade; Europeans often profited by joining it.' },
      { term: 'Mit\'a', def: 'The Inca duty to send workers to the state in turns. Spain turned it into a draft for the Potosí silver mine.' },
      { term: 'Encomienda', def: 'A grant giving a Spanish colonist the labor and tribute of a group of Indigenous people.' },
      { term: 'Hacienda', def: 'A large estate where Indigenous and mixed-race workers farmed and herded, often for wages, sometimes tied by debt.' },
      { term: 'Indentured servitude', def: 'Paying for the voyage with four to seven years of work under a contract.' },
      { term: 'Chattel slavery', def: 'People owned as property for life, and their children too.' },
      { term: 'Plantation economy', def: 'Huge farms growing one crop to sell (sugar, later tobacco) that needed enormous numbers of workers.' }
    ],
    watch: [
      { myth: '"Europe took over the world after 1500."', fix: 'Ports and passes, not continents. China and Japan set the terms.' },
      { myth: '"Slavery began with the Atlantic trade."', fix: 'Older forms in Africa went on alongside it.' },
      { myth: '"African rulers had no power in the trade."', fix: 'Kongo and Asante grew stronger through it (and also sold captives).' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the three objectives, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.3, 4.2 and 2.3. Bridge to who would rule and who would work.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the Nanban screen.', students: 'Predict one change and one continuity.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the five sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Empires from the Sea" in class.', students: 'For every case: what changed, what kept going.', slide: 5 },
    { id: 'rivals', label: 'Why Build Empires', range: '18-20', minutes: 2, teacher: 'Political, religious, economic rivalries; five empires.', students: 'Sort a motive into a branch.', slide: 6 },
    { id: 'map', label: 'Where They Reached', range: '20-21', minutes: 1, teacher: 'Forts on coasts, colonies in the Americas, places with their own rules.', students: 'Find one fort and one place that set its own terms.', slide: 7 },
    { id: 'posts', label: 'Forts on the Coast', range: '21-22', minutes: 1, teacher: 'Elmina as the case: what a trading post was and who it paid.', students: 'Say who made money.', slide: 8 },
    { id: 'calicut', label: 'Calicut, 1498', range: '22-25', minutes: 3, teacher: 'The gifts that got laughed at: Portugal had little Asia wanted.', students: 'Who wrote it down, and why?', slide: 9 },
    { id: 'force', label: 'Traders to a Navy', range: '25-27', minutes: 2, teacher: '1500 and 1502: Portugal turns to force.', students: 'Name the cause, then the result.', slide: 10 },
    { id: 'gates', label: 'The Three Gates', range: '27-29', minutes: 2, teacher: 'Malacca and Hormuz taken, Aden missed, Goa the base.', students: 'Say which gate stayed open.', slide: 11 },
    { id: 'oceanmap', label: 'On the Map', range: '29-30', minutes: 1, teacher: 'Find the three gates on a real map; Aden has no Portuguese post.', students: 'Point to the gate that got away.', slide: 12 },
    { id: 'ocean', label: 'The Old Ocean', range: '30-32', minutes: 2, teacher: 'The cartaz changed things; the merchants kept trading.', students: 'Name one change and one continuity.', slide: 13 },
    { id: 'asia', label: 'Asia Sets the Terms', range: '32-34', minutes: 2, teacher: 'Macau under Ming rules; Japan, 1635 to 1641.', students: 'Say who made the rules.', slide: 14 },
    { id: 'source1635', label: 'Source It: 1635', range: '34-37', minutes: 3, teacher: 'Model 2.A: author, audience, purpose, situation.', students: 'Name the four.', slide: 15 },
    { id: 'africa', label: 'Kongo and Asante', range: '37-39', minutes: 2, teacher: 'Two African states that grew stronger through the trade.', students: 'Say what each gained.', slide: 16 },
    { id: 'afonso', label: 'Source It: Afonso', range: '39-42', minutes: 3, teacher: 'Students source the 1526 letter themselves.', students: 'Audience, purpose, and what it changes.', slide: 17 },
    { id: 'labor', label: 'Work in the Americas', range: '42-45', minutes: 3, teacher: 'One old system, four new ones.', students: 'Sort each as old or new.', slide: 18 },
    { id: 'oldslavery', label: 'Slavery in Africa', range: '45-47', minutes: 2, teacher: 'The older forms that continued.', students: 'Name two older forms.', slide: 19 },
    { id: 'plantation', label: 'What the Plantations Changed', range: '47-50', minutes: 3, teacher: 'The jump in numbers, then demographic, social and cultural change.', students: 'Name one of each.', slide: 20 },
    { id: 'ledger', label: 'What Changed, What Kept Going', range: '50-54', minutes: 4, teacher: 'Students redraw the ledger from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 21 },
    { id: 'worktime', label: 'Work Time', range: '54-85', minutes: 31, teacher: 'Modules 06, 08, 09 and 10, in that order: Checkpoint 1 with no coach, Afonso\'s full letter, the Goa Fort Council, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Checkpoint 1, Afonso\'s letter, the Goa Fort Council, Checkpoint 2.', slide: 22 },
    { id: 'close', label: 'Landing Sentence', range: '85-87', minutes: 2, teacher: 'Land the answer and leave the 4.5 question open.', students: 'Say the topic in one sentence.', slide: 23 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.4', url: '../unit-4/lesson-4-4-maritime-empires-established.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-4-maritime-empires-established-capture.html' },
    { label: 'BeInTheRoom: The Goa Fort Council', url: '../beintheroom/unit-4/the-goa-fort-council.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-4-maritime-empires-established.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-4-slide',
    title: 'Topic 4.4 Presentation',
    file: 'present-topic-4-4.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Empires from the sea. A world with its own rules.',
      subtitle: 'Continuity and Change, with Sourcing and Situation 2.A. Three objectives: who ruled, trade and labor, slavery. For each, one change and one continuity.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: empires from the sea, own rules',
          'Three objectives: who ruled, labor, slavery',
          'Each one: a change and a continuity',
          'Teach the Ming and Tokugawa limits',
          'Kongo and Asante grew stronger',
          'Save VOC, silver, casta for later',
          'New story: Calicut, force, two of three gates'
        ],
        land: [
          'CED pp. 83 and 84. Three learning objectives. E (Governance): explain the process of state building and expansion among various empires and states, 1450 to 1750. F (Economic Systems): explain the continuities and changes in economic and labor systems. G (Social Interactions and Organization): explain changes and continuities in systems of slavery.',
          'KC-4.3.II.A.i: Europeans established trading posts in Africa and Asia, profitable for the rulers and merchants involved; some Asian states limited European trade with restrictive or isolationist policies. KC-4.3.II.C: driven largely by political, religious and economic rivalries, European states established maritime empires (Portuguese, Spanish, Dutch, French, British). KC-4.3.II.A.ii: maritime trade fostered the growth of Asante and Kongo. KC-4.3.II.A.iii: despite some disruption, Indian Ocean networks continued to flourish, with intra-Asian trade and Asian merchants. KC-4.2.II.D: colonial economies in the Americas largely depended on agriculture, used existing labor systems (the Incan mit’a) and introduced new ones (chattel slavery, indentured servitude, encomienda, hacienda). KC-4.2.II.B: enslavement in Africa continued in its traditional forms (households; export to the Mediterranean and the Indian Ocean). KC-4.2.II.C: plantation growth increased the demand for enslaved labor in the Americas, with significant demographic, social and cultural changes.',
          'The CED\'s illustrative examples (optional): Ming China and Tokugawa Japan; Swahili Arabs, Omanis, Gujaratis and Javanese. All six are in this deck because each carries a Key Concept sentence.',
          'Owns: trading posts and the rivalries behind them, Ming and Tokugawa limits, Kongo and Asante, Indian Ocean continuity, colonial labor systems old and new, slavery old and new.',
          'Bridge only: joint-stock companies and the VOC (4.5; the Dutch appear as a rival and as the traders on Dejima, not as a company); silver\'s global flow (4.5; Potosí appears only as where the mit’a sent workers); casta (4.7, not mentioned); cultural mixing and gender and family change (4.5); resistance and Maroons (4.6).',
          'Three myths, corrected on the ledger slide: "Europe took over the world after 1500"; "slavery began with the Atlantic trade"; "African rulers had no power in the trade."',
          'Revision, 2026-11-05: three slides tell the Indian Ocean story (Calicut 1498; from traders to a navy, 1500 and 1502; Albuquerque\'s three gates, with Aden missed in 1513), and lead into the Goa Fort Council (Module 09). Correction to a common classroom version: the court that embarrassed da Gama was that of the Zamorin of Calicut, a Hindu king; his officials laughed at the gifts, and the king reproached da Gama the next day. The Mughal Empire did not exist until 1526. Why the Dutch took Portugal\'s posts is 4.5 (joint-stock companies); today ends on that question.',
          'Every picture in this deck is a real historical object or scene, except the course\'s own map on slide 6. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Europeans built empires from the sea, but much of the world kept its own rules: China and Japan set terms, Asian merchants kept trading, Kongo and Asante grew, the mit’a was reused and slavery in Africa went on, while plantations made slavery in the Americas larger and different.',
        avoid: 'Avoid teaching how the VOC or the English East India Company were organized, or the silver trade to China. Both are 4.5, and the old 4.4 pages spent a section on the companies.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull the last topics back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.3', text: 'What did the new sugar plantations need more of than ever?' },
          { label: 'Topic 4.2', text: 'Where did Vasco da Gama\'s route lead, and what did Portugal want there?' },
          { label: 'Topic 2.3', text: 'Name one group of merchants who traded on the Indian Ocean before Europeans arrived.' }
        ],
        turn: '4.3 ended with a question: **who would do the work, and who would rule?** Watch for two things today: what changed, and what kept going the way it already had.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          '4.3 hand-off: who works, who rules?',
          'Portugal reached India, Calicut 1498',
          '2.3 merchants still trading in 1700'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: workers (coerced labor, enslaved Africans); to India, Calicut in 1498, for spices and the trade that carried them; Gujarati, Arab, Swahili, Persian, Malay or Chinese merchants (2.3).',
          'The bridge is 4.3\'s hand-off in the unit story map: disease emptied the land of workers, and new crops needed them. Who would do the work, and who would rule?',
          'Prompt 3 sets up the biggest continuity of the day: the merchants of 2.3 are still there in 1700.'
        ],
        ask: 'When the Portuguese reach the Indian Ocean, do the merchants from 2.3 disappear?',
        listenFor: 'No; they keep trading.',
        ap: 'Retrieval plus bridge: 4.3 left a labor question; 4.4 answers it and adds who ruled.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'Europeans built empires from the sea. What changed, and what kept going?',
      subtitle: 'Portuguese traders arriving in Japan, about 1600, as a Japanese painter imagined them for Japanese buyers.',
      notes: {
        minutes: 1,
        keys: [
          'Japanese screen, ~1600: arrival seen from shore',
          'Japan later decided how far ships reached',
          'Predict one change, one continuity'
        ],
        land: [
          'The picture is a real historical object: the right-hand screen of Kano Naizen\'s "Arrival of the Southern Barbarians" (nanban-jin), a six-panel folding screen of about 1600, Kobe City Museum. A Portuguese carrack has anchored; merchants, officers and enslaved servants walk up from the shore; Jesuit priests in black wait at the right. "Southern barbarians" was the Japanese name for the Portuguese and Spanish, who came from the south.',
          'It sets the question because it is the arrival seen from the shore: Japanese artists painted these screens for Japanese buyers, and Japan\'s rulers would later decide how far those ships could reach.',
          'The question is all three learning objectives in a ninth grader\'s words: who ruled, trade and work, and slavery, each as a change and a continuity.'
        ],
        ask: 'Predict one thing that changed when these ships arrived, and one thing that did not.',
        listenFor: 'Changed: Europeans built forts and colonies. Kept going: local rulers and merchants.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Europeans built empires from the sea. What changed, and what kept going?',
        stops: [
          { label: 'I', text: 'Why Europeans went to sea' },
          { label: 'II', text: 'Portugal in the Indian Ocean' },
          { label: 'III', text: 'China and Japan set the rules' },
          { label: 'IV', text: 'Kongo and Asante grow stronger' },
          { label: 'V', text: 'Who did the work: labor and slavery' },
          { label: '✓', text: 'Put it together: what changed, what kept going', key: true }
        ],
        thenLabel: 'Then',
        then: 'Checkpoint 1 · Primary Source · BeInTheRoom · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Five sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the five headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to V), so the class can see where it is all period.',
          'The question at the top is the topic question: for each section, students watch for what changed and what kept going.'
        ],
        ask: 'Which section do you expect the biggest change in?',
        listenFor: 'Any reasoned guess; return to it at the ledger.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read with two questions in mind.',
      subtitle: 'For every case: what changed, and what kept going the way it already had?',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Sort each case: change or continuity',
          'Some are both: cartaz, mit’a',
          'Q2: Afonso’s audience and purpose',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "Empires from the Sea" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort each case as a change or a continuity, and who notice that some cases are both (the cartaz; the mit’a).',
          'Question 02 is the topic\'s 2.A practice: it asks for Afonso\'s audience and purpose. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which case in the reading was both a change and a continuity?',
        listenFor: 'The Indian Ocean (the cartaz changed things; the merchants kept trading), or the mit’a (an old duty, a new master).'
      }
    },
    {
      phase: 'rivals', kind: 'branch-tree', eyebrow: 'I · Why Europeans Went to Sea',
      kc: 'KC-4.3.II.C', title: 'Rivals built empires from the sea.',
      footer: 'Portugal, Spain, the Dutch, France and England: when one found a route or a rich coast, the others came after it.',
      template: {
        claimLabel: 'The cause',
        claim: 'European states built maritime empires because they were **rivals**.',
        branches: [
          { label: 'Political', note: 'Each wanted the power the others had', items: ['Portugal and Spain', 'Dutch against Spain', 'England and France'] },
          { label: 'Religious', note: 'A mission, and wars between churches', items: ['War on Islam', 'Spreading Christianity', 'Protestant against Catholic'] },
          { label: 'Economic', note: 'The goods and the trade that carried them', items: ['Gold', 'Spices', 'Sugar'] }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Cause: rivalries',
          'Political: Tordesillas, Dutch revolt, England vs. France',
          'Religious: war on Muslims; Catholic vs. Protestant',
          'Economic: gold, spices, sugar',
          'Five: Portugal, Spain, Dutch, France, Britain',
          'Trading companies wait for 4.5'
        ],
        land: [
          'KC-4.3.II.C names the cause in three words: political, religious and economic rivalries. The five empires are the CED\'s: Portuguese, Spanish, Dutch, French and British (England until the Union of 1707).',
          'Political: Spain and Portugal divided their claims by the Treaty of Tordesillas (1494); the Dutch Republic fought for its independence from Spain from 1568; England and France fought each other repeatedly for colonies in the 1600s and 1700s.',
          'Religious: papal bulls of the 1450s cast Portuguese expansion as war on Muslim "Saracens" and a Christian mission; after the Reformation, Protestant England and the Dutch fought Catholic Spain (the Anglo-Spanish War, 1585 to 1604).',
          'Economic: gold from West Africa, spices from Asia, sugar from the Americas, and the profits of carrying them.',
          'Do not explain how the Dutch and English organized their trading companies. That is 4.5.'
        ],
        ask: 'Which branch would a Portuguese king of 1500 have named first in public, and which in private?',
        listenFor: 'Religion in public; money and power in private. All three were real.',
        ap: 'Continuity and Change starts with a cause: why the change happened.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'I · Why Europeans Went to Sea · Map',
      kc: 'Unit 4: Learning Objective E', title: 'Forts, colonies, and their own rules.',
      footer: 'In Africa and Asia, Europeans mostly held coasts. In the Americas, they took territory.',
      visual: { url: '../assets/images/instructional-maps/topic-4-4.svg', alt: 'World map marking the Gold Coast and Elmina, Kongo, the Swahili coast and Mombasa, Goa, Malacca, Macau, Japan, the Caribbean and Potosí, with arrows for forts on the coast, enslaved Africans carried west and to Brazil, and intra-Asian trade' },
      notes: {
        minutes: 1,
        keys: [
          'Shading is schematic, not borders',
          'European places sit on coasts',
          'Own terms: Japan, Macau, Kongo',
          'Oman pushed Portugal from Mombasa, 1698',
          'Colonies: Potosí, Caribbean'
        ],
        land: [
          'The course\'s own instructional map, rebuilt for this story. Shaded regions are schematic, not borders.',
          'Point out the pattern: most European places in Africa and Asia sit on a coast; Japan, Macau under Ming officials and Kongo are places that set their own terms; on the Swahili coast merchants kept trading and Oman pushed Portugal out of Mombasa in 1698; Potosí and the Caribbean are colonies.'
        ],
        ask: 'Find one European fort and one place that set its own terms.',
        listenFor: 'Goa, Malacca or Elmina; Japan, Macau under Ming rules, or Kongo.'
      }
    },
    {
      phase: 'posts', kind: 'case-file', eyebrow: 'I · Why Europeans Went to Sea · Trading Posts',
      kc: 'KC-4.3.II.A.i', title: 'What a trading post was, and who it paid.',
      template: {
        tag: 'Trading post', place: 'Elmina, Gold Coast', date: '1482',
        visual: { url: '../assets/images/topics/4-4/elmina-dapper-c1668.jpg', alt: 'Engraving of a large fort on a low rocky point above the sea, a smaller fort on the hill behind it, and sailing ships firing a salute in the foreground', credit: 'Elmina, Dapper, Amsterdam, 1668 · Public domain', position: '50% 60%' },
        rows: [
          { label: 'Built by', text: '**Portugal**, to buy gold on the coast of West Africa' },
          { label: 'Then', text: 'Portugal carried the same idea to **India**: forts on coasts, not whole countries' },
          { label: 'Paid', text: 'The **kings** who backed the posts and the **merchants** who traded through them' },
          { label: 'Taken', text: 'The Dutch captured Elmina in **1637**: rivals took each other\'s posts' }
        ],
        proves: 'A trading post was a small fortified base where a foreign state\'s merchants bought and sold.'
      },
      notes: {
        minutes: 1,
        keys: [
          'A fort controlled trade, not a country',
          'Few men could hold a fort',
          'Elmina, 1482: the gold trade',
          'Portugal had this model before India',
          'Profit for rulers and merchants',
          'Elmina later a slave-trade center'
        ],
        land: [
          'São Jorge da Mina (Elmina) was built by Diogo de Azambuja in 1482 to control the gold trade of the Gold Coast. The Dutch West India Company took it in 1637. The engraving, from Olfert Dapper\'s description of Africa (Amsterdam, 1668), is titled "Casteel del Mina" and shows the castle in Dutch hands, with the Dutch fort Coenraadsburg on the hill behind (Atlas of Mutual Heritage 6856). Dapper never saw Africa himself; he compiled his book from others\' reports.',
          'Portugal had built Elmina sixteen years before da Gama reached India, so it arrived in the Indian Ocean already knowing how to run a fort for trade. The next three slides carry that model to Calicut, Goa, Malacca and Hormuz. The Portuguese crown held the pepper trade as a royal monopoly and drew customs from its ports: profit for rulers and merchants, the CED\'s words.',
          'Elmina later became a center of the Atlantic slave trade; that is the scale slide, later in the lesson.'
        ],
        ask: 'Why a fort on a coast and not a conquered province?',
        listenFor: 'A fort could control trade with a few hundred men; conquering a country took an army they did not have.',
        ap: 'The first change in the ledger: Europeans now held posts on the coasts of Africa and Asia.'
      }
    },
    {
      phase: 'calicut', kind: 'story-scene', eyebrow: 'II · Portugal in the Indian Ocean · 1',
      kc: 'Unit 4: Learning Objective F', // carried by the Sharpen slide until 2026-11-06: the Asian trade economy Portugal entered, the continuity half of F
      title: 'Calicut, 1498: the gifts that got laughed at.',
      footer: 'A Portuguese sailor wrote this down. Why would he record his own side being laughed at?',
      template: {
        caption: 'Calicut\'s harbor, 1498',
        steps: [
          { label: 'May 1498', text: 'Da Gama reaches **Calicut**, a rich pepper port ruled by the **Zamorin**, a Hindu king.' },
          { label: 'The gifts', text: 'Striped cloth, hats, hoods, coral, washbasins, sugar, oil and honey.' },
          { label: 'The laugh', key: true, text: 'The king\'s officials laughed: "the poorest merchant from Mecca" gave more.' },
          { label: 'The problem', key: true, text: 'Portugal had little to sell that Asian buyers wanted.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'The Zamorin, a Hindu king, not a Mughal',
          'Mughal Empire begins 1526, 28 years later',
          'Gifts: cloth, hats, basins, sugar, honey',
          'Poorest Mecca merchant gave more',
          'Portugal had little Asia wanted',
          'Source: a Portuguese sailor\'s journal'
        ],
        land: [
          'The ruler was the Zamorin (Samoothiri) of Calicut, the Hindu king of a trading city on the Malabar coast of southwest India. He was not a Mughal emperor: Babur founded the Mughal Empire in 1526, and the Mughals never ruled Calicut. If a student has heard the Mughal version, correct it here.',
          'The source is the journal of an unnamed member of da Gama\'s crew, translated by E. G. Ravenstein, A Journal of the First Voyage of Vasco da Gama, 1497-1499 (Hakluyt Society, 1898), entry for Tuesday, May 29, 1498. The present was "twelve pieces of lambel [striped cloth], four scarlet hoods, six hats, four strings of coral, a case containing six wash-hand basins, a case of sugar, two casks of oil, and two of honey."',
          'The reaction, in the journal\'s words: the king\'s Muslim factor and a local official "laughed at it, saying that it was not a thing to offer to a king, that the poorest merchant from Mecca, or any other part of India, gave more, and that if he wanted to make a present it should be in gold ..." At his audience the next day, the king said da Gama claimed to come from "a very rich kingdom, and yet had brought him nothing."',
          'Why it matters: Asian markets sold fine cotton cloth, pepper and other spices, silk and porcelain. Portugal had little that Asian buyers wanted except gold and silver. It could not out-trade the Gujarati and Arab merchants of Calicut, so it would try to win another way. That is the next slide.',
          'Sourcing (2.A): the writer was Portuguese, and he blamed the "Moors," the Muslim merchants, for Portugal\'s troubles at Calicut. Point of view shapes who gets blamed. That he recorded his own side being laughed at makes the scene more believable, not less.'
        ],
        ask: 'A Portuguese sailor wrote this down. Why would he record his own side being laughed at?',
        listenFor: 'It explained why the trade went badly and let him blame the Muslim merchants. An embarrassing detail is less likely to be invented.',
        ap: 'Sourcing and Situation 2.A: point of view and purpose, on a source students first meet as a story.'
      }
    },
    {
      phase: 'force', kind: 'cause-chain', eyebrow: 'II · Portugal in the Indian Ocean · 2',
      kc: 'KC-4.3.II.C', title: 'From traders to a navy.',
      footer: 'The laugh did not cause the violence by itself. It showed Portugal it could not win by trading alone.',
      template: {
        steps: [
          { label: 'The goal', text: 'Spices, a monopoly, and war on Muslim rivals' },
          { label: '1498', text: 'At Calicut: little to sell, and the Muslim merchants against them' },
          { label: '1500', text: 'Fighting at a new Portuguese trading post; the fleet shells Calicut' },
          { label: '1502', key: true, text: 'Da Gama returns with warships, burns a pilgrim ship, shells Calicut' },
          { label: 'The result', key: true, text: 'Win by force: forts, warships, and passes sold to Asian ships' }
        ],
        links: ['then', 'then', 'then', 'so']
      },
      notes: {
        minutes: 2,
        keys: [
          'The goal came first: spices, monopoly, crusade',
          '1500: Cabral\'s trading post attacked, city shelled',
          '1502: da Gama burns the Miri, shells Calicut',
          'Could not out-trade them, so out-gunned them',
          'Rivalry, economic and religious: the CED\'s cause'
        ],
        land: [
          'KC-4.3.II.C: maritime empires were "driven largely by political, religious, and economic rivalries." This slide is that sentence as a story. The economic rival was the Muslim merchant community that ran Calicut\'s pepper trade; the religious rivalry is why the Portuguese crown treated the competition as a war.',
          'The goal came before the insult. King Manuel I wanted Asian spices without Muslim and Venetian middlemen, and saw the voyages as part of a war against Islam. The Calicut audience showed he could not reach that goal by trading, because Portugal had little to sell.',
          '1500: Pedro Álvares Cabral opened a Portuguese trading post at Calicut. After the Portuguese seized a Muslim merchant ship they said was loading pepper ahead of them, a crowd attacked the post in December 1500 and killed dozens of Portuguese, including the man in charge of it. Cabral seized and burned ships in the harbor and bombarded the city.',
          '1502: da Gama returned with a war fleet. Off the Malabar coast he captured the Miri, a ship carrying Muslim pilgrims home from Mecca, and burned it with most of its passengers aboard; accounts give several hundred people. He then bombarded Calicut. Say it plainly and briefly: this is the turn to force.',
          'Then the system: the Portuguese allied with the Zamorin\'s rival, the ruler of Cochin, built their first fort in India there in 1503, and began requiring Asian ships to buy a pass, the cartaz.'
        ],
        ask: 'Did the laugh at Calicut cause the violence?',
        listenFor: 'Partly. It showed Portugal it could not compete by trading, but the crown already wanted a monopoly and a war on its Muslim rivals.',
        ap: 'A trigger and a longer goal: the cause of a change, which is where Continuity and Change starts.'
      }
    },
    {
      phase: 'gates', kind: 'ledger', eyebrow: 'II · Portugal in the Indian Ocean · 3',
      kc: 'KC-4.3.II.A.i', title: 'Hold the gates of the ocean.',
      footer: 'Albuquerque\'s plan: hold the narrow places long-distance ships had to pass, and tax the trade.',
      template: {
        rows: [
          { name: 'Goa', mark: 'B', tool: 'The base, taken **1510**', result: 'Portugal\'s capital in India' },
          { name: 'Malacca', mark: '✓', tool: 'Taken **1511**', result: 'the strait to China' },
          { name: 'Hormuz', mark: '✓', tool: 'Taken **1515**', result: 'the mouth of the Persian Gulf' },
          { name: 'Aden', mark: '✗', tool: 'Attack failed, **1513**', result: 'the mouth of the Red Sea' }
        ],
        payoffLabel: 'The result',
        payoff: 'Two of the three gates. The Red Sea stayed open.'
      },
      notes: {
        minutes: 2,
        keys: [
          'A gate: a narrow place long-distance ships pass',
          'Goa 1510: the base',
          'Malacca 1511 and Hormuz 1515: taken',
          'Aden 1513: failed, Red Sea stayed open',
          'Ports and passes, not the ocean',
          'Leads straight into the Goa Fort Council'
        ],
        land: [
          'KC-4.3.II.A.i: Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved. This is how Portugal did it in the Indian Ocean.',
          'Afonso de Albuquerque, governor of Portuguese India from 1509 to 1515, aimed to hold the narrow passages that long-distance ocean trade had to pass (much coastal trade never passed them): the mouth of the Red Sea (Aden), the mouth of the Persian Gulf (Hormuz) and the strait between the Indian Ocean and the South China Sea (Malacca), with Goa as the base. He took Goa in 1510 and Malacca in 1511, and secured Hormuz in 1515 after a first attempt in 1507. His attack on Aden in 1513 failed.',
          'Why Aden matters: Portuguese patrols cut the Red Sea pepper trade sharply for about two decades, but with Aden unconquered they never closed it, and by the middle of the 1500s pepper was again reaching Egypt and Venice in large amounts. Portugal never closed the ocean; it taxed the parts it could reach. On the slide, Goa is marked B because it was the base, not a gate.',
          'Students meet this exact moment in the Goa Fort Council (Module 09): Albuquerque is dead, Portugal holds Goa, Malacca and Hormuz, and it lacks the people and money to conquer the lands behind them.',
          'Leave the ending for 4.5. The Dutch took Malacca in 1641, and Persian and English forces took Hormuz in 1622. How a small country like the Dutch Republic did it is the joint-stock company story of 4.5.'
        ],
        ask: 'Which gate stayed open, and what did that mean?',
        listenFor: 'Aden and the Red Sea: Portugal disrupted that route for years but never closed it, so spices still reached Egypt and Venice.',
        ap: 'A change with a limit: Portugal held ports and passes, not the ocean.'
      }
    },
    {
      phase: 'oceanmap', kind: 'frame-full', eyebrow: 'II · Portugal in the Indian Ocean · Map',
      title: 'Find the gates, and the gate that got away.',
      template: {
        visual: { url: '../assets/images/topics/2-3/' + encodeURIComponent('2.3 - Indian Ocean Trade Map Detailed.jpg'), credit: 'Simeon Netchev, World History Encyclopedia (worldhistory.org/image/20178) · CC BY-NC-ND', tagPos: 'bl', alt: 'Map titled Trade in the Indian Ocean, 15th to 16th century, from East Africa and the Red Sea to China, Japan and the spice islands. White lines show the principal Indian Ocean trade routes connecting the Swahili coast, the Red Sea, the Persian Gulf, India, Southeast Asia and China, with icons for goods such as spices, cotton, textiles, gold, ivory, porcelain, silk and enslaved people. Purple dots mark Portuguese trading posts with the year each was set up, among them Sofala and Kilwa 1505, Mozambique 1507, Hormuz 1515, Muscat 1550, Diu 1535, Goa 1510, Cochin 1503, Colombo 1518, Malacca 1511, Ambon 1511, Macau 1555 and Ternate 1522. Aden, at the mouth of the Red Sea, has no Portuguese date. Purple lines trace Vasco da Gama\'s 1498 route around Africa to Calicut and Pero da Covilha\'s mission of 1487 to 1490; green lines trace Zheng He\'s voyages of 1405 to 1433 and Spanish voyages across the Pacific. Empires labeled include the Ottoman, Safavid and Mughal empires and the Ming dynasty.' }
      },
      notes: {
        minutes: 1,
        keys: [
          'Purple dots: Portuguese posts, with founding years',
          'Find Goa 1510, Malacca 1511, Hormuz 1515',
          'Aden: no Portuguese date, the missed gate',
          'White lines: the Asian routes kept running',
          'Mughal label means after 1526, not 1498',
          'A modern map, not a primary source'
        ],
        land: [
          'The map is Simeon Netchev\'s "Trade in the Indian Ocean 15th-16th century," World History Encyclopedia, worldhistory.org/image/20178, published under Creative Commons Attribution-NonCommercial-NoDerivs: free to show with credit, not to alter or use commercially. That is why it is shown whole, uncropped, with nothing drawn on it, and why its credit stays on the slide. It is the same copy the Topic 2.3 map module uses.',
          'Point out the pattern from the last slide: the purple dots (Portuguese posts) sit on coasts and at the narrow places, Hormuz at the mouth of the Persian Gulf and Malacca on its strait, with Goa between them. Aden, at the mouth of the Red Sea, has no purple dot: the gate Portugal attacked in 1513 and never took.',
          'Then the continuity: the white lines are the Asian trade routes, and they run everywhere the purple dots do not. That is the next slide\'s claim, that the Portuguese changed the Indian Ocean but did not replace it.',
          'Two cautions. The map covers the whole 1400s and 1500s, so it labels the Safavid Empire (from 1501) and the Mughal Empire (from 1526), which did not exist when da Gama reached Calicut in 1498; a student who spots the Mughal label is catching exactly the mistake today\'s story corrects. And treat the map\'s smaller post dates as approximate; the dates to teach are the slide\'s, Goa 1510, Malacca 1511 and Hormuz 1515.'
        ],
        ask: 'Put your finger on the three gates. Which one has no purple dot?',
        listenFor: 'Aden, at the mouth of the Red Sea.'
      }
    },
    {
      phase: 'ocean', kind: 'continuity-change', eyebrow: 'II · Portugal in the Indian Ocean · 4',
      kc: 'KC-4.3.II.A.iii', title: 'The Portuguese changed the Indian Ocean. They did not replace it.',
      footer: 'The College Board\'s words: existing trade networks "continued to flourish."',
      template: {
        date: 'After 1498',
        before: { tag: 'Before', items: ['Merchants from East Africa, Arabia, India, Southeast Asia and China', 'Ports open to many traders'] },
        after: { tag: 'Changed', items: ['Portuguese forts at Goa, Hormuz and Malacca', 'Many Asian ships made to buy a pass, the cartaz'] },
        continued: { tag: 'Continued', items: ['Gujarati merchants kept shipping cloth', 'Swahili Arab and Javanese traders kept trading', 'Asian powers pushed back: Oman took Muscat (1650) and Mombasa (1698)'] }
      },
      notes: {
        minutes: 2,
        keys: [
          'Changed: the cartaz, a Portuguese pass',
          'Continued: Gujaratis bought passes, traded on',
          'Most trade stayed intra-Asian',
          'Oman pushed Portugal out, 1650 and 1698',
          'CED merchants: Swahili, Omani, Gujarati, Javanese'
        ],
        land: [
          'The cartaz was a Portuguese pass: Asian ships were to buy one, call at Portuguese ports and avoid goods Portugal claimed for itself, or risk seizure. Pearson (Merchants and Rulers in Gujarat, 1976) shows Gujarati merchants buying passes and trading on.',
          'Much of the ocean\'s trade stayed intra-Asian: between Asian ports, in Asian goods, and European merchants often made their money by carrying it.',
          'Oman\'s Ya\'rubid rulers drove the Portuguese from Muscat in 1650 and took Fort Jesus at Mombasa in 1698 after a siege begun in 1696. An Arabian power pushing Portugal back is continuity with a twist.',
          'The CED\'s merchant examples are all here: Swahili Arabs, Omanis, Gujaratis, Javanese.'
        ],
        ask: 'Which lasted longer, the cartaz or the merchants?',
        listenFor: 'The merchants: the networks were older and outlived Portuguese control.',
        ap: 'One case, a change and a continuity: name both and say which one lasted.'
      }
    },
    {
      phase: 'asia', kind: 'story-scene', eyebrow: 'III · China and Japan Set the Rules',
      kc: 'KC-4.3.II.A.i', title: 'China and Japan decided how far Europeans could reach.',
      template: {
        visual: { url: '../assets/images/topics/4-4/nagasaki-dejima-1735-44.jpg', alt: 'Engraving of Nagasaki harbor below green hills, with the walled Dutch compound on Dejima at the shore, flying a flag, a Dutch company ship, Japanese boats and Chinese junks', credit: 'Nagasaki harbor and Dejima, engraving by Johann Wolfgang Heydt, published in Germany, 1744 · Public domain', fit: 'contain' },
        caption: 'Nagasaki, about 1740: the Dutch island, Dutch and Japanese ships, Chinese junks',
        steps: [
          { label: 'China, 1557', text: 'Portuguese may settle at Macau, under Chinese officials and rules.' },
          { label: 'Japan, 1635', text: 'No Japanese ship may sail abroad. Search every ship for Christians.' },
          { label: 'Japan, 1639', text: 'Portuguese ships are banned. The Dutch are the only Europeans left.' },
          { label: 'Japan, 1641', key: true, text: 'The Dutch must trade only on the island of Dejima. Chinese merchants trade in the city.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'CED: some Asian states limited European trade',
          'Macau: Portuguese stayed by Chinese permission',
          'Japan: orders of 1633 to 1639',
          'Spanish expelled 1624; English left 1623',
          'Dutch confined to Dejima, 1641',
          'Engraving is German, not from life'
        ],
        land: [
          'This is the second sentence of KC-4.3.II.A.i, which the old 4.4 pages never taught: some Asian states limited the disruptive economic and cultural effects of European trade with restrictive or isolationist policies. Ming China and Tokugawa Japan are the CED\'s examples.',
          'Macau: Portuguese merchants settled from 1557 with the permission of Chinese provincial officials; formal recognition and the annual ground rent are dated variously from 1554 to 1573. Chinese officials kept authority in and around the port.',
          'Japan: the shogun\'s senior councilors sent five sets of orders to the Nagasaki magistrates between 1633 and 1639; those of 1635 and 1639 are translated in David J. Lu, Japan: A Documentary History (1997). The Spanish had been expelled in 1624; the English left in 1623. The Dutch moved from Hirado to Dejima in 1641.',
          'The engraving is German, signed by Johann Wolfgang Heydt ("I. W. Heydt del. et sculp.") and published in Germany in 1744 in a book printed by J. C. Tetschner: a European picture made for European readers. Heydt never went to Japan, so he did not draw it from life. It has its own legend: the city of Nagasaki, the island where the Dutch live, a Chinese island, a company ship, Japanese ships and Chinese junks.'
        ],
        ask: 'Who wrote the rules for trade in this harbor?',
        listenFor: 'Japan\'s government, not the Dutch.',
        ap: 'The first continuity in the ledger: Asian states kept setting the terms.'
      }
    },
    {
      phase: 'source1635', kind: 'source-hipp', eyebrow: 'III · China and Japan · Source It, Model',
      kc: 'KC-4.3.II.A.i', title: 'Orders to the officials at Nagasaki, 1635.',
      template: {
        quote: 'Japanese ships are strictly forbidden to leave for foreign countries. ... If any Japanese returns from overseas after residing there, he must be put to death.',
        attribution: { author: 'Senior councilors of the shogun', work: 'Edict to the magistrates of Nagasaki', year: '1635' },
        pov: 'The shogun\'s top officials, who held the government\'s power.',
        audience: 'Their own officials at Nagasaki, who had to carry the orders out.',
        purpose: 'To keep Christianity out and foreign trade under government control.',
        situation: 'Missionaries had made Christian converts in Japan, and the shogunate saw them as a danger.'
      },
      notes: {
        minutes: 3,
        keys: [
          'Model skill 2.A out loud',
          'Point of view, purpose, situation, audience',
          'Audience: Nagasaki officials, not foreigners',
          'Working orders show real intent',
          '"Closed country" label came later (1801)',
          'Japan still traded: Dutch, Chinese, Korea'
        ],
        land: [
          'Translated in David J. Lu, Japan: A Documentary History (1997), pp. 221 to 222, where the edict is headed "Addressed to the Joint Bugyō of Nagasaki." Articles 1 and 3; other articles order searches for Christians, rewards for informers and rules for selling silk. Ellipsis marks the cut.',
          'This is the topic\'s suggested skill, 2.A: identify a source\'s point of view, purpose, historical situation and audience. Model all four, out loud.',
          'Audience matters: these were not announcements to foreigners or the public. They were working orders to the men at the main port where Portuguese and Chinese ships traded.',
          'Historians later named these the "closed country" (sakoku) edicts, a word first used in 1801; Japan kept trading with the Dutch, the Chinese, Korea and the Ryukyu kingdom.'
        ],
        ask: 'Why does it matter that these orders went to officials, not to the Portuguese?',
        listenFor: 'They are instructions for enforcing control, so they show what the government meant to do.',
        ap: 'Sourcing and Situation 2.A: author, audience, purpose, situation.'
      }
    },
    {
      phase: 'africa', kind: 'story-scene', eyebrow: 'IV · Kongo and Asante Grow Stronger',
      kc: 'KC-4.3.II.A.ii', title: 'Kongo and Asante grew stronger through the new trade.',
      template: {
        visual: { url: '../assets/images/topics/4-4/kongo-crucifix-met.jpg', alt: 'Brass crucifix from the Kingdom of Kongo, with a figure of Christ on the cross, two small kneeling figures on top of its arms, one figure above Christ and two below his feet', credit: 'Crucifix, Kongo peoples, 17th to 18th century · The Metropolitan Museum of Art · Public domain (CC0)', fit: 'contain' },
        caption: 'Kongo brass crucifix, 1600s to 1700s',
        steps: [
          { label: 'Kongo, 1480s', text: 'Portuguese ships reach the mouth of the Congo River.' },
          { label: 'Kongo, 1491', text: 'The king is baptized a Christian.' },
          { label: 'Kongo, early 1500s', key: true, text: 'Afonso I trades for goods, priests, teachers and weapons that strengthen his rule.' },
          { label: 'Asante, 1701', key: true, text: 'Asante defeats Denkyira at Feyiase and becomes the main power of the region.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Trade increased Kongo and Asante influence',
          'Kongo: Portuguese allies, Christian court',
          'Crucifix made by Kongo artists',
          'Asante: Feyiase 1701, gold and guns',
          'Both also sold captives: next slide'
        ],
        land: [
          'KC-4.3.II.A.ii: maritime trade fostered the growth of Asante and Kongo, whose participation "led to an increase in their influence."',
          'Kongo: Diogo Cão reached the Congo mouth in 1482 or 1483 (sources differ); envoys came back in 1491 with missionaries and trade goods, including firearms; King Nzinga a Nkuwu was baptized that year. His son Afonso I (king from about 1509 to 1542 or 1543) made Christianity the court religion and expanded the kingdom with Portuguese allies (Heywood, Journal of African History, 2009).',
          'The crucifix is a Kongo object, made by Kongo artists in brass in the 1600s or 1700s (Met 1999.295.5). In Kongo, Christianity was the kings\' religion: they made it the religion of the court, and Kongo artists cast its objects in their own style. How religions blended is 4.5.',
          'Asante: the battle of Feyiase in 1701, dated from Dutch archives, made Asante the main power of the region. Asante controlled gold and bought firearms from Dutch and English traders, paying in part with captives. Osei Tutu led it; sources disagree on his dates, so do not give them.',
          'Both grew stronger, and both sold captives into the Atlantic trade. That is not a contradiction; it is next.'
        ],
        ask: 'What did each state gain from the trade?',
        listenFor: 'Kongo: goods, weapons, priests and teachers, allies. Asante: guns, and wealth from gold.',
        ap: 'A change in who ruled that is not a European change.'
      }
    },
    {
      phase: 'afonso', kind: 'source-quote', eyebrow: 'IV · Kongo and Asante · Source It, Your Turn',
      kc: 'Unit 4: Learning Objective G', title: 'A king writes to a king, 1526.',
      footer: 'Afonso sold war captives from outside Kongo himself. Read his letter with that in mind.',
      template: {
        quote: '[T]hese traders carry away our native-born countrymen and the children of our nobles and vassals as well as relatives of ours. ... Please instruct your trading agents to send neither traders nor trading goods here.',
        attribution: { author: 'Afonso I, king of Kongo', work: 'Letter to King João III of Portugal', year: '1526' },
        notice: 'Who is his audience, and what does he want that audience to do? Then: was he against all slavery?'
      },
      notes: {
        minutes: 3,
        keys: [
          'Students source it: same four questions',
          'Audience: the king of Portugal',
          'Purpose: stop kidnapping of his subjects',
          'Situation: traders going around the king',
          'He sold foreign captives himself',
          'About control, not ending slavery',
          'Full letter: Module 08, required today'
        ],
        land: [
          'Letter of 6 July 1526, translated by Luís Madureira in John K. Thornton, Afonso I Mvemba a Nzinga, King of Kongo: His Life and Correspondence (2023), p. 203, as reprinted in Dunn and Willoughby, Panorama (2026). Ellipsis marks the cut.',
          'Students source it themselves, the same four questions as the last model. Audience: the king of Portugal, the one ruler who could order Portuguese traders to obey. Purpose: to stop traders he did not control from kidnapping his free-born subjects. Situation: Portuguese traders were selling goods directly to Kongo nobles, who no longer needed the king, and some were enslaving Kongo subjects.',
          'Heywood (2009): most captives Kongo exported in Afonso\'s reign were foreigners taken in wars; Afonso ran a slave market in his capital; his complaint was the enslavement of Kongo subjects, which "so threatened Afonso\'s legitimacy." So the letter is evidence of a strong king defending his control of trade and of who could be enslaved, not of a king against all slavery.',
          'The full letter is the lesson\'s Primary Source module (Module 08).'
        ],
        ask: 'If you only read the quote, what would you think Afonso wanted? What do you think now?',
        listenFor: 'At first, an end to the slave trade; now, control: no kidnapping of his own people, and trade back in the king\'s hands.',
        ap: 'Sourcing and Situation 2.A: purpose changes what a source means.'
      }
    },
    {
      phase: 'labor', kind: 'ledger', eyebrow: 'V · Labor and Slavery · Work',
      kc: 'KC-4.2.II.D', title: 'One old labor system, four new ones.',
      footer: 'The colonies made money mostly from farming, and from mining. Each system found the workers.',
      template: {
        rows: [
          { name: 'Mit’a', mark: 'O', tool: 'Old: an Inca labor duty', result: 'sent Andean men to Potosí\'s mine.' },
          { name: 'Encomienda', mark: 'N', tool: 'New: a grant to a colonist', result: 'Indigenous labor and tribute.' },
          { name: 'Hacienda', mark: 'N', tool: 'New: a great estate', result: 'wages, sometimes debt.' },
          { name: 'Indentured servitude', mark: 'N', tool: 'New: a contract', result: 'four to seven years\' work for the voyage.' },
          { name: 'Chattel slavery', mark: 'N', tool: 'New: people owned as property', result: 'for life, and their children too.' }
        ],
        payoffLabel: 'Every system supplied',
        payoff: 'Workers for farms and mines'
      },
      notes: {
        minutes: 3,
        keys: [
          'Colonies depended on agriculture',
          'Old: the mit’a, now serving Spain',
          'Mit’a sent 1 in 7 men to Potosí',
          'New: encomienda, then hacienda',
          'New: indentured servants, chattel slavery'
        ],
        land: [
          'KC-4.2.II.D: colonial economies "largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems." O is old, N is new.',
          'Mit’a: the Inca rotating labor duty. Viceroy Francisco de Toledo reorganized it between 1572 and 1575 to send one-seventh of the adult men of the draft districts to Potosí each year, more than 14,000 men by 1578. An old system kept its name and changed its master.',
          'Encomienda: the crown granted a colonist the labor and tribute of a group of Indigenous people, in return for protection and Christian instruction; the New Laws of 1542 tried to limit it, and it declined.',
          'Hacienda: large estates that grew as encomienda declined; workers were paid, and some were tied by debt (historians argue about how many).',
          'Indentured servitude: in the English colonies, mostly poor Europeans in the 1600s; at least three-quarters of the colonists of the Chesapeake arrived under contract.',
          'Chattel slavery: enslaved Africans owned as property for life; Virginia\'s law of 1662 made the children of enslaved women enslaved.'
        ],
        ask: 'Which row is a continuity with a change?',
        listenFor: 'The mit’a: an old duty, a new master and a new mine.',
        ap: 'Compare by the same questions: who worked, for how long, free or not, and who took what they made.'
      }
    },
    {
      phase: 'oldslavery', kind: 'case-file', eyebrow: 'V · Labor and Slavery · Continuity',
      kc: 'KC-4.2.II.B', title: 'Slavery in Africa went on in its older forms.',
      template: {
        tag: 'Continuity', place: 'Africa', date: '1450 to 1750',
        rows: [
          { label: 'Households', text: 'Enslaved people were taken into **households**; over time they or their children could become part of the family' },
          { label: 'In Kongo', text: 'Domestic slaves in elite households were counted as part of the **extended family**' },
          { label: 'North', text: 'Captives carried across the **Sahara** to the Mediterranean world' },
          { label: 'East', text: 'Captives carried across the **Indian Ocean** to Arabia, Persia and India' }
        ],
        proves: 'Slavery did not begin with the Atlantic trade. These older forms continued through the whole period.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Slavery in Africa continued in older forms',
          'Household slavery: children could join the family',
          'Still owned, could still be sold',
          'Exports to Mediterranean and Indian Ocean went on',
          'Older than the Atlantic trade'
        ],
        land: [
          'KC-4.2.II.B: enslavement in Africa "continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions."',
          'Kongo row: Heywood (2009) on a 1550 letter of King Diogo: "domestic slaves in elite households were considered part of the extended family." Kongo also protected freeborn Kongo from sale abroad, a rule that broke down in the civil wars of the 1600s.',
          'Household incorporation was not gentle or free. Enslaved people were still owned and could be sold; the difference from plantation slavery was that their children could, over generations, be absorbed into the family and community.',
          'The trans-Saharan and Red Sea and Indian Ocean trades in captives were centuries older than the Atlantic trade and continued alongside it.'
        ],
        ask: 'What is one way household slavery differed from what the plantations would demand?',
        listenFor: 'Children could become part of the family; it was not necessarily for life across generations.'
      }
    },
    {
      phase: 'plantation', kind: 'story-scene', eyebrow: 'V · Labor and Slavery · Change',
      kc: 'KC-4.2.II.C', title: 'What the plantations changed.',
      template: {
        visual: { url: '../assets/images/topics/4-4/sugar-works-du-tertre-1667.jpg', alt: 'Engraving of a Caribbean sugar works: an animal-driven mill under a roof, a boiling house with kettles, a drying shed, palms and workers carrying cane', credit: 'Sugar works in the French Antilles, engraved by Sébastien Leclerc for Jean-Baptiste Du Tertre, Paris, 1667 · Public domain', fit: 'contain' },
        caption: 'A sugar works in the French Caribbean, 1667',
        steps: [
          { label: 'Demand', text: 'Under 300,000 captives shipped in the 1500s; over 2.5 million in 1701 to 1750.' },
          { label: 'Demographic', text: 'Africans and their descendants became most of the people in the British, French and Dutch Caribbean colonies.' },
          { label: 'Social', key: true, text: 'Passed to children, now tied to race, with almost no way out.' },
          { label: 'Cultural', text: 'African languages, beliefs and foods crossed with them.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Plantations raised demand for enslaved labor',
          'Estimates: 277,000 in 1500s; 2.5 million, 1701-1750',
          'Demographic: Africans outnumbered Europeans',
          'Social: tied to race, almost no way out',
          'Cultural: one sentence; mixing is 4.5',
          'Engraving shows the work, not the lives'
        ],
        land: [
          'KC-4.2.II.C: the growth of the plantation economy increased the demand for enslaved labor in the Americas, "leading to significant demographic, social, and cultural changes." The three steps after Demand are those three words, in order.',
          'Demand, as numbers: Slave Voyages (the Trans-Atlantic Slave Trade Database) estimates 277,505 captives embarked in 1501 to 1600, and 1,088,909 in 1701 to 1725 plus 1,471,725 in 1726 to 1750, together 2,560,634. About nine times as many in fifty years as in the whole sixteenth century, driven above all by sugar, and in Brazil also by gold mining. Say "estimates." (This was its own slide until 2026-11-05.)',
          'Demographic: on Barbados, enslaved Africans outnumbered Europeans by the late 1600s, and the pattern spread across the British, French and Dutch Caribbean (Spanish islands had smaller African shares); in Brazil, Africans and their descendants were a large part of the population.',
          'Social: lifelong slavery passed to children existed before, in Mediterranean, Islamic and some African systems. What the plantations made new was the scale, the brutal gang labor, the near-total tie to race, and how few routes led out of it. Chattel slavery was for life and inherited; Virginia\'s 1662 law made the children of enslaved women enslaved; English colonial law tied slavery to race.',
          'Cultural: name it in one sentence. How African, American and European cultures mixed is 4.5.',
          'The engraving is a French Antilles sugar works drawn for the missionary Du Tertre\'s history of the islands (1667): its printed key names the mill (1. Moulin), the furnaces and kettles (2. Fourneaux et Chaudieres) and the huts of the enslaved workers (10. Cases de Negres). It shows the work, not the workers\' lives; a European artist made it for European readers.'
        ],
        ask: 'Which of the three changes would a person born on a plantation feel first?',
        listenFor: 'The social one: born enslaved, for life.',
        ap: 'The largest change in the ledger: scale, and the kind of slavery.'
      }
    },
    {
      retelling: true, phase: 'ledger', kind: 'split-matrix', eyebrow: 'Put It Together · The Whole Topic',
      title: 'What changed, and what kept going.',
      template: {
        columns: [{ name: 'What changed' }, { name: 'What kept going' }],
        rows: [
          { label: 'Who ruled', cells: ['Rival European empires built forts on coasts and colonies in the Americas; Kongo and Asante grew stronger', 'China and Japan set the terms; Europeans mostly held coasts, not Asia'] },
          { label: 'Trade and work', cells: ['The cartaz; encomienda, hacienda, indentured servitude, chattel slavery', 'Asian merchants kept the Indian Ocean trading; the Inca mit’a reused'] },
          { label: 'Slavery', cells: ['Plantations made it far larger and tied it to race, with almost no way out', 'Older forms in Africa: households, the Sahara, the Indian Ocean'] }
        ],
        result: { label: 'So', text: 'Europeans built empires from the sea, but much of the world kept its own rules.' }
      },
      notes: {
        minutes: 5,
        keys: [
          'Show it, hide it, redraw from memory',
          'Rows = the three objectives',
          'Columns = change and continuity',
          'Ask "why" in every row',
          'Biggest change: slavery in the Americas',
          'Correct the three myths from these rows'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the six cells from memory.',
          'The three rows are the three learning objectives (E, F, G); the two columns are the reasoning move.',
          'Push for the "why" in each row: rivalry caused the empires; Asian states were strong enough to set terms; the plantations caused the change in slavery.',
          'The three myths are corrected from these rows (they had their own slide until 2026-11-05). "After 1500, Europe took over the world": the Who ruled row, where China and Japan set the terms and Europeans held coasts and two of three gates. "Slavery began with the Atlantic trade": the Slavery row, older forms in Africa. "African rulers had no power": Kongo and Asante grew stronger. Power is not innocence: African states that grew through the trade also sold captives into it, and Afonso protected his own subjects while selling foreigners.'
        ],
        ask: 'Which row has the biggest change, and which the biggest continuity?',
        listenFor: 'Biggest change: slavery in the Americas. Biggest continuity: Asian states and merchants.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 06, 08, 09, 10',
      title: 'Now you do the history.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
          { code: 'Module 08', name: 'Primary Source', note: 'Afonso I\'s full letter, 1526.', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
          { code: 'Module 09', name: 'BeInTheRoom', note: 'The Goa Fort Council.', url: '../beintheroom/unit-4/the-goa-fort-council.html' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' }
        ]
      },
      notes: {
        minutes: 31,
        keys: [
          'All four required today, in order',
          'Checkpoint 1: no coach',
          'Primary Source: source Afonso\'s full letter',
          'Goa Fort Council: forts, colony, or partner?',
          'Checkpoint 2 unfinished = homework',
          'Give feedback in the room'
        ],
        land: [
          'This one slide replaces four (Sharpen the Claim and the Checkpoint 1, BeInTheRoom and Checkpoint 2 launch slides, 2026-11-06). Modules 06, 08, 09 and 10 are all required today, from the schedule (Jeff\'s Unit 4 module review, 2026-10-23). Each button opens its module.',
          'Checkpoint 1 (Module 06), with no coach, asks for one cause of the empires (a rivalry), one change in who held power (a trading post, or Kongo or Asante) and one continuity (China or Japan, or Asian merchants trading on in the Indian Ocean). Give feedback in the room: on an alternating block nothing carries over.',
          'The Primary Source (Module 08) is Afonso I\'s full 1526 letter, and its questions are 2.A Sourcing and Situation: the same four questions the class asked of it on the slide.',
          'The Goa Fort Council (Module 09) meets after Albuquerque\'s death in 1515, with Goa, Malacca and Hormuz held. Its three choices are the topic\'s argument in a decision: a chain of forts and sea passes, a wider territorial colony, or a negotiated place inside markets that already exist. Every option depends on local allies. Debrief with the spine: whatever Goa chose, Asian rulers and merchants kept much of their own power.',
          'Checkpoint 2 (Module 10) asks for one continuity and one change in labor systems in the Americas, and one continuity and one change in slavery, with the reason for each change (Learning Objectives F and G). Socrates is told the skill is Continuity and Change, so it will push for both halves and the reason. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud (it was the Sharpen slide): "Change: In ___, ___ changed when ___. Continuity: But ___ kept going, because ___." It is a frame, not a model answer; do not write a finished claim on the board.'
        ],
        ask: 'Does your answer have a continuity, a change, a named example for each, and why the change happened?',
        listenFor: 'Checkpoint 1: religion, Elmina or Asante, and Japan\'s rules. Checkpoint 2: the mit’a and encomienda; older African slavery and plantation slavery; the plantations as the reason.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'Europeans built empires from the sea, but much of the world kept its own rules.',
      subtitle: 'Next: by the 1660s the Dutch had taken many of Portugal\'s ports in Asia. How did a country no larger than Portugal do it?',
      notes: {
        minutes: 2,
        keys: [
          'Dejima: tiny island, Japanese rules',
          'Painted ~1836, after this period: say so',
          'The sentence answers all three objectives',
          'Hand off to 4.5: who made empires pay?'
        ],
        land: [
          'The picture: Kawahara Keiga\'s folding screen of Nagasaki harbor, painted about 1836 (Museum Volkenkunde, Leiden). Dejima, the fan-shaped island in the foreground, is where the Dutch were confined from 1641; the island\'s shape was the same in this period. A whole European trading empire\'s foothold in Japan is that small island, inside a Japanese harbor, under Japanese rules: the spine in one picture. It was painted almost a century after 1750; say so.',
          'This sentence answers all three learning objectives: Europeans built empires from the sea (E), and much of the world kept its own rules (E, F, G), while some things changed fast (labor and slavery).',
          'Leave the 4.5 question open; do not answer it. By the 1660s the Dutch had taken many of Portugal\'s posts in Asia (Malacca in 1641, the Ceylon ports by 1658, Cochin in 1663), and Persian and English forces had taken Hormuz in 1622. Portugal kept Goa, Diu and Macau, among others. The Dutch Republic was smaller than Portugal in area, with about as many people, so population alone does not explain it: the answer is a joint-stock company, the VOC, and how rulers used such companies to compete. That is 4.5.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.4?',
        listenFor: 'Europeans built forts and colonies, but Asian states and merchants and African states kept their own power, older labor and slavery continued, and plantations changed slavery in the Americas.'
      }
    }
  ]
};
