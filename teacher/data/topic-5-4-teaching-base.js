/*
 * Topic 5.4 canonical Teaching OS source.
 * CED: Fall 2026 p. 103 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Continuity and Change. Suggested skill: 5.A Making Connections (identify
 * patterns among or connections between historical developments and
 * processes). Learning objective E: explain how different modes and locations
 * of production have developed and changed over time. Key Concepts:
 * KC-5.1.II.B (the factory regions' share rose; the Middle East's and Asia's
 * fell while they continued to produce), KC-5.1.I.D (the methods spread to
 * other parts of Europe, the United States, Russia and Japan). Illustrative
 * examples (optional): shipbuilding in India and Southeast Asia, iron works in
 * India, textile production in India and Egypt.
 * Story: docs/TOPIC-5-4-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Who Made the
 * World's Goods?" is written from the same story, and this deck retells it.
 * Spine: factory methods spread from Britain to other parts of Europe, the
 * United States, Russia and Japan, carried by people, machines and money. The
 * factory regions made a fast-growing share of the world's goods. India, China
 * and the Middle East kept making goods, mostly by hand, but a shrinking share.
 * Wall version: The factory traveled. The share moved. The old makers kept
 * making.
 * Retelling slide: continuity and change (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.4',
    minutes: 90,
    title: 'Industrialization Spreads in the Period from 1750 to 1900',
    subtitle: 'Factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan, carried by people, machines and money. The factory regions made a fast-growing share of the world\'s goods. India, China and the Middle East kept making goods, mostly by hand, but a shrinking share.',
    essentialQuestion: 'Where did the new way of making things go, and what happened to the places that made the world\'s goods before?',
    apFocus: 'Continuity and Change, with Making Connections 5.A',
    endTarget: 'Students can explain how the modes and locations of production changed from 1750 to 1900: hand production gave way to steam-powered factories, and factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan, carried by skilled people, machines and money, where coal and water were waiting; the factory regions\' share of the world\'s manufacturing rose; and producers in India, China, Egypt and the Middle East kept making cloth, ships and other goods, mostly by hand, while their share fell, with Indian textiles and the Bombay Dockyard as the cases.'
  },

  priorities: {
    must: [
      'Answer the objective as written: modes AND locations. Every "where" slide also says "how": by hand, or by steam-powered machines.',
      'Teach all four destinations of KC-5.1.I.D: other parts of Europe, the United States, Russia and Japan (slide 7), and what carried the methods (slide 8).',
      'Teach both halves of KC-5.1.II.B: the factory regions\' share rose (slide 13), and the Middle East and Asia kept producing while their share fell (slide 14).',
      'Say "share," and teach what it means: a share can fall while output holds (the pizza, slide 13 notes).',
      'Model 5.A: find the pattern across cases (slides 10 and 11).'
    ],
    should: [
      'Use the CED\'s own examples for the continuity: textile production in India (slides 5, 14 and 15) and shipbuilding in India (slide 14).',
      'Keep the causes of India\'s falling share plural and argued: cheaper machine-made cloth, the trade rules of those in power, and older troubles. Never one cause stated as fact.',
      'Correct three myths: "Asia stopped making things," "industry spread everywhere," and "India fell behind only because British machines were better."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Who Made the World\'s Goods?"',
      'Use the Primary Source as an extension for early finishers.',
      'For a class that is ahead: the historians\' argument over India\'s "deindustrialization" (slide 15 notes).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.3. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the Great Exhibition.', students: 'Predict where the factory went.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Who Made the World\'s Goods?" in class.', students: 'List the changes and the continuity.', slide: 4 },
    { id: 'before', label: 'The World in 1750', range: '17-19', minutes: 2, teacher: 'Who made the world\'s goods.', students: 'Say where most goods were made.', slide: 5 },
    { id: 'secret', label: 'Keeping the Secret', range: '19-21', minutes: 2, teacher: 'The laws, and Slater.', students: 'Say why the laws failed.', slide: 6 },
    { id: 'spread', label: 'Where It Went', range: '21-24', minutes: 3, teacher: 'The four destinations, in order.', students: 'Name the stops.', slide: 7 },
    { id: 'carriers', label: 'What Carried It', range: '24-26', minutes: 2, teacher: 'People, machines, money, on coal.', students: 'Match each to a case.', slide: 8 },
    { id: 'latecomers', label: 'Russia and Japan', range: '26-28', minutes: 2, teacher: 'The latecomers, with British machines.', students: 'Say what the two share.', slide: 9 },
    { id: 'model', label: 'Find the Pattern', range: '28-30', minutes: 2, teacher: 'Model 5.A on an everyday case.', students: 'Say the pattern aloud.', slide: 10 },
    { id: 'practice', label: 'The Pattern in the Cases', range: '30-32', minutes: 2, teacher: 'Five cases, one pattern.', students: 'Name the pattern before the reveal.', slide: 11 },
    { id: 'skill', label: 'Skill Builder', range: '32-40', minutes: 8, teacher: 'Module 05: Making Connections 5.A.', students: 'Find and state a pattern.', slide: 12 },
    { id: 'shares', label: 'The Shares Move', range: '40-43', minutes: 3, teacher: 'The change: Bairoch\'s estimates.', students: 'Read the three lines.', slide: 13 },
    { id: 'continued', label: 'The Old Makers Kept Making', range: '43-45', minutes: 2, teacher: 'The continuity: weavers and ships.', students: 'Name what continued.', slide: 14 },
    { id: 'why', label: 'Why the Share Fell', range: '45-48', minutes: 3, teacher: 'India\'s cloth trade turns around.', students: 'Trace the chain.', slide: 15 },
    { id: 'myths', label: 'Myth and Evidence', range: '48-50', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 16 },
    { id: 'retell', label: 'Who Made the World\'s Goods?', range: '50-53', minutes: 3, teacher: 'Students redraw the change and the continuity.', students: 'Retell the whole topic.', slide: 17 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '53-54', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 18 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: how the methods spread.', students: 'Work without the coach.', slide: 19 },
    { id: 'evidence', label: 'Evidence Lab', range: '54-62', minutes: 8, teacher: 'Module 07: two sources, a change or a continuity.', students: 'Observe, then infer, then name a limit.', slide: 20 },
    { id: 'cp2', label: 'Checkpoint 2', range: '62-74', minutes: 12, teacher: 'Module 10: the shares, and what continued. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 21 },
    { id: 'close', label: 'Landing Sentence', range: '74-76', minutes: 2, teacher: 'Land the answer and hand off to 5.5.', students: 'Say the topic in one sentence.', slide: 22 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.4', url: '../unit-5/lesson-5-4-industrialization-spreads.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-4-industrialization-spreads-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-4-industrialization-spreads.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-4-slide',
    title: 'Topic 5.4 Presentation',
    file: 'present-topic-5-4.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'The factory traveled. The share moved. The old makers kept making.',
      subtitle: 'Continuity and Change, with Making Connections 5.A. Where did the new way of making things go, and what happened to the places that made the world\'s goods before?',
      notes: {
        minutes: 2,
        land: [
          'CED p. 103. One learning objective, E (Technology and Innovation): explain how different modes and locations of production have developed and changed over time. The reasoning process is Continuity and Change (p. 95); the suggested skill is 5.A, identify patterns among or connections between historical developments and processes.',
          'Key Concepts: KC-5.1.II.B (the rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions\' share of global manufacturing during the first Industrial Revolution; while Middle Eastern and Asian countries continued to produce manufactured goods, these regions\' share in global manufacturing declined); KC-5.1.I.D (as new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan).',
          'Illustrative examples (optional, p. 103): shipbuilding in India and Southeast Asia; iron works in India; textile production in India and Egypt. This deck uses Indian textiles and the Bombay Dockyard, with Egypt\'s weavers in one line. The page also lists a PD module, "Comparison in Period 5," on Russia and Japan; not used, because comparison is not 5.4\'s reasoning process and how those states built industry is 5.6\'s.',
          'Owns: the spread (KC-5.1.I.D) and the shares (KC-5.1.II.B). Bridge only: how governments sponsored industry, Meiji reform and Muhammad Ali\'s state mills (5.6); steam engines and fossil fuels (5.5; steam is named here as what made factory goods cheap); free trade (5.7); colonial economies (Unit 6); workers\' lives (5.9).',
          'Modes and locations: the objective has two halves. "Locations" is where goods were made; "modes" is how, by hand or by steam-powered machines. Every slide carries both.',
          'Three myths, on slide 16: "Asia stopped making things"; "industry spread everywhere"; "India fell behind only because British machines were better."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan, and those regions made a growing share of the world\'s goods, while India, China and the Middle East kept making goods by hand but a shrinking share.',
        avoid: 'Avoid "colonialism blocked industrialization" as the answer. The CED\'s sentence is about shares, and it insists the old makers continued to produce. The causes of their falling share are several, and historians argue over them. And avoid Meiji Japan\'s reforms: they are Topic 5.6.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.3', text: 'Name one thing nature gave Britain, and one thing people built.' },
          { label: 'Topic 5.3', text: 'What two things did the factory change about work?' },
          { label: 'Topic 5.3', text: 'In 1750, where did much of the world\'s cotton cloth come from?' }
        ],
        turn: 'The factory put the work **under one roof**. That way of making things did not stay in Britain. And India, which made so much of the world\'s cloth, is about to meet it. **Where did the factory go?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: coal, iron, water, or the shortage of wood (nature); better farms, towns, laws, cotton from abroad, or capital (people). One place, and one job each. India.',
          'The bridge is 5.3\'s hand-off line. Prompt 3 returns on slide 5: in 1750, India made about a quarter of the world\'s manufactured goods.'
        ],
        ask: 'If the factory needed coal, water, people and money in Britain, what would it need to start somewhere else?',
        listenFor: 'The same things, plus someone who knew how to build the machines. That is today.',
        ap: 'Retrieval plus bridge: 5.3 explained why the factory began in Britain; 5.4 follows where it went and what happened to the old makers.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'Where did the new way of making things go?',
      subtitle: 'And what happened to the places that made the world\'s goods before?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real painting: Henry Courtney Selous, The Opening of the Great Exhibition by Queen Victoria on 1 May 1851, oil, Victoria and Albert Museum, public domain (copy mirrored from Wikimedia Commons). The Great Exhibition, in the Crystal Palace in Hyde Park, London, gathered machines and goods from Britain and from many other countries under one glass roof.',
          'Why open here: the topic is about where the world\'s goods were made and how. In 1851 machines and hand-made goods stood side by side in one building; the BeInTheRoom scenario is set there.',
          'The painting shows the ceremony, not the exhibits: the queen, the royal family and officials under the glass. It was painted to celebrate the event.'
        ],
        ask: 'Predict: after Britain, where would the factory go next, and why there?',
        listenFor: 'Places with coal and iron; places close to Britain; places with money to invest. Write the guesses down and check them on slide 7.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read, and keep two lists.',
      subtitle: 'Changes: where goods were made, and how. Continuity: who kept making goods, and how.',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-4-industrialization-spreads-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "Who Made the World\'s Goods?" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who keep both lists, and who write "share," not "amount," for the change.',
          'Question 01 is the pattern in how the methods spread; question 02 is the change in shares, with numbers; question 03 is one continuity and one change in India. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'What surprised you more: where the factory went, or who kept making things?',
        listenFor: 'That India and China made more than half of the world\'s goods in 1750; that Slater carried the machines in his head; that India built warships for Britain.'
      }
    },
    {
      phase: 'before', kind: 'story-scene', eyebrow: 'Before · About 1750',
      kc: 'KC-5.1.II.B', title: 'Most goods were made by hand, most of them in Asia.',
      footer: 'Estimates by the economic historian Paul Bairoch: they show size, not exact amounts.',
      template: {
        steps: [
          { label: 'China', text: 'About **a third** of the world\'s manufactured goods.' },
          { label: 'India', text: 'About **a quarter**: cotton cloth sold across Asia, Africa and Europe.' },
          { label: 'Europe', text: 'About **a quarter**, all of it together.' },
          { label: 'Britain', key: true, text: '**Under 2 percent.**' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.II.B begins from here: the share Europe and the United States gained is the share Asia lost. The baseline is about 1750.',
          'The picture is a real object: a palampore, a hanging of cotton painted and dyed by hand on the Coromandel Coast of southeast India in the early 1700s, made for buyers in Sri Lanka (The Metropolitan Museum of Art, 2010.337, public domain). It is what India\'s hand production looked like at its best: the kind of cloth Lancashire first copied.',
          'The figures: Paul Bairoch, "International Industrialization Levels from 1750 to 1980," Journal of European Economic History 11 (1982), reprinted in Paul Kennedy, The Rise and Fall of the Great Powers (1987), Table 6. 1750: China 32.8 percent, India 24.5 (the whole subcontinent), Europe 23.2, Britain 1.9 (Clingingsmith and Williamson, NBER 10586, Table 3; University of Houston Digital History). They are reconstructions: Baldwin and Martin explain that the early Asian shares come largely from Asia\'s large population times a per-person output much like Europe\'s. Use them for the size of the change.',
          'India\'s cloth: Indian cottons, from fine muslins to cheap printed calicoes, were traded across the Indian Ocean, into the Middle East, to West Africa (where they were exchanged for enslaved people) and to Europe. Lancashire\'s cotton industry grew up copying them (5.3).',
          'The mode: almost all of it by hand, at home or in workshops. This is the "mode of production" half of the objective.'
        ],
        ask: 'If Britain made under 2 percent of the world\'s goods in 1750, what has to happen for that to change?',
        listenFor: 'Britain has to make far more, far faster: the factory. And the change has to spread.',
        ap: 'KC-5.1.II.B, the starting point for the change.'
      }
    },
    {
      phase: 'secret', kind: 'case-file', eyebrow: 'How It Spread · People',
      kc: 'KC-5.1.I.D', title: 'Britain tried to keep the secret.',
      template: {
        tag: 'Law',
        place: 'Britain',
        date: 'to 1824 and 1843',
        rows: [
          { label: 'Workers', text: 'Skilled textile workers were **banned from leaving** to work abroad, until 1824' },
          { label: 'Machines', text: 'Textile machines were **banned from export**, until 1843' },
          { label: '1789', text: 'Samuel Slater, trained at **Strutt\'s mill**, sails for America, telling no one' },
          { label: 'Pawtucket', text: 'He builds water-powered spinning machines **from memory**' }
        ],
        proves: 'A port could search a crate, but not a memory.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D: the methods "spread." This slide is how the first spread happened: in people\'s heads.',
          'The laws: the Artificers Going Abroad Act of 21 June 1824 repealed the ban on skilled workers leaving; Gladstone\'s bill of August 1843 removed the restrictions on exporting machinery (Hansard). Some textbooks give 1825 and 1842. David Jeremy (Business History Review) calls the policy "incapable of enforcement": machines and workers both got out.',
          'Slater: apprenticed to Jedediah Strutt, Arkwright\'s partner at Cromford (5.3), at Belper, Derbyshire (Belper Research). He sailed in September 1789, carrying "the memorized details of everything he had learned" (EBSCO); the story that he went disguised as a farm laborer is legend. Hired by Moses Brown, working with Brown\'s kinsmen Almy and Brown, he had water-powered spinning machines running at Pawtucket, Rhode Island, in December 1790; the Slater Mill building followed in 1793 (National Park Service, Blackstone River Valley).',
          'This is the 5.3 factory, Cromford\'s machines, moving to a new country with one man.'
        ],
        ask: 'Why could a law stop a machine but not Slater?',
        listenFor: 'He carried the designs in his memory, so there was nothing to search.',
        ap: 'KC-5.1.I.D.'
      }
    },
    {
      phase: 'spread', kind: 'diffusion-path', eyebrow: 'How It Spread · Where It Went',
      kc: 'KC-5.1.I.D', title: 'Where the new methods went.',
      footer: 'One case at each stop, not the first arrival. Each added its own coal, water and money.',
      template: {
        stops: [
          { place: 'Britain', date: '1771', text: 'Cromford: spinning under one roof' },
          { place: 'United States', date: '1790s', text: 'Slater\'s mill at Pawtucket' },
          { place: 'Belgium', date: '1817', text: 'Cockerill\'s works at Seraing, on coal' },
          { place: 'German states', date: '1835', text: 'A railway, with an English engine' },
          { place: 'Russia', date: '1870s', text: 'Hughes\'s ironworks on the Donets coal' },
          { place: 'Japan', date: '1883', text: 'The Osaka Spinning Company, by steam' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.I.D names the destinations: "other parts of Europe and the United States, Russia, and Japan." All four are on this slide, in the order the methods arrived.',
          'Belgium: John Cockerill (1790 to 1840), son of the English machine builder William Cockerill; the Seraing works began production on 25 January 1817 and by the mid-1820s were called "the industrial wonder of Europe" (Encyclopedia of Europe, 1789-1914). Machine building came first; the works\' coke blast furnace was begun in 1823 and producing by 1826. Belgium was the first country on the European mainland to industrialize, on the coal of the Sambre-Meuse valley. The mainland\'s first steam passenger railway ran from Brussels to Mechelen on 5 May 1835 (Canon of Flanders).',
          'German states: the Nuremberg to Fürth line opened on 7 December 1835 with the locomotive Adler, built by Robert Stephenson and Company in Newcastle. The Ruhr\'s coal and iron industry grew later in the century. Northern France industrialized around Lille and its coalfields.',
          'Russia: John Hughes, a Welsh engineer; his New Russia Company was registered in London in 1869, he brought a team out in 1870, and the first blast furnace was lit in 1871 (Glamorgan Archives). The settlement became Hughesovka, or Yuzovka, now Donetsk. Russia\'s industrial output grew 8 to 9 percent a year in the 1890s (Journal of Economic History, 2025).',
          'Japan: the Osaka Spinning Company, a private company promoted by Shibusawa Eiichi, founded 1882, began spinning in 1883 with 10,500 English mule spindles driven by steam, and ran a night shift from 1883; electric light came in 1886 (Takeshi Abe; Osaka City). Its profits set off Japan\'s spinning boom; in 1897 Japan\'s cotton yarn exports passed its imports (IDE-JETRO).',
          'Check the question-slide predictions: which places did the class guess?'
        ],
        ask: 'What do the first three stops have in common with Britain?',
        listenFor: 'Coal and iron, rivers, and money to invest: the 5.3 factors again.',
        ap: 'KC-5.1.I.D: all four destinations.'
      }
    },
    {
      phase: 'carriers', kind: 'equation', eyebrow: 'How It Spread · What Carried It',
      kc: 'KC-5.1.I.D', title: 'Three things traveled together.',
      footer: 'Most took root near coal, or by rivers that could turn wheels.',
      template: {
        terms: [
          { word: 'People', note: 'who knew the machines: Slater, Cockerill, Hughes' },
          { word: 'Machines', note: 'from Britain: the Nuremberg engine, Osaka\'s spindles' },
          { word: 'Money', note: 'to pay first: Boston merchants at Lowell' }
        ],
        result: { word: 'A factory in a new place', note: 'near coal or a river' }
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D says the methods spread. This slide is how: three carriers, and the resources that let them take root.',
          'People first, while the British laws held (to 1824 and 1843); then machines and money. Lowell: Francis Cabot Lowell studied British power looms in 1810 to 1812 and had them rebuilt "from his memory and drawings"; with Boston merchants (the "Boston Associates") he founded the Boston Manufacturing Company at Waltham in 1814. In 1821 the Associates chose the falls of the Merrimack for the mill town of Lowell, and recruited "the daughters of New England Yankee farmers" (National Park Service).',
          'This is the deck\'s answer to "it just spread": something has to carry it.'
        ],
        ask: 'Take one away. Could a factory start in a new place without it?',
        listenFor: 'Without people, nobody can build or run the machines; without machines, there is nothing to run; without money, nobody pays before the factory earns.',
        ap: 'KC-5.1.I.D; the pattern for slide 11.'
      }
    },
    {
      phase: 'latecomers', kind: 'split-mirror', eyebrow: 'How It Spread · Russia and Japan',
      kc: 'KC-5.1.I.D', title: 'The last two came later, with British machines and know-how.',
      footer: 'How the two governments pushed industry on purpose is Topic 5.6.',
      template: {
        left: { name: 'Russia' },
        right: { name: 'Japan' },
        rows: [
          { label: 'When', left: 'Mostly after 1870; fastest in the 1890s', right: 'Mostly after 1870' },
          { label: 'A case', left: 'Hughes\'s ironworks at Yuzovka, 1870s', right: 'The Osaka Spinning Company, 1883' },
          { label: 'Carried by', left: 'A Welsh engineer and his British team', right: 'British machines, driven by steam' },
          { label: 'Started with', left: 'Ironworks, on the Donets coal', right: 'Cotton spinning, by steam' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D\'s last two destinations. Both came late, both borrowed British machines and experts, and both governments pushed industry hard: that last part is 5.6 (KC-5.1.V.C and KC-5.2.II.A). Name it, and stop.',
          'Russia: John Hughes, a Welsh engineer, ironworks at Hughesovka (Yuzovka) in the Donets basin, company registered in London 1869, first furnace 1871, with a team of British workers (Glamorgan Archives). Russia\'s industrial output grew 8 to 9 percent a year in the 1890s, with railway building and foreign loans.',
          'Japan: the Osaka Spinning Company (spinning from 1883), a private company, 10,500 English mule spindles, steam power and a night shift; its profits made it the model for Japan\'s cotton-spinning boom. Japan\'s first railway, Shinbashi (Tokyo) to Yokohama, opened on 14 October 1872, built under the British engineer Edmund Morel with British locomotives (Nippon.com).',
          'Do not teach Perry, the Meiji Restoration, the Iwakura Mission or the zaibatsu here. They are 5.6\'s.'
        ],
        ask: 'Same pattern as the first stops, or different?',
        listenFor: 'The same: British machines and know-how, set up on local resources; only later.',
        ap: 'KC-5.1.I.D.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Making Connections 5.A · Model',
      title: 'Find the pattern: the cases, what they share, the pattern.',
      footer: 'A pattern is what happens again and again across different cases.',
      template: {
        frame: 'In {{case one}}, {{case two}} and {{case three}}, {{what happened in each}}, so the pattern is {{what they all share}}.',
        exampleLabel: 'From everyday life',
        example: 'In **June**, **July** and **August**, **the town pool was busiest on the hottest afternoons**, so the pattern is **that heat brings swimmers**.'
      },
      notes: {
        minutes: 2,
        land: [
          'The CED\'s suggested skill, 5.A: "Identify patterns among or connections between historical developments and processes." A pattern needs at least two cases and a thing they share.',
          'The model is from everyday life, on purpose: First & 10 question 01, Checkpoint 1 and the Skill Builder all ask for the pattern in this topic, so a modeled history answer would be an answer to copy.',
          'A weaker answer lists the cases and stops. The pattern is the sentence after "so."'
        ],
        ask: 'What would a weaker answer leave out?',
        listenFor: 'The "so": it would list the cases and never say what they share.',
        ap: 'Making Connections 5.A, inside Continuity and Change.'
      }
    },
    {
      phase: 'practice', kind: 'ledger', eyebrow: 'Making Connections 5.A · Practice',
      kc: 'KC-5.1.I.D', title: 'Five cases. What do they share?',
      footer: 'What carried the methods to each place? What do all five share?',
      template: {
        rows: [
          { name: 'Pawtucket', tool: 'Slater\'s memory', result: 'Arkwright\'s machines rebuilt, 1790s.' },
          { name: 'Seraing', tool: 'Cockerill\'s know-how', result: 'works on the Liège coal, 1817.' },
          { name: 'Nuremberg', tool: 'An English engine', result: 'the first German railway, 1835.' },
          { name: 'Lowell', tool: 'Boston merchants\' money', result: 'cotton mills on a river, 1820s.' },
          { name: 'Osaka', tool: 'British spinning machines', result: 'run by steam, 1883.' }
        ],
        payoffLabel: 'Your turn',
        payoff: 'Say the pattern in one sentence'
      },
      notes: {
        minutes: 2,
        land: [
          'Practice on KC-5.1.I.D. The slide does not print the pattern: students say it. Take three answers before giving yours.',
          'A strong answer: "In Pawtucket, Seraing and Osaka, the factory started with British know-how or British machines, set up where there was water or coal, so the pattern is that the methods spread when people, machines and money carried them to places with the right resources."',
          'If a student says "they all copied Britain," push for the carrier: copied how? With whom? With what money?'
        ],
        ask: 'Which case breaks the pattern, if any?',
        listenFor: 'None quite does; Lowell is carried by money more than by one person (though Francis Cabot Lowell had studied British mills), which shows the carriers vary while the pattern holds.',
        ap: 'KC-5.1.I.D; Making Connections 5.A.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Find a pattern, and say it in one sentence.',
      subtitle: 'Making Connections 5.A: list the cases, find what they share, and say the pattern.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-4-industrialization-spreads.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 05 is required. It models the frame on an everyday example and asks students to find a pattern across three cases of the factory\'s spread, then a pattern in the shares.',
          'Circulate for the "so the pattern is": a shared feature, not a list.'
        ],
        ask: 'Read me your pattern sentence.',
        listenFor: 'A shared feature named after "so," not another case.'
      }
    },
    {
      phase: 'shares', kind: 'timeline-fortunes', eyebrow: 'What Changed · The Shares',
      kc: 'KC-5.1.II.B', title: 'The world\'s share of manufacturing moved.',
      footer: 'Britain alone: under 2 percent in 1750, about a fifth by 1860. A share is a part of a whole, and the whole grew enormously.',
      template: {
        range: [1750, 1900],
        tick: 50,
        note: 'Bairoch\'s estimates; one scale for all three rows',
        cases: [
          { name: 'Europe, US', note: 'Factory regions', points: [{ year: 1750, level: 1.07 }, { year: 1800, level: 1.31 }, { year: 1830, level: 1.66 }, { year: 1860, level: 2.75 }, { year: 1880, level: 3.46 }, { year: 1900, level: 3.89 }], events: [{ year: 1750, label: '1750', text: 'about a quarter' }, { year: 1860, label: '1860', text: 'about three-fifths' }, { year: 1900, label: '1900', text: 'over four-fifths' }] },
          { name: 'China', note: 'Mostly by hand', points: [{ year: 1750, level: 1.49 }, { year: 1800, level: 1.51 }, { year: 1830, level: 1.35 }, { year: 1860, level: 0.9 }, { year: 1880, level: 0.57 }, { year: 1900, level: 0.28 }], events: [{ year: 1750, label: '1750', text: 'about a third' }, { year: 1900, label: '1900', text: 'about 6 percent' }] },
          { name: 'India', note: 'Mostly by hand', points: [{ year: 1750, level: 1.11 }, { year: 1800, level: 0.9 }, { year: 1830, level: 0.8 }, { year: 1860, level: 0.39 }, { year: 1880, level: 0.13 }, { year: 1900, level: 0.08 }], events: [{ year: 1750, label: '1750', text: 'about a quarter' }, { year: 1900, label: '1900', text: 'under 2 percent' }] }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.II.B, first half: steam-powered production in Europe and the U.S. "contributed to the increase in these regions\' share of global manufacturing."',
          'The lines are drawn from Bairoch\'s estimates (1982; Kennedy, 1987, Table 6), one scale for all three rows: Europe (including Russia) and the United States together, about 23 percent in 1750 to about 86 percent in 1900; China 32.8 to 6.2; India 24.5 to 1.7. Britain alone: 1.9 percent in 1750, 19.9 by 1860. By 1900 the United States (23.6) had passed Britain (18.5); the year it did so is not settled, so say "by 1900." Say "estimates," every time. (One online copy of the table prints the US at 26.6 for 1900; that is a typo.)',
          'The pizza: the world made far more goods in 1900 than in 1750. A falling share is not, by itself, a falling amount. But be honest with the class: Bairoch also estimated that output per person fell, in India from an index of 7 in 1750 to 2 in 1880 (Clingingsmith and Williamson), so the old makers did lose ground, not only share. That is the bridge to slides 14 and 15.',
          'Why the share rose: a steam-powered mill could make cloth far faster and cheaper than hand spinners and weavers. How steam did it is 5.5.'
        ],
        ask: 'India\'s line falls almost to the floor. Did India stop making things?',
        listenFor: 'Not necessarily: the share fell; the whole grew. Slide 14 shows who kept making.',
        ap: 'KC-5.1.II.B (the change).'
      }
    },
    {
      phase: 'continued', kind: 'story-scene', eyebrow: 'What Continued · The Old Makers',
      kc: 'KC-5.1.II.B', title: 'The old makers kept making.',
      footer: 'The share shrank: the rest of the world made far more, and the old makers lost buyers.',
      template: {
        steps: [
          { label: 'Cloth', text: 'India\'s **handloom** weaving shrank but survived: a million people in one province lived by it in 1908.' },
          { label: 'Thread', text: 'Many weavers used cheaper **machine-spun** thread, and kept weaving.' },
          { label: 'Ships', text: 'Bombay\'s Wadia shipbuilders built **teak warships** for Britain\'s navy.' },
          { label: 'Elsewhere', key: true, text: 'Chinese farm families kept weaving; handlooms held steady in Aleppo and Damascus.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.II.B, second half: "While Middle Eastern and Asian countries continued to produce manufactured goods, these regions\' share in global manufacturing declined." This slide is the continuity.',
          'Handloom weavers: the economic historian Tirthankar Roy finds that handloom weaving in India "did not succumb": handloom cloth\'s share of India\'s market was roughly stable from the 1890s to the 1930s (Traditional Industry in the Economy of Colonial India). In the United Provinces alone, a 1908 report said "quite a million" people depended on handloom weaving (Rai, International Review of Social History, 2022). There is no reliable all-India headcount for 1900, so do not say "millions." Many weavers used cheaper mill-spun yarn. Hand weaving still shrank: Indrajit Ray (Economic History Review, 2009) estimates Bengal\'s industry lost about 28 percent by the mid-1800s.',
          'The pictures: a gouache of a weaver at his loom, attributed to a painter from Tanjore (Thanjavur), south India, about 1840 (Wellcome Collection, public domain), in the "types and trades" style Indian artists often made for European buyers, so probably a type, not a portrait; and Hugh Owen\'s 1851 photograph of Indian ship models under the INDIA sign at the Great Exhibition (Rijksmuseum, public domain). The models are not the Bombay Dockyard: no period picture of the dockyard could be sourced.',
          'Ships: the CED\'s example, shipbuilding in India. The Wadia family of Parsi master builders ran the Bombay Dockyard for generations; Jamsetjee Bomanjee Wadia supervised HMS Trincomalee, "one of 14 ships he would build for the Royal navy" (Royal Museums Greenwich). Built of Malabar teak and launched 12 October 1817, it is at Hartlepool, where the National Museum of the Royal Navy calls it "Britain\'s oldest warship still afloat" (not the oldest warship afloat: USS Constitution is older). Rajesh Kochhar (Current Science) counts 334 Wadia vessels from 1736 to 1884, 39 of them for the Royal Navy, and dates the end of teak warship building to iron and steam.',
          'China: Jacob Eyferth (University of Chicago): "rural hand spinning and hand weaving held out remarkably well in the face of mechanized competition"; imported yarn spread in the late 1800s, so that by about 1900 half the yarn used in China was machine-made, and weavers combined it with homespun. The Treaty of Nanjing (1842) held import taxes to about 5 percent.',
          'The Middle East: Pamuk and Williamson (Economic History Review, 2011): Ottoman producers\' share of their own cloth market fell from about 97 percent in the 1820s to 25 to 35 percent by the 1870s, yet handloom numbers in Aleppo and Damascus "show no trend at all between 1860 and World War I," and crafts such as carpet making thrived.',
          'Egypt: the CED\'s example, textile production in Egypt. By the 1830s Egypt had about 30 state textile factories, most losing money; in 1838 English cotton cloth sold in Egypt for 7.5 piastres a yard against 8.7 for Egypt\'s own (Ahmeti and Rizaj, Journal of European Economic History, 2024). Who built those mills, and why, is Topic 5.6; name it only if asked.',
          'Iron works in India (the CED\'s third example): Baldwin and Martin call it "a matching, but less dramatic, story" to textiles. Josiah Heath\'s modern ironworks at Porto Novo in south India (blast furnaces 1833) was "a commercial failure" (Grace\'s Guide).'
        ],
        ask: 'If the weavers kept weaving, why does the share fall?',
        listenFor: 'Because everyone else\'s production, made by machines, grew much faster, and because the old makers lost buyers to cheaper machine-made goods (slide 15).',
        ap: 'KC-5.1.II.B (the continuity).'
      }
    },
    {
      phase: 'why', kind: 'cause-chain', eyebrow: 'Why the Share Fell · India\'s Cloth',
      kc: 'KC-5.1.II.B', title: 'India\'s cloth trade turned around.',
      footer: 'Historians still argue how much each cause mattered: cheaper machines, the rules of those in power, and older troubles.',
      template: {
        steps: [
          { label: 'Machines', text: 'Lancashire\'s steam mills make cloth cheaper than hands can' },
          { label: 'Rules', text: 'British cloth enters India at a 2½ percent tax; Britain taxes Indian cloth heavily' },
          { label: 'By about 1830', text: 'India buys more cotton cloth than it sells' },
          { label: 'Then', text: 'India sells raw cotton to British mills and buys British cloth', key: true }
        ],
        links: ['and', 'so', 'and']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.II.B: why the share fell, in one case. This is a chain of causes, and one link is a choice made by people in power.',
          'The reversal: Montgomery Martin told a Commons committee in 1840 that India\'s cotton goods exports fell from £1.3 million (1815) to under £100,000 (1832), while cotton goods imported from England rose from £26,300 to over £400,000 (quoted in R. C. Dutt, India in the Victorian Age, 1904, p. 112). Twomey (1983) and Broadberry and Gupta: India became a net importer of cotton cloth "from about 1830." Say "by about 1830," not "by 1820."',
          'The rules: the East India Company\'s monopoly of trade with India ended in 1813, opening India to British private traders. British cottons entered India at 2½ percent (Martin, 1840; Dutt). Going the other way, around 1813 Indian calicoes paid British duties of about 71 to 85 percent of their value (Indrajit Ray, 2009); muslins paid less, and the duties fell to 10 percent by 1832. Do not say "70 to 80 percent on all Indian cloth."',
          'The argument: historians weigh three things. British machine-made cloth was cheaper; Ray (2009) concludes that Bengal\'s decline "is better explained by technological innovations in Great Britain" than by discriminatory policy, which "undoubtedly depressed the industry\'s export outlet." The rules were made by the people in power, not by India (R. C. Dutt\'s nationalist case). And David Clingingsmith and Jeffrey Williamson (Explorations in Economic History, 2008) find "local supply side forces were important from as early as 1700": the Mughal empire\'s breakup and more frequent droughts. Teach it as an argument, and never as a single cause.',
          'The ships followed the same path: by the middle of the 1800s navies were turning to iron, steam-driven warships, and Bombay\'s teak warship building came to an end (Kochhar).'
        ],
        ask: 'Which link is a choice someone made?',
        listenFor: 'The rules: Britain set the high taxes on Indian cloth, and the East India Company\'s government let British cloth into India at 2½ percent. The machines were cheaper, but the rules decided who could sell where.',
        ap: 'KC-5.1.II.B (the mechanism of the change).'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Asia stopped making things.', evidence: 'It kept making them: India\'s hand weavers, China\'s farm weavers, Bombay\'s teak warships. Its share fell.', source: 'KC-5.1.II.B' },
          { myth: 'Industry spread everywhere.', evidence: 'It spread to a few regions, mostly ones with coal: other parts of Europe, the United States, Russia and Japan.', source: 'KC-5.1.I.D' },
          { myth: 'India fell behind only because British machines were better.', evidence: 'The machines were cheaper, but the rules of those in power mattered too, and historians argue how much.', source: 'KC-5.1.II.B' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Myth 1 is slides 13 and 14: the CED\'s own words, "continued to produce manufactured goods."',
          'Myth 2: KC-5.1.I.D names four destinations. Within them, industry clustered on coal (Belgium\'s Sambre-Meuse, the Ruhr, Pennsylvania, the Donets).',
          'Myth 3: slide 15. The opposite myth is just as wrong: "colonialism alone blocked India." Both causes, and older ones, are in the argument.'
        ],
        ask: 'Which myth would most hurt an essay answer, and why?',
        listenFor: 'Myth 1: it drops the continuity, which is half of the CED\'s sentence.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'continuity-change', eyebrow: 'The Whole Topic',
      title: 'Who made the world\'s goods?',
      footer: 'The factory traveled. The share moved. The old makers kept making.',
      template: {
        date: 'The factory',
        before: { tag: 'About 1750', items: ['Goods made **by hand**, at home and in workshops', 'Most made in **Asia**: China and India'] },
        after: { tag: 'By 1900', items: ['Factory methods in **Europe, the US, Russia, Japan**', 'Europe and the US make **over four-fifths**'] },
        continued: { tag: 'Continued', items: ['Indian and Chinese weavers keep weaving', 'Bombay builds teak warships', 'But their **share** shrinks'] }
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide: the change and the continuity around one turning point. Ask students to close their notes and redraw it, before, after and the band underneath, then compare with the slide.',
          'Point to the two halves of the objective: modes (by hand, by steam-powered machine) and locations (Asia, then Europe and the United States, Russia and Japan). The band is the CED\'s "continued to produce."'
        ],
        ask: 'Redraw it from memory. Which part is the change, and which is the continuity?',
        listenFor: 'The change: how and where goods were made, and the shares. The continuity: the old makers kept making.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis',
      kc: 'Unit 5: Learning Objective E', title: 'Say it in one sentence.',
      template: {
        frame: 'Factory methods spread from Britain to the rest of Europe, the US, ___ and ___, carried by people, ___ and money. Their ___ of the world\'s goods rose. Asia kept ___ goods, but its share ___.',
        words: ['Russia', 'Japan', 'machines', 'share', 'making', 'fell'],
        prompt: 'Fill it in from memory. Then say it again with one example for the change and one for the continuity.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective E: "Explain how different modes and locations of production have developed and changed over time." The sentence is the whole answer; the examples make it an AP answer.',
          'A strong version: between 1750 and 1900 production moved from hand work to steam-powered factories, and factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan, carried by skilled people like Samuel Slater, by British machines and by investors\' money; Europe and the United States\' share of world manufacturing rose from about a quarter to over four-fifths, while India and China kept making goods, with Indian hand weaving shrinking but surviving and Chinese farm families still weaving at home, but their shares fell to a few percent.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for the change and one for the continuity have the objective.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'How did the factory spread, and what carried it?',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-4-industrialization-spreads.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional. Checkpoint 1 assesses Target 1: where the methods spread, what carried them, and the pattern.'
        ],
        ask: 'Which carrier was hardest to find evidence for?',
        listenFor: 'A destination, a carrier and a pattern.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Two sources: a change, or a continuity.',
      subtitle: 'Choose two cards. For each: what kind of source it is, what it shows about a change or a continuity in how or where goods were made, and what it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-4-industrialization-spreads.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 07 is required. The cards pair real objects and verified excerpts; see the lesson\'s Evidence Lab.',
          'Listen for students who name what kind of source each card is, and who say which half of the CED\'s sentence it supports: the change or the continuity.'
        ],
        ask: 'What can your source not tell you?',
        listenFor: 'Whether it is typical: one mill, one ship or one weaver is a case, not a share.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'What changed, and what continued, in who made the world\'s goods?',
      subtitle: 'Explain how the share of the world\'s manufacturing changed from 1750 to 1900, with two numbers; explain one cause of the change; and explain what continued in India or China, with evidence. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-4-industrialization-spreads.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Module 10 is required: draft, Socrates, revise. It assesses Target 2 (KC-5.1.II.B) and declares Continuity and Change.',
          'A strong answer: in 1750 China made about a third of the world\'s manufactured goods and India about a quarter, mostly by hand, while Britain made under 2 percent; steam-powered factories made goods faster and cheaper, so by 1900 Europe and the United States made over four-fifths, and India\'s share fell under 2 percent; one cause was that Lancashire\'s machine-made cloth undersold hand-made cloth, even in India, where it paid a tax of only 2½ percent, so that by about 1830 India bought more cotton cloth than it sold; but India kept making goods, with hand weavers still at work (about a million in one province in 1908) and Bombay\'s shipyards building teak warships; so the share changed, while production continued.'
        ],
        ask: 'Where in your answer is the change, and where is the continuity?',
        listenFor: 'The change in shares and in how goods were made; the continuity in who kept making them.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'The factory traveled. The share moved. The old makers kept making.',
      subtitle: 'Mills at Lowell, Massachusetts, photographed between 1900 and 1910. Next, Topic 5.5: factories needed coal, and steam engines turned it into power on a scale nobody had seen. How did the machines themselves change the world?',
      notes: {
        minutes: 2,
        land: [
          'Land the spine, then the hand-off to 5.5: the machines themselves, steam and the fossil-fuel revolution, the second industrial revolution, and railways, steamships and the telegraph.',
          'The picture is a real photograph: mills on the Merrimack River at Lowell, Massachusetts, by the Detroit Publishing Company, between 1900 and 1910 (Library of Congress, public domain), at the very end of this topic\'s dates. The water-powered mill town of the 1820s had become a city of brick mills and smokestacks, a long way from Slater\'s wooden mill on the lecture card and in the Evidence Lab.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: Slater building machines from memory; India\'s share falling while its weavers kept weaving.'
      }
    }
  ]
};
