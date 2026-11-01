/*
 * Topic 5.8 canonical Teaching OS source.
 * CED: Fall 2026 p. 107 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Causation. Suggested skill: 2.B Sourcing and Situation (explain the point of
 * view, purpose, historical situation, and/or audience of a source). Learning
 * objective I: explain the causes and effects of calls for changes in
 * industrial societies from 1750 to 1900. Key Concepts: KC-5.1.V.D (in
 * response to the social and economic changes brought about by industrial
 * capitalism, some governments, organizations, and individuals promoted
 * various types of political, social, educational, and urban reforms),
 * KC-5.1.V.A (workers organized, often in labor unions, to improve working
 * conditions, limit hours, and gain higher wages; workers' movements and
 * political parties emerged in different areas, promoting alternative visions
 * of society), KC-5.3.IV.A.ii (discontent with established power structures
 * encouraged the development of various ideologies, including those espoused
 * by Karl Marx, and the ideas of socialism and communism) and KC-5.1.V.B (in
 * response to the expansion of industrializing states, some governments in
 * Asia and Africa, including the Ottoman Empire and Qing China, sought to
 * reform and modernize their economies and militaries; reform efforts were
 * often resisted by some members of government or established elite groups).
 * No illustrative examples. Sample activity (p. 97): Engels's Manchester and
 * the 1852 "Wheelan and Co." directory, used in the Skill Builder.
 * Story: docs/TOPIC-5-8-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Calls for
 * Change" is written from the same story, and this deck retells it.
 * Spine: industrial capitalism, and the power of industrial states, caused
 * people to call for change: workers organized unions and parties, Marx and
 * other socialists imagined a different society, and governments,
 * organizations and individuals pushed political, social, educational and
 * urban reforms; outside Europe, the Ottoman and Qing governments tried to
 * modernize their armies and economies, and met resistance from their own
 * elites.
 * Wall version: Workers organized. Thinkers imagined. Governments reformed.
 * Old empires modernized, and met resistance.
 * Retelling slide: the four rows, pressure, call and effect (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 06 Checkpoint 1,
 * 10 Checkpoint 2 (Jeff's rule of 2026-10-23: 02, 06 and 10 on every topic,
 * plus at least one chosen; 05 practises the CED's suggested skill, 2.B, on
 * the CED's own sample activity).
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.8',
    minutes: 90,
    title: 'Reactions to the Industrial Economy from 1750 to 1900',
    subtitle: 'Industrial capitalism, and the power of industrial states, caused people to call for change: workers organized unions and parties, Marx and other socialists imagined a different society, and governments, organizations and individuals pushed political, social, educational and urban reforms; outside Europe, the Ottoman and Qing governments tried to modernize their armies and economies, and met resistance from their own elites.',
    essentialQuestion: 'Why did people in industrial societies call for change between 1750 and 1900, and what did their calls change?',
    apFocus: 'Causation, with Sourcing and Situation 2.B (point of view, purpose, situation, audience)',
    endTarget: 'Students can explain the causes and effects of calls for change in industrial societies from 1750 to 1900: long hours, low pay and no vote led British and German workers to organize unions, the Chartists and workers\' parties, which won legal standing for unions, shorter hours and the vote for many working men; discontent with who held power encouraged socialism and Marx\'s communism, which shaped workers\' parties but brought no revolution by 1900; governments, organizations and individuals pushed political, social, educational and urban reforms, and Bismarck gave German workers insurance partly to win them from the socialists; and the power of the industrial states pushed the Ottoman and Qing governments to modernize, against resistance from inside. They can source a source: who made it, why, for whom, and how that shapes what it says.'
  },

  priorities: {
    must: [
      'Teach every row as a cause, a call for change and an effect: workers, thinkers, reformers and governments, the Ottoman and Qing courts (the retelling slide, 21).',
      'Teach KC-5.1.V.A as organizing for conditions, hours and wages, and as movements and parties "promoting alternative visions of society" (slides 6 to 8).',
      'Teach KC-5.3.IV.A.ii with its cause, "discontent with established power structures," and Marx in his own words (slides 9 and 10).',
      'Teach KC-5.1.V.D as three kinds of reformer and four kinds of reform, with Bismarck as a government reforming to beat its critics (slides 13 and 14).',
      'Teach KC-5.1.V.B with both halves: outside pressure caused the Ottoman and Qing reforms, and people inside resisted them (slides 16 to 19).',
      'Model 2.B: who made it, why, for whom, when, and how that shapes what it says (slides 5, 12 and 15).'
    ],
    should: [
      'Quote the Manifesto in its 1888 English, "Working Men of All Countries, Unite!", not the popular "Workers of the world, unite!" (slide 9).',
      'Say that the Chartists lost every petition and still won most of their points later (slide 7).',
      'Correct three myths: "unions became legal in 1824," "Marx\'s communism was tried in the 1800s," "China and the Ottoman Empire refused to change" (slide 20).'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Calls for Change."',
      'Use the Primary Source, The Communist Manifesto, as an extension for early finishers.',
      'For a class that is ahead: Bismarck banned the socialists and then insured their voters. Was his insurance a victory for workers or for Bismarck? (slide 14).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.7, 5.3 and 5.6. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Kennington Common, 1848.', students: 'Predict who called for change.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-19', minutes: 14, teacher: 'Module 02: students read "Calls for Change" in class.', students: 'Build four rows as they read.', slide: 4 },
    { id: 'pressure', label: 'One City, Two Pictures', range: '19-21', minutes: 2, teacher: 'Engels and the directory: the pressure, and the skill.', students: 'Say who wrote each, and why.', slide: 5 },
    { id: 'crime', label: 'At First, a Crime', range: '21-23', minutes: 2, teacher: 'Britain, 1799 to 1871.', students: 'Name the turning points.', slide: 6 },
    { id: 'charter', label: 'The Charter', range: '23-25', minutes: 2, teacher: 'The Chartists, 1838 to 1848, and what came later.', students: 'Say what they lost, and what they won later.', slide: 7 },
    { id: 'parties', label: 'Parties in Different Countries', range: '25-27', minutes: 2, teacher: 'Germany, Britain, the United States.', students: 'Read down the lanes.', slide: 8 },
    { id: 'manifesto', label: 'Marx in His Own Words', range: '27-29', minutes: 2, teacher: 'The Manifesto, 1848.', students: 'Notice, then source it.', slide: 9 },
    { id: 'socialism', label: 'Socialism and Communism', range: '29-31', minutes: 2, teacher: 'Owen and Marx: what they shared, where they differed.', students: 'Place each idea in the Venn.', slide: 10 },
    { id: 'cp1', label: 'Checkpoint 1', range: '31-39', minutes: 8, teacher: 'Module 06: workers and new ideas, on their own.', students: 'Work without the coach.', slide: 11 },
    { id: 'model', label: 'Source a Source', range: '39-41', minutes: 2, teacher: 'Model 2.B on an everyday case.', students: 'Say the sourcing sentence.', slide: 12 },
    { id: 'reforms', label: 'Four Kinds of Reform', range: '41-44', minutes: 3, teacher: 'Political, social, educational, urban.', students: 'Name who pushed each.', slide: 13 },
    { id: 'bismarck', label: 'A Government Reforms', range: '44-46', minutes: 2, teacher: 'Bismarck, 1878 to 1889.', students: 'Explain his motive.', slide: 14 },
    { id: 'skill', label: 'Skill Builder', range: '46-54', minutes: 8, teacher: 'Module 05: Sourcing and Situation 2.B, Engels and the directory.', students: 'Source two descriptions of Manchester.', slide: 15 },
    { id: 'outside', label: 'A Different Pressure', range: '54-55', minutes: 1, teacher: 'The industrial powers and the old empires.', students: 'Name the new cause.', slide: 16 },
    { id: 'ottoman', label: 'The Ottoman Empire', range: '55-57', minutes: 2, teacher: 'Reform and resistance, 1790s to 1878.', students: 'Name who resisted.', slide: 17 },
    { id: 'qing', label: 'Qing China', range: '57-59', minutes: 2, teacher: 'Self-Strengthening and resistance, 1860s to 1898.', students: 'Name who resisted.', slide: 18 },
    { id: 'compare', label: 'Same Pressure, Two Empires', range: '59-61', minutes: 2, teacher: 'The shared pattern.', students: 'Say the claim.', slide: 19 },
    { id: 'myths', label: 'Myth and Evidence', range: '61-63', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 20 },
    { id: 'retell', label: 'Four Rows', range: '63-66', minutes: 3, teacher: 'Students redraw the table.', students: 'Retell the whole topic.', slide: 21 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '66-67', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 22 },
    { id: 'evidence', label: 'Evidence Lab', range: 'Optional', minutes: 0, teacher: 'Optional, Module 07: two sources, one row.', students: 'Observe, infer, source.', slide: 23 },
    { id: 'cp2', label: 'Checkpoint 2', range: '67-79', minutes: 12, teacher: 'Module 10: reforms, old empires, causes and effects. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 24 },
    { id: 'close', label: 'Landing Sentence', range: '79-80', minutes: 1, teacher: 'Land the answer and hand off to 5.9.', students: 'Say the topic in one sentence.', slide: 25 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.8', url: '../unit-5/lesson-5-8-reactions-to-industrial-economy.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-8-reactions-to-industrial-economy.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-8-slide',
    title: 'Topic 5.8 Presentation',
    file: 'present-topic-5-8.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Workers organized. Thinkers imagined. Governments reformed. Old empires modernized, and met resistance.',
      subtitle: 'Causation, with Sourcing and Situation 2.B. Why did people in industrial societies call for change between 1750 and 1900, and what did their calls change?',
      notes: {
        minutes: 2,
        land: [
          'CED p. 107. One learning objective, I (Social Interactions and Organization): explain the causes and effects of calls for changes in industrial societies from 1750 to 1900. The reasoning process is Causation (p. 96); the suggested skill is 2.B, explain the point of view, purpose, historical situation, and/or audience of a source.',
          'Key Concepts: KC-5.1.V.D (governments, organizations, and individuals promoted political, social, educational, and urban reforms); KC-5.1.V.A (workers organized, often in unions, for conditions, hours and wages; movements and parties promoted alternative visions of society); KC-5.3.IV.A.ii (discontent with established power structures encouraged ideologies, including Marx\'s, and socialism and communism); KC-5.1.V.B (the Ottoman and Qing governments sought to modernize their economies and militaries in response to industrializing states, and were often resisted from inside).',
          'The CED gives no illustrative examples for 5.8; every example is the build\'s choice. Its sample activity (p. 97) pairs Engels\'s Manchester with a Manchester business directory; the Skill Builder uses it (slide 15).',
          'Owns: unions, movements and parties; Marx, socialism and communism; reforms of four kinds; the Ottoman and Qing reforms and their resistance. Bridge only: the factory (5.3); "for some" (5.7, the hand-off in); Egypt and Meiji Japan (5.6, the comparison); the city\'s crisis and the classes (5.9, the hand-off out); abolition (5.1); the Opium Wars and the Taiping Rebellion (Unit 6); communist states (Unit 7).',
          'The old 5.8 taught American strikes and abolition and had nothing on Marx or the Ottoman and Qing reforms. If a student raises Haymarket or Pullman, say they are American examples of the same pattern and park them.',
          'Three myths, on slide 20: "unions became legal in 1824"; "Marx\'s communism was tried in the 1800s"; "China and the Ottoman Empire refused to change."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Industrial capitalism and the power of industrial states caused calls for change: workers organized, Marx and the socialists imagined a different society, governments and others reformed, and the Ottoman and Qing courts modernized against resistance from inside.',
        avoid: 'Avoid four lists, one per Key Concept. The reasoning process is Causation: every fact on a slide is a pressure, a call for change or an effect. And avoid "the reforms failed": every row has mixed effects.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.7', text: 'Why does the College Board say living standards rose "for some"?' },
          { label: 'Topic 5.3', text: 'What changed for workers when spinning moved into the factory?' },
          { label: 'Topic 5.6', text: 'Why did Muhammad Ali and Japan\'s leaders build factories?' }
        ],
        turn: 'Industry made some people **rich** and left many working **long hours for little**, and it made some countries **strong enough to push others around**. Who **called for change**, and what did they get?'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes, no books: retrieval first, then the bridge. Take two or three answers to each, then move.',
          'From 5.7: many city workers stayed poor, and many who grew the cotton, palm oil and tea did not share the gains.',
          'From 5.3: everyone came to one building, at the hours the mill set, under the eye of an overseer.',
          'From 5.6: to build armies to match stronger powers (and, for Muhammad Ali, to hold power for his family).'
        ],
        ask: 'Who was left out of "for some," and what could they do about it?',
        listenFor: 'Workers who stayed poor; they could organize, protest, vote if they had the vote.',
        ap: 'Retrieval from 5.3, 5.6 and 5.7; the bridge to the topic question.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'Why did people call for change, and what did their calls change?',
      subtitle: 'A Chartist meeting on Kennington Common, London, 10 April 1848.',
      notes: {
        minutes: 1,
        land: [
          'The picture is real: a daguerreotype (an early photograph) by William Edward Kilburn of the Chartists\' meeting on Kennington Common, 10 April 1848, held to send their third petition for the vote to Parliament. It is one of a pair that Prince Albert bought in 1848; the Royal Collection holds them.',
          'Do not explain the Chartists yet. Ask the room what they see: a crowd, mostly men, a factory chimney behind.'
        ],
        ask: 'What do you think this crowd wanted?',
        listenFor: 'Better pay, shorter hours, the vote, a say.',
        ap: 'The topic question: the causes and effects of calls for change (learning objective I).'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 14 Minutes',
      title: 'Read, and build four rows.',
      subtitle: 'Workers, thinkers, reformers and governments, and the Ottoman and Qing courts: for each, the pressure, what they wanted, and what happened.',
      big: '14',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 14,
        land: [
          'Students read "Calls for Change" in class: seven short sections, one quotation each from Engels, the directory, the Manifesto and Woren, and three questions.',
          'Circulate. Check that the four rows are being filled with a cause, a call and an effect, not just names.'
        ],
        ask: 'Which row was hardest to fill, and why?',
        listenFor: 'The fourth: the cause is different (outside pressure).',
        ap: 'All four Key Concepts; the reading is the common story.'
      }
    },
    {
      phase: 'pressure', kind: 'split-mirror', eyebrow: 'The Pressure · Sourcing',
      title: 'One city, two pictures.',
      footer: 'Same city. Who wrote each, why and for whom explains much of the difference.',
      template: {
        left: { name: 'Engels, 1845' },
        right: { name: 'A directory, early 1850s' },
        rows: [
          { label: 'Who', left: 'A young German sent to work in his father\'s cotton business', right: 'Whellan and Company, Manchester publishers' },
          { label: 'Says', left: 'A "coal-black, foul-smelling" river; workers\' streets hidden', right: 'Tall chimneys that show "enterprise, and wealth"' },
          { label: 'For whom', left: 'Readers in Germany, in German', right: 'Merchants and visitors who bought the book' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'This is the CED\'s sample activity for 5.8 (p. 97), and the pressure behind every row: industry made some rich and left many in crowded, unhealthy streets. Topic 5.9 takes that city apart.',
          'Engels, The Condition of the Working Class in England in 1844, published in Germany in 1845; the quotations are from the English translation of 1887 ("The Great Towns"). His father was a partner in Ermen and Engels, cotton spinners near Manchester.',
          'The directory: A New Alphabetical and Classified Directory of Manchester and Salford, W. Whellan and Co., copy dated 1853, from its opening chapter, "Sketches of Manchester and its Vicinity." The CED calls it the 1852 directory\'s preface; the readable copy is dated 1853, and its preface itself does not describe the town.',
          'Do not let students call one "true" and one "false." Both are telling part of the truth; the skill is explaining why each tells the part it tells.'
        ],
        ask: 'Why would a business directory leave out the river Engels describes?',
        listenFor: 'It wanted to sell the book and show the town at its best; its readers were businessmen.',
        ap: 'Sourcing and Situation 2.B (point of view, purpose, audience); the cause of the calls for change.'
      }
    },
    {
      phase: 'crime', kind: 'timeline', eyebrow: 'Workers · At First, a Crime', kc: 'KC-5.1.V.A',
      title: 'From a crime to a legal standing.',
      footer: 'Workers organized to improve conditions, limit hours and raise wages.',
      template: {
        range: [1795, 1875],
        tick: 10,
        events: [
          { year: 1799, label: '1799', text: 'Combination Acts ban unions' },
          { year: 1824, label: '1824', text: 'Ban repealed; 1825 law limits unions' },
          { year: 1834, label: '1834', text: 'Tolpuddle laborers sentenced' },
          { year: 1847, label: '1847', text: 'Ten-hour law, in force 1848' },
          { year: 1868, label: '1868', text: 'Trades Union Congress' },
          { year: 1871, label: '1871', text: 'Unions given legal standing' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.V.A: "many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages."',
          'The Combination Acts of 1799 and 1800 voided agreements "for obtaining an advance of wages" or "lessening or altering their ... usual hours." Repealed in 1824; the 1825 act limited what unions could lawfully do.',
          'Tolpuddle, Dorset, 1834: six farm laborers sentenced to seven years\' transportation for swearing a secret oath (under a 1797 act against "unlawful oaths") when forming a union; pardoned in 1836 after a mass protest (a petition of about 800,000 names).',
          'The Factories Act of 1847 limited women and young persons in textile mills to ten hours a day from 1 May 1848. The first Trades Union Congress met in Manchester in June 1868. The Trade Union Act of 1871: a union\'s purposes are not unlawful "by reason merely that they are in restraint of trade."'
        ],
        ask: 'Which date was a turning point, and what was it a turning point from?',
        listenFor: '1824 (from a crime to allowed, with limits) or 1871 (to legal standing).',
        ap: 'KC-5.1.V.A; Causation: one effect (1824) becomes the cause of the next (unions grow).'
      }
    },
    {
      phase: 'charter', kind: 'story-scene', eyebrow: 'Workers · A Movement for the Vote', kc: 'KC-5.1.V.A',
      title: 'The Charter: lost every time, won in the end.',
      template: {
        caption: 'The Chartists\' convention, London, 1839',
        steps: [
          { label: '1838', text: 'A People\'s Charter: **a vote for every man over 21**, and five more demands.' },
          { label: '1839, 1842', text: 'Petitions of **over a million**, and a claimed **three million**: rejected.' },
          { label: '1848', text: 'A great meeting at **Kennington Common**; a third petition, rejected.' },
          { label: 'Later', key: true, text: '**Most of the six points became law**, 1858 to 1911.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The six points (London Museum): a vote for every man over 21, equal districts, no property requirement for members of Parliament, a Parliament elected every year, the secret ballot, and pay for members.',
          'The first petition (1839) had over 1.2 million signatures; the Chartists\' own newspaper, the Northern Star, counted about 3.3 million for the 1842 petition. All three were rejected.',
          'Later: the property requirement went in 1858; the vote reached many working men in 1867 and 1884; the secret ballot came in 1872; districts were redrawn closer to equal in 1885; members were paid from 1911. A Parliament every year never came.',
          'The picture is an etching of the National Convention "as it met on Monday the 4th of February, 1839, at the British Coffee House," Library of Congress; someone has written "Chartist meeting" on it.'
        ],
        ask: 'Did the Chartists fail?',
        listenFor: 'They lost their petitions, but most of what they asked for came later: a mixed effect.',
        ap: 'KC-5.1.V.A ("workers\' movements"); Causation: short-term failure, long-term effect.'
      }
    },
    {
      phase: 'parties', kind: 'timeline-lanes', eyebrow: 'Workers · Parties in Different Countries', kc: 'KC-5.1.V.A',
      title: 'Workers build parties.',
      footer: 'Many wanted more than pay: "alternative visions of society."',
      template: {
        range: [1860, 1910],
        tick: 10,
        lanes: [
          { name: 'Germany', events: [ { year: 1875, label: '1875', text: 'Two parties unite' }, { year: 1878, label: '1878', text: 'Socialists banned' }, { year: 1890, label: '1890', text: 'SPD: most votes' } ] },
          { name: 'Britain', events: [ { year: 1868, label: '1868', text: 'Unions\' congress' }, { year: 1900, label: '1900', text: 'Workers\' committee' }, { year: 1906, label: '1906', text: 'Labour Party' } ] },
          { name: 'United States', events: [ { year: 1886, label: '1886', text: 'AFL founded' } ] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.V.A: "Workers\' movements and political parties emerged in different areas, promoting alternative visions of society."',
          'Germany: Lassalle\'s party (1863) and the Eisenach party of Bebel and Liebknecht (1869) united at Gotha in 1875. The Anti-Socialist Law of October 1878 banned socialist meetings and newspapers until it lapsed in September 1890. That year the party, renamed the Social Democratic Party, won about 20 percent of the vote, more than any other party, but only 35 seats (German History in Documents and Images). It became the largest party in seats in 1912.',
          'Britain: the Labour Representation Committee, February 1900; 29 seats and the name Labour Party in 1906.',
          'United States: the American Federation of Labor, December 1886, Samuel Gompers its first president: skilled workers\' unions for wages, hours and conditions.'
        ],
        ask: 'Why would a government ban a party that was winning votes?',
        listenFor: 'It feared the party\'s vision of a different society.',
        ap: 'KC-5.1.V.A; the bridge to KC-5.3.IV.A.ii.'
      }
    },
    {
      phase: 'manifesto', kind: 'source-quote', eyebrow: 'Thinkers · In Their Own Words', kc: 'KC-5.3.IV.A.ii',
      title: 'Marx and Engels, 1848.',
      footer: 'Who wrote this, for whom, and what did they want the reader to do?',
      template: {
        quote: 'The history of all hitherto existing society is the history of class struggles.',
        attribution: { author: 'Karl Marx and Friedrich Engels', work: 'Manifesto of the Communist Party, English translation of 1888', year: '1848' },
        notice: 'Which two classes did Marx see in Manchester\'s streets?'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.IV.A.ii: "Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism."',
          'Written for the Communist League, a small group of radicals in London, and printed in German in London in February 1848. The English translation of 1888 is by Samuel Moore, with Engels.',
          'Marx: industry was splitting society "into two great hostile camps," the bourgeoisie (owners) and the proletariat (wage workers); "the theory of the Communists may be summed up in the single sentence: Abolition of private property." The ending: "The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!"',
          'Source it: the same Engels who wrote about Manchester\'s streets (slide 5). Purpose: to win workers to a revolutionary movement. Audience: workers and radicals in many countries.'
        ],
        ask: 'Why does this source start with all of history, not with factories?',
        listenFor: 'To show that class conflict is the pattern, and that the workers\' turn is coming.',
        ap: 'KC-5.3.IV.A.ii; Sourcing and Situation 2.B.'
      }
    },
    {
      phase: 'socialism', kind: 'split-venn', eyebrow: 'Thinkers · Two Words', kc: 'KC-5.3.IV.A.ii',
      title: 'Socialism and communism.',
      footer: 'By 1900: Marx shaped workers\' parties, but no revolution came.',
      template: {
        left: { name: 'Socialism', items: ['Owen\'s followers, late 1820s', 'A wide family of ideas', 'Many worked through elections'] },
        right: { name: 'Marx\'s communism', items: ['Manifesto, 1848', 'Workers\' revolution', 'A society with no classes'] },
        both: ['Wealth-making owned in common', 'Anger at who held power']
      },
      notes: {
        minutes: 2,
        land: [
          'Robert Owen managed the New Lanark mills from 1800, cut the adult working day from twelve hours to ten and opened a school for workers\' children in 1816. The word "socialist" first appeared in English in 1827 among his followers; in the 1830s "socialism" and "Owenism" were used interchangeably.',
          'Engels, 1888 preface: "in 1847, socialism was a middle-class movement, communism a working-class movement," which is why the book was not called a socialist manifesto.',
          'By 1900: Germany\'s Social Democrats adopted a program based on Marx\'s ideas at Erfurt in 1891 while they kept winning seats; socialist parties met in Paris in July 1889 and called for marches on May 1, 1890, for an eight-hour day. No communist government existed before the twentieth century (Unit 7).'
        ],
        ask: 'What did socialists and Marx agree on, and where did they part?',
        listenFor: 'Both wanted the means of making wealth owned in common; Marx said it would take a workers\' revolution.',
        ap: 'KC-5.3.IV.A.ii ("the ideas of socialism and communism").'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · 8 Minutes',
      title: 'Why did workers organize, and what did Marx imagine?',
      subtitle: 'Explain one cause that led workers to organize, one thing they wanted and one effect, what socialism meant and what Marx predicted, and one thing his ideas did or did not do by 1900. On your own: no coach.',
      big: '8',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-8-reactions-to-industrial-economy.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Checkpoint 1 assesses Learning Targets 1 and 2 (KC-5.1.V.A and KC-5.3.IV.A.ii). Students work without the coach.'
        ],
        ask: 'Which effect did you choose, and was it a win or a loss?',
        listenFor: 'A specific effect with a date: 1871, 1847, 1867, or the Charter refused.',
        ap: 'KC-5.1.V.A and KC-5.3.IV.A.ii; Causation.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Sourcing and Situation 2.B · Model',
      title: 'How do you source a source?',
      footer: 'Four questions: who made it, why, for whom, and when. Then say how one shapes what it says.',
      template: {
        frame: '{{Source}} says {{what}}, because its maker {{point of view / purpose / audience / situation}}: {{how that explains it}}.',
        exampleLabel: 'An everyday case',
        example: '**The company\'s brochure** says **the new cafeteria is bright and modern** and says nothing about the lines, because **the company wrote it to sell cafeterias to school boards**: **it was printed before anyone had stood in a line**.'
      },
      notes: {
        minutes: 2,
        land: [
          'Skill 2.B: "Explain the point of view, purpose, historical situation, and/or audience of a source." The move is not naming the four; it is explaining how one of them shapes what the source says.',
          'Run the cafeteria case aloud, then ask students to say it for Engels.'
        ],
        ask: 'Now say it for Engels.',
        listenFor: 'Engels says the workers\' streets are filthy, because he wrote to show German readers what industry did to workers.',
        ap: 'Sourcing and Situation 2.B.'
      }
    },
    {
      phase: 'reforms', kind: 'ledger', eyebrow: 'Reformers · Four Kinds', kc: 'KC-5.1.V.D',
      title: 'Fixing the worst of it.',
      footer: 'Who pushed each: governments, organizations, or individuals?',
      template: {
        rows: [
          { name: 'Political', tool: 'Reform Acts, 1867 and 1884', result: 'gave the vote to many working men.' },
          { name: 'Social', tool: 'Factory Act, 1833; Mines Act, 1842', result: 'kept young children out of mills and mines.' },
          { name: 'Educational', tool: 'Education Acts, 1870 and 1880', result: 'built schools and required attendance.' },
          { name: 'Urban', tool: 'London\'s sewers, after 1858', result: 'carried the city\'s waste away.' }
        ],
        payoffLabel: 'Every reform',
        payoff: 'Fixed a problem without overthrowing the system'
      },
      notes: {
        minutes: 3,
        land: [
          'KC-5.1.V.D: "some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms."',
          'Political: the 1867 act added about 938,000 voters, many of them working men in towns; 1884 added many in the countryside; no woman voted in a British national election until 1918.',
          'Social: the 1833 Factory Act, no children under nine in textile mills, nine hours a day for ages nine to thirteen, four inspectors. The 1842 Mines Act: no women or girls, and no boys under ten, "within any Mine or Colliery."',
          'Educational: the 1870 act set up school boards that could require attendance; the 1880 act made every local authority require it.',
          'Urban: the "Great Stink" of the hot summer of 1858; Bazalgette\'s 82 miles of main sewers, fed by about 1,100 miles of street sewers, completed in 1875 (London Museum). The crisis is 5.9\'s.'
        ],
        ask: 'Name a reform pushed by an organization, not a government.',
        listenFor: 'Unions pushing the ten-hour law; the Chartists pushing the vote.',
        ap: 'KC-5.1.V.D (all four kinds).'
      }
    },
    {
      phase: 'bismarck', kind: 'cause-chain', eyebrow: 'Reformers · A Government Reforms', kc: 'KC-5.1.V.D',
      title: 'Ban the party, then insure its voters.',
      footer: 'Reform could answer workers, and also be a weapon against their party.',
      template: {
        steps: [
          { label: '1875', text: 'Germany\'s workers\' parties unite' },
          { label: '1878', text: 'Bismarck bans socialist meetings and newspapers' },
          { label: '1883 to 1889', text: 'Health, accident and old-age insurance laws', key: true },
          { label: 'The aim', text: 'Win workers away from the socialists, in part' }
        ],
        links: ['so', 'then', 'to']
      },
      notes: {
        minutes: 2,
        land: [
          'Sickness insurance, May 1883; accident insurance, July 1884; old-age and disability insurance, June 1889.',
          'The emperor\'s message of November 1881, Bismarck\'s program: cure discontent "not only through the repression of Social Democratic excesses" but by "the positive promotion of workers\' welfare." Bismarck to the Reichstag, March 1884: the socialist leaders need "dissatisfied classes"; "dissatisfied workers are just what they need."',
          'Keep "in part": the message also spoke of a Christian duty to the poor.'
        ],
        ask: 'Was the insurance a win for workers or for Bismarck?',
        listenFor: 'Both: workers gained insurance; Bismarck hoped to weaken the socialists. The SPD kept growing anyway.',
        ap: 'KC-5.1.V.D ("some governments ... promoted"); Causation and sourcing (Bismarck\'s own purpose).'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder · 8 Minutes',
      title: 'Source two descriptions of Manchester.',
      subtitle: 'Engels and the directory: who made each, what each says, its purpose and audience, how one of those explains the difference, and which you think is more accurate.',
      big: '8',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-8-reactions-to-industrial-economy.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'The CED\'s own sample activity for 5.8 (p. 97): "discuss the differences in the descriptions; how the point of view, purpose, and intended audience of the authors might explain the differences; and which description they believe is the most accurate and why."',
          'Both sources are printed in the Skill Builder; students need nothing else.'
        ],
        ask: 'Which is more accurate, and what would you need to check it?',
        listenFor: 'Each is accurate about part of the city; a census, a health report or a worker\'s own account would help.',
        ap: 'Sourcing and Situation 2.B.'
      }
    },
    {
      phase: 'outside', kind: 'story-steps', eyebrow: 'The Old Empires · A Different Pressure', kc: 'KC-5.1.V.B',
      title: 'The pressure came from outside.',
      footer: 'Like Egypt and Japan in Topic 5.6, both tried to modernize from the top.',
      template: {
        steps: [
          { label: 'Industrial powers', text: 'Steamships, guns and trade **stronger than theirs**.' },
          { label: 'Defeats', text: 'China loses the **Opium Wars**, 1839 to 1842 and 1856 to 1860 (Unit 6).' },
          { label: 'Reform from the top', text: 'Governments build **armies, factories and schools**.' },
          { label: 'Resistance', key: true, text: 'People **inside** the government and old elites push back.' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.1.V.B: "In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups."',
          'The cause is different from the first three rows: not factory conditions at home but the power of the industrial states. The Opium Wars are 6.5\'s; name them as the cause only.'
        ],
        ask: 'How is this cause different from the workers\' cause?',
        listenFor: 'It comes from outside: foreign powers, not their own factories.',
        ap: 'KC-5.1.V.B (the cause).'
      }
    },
    {
      phase: 'ottoman', kind: 'story-scene', eyebrow: 'The Old Empires · The Ottoman Empire', kc: 'KC-5.1.V.B',
      title: 'Reform, and the people who fought it.',
      template: {
        caption: 'The sultan\'s fez factory, Istanbul, 1880s',
        steps: [
          { label: '1790s to 1807', text: 'Selim III\'s **New Order** army; Janissaries and scholars oppose; **a revolt overthrows him**.' },
          { label: '1826', text: 'Mahmud II **destroys the Janissaries**.' },
          { label: '1839 to 1856', text: 'The **Tanzimat**: equal rights, factories, telegraph; many Muslims resent equality.' },
          { label: '1876 to 1878', key: true, text: 'A constitution and parliament; **Abdulhamid II shuts it down**.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Selim III\'s New Order: "a new infantry ... with European-style uniforms, imported rifles, and French instructors" (Todorova). The Janissaries and important conservative ulema opposed it; a revolt overthrew him in May 1807.',
          'June 1826: Mahmud II destroyed the Janissary corps and built a new army along European lines.',
          'The Edict of Gülhane, 3 November 1839 (Inalcik\'s translation): "perfect security for life, honor, and property"; "a regular system of assessing taxes"; regular conscription; "The Muslim and non-Muslim subjects of our lofty Sultanate shall, without exception, enjoy our imperial concessions." The 1856 decree made Muslims and non-Muslims legally equal, which "was not well perceived by many Muslims who traditionally enjoyed a superior status."',
          'The fez factory (Feshane) was set up in 1835 with machines from Britain and Belgium; the photograph, by Abdullah Frères for Abdulhamid II\'s albums (1880 to 1893), shows it later. The telegraph from 1855. The constitution of December 1876; parliament dissolved and the constitution suspended in February 1878.'
        ],
        ask: 'Who resisted, and what were they protecting?',
        listenFor: 'The Janissaries (their place in the army), conservative scholars, Muslims who lost their higher status, the sultan (his power).',
        ap: 'KC-5.1.V.B (reform and resistance).'
      }
    },
    {
      phase: 'qing', kind: 'story-scene', eyebrow: 'The Old Empires · Qing China', kc: 'KC-5.1.V.B',
      title: 'Self-Strengthening, and its limits.',
      template: {
        caption: 'Li Hongzhang, right, with Ulysses S. Grant, 1879',
        steps: [
          { label: '1860s', text: 'Arsenals, a **navy yard**, a language school, steamships.' },
          { label: '1867', text: 'Woren opposes Western mathematics; **few top scholars apply**.' },
          { label: '1894 to 1895', text: '**Japan defeats** China\'s new navy.' },
          { label: '1898', key: true, text: 'A hundred days of reform, **stopped by Cixi**.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Self-Strengthening, after the Taiping Rebellion and the Opium Wars: the Zongli Yamen (1861, Prince Gong); the Tongwen Guan language school (1862); the Jiangnan Arsenal, Shanghai (1865, Zeng Guofan and Li Hongzhang); the Fuzhou navy yard (1866, Zuo Zongtang); the China Merchants\' Steam Navigation Company (1872, Li). The aim (Columbia, Asia for Educators): keep "the strong essence of Chinese civilization while adding superior technology from abroad."',
          '1867: Woren, Grand Secretary and the emperor\'s tutor, to the throne (Huters\'s translation): "establishing a country rests on valuing propriety and righteousness, not on schemes and stratagems." The court overruled him; about 98 applied and about 30 were admitted (Zhao; Lei). This is the BeInTheRoom.',
          'June to September 1898: the Guangxu Emperor\'s reform decrees; Cixi\'s coup on 21 September; the emperor confined; six reformers executed.',
          'Do not say Cixi spent the navy\'s money and so China lost. Elman: her Summer Palace spending "did not use up the imperial treasury or leave nothing for the Chinese navy," though it limited the fleet; the deeper problems were disorganization and training.',
          'The photograph is by Liang Shitai (See Tay), 1879, during Grant\'s tour of the world; the print is titled as taken at Tianjin.'
        ],
        ask: 'Why might borrowing machines but not ideas have limits?',
        listenFor: 'Without trained officials and wider change, the arsenals depended on a few leaders and foreign experts.',
        ap: 'KC-5.1.V.B (reform and resistance).'
      }
    },
    {
      phase: 'compare', kind: 'balance', eyebrow: 'The Old Empires · Compare', kc: 'KC-5.1.V.B',
      title: 'Same pressure, two empires.',
      template: {
        job: 'Modernize under pressure',
        left: { tag: 'Ottoman', name: 'Tanzimat', when: '1839 to 1876', text: 'Equal rights, factories, telegraph; resisted by Janissaries, scholars, the sultan.' },
        right: { tag: 'Qing', name: 'Self-Strengthening', when: '1860s to 1895', text: 'Arsenals, navy, language school; resisted by Woren, then Cixi.' },
        claimLabel: 'Compare',
        claim: 'Different empires, **shared cause and limit**: pressure from industrial powers pushed both to reform, and people inside resisted.'
      },
      notes: {
        minutes: 2,
        land: [
          'The comparison is the CED sentence itself: "sought to reform and modernize ... often resisted by some members of government or established elite groups."',
          'Against 5.6: Japan\'s reforms went furthest, and in 1895 Japan defeated China.'
        ],
        ask: 'Which resistance came from the top of government, and which from elites below it?',
        listenFor: 'From the top: Abdulhamid II, Cixi. From elites: the Janissaries, the ulema, Woren and the scholars.',
        ap: 'KC-5.1.V.B; Causation across two cases.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Unions became legal in 1824.', evidence: 'An 1825 law limited them, and Tolpuddle came in 1834. Legal standing came in 1871.', source: 'Combination laws; Trade Union Act, 1871' },
          { myth: 'Marx\'s communism was tried in the 1800s.', evidence: 'No communist government existed until the twentieth century. By 1900 his ideas lived in parties.', source: 'Erfurt Program, 1891' },
          { myth: 'China and the Ottoman Empire refused to change.', evidence: 'Both governments built arsenals, factories and schools. Resistance came from inside.', source: 'Tanzimat; Self-Strengthening' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Each myth flattens a mixed effect into a single one. The correction keeps the history\'s "and": allowed and limited; influential and unrealized; reformed and resisted.',
          'A fourth, if it comes up: "Workers of the world, unite!" is a popular simplification. The 1888 English reads "Working Men of All Countries, Unite!"'
        ],
        ask: 'Which myth is the most tempting, and why?',
        listenFor: 'Any, with the reason it flattens the story.',
        ap: 'Causation: effects are rarely all one thing.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'Four rows, one story.',
      footer: 'Workers organized. Thinkers imagined. Governments reformed. Old empires modernized, and met resistance.',
      template: {
        columns: [ { name: 'The pressure' }, { name: 'The call' }, { name: 'What happened' } ],
        rows: [
          { label: 'Workers', cells: ['Long hours, low pay, no vote', 'Unions, the Charter, parties', 'Legal unions by 1871; vote for many men'] },
          { label: 'Thinkers', cells: ['Anger at who held power', 'Socialism; Marx\'s communism', 'Shaped parties; no revolution by 1900'] },
          { label: 'Reformers', cells: ['Mills, mines, crowded cities', 'Laws on votes, work, schools, sewers', 'Reforms in Britain; insurance in Germany'] },
          { label: 'Old empires', cells: ['Industrial powers\' guns and trade', 'Tanzimat; Self-Strengthening', 'Arsenals and reforms, resisted from inside'] }
        ],
        result: { label: 'Connect', text: 'Pick one row. Say the cause, the call and the effect in one sentence.' }
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide. Students redraw it from memory: four rows, three columns.',
          'Reading down the first three rows shows the calls feeding each other: workers\' discontent, Marx\'s ideas, governments\' answers. The fourth row repeats the pattern with a different cause.'
        ],
        ask: 'Which row\'s effect was the most mixed?',
        listenFor: 'Any, with both halves of the effect.',
        ap: 'Learning objective I: causes and effects of calls for change.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis', kc: 'Unit 5: Learning Objective I',
      title: 'Say it in one sentence.',
      template: {
        frame: 'Long hours and anger at who held power led workers to form ___ and thinkers like ___ to imagine a new society; governments passed ___; and pressure from industrial powers pushed the Ottoman and Qing courts to ___, against ___ from inside.',
        words: ['modernize', 'unions', 'Marx', 'resistance', 'reforms'],
        prompt: 'Fill it in from memory, then add one example for each part.'
      },
      notes: {
        minutes: 1,
        land: [
          'The objective answered: the causes and effects of calls for change, 1750 to 1900.'
        ],
        ask: 'Which part of your sentence is a cause, and which an effect?',
        listenFor: 'Causes: long hours, anger, outside pressure. Effects: unions, ideas, reforms, modernization and resistance.',
        ap: 'Learning objective I.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab · Optional',
      title: 'Two sources, one row.',
      subtitle: 'Choose at least two cards. For each: what kind of source it is, which row it is evidence for, and how its maker\'s point of view or purpose shapes what it shows.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-8-reactions-to-industrial-economy.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional. Six real objects: the Kennington Common daguerreotype, the 1839 Convention etching, the 1843 Punch cartoon, the fez factory and the engineering students (Abdulhamid II\'s albums), and the Grant and Li photograph. No AI picture.'
        ],
        ask: 'Whose album were the Ottoman photographs made for, and why does that matter?',
        listenFor: 'The sultan\'s: they show the empire as its government wanted it seen.',
        ap: 'Sourcing and Situation 2.B.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Who reformed, who resisted, and why?',
      subtitle: 'Explain one reform and who pushed it, why Bismarck gave workers insurance, what pushed the Ottoman or Qing government to modernize and who resisted, and one cause, call and effect in a sentence. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-8-reactions-to-industrial-economy.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Checkpoint 2 assesses Learning Targets 3 and 4 (KC-5.1.V.D and KC-5.1.V.B) and the learning objective, and declares Causation.'
        ],
        ask: 'What is the cause in your last sentence, and what is the effect?',
        listenFor: 'A named cause, a named call for change and a named effect.',
        ap: 'KC-5.1.V.D, KC-5.1.V.B and learning objective I; Causation.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'Workers organized. Thinkers imagined. Governments reformed. Old empires modernized, and met resistance.',
      subtitle: 'Students of the Ottoman Imperial School of Military Engineering, Istanbul, 1880s. Next, Topic 5.9: the society industry left behind.',
      notes: {
        minutes: 1,
        land: [
          'The photograph, by Abdullah Frères for Sultan Abdulhamid II\'s albums (1880 to 1893), shows the new kind of officer the reforms were meant to make, as the government wanted it seen.',
          'Hand-off to 5.9: industry had changed who worked, where people lived and how families got by. What kind of society did it leave behind?'
        ],
        ask: 'Say the topic in one sentence.',
        listenFor: 'The four rows, each with a cause and an effect.',
        ap: 'Learning objective I; the bridge to 5.9.'
      }
    }
  ]
};
