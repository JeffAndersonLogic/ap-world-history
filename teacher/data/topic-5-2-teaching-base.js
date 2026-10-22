/*
 * Topic 5.2 canonical Teaching OS source.
 * CED: Fall 2026 pp. 100 to 101 (scripts/lib/ced-source/unit-5.js). Reasoning
 * process: Causation. Suggested skill: 3.C Claims and Evidence in Sources
 * (compare the arguments or main ideas of two sources). Learning objective C:
 * explain causes and effects of the various revolutions in the period from
 * 1750 to 1900. Key Concepts: KC-5.3.II.ii, KC-5.3, KC-5.3.IV.A.i,
 * KC-5.3.III.B, KC-5.3.I.B, KC-5.3.II.iii.
 * Story: docs/TOPIC-5-2-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "How
 * Revolutions Made Nations" is written from the same story, and this deck
 * retells it.
 * Spine: a grievance, the words to name it, and a chance to act: in America,
 * France, Haiti and Spanish America that mix became revolution, and each
 * revolution helped another one start or win. The revolutions built new states
 * and left behind a new loyalty, to the nation, which went on joining some
 * states together and pulling peoples away from empires.
 * Wall version: Grievance + words + a chance = revolution. Then the nation
 * redrew the map.
 * Retelling slide: the cause chain (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.2',
    minutes: 90,
    title: 'Nationalism and Revolutions',
    subtitle: 'A grievance, the words to name it, and a chance to act: in America, France, Haiti and Spanish America that mix became revolution, and each revolution helped another one start or win. The revolutions built new states and left behind a new loyalty, to the nation, which went on joining some states together and pulling peoples away from empires.',
    essentialQuestion: 'What caused the revolutions of 1750 to 1900, and what did they create?',
    apFocus: 'Causation, with Claims and Evidence in Sources 3.C',
    endTarget: 'Students can explain the causes of the American, French, Haitian and Spanish American revolutions as a grievance, the words of a revolutionary document and a chance to act; show how each revolution helped another one start or win; name what the revolutions created (independent states in the Americas, republics and constitutions, liberalism and democracy); explain the nation as a shared language, religion, customs and homeland that governments used and that nationalists used to unite Italy and Germany and to pull the Balkans away from the Ottoman Empire; and compare the arguments of two of the CED\'s revolutionary documents.'
  },

  priorities: {
    must: [
      'Answer both halves of the objective: causes AND effects. Every revolution on the slides ends on what it created.',
      'Teach the recipe and use it on every case: a grievance (KC-5.3.IV.A.i\'s "discontent with monarchist and imperial rule"), the words (KC-5.3.I.B\'s documents) and a chance. Ideas are one cause, not the cause.',
      'Show the chain: the American war bankrupts France; the 1789 declaration is claimed in Saint-Domingue; Napoleon\'s invasion of Spain opens Spanish America; Haiti arms Bolívar (KC-5.3.III.B, "a model and inspiration").',
      'Teach nationalism both ways: it joined Italy and Germany together and pulled the Balkans away from the Ottoman Empire, and governments used shared loyalty too (KC-5.3.II.ii, II.iii).',
      'Model 3.C: compare the arguments of two sources, and explain the difference by what caused each one.'
    ],
    should: [
      'Name what the revolutions created as ideas, not only states: the republic, liberalism and democracy, and the uprisings of 1830 and 1848 they set off (KC-5.3.IV.A.i).',
      'Give Haiti its full weight: enslaved people rose first, in 1791; France\'s 1794 law followed the fighting; Haitians won independence by defeating Napoleon\'s army.',
      'Correct three myths: "the Enlightenment caused the revolutions," "France gave Haiti its freedom," and "nationalism only built countries."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "How Revolutions Made Nations."',
      'Use the Primary Source (the Letter from Jamaica) as an extension for early finishers.',
      'For a class that is ahead: the CED\'s other examples, the Māori King movement and the New Zealand Wars, and Lola Rodríguez de Tió\'s poems for Puerto Rico (slide 23 notes).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.1. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the Bastille.', students: 'Predict what it took.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "How Revolutions Made Nations" in class.', students: 'Find the grievance, the words and the chance in each revolution.', slide: 4 },
    { id: 'recipe', label: 'The Recipe', range: '17-18', minutes: 1, teacher: 'Grievance + words + a chance.', students: 'Say why ideas alone are not enough.', slide: 5 },
    { id: 'america', label: 'America', range: '18-20', minutes: 2, teacher: 'The recipe, then what it created.', students: 'Name the three ingredients.', slide: 6 },
    { id: 'declaration', label: 'The Words, 1776', range: '20-21', minutes: 1, teacher: 'Read the Declaration\'s argument.', students: 'Say where power comes from.', slide: 7 },
    { id: 'france', label: 'France: the Bill Comes Due', range: '21-23', minutes: 2, teacher: 'One revolution\'s effect becomes the next one\'s cause.', students: 'Trace the chain.', slide: 8 },
    { id: 'francecreated', label: 'What France Created', range: '23-24', minutes: 1, teacher: 'Kingdom, republic, empire.', students: 'Read the timeline.', slide: 9 },
    { id: 'haiti', label: 'Haiti', range: '24-26', minutes: 2, teacher: 'The words, claimed by the enslaved.', students: 'Say who acted first.', slide: 10 },
    { id: 'haitieffects', label: 'Haiti\'s Effects', range: '26-27', minutes: 1, teacher: 'Effects that reached other countries.', students: 'Pick the biggest effect.', slide: 11 },
    { id: 'spanish', label: 'Spanish America', range: '27-29', minutes: 2, teacher: 'An empire with no king.', students: 'Name the chance.', slide: 12 },
    { id: 'jamaica', label: 'The Words, 1815', range: '29-30', minutes: 1, teacher: 'Read Bolívar.', students: 'Say what he argues.', slide: 13 },
    { id: 'chain', label: 'The Chain', range: '30-31', minutes: 1, teacher: 'Each revolution helped another start or win.', students: 'Say each link.', slide: 14 },
    { id: 'model', label: 'Compare Two Sources', range: '31-33', minutes: 2, teacher: 'Model 3.C on the 1776 and 1789 declarations.', students: 'Fill the frame aloud.', slide: 15 },
    { id: 'practice', label: 'Your Turn: 1776 and 1815', range: '33-35', minutes: 2, teacher: 'The Declaration beside the Letter from Jamaica.', students: 'Compare the two arguments.', slide: 16 },
    { id: 'skill', label: 'Skill Builder', range: '35-43', minutes: 8, teacher: 'Module 05: Claims and Evidence in Sources 3.C.', students: 'Compare two sources.', slide: 17 },
    { id: 'ideas', label: 'New Ways to Govern', range: '43-45', minutes: 2, teacher: 'Republic, liberalism, democracy.', students: 'Say what each one wants.', slide: 18 },
    { id: 'nation', label: 'From the People to the Nation', range: '45-46', minutes: 1, teacher: 'Which people? The nation.', students: 'Name what a nation shares.', slide: 19 },
    { id: 'unify', label: 'Uniting Italy and Germany', range: '46-48', minutes: 2, teacher: 'Nationalism joins states.', students: 'Compare the two.', slide: 20 },
    { id: 'versailles', label: 'Versailles, 1871', range: '48-49', minutes: 1, teacher: 'Iron and blood, then the Hall of Mirrors.', students: 'Say why the place matters.', slide: 21 },
    { id: 'break', label: 'Nation Against Empire', range: '49-51', minutes: 2, teacher: 'Nationalism breaks an empire, and the empire answers.', students: 'Say why Ottomanism failed.', slide: 22 },
    { id: 'myths', label: 'Myth and Evidence', range: '51-53', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 23 },
    { id: 'retell', label: 'How Revolutions Made Nations', range: '53-56', minutes: 3, teacher: 'Students redraw the chain from memory.', students: 'Retell the whole topic.', slide: 24 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '56-57', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 25 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: causes and what the revolutions created.', students: 'Work without the coach.', slide: 26 },
    { id: 'evidence', label: 'Evidence Lab', range: '57-64', minutes: 7, teacher: 'Module 07: two sources, a cause and an effect.', students: 'Observe, then infer, then name a limit.', slide: 27 },
    { id: 'cp2', label: 'Checkpoint 2', range: '64-76', minutes: 12, teacher: 'Module 10: how nationalism joined states and pulled peoples away from an empire. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 28 },
    { id: 'close', label: 'Landing Sentence', range: '76-78', minutes: 2, teacher: 'Land the answer and hand off to 5.3.', students: 'Say the topic in one sentence.', slide: 29 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.2', url: '../unit-5/lesson-5-2-nationalism-and-revolutions.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-2-nationalism-and-revolutions-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-2-nationalism-and-revolutions.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-2-slide',
    title: 'Topic 5.2 Presentation',
    file: 'present-topic-5-2.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Grievance + words + a chance = revolution. Then the nation redrew the map.',
      subtitle: 'Causation, with Claims and Evidence in Sources 3.C. What caused the revolutions of 1750 to 1900, and what did they create?',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 100 to 101. One learning objective, C (Governance): explain causes and effects of the various revolutions in the period from 1750 to 1900. The reasoning process is Causation (p. 95); the suggested skill is 3.C, compare the arguments or main ideas of two sources.',
          'Key Concepts: KC-5.3 (an intense period of revolution and rebellion against existing governments, leading to new nation-states around the world); KC-5.3.IV.A.i (discontent with monarchist and imperial rule encouraged new systems of government and ideologies, including democracy and 19th-century liberalism); KC-5.3.III.B (colonial subjects in the Americas rebelled; the American Revolution and its republic were a model; the American, Haitian and Latin American revolutions created independent states); KC-5.3.I.B (Enlightenment ideas, as reflected in the Declaration of Independence, the Declaration of the Rights of Man and of the Citizen, and Bolívar\'s Letter from Jamaica, influenced resistance); KC-5.3.II.ii (a new sense of commonality based on language, religion, social customs and territory, sometimes harnessed by governments); KC-5.3.II.iii (national communities linked identity with borders; nationalists challenged boundaries or sought unification).',
          'The CED\'s illustrative examples, beside KC-5.3.II.iii: the Propaganda Movement in the Philippines; Maori nationalism and the New Zealand wars; Puerto Rico, the writings of Lola Rodríguez de Tió; German and Italian unifications; Balkan nationalisms; Ottomanism. This deck uses the unifications (slides 20 and 21), the Balkans and Ottomanism (slide 22); the reading adds one sentence on the Propaganda Movement. The CED\'s sample activity (p. 97) is a Socratic seminar on the three documents; slides 15 and 16 and the Skill Builder are a short version of it.',
          'Owns: the revolutions, their causes and effects, the three documents, the new systems and ideologies, and nationalism. Bridge only: the Enlightenment ideas themselves (5.1, named not retaught), abolition and serfdom as long reform movements and de Gouges (5.1), France\'s 1848 vote for all men (5.1). Hand-off: the industrial revolution (5.3).',
          'Three myths, on slide 23: "the Enlightenment caused the revolutions"; "France gave Haiti its freedom"; "nationalism only built countries."',
          'Every picture is a real object of the period, public domain: Charles Thévenin\'s etching of the storming of the Bastille (1790, Cleveland Museum of Art); a "No Stamp Act" teapot made in England for the American market (1766 to 1775, Metropolitan Museum of Art); a French print of Toussaint Louverture on horseback (1802, the Met); Sébastien Leclerc\'s etching of the Hall of Mirrors at Versailles (1684, the Met); Asher B. Durand\'s engraving of John Trumbull\'s Declaration of Independence (1820 to 1823, the Met). None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Revolutions came when a grievance, the words to name it and a chance to act came together, and each revolution helped another one start or win; they created new states, new ideas about government and the nation, which then joined some states together and pulled peoples away from empires.',
        avoid: 'Avoid four separate revolution biographies. Every revolution is a case of the same recipe, and every one ends on what it created. And avoid "the Enlightenment caused the revolutions": the ideas are one ingredient of three.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.1', text: 'What question did Enlightenment thinkers ask every old authority?' },
          { label: 'Topic 5.1', text: 'According to Locke, where does a government\'s rightful power come from?' },
          { label: 'Topic 5.1', text: 'In 1789 the French said sovereignty belongs to what?' }
        ],
        turn: '5.1 ended: **by 1789 the ideas were everywhere educated people read.** But reading Locke never overthrew a king. Today: what else did it take, and what did the revolutions build?'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: "By what right?"; the consent of the people (Locke\'s social contract); the nation ("the principle of all sovereignty resides essentially in the nation," Article 3 of the 1789 declaration, which 5.1 quoted).',
          'The bridge is 5.1\'s hand-off in the unit story map. Prompt 2 returns on slide 7 (the Declaration of Independence); prompt 3 returns on slides 8 and 19 (the nation).'
        ],
        ask: 'If the ideas were everywhere by 1789, why did revolutions break out in some places and not others?',
        listenFor: 'Something else had to be true there: people angry about something, a chance to act. That is today\'s recipe.',
        ap: 'Retrieval plus bridge: 5.1 gave the ideas; 5.2 asks what else caused the revolutions and what they created.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'What does it take to start a revolution?',
      subtitle: 'What caused the revolutions of 1750 to 1900, and what did they create?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real print: Charles Thévenin, The Storming of the Bastille, July 14, 1789, an etching made in 1790, a year after the event. Cleveland Museum of Art 2015.21, public domain. A crowd of Parisians and soldiers who had joined them fights at the fortress gate, with a cannon on the left, wounded men on the ground, and a white flag raised at the right.',
          'Why open here: the picture is the moment ideas, anger and a chance met. The Bastille was a royal fortress and prison; the crowd wanted its gunpowder, and it held seven prisoners that day.',
          'The question is the learning objective in a ninth grader\'s words: causes ("what does it take") and effects ("what did they create").'
        ],
        ask: 'Predict: the ideas had been in books for decades. What else had to be true for this crowd to be here?',
        listenFor: 'They were angry about something (bread, taxes, privilege), and the king was weak enough that they could act.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read for three ingredients.',
      subtitle: 'In each revolution, find the grievance, the words and the chance. Then watch how each revolution helped another one start or win.',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-2-nationalism-and-revolutions-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "How Revolutions Made Nations" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who label the three ingredients in each section, and who notice the links between revolutions (France\'s debt, Napoleon in Spain, Haiti and Bolívar).',
          'Question 01 is causation on one revolution; question 02 is the topic\'s 3.C practice, the 1776 and 1789 declarations compared; question 03 is nationalism both ways. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which revolution helped another one start or win, and how?',
        listenFor: 'France\'s spending on the American war, on top of older debts, left it nearly bankrupt; Napoleon\'s invasion of Spain left Spanish America with no king; Haiti armed Bolívar.'
      }
    },
    {
      phase: 'recipe', kind: 'equation', eyebrow: 'The Recipe',
      kc: 'Unit 5: Learning Objective C', title: 'Ideas alone never overthrew a king.',
      footer: 'Many people read Locke and went on obeying their kings.',
      template: {
        terms: [
          { word: 'Grievance', note: 'a wrong many people feel' },
          { word: 'Words', note: 'a document that names it' },
          { word: 'A chance', note: 'the ruler is broke, far away or gone' }
        ],
        result: { word: 'Revolution', note: 'when all three meet' },
        groups: [
          { from: 0, to: 0, label: 'Why people are angry' },
          { from: 1, to: 1, label: 'What they rally around' },
          { from: 2, to: 2, label: 'When it can work' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective C asks for causes and effects. This is the cause half, as a tool students carry through four cases. It is a teaching device, not a law of history: say "watch for all three," not "every revolution needs exactly three."',
          'Each ingredient is in the CED. The grievance is KC-5.3.IV.A.i\'s "discontent with monarchist and imperial rule." The words are KC-5.3.I.B: Enlightenment ideas "as reflected in revolutionary documents ... influenced resistance to existing political authority." The chance is what turned discontent and ideas into action in each case on the next slides.'
        ],
        ask: 'Why are the words not enough on their own?',
        listenFor: 'People need a reason to risk their lives (the grievance) and a moment when they can win (the chance).',
        ap: 'Causation: a strong answer names more than one cause and says how they worked together.'
      }
    },
    {
      phase: 'america', kind: 'story-scene', eyebrow: 'America · 1775 to 1783',
      kc: 'KC-5.3.III.B', title: 'A republic with no king.',
      template: {
        caption: 'A teapot made in England for sale in the colonies, 1766 to 1775',
        steps: [
          { label: 'Grievance', text: 'Britain, in debt after the Seven Years\' War, taxes the colonies: the Stamp Act, 1765.' },
          { label: 'Words', text: 'The Declaration of Independence, 4 July 1776.' },
          { label: 'Chance', text: 'Britain is an ocean away, and since 1763 no French army next door to fear.' },
          { label: 'Created', key: true, text: 'With French help from 1778, independence by 1783; a republic under a constitution written in 1787.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.III.B: "Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals. The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed."',
          'The picture is a real object: a pottery teapot painted "No Stamp Act," made in England between 1766 and 1775 for the American market. Metropolitan Museum of Art 27.232a, b, public domain. English potters sold protest goods to Americans; Parliament repealed the Stamp Act in 1766.',
          'Grievance: the Seven Years\' War (1756 to 1763) left Britain deep in debt; Parliament taxed the colonies with laws such as the Sugar Act (1764) and the Stamp Act (1765). The colonies had no members in Parliament: "no taxation without representation."',
          'Chance: distance, and the end of the French threat. The Treaty of Paris of 1763 pushed France out of North America, so colonists no longer needed British troops to protect them, while Britain kept troops in America and taxed the colonists to pay for them. Created: the fighting began at Lexington and Concord in April 1775; the French alliance of February 1778 brought money, an army and a navy and helped the colonists win; the Treaty of Paris, 1783; the Constitution, signed 17 September 1787, a republic with an elected president and Congress. Avoid calling the 1778 alliance the chance that started the revolution: it came three years into the war.',
          'Limits, and say them: the republic kept slavery, and most states let only men with property vote.'
        ],
        ask: 'Which ingredient here is the grievance, and why is a teapot evidence of it?',
        listenFor: 'The taxes. People bought a teapot that said "No Stamp Act": ordinary colonists were angry enough to put it on the table.',
        ap: 'KC-5.3.III.B.'
      }
    },
    {
      phase: 'declaration', kind: 'source-quote', eyebrow: 'The Words · 1776',
      kc: 'KC-5.3.I.B', title: 'Where does a government\'s power come from?',
      template: {
        quote: 'Governments are instituted among Men, deriving their just powers from the consent of the governed, ... whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it',
        attribution: 'Declaration of Independence, adopted by the Continental Congress, 4 July 1776',
        notice: 'Power comes from **the people\'s consent**, so the people may **abolish** a government that breaks the deal.'
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.I.B names this document first. National Archives transcription, with the middle of the sentence cut: "That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it."',
          'This is 5.1\'s social contract (BeReady prompt 2) turned into a reason to break away. The Declaration does not quote Locke; it argues like him. Avoid "copied Locke word for word": it did not.',
          'Hold this quotation: it comes back on slides 15 and 16 for the 3.C comparison.'
        ],
        ask: 'Who gives a government its power, according to this sentence? And what can they do if it fails them?',
        listenFor: 'The governed, the people, by their consent; they can change it or get rid of it.',
        ap: 'KC-5.3.I.B; sets up 3.C.'
      }
    },
    {
      phase: 'france', kind: 'cause-chain', eyebrow: 'France · The Bill Comes Due',
      kc: 'KC-5.3', title: 'One revolution\'s effect becomes the next one\'s cause.',
      footer: 'Grievance: nobles and clergy paid little tax, the Third Estate paid most, and bread prices soared after the bad harvest of 1788.',
      template: {
        steps: [
          { label: 'The American war', text: 'France helps the colonists win' },
          { label: '1788', text: 'The king\'s government is nearly bankrupt' },
          { label: 'May 1789', text: 'The Estates-General meets, first since 1614' },
          { label: 'June to August 1789', text: 'National Assembly, the Bastille, the Declaration of the Rights of Man', key: true }
        ],
        links: ['costs a fortune', 'so he calls', 'and then']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3: "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments." The French case shows the chain: the American Revolution\'s cost is France\'s chance.',
          'Britannica: French participation in the American war drove the government "to the brink of bankruptcy"; by 1788 it was "on the verge of bankruptcy." To raise taxes Louis XVI summoned the Estates-General (August 1788, for May 1789), which had last met in 1614.',
          'Grievance (the footer): the clergy and nobles had tax privileges and paid little; the Third Estate paid most; the poor harvest of 1788 sent bread prices up in 1789.',
          '17 June 1789 the Third Estate declared itself the National Assembly; 14 July the Bastille; 4 August the nobles\' privileges ended; 26 August the Declaration of the Rights of Man and of the Citizen.'
        ],
        ask: 'How did the American Revolution help cause the French one?',
        listenFor: 'France\'s spending on the American war left it nearly bankrupt, which forced the king to call the assembly where the revolution began.',
        ap: 'KC-5.3. Causation: an effect becomes a cause.'
      }
    },
    {
      phase: 'francecreated', kind: 'timeline', eyebrow: 'What France Created',
      kc: 'KC-5.3', title: 'A kingdom, then a republic, then an empire.',
      footer: 'France was not breaking away from anyone. It was remaking a kingdom.',
      template: {
        range: [1788, 1806],
        tick: 2,
        events: [
          { year: 1789, label: '1789', text: 'The Bastille; the Declaration of the Rights of Man.' },
          { year: 1792, label: '1792', text: 'Monarchy abolished: a republic.' },
          { year: 1793, label: '1793', text: 'The king executed; the Terror begins.' },
          { year: 1799, label: '1799', text: 'Napoleon takes power.' },
          { year: 1804, label: '1804', text: 'Napoleon crowns himself emperor.' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'Dates (Britannica): monarchy abolished 21 September 1792; Louis XVI executed 21 January 1793, before the Terror; the Terror from September 1793 to July 1794, about 17,000 official executions and many more deaths in prison; Napoleon\'s coup of 18 Brumaire, November 1799; crowned emperor 2 December 1804.',
          'What France created, for the effects half: the end of noble privilege, a republic, and then an empire whose armies carried the revolution\'s laws (the Napoleonic Code) across Europe and also made many Europeans resent French rule. That resentment is one root of the nationalism on slides 19 to 22.',
          'The footer is the 3.C contrast for slide 15: the 1789 declaration is not a declaration of independence.'
        ],
        ask: 'The revolution began against a king. How did it end up with an emperor?',
        listenFor: 'War and the Terror made people want order; a general took power and made himself emperor.',
        ap: 'KC-5.3.'
      }
    },
    {
      phase: 'haiti', kind: 'story-scene', eyebrow: 'Haiti · 1791 to 1804',
      kc: 'KC-5.3.III.B', title: 'The words, claimed by people left out.',
      template: {
        caption: 'Toussaint Louverture, a French print of 1802',
        steps: [
          { label: 'Grievance', text: 'France\'s most valuable colony: more than five enslaved people for every free person.' },
          { label: 'Words', text: 'Free people of color claim the 1789 declaration\'s rights; Toussaint, 1793: "Liberty and Equality."' },
          { label: 'Chance', text: 'With France in revolution and the planters divided, the enslaved rise up, August 1791.' },
          { label: 'Created', key: true, text: 'France ends slavery, 1794; Napoleon\'s army defeated; Haiti independent, 1 January 1804.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.III.B: "The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas."',
          'The picture is a real print made in Toussaint\'s lifetime: an anonymous hand-colored etching, Paris, 1802, captioned "Toussaint Louverture, Chef des Noirs Insurgés de Saint Domingue" (chief of the Black insurgents of Saint-Domingue). Metropolitan Museum of Art 83.2.934, public domain. A French printmaker\'s idea of him in a general\'s uniform, not a portrait from life.',
          'Grievance: Britannica calls Saint-Domingue France\'s "most prosperous New World possession." Estimates around 1789: 406,000 to 465,000 enslaved, 40,000 to 45,000 white, 28,000 to 32,000 free people of color. The slide gives the floor every estimate meets.',
          'Words: Julien Raimond and Vincent Ogé petitioned the Assembly for the rights of free people of color in 1789 and 1790; Ogé\'s 1790 revolt was crushed; the Assembly granted free people of color equal political rights on 4 April 1792, after the 1791 rising. Chance: the rising of 22 August 1791 in the northern plain. Toussaint, born enslaved and free by the mid-1770s, became its most famous leader; at Camp Turel, 29 August 1793, he declared, "I want Liberty and Equality to reign in Saint Domingue" (Madison Smartt Bell\'s translation).',
          'Order matters: Sonthonax freed the enslaved in the north in August 1793; the Convention abolished slavery in all French colonies on 4 February 1794; Toussaint changed sides to France in May 1794, after the decree. In 1802 Napoleon restored slavery in Guadeloupe and sent Leclerc\'s army, about 20,000 men; Toussaint was arrested and died at the Fort de Joux in April 1803; Dessalines fought on; yellow fever and Vertières (November 1803) broke the French army. 1 January 1804, Gonaïves: independence, the country named Haiti from the Taíno name.',
          'Haiti was the second independent state in the Americas and the first founded by people who had freed themselves from slavery. Avoid ranking it "the most radical": it is a historians\' argument, not today\'s objective.'
        ],
        ask: 'Who acted first: France, or the enslaved people of Saint-Domingue?',
        listenFor: 'The enslaved people, in 1791. France\'s 1794 law came after two and a half years of fighting.',
        ap: 'KC-5.3.III.B.'
      }
    },
    {
      phase: 'haitieffects', kind: 'ledger', eyebrow: 'Haiti\'s Effects',
      kc: 'KC-5.3', title: 'One revolution\'s effects reached other countries.',
      template: {
        rows: [
          { name: 'The United States, 1803', mark: 'L', tool: 'Louisiana:', result: 'sold by Napoleon as his army in Saint-Domingue dies.' },
          { name: 'The United States, 1862', mark: 'R', tool: 'Recognition:', result: 'withheld for 58 years by a country that allowed slavery.' },
          { name: 'France, 1825', mark: 'F', tool: 'The price:', result: '150 million francs to recognize Haiti, later cut to 90 million.' },
          { name: 'Spanish America, 1816', mark: 'B', tool: 'Bolívar:', result: 'armed by Haiti, and asked to free the enslaved.' }
        ],
        payoffLabel: 'The College Board',
        payoff: 'New nation-states around the world'
      },
      notes: {
        minutes: 1,
        land: [
          'Effects, the second half of the objective, and KC-5.3\'s chain of revolutions.',
          'Louisiana: the BnF and recent scholarship link the failure of the 1802 expedition to the sale of Louisiana in 1803, alongside France\'s coming war with Britain. Get the order right: the sale was signed on 30 April 1803, while Leclerc\'s army was dying of yellow fever and before its final defeat at Vertières (18 November 1803); the Office of the Historian says the army "was being decimated by yellow fever." Not "because of Haiti alone": war with Britain was coming too.',
          'Recognition: the Office of the Historian, US Department of State: the United States recognized Haiti in 1862.',
          'The price: France\'s ordinance of 1825 set 150 million francs as the price of recognition; an 1838 treaty cut it to 90 million. Haiti paid off the indemnity by the 1880s, and loans taken to pay it ran into the twentieth century (BnF). Avoid "paid until 1947," which mixes the indemnity with later loans.',
          'Bolívar: slide 12. JSTOR Daily (citing W. F. Lewis, 1969): Pétion promised rifles, munitions, supplies, a printing press and men, on one condition, that Bolívar abolish slavery.'
        ],
        ask: 'Which of these effects shows one revolution helping cause another?',
        listenFor: 'Bolívar: Haiti, the last revolution\'s creation, armed the next one.',
        ap: 'KC-5.3. Effects that become causes.'
      }
    },
    {
      phase: 'spanish', kind: 'case-file', eyebrow: 'Spanish America · 1810 to 1826',
      kc: 'KC-5.3.III.B', title: 'An empire with no king.',
      template: {
        tag: 'Case',
        place: 'Spanish America',
        date: '1808 to 1826',
        rows: [
          { label: 'Grievance', text: 'Creoles kept out of the top offices, which went to **peninsulares**.' },
          { label: 'Chance', text: 'Napoleon invades Spain and forces its king from the throne, **1808**.' },
          { label: 'Words', text: 'Five years in, Bolívar in exile writes the Letter from Jamaica, **1815**.' },
          { label: 'Created', text: 'By **1826** Spain keeps only Cuba and Puerto Rico in the Americas.' }
        ],
        proves: 'The French Revolution\'s effects, through Napoleon, became Spanish America\'s chance.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.III.B: "the Latin American independence movements facilitated the emergence of independent states in the Americas."',
          'Grievance: creoles, of Spanish descent and born in the Americas, owned land and businesses but were kept out of the highest offices, which went to peninsulares, men born in Spain; Spain\'s trade rules also limited what they could grow and make. Bolívar: Spain "has kept us in a sort of permanent infancy with regard to public affairs" (Bertrand\'s translation).',
          'Chance: Britannica: with the Spanish king and his son held by Napoleon (the Bayonne abdications, May 1808), juntas formed 1808 to 1810 to rule in Ferdinand VII\'s name, and many moved to independence: Caracas, 19 April 1810; Buenos Aires, 25 May 1810; in Mexico, Miguel Hidalgo\'s call to rise, 16 September 1810.',
          'Created: Britannica: "between 1808 and 1826 all of Latin America except the Spanish colonies of Cuba and Puerto Rico slipped out of the hands of the Iberian powers." Mexico (1821), Gran Colombia, Peru, Chile, the Río de la Plata; Brazil from Portugal in 1822, as an empire under Pedro I.',
          'Limits, for the effects half: creole elites took the top places; most new states kept a sharp hierarchy; slavery lasted for decades (Colombia to 1851, Argentina 1853, Venezuela and Peru 1854). Avoid "everyone gained legal equality."'
        ],
        ask: 'Spanish Americans had grievances for decades. Why 1810?',
        listenFor: 'Because in 1808 Napoleon took Spain\'s king, so there was no king to obey: the chance.',
        ap: 'KC-5.3.III.B.'
      }
    },
    {
      phase: 'jamaica', kind: 'source-quote', eyebrow: 'The Words · 1815',
      kc: 'KC-5.3.I.B', title: 'Bolívar: the tie to Spain is cut.',
      template: {
        quote: 'The hatred that the Peninsula has inspired in us is greater than the ocean between us.',
        attribution: 'Simón Bolívar, the Letter from Jamaica, Kingston, 6 September 1815 (translated by Lewis Bertrand)',
        notice: 'Bolívar argues that Spain has lost Spanish America for good. But he also doubted that a government **"wholly representative"** suited it yet.'
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.I.B names Bolívar\'s "Letter from Jamaica" "on the eve of the Latin American revolutions." Be exact about the date: juntas formed from 1809 (La Paz, Quito), and in Caracas and Buenos Aires in 1810, so the letter came about five years into the struggle, written in exile after the patriots\' defeats, to a British reader, to win support. It came before the campaigns that won independence (1819 to 1824), which is the sense in which it is on the eve.',
          'Bertrand\'s translation (Selected Writings of Bolívar, 1951): "the tie that bound her to Spain has been severed"; "The hatred that the Peninsula has inspired in us is greater than the ocean between us"; "we are, moreover, neither Indian nor European, but a species midway between the legitimate proprietors of this country and the Spanish usurpers"; "Events in Costa Firme have proved that institutions which are wholly representative are not suited to our character, customs, and present knowledge."',
          'A misquotation to avoid: "As it has a single origin, a single language ... it ought to have a single government" is Bolívar describing an idea, a single nation for all Spanish America, which he then rejects: "But this is not possible."',
          'The notice line is the hinge for slide 16: Bolívar argues for independence, but not for full self-government yet.'
        ],
        ask: 'What is Bolívar\'s argument in one sentence?',
        listenFor: 'Spanish America can never go back to Spain; it must be independent, though he doubts it is ready to govern itself fully.',
        ap: 'KC-5.3.I.B; sets up 3.C.'
      }
    },
    {
      phase: 'chain', kind: 'diffusion-path', eyebrow: 'The Chain',
      kc: 'KC-5.3.III.B', title: 'Each revolution helped another start or win.',
      footer: 'Follow the links: a debt, words, an invasion, and guns.',
      template: {
        stops: [
          { place: 'America', date: '1775', text: 'A republic won, with costly French help' },
          { place: 'France', date: '1789', text: 'A declaration of rights, and Napoleon\'s armies' },
          { place: 'Saint-Domingue', date: '1791', text: 'The declaration claimed by people left out' },
          { place: 'Spanish America', date: '1810', text: 'Napoleon takes Spain\'s king; Haiti arms Bolívar, 1816' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.III.B: the American Revolution "was a model and inspiration for a number of the revolutions that followed."',
          'Say each link aloud: America to France (the debt); France to Saint-Domingue (the declaration claimed, and a France too divided to hold its colony); France to Spanish America (Napoleon\'s invasion of Spain, 1808); Haiti to Spanish America (Pétion\'s aid, 1816).',
          '"Start or win": the first three links are causes (debt, words, Napoleon\'s invasion); the last one, Haiti\'s aid in 1816, came six years after Spanish America\'s revolution began, so it helped it win, not start. Each link is one cause among several. A student who says "the American Revolution caused the Haitian Revolution" has gone too far.'
        ],
        ask: 'Pick one arrow. What exactly traveled along it: an idea, money, an army, or a chance?',
        listenFor: 'Debt from America to France; the words from France to Saint-Domingue; Napoleon\'s army into Spain; guns from Haiti to Bolívar.',
        ap: 'KC-5.3.III.B. Causation across places.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Claims and Evidence in Sources 3.C · Model',
      title: 'Compare two sources: alike, different, and why.',
      footer: 'Explain the difference by what caused each document.',
      template: {
        frame: 'Both {{source A}} and {{source B}} argue that {{what they share}}, but {{how they differ}}, because {{what caused each one}}.',
        exampleLabel: '1789 and 1793',
        example: 'Both **the Declaration of the Rights of Man** and **Toussaint Louverture** argue that **liberty and equality belong to people by right**, but **the Assembly wrote the words for France, while Toussaint claimed them for enslaved people in a French colony**, because **the Assembly was answering privilege in France and Toussaint was answering slavery in Saint-Domingue**.'
      },
      notes: {
        minutes: 2,
        land: [
          'The CED\'s suggested skill, 3.C: "Compare the arguments or main ideas of two sources." Its sample activity (p. 97) asks of the three documents: "How are the authors\' arguments similar? Why? How are the authors\' arguments different? Why?"',
          'The model uses Article 1 of the 1789 declaration, "Men are born and remain free and equal in rights" (Avalon Project), and Toussaint\'s Camp Turel proclamation of 29 August 1793, "I want Liberty and Equality to reign in Saint Domingue" (Bell\'s translation). It deliberately does not use the 1776 and 1789 pair, which is First & 10 question 02 and a Skill Builder choice: a model of that pair would be the answer.',
          'The "because" is what makes it causation as well as comparison: the difference in each document\'s argument comes from the grievance each one answered.'
        ],
        ask: 'What would a weaker answer leave out?',
        listenFor: 'The "because": it would say they are different without saying why.',
        ap: 'Claims and Evidence in Sources 3.C.'
      }
    },
    {
      phase: 'practice', kind: 'balance', eyebrow: 'Claims and Evidence in Sources 3.C · Practice',
      kc: 'KC-5.3.I.B', title: 'Two documents from the Americas.',
      template: {
        job: 'Who should govern?',
        left: { tag: 'America, 1776', name: 'Declaration of Independence', when: 'Second paragraph', text: '"Governments ... deriving their just powers from the consent of the governed"' },
        right: { tag: 'Jamaica, 1815', name: 'Simón Bolívar', when: 'Letter from Jamaica', text: '"institutions which are wholly representative are not suited to our character, customs, and present knowledge"' },
        claimLabel: 'Your turn',
        claim: 'Use the frame: Both ... argue that ..., but ..., because ... **What happened in Spanish America that might make Bolívar doubt?**'
      },
      notes: {
        minutes: 2,
        land: [
          'Both texts are verified word for word: the National Archives transcription of 1776; Bertrand\'s translation of 1815.',
          'A strong answer: both argue that a far-off ruler has lost the right to rule and that the people of the Americas should govern themselves, but the Declaration rests government on the people\'s consent while Bolívar doubts that fully elected governments suit Spanish America yet, because, in his own words, "party spirit" and quarrels had wrecked the first Venezuelan republic (1810 to 1812), and Spain had given creoles no practice in governing ("permanent infancy").',
          'Accept other "because" lines that use evidence: Bolívar was writing in exile, beaten; he wanted a strong government to win a long war.'
        ],
        ask: 'Where do the two documents agree, before they disagree?',
        listenFor: 'Both break with a far-off ruler and claim the right to govern themselves.',
        ap: 'KC-5.3.I.B; 3.C.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Compare two sources.',
      subtitle: 'Claims and Evidence in Sources 3.C: say each source\'s argument, how they are alike, how they differ, and why.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-2-nationalism-and-revolutions.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 05 is required. It models the comparison on the 1789 declaration and Toussaint\'s 1793 proclamation and asks students to compare the Letter from Jamaica with the Declaration of Independence.',
          'Circulate for the "because": the difference explained by what caused each document.'
        ],
        ask: 'What caused the difference you found?',
        listenFor: 'An answer that ties each document\'s argument to its grievance or its moment.'
      }
    },
    {
      phase: 'ideas', kind: 'branch-tree', eyebrow: 'What the Revolutions Created · Ideas',
      kc: 'KC-5.3.IV.A.i', title: 'New answers to "how should a country be run?"',
      footer: 'These ideas helped set off new revolutions in Europe in 1830 and 1848. Most of the uprisings of 1848 were crushed within two years.',
      template: {
        claimLabel: 'Discontent with kings and empires made',
        claim: '**New systems and ideas**',
        branches: [
          { label: 'Republic', note: 'No king; leaders elected under a written constitution', items: ['United States, constitution of 1787', 'France, 1792'] },
          { label: 'Liberalism', note: 'A constitution and parliament limit the government and protect rights', items: ['free speech', 'free press', 'property'] },
          { label: 'Democracy', note: 'Rule by the people: the vote for all men', items: ['France, 1848'] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.IV.A.i: "Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism."',
          'Republic dates: the United States governed without a king from 1776 (state constitutions, the Articles of Confederation ratified 1781), and the 1787 Constitution made the federal republic; France abolished its monarchy in 1792.',
          'Liberalism, as the College Board means "19th-century liberalism": government limited by a constitution and an elected parliament, individual rights (speech, press, religion, property), often a vote limited to men with property. Not today\'s American meaning of "liberal."',
          'Democracy: rule by the people; in the 1800s, the push to give all men the vote. France\'s 1848 vote for all adult men is 5.1\'s (bridge only).',
          '1830: revolutions in France, Belgium, Poland and parts of Germany and Italy. 1848: France, the German and Italian states, the Austrian Empire; most crushed by 1849 to 1850 (Britannica, "Revolutions of 1848").'
        ],
        ask: 'A liberal in 1830 and a democrat in 1848 both wanted a constitution. What would they argue about?',
        listenFor: 'Who gets to vote: only men with property, or all men.',
        ap: 'KC-5.3.IV.A.i. An effect that became a cause.'
      }
    },
    {
      phase: 'nation', kind: 'cause-chain', eyebrow: 'From the People to the Nation',
      kc: 'KC-5.3.II.ii', title: 'A state belongs to its people. Which people?',
      footer: '1793: "all Frenchmen are in permanent requisition for the service of the armies," and the old are to preach "the unity of the Republic."',
      template: {
        steps: [
          { label: 'The revolutions', text: 'A state belongs to its people' },
          { label: 'The question', text: 'Which people?' },
          { label: 'The nation', text: 'People who share a language, a religion, customs and a homeland', key: true },
          { label: 'Governments use it', text: 'The whole nation called to war' }
        ],
        links: ['raise', 'answer', 'used']
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.II.ii: "People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity." The four words in the third box are the CED\'s own list.',
          'BeReady prompt 3 returns here: in 1789 sovereignty "resides essentially in the nation."',
          'The footer is the levée en masse, 23 August 1793 (Fordham Sourcebook, from Anderson, 1908): young men to fight, married men to forge arms, women to make tents and serve in hospitals, children to turn linen into lint, and the old to "preach the hatred of kings and the unity of the Republic." A government harnessing the nation.',
          'Nationalism also cut the other way: Napoleon\'s rule stirred Spanish and German resentment of the French. That is slides 20 to 22.'
        ],
        ask: 'Why would a government want people to feel like one nation?',
        listenFor: 'So they will fight, pay and obey for the nation, not just because a king tells them to.',
        ap: 'KC-5.3.II.ii.'
      }
    },
    {
      phase: 'unify', kind: 'split-mirror', eyebrow: 'Nationalism Joins States',
      kc: 'KC-5.3.II.iii', title: 'Two nations, many states, one country each.',
      footer: 'Nationalists sought the unification of fragmented regions.',
      template: {
        left: { name: 'Italy' },
        right: { name: 'Germany' },
        rows: [
          { label: 'Before', left: 'Several states, some ruled by Austria', right: 'More than thirty states' },
          { label: 'Led by', left: 'Cavour, Garibaldi, the kingdom of Piedmont', right: 'Bismarck and Prussia' },
          { label: 'How', left: 'Wars and uprisings, 1859 to 1860', right: 'Three wars, 1864 to 1871' },
          { label: 'Result', left: 'Kingdom of Italy, 1861; Rome added, 1870', right: 'German Empire, 18 January 1871' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.II.iii: "Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists ... sought unification of fragmented regions." The CED names "German and Italian unifications."',
          'Italy (Britannica, "Risorgimento"): Piedmont-Sardinia, with France, defeated Austria in 1859; Garibaldi\'s Thousand took Sicily and Naples in 1860; the Kingdom of Italy proclaimed 17 March 1861; Venetia added 1866; Rome taken 1870 and the capital from 1871.',
          'Germany: the German Confederation of 1815 had 39 members; Prussia\'s wars with Denmark (1864), Austria (1866) and France (1870 to 1871); the empire proclaimed 18 January 1871 (slide 21).',
          'The CED\'s word "imagined" matters: a nation is something people come to believe they belong to. Italians in 1861 did not all speak the same Italian.'
        ],
        ask: 'Both countries were united. What is the biggest difference in how?',
        listenFor: 'Italy mixed uprisings like Garibaldi\'s with war; Germany was united mainly by Prussia\'s wars, led from the top by Bismarck.',
        ap: 'KC-5.3.II.iii. A comparison inside a causation topic.'
      }
    },
    {
      phase: 'versailles', kind: 'story-scene', eyebrow: 'Germany · 1848 to 1871',
      kc: 'KC-5.3.II.iii', title: 'Not by speeches, but by iron and blood.',
      template: {
        caption: 'The Hall of Mirrors at Versailles, etched in 1684',
        steps: [
          { label: '1848', text: 'Liberals at Frankfurt try to unite Germany with a parliament and a constitution, and fail.' },
          { label: '1862', text: 'Bismarck: great questions are decided "by iron and blood," not "by speeches and majority resolutions."' },
          { label: '1864 to 1871', text: 'Three wars, against Denmark, Austria and France.' },
          { label: '18 January 1871', key: true, text: 'The German Empire is proclaimed in Louis XIV\'s Hall of Mirrors.' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'The picture is a real print: Sébastien Leclerc I, Galerie des Glaces at Versailles, etching, 1684, the hall as Louis XIV\'s court knew it, the year it was finished. Metropolitan Museum of Art 53.600.2784, public domain. It is not a picture of 1871. The callback is Topic 3.2: the palace of the divine-right king is where a nation-state was proclaimed, after Prussia\'s army defeated France.',
          'Frankfurt: the National Assembly of 1848 to 1849 wrote a constitution and offered the crown to Frederick William IV of Prussia, who refused it in April 1849.',
          'Bismarck to the Prussian budget committee, 30 September 1862 (German History in Documents and Images, trans. Jeremiah Riemer): "it is not by speeches and majority resolutions that the great questions of the time are decided—that was the big mistake of 1848 and 1849—but by iron and blood." It is a summary in reported speech, not his exact words; GHDI\'s note says it "does not always reproduce Bismarck\'s speech word for word, although on occasion it comes close to a verbatim transcript."',
          'Château de Versailles: the empire was proclaimed in the Hall of Mirrors on 18 January 1871.'
        ],
        ask: 'Bismarck says the liberals of 1848 made a mistake. What does he think works instead?',
        listenFor: 'Armies and war, not parliaments and votes.',
        ap: 'KC-5.3.II.iii; links back to KC-5.3.IV.A.i (the liberals of 1848).'
      }
    },
    {
      phase: 'break', kind: 'face-off', eyebrow: 'Nationalism Breaks an Empire',
      kc: 'KC-5.3.II.iii', title: 'Nation against empire.',
      footer: 'Nationalists challenged boundaries; the empire tried a loyalty of its own.',
      template: {
        left: { name: 'Balkan nationalists', note: 'Greeks, Serbs and others who wanted states of their own.' },
        right: { name: 'Ottoman Empire', note: 'Ruled many peoples, Muslim and Christian.' },
        between: { label: 'Contested', name: 'The Balkans', note: 'Southeastern Europe' },
        disputes: [
          { tag: 'Greece', text: 'Rises in 1821; declared an independent state, to have a king, by Britain, France and Russia in 1830.' },
          { tag: 'Serbia and others', text: 'Serbia wins self-rule; Serbia, Montenegro and Romania recognized as independent in 1878.' },
          { tag: 'Ottomanism', text: '1856: equal treatment promised to all subjects; 1869: every subject an Ottoman citizen. One loyalty, to the empire.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.II.iii: "in some cases, nationalists challenged boundaries." The CED names "Balkan nationalisms" and "Ottomanism."',
          'Greece (Britannica): the war began in 1821; the London protocol of 3 February 1830 declared Greece "an independent monarchical state" under the powers\' protection; the sultan recognized it in 1832. Serbia: risings of 1804 and 1815 and self-rule recognized by 1830, but full independence only in 1878; Greece was the first to be declared fully independent (1830). If a student says "first," ask whether they mean self-rule or independence. 1878: the Treaty of Berlin recognized Serbia, Montenegro and Romania; Bulgaria became a self-governing principality still under the sultan.',
          'Ottomanism is the government harnessing a shared loyalty (KC-5.3.II.ii) against nationalism: the Reform Edict of 1856 promised equality in education, appointments and justice regardless of religion; the nationality law of 1869 made "Ottoman" every subject\'s legal status. The empire\'s wider reforms, the Tanzimat, belong to Topic 5.8; here it is only the idea of one loyalty.',
          'It did not stop the Balkan states from leaving, which is the effect to land.'
        ],
        ask: 'Why might "be loyal to the empire" lose to "be loyal to your nation"?',
        listenFor: 'A nation is people like you, who share your language and religion; an empire is a ruler far away. And the promised equality often was not real in practice.',
        ap: 'KC-5.3.II.iii, with Ottomanism under KC-5.3.II.ii.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'The Enlightenment caused the revolutions.', evidence: 'The ideas gave revolutionaries words. Taxes, debt, bread, slavery and Napoleon\'s invasion of Spain mattered too.', source: 'KC-5.3.I.B, IV.A.i' },
          { myth: 'France gave Haiti its freedom.', evidence: 'The enslaved rose up in 1791; France\'s 1794 law followed the fighting, and Haitians defeated Napoleon\'s army.', source: 'KC-5.3.III.B' },
          { myth: 'Nationalism only built countries.', evidence: 'It joined Italy and Germany together and pulled the Balkans away from the Ottoman Empire.', source: 'KC-5.3.II.iii' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Myth 1 returns to the recipe (slide 5). Myth 2 is the order of events on slide 10. Myth 3 is slides 20 to 22.',
          'For a class that is ahead, the CED\'s other cases of nationalists challenging boundaries: in New Zealand, Māori groups chose a king in 1858 (the Kīngitanga) to hold their land against settlers, and fought the New Zealand Wars of the 1840s to 1870s; in Puerto Rico, Lola Rodríguez de Tió wrote revolutionary words for "La Borinqueña" (1868); in the Philippines, the Propaganda Movement (1880s and 1890s), José Rizal among them, demanded equal rights with Spaniards, and Spain executed Rizal in 1896, during a revolution against its rule.'
        ],
        ask: 'Which myth would most hurt an essay answer, and why?',
        listenFor: 'Myth 1: a single cause is a weak causation argument.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'How revolutions made nations.',
      footer: 'Grievance + words + a chance = revolution. Then the nation redrew the map.',
      template: {
        steps: [
          { label: 'The causes', text: 'A grievance, the words, a chance' },
          { label: 'Revolution', text: 'America, France, Haiti, Spanish America, each helping another start or win' },
          { label: 'What it created', text: 'New states, republics, liberalism and democracy' },
          { label: 'The nation', text: 'Joins states (Italy, Germany) or pulls peoples from empires (the Balkans)', key: true }
        ],
        links: ['meet in', 'create', 'leave behind']
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide: the cause chain the whole deck has built. Ask students to close their notes and redraw it, four boxes and three arrows, then compare with the slide.',
          'Point to the third box: it is where effects become causes. Liberalism and democracy (an effect) set off 1830 and 1848 (a cause); the nation (an effect of the revolutions) causes unification and breakup.'
        ],
        ask: 'Redraw it from memory. Which arrow is the one where an effect becomes a cause?',
        listenFor: 'The last two: the ideas and the nation the revolutions created went on to cause new revolutions and new countries.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis',
      title: 'Say it in one sentence.',
      template: {
        frame: 'A revolution needed a ___, the ___ to name it, and a ___. Each helped another start or ___. They made new ___ and the nation, which ___ some states and pulled peoples from empires.',
        words: ['grievance', 'words', 'chance', 'win', 'states', 'joined'],
        prompt: 'Fill it in from memory. Then say it with one example in each blank.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective C: "Explain causes and effects of the various revolutions in the period from 1750 to 1900." The sentence is the whole answer; the examples make it an AP answer.',
          'A strong version: Revolutions came when a grievance (British taxes, privilege and bread, slavery, exclusion from office), the words to name it (the 1776 and 1789 declarations, the Letter from Jamaica) and a chance (distance and the end of the French threat, a bankrupt king, a France in revolution, Napoleon\'s invasion of Spain) came together; each one helped another start or win; and they created new states and the nation, which joined Italy and Germany and pulled Greece and Serbia away from the Ottoman Empire.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can name one example per blank have the objective.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'What caused one revolution, and what did it create?',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-2-nationalism-and-revolutions.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional. Checkpoint 1 assesses Targets 1 and 2: one revolution\'s grievance, words and chance, and what it created, including how it helped another revolution start or win, and liberalism or democracy as a new idea.'
        ],
        ask: 'Which revolution did you choose, and which ingredient was hardest to find?',
        listenFor: 'A specific grievance, document and chance, and a created state or idea.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Two sources: a cause and an effect.',
      subtitle: 'Choose two cards. For each: what kind of source it is, what it shows about a cause or an effect of the revolutions, and what it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-2-nationalism-and-revolutions.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Module 07 is required. The six cards are three real objects (the "No Stamp Act" teapot, Thévenin\'s 1790 Bastille etching, the 1802 French print of Toussaint) and three verified excerpts (the Declaration of Independence, Toussaint\'s 1793 proclamation, and Bismarck\'s 1862 "iron and blood" remarks).',
          'Listen for students who name what kind of source each card is: a teapot made in England for American buyers, an etching made to celebrate the Bastille a year later, a French print of a Haitian general, a summary of a speech in reported speech.'
        ],
        ask: 'What can your object not tell you?',
        listenFor: 'Who made it and for whom: the Toussaint print is a French printmaker\'s view, not a Haitian one.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'How did nationalism join some states and pull peoples away from an empire?',
      subtitle: 'Explain what a nation shares, how governments used shared loyalty, one country nationalism joined, one people it pulled from the Ottoman Empire, and why one cause had both effects. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-2-nationalism-and-revolutions.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Module 10 is required: draft, Socrates, revise. It assesses Target 3 (KC-5.3.II.ii and II.iii) and declares Causation.',
          'A strong answer explains the nation as shared language, religion, customs and homeland; names how a government used shared loyalty (France 1793; Ottomanism as an attempt to hold back nationalism); names a unification (Italy 1861 and 1870, or Germany 1871) and a people pulled away from the Ottoman Empire (Greece 1830, or Serbia, Montenegro and Romania 1878); and says how: nationalists wanted one state with borders to match the nation. The Ottoman Empire itself lasted to 1922; avoid "nationalism broke the Ottoman Empire apart" for this period.'
        ],
        ask: 'What is the cause in your answer, and what are the two effects?',
        listenFor: 'Nationalism as the cause; unification and peoples leaving an empire as the effects.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'Grievance + words + a chance = revolution. Then the nation redrew the map.',
      subtitle: 'The committee presenting its draft of the Declaration to Congress, 28 June 1776, as an engraver copied a painting of it in 1823. Next, Topic 5.3: even before Paris argued about rights, a different revolution had begun in British workshops.',
      notes: {
        minutes: 2,
        land: [
          'The picture is a real print: Asher B. Durand\'s engraving (1820 to 1823) of John Trumbull\'s painting The Declaration of Independence (1818, now in the United States Capitol). Metropolitan Museum of Art 2022.29, public domain. It does not show the signing: the Architect of the Capitol says the painting "depicts the moment on June 28, 1776, when the first draft of the Declaration of Independence was presented to the Second Continental Congress" by the committee of five. Trumbull painted it more than forty years later, and the men are posed.',
          'Land the spine, then the hand-off to 5.3, the industrial revolution. It began before 1789: Watt\'s improved steam engine was patented in 1769 and Arkwright\'s water-powered mill opened in 1771, while the American colonists were protesting the Townshend taxes (1767 to 1770); the Stamp Act had been repealed in 1766.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: Spanish creoles\' grievance, Bolívar\'s words, Napoleon\'s invasion as the chance; or nationalism uniting Germany in 1871.'
      }
    }
  ]
};
