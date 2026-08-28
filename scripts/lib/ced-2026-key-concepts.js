'use strict';

// Runtime source of truth for AP World History: Modern CED wording,
// effective Fall 2026. Only codes that previously drifted are listed here;
// all other CED-exact text passes through unchanged.
const TEXT_BY_CODE = {
  'KC-3.2.I.A': 'Empires and states in Afro-Eurasia and the Americas demonstrated continuity, innovation, and diversity in the 13th century. This included the Song Dynasty of China, which utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.',
  'KC-3.3.III.A.i': 'The economy of Song China became increasingly commercialized while continuing to depend on free peasant and artisanal labor.',
  'KC-3.1.I.D': 'The economy of Song China flourished as a result of increased productive capacity, expanding trade networks, and innovations in agriculture and manufacturing.',
  'KC-3.1.I.A.i': 'Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes—including the Silk Roads—promoting the growth of powerful new trading cities.',
  'KC-3.1.I.E.i': 'The expansion of empires—including the Mongols—facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors’ economies and trade networks.',
  'KC-3.2.II.A.iii': 'Interregional contacts and conflicts between states and empires encouraged significant technological and cultural transfers, including during Chinese maritime activity led by Ming Admiral Zheng He.',
  'KC-3.1.I.E.ii': 'The expansion of empires—including Mali in West Africa–facilitated Afro-Eurasian trade and communication as new people were drawn into the economies and trade networks.',
  'KC-4.1.VI.i': 'The Protestant Reformation marked a break with existing Christian traditions and both the Protestant and Catholic reformations contributed to the growth of Christianity.',
  'KC-4.1': 'The interconnection of the Eastern and Western Hemispheres made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.',
  'KC-4.1.II.A': 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.',
  'KC-4.1.V.D': 'Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops.',
  'KC-4.1.IV': 'The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants.',
  'KC-4.1.IV.D.ii': 'The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.',
  'KC-4.2.II': 'The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified.',
  'KC-5.3.I.B': 'The ideas of Enlightenment philosophers, as reflected in revolutionary documents—including the American Declaration of Independence during the American Revolution, the French “Declaration of the Rights of Man and of the Citizen” during the French Revolution, and Bolívar’s “Letter from Jamaica” on the eve of the Latin American revolutions—influenced resistance to existing political authority, often in pursuit of independence and democratic ideals.',
  'KC-5.1.I.A': 'A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including:<br>▪ Proximity to waterways; access to rivers and canals<br>▪ Geographical distribution of coal, iron, and timber<br>▪ Urbanization<br>▪ Improved agricultural productivity<br>▪ Legal protection of private property<br>▪ Access to foreign resources<br>▪ Accumulation of capital',
  'KC-5.1.II.B': 'The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.',
  'KC-5.1.VI.B': 'While women and often children in working class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.',
  'KC-5.2.I.A': 'Some states with existing colonies strengthened their control over those colonies and in some cases assumed direct control over colonies previously held by non-state entities.',
  'KC-5.2.I.B': 'European states as well as the United States and Japan acquired territories throughout Asia and the Pacific, while Spanish and Portuguese influence declined.',
  'KC-5.2.I.C': 'Many European states used both warfare and diplomacy to expand their empires in Africa.',
  'KC-5.2.II.B': 'The United States, Russia, and Japan expanded their land holdings by conquering and settling neighboring territories.',
  'KC-5.3.III.D': 'Increasing questions about political authority and growing nationalism contributed to anticolonial movements.',
  'KC-5.2.II.C': 'Anti-imperial resistance took various forms, including direct resistance within empires and the creation of new states on the peripheries.',
  'KC-5.3.III.E': 'Increasing discontent with imperial rule led to rebellions, some of which were influenced by religious ideas.',
  'KC-5.1.II.A': 'The need for raw materials for factories and increased food supplies for the growing population in urban centers led to the growth of export economies around the world that specialized in commercial extraction of natural resources and the production of food and industrial crops. The profits from these raw materials were used to purchase finished goods.',
  'KC-5.2.I.E': 'Industrialized states and businesses within those states practiced economic imperialism primarily in Asia and Latin America.',
  'KC-5.1.II.C': 'Trade in some commodities was organized in a way that gave merchants and companies based in Europe and the U.S. a distinct economic advantage.',
  'KC-5.4.I': 'Migration in many cases was influenced by changes in demographics in both industrialized and unindustrialized societies that presented challenges to existing patterns of living.',
  'KC-5.4.I.B': 'Because of the nature of new modes of transportation, both internal and external migrants increasingly relocated to cities. This pattern contributed to the significant global urbanization of the 19th century. The new methods of transportation also allowed for many migrants to return, periodically or permanently, to their home societies.',
  'KC-5.4.II.A': 'Many individuals chose freely to relocate, often in search of work.',
  'KC-5.4.II.B': 'The new global capitalist economy continued to rely on coerced and semicoerced labor migration, including enslavement Chinese and Indian indentured servitude, and convict labor.',
  'KC-5.4.III.A': 'Migrants tended to be male, leaving women to take on new roles in the home society that had been formerly occupied by men.',
  'KC-5.4.III.B': 'Migrants often created ethnic enclaves in different parts of the world that helped transplant their culture into new environments.',
  'KC-5.4.III.C': 'Receiving societies did not always embrace immigrants, as seen in the various degrees of ethnic and racial prejudice and the ways states attempted to regulate the increased flow of people across their borders.',
  'KC-5.1': 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.',
  'KC-5.2': 'As states industrialized, they also expanded existing overseas empires and established new colonies and transoceanic relationships.',
  'KC-5.3': 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.',
  'KC-5.4': 'As a result of the emergence of transoceanic empires and a global capitalist economy, migration patterns changed dramatically, and the numbers of migrants increased significantly.',
  'KC-6.2.I': 'The West dominated the global political order at the beginning of the 20th century, but both land-based and maritime empires gave way to new states by the century’s end.',
  'KC-6.3.I.A.i': 'In the Soviet Union, the government controlled the national economy through the Five Year Plans, often implementing repressive policies, with negative repercussions for the population.',
  'KC-6.2.IV.A.ii': 'World War II was a total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies or former colonies) for the purpose of waging war. Governments used ideologies, including fascism and communism to mobilize all of their state’s resources for war and, in the case of totalitarian states, to repress basic freedoms and dominate many aspects of daily life during the course of the conflicts and beyond.',
  'KC-6.1.III.C.ii': 'New military technology and new tactics, including the atomic bomb, fire-bombing, and the waging of “total war” led to increased levels of wartime casualties.',
  'KC-6.2.II.B': 'Regional, religious, and ethnic movements challenged colonial rule and inherited imperial boundaries. Some of these movements advocated for autonomy.',
  'KC-6.2.I.C': 'After the end of World War II, some colonies negotiated their independence, while others achieved independence through armed struggle.',
  'KC-6.2.V': 'Although conflict dominated much of the 20th century, many individuals and groups—including states—opposed this trend. Some individuals and groups, however, intensified the conflicts.',
  'KC-6.2.IV.E': 'Advances in U.S. military and technological development, the Soviet Union’s costly and ultimately failed invasion of Afghanistan, and public discontent and economic weakness in communist countries led to the end of the Cold War and the collapse of the Soviet Union.',
  'KC-6.1.I.A': 'New modes of communication—including radio communication, cellular communication, and the internet—as well as transportation, including air travel and shipping containers, reduced the problem of geographic distance.',
  'KC-6.3.III.ii': 'In much of the world, access to education as well as participation in new political and professional roles became more inclusive in terms of race, class, gender, and religion.',
  'KC-6.3.IV.i': 'Political and social changes of the 20th century led to changes in the arts and in the second half of the century, popular and consumer culture became more global.',
  'KC-6.3.III.i': 'Rights-based discourses challenged old assumptions about race, class, gender, and religion.',
  'KC-6.3.IV.ii': 'Arts, entertainment, and popular culture increasingly reflected the influence of a globalized society.',
  'KC-6.3.IV.iii': 'Consumer culture became globalized and transcended national borders.',
  'KC-6.1': 'Rapid advances in science and technology altered the understanding of the universe and the natural world and led to advances in communication, transportation, industry, agriculture, and medicine.',
  'KC-6.1.I.D': 'Energy technologies, including the use of petroleum and nuclear power, raised productivity and increased the production of material goods.',
  'KC-6.1.III.B': 'More effective forms of birth control gave women greater control over fertility, transformed reproductive practices, and contributed to declining rates of fertility in much of the world.',
  'KC-6.1.I.B': 'The Green Revolution and commercial agriculture increased productivity and sustained the earth’s growing population as it spread chemically and genetically modified forms of agriculture.',
  'KC-6.1.I.C': 'Medical innovations, including vaccines and antibiotics, increased the ability of humans to survive and live longer lives.'
};

// When a topic is present here, every illustrative-example array for the topic
// is cleared first. Only the exact CED bullet items below are then restored.
const EXAMPLES_BY_TOPIC_AND_CODE = {
  '1.1': {
    'KC-3.1.III.D.i': ['Filial piety in East Asia', 'Influence of Neo-Confucianism and Buddhism in East Asia', 'Confucian traditions of both respect for and expected deference from women', 'Chinese literary and scholarly traditions and their spread to Heian Japan and Korea'],
    'KC-3.1.III.D.ii': ['Theravada', 'Mahayana', 'Tibetan'],
    'KC-3.3.III.A.i': ['Champa rice', 'Transportation innovations, like the Grand Canal expansion', 'Steel and iron production', 'Textiles and porcelains for export']
  },
  '1.2': {
    'KC-3.2.I': ['Seljuk Empire', 'Mamluk sultanate of Egypt', 'Delhi sultanates'],
    'KC-3.2.II.A.i': ['Advances in mathematics (Nasir al-Din al-Tusi)', "Advances in literature ('A'ishah al-Ba'uniyyah)", 'Advances in medicine', 'Preservation and commentaries on Greek moral and natural philosophy', 'House of Wisdom in Abbasid Bagdad', 'Scholarly and cultural transfers in Muslim and Christian Spain']
  },
  '2.2': { 'KC-3.2.II.A.ii': ['Transfer of Greco–Islamic medical knowledge to western Europe', 'Transfer of numbering systems to Europe', 'Adoption of Uyghur script'] },
  '2.5': {
    'KC-3.1.III.D': ['The influence of Buddhism in East Asia', 'The spread of Hinduism and Buddhism into Southeast Asia', 'The spread of Islam in sub-Saharan Africa and Asia', 'Gunpowder from China', 'Paper from China'],
    'KC-3.1.III.C': ['Ibn Battuta', 'Margery Kempe', 'Marco Polo']
  },
  '4.5': {
    'KC-4.3.III.ii': ['Muslim–European rivalry in the Indian Ocean', 'Moroccan conflict with the Songhai Empire'],
    'KC-4.2.II.A': ['Western Europe—wool and linen', 'India—cotton', 'China—silk']
  },
  '4.7': {
    'KC-4.3.I.B': ['Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire'],
    'KC-4.2.III.B': ['Ottoman timars', 'Russian boyars', 'European nobility']
  },
  '5.1': { 'KC-5.3.IV.B': ['Mary Wollstonecraft’s A Vindication of the Rights of Woman', 'Olympe de Gouges’s Declaration of the Rights of Woman and of the Female Citizen', 'Seneca Falls Conference (1848) organized by Elizabeth Cady Stanton and Lucretia Mott'] },
  '5.2': { 'KC-5.3.II.iii': ['Propaganda Movement in the Philippines', 'Maori nationalism and the New Zealand wars in New Zealand', 'Puerto Rico—writings of Lola Rodríguez de Tió', 'German and Italian unifications', 'Balkan nationalisms', 'Ottomanism'] },
  '5.7': { 'KC-5.1.III.B': ['Hong Kong and Shanghai Banking Corporation (HSBC)', 'Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo', 'Stock markets', 'Limited-liability corporations'] },
  '6.2': {
    'KC-5.2.I.A': ['Shift from the private ownership of the Congo by King Leopold II to the Belgium government', 'Shift from the Dutch East India Company to Dutch government control in Indonesia and Southeast Asia'],
    'KC-5.2.I.C': ['Britain in West Africa', 'Belgium in the Congo', 'French in West Africa'],
    'KC-5.2.I.D': ['New Zealand']
  },
  '6.3': {
    'KC-5.2.II.C': ['Túpac Amaru II’s rebellion in Peru', 'Samory Touré’s military battles in West Africa', 'Yaa Asantewaa War in West Africa', '1857 rebellion in India', 'Establishment of independent states in the Balkans', 'Sokoto Caliphate in modern-day Nigeria', 'Cherokee Nation', 'Zulu Kingdom'],
    'KC-5.3.III.E': ['Ghost Dance in the U.S.', 'Xhosa Cattle-Killing Movement in Southern Africa', 'Mahdist wars in Sudan']
  },
  '6.4': { 'KC-5.1.II.A': ['Cotton production in Egypt', 'Rubber extraction in the Amazon and the Congo basin', 'The palm oil trade in West Africa', 'The guano industries in Peru and Chile', 'Meat from Argentina and Uruguay', 'Diamonds from Africa'] },
  '6.5': {
    'KC-5.2.I.E': ['Britain and France expanding their influence in China through the Opium Wars', 'The construction of the Port of Buenos Aires with the support of British firms'],
    'KC-5.1.II.C': ['Opium produced in the Middle East or South Asia and exported to China', 'Cotton grown in South Asia and Egypt and exported to Great Britain and other European countries', 'Palm oil produced in sub-Saharan Africa and exported to European countries', 'Copper extracted in Chile']
  },
  '6.6': {
    'KC-5.4.I.B': ['Japanese agricultural workers in the Pacific', 'Lebanese merchants in the Americas', 'Italian industrial workers in Argentina'],
    'KC-5.4.II.A': ['Irish to the United States', 'British engineers and geologists to South Asia and Africa']
  },
  '6.7': {
    'KC-5.4.III.B': ['Chinese in Southeast Asia, the Caribbean, South America, and North America', 'Indians in East and Southern Africa, the Caribbean, and Southeast Asia', 'Irish in North America', 'Italians in North and South America'],
    'KC-5.4.III.C': ['Chinese Exclusion Act', 'White Australia policy']
  },
  '6.8': {},
  '7.4': { 'KC-6.3.I.B': ['The New Deal', 'The fascist corporatist economy', 'Governments with strong popular support in Brazil and Mexico'] },
  '7.5': { 'KC-6.2.I.B': ['Transfer of former German colonies to Great Britain and France under the system of League of Nations mandates', 'Manchukuo/Greater East Asia Co-Prosperity Sphere', 'Indian National Congress', 'West African resistance (strikes/congresses) to French rule'] },
  '7.7': { 'KC-6.2.IV.A.ii': ['Great Britain under Winston Churchill', 'United States under Franklin Roosevelt', 'Germany under Adolf Hitler', 'USSR under Joseph Stalin'] },
  '7.8': { 'KC-6.2.III.C': ['Armenians in the Ottoman Empire during and after World War I', 'Cambodia during the late 1970s', 'Tutsi in Rwanda in the 1990s', 'Ukraine in the Soviet Union in the 1920s and 1930s'] },
  '8.2': { 'KC-6.2.V.B': ['Sukarno in Indonesia', 'Kwame Nkrumah in Ghana'] },
  '8.3': { 'KC-6.2.IV.D': ['Korean War', 'Angolan Civil War', 'Sandinista-Contras conflict in Nicaragua'] },
  '8.4': { 'KC-6.2.II.D.i': ['Communist Revolution for Vietnamese independence', 'Mengistu Haile Mariam in Ethiopia', 'Land reform in Kerala and other states within India', 'White Revolution in Iran'] },
  '8.5': {
    'KC-6.2.II.A': ['Indian National Congress', 'Ho Chi Minh in French Indochina (Vietnam)', 'Kwame Nkrumah in British Gold Coast (Ghana)', 'Gamal Abdel Nasser in Egypt'],
    'KC-6.2.I.C': ['India from the British Empire', 'The Gold Coast from the British Empire', 'French West Africa', 'Algeria from the French empire', 'Angola from the Portuguese empire', 'Vietnam from the French empire'],
    'KC-6.2.II.B': ['Muslim League in British India', 'Québécois separatist movement in Canada', 'Biafra secessionist movement in Nigeria']
  },
  '8.6': {
    'KC-6.2.III.A.i': ['Israel', 'Cambodia', 'Pakistan'],
    'KC-6.3.I.C': ['Gamal Abdel Nasser’s promotion of economic development in Egypt', "Indira Gandhi's economic policies in India", 'Julius Nyerere’s modernization in Tanzania', 'Sirimavo Bandaranaike’s economic policies in Sri Lanka'],
    'KC-6.2.III.B': ['South Asians to Britain', 'Algerians to France', 'Filipinos to the United States']
  },
  '9.2': { 'KC-6.1.III.A': ['Malaria', 'Tuberculosis', 'Cholera', '1918 influenza pandemic', 'Ebola', 'HIV/AIDS', 'Heart disease', 'Alzheimer’s disease'] },
  '9.4': {
    'KC-6.3.I.D': ['The United States under Ronald Reagan', 'Britain under Margaret Thatcher', 'China under Deng Xiaoping', 'Chile under Augusto Pinochet'],
    'KC-6.3.I.E': ['Finland', 'Japan', 'U.S.', 'Vietnam', 'Bangladesh', 'Mexico', 'Honduras'],
    'KC-6.3.II.B': ['World Trade Organization (WTO)', 'North American Free Trade Agreement (NAFTA)', 'Association of Southeast Asian Nations (ASEAN)', 'Nestlé', 'Nissan', 'Mahindra and Mahindra']
  },
  '9.5': {
    'KC-6.3.III.i': ['The U.N. Universal Declaration of Human Rights, especially as it sought to protect the rights of children, women, and refugees', 'Global feminism movements', 'Negritude movement', 'Liberation theology in Latin America'],
    'KC-6.3.III.ii': ['The right to vote and/or to hold public office granted to women in the United States (1920), Brazil (1932), Turkey (1934), Japan (1945), India (1947), and Morocco (1963)', 'The rising rate of female literacy and the increasing numbers of women in higher education, in most parts of the world', 'The U.S. Civil Rights Act of 1965', 'The end of apartheid', 'Caste reservation in India'],
    'KC-6.3.II.C': ['Greenpeace', 'Professor Wangari Maathai’s Green Belt Movement in Kenya', 'World Fair Trade Organization']
  },
  '9.6': {
    'KC-6.3.IV.i': ['Music: Reggae', 'Movies: Bollywood', 'Social media: Facebook, Twitter', 'Television: BBC', 'Sports: World Cup soccer, the Olympics'],
    'KC-6.3.IV.iii': ['Online commerce: Alibaba, eBay', 'Global brands: Toyota, Coca-Cola']
  },
  '9.7': { 'KC-6.3.IV.iv': ['Anti-IMF and anti-World Bank activism', 'Advent of locally developed social media (Weibo in China)'] },
  '9.8': {},
  '9.9': {}
};

const REVIEW_EXPANSIONS = {
  'KC-6.3.III.i–ii': ['KC-6.3.III.i', 'KC-6.3.III.ii'],
  'KC-6.3.IV.i–iii': ['KC-6.3.IV.i', 'KC-6.3.IV.ii', 'KC-6.3.IV.iii']
};

function alignTopicConcepts(topicId, concepts) {
  const topic = String(topicId).replace(/^Topic\s+/i, '').trim();
  const exampleMap = EXAMPLES_BY_TOPIC_AND_CODE[topic];
  const aligned = [];

  for (const original of concepts || []) {
    if (topic === '7.9' && original.code === 'KC-6.2.IV') continue;

    const expansion = topic === '9.9' ? REVIEW_EXPANSIONS[original.code] : null;
    if (expansion) {
      for (const code of expansion) {
        aligned.push({
          ...original,
          code,
          text: TEXT_BY_CODE[code] || original.text,
          illustrativeExamples: []
        });
      }
      continue;
    }

    const concept = { ...original };
    if (/^KC-/.test(concept.code) && TEXT_BY_CODE[concept.code]) {
      concept.text = TEXT_BY_CODE[concept.code];
    }
    if (exampleMap && /^KC-/.test(concept.code)) {
      concept.illustrativeExamples = [...(exampleMap[concept.code] || [])];
    } else {
      concept.illustrativeExamples = Array.isArray(concept.illustrativeExamples)
        ? [...concept.illustrativeExamples]
        : [];
    }
    aligned.push(concept);
  }

  return aligned;
}

module.exports = { alignTopicConcepts, TEXT_BY_CODE, EXAMPLES_BY_TOPIC_AND_CODE };
