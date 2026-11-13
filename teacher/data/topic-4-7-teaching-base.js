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
 * Class dates: Green Friday 2026-11-13, Silver Monday 2026-11-16. Required
 * modules, from the schedule (Jeff's Unit 4 module review, 2026-10-23): 02
 * First & 10, 05 Skill Builder, 06 Checkpoint 1, 09 BeInTheRoom (the Identity
 * Dossier) and 10 Checkpoint 2. Evidence Lab and Primary Source are optional,
 * so they have no slide. The deck predated that review: it launched 07
 * (Evidence Lab) and marked Checkpoint 1 optional, so until 2026-11-11 it and
 * the schedule disagreed. The schedule wins, as it did for 4.5.
 *
 * Outline and road map, 2026-11-11 (Jeff: "apply the new outline format
 * rebuild to 4.7, remove module slides, use 4.4 as a reference"). As on 4.4,
 * 4.5 and 4.6: `outline` below is the teaching outline the briefing shows
 * first (five section headers with short bullets, a what changed / what
 * stayed / why wrap, the First & 10 vocabulary with definitions, and the three
 * myths to watch for), and the run of show folds away under it. A road-map
 * slide before the First & 10 shows students the same five headers; every
 * story slide's eyebrow names its section (the 1662 banner picture has no
 * eyebrow, as 4.5's picture slides have none); minute counts are off the
 * projected slides (they stay in `flow` and the notes); MUST LAND keys sit on
 * every slide. Myth and Evidence moved into the outline's Watch for list and
 * the retelling slide's notes; Sharpen the Claim moved into the Work Time
 * notes; it and the four module slides (Skill Builder, Checkpoint 1, Evidence
 * Lab, Checkpoint 2) became one Work Time launch pad. No story slide changed.
 * 27 slides to 23.
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
      'Correct three myths on the retelling slide: "the Ottomans gave everyone equal rights," "casta was a fixed chart everyone was locked into," and "old elites simply disappeared."',
      'Show that one empire could change its own policy (Akbar and Aurangzeb) and treat one group differently by class (Ottoman women).'
    ],
    could: [
      'Use the Evidence Lab (Module 07, optional today) for students who finish the four required modules early.',
      'Point students who want more depth to the eBook chapter, "Who Belongs, Who Rises."'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "Who Belongs, Who Rises"; nothing is
  // new. Required modules are the schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '09 BeInTheRoom', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'The ladder stayed', kc: 'Unit 4: Learning Objective M', points: [
        'Continuity: every society ranked people; nobody built a society of equals',
        'A ruler who inherited power on top, privileged nobles beneath, most people at the bottom',
        'Change: who stood on which rung, and why',
        'Three kinds of change: who belongs, new elites, old elites squeezed',
        'The why: a state that conquered or grew rich needed soldiers, taxes, loyalty, one religion, control'
      ] },
      { label: 'II', title: 'Who could belong', kc: 'KC-4.3.I.B', groups: [
        { name: 'Pushed out, taken in', points: [
          'Spain, 1492: convert or leave; Portugal, 1497: baptized by force',
          'Bayezid II lets refugees settle: Istanbul, Salonica',
          'Why: Spain wanted one religion; the sultan wanted useful subjects',
          'Ottomans: Christians and Jews protected and self-run, but pay the jizya and face limits',
          'Room, not equality: Muslims stayed on top'
        ] },
        { name: 'It depends on the ruler, and the class', points: [
          'Akbar ends the jizya (1564), makes Rajput princes top commanders',
          'Aurangzeb brings the jizya back (1679), still employs many Hindu officers',
          'Ottoman women by class: Hürrem and Kösem at the top; town women in court; enslaved women with almost no say'
        ] }
      ] },
      { label: 'III', title: 'New elites at the top', kc: 'KC-4.2.III.A', groups: [
        { name: 'China, 1644', points: [
          'Manchu emperors and the banners: a new hereditary elite',
          'Limits on the Han: the queue (1645), paired Manchu and Han posts',
          'Continuity: the exams, Confucian officials, Han scholars in most jobs'
        ] },
        { name: 'Spanish America', points: [
          'Casta: ranked by ancestry and birthplace',
          'Peninsulares (born in Spain) get the highest offices',
          'Creoles, rich from silver, land and trade, resent them',
          'Casta paintings are an elite\'s ideal chart, not a census'
        ] }
      ] },
      { label: 'IV', title: 'Old elites squeezed', kc: 'KC-4.2.III.B', points: [
        'Sipahis held timars; guns and cash made them matter less',
        'Tax farms sold for life from 1695: tax farmers and local families rise',
        'Boyars: Peter\'s Senate, shaving, service for life, Table of Ranks (1722)',
        'Russian nobles kept estates and serfs: lost independence, not privilege',
        'France: Versailles (1682); nobles keep titles, land, tax freedom, lose the power to defy the king',
        'England, 1688: nobles and Parliament limit the crown, so "fluctuated" means up as well as down'
      ] },
      { label: 'V', title: 'Test a claim: Busbecq', kc: 'Skill 3.D · KC-4.3.I.B · KC-4.2.III.B', points: [
        'Busbecq, 1555: Ottomans rise by merit; in Europe, birth decides everything',
        'He wanted reforms at home',
        'Supports: devshirme boys rose to grand vizier',
        'Modifies: the top jobs required being Muslim; the throne passed by birth',
        'Skill Builder tests his European half'
      ], skill: 'You model 3.D out loud on Busbecq\'s Ottoman half: support, modify or refute, and for whom it was true. Students test his European half themselves in the Skill Builder; the Table of Ranks is the strongest modifier.' }
    ],
    wrap: { title: 'Put it together', columns: ['What changed', 'What stayed the same', 'Why'], rows: [
      { label: 'Who could belong', cells: ['Ottomans took in Jews, Akbar the Rajputs; Spain and Portugal pushed Jews out, the Qing limited the Han', 'Muslims on top in the Ottoman Empire; a woman\'s place set by her class', 'A ruler\'s choice: what the state needed, and the next ruler could reverse it'] },
      { label: 'New elites', cells: ['The Qing banners; peninsulares and rich creoles', 'The Chinese exams and officials; a hereditary ruler on top', 'Conquest and new wealth from silver, land and trade'] },
      { label: 'Old elites', cells: ['Sipahis, boyars and French nobles squeezed; English nobles won', 'Nobles kept land and privilege', 'Stronger rulers needed cash, armies with guns and loyalty'] }
    ] },
    vocabulary: [
      { term: 'Accommodation', def: 'Making room for a group\'s differences, such as its religion, without making it equal.' },
      { term: 'Jizya', def: 'A special tax that Christians and Jews (and, in Mughal India, Hindus) paid under Muslim rulers.' },
      { term: 'Rajputs', def: 'The Hindu warrior kings of northwestern India. Akbar married into their families and made their princes top commanders.' },
      { term: 'Banners', def: 'Hereditary Qing military units of Manchus, Mongols and early Han allies, paid by the state, with legal privileges: a new elite.' },
      { term: 'Queue', def: 'The Manchu hairstyle, front shaved and a long braid, that the Qing forced every Han man to wear from 1645.' },
      { term: 'Casta', def: 'The Spanish colonial ranking of people by ancestry: Spanish, Indigenous, African and mixed.' },
      { term: 'Peninsulares', def: 'People born in Spain. They got the highest offices in Spanish America, such as viceroy.' },
      { term: 'Creoles', def: 'People of Spanish ancestry born in the Americas. Many grew rich from silver, land and trade.' },
      { term: 'Timar', def: 'An Ottoman cavalryman\'s right to collect a piece of land\'s taxes, in return for riding to war. Not his to own.' },
      { term: 'Boyars', def: 'Russia\'s great noble families, who sat on the tsar\'s council until Peter the Great replaced it.' },
      { term: 'Table of Ranks', def: 'Peter the Great\'s fourteen ranks of service (1722). Place depended on rank earned, and a commoner who rose high enough became a noble.' },
      { term: 'Nobility', def: 'A privileged class, usually by birth, with titles, land and rights others did not have.' }
    ],
    watch: [
      { myth: '"The Ottomans gave everyone equal rights."', fix: 'Room, not equality: Christians and Jews paid the jizya and generally could not testify against a Muslim. Do not swing to "persecuted" either.' },
      { myth: '"Casta was a fixed chart everyone was locked into."', fix: 'How a person was recorded could change with wealth, job and reputation. But ancestry still opened and closed doors.' },
      { myth: '"Old elites simply disappeared."', fix: 'Russian and French nobles kept land and privilege; English nobles gained power. "Fluctuated."' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the three kinds of change, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.6, 3.2 and 4.4. Bridge to who ended up where.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Akbar\'s court.', students: 'Predict who might be welcomed or pushed out.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the five sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Who Belongs, Who Rises" in class.', students: 'For every case: what stayed, what changed.', slide: 5 },
    { id: 'ladder', label: 'The Ladder', range: '18-20', minutes: 2, teacher: 'The continuity, and the three kinds of change.', students: 'Name what stayed the same.', slide: 6 },
    { id: 'map', label: 'Where It Happened', range: '20-21', minutes: 1, teacher: 'The cases on one map, colored by kind.', students: 'Find one of each color.', slide: 7 },
    { id: 'expelled', label: 'Pushed Out, Taken In', range: '21-23', minutes: 2, teacher: 'Spain and Portugal; Bayezid II.', students: 'Say why each state did it.', slide: 8 },
    { id: 'room', label: 'Room, Not Equality', range: '23-25', minutes: 2, teacher: 'How the Ottomans governed Christians and Jews.', students: 'Name one right and one limit.', slide: 9 },
    { id: 'mughal', label: 'It Depends on the Ruler', range: '25-27', minutes: 2, teacher: 'Akbar and the Rajputs; Aurangzeb and the jizya.', students: 'Say what changed and what did not.', slide: 10 },
    { id: 'women', label: 'Women, by Class', range: '27-29', minutes: 2, teacher: 'One painting: a wealthy household and the enslaved woman in it.', students: 'Find the mistress and the enslaved woman.', slide: 11 },
    { id: 'qing', label: 'A New Elite in China', range: '29-32', minutes: 3, teacher: 'The banners, the queue, the exams kept.', students: 'Sort continuity and change.', slide: 12 },
    { id: 'banners', label: 'The Banners, 1662', range: '32-33', minutes: 1, teacher: 'A Manchu painter shows the new elite.', students: 'Find the banner and its label.', slide: 13 },
    { id: 'casta', label: 'A New Top in the Americas', range: '33-35', minutes: 2, teacher: 'The casta ranking, top to bottom.', students: 'Say what decided a person\'s rung.', slide: 14 },
    { id: 'castapainting', label: 'A Chart on Canvas', range: '35-37', minutes: 2, teacher: 'Read a casta painting as an elite\'s ideal.', students: 'Say what the painting wants you to believe.', slide: 15 },
    { id: 'castavideo', label: 'Pride and Anxiety (Video)', range: '37-43', minutes: 6, teacher: 'Smarthistory on a full casta set: who it was made for, and what it hides.', students: 'Name what the paintings want Spain to believe.', slide: 16 },
    { id: 'fortunes', label: 'Old Elites Rise and Fall', range: '43-45', minutes: 2, teacher: 'Sipahis down, tax farmers up, boyars down.', students: 'Say what pushed each line.', slide: 17 },
    { id: 'boyars', label: 'The Boyars', range: '45-47', minutes: 2, teacher: 'Peter\'s squeeze, and what nobles kept.', students: 'Name one loss and one thing kept.', slide: 18 },
    { id: 'nobles', label: 'France and England', range: '47-49', minutes: 2, teacher: 'Squeezed in France, winning in England.', students: 'Explain "fluctuated."', slide: 19 },
    { id: 'busbecq', label: 'A Claim to Test', range: '49-50', minutes: 1, teacher: 'Read Busbecq\'s argument.', students: 'Say his argument in your own words.', slide: 20 },
    { id: 'test', label: 'Support, Modify, Refute', range: '50-52', minutes: 2, teacher: 'Model 3.D on Busbecq.', students: 'Label each piece of evidence.', slide: 21 },
    { id: 'retell', label: 'The Ladder Stayed', range: '52-56', minutes: 4, teacher: 'Students redraw the continuity-and-change model from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 22 },
    { id: 'worktime', label: 'Work Time', range: '56-86', minutes: 30, teacher: 'Modules 05, 06, 09 and 10, in that order: the Skill Builder on Busbecq\'s European half, Checkpoint 1 with no coach, the Identity Dossier, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, the Identity Dossier, Checkpoint 2.', slide: 23 },
    { id: 'close', label: 'Landing Sentence', range: '86-88', minutes: 2, teacher: 'Land the answer and hand off to 4.8.', students: 'Say the topic in one sentence.', slide: 24 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'The ladder stayed. The people on it moved.',
      subtitle: 'Continuity and Change, with Claims and Evidence in Sources 3.D. Every case asks: what stayed the same about who held status, what changed, and why?',
      notes: {
        minutes: 2,
        keys: [
          'Spine: the ladder stayed, the people moved',
          'One objective, M: what stayed, what changed, why',
          'Three changes: who belongs, new elites, old squeezed',
          '"Fluctuated" includes England, where nobles won',
          'Skill 3.D: support, modify or refute Busbecq',
          'Leave Atlantic slavery and labor to 4.4',
          'Work Time: 05, 06, 09, 10'
        ],
        land: [
          'CED p. 89. One learning objective, M (Social Interactions and Organization): explain how social categories, roles, and practices have been maintained or have changed over time. The reasoning process is Continuity and Change (p. 75); the suggested skill is 3.D, explain how claims or evidence support, modify, or refute a source\'s argument.',
          'KC-4.3.I.B: many states, such as the Mughal and Ottoman empires, accommodated the ethnic and religious diversity of their subjects or used the contributions of different groups; in other cases states suppressed diversity or limited certain groups\' roles. KC-4.2.III.A: imperial conquests and widening global economic opportunities formed new political and economic elites, including the Qing transition and the casta system. KC-4.2.III.B: the power of existing elites fluctuated as they confronted increasingly powerful monarchs.',
          'The CED\'s illustrative examples (optional): the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire; restrictive policies against Han Chinese in Qing China; the varying status of different classes of women within the Ottoman Empire; Ottoman timars; Russian boyars; European nobility. All six are in this deck, each told briefly, because together they are the shortest route through all three Key Concepts.',
          'The CED\'s sample activity (p. 77) is a debate testing a historian\'s claim about religious toleration against evidence. This deck takes the move, not the article: slides 20 and 21 test Busbecq\'s 1555 claim; the Skill Builder (required) and the Primary Source (Montagu, 1717, optional today) do it again.',
          'Owns: who could belong (KC-4.3.I.B), new elites (KC-4.2.III.A), old elites squeezed (KC-4.2.III.B).',
          'Bridge only: Atlantic slavery and the labor systems (4.4; enslaved Africans appear only as the bottom of the casta ranking); the devshirme and Versailles as tools of rule (3.2, one clause each, from the elite\'s side); the Janissaries\' guns (3.1); the Fronde and the 1649 Law Code (4.6); which change mattered most (4.8, the hand-off).',
          'Three myths, corrected on the retelling slide (they had their own slide until 2026-11-11): "the Ottomans gave everyone equal rights"; "casta was a fixed chart everyone was locked into"; "old elites simply disappeared."',
          'Outline rebuild, 2026-11-11: a road map before the First & 10, section labels on the story slides, and one Work Time slide (Modules 05, 06, 09 and 10, the schedule\'s required modules since Jeff\'s Unit 4 review of 2026-10-23) in place of Myth and Evidence, Sharpen the Claim and the four module slides. The deck had launched the Evidence Lab and marked Checkpoint 1 optional; the Evidence Lab is now the early-finisher option. No story slide changed.',
          'Every picture in this deck is a real object of the period: an Akbarnama painting (about 1590 to 1595), two paintings by Jean Baptiste Vanmour of life in Istanbul (about 1720 to 1737), a Manchu painter\'s handscroll of 1662, a casta painting of about 1715 to 1720, and a portrait of Peter the Great. Busbecq\'s portrait (engraved in Constantinople, 1557) and Pierre-Denis Martin\'s Versailles of 1722 are on the lesson page. The map is the course\'s own. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'The ladder stayed, but empires decided who could belong and who could rise: new elites appeared, old ones were squeezed, and some groups were welcomed while others were pushed out.',
        avoid: 'Avoid turning 4.7 into Atlantic slavery or the plantation hierarchy. That is 4.4. And avoid ranking empires as "tolerant" or "intolerant"; name the policy, the date and what it bought the state.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
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
          'Fast answers, no reteaching',
          '4.6 hand-off: who ended up where?',
          'Prompt 2 returns at Versailles, slide 19',
          'Prompt 3 returns as casta\'s bottom rung'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: the Parlement of Paris and the nobles (the Fronde), peasants and Cossacks (Razin), the Marathas, Njinga, the Pueblos, the Wampanoag, maroons, the Stono rebels; Versailles, the devshirme, salaried officials, tax collectors who answered to the ruler; Indigenous workers under the encomienda or the mit\'a, enslaved Africans.',
          'The bridge is 4.6\'s hand-off in the unit story map, word for word.',
          'Prompt 2 returns on slide 19 (Versailles), from the nobles\' side. Prompt 3 returns as the bottom of the casta ranking on slide 14.'
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
          'Rajput ruler bows to Akbar, 1569',
          'Painted for Akbar\'s own history: his view',
          'Force first, then welcome and high rank',
          'Predict: why welcome Hindu rulers?'
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
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Who could belong, who could rise, who got squeezed?',
        stops: [
          { label: 'I', text: 'The ladder stayed' },
          { label: 'II', text: 'Who could belong' },
          { label: 'III', text: 'New elites at the top' },
          { label: 'IV', text: 'Old elites squeezed' },
          { label: 'V', text: 'Test a claim: Busbecq' },
          { label: '✓', text: 'Put it together: what stayed, what changed, why', key: true }
        ],
        thenLabel: 'Then',
        then: 'Skill Builder · Checkpoint 1 · BeInTheRoom · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Five sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the five headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to V), so the class can see where it is all period.',
          'Sections II, III and IV are the three Key Concepts in order (who belongs, new elites, old elites squeezed); section I is the continuity they all sit on; section V is the 3.D skill on Busbecq.',
          'The question at the top is the topic question, shortened to one line so the last stop fits the board; the full question is on the slide before.'
        ],
        ask: 'Which section do you expect the most change in?',
        listenFor: 'Any reasoned guess; return to it at the retelling slide.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read with two questions in mind.',
      subtitle: 'For every case: what stayed the same about who held power, and what changed?',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Sort each case: what stayed, what changed',
          'Notice Akbar and Aurangzeb: one empire, two policies',
          'Q3: test Busbecq\'s European half',
          'Answers reach Canvas via Gather'
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
      phase: 'ladder', kind: 'branch-tree', eyebrow: 'I · The Ladder Stayed',
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
          'Name what stayed first: students forget it',
          'Stayed: inherited rulers, nobles, most at bottom',
          'Nobody built a society of equals',
          'Changed: who stood where',
          'Three branches = the three Key Concepts',
          'Why: the state needed something'
        ],
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
      phase: 'map', kind: 'map', eyebrow: 'I · The Ladder Stayed · Map',
      kc: 'Unit 4: Learning Objective M', title: 'Who belonged, who rose, who was squeezed.',
      footer: 'The key sorts every case: who could belong, new elites, or old elites squeezed.',
      visual: { url: '../assets/images/instructional-maps/topic-4-7.svg', alt: 'World map with labeled dots at England, Versailles, Spain and Portugal, Salonica, Anatolia, Russia, Mughal India, Beijing and Mexico City, each with a date, shaded in three colors explained in the key' },
      notes: {
        minutes: 1,
        keys: [
          'Dots mark regions, not borders',
          'Gold: who could belong',
          'Plum: new elites',
          'Green: old elites squeezed, or winning',
          'Five regions: a joined-up world'
        ],
        land: [
          'The course\'s own instructional map, rebuilt for this story. Dots mark regions, not borders. Gold: who could belong (Spain and Portugal pushing Jews out, Salonica taking refugees in, Mughal India\'s jizya ended and restored). Plum: new elites (the Qing banners in Beijing, the casta ranking in Mexico City). Green: old elites squeezed, or winning (Anatolia\'s timars, Russia\'s Table of Ranks, Versailles, England in 1688).',
          'Point out the spread: Europe, Southwest Asia, South Asia, East Asia and the Americas. These changes were happening across the joined-up world of Unit 4.'
        ],
        ask: 'Find one place of each color.',
        listenFor: 'Any three, for example Salonica, Beijing and Russia.'
      }
    },
    {
      phase: 'expelled', kind: 'balance', eyebrow: 'II · Who Could Belong · 1492 to 1497',
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
        keys: [
          'Spain 1492: convert or leave',
          'Portugal 1497: baptized by force',
          'Say "tens of thousands": estimates disagree',
          'Bayezid II: refugees settle, Salonica',
          'Many exiles went elsewhere too',
          'Bayezid\'s famous quip: likely later, do not quote'
        ],
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
      phase: 'room', kind: 'story-scene', eyebrow: 'II · Who Could Belong · The Ottoman Empire',
      kc: 'KC-4.3.I.B', title: 'Room for difference, but not equality.',
      template: {
        steps: [
          { label: 'Protected', text: 'Christians and Jews may practice their religion.' },
          { label: 'Self-run', text: 'Their own leaders run marriage, inheritance, schools and family courts.' },
          { label: 'The price', text: 'They pay a special tax, the jizya.' },
          { label: 'The limits', key: true, text: 'In Islamic courts, generally no testimony against a Muslim; top jobs go to Muslims.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Protected subjects: worship, own family law',
          'Price: the jizya',
          'Limits: testimony, new churches, top posts',
          'Not a tidy "millet system" chart',
          'Devshirme: rise only by converting',
          'Armenian wedding in public: accommodation'
        ],
        land: [
          'Under Islamic law, Christians and Jews were protected subjects (dhimmis). In the Ottoman Empire their own religious authorities ran family law, worship, schooling and charity, and answered to the state for order and taxes. This agrees with Topic 3.2\'s chapter.',
          'Do not teach the "millet system" as one tidy empire-wide chart; that picture is largely a nineteenth-century formalization read backward (3.2 chapter). Arrangements were made community by community and city by city.',
          'The limits were real: the jizya; non-Muslims generally could not testify against a Muslim in an Islamic court, except in some commercial cases; restrictions on building new houses of worship; top military and government posts for Muslims. The devshirme (3.2) took Christian boys, converted them and trained them for service: a route to the top that required leaving one\'s family\'s religion.',
          'The picture: Jean Baptiste Vanmour, "Armenian Wedding," about 1720 to 1737 (Rijksmuseum SK-A-2001). The museum describes an Armenian wedding procession on its way to church for the blessing, with musicians, the groom, his father, the priest, and the women of the party, including the bride in red. Vanmour was a Flemish-born painter who lived in Istanbul and painted its peoples for European buyers. An Armenian Christian community celebrating in public in the Ottoman capital is accommodation at work.'
        ],
        ask: 'Name one thing Christians and Jews could do, and one thing they could not.',
        listenFor: 'Could: practice their religion, run their own family law and schools. Could not: testify against a Muslim in court, freely build new churches, hold top posts without converting.',
        ap: 'KC-4.3.I.B: accommodation, and its limits. Continuity: Muslims stayed on top.'
      }
    },
    {
      phase: 'mughal', kind: 'story-scene', eyebrow: 'II · Who Could Belong · Mughal India',
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
        keys: [
          'Akbar ends the jizya, 1564',
          'Marries into Rajput houses; princes command armies',
          'Why: armies and Hindu loyalty',
          'Aurangzeb restores the jizya, 1679',
          'Still many Hindu officers',
          'A ruler\'s choice; the next could reverse it'
        ],
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
      phase: 'women', kind: 'frame-letterbox', eyebrow: 'II · Who Could Belong · Women, by Class · Istanbul, about 1720 to 1737',
      kc: 'KC-4.3.I.B', title: 'Who has a say in this household?',
      subtitle: 'A wealthy mother receives visitors after a birth. At the lower left, the museum says, an enslaved woman makes sherbet for the guests.',
      notes: {
        minutes: 2,
        keys: [
          'A woman\'s place depended on her class',
          'Top: Hürrem and Kösem held real power',
          'Towns: women in court, property deals',
          'Law: half a son\'s share, testimony counts less',
          'Enslaved women: almost no say',
          'Vanmour likely reconstructed this room: say so'
        ],
        land: [
          'The picture: Jean Baptiste Vanmour, "Lying-in Room of a Distinguished Turkish Woman," about 1720 to 1737 (Rijksmuseum SK-A-2003). The museum describes visitors received in the house of a wealthy family after a birth: coffee brewing on the brazier in the middle, "an enslaved woman" on the left already making sherbet, rosewater and perfume for the guests, and cloths on the walls that were the visitors\' gifts. Vanmour painted for European buyers, and a European man probably would not have entered this room; it is likely his reconstruction from what he was told and saw elsewhere. Say so.',
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
      phase: 'qing', kind: 'continuity-change', eyebrow: 'III · New Elites at the Top · China, 1644',
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
        keys: [
          'Manchus take Beijing 1644: a small minority',
          'Banners: hereditary, state-paid, privileged',
          'Limits on Han: queue 1645, paired posts',
          'Kept: exams, Confucian officials, law codes',
          'Han scholars fill most jobs',
          'Do not say intermarriage was banned'
        ],
        land: [
          'The Manchus, whose ruler Hong Taiji had named the dynasty Qing in 1636, took Beijing in 1644 and began to rule China. They were a small minority ruling a Han majority; no population figure is given on the slide.',
          'The banners: hereditary military units of Manchus, Mongols and Han who joined the Manchus before 1644. Bannermen received state stipends, grain and housing in garrison quarters, and had legal privileges ordinary Han did not (Wikipedia, "Eight Banners"). In 1648 Manchus were a minority inside the banners themselves.',
          'The queue order of July 1645: adult Han men had to shave the front of the head and wear the Manchu braid, on pain of death. Many top posts in the capital went to two officials, one Manchu and one Han (dual appointment). The Willow Palisade, built in stages from the late 1630s to about 1680, restricted Han civilian settlement in the northeast, though it never fully worked and many Han crossed.',
          'Continuity: the Qing kept the Ming\'s civil service examinations, Confucian bureaucracy and law codes, and Han scholars filled most government jobs.',
          'Do not say the Qing "banned marriage between Manchus and Han." The rules changed over time; a 1648 decree allowed some such marriages.'
        ],
        ask: 'Sort it: which of these is continuity, which is change, and which is a limit on a group?',
        listenFor: 'Continuity: the exams and the officials. Change: Manchu emperors and the banner elite. Limits on the Han: the queue, the paired posts, the palisade.',
        ap: 'KC-4.2.III.A: "the transition to the Qing Dynasty" as a new elite. KC-4.3.I.B: the CED\'s example, restrictive policies against Han Chinese.'
      }
    },
    {
      phase: 'banners', kind: 'frame-subtitle',
      kc: 'KC-4.2.III.A',
      title: 'Painted in 1662, eighteen years after the Qing emperor entered Beijing: banner horsemen at one of the celebrations held for him.',
      notes: {
        minutes: 1,
        keys: [
          'Manchu painter, handscroll dated 1662',
          'Celebrates Shunzhi\'s entry into Beijing',
          'Riding and archery: the banner skills',
          'Yellow label: Plain Yellow Banner commander',
          'Met says "Ming"; date and subject are Qing'
        ],
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
      phase: 'casta', kind: 'ledger', eyebrow: 'III · New Elites at the Top · Spanish America',
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
        keys: [
          'Ranked by ancestry and birthplace',
          'Peninsulares: the highest offices',
          'Creoles: rich, a new economic elite, resentful',
          'Indigenous towns paid tribute',
          'Enslaved people could marry, sue, buy freedom',
          'Labor systems are 4.4\'s; this is rank'
        ],
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
      phase: 'castapainting', kind: 'frame-letterbox', eyebrow: 'III · New Elites · A Casta Painting · Mexico, about 1715 to 1720',
      kc: 'KC-4.2.III.A', title: 'A chart on canvas, not a census.',
      subtitle: 'In Spanish, the label says: from a mestizo and an Indian woman comes a coyote. Most casta labels never appear in official records.',
      notes: {
        minutes: 2,
        keys: [
          'One of the earliest casta series, c. 1715-1720',
          'An orderly chart for elite viewers',
          'Most labels never appear in records',
          'Recorded status could change with wealth',
          'But ancestry still opened and closed doors'
        ],
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
      phase: 'castavideo', kind: 'video', teacherOnly: true, eyebrow: 'III · New Elites · Video · Smarthistory',
      kc: 'KC-4.2.III.A', title: 'Pride and anxiety in New Spain',
      footer: 'Watch for one thing the paintings want a viewer in Spain to believe, and one thing they leave out.',
      video: { youtubeId: 'Opdr_qnGPcw', label: 'Pride and anxiety in New Spain: Francisco Clapera, set of sixteen casta paintings, c. 1775 (Smarthistory)' },
      notes: {
        minutes: 6,
        keys: [
          'Clapera, about 1775: after 1750',
          'Same genre: a chart, not a census',
          'Pride: show Spain the colony\'s wealth',
          'Anxiety: fear of mixing',
          'Stereotypes, not real life'
        ],
        land: [
          'Give the question before you press play: what do these paintings want a viewer in Spain to believe, and what do they leave out? The clip runs about five and a half minutes (Smarthistory, with Sabina Kull of the Denver Art Museum and Beth Harris).',
          'The set: Francisco Clapera, sixteen casta paintings, about 1775, Denver Art Museum, which Smarthistory describes as the only complete casta set in the United States. Clapera was a Spaniard working in New Spain. Say the date out loud: about 1775 is after this course period ends in 1750. Use it as the genre at its fullest, the same kind of chart as the Rodríguez Juárez painting on the last slide, not as new evidence for 1450 to 1750.',
          '"Pride" is pride in New Spain: many casta series were made to be sent to Spain, to show off the colony\'s wealth and the variety of its people. "Anxiety" is Spanish worry about mixing, and about people moving between categories, which is why the paintings put everyone in a labeled place.',
          'Land the same point as the painting slide: Smarthistory says these images did not reflect reality so much as stereotypes arranged along a biased, ranked scale. Do not swing to "casta did not matter": ancestry still opened and closed doors to office and honor.',
          'Six minutes came out of Work Time to fit the clip (Work Time is now 30 minutes). If the room is running long, skip the clip; the painting slide already carries the sourcing point.'
        ],
        ask: 'What did these paintings want a viewer in Spain to believe about New Spain, and what did they leave out?',
        listenFor: 'That the colony was rich and orderly, with everyone labeled and in a fixed place; they leave out that real people were recorded differently as their wealth and reputation changed, and that the labels were stereotypes, not records.',
        ap: 'KC-4.2.III.A. Sourcing (2.A): purpose and audience. Made for viewers in Spain, the paintings show an ideal order, not a count of real people.'
      }
    },
    {
      phase: 'fortunes', kind: 'timeline-fortunes', eyebrow: 'IV · Old Elites Squeezed · Rise and Fall',
      kc: 'KC-4.2.III.B', title: 'Sipahis and boyars fell. Others rose in their place.',
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
        keys: [
          'Lines show direction, not measured power',
          'Timar: tax rights for cavalry service, not owned',
          'Guns and cash beat cavalry, late 1500s',
          'Tax farms sold for life from 1695',
          'Tax farmers and local families rise',
          'Not "decline": the state changed shape'
        ],
        land: [
          'The lines are a teaching sketch of direction, not a measurement; the footer says so. They teach half of "fluctuated" in KC-4.2.III.B: old elites fell and other groups rose in their place. Slide 19 adds England, where an old elite won.',
          'Sipahis: a timar was the right to collect the taxes of a piece of land in return for service as a cavalryman; it was not the holder\'s property and was not supposed to pass automatically to his son (Halil İnalcık, The Ottoman Empire: The Classical Age). From the late 1500s, wars needed infantry with guns paid in cash, and the state turned more and more timar land into tax farms; from 1695 it sold them for life (malikane). The Topic 3.2 and 3.4 chapters tell the same move, "from timar-holding cavalry to tax farming and provincial notables."',
          'Tax farmers and powerful provincial families rose with the life-term tax farms (Wikipedia, "Ottoman Old Regime," on the 1695 malikane and provincial influence). Historians no longer call this simply "decline"; the Ottoman state changed shape.',
          'Boyars: the system of precedence by family rank (mestnichestvo) was abolished in 1682; Peter the Great\'s Table of Ranks of 1722 made rank depend on service. Slide 18 tells it.'
        ],
        ask: 'What pushed the sipahis\' line down and the tax farmers\' line up?',
        listenFor: 'The state needed cash for armies with guns more than it needed cavalry, so it sold the right to collect taxes.',
        ap: 'KC-4.2.III.B. The CED\'s examples: Ottoman timars and Russian boyars.'
      }
    },
    {
      phase: 'boyars', kind: 'story-scene', eyebrow: 'IV · Old Elites Squeezed · Russia',
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
        keys: [
          'Seats by family rank ended, 1682',
          'Peter: appointed Senate replaces boyar council',
          'Shave, dress Western, serve for life',
          'Table of Ranks 1722: commoners could become nobles',
          'Kept: estates and power over serfs',
          'Lost independence, not privilege'
        ],
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
      phase: 'nobles', kind: 'balance', eyebrow: 'IV · Old Elites Squeezed · France and England',
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
        keys: [
          'France: intendants, then Versailles, 1682',
          'Collaboration more than taming: offices, pensions',
          'Kept titles, land, tax freedom',
          'Lost the power to defy the king',
          'England 1688: nobles and Parliament limit the crown',
          '"Fluctuated": down in France, up in England'
        ],
        land: [
          'France: after the Fronde (4.6), Louis XIV sent royal officials, the intendants, to run the provinces (they had been withdrawn during the Fronde and were restored after it), and on 6 May 1682 moved his court and government to Versailles, where great nobles competed for his favor instead of raising armies at home. Historians now describe this as collaboration more than taming: the king kept the great nobles loyal with offices, pensions and army commands (William Beik, Past & Present, 2005). Topic 3.2 shows Versailles as a tool of rule; this slide shows it from the nobles\' side.',
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
      phase: 'busbecq', kind: 'source-quote', eyebrow: 'V · Test a Claim · 1555',
      title: 'An ambassador writes home about the Ottomans.',
      footer: 'Busbecq wanted reforms at home. Keep that in mind.',
      template: {
        quote: 'No distinction is attached to birth among the Turks ... It is by merit that men rise in the service ... with us there is no opening left for merit; birth is the standard for everything.',
        attribution: { author: 'Ogier Ghiselin de Busbecq, Habsburg ambassador to Suleiman', work: 'Turkish Letters, translated 1881', year: 'describing 1555' },
        notice: 'In your own words: what is Busbecq\'s argument?'
      },
      notes: {
        minutes: 1,
        keys: [
          'Habsburg ambassador to Suleiman, 1555',
          'Two halves: Ottoman merit, European birth',
          'He wanted reforms at home',
          'Next slide tests the Ottoman half',
          'Skill Builder tests the European half'
        ],
        land: [
          'Charles Thornton Forster and F. H. Blackburne Daniell, trans., The Life and Letters of Ogier Ghiselin de Busbecq (London, 1881), vol. I, pp. 154 to 155, the First Turkish Letter, describing his audience with Suleiman at Amasya in 1555. Public domain. The quotation joins three sentences from one passage, with the cuts shown.',
          'Busbecq (1522 to 1592), a Flemish noble, was ambassador at the Ottoman court from 1555 to 1562 for the Habsburg ruler Ferdinand I, then King of the Romans and from 1558 Holy Roman Emperor. The Fordham Internet History Sourcebook\'s headnote: "Because Busbecq was trying to bring about reform at home, he did not dwell on the very real problems with Ottoman government."',
          'His argument has two halves: among the Ottomans men rise by merit, not birth; in Europe, birth decides everything. Slide 21 tests the first half; the Skill Builder tests the second.',
          'Busbecq\'s portrait, engraved by Melchior Lorck in Constantinople in 1557 (Rijksmuseum RP-P-OB-49.753), is on the Skill Builder card.'
        ],
        ask: 'What is Busbecq\'s argument, in one sentence?',
        listenFor: 'Ottoman officials rise by ability, while in Europe your family decides your place.'
      }
    },
    {
      phase: 'test', kind: 'claim-evidence', eyebrow: 'V · Test a Claim · 3.D Model',
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
        keys: [
          'Model 3.D out loud',
          'Support fits; modify limits; refute overturns',
          'Supports: devshirme boys became grand viziers',
          'Modifies: top jobs needed conversion',
          'Modifies: the throne passed by birth',
          'Push for the exact limit: true for whom?'
        ],
        land: [
          'The suggested skill, 3.D: explain how claims or evidence support, modify, or refute a source\'s argument. Support: the evidence fits. Modify: it is true, but only for some people, places or times. Refute: the evidence shows the argument is wrong.',
          'Supports: devshirme recruits rose to the highest offices; Sokollu Mehmed Pasha, grand vizier from 1565 to 1579, began as a devshirme boy from Bosnia (Topic 3.2).',
          'Modifies: the top posts required conversion to Islam, and Christians and Jews paid the jizya and lived with limits (slide 9). The Ottoman dynasty inherited the throne.',
          'Push students past "it supports it" or "it refutes it" to the exact limit: for whom was it true?'
        ],
        ask: 'Is there any evidence that would refute Busbecq\'s claim about the Ottomans, not just modify it?',
        listenFor: 'Students might argue the sultan\'s family itself, or women\'s exclusion from offices, but most evidence modifies rather than refutes. Accept a defended answer.',
        ap: 'Claims and Evidence in Sources 3.D, modeled.'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'continuity-change', eyebrow: 'Put It Together · The Whole Topic',
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
          'Show it, hide it, redraw from memory',
          'One named case under each change',
          'Changes = the three Key Concepts',
          'Stayed = the "maintained" half of M',
          'Ask "why" for every change',
          'Correct the three myths from these rows'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw it from memory, with one case under each change.',
          'The three changes are the three Key Concepts in order, and the continuity is the "maintained" half of the learning objective. The slide carries no single Key Concept band because it spans all three.',
          'Push for named cases: Ottomans and Jewish refugees, Akbar and the Rajputs, Spain and the Jews it expelled, the Qing and the Han; the banners, peninsulares and creoles; sipahis and timars, boyars and the Table of Ranks, Versailles; England, where the old elite won.',
          'The three myths are corrected from this slide (they had their own slide until 2026-11-11). "The Ottomans gave everyone equal rights": Who belongs, where accommodation came with the jizya and Christians and Jews generally could not testify against a Muslim in an Islamic court; do not swing to the opposite myth either, since the arrangement was far more accommodating than Spain\'s in 1492. "Casta was a fixed chart everyone was locked into": New elites, where the paintings show a fixed chart but colonial records show categories argued over, and how a person was recorded could change with wealth, job and reputation; do not swing to "casta did not matter," since ancestry still opened and closed doors. "Old elites simply disappeared": Old elites squeezed, where Russian and French nobles kept land and privilege and English nobles gained power. That is "fluctuated" in KC-4.2.III.B.',
          'The myth hardest to correct without making a new mistake is any of them, with the opposite mistake named: "equal" versus "persecuted," "fixed" versus "meaningless," "gone" versus "unchanged."'
        ],
        ask: 'Redraw it without looking, with one case under each change.',
        listenFor: 'Stayed: hereditary rulers, privileged nobles, most people at the bottom. Changed: who belongs (Ottomans took in Jews; Spain pushed them out), new elites (the banners), old elites squeezed (the boyars).'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 09, 10',
      title: 'Now you do the history.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Test Busbecq: is birth everything in Europe?', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' },
          { code: 'Module 09', name: 'BeInTheRoom', note: 'The Identity Dossier.', url: '../beintheroom/unit-4/the-identity-dossier.html' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-4/lesson-4-7-changing-social-hierarchies.html#modules' }
        ]
      },
      notes: {
        minutes: 30,
        keys: [
          'All four required today, in order',
          'Skill Builder: Busbecq\'s European half',
          'Checkpoint 1: no coach',
          'Identity Dossier: Mexico City court, about 1715',
          'Checkpoint 2 unfinished = homework',
          'Evidence Lab: early finishers only',
          'Give feedback in the room'
        ],
        land: [
          'This one slide replaces six (Myth and Evidence moved to the retelling slide; Sharpen the Claim and the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-11). Modules 05, 06, 09 and 10 are all required today, from the schedule (Jeff\'s Unit 4 module review, 2026-10-23). Each button opens its module.',
          'The Skill Builder (Module 05) practices the CED\'s suggested skill, 3.D Claims and Evidence in Sources. It models the move on the first half of Busbecq\'s argument (slide 21), ends the model with a sentence frame rather than a finished sentence, then gives students the second half, that in Europe "birth is the standard for everything," with three pieces of evidence: Louis XIV\'s nobles at Versailles, Peter\'s Table of Ranks, and French offices, such as judges\' seats in the Parlement of Paris, that families could buy and that could bring noble rank. Students decide whether each supports, modifies or refutes it. The Table of Ranks is the strongest modifier: a commoner could become a noble by rank. Russia is in Europe, so it tests Busbecq\'s "with us" directly. Debrief only after students have written.',
          'Checkpoint 1 (Module 06), with no coach, asks for one empire that made room for or used a group (the Ottomans or Akbar) and one state that pushed out or limited a group (Spain or Qing China), what each did and gained, and for one case what changed and what stayed the same for the group (KC-4.3.I.B). Give feedback in the room: on an alternating block nothing carries over.',
          'The Identity Dossier (Module 09) is a composite court hearing in Mexico City around 1715: a wealthy widow of mixed ancestry asks to expand her cloth shop, join a business association that has kept her out, and have her children recorded. Students make three rulings: how to classify her (by family records, by family, status and reputation together, or by freedom and residence only), whether the association must admit her, and what to record for her children. It is the casta slides (14 and 15) as a decision: the official ranking was powerful, but real status also depended on wealth, gender, reputation and community. Debrief with the spine: the ladder stayed, but where a person stood on it could be argued.',
          'Checkpoint 2 (Module 10) asks for one new elite (the Qing banners, or peninsulares and creoles in the casta ranking) and how conquest or new trade made it, one old elite (Ottoman sipahis, Russian boyars or French nobles) and how its power changed as rulers grew stronger, with one thing it lost and one thing it kept, and one thing about the top of society that stayed the same. That is KC-4.2.III.A and KC-4.2.III.B, run through continuity and change. Socrates is told the skill is Continuity and Change, so it will push for what stayed the same as well as what changed. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud (it was the Sharpen slide): "Between 1450 and 1750, ___ stayed the same, but ___ changed, because ___." It is a frame, not a model answer; do not write a finished claim on the board. The weak version, "Society changed a lot between 1450 and 1750," names no society, no group, no continuity and no cause.',
          'Early finishers: the Evidence Lab (Module 07, optional today) builds one claim from two of six real objects (the Akbarnama painting, Vanmour\'s wedding and lying-in room, the 1662 banner handscroll, the casta painting, Martin\'s Versailles of 1722): what the source shows, what it suggests, and what it cannot tell you. The Primary Source (Montagu on Ottoman women, 1717) is optional too.'
        ],
        ask: 'Does your answer name what stayed the same, what changed, a named case for each, and why it changed?',
        listenFor: 'Skill Builder: the Table of Ranks modifies Busbecq. Checkpoint 1: the Ottomans and Jewish refugees, or Akbar and the Rajputs; Spain, or the Qing and the Han. Checkpoint 2: the banners made by the Qing conquest; the boyars squeezed into service by Peter; a hereditary ruler still on top.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'The ladder stayed. The people on it moved, and conquest, new wealth and stronger rulers decided who moved where.',
      subtitle: 'Next: trade, work and the ladder itself all moved between 1450 and 1750. Which change mattered most, and what stayed the same?',
      notes: {
        minutes: 2,
        keys: [
          'The casta painting again: a ladder painted fixed',
          'The sentence answers objective M',
          'Stayed, changed, and the cause',
          'Hand off to 4.8: which change mattered most?'
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
