/* Topic 2.4 canonical authored teaching content: trans-Saharan trade.
 * Story approved by Jeff 2026-09-22: a desert in the middle, then saddles and
 * caravans, then gold and salt, then more trade, then Mali. Spine: the Sahara
 * did not shrink; the system for crossing it got better.
 * Rebuilt 2026-09-23 on the slide templates (assets/js/behistorical-slide-templates.js):
 * each idea is drawn in the shape it has, not as four numbered boxes.
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
    retelling: 'split-contrast',
    essentialQuestion: 'How did transportation technology, commercial demand, and Mali\'s political power expand trans-Saharan trade and communication?',
    apFocus: 'Causation + Economic Systems + Governance',
    endTarget: 'Students can explain how camel technology and caravan organization made regular desert exchange possible, how gold-and-salt demand made it worth the risk and increased the volume and range of trade, and how Mali facilitated and profited from wider Afro-Eurasian connections.'
  },
  priorities: {
    must: [
      'Students explain the camel saddle and caravan organization as transportation solutions, not trivia about camels.',
      'Students explain why it took both: tools made the crossing possible, demand made it worth it, and neither alone expands trade.',
      'Students use gold and salt as evidence of demand rather than treating “gold for salt” as the whole lesson.',
      'Students explain how Mali facilitated trade and communication while taxing and profiting from the network.',
      'Students use Mansa Musa as evidence of Mali\'s wealth and wider Islamic connections without turning the topic into a biography lesson.'
    ],
    should: [
      'Keep the Sahara visible as a real environmental barrier throughout the lesson. It never gets smaller.',
      'Return to the spine at the question, the take-one-away slide, the retelling slide and the landing.',
      'Make the distinction between merchant activity and state facilitation explicit.',
      'Name the modules due today: Map, First & 10, Skill Builder, Checkpoint 1 and Checkpoint 2. BeInTheRoom runs in class but is not on the Canvas list.'
    ],
    could: [
      'Use the full Ibn Battuta passage in Module 08 as homework; the salt-price excerpt on the projector comes from it.',
      'Use the Evidence Lab as reinforcement or homework if the block runs long.',
      'Use the full Heimler 2.4 review as retrieval rather than primary instruction.'
    ]
  },
  flow: [
    {id:'preflight',label:'Teacher Preflight',range:'Before class',slide:0},
    {id:'beready',label:'BeReady',range:'0–4',slide:1},
    {id:'open',label:'The Question',range:'4–6',slide:2},
    {id:'map',label:'Map the Network',range:'6–10',slide:3},
    {id:'first10',label:'First & 10',range:'10–20',slide:4},
    {id:'tools',label:'The Tools',range:'20–27',slide:5},
    {id:'demand',label:'Gold, Salt, and Price',range:'27–35',slide:7},
    {id:'skill',label:'Why It Took Both',range:'35–46',slide:9},
    {id:'expand',label:'Volume + Range',range:'46–49',slide:11},
    {id:'check1',label:'Checkpoint 1',range:'49–55',slide:12},
    {id:'mali',label:'Mali + Mansa Musa',range:'55–66',slide:13},
    {id:'room',label:'BeInTheRoom: Mali',range:'66–75',slide:17},
    {id:'retell',label:'Retell + Sharpen',range:'75–81',slide:18},
    {id:'check2',label:'Checkpoint 2',range:'81–89',slide:20},
    {id:'close',label:'Close + Bridge',range:'89–90',slide:21}
  ],
  quickLaunch: [
    {label:'Student Lesson 2.4',url:'../unit-2/lesson-2-4-trans-saharan.html'},
    {label:'Student Presentation 2.4',url:'../unit-2/presentation-topic-2-4-student.html'},
    {label:'First & 10',url:'../unit-2/first-and-10-topic-2-4-trans-saharan-capture.html?v=desert-v1'},
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
      notes:{minutes:2,land:['The learning objective asks for causes and effects of the growth of exchange networks after 1200. Causes here: the camel saddle and caravan organization (transportation technology), with gold and salt as the demand that made the risk pay. Effects: greater volume and geographic range of trade, and Mali facilitating, taxing and profiting from it.','The trap is a barter story. Gold for salt is the motive, not the mechanism. The second trap is a Mansa Musa biography: his hajj is evidence of Mali\'s wealth and connections, not the topic.','Retelling slide: the split near the end. The Sahara on one side stayed the same; the system on the other side got better, in four lines (tools, motive, result, state). If students can rebuild it from memory, they can answer both checkpoints.','Every picture is a real source or a BeHistorical map; none is AI-generated. The Catalan Atlas is a 1375 Mediterranean depiction of Mali\'s ruler, not a portrait; the Great Mosque of Djenné is a 1907 building on an older site. Say so when you show them.','The salt prices on the primary source slide are Ibn Battuta\'s own figures (Gibb translation, the same passage as Module 08). Quote the figures as he gives them.'],story:'Merchants had crossed the Sahara before, but the camel saddle and organized caravans made regular, heavier crossings practical. Gold from West Africa and salt from the desert gave merchants a reason to take the risk again and again. As trade grew in volume and reach, Mali grew by sitting across the routes, protecting and taxing them, and its wealth became famous across the Islamic world.',ask:'Before class: can you say the whole topic from the retelling slide in under thirty seconds?',listenFor:'Because saddles and caravans made crossings practical, and gold and salt made them profitable, trade grew in volume and range; as a result, Mali grew by facilitating and taxing it.',ap:'Causation: enabling cause, motivating cause, effect, state link.'}
    },
    {
      id:'beready',phase:'beready',kind:'beready-recall',eyebrow:'BeReady · Recall',title:'Pull the ocean story back from memory.',
      template:{questions:[{label:'Monsoon',text:'What made Indian Ocean voyages predictable?'},{label:'Ports',text:'Why did waiting for the wind make port cities grow?'},{label:'States',text:'Name one state that grew rich from Indian Ocean trade.'}],turn:'The ocean ran on a schedule. The Sahara has no monsoon. **What would merchants need to cross a desert again and again?**'},
      notes:{minutes:4,land:['No notes. Take fast verbal answers and do not reteach Topic 2.3.','Accept brief evidence: the monsoon reversal; merchants waiting months for the wind; the Swahili Coast, Gujarat, or Malacca.','Read the turn aloud and take two or three guesses. Do not confirm any yet; the lesson answers it.'],story:'BeReady carries the network model across from the sea to the desert. The Indian Ocean had a natural schedule to exploit; the Sahara offers nothing like it, so the solutions have to come from animals, equipment and organization.',ask:'If there is no wind to ride, what replaces it?',listenFor:'Animals that can survive the desert, better gear, groups that travel together, water stops, a reason to go.',ap:'Retrieval + comparison: same Unit 2 question, different environmental problem.'}
    },
    {
      id:'hook',phase:'open',kind:'hero',eyebrow:'Topic 2.4 · The Question',title:'How did trade across the Sahara grow?',subtitle:'The desert never got any smaller. Hold that question: by the end of class you can answer it in one sentence.',position:'lower-left',
      notes:{minutes:2,land:['This is the topic question. Leave it up long enough for students to write it down.','Do not start with gold and salt. Start with the transportation problem: how do you move people and cargo across the Sahara again and again?','The picture is the Catalan Atlas, drawn in Majorca in 1375. Tell students we come back to it as evidence later in class.'],story:'The core story is a chain of solutions. Camel technology and caravan organization reduce the transportation problem. Valuable demand makes the trip worth taking. Mali then gains power by sitting inside that exchange and helping organize it.',ask:'What has to be solved before a desert can become a trade route?',listenFor:'Water, carrying capacity, navigation, security, distance, profit.',ap:'Causation: identify the enabling conditions before explaining expansion.'}
    },
    {
      id:'basin',phase:'map',kind:'map',eyebrow:'Module 01 · Map & Geography',title:'The Sahara is the problem in the middle.',subtitle:'West African gold zones · Saharan salt · North African markets',footer:'Trade links regions because they need different things.',
      notes:{minutes:4,land:['Locate West Africa, the Sahara, North Africa, and the Mediterranean-facing cities beyond the desert. Then Timbuktu and Niani.','Make the environmental scale visible before naming Mali: about two months of travel from Sijilmasa to the Sahel.','Point at the key: gold, ivory and enslaved people moved north; salt, cloth, books and Islam moved south. Say the enslaved people plainly. They were part of this trade.'],story:'This network connects complementary zones. West Africa has major gold production. Saharan deposits supply salt. North African and wider Islamic markets create additional demand and connections.',ask:'Why does geography create both the obstacle and the opportunity?',listenFor:'Distance and desert make movement hard, but different regions have valuable resources the others want.',ap:'Economic systems: regional specialization creates incentives for interregional exchange.'}
    },
    {
      id:'first10',phase:'first10',kind:'action',eyebrow:'Module 02 · First & 10 · 10 Minutes',title:'Read for the causal chain.',subtitle:'Desert → tools → motive → more trade → Mali',big:'10',
      notes:{minutes:10,land:['The detailed narrative belongs in First & 10. The projector gives the reading lens only.','Circulate for camel saddle, caravan organization, gold and salt demand, and Mali\'s role.'],story:'Students should emerge with sequence, not disconnected vocabulary.',ask:'What happens first in the story, and what becomes possible because of it?',listenFor:'Transportation improvements make regular exchange more feasible; expanded exchange creates wealth and state opportunities.',ap:'Causation: cause → mechanism → effect.'}
    },
    {
      id:'tools',phase:'tech',kind:'equation-stack',eyebrow:'The Tools · Makes It Possible',title:'They made the crossing repeatable.',footer:'The desert stayed the same size. The **saddle** and the **caravan** are the CED\'s examples.',
      template:{terms:[{word:'Camel',note:'Goes long stretches between wells'},{word:'Saddle',note:'Carries heavier loads, and the rider stays in control'},{word:'Caravan',note:'Hundreds of animals, guides and shared guards'},{word:'Oases',note:'Water at known stops along the way'}],result:{word:'A trade route',note:'The same crossing, made again and again'}},
      notes:{minutes:4,land:['Avoid “camels can survive the desert” as the full explanation. The College Board target is transportation innovation: the camel is the animal, the saddle is the technology.','The saddle is what turns the animal into cargo transport: heavier loads carried farther, with a rider who can control the animal and the pack.','Technology reduces the environmental constraint; it does not erase it. That is the spine.'],story:'Environmental adaptation belongs to the camel; commercial usefulness depends on the human systems built around it: equipment, organization and knowledge of where the water is.',ask:'Why is “camel saddle” stronger evidence than simply saying “camels”?',listenFor:'It names the human innovation that made the animal more useful for trade.',ap:'KC-3.1.II.A.ii: innovations in existing transportation technologies encourage trade growth.'}
    },
    {
      id:'caravan',phase:'tech',kind:'split-contrast',eyebrow:'Caravan Organization',title:'One merchant crosses a desert. A caravan builds a system.',footer:'Organization turns individual risk into network capacity.',
      template:{left:{tag:'Alone',title:'One merchant crosses a desert.',text:['Carries every risk personally.','One loss of water or cargo ends the trip.']},
        right:{tag:'Together',title:'A caravan builds a system.',items:[{label:'Pool',text:'animals, cargo, labor'},{label:'Guide',text:'route and water knowledge'},{label:'Protect',text:'shared security and risk'},{label:'Stage',text:'known stopping points'}]}},
      notes:{minutes:3,land:['Caravans are not just “many camels.” They are a risk-management institution.','Experienced guides who knew the wells mattered as much as the animals. A caravan that lost its way lost its water.'],story:'The caravan lets merchants spread risk, share route knowledge, and move more cargo than isolated travel would allow.',ask:'Which caravan feature most directly reduces uncertainty?',listenFor:'Guides, shared supplies, security, known stopping points.',ap:'Causation: an institution can work as transportation technology.'}
    },
    {
      id:'gold-salt',phase:'demand',kind:'exchange',eyebrow:'The Motive · Worth It',title:'Gold and salt make the risk worth it.',footer:'Goods matter because demand makes transport profitable.',
      template:{lede:'Each region has what another lacks. **Price differences reward movement**, so merchants cross the desert on purpose.',
        places:[{tag:'North',name:'North Africa',text:'Buyers for gold; cloth, horses and books go south'},{tag:'Between',name:'The Sahara',text:'Salt mines such as Taghaza'},{tag:'South',name:'West Africa',text:'Major gold fields'}],
        flows:[{label:'Gold',dir:'up'},{label:'Salt',dir:'down'}]},
      notes:{minutes:4,land:['Do not teach a simplistic barter story. Gold and salt are anchors for a broader commercial network.','The key move is complementary demand across regions: West Africa had gold and needed salt; North Africa and the Mediterranean wanted gold.'],story:'Transportation capacity creates possibility; price and demand create motive. Merchants accept severe risk because distance increases value.',ask:'Why would merchants cross a dangerous desert for goods that already exist somewhere else?',listenFor:'Regional scarcity, price differences, profit, wider market demand.',ap:'Economic systems: demand and regional specialization help explain trade expansion.'}
    },
    {
      id:'taghaza',phase:'demand',kind:'source-quote',eyebrow:'Primary Source · Close Read',title:'Ibn Battuta at Taghaza, 1352',footer:'A mithqal is a weight of gold. Distance is what the merchant is paid for.',
      template:{quote:'A camel will carry two of these slabs. … At Iwalatan a load of salt brings eight to ten mithqals; in the town of Malli it sells for twenty to thirty, and sometimes as much as forty.',attribution:{author:'Ibn Battuta',work:'Travels in Asia and Africa, trans. H. A. R. Gibb',year:'1352'},notice:'The same load of salt, carried farther south. **What happens to its price, and why?**'},
      notes:{minutes:4,land:['Ibn Battuta crossed the Sahara with a caravan in 1352. Taghaza was the salt mine in the desert, Iwalatan is Walata at the southern edge, and Malli is the capital of Mali.','Observation first: the same load sells for at least twice as much in the capital as at Walata. Then the inference: every stage of the journey adds value, which is why merchants keep making it.','Say what the ellipsis hides. In the full passage the salt is dug by enslaved workers who live on imported dates and camel meat. Module 08 has the whole text.'],story:'This one passage connects the lesson\'s two causes: the camel carries the salt, and the price difference is the reason to carry it.',ask:'What in this source is evidence of transport, and what is evidence of demand?',listenFor:'“A camel will carry two slabs” is transport; the rising price is demand.',ap:'Sourcing: a traveler\'s account is an eyewitness to prices, but some figures may be what merchants told him.'}
    },
    {
      id:'take-one-away',phase:'skill',kind:'equation-remove',eyebrow:'Why It Took Both · Take One Away',title:'Take one away and the route fails.',footer:'Tools made the crossing possible. Demand made it worth it. The Sahara did not shrink, so you need both.',
      template:{terms:[{word:'Saddle',without:'Without it: no animal carries a load that far.'},{word:'Caravan',without:'Without it: every merchant faces the desert alone.'},{word:'Oases',without:'Without them: no water, so no crossing.'},{word:'Demand',without:'Without it: nobody pays for the danger.'}]},
      notes:{minutes:3,land:['This slide is the Skill Builder\'s reasoning move: neither technology nor demand was sufficient by itself.','Ask for the counterfactual out loud before revealing each line: take away the demand and the camels are still there, but nobody pays for the trip.'],story:'Causation is stronger when students can say what would fail without each cause. That is the difference between a list and an explanation.',ask:'Which one would people have found a way around, and which one could they not?',listenFor:'Tools could be improved or replaced over time; without demand, no one had a reason to cross at all.',ap:'Causation: necessary conditions, not a list of factors.'}
    },
    {
      id:'skill',phase:'skill',kind:'action',eyebrow:'Module 05 · Skill Builder',title:'Explain why it took both.',subtitle:'What barrier did the tools overcome? What made the trip worth it? Trace both to one change in West Africa.',big:'05',
      notes:{minutes:8,land:['The prompt asks why both transportation technology and complementary demand were necessary. Two specific pieces of evidence, the barrier each overcame, and one political or cultural transformation in West Africa.','Circulate for students who explain only one cause. Point them back to the take-one-away slide.'],story:'Students have both causes now. The Skill Builder asks them to connect the two and carry the chain forward to a consequence.',ask:'What did the tools overcome, and what did the demand overcome?',listenFor:'Saddles and caravans overcame distance and the lack of water; gold and salt made the danger pay; together they built revenue for West African states.',ap:'Developments and Processes (Skill 1.B) and Causation.'}
    },
    {
      id:'volume-range',phase:'demand',kind:'compounding',eyebrow:'Expansion · Compounding',title:'Better crossings mean more trade, reaching farther.',footer:'The AP claim: more **volume** and a wider **range**, not just gold for salt.',
      template:{steps:[{label:'Capacity',text:'Heavier cargoes move on each crossing.'},{label:'Regularity',text:'Caravans repeat the route season after season.'},{label:'Volume',text:'More goods cross, year after year.'},{label:'Range',text:'The links reach Cairo, the Mediterranean and Mecca.'}]},
      notes:{minutes:3,land:['This is the core CED mechanism. Make students say “volume and geographic range.”','Each gain makes the next possible: capacity makes regular trips worthwhile, regular trips add up to volume, and volume pulls in farther markets.'],story:'Once a route becomes more reliable and profitable, trade intensifies: more goods move and connections stretch farther.',ask:'What would count as evidence that a trade network intensified?',listenFor:'More goods, more merchants, more cities, longer routes, more frequent exchange.',ap:'KC-3.1.I.A.iv: improved transportation increases volume and geographic range of trade.'}
    },
    {
      id:'check1',phase:'check1',kind:'action',eyebrow:'Module 06 · Checkpoint 1',title:'Explain the mechanism.',subtitle:'How did camel technology and caravans increase the volume and range of trade? Use gold or salt as evidence. On your own: no coach.',big:'06',
      notes:{minutes:6,land:['Independent. Checkpoint 1 is the diagnostic, so no Socrates.','Require camel saddle or caravan evidence AND a demand explanation. Reject lists. Students must connect evidence to increased volume or range.','Give feedback in the room: on an alternating block nothing carries over.'],story:'This checkpoint locks the causal spine before Mali enters the story.',ask:'What changed because merchants could move cargo more reliably and profitably?',listenFor:'More regular crossings, larger cargoes, wider market links, increased trade volume.',ap:'Evidence + reasoning: technology and demand → mechanism → expansion.'}
    },
    {
      id:'mali-deal',phase:'mali',kind:'exchange-flow',eyebrow:'State Power · Exchange',title:'Mali grew by making trade safe to tax.',footer:'Trade built the state. The state kept the trade moving.',
      template:{places:[{name:'Merchants',note:'Caravans and traders'},{name:'Mali',note:'Rulers of the gold lands and the routes'}],flows:[{label:'Taxes and gold',dir:'right'},{label:'Safe roads and markets',dir:'left'}]},
      notes:{minutes:4,land:['Shift from merchants to governance: who benefits when routes cross imperial territory?','Mali did not invent trans-Saharan trade. Its expansion pulled more people and territory into the network and created conditions rulers could tax and protect.','Keep “facilitate” separate from “control.” Mali did not run the caravans; it made moving through its lands safe and worth taxing again and again.'],story:'Empire and commerce reinforce each other. Trade produces taxable wealth; political control makes routes and cities safer and more connected, so more trade comes back to be taxed.',ask:'Why would a ruler want merchants to succeed instead of simply taking their goods?',listenFor:'Taxes every season, city growth, legitimacy, wider connections.',ap:'KC-3.1.I.E.ii: imperial expansion facilitates trade and communication.'}
    },
    {
      id:'mali-timeline',phase:'mali',kind:'timeline',eyebrow:'Mali Rises · Timeline',title:'Trans-Saharan gold puts Mali on the map.',footer:'Spacing is true to scale: the events crowd together as Mali becomes famous.',
      template:{range:[1235,1375],tick:25,events:[{year:1235,label:'c. 1235',text:'Sundiata founds the Mali Empire.'},{year:1324,label:'1324',text:'Mansa Musa travels through Cairo on his pilgrimage to Mecca.'},{year:1352,label:'1352',text:'Ibn Battuta crosses the Sahara to visit Mali.'},{year:1375,label:'1375',text:'The Catalan Atlas draws Mansa Musa holding gold.'}]},
      notes:{minutes:2,land:['Keep this fast. The dates are the frame for the next slide, not a list to memorize.','The point is communication: within fifty years of the hajj, Mali is known in Cairo, across Dar al-Islam, and on a map made in Majorca.'],story:'Mali\'s fame travels along the same routes as its gold.',ask:'Why do the last three events crowd together?',listenFor:'The hajj made Mali visible; travelers and mapmakers followed the news.',ap:'Contextualization: a state\'s reputation as evidence of network reach.'}
    },
    {
      id:'mansa-musa',phase:'mali',kind:'frame-placard',eyebrow:'Mansa Musa · 1324',title:'One pilgrimage advertises a whole network.',
      template:{placard:{tag:'Evidence · 1375',name:'The Catalan Atlas',text:'Drawn in Majorca, fifty years after Mansa Musa\'s pilgrimage through Cairo. Its label calls him the richest king in the region because of the gold in his land.'}},
      notes:{minutes:3,land:['Mansa Musa is evidence, not the whole topic. His hajj demonstrates wealth, mobility, Islam, and Mali\'s place in a wider interregional system.','The Catalan Atlas is a Mediterranean representation of Mali\'s ruler and wealth; treat it as evidence of reputation and geographic knowledge, not a portrait from life.','Al-Umari, writing in Cairo about a dozen years after the visit, reported that Musa\'s spending there lowered the value of gold. Use that as the BeSurreal fact, not as the lesson.'],story:'The hajj connects West African imperial wealth to North Africa, the Middle East, and the wider Islamic world. It makes the network visible to distant observers.',ask:'What can this map prove about Mali that a pile of gold cannot?',listenFor:'Mobility, Islamic connection, diplomatic visibility, long-distance communication.',ap:'Use a specific event and a specific source as evidence for wider interregional connections.'}
    },
    {
      id:'trade-cities',phase:'mali',kind:'hero',eyebrow:'Cities + Connections',title:'Trade wealth supports connected cities.',subtitle:'Markets · scholarship · Islam · administration',position:'upper-left',
      notes:{minutes:2,land:['Use Djenné, a major trading city of the Mali era, as evidence of urban and Islamic connections supported by wider trade, not as a claim that trade alone created every institution.','Say that the present mosque is a 1907 building on the site of earlier mosques, so it shows the city\'s lasting Islamic importance rather than its exact 14th-century form. Timbuktu is the other city to name.','Arabic literacy, scholarship, and Islam connect Mali to a broader religious and intellectual world.'],story:'Commercial routes carry more than commodities. They create durable contact zones where political, religious, and intellectual institutions can deepen.',ask:'How can a trade route change a city even when the goods keep moving through it?',listenFor:'Taxes, markets, visitors, scholars, religious institutions, services.',ap:'Effects of exchange: urban growth and cultural connection.'}
    },
    {
      id:'beintheroom',phase:'room',kind:'action',eyebrow:'Module 09 · BeInTheRoom · Mali Court',title:'You are inside a state built around exchange.',subtitle:'Choose a role. Make a decision. Defend it with evidence.',big:'09',
      notes:{minutes:9,land:['Launch the Mali court quickly. Keep decisions tied to routes, revenue, political power, and Islamic connections.','Push students to identify whose interests are served by each policy choice.','BeInTheRoom is not on today\'s Canvas list. Hold the time box so Checkpoint 2 still starts on time.'],story:'The simulation makes the state-trade relationship concrete: rulers, merchants, scholars, and officials do not want exactly the same thing from the network.',ask:'Which policy best strengthens Mali without strangling the trade that funds it?',listenFor:'Balanced taxation, route security, support for cities and markets, legitimacy, merchant incentives.',ap:'Historical reasoning: connect evidence to state choices and economic consequences.'}
    },
    {
      id:'retelling',retelling:true,phase:'synthesis',kind:'split-contrast',eyebrow:'The Whole Topic',title:'The Sahara did not shrink. The system for crossing it did.',footer:'Retell the whole topic from this slide.',
      template:{left:{tag:'Stayed the same',title:'The Sahara did not shrink.',text:['Still about two months across.','Still days without water between wells.']},
        right:{tag:'Got better',title:'The system for crossing it did.',count:4,items:[{label:'Tools',text:'Saddles and caravans make the crossing **possible**'},{label:'Motive',text:'Gold and salt make it **worth it**'},{label:'Result',text:'More trade, reaching farther'},{label:'State',text:'Mali protects it, taxes it, and grows rich'}]}},
      notes:{minutes:4,land:['This is the retelling slide. Blank the screen after a minute and have students redraw it from memory: one line on the left, four on the right.','Check the order on the right. Tools and motive come first; more trade is the result of both; Mali is what grows from the result.'],story:'The whole topic in one frame: the environment is constant, and everything that changes is human.',ask:'Say the four lines on the right as one sentence with “because” and “as a result.”',listenFor:'Because saddles and caravans made crossings possible and gold and salt made them worth it, trade grew in volume and range; as a result, Mali grew by protecting and taxing it.',ap:'Causation: enabling cause, motivating cause, effect, state link.'}
    },
    {
      id:'sharpen',phase:'synthesis',kind:'sharpen',eyebrow:'Sharpen the Claim',footer:'A claim is AP-sized when it names a cause, a change, and why it mattered.',
      template:{weak:'Gold traded for salt.',strong:'Saddles, caravans and **complementary demand** turned a dangerous crossing into a **regular network**, and Mali grew rich by **protecting and taxing** it.'},
      notes:{minutes:2,land:['The weak claim is true and scores nothing. It names no cause, no change and no consequence.','Point at the three bold phrases: cause, change, state effect. That is the shape Checkpoint 2 needs.'],story:'The last move before the checkpoint is turning the retelling into one written claim.',ask:'What does the strong claim add that the weak one is missing?',listenFor:'A cause, a mechanism or change, and a consequence.',ap:'Argumentation: a defensible claim with a line of reasoning.'}
    },
    {
      id:'check2',phase:'check2',kind:'action',eyebrow:'Module 10 · Checkpoint 2',title:'Mali gained from the trade, and kept it moving.',subtitle:'Explain both, with two pieces of evidence. Draft, work with Socrates, revise. If it is not finished in class, it is homework.',big:'10',
      notes:{minutes:8,land:['The prompt: explain how Mali both benefited from and facilitated trans-Saharan trade and communication, with at least two specific pieces of evidence.','Require both halves: what Mali gained (revenue, wealth, fame) and what Mali gave the network (protection, markets, connected cities).','The revised answer in the box is what goes to Canvas. Students who run out of time finish at home.'],story:'The final response should reproduce the back half of the retelling slide with evidence attached.',ask:'Can you explain Mali\'s role without saying only “Mansa Musa was rich”?',listenFor:'Mali taxed and protected the routes; Timbuktu and Djenné grew as trade and scholarly cities; the hajj and the Catalan Atlas show Mali known across the Islamic and Mediterranean worlds.',ap:'Causation and evidence: a state as both beneficiary and facilitator.'}
    },
    {
      id:'landing',phase:'close',kind:'hero',eyebrow:'Topic 2.4 · The Big Idea',title:'The Sahara did not shrink.',subtitle:'The system for crossing it got better, and a trade route became an empire\'s foundation.',position:'lower-left',
      notes:{minutes:1,land:['Land the single idea: the environment remains difficult; human systems change what is possible inside it.','Bridge forward to Topic 2.5: once networks intensify, ideas, technologies, religions and people move with the goods. Islam crossed the Sahara on these caravans.'],story:'Trade expands when societies solve enough of the transportation problem for demand and political organization to do the rest.',ask:'What is the one sentence you need to remember tomorrow?',listenFor:'Tools and demand → more trade → Mali grows by protecting and taxing it.',ap:'Bridge to cultural consequences of connectivity.'}
    }
  ]
};
