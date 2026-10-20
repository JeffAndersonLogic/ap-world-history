/*
 * Topic 5.1 canonical Teaching OS source.
 * CED: Fall 2026 pp. 98 to 99 (scripts/lib/ced-source/unit-5.js). Reasoning
 * process: Continuity and Change. Suggested skill: 3.A Claims and Evidence in
 * Sources. Two learning objectives: A, explain the intellectual and
 * ideological context in which revolutions swept the Atlantic world from 1750
 * to 1900; B, explain how the Enlightenment affected societies over time. Key
 * Concepts: KC-5.3.I.A, KC-5.3.I, KC-5.3.II.i (LO A); KC-5.3.I.C, KC-5.3.IV.B
 * (LO B).
 * Story: docs/TOPIC-5-1-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "By What
 * Right?" is written from the same story, and this deck retells it.
 * Spine: Enlightenment thinkers asked every old authority a new question, "by
 * what right?", and answered it with reason, natural rights and the consent of
 * the people. The words reached further than the men who wrote them.
 * Wall version: By what right? The answer kept growing.
 * Retelling slide: the cause chain (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.1',
    minutes: 90,
    title: 'The Enlightenment',
    subtitle: 'Enlightenment thinkers asked every old authority a new question, "by what right?", and answered it with reason, natural rights and the consent of the people. The words reached further than the men who wrote them.',
    essentialQuestion: 'Who does a state belong to? How did Enlightenment ideas change the answer, and how far did the new rights reach by 1900?',
    apFocus: 'Continuity and Change, with Claims and Evidence in Sources 3.A',
    endTarget: 'Students can explain the old answer to "who does a state belong to?" (God, tradition, birth) and the Enlightenment\'s new one (reason and evidence; natural rights, the social contract, limits on power, religious toleration); explain that the ideas spread and came before the Atlantic revolutions, and turned "the people" into the nation; follow the ideas over time into the reform movements that ended slavery and serfdom, widened the vote and demanded women\'s rights, driven by Enlightenment ideas and by religious faith; name what had still not changed by 1900; and identify and describe the claim in a source such as de Gouges, Wollstonecraft or the Seneca Falls declaration.'
  },

  priorities: {
    must: [
      'Answer both learning objectives: the ideas as the context of the revolutions (LO A), and what the ideas did to societies over time, to 1900 (LO B). The old lesson never assessed LO B.',
      'Teach the change in what made a ruler legitimate: from God and birth to reason and the consent of the people (KC-5.3.I.A).',
      'Say "came before," not "caused": the CED says Enlightenment thought "often preceded" revolutions (KC-5.3.I). Topic 5.2 owns the revolutions.',
      'Teach the continuity as hard as the change: the rights took a century to reach the enslaved, the serfs and the voters, and women\'s votes almost nowhere by 1900.',
      'Model 3.A: find the claim in a source, say it in your own words, and say what it argues against.'
    ],
    should: [
      'Give religion its two parts: the Enlightenment questioned religion as a government power (Calas, toleration), and religious faith drove the reform movements (the Quakers, Lucretia Mott) (KC-5.3.I.A, KC-5.3.I.C).',
      'Introduce nationalism in one beat: if a state belongs to its people, which people? The nation (KC-5.3.II.i).',
      'Correct three myths: "the Enlightenment caused the revolutions," "the Enlightenment was against religion," and "rights reached everyone in 1789."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "By What Right?"',
      'Use the Primary Source (the Seneca Falls declaration) as an extension for early finishers.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, both objectives, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.8, 3.2 and 4.6. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the air-pump experiment.', students: 'Predict what is new in the room.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "By What Right?" in class.', students: 'Keep two lists: changes and continuities.', slide: 4 },
    { id: 'oldanswer', label: 'The Old Answer', range: '17-18', minutes: 1, teacher: 'God, tradition, birth.', students: 'Name where each authority came from.', slide: 5 },
    { id: 'method', label: 'A New Way of Knowing', range: '18-20', minutes: 2, teacher: 'Reason and evidence, first for nature, then for people.', students: 'Say what empiricism means.', slide: 6 },
    { id: 'answers', label: 'The New Answers', range: '20-22', minutes: 2, teacher: 'Natural rights, the social contract, limits on power.', students: 'Match each idea to its writer.', slide: 7 },
    { id: 'locke', label: 'Locke\'s Claim', range: '22-24', minutes: 2, teacher: 'Read Locke and find the claim.', students: 'Say the claim in your own words.', slide: 8 },
    { id: 'calas', label: 'Religion and the State', range: '24-26', minutes: 2, teacher: 'The Calas case and toleration.', students: 'Say what Voltaire questioned and what he did not.', slide: 9 },
    { id: 'legitimate', label: 'What Changed', range: '26-27', minutes: 1, teacher: 'What made a ruler legitimate, before and after.', students: 'Sort change and continuity.', slide: 10 },
    { id: 'spread', label: 'The Ideas Travel', range: '27-29', minutes: 2, teacher: 'The Encyclopédie, reprinted and explaining everything.', students: 'Say what the two pages prove.', slide: 11 },
    { id: 'before', label: 'Before the Revolutions', range: '29-30', minutes: 1, teacher: 'The ideas came first.', students: 'Read the timeline left to right.', slide: 12 },
    { id: 'nation', label: 'The People Become a Nation', range: '30-32', minutes: 2, teacher: 'From "the people" to nationalism.', students: 'Answer: which people?', slide: 13 },
    { id: 'turn', label: 'The Words Were Bigger', range: '32-33', minutes: 1, teacher: 'The writers did not mean everyone. The words did.', students: 'Say who was left out.', slide: 14 },
    { id: 'abolition', label: 'Abolition', range: '33-35', minutes: 2, teacher: 'Ideas and faith together, over a century.', students: 'Name what drove the movement.', slide: 15 },
    { id: 'serfs', label: 'Serfs and Voters', range: '35-36', minutes: 1, teacher: 'Serfdom ends; the vote widens, in steps.', students: 'Say how slow each change was.', slide: 16 },
    { id: 'women', label: 'Women Demand Their Rights', range: '36-38', minutes: 2, teacher: 'De Gouges, Wollstonecraft, Seneca Falls.', students: 'Name what each woman demanded.', slide: 17 },
    { id: 'seneca', label: 'Seneca Falls, 1848', range: '38-40', minutes: 2, teacher: 'Read the declaration\'s first truth.', students: 'Find the two added words.', slide: 18 },
    { id: 'claim', label: 'Find the Claim', range: '40-42', minutes: 2, teacher: 'Model 3.A on Wollstonecraft.', students: 'Fill the frame aloud.', slide: 19 },
    { id: 'pair', label: 'Same Words, Wider Claim', range: '42-44', minutes: 2, teacher: 'De Gouges beside the 1789 article she rewrote.', students: 'Describe her claim.', slide: 20 },
    { id: 'skill', label: 'Skill Builder', range: '44-52', minutes: 8, teacher: 'Module 05: Claims and Evidence in Sources 3.A.', students: 'Find and describe three claims.', slide: 21 },
    { id: 'stayed', label: 'What Changed by 1900, What Stayed', range: '52-54', minutes: 2, teacher: 'The ideas changed fast; the world changed slowly.', students: 'Name the biggest continuity.', slide: 22 },
    { id: 'myths', label: 'Myth and Evidence', range: '54-56', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 23 },
    { id: 'retell', label: 'By What Right?', range: '56-60', minutes: 4, teacher: 'Students redraw the chain from memory, with what stayed underneath.', students: 'Retell the whole topic.', slide: 24 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: the ideas as the context of the revolutions.', students: 'Work without the coach.', slide: 25 },
    { id: 'evidence', label: 'Evidence Lab', range: '60-67', minutes: 7, teacher: 'Module 07: two sources, two claims.', students: 'Observe, then infer, then name a limit.', slide: 26 },
    { id: 'cp2', label: 'Checkpoint 2', range: '67-79', minutes: 12, teacher: 'Module 10: what the Enlightenment changed over time, and what stayed. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 27 },
    { id: 'close', label: 'Landing Sentence', range: '79-81', minutes: 2, teacher: 'Land the answer and hand off to 5.2.', students: 'Say the topic in one sentence.', slide: 28 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.1', url: '../unit-5/lesson-5-1-enlightenment.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-1-enlightenment-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-1-enlightenment.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-1-slide',
    title: 'Topic 5.1 Presentation',
    file: 'present-topic-5-1.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'By what right? The answer kept growing.',
      subtitle: 'Continuity and Change, with Claims and Evidence in Sources 3.A. What changed in how people thought about power, how far the new rights reached by 1900, and what stayed the same?',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 98 to 99. Two learning objectives. A (Cultural Developments and Interactions): explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900. B (Social Interactions and Organization): explain how the Enlightenment affected societies over time. The reasoning process is Continuity and Change (p. 95); the suggested skill is 3.A, identify and describe a claim and/or argument in a text-based or non-text-based source.',
          'Key Concepts. LO A: KC-5.3.I.A (new ways of understanding and empiricist approaches to the natural world and human relationships; religion\'s role in public life reexamined; reason; new political ideas about the individual, natural rights and the social contract); KC-5.3.I (the rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions); KC-5.3.II.i (nationalism became a major force shaping states and empires). LO B: KC-5.3.I.C (Enlightenment ideas and religious ideals influenced reform movements that expanded rights: suffrage, the abolition of slavery, the end of serfdom); KC-5.3.IV.B (demands for women\'s suffrage and an emergent feminism challenged political and gender hierarchies).',
          'The CED\'s illustrative examples, printed beside LO B under "Demands": Wollstonecraft\'s Vindication; de Gouges\'s Declaration of the Rights of Woman and of the Female Citizen; the Seneca Falls Conference (1848) organized by Stanton and Mott. All three are used, slides 17 to 20, as sources with claims in them. The CED gives 5.1 no sample activity.',
          'Owns: the ideas, their spread, nationalism introduced, the reform movements and women\'s demands. Bridge only: the revolutions and their documents (5.2): the dates, two lines from the 1789 declaration (Article 3 on the nation, slide 13, and Article 1, the line de Gouges rewrote, slide 20), Nariño. Not taught: Adam Smith and free trade (5.7), reforms that answered industry (5.8).',
          'Three myths, on slide 23: "the Enlightenment caused the revolutions"; "the Enlightenment was against religion"; "rights reached everyone in 1789."',
          'Every picture is a real object of the period from the Metropolitan Museum of Art\'s open-access collection, public domain: Valentine Green\'s mezzotint of Joseph Wright\'s air-pump experiment (1769); the title page of the Encyclopédie\'s second edition, printed at Lucca, Italy (1758); a plate of a fan-maker\'s workshop from its picture volumes (Paris, 1762 to 1772); a pottery jug printed with "Am not I a man and a brother", a version of the 1787 motto (about 1820); and Samuel Jennings\'s study for Liberty Displaying the Arts and Sciences (about 1791 to 1792). None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Enlightenment thinkers changed the answer to "who does a state belong to?" from a king by God\'s will to the people, by reason and consent; over the next century reformers pressed those words until rights reached the enslaved, the serfs and more voters, while women\'s votes and much of the old order still waited in 1900.',
        avoid: 'Avoid a roll call of philosophers with dates. Every name is evidence for one idea. And avoid "the Enlightenment caused the French Revolution": the CED says the ideas came first, and 5.2 owns the causes.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.8', text: 'Name one way the new global economy changed who did the work between 1450 and 1750.' },
          { label: 'Topic 3.2', text: 'Where did Louis XIV say his power came from?' },
          { label: 'Topic 4.6', text: 'Name one group that pushed back against a stronger state.' }
        ],
        turn: '4.8 ended: **by 1750 the oceans were joined and states were stronger than ever. Who do those states belong to?** Louis XIV said: to the king, by God\'s will. Today a group of writers asks a dangerous question about that answer.'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: millions of enslaved Africans forced onto plantations; Andean men drafted for the mine at Potosí; peasants and artisans working more for buyers far away. From God, divine right. The Fronde, the Pueblo Revolt, Cossack revolts, the Marathas, Ana Nzinga, Metacom\'s War, Maroon communities.',
          'The bridge is 4.8\'s hand-off in the unit story map, word for word.',
          'Prompt 2 returns on slide 5 (the old answer). Prompt 3 returns on slide 14: people who were left out pushed back with the new words.'
        ],
        ask: 'Louis XIV said God gave him his power. What would you need to prove him wrong?',
        listenFor: 'A different source of power, or evidence that his claim does not hold. That is today\'s question.',
        ap: 'Retrieval plus bridge: 4.8 asked who states belong to; 5.1 is the new answer.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'Who does a state belong to?',
      subtitle: 'How did a new way of thinking change the answer, and how far did the new rights reach by 1900?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real print: Valentine Green\'s mezzotint (London, 1769) of Joseph Wright of Derby\'s painting An Experiment on a Bird in the Air Pump (1768, National Gallery, London). A traveling lecturer pumps the air out of a glass globe with a bird inside to show that living things need air; a family watches by candlelight, some fascinated, two girls upset. Metropolitan Museum of Art 49.95.14, public domain.',
          'Why open here: the picture is the Enlightenment\'s method, finding out by experiment, shown to ordinary people in a home. Wright painted scenes like this because science lectures were a popular entertainment.',
          'The question is both learning objectives in a ninth grader\'s words: the new way of thinking is LO A, how far the rights reached is LO B.'
        ],
        ask: 'Predict: what is new about how the people in this room are finding out what is true?',
        listenFor: 'They are watching an experiment and seeing for themselves, not being told by a priest or an old book.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with two lists in mind.',
      subtitle: 'What changed in how people thought about power, and who gained rights? What stayed the same?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-1-enlightenment-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "By What Right?" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who keep both lists, and who follow the ideas past 1789 into the 1800s.',
          'Question 02 is the topic\'s 3.A practice: de Gouges\'s claim and what she argued against. Question 03 is LO B. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which change surprised you most, and which continuity?',
        listenFor: 'Brazil ending slavery only in 1888; Seneca Falls borrowing the Declaration of Independence; women voting almost nowhere by 1900.'
      }
    },
    {
      phase: 'oldanswer', kind: 'story-steps', eyebrow: 'The Old Answer · About 1750',
      title: 'Power came from God, tradition and birth.',
      template: {
        steps: [
          { label: 'God', text: 'Kings said God chose them: divine right.' },
          { label: 'Tradition', text: 'In most countries one church was the law.' },
          { label: 'Birth', key: true, text: 'Nobles were born to privilege; serfs were born to work.' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'Context for KC-5.3.I: the "established traditions" the ideas questioned. No Key Concept band: this is what came before.',
          'God: divine right, Louis XIV in Topic 3.2. Tradition: an official church in most European states, Catholic in France and Spain, Anglican in England; Protestants in France had lost their legal toleration in 1685. Birth: nobles with legal privileges, such as exemption from some taxes in France; serfs bound to their lord\'s land across much of central and eastern Europe.',
          'Keep it short: this slide is the "before" of a continuity-and-change answer.'
        ],
        ask: 'Which of the three could you question without questioning the other two?',
        listenFor: 'None easily: the king\'s right came from God, the church backed the king, and birth decided who ruled under him.',
        ap: 'Continuity and Change: name what was already true.'
      }
    },
    {
      phase: 'method', kind: 'cause-chain', eyebrow: 'A New Way of Knowing',
      kc: 'KC-5.3.I.A', title: 'Reason and evidence, first for nature, then for people.',
      footer: 'Learning from evidence and experience instead of authority: empiricism.',
      template: {
        steps: [
          { label: 'Newton, 1687', text: 'A few laws explain the planets and a falling apple' },
          { label: 'Locke, 1689', text: 'Knowledge comes from experience: the mind starts as "white paper"' },
          { label: 'The method', text: 'Test claims with reason and evidence', key: true },
          { label: 'The question', text: 'Can reason explain people, and how they should be governed?' }
        ],
        links: ['then', 'so', 'until']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.I.A: Enlightenment philosophies "applied new ways of understanding and empiricist approaches to both the natural world and human relationships" and "emphasized the importance of reason."',
          'Newton, Principia (1687): laws of motion and universal gravitation, worked out with mathematics and tested against astronomers\' observations. Locke, An Essay Concerning Human Understanding (published December 1689, dated 1690), Book II, chapter 1: "Let us then suppose the mind to be, as we say, white paper, void of all characters." Empiricism: knowledge from experience and evidence.',
          'The turn on the last box is the whole topic: the same method, pointed at government, religion and society.'
        ],
        ask: 'What does "white paper" mean about where ideas come from?',
        listenFor: 'We are not born knowing things; we learn from experience, so we can test what authorities tell us.',
        ap: 'KC-5.3.I.A.'
      }
    },
    {
      phase: 'answers', kind: 'branch-tree', eyebrow: 'The New Answers',
      kc: 'KC-5.3.I.A', title: 'Start with the individual, not the king.',
      footer: 'New political ideas about the individual, natural rights and the social contract.',
      template: {
        claimLabel: 'The new answer',
        claim: 'Power must be **rightful and limited**.',
        branches: [
          { label: 'Natural rights', note: 'Born with rights no government gives', items: ['Locke, 1689', '"lives, liberties and estates"'] },
          { label: 'Social contract', note: 'Government is an agreement', items: ['Locke: consent', 'Rousseau, 1762'] },
          { label: 'Limits on power', note: 'Split power among different hands', items: ['Montesquieu, 1748'] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.I.A: "Philosophers developed new political ideas about the individual, natural rights, and the social contract."',
          'Natural rights: Locke, Second Treatise of Government (1689), §123, the "mutual preservation of their lives, liberties and estates, which I call by the general name, property"; government exists to protect them.',
          'Social contract: Locke §95, no one can be put under another\'s political power "without his own consent"; §222, a legislature that tries to destroy the people\'s property or enslave them puts itself "into a state of war with the people, who are thereupon absolved from any farther obedience." Rousseau, The Social Contract (1762), opens: "Man is born free; and everywhere he is in chains" (Cole translation). Rousseau grounds legitimate power in the general will of the people, a more collective idea than Locke\'s.',
          'Limits on power: Montesquieu, The Spirit of the Laws (1748), Book XI, on separating legislative, executive and judicial power.',
          'A myth to head off: the philosophers did not all agree. Locke protected individual rights against government; Rousseau put the people as a whole first; Montesquieu admired England\'s mixed monarchy; few of them wanted to abolish kings.'
        ],
        ask: 'Which idea is the most direct challenge to divine right?',
        listenFor: 'The social contract: if government rests on consent, it does not rest on God\'s choice of a king.',
        ap: 'KC-5.3.I.A.'
      }
    },
    {
      phase: 'locke', kind: 'source-quote', eyebrow: 'Claims and Evidence in Sources 3.A',
      kc: 'KC-5.3.I.A', title: 'Find Locke\'s claim.',
      template: {
        quote: 'Men being ... by nature, all free, equal, and independent, no one can be put out of this estate, and subjected to the political power of another, without his own consent.',
        attribution: { author: 'John Locke', work: 'Second Treatise of Government, section 95', year: 'London, 1689' },
        notice: 'What does Locke say every person is born? What does a government need before it can rule them?'
      },
      notes: {
        minutes: 2,
        land: [
          'Second Treatise, §95, word for word from the 1690-dated text (Project Gutenberg #7370); the cut is "as has been said,". "This estate" means this condition, being free and equal, not land.',
          'The claim, in a student\'s words: government is rightful only when the people it rules have agreed to it. What it argues against: divine right and inherited power.',
          'Point of view, briefly: most scholars place most of the writing of the Two Treatises in the Exclusion Crisis, about 1679 to 1683, when some in Parliament tried to keep the Catholic James, Duke of York, from the throne; the exact dating is debated (Laslett argued for 1679 to 1681, Ashcroft for 1681 to 1683). Locke published it in 1689, just after Parliament replaced James II in the Glorious Revolution. Either way it defended the right to resist a king.'
        ],
        ask: 'Say Locke\'s claim in your own words. What older idea is he arguing against?',
        listenFor: 'Government needs the consent of the people it rules, against the idea that God gives kings power.',
        ap: 'KC-5.3.I.A. 3.A: identify and describe a claim.'
      }
    },
    {
      phase: 'calas', kind: 'case-file', eyebrow: 'Religion and the State · Toulouse, 1762',
      kc: 'KC-5.3.I.A', title: 'Should a government force a faith?',
      template: {
        tag: 'Case',
        place: 'Toulouse, France',
        date: '1762 to 1765',
        rows: [
          { label: 'Accused', text: 'Jean Calas, a **Protestant** merchant, wrongly accused of killing his son.' },
          { label: 'Executed', text: 'Tortured and put to death in **1762**.' },
          { label: 'Voltaire', text: 'Campaigns three years; writes a Treatise on Tolerance, **1763**.' },
          { label: 'Result', text: 'Calas is declared innocent in **1765**.' }
        ],
        proves: 'The question was religion as a power of government, not faith itself.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.I.A: Enlightenment philosophies "reexamined the role that religion played in public life."',
          'Jean Calas, a Protestant cloth merchant of Toulouse, was accused of killing his son Marc-Antoine to stop him becoming a Catholic; the son had most likely taken his own life. The Parlement of Toulouse condemned Calas and he was broken on the wheel and executed on 10 March 1762. Voltaire took up the case, published the Treatise on Tolerance in 1763, and the judgment was overturned; Calas was declared innocent on 9 March 1765 (Musée protestant; Universalis).',
          'Religious toleration: no government should force a faith or punish belief. Deism: God made the world and lets it run by natural laws. Many Enlightenment writers were deists or believers; few were atheists. What they questioned was faith enforced by the state.'
        ],
        ask: 'What did Voltaire question, and what did he not?',
        listenFor: 'He questioned a government punishing people for their religion; he did not ask people to give up faith.',
        ap: 'KC-5.3.I.A.'
      }
    },
    {
      phase: 'legitimate', kind: 'continuity-change', eyebrow: 'What Changed',
      kc: 'Unit 5: Learning Objective A', title: 'The question changed before the kings did.',
      footer: 'What changed first was what made a ruler rightful.',
      template: {
        date: '1690 to 1790',
        before: { tag: 'The old answer', items: ['Rulers are rightful by God\'s will and birth', 'One church is the law'] },
        after: { tag: 'The new answer', items: ['Government needs the consent of the people', 'Rights come with being born human', 'No faith forced by the state'] },
        continued: { tag: 'Continued', items: ['Kings still ruled almost everywhere', 'Most people kept their faith'] }
      },
      notes: {
        minutes: 1,
        land: [
          'The continuity-and-change point of LO A: by 1789 the ideas had changed what many educated people believed a government owed them, while almost every state was still a monarchy.',
          'Legitimate means rightful. A ruler can have power without being legitimate; the Enlightenment changed what made power rightful.'
        ],
        ask: 'Which changed first, the rulers or the question?',
        listenFor: 'The question: kings kept ruling while people began to ask what gave them the right.',
        ap: 'KC-5.3.I.A. Continuity and Change.'
      }
    },
    {
      phase: 'spread', kind: 'frame-pair', eyebrow: 'The Ideas Travel',
      kc: 'KC-5.3.I', title: 'A book that tried to explain everything.',
      template: {
        panels: [
          { tag: 'Reprinted in Lucca, Italy, 1758', text: 'The Encyclopédie was copied **outside France**.' },
          { tag: 'Picture volumes, Paris, 1762 to 1772', text: 'Even **how a fan is made**, explained step by step.' }
        ],
        rows: [
          { label: 'Made', text: 'Diderot and his partners, Paris, **1751 to 1772**: 17 volumes of articles and 11 of pictures.' },
          { label: 'Banned', text: 'The French government banned it in 1759; the volumes **kept coming out**.' }
        ],
        proves: 'The ideas spread, and questioned tradition in every part of life.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.I: "The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life."',
          'Left: the title page of volume 1 of the second edition, printed at Lucca, Italy, in 1758, with added notes by Ottaviano Diodati (Metropolitan Museum of Art, Watson Library, Bequest of Marianne Khuner). A copy printed outside France, while the Paris edition was still coming out: evidence of diffusion.',
          'Right: "Éventailliste, Monture des éventails," plate III of the fan-maker\'s section, from the Encyclopédie\'s picture volumes (Recueil de planches, Paris, 1762 to 1772; Metropolitan Museum of Art, Watson Library). Two women at work mounting fans, and the steps below. The work explained crafts as well as science, religion and government.',
          'The Encyclopédie, edited by Denis Diderot with Jean d\'Alembert at first: 17 volumes of text (1751 to 1765) and 11 of plates (1762 to 1772). The crown revoked its permission in 1759 and the pope condemned it; the last ten text volumes appeared together in 1765 (Britannica). Other gathering places: salons, often run by women, London\'s coffeehouses, letters across Europe and the Atlantic.',
          'Kant\'s motto (1784), from the reading: "Dare to know," the courage to use your own understanding.'
        ],
        ask: 'What do these two pages prove about how far the ideas reached?',
        listenFor: 'The book was copied in another country, and it questioned the old ways of doing even ordinary work.',
        ap: 'KC-5.3.I.'
      }
    },
    {
      phase: 'before', kind: 'timeline', eyebrow: 'The Ideas Came First',
      kc: 'KC-5.3.I', title: 'The ideas came before the revolutions.',
      footer: '"Often preceded": the ideas gave revolutionaries their words. Topic 5.2 is the rest of the story.',
      template: {
        range: [1745, 1815],
        tick: 10,
        events: [
          { year: 1748, label: '1748', text: 'Montesquieu: split the powers.' },
          { year: 1762, label: '1762', text: 'Rousseau: "Man is born free."' },
          { year: 1775, label: '1775', text: 'The American Revolution begins.' },
          { year: 1789, label: '1789', text: 'The French Revolution begins.' },
          { year: 1791, label: '1791', text: 'The Haitian Revolution begins.' },
          { year: 1810, label: '1810', text: 'Spanish America\'s wars of independence begin.' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.I: Enlightenment thought "often preceded revolutions and rebellions against existing governments." Preceded, not caused.',
          'Nariño, from the reading: Antonio Nariño printed a Spanish translation of the French Declaration of the Rights of Man in Bogotá (dated 1793 by most accounts, 1794 by some), was arrested on 29 August 1794, and later became one of the leaders of New Granada\'s independence (he led the state of Cundinamarca from 1811 and was a prisoner from 1814 to 1820). It shows the ideas moving across the Atlantic before Spanish America\'s wars.',
          'Do not teach the causes of the revolutions here (taxes, debt, war, slavery and colonial grievances); that is 5.2.'
        ],
        ask: 'Why does the order on this line matter for an argument?',
        listenFor: 'The ideas came first, so they could shape what revolutionaries said and wanted, but coming first does not prove they caused it.',
        ap: 'KC-5.3.I. Continuity and Change: the context of the revolutions (LO A).'
      }
    },
    {
      phase: 'nation', kind: 'cause-chain', eyebrow: 'The People Become a Nation',
      kc: 'KC-5.3.II.i', title: 'If a state belongs to its people, which people?',
      footer: 'Nationalism: loyalty to your nation above a king or an empire.',
      template: {
        steps: [
          { label: 'The claim', text: 'Power comes from the people' },
          { label: 'The question', text: 'Which people?' },
          { label: '1789', text: '"The principle of all sovereignty resides essentially in the nation"', key: true },
          { label: 'The 1800s', text: 'Nationalism shapes states and empires' }
        ],
        links: ['raises', 'answered by', 'and then']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.II.i: "Nationalism also became a major force shaping the historical development of states and empires." The CED prints it on the 5.1 page.',
          'The 1789 Declaration of the Rights of Man and of the Citizen, Article 3: "The principle of all sovereignty resides essentially in the nation" (Avalon Project translation). Sovereignty is the highest power in a state. One line only: the declaration is 5.2\'s document.',
          'Over the 1800s nationalism built new states (5.2: Germany and Italy) and strained empires of many peoples (the Ottoman and Austrian empires). Name it; 5.2 teaches it.'
        ],
        ask: 'Who might be left out when "the people" becomes "the nation"?',
        listenFor: 'People who do not share the nation\'s language, religion or customs: minorities inside an empire.',
        ap: 'KC-5.3.II.i.'
      }
    },
    {
      phase: 'turn', kind: 'claim-evidence', eyebrow: 'The Turn',
      title: 'The words were bigger than the men who wrote them.',
      footer: 'Anyone could ask the philosophers\' own question: by what right am I left out?',
      template: {
        claim: '"All men," "the people," "natural rights": the words sounded like **everyone**.',
        evidence: [
          { text: 'Locke owned shares in the Royal African Company, which traded enslaved Africans.', source: '1670s' },
          { text: '"A woman\'s education must therefore be planned in relation to man."', source: 'Rousseau, Emile, 1762' },
          { text: 'Most writers and readers did not mean the ideas for women, the enslaved or peasants.', source: 'Topic 5.1' }
        ],
        reasoning: 'But the words were written down, so the people left out could use them.'
      },
      notes: {
        minutes: 1,
        land: [
          'This is the hinge from LO A to LO B. No Key Concept band: it sets up KC-5.3.I.C and IV.B.',
          'Locke: the National Portrait Gallery notes he "owned shares in the Royal African Company," which held the English slave-trade monopoly; he held them in the 1670s, probably partly as payment for his work for the Carolina proprietors (Glausser 1990). Say "owned shares," not "ran the slave trade."',
          'Rousseau, Emile, Book V (Foxley translation): "A woman\'s education must therefore be planned in relation to man. To be pleasing in his sight, to win his respect and love ..." Wollstonecraft answers Rousseau on slide 17 and in the Evidence Lab.',
          '"Most" is deliberate: some Enlightenment writers argued for women\'s rights (Condorcet, 1790) and against slavery (Condorcet, Raynal\'s History of the Two Indies).'
        ],
        ask: 'Who was left out of "all men"?',
        listenFor: 'Women, enslaved Africans, peasants and serfs, and often the poor.',
        ap: 'Continuity and Change: the ideas changed; who they covered did not, at first.'
      }
    },
    {
      phase: 'abolition', kind: 'story-scene', eyebrow: 'Over Time · Abolition',
      kc: 'KC-5.3.I.C', title: 'Ideas and faith together, for a century.',
      template: {
        caption: 'A jug printed with the abolitionists\' motto, about 1820',
        steps: [
          { label: '1787', text: 'Twelve men in London, nine of them Quakers, found a society to end the British slave trade.' },
          { label: '1789', text: 'Olaudah Equiano, once enslaved, publishes his life story.' },
          { label: '1807, 1834', text: 'Britain bans the slave trade, then begins ending slavery in its empire.' },
          { label: '1848, 1888', key: true, text: 'France ends slavery in its colonies; Brazil, last in the Americas.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.I.C: "Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in ... the abolition of slavery." Two engines: natural rights, and faith (the Quakers held that slavery was a sin).',
          '1787: the Society for Effecting the Abolition of the Slave Trade, founded in London on 22 May 1787 by twelve men, nine of them Quakers, with Thomas Clarkson and Granville Sharp. Its seal showed a kneeling African man in chains and the words "Am I not a man and a brother?"; Josiah Wedgwood made it into a medallion worn on bracelets and hairpins. 1789: Olaudah Equiano, The Interesting Narrative, London; he toured Britain selling it and speaking against the trade. Britain: the Slave Trade Act of 1807; the Slavery Abolition Act of 1833, in force on 1 August 1834, with an "apprenticeship" until 1838. France: the decree of 27 April 1848. Brazil: the Lei Áurea, 13 May 1888, the last in the Americas.',
          'The picture: a pearlware jug, about 1820, transfer-printed with a seated African man holding a chain, a ship at sea behind him, and the motto "AM NOT I A MAN AND A BROTHER" (Metropolitan Museum of Art 2020.106, public domain). Abolitionists put the motto on everyday objects. Point out the limit: white abolitionists chose how to picture Africans, often kneeling or pleading.',
          'The Haitian Revolution (1791) ended slavery in Saint-Domingue by force; it is 5.2\'s.'
        ],
        ask: 'What drove this movement, ideas or faith? What does the century-long timeline tell you?',
        listenFor: 'Both: natural rights and Quaker and evangelical faith. It took a century, country by country.',
        ap: 'KC-5.3.I.C. Continuity and Change: a change that came slowly.'
      }
    },
    {
      phase: 'serfs', kind: 'ledger', eyebrow: 'Over Time · Serfs and Voters',
      kc: 'KC-5.3.I.C', title: 'Rights reached further, in steps.',
      template: {
        rows: [
          { name: 'Austria, 1848', mark: 'S', tool: 'Serfs:', result: 'freed from the forced labor they owed their lords.' },
          { name: 'Russia, 1861', mark: 'S', tool: 'Serfs:', result: 'more than 20 million freed by the tsar, "from above."' },
          { name: 'France, 1848', mark: 'V', tool: 'Voters:', result: 'all adult men get the vote.' },
          { name: 'Britain', mark: 'V', tool: 'Voters:', result: 'more men vote after 1832, 1867 and 1884.' }
        ],
        payoffLabel: 'The College Board',
        payoff: 'The expansion of rights'
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.I.C: reform movements "contributed to the expansion of rights, as seen in expanded suffrage ... and the end of serfdom."',
          'Austria: Hans Kudlich\'s motion of 26 July 1848 became law on 7 September 1848, ending peasants\' subordination to their lords and their labor dues; landlords were compensated for some dues (Habsburger.net). Russia: the Emancipation Manifesto, 19 February (3 March) 1861; about 23 million serfs on private estates (Yale Law Library: "some 23 million" of 67 million people). Former serfs had to pay for land over decades.',
          'Alexander II\'s reported words to the Moscow nobility, March 1856: "it is better to abolish serfdom from above than to wait for the time when it will begin to abolish itself from below." Defeat in the Crimean War (1853 to 1856) pushed him too. Not every expansion of rights came from reformers below; some came from rulers who feared revolt.',
          'France: universal male suffrage, decreed in March 1848. Britain: the Reform Acts of 1832, 1867 and 1884, each widening the vote among men; even after 1884 roughly four in ten adult men still could not vote.'
        ],
        ask: 'Who gave these rights, and why? Was it always reformers?',
        listenFor: 'Sometimes reformers and revolutions, sometimes rulers who feared what would happen if they did not.',
        ap: 'KC-5.3.I.C.'
      }
    },
    {
      phase: 'women', kind: 'story-steps', eyebrow: 'Over Time · Women\'s Demands',
      kc: 'KC-5.3.IV.B', title: 'Women pressed the words too.',
      template: {
        steps: [
          { label: '1791', text: 'Olympe de Gouges rewrites France\'s declaration for women. She is executed in 1793.' },
          { label: '1792', text: 'Mary Wollstonecraft: women can reason, so educate them to govern themselves.' },
          { label: '1840', text: 'Mott is refused a seat at a London antislavery convention because she is a woman.' },
          { label: '1848', key: true, text: 'Seneca Falls: "all men and women are created equal." They demand the vote.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.3.IV.B: "Demands for women\'s suffrage and an emergent feminism challenged political and gender hierarchies." The CED\'s three examples are all here.',
          'De Gouges: the Declaration of the Rights of Woman and of the Female Citizen, September 1791; guillotined on 3 November 1793 by order of the Revolutionary Tribunal. Wollstonecraft: A Vindication of the Rights of Woman, London, 1792. Stanton and Mott met at the World Anti-Slavery Convention in London, June 1840, where the convention refused to seat women delegates. Mott was a delegate of the Philadelphia Female Anti-Slavery Society and a Quaker minister; Stanton was not a delegate but attended with her husband, Henry B. Stanton, who was; the women sat apart, behind a curtain (National Park Service). Seneca Falls: 19 and 20 July 1848, the Wesleyan Chapel.',
          'Feminism: the claim that women and men should have equal rights. Political hierarchy: who votes, who rules. Gender hierarchy: who is in charge at home and under the law; the Declaration of Sentiments complains that a married woman was "civilly dead" in law.'
        ],
        ask: 'What did each woman demand?',
        listenFor: 'Equal rights as citizens (de Gouges); education to think for themselves (Wollstonecraft); equality and the vote (Seneca Falls).',
        ap: 'KC-5.3.IV.B.'
      }
    },
    {
      phase: 'seneca', kind: 'source-quote', eyebrow: 'Seneca Falls, New York · July 1848',
      kc: 'KC-5.3.IV.B', title: 'Two words added.',
      template: {
        quote: 'We hold these truths to be self-evident; that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights.',
        attribution: { author: 'The Declaration of Sentiments', work: 'Women\'s Rights Convention', year: 'Seneca Falls, 1848' },
        notice: 'In 1776 it read: "all men are created equal." Which two words did they add, and why does it matter?'
      },
      notes: {
        minutes: 2,
        land: [
          'Text from the National Park Service, Women\'s Rights National Historical Park. The 1776 sentence reads "that all men are created equal." Elizabeth Cady Stanton drafted the declaration with members of the M\'Clintock family (National Park Service), modeled on the Declaration of Independence.',
          'It demanded the vote: "He has never permitted her to exercise her inalienable right to the elective franchise." The resolution for the vote was the only one not passed unanimously (Britannica); Frederick Douglass spoke for it. One hundred people signed, 68 women and 32 men (NPS; Britannica).',
          'Notice "endowed by their Creator": the claim rests on faith as well as reason, like the reform movements on slide 15.'
        ],
        ask: 'What is the claim, and what is it arguing against?',
        listenFor: 'Women are equal to men and have the same rights, including the vote; it argues against laws that gave rights only to men.',
        ap: 'KC-5.3.IV.B. 3.A in a text source.'
      }
    },
    {
      phase: 'claim', kind: 'sentence-frame', eyebrow: 'Claims and Evidence in Sources 3.A · Model',
      title: 'Find the claim. Say it. Say what it argues against.',
      footer: 'A claim is what the writer wants you to believe.',
      template: {
        frame: '{{The writer}} claims that {{the claim in your own words}}, arguing against {{the older idea}}.',
        exampleLabel: 'Montesquieu, 1748',
        example: '**Montesquieu** claims that **people stay free only when no one person or group holds all the power**, arguing against **letting one ruler make the laws, carry them out and judge them all at once**.'
      },
      notes: {
        minutes: 2,
        land: [
          'The suggested skill, 3.A: identify and describe a claim and/or argument in a source. Identify: find it. Describe: put it in your own words, with what it is for and against.',
          'The source sentence, The Spirit of the Laws, Book XI, chapter 6, in Thomas Nugent\'s English translation of 1750: "When the legislative and executive powers are united in the same person, or in the same body of magistrates, there can be no liberty." Read it aloud, then build the model line with the room. Montesquieu\'s own example of all the powers held together was the Ottoman sultan; he called Europe\'s monarchies, France included, moderate because their kings left judging to the courts. Montesquieu was chosen because the First & 10 question, the Skill Builder practice and both checkpoints ask about other writers, so the model gives away none of their answers.',
          'The common mistake is copying the quotation as the claim. A described claim is in the student\'s own words.'
        ],
        ask: 'Why is copying the quotation not enough?',
        listenFor: 'Describing a claim means saying what it means and what it argues against, in your own words.',
        ap: '3.A, modeled. The Skill Builder practices it on three new sources.'
      }
    },
    {
      phase: 'pair', kind: 'balance', eyebrow: 'Claims and Evidence in Sources 3.A · Practice',
      kc: 'KC-5.3.IV.B', title: 'Same words, a wider claim.',
      template: {
        job: 'Born free and equal',
        left: { tag: 'France, 1789', name: 'Declaration of the Rights of Man', when: 'Article 1', text: '"Men are born and remain free and equal in rights."' },
        right: { tag: 'France, 1791', name: 'Olympe de Gouges', when: 'Article 1', text: '"Woman is born free and remains equal to man in rights."' },
        claimLabel: 'Your turn',
        claim: 'Use the frame: de Gouges claims that ..., arguing against ... **Which words does she keep, and what does she change?**'
      },
      notes: {
        minutes: 2,
        land: [
          '1789, Article 1, Avalon Project translation. De Gouges, article premier: "La Femme naît libre et demeure égale à l\'homme en droits," translated literally; the published translation by Levy, Applewhite and Johnson (1979) reads "Woman is born free and lives equal to man in her rights."',
          'Have students describe her claim aloud with the frame from slide 19. One strong answer, for the teacher: de Gouges claims that women have the same rights as men, arguing against a declaration that gave rights only to men. She keeps the old words and changes who they cover.',
          'This is First & 10 question 02, which students have already answered, so take answers aloud.'
        ],
        ask: 'Use the frame: describe de Gouges\'s claim.',
        listenFor: 'De Gouges claims that women are born with the same rights as men, arguing against the 1789 declaration\'s rights for men only.',
        ap: 'KC-5.3.IV.B. 3.A.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Find the claim.',
      subtitle: 'Claims and Evidence in Sources 3.A: find it, say it in your own words, and say what it argues against.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-1-enlightenment.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 3.A.',
          'It models the move on Montesquieu (Book XI, chapter 6), then gives students three new short sources: Rousseau\'s opening line, Kant\'s motto, and the abolitionists\' motto. For each they identify the claim, describe it in their own words, and say what it argues against.',
          'Strong answers: Rousseau claims people are born free but held down by unjust governments and customs, against the idea that rulers\' power is natural; Kant claims people should think for themselves instead of obeying authorities, against relying on priests, books and rulers to think for you; the motto claims an enslaved African is a full human being and a brother, against treating people as property.'
        ],
        ask: 'After students have written: which claim was hardest to say in your own words, and why?',
        listenFor: 'Debrief only after the module: Rousseau, because "chains" is a metaphor you have to explain.'
      }
    },
    {
      phase: 'stayed', kind: 'continuity-change', eyebrow: 'What Changed by 1900, What Stayed',
      kc: 'Unit 5: Learning Objective B', title: 'The ideas changed fast. The world changed slowly.',
      template: {
        date: '1750 to 1900',
        before: { tag: 'About 1750', items: ['Kings by divine right', 'Slavery legal across the Americas', 'Serfdom in central and eastern Europe'] },
        after: { tag: 'Changed by 1900', items: ['"The people" claimed as the source of power', 'Slavery ended across the Americas', 'Serfdom ended; more men vote'] },
        continued: { tag: 'Still true in 1900', items: ['Kings and emperors on most thrones', 'Other forced labor in many places', 'Women vote almost nowhere'] }
      },
      notes: {
        minutes: 2,
        land: [
          'The reasoning move for LO B: the Enlightenment affected societies over time, but the change was slow and uneven.',
          'Women\'s votes: New Zealand, on 19 September 1893, became the first self-governing country where all adult women could vote in national elections (the Isle of Man had let some property-owning women vote in 1881) (NZHistory). Britain followed fully in 1928, the United States in 1920.',
          'Other forced labor: indentured and colonial forced labor continued and grew in the 1800s (Unit 6). Kings: by 1900 France and Switzerland were the main republics in Europe; most of the rest had monarchs, many with parliaments.'
        ],
        ask: 'What is the biggest continuity on this slide, and why did it last?',
        listenFor: 'Any, defended: women\'s votes, because men held the power to grant them; kings, because many kept their thrones by sharing power with parliaments.',
        ap: 'KC-5.3.I.C. Continuity and Change.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'The Enlightenment caused the revolutions.', evidence: 'It came first and gave revolutionaries words. Taxes, debt, war and slavery mattered too.', source: 'KC-5.3.I; Topic 5.2' },
          { myth: 'The Enlightenment was against religion.', evidence: 'Most writers believed in God. They questioned faith forced by the state, and faith, with natural rights, drove abolition.', source: 'KC-5.3.I.A, I.C' },
          { myth: 'Rights reached everyone in 1789.', evidence: 'Slavery lasted in Brazil to 1888; women voted almost nowhere in 1900.', source: 'Topic 5.1' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Row 1: the CED says "often preceded," not "caused." Do not swing to "ideas did not matter": revolutionaries quoted them.',
          'Row 2: Voltaire attacked the power of the Church but believed in a creator; the Quakers and evangelicals such as William Wilberforce led abolition. Do not swing to "everyone was religious": some writers, such as Holbach, were atheists.',
          'Row 3: the 1789 declaration excluded women from citizenship and France restored slavery in its colonies in 1802. Do not swing to "nothing changed": the claim that rights belong to people by birth was new, and it was used.'
        ],
        ask: 'Which myth is hardest to correct without making a new mistake?',
        listenFor: 'Any, with the opposite mistake named: "caused" versus "did not matter"; "against religion" versus "everyone was devout"; "everyone got rights" versus "nothing changed."'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'By what right?',
      footer: 'What stayed by 1900: kings and emperors on most thrones, other forced labor, and women\'s votes almost nowhere.',
      template: {
        steps: [
          { label: 'The old answer', text: 'God, tradition, birth' },
          { label: 'The question', text: 'By what right?' },
          { label: 'The new answer', text: 'Reason, natural rights, consent; the people become the nation' },
          { label: 'Over time', text: 'Abolition, the end of serfdom, wider voting, women\'s demands', key: true }
        ],
        links: ['challenged by', 'answered with', 'pressed further by']
      },
      notes: {
        minutes: 4,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw it from memory, with one piece of evidence under each box and the line for what stayed underneath.',
          'The first three boxes are LO A (the intellectual and ideological context: KC-5.3.I.A, I, II.i); the last box and the footer are LO B (the Enlightenment\'s effects over time: KC-5.3.I.C, IV.B). The slide carries no single Key Concept band because it spans all five.',
          'Push for named evidence: divine right; Newton and Locke; Calas; the Encyclopédie; 1789 and the nation; the 1787 society and Brazil 1888; Russia 1861; Seneca Falls.'
        ],
        ask: 'Redraw it without looking, with one piece of evidence under each box, and the line for what stayed.',
        listenFor: 'The old answer, God, tradition and birth, was challenged by the question "by what right?", answered with reason, natural rights and consent, and pressed further over a century by abolition, the end of serfdom, wider voting and women\'s demands, while kings, other forced labor and men-only voting lasted to 1900.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'The ideas behind the revolutions.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-1-enlightenment.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 5.1. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It assesses Learning Targets 1 and 2 (LO A): one new political idea and the old answer it challenged, and how the ideas spread and came before the revolutions. Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name one new idea, the old idea it challenged, and how it spread.',
        listenFor: 'The social contract, against divine right, spread in print and salons before 1789.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Two sources, two claims.',
      subtitle: 'Choose two cards. For each: what kind of source it is, what it claims, and what it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-1-enlightenment.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Six cards: the air-pump mezzotint (1769), the Encyclopédie title page (Lucca, 1758), the abolitionist jug (about 1820), and three short verified excerpts: Locke (1689), Wollstonecraft (1792) and the Seneca Falls declaration (1848).',
          'The skill is 3.A in a non-text source as well as a text: the jug claims something too. Observation before inference: what the object shows, then what it claims or suggests, then what it cannot tell you.',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated.'
        ],
        ask: 'What does the jug claim, without a single sentence of argument?',
        listenFor: 'That an enslaved African man is a man and a brother, a full human being, so slavery is wrong.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'What did the Enlightenment change over time, and what stayed?',
      subtitle: 'One reform movement, the ideas or faith that drove it, how far it got by 1900, and what had still not changed. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-1-enlightenment.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 assesses Learning Target 3 (LO B): choose one reform movement (abolition, the end of serfdom, the right to vote, or women\'s rights), explain how Enlightenment ideas or religious ideals pushed it forward, what it had changed by 1900, and what had still not changed. That is the over-time objective the old lesson never assessed.',
          'Socrates is told the skill is Continuity and Change, so it will push for what stayed the same as well as what changed.'
        ],
        ask: 'Does your answer have a movement, what drove it, a change by 1900, and a continuity?',
        listenFor: 'Abolition: natural rights and Quaker faith; Britain 1834 to Brazil 1888; but other forced labor went on. Women\'s rights: Seneca Falls borrowed the Declaration\'s words; but by 1900 women voted almost nowhere.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'By what right? The answer kept growing.',
      subtitle: 'Liberty and learning, as one painter imagined them about 1792, while slavery was still legal in most American states. Next, Topic 5.2: people turn the words into revolutions.',
      notes: {
        minutes: 2,
        land: [
          'The picture: Samuel Jennings, study for Liberty Displaying the Arts and Sciences, or The Genius of America Encouraging the Emancipation of the Blacks, about 1791 to 1792 (Metropolitan Museum of Art 2016.50, public domain). Jennings, a Philadelphia-born painter working in London, offered the finished painting to the Library Company of Philadelphia, whose directors were mostly Quakers and abolitionists. Liberty, surrounded by books, a globe, a lyre and an artist\'s palette, holds out a book toward kneeling Black men and women; a broken chain lies at her feet, and freed people celebrate in the distance. The Met calls it the first known painting by an American-born artist about slavery and its abolition.',
          'Read it as a source with a claim (3.A): learning and liberty will free the enslaved. And name its limit: a white artist shows freedom as a gift handed down to kneeling Black people, and when it was painted slavery was still legal in most American states.',
          'The slide projects the spine and the hand-off over the picture, and its subtitle says what the picture is and when it was made, so students do not read it as a record of what happened. Ask for the one-sentence answer aloud; the listen-for line is for the teacher.'
        ],
        ask: 'Before the hand-off: say the topic in one sentence.',
        listenFor: 'Enlightenment thinkers changed the answer to "who does a state belong to?" from a king by God\'s will to the people, by reason and consent, and over the next century people pressed those words until rights reached further, though not to everyone by 1900.'
      }
    }
  ]
};
