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
    titleHtml: 'Conquest, Connection, <em>Exchange</em>',
    deck: 'The Mongols are remembered as conquerors. The bigger AP World story is what their conquests did to Eurasia: they built new states, changed the conditions of long-distance exchange, moved knowledge across cultures, and then fragmented into regional khanates.',
    skillTags: ['Causation', 'Continuity & Change', 'Significance'],
    supportHeadings: { before: 'The Story to Hold Onto', target: 'Question for Today' },
    supportCards: {
      beforeYouRead: '<strong>Conquest → Empire → Pax Mongolica → Connectivity → Exchange.</strong> Use that chain to organize everything you meet.',
      readingTarget: 'How did an empire built through conquest make Eurasia more connected?'
    },
    vocabulary: ['Chinggis Khan', 'Mounted Archers', 'Siege Warfare', 'Yam', 'Pax Mongolica', 'Khanates', 'Uyghur Script', 'Greco-Islamic Medical Knowledge', 'Numbering Systems'],
    sections: [
      section('1', 'Build', 'Chinggis Khan Turns Steppe Warriors into an Empire', [
        'Around 1200, the Mongols were not one giant empire. They were nomadic peoples of the Eurasian steppe. Then Temujin, better known as <span class="kt">Chinggis Khan</span>, united many competing groups and reorganized them into a disciplined military system.',
        'Mongol armies used fast <span class="kt">mounted archers</span>, intelligence, coordination, and tactics such as feigned retreat. Just as important, they adapted. When horses and bows could not break fortified cities, the Mongols recruited engineers and borrowed <span class="kt">siege warfare</span> from conquered peoples. Their pattern was simple: <strong>conquer → learn → adapt → conquer again.</strong>'
      ], 'AP Thinking, Causation', '<strong>Explain the mechanism, not just the weapon.</strong> Organization, mobility, and adaptation worked together to make conquest possible.'),
      section('2', 'Connect', 'Conquest Creates a New Problem: How Do You Run It?', [
        'A huge empire is difficult to govern. Mongol rulers used local administrators, tolerated multiple religious communities, and built communication systems that made distance easier to manage. The <span class="kt">Yam</span> relay network let official messengers change horses at stations and move information quickly across enormous territory.',
        'That same political reach affected trade. The <strong>Silk Roads already existed</strong>; the Mongols did not create them. But large stretches of those routes now passed through related Mongol territories. Merchant protection, communication, and fewer political barriers could make travel more predictable. Historians often call this period of increased security and movement the <span class="kt">Pax Mongolica</span>, or “Mongol Peace.”'
      ], 'AP Thinking, Continuity & Change', '<strong>Name what stayed and what changed.</strong> The routes continued; Mongol rule changed the political conditions, protection, and communication across them.'),
      section('3', 'Transfer', 'When People Move, Knowledge Moves Too', [
        'More movement meant more contact among merchants, diplomats, missionaries, scholars, and specialists. That contact helped knowledge cross political and cultural boundaries.',
        'The College Board highlights three examples. <span class="kt">Greco-Islamic medical knowledge</span> circulated toward western Europe. <span class="kt">Numbering systems</span> and mathematical knowledge also moved into Europe through wider Afro-Eurasian exchange. The Mongols themselves adopted the <span class="kt">Uyghur script</span> for writing Mongolian, showing that conquerors could borrow useful practices from the peoples they encountered.',
        'The Mongols did not invent these ideas. Their significance is that their empire intensified the contacts that helped ideas and practices travel farther.'
      ], 'AP Thinking, Significance', '<strong>Use the example to prove the pattern.</strong> A transfer matters because it shows how increased connectivity changed more than trade in goods.'),
      section('4', 'Fragment', 'Political Unity Weakens, but the Connections Do Not Vanish', [
        'The empire eventually became too difficult to hold together as one political unit. Succession disputes, vast distances, and regional interests weakened centralized rule. Mongol territory divided into major <span class="kt">khanates</span>, including the Yuan Dynasty, Ilkhanate, Golden Horde, and Chagatai Khanate.',
        'That does not mean the connected world created under Mongol rule disappeared overnight. Political unity declined while many routes, contacts, and habits of exchange continued. That is the central contradiction of the Mongol story: an empire built through conquest also created conditions that made Eurasia more connected.'
      ], 'AP Thinking, Continuity & Change', '<strong>Do not confuse fragmentation with total collapse.</strong> Unified political control declined while many connections continued.')
    ],
    takeaway: 'Conquest → Connection → Exchange. Chinggis Khan and the Mongols built a vast empire through organization and adaptation. Mongol rule and the Yam helped create the conditions associated with the Pax Mongolica, which facilitated trade and communication. Those connections encouraged cultural and technological transfer even as the empire later fragmented into khanates.',
    questions: [
      { num: '01', skill: 'Causation', text: 'How did the Mongols build such a large empire?', placeholder: 'The Mongols built power by...' },
      { num: '02', skill: 'Continuity & Change', text: 'What stayed the same about the Silk Roads, and what changed under Mongol rule?', placeholder: 'The routes continued, but Mongol rule changed...' },
      { num: '03', skill: 'Significance', text: 'Choose one transfer: Greco-Islamic medicine, numbering systems, or the Uyghur script. What does it show about Mongol-era connectivity?', placeholder: 'The example of ___ shows that...' }
    ]
  }),

  '2.3': topic({
    topicKey: '2.3',
    topicLabel: '2.3 - Indian Ocean Trade',
    sourceFile: 'first-and-10-topic-2-3-indian-ocean.html',
    lessonPage: 'lesson-2-3-indian-ocean.html',
    docTitle: 'BeHistorical — Module 03 | First &amp; 10 | Topic 2.3 Indian Ocean Trade',
    headerSubtitle: 'Topic 2.3, Indian Ocean Trade &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'The Ocean That Ran on a <em>Schedule</em>',
    deck: 'Sailors had crossed the Indian Ocean for centuries. After 1200, predictable winds and better tools let far more goods move far more reliably, and that reliability built port cities, merchant communities, and a stage for Ming China\'s great voyages.',
    skillTags: ['Causation', 'Contextualization', 'Economic Systems'],
    supportHeadings: { before: 'The Story to Hold Onto', target: 'Question for Today' },
    supportCards: {
      beforeYouRead: '<strong>Old routes → Predictable winds + better tools → More trade → Ports, diasporas, and Zheng He.</strong> Use that chain to organize everything you meet.',
      readingTarget: 'Why did Indian Ocean trade grow after 1200, and what did that growth change?'
    },
    vocabulary: ['Monsoon Winds', 'Compass', 'Astrolabe', 'Larger Ship Designs', 'Swahili Coast', 'Gujarat', 'Sultanate of Malacca', 'Diasporic Communities', 'Zheng He', 'Ming Dynasty'],
    sections: [
      section('1', 'Schedule', 'An Old Ocean Starts Running on a Calendar', [
        'Long before 1200, sailors from East Africa, Arabia, Persia, India, and Southeast Asia were already crossing the Indian Ocean. The routes were old. What changed after 1200 is how much moved along them, and how far.',
        'The key was the <span class="kt">monsoon winds</span>. In winter, the winds over the Indian Ocean blow from the northeast. In summer, they reverse and blow from the southwest. A merchant who knew that pattern could sail from India to East Africa on the winter winds, trade, wait, and sail home when the winds turned. The ocean stopped being a gamble and started running on a schedule.'
      ], 'AP Thinking, Contextualization', '<strong>Start before 1200.</strong> Indian Ocean trade was not new. Your job is to explain why an old network grew larger and busier.'),
      section('2', 'Tools', 'Better Tools Let Ships Go Farther and Carry More', [
        'Knowing when to sail was half the problem. Sailors also had to know where they were. The <span class="kt">compass</span> pointed north even when clouds hid the stars. The <span class="kt">astrolabe</span> let a navigator measure the height of the sun or a star and work out how far north or south the ship had traveled.',
        '<span class="kt">Larger ship designs</span> mattered too. A bigger hull carries more cargo on every trip, which makes each long voyage more worth taking. Put predictable winds together with better navigation and bigger ships, and trade grew in two ways at once: more goods moved, and they moved across a wider area.'
      ], 'AP Thinking, Causation', '<strong>Explain the mechanism, not the gadget.</strong> A compass matters because it made long voyages less risky. Tie each tool to what merchants could now do.'),
      section('3', 'Ports', 'Waiting for the Wind Built Cities and Communities', [
        'Here is the catch in the schedule: if the wind turns only twice a year, merchants spend months waiting in port. Waiting merchants need warehouses, markets, lodging, food, ship repair, and people who can translate. The ports that supplied those services grew rich by taxing and organizing the trade that passed through them.',
        'That is how Indian Ocean trade built states. City-states on the <span class="kt">Swahili Coast</span> of East Africa, such as Kilwa, traded gold and ivory from the African interior. <span class="kt">Gujarat</span> in western India sent cotton textiles across the ocean. The <span class="kt">Sultanate of Malacca</span>, founded around 1400, controlled the Strait of Malacca, the main passage between the Indian Ocean and the South China Sea.',
        'Some merchants stayed for good and formed <span class="kt">diasporic communities</span>: groups living far from home while keeping ties to it. Arab and Persian merchants settled in East African ports, Chinese merchants settled in Southeast Asia, and Malay communities traded across the whole basin. Influence ran both ways. On the Swahili Coast, a Bantu language absorbed many Arabic words, and Islam took root in the port towns alongside local traditions.'
      ], 'AP Thinking, Causation', '<strong>Follow the chain to its effects.</strong> Predictable trade meant waiting, waiting built ports, and ports grew into states and communities.'),
      section('4', 'Twist', 'Zheng He Sailed Into a Network China Did Not Build', [
        'In the early 1400s, the <span class="kt">Ming Dynasty</span> of China sent Admiral <span class="kt">Zheng He</span> on seven enormous voyages between 1405 and 1433. His fleets visited ports in Southeast Asia, India, Arabia, and East Africa, carrying gifts, collecting tribute, and displaying Chinese power.',
        'Zheng He did not create Indian Ocean trade. He could sail so far because the network was already there: the ports, the pilots, the knowledge of the winds, and the trading relationships. When the Ming stopped the voyages, the merchant network kept running without them.'
      ], 'AP Thinking, Significance', '<strong>Use Zheng He as evidence, not as the origin.</strong> His voyages show how large and mature the network had become, and how a state could use it for diplomacy and prestige.')
    ],
    takeaway: 'The ocean ran on a schedule. Monsoon knowledge made voyages predictable; the compass, astrolabe, and larger ships let more goods travel farther; and the months of waiting built port states on the Swahili Coast, in Gujarat, and at Malacca, along with diasporic merchant communities. Zheng He\'s Ming fleets show how mature that network was by the 1400s.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain how monsoon knowledge and one maritime technology helped Indian Ocean trade grow after 1200.', placeholder: 'Indian Ocean trade grew because...' },
      { num: '02', skill: 'Effects', text: 'Choose one port state (the Swahili Coast, Gujarat, or Malacca) and one merchant community. Explain how growing trade changed each.', placeholder: 'Growing trade changed ___ by... and it changed merchant communities by...' },
      { num: '03', skill: 'Significance', text: 'Zheng He sailed into a network China did not build. What do his voyages show about the Indian Ocean world by the 1400s?', placeholder: 'Zheng He\'s voyages show that...' }
    ]
  }),

  '2.4': topic({
    topicKey: '2.4',
    topicLabel: '2.4 - Trans-Saharan Trade',
    sourceFile: 'first-and-10-topic-2-4-trans-saharan.html',
    lessonPage: 'lesson-2-4-trans-saharan.html',
    docTitle: 'BeHistorical — Module 04 | First &amp; 10 | Topic 2.4 Trans-Saharan Trade',
    headerSubtitle: 'Topic 2.4, Trans-Saharan Trade &nbsp;|&nbsp; AP World History: Modern',
    titleHtml: 'The Sahara Did Not <em>Shrink</em>',
    deck: 'The desert stayed just as wide and just as dry. What changed after 1200 was the system for crossing it, and that system made West African gold, Saharan salt, and the Mali Empire part of one connected world.',
    skillTags: ['Causation', 'Technology', 'Governance'],
    supportHeadings: { before: 'The Story to Hold Onto', target: 'Question for Today' },
    supportCards: {
      beforeYouRead: '<strong>A desert in the middle → Saddles + caravans → Gold + salt → More trade → Mali.</strong> Use that chain to organize everything you meet.',
      readingTarget: 'How did people make the Sahara crossable and profitable, and what did that build?'
    },
    vocabulary: ['Camel Saddle', 'Caravan', 'Gold', 'Salt', 'Trade Volume', 'Geographic Range', 'Mali Empire', 'Mansa Musa', 'Timbuktu'],
    sections: [
      section('1', 'Problem', 'The Sahara Was the Problem in the Middle', [
        'Picture three regions that needed each other. West Africa had rich gold fields. The Sahara had salt, mined at places like Taghaza. North Africa had busy markets tied to the Mediterranean and the wider Islamic world. Between them lay weeks of sand, heat, and very little water.',
        'People had crossed the Sahara for centuries, so this was not a new route. The question for this topic is why crossing it became regular and large enough to change the region after 1200.'
      ], 'AP Thinking, Contextualization', '<strong>Start with the problem, not the goods.</strong> Before you can explain why trade grew, explain what made the desert so hard to cross.'),
      section('2', 'Tools', 'Saddles and Caravans Made the Crossing Regular', [
        'Camels could already survive long stretches without water. The <span class="kt">camel saddle</span> is what made them useful for trade: better saddles let camels carry heavier loads and riders farther, so each trip could move more goods.',
        'Merchants also traveled in <span class="kt">caravans</span>, large groups of people and animals moving together. Experienced guides led them from one oasis to the next, and travelers shared supplies, knowledge, and protection. One merchant alone might not survive the desert. A caravan turned the crossing into something people could repeat season after season.'
      ], 'AP Thinking, Causation', '<strong>Explain the mechanism, not the camel.</strong> "Camels" is not an explanation. Say what the saddle and the caravan let merchants do that they could not do before.'),
      section('3', 'Motive', 'Gold and Salt Made the Risk Worth Taking', [
        'Crossing the Sahara was still dangerous and expensive, so merchants needed a reason to go. <span class="kt">Gold</span> from West Africa was in high demand in North Africa and beyond. <span class="kt">Salt</span> was scarce in West Africa, where people needed it in a hot climate and used it to preserve food. Each side had something the other valued, and the difference in value paid for the journey.',
        'With better transport and a strong reason to travel, trade grew in two ways. Its <span class="kt">trade volume</span> increased, because more goods moved across the desert. Its <span class="kt">geographic range</span> expanded, because the network reached farther, linking West Africa more closely to North Africa and the Islamic world.'
      ], 'AP Thinking, Causation', '<strong>Technology made the trip possible; demand made it worthwhile.</strong> A strong explanation uses both causes and says how they worked together.'),
      section('4', 'State', 'Mali Grew by Sitting Across the Routes', [
        'The <span class="kt">Mali Empire</span> rose across the southern end of these routes. Its rulers controlled key trading towns, protected the roads, and taxed the goods that moved through them. That wealth made Mali stronger, and a stronger Mali made the routes safer and busier, drawing more people and places into the network.',
        'Trade also built cities. <span class="kt">Timbuktu</span> and Djenné became centers of commerce and of Islamic learning, where scholars, books, and merchants from across the Sahara met. In 1324, the ruler <span class="kt">Mansa Musa</span> made a pilgrimage to Mecca. Writers in Cairo reported that he gave away so much gold that its value there fell, and a European map from 1375 shows him holding a golden nugget.',
        'The Sahara did not shrink. The system for crossing it got better, and that system built one of the richest empires of its time.'
      ], 'AP Thinking, Governance', '<strong>Show the two-way relationship.</strong> Trade made Mali rich, and Mali in turn protected and expanded the trade. Mansa Musa is evidence of that wealth, not the whole story.')
    ],
    takeaway: 'The Sahara did not shrink. Camel saddles and caravans made regular crossings practical, gold and salt made them profitable, and trade grew in volume and geographic range. The Mali Empire grew by protecting and taxing the routes, Timbuktu and Djenné became centers of trade and learning, and Mansa Musa\'s pilgrimage made Mali\'s wealth famous.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Explain how the camel saddle and caravan organization made regular trade across the Sahara possible.', placeholder: 'Regular desert trade became possible because...' },
      { num: '02', skill: 'Causation', text: 'Why did gold and salt make merchants willing to cross the Sahara, and what happened to trade as a result?', placeholder: 'Gold and salt made the risk worth it because... As a result, trade...' },
      { num: '03', skill: 'Governance', text: 'Explain how Mali both profited from trans-Saharan trade and helped it grow.', placeholder: 'Mali profited from trade by... and helped it grow by...' }
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
