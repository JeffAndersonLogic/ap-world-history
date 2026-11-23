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
 * 2026-11-23 and 2026-11-24), so the architecture test cannot compare Work
 * Time with the schedule yet: keep outline.required and the launch pad equal.
 * Required modules (Jeff's rule of 2026-10-23: 02, 06 and 10 on every topic,
 * plus at least one chosen): 02 First & 10, 05 Skill Builder, 06 Checkpoint 1
 * and 10 Checkpoint 2; 05 practises the CED's suggested skill, 5.A. The build
 * also launched 07 (Evidence Lab) as optional; it is now the early-finisher
 * option.
 *
 * Outline format, 2026-11-08 (Jeff: the 4.4 outline is the standard for every
 * topic; slides that only point to a module are cut; the lecture tells the
 * story). The briefing opens on the outline below, a road map before the
 * First & 10 shows students the same six section headers (the First & 10's
 * own six sections), every story slide's eyebrow names its section, minute
 * counts are off the projected slides, the myths moved to the outline's Watch
 * for list and the retelling slide's notes, and one Work Time slide replaced
 * Myth and Evidence and the four module launch slides (Checkpoint 1, Skill
 * Builder, Evidence Lab, Checkpoint 2). No story slide's projected content
 * changed. 25 slides to 22. One slide moved: Find the Pattern, the 5.A model
 * on an everyday case, sat between the Egypt and Japan sections to set up the
 * Skill Builder that followed Japan; with the Skill Builder in Work Time it now
 * opens section VI (slide 16), right before the pattern and the difference it
 * models, so the deck still tells the sections in order. The deck had no
 * Sharpen slide. The topic has one learning objective (G): the synthesis slide
 * (close-retell, slide 20) carries its band and answers it, and stays after
 * the retelling slide and before Work Time.
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
      'Teach causes AND effects for each state: the threat, the decision, the strategy, the result (the retelling slide, 19).',
      'Teach KC-5.1.V.C with the CED\'s own example: Muhammad Ali\'s cotton textile industry (slides 7 to 10), and say "a small number of states" (slide 6).',
      'Teach all of KC-5.2.II.A as a chain: U.S. and European pressure led to internal reform, which supported industry, which led to regional power (slides 11 to 15).',
      'Model 5.A: put two cases side by side, name the pattern, then name the difference the pattern does not explain (slides 16, 17 and 18).'
    ],
    should: [
      'Weigh the causes of Egypt\'s result: European pressure, missing coal, drafted workers, inexperienced managers. Historians still disagree (slide 10).',
      'Say that Japan\'s state started its industry and private companies carried it on: the 1880 decision to sell (slide 14).',
      'Correct three myths when they come up (the outline\'s Watch for list; the retelling slide\'s notes): "Japan just copied the West," "Muhammad Ali was building an Egyptian nation," and "one cause explains Egypt\'s result."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Industry on Purpose."',
      'Send students who finish Work Time early to the Evidence Lab (Module 07), or to the Primary Source, the Charter Oath (1868), as an extension.',
      'For a class that is ahead: Japan also had to accept low tariffs. Why does that matter to the "Europe killed Egypt\'s factories" explanation? (slide 18).'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide and follow the First & 10's six
  // sections. Every point is from this deck's own slides and notes, the First
  // & 10 "Industry on Purpose" or docs/TOPIC-5-6-STORY-DRAFT.md; nothing is
  // new. Required modules are Jeff's rule of 2026-10-23; the topic is not on
  // the schedule yet.
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'The exception: a few states built industry', kc: 'KC-5.1.V.C', points: [
        'Britain and the US: private owners built the first factories',
        'Arkwright at Cromford; the Boston merchants who paid for Lowell',
        'Factories, steam and new weapons made some countries stronger',
        'A state without industry could be beaten, or forced into treaties',
        'The CED: "a small number" of states built industry themselves',
        'State-sponsored industry: the government plans, pays for and protects it'
      ] },
      { label: 'II', title: 'Egypt builds for an army', kc: 'KC-5.1.V.C', points: [
        '1798: Napoleon\'s army easily beats Egypt\'s rulers, the Mamluks',
        'Muhammad Ali: Ottoman officer, Albanian family; governor 1805, rules alone 1811',
        'His aim: hold Egypt for his family, even against the sultan, with an army like Napoleon\'s',
        'A state monopoly: buy crops cheap, sell cotton abroad (long-staple cotton from 1820)',
        'From 1819, factories with European machines and experts; British cloth kept out',
        'Early 1830s: about 30 cotton mills, about 30,000 drafted workers',
        'Peasants drafted into the army from 1822: about 130,000 soldiers. The peasants paid'
      ] },
      { label: 'III', title: 'Egypt: it worked, then it stopped', kc: 'KC-5.1.V.C', points: [
        '1831: Ibrahim invades Syria and beats the sultan\'s armies',
        '1840: Britain, Austria, Russia and Prussia side with the sultan; Egypt driven from Syria',
        '1841: hereditary rule for his family, but the army cut to 18,000',
        'The 1838 treaty ends the monopolies and lets in cheap British cloth',
        'Inside: almost no coal, drafted workers resist, managers with little experience',
        'Most factories had failed by the mid-1840s',
        'Historians still disagree which cause mattered most: grade the reason, not the rank'
      ] },
      { label: 'IV', title: 'Japan: pressure, then reform', kc: 'KC-5.2.II.A', points: [
        '1853: Perry\'s warships in Edo Bay; Japan has no navy to stop him',
        'Treaties of 1854 and 1858: ports opened, foreigners tried in their own courts, trade control lost',
        'Unequal treaties; some samurai blame the shogun',
        '1868: young samurai overthrow the shogun and rule in the teenage emperor\'s name',
        'Charter Oath: seek knowledge worldwide "to strengthen the foundations of imperial rule"',
        'The slogan: "Rich country, strong army"',
        'Reform first: domains abolished (1871), a draft of every class, schools (1872), a land tax paid in money'
      ] },
      { label: 'V', title: 'Japan builds, sells and grows strong', kc: 'KC-5.2.II.A', points: [
        '1872: the state\'s railway, Tokyo to Yokohama, with British engineers',
        '1872: the Tomioka Silk Mill, with French machines and a French engineer',
        'Telegraphs, shipyards, mines, weapons works; farmers paid through the land tax',
        '1880: too costly to run, so most are sold to private investors',
        'Mitsui and Mitsubishi grow into zaibatsu',
        'July 1894: new laws win Britain\'s promise to end the foreign courts (from 1899), before the war',
        '1894 to 1895: Japan beats China; Shimonoseki gives it Taiwan and 200 million taels'
      ] },
      { label: 'VI', title: 'The pattern and the difference', kc: 'KC-5.1.V.C', points: [
        'Both wanted armies to match stronger powers',
        'In both, the state, not private owners, paid for the first factories',
        'Both bought foreign machines, hired foreign experts, sent people abroad to learn',
        'In both, farmers paid much of the bill',
        'The difference: Japan\'s industry lasted and grew; Egypt\'s mostly closed',
        'Reasons: status, reform, coal, private companies. None is the whole answer',
        'Japan had low tariffs too, so outside pressure alone does not explain it'
      ], skill: 'You model 5.A Making Connections out loud with the frame "Both ___ and ___ ___. That is the pattern. But ___ ___, while ___ ___, because ___" on an everyday case, two friends training for a race (slide 16). Then the room sorts the two cases into the Venn before you reveal it (slide 17) and chooses the strongest reason for the difference (slide 18). Students practice it in the Skill Builder.' }
    ],
    wrap: { title: 'Put it together', columns: ['The threat', 'The strategy', 'The result'], rows: [
      { label: 'Egypt, Muhammad Ali', cells: ['Armies like Napoleon\'s, and the sultan', 'A cotton monopoly pays for state mills that supply an army', 'Wins wars; then Europe cuts the army, coal is missing, and most mills close by the mid-1840s'] },
      { label: 'Japan, the Meiji era', cells: ['Perry\'s warships, 1853, and the unequal treaties', 'Reform first; state railways and mills, sold to private companies from 1880', 'Industry lasts; Japan beats China and takes Taiwan: a regional power'] },
      { label: 'The pattern', cells: ['Fear of stronger powers', 'State money, foreign machines and experts, farmers paying', 'Japan\'s lasted, Egypt\'s mostly closed: the difference'] }
    ] },
    vocabulary: [
      { term: 'State-Sponsored Industry', def: 'Industry that a government plans, pays for and protects.' },
      { term: 'Monopoly', def: 'When only one buyer or seller is allowed. Muhammad Ali\'s government bought Egypt\'s crops cheap and sold them abroad.' },
      { term: 'Conscription', def: 'Forcing people to serve. Egypt drafted peasants into its army and mills; Japan drafted men of every class.' },
      { term: 'Unequal Treaty', def: 'A treaty forced on a weaker country, giving the stronger side rights it does not give back.' },
      { term: 'Meiji Restoration', def: 'In 1868 young samurai overthrew the shogun and governed in the name of the fifteen-year-old emperor, Meiji.' },
      { term: 'Zaibatsu', def: 'Huge business groups, such as Mitsui and Mitsubishi, that grew after buying the state\'s industries.' },
      { term: 'Regional Power', def: 'A state strong enough to win wars and gain land in its own part of the world.' },
      { term: 'Pattern', def: 'When the same links show up in different cases.' }
    ],
    watch: [
      { myth: '"Japan just copied the West."', fix: 'Its leaders chose what to borrow and from whom (a French silk mill, British railway engineers), for their own aim, to "strengthen the foundations of imperial rule." But do not swing to "Japan owed the West nothing": it bought foreign machines and hired foreign experts.' },
      { myth: '"Muhammad Ali was building an Egyptian nation."', fix: 'He was an Ottoman governor from an Albanian family whose court spoke Turkish, building power for his family. But do not swing to "he was just the sultan\'s loyal governor": his army beat the sultan\'s, and he won hereditary rule for his family.' },
      { myth: '"One cause explains Egypt\'s result."', fix: 'Historians weigh European pressure, missing coal, drafted workers and new managers, and still disagree. But do not swing to "any answer will do": a ranking still needs a reason and evidence.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.3 to 5.5. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the 1872 railway print.', students: 'Predict who paid for this railway.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the six sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Industry on Purpose" in class.', students: 'Build two chains as they read.', slide: 5 },
    { id: 'exception', label: 'The Exception', range: '18-20', minutes: 2, teacher: 'Most factories were private. A few states built their own.', students: 'Say why a ruler would.', slide: 6 },
    { id: 'egypt-ruler', label: 'Egypt: The Ruler', range: '20-22', minutes: 2, teacher: 'Muhammad Ali and what he wanted.', students: 'Name the threat and the aim.', slide: 7 },
    { id: 'egypt-strategy', label: 'Egypt: The Strategy', range: '22-24', minutes: 2, teacher: 'Crops, cotton, factories, an army.', students: 'Follow the money.', slide: 8 },
    { id: 'egypt-result', label: 'Egypt: It Worked, Then It Stopped', range: '24-26', minutes: 2, teacher: 'From 1822 to the 1840s.', students: 'Say what changed in 1840 and 1841.', slide: 9 },
    { id: 'egypt-why', label: 'Why Did Egypt\'s Factories Close?', range: '26-28', minutes: 2, teacher: 'Rank four causes historians weigh.', students: 'Rank and defend number one.', slide: 10 },
    { id: 'japan-threat', label: 'Japan: Ships and Treaties', range: '28-30', minutes: 2, teacher: 'Perry and the unequal treaties.', students: 'Name what the treaties took away.', slide: 11 },
    { id: 'oath', label: 'The Charter Oath', range: '30-32', minutes: 2, teacher: 'Article 5, read together.', students: 'Say what it promises, and why.', slide: 12 },
    { id: 'japan-reform', label: 'Japan: Reform First', range: '32-34', minutes: 2, teacher: 'The reforms that supported industry.', students: 'Link one reform to industry.', slide: 13 },
    { id: 'japan-build', label: 'Japan: Build It, Then Sell It', range: '34-36', minutes: 2, teacher: 'Railway, silk mill, shipyards; the 1880 sale.', students: 'Say who started it and who carried it on.', slide: 14 },
    { id: 'japan-power', label: 'Japan: A Regional Power', range: '36-38', minutes: 2, teacher: 'New laws and the treaties; the war with China; Shimonoseki.', students: 'Give one piece of evidence.', slide: 15 },
    { id: 'model', label: 'Find the Pattern', range: '38-40', minutes: 2, teacher: 'Model 5.A on an everyday case.', students: 'Say the pattern and the difference.', slide: 16 },
    { id: 'pattern', label: 'The Pattern', range: '40-43', minutes: 3, teacher: 'What both cases share.', students: 'Sort into the Venn.', slide: 17 },
    { id: 'difference', label: 'The Difference', range: '43-45', minutes: 2, teacher: 'Four reasons the results differed.', students: 'Choose the strongest reason.', slide: 18 },
    { id: 'retell', label: 'Two States, One Pattern', range: '45-49', minutes: 4, teacher: 'Students redraw the two chains; correct the three myths here.', students: 'Retell the whole topic.', slide: 19 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '49-50', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 20 },
    { id: 'worktime', label: 'Work Time', range: '50-80', minutes: 30, teacher: 'Modules 05, 06 and 10, in that order: the Skill Builder, Checkpoint 1 with no coach, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, Checkpoint 2.', slide: 21 },
    { id: 'close', label: 'Landing Sentence', range: '80-82', minutes: 2, teacher: 'Land the answer and hand off to 5.7.', students: 'Say the topic in one sentence.', slide: 22 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Two states built industry. Japan\'s grew. Egypt\'s mostly closed.',
      subtitle: 'Causation, with Making Connections 5.A. Why did a few governments build industry themselves, and what happened when they did?',
      notes: {
        minutes: 2,
        keys: [
          'Objective G: causes AND effects of economic strategies',
          'KC-5.1.V.C: "a small number" of states',
          'KC-5.2.II.A: pressure, reform, industry, regional power',
          'Two cases only: Muhammad Ali\'s Egypt, Meiji Japan',
          'Classes and ideologies are 5.8 and 5.9: park them',
          'Three myths: outline Watch for list'
        ],
        land: [
          'CED p. 105. One learning objective, G (Governance): explain the causes and effects of economic strategies of different states and empires. The reasoning process is Causation (p. 95); the suggested skill is 5.A, identify patterns among or connections between historical developments and processes.',
          'Key Concepts: KC-5.1.V.C (as the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization); KC-5.2.II.A (the expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era).',
          'The CED\'s one illustrative example, which it calls optional, is Muhammad Ali\'s development of a cotton textile industry in Egypt. Japan is named in KC-5.2.II.A itself. This deck uses those two cases and no other, as the unit story map decides. There is no CED sample activity for 5.6.',
          'Owns: state-sponsored industry (KC-5.1.V.C) and Meiji reform, industry and regional power (KC-5.2.II.A). Bridge only: the spread of industry to Japan (5.4); the technologies themselves (5.5); free trade as an idea (5.7); Ottoman and Qing reforms and their resistance (5.8, KC-5.1.V.B); classes, ideologies and reform laws (5.8, 5.9); empire, including what Japan did in Taiwan and Korea and Egypt\'s later debts and the British occupation of 1882 (Unit 6). Russia\'s state-led industry is not a case here.',
          'The old 5.6 taught classes, liberalism, socialism, Marx, British reform laws, Bismarck and women\'s suffrage. The CED gives all of that to 5.8 and 5.9. If a student raises it, say so and park it.',
          'Three myths, in the outline\'s Watch for list and corrected on the retelling slide (19) if they come up: "Japan just copied the West"; "Muhammad Ali was building an Egyptian nation"; "one cause explains Egypt\'s result."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Afraid of stronger industrial powers, a few governments built industry themselves; Egypt\'s factories supplied an army and mostly closed; Japan reformed, built and sold its industries, and became a regional power.',
        avoid: 'Avoid two lists of facts, one per country. The CED asks for causes and effects, and the skill asks for a pattern: every fact on a slide is a link in a chain, and the two chains are compared. And avoid "Britain destroyed Egypt\'s industry" as the whole answer: the evidence points to several causes.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.4', text: 'Name two places outside Britain where factory methods spread.' },
          { label: 'Topics 5.3 and 5.4', text: 'Who paid for the first factories in Britain and the United States?' },
          { label: 'Topic 5.5', text: 'Name one technology from Topic 5.5 and what it let industry do.' }
        ],
        turn: 'Factories made some countries **strong**. If you ruled a country without them, and you were **afraid**, would you wait for private owners to build them, **or build them yourself?**'
      },
      notes: {
        minutes: 4,
        keys: [
          'No notes; fast answers, no reteaching',
          'Private owners paid: Arkwright, the Lowell merchants',
          'Bridge: a few governments built industry themselves',
          'Prompt 2 returns on slide 6'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: any two of other parts of Europe (Belgium, the German states), the United States, Russia, Japan; private owners and investors (Arkwright at Cromford in 5.3, the Boston merchants who paid for the Lowell mills in 5.4); the steam engine, railroads, steamships, the telegraph, steel (5.5).',
          'The bridge is 5.5\'s hand-off line: "A few governments did not wait for these machines to arrive on their own. They decided to build industry themselves." Prompt 2 returns on slide 6: private owners were the rule, and these states were the exception.'
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
        keys: [
          'Real print: first steam train, Yokohama, about 1872',
          'The government built Japan\'s first railway',
          'A print made to sell, not a photograph',
          'Predict who paid; check at slide 14'
        ],
        land: [
          'The picture is a real print, signed Baidō Kunimasa: "First Steam Train Leaving Yokohama," color woodblock triptych, about 1872 (Library of Congress, Chadbourne collection, no known restrictions; the Library catalogs it under Utagawa Kunisada, 1823 to 1880, and the signature may be that of the younger Kunimasa, later Kunisada III). The three sheets are shown side by side.',
          'Japan\'s first railway, Tokyo to Yokohama, opened in October 1872. The government built it, with money raised in Britain and British engineers. Japanese artists sold prints of the new train to a public that had never seen one.',
          'A print made to sell, not a photograph: the cherry blossoms, the harbor full of ships and the smiling passengers are the artist\'s choices. It shows what the railway meant to people in Tokyo, not exactly what the first train looked like.'
        ],
        ask: 'Predict: who paid for this railway: a company, or the government? Why might a government want to pay?',
        listenFor: 'The government. Guesses about power, defense, keeping up with Europe and America. Check the guesses on slide 14.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Why did a few governments build industry themselves, and what happened when they did?',
        stops: [
          { label: 'I', text: 'The exception: a few states built industry' },
          { label: 'II', text: 'Egypt builds for an army' },
          { label: 'III', text: 'Egypt: it worked, then it stopped' },
          { label: 'IV', text: 'Japan: pressure, then reform' },
          { label: 'V', text: 'Japan builds, sells and grows strong' },
          { label: 'VI', text: 'The pattern and the difference' },
          { label: '✓', text: 'Put it together: two states, one pattern', key: true }
        ],
        thenLabel: 'Then',
        then: 'Skill Builder · Checkpoint 1 · Checkpoint 2'
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
          'Read the six headers aloud before the First & 10, so students know the story\'s shape before they meet its details. They follow the reading\'s own six sections. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to VI), so the class can see where it is all period.',
          'The question at the top is the topic question: students watch for the two chains, one for Egypt and one for Japan, and for what the two share.'
        ],
        ask: 'Which state do you expect to come out stronger, and why?',
        listenFor: 'Any reasoned guess; return to it at the retelling slide.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read, and build two chains.',
      subtitle: 'One chain for Egypt and one for Japan, with the same four links: the threat, the decision, the strategy, the result.',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Two chains: threat, decision, strategy, result',
          'Links, not lists',
          'Q1 Egypt, Q2 Japan, Q3 pattern and difference',
          'Answers reach Canvas via Gather'
        ],
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
      phase: 'exception', kind: 'story-steps', eyebrow: 'I · The Exception',
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
        keys: [
          'Stress "a small number" of states',
          'The rule: private owners built the first factories',
          'The cause: fear of stronger industrial powers'
        ],
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
      phase: 'egypt-ruler', kind: 'story-scene', eyebrow: 'II · Egypt Builds · The Ruler',
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
        keys: [
          '1798: Napoleon\'s army beats Egypt\'s rulers',
          'Muhammad Ali: governor 1805, rules alone 1811',
          'Aim: hold Egypt for his family',
          'That needs an army like Napoleon\'s',
          'An Ottoman governor, not an Egyptian nationalist',
          'Real portrait, commissioned for a French museum'
        ],
        land: [
          'The Library of Congress\'s Egypt: A Country Study: the French "defeated the Mamluk army at Shubra Khit and Imbabah, and entered Cairo on July 25" (1798); Muhammad Ali came in 1801 with "the Albanian contingent of Ottoman forces"; the Ottomans appointed him governor in June 1805; in March 1811 his rivals, the Mamluk leaders, were killed in the Cairo Citadel, and "from then on, Muhammad Ali was the sole ruler of Egypt."',
          'His aim: the Country Study says he "wanted to detach Egypt from the Ottoman Empire, and he realized that to do so Egypt had to be strong economically and militarily." The historian Khaled Fahmy argues that the army served his "dynastic needs": hereditary rule for his family, inside the empire. The deck says "hold it for his family, even against the sultan," which both support.',
          'Why the French mattered: the OER Project\'s AP World article says Egypt "lost to Napoleon\'s French army in 1798" and that Muhammad Ali "put in motion a campaign of modernization, beginning with his military." Muhammad Ali arrived in 1801 with the Ottoman troops sent to drive the French out; he did not see the 1798 battles himself, and the lesson says the victory showed what a modern European army could do, not that he saw it.',
          'He was an Ottoman governor, not an Egyptian nationalist: his court\'s official language was Ottoman Turkish (myth 2 in the outline\'s Watch for list).',
          'The picture is a real portrait: Auguste Couder, Muhammad Ali, oil on canvas, 1841, commissioned by the French king Louis-Philippe for his history museum at Versailles (public domain, mirrored from Wikimedia Commons). A commissioned portrait is an argument about the sitter: dress, pose and setting are chosen, and here a French painter chose them for a French museum.'
        ],
        ask: 'What did Egypt\'s rulers lose to in 1798, and what might a new governor learn from it?',
        listenFor: 'A European army with modern weapons beating Egypt\'s rulers easily.',
        ap: 'KC-5.1.V.C (the cause); LO G.'
      }
    },
    {
      phase: 'egypt-strategy', kind: 'equation', eyebrow: 'II · Egypt Builds · The Strategy',
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
        keys: [
          'The CED\'s example: Muhammad Ali\'s cotton textile industry',
          'State monopoly: buy crops cheap, sell cotton abroad',
          'About 30 cotton mills, about 30,000 workers',
          'Workers drafted; British cloth kept out',
          'Army of about 130,000; factories served it',
          'Peasants paid, with crops and labor'
        ],
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
      phase: 'egypt-result', kind: 'timeline', eyebrow: 'III · Egypt\'s Result · It Worked, Then It Stopped',
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
        keys: [
          'It worked: Ibrahim beats the sultan\'s armies',
          '1840: European powers drive Egypt from Syria',
          '1841: army cut to 18,000',
          'The 1838 treaty ends the monopolies',
          'Most factories failed by the mid-1840s'
        ],
        land: [
          'For a while the strategy worked: Muhammad Ali\'s son Ibrahim invaded Syria in 1831 and beat Ottoman armies at Konya (December 1832) and Nezib (June 1839).',
          'Then it stopped. Britain, Austria, Russia and Prussia sided with the sultan (the Convention of London, July 1840). The Country Study: "A British fleet bombarded Beirut in September 1840, and an Anglo-Turkish force landed." Under the settlement of 1841, Muhammad Ali "was stripped of all the conquered territory except Sudan but was granted the hereditary governorship of Egypt"; the sultan\'s decree reads "In time of peace, 18,000 men will suffice." He "was also compelled to agree to the Anglo-Ottoman Convention of 1838 ... forced to abandon his monopolies and establish new tariffs that were favorable to imports." Ahmeti and Rizaj (2024): the 1838 treaty was signed by the Ottoman government and Britain; Egypt complied by 1842.',
          'The footer: Beinin, "a decade later most of these new factories had failed." Slide 10 asks why.'
        ],
        ask: 'Which two events, 1840 and 1841, came from outside Egypt?',
        listenFor: 'The powers drove Egypt out of Syria; the army was cut and the 1838 treaty ended the monopolies.',
        ap: 'KC-5.1.V.C (the effects); LO G.'
      }
    },
    {
      phase: 'egypt-why', kind: 'cause-rank', eyebrow: 'III · Egypt\'s Result · Weigh the Causes',
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
        keys: [
          'Four causes: Europe, coal, drafted workers, managers',
          '"Many machines" without steam, not "all"',
          'Historians still disagree',
          'Grade the reason, not the rank'
        ],
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
      phase: 'japan-threat', kind: 'story-scene', eyebrow: 'IV · Japan Reforms · The Threat',
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
        keys: [
          'KC-5.2.II.A begins: U.S. and European influence',
          '1853: Perry\'s warships; Japan has no navy',
          '1854, 1858: ports opened, foreign courts',
          'Japan loses control of its own trade',
          'Samurai blame the shogun; overthrow him, 1868',
          'Real Japanese broadsheet of Perry\'s ship'
        ],
        land: [
          'KC-5.2.II.A begins here: "The expansion of U.S. and European influence in Asia led to internal reform in Japan."',
          'Columbia University\'s Asia for Educators: in 1853 Perry\'s squadron entered the bay near Edo (Tokyo); "It was clear that Commodore Perry could impose his demands by force. The Japanese had no navy with which to defend themselves." The 1854 treaty allowed "trade at two ports"; the 1858 treaty "opened more ports." The treaties "limited its control over its own foreign trade and required that crimes concerning foreigners in Japan be tried not in Japanese but in Western courts." Britain, Russia, France and the Netherlands made treaties too. A tariff convention of 1866 set import duties at a uniform 5 percent (Japan Customs); Japan won back full control of its tariffs only in 1911.',
          'Some samurai blamed the shogun for giving in, and in 1868 they overthrew him (slide 12).',
          'The picture is a real Japanese broadsheet: "United States of North America: Perry arrives in Uraga, Sōshū Province," woodblock print (Library of Congress, no known restrictions). It shows Perry\'s steamship, an American sailor, a strip of coast labeled Shimoda and Izu, and the crests of the lords ordered to guard the coast. The Library dates it only to between 1850 and 1900; a later pencil note on the back of its mount gives the date of Perry\'s arrival, 8 July 1853. It is the right-hand sheet of a two-sheet print; the Library says the left sheet has a map of the Sagami (Sōshū) coast.'
        ],
        ask: 'Which of the treaty terms would anger you most if you were a samurai?',
        listenFor: 'Foreigners tried in their own courts; losing control of trade; giving in without a fight.',
        ap: 'KC-5.2.II.A (the cause).'
      }
    },
    {
      phase: 'oath', kind: 'source-quote', eyebrow: 'IV · Japan Reforms · A Voice from 1868',
      kc: 'KC-5.2.II.A', title: 'What did Japan\'s new leaders promise?',
      footer: 'The Charter Oath, issued in April 1868 in the name of the fifteen-year-old emperor, Meiji.',
      template: {
        quote: 'Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule.',
        attribution: { author: 'The Charter Oath, 1868', work: 'Article 5, translated by Akihiko Tanaka', year: '' },
        notice: 'Seek knowledge where? And to strengthen what?'
      },
      notes: {
        minutes: 2,
        keys: [
          '1868: young samurai overthrow the shogun',
          'Charter Oath, in the teenage emperor\'s name',
          'Learn from the world, for Japan\'s own purpose',
          'Slogan: "Rich country, strong army"'
        ],
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
      phase: 'japan-reform', kind: 'story-scene', eyebrow: 'IV · Japan Reforms · Reform First',
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
        keys: [
          'KC-5.2.II.A\'s middle link: reform supported industry',
          '1871: domains abolished, one central state',
          'Draft of every class; schools from 1872',
          'Land tax in money paid for industry',
          'Real photograph: the Iwakura Mission'
        ],
        land: [
          'KC-5.2.II.A\'s middle link: "internal reform in Japan that supported industrialization." Ask how each reform supported industry.',
          'Columbia, Asia for Educators: "in 1871 these domains were abolished and transformed into prefectures of a unified central state"; "The samurai lost their class privileges"; "a national army based on universal conscription"; "in 1872 the government established a national system to educate the entire population"; "A national land tax system was established that required payment in money instead of rice ... This gave the government money to spend to build up the strength of the nation."',
          'Links to industry: one central state could plan for the whole country; schools trained workers and engineers; the land tax paid for the railways and factories on slide 14; men freed from class rules could choose new work.',
          'The picture is a real photograph: five leaders of the Iwakura Mission, which toured the United States and Europe from December 1871 to September 1873 to study how they worked. Iwakura Tomomi, in the center, wears Japanese dress; the others wear Western suits (public domain, mirrored from Wikimedia Commons).'
        ],
        ask: 'Pick one reform. How did it help Japan build industry?',
        listenFor: 'The land tax paid for factories; schools trained workers; one government could plan railways across the country.',
        ap: 'KC-5.2.II.A (internal reform that supported industrialization).'
      }
    },
    {
      phase: 'japan-build', kind: 'story-scene', eyebrow: 'V · Japan Builds · Build It, Then Sell It',
      kc: 'KC-5.2.II.A', title: 'The state started key industries. Private companies built on them.',
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
        keys: [
          '1872: state railway, Tokyo to Yokohama',
          'Tomioka Silk Mill: French machines, French engineer',
          'Shipyards, mines, munitions, consumer industries',
          '1880: too costly, so sell most',
          'Mitsui and Mitsubishi buy; zaibatsu grow',
          'Farmers paid through the land tax',
          'Check the prediction: the government paid first'
        ],
        land: [
          'KC-5.1.V.C and KC-5.2.II.A meet here: a state-sponsored vision of industry, which the reforms supported.',
          'The railway: Shimbashi (Tokyo) to Yokohama, opened 14 October 1872, built with money raised in Britain and about 300 British and European advisers, among them the engineer Edmund Morel. The Tomioka Silk Mill: "established in 1872 by the government to introduce modern machine silk reeling from France"; the French engineer Paul Brunat; operations from 4 November 1872; the workers were young women, many from former samurai families (404 by January 1873).',
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
      phase: 'japan-power', kind: 'case-file', eyebrow: 'V · Japan Builds · A Regional Power',
      kc: 'KC-5.2.II.A', title: 'Forty years after Perry, Japan beat China.',
      template: {
        tag: 'War',
        place: 'Korea',
        date: '1894 to 1895',
        rows: [
          { label: 'Laws', text: 'Japan rewrites its laws; in July 1894 Britain agrees to **end the foreign courts** (from 1899)' },
          { label: 'War', text: 'Japan and China fight over **Korea**, and Japan wins' },
          { label: 'Gains', text: 'China gives up its claim over Korea, gives Japan **Taiwan**, and agrees to pay **200 million taels**' },
          { label: 'Limit', text: 'Russia, Germany and France make Japan **give back** one more piece of land' }
        ],
        proves: 'Japan, forced open in the 1850s, now had a colony of its own: a regional power.'
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.2.II.A\'s last link: regional power',
          'July 1894: Britain agrees to end foreign courts',
          'The treaty change came before the war',
          '1894 to 1895: Japan beats China over Korea',
          'Shimonoseki: Taiwan and 200 million taels',
          'Korea a colony only in 1910 (Unit 6)'
        ],
        land: [
          'KC-5.2.II.A\'s last link: "the growing regional power of Japan in the Meiji Era."',
          'Why the treaty changed: Columbia says Japan "changed its entire legal system, adopting a new criminal and civil code modeled after those of France and Germany. The Western nations finally agreed to revise the treaties in 1894." It was signed on 16 July, before the war with China began, so it is not a result of the victory. The foreign courts: the Anglo-Japanese Treaty of Commerce and Navigation, signed 16 July 1894, in force 17 July 1899, ended extraterritoriality, but not the limit on Japan\'s tariffs, which lasted until 1911 (Cortazzi; Japan Customs); Japan Customs says it "spurred the revision of unequal commerce treaties with other countries." Columbia ties it to Japan rewriting its laws on European models.',
          'The war: "In 1894 Japan fought a war against China over its interest in Korea" (Columbia). The Treaty of Shimonoseki, 17 April 1895: China recognized "the full and complete independence and autonomy of Korea" (Article 1), gave up Taiwan, the Penghu Islands and the Liaodong Peninsula (Articles 2 and 3) and agreed to pay "200,000,000 Kuping taels" (Article 4). Within a week Russia, Germany and France demanded that Japan give back the Liaodong Peninsula, and Japan gave in, which angered its leaders.',
          'Do not say Japan took Korea in 1895: the treaty ended China\'s claim; Japan made Korea a colony in 1910 (Unit 6).',
          'What empires did with that power, in Taiwan and Korea, is Unit 6. The lesson\'s Evidence Lab has a Japanese cartoon of the war from 1895, Kiyochika\'s "Rats in a Bag": wartime propaganda, made for Japanese buyers.'
        ],
        ask: 'What evidence on this slide shows Japan had become a regional power?',
        listenFor: 'It beat China, took Taiwan and an indemnity. (The treaty change came from Japan\'s legal reforms, weeks before the war.)',
        ap: 'KC-5.2.II.A (growing regional power).'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'VI · Pattern and Difference · 5.A, Model',
      title: 'Find the pattern, then the difference.',
      footer: 'A pattern is what two cases share. The difference is what the pattern does not explain.',
      template: {
        frame: 'Both {{case A}} and {{case B}} {{did the same things}}. That is the pattern. But {{case A}} {{had one result}}, while {{case B}} {{had another}}, because {{a reason}}.',
        exampleLabel: 'An everyday case',
        example: 'Both **Maya** and **Jordan** **trained for a 5K, running every morning on the same plan**. That is the pattern. But **Maya finished the race**, while **Jordan was hurt in the second week**, because **Jordan skipped stretching**.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Skill 5.A: find the pattern',
          'Everyday case first: learn the move',
          'Then name the difference',
          'Students say the frame back'
        ],
        land: [
          'Skill 5.A: "Identify patterns among or connections between historical developments and processes." A pattern is the same links showing up in different cases. The everyday case is deliberately unlike the history, so students learn the move, not the answer.',
          'Model it aloud, then ask students to say the frame back with the race case before they try it on Egypt and Japan: the pattern and the difference (slides 17 and 18), then the Skill Builder in Work Time.',
          'The second sentence matters: a pattern does not explain everything, and naming the difference is what makes the comparison useful.'
        ],
        ask: 'What is the pattern in the race case, in one sentence?',
        listenFor: 'Both friends prepared for the race the same way.',
        ap: 'Making Connections 5.A.'
      }
    },
    {
      phase: 'pattern', kind: 'split-venn', eyebrow: 'VI · Pattern and Difference · 5.A, The Pattern',
      kc: 'KC-5.1.V.C', title: 'Two states, one pattern.',
      footer: 'Both aimed at the same goal: a state strong enough to defend itself, with an army to match.',
      template: {
        left: { name: 'Egypt', items: ['A governor inside the Ottoman Empire', 'Drafted workers in state mills', 'Mills mostly closed by the mid-1840s'] },
        right: { name: 'Japan', items: ['Never conquered; reformed itself', 'State industries sold to private firms', 'A regional power by 1895'] },
        both: ['Wanted armies to match stronger powers', 'The state paid for the first factories', 'Foreign machines and experts', 'Farmers paid much of the bill']
      },
      notes: {
        minutes: 3,
        keys: [
          'Same links, two cases: the pattern',
          'Sort before revealing',
          'The cause: fear of stronger powers',
          'The goal: a strong army, a strong state'
        ],
        land: [
          'The pattern is KC-5.1.V.C in action: two "state-sponsored visions of industrialization," with the same links.',
          'Have students sort before revealing: give them the ten phrases and the three regions. The middle is the pattern; the sides hold the differences, which are slide 18.',
          'Both sides are from the reading: Egypt\'s students to Europe in the 1820s and Japan\'s Iwakura Mission are the "learn abroad" link; the cotton monopoly and the land tax are the "farmers paid" link.'
        ],
        ask: 'Which item in the middle is the cause? Which is the goal?',
        listenFor: 'Fear of stronger powers is the cause; a strong army (a strong state) is the goal.',
        ap: 'Making Connections 5.A; KC-5.1.V.C.'
      }
    },
    {
      phase: 'difference', kind: 'split-mirror', eyebrow: 'VI · Pattern and Difference · 5.A, The Difference',
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
        keys: [
          'Four reasons; none is the whole answer',
          'Status, reform, coal, private companies',
          'Japan had low tariffs too',
          'Choose the strongest; defend with evidence'
        ],
        land: [
          'Four reasons historians point to; none is the whole answer. Ask students to choose the strongest and defend it with a piece of evidence.',
          'Status: Egypt\'s army was cut to 18,000 by the 1841 settlement; Japan, though forced into unequal treaties, was never conquered, and it won an end to the foreign courts in 1894 (from 1899) and control of its tariffs in 1911. Reform: Columbia\'s account of the Meiji reforms (slide 13) against Beinin and Fahmy on Egypt\'s drafted workers. Coal: OER and Beinin on Egypt; the Miike mine, "easily the nation\'s largest," sold to Mitsui (Mitsui Bunko). After the state: Columbia on the 1880 sale; Beinin on Egypt\'s failures.',
          'The footer is the test of the "Europe did it" explanation: under the 1866 tariff convention Japan could charge only about 5 percent on most imports through its build-up of the 1870s and 1880s (Cortazzi; Japan Customs), and its industry still grew. Revised treaties raised the rates from 1899, and full tariff control came only in 1911. So European pressure mattered to Egypt\'s army and monopolies, but low tariffs alone do not explain the different results.'
        ],
        ask: 'Which row is the strongest reason? Why?',
        listenFor: 'A row chosen and defended with evidence, ideally with the footer\'s point about tariffs.',
        ap: 'Making Connections 5.A (the difference); Causation.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'split-scenes', eyebrow: 'Put It Together · The Whole Topic',
      title: 'Two states built industry. Japan\'s grew. Egypt\'s mostly closed.',
      footer: 'With your notes closed, redraw both chains, then name the pattern and the difference.',
      template: {
        left: { name: 'Egypt, Muhammad Ali', items: ['Threat: the sultan, and armies like Napoleon\'s', 'State mills supply an army', 'Europe cuts the army; little coal; most mills close'] },
        right: { name: 'Japan, the Meiji era', items: ['Threat: Perry\'s warships, 1853', 'Reform, railways, mills; then sold', 'Beats China, takes Taiwan: a regional power'] },
        bothLabel: 'The pattern',
        both: ['Armies to match stronger powers', 'The state builds industry to make itself strong']
      },
      notes: {
        minutes: 4,
        keys: [
          'Redraw both chains from memory',
          'Shared line: KC-5.1.V.C, the pattern',
          'Japan column: KC-5.2.II.A, cause to power',
          'Last rows: the effects, and the difference',
          'Myths: fix them, without the opposite mistake'
        ],
        land: [
          'The retelling slide: the whole topic as two chains side by side. Ask students to close their notes and redraw it, the two columns and the shared line at the bottom, then compare with the slide.',
          'Point to the Key Concepts: the shared line is KC-5.1.V.C, a small number of states with their own vision of industry; the Japan column is KC-5.2.II.A from cause to regional power; the two last rows are the effects the learning objective asks for.',
          'The skill: the shared line is the pattern (5.A); the last row of each column is the difference.',
          'Correct the three myths here if they come up (they were the Myth and Evidence slide until 2026-11-08, and are in the outline\'s Watch for list). The one that most hurts an essay is the third: a causation answer that gives one cause for Egypt\'s result ignores the evidence and loses the comparison with Japan.',
          '"Japan just copied the West": its leaders chose what to borrow and from whom, a French silk mill and British railway engineers (slide 14), for their own aim: the Charter Oath seeks knowledge "to strengthen the foundations of imperial rule" (slide 12). Do not swing to the opposite mistake, that Japan owed the West nothing: it bought foreign machines and hired foreign experts, one of the links it shares with Egypt (slide 17).',
          '"Muhammad Ali was building an Egyptian nation": he was an Ottoman governor from an Albanian family, whose court\'s official language was Ottoman Turkish, and he built for his family\'s hereditary rule, which the 1841 decree granted (slides 7 and 9). The label "founder of modern Egypt" was made famous by the British historian Henry Dodwell (1931) and taken up by Egyptian nationalist historians; Khaled Fahmy disputes it. Do not swing to the opposite mistake, that he was just the sultan\'s loyal governor: his army beat the sultan\'s armies in Syria, and he aimed to hold Egypt for his family even against the sultan.',
          '"One cause explains Egypt\'s result": historians weigh European pressure, missing coal, drafted workers and new managers, and still disagree (slide 10). Do not swing to the opposite mistake, that any answer will do: a ranking still needs a reason and evidence. Grade the reason, not the rank.'
        ],
        ask: 'Redraw it from memory. What is the pattern, and what is the difference?',
        listenFor: 'Both states feared stronger powers and built industry to be strong; Japan\'s lasted and made it a regional power, Egypt\'s mostly closed.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'Put It Together · AP Synthesis',
      kc: 'Unit 5: Learning Objective G', title: 'Say it in one sentence.',
      template: {
        frame: 'To match stronger ___, Egypt and Meiji ___ built state industry. Egypt\'s mills fed an ___ until European pressure, too little ___ and other problems closed most; Japan ___ itself and became a ___ power.',
        words: ['powers', 'Japan', 'army', 'coal', 'reformed', 'regional'],
        prompt: 'Fill it in from memory, then add one example.'
      },
      notes: {
        minutes: 1,
        keys: [
          'Objective G, answered in one sentence',
          'Fill it from memory',
          'One example per state'
        ],
        land: [
          'Learning objective G: "Explain the causes and effects of economic strategies of different states and empires." The sentence is the whole answer; one example per state makes it an AP answer.',
          'A strong version: between 1750 and 1900 a small number of governments built industry themselves, wanting armies to match stronger powers; Muhammad Ali, Egypt\'s Ottoman governor, used a monopoly on cotton to pay for about 30 state cotton mills that supplied an army of about 130,000, but after European powers drove his army from Syria and cut it to 18,000 in 1841, and with almost no coal and drafted workers, most mills had failed by the mid-1840s; in Japan, Perry\'s warships and the unequal treaties led the Meiji government to abolish the domains, tax land in money, and build railways and the Tomioka Silk Mill, which it sold to companies such as Mitsui from the 1880s, and the industry and army it built helped Japan defeat China in 1895 and take Taiwan, while its new laws began ending the unequal treaties.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for each state and say what it caused have the objective.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 10',
      title: 'Now you connect the two chains.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Find the pattern across Egypt and Japan, then the difference.', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'Egypt\'s strategy. On your own, no coach.', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Japan\'s chain and the pattern, with Socrates.', url: '../unit-5/lesson-5-6-industrialization-government-and-society.html#modules' }
        ]
      },
      notes: {
        minutes: 30,
        keys: [
          'All three required today, in order',
          'Skill Builder: the pattern, then the difference',
          'Checkpoint 1: Egypt, no coach',
          'Checkpoint 2: Japan\'s chain and the pattern',
          'Checkpoint 2 unfinished = homework',
          'Early finishers: Evidence Lab'
        ],
        land: [
          'This one slide replaces five (Checkpoint 1, the Skill Builder, Myth and Evidence, the Evidence Lab and Checkpoint 2, 2026-11-08). Modules 05, 06 and 10 are all required today (Jeff\'s rule of 2026-10-23: 02, 06 and 10 on every topic, plus at least one chosen). Each button opens its module.',
          'The Skill Builder (Module 05) practises the CED\'s suggested skill for 5.6, 5.A, on the topic\'s two cases. The module models the frame on the race case, then asks for the pattern across Egypt and Japan, then the difference. Circulate for students who name a shared link that is really in both cases (fear of stronger powers; state money; foreign machines and experts; farmers paying; the army as the goal), not a fact true of only one. If a student needs the frame, give it aloud (slide 16): "Both ___ and ___ ___. That is the pattern. But ___ ___, while ___ ___, because ___." Ask "What is one link that shows up in both chains?" and listen for: both bought foreign machines and hired foreign experts; both were paid for by farmers; both were driven by fear of stronger powers.',
          'Checkpoint 1 (Module 06), with no coach, is the diagnostic. It assesses Target 1 (KC-5.1.V.C): why a government built industry itself (for example Muhammad Ali\'s Egypt), what it did, and two causes of the result, one from outside the country and one from inside. Give feedback in the room. Ask which cause from outside Egypt they used, and which from inside; listen for the 1840 and 1841 settlement or the 1838 treaty, and missing coal, drafted workers or new managers.',
          'Checkpoint 2 (Module 10): how did outside pressure lead to Japan\'s industry and power, and what pattern does Japan share with Egypt? Students trace Japan\'s chain from Perry to regional power, with evidence for each link, including what happened to the state\'s businesses after 1880, then name one link Japan shares with Egypt and one difference in the results. It assesses Target 2 (KC-5.2.II.A) and the learning objective, and declares Causation: draft, Socrates, revise. If it is not finished in class, it is homework.',
          'A strong Checkpoint 2 answer: in 1853 Perry\'s warships forced Japan to open its ports, and the treaties of 1854 and 1858 let foreigners be tried in their own courts and took away Japan\'s control of its trade; in 1868 the Meiji leaders took power, abolished the domains in 1871 and created a land tax paid in money, which paid for the state\'s railway from Tokyo to Yokohama and the Tomioka Silk Mill in 1872; from 1880 the government sold most of its industries to companies such as Mitsui and Mitsubishi; in 1894 Britain agreed to end its foreign courts in Japan, and in 1895 Japan defeated China and took Taiwan. Like Egypt, Japan\'s government built industry with foreign machines and experts because it feared stronger powers; unlike Egypt, whose mills mostly closed after Europe cut its army in 1841, Japan\'s industry lasted, because it was independent, reformed its whole society, had coal and handed its industries to private companies.',
          'Early finishers: the Evidence Lab (Module 07, optional when the deck was built, now the early-finisher option). The cards pair real objects (Couder\'s portrait of Muhammad Ali, the Japanese broadsheet of Perry\'s ship, the Iwakura Mission photograph, the 1872 Takanawa railway print, Kiyochika\'s 1895 war cartoon) with the 1841 decree\'s army clause as a text card. Students choose at least two cards and say what kind of source each is (a commissioned portrait, a broadsheet sold to the public, a posed photograph, a print made to sell, wartime propaganda), which link in which chain it shows, and one thing it cannot tell them: whether the strategy worked, because a portrait, a print or a photograph shows a moment or a message, not the result. Or the Primary Source, the Charter Oath (1868), as an extension.'
        ],
        ask: 'Where in your answer is the cause, and where is the effect?',
        listenFor: 'Checkpoint 2: outside pressure as the cause; reform, industry and regional power as the effects, with the links between them explained.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'Two states built industry. Japan\'s grew. Egypt\'s mostly closed.',
      subtitle: 'The Citadel of Cairo, where Muhammad Ali ruled. Next, Topic 5.7: who owned the industrial world\'s businesses, and how money moved.',
      notes: {
        minutes: 2,
        keys: [
          'Real photochrom: the Citadel of Cairo',
          'Land the spine',
          'Hand-off to 5.7: who owned, how money moved'
        ],
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
