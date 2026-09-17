#!/usr/bin/env node
'use strict';

/**
 * One-time Unit 2 source migration.
 *
 * The second instructional-coherence audit originally exposed drift in several
 * generated Deep Reading pages. Those HTML pages and the Unit 2 eBook are both
 * generated from scripts/lib/deep-reading-content/topic-2-x.js, so the durable
 * repair belongs in those source modules, not in generated HTML.
 *
 * This script updates only the audited topic sections, preserves the rest of
 * each rich reading, and serializes the resulting plain content object back to
 * its canonical JS source. It is idempotent: running it again writes the same
 * result.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content');

function sourcePath(topic) {
  return path.join(SOURCE_DIR, `topic-${topic}.js`);
}

function load(topic) {
  const file = sourcePath(topic);
  delete require.cache[require.resolve(file)];
  return require(file);
}

function save(topic, data) {
  const file = sourcePath(topic);
  const header = `'use strict';\n\n/**\n * Canonical Deep Reading source for Topic ${topic}.\n * Generated student chapter and Unit eBook must both be built from this object.\n * Unit 2 instructional spine aligned September 2026.\n */\n\n`;
  fs.writeFileSync(file, `${header}module.exports = ${JSON.stringify(data, null, 2)};\n`);
  console.log(`aligned ${path.relative(ROOT, file)}`);
}

function empire(data, id) {
  const found = data.empires.find(item => item.id === id);
  if (!found) throw new Error(`${data.topicKey}: missing section ${id}`);
  return found;
}

function repair21() {
  const data = load('2-1');
  data.deck = 'Rising demand made long-distance exchange worth the cost. Caravanserais, credit, money economies and periods of political stability lowered trade friction; expanding exchange then strengthened trading cities and encouraged producers to serve distant markets.';
  data.meta = ['Five sections', 'Demand, systems, cities, production', 'Read alongside the First & 10'];
  data.howTo.intro = 'Read the chapter as one economic chain. Section 01 explains the supporting political conditions, section 02 shows the merchant cost problem, section 03 shows the infrastructure and finance that reduced friction, section 04 explains why demand changed production, and section 05 shows how trading cities and the network reinforced one another.';
  data.howTo.steps = [
    '<b>01 Political stability:</b> what the Pax Mongolica changed about merchant risk.',
    '<b>02 The caravan as a firm:</b> capital, animals, staff, speed, tolls and risk.',
    '<b>03 Caravanserai and credit:</b> physical and financial infrastructure solving the same merchant problem.',
    '<b>04 Demand and production:</b> why luxury demand changed what distant producers made.',
    '<b>05 Cities and the feedback loop:</b> Kashgar, Samarkand and the growth of trade volume and range.',
    '<b>Then the closing section</b>, which turns the economic chain into AP-ready comparison and causation.'
  ];

  const i4 = data.empires.findIndex(item => item.id === 'cargo');
  if (i4 < 0 && !data.empires.some(item => item.id === 'production')) throw new Error('2.1 missing cargo/production section');
  const production = {
    id: 'production', num: '04', accent: 'oxide', name: 'Demand and Productive Response', navLabel: 'Demand and production',
    dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Distant markets change local output',
    thesis: 'The Silk Roads expanded because consumers wanted scarce, high-value goods, and that demand did more than move existing products: it encouraged artisans and manufacturers to produce more for export.',
    parts: [
      { heading: 'Luxury demand supplied the incentive', blocks: [
        { p: 'Long-distance overland exchange was expensive. Merchants therefore concentrated on goods valuable enough to justify months of transport, tolls and risk. <b>Silk, fine textiles, porcelain, medicines, gems and other luxury goods</b> could command prices high enough in distant markets to make that journey worthwhile.' },
        { p: 'Demand is the beginning of the causal chain. Caravanserais and credit explain how merchants reduced friction, but merchants still needed a reason to accept the remaining cost. Growing Afro-Eurasian demand for luxury products provided that incentive.' }
      ]},
      { heading: 'Producers responded to distant markets', blocks: [
        { p: 'As demand widened, <b>Chinese, Persian and Indian artisans and merchants expanded production of textiles and porcelain for export</b>. Producers increasingly served consumers they would never meet, linking local workshops to interregional markets.' },
        { p: 'The CED also highlights expanded <b>iron and steel production in China</b>. The important mechanism is productive response: larger and more reliable markets can make increased output profitable, so network growth changes production as well as transportation.' },
        { note: { kind: 'misconception', label: 'Common mistake to avoid', html: 'Do not reduce the topic to a cargo list. A named good becomes useful evidence only when you connect demand to merchant incentive or connect expanding markets to increased productive capacity.' } }
      ]}
    ],
    useThis: {
      tool: 'Demand → productive response. <em>The mechanism is that distant consumers raise the potential return on export goods, so artisans and merchants have an incentive to expand output for markets beyond their own region.</em>',
      limit: 'Not every good moved overland and not every producer responded equally. High transport costs favored high-value goods, while bulk cargo often moved more cheaply by sea.',
      comparison: 'Against the <em>Indian Ocean</em>: both systems connected producers to distant consumers, but cheaper maritime transport could profitably carry far more bulky cargo.'
    },
    terms: [
      ['Luxury demand', 'Demand for scarce, high-value goods strong enough to justify expensive interregional transport.'],
      ['Productive capacity', 'The ability of an economy to produce goods; expanding markets can encourage that capacity to grow.'],
      ['Porcelain', 'A high-value Chinese manufactured good produced in greater quantities for expanding export markets.'],
      ['Textiles', 'Major Chinese, Persian and Indian exports whose production expanded with interregional demand.'],
      ['Iron and steel', 'Chinese manufactured output that the CED identifies as expanding alongside wider economic growth.']
    ]
  };
  if (i4 >= 0) data.empires[i4] = production;
  else data.empires[data.empires.findIndex(item => item.id === 'production')] = production;

  const i5 = data.empires.findIndex(item => item.id === 'decline');
  if (i5 < 0 && !data.empires.some(item => item.id === 'cities')) throw new Error('2.1 missing decline/cities section');
  const cities = {
    id: 'cities', num: '05', accent: 'gold', name: 'Cities and the Feedback Loop', navLabel: 'Cities and the feedback loop',
    dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Kashgar, Samarkand, volume and range',
    thesis: 'As trade became easier and more profitable, the network expanded in volume and geographic range. Strategic trading cities grew because merchants repeatedly needed places to stop, exchange, finance and resupply.',
    parts: [
      { heading: 'Kashgar and Samarkand were commercial nodes', blocks: [
        { p: '<b>Kashgar</b> sat near the western edge of the Tarim Basin where routes around the Taklamakan converged before continuing toward Central Asia. <b>Samarkand</b> occupied another strategic position farther west. Neither city produced every good passing through it. Their value came from connecting merchants, routes, services and markets.' },
        { p: 'A busy node supports warehouses, brokers, money changing, animal markets, lodging and specialized labor. As the number of merchants rises, demand for those services rises too. That is how greater trade volume can translate into urban growth.' }
      ]},
      { heading: 'The system reinforced itself', blocks: [
        { p: 'The causal chain loops back on itself: <b>luxury demand</b> gives merchants an incentive; <b>caravanserais, credit, banking and money economies</b> lower cost and risk; <b>relative political stability</b> can lower risk further; trade then expands in <b>volume and geographic range</b>; cities such as Kashgar and Samarkand grow; and larger markets encourage producers to expand output.' },
        { p: 'This is the main Topic 2.1 story. Religions, technologies and disease also traveled through connected Afro-Eurasia, but those consequences receive their own focused treatment in Topics 2.5 and 2.6. Topic 2.2 next examines the Mongol Empire that provided one important period of political support for overland exchange.' },
        { note: { kind: 'howknow', label: 'AP synthesis', html: 'If your explanation can be written as demand → lower friction → more exchange → city growth → productive response, and each arrow has a mechanism, you have the topic. Everything else is supporting evidence or a bridge to the later Unit 2 consequences.' } }
      ]}
    ],
    useThis: {
      tool: 'Trading nodes as an effect of network growth. <em>The mechanism is that increasing traffic creates repeated demand for storage, finance, lodging, resupply and brokerage, so strategically located cities grow by servicing exchange.</em>',
      limit: 'A route map alone cannot prove trade volume or urban prosperity. Use cities as evidence when you can explain the services and strategic position that made them important.',
      comparison: 'Against the <em>Trans-Saharan network</em>: Samarkand and Timbuktu both prospered as nodes, but the environmental and transportation problems surrounding them were different.'
    },
    terms: [
      ['Kashgar', 'A major Central Asian trading city near the Tarim Basin where routes converged and merchants connected east-west corridors.'],
      ['Samarkand', 'A major Central Asian commercial city whose strategic location made it an important node in overland exchange.'],
      ['Trade volume', 'The quantity of exchange moving through a network.'],
      ['Geographic range', 'The spatial reach of a network and the regions regularly linked through exchange.'],
      ['Feedback loop', 'A process in which network growth strengthens cities and production, which in turn makes further exchange easier or more profitable.']
    ]
  };
  if (i5 >= 0) data.empires[i5] = cities;
  else data.empires[data.empires.findIndex(item => item.id === 'cities')] = cities;

  if (data.closing && Array.isArray(data.closing.pairs) && data.closing.pairs.length >= 4) {
    data.closing.pairs[3] = {
      category: 'Causation',
      title: 'Demand, lower friction, cities and production belong in one chain',
      body: 'Growing demand for high-value goods gave merchants a reason to accept long-distance costs. Caravanserais, credit, bills of exchange, banking houses and paper money reduced some of those costs and risks, while periods such as the Pax Mongolica could make routes safer. As exchange increased in volume and range, nodes such as Kashgar and Samarkand grew and Chinese, Persian and Indian producers expanded output for distant markets. The strongest Topic 2.1 answer treats those developments as one economic system rather than as separate facts.'
    };
  }
  save('2-1', data);
}

function repair22() {
  const data = load('2-2');
  data.howTo.steps = data.howTo.steps.map(step => step.includes('04 What moved')
    ? '<b>04 What moved:</b> travelers and specialists, plus the required transfer examples: Greco-Islamic medical knowledge, numbering systems and the Uyghur script.'
    : step);
  const exchange = empire(data, 'exchange');
  const heading = 'The three CED transfers to know explicitly';
  const transferPart = {
    heading,
    blocks: [
      { p: 'Mongol-era connectivity matters because knowledge and practices crossed regional boundaries. The CED names three transfer examples students should be able to use explicitly: <b>Greco-Islamic medical knowledge moving toward western Europe</b>, <b>numbering systems moving into Europe</b>, and Mongol rulers adopting the <b>Uyghur script</b> for writing and administration.' },
      { p: 'The first two examples connect the Mongol period to a broader Eurasian transfer system rather than claiming that Mongol rulers personally delivered every text. The third runs in the opposite direction: conquerors borrowed a useful cultural technology from a conquered or incorporated people. Together they show that imperial expansion intensified contact in more than one direction.' },
      { note: { kind: 'howknow', label: 'AP evidence checkpoint', html: 'If a prompt asks for the significance of Mongol connectivity, avoid the generic phrase “ideas spread.” Name a transfer, give its direction, and explain what intensified contact made possible.' } }
    ]
  };
  exchange.parts = exchange.parts.filter(part => part.heading !== heading);
  const specialistIndex = exchange.parts.findIndex(part => part.heading === 'Specialists and sciences');
  if (specialistIndex >= 0) exchange.parts.splice(specialistIndex, 0, transferPart);
  else exchange.parts.push(transferPart);
  exchange.terms = exchange.terms || [];
  const existing = new Set(exchange.terms.map(row => row[0]));
  [
    ['Greco-Islamic medical knowledge', 'Medical learning rooted in Greek traditions and developed in the Islamic world that circulated toward western Europe through intensified Eurasian contact.'],
    ['Numbering systems', 'South Asian mathematical notation transmitted through the Islamic world and increasingly adopted in Europe.'],
    ['Uyghur script', 'A writing system adopted by Mongol rulers for Mongolian administration, illustrating cultural borrowing by conquerors.']
  ].forEach(row => { if (!existing.has(row[0])) exchange.terms.push(row); });
  save('2-2', data);
}

function repair25() {
  const data = load('2-5');
  data.deck = 'Intensified exchange changed culture in three major ways: traditions and technologies diffused across regions, the fortunes of cities changed with trade and productivity, and more travelers wrote accounts of the increasingly connected Afro-Eurasian world.';
  data.meta = ['Five sections', 'Diffusion, cities, travel writing', 'Read alongside the First & 10'];
  data.howTo.intro = 'Section 01 explains how diffusion works. Sections 02 and 03 trace beliefs and technologies. Sections 04 and 05 protect the two developments most easily lost in a generic “things spread” lesson: changing urban fortunes and the growth of written travel accounts.';
  data.howTo.steps = [
    '<b>01 How a thing travels:</b> carriers, routes, adoption and the difference between diffusion and independent invention.',
    '<b>02 Religions in motion:</b> Buddhism, Hinduism and Islam on named routes.',
    '<b>03 Technologies:</b> paper and gunpowder as traceable examples of knowledge movement.',
    '<b>04 Cities in motion:</b> why productivity and trade could support urbanization while disruption or route shifts could weaken cities.',
    '<b>05 Travelers write the world:</b> Ibn Battuta, Marco Polo and Margery Kempe as evidence of intensified mobility.',
    '<b>Then the closing section</b>, which turns the three cultural consequences into AP-ready explanation.'
  ];

  const citySection = {
    id: 'material', num: '04', accent: 'oxide', name: 'Cities Rise, Cities Decline', navLabel: 'Cities rise and decline',
    dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Urban fortunes in changing networks',
    thesis: 'Intensified exchange did not make every city grow forever. Rising productivity and trade could support urbanization, while warfare, political disruption and shifts in routes could leave older centers behind.',
    parts: [
      { heading: 'Why trade could produce urban growth', blocks: [
        { p: 'A successful trade node concentrates services merchants need: brokers, artisans, warehouse workers, money changers, religious specialists, administrators and transport workers. As exchange expands, the market for those services expands too. That is one reason commercial nodes such as <b>Samarkand</b>, Indian Ocean ports and trans-Saharan centers could support larger urban populations.' },
        { p: 'Higher agricultural productivity could reinforce the same process. A city can grow only if the surrounding economy produces enough food to support people who are not farming. When productivity and exchange rose together, more people could live in towns and specialize in non-agricultural work.' }
      ]},
      { heading: 'Why cities could also decline', blocks: [
        { p: 'Urban success depended on the network continuing to pass through the city. War could destroy infrastructure or population. Political breakdown could make a corridor unsafe. A shift in commercial routes could move traffic toward a different node. In each case, the city loses the repeated flows of merchants, revenue and demand that had supported its growth.' },
        { p: 'The CED point is therefore a change-over-time argument, not a claim that connectivity always creates growth: <b>changing productivity and trade networks changed the fortunes of cities in both directions.</b>' },
        { note: { kind: 'misconception', label: 'Common mistake to avoid', html: 'Do not turn this into a list of famous cities. For each example, state the mechanism connecting trade or productivity to urban growth or decline.' } }
      ]}
    ],
    useThis: {
      tool: 'Urban fortunes as a network effect. <em>When a city sits on a busy route, exchange creates demand for services and specialized labor; when security, politics or routes change, that demand can move elsewhere.</em>',
      limit: 'Connectivity is not a guarantee of permanent urban growth. The same network can redirect traffic away from one center while enriching another.',
      comparison: 'Against <em>Topic 2.6</em>: changing cities are a social/economic consequence of connectivity; crops and pathogens are the environmental consequences treated next.'
    },
    terms: [
      ['Urbanization', 'Growth in the share or number of people living in towns and cities, often supported by productivity and commercial specialization.'],
      ['Commercial node', 'A city whose location and services make it a repeated stopping, transfer or exchange point.'],
      ['Route shift', 'A change in where exchange flows, which can enrich new nodes and weaken older ones.'],
      ['Urban decline', 'Loss of population, commerce or political importance as the systems supporting a city weaken.']
    ]
  };

  const travelers = {
    id: 'words', num: '05', accent: 'gold', name: 'Travelers Write the Connected World', navLabel: 'Travelers write the world',
    dates: '13th to 15th centuries &nbsp;·&nbsp; Mobility becomes written evidence',
    thesis: 'One consequence of intensified exchange was that more travelers recorded what they encountered. Their accounts are not neutral windows, but their existence is evidence of expanding mobility and contact.',
    parts: [
      { heading: 'Three travelers the CED names', blocks: [
        { p: '<b>Marco Polo</b>, a Venetian associated with travel across Eurasia in the late thirteenth century, produced an account that gave European readers descriptions of Asian societies and the Yuan world. <b>Ibn Battuta</b>, a Moroccan Muslim jurist, traveled across Africa and Asia during the fourteenth century. His <em>Rihla</em> records both the reach of Islamic networks and the variety within them.' },
        { p: '<b>Margery Kempe</b>, an English Christian pilgrim of the early fifteenth century, traveled to religious destinations including Jerusalem and Rome and later dictated an account of her experiences. Her purpose and route differed from Polo and Ibn Battuta, which is exactly why she is useful: intensified networks supported many kinds of mobility, not only merchants and diplomats.' }
      ]},
      { heading: 'Use travel writing as evidence, not as unsourced fact', blocks: [
        { p: 'Travel accounts tell us what a particular observer chose to notice, understood and wanted an audience to hear. Polo’s text was shaped in literary collaboration, Ibn Battuta dictated from memory after decades of travel, and Kempe’s account is intensely devotional. Those limits determine the kinds of claims each source can support.' },
        { p: 'For Topic 2.5, the larger pattern is straightforward: intensified trade, pilgrimage, diplomacy and religious networks moved more people over long distances, and some of those travelers produced written accounts that circulated knowledge about distant societies.' },
        { note: { kind: 'howknow', label: 'How to source the traveler', html: 'Ask purpose, audience and route. A Muslim jurist, Venetian traveler and English pilgrim did not see the same world in the same way, even when they used overlapping networks.' } }
      ]}
    ],
    useThis: {
      tool: 'The travel account as evidence of connectivity. <em>More reliable routes and repeated interregional contacts made long journeys more practical, and written accounts converted those journeys into knowledge for audiences who never traveled themselves.</em>',
      limit: 'Travelers are selective observers. Their accounts prove contact and perception more readily than they prove that their descriptions represent every person in a society.',
      comparison: 'Ibn Battuta, Marco Polo and Margery Kempe traveled for different reasons, allowing students to compare how purpose and identity shape what a connected world looks like in a source.'
    },
    terms: [
      ['Ibn Battuta', 'Moroccan Muslim jurist whose fourteenth-century travels and later account document wide Islamic and Afro-Eurasian connections.'],
      ['Marco Polo', 'Venetian traveler whose account became an influential European description of Asian societies and the Yuan world.'],
      ['Margery Kempe', 'English Christian pilgrim whose dictated account records long-distance religious travel in the early fifteenth century.'],
      ['Travel account', 'A written or dictated record of travel whose value depends on both what it describes and the perspective of its author.']
    ]
  };
  const idx4 = data.empires.findIndex(item => item.id === 'material');
  const idx5 = data.empires.findIndex(item => item.id === 'words');
  if (idx4 < 0 || idx5 < 0) throw new Error('2.5 missing material/words sections');
  data.empires[idx4] = citySection;
  data.empires[idx5] = travelers;

  if (data.closing && Array.isArray(data.closing.pairs)) {
    data.closing.intro = 'Build answers across all three developments: diffusion, urban change and travel writing. Each model below names a consequence, gives evidence and explains the network mechanism behind it.';
    data.closing.pairs = [
      data.closing.pairs[0],
      data.closing.pairs[1],
      { category: 'Cities', title: 'Trade can build a city, and route change can weaken it', body: 'Commercial nodes grow because merchants create demand for storage, finance, transport, food, lodging and specialized labor. The same dependence creates vulnerability: warfare, political disruption or a shift in routes can redirect the traffic that supported the city. The meaningful claim is therefore not that trade caused urban growth everywhere, but that changing productivity and trade networks changed urban fortunes in both directions.' },
      { category: 'Travel writing', title: 'More movement created more written knowledge about distant societies', body: 'Ibn Battuta, Marco Polo and Margery Kempe traveled for different reasons and wrote or dictated accounts shaped by different purposes and audiences. Their accounts require sourcing, but together they demonstrate a larger consequence of intensified Afro-Eurasian interaction: more people could undertake long journeys through overlapping commercial, religious and political networks, and some converted those journeys into texts read by audiences at home.' }
    ];
  }
  save('2-5', data);
}

function repair26() {
  const data = load('2-6');
  data.deck = 'Exchange networks moved living things as well as manufactured goods. Some movements were intentional: bananas into Africa, new rice varieties into East Asia and citrus into the Mediterranean changed agriculture. Others were devastating: connected routes also helped bubonic plague spread across Afro-Eurasia.';
  data.meta = ['Five sections', 'Crops, pathogens, consequences, evidence', 'Read alongside the First & 10'];
  data.howTo.intro = 'Sections 01 and 02 trace plague from pathway to consequence. Section 03 protects the crop-diffusion half of the CED story. Section 04 compares deliberate and accidental biological movement, and section 05 shows how physical evidence lets historians reconstruct those environmental changes.';
  data.howTo.steps = [
    '<b>01 The pathway:</b> the plague reservoir, trade routes, and what the Kaffa story does and does not show.',
    '<b>02 The consequences:</b> demographic and social effects in different regional structures.',
    '<b>03 Crop diffusion:</b> bananas in Africa, new rice varieties in East Asia and citrus in the Mediterranean.',
    '<b>04 Living things on the move:</b> compare intentional crop transfers with pathogens and unintended biological cargo.',
    '<b>05 The archive:</b> tree rings, ice cores, pollen and ancient DNA.',
    '<b>Then the closing section</b>, which turns crop and pathogen diffusion into causal and comparative writing.'
  ];

  const crops = {
    id: 'ecology', num: '03', accent: 'iron', name: 'Three Required Crop Diffusion Cases', navLabel: 'Crops across regions',
    dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Bananas, rice, citrus',
    thesis: 'The environmental story is not only plague. People deliberately moved useful crops through exchange networks, and when those crops fit new environments they could change agricultural productivity, diet and population-supporting capacity.',
    parts: [
      { heading: 'Bananas in Africa', blocks: [
        { p: '<b>Bananas</b> originated in Southeast Asia and moved westward over long periods through Indian Ocean contacts. In tropical African environments where they grew well, bananas provided a productive food source and supported denser settlement and population growth. The AP move is to connect crop diffusion to an environmental and demographic effect rather than merely naming the transfer.' }
      ]},
      { heading: 'New rice varieties in East Asia', blocks: [
        { p: 'Fast-ripening rice varieties from Southeast Asia, commonly associated with <b>Champa rice</b>, spread into China before this period and continued to shape East Asian agriculture. Their shorter growing cycle could increase reliability and allow multiple harvests in favorable conditions, raising agricultural productivity and helping support large populations and urban economies.' }
      ]},
      { heading: 'Citrus in the Mediterranean', blocks: [
        { p: '<b>Citrus</b> crops moved westward through Islamic and Mediterranean exchange networks and became established in new agricultural zones. Their diffusion demonstrates that long-distance networks changed regional environments by moving cultivated species as well as manufactured goods.' },
        { note: { kind: 'misconception', label: 'Common mistake to avoid', html: 'Do not claim every crop first arrived between 1200 and 1450. The CED asks about continued diffusion. State the movement and consequence carefully rather than inventing a first-arrival date.' } }
      ]}
    ],
    useThis: {
      tool: 'Crop → new environment → agricultural effect. <em>Exchange networks carry a cultivated plant beyond its earlier range; if local conditions suit it, farmers incorporate it and regional productivity, diet or population-supporting capacity can change.</em>',
      limit: 'Diffusion dates are often gradual and contested. The required historical claim is continued movement and environmental consequence, not a fabricated first-arrival date.',
      comparison: 'Against <em>bubonic plague</em>: crops and pathogens both depended on connectivity, but crops were intentionally cultivated while the pathogen spread as an unwanted biological consequence.'
    },
    terms: [
      ['Crop diffusion', 'The movement and establishment of cultivated plants in new regions through human contact and exchange.'],
      ['Bananas in Africa', 'A required example of crop diffusion that could support food supply and population in suitable tropical environments.'],
      ['New rice varieties', 'Fast-ripening strains that increased agricultural flexibility and productivity in East Asia.'],
      ['Citrus in the Mediterranean', 'A required example of useful plants spreading into new agricultural zones through interregional exchange.'],
      ['Demographic effect', 'A change in population size, density or distribution associated with food supply, disease or other environmental conditions.']
    ]
  };
  const cropIndex = data.empires.findIndex(item => item.id === 'ecology');
  if (cropIndex < 0) throw new Error('2.6 missing ecology section');
  data.empires[cropIndex] = crops;

  const species = empire(data, 'species');
  species.name = 'Living Things on the Move';
  species.navLabel = 'Living things on the move';
  species.thesis = 'Trade routes are corridors for organisms as well as cargo. Crops moved intentionally and pathogens moved intentionally or accidentally; comparing the two reveals why greater connectivity could increase both productive capacity and biological vulnerability.';
  if (species.parts && species.parts[0]) {
    species.parts[0].heading = 'Carried on purpose: crops';
    species.parts[0].blocks = [
      { p: 'The required crop cases are <b>bananas in Africa</b>, <b>new rice varieties in East Asia</b> and <b>citrus in the Mediterranean</b>. Section 03 traces why each mattered. Their shared mechanism is intentional human movement through connected trade and migration networks followed by cultivation in a suitable receiving environment.' },
      { p: 'Deliberate introductions can change ecosystems substantially. A staple crop that thrives where local grains do poorly can support larger populations, which can in turn alter settlement and land use. The chain runs network → crop → production → population/environment, and writing the whole chain is stronger than stopping at “a crop spread.”' }
    ];
  }
  species.useThis.tool = 'The network as a biological corridor. <em>The mechanism is that repeated movement of people and cargo connects environments that were previously less directly linked, allowing both intentionally carried crops and unintended pathogens to establish new geographic ranges.</em>';

  if (data.closing && Array.isArray(data.closing.pairs) && data.closing.pairs.length >= 3) {
    data.closing.pairs[2] = {
      category: 'Crops and pathogens',
      title: 'The same connectivity could increase food supply and epidemic risk',
      body: 'Bananas in Africa, new rice varieties in East Asia and citrus in the Mediterranean illustrate useful crops moving into new environments through Afro-Eurasian exchange. Bubonic plague illustrates the other side of the same mechanism: connected routes also moved pathogens among dense populations. The network did not determine whether the consequence would be productive or catastrophic; it increased the movement of living things, and the biological material and receiving environment determined the result.'
    };
  }
  save('2-6', data);
}

function repair27() {
  const data = load('2-7');
  data.deck = 'Sand, water and grass created different transportation problems, but the networks also shared an economic logic: demand made exchange worthwhile, commercial institutions reduced friction, productive capacity responded to wider markets, and states and cities captured value from the resulting flows.';
  data.howTo.steps = data.howTo.steps.map(step => step.includes('04 Consequences compared')
    ? '<b>04 Consequences compared:</b> demand and productive capacity, states/cities, belief, disease and labor.'
    : step);
  const consequences = empire(data, 'consequences');
  const heading = 'Demand and productive capacity';
  const part = {
    heading,
    blocks: [
      { p: 'Comparison should not stop with transportation. Across the networks, merchants responded to <b>demand</b> for goods consumers could not obtain locally. On the Silk Roads and Indian Ocean, rising demand for luxury goods helped connect distant markets to specialized producers. Across the Sahara, complementary demand for West African gold and Saharan salt made expensive desert transport worthwhile.' },
      { p: 'The CED also asks students to connect exchange to <b>productive capacity</b>. Chinese, Persian and Indian producers expanded textiles and porcelain for export, and Chinese iron and steel production increased. Networks did more than redistribute a fixed pile of goods: larger and more reliable markets could encourage societies to produce more for distant consumers.' },
      { note: { kind: 'howknow', label: 'Comparison checkpoint', html: 'Ask the same question of both networks: what did distant consumers demand, and how did producers or commercial institutions respond? That keeps demand, finance and production inside the comparison instead of reducing the unit to transportation technology.' } }
    ]
  };
  consequences.parts = consequences.parts.filter(item => item.heading !== heading && item.heading !== 'Demand and Productive Capacity');
  consequences.parts.unshift(part);
  consequences.terms = consequences.terms || [];
  const existing = new Set(consequences.terms.map(row => row[0]));
  [
    ['Demand', 'Consumer willingness to acquire goods from distant regions, creating an economic incentive for interregional exchange.'],
    ['Productive capacity', 'The ability to produce goods; wider markets can encourage producers to expand output for export.']
  ].forEach(row => { if (!existing.has(row[0])) consequences.terms.push(row); });
  save('2-7', data);
}

repair21();
repair22();
repair25();
repair26();
repair27();
console.log('Unit 2 canonical Deep Reading sources aligned. Rebuild standalone chapters and the Unit 2 eBook next.');
