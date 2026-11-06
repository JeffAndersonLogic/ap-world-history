/*
 * Topic 4.5 canonical Teaching OS source.
 * CED: Fall 2026 pp. 85-87 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Continuity and Change. Suggested skill: 3.A Claims and Evidence in Sources.
 * Four learning objectives: H (rulers' economic strategies), I (continuities
 * and changes in networks of exchange), J (how political, economic and cultural
 * factors affected society) and K (similarities and differences in how belief
 * systems affected societies).
 * Story: docs/TOPIC-4-5-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Making Empires
 * Pay" is written from the same story, and this deck retells it.
 * Spine: Rulers built economic tools to keep their empires paying, and the
 * money, goods and people those tools moved reshaped work, families and faith.
 * Wall version: Tools to make empires pay. What they moved, and what it changed.
 * Retelling slide: the continuity-and-change ledger (phase 'ledger').
 *
 * Class dates: Green Monday 2026-11-09, Silver Tuesday 2026-11-10. Required
 * modules (the schedule's, reset by Jeff 2026-10-23, after this deck was
 * built): 02 First & 10, 05 Skill Builder, 06 Checkpoint 1, 09 BeInTheRoom (the
 * Manila Silver Council), 10 Checkpoint 2. Evidence Lab and Primary Source
 * optional.
 *
 * Outline and road map, 2026-11-06 (Jeff, after the Topic 4.4 pilot): the
 * briefing opens on `outline` below and folds the run of show away; a road-map
 * slide before the First & 10 shows students the same four section headers;
 * every story slide's eyebrow names its section; minute counts are off the
 * projected slides; the Myth and Evidence slide moved into the outline's Watch
 * for list and the ledger notes; and one Work Time slide (05, 06, 09, 10)
 * replaced the four module slides. The Sharpen slide stays: it is the only
 * slide that can carry Learning Objective J without dropping a Key Concept.
 * No story slide changed.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.5',
    minutes: 90,
    title: 'Maritime Empires Maintained and Developed',
    subtitle: 'Rulers built economic tools to keep their empires paying, and what those tools moved reshaped work, families and faith.',
    essentialQuestion: 'From 1450 to 1750, how did rulers use economic tools to make their maritime empires pay, and what did the silver, goods and people those tools moved change, and leave the same, in exchange, society and belief?',
    apFocus: 'Continuity and Change, with Claims and Evidence in Sources 3.A',
    endTarget: 'Students can explain how mercantilism and chartered joint-stock companies helped rulers make empires pay and compete, and name a rivalry that grew from an economic dispute; explain one change (silver pulled toward China, the Atlantic system) and one continuity (regional markets, peasant and artisan work) in exchange; explain how the slave trade changed families in parts of Africa and how all parties made Atlantic culture; compare how religions spread, clashed and blended; and identify the claim in a source in one sentence.'
  },

  priorities: {
    must: [
      'Answer all four learning objectives, each with something new and something that kept going: rulers\' tools (H), exchange (I), society (J), belief (K).',
      'Teach China\'s demand as the pull behind the silver (KC-4.1.IV): the Single Whip made silver necessary in China.',
      'Teach the family change in Africa (KC-4.2.III.C) and peasant and artisan labor (KC-4.2.II.A): the old 4.5 pages had almost nothing on either.',
      'Land the spine with the ledger slide: rulers built tools to make empires pay, and what they moved reshaped work, families and faith.'
    ],
    should: [
      'Model 3.A on Mun and Coen, then let students find Sahagún\'s claim themselves.',
      'Correct four myths (Watch for, in the outline; the triangle on the Atlantic slide, the rest from the ledger): "Europe paid for Asian goods with better products," "the Atlantic trade was a neat triangle," "global trade replaced the old markets," and "European culture simply replaced the others in the Americas."',
      'Use both CED rivalry examples (the Indian Ocean; Morocco and Songhai) beside a European one.'
    ],
    could: [
      'Offer the Evidence Lab (Module 07, optional today) to students who finish the required modules early.',
      'Point students who want more depth to the eBook chapter, "What Made Empires Pay."'
    ]
  },


  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10; nothing is new. Required modules
  // are the schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '09 BeInTheRoom', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'How rulers made empires pay', kc: 'KC-4.1.IV.C · KC-4.3.III.ii', groups: [
        { name: 'Mercantilism', points: [
          'A strong state keeps wealth at home: sell more abroad than you buy',
          'Spain: Casa de Contratación, 1503; England: Navigation Act, 1651, against the Dutch',
          'Colonies send raw goods and buy home goods; the name came later (1776)'
        ] },
        { name: 'Joint-stock companies', points: [
          'Voyages cost a fortune: sell shares, pool the money, split profit and risk',
          'English East India Company 1600; Dutch VOC 1602: chartered monopolies',
          'The VOC could build forts, keep soldiers, make treaties, fight wars'
        ] },
        { name: 'Rivalries', points: [
          'Fighting over trade was old; the tools were new',
          'Indian Ocean: Portugal vs. Muslim powers (Diu, 1509)',
          'Sahara: Morocco vs. Songhai over gold and salt (Tondibi, 1591)',
          'Europe: English vs. Dutch (Ambon, 1623; three wars, 1652 to 1674)'
        ] }
      ], skill: 'You model finding the claim (3.A) on Mun ("sell more to strangers yearly than wee consume of theirs") and Coen, 1614 ("trade cannot be kept up without war, nor war without trade").' },
      { label: 'II', title: 'What trade moved: silver, the Atlantic, old markets', kc: 'KC-4.1.IV · KC-4.1.IV.D.i · KC-4.2.II.A', groups: [
        { name: 'Silver', points: [
          'Potosí 1545, Zacatecas 1546: Spanish America, the world\'s largest silver source',
          'Single Whip: Ming China collects most taxes in silver, so silver buys more in China',
          'Two silver roads, both to Asia: around Africa, and Acapulco to Manila',
          'Manila, 1571: Chinese silk and porcelain for American silver; Chinese merchants ran it',
          'China pulled the silver as much as Spain pushed it'
        ] },
        { name: 'The Atlantic system', points: [
          'Moved goods, wealth and people, including enslaved people',
          'Indian cotton and Maldive cowries bought captives in West Africa',
          '"Triangle" is too simple: Brazil traded directly with Africa'
        ] },
        { name: 'What kept going', points: [
          'Regional markets kept flourishing: Gujarati, Chinese, Armenian merchants',
          'Old practices: credit, partnerships, family firms; Europeans joined as carriers',
          'Peasant and artisan work: the same work, more of it, for buyers farther away',
          'Wool and linen in Europe, cotton in India, silk in China; much of it by women and girls'
        ] }
      ] },
      { label: 'III', title: 'Families and cultures changed', kc: 'KC-4.2.III.C · KC-4.1.IV.D.ii', points: [
        'About two of every three captives carried across the Atlantic were male',
        'Hardest-hit regions: more women than men; historians argue women did more farming',
        'Historians argue more women and girls were enslaved inside Africa; effects varied by region',
        'Cultural synthesis: African, Indigenous American and European, all contributing',
        'Foods, creole languages, music, religion; all contributed, but not as equals',
        'Casta is 4.7'
      ] },
      { label: 'IV', title: 'Religions spread, clashed and blended', kc: 'KC-4.1.VI', points: [
        'Spread: Christianity to the Americas, the Philippines, Kongo; Islam in Southeast Asia',
        'Clashed: Peru\'s campaigns against idolatry (c. 1610); Japan\'s ban',
        'Blended (syncretism): the Virgin of Guadalupe, Kongo crucifixes, Vodou',
        'Virgin of the Mountain, Potosí, 1700s: art historians read Mary as the silver mountain',
        'Compare: one similarity, one difference'
      ], skill: 'Students find Sahagún\'s claim (1570s) themselves: first look only; the claim and the verdict wait for the Skill Builder (Module 05). The apparition story was published in 1648, not 1531.' }
    ],
    wrap: { title: 'Put it together', columns: ['What was new', 'What kept going'], rows: [
      { label: 'Rulers\' tools', cells: ['Mercantilist laws; companies that could go to war', 'States fighting over trade routes'] },
      { label: 'Exchange', cells: ['Silver pulled toward China; the Atlantic system', 'Regional markets; more peasant and artisan work'] },
      { label: 'Society', cells: ['African families reshaped; mixed Atlantic cultures', 'Old ways of life, carried into the mix'] },
      { label: 'Faith', cells: ['Religions in new places; conflict; blending', 'Christianity, Islam and older faiths'] }
    ] },
    vocabulary: [
      { term: 'Mercantilism', def: 'The idea that a country grows strong by selling more abroad than it buys and keeping its colonies\' trade for itself.' },
      { term: 'Joint-stock company', def: 'A company that spreads risk by selling shares to many investors, who split the profits and the losses.' },
      { term: 'Chartered monopoly company', def: 'A company whose charter gave it the only right, in its own country, to trade with Asia.' },
      { term: 'VOC', def: 'The Dutch East India Company, chartered 1602. It could build forts, keep soldiers, make treaties and fight wars.' },
      { term: 'Single Whip', def: 'The Ming reform that collected most taxes in silver, so millions of Chinese families needed silver.' },
      { term: 'Atlantic trading system', def: 'Ships moving goods, wealth and people, including enslaved people, around the Atlantic.' },
      { term: 'Regional markets', def: 'The older trade across Africa and Asia, with its own merchants and ways of doing business. It kept flourishing.' },
      { term: 'Peasant and artisan labor', def: 'Farming and making things by hand at home and in workshops: old work, more of it, for buyers farther away.' },
      { term: 'Cultural synthesis', def: 'New cultures made by mixing, with all parties contributing.' },
      { term: 'Syncretism', def: 'The blending of two or more religions into new beliefs and practices.' }
    ],
    watch: [
      { myth: '"Europe bought Asian goods with better products."', fix: 'Europeans had few goods Asians wanted, so they paid in American silver.' },
      { myth: '"The Atlantic trade was a neat triangle."', fix: 'Goods came from everywhere, and Brazil traded directly with Africa (on the Atlantic slide).' },
      { myth: '"Global trade replaced the old markets."', fix: 'Regional markets kept flourishing; Europeans joined them as carriers.' },
      { myth: '"European culture simply replaced the others."', fix: 'All parties contributed, though not as equals; the mixing often happened under force.' }
    ]
  },
  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the four objectives, the owns and bridge-only split, the four myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.4. Bridge to how rulers made the empires pay.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the VOC shipyard.', students: 'Predict one way to make an empire pay.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the four sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Making Empires Pay" in class.', students: 'For every part: what was new, what kept going.', slide: 5 },
    { id: 'mercantilism', label: 'Tool 1: An Idea', range: '18-20', minutes: 2, teacher: 'Mercantilism, and the laws that came from it.', students: 'Say what a colony was for.', slide: 6 },
    { id: 'mun', label: 'Claim It: Mun', range: '20-22', minutes: 2, teacher: 'Model 3.A: the claim in one sentence.', students: 'Restate the claim.', slide: 7 },
    { id: 'shares', label: 'Tool 2: How It Works', range: '22-24', minutes: 2, teacher: 'Shares, one pool, the risk split; the charter; finance and compete.', students: 'Say why many investors would share one voyage.', slide: 8 },
    { id: 'company', label: 'Tool 2: A Company', range: '24-26', minutes: 2, teacher: 'The VOC as the case: the charter, its powers, a real share.', students: 'Say why a ruler would want one.', slide: 9 },
    { id: 'coen', label: 'Claim It: Coen', range: '26-28', minutes: 2, teacher: 'Coen\'s claim about trade and war.', students: 'Find the claim and the reason.', slide: 10 },
    { id: 'rivals', label: 'Disputes Become Wars', range: '28-31', minutes: 3, teacher: 'The Indian Ocean, the Sahara, the spice islands and the North Sea.', students: 'Name the trade each rivalry was about.', slide: 11 },
    { id: 'map', label: 'Follow the Silver', range: '31-32', minutes: 1, teacher: 'Two silver routes toward China; three battles.', students: 'Trace both routes.', slide: 12 },
    { id: 'silver', label: 'Why China', range: '32-35', minutes: 3, teacher: 'Mines, the Single Whip, Manila.', students: 'Explain the pull.', slide: 13 },
    { id: 'manila', label: 'Silk for Silver', range: '35-36', minutes: 1, teacher: 'The Chinese merchants of Manila, about 1590.', students: 'Say who ran this trade.', slide: 14 },
    { id: 'atlantic', label: 'The Atlantic System', range: '36-38', minutes: 2, teacher: 'Goods, wealth and enslaved people, from everywhere.', students: 'Name a good from outside the Atlantic.', slide: 15 },
    { id: 'regional', label: 'Old Markets Keep Going', range: '38-40', minutes: 2, teacher: 'Established practices; Europeans as carriers.', students: 'Name the change and the continuity.', slide: 16 },
    { id: 'work', label: 'More Work', range: '40-42', minutes: 2, teacher: 'Wool and linen, cotton, silk.', students: 'Old work or new?', slide: 17 },
    { id: 'families', label: 'Families in Africa', range: '42-44', minutes: 2, teacher: 'Who the trade took, and what it changed.', students: 'Explain the cause.', slide: 18 },
    { id: 'mixing', label: 'A Mixed Atlantic World', range: '44-46', minutes: 2, teacher: 'All parties contributing.', students: 'Name a contribution from each.', slide: 19 },
    { id: 'faith', label: 'Spread, Clash, Blend', range: '46-48', minutes: 2, teacher: 'Compare three things religions did.', students: 'One similarity, one difference.', slide: 20 },
    { id: 'virgin', label: 'The Virgin of the Mountain', range: '48-49', minutes: 1, teacher: 'Blending in one painting.', students: 'Find the two traditions.', slide: 21 },
    { id: 'sahagun', label: 'Claim It: Sahagún', range: '49-51', minutes: 2, teacher: 'Students find the friar\'s claim themselves.', students: 'Claim, and whether the source proves it.', slide: 22 },
    { id: 'ledger', label: 'What Was New, What Kept Going', range: '51-55', minutes: 4, teacher: 'Students redraw the ledger from memory.', students: 'Retell the whole topic.', slide: 23 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '55-57', minutes: 2, teacher: 'A change and a continuity, each with a reason.', students: 'Upgrade a weak claim.', slide: 24 },
    { id: 'worktime', label: 'Work Time', range: '57-87', minutes: 30, teacher: 'Modules 05, 06, 09 and 10, in that order: the Skill Builder on Sahagún, Checkpoint 1 with no coach, the Manila Silver Council, then Checkpoint 2. Four modules is more than 30 minutes: Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, the Manila Silver Council, Checkpoint 2.', slide: 25 },
    { id: 'close', label: 'Landing Sentence', range: '87-88', minutes: 1, teacher: 'Land the answer and hand off to 4.6.', students: 'Say the topic in one sentence.', slide: 26 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.5', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-5-maritime-empires-maintained-capture.html' },
    { label: 'BeInTheRoom: The Manila Silver Council', url: '../beintheroom/unit-4/the-manila-silver-council.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-5-maritime-empires-maintained.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-5-slide',
    title: 'Topic 4.5 Presentation',
    file: 'present-topic-4-5.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Tools to make empires pay. What they moved, and what it changed.',
      subtitle: 'Continuity and Change, with Claims and Evidence in Sources 3.A. Four objectives: rulers\' tools, exchange, society, belief. For each, something new and something that kept going.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: tools to make empires pay',
          'Four objectives: tools, exchange, society, belief',
          'Each: something new, something kept going',
          'China’s demand pulled the silver',
          'Teach African family change and artisan labor',
          'Mit’a, casta, resistance belong elsewhere',
          'Four myths to correct'
        ],
        land: [
          'CED pp. 85 to 87. Four learning objectives. H (Governance): explain how rulers employed economic strategies to consolidate and maintain power. I (Economic Systems): explain the continuities and changes in networks of exchange. J (Social Interactions and Organization): explain how political, economic and cultural factors affected society. K (Cultural Developments and Interactions): explain the similarities and differences in how various belief systems affected societies. All 1450 to 1750.',
          'KC-4.1.IV.C: mercantilist policies used by European rulers to expand and control their economies and claim territory; joint-stock companies used by rulers and merchants to finance exploration and by rulers to compete in global trade. KC-4.3.III.ii: economic disputes led to rivalries and conflict between states. KC-4.1.IV.D.i: the Atlantic trading system moved goods, wealth and labor, including enslaved persons. KC-4.1.IV: chartered monopoly companies and the global flow of silver, especially from Spanish colonies, used to buy Asian goods and satisfy Chinese demand; regional markets continued to flourish in Afro-Eurasia with established practices and new European shipping services. KC-4.2.II.A: peasant and artisan labor continued and intensified. KC-4.2.III.C: gender and family restructuring, including demographic changes in Africa from the slave trade. KC-4.1.IV.D.ii: the Atlantic system mixed African, American and European cultures and peoples, all parties contributing. KC-4.1.VI: contact expanded existing religions, and contributed to religious conflicts and syncretic belief systems.',
          'The CED\'s illustrative examples (optional): Muslim–European rivalry in the Indian Ocean; Moroccan conflict with the Songhai Empire; western Europe wool and linen; India cotton; China silk. All five are in this deck because each carries a Key Concept sentence.',
          'Owns: mercantilism and joint-stock companies, rivalries from economic disputes (including Europeans against each other), silver and the Atlantic system, regional markets, peasant and artisan labor, African family change, Atlantic cultural mixing, religions spreading, clashing and blending.',
          'Bridge only: the mit’a and the colonial labor systems (4.4; Potosí appears as silver\'s source); Tondibi as a battle (3.1; 4.5 gives its economic motive); the size of the slave trade and the plantations (4.4); Japan\'s ban on Christianity (4.4, one clause); casta (4.7, not mentioned); resistance (4.6, the hand-off).',
          'Four myths: "Europe paid for Asian goods with better products"; "the Atlantic trade was a neat triangle"; "global trade replaced the old markets"; "European culture simply replaced the others in the Americas."',
          'Every picture in this deck is a real historical object or scene, except the course\'s own map on slide 11. None is AI-generated.',
          'Slides 5 and 7 are the course\'s own graphics of the two rulers\' tools, mercantilism and the joint-stock company (added 2026-11-04). Slide 8 is the case: the VOC, with the real 1606 share receipt.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Rulers built tools to make their empires pay (mercantilist laws, chartered companies), and the silver, goods and people those tools moved changed work, families and faith, while old markets and old religions kept going.',
        avoid: 'Avoid reteaching the mit’a or encomienda as labor systems; they are 4.4. Potosí is silver\'s source here.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull Topic 4.4 back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.4', text: 'Name one European trading post and the country that built it.' },
          { label: 'Topic 4.4', text: 'Potosí was a silver mine. What labor system sent workers there?' },
          { label: 'Topic 4.4', text: 'Name one Asian state that set its own terms for European traders, and how.' }
        ],
        turn: '4.4 ended with a question: **the empires exist. How did rulers make them pay, and what did the money do to the people inside them?**'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          'Recall 4.4: forts, mit’a, Japan or Macau',
          'Potosí sets up silver’s source',
          'Asia is where the silver ended up'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: Elmina (Portugal, 1482), Goa, Malacca or Hormuz (Portugal); the mit’a, the Inca labor duty reorganized by Toledo; Ming China at Macau, or Japan (Dejima, the 1635 and 1639 orders).',
          'The bridge is 4.4\'s hand-off in the unit story map, word for word.',
          'Prompt 2 sets up Potosí as silver\'s source; prompt 3 sets up Asia as the place much of that silver ended up.'
        ],
        ask: 'An empire held together by ships costs money every year. Where could that money come from?',
        listenFor: 'Trade, taxes, silver, selling goods.',
        ap: 'Retrieval plus bridge: 4.4 built the empires; 4.5 asks how they were made to pay.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'Rulers built tools to make their empires pay. What did those tools move, and what did it change?',
      subtitle: 'The Dutch East India Company\'s shipyard in Amsterdam, painted by Ludolf Bakhuysen in 1696.',
      notes: {
        minutes: 1,
        keys: [
          'Real painting: VOC shipyard, 1696',
          'A state-chartered company building its own ships',
          'Predict how an empire could pay for itself'
        ],
        land: [
          'The picture is a real historical painting: Ludolf Bakhuysen, The Shipyard of the Dutch East India Company at Amsterdam, 1696, Mauritshuis, The Hague (inv. 8). The VOC built its own ships in its own yard on the island of Oostenburg, with its great warehouse behind; East Indiamen and yachts fire a salute.',
          'It sets the question because it is one of the rulers\' tools at work: a company chartered by the Dutch state, building the ships that carried its trade and its soldiers.',
          'The question is all four objectives in a ninth grader\'s words: the tools (H), what they moved (I), and what it changed (J and K).'
        ],
        ask: 'Predict one way a ruler could make an empire pay for itself.',
        listenFor: 'Taxes on trade, a monopoly, silver, selling goods to colonies.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Rulers built tools to make their empires pay. What did those tools move, and what did it change?',
        stops: [
          { label: 'I', text: 'How rulers made empires pay' },
          { label: 'II', text: 'What trade moved: silver, the Atlantic, old markets' },
          { label: 'III', text: 'Families and cultures changed' },
          { label: 'IV', text: 'Religions spread, clashed and blended' },
          { label: '✓', text: 'Put it together: what was new, what kept going', key: true }
        ],
        thenLabel: 'Then',
        then: 'Skill Builder · Checkpoint 1 · BeInTheRoom · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Four sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the four headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s and the ledger\'s four rows (rulers\' tools, exchange, society, faith), and every story slide\'s eyebrow names its section (I to IV).',
          'The question at the top is the topic question: in each section, students watch for what was new and what kept going.'
        ],
        ask: 'Which section do you expect the biggest change in?',
        listenFor: 'Any reasoned guess; return to it at the ledger.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read with two questions in mind.',
      subtitle: 'For every part: what was new, and what kept going the way it already had?',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-5-maritime-empires-maintained-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Sort each part: new or kept going',
          'Some are both: rivalries, artisan work',
          'Q2: Mun’s claim in own words',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "Making Empires Pay" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort each part as new or continuing, and who notice that some are both (rivalries: old fights, new tools; peasant and artisan labor: continued and intensified).',
          'Question 02 is the topic\'s 3.A practice: it asks for Mun\'s claim in the student\'s own words. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which part of the reading was both new and continuing?',
        listenFor: 'Rivalries (old fights, new tools), peasant and artisan work (the same work, more of it), or religions (old faiths, new places).'
      }
    },
    {
      /* A finished graphic shown whole (2026-11-04, Jeff: the two rulers' tools as two
         infographic slides). Source: scripts/lib/slide-graphics/topic-4-5-mercantilism.html,
         rendered by scripts/build-slide-graphics.js. The alt text says everything the picture
         says; change one and change the other. */
      phase: 'mercantilism', kind: 'frame-full', eyebrow: 'I · How Rulers Made Empires Pay · Mercantilism',
      kc: 'KC-4.1.IV.C', title: 'Mercantilism: how a state grows strong.',
      template: {
        visual: { url: '../assets/images/topics/4-5/mercantilism-tool-1.png', alt: 'Slide graphic titled Mercantilism: Rulers\' Tool 1, an idea made into law, Topic 4.5, 1450 to 1750. The belief: a kingdom grows strong by bringing in more gold and silver than flows out, so it must sell more to other countries than it buys from them. A diagram, How a colony fits the plan: one arrow carries raw goods, silver, sugar and furs, from the colony (the Americas, Africa and Asia) to the home country, where gold and silver pile up in the treasury; a second arrow carries cloth, tools and wine back, because the colony buys home goods; rival ships are crossed out, kept out. Trade stays inside the empire, so the money stays home too. Expand their economies: sell more abroad than you buy, so gold and silver flow in and stay at home. Control their economies: Spain ran trade with its American colonies through one office in Seville, the Casa de Contratación (1503); England\'s Navigation Act (1651) let goods from Asia, Africa and the Americas in on English ships only. Claim overseas territories: take colonies that send raw goods home, buy the home country\'s goods and trade with no one else. The name came later: nobody called themselves a mercantilist; later critics named these shared ideas, and Adam Smith wrote of the "mercantile system" in 1776. Think: in this way of thinking, what is a colony for?' }
      },
      notes: {
        minutes: 2,
        keys: [
          'Goal: a strong state, wealth kept at home',
          'Spain: Casa de Contratación, 1503',
          'England: Navigation Act, 1651, against the Dutch',
          'Colonies: send raw goods, buy home goods',
          'Shared ideas; the name came later (1776)'
        ],
        land: [
          'The word "mercantilism" was coined by its critics afterward (the "mercantile system" in Adam Smith, 1776); the people who held these ideas did not call themselves mercantilists. It was a set of shared ideas, not one doctrine.',
          'Spain: the Casa de Contratación, founded in Seville in 1503, licensed and registered trade with the Americas, and silver crossed in convoyed fleets.',
          'England: the Navigation Act of 1651 said goods from Asia, Africa and the Americas could enter England only in English ships; it was aimed at Dutch shippers. Later acts (1660) listed colonial goods such as sugar and tobacco that could be shipped only to England.',
          'The colony\'s job in this way of thinking: send raw goods home, buy the home country\'s goods, and trade with no one else.',
          'The slide is one picture. The three rows on the right are the CED\'s own verbs: rulers used mercantilism to expand and control their economies and to claim overseas territories. The diagram answers the Think question at the bottom.',
          'The goods on the arrows are examples, not CED requirements. Wine: Spain\'s 1595 order against new vineyards in the Americas was meant to protect Spanish wine sales, but it was widely ignored, and Peru made wine anyway. Use it to show the rule and the gap between rule and practice.'
        ],
        ask: 'In this way of thinking, what is a colony for?',
        listenFor: 'To send raw goods home and buy the home country\'s goods, so money stays inside the empire.',
        ap: 'LO H: an economic strategy rulers used to consolidate and maintain power.'
      }
    },
    {
      phase: 'mun', kind: 'source-quote', eyebrow: 'I · Making Empires Pay · Claim It, Model',
      kc: 'Unit 4: Learning Objective H', title: 'An English merchant states a rule.',
      footer: 'A claim is what the author wants you to believe. Say it in your own words.',
      template: {
        quote: 'The ordinary means therefore to encrease our wealth and treasure is by Forraign Trade, wherein wee must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value.',
        attribution: { author: 'Thomas Mun, director of the English East India Company', work: 'England\'s Treasure by Forraign Trade, printed 1664', year: 'written 1620s or 1630s' },
        notice: 'What does Mun want his reader to believe? What would a ruler do if he believed it?'
      },
      notes: {
        minutes: 2,
        keys: [
          'Model skill 3.A: find the claim',
          'Mun: East India Company director',
          'Claim: sell more to foreigners than you buy',
          'Ruler’s tools: tariffs, exports, closed colonies',
          'Published 1664, after his death'
        ],
        land: [
          'Thomas Mun (1571 to 1641), a London merchant and a director of the English East India Company. England\'s Treasure by Forraign Trade was published in 1664 by his son John, after his death; it was probably written in the 1620s or 1630s. The quotation is from chapter 2, in its original spelling ("strangers" means foreigners).',
          'Model the suggested skill, 3.A: identify and describe a claim in a source. The claim: a country grows rich by selling more to foreigners each year than it buys from them. That is the mercantilist rule in one line.',
          'Then one more step: what would a ruler do with it? Tariffs on imports, support for exports, and laws keeping colonial trade at home.',
          'Mun also defended his company\'s practice of sending silver to Asia, arguing that what it bought there was resold in Europe for more. Keep that for the deep reading.'
        ],
        ask: 'Put Mun\'s claim in your own words in one sentence.',
        listenFor: 'England gets rich by selling more to other countries than it buys from them.',
        ap: 'Claims and Evidence in Sources 3.A: find the claim before you use the source.'
      }
    },
    {
      /* A finished graphic shown whole (2026-11-04): how a joint-stock company worked, before
         the VOC case slide that follows it. Source:
         scripts/lib/slide-graphics/topic-4-5-joint-stock-company.html, rendered by
         scripts/build-slide-graphics.js. The alt text says everything the picture says. */
      phase: 'shares', kind: 'frame-full', eyebrow: 'I · How Rulers Made Empires Pay · Joint-Stock Companies',
      kc: 'KC-4.1.IV.C', title: 'The joint-stock company: many investors, one voyage.',
      template: {
        visual: { url: '../assets/images/topics/4-5/joint-stock-company-tool-2.png', alt: 'Slide graphic titled The Joint-Stock Company: Rulers\' Tool 2, a new kind of company, Topic 4.5, 1450 to 1750. Tool 1 shaped Tool 2: mercantilism said win trade and keep it at home, and rulers and merchants built a company to do both. A diagram. The problem: one voyage to Asia cost a fortune, and ships were often lost. The answer, sell shares: many investors each buy shares, their money goes into one pool, the pool pays for one voyage to Asia, and the profits and losses come back split by share. If a ship was lost, many investors shared the loss instead of one. Finance exploration: rulers and merchants raised the money for long voyages, the English East India Company (chartered 1600) and the Dutch East India Company, the VOC (1602). Charter from the ruler: the charter gave one company the only right, in its own country, to trade with Asia. Compete against rival rulers: each state sent its company to win trade from the others, and the VOC could even build forts, keep soldiers and fight wars. Continuity and change. Old: merchants had pooled money for voyages for centuries. New: a company with a government\'s monopoly, its own soldiers and the right to make war, sent by one state to compete with another.' }
      },
      notes: {
        minutes: 2,
        keys: [
          'Problem: costly voyages, ships often lost',
          'Answer: sell shares, pool the money',
          'Profits and losses split by share',
          'Charter: only right to trade with Asia',
          'CED uses: finance exploration, compete with rivals',
          'Old: pooling money. New: monopoly, soldiers, war'
        ],
        land: [
          'Start from the problem on the slide: a voyage to Asia cost a fortune and ships were often lost, so one merchant who paid for a whole voyage could be ruined by one wreck.',
          'A joint-stock company sold shares to many investors, who split the profits and the losses by how many shares each held. That spread the risk.',
          'The strip at the top is the CED\'s link: joint-stock companies were "influenced by these mercantilist principles." The charter gave one company the only right, in its own country, to trade with Asia, which is the mercantilist rule of keeping trade at home, made into a company.',
          'KC-4.1.IV.C names two uses, and the two right-hand rows carry them: rulers and merchants used these companies to finance exploration, and rulers used them to compete against one another in global trade.',
          'The footer is the First & 10\'s Continuity and Change callout: merchants had pooled money for voyages for centuries; what was new was a company with a government\'s monopoly, its own soldiers and the right to make war.',
          'The next slide is the case: the VOC, with a real share receipt from 1606.'
        ],
        ask: 'Why would many investors share one voyage instead of one rich merchant paying for all of it?',
        listenFor: 'A voyage cost a fortune and ships were often lost, so sharing spread the risk: one wreck did not ruin one person.',
        ap: 'Continuity and Change: name what was old about the company and what was new.'
      }
    },
    {
      phase: 'company', kind: 'case-file', eyebrow: 'I · How Rulers Made Empires Pay · A Company',
      kc: 'KC-4.1.IV.C', title: 'A company that could go to war.',
      template: {
        tag: 'Joint-stock company', place: 'The Dutch Republic', date: '1602',
        visual: { url: '../assets/images/topics/4-5/voc-share-enkhuizen-1606.jpg', alt: 'A handwritten Dutch document on paper, a receipt for a payment on a share of the Dutch East India Company, with signatures at the bottom', credit: 'Receipt for a VOC share, Enkhuizen, 1606 · Public domain', position: '50% 30%' },
        rows: [
          { label: 'Shares', text: '**Many investors** bought shares and split the profits and the losses' },
          { label: 'Charter', text: 'The Dutch government gave the VOC the **only right** to Dutch trade with Asia' },
          { label: 'Powers', text: 'Build **forts**, keep **soldiers**, make **treaties**, fight **wars**' },
          { label: 'Rivals', text: 'England had chartered its own **East India Company** in **1600**' }
        ],
        proves: 'A ruler could send a company to compete with another ruler\'s company.'
      },
      notes: {
        minutes: 2,
        keys: [
          'English company 1600; Dutch VOC 1602',
          'VOC: monopoly, forts, soldiers, treaties, war',
          'Joint-stock: shareholders share profit and risk',
          'Share receipt, 1606: often called the oldest',
          'Rulers used them to finance and compete'
        ],
        land: [
          'The English East India Company was chartered by Elizabeth I on 31 December 1600. The VOC (Verenigde Oostindische Compagnie) was chartered by the States General of the Dutch Republic on 20 March 1602 with a monopoly, for 21 years, on Dutch trade east of the Cape of Good Hope and west of the Strait of Magellan, and powers to build forts, keep soldiers, make treaties with Asian rulers and wage war.',
          'Joint-stock: investors bought shares and shared profit and risk. The VOC\'s capital stayed in the company rather than being paid out after each voyage, and its shares were bought and sold in Amsterdam.',
          'The picture is a share receipt of 9 September 1606, from the VOC\'s Enkhuizen chamber, often called the oldest surviving share certificate (Westfries Archief). It records a payment on a share.',
          'KC-4.1.IV.C names two uses: rulers and merchants used these companies to finance exploration, and rulers used them to compete against one another in global trade.'
        ],
        ask: 'Why would a government want a company to be able to fight a war?',
        listenFor: 'So the company could fight rivals and hold trade without the state paying for the war itself.',
        ap: 'LO H: the second tool, and the reason it was new.'
      }
    },
    {
      phase: 'coen', kind: 'source-quote', eyebrow: 'I · Making Empires Pay · Claim It, Model',
      kc: 'KC-4.3.III.ii', title: 'A company leader writes home, 1614.',
      footer: 'Find the claim, then the reason the author gives for it.',
      template: {
        quote: '[T]he weapons must be paid for out of the profits the trade earns, so that trade cannot be kept up without war, nor war without trade.',
        attribution: { author: 'Jan Pieterszoon Coen, VOC official in Asia', work: 'Letter to the company\'s directors', year: '1614' },
        notice: 'What does Coen claim about trade and war? What reason does he give?'
      },
      notes: {
        minutes: 2,
        keys: [
          'VOC leader to his directors, 1614',
          'Claim: no trade without war',
          'Reason: trade pays for the weapons',
          'Purpose: he wants money and soldiers',
          'Company as weapon; dispute becomes conflict'
        ],
        land: [
          'Jan Pieterszoon Coen (1587 to 1629) was the VOC\'s director-general of trade in Asia in 1614 and became governor-general in 1618. He wrote this from Bantam to the company\'s directors, the Heeren XVII (Gentlemen Seventeen), on 27 December 1614. The Dutch is printed in H. T. Colenbrander, ed., Jan Pieterszoon Coen: Bescheiden omtrent zijn bedrijf in Indië, vol. 1 (1919), pp. 97 to 98; the English is translated for BeHistorical from it. C. R. Boxer\'s often-quoted English (The Dutch Seaborne Empire, 1965) words it slightly differently: "we cannot carry on trade without war nor war without trade."',
          'Claim: trade and war cannot be separated. Reason: the weapons are paid for by the trade. The full sentence (in the Skill Builder) adds the other half: trade in the Indies "must be carried on and kept up under the protection and favor of your own weapons."',
          'This is the company as a weapon (KC-4.1.IV.C) and economic dispute turning into conflict (KC-4.3.III.ii) in one sentence. Coen later took Jakarta by force (1619) and renamed it Batavia; keep that for the deep reading.',
          'Sourcing note for later: Coen was arguing for more money and soldiers from his directors. That is his purpose, and it is why he states the claim so strongly.'
        ],
        ask: 'Coen is writing to the people who pay for the company. What does he want from them?',
        listenFor: 'Money and support for soldiers and ships: he wants them to accept war as part of trade.',
        ap: 'Claims and Evidence in Sources 3.A: a claim, and the reason the source gives for it.'
      }
    },
    {
      phase: 'rivals', kind: 'branch-tree', eyebrow: 'I · How Rulers Made Empires Pay · Rivals',
      kc: 'KC-4.3.III.ii', title: 'Economic disputes became wars.',
      footer: 'States had fought over trade routes for centuries. The new tools were the laws and the companies they fought with.',
      template: {
        claimLabel: 'The pattern',
        claim: 'Rival states fought over **who would control a trade**.',
        branches: [
          { label: 'Indian Ocean', note: 'Spices: Portugal against Muslim states', items: ['Diu, 1509', 'Ottoman fleets, 1500s'] },
          { label: 'The Sahara', note: 'Gold and salt: Morocco against Songhai', items: ['Tondibi, 1591'] },
          { label: 'Europe\'s rivals', note: 'Spices and shipping: Dutch against English', items: ['Ambon, 1623', 'Three wars, 1652 to 1674'] }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Fighting over trade was old; tools new',
          'Indian Ocean: Portugal vs. Muslim powers, spices',
          'Sahara: Morocco vs. Songhai, gold and salt',
          'Tondibi 1591: teach the motive (battle was 3.1)',
          'Europe: English vs. Dutch, spices and shipping',
          'Ambon 1623; three Anglo-Dutch wars'
        ],
        land: [
          'Indian Ocean (CED example: Muslim–European rivalry): in 1509 the Portuguese under Francisco de Almeida defeated a fleet of Mamluk Egypt, the sultan of Gujarat and the Zamorin of Calicut off Diu (3 February 1509). After the Ottomans conquered Egypt in 1517, Ottoman fleets fought the Portuguese in the Red Sea, the Persian Gulf and the western Indian Ocean through the 1500s, including the siege of Diu in 1538. The dispute was over the spice trade and its routes: around Africa, or through the Red Sea to the Mediterranean.',
          'Sahara (CED example: Moroccan conflict with Songhai): Sultan Ahmad al-Mansur sent an army of about 4,000 with firearms, under Judar Pasha, across the desert, which defeated Songhai at Tondibi on 13 March 1591. His aims included West Africa\'s gold (he seems to have believed Songhai controlled the gold mines, which it did not) and the Saharan salt mines (he had demanded Taghaza\'s revenues in the 1580s). 3.1 taught the battle; here, the motive.',
          'Europe: on 9 March 1623 VOC officials on Ambon executed ten English East India Company men, nine Japanese soldiers in VOC service and a Portuguese man, accusing them, on confessions taken under torture, of a plot to seize the fort; historians still argue over whether a plot existed (Alison Games, Inventing the English Massacre, 2020). England and the Dutch Republic fought three wars at sea, 1652 to 1654, 1665 to 1667 and 1672 to 1674, largely over trade and shipping; the 1651 Navigation Act was one cause of the first.',
          'Continuity and change in one slide: fighting over trade was old (Unit 2 is full of it); the tools were new.'
        ],
        ask: 'For each branch, which trade were the rivals fighting over?',
        listenFor: 'Spices; gold and salt; spices and shipping.',
        ap: 'KC-4.3.III.ii: economic disputes led to rivalries and conflict between states.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'II · What Trade Moved · Follow the Silver',
      kc: 'Unit 4: Learning Objective I', title: 'Two roads for silver, both toward Asia.',
      footer: 'Diu, Tondibi and Ambon are places where economic disputes turned violent. Manila marks where silver met silk.',
      visual: { url: '../assets/images/instructional-maps/topic-4-5.svg', alt: 'World map showing silver from Potosí to Seville and on around Africa to Asia, silver from New Spain by galleon to Manila and into China, enslaved Africans carried west across the Atlantic, and dots at Diu, Tondibi, Ambon and Manila' },
      notes: {
        minutes: 1,
        keys: [
          'Shading is schematic, not borders',
          'Two silver roads, both ending in Asia',
          'East: arrows 1 and 4, around Africa',
          'West: arrows 2 and 3, Acapulco to Manila',
          'Arrow 5: enslaved Africans (size was 4.4)'
        ],
        land: [
          'The course\'s own instructional map, rebuilt for this story. Shaded regions are schematic, not borders.',
          'Point out the pattern: silver went east across the Atlantic and west across the Pacific, and much of both streams ended in Asia. Arrows 1 and 4 are the eastern road (Seville, then around Africa); arrows 2 and 3 the western road (Acapulco to Manila to China).',
          'Arrow 5 is the Atlantic trade in enslaved Africans (4.4 taught its size).'
        ],
        ask: 'Trace both routes from Spanish America to China.',
        listenFor: 'East across the Atlantic and around Africa; west across the Pacific through Manila.'
      }
    },
    {
      phase: 'silver', kind: 'cause-chain', eyebrow: 'II · What Trade Moved · Silver',
      kc: 'KC-4.1.IV', title: 'Why the silver went to China.',
      footer: 'Spain had the mines. China\'s demand pulled the silver around the world.',
      template: {
        steps: [
          { label: 'Mines, 1545 and 1546', text: 'Potosí and Zacatecas: Spanish America becomes the world\'s largest source of silver' },
          { label: 'Single Whip, 1500s', text: 'Ming China collects most taxes in silver', key: true },
          { label: 'Demand', text: 'Silver buys more in China than in Europe' },
          { label: 'Manila, 1571', text: 'Chinese merchants trade silk and porcelain for silver' }
        ],
        links: ['while', 'so', 'so']
      },
      notes: {
        minutes: 3,
        keys: [
          'Potosí 1545, Zacatecas 1546',
          'Spanish America: most of the world’s silver',
          'Never give Potosí alone a world share',
          'Single Whip: Chinese taxes paid in silver',
          'Silver worth more in China: profit',
          'Manila, 1571: silk for silver',
          'China pulled as much as Spain pushed'
        ],
        land: [
          'Potosí (1545) and Zacatecas (1546). Spanish America produced most of the world\'s silver in this period; Flynn and Giráldez, citing Barrett and Cross, put Spanish America\'s output at about 150,000 tons between 1500 and 1800, "perhaps exceeding 80%" of world production. Japan was the other great source, perhaps 30 percent of world output in the late 1500s and early 1600s. The old map key\'s "60%" was the viceroyalty of Peru\'s share in Cross (1983), not Potosí\'s alone; do not give Potosí alone a share of world output.',
          'The Single Whip (yitiao bianfa) combined land taxes and labor service into payments in silver. It spread through the 1500s and was applied across the empire under Zhang Juzheng around 1580. Tens of millions of Chinese households now needed silver, and China mined little.',
          'Silver was worth more against gold in China than elsewhere: in the early 1500s an ounce of gold bought about six ounces of silver in China against about eleven or twelve in Europe, and in the 1590s about five and a half to seven at Canton against twelve and a half to fourteen in Spain (Von Glahn, 1996, and Flynn and Giráldez, 1995). Merchants who moved silver to China profited on the metal itself.',
          'Manila was founded in 1571; the galleon route across the Pacific had been opened in 1565. Chinese junks from Fujian brought silk and porcelain to trade for the silver. The cause runs from China\'s side as much as Spain\'s: KC-4.1.IV\'s "satisfy Chinese demand for silver."'
        ],
        ask: 'If China had not taxed in silver, what would have happened to the silver?',
        listenFor: 'Much less would have gone to Asia; its value would have been lower, and the trade would have been smaller.',
        ap: 'Change: one metal moving through Europe, Asia, Africa and the Americas.'
      }
    },
    {
      phase: 'manila', kind: 'frame-subtitle',
      kc: 'KC-4.1.IV',
      title: 'Who ran the silk-for-silver trade at Manila?',
      subtitle: 'Manila and its bay, in a Dutch view painted about 1665. The Dutch were Spain\'s rivals here.',
      notes: {
        minutes: 1,
        keys: [
          'Spain brought silver; Chinese brought goods',
          'Fujian junks took only silver',
          'Chinese far outnumbered the Spanish',
          'Dutch view, from sailors’ reports',
          'Hinge: silver (change) to markets (continuity)'
        ],
        land: [
          'The picture is a real historical object: a bird\'s-eye view of Manila by Johannes Vingboons, a Dutch mapmaker, painted about 1665 (Nationaal Archief, The Hague). Vingboons never went to Manila; he worked from the reports of Dutch sailors, whose company was Spain\'s rival in these seas. It shows the walled Spanish city, the bay and the ships. The lecture card shows a Chinese man and woman labeled "Sangley" in the Boxer Codex, painted in Manila about 1590 (Lilly Library, Indiana University); that picture is too small to project.',
          'The point: the Spanish galleon brought silver, but Chinese merchants from Fujian brought the goods (Morga, 1609: thirty or forty junks a year, which took only silver in return), and Chinese craftsmen and traders filled the Parián, Manila\'s Chinese quarter, and far outnumbered the Spanish. The regional trade was older than the city.',
          'It is the hinge from silver (the change) to regional markets (the continuity).'
        ],
        ask: 'Who needed whom at Manila?',
        listenFor: 'Both: the Spanish needed the Chinese goods and craftsmen; the Chinese merchants wanted the silver.'
      }
    },
    {
      phase: 'atlantic', kind: 'exchange-hub', eyebrow: 'II · What Trade Moved · The Atlantic System',
      kc: 'KC-4.1.IV.D.i', title: 'Goods, wealth, and people, from everywhere.',
      footer: 'Not a neat triangle: many ships sailed straight between Brazil and Angola, and the goods came from all over the world.',
      template: {
        center: { name: 'Atlantic' },
        spokes: [
          { name: 'Europe', note: 'guns, iron, alcohol', angle: -150 },
          { name: 'India and the Maldives', note: 'cotton cloth and cowrie shells', angle: -30 },
          { name: 'West and Central Africa', note: 'enslaved people, gold', angle: 150 },
          { name: 'The Americas', note: 'sugar, tobacco, silver', angle: 30 }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Moved goods, wealth and people',
          'Indian cotton bought captives in West Africa',
          'Maldive cowries used as money',
          '"Triangle" is too simple',
          'Brazil traded directly with Africa',
          'Scale was 4.4; here, the shape'
        ],
        land: [
          'KC-4.1.IV.D.i: the Atlantic trading system moved goods, wealth and labor, including enslaved persons.',
          'Goods from outside the Atlantic were central: Indian cotton cloth was among the main goods traded for captives on the West African coast, and cowrie shells from the Maldives, shipped by Dutch and English traders, served as money there.',
          'The "triangular trade" diagram is a simplification. Brazil traded directly with Africa: Rio de Janeiro sent sugar-cane brandy to Angola, Bahia sent tobacco, and later gold, to the Bight of Benin, and ships brought captives back on two-way routes.',
          'Enslaved Africans are part of this system; 4.4 taught the scale and the plantations. Here the point is the system\'s shape and its reach.'
        ],
        ask: 'Name one good in this trade that came from outside the Atlantic.',
        listenFor: 'Indian cotton cloth, or cowrie shells from the Maldives.'
      }
    },
    {
      phase: 'regional', kind: 'continuity-change', eyebrow: 'II · What Trade Moved · Markets That Kept Going',
      kc: 'KC-4.1.IV', title: 'The new trade joined the old markets. It did not replace them.',
      footer: 'The College Board\'s words: regional markets "continued to flourish."',
      template: {
        date: 'After 1550',
        before: { tag: 'Before', items: ['Regional markets across Africa and Asia', 'Their own merchants and ways of doing business'] },
        after: { tag: 'Changed', items: ['American silver arrives', 'European ships carry goods between Asian ports'] },
        continued: { tag: 'Continued', items: ['Gujarati, Chinese and Armenian merchants keep trading', 'Old practices: credit, partnerships, family firms'] }
      },
      notes: {
        minutes: 2,
        keys: [
          'Old markets kept flourishing',
          'Old practices: credit, partnerships, family firms',
          'Armenian, Gujarati, Chinese merchants kept trading',
          'New: Europeans carried goods between Asian ports',
          'Change: silver, carriers. Continuity: merchants'
        ],
        land: [
          'Second sentence of KC-4.1.IV: regional markets continued to flourish in Afro-Eurasia "by using established commercial practices and new transoceanic and regional shipping services developed by European merchants."',
          'Established practices: credit and bills of exchange, partnerships, merchant families with agents in distant ports. Armenian merchants of New Julfa (Isfahan) traded from the Indian Ocean to Europe through family firms; Gujarati and Chinese merchants kept trading too.',
          'European shipping services: Dutch ships carried Japanese silver to Taiwan to buy Chinese silk, Japanese silver and copper to India, and Indian cloth to Southeast Asia, earning money from trade between Asian ports.',
          '4.4 taught the Indian Ocean merchants as continuity (KC-4.3.II.A.iii). Here the point is how the new silver and the old markets fit together.'
        ],
        ask: 'Which column is the change, and which the continuity?',
        listenFor: 'Silver and European carriers are the change; the merchants and their practices are the continuity.'
      }
    },
    {
      phase: 'work', kind: 'frame-triptych', eyebrow: 'II · What Trade Moved · Work, Continued and Intensified',
      kc: 'KC-4.2.II.A', title: 'The same work, more of it, for buyers farther away.',
      template: {
        panels: [
          { visual: { url: '../assets/images/topics/4-5/spinner-maes-c1655.jpg', alt: 'Oil painting of an old woman in a Dutch house, seated at a spinning wheel beside a table with a red cloth, a reel hanging on the wall behind her', credit: 'Nicolaes Maes, The Spinner, about 1655 · Rijksmuseum · Public domain', position: '55% 50%' }, title: 'Western Europe: wool and linen' },
          { visual: { url: '../assets/images/topics/4-5/palampore-india-early-1700s.jpg', alt: 'A large painted cotton bed cover from India: a flowering tree rising from a small hill, with a patterned border of flowers', credit: 'Painted cotton bed cover (palampore), India, early 1700s · Metropolitan Museum of Art · Public domain', position: '50% 40%' }, title: 'India: cotton' },
          { visual: { url: '../assets/images/topics/4-5/gengzhitu-1696-drawloom.jpg', alt: 'Black-and-white print of a tall Chinese silk draw loom inside a house, with one weaver seated at the front and a second worker high on the frame working the pattern cords, a poem in Chinese above', credit: 'Weaving on a draw loom, Pictures of Tilling and Weaving, China, printed 1696 · Metropolitan Museum of Art · Public domain', position: '50% 62%' }, title: 'China: silk' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Same work, more of it, farther buyers',
          'Europe: wool and linen, putting-out at home',
          'India: cotton weavers, company advances',
          'China: Jiangnan silk households',
          'Much of it done by women and girls'
        ],
        land: [
          'KC-4.2.II.A: peasant and artisan labor "continued and intensified in many regions as the demand for food and consumer goods increased." The three regions are the CED\'s own examples.',
          'Western Europe: merchants "put out" wool and flax to rural households, who spun and wove at home and were paid by the piece (the putting-out system, or cottage industry).',
          'India: weavers on the Coromandel coast, in Gujarat and in Bengal made cotton cloth for Asian, African and European buyers; the Dutch and English companies\' purchases grew greatly in the 1600s, often through advances of money to weavers.',
          'China: peasant households in the Jiangnan region raised silkworms and wove silk; some of it reached Manila to be traded for American silver. The print is from the Kangxi emperor\'s Pictures of Tilling and Weaving (Yuzhi Gengzhi tu), designed by the court painter Jiao Bingzhen and printed in 1696.',
          'Much of the spinning, silkworm raising and weaving was done by women and girls.'
        ],
        ask: 'Is this old work or new work?',
        listenFor: 'Old work, done in more households and in larger amounts, for distant markets: continued and intensified.',
        ap: 'Continuity and change in two words.'
      }
    },
    {
      phase: 'families', kind: 'case-file', eyebrow: 'III · Families and Cultures · Families in Africa',
      kc: 'KC-4.2.III.C', title: 'Who the trade took, and what it changed.',
      template: {
        tag: 'Demographic change', place: 'Especially West Central Africa', date: '1500s to 1700s',
        rows: [
          { label: 'Taken', text: 'About **two of every three** captives carried across the Atlantic were **male**' },
          { label: 'Left', text: 'In some regions, communities with **more women than men**' },
          { label: 'Families', text: 'Historians argue women did **more of the farming**; some add that more men took **several wives**' },
          { label: 'Inside Africa', text: 'Historians argue **more women and girls** were enslaved within Africa itself' }
        ],
        proves: 'Cause, then effect: say who the trade took, then what changed at home.'
      },
      notes: {
        minutes: 2,
        keys: [
          'About two of three captives were male',
          'Hardest-hit regions: women outnumbered men',
          'Women did more of the farming',
          'More enslaved women kept inside Africa',
          'Polygyny link: say "historians argue"',
          'Effects varied by region'
        ],
        land: [
          'KC-4.2.III.C: "some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons."',
          'The sex ratio: roughly two of every three captives in the Atlantic trade were male; one summary of the shipping data averages about 179 males per 100 females, varying by region and century (Slave Voyages data; Eltis and Engerman).',
          'The family changes are historians\' arguments from that ratio and from local evidence (Patrick Manning, Slavery and African Life, 1990; John Thornton): in regions hit hardest, such as parts of West Central Africa, women outnumbered men; women carried more of the farming; and African buyers kept more enslaved women, whom the Atlantic market wanted less. Manning argues the shortage of men strengthened polygyny; James Fenske ("African Polygamy: Past and Present," 2015) finds the link rests mostly on the broad contrast between West Africa and the rest of the continent, so present it as an argument. Say "historians argue."',
          'Demographic change also meant population loss or stagnation in some regions. The effects varied: not every region or society changed the same way.'
        ],
        ask: 'Why would taking more men than women change how a family worked?',
        listenFor: 'With fewer men, women did more of the farming and more women were enslaved inside Africa; some historians argue more men had several wives.',
        ap: 'A cause and an effect: who the trade took explains the change in families.'
      }
    },
    {
      phase: 'mixing', kind: 'ledger', eyebrow: 'III · Families and Cultures · A Mixed Atlantic World',
      kc: 'KC-4.1.IV.D.ii', title: 'Everyone contributed to the new culture.',
      footer: 'No one group designed it, and much of it happened under force: "with all parties contributing."',
      template: {
        rows: [
          { name: 'Africans', mark: 'A', tool: 'Contributed', result: 'farming skills, music, beliefs, and languages.' },
          { name: 'Indigenous Americans', mark: 'I', tool: 'Contributed', result: 'foods, farming and local knowledge.' },
          { name: 'Europeans', mark: 'E', tool: 'Contributed', result: 'languages, Christianity, and goods.' }
        ],
        payoffLabel: 'Together they made',
        payoff: 'New Atlantic cultures: foods, creole languages, music, faith'
      },
      notes: {
        minutes: 2,
        keys: [
          'All parties contributed',
          'Foods mixed African, American, European',
          'Rice knowledge from West Africa (debated)',
          'Creole languages shaped by African languages',
          'Culture, not ranking: casta is 4.7'
        ],
        land: [
          'KC-4.1.IV.D.ii: the Atlantic system involved the movement of labor, including enslaved persons, and "the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis."',
          'Foods: dishes that combined African, American and European ingredients and ways of cooking. Enslaved West Africans brought rice-farming knowledge; historians argue over how much it shaped rice growing on the Carolina coast (4.3 met rice and okra crossing with enslaved Africans).',
          'Language: creole languages, such as Haitian Creole and Papiamentu, took most of their words from a European language while much of their grammar and sound shows the influence of African languages. Linguists still argue over how they formed; keep it to "shaped by."',
          'Do not teach casta here; it is 4.7. This slide is about culture, not ranking.'
        ],
        ask: 'Name one thing each group contributed.',
        listenFor: 'Africans: music, beliefs, farming skill; Indigenous Americans: foods and knowledge; Europeans: language and Christianity.'
      }
    },
    {
      phase: 'faith', kind: 'branch-tree', eyebrow: 'IV · Religions · Compare',
      kc: 'Unit 4: Learning Objective K', title: 'Three things religions did.',
      footer: 'To compare, ask the same questions of two branches: what do they share, and where do they part ways?',
      template: {
        claimLabel: 'Compare',
        claim: 'As contact grew, religions **spread**, **clashed**, and **blended**.',
        branches: [
          { label: 'Spread', note: 'Old religions, new places', items: ['Christianity', 'Islam'] },
          { label: 'Clashed', note: 'Contact caused conflict', items: ['Peru, c. 1610'] },
          { label: 'Blended', note: 'Syncretic beliefs', items: ['Guadalupe', 'Vodou'] }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Three things: spread, clashed, blended',
          'Spread: Christianity to Americas, Philippines, Kongo',
          'Spread: Islam in Southeast Asia',
          'Clashed: Peru’s idolatry campaigns; Japan’s ban',
          'Blended: Guadalupe, Kongo crucifixes, Vodou',
          'Compare: one similarity, one difference',
          'Santería is too late for this period'
        ],
        land: [
          'KC-4.1.VI: increased contact "expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices." LO K asks for similarities and differences: the three branches are the comparison.',
          'Spread: Christianity in the Americas, in the Philippines from 1565, and in Kongo; Matteo Ricci and other Jesuits lived in Beijing from 1601. Islam kept spreading in Southeast Asia along older trade routes.',
          'Clashed: in the archdiocese of Lima, from about 1609 to 1610, priests led by Francisco de Ávila ran "extirpation of idolatry" campaigns, destroying Andean sacred objects and punishing religious specialists. Japan\'s rulers banned Christianity (4.4).',
          'Blended: Guadalupe (next slides), Kongo crucifixes made by Kongo artists in Kongo style, and Vodou, formed among enslaved Africans in the French colony of Saint-Domingue (Haiti) in the 1700s from West and Central African religions and Catholic saints. Santería took its familiar form in Cuba in the 1800s, after this period; do not use it as a 1450 to 1750 example.'
        ],
        ask: 'Give one similarity and one difference between two branches.',
        listenFor: 'Similar: each came from contact. Different: in Peru the old religion was attacked; at Tepeyac it blended.'
      }
    },
    {
      phase: 'virgin', kind: 'frame-subtitle',
      kc: 'KC-4.1.VI',
      title: 'Two traditions in one painting.',
      subtitle: 'The Virgin of the Mountain, painted in Potosí in the 1700s: Mary is the silver mountain itself.',
      notes: {
        minutes: 1,
        keys: [
          'Real painting, Potosí, 1700s',
          'Mary is the silver mountain',
          'Christian: Mary, Trinity, pope, king',
          'Andean: sacred mountain, earth as mother',
          'Say "art historians read it as"',
          'Ties back to the silver'
        ],
        land: [
          'The picture is a real historical painting: La Virgen del Cerro, by an unknown painter in Potosí, 1700s, in the Casa Nacional de Moneda, Potosí (photograph by Dan Lundberg, 2017, CC BY-SA 2.0; other versions survive, including one in La Paz). Mary\'s face and hands appear on the Cerro Rico, the silver mountain, whose slopes carry tiny figures of people and animals; the Father and the Son crown her, with the Holy Spirit above, and a pope, a cardinal and a bishop kneel at the left and a king at the right, around a globe.',
          'It blends Christian painting with the Andean idea of sacred mountains and of the earth as a mother (Pachamama). Art historians read it that way; some caution that the painter\'s own intention is not recorded. Say "art historians read it as."',
          'It also ties the day together: the silver mountain of Potosí, the source of the silver that went to China, shown as a Christian and Andean holy figure.'
        ],
        ask: 'Find one Christian thing and one Andean thing in the painting.',
        listenFor: 'Christian: Mary, the Trinity, a pope. Andean: the mountain as a sacred mother.'
      }
    },
    {
      phase: 'sahagun', kind: 'source-quote', eyebrow: 'IV · Religions · Claim It, Your Turn',
      kc: 'KC-4.1.VI', title: 'A friar is suspicious, in the 1570s.',
      footer: 'Find his claim. Does his own evidence prove it?',
      template: {
        quote: '[T]hey also call her Tonantzin, taking the occasion from the preachers, who called Our Lady ... Tonantzin. ... It seems to be a satanic invention to cover up idolatry ... and they now come ... from very far away.',
        attribution: { author: 'Bernardino de Sahagún, Franciscan friar in Mexico', work: 'General History of the Things of New Spain', year: '1570s' },
        notice: '"Her" is the Virgin of Guadalupe at Tepeyac. What is his claim? What is his evidence?'
      },
      notes: {
        minutes: 2,
        keys: [
          'First look only: do not settle it',
          'Friar, 1570s, worried about hidden idolatry',
          'His word: Tonantzin, "our mother"',
          'Preachers themselves called Mary Tonantzin',
          'Claim and verdict wait for Module 05',
          'Apparition story published 1648, not 1531'
        ],
        land: [
          'Bernardino de Sahagún (about 1499 to 1590), a Franciscan friar who worked with Nahua scholars for decades on a history of Nahua life and belief. The passage is from the appendix to Book 11 of his General History of the Things of New Spain, finished in the 1570s. The English is translated for BeHistorical from the Spanish text in Carlos María de Bustamante\'s edition (Mexico, 1830), vol. 3, pp. 321 to 322. Ellipsis marks the cut. Note what students usually miss: Sahagún says the Spanish preachers themselves had called Mary Tonantzin.',
          'For you, not to say yet: the Skill Builder (Module 05, required) asks students to write this claim and judge it, so this slide is a first look and the class does not settle it here. Sahagún claims that the Nahua who come to Tepeyac may still be honoring their old goddess under a Christian name. His evidence is the name they use, Tonantzin, and that people come from far away, as they did before.',
          'Push one step further: a claim is not the same as proof. Sahagún was a missionary worried about hidden idolatry; Nahua Christians may simply have used an old word for "our mother" for Mary. That is why this is a source about syncretism, and about what a Spanish friar feared.',
          'The apparition story of Juan Diego (dated 1531) was first published in 1648 and 1649; the shrine was already a center of devotion by the 1550s. Do not teach the apparition as an event of 1531.'
        ],
        ask: 'What word does Sahagún keep coming back to? Hold your answer for Module 05.',
        listenFor: 'First reactions only (the name Tonantzin). Do not give the claim or the verdict here; students write both in Module 05, and the debrief comes after.',
        ap: 'Claims and Evidence in Sources 3.A: identify the claim, and describe the evidence the source gives for it.'
      }
    },
    {
      retelling: true, phase: 'ledger', kind: 'split-matrix', eyebrow: 'Put It Together · The Whole Topic',
      title: 'New, or kept going?',
      template: {
        columns: [{ name: 'What was new' }, { name: 'What kept going' }],
        rows: [
          { label: 'Rulers\' tools', cells: ['Mercantilist laws; companies that could go to war', 'States fighting over trade routes'] },
          { label: 'Exchange', cells: ['Silver pulled toward China; the Atlantic system', 'Regional markets; more peasant and artisan work'] },
          { label: 'Society', cells: ['African families reshaped; mixed Atlantic cultures', 'Old ways of life, carried into the mix'] },
          { label: 'Faith', cells: ['Religions in new places; conflict; blending', 'Christianity, Islam and older faiths'] }
        ],
        result: { label: 'So', text: 'Rulers built tools to make empires pay; what they moved reshaped work, families and faith.' }
      },
      notes: {
        minutes: 4,
        keys: [
          'Show it, hide it, redraw from memory',
          'Rows = the four objectives',
          'Columns = new and kept going',
          'Ask "why" in every row',
          'China’s demand pulled the silver',
          'Correct the myths from these rows',
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the eight cells from memory.',
          'The four rows are the four learning objectives (H, I, J, K); the two columns are the reasoning move.',
          'Push for the "why" in each row: rulers wanted wealth and an edge on rivals; China\'s demand pulled the silver; the slave trade took more men; contact carried religions to new people.',
          'The myths are corrected from these rows (they had their own slide until 2026-11-06; they are also in the outline\'s Watch for list). Rulers\' tools and Exchange: Europe did not buy Asian goods with better products; it paid in American silver, and regional markets kept flourishing with Europeans as carriers. Society: European culture did not simply replace the others; all parties contributed, but not as equals, and the mixing often happened under force and slavery. The fourth myth, the neat triangle, is corrected on the Atlantic slide.'
        ],
        ask: 'Which row has the biggest change, and which the biggest continuity?',
        listenFor: 'Biggest change: silver around the world, or families in Africa. Biggest continuity: regional markets, or the old work.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Put It Together · Sharpen the Claim',
      kc: 'Unit 4: Learning Objective J',
      footer: 'A change and a continuity, each with a named example and the reason.',
      template: {
        weak: 'The new trade changed society.',
        strong: '**Change:** ______ changed from ______ to ______ because ______. **Continuity:** But ______ kept going, **because** ______.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Weak: no continuity, evidence or reason',
          'Need a change and a continuity, each named',
          'Add the reason',
          'Pairs fill the frame aloud',
          'No finished claim on the board'
        ],
        land: [
          'The weak claim names no continuity, no evidence and no reason. It is Learning Objective J in its laziest form: how did political, economic and cultural factors affect society?',
          'The frame asks for a change and a continuity, each with a named example, and the reason: the shape both checkpoints ask for.',
          'This is a sentence frame, not a model answer: every case in this topic is asked for somewhere (First & 10 Q1 and Q3, Checkpoints 1 and 2), so the content is the students\' own. Have pairs fill it in aloud with a case they choose. Do not write a finished claim on the board.'
        ],
        ask: 'Why is "changed" not enough?',
        listenFor: 'It does not say what changed, what continued, or why.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 09, 10',
      title: 'Now you do the history.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Find Sahagún\'s claim, in one sentence.', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' },
          { code: 'Module 09', name: 'BeInTheRoom', note: 'The Manila Silver Council, 1594.', url: '../beintheroom/unit-4/the-manila-silver-council.html' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' }
        ]
      },
      notes: {
        minutes: 30,
        keys: [
          'All four required today, in order',
          'Skill Builder: Sahagún\'s claim in one sentence',
          'Checkpoint 1: no coach',
          'Manila Council: keep the silver trade paying',
          'Checkpoint 2 unfinished = homework',
          'Evidence Lab optional for early finishers'
        ],
        land: [
          'This one slide replaces four (the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-06). Modules 05, 06, 09 and 10 are the required modules on the schedule (Jeff\'s Unit 4 module review, 2026-10-23); this deck was built before that review and had launched 07 instead of 09, with 06 optional. Each button opens its module.',
          'The Skill Builder (Module 05) practices the CED\'s suggested skill, 3.A: identify and describe a claim in a source. It models Coen\'s 1614 letter, then gives Sahagún\'s passage on Tepeyac and asks for the claim, the evidence he gives, and whether that evidence proves it. Push for the claim in their own words, in one sentence, before they quote. Debrief only after: a name and a crowd do not prove what people believed; the source shows what he suspected.',
          'Checkpoint 1 (Module 06), with no coach, asks for one way a ruler used mercantilism or a chartered company, one change in exchange (silver or the Atlantic system) and one continuity (regional markets, or peasant and artisan work). Give feedback in the room: on an alternating block nothing carries over.',
          'The Manila Silver Council (Module 09) is set in Manila in 1594, after the king\'s 1593 limits on the galleon trade. Its question: how should the council keep the silver-for-silk trade paying for the colony, when the king wants to limit it, Chinese merchants run it, and rivals want to take it? It is section I\'s tools and section II\'s silver in one decision.',
          'Checkpoint 2 (Module 10) asks for one way the slave trade changed families in parts of Africa and why, one example of Atlantic cultural mixing and who contributed, and a comparison of two things religions did as contact grew (Learning Objectives J and K). Socrates is told the skills are Causation and Comparison, so it will push for the cause of the family change and for a similarity and a difference. The revised answer in the box is what goes to Canvas.',
          'Four modules will not all fit in class: Checkpoint 2 finishes at home. The Evidence Lab (Module 07: one claim from two sources, five real objects and a card of modern estimates) is optional today, for students who finish early.'
        ],
        ask: 'Does your answer name a claim, a change and a continuity, each with a named example?',
        listenFor: 'Skill Builder: Sahagún suspects hidden idolatry. Checkpoint 1: the VOC, silver pulled to China, Gujarati or Chinese merchants trading on. Checkpoint 2: more men taken; music, food or language; spread and blending compared.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'Rulers built tools to make their empires pay, and what those tools moved reshaped work, families and faith.',
      subtitle: 'Next: states got richer and reached further. Not everyone accepted it.',
      notes: {
        minutes: 1,
        keys: [
          'VOC castle at Batavia, about 1662',
          'A company planted in an Asian port',
          'The sentence answers all four objectives',
          'Hand off to 4.6: not everyone accepted it'
        ],
        land: [
          'The picture: Andries Beeckman, The Castle of Batavia, about 1662 (Rijksmuseum SK-A-19). Beeckman worked in Batavia, the VOC\'s Asian headquarters, which Coen took by force in 1619. Palms and the company\'s castle in Java fill the slide (the painting\'s market crowd is along the bottom edge, mostly under the sentence): a company built to make an empire pay, planted in an Asian port.',
          'This sentence answers all four learning objectives: the tools (H), what they moved (I), and what it changed in work (I), families and society (J), and faith (K).',
          'Hand off to 4.6 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.5?',
        listenFor: 'Mercantilist laws and chartered companies made empires pay and compete; silver and the Atlantic trade changed exchange while old markets kept going; families, cultures and religions changed.'
      }
    }
  ]
};
