/* One working example of every slide template, for the catalog at
 * teacher/slide-templates.html and for scripts/test/slide-templates.test.js.
 *
 * Each entry is a complete slide object: copy one into a topic's
 * teaching-base or presentation-assets file and change the words. The
 * template library itself is assets/js/behistorical-slide-templates.js.
 *
 * The test fails if a template exists with no example here, so this file is
 * also the list of what can be built with.
 */
(function(){
'use strict';
const IMG='../assets/images/topics/';
const img=(folder,name)=>IMG+folder+'/'+encodeURIComponent(name);
const AI=(folder,name,alt,extra)=>Object.assign({url:img(folder,name),alt,ai:true},extra||{});

const dhow=AI('2-3','2.3 - Dhow Ship.jpeg','Illustration of a dhow sailing ship crossing the Indian Ocean');
const zhengHe=AI('2-3','2.3 - Zheng He Fleet.jpg','Illustration of the Zheng He fleet anchored at a busy harbor',{position:'40% 50%'});
const market=AI('2-3','2.3 - Malay market.jpg','Illustration of a busy market street in a Southeast Asian port',{position:'50% 70%'});
const swahiliPort=AI('2-3','2.3 - Indian Ocean Trade.jpg','Illustration of dhows and traders at a Swahili coast port',{position:'55% 50%'});
const caravan=AI('2-2','2.2 - Cinematic Mongol Caravan.png','Illustration of a caravan crossing the steppe',{cropBottom:.12});
const cityGate=AI('2-2','2.2 - Cinematic Mongol city gate.png','Illustration of Mongol officials recording merchants at a city gate',{cropBottom:.13});
const archers=AI('2-2','2.2 - Cinematic Mongol Archers.png','Illustration of Mongol mounted archers on the steppe',{cropBottom:.13});
const siege=AI('2-2','2.2 - Mongols Borrow Siege Technology.jpeg','Illustration of a Mongol army working a counterweight trebuchet beside a burning city');
const monsoonMap={url:img('2-3','2.3 - Monsoons map.jpg'),alt:'Map of seasonal monsoon wind patterns across the Indian Ocean',credit:'Map · BeHistorical visual'};

const OCEAN_TURN='The ocean ran on a schedule. The Sahara has no monsoon. **What would merchants need to cross a desert again and again?**';

window.BH_SLIDE_TEMPLATE_EXAMPLES=[
  {group:'Relationships',name:'Equation',note:'Parts that add up to one outcome. Braces group the parts.',slide:{
    kind:'equation',eyebrow:'The Network · Equation',title:'Four pieces make the desert route work.',footer:'Transportation solves possibility. Demand supplies motive.',
    template:{terms:[{word:'Camel',note:'desert-adapted transport'},{word:'Caravan',note:'scale, supplies, security'},{word:'Oasis',note:'water and staged movement'},{word:'Demand',note:'profit justifies the risk'}],
      result:{word:'Network',note:'regular desert crossings'},groups:[{from:0,to:2,label:'Makes it possible'},{from:3,to:3,label:'Makes it worth it'}]}}},
  {group:'Relationships',name:'Equation II: stacked sum',note:'The same idea set as column addition.',slide:{
    kind:'equation-stack',eyebrow:'Commercial Tools · Equation',title:'New tools make long-distance trade less risky.',footer:'Most of the parts are ways to move trust, not goods.',
    template:{terms:[{word:'Caravanserai',note:'Safe roadside inns for merchants and animals'},{word:'Flying cash',note:'Paper credit so merchants need not carry coins'},{word:'Bills of exchange',note:'Promises to pay honored in distant cities'},{word:'Demand for luxury goods',note:'Silk and porcelain worth the long haul'}],result:{word:'A growing Silk Road'}}}},
  {group:'Relationships',name:'Equation III: take one away',note:'What fails without each part.',slide:{
    kind:'equation-remove',eyebrow:'The Network · Take One Away',title:'Remove any piece and the route fails.',footer:'A system is only as strong as the piece you cannot replace.',
    template:{terms:[{word:'Camel',without:'Without it: no animal can carry loads that far.'},{word:'Caravan',without:'Without it: one merchant faces every risk alone.'},{word:'Oasis',without:'Without it: no water, so no crossing.'},{word:'Demand',without:'Without it: nobody pays for the danger.'}]}}},
  {group:'Relationships',name:'Exchange',note:'Places stacked in their real north to south order, goods moving between them.',slide:{
    kind:'exchange',eyebrow:'Commercial Demand · Exchange',title:'Gold and salt create complementary demand.',footer:'Goods matter because demand makes transport profitable.',
    template:{lede:'Each side has what the other lacks. **Price differences reward movement**, so the desert gets crossed on purpose.',
      places:[{tag:'North',name:'North Africa',text:'Markets and wider Mediterranean connections'},{tag:'Between',name:'The Sahara',text:'Major salt deposits'},{tag:'South',name:'West Africa',text:'Major gold production'}],
      flows:[{label:'Gold',dir:'up'},{label:'Salt',dir:'down'}]}}},
  {group:'Relationships',name:'Exchange II: back and forth',note:'Two places, two flows. Here the flows are seasons.',slide:{
    kind:'exchange-flow',eyebrow:'Environment · Exchange',title:'The monsoon runs the ocean in both directions.',footer:'A schedule you can predict is a trade you can plan.',
    template:{places:[{name:'East Africa',note:'Swahili coast'},{name:'India',note:'Gujarat and Malabar coasts'}],flows:[{label:'Summer · southwest wind',dir:'right'},{label:'Winter · northeast wind',dir:'left'}]}}},
  {group:'Relationships',name:'Exchange III: hub',note:'Many regions into one center. Angles in degrees place each spoke.',slide:{
    kind:'exchange-hub',eyebrow:'Commercial Hub · Exchange',title:'Everything passes through the strait.',footer:'Control the chokepoint and you tax the whole ocean.',
    template:{center:{name:'Malacca'},spokes:[{name:'Arabia',note:'horses and merchants',angle:-150},{name:'India',note:'cotton textiles',angle:150},{name:'China',note:'silk and porcelain',angle:-30},{name:'Spice Islands',note:'cloves and nutmeg',angle:30}]}}},
  {group:'Relationships',name:'Split',note:'One against many: a dark half and a paper half.',slide:{
    kind:'split-contrast',footer:'Organization turns individual risk into network capacity.',
    template:{left:{tag:'Alone',title:'One merchant crosses a desert.',text:['Carries every risk personally.','One loss of water or cargo ends the trip.']},
      right:{tag:'Together',title:'A caravan builds a system.',items:[{label:'Pool',text:'animals, cargo, labor'},{label:'Guide',text:'route and water knowledge'},{label:'Protect',text:'shared security and risk'},{label:'Stage',text:'known stopping points'}]}}}},
  {group:'Relationships',name:'Split II: mirror',note:'The same questions asked of both sides, labels down the spine.',slide:{
    kind:'split-mirror',eyebrow:'Comparison · Split',title:'Land or sea: why did the ocean carry more?',footer:'Ships could move more weight for less cost, so the sea carried the bulk.',
    template:{left:{name:'Silk Roads'},right:{name:'Indian Ocean'},rows:[{label:'Carries',left:'Mostly luxury goods: light, valuable',right:'Luxury and bulk goods: heavy, cheaper'},{label:'Moves by',left:'Camel caravans',right:'Ships riding the monsoon'},{label:'Main risk',left:'Distance, bandits, deserts',right:'Storms and missing the wind'}]}}},
  {group:'Relationships',name:'Split IV: matrix',note:'The same questions asked of three or four cases, one column each.',slide:{
    kind:'split-matrix',eyebrow:'Comparison · Matrix',title:'Three networks, one problem.',footer:'Geography picked the tools. Demand did the rest.',
    template:{columns:[{name:'Silk Roads'},{name:'Indian Ocean'},{name:'Sahara'}],rows:[{label:'Problem',cells:['Distance and bandits','Distance and open sea','Distance and desert']},{label:'Tools',cells:['Caravanserai, credit','Monsoon, ships','Camel saddle, caravan']},{label:'Cities',cells:['Samarkand, Kashgar','Calicut, Malacca','Timbuktu, Mali']}],result:{label:'Result',text:'On all three, production grew and ideas, crops and disease traveled.'}}}},
  {group:'Relationships',name:'Split III: before and after',note:'A diagonal cut with the turning-point date on it.',slide:{
    kind:'split-diagonal',
    template:{date:'1258',before:{tag:'Before',title:'Baghdad, capital of the Abbasid Caliphate.',text:'A center of trade and learning, home to the House of Wisdom.'},after:{tag:'After',title:'The Mongols sack the city.',text:'The Abbasid Caliphate ends, and power in the region shifts to Mongol rulers.'}}}},
  {group:'Relationships',name:'Compounding',note:'Each gain makes the next one possible. Lines grow.',slide:{
    kind:'compounding',eyebrow:'Expansion · Compounding',title:'Better transport changes both volume and range.',footer:'Each gain makes the next one possible.',
    template:{steps:[{label:'Capacity',text:'Heavier and larger cargoes move.'},{label:'Regularity',text:'Routes repeat reliably.'},{label:'Volume',text:'More exchange accumulates over time.'},{label:'Range',text:'The network reaches wider markets.'}]}}},
  {group:'Relationships',name:'Compounding II: snowball',note:'Circles grow. Mark a step twist: true for the turn.',slide:{
    kind:'compounding-snowball',eyebrow:'Pax Mongolica · Compounding',title:'Mongol protection made trade snowball.',footer:'The same connections that carried goods also carried disease.',
    template:{steps:[{label:'Safety',text:'Mongol rule protects the roads'},{label:'Merchants',text:'More traders take the risk'},{label:'Exchange',text:'Goods and ideas move farther'},{label:'Diffusion',text:'Including the bubonic plague',twist:true}]}}},
  {group:'Relationships',name:'Compounding III: staircase',note:'Bars rise left to right.',slide:{
    kind:'compounding-stairs',eyebrow:'Diffusion · Compounding',title:'One new rice feeds a boom.',footer:'A crop that travels can change the size of a whole society.',
    template:{steps:[{label:'Champa rice',text:'Arrives in China from Vietnam'},{label:'Faster harvests',text:'Ripens quickly and survives drought'},{label:'More food',text:'Population grows'},{label:'Bigger economy',text:'Cities and commerce expand'}]}}},
  {group:'Relationships',name:'Annotated object',note:'Pins on a real object. x and y are fractions of the picture. Never pin an AI image as evidence.',slide:{
    kind:'annotated',eyebrow:'Transportation Technology · Annotated Object',title:'The camel is useful because the saddle makes it work.',footer:'The saddle changes what the animal can do for commerce.',
    template:{placeholder:'Verified image of a camel saddle or caravan relief goes here',pins:[{x:.34,y:.21,label:'Endurance',text:'Long stretches between water'},{x:.57,y:.46,label:'Load',text:'The saddle raises carrying capacity'},{x:.39,y:.67,label:'Control',text:'Rider and pack managed together'},{x:.68,y:.85,label:'Reach',text:'Regular desert crossings become viable'}]}}},
  {group:'Time',name:'Timeline',note:'Spaced to true scale, so crowding means something.',slide:{
    kind:'timeline',eyebrow:'Sequence · Proportional Timeline',title:'Trans-Saharan gold puts Mali on the map.',footer:'Spacing is true to scale: the events crowd together as Mali becomes famous.',
    template:{range:[1235,1375],tick:25,events:[{year:1235,label:'c. 1235',text:'Sundiata founds the Mali Empire.'},{year:1324,label:'1324',text:'Mansa Musa travels through Cairo on his pilgrimage to Mecca.'},{year:1352,label:'1352',text:'Ibn Battuta crosses the Sahara to visit Mali.'},{year:1375,label:'1375',text:'The Catalan Atlas draws Mansa Musa holding gold.'}]}}},
  {group:'Time',name:'Timeline II: spans',note:'Journeys and reigns as bars, to show overlap.',slide:{
    kind:'timeline-spans',eyebrow:'Connection · Span Timeline',title:'Three travelers, one connected world.',footer:'Each journey is a bar, so you can see who overlaps and who follows.',
    template:{range:[1250,1450],tick:50,spans:[{name:'Marco Polo',note:'Venice to Yuan China',start:1271,end:1295},{name:'Ibn Battuta',note:'Across Dar al-Islam and beyond',start:1325,end:1354},{name:'Zheng He',note:'Ming fleets to East Africa',start:1405,end:1433}]}}},
  {group:'Time',name:'Timeline III: two lanes',note:'Two regions on one clock.',slide:{
    kind:'timeline-lanes',eyebrow:'Comparison · Parallel Timeline',title:'Two regions, one clock.',footer:'Read down a column to see what was happening at the same moment.',
    template:{range:[1200,1450],tick:50,lanes:[{name:'West Africa',events:[{year:1235,label:'c. 1235',text:'Mali founded'},{year:1324,label:'1324',text:'Mansa Musa’s pilgrimage'},{year:1375,label:'1375',text:'Catalan Atlas'}]},{name:'East Asia',events:[{year:1279,label:'1279',text:'Yuan conquers Song'},{year:1368,label:'1368',text:'Ming dynasty founded'},{year:1405,label:'1405',text:'Zheng He sets sail'}]}]}}},
  {group:'Voice and judgment',name:'Primary source',note:'One excerpt, read large. Quote only from a verified source.',slide:{
    kind:'source-quote',eyebrow:'Primary Source · Close Read',footer:'Who wrote this, for whom, and what did they want the reader to believe?',
    template:{quote:'[Excerpt from a verified primary source. Forty words or fewer, so the room reads it together.]',attribution:{author:'[Author]',work:'[Work]',year:'[Year]'},notice:'[One observation prompt the room answers before interpreting.]'}}},
  {group:'Voice and judgment',name:'Sharpen the claim',note:'A weak claim struck out, the AP-sized claim below it.',slide:{
    kind:'sharpen',eyebrow:'Sharpen the Claim',footer:'A claim is AP-sized when it names a cause, a change, and why it mattered.',
    template:{weak:'Gold traded for salt.',strong:'New transport technology and **complementary demand** turned risky crossings into a **regular network** that made West African states rich.'}}},
  {group:'BeReady',name:'BeReady: recall',note:'Three questions from memory, then the turn.',slide:{
    kind:'beready-recall',title:'Pull the ocean story back from memory.',
    template:{questions:[{label:'Monsoon',text:'What made Indian Ocean voyages predictable?'},{label:'Ports',text:'Why did waiting for the wind make port cities grow?'},{label:'States',text:'Name one state that grew rich from Indian Ocean trade.'}],turn:OCEAN_TURN}}},
  {group:'BeReady',name:'BeReady: fix the error',note:'Mark each error with [[double brackets]].',slide:{
    kind:'beready-fix',title:'Something here is wrong.',
    template:{passage:'Indian Ocean merchants could sail [[whenever they wanted]], so port cities stayed [[small]] and trade was controlled by [[one empire]].',instruction:'Three things are wrong. Fix each one in your own words.',turn:OCEAN_TURN}}},
  {group:'BeReady',name:'BeReady: word bank',note:'Connect two terms in one sentence.',slide:{
    kind:'beready-bank',title:'Connect two ideas.',
    template:{words:['monsoon','dhow','lateen sail','Swahili city-states','Malacca','Gujarat','diaspora'],prompt:'Pick **two**. Write one sentence that explains how they are connected.',push:'Push further: pick three.',turn:OCEAN_TURN}}},
  {group:'BeReady',name:'BeReady: answer first',note:'Give the answer; students write the question.',slide:{
    kind:'beready-answer',title:'Write the question.',
    template:{answer:'Malacca',prompt:'Write the question. It has to make someone explain **why** Malacca mattered, not just where it was.',turn:OCEAN_TURN}}},
  {group:'BeReady',name:'BeReady: odd one out',note:'Pick the one that does not belong and defend it.',slide:{
    kind:'beready-odd',title:'Which one does not belong?',
    template:{terms:['monsoon','dhow','lateen sail','caravanserai'],turn:OCEAN_TURN}}},
  {group:'Image frames',name:'Letterbox cold open',note:'Movie-screen bars. Best with a wide image.',slide:{
    kind:'frame-letterbox',eyebrow:'Cold Open · Topic 2.2',title:'Conquerors who kept the paperwork.',subtitle:'Mongol rule meant officials, records and taxes, not only armies.',template:{visual:cityGate}}},
  {group:'Image frames',name:'Scene beside a question',note:'The lesson question beside the scene. side: "left" puts the image first.',slide:{
    kind:'frame-question',eyebrow:'Topic 2.2 · The Problem',title:'Why would merchants trust a road across the steppe?',subtitle:'Hold that question. By the end of class you can answer it.',template:{visual:caravan}}},
  {group:'Image frames',name:'Museum placard',note:'One object framed, with an exhibit card.',slide:{
    kind:'frame-placard',template:{visual:dhow,placard:{tag:'Maritime Technology',name:'The dhow',text:'Planks sewn together with rope, with a triangular lateen sail that could work with the monsoon winds.'}}}},
  {group:'Image frames',name:'Triptych',note:'Two to four scenes side by side.',slide:{
    kind:'frame-triptych',eyebrow:'Topic 2.3 · Three Ways In',title:'Who crosses the Indian Ocean, and why?',template:{panels:[{visual:dhow,title:'The trader’s ship'},{visual:zhengHe,title:'The emperor’s fleet'},{visual:market,title:'The port market'}]}}},
  {group:'Image frames',name:'Step into the scene',note:'A you-are-here prompt. Imagine, then check against evidence.',slide:{
    kind:'frame-stepin',template:{visual:market,lines:['You just stepped off a ship in Malacca. You speak none of the languages around you.'],question:'How do you trade?',note:'Imagine first. Then we check your ideas against real evidence.'}}},
  {group:'Image frames',name:'Scene beside evidence',note:'An AI scene next to a real source, labeled differently.',slide:{
    kind:'frame-evidence',eyebrow:'Topic 2.3 · Scene and Evidence',title:'The picture sets the scene. The map shows the pattern.',template:{scene:dhow,evidence:monsoonMap}}},
  {group:'Image frames',name:'Movie subtitle',note:'Full image, one line of narration.',slide:{
    kind:'frame-subtitle',eyebrow:'Topic 2.2 · Mongol Expansion',template:{visual:siege,line:'Horsemen could not climb walls. So the Mongols brought in Chinese and Persian engineers who could.'}}},
  {group:'Image frames',name:'Storyboard',note:'Three to five scenes on a film strip.',slide:{
    kind:'frame-storyboard',eyebrow:'Topic 2.2 · Storyboard',title:'The Mongol story in four scenes.',template:{panels:[{visual:archers,title:'Conquer',text:'Mounted archers win in the open.'},{visual:siege,title:'Take cities',text:'Borrowed engineers break the walls.'},{visual:cityGate,title:'Govern',text:'Officials record, tax and rule.'},{visual:caravan,title:'Connect',text:'Protected roads carry trade.'}]}}},
  {group:'Image frames',name:'Postcard home',note:'A projected writing prompt. Nothing is collected.',slide:{
    kind:'frame-postcard',eyebrow:'Postcard Home',title:'Greetings from the monsoon.',template:{visual:dhow,stamp:'2.3',prompt:'In two sentences, tell someone at home what you traded and why you had to wait for the wind.'}}},
  {group:'Image frames',name:'Through the porthole',note:'The scene through a ship’s window.',slide:{
    kind:'frame-porthole',eyebrow:'Topic 2.3 · From the Deck',title:'Landfall on the Swahili coast.',subtitle:'Chinese porcelain, Indian cloth and African ivory changed hands in the same harbors.',template:{visual:swahiliPort}}},
  {group:'Image frames',name:'One big number',note:'Only a number you can source.',slide:{
    kind:'frame-number',eyebrow:'Topic 2.3 · Ming Voyages',template:{visual:zhengHe,number:'7',unit:'voyages',range:'1405 to 1433',text:'Zheng He’s fleets sailed into a trading world that already existed.'}}},
  {group:'Image frames',name:'Magazine cover',note:'A landing or opener slide styled as a cover.',slide:{
    kind:'frame-cover',template:{visual:market,masthead:'CROSSROADS',issue:'Topic 2.3 · The Port Issue',story:{tag:'Cover Story',title:'Malacca: the port that controlled the strait'},lines:['Why merchants waited months for the wind','How strangers learned to trust each other']}}},
  /* Round 2, 2026-09-27. Marked round:2 so the catalog can badge them. */
  {round:2,group:'Relationships',name:'Cause chain',note:'Cause and effect in a row. Connector words go on the arrows; key: true fills in the mechanism.',slide:{
    kind:'cause-chain',eyebrow:'Topic 2.6 · Cause Chain',title:'How the plague rode the trade routes.',footer:'The network that carried silk carried the disease that followed it.',
    template:{steps:[{label:'Connected routes',text:'Mongol rule links China, Central Asia and the Black Sea'},{label:'Fleas travel too',text:'Plague rides with rats on caravans and ships',key:true},{label:'Kaffa, 1346',text:'The disease reaches a Black Sea trading port'},{label:'Europe, 1347',text:'Ships carry it on to Italy, and it spreads across Europe'}],links:['so','until','then']}}},
  {round:2,group:'Relationships',name:'Diffusion path',note:'One thing moving place to place, and what it became at each stop. The first stop is the origin.',slide:{
    kind:'diffusion-path',eyebrow:'Topic 2.5 · Diffusion Path',title:'Paper changed at every stop.',footer:'Diffusion is how it traveled. **Adaptation** is what each place made of it.',
    template:{stops:[{place:'China',date:'By the 100s CE',text:'Made from bark, hemp and rags'},{place:'Samarkand',date:'700s',text:'The Islamic world learns to make it'},{place:'Baghdad',date:'790s',text:'Cheap paper fills libraries and offices'},{place:'Spain',date:'1100s',text:'Europe’s first paper mills, in Muslim Spain'},{place:'Italy',date:'1200s',text:'Water-powered mills make it from linen rags'}]}}},
  {round:2,group:'Relationships',name:'Split V: Venn',note:'What only one side has, and what both share. Up to four short lines in each region; the type sizes itself to stay inside the circles. left.visual and right.visual stand a cut-out figure beside each circle.',slide:{
    kind:'split-venn',eyebrow:'Comparison · Venn',title:'Two networks, one pattern.',footer:'Different tools, the same results.',
    template:{left:{name:'Silk Roads',items:['Camels and caravans','Caravanserais along the road','Mostly light luxury goods']},right:{name:'Indian Ocean',items:['Ships riding the monsoon','Ports like Calicut and Malacca','Bulk goods as well as luxuries']},both:['Merchant communities far from home','Carried religions and ideas','Built rich trading cities']}}},
  {round:2,group:'Relationships',name:'Continuity and change',note:'Before and after a turning point, with what carried on as one unbroken band under both.',slide:{
    kind:'continuity-change',eyebrow:'Topic 2.2 · Continuity and Change',title:'The rulers changed. Much of daily life did not.',footer:'Change and continuity usually happen at the same time.',
    template:{date:'1258',before:{tag:'Before',items:['The Abbasid caliph rules from Baghdad','Baghdad is a great center of learning']},after:{tag:'After',items:['Mongol rulers, the Ilkhans, take over','The caliphate in Baghdad is gone']},continued:{tag:'Continued',items:['Most people remain Muslim','Persian officials keep running the government','Trade keeps crossing the region']}}}},
  {round:2,group:'Time',name:'Rise and fall',note:'The shape of several places’ fortunes on one clock. Levels run 0 to 4 and show direction only, and the slide says so.',slide:{
    kind:'timeline-fortunes',eyebrow:'Topic 2.5 · Rise and Fall',title:'Connected cities could rise, and could fall.',footer:'The same network that fed a city could expose it.',
    template:{range:[1100,1450],tick:50,cases:[
      {name:'Hangzhou',note:'Southern Song capital',points:[{year:1100,level:2},{year:1138,level:3},{year:1250,level:4},{year:1276,level:3.6},{year:1450,level:3.3}],events:[{year:1138,label:'1138',text:'becomes the capital'},{year:1276,label:'1276',text:'Mongols take it without a sack'}]},
      {name:'Samarkand',note:'Silk Road market',points:[{year:1100,level:3},{year:1219,level:3.2},{year:1221,level:.6},{year:1340,level:1.4},{year:1370,level:3.2},{year:1450,level:3.8}],events:[{year:1221,label:'1220',text:'destroyed by the Mongols'},{year:1370,label:'1370',text:'Timur’s capital'}]},
      {name:'Baghdad',note:'Abbasid capital',points:[{year:1100,level:3.2},{year:1257,level:3},{year:1259,level:.8},{year:1400,level:1.2},{year:1402,level:.5},{year:1450,level:.8}],events:[{year:1259,label:'1258',text:'sacked by the Mongols'},{year:1402,label:'1401',text:'sacked again, by Timur'}]}]}}},
  {round:2,group:'Voice and judgment',name:'HIPP sourcing',note:'The source in the middle, the four sourcing questions around it. Give a quote or a visual.',slide:{
    kind:'source-hipp',eyebrow:'Module 08 · Source It',title:'Ibn Battuta at Zaytun',
    template:{quote:'The port of Zaytun is one of the largest in the world, or perhaps the very largest.',attribution:{author:'Ibn Battuta',work:'Rihla',year:'describing c. 1345'},
      situation:'Yuan China in the 1340s, when Mongol rule and sea trade tied Zaytun to the Indian Ocean.',audience:'Readers and the sultan’s court in Morocco, where his book was written down in the 1350s.',purpose:'To record a lifetime of travel, and to amaze readers with wonders.',pov:'A Muslim scholar and judge from Morocco, seeing China as an outsider.'}}},
  {round:2,group:'Voice and judgment',name:'Claim, evidence, reasoning',note:'Built the way the paragraph is built: one claim, two or three pieces of evidence, the reasoning that ties them.',slide:{
    kind:'claim-evidence',eyebrow:'Topic 2.5 · Build the Argument',footer:'The reasoning line is the part most answers leave out.',
    template:{claim:'Islam spread into West Africa mainly through **merchants and scholars**, not armies.',evidence:[{text:'North African merchants crossed the Sahara with salt, cloth and books.',source:'Topic 2.4'},{text:'Mansa Musa, a Muslim ruler of Mali, made his pilgrimage to Mecca in 1324.',source:'Topic 2.4'},{text:'Ibn Battuta found Muslim judges and crowded Friday prayers in Mali in 1352.',source:'Ibn Battuta, Rihla'}],reasoning:'Rulers had reasons to convert: Islam tied them to Muslim merchants, law and learning, so the faith traveled with the trade.'}}},
  {round:2,group:'Voice and judgment',name:'Rank the causes',note:'Leave weight out and the bars stay empty for the room to decide. Give each a weight from 0 to 1 to show a ranking.',slide:{
    kind:'cause-rank',eyebrow:'Topic 2.4 · Rank the Causes',title:'Why did trade across the Sahara grow?',
    template:{causes:[{label:'The camel saddle',note:'Heavier loads, carried farther'},{label:'Organized caravans',note:'Shared risk, guides who knew the wells'},{label:'Gold and salt',note:'Each side had what the other lacked'},{label:'Mali',note:'Protected and taxed the routes'}],prompt:'Rank them 1 to 4. **Defend your number one** in one sentence.'}}},
  {round:2,group:'Voice and judgment',name:'Myth and evidence',note:'A common belief struck out, and what the evidence shows. Up to three rows.',slide:{
    kind:'myth-evidence',eyebrow:'Unit 2 · Myth and Evidence',title:'Three things people get wrong.',footer:'The evidence is usually more interesting than the myth.',
    template:{rows:[{myth:'Salt traded for gold, weight for weight.',evidence:'Salt’s price rose the farther it went: 8 to 10 mithqals at Walata, 20 to 30 in Mali.',source:'Ibn Battuta, 1352'},{myth:'The Mongols only destroyed.',evidence:'They also protected the roads, ran a relay system and moved skilled workers across the empire.',source:'Topic 2.2'},{myth:'Islam reached West Africa by conquest.',evidence:'Traders, scholars and teachers carried it, and rulers often converted first.',source:'Topic 2.5'}]}}},
  {round:2,group:'BeReady',name:'BeReady: sort it',note:'Sort the words into two to four labeled boxes.',slide:{
    kind:'beready-sort',title:'Sort what traveled.',
    template:{words:['Buddhism','gunpowder','Hangzhou','Margery Kempe','paper','Islam','Baghdad','Ibn Battuta'],columns:['Beliefs','Inventions','Cities','Travelers'],turn:'Everything here moved along a trade route. **Which one changed the most on the way?**'}}},
  {round:2,group:'Closers',name:'3-2-1 exit',note:'Three prompts, with room to write that shrinks from three lines to one.',slide:{
    kind:'close-321',eyebrow:'Topic 2.5 · Before You Go',title:'Three, two, one.',
    template:{items:[{n:3,text:'things that traveled the routes besides goods'},{n:2,text:'cities, and what happened to each'},{n:1,text:'question you still have'}]}}},
  {round:2,group:'Closers',name:'Retell it',note:'The whole topic as one sentence with blanks. Write ___ where a blank goes.',slide:{
    kind:'close-retell',eyebrow:'Topic 2.5 · Retell It',title:'Say the whole topic in one sentence.',
    template:{frame:'Because ___ grew, ___ increased, so beliefs and inventions ___ and were ___ by the societies that received them.',words:['networks','contact','spread','adapted'],prompt:'Fill it in from memory. Then check it against the chain.'}}},
  {round:2,group:'Image frames',name:'Compare two sources',note:'Two real sources side by side, each labeled with what it is and when it was made.',slide:{
    kind:'frame-compare',eyebrow:'Topic 2.4 · Compare the Sources',title:'Same king, two kinds of evidence.',
    template:{panels:[{visual:{url:img('2-4','2.4 - Mansa Musa Hajj.jpg'),alt:'A modern painting of Mansa Musa holding a gold scepter, with his caravan crossing the desert',credit:'Modern painting · Higgins Bond'},tag:'Painted in our time',text:'An artist imagines the pilgrimage of 1324.'},{visual:{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa holding gold on the Catalan Atlas',credit:'Catalan Atlas, 1375 · BnF · public domain'},tag:'Made in 1375',text:'A mapmaker on Majorca draws him holding gold.'}],question:'Which one is evidence of how Europeans saw Mali in the 1300s? **What is the other one good for?**'}}},
  {round:2,group:'Image frames',name:'Route on a map',note:'Numbered stops on a real map. view crops the picture; each stop’s x and y are fractions of the whole image, so pins stay put whatever the crop.',slide:{
    kind:'frame-route',eyebrow:'Topic 2.4 · Route',title:'Ibn Battuta crosses the Sahara, 1352 to 1353.',footer:'He was home in Morocco by 1354.',
    template:{visual:{url:img('2-4','2.4 - Africa Satellite.jpg'),alt:'Satellite image of northwest Africa, the Sahara in tan and the Sahel in green',credit:'Satellite image · Africa'},ratio:1258/1252,view:{x:.08,y:.03,w:.32,h:.37},
      stops:[{name:'Sijilmasa',text:'Early 1352: leaves the edge of Morocco',x:.2,y:.108},{name:'Taghaza',text:'Salt mines, and houses built of salt',x:.181,y:.194},{name:'Walata',text:'April 1352: the first town of Mali',x:.165,y:.269},{name:'Mali’s capital',text:'Eight months at the court of Mansa Sulayman; the site is still debated',x:.149,y:.339},{name:'Timbuktu',text:'1353, on the Niger',x:.211,y:.275},{name:'Gao',text:'1353, down the river',x:.245,y:.282},{name:'Takedda',text:'A copper town; then north toward home',x:.329,y:.268}]}}},
  /* Round 3, 2026-10-04: shapes built for Unit 3, land-based empires. Marked round:3. */
  {round:3,group:'Unit 3 shapes',name:'Case file',note:'One event or place taken apart: a stamp with where and when (and a small picture if you have one), up to four labeled facts, and what the case proves. For sieges, battles, policies and turning points.',slide:{
    kind:'case-file',eyebrow:'Topic 3.1 · Case File',title:'How the Ottomans broke Constantinople.',
    template:{tag:'Siege',place:'Constantinople',date:'1453',visual:{url:'../assets/images/topics/3-1/dardanelles-gun.jpg',alt:'The Dardanelles Gun, a huge Ottoman bronze bombard cast in 1464',credit:'Dardanelles Gun, 1464 · Public domain',position:'50% 55%'},
      rows:[{label:'Who',text:'Sultan **Mehmed II** and the Ottoman army against the defenders of the city'},{label:'Weapon',text:'Giant bronze **bombards**, built with the help of a Hungarian engineer named Urban'},{label:'Result',text:'The walls fell after about seven weeks, from 6 April to 29 May'},{label:'Cost',text:'Only a state could pay for the metal, powder, crews and haulers'}],
      proves:'Cannons broke walls that had held for about a thousand years.'}}},
  {round:3,group:'Unit 3 shapes',name:'Trunk and branches',note:'One claim on the left holds up two to four branches. Each branch has a name, a line of explanation and up to three examples as chips.',slide:{
    kind:'branch-tree',eyebrow:'Unit 3 · Trunk and Branches',title:'How rulers held what guns won.',footer:'Each branch is one way to answer the same problem: why should these people obey?',
    template:{claimLabel:'The claim',claim:'Conquest wins land. Three things **hold it**.',branches:[
      {label:'People who serve',note:'Officials and soldiers whose loyalty runs to the throne',items:['Devshirme','Mansabdars','Salaried samurai']},
      {label:'Symbols that justify',note:'A believable claim to rule, shown in stone and ceremony',items:['Divine right','Versailles','Mughal tombs']},
      {label:'Systems that pay',note:'Armies and officials cost money every year',items:['Tax farming','Zamindars','Tribute lists']}]}}},
  {round:3,group:'Unit 3 shapes',name:'Rivalry face-off',note:'Two states, one contested place between them, and the disputes (political, religious, economic) that set them against each other. Up to three dispute cards.',slide:{
    kind:'face-off',eyebrow:'Topic 3.1 · Rivalry',title:'Two empires, one fortress.',footer:'The College Board names both political and religious disputes as causes of rivalry.',
    template:{left:{name:'Safavid Empire',note:'Iran. Shia Islam was the state religion.'},right:{name:'Mughal Empire',note:'India. The emperors were Sunni Muslims.'},between:{label:'Contested',name:'Kandahar',note:'Frontier fortress'},
      disputes:[{tag:'Political',text:'Each empire wanted the frontier fortress for itself, and it changed hands more than once.'},{tag:'Religious',text:'Different traditions of Islam stood behind the two empires.'}]}}},
  {round:3,group:'Unit 3 shapes',name:'Sentence frame',note:'The sentence students will write, with each blank showing what goes in it ({{like this}}), and one finished example under it. Works for causation, comparison, and continuity and change.',slide:{
    kind:'sentence-frame',eyebrow:'Unit 3 · Sentence Frame',title:'Say it in one sentence.',footer:'Same category on both sides, then because.',
    template:{frame:'{{Empire A}} and {{Empire B}} both {{did the same thing}}, but they differed because {{a reason}}; this mattered because {{an effect}}.',exampleLabel:'Filled in',
      example:'The **Ottomans** and the **Safavids** both **used firearms in battle**, but they differed because **the Ottomans fielded them first, at Chaldiran in 1514, and the Safavids built their own gun forces afterward**; this mattered because **the weapon spread to whoever could pay for it**.'}}},

  {round:4,group:'Unit 3 shapes',name:'Story steps',note:'A short story told top to bottom, three to five beats, one label and one sentence each, with an arrow between them. Big type for a ninth grader to retell. key: true fills in the beat the lesson drives to. Replaces the numbered-circles process slide.',slide:{
    kind:'story-steps',eyebrow:'Topic 3.3 · Christianity',title:'A challenge becomes a Reformation.',
    template:{steps:[{label:'1517',text:'Luther challenges indulgences and church authority.'},{label:'Break',text:'New Protestant churches develop.'},{label:'Change',key:true,text:'Western Christian institutional unity fractures.'},{label:'Continuity',text:'Christianity remains powerful.'}]}}},
  {round:4,group:'Unit 3 shapes',name:'Picture pair',note:'Two tall pictures side by side, each shown whole at one shared height, with the story beside them: up to three labeled rows and a line for what the pair proves. Give each visual its ratio (width over height). For two portraits or paintings that only make sense as a pair.',slide:{
    kind:'frame-pair',eyebrow:'Topic 3.2 · Art',title:'One emperor, two pictures.',
    template:{panels:[{visual:{url:'../assets/images/topics/3-2/qianlong-court-dress-1736.jpg',alt:'Full-length portrait of the Qianlong Emperor seated on a dragon throne in a yellow robe',credit:'Court-dress portrait, 1736 · Public domain',ratio:0.729},tag:'Picture one · for Han Chinese subjects',text:'The robes and pose of a traditional **Chinese emperor**.'},{visual:{url:'../assets/images/topics/3-2/qianlong-manjushri-thangka.jpg',alt:'A Tibetan Buddhist thangka showing the Qianlong Emperor as a Buddhist teacher, ringed by small Buddhist figures',credit:'Qianlong as Manjushri, thangka, mid-1700s · Freer Gallery · Public domain',ratio:0.519},tag:'Picture two · for Tibetan and Mongol subjects',text:'The same emperor, painted as a **Buddhist holy figure**.'}],
      rows:[{label:'Situation',text:'The Qing emperors were **Manchus**, outsiders ruling an empire where most people were Han Chinese.'},{label:'So what',text:'Same ruler, different picture, depending on who needed convincing.'}],
      proves:'Art made a ruler look rightful to each group he ruled.'}}},
];
})();
