/*
 * Topic 3.3 canonical Teaching OS source.
 * CED source: scripts/lib/ced-source/unit-3.js, Topic 3.3, Fall 2026 CED p. 71.
 * Reasoning process: Continuity and Change. Suggested skill: 2.B Sourcing and Situation.
 * Story approved by Jeff 2026-10-06: docs/TOPIC-3-3-STORY-DRAFT.md.
 * Spine: Religions changed as much as empires did.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '3.3',
    minutes: 90,
    title: 'Empires: Belief Systems',
    subtitle: 'Religions changed as much as empires did.',
    essentialQuestion: 'What changed and what continued within major belief systems from 1450 to 1750?',
    apFocus: 'Continuity and Change, with Sourcing and Situation',
    endTarget: 'Students can explain three different forms of religious change: Christian reform and division, Ottoman-Safavid rivalry intensifying an older Sunni-Shia divide, and Sikhism developing as a distinct tradition in a context of Hindu-Muslim interaction.'
  },
  priorities: {
    must: [
      'Keep the camera on belief systems themselves. Religion as a ruler\'s legitimacy tool belongs to 3.2.',
      'For every case, ask what changed, what continued, and what shaped the change.',
      'State explicitly that Ottoman-Safavid rivalry did not create the Sunni-Shia split.',
      'State explicitly that Sikhism developed in a context of Hindu-Muslim interaction and is not a simple blend.'
    ],
    should: [
      'Use source situation to show what a portrait, court manuscript, or reform text can and cannot prove.',
      'Land on the three-path retelling slide before students write.'
    ],
    could: ['Use BeInTheRoom after Chaldiran as an extension once its choices are framed around sectarian hardening.']
  },
  flow: [
    {id:'preflight',label:'Teacher Preflight',range:'Before class',minutes:2,teacher:'Lock the CED story and ownership boundary.',students:'Not projected.',slide:1},
    {id:'beready',label:'BeReady',range:'0-4',minutes:4,teacher:'Bridge from 3.2: rulers used religion; now flip the camera.',students:'Retrieve 3.2.',slide:2},
    {id:'question',label:'The Question',range:'4-6',minutes:2,teacher:'Pose continuity and change.',students:'Predict.',slide:3},
    {id:'first10',label:'First & 10',range:'6-20',minutes:14,teacher:'Read the common story.',students:'Track change, continuity, cause.',slide:4},
    {id:'flip',label:'Flip the Camera',range:'20-23',minutes:3,teacher:'Separate 3.2 from 3.3.',students:'Name the new question.',slide:5},
    {id:'protestant',label:'Christianity: Break',range:'23-30',minutes:7,teacher:'Luther and institutional break.',students:'Name the change.',slide:6},
    {id:'catholic',label:'Christianity: Reform',range:'30-37',minutes:7,teacher:'Trent, Jesuits, growth.',students:'Name continuity.',slide:7},
    {id:'islam-cont',label:'Islam: Continuity',range:'37-41',minutes:4,teacher:'The divide predates both empires.',students:'Correct the chronology.',slide:8},
    {id:'chaldiran',label:'Islam: Rivalry',range:'41-48',minutes:7,teacher:'Political rivalry intensifies sectarian identity.',students:'Build the chain.',slide:9},
    {id:'sikh-context',label:'Sikhism: Context',range:'48-54',minutes:6,teacher:'Punjab and Hindu-Muslim interaction.',students:'Context, not blend.',slide:10},
    {id:'sikh-emerge',label:'Sikhism: Emergence',range:'54-60',minutes:6,teacher:'Nanak and a distinct community.',students:'Name the change.',slide:11},
    {id:'retell',label:'Retell the Topic',range:'60-66',minutes:6,teacher:'Three paths of change.',students:'Redraw and retell.',slide:12},
    {id:'source',label:'Source It',range:'66-72',minutes:6,teacher:'2.B: what can each source prove?',students:'Source one object.',slide:13},
    {id:'evidence',label:'Evidence Lab',range:'72-81',minutes:9,teacher:'Two settings, one CCOT claim.',students:'Use two sources.',slide:14},
    {id:'cp2',label:'Checkpoint 2',range:'81-88',minutes:7,teacher:'Independent synthesis.',students:'Explain two developments.',slide:15},
    {id:'close',label:'Landing',range:'88-90',minutes:2,teacher:'Hand to 3.4.',students:'Say the story in one sentence.',slide:16}
  ],
  quickLaunch: [
    {label:'Student Lesson 3.3',url:'../unit-3/lesson-3-3-belief-systems.html'},
    {label:'First & 10',url:'../unit-3/first-and-10-topic-3-3-belief-systems-capture.html'},
    {label:'BeInTheRoom: After Chaldiran',url:'../beintheroom/unit-3/after-chaldiran.html'},
    {label:'Deep Reading',url:'../unit-3/deep-reading-topic-3-3-belief-systems.html'}
  ],
  projection:{storageKey:'behistorical-topic-3-3-slide',title:'Topic 3.3 Presentation',file:'present-topic-3-3.html'},
  slides:[
    {phase:'preflight',kind:'question',eyebrow:'Teacher Preflight · 2 Minutes',title:'Religions changed as much as empires did.',subtitle:'Continuity and Change · Sourcing and Situation',notes:{minutes:2,land:['CED p. 71: explain continuity and change within belief systems, 1450 to 1750.','Required: KC-4.1.VI.i Protestant and Catholic reformations; KC-4.1.VI.ii Ottoman-Safavid rivalry intensifying the Sunni-Shia split; KC-4.1.VI.iii Sikhism in a context of Hindu-Islamic interaction.','Owns religious change. Religion as a legitimacy tool belongs to 3.2.'],ask:'What is the one sentence students must leave with?',listenFor:'Religions changed in different ways even while older traditions continued.'}},
    {phase:'beready',kind:'beready-recall',eyebrow:'BeReady · 4 Minutes · No Notes',title:'In 3.2, what did rulers do with religion?',template:{questions:[{label:'Legitimacy',text:'How could religion make rule look rightful?'},{label:'Example',text:'Name one 3.2 religious legitimacy example.'},{label:'Turn',text:'Could rulers completely control what people believed?'}],turn:'Rulers used religion. **But religion was changing too.**'},notes:{minutes:4,land:['Take one fast 3.2 example, then move. Do not reteach legitimacy.'],ask:'What happens when we flip the camera from rulers to belief systems?',listenFor:'We study how religions themselves changed.'}},
    {phase:'question',kind:'question',eyebrow:'The Question',title:'What changed, what continued, and what shaped the change?',subtitle:'Three cases. Three different kinds of religious change.',kc:'Unit 3: Learning Objective C',notes:{minutes:2,land:['This is continuity and change, not a list of beliefs.'],ask:'Can something change and still show continuity?',listenFor:'Yes; parts can persist while institutions, divisions, or communities change.'}},
    {phase:'first10',kind:'action',eyebrow:'Module 02 · First & 10 · 14 Minutes',title:'Read for three paths of change.',subtitle:'Christianity: split and reform. Islam: an old divide hardens. Sikhism: a distinct tradition emerges.',big:'14',action:{label:'Open First & 10',url:'../unit-3/first-and-10-topic-3-3-belief-systems-capture.html'},notes:{minutes:14,land:['Students read the approved-story rewrite.','Have them mark C for continuity and Δ for change.'],ask:'What is the change verb in each section?',listenFor:'Split/reformed; intensified/hardened; developed/emerged.'}},
    {phase:'flip',kind:'grid',eyebrow:'The Turn',title:'Religion is not only something rulers use.',cards:[{title:'3.2',text:'How rulers used religious ideas to justify power.'},{title:'3.3',text:'How belief systems themselves changed.'},{title:'THE MOVE',text:'What continued? What changed?'},{title:'THE WHY',text:'What conflict or interaction shaped the change?'}],notes:{minutes:3,land:['This slide protects the ownership boundary.'],ask:'Which question belongs today?',listenFor:'What changed within belief systems.'}},
    {phase:'protestant',kind:'process',eyebrow:'Christianity · Break',title:'A challenge becomes a Reformation.',kc:'KC-4.1.VI.i',steps:[{label:'1517',text:'Luther challenges indulgences and church authority.'},{label:'Break',text:'New Protestant churches develop.'},{label:'Change',text:'Western Christian institutional unity fractures.'},{label:'Continuity',text:'Christianity remains powerful.'}],notes:{minutes:7,land:['Avoid the door-nailing myth; 1517 and circulation of the theses are enough.','The CED says Protestant Reformation marked a break with existing Christian traditions.'],ask:'What exactly changed?',listenFor:'Institutional unity and authority, not the existence of Christianity.'}},
    {phase:'catholic',kind:'process',eyebrow:'Christianity · Reform',title:'Catholicism changed too.',kc:'KC-4.1.VI.i',steps:[{label:'Trent',text:'1545-1563: doctrine clarified and discipline reformed.'},{label:'Training',text:'Seminaries improve clerical education.'},{label:'Jesuits',text:'Schools and missions expand.'},{label:'Growth',text:'Both reformations contribute to Christianity\'s growth.'}],notes:{minutes:7,land:['Do not reduce Catholic reform to a reaction. Internal reform currents predated and accompanied Protestant challenges.','The CED requires both reformations in the growth claim.'],ask:'Why is “Protestants replaced Catholics” wrong?',listenFor:'Catholicism reformed and expanded too.'}},
    {phase:'islam-cont',kind:'question',eyebrow:'Islam · Continuity First',title:'The Sunni-Shia split was already old.',subtitle:'The Ottomans and Safavids did not create it.',kc:'KC-4.1.VI.ii',notes:{minutes:4,land:['Say this before Chaldiran so students cannot reverse the chronology.'],ask:'So what can the empires change if the split already exists?',listenFor:'Its political importance and connection to state rivalry.'}},
    {phase:'chaldiran',kind:'process',eyebrow:'Islam · Rivalry',title:'Political rivalry intensifies an older divide.',kc:'KC-4.1.VI.ii',steps:[{label:'1501',text:'Safavid state makes Twelver Shi\'a Islam official.'},{label:'Rivalry',text:'Sunni Ottoman and Shi\'a Safavid states compete.'},{label:'1514',text:'Ottoman victory at Chaldiran.'},{label:'Change',text:'Sectarian identity gains sharper imperial meaning.'}],notes:{minutes:7,land:['CED causal direction: political rivalry intensified the split.','Chaldiran is evidence of rivalry, not the origin of Sunni and Shi\'a Islam.'],ask:'Finish: the split continued, but...',listenFor:'...imperial rivalry intensified it and made it more politically consequential.'}},
    {phase:'sikh-context',kind:'grid',eyebrow:'Sikhism · Context',title:'Punjab was a place of sustained interaction.',kc:'KC-4.1.VI.iii',cards:[{title:'HINDU TRADITIONS',text:'Long-established communities and devotional practices.'},{title:'ISLAMIC TRADITIONS',text:'Muslim communities, rulers, Sufi traditions.'},{title:'INTERACTION',text:'Trade, migration, political rule, devotion, everyday contact.'},{title:'CAREFUL',text:'Context of interaction does not mean “simple blend.”'}],notes:{minutes:6,land:['Use the CED wording exactly in the claim: developed in a context of interactions between Hinduism and Islam.'],ask:'Why is “blend” too simple?',listenFor:'It erases Sikhism\'s distinct teachings, gurus, institutions, and identity.'}},
    {phase:'sikh-emerge',kind:'process',eyebrow:'Sikhism · Emergence',title:'A distinct tradition develops.',kc:'KC-4.1.VI.iii',steps:[{label:'Nanak',text:'1469-1539: devotion to one God, ethical living, service.'},{label:'Community',text:'Followers gather around the Gurus.'},{label:'Institutions',text:'Practices, scripture, and community structures develop.'},{label:'Change',text:'A distinct Sikh tradition emerges.'}],notes:{minutes:6,land:['Keep this at ninth-grade depth; the eBook carries later Gurus and institutions.'],ask:'What is the change?',listenFor:'A new distinct religious tradition develops in that interaction context.'}},
    {phase:'retell',kind:'grid',retelling:true,eyebrow:'Retell the Topic',title:'Three ways belief systems changed.',cards:[{title:'CHRISTIANITY',text:'BREAK + REFORM · Protestant division and Catholic reform; Christianity continues and grows.'},{title:'ISLAM',text:'OLD DIVIDE + NEW POLITICAL WEIGHT · Ottoman-Safavid rivalry intensifies Sunni-Shia division.'},{title:'SIKHISM',text:'INTERACTION + EMERGENCE · a distinct tradition develops in Punjab.'},{title:'THE AP MOVE',text:'What changed? What continued? What shaped the change?'}],notes:{minutes:6,land:['Have students redraw from memory before revealing details.'],ask:'Retell all three without names first.',listenFor:'Break/reform; intensified old divide; emergence in interaction context.'}},
    {phase:'source',kind:'grid',eyebrow:'Skill 2.B · Sourcing and Situation',title:'A source can only prove what its situation allows.',cards:[{title:'REFORM TEXT',text:'Can show a reformer\'s argument and purpose; cannot prove why everyone converted.'},{title:'COURT MANUSCRIPT',text:'Can show official memory of rivalry; cannot serve as neutral evidence about the enemy.'},{title:'LATER DEVOTIONAL PORTRAIT',text:'Can show memory and reverence; cannot show exactly what Nanak looked like.'},{title:'RULE',text:'Source the object before you use it as evidence.'}],notes:{minutes:6,land:['This is the CED suggested skill, 2.B.'],ask:'Which source has the biggest time gap from the event?',listenFor:'The later devotional portrait.'}},
    {phase:'evidence',kind:'action',eyebrow:'Module 07 · Evidence Lab · 9 Minutes',title:'Build one continuity-and-change claim from two sources.',subtitle:'Two settings. Concrete detail from each. One sourcing limitation.',big:'09',action:{label:'Open Evidence Lab',url:'../unit-3/lesson-3-3-belief-systems.html#module-07'},notes:{minutes:9,land:['Require different religious settings.','Students must say what each source can actually prove.'],ask:'Where is the continuity in your claim?',listenFor:'An older faith/tradition persists while something changes.'}},
    {phase:'cp2',kind:'action',eyebrow:'Module 10 · Checkpoint 2 · 7 Minutes',title:'Explain two developments.',subtitle:'Ottoman-Safavid rivalry + Sikhism. Specific evidence for both.',big:'07',action:{label:'Open Checkpoint 2',url:'../unit-3/lesson-3-3-belief-systems.html#module-10'},notes:{minutes:7,land:['This checkpoint assesses Targets 2 and 3 exactly.'],ask:'Did you make clear the Sunni-Shia split already existed?',listenFor:'Yes, and rivalry intensified it.'}},
    {phase:'close',kind:'question',eyebrow:'Landing · 2 Minutes',title:'Religions changed as much as empires did.',subtitle:'Next: which empires leaned on force, administration, money, legitimacy, and belief in similar or different ways?',notes:{minutes:2,land:['Hand directly to 3.4 comparison.'],ask:'One sentence: what changed, what continued?',listenFor:'A defensible CCOT statement using one case.'}}
  ]
};
