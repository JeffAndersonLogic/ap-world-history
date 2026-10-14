/*
 * Topic 4.3 canonical Teaching OS source.
 * CED: Fall 2026 pp. 81-82 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Causation. Suggested skill: 3.B Claims and Evidence in Sources. One learning
 * objective: D (the causes of the Columbian Exchange and its effects on the
 * Eastern and Western Hemispheres).
 * Story: docs/TOPIC-4-3-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "What the Ships
 * Carried" is written from the same story, and this deck retells it.
 * Spine: The ships carried more than anyone meant them to, and the plants,
 * animals and germs they carried remade populations on both sides of the ocean.
 * Wall version: The ships carried more than anyone meant them to.
 * Retelling slide: the two-way exchange (phase 'exchange').
 *
 * Class dates: not yet scheduled (the schedule ends at 4.2). Required modules:
 * 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.3',
    minutes: 90,
    title: 'Columbian Exchange',
    subtitle: 'The ships carried more than anyone meant them to.',
    essentialQuestion: 'What caused the Columbian Exchange, and what were its effects on the Eastern and Western Hemispheres?',
    apFocus: 'Causation, with Claims and Evidence in Sources 3.B',
    endTarget: 'Students can explain the cause of the Columbian Exchange (ships crossing the Atlantic and coming back, carrying living things on purpose, by accident and by force); explain why Eastern Hemisphere diseases had catastrophic effects in many parts of the Americas, without the genetic myth; give one effect in each hemisphere with a named crop, animal or food; and identify the evidence a source uses to support its claim.'
  },

  priorities: {
    must: [
      'Answer both halves of the learning objective: the causes of the exchange, and its effects on BOTH hemispheres.',
      'Teach the CED\'s word "unintentional": the disease vectors and diseases crossed by accident, and that is the spine.',
      'Explain why the diseases were so deadly with both reasons: nobody had had them before, and war, forced labor and hunger made them deadlier. Never "they were genetically weak."',
      'Land the spine with the exchange slide: west, catastrophe and land remade; east, new staple crops and better nutrition.'
    ],
    should: [
      'Correct three myths: "no immunity, so doomed," "disease caused African slavery," and "the exchange was equal both ways."',
      'Model 3.B once on Acosta: his claim, and the hides he counts to prove it.',
      'Name cash crops grown on plantations with coerced labor (KC-4.1.V.B, second sentence): the old pages never did.'
    ],
    could: [
      'Use the BeInTheRoom Replanting Council as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "The Exchange Nobody Negotiated."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.2 and 2.6. Bridge to what the ships carried.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "What the Ships Carried" in class.', students: 'For everything that crosses: how, and what it did.', slide: 4 },
    { id: 'apart', label: 'Two Worlds Apart', range: '17-19', minutes: 2, teacher: 'What each side had and lacked.', students: 'Say why the connection mattered.', slide: 5 },
    { id: 'cause', label: 'How Things Crossed', range: '19-21', minutes: 2, teacher: 'On purpose, by accident, by force.', students: 'Sort examples into the three.', slide: 6 },
    { id: 'tenochtitlan', label: 'Tenochtitlan, 1520', range: '21-24', minutes: 3, teacher: 'The Codex picture and the Nahua account.', students: 'Notice, then infer.', slide: 7 },
    { id: 'why', label: 'Why So Deadly', range: '24-27', minutes: 3, teacher: 'Two reasons, both needed.', students: 'Give both reasons.', slide: 8 },
    { id: 'numbers', label: 'How Many', range: '27-28', minutes: 1, teacher: 'One regional estimate, stated as an estimate.', students: 'Say what kind of number it is.', slide: 9 },
    { id: 'acosta', label: 'Acosta\'s Cattle', range: '28-31', minutes: 3, teacher: 'Model 3.B: claim and evidence.', students: 'Find the claim and the number.', slide: 10 },
    { id: 'horses', label: 'Horses on the Plains', range: '31-32', minutes: 1, teacher: 'An effect that was an opportunity.', students: 'Name who used it.', slide: 11 },
    { id: 'force', label: 'Rice and Okra', range: '32-34', minutes: 2, teacher: 'The foods enslaved Africans carried.', students: 'Say how these crossed.', slide: 12 },
    { id: 'sugar', label: 'Sugar and the Plantation', range: '34-37', minutes: 3, teacher: 'Cash crops, coerced labor, exported to Europe.', students: 'Notice who works and who owns.', slide: 13 },
    { id: 'east', label: 'Going East', range: '37-40', minutes: 3, teacher: 'Maize in England, sweet potatoes in Taiwan.', students: 'Say what the names and notes show.', slide: 14 },
    { id: 'nutrition', label: 'Better Nutrition', range: '40-42', minutes: 2, teacher: 'Why these crops fed more people.', students: 'Connect the crop to the people.', slide: 15 },
    { id: 'map', label: 'Which Way', range: '42-43', minutes: 1, teacher: 'The whole exchange on one map.', students: 'Trace one arrow each way.', slide: 16 },
    { id: 'myths', label: 'Myth and Evidence', range: '43-46', minutes: 3, teacher: 'Immunity, slavery, equal exchange.', students: 'Correct each myth.', slide: 17 },
    { id: 'exchange', label: 'What Crossed, What It Did', range: '46-51', minutes: 5, teacher: 'Students redraw the exchange from memory.', students: 'Retell the whole topic.', slide: 18 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '51-53', minutes: 2, teacher: 'Model one causal claim about both hemispheres.', students: 'Upgrade a weak claim.', slide: 19 },
    { id: 'skill', label: 'Skill Builder', range: '53-60', minutes: 7, teacher: 'Module 05: Claims and Evidence in Sources.', students: 'Find the claim and two pieces of evidence.', slide: 20 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: why the diseases were so deadly.', students: 'Work without the coach.', slide: 21 },
    { id: 'evidence', label: 'Evidence Lab', range: '60-68', minutes: 8, teacher: 'Module 07: one claim from two sources, one each way.', students: 'Observe, then infer, then name a limit.', slide: 22 },
    { id: 'cp2', label: 'Checkpoint 2', range: '68-78', minutes: 10, teacher: 'Module 10: the cause, one effect each way. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 23 },
    { id: 'close', label: 'Landing Sentence', range: '78-80', minutes: 2, teacher: 'Land the answer and hand off to 4.4.', students: 'Say the topic in one sentence.', slide: 24 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.3', url: '../unit-4/lesson-4-3-columbian-exchange.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-3-columbian-exchange-capture.html' },
    { label: 'BeInTheRoom: The Replanting Council', url: '../beintheroom/unit-4/the-replanting-council.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-3-columbian-exchange.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-3-slide',
    title: 'Topic 4.3 Presentation',
    file: 'present-topic-4-3.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'The ships carried more than anyone meant them to.',
      subtitle: 'Causation, with Claims and Evidence in Sources 3.B. What crossed, how it crossed, and what it did on each side of the ocean.',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 81 and 82. Learning Objective D: explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres. The story answers both halves: why things crossed, and what they did at each end.',
          'KC-4.1.V: new connections between the hemispheres resulted in the exchange of plants, animals and diseases. V.A: the unintentional transfer of disease vectors (mosquitoes, rats) and of diseases endemic in the Eastern Hemisphere (smallpox, measles, malaria), with catastrophic effects in many areas. V.B: American foods became staples in Europe, Asia and Africa; cash crops were grown on plantations with coerced labor and exported mostly to Europe and the Middle East. V.C: Afro-Eurasian fruit trees, grains, sugar and animals brought by Europeans; other foods brought by enslaved Africans. V.D: Afro-Eurasian populations benefited nutritionally.',
          'The CED\'s illustrative examples (optional): horses, pigs, cattle; okra and rice. All five are in this deck because each carries a Key Concept sentence.',
          'Owns: the exchange, disease and its catastrophic effects, crops and animals both ways, foods carried by enslaved Africans, cash crops on plantations, nutrition in Afro-Eurasia.',
          'Bridge only: the labor systems and slavery themselves (4.4); silver and Potosí (4.5, not mentioned); casta (4.7, not mentioned); the conquests (only the Tenochtitlan epidemic and its timing).',
          'Three myths: "they had no immunity, so they were doomed" (the deaths had social causes too, Jones 2003); "disease caused African slavery" (Madeira had slave-worked sugar before 1492); "the exchange was equal both ways."',
          'Every picture in this deck is a real historical object. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Ships crossing and coming back carried plants, animals and germs, some by accident; in the Americas disease was catastrophic and new animals remade the land, and in Afro-Eurasia American crops improved nutrition.',
        avoid: 'Avoid teaching encomienda, the mit\'a, the Middle Passage or Potosí here. They are 4.4 and 4.5, and the old 4.3 pages spent a section on each.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the last topic back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.2', text: 'What was Columbus looking for when he sailed west?' },
          { label: 'Topic 4.2', text: 'Why did Spain send at least seventeen ships in 1493 instead of three?' },
          { label: 'Topic 2.6', text: 'Besides trade goods, name one thing that traveled along the old Afro-Eurasian routes.' }
        ],
        turn: 'In 2.6, trade routes carried crops and plague across one half of the world. Now ships join the two halves. **What did they carry that nobody meant them to?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: a route to Asia and its trade; because his news of new lands made the monarchs and investors want more; crops (bananas, rice, citrus) or the plague (2.6).',
          'The bridge is 4.2\'s hand-off: Columbus was looking for a route to Asia, and what he started was an exchange of living things nobody planned.',
          'Prompt 3 sets up the spine. 2.6\'s spine was "the same network could feed you and kill you"; 4.3 does the same on a bigger scale.'
        ],
        ask: 'If ships start crossing the Atlantic every year, what else crosses besides the cargo?',
        listenFor: 'Animals, seeds, rats, diseases.',
        ap: 'Retrieval plus bridge: 4.2 explained why ships crossed; 4.3 asks what they carried and what it did.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 4: Learning Objective D',
      title: 'What did the ships carry, and what did it do on each side of the ocean?',
      subtitle: 'Hold that question. Some of what crossed was chosen. Some of it was not.',
      notes: {
        minutes: 1,
        land: [
          'This is Learning Objective D in a ninth grader\'s words: the causes (what the ships carried, and why) and the effects on both hemispheres.',
          'A good prediction names something that crossed and an effect. A weak one says "they traded stuff."'
        ],
        ask: 'Predict: what crossed, and which side got the worst of it?',
        listenFor: 'Diseases went west and killed many people; foods went both ways.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read for two questions.',
      subtitle: 'For everything that crosses: how did it cross, and what did it do to the people at the other end?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-3-columbian-exchange-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "What the Ships Carried" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort what crossed into on purpose, by accident and by force.',
          'Question 02 is the topic\'s 3.B practice: it asks for two pieces of evidence the Nahua account gives. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which two reasons does the reading give for why the diseases were so deadly?',
        listenFor: 'Nobody had had them before, so everyone fell sick at once; and war, forced labor and hunger made them deadlier.'
      }
    },
    {
      phase: 'apart', kind: 'split-mirror', eyebrow: 'Before 1492',
      kc: 'KC-4.1.V', title: 'Two worlds, each with what the other lacked.',
      footer: 'Ocean had kept the two halves of the world apart since the end of the last Ice Age.',
      template: {
        left: { name: 'The Americas' },
        right: { name: 'Afro-Eurasia' },
        rows: [
          { label: 'Crops', left: 'Maize, potatoes, cassava, tomatoes, cacao, tobacco', right: 'Wheat, rice, sugarcane, fruit trees' },
          { label: 'Farm animals', left: 'Llamas and alpacas; no horses, cattle or pigs', right: 'Horses, cattle, pigs, sheep' },
          { label: 'Diseases', left: 'Its own, but not these', right: 'Smallpox, measles, and others, for centuries' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The Bering land bridge flooded about eleven thousand years ago (Jakobsson et al., 2017; the NPS says about ten thousand). After that the hemispheres developed apart. Norse sailors reached Newfoundland around 1000, but no lasting exchange followed.',
          'Horses had lived in the Americas and died out there at least ten thousand years ago; the Spanish brought them back.',
          'The disease row is the one that matters most. Afro-Eurasians had lived for thousands of years in crowded towns beside their animals, and several of their great killers have animal relatives (measles is closely related to a cattle disease). The deep reading explains this; keep it to one sentence here.',
          'Malaria is not on the right side on purpose: the CED counts it as an Eastern Hemisphere disease, and most scientists think it reached the Americas with Europeans and enslaved Africans. It comes up on the next slide.'
        ],
        ask: 'Which row will matter most once ships start crossing?',
        listenFor: 'Diseases: one side had them and the other did not.'
      }
    },
    {
      phase: 'cause', kind: 'branch-tree', eyebrow: 'The Cause',
      kc: 'KC-4.1.V', title: 'Ships crossed and came back. Three ways things crossed with them.',
      template: {
        claimLabel: 'The cause',
        claim: 'After 1492, ships crossed the Atlantic and **came back**, again and again, as Europeans built colonies.',
        branches: [
          { label: 'On purpose', note: 'What settlers wanted to eat and farm', items: ['Horses', 'Cattle and pigs', 'Wheat and sugarcane'] },
          { label: 'By accident', note: 'What nobody chose, and nobody understood', items: ['Smallpox', 'Measles and malaria', 'Rats and mosquitoes'] },
          { label: 'By force', note: 'Enslaved Africans, and what they brought', items: ['Rice', 'Okra'] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'This is the "causes" half of Learning Objective D, stated as a mechanism: a lasting connection, kept open by colonization, so everything aboard crossed too.',
          'On purpose: Columbus\'s second voyage, 1493, carried horses, cattle, eight pigs bought in the Canary Islands, wheat seed, and sugarcane from the Canaries (Nunn and Qian 2010, citing Mintz; Las Casas on the pigs).',
          'By accident: the CED\'s word is "unintentional." Rats came with ships\' cargo. The mosquito that carries yellow fever most likely crossed from West Africa as eggs in water casks; yellow fever\'s first clear American outbreak was in 1647. Malaria, carried by mosquitoes, most likely came with Europeans and enslaved Africans.',
          'A disease vector is an animal that carries a disease from one person to another.',
          'Alfred Crosby named the Columbian Exchange in his 1972 book.'
        ],
        ask: 'Which branch did the most harm, and why is that the strange part?',
        listenFor: 'By accident: the deadliest cargo was the one nobody chose.',
        ap: 'Causation: name the cause as a mechanism, not just "contact."'
      }
    },
    {
      phase: 'tenochtitlan', kind: 'story-scene', eyebrow: 'Tenochtitlan · 1520',
      kc: 'KC-4.1.V.A', title: 'A sickness of pustules, told by those who lived through it.',
      template: {
        visual: { url: '../assets/images/topics/4-3/florentine-codex-smallpox-healer.jpg', alt: 'Ink drawing from the Florentine Codex: on the left a Nahua healer speaks with a man covered in spots; on the right three people covered in spots lie wrapped on mats', credit: 'Florentine Codex, Book 12, about 1577 · Public domain', position: '30% 50%' },
        caption: 'Painted by Nahua artists, about 1577',
        steps: [
          { label: 'June 1520', text: 'The people of Tenochtitlan drive the Spaniards out.' },
          { label: 'Autumn 1520', key: true, text: 'Smallpox sweeps the city for sixty days. Many starve: no one is well enough to cook.' },
          { label: 'Late 1520', text: 'The new ruler, Cuitláhuac, dies in the epidemic.' },
          { label: '1521', text: 'The Spaniards return to a city "greatly weakened."' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'The picture is from Book 12 of the Florentine Codex, painted by Nahua artists and completed about 1577, more than fifty years after the epidemic. A Nahua healer (ticitl) speaks with a sick man; others lie covered in pustules. It is a record made later from memory, not an eyewitness sketch.',
          'The text is from the same chapter (Book 12, ch. 29), in James Lockhart\'s translation: the sickness began in Tepeilhuitl, which Sahagún says is "at the end of September"; it "lasted a full sixty days"; "many just starved to death; starvation reigned, and no one took care of others any longer"; and "the Mexica warriors were greatly weakened by it."',
          'Timeline: the Spaniards were driven out on 30 June 1520. Smallpox had come to the coast with the Narváez expedition in the spring of 1520; a story that names one enslaved man as the carrier is disputed, so do not teach it.',
          'Cuitláhuac ruled about eighty days and died late in 1520, most likely of smallpox; sources disagree on the month. The siege began in May 1521 and the city fell on 13 August 1521.',
          'The old 4.3 reading said the epidemic struck "as Cortés\'s army was besieging the city." It did not; the Spaniards had been driven out.'
        ],
        ask: 'Look at the people on the right. What does the account say killed many of them besides the disease?',
        listenFor: 'Hunger: nobody was well enough to cook or care for them.',
        ap: 'Claims and Evidence 3.B: the account claims great desolation and gives specific evidence (pustules, people unable to move, starvation).'
      }
    },
    {
      phase: 'why', kind: 'equation', eyebrow: 'The Mechanism',
      kc: 'KC-4.1.V.A', title: 'Why these diseases were so deadly here.',
      footer: 'It is a myth that Indigenous Americans were born weak. Both reasons are about history, not bodies.',
      template: {
        terms: [
          { word: 'New disease', note: 'nobody had had it, so nobody was immune' },
          { word: 'Everyone sick', note: 'no one left to farm, cook or nurse' },
          { word: 'Colonization', note: 'war, forced labor, hunger, people driven from home' }
        ],
        result: { word: 'Catastrophe', note: 'in many areas' },
        groups: [ { from: 0, to: 1, label: 'Reason 1: no one had had it' }, { from: 2, to: 2, label: 'Reason 2: conditions' } ]
      },
      notes: {
        minutes: 3,
        land: [
          'Reason 1: immunity to smallpox or measles comes from surviving it, usually as a child. In Afro-Eurasia most adults had; in the Americas nobody had, so the disease struck every age at once and the society stopped working. That is what the Codex describes.',
          'Reason 2: David S. Jones, "Virgin Soils Revisited" (William and Mary Quarterly, 2003): lack of prior exposure "might have left them vulnerable," but "the fates of individual populations depended on contingent factors," including "the malnutrition, exhaustion, and stress created by European colonization." Crosby himself (1976) named childhood exposure, malnutrition and "social chaos."',
          'Jones also warns that "no immunity" written as a genetic fact risks "supporting racial theories." Correct it whenever a student says Indigenous people were "weaker."',
          'Disease was the largest single factor in the deaths, and never the only one.'
        ],
        ask: 'Which of the two reasons did people in power control?',
        listenFor: 'The second one: war, forced labor and hunger were choices.',
        ap: 'Causation: two causes working together, not one.'
      }
    },
    {
      phase: 'numbers', kind: 'case-file', eyebrow: 'How Many',
      kc: 'KC-4.1.V.A', title: 'One region, estimated honestly.',
      template: {
        tag: 'Estimate', place: 'Central Mexico', date: '1519 to about 1620',
        rows: [
          { label: 'In 1519', text: 'About **15 million** people' },
          { label: 'A century later', text: 'About **1.5 million**' },
          { label: 'How we know', text: 'Rebuilt from tax records and other sources. **Historians argue** about the exact numbers.' },
          { label: 'The CED says', text: '"**Catastrophic** effects in many areas"' }
        ],
        proves: 'Many regions of the Americas lost most of their people.'
      },
      notes: {
        minutes: 1,
        land: [
          'Nunn and Qian, Journal of Economic Perspectives (2010): "Central Mexico\'s population fell from just under 15 million in 1519 to approximately 1.5 million a century later." Present it as an estimate.',
          'For the whole Americas: Koch et al., Quaternary Science Reviews (2019), from 119 regional estimates, put the 1492 population at about 60 million and the loss over the next century at about 90 percent. Other historians give lower totals. Say "historians argue," and give a range if pressed.',
          'Do not say "the largest demographic catastrophe in human history." The old 4.3 pages did; the CED does not, and the comparison cannot be settled.',
          'The deaths came from all the causes on the last slide, not disease alone.'
        ],
        ask: 'Why do we say "about" and "estimate" here?',
        listenFor: 'Nobody counted everyone; historians rebuilt the numbers from records.'
      }
    },
    {
      phase: 'acosta', kind: 'source-quote', eyebrow: 'Going West on Purpose · A Source',
      kc: 'KC-4.1.V.C',
      footer: 'Claim: the cattle multiplied. Evidence: a count of hides from one fleet.',
      template: {
        quote: 'These wild cattle have so multiplied in Santo Domingo ... that they troop together in the fields and woods by thousands. ... In the fleet, the year 1587, there came from Santo Domingo 35,444 hides, and from New Spain 64,350.',
        attribution: { author: 'José de Acosta', work: 'Natural and Moral History of the Indies', year: '1590' },
        notice: 'What does Acosta want you to believe, and what number does he give to prove it?'
      },
      notes: {
        minutes: 3,
        land: [
          'Acosta, a Spanish Jesuit who had lived in Peru and Mexico, Book 4, chapter 33, in the English translation of 1604 (Hakluyt Society edition, 1880, p. 271), spelling modernized. New Spain is Spanish Mexico.',
          'This is the topic\'s suggested skill, 3.B: identify the evidence a source uses to support an argument. Claim: Spanish cattle have multiplied enormously. Evidence: a description (herds "by thousands") and a number from a fleet record (35,444 plus 64,350 is 99,794 hides, almost a hundred thousand).',
          'Ask how strong the evidence is: he counted hides that reached Spain, not cattle, but nobody fills one fleet with almost a hundred thousand hides from a few animals.',
          'The same chapter says horses "have multiplied there" and that dogs on Santo Domingo had become "the scourge" of the island.',
          'The Skill Builder models this exact source, then has students do it themselves with a Qing source about sweet potatoes.'
        ],
        ask: 'Is the number evidence of the cattle or of something else?',
        listenFor: 'Of the hides that reached Spain, which still supports the claim that the cattle multiplied.',
        ap: 'Claims and Evidence 3.B: name the claim, then the evidence the source itself gives.'
      }
    },
    {
      phase: 'horses', kind: 'diffusion-path', eyebrow: 'Going West on Purpose',
      kc: 'KC-4.1.V.C', title: 'Horses came back, and Plains peoples remade their lives around them.',
      template: {
        stops: [
          { place: 'Spain', date: '1493', text: 'Columbus\'s second fleet carries horses' },
          { place: 'Caribbean and Mexico', date: '1500s', text: 'Horses multiply on Spanish ranches' },
          { place: 'Spanish settlements to the north', date: '1600s', text: 'Indigenous peoples take, trade and ride them' },
          { place: 'Great Plains', date: 'Early 1700s', text: 'Comanche and others hunt bison and trade on horseback' }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'Not every effect was a disaster. Plains peoples adopted the horse and built new ways of life with it: an Indigenous choice, not something done to them.',
          'The Comanche took up the horse in the late 1600s and dominated the southern Plains by the early 1700s (Hämäläinen, The Comanche Empire, 2008, as summarized by the NPS). A 2023 Science study dates Indigenous horse use in the West to the early 1600s, earlier than older accounts.',
          'Horses also had costs on the Plains: Hämäläinen notes damage to bison herds and grasslands and new inequalities. Keep that for a student who asks.'
        ],
        ask: 'Was the horse a cause of catastrophe or a new chance? For whom?',
        listenFor: 'A new chance for Plains peoples who used it.'
      }
    },
    {
      phase: 'force', kind: 'case-file', eyebrow: 'Going West by Force',
      kc: 'KC-4.1.V.C', title: 'Foods carried by people who did not choose to cross.',
      template: {
        tag: 'By force', place: 'West Africa to Brazil and the Caribbean', date: '1500s to 1700s',
        rows: [
          { label: 'Who crossed', text: '**Enslaved Africans**, carried across the Atlantic against their will' },
          { label: 'What they brought', text: '**Rice** and **okra**, and many knew how to grow rice' },
          { label: 'Okra', text: 'Growing in **Brazil by the 1650s**' },
          { label: 'Rice', text: 'African rice grown by enslaved Africans in the Americas' }
        ],
        proves: 'The exchange carried people\'s foods and knowledge, not only Europeans\' plants.'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.1.V.C\'s second half: "other foods were brought by African enslaved persons." The CED\'s examples are okra and rice.',
          'Okra is recorded in Brazil by 1658 and in Suriname by 1686. African rice (Oryza glaberrima) was carried during the slave trade and grown by enslaved Africans; Saramaccan Maroons in Suriname still grow it (van Andel, Economic Botany, 2010).',
          'How much West African knowledge shaped rice growing in places like South Carolina is argued over by historians (Carney\'s "Black Rice" thesis and its critics). Say "many knew how to grow rice" and stop there.',
          'A widely repeated story says women braided seeds into their hair before the crossing. It has no primary source behind it; do not teach it as fact.',
          'The Atlantic slave trade itself is Topic 4.4.'
        ],
        ask: 'Which of the three ways of crossing does this slide show?',
        listenFor: 'By force.'
      }
    },
    {
      phase: 'sugar', kind: 'story-scene', eyebrow: 'Cash Crops',
      kc: 'KC-4.1.V.B', title: 'Sugar: one plant that remade whole societies.',
      template: {
        visual: { url: '../assets/images/topics/4-3/frans-post-sugar-mill-1660s.jpg', alt: 'Painting of a Brazilian landscape: on the right a large open sugar mill with workers, oxen and a cart; a planter\'s house on a hill; tropical trees and animals in the foreground', credit: 'Frans Post, Brazilian Landscape with Sugar Mill, 1660s · National Gallery of Ireland · Public domain', position: '97% 62%' },
        caption: 'Frans Post, Dutch Brazil, 1660s',
        steps: [
          { label: 'From Afro-Eurasia', text: 'Sugarcane crosses on Columbus\'s second voyage, 1493.' },
          { label: 'Grows best here', text: 'Brazil and the Caribbean grow it better than anywhere.' },
          { label: 'Plantation', key: true, text: 'One cash crop, worked by coerced labor, overwhelmingly enslaved Africans.' },
          { label: 'Shipped out', text: 'Most of the sugar goes to Europe.' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.1.V.B\'s second sentence, which no surface of the old 4.3 lesson taught: "Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East."',
          'Frans Post went to Dutch-ruled northeastern Brazil in 1637 with its governor, Johan Maurits, and stayed several years (sources give 1642 to 1644 for his return). He painted Brazilian scenes like this one for European buyers for decades after he went home. It is a planter\'s-eye view: look for the mill, the workers, the oxen and cart carrying cane, and the house on the hill.',
          'Sugarcane came from the Canaries on Columbus\'s 1493 voyage and was first grown on Hispaniola; Brazil exported sugar to Lisbon by 1526, and by 1680 the Americas dominated world sugar production (Nunn and Qian 2010, citing Mintz and Galloway).',
          'Tobacco, an American plant, became a plantation cash crop the same way.',
          'How the plantation labor system worked is 4.4. Here, say what the CED says and move on.'
        ],
        ask: 'Who in this painting does the work, and who owns the mill?',
        listenFor: 'Enslaved workers do the work; the planter in the house on the hill owns it.',
        ap: 'Causation: a crop from one hemisphere, grown in another, with an effect on the people forced to grow it.'
      }
    },
    {
      phase: 'east', kind: 'split-scenes', eyebrow: 'Going East',
      kc: 'KC-4.1.V.B', title: 'American crops became staple foods across Afro-Eurasia.',
      template: {
        left: {
          name: 'England, 1597',
          items: ['A herbal pictures maize as "Turkie Corne"', 'Readers did not know where it came from'],
          visual: { url: '../assets/images/topics/4-3/gerard-herball-turkie-corne-1597.jpg', alt: 'Hand-colored woodcut page from Gerard\'s Herball showing two maize plants and two ears of corn, labeled Turkie Corne and Turkie Wheate', credit: 'John Gerard, The Herball, London, 1597 · Public domain', position: '50% 25%' }
        },
        right: {
          name: 'Taiwan, 1740s',
          items: ['Sweet potatoes labeled "foreign tuber"', '"Truly a help in years of bad harvest"'],
          visual: { url: '../assets/images/topics/4-3/qing-taiwan-album-sweet-potato-1740s.jpg', alt: 'Chinese album painting of plants including three red and pale sweet potatoes with vines and a handwritten note beside them', credit: 'Album made for the Qing official Liushiqi, Taiwan, 1740s · Public domain', position: '70% 45%' }
        },
        both: ['American plants, recorded far from the Americas', 'Grown where the old crops struggled']
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.1.V.B\'s first sentence: "American foods became staple crops in various parts of Europe, Asia, and Africa."',
          'Left: John Gerard\'s Herball (London, 1597), page 75, pictures maize as "Turkie Corne" and "Turkie Wheate." Many Europeans thought maize came from the Ottoman lands; it came from the Americas.',
          'Right: an album of Taiwan\'s plants and customs painted for 六十七 (Liushiqi), a Qing censor sent to inspect Taiwan in the 1740s. The note beside the sweet potatoes, 番薯 (fanshu, "foreign tuber"), says, in a translation made for this lesson: it can be eaten raw or cooked or ground into flour; it is planted very widely in Taiwan; settlers and Indigenous people rely on it for food; it is "truly a help in years of bad harvest." The note also says the plant came from "the country of Wenlai" (Brunei); sweet potatoes reached southern China from the Philippines and Southeast Asia.',
          'In southern China, officials promoted the sweet potato in the famine year 1594. Near the mouth of the Congo River, Portuguese traders brought cassava from Brazil, and farmers took it up because it survived drought and locusts.'
        ],
        ask: 'What do the names "Turkie Corne" and "foreign tuber" tell you?',
        listenFor: 'Both plants were new, from somewhere else, and people were not sure where.',
        ap: 'Evidence: two sources from opposite ends of Afro-Eurasia showing the same development.'
      }
    },
    {
      phase: 'nutrition', kind: 'cause-chain', eyebrow: 'Going East · The Effect',
      kc: 'KC-4.1.V.D', title: 'Why American crops meant better nutrition.',
      footer: 'Over two centuries, these crops helped populations grow in China, Africa and Europe.',
      template: {
        steps: [
          { label: 'Grow where old crops struggled', text: 'Maize on dry land, potatoes in cold ground, cassava in poor soil, sweet potatoes on hills' },
          { label: 'More food, more kinds', text: 'New land farmed; a varied diet', key: true },
          { label: 'A fallback', text: 'Something to eat when the old harvest failed' },
          { label: 'More people survive', text: 'Populations grow, alongside other causes' }
        ],
        links: ['so', 'and', 'so']
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.1.V.D: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops." Diversity is the CED\'s word: more kinds of food, not only more food.',
          'Crosby, quoted in Nunn and Qian 2010: American crops "make different demands of soils, weather and cultivation" and let farmers "produce food from soils that prior to 1492, were rated as useless."',
          'Nunn and Qian estimate that the potato alone explains a real share of Old World population growth after 1700 (12 percent in their 2010 survey; 18 percent in their most conservative 2011 estimate). Say "helped," never "caused."',
          'Nutrition means how well food feeds the body.'
        ],
        ask: 'Which link in the chain is the CED\'s word "diversity"?',
        listenFor: 'More kinds of food.',
        ap: 'Causation: connect the crop to the people, not just to the place.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'The Whole Exchange on One Map',
      kc: 'KC-4.1.V', title: 'What the ships carried, and which way.',
      footer: 'Not drawn as an arrow: sweet potatoes reaching China by way of the Philippines.',
      visual: { url: '../assets/images/instructional-maps/topic-4-3.svg', alt: 'Map with four arrows: animals, crops and germs west from Europe to the Caribbean; enslaved Africans west from West Africa to Brazil; maize and potatoes east to Europe; cassava from Brazil to Central Africa' },
      notes: {
        minutes: 1,
        land: [
          'Arrows show the direction things moved, not single voyages.',
          'Arrows 1 and 2 go west; 3 and 4 go east. The black dots are Tenochtitlan, Santo Domingo, Ireland, the mouth of the Congo and Fujian.',
          'The map\'s own key is small when projected. Name the four arrows aloud, or open the map file full screen (assets/images/instructional-maps/topic-4-3.svg).'
        ],
        ask: 'Which arrow carried the cargo nobody chose?',
        listenFor: 'Arrow 1: the germs went west with the animals and crops.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence tells a more useful story than the myths.',
      template: {
        rows: [
          { myth: 'Indigenous Americans had no immunity, so they were doomed.', evidence: 'Nobody had had these diseases before, and war, forced labor and hunger made them far deadlier.', source: 'David S. Jones, 2003' },
          { myth: 'Disease caused African slavery in the Americas.', evidence: 'Europeans grew sugar with enslaved workers on Madeira before 1492, and chose to bring that system across.', source: 'Topic 2.5; Topic 4.4' },
          { myth: 'The exchange was equal, the same both ways.', evidence: 'Catastrophe in the Americas; new staple crops and better nutrition in Afro-Eurasia.', source: 'Topic 4.3' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'Row 1: Jones (2003) argues that the genetic reading of "no immunity" is unsupported and risks "supporting racial theories." The old 4.3 pages said "zero immunity" and "no evolved defenses."',
          'Row 2: Madeira grew sugar with enslaved workers, first Canary Islanders and then many Africans, from the mid-1400s; São Tomé, settled by Portugal from the 1480s, followed. Disease emptied land of workers; people decided who would be enslaved and that enslavement would be permanent. The unit story map allows this chain only in this qualified form, and 4.4 owns the labor systems.',
          'Row 3: the effects were unequal. The catastrophe fell on the Americas; the nutritional gains went mostly to Afro-Eurasia.'
        ],
        ask: 'If disease alone did not cause African slavery, what else did?',
        listenFor: 'Choices: Europeans already used enslaved Africans on island plantations and brought that system with them.'
      }
    },
    {
      retelling: true, phase: 'exchange', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'What crossed, and what it did.',
      template: {
        columns: [{ name: 'West, to the Americas' }, { name: 'East, to Afro-Eurasia' }],
        rows: [
          { label: 'By accident', cells: ['Smallpox, measles, malaria; rats, mosquitoes', 'Little that did comparable harm'] },
          { label: 'On purpose or by force', cells: ['Horses, pigs, cattle, wheat, sugarcane; rice and okra with enslaved Africans', 'Maize, potatoes, cassava, sweet potatoes'] },
          { label: 'What it did', cells: ['Catastrophic deaths in many areas; land remade by animals and plantations', 'New staple crops; better nutrition; more people'] }
        ],
        result: { label: 'So', text: 'The ships carried more than anyone meant them to, and what they carried remade populations on both sides.' }
      },
      notes: {
        minutes: 5,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the six cells from memory.',
          'The two columns are the two hemispheres the learning objective names. Rows 1 and 2 are the causes (what crossed, and how); row 3 is the effects.',
          'Row 1, east: some historians argue syphilis crossed from the Americas to Europe; the question is still debated, and the CED does not name it. If a student asks, say so.'
        ],
        ask: 'Which cell is the spine of the topic?',
        listenFor: 'West, by accident: the deadliest cargo was the one nobody chose.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      footer: 'A cause, then one effect in each hemisphere, each with a named example.',
      template: {
        weak: 'The Columbian Exchange was a trade of plants and animals.',
        strong: '**Ships crossing and coming back** carried living things, **some by accident**: smallpox was **catastrophic** in the Americas, while **maize and potatoes** improved nutrition in Afro-Eurasia.'
      },
      notes: {
        minutes: 2,
        land: [
          'The weak claim calls it "a trade," as if both sides chose it, and gives no cause and no effect.',
          'The strong claim names the cause, the CED\'s "unintentional" (by accident), and one effect in each hemisphere.',
          'Have students write their own with a different pair, for example horses and the Comanche, and the sweet potato in China.'
        ],
        ask: 'Why is "trade" the wrong word for the Columbian Exchange?',
        listenFor: 'Because much of it was not chosen: the germs crossed by accident and enslaved people by force.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'What did the writer use to prove it?',
      subtitle: 'Find the claim a source makes, and two pieces of evidence it gives to support it.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-3-columbian-exchange.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 3.B: identify the evidence used in a source to support an argument.',
          'It models Acosta (the slide students just saw), then gives the Qing album\'s note on sweet potatoes. Its claim: the sweet potato is a real help in bad harvest years. Its evidence: it can be eaten raw, cooked or as flour; it is planted very widely; settlers and Indigenous people rely on it.',
          'Push students to name evidence the source itself gives, not facts they know from elsewhere.'
        ],
        ask: 'Is that evidence in the source, or something you knew already?',
        listenFor: 'A detail quoted or paraphrased from the source itself.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'The cargo nobody chose.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-3-columbian-exchange.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.3. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It asks for a disease, a disease vector, and the two reasons. Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name a disease, a disease vector, and both reasons it was so deadly.',
        listenFor: 'Smallpox, rats or mosquitoes, nobody had had it, and war or forced labor or hunger.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources, one each way.',
      subtitle: 'One card about what crossed to the Americas, one about the American crops. Name one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-3-columbian-exchange.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Five real objects: the Codex smallpox page, Post\'s sugar mill, Guamán Poma\'s July harvest (1615), Gerard\'s "Turkie Corne" (1597) and the Qing sweet potato page (1740s).',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you (a herbal shows a plant, not who ate it; Post painted for European buyers).',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'What crossed, and what it did.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-3-columbian-exchange.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for the cause, one effect in the Americas (an Afro-Eurasian animal or crop, or rice or okra) and one in Afro-Eurasia (an American crop), each with the people affected. That is Learning Objective D, KC-4.1.V, and V.B, V.C or V.D depending on the examples a student picks. V.A is Checkpoint 1\'s and the First & 10\'s.',
          'Socrates is told the skill is Causation, so it will push for the cause before the effects.'
        ],
        ask: 'Does your answer have a cause, an effect in each hemisphere, and the people affected?',
        listenFor: 'Ships crossing and coming back; a named example west and a named example east; who it affected.'
      }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Topic 4.3 · Landing Sentence',
      kc: 'Unit 4: Learning Objective D',
      title: 'The ships carried more than anyone meant them to.',
      subtitle: 'What they carried remade populations on both sides of the ocean. Next: disease emptied the land of workers, and the new crops needed them. Who would do the work, and who would rule?',
      notes: {
        minutes: 2,
        land: [
          'This sentence answers Learning Objective D: the causes of the exchange and its effects on both hemispheres.',
          'Hand off to 4.4 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.3?',
        listenFor: 'Ships carried plants, animals and germs, some by accident, and they remade populations on both sides of the Atlantic.'
      }
    }
  ]
};
