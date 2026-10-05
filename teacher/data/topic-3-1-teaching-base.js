/*
 * Topic 3.1 canonical Teaching OS source.
 * Story spine: Cannons made old walls useless, and only big states could afford
 * cannons, so big states got bigger.
 * Wall version: Guns broke the walls. Only big states could buy guns.
 * Story approved by Jeff 2026-10-04 (docs/TOPIC-3-1-STORY-DRAFT.md).
 * Retelling slide: the causal chain (phase 'chain').
 *
 * Required modules, set by Jeff 2026-10-04 and written in the schedule: 02 First & 10
 * (read in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2.
 * Taught Green Friday 2026-10-09 and Silver Monday 2026-10-19.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '3.1',
    minutes: 90,
    title: 'Empires Expand',
    subtitle: 'Guns broke the walls. Only big states could buy guns.',
    essentialQuestion: 'How and why did land-based empires develop and expand from 1450 to 1750?',
    apFocus: 'Causation',
    endTarget: 'Students can explain how gunpowder let land-based empires expand, why only large states could use it, and how political and religious disputes turned neighboring empires into rivals.'
  },

  priorities: {
    must: [
      'Tell the story in order: the wall problem, the cannon, the proof at Constantinople, why only a state can pay, the four empires, then the rivalries.',
      'Keep the spine visible: cannons broke the walls, only big states could afford them, so big states got bigger.',
      'KC-4.3.III.i says political AND religious disputes. Show both, and do not let one slide quietly settle which mattered more.',
      'Devshirme and the Janissaries are a bridge only: say who fired the guns, and save the system for 3.2.',
      'Chaldiran is a one-line proof that the same weapon decided a battle. What it did to the Sunni-Shia divide belongs to 3.3.'
    ],
    should: [
      'Use the causal chain as the retelling slide and have students redraw it from memory.',
      'Name the two limits at the end (Tondibi, Kandahar) so the hand-off to 3.2 is earned.',
      'Name the modules due today: 02 First & 10 (in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2.'
    ],
    could: [
      'Use the BeInTheRoom Constantinople breach scenario as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter for Topic 3.1.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the owns and bridge-only split, and the political and religious reading of Kandahar.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve gunpowder, the Mongols and the cost of holding an empire. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-6', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '6-16', minutes: 10, teacher: 'Module 02: students read the whole story in class.', students: 'Read for the chain and underline the because sentences.', slide: 4 },
    { id: 'wall', label: 'The Wall Problem', range: '16-18', minutes: 2, teacher: 'A wall let a lord say no to a king.', students: 'Explain why a wall worked.', slide: 5 },
    { id: 'cannon', label: 'The Cannon', range: '18-21', minutes: 3, teacher: 'Why a wall is the wrong shape against an iron ball.', students: 'Say what changed.', slide: 6 },
    { id: 'siege', label: 'The Guns at Work', range: '21-22', minutes: 1, teacher: 'Reconstruction: set the scene of the bombardment.', students: 'Say what is happening to the wall.', slide: 7 },
    { id: 'proof', label: 'Constantinople, 1453', range: '22-26', minutes: 4, teacher: 'Seven weeks. The proof.', students: 'Read the gun as evidence.', slide: 8 },
    { id: 'haul', label: 'Moving One Gun', range: '26-27', minutes: 1, teacher: 'Reconstruction: the cost of moving a gun.', students: 'Count what it takes to move one gun.', slide: 9 },
    { id: 'pays', label: 'Only a State Can Pay', range: '27-29', minutes: 2, teacher: 'Metal, foundries, powder, gunners, haulers.', students: 'Explain who could afford this.', slide: 10 },
    { id: 'empires', label: 'Four Winners', range: '29-32', minutes: 3, teacher: 'The four empires on one map.', students: 'Name each empire and where it grew.', slide: 11 },
    { id: 'proofs', label: 'One Weapon, Four Stories', range: '32-35', minutes: 3, teacher: 'One line each: Chaldiran, the Safavid answer, Panipat, the Qing.', students: 'Match each empire to its proof.', slide: 12 },
    { id: 'panipat', label: 'Panipat, 1526', range: '35-37', minutes: 2, teacher: 'See the guns in a source.', students: 'Notice the cannons, then source the picture.', slide: 13 },
    { id: 'meet', label: 'Big States Meet', range: '37-39', minutes: 2, teacher: 'Growth makes neighbors, and neighbors make rivals.', students: 'Predict what happens at the borders.', slide: 14 },
    { id: 'kandahar', label: 'Safavid and Mughal', range: '39-43', minutes: 4, teacher: 'Kandahar: political and religious.', students: 'Name both kinds of dispute.', slide: 15 },
    { id: 'tondibi', label: 'Morocco and Songhai', range: '43-47', minutes: 4, teacher: 'Tondibi, 1591: guns decide a war.', students: 'Compare the two armies.', slide: 16 },
    { id: 'twist', label: 'The Twist', range: '47-50', minutes: 3, teacher: 'Guns win places. They do not run them.', students: 'Say what is still missing.', slide: 17 },
    { id: 'chain', label: 'The Chain', range: '50-57', minutes: 7, teacher: 'Students redraw the causal chain from memory.', students: 'Retell the whole topic.', slide: 18 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '57-62', minutes: 5, teacher: 'Model one causal sentence.', students: 'Upgrade a weak claim.', slide: 19 },
    { id: 'cp1', label: 'Checkpoint 1', range: '62-68', minutes: 6, teacher: 'Independent: how gunpowder enabled expansion.', students: 'Work without the coach.', slide: 20 },
    { id: 'evidence', label: 'Evidence Lab', range: '68-78', minutes: 10, teacher: 'Module 07: evidence from two cards.', students: 'Build a claim from two sources.', slide: 21 },
    { id: 'cp2', label: 'Checkpoint 2', range: '78-87', minutes: 9, teacher: 'Module 10: two empires and one rivalry. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 22 },
    { id: 'close', label: 'Landing Sentence', range: '87-90', minutes: 3, teacher: 'Land the answer and hand off to 3.2.', students: 'Say the topic in one sentence.', slide: 23 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 3.1', url: '../unit-3/lesson-3-1-empires-expand.html' },
    { label: 'First & 10', url: '../unit-3/first-and-10-topic-3-1-empires-expand-capture.html' },
    { label: 'BeInTheRoom: The Constantinople Breach', url: '../beintheroom/unit-3/the-constantinople-breach.html' },
    { label: 'Deep Reading', url: '../unit-3/deep-reading-topic-3-1-empires-expand.html' },
    { label: 'Unit 3 Interactive Empire Map', url: '../unit-3/network-atlas.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-3-1-slide',
    title: 'Topic 3.1 Presentation',
    file: 'present-topic-3-1.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Guns broke the walls. Only big states could buy guns.',
      subtitle: 'Causation: how and why land-based empires expanded. Four empires, two rivalries, one weapon.',
      notes: {
        minutes: 2,
        land: [
          'The learning objective asks how and why land-based empires developed and expanded from 1450 to 1750. The story answers both: the weapon is the how, the cost is the why only some states grew.',
          'KC-4.3.II also says "armed trade" and "both hemispheres." The sea half belongs to Unit 4. Name it once and move on.',
          'Owns: gunpowder as the cause of expansion; the four empires the CED names; interstate rivalry from political and religious disputes (Safavid-Mughal at Kandahar, Songhai-Morocco at Tondibi).',
          'Bridge only: devshirme and the Janissaries (3.2), what Chaldiran did to the Sunni-Shia divide (3.3), Russia (brief or omitted), armed trade at sea (Unit 4).',
          'KC-4.3.III.i names political and religious disputes. The 3.1 eBook chapter argues Kandahar was about a strategic corridor, not faith. Both readings are defensible history; the CED asks students to carry both kinds of dispute, so show both and let Checkpoint 2 make students argue it.',
          'Modules due today: 02 First & 10 (done in class), 06 Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2. Checkpoint 2 finishes at home if it is not done in class.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Cannons broke the walls, only big states could afford them, so big states got bigger and then ran into each other.',
        avoid: 'Avoid teaching the Janissary system, the Sunni-Shia split, or Atlantic empires. Each belongs to another topic.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull the last unit back from memory.',
      template: {
        questions: [
          { label: 'Topic 2.5', text: 'Where did gunpowder start, and how did it travel west?' },
          { label: 'Topic 2.2', text: 'The Mongols built the biggest land empire ever. What happened to it?' },
          { label: 'Big idea', text: 'Why is a huge empire hard to hold together?' }
        ],
        turn: 'Gunpowder reached every empire in Eurasia. **What did states do once they had it?**'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: China, along the trade networks; the Mongols conquered fast and the empire split into separate khanates; distance, many peoples, and no way to keep everyone loyal.',
          'This is the last unit\'s hand-off. 2.7 ended with "these networks moved gunpowder. Next unit: what states did once they had it."',
          'The turn is the lesson question in disguise. Do not answer it yet.'
        ],
        ask: 'What would you do with a weapon your enemies did not have?',
        listenFor: 'Use it to take land from neighbors.',
        ap: 'Retrieval plus bridge: gunpowder as a diffused technology becomes gunpowder as a cause.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 3: Learning Objective A',
      title: 'Why did a few empires get huge after 1450, and what happened when they ran into each other?',
      subtitle: 'Hold that question. By the end of class you can answer it in one chain.',
      notes: {
        minutes: 2,
        land: [
          'This is the topic question and the learning objective in a ninth-grader\'s words. Leave it on screen long enough for a prediction.',
          'A good prediction names a cause and a consequence. A weak one lists empires.'
        ],
        ask: 'Make a prediction: what made some states so much bigger than others?',
        listenFor: 'A weapon, a treasury, an army: something only some states had.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 10 Minutes',
      title: 'Read for the chain.',
      subtitle: 'A cannon breaks the wall, only a big treasury can pay for it, big states grow, they meet, and rivalries follow. Underline the because sentences.',
      big: '10',
      action: { label: 'Open First & 10', url: '../unit-3/first-and-10-topic-3-1-empires-expand-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 10,
        land: [
          'Students read the whole story first, in class. The slides that follow retell it with evidence, so they are retrieval and sourcing, not a first telling.',
          'Circulate for students connecting each example to a consequence. Do not accept example-only notes.',
          'The reading answers three questions at the bottom. They are the First & 10 capture and go to Canvas through Gather All My Work.'
        ],
        ask: 'Which sentence in the reading explains why only some states grew?',
        listenFor: 'The one about the treasury: only a state that taxes many people could pay for a cannon.'
      }
    },
    {
      phase: 'wall', kind: 'frame-letterbox', eyebrow: 'What Was Already True',
      title: 'A wall let a lord say no to a king.',
      subtitle: 'Attack it and you starve for months or lose thousands storming it. So most of the time the king left him alone.',
      notes: {
        minutes: 2,
        land: [
          'Set up the old rule: a castle, a walled city or a mountain fort let a local ruler defy a distant one, because taking it cost more than it was worth.',
          'Constantinople is the strongest case. Its land walls had stopped attackers for roughly a thousand years.',
          'The diagram is a BeHistorical drawing, roughly to scale, from published measurements of the Land Walls. Walk it from the left: moat, moat wall, open terrace, outer wall, open terrace, inner wall. An attacker crossed every layer under fire from the one behind it.',
          'Students have just read this. Take two or three answers to retrieve it, and do not retell it.',
          'Do not mention cannons yet. Let students feel the problem first.'
        ],
        ask: 'If you were the king, what would you do about a duke behind thick walls?',
        listenFor: 'Wait him out, bargain with him, or leave him alone.'
      }
    },
    {
      phase: 'cannon', kind: 'equation', eyebrow: 'What Changed',
      kc: 'KC-4.3.II', title: 'The cannon changed the math.',
      footer: 'Sieges that took a year started taking weeks.',
      template: {
        terms: [
          { word: 'Tall, thin wall', note: 'built to stop ladders and battering rams' },
          { word: 'Iron cannonball', note: 'does not climb the wall, it breaks it' }
        ],
        result: { word: 'The old rule fails', note: 'a wall no longer protects the lord' },
        groups: [
          { from: 0, to: 0, label: 'Old defense' },
          { from: 1, to: 1, label: 'New weapon' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'KC-4.3.II: imperial expansion relied on the increased use of gunpowder, cannons and armed trade.',
          'The mechanism is shape and force. A wall is high and thin because that stops ladders and rams. A heavy iron ball hits it sideways and breaks it.',
          'Gunpowder began in China and spread along the networks students studied in Unit 2. By the 1400s, rulers could cast huge bronze and iron guns.',
          'Say the consequence out loud: if a wall cannot protect you from your own ruler, you cannot say no to him anymore.'
        ],
        ask: 'Why is a wall the wrong shape against a cannonball?',
        listenFor: 'It was built to stop things that climb or push, not things that smash.',
        ap: 'Causation: name the cause (cannon), the mechanism (it breaks walls), the effect (sieges take weeks).'
      }
    },
    {
      phase: 'siege', kind: 'frame-letterbox', eyebrow: 'Constantinople, April and May 1453',
      kc: 'KC-4.3.II',
      title: 'Day after day, the guns pounded the walls.',
      subtitle: 'Ottoman guns fired from behind earth banks and wooden screens. By night the defenders patched the gaps.',
      notes: {
        minutes: 1,
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence. The real evidence is on the next slide, the Dardanelles Gun.',
          'The picture is cropped on purpose. The full image showed Hagia Sophia with four minarets and Ottoman domed mosques in the city, which is Istanbul after 1453, not the Christian city under siege.',
          'One honest caution if a student asks: the biggest bombards sat on heavy timber beds, not on wheeled carriages like the guns drawn here.'
        ],
        ask: 'What is happening to the wall in this picture?',
        listenFor: 'It is being broken open, and people are climbing in through the gaps.'
      }
    },
    {
      phase: 'proof', kind: 'frame-number', eyebrow: 'The Proof · Constantinople, 1453',
      kc: 'KC-4.3.II',
      template: {
        number: '7',
        unit: 'weeks',
        range: '6 April to 29 May 1453',
        text: 'Walls that had held for about a thousand years fell to the bombards of the young sultan Mehmed II.'
      },
      notes: {
        minutes: 4,
        land: [
          'The siege ran from 6 April to 29 May 1453, about seven weeks. A Hungarian engineer named Urban helped build the bombards.',
          'The picture is the Dardanelles Gun, cast in 1464 and now in the Royal Armouries at Fort Nelson. It is a surviving gun of the kind the Ottomans used, not the gun from the 1453 siege itself. Say so.',
          'Use the gun as evidence of scale: students infer how much metal, skill and money one gun took. The Evidence Lab card for this gun asks the same.',
          'Who fired the guns: the Janissaries, an elite Ottoman infantry. One line only. How the Ottomans recruited them is Topic 3.2.',
          'Do not tell this as a trade-route cause story. Constantinople is the proof of what artillery could do, not the reason Europeans sailed (Unit 4, qualified).'
        ],
        ask: 'What does the size of this gun tell you about who could own one?',
        listenFor: 'Someone rich, with metalworkers and a lot of bronze: a state, not a lord.',
        ap: 'Evidence: the object shows scale; it cannot prove what happened in 1453. Students should say both.'
      }
    },
    {
      phase: 'haul', kind: 'frame-letterbox', eyebrow: 'The Catch',
      kc: 'KC-4.3.II',
      title: 'Moving one gun took a small army.',
      subtitle: 'Oxen, ropes, carts and many people, before a single shot was fired.',
      notes: {
        minutes: 1,
        land: [
          'Historical Reconstruction, AI generated, modeled on a real Mughal painting in the Akbarnama: bullocks dragging siege guns up to Ranthambhor Fort during Akbar\'s siege of 1568. It sets the scene; it is not evidence.',
          'It is a different empire and more than a century after 1453. That is fine here: the point is what any state had to pay to move a gun, which is the next slide.'
        ],
        ask: 'Count what it takes to move this one gun. Who pays for all of it?',
        listenFor: 'The ruler, the state, the treasury.'
      }
    },
    {
      phase: 'pays', kind: 'grid', eyebrow: 'The Catch',
      kc: 'KC-4.3.II', title: 'Only a big state could pay for a cannon.',
      cards: [
        { title: 'METAL AND FOUNDRIES', text: 'Huge amounts of bronze or iron, and workshops able to cast it.' },
        { title: 'POWDER', text: 'A steady supply of gunpowder, made and stored.' },
        { title: 'GUNNERS AND HAULERS', text: 'Trained crews, and the teams and roads to drag the guns to the wall.' },
        { title: 'BECAUSE', text: 'Only a state that taxes many people could pay for all of it.' }
      ],
      notes: {
        minutes: 2,
        land: [
          'This is the mechanism that turns a weapon into a political story: only a large, taxing state could afford artillery, so the weapon moved power from local lords to central treasuries.',
          'The same guns pointed outward at neighbors and inward at rebel nobles and autonomous cities. Expansion is the visible half; centralization is the invisible half.',
          'Do not explain how tax systems worked. That is Topic 3.2.'
        ],
        ask: 'Why couldn\'t a duke in a castle just buy a cannon?',
        listenFor: 'It costs more than he could raise, and he lacks the foundries and crews.'
      }
    },
    {
      phase: 'empires', kind: 'image', eyebrow: 'The Four Winners',
      kc: 'KC-4.3.II.B', title: 'Four land empires grew with guns.',
      visual: { type: 'map' },
      footer: 'Ottoman, Safavid, Mughal and Qing. One weapon, four empires.',
      notes: {
        minutes: 3,
        land: [
          'KC-4.3.II.B names the four: the Manchu (Qing) in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East and North Africa; the Safavids in the Middle East.',
          'The map shows each empire\'s core, not its borders, which moved over three centuries. Kandahar (the Safavid-Mughal frontier) and Tondibi are already marked for later.',
          'Russia also expanded across land. It is not one of the CED\'s four, so mention it in a breath if a student raises it.'
        ],
        ask: 'Which two of these empires touch each other, and which are far apart?',
        listenFor: 'Ottoman, Safavid and Mughal run in a line; the Qing are far to the east.'
      }
    },
    {
      phase: 'proofs', kind: 'grid', eyebrow: 'One Weapon, Four Stories',
      kc: 'KC-4.3.II.B', title: 'The same weapon decided battles.',
      cards: [
        { title: 'OTTOMAN', text: 'Chaldiran, 1514: firearms and artillery broke a Safavid cavalry charge.' },
        { title: 'SAFAVID', text: 'Lost at Chaldiran, then built musketeer and artillery forces of their own.' },
        { title: 'MUGHAL', text: 'Panipat, 1526: Babur beat a much bigger army with cannons and musketeers.' },
        { title: 'QING', text: 'Used firearms to take China, then pushed across the steppe grasslands.' }
      ],
      notes: {
        minutes: 3,
        land: [
          'One line each. These are proofs of the mechanism, not new lessons.',
          'Chaldiran: the same weapon decided a battle between two states. What it did to the Sunni-Shia divide is Topic 3.3. Do not go there.',
          'The Safavids answered by adopting guns, which shows the weapon spreading to whoever could afford it.',
          'Qing: the steppe had been the nomads\' strength for two thousand years. Firearms and supply posts let a settled empire absorb it.'
        ],
        ask: 'What do all four stories have in common?',
        listenFor: 'Guns beat the older way of fighting, whether walls or cavalry.'
      }
    },
    {
      phase: 'panipat', kind: 'frame-placard', eyebrow: 'See It In A Source',
      kc: 'KC-4.3.II',
      template: {
        placard: {
          tag: 'Mughal Court Painting',
          name: 'Panipat, 1526',
          text: 'A Mughal painting of the battle where Babur\'s cannons and musketeers beat a bigger army. It was painted later for the court. It is not a photograph.'
        }
      },
      notes: {
        minutes: 2,
        land: [
          'Look first, then source it. Point out the guns on the left: bronze cannons on wheeled carriages.',
          'Sourcing: a late-16th-century Baburnama illustration, painted by court artists decades after the battle to celebrate Mughal rule. It tells us how the court wanted the battle remembered.',
          'The Evidence Lab uses this same illustration, so students will meet it again.'
        ],
        ask: 'What does this show, and what can it not prove?',
        listenFor: 'It shows cannons in use; it cannot prove how the battle actually went, because the court made it later.'
      }
    },
    {
      phase: 'meet', kind: 'question', eyebrow: 'What Happens Next',
      kc: 'KC-4.3.III.i', title: 'Big states grew until they bumped into each other.',
      subtitle: 'Disputes over power and religion turned neighbors into rivals.',
      notes: {
        minutes: 2,
        land: [
          'KC-4.3.III.i: political and religious disputes led to rivalries and conflict between states.',
          'Two named examples follow. Keep each to about four minutes.'
        ],
        ask: 'What might two huge empires with guns fight about?',
        listenFor: 'Land, borders, and whose religion or ruler was right.'
      }
    },
    {
      phase: 'kandahar', kind: 'grid', eyebrow: 'Rivalry 1 · Safavid and Mughal',
      kc: 'KC-4.3.III.i', title: 'Kandahar: a fortress between two empires.',
      cards: [
        { title: 'WHERE', text: 'Kandahar was a fortress on the border between the Safavid and Mughal empires.' },
        { title: 'POLITICAL', text: 'Each empire wanted the frontier for itself, and the fortress changed hands more than once.' },
        { title: 'RELIGIOUS', text: 'The Safavids made Shia Islam their state religion. The Mughal emperors were Sunni Muslims.' },
        { title: 'BECAUSE', text: 'Disputes over power and religion turned neighbors into rivals.' }
      ],
      notes: {
        minutes: 4,
        land: [
          'The CED names this rivalry as an example of political and religious disputes. Show both.',
          'Political: a frontier fortress on the road between Iran and India, held by each empire in turn across the 1600s.',
          'Religious: the Safavid state was founded on a religious claim and made Shia Islam its state religion; the Mughal dynasty ruled as Sunni Muslims. See the 3.1 eBook chapter, section 03, for the Safavid case.',
          'VERIFY before relying on it: how much the religious difference actually drove the Kandahar fights. The CED names the category but does not weigh it, and the eBook chapter argues the fight was mostly about a strategic corridor. Teach it as both, and let Checkpoint 2 make students argue which mattered more.',
          'VERIFY: the number of times Kandahar changed hands. The slide says "more than once" on purpose.'
        ],
        ask: 'What was political about this fight, and what was religious?',
        listenFor: 'Political: the border and the fortress. Religious: Shia Safavids against Sunni Mughals.',
        ap: 'Causation: two causes of one conflict. A strong answer names both and says how they connect.'
      }
    },
    {
      phase: 'tondibi', kind: 'split-mirror', eyebrow: 'Rivalry 2 · Morocco and Songhai',
      kc: 'KC-4.3.III.i', title: 'Tondibi, 1591: guns decide a war between states.',
      footer: 'Same century, same region. One side had firearms.',
      template: {
        left: { name: 'Morocco' },
        right: { name: 'Songhai' },
        rows: [
          { label: 'Army', left: 'A few thousand soldiers', right: 'An army many times larger' },
          { label: 'Weapons', left: 'Firearms and light cannon', right: 'Fought without firearms' },
          { label: 'Crossing', left: 'Marched across the Sahara', right: 'Defended its own land' },
          { label: 'Result', left: 'Won at Tondibi', right: 'Beaten, and its empire broke apart' }
        ]
      },
      notes: {
        minutes: 4,
        land: [
          'The second CED example: the Songhai Empire\'s conflict with Morocco. In 1591 a Moroccan expedition crossed the Sahara and destroyed a far larger Songhai army at Tondibi.',
          'This is the cleanest test in the course: same century, same region, one side with firearms and one without, and a big numerical disadvantage overcome.',
          'Keep the dispute framed as the CED does here, a political conflict between rival states. The gold-and-salt motive that the 3.1 chapter mentions is filed under economic disputes (KC-4.3.III.ii) in Unit 4, so leave it for Unit 4.',
          'VERIFY before projecting exact numbers: the chapter says "a few thousand" against "many times larger." The slide uses no counts.'
        ],
        ask: 'How could a much smaller army win?',
        listenFor: 'Firearms. The weapon made up for numbers.',
        ap: 'Causation: the gun is the cause, the mechanism is firepower against an army without it, the effect is the end of an empire.'
      }
    },
    {
      phase: 'twist', kind: 'question', eyebrow: 'The Twist',
      title: 'Guns can win a place. They do not run it.',
      subtitle: 'Morocco won at Tondibi and could not really govern what it won. Kandahar kept changing hands. Mehmed took Constantinople in seven weeks. Now he has to run it.',
      notes: {
        minutes: 3,
        land: [
          'This is the unit spine\'s second half and the hand-off to 3.2: gunpowder won the land, and holding it was the hard part.',
          'It is not required CED content for 3.1. Keep it to one idea: winning is not holding.',
          'Tondibi aftermath: the chapter says Morocco could not govern the conquest and its garrison in the Niger cities gradually became a local power detached from Marrakesh.'
        ],
        ask: 'What does a ruler need after the walls come down?',
        listenFor: 'People who obey, money to pay for it, and a reason people accept him: Topic 3.2.'
      }
    },
    {
      retelling: true, phase: 'chain', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      kc: 'Unit 3: Learning Objective A',
      title: 'How guns made big states bigger.',
      footer: 'Guns broke the walls. Only big states could buy guns.',
      template: {
        steps: [
          { label: 'Cannon breaks the wall', text: 'Walls built for ladders and rams fail against iron shot. Constantinople, 1453.' },
          { label: 'Only a big treasury can pay', text: 'Metal, foundries, powder, gunners and haulers cost a fortune.', key: true },
          { label: 'Big states grow', text: 'Outward against neighbors, inward against rebel nobles. Ottoman, Safavid, Mughal, Qing.' },
          { label: 'Empires meet', text: 'Growing states run into each other at their borders.' },
          { label: 'Rivalries', text: 'Political and religious disputes become long conflicts. Kandahar, Tondibi.' }
        ],
        links: ['but', 'so', 'until', 'so']
      },
      notes: {
        minutes: 7,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the five links from memory.',
          'Each link carries an anchor: Constantinople, the cost of a gun, the four empires, the border, Kandahar and Tondibi.',
          'Read it left to right as a causal answer. The key link (only a big treasury can pay) is the mechanism that explains why some states grew and others did not.'
        ],
        ask: 'Which link would you remove if the story had to stop making sense?',
        listenFor: 'Any link: each one is needed. The treasury link is the one most students forget.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      footer: 'Cause, mechanism, effect.',
      template: {
        weak: 'Gunpowder helped empires grow.',
        strong: '**Cannons** broke the walls that protected local lords, **and because** only a state with a big treasury could pay for them, **big states grew bigger** and absorbed their neighbors.'
      },
      notes: {
        minutes: 5,
        land: [
          'The weak claim is true and scores nothing. It names no weapon, no mechanism and no effect.',
          'The strong claim has three moves: the cause (cannons), the mechanism (walls fail, only states can pay), and the effect (big states grow).',
          'Have students replace "gunpowder" with a named weapon and one specific empire or battle.'
        ],
        ask: 'Which three words carry the structure?',
        listenFor: 'Cannons, because, grew.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'How did gunpowder change warfare?',
      subtitle: 'On your own. Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'Independent. Watch for answers that say "gunpowder was powerful" with no mechanism.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name your weapon, your empire or battle, and what the weapon allowed.',
        listenFor: 'A specific weapon, an empire or event, and a causal link.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'Cite one concrete detail from each source, and name one limit of either.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 10,
        land: [
          'Students choose two cards. Observation before inference: what the source shows, then what it suggests.',
          'The Dardanelles Gun and the Panipat illustration are both on the projector already. The siege record is a dated text card.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail from the object, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Two empires, and one rivalry.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-3/lesson-3-1-empires-expand.html#modules' },
      notes: {
        minutes: 9,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'The rivalry must be one the CED names: Safavid-Mughal or Songhai-Morocco, with political or religious disputes shown as the cause.',
          'Students who choose Kandahar should name both a political and a religious cause, or say which mattered more and why.'
        ],
        ask: 'Does your rivalry name a political or religious dispute, not just a fight?',
        listenFor: 'A dispute that explains why the two states became rivals.'
      }
    },
    {
      phase: 'close', kind: 'frame-question', eyebrow: 'Topic 3.1 · Landing Sentence',
      kc: 'Unit 3: Learning Objective A',
      title: 'Guns broke the walls. Only big states could buy guns.',
      subtitle: 'From 1450 to 1750, cannons and muskets let the Ottoman, Safavid, Mughal and Qing empires expand, and when they ran into each other, political and religious disputes made rivals.',
      template: { visual: { type: 'map' } },
      notes: {
        minutes: 3,
        land: [
          'This sentence answers the Topic 3.1 learning objective: how land-based empires expanded, why, and what followed.',
          'Hand off to 3.2: Mehmed took Constantinople in seven weeks. Now he has to run it.'
        ],
        ask: 'What is the one-sentence answer to Topic 3.1?',
        listenFor: 'Cannons broke the walls, only big states could pay, so big states grew and became rivals.'
      }
    }
  ]
};
