/*
 * Topic 3.2 canonical Teaching OS source.
 * Built from the CED itself (scripts/lib/ced-source/unit-3.js, Topic 3.2, Fall 2026
 * CED p. 70): reasoning process Comparison, suggested skill 4.A Contextualization.
 * Story spine: Conquest wins land; people, legitimacy and money hold it.
 * Wall version: Guns win land. People, symbols and money hold it.
 * Story approved by Jeff 2026-10-06 (docs/TOPIC-3-2-STORY-DRAFT.md), and the deck
 * follows the First & 10 written from that story ("Holding What You Won").
 * Retelling slide: trunk and branches (phase 'tree').
 *
 * Required modules, set by Jeff 2026-10-06 and written in the schedule: 02 First & 10
 * (read in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2.
 * Taught Green Tuesday 2026-10-20 and Silver Wednesday 2026-10-21.
 *
 * Pictures: none of Jeff's 3.2 uploads exist yet (docs/UNIT-3-PICTURE-LIST.md is the
 * shopping list), so every slide is text-led or a diagram. Wire uploads in with the
 * presentation-images skill; the beats that want a picture say so in their notes.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '3.2',
    minutes: 90,
    title: 'Empires: Administration',
    subtitle: 'Guns win land. People, symbols and money hold it.',
    essentialQuestion: 'How did rulers use a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750?',
    apFocus: 'Comparison, with contextualization',
    endTarget: 'Students can explain how rulers held their empires with people who served, symbols that justified their rule, and systems that paid, and can compare two rulers doing the same job and explain why they did it differently.'
  },

  priorities: {
    must: [
      'Tell the story in the order of the reading: the problem, people who serve, symbols that justify, systems that pay, how the three fit.',
      'Give the three jobs equal time. Symbols (KC-4.3.I.A) is the branch that was crowded out before; do not let it shrink.',
      'Every example is a comparison: same job, different tools, and why. The why is the context, the situation that ruler was in.',
      'Religion appears here only as a ruler\'s tool. How religions themselves changed is Topic 3.3.'
    ],
    should: [
      'Use the trunk and branches as the retelling slide and have students redraw it with one pair per branch.',
      'Model one full comparison sentence before Checkpoint 1.',
      'Name the modules due today: 02 First & 10 (in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2.'
    ],
    could: [
      'Use the BeInTheRoom scenario at Akbar\'s court as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter for Topic 3.2.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The CED objective, the comparison move, the three jobs, and what belongs to 3.3.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 3.1: cannons, the four empires, Tondibi. Bridge: now he has to run it.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-6', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '6-20', minutes: 14, teacher: 'Module 02: students read the whole story in class.', students: 'Read for the three jobs and the comparisons.', slide: 4 },
    { id: 'jobs', label: 'Three Jobs', range: '20-22', minutes: 2, teacher: 'Context: the morning after a conquest.', students: 'Name the three jobs.', slide: 5 },
    { id: 'halil', label: 'The Grand Vizier', range: '22-24', minutes: 2, teacher: 'Why a powerful servant is a danger.', students: 'Say what Mehmed was afraid of.', slide: 6 },
    { id: 'people', label: 'Devshirme and Samurai', range: '24-29', minutes: 5, teacher: 'Same job, different tools.', students: 'One similarity, one difference, one why.', slide: 7 },
    { id: 'mansab', label: 'A Third Answer', range: '29-31', minutes: 2, teacher: 'Mansabdars: rank plus a jagir that moves.', students: 'Explain why the jagir moved.', slide: 8 },
    { id: 'belief', label: 'God and the Ruler', range: '31-36', minutes: 5, teacher: 'Divine right compared with Songhai\'s promotion of Islam.', students: 'Compare the two claims.', slide: 9 },
    { id: 'portraits', label: 'Two Pictures', range: '36-38', minutes: 2, teacher: 'Qing portraits: one ruler, two audiences.', students: 'Say who each picture was for.', slide: 10 },
    { id: 'buildings', label: 'Power in Stone', range: '38-42', minutes: 4, teacher: 'Mughal tombs compared with Versailles.', students: 'Find the second job Versailles did.', slide: 11 },
    { id: 'collect', label: 'Who Collects', range: '42-46', minutes: 4, teacher: 'Tax farming compared with zamindars.', students: 'Explain why the middlemen differed.', slide: 12 },
    { id: 'paid', label: 'What Was Paid', range: '46-48', minutes: 2, teacher: 'Mexica tribute compared with Ming silver.', students: 'Goods or coin?', slide: 13 },
    { id: 'fit', label: 'How It Fits', range: '48-50', minutes: 2, teacher: 'The three jobs hold each other up.', students: 'Trace one loop.', slide: 14 },
    { id: 'tree', label: 'The Tree', range: '50-55', minutes: 5, teacher: 'Students redraw the trunk and branches from memory.', students: 'Retell the whole topic.', slide: 15 },
    { id: 'frame', label: 'Say It in One Sentence', range: '55-59', minutes: 4, teacher: 'Model one comparison sentence with context.', students: 'Write one of your own.', slide: 16 },
    { id: 'cp1', label: 'Checkpoint 1', range: '59-65', minutes: 6, teacher: 'Independent: compare two ways rulers got people to serve them.', students: 'Work without the coach.', slide: 17 },
    { id: 'evidence', label: 'Evidence Lab', range: '65-75', minutes: 10, teacher: 'Module 07: a claim from two pieces of evidence.', students: 'Build a claim from two sources.', slide: 18 },
    { id: 'cp2', label: 'Checkpoint 2', range: '75-87', minutes: 12, teacher: 'Module 10: one symbol and one revenue system. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 19 },
    { id: 'close', label: 'Landing Sentence', range: '87-90', minutes: 3, teacher: 'Land the answer and hand off to 3.3.', students: 'Say the topic in one sentence.', slide: 20 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 3.2', url: '../unit-3/lesson-3-2-empires-administration.html' },
    { label: 'First & 10', url: '../unit-3/first-and-10-topic-3-2-empires-administration-capture.html' },
    { label: 'BeInTheRoom: The Imperial Rank Roll', url: '../beintheroom/unit-3/the-imperial-rank-roll.html' },
    { label: 'Deep Reading', url: '../unit-3/deep-reading-topic-3-2-empires-administration.html' },
    { label: 'Unit 3 Interactive Empire Map', url: '../unit-3/network-atlas.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-3-2-slide',
    title: 'Topic 3.2 Presentation',
    file: 'present-topic-3-2.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Guns win land. People, symbols and money hold it.',
      subtitle: 'Comparison, with contextualization: the same three jobs, done differently by different rulers, and why.',
      notes: {
        minutes: 2,
        land: [
          'The learning objective (Unit 3, B): "Explain how rulers used a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750."',
          'The CED gives this topic the reasoning process Comparison and the suggested skill 4.A, Contextualization (Course Framework pp. 67 and 70). So every example is taught as a pair, and the "why" in every pair is the situation that ruler was in.',
          'Required content is the three Key Concept sentences: KC-4.3.I.C (bureaucratic elites and military professionals), KC-4.3.I.A (religious ideas, art and monumental architecture), KC-4.3.I.D (tribute, tax farming and innovative tax collection). The named examples are optional; the deck uses the ones the comparisons need.',
          'Owns: the three jobs. Bridge only: religious change (3.3) and where Ming silver came from (Unit 4).',
          'Modules due today: 02 First & 10 (read in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2. Checkpoint 2 finishes at home if it is not done in class.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Rulers held their empires with people who served, symbols that justified their rule, and money to pay for it, and each chose tools that fit his situation.',
        avoid: 'Avoid the Reformations, the Sunni-Shia split and Sikhism (3.3), and the global silver trade (Unit 4).'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull Topic 3.1 back from memory.',
      template: {
        questions: [
          { label: 'The cost', text: 'Why could only big states make full use of cannons?' },
          { label: 'The empires', text: 'Name the four land empires from Topic 3.1, and where each one was.' },
          { label: 'The twist', text: 'Morocco won at Tondibi. What did it find hard afterward?' }
        ],
        turn: 'Mehmed took Constantinople in seven weeks. **Now he has to run it.**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: cannons cost a fortune in metal, powder, crews and haulers, so only a state that taxed many people could pay; Ottoman, Safavid, Mughal, Qing; Morocco could not really govern what it won.',
          '3.1 ended on this exact line: "Guns can win a place. They do not run it." The turn picks it up.'
        ],
        ask: 'You just conquered a city full of strangers. What is the first problem you have to solve?',
        listenFor: 'Who will help me run it, why anyone should obey me, how I pay for it.',
        ap: 'Retrieval plus bridge: 3.1\'s consequence (big, costly conquests) becomes 3.2\'s context.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 3: Learning Objective B',
      title: 'How did rulers make their power look rightful and keep control of their empires?',
      subtitle: 'And why did different rulers do it differently? Hold that question.',
      notes: {
        minutes: 2,
        land: [
          'This is the learning objective in a ninth-grader\'s words: "legitimize" is make it look rightful, "consolidate" is keep control.',
          'The second line is the CED\'s reasoning move for this topic, comparison. Say so out loud: today we compare.'
        ],
        ask: 'Predict: what would a ruler need to hold a huge empire?',
        listenFor: 'Loyal officials and soldiers, a reason for people to obey, money.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 14 Minutes',
      title: 'Read for the three jobs.',
      subtitle: 'People who serve, symbols that justify, systems that pay. In each section, find the two rulers being compared and why they differed.',
      big: '14',
      action: { label: 'Open First & 10', url: '../unit-3/first-and-10-topic-3-2-empires-administration-capture.html' },
      notes: {
        minutes: 14,
        land: [
          'Students read the whole story first, in class. It is longer than 3.1\'s reading, so give it the full time. The slides that follow retell it with comparisons, so they are retrieval, not a first telling.',
          'Circulate for students who can say which job each example does. Do not accept a list of names.',
          'The three questions at the bottom go to Canvas through Gather All My Work.'
        ],
        ask: 'Which job does the devshirme do, and which does Versailles do?',
        listenFor: 'People who serve; symbols that justify, and also keeping the nobles close.'
      }
    },
    {
      phase: 'jobs', kind: 'grid', eyebrow: 'The Context',
      kc: 'Unit 3: Learning Objective B',
      title: 'Winning was fast. Holding was hard.',
      cards: [
        { title: 'JOB ONE', text: 'Find people who will serve you and not turn on you.' },
        { title: 'JOB TWO', text: 'Convince everyone else you deserve to rule.' },
        { title: 'JOB THREE', text: 'Collect enough money to pay for all of it.' },
        { title: 'THE CONTEXT', text: 'Huge conquered lands, powerful local people, and gun armies that cost a fortune.' }
      ],
      notes: {
        minutes: 2,
        land: [
          'Contextualization (4.A) is the CED\'s suggested skill here. The fourth card is the context every tool answers: newly conquered, diverse empires with powerful local elites and expensive armies.',
          'Every ruler did all three jobs. The rest of the lesson compares how.'
        ],
        ask: 'Which job do you think was hardest?',
        listenFor: 'Any, with a reason. Push for the situation that makes it hard.'
      }
    },
    {
      phase: 'halil', kind: 'case-file', eyebrow: 'Job One · The Danger',
      kc: 'KC-4.3.I.C',
      title: 'Why a powerful servant is a problem.',
      template: {
        tag: 'Arrested',
        place: 'Constantinople',
        date: '1453',
        rows: [
          { label: 'Who', text: '**Çandarlı Halil**, Mehmed\'s **grand vizier**, his chief minister' },
          { label: 'Family', text: 'A Turkish family that had held the top job for much of the past hundred years' },
          { label: 'What', text: 'Arrested right after the city fell, and soon executed' },
          { label: 'The lesson', text: 'A servant with family power of his own can say no to his ruler' }
        ],
        proves: 'Rulers wanted servants who depended on them for everything.'
      },
      notes: {
        minutes: 2,
        land: [
          'Britannica: "The day after the capture of the city, Çandarlı was arrested and soon afterward was executed in Edirne." The TDV İslâm Ansiklopedisi has him dismissed on 30 May and executed about forty days later, in Edirne or Istanbul; the slide gives neither the day nor the place.',
          'Worth telling the class: in 1446 Halil helped bring Murad II back to the throne in place of the teenage Mehmed, and in 1453 he argued against the siege. That is a servant with family power saying no.',
          'The Çandarlı family held the grand vizierate for most of the years from 1365 to 1453 (about 64 of them, counting the tenures in the standard lists).',
          'Careful: the slide claims only what Mehmed wanted. Most of Mehmed\'s later grand viziers were converts from Balkan and Byzantine noble families; some historians argue the full switch to grand viziers raised through the devshirme came later, under Süleyman. Do not say his next vizier was a devshirme boy.'
        ],
        ask: 'Why would a sultan fear his own chief minister?',
        listenFor: 'The minister had his own family power and could say no.',
        avoid: 'Do not turn this into a story about Mehmed\'s cruelty. The point is the structure: independent power is a threat.'
      }
    },
    {
      phase: 'people', kind: 'split-venn', eyebrow: 'Job One · People Who Serve',
      kc: 'KC-4.3.I.C',
      title: 'Same job, two answers.',
      footer: 'Why different? The Ottomans feared Turkish families; Japan feared warriors with land.',
      template: {
        left: { name: 'Ottoman devshirme', items: ['Christian boys taken from their families', 'Converted and trained', 'Janissaries, governors, even grand viziers'] },
        right: { name: 'Salaried samurai', items: ['An old warrior class', 'Moved off their lands into castle towns', 'A stipend counted in rice'] },
        both: ['Lived on pay, not land', 'No power base of their own']
      },
      notes: {
        minutes: 5,
        land: [
          'Both are the CED\'s own examples for KC-4.3.I.C.',
          'Devshirme: a forced levy of Christian boys, mostly from the Balkans, converted to Islam and trained; the strongest became Janissaries, the ablest went to palace schools and could become governors or grand vizier. It was forced and cruel to the families; say so.',
          'Samurai: after more than a century of civil war between lords with their own lands and armies, starting in the late 1500s most samurai were moved off their lands into castle towns and paid stipends counted in rice. Hideyoshi\'s 1588 sword hunt is part of the same separation of warriors from farmers.',
          'Japan was not a giant empire. The CED lists it as an example; it fits because its rulers and lords faced the same danger, armed warriors with land of their own, and answered it with the same idea. The stipend came from the samurai\'s own lord.',
          'Picture to add when uploaded: the Süleymanname devshirme registration miniature (1558), captioned as an Ottoman court painting.'
        ],
        ask: 'One similarity, one difference, and why they differed.',
        listenFor: 'Both lived on pay, not land of their own; one was a new group of outsiders, the other an old class cut off from its land; because each ruler feared a different rival.',
        ap: 'Comparison: similarity, difference, and the context that explains the difference.'
      }
    },
    {
      phase: 'mansab', kind: 'equation', eyebrow: 'Job One · A Third Answer',
      kc: 'KC-4.3.I.C', title: 'The Mughal mansabdar.',
      footer: 'Rich in the emperor\'s service, but never a kingdom of his own.',
      template: {
        terms: [
          { word: 'A numbered rank', note: 'the mansab set his pay and his horsemen' },
          { word: 'A jagir that moves', note: 'the right to collect the land tax from one area, moved every few years' }
        ],
        result: { word: 'A loyal official', note: 'no inherited rank and no fixed land base' },
        groups: [
          { from: 0, to: 0, label: 'Rank' },
          { from: 1, to: 1, label: 'Pay' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Akbar\'s ranks ran in numbered grades; officials were paid in cash or, more often, by a jagir, which was normally transferred every few years. Rank was not inherited.',
          'Context: Akbar\'s family came from Central Asia, and he ruled a mostly Hindu land where Rajput kings had armies of their own. He ranked the powerful men already there, Muslim and Hindu alike, and gave high ranks to Rajput kings, which turned possible rivals into commanders. Two sentences; it is not a separate lesson.',
          'Mansabdar is not one of the CED\'s named examples. It stays because it links job one to job three: the jagir is pay and a tax system at once.'
        ],
        ask: 'Why move the jagir every few years?',
        listenFor: 'So no official could turn one place into his own kingdom.'
      }
    },
    {
      phase: 'belief', kind: 'split-venn', eyebrow: 'Job Two · Religious Ideas',
      kc: 'KC-4.3.I.A',
      title: 'Two rulers, one claim.',
      footer: 'Why different? Louis inherited his throne; Askia took his by force.',
      template: {
        left: { name: 'Divine right', items: ['Louis XIV, France', 'God chose the king', 'Came with his birth'] },
        right: { name: 'Songhai Islam', items: ['Askia Muhammad', 'Took the throne by force, 1493', 'Caliph, and patron of scholars'] },
        both: ['Tied the ruler to God', 'Gave people a reason to obey']
      },
      notes: {
        minutes: 5,
        land: [
          'Both are CED examples under "Religious ideas" for KC-4.3.I.A: European notions of divine right, and Songhai promotion of Islam.',
          'Askia Muhammad seized the throne in 1493. He made the hajj in the 1490s (sources give 1495 to 1498) and returned with the title of caliph; sources disagree on who granted it, so the slide does not say.',
          'The CED word is "continued": rulers had used religion to justify rule long before 1450, as in Unit 1.',
          'Pictures to add when uploaded: Rigaud\'s Louis XIV (1701), and the Tomb of Askia at Gao, captioned as a modern photograph. UNESCO dates the building to 1495; it is mud brick and has been replastered many times.'
        ],
        ask: 'Why did Askia have to work harder for his religious claim than Louis did?',
        listenFor: 'He took power by force, so he could not claim it by birth.',
        ap: 'Contextualization: how each ruler came to power explains the tool he chose.'
      }
    },
    {
      phase: 'portraits', kind: 'case-file', eyebrow: 'Job Two · Art',
      kc: 'KC-4.3.I.A', title: 'One emperor, two pictures.',
      template: {
        tag: 'Imperial portrait',
        place: 'Qing China',
        date: '1736',
        rows: [
          { label: 'Situation', text: 'The Qing emperors were **Manchus**, outsiders ruling an empire where most people were Han Chinese' },
          { label: 'Picture one', text: 'Court portraits like this one: the yellow and dragons of a **Chinese emperor**, in Manchu court dress' },
          { label: 'Picture two', text: 'The Qianlong Emperor painted as a **Buddhist holy figure**, for Tibetan and Mongol subjects' },
          { label: 'So what', text: 'Same ruler, different picture, depending on who needed convincing' }
        ],
        proves: 'Art made a ruler look rightful to each group he ruled.'
      },
      notes: {
        minutes: 2,
        land: [
          'Qing imperial portraits are a CED example under "Art and monumental architecture."',
          'The Freer Gallery\'s thangka of the Qianlong Emperor as Manjushri (F2000.4): the Smithsonian notes that relations with Mongol and Tibetan subjects "were couched in Buddhist, rather than Confucian, cultural rhetoric."',
          'The picture is the Qianlong Emperor\'s court portrait in a yellow dragon robe, from the handscroll of inauguration portraits of the emperor and his consorts. Its inscription dates it to the eighth month of the first year of Qianlong, 1736. It is by Giuseppe Castiglione, an Italian Jesuit at the Qing court (Cleveland Museum of Art 1969.31). Yellow and dragons were the Chinese imperial color and symbol; the fur hat, the fur collar and the cut of the robe were Qing court dress that kept Manchu features. The handscroll was a private court picture kept in a lacquer box, so call it the court\'s picture of its emperor, not a poster for the public. Picture to add when uploaded: the Manjushri thangka beside it; the thangka\'s face is by Castiglione and the rest was painted by court artists.'
        ],
        ask: 'Who was each picture meant to convince?',
        listenFor: 'One shows the emperor of China, Chinese symbols in Manchu dress; the other speaks to Tibetan and Mongol Buddhists.'
      }
    },
    {
      phase: 'buildings', kind: 'split-venn', eyebrow: 'Job Two · Monumental Architecture',
      kc: 'KC-4.3.I.A',
      title: 'Power you can stand inside.',
      footer: 'Why different? Louis had lived through a revolt of the great nobles.',
      template: {
        left: { name: 'Mughal tombs and mosques', items: ['Giant tombs such as the Taj Mahal', 'Great mosques in their capitals', 'Rich, faithful to Islam, here to stay'] },
        right: { name: 'Versailles', items: ['Louis XIV moves his court there, 1682', 'Nobles compete for the king\'s favor', 'Kept where the king can watch them'] },
        both: ['Made power impossible to miss', 'Cost a fortune']
      },
      notes: {
        minutes: 4,
        land: [
          'Both are CED examples: Mughal mausolea and mosques, and European palaces such as Versailles.',
          'Louis was nine when the Fronde began in 1648; from 1650 great nobles took up arms against the crown. Britannica connects his later policies to that memory. At Versailles the great nobles lived at court, away from their regional power bases.',
          'Versailles does two jobs at once: a symbol, and a way to keep the nobles under the king\'s eye. That is the twist this slide earns.',
          'Picture to add when uploaded: a modern photograph of the Taj Mahal or Humayun\'s Tomb, captioned as modern.'
        ],
        ask: 'What second job did Versailles do that a tomb did not?',
        listenFor: 'It kept the nobles at court, where the king could watch them.'
      }
    },
    {
      phase: 'collect', kind: 'split-venn', eyebrow: 'Job Three · Who Collects',
      kc: 'KC-4.3.I.D',
      title: 'Two middlemen, two reasons.',
      footer: 'Why different? The sultan needed cash now; the Mughals worked through local landholders.',
      template: {
        left: { name: 'Ottoman tax farming', items: ['The state sells the right to collect', 'The bidder pays the state a set sum, keeps the extra', 'Grew in the late 1500s'] },
        right: { name: 'Mughal zamindars', items: ['Local landholders who held their villages', 'Right usually passed down in the family', 'Kept a share of what they collected'] },
        both: ['A middleman collects the tax', 'The people paying could be squeezed']
      },
      notes: {
        minutes: 4,
        land: [
          'Both are CED examples under "Tax-collection systems" for KC-4.3.I.D.',
          'Britannica, iltizam: the state "auctioned taxation rights to the highest bidder," who collected and kept a part. It spread in the second half of the 1500s as the sultans paid more salaried soldiers in cash.',
          'Zamindars held a hereditary claim to a share of the produce and collected the land tax for the state.',
          'The overlap line "could be squeezed" is said of tax farmers in the reading. For zamindars, say "could", not "were".'
        ],
        ask: 'Why would a sultan sell the right to collect his own taxes?',
        listenFor: 'He needed money now, to pay soldiers.'
      }
    },
    {
      phase: 'paid', kind: 'split-mirror', eyebrow: 'Job Three · What Was Paid',
      kc: 'KC-4.3.I.D',
      title: 'Goods, or coin?',
      footer: 'Where China\'s silver came from is a Unit 4 story.',
      template: {
        left: { name: 'Mexica tribute' },
        right: { name: 'Ming taxes in silver' },
        rows: [
          { label: 'Who paid', left: 'Conquered provinces', right: 'Taxpayers across the empire' },
          { label: 'What', left: 'Cotton cloaks, cacao, feathers, warrior costumes', right: 'Silver, in place of many separate taxes and labor duties' },
          { label: 'So what', left: 'Wealth moved from conquered provinces to the capital, recorded in painted lists', right: 'One simpler tax, easier to collect' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Both are CED examples: Mexica tribute lists, and the Ming practice of collecting taxes in hard currency.',
          'The surviving tribute lists (the Codex Mendoza, c. 1541, probably copied from the Matrícula de Tributos) were made around or just after the Spanish conquest. Say so if you show one.',
          'The Single Whip reform combined land tax, labor service and other levies into one payment in silver; it spread empire-wide around 1580. Stop there. The silver flows from Japan and the Americas are Unit 4.',
          'Pictures to add when uploaded: a Codex Mendoza tribute page and a Ming silver ingot a museum dates to the Ming.'
        ],
        ask: 'Which system needed coins to work?',
        listenFor: 'The Ming silver tax.'
      }
    },
    {
      phase: 'fit', kind: 'grid', eyebrow: 'How It Fits Together',
      kc: 'Unit 3: Learning Objective B',
      title: 'The three jobs hold each other up.',
      cards: [
        { title: 'MONEY', text: 'paid the people who served.' },
        { title: 'PEOPLE', text: 'collected the money.' },
        { title: 'SYMBOLS', text: 'made serving and paying feel right.' },
        { title: 'SO', text: 'Every ruler did all three, with tools that fit his own situation.' }
      ],
      notes: {
        minutes: 2,
        land: [
          'This is the landing of the reading. The best tools did two jobs at once: a jagir paid an official and tied him to the emperor; Versailles was a symbol and a way to watch the nobles.'
        ],
        ask: 'Name one tool that did two jobs.',
        listenFor: 'The jagir, or Versailles.'
      }
    },
    {
      retelling: true, phase: 'tree', kind: 'branch-tree', eyebrow: 'The Whole Topic',
      kc: 'Unit 3: Learning Objective B',
      title: 'How rulers held what guns won.',
      footer: 'Each branch: same job, two rulers, and why they differed.',
      template: {
        claimLabel: 'The claim',
        claim: 'Conquest wins land. **People, symbols and money** hold it.',
        branches: [
          { label: 'People who serve', note: 'Who will serve me?', items: ['Devshirme', 'Salaried samurai', 'Mansabdars'] },
          { label: 'Symbols that justify', note: 'Why should anyone obey me?', items: ['Divine right / Songhai Islam', 'Qing portraits', 'Versailles / Mughal tombs'] },
          { label: 'Systems that pay', note: 'Who pays?', items: ['Tax farming / Zamindars', 'Mexica tribute', 'Ming silver'] }
        ]
      },
      notes: {
        minutes: 5,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it, and have students redraw the trunk and the three branches with one pair on each.',
          'A student who can redraw it, and say why each pair differs, can answer any 3.2 prompt by choosing a branch and a pair.'
        ],
        ask: 'Pick a branch. Which two rulers did that job, and why did they do it differently?',
        listenFor: 'A pair from the right branch, and a situation that explains the difference.'
      }
    },
    {
      phase: 'frame', kind: 'sentence-frame', eyebrow: 'Say It in One Sentence',
      title: 'Compare, then explain why.',
      footer: 'The last blank is the context: the situation each ruler was in.',
      template: {
        frame: 'Both {{ruler A}} and {{ruler B}} {{did the same job}} by {{a shared method}}, but {{how they differed}}. They differed because {{the situation each was in}}.',
        exampleLabel: 'Filled in',
        example: 'Both **the Ottoman sultans** and **Japan\'s rulers** **gave themselves loyal fighters** by **paying them so they had no power base of their own**, but **the Ottomans built a new group out of Christian boys while Japan moved an old warrior class off its land**. They differed because **the Ottomans feared powerful Turkish families, and Japan\'s rulers and lords, after a century of civil war, feared warriors with land of their own**.'
      },
      notes: {
        minutes: 4,
        land: [
          'Model the filled-in sentence, then have students write one for a different pair.',
          'A comparison without the "because" is a list. The "because" is where contextualization earns its place.'
        ],
        ask: 'Write one for a different pair.',
        listenFor: 'Both, but, because: a shared job, a difference, and a situation.',
        ap: 'Comparison (the CED reasoning process for 3.2) with contextualization (its suggested skill).'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'How did rulers get people to serve them?',
      subtitle: 'On your own. Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-2-empires-administration.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'Independent. Checkpoint 1 checks Learning Target 1 (KC-4.3.I.C): compare two ways rulers built loyal officials or soldiers.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name both systems, one similarity, one difference, and why.',
        listenFor: 'Two named systems and a reason rooted in each ruler\'s situation.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'Cite one concrete detail from each source, and name one limit of either.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-2-empires-administration.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'Students choose two cards from different empires. Observation before inference: what the source shows, then what it suggests about one of the three jobs.',
          'A court painting or a palace shows how a ruler wanted to be seen. It cannot show how taxes were really collected; that is the limit to name.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'One symbol, and one way to pay.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-2-empires-administration.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 checks Learning Targets 2 and 3: one religious idea, art or building that made a ruler\'s power look rightful, and one revenue system, each with the situation that ruler was in.'
        ],
        ask: 'Does each example say what situation the ruler was in?',
        listenFor: 'A named tool, how it helped, and the ruler\'s situation.'
      }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Topic 3.2 · Landing Sentence',
      kc: 'Unit 3: Learning Objective B',
      title: 'Guns win land. People, symbols and money hold it.',
      subtitle: 'From 1450 to 1750, rulers kept control with servants who depended on them, made their rule look rightful with religion, art and buildings, and paid for it with tribute and taxes, each choosing tools that fit his situation.',
      notes: {
        minutes: 3,
        land: [
          'This sentence answers the Topic 3.2 learning objective: the methods rulers used to legitimize and consolidate power.',
          'Hand off to 3.3: rulers used religion to justify their power. But what happened to religion itself in these same centuries?'
        ],
        ask: 'What is the one-sentence answer to Topic 3.2?',
        listenFor: 'People who serve, symbols that justify, systems that pay, chosen to fit each ruler\'s situation.'
      }
    }
  ]
};
