/* Topic 2.3 Teaching OS — Indian Ocean exchange. */
const BH23_ASSETS = '../assets/images/topics/2-3/';
const BH23 = {
  dhow: BH23_ASSETS + '2.3%20-%20Dhow%20Ship.jpeg',
  diaspora: BH23_ASSETS + '2.3%20-%20Diasporic%20Communities.jpg',
  tradeMap: BH23_ASSETS + '2.3%20-%20Indian%20Ocean%20Trade%20Map%20Detailed.png',
  orgChart: BH23_ASSETS + '2.3%20-%20Indian%20Ocean%20Trade%20Org%20Chart.png',
  malayMarket: BH23_ASSETS + '2.3%20-%20Malay%20market.jpg',
  monsoonMap: BH23_ASSETS + '2.3%20-%20Monsoons%20map.jpg',
  swahili: BH23_ASSETS + '2.3%20-%20Swahili%20Merchants.jpg',
  zhengHe: BH23_ASSETS + '2.3%20-%20Zheng%20He%20Fleet.jpg'
};

window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.3',
    dates: 'September 22-23, 2026',
    minutes: 90,
    title: 'Exchange in the Indian Ocean: Maritime Commerce and Cultural Connection',
    subtitle: 'The ocean is not the obstacle. The wind cycle is the infrastructure.',
    essentialQuestion: 'How did environmental knowledge, maritime technology, and merchant communities turn the Indian Ocean into a durable long-distance network?',
    apFocus: 'Contextualization + Causation + Economic Systems',
    endTarget: 'Students can explain how monsoon knowledge and maritime technology enabled Indian Ocean exchange, identify major goods and merchant communities, and connect trade to port-city growth, diaspora communities, and the spread of Islam.'
  },
  priorities: {
    must: [
      'Students explain monsoon winds as a predictable transportation system, not just a weather fact.',
      'Students connect maritime technology and navigation tools to the mechanics of long-distance trade.',
      'Students distinguish Indian Ocean exchange from Silk Road exchange: larger cargo capacity, port-city nodes, and seasonal sailing cycles matter.',
      'Students use specific evidence: Swahili Coast city-states, Gujarat, Malacca, Arab and Persian merchants in East Africa, Chinese merchants in Southeast Asia, Malay communities, and Zheng He.',
      'Students complete contextualization by establishing that older maritime routes intensified after 1200.'
    ],
    should: [
      'Keep the projector sparse. The explanation belongs with the teacher, not in paragraphs on screen.',
      'Return repeatedly to the system: winds + ships + ports + trust networks.',
      'Treat diasporic communities as commercial infrastructure as well as cultural exchange.',
      'Use the Swahili Coast as the concrete place where trade, Islam, political authority, and imported goods intersect.'
    ],
    could: [
      'Use Ibn Battuta as an additional primary-source lens if the class needs stronger place-based evidence.',
      'Use the Evidence Lab as reinforcement or homework if the block is running long.',
      'Use the full Heimler 2.3 review as retrieval/review rather than primary content delivery.'
    ]
  },
  flow: [
    {id:'open',label:'Hook + System',range:'0-6',slide:0},
    {id:'map',label:'Map the Basin',range:'6-12',slide:1},
    {id:'first10',label:'First & 10',range:'12-22',slide:3},
    {id:'winds',label:'Monsoon System',range:'22-32',slide:4},
    {id:'tech',label:'Ships + Navigation',range:'32-42',slide:6},
    {id:'check1',label:'Checkpoint 1',range:'42-48',slide:8},
    {id:'goods',label:'Goods + Merchants',range:'48-58',slide:9},
    {id:'ports',label:'Ports + Diasporas',range:'58-69',slide:11},
    {id:'room',label:'BeInTheRoom: Kilwa',range:'69-79',slide:14},
    {id:'skill',label:'AP Contextualization',range:'79-86',slide:15},
    {id:'check2',label:'Final Checkpoint',range:'86-89',slide:17},
    {id:'close',label:'Close + Bridge',range:'89-90',slide:18}
  ],
  quickLaunch: [
    {label:'Student Lesson 2.3',url:'../unit-2/lesson-2-3-indian-ocean.html'},
    {label:'Student Presentation 2.3',url:'../unit-2/student-presentation-topic-2-3-indian-ocean.html'},
    {label:'First & 10',url:'../unit-2/first-and-10-topic-2-3-indian-ocean-capture.html?v=locked-format-v3'},
    {label:'BeInTheRoom: Kilwa',url:'../beintheroom/unit-2/indian-ocean-port.html'},
    {label:'Deep Reading',url:'../unit-2/deep-reading-topic-2-3-indian-ocean.html'},
    {label:'Heimler 2.3 Review',url:'https://youtu.be/r-D9F2TiirY'}
  ],
  projection: {
    storageKey: 'behistorical-topic-2-3-slide',
    channel: 'behistorical-topic-2-3-os',
    title: 'Topic 2.3 Presentation',
    file: 'present-topic-2-3.html'
  },
  slides: [
    {
      phase:'open',kind:'hero',eyebrow:'AP World History · Topic 2.3',title:'The Ocean That Ran on a Schedule',subtitle:'The Indian Ocean became a system when people learned to pair wind, ships, ports, and trust.',
      visual:{url:BH23.dhow,alt:'A dhow-style sailing ship crossing the Indian Ocean',credit:'BeHistorical visual · Dhow sailing ship'},
      notes:{minutes:3,land:['Topic 2.2 showed how political control changed overland exchange. Topic 2.3 asks how a huge maritime network worked without one empire controlling the whole ocean.','Start with the counterintuitive idea: sailors did not need calm weather; they needed predictable weather.'],story:'The central story is a transportation system built from environmental knowledge. Merchants could plan departure, arrival, waiting, and return because monsoon winds reversed seasonally.',ask:'What would make an ocean feel less like a barrier and more like a road?',listenFor:'Predictability, routes, ports, navigation, ships, timing.',ap:'Contextualization: identify the wider environmental and commercial setting before explaining intensification.'}
    },
    {
      phase:'map',kind:'map',eyebrow:'Geographic Grounding',title:'One ocean. Many connected regions.',subtitle:'East Africa · Arabia · India · Southeast Asia · China',
      visual:{url:BH23.tradeMap,alt:'Detailed Indian Ocean trade map showing major routes and connected regions',credit:'BeHistorical visual · Indian Ocean trade map'},footer:'Ports turn coastlines into network nodes.',
      notes:{minutes:4,land:['Locate East Africa, the Arabian Peninsula, India, the Bay of Bengal, Southeast Asia, and southern China.','Stress that this is a basin of connected seas and straits, not one empty expanse.'],story:'Geography creates nodes. Strait crossings, sheltered harbors, river mouths, and resupply points become places where merchants must stop and where cities can grow wealthy.',ask:'Which locations on this map could profit simply because ships have to pass nearby?',listenFor:'Straits, narrow passages, major coasts, river mouths, halfway points.',ap:'Economic systems: geography helps explain the location and growth of trading cities.'}
    },
    {
      phase:'map',kind:'process',eyebrow:'The Network',title:'A maritime system needs four pieces.',subtitle:'Wind · Ships · Ports · Trust',
      steps:[{label:'Wind',text:'Predictable seasonal direction'},{label:'Ships',text:'Cargo and open-water capability'},{label:'Ports',text:'Exchange, repair, resupply'},{label:'Trust',text:'Diasporas, law, language, religion'}],footer:'Remove one piece and the network weakens.',
      notes:{minutes:2,land:['Give students the four-part model they will use for the rest of class.','Everything that follows should plug back into one of these four pieces.'],story:'The Indian Ocean network is durable because no single innovation carries it. Environmental knowledge, technology, urban nodes, and human relationships reinforce one another.',ask:'Which of these four pieces is easiest to overlook?',listenFor:'Trust networks and port-city institutions are often overlooked.',ap:'Causation: identify multiple enabling causes and explain how they interact.'}
    },
    {
      phase:'first10',kind:'action',eyebrow:'First & 10 · 10 Minutes',title:'Read for the system.',subtitle:'What makes this network predictable, profitable, and connected?',big:'10',
      notes:{minutes:10,land:['The detailed narrative belongs in First & 10. The projector gives the reading lens only.','Circulate for references to monsoon timing, maritime technology, merchant communities, and port cities.'],story:'Students should leave the reading with a mental model of the network rather than a list of products.',ask:'Which detail best explains why this trade could operate repeatedly rather than accidentally?',listenFor:'Monsoons, seasonal planning, established ports, recurring merchant networks.',ap:'Contextualization + causation: connect background conditions to later expansion.'}
    },
    {
      phase:'winds',kind:'process',eyebrow:'Environmental Knowledge',title:'The monsoon is a round-trip calendar.',subtitle:'Sail with the seasonal reversal, not against it.',
      steps:[{label:'Winter',text:'Winds favor one direction'},{label:'Arrival',text:'Unload, trade, wait'},{label:'Summer',text:'Winds reverse direction'},{label:'Return',text:'Round-trip voyage becomes plannable'}],footer:'Predictability turns distance into schedule.',
      notes:{minutes:4,land:['Avoid reducing monsoons to “winds that change.” The important historical effect is predictable seasonal reversal.','Merchants could plan long voyages around a recurring environmental calendar.'],story:'The monsoon system lowers uncertainty. It tells merchants when to leave, where they may have to wait, and when a return voyage becomes possible.',ask:'How does predictable waiting change the kind of cities that grow at ports?',listenFor:'Warehouses, lodging, markets, religious institutions, permanent merchant communities.',ap:'KC-3.1.II.A.i: environmental knowledge enables expansion and intensification of trade.'}
    },
    {
      phase:'winds',kind:'map',eyebrow:'Read the Wind',title:'The route changes with the season.',subtitle:'Movement follows a cycle, not a straight line.',
      visual:{url:BH23.monsoonMap,alt:'Monsoon map showing seasonal wind patterns across the Indian Ocean',credit:'BeHistorical visual · Monsoon wind map'},footer:'Timing is part of geography.',
      notes:{minutes:4,land:['Trace one hypothetical route from East Africa or Arabia to India and back.','Make students describe the return problem; one-way arrows are not enough.'],story:'A network becomes dependable when environmental knowledge becomes shared operational knowledge across generations of sailors.',ask:'Why would knowing the return season matter as much as knowing the outbound route?',listenFor:'Profit, supplies, contracts, family networks, predictable circulation.',ap:'Causation: environmental knowledge changes the feasibility and regularity of exchange.'}
    },
    {
      phase:'tech',kind:'process',eyebrow:'Maritime Technology',title:'Ships turn wind into carrying power.',subtitle:'Better ships and navigational knowledge increased distance, reliability, and cargo volume.',
      steps:[{label:'Sails',text:'Harness wind instead of fighting it'},{label:'Hull',text:'Carry cargo across open water'},{label:'Tools',text:'Compass and astrolabe reduce uncertainty'},{label:'Scale',text:'Larger designs expand volume and range'}],footer:'Technology matters because it changes what merchants can repeatedly do.',
      notes:{minutes:4,land:['Use this as a mechanism slide, not a technology list.','Lateen-style sail traditions, durable hulls, and accumulated seafaring knowledge helped sailors maneuver and carry cargo across open water. Larger ships increased volume.'],story:'Technology did not invent Indian Ocean trade after 1200. It helped intensify an older maritime world by making movement more capable and more scalable.',ask:'Why does a ship network change what can be traded compared with pack animals?',listenFor:'Bulk, weight, volume, lower transport cost per unit, larger cargoes.',ap:'Contextualization: establish the preexisting maritime tradition before explaining later intensification.'}
    },
    {
      phase:'tech',kind:'process',eyebrow:'Navigation',title:'Open water needs more than courage.',subtitle:'Compass · Astrolabe · Stars · Currents · Coastline knowledge',
      steps:[{label:'Direction',text:'Magnetic compass'},{label:'Position',text:'Astrolabe and stars'},{label:'Conditions',text:'Currents and wind knowledge'},{label:'Route',text:'Shared port knowledge'}],footer:'Knowledge is transportation technology too.',
      notes:{minutes:3,land:['Treat the compass and astrolabe as tools inside a knowledge system, not magic inventions that suddenly create trade.','Arab, Indian, Malay, Chinese, and other sailors accumulated practical knowledge over generations.'],story:'Technology includes information. A compass or astrolabe matters because navigators know how to use it inside a wider body of environmental and geographic knowledge.',ask:'Which matters more: owning a navigation tool or knowing what the reading means for a real voyage?',listenFor:'Tools need expertise, routes, and environmental knowledge.',ap:'Causation: technology works through human knowledge and institutions.'}
    },
    {
      phase:'check1',kind:'action',eyebrow:'Checkpoint 1 · 6 Minutes',title:'Explain the mechanism.',subtitle:'How did technology and monsoon knowledge enable Indian Ocean trade?',big:'06',
      notes:{minutes:6,land:['Require at least two specific examples and an explanation of how each changed the mechanics of trade.','Do not accept a list such as “dhow, compass, monsoon.”'],story:'The checkpoint is about mechanism: evidence must connect to what merchants could now do more reliably or at greater scale.',ask:'What changed because merchants understood the winds or improved navigation?',listenFor:'Predictable voyages, longer routes, larger cargoes, open-water travel, regular return trips.',ap:'Evidence + reasoning: specific example → mechanism → effect on exchange.'}
    },
    {
      phase:'goods',kind:'map',eyebrow:'Commercial Exchange',title:'Markets made distance profitable.',subtitle:'Spices · Textiles · Gold · Ivory · Porcelain moved through cosmopolitan port cities.',
      visual:{url:BH23.malayMarket,alt:'Malay market scene representing a cosmopolitan Indian Ocean port economy',credit:'BeHistorical visual · Malay market'},footer:'The whole market image stays visible instead of being cropped under the title.',
      notes:{minutes:4,land:['Emphasize multi-directional exchange. There is no single start or end of the network.','Indian textiles were especially important because they circulated widely and could function as a medium of exchange.'],story:'Profit comes from regional specialization and distance. Goods become valuable because the network connects places with different resources and production traditions.',ask:'Why would a merchant carry Indian textiles toward East Africa or Southeast Asia rather than only luxury spices?',listenFor:'Broad demand, exchange value, portability, regional specialization.',ap:'Economic systems: explain why interregional specialization drives exchange.'}
    },
    {
      phase:'goods',kind:'map',eyebrow:'System View',title:'Goods, people, and ideas moved together.',subtitle:'Trade is the visible part of a larger human network.',
      visual:{url:BH23.orgChart,alt:'Indian Ocean trade organization chart connecting technologies, routes, states, and communities',credit:'BeHistorical visual · Indian Ocean trade system'},footer:'The system moves more than merchandise.',
      notes:{minutes:3,land:['Use this slide to synthesize the system before moving to port cities and diasporas.','Students should see that technologies, winds, states, and communities are not separate mini-topics. They reinforce each other.'],story:'The Indian Ocean was not just a shipping lane. It was a relationship system, a political system, and a cultural exchange zone tied to commerce.',ask:'Which part of this chart is a cause, and which part is an effect?',listenFor:'Winds and technologies enable trade; state growth and diasporas often result from intensified exchange.',ap:'Complex causation: causes and effects can reinforce each other over time.'}
    },
    {
      phase:'ports',kind:'process',eyebrow:'Trading Cities',title:'Ports become the network’s switching stations.',subtitle:'Swahili Coast city-states, Gujarat, and Malacca grew because they organized exchange.',
      steps:[{label:'Storage',text:'Warehouses hold goods while winds reverse'},{label:'Services',text:'Repair, lodging, food, markets'},{label:'Rules',text:'Taxes, brokers, interpreters, law'},{label:'Trust',text:'Worship, language, credit, contacts'}],footer:'The image was removed here so the slide stays balanced and readable.',
      notes:{minutes:4,land:['Name the CED state-growth examples explicitly: city-states of the Swahili Coast, Gujarat, and the Sultanate of Malacca.','A port makes money by concentrating exchange: storage, taxation, brokerage, repair, food, lodging, and information.'],story:'The commercial power of a port comes from being a node. Merchants do not need to travel end-to-end if goods can move through chains of connected markets.',ask:'What services would a city need if merchants must wait months for winds to reverse?',listenFor:'Warehouses, markets, lodging, finance, interpreters, law, worship, ship repair.',ap:'KC-3.1.I.A.iii: the Indian Ocean trading network fostered the growth of states.'}
    },
    {
      phase:'ports',kind:'map',eyebrow:'Diasporic Communities',title:'Merchants carried culture and absorbed culture.',subtitle:'Arab and Persian communities in East Africa · Chinese communities in Southeast Asia · Malay communities across the basin',
      visual:{url:BH23.diaspora,alt:'Diasporic merchant communities in an Indian Ocean port',credit:'BeHistorical visual · Diasporic communities'},footer:'Diaspora = settle + connect + adapt + blend.',
      notes:{minutes:4,land:['Define diaspora clearly: a community living outside its homeland while maintaining connections to that homeland.','Stress reciprocal influence: merchants introduced traditions, and indigenous cultures influenced merchant cultures.'],story:'Diasporic communities lower risk. They provide trust, language, credit, contacts, religious institutions, and legal expectations in unfamiliar ports.',ask:'How could a permanent merchant community make trade easier for someone arriving from far away?',listenFor:'Translation, trust, lodging, credit, religious familiarity, marriage alliances, business contacts.',ap:'KC-3.1.III.B: merchants introduced cultural traditions and were influenced by indigenous cultures.'}
    },
    {
      phase:'zhenghe',kind:'map',eyebrow:'State-Backed Maritime Contact',title:'Zheng He did not create the network. He sailed through one already mature.',subtitle:'Ming voyages show the scale, wealth, and political use of Indian Ocean connectivity.',
      visual:{url:BH23.zhengHe,alt:'Zheng He fleet sailing through the Indian Ocean',credit:'BeHistorical visual · Zheng He fleet'},footer:'The fleet image is shown as a complete visual rather than a cropped background.',
      notes:{minutes:4,land:['Keep Zheng He as a capstone example of state-backed maritime activity, not a separate biography lesson.','His voyages demonstrate that the Indian Ocean network could support diplomacy, prestige, tribute relationships, and cultural contact.'],story:'The Ming state could project power through the Indian Ocean because the network already had ports, pilots, winds, and trading relationships. Zheng He shows the scale of the mature system.',ask:'What does state sponsorship add to a network usually driven by merchants?',listenFor:'Diplomacy, prestige, tribute, scale, political contact, official protection.',ap:'KC-3.2.II.A.iii: interregional contacts encouraged technological and cultural transfers during Chinese maritime activity led by Zheng He.'}
    },
    {
      phase:'room',kind:'action',eyebrow:'BeInTheRoom · Kilwa',title:'Make the port decision.',subtitle:'You are in a Swahili Coast trading city. The winds, merchants, goods, and politics all matter.',big:'BR',
      notes:{minutes:10,land:['Launch BeInTheRoom if pacing allows. If time is tight, use the prompt orally: What would a port ruler do to attract merchants and capture revenue?','Tie the activity back to state growth and diasporic communities.'],story:'Kilwa is the case study where the system becomes visible: maritime trade, Islam, imported goods, local authority, and port wealth intersect.',ask:'What policy would make merchants trust your port enough to return next season?',listenFor:'Fair taxes, security, predictable law, storage, religious spaces, ship repair, market access.',ap:'Application: use historical conditions to explain state growth and commercial strategy.'}
    },
    {
      phase:'skill',kind:'action',eyebrow:'AP Skill Builder · Contextualization',title:'Start before 1200. Then explain what intensified.',subtitle:'Do not write as if the Indian Ocean appeared from nowhere.',big:'AP',
      notes:{minutes:7,land:['Have students write a two-sentence context bridge: one sentence before c. 1200; one sentence after c. 1200.','This prevents the common mistake that technology “created” Indian Ocean trade from nothing.'],story:'Contextualization shows continuity and change. The routes were older; the AP task is to explain why they expanded and intensified after 1200.',ask:'What existed before 1200, and what grew more intense after 1200?',listenFor:'Older maritime routes and seafaring; later growth due to monsoons knowledge, technologies, commercial practices, states, diasporas.',ap:'Contextualization: broader background first, then the change over time.'}
    },
    {
      phase:'synthesis',kind:'process',eyebrow:'Causal Chain',title:'Build the explanation, not the list.',subtitle:'Environment + technology + commercial practice -> trade growth -> state and cultural effects',
      steps:[{label:'Because',text:'Monsoons made timing predictable'},{label:'With',text:'Ships and tools expanded capability'},{label:'Therefore',text:'Trade volume and range increased'},{label:'As a result',text:'States and diasporas grew'}],footer:'This is the sentence structure students need.',
      notes:{minutes:3,land:['Use this to model the final response.','Make them include both a cause and an effect.'],story:'Students have the ingredients. The final move is arranging them as a causal explanation that matches the College Board learning objective.',ask:'Which word forces you to explain instead of list?',listenFor:'Because, therefore, as a result.',ap:'Causation: use connective language that proves the relationship between evidence and outcome.'}
    },
    {
      phase:'check2',kind:'action',eyebrow:'Final Checkpoint · 3 Minutes',title:'One cause. One effect. Specific evidence.',subtitle:'Use monsoons or technology for the cause. Use states, diasporas, or Zheng He for the effect.',big:'03',
      notes:{minutes:3,land:['Collect or cold-call a few responses.','Insist on specific evidence and causal language.'],story:'The final checkpoint should show whether students can turn the story into an AP-ready explanation.',ask:'What is your strongest cause/effect sentence?',listenFor:'Because merchants understood monsoons and used improved ships/navigation, trade intensified; as a result, port states such as the Swahili Coast/Malacca grew or diasporic communities formed.',ap:'Assessment: specific evidence plus reasoning.'}
    },
    {
      phase:'close',kind:'action',eyebrow:'Landing Sentence',title:'The Indian Ocean was a system before it was a route.',subtitle:'Winds made movement predictable. Ships made cargo scalable. Ports and diasporas made exchange durable.',big:'2.3',
      notes:{minutes:1,land:['Land the exact sentence students should remember.','Bridge to Topic 2.4: the Trans-Saharan system solves a different environmental problem with camel caravans and desert knowledge.'],story:'A historical network is more than lines on a map. It is the repeated coordination of environment, technology, institutions, and human trust.',ask:'What is the one-sentence answer to Topic 2.3?',listenFor:'Indian Ocean trade grew because monsoons, ships, ports, and merchant communities made long-distance exchange reliable and profitable.',ap:'Synthesis: carry the network model forward to Trans-Saharan trade.'}
    }
  ]
};