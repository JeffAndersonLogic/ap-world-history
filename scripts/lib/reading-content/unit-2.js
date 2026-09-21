'use strict';

/**
 * Authored First & 10 content for Unit 2.
 *
 * This file is the source of truth for the generated Unit 2 First & 10 pages.
 * Keep each reading focused on the CED-defined job of its topic. Supporting
 * enrichment is welcome; later-topic material may not replace the topic spine.
 * After editing, run `node scripts/build-unit-readings.js unit-2`.
 */

const COMMON = {
  unitDir: 'unit-2',
  moduleBadge: 'Module 02',
  moduleName: 'First &amp; 10 Reading',
  readingEyebrow: 'First &amp; 10 Reading',
  supportHeadings: { before: 'Before You Read', target: 'Reading Target' },
  showFooter: true,
  showFooterNote: false,
  checkBadge: 'Check Your Thinking',
  checkTitle: 'Three Questions, Supported Answers Only',
  submitNote: 'Organize your thinking here, submit your final work in Canvas.',
  footerNote: '',
  lessonFile: '../unit-2/index.html',
  padQuestionNumbers: true
};

function section(number, label, heading, paragraphs, calloutLabel, calloutHtml) {
  return {
    number,
    label,
    heading,
    blocks: paragraphs.map(html => ({ type: 'p', html })),
    callout: calloutHtml ? { label: calloutLabel, raw: `<p>${calloutHtml}</p>` } : null
  };
}

function topic(config) {
  return {
    ...COMMON,
    ...config,
    navPrev: { href: '../unit-2/index.html', label: '&#8592; Unit 2 Lesson Path' },
    navNext: { href: `../unit-2/${config.lessonPage}`, label: 'Content Delivery &#8594;' }
  };
}

module.exports = {
  '2.1': topic({
    topicKey: '2.1',
    topicLabel: '2.1 - Silk Roads',
    sourceFile: 'first-and-10-topic-2-1-silk-roads.html',
    lessonPage: 'lesson-2-1-silk-roads.html',
    docTitle: 'BeHistorical — Module 01 | First &amp; 10 | Topic 2.1 The Silk Roads',
    headerSubtitle: 'Topic 2.1, The Silk Roads &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Roads of <em>Silk</em> and Exchange',
    deck: 'After 1200, the Silk Roads expanded because growing demand made long-distance trade worth the risk and new commercial systems made that trade easier. The result was more exchange, stronger trading cities, and greater production for distant markets.',
    skillTags: ['Causation', 'Economic Systems', 'Argumentation'],
    supportCards: {
      beforeYouRead: 'Track one causal chain: demand created an incentive to trade; caravanserais, credit, banking, money economies, and periods of political stability lowered trade friction; expanding exchange then changed cities and production.',
      readingTarget: 'By the end, you should be able to explain why Silk Roads trade expanded after 1200 and connect that growth to Kashgar, Samarkand, and increased production of textiles, porcelain, iron, and steel.'
    },
    vocabulary: ['Silk Roads', 'Luxury Goods', 'Caravanserai', 'Credit', 'Bills of Exchange', 'Banking Houses', 'Paper Money', 'Money Economy', 'Kashgar', 'Samarkand', 'Pax Mongolica', 'Productive Capacity'],
    sections: [
      section('1', 'Cause', 'Demand Made Long-Distance Trade Worth It', [
        'The Silk Roads were older than the period c. 1200–1450. What changed was the <span class="kt">volume and range of exchange</span>. One major cause was growing Afro-Eurasian demand for <span class="kt">luxury goods</span>. Silk, porcelain, fine textiles, and other high-value products could justify the expense of moving goods across enormous distances.',
        'Demand also affected producers. Chinese, Persian, and Indian artisans and merchants expanded production for export. Chinese production of porcelain, iron, and steel grew alongside a wider market for manufactured goods. Trade growth was therefore not just about merchants moving existing goods; distant demand could reshape production itself.'
      ], 'AP Thinking, Causation', '<strong>Name the incentive before the infrastructure.</strong> Rising demand explains why merchants accepted the costs of long-distance exchange; commercial innovations explain how those costs became easier to manage.'),
      section('2', 'Cause', 'Commercial Systems Lowered Cost and Risk', [
        '<span class="kt">Caravanserais</span> provided merchants with places to rest, resupply, exchange information, and conduct business. They reduced some of the practical risks of moving people and goods across long overland routes.',
        'Commercial innovations reduced financial risk as well. <span class="kt">Credit</span>, <span class="kt">bills of exchange</span>, <span class="kt">banking houses</span>, and <span class="kt">paper money</span> allowed merchants to conduct business without carrying every payment in heavy metal coin. These tools made larger and longer transactions more practical.'
      ], 'AP Thinking, Mechanism', '<strong>Do not stop at naming a caravanserai or bill of exchange.</strong> Explain its function, how that function lowered cost or risk, and why lower friction could increase trade.'),
      section('3', 'Supporting Condition', 'Political Stability Could Make the Network Safer', [
        'Trade crossed many political boundaries, so security mattered. Periods of relative stability could make merchants more willing to travel. In the 13th and 14th centuries, the <span class="kt">Pax Mongolica</span> created a particularly important period of political protection across much of the Eurasian land network.',
        'Political stability is a supporting cause in Topic 2.1, not the whole story. The Mongols receive their own treatment in Topic 2.2. Here, the key mechanism is simple: when rulers reduced banditry and conflict along major corridors, merchant risk fell and exchange could intensify.'
      ], 'AP Thinking, Causation', '<strong>Use political stability as part of the causal chain:</strong> safer routes reduced risk, which helped merchants use the commercial and transportation systems already supporting exchange.'),
      section('4', 'Effects', 'Trade Growth Strengthened Cities and Production', [
        'As exchange intensified, major trading cities such as <span class="kt">Kashgar</span> and <span class="kt">Samarkand</span> became powerful nodes. Their importance came from location: merchants needed places to connect routes, exchange goods, obtain supplies, and access commercial services.',
        'The larger effect was a feedback loop. Greater demand encouraged more production; better trade systems helped move that production; more exchange strengthened trading cities; those cities then made the network easier to use. The Silk Roads after 1200 were therefore a system of <strong>demand, commercial innovation, urban growth, and productive response</strong>.'
      ], 'AP Thinking, Synthesis', '<strong>Complete the chain:</strong> demand increased → cost/risk fell → trade volume and range increased → trading cities grew → producers expanded output for distant markets.')
    ],
    takeaway: 'Rising luxury demand gave merchants a reason to trade; caravanserais, credit, banking, money economies, and supporting political stability lowered the difficulty of exchange; increased trade strengthened Kashgar and Samarkand and encouraged greater production of textiles, porcelain, iron, and steel.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain two causes of Silk Roads growth after 1200. At least one cause must involve a transportation or commercial system.', placeholder: 'Silk Roads trade expanded because...' },
      { num: '02', skill: 'Mechanism', text: 'Choose one: caravanserai, bills of exchange, banking houses, or paper money. Explain its function and how it could increase long-distance trade.', placeholder: 'The function of ___ was... This increased trade because...' },
      { num: '03', skill: 'Effects', text: 'Explain two effects of expanded Silk Roads trade using evidence from trading cities and/or production.', placeholder: 'Expanded Silk Roads trade affected cities and production by...' }
    ]
  }),

  '2.2': topic({
    topicKey: '2.2',
    topicLabel: '2.2 - The Mongol Empire',
    sourceFile: 'first-and-10-topic-2-2-mongol-empire.html',
    lessonPage: 'lesson-2-2-mongol-empire.html',
    docTitle: 'BeHistorical — Module 02 | First &amp; 10 | Topic 2.2 The Mongol Empire',
    headerSubtitle: 'Topic 2.2, The Mongol Empire &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Build, Connect, <em>Transfer</em>, Fragment',
    deck: 'The Mongol story is not only conquest. Mongol expansion created new states, linked distant regions more directly, encouraged trade and communication, moved knowledge across Eurasia, and then fragmented into regional khanates.',
    skillTags: ['Continuity & Change', 'Causation', 'State Building'],
    supportCards: {
      beforeYouRead: 'Track four moves: how Mongol rulers built an empire, why it divided, how imperial expansion facilitated exchange, and what specific knowledge or cultural practices moved through those connections.',
      readingTarget: 'By the end, you should be able to explain Mongol state building and fragmentation, the Pax Mongolica as a trade-and-communication system, and three concrete examples of cultural or technological transfer.'
    },
    vocabulary: ['Chinggis Khan', 'Khanates', 'Yuan Dynasty', 'Ilkhanate', 'Golden Horde', 'Pax Mongolica', 'Yam', 'Greco-Islamic Medical Knowledge', 'Numbering Systems', 'Uyghur Script'],
    sections: [
      section('1', 'State Building', 'From Steppe Confederation to Eurasian Empire', [
        'Temujin, later known as <span class="kt">Chinggis Khan</span>, unified Mongol groups and built a disciplined military-political system capable of rapid expansion. Mongol armies combined cavalry mobility, organization, intelligence, and the use of specialists from conquered peoples.',
        'Conquest produced new imperial states across Eurasia. Mongol rulers often governed pragmatically, using local administrators and existing institutions when those tools helped them control large and diverse populations.'
      ], 'AP Thinking, State Building', '<strong>State building is a process.</strong> Connect military organization and pragmatic administration to the creation of durable political control.'),
      section('2', 'Change Over Time', 'One Empire Became Several Khanates', [
        'The empire did not remain politically unified. Over time it divided into major <span class="kt">khanates</span>, including the Yuan Dynasty in China, the Ilkhanate in Persia, the Golden Horde in Russia and Eastern Europe, and the Chagatai Khanate in Central Asia.',
        'Fragmentation reflected the difficulty of governing vast distances, succession disputes, and increasing regional differences. Mongol political unity declined even while many of the connections created during expansion continued.'
      ], 'AP Thinking, Continuity & Change', '<strong>Separate political decline from network collapse.</strong> The unified empire fragmented, but routes, contacts, and exchanges did not instantly disappear.'),
      section('3', 'Exchange', 'Empire Facilitated Trade and Communication', [
        'The <span class="kt">Pax Mongolica</span> describes the relative stability that followed conquest across much of Mongol-controlled Eurasia. Merchants, diplomats, missionaries, and specialists could move through territories under related Mongol regimes with greater protection than in many earlier periods.',
        'The <span class="kt">Yam</span> relay system supported rapid communication across long distances. Imperial expansion therefore mattered economically as well as politically: new populations were drawn into wider trade and communication networks.'
      ], 'AP Thinking, Causation', '<strong>Explain the mechanism:</strong> imperial control and relay systems lowered some barriers to movement, which facilitated trade and communication.'),
      section('4', 'Transfer', 'Connectivity Moved Knowledge as Well as Goods', [
        'The CED highlights specific transfers associated with intensified Mongol-era contacts. <span class="kt">Greco-Islamic medical knowledge</span> moved toward western Europe, and <span class="kt">numbering systems</span> also spread into Europe through wider Afro-Eurasian contacts.',
        'Mongol rulers themselves borrowed from conquered peoples. They adopted the <span class="kt">Uyghur script</span> for writing Mongolian, a clear example of conquerors incorporating a useful cultural technology. These transfers show why Mongol significance extends beyond battlefield conquest.'
      ], 'AP Thinking, Significance', '<strong>Use the specific transfer to prove the larger pattern.</strong> The empire mattered because intensified contact allowed knowledge and practices to move across regions and political boundaries.')
    ],
    takeaway: 'The Mongols built new imperial states, later fragmented into khanates, facilitated Eurasian trade and communication through imperial connections, and encouraged cultural and technological transfers including Greco-Islamic medicine, numbering systems, and the adoption of the Uyghur script.',
    questions: [
      { num: '01', skill: 'Continuity & Change', text: 'Explain one method the Mongols used to build their empire and one reason the empire later fragmented.', placeholder: 'The Mongols built power by... The empire later fragmented because...' },
      { num: '02', skill: 'Causation', text: 'Explain how Mongol imperial expansion affected trade and communication across Eurasia.', placeholder: 'Mongol expansion facilitated exchange by...' },
      { num: '03', skill: 'Significance', text: 'Use one specific transfer—Greco-Islamic medical knowledge, numbering systems, or the Uyghur script—to explain the larger significance of Mongol-era connectivity.', placeholder: 'The transfer of ___ demonstrates...' }
    ]
  }),

  '2.3': topic({
    topicKey: '2.3',
    topicLabel: '2.3 - Indian Ocean Trade',
    sourceFile: 'first-and-10-topic-2-3-indian-ocean.html',
    lessonPage: 'lesson-2-3-indian-ocean.html',
    docTitle: 'BeHistorical — Module 03 | First &amp; 10 | Topic 2.3 Indian Ocean Trade',
    headerSubtitle: 'Topic 2.3, Indian Ocean Trade &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'How an Ocean Became a <em>Trade System</em>',
    deck: 'Indian Ocean exchange intensified because sailors combined environmental knowledge with better maritime technology. Expanding trade strengthened states and port cities, supported diasporic merchant communities, and created opportunities for state-backed voyages such as those led by Zheng He.',
    skillTags: ['Causation', 'Environment', 'Cultural Interaction'],
    supportCards: {
      beforeYouRead: 'Track a system: monsoon knowledge made movement predictable; the compass, astrolabe, and larger ships increased capability; expanding exchange then changed states and merchant communities.',
      readingTarget: 'By the end, you should be able to explain the environmental and technological causes of Indian Ocean trade growth and its effects on states, diasporic communities, and interregional contact.'
    },
    vocabulary: ['Monsoon Winds', 'Compass', 'Astrolabe', 'Larger Ship Designs', 'Swahili Coast', 'Gujarat', 'Sultanate of Malacca', 'Diasporic Communities', 'Zheng He', 'Ming Dynasty'],
    sections: [
      section('1', 'Environment', 'Monsoon Knowledge Made Voyages Predictable', [
        'Indian Ocean sailors learned the seasonal pattern of <span class="kt">monsoon winds</span>. Because the winds reversed direction at predictable times of year, merchants could plan outward and return voyages instead of treating the ocean as an unpredictable barrier.',
        'Environmental knowledge was therefore an economic resource. Knowing when to sail, where to wait, and when winds would reverse reduced uncertainty and helped support regular long-distance exchange.'
      ], 'AP Thinking, Environment', '<strong>The monsoon did not cause trade by itself.</strong> The environmental pattern existed; human knowledge of that pattern made it useful.'),
      section('2', 'Technology', 'Navigation and Larger Ships Expanded What Was Possible', [
        'Maritime traders used and improved existing technologies, including the <span class="kt">compass</span> and <span class="kt">astrolabe</span>. These tools helped sailors determine direction and position during long voyages.',
        '<span class="kt">Larger ship designs</span> increased carrying capacity. Combined with navigational knowledge, bigger vessels made it possible to move greater quantities of goods across longer maritime distances.'
      ], 'AP Thinking, Causation', '<strong>Connect technology to outcome:</strong> better navigation and greater capacity increased the volume and geographic range of trade.'),
      section('3', 'Effects', 'Trade Strengthened States and Merchant Communities', [
        'Indian Ocean commerce fostered the growth of states and commercial centers. The CED highlights the <span class="kt">Swahili Coast</span>, <span class="kt">Gujarat</span>, and the <span class="kt">Sultanate of Malacca</span> as examples of places whose power was tied to maritime exchange.',
        'Merchants also created <span class="kt">diasporic communities</span>. Arab and Persian communities in East Africa, Chinese merchant communities in Southeast Asia, and Malay communities around the basin maintained ties to their home cultures while adapting to local societies.'
      ], 'AP Thinking, Cultural Interaction', '<strong>Diaspora is two-way interaction.</strong> Merchants introduced traditions into local cultures, and local cultures also influenced merchant communities.'),
      section('4', 'State-Backed Contact', 'Zheng He and Ming Maritime Activity', [
        'In the early 15th century, Ming China sponsored major voyages led by Admiral <span class="kt">Zheng He</span>. His fleets traveled through Southeast Asia and the Indian Ocean, visiting ports in South Asia, the Middle East, and East Africa.',
        'The voyages demonstrate that Indian Ocean connectivity included more than private merchants. States could also use maritime networks for diplomacy, prestige, tribute relationships, and cultural exchange. Zheng He therefore fits the larger CED pattern of interregional contact encouraging cultural and technological transfer.'
      ], 'AP Thinking, Significance', '<strong>Zheng He is not a side story.</strong> His voyages show how an established commercial network could also support large-scale state-sponsored contact.')
    ],
    takeaway: 'Monsoon knowledge made Indian Ocean travel predictable; the compass, astrolabe, and larger ships increased capability; expanding trade strengthened the Swahili Coast, Gujarat, and Malacca, created diasporic communities, and supported state-backed maritime contact under Zheng He.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain how monsoon knowledge and two maritime technologies helped Indian Ocean trade intensify after 1200.', placeholder: 'Indian Ocean trade intensified because...' },
      { num: '02', skill: 'Effects', text: 'Explain one effect of Indian Ocean trade on a state and one effect on a diasporic merchant community.', placeholder: 'Trade affected the state of ___ by... and merchant communities by...' },
      { num: '03', skill: 'Significance', text: 'Explain how Zheng He illustrates the role of states in the connected Indian Ocean world.', placeholder: 'Zheng He illustrates state involvement because...' }
    ]
  }),

  '2.4': topic({
    topicKey: '2.4',
    topicLabel: '2.4 - Trans-Saharan Trade',
    sourceFile: 'first-and-10-topic-2-4-trans-saharan.html',
    lessonPage: 'lesson-2-4-trans-saharan.html',
    docTitle: 'BeHistorical — Module 04 | First &amp; 10 | Topic 2.4 Trans-Saharan Trade',
    headerSubtitle: 'Topic 2.4, Trans-Saharan Trade &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Gold, <em>Salt</em>, and the Desert Road',
    deck: 'Camel technology and organized caravans made larger-scale desert exchange practical. Strong demand for gold and salt made it profitable, and states such as Mali benefited from and helped sustain the expanding network.',
    skillTags: ['Causation', 'Technology', 'Governance'],
    supportCards: {
      beforeYouRead: 'Track the chain from transportation technology to increased trade volume and range, then to state power. Gold and salt explain the incentive; camel technology and caravans explain how the Sahara could be crossed at scale.',
      readingTarget: 'By the end, you should be able to explain how camel saddles and caravans expanded trans-Saharan trade and how Mali facilitated trade and communication.'
    },
    vocabulary: ['Camel Saddle', 'Caravan', 'Gold', 'Salt', 'Trade Volume', 'Geographic Range', 'Mali Empire', 'Mansa Musa', 'Timbuktu'],
    sections: [
      section('1', 'Technology', 'Camel Technology Made Desert Trade More Practical', [
        'The Sahara remained an extreme environment, but camels were well adapted to desert travel. Improvements in the <span class="kt">camel saddle</span> allowed merchants to transport heavier loads more efficiently across long distances.',
        'Merchants organized animals and people into <span class="kt">caravans</span> that pooled knowledge, protection, and supplies. Transportation technology did not erase the desert; it changed the economic possibilities of crossing it.'
      ], 'AP Thinking, Causation', '<strong>A camel is not an explanation.</strong> Explain how carrying capacity, endurance, and caravan organization reduced the practical barriers to exchange.'),
      section('2', 'Economic Incentive', 'Gold and Salt Made the Journey Worthwhile', [
        'West Africa possessed major gold resources, while Saharan regions supplied salt that was essential to human diets and valuable in West African markets. This complementary demand made long-distance exchange profitable.',
        'As transportation improved and demand remained strong, trans-Saharan trade increased in <span class="kt">volume</span> and expanded in <span class="kt">geographic range</span>, connecting West African societies more closely to North Africa and the wider Islamic world.'
      ], 'AP Thinking, Mechanism', '<strong>Technology made exchange possible; demand made it worthwhile.</strong> Strong causation explains how the two factors worked together.'),
      section('3', 'Governance', 'Mali Benefited from and Facilitated Trade', [
        'The <span class="kt">Mali Empire</span> rose in a region crossed by major trade routes. Rulers benefited by taxing commerce and controlling strategic territory, while political protection could make merchants more willing to use the routes.',
        'Mali therefore did not merely become rich because trade happened around it. Imperial expansion also helped facilitate trade and communication by drawing more people into a connected political and economic system.'
      ], 'AP Thinking, Governance', '<strong>Show the two-way relationship:</strong> trade strengthened Mali, and Mali in turn helped sustain trade.'),
      section('4', 'Evidence', 'Mansa Musa and Timbuktu Reveal the Scale of Connection', [
        '<span class="kt">Mansa Musa</span> used the wealth and connections of Mali during his pilgrimage to Mecca, making the empire visible across North Africa and the Islamic world.',
        '<span class="kt">Timbuktu</span> grew as a commercial and intellectual center linked to trans-Saharan exchange. These examples help students see the effects of a network whose foundation remained transportation technology, profitable commodities, and state support.'
      ], 'AP Thinking, Evidence', '<strong>Use Mansa Musa and Timbuktu as evidence of the network\'s effects, not as substitutes for explaining how the network worked.')
    ],
    takeaway: 'Camel saddles and caravans made large-scale Sahara crossings practical; gold and salt made them profitable; expanding exchange increased trade volume and range; and Mali both profited from and facilitated the resulting network.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain how camel technology and caravan organization increased the volume and range of trans-Saharan trade.', placeholder: 'Camel technology expanded trade because...' },
      { num: '02', skill: 'Causation', text: 'Explain why gold and salt created a strong economic incentive for trans-Saharan exchange.', placeholder: 'Gold and salt made exchange profitable because...' },
      { num: '03', skill: 'Governance', text: 'Explain how Mali both benefited from and facilitated trans-Saharan trade and communication.', placeholder: 'Mali benefited from trade by... and facilitated it by...' }
    ]
  }),

  '2.5': topic({
    topicKey: '2.5',
    topicLabel: '2.5 - Cultural Consequences of Connectivity',
    sourceFile: 'first-and-10-topic-2-5-cultural-consequences.html',
    lessonPage: 'lesson-2-5-cultural-consequences.html',
    docTitle: 'BeHistorical — Module 05 | First &amp; 10 | Topic 2.5 Cultural Consequences of Connectivity',
    headerSubtitle: 'Topic 2.5, Cultural Consequences of Connectivity &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Ideas, Cities, and <em>Travelers</em>',
    deck: 'Intensified exchange changed culture in three major ways: traditions and technologies diffused across regions, the fortunes of cities changed with trade and productivity, and more travelers wrote about the increasingly connected Afro-Eurasian world.',
    skillTags: ['Causation', 'Cultural Interaction', 'Continuity & Change'],
    supportCards: {
      beforeYouRead: 'Track three distinct consequences. Do not collapse the topic into “things spread.” You need cultural/technological diffusion, changing urban fortunes, and written travel accounts.',
      readingTarget: 'By the end, you should be able to explain how networks spread traditions and innovations, affected urbanization and city decline, and generated travel writing by Ibn Battuta, Marco Polo, and Margery Kempe.'
    },
    vocabulary: ['Buddhism', 'Hinduism', 'Islam', 'Paper', 'Gunpowder', 'Urbanization', 'Trade Networks', 'Ibn Battuta', 'Marco Polo', 'Margery Kempe', 'Travel Account'],
    sections: [
      section('1', 'Diffusion', 'Beliefs Moved Through Networks', [
        'Exchange networks carried cultural traditions across political and geographic boundaries. <span class="kt">Buddhism</span> continued to influence East Asia, while <span class="kt">Hinduism and Buddhism</span> spread into Southeast Asia through long-standing commercial and cultural contacts.',
        '<span class="kt">Islam</span> expanded in sub-Saharan Africa and across parts of Asia through merchants, scholars, rulers, and diasporic communities. The important historical point is not simply that a religion appeared somewhere new; it is that intensified interaction provided repeated pathways for transmission and adaptation.'
      ], 'AP Thinking, Causation', '<strong>Explain the mechanism of diffusion.</strong> Identify who or what carried the tradition and how repeated contact helped it take root.'),
      section('2', 'Technology', 'Useful Innovations Traveled Too', [
        '<span class="kt">Paper</span> and <span class="kt">gunpowder</span>, both associated with Chinese innovation, spread through wider Afro-Eurasian connections. As technologies moved, receiving societies adapted them to local needs.',
        'Technological diffusion demonstrates why exchange networks had consequences beyond markets. A commercial route could also become a pathway for administrative tools, military innovations, scholarly practices, and new forms of communication.'
      ], 'AP Thinking, Significance', '<strong>Do not treat technology as a list.</strong> Explain why movement mattered by showing how a receiving society could use or adapt the innovation.'),
      section('3', 'Cities', 'Connectivity Could Build Cities — or Leave Them Behind', [
        'The fate of cities varied. Rising productivity and expanding trade networks could support <span class="kt">urbanization</span> by attracting merchants, artisans, administrators, and consumers to commercial centers.',
        'But cities were not guaranteed permanent success. Warfare, political disruption, or changes in trade routes could contribute to decline. The larger CED point is that urban fortunes changed with the economic and political systems surrounding them.'
      ], 'AP Thinking, Continuity & Change', '<strong>City growth is not automatic.</strong> Explain why connectivity could increase urbanization in one setting while disruption or route changes could weaken another city.'),
      section('4', 'Travel Writing', 'More Travelers Recorded a Connected World', [
        'As exchange networks intensified, more travelers wrote accounts of distant places. <span class="kt">Ibn Battuta</span> described journeys across Africa and Asia. <span class="kt">Marco Polo</span> became famous in Europe for accounts associated with travel across Eurasia.',
        '<span class="kt">Margery Kempe</span>, an English Christian pilgrim, also left an account of travel. These writers had different purposes and perspectives, but together they show how intensified mobility generated new written descriptions of societies connected by trade, pilgrimage, diplomacy, and religion.'
      ], 'AP Thinking, Evidence', '<strong>The existence of travel accounts is itself evidence.</strong> More movement and contact created more opportunities for observers to describe distant societies to readers at home.')
    ],
    takeaway: 'Cultural consequences of connectivity included the diffusion of religions and technologies, changing urban fortunes as trade and productivity shifted, and a growing body of travel writing from figures such as Ibn Battuta, Marco Polo, and Margery Kempe.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain how one cultural tradition or technology diffused through Afro-Eurasian exchange networks.', placeholder: 'One example of diffusion was...' },
      { num: '02', skill: 'Continuity & Change', text: 'Explain why intensified trade could contribute to urban growth in some places and decline in others.', placeholder: 'Trade networks affected cities by...' },
      { num: '03', skill: 'Evidence', text: 'Choose Ibn Battuta, Marco Polo, or Margery Kempe. Explain how that traveler’s written account reflects intensified Afro-Eurasian connectivity.', placeholder: 'The travel account of ___ reflects connectivity because...' }
    ]
  }),

  '2.6': topic({
    topicKey: '2.6',
    topicLabel: '2.6 - Environmental Consequences of Connectivity',
    sourceFile: 'first-and-10-topic-2-6-environmental-consequences.html',
    lessonPage: 'lesson-2-6-environmental-consequences.html',
    docTitle: 'BeHistorical — Module 06 | First &amp; 10 | Topic 2.6 Environmental Consequences of Connectivity',
    headerSubtitle: 'Topic 2.6, Environmental Consequences of Connectivity &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Crops and Pathogens <em>on the Move</em>',
    deck: 'Trade networks moved living things as well as manufactured goods. Crops entered new environments and changed food production, while pathogens traveled through the same connected world and could produce devastating demographic effects.',
    skillTags: ['Causation', 'Humans & Environment', 'Comparison'],
    supportCards: {
      beforeYouRead: 'Keep two branches visible: crops and pathogens. The same connectivity can increase agricultural productivity in one case and spread epidemic disease in another.',
      readingTarget: 'By the end, you should be able to explain crop diffusion using bananas, new rice varieties, and citrus, and explain how trade routes contributed to the spread of bubonic plague.'
    },
    vocabulary: ['Crop Diffusion', 'Bananas in Africa', 'New Rice Varieties', 'Citrus', 'Mediterranean', 'Bubonic Plague', 'Black Death', 'Pathogen', 'Trade Routes', 'Demographic Change'],
    sections: [
      section('1', 'Environmental Pattern', 'Networks Moved Living Things', [
        'Merchants and travelers did not carry only textiles, metals, and luxury goods. Seeds, plants, animals, insects, and microorganisms also moved through connected Afro-Eurasian networks.',
        'That movement could be intentional, as with useful crops, or unintended, as with disease. Topic 2.6 asks students to recognize both as <span class="kt">environmental consequences of connectivity</span>.'
      ], 'AP Thinking, Causation', '<strong>The network is the pathway.</strong> Explain how repeated movement among regions allowed a crop or pathogen to expand beyond its earlier range.'),
      section('2', 'Crops', 'Useful Plants Changed Regional Agriculture', [
        '<span class="kt">Bananas in Africa</span> expanded food options in environments where the crop could thrive. Their diffusion is one example of exchange altering regional agriculture and the ability of communities to support population.',
        '<span class="kt">New rice varieties in East Asia</span>, including faster-ripening strains, could increase agricultural productivity. <span class="kt">Citrus in the Mediterranean</span> provides another example of crops moving into new growing regions through long-distance contacts.'
      ], 'AP Thinking, Effects', '<strong>For crops, finish the chain:</strong> network movement → new crop in a suitable environment → changed production, diet, or population-supporting capacity.'),
      section('3', 'Pathogens', 'The Same Connectivity Spread Plague', [
        '<span class="kt">Bubonic plague</span> spread along connected trade and travel routes during the 14th century. Movement across overland and maritime corridors helped carry the disease into densely connected Afro-Eurasian populations.',
        'The resulting <span class="kt">Black Death</span> caused enormous mortality in affected regions. The key Unit 2 mechanism is not that trade created the pathogen; it is that intensified connectivity helped a disease move farther and faster.'
      ], 'AP Thinking, Causation', '<strong>Distinguish origin from transmission.</strong> A pathogen can exist before a network expands; connectivity changes the scale and speed of its spread.'),
      section('4', 'Synthesis', 'Connectivity Increased Both Capacity and Vulnerability', [
        'Crop diffusion and pathogen diffusion point in different directions but arise from the same structural condition: regions were more connected. Useful plants could raise productive capacity, while epidemic disease could sharply reduce population.',
        'A strong historical explanation therefore avoids calling connectivity simply beneficial or harmful. Networks increased the movement of biological material, and the consequences depended on what moved and the environments and populations that received it.'
      ], 'AP Thinking, Comparison', '<strong>Compare mechanisms, not morality.</strong> Crops and pathogens both moved through networks; their effects differed because the biological material and receiving environments differed.')
    ],
    takeaway: 'Afro-Eurasian networks diffused crops such as bananas, new rice varieties, and citrus while also spreading pathogens such as bubonic plague. Connectivity changed environments and populations because it moved living things across regional boundaries.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Choose bananas in Africa, new rice varieties in East Asia, or citrus in the Mediterranean. Explain how diffusion of that crop produced an environmental or demographic effect.', placeholder: 'The diffusion of ___ affected ___ by...' },
      { num: '02', skill: 'Causation', text: 'Explain how intensified trade routes contributed to the spread of bubonic plague without claiming that trade created the disease.', placeholder: 'Trade routes contributed to plague spread by...' },
      { num: '03', skill: 'Comparison', text: 'Compare crop diffusion and pathogen diffusion as environmental consequences of the same exchange networks.', placeholder: 'Both crops and pathogens moved because... However, their effects differed because...' }
    ]
  }),

  '2.7': topic({
    topicKey: '2.7',
    topicLabel: '2.7 - Comparison of Trade Networks',
    sourceFile: 'first-and-10-topic-2-7-comparison.html',
    lessonPage: 'lesson-2-7-comparison.html',
    docTitle: 'BeHistorical — Module 07 | First &amp; 10 | Topic 2.7 Comparison of Trade Networks',
    headerSubtitle: 'Topic 2.7, Comparison of Trade Networks &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'Same Problems, Different <em>Trade Systems</em>',
    deck: 'The Silk Roads, Indian Ocean, and trans-Saharan routes solved different geographic problems but shared larger economic patterns: demand encouraged exchange, technologies and commercial practices reduced trade friction, states and cities benefited, production responded, and wider connectivity spread culture and biology.',
    skillTags: ['Comparison', 'Causation', 'Synthesis'],
    supportCards: {
      beforeYouRead: 'Compare like with like. Use the same category on both sides: environment, transportation, commercial practices, demand, states/cities, productive capacity, or diffusion.',
      readingTarget: 'By the end, you should be able to explain meaningful similarities and differences among the three networks and support each comparison with balanced evidence.'
    },
    vocabulary: ['Silk Roads', 'Indian Ocean', 'Trans-Saharan', 'Commercial Practices', 'Credit', 'Caravanserai', 'Monsoon Winds', 'Camel Saddle', 'Luxury Demand', 'Productive Capacity', 'Diffusion'],
    sections: [
      section('1', 'Comparison', 'Different Environments Required Different Transportation Solutions', [
        'The <span class="kt">Silk Roads</span> crossed long overland corridors; the <span class="kt">Indian Ocean</span> depended on seasonal winds and open-water navigation; the <span class="kt">trans-Saharan</span> network crossed an arid desert.',
        'Those environments encouraged different solutions. Caravanserais supported overland merchants, compasses and astrolabes aided maritime navigation, and camel saddles and organized caravans made desert crossings more practical.'
      ], 'AP Thinking, Comparison', '<strong>A good difference has a cause.</strong> Geography created different transportation problems, so each network developed different technologies and infrastructure.'),
      section('2', 'Commercial Systems', 'All Networks Had to Lower the Cost and Risk of Exchange', [
        'Long-distance trade required trust, information, financing, and protection. Silk Roads merchants used forms of <span class="kt">credit</span>, banking, money economies, and caravan infrastructure. Indian Ocean merchants relied heavily on port communities, commercial relationships, and diasporic networks. Trans-Saharan merchants depended on caravan organization and political protection.',
        'The institutions differed, but the economic problem was similar: merchants needed systems that made moving valuable goods across long distances reliable enough to be profitable.'
      ], 'AP Thinking, Similarity', '<strong>Compare function as well as form.</strong> Two networks can use different institutions to solve the same problem of risk and transaction cost.'),
      section('3', 'Demand and Production', 'Trade Connected Distant Consumers to Producers', [
        'Across Afro-Eurasia, demand for valuable goods stimulated exchange. Luxury demand was especially important on the Silk Roads and Indian Ocean, while gold and salt anchored much trans-Saharan commerce.',
        'Trade also interacted with <span class="kt">productive capacity</span>. Producers expanded output for distant markets, including textiles and porcelain in Asia and increased iron and steel production in China. The networks were therefore not merely delivery routes; changing trade could stimulate production.'
      ], 'AP Thinking, Economic Systems', '<strong>Demand and production belong in the comparison.</strong> Ask not only what goods moved, but how distant markets changed what societies produced.'),
      section('4', 'Consequences', 'All Three Networks Deepened Afro-Eurasian Connectivity', [
        'Each network supported states or cities that benefited from exchange, though the political forms differed. Trading cities such as Samarkand, maritime states such as Malacca, and land empires such as Mali all gained from strategic positions within exchange systems.',
        'All three networks also contributed to wider cultural, technological, and biological diffusion. The specific traditions, technologies, crops, and pathogens varied, but the shared pattern was a <span class="kt">deepening and widening of human interaction</span> across regions.'
      ], 'AP Thinking, Synthesis', '<strong>End with the pattern:</strong> different environments and institutions produced different networks, but all expanded interregional interaction and its economic, cultural, and environmental consequences.')
    ],
    takeaway: 'The three Unit 2 networks differed in geography, transportation, and institutional solutions, but shared larger patterns: demand drove exchange, commercial systems lowered trade friction, states and cities benefited, production responded, and intensified connectivity spread culture, technology, crops, and disease.',
    questions: [
      { num: '01', skill: 'Comparison', text: 'Identify one meaningful similarity between two trade networks using the same category on both sides.', placeholder: 'Both ___ and ___ were similar because...' },
      { num: '02', skill: 'Comparison', text: 'Identify one meaningful difference between two networks and explain why geography, technology, commercial practice, or state support produced that difference.', placeholder: 'The networks differed because...' },
      { num: '03', skill: 'Synthesis', text: 'Explain how demand, commercial practices, and productive capacity connect the economic story of Unit 2 across more than one trade network.', placeholder: 'Across Unit 2, demand and commercial practices...' }
    ]
  })
};
