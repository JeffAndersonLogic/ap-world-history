/*
 * Teacher-only orchestration for Topic 1.7.
 *
 * Student-facing lesson content stays in assets/data/lesson-1-7-comparison.js
 * and lesson-1-7-renderer-config.js. This file stores only teacher-facing
 * pacing, priorities, notes, and presentation sequence.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '1.7',
    date: 'September 14–15, 2026',
    cohort: 'Green + Silver',
    minutes: 90,
    title: 'Comparison in the Period c. 1200 to c. 1450',
    subtitle: 'Same problem. Different solutions.',
    essentialQuestion: 'Why did societies facing the same problem—organizing and legitimizing power—build such different states from c. 1200 to c. 1450?',
    apFocus: 'Comparison + Governance + Argumentation',
    endTarget: 'Students can make a defensible comparison between two Unit 1 societies using one shared category, specific evidence from both sides, and an explanation of why the similarity or difference existed.'
  },

  priorities: {
    must: [
      'Students complete the First & 10 and both checkpoints; these are the non-negotiable evidence-of-learning pieces for Topic 1.7.',
      'Comparison begins with one shared historical category, not two separate summaries.',
      'Students use specific evidence from BOTH societies.',
      'Students state a meaningful similarity or difference directly.',
      'Students explain WHY the pattern existed rather than stopping at description.'
    ],
    should: [
      'Use the Unit 1 world map to keep comparisons geographically grounded.',
      'Model Song China versus Europe as the clearest contrast in political organization.',
      'Model Song China versus the Inca to show that comparison can reveal both similarity and difference.',
      'Use the Evidence Lab or AP Skill Builder as a bridge between Checkpoint 1 and Checkpoint 2.'
    ],
    could: [
      'Use the Marco Polo primary source as an extension on what makes a comparison fair and defensible.',
      'Use the Unit 1 review video only if retrieval is clearly weak across the room.',
      'Use the deep reading as enrichment, remediation, or makeup support rather than as a whole-class requirement.'
    ]
  },

  flow: [
    { id: 'ready', label: 'BeReady', range: '0–5', minutes: 5, teacher: 'Take fast verbal answers. Do not turn retrieval into reteaching.', students: 'Retrieve one concrete state-power example from Unit 1.', slide: 2 },
    { id: 'first10', label: 'First & 10', range: '5–17', minutes: 12, teacher: 'Launch the required First & 10, then circulate. Listen for students identifying a shared problem across regions.', students: 'Complete the First & 10 reading and its responses.', slide: 3 },
    { id: 'frame', label: 'Frame Comparison', range: '17–27', minutes: 10, teacher: 'Establish the rule: same category first, evidence second, relationship third, explanation fourth.', students: 'Identify what makes a comparison valid rather than two summaries.', slide: 4 },
    { id: 'map', label: 'Map + Lenses', range: '27–35', minutes: 8, teacher: 'Use the map briefly. Move from regions to comparison categories.', students: 'Choose two societies and one shared category.', slide: 6 },
    { id: 'teach', label: 'Teach the Pattern', range: '35–50', minutes: 15, teacher: 'Teach state building as a toolkit, then model two comparisons. Keep this tight.', students: 'Listen for the shared problem and the different solution.', slide: 8 },
    { id: 'guided', label: 'Guided Practice', range: '50–60', minutes: 10, teacher: 'Build one comparison with the room. Insist on evidence from both sides and a because.', students: 'Help construct a defensible comparison claim.', slide: 11 },
    { id: 'checkpoint1', label: 'Checkpoint 1', range: '60–70', minutes: 10, teacher: 'Launch Checkpoint 1, then circulate for category/evidence problems only.', students: 'Explain one similarity in how two Unit 1 societies built or justified power.', slide: 12 },
    { id: 'apply', label: 'Apply', range: '70–78', minutes: 8, teacher: 'Use the AP Skill Builder or Evidence Lab as revision practice before the final response.', students: 'Strengthen the comparison with a second relationship or better explanation.', slide: 13 },
    { id: 'checkpoint2', label: 'Checkpoint 2', range: '78–87', minutes: 9, teacher: 'Launch the final comparison paragraph. Confer only where students are stuck on category, evidence, or explanation.', students: 'Complete Checkpoint 2: one similarity and one difference with evidence and explanation.', slide: 14 },
    { id: 'close', label: 'Close + Bridge', range: '87–90', minutes: 3, teacher: 'Land the Unit 1 thesis, then pivot to networks of exchange.', students: 'State the big Unit 1 pattern and record the Unit 2.1 reading.', slide: 15 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 1.7', url: '../unit-1/lesson-1-7-comparison.html' },
    { label: 'First & 10', url: '../unit-1/first-and-10-topic-1-7-comparison-capture.html?v=response-id-fix-v1' },
    { label: 'Unit 1 eBook', url: '../ebook/unit-1.html' },
    { label: 'Topic 1.7 Map', url: '../assets/images/instructional-maps/topic-1-7.svg' }
  ],

  projection: {
    storageKey: 'behistorical-topic-1-7-slide',
    title: 'Topic 1.7 Presentation',
    file: 'present-topic-1-7.html'
  },

  slides: [
    {
      phase: 'open', kind: 'hero', eyebrow: 'AP World History · Topic 1.7',
      title: 'Same Problem. Different Solutions.',
      subtitle: 'Comparison in the Period c. 1200 to c. 1450',
      visual: { type: 'map' },
      notes: { minutes: 1, land: ['Today is not another content dump. It is the day we make Unit 1 talk to itself.', 'Every society had to solve recurring problems: authority, legitimacy, labor, resources, and distance.'], ask: 'If two societies face the same problem but solve it differently, what skill are we practicing?', listenFor: 'Comparison; shared category; similarity and difference.' }
    },
    {
      phase: 'open', kind: 'question', eyebrow: 'The Question',
      title: 'Why did societies facing the same problem build different states?',
      subtitle: 'Your job today is to compare a process, not recite two places.',
      notes: { minutes: 1, land: ['Keep state formation and state power at the center. Belief, trade, geography, labor, and political tradition can explain the differences.'], ask: 'What counts as a method of building or maintaining state power?', listenFor: 'Bureaucracy, religion, tribute, labor systems, military elites, trade wealth, infrastructure, feudal ties.' }
    },
    {
      phase: 'ready', kind: 'prompt', eyebrow: 'BeReady · 4 Minutes',
      title: 'Retrieve, don’t research.',
      bullets: ['Song China: one method of maintaining state power', 'Americas: one method used by the Mexica or Inca', 'Europe or Africa: one method that shaped political authority'],
      footer: 'No notes for the first 60 seconds.',
      notes: { minutes: 4, land: ['This is diagnostic. You are listening for whether evidence is still available in memory.'], ask: 'Which example could you actually use in a comparison paragraph?', listenFor: 'Specific nouns: exams, bureaucracy, mit’a, tribute, roads, feudalism, Church, Christianity, trade, Great Zimbabwe, Hausa, Ethiopia.', avoid: 'Do not reteach every missed example.' }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Required First & 10 · 12 Minutes',
      title: 'A World of Different Answers',
      subtitle: 'Read for the recurring problem: how did societies organize and legitimize power?',
      bullets: ['Complete the reading', 'Answer the embedded response questions', 'Underline one piece of evidence you could reuse in a comparison'],
      action: { label: 'Open First & 10', url: '../unit-1/first-and-10-topic-1-7-comparison-capture.html?v=response-id-fix-v1' },
      footer: 'You are reading for transferable evidence, not for a new list of facts.',
      notes: { minutes: 12, land: ['This is required, not enrichment. It activates the Unit 1 evidence students will use for the rest of the block.', 'Circulate instead of narrating the reading.'], ask: 'What shared problem do you see appearing in more than one region?', listenFor: 'Authority, legitimacy, administration, labor, resources, geography.' }
    },
    {
      phase: 'frame', kind: 'contrast', eyebrow: 'What Comparison Is',
      title: 'Two summaries are not a comparison.',
      left: { label: 'Weak', text: 'Song China had a bureaucracy. Europe had feudalism.' },
      right: { label: 'Comparison', text: 'Song China centralized authority through an imperial bureaucracy, while medieval Europe distributed power through local feudal relationships.' },
      notes: { minutes: 4, land: ['The second sentence names the shared category: political organization.', 'A comparison sentence makes the relationship visible.'], ask: 'What did the second sentence do that the first did not?', listenFor: 'Shared category; direct relationship; centralized versus decentralized.' }
    },
    {
      phase: 'frame', kind: 'process', eyebrow: 'The Comparison Recipe',
      title: 'Category → Evidence → Relationship → Why',
      steps: [{ label: '1', text: 'Choose ONE shared category' }, { label: '2', text: 'Use evidence from BOTH societies' }, { label: '3', text: 'State the similarity OR difference' }, { label: '4', text: 'Explain WHY the pattern existed' }],
      footer: 'If the category changes halfway through, the comparison collapses.',
      notes: { minutes: 6, land: ['This is the whole lesson. Return to these four moves every time a student gets lost.'], ask: 'Which step do students most often skip?', listenFor: 'Explanation / why.' }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Geographic Grounding',
      title: 'Six regions. Many possible pairs.', visual: { type: 'map' },
      footer: 'Start with a region. Narrow to a specific society or state.',
      notes: { minutes: 3, land: ['Comparison gets stronger when students move from broad regions to specific states.', 'Strong pairs include Song China and Europe; Song China and Inca; Mexica and Inca; Great Zimbabwe and a South/Southeast Asian trade state.'], ask: 'Which pair gives us the cleanest comparison of political organization?', listenFor: 'Song China and Europe is the easiest clean contrast.' }
    },
    {
      phase: 'map', kind: 'grid', eyebrow: 'Unit 1 Comparison Lenses',
      title: 'Ask the same question of both societies.',
      cards: [{ title: 'Administration', text: 'Who actually ran the state?' }, { title: 'Legitimacy', text: 'Why should people obey?' }, { title: 'Extraction', text: 'How did rulers get labor or resources?' }, { title: 'Geography', text: 'What problem did distance or environment create?' }, { title: 'Trade', text: 'How did exchange support power?' }, { title: 'Social Order', text: 'How was hierarchy maintained?' }],
      notes: { minutes: 5, land: ['Students do not need to compare everything. One shared lens is enough for a strong claim.'], ask: 'Which lens best fits the evidence you remember?', listenFor: 'A category plus two possible societies.' }
    },
    {
      phase: 'teach', kind: 'grid', eyebrow: 'State-Power Toolkit',
      title: 'There was no single path to state power.',
      cards: [{ title: 'Bureaucracy', text: 'Song exams and scholar-officials' }, { title: 'Tribute + Labor', text: 'Mexica tribute; Inca mit’a' }, { title: 'Belief', text: 'Confucian, Christian, Islamic, Hindu/Buddhist legitimacy' }, { title: 'Trade Wealth', text: 'Great Zimbabwe, Hausa states, maritime Southeast Asia' }, { title: 'Local Bonds', text: 'European feudal relationships' }, { title: 'Infrastructure', text: 'Inca roads, storehouses, information systems' }],
      notes: { minutes: 4, land: ['These are not six vocabulary words to memorize. They are recurring solutions to the same governing problems.'], ask: 'Which tools appear in more than one region?', listenFor: 'Religion/belief, tribute/labor, trade, administration.' }
    },
    {
      phase: 'teach', kind: 'comparison-image', eyebrow: 'Model Comparison 1 · Political Organization',
      title: 'Song China vs. Medieval Europe',
      left: { label: 'Song China', text: 'Centralized imperial bureaucracy selected through civil service examinations.', visual: { type: 'evidence', index: 0 } },
      right: { label: 'Europe', text: 'Political authority remained fragmented among monarchs, nobles, and local feudal relationships.', visual: { type: 'evidence', index: 5 } },
      footer: 'Same problem: governing society. Different solution: centralized administration vs. decentralized personal bonds.',
      notes: { minutes: 6, land: ['This is the cleanest Unit 1 contrast in political organization.', 'Do not reduce Europe to “weak” and China to “strong.” They organized authority differently.'], ask: 'Why might these different political structures have developed?', listenFor: 'Continuity of Chinese imperial institutions; western European political fragmentation after Rome; durable local power structures.', avoid: 'Do not claim feudal Europe had no kings or no states.' }
    },
    {
      phase: 'teach', kind: 'comparison-image', eyebrow: 'Model Comparison 2 · Administration',
      title: 'Song China vs. the Inca',
      left: { label: 'Song China', text: 'Officials, examinations, written bureaucracy, and a long imperial administrative tradition.', visual: { type: 'evidence', index: 0 } },
      right: { label: 'Inca', text: 'Roads, labor obligations, administrators, storehouses, and quipu helped integrate a vast Andean empire.', visual: { type: 'evidence', index: 3 } },
      footer: 'Similarity: both built systems to administer large populations. Difference: the tools and political traditions were not the same.',
      notes: { minutes: 5, land: ['This model prevents students from thinking comparison means only difference.', 'Both states solved scale through administration; the evidence looks different.'], ask: 'What is the shared category here?', listenFor: 'Administration / governing a large territory / state capacity.' }
    },
    {
      phase: 'guided', kind: 'contrast', eyebrow: 'Weak vs. Strong Reasoning',
      title: 'The word “because” changes the answer.',
      left: { label: 'Stops Too Soon', text: 'Song China was more centralized than Europe.' },
      right: { label: 'AP Move', text: 'Song China was more centralized than Europe because it preserved an imperial bureaucratic tradition, while political authority in medieval Europe remained divided among local nobles, monarchs, and the Church.' },
      notes: { minutes: 5, land: ['The first sentence may be accurate, but it does not explain the pattern.', 'The second connects the evidence to historical context.'], ask: 'What historical reasoning appears after “because”?', listenFor: 'Cause/context behind the difference.' }
    },
    {
      phase: 'checkpoint1', kind: 'action', eyebrow: 'Required Checkpoint 1 · 10 Minutes',
      title: 'Build a Comparison',
      subtitle: 'Choose two Unit 1 regions and explain one similarity in how they built or justified power.',
      bullets: ['Name two specific societies or states', 'Use one shared category', 'Give specific evidence from both', 'Explain why the similarity existed'],
      action: { label: 'Open Topic 1.7', url: '../unit-1/lesson-1-7-comparison.html#modules' },
      footer: 'A similarity without evidence from both sides is not finished.',
      notes: { minutes: 10, land: ['This is the first independent proof point.', 'Do not rescue students by supplying the second society. Ask them to return to the comparison lenses.'], ask: 'What are you comparing them ON?', listenFor: 'A shared category before evidence.' }
    },
    {
      phase: 'apply', kind: 'process', eyebrow: 'Revise Before the Final',
      title: 'Both ___ and ___ used ___ to ___. However, ___ while ___ because ___.',
      steps: [{ label: 'A', text: 'Name two specific societies' }, { label: 'B', text: 'Lock onto one shared category' }, { label: 'C', text: 'Give evidence on both sides' }, { label: 'D', text: 'Explain the historical reason' }],
      footer: 'Use the AP Skill Builder or Evidence Lab if your first comparison needs stronger evidence.',
      notes: { minutes: 8, land: ['Treat the frame as training wheels, not the only acceptable prose.', 'Students should revise or extend their first claim rather than start over blindly.'], ask: 'Which part of your first response is weakest: category, evidence, relationship, or why?', listenFor: 'Students can diagnose their own comparison.' }
    },
    {
      phase: 'checkpoint2', kind: 'action', eyebrow: 'Required Checkpoint 2 · 9 Minutes',
      title: 'Similarity + Difference',
      subtitle: 'Write a short comparison paragraph explaining one similarity and one difference between two Unit 1 societies.',
      bullets: ['Two clearly named societies', 'Specific evidence from both', 'One meaningful similarity', 'One meaningful difference', 'Explanation of why the pattern existed'],
      action: { label: 'Open Topic 1.7 Checkpoints', url: '../unit-1/lesson-1-7-comparison.html#modules' },
      notes: { minutes: 9, land: ['This is the evidence of learning for the day.', 'Students who finish early should underline their shared category and circle the sentence that explains why.'], ask: 'Does your paragraph compare the same category all the way through?', listenFor: 'A coherent comparison rather than two mini-essays.' }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Unit 1 Synthesis',
      title: 'There was no single path to state power.',
      subtitle: 'States used different combinations of administration, belief, trade, labor, infrastructure, and local relationships.',
      notes: { minutes: 2, land: ['This is the Unit 1 argument worth carrying forward.', 'Diversity of state formation is the point, not an obstacle to finding a single model.'], ask: 'What is one pattern that appeared in multiple regions even though the details differed?', listenFor: 'Belief legitimized authority; rulers extracted labor/resources; trade could strengthen states; states created administrative systems.' }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Next: Unit 2 · Networks of Exchange',
      title: 'What happens when these different societies become more connected?',
      subtitle: 'For next class: Silk Roads eBook sections 01–04.', visual: { type: 'map' },
      notes: { minutes: 1, land: ['The transition from Unit 1 to Unit 2 is regional diversity becoming increasingly connected through exchange networks.'], ask: 'What might move besides goods when trade networks intensify?', listenFor: 'Ideas, religions, technology, disease, people.' }
    }
  ]
};