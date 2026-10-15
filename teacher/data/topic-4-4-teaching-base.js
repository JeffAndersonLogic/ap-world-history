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
 * modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2.
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
      'Model 2.A once on the 1635 Tokugawa memorandum, then let students source Afonso\'s 1526 letter themselves.',
      'Correct three myths: "Europe took over the world after 1500," "slavery began with the Atlantic trade," and "African rulers had no power in the trade."',
      'Name the rivalries (political, religious, economic) as the cause of the empires (KC-4.3.II.C).'
    ],
    could: [
      'Use the BeInTheRoom Goa Fort Council as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Empires from the Sea."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the three objectives, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.3, 4.2 and 2.3. Bridge to who would rule and who would work.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the Nanban screen.', students: 'Predict one change and one continuity.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Empires from the Sea" in class.', students: 'For every case: what changed, what kept going.', slide: 4 },
    { id: 'rivals', label: 'Why Build Empires', range: '17-19', minutes: 2, teacher: 'Political, religious, economic rivalries; five empires.', students: 'Sort a motive into a branch.', slide: 5 },
    { id: 'map', label: 'Where They Reached', range: '19-20', minutes: 1, teacher: 'Forts on coasts, colonies in the Americas, places with their own rules.', students: 'Find one fort and one place that set its own terms.', slide: 6 },
    { id: 'posts', label: 'Forts on the Coast', range: '20-22', minutes: 2, teacher: 'Elmina as the case: what a trading post was and who it paid.', students: 'Say who made money.', slide: 7 },
    { id: 'asia', label: 'Asia Sets the Terms', range: '22-24', minutes: 2, teacher: 'Macau under Ming rules; Japan, 1635 to 1641.', students: 'Say who made the rules.', slide: 8 },
    { id: 'source1635', label: 'Source It: 1635', range: '24-27', minutes: 3, teacher: 'Model 2.A: author, audience, purpose, situation.', students: 'Name the four.', slide: 9 },
    { id: 'ocean', label: 'The Old Ocean', range: '27-30', minutes: 3, teacher: 'The cartaz changed things; the merchants kept trading.', students: 'Name one change and one continuity.', slide: 10 },
    { id: 'africa', label: 'Kongo and Asante', range: '30-32', minutes: 2, teacher: 'Two African states that grew stronger through the trade.', students: 'Say what each gained.', slide: 11 },
    { id: 'afonso', label: 'Source It: Afonso', range: '32-35', minutes: 3, teacher: 'Students source the 1526 letter themselves.', students: 'Audience, purpose, and what it changes.', slide: 12 },
    { id: 'labor', label: 'Work in the Americas', range: '35-38', minutes: 3, teacher: 'One old system, four new ones.', students: 'Sort each as old or new.', slide: 13 },
    { id: 'pages', label: 'Labor on the Page', range: '38-40', minutes: 2, teacher: 'Potosí, 1553, and the Codex Kingsborough.', students: 'Notice, then infer.', slide: 14 },
    { id: 'oldslavery', label: 'Slavery in Africa', range: '40-42', minutes: 2, teacher: 'The older forms that continued.', students: 'Name two older forms.', slide: 15 },
    { id: 'scale', label: 'How Many', range: '42-43', minutes: 1, teacher: 'The 1500s against 1701 to 1750, as estimates.', students: 'Say what changed.', slide: 16 },
    { id: 'plantation', label: 'What the Plantations Changed', range: '43-46', minutes: 3, teacher: 'Demographic, social and cultural change.', students: 'Name one of each.', slide: 17 },
    { id: 'myths', label: 'Myth and Evidence', range: '46-48', minutes: 2, teacher: 'Europe took over; slavery began in 1500; Africans had no power.', students: 'Correct each myth.', slide: 18 },
    { id: 'ledger', label: 'What Changed, What Kept Going', range: '48-53', minutes: 5, teacher: 'Students redraw the ledger from memory.', students: 'Retell the whole topic.', slide: 19 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '53-55', minutes: 2, teacher: 'Model one continuity-and-change claim.', students: 'Upgrade a weak claim.', slide: 20 },
    { id: 'skill', label: 'Skill Builder', range: '55-61', minutes: 6, teacher: 'Module 05: Sourcing and Situation.', students: 'Source the 1639 order.', slide: 21 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: who ruled.', students: 'Work without the coach.', slide: 22 },
    { id: 'evidence', label: 'Evidence Lab', range: '61-68', minutes: 7, teacher: 'Module 07: one change and one continuity from two sources.', students: 'Observe, then infer, then name a limit.', slide: 23 },
    { id: 'cp2', label: 'Checkpoint 2', range: '68-78', minutes: 10, teacher: 'Module 10: labor and slavery, change and continuity. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 24 },
    { id: 'close', label: 'Landing Sentence', range: '78-80', minutes: 2, teacher: 'Land the answer and hand off to 4.5.', students: 'Say the topic in one sentence.', slide: 25 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Empires from the sea. A world with its own rules.',
      subtitle: 'Continuity and Change, with Sourcing and Situation 2.A. Three objectives: who ruled, trade and labor, slavery. For each, one change and one continuity.',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 83 and 84. Three learning objectives. E (Governance): explain the process of state building and expansion among various empires and states, 1450 to 1750. F (Economic Systems): explain the continuities and changes in economic and labor systems. G (Social Interactions and Organization): explain changes and continuities in systems of slavery.',
          'KC-4.3.II.A.i: Europeans established trading posts in Africa and Asia, profitable for the rulers and merchants involved; some Asian states limited European trade with restrictive or isolationist policies. KC-4.3.II.C: driven largely by political, religious and economic rivalries, European states established maritime empires (Portuguese, Spanish, Dutch, French, British). KC-4.3.II.A.ii: maritime trade fostered the growth of Asante and Kongo. KC-4.3.II.A.iii: despite some disruption, Indian Ocean networks continued to flourish, with intra-Asian trade and Asian merchants. KC-4.2.II.D: colonial economies in the Americas largely depended on agriculture, used existing labor systems (the Incan mit’a) and introduced new ones (chattel slavery, indentured servitude, encomienda, hacienda). KC-4.2.II.B: enslavement in Africa continued in its traditional forms (households; export to the Mediterranean and the Indian Ocean). KC-4.2.II.C: plantation growth increased the demand for enslaved labor in the Americas, with significant demographic, social and cultural changes.',
          'The CED\'s illustrative examples (optional): Ming China and Tokugawa Japan; Swahili Arabs, Omanis, Gujaratis and Javanese. All six are in this deck because each carries a Key Concept sentence.',
          'Owns: trading posts and the rivalries behind them, Ming and Tokugawa limits, Kongo and Asante, Indian Ocean continuity, colonial labor systems old and new, slavery old and new.',
          'Bridge only: joint-stock companies and the VOC (4.5; the Dutch appear as a rival and as the traders on Dejima, not as a company); silver\'s global flow (4.5; Potosí appears only as where the mit’a sent workers); casta (4.7, not mentioned); cultural mixing and gender and family change (4.5); resistance and Maroons (4.6).',
          'Three myths: "Europe took over the world after 1500"; "slavery began with the Atlantic trade"; "African rulers had no power in the trade."',
          'Every picture in this deck is a real historical object or scene. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Europeans built empires from the sea, but much of the world kept its own rules: China and Japan set terms, Asian merchants kept trading, Kongo and Asante grew, the mit’a was reused and slavery in Africa went on, while plantations made slavery in the Americas larger and different.',
        avoid: 'Avoid teaching how the VOC or the English East India Company were organized, or the silver trade to China. Both are 4.5, and the old 4.4 pages spent a section on the companies.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
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
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with two questions in mind.',
      subtitle: 'For every case: what changed, and what kept going the way it already had?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
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
      phase: 'rivals', kind: 'branch-tree', eyebrow: 'Why Build Empires',
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
      phase: 'map', kind: 'map', eyebrow: 'Where the Empires Reached',
      kc: 'Unit 4: Learning Objective E', title: 'Forts, colonies, and their own rules.',
      footer: 'In Africa and Asia, Europeans mostly held coasts. In the Americas, they took territory.',
      visual: { url: '../assets/images/instructional-maps/topic-4-4.svg', alt: 'World map marking the Gold Coast and Elmina, Kongo, the Swahili coast and Mombasa, Goa, Malacca, Macau, Japan, the Caribbean and Potosí, with arrows for forts on the coast, enslaved Africans carried west and to Brazil, and intra-Asian trade' },
      notes: {
        minutes: 1,
        land: [
          'The course\'s own instructional map, rebuilt for this story. Shaded regions are schematic, not borders.',
          'Point out the pattern: most European places in Africa and Asia sit on a coast; Japan, Kongo and the Swahili coast are places that set their own terms; Potosí and the Caribbean are colonies.'
        ],
        ask: 'Find one European fort and one place that set its own terms.',
        listenFor: 'Goa, Malacca or Elmina; Japan, Macau under Ming rules, Mombasa under Oman, Kongo.'
      }
    },
    {
      phase: 'posts', kind: 'case-file', eyebrow: 'Forts on the Coast',
      kc: 'KC-4.3.II.A.i', title: 'What a trading post was, and who it paid.',
      template: {
        tag: 'Trading post', place: 'Elmina, Gold Coast', date: '1482',
        visual: { url: '../assets/images/topics/4-4/elmina-dapper-c1668.jpg', alt: 'Engraving of a large fort on a low rocky point above the sea, a smaller fort on the hill behind it, and sailing ships firing a salute in the foreground', credit: 'Elmina, Dapper, Amsterdam, 1668 · Public domain', position: '50% 60%' },
        rows: [
          { label: 'Built by', text: '**Portugal**, to buy gold on the coast of West Africa' },
          { label: 'Then', text: 'Goa **1510**, Malacca **1511**, Hormuz **1515**: forts on coasts, not whole countries' },
          { label: 'Paid', text: 'The **kings** who backed the posts and the **merchants** who traded through them' },
          { label: 'Taken', text: 'The Dutch captured Elmina in **1637**: rivals took each other\'s posts' }
        ],
        proves: 'A trading post was a small fortified base where a foreign state\'s merchants bought and sold.'
      },
      notes: {
        minutes: 2,
        land: [
          'São Jorge da Mina (Elmina) was built by Diogo de Azambuja in 1482 to control the gold trade of the Gold Coast. The Dutch West India Company took it in 1637. The engraving, from Olfert Dapper\'s description of Africa (Amsterdam, about 1668), shows it in Dutch hands, with the smaller Fort Coenraadsburg on the hill behind.',
          'Afonso de Albuquerque took Goa (1510), Malacca (1511) and Hormuz (1515). The Portuguese crown held the pepper trade as a royal monopoly and drew customs from its ports: profit for rulers and merchants, the CED\'s words.',
          'Elmina later became a center of the Atlantic slave trade; that is the scale slide, later in the lesson.'
        ],
        ask: 'Why a fort on a coast and not a conquered province?',
        listenFor: 'A fort could control trade with a few hundred men; conquering a country took an army they did not have.',
        ap: 'The first change in the ledger: Europeans now held posts on the coasts of Africa and Asia.'
      }
    },
    {
      phase: 'asia', kind: 'story-scene', eyebrow: 'Asia Sets the Terms',
      kc: 'KC-4.3.II.A.i', title: 'China and Japan decided how far Europeans could reach.',
      template: {
        visual: { url: '../assets/images/topics/4-4/nagasaki-dejima-1735-44.jpg', alt: 'Engraving of Nagasaki harbor below green hills, with the walled Dutch compound on Dejima at the shore, flying a flag, a Dutch company ship, Japanese boats and Chinese junks', credit: 'Nagasaki harbor and Dejima, engraving by Johann Wolfgang Heydt, published in Germany, 1744 · Public domain', position: '50% 88%' },
        caption: 'Nagasaki, about 1740: the Dutch island, Dutch and Japanese ships, Chinese junks',
        steps: [
          { label: 'China, 1557', text: 'Portuguese may settle at Macau, under Chinese officials and rules.' },
          { label: 'Japan, 1635', text: 'No Japanese ship may sail abroad. Search every ship for Christians.' },
          { label: 'Japan, 1639', text: 'Portuguese ships are banned from Japan.' },
          { label: 'Japan, 1641', key: true, text: 'Only the Dutch may trade, on the island of Dejima. Chinese merchants trade in the city.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'This is the second sentence of KC-4.3.II.A.i, which the old 4.4 pages never taught: some Asian states limited the disruptive economic and cultural effects of European trade with restrictive or isolationist policies. Ming China and Tokugawa Japan are the CED\'s examples.',
          'Macau: Portuguese merchants settled from 1557 with the permission of Chinese provincial officials; formal recognition and the annual ground rent are dated variously from 1554 to 1573. Chinese officials kept authority in and around the port.',
          'Japan: the shogun\'s senior councilors sent five sets of orders to the Nagasaki magistrates between 1633 and 1639; those of 1635 and 1639 are translated in David J. Lu, Japan: A Documentary History (1997). The Spanish had been expelled in 1624; the English left in 1623. The Dutch moved from Hirado to Dejima in 1641.',
          'The engraving is German, signed by Johann Wolfgang Heydt ("I. W. Heydt del. et sculp.") and published in Germany in 1744 in a book printed by J. C. Tetschner: a European picture made for European readers. It has its own legend: the city of Nagasaki, the island where the Dutch live, a Chinese island, a company ship, Japanese ships and Chinese junks.'
        ],
        ask: 'Who wrote the rules for trade in this harbor?',
        listenFor: 'Japan\'s government, not the Dutch.',
        ap: 'The first continuity in the ledger: Asian states kept setting the terms.'
      }
    },
    {
      phase: 'source1635', kind: 'source-hipp', eyebrow: 'Source It · Model',
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
        land: [
          'Translated in David J. Lu, Japan: A Documentary History (1997), pp. 221 to 222, where the edict is headed "Addressed to the Joint Bugyō of Nagasaki." Articles 1 and 3; other articles order searches for Christians, rewards for informers and rules for selling silk. Ellipsis marks the cut.',
          'This is the topic\'s suggested skill, 2.A: identify a source\'s point of view, purpose, historical situation and audience. Model all four, out loud.',
          'Audience matters: these were not announcements to foreigners or the public. They were working orders to the men at the one port where foreigners traded.',
          'Historians later named these the "closed country" (sakoku) edicts, a word first used in 1801; Japan kept trading with the Dutch, the Chinese, Korea and the Ryukyu kingdom.'
        ],
        ask: 'Why does it matter that these orders went to officials, not to the Portuguese?',
        listenFor: 'They are instructions for enforcing control, so they show what the government meant to do.',
        ap: 'Sourcing and Situation 2.A: author, audience, purpose, situation.'
      }
    },
    {
      phase: 'ocean', kind: 'continuity-change', eyebrow: 'The Old Ocean Keeps Trading',
      kc: 'KC-4.3.II.A.iii', title: 'The Portuguese changed the Indian Ocean. They did not replace it.',
      footer: 'The College Board\'s words: existing trade networks "continued to flourish."',
      template: {
        date: 'After 1498',
        before: { tag: 'Before', items: ['Merchants from East Africa, Arabia, India, Southeast Asia and China', 'Ports open to many traders'] },
        after: { tag: 'Changed', items: ['Portuguese forts at Goa, Hormuz and Malacca', 'Ships forced to buy a pass, the cartaz'] },
        continued: { tag: 'Continued', items: ['Gujarati merchants kept shipping cloth', 'Swahili Arab and Javanese traders kept trading', 'Omanis took Muscat (1650) and Mombasa (1698)'] }
      },
      notes: {
        minutes: 3,
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
      phase: 'africa', kind: 'story-scene', eyebrow: 'African States Grow',
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
      phase: 'afonso', kind: 'source-quote', eyebrow: 'Source It · Your Turn',
      kc: 'KC-4.3.II.A.ii', title: 'A king writes to a king, 1526.',
      footer: 'Afonso sold war captives from outside Kongo himself. Read his letter with that in mind.',
      template: {
        quote: '[T]hese traders carry away our native-born countrymen and the children of our nobles and vassals as well as relatives of ours. ... Please instruct your trading agents to send neither traders nor trading goods here.',
        attribution: { author: 'Afonso I, king of Kongo', work: 'Letter to King João III of Portugal', year: '1526' },
        notice: 'Who is his audience, and what does he want that audience to do? Then: was he against all slavery?'
      },
      notes: {
        minutes: 3,
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
      phase: 'labor', kind: 'ledger', eyebrow: 'Work in the Americas',
      kc: 'Unit 4: Learning Objective F', title: 'One old labor system, four new ones.',
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
      phase: 'pages', kind: 'frame-compare', eyebrow: 'Labor on the Page',
      kc: 'KC-4.2.II.D', title: 'Two pages from the 1550s, one from each side.',
      template: {
        panels: [
          { visual: { url: '../assets/images/topics/4-4/potosi-cieza-1553.jpg', alt: 'Woodcut of a tall mountain labeled Cero de Potosí, with tiny figures climbing paths to mine entrances and a town with churches at its foot', credit: 'Cerro de Potosí, woodcut in Pedro Cieza de León, Crónica del Perú, Seville, 1553 · Public domain', fit: 'contain' }, tag: 'Printed in Spain, 1553', text: 'The silver mountain where the mit’a later sent its workers.' },
          { visual: { url: '../assets/images/topics/4-4/codex-kingsborough-1550s.jpg', alt: 'Painting from a Nahua codex: a Spaniard in a red cloak and black hat grabs an Indigenous man by the hair, and the man bleeds', credit: 'Codex Kingsborough (Tepetlaoztoc), about 1550s · British Museum · Public domain', fit: 'contain' }, tag: 'Painted by Nahua artists, 1550s', text: 'A town\'s complaint against its encomenderos, made to be sent to Spain.' }
        ],
        question: 'Which page was made by the people who did the work? **What can each one tell you that the other cannot?**'
      },
      notes: {
        minutes: 2,
        land: [
          'Left: the first European picture of Potosí, in Pedro Cieza de León\'s Crónica del Perú (Seville, 1553). Show it as the place the mit’a served; what the silver did in the world is Topic 4.5.',
          'Right: the Codex Kingsborough, or Codex of Tepetlaoztoc (British Museum), painted by Nahua artists about the 1550s for a lawsuit: the people of Tepetlaoztoc, near Texcoco, complained to the Spanish crown about the tribute and labor demanded by their encomenderos. This page shows a Spaniard named Espinosa, who had charge of the town, beating a Nahua man.',
          'Sourcing in one move: the codex was made by the people who owed the labor, for a Spanish court. The woodcut was made in Spain by a Spanish chronicler.'
        ],
        ask: 'What did the people of Tepetlaoztoc want the Spanish king to do?',
        listenFor: 'Stop the abuse and the extra demands; enforce the law against the encomendero.'
      }
    },
    {
      phase: 'oldslavery', kind: 'case-file', eyebrow: 'Slavery: Continuity',
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
      phase: 'scale', kind: 'frame-number', eyebrow: 'Slavery: Change',
      kc: 'Unit 4: Learning Objective G',
      template: {
        visual: { url: '../assets/images/topics/4-4/canoes-elmina-manfroe-1732.jpg', alt: 'Two engraved views of the Gold Coast: fishing canoes off Elmina, and canoes carrying enslaved people out to European ships at anchor', credit: 'Fishing canoes at Elmina, and canoes carrying enslaved people to ships at Manfroe, engraving printed in London, 1732 · Public domain', position: '50% 80%' },
        number: '2.5+', unit: 'million', range: '1701 to 1750',
        text: 'Africans forced onto ships bound for the Americas, by historians\' estimates. In the whole 1500s: fewer than 300,000.'
      },
      notes: {
        minutes: 1,
        land: [
          'Slave Voyages (the Trans-Atlantic Slave Trade Database) estimates of captives embarked: 277,505 in 1501 to 1600; 1,088,909 in 1701 to 1725 and 1,471,725 in 1726 to 1750, together 2,560,634. Say "more than 2.5 million" and "estimates."',
          'About nine times as many in fifty years as in the whole sixteenth century: that is the change the CED means by "increased the demand for enslaved labor."',
          'The engraving, from a 1732 English collection of voyages (from Jean Barbot\'s account of the Guinea coast), shows the lower scene\'s canoes carrying enslaved people out to ships at Manfroe, on the Gold Coast. African canoemen and traders worked inside the trade; European ships carried it across the ocean.'
        ],
        ask: 'Why does the number grow so fast after 1700?',
        listenFor: 'More plantations, more sugar and tobacco, more demand for workers.'
      }
    },
    {
      phase: 'plantation', kind: 'story-scene', eyebrow: 'Slavery: Change',
      kc: 'KC-4.2.II.C', title: 'What the plantations changed.',
      template: {
        visual: { url: '../assets/images/topics/4-4/sugar-works-du-tertre-1667.jpg', alt: 'Engraving of a Caribbean sugar works: an animal-driven mill under a roof, a boiling house with kettles, a drying shed, palms and workers carrying cane', credit: 'Sugar works in the French Antilles, engraved by Sébastien Leclerc for Jean-Baptiste Du Tertre, Paris, 1667 · Public domain', position: '45% 50%' },
        caption: 'A sugar works in the French Caribbean, 1667',
        steps: [
          { label: 'Demand', text: 'Sugar, and later tobacco, needed huge numbers of workers.' },
          { label: 'Demographic', text: 'Africans and their descendants became most of the people in the Caribbean colonies.' },
          { label: 'Social', key: true, text: 'Slavery for life, inherited, and tied to race.' },
          { label: 'Cultural', text: 'African languages, beliefs and foods crossed with them.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.2.II.C: the growth of the plantation economy increased the demand for enslaved labor in the Americas, "leading to significant demographic, social, and cultural changes." The three steps after Demand are those three words, in order.',
          'Demographic: on Barbados, enslaved Africans outnumbered Europeans by the late 1600s, and the pattern spread across the Caribbean; in Brazil, Africans and their descendants were a large part of the population.',
          'Social: chattel slavery was for life and inherited; Virginia\'s 1662 law made the children of enslaved women enslaved; English colonial law tied slavery to race.',
          'Cultural: name it in one sentence. How African, American and European cultures mixed is 4.5.',
          'The engraving is a French Antilles sugar works drawn for the missionary Du Tertre\'s history of the islands (1667): the mill (moulin), furnaces and kettles, the boiling house, and its key also marks the \'cases de nègres\', the huts of the enslaved workers. It shows the work, not the workers\' lives; a European artist made it for European readers.'
        ],
        ask: 'Which of the three changes would a person born on a plantation feel first?',
        listenFor: 'The social one: born enslaved, for life.',
        ap: 'The largest change in the ledger: scale, and the kind of slavery.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence tells a more useful story than the myths.',
      template: {
        rows: [
          { myth: 'After 1500, Europe took over the world.', evidence: 'Europeans held coasts in Asia and Africa. China and Japan set the terms, and Asian merchants kept trading.', source: 'Japan, 1635 to 1641; Gujarati merchants' },
          { myth: 'Slavery began with the Atlantic slave trade.', evidence: 'Older forms continued in Africa. The plantations changed its scale and kind.', source: 'Households; the Sahara; the Indian Ocean' },
          { myth: 'African rulers had no power in the trade.', evidence: 'Kongo and Asante grew stronger, and set terms for traders.', source: 'Afonso I, 1526; Feyiase, 1701' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Row 1 is the spine\'s second half: much of the world kept its own rules.',
          'Row 2: KC-4.2.II.B and II.C together. Do not let a student write that slavery was invented after 1500.',
          'Row 3: power is not innocence. African states that grew through the trade also sold captives into it; Afonso protected his own subjects and sold foreigners. Both halves are true, and the evidence for both is the same letter.'
        ],
        ask: 'Which myth is the hardest to correct without making a new mistake?',
        listenFor: 'The third: African states had power, and some used it to sell captives.'
      }
    },
    {
      retelling: true, phase: 'ledger', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'What changed, and what kept going.',
      template: {
        columns: [{ name: 'What changed' }, { name: 'What kept going' }],
        rows: [
          { label: 'Who ruled', cells: ['Rival European empires built forts on coasts and colonies in the Americas; Kongo and Asante grew stronger', 'China and Japan set the terms; Europeans mostly held coasts, not Asia'] },
          { label: 'Trade and work', cells: ['The cartaz; encomienda, hacienda, indentured servitude, chattel slavery', 'Asian merchants kept the Indian Ocean trading; the Inca mit’a reused'] },
          { label: 'Slavery', cells: ['Plantations made it far larger, lifelong, inherited and tied to race', 'Older forms in Africa: households, the Sahara, the Indian Ocean'] }
        ],
        result: { label: 'So', text: 'Europeans built empires from the sea, but much of the world kept its own rules.' }
      },
      notes: {
        minutes: 5,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the six cells from memory.',
          'The three rows are the three learning objectives (E, F, G); the two columns are the reasoning move.',
          'Push for the "why" in each row: rivalry caused the empires; Asian states were strong enough to set terms; the plantations caused the change in slavery.'
        ],
        ask: 'Which row has the biggest change, and which the biggest continuity?',
        listenFor: 'Biggest change: slavery in the Americas. Biggest continuity: Asian states and merchants.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      kc: 'KC-4.3.II.A.iii',
      footer: 'A change and a continuity, each with a named example and the reason.',
      template: {
        weak: 'The Portuguese changed Indian Ocean trade.',
        strong: 'The Portuguese **changed** Indian Ocean trade with forts at **Goa**, **Malacca** and **Hormuz** and a pass ships had to buy, the **cartaz**, but **Gujarati**, **Swahili Arab** and **Javanese** merchants **kept** trading, often buying a pass and sailing on, because a few forts could tax the ocean\'s trade but not replace its merchants.'
      },
      notes: {
        minutes: 2,
        land: [
          'The weak claim names no continuity, no evidence and no reason.',
          'The strong claim names a change and a continuity, each with a named example, and the reason the continuity held: the shape both checkpoints ask for.',
          'It models an ungraded case on purpose. Students write their own for labor and for slavery in Checkpoint 2, so do not write a slavery model on the board.'
        ],
        ask: 'Why is "changed" not enough?',
        listenFor: 'It does not say what changed, what continued, or why.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Who wrote it, for whom, and why?',
      subtitle: 'Name a source\'s point of view, purpose and situation, and say how they change what it means.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 2.A: identify a source\'s point of view, purpose, historical situation and audience.',
          'It models the 1635 memorandum (the slide students just saw), then gives the 1639 order banning Portuguese ships and asks for its point of view, purpose and situation, and how the situation explains why Japan limited trade with the Portuguese.',
          'Push students to tie each answer to words in the source, not to facts from elsewhere.'
        ],
        ask: 'What words in the source show its purpose?',
        listenFor: 'It says the Portuguese "secretly transported" missionaries, so the purpose is to stop Christianity coming in.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'Who ruled?',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.4. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It asks for one cause of the empires, one change in who held power (a trading post, or Kongo or Asante) and one continuity (China or Japan). Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name a rivalry, a change in who held power and a continuity.',
        listenFor: 'Religion, Elmina or Asante, and Japan\'s rules.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'One change and one continuity, from two real objects. Name one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Five real objects: the Nanban screen (about 1600), Nagasaki and Dejima (1735 to 1744), the Kongo crucifix (1600s to 1700s), the Codex Kingsborough (1550s) and the Du Tertre sugar works (1667).',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you (a European engraving shows the work, not the workers\' view; a Japanese screen shows what its painter saw from the shore).',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Labor and slavery: what changed, what kept going.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-4-maritime-empires-established.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for one continuity and one change in labor systems in the Americas, and one continuity and one change in slavery, with the reason for each change. That is Learning Objectives F and G: KC-4.2.II.D, II.B and II.C. Learning Objective E is the First & 10\'s and Checkpoint 1\'s.',
          'Socrates is told the skill is Continuity and Change, so it will push for both halves and the reason.'
        ],
        ask: 'Does your answer have a continuity, a change, a named example for each, and why the change happened?',
        listenFor: 'The mit’a and encomienda; older African slavery and plantation slavery; the plantations as the reason.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'Europeans built empires from the sea, but much of the world kept its own rules.',
      subtitle: 'Next: the empires exist. How did rulers make them pay, and what did the money do to the people inside them?',
      notes: {
        minutes: 2,
        land: [
          'The picture: Kawahara Keiga\'s folding screen of Nagasaki harbor, painted about 1836 (Museum Volkenkunde, Leiden). Dejima, the fan-shaped island in the foreground, is where the Dutch were confined from 1641; the island\'s shape was the same in this period. A whole European trading empire\'s foothold in Japan is that small island, inside a Japanese harbor, under Japanese rules: the spine in one picture. It was painted almost a century after 1750; say so.',
          'This sentence answers all three learning objectives: Europeans built empires from the sea (E), and much of the world kept its own rules (E, F, G), while some things changed fast (labor and slavery).',
          'Hand off to 4.5 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.4?',
        listenFor: 'Europeans built forts and colonies, but Asian states and merchants and African states kept their own power, older labor and slavery continued, and plantations changed slavery in the Americas.'
      }
    }
  ]
};
