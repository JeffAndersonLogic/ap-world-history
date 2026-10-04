'use strict';
// Authored Unit 2 atlas selections. Geographic corridors are simplified instructional connections.
const silk=[[[116.4,39.9],[108.94,34.34],[94.66,40.14],[75.99,39.47],[66.98,39.65],[58.38,37.66],[46.29,38.08],[28.98,41.01]]];
const sea=[[[39.52,-8.97],[46,-7],[60,-1],[72,5],[75.78,11.25]],[[56.46,27.07],[59,23],[64,19],[70,14],[75.78,11.25]],[[75.78,11.25],[73,7],[78,4],[84,5],[93,6],[97,5],[102.24,2.2]],[[102.24,2.2],[104,1],[106,6],[111,10],[114,17],[118.68,24.87]]];
const desert=[[[-5,34],[-5,26],[-4,20],[-3,16],[-3.01,16.77]],[[-3.01,16.77],[-4.55,14.5],[-8,12.6]]];
const p=(name,ll,detail)=>({name,ll,detail});
const ports=[p('Kilwa',[39.52,-8.97],'Coastal merchants linked inland gold and ivory to maritime markets. Commercial and social contacts supported Islam alongside local African traditions.'),p('Hormuz',[56.46,27.07],'A Persian Gulf gateway connected maritime trade with Southwest Asian markets.'),p('Calicut',[75.78,11.25],'A western Indian port connected eastern and western markets. Cotton textiles and spices circulated through the network.'),p('Malacca',[102.24,2.2],'An early fifteenth-century port and sultanate benefited from its position beside a strategic strait.'),p('Quanzhou',[118.68,24.87],'Chinese maritime commerce connected producers and merchants with overseas markets for porcelain and silk.')];
const cities=[p('Chang’an / Xi’an',[108.94,34.34],'A longstanding Chinese urban center connected to overland exchange. Its role varied over time; this network predated 1200.'),p('Kashgar',[75.99,39.47],'An oasis city connected merchants passing through Central Asian routes. Water, supplies, and local knowledge mattered.'),p('Samarkand',[66.98,39.65],'A Central Asian trading city where merchants, goods, and cultural traditions crossed paths.'),p('Tabriz',[46.29,38.08],'An important commercial center connected Iranian lands with broader Eurasian exchange.')];
const desertPlaces=[p('Sijilmasa',[-4.27,31.28],'A northern gateway for caravans crossing the Sahara.'),p('Timbuktu',[-3.01,16.77],'A trade and scholarly center linked Saharan caravans with West African networks.'),p('Niani region',[-8,12.6],'A southern connection to Mali’s wider economy. The marker identifies a region rather than a verified medieval capital site.')];
const topics={
'2.1':{layers:['Trade connections'],sets:[{paths:silk,key:'Silk Roads',color:'silk'}],places:cities,prompt:'How could oasis cities and merchant services make long-distance overland trade more reliable?'},
'2.2':{layers:['Mongol connections'],sets:[{paths:[[[102.82,47.2],[116.4,39.9]],[[102.82,47.2],[75.99,39.47],[66.98,39.65],[46.29,38.08]]],key:'Selected connections across Mongol realms',color:'silk',dash:'6 4'}],places:[p('Karakorum',[102.82,47.2],'An imperial center under Ögedei and his successors. Chinggis Khan’s conquests preceded its development as a capital.'),p('Khanbaliq / Beijing',[116.4,39.9],'Kublai Khan’s capital connected Yuan China with the larger Mongol world.'),p('Samarkand',[66.98,39.65],'A Central Asian center within the Chagatai sphere. Mongol realms developed distinct political histories.'),p('Tabriz',[46.29,38.08],'A major center in the Ilkhanate. Connections across Mongol realms could support exchange even as political unity weakened.')],prompt:'How could Mongol rule facilitate exchange? Explain one change and one continuity in existing trade networks.'},
'2.3':{layers:['Summer winds','Winter winds'],sets:[{paths:sea,key:'Indian Ocean',color:'sea'}],places:ports,prompt:'Why did a merchant need to consider the return voyage when choosing a departure season?'},
'2.4':{layers:['Caravan connections'],sets:[{paths:desert,key:'Trans-Saharan',color:'desert',dash:'3 3'}],places:desertPlaces,prompt:'How did camel transport and knowledge of desert conditions help connect different markets?'},
'2.5':{layers:['Islam and merchant communities','Paper and knowledge'],sets:[],places:[],prompt:'How could the same connections that carried goods also support cultural exchange?'},
'2.6':{layers:['Crops','Plague connections'],sets:[],places:[],prompt:'How did greater connectivity produce both benefits and harmful consequences?'},
'2.7':{layers:['All three networks','Silk Roads','Indian Ocean','Trans-Saharan'],sets:[],places:[],prompt:'Explain one similarity and one difference between two networks. Connect each to geography or transportation.'}
};
function view(topic,layer){const t=topics[topic];let sets=t.sets,places=t.places;
 if(topic==='2.5'){sets=layer===0?[{paths:sea.concat(desert),key:'Selected connections supporting Islam’s spread',color:'sea'}]:[{paths:silk,key:'Eurasian knowledge connections',color:'silk'}];places=layer===0?[ports[0],ports[2],ports[3],desertPlaces[1]]:[p('China',[108.94,34.34],'Paper originated in China long before this unit’s period. Existing exchanges continued to support the circulation of knowledge.'),cities[2],p('Baghdad',[44.37,33.32],'A longstanding center of scholarship and book production. Cultural diffusion unfolded over centuries through many intermediaries.')];}
 if(topic==='2.6'){sets=layer===0?[{paths:[[[106,16],[110,28]]],key:'Champa rice connection',color:'sea'},{paths:[[[102,0],[80,5],[55,-3],[39,-6],[31,-2]]],key:'Selected banana diffusion connections',color:'desert',dash:'4 4'}]:[{paths:[[[75.99,39.47],[66.98,39.65],[46.29,38.08],[34.3,45],[28.98,41.01],[15,37],[9,44]]],key:'Selected fourteenth-century plague connections',color:'silk',dash:'6 4'}];places=layer===0?[p('Southern China',[110,28],'Early-ripening rice associated with Champa had arrived before 1200. Its continued use supported agricultural productivity during this period.'),p('East Africa',[39,-6],'Bananas reached Africa before this period through earlier exchanges; cultivation and diffusion continued.')]:[p('Central Asia',[75.99,39.47],'Fourteenth-century plague involved connected regions and multiple pathways. This map does not identify a single point of origin.'),p('Black Sea',[34.3,45],'Commercial connections around the Black Sea contributed to plague transmission into Mediterranean networks.'),p('Mediterranean',[15,37],'Maritime connections helped disease reach distant communities. The displayed links simplify a complex transmission history.')];}
 if(topic==='2.7'){const all=[{paths:silk,key:'Silk Roads',color:'silk'},{paths:sea,key:'Indian Ocean',color:'sea'},{paths:desert,key:'Trans-Saharan',color:'desert',dash:'3 3'}];sets=layer===0?all:[all[layer-1]];places=layer===0?[cities[1],cities[2],ports[2],ports[3],desertPlaces[1]]:layer===1?cities:layer===2?ports:desertPlaces;}
 return{...t,sets,places};}

// Place details teach a mechanism, not just a vocabulary definition.
cities[1].detail='Kashgar sat at a junction of Central Asian routes. Water, provisions, caravanserai, and local information supported caravan travel. Merchants could trade with intermediaries instead of carrying a product across the entire network.';
cities[2].detail='Samarkand linked merchants and markets. Growing demand for luxury goods supported trading-city growth. Credit, bills of exchange, and banking houses could reduce the need to carry every payment as coin; their use varied by place and period.';
ports[2].detail='Calicut connected eastern and western markets. Larger ships carried more cargo; the compass helped sailors find direction and the astrolabe supported celestial navigation. Those tools worked with knowledge of monsoon winds rather than removing environmental constraints.';
const investigations={
 '2.1':{
  title:'The Silk Roads', skill:'Contextualization and causation',
  focus:'Demand and commercial systems made older overland connections busier and helped trading cities grow.',
  period:'Older connections; expansion after 1200. This view combines selected corridors used at different times.',
  prediction:'A merchant must cross deserts and mountains to reach distant markets. Predict which services a stopping place would need to attract merchants.',
  explanation:'Choose Kashgar or Samarkand. Explain how geography and one commercial practice could help trade expand and the city grow. Connect your evidence to a specific cost or risk.',
  transfer:'Without reopening the details, explain how a caravanserai and a bill of exchange address different problems faced by a merchant.',
  sourceQuestion:'Identify one detail about the Yamb relay stations that supported imperial messengers. Explain how it addressed a travel problem and what this passage cannot establish about private merchants.',
  checks:['Name a place and a commercial practice.','Explain what the practice allowed merchants to do.','Connect increased exchange to an effect on a trading city.'],
  carry:'Carry a commercial mechanism forward into 2.7. Cultural and disease effects belong in the later topic views.'
 },
 '2.2':{
  title:'The Mongol Empire',skill:'Continuity and change; making connections',
  focus:'Conquest built an empire; regional khanates and later decline changed its political organization while connections supported exchange.',
  period:'Karakorum became an imperial capital under Ögedei. Khanbaliq was Kublai Khan’s capital. These centers were not all capitals at the same moment.',
  prediction:'Predict how connecting distant regions under Mongol rulers could change the risks of travel. What might happen when political unity weakened?',
  explanation:'Use two named centers and the source to explain one way Mongol rule supported connections. Then identify an older connection that continued and a limit on political stability.',
  transfer:'Explain why political fragmentation does not automatically mean that every trade connection ends. Use an example from this view.',
  sourceQuestion:'What does Rubruck observe at the khan’s court? Explain how his missionary purpose might shape what he emphasizes.',
  checks:['Distinguish conquest, regional khanates, and later decline.','Explain a mechanism of connection.','Use the source with a limit on what it can prove.'],
  carry:'Connect this geographic view to the lesson’s Greco-Islamic medical knowledge, numbering systems, and Uyghur-script examples. The map alone cannot establish their exact transmission paths.'
 },
 '2.3':{
  title:'Exchange in the Indian Ocean',skill:'Making connections and causation',
  focus:'Monsoon knowledge worked with ships, navigation, and commercial relationships to expand exchange and strengthen ports and merchant communities.',
  period:'Older maritime networks expanded after 1200. Malacca grew in the early 1400s; Zheng He’s voyages occurred from 1405 to 1433. Portuguese routes are excluded.',
  prediction:'For an Arabian Sea voyage toward western India, predict why departure season and the return journey both matter.',
  explanation:'Use the wind view and a named port to explain how environmental knowledge interacted with one technology or commercial relationship to support exchange. Explain one effect on the port.',
  transfer:'Without reopening the details, explain why a better compass would still leave a merchant needing knowledge of seasonal winds.',
  sourceQuestion:'Identify one observation about Kilwa and one piece of information Ibn Battuta reports hearing from a merchant. Explain why their evidentiary status differs.',
  checks:['Explain wind reversal and round-trip planning.','Connect one human response to the environmental pattern.','Explain an effect using a named port or merchant community.'],
  carry:'Use a port example in 2.5 and a transportation or commercial comparison in 2.7.'
 },
 '2.4':{
  title:'Trans-Saharan Trade Routes',skill:'Explaining processes and causation',
  focus:'Camel transport, caravan organization, and complementary demand helped exchange expand; Mali both benefited from and facilitated trade.',
  period:'The trans-Saharan network predated 1200. Mali expanded in the thirteenth and fourteenth centuries. The southern marker represents a region, not a verified capital site.',
  prediction:'Predict what a caravan would need to cross the Sahara reliably, beyond having camels.',
  explanation:'Use one northern and one southern location to explain how camel saddles, caravan organization, and Mali’s power could support exchange. Explain how trade could also strengthen Mali.',
  transfer:'A ruler taxes caravan trade but does little to support safe passage. Explain why revenue alone does not demonstrate that the ruler facilitated exchange.',
  sourceQuestion:'Identify one detail about salt or caravan exchange in Ibn Battuta’s account. Explain what it supports about connections across the Sahara and what it cannot prove about Mali’s rulers on its own.',
  checks:['Explain a transport or organizational mechanism.','Distinguish benefiting from trade from facilitating it.','Connect the two sides of the Sahara.'],
  carry:'Compare environmental knowledge and commercial organization with the maritime network in 2.7.'
 },
 '2.5':{
  title:'Cultural Consequences of Connectivity',skill:'Sourcing and cultural causation',
  focus:'Repeated contacts supported the diffusion of beliefs, knowledge, and technologies; cities changed and travelers recorded their encounters.',
  period:'Islam, Buddhism, Hinduism, and paper had spread before 1200. This view examines continued contacts and effects during 1200 to 1450, not the origins of those traditions.',
  prediction:'Predict why people who repeatedly trade and settle together might exchange more than goods.',
  explanation:'Choose one location and explain how repeated contact could support cultural exchange while local traditions continued. Use a source detail and identify a limit on your inference.',
  transfer:'Explain why the arrival of an imported belief or technology does not prove that a society became identical to the place it came from.',
  sourceQuestion:'What does this religious biography report about Bar Sauma’s exchange with the Cardinals? Explain how its Christian author’s perspective shapes what we learn about the encounter.',
  checks:['Name a cultural or intellectual development.','Explain contact, adaptation, or continued exchange.','Separate the source’s observation from your inference.'],
  carry:'Revisit the full lesson for Buddhism, Hinduism, gunpowder, changing cities, and the accounts of Ibn Battuta, Marco Polo, and Margery Kempe. This atlas is a focused investigation, not the whole topic.'
 },
 '2.6':{
  title:'Environmental Consequences of Connectivity',skill:'Making connections and causation',
  focus:'Exchange connections carried living things. Crop diffusion could support production; pathogens could produce devastating effects.',
  period:'Bananas in Africa, Champa rice in China, and citrus in the Mediterranean have histories beginning before 1200. Their use and diffusion continued. The plague view selects fourteenth-century connections and claims no single origin.',
  prediction:'Predict how a connection that helps people obtain useful crops could also expose communities to disease.',
  explanation:'Compare one crop example with one plague connection. Explain how greater connectivity could produce different environmental and social consequences. State one limitation of the simplified map.',
  transfer:'A crop appears in a region far from its earlier cultivation. Explain what this suggests about connections and what it does not establish about a single voyage or merchant.',
  sourceQuestion:'Identify one symptom and one attempt to stop the epidemic described in Florence. Explain why this account of one city cannot establish every route by which plague spread.',
  checks:['Explain both crop and pathogen diffusion.','Connect movement to a consequence.','Avoid claiming a precise disease origin or single transmission route.'],
  carry:'Citrus in the Mediterranean is another course example of continued crop diffusion. Use the lesson to compare it with rice and bananas.'
 },
 '2.7':{
  title:'Comparison of Economic Exchange',skill:'Comparison and evidence-based argument',
  focus:'Compare the same category across networks, explain each evidence pair, and test the comparison with a limiting example.',
  period:'c. 1200 to c. 1450. The map combines selected connections, not a snapshot showing every route operating simultaneously.',
  prediction:'Predict one similarity and one difference between overland and maritime exchange within the same category: environment, transport, or commercial organization.',
  explanation:'Choose two networks. Explain one similarity and one difference within a shared category, using a named example from each. Use a third example to identify a limit or condition on your comparison.',
  transfer:'Without reopening the map details, explain why two lists of facts are weaker than a comparison using the same category and explaining the relationship.',
  sourceQuestion:'Compare one commercial practice in Pegolotti’s handbook with one in Ibn Battuta’s account. Explain how the authors’ purposes affect their descriptions.',
  checks:['Compare the same category across two networks.','Explain how both examples support the relationship.','Use a third example to qualify the claim.'],
  carry:'Use your saved observations as evidence to reason from. Write your own conclusion.'
 }
};
// Crops are mapped as regional examples, not invented point-to-point voyages.
const originalView=view;
function authoredView(topic,layer){
 const v=originalView(topic,layer);
 if(topic==='2.3')v.places=[...v.places,p('Gujarat region',[72.62,22.31],'Gujarat’s ports and producers participated in cotton-textile commerce. Merchant networks, port services, and rulers’ interest in revenue helped connect regional production with overseas buyers.'),p('Mogadishu',[45.34,2.05],'Ibn Battuta described a host-broker system here in 1331. His account gives evidence about one port’s commercial relationships, not every port in the network.')];
 if(topic==='2.2'&&layer===1){v.sets=[];v.places=[p('Uyghur region',[89.19,42.94],'Mongols adopted the Uyghur script for writing their language. Adoption linked empire building with expertise drawn from conquered or connected peoples.'),p('Southwest Asia',[44.37,33.32],'Greco-Islamic medical knowledge circulated through connected intellectual worlds. Its movement toward western Europe involved many intermediaries and earlier histories.'),p('Western Europe',[12.5,45],'Medical knowledge and numbering systems reached Europe through multiple pathways. Mongol connections belong within this larger history of exchange; the map does not establish a single transmission route.')];}
 if(topic==='2.5'&&layer===2){v.sets=[];v.places=[p('India',[80,22],'Buddhism and Hinduism originated long before 1200. Religious, commercial, and political contacts supported their continued influence beyond India.'),p('Southeast Asia',[104,13],'Hindu and Buddhist traditions had long histories here before 1200. Local rulers and communities adapted imported traditions rather than simply copying an entire society.'),p('East Asia',[113,34],'Buddhism had spread into East Asia before 1200 and continued to influence religious and cultural life during this period.')];}
 if(topic==='2.5'&&layer===1)v.places[0].detail='Paper and gunpowder developed in China before 1200. Connected commercial and political worlds supported their wider circulation; later users adapted technologies to their own purposes. The line represents connections, not one documented journey of either technology.';
 if(topic==='2.5'&&layer===3){v.sets=[];v.places=[p('Venice',[12.34,45.44],'Marco Polo’s account described Asian societies for European readers. A traveler’s account can reveal connections while requiring attention to its production, audience, and limits.'),p('Tangier',[ -5.81,35.76],'Ibn Battuta traveled widely from his Moroccan home. His education and Muslim legal background shaped the communities and practices he discussed.'),p('King’s Lynn',[0.4,52.75],'Margery Kempe’s account recorded pilgrimage and religious experience. Travelers did not all have the same purpose, status, or perspective.'),p('Baghdad',[44.37,33.32],'The biography of Bar Sauma names Baghdad as the center of the Church of the East. Its account of an encounter with European Cardinals gives a Christian perspective on connections across the Mongol world. This is a religious biography, not a surviving diary written by Bar Sauma.')];}
 if(topic==='2.6'&&layer===0){v.sets=[];v.places=[
  p('Southern China',[110,28],'Champa rice reached China before 1200. Continued cultivation of early-ripening varieties supported agricultural productivity during this period.'),
  p('East Africa',[39,-6],'Bananas reached Africa through earlier connections before 1200; their cultivation and diffusion continued. The marker identifies a region, not a single landing site.'),
  p('Mediterranean',[15,37],'Citrus cultivation spread through earlier Mediterranean connections and continued during this period. An imported crop’s presence cannot establish one precise journey.')];}
 return v;
}
topics['2.2'].layers.push('Knowledge and writing');
topics['2.5'].layers[1]='Paper, gunpowder, and knowledge';
topics['2.5'].layers.push('Buddhism and Hinduism','Travelers and their perspectives');
// Keep technological diffusion within its long chronology, not a new origin at 1200.
investigations['2.5'].carry='Compare these views with the lesson’s changing urban fortunes: expanded exchange could support growth, while conquest and disruption could damage cities. Cultural transfer did not make every society identical.';
module.exports={topics,view:authoredView,investigations};
