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
 * modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2.
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
      'Correct four myths: "Europe paid for Asian goods with better products," "the Atlantic trade was a neat triangle" (on the Atlantic slide), "global trade replaced the old markets," and "European culture simply replaced the others in the Americas."',
      'Use both CED rivalry examples (the Indian Ocean; Morocco and Songhai) beside a European one.'
    ],
    could: [
      'Use the BeInTheRoom Manila Silver Council as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "What Made Empires Pay."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the four objectives, owns and bridge-only, the big ideas.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.4. Bridge to how rulers made the empires pay.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the VOC shipyard.', students: 'Predict one way to make an empire pay.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Making Empires Pay" in class.', students: 'For every part: what was new, what kept going.', slide: 4 },
    { id: 'mercantilism', label: 'Tool 1: An Idea', range: '17-19', minutes: 2, teacher: 'Mercantilism, and the laws that came from it.', students: 'Say what a colony was for.', slide: 5 },
    { id: 'shares', label: 'Tool 2: How It Works', range: '19-22', minutes: 3, teacher: 'Shares, one pool, the risk split; the VOC charter; finance and compete.', students: 'Say why many investors would share one voyage.', slide: 6 },
    { id: 'rivals', label: 'Claim It: Trade and War', range: '22-26', minutes: 4, teacher: 'Model 3.A on Coen; his evidence is the rivalries.', students: 'Find the claim, the reason, the trade.', slide: 7 },
    { id: 'silver', label: 'Why China', range: '26-29', minutes: 3, teacher: 'Mines, the Single Whip, Manila: silk for silver.', students: 'Explain the pull.', slide: 8 },
    { id: 'atlantic', label: 'The Atlantic System', range: '29-31', minutes: 2, teacher: 'Goods, wealth and enslaved people, from everywhere.', students: 'Name a good from outside the Atlantic.', slide: 9 },
    { id: 'regional', label: 'Old Markets Keep Going', range: '31-33', minutes: 2, teacher: 'Established practices; Europeans as carriers.', students: 'Name the change and the continuity.', slide: 10 },
    { id: 'work', label: 'More Work', range: '33-35', minutes: 2, teacher: 'Wool and linen, cotton, silk.', students: 'Old work or new?', slide: 11 },
    { id: 'families', label: 'Families in Africa', range: '35-37', minutes: 2, teacher: 'Who the trade took, and what it changed.', students: 'Explain the cause.', slide: 12 },
    { id: 'mixing', label: 'A Mixed Atlantic World', range: '37-39', minutes: 2, teacher: 'All parties contributing.', students: 'Name a contribution from each.', slide: 13 },
    { id: 'faith', label: 'Spread, Clash, Blend', range: '39-41', minutes: 2, teacher: 'Compare three things religions did.', students: 'One similarity, one difference.', slide: 14 },
    { id: 'blend', label: 'The Virgin of the Mountain', range: '41-44', minutes: 3, teacher: 'Two traditions in one painting; Sahagún waits for Module 05.', students: 'Find the Christian and the Andean.', slide: 15 },
    { id: 'ledger', label: 'What Was New, What Kept Going', range: '44-48', minutes: 4, teacher: 'Students redraw the ledger from memory.', students: 'Retell the whole topic.', slide: 16 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '48-50', minutes: 2, teacher: 'A change and a continuity, each with a reason.', students: 'Upgrade a weak claim.', slide: 17 },
    { id: 'skill', label: 'Skill Builder', range: '50-58', minutes: 8, teacher: 'Module 05: Claims and Evidence in Sources.', students: 'Find Sahagún\'s claim.', slide: 18 },
    { id: 'evidence', label: 'Evidence Lab', range: '58-66', minutes: 8, teacher: 'Module 07: something new and something that kept going, from two sources.', students: 'Observe, then infer, then name a limit.', slide: 19 },
    { id: 'cp2', label: 'Checkpoint 2', range: '66-78', minutes: 12, teacher: 'Module 10: society and belief. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 20 },
    { id: 'close', label: 'Landing Sentence', range: '78-79', minutes: 1, teacher: 'Land the answer and hand off to 4.6.', students: 'Say the topic in one sentence.', slide: 21 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
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
          'Slides 5 and 6 are the course\'s own graphics of the two rulers\' tools, mercantilism and the joint-stock company (Jeff, 2026-11-04). They stay whole on the big-rocks deck.',
          'Big rocks (Jeff, 2026-11-05): this deck was cut from 29 slides to 21. 4.5 carries eight Key Concepts and four learning objectives, each needing its own banded slide, so it stays longer than 4.6 or 4.7. Removed: Mun\'s quotation (now in the mercantilism notes), the VOC case (into the shares notes and the rivalry evidence), Coen\'s quotation as its own slide (now the claim on the rivalry slide, which models 3.A), the map (Module 01), the Manila slide (into the silver slide), the Sahagún slide (into the Virgin of the Mountain slide\'s notes and the Skill Builder), the myths slide (now AVOID notes on slides 8, 10 and 15) and the optional Checkpoint 1 slide.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Rulers built tools to make their empires pay (mercantilist laws, chartered companies), and the silver, goods and people those tools moved changed work, families and faith, while old markets and old religions kept going.',
        avoid: 'Avoid reteaching the mit’a or encomienda as labor systems; they are 4.4. Potosí is silver\'s source here.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
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
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with two questions in mind.',
      subtitle: 'For every part: what was new, and what kept going the way it already had?',
      big: '12',
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
      phase: 'mercantilism', kind: 'frame-full', eyebrow: 'Rulers\' Tool 1 · An Idea',
      kc: 'Unit 4: Learning Objective H', title: 'Mercantilism: how a state grows strong.',
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
          'The goods on the arrows are examples, not CED requirements. Wine: Spain\'s 1595 order against new vineyards in the Americas was meant to protect Spanish wine sales, but it was widely ignored, and Peru made wine anyway. Use it to show the rule and the gap between rule and practice.',
          'Big-rocks revision, 2026-11-05: Thomas Mun\'s quotation no longer has its own slide. Read it aloud here if you want the mercantilist rule in a merchant\'s own words: "The ordinary means therefore to encrease our wealth and treasure is by Forraign Trade, wherein wee must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value." Mun (1571 to 1641) was a director of the English East India Company; England\'s Treasure by Forraign Trade was published by his son in 1664, probably written in the 1620s or 1630s. A ruler who believed it would tax imports, support exports and keep colonial trade at home. First & 10 question 02 asks for his claim.'
        ],
        ask: 'In this way of thinking, what is a colony for?',
        listenFor: 'To send raw goods home and buy the home country\'s goods, so money stays inside the empire.',
        ap: 'LO H: an economic strategy rulers used to consolidate and maintain power.'
      }
    },
    {
      /* A finished graphic shown whole (2026-11-04): how a joint-stock company worked, before
         the VOC case slide that follows it. Source:
         scripts/lib/slide-graphics/topic-4-5-joint-stock-company.html, rendered by
         scripts/build-slide-graphics.js. The alt text says everything the picture says. */
      phase: 'shares', kind: 'frame-full', eyebrow: 'Rulers\' Tool 2 · How It Works',
      kc: 'KC-4.1.IV.C', title: 'The joint-stock company: many investors, one voyage.',
      template: {
        visual: { url: '../assets/images/topics/4-5/joint-stock-company-tool-2.png', alt: 'Slide graphic titled The Joint-Stock Company: Rulers\' Tool 2, a new kind of company, Topic 4.5, 1450 to 1750. Tool 1 shaped Tool 2: mercantilism said win trade and keep it at home, and rulers and merchants built a company to do both. A diagram. The problem: one voyage to Asia cost a fortune, and ships were often lost. The answer, sell shares: many investors each buy shares, their money goes into one pool, the pool pays for one voyage to Asia, and the profits and losses come back split by share. If a ship was lost, many investors shared the loss instead of one. Finance exploration: rulers and merchants raised the money for long voyages, the English East India Company (chartered 1600) and the Dutch East India Company, the VOC (1602). Charter from the ruler: the charter gave one company the only right, in its own country, to trade with Asia. Compete against rival rulers: each state sent its company to win trade from the others, and the VOC could even build forts, keep soldiers and fight wars. Continuity and change. Old: merchants had pooled money for voyages for centuries. New: a company with a government\'s monopoly, its own soldiers and the right to make war, sent by one state to compete with another.' }
      },
      notes: {
        minutes: 3,
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
          'The VOC is the case, in the note below; its war powers are evidence on the next slide.',
          'Big-rocks revision, 2026-11-05: the VOC case slide is folded in here and into slide 7. The English East India Company was chartered by Elizabeth I on 31 December 1600. The VOC was chartered by the States General on 20 March 1602 with a 21-year monopoly on Dutch trade east of the Cape of Good Hope and powers to build forts, keep soldiers, make treaties and wage war. Its capital stayed in the company rather than being paid out after each voyage, and its shares were traded in Amsterdam. A share receipt of 9 September 1606, from the Enkhuizen chamber, is often called the oldest surviving share certificate (Westfries Archief).'
        ],
        ask: 'Why would many investors share one voyage instead of one rich merchant paying for all of it?',
        listenFor: 'A voyage cost a fortune and ships were often lost, so sharing spread the risk: one wreck did not ruin one person.',
        ap: 'Continuity and Change: name what was old about the company and what was new.'
      }
    },
    {
      phase: 'rivals', kind: 'claim-evidence', eyebrow: 'Claims and Evidence in Sources 3.A · Rivals',
      kc: 'KC-4.3.III.ii', title: 'Economic disputes became wars.',
      footer: 'Fighting over trade was old. The new tools were the laws and the companies they fought with.',
      template: {
        claimLabel: 'Jan Pieterszoon Coen, VOC official in Asia, 1614',
        claim: '"[T]he weapons must be paid for out of the profits the trade earns, so that trade cannot be kept up without war, nor war without trade."',
        evidence: [
          { text: 'Portugal fights Muslim fleets for the spice trade: Diu, 1509.', source: 'Indian Ocean' },
          { text: 'Morocco crosses the Sahara for gold and salt: Tondibi, 1591.', source: 'The Sahara' },
          { text: 'The VOC may build forts and wage war; England and the Dutch fight three wars, 1652 to 1674.', source: 'Europe\'s rivals' }
        ],
        reasoning: 'Coen\'s claim is about his own company, and the evidence shows a wider pattern: rival states fought over **who would control a trade**.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Model 3.A: find the claim, then the reason',
          'Claim: no trade without war',
          'Reason: the trade pays for the weapons',
          'Purpose: Coen wants money and soldiers',
          'Indian Ocean, Sahara, Europe: who controls a trade',
          'Tondibi 1591: teach the motive (battle was 3.1)',
          'Fighting over trade was old; tools new'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces four (Mun\'s quotation, the VOC case, Coen\'s letter and the rivalry tree). It models the suggested skill, 3.A, on Coen, and its evidence is the rivalry Key Concept. Mun\'s claim is in the mercantilism slide\'s notes; the VOC\'s charter is in the shares slide\'s notes.',
          'Coen (1587 to 1629) was the VOC\'s director-general of trade in Asia and became governor-general in 1618. He wrote from Bantam to the company\'s directors, the Heeren XVII, on 27 December 1614 (H. T. Colenbrander, ed., Jan Pieterszoon Coen: Bescheiden omtrent zijn bedrijf in Indië, vol. 1, 1919, pp. 97 to 98; translated for BeHistorical). C. R. Boxer\'s often-quoted English words it "we cannot carry on trade without war nor war without trade." Claim: trade and war cannot be separated. Reason: the trade pays for the weapons. Purpose: he was arguing for more money and soldiers from the people who paid for the company, which is why he states it so strongly.',
          'Indian Ocean (CED example: Muslim-European rivalry): on 3 February 1509 the Portuguese under Francisco de Almeida defeated a fleet of Mamluk Egypt, the sultan of Gujarat and the Zamorin of Calicut off Diu. After 1517 Ottoman fleets fought the Portuguese in the Red Sea, the Gulf and the western Indian Ocean, including the siege of Diu in 1538. The dispute was the spice trade and its routes.',
          'Sahara (CED example: Moroccan conflict with Songhai): Ahmad al-Mansur sent about 4,000 soldiers with firearms under Judar Pasha, who defeated Songhai at Tondibi on 13 March 1591. His aims included West Africa\'s gold (he seems to have believed Songhai controlled the mines, which it did not) and the Saharan salt mines. 3.1 taught the battle; here, the motive.',
          'Europe: the VOC\'s 1602 charter let it build forts, keep soldiers, make treaties and wage war. On 9 March 1623 VOC officials on Ambon executed ten English East India Company men and others on confessions taken under torture (Alison Games, 2020). England and the Dutch Republic fought three wars at sea, 1652 to 1654, 1665 to 1667 and 1672 to 1674, largely over trade and shipping; the 1651 Navigation Act was one cause of the first.'
        ],
        ask: 'What does Coen claim, and what reason does he give? Then: for each piece of evidence, which trade were the rivals fighting over?',
        listenFor: 'No trade without war, because the trade pays for the weapons. Spices; gold and salt; spices and shipping.',
        ap: 'Claims and Evidence in Sources 3.A: a claim and the reason the source gives for it. KC-4.3.III.ii: economic disputes led to rivalries and conflict between states.'
      }
    },
    {
      phase: 'silver', kind: 'cause-chain', eyebrow: 'Exchange · Silver',
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
          'Manila was founded in 1571; the galleon route across the Pacific had been opened in 1565. Chinese junks from Fujian brought silk and porcelain to trade for the silver. The cause runs from China\'s side as much as Spain\'s: KC-4.1.IV\'s "satisfy Chinese demand for silver."',
          'Big-rocks revision, 2026-11-05: the Manila slide is folded in here, and its picture with it. The Spanish galleon brought silver, but Chinese merchants from Fujian brought the goods (Morga, 1609: thirty or forty junks a year, which took only silver in return), and Chinese craftsmen and traders in the Parián, Manila\'s Chinese quarter, far outnumbered the Spanish. The regional trade was older than the city: the hinge to slide 10. The picture is a labeled reconstruction of a Manila waterfront; it illustrates the exchange, not an observed bargain, so do not count its coins or read its cargo marks.'
        ],
        ask: 'If China had not taxed in silver, what would have happened to the silver?',
        listenFor: 'Much less would have gone to Asia; its value would have been lower, and the trade would have been smaller.',
        ap: 'Change: one metal moving through Europe, Asia, Africa and the Americas.',
        avoid: 'Myth: "Europe bought Asian goods with better products." Europeans had few goods Asians wanted, so they paid in American silver.'
      }
    },
    {
      phase: 'atlantic', kind: 'exchange-hub', eyebrow: 'Exchange · The Atlantic System',
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
      phase: 'regional', kind: 'continuity-change', eyebrow: 'Exchange · Markets That Kept Going',
      kc: 'Unit 4: Learning Objective I', title: 'The new trade joined the old markets. It did not replace them.',
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
          '4.4 taught the Indian Ocean merchants as continuity (KC-4.3.II.A.iii). Here the point is how the new silver and the old markets fit together.',
          'Big-rocks revision, 2026-11-05: the map slide is gone (Module 01 has it). Trace the two silver roads, across the Pacific to Manila and around Africa to Asia, there.'
        ],
        ask: 'Which column is the change, and which the continuity?',
        listenFor: 'Silver and European carriers are the change; the merchants and their practices are the continuity.',
        avoid: 'Myth: "global trade replaced the old markets." Regional markets kept flourishing, and Europeans joined them as carriers.'
      }
    },
    {
      phase: 'work', kind: 'frame-triptych', eyebrow: 'Work · Continued and Intensified',
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
      phase: 'families', kind: 'case-file', eyebrow: 'Society · Families in Africa',
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
      phase: 'mixing', kind: 'ledger', eyebrow: 'Society · A Mixed Atlantic World',
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
      phase: 'faith', kind: 'branch-tree', eyebrow: 'Faith · Compare',
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
          'Blended: the Virgin of the Mountain and Guadalupe (next slide), Kongo crucifixes made by Kongo artists in Kongo style, and Vodou, formed among enslaved Africans in the French colony of Saint-Domingue (Haiti) in the 1700s from West and Central African religions and Catholic saints. Santería took its familiar form in Cuba in the 1800s, after this period; do not use it as a 1450 to 1750 example.'
        ],
        ask: 'Give one similarity and one difference between two branches.',
        listenFor: 'Similar: each came from contact. Different: in Peru the old religion was attacked; at Tepeyac it blended.'
      }
    },
    {
      phase: 'blend', kind: 'frame-evidence', eyebrow: 'Faith · Blending',
      kc: 'KC-4.1.VI', title: 'Two traditions in one painting.',
      subtitle: 'The Virgin of the Mountain, painted in Potosí in the 1700s: Mary is the silver mountain itself.',
      notes: {
        minutes: 3,
        keys: [
          'Real painting, Potosí, 1700s: on the right',
          'Mary is the silver mountain',
          'Christian: Mary, Trinity, pope, king',
          'Andean: sacred mountain, earth as mother',
          'Say "art historians read it as"',
          'Sahagún waits for Module 05',
          'Apparition story published 1648, not 1531'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces two (the Virgin of the Mountain and Sahagún\'s quotation). The painting is still here as the slide\'s source; Sahagún is the Skill Builder\'s, so nothing is lost.',
          'The real painting, on the right: La Virgen del Cerro, unknown painter, Potosí, 1700s (Casa Nacional de Moneda, Potosí; photograph Dan Lundberg, 2017, CC BY-SA 2.0; other versions survive, including one in La Paz). Mary\'s face and hands appear on the Cerro Rico, the silver mountain, whose slopes carry tiny people and animals; the Father and the Son crown her, with the Holy Spirit above, and a pope, a cardinal and a bishop kneel at the left and a king at the right, around a globe.',
          'Art historians read it as blending Christian painting with the Andean idea of sacred mountains and of the earth as a mother (Pachamama); some caution that the painter\'s intention is not recorded. Say "art historians read it as." It ties the day together: the mountain whose silver went to China.',
          'The left picture is a labeled reconstruction of an artist\'s workshop; it cannot show who painted the real picture or how. Reason from the right-hand painting.',
          'Guadalupe: the shrine at Tepeyac was a center of devotion by the 1550s; the apparition story of Juan Diego (dated 1531) was first published in 1648 and 1649, so do not teach the apparition as an event of 1531. In the Skill Builder (Module 05, required) students read Bernardino de Sahagún\'s 1570s complaint that Nahua pilgrims "also call her Tonantzin," which he calls "a satanic invention to cover up idolatry," and judge whether his evidence proves his claim. He also says the Spanish preachers themselves had called Mary Tonantzin. Do not settle it here.'
        ],
        ask: 'Find one Christian thing and one Andean thing in the painting.',
        listenFor: 'Christian: Mary, the Trinity, a pope. Andean: the mountain as a sacred mother.',
        ap: 'KC-4.1.VI: the development of syncretic belief systems and practices.',
        avoid: 'Myth: "European culture simply replaced the others." Traditions blended, and all parties contributed, though not as equals: the blending often happened under force.'
      }
    },
    {
      retelling: true, phase: 'ledger', kind: 'split-matrix', eyebrow: 'The Whole Topic',
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
          'China’s demand pulled the silver'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the eight cells from memory.',
          'The four rows are the four learning objectives (H, I, J, K); the two columns are the reasoning move.',
          'Push for the "why" in each row: rulers wanted wealth and an edge on rivals; China\'s demand pulled the silver; the slave trade took more men; contact carried religions to new people.'
        ],
        ask: 'Which row has the biggest change, and which the biggest continuity?',
        listenFor: 'Biggest change: silver around the world, or families in Africa. Biggest continuity: regional markets, or the old work.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
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
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'What does the author want you to believe?',
      subtitle: 'Find the claim in a source, say it in one sentence, and name the evidence the author gives.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' },
      notes: {
        minutes: 8,
        keys: [
          'Skill 3.A: the claim in one sentence',
          'Modeled on Coen, practiced on Sahagún',
          'Own words before quoting',
          'Debrief after: suspicion is not proof'
        ],
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 3.A: identify and describe a claim or argument in a source.',
          'It models Coen\'s 1614 letter (slide 7), then gives Sahagún\'s passage on Tepeyac and asks for the claim, the evidence he gives for it, and whether that evidence proves it.',
          'Push students to state the claim in their own words, in one sentence, before they quote anything.'
        ],
        ask: 'After students have written: is Sahagún\'s evidence enough to prove his claim?',
        listenFor: 'Debrief only after the module: a name and a crowd do not prove what people believed; the source shows what he suspected.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'Something new and something that kept going, from two sources. Name one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' },
      notes: {
        minutes: 8,
        keys: [
          'One claim, two sources',
          'Something new, something kept going',
          'Five objects plus one figures card',
          'Figures card: source it as a modern estimate',
          'Observe → infer → name a limit'
        ],
        land: [
          'Five real objects and one figures card: a VOC share receipt (Enkhuizen, 1606), a Potosí silver coin (1651), women reeling silk in the 1696 Pictures of Tilling and Weaving, a painted Indian cotton made for sale abroad (early 1700s), Antonio and Manuel de Arellano\'s painted copy of the Virgin of Guadalupe (1691, LACMA), and a card of modern historians\' estimates from the Atlantic shipping records, which is a record, not an object, so students should source it as a modern estimate.',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you.',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated. The sixth card is text, not a picture.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Families, cultures and faith: what changed, why, and how religions compared.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-5-maritime-empires-maintained.html#modules' },
      notes: {
        minutes: 12,
        keys: [
          'Family change in Africa, and why',
          'One mixing example: who contributed',
          'Compare two things religions did',
          'Revised answer goes to Canvas',
          'Unfinished = homework'
        ],
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for one way the slave trade changed families in parts of Africa and why, one example of Atlantic cultural mixing and who contributed, and a comparison of two things religions did as contact grew. That is Learning Objectives J and K: KC-4.2.III.C, KC-4.1.IV.D.ii and KC-4.1.VI. Objectives H and I are the First & 10\'s and Checkpoint 1\'s.',
          'Socrates is told the skills are Causation and Comparison, so it will push for the cause of the family change and for a similarity and a difference.'
        ],
        ask: 'Does your answer have the cause of the family change, a contribution from more than one group, and a similarity and a difference?',
        listenFor: 'More men taken; music, food or language; spread and blending compared.'
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
