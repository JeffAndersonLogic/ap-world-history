/* Topic 2.4 Teaching OS — Trans-Saharan trade. */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.4',
    dates: 'September 24–25, 2026',
    minutes: 90,
    title: 'Trans-Saharan Trade Routes: Technology, Demand, and Empire',
    subtitle: 'The desert never became easy. People built a system that made crossing it worth the risk.',
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
    {id:'open',label:'Hook + Desert Problem',range:'0–6',slide:0},
    {id:'map',label:'Map the Network',range:'6–12',slide:1},
    {id:'first10',label:'First & 10',range:'12–22',slide:3},
    {id:'tech',label:'Camel + Caravan System',range:'22–34',slide:4},
    {id:'demand',label:'Gold + Salt Demand',range:'34–46',slide:7},
    {id:'check1',label:'Checkpoint 1',range:'46–52',slide:9},
    {id:'mali',label:'Mali + State Power',range:'52–65',slide:10},
    {id:'musa',label:'Mansa Musa + Connections',range:'65–72',slide:13},
    {id:'room',label:'BeInTheRoom: Mali',range:'72–81',slide:14},
    {id:'skill',label:'AP Causation',range:'81–87',slide:15},
    {id:'check2',label:'Final Checkpoint',range:'87–89',slide:17},
    {id:'close',label:'Close + Bridge',range:'89–90',slide:18}
  ],
  quickLaunch: [
    {label:'Student Lesson 2.4',url:'../unit-2/lesson-2-4-trans-saharan.html'},
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
      phase:'open',kind:'hero',eyebrow:'AP World History · Topic 2.4',title:'The Desert Road',subtitle:'The Sahara stayed dangerous. Trade grew because people built systems that made crossing it possible and profitable.',position:'lower-left',
      visual:{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa depicted on the Catalan Atlas',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',credit:'Catalan Atlas, 1375 · Bibliothèque nationale de France · public domain'},
      notes:{minutes:3,land:['Topic 2.3 was a maritime network built around predictable winds. Topic 2.4 asks how merchants built a durable network across one of the world\'s harshest land environments.','Do not start with gold and salt. Start with the transportation problem: how do you move people and cargo across the Sahara repeatedly?'],story:'The core story is a chain of solutions. Camel technology and caravan organization reduce the transportation problem. Valuable demand makes the trip worth taking. Mali then gains power by sitting inside that exchange and helping organize it.',ask:'What has to be solved before a desert can become a trade route?',listenFor:'Water, carrying capacity, navigation, security, distance, profit.',ap:'Causation: identify the enabling conditions before explaining expansion.'}
    },
    {
      phase:'map',kind:'map',eyebrow:'Geographic Grounding',title:'The Sahara is the problem in the middle.',subtitle:'West African gold zones · Saharan salt · North African markets',
      visual:{url:'../assets/images/instructional-maps/topic-2-4.svg',alt:'Instructional map of trans-Saharan routes and West African states',credit:'BeHistorical instructional map · Topic 2.4'},footer:'Trade links regions because they need different things.',
      notes:{minutes:4,land:['Locate West Africa, the Sahara, North Africa, and the Mediterranean-facing cities beyond the desert.','Make the environmental scale visible before naming Mali.'],story:'This network connects complementary zones. West Africa has major gold production. Saharan deposits supply salt. North African and wider Islamic markets create additional demand and connections.',ask:'Why does geography create both the obstacle and the opportunity?',listenFor:'Distance and desert make movement hard, but different regions have valuable resources the others want.',ap:'Economic systems: regional specialization creates incentives for interregional exchange.'}
    },
    {
      phase:'map',kind:'process',eyebrow:'The Network',title:'Four pieces make the desert route work.',subtitle:'Camel · Caravan · Oasis · Demand',
      steps:[{label:'Camel',text:'Desert-adapted transport'},{label:'Caravan',text:'Scale, supplies, security'},{label:'Oasis',text:'Water + staged movement'},{label:'Demand',text:'Profit justifies the risk'}],footer:'Transportation solves possibility. Demand supplies motive.',
      notes:{minutes:2,land:['Give students the four-part model for the entire lesson.','Technology alone does not create trade; merchants need a reason to absorb the cost and risk.'],story:'Regular trade emerges when transport capacity and commercial incentive reinforce each other.',ask:'Which piece explains why merchants would keep making the trip?',listenFor:'Demand and profit.',ap:'Causation: separate enabling causes from motivating causes.'}
    },
    {
      phase:'first10',kind:'action',eyebrow:'First & 10 · 10 Minutes',title:'Read for the causal chain.',subtitle:'Transportation → trade expansion → Mali',big:'10',
      notes:{minutes:10,land:['The detailed narrative belongs in First & 10. The projector gives the reading lens only.','Circulate for camel saddle, caravan organization, gold/salt demand, and Mali\'s role.'],story:'Students should emerge with sequence, not disconnected vocabulary.',ask:'What happens first in the story — and what becomes possible because of it?',listenFor:'Transportation improvements make regular exchange more feasible; expanded exchange creates wealth and state opportunities.',ap:'Causation: cause → mechanism → effect.'}
    },
    {
      phase:'tech',kind:'process',eyebrow:'Transportation Technology',title:'The camel is useful because the saddle makes it work.',subtitle:'Animal adaptation + human technology',
      steps:[{label:'Endurance',text:'Long stretches between water'},{label:'Load',text:'Saddle improves carrying capacity'},{label:'Control',text:'Rider + pack management'},{label:'Reach',text:'Regular desert crossings become viable'}],footer:'The saddle changes what the animal can do for commerce.',
      notes:{minutes:4,land:['Avoid “camels can survive the desert” as the full explanation. The College Board target is transportation innovation.','The saddle improves the practical use of camels for riders and cargo.'],story:'Environmental adaptation belongs to the camel; commercial usefulness depends on human systems built around it.',ask:'Why is “camel saddle” stronger evidence than simply saying “camels”?',listenFor:'It identifies the technological change that increases transport usefulness.',ap:'KC-3.1.II.A.ii: innovations in existing transportation technologies encourage trade growth.'}
    },
    {
      phase:'tech',kind:'process',eyebrow:'Caravan Organization',title:'One merchant crosses a desert. A caravan builds a system.',subtitle:'Animals · guides · supplies · security',
      steps:[{label:'Pool',text:'Animals + cargo + labor'},{label:'Guide',text:'Route + water knowledge'},{label:'Protect',text:'Shared security and risk'},{label:'Stage',text:'Move between known stopping points'}],footer:'Organization turns individual risk into network capacity.',
      notes:{minutes:4,land:['Caravans are not just “many camels.” They are a risk-management institution.','Experienced guides and coordinated supplies matter as much as the animals.'],story:'The caravan lets merchants distribute risk, share route knowledge, and move more cargo than isolated travel would allow.',ask:'Which caravan feature most directly reduces uncertainty?',listenFor:'Guides, shared supplies, security, known stopping points.',ap:'Causation: institutions can be transportation technology in practice.'}
    },
    {
      phase:'tech',kind:'map',eyebrow:'Environmental Constraint',title:'The route follows water as much as profit.',subtitle:'Oases divide a huge crossing into survivable stages.',
      visual:{url:'../assets/images/instructional-maps/topic-2-4.svg',alt:'Trans-Saharan routes showing West Africa, Sahara, and North Africa',credit:'BeHistorical instructional map · Topic 2.4'},footer:'The environment shapes the route.',
      notes:{minutes:4,land:['Trace one route and narrate it as a chain of stages rather than a single crossing.','Technology reduces the environmental constraint; it does not erase it.'],story:'The Sahara continues to control where and how people move. Routes cluster around usable pathways and stopping points.',ask:'What does this map show that a list of trade goods cannot?',listenFor:'Distance, route structure, environmental constraints, strategic nodes.',ap:'Humans and environment: societies adapt transportation systems to environmental limits.'}
    },
    {
      phase:'demand',kind:'process',eyebrow:'Commercial Demand',title:'Gold and salt create complementary demand.',subtitle:'Each side has something the other side values.',
      steps:[{label:'West Africa',text:'Major gold production'},{label:'Sahara',text:'Major salt deposits'},{label:'North Africa',text:'Markets + wider connections'},{label:'Exchange',text:'Price differences reward movement'}],footer:'Goods matter because demand makes transport profitable.',
      notes:{minutes:4,land:['Do not teach a simplistic barter story. Gold and salt are anchors for a broader commercial network.','The key move is complementary demand across regions.'],story:'Transportation capacity creates possibility; price and demand create motive. Merchants accept severe risk because distance can increase value.',ask:'Why would merchants cross a dangerous desert for goods that already exist somewhere else?',listenFor:'Regional scarcity, price differences, profit, wider market demand.',ap:'Economic systems: demand and regional specialization help explain trade expansion.'}
    },
    {
      phase:'demand',kind:'process',eyebrow:'Expansion',title:'Better transport changes both volume and range.',subtitle:'More goods · farther connections · more regular exchange',
      steps:[{label:'Capacity',text:'Move heavier/larger cargoes'},{label:'Regularity',text:'Repeat routes more reliably'},{label:'Volume',text:'More exchange over time'},{label:'Range',text:'Network reaches wider markets'}],footer:'The AP claim is bigger than “gold traded for salt.”',
      notes:{minutes:4,land:['This is the core CED mechanism. Make students say “volume and geographic range.”','Link every effect back to improved transportation and commercial incentive.'],story:'Once a route becomes more reliable and profitable, trade intensifies: more goods move and connections stretch farther.',ask:'What would count as evidence that a trade network intensified?',listenFor:'More goods, more merchants, more cities, longer routes, more frequent exchange.',ap:'KC-3.1.I.A.iv: improved transportation increases volume and geographic range of trade.'}
    },
    {
      phase:'check1',kind:'action',eyebrow:'Checkpoint 1 · 6 Minutes',title:'Explain the mechanism.',subtitle:'How did transportation technology and demand expand trans-Saharan trade?',big:'06',
      notes:{minutes:6,land:['Require camel saddle or caravan evidence AND a demand explanation.','Reject lists. Students must connect evidence to increased volume or range.'],story:'This checkpoint locks the causal spine before Mali enters the story.',ask:'What changed because merchants could move cargo more reliably and profitably?',listenFor:'More regular crossings, larger cargoes, wider market links, increased trade volume.',ap:'Evidence + reasoning: technology/demand → mechanism → expansion.'}
    },
    {
      phase:'mali',kind:'map',eyebrow:'State Power',title:'Mali sits inside the network — and grows with it.',subtitle:'Control territory · tax commerce · support connected cities',
      visual:{url:'../assets/images/instructional-maps/topic-2-4.svg',alt:'Map connecting Mali to trans-Saharan routes',credit:'BeHistorical instructional map · Topic 2.4'},footer:'States can facilitate trade and profit from it at the same time.',
      notes:{minutes:4,land:['Shift from merchants to governance: who benefits when routes cross imperial territory?','Mali did not invent trans-Saharan trade. Its expansion pulled more people and territory into the network and created conditions rulers could tax and support.'],story:'Empire and commerce reinforce each other. Trade produces taxable wealth; political control can make key routes and cities more connected and administratively useful.',ask:'Why would a ruler want merchants to succeed instead of simply taking their goods?',listenFor:'Taxes, recurring revenue, city growth, legitimacy, wider connections.',ap:'KC-3.1.I.E.ii: imperial expansion facilitates trade and communication.'}
    },
    {
      phase:'mali',kind:'process',eyebrow:'Governance + Commerce',title:'Mali turns movement into state revenue.',subtitle:'Control · protect · tax · reinvest',
      steps:[{label:'Control',text:'Hold strategic territory'},{label:'Facilitate',text:'Support routes + cities'},{label:'Tax',text:'Capture part of exchange'},{label:'Reinforce',text:'Wealth strengthens the state'}],footer:'Trade builds states. States can strengthen trade.',
      notes:{minutes:4,land:['Keep “facilitate” separate from “control.” The AP point is not that Mali centrally planned every caravan.','Taxation works best when commerce keeps happening.'],story:'A state can extract wealth from a network without replacing private merchants. Its interest is often in making movement regular enough to tax repeatedly.',ask:'What is the difference between facilitating trade and conducting the trade yourself?',listenFor:'States shape conditions; merchants perform most exchange.',ap:'Governance: explain reciprocal relationships between state power and commerce.'}
    },
    {
      phase:'mali',kind:'hero',eyebrow:'Cities + Connections',title:'Trade wealth supports connected urban centers.',subtitle:'Markets · scholarship · Islam · administration',position:'upper-left',
      visual:{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Djinguereber_Mosque_Timbuktu.jpg',alt:'Djinguereber Mosque in Timbuktu',sourceUrl:'https://commons.wikimedia.org/wiki/File:Djinguereber_Mosque_Timbuktu.jpg',credit:'Djinguereber Mosque, Timbuktu · Wikimedia Commons'},
      notes:{minutes:4,land:['Use Timbuktu as evidence of urban and Islamic connections supported by wider trade, not as a claim that trade alone created every institution.','Arabic literacy, scholarship, and Islam connect Mali to a broader religious and intellectual world.'],story:'Commercial routes carry more than commodities. They create durable contact zones where political, religious, and intellectual institutions can deepen.',ask:'How can a trade route change a city even when the goods keep moving through it?',listenFor:'Taxes, markets, visitors, scholars, religious institutions, services.',ap:'Effects of exchange: urban growth and cultural connection.'}
    },
    {
      phase:'musa',kind:'hero',eyebrow:'Mansa Musa · 1324',title:'One pilgrimage advertises a whole network.',subtitle:'Mali\'s wealth becomes visible across the Islamic world.',position:'lower-left',
      visual:{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa holding gold on the Catalan Atlas',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',credit:'Catalan Atlas, 1375 · Bibliothèque nationale de France · public domain'},
      notes:{minutes:5,land:['Mansa Musa is evidence, not the whole topic. His hajj demonstrates wealth, mobility, Islam, and Mali\'s position in a wider interregional system.','The Catalan Atlas is a later Mediterranean representation of Mali\'s ruler and wealth; treat it as evidence of reputation and geographic knowledge, not a portrait from life.'],story:'The hajj connects West African imperial wealth to North Africa, the Middle East, and the wider Islamic world. It makes the network visible to distant observers.',ask:'What can Mansa Musa\'s pilgrimage prove about Mali that a pile of gold cannot?',listenFor:'Mobility, Islamic connection, diplomatic visibility, long-distance communication.',ap:'Use a specific event as evidence for wider interregional connections.'}
    },
    {
      phase:'room',kind:'action',eyebrow:'BeInTheRoom · Mali Court',title:'You are inside a state built around exchange.',subtitle:'Choose a role. Make a decision. Defend it with evidence.',big:'09',
      notes:{minutes:9,land:['Launch the Mali court quickly. Keep decisions tied to routes, revenue, political power, and Islamic connections.','Push students to identify whose interests are served by each policy choice.'],story:'The simulation makes the state-trade relationship concrete: rulers, merchants, scholars, and officials do not want exactly the same thing from the network.',ask:'Which policy best strengthens Mali without strangling the trade that funds it?',listenFor:'Balanced taxation, route security, support for cities/markets, legitimacy, merchant incentives.',ap:'Historical reasoning: connect evidence to state choices and economic consequences.'}
    },
    {
      phase:'skill',kind:'process',eyebrow:'AP Skill Builder · Causation',title:'Build the chain — do not skip the middle.',subtitle:'Cause → mechanism → effect',
      steps:[{label:'Cause',text:'Camel/caravan improvements'},{label:'Mechanism',text:'Lower transport risk + higher capacity'},{label:'Effect',text:'More volume + wider range'},{label:'State Link',text:'Mali facilitates + profits'}],footer:'Strong AP writing explains why each arrow works.',
      notes:{minutes:4,land:['Have students verbalize each arrow before writing.','If they jump from “camel saddle” directly to “Mali became rich,” force the missing mechanism into the sentence.'],story:'Causation earns strength from the middle. The explanation must show how one condition changes behavior or capacity before claiming an outcome.',ask:'Which arrow in this chain is easiest to leave unexplained?',listenFor:'Technology to trade expansion, or trade expansion to state revenue/power.',ap:'Causation: explicit causal mechanisms.'}
    },
    {
      phase:'skill',kind:'process',eyebrow:'Network Comparison',title:'Same Unit 2 question. Different transportation problem.',subtitle:'Silk Roads · Indian Ocean · Trans-Saharan',
      steps:[{label:'Silk Roads',text:'Caravan + overland intermediaries'},{label:'Indian Ocean',text:'Monsoon + maritime technology'},{label:'Trans-Saharan',text:'Camel + caravan organization'},{label:'Shared Pattern',text:'Transport systems expand exchange'}],footer:'Different environments. Repeating historical mechanism.',
      notes:{minutes:2,land:['Use this as a bridge across Topics 2.1–2.4.','Students should see Unit 2 as recurring solutions to distance, risk, and exchange rather than separate geography chapters.'],story:'Across networks, the environment changes the specific technology, but the historical pattern repeats: improved transport and institutions increase connectivity.',ask:'What stays the same even when the geography changes?',listenFor:'Need for transport, risk management, demand, nodes, political support, cultural diffusion.',ap:'Comparison: identify a shared causal pattern across different networks.'}
    },
    {
      phase:'check2',kind:'action',eyebrow:'Final Checkpoint · 2 Minutes',title:'One sentence. Full chain.',subtitle:'Explain how technology, trade, and Mali connect.',big:'02',
      notes:{minutes:2,land:['Require all three parts: transportation innovation, expanded exchange, Mali/state effect.','Use this as the exit response if the block is tight.'],story:'The final response should reproduce the lesson spine in miniature.',ask:'Can you explain the whole topic without saying only “gold and salt”?',listenFor:'Camel/caravan → increased volume/range → Mali facilitates/taxes/profits/communicates.',ap:'Synthesis: compress a multi-step causal argument accurately.'}
    },
    {
      phase:'close',kind:'hero',eyebrow:'Topic 2.4 · The Big Idea',title:'The Sahara did not shrink.',subtitle:'Transportation systems made the distance commercially usable.',position:'lower-left',
      visual:{url:'../assets/images/instructional-maps/topic-2-4.svg',alt:'Trans-Saharan trade routes',credit:'BeHistorical instructional map · Topic 2.4'},
      notes:{minutes:1,land:['Land the single idea: environment remains difficult; human systems change what is possible inside it.','Bridge forward to Topic 2.5: once networks intensify, ideas, technologies, and people move with the goods.'],story:'Trade expands when societies solve enough of the transportation problem for demand and political organization to do the rest.',ask:'What is the one causal chain you need to remember tomorrow?',listenFor:'Technology/organization → more trade → state/cultural effects.',ap:'Bridge to cultural consequences of connectivity.'}
    }
  ]
};
