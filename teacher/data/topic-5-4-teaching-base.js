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
      subtitle: 'Changes: where goods were made, and how. Continuities: who kept making goods, and how.',
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
        listenFor: 'That India and China made most of the world\'s goods in 1750; that Slater carried the machines in his head; that India built warships for Britain.'
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
          'The figures: Paul Bairoch, "International Industrialization Levels from 1750 to 1980," Journal of European Economic History 11 (1982), reprinted in Paul Kennedy, The Rise and Fall of the Great Powers (1987), Table 6. They are estimates built backward from population and output guesses, and every serious user calls them rough. Use them for the size of the change.',
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
        proves: 'Machines can be stopped at a port. Memories cannot.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D: the methods "spread." This slide is how the first spread happened: in people\'s heads.',
          'The laws: Britain banned the emigration of skilled artisans (repealed 1824) and the export of textile machinery (the last bans lifted in 1843). How well they worked is argued: machines and workers both got out.',
          'Slater: apprenticed at Jedediah Strutt\'s mill at Belper, Derbyshire; Strutt was Arkwright\'s partner (5.3). He left in 1789 and, with the merchant Moses Brown\'s partners, built Arkwright-style water-powered spinning machinery at Pawtucket, Rhode Island, from 1790; the Slater Mill building dates from 1793 (National Park Service, Blackstone River Valley).',
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
      footer: 'Each stop got the methods later, and each added its own coal, water and money.',
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
          'Belgium: John Cockerill, son of the English machine builder William Cockerill, set up iron and machine works at Seraing near Liège from 1817, on the Sambre-Meuse coalfield.',
          'German states: the Nuremberg to Fürth line opened in December 1835 with the locomotive Adler, built by Robert Stephenson and Company in Newcastle. The Ruhr\'s coal and iron industry grew from the 1840s and 1850s. Northern France industrialized around Lille and its coalfields.',
          'Russia: John Hughes, a Welsh engineer, founded the New Russia Company\'s ironworks in the Donets basin from 1869 to 1870; the settlement became Yuzovka (now Donetsk). Russian industry grew fastest in the 1890s.',
          'Japan: the Osaka Spinning Company, a private company promoted by Shibusawa Eiichi, began spinning in 1883 with British mule-spinning machines driven by steam, and worked day and night shifts.',
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
      footer: 'And they took root where coal, iron and water were waiting.',
      template: {
        terms: [
          { word: 'People', note: 'who knew the machines: Slater, Cockerill, Hughes' },
          { word: 'Machines', note: 'from Britain: the Adler, Osaka\'s spindles' },
          { word: 'Money', note: 'to pay first: Boston merchants at Lowell' }
        ],
        result: { word: 'A factory in a new place', note: 'on coal and water' }
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D says the methods spread. This slide is how: three carriers, and the resources that let them take root.',
          'People first, while the British laws held (to 1824 and 1843); then machines and money. Lowell: the Boston Manufacturing Company\'s merchants (the "Boston Associates") built cotton mills at Lowell, Massachusetts, from the 1820s, and hired young women from New England farms.',
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
          { label: 'Carried by', left: 'A Welsh engineer and foreign money', right: 'British machines, driven by steam' },
          { label: 'Built on', left: 'The Donets coal and iron', right: 'Cotton spinning, day and night' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.D\'s last two destinations. Both came late, both borrowed British machines and experts, and both governments pushed industry hard: that last part is 5.6 (KC-5.1.V.C and KC-5.2.II.A). Name it, and stop.',
          'Russia: John Hughes, a Welsh engineer, ironworks at Yuzovka in the Donets basin from 1869 to 1870, with British capital and workers. Russia\'s industry grew fastest in the 1890s, with heavy foreign investment and railway building.',
          'Japan: the Osaka Spinning Company (1883), a private company, British Platt mule spinning machines, steam power and day and night shifts; it became the model for Japan\'s cotton-spinning boom. Japan\'s first railway, Shinbashi (Tokyo) to Yokohama, opened in 1872 with British engineers.',
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
      footer: 'Say the pattern in one sentence, then check it against the bracket.',
      template: {
        rows: [
          { name: 'Pawtucket', tool: 'Slater\'s memory', result: 'Arkwright\'s machines rebuilt, 1790s.' },
          { name: 'Seraing', tool: 'Cockerill\'s know-how', result: 'works on the Liège coal, 1817.' },
          { name: 'Nuremberg', tool: 'An English engine', result: 'the first German railway, 1835.' },
          { name: 'Lowell', tool: 'Boston merchants\' money', result: 'cotton mills on a river, 1820s.' },
          { name: 'Osaka', tool: 'British spinning machines', result: 'run by steam, 1883.' }
        ],
        payoffLabel: 'The pattern',
        payoff: 'People, machines, money'
      },
      notes: {
        minutes: 2,
        land: [
          'Practice on KC-5.1.I.D. Ask for the pattern before pointing at the bracket.',
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
      footer: 'A share is a part of the whole. The whole grew enormously.',
      template: {
        range: [1750, 1900],
        tick: 50,
        note: 'Bairoch\'s estimates; one scale for all three rows',
        cases: [
          { name: 'Europe and the US', note: 'Steam-powered factories', points: [{ year: 1750, level: 1.07 }, { year: 1800, level: 1.31 }, { year: 1830, level: 1.66 }, { year: 1860, level: 2.75 }, { year: 1880, level: 3.46 }, { year: 1900, level: 3.89 }], events: [{ year: 1750, label: '1750', text: 'about a quarter' }, { year: 1860, label: '1860', text: 'Britain alone: about a fifth' }, { year: 1900, label: '1900', text: 'over four-fifths' }] },
          { name: 'China', note: 'Mostly by hand', points: [{ year: 1750, level: 1.49 }, { year: 1800, level: 1.51 }, { year: 1830, level: 1.35 }, { year: 1860, level: 0.9 }, { year: 1880, level: 0.57 }, { year: 1900, level: 0.28 }], events: [{ year: 1750, label: '1750', text: 'about a third' }, { year: 1900, label: '1900', text: 'about 6 percent' }] },
          { name: 'India', note: 'Mostly by hand', points: [{ year: 1750, level: 1.11 }, { year: 1800, level: 0.9 }, { year: 1830, level: 0.8 }, { year: 1860, level: 0.39 }, { year: 1880, level: 0.13 }, { year: 1900, level: 0.08 }], events: [{ year: 1750, label: '1750', text: 'about a quarter' }, { year: 1900, label: '1900', text: 'under 2 percent' }] }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.II.B, first half: steam-powered production in Europe and the U.S. "contributed to the increase in these regions\' share of global manufacturing."',
          'The lines are drawn from Bairoch\'s estimates (1982; Kennedy, 1987, Table 6), one scale for all three rows: Europe and the United States together, about 23 percent in 1750 to about 86 percent in 1900; China about 33 to about 6; India about 25 to under 2. Britain alone: under 2 percent in 1750, about a fifth by 1860. By 1900 the United States (about 24 percent) had passed Britain (about 19). Say "estimates," every time.',
          'The pizza: the world made far more goods in 1900 than in 1750. A falling share is not, by itself, a falling amount. That is the bridge to slide 14.',
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
      footer: 'What changed was the share, because the rest of the world\'s production grew faster.',
      template: {
        steps: [
          { label: 'Cloth', text: 'Millions of Indian **handloom** weavers were still at work in 1900.' },
          { label: 'Thread', text: 'Many wove with cheaper **machine-spun** thread, and kept weaving.' },
          { label: 'Ships', text: 'Bombay\'s Wadia shipbuilders built **teak warships** for Britain\'s navy.' },
          { label: 'Homes', key: true, text: 'Chinese farm families kept spinning and weaving; Egypt\'s weavers kept weaving.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.II.B, second half: "While Middle Eastern and Asian countries continued to produce manufactured goods, these regions\' share in global manufacturing declined." This slide is the continuity.',
          'Handloom weavers: the economic historian Tirthankar Roy argues that handloom weaving in India survived and adapted, with millions of weavers still at work around 1900, many using cheaper mill-spun yarn.',
          'Ships: the CED\'s example, shipbuilding in India. The Wadia family of master builders ran the Bombay Dockyard for generations and built teak ships for the East India Company and the Royal Navy. HMS Trincomalee, launched at Bombay in 1817, survives at Hartlepool, England.',
          'China: farm households kept spinning and weaving cotton by hand through the 1800s, even as foreign machine-made yarn and cloth came in after the treaties of the 1840s.',
          'Egypt: the CED\'s example, textile production in Egypt. Egypt\'s hand weavers kept working. Muhammad Ali\'s state cotton mills of the 1820s and 1830s are 5.6\'s example; name them only if asked.',
          'Iron works in India (the CED\'s third example): village smelters kept making iron in small furnaces, though cheap imported iron cut into their trade.'
        ],
        ask: 'If the weavers kept weaving, why does the share fall?',
        listenFor: 'Because everyone else\'s production, made by machines, grew much faster.',
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
          { label: 'Rules', text: 'The East India Company lets British goods into India at low taxes' },
          { label: 'By the 1820s', text: 'More cloth goes from Britain to India than from India to Britain' },
          { label: 'Then', text: 'India sells raw cotton to British mills and buys British cloth', key: true }
        ],
        links: ['and', 'so', 'and']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.II.B: why the share fell, in one case. This is a chain of causes, and one link is a choice made by people in power.',
          'The reversal: by the 1820s Britain was sending more cotton cloth to India than India sent to Britain; by the 1830s and 1840s India was a large market for Lancashire cloth and a supplier of raw cotton.',
          'The rules: the East India Company ruled much of India; its monopoly of trade with India ended in 1813, opening India to British private traders, and British goods entered at low duties. Britain had kept many Indian cottons out of its own market for more than a century, with the Calico Acts of 1700 and 1721 and high duties afterward.',
          'The argument: historians weigh three things. British machine-made cloth was cheaper. The rules were made by the people in power, not by India. And David Clingingsmith and Jeffrey Williamson (2008) argue that India\'s troubles began earlier, with the Mughal empire\'s decline and with droughts that raised the price of food and so of labor. Teach it as an argument, and never as a single cause.',
          'The ships followed the same path: by the 1850s and 1860s navies wanted iron, steam-driven warships, built in British yards.'
        ],
        ask: 'Which link is a choice someone made?',
        listenFor: 'The rules: the East India Company chose the taxes. The machines were cheaper, but the rules decided who could sell where.',
        ap: 'KC-5.1.II.B (the mechanism of the change).'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Asia stopped making things.', evidence: 'It kept making them: millions of Indian weavers in 1900, and teak warships from Bombay. Its share fell.', source: 'KC-5.1.II.B' },
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
        continued: { tag: 'Continued', items: ['Indian and Chinese weavers keep weaving', 'Bombay builds ships; Egypt weaves', 'But their **share** shrinks'] }
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
        frame: 'Factory methods spread from Britain to Europe, the US, ___ and ___, carried by people, ___ and money. Their ___ of the world\'s goods rose. Asia kept ___ goods, but its share ___.',
        words: ['Russia', 'Japan', 'machines', 'share', 'making', 'fell'],
        prompt: 'Fill it in from memory. Then say it again with one example for the change and one for the continuity.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective E: "Explain how different modes and locations of production have developed and changed over time." The sentence is the whole answer; the examples make it an AP answer.',
          'A strong version: between 1750 and 1900 production moved from hand work to steam-powered factories, and factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan, carried by skilled people like Samuel Slater, by British machines and by investors\' money; Europe and the United States\' share of world manufacturing rose from about a quarter to over four-fifths, while India and China kept making goods, with millions of Indian handloom weavers still at work in 1900, but their shares fell to a few percent.'
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
          'A strong answer: in 1750 China made about a third of the world\'s manufactured goods and India about a quarter, mostly by hand, while Britain made under 2 percent; steam-powered factories made goods faster and cheaper, so by 1900 Europe and the United States made over four-fifths, and India\'s share fell under 2 percent; one cause was that Lancashire\'s machine-made cloth undersold hand-made cloth, even in India, where the East India Company let it in at low taxes; but India kept making goods, with millions of handloom weavers still at work in 1900 and Bombay\'s shipyards building teak warships; so the share changed, while production continued.'
        ],
        ask: 'Where in your answer is the change, and where is the continuity?',
        listenFor: 'The change in shares and in how goods were made; the continuity in who kept making them.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'The factory traveled. The share moved. The old makers kept making.',
      subtitle: 'Next, Topic 5.5: factories needed coal, and steam engines turned it into power on a scale nobody had seen. How did the machines themselves change the world?',
      notes: {
        minutes: 2,
        land: [
          'Land the spine, then the hand-off to 5.5: the machines themselves, steam and the fossil-fuel revolution, the second industrial revolution, and railways, steamships and the telegraph.',
          'The picture is credited on the slide.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: Slater building machines from memory; India\'s share falling while its weavers kept weaving.'
      }
    }
  ]
};
