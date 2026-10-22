/*
 * Topic 5.5 canonical Teaching OS source.
 * CED: Fall 2026 p. 104 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Causation. Suggested skill: 1.B Developments and Processes (explain a
 * historical concept, development, or process). Learning objective F: explain
 * how technology shaped economic production over time. Key Concepts:
 * KC-5.1.I.B (machines, including steam engines and the internal combustion
 * engine, let people use the energy stored in coal and oil; the fossil fuels
 * revolution greatly increased the energy available), KC-5.1.I.E (the second
 * industrial revolution: new methods in steel, chemicals, electricity and
 * precision machinery after 1850), KC-5.1.IV (railroads, steamships and the
 * telegraph made exploration, development and communication possible in
 * interior regions, which led to more trade and migration). No illustrative
 * examples. Sample activity (p. 97, optional): rank five technologies, used on
 * slide 17 and in the BeInTheRoom scenario.
 * Story: docs/TOPIC-5-5-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "More Power,
 * Longer Reach" is written from the same story, and this deck retells it.
 * Spine: machines unlocked the energy stored in coal and then oil. That energy,
 * with new ways of making steel, chemicals, electricity and precise machines,
 * let the world make far more than ever before. Railroads, steamships and the
 * telegraph carried goods, people and news into the interiors of continents,
 * and trade and migration grew.
 * Wall version: More power. New materials. Longer reach.
 * Retelling slide: the cause chain (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.5',
    minutes: 90,
    title: 'Technology of the Industrial Age',
    subtitle: 'Machines unlocked the energy stored in coal and then oil. That energy, with new ways of making steel, chemicals, electricity and precise machines, let the world make far more than ever before. Railroads, steamships and the telegraph carried goods, people and news into the interiors of continents, and trade and migration grew.',
    essentialQuestion: 'How did new technology change how much the world could make, and how far its goods and people could go?',
    apFocus: 'Causation, with Developments and Processes 1.B',
    endTarget: 'Students can explain, as a chain of causes, how technology shaped economic production from 1750 to 1900: steam engines, and later the internal combustion engine, let people use the energy stored in coal and oil, which greatly increased the energy available; new methods for making steel, chemicals, electricity and precision machinery after 1850 let factories make more goods and new kinds of goods; and railroads, steamships and the telegraph reached the interiors of continents, which led to more trade and more migration.'
  },

  priorities: {
    must: [
      'Teach the chain, not a list: each link made the next possible (the retelling slide, 19).',
      'Teach all of KC-5.1.I.B: steam engines AND the internal combustion engine; coal AND oil; and the amount of energy (slides 6 to 9).',
      'Teach all four methods of KC-5.1.I.E: steel, chemicals, electricity and precision machinery (slide 11).',
      'Teach both ends of KC-5.1.IV: the reach into interior regions (slides 14 and 15) and the two effects, trade and migration (slide 16).',
      'Model 1.B: explain a process step by step (slides 10 and 12).'
    ],
    should: [
      'Say when each effect came. Steam took decades to spread, electricity was under 5 percent of US factory power in 1899, and the US had about 8,000 cars in 1900.',
      'Use the CED\'s own sample activity: rank the five technologies and defend the number one (slide 17; the full version is the BeInTheRoom).',
      'Correct three myths: "Watt invented the steam engine," "one invention changed everything," and "by 1900 the world ran on electricity and cars."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "More Power, Longer Reach."',
      'Use the Primary Source, Jevons on coal (1865), as an extension for early finishers.',
      'For a class that is ahead: why did electricity take so long to change factories? (slide 11 notes).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.3 and 5.4. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the 1874 railroad print.', students: 'Predict which machine mattered most.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "More Power, Longer Reach" in class.', students: 'Build the chain as they read.', slide: 4 },
    { id: 'before', label: 'Energy in 1750', range: '17-19', minutes: 2, teacher: 'Muscles, wood, wind, water, and their limits.', students: 'Name each limit.', slide: 5 },
    { id: 'steam', label: 'The Steam Engine', range: '19-22', minutes: 3, teacher: 'A pump, then an engine that turns wheels.', students: 'Say what Watt changed.', slide: 6 },
    { id: 'fossil', label: 'The Fossil Fuels Revolution', range: '22-24', minutes: 2, teacher: 'How much more energy.', students: 'Read the numbers.', slide: 7 },
    { id: 'jevons', label: 'A Voice from 1865', range: '24-25', minutes: 1, teacher: 'Jevons on coal.', students: 'Say what he claims.', slide: 8 },
    { id: 'oil', label: 'Oil and a New Engine', range: '25-27', minutes: 2, teacher: 'Drake, Otto, Benz, and 8,000 cars.', students: 'Say when its effects came.', slide: 9 },
    { id: 'model', label: 'Explain a Process', range: '27-29', minutes: 2, teacher: 'Model 1.B on an everyday case.', students: 'Say the four steps aloud.', slide: 10 },
    { id: 'methods', label: 'The Second Industrial Revolution', range: '29-32', minutes: 3, teacher: 'Steel, chemicals, electricity, precision machinery.', students: 'Match each to what it made.', slide: 11 },
    { id: 'practice', label: 'Explain the Bessemer Process', range: '32-34', minutes: 2, teacher: 'Students fill the four steps.', students: 'Explain it step by step.', slide: 12 },
    { id: 'skill', label: 'Skill Builder', range: '34-42', minutes: 8, teacher: 'Module 05: Developments and Processes 1.B.', students: 'Explain a process step by step.', slide: 13 },
    { id: 'rail', label: 'Railroads Reach the Interior', range: '42-44', minutes: 2, teacher: 'From 1830 to 1904.', students: 'Say where rail reached.', slide: 14 },
    { id: 'ships', label: 'Steamships and the Telegraph', range: '44-46', minutes: 2, teacher: 'Goods and people by sea; news by wire.', students: 'Say what each made possible.', slide: 15 },
    { id: 'effects', label: 'More Trade, More Migration', range: '46-49', minutes: 3, teacher: 'The two effects, with numbers.', students: 'Trace a cause to an effect.', slide: 16 },
    { id: 'rank', label: 'Rank the Five', range: '49-52', minutes: 3, teacher: 'The CED\'s ranking, quick version.', students: 'Rank and defend number one.', slide: 17 },
    { id: 'myths', label: 'Myth and Evidence', range: '52-54', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 18 },
    { id: 'retell', label: 'More Power, Longer Reach', range: '54-57', minutes: 3, teacher: 'Students redraw the chain.', students: 'Retell the whole topic.', slide: 19 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '57-58', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 20 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: power and new methods.', students: 'Work without the coach.', slide: 21 },
    { id: 'evidence', label: 'Evidence Lab', range: '58-66', minutes: 8, teacher: 'Module 07: two sources, one link in the chain.', students: 'Observe, then infer, then name a limit.', slide: 22 },
    { id: 'cp2', label: 'Checkpoint 2', range: '66-78', minutes: 12, teacher: 'Module 10: the chain, from reach to trade and migration. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 23 },
    { id: 'close', label: 'Landing Sentence', range: '78-80', minutes: 2, teacher: 'Land the answer and hand off to 5.6.', students: 'Say the topic in one sentence.', slide: 24 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.5', url: '../unit-5/lesson-5-5-technology-of-industrialization.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-5-technology-of-industrialization-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-5-technology-of-industrialization.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-5-slide',
    title: 'Topic 5.5 Presentation',
    file: 'present-topic-5-5.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'More power. New materials. Longer reach.',
      subtitle: 'Causation, with Developments and Processes 1.B. How did new technology change how much the world could make, and how far its goods and people could go?',
      notes: {
        minutes: 2,
        land: [
          'CED p. 104. One learning objective, F (Technology and Innovation): explain how technology shaped economic production over time. The reasoning process is Causation (p. 95); the suggested skill is 1.B, explain a historical concept, development, or process.',
          'Key Concepts: KC-5.1.I.B (the development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil; the fossil fuels revolution greatly increased the energy available to human societies); KC-5.1.I.E (the "second industrial revolution" led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century); KC-5.1.IV (railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration).',
          'The CED prints no illustrative examples for 5.5, so every example here was chosen in the build and checked in the claim ledger. Its sample activity (p. 97) has groups rank five technologies, the steam engine, the railroad, the internal combustion engine, the steamship and the telegraph, as the staff of Scientific American writing "Five Technologies that Changed the World." Slide 17 is the quick version; the BeInTheRoom scenario is the full one.',
          'Owns: KC-5.1.I.B, KC-5.1.I.E, KC-5.1.IV, and the steam engine itself, which 5.3 handed on ("Steam power, which began as a pump for flooded coal mines, is Topic 5.5"). Bridge only: why Britain industrialized and the factory (5.3); the spread (5.4); states building industry (5.6, so the Trans-Siberian is a railroad here, not a policy); big business and finance (5.7); workers and reformers (5.8); cities, classes and coal smoke (5.9); empire, and migration\'s causes and migrants\' lives (Unit 6).',
          'The old 5.5 taught rubber, guano and coercive labor in colonized regions as half the topic. That is Unit 6\'s, and KC-5.1.I.B is about energy, not extraction. If a student raises it, say so and park it.',
          'Three myths, on slide 18: "Watt invented the steam engine"; "one invention changed everything"; "by 1900 the world ran on electricity and cars."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Machines let people use the energy in coal and oil; that energy and new methods made far more goods; railroads, steamships and the telegraph carried goods, people and news into the interiors of continents, so trade and migration grew.',
        avoid: 'Avoid a parade of inventors and dates. The CED asks how technology shaped production: every machine on a slide is a link in the chain, and students should say what it made possible. And avoid "the steam engine started the Industrial Revolution": Cromford ran on water (5.3).'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.3', text: 'What turned the machines at Arkwright\'s mill at Cromford?' },
          { label: 'Topic 5.3', text: 'In 1700, what did people in England mostly use coal for?' },
          { label: 'Topic 5.4', text: 'Name two places the factory methods spread to.' }
        ],
        turn: 'Factories needed **power**, and coal could only keep you warm. What happened when machines learned to turn coal into **motion**? **How far could the world reach then?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: a water wheel, on the River Derwent; heat, fires for warmth and cooking; any two of other parts of Europe (Belgium, the German states), the United States, Russia, Japan.',
          'The bridge is 5.4\'s hand-off line: factories needed coal, and steam engines turned it into power on a scale nobody had seen. Prompt 1 returns on slide 6: a mill no longer had to sit by a river.'
        ],
        ask: 'If a mill runs on a river, where can it be built? If it runs on coal?',
        listenFor: 'Only beside a fast river; anywhere coal can be brought. That is today.',
        ap: 'Retrieval plus bridge: 5.3 explained why the factory began in Britain, 5.4 where it went; 5.5 is the machines themselves.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'How did new machines change how much the world could make?',
      subtitle: 'And how far could its goods and people go?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real print: Currier and Ives, American Railroad Scene: Lightning Express Trains Leaving the Junction, color lithograph, New York, 1874, drawn by Parsons and Atwater (Library of Congress, no known restrictions). Margins trimmed.',
          'Look at the freight cars on the right: "From Ocean to Ocean," "Through to the Pacific," and a car marked "U.S. Mail." The print sells the railroad as goods, people and news moving across a continent: the topic in one picture.',
          'A print made to sell, not a photograph: Currier and Ives sold cheap, cheerful prints of American life. The scene is idealized.'
        ],
        ask: 'Predict: which machine in this picture changed the world most? Why?',
        listenFor: 'The locomotive; the rails; the mail car. Write the guesses down and check them on slide 17.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read, and build the chain.',
      subtitle: 'Each link is a cause that made the next link possible. Watch for "so," "let" and "made it possible."',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "More Power, Longer Reach" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who write links, not lists: "the steam engine let mills move away from rivers," not "the steam engine, 1769."',
          'Question 01 explains Watt\'s engine step by step; question 02 explains one method of the second industrial revolution; question 03 traces railroads, steamships or the telegraph to trade or migration. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which link in the chain surprised you most?',
        listenFor: 'That Newcomen\'s engine came before Watt; that dyes came from coal; that there were only 8,000 cars in the US in 1900; that tens of millions of people moved.'
      }
    },
    {
      phase: 'before', kind: 'story-steps', eyebrow: 'Before · About 1750',
      kc: 'KC-5.1.I.B', title: 'Energy came from things that grow, blow and flow.',
      footer: 'Until the middle of the 1800s, wood and other things that grow were still the world\'s main energy.',
      template: {
        steps: [
          { label: 'Muscles', text: 'People and animals, fed by crops. **A horse gets tired.**' },
          { label: 'Wood', text: 'Fire for heat and cooking. **A forest takes decades to grow back.**' },
          { label: 'Wind', text: 'Sails and windmills. **No wind, no work.**' },
          { label: 'Water', text: 'Water wheels, like Cromford\'s. **Only beside a fast river.**' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.B begins here: the fossil fuels revolution "greatly increased the energy available," so students need the before. Every source of energy in 1750 had a limit you could see.',
          'Our World in Data: "Until the mid-19th century, traditional biomass" (wood, crop waste, dung) was "the dominant source of energy used across the world"; by about 1900, coal and biomass each gave about half (slide 7). Britain was the exception: it already burned a lot of coal for heat (5.3: about half of England\'s energy by 1700).',
          'The point is not that people were poor at engineering. Water wheels and windmills were advanced machines. The limit was the energy itself.'
        ],
        ask: 'Which of these four limits would a factory owner hate most?',
        listenFor: 'Water: a mill has to sit by a fast river, and the river runs low in a dry summer. Slide 6 is the way out.',
        ap: 'KC-5.1.I.B (the before).'
      }
    },
    {
      phase: 'steam', kind: 'story-scene', eyebrow: 'Power · The Steam Engine',
      kc: 'KC-5.1.I.B', title: 'A pump, then an engine that turns wheels.',
      footer: 'A mill no longer had to sit by a river. It could run on coal.',
      template: {
        steps: [
          { label: '1712', text: 'Newcomen\'s engine **pumps water** out of a coal mine. It burns a lot of coal.' },
          { label: '1765', text: 'Watt cools the steam in a **separate chamber**, so the cylinder stays hot.' },
          { label: 'Result', text: 'Watt\'s engines use **less than a third** of the coal.' },
          { label: '1780s', key: true, text: 'Boulton and Watt engines **turn wheels**: mills move into towns.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.I.B: "the development of machines, including steam engines." This slide is the first machine, and the key step is the last one: rotary motion.',
          'Newcomen: the Black Country Living Museum dates his engine to 1712, near Dudley Castle (at Coneygree, Tipton), "used in the Black Country to pump water out of ever deeper coal mines." Its cylinder was cooled with a spray of water on every stroke and heated again with steam, which wasted fuel. Do not say Newcomen\'s was the first steam device of any kind: Savery\'s pump of 1698 came before it; say "the first useful steam engines were pumps."',
          'Watt: an instrument maker at the University of Glasgow, repairing a model Newcomen engine, found the separate condenser in May 1765 and patented it in January 1769 (Britannica; the 1911 Britannica). The Science Museum Group: "Specific fuel consumption was reduced to less than one third that of a Newcomen type engine." (A popular "one quarter" is not used.)',
          'Rotary motion: Matthew Boulton "wished to apply the steam engine to driving mill machinery" (Science Museum Group); Watt\'s patent of February 1782 included the sun and planet gear. An early cotton mill driven directly by a Boulton and Watt engine was at Papplewick, near Nottingham, in 1785 (sources differ on which was first, so say "early"). In Manchester, Peter Drinkwater\'s Piccadilly Mill ran a Boulton and Watt engine from 1790.',
          'The picture is a real engraving: "Engineering: a Newcomen steam-engine," engraving, 1740s (Wellcome Collection, public domain mark). Find the fire under the boiler (bottom), the cylinder above it, the rocking beam, and the pump rods going down into the mine on the left.'
        ],
        ask: 'Why did turning a wheel matter more than pumping water?',
        listenFor: 'A wheel can drive machines: spinning machines, looms, hammers. So any mill can use steam, not only a mine.',
        ap: 'KC-5.1.I.B (steam engines); 1.B, a process explained step by step.'
      }
    },
    {
      phase: 'fossil', kind: 'compounding-stairs', eyebrow: 'Power · The Fossil Fuels Revolution',
      kc: 'KC-5.1.I.B', title: 'Each gain made the next one possible.',
      footer: 'Coal and oil are fossil fuels: energy stored underground for millions of years.',
      template: {
        steps: [
          { label: 'Engines', text: 'Steam pumps drain deeper mines' },
          { label: 'More coal', text: 'Britain: about 65 million tons (1854)' },
          { label: 'Far more', text: 'About 225 million tons (1900)' },
          { label: 'The world', text: 'By about 1900, coal is about half of all energy used' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.B: "The fossil fuels revolution greatly increased the energy available to human societies." This slide is the "greatly increased."',
          'The loop: steam engines drained coal mines, so miners could dig deeper; more coal fed more engines. Each made the other grow.',
          'Britain\'s coal: NBER Macrohistory Database, 64.7 million long tons in 1854 (the first year of the series) and 225.2 million in 1900. Say "tons"; the unit is the long ton, 2,240 pounds.',
          'The world: Our World in Data, "By the turn of the 20th century, around half of the world\'s energy came from coal; and half still came from biomass." Vaclav Smil (2002) dates the point where coal passed wood and other biomass fuels to the 1890s. So do not say coal "replaced" wood by 1900: they were about equal.',
          'Why it matters for production: a horse or a worker eats food grown on land; coal is energy that took no land to grow this year. E. A. Wrigley calls this the escape from the "organic economy."'
        ],
        ask: 'Why does "stored for millions of years" matter?',
        listenFor: 'You do not have to wait for it to grow back, the way you wait for a forest. So you can use far more, far faster. (And, someday, it runs out: Jevons, slide 8.)',
        ap: 'KC-5.1.I.B (the amount of energy).'
      }
    },
    {
      phase: 'jevons', kind: 'source-quote', eyebrow: 'A Voice from 1865',
      kc: 'KC-5.1.I.B', title: 'What did coal mean to the people who used it?',
      footer: 'Who wrote this, and what did he want his readers to worry about?',
      template: {
        quote: 'With coal almost any feat is possible or easy; without it we are thrown back into the laborious poverty of early times.',
        attribution: { author: 'W. Stanley Jevons', work: 'The Coal Question', year: '1865' },
        notice: 'What does Jevons say life was like before coal?'
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.1.I.B in a source from the time. William Stanley Jevons was a British economist; The Coal Question (1865) warned that Britain\'s cheap coal would not last forever. This line is from the opening of his introduction, word for word from the second edition (1866), as reprinted by the Library of Economics and Liberty; the first edition prints the same sentence.',
          'Read the line twice. "Laborious poverty of early times" is the before on slide 5: life on muscles, wood, wind and water.',
          'The Primary Source module has a longer passage, with his point that coal yields dyes with "beautiful colours" (slide 11) and that steam and iron depend on coal.'
        ],
        ask: 'What does Jevons think would happen without coal?',
        listenFor: 'Britain would go back to hard work and poverty: coal is what makes the new way of life possible.',
        ap: 'KC-5.1.I.B; sourcing: a worried economist, writing to persuade.'
      }
    },
    {
      phase: 'oil', kind: 'story-scene', eyebrow: 'Power · Oil and a New Engine',
      kc: 'KC-5.1.I.B', title: 'Then oil, and an engine that burns fuel inside itself.',
      footer: 'The internal combustion engine\'s big changes, to cars, trucks, tractors and airplanes, came after 1900.',
      template: {
        steps: [
          { label: '1859', text: 'Drake strikes **oil** at Titusville, Pennsylvania.' },
          { label: 'At first', text: 'Most oil becomes **kerosene**, a fuel for lamps.' },
          { label: '1876, 1886', text: 'Otto\'s gas engine; Benz\'s **car**, burning a fuel made from oil.' },
          { label: '1900', key: true, text: 'The United States has only about **8,000 cars**.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.I.B names the second machine and the second fuel: "the internal combustion engine" and "oil." This slide is both, and when their effects came.',
          'Drake: the American Oil and Gas Historical Society dates the strike at Titusville to August 1859 (sources give the 27th or 28th); refiners turned the oil into kerosene, "the popular lamp fuel." Oil was a lamp fuel for the rest of the century.',
          'The engine: Nikolaus Otto\'s four-stroke engine, Deutz, 1876, patented 1877 (Deutz AG history); Carl Benz\'s patent application of 29 January 1886, DRP 37435, a "vehicle powered by a gas engine" (Mercedes-Benz), running on a light petroleum spirit. Internal combustion means the fuel burns inside the cylinder; a steam engine burns its fuel outside, under a boiler.',
          '8,000: the Federal Highway Administration and Historical Statistics of the United States both give 8,000 registered automobiles in 1900. So the internal combustion engine is in this topic because of where it led, not because it had changed production by 1900.',
          'The picture is a real photograph: an oil rig at Titusville, about 1900, by the oil-region photographer Mather, hand-colored (Library of Congress, no known restrictions). The boiler and smokestack on the right drove the drilling: a steam engine, burning fuel, helping to get oil.'
        ],
        ask: 'If there were only 8,000 cars in 1900, why does the College Board put this engine in a topic that ends in 1900?',
        listenFor: 'Because it was developed then, and the fuel, oil, was being drilled: the cause came before 1900, the big effects after. Causes and effects do not always happen at once.',
        ap: 'KC-5.1.I.B (the internal combustion engine; oil).'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Developments and Processes 1.B · Model',
      title: 'Explain a process: the problem, the new thing, what it made possible, what followed.',
      footer: 'A process has steps. Say each one, in order.',
      template: {
        frame: 'Before, {{the problem}}. Then {{the new technology}} {{what it did}}, which made it possible to {{what it made possible}}. As a result, {{what followed}}.',
        exampleLabel: 'From everyday life',
        example: 'Before, **people used paper maps and asked strangers for directions**. Then **phone maps** **showed each person where they were, live**, which made it possible to **find any address without knowing the city**. As a result, **a delivery driver can work in a city she has never seen**.'
      },
      notes: {
        minutes: 2,
        land: [
          'The CED\'s suggested skill, 1.B: "Explain a historical concept, development, or process." A process answer has steps in order; the "which made it possible" step is the causation.',
          'The model is from everyday life, on purpose: First & 10 question 01, Checkpoint 1 and the Skill Builder all ask students to explain a technology step by step, so a modeled history answer would be an answer to copy.',
          'A weaker answer names the technology and its date and stops. The process is the steps after it.'
        ],
        ask: 'Which step does a weaker answer leave out?',
        listenFor: '"Which made it possible to": it says what the thing was, not what it did.',
        ap: 'Developments and Processes 1.B, inside Causation.'
      }
    },
    {
      phase: 'methods', kind: 'split-matrix', eyebrow: 'New Materials · After 1850',
      kc: 'KC-5.1.I.E', title: 'The second industrial revolution: four new methods.',
      footer: 'Coal ran the furnaces that made steel, and coal tar gave the first factory-made dyes.',
      template: {
        columns: [{ name: 'Steel' }, { name: 'Chemicals' }, { name: 'Electricity' }, { name: 'Precision machinery' }],
        rows: [
          { label: 'New method', cells: ['Bessemer, 1856: blow air through melted iron', 'Perkin, 1856: a dye made from coal tar', 'Pearl Street, 1882: power sold to light lamps', 'Machine tools cut parts that fit any copy'] },
          { label: 'It made', cells: ['Rails, bridges, ships, machines', 'New dyes; factory-made indigo, 1897', 'Light; then motors for each machine', 'Interchangeable parts; standard screw threads'] },
          { label: 'How fast', cells: ['US: 69,000 tons (1870) to 10 million (1900)', 'Germany made most of the world\'s dyes by 1914', 'Under 5 percent of US factory power, 1899', 'Typewriters to locomotives'] }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.I.E names four: "new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century." All four are on the slide.',
          'Steel: Henry Bessemer announced his process at the British Association, Cheltenham, in August 1856 (Philip Bishop, The Beginnings of Cheap Steel, Smithsonian). Air blown through melted pig iron burns out carbon and impurities, and the burning keeps the metal hot. Output (NBER): the United States, 69,000 long tons in 1870 and 10.2 million in 1900; Great Britain, 215,000 and 4.9 million. Do not use the popular "80 percent cheaper" figure; no source was found for it.',
          'Chemicals: William Perkin, 18, a student at the Royal College of Chemistry in London, made mauve in 1856, "the first commercially successful synthetic dye" (Britannica), from aniline, a coal-tar chemical. BASF was founded on 6 April 1865 and sold synthetic indigo from 1897 (BASF). Britannica: by 1914 about 90 percent of the world\'s dyes were made in Germany. Bridge only: factory indigo hit indigo growers in India; that story is Unit 6\'s.',
          'Electricity: Edison\'s Pearl Street Station began supplying power on 4 September 1882, lighting about 400 lamps on the first day (IEEE Milestone). Paul David (American Economic Review, 1990): in 1899, electric motors gave "less than 5 percent of factory mechanical drive" in the United States; it took about two decades more to reach half. Factories had to be rebuilt around motors, one per machine, instead of one big engine and belts.',
          'Precision machinery: machine tools (lathes, milling machines) cut metal to exact sizes, so parts are interchangeable. Joseph Whitworth\'s standard screw threads (Britain, 1841) and William Sellers\'s (United States, April 1864) helped "machines with interchangeable parts, from typewriters to locomotives," spread (ASME Landmark 234).'
        ],
        ask: 'Which of the four depended most on coal?',
        listenFor: 'Steel (coal and coke for the furnaces) and chemicals (coal tar); electricity too, since most power stations burned coal to make steam.',
        ap: 'KC-5.1.I.E.'
      }
    },
    {
      phase: 'practice', kind: 'story-steps', eyebrow: 'Developments and Processes 1.B · Practice',
      kc: 'KC-5.1.I.E', title: 'Your turn: explain the Bessemer process step by step.',
      footer: 'Say each step out loud, then write it as one sentence.',
      template: {
        steps: [
          { label: 'The problem', text: 'Before 1856, steel was ___ and ___ to make.' },
          { label: 'The new method', text: 'Bessemer blew ___ through ___.' },
          { label: 'Made possible', text: 'Steel could now be made ___ and in large ___.' },
          { label: 'What followed', key: true, text: '?' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Practice on KC-5.1.I.E with the frame from slide 10. The slide gives the steps, not the answers; take three answers before giving one.',
          'A strong answer: "Before 1856, steel was slow and costly to make, so it was used for small things like tools. Then Bessemer blew air through melted iron, which burned out the impurities and made steel quickly and in large amounts. As a result, steel became cheap enough for rails, bridges and ships: the United States went from about 69,000 tons in 1870 to about 10 million in 1900."',
          'If a student stops at "it made steel," push for "what followed": what was built with it?'
        ],
        ask: 'What did steel make possible that the next slide needs?',
        listenFor: 'Rails, locomotives, steamships, bridges: the reach.',
        ap: 'KC-5.1.I.E; Developments and Processes 1.B.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Explain a process, step by step.',
      subtitle: 'Developments and Processes 1.B: the problem, the new technology, what it made possible, and what followed.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 05 is required. It models the frame on an everyday example and asks students to explain two technologies step by step: one that unlocked energy or made new materials, and one that reached the interior.',
          'Circulate for the "which made it possible to": a real effect, not a second name or date.'
        ],
        ask: 'Read me your "which made it possible to" step.',
        listenFor: 'A change in what people could make or where they could reach, not another invention.'
      }
    },
    {
      phase: 'rail', kind: 'timeline', eyebrow: 'Longer Reach · Railroads',
      kc: 'KC-5.1.IV', title: 'Railroads reached the middle of continents.',
      footer: 'Russia: 27 km of railway in 1840, over 53,000 km in 1900. Germany: 469 km to over 51,000.',
      template: {
        range: [1825, 1905],
        tick: 20,
        events: [
          { year: 1830, label: '1830', text: 'Liverpool and Manchester: the first railway between two cities' },
          { year: 1853, label: '1853', text: 'India\'s first passenger train: Bombay to Thane' },
          { year: 1869, label: '1869', text: 'Across the United States, at Promontory Summit, Utah' },
          { year: 1891, label: '1891', text: 'Russia begins the Trans-Siberian Railway' },
          { year: 1904, label: '1904', text: 'Trains can cross to the Pacific' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.IV: railroads "made exploration, development, and communication possible in interior regions globally." Before rail, heavy goods moved cheaply only by water, so the interiors of continents, far from rivers and the sea, were hard to reach.',
          '1830: the Liverpool and Manchester Railway, opened 15 September 1830, "the world\'s first inter-city railway" (Science and Industry Museum, Manchester), with steam locomotives. Not the first railway with steam locomotives: the Stockton and Darlington had used them since 1825, and Trevithick\'s ran in 1804. Do not call Stephenson\'s Rocket "the first locomotive."',
          '1853: Bori Bunder (Bombay) to Thane, 16 April 1853, 34 km, with three locomotives. India had railways built under British rule; who paid and who gained is Unit 6\'s question.',
          '1869: the Central Pacific and Union Pacific met at Promontory Summit, Utah, on 10 May 1869, "completing the nation\'s first transcontinental railroad" (National Park Service). Thousands of Chinese workers built much of the Central Pacific; their story is Unit 6 (migration and labor).',
          '1891 to 1904: the Trans-Siberian, begun in 1891; its through route was finished on 21 July 1904, running across Manchuria; the all-Russian Amur line came in 1916 (History Today). How the Russian state paid for industry is Topic 5.6.',
          'The footer: Mitchell\'s figures, as reprinted in the Fordham Modern History Sourcebook (from The Spread of the Industrial Revolution, Table 6): Russia 27 km (1840) to 53,234 km (1900); Germany 469 to 51,678.'
        ],
        ask: 'What could a wheat farmer in the middle of a continent do after the railroad came that he could not do before?',
        listenFor: 'Sell his wheat far away, cheaply: in a city, at a port, across an ocean. That is slide 16.',
        ap: 'KC-5.1.IV (railroads; interior regions).'
      }
    },
    {
      phase: 'ships', kind: 'split-mirror', eyebrow: 'Longer Reach · Ships and Wires',
      kc: 'KC-5.1.IV', title: 'Goods and people by steamship. News by wire.',
      footer: 'Before, news traveled only as fast as a horse or a ship.',
      template: {
        left: { name: 'Steamships' },
        right: { name: 'The telegraph' },
        rows: [
          { label: 'Before', left: 'Sail, Norway to America: about 53 days on average', right: 'A letter: as fast as the ship carrying it' },
          { label: 'After', left: 'Fastest steamers, 1870s: about 7 or 8 days', right: 'A message along a wire: minutes' },
          { label: 'Reach', left: 'Suez Canal, 1869: steamships only; steamboats up rivers', right: 'Morse, 1844; across the Atlantic, 1866; to Bombay, 1870' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.IV: steamships and the telegraph made "exploration, development, and communication possible in interior regions globally." The left side is exploration and development; the right side is communication.',
          'Crossings: Norway Heritage, "The average crossing time on a sailing ship from Norway to America was 53 days"; White Star Line steamships could cross "in 7 to 8 days"; the 1870s Blue Riband records were about 7 to 8 days. In 1867 a steamship ticket cost about three times a sailing passage, but by 1874 the last sailing ships carried Norwegian emigrants to Quebec.',
          'Suez: opened 17 November 1869; Daudin, Morys and O\'Rourke (2008): the canal "could only be used by steamships." Sailing ships could not rely on the winds of the Red Sea.',
          'Up rivers, into the interior: in 1854 the steamer Pleiad went up the Niger and far up the Benue, about 250 miles beyond earlier explorers, with no deaths among its crew, who took quinine every day against malaria (William Balfour Baikie\'s expedition; British Society for the History of Medicine). What European empires did with that reach is Unit 6.',
          'Telegraph: Samuel Morse sent "What hath God wrought?" from the Capitol in Washington to Baltimore on 24 May 1844 (Library of Congress). The 1858 Atlantic cable worked only a few weeks; the Great Eastern landed a lasting cable at Heart\'s Content, Newfoundland, on 27 July 1866 (IET Archives). The Red Sea cable reached Bombay in 1870. "Minutes," not "seconds": early cables were slow (Queen Victoria\'s 1858 message took about 16 hours to send).'
        ],
        ask: 'Which one changes trade more: faster ships, or faster news?',
        listenFor: 'Either can be argued: ships move the goods, but news lets a merchant know the price before he ships. The best answers say they worked together.',
        ap: 'KC-5.1.IV (steamships; the telegraph).'
      }
    },
    {
      phase: 'effects', kind: 'story-scene', eyebrow: 'The Effects · Trade and Migration',
      kc: 'KC-5.1.IV', title: 'More trade. More migration.',
      footer: 'Why people moved, and what they found, is Unit 6.',
      template: {
        steps: [
          { label: 'Trade', text: 'Wheat cost **57.6 percent** more in Liverpool than in Chicago in 1870; **15.6 percent** more in 1913.' },
          { label: 'So', text: 'Wheat from the middle of North America, by **rail and steamship**, fed workers in Britain.' },
          { label: 'Europe', text: 'About **55 million** Europeans moved to the Americas and Australia, 1850 to 1914.' },
          { label: 'Asia', key: true, text: 'Over **29 million** Indians and **19 million** Chinese moved to Southeast Asia, 1846 to 1940.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.IV ends "which led to increased trade and migration." These are the two effects, each with a number.',
          'Trade: Daudin, Morys and O\'Rourke, "Globalization, 1870-1914" (2008): "Between 1870 and 1913, the wheat price gap between Liverpool and Chicago fell from 57.6% to 15.6%" (O\'Rourke and Williamson, 1994). The cost of shipping wheat from Chicago to New York fell from 17.2 to 5.5 percent of the Chicago price. A smaller price gap means the two markets have become one market.',
          'Europe: Hatton and Williamson, The Age of Mass Migration (1998): about 55 million Europeans to the Americas and Australia, 1850 to 1914. More than a million a year left Europe for the Americas after 1900.',
          'Asia: Adam McKeown, "Global Migration, 1846-1940" (Journal of World History, 2004): Southeast Asia and the Indian Ocean rim received "over 29 million Indians and over 19 million Chinese"; "between 28 and 33 million Chinese migrated into Manchuria and Siberia"; "at least 13 million Russians moved into central Asia and Siberia." McKeown\'s point is that Asian migration was as large as the Atlantic one. His dates run to 1940, past this topic; the slide gives them.',
          'Steam "lowered the cost of travel" (Daudin, Morys and O\'Rourke). That is the technology\'s part. Why people chose to go, wages and land at home and abroad, contracts and debt, and what they met when they arrived, is Unit 6 (6.6 and 6.7). Do not teach it here.',
          'The picture is a real print: Currier and Ives, Across the Continent: "Westward the Course of Empire Takes Its Way," lithograph drawn by Fanny Palmer, 1868 (Library of Congress, no known restrictions). It shows a train and telegraph poles running west past a new settlement, while two Native American riders watch from the right: a print that celebrates the reach, and says nothing about whose land it was.'
        ],
        ask: 'Pick one link: how did a railroad or a steamship lead to more trade, or to more migration?',
        listenFor: 'Rail and steam made moving wheat, or people, cheaper and faster, so more of it moved: prices came closer together, and tens of millions of people made long journeys.',
        ap: 'KC-5.1.IV (trade; migration).'
      }
    },
    {
      phase: 'rank', kind: 'cause-rank', eyebrow: 'Rank the Five',
      title: 'Which technology changed the world most by 1900?',
      template: {
        causes: [
          { label: 'The steam engine', note: 'Turned coal into motion' },
          { label: 'The railroad', note: 'Reached the middle of continents' },
          { label: 'The steamship', note: 'Crossed oceans in days, not weeks' },
          { label: 'The telegraph', note: 'Sent news in minutes' },
          { label: 'The internal combustion engine', note: 'Burned oil inside the engine' }
        ],
        prompt: 'Rank them 1 to 5. **Defend your number one** in one sentence, with one piece of evidence.'
      },
      notes: {
        minutes: 3,
        land: [
          'This is the CED\'s own sample activity for 5.5 (p. 97), quick version: the same five technologies the CED lists. The full debate, as the writers of a New York science magazine in 1900, is the BeInTheRoom scenario.',
          'There is no single right answer; the evidence is what is graded. Strong number ones: the steam engine, because the railroad and the steamship are steam engines on wheels and hulls; the railroad, because it reached interiors that ships could not.',
          'Watch for students who put the internal combustion engine first. Ask: by 1900? (8,000 US cars.) It belongs on the list because of what came after; the question says "by 1900."',
          'Check the question-slide predictions.'
        ],
        ask: 'Who put the steam engine first? Defend it. Who put it last? Defend that.',
        listenFor: 'A ranking with a reason that names what the technology made possible, not only what it was.',
        ap: 'Causation: weighing causes (the CED sample activity).'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Watt invented the steam engine.', evidence: 'Newcomen\'s engine pumped mines from 1712. Watt made it use far less coal, and turn wheels.', source: 'KC-5.1.I.B' },
          { myth: 'One invention changed everything.', evidence: 'Each needed the others: railroads needed steam, coal, then steel; many telegraph lines ran beside the tracks.', source: 'KC-5.1.I.E' },
          { myth: 'By 1900 the world ran on electricity and cars.', evidence: 'Motors gave under 5 percent of US factory power in 1899; the US had about 8,000 cars in 1900.', source: 'KC-5.1.I.B' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Myth 1 is slide 6. Newcomen (1712), and before him Savery\'s steam pump (1698); Watt\'s separate condenser (1765, patented 1769) and rotary engines (1780s).',
          'Myth 2 is the retelling slide: the chain. Some of the first telegraph lines were built along railways, which were among the first to use them (the Great Western Railway, 1839); in the 1868 print in the Evidence Lab, the poles run beside the track.',
          'Myth 3: David (1990) and the FHWA. The effects of electricity and the internal combustion engine came mostly after 1900, which is why the CED names them as developments, not as results.'
        ],
        ask: 'Which myth would most hurt an essay answer, and why?',
        listenFor: 'Myth 2: a causation essay that names one invention as "the" cause loses the chain, which is the whole answer.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'More power. New materials. Longer reach.',
      footer: 'Each link made the next one possible.',
      template: {
        steps: [
          { label: 'Machines', text: 'Steam engines, later internal combustion engines, unlock coal and oil' },
          { label: 'More energy', text: 'By about 1900, coal is about half the world\'s energy' },
          { label: 'New methods', text: 'Steel, chemicals, electricity, precision machinery' },
          { label: 'Longer reach', text: 'Railroads, steamships and the telegraph reach the interiors of continents', key: true },
          { label: 'Effects', text: 'More trade, more migration' }
        ],
        links: ['so', 'and', 'so', 'which led to']
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide: the whole topic as one chain of causes. Ask students to close their notes and redraw it, five boxes and the arrows, then compare with the slide.',
          'Point to the three Key Concepts: the first two links are KC-5.1.I.B, the third is KC-5.1.I.E, the last two are KC-5.1.IV. The arrows are the CED\'s own words: "made it possible," "led to," "which led to."',
          'The key link is reach: steel and steam built the railroads and ships, and they carried the goods and the people.'
        ],
        ask: 'Redraw it from memory. Which arrow is hardest to explain?',
        listenFor: 'Students who can say what each arrow means ("steel made rails and ships possible") have the topic.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis',
      kc: 'Unit 5: Learning Objective F', title: 'Say it in one sentence.',
      template: {
        frame: 'Machines such as the ___ engine let people use the energy in coal and ___. With new methods for making ___, chemicals, electricity and precise machines, factories made far more goods, and railroads, ___ and the telegraph carried goods and people into the ___ of continents, which led to more trade and ___.',
        words: ['steam', 'oil', 'steel', 'steamships', 'interiors', 'migration'],
        prompt: 'Fill it in from memory, then add one example for one link.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective F: "Explain how technology shaped economic production over time." The sentence is the whole answer; one example per link makes it an AP answer.',
          'A strong version: between 1750 and 1900, steam engines, which Watt made efficient and able to turn wheels, let factories run on coal instead of rivers, and coal grew to about half of the world\'s energy by 1900; after 1850 new methods such as the Bessemer process made steel cheap enough for rails and ships, while chemical dyes, electricity and precision machine tools made new goods; railroads such as the transcontinental line of 1869, steamships through the Suez Canal and the telegraph reached the interiors of continents, so the wheat price gap between Chicago and Liverpool shrank and tens of millions of Europeans and Asians migrated.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for one link and say what it made possible have the objective.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'How did machines and new methods change what could be made?',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional. Checkpoint 1 assesses Target 1: how a machine unlocked fossil-fuel energy, and how one method of the second industrial revolution changed what could be made.'
        ],
        ask: 'Which machine did you explain, and what did it make possible?',
        listenFor: 'A machine, a fuel, a new method, and what each made possible.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Two sources, one link in the chain.',
      subtitle: 'Choose at least two cards. For each: what kind of source it is, what link in the chain it shows, and one thing it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 07 is required. The cards pair real objects (an engraving of a Newcomen engine, a diagram of a Bessemer converter, an oil rig, the Great Eastern with the Atlantic cable, the 1868 Across the Continent print) with scholars\' figures on energy and migration.',
          'Listen for students who name what kind of source each card is (an engraving for a book, a print made to sell, a photograph, a newspaper picture), and which link in the chain it supports.'
        ],
        ask: 'What can your source not tell you?',
        listenFor: 'How common the thing was: one engine, one rig or one ship is a case, not a measure of how much changed.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'How did railroads, steamships and the telegraph change trade and migration?',
      subtitle: 'Explain what each did that older ways could not, how one of them reached an interior region, and how that led to more trade or more migration, with a number. Then show where its power came from. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Module 10 is required: draft, Socrates, revise. It assesses Target 2 (KC-5.1.IV) and the learning objective, as a chain of causes, and declares Causation.',
          'A strong answer: before steam, heavy goods moved cheaply only by water, and news moved as fast as a ship; railroads, built of iron and later steel and pulled by coal-burning steam engines, reached the interiors of continents, like the line across the United States finished in 1869; steamships cut the Atlantic crossing from about 53 days under sail to about a week; the telegraph sent news in minutes; so farmers in the middle of North America could sell wheat in Britain, and the price gap between Chicago and Liverpool fell from 57.6 percent in 1870 to 15.6 percent in 1913; cheaper, faster journeys also helped about 55 million Europeans move to the Americas and Australia between 1850 and 1914.'
        ],
        ask: 'Where in your answer is the cause, and where is the effect?',
        listenFor: 'The technology and its power as the cause; trade or migration as the effect, with the link between them explained.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'More power. New materials. Longer reach.',
      subtitle: 'Trains, steamboats and telegraph wires, in a Currier and Ives print of 1876. Next, Topic 5.6: a few governments did not wait for these machines to arrive on their own. They decided to build industry themselves.',
      notes: {
        minutes: 2,
        land: [
          'Land the spine, then the hand-off to 5.6: states that built industry on purpose.',
          'The picture is a real print: Currier and Ives, Night Scene at an American Railway Junction: Lightning Express, Flying Mail and Owl Trains, "On Time," chromolithograph, 1876, drawn by Parsons and Atwater (Library of Congress, no known restrictions). Margins trimmed. Find the three links of the reach in one picture: locomotives, steamboats in the harbor behind them, and telegraph wires on the poles at the upper right.',
          'Like the question slide, it is a print made to sell, and it shows the railroad as its makers wanted it seen: on time, at night, everywhere at once.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: Watt\'s engine freeing mills from rivers; the Bessemer process making rails; the wheat price gap closing.'
      }
    }
  ]
};
