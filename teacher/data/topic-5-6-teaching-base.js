/*
 * Topic 5.6 canonical Teaching OS source.
 * CED: Fall 2026 p. 105 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Causation. Suggested skill: 5.A Making Connections (identify patterns among
 * or connections between historical developments and processes). Learning
 * objective G: explain the causes and effects of economic strategies of
 * different states and empires. Key Concepts: KC-5.1.V.C (as the influence of
 * the Industrial Revolution grew, a small number of states and governments
 * promoted their own state-sponsored visions of industrialization) and
 * KC-5.2.II.A (the expansion of U.S. and European influence in Asia led to
 * internal reform in Japan that supported industrialization and led to the
 * growing regional power of Japan in the Meiji Era). Illustrative example
 * (optional): Muhammad Ali's development of a cotton textile industry in
 * Egypt. No sample activity.
 * Story: docs/TOPIC-5-6-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Industry on
 * Purpose" is written from the same story, and this deck retells it.
 * Spine: afraid of stronger industrial powers, a few governments decided not
 * to wait for industry and built it themselves, to make their states strong.
 * Muhammad Ali's Egypt built factories for an army, and most of them closed
 * by the mid-1840s; Meiji Japan reformed itself, built railways and
 * mills, sold them to private companies, and became a regional power.
 * Wall version: The state built the factories. Japan's lasted. Egypt's mostly
 * closed.
 * Retelling slide: the two cases side by side (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 06 Checkpoint 1,
 * 10 Checkpoint 2 (Jeff's rule of 2026-10-23: 02, 06 and 10 on every topic,
 * plus at least one chosen; 05 practises the CED's suggested skill, 5.A).
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.6',
    minutes: 90,
    title: 'Industrialization: Government’s Role from 1750 to 1900',
    subtitle: 'Afraid of stronger industrial powers, a few governments decided not to wait for industry and built it themselves, to make their states strong. Muhammad Ali’s Egypt built factories for an army, and most of them had closed by the mid-1840s; Meiji Japan reformed itself, built railways and mills, sold them to private companies, and became a regional power.',
    essentialQuestion: 'Why did a few governments build industry themselves, and what happened when they did?',
    apFocus: 'Causation, with Making Connections 5.A (patterns)',
    endTarget: 'Students can explain the causes and effects of two states\' economic strategies from 1750 to 1900: the wish for armies to match stronger powers led Muhammad Ali\'s Egypt and Meiji Japan to build industry with state money, foreign machines and experts, paid for by farmers; Egypt\'s factories supplied an army that won wars until European pressure, missing coal and forced labor closed most of them; U.S. and European pressure led Japan to reform itself, build industry, sell it to private companies and become a regional power. They can name the pattern the two cases share and the difference in their results.'
  },

  priorities: {
    must: [
      'Teach causes AND effects for each state: the threat, the decision, the strategy, the result (the retelling slide, 21).',
      'Teach KC-5.1.V.C with the CED\'s own example: Muhammad Ali\'s cotton textile industry (slides 6 to 9), and say "a small number of states" (slide 5).',
      'Teach all of KC-5.2.II.A as a chain: U.S. and European pressure led to internal reform, which supported industry, which led to regional power (slides 12 to 16).',
      'Model 5.A: put two cases side by side, name the pattern, then name the difference the pattern does not explain (slides 11, 18 and 19).'
    ],
    should: [
      'Weigh the causes of Egypt\'s result: European pressure, missing coal, drafted workers, inexperienced managers. Historians still disagree (slide 9).',
      'Say that Japan\'s state started its industry and private companies carried it on: the 1880 decision to sell (slide 15).',
      'Correct three myths: "Japan just copied the West," "Muhammad Ali was building an Egyptian nation," and "one cause explains Egypt\'s result."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Industry on Purpose."',
      'Use the Primary Source, the Charter Oath (1868), as an extension for early finishers.',
      'For a class that is ahead: Japan also had to accept low tariffs. Why does that matter to the "Europe killed Egypt\'s factories" explanation? (slide 19).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.3 to 5.5. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the 1872 railway print.', students: 'Predict who paid for this railway.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Industry on Purpose" in class.', students: 'Build two chains as they read.', slide: 4 },
    { id: 'exception', label: 'The Exception', range: '17-19', minutes: 2, teacher: 'Most factories were private. A few states built their own.', students: 'Say why a ruler would.', slide: 5 },
    { id: 'egypt-ruler', label: 'Egypt: The Ruler', range: '19-21', minutes: 2, teacher: 'Muhammad Ali and what he wanted.', students: 'Name the threat and the aim.', slide: 6 },
    { id: 'egypt-strategy', label: 'Egypt: The Strategy', range: '21-23', minutes: 2, teacher: 'Crops, cotton, factories, an army.', students: 'Follow the money.', slide: 7 },
    { id: 'egypt-result', label: 'Egypt: It Worked, Then It Stopped', range: '23-25', minutes: 2, teacher: 'From 1822 to the 1840s.', students: 'Say what changed in 1840 and 1841.', slide: 8 },
    { id: 'egypt-why', label: 'Why Did Egypt\'s Factories Close?', range: '25-27', minutes: 2, teacher: 'Rank four causes historians weigh.', students: 'Rank and defend number one.', slide: 9 },
    { id: 'cp1', label: 'Checkpoint 1', range: '27-35', minutes: 8, teacher: 'Module 06: Egypt\'s strategy, on their own.', students: 'Work without the coach.', slide: 10 },
    { id: 'model', label: 'Find the Pattern', range: '35-37', minutes: 2, teacher: 'Model 5.A on an everyday case.', students: 'Say the pattern and the difference.', slide: 11 },
    { id: 'japan-threat', label: 'Japan: Ships and Treaties', range: '37-39', minutes: 2, teacher: 'Perry and the unequal treaties.', students: 'Name what the treaties took away.', slide: 12 },
    { id: 'oath', label: 'The Charter Oath', range: '39-41', minutes: 2, teacher: 'Article 5, read together.', students: 'Say what it promises, and why.', slide: 13 },
    { id: 'japan-reform', label: 'Japan: Reform First', range: '41-43', minutes: 2, teacher: 'The reforms that supported industry.', students: 'Link one reform to industry.', slide: 14 },
    { id: 'japan-build', label: 'Japan: Build It, Then Sell It', range: '43-45', minutes: 2, teacher: 'Railway, silk mill, shipyards; the 1880 sale.', students: 'Say who started it and who carried it on.', slide: 15 },
    { id: 'japan-power', label: 'Japan: A Regional Power', range: '45-47', minutes: 2, teacher: 'Treaty revision, the war with China, Shimonoseki.', students: 'Give one piece of evidence.', slide: 16 },
    { id: 'skill', label: 'Skill Builder', range: '47-55', minutes: 8, teacher: 'Module 05: Making Connections 5.A.', students: 'Find the pattern across Egypt and Japan.', slide: 17 },
    { id: 'pattern', label: 'The Pattern', range: '55-58', minutes: 3, teacher: 'What both cases share.', students: 'Sort into the Venn.', slide: 18 },
    { id: 'difference', label: 'The Difference', range: '58-60', minutes: 2, teacher: 'Four reasons the results differed.', students: 'Choose the strongest reason.', slide: 19 },
    { id: 'myths', label: 'Myth and Evidence', range: '60-62', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 20 },
    { id: 'retell', label: 'Two States, One Pattern', range: '62-65', minutes: 3, teacher: 'Students redraw the two chains.', students: 'Retell the whole topic.', slide: 21 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '65-66', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 22 },
    { id: 'evidence', label: 'Evidence Lab', range: 'Optional', minutes: 0, teacher: 'Optional, Module 07: two sources, one link in a chain.', students: 'Observe, then infer, then name a limit.', slide: 23 },
    { id: 'cp2', label: 'Checkpoint 2', range: '66-78', minutes: 12, teacher: 'Module 10: Japan\'s chain and the pattern. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 24 },
    { id: 'close', label: 'Landing Sentence', range: '78-80', minutes: 2, teacher: 'Land the answer and hand off to 5.7.', students: 'Say the topic in one sentence.', slide: 25 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.6', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-6-industrialization-government-and-society-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-6-industrialization-government-and-society.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-6-slide',
    title: 'Topic 5.6 Presentation',
    file: 'present-topic-5-6.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'The state built the factories. Japan\'s lasted. Egypt\'s mostly closed.',
      subtitle: 'Causation, with Making Connections 5.A. Why did a few governments build industry themselves, and what happened when they did?',
      notes: {
        minutes: 2,
        land: [
          'CED p. 105. One learning objective, G (Governance): explain the causes and effects of economic strategies of different states and empires. The reasoning process is Causation (p. 95); the suggested skill is 5.A, identify patterns among or connections between historical developments and processes.',
          'Key Concepts: KC-5.1.V.C (as the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization); KC-5.2.II.A (the expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era).',
          'The CED\'s one illustrative example, which it calls optional, is Muhammad Ali\'s development of a cotton textile industry in Egypt. Japan is named in KC-5.2.II.A itself. This deck uses those two cases and no other, as the unit story map decides. There is no CED sample activity for 5.6.',
          'Owns: state-sponsored industry (KC-5.1.V.C) and Meiji reform, industry and regional power (KC-5.2.II.A). Bridge only: the spread of industry to Japan (5.4); the technologies themselves (5.5); free trade as an idea (5.7); Ottoman and Qing reforms and their resistance (5.8, KC-5.1.V.B); classes, ideologies and reform laws (5.8, 5.9); empire, including what Japan did in Taiwan and Korea and Egypt\'s later debts and the British occupation of 1882 (Unit 6). Russia\'s state-led industry is not a case here.',
          'The old 5.6 taught classes, liberalism, socialism, Marx, British reform laws, Bismarck and women\'s suffrage. The CED gives all of that to 5.8 and 5.9. If a student raises it, say so and park it.',
          'Three myths, on slide 20: "Japan just copied the West"; "Muhammad Ali was building an Egyptian nation"; "one cause explains Egypt\'s result."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Afraid of stronger industrial powers, a few governments built industry themselves; Egypt\'s factories supplied an army and mostly closed; Japan reformed, built and sold its industries, and became a regional power.',
        avoid: 'Avoid two lists of facts, one per country. The CED asks for causes and effects, and the skill asks for a pattern: every fact on a slide is a link in a chain, and the two chains are compared. And avoid "Britain destroyed Egypt\'s industry" as the whole answer: the evidence points to several causes.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.4', text: 'Name two places outside Britain where factory methods spread.' },
          { label: 'Topics 5.3 and 5.4', text: 'Who paid for the first factories in Britain and the United States?' },
          { label: 'Topic 5.5', text: 'Name one technology that made industrial countries stronger.' }
        ],
        turn: 'Factories made some countries **strong**. If you ruled a country without them, and you were **afraid**, would you wait for private owners to build them, **or build them yourself?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: any two of other parts of Europe (Belgium, the German states), the United States, Russia, Japan; private owners and investors (Arkwright at Cromford in 5.3, the Boston merchants who paid for the Lowell mills in 5.4); the steam engine, railroads, steamships, the telegraph, steel (5.5).',
          'The bridge is 5.5\'s hand-off line: "A few governments did not wait for these machines to arrive on their own. They decided to build industry themselves." Prompt 2 returns on slide 5: private owners were the rule, and these states were the exception.'
        ],
        ask: 'Who paid for Arkwright\'s mill?',
        listenFor: 'Arkwright and his partners: private money. Today is about governments that paid themselves.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'Why would a government build its own factories?',
      subtitle: 'And what happened when it did?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real print, signed Baidō Kunimasa: "First Steam Train Leaving Yokohama," color woodblock triptych, about 1872 (Library of Congress, Chadbourne collection, no known restrictions; the Library catalogs it under Utagawa Kunisada, 1823 to 1880, and the signature may be that of the younger Kunimasa, later Kunisada III). The three sheets are shown side by side.',
          'Japan\'s first railway, Tokyo to Yokohama, opened in October 1872. The government built it, with British loans and British engineers. Japanese artists sold prints of the new train to a public that had never seen one.',
          'A print made to sell, not a photograph: the cherry blossoms, the harbor full of ships and the smiling passengers are the artist\'s choices. It shows what the railway meant to people in Tokyo, not exactly what the first train looked like.'
        ],
        ask: 'Predict: who paid for this railway: a company, or the government? Why might a government want to pay?',
        listenFor: 'The government. Guesses about power, defense, keeping up with Europe and America. Check the guesses on slide 15.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read, and build two chains.',
      subtitle: 'One chain for Egypt and one for Japan, with the same four links: the threat, the decision, the strategy, the result.',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "Industry on Purpose" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who write links, not lists: "Muhammad Ali feared stronger armies, so he built factories to supply his own," not "Muhammad Ali, 1805."',
          'Question 01 asks for one cause and one effect of Muhammad Ali\'s factories; question 02 traces U.S. and European pressure to a Meiji reform and on to industry or strength; question 03 names the pattern and the difference. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which link in either chain surprised you most?',
        listenFor: 'That Egypt\'s factory workers were drafted; that Egypt had almost no coal; that Japan sold its factories; that Japan beat China only forty years after Perry.'
      }
    },
    {
      phase: 'exception', kind: 'story-steps', eyebrow: 'The Exception',
      kc: 'KC-5.1.V.C', title: 'Most factories were private. A few states built their own.',
      footer: 'Two of the clearest cases: Egypt under Muhammad Ali, and Japan in the Meiji era.',
      template: {
        steps: [
          { label: 'The rule', text: 'In Britain and the United States, **private owners** built the first factories.' },
          { label: 'The pressure', text: 'Countries with factories, steam and new weapons grew **stronger**.' },
          { label: 'The fear', text: 'A country without industry could be **beaten**, or forced to sign treaties.' },
          { label: 'The exception', key: true, text: 'A **small number** of governments built industry themselves.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.V.C: "a small number of states and governments promoted their own state-sponsored visions of industrialization." The words to stress are "small number." Most early industry was private; this topic is the exception.',
          'The rule comes from 5.3 and 5.4: Arkwright and his partners at Cromford; the Boston merchants who paid for the Lowell mills. Governments elsewhere helped in other ways (patents, tariffs, canals), but they did not usually own the factories.',
          'The fear is the cause in the learning objective: "the causes and effects of economic strategies." Both of today\'s states acted because they feared stronger industrial powers.'
        ],
        ask: 'Why would a ruler rather build factories than wait for merchants to do it?',
        listenFor: 'Speed; control; the factories serve the state\'s goals (an army); no private owner had the money or the will.',
        ap: 'KC-5.1.V.C ("a small number of states").'
      }
    },
    {
      phase: 'egypt-ruler', kind: 'story-scene', eyebrow: 'Egypt · The Ruler',
      kc: 'KC-5.1.V.C', title: 'A governor who wanted power of his own.',
      footer: 'The cause: a ruler who wanted an army like Napoleon\'s, strong enough to keep Egypt for his family.',
      template: {
        steps: [
          { label: '1798', text: 'Napoleon\'s French army **defeats Egypt\'s rulers**.' },
          { label: '1805', text: '**Muhammad Ali**, an Ottoman officer from an Albanian family, becomes governor.' },
          { label: '1811', text: 'He destroys his rivals and **rules alone**.' },
          { label: 'Aim', key: true, text: 'Hold Egypt for **his family**, even against the sultan. That needs an **army** like Napoleon\'s.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The Library of Congress\'s Egypt: A Country Study: the French "defeated the Mamluk army at Shubra Khit and Imbabah, and entered Cairo on July 25" (1798); Muhammad Ali came in 1801 with "the Albanian contingent of Ottoman forces"; the Ottomans appointed him governor in June 1805; in March 1811 his rivals, the Mamluk leaders, were killed in the Cairo Citadel, and "from then on, Muhammad Ali was the sole ruler of Egypt."',
          'His aim: the Country Study says he "wanted to detach Egypt from the Ottoman Empire, and he realized that to do so Egypt had to be strong economically and militarily." The historian Khaled Fahmy argues that the army served his "dynastic needs": hereditary rule for his family, inside the empire. The deck says "hold it for his family, even against the sultan," which both support.',
          'Why the French mattered: the OER Project\'s AP World article says Egypt "lost to Napoleon\'s French army in 1798" and that Muhammad Ali "put in motion a campaign of modernization, beginning with his military." Muhammad Ali himself arrived in 1801, after the French had gone; the lesson says the victory showed what a modern European army could do, not that he saw it.',
          'He was an Ottoman governor, not an Egyptian nationalist: his court\'s official language was Ottoman Turkish (myth 2, slide 20).',
          'The picture is a real portrait: Auguste Couder, Muhammad Ali, oil on canvas, about 1840 to 1841, commissioned by the French king Louis-Philippe for his history museum at Versailles (public domain, mirrored from Wikimedia Commons). A commissioned portrait is an argument about the sitter: dress, pose and setting are chosen, and here a French painter chose them for a French museum.'
        ],
        ask: 'What did Egypt\'s rulers lose to in 1798, and what might a new governor learn from it?',
        listenFor: 'A European army with modern weapons beating Egypt\'s rulers easily.',
        ap: 'KC-5.1.V.C (the cause); LO G.'
      }
    },
    {
      phase: 'egypt-strategy', kind: 'equation', eyebrow: 'Egypt · The Strategy',
      kc: 'KC-5.1.V.C', title: 'Crops paid for factories. Factories supplied an army.',
      footer: 'Who paid in the end? Egypt\'s peasants, with their crops and their labor.',
      template: {
        terms: [
          { word: 'Control of farming', note: 'the state buys crops cheap and sells cotton abroad (long-staple cotton from 1820)' },
          { word: 'Foreign machines', note: 'European machines and experts; drafted workers; British cloth kept out' }
        ],
        result: { word: 'Factories for an army', note: 'by the early 1830s, about 30 cotton mills with about 30,000 workers, and an army of about 130,000' }
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.V.C, with the CED\'s example: "Muhammad Ali\'s development of a cotton textile industry in Egypt."',
          'Control of farming: "the peasants were told what crops to plant ... The government bought directly from the peasants and sold directly to the buyer" (LoC Country Study). Panza and Williamson (Economic History Review, 2015): "the state purchased agricultural commodities (cotton and wheat) at low prices." A monopoly: one buyer. Long-staple cotton was introduced in 1820 (Roger Owen, British Academy).',
          'Factories: Joel Beinin (MERIP, 1981): "Beginning in 1819 his regime built European style factories," with textiles "the leading element"; "By the early 1830s 30 cotton mills were in operation with a labor force of 30,000." The Country Study: "Workers were drafted into factories to weave on government looms," with "foreign advisers and imported machinery," protected by embargoes on "cheap British textiles." Many mills made cloth for army uniforms (OER Project).',
          'The army: Khaled Fahmy (International Review of Social History, 1998): the first order to draft Egyptian peasants came in early 1822, and the army reached "130,000 troops less than ten years later." He writes that the schools, factories and hospitals "were all founded to serve it."'
        ],
        ask: 'Follow the money: where did it start, and where did it end up?',
        listenFor: 'Peasants\' crops, sold abroad by the state, paid for the factories, which supplied the army.',
        ap: 'KC-5.1.V.C (the strategy).'
      }
    },
    {
      phase: 'egypt-result', kind: 'timeline', eyebrow: 'Egypt · The Result',
      kc: 'KC-5.1.V.C', title: 'It worked. Then it stopped.',
      footer: 'By the mid-1840s, about a decade after their peak, most of the new factories had failed.',
      template: {
        range: [1820, 1850],
        tick: 10,
        events: [
          { year: 1822, label: '1822', text: 'Peasants drafted into a new army' },
          { year: 1831, label: '1831', text: 'The army invades Syria and beats the sultan\'s armies' },
          { year: 1838, label: '1838', text: 'A British and Ottoman trade treaty bans monopolies' },
          { year: 1840, label: '1840', text: 'British warships and Ottoman troops drive Egypt out of Syria' },
          { year: 1841, label: '1841', text: 'Army cut to 18,000 in peacetime; Egypt must accept the 1838 treaty' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'For a while the strategy worked: Muhammad Ali\'s son Ibrahim invaded Syria in 1831 and beat Ottoman armies at Konya (December 1832) and Nezib (June 1839).',
          'Then it stopped. Britain, Austria, Russia and Prussia sided with the sultan (the Convention of London, July 1840). The Country Study: "A British fleet bombarded Beirut in September 1840, and an Anglo-Turkish force landed." Under the settlement of 1841, Muhammad Ali "was stripped of all the conquered territory except Sudan but was granted the hereditary governorship of Egypt"; the sultan\'s decree reads "In time of peace, 18,000 men will suffice." He "was also compelled to agree to the Anglo-Ottoman Convention of 1838 ... forced to abandon his monopolies and establish new tariffs that were favorable to imports." Ahmeti and Rizaj (2024): the 1838 treaty was signed by the Ottoman government and Britain; Egypt complied by 1842.',
          'The footer: Beinin, "a decade later most of these new factories had failed." Slide 9 asks why.'
        ],
        ask: 'Which two events, 1840 and 1841, came from outside Egypt?',
        listenFor: 'The powers drove Egypt out of Syria; the army was cut and the 1838 treaty ended the monopolies.',
        ap: 'KC-5.1.V.C (the effects); LO G.'
      }
    },
    {
      phase: 'egypt-why', kind: 'cause-rank', eyebrow: 'Egypt · Weigh the Causes',
      kc: 'KC-5.1.V.C', title: 'Why did most of Egypt\'s factories close?',
      template: {
        causes: [
          { label: 'Pressure from Europe', note: 'Army cut to 18,000; monopolies banned; cheap British cloth let in' },
          { label: 'Almost no coal', note: 'Many machines turned by animals instead of steam' },
          { label: 'Drafted workers', note: 'People forced into mills resisted the work' },
          { label: 'New managers', note: 'Little experience running factories' }
        ],
        prompt: 'Rank them 1 to 4. **Defend your number one** in one sentence.'
      },
      notes: {
        minutes: 2,
        land: [
          'All four are in Joel Beinin\'s list: the factories failed "because of inexperienced management, lack of adequate natural resources (especially fuel), peasant resistance to factory discipline and competition from Europe." The Country Study adds the 1838 treaty and the 1841 settlement.',
          'Coal: the OER Project says Egypt\'s factories "ran on animal power" because Egypt lacked coal; older studies note that some steam engines were installed and coal was imported. So "many machines," not "all."',
          'There is no single right answer, and historians still disagree. Panza and Williamson (2015) argue that "his policies were successful" while they lasted; Afaf Lutfi al-Sayyid Marsot stresses British hostility; Beinin and Fahmy stress the problems inside. Grade the reason, not the rank.'
        ],
        ask: 'Who put "pressure from Europe" first? Who put it last? Defend both.',
        listenFor: 'A ranking with a reason: "without coal, the mills could never compete, even with protection"; "once the army was cut, the mills lost their biggest customer and their protection."',
        ap: 'Causation: weighing causes.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'Why did Muhammad Ali build factories, and what happened to them?',
      subtitle: 'On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 06 is required. Checkpoint 1 assesses Target 1 (KC-5.1.V.C): why Muhammad Ali\'s government built industry, what it did, and two causes of the result, one from outside Egypt and one from inside.'
        ],
        ask: 'Which cause from outside Egypt did you use, and which from inside?',
        listenFor: 'The 1840 and 1841 settlement or the 1838 treaty; missing coal, drafted workers or new managers.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Making Connections 5.A · Model',
      title: 'Find the pattern, then the difference.',
      footer: 'A pattern is what two cases share. The difference is what the pattern does not explain.',
      template: {
        frame: 'Both {{case A}} and {{case B}} {{did the same things}}. That is the pattern. But {{case A}} {{had one result}}, while {{case B}} {{had another}}, because {{a reason}}.',
        exampleLabel: 'An everyday case',
        example: 'Both **two friends** trained for a 5K race, **running every morning on the same phone plan**. That is the pattern. But **one finished the race**, while **the other was hurt in the second week**, because **she skipped stretching**.'
      },
      notes: {
        minutes: 2,
        land: [
          'Skill 5.A: "Identify patterns among or connections between historical developments and processes." A pattern is the same links showing up in different cases. The everyday case is deliberately unlike the history, so students learn the move, not the answer.',
          'Model it aloud, then ask students to say the frame back with the race case before they try it on Egypt and Japan (the Skill Builder, slide 17).',
          'The second sentence matters: a pattern does not explain everything, and naming the difference is what makes the comparison useful.'
        ],
        ask: 'What is the pattern in the race case, in one sentence?',
        listenFor: 'Both friends prepared for the race the same way.',
        ap: 'Making Connections 5.A.'
      }
    },
    {
      phase: 'japan-threat', kind: 'story-scene', eyebrow: 'Japan · The Threat',
      kc: 'KC-5.2.II.A', title: 'Ships that changed a government.',
      footer: 'The cause: U.S. and European influence pressed on Japan.',
      template: {
        steps: [
          { label: '1853', text: 'Commodore **Perry** sails American warships into Edo Bay. Japan has **no navy** to stop him.' },
          { label: 'Demand', text: 'Open Japan\'s ports to **trade**.' },
          { label: '1854, 1858', text: 'Treaties open ports and let foreigners be tried in **their own courts**.' },
          { label: 'Lost', key: true, text: 'Japan\'s control of its **own trade**: these are unequal treaties.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.2.II.A begins here: "The expansion of U.S. and European influence in Asia led to internal reform in Japan."',
          'Columbia University\'s Asia for Educators: in 1853 Perry\'s squadron entered the bay near Edo (Tokyo); "It was clear that Commodore Perry could impose his demands by force. The Japanese had no navy with which to defend themselves." The 1854 treaty allowed "trade at two ports"; the 1858 treaty "opened more ports." The treaties "limited its control over its own foreign trade and required that crimes concerning foreigners in Japan be tried not in Japanese but in Western courts." Britain, Russia, France and the Netherlands made treaties too. A tariff convention of 1866 set import duties at a uniform 5 percent (Japan Customs); Japan won back full control of its tariffs only in 1911.',
          'Some samurai blamed the shogun for giving in, and in 1868 they overthrew him (slide 13).',
          'The picture is a real Japanese broadsheet: "United States of North America: Perry arrives in Uraga, Sōshū Province," woodblock print (Library of Congress, no known restrictions). It shows Perry\'s steamship, an American sailor, a strip of coast labeled Shimoda and Izu, and the crests of the lords ordered to guard the coast. The Library dates it only to between 1850 and 1900; a note on it gives the date of Perry\'s arrival, 8 July 1853.'
        ],
        ask: 'Which of the treaty terms would anger you most if you were a samurai?',
        listenFor: 'Foreigners tried in their own courts; losing control of trade; giving in without a fight.',
        ap: 'KC-5.2.II.A (the cause).'
      }
    },
    {
      phase: 'oath', kind: 'source-quote', eyebrow: 'A Voice from 1868',
      kc: 'KC-5.2.II.A', title: 'What did Japan\'s new leaders promise?',
      footer: 'The Charter Oath, issued in April 1868 in the name of the fifteen-year-old emperor, Meiji.',
      template: {
        quote: 'Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule.',
        attribution: { author: 'The Charter Oath, 1868', work: 'Article 5, translated by Akihiko Tanaka', year: '' },
        notice: 'Seek knowledge where? And to strengthen what?'
      },
      notes: {
        minutes: 2,
        land: [
          'In 1868 a group of young samurai overthrew the shogun and governed in the name of the teenage emperor: the Meiji Restoration. In April 1868 they issued the Charter Oath, five short articles (Columbia, Asia for Educators: written by "a group of the young samurai," in the name of the Emperor Meiji, "who was only 15 years old at the time").',
          'Article 5, in Akihiko Tanaka\'s translation ("The World and Japan" database, GRIPS and the University of Tokyo). Other translations read "foundation" or, in the official English translation of the emperor\'s 1946 rescript, printed in Foreign Relations of the United States, 1946, vol. VIII, "to promote the prosperity of the Empire." The full Oath is the lesson\'s Primary Source.',
          'Read it as a decision: learn from the world, but for Japan\'s own purpose. The new government\'s slogan was "Rich country, strong army" (fukoku kyōhei).'
        ],
        ask: 'Learn from the world, but why? What is the knowledge for?',
        listenFor: 'To make the emperor\'s government, and Japan, strong: the aim, in their own words.',
        ap: 'KC-5.2.II.A (internal reform); sourcing.'
      }
    },
    {
      phase: 'japan-reform', kind: 'story-scene', eyebrow: 'Japan · Reform First',
      kc: 'KC-5.2.II.A', title: 'Japan changed itself before it built factories.',
      footer: 'Reform made industry possible, and paid for it.',
      template: {
        steps: [
          { label: '1871', text: 'The old lords\' domains are **abolished**: one central state.' },
          { label: 'Army', text: 'Samurai lose their privileges; men of **every class** are drafted.' },
          { label: '1872', text: 'A national **school system** begins.' },
          { label: 'Tax', key: true, text: 'A **land tax paid in money** gives the government money to spend.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.2.II.A\'s middle link: "internal reform in Japan that supported industrialization." Ask how each reform supported industry.',
          'Columbia, Asia for Educators: "in 1871 these domains were abolished and transformed into prefectures of a unified central state"; "The samurai lost their class privileges"; "a national army based on universal conscription"; "in 1872 the government established a national system to educate the entire population"; "A national land tax system was established that required payment in money instead of rice ... This gave the government money to spend to build up the strength of the nation."',
          'Links to industry: one central state could plan for the whole country; schools trained workers and engineers; the land tax paid for the railways and factories on slide 15; men freed from class rules could choose new work.',
          'The picture is a real photograph: five leaders of the Iwakura Mission, which toured the United States and Europe from December 1871 to September 1873 to study how they worked. Iwakura Tomomi, in the center, wears Japanese dress; the others wear Western suits (public domain, mirrored from Wikimedia Commons).'
        ],
        ask: 'Pick one reform. How did it help Japan build industry?',
        listenFor: 'The land tax paid for factories; schools trained workers; one government could plan railways across the country.',
        ap: 'KC-5.2.II.A (internal reform that supported industrialization).'
      }
    },
    {
      phase: 'japan-build', kind: 'story-scene', eyebrow: 'Japan · Build It, Then Sell It',
      kc: 'KC-5.2.II.A', title: 'The state started the industry. Private companies carried it on.',
      footer: 'Business families such as Mitsui and Mitsubishi grew into huge business groups: the zaibatsu.',
      template: {
        steps: [
          { label: '1872', text: 'The state opens Japan\'s first **railway**, Tokyo to Yokohama, with British engineers.' },
          { label: '1872', text: 'The **Tomioka Silk Mill** opens, with French machines and a French engineer.' },
          { label: '1870s', text: 'Telegraphs, **shipyards**, mines, weapons works and factories.' },
          { label: '1880', key: true, text: 'Too costly to run: the state decides to **sell** most of them.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.V.C and KC-5.2.II.A meet here: a state-sponsored vision of industry, which the reforms supported.',
          'The railway: Shimbashi (Tokyo) to Yokohama, opened 14 October 1872, built with British loans and about 300 British and European advisers, among them the engineer Edmund Morel. The Tomioka Silk Mill: "established in 1872 by the government to introduce modern machine silk reeling from France"; the French engineer Paul Brunat; operations from 4 November 1872; the workers were young women, many from former samurai families (404 by January 1873).',
          'Columbia, Asia for Educators: the government built "railway and shipping lines, telegraph and telephone systems, three shipyards, ten mines, five munitions works, and fifty-three consumer industries (making sugar, glass, textiles, cement, chemicals, and other important products). This was very expensive, however, and strained government finances, so in 1880 the government decided to sell most of these industries to private investors."',
          'Who bought: Mitsubishi leased the Nagasaki shipyard in 1884 and bought it in 1887 (Mitsubishi); Mitsui took over the Miike coal mine, the country\'s largest, in 1889 (Mitsui Bunko) and bought the Tomioka mill in 1893. Private companies built more, such as the Osaka Spinning Company, 1883 (5.4).',
          'Costs: farmers paid much of it through the land tax, and samurai who lost their place rebelled; the new army of drafted commoners defeated the last great revolt, in Satsuma, in 1877.',
          'The picture is a real print: Ikkei, "Steam Engine of the Iron Railroad at Takanawa," color woodblock, 1872, center sheet of a triptych (Library of Congress, no known restrictions). Two Western crewmen stand on the engine and men in Western dress stand beside it; the full triptych, on the lesson page, shows Western visitors and Tokyo crowds on a bridge.'
        ],
        ask: 'Check the question-slide prediction: who paid for the railway? And who owned the industry by 1900?',
        listenFor: 'The government paid at first; from the 1880s much of it belonged to private companies such as Mitsui and Mitsubishi.',
        ap: 'KC-5.1.V.C; KC-5.2.II.A (supported industrialization).'
      }
    },
    {
      phase: 'japan-power', kind: 'case-file', eyebrow: 'Japan · A Regional Power',
      kc: 'KC-5.2.II.A', title: 'Forty years after Perry, Japan beat China.',
      template: {
        tag: 'War',
        place: 'Korea',
        date: '1894 to 1895',
        rows: [
          { label: 'Treaties', text: '1894: Britain agrees to **end the foreign courts** in Japan (from 1899); others follow' },
          { label: 'War', text: 'Japan and China fight over **Korea**, and Japan wins' },
          { label: 'Gains', text: 'China gives up its claim over Korea, gives Japan **Taiwan**, and agrees to pay **200 million taels**' },
          { label: 'Limit', text: 'Russia, Germany and France make Japan **give back** one more piece of land' }
        ],
        proves: 'Japan, forced open in the 1850s, now had a colony of its own: a regional power.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.2.II.A\'s last link: "the growing regional power of Japan in the Meiji Era."',
          'The foreign courts: the Anglo-Japanese Treaty of Commerce and Navigation, signed 16 July 1894, in force 17 July 1899, ended extraterritoriality, but not the limit on Japan\'s tariffs, which lasted until 1911 (Cortazzi; Japan Customs); Japan Customs says it "spurred the revision of unequal commerce treaties with other countries." Columbia ties it to Japan rewriting its laws on European models.',
          'The war: "In 1894 Japan fought a war against China over its interest in Korea" (Columbia). The Treaty of Shimonoseki, 17 April 1895: China recognized "the full and complete independence and autonomy of Korea" (Article 1), gave up Taiwan, the Penghu Islands and the Liaodong Peninsula (Articles 2 and 3) and agreed to pay "200,000,000 Kuping taels" (Article 4). Within a week Russia, Germany and France demanded that Japan give back the Liaodong Peninsula, and Japan gave in, which angered its leaders.',
          'Do not say Japan took Korea in 1895: the treaty ended China\'s claim; Japan made Korea a colony in 1910 (Unit 6).',
          'What empires did with that power, in Taiwan and Korea, is Unit 6. The lesson\'s Evidence Lab has a Japanese cartoon of the war from 1895, Kiyochika\'s "Rats in a Bag": wartime propaganda, made for Japanese buyers.'
        ],
        ask: 'What evidence on this slide shows Japan had become a regional power?',
        listenFor: 'It beat China, took Taiwan and an indemnity, and Britain agreed to end the foreign courts in Japan.',
        ap: 'KC-5.2.II.A (growing regional power).'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Find the pattern across Egypt and Japan.',
      subtitle: 'Making Connections 5.A: line up the links, name what both share, then name the difference the pattern does not explain.',
      big: '8',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 05 is required: it practises the CED\'s suggested skill for 5.6, 5.A, on the topic\'s two cases. The module models the frame on the race case, then asks for the pattern across Egypt and Japan, then the difference.',
          'Circulate for students who name a shared link that is really in both cases (fear of stronger powers; state money; foreign machines and experts; farmers paying; the army as the goal), not a fact true of only one.'
        ],
        ask: 'What is one link that shows up in both chains?',
        listenFor: 'Both bought foreign machines and hired foreign experts; both were paid for by farmers; both were driven by fear of stronger powers.'
      }
    },
    {
      phase: 'pattern', kind: 'split-venn', eyebrow: 'Making Connections 5.A · The Pattern',
      kc: 'KC-5.1.V.C', title: 'Two states, one pattern.',
      footer: 'Both aimed at the same goal: a state strong enough to defend itself, with an army to match.',
      template: {
        left: { name: 'Egypt', items: ['A governor inside the Ottoman Empire', 'Drafted workers in state mills', 'Mills mostly closed by the mid-1840s'] },
        right: { name: 'Japan', items: ['Never conquered; reformed itself', 'State industries sold to private firms', 'A regional power by 1895'] },
        both: ['Wanted armies to match stronger powers', 'The state paid for the first factories', 'Foreign machines and experts', 'Farmers paid much of the bill']
      },
      notes: {
        minutes: 3,
        land: [
          'The pattern is KC-5.1.V.C in action: two "state-sponsored visions of industrialization," with the same links.',
          'Have students sort before revealing: give them the ten phrases and the three regions. The middle is the pattern; the sides hold the differences, which are slide 19.',
          'Both sides are from the reading: Egypt\'s students to Europe in the 1820s and Japan\'s Iwakura Mission are the "learn abroad" link; the cotton monopoly and the land tax are the "farmers paid" link.'
        ],
        ask: 'Which item in the middle is the cause? Which is the goal?',
        listenFor: 'Fear of stronger powers is the cause; a strong army (a strong state) is the goal.',
        ap: 'Making Connections 5.A; KC-5.1.V.C.'
      }
    },
    {
      phase: 'difference', kind: 'split-mirror', eyebrow: 'Making Connections 5.A · The Difference',
      title: 'Same pattern, different results.',
      footer: 'Japan had to accept low tariffs too, so outside pressure alone does not explain the difference.',
      template: {
        left: { name: 'Egypt' },
        right: { name: 'Japan' },
        rows: [
          { label: 'Status', left: 'A province of the Ottoman Empire; Europe cut its army', right: 'Never conquered or colonized, though forced into unequal treaties' },
          { label: 'Reform', left: 'One ruler\'s project, run with drafted workers', right: 'Reform of the whole society first' },
          { label: 'Coal', left: 'Almost none: many machines turned by animals', right: 'Coal of its own' },
          { label: 'After the state', left: 'Most mills failed by the mid-1840s', right: 'Sold to private companies that kept them running' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Four reasons historians point to; none is the whole answer. Ask students to choose the strongest and defend it with a piece of evidence.',
          'Status: Egypt\'s army was cut to 18,000 by the 1841 settlement; Japan, though forced into unequal treaties, was never conquered, and it won an end to the foreign courts in 1894 (from 1899) and control of its tariffs in 1911. Reform: Columbia\'s account of the Meiji reforms (slide 14) against Beinin and Fahmy on Egypt\'s drafted workers. Coal: OER and Beinin on Egypt; the Miike mine, "easily the nation\'s largest," sold to Mitsui (Mitsui Bunko). After the state: Columbia on the 1880 sale; Beinin on Egypt\'s failures.',
          'The footer is the test of the "Europe did it" explanation: under the 1866 tariff convention Japan could charge only about 5 percent on most imports through its build-up of the 1870s and 1880s (Cortazzi; Japan Customs), and its industry still grew. Revised treaties raised the rates from 1899, and full tariff control came only in 1911. So European pressure mattered to Egypt\'s army and monopolies, but low tariffs alone do not explain the different results.'
        ],
        ask: 'Which row is the strongest reason? Why?',
        listenFor: 'A row chosen and defended with evidence, ideally with the footer\'s point about tariffs.',
        ap: 'Making Connections 5.A (the difference); Causation.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Japan just copied the West.', evidence: 'Its leaders chose what to borrow and from whom, a French silk mill and British railway engineers, to "strengthen the foundations of imperial rule."', source: 'KC-5.2.II.A' },
          { myth: 'Muhammad Ali was building an Egyptian nation.', evidence: 'He was an Ottoman governor from an Albanian family whose court spoke Turkish, building power for his family.', source: 'KC-5.1.V.C' },
          { myth: 'One cause explains Egypt\'s result.', evidence: 'Historians weigh European pressure, missing coal, drafted workers and new managers, and still disagree.', source: 'KC-5.1.V.C' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Myth 1 is slides 13 and 15: the Charter Oath\'s purpose, and the choices of French and British experts.',
          'Myth 2: Muhammad Ali has been called "the founder of modern Egypt," a label from later Egyptian nationalist history (Fahmy). He was of Albanian origin, and "Ottoman Turkish was the official language of his court rather than Arabic." He built for his family\'s hereditary rule, which the 1841 decree granted.',
          'Myth 3 is slide 9.'
        ],
        ask: 'Which myth would most hurt an essay answer, and why?',
        listenFor: 'Myth 3: a causation answer that gives one cause for Egypt\'s result ignores the evidence and loses the comparison with Japan.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'split-scenes', eyebrow: 'The Whole Topic',
      title: 'The state built the factories. Japan\'s lasted. Egypt\'s mostly closed.',
      footer: 'With your notes closed, redraw both chains, then name the pattern and the difference.',
      template: {
        left: { name: 'Egypt, Muhammad Ali', items: ['Threat: Napoleon\'s army, 1798', 'State mills supply an army', 'Europe cuts the army; no coal; most mills close'] },
        right: { name: 'Japan, the Meiji era', items: ['Threat: Perry\'s warships, 1853', 'Reform, railways, mills; then sold', 'Beats China, takes Taiwan: a regional power'] },
        bothLabel: 'The pattern',
        both: ['Armies to match stronger powers', 'The state builds industry to make itself strong']
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide: the whole topic as two chains side by side. Ask students to close their notes and redraw it, the two columns and the shared line at the bottom, then compare with the slide.',
          'Point to the Key Concepts: the shared line is KC-5.1.V.C, a small number of states with their own vision of industry; the Japan column is KC-5.2.II.A from cause to regional power; the two last rows are the effects the learning objective asks for.',
          'The skill: the shared line is the pattern (5.A); the last row of each column is the difference.'
        ],
        ask: 'Redraw it from memory. What is the pattern, and what is the difference?',
        listenFor: 'Both states feared stronger powers and built industry to be strong; Japan\'s lasted and made it a regional power, Egypt\'s mostly closed.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis',
      kc: 'Unit 5: Learning Objective G', title: 'Say it in one sentence.',
      template: {
        frame: 'To match stronger ___, Egypt and Meiji ___ built state industry. Egypt\'s mills fed an ___ until European pressure, no ___ and other problems closed most; Japan ___ itself and became a ___ power.',
        words: ['powers', 'Japan', 'army', 'coal', 'reformed', 'regional'],
        prompt: 'Fill it in from memory, then add one example.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective G: "Explain the causes and effects of economic strategies of different states and empires." The sentence is the whole answer; one example per state makes it an AP answer.',
          'A strong version: between 1750 and 1900 a small number of governments built industry themselves, wanting armies to match stronger powers; Muhammad Ali, Egypt\'s Ottoman governor, used a monopoly on cotton to pay for about 30 state cotton mills that supplied an army of about 130,000, but after European powers drove his army from Syria and cut it to 18,000 in 1841, and with no coal and drafted workers, most mills had failed by the mid-1840s; in Japan, Perry\'s warships and the unequal treaties led the Meiji government to abolish the domains, tax land in money, and build railways and the Tomioka Silk Mill, which it sold to companies such as Mitsui from the 1880s, and the industry and army it built helped Japan defeat China in 1895, take Taiwan and begin ending the unequal treaties.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for each state and say what it caused have the objective.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab · Optional',
      title: 'Two sources, one link in a chain.',
      subtitle: 'Choose at least two cards. For each: what kind of source it is, which link in which chain it shows, and one thing it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional today: use it if the room has time, or as homework for students who want more. The cards pair real objects (Couder\'s portrait of Muhammad Ali, the Japanese broadsheet of Perry\'s ship, the Iwakura Mission photograph, the 1872 Takanawa railway print, Kiyochika\'s 1895 war cartoon) with the 1841 decree\'s army clause as a text card.',
          'Listen for students who name what kind of source each card is (a commissioned portrait, a broadsheet sold to the public, a posed photograph, a print made to sell, wartime propaganda), and which link in which chain it supports.'
        ],
        ask: 'What can your source not tell you?',
        listenFor: 'Whether the strategy worked: a portrait, a print or a photograph shows a moment or a message, not the result.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'How did outside pressure lead to Japan\'s industry and power, and what pattern does Japan share with Egypt?',
      subtitle: 'Trace Japan\'s chain from Perry to regional power, with evidence for each link, including what happened to the state\'s businesses after 1880. Then name one link Japan shares with Egypt and one difference in the results. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Module 10 is required: draft, Socrates, revise. It assesses Target 2 (KC-5.2.II.A) and the learning objective, and declares Causation.',
          'A strong answer: in 1853 Perry\'s warships forced Japan to open its ports, and the treaties of 1854 and 1858 let foreigners be tried in their own courts and took away Japan\'s control of its trade; in 1868 the Meiji leaders took power, abolished the domains in 1871 and created a land tax paid in money, which paid for the state\'s railway from Tokyo to Yokohama and the Tomioka Silk Mill in 1872; from 1880 the government sold most of its industries to companies such as Mitsui and Mitsubishi; in 1894 Britain agreed to end its foreign courts in Japan, and in 1895 Japan defeated China and took Taiwan. Like Egypt, Japan\'s government built industry with foreign machines and experts because it feared stronger powers; unlike Egypt, whose mills mostly closed after Europe cut its army in 1841, Japan\'s industry lasted, because it was independent, reformed its whole society, had coal and handed its industries to private companies.'
        ],
        ask: 'Where in your answer is the cause, and where is the effect?',
        listenFor: 'Outside pressure as the cause; reform, industry and regional power as the effects, with the links between them explained.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'The state built the factories. Japan\'s lasted. Egypt\'s mostly closed.',
      subtitle: 'The Citadel of Cairo, where Muhammad Ali ruled. Next, Topic 5.7: who owned the industrial world\'s businesses, and how money moved.',
      notes: {
        minutes: 2,
        land: [
          'Land the spine, then the hand-off to 5.7: all this industry made goods, and goods had to be paid for, traded and financed.',
          'The picture is a real photograph, colored by the photochrom process: Photoglob Company, Zurich, "Cairo, the Citadel," about 1890 to 1910 (Library of Congress, Photochrom Print Collection, no known restrictions). Muhammad Ali governed Egypt from the Citadel; the domed mosque on top is the one he ordered built there, begun in the early 1830s and finished after his death. By the time of this photograph his factories were long gone.',
          'Ask students to say the whole topic in one sentence over the picture: the threat, the strategy, and the two results.'
        ],
        ask: 'Say the topic in one sentence, with one example from each country.',
        listenFor: 'The spine with real cases: Egypt\'s 30 cotton mills and the 1841 army cut; Japan\'s 1872 railway and the 1895 victory over China.'
      }
    }
  ]
};
