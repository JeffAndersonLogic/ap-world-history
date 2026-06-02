window.FOUNDATION_TOPIC = {

  id: 'foundations-4',
  code: 'FOUNDATIONS 4',
  title: 'Trade Networks & Innovation',
  subtitle: 'How do trade networks transform societies?',
  heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',

  commandCopy: 'The single most important intellectual move in Day 4 is getting students past the idea that trade routes move goods. Trade routes are systems of human interaction that transform everything they touch. A Sogdian merchant carrying silk from Chang\'an to Samarkand is also carrying Tang court aesthetics, Buddhist monastery patronage networks, zoonotic diseases from densely populated Chinese cities, and — depending on who they are — Zoroastrian ritual practices. The goods are the most visible layer. The invisible layers are often historically more consequential. Students who understand this can analyze any trade network in AP World with real depth.',

  blockPlan: [
    ['0-10', 'Launch Question', 'Students write: What besides goods could travel along a trade route? List as many things as you can in 60 seconds.'],
    ['10-25', 'Map Check', 'Use the Map Module: students identify the three major Afro-Eurasian trade systems and one port city or oasis on each route.'],
    ['25-42', 'First & 10', 'Read the Battle of Talas narrative hook. Students identify one technology transfer, one mechanism of diffusion, and one unintended consequence.'],
    ['42-65', 'Lecture Cards', 'Five cards: Silk Roads and Tang Chang\'an, Indian Ocean monsoon system and port cities, Trans-Saharan network and West African gold empires, what else moved (disease, crops, religion, technology), and a bridge to Units 2 and 3.'],
    ['65-80', 'AP Skill Builder', 'Students write a complexity paragraph explaining how one trade network caused simultaneous changes across multiple regions.'],
    ['80-90', 'Checkpoint', 'Exit ticket and confidence reflection.']
  ],

  learningTargets: [
    'I can explain how the Silk Roads, Indian Ocean trade system, and Trans-Saharan network each operated — their geographic basis, merchant communities, and key goods.',
    'I can identify specific non-goods that traveled through trade networks: disease, technology, crops, religious practices, and people.',
    'I can explain the Battle of Talas (751 CE) as a specific example of technology transfer through conflict.',
    'I can write a complexity argument explaining how trade networks caused multiple simultaneous changes across different regions.'
  ],

  successCriteria: [
    'I can name at least three specific port cities or oasis towns on Afro-Eurasian trade routes and explain their geographic function.',
    'I can explain the Indian Ocean monsoon system — which months, which directions, which sailing routes — with enough specificity to show I understand how it worked mechanically.',
    'I can give at least two specific examples of non-goods traveling through trade networks, with dates and locations.',
    'I can write a complexity paragraph that identifies multiple effects of a single trade network and explains how they connected across regions.'
  ],

  timeline: [
    { date: 'c. 50–100 CE', event: 'The Periplus of the Erythraean Sea — a Greek merchant\'s handbook — documents Indian Ocean routes, ports, and goods from Egypt to India, showing the network was already organized and commercially sophisticated.' },
    { date: 'c. 300 CE', event: 'The North Arabian camel saddle transforms trans-Saharan trade: camels can now carry 200–300 kg loads across the Sahara, turning the desert from a barrier into a highway.' },
    { date: 'c. 650–750 CE', event: 'Arab conquest of Central Asia and North Africa integrates Islamic commercial law across trans-Saharan and Silk Road networks, reducing transaction costs for Muslim merchants across thousands of kilometers.' },
    { date: '751 CE', event: 'Battle of Talas: Tang China and the Abbasid Caliphate clash in Central Asia. Chinese papermakers captured among prisoners establish paper mills in Samarkand — a military defeat triggers a technology transfer that reshapes Islamic and eventually European intellectual culture.' },
    { date: 'c. 900–1200 CE', event: 'Srivijaya Empire controls the Strait of Malacca, extracting tolls from all maritime traffic between the Indian Ocean and South China Sea. Swahili city-states (Kilwa, Mombasa, Zanzibar) emerge as East African nodes of Indian Ocean exchange.' }
  ],

  timelinePrompt: 'Which moment best shows that trade networks moved more than goods — that exchange transformed the societies involved in ways that went far beyond commerce? Explain your choice.',

  map: {
    title: 'Map: Silk Roads and Afro-Eurasian Trade Networks',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
    caption: 'The Silk Road network was not one road — it was a branching system of overland and maritime routes connecting China, Central Asia, Persia, the Mediterranean, and India. The map shows the geographic logic: routes follow the path of least resistance through mountain passes, oasis towns, and navigable seas.',
    desc: 'Use this map as a trade network analyst: identify the chokepoints (where routes narrow and whoever controls them collects tolls), the relay stations (oasis cities where goods changed hands), and the junction points (where overland and maritime systems connected).',
    key: [
      { label: 'Overland Silk Roads', detail: 'Branching network from Chang\'an through the Tarim Basin (north and south routes around the Taklamakan Desert), converging at Kashgar, then west through Samarkand, Merv, and Nishapur to Persia and the Mediterranean.' },
      { label: 'Indian Ocean maritime system', detail: 'Monsoon-driven maritime network connecting East Africa, Arabia, Persia, India, Southeast Asia, and China. Southwest monsoon (June–Sept) drove ships east and north; northeast monsoon (Nov–Mar) drove them back. Natural round-trip schedule.' },
      { label: 'Trans-Saharan routes', detail: 'Camel caravan routes linking West African goldfields (Bambuk, Bure) to North African markets via oasis chains: Sijilmasa → Taghaza salt mines → Timbuktu → Niger Bend. Salt moved south; gold moved north.' },
      { label: 'Chokepoints', detail: 'Strait of Malacca (controlled by Srivijaya), Strait of Hormuz (Persian Gulf entrance), Aden (Red Sea mouth), Kashgar (where Silk Road branches converged) — whoever controlled these collected enormous revenue from passing trade.' },
      { label: 'Junction cities', detail: 'Chang\'an, Samarkand, Baghdad, Calicut, Kilwa, Timbuktu — cities whose wealth derived from their position at network junctions, not primarily from local production.' }
    ],
    questions: [
      'Identify two places on the map where a ruler could collect tolls from passing trade. What geographic feature created that chokepoint?',
      'Why would a city at the intersection of overland and maritime routes become wealthier than one on only a single route?',
      'The Sahara is visible on this map. Before c.300 CE, was it a barrier or a connector? What changed, and why?',
      'If you were a merchant in 900 CE moving pepper from South India to the Mediterranean, trace the most likely route. How many times would your goods change hands, and why?'
    ],
    prompt: 'Choose one trade network — Silk Roads, Indian Ocean, or Trans-Saharan. Identify one chokepoint or junction city on that network and explain why its geographic position made it economically or politically powerful.'
  },

  first10: {
    title: 'First & 10: A Defeat That Changed What People Read',
    embedUrl: 'first-and-10-foundations-4-trade-networks.html',
    paragraphs: [
      'In 751 CE, two empires collided in a river valley in Central Asia near the Talas River — in modern Kyrgyzstan, far from either of their capitals. On one side: Tang Dynasty forces, allied with local Central Asian rulers, pushing to maintain Chinese influence over the Silk Road oasis cities. On the other: Abbasid Caliphate forces under Ziyad ibn Salih, expanding Islamic political control eastward. It was not the largest battle in either empire\'s history. But among the prisoners the Abbasid forces captured were Chinese papermakers.',
      'Paper had been invented in China, credited to Cai Lun around 105 CE. For six centuries it had remained a Chinese technology. Within years of Talas, paper mills appeared in Samarkand. Within decades, they spread across the Islamic world — Baghdad had mills by 794 CE, Egypt by 900 CE, Morocco by 1100 CE, and Spain by 1150 CE. Paper was cheaper than parchment and more durable than papyrus. It enabled the mass production of books. The Islamic world\'s extraordinary intellectual flowering between 800 and 1200 CE — the translations at the House of Wisdom, al-Khwarizmi\'s algebra, Ibn Sina\'s medical encyclopedias, the works of Averroes — all of it was written on paper that reached the Islamic world because of a military defeat in a Central Asian river valley.',
      'This is what historians mean when they say trade networks — and the conflict and contact that accompanied them — moved more than goods. No one planned the paper technology transfer. It was an accident of war. But the Silk Road had created the conditions that made the accident possible: Chinese craftsmen were present in Central Asia because the trade routes brought them there. Their knowledge traveled with them. When the political situation changed, the knowledge stayed.',
      'The same logic applies to the other transformations that moved along Afro-Eurasian networks before 1200. Buddhism did not spread to China because Chinese emperors ordered it imported. It spread because Buddhist monks traveled alongside Silk Road merchants, because merchants patronized monasteries at oasis stops as religious insurance for their journeys, because Chinese rulers found Buddhist concepts of divine kingship politically useful. The Plague of Justinian (541 CE) did not spread from Egypt to Constantinople because anyone wanted it to — it spread because the same grain ships that fed Constantinople also carried rats from the Egyptian Nile Delta.',
      'Trade networks are systems. Everything that moves through them — goods, people, animals, ideas, pathogens — moves together. The Silk Roads, the Indian Ocean monsoon system, and the trans-Saharan caravan routes were not three separate phenomena. They were the circulatory system of the Afro-Eurasian world, and by c.1200 CE, that world\'s pulse was strong enough to sustain the most commercially sophisticated economies on earth.'
    ],
    prompt: 'Using evidence from the reading, explain one specific way the Battle of Talas (751 CE) illustrates the argument that trade networks moved more than goods. Then identify one other non-good that moved through Afro-Eurasian trade networks and explain how it traveled.'
  },

  beSurreal: {
    title: 'You Are a Papermaker Captured at Talas, 751 CE',
    desc: 'A memorable everyday-life detail from the moment technology transferred worlds.',
    intro: 'The battle is over. You are a prisoner. The soldiers speak Arabic.',
    detail: 'You make paper. That is your trade. In Chang\'an, paper is ordinary — cheap enough to wipe tables, used for tax records and poetry drafts and love letters. You have been making paper since your father taught you: soaking mulberry bark and hemp rags, beating the pulp into a slurry, lifting the screen through the vat, hanging the sheets to dry. It is not a prestigious trade. It is not dangerous. You never expected to be important. But the Abbasid officer who separated you from the other prisoners is asking very specific questions about your work. He wants to understand the vat. The screen. The drying process. You are not sure what you are about to change.',
    prompt: 'What does this ordinary craftsman\'s story reveal about how technology transfers through trade networks and conflict? What does it mean that one captured papermaker\'s knowledge changed the intellectual culture of the Islamic world for centuries?'
  },

  terms: [
    'trade network', 'Silk Roads', 'Indian Ocean trade', 'trans-Saharan trade',
    'monsoon winds', 'chokepoint', 'entrepôt', 'relay trade', 'Sogdian merchants',
    'caravanserai', 'technology transfer', 'cultural diffusion', 'Srivijaya Empire',
    'Swahili city-states', 'paper', 'Battle of Talas'
  ],

  termTable: [
    ['Relay trade', 'A system in which goods change hands multiple times along a trade route, with different merchants handling different segments. No single merchant traveled from China to Rome — goods were passed from Sogdian to Persian to Arab intermediaries, each taking a profit margin.'],
    ['Entrepôt', 'A port city or trading hub where goods from multiple origins are collected, stored, and redistributed. Entrepôts grow wealthy not by producing goods but by controlling the exchange between producers and consumers. Examples: Kilwa, Calicut, Malacca, Quanzhou.'],
    ['Caravanserai', 'A roadside inn on overland trade routes providing shelter, water, food, and stabling for merchants and their animals. Built and maintained by merchant communities (especially Sogdians) as capital investments that gave them structural advantages over competitors without the same infrastructure.'],
    ['Sogdian merchants', 'Iranian-speaking merchants from the oasis cities of Central Asia (Samarkand, Bukhara) who dominated the middle segment of Silk Road trade from c.200–900 CE. Operated through family diaspora networks, spoke multiple languages, and maintained trading colonies from China to the Byzantine Empire.'],
    ['Srivijaya Empire', 'A maritime empire (c.650–1377 CE) based on Sumatra that controlled the Strait of Malacca — the chokepoint between the Indian Ocean and South China Sea. Extracted tolls from all passing trade; became enormously wealthy and a major center of Mahayana Buddhist learning.'],
    ['Technology transfer', 'The movement of productive knowledge or techniques from one society to another through trade, conflict, migration, or deliberate adoption. The Battle of Talas (751 CE) is the classic example: Chinese papermaking knowledge reached the Islamic world via captured craftsmen.']
  ],

  evidence: {
    title: 'Evidence Lab: Trade Networks in Material Form',
    task: 'Archaeological evidence is often the most powerful proof that trade networks existed and what they moved. Each item below is a piece of material evidence for Afro-Eurasian trade connections. Your job is to use it to make a historical argument — not describe what it is, but explain what it proves about trade networks.',
    prompt: 'Choose one piece of evidence. Write 2–3 sentences explaining what it proves about Afro-Eurasian trade networks — specifically, how far goods traveled, what else may have traveled with them, and what the evidence reveals about the societies connected by that network.',
    items: [
      {
        title: 'Song Dynasty Celadon Found at Kilwa, East Africa',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_export_porcelain_bowl.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chinese_export_porcelain_bowl.jpg',
        caption: 'Chinese celadon pottery from the Song Dynasty (960–1279 CE) has been excavated at Kilwa on the East African coast — more than 7,000 km from its origin. Chinese porcelain sherds are among the most reliable markers of Indian Ocean trade connections: they are durable, identifiable by kiln and period, and found at virtually every Indian Ocean port city that participated in the network. Their presence at Kilwa proves not just that goods traveled but that the Song Dynasty\'s merchant fleet was actively participating in Indian Ocean commerce.',
        prompt: 'What does the presence of Song Dynasty celadon at Kilwa prove about the Indian Ocean trade system? What else — beyond porcelain — was likely moving along the same routes that carried this pottery from China to East Africa?'
      },
      {
        title: 'Dunhuang Mogao Cave Buddhist Art (Silk Road, c.4th–14th centuries CE)',
        url: '../assets/images/module-cards/mogao-caves-dunhuang.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mogao_Caves_Buddha_Statue.jpg',
        caption: 'The Mogao Caves at Dunhuang — an oasis city on the Silk Road in northwestern China — contain 492 temple caves decorated with Buddhist murals and sculptures commissioned by Silk Road merchants between the 4th and 14th centuries CE. Merchants funded the caves as acts of religious patronage, seeking divine protection for their dangerous journeys. The caves document 1,000 years of Silk Road cultural exchange: artistic styles from India, Central Asia, Persia, and China blend in a single location. The caves were sealed around 1000 CE and rediscovered in 1900, preserving the world\'s largest repository of early printed books and manuscripts.',
        prompt: 'The Dunhuang caves were funded by merchants, not monks or emperors. What does this reveal about the relationship between trade and the spread of Buddhism? How does this evidence challenge the assumption that religious diffusion and commercial exchange were separate processes?'
      }
    ]
  },

  aiCoach: {
    title: 'Socrates Coach: Trade as Transformation',
    intro: 'Use one of these prompts to push your thinking past listing goods and toward historical argument about transformation. The goal is to explain what changed — in specific societies, in specific ways — because a trade network existed.',
    prompts: [
      'What moved through this network besides goods? For each non-good you name, explain specifically how it traveled and what changed when it arrived.',
      'Who controlled the chokepoints on this trade network, and how did that geographic control translate into political or economic power? Give a specific example.',
      'What was the unintended consequence of this trade network — something that changed that no one planned or wanted? How does that unintended consequence reveal how trade systems actually work?',
      'How would the world at c.1200 look different if this trade network had not developed? What specific changes would be absent — in religion, technology, wealth distribution, or political power?'
    ],
    responsePrompt: 'Use one Socrates prompt to revise your explanation. Your revised answer should make a specific causal claim about how a trade network transformed a society — not just moved goods through it.'
  },

  skill: {
    title: 'AP Skill Builder: Complexity',
    desc: 'Explain how one trade network caused simultaneous changes across multiple regions.',
    intro: 'Complexity on the AP exam means demonstrating that historical developments had multiple causes or effects, or that a single development connected different societies in different ways simultaneously. Trade networks are ideal complexity subjects because they produced different effects in different places at the same time — the Indian Ocean trade enriched Kilwa\'s rulers, funded Song China\'s state through customs revenue, spread Islam through Sufi merchant networks into Southeast Asia, and moved plague bacilli alongside pepper and porcelain. A strong complexity argument names multiple effects, explains how they connected, and shows the student understands the network as a system rather than a one-directional pipeline.',
    steps: [
      'Choose one trade network: Silk Roads, Indian Ocean, or Trans-Saharan.',
      'Identify at least THREE different things the network moved or caused: one economic effect, one cultural or religious effect, one technological or biological effect.',
      'Explain each effect with a specific historical example — a named city, merchant group, technology, disease, or religious tradition.',
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
      'I explained the mechanism — how did each non-good travel? Through merchants? Monks? Conflict? Animal vectors?',
      'I described a specific historical consequence — what changed in a named society because of what moved through this network?'
    ]
  },

  exitTicket: 'How do trade networks transform societies — and why is it wrong to think of them as only moving goods?',

  lecture: [
    {
      title: 'The Silk Roads: Relay, Not Highway',
      bullets: [
        'The Silk Road was not one road — it was a **branching relay network** of overland routes from Chang\'an west through the Tarim Basin (north and south of the Taklamakan Desert), converging at Kashgar, continuing through Samarkand and Merv to Persia and the Mediterranean. No single merchant traveled the whole route: goods changed hands at each oasis city, each merchant taking a profit and assuming the next segment\'s risk.',
        '**Tang Chang\'an** (population 1–2 million, c.700–750 CE) was the eastern anchor: the Western Market housed permanent colonies of Sogdian, Persian, Arab, Nestorian Christian, and Jewish merchants. Zoroastrian fire temples and a mosque existed within the Tang capital — the state officially recognized Muslim commercial courts for disputes among foreign merchants.',
        'The **Sogdians** — Iranian-speaking merchants from Samarkand and Bukhara — were the indispensable middlemen of the central segment. They built caravanserais, spoke multiple languages, maintained family diaspora networks from China to Byzantium, and carried not just silk but Buddhist art, Zoroastrian texts, Manichaean manuscripts, and Nestorian Christianity. The "Ancient Sogdian Letters" (c.313 CE), found in a watchtower near Dunhuang, are the oldest surviving merchant correspondence from the Silk Road.',
        '**What moved west from China**: silk, porcelain, paper (after 751 CE), tea, gunpowder (later), cast iron. **What moved east toward China**: horses (the Tang military desperately needed Central Asian horses), glassware, cotton textiles, spices, Buddhist texts and monks, silver, and gold.'
      ],
      image: {
        title: 'Silk Road Map',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
        caption: 'The Silk Road network shows the geographic logic of relay trade: oasis cities at regular intervals across the Tarim Basin served as nodes where goods changed hands, merchants rested, and cultural exchange happened. Dunhuang — visible near the eastern end — was where the route entered China and where the Mogao Cave Buddhist art was commissioned by merchants seeking divine protection.'
      }
    },
    {
      title: 'The Indian Ocean: Nature\'s Round-Trip Ticket',
      bullets: [
        'The Indian Ocean monsoon reverses seasonally: **southwest monsoon (June–September)** drives ships from Arabia and East Africa toward India and Southeast Asia; **northeast monsoon (November–March)** drives them back. This natural wind reversal created a **built-in round-trip sailing schedule** — merchants could plan annual voyages without fighting the wind, making the Indian Ocean the world\'s first sustained maritime trade network.',
        'By c.1200 CE, the network connected **six major port city clusters**: Aden (Red Sea gateway), Hormuz (Persian Gulf gateway), Calicut and Quilon (India\'s Malabar spice coast), Malacca (Strait of Malacca chokepoint), Quanzhou (Song China\'s primary international port), and Kilwa (East African gold entrepôt). Each was a junction city — wealthy not because of what it produced locally but because of its geographic position in the network.',
        'The **Srivijaya Empire** (c.650–1377 CE, based in Sumatra) controlled the Strait of Malacca — the 900-km passage between the Indian Ocean and South China Sea through which all maritime traffic between India and China had to pass. Srivijaya extracted tolls, became enormously wealthy, and funded one of the most important centers of Mahayana Buddhist learning outside India.',
        '**Kilwa** (modern Tanzania) shows the network\'s reach most dramatically: Song Dynasty celadon excavated there proves Chinese merchant ships were participating in East African trade. Gold from Great Zimbabwe\'s interior moved through Kilwa to India and Arabia; Chinese porcelain and Indian cotton textiles moved back. The Indian Ocean was not an Asian system — it connected four continents.'
      ],
      image: {
        title: 'Indian Ocean',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png',
        caption: 'The Indian Ocean\'s shape matters: the monsoon winds blow northeast to southwest and back in a seasonal cycle, creating predictable sailing lanes. Port cities positioned at the intersections of these lanes — Aden, Calicut, Malacca, Kilwa — collected the wealth of trade passing through them without producing most of what was traded.'
      }
    },
    {
      title: 'Trans-Saharan Trade: Desert as Highway',
      bullets: [
        'Before the **North Arabian camel saddle** (c.300 CE), the Sahara was a genuine barrier. After it: the dromedary camel could carry 200–300 kg of cargo, travel 30–40 km per day, go 5–7 days without water, and eat desert scrub. The camel transformed 9.2 million km² of desert into a network of caravan routes linking five continents\' worth of exchange.',
        'The trade ran on **geographic complementarity**: West Africa had gold (Bambuk and Bure goldfields in modern Mali/Guinea); the Sahara had salt (Taghaza rock salt mines, modern Algeria-Mali border); North Africa and the Mediterranean needed both. Salt moved south in exchange for gold moving north — two commodities whose production was geographically separated but whose demand was universal.',
        'Islam provided the **commercial infrastructure**: after Arab conquest of North Africa (c.640–710 CE), Islamic contract law (*muamalat*) standardized agreements, the *hawala* credit system allowed value transfer without physically moving gold, and mosque and *khan* (caravanserai) networks provided hospitality and dispute resolution. Muslim merchants could operate across 5,000 km of desert using shared legal and financial frameworks.',
        'The **Ghana Empire** (c.700–1100 CE) and **Mali Empire** (c.1235–1400 CE) built power by controlling the southern termini of trans-Saharan routes — taxing every load of gold and salt that passed through their territory. Mansa Musa\'s 1324 hajj (covered in Foundations 2) was only possible because generations of trans-Saharan trade had made Mali one of the wealthiest states on earth.'
      ],
      image: {
        title: 'Camel Caravan near the Pyramids',
        url: '../assets/images/module-cards/sahara-caravan-1300ce.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravan_near_Sphinx.jpg',
        caption: 'The camel caravan is the human-scale image of trans-Saharan trade: a typical large caravan numbered 1,000–12,000 camels, traveled in organized columns with armed escorts, and carried not just gold and salt but enslaved people, kola nuts, copper, and textiles. The camel\'s physiology made this possible — no other animal could sustain the load and the water deficit of a Saharan crossing.'
      }
    },
    {
      title: 'What Else Moved: Disease, Technology, Crops, Religion',
      bullets: [
        '**Disease — Plague of Justinian (541 CE)**: Bubonic plague (*Yersinia pestis*) moved from Central Africa or Central Asia through the Indian Ocean grain trade to Egypt, then by sea to Constantinople. Grain ships carried rats; rats carried fleas; fleas carried plague. The Eastern Roman Empire lost an estimated 25–50 million people. The same trade infrastructure that fed Constantinople killed it. Disease is the most dramatic proof that trade networks move more than goods.',
        '**Technology — Paper (751 CE)**: Chinese papermakers captured at the Battle of Talas established mills in Samarkand within years. Paper reached Baghdad by 794 CE, enabling the House of Wisdom\'s translation movement. Al-Khwarizmi wrote algebra on it. Ibn Sina\'s *Canon of Medicine* was copied on it. Paper reached Europe via Islamic Spain (c.1150 CE) and underpinned Gutenberg\'s printing press in 1440. One technology transfer at one military defeat rippled through 700 years of intellectual history.',
        '**Crops — Champa Rice (c.1012 CE)**: Song Emperor Zhenzong imported fast-maturing Champa rice from Vietnam and distributed 30,000 bushels to Yangtze Delta farmers. Champa rice matured in 60 days (vs. 150 for standard varieties), enabling **double-cropping** — two harvests per year. This single agricultural transfer is a primary driver of Song China\'s population growth from 60 million (960 CE) to 100+ million (c.1200 CE). A crop that originated in Southeast Asia transformed the most populous society on earth.',
        '**Religion — Islam via Indian Ocean merchants**: Islam spread to Southeast Asia primarily through Muslim merchants operating Indian Ocean routes, not through conquest. Malay and Javanese port rulers converted because Muslim merchant networks offered commercial advantages — shared legal frameworks, access to the *hajj* network, Arabic literacy. The Malay sultanate of Samudra-Pasai (c.1267 CE, in modern Aceh, Sumatra) is the earliest documented Islamic polity in Southeast Asia — a trading state converted by traders, not armies.'
      ],
      image: {
        title: 'Dunhuang Mogao Caves Buddhist Art',
        url: '../assets/images/module-cards/mogao-caves-dunhuang.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mogao_Caves_Buddha_Statue.jpg',
        caption: 'The Mogao Caves at Dunhuang — funded by Silk Road merchants seeking divine protection — are the most powerful visual proof that trade networks moved religion. A merchant who funded a cave painting was simultaneously investing in spiritual insurance, participating in Buddhist community networks, and leaving evidence that will survive 1,600 years for historians to read.'
      }
    },
    {
      title: 'Bridge to AP World: Units 2 and Beyond',
      bullets: [
        'Unit 2 asks: *why did trade intensify after c.1200?* The answer only makes sense if students understand what already existed before 1200. The Mongol Empire did not create Silk Road trade — it pacified and systematized a network already operating for 1,400 years. Zheng He\'s voyages (1405–1433 CE) did not discover the Indian Ocean — they were diplomatic missions into a commercial system China had been participating in for centuries.',
        'The **junction city principle** applies across AP World: wherever two or more trade routes cross, wealth and power accumulate. Students can use this to predict which societies will matter: Malacca controls the Strait, so Malacca becomes powerful. The Ottoman Empire captures Constantinople (1453 CE), controlling the eastern Mediterranean junction, and immediately becomes a commercial empire. The Portuguese reroute Indian Ocean trade around Africa, bypassing the Ottoman junction — and Ottoman power begins to decline.',
        'The **non-goods principle** explains some of AP World\'s most important events: the Black Death (Unit 2) travels Mongol trade routes. The Columbian Exchange (Unit 4) is a biological version of the same process that moved Champa rice and plague bacilli. The spread of Islam to West Africa, Southeast Asia, and South Asia (Units 1–2) follows merchant networks, not conquest routes.',
        'Students who arrive at Unit 1 knowing these principles can apply them immediately: *Song China\'s prosperity* → Yangtze Delta rice surplus plus Indian Ocean customs revenue. *Dar al-Islam\'s intellectual culture* → paper technology plus madrasa infrastructure plus cross-continental scholarly networks sustained by the hajj. The Foundations unit built the operating system. Unit 1 is where they start running the programs.'
      ],
      image: {
        title: 'Kilwa Kisiwani ruins, Tanzania (Swahili coast, c.9th–16th centuries CE)',
        url: '../assets/images/module-cards/kilwa-kisiwani-mosque.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kilwa_Kisiwani_great_mosque.jpg',
        caption: 'The ruins of the Great Mosque at Kilwa Kisiwani — the largest mosque in sub-Saharan Africa before the 16th century — were built with the wealth of Indian Ocean trade. Chinese celadon, Persian glass, and Indian textiles found in Kilwa\'s archaeological sites prove that this East African city was a genuine node of a world-scale commercial system, not a peripheral backwater.'
      }
    }
  ],

  videos: [
    {
      title: 'Heimler\'s History: The Silk Roads (Unit 2)',
      url: 'https://www.youtube.com/watch?v=4zL8DsGqf_I',
      youtubeId: '4zL8DsGqf_I',
      prompt: 'Watch for: what moved through the Silk Roads besides silk? How did the Mongol Empire change the network after c.1200 — and what does that tell you about how trade networks depend on political conditions?'
    },
    {
      title: 'Crash Course World History: The Silk Road',
      url: 'https://www.youtube.com/watch?v=vn3e37VWc0k',
      youtubeId: 'vn3e37VWc0k',
      prompt: 'Watch for: the specific non-goods John Green identifies moving through the Silk Roads. Can you add examples from Foundations 4 that he doesn\'t mention?'
    }
  ]

};
