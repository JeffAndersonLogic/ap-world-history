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
        'Camels could already survive long stretches without water. Improved <span class="kt">camel saddle</span> designs made them far more useful for trade: better saddles let camels carry heavier loads and riders farther, so each trip could move more goods.',
        'Merchants also traveled in <span class="kt">caravans</span>, large groups of people and animals moving together. Experienced guides led them from one oasis to the next, and travelers shared supplies, knowledge, and protection. One merchant alone might not survive the desert. A caravan made the crossing more efficient and more reliable, and able to carry far larger quantities of goods, season after season.'
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
    titleHtml: 'Goods Were Never the Only <em>Cargo</em>',
    deck: 'Connectivity changes what societies know, and what they become. After 1200, the same routes that carried silk, spices, and gold carried beliefs, technologies, and travelers, and each of them left a mark on the places they reached.',
    skillTags: ['Causation', 'Cultural Interaction', 'Continuity & Change'],
    supportHeadings: { before: 'The Story to Hold Onto', target: 'Question for Today' },
    supportCards: {
      beforeYouRead: '<strong>Bigger networks → More contact → Diffusion + adaptation → Cultural and intellectual change.</strong> Every example in this reading follows that chain. Use it to organize what you meet.',
      readingTarget: 'When more people and goods moved across Afro-Eurasia, what else moved with them, and how did it change the societies that received it?'
    },
    vocabulary: ['Diffusion', 'Adaptation', 'Buddhism', 'Hinduism', 'Islam', 'Paper', 'Gunpowder', 'Urbanization', 'Hangzhou', 'Samarkand', 'Baghdad', 'Ibn Battuta', 'Marco Polo', 'Margery Kempe', 'Travel Account'],
    sections: [
      section('1', 'Beliefs', 'Merchants Carried More Than Goods', [
        'By 1200, the Silk Roads, the Indian Ocean, and the trans-Saharan routes carried more traffic than ever. But goods were never the only cargo. Merchants, pilgrims, missionaries, and scholars traveled the same routes, and they carried their beliefs with them. More contact meant more chances for an idea to move, which historians call <span class="kt">diffusion</span>.',
        '<span class="kt">Buddhism</span> kept shaping East Asia, where monasteries, art, and schools of Buddhist thought grew in China, Korea, and Japan. In Southeast Asia, <span class="kt">Hinduism</span> and Buddhism took root through trade with India. The temple at Angkor Wat, in the Khmer Empire, was built for the Hindu god Vishnu and later became a Buddhist site.',
        '<span class="kt">Islam</span> spread into West Africa and across Asia. In West Africa and Southeast Asia it spread mostly through traders, scholars, and teachers rather than through armies. Rulers in Mali and in port cities like Malacca often converted first, partly because Islam connected them to Muslim merchants and to a wider world of law and learning.'
      ], 'AP Thinking, Causation', '<strong>Name the carrier.</strong> "Islam spread" is not an explanation. Say who carried it, along which route, and why the people receiving it had a reason to adopt it. Network → contact → diffusion.'),
      section('2', 'Technology', 'Inventions Moved, and Changed as They Moved', [
        'Technologies traveled the same way beliefs did. <span class="kt">Paper</span>, invented in China, had spread into the Islamic world centuries earlier, where cheap paper helped fill libraries in cities like Baghdad. From there it spread into Europe, where mills began making it from linen rags.',
        '<span class="kt">Gunpowder</span>, another Chinese invention, reached Southwest Asia and Europe in the 1200s, along routes the Mongols had tied together. Societies that received it did not simply copy Chinese uses. Over time, armies in Europe and the Islamic world built it into cannons and new kinds of warfare.',
        'This is <span class="kt">adaptation</span>: a receiving society takes something from outside and reshapes it for its own needs. Diffusion explains how an idea or tool arrived. Adaptation explains what it became once it got there.'
      ], 'AP Thinking, Causation', '<strong>Finish the chain.</strong> Do not stop at "gunpowder spread to Europe." Explain how the society that received it changed it, and what that change made possible. Contact → diffusion → adaptation → change.'),
      section('3', 'Cities', 'Connected Cities Could Rise, and Could Fall', [
        'The same traffic made cities rich. <span class="kt">Hangzhou</span>, the capital of the Southern Song, became one of the largest cities in the world, fed by productive rice farming and busy trade. <span class="kt">Samarkand</span>, in Central Asia, grew into a great Silk Road market where merchants, goods, and ideas met. This growth of cities is called <span class="kt">urbanization</span>.',
        'But a connected city could also fall. In 1258 the Mongols sacked <span class="kt">Baghdad</span>, killed the caliph, and ended the Abbasid Caliphate, which had ruled from the city for about five hundred years. Baghdad had been one of the great centers of learning in the Islamic world, and it never fully recovered its old place.',
        'Samarkand shows both sides. The Mongols destroyed it in 1220, and more than a century later it was rebuilt as a magnificent capital. When routes or rulers changed, a city\'s fortunes could change with them.'
      ], 'AP Thinking, Continuity & Change', '<strong>City growth is not automatic.</strong> Explain what made a city grow (trade plus productive farming) and what could reverse it (war, conquest, or shifting routes). The same network that fed a city could expose it. Network → contact → a city rises, or falls.'),
      section('4', 'Travelers', 'More People Traveled, So More People Wrote It Down', [
        'Because more people traveled, more people recorded what they saw. Their writings are called <span class="kt">travel accounts</span>, and they let us see this connected world through the eyes of people who crossed it.',
        '<span class="kt">Ibn Battuta</span>, a Muslim scholar from Morocco, spent about thirty years traveling through North and West Africa, the Middle East, India, and China, often working as a judge in Muslim communities along the way. <span class="kt">Marco Polo</span>, a merchant from Venice, described his years in Mongol China, and his book made Europeans curious about Asia. <span class="kt">Margery Kempe</span>, an English Christian, went on pilgrimages to Jerusalem and Rome and told her story in a book that is often called the first autobiography in English.',
        'They traveled for trade, faith, and service, and they wrote for readers back home. That makes their accounts valuable evidence and also means each one shows the world from one traveler\'s point of view.'
      ], 'AP Thinking, Evidence', '<strong>The accounts are evidence twice.</strong> What they describe tells us about distant places. The fact that so many were written tells us contact was growing. Network → contact → travel → written knowledge: connectivity changes what societies know.')
    ],
    takeaway: 'Bigger networks meant more contact, and more contact meant diffusion and adaptation. Buddhism, Hinduism, and Islam spread, mostly through merchants and scholars. Paper and gunpowder moved west and were reshaped by the societies that took them in. Trade built cities like Hangzhou and Samarkand, while the Mongol sack of Baghdad in 1258 showed that connected cities could also fall. And travelers like Ibn Battuta, Marco Polo, and Margery Kempe wrote down the connected world they crossed. Every time, the chain was the same, and connectivity changed what societies believed, built, and knew.',
    questions: [
      { num: '01', skill: 'Causation', text: 'Choose one belief system or one technology. Explain how contact along a trade network spread it, and how the receiving society adapted it.', placeholder: 'Contact along ___ spread ___ because... The receiving society adapted it by...' },
      { num: '02', skill: 'Continuity & Change', text: 'Explain how connectivity helped one city grow and how a change in rulers or routes could make a city decline. Use a named city.', placeholder: 'Connectivity helped ___ grow by... A city could decline when...' },
      { num: '03', skill: 'Evidence', text: 'Choose Ibn Battuta, Marco Polo, or Margery Kempe. Explain how that traveler\'s account is evidence of a more connected world, and name one limit of using it.', placeholder: 'The account of ___ shows a connected world because... One limit is...' }
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
    titleHtml: 'Three Networks, One <em>Problem</em>',
    deck: 'Geography picked the tools. Demand did the rest. The Silk Roads, the Indian Ocean, and the trans-Saharan routes were all solving the same problem, distance, and the ground each one crossed decided how.',
    skillTags: ['Comparison', 'Causation', 'Synthesis'],
    supportHeadings: { before: 'The Story to Hold Onto', target: 'Question for Today' },
    supportCards: {
      beforeYouRead: '<strong>Same problem → Different ground → Different tools → Same results.</strong> You already know all three networks. This reading lines them up so you can compare them.',
      readingTarget: 'Why did three very different trade networks end up doing the same things?'
    },
    vocabulary: ['Silk Roads', 'Indian Ocean', 'Trans-Saharan', 'Luxury Demand', 'Commercial Practices', 'Caravanserai', 'Credit', 'Monsoon Winds', 'Camel Saddle', 'Trading Cities', 'Productive Capacity', 'Diffusion'],
    sections: [
      section('1', 'The Problem', 'Every Network Was Solving the Same Problem', [
        'For three topics we visited the trade networks one at a time: the <span class="kt">Silk Roads</span> across Central Asia, the <span class="kt">Indian Ocean</span> by sea, and the <span class="kt">trans-Saharan</span> routes across the desert. Now we line them up and ask why they look so alike.',
        'All three were solving the same problem. People wanted things made far away: silk and porcelain from China, pepper from India, gold from West Africa, salt from the Sahara. That <span class="kt">luxury demand</span> made long-distance trade worth doing. But distance made every one of those goods expensive and dangerous to get. Whoever could make distance cheaper and safer could get rich.'
      ], 'AP Thinking, Comparison', '<strong>Find the similarity underneath.</strong> The networks look different on a map, but demand and distance were the same everywhere. That shared problem is why the results turned out so alike.'),
      section('2', 'The Big Difference', 'Geography Picked the Tools', [
        'Each network crossed different ground, so each one needed different tools. On the long overland Silk Roads, <span class="kt">caravanserais</span> gave merchants and their animals a safe place to stop, and <span class="kt">credit</span> meant a merchant did not have to carry a fortune in coins. China\'s flying cash and paper money are examples of the money economies that grew along these routes. These are the <span class="kt">commercial practices</span> that lowered the risk of distance.',
        'On the Indian Ocean, sailors learned the <span class="kt">monsoon winds</span>, which blow one way for half the year and reverse for the other half. Ships such as dhows and junks were built to use them, so the wind itself became a schedule merchants could plan around. In the Sahara, the <span class="kt">camel saddle</span> let camels carry heavier loads, and organized caravans moved people, water, and protection from oasis to oasis.'
      ], 'AP Thinking, Comparison', '<strong>A difference needs a because.</strong> The tools differed because the environments differed. A monsoon is useless in a desert, and a camel cannot cross an ocean.'),
      section('3', 'The Same Results', 'Where Routes Narrowed, Cities and States Grew', [
        'Different tools led to the same results. The first was that cities and states grew rich where routes narrowed and goods had to pass through. <span class="kt">Trading cities</span> such as Samarkand and Kashgar grew where caravans met on the Silk Roads, under the protection of Mongol rule. Calicut and Malacca grew where ships waited for the winds to change. Timbuktu grew at the edge of the Sahara, and the kingdom of Mali grew rich by taxing and protecting the gold and salt trade.',
        'The political forms were different, a land empire, port states, a West African kingdom, but the pattern was the same. When goods had to pass through a place, whoever controlled that place could tax the trade and protect it, and trade grew because they did.'
      ], 'AP Thinking, Comparison', '<strong>Compare what a thing did, not only what it looked like.</strong> A port and a desert city look nothing alike, but they played the same role in their networks.'),
      section('4', 'The Same Results', 'Demand Far Away Made Workshops Grow, and More Than Goods Moved', [
        'The second shared result was that trade changed places far from the routes. Because buyers kept asking for more, producers made more. Chinese, Persian, and Indian artisans expanded their production of textiles and porcelain for export, and iron and steel production grew in China. Historians call this growth in <span class="kt">productive capacity</span>: a potter in China could be working for a buyer in East Africa.',
        'The third shared result was <span class="kt">diffusion</span>. All three networks carried things nobody was selling. Islam and Buddhism traveled with merchants, paper and gunpowder moved west, crops such as bananas, new rice varieties, and citrus moved to new regions, and the bubonic plague traveled the same routes. Different networks carried different things, but all three deepened and widened human interaction across Afro-Eurasia.'
      ], 'AP Thinking, Synthesis', '<strong>Put it together with both, but, and because.</strong> Both networks did the same thing, but they used different tools, because they crossed different ground. That is a complete AP comparison.')
    ],
    takeaway: 'Three networks, one problem: distance. Geography picked the tools, caravanserais and credit overland, the monsoon and ships by sea, the camel saddle and caravans across the Sahara. Demand did the rest: on all three, trading cities grew, production expanded, and ideas, crops, and disease traveled.',
    questions: [
      { num: '01', skill: 'Comparison', text: 'Identify one meaningful similarity between two trade networks, using the same category on both sides, and explain why it existed.', placeholder: 'Both ___ and ___ ___ because...' },
      { num: '02', skill: 'Comparison', text: 'Identify one meaningful difference between two networks and explain why geography, technology, commercial practices, or state support produced that difference.', placeholder: 'The ___ relied on ___, while the ___ relied on ___, because...' },
      { num: '03', skill: 'Synthesis', text: 'Explain how demand far away changed productive capacity in places that were not on the trade routes themselves.', placeholder: 'Because buyers far away wanted more...' }
    ]
  })
};
