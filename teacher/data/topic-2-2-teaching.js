/*
 * Teacher-only orchestration for Topic 2.2.
 *
 * Design rule: teacher view is dense; projected view is sparse.
 * Student-facing historical detail remains in the normal 2.2 lesson,
 * First & 10, AP Skill Builder, BeInTheRoom, and checkpoints.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.2',
    date: 'Friday, September 18, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Mongol Empire: Conquest, Connection, and the Pax Mongolica',
    subtitle: 'How do conquerors turn speed into a system?',
    essentialQuestion: 'How did the Mongols conquer and govern such a vast empire, and how did Mongol rule reshape Afro-Eurasian exchange?',
    apFocus: 'CCOT + Governance + Economic Systems',
    endTarget: 'Students can explain how Mongol conquest and administration changed Eurasian political control and exchange while recognizing important continuities and the destructive/connective paradox of Mongol rule.'
  },

  priorities: {
    must: [
      'Students explain HOW Mongol military methods produced conquest, not merely name cavalry or Genghis Khan.',
      'Students distinguish conquest from governance: taking territory and holding territory are different historical problems.',
      'Students understand khanates, religious tolerance, and the Yam as administrative solutions to governing distance and diversity.',
      'Students explain the Pax Mongolica as a change in the conditions of exchange, not as the beginning of Silk Road trade.',
      'Students leave with the paradox: Mongol rule was simultaneously destructive and connective.'
    ],
    should: [
      'Make Mongol borrowing visible: siege specialists, administrators, scribes, and local expertise mattered.',
      'Use the map to make scale and fragmentation concrete before explaining the khanates.',
      'Use BeInTheRoom to force students to reason about life after conquest rather than treating the Mongols only as battlefield actors.',
      'Use CCOT language explicitly: trade routes continued; political conditions and scale of movement changed.'
    ],
    could: [
      'Use the William of Rubruck primary source if the class needs evidence of religious diversity and administrative reach.',
      'Use the Evidence Lab as reinforcement or homework rather than forcing it into this block.',
      'Use the full Heimler 2.2 review as retrieval/review, not as the primary content delivery.'
    ]
  },

  flow: [
    { id: 'open', label: 'Hook + Scale', range: '0–6', minutes: 6, teacher: 'Make the size problem visible before giving the solutions.', students: 'Identify what makes conquest and governance difficult at continental scale.', slide: 0 },
    { id: 'map', label: 'Map the Empire', range: '6–12', minutes: 6, teacher: 'Use the local map to locate the four khanates and the trade corridors they overlapped.', students: 'See distance, diversity, and fragmentation as governance problems.', slide: 2 },
    { id: 'first10', label: 'First & 10', range: '12–22', minutes: 10, teacher: 'Circulate and listen for the distinction between conquest, administration, and exchange.', students: 'Read and respond.', slide: 3 },
    { id: 'conquest', label: 'Teach Conquest', range: '22–34', minutes: 12, teacher: 'Teach unification, merit, cavalry, feigned retreat, intelligence, and siege adaptation as a system.', students: 'Track what problem each military method solved.', slide: 4 },
    { id: 'clip1', label: 'Clip: Genghis', range: '34–36', minutes: 2, teacher: 'Use the clip as a visual reset, not as a substitute for explanation.', students: 'Watch for why Temüjin was able to build a different kind of steppe army.', slide: 7 },
    { id: 'govern', label: 'Teach Governance', range: '36–49', minutes: 13, teacher: 'Shift from taking territory to ruling distance and diversity.', students: 'Connect khanates, tolerance, local officials, and the Yam to administrative problems.', slide: 8 },
    { id: 'check1', label: 'Checkpoint 1', range: '49–55', minutes: 6, teacher: 'Look for one military method + one administrative method + explanation.', students: 'Explain conquest and administration with specific evidence.', slide: 12 },
    { id: 'clip2', label: 'Clip: After Genghis', range: '55–57', minutes: 2, teacher: 'Use succession and regional rule to set up the khanates and fragmentation.', students: 'Watch for what happens when one empire becomes multiple Mongol states.', slide: 13 },
    { id: 'pax', label: 'Pax Mongolica', range: '57–68', minutes: 11, teacher: 'Explain lower political barriers, merchant protection, relay systems, and increased movement.', students: 'Distinguish continuity of routes from change in the conditions of exchange.', slide: 14 },
    { id: 'clip3', label: 'Clip: The Paradox', range: '68–70', minutes: 2, teacher: 'Use the clip to put connective and destructive effects in the same frame.', students: 'Watch for benefits and costs of Mongol rule.', slide: 16 },
    { id: 'room', label: 'BeInTheRoom', range: '70–81', minutes: 11, teacher: 'Launch roles quickly; keep the focus on evidence-based choices under Mongol rule.', students: 'Choose a role, policy, and evidence; defend a position.', slide: 17 },
    { id: 'skill', label: 'AP Skill Builder', range: '81–86', minutes: 5, teacher: 'Force a baseline-before/change move.', students: 'Write a short CCOT claim about trade or political control.', slide: 18 },
    { id: 'check2', label: 'Final Checkpoint', range: '86–89', minutes: 3, teacher: 'Use as an exit response if time is tight.', students: 'Explain two effects of the Pax Mongolica.', slide: 19 },
    { id: 'close', label: 'Close + Bridge', range: '89–90', minutes: 1, teacher: 'Land the paradox and bridge to the Indian Ocean.', students: 'Leave with the Unit 2 network idea.', slide: 20 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.2', url: '../unit-2/lesson-2-2-mongol-empire.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=response-id-fix-v1' },
    { label: 'BeInTheRoom', url: '../beintheroom/unit-2/mongol-court.html' },
    { label: 'Full Heimler Review', url: 'https://youtu.be/KHJLZBXUyzo' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-2-slide',
    title: 'Topic 2.2 Presentation',
    file: 'present-topic-2-2.html'
  },

  slides: [
    {
      phase: 'open', kind: 'hero', eyebrow: 'AP World History · Topic 2.2',
      title: 'The Mongol Empire', subtitle: 'How do conquerors turn speed into a system?',
      visual: { type: 'evidence', index: 0 },
      notes: {
        minutes: 2,
        land: ['Topic 2.1 showed why Silk Road exchange could grow. Topic 2.2 asks what happens when one political system controls enormous portions of those overland routes.', 'The lesson has two problems: how the Mongols conquered, and how they governed what they conquered.'],
        ask: 'Which is harder: taking a city or governing thousands of miles after you take it?',
        listenFor: 'Students should recognize that conquest and administration require different tools.'
      }
    },
    {
      phase: 'open', kind: 'question', eyebrow: 'The Scale Problem',
      title: 'Horse speed wins battles. What governs distance?',
      subtitle: 'Conquest is only the first problem.',
      notes: {
        minutes: 4,
        land: ['A fast army can seize territory faster than a government can organize it.', 'The Mongol achievement was not simply battlefield success; it was building systems that moved orders, people, and resources across continental distances.'],
        ask: 'What breaks first when an empire becomes too large?',
        listenFor: 'Communication, succession, local resistance, taxation, language, religion, supply, distance.'
      }
    },
    {
      phase: 'map', kind: 'image', eyebrow: 'Geographic Grounding',
      title: 'One empire. Four khanates.',
      visual: { type: 'evidence', index: 0 },
      footer: 'Yuan · Ilkhanate · Chagatai · Golden Horde',
      notes: {
        minutes: 6,
        land: ['Use the local BeHistorical map, not every border detail.', 'Point out China, Persia, Central Asia, and Russia/Eastern Europe. The four khanates were a response to scale and succession, but they also show the limits of unified control.', 'Tie the map back to Silk Road corridors: Mongol political reach overlapped the land routes students just studied.'],
        ask: 'Why might one political center struggle to govern this entire map?',
        listenFor: 'Distance, environmental variety, different populations, communication, succession, regional interests.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Read for three systems.', subtitle: 'Conquest. Governance. Exchange.',
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 10,
        land: ['The detailed narrative belongs in First & 10. The projector only gives the reading lens.', 'Circulate and check whether students can separate military methods from administrative methods.'],
        ask: 'Which example belongs under conquest? Which belongs under governance?',
        listenFor: 'Cavalry/siege warfare under conquest; khanates/tolerance/Yam under governance.'
      }
    },
    {
      phase: 'conquest', kind: 'question', eyebrow: 'Conquest 1',
      title: 'Temüjin breaks the clan system.', subtitle: 'Loyalty shifts from lineage to command.',
      notes: {
        minutes: 3,
        land: ['Genghis Khan unified competing steppe groups by 1206.', 'His military organization rewarded ability and loyalty rather than simply preserving old clan hierarchies.', 'That matters because an army built around the khan is more controllable than a coalition of rival clans.'],
        ask: 'Why would merit-based promotion make a conquering army more effective?',
        listenFor: 'Loyalty to the leader, competence, reduced clan rivalry, stronger coordination.'
      }
    },
    {
      phase: 'conquest', kind: 'question', eyebrow: 'Conquest 2',
      title: 'Mobility is a weapon.', subtitle: 'Mounted archery + speed + feigned retreat.',
      notes: {
        minutes: 3,
        land: ['Mongol cavalry could move quickly, coordinate across wide spaces, and attack from distance.', 'Feigned retreats exploited an enemy’s expectations: apparent flight pulled opponents out of formation and into pursuit.', 'The AP move is mechanism: speed and deception disrupted slower, less flexible forces.'],
        ask: 'Why is a feigned retreat more than “running away and coming back”?',
        listenFor: 'It manipulates the enemy into abandoning formation or defensive position.'
      }
    },
    {
      phase: 'conquest', kind: 'question', eyebrow: 'Conquest 3',
      title: 'The Mongols borrowed what worked.', subtitle: 'Siege engineers turn mobility into city conquest.',
      notes: {
        minutes: 4,
        land: ['Steppe cavalry alone could not reliably take fortified cities.', 'The Mongols incorporated siege specialists and techniques from conquered or recruited peoples.', 'This is a larger pattern: Mongol power depended on adapting expertise from the societies they encountered.'],
        ask: 'What does borrowing siege technology tell us about Mongol military culture?',
        listenFor: 'Pragmatism, adaptation, willingness to use conquered specialists, not technological isolation.'
      }
    },
    {
      phase: 'clip1', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'How does Temüjin become Genghis Khan?',
      video: { youtubeId: 'szxPar0BcMo', start: 159, end: 225, label: 'Crash Course World History #17: Genghis Khan' },
      footer: 'Watch for organization, loyalty, and leadership.',
      notes: {
        minutes: 2,
        land: ['Use the clip as visual reinforcement of the leadership/unification story.', 'Return immediately to the lesson logic: organization + mobility + adaptation.'],
        ask: 'What did Genghis change about how steppe power was organized?',
        listenFor: 'He unified groups and redirected loyalty toward a larger political/military structure.'
      }
    },
    {
      phase: 'govern', kind: 'question', eyebrow: 'Governance 1',
      title: 'Conquest ≠ governance.', subtitle: 'Winning territory creates new problems.',
      notes: {
        minutes: 2,
        land: ['Mark the pivot explicitly. Students often treat military success as if it automatically explains imperial durability.', 'The Mongols now need information, taxes, local cooperation, legal order, and succession.'],
        ask: 'What does an emperor need that an army commander does not?',
        listenFor: 'Administrators, records, taxation, communication, legitimacy, local cooperation.'
      }
    },
    {
      phase: 'govern', kind: 'question', eyebrow: 'Governance 2',
      title: 'Divide the empire to govern it.', subtitle: 'Regional khanates solve distance — and weaken unity.',
      notes: {
        minutes: 3,
        land: ['After Genghis Khan, Mongol territories were divided among ruling branches into major khanates.', 'Regional rule made administration more practical but succession disputes and regional interests eventually pulled the empire apart.', 'This is both solution and long-term weakness.'],
        ask: 'How can decentralization help an empire and also threaten it?',
        listenFor: 'Local flexibility and shorter chains of command, but stronger regional power and rivalry.'
      }
    },
    {
      phase: 'govern', kind: 'question', eyebrow: 'Governance 3',
      title: 'Tolerance can be political technology.', subtitle: 'Rule diverse peoples without demanding one faith.',
      notes: {
        minutes: 3,
        land: ['The Mongols often tolerated multiple religions and used administrators from different cultural backgrounds.', 'Do not romanticize this as modern pluralism. It was an effective governing strategy for a diverse empire.', 'Religious communities could continue functioning while Mongol rulers gained access to skilled local elites.'],
        ask: 'Why might a conqueror choose tolerance instead of forced conversion?',
        listenFor: 'Reduced resistance, local cooperation, access to skilled administrators, easier rule over diversity.'
      }
    },
    {
      phase: 'govern', kind: 'question', eyebrow: 'Governance 4',
      title: 'Information moves at horse speed.', subtitle: 'The Yam turns distance into relays.',
      notes: {
        minutes: 3,
        land: ['The Yam postal relay system used stations and fresh horses to move official messages rapidly across large distances.', 'This is administration infrastructure: a state cannot govern territory it cannot communicate with.', 'The same relay logic also supported diplomats and merchants moving through Mongol-controlled territory.'],
        ask: 'Why is communication infrastructure a form of political power?',
        listenFor: 'Orders, information, taxation, military response, coordination, travel permissions.'
      }
    },
    {
      phase: 'check1', kind: 'action', eyebrow: 'Checkpoint 1 · 6 Minutes',
      title: 'How did the Mongols conquer — and govern?',
      subtitle: 'One military method. One administrative method. Explain how each worked.',
      action: { label: 'Open Checkpoint 1', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 6,
        land: ['This is the first proof point. A list is not enough.', 'Strong responses explain mechanism: feigned retreat disrupts formations; Yam reduces communication time; tolerance reduces resistance.'],
        ask: 'Where is the sentence that explains HOW?',
        listenFor: 'Specific evidence + mechanism + effect.'
      }
    },
    {
      phase: 'clip2', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'What happens after Genghis Khan?',
      video: { youtubeId: 'szxPar0BcMo', start: 330, end: 414, label: 'Crash Course World History #17: The Mongols After Genghis Khan' },
      footer: 'Watch for expansion, succession, and regional rule.',
      notes: {
        minutes: 2,
        land: ['Use this clip to reinforce that Mongol history after Genghis is not one uninterrupted centralized state.', 'Bring students back to the four-khanate map.'],
        ask: 'What changes when rule passes to multiple branches of the imperial family?',
        listenFor: 'Regionalization, different local adaptations, succession rivalry, eventual fragmentation.'
      }
    },
    {
      phase: 'pax', kind: 'process', eyebrow: 'Pax Mongolica',
      title: 'Control → Protection → Movement',
      steps: [
        { label: 'CONTROL', text: 'Large stretches under Mongol political power' },
        { label: 'PROTECTION', text: 'Merchants + envoys move with lower political barriers' },
        { label: 'MOVEMENT', text: 'Goods, people, ideas, technology, disease' }
      ],
      footer: 'The routes were older. The political conditions changed.',
      notes: {
        minutes: 5,
        land: ['Pax Mongolica describes relative security and connectivity under Mongol rule, especially across major overland routes.', 'The Silk Roads existed before the Mongols. The change is in political control, protection, speed, and scale of some long-distance movement.', 'Marco Polo and other travelers become useful evidence of greater transregional mobility.'],
        ask: 'What is the continuity? What is the change?',
        listenFor: 'Continuity: older routes and luxury trade. Change: Mongol political integration/protection increases connectivity.'
      }
    },
    {
      phase: 'pax', kind: 'grid', eyebrow: 'What the Network Carries',
      title: 'Merchants are only part of the story.',
      cards: [
        { title: 'PEOPLE', text: 'merchants · diplomats · missionaries · specialists' },
        { title: 'KNOWLEDGE', text: 'administrative practice · medicine · mathematics' },
        { title: 'TECHNOLOGY', text: 'printing · gunpowder · navigation knowledge' },
        { title: 'DISEASE', text: 'plague' }
      ],
      notes: {
        minutes: 4,
        land: ['Mongol-era connectivity intensified movement of specialists and knowledge as well as goods.', 'The lesson data explicitly points to technological and cultural transfers across regions.', 'The same connectivity that lowers barriers to merchants also lowers barriers to pathogens.'],
        ask: 'Which category best shows why “trade network” is too narrow a phrase?',
        listenFor: 'People, ideas/knowledge, technology, disease.'
      }
    },
    {
      phase: 'pax', kind: 'question', eyebrow: 'The Paradox',
      title: 'The same empire can destroy cities and connect continents.',
      subtitle: 'Both things are true.',
      notes: {
        minutes: 2,
        land: ['The sack of Baghdad in 1258 and destruction in Central Asian cities illustrate the violence of conquest.', 'Pax Mongolica, merchant protection, and transregional movement illustrate connective effects.', 'Do not make students choose “Mongols good” or “Mongols bad.” The historical argument is that imperial violence and connectivity coexisted.'],
        ask: 'Why is “Were the Mongols good or bad?” the wrong historical question?',
        listenFor: 'Because effects differed by place/group and destructive/connective processes happened together.'
      }
    },
    {
      phase: 'clip3', kind: 'video', eyebrow: 'Watch · ~1:30',
      title: 'Connection and destruction in the same empire.',
      video: { youtubeId: 'szxPar0BcMo', start: 414, end: 510, label: 'Crash Course World History #17: Five Reasons the Mongols Were Awesome' },
      footer: 'Listen for evidence — not a verdict.',
      notes: {
        minutes: 2,
        land: ['Crash Course intentionally frames this section as a debate. Use it as evidence collection, not as the lesson conclusion.', 'Ask students to separate claims about exchange, tolerance, and administration from moral judgment.'],
        ask: 'Which claim from the clip belongs in an AP explanation of Mongol effects?',
        listenFor: 'Trade/connectivity, tolerance, movement of ideas/technology, administrative consequences.'
      }
    },
    {
      phase: 'room', kind: 'action', eyebrow: 'BeInTheRoom · 11 Minutes',
      title: 'After the conquest: what do you do now?',
      subtitle: 'Choose a role. Choose a policy. Defend it with evidence.',
      action: { label: 'Open BeInTheRoom', url: '../beintheroom/unit-2/mongol-court.html' },
      notes: {
        minutes: 11,
        land: ['This is a required 2.2 module. Keep the launch fast.', 'The scenario forces students to reason about collaboration, preservation, trade opportunity, and cultural distance under Mongol rule.', 'Students should use at least two pieces of evidence and articulate a tradeoff.'],
        ask: 'What does your role gain from cooperation — and what might it lose?',
        listenFor: 'Role-specific reasoning tied to religious tolerance, administration, trade access, local institutions, or political risk.'
      }
    },
    {
      phase: 'skill', kind: 'process', eyebrow: 'AP Skill Builder · CCOT',
      title: 'Baseline → Continuity → Change → Why',
      steps: [
        { label: 'BASELINE', text: 'Silk Road exchange existed before Mongol rule' },
        { label: 'CONTINUITY', text: 'Older routes + luxury exchange persisted' },
        { label: 'CHANGE', text: 'Political control + protection increased connectivity' }
      ],
      footer: 'No baseline = no CCOT.',
      notes: {
        minutes: 5,
        land: ['Use the existing AP Skill Builder in the student lesson.', 'Students should track one category only: trade, political control, diffusion, or disease.', 'The explanation should connect change to Mongol political power, relay systems, merchant protection, or later fragmentation.'],
        ask: 'What existed BEFORE the Mongols that prevents us from saying they “created” Silk Road trade?',
        listenFor: 'The routes and long-distance exchange already existed.'
      }
    },
    {
      phase: 'check2', kind: 'action', eyebrow: 'Final Checkpoint · 3 Minutes',
      title: 'What changed because of the Pax Mongolica?',
      subtitle: 'Two effects. Explain whether each was connective, destructive, or both.',
      action: { label: 'Open Final Checkpoint', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 3,
        land: ['If time is tight, treat this as an exit response rather than a polished paragraph.', 'Strong answers name two distinct effects and connect them to wider Afro-Eurasian exchange.'],
        ask: 'Can the same effect be both connective and destructive?',
        listenFor: 'Plague transmission is the clearest example: more connectivity makes faster transmission possible.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Unit 2 Bridge',
      title: 'Networks do not need one empire.',
      subtitle: 'Next: the Indian Ocean runs on monsoons, merchants, and port cities.',
      visual: { type: 'evidence', index: 0 },
      notes: {
        minutes: 1,
        land: ['Close with the Unit 2 comparison: Mongol overland integration is one mechanism of connectivity; Indian Ocean exchange operates through a different geographic and technological system.', 'Required reading next: monsoon system, goods/merchants, port cities/diasporas, and Islam in the Indian Ocean.']
      }
    }
  ]
};
