/* Topic 2.4 canonical authored teaching content: trans-Saharan trade.
 * Pictures are assigned by slide id in topic-2-4-presentation-assets.js, so the
 * teacher surface and the generated student deck always show the same visuals.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.4',
    dates: 'September 24–25, 2026',
    minutes: 90,
    title: 'Trans-Saharan Trade Routes: Technology, Demand, and Empire',
    subtitle: 'The desert never became easy. People built a system that made crossing it worth the risk.',
    spine: 'The Sahara did not shrink.',
    retelling: 'causal-chain',
    essentialQuestion: 'How did transportation technology, commercial demand, and Mali\'s political power expand trans-Saharan trade and communication?',
    apFocus: 'Causation + Economic Systems + Governance',
    endTarget: 'Students can explain how camel technology and caravan organization made regular desert exchange possible, how gold-and-salt demand increased the volume and range of trade, and how Mali facilitated and profited from wider Afro-Eurasian connections.'
  },
  priorities: {
    must: [
      'Students explain the camel saddle and caravan organization as transportation solutions, not trivia about camels.',
      'Students explain the causal chain: transportation capacity + complementary demand -> increased trade volume and geographic reach.',
      'Students use gold and salt as evidence of demand rather than treating “gold for salt” as the whole lesson.',
      'Students explain how Mali facilitated trade and communication while taxing and profiting from the network.',
      'Students use Mansa Musa as evidence of Mali\'s wealth and wider Islamic connections without turning the topic into a biography lesson.'
    ],
    should: [
      'Keep the Sahara visible as a real environmental barrier throughout the lesson.',
      'Return repeatedly to the mechanism: technology reduces transportation constraints; demand rewards the risk; states organize and profit from exchange.',
      'Make the distinction between merchant activity and state facilitation explicit.',
      'Use the map to connect West African production zones, Saharan routes, North African markets, and Mediterranean/Islamic networks.'
    ],
    could: [
      'Use Ibn Battuta as an additional lens on Mali\'s political authority and Islamic connections.',
      'Use the Evidence Lab as reinforcement or homework if the block runs long.',
      'Use the full Heimler 2.4 review as retrieval rather than primary instruction.'
    ]
  },
  flow: [
    {id:'preflight',label:'Teacher Preflight',range:'Before class',slide:0},
    {id:'beready',label:'BeReady',range:'0–4',slide:1},
    {id:'open',label:'Hook + Desert Problem',range:'4–6',slide:2},
    {id:'map',label:'Map the Network',range:'6–12',slide:3},
    {id:'first10',label:'First & 10',range:'12–22',slide:5},
    {id:'tech',label:'Camel + Caravan System',range:'22–34',slide:6},
    {id:'demand',label:'Gold + Salt Demand',range:'34–46',slide:9},
    {id:'check1',label:'Checkpoint 1',range:'46–52',slide:11},
    {id:'mali',label:'Mali + State Power',range:'52–65',slide:12},
    {id:'musa',label:'Mansa Musa + Connections',range:'65–72',slide:15},
    {id:'room',label:'BeInTheRoom: Mali',range:'72–81',slide:16},
    {id:'skill',label:'AP Causation',range:'81–87',slide:17},
    {id:'check2',label:'Final Checkpoint',range:'87–89',slide:19},
    {id:'close',label:'Close + Bridge',range:'89–90',slide:20}
  ],
  quickLaunch: [
    {label:'Student Lesson 2.4',url:'../unit-2/lesson-2-4-trans-saharan.html'},
    {label:'Student Presentation 2.4',url:'../unit-2/presentation-topic-2-4-student.html'},
    {label:'First & 10',url:'../unit-2/first-and-10-topic-2-4-trans-saharan-capture.html?v=response-id-fix-v1'},
    {label:'BeInTheRoom: Mali',url:'../beintheroom/unit-2/mali-court.html'},
    {label:'Deep Reading',url:'../unit-2/deep-reading-topic-2-4-trans-saharan.html'},
    {label:'Heimler 2.4 Review',url:'https://youtu.be/fUYUx-0ISW4'}
  ],
  projection: {
    storageKey: 'behistorical-topic-2-4-slide',
    channel: 'behistorical-topic-2-4-os',
    title: 'Topic 2.4 Presentation',
    file: 'present-topic-2-4.html'
  },
  slides: [
    {
      id:'preflight',phase:'preflight',kind:'action',eyebrow:'Teacher Preflight · Not Projected',title:'Teach the desert problem, not gold for salt.',subtitle:'The spine is one sentence: the Sahara did not shrink. Every beat today explains what people built that made crossing it worth the risk, and what that built in turn.',big:'2.4',
      notes:{minutes:2,land:['The learning objective asks for causes and effects of the growth of exchange networks after 1200. Causes here: the camel saddle and caravan organization (transportation technology), with gold and salt as the demand that made the risk pay. Effects: greater volume and geographic range of trade, and Mali facilitating, taxing and profiting from it.','The trap is a barter story. Gold for salt is the motive, not the mechanism. The second trap is a Mansa Musa biography: his hajj is evidence of Mali\'s wealth and connections, not the topic.','Retelling slide: the causal chain near the end (Cause, Mechanism, Effect, State Link). If students can rebuild it from memory, they can answer Checkpoint 2.','Every picture is a real source or a BeHistorical map. The Catalan Atlas is a 1375 Mediterranean depiction of Mali\'s ruler, not a portrait; the Great Mosque of Djenné is a later reconstruction on an older site. Say so when you show them.'],story:'Merchants had crossed the Sahara before, but the camel saddle and organized caravans made regular, heavier crossings practical. Gold from West Africa and salt from the desert gave merchants a reason to take the risk again and again. As trade grew in volume and reach, Mali grew by sitting across the routes, protecting and taxing them, and its wealth became famous across the Islamic world.',ask:'Before class: can you say the whole topic in the causal chain in under thirty seconds?',listenFor:'Because saddles and caravans made crossings practical, and gold and salt made them profitable, trade grew in volume and range; as a result, Mali grew by facilitating and taxing it.',ap:'Causation: enabling cause, motivating cause, effect, state link.'}
    },
    {
      id:'beready',phase:'beready',kind:'process',eyebrow:'BeReady · 4 Minutes · No Notes',title:'Pull the ocean story back from memory.',subtitle:'Short answers are enough. Retrieve first; we will build from them.',
      steps:[
        {label:'Monsoon',text:'What made Indian Ocean voyages predictable?'},
        {label:'Ports',text:'Why did waiting for the wind make port cities grow?'},
        {label:'States',text:'Name one state that grew rich from Indian Ocean trade.'},
        {label:'Bridge',text:'The ocean ran on a schedule. The Sahara has no monsoon. What would merchants need to cross a desert again and again?'}
      ],footer:'Retrieve, connect, enter the new problem.',
      notes:{minutes:4,land:['No notes. Take fast verbal answers and do not reteach Topic 2.3.','Accept brief evidence: the monsoon reversal; merchants waiting months for the wind; the Swahili Coast, Gujarat, or Malacca.'],story:'BeReady carries the network model across from the sea to the desert. The Indian Ocean had a natural schedule to exploit; the Sahara offers nothing like it, so the solutions have to come from animals, equipment and organization.',ask:'If there is no wind to ride, what replaces it?',listenFor:'Animals that can survive the desert, better gear, groups that travel together, water stops, a reason to go.',ap:'Retrieval + comparison: same Unit 2 question, different environmental problem.'}
    },
    {
      id:'hook',phase:'open',kind:'hero',eyebrow:'AP World History · Topic 2.4',title:'The Desert Road',subtitle:'The Sahara stayed dangerous. Trade grew because people built systems that made crossing it possible and profitable.',position:'lower-left',
      notes:{minutes:2,land:['Topic 2.3 was a maritime network built around predictable winds. Topic 2.4 asks how merchants built a durable network across one of the world\'s harshest land environments.','Do not start with gold and salt. Start with the transportation problem: how do you move people and cargo across the Sahara repeatedly?'],story:'The core story is a chain of solutions. Camel technology and caravan organization reduce the transportation problem. Valuable demand makes the trip worth taking. Mali then gains power by sitting inside that exchange and helping organize it.',ask:'What has to be solved before a desert can become a trade route?',listenFor:'Water, carrying capacity, navigation, security, distance, profit.',ap:'Causation: identify the enabling conditions before explaining expansion.'}
    },
    {
      id:'basin',phase:'map',kind:'map',eyebrow:'Geographic Grounding',title:'The Sahara is the problem in the middle.',subtitle:'West African gold zones · Saharan salt · North African markets',footer:'Trade links regions because they need different things.',
      notes:{minutes:4,land:['Locate West Africa, the Sahara, North Africa, and the Mediterranean-facing cities beyond the desert.','Make the environmental scale visible before naming Mali.'],story:'This network connects complementary zones. West Africa has major gold production. Saharan deposits supply salt. North African and wider Islamic markets create additional demand and connections.',ask:'Why does geography create both the obstacle and the opportunity?',listenFor:'Distance and desert make movement hard, but different regions have valuable resources the others want.',ap:'Economic systems: regional specialization creates incentives for interregional exchange.'}
    },
    {
      id:'four-pieces',phase:'map',kind:'process',eyebrow:'The Network',title:'Four pieces make the desert route work.',subtitle:'Camel · Caravan · Oasis · Demand',
      steps:[{label:'Camel',text:'Desert-adapted transport'},{label:'Caravan',text:'Scale, supplies, security'},{label:'Oasis',text:'Water + staged movement'},{label:'Demand',text:'Profit justifies the risk'}],footer:'Transportation solves possibility. Demand supplies motive.',
      notes:{minutes:2,land:['Give students the four-part model for the entire lesson.','Technology alone does not create trade; merchants need a reason to absorb the cost and risk.'],story:'Regular trade emerges when transport capacity and commercial incentive reinforce each other.',ask:'Which piece explains why merchants would keep making the trip?',listenFor:'Demand and profit.',ap:'Causation: separate enabling causes from motivating causes.'}
    },
    {
      id:'first10',phase:'first10',kind:'action',eyebrow:'First & 10 · 10 Minutes',title:'Read for the causal chain.',subtitle:'Transportation → trade expansion → Mali',big:'10',
      notes:{minutes:10,land:['The detailed narrative belongs in First & 10. The projector gives the reading lens only.','Circulate for camel saddle, caravan organization, gold/salt demand, and Mali\'s role.'],story:'Students should emerge with sequence, not disconnected vocabulary.',ask:'What happens first in the story, and what becomes possible because of it?',listenFor:'Transportation improvements make regular exchange more feasible; expanded exchange creates wealth and state opportunities.',ap:'Causation: cause → mechanism → effect.'}
    },
    {
      id:'saddle',phase:'tech',kind:'process',eyebrow:'Transportation Technology',title:'The camel is useful because the saddle makes it work.',subtitle:'Animal adaptation + human technology',
      steps:[{label:'Endurance',text:'Long stretches between water'},{label:'Load',text:'Saddle improves carrying capacity'},{label:'Control',text:'Rider + pack management'},{label:'Reach',text:'Regular desert crossings become viable'}],footer:'The saddle changes what the animal can do for commerce.',
      notes:{minutes:4,land:['Avoid “camels can survive the desert” as the full explanation. The College Board target is transportation innovation.','The saddle improves the practical use of camels for riders and cargo.'],story:'Environmental adaptation belongs to the camel; commercial usefulness depends on human systems built around it.',ask:'Why is “camel saddle” stronger evidence than simply saying “camels”?',listenFor:'It identifies the technological change that increases transport usefulness.',ap:'KC-3.1.II.A.ii: innovations in existing transportation technologies encourage trade growth.'}
    },
    {
      id:'caravan',phase:'tech',kind:'process',eyebrow:'Caravan Organization',title:'One merchant crosses a desert. A caravan builds a system.',subtitle:'Animals · guides · supplies · security',
      steps:[{label:'Pool',text:'Animals + cargo + labor'},{label:'Guide',text:'Route + water knowledge'},{label:'Protect',text:'Shared security and risk'},{label:'Stage',text:'Move between known stopping points'}],footer:'Organization turns individual risk into network capacity.',
      notes:{minutes:4,land:['Caravans are not just “many camels.” They are a risk-management institution.','Experienced guides and coordinated supplies matter as much as the animals.'],story:'The caravan lets merchants distribute risk, share route knowledge, and move more cargo than isolated travel would allow.',ask:'Which caravan feature most directly reduces uncertainty?',listenFor:'Guides, shared supplies, security, known stopping points.',ap:'Causation: institutions can be transportation technology in practice.'}
    },
    {
      id:'oasis-map',phase:'tech',kind:'map',eyebrow:'Environmental Constraint',title:'The route follows water as much as profit.',subtitle:'Oases divide a huge crossing into survivable stages.',footer:'The environment shapes the route.',
      notes:{minutes:4,land:['Trace one route and narrate it as a chain of stages rather than a single crossing.','Technology reduces the environmental constraint; it does not erase it.'],story:'The Sahara continues to control where and how people move. Routes cluster around usable pathways and stopping points.',ask:'What does this map show that a list of trade goods cannot?',listenFor:'Distance, route structure, environmental constraints, strategic nodes.',ap:'Humans and environment: societies adapt transportation systems to environmental limits.'}
    },
    {
      id:'gold-salt',phase:'demand',kind:'process',eyebrow:'Commercial Demand',title:'Gold and salt create complementary demand.',subtitle:'Each side has something the other side values.',
      steps:[{label:'West Africa',text:'Major gold production'},{label:'Sahara',text:'Major salt deposits'},{label:'North Africa',text:'Markets + wider connections'},{label:'Exchange',text:'Price differences reward movement'}],footer:'Goods matter because demand makes transport profitable.',
      notes:{minutes:4,land:['Do not teach a simplistic barter story. Gold and salt are anchors for a broader commercial network.','The key move is complementary demand across regions.'],story:'Transportation capacity creates possibility; price and demand create motive. Merchants accept severe risk because distance can increase value.',ask:'Why would merchants cross a dangerous desert for goods that already exist somewhere else?',listenFor:'Regional scarcity, price differences, profit, wider market demand.',ap:'Economic systems: demand and regional specialization help explain trade expansion.'}
    },
    {
      id:'volume-range',phase:'demand',kind:'process',eyebrow:'Expansion',title:'Better transport changes both volume and range.',subtitle:'More goods · farther connections · more regular exchange',
      steps:[{label:'Capacity',text:'Move heavier/larger cargoes'},{label:'Regularity',text:'Repeat routes more reliably'},{label:'Volume',text:'More exchange over time'},{label:'Range',text:'Network reaches wider markets'}],footer:'The AP claim is bigger than “gold traded for salt.”',
      notes:{minutes:4,land:['This is the core CED mechanism. Make students say “volume and geographic range.”','Link every effect back to improved transportation and commercial incentive.'],story:'Once a route becomes more reliable and profitable, trade intensifies: more goods move and connections stretch farther.',ask:'What would count as evidence that a trade network intensified?',listenFor:'More goods, more merchants, more cities, longer routes, more frequent exchange.',ap:'KC-3.1.I.A.iv: improved transportation increases volume and geographic range of trade.'}
    },
    {
      id:'check1',phase:'check1',kind:'action',eyebrow:'Checkpoint 1 · 6 Minutes',title:'Explain the mechanism.',subtitle:'How did transportation technology and demand expand trans-Saharan trade?',big:'06',
      notes:{minutes:6,land:['Require camel saddle or caravan evidence AND a demand explanation.','Reject lists. Students must connect evidence to increased volume or range.'],story:'This checkpoint locks the causal spine before Mali enters the story.',ask:'What changed because merchants could move cargo more reliably and profitably?',listenFor:'More regular crossings, larger cargoes, wider market links, increased trade volume.',ap:'Evidence + reasoning: technology/demand → mechanism → expansion.'}
    },
    {
      id:'mali-map',phase:'mali',kind:'map',eyebrow:'State Power',title:'Mali sits inside the network — and grows with it.',subtitle:'Control territory · tax commerce · support connected cities',footer:'States can facilitate trade and profit from it at the same time.',
      notes:{minutes:4,land:['Shift from merchants to governance: who benefits when routes cross imperial territory?','Mali did not invent trans-Saharan trade. Its expansion pulled more people and territory into the network and created conditions rulers could tax and support.'],story:'Empire and commerce reinforce each other. Trade produces taxable wealth; political control can make key routes and cities more connected and administratively useful.',ask:'Why would a ruler want merchants to succeed instead of simply taking their goods?',listenFor:'Taxes, recurring revenue, city growth, legitimacy, wider connections.',ap:'KC-3.1.I.E.ii: imperial expansion facilitates trade and communication.'}
    },
    {
      id:'mali-revenue',phase:'mali',kind:'process',eyebrow:'Governance + Commerce',title:'Mali turns movement into state revenue.',subtitle:'Control · protect · tax · reinvest',
      steps:[{label:'Control',text:'Hold strategic territory'},{label:'Facilitate',text:'Support routes + cities'},{label:'Tax',text:'Capture part of exchange'},{label:'Reinforce',text:'Wealth strengthens the state'}],footer:'Trade builds states. States can strengthen trade.',
      notes:{minutes:4,land:['Keep “facilitate” separate from “control.” The AP point is not that Mali centrally planned every caravan.','Taxation works best when commerce keeps happening.'],story:'A state can extract wealth from a network without replacing private merchants. Its interest is often in making movement regular enough to tax repeatedly.',ask:'What is the difference between facilitating trade and conducting the trade yourself?',listenFor:'States shape conditions; merchants perform most exchange.',ap:'Governance: explain reciprocal relationships between state power and commerce.'}
    },
    {
      id:'trade-cities',phase:'mali',kind:'hero',eyebrow:'Cities + Connections',title:'Trade wealth supports connected urban centers.',subtitle:'Markets · scholarship · Islam · administration',position:'upper-left',
      notes:{minutes:4,land:['Use Djenné, a major trading city of the Mali era, as evidence of urban and Islamic connections supported by wider trade, not as a claim that trade alone created every institution.','Say that the present mosque is a later reconstruction on the site of earlier mosques, so it shows the city\'s lasting Islamic importance rather than its exact 14th-century form. Timbuktu is the other city to name.','Arabic literacy, scholarship, and Islam connect Mali to a broader religious and intellectual world.'],story:'Commercial routes carry more than commodities. They create durable contact zones where political, religious, and intellectual institutions can deepen.',ask:'How can a trade route change a city even when the goods keep moving through it?',listenFor:'Taxes, markets, visitors, scholars, religious institutions, services.',ap:'Effects of exchange: urban growth and cultural connection.'}
    },
    {
      id:'mansa-musa',phase:'musa',kind:'hero',eyebrow:'Mansa Musa · 1324',title:'One pilgrimage advertises a whole network.',subtitle:'Mali\'s wealth becomes visible across the Islamic world.',position:'lower-left',
      notes:{minutes:5,land:['Mansa Musa is evidence, not the whole topic. His hajj demonstrates wealth, mobility, Islam, and Mali\'s position in a wider interregional system.','The Catalan Atlas is a later Mediterranean representation of Mali\'s ruler and wealth; treat it as evidence of reputation and geographic knowledge, not a portrait from life.'],story:'The hajj connects West African imperial wealth to North Africa, the Middle East, and the wider Islamic world. It makes the network visible to distant observers.',ask:'What can Mansa Musa\'s pilgrimage prove about Mali that a pile of gold cannot?',listenFor:'Mobility, Islamic connection, diplomatic visibility, long-distance communication.',ap:'Use a specific event as evidence for wider interregional connections.'}
    },
    {
      id:'beintheroom',phase:'room',kind:'action',eyebrow:'BeInTheRoom · Mali Court',title:'You are inside a state built around exchange.',subtitle:'Choose a role. Make a decision. Defend it with evidence.',big:'09',
      notes:{minutes:9,land:['Launch the Mali court quickly. Keep decisions tied to routes, revenue, political power, and Islamic connections.','Push students to identify whose interests are served by each policy choice.'],story:'The simulation makes the state-trade relationship concrete: rulers, merchants, scholars, and officials do not want exactly the same thing from the network.',ask:'Which policy best strengthens Mali without strangling the trade that funds it?',listenFor:'Balanced taxation, route security, support for cities/markets, legitimacy, merchant incentives.',ap:'Historical reasoning: connect evidence to state choices and economic consequences.'}
    },
    {
      id:'causal-chain',retelling:true,phase:'skill',kind:'process',eyebrow:'AP Skill Builder · Causation',title:'Build the chain — do not skip the middle.',subtitle:'Cause → mechanism → effect',
      steps:[{label:'Cause',text:'Camel/caravan improvements'},{label:'Mechanism',text:'Lower transport risk + higher capacity'},{label:'Effect',text:'More volume + wider range'},{label:'State Link',text:'Mali facilitates + profits'}],footer:'Strong AP writing explains why each arrow works.',
      notes:{minutes:4,land:['Have students verbalize each arrow before writing.','If they jump from “camel saddle” directly to “Mali became rich,” force the missing mechanism into the sentence.'],story:'Causation earns strength from the middle. The explanation must show how one condition changes behavior or capacity before claiming an outcome.',ask:'Which arrow in this chain is easiest to leave unexplained?',listenFor:'Technology to trade expansion, or trade expansion to state revenue/power.',ap:'Causation: explicit causal mechanisms.'}
    },
    {
      id:'network-comparison',phase:'skill',kind:'process',eyebrow:'Network Comparison',title:'Same Unit 2 question. Different transportation problem.',subtitle:'Silk Roads · Indian Ocean · Trans-Saharan',
      steps:[{label:'Silk Roads',text:'Caravan + overland intermediaries'},{label:'Indian Ocean',text:'Monsoon + maritime technology'},{label:'Trans-Saharan',text:'Camel + caravan organization'},{label:'Shared Pattern',text:'Transport systems expand exchange'}],footer:'Different environments. Repeating historical mechanism.',
      notes:{minutes:2,land:['Use this as a bridge across Topics 2.1 to 2.4.','Students should see Unit 2 as recurring solutions to distance, risk, and exchange rather than separate geography chapters.'],story:'Across networks, the environment changes the specific technology, but the historical pattern repeats: improved transport and institutions increase connectivity.',ask:'What stays the same even when the geography changes?',listenFor:'Need for transport, risk management, demand, nodes, political support, cultural diffusion.',ap:'Comparison: identify a shared causal pattern across different networks.'}
    },
    {
      id:'check2',phase:'check2',kind:'action',eyebrow:'Final Checkpoint · 2 Minutes',title:'One sentence. Full chain.',subtitle:'Explain how technology, trade, and Mali connect.',big:'02',
      notes:{minutes:2,land:['Require all three parts: transportation innovation, expanded exchange, Mali/state effect.','Use this as the exit response if the block is tight.'],story:'The final response should reproduce the lesson spine in miniature.',ask:'Can you explain the whole topic without saying only “gold and salt”?',listenFor:'Camel/caravan → increased volume/range → Mali facilitates/taxes/profits/communicates.',ap:'Synthesis: compress a multi-step causal argument accurately.'}
    },
    {
      id:'landing',phase:'close',kind:'hero',eyebrow:'Topic 2.4 · The Big Idea',title:'The Sahara did not shrink.',subtitle:'Transportation systems made the distance commercially usable.',position:'lower-left',
      notes:{minutes:1,land:['Land the single idea: environment remains difficult; human systems change what is possible inside it.','Bridge forward to Topic 2.5: once networks intensify, ideas, technologies, and people move with the goods.'],story:'Trade expands when societies solve enough of the transportation problem for demand and political organization to do the rest.',ask:'What is the one causal chain you need to remember tomorrow?',listenFor:'Technology/organization → more trade → state/cultural effects.',ap:'Bridge to cultural consequences of connectivity.'}
    }
  ]
};
