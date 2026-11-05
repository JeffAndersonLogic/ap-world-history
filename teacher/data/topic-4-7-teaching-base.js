/*
 * Topic 4.7 canonical Teaching OS source.
 * CED: Fall 2026 p. 89 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Continuity and Change. Suggested skill: 3.D Claims and Evidence in Sources.
 * One learning objective: M (Social Interactions and Organization), explain
 * how social categories, roles, and practices have been maintained or have
 * changed over time. Key Concepts KC-4.3.I.B, KC-4.2.III.A and KC-4.2.III.B.
 * Story: docs/TOPIC-4-7-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Who Belongs,
 * Who Rises" is written from the same story, and this deck retells it.
 * Spine: Empires decided who could belong and who could rise: new elites
 * appeared, old ones were squeezed, and some groups were welcomed while others
 * were pushed out.
 * Wall version: The ladder stayed. The people on it moved.
 * Retelling slide: the continuity-and-change slide (phase 'retell').
 *
 * Class dates: Green Friday 2026-11-13, Silver Monday 2026-11-16.
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.7',
    minutes: 90,
    title: 'Changing Social Hierarchies',
    subtitle: 'Empires decided who could belong and who could rise: new elites appeared, old ones were squeezed, and some groups were welcomed while others were pushed out.',
    essentialQuestion: 'From 1450 to 1750, how did empires decide who could belong and who could rise, and what about the social ladder stayed the same?',
    apFocus: 'Continuity and Change, with Claims and Evidence in Sources 3.D',
    endTarget: 'Students can explain how states welcomed, used, pushed out or limited religious and ethnic groups (the Ottomans and the Jewish refugees, Akbar and the Rajputs, Spain and Portugal, the Qing and the Han, and Ottoman women by class); explain how conquest and new trade made new elites (the Qing banners; peninsulares and creoles in the casta ranking); explain how the power of old elites rose and fell against stronger rulers (sipahis and their timars, the boyars, French and English nobles); name what stayed the same; and say whether a piece of evidence supports, modifies or refutes a source\'s argument.'
  },

  priorities: {
    must: [
      'Sort every case the same way: what stayed the same about who held status, what changed, and why (Continuity and Change, LO M).',
      'Teach both halves of KC-4.3.I.B: states that welcomed or used a group (Ottomans, Akbar) and states that pushed out or limited one (Spain and Portugal, the Qing).',
      'Teach the new elites (KC-4.2.III.A, the Qing banners and the casta ranking) and the squeezed old ones (KC-4.2.III.B, sipahis, boyars, French nobles), and that "fluctuated" includes England, where the old elite won.',
      'Land the spine with the retelling slide: the ladder stayed, the people on it moved.'
    ],
    should: [
      'Model 3.D on Busbecq\'s claim (support, modify, refute), then let students practice in the Skill Builder.',
      'Correct three myths where they arise (each is in the AVOID note of its slide): "the Ottomans gave everyone equal rights," "casta was a fixed chart everyone was locked into," and "old elites simply disappeared."',
      'Show that one empire could change its own policy (Akbar and Aurangzeb). Ottoman women by class is carried by the First & 10 and the Primary Source, not by a slide.'
    ],
    could: [
      'Use the BeInTheRoom Identity Dossier as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Who Belongs, Who Rises."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the three big ideas, owns and bridge-only.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.6, 3.2 and 4.4. Bridge to who ended up where.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Akbar\'s court.', students: 'Predict who might be welcomed or pushed out.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Who Belongs, Who Rises" in class.', students: 'For every case: what stayed, what changed.', slide: 4 },
    { id: 'ladder', label: 'The Ladder', range: '17-19', minutes: 2, teacher: 'The continuity, and the three big ideas.', students: 'Name what stayed the same.', slide: 5 },
    { id: 'belongs', label: 'Big Idea 1: Who Belongs', range: '19-24', minutes: 5, teacher: 'Welcomed or used, pushed out or limited, and why.', students: 'Say what each state wanted.', slide: 6 },
    { id: 'qing', label: 'Big Idea 2: A New Elite in China', range: '24-27', minutes: 3, teacher: 'The banners on top; the exams kept.', students: 'Sort continuity and change.', slide: 7 },
    { id: 'casta', label: 'Big Idea 2: A New Top in the Americas', range: '27-30', minutes: 3, teacher: 'The casta ranking, top to bottom.', students: 'Say what decided a person\'s rung.', slide: 8 },
    { id: 'oldelites', label: 'Big Idea 3: Old Elites Squeezed', range: '30-34', minutes: 4, teacher: 'Sipahis, boyars, French nobles down; English nobles up.', students: 'Explain "fluctuated."', slide: 9 },
    { id: 'test', label: 'Support, Modify, Refute', range: '34-37', minutes: 3, teacher: 'Read Busbecq\'s claim, then model 3.D.', students: 'Label each piece of evidence.', slide: 10 },
    { id: 'retell', label: 'The Ladder Stayed', range: '37-41', minutes: 4, teacher: 'Students redraw the continuity-and-change model from memory.', students: 'Retell the whole topic.', slide: 11 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '41-43', minutes: 2, teacher: 'From "society changed" to what stayed, what changed and why.', students: 'Upgrade a weak claim.', slide: 12 },
    { id: 'skill', label: 'Skill Builder', range: '43-52', minutes: 9, teacher: 'Module 05: Claims and Evidence in Sources.', students: 'Test Busbecq\'s claim about Europe.', slide: 13 },
    { id: 'evidence', label: 'Evidence Lab', range: '52-61', minutes: 9, teacher: 'Module 07: one claim about who belonged or who rose, from two sources.', students: 'Observe, then infer, then name a limit.', slide: 14 },
    { id: 'cp2', label: 'Checkpoint 2', range: '61-73', minutes: 12, teacher: 'Module 10: the top of society, new elites and old. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 15 },
    { id: 'close', label: 'Landing Sentence', range: '73-75', minutes: 2, teacher: 'Land the answer and hand off to 4.8.', students: 'Say the topic in one sentence.', slide: 16 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.7', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-7-changing-social-hierarchies-capture.html' },
    { label: 'BeInTheRoom: The Identity Dossier', url: '../beintheroom/unit-4/the-identity-dossier.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-7-changing-social-hierarchies.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-7-slide',
    title: 'Topic 4.7 Presentation',
    file: 'present-topic-4-7.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'The ladder stayed. The people on it moved.',
      subtitle: 'Continuity and Change, with Claims and Evidence in Sources 3.D. Every case asks: what stayed the same about who held status, what changed, and why?',
      notes: {
        minutes: 2,
        keys: [
          'Three big ideas, one per Key Concept',
          'The ladder stayed; the people moved',
          'Name what stayed before what changed',
          'Not Atlantic slavery: that is 4.4'
        ],
        land: [
          'CED p. 89. One learning objective, M (Social Interactions and Organization): explain how social categories, roles, and practices have been maintained or have changed over time. The reasoning process is Continuity and Change (p. 75); the suggested skill is 3.D, explain how claims or evidence support, modify, or refute a source\'s argument.',
          'KC-4.3.I.B: many states, such as the Mughal and Ottoman empires, accommodated the ethnic and religious diversity of their subjects or used the contributions of different groups; in other cases states suppressed diversity or limited certain groups\' roles. KC-4.2.III.A: imperial conquests and widening global economic opportunities formed new political and economic elites, including the Qing transition and the casta system. KC-4.2.III.B: the power of existing elites fluctuated as they confronted increasingly powerful monarchs.',
          'The CED\'s illustrative examples (optional): the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire; restrictive policies against Han Chinese in Qing China; the varying status of different classes of women within the Ottoman Empire; Ottoman timars; Russian boyars; European nobility. All six are in the First & 10. The deck carries five of them as evidence inside three big ideas, one per Key Concept; the women-by-class example is in the First & 10 and the Primary Source rather than on a slide.',
          'The CED\'s sample activity (p. 77) is a debate testing a historian\'s claim about religious toleration against evidence. This deck takes the move, not the article: slide 10 tests Busbecq\'s 1555 claim; the Skill Builder and the Primary Source (Montagu, 1717) do it again.',
          'Owns: who could belong (KC-4.3.I.B), new elites (KC-4.2.III.A), old elites squeezed (KC-4.2.III.B).',
          'Bridge only: Atlantic slavery and the labor systems (4.4; enslaved Africans appear only as the bottom of the casta ranking); the devshirme and Versailles as tools of rule (3.2, one clause each, from the elite\'s side); the Janissaries\' guns (3.1); the Fronde and the 1649 Law Code (4.6); which change mattered most (4.8, the hand-off).',
          'Three myths, each in the AVOID note of the slide it belongs to: "the Ottomans gave everyone equal rights" (slide 6); "casta was a fixed chart everyone was locked into" (slide 8); "old elites simply disappeared" (slide 9).',
          'Big rocks (Jeff, 2026-11-05): this deck was cut from 27 slides to 16. It projects the three big ideas, one per Key Concept, and the continuity under them; the named cases are evidence inside those ideas, not slides of their own. The First & 10 tells every case in full, and the detail a teacher may want lives in these notes. Removed: the map (Module 01 has it), four who-belongs slides merged into one, the banner handscroll and the casta painting (both still in the Evidence Lab), three old-elite slides merged into one, the Busbecq quotation merged into its model, the myths slide (now AVOID notes), and the optional Checkpoint 1 slide (the module is still on the lesson page).',
          'Pictures: the question slide is a labeled reconstruction of a Mughal court; the real Akbarnama painting is on slide 6, and the landing slide is a real casta painting of about 1715 to 1720. The rest are listed in the visual update note below.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'The ladder stayed, but empires decided who could belong and who could rise: new elites appeared, old ones were squeezed, and some groups were welcomed while others were pushed out.',
        avoid: 'Avoid turning 4.7 into Atlantic slavery or the plantation hierarchy. That is 4.4. And avoid ranking empires as "tolerant" or "intolerant"; name the policy, the date and what it bought the state.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.6', text: 'Name one group that pushed back against a growing state.' },
          { label: 'Topic 3.2', text: 'Name one tool a ruler used to keep nobles or officials under control.' },
          { label: 'Topic 4.4', text: 'Name one group of people in Spanish America who were forced to work.' }
        ],
        turn: '4.6 ended: **some people resisted the new order. Everyone was sorted by it.** Today: who ended up where, and what stayed the same?'
      },
      notes: {
        minutes: 4,
        keys: [
          'No notes, fast answers',
          'Bridge: who ended up where?',
          'Do not reteach'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: the Parlement of Paris and the nobles (the Fronde), peasants and Cossacks (Razin), the Marathas, Njinga, the Pueblos, the Wampanoag, maroons, the Stono rebels; Versailles, the devshirme, salaried officials, tax collectors who answered to the ruler; Indigenous workers under the encomienda or the mit\'a, enslaved Africans.',
          'The bridge is 4.6\'s hand-off in the unit story map, word for word.',
          'Prompt 2 returns on slide 9 (Versailles), from the nobles\' side. Prompt 3 returns as the bottom of the casta ranking on slide 8.'
        ],
        ask: 'When a ruler pulls power into his own hands, whose power shrinks?',
        listenFor: 'The nobles\', the judges\', the old elites\'.',
        ap: 'Retrieval plus bridge: 4.6 asked who pushed back; 4.7 asks who ended up where.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'Between 1450 and 1750, who could belong, who could rise, and who got squeezed?',
      subtitle: 'A Rajput ruler bows to the emperor Akbar in 1569, painted for Akbar\'s own history of his reign, about 1590 to 1595.',
      notes: {
        minutes: 1,
        keys: [
          'The learning objective in plain words',
          'Belong, rise, squeezed: the three big ideas',
          'Predict why Akbar welcomed Hindu rulers'
        ],
        land: [
          'The picture is a real painting: "Rai Surjan Hada making submission to Akbar," from the Akbarnama, the official history of Akbar\'s reign, designed by Mukund and painted by Shankar, about 1590 to 1595 (Victoria and Albert Museum, IS.2:75-1896). It shows the Rajput ruler of the fortress of Ranthambhor bowing to Akbar in 1569, after a hard-fought siege; the fortress is on the hill behind. Akbar commissioned the book, so the painting shows the event as he wanted it seen. Rajput rulers came into the empire by force and by welcome together: conquered or pressured first, then honored, married into and given high ranks.',
          'The question is the learning objective in a ninth grader\'s words: who could belong (KC-4.3.I.B), who could rise (KC-4.2.III.A), and who got squeezed (KC-4.2.III.B).'
        ],
        ask: 'Predict: why would a Muslim emperor welcome Hindu rulers into his court?',
        listenFor: 'He needed their soldiers, their loyalty, their land, peace in a mostly Hindu empire.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with two questions in mind.',
      subtitle: 'For every case: what stayed the same about who held power, and what changed?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Every case: what stayed, what changed',
          'The slides after are retrieval',
          'Question 03 is the 3.D practice'
        ],
        land: [
          'Students read "Who Belongs, Who Rises" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort each case as continuity or change, and who notice that one empire could change its own policy (Akbar and Aurangzeb).',
          'Question 03 is the topic\'s 3.D practice: it asks whether one piece of evidence supports, modifies or refutes Busbecq. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which case surprised you most, and why?',
        listenFor: 'A Muslim sultan welcoming Jewish refugees; Russian nobles forced to shave; a commoner becoming a noble by rank; a queen mother running the Ottoman government.'
      }
    },
    {
      phase: 'ladder', kind: 'branch-tree', eyebrow: 'The Frame · Three Big Ideas',
      kc: 'Unit 4: Learning Objective M', title: 'The ladder stayed. The people on it moved.',
      footer: 'Continuity: rulers who inherited power, privileged nobles, most people at the bottom. Change: who stood where.',
      template: {
        claimLabel: '1450 to 1750',
        claim: 'Empires changed **who stood where** in three ways.',
        branches: [
          { label: 'Who belongs', note: 'Welcome or use a group, or push it out', items: ['Ottomans, Mughals', 'Spain and Portugal, the Qing'] },
          { label: 'New elites', note: 'Conquest and trade make a new top', items: ['Qing banners', 'Peninsulares, creoles'] },
          { label: 'Old elites squeezed', note: 'Stronger rulers press older nobles', items: ['Sipahis, boyars', 'French nobles'] }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Start with what was maintained',
          'Three branches, three big ideas',
          'Every why: a state that needed something'
        ],
        land: [
          'The learning objective asks how categories were "maintained or have changed." Start with what was maintained, because students forget it: every society in this course ranked people, and between 1450 and 1750 almost every state was still ruled by a hereditary monarch with privileged nobles beneath him. Nobody built a society of equals.',
          'The three branches are the three big ideas, and the next four slides take them in order. They are the three Key Concepts: KC-4.3.I.B (who belongs), KC-4.2.III.A (new elites), KC-4.2.III.B (old elites squeezed). The slide carries no single Key Concept band because it spans all three; the learning objective sits on it instead.',
          'The "why" behind every branch is a state that conquered new lands or grew rich from new trade, and needed something: soldiers, taxes, loyalty, one religion, control.'
        ],
        ask: 'Name one thing about the social ladder that did not change between 1450 and 1750.',
        listenFor: 'Rulers still inherited power; nobles kept privileges; most people stayed at the bottom; women\'s place depended on their family\'s class.',
        ap: 'Continuity and Change: name what stayed before you name what changed.'
      }
    },
    {
      phase: 'belongs', kind: 'split-scenes', eyebrow: 'Big Idea 1 of 3 · Who Belongs',
      kc: 'KC-4.3.I.B', title: 'Welcomed and used, or pushed out and limited.',
      template: {
        left: {
          name: 'Welcomed or used',
          items: [
            'The **Ottomans** settle Jews expelled from Spain, 1490s',
            'Christians and Jews protected, but they pay the **jizya**',
            '**Akbar** ends the jizya, 1564, and makes Rajput princes generals'
          ]
        },
        right: {
          name: 'Pushed out or limited',
          items: [
            '**Spain** orders Jews to convert or leave, 1492',
            '**Portugal** forces most to be baptized, 1497',
            'The **Qing** order Han men to wear the queue, 1645'
          ]
        },
        bothLabel: 'Why',
        both: ['The state wanted taxes, soldiers, skills or one faith', 'The next ruler could reverse it: Aurangzeb, 1679']
      },
      notes: {
        minutes: 5,
        keys: [
          'One Key Concept, two halves',
          'Ottomans took in the Jews Spain expelled',
          'Protected is not equal: the jizya',
          'Akbar made Rajput princes top commanders',
          'Aurangzeb brought the jizya back, 1679',
          'Qing queue order limited the Han',
          'Ask what each state wanted'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces four (pushed out and taken in; the Ottoman rules for Christians and Jews; Akbar and Aurangzeb; Ottoman women by class). The First & 10 tells each case in full, so here they are evidence inside one claim, not slides of their own.',
          'Spain: on 31 March 1492 Ferdinand and Isabella ordered Jews who would not convert to leave by the end of July (the Alhambra Decree). Estimates of how many left run from about 40,000 to 200,000 and historians disagree whether leavers or converts were more; say "tens of thousands." Portugal: Manuel I\'s decree of December 1496 ordered Jews out; in 1497 most were baptized by force instead.',
          'Bayezid II let the refugees settle; Salonica became a city where Jews were the largest group from the 1500s (Mark Mazower, Salonica, City of Ghosts, 2004), and exiles set up Istanbul\'s first printing press. Many exiles went elsewhere, to Portugal (until 1497), North Africa and Italy. The remark that Ferdinand impoverished his kingdom to enrich the sultan\'s is likely later embroidery; do not quote it.',
          'Ottoman rule for Christians and Jews: protected subjects under Islamic law; their own religious leaders ran family law, worship and schools. The limits were real: the jizya; generally no testimony against a Muslim in an Islamic court, except in some commercial cases; limits on new houses of worship; top posts for Muslims. Do not teach the "millet system" as one tidy empire-wide chart, which is largely a nineteenth-century formalization read backward (3.2 chapter).',
          'Akbar (ruled 1556 to 1605) abolished the jizya in 1564 and married into the Rajput house of Amber in 1562; Man Singh of Amber reached a rank of 7,000, the highest open to anyone but the emperor\'s sons. He needed Rajput armies and Hindu loyalty, so this is the CED\'s "utilize" as much as "accommodate." Aurangzeb reimposed the jizya in 1679, yet Hindus remained a large share of the high nobles (M. Athar Ali); the slide says only that the policy could be reversed. Akbar\'s religious ideas are Topic 3.3\'s.',
          'Qing: the queue order of July 1645 made adult Han men shave the front of the head and wear the Manchu braid, on pain of death. It is the CED\'s example of restrictive policies against Han Chinese; slide 7 shows the same conquest making a new elite.',
          'Ottoman women by class (an optional CED example) is no longer on a slide. It is in the First & 10 and the Primary Source (Lady Mary Wortley Montagu, 1717). If it comes up: class decided a woman\'s place, from Hürrem and Kösem at the top to enslaved women with almost no say.',
          'The pictures: on the left, a real Akbarnama painting, "Rai Surjan Hada making submission to Akbar" (1569), about 1590 to 1595 (Victoria and Albert Museum). On the right, a labeled reconstruction of a refugee family at an Ottoman port; the skyline is a composite and the writing on the luggage is invented, so do not read either as a source.'
        ],
        ask: 'What did each state want from the group it welcomed, used, pushed out or limited?',
        listenFor: 'Spain: one religion in one kingdom. The sultan: useful subjects, merchants, doctors, craftsmen and taxpayers. Akbar: Rajput armies and the loyalty of a Hindu majority. The Qing: Manchu control over a Han majority.',
        ap: 'KC-4.3.I.B, both halves: states that accommodated or used a group, and states that suppressed diversity or limited a group\'s role. Continuity and Change inside one empire: Akbar to Aurangzeb.',
        avoid: 'Myth: "the Ottomans gave everyone equal rights." Protected was not equal. Do not swing the other way either: it was far more accommodating than Spain in 1492. And do not let students write that "the Jews went to the Ottoman Empire"; many went elsewhere.'
      }
    },
    {
      phase: 'qing', kind: 'continuity-change', eyebrow: 'Big Idea 2 of 3 · New Elites · China, 1644',
      kc: 'KC-4.2.III.A', title: 'New rulers at the top. The old system kept running.',
      footer: 'A new elite on top, and the old system running underneath.',
      template: {
        date: '1644',
        before: { tag: 'Ming', items: ['Han Chinese emperors', 'Scholar-officials run the government'] },
        after: { tag: 'Qing', items: ['Manchu emperors and the **banners**, a new elite', 'Many top posts shared: one Manchu, one Han'] },
        continued: { tag: 'Continued', items: ['The civil service exams', 'Confucian officials and law codes', 'Han scholars fill most government jobs'] }
      },
      notes: {
        minutes: 3,
        keys: [
          'Manchus took Beijing in 1644',
          'Banners: a new hereditary elite',
          'Many top posts paired Manchu and Han',
          'The exams and Han officials continued'
        ],
        land: [
          'The Manchus, whose ruler Hong Taiji had named the dynasty Qing in 1636, took Beijing in 1644 and began to rule China. They were a small minority ruling a Han majority; no population figure is given on the slide.',
          'The banners: hereditary military units of Manchus, Mongols and Han who joined the Manchus before 1644. Bannermen received state stipends, grain and housing in garrison quarters, and had legal privileges ordinary Han did not (Wikipedia, "Eight Banners"). In 1648 Manchus were a minority inside the banners themselves.',
          'The queue order of July 1645 (slide 6, the limit on the Han): adult Han men had to shave the front of the head and wear the Manchu braid, on pain of death. Many top posts in the capital went to two officials, one Manchu and one Han (dual appointment). The Willow Palisade, built in stages from the late 1630s to about 1680, restricted Han civilian settlement in the northeast, though it never fully worked and many Han crossed.',
          'Continuity: the Qing kept the Ming\'s civil service examinations, Confucian bureaucracy and law codes, and Han scholars filled most government jobs.',
          'Do not say the Qing "banned marriage between Manchus and Han." The rules changed over time; a 1648 decree allowed some such marriages.'
        ],
        ask: 'Sort it: which of these is continuity, which is change, and which is a limit on a group?',
        listenFor: 'Continuity: the exams and the officials. Change: Manchu emperors and the banner elite. Limits on the Han (slide 6 and these notes): the queue, the paired posts, the palisade.',
        ap: 'KC-4.2.III.A: "the transition to the Qing Dynasty" as a new elite. KC-4.3.I.B: the CED\'s example, restrictive policies against Han Chinese.'
      }
    },
    {
      phase: 'casta', kind: 'ledger', eyebrow: 'Big Idea 2 of 3 · New Elites · Spanish America',
      kc: 'KC-4.2.III.A', title: 'A new top, ranked by birthplace and ancestry.',
      template: {
        rows: [
          { name: 'Peninsulares', mark: 'P', tool: 'Born in Spain:', result: 'the highest offices, such as viceroy.' },
          { name: 'Creoles', mark: 'C', tool: 'Spanish ancestry, born in the Americas:', result: 'rich from silver, land and trade.' },
          { name: 'Mixed ancestry', mark: 'M', tool: 'Mestizos, mulattos, others:', result: 'in between, by wealth and reputation.' },
          { name: 'Indigenous', mark: 'I', tool: 'Their own town governments:', result: 'paid tribute to the crown.' },
          { name: 'African', mark: 'A', tool: 'Some free, many enslaved:', result: 'at the bottom of the ranking.' }
        ],
        payoffLabel: 'The casta ranking',
        payoff: 'Conquest made a new top'
      },
      notes: {
        minutes: 3,
        keys: [
          'Conquest made a new top',
          'Peninsulares held the highest offices',
          'Creoles grew rich from silver, land, trade',
          'Rank by birthplace and ancestry',
          'Enslaved people still had some legal rights'
        ],
        land: [
          'KC-4.2.III.A names "the rise of the Casta system" in the Americas. Conquest threw together Spaniards, Indigenous peoples and Africans, and their children; colonial society ranked people by ancestry (the casta categories), and among those counted as Spanish, men born in Spain were favored for the highest offices. In law, Spaniards born in Spain and in the Americas were both "españoles" (Handbook of Texas, "Peninsular").',
          'Peninsulares: the viceroys of New Spain were almost always Spanish-born; Juan de Acuña (viceroy 1722 to 1734), born in Lima, is described as only the second creole to hold the post.',
          'Creoles: silver mines, great estates and trade made many creole families rich, a new economic elite (Topics 4.4 and 4.5 showed the silver and the haciendas). They resented Spanish-born officials who got the highest jobs.',
          'Mixed ancestry: mestizos (Spanish and Indigenous), mulattos (Spanish and African) and other categories. Indigenous people had their own town governments and paid tribute. People of African ancestry: some free, many enslaved. Do not say enslaved people had "no legal personhood": in Spanish law they could marry, go to court and buy their freedom.',
          'Bridge only: how enslaved and Indigenous people were made to work is 4.4\'s. This slide is about rank.',
          'The casta paintings (from about 1715) show the ranking as a neat chart; colonial records show categories argued over, and most casta labels never appear in official records. The Rodríguez Juárez painting is on the landing slide and in the Evidence Lab.'
        ],
        ask: 'What decided which row a person was in?',
        listenFor: 'Where they were born and who their parents were, and, in practice, their wealth and reputation.',
        ap: 'KC-4.2.III.A: a new political elite (Spanish-born officials) and a new economic elite (rich creoles), made by conquest and new wealth.',
        avoid: 'Myth: "casta was a fixed chart everyone was locked into." How a person was recorded could change with wealth, job and reputation. Do not swing to "casta did not matter" either: ancestry still opened and closed doors.'
      }
    },
    {
      phase: 'oldelites', kind: 'scene-case', eyebrow: 'Big Idea 3 of 3 · Old Elites Squeezed',
      kc: 'KC-4.2.III.B', title: 'Squeezed in most places. Winning in England.',
      template: {
        steps: [
          { label: 'Ottoman sipahis', text: 'Guns and cash matter more; timar land becomes tax farms.' },
          { label: 'Russian boyars', text: 'Must serve the tsar for life, but keep their estates and serfs.' },
          { label: 'French nobles', text: 'Keep titles, land and tax freedom; lose the power to defy the king.' },
          { label: 'English nobles', key: true, text: 'Invite William of Orange in 1688; Parliament limits the monarchs after.' }
        ],
        proves: 'Fluctuated: old elites lost some powers, kept others, and in England gained.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fluctuated means up and down, not gone',
          'Sipahis: the state needed cash, not cavalry',
          'Boyars: forced into service, kept their serfs',
          'French nobles: privilege kept, independence lost',
          'England, 1688: the old elite won'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces three (the rise-and-fall timeline, the boyars, and France and England). One row per CED example: Ottoman timars, Russian boyars, European nobility.',
          'Sipahis: a timar was the right to collect a piece of land\'s taxes in return for service as a cavalryman, not the holder\'s property (Halil İnalcık, The Ottoman Empire: The Classical Age). From the late 1500s wars needed infantry with guns paid in cash, so the state turned timar land into tax farms, and from 1695 sold them for life (malikane). Tax farmers and provincial families rose in the sipahis\' place. Historians no longer call this simply "decline"; the state changed shape (3.2 and 3.4 chapters).',
          'Boyars: seats by family rank (mestnichestvo) were abolished in 1682. Peter the Great replaced the boyar council with a Senate he appointed (1711), ordered nobles to shave and dress like western Europeans (sources date the beard decree 1698 or 1705, so give no year), and required noblemen to serve for life (ended 1762). The Table of Ranks of 1722 made rank depend on service; a commoner who rose high enough became a hereditary noble. Nobles kept their estates and their power over serfs, tightened by the 1649 Law Code (4.6).',
          'France: after the Fronde (4.6), Louis XIV restored the intendants and on 6 May 1682 moved the court to Versailles, where great nobles competed for his favor instead of raising armies. Historians now stress collaboration as much as taming: offices, pensions and army commands kept them loyal (William Beik, Past & Present, 2005). Nobles kept the exemption from the taille (the 1695 capitation did tax them, hence "tax freedom" without "all").',
          'England: in 1688 seven leading Englishmen, nobles and a bishop among them, invited William of Orange to bring an army; James II fled; Parliament, of landowning nobles and gentry, offered the crown to William and Mary and limited the monarchy in the Bill of Rights of 1689.',
          'The picture is a labeled reconstruction of officials at desks under Peter\'s service reforms, not a likeness of Peter or a record of one office. It makes "squeezed into service" concrete; the rows carry the evidence.'
        ],
        ask: 'Use these four rows to explain what "fluctuated" means.',
        listenFor: 'It went down for the sipahis, the boyars and the French nobles, who lost independence but kept privilege, and up in England, where nobles and Parliament limited the king.',
        ap: 'KC-4.2.III.B: the power of existing elites fluctuated as they confronted increasingly powerful monarchs. The CED\'s examples: Ottoman timars, Russian boyars, European nobility.',
        avoid: 'Myth: "old elites simply disappeared." Russian and French nobles kept land and privilege; English nobles gained power. Squeezed is not gone.'
      }
    },
    {
      phase: 'test', kind: 'claim-evidence', eyebrow: 'Claims and Evidence in Sources 3.D · Model',
      title: 'Support, modify, or refute?',
      footer: 'Busbecq wanted reforms at home. Most strong answers modify: true, but only for some people.',
      template: {
        claimLabel: 'Busbecq, Habsburg ambassador to Suleiman, 1555',
        claim: '"No distinction is attached to birth among the Turks ... It is by merit that men rise in the service ..."',
        evidence: [
          { text: 'Boys taken by the devshirme rose to be generals and grand viziers.', source: 'Supports' },
          { text: 'A Christian had to become Muslim to reach the top jobs.', source: 'Modifies' },
          { text: 'The throne stayed in one family: Suleiman inherited it from his father.', source: 'Modifies' }
        ],
        reasoning: 'Merit opened the sultan\'s service, but only to Muslims, and **the throne itself passed by birth**, so the claim is true for officials and not for the whole empire.'
      },
      notes: {
        minutes: 3,
        keys: [
          'Say his argument in your own words',
          'Devshirme boys rose high: supports',
          'Top jobs required becoming Muslim: modifies',
          'The throne passed by birth: modifies',
          'Push for the limit: true for whom?'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: the quotation slide and the model are now one slide. Read the claim aloud, take one paraphrase, then label the evidence.',
          'Source: Charles Thornton Forster and F. H. Blackburne Daniell, trans., The Life and Letters of Ogier Ghiselin de Busbecq (London, 1881), vol. I, pp. 154 to 155, the First Turkish Letter, describing his audience with Suleiman at Amasya in 1555. Public domain. The quotation joins two sentences from one passage, with the cut shown.',
          'Busbecq (1522 to 1592), a Flemish noble, was Habsburg ambassador at the Ottoman court from 1555 to 1562. The Fordham Internet History Sourcebook\'s headnote: "Because Busbecq was trying to bring about reform at home, he did not dwell on the very real problems with Ottoman government." The same passage goes on: "with us there is no opening left for merit; birth is the standard for everything." The Skill Builder tests that second half.',
          'The suggested skill, 3.D: support means the evidence fits; modify means it is true, but only for some people, places or times; refute means the evidence shows the argument is wrong.',
          'Supports: devshirme recruits rose to the highest offices; Sokollu Mehmed Pasha, grand vizier from 1565 to 1579, began as a devshirme boy from Bosnia (Topic 3.2). Modifies: the top posts required conversion to Islam, and Christians and Jews paid the jizya and lived with limits (slide 6). The Ottoman dynasty inherited the throne.'
        ],
        ask: 'Is there any evidence that would refute Busbecq\'s claim about the Ottomans, not just modify it?',
        listenFor: 'Students might argue the sultan\'s family itself, or women\'s exclusion from offices, but most evidence modifies rather than refutes. Accept a defended answer.',
        ap: 'Claims and Evidence in Sources 3.D, modeled.'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'continuity-change', eyebrow: 'The Whole Topic',
      title: 'The ladder stayed. The people on it moved.',
      footer: 'Conquest, new wealth and stronger rulers decided who moved where.',
      template: {
        date: 'By 1750',
        before: { tag: 'Before', items: ['Older nobles share power with rulers', 'Every society already ranks people from top to bottom'] },
        after: { tag: 'Changed', items: ['**Who belongs**: welcomed or used, pushed out or limited', '**New elites**: the Qing banners; peninsulares and creoles', '**Old elites squeezed**: sipahis, boyars, French nobles'] },
        continued: { tag: 'Stayed the same', items: ['A ruler who inherits power, on top', 'Privileged nobles beneath', 'Most people at the bottom; a woman\'s place set by her class'] }
      },
      notes: {
        minutes: 4,
        keys: [
          'Show it, hide it, redraw it',
          'One named case under each change',
          'Continuity first: ruler, nobles, the many'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw it from memory, with one case under each change.',
          'The three changes are the three Key Concepts in order, and the continuity is the "maintained" half of the learning objective. The slide carries no single Key Concept band because it spans all three.',
          'Push for named cases: Ottomans and Jewish refugees, Akbar and the Rajputs, Spain and the Jews it expelled, the Qing and the Han; the banners, peninsulares and creoles; sipahis and timars, boyars and the Table of Ranks, Versailles; England, where the old elite won.'
        ],
        ask: 'Redraw it without looking, with one case under each change.',
        listenFor: 'Stayed: hereditary rulers, privileged nobles, most people at the bottom. Changed: who belongs (Ottomans took in Jews; Spain pushed them out), new elites (the banners), old elites squeezed (the boyars).'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      kc: 'Unit 4: Learning Objective M',
      footer: 'Name what stayed, what changed, and why.',
      template: {
        weak: 'Society changed a lot between 1450 and 1750.',
        strong: 'Between 1450 and 1750, ______ **stayed the same**, but ______ **changed**, **because** ______.'
      },
      notes: {
        minutes: 2,
        keys: [
          'The weak claim fits any century',
          'Stayed, changed, because',
          'A frame, not a model answer'
        ],
        land: [
          'The weak claim names no society, no group, no continuity and no cause. It fits any three centuries in history, which is why it earns no credit.',
          'The frame asks for the whole continuity-and-change move: what stayed, what changed, and why.',
          'This is a sentence frame, not a model answer: every case is asked for somewhere (First & 10, Checkpoints 1 and 2). Have pairs fill it in aloud with a case they choose. Do not write a finished claim on the board.'
        ],
        ask: 'Why is "changed a lot" not enough?',
        listenFor: 'It does not say what changed, for whom, what stayed the same, or why.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Test a source\'s argument.',
      subtitle: 'Support, modify, or refute: Busbecq\'s claim that in Europe "birth is the standard for everything."',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
      notes: {
        minutes: 9,
        keys: [
          'Practice 3.D on Busbecq\'s claim about Europe',
          'Table of Ranks is the strongest modifier',
          'Debrief only after students write'
        ],
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 3.D Claims and Evidence in Sources.',
          'It models the move on the first half of Busbecq\'s argument (slide 10), ends the model with a sentence frame rather than a finished sentence, then gives students the second half, that in Europe "birth is the standard for everything," with three pieces of evidence: Louis XIV\'s nobles at Versailles, Peter\'s Table of Ranks, and French offices, such as judges\' seats in the Parlement of Paris, that families could buy and that could bring noble rank. Students decide whether each supports, modifies or refutes it.',
          'The Table of Ranks is the strongest modifier: a commoner could become a noble by rank. Russia is in Europe, so it tests Busbecq\'s "with us" directly.'
        ],
        ask: 'After students have written: which piece of evidence did the most damage to Busbecq\'s claim about Europe?',
        listenFor: 'Debrief only after the module: the Table of Ranks, because it let commoners rise by service.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'Who could belong, who could rise, or who was squeezed? Two sources, one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
      notes: {
        minutes: 9,
        keys: [
          'Observe, then infer, then a limit',
          'Vanmour painted for European buyers',
          'The casta painting is an ideal'
        ],
        land: [
          'Six real objects: the Akbarnama painting of a Rajput ruler submitting to Akbar; Vanmour\'s Armenian wedding and his lying-in room; the banner handscroll dated 1662; the casta painting of about 1715 to 1720; and Martin\'s Versailles of 1722.',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you. Vanmour painted for European buyers and probably could not enter a wealthy woman\'s rooms; the casta painting is an elite\'s ideal. Both are good limits to name.',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'The top of society: one new elite and one old elite, and what stayed the same.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
      notes: {
        minutes: 12,
        keys: [
          'One new elite, one old elite',
          'Plus one thing that stayed',
          'The revised answer goes to Canvas'
        ],
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for one new elite (the Qing banners, or peninsulares and creoles in the casta ranking) and how conquest or new trade made it, one old elite (Ottoman sipahis, Russian boyars or French nobles) and how its power changed as rulers grew stronger, and one thing about the top of society that stayed the same. That is KC-4.2.III.A and KC-4.2.III.B, run through continuity and change. KC-4.3.I.B is the First & 10\'s and Checkpoint 1\'s.',
          'Socrates is told the skill is Continuity and Change, so it will push for what stayed the same as well as what changed.'
        ],
        ask: 'Does your answer name a new elite, an old elite, and one thing that stayed the same?',
        listenFor: 'The banners made by the Qing conquest; the boyars squeezed into service by Peter; a hereditary ruler still on top.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'The ladder stayed. The people on it moved, and conquest, new wealth and stronger rulers decided who moved where.',
      subtitle: 'Next: trade, work and the ladder itself all moved between 1450 and 1750. Which change mattered most, and what stayed the same?',
      notes: {
        minutes: 2,
        keys: [
          'Answer the learning objective in one sentence',
          'Maintained and changed, with the cause',
          'Hand off to 4.8'
        ],
        land: [
          'The picture: the casta painting by Juan Rodríguez Juárez, about 1715 to 1720 (Hispanic Society of America): a family sorted and labeled, the ladder painted as if it could never move.',
          'This sentence answers the learning objective: categories maintained (the ladder) and changed (who stood where), with the cause (rulers who conquered, traded and centralized).',
          'Hand off to 4.8 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.7?',
        listenFor: 'Empires decided who could belong and who could rise: new elites appeared, old ones were squeezed, and some groups were welcomed while others were pushed out, but the ladder itself stayed.'
      }
    }
  ]
};
