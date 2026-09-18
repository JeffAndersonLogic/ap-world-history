(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-2/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

// Topic 2.2 now follows the same instructional architecture as 2.1:
// teacher preflight -> topic argument -> three big rocks -> evidence/mechanisms -> AP synthesis.
T.meta=T.meta||{};
T.meta.subtitle='State change + connection + transfer explain Mongol significance.';
T.meta.endTarget='Students can answer the Topic 2.2 theme in three moves: explain Mongol state change, explain how Mongol rule changed conditions on existing exchange networks, and explain how intensified contact transferred knowledge across Eurasia.';

if(!T.slides.some(s=>s.phase==='preflight')){
  T.slides.unshift({
    phase:'preflight',
    kind:'question',
    eyebrow:'Teacher Preflight · 2 Minutes',
    title:'Do not teach the Mongols as a conquest story.',
    subtitle:'Teach what happens when a vast empire changes the political conditions connecting Eurasia.',
    notes:{
      minutes:2,
      land:[
        'The story today is not: the Mongols were excellent conquerors.',
        'The story is: Mongol expansion changed states, altered the political conditions on older trade networks, and intensified cross-cultural transfer.',
        'Use conquest only long enough to explain how the empire was built. Then pivot to the larger AP significance: state change, connection, and transfer.',
        'Everything today must serve three Big Rocks: STATE CHANGE, CONNECTION, TRANSFER.'
      ],
      ask:'What is the single historical significance argument I am proving today?',
      listenFor:'Mongol expansion changed states and the conditions of Eurasian connection, which increased movement and transfer.',
      avoid:'Do not let cavalry, violence, or Chinggis Khan become the whole lesson.'
    }
  });

  if(Array.isArray(T.flow)){
    T.flow=T.flow.map(item=>({...item,slide:Number.isFinite(item.slide)?item.slide+1:item.slide}));
    T.flow.unshift({
      id:'preflight',
      label:'Teacher Preflight',
      range:'Before class',
      minutes:2,
      teacher:'Read the brief and lock onto the three-part significance argument.',
      students:'Not projected.',
      slide:0
    });
  }
}

const open=T.slides.find(s=>s.phase==='open'&&s.kind==='hero');
if(open){
  open.position='upper-left';
  open.subtitle='How did Mongol expansion change states, exchange, and the movement of knowledge across Eurasia?';
  open.visual=visual('2.2 - Steppes of Asia.jpg','Wide view of the Asian steppe used to frame Mongol mobility and scale','Topic 2.2 classroom visual · Steppes of Asia');
  open.notes=open.notes||{};
  open.notes.land=[
    'Give students the answer frame before the details: STATE CHANGE, CONNECTION, TRANSFER.',
    'Topic 2.1 showed why Silk Road exchange could grow. Topic 2.2 asks how Mongol expansion changed political conditions across much of Eurasia.',
    'Use conquest as the beginning of the explanation, not the destination.'
  ];
  open.notes.ask='What could one enormous empire change besides borders?';
  open.notes.listenFor='Government, communication, trade, travel, and movement of knowledge.';
}

const whole=byTitle('Four moves. One connected story');
if(whole){
  whole.kind='grid';
  whole.eyebrow='What Students Must Know';
  whole.title='Three Big Rocks';
  delete whole.subtitle;
  delete whole.steps;
  whole.cards=[
    {title:'1 · STATE CHANGE',text:'Build a vast empire, then fragment into regional khanates.'},
    {title:'2 · CONNECTION',text:'Change political conditions on exchange networks that already existed.'},
    {title:'3 · TRANSFER',text:'Move knowledge and cultural practices across regions.'}
  ];
  whole.footer='State change -> connection -> transfer.';
  whole.notes=whole.notes||{};
  whole.notes.land=[
    'These are the three required dimensions of the lesson.',
    'Return to this slide mentally after each section: what changed in states, what changed in connection, and what moved because of that connection?'
  ];
  whole.notes.ask='Which Big Rock is easiest to lose if we tell only the conquest story?';
  whole.notes.listenFor='Connection or transfer.';
}


if(whole&&!byTitle('Who were the Mongols?')){
  const wholeIndex=T.slides.indexOf(whole);
  const contextSlides=[
    {
      phase:'open',kind:'hero',eyebrow:'Context · Who Are the Mongols?',
      title:'Who were the Mongols?',
      subtitle:'Pastoral nomads of the Central Asian steppe.',
      position:'lower-left',
      visual:visual('2.2 - Who were the mongols.jpg','Mongol pastoral life on the Central Asian steppe','Topic 2.2 classroom visual · Who were the Mongols'),
      footer:'Herding · horses · mobility · kinship',
      notes:{
        minutes:2,
        land:[
          'Before students meet the empire, establish the people and environment.',
          'Mongol communities lived primarily as mobile pastoralists on the Central Asian steppe, moving with herds rather than building life around dense settled cities.',
          'Horses were central to transportation, herding, communication, wealth, and warfare.',
          'Kinship and clan ties shaped political organization, but alliances and rivalries could shift. Chinggis Khan will turn that fragmented steppe world into a larger political and military system.'
        ],
        ask:'What skills would daily life on this landscape reward?',
        listenFor:'Mobility, horsemanship, endurance, navigation across distance, cooperation, and adaptability.'
      }
    },
    {
      phase:'open',kind:'hero',eyebrow:'Context · Why the Steppe Matters',
      title:'Steppe life shaped Mongol strengths.',
      subtitle:'Mobility was a way of life before it became a military advantage.',
      position:'bottom',
      visual:visual('2.2 - Mongol Camp Life.jpg','Mongol camp life on the Central Asian steppe','Topic 2.2 classroom visual · Mongol Camp Life'),
      footer:'Environment -> horse culture -> mobility -> military potential',
      notes:{
        minutes:2,
        land:[
          'Connect environment to capability rather than treating Mongol military success as mysterious.',
          'A mobile pastoral economy required skill with horses, movement across long distances, and flexible use of resources.',
          'Mounted warfare and archery built on abilities that already mattered in steppe life.',
          'The next slide is the pivot: Chinggis Khan did not invent steppe horsemanship; he organized existing strengths into a disciplined conquest system.'
        ],
        ask:'What is the difference between having skilled horsemen and having an empire-building army?',
        listenFor:'Organization, command, discipline, coordination, shared objectives, and scalable systems.'
      }
    }
  ];
  T.slides.splice(wholeIndex+1,0,...contextSlides);
  if(Array.isArray(T.flow)){
    T.flow=T.flow.map(item=>({...item,slide:Number.isFinite(item.slide)&&item.slide>wholeIndex?item.slide+contextSlides.length:item.slide}));
  }
}

const geo=byTitle('One empire becomes four Mongol states');
if(geo){
  geo.kind='map';
  geo.eyebrow='Big Rock 1 · State Change';
  geo.mapLabel='SUCCESSOR KHANATES · c. 1300';
  geo.visual=visual('2.2 - Map of the Khanates.png','Map of the four major Mongol successor khanates','Topic 2.2 classroom map · successor khanates');
}

const organization=byTitle('Chinggis Khan turns steppe warriors into a system');
if(organization){
  organization.kind='hero';
  organization.eyebrow='Big Rock 1 · State Change · Build';
  organization.visual=visual('2.2 - Chinggis Museum.jpg','Chinggis Khan museum visual used to frame Mongol military organization','Topic 2.2 classroom visual · Chinggis Museum');
  organization.footer='Mechanism: organization makes conquest scalable.';
  organization.position='right';
}

const mobility=byTitle('Mobility is a weapon');
if(mobility){
  mobility.kind='hero';
  mobility.eyebrow='Big Rock 1 · State Change · Build';
  mobility.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  mobility.footer='Mechanism: mobility increases speed, surprise, and operational range.';
  mobility.position='bottom';
}

const siege=byTitle('The Mongols borrowed what worked');
if(siege){
  siege.kind='hero';
  siege.eyebrow='Big Rock 1 · State Change · Build';
  siege.position='bottom';
  siege.visual=visual('2.2 - Mongols Borrow Siege Technology.jpeg','Mongol forces using borrowed siege technology against a fortified city','Topic 2.2 classroom visual');
  siege.footer='Mechanism: adaptation lets a steppe army conquer fortified cities.';
  siege.notes=siege.notes||{};
  siege.notes.land=[
    'This is an interpretive historical reconstruction, not primary-source evidence.',
    'Steppe cavalry alone could not reliably take fortified cities.',
    'The Mongols incorporated siege specialists and techniques from conquered or recruited peoples. Use the visual to make adaptation visible: mobility got them to the city; borrowed expertise helped them break the walls.',
    'Move quickly here. Students need the mechanism of conquest, not a catalog of battles.'
  ];
}

const regionalRule=byTitle('Regional rule solves distance');
if(regionalRule){
  regionalRule.eyebrow='Big Rock 1 · State Change · Fragment';
  regionalRule.visual=visual('2.2 - Map of the Khanates.png','Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty','Topic 2.2 classroom map · successor khanates');
}

const yam=byTitle('Information moves at horse speed');
if(yam){
  yam.kind='hero';
  yam.eyebrow='Bridge · State Power Becomes Connection';
  yam.visual=visual('2.2 - Mongol Yam Relay Across the Steppe.png','Historical reconstruction of the Mongol Yam relay system across the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  yam.footer='The same infrastructure that helps rule an empire also helps connect it.';
  yam.position='bottom';
}

const checkpoint1=byTitle('How did the Mongols build power');
if(checkpoint1){
  checkpoint1.eyebrow='Big Rock 1 · Checkpoint';
  checkpoint1.title='Explain state change in two mechanisms.';
  checkpoint1.subtitle='How was the empire built, and why did unified control weaken?';
}

const routes=byTitle('The routes were older. The political conditions changed');
if(routes){
  routes.eyebrow='Big Rock 2 · Connection · CCOT';
  routes.footer='Continuity: routes existed · Change: political integration + communication + protection';
}

const pax=byTitle('Protection changes movement');
if(pax){
  pax.kind='hero';
  pax.eyebrow='Big Rock 2 · Connection · Mechanism';
  pax.position='bottom';
  pax.visual=visual('2.2 - Cinematic Mongol Caravan.png','Historical reconstruction of a protected caravan moving through Mongol-controlled territory','HISTORICAL RECONSTRUCTION — AI GENERATED');
}

const transfer=byTitle('Connection moves knowledge');
if(transfer){
  transfer.eyebrow='Big Rock 3 · Transfer · KC-3.2.II.A.ii';
  transfer.subtitle='Interregional contact and conflict encouraged significant technological and cultural transfers.';
  transfer.footer='Medicine · numbering systems · Uyghur script = three CED examples students should be able to explain.';
  transfer.visual=visual('2.2 - Knowledge Shared.jpg','Knowledge moving across cultures through Mongol-era Eurasian connections','Topic 2.2 classroom visual · Knowledge Shared');
  transfer.notes=transfer.notes||{};
  transfer.notes.minutes=2;
  transfer.notes.land=[
    'Name KC-3.2.II.A.ii explicitly: interregional contacts and conflicts between states and empires encouraged significant technological and cultural transfers.',
    'The next three slides teach the three CED illustrative examples one at a time.',
    'Do not imply the Mongols invented these ideas or personally carried every text. The key concept is interregional transfer.'
  ];
  transfer.notes.ask='What has to happen before a society can borrow knowledge from another society?';
  transfer.notes.listenFor='Contact, movement of people or texts, communication, and a reason to adopt or adapt the knowledge.';
}

if(transfer&&!byTitle('Medical knowledge moves west.')){
  const transferIndex=T.slides.indexOf(transfer);
  const transferExamples=[
    {
      phase:'transfer',kind:'process',eyebrow:'Big Rock 3 · Transfer Example 1 · Medicine',
      title:'Medical knowledge moves west.',
      subtitle:'Greco-Islamic medical knowledge -> western Europe',
      steps:[
        {label:'GREEK TRADITIONS',text:'Greek medical learning forms part of the knowledge base'},
        {label:'ISLAMIC WORLD',text:'Scholars preserve, translate, debate, and develop it'},
        {label:'WESTERN EUROPE',text:'Medical learning moves into Latin Europe through interregional contact'},
        {label:'AP POINT',text:'Contact transfers knowledge across political and cultural boundaries'}
      ],
      footer:'Broader Eurasian transfer system — not “the Mongols personally delivered every text.”',
      notes:{
        minutes:2,
        land:[
          'This is the CED illustrative example: transfer of Greco-Islamic medical knowledge to western Europe.',
          'Greek medical learning was preserved, translated, debated, and extended in the Islamic world before circulating into western Europe.',
          'Use this as evidence of a broader Eurasian transfer system. The AP claim is interregional contact -> knowledge transfer.'
        ],
        ask:'What moved here: a product, a person, or a body of knowledge?',
        listenFor:'A body of medical knowledge carried through scholars, texts, translation, and contact.'
      }
    },
    {
      phase:'transfer',kind:'process',eyebrow:'Big Rock 3 · Transfer Example 2 · Mathematics',
      title:'Number systems move across cultures.',
      subtitle:'South Asia -> Islamic world -> Europe',
      steps:[
        {label:'SOUTH ASIA',text:'Positional numerals and place-value mathematics develop'},
        {label:'ISLAMIC WORLD',text:'Mathematicians adopt, use, and transmit the system'},
        {label:'EUROPE',text:'Merchants and scholars increasingly use the numerals'},
        {label:'AP POINT',text:'Connected trade and scholarly networks move mathematical knowledge'}
      ],
      footer:'The numbers are not Mongol inventions; they illustrate cross-regional transfer in the period.',
      notes:{
        minutes:2,
        land:[
          'This is the CED illustrative example: transfer of numbering systems to Europe.',
          'The pathway matters: South Asian mathematical notation moved through the Islamic world and was increasingly adopted in Europe.',
          'Keep the emphasis on transmission and adoption, not on memorizing a single inventor.'
        ],
        ask:'Why is a numbering system a technology even though it is not a machine?',
        listenFor:'It is a tool for calculation, record keeping, commerce, and communication.'
      }
    },
    {
      phase:'transfer',kind:'hero',eyebrow:'Big Rock 3 · Transfer Example 3 · Writing',
      title:'The Mongols borrow a writing system.',
      subtitle:'Uyghur script -> Mongol adoption -> adaptation -> state use',
      position:'right',
      visual:visual('2.2 - Cinematic Mongol city gate.png','Mongol representatives at a fortified city, reused here as a visual for Mongol borrowing and adaptation','HISTORICAL RECONSTRUCTION — AI GENERATED'),
      steps:[
        {label:'UYGHUR SCRIPT',text:'A neighboring scribal tradition provides a usable writing system'},
        {label:'MONGOL ADOPTION',text:'Mongol rulers adopt the script for writing Mongolian'},
        {label:'ADAPTATION',text:'The script is adapted to fit Mongolian language and use'},
        {label:'STATE USE',text:'Writing supports administration and long-distance communication'}
      ],
      footer:'Direct Mongol example: conquerors borrow and adapt useful cultural technology.',
      notes:{
        minutes:2,
        land:[
          'This is the clearest direct Mongol example in KC-3.2.II.A.ii: adoption of the Uyghur script.',
          'The direction of transfer matters. The conquerors themselves borrowed a useful cultural technology from another people.',
          'Connect this back to the larger Mongol pattern: use specialists and systems that work, regardless of origin.'
        ],
        ask:'Why is this example especially useful for disproving the idea that transfer only moves from conqueror to conquered?',
        listenFor:'The Mongols are the borrowers; cultural transfer can move in multiple directions.'
      }
    }
  ];
  T.slides.splice(transferIndex+1,0,...transferExamples);
  if(Array.isArray(T.flow)){
    T.flow=T.flow.map(item=>({...item,slide:Number.isFinite(item.slide)&&item.slide>transferIndex?item.slide+transferExamples.length:item.slide}));
  }
}

const transferMechanism=byTitle('Contact -> Borrowing -> Adaptation -> Wider Reach');
if(transferMechanism){
  transferMechanism.eyebrow='Big Rock 3 · Transfer · Mechanism';
  transferMechanism.notes=transferMechanism.notes||{};
  transferMechanism.notes.minutes=2;
}

const skill=byTitle('Baseline -> Change -> Evidence -> Significance');
if(skill){
  skill.eyebrow='AP Synthesis · Answer the Topic Theme';
  skill.title='State Change -> Connection -> Transfer -> Significance';
  skill.steps=[
    {label:'STATE CHANGE',text:'Build a vast empire; unified rule fragments'},
    {label:'CONNECTION',text:'Political conditions on older routes change'},
    {label:'TRANSFER',text:'Knowledge crosses cultural boundaries'},
    {label:'SIGNIFICANCE',text:'Eurasia becomes more politically and culturally interconnected'}
  ];
}

const finalCheck=byTitle('Explain Mongol significance in three moves');
if(finalCheck){
  finalCheck.eyebrow='Final Checkpoint · Topic Theme';
  finalCheck.title='Answer Topic 2.2 in three moves.';
  finalCheck.subtitle='State change · connection · transfer';
}

const landing=byTitle('Empire changed the conditions of connection');
if(landing){
  landing.eyebrow='Topic 2.2 · Answer';
  landing.title='Mongol significance was bigger than conquest.';
  landing.subtitle='Mongol expansion changed states, altered political conditions on older exchange networks, and intensified cross-cultural transfer across Eurasia.';
}

const paradox=byTitle('The same empire can destroy cities and connect continents');
if(paradox){
  paradox.kind='hero';
  paradox.position='lower-left';
  paradox.visual=visual('2.2 - Chinggis Museum Donoho.jpg','Chinggis Khan museum image used as the background for the Mongol paradox','Topic 2.2 classroom visual · Chinggis Museum Donoho');
}

if(Array.isArray(T.flow)){
  const patchFlow=(id,patch)=>{
    const item=T.flow.find(x=>x.id===id);
    if(item)Object.assign(item,patch);
  };
  patchFlow('open',{label:'Launch Theme + Mongol Context',range:'0–8',minutes:8,teacher:'Give the three Big Rocks, then use the two context slides to establish who the Mongols were and why steppe life mattered.',students:'Write the three-part significance frame and connect steppe life to mobility.'});
  patchFlow('map',{label:'Big Rock 1: State Change',range:'8–13',minutes:5,teacher:'Use scale and successor khanates to frame build + fragmentation.',students:'Identify the state-change problem.'});
  patchFlow('first10',{range:'13–23',minutes:10,teacher:'Read only for evidence that fits the three Big Rocks.',students:'Sort evidence into state change, connection, or transfer.'});
  patchFlow('conquest',{label:'State Change: Build',range:'23–34',minutes:11,teacher:'Compress conquest into three mechanisms: organization, mobility, adaptation.',students:'Explain how each mechanism solved a conquest problem.'});
  patchFlow('govern',{label:'State Change: Govern + Fragment',range:'34–45',minutes:11,teacher:'Explain governance, regionalization, and why unified control weakened.',students:'Connect scale and succession to fragmentation.'});
  patchFlow('check1',{label:'Big Rock 1 Check',range:'45–50',minutes:5,teacher:'Require one build mechanism and one fragmentation mechanism.',students:'Explain state change in two mechanisms.'});
  patchFlow('exchange',{label:'Big Rock 2: Connection',range:'50–63',minutes:13,teacher:'Teach continuity of routes and change in political conditions.',students:'Explain how communication and protection affected movement.'});
  patchFlow('transfer',{label:'Big Rock 3: Transfer',range:'63–75',minutes:12,teacher:'Teach KC-3.2.II.A.ii through the three CED examples: medicine, numbering systems, and Uyghur script.',students:'Trace each transfer pathway and explain why contact mattered.'});
  patchFlow('skill',{label:'AP Synthesis',range:'75–84',minutes:9,teacher:'Build the full state change -> connection -> transfer argument.',students:'Write the topic significance chain.'});
  patchFlow('check2',{label:'Answer the Topic Theme',range:'84–88',minutes:4,teacher:'Require all three Big Rocks in a concise response.',students:'Answer Topic 2.2 in three moves.'});
  patchFlow('close',{label:'Landing + Bridge',range:'88–90',minutes:2,teacher:'Land the significance sentence, then bridge to Indian Ocean environmental systems.',students:'Say the Topic 2.2 answer in one sentence.'});
}

/* Lean 15-slide rebuild: keep the narrative spine visible and move repeated
 * mechanism/detail into teacher notes instead of additional projected slides.
 * This is the canonical Topic 2.2 sequence for both teacher and student decks.
 */
const leanOpen=byTitle('The Mongol Empire');
const leanBigRocks=byTitle('Three Big Rocks');
const leanWho=byTitle('Who were the Mongols?');
const leanSteppe=byTitle('Steppe life shaped Mongol strengths.');
const leanFirst10=byTitle('Read for three CED dimensions.');
const leanOrganization=byTitle('Chinggis Khan turns steppe warriors into a system.');
const leanConquest=byTitle('Mobility is a weapon.');
const leanGovernPivot=byTitle('Conquest creates a new problem.');
const leanFragment=byTitle('Regional rule solves distance');
const leanYam=byTitle('Information moves at horse speed.');
const leanRoutes=byTitle('The routes were older. The political conditions changed.');
const leanTransfer=byTitle('Connection moves knowledge.');
const leanWriting=byTitle('The Mongols borrow a writing system.');
const leanSynthesis=byTitle('State Change -> Connection -> Transfer -> Significance');
const leanLanding=byTitle('Mongol significance was bigger than conquest.');

if(leanConquest){
  leanConquest.kind='grid';
  leanConquest.eyebrow='Big Rock 1 · State Change · Build';
  leanConquest.title='Why Mongol conquest worked.';
  leanConquest.subtitle='Mobility, deception, and adaptation worked together.';
  delete leanConquest.position;
  leanConquest.cards=[
    {title:'MOBILITY',text:'Mounted archers move fast and fight at range.'},
    {title:'DECEPTION',text:'Feigned retreat pulls enemies out of position.'},
    {title:'ADAPTATION',text:'Borrowed siege specialists solve problems cavalry cannot.'}
  ];
  leanConquest.footer='Organization + mobility + adaptation make conquest scalable.';
  leanConquest.notes={
    minutes:6,
    land:[
      'Compress the military story. Students need the mechanism, not a catalog of battles.',
      'Mobility gave Mongol forces speed, range, and surprise. Feigned retreat could disrupt enemy formations.',
      'Cavalry alone could not reliably take fortified cities, so Mongol rulers recruited or compelled siege specialists and borrowed techniques from other peoples.',
      'The recurring Mongol pattern is pragmatic adaptation: use the system or expertise that solves the problem.'
    ],
    ask:'Why is “the Mongols had horses” an incomplete explanation for conquest?',
    listenFor:'Organization, deception, specialist knowledge, siege technology, and adaptation.'
  };
}

if(leanFragment){
  leanFragment.eyebrow='Big Rock 1 · State Change · Fragment';
  leanFragment.title='One empire becomes four Mongol states.';
  leanFragment.subtitle='Regional rule solves distance — and weakens unified control.';
  leanFragment.footer='Golden Horde · Chagatai · Ilkhanate · Yuan';
  leanFragment.notes=leanFragment.notes||{};
  leanFragment.notes.land=[
    'Use the map here, after students understand how the empire was built.',
    'Regional khanates shortened chains of command and adapted to local conditions.',
    'Succession disputes, distance, and regional interests weakened a single unified political center.',
    'The result is continued Mongol rule in several regional states rather than one unified empire.'
  ];
  leanFragment.notes.ask='How can regional rule solve one problem and create another?';
  leanFragment.notes.listenFor='It improves local governance while strengthening regional independence and rivalry.';
}

if(leanYam){
  leanYam.eyebrow='Governance -> Connection';
  leanYam.notes=leanYam.notes||{};
  leanYam.notes.land=[
    'Fold governance into one story rather than another slide: Mongol rulers used local officials, pragmatic religious tolerance, and communication systems to manage diversity and distance.',
    'The Yam relay system let couriers change horses at stations and move orders and information across enormous distances.',
    'The key bridge is this: infrastructure built to govern the empire also helps connect it.'
  ];
  leanYam.notes.ask='Why is a communication network both a governing tool and an exchange tool?';
  leanYam.notes.listenFor='It moves orders, intelligence, officials, envoys, and information more predictably.';
}

if(leanRoutes){
  leanRoutes.eyebrow='Big Rock 2 · Connection · CCOT';
  leanRoutes.subtitle='The Silk Roads already existed. Mongol rule changed the political conditions around movement.';
  leanRoutes.footer='Continuity: old routes · Change: political integration + communication + protection';
  leanRoutes.notes=leanRoutes.notes||{};
  leanRoutes.notes.land=[
    'The Silk Roads existed long before Mongol expansion. Do not credit the Mongols with inventing the routes.',
    'Mongol political control changed conditions across large stretches of Eurasia by reducing some political barriers, strengthening communication, and protecting favored merchants and envoys.',
    'Fold the old “Protection changes movement” slide into this explanation: lower risk and greater predictability can increase movement even when the road itself is old.',
    'This is KC-3.1.I.E.i: imperial expansion facilitated Afro-Eurasian trade and communication.'
  ];
  leanRoutes.notes.ask='What continued, and what changed under Mongol rule?';
  leanRoutes.notes.listenFor='The routes continued; political control, communication, protection, and predictability changed.';
}

if(leanTransfer){
  leanTransfer.eyebrow='Big Rock 3 · Transfer';
  leanTransfer.subtitle='Connection moves more than goods. It moves knowledge.';
  leanTransfer.cards=[
    {title:'MEDICINE',text:'Greco-Islamic medical knowledge -> western Europe'},
    {title:'MATHEMATICS',text:'Numbering systems -> Europe'},
    {title:'WRITING',text:'Mongols adopt the Uyghur script'}
  ];
  leanTransfer.footer='Three CED examples. One idea: contact moves knowledge across cultures.';
  leanTransfer.notes={
    minutes:5,
    land:[
      'Keep these examples together instead of turning each into a separate chain slide.',
      'Medicine: Greco-Islamic medical knowledge circulated into western Europe through broader interregional contact.',
      'Mathematics: numbering systems developed in South Asia, moved through the Islamic world, and were increasingly adopted in Europe.',
      'Writing: the Mongols themselves adopted and adapted the Uyghur script.',
      'The significance is not that Mongols invented these ideas. Interregional contact helped knowledge cross political and cultural boundaries.'
    ],
    ask:'What is the common mechanism behind all three examples?',
    listenFor:'Contact, travel, specialists, texts, borrowing, and adaptation.'
  };
}

if(leanWriting){
  leanWriting.eyebrow='Big Rock 3 · Transfer · Direct Mongol Example';
  leanWriting.notes=leanWriting.notes||{};
  leanWriting.notes.land=[
    'Use this as the one transfer example worth slowing down for because the Mongols themselves are the borrowers.',
    'A neighboring Uyghur scribal tradition provided a usable writing system.',
    'Mongol rulers adopted and adapted it for Mongolian and state administration.',
    'This disproves the idea that cultural transfer only moves from conqueror to conquered.'
  ];
}

if(leanSynthesis){
  leanSynthesis.eyebrow='AP Synthesis';
  leanSynthesis.footer='If students can explain this chain, they understand Topic 2.2.';
  leanSynthesis.notes=leanSynthesis.notes||{};
  leanSynthesis.notes.land=[
    'This is the only synthesis chain students need to see.',
    'State change: build a vast empire, then fragment into regional khanates.',
    'Connection: political conditions on older routes change.',
    'Transfer: knowledge crosses cultural boundaries.',
    'Significance: Eurasia becomes more politically and culturally interconnected.'
  ];
}

if(leanLanding){
  leanLanding.eyebrow='Topic 2.2 · Answer';
  leanLanding.subtitle='Mongol expansion changed states, altered conditions on older exchange networks, and intensified cross-cultural transfer across Eurasia.';
}

T.meta.subtitle='State change. Connection. Transfer.';
T.meta.endTarget='Students can explain Topic 2.2 as one story: Mongol state building and fragmentation changed political conditions across Eurasia, helping facilitate exchange and cross-cultural transfer.';

T.slides=[
  leanOpen,
  leanBigRocks,
  leanWho,
  leanSteppe,
  leanFirst10,
  leanOrganization,
  leanConquest,
  leanGovernPivot,
  leanFragment,
  leanYam,
  leanRoutes,
  leanTransfer,
  leanWriting,
  leanSynthesis,
  leanLanding
].filter(Boolean);

T.flow=[
  {id:'open',label:'Launch + Mongol Context',range:'0–10',minutes:10,teacher:'Give the three Big Rocks, then establish who the Mongols were and why steppe life mattered.',students:'Connect steppe life to mobility and the three-part significance frame.',slide:0},
  {id:'first10',label:'First & 10',range:'10–20',minutes:10,teacher:'Read only for evidence that fits the three Big Rocks.',students:'Sort evidence into state change, connection, or transfer.',slide:4},
  {id:'conquest',label:'Build the Empire',range:'20–35',minutes:15,teacher:'Teach organization, mobility, deception, and adaptation as one conquest system.',students:'Explain why conquest required more than horses.',slide:5},
  {id:'govern',label:'Govern + Fragment',range:'35–50',minutes:15,teacher:'Pivot from conquest to rule; explain regionalization, tolerance, communication, and fragmentation.',students:'Explain how scale created a governance problem.',slide:7},
  {id:'exchange',label:'Big Rock 2: Connection',range:'50–64',minutes:14,teacher:'Use the Yam and CCOT comparison to show how old routes operated under new political conditions.',students:'Explain how communication and protection affected movement.',slide:9},
  {id:'transfer',label:'Big Rock 3: Transfer',range:'64–76',minutes:12,teacher:'Teach the three CED examples together, then slow down only for Uyghur script.',students:'Explain how contact moved knowledge across cultures.',slide:11},
  {id:'skill',label:'AP Synthesis',range:'76–86',minutes:10,teacher:'Build the single state change -> connection -> transfer argument.',students:'Explain the full significance chain.',slide:13},
  {id:'close',label:'Land the Story',range:'86–90',minutes:4,teacher:'End on why Mongol significance was bigger than conquest.',students:'State Topic 2.2 in one sentence.',slide:14}
];

})();
