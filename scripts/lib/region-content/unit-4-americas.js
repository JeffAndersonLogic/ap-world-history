'use strict';

/**
 * Unit 4 by region: The Americas.
 *
 * The whole Unit 4 story of the Americas, c. 1450 to c. 1750, told as one narrative in four
 * sections: contact and the Columbian Exchange (KC-4.1.III, III.B, III.C; KC-4.1.V and V.A to
 * V.D), silver and the Spanish labor systems with the casta ranking (KC-4.2.II.D, KC-4.1.IV,
 * KC-4.1.IV.C, KC-4.2.III.A), the plantation Atlantic (KC-4.3.II.C, KC-4.2.II, KC-4.2.II.C,
 * KC-4.1.IV.D.i and .ii), and faith and resistance (KC-4.1.VI, KC-4.3.III.iii, KC-5.3.III.C).
 * Facts are drawn from the Topic 4.2 to 4.7 chapters and their claim ledgers, and follow their
 * corrections (the central Mexico figures are Cook and Borah's, not the retired 15 million to
 * 1.5 million pair; malaria is hedged; Brazil's mills are Indigenous-worked before the 1600s).
 * Deliberately left out: the conquests of the Mexica and the Inca, which no Unit 4 topic owns
 * and which appear only in two connective sentences, and any Indigenous history before 1450
 * beyond a sentence of setting. Indigenous survival is carried by the story itself (Plains horse
 * nations, Diné herders, Indigenous town governments, Nahua Christians, the Pueblos after 1692)
 * rather than stated as a slogan.
 */

module.exports = {
  topicKey: 'r4-americas',
  slug: 'region-4-americas',
  unit: '4',
  region: 'The Americas',
  titleHtml: 'The <em>Americas</em>',
  deck: `Between 1450 and 1750 the Americas were joined to the rest of the world, and for the people already here the joining began as a catastrophe. Colonies built economies on silver, sugar and forced labor, and their silver reached as far as China. Yet Indigenous Americans, Africans and Europeans together made the new societies, and people under colonial rule adapted and pushed back.`,
  topics: ['4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
  ced: [
    'KC-4.1',
    'KC-4.1.III',
    'KC-4.1.III.B',
    'KC-4.1.III.C',
    'KC-4.1.V',
    'KC-4.1.V.A',
    'KC-4.1.V.B',
    'KC-4.1.V.C',
    'KC-4.1.V.D',
    'KC-4.2.II.D',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
    'KC-4.2.III.A',
    'KC-4.3.II.C',
    'KC-4.2.II',
    'KC-4.2.II.C',
    'KC-4.1.IV.D.i',
    'KC-4.1.IV.D.ii',
    'KC-4.1.VI',
    'KC-4.3.III.iii',
    'KC-5.3.III.C'
  ],

  empires: [
    {
      id: 'contact',
      num: '01',
      accent: 'gold',
      name: 'Two Worlds Joined',
      navLabel: 'Contact',
      dates: 'c. 1450 to 1600 &nbsp;·&nbsp; Voyages, germs, animals and crops',
      thesis: `A Spanish gamble in 1492 joined two hemispheres that had been apart for thousands of years. Germs did the most damage; animals and plants changed the land and the people on it.`,
      parts: [
        { heading: 'A bet across the ocean', blocks: [
          { p: `In 1450 tens of millions of people lived in the Americas, from the Pueblo farming towns of North America to the Mexica (Aztec) cities and the Inca empire in the Andes. Then a state paid for a voyage (<a href="#chapter-t4-2">Topic 4.2</a>). In <span class="num">1492</span> the Spanish monarchs sponsored <b>Christopher Columbus</b>, who believed, wrongly, that Asia lay a few thousand miles west. He reached the Caribbean and died in <span class="num">1506</span> still insisting it was Asia. Spain and Portugal split their claims in the <span class="kt">Treaty of Tordesillas</span> of <span class="num">1494</span>, which gave Portugal the lands east of a line down the Atlantic, including what became Brazil, and Spain the lands west of it; the peoples living there had no say. Spain also sent Magellan's expedition west across the Pacific in 1520 to 1521.` },
          { p: `Others followed. England sent John Cabot to North America in <span class="num">1497</span>, France sent Jacques Cartier up the St Lawrence in the 1530s, and in <span class="num">1609</span> Henry Hudson, sailing for a Dutch trading company, turned west and explored the river now named for him. All of them were seeking a northern route to Asia. The continent and Arctic ice blocked any usable passage, and they found cod and a fur trade with Indigenous nations instead.` }
        ] },
        { heading: 'The germs that did the most damage', blocks: [
          { p: `Ships carried <span class="kt">disease vectors</span>, living carriers of disease such as rats and mosquitoes, and diseases that were endemic, always circulating, in Afro-Eurasia: <b>smallpox</b>, <b>measles</b> and, most likely, <b>malaria</b>. Many of these diseases had first spread where crowds of people lived beside herd animals. The Americas had few such herds (llamas and alpacas in the Andes), and their people had never met these germs.` },
          { p: `A European adult usually had <span class="kt">acquired immunity</span> to smallpox, gained by surviving it as a child; nobody in the Americas had that chance. So it struck every age group at once, and nobody was left to plant, cook or nurse. Smallpox reached the Caribbean in <span class="num">1518</span> and Mexico in <span class="num">1520</span>, where it swept through the Mexica capital, Tenochtitlan. Spanish forces, fighting beside many thousands of Indigenous allies and helped by these epidemics, overthrew the Mexica in <span class="num">1521</span>. In the 1530s they took over an Inca empire already split by a succession war that had begun after an epidemic killed its emperor.` },
          { p: `In many regions the population fell by half to ninety percent or more within a century or so. Sherburne Cook and Woodrow Borah's reconstruction from Spanish tribute records puts central Mexico at about 6.3 million people in <span class="num">1548</span> and about 1.1 million in <span class="num">1605</span>. Other historians' estimates differ, but nearly all show a catastrophe. War, forced labor and hunger made every epidemic deadlier.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Never write that Indigenous Americans were biologically weaker. Immunity to smallpox is gained by surviving it. The pattern ran both ways: Europeans in West Africa died in huge numbers of malaria and yellow fever, diseases that local people had long lived with and that struck newcomers far harder.` } }
        ] },
        { heading: 'Animals, grains and sugar', blocks: [
          { p: `Historians call the whole two-way transfer of plants, animals and diseases the <span class="kt">Columbian Exchange</span>. Other things crossed on purpose. On his second voyage in <span class="num">1493</span> Columbus carried horses, cattle, pigs, wheat and sugarcane. Enslaved Africans, carried across the ocean by force, brought foods of their own, such as okra and African rice, and grew them in garden plots to feed themselves (<a href="#chapter-t4-3">Topic 4.3</a>).` },
          { p: `Indigenous peoples used what arrived on their own terms. Horses escaped, were traded and were taken, and by the 1700s plains nations such as the <b>Comanche</b> had built new ways of life around hunting bison on horseback. Among the Diné (Navajo), sheep herding and weaving became central. These were new Indigenous cultures, not old ones fading.` },
          { p: `Crops went east too. Maize, potatoes and cassava became staple crops in Europe, Asia and Africa, and because they grew where old crops could not, they fed growing populations. Sugar became the great cash crop, grown on <span class="kt">plantations</span>, large farms growing one cash crop with coerced labor, and shipped mostly to Europe.` }
        ] }
      ],
      terms: [
        ['Columbian Exchange', `The transfer of plants, animals and diseases between the Eastern and Western Hemispheres after 1492.`],
        ['Treaty of Tordesillas', `The 1494 agreement that split newly reached lands between Spain and Portugal, putting Brazil on Portugal's side.`],
        ['Plantation', `A large farm growing one cash crop, such as sugar or tobacco, worked by coerced labor.`]
      ]
    },

    {
      id: 'silver',
      num: '02',
      accent: 'rust',
      name: 'Silver, Land and Forced Work',
      navLabel: 'Silver and labor',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Encomienda, Potosí, the galleons, casta',
      thesis: `Spain's farms and mines needed workers that disease was killing, so Spain reused an Inca labor duty and introduced new kinds of forced work. The silver it produced traveled around the world, much of it to China.`,
      parts: [
        { heading: 'Paying conquerors with other people\'s work', blocks: [
          { p: `Colonial economies in the Americas rested above all on farming, with mining beside it (<a href="#chapter-t4-4">Topic 4.4</a>). The crown rewarded conquerors with the <span class="kt">encomienda</span>: the right to demand labor and tribute from a named Indigenous community, in return for a duty to protect its people and have them taught Christianity. Legally it was not a grant of land and did not make the people property, though in practice the difference was often thin.` },
          { p: `Friars such as Bartolomé de las Casas campaigned against it, and the New Laws of <span class="num">1542</span> restricted it. Indigenous towns fought it in Spanish courts: in the 1550s the people of Tepetlaoztoc, in central Mexico, sent the crown a painted complaint recording what their encomenderos, the Spaniards who held the grant, had taken. As the encomienda declined, the <span class="kt">hacienda</span>, a large estate, grew. Its Indigenous and mixed-race workers farmed and herded for the owner, often for wages and sometimes tied to the estate by debt.` }
        ] },
        { heading: 'A mountain of silver', blocks: [
          { p: `In <span class="num">1545</span> an Andean miner, Diego Gualpa, by his own later account, found silver at <b>Potosí</b>, high in the Andes, and Spanish colonists claimed the mountain. A great strike at Zacatecas in Mexico followed in <span class="num">1546</span>. Miners in New Spain worked out a way to refine silver ore with mercury, and from the 1570s it was used at Potosí too. Mining needed thousands of workers.` },
          { p: `The Inca had required communities to send people in turns to work for the state. That rotating duty was the <span class="kt">mit’a</span>. In the 1570s Francisco de Toledo, the viceroy (the king's governor) of Peru, turned it into a draft that sent one-seventh of the adult men of the highland districts to Potosí each year, more than 14,000 men by <span class="num">1578</span>. The idea of a turn of service continued; the master and the danger changed, and many men never came home from the mines and mercury refineries.` }
        ] },
        { heading: 'Where the silver went', blocks: [
          { p: `Spain ran this trade by the rules of <span class="kt">mercantilism</span>, the belief that a kingdom grows strong by bringing in more gold and silver than flows out and by keeping its colonies' trade to itself (<a href="#chapter-t4-5">Topic 4.5</a>), and silver crossed to Seville in fleets guarded by warships. England ran its colonies the same way: laws from <span class="num">1660</span> required that colonial sugar and tobacco be shipped only to England.` },
          { p: `By one standard estimate, Spanish America produced about four-fifths of the world's silver between 1500 and 1800, and much of it ended up in China. China's government had come to collect most taxes in silver, and China mined little of its own, so silver was worth more there than anywhere else. From <span class="num">1571</span>, when Spain founded Manila in the Philippines, <span class="kt">Manila galleons</span>, large Spanish sailing ships, crossed the Pacific from Acapulco in Mexico loaded with silver. Chinese merchants from Fujian traded silk and porcelain for it. Atlantic silver often went on to Asia too, in European ships.` }
        ] },
        { heading: 'A new top, ranked by birth', blocks: [
          { p: `Conquest and new wealth built a ranking of people by ancestry that historians call the <span class="kt">casta</span> system (<a href="#chapter-t4-7">Topic 4.7</a>), and among people counted as Spanish it favored those born in Spain. <span class="kt">Peninsulares</span>, people born in Spain, almost always held the post of viceroy and held many of the highest posts in government and the Church: a new political elite. <span class="kt">Creoles</span>, of Spanish ancestry but born in the Americas, grew rich from mines, estates and trade: a new economic elite. Below them came people of mixed ancestry, such as <span class="kt">mestizos</span> (Spanish and Indigenous). Indigenous people kept their own town governments and paid tribute. People of African ancestry, free and enslaved, were ranked lowest. It was never one fixed ladder. Official records used only a few labels, how a person was recorded could change with wealth, work and reputation, and the ranking worked differently from one region to another: a prosperous mestizo might be recorded as Spanish.` }
        ] }
      ],
      terms: [
        ['Encomienda', `A grant to a Spanish colonist of the right to the labor and tribute of a named Indigenous community.`],
        ['Hacienda', `A large colonial estate whose workers were often paid wages and were sometimes bound by debt.`],
        ['Mit’a', `The Inca rotating labor duty, turned by Viceroy Toledo in the 1570s into a draft for the silver mine at Potosí.`],
        ['Casta', `The ranking of people in Spanish America by ancestry; among people counted as Spanish, those born in Spain (peninsulares) were favored for the highest offices.`]
      ]
    },

    {
      id: 'plantations',
      num: '03',
      accent: 'iron',
      name: 'The Plantation Atlantic',
      navLabel: 'Plantations',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Sugar, tobacco, slavery, new peoples',
      thesis: `Sugar drew Europe's rival empires into the Americas. Colonists chose to work the plantations with enslaved Africans, bought by the million, and that choice changed who lived here.`,
      parts: [
        { heading: 'Rival empires, and a model from Madeira', blocks: [
          { p: `European states built rival maritime empires in the Americas, the College Board says, "driven largely by political, religious, and economic rivalries." The English and French built colonies in North America and the Caribbean in the early 1600s, and England took Jamaica from Spain in <span class="num">1655</span>. Companies paid for some of these colonies. Jamestown, England's first lasting colony, founded in <span class="num">1607</span>, was financed by the Virginia Company, a <span class="kt">joint-stock company</span> whose investors shared its profits and losses. The Dutch West India Company, chartered in <span class="num">1621</span>, seized part of Brazil's sugar coast from the Portuguese in <span class="num">1630</span> and held it until <span class="num">1654</span>.` },
          { p: `What these empires fought over was often sugar. The plantation was not invented in the Americas. On the Portuguese island of Madeira, enslaved workers, including Canary Islanders and Africans, grew sugar before <span class="num">1492</span>. The Americas supplied land. Brazil became the first great American sugar economy in the 1500s, and the Caribbean followed in the 1600s. Brazil's early mills used Indigenous labor, but during the 1600s their workers became overwhelmingly enslaved Africans.` },
          { p: `Disease emptied the land of workers, but people, not disease, chose to bring the Madeira system across. In the English Chesapeake, tobacco planters at first relied on <span class="kt">indentured servants</span>, mostly poor Europeans who worked four to seven years under contract to pay for their voyage, and from the late 1600s turned more and more to enslaved Africans.` }
        ] },
        { heading: 'Slavery for life', blocks: [
          { p: `Plantations bought enslaved Africans in ever larger numbers, driven above all by sugar, and in Brazil also by gold mining. Estimates from the Trans-Atlantic Slave Trade Database put the number forced onto ships bound for the Americas at about 278,000 in the whole 1500s and more than 2.5 million in the fifty years from <span class="num">1701</span> to <span class="num">1750</span>. They were held in <span class="kt">chattel slavery</span>: owned as property for life, with their children born enslaved. Virginia's law of <span class="num">1662</span> made the children of enslaved women enslaved, and colonial laws tied slavery to race.` },
          { p: `The results, in the CED's words, were "significant demographic, social, and cultural changes." On Barbados enslaved Africans outnumbered Europeans by the late 1600s, and across the British, French and Dutch Caribbean colonies Africans and their descendants became most of the people.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Slavery did not begin in 1500, and it did not begin with the Atlantic trade; it was thousands of years old in Africa, the Mediterranean world and elsewhere, the Americas included, and sometimes lifelong and inherited. What the plantations changed was its scale, its tie to race, and how few ways out it left.` } }
        ] },
        { heading: 'The Atlantic system, and a world made by everyone', blocks: [
          { p: `Plantations anchored the <span class="kt">Atlantic trading system</span>, which moved goods, wealth and people. Sugar and tobacco went to Europe; guns, Indian cotton cloth and alcohol went to Africa; enslaved Africans were forced west, and ships from Brazil sailed straight to Africa and back.` },
          { p: `In the colonies, Africans, Indigenous Americans and Europeans lived side by side, usually because some were forced to, and all shaped what came out, from cooking to music. New <span class="kt">creole languages</span> (a different use of the word from the creole elite of Spanish America), such as Haitian Creole and Papiamentu, took most of their words from a European language while African languages shaped some of their grammar and sounds. The mixing happened under force, not between equals, but no single people made the result.` }
        ] }
      ],
      terms: [
        ['Indentured servitude', `Work under contract for a fixed term, usually four to seven years, to pay for a voyage to the colonies.`],
        ['Chattel slavery', `Slavery in which people are owned as property for life and their children are born enslaved.`],
        ['Atlantic trading system', `The movement of goods, wealth and labor, including enslaved people, among Europe, Africa and the Americas.`]
      ]
    },

    {
      id: 'resistance',
      num: '04',
      accent: 'oxide',
      name: 'Faith and Pushback',
      navLabel: 'Faith and resistance',
      dates: 'c. 1530 to 1750 &nbsp;·&nbsp; Missions, blending, revolts, maroons',
      thesis: `Christianity spread through the colonies, but the people who received it remade it. Where colonies pushed hardest, people organized and pushed back, sometimes winning terms that lasted.`,
      parts: [
        { heading: 'Spread, clash, blend', blocks: [
          { p: `Missionaries spread Christianity through Spanish and Portuguese America, and faith brought conflict too. From around 1610, priests in Peru led campaigns to "extirpate idolatry," destroying Andean sacred objects and punishing Andean religious specialists.` },
          { p: `Faiths also blended, which is called <span class="kt">syncretism</span>. At Tepeyac, a hill near Mexico City, Nahua and Spanish Christians were honoring the Virgin of Guadalupe by the 1550s; the friar Bernardino de Sahagún later wrote that the Nahua had once honored a goddess there called Tonantzin, "our mother." Historians argue over the link, but Nahua Christians made Mary their own. In French Saint-Domingue (today's Haiti), enslaved Africans built Vodou from West and Central African religions and Catholic saints.` }
        ] },
        { heading: 'The Pueblo Revolt and Metacom\'s War', blocks: [
          { p: `Expanding colonies met local resistance (<a href="#chapter-t4-6">Topic 4.6</a>). Spain planted New Mexico among the Pueblo peoples in <span class="num">1598</span>, demanding harvests and unpaid labor. Friars banned the sacred kachina dances in <span class="num">1661</span>, and in <span class="num">1675</span> the governor arrested forty-seven Pueblo religious leaders as sorcerers, on top of drought, famine and raids. One of them, <b>Popé</b> of Ohkay Owingeh, helped plan a rising that would strike every Spanish settlement at once.` },
          { p: `On August 10, <span class="num">1680</span>, the <span class="kt">Pueblo Revolt</span> began. The towns killed about 400 colonists and drove the survivors south to El Paso. For twelve years the Pueblos ruled themselves. Spain returned from <span class="num">1692</span> and crushed further revolts in <span class="num">1694</span> and <span class="num">1696</span>, but it did not bring back the encomienda, and friars pressed far less hard against Pueblo religion.` },
          { p: `In New England, colonists kept taking Wampanoag land. In <span class="num">1675</span> the Wampanoag leader <b>Metacom</b>, whom the English called King Philip, went to war, joined by other Native nations, and destroyed more than a dozen English towns. The colonists had greater numbers and Native allies. <span class="kt">Metacom's War</span> ended with his death in <span class="num">1676</span>, many captives sold into slavery in the Caribbean, and the Native nations of southern New England losing their independence.` }
        ] },
        { heading: 'Enslaved people organize', blocks: [
          { p: `Enslaved people resisted daily, and sometimes they organized. Behind Brazil's sugar coast, people who escaped slavery built <b>Palmares</b>, a <span class="kt">maroon community</span> of fortified towns with leaders and farms that beat back Portuguese and Dutch expeditions for most of the 1600s. Its leader Ganga Zumba accepted a treaty in <span class="num">1678</span>; Zumbi and many others fought on until Palmares fell in the 1690s. In Jamaica, a colony unable to defeat the Maroons in the mountains signed treaties in <span class="num">1739</span> recognizing their freedom, in exchange for returning runaways.` },
          { p: `That same year, enslaved people at the Stono River in South Carolina, several from Catholic Kongo, seized guns and marched toward Spanish Florida, which promised freedom to runaways who became Catholic. The militia broke the march, and the colony tightened control with the Negro Act of <span class="num">1740</span>. By 1750 the Pueblo towns, the Plains nations, the Nahua Christians and the Jamaica Maroons were all still there, living proof that colonial rule did not always have the last word.` }
        ] }
      ],
      terms: [
        ['Syncretism', `The blending of two or more religions into new beliefs and practices.`],
        ['Pueblo Revolt', `The coordinated rising of the Pueblo towns of New Mexico in 1680, which drove the Spanish out for twelve years.`],
        ['Metacom\'s War', `The war of 1675 to 1676 between New England's colonists and the Wampanoag and their allies, also called King Philip's War.`],
        ['Maroon community', `A community built by people who escaped slavery, usually in hard-to-reach country.`]
      ]
    }
  ],

  closing: {
    heading: 'The Americas at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review. The unit says little about this region's ideas, so two sides share one card.`,
    pairs: [
      { category: 'Political', title: 'Rival empires, and local pushback', body: `Spain sponsored Columbus in 1492, and Spain, Portugal, England, France and the Dutch built rival empires here. The Pueblo Revolt of 1680 won twelve years of self-rule and better terms; Metacom's War ended in defeat.` },
      { category: 'Religious', title: 'Christianity spread, clashed and blended', body: `Missionaries spread Christianity, and priests in Peru attacked Andean religion from about 1610. Faiths also blended: Nahua Christians made the Virgin of Guadalupe their own, and enslaved Africans in Saint-Domingue built Vodou.` },
      { category: 'Social', title: 'New peoples, new rankings', body: `Disease, made deadlier by war, forced labor and hunger, cut Indigenous populations by half to nine-tenths or more in many regions, and plantations brought millions of enslaved Africans. Spanish America ranked people in the casta system, and all three peoples made the mixed cultures that resulted.` },
      { category: 'Intellectual and technological', title: 'Arguments, ships, mercury and horses', body: `The ideas that mattered were arguments about empire: friars such as Las Casas called the encomienda unjust, and mercantilism shaped how Spain and England ran colonial trade. The decisive technologies were ocean-crossing ships, from Columbus's to the Manila galleons, mercury refining of silver, worked out in Mexico and used at Potosí, and the horse, around which Plains nations such as the Comanche built new ways of life.` },
      { category: 'Economic', title: 'Silver, sugar and forced labor', body: `Colonial economies rested on farms, mines and forced labor: the mit’a, encomienda, hacienda, indentured servitude and chattel slavery. Silver crossed both oceans, much of it ending in China, and sugar and tobacco went to Europe.` }
    ]
  }
};
