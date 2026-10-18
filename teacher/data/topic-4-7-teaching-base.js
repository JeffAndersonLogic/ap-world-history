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
      'Correct three myths: "the Ottomans gave everyone equal rights," "casta was a fixed chart everyone was locked into," and "old elites simply disappeared."',
      'Show that one empire could change its own policy (Akbar and Aurangzeb) and treat one group differently by class (Ottoman women).'
    ],
    could: [
      'Use the BeInTheRoom Identity Dossier as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Who Belongs, Who Rises."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the three kinds of change, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.6, 3.2 and 4.4. Bridge to who ended up where.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Akbar\'s court.', students: 'Predict who might be welcomed or pushed out.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Who Belongs, Who Rises" in class.', students: 'For every case: what stayed, what changed.', slide: 4 },
    { id: 'ladder', label: 'The Ladder', range: '17-19', minutes: 2, teacher: 'The continuity, and the three kinds of change.', students: 'Name what stayed the same.', slide: 5 },
    { id: 'map', label: 'Where It Happened', range: '19-20', minutes: 1, teacher: 'The cases on one map, colored by kind.', students: 'Find one of each color.', slide: 6 },
    { id: 'expelled', label: 'Pushed Out, Taken In', range: '20-22', minutes: 2, teacher: 'Spain and Portugal; Bayezid II.', students: 'Say why each state did it.', slide: 7 },
    { id: 'room', label: 'Room, Not Equality', range: '22-24', minutes: 2, teacher: 'How the Ottomans governed Christians and Jews.', students: 'Name one right and one limit.', slide: 8 },
    { id: 'mughal', label: 'It Depends on the Ruler', range: '24-26', minutes: 2, teacher: 'Akbar and the Rajputs; Aurangzeb and the jizya.', students: 'Say what changed and what did not.', slide: 9 },
    { id: 'women', label: 'Women, by Class', range: '26-28', minutes: 2, teacher: 'One painting: a wealthy household and the enslaved woman in it.', students: 'Find the mistress and the enslaved woman.', slide: 10 },
    { id: 'qing', label: 'A New Elite in China', range: '28-31', minutes: 3, teacher: 'The banners, the queue, the exams kept.', students: 'Sort continuity and change.', slide: 11 },
    { id: 'banners', label: 'The Banners, 1662', range: '31-32', minutes: 1, teacher: 'A Manchu painter shows the new elite.', students: 'Find the banner and its label.', slide: 12 },
    { id: 'casta', label: 'A New Top in the Americas', range: '32-34', minutes: 2, teacher: 'The casta ranking, top to bottom.', students: 'Say what decided a person\'s rung.', slide: 13 },
    { id: 'castapainting', label: 'A Chart on Canvas', range: '34-36', minutes: 2, teacher: 'Read a casta painting as an elite\'s ideal.', students: 'Say what the painting wants you to believe.', slide: 14 },
    { id: 'fortunes', label: 'Old Elites Rise and Fall', range: '36-38', minutes: 2, teacher: 'Sipahis down, tax farmers up, boyars down.', students: 'Say what pushed each line.', slide: 15 },
    { id: 'boyars', label: 'The Boyars', range: '38-40', minutes: 2, teacher: 'Peter\'s squeeze, and what nobles kept.', students: 'Name one loss and one thing kept.', slide: 16 },
    { id: 'nobles', label: 'France and England', range: '40-42', minutes: 2, teacher: 'Squeezed in France, winning in England.', students: 'Explain "fluctuated."', slide: 17 },
    { id: 'busbecq', label: 'A Claim to Test', range: '42-43', minutes: 1, teacher: 'Read Busbecq\'s argument.', students: 'Say his argument in your own words.', slide: 18 },
    { id: 'test', label: 'Support, Modify, Refute', range: '43-45', minutes: 2, teacher: 'Model 3.D on Busbecq.', students: 'Label each piece of evidence.', slide: 19 },
    { id: 'myths', label: 'Myth and Evidence', range: '45-47', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 20 },
    { id: 'retell', label: 'The Ladder Stayed', range: '47-51', minutes: 4, teacher: 'Students redraw the continuity-and-change model from memory.', students: 'Retell the whole topic.', slide: 21 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '51-53', minutes: 2, teacher: 'From "society changed" to what stayed, what changed and why.', students: 'Upgrade a weak claim.', slide: 22 },
    { id: 'skill', label: 'Skill Builder', range: '53-60', minutes: 7, teacher: 'Module 05: Claims and Evidence in Sources.', students: 'Test Busbecq\'s claim about Europe.', slide: 23 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: who could belong.', students: 'Work without the coach.', slide: 24 },
    { id: 'evidence', label: 'Evidence Lab', range: '60-67', minutes: 7, teacher: 'Module 07: one claim about who belonged or who rose, from two sources.', students: 'Observe, then infer, then name a limit.', slide: 25 },
    { id: 'cp2', label: 'Checkpoint 2', range: '67-77', minutes: 10, teacher: 'Module 10: the top of society, new elites and old. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 26 },
    { id: 'close', label: 'Landing Sentence', range: '77-79', minutes: 2, teacher: 'Land the answer and hand off to 4.8.', students: 'Say the topic in one sentence.', slide: 27 }
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
        land: [
          'CED p. 89. One learning objective, M (Social Interactions and Organization): explain how social categories, roles, and practices have been maintained or have changed over time. The reasoning process is Continuity and Change (p. 75); the suggested skill is 3.D, explain how claims or evidence support, modify, or refute a source\'s argument.',
          'KC-4.3.I.B: many states, such as the Mughal and Ottoman empires, accommodated the ethnic and religious diversity of their subjects or used the contributions of different groups; in other cases states suppressed diversity or limited certain groups\' roles. KC-4.2.III.A: imperial conquests and widening global economic opportunities formed new political and economic elites, including the Qing transition and the casta system. KC-4.2.III.B: the power of existing elites fluctuated as they confronted increasingly powerful monarchs.',
          'The CED\'s illustrative examples (optional): the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire; restrictive policies against Han Chinese in Qing China; the varying status of different classes of women within the Ottoman Empire; Ottoman timars; Russian boyars; European nobility. All six are in this deck, each told briefly, because together they are the shortest route through all three Key Concepts.',
          'The CED\'s sample activity (p. 77) is a debate testing a historian\'s claim about religious toleration against evidence. This deck takes the move, not the article: slides 18 and 19 test Busbecq\'s 1555 claim; the Skill Builder and the Primary Source (Montagu, 1717) do it again.',
          'Owns: who could belong (KC-4.3.I.B), new elites (KC-4.2.III.A), old elites squeezed (KC-4.2.III.B).',
          'Bridge only: Atlantic slavery and the labor systems (4.4; enslaved Africans appear only as the bottom of the casta ranking); the devshirme and Versailles as tools of rule (3.2, one clause each, from the elite\'s side); the Janissaries\' guns (3.1); the Fronde and the 1649 Law Code (4.6); which change mattered most (4.8, the hand-off).',
          'Three myths, on slide 20: "the Ottomans gave everyone equal rights"; "casta was a fixed chart everyone was locked into"; "old elites simply disappeared."',
          'Every picture in this deck is a real object of the period: an Akbarnama painting (about 1590 to 1595), two paintings by Jean Baptiste Vanmour of life in Istanbul (about 1720 to 1737), a Manchu painter\'s handscroll of 1662, a casta painting of about 1715 to 1720, and a portrait of Peter the Great. Busbecq\'s portrait (engraved in Constantinople, 1557) and Pierre-Denis Martin\'s Versailles of 1722 are on the lesson page. The map is the course\'s own. None is AI-generated.'
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
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: the Parlement of Paris and the nobles (the Fronde), peasants and Cossacks (Razin), the Marathas, Njinga, the Pueblos, the Wampanoag, maroons, the Stono rebels; Versailles, the devshirme, salaried officials, tax collectors who answered to the ruler; Indigenous workers under the encomienda or the mit\'a, enslaved Africans.',
          'The bridge is 4.6\'s hand-off in the unit story map, word for word.',
          'Prompt 2 returns on slide 17 (Versailles), from the nobles\' side. Prompt 3 returns as the bottom of the casta ranking on slide 13.'
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
      phase: 'ladder', kind: 'branch-tree', eyebrow: 'The Frame · Continuity and Change',
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
        land: [
          'The learning objective asks how categories were "maintained or have changed." Start with what was maintained, because students forget it: every society in this course ranked people, and between 1450 and 1750 almost every state was still ruled by a hereditary monarch with privileged nobles beneath him. Nobody built a society of equals.',
          'The three branches are the three Key Concepts in order: KC-4.3.I.B (who belongs), KC-4.2.III.A (new elites), KC-4.2.III.B (old elites squeezed). The slide carries no single Key Concept band because it spans all three; the learning objective sits on it instead.',
          'The "why" behind every branch is a state that conquered new lands or grew rich from new trade, and needed something: soldiers, taxes, loyalty, one religion, control.'
        ],
        ask: 'Name one thing about the social ladder that did not change between 1450 and 1750.',
        listenFor: 'Rulers still inherited power; nobles kept privileges; most people stayed at the bottom; women\'s place depended on their family\'s class.',
        ap: 'Continuity and Change: name what stayed before you name what changed.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'Where It Happened',
      kc: 'Unit 4: Learning Objective M', title: 'Who belonged, who rose, who was squeezed.',
      footer: 'The key sorts every case: who could belong, new elites, or old elites squeezed.',
      visual: { url: '../assets/images/instructional-maps/topic-4-7.svg', alt: 'World map with labeled dots at England, Versailles, Spain and Portugal, Salonica, Anatolia, Russia, Mughal India, Beijing and Mexico City, each with a date, shaded in three colors explained in the key' },
      notes: {
        minutes: 1,
        land: [
          'The course\'s own instructional map, rebuilt for this story. Dots mark regions, not borders. Gold: who could belong (Spain and Portugal pushing Jews out, Salonica taking refugees in, Mughal India\'s jizya ended and restored). Plum: new elites (the Qing banners in Beijing, the casta ranking in Mexico City). Green: old elites squeezed, or winning (Anatolia\'s timars, Russia\'s Table of Ranks, Versailles, England in 1688).',
          'Point out the spread: Europe, Southwest Asia, South Asia, East Asia and the Americas. These changes were happening across the joined-up world of Unit 4.'
        ],
        ask: 'Find one place of each color.',
        listenFor: 'Any three, for example Salonica, Beijing and Russia.'
      }
    },
    {
      phase: 'expelled', kind: 'balance', eyebrow: 'Who Belongs · 1492 to 1497',
      kc: 'KC-4.3.I.B', title: 'Pushed out, and taken in.',
      template: {
        job: 'Who belongs',
        left: { tag: 'Spain and Portugal', name: 'Pushed out', when: '1492 to 1497', text: 'Jews must convert or leave. Portugal forces most to be baptized.' },
        right: { tag: 'Ottoman Empire', name: 'Taken in', when: '1490s', text: 'Bayezid II lets the refugees settle in Istanbul, Salonica and other cities.' },
        claimLabel: 'Ask why',
        claim: 'Same people, **opposite policies**: what did each state want?'
      },
      notes: {
        minutes: 2,
        land: [
          'On 31 March 1492 Ferdinand and Isabella ordered Jews who would not convert to leave their kingdoms by the end of July (the Alhambra Decree). Estimates of how many left run from about 40,000 to 200,000, and estimates of converts vary too; historians disagree about which group was larger (Henry Kamen: about 40,000 left and 50,000 were baptized; Joseph Pérez: most chose to leave). Say "tens of thousands."',
          'Portugal: Manuel I\'s decree of December 1496 ordered Jews out; in 1497 most were baptized by force instead of being allowed to leave.',
          'Bayezid II let the refugees settle; Salonica became a city where Jews were the largest group from the 1500s (Mark Mazower, Salonica, City of Ghosts, 2004). Exiles from Spain set up Istanbul\'s first printing press, which printed books in Hebrew; its first book is dated 1493 in its colophon, a date some scholars question, so the slide gives no year.',
          'Many exiles went elsewhere: to Portugal (until 1497), North Africa and Italy. Do not let students write that "the Jews went to the Ottoman Empire."',
          'The remark attributed to Bayezid, that Ferdinand impoverished his own kingdom to enrich the sultan\'s, is likely later embroidery. Do not quote it as fact.'
        ],
        ask: 'What did Spain want? What did the Ottoman sultan want?',
        listenFor: 'Spain: one religion in one kingdom. The sultan: useful subjects, merchants, doctors, craftsmen and taxpayers.',
        ap: 'KC-4.3.I.B: one state suppressed diversity; another used the contributions of a group. The CED\'s example: the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire.'
      }
    },
    {
      phase: 'room', kind: 'story-scene', eyebrow: 'Who Belongs · The Ottoman Empire',
      kc: 'KC-4.3.I.B', title: 'Room for difference, but not equality.',
      template: {
        steps: [
          { label: 'Protected', text: 'Christians and Jews may practice their religion.' },
          { label: 'Self-run', text: 'Their own leaders run marriage, inheritance, schools and family courts.' },
          { label: 'The price', text: 'They pay a special tax, the jizya.' },
          { label: 'The limits', key: true, text: 'No testimony against a Muslim in court; top army and government jobs go to Muslims.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Under Islamic law, Christians and Jews were protected subjects (dhimmis). In the Ottoman Empire their own religious authorities ran family law, worship, schooling and charity, and answered to the state for order and taxes. This agrees with Topic 3.2\'s chapter.',
          'Do not teach the "millet system" as one tidy empire-wide chart; that picture is largely a nineteenth-century formalization read backward (3.2 chapter). Arrangements were made community by community and city by city.',
          'The limits were real: the jizya; testimony that counted for less against a Muslim\'s in an Islamic court; restrictions on building new houses of worship; top military and government posts for Muslims. The devshirme (3.2) took Christian boys, converted them and trained them for service: a route to the top that required leaving one\'s family\'s religion.',
          'The picture: Jean Baptiste Vanmour, "Armenian Wedding," about 1720 to 1737 (Rijksmuseum SK-A-2001). The museum describes an Armenian wedding procession on its way to church for the blessing, with musicians, the groom, his parents, the priest and the bride in red. Vanmour was a Flemish-born painter who lived in Istanbul and painted its peoples for European buyers. An Armenian Christian community celebrating in public in the Ottoman capital is accommodation at work.'
        ],
        ask: 'Name one thing Christians and Jews could do, and one thing they could not.',
        listenFor: 'Could: practice their religion, run their own family law and schools. Could not: give testimony equal to a Muslim\'s, freely build new churches, hold top posts without converting.',
        ap: 'KC-4.3.I.B: accommodation, and its limits. Continuity: Muslims stayed on top.'
      }
    },
    {
      phase: 'mughal', kind: 'story-scene', eyebrow: 'Who Belongs · Mughal India',
      kc: 'KC-4.3.I.B', title: 'Same empire, opposite policies.',
      template: {
        steps: [
          { label: '1556', text: 'Akbar, a Muslim, begins to rule a mostly Hindu empire.' },
          { label: '1564', text: 'He ends the jizya, the tax on non-Muslims.' },
          { label: 'Rajputs', text: 'He marries into Rajput royal families and makes their princes top commanders.' },
          { label: '1679', key: true, text: 'Aurangzeb brings the jizya back, but still employs many Hindu officers.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Akbar ruled 1556 to 1605. He abolished the jizya in 1564 (agrees with the 3.2 and 3.4 chapters). In 1562 he married a daughter of Raja Bharmal of Amber; the Rajput rulers of Amber became pillars of the empire. Man Singh of Amber reached a rank (mansab) of 7,000, the highest open to anyone but the emperor\'s sons (Wikipedia, "Man Singh I"; e-PG Pathshala module on the mansabdari system).',
          'Why: Akbar needed Rajput armies and the loyalty of the Hindu majority. This is the CED\'s "utilize the ... military contributions of different ... groups" as much as "accommodate."',
          'Aurangzeb, Akbar\'s great-grandson, reimposed the jizya in 1679 (3.4 chapter). M. Athar Ali\'s study of the Mughal nobility under Aurangzeb found that Hindus remained a large share of the high nobles, partly through Maratha recruits; the slide says only "many."',
          'The picture is the Akbarnama painting from slide 3: Rai Surjan Hada of Ranthambhor bowing to Akbar in 1569. Conquest came first; the Rajput houses that submitted were then brought into the Mughal nobility.',
          'Akbar\'s religious ideas (the Ibadat Khana, sulh-i kul) are Topic 3.3\'s setting. Use only his policies toward Hindu groups here.'
        ],
        ask: 'What changed between 1564 and 1679? What stayed the same?',
        listenFor: 'Changed: the jizya ended, then came back. Stayed: a Muslim emperor on top, and Hindu officers still in imperial service.',
        ap: 'KC-4.3.I.B. Continuity and Change inside one empire: accommodation was a ruler\'s choice, and the next ruler could reverse it.'
      }
    },
    {
      phase: 'women', kind: 'frame-placard', eyebrow: 'Who Belongs · Ottoman Women, by Class',
      kc: 'KC-4.3.I.B', title: 'A wealthy household, and the enslaved woman in it.',
      template: {
        placard: {
          tag: 'Istanbul · about 1720 to 1737',
          name: 'Who has a say?',
          text: 'A wealthy mother receives visitors after a birth, women of her own class. At the lower left, the museum says, **an enslaved woman** makes sherbet for the guests.'
        }
      },
      notes: {
        minutes: 2,
        land: [
          'The picture: Jean Baptiste Vanmour, "Lying-in Room of a Distinguished Turkish Woman," about 1720 to 1737 (Rijksmuseum SK-A-2003). The museum describes visitors received in the house of a wealthy family after a birth: coffee brewing on the brazier in the middle, "an enslaved woman" on the left already making sherbet, rosewater and perfume for the guests, and cloths on the walls that were the visitors\' gifts. Vanmour painted for European buyers, and a European man would not have entered this room; it is his reconstruction from what he was told and saw elsewhere. Say so.',
          'Women at the top: Hürrem began as an enslaved woman in the palace and became Suleiman\'s wife; she paid for the Haseki Sultan complex in Istanbul (mosque 1538 to 1539, school, soup kitchen, and a hospital by 1550 to 1551). Kösem was regent for her young son Murad IV (from 1623) and her grandson Mehmed IV (1648 to 1651), and a powerful adviser to her adult son Ibrahim (1640 to 1648); she was killed in 1651.',
          'Women in the towns: in early-1600s Kayseri, women sued and were sued in the Islamic court and took part in about 40 percent of recorded property transactions (Ronald Jennings, 1975). Inheritance law gave a daughter half a son\'s share, and a woman\'s testimony counted for less.',
          'Enslaved women: servants and concubines in wealthy households, with almost no say over their own lives.'
        ],
        ask: 'Find the woman in the painting with the most say over her own life, and the woman with the least.',
        listenFor: 'The wealthy mother in the bed, with her visitors around her; the enslaved woman making sherbet at the lower left.',
        ap: 'KC-4.3.I.B. The CED\'s example: the varying status of different classes of women within the Ottoman Empire.'
      }
    },
    {
      phase: 'qing', kind: 'continuity-change', eyebrow: 'New Elites · China, 1644',
      kc: 'KC-4.2.III.A', title: 'New rulers at the top. The old system kept running.',
      footer: 'A new elite, limits on the majority, and a continuity, all in one empire.',
      template: {
        date: '1644',
        before: { tag: 'Ming', items: ['Han Chinese emperors', 'Scholar-officials run the government'] },
        after: { tag: 'Qing', items: ['Manchu emperors and the **banners**, a new elite', 'Han men must wear the **queue** (1645)', 'Many top posts shared: one Manchu, one Han'] },
        continued: { tag: 'Continued', items: ['The civil service exams', 'Confucian officials and law codes', 'Han scholars fill most government jobs'] }
      },
      notes: {
        minutes: 3,
        land: [
          'The Manchus, whose ruler Hong Taiji had named the dynasty Qing in 1636, took Beijing in 1644 and began to rule China. They were a small minority ruling a Han majority; no population figure is given on the slide.',
          'The banners: hereditary military units of Manchus, Mongols and Han who joined the Manchus before 1644. Bannermen received state stipends, grain and housing in garrison quarters, and had legal privileges ordinary Han did not (Wikipedia, "Eight Banners"). In 1648 Manchus were a minority inside the banners themselves.',
          'The queue order of July 1645: adult Han men had to shave the front of the head and wear the Manchu braid, on pain of death. Many top posts in the capital went to two officials, one Manchu and one Han (dual appointment). The Willow Palisade, begun about 1648, restricted Han civilian settlement in the northeast.',
          'Continuity: the Qing kept the Ming\'s civil service examinations, Confucian bureaucracy and law codes, and Han scholars filled most government jobs.',
          'Do not say the Qing "banned marriage between Manchus and Han." The rules changed over time; a 1648 decree allowed some such marriages.'
        ],
        ask: 'Sort it: which of these is continuity, which is change, and which is a limit on a group?',
        listenFor: 'Continuity: the exams and the officials. Change: Manchu emperors and the banner elite. Limits on the Han: the queue, the paired posts, the palisade.',
        ap: 'KC-4.2.III.A: "the transition to the Qing Dynasty" as a new elite. KC-4.3.I.B: the CED\'s example, restrictive policies against Han Chinese.'
      }
    },
    {
      phase: 'banners', kind: 'frame-subtitle', eyebrow: 'New Elites · The Banners',
      kc: 'KC-4.2.III.A',
      title: 'A Manchu painter shows the new elite: banner horsemen celebrate the Qing emperor\'s entry into Beijing.',
      notes: {
        minutes: 1,
        land: [
          'The picture: Nardunbu, a Manchu artist, "Horsemanship Competition for the Shunzhi Emperor," a handscroll dated 1662 (Metropolitan Museum of Art, 2002.328). The Met describes it as recording one of the celebrations that accompanied the Shunzhi emperor\'s (r. 1644 to 1661) entry into Beijing after the fall of the Ming, among the earliest known Qing court paintings and probably a preparatory sketch; the riders belong to the three highest-ranking of the eight banners. It was painted in 1662, after Shunzhi\'s death, eighteen years after the event. This section shows a rider standing on a galloping horse playing a flute, and rows of men carrying triangular flame-edged banners. The yellow label on the right reads "Commander of the Plain Yellow Banner" (正黃旗總帥), one of the eight banners. The other label names the stunt: standing on the horse, playing the flute.',
          'Riding and archery were the Manchu skills the banners were built on; displaying them for the emperor celebrated the conquest elite.',
          'The Met\'s record gives the painting\'s date as 1662, though its period field reads "Ming dynasty"; go by the date and the subject, which are Qing.'
        ],
        ask: 'Find the banner, and the label that names it.',
        listenFor: 'The flags the men carry; the yellow label on the right naming the commander of the Plain Yellow Banner.'
      }
    },
    {
      phase: 'casta', kind: 'ledger', eyebrow: 'New Elites · Spanish America',
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
        minutes: 2,
        land: [
          'KC-4.2.III.A names "the rise of the Casta system" in the Americas. Conquest threw together Spaniards, Indigenous peoples and Africans, and their children; colonial society ranked people by ancestry (the casta categories), and among those counted as Spanish, men born in Spain were favored for the highest offices. In law, Spaniards born in Spain and in the Americas were both "españoles" (Handbook of Texas, "Peninsular").',
          'Peninsulares: the viceroys of New Spain were almost always Spanish-born; Juan de Acuña (viceroy 1722 to 1734), born in Lima, is described as only the second creole to hold the post.',
          'Creoles: silver mines, great estates and trade made many creole families rich, a new economic elite (Topics 4.4 and 4.5 showed the silver and the haciendas). They resented Spanish-born officials who got the highest jobs.',
          'Mixed ancestry: mestizos (Spanish and Indigenous), mulattos (Spanish and African) and other categories. Indigenous people had their own town governments and paid tribute. People of African ancestry: some free, many enslaved. Do not say enslaved people had "no legal personhood": in Spanish law they could marry, go to court and buy their freedom.',
          'Bridge only: how enslaved and Indigenous people were made to work is 4.4\'s. This slide is about rank.'
        ],
        ask: 'What decided which row a person was in?',
        listenFor: 'Where they were born and who their parents were, and, in practice, their wealth and reputation.',
        ap: 'KC-4.2.III.A: a new political elite (Spanish-born officials) and a new economic elite (rich creoles), made by conquest and new wealth.'
      }
    },
    {
      phase: 'castapainting', kind: 'frame-placard', eyebrow: 'New Elites · A Casta Painting, about 1715 to 1720',
      kc: 'KC-4.2.III.A', title: 'A chart on canvas, not a census.',
      template: {
        placard: {
          tag: 'Mexico · about 1715 to 1720',
          name: 'A chart on canvas',
          text: 'The label reads: **"From a mestizo and an Indian woman comes a coyote."** Most of the many labels in casta paintings never appear in official records.'
        }
      },
      notes: {
        minutes: 2,
        land: [
          'The picture: Juan Rodríguez Juárez, "De Mestizo, y de India Produce Coyote," oil on canvas (Hispanic Society of America, LA2122), dated about 1715 on Wikimedia Commons and about 1720 by the Hispanic Society, which links it to the viceroy Duke of Linares\'s commission; say "about 1715 to 1720." It is from one of the earliest known casta series; Rodríguez Juárez\'s sets of about 1715 are among the first (Ilona Katzew, Casta Painting, 2004). The inscription at top right reads "D MESTIZO Y D INDIA PRODUCE COYOTE": from a mestizo and an Indian woman comes a coyote.',
          'Read it as a genre. Casta paintings showed colonial society as an orderly chart, sorted and labeled, for elite viewers, many of them in Spain. Most of the long lists of labels in the paintings never appear in official records; the census used only a few categories (Katzew). In daily life, how a person was recorded could change with wealth, occupation, clothing and reputation.',
          'But the chart was not meaningless: ancestry opened or closed doors to office, honor and some guilds and schools, and the top belonged to people whose families came from Spain.',
          'Most casta series are from later in the 1700s; this one is from about 1715 to 1720, inside the period.'
        ],
        ask: 'What did the painter, or the buyer, want viewers to believe about colonial society?',
        listenFor: 'That it was orderly: everyone had a label and a place, and the categories could be predicted.',
        ap: 'KC-4.2.III.A. Sourcing (Unit 4\'s 2.A and 3.D): a painting of a social system shows the maker\'s ideal, not a count of real people.'
      }
    },
    {
      phase: 'fortunes', kind: 'timeline-fortunes', eyebrow: 'Old Elites · Rise and Fall',
      kc: 'KC-4.2.III.B', title: 'Old elites fell, and new ones rose.',
      footer: 'The lines show direction only, not measured power.',
      template: {
        range: [1450, 1750], tick: 50,
        cases: [
          { name: 'Ottoman sipahis', note: 'Cavalry who held timars', points: [{ year: 1450, level: 3.4 }, { year: 1550, level: 3.4 }, { year: 1650, level: 2 }, { year: 1750, level: 1 }], events: [{ year: 1600, label: 'c. 1600', text: 'guns and cash matter more' }] },
          { name: 'Tax farmers and local families', note: 'Ottoman provinces', points: [{ year: 1450, level: 0.8 }, { year: 1580, level: 1.2 }, { year: 1695, level: 2.4 }, { year: 1750, level: 3.4 }], events: [{ year: 1695, label: '1695', text: 'tax farms sold for life' }] },
          { name: 'Russian boyars', note: 'Great noble families', points: [{ year: 1450, level: 3.2 }, { year: 1600, level: 2.8 }, { year: 1682, level: 2.2 }, { year: 1722, level: 1 }, { year: 1750, level: 0.8 }], events: [{ year: 1722, label: '1722', text: 'Table of Ranks' }] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The lines are a teaching sketch of direction, not a measurement; the footer says so. Their job is the word "fluctuated" in KC-4.2.III.B.',
          'Sipahis: a timar was the right to collect the taxes of a piece of land in return for service as a cavalryman; it was not the holder\'s property and was not supposed to pass automatically to his son (Halil İnalcık, The Ottoman Empire: The Classical Age). From the late 1500s, wars needed infantry with guns paid in cash, and the state turned more and more timar land into tax farms; from 1695 it sold them for life (malikane). The Topic 3.2 and 3.4 chapters tell the same move, "from timar-holding cavalry to tax farming and provincial notables."',
          'Tax farmers and powerful provincial families rose with the life-term tax farms (Wikipedia, "Ottoman Old Regime," on the 1695 malikane and provincial influence). Historians no longer call this simply "decline"; the Ottoman state changed shape.',
          'Boyars: the system of precedence by family rank (mestnichestvo) was abolished in 1682; Peter the Great\'s Table of Ranks of 1722 made rank depend on service. Slide 16 tells it.'
        ],
        ask: 'What pushed the sipahis\' line down and the tax farmers\' line up?',
        listenFor: 'The state needed cash for armies with guns more than it needed cavalry, so it sold the right to collect taxes.',
        ap: 'KC-4.2.III.B. The CED\'s examples: Ottoman timars and Russian boyars.'
      }
    },
    {
      phase: 'boyars', kind: 'story-scene', eyebrow: 'Old Elites · Russia',
      kc: 'KC-4.2.III.B', title: 'Squeezed into service, and still privileged.',
      template: {
        steps: [
          { label: '1682', text: 'The old system of seats by family rank is ended.' },
          { label: 'Peter', text: 'Replaces the boyar council with a Senate he appoints.' },
          { label: 'Service', text: 'Nobles must shave, dress like western Europeans, and serve for life.' },
          { label: '1722', text: 'The Table of Ranks: place depends on rank earned.' },
          { label: 'Kept', key: true, text: 'Nobles keep their estates and their power over serfs.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Boyars were Russia\'s great noble families; they sat on the tsar\'s council (the Boyar Duma) and competed for posts by family precedence (mestnichestvo), abolished in 1682.',
          'Peter the Great (co-tsar from 1682, sole ruler from 1696, died 1725) replaced the council of boyars with a Senate he appointed in 1711; ordered officials and nobles to shave and wear Western clothing, with a beard tax for those who would not (sources date the decree 1698 or 1705, so no year is given); and required noblemen to serve the state for life. Compulsory noble service ended in 1762.',
          'The Table of Ranks, 1722: fourteen ranks in the army, the civil service and the court. Rank depended on service, and a commoner who reached a high enough rank gained hereditary nobility (the eighth civil grade). The title "boyar" fell out of use.',
          'What nobles kept: their estates and their power over serfs, which the Law Code of 1649 (4.6) had tightened and Peter\'s poll tax tightened further. They lost independence, not privilege.',
          'The picture: a portrait of Peter the Great in armor, oil on canvas, first half of the 1700s, which the Rijksmuseum (SK-A-116) attributes to an anonymous painter, probably Russian.'
        ],
        ask: 'Name one thing Russian nobles lost and one thing they kept.',
        listenFor: 'Lost: their council, seats by family rank, the freedom not to serve. Kept: estates, serfs, noble status.',
        ap: 'KC-4.2.III.B: an existing elite\'s power changed as a monarch grew stronger. Continuity and Change in one case.'
      }
    },
    {
      phase: 'nobles', kind: 'balance', eyebrow: 'Old Elites · France and England',
      kc: 'KC-4.2.III.B', title: 'Squeezed in one kingdom, winning in another.',
      template: {
        job: 'Face the king',
        left: { tag: 'France', name: 'Versailles', when: '1682', text: 'Nobles keep titles, land and tax freedom, and lose the power to defy the king.' },
        right: { tag: 'England', name: 'Parliament', when: '1688', text: 'Nobles invite William of Orange; James II flees; Parliament limits the monarchs after him.' },
        claimLabel: 'Fluctuated',
        claim: 'The power of old elites could fall **or rise**.'
      },
      notes: {
        minutes: 2,
        land: [
          'France: after the Fronde (4.6), Louis XIV sent royal officials, the intendants, to run the provinces (they had been withdrawn during the Fronde and were restored after it), and on 6 May 1682 moved his court and government to Versailles, where great nobles competed for his favor instead of raising armies at home. Topic 3.2 shows Versailles as a tool of rule; this slide shows it from the nobles\' side.',
          'Nobles kept their titles, their land and their exemption from the main direct tax, the taille (the capitation of 1695 did tax them, which is why the slide says "tax freedom" without "all"). What they lost was the power to defy the king.',
          'England: in 1688 seven leading Englishmen, nobles and a bishop among them, invited William of Orange to bring an army; James II fled; Parliament, of landowning nobles and gentry, offered the crown to William and Mary and set limits on the monarchy in the Bill of Rights of 1689.',
          'Pierre-Denis Martin\'s painting of 1722 (Château de Versailles), in the Evidence Lab, shows the palace and town with carriages and riders arriving, the year the young Louis XV brought the court back.'
        ],
        ask: 'Use these two cases to explain what "fluctuated" means.',
        listenFor: 'It went down in France, where the king took power from nobles, and up in England, where nobles and Parliament limited the king.',
        ap: 'KC-4.2.III.B. The CED\'s example: European nobility.'
      }
    },
    {
      phase: 'busbecq', kind: 'source-quote', eyebrow: 'A Claim to Test · 1555',
      title: 'An ambassador writes home about the Ottomans.',
      footer: 'Busbecq wanted reforms at home. Keep that in mind.',
      template: {
        quote: 'No distinction is attached to birth among the Turks ... It is by merit that men rise in the service ... with us there is no opening left for merit; birth is the standard for everything.',
        attribution: { author: 'Ogier Ghiselin de Busbecq, Habsburg ambassador to Suleiman', work: 'Turkish Letters, translated 1881', year: 'describing 1555' },
        notice: 'In your own words: what is Busbecq\'s argument?'
      },
      notes: {
        minutes: 1,
        land: [
          'Charles Thornton Forster and F. H. Blackburne Daniell, trans., The Life and Letters of Ogier Ghiselin de Busbecq (London, 1881), vol. I, pp. 154 to 155, the First Turkish Letter, describing his audience with Suleiman at Amasya in 1555. Public domain. The quotation joins three sentences from one passage, with the cuts shown.',
          'Busbecq (1522 to 1592), a Flemish noble, was ambassador at the Ottoman court from 1555 to 1562 for the Habsburg ruler Ferdinand I, then King of the Romans and from 1558 Holy Roman Emperor. The Fordham Internet History Sourcebook\'s headnote: "Because Busbecq was trying to bring about reform at home, he did not dwell on the very real problems with Ottoman government."',
          'His argument has two halves: among the Ottomans men rise by merit, not birth; in Europe, birth decides everything. Slide 19 tests the first half; the Skill Builder tests the second.',
          'Busbecq\'s portrait, engraved by Melchior Lorck in Constantinople in 1557 (Rijksmuseum RP-P-OB-49.753), is on the Skill Builder card.'
        ],
        ask: 'What is Busbecq\'s argument, in one sentence?',
        listenFor: 'Ottoman officials rise by ability, while in Europe your family decides your place.'
      }
    },
    {
      phase: 'test', kind: 'claim-evidence', eyebrow: 'Claims and Evidence in Sources 3.D · Model',
      title: 'Support, modify, or refute?',
      footer: 'Most strong answers modify: true, but only for some people.',
      template: {
        claim: 'Busbecq: among the Ottomans, **men rise by merit, not birth**.',
        evidence: [
          { text: 'Boys taken by the devshirme rose to be generals and grand viziers.', source: 'Supports' },
          { text: 'A Christian had to become Muslim to reach the top jobs.', source: 'Modifies' },
          { text: 'The throne stayed in one family: Suleiman inherited it from his father.', source: 'Modifies' }
        ],
        reasoning: 'Merit opened the sultan\'s service, but only to Muslims, and **the throne itself passed by birth**, so the claim is true for officials and not for the whole empire.'
      },
      notes: {
        minutes: 2,
        land: [
          'The suggested skill, 3.D: explain how claims or evidence support, modify, or refute a source\'s argument. Support: the evidence fits. Modify: it is true, but only for some people, places or times. Refute: the evidence shows the argument is wrong.',
          'Supports: devshirme recruits rose to the highest offices; Sokollu Mehmed Pasha, grand vizier from 1565 to 1579, began as a devshirme boy from Bosnia (Topic 3.2).',
          'Modifies: the top posts required conversion to Islam, and Christians and Jews paid the jizya and lived with limits (slide 8). The Ottoman dynasty inherited the throne.',
          'Push students past "it supports it" or "it refutes it" to the exact limit: for whom was it true?'
        ],
        ask: 'Is there any evidence that would refute Busbecq\'s claim about the Ottomans, not just modify it?',
        listenFor: 'Students might argue the sultan\'s family itself, or women\'s exclusion from offices, but most evidence modifies rather than refutes. Accept a defended answer.',
        ap: 'Claims and Evidence in Sources 3.D, modeled.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'The Ottomans gave everyone equal rights.', evidence: 'Christians and Jews were protected but paid the jizya and could not testify against a Muslim in an Islamic court.', source: 'Ottoman law' },
          { myth: 'Casta was a fixed chart everyone was locked into.', evidence: 'How a person was recorded could change with wealth, job and reputation.', source: 'Colonial records' },
          { myth: 'Old elites simply disappeared.', evidence: 'Russian and French nobles kept land and privilege; English nobles gained power.', source: 'Russia, France, England' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Row 1: accommodation is not equality. Do not swing to the opposite myth either: the arrangement was far more accommodating than Spain\'s in 1492.',
          'Row 2: the casta paintings show a fixed chart; colonial records show a society where categories were argued over and could change. But do not swing to "casta did not matter": ancestry still opened and closed doors.',
          'Row 3: "fluctuated" in KC-4.2.III.B. Elites lost some powers and kept or gained others.'
        ],
        ask: 'Which myth is the hardest to correct without making a new mistake?',
        listenFor: 'Any, with the opposite mistake named: "equal" versus "persecuted," "fixed" versus "meaningless," "gone" versus "unchanged."'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'continuity-change', eyebrow: 'The Whole Topic',
      title: 'The ladder stayed. The people on it moved.',
      footer: 'Conquest, new wealth and stronger rulers decided who moved where.',
      template: {
        date: '1450 to 1750',
        before: { tag: 'Before', items: ['Older nobles share power with rulers', 'Older rules decide who belongs'] },
        after: { tag: 'Changed', items: ['**Who belongs**: welcomed or used, pushed out or limited', '**New elites**: the Qing banners; peninsulares and creoles', '**Old elites squeezed**: sipahis, boyars, French nobles'] },
        continued: { tag: 'Stayed the same', items: ['A ruler who inherits power, on top', 'Privileged nobles beneath', 'Most people at the bottom; a woman\'s place set by her class'] }
      },
      notes: {
        minutes: 4,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw it from memory, with one case under each change.',
          'The three changes are the three Key Concepts in order, and the continuity is the "maintained" half of the learning objective. The slide carries no single Key Concept band because it spans all three.',
          'Push for named cases: Ottomans and Jewish refugees, Akbar and the Rajputs, Spain and Portugal, the Qing and the Han; the banners, peninsulares and creoles; sipahis and timars, boyars and the Table of Ranks, Versailles; England, where the old elite won.'
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
        minutes: 7,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 3.D Claims and Evidence in Sources.',
          'It models the move on the first half of Busbecq\'s argument (slide 19), ends the model with a sentence frame rather than a finished sentence, then gives students the second half, that in Europe "birth is the standard for everything," with three pieces of evidence: Louis XIV\'s nobles at Versailles, Peter\'s Table of Ranks, and French offices, such as judges\' seats in the Parlement of Paris, that families could buy and that could bring noble rank. Students decide whether each supports, modifies or refutes it.',
          'The Table of Ranks is the strongest modifier: a commoner could become a noble by rank. Russia is in Europe, so it tests Busbecq\'s "with us" directly.'
        ],
        ask: 'After students have written: which piece of evidence did the most damage to Busbecq\'s claim about Europe?',
        listenFor: 'Debrief only after the module: the Table of Ranks, because it let commoners rise by service.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'Who could belong.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.7. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It asks for one state that welcomed or used a group and one that pushed out or limited a group, with what each state gained (KC-4.3.I.B). Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name one state that made room for a group and one that pushed a group out.',
        listenFor: 'The Ottomans and the Jewish refugees, or Akbar and the Rajputs; Spain and Portugal, or the Qing and the Han.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'Who could belong, who could rise, or who was squeezed? Two sources, one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Six real objects: the Akbarnama painting of Akbar and the Rajputs; Vanmour\'s Armenian wedding and his lying-in room; the banner handscroll dated 1662; the casta painting of about 1715 to 1720; and Martin\'s Versailles of 1722.',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you. Vanmour painted for European buyers and could not have entered a wealthy woman\'s rooms; the casta painting is an elite\'s ideal. Both are good limits to name.',
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
        minutes: 10,
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
