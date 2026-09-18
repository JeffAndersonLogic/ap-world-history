(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-2/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

T.meta=T.meta||{};
T.meta.subtitle='State change. Pax Mongolica. Transfer.';
T.meta.endTarget='Students can explain Topic 2.2 as one story: Mongol state building and fragmentation created the conditions for Pax Mongolica, which helped facilitate exchange and cross-cultural transfer across Eurasia.';

const open=byTitle('The Mongol Empire')||{};
open.phase='open';open.kind='hero';open.eyebrow='AP World History · Topic 2.2';
open.title='The Mongol Empire';
open.subtitle='How did Mongol expansion change states, exchange, and the movement of knowledge across Eurasia?';
open.position='upper-left';
open.visual=visual('2.2 - Steppes of Asia.jpg','Wide view of the Asian steppe used to frame Mongol mobility and scale','Topic 2.2 classroom visual · Steppes of Asia');
open.notes={minutes:2,land:['Give students the answer frame before the details: state change, Pax Mongolica, and transfer.','Use conquest as the beginning of the explanation, not the destination.'],ask:'What could one enormous empire change besides borders?',listenFor:'Government, communication, trade, travel, and movement of knowledge.'};

const big=byTitle('Four moves. One connected story')||byTitle('Three Big Rocks')||{};
big.phase='open';big.kind='grid';big.eyebrow='What Students Must Know';big.title='Three Big Rocks';delete big.subtitle;delete big.steps;
big.cards=[
  {title:'1 · STATE CHANGE',text:'Build a vast empire, then fragment into regional khanates.'},
  {title:'2 · PAX MONGOLICA',text:'Change conditions on exchange networks that already existed.'},
  {title:'3 · TRANSFER',text:'Move knowledge and cultural practices across regions.'}
];
big.footer='State change -> Pax Mongolica -> transfer.';
big.notes={minutes:2,land:['These are the three required dimensions of the lesson.','Return to this slide mentally after each section: what changed in states, what changed in connection, and what moved because of that connection?'],ask:'Which Big Rock is easiest to lose if we tell only the conquest story?',listenFor:'Connection or transfer.'};

const who={phase:'open',kind:'hero',eyebrow:'Context · Who Are the Mongols?',title:'Who were the Mongols?',subtitle:'Pastoral nomads of the Central Asian steppe.',position:'lower-left',visual:visual('2.2 - Who were the mongols.jpg','Mongol pastoral life on the Central Asian steppe','Topic 2.2 classroom visual · Who were the Mongols'),footer:'Herding · horses · mobility · kinship',notes:{minutes:2,land:['Before students meet the empire, establish the people and environment.','Mongol communities lived primarily as mobile pastoralists on the Central Asian steppe, moving with herds rather than building life around dense settled cities.','Horses were central to transportation, herding, communication, wealth, and warfare.'],ask:'What skills would daily life on this landscape reward?',listenFor:'Mobility, horsemanship, endurance, navigation across distance, cooperation, and adaptability.'}};

const steppe={phase:'open',kind:'hero',eyebrow:'Context · Why the Steppe Matters',title:'Steppe life shaped Mongol strengths.',subtitle:'Mobility was a way of life before it became a military advantage.',position:'bottom',visual:visual('2.2 - Mongol Camp Life.jpg','Mongol camp life on the Central Asian steppe','Topic 2.2 classroom visual · Mongol Camp Life'),footer:'Environment -> horse culture -> mobility -> military potential',notes:{minutes:2,land:['Connect environment to capability rather than treating Mongol military success as mysterious.','Mounted warfare and archery built on abilities that already mattered in steppe life.','The next pivot is that Chinggis Khan did not invent steppe horsemanship; he organized existing strengths into a disciplined conquest system.'],ask:'What is the difference between having skilled horsemen and having an empire-building army?',listenFor:'Organization, command, discipline, coordination, shared objectives, and scalable systems.'}};

const first10=byTitle('Read for three CED dimensions')||{};
first10.phase='first10';first10.kind='action';first10.eyebrow='First & 10 · 10 Minutes';first10.title='Read for three CED dimensions.';first10.subtitle='State change. Pax Mongolica. Transfer.';first10.action=first10.action||{label:'Open First & 10',url:'../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=response-id-fix-v1'};first10.notes={minutes:10,land:['Students should not read for random Mongol facts. Give them the three categories before they begin.'],ask:'Where does your evidence fit: state change, Pax Mongolica, or transfer?',listenFor:'Students can categorize evidence and explain why it matters.'};

const organization=byTitle('Chinggis Khan turns steppe warriors into a system')||{};
organization.phase='conquest';organization.kind='hero';organization.eyebrow='Big Rock 1 · State Change · Build';organization.title='Chinggis Khan turns steppe warriors into a system.';organization.subtitle='Coordination matters as much as horsemanship.';organization.position='right';organization.visual=visual('2.2 - Chinggis Museum.jpg','Chinggis Khan museum visual used to frame Mongol military organization','Topic 2.2 classroom visual · Chinggis Museum');organization.footer='Mechanism: organization makes conquest scalable.';organization.notes={minutes:4,land:['Chinggis Khan unified competing steppe groups and reorganized military loyalty around a larger command structure.','Organization reduced clan rivalry and allowed coordinated campaigns across large distances.'],ask:'Why is organization a military technology?',listenFor:'It improves coordination, obedience, communication, and scale.'};

const conquest=byTitle('Mobility is a weapon')||{};
conquest.phase='conquest';conquest.kind='grid';conquest.eyebrow='Big Rock 1 · State Change · Build';conquest.title='Why Mongol conquest worked.';conquest.subtitle='Mobility, deception, and organization worked together.';delete conquest.position;conquest.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
conquest.cards=[
  {title:'MOBILITY',text:'Mounted archers move fast and fight at range.'},
  {title:'DECEPTION',text:'Feigned retreat pulls enemies out of position.'},
  {title:'ORGANIZATION',text:'Discipline turns steppe skill into an empire-building army.'}
];
conquest.footer='Mobility was powerful, but cavalry alone could not take fortified cities.';
conquest.notes={minutes:4,land:['Compress the military story. Students need the mechanism, not a catalog of battles.','Mobility gave Mongol forces speed, range, and surprise. Feigned retreat could disrupt enemy formations.','This sets up the next slide: what happens when a mobile steppe army reaches city walls?'],ask:'Why is “the Mongols had horses” an incomplete explanation for conquest?',listenFor:'Organization, deception, specialist knowledge, siege technology, and adaptation.'};

const siege=byTitle('The Mongols borrowed what worked')||{};
siege.phase='conquest';siege.kind='hero';siege.eyebrow='Big Rock 1 · State Change · Adaptation';siege.title='The Mongols stole what worked.';siege.subtitle='Siege specialists turned mobility into city conquest.';siege.position='bottom';siege.visual=visual('2.2 - Mongols Borrow Siege Technology.jpeg','Mongol forces using borrowed siege technology against a fortified city','Topic 2.2 classroom visual · Mongols Borrow Siege Technology');siege.footer='Mechanism: adaptation lets a steppe army conquer fortified cities.';siege.notes={minutes:3,land:['Steppe cavalry alone could not reliably take fortified cities.','The Mongols incorporated siege specialists and techniques from conquered or recruited peoples. Use the visual to make adaptation visible: mobility got them to the city; stolen or borrowed expertise helped them break the walls.','This is the recurring Mongol pattern: use the system or expertise that solves the problem, regardless of origin.'],ask:'What does stealing or borrowing siege technology reveal about Mongol state building?',listenFor:'Adaptability, pragmatism, and willingness to use useful expertise from other peoples.'};

const govern=byTitle('Conquest creates a new problem')||{};
govern.phase='govern';govern.kind='prompt';govern.eyebrow='Governance Pivot';govern.title='Conquest creates a new problem.';govern.subtitle='How do you rule thousands of miles of diversity?';govern.notes={minutes:2,land:['Mark the pivot. Taking territory and governing it are different historical processes.'],ask:'What does an empire need that an army does not?',listenFor:'Records, administrators, taxation, communication, legitimacy, local cooperation.'};

const fragment=byTitle('Regional rule solves distance')||byTitle('One empire becomes four Mongol states')||{};
fragment.phase='govern';fragment.kind='map';fragment.eyebrow='Big Rock 1 · State Change · Fragment';fragment.title='One empire becomes four Mongol states.';fragment.subtitle='Regional rule solves distance — and weakens unified control.';fragment.mapLabel='SUCCESSOR KHANATES · c. 1300';fragment.visual=visual('2.2 - Map of the Khanates.png','Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty','Topic 2.2 classroom map · successor khanates');fragment.footer='Golden Horde · Chagatai · Ilkhanate · Yuan';fragment.notes={minutes:5,land:['Use the map here, after students understand how the empire was built.','Regional khanates shortened chains of command and adapted to local conditions.','Succession disputes, distance, and regional interests weakened a single unified political center.'],ask:'How can regional rule solve one problem and create another?',listenFor:'It improves local governance while strengthening regional independence and rivalry.'};

const yam=byTitle('Information moves at horse speed')||{};
yam.phase='exchange';yam.kind='hero';yam.eyebrow='Governance -> Connection';yam.title='Information moves at horse speed.';yam.subtitle='The Yam turns distance into a governable problem.';yam.position='bottom';yam.visual=visual('2.2 - Mongol Yam Relay Across the Steppe.png','Historical reconstruction of the Mongol Yam relay system across the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');yam.footer='The same infrastructure that helps rule an empire also helps connect it.';yam.notes={minutes:4,land:['Fold governance into one story: Mongol rulers used local officials, pragmatic religious tolerance, and communication systems to manage diversity and distance.','The Yam relay system let couriers change horses at stations and move orders and information across enormous distances.','The key bridge is this: infrastructure built to govern the empire also helps connect it.'],ask:'Why is a communication network both a governing tool and an exchange tool?',listenFor:'It moves orders, intelligence, officials, envoys, and information more predictably.'};

const transfer=byTitle('Connection moves knowledge')||{};
transfer.phase='transfer';transfer.kind='grid';transfer.eyebrow='Big Rock 3 · Transfer';transfer.title='Connection moves knowledge.';transfer.subtitle='Pax Mongolica moves more than goods. It moves ideas.';transfer.visual=visual('2.2 - Knowledge Shared.jpg','Knowledge moving across cultures through Mongol-era Eurasian connections','Topic 2.2 classroom visual · Knowledge Shared');transfer.cards=[
  {title:'MEDICINE',text:'Greco-Islamic medical knowledge -> western Europe'},
  {title:'MATHEMATICS',text:'Numbering systems -> Europe'},
  {title:'WRITING',text:'Mongols adopt the Uyghur script'}
];transfer.footer='Three CED examples. One idea: contact moves knowledge across cultures.';transfer.notes={minutes:5,land:['Keep these examples together instead of turning each into a separate chain slide.','Medicine: Greco-Islamic medical knowledge circulated into western Europe through broader interregional contact.','Mathematics: numbering systems developed in South Asia, moved through the Islamic world, and were increasingly adopted in Europe.','Writing: the Mongols themselves adopted and adapted the Uyghur script.'],ask:'What is the common mechanism behind all three examples?',listenFor:'Contact, travel, specialists, texts, borrowing, and adaptation.'};

const writing=byTitle('The Mongols borrow a writing system')||{};
writing.phase='transfer';writing.kind='hero';writing.eyebrow='Big Rock 3 · Transfer · Direct Mongol Example';writing.title='The Mongols borrow a writing system.';writing.subtitle='Uyghur script -> Mongol adoption -> adaptation -> state use';writing.position='right';writing.visual=visual('2.2 - Cinematic Mongol city gate.png','Mongol representatives at a fortified city, reused here as a visual for Mongol borrowing and adaptation','HISTORICAL RECONSTRUCTION — AI GENERATED');writing.footer='Direct Mongol example: conquerors borrow and adapt useful cultural technology.';writing.notes={minutes:3,land:['Use this as the one transfer example worth slowing down for because the Mongols themselves are the borrowers.','A neighboring Uyghur scribal tradition provided a usable writing system.','Mongol rulers adopted and adapted it for Mongolian and state administration.'],ask:'Why is this example useful for disproving the idea that transfer only moves from conqueror to conquered?',listenFor:'The Mongols are the borrowers; cultural transfer can move in multiple directions.'};

const synthesis=byTitle('State Change -> Connection -> Transfer -> Significance')||{};
synthesis.phase='skill';synthesis.kind='process';synthesis.eyebrow='AP Synthesis';synthesis.title='State Change -> Pax Mongolica -> Transfer -> Significance';synthesis.steps=[
  {label:'STATE CHANGE',text:'Build a vast empire; unified rule fragments'},
  {label:'PAX MONGOLICA',text:'Political conditions on older routes change'},
  {label:'TRANSFER',text:'Knowledge crosses cultural boundaries'},
  {label:'SIGNIFICANCE',text:'Eurasia becomes more interconnected'}
];synthesis.footer='If students can explain this chain, they understand Topic 2.2.';synthesis.notes={minutes:4,land:['This is the only synthesis chain students need to see.','State change: build a vast empire, then fragment into regional khanates.','Pax Mongolica: political conditions on older routes change.','Transfer: knowledge crosses cultural boundaries.'],ask:'How do the three Big Rocks connect to one another?',listenFor:'State power creates conditions for connection; connection creates opportunities for transfer.'};

const landing=byTitle('Mongol significance was bigger than conquest')||byTitle('Empire changed the conditions of connection')||{};
landing.phase='close';landing.kind='hero';landing.eyebrow='Topic 2.2 · Answer';landing.title='Mongol significance was bigger than conquest.';landing.subtitle='Pax Mongolica changed conditions on older exchange networks, helping people, goods, information, and knowledge move across Eurasia.';landing.position='bottom';landing.visual=visual('2.2 - Cinematic Mongol Caravan.png','Historical reconstruction of a protected caravan moving through Mongol-controlled territory','HISTORICAL RECONSTRUCTION — AI GENERATED');landing.footer='State change -> Pax Mongolica -> transfer.';landing.notes={minutes:4,land:['End by naming Pax Mongolica directly.','The Mongols did not create the Silk Roads, but their empire changed political conditions on older routes.','That is why Mongol significance was bigger than conquest: state change altered connection, and connection intensified transfer.'],ask:'What is the one-sentence answer to Topic 2.2?',listenFor:'Mongol expansion changed states, supported Pax Mongolica, and intensified cross-cultural transfer.'};

T.slides=[open,big,who,steppe,first10,organization,conquest,siege,govern,fragment,yam,transfer,writing,synthesis,landing].filter(Boolean);

T.flow=[
  {id:'open',label:'Launch + Mongol Context',range:'0–10',minutes:10,teacher:'Give the three Big Rocks, then establish who the Mongols were and why steppe life mattered.',students:'Connect steppe life to mobility and the three-part significance frame.',slide:0},
  {id:'first10',label:'First & 10',range:'10–20',minutes:10,teacher:'Read only for evidence that fits the three Big Rocks.',students:'Sort evidence into state change, Pax Mongolica, or transfer.',slide:4},
  {id:'conquest',label:'Build the Empire',range:'20–38',minutes:18,teacher:'Teach organization, mobility, deception, and siege adaptation as one conquest system.',students:'Explain why conquest required more than horses.',slide:5},
  {id:'govern',label:'Govern + Fragment',range:'38–52',minutes:14,teacher:'Pivot from conquest to rule; explain regionalization, tolerance, communication, and fragmentation.',students:'Explain how scale created a governance problem.',slide:8},
  {id:'exchange',label:'Pax Mongolica',range:'52–64',minutes:12,teacher:'Use the Yam and final caravan image to show how governance infrastructure also supports movement.',students:'Explain how communication and protection affected movement.',slide:10},
  {id:'transfer',label:'Big Rock 3: Transfer',range:'64–76',minutes:12,teacher:'Teach the three CED examples together, then slow down only for Uyghur script.',students:'Explain how contact moved knowledge across cultures.',slide:11},
  {id:'skill',label:'AP Synthesis',range:'76–86',minutes:10,teacher:'Build the single state change -> Pax Mongolica -> transfer argument.',students:'Explain the full significance chain.',slide:13},
  {id:'close',label:'Land the Story',range:'86–90',minutes:4,teacher:'End on Pax Mongolica and why Mongol significance was bigger than conquest.',students:'State Topic 2.2 in one sentence.',slide:14}
];
})();
