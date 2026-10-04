'use strict';
// Authored Unit 2 atlas selections. Geographic corridors are simplified instructional connections.
const silk=[[[116.4,39.9],[108.94,34.34],[94.66,40.14],[75.99,39.47],[66.98,39.65],[58.38,37.66],[46.29,38.08],[28.98,41.01]]];
const sea=[[[39.52,-8.97],[46,-7],[60,-1],[72,5],[75.78,11.25]],[[56.46,27.07],[59,23],[64,19],[70,14],[75.78,11.25]],[[75.78,11.25],[73,7],[78,4],[84,5],[93,6],[95.2,6.2],[97,6],[99,4.5],[101,2.6],[102.24,2.2]],[[102.24,2.2],[104,1],[106,6],[111,10],[114,17],[118.68,24.87]]];
const desert=[[[-5,34],[-5,26],[-4,20],[-3,16],[-3.01,16.77]],[[-3.01,16.77],[-4.55,14.5],[-8,12.6]]];
const p=(name,ll,detail)=>({name,ll,detail});
const ports=[p('Kilwa',[39.52,-8.97],'Coastal merchants linked inland gold and ivory to maritime markets. Commercial and social contacts supported Islam alongside local African traditions.'),p('Hormuz',[56.46,27.07],'A Persian Gulf gateway connected maritime trade with Southwest Asian markets.'),p('Calicut',[75.78,11.25],'A western Indian port connected eastern and western markets. Cotton textiles and spices circulated through the network.'),p('Malacca',[102.24,2.2],'An early fifteenth-century port and sultanate benefited from its position beside a strategic strait.'),p('Quanzhou',[118.68,24.87],'Chinese maritime commerce connected producers and merchants with overseas markets for porcelain and silk.')];
const cities=[p('Chang’an / Xi’an',[108.94,34.34],'A longstanding Chinese urban center connected to overland exchange. Its role varied over time; this network predated 1200.'),p('Kashgar',[75.99,39.47],'An oasis city connected merchants passing through Central Asian routes. Water, supplies, and local knowledge mattered.'),p('Samarkand',[66.98,39.65],'A Central Asian trading city where merchants, goods, and cultural traditions crossed paths.'),p('Tabriz',[46.29,38.08],'An important commercial center connected Iranian lands with broader Eurasian exchange.')];
const desertPlaces=[p('Sijilmasa',[-4.27,31.28],'A northern gateway for caravans crossing the Sahara.'),p('Timbuktu',[-3.01,16.77],'A trade and scholarly center linked Saharan caravans with West African networks.'),p('Manding heartland: regional example',[-8,12.6],'A broad regional example of Mali’s southern economic connections. This marker does not locate Niani or identify a verified medieval capital site.')];
const topics={
'2.1':{layers:['Trade connections'],sets:[{paths:silk,key:'Silk Roads',color:'silk'}],places:cities},
'2.2':{layers:['Mongol connections'],sets:[{paths:[[[102.82,47.2],[116.4,39.9]],[[102.82,47.2],[75.99,39.47],[66.98,39.65],[46.29,38.08]]],key:'Selected connections across Mongol realms',color:'silk',dash:'6 4'}],places:[p('Karakorum',[102.82,47.2],'An imperial center under Ögedei and his successors. Chinggis Khan’s conquests preceded its development as a capital.'),p('Khanbaliq / Beijing',[116.4,39.9],'Kublai Khan’s capital connected Yuan China with the larger Mongol world.'),p('Samarkand',[66.98,39.65],'A Central Asian center within the Chagatai sphere. Mongol realms developed distinct political histories.'),p('Tabriz',[46.29,38.08],'A major center in the Ilkhanate. Connections across Mongol realms could support exchange even as political unity weakened.')]},
'2.3':{layers:['Summer winds','Winter winds'],sets:[{paths:sea,key:'Indian Ocean',color:'sea'}],places:ports},
'2.4':{layers:['Caravan connections'],sets:[{paths:desert,key:'Trans-Saharan',color:'desert',dash:'3 3'}],places:desertPlaces},
'2.5':{layers:['Islam and merchant communities','Paper and knowledge'],sets:[],places:[]},
'2.6':{layers:['Crops','Plague connections'],sets:[],places:[]},
'2.7':{layers:['All three networks','Silk Roads','Indian Ocean','Trans-Saharan'],sets:[],places:[]}
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
const topicNotes={
 '2.1':{
  title:'The Silk Roads',
  focus:'Demand and commercial systems made older overland connections busier and helped trading cities grow.',
  period:'Older connections; expansion after 1200. This view combines selected corridors used at different times.',
 },
 '2.2':{
  title:'The Mongol Empire',
  focus:'Conquest built an empire; regional khanates and later decline changed its political organization while connections supported exchange.',
  period:'Karakorum became an imperial capital under Ögedei. Khanbaliq was Kublai Khan’s capital. These centers were not all capitals at the same moment.',
 },
 '2.3':{
  title:'Exchange in the Indian Ocean',
  focus:'Monsoon knowledge worked with ships, navigation, and commercial relationships to expand exchange and strengthen ports and merchant communities.',
  period:'Older maritime networks expanded after 1200. Malacca grew in the early 1400s; Zheng He’s voyages occurred from 1405 to 1433. Portuguese routes are excluded.',
 },
 '2.4':{
  title:'Trans-Saharan Trade Routes',
  focus:'Camel transport, caravan organization, and complementary demand helped exchange expand; Mali both benefited from and facilitated trade.',
  period:'The trans-Saharan network predated 1200. Mali expanded in the thirteenth and fourteenth centuries. The southern marker represents a region, not a verified capital site.',
 },
 '2.5':{
  title:'Cultural Consequences of Connectivity',
  focus:'Repeated contacts supported the diffusion of beliefs, knowledge, and technologies; cities changed and travelers recorded their encounters.',
  period:'Islam, Buddhism, Hinduism, and paper had spread before 1200. This view examines continued contacts and effects during 1200 to 1450, not the origins of those traditions.',
 },
 '2.6':{
  title:'Environmental Consequences of Connectivity',
  focus:'Exchange connections carried living things. Crop diffusion could support production; pathogens could produce devastating effects.',
  period:'Bananas in Africa, Champa rice in China, and citrus in the Mediterranean have histories beginning before 1200. Their use and diffusion continued. The plague view selects fourteenth-century connections and claims no single origin.',
 },
 '2.7':{
  title:'Comparison of Economic Exchange',
  focus:'Overland caravans and maritime voyages connected different environments. All three networks relied on transport, commercial relationships, and places where merchants could exchange goods.',
  period:'c. 1200 to c. 1450. The map combines selected connections, not a snapshot showing every route operating simultaneously.',
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
const routeNotes={
 'Silk Roads':'Overland routes linked East Asian, Central Asian, and Southwest Asian markets. Oasis cities, caravanserai, and merchant intermediaries supported travel. Demand for luxury goods and commercial practices such as credit helped exchange expand.',
 'Indian Ocean':'Sea connections linked East Africa, Southwest Asia, South Asia, Southeast Asia, and China. Ships could carry large cargoes. Monsoon knowledge, navigation, port services, and merchant communities worked together to support exchange.',
 'Trans-Saharan':'Caravans connected North Africa with West African markets for gold, salt, and other goods. Camels, saddles, water supplies, and organized travel helped merchants cross the desert. Mali benefited from trade and helped facilitate it.',
 'Selected connections across Mongol realms':'Conquest brought distant regions under Mongol rulers. Connections across those realms supported travel and exchange along older networks. Regional khanates developed distinct political histories; later fragmentation did not end every connection.',
 'Selected connections supporting Islam’s spread':'Trade and merchant settlement supported repeated cultural contact across maritime and Saharan networks. Islam spread alongside commerce, while communities adapted beliefs and continued local traditions. These connections do not show one exact journey or the origins of Islam.',
 'Eurasian knowledge connections':'Paper, gunpowder, and other knowledge circulated through connected commercial and political worlds. Their histories began before 1200; later contacts supported further diffusion and adaptation. This line represents connections, not a documented itinerary of one technology.',
 'Selected fourteenth-century plague connections':'Connected overland and maritime regions contributed to plague transmission in the fourteenth century. The Black Sea and Mediterranean linked commercial communities with distant places. These selected connections do not establish one origin or every pathway of disease.'
};
module.exports={topics,view:authoredView,topicNotes,routeNotes};
