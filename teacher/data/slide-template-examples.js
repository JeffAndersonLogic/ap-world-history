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
    kind:'frame-cover',template:{visual:market,masthead:'CROSSROADS',issue:'Topic 2.3 · The Port Issue',story:{tag:'Cover Story',title:'Malacca: the port that controlled the strait'},lines:['Why merchants waited months for the wind','How strangers learned to trust each other']}}}
];
})();
