'use strict';

/**
 * One spec per topic whose Map & Geography Check needs a purpose-built map.
 *
 * These replace slots that previously held a portrait, a painting, a photograph,
 * or a blank world outline: images that could not answer the map questions the
 * lesson asks. Zones come from scripts/lib/map-frame.js.
 *
 * `id` becomes assets/images/instructional-maps/<id>.svg.
 */

module.exports = [
  // ── Foundations ─────────────────────────────────────────────────────────────
  {
    id: 'foundations-0',
    code: 'FOUNDATIONS 0',
    title: 'World Regions: A Closer Look',
    subtitle: 'Foundations 0 · The AP World regional vocabulary',
    labelsAvoidShapes: true,
    highlights: [
      { zone: 'northAmerica', label: 'NORTH AMERICA', tone: 'slate', legend: 'North America', labelSide: 'above' },
      { zone: 'mexico', label: 'MEXICO', tone: 'plum', legend: 'Mexico', labelSide: 'left' },
      { zone: 'caribbean', label: 'CARIBBEAN', tone: 'gold', legend: 'Caribbean', labelSide: 'right' },
      { zone: 'southAmerica', label: 'LATIN AMERICA', tone: 'bronze', legend: 'Latin America, including Mesoamerica and the Caribbean', labelSide: 'left' },
      { zone: 'northAfrica', label: 'NORTH AFRICA', tone: 'sand', legend: 'North Africa', labelSide: 'above' },
      { zone: 'westAfrica', label: 'WEST AFRICA', tone: 'sage', legend: 'West Africa', labelSide: 'left' },
      { zone: 'centralAfrica', label: 'CENTRAL AFRICA', tone: 'gold', legend: 'Central Africa', labelSide: 'left' },
      { zone: 'eastAfrica', label: 'EAST AFRICA', tone: 'bronze', legend: 'East Africa', labelSide: 'right' },
      { zone: 'southernAfrica', label: 'SOUTHERN AFRICA', tone: 'sage', legend: 'Southern Africa' },
      { zone: 'swAsia', label: 'MIDDLE EAST', tone: 'plum', legend: 'Middle East' },
      { zone: 'centralAsia', label: 'CENTRAL ASIA', tone: 'slate', legend: 'Central Asia', labelSide: 'above' },
      { zone: 'southAsia', label: 'SOUTH ASIA', tone: 'gold', legend: 'South Asia' },
      { zone: 'eastAsia', label: 'EAST ASIA', tone: 'sand', legend: 'East Asia', labelSide: 'right' },
      { zone: 'seAsia', label: 'SOUTHEAST ASIA', tone: 'bronze', legend: 'Southeast Asia' }
    ],
    note: 'BeHistorical instructional map. The AP World regions are analytic categories, not fixed borders; several of them overlap, and coastlines are simplified for classroom projection.'
  },
  {
    id: 'foundations-1',
    code: 'FOUNDATIONS 1',
    title: 'Geography Shapes Civilization',
    subtitle: 'Foundations 1 · River valleys, steppe, highlands, coasts',
    highlights: [
      { zone: 'egypt', label: 'NILE', tone: 'sage' },
      { zone: 'swAsia', label: 'TIGRIS & EUPHRATES', tone: 'gold' },
      { zone: 'southAsia', label: 'INDUS & GANGES', tone: 'bronze' },
      { zone: 'eastAsia', label: 'YELLOW & YANGTZE', tone: 'sand' },
      { zone: 'steppe', label: 'EURASIAN STEPPE', tone: 'slate' },
      { zone: 'andes', label: 'ANDEAN HIGHLANDS', tone: 'plum' }
    ],
    points: [
      { at: [31, 26], label: 'Nile valley', note: 'flood-fed farming' },
      { at: [95, 47], label: 'steppe corridor', note: 'herding and mobility' }
    ],
    note: 'BeHistorical instructional map. River valleys, steppe, and highland zones are shown schematically to support comparison, not to mark precise boundaries.'
  },
  {
    id: 'foundations-5',
    code: 'FOUNDATIONS 5',
    title: 'The Six AP World Regions at c. 1200',
    subtitle: 'Foundations 5 · Thinking like a historian',
    highlights: [
      { zone: 'eastAsia', label: 'EAST ASIA', tone: 'gold', legend: 'East Asia: Song China, Korea, Japan' },
      { zone: 'seAsia', label: 'SOUTH & SOUTHEAST ASIA', tone: 'bronze', legend: 'South & Southeast Asia: Delhi, Khmer, Srivijaya' },
      { zone: 'swAsia', label: 'DAR AL-ISLAM', tone: 'sand', legend: 'Southwest Asia & North Africa: Dar al-Islam' },
      { zone: 'westAfrica', label: 'AFRICA', tone: 'sage', legend: 'Africa: Mali, Great Zimbabwe, Swahili coast' },
      { zone: 'europe', label: 'EUROPE', tone: 'slate', legend: 'Europe: fragmented feudal states' },
      { zone: 'andes', label: 'AMERICAS', tone: 'plum', legend: 'Americas: Inca, Mexica, Mississippian' }
    ],
    note: 'BeHistorical instructional map. Regions are the AP analytic frame for c. 1200; coastlines are simplified for classroom projection.'
  },

  // ── Unit 1 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-1-5',
    code: 'Topic 1.5',
    title: 'African States and Trade Routes, c. 1200-1450',
    subtitle: 'Topic 1.5 · State building in Africa',
    highlights: [
      { zone: 'westAfrica', label: 'MALI & HAUSA STATES', tone: 'gold', legend: 'West African states on trans-Saharan routes' },
      { zone: 'ethiopia', label: 'ETHIOPIA', tone: 'bronze', legend: 'Christian Ethiopian highlands' },
      { zone: 'swahiliCoast', label: 'SWAHILI COAST', tone: 'sage', legend: 'Swahili city-states on the Indian Ocean' },
      { zone: 'southernAfrica', label: 'GREAT ZIMBABWE', tone: 'sand', legend: 'Great Zimbabwe: interior gold plateau' }
    ],
    flows: [
      { from: 'westAfrica', to: 'northAfrica', label: 'gold north, salt south' },
      { from: 'southernAfrica', to: 'swahiliCoast', label: 'interior gold to the coast', bow: 0.3 },
      { from: 'swahiliCoast', to: 'southAsia', label: 'Indian Ocean trade' }
    ],
    points: [
      { at: [-3, 17], label: 'Timbuktu', note: 'trade and scholarship' },
      { at: [39, -20], label: 'Great Zimbabwe', note: 'stone capital' },
      { at: [39, -9], label: 'Kilwa', note: 'Swahili port', side: 'left' }
    ]
  },
  {
    id: 'topic-1-7',
    code: 'Topic 1.7',
    title: 'World Regions for Unit 1 Comparison, c. 1200-1450',
    subtitle: 'Topic 1.7 · Comparison across regions',
    highlights: [
      { zone: 'eastAsia', label: 'SONG CHINA', tone: 'gold', legend: 'Centralized bureaucracy and exams' },
      { zone: 'swAsia', label: 'DAR AL-ISLAM', tone: 'sand', legend: 'Trade, scholarship, and political fragmentation' },
      { zone: 'europe', label: 'EUROPE', tone: 'slate', legend: 'Feudal decentralization' },
      { zone: 'westAfrica', label: 'MALI', tone: 'sage', legend: 'Trade wealth and Islamic kingship' },
      { zone: 'andes', label: 'INCA', tone: 'plum', legend: 'Labor tribute without money or writing' },
      { zone: 'seAsia', label: 'KHMER & MAJAPAHIT', tone: 'bronze', legend: 'Water management and maritime tribute' }
    ]
  },

  // ── Unit 2 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-2-2',
    code: 'Topic 2.2',
    title: 'The Mongol Empire and Its Khanates',
    subtitle: 'Topic 2.2 · Conquest, connection, and the Pax Mongolica',
    highlights: [
      { zone: 'steppe', label: 'MONGOL HEARTLAND', tone: 'gold', legend: 'Mongolian steppe: the empire\'s base' },
      { zone: 'eastAsia', label: 'YUAN', tone: 'bronze', legend: 'Yuan China (Khubilai Khan)' },
      { zone: 'centralAsia', label: 'CHAGATAI', tone: 'sand', legend: 'Chagatai Khanate, Central Asia' },
      { zone: 'iran', label: 'ILKHANATE', tone: 'sage', legend: 'Ilkhanate, Persia' },
      { zone: 'easternEurope', label: 'GOLDEN HORDE', tone: 'slate', legend: 'Golden Horde, Russian steppe' }
    ],
    flows: [
      { from: 'steppe', to: 'eastAsia', label: 'conquest of China' },
      { from: 'steppe', to: 'iran', label: 'conquest of Persia', bow: 0.22 },
      { from: 'steppe', to: 'easternEurope', label: 'campaigns into Europe', bow: -0.2 },
      { from: 'eastAsia', to: 'swAsia', label: 'Pax Mongolica exchange', bow: 0.34, style: 'solid' }
    ],
    points: [
      { at: [102, 47], label: 'Karakorum', note: 'Mongol capital' },
      { at: [116, 40], label: 'Dadu / Beijing', note: 'Yuan capital' }
    ],
    note: 'BeHistorical instructional map. Khanate zones show the four divisions after 1260 schematically; coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-2-4',
    code: 'Topic 2.4',
    title: 'Trans-Saharan Routes and West African States',
    subtitle: 'Topic 2.4 · Gold, salt, and the spread of Islam',
    highlights: [
      { zone: 'westAfrica', label: 'MALI EMPIRE', tone: 'gold', legend: 'Mali: gold-producing savanna states' },
      { zone: 'northAfrica', label: 'NORTH AFRICA', tone: 'sand', legend: 'North African termini and salt sources' },
      { zone: 'swAsia', label: 'DAR AL-ISLAM', tone: 'sage', legend: 'Wider Islamic world Mali connected to' }
    ],
    flows: [
      { from: 'westAfrica', to: 'northAfrica', label: 'gold, ivory, enslaved people north' },
      { from: 'northAfrica', to: 'westAfrica', label: 'salt, cloth, books, Islam south', bow: -0.28 },
      { from: 'westAfrica', to: 'egypt', label: 'Mansa Musa\'s hajj, 1324', bow: 0.3 }
    ],
    points: [
      { at: [-3, 17], label: 'Timbuktu', note: 'Sankore scholarship' },
      { at: [-8, 12], label: 'Niani', note: 'Mali capital region' },
      { at: [3, 27], label: 'Sahara crossing', note: 'camel caravans' }
    ]
  },
  {
    id: 'topic-2-6',
    code: 'Topic 2.6',
    title: 'The Spread of the Black Death, c. 1340-1353',
    subtitle: 'Topic 2.6 · Environmental consequences of connectivity',
    highlights: [
      { zone: 'centralAsia', label: 'ORIGIN ZONE', tone: 'sand', legend: 'Central Asian plague reservoir' },
      { zone: 'swAsia', label: 'SOUTHWEST ASIA', tone: 'bronze', legend: 'Caravan and port cities struck 1347-1349' },
      { zone: 'mediterranean', label: 'MEDITERRANEAN', tone: 'gold', legend: 'Sea lanes carrying plague west' },
      { zone: 'europe', label: 'EUROPE', tone: 'plum', legend: 'Europe: roughly a third to half of people died' }
    ],
    flows: [
      { from: 'centralAsia', to: 'swAsia', label: 'along the Silk Roads' },
      { from: 'swAsia', to: 'mediterranean', label: 'Black Sea to Italian ports', bow: 0.22 },
      { from: 'mediterranean', to: 'europe', label: 'inland from the ports', bow: -0.24 },
      { from: 'mediterranean', to: 'northAfrica', label: 'into North Africa', bow: 0.3 }
    ],
    points: [
      { at: [34, 45], label: 'Caffa', note: 'siege and outbreak, 1346' },
      { at: [12, 44], label: 'Italian ports', note: 'plague enters Europe, 1347', side: 'left' }
    ],
    note: 'BeHistorical instructional map. Arrows show the broad direction and sequence of transmission, not exact routes; coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-2-7',
    code: 'Topic 2.7',
    title: 'All Three Afro-Eurasian Trade Networks, c. 1200-1450',
    subtitle: 'Topic 2.7 · Comparing the Silk Roads, Indian Ocean, and Sahara',
    highlights: [
      { zone: 'steppe', label: 'SILK ROADS', tone: 'gold', legend: 'Silk Roads: overland, caravan, luxury goods' },
      { zone: 'indianOcean', label: 'INDIAN OCEAN', tone: 'slate', legend: 'Indian Ocean: monsoon sailing, bulk goods' },
      { zone: 'northAfrica', label: 'TRANS-SAHARAN', tone: 'sand', legend: 'Trans-Saharan: camel caravans, gold and salt' }
    ],
    flows: [
      { from: 'eastAsia', to: 'swAsia', label: 'Silk Roads overland' },
      { from: 'eastAsia', to: 'southAsia', label: 'Indian Ocean monsoon routes', bow: 0.3 },
      { from: 'southAsia', to: 'swahiliCoast', label: 'to the Swahili coast', bow: 0.24 },
      { from: 'westAfrica', to: 'northAfrica', label: 'across the Sahara', bow: -0.2 }
    ]
  },

  // ── Unit 4 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-4-7',
    code: 'Topic 4.7',
    title: 'Colonial Social Hierarchies and Coerced Labor, c. 1700',
    subtitle: 'Topic 4.7 · Changing social hierarchies',
    highlights: [
      { zone: 'mexico', label: 'NEW SPAIN', tone: 'gold', legend: 'Casta hierarchy and the mita in Spanish America' },
      { zone: 'andes', label: 'ANDES', tone: 'bronze', legend: 'Potosí silver worked by mita labor' },
      { zone: 'brazil', label: 'BRAZIL', tone: 'sand', legend: 'Plantation slavery in Brazil' },
      { zone: 'caribbean', label: 'CARIBBEAN', tone: 'plum', legend: 'Sugar plantations worked by enslaved Africans' },
      { zone: 'westAfrica', label: 'WEST AFRICA', tone: 'sage', legend: 'West Africa: societies drained by the slave trade' }
    ],
    flows: [
      { from: 'westAfrica', to: 'caribbean', label: 'Middle Passage' },
      { from: 'westAfrica', to: 'brazil', label: 'enslaved Africans to Brazil', bow: -0.16 },
      { from: 'andes', to: 'westernEurope', label: 'silver to Europe', bow: 0.26 }
    ]
  },

  // ── Unit 5 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-5-1',
    code: 'Topic 5.1',
    title: 'The Republic of Letters, c. 1750',
    subtitle: 'Topic 5.1 · Enlightenment ideas across the Atlantic world',
    highlights: [
      { zone: 'britain', label: 'BRITAIN', tone: 'gold', legend: 'Locke, Smith, and the Scottish Enlightenment' },
      { zone: 'westernEurope', label: 'FRANCE & LOW COUNTRIES', tone: 'bronze', legend: 'Paris salons, the Encyclopédie, Dutch presses' },
      { zone: 'europe', label: 'CENTRAL EUROPE', tone: 'sand', legend: 'German and Habsburg reading publics' },
      { zone: 'unitedStates', label: 'BRITISH AMERICA', tone: 'slate', legend: 'Colonial readers and revolutionaries' },
      { zone: 'caribbean', label: 'SAINT-DOMINGUE', tone: 'plum', legend: 'Enlightenment claims read against slavery' }
    ],
    flows: [
      { from: 'westernEurope', to: 'unitedStates', label: 'pamphlets and books west' },
      { from: 'britain', to: 'westernEurope', label: 'ideas circulate', bow: 0.3, style: 'solid' },
      { from: 'westernEurope', to: 'caribbean', label: 'natural rights carried to the colonies', bow: -0.18 }
    ]
  },
  {
    id: 'topic-5-2',
    code: 'Topic 5.2',
    title: 'The Atlantic Revolutionary World, c. 1776-1825',
    subtitle: 'Topic 5.2 · Nationalism and revolutions',
    highlights: [
      { zone: 'unitedStates', label: 'UNITED STATES 1776', tone: 'gold', legend: 'American Revolution, 1776-1783' },
      { zone: 'westernEurope', label: 'FRANCE 1789', tone: 'bronze', legend: 'French Revolution, 1789' },
      { zone: 'caribbean', label: 'HAITI 1791', tone: 'plum', legend: 'Haitian Revolution, 1791-1804' },
      { zone: 'andes', label: 'SPANISH AMERICA', tone: 'sand', legend: 'Latin American independence, 1810-1825' },
      { zone: 'brazil', label: 'BRAZIL 1822', tone: 'sage', legend: 'Brazilian independence, 1822' }
    ],
    flows: [
      { from: 'unitedStates', to: 'westernEurope', label: 'revolutionary example east' },
      { from: 'westernEurope', to: 'caribbean', label: 'rights claimed by the enslaved', bow: -0.2 },
      { from: 'caribbean', to: 'andes', label: 'independence movements spread', bow: 0.24 }
    ]
  },
  {
    id: 'topic-5-3',
    code: 'Topic 5.3',
    title: 'Where Industrialization Began, c. 1800',
    subtitle: 'Topic 5.3 · Britain\'s coal, cotton, and colonial advantages',
    highlights: [
      { zone: 'britain', label: 'BRITAIN', tone: 'gold', legend: 'Coal, iron, waterways, and factory towns' },
      { zone: 'southAsia', label: 'SOUTH ASIA', tone: 'bronze', legend: 'South Asian cotton markets and handloom competition' },
      { zone: 'unitedStates', label: 'US SOUTH', tone: 'sand', legend: 'Raw cotton grown by enslaved labor' },
      { zone: 'westAfrica', label: 'WEST AFRICA', tone: 'sage', legend: 'Atlantic economy that funded British capital' }
    ],
    flows: [
      { from: 'unitedStates', to: 'britain', label: 'raw cotton to Lancashire' },
      { from: 'britain', to: 'southAsia', label: 'machine-made cloth out', bow: 0.2 }
    ],
    points: [
      { at: [-2, 53], label: 'Manchester', note: 'cotton mills' },
      { at: [-91, 33], label: 'Mississippi valley', note: 'cotton plantations', side: 'left' }
    ]
  },
  {
    id: 'topic-5-4',
    code: 'Topic 5.4',
    title: 'The Uneven Spread of Industrialization, c. 1850-1900',
    subtitle: 'Topic 5.4 · Industrialization spreads',
    highlights: [
      { zone: 'britain', label: 'BRITAIN', tone: 'gold', legend: 'First industrial economy' },
      { zone: 'westernEurope', label: 'FRANCE, BELGIUM, GERMANY', tone: 'bronze', legend: 'Continental industrialization after 1830' },
      { zone: 'unitedStates', label: 'UNITED STATES', tone: 'sand', legend: 'Rapid US industrial growth after 1860' },
      { zone: 'japan', label: 'JAPAN', tone: 'sage', legend: 'Meiji state-led industrialization after 1868' },
      { zone: 'russia', label: 'RUSSIA', tone: 'slate', legend: 'State railways and late Russian industry' },
      { zone: 'southAsia', label: 'DEINDUSTRIALIZED', tone: 'plum', legend: 'South Asia and Egypt: deindustrialized by imports' }
    ],
    flows: [
      { from: 'britain', to: 'westernEurope', label: 'technology crosses the Channel' },
      { from: 'britain', to: 'japan', label: 'machinery and engineers', bow: 0.16 }
    ]
  },
  {
    id: 'topic-5-5',
    code: 'Topic 5.5',
    title: 'The Industrial Resource Network, c. 1850-1900',
    subtitle: 'Topic 5.5 · Technology of industrialization',
    highlights: [
      { zone: 'britain', label: 'FACTORY CORE', tone: 'gold', legend: 'Industrial core: coal, steel, and steam' },
      { zone: 'westernEurope', label: 'WESTERN EUROPE', tone: 'bronze', legend: 'Steel, chemicals, and rail networks' },
      { zone: 'southAsia', label: 'RAW MATERIALS', tone: 'sand', legend: 'Cotton, jute, and indigo' },
      { zone: 'centralAfrica', label: 'RAW MATERIALS', tone: 'sage', legend: 'Rubber, palm oil, and copper' },
      { zone: 'southAmerica', label: 'RAW MATERIALS', tone: 'plum', legend: 'Guano, nitrates, rubber, and beef' }
    ],
    flows: [
      { from: 'southAsia', to: 'britain', label: 'raw materials in', bow: 0.2 },
      { from: 'centralAfrica', to: 'westernEurope', label: 'rubber and oils in', bow: -0.18 },
      { from: 'britain', to: 'southAmerica', label: 'manufactures and rail out', bow: 0.26 }
    ],
    points: [
      { at: [32, 30], label: 'Suez Canal, 1869', note: 'steamship shortcut' }
    ]
  },
  {
    id: 'topic-5-6',
    code: 'Topic 5.6',
    title: 'Industrial Society and Political Change, c. 1830-1900',
    subtitle: 'Topic 5.6 · Government and society respond',
    highlights: [
      { zone: 'britain', label: 'BRITAIN', tone: 'gold', legend: 'Factory Acts, reform bills, and trade unions' },
      { zone: 'westernEurope', label: 'FRANCE & GERMANY', tone: 'bronze', legend: '1848 revolutions; Bismarck\'s social insurance' },
      { zone: 'unitedStates', label: 'UNITED STATES', tone: 'sand', legend: 'Labor organizing and Progressive reform' },
      { zone: 'russia', label: 'RUSSIA', tone: 'slate', legend: 'Serf emancipation, 1861; state-led change' },
      { zone: 'japan', label: 'JAPAN', tone: 'sage', legend: 'Meiji reforms remaking law and schooling' },
      { zone: 'eastAsia', label: 'QING CHINA', tone: 'plum', legend: 'Self-Strengthening Movement' }
    ]
  },
  {
    id: 'topic-5-7',
    code: 'Topic 5.7',
    title: 'The Global Financial System, c. 1850-1900',
    subtitle: 'Topic 5.7 · Economic developments and innovations',
    highlights: [
      { zone: 'britain', label: 'LONDON', tone: 'gold', legend: 'London: banking, insurance, and the gold standard' },
      { zone: 'westernEurope', label: 'PARIS & BERLIN', tone: 'bronze', legend: 'Continental banks and stock exchanges' },
      { zone: 'unitedStates', label: 'NEW YORK', tone: 'sand', legend: 'US corporations and capital markets' },
      { zone: 'southernCone', label: 'ARGENTINA', tone: 'plum', legend: 'Argentina: British-financed railways and beef' },
      { zone: 'southAsia', label: 'INDIA', tone: 'slate', legend: 'India: colonial revenue and export crops' }
    ],
    flows: [
      { from: 'britain', to: 'southernCone', label: 'investment capital out' },
      { from: 'southernCone', to: 'britain', label: 'commodities and interest back', bow: -0.3 },
      { from: 'britain', to: 'unitedStates', label: 'capital into US railroads', bow: 0.22 }
    ]
  },
  {
    id: 'topic-5-8',
    code: 'Topic 5.8',
    title: 'Reactions to the Industrial Economy, c. 1830-1900',
    subtitle: 'Topic 5.8 · Labor, socialism, and reform',
    highlights: [
      { zone: 'britain', label: 'BRITAIN', tone: 'gold', legend: 'Chartists, unions, and factory legislation' },
      { zone: 'westernEurope', label: 'CONTINENTAL EUROPE', tone: 'bronze', legend: 'Marx, socialist parties, 1848' },
      { zone: 'unitedStates', label: 'UNITED STATES', tone: 'sand', legend: 'Strikes, unions, and Progressive reform' },
      { zone: 'russia', label: 'RUSSIA', tone: 'slate', legend: 'Revolutionary movements, 1905' },
      { zone: 'eastAsia', label: 'CHINA', tone: 'plum', legend: 'Taiping and other mass upheavals' },
      { zone: 'southAsia', label: 'INDIA', tone: 'sage', legend: 'Indigo and famine protest under colonial rule' }
    ]
  },
  {
    id: 'topic-5-9',
    code: 'Topic 5.9',
    title: 'The Industrial City, c. 1750-1900',
    subtitle: 'Topic 5.9 · Society and the industrial age',
    highlights: [
      { zone: 'britain', label: 'MANCHESTER & LONDON', tone: 'gold', legend: 'Britain: the first industrial cities' },
      { zone: 'westernEurope', label: 'RUHR & PARIS', tone: 'bronze', legend: 'Continental industrial cities' },
      { zone: 'unitedStates', label: 'CHICAGO & NEW YORK', tone: 'sand', legend: 'US cities built by migration' },
      { zone: 'japan', label: 'OSAKA', tone: 'sage', legend: 'Japan\'s industrial cities after 1868' }
    ],
    flows: [
      { from: 'europe', to: 'unitedStates', label: 'rural and European migrants to cities' }
    ],
    points: [
      { at: [-2, 53], label: 'Manchester', note: 'cotton, smoke, cholera' },
      { at: [-0.1, 51.5], label: 'London', note: 'sanitation reform after 1848', side: 'left' }
    ]
  },
  {
    id: 'topic-5-10',
    code: 'Topic 5.10',
    title: 'How Industrialization Reshaped the World, c. 1750-1900',
    subtitle: 'Topic 5.10 · Continuity and change in the industrial age',
    highlights: [
      { zone: 'britain', label: 'INDUSTRIAL CORE', tone: 'gold', legend: 'Industrial core: factories and capital' },
      { zone: 'westernEurope', label: 'INDUSTRIAL CORE', tone: 'gold', legend: 'Western Europe joins the core' },
      { zone: 'unitedStates', label: 'INDUSTRIAL CORE', tone: 'gold', legend: 'United States joins the core' },
      { zone: 'japan', label: 'INDUSTRIAL CORE', tone: 'gold', legend: 'Japan industrializes on its own terms' },
      { zone: 'southAsia', label: 'EXPORT PERIPHERY', tone: 'sand', legend: 'Export economies supplying raw materials' },
      { zone: 'centralAfrica', label: 'EXPORT PERIPHERY', tone: 'sand', legend: 'Regions reorganized around extraction' }
    ],
    flows: [
      { from: 'southAsia', to: 'britain', label: 'raw materials', bow: 0.2 },
      { from: 'britain', to: 'centralAfrica', label: 'manufactures and capital', bow: -0.2 }
    ]
  },

  // ── Unit 6 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-6-1',
    code: 'Topic 6.1',
    title: 'Where the Ideologies of Empire Landed, c. 1750-1900',
    subtitle: 'Topic 6.1 · Rationales for imperialism',
    highlights: [
      { zone: 'britain', label: 'IMPERIAL METROPOLE', tone: 'gold', legend: 'Metropoles where imperial ideology was written' },
      { zone: 'westernEurope', label: 'IMPERIAL METROPOLE', tone: 'gold', legend: 'Paris, Brussels, Berlin' },
      { zone: 'centralAfrica', label: 'CLAIMED TERRITORY', tone: 'sand', legend: 'Africa partitioned at Berlin, 1884-85' },
      { zone: 'southAsia', label: 'CLAIMED TERRITORY', tone: 'sand', legend: 'South Asia under British rule' },
      { zone: 'seAsia', label: 'CLAIMED TERRITORY', tone: 'sand', legend: 'Southeast Asia divided among empires' }
    ],
    flows: [
      { from: 'britain', to: 'centralAfrica', label: 'civilizing mission claims' },
      { from: 'westernEurope', to: 'seAsia', label: 'Social Darwinist justification', bow: 0.2 }
    ]
  },
  {
    id: 'topic-6-3',
    code: 'Topic 6.3',
    title: 'Indigenous Responses to State Expansion, c. 1850-1910',
    subtitle: 'Topic 6.3 · Resistance, rebellion, and adaptation',
    highlights: [
      { zone: 'westAfrica', label: 'ASANTE & WASSOULOU', tone: 'gold', legend: 'Asante and Samory Touré resist in West Africa' },
      { zone: 'southernAfrica', label: 'XHOSA & ZULU', tone: 'sage', legend: 'Southern African wars of resistance' },
      { zone: 'southAsia', label: 'INDIAN REBELLION 1857', tone: 'bronze', legend: 'Indian Rebellion of 1857' },
      { zone: 'eastAsia', label: 'BOXER RISING', tone: 'plum', legend: 'Boxer Rebellion in Qing China, 1899-1901' },
      { zone: 'ethiopia', label: 'ETHIOPIA', tone: 'sand', legend: 'Ethiopia defeats Italy at Adwa, 1896' }
    ],
    points: [
      { at: [-1, 7], label: 'Asante', note: 'War of the Golden Stool, 1900' },
      { at: [39, 14], label: 'Adwa, 1896', note: 'Ethiopian victory' }
    ]
  },
  {
    id: 'topic-6-4',
    code: 'Topic 6.4',
    title: 'Global Economic Development, c. 1850-1914',
    subtitle: 'Topic 6.4 · Cash crops and extraction',
    highlights: [
      { zone: 'egypt', label: 'COTTON', tone: 'gold', legend: 'Egyptian cotton for European mills' },
      { zone: 'centralAfrica', label: 'RUBBER', tone: 'sage', legend: 'Congo rubber under Leopold II' },
      { zone: 'brazil', label: 'RUBBER & COFFEE', tone: 'bronze', legend: 'Amazon rubber and Brazilian coffee' },
      { zone: 'westAfrica', label: 'PALM OIL', tone: 'sand', legend: 'West African palm oil and cocoa' },
      { zone: 'seAsia', label: 'RUBBER & TIN', tone: 'plum', legend: 'Malayan rubber and tin' },
      { zone: 'southAsia', label: 'TEA & JUTE', tone: 'slate', legend: 'Indian tea, jute, and opium' }
    ],
    flows: [
      { from: 'centralAfrica', to: 'westernEurope', label: 'commodities to industrial Europe' },
      { from: 'seAsia', to: 'britain', label: 'rubber and tin north', bow: 0.18 }
    ]
  },
  {
    id: 'topic-6-5',
    code: 'Topic 6.5',
    title: 'Economic Imperialism, c. 1840-1914',
    subtitle: 'Topic 6.5 · Power without formal colonies',
    highlights: [
      { zone: 'eastAsia', label: 'QING CHINA', tone: 'plum', legend: 'Opium Wars and treaty ports' },
      { zone: 'southernCone', label: 'ARGENTINA', tone: 'gold', legend: 'British investment in Buenos Aires and railways' },
      { zone: 'brazil', label: 'BRAZIL', tone: 'bronze', legend: 'Coffee exports financed from abroad' },
      { zone: 'egypt', label: 'EGYPT', tone: 'sand', legend: 'Debt, the Suez Canal, and British control' },
      { zone: 'anatolia', label: 'OTTOMAN EMPIRE', tone: 'slate', legend: 'Ottoman debt administration' }
    ],
    flows: [
      { from: 'britain', to: 'eastAsia', label: 'opium and gunboats', bow: 0.2 },
      { from: 'britain', to: 'southernCone', label: 'loans and railway capital' },
      { from: 'egypt', to: 'britain', label: 'canal revenue and cotton', bow: -0.22 }
    ]
  },
  {
    id: 'topic-6-6',
    code: 'Topic 6.6',
    title: 'Causes of Migration, c. 1850-1914',
    subtitle: 'Topic 6.6 · Why people left',
    highlights: [
      { zone: 'europe', label: 'PUSH: EUROPE', tone: 'slate', legend: 'Famine, land pressure, and pogroms in Europe' },
      { zone: 'eastAsia', label: 'PUSH: CHINA', tone: 'plum', legend: 'War and hardship in southern China' },
      { zone: 'southAsia', label: 'PUSH: INDIA', tone: 'bronze', legend: 'Famine and indenture recruiting in India' },
      { zone: 'unitedStates', label: 'PULL: AMERICAS', tone: 'gold', legend: 'Wage work and land in the Americas' },
      { zone: 'caribbean', label: 'PULL: PLANTATIONS', tone: 'sand', legend: 'Plantations needing labor after abolition' },
      { zone: 'australia', label: 'PULL: PACIFIC', tone: 'sage', legend: 'Gold rushes and settler colonies' }
    ],
    flows: [
      { from: 'europe', to: 'unitedStates', label: 'European emigration west' },
      { from: 'southAsia', to: 'caribbean', label: 'indentured labor', bow: -0.16 },
      { from: 'eastAsia', to: 'unitedStates', label: 'Chinese migration across the Pacific', bow: 0.3 }
    ]
  },
  {
    id: 'topic-6-7',
    code: 'Topic 6.7',
    title: 'Effects of Migration, c. 1850-1914',
    subtitle: 'Topic 6.7 · Diasporas and backlash',
    highlights: [
      { zone: 'unitedStates', label: 'CHINATOWNS', tone: 'gold', legend: 'Chinese communities and exclusion laws, 1882' },
      { zone: 'caribbean', label: 'INDIAN DIASPORA', tone: 'bronze', legend: 'Indo-Caribbean communities' },
      { zone: 'eastAfrica', label: 'INDIAN DIASPORA', tone: 'bronze', legend: 'South Asians in East Africa' },
      { zone: 'seAsia', label: 'CHINESE DIASPORA', tone: 'plum', legend: 'Chinese merchant communities in Southeast Asia' },
      { zone: 'southernCone', label: 'EUROPEAN DIASPORA', tone: 'sand', legend: 'Italian and Spanish migrants in Argentina' },
      { zone: 'australia', label: 'EXCLUSION', tone: 'slate', legend: 'White Australia policy, 1901' }
    ],
    flows: [
      { from: 'eastAsia', to: 'seAsia', label: 'diaspora networks' },
      { from: 'southAsia', to: 'eastAfrica', label: 'labor and trade diaspora', bow: 0.2 }
    ]
  },

  // ── Unit 8 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-8-7',
    code: 'Topic 8.7',
    title: 'Global Resistance to Power Structures After 1900',
    subtitle: 'Topic 8.7 · Rights movements and challenged states',
    highlights: [
      { zone: 'unitedStates', label: 'CIVIL RIGHTS', tone: 'gold', legend: 'US civil rights movement' },
      { zone: 'southernAfrica', label: 'ANTI-APARTHEID', tone: 'sage', legend: 'Anti-apartheid struggle in South Africa' },
      { zone: 'southAsia', label: 'NONVIOLENCE', tone: 'bronze', legend: 'Indian nonviolent resistance' },
      { zone: 'andes', label: 'LATIN AMERICA', tone: 'plum', legend: 'Chile 1973, Peru\'s Shining Path' },
      { zone: 'europe', label: 'PRAGUE & 1968', tone: 'slate', legend: 'Prague Spring and 1968 protest waves' }
    ],
    flows: [
      { from: 'southAsia', to: 'unitedStates', label: 'nonviolent tactics travel', bow: 0.24 },
      { from: 'unitedStates', to: 'southernAfrica', label: 'solidarity and sanctions', bow: -0.2 }
    ]
  },
  {
    id: 'topic-8-8',
    code: 'Topic 8.8',
    title: 'The End of the Cold War, 1979-1991',
    subtitle: 'Topic 8.8 · Geography of collapse',
    highlights: [
      { zone: 'russia', label: 'SOVIET UNION', tone: 'plum', legend: 'Soviet Union: perestroika and dissolution, 1991' },
      { zone: 'easternEurope', label: 'EASTERN BLOC', tone: 'slate', legend: 'Eastern bloc revolutions, 1989' },
      { zone: 'centralAsia', label: 'AFGHANISTAN', tone: 'sand', legend: 'Soviet-Afghan War, 1979-1989' },
      { zone: 'unitedStates', label: 'UNITED STATES', tone: 'gold', legend: 'US arms buildup and summit diplomacy' },
      { zone: 'eastAsia', label: 'CHINA', tone: 'bronze', legend: 'Chinese market reforms without political change' }
    ],
    flows: [
      { from: 'centralAsia', to: 'russia', label: 'withdrawal, 1989' },
      { from: 'unitedStates', to: 'russia', label: 'summits and arms treaties', bow: 0.22, style: 'solid' }
    ],
    points: [
      { at: [13, 52], label: 'Berlin', note: 'the Wall falls, Nov 1989' }
    ]
  },
  {
    id: 'topic-8-9',
    code: 'Topic 8.9',
    title: 'Cold War Effects Across Hemispheres, 1945-1991',
    subtitle: 'Topic 8.9 · Causation in the age of the Cold War',
    highlights: [
      { zone: 'unitedStates', label: 'UNITED STATES', tone: 'gold', legend: 'US bloc and containment' },
      { zone: 'russia', label: 'SOVIET UNION', tone: 'plum', legend: 'Soviet bloc' },
      { zone: 'eastAsia', label: 'KOREA & VIETNAM', tone: 'bronze', legend: 'Hot wars in Korea and Vietnam' },
      { zone: 'centralAfrica', label: 'AFRICAN PROXY WARS', tone: 'sage', legend: 'Angola, Congo, and the Horn' },
      { zone: 'caribbean', label: 'CUBA', tone: 'sand', legend: 'Cuba, 1959-1962' },
      { zone: 'southAsia', label: 'NON-ALIGNED', tone: 'slate', legend: 'Non-Aligned Movement' }
    ],
    flows: [
      { from: 'unitedStates', to: 'eastAsia', label: 'US intervention', bow: 0.2 },
      { from: 'russia', to: 'centralAfrica', label: 'Soviet and Cuban support', bow: -0.18 },
      { from: 'caribbean', to: 'centralAfrica', label: 'Cuban troops to Angola', bow: 0.16 }
    ]
  },

  // ── Unit 9 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-9-1',
    code: 'Topic 9.1',
    title: 'Global Technology and Exchange After 1900',
    subtitle: 'Topic 9.1 · Advances in technology and exchange',
    highlights: [
      { zone: 'unitedStates', label: 'RESEARCH & ENERGY', tone: 'gold', legend: 'US research, oil, and mass communication' },
      { zone: 'mexico', label: 'GREEN REVOLUTION', tone: 'sage', legend: 'Green Revolution wheat breeding in Mexico' },
      { zone: 'southAsia', label: 'GREEN REVOLUTION', tone: 'sage', legend: 'High-yield seed adoption in India' },
      { zone: 'swAsia', label: 'OIL', tone: 'bronze', legend: 'Persian Gulf oil reshaping global energy' },
      { zone: 'eastAsia', label: 'MANUFACTURING', tone: 'sand', legend: 'East Asian electronics and shipping' }
    ],
    flows: [
      { from: 'mexico', to: 'southAsia', label: 'Green Revolution seeds and methods', bow: 0.24 },
      { from: 'swAsia', to: 'eastAsia', label: 'oil to industrial economies', bow: -0.16 }
    ]
  },
  {
    id: 'topic-9-2',
    code: 'Topic 9.2',
    title: 'Disease, Medicine, and Population After 1900',
    subtitle: 'Topic 9.2 · Technological advances and their limits',
    highlights: [
      { zone: 'unitedStates', label: '1918 INFLUENZA', tone: 'plum', legend: '1918 influenza pandemic, worldwide' },
      { zone: 'europe', label: '1918 INFLUENZA', tone: 'plum', legend: 'Wartime troop movements spread influenza' },
      { zone: 'centralAfrica', label: 'MALARIA & HIV', tone: 'sage', legend: 'Malaria belt; later HIV/AIDS epidemic' },
      { zone: 'southAsia', label: 'SMALLPOX ERADICATION', tone: 'gold', legend: 'Smallpox eradication campaign, ended 1977-1980' },
      { zone: 'eastAsia', label: 'AGING POPULATIONS', tone: 'sand', legend: 'Longer lives and aging populations' }
    ],
    flows: [
      { from: 'unitedStates', to: 'europe', label: 'influenza travels with troops, 1918' },
      { from: 'europe', to: 'southAsia', label: 'pandemic reaches South Asia', bow: 0.2 }
    ]
  },
  {
    id: 'topic-9-3',
    code: 'Topic 9.3',
    title: 'Environmental Change and Resource Competition After 1900',
    subtitle: 'Topic 9.3 · Debates about the environment',
    highlights: [
      { zone: 'brazil', label: 'DEFORESTATION', tone: 'sage', legend: 'Amazon deforestation' },
      { zone: 'centralAsia', label: 'ARAL SEA', tone: 'sand', legend: 'Aral Sea drained by irrigation' },
      { zone: 'eastAsia', label: 'INDUSTRIAL EMISSIONS', tone: 'plum', legend: 'Coal-fired industrial growth and air quality' },
      { zone: 'unitedStates', label: 'HIGH CONSUMPTION', tone: 'gold', legend: 'High per-person energy consumption' },
      { zone: 'indianOcean', label: 'RISING SEAS', tone: 'slate', legend: 'Low-lying coasts and island states at risk' }
    ],
    flows: [
      { from: 'unitedStates', to: 'eastAsia', label: 'emissions are global, not local', bow: 0.2, style: 'solid' }
    ]
  },
  {
    id: 'topic-9-4',
    code: 'Topic 9.4',
    title: 'Economics in the Global Age',
    subtitle: 'Topic 9.4 · Liberalization, trade blocs, and supply chains',
    highlights: [
      { zone: 'unitedStates', label: 'NAFTA', tone: 'gold', legend: 'NAFTA, 1994: US, Canada, Mexico' },
      { zone: 'mexico', label: 'MAQUILADORAS', tone: 'sand', legend: 'Mexican assembly plants for export' },
      { zone: 'europe', label: 'EUROPEAN UNION', tone: 'slate', legend: 'European Union single market' },
      { zone: 'eastAsia', label: 'FACTORY OF THE WORLD', tone: 'bronze', legend: 'Chinese manufacturing after 1978 reforms' },
      { zone: 'seAsia', label: 'ASEAN', tone: 'sage', legend: 'ASEAN export economies' },
      { zone: 'southAsia', label: 'SERVICES', tone: 'plum', legend: 'Indian liberalization and service exports' }
    ],
    flows: [
      { from: 'eastAsia', to: 'unitedStates', label: 'containerized manufactures', bow: 0.26 },
      { from: 'unitedStates', to: 'eastAsia', label: 'capital and orders', bow: -0.26 }
    ]
  },
  {
    id: 'topic-9-5',
    code: 'Topic 9.5',
    title: 'Calls for Reform and Responses After 1900',
    subtitle: 'Topic 9.5 · Rights, law, and political participation',
    highlights: [
      { zone: 'southernAfrica', label: 'END OF APARTHEID', tone: 'sage', legend: 'South Africa: apartheid dismantled, 1990-1994' },
      { zone: 'unitedStates', label: 'CIVIL RIGHTS LAW', tone: 'gold', legend: 'US civil rights and voting rights legislation' },
      { zone: 'eastAfrica', label: 'GREEN BELT MOVEMENT', tone: 'bronze', legend: 'Kenya: Wangari Maathai\'s Green Belt Movement' },
      { zone: 'southAsia', label: 'EDUCATION & SUFFRAGE', tone: 'plum', legend: 'Mass suffrage and expanding schooling' },
      { zone: 'westernEurope', label: 'WOMEN\'S SUFFRAGE', tone: 'slate', legend: 'European suffrage and equal-pay campaigns' },
      { zone: 'southAmerica', label: 'LAND & LABOR', tone: 'sand', legend: 'Latin American land and labor reform' }
    ]
  },
  {
    id: 'topic-9-6',
    code: 'Topic 9.6',
    title: 'Globalized Culture After 1900',
    subtitle: 'Topic 9.6 · Media, sport, and consumer culture',
    highlights: [
      { zone: 'unitedStates', label: 'FILM & MUSIC EXPORT', tone: 'gold', legend: 'Hollywood, jazz, rock, and hip-hop' },
      { zone: 'southAsia', label: 'BOLLYWOOD', tone: 'bronze', legend: 'Indian film industry\'s global audience' },
      { zone: 'eastAsia', label: 'K-POP & ANIME', tone: 'plum', legend: 'Korean and Japanese popular culture' },
      { zone: 'westAfrica', label: 'AFROBEAT', tone: 'sage', legend: 'West African popular music' },
      { zone: 'brazil', label: 'FOOTBALL', tone: 'sand', legend: 'Football as a global common language' },
      { zone: 'europe', label: 'BROADCAST NETWORKS', tone: 'slate', legend: 'European broadcasting and the Olympics' }
    ],
    flows: [
      { from: 'unitedStates', to: 'europe', label: 'media exports' },
      { from: 'southAsia', to: 'eastAfrica', label: 'film circulates south-south', bow: 0.2 },
      { from: 'eastAsia', to: 'unitedStates', label: 'cultural flows are two-way', bow: 0.3 }
    ]
  },
  {
    id: 'topic-9-7',
    code: 'Topic 9.7',
    title: 'Resistance to Globalization After 1900',
    subtitle: 'Topic 9.7 · Protest, critique, and backlash',
    highlights: [
      { zone: 'unitedStates', label: 'SEATTLE 1999', tone: 'gold', legend: 'WTO protests, Seattle, 1999' },
      { zone: 'mexico', label: 'ZAPATISTAS 1994', tone: 'sand', legend: 'Zapatista rising against NAFTA, 1994' },
      { zone: 'brazil', label: 'PORTO ALEGRE', tone: 'sage', legend: 'World Social Forum, Porto Alegre, 2001' },
      { zone: 'westernEurope', label: 'FARM & LABOR PROTEST', tone: 'slate', legend: 'European farm and labor mobilization' },
      { zone: 'southAsia', label: 'ANTI-DAM MOVEMENTS', tone: 'bronze', legend: 'Narmada and other development protests' }
    ],
    flows: [
      { from: 'mexico', to: 'unitedStates', label: 'networked protest movements' },
      { from: 'brazil', to: 'westernEurope', label: 'transnational activist networks', bow: 0.22 }
    ]
  },
  {
    id: 'topic-9-8',
    code: 'Topic 9.8',
    title: 'Institutions in a Globalized World',
    subtitle: 'Topic 9.8 · The UN and the international order',
    highlights: [
      { zone: 'unitedStates', label: 'UN HEADQUARTERS', tone: 'gold', legend: 'United Nations, founded 1945' },
      { zone: 'westernEurope', label: 'EU & NATO', tone: 'slate', legend: 'European Union, NATO, and The Hague courts' },
      { zone: 'centralAfrica', label: 'PEACEKEEPING', tone: 'sage', legend: 'UN peacekeeping deployments' },
      { zone: 'swAsia', label: 'PEACEKEEPING', tone: 'sage', legend: 'Mandates and peacekeeping in Southwest Asia' },
      { zone: 'eastAsia', label: 'SECURITY COUNCIL', tone: 'bronze', legend: 'Permanent Security Council members' },
      { zone: 'southAmerica', label: 'REGIONAL BLOCS', tone: 'sand', legend: 'Mercosur and regional organizations' }
    ],
    flows: [
      { from: 'unitedStates', to: 'centralAfrica', label: 'peacekeeping mandates' },
      { from: 'westernEurope', to: 'swAsia', label: 'humanitarian and legal missions', bow: 0.2 }
    ],
    points: [
      { at: [-74, 40.7], label: 'New York', note: 'UN headquarters', side: 'left' },
      { at: [4.3, 52], label: 'The Hague', note: 'international courts' }
    ]
  },
  {
    id: 'topic-9-9',
    code: 'Topic 9.9',
    title: 'Continuity and Change in a Globalized World',
    subtitle: 'Topic 9.9 · What changed, what held',
    highlights: [
      { zone: 'unitedStates', label: 'TECHNOLOGY & CAPITAL', tone: 'gold', legend: 'Communication, transport, and capital hubs' },
      { zone: 'eastAsia', label: 'PRODUCTION SHIFT', tone: 'bronze', legend: 'Production shifts toward East Asia' },
      { zone: 'southAsia', label: 'POPULATION & SERVICES', tone: 'plum', legend: 'Population growth and service economies' },
      { zone: 'centralAfrica', label: 'PERSISTENT INEQUALITY', tone: 'sage', legend: 'Extraction and inequality persist' },
      { zone: 'europe', label: 'AGING & MIGRATION', tone: 'slate', legend: 'Aging populations and migration debates' },
      { zone: 'indianOcean', label: 'CLIMATE RISK', tone: 'sand', legend: 'Climate risk concentrated in the global south' }
    ],
    flows: [
      { from: 'centralAfrica', to: 'europe', label: 'migration', bow: 0.2 },
      { from: 'eastAsia', to: 'unitedStates', label: 'goods and data', bow: 0.28 }
    ]
  },

  // ── Unit 4 ──────────────────────────────────────────────────────────────────
  // These slots held a real map, just not the map the caption promised: a 1507
  // world map standing in for 1415-1522 voyage routes, or a 1700 political map
  // standing in for Columbian Exchange flows and silver routes.
  {
    id: 'topic-4-1',
    code: 'Topic 4.1',
    title: 'What Europe Knew, and How It Learned It',
    subtitle: 'Topic 4.1 \u00b7 Technological innovations',
    highlights: [
      { zone: 'westernEurope', label: 'IBERIAN COURTS', tone: 'gold', legend: 'Portuguese and Spanish navigation schools' },
      { zone: 'swAsia', label: 'ASTRONOMY & MATH', tone: 'sand', legend: 'Astrolabe, algebra, and star tables from the Islamic world' },
      { zone: 'eastAsia', label: 'COMPASS & STERNPOST', tone: 'bronze', legend: 'Chinese magnetic compass and sternpost rudder' },
      { zone: 'indianOcean', label: 'MONSOON KNOWLEDGE', tone: 'slate', legend: 'Indian Ocean pilots\' wind and current knowledge' }
    ],
    flows: [
      { from: 'eastAsia', to: 'swAsia', label: 'compass technology west' },
      { from: 'swAsia', to: 'westernEurope', label: 'instruments and astronomy west', bow: 0.22 }
    ],
    note: 'BeHistorical instructional map. European voyaging combined borrowed instruments with local ship design; coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-4-2',
    code: 'Topic 4.2',
    title: 'European Exploration Routes, 1415-1522',
    subtitle: 'Topic 4.2 \u00b7 Exploration: causes and events',
    highlights: [
      { zone: 'westernEurope', label: 'IBERIA', tone: 'gold', legend: 'Portugal and Spain: the voyages set out from here' },
      { zone: 'westAfrica', label: 'WEST AFRICAN COAST', tone: 'sand', legend: 'Portuguese coastal forts and trade, 1415-1490s' },
      { zone: 'southAsia', label: 'CALICUT 1498', tone: 'bronze', legend: 'Da Gama reaches India, 1498' },
      { zone: 'caribbean', label: 'CARIBBEAN 1492', tone: 'plum', legend: 'Columbus lands in the Caribbean, 1492' },
      { zone: 'indonesia', label: 'SPICE ISLANDS', tone: 'sage', legend: 'The Moluccas: the goal of the whole enterprise' }
    ],
    flows: [
      { from: 'westernEurope', to: 'westAfrica', label: 'down the African coast' },
      { from: 'westAfrica', to: 'southAsia', label: 'round the Cape to India, 1498', bow: 0.3 },
      { from: 'westernEurope', to: 'caribbean', label: 'west across the Atlantic, 1492', bow: -0.2 },
      { from: 'southernCone', to: 'indonesia', label: 'Magellan through the Pacific, 1519-1522', bow: 0.22 }
    ],
    points: [
      { at: [-17, 15], label: 'Cape Verde', note: 'Atlantic staging point', side: 'left' },
      { at: [18, -34], label: 'Cape of Good Hope', note: 'rounded 1488' }
    ]
  },
  {
    id: 'topic-4-3',
    code: 'Topic 4.3',
    title: 'The Columbian Exchange: Flows Between Hemispheres',
    subtitle: 'Topic 4.3 \u00b7 What moved, and which way',
    highlights: [
      { zone: 'europe', label: 'EASTERN HEMISPHERE', tone: 'slate', legend: 'Old World: wheat, sugar, horses, cattle, smallpox, measles' },
      { zone: 'westAfrica', label: 'WEST AFRICA', tone: 'sand', legend: 'West Africa: rice, okra, and enslaved people forced west' },
      { zone: 'mexico', label: 'MESOAMERICA', tone: 'gold', legend: 'Maize, beans, tomatoes, cacao, vanilla' },
      { zone: 'andes', label: 'ANDES', tone: 'bronze', legend: 'Potatoes, quinoa, silver' },
      { zone: 'brazil', label: 'AMAZONIA', tone: 'sage', legend: 'Manioc, rubber, tobacco' }
    ],
    flows: [
      { from: 'mexico', to: 'europe', label: 'American crops east' },
      { from: 'europe', to: 'mexico', label: 'Eurasian animals, crops, and disease west', bow: -0.28 },
      { from: 'westAfrica', to: 'brazil', label: 'enslaved Africans forced west', bow: -0.16 },
      { from: 'andes', to: 'eastAsia', label: 'silver across the Pacific', bow: 0.3 }
    ],
    note: 'BeHistorical instructional map. Arrows show direction of exchange, not specific voyages; coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-4-4',
    code: 'Topic 4.4',
    title: 'Maritime Empire Routes and Trading Posts, c. 1550-1650',
    subtitle: 'Topic 4.4 \u00b7 Maritime empires established',
    highlights: [
      { zone: 'westernEurope', label: 'CHARTERED COMPANIES', tone: 'gold', legend: 'Lisbon, Seville, Amsterdam, London: company headquarters' },
      { zone: 'westAfrica', label: 'COASTAL FORTS', tone: 'sand', legend: 'Elmina and other fortified trading posts' },
      { zone: 'southAsia', label: 'FACTORIES', tone: 'bronze', legend: 'Goa, Surat, Madras: fortified trading factories' },
      { zone: 'indonesia', label: 'SPICE MONOPOLY', tone: 'sage', legend: 'Batavia and the Dutch spice monopoly' },
      { zone: 'mexico', label: 'VICEROYALTY', tone: 'plum', legend: 'Spanish American viceroyalties, not just trading posts' }
    ],
    flows: [
      { from: 'westernEurope', to: 'southAsia', label: 'company fleets out', bow: 0.24 },
      { from: 'indonesia', to: 'westernEurope', label: 'spices home', bow: -0.24 },
      { from: 'mexico', to: 'westernEurope', label: 'silver home', bow: 0.16 }
    ],
    note: 'BeHistorical instructional map. Portuguese and Dutch power rested on fortified posts and sea lanes rather than territory; Spain claimed land. Coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-4-5',
    code: 'Topic 4.5',
    title: 'Silver Routes and Colonial Administration, c. 1580-1700',
    subtitle: 'Topic 4.5 \u00b7 Maritime empires maintained',
    highlights: [
      { zone: 'andes', label: 'POTOS\u00cd', tone: 'gold', legend: 'Potos\u00ed silver, mined under the mita labor draft' },
      { zone: 'mexico', label: 'NEW SPAIN', tone: 'bronze', legend: 'Zacatecas silver and the Manila galleon' },
      { zone: 'philippines', label: 'MANILA', tone: 'sand', legend: 'Manila: the Pacific transfer point' },
      { zone: 'eastAsia', label: 'MING & QING CHINA', tone: 'plum', legend: 'China: the market that absorbed the silver' },
      { zone: 'westernEurope', label: 'SEVILLE', tone: 'slate', legend: 'Seville and the Atlantic treasure fleets' }
    ],
    flows: [
      { from: 'andes', to: 'westernEurope', label: 'treasure fleets east' },
      { from: 'mexico', to: 'philippines', label: 'Manila galleon west', bow: 0.2 },
      { from: 'philippines', to: 'eastAsia', label: 'silver into China', bow: 0.16 }
    ],
    points: [
      { at: [-65.7, -19.6], label: 'Potos\u00ed', note: 'the silver mountain', side: 'left' }
    ]
  },
  {
    id: 'topic-4-6',
    code: 'Topic 4.6',
    title: 'Resistance and Rivalry in the Colonial World, c. 1600-1700',
    subtitle: 'Topic 4.6 \u00b7 Internal and external challenges to state power',
    highlights: [
      { zone: 'unitedStates', label: 'PUEBLO REVOLT 1680', tone: 'gold', legend: 'Pueblo Revolt drives Spain from New Mexico, 1680' },
      { zone: 'brazil', label: 'MAROON COMMUNITIES', tone: 'sage', legend: 'Palmares and other maroon communities' },
      { zone: 'caribbean', label: 'PRIVATEERS', tone: 'sand', legend: 'Imperial rivalry and privateering in the Caribbean' },
      { zone: 'eastAsia', label: 'MING COLLAPSE 1644', tone: 'plum', legend: 'Ming collapse and the Qing conquest, 1644' },
      { zone: 'anatolia', label: 'OTTOMAN REVOLTS', tone: 'bronze', legend: 'Janissary revolts and provincial unrest' }
    ],
    flows: [
      { from: 'westernEurope', to: 'caribbean', label: 'rival European fleets' }
    ]
  },
  {
    id: 'topic-4-8',
    code: 'Topic 4.8',
    title: 'The World at c. 1700: Change and Continuity',
    subtitle: 'Topic 4.8 \u00b7 Continuity and change, 1450-1750',
    highlights: [
      { zone: 'westernEurope', label: 'NEW: ATLANTIC POWERS', tone: 'gold', legend: 'Changed: Atlantic Europe now sits at the centre of world trade' },
      { zone: 'caribbean', label: 'NEW: PLANTATION ZONE', tone: 'plum', legend: 'Changed: plantation economies built on enslaved labor' },
      { zone: 'andes', label: 'NEW: SILVER ECONOMY', tone: 'sand', legend: 'Changed: American silver ties every region together' },
      { zone: 'eastAsia', label: 'SAME: QING CHINA', tone: 'bronze', legend: 'Continuity: China remains the largest economy' },
      { zone: 'southAsia', label: 'SAME: MUGHAL INDIA', tone: 'slate', legend: 'Continuity: land empires still rule most people' },
      { zone: 'swAsia', label: 'SAME: OTTOMAN POWER', tone: 'sage', legend: 'Continuity: the Ottomans still hold the eastern Mediterranean' }
    ]
  },

  // ── Unit 6 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-6-2',
    code: 'Topic 6.2',
    title: 'State Expansion, c. 1850-1914',
    subtitle: 'Topic 6.2 \u00b7 Where empires and settler states expanded',
    highlights: [
      { zone: 'centralAfrica', label: 'PARTITION OF AFRICA', tone: 'sand', legend: 'Africa partitioned after Berlin, 1884-85' },
      { zone: 'southAsia', label: 'BRITISH RAJ', tone: 'bronze', legend: 'Crown rule in India after 1858' },
      { zone: 'seAsia', label: 'SOUTHEAST ASIA', tone: 'sage', legend: 'French Indochina, Dutch Indies, British Burma' },
      { zone: 'japan', label: 'JAPANESE EMPIRE', tone: 'plum', legend: 'Japanese expansion into Taiwan and Korea' },
      { zone: 'unitedStates', label: 'US WESTWARD', tone: 'gold', legend: 'US continental expansion and the Pacific' },
      { zone: 'russia', label: 'RUSSIAN EASTWARD', tone: 'slate', legend: 'Russian expansion across Siberia and Central Asia' }
    ],
    note: 'BeHistorical instructional map. State expansion after 1850 was global, not only European and not only in Africa; coastlines are simplified for classroom projection.'
  },

  // ── Unit 7 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-7-3',
    code: 'Topic 7.3',
    title: 'A European War Fought by the World, 1914-1918',
    subtitle: 'Topic 7.3 \u00b7 Conducting World War I',
    highlights: [
      { zone: 'westernEurope', label: 'WESTERN FRONT', tone: 'gold', legend: 'Western Front: trench deadlock in France and Belgium' },
      { zone: 'easternEurope', label: 'EASTERN FRONT', tone: 'slate', legend: 'Eastern Front: mobile war, Russian collapse in 1917' },
      { zone: 'swAsia', label: 'OTTOMAN FRONTS', tone: 'sand', legend: 'Gallipoli, Mesopotamia, and the Arab Revolt' },
      { zone: 'centralAfrica', label: 'AFRICAN CAMPAIGNS', tone: 'sage', legend: 'Campaigns in the German African colonies' },
      { zone: 'southAsia', label: 'COLONIAL TROOPS', tone: 'bronze', legend: 'Over a million Indian troops and laborers served' },
      { zone: 'australia', label: 'DOMINION TROOPS', tone: 'plum', legend: 'Australian, New Zealand, and Canadian forces' }
    ],
    flows: [
      { from: 'southAsia', to: 'westernEurope', label: 'colonial troops to Europe', bow: 0.24 },
      { from: 'australia', to: 'swAsia', label: 'ANZAC forces to Gallipoli', bow: 0.2 }
    ]
  },
  {
    id: 'topic-7-6',
    code: 'Topic 7.6',
    title: 'Aggression in the 1930s',
    subtitle: 'Topic 7.6 \u00b7 Causes of World War II',
    highlights: [
      { zone: 'japan', label: 'JAPAN', tone: 'plum', legend: 'Japan: Manchuria 1931, full invasion of China 1937' },
      { zone: 'eastAsia', label: 'CHINA INVADED', tone: 'sand', legend: 'Manchuria and eastern China occupied' },
      { zone: 'europe', label: 'GERMANY', tone: 'slate', legend: 'Germany: Rhineland 1936, Austria and Czechoslovakia 1938-39' },
      { zone: 'mediterranean', label: 'ITALY', tone: 'bronze', legend: 'Italy: Ethiopia 1935, Albania 1939' },
      { zone: 'ethiopia', label: 'ETHIOPIA 1935', tone: 'sage', legend: 'Ethiopia invaded; the League of Nations does not stop it' },
      { zone: 'unitedStates', label: 'NEUTRALITY', tone: 'gold', legend: 'US neutrality laws; appeasement in Britain and France' }
    ],
    flows: [
      { from: 'japan', to: 'eastAsia', label: 'invasion of China' },
      { from: 'mediterranean', to: 'ethiopia', label: 'invasion of Ethiopia', bow: 0.2 }
    ],
    note: 'BeHistorical instructional map. The 1930s crises were tests of collective security that failed one after another; coastlines are simplified for classroom projection.'
  },
  {
    id: 'topic-7-7',
    code: 'Topic 7.7',
    title: 'The World at War, c. 1942',
    subtitle: 'Topic 7.7 \u00b7 Conducting World War II',
    highlights: [
      { zone: 'europe', label: 'EUROPEAN THEATRE', tone: 'slate', legend: 'European theatre: Axis-controlled Europe at its furthest extent' },
      { zone: 'russia', label: 'EASTERN FRONT', tone: 'plum', legend: 'Eastern Front: the war\'s largest and deadliest theatre' },
      { zone: 'northAfrica', label: 'NORTH AFRICA', tone: 'sand', legend: 'North African campaign, 1940-1943' },
      { zone: 'indonesia', label: 'PACIFIC THEATRE', tone: 'bronze', legend: 'Pacific theatre: Japanese expansion to its limit, 1942' },
      { zone: 'eastAsia', label: 'CHINA THEATRE', tone: 'sage', legend: 'China: fighting since 1937' },
      { zone: 'unitedStates', label: 'ARSENAL', tone: 'gold', legend: 'US industry supplying every Allied theatre' }
    ],
    flows: [
      { from: 'unitedStates', to: 'britain', label: 'Lend-Lease and convoys' },
      { from: 'unitedStates', to: 'indonesia', label: 'Pacific island campaign', bow: 0.26 }
    ]
  },
  {
    id: 'topic-7-8',
    code: 'Topic 7.8',
    title: 'Mass Atrocities After 1900',
    subtitle: 'Topic 7.8 \u00b7 Where, and under what conditions',
    highlights: [
      { zone: 'anatolia', label: 'ARMENIANS, 1915', tone: 'slate', legend: 'Armenian genocide under the Ottoman Empire, 1915' },
      { zone: 'europe', label: 'THE HOLOCAUST', tone: 'plum', legend: 'The Holocaust: European Jews, Roma, and others, 1941-1945' },
      { zone: 'eastAsia', label: 'NANJING, 1937', tone: 'sand', legend: 'Japanese atrocities in China, from 1937' },
      { zone: 'centralAfrica', label: 'RWANDA, 1994', tone: 'sage', legend: 'Rwandan genocide, 1994' },
      { zone: 'easternEurope', label: 'BOSNIA, 1992-95', tone: 'bronze', legend: 'Ethnic cleansing in the former Yugoslavia' },
      { zone: 'seAsia', label: 'CAMBODIA, 1975-79', tone: 'gold', legend: 'Khmer Rouge mass killing in Cambodia' }
    ],
    note: 'BeHistorical instructional map. Locations are marked so students can analyze the political conditions that made mass violence possible, and the international responses that did or did not follow.'
  },

  // ── Unit 8 ──────────────────────────────────────────────────────────────────
  {
    id: 'topic-8-5',
    code: 'Topic 8.5',
    title: 'Decolonization, 1945-1975',
    subtitle: 'Topic 8.5 \u00b7 How empires ended',
    highlights: [
      { zone: 'southAsia', label: 'INDIA 1947', tone: 'gold', legend: 'India and Pakistan, 1947: negotiated, then partitioned' },
      { zone: 'seAsia', label: 'INDOCHINA & INDONESIA', tone: 'bronze', legend: 'Indonesia 1949 and Vietnam 1954: won by armed struggle' },
      { zone: 'westAfrica', label: 'GHANA 1957', tone: 'sage', legend: 'Ghana 1957, then most of West Africa by 1960' },
      { zone: 'northAfrica', label: 'ALGERIA 1962', tone: 'plum', legend: 'Algeria 1962: independence after a brutal war' },
      { zone: 'eastAfrica', label: 'EAST AFRICA', tone: 'sand', legend: 'Kenya and East Africa in the early 1960s' },
      { zone: 'southernAfrica', label: 'LUSOPHONE 1975', tone: 'slate', legend: 'Angola and Mozambique, 1975: last European withdrawals' }
    ],
    flows: [
      { from: 'southAsia', to: 'westAfrica', label: 'independence movements learn from each other', bow: 0.22 }
    ],
    note: 'BeHistorical instructional map. Decolonization after 1945 ran across Asia and Africa, on timelines that differed by how each empire chose to leave.'
  },
  {
    id: 'topic-8-6',
    code: 'Topic 8.6',
    title: 'Newly Independent States, 1947-1965',
    subtitle: 'Topic 8.6 \u00b7 The problems independence did not solve',
    highlights: [
      { zone: 'southAsia', label: 'PARTITION', tone: 'plum', legend: 'Partition of India, 1947: mass displacement and violence' },
      { zone: 'swAsia', label: 'ISRAEL & PALESTINE', tone: 'slate', legend: '1948: the state of Israel and Palestinian displacement' },
      { zone: 'egypt', label: 'ASWAN & SUEZ', tone: 'gold', legend: 'Egypt: Suez nationalized 1956, Aswan High Dam built' },
      { zone: 'eastAfrica', label: 'AFRICAN SOCIALISM', tone: 'sage', legend: 'Tanzania: the Arusha Declaration, 1967' },
      { zone: 'westAfrica', label: 'BORDERS INHERITED', tone: 'sand', legend: 'Colonial borders kept, cutting across communities' },
      { zone: 'britain', label: 'MIGRATION', tone: 'bronze', legend: 'Migration from former colonies to the metropole' }
    ],
    flows: [
      { from: 'southAsia', to: 'britain', label: 'migration to the former metropole', bow: 0.22 }
    ]
  }
];
