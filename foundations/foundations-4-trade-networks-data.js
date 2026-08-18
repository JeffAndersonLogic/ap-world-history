window.FOUNDATION_TOPIC = {

  id: 'foundations-4',
  code: 'FOUNDATIONS 4',
  title: 'Trade Networks & Innovation',
  subtitle: 'How do trade networks transform societies?',
  heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',

  commandCopy: 'The single most important intellectual move in Day 4 is getting students past the idea that trade routes move goods. Trade routes are systems of human interaction that transform everything they touch. A Sogdian merchant carrying silk from Chang\'an to Samarkand is also carrying Tang court aesthetics, Buddhist monastery patronage networks, zoonotic diseases from densely populated Chinese cities, and, depending on who they are, Zoroastrian ritual practices. The goods are the most visible layer. The invisible layers are often historically more consequential. Students who understand this can analyze any trade network in AP World with real depth.',

  blockPlan: [
    ['0-10', 'Launch Question', 'Students write: What besides goods could travel along a trade route? List as many things as you can in 60 seconds.'],
    ['10-25', 'Map Check', 'Use the Map Module: students identify the three major Afro-Eurasian trade systems and one port city or oasis on each route.'],
    ['25-42', 'First & 10', 'Read the Battle of Talas narrative hook. Students identify one technology transfer, one mechanism of diffusion, and one unintended consequence.'],
    ['42-65', 'Lecture Cards', 'Six cards, built on Key Concept 2.3: why empires raised the volume of trade, the two land routes, the two sea lanes, the technologies (saddle, stirrup, yoke, lateen sail) that made distance cheap, the crops, irrigation, and disease that moved without being sold, and how Buddhism, Christianity, and Hinduism were transformed as they spread.'],
    ['65-80', 'AP Skill Builder', 'Students write a complexity paragraph explaining how one trade network caused simultaneous changes across multiple regions.'],
    ['80-90', 'Checkpoint', 'Exit ticket and confidence reflection.']
  ],

  learningTargets: [
    'I can explain how each of the four transregional routes operated, the Eurasian Silk Roads, the trans-Saharan caravan routes, the Indian Ocean sea lanes, and the Mediterranean sea lanes, including the climate and terrain each crossed, the goods it typically carried, and the communities who ran it.',
    'I can name the technologies that made long-distance transport possible, a pack-animal technology such as the camel saddle, yoke, or stirrup and a maritime technology such as the lateen sail or the dhow, and I can identify specific non-goods that traveled the networks: crops and irrigation methods, disease pathogens, religious traditions, and people.',
    'I can write a complexity argument explaining how trade networks caused multiple simultaneous changes across different regions.'
  ],

  successCriteria: [
    'I can name all four required routes, give at least three specific port cities or oasis towns and explain each one\'s geographic function, and describe how the Indian Ocean monsoon worked, which months, which directions, which sailing routes.',
    'I can name one pack-animal technology and one maritime technology with a date, and I can give at least two specific examples of non-goods traveling the networks, with dates and locations, including one religious tradition that was changed by the journey.',
    'I can write a complexity paragraph that identifies multiple effects of a single trade network and explains how they connected across regions.'
  ],

  timeline: [
    { date: 'c. 50–100 CE', event: 'The Periplus of the Erythraean Sea, a Greek merchant\'s handbook, documents Indian Ocean routes, ports, and goods from Egypt to India, showing the network was already organized and commercially sophisticated.' },
    { date: 'c. 300 CE', event: 'The North Arabian camel saddle transforms trans-Saharan trade: camels can now carry 200–300 kg loads across the Sahara, turning the desert from a barrier into a highway.' },
    { date: 'c. 650–750 CE', event: 'Arab conquest of Central Asia and North Africa integrates Islamic commercial law across trans-Saharan and Silk Road networks, reducing transaction costs for Muslim merchants across thousands of kilometers.' },
    { date: '751 CE', event: 'Battle of Talas: Tang China and the Abbasid Caliphate clash in Central Asia. Chinese papermakers captured among prisoners establish paper mills in Samarkand, a military defeat triggers a technology transfer that reshapes Islamic and eventually European intellectual culture.' },
    { date: 'c. 900–1200 CE', event: 'Srivijaya Empire controls the Strait of Malacca, extracting tolls from all maritime traffic between the Indian Ocean and South China Sea. Swahili city-states (Kilwa, Mombasa, Zanzibar) emerge as East African nodes of Indian Ocean exchange.' }
  ],

  timelinePrompt: 'Which moment best shows that trade networks moved more than goods, that exchange transformed the societies involved in ways that went far beyond commerce? Explain your choice.',

  map: {
    title: 'Map: Silk Roads and Afro-Eurasian Trade Networks',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
    caption: 'The Silk Road network was not one road, it was a branching system of overland and maritime routes connecting China, Central Asia, Persia, the Mediterranean, and India. The map shows the geographic logic: routes follow the path of least resistance through mountain passes, oasis towns, and navigable seas.',
    desc: 'Use this map as a trade network analyst: identify the chokepoints (where routes narrow and whoever controls them collects tolls), the relay stations (oasis cities where goods changed hands), and the junction points (where overland and maritime systems connected).',
    key: [
      { label: 'Overland Silk Roads', detail: 'Branching network from Chang\'an through the Tarim Basin (north and south routes around the Taklamakan Desert), converging at Kashgar, then west through Samarkand, Merv, and Nishapur to Persia and the Mediterranean.' },
      { label: 'Indian Ocean maritime system', detail: 'Monsoon-driven maritime network connecting East Africa, Arabia, Persia, India, Southeast Asia, and China. Southwest monsoon (June–Sept) drove ships east and north; northeast monsoon (Nov–Mar) drove them back. Natural round-trip schedule.' },
      { label: 'Trans-Saharan routes', detail: 'Camel caravan routes linking West African goldfields (Bambuk, Bure) to North African markets via oasis chains: Sijilmasa → Taghaza salt mines → Timbuktu → Niger Bend. Salt moved south; gold moved north.' },
      { label: 'Chokepoints', detail: 'Strait of Malacca (controlled by Srivijaya), Strait of Hormuz (Persian Gulf entrance), Aden (Red Sea mouth), Kashgar (where Silk Road branches converged), whoever controlled these collected enormous revenue from passing trade.' },
      { label: 'Junction cities', detail: 'Chang\'an, Samarkand, Baghdad, Calicut, Kilwa, Timbuktu, cities whose wealth derived from their position at network junctions, not primarily from local production.' }
    ],
    questions: [
      'Identify two places on the map where a ruler could collect tolls from passing trade. What geographic feature created that chokepoint?',
      'Why would a city at the intersection of overland and maritime routes become wealthier than one on only a single route?',
      'The Sahara is visible on this map. Before c.300 CE, was it a barrier or a connector? What changed, and why?',
      'If you were a merchant in 900 CE moving pepper from South India to the Mediterranean, trace the most likely route. How many times would your goods change hands, and why?'
    ],
    prompt: 'Choose one trade network, Silk Roads, Indian Ocean, trans-Saharan, or Mediterranean. Identify one chokepoint or junction city on that network and explain why its geographic position made it economically or politically powerful.'
  },

  // The optional push-further layer, rendered under the lecture cards by
  // foundations-topic-renderer.js. The page is generated from
  // scripts/lib/deep-reading-content/foundations-4.js; never hand-edit it.
  // Omit this field entirely and the whole feature disappears from the page.
  deepReading: {
    title: 'Nobody Traveled the Whole Road',
    desc: 'A textbook-depth companion covering the three networks one at a time, with the named oasis towns and ports and what each was for, the monsoon by month and direction, and then the four things that traveled without anyone intending it. Optional, and useful when a question asks how a network actually worked rather than what moved along it.',
    url: 'deep-reading-foundations-4-trade-networks.html'
  },

  first10: {
    title: 'First & 10: Three Networks That Moved the World',
    embedUrl: 'first-and-10-foundations-4-trade-networks-capture.html?v=response-id-fix-v1',
    paragraphs: [
      'A trade network is a system of routes and relationships that carries goods between distant societies, but the goods are only the most visible layer. Along with silk and salt travel merchants and missionaries, seeds and livestock, tools and techniques, and, invisibly, the germs those travelers carry. Before c.1200, three great networks did most of this work across Afro-Eurasia: the overland Silk Roads, the maritime Indian Ocean system, and the trans-Saharan caravan routes.',
      'The Silk Roads were not a single road but a branching relay network running from the Chinese capital of Chang\'an, through the oasis cities of Central Asia, on to Samarkand, Persia, and the Mediterranean. No single merchant traveled the whole way; goods changed hands again and again, passing from Chinese to Sogdian to Persian to Arab middlemen. The relay carried silk, porcelain, and paper west and horses, glassware, and spices east, and it also carried Buddhist monks who traveled with the caravans and the monasteries the merchants funded along the way.',
      'The Indian Ocean network ran on the monsoon winds, which reverse with the seasons: the southwest monsoon (June to September) pushed ships toward India and Southeast Asia, and the northeast monsoon (November to March) carried them home. This reliable reversal created a natural round-trip schedule and made the Indian Ocean the world\'s first sustained maritime trade network. Wealthy port cities such as Aden, Calicut, Malacca, Quanzhou, and Kilwa grew at its junctions, and Chinese porcelain found at Kilwa in East Africa proves the network reached across four continents.',
      'For most of history the Sahara was a barrier. What changed it was a technology, the camel saddle, adopted around 300 CE, which let camels carry heavy loads for days without water. The desert became a highway linking West African gold to North African salt and Mediterranean markets, and the empires of Ghana and then Mali grew rich taxing the trade. After Islam spread across the region, it supplied the commercial glue: a shared body of contract law, a credit system that moved value without moving gold, and caravanserais that sheltered merchants across thousands of kilometers of desert.',
      'The most consequential cargo was often invisible. Chinese papermakers captured at the Battle of Talas (751 CE) carried papermaking into the Islamic world, where cheap paper fueled an extraordinary flowering of scholarship. Buddhism spread into China with Silk Road merchants, and Islam reached Southeast Asia through Indian Ocean traders rather than armies. Fast-maturing Champa rice traveled from Vietnam to Song China, enabling two harvests a year, and the Plague of Justinian (541 CE) rode grain ships to Constantinople. The three networks were one circulatory system: goods, people, ideas, crops, and germs all moved together, and by c.1200 that system sustained the most commercially sophisticated economies on earth.'
    ],
    prompt: 'Choose two of the three trade networks (Silk Roads, Indian Ocean, trans-Saharan). For each, explain what made it work and name one thing besides goods that moved along it. Then explain one consequence of that movement for a specific society.'
  },

  beSurreal: {
    title: 'You Are a Papermaker Captured at Talas, 751 CE',
    desc: 'A memorable everyday-life detail from the moment technology transferred worlds.',
    intro: 'The battle is over. You are a prisoner. The soldiers speak Arabic.',
    detail: 'You make paper. That is your trade. In Chang\'an, paper is ordinary, cheap enough to wipe tables, used for tax records and poetry drafts and love letters. You have been making paper since your father taught you: soaking mulberry bark and hemp rags, beating the pulp into a slurry, lifting the screen through the vat, hanging the sheets to dry. It is not a prestigious trade. It is not dangerous. You never expected to be important. But the Abbasid officer who separated you from the other prisoners is asking very specific questions about your work. He wants to understand the vat. The screen. The drying process. You are not sure what you are about to change.',
    prompt: 'What does this ordinary craftsman\'s story reveal about how technology transfers through trade networks and conflict? What does it mean that one captured papermaker\'s knowledge changed the intellectual culture of the Islamic world for centuries?'
  },

  terms: [
    'trade network', 'Silk Roads', 'Indian Ocean trade', 'trans-Saharan trade',
    'Mediterranean sea lanes', 'monsoon winds', 'chokepoint', 'entrepôt',
    'relay trade', 'Sogdian merchants', 'caravanserai', 'camel saddle', 'stirrup',
    'yoke', 'lateen sail', 'dhow', 'qanat', 'technology transfer',
    'cultural diffusion', 'Srivijaya Empire', 'Swahili city-states', 'paper',
    'Battle of Talas'
  ],

  termTable: [
    ['Relay trade', 'A system in which goods change hands multiple times along a trade route, with different merchants handling different segments. No single merchant traveled from China to Rome, goods were passed from Sogdian to Persian to Arab intermediaries, each taking a profit margin.'],
    ['Entrepôt', 'A port city or trading hub where goods from multiple origins are collected, stored, and redistributed. Entrepôts grow wealthy not by producing goods but by controlling the exchange between producers and consumers. Examples: Kilwa, Calicut, Malacca, Quanzhou.'],
    ['Caravanserai', 'A roadside inn on overland trade routes providing shelter, water, food, and stabling for merchants and their animals. Built and maintained by merchant communities (especially Sogdians) as capital investments that gave them structural advantages over competitors without the same infrastructure.'],
    ['Sogdian merchants', 'Iranian-speaking merchants from the oasis cities of Central Asia (Samarkand, Bukhara) who dominated the middle segment of Silk Road trade from c.200–900 CE. Operated through family diaspora networks, spoke multiple languages, and maintained trading colonies from China to the Byzantine Empire.'],
    ['Srivijaya Empire', 'A maritime empire (c.650–1377 CE) based on Sumatra that controlled the Strait of Malacca, the chokepoint between the Indian Ocean and South China Sea. Extracted tolls from all passing trade; became enormously wealthy and a major center of Mahayana Buddhist learning.'],
    ['Technology transfer', 'The movement of productive knowledge or techniques from one society to another through trade, conflict, migration, or deliberate adoption. The Battle of Talas (751 CE) is the classic example: Chinese papermaking knowledge reached the Islamic world via captured craftsmen.']
  ],

  evidence: {
    title: 'Evidence Lab: Trade Networks in Material Form',
    task: 'Archaeological evidence is often the most powerful proof that trade networks existed and what they moved. Each item below is a piece of material evidence for Afro-Eurasian trade connections. Your job is to use it to make a historical argument, not describe what it is, but explain what it proves about trade networks.',
    prompt: 'Choose one piece of evidence. Write 2–3 sentences explaining what it proves about Afro-Eurasian trade networks, specifically, how far goods traveled, what else may have traveled with them, and what the evidence reveals about the societies connected by that network.',
    items: [
      {
        title: 'Song Dynasty Celadon Found at Kilwa, East Africa',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG',
        caption: 'Chinese celadon pottery from the Song Dynasty (960–1279 CE) has been excavated at Kilwa on the East African coast, more than 7,000 km from its origin. Chinese porcelain sherds are among the most reliable markers of Indian Ocean trade connections: they are durable, identifiable by kiln and period, and found at virtually every Indian Ocean port city that participated in the network. Their presence at Kilwa proves not just that goods traveled but that the Song Dynasty\'s merchant fleet was actively participating in Indian Ocean commerce.',
        prompt: 'What does the presence of Song Dynasty celadon at Kilwa prove about the Indian Ocean trade system? What else, beyond porcelain, was likely moving along the same routes that carried this pottery from China to East Africa?'
      },
      {
        title: 'Dunhuang Mogao Cave Buddhist Art (Silk Road, c.4th–14th centuries CE)',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mural_of_Buddha_in_Mogao_Caves,_Dunhuang.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mural_of_Buddha_in_Mogao_Caves,_Dunhuang.jpg',
        caption: 'The Mogao Caves at Dunhuang, an oasis city on the Silk Road in northwestern China, contain 492 temple caves decorated with Buddhist murals and sculptures commissioned by Silk Road merchants between the 4th and 14th centuries CE. Merchants funded the caves as acts of religious patronage, seeking divine protection for their dangerous journeys. The caves document 1,000 years of Silk Road cultural exchange: artistic styles from India, Central Asia, Persia, and China blend in a single location. The caves were sealed around 1000 CE and rediscovered in 1900, preserving the world\'s largest repository of early printed books and manuscripts.',
        prompt: 'The Dunhuang caves were funded by merchants, not monks or emperors. What does this reveal about the relationship between trade and the spread of Buddhism? How does this evidence challenge the assumption that religious diffusion and commercial exchange were separate processes?'
      }
    ]
  },

  aiCoach: {
    title: 'Socrates Coach: Trade as Transformation',
    intro: 'Use one of these prompts to push your thinking past listing goods and toward historical argument about transformation. The goal is to explain what changed, in specific societies, in specific ways, because a trade network existed.',
    prompts: [
      'What moved through this network besides goods? For each non-good you name, explain specifically how it traveled and what changed when it arrived.',
      'Who controlled the chokepoints on this trade network, and how did that geographic control translate into political or economic power? Give a specific example.',
      'What was the unintended consequence of this trade network, something that changed that no one planned or wanted? How does that unintended consequence reveal how trade systems actually work?',
      'How would the world at c.1200 look different if this trade network had not developed? What specific changes would be absent, in religion, technology, wealth distribution, or political power?'
    ],
    responsePrompt: 'Use one Socrates prompt to revise your explanation. Your revised answer should make a specific causal claim about how a trade network transformed a society, not just moved goods through it.'
  },

  skill: {
    title: 'AP Skill Builder: Complexity',
    desc: 'Explain how one trade network caused simultaneous changes across multiple regions.',
    intro: 'Complexity on the AP exam means demonstrating that historical developments had multiple causes or effects, or that a single development connected different societies in different ways simultaneously. Trade networks are ideal complexity subjects because they produced different effects in different places at the same time, the Indian Ocean trade enriched Kilwa\'s rulers, funded Song China\'s state through customs revenue, spread Islam through Sufi merchant networks into Southeast Asia, and moved plague bacilli alongside pepper and porcelain. A strong complexity argument names multiple effects, explains how they connected, and shows the student understands the network as a system rather than a one-directional pipeline.',
    steps: [
      'Choose one trade network: the Silk Roads, the Indian Ocean sea lanes, the trans-Saharan caravan routes, or the Mediterranean sea lanes.',
      'Identify at least THREE different things the network moved or caused: one economic effect, one cultural or religious effect, one technological or biological effect.',
      'Explain each effect with a specific historical example, a named city, merchant group, technology, disease, or religious tradition.',
      'Write a final sentence connecting the effects: how did they interact, reinforce, or contradict each other?'
    ],
    prompt: 'Write a complexity paragraph explaining how ONE trade network before c.1200 caused changes across multiple regions simultaneously. Your paragraph should address at least three different types of change and support each with specific historical evidence.'
  },

  checkpoint: {
    title: 'Exit Ticket: Trade Networks & Innovation',
    prompt: 'Explain how one specific trade network before c.1200 moved more than goods. Your answer should name the network, identify at least two non-goods that moved through it, explain how each traveled, and describe one historical consequence of that movement.',
    checklist: [
      'I named a specific trade network with a geographic location (not just "trade routes" in general).',
      'I identified at least two non-goods that traveled through the network: technology, religion, disease, crops, people, or ideas.',
      'I explained the mechanism, how did each non-good travel? Through merchants? Monks? Conflict? Animal vectors?',
      'I described a specific historical consequence, what changed in a named society because of what moved through this network?'
    ]
  },

  exitTicket: 'How do trade networks transform societies, and why is it wrong to think of them as only moving goods?',

  lecture: [
    {
      title: 'Empires First, Then the Volume',
      bullets: [
        'Big empires (Han China, Rome, Persia, the **Kushans**) paved, policed, and taxed their own roads.',
        'Safer roads plus richer buyers equals far more long-distance trade.',
        'Two kinds of cargo: **luxury goods** (silk, incense, pepper, gems) and **raw materials** (salt, ivory, timber, metals).',
        '**Value-to-weight** is the rule. Carry what is worth more than the animal carrying it.',
        'Four routes to know: the **Silk Roads**, the **trans-Saharan** caravan routes, the **Indian Ocean** sea lanes, and the **Mediterranean** sea lanes.',
        'Each route\'s character came from three things: its **climate**, its **goods**, its **merchants**.',
        'The **Americas and Oceania** built **localized** networks instead. No animal that pulls, no empire next door.'
      ],
      image: {
        title: 'Silk Road Map',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
        caption: 'The Silk Road network shows the geographic logic of relay trade: oasis cities at regular intervals across the Tarim Basin served as nodes where goods changed hands, merchants rested, and cultural exchange happened. Notice how the overland branches meet the maritime lanes, the two systems in this map are one system in practice.'
      }
    },
    {
      title: 'The Land Routes: Silk Roads and Sahara',
      bullets: [
        'The Silk Roads were a **relay**, not a highway. Goods changed hands at every oasis.',
        'The route follows the water, oasis to oasis around the desert.',
        '**Sogdian** merchants ran the middle: caravanserais, many languages, family firms.',
        '**West**: silk, porcelain, paper. **East**: horses, glassware, cotton, silver.',
        'The **Sahara** stayed a barrier until camels made the crossing routine, about 300 CE.',
        'Then **gold** moved north and **salt** moved south. **Ghana** and **Mali** taxed the southern end.'
      ],
      image: {
        title: 'Mansa Musa on the Catalan Atlas (1375 CE)',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
        caption: 'The 1375 Catalan Atlas shows Mali\'s Mansa Musa enthroned with a gold nugget while a camel-mounted Saharan trader approaches, the trans-Saharan gold trade as medieval Europe pictured it. The map is later than this unit, which is the point: by the time Europe drew West Africa, it drew it as the place the gold came from.'
      }
    },
    {
      title: 'The Sea Lanes: Monsoon and Mediterranean',
      bullets: [
        'The **monsoon reverses**: southwest June to September, northeast November to March.',
        'That is a free **round trip**. Sail out on one season, home on the next.',
        'Ships carry the **bulk** a camel cannot: grain, timber, iron, pottery.',
        'Rich ports sat on **position, not production**: Aden, Calicut, Malacca, Kilwa.',
        '**Srivijaya** taxed the Strait of Malacca, the gate between the two oceans.',
        'The **Mediterranean** is the fourth route: a sailing season rather than a monsoon, and a grain fleet feeding Rome.',
        'The two systems met at the **Red Sea**, so Indian pepper reached a Roman table.'
      ],
      image: {
        title: 'Indian Ocean',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png',
        caption: 'The Indian Ocean\'s shape matters: the monsoon blows one way for part of the year and the other way for the rest, creating predictable sailing lanes and a natural round-trip schedule. Port cities at the intersections, Aden, Calicut, Malacca, Kilwa, collected the wealth of trade passing through without producing most of what was traded.'
      }
    },
    {
      title: 'The Technologies That Made Distance Cheap',
      bullets: [
        'Know **one animal technology** and **one maritime technology**, with a date.',
        '**Yoke**: lets oxen pull a cart or a plow. Bulk, over short hauls.',
        '**Camel saddle** (North Arabian, in wide use by c. 300 CE): 200 to 300 kg across desert, days between drinks.',
        '**Stirrup** (China, 4th to 5th centuries CE): a braced seat, so longer rides and fighting on horseback.',
        '**Lateen sail**: triangular, so a ship can work at an angle to the wind instead of only with it.',
        '**Dhow**: planks sewn with coconut fiber, lateen rigged, the workhorse of the Arabian Sea.',
        'Knowing the **monsoon calendar** was itself a technology, and it was written down.',
        'The Americas had only the **llama**: about 30 kg, and it does not pull.'
      ],
      image: {
        title: 'Ship carved on the Borobudur temple, Java (c. 8th to 9th centuries CE)',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur%20ship.JPG',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Borobudur_ship.JPG',
        caption: 'A relief carved on Borobudur in central Java shows an ocean-going outrigger of the kind Austronesian sailors used across the Indian Ocean, complete with rigging, steering oars, and outrigger booms. It is a reminder that maritime technology in this network was not one invention from one place: Arab sewn dhows, Javanese outriggers, Chinese junks, and the lateen sail all worked the same water.'
      }
    },
    {
      title: 'What Moved That Nobody Sold: Crops, Water, Germs',
      bullets: [
        'Crops, farming methods, and disease all traveled with the cargo.',
        '**Rice and cotton** spread from South Asia west into Persia, Mesopotamia, and North Africa.',
        'Both need summer water, so the **irrigation had to travel too**.',
        'The **qanat**: a sloping tunnel carrying groundwater underground to the fields, so almost nothing evaporates.',
        '**Antonine Plague** (165 to 180 CE) ran through Rome. Severe epidemics hit **Han China** about 150 to 190 CE.',
        'The **Plague of Justinian** (541 CE) rode the grain ships to Constantinople.',
        'Say disease **contributed to** decline. It never caused a collapse by itself.'
      ]
    },
    {
      title: 'Religions Change on the Road, and the Bridge Forward',
      bullets: [
        'The word is **transformed**, not simply spread.',
        '**Buddhism** went up the Silk Roads into China, explained in **Daoist** vocabulary. **Chan** and **Pure Land** grew there, and Avalokiteshvara became **Guanyin**.',
        'Merchants paid for the **Mogao caves** at Dunhuang as insurance on a dangerous road.',
        '**Christianity** moved east first: **Armenia** c. 301 CE, **Aksum** c. 330 CE, the Tang capital by the Xi\'an stele of 781 CE.',
        'It stayed local in language: Ge\'ez in Ethiopia, Coptic in Egypt, Syriac across Persia.',
        '**Hinduism** traveled with merchants and Brahmin advisers, and Southeast Asian kings used it for legitimacy. **Angkor Wat** (begun c. 1113 CE) is the largest Hindu temple in the world.',
        '**Bridge to Unit 2**: all of this existed before the Mongols. They policed the network, they did not build it.',
        'Where routes cross, **wealth and power pile up**, and the most important cargo is often the one nobody was selling.'
      ],
      image: {
        title: 'Great Buddha, Cave 96, Mogao Caves at Dunhuang',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_Buddha,_Cave_96,_Mogao_Caves.jpg',
        caption: 'The Mogao Caves at Dunhuang, funded by Silk Road merchants seeking protection on the road, are the clearest visual proof that trade networks moved religion. A merchant who paid for a cave painting was buying spiritual insurance, buying into a Buddhist community that spanned the route, and leaving evidence that would survive 1,600 years for historians to read.'
      }
    }
  ],

  videos: [
    {
      title: 'The SILK ROADS [AP World Review, Unit 2 Topic 1]',
      url: 'https://www.youtube.com/watch?v=daiQ6aChKfk',
      youtubeId: 'daiQ6aChKfk',
      prompt: 'Watch for: what moved through the Silk Roads besides silk? How did the Mongol Empire change the network after c.1200, and what does that tell you about how trade networks depend on political conditions?'
    },
    {
      title: 'TED-Ed: The Silk Road, Connecting the Ancient World Through Trade',
      url: 'https://www.youtube.com/watch?v=vn3e37VWc0k',
      youtubeId: 'vn3e37VWc0k',
      prompt: 'Watch for: the specific non-goods John Green identifies moving through the Silk Roads. Can you add examples from Foundations 4 that he doesn\'t mention?'
    }
  ]

};
