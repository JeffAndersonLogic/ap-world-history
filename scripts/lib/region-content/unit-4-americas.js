'use strict';

/**
 * Unit 4 by region: The Americas.
 *
 * The whole Unit 4 story of the Americas, c. 1450 to c. 1750, told as one narrative in four
 * sections: contact and the Columbian Exchange (KC-4.1.III, III.B, III.C; KC-4.1.V and V.A to
 * V.D), silver and the Spanish labor systems with the casta ranking (KC-4.2.II.D, KC-4.1.IV,
 * KC-4.1.IV.C, KC-4.2.III.A), the plantation Atlantic (KC-4.3.II.C, KC-4.2.II, KC-4.2.II.C,
 * KC-4.1.IV.D.i and .ii), and faith and resistance (KC-4.1.VI, KC-4.3.III.iii, KC-5.3.III.C).
 * KC-4.1, the unit's overview sentence, is carried by the whole chapter. Facts are drawn from
 * the Topic 4.2 to 4.8 chapters and their claim ledgers, and follow their corrections (the
 * central Mexico figures are Cook and Borah's, not the retired 15 million to 1.5 million pair;
 * malaria is hedged; Brazil's mills are Indigenous-worked before the 1600s; the plantation
 * system came from Madeira and then Sao Tome, as Topic 4.3 tells it). Deliberately left out:
 * the conquests of the Mexica and the Inca, which no Unit 4 topic owns and which appear only in
 * two connective sentences, and any Indigenous history before 1450 beyond a sentence of
 * setting. Indigenous survival is carried by the story itself (Plains horse nations, Indigenous
 * town governments, Nahua Christians, the Pueblos after 1692, the Jamaica Maroons) rather than
 * stated as a slogan.
 *
 * Plain-language and accuracy pass (2026-11-21), on the East Asia model: sentences cut to one
 * idea each, key terms defined in plain words where they first appear, and the College Board's
 * words moved out of the story into one "What the College Board says" box per section (kind
 * 'cb', one paragraph per item), quoted word for word from scripts/lib/ced-source/unit-4.js
 * with the topic linked and illustrative examples labelled as examples. Fixes from the
 * five-persona stress test of 2026-11-17: silver to China now follows the shared account
 * (already worth more in China than in Europe because the Ming gave up paper money; the Single
 * Whip then made most taxes payable in silver; China mined little), with no superlative; the
 * casta narrowing from the external review (item 5) kept in plain words; Madeira kept no
 * stronger than Topic 4.3 (Madeira, then Sao Tome, before the Americas), matching the
 * Sub-Saharan Africa chapter. Ledger hedges restored: "about one-seventh" (Topic 4.4 ledger),
 * American crops "helped feed" growing populations (Topic 4.3 ledger). Topic 4.8 added to
 * `topics`, since KC-4.1 and KC-4.2.II are Topic 4.8 codes. The closing now has six cards, one
 * per category. Cut for length, with their dates: Columbus's death (1506), the Treaty of
 * Tordesillas (1494), Magellan's Pacific crossing (1520 to 1521), the opening list of peoples,
 * Hudson's river, smallpox in the Caribbean (1518), Dine sheep herding, the encomienda's legal
 * limits, the Tepetlaoztoc complaint (1550s) and Indigenous court cases, the Seville fleets,
 * England's colonial trade laws (1660), Fujian as the merchants' home, Jamaica taken from Spain
 * (1655), the Dutch West India Company's founding (1621), Brazil's gold mining as a driver of
 * the slave trade, Indian cloth and the direct Brazil-Africa voyages, creole languages, the
 * "extirpate idolatry" quotation, the kachina dance ban (1661), Pope's town and the drought,
 * the Pueblo revolts of 1694 and 1696, Metacom's raids on English towns, the Palmares treaty
 * (1678) with Ganga Zumba and Zumbi, and the name of South Carolina's 1740 law. See
 * docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-americas',
  slug: 'region-4-americas',
  unit: '4',
  region: 'The Americas',
  titleHtml: 'The <em>Americas</em>',
  deck: `Between 1450 and 1750, the Americas were joined to the rest of the world. For the people already here, it began as a catastrophe. Colonies grew rich on silver, sugar and forced labor. Yet Indigenous Americans, Africans and Europeans together made the new societies, and people under colonial rule pushed back.`,
  topics: ['4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'],
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
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'contact',
      num: '01',
      accent: 'gold',
      name: 'Two Worlds Joined',
      navLabel: 'Contact',
      dates: 'c. 1450 to 1600 &nbsp;·&nbsp; Voyages, germs, animals and crops',
      thesis: `In 1492 a voyage paid for by Spain joined two halves of the world. Germs did the most damage. Animals and plants changed the land and its people.`,
      parts: [
        {
          heading: 'Voyages across the ocean',
          blocks: [
            { p: `In <span class="num">1450</span>, tens of millions of people lived in the Americas. In <span class="num">1492</span> the rulers of Spain paid for a voyage by <b>Christopher Columbus</b> (<a href="#chapter-t4-2">Topic 4.2</a>). He believed, wrongly, that Asia lay a few thousand miles west. He reached the Caribbean instead.` },
            { p: `England, France and the Dutch sent ships across the northern Atlantic, hoping to find a sea route to Asia. <b>John Cabot</b> sailed for England in <span class="num">1497</span>, <b>Jacques Cartier</b> for France in the 1530s, and <b>Henry Hudson</b> for the Dutch in <span class="num">1609</span>. Land and Arctic ice blocked every route. Instead, they found cod and a fur trade with Indigenous nations (see <a href="#r4-europe-crowns">Europe</a>).` }
          ]
        },
        {
          heading: 'The germs that did the most damage',
          blocks: [
            { p: `The ships carried <span class="kt">disease vectors</span>: living things, such as rats and mosquitoes, that spread disease. They also brought diseases that were <span class="kt">endemic</span> in Afro-Eurasia, which means always present there: <b>smallpox</b>, <b>measles</b> and, most likely, <b>malaria</b>. Many of these diseases first spread where people lived close to herd animals, and the Americas had few herds. So its people had never met these germs.` },
            { p: `Most European adults had <span class="kt">acquired immunity</span> to smallpox. They had caught it as children and survived. Nobody in the Americas had had that chance. So smallpox struck people of every age at once. Often no one was left healthy enough to plant, cook or nurse the sick.` },
            { p: `Smallpox swept through Tenochtitlan, the Mexica (Aztec) capital, in <span class="num">1520</span>. In <span class="num">1521</span> Spanish forces and many thousands of Indigenous allies, helped by the epidemic, overthrew the Mexica. In the 1530s the Spanish took over the Inca empire. A war over the throne had already split it, after an epidemic killed its emperor.` },
            { p: `In many regions, the population fell by half to ninety percent or more within about a century. The historians Sherburne Cook and Woodrow Borah estimated that central Mexico fell from about <span class="num">6.3 million</span> people in <span class="num">1548</span> to about <span class="num">1.1 million</span> in <span class="num">1605</span>. Other estimates differ, but nearly all show a catastrophe. War, forced labor and hunger made every epidemic deadlier.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Indigenous Americans were biologically weaker. Immunity to smallpox comes from surviving it. The pattern ran both ways: in West Africa, malaria and yellow fever killed Europeans in huge numbers, while local people had long lived with them.`
            } }
          ]
        },
        {
          heading: 'Animals, crops and sugar',
          blocks: [
            { p: `Historians call this two-way movement of plants, animals and diseases the <span class="kt">Columbian Exchange</span>. Disease crossed by accident, but much else crossed on purpose. On his second voyage, in <span class="num">1493</span>, Columbus brought horses, cattle, pigs, wheat and sugarcane. Enslaved Africans, carried across the ocean by force, brought foods such as okra and rice. They grew them in garden plots to feed themselves (<a href="#chapter-t4-3">Topic 4.3</a>).` },
            { p: `By the 1700s, Plains nations such as the <b>Comanche</b> had built a new way of life around hunting bison on horseback. It was a new Indigenous culture, not an old one.` },
            { p: `Crops also went east. Maize, potatoes and cassava became <span class="kt">staple crops</span>, the main everyday foods, in parts of Europe, Asia and Africa. They grew where older crops could not, so they helped feed growing populations. Sugar became the great <span class="kt">cash crop</span>, a crop grown to sell. It grew on <span class="kt">plantations</span>, large farms that grow one cash crop with forced labor.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons." Horses, okra and rice are among the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Columbian Exchange', `The movement of plants, animals and diseases between Afro-Eurasia and the Americas after 1492.`],
        ['Plantation', `A large farm growing one cash crop, such as sugar, with forced labor.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'silver',
      num: '02',
      accent: 'rust',
      name: 'Silver, Land and Forced Work',
      navLabel: 'Silver and labor',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Encomienda, Potosí, the galleons, casta',
      thesis: `Disease was killing the workers Spain needed. So Spain reused an Inca labor duty and brought in new kinds of forced work. Much of their silver ended up in China.`,
      parts: [
        {
          heading: 'Paying conquerors with other people\'s work',
          blocks: [
            { p: `Colonial economies in the Americas rested mainly on farming, with mining beside it (<a href="#chapter-t4-4">Topic 4.4</a>). The Spanish crown rewarded conquerors with the <span class="kt">encomienda</span>. This was the right to demand labor and tribute, or payments of goods, from one Indigenous community. In return, the holder was supposed to protect its people and have them taught Christianity.` },
            { p: `The friar Bartolomé de las Casas campaigned against the encomienda, and the New Laws of <span class="num">1542</span> restricted it. As it declined, the <span class="kt">hacienda</span> grew. This was a large estate. Its Indigenous and mixed-race workers were often paid wages, and debt sometimes tied them to it.` }
          ]
        },
        {
          heading: 'A mountain of silver',
          blocks: [
            { p: `In <span class="num">1545</span>, by his own later account, an Andean miner named Diego Gualpa found silver at <b>Potosí</b>, high in the Andes. Spanish colonists claimed the mountain. In <span class="num">1546</span> miners struck silver at Zacatecas in Mexico. From the 1570s, a way of refining silver with mercury, worked out in Mexico, was used at Potosí too.` },
            { p: `The Inca had required communities to send people, in turns, to work for the state. This rotating duty was the <span class="kt">mit’a</span>. In the 1570s Francisco de Toledo, the viceroy (the king's governor) of Peru, turned it into a draft for Potosí. Each year, about one-seventh of the adult men of the highland districts had to go: more than <span class="num">14,000</span> men by <span class="num">1578</span>. The idea of a turn of service continued. The master and the danger changed. Many men never came home from the mines.` }
          ]
        },
        {
          heading: 'Where the silver went',
          blocks: [
            { p: `Spain ran this trade by the rules of <span class="kt">mercantilism</span>. This was the idea that a kingdom grows strong by gathering gold and silver. In this view, a kingdom should also keep its colonies' trade for itself (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { p: `By one standard estimate, Spanish America produced about four-fifths of the world's silver between 1500 and 1800. Much of it ended up in China. Silver was already worth more in China than in Europe, because the Ming government had given up paper money. Then a tax reform, the Single Whip, made most taxes payable in silver, which added to the demand. And China mined little silver of its own (see <a href="#r4-east-asia-silver">East Asia</a>).` },
            { p: `In <span class="num">1571</span> Spain founded Manila, in the Philippines. From then on, <span class="kt">Manila galleons</span>, large Spanish ships, carried silver across the Pacific from Acapulco in Mexico to Manila. There, Chinese merchants traded silk and porcelain for it.` }
          ]
        },
        {
          heading: 'A new top, ranked by birth',
          blocks: [
            { p: `Spanish America ranked people by their ancestry, which historians call the <span class="kt">casta</span> system (<a href="#chapter-t4-7">Topic 4.7</a>). Among people counted as Spanish, it favored those born in Spain. These <span class="kt">peninsulares</span> almost always held the post of viceroy, and many top posts in government and the Church. They were a new political elite. <span class="kt">Creoles</span>, of Spanish ancestry but born in the Americas, grew rich from mines, estates and trade. They were a new economic elite.` },
            { p: `Below them came people of mixed ancestry, such as <span class="kt">mestizos</span>, with Spanish and Indigenous parents. Indigenous people kept their own town governments and paid tribute. People of African ancestry, free and enslaved, were ranked lowest.` },
            { p: `But casta was never one fixed ladder. Official records used only a few labels. How a person was recorded could change with their wealth, work and reputation. A prosperous mestizo might be recorded as Spanish. The ranking also worked differently from region to region.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-4">Topic 4.4</a>: colonial economies "utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories." Silver from Spain's colonies was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: conquests and new trade "contributed to the formation of new political and economic elites," including "in the Americas with the rise of the Casta system."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Encomienda', `A colonist's right to demand labor and tribute from one Indigenous community.`],
        ['Mit’a', `The Inca duty to work for the state in turns, made a draft for the Potosí mine in the 1570s.`],
        ['Casta', `The ranking of people in Spanish America by ancestry, favoring those born in Spain for top posts.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'plantations',
      num: '03',
      accent: 'iron',
      name: 'The Plantation Atlantic',
      navLabel: 'Plantations',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Sugar, tobacco, slavery, new peoples',
      thesis: `Sugar drew Europe's rival empires into the Americas. Planters chose to work their plantations with enslaved Africans, bought by the million. That choice changed who lived here.`,
      parts: [
        {
          heading: 'Rival empires',
          blocks: [
            { p: `European kingdoms were rivals for power, wealth and religion. The English and French built colonies in North America and the Caribbean in the early 1600s. Jamestown, England's first lasting colony, was founded in <span class="num">1607</span> by the Virginia Company. It was a <span class="kt">joint-stock company</span>: many investors bought shares and split the profits and losses. The Dutch West India Company held part of Brazil's sugar coast from <span class="num">1630</span> to <span class="num">1654</span>.` }
          ]
        },
        {
          heading: 'A system from the Atlantic islands',
          blocks: [
            { p: `What these empires often fought over was sugar. The sugar plantation was not invented in the Americas. Before <span class="num">1492</span>, Portugal grew sugar with enslaved workers, including Canary Islanders and Africans, on the island of Madeira. Then it did the same on São Tomé, an island in the Gulf of Guinea settled in the 1480s and 1490s (see <a href="#r4-sub-saharan-africa-slave-trade">Sub-Saharan Africa</a>). What the Americas added was land.` },
            { p: `Brazil became the first great American sugar economy in the 1500s, and the Caribbean followed in the 1600s. Brazil's early mills used Indigenous workers. During the 1600s, their workers became overwhelmingly enslaved Africans.` },
            { p: `Disease had killed many Indigenous workers. But people, not disease, chose to bring the island system across. In the English Chesapeake, tobacco planters first used <span class="kt">indentured servants</span>. Most were poor Europeans who worked four to seven years to pay for their voyage. From the late 1600s, they turned more and more to enslaved Africans.` }
          ]
        },
        {
          heading: 'Slavery for life',
          blocks: [
            { p: `Plantations bought enslaved Africans in ever larger numbers, above all for sugar. The Trans-Atlantic Slave Trade Database estimates that about <span class="num">278,000</span> Africans were forced onto ships bound for the Americas in the whole 1500s. From <span class="num">1701</span> to <span class="num">1750</span> alone, it was more than <span class="num">2.5 million</span>.` },
            { p: `They were held in <span class="kt">chattel slavery</span>: owned as property for life, with their children born enslaved. A Virginia law of <span class="num">1662</span> made the children of enslaved women enslaved too. Colonial laws also tied slavery to race.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that slavery began with the Atlantic trade. It was thousands of years old, in Africa, the Mediterranean and the Americas. What the plantations changed was its size, its tie to race, and how few ways out it left.`
            } },
            { p: `On Barbados, enslaved Africans outnumbered Europeans by the late 1600s. Across the British, French and Dutch Caribbean, Africans and their descendants became most of the people.` }
          ]
        },
        {
          heading: 'A world made by everyone',
          blocks: [
            { p: `Plantations anchored the <span class="kt">Atlantic trading system</span>, which moved goods, wealth and people. Sugar and tobacco went to Europe. Guns, alcohol and cloth went to Africa. Enslaved Africans were forced west.` },
            { p: `In the colonies, Africans, Indigenous Americans and Europeans lived side by side, usually because some were forced to. All of them shaped the cultures that grew there, from cooking to music. The mixing happened under force, not between equals. But no single people made the result.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British." "The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons," and "the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Indentured servitude', `Work under contract for a set time, usually four to seven years, to pay for the voyage over.`],
        ['Chattel slavery', `Slavery in which people are owned as property for life and their children are born enslaved.`],
        ['Atlantic trading system', `The movement of goods, wealth and enslaved people among Europe, Africa and the Americas.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'resistance',
      num: '04',
      accent: 'oxide',
      name: 'Faith and Pushback',
      navLabel: 'Faith and resistance',
      dates: 'c. 1530 to 1750 &nbsp;·&nbsp; Missions, blending, revolts, maroons',
      thesis: `Christianity spread, but the people who took it up also changed it. Where colonies pushed hardest, people pushed back, and sometimes they won terms that lasted.`,
      parts: [
        {
          heading: 'Spread, clash, blend',
          blocks: [
            { p: `Missionaries spread Christianity through Spanish and Portuguese America, and it brought conflict too. From around 1610, priests in Peru led campaigns to root out Andean religion. They destroyed sacred objects and punished religious leaders.` },
            { p: `Faiths also blended, which historians call <span class="kt">syncretism</span>. At Tepeyac, a hill near Mexico City, Nahua and Spanish Christians honored the Virgin of Guadalupe by the 1550s. The friar Bernardino de Sahagún wrote that the Nahua had once honored a goddess there, Tonantzin. Historians argue about that link. But Nahua Christians made Mary their own. In French Saint-Domingue (today's Haiti), enslaved Africans built Vodou from African religions and Catholic saints.` }
          ]
        },
        {
          heading: 'The Pueblo Revolt and Metacom\'s War',
          blocks: [
            { p: `As colonies expanded, local people resisted (<a href="#chapter-t4-6">Topic 4.6</a>). From <span class="num">1598</span> Spain ruled New Mexico, among the Pueblo peoples, and demanded harvests and unpaid labor. In <span class="num">1675</span> the governor arrested forty-seven Pueblo religious leaders as sorcerers. One of them, <b>Popé</b>, helped plan a rising to strike every Spanish settlement at once.` },
            { p: `The <span class="kt">Pueblo Revolt</span> began on August 10, <span class="num">1680</span>. The Pueblos killed about 400 colonists and drove the rest south to El Paso. For twelve years they ruled themselves. Spain returned from <span class="num">1692</span>. But it did not bring back the encomienda, and friars pressed far less hard against Pueblo religion.` },
            { p: `In New England, colonists kept taking Wampanoag land. In <span class="num">1675</span> the Wampanoag leader <b>Metacom</b>, called King Philip by the English, went to war with other Native nations. But the colonists had more people and Native allies of their own. <span class="kt">Metacom's War</span> ended with his death in <span class="num">1676</span>. Many captives were sold into slavery in the Caribbean. The Native nations of southern New England lost their independence.` }
          ]
        },
        {
          heading: 'Enslaved people organize',
          blocks: [
            { p: `Enslaved people resisted every day, and sometimes they organized. In Brazil, people who escaped slavery built <b>Palmares</b>, a <span class="kt">maroon community</span>. Its fortified towns beat back Portuguese and Dutch attacks for most of the 1600s, until it fell in the 1690s. In Jamaica, the colony could not defeat the Maroons. In <span class="num">1739</span> it signed treaties that recognized their freedom, if they returned runaways.` },
            { p: `That same year, enslaved people at the Stono River in South Carolina seized guns and marched toward Spanish Florida. Several came from Catholic Kongo. Florida promised freedom to runaways who became Catholic. The militia broke the march, and in <span class="num">1740</span> the colony tightened its slave laws.` },
            { p: `By 1750, the Pueblo towns, the Plains nations, the Nahua Christians and the Jamaica Maroons were all still there. Colonial rule did not always have the last word.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-5">Topic 4.5</a>: new contacts "expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices."`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level." The Pueblo Revolts and Metacom's War are among the College Board's examples.`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "Enslaved persons challenged existing authorities in the Americas through organized resistance." Maroon societies in the Caribbean and Brazil, and resistance in North America, are among the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Syncretism', `The blending of two or more religions into new beliefs and practices.`],
        ['Pueblo Revolt', `The rising of the Pueblo towns of New Mexico in 1680, which drove the Spanish out for twelve years.`],
        ['Maroon community', `A community of people who escaped slavery, usually in hard-to-reach country.`]
      ]
    }
  ],

  closing: {
    heading: 'The Americas at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review.`,
    argue: {
      move: 'Causation',
      prompt: `Disease did the most damage, yet people made choices too. Explain how disease and human choices together changed who lived and worked in the Americas. Use one piece of evidence about disease and one about a labor system.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Rival empires ruled, and local people pushed back',
        body: `Spain, Portugal, England, France and the Dutch built rival empires here. The Pueblo Revolt of 1680 won twelve years of self-rule. Metacom's War ended in defeat in 1676.`
      },
      {
        category: 'Religious',
        title: 'Christianity spread, clashed with older faiths and blended',
        body: `Priests in Peru attacked Andean religion from about 1610. Nahua Christians made the Virgin of Guadalupe their own, and enslaved Africans in Saint-Domingue built Vodou.`
      },
      {
        category: 'Social',
        title: 'Disease, slavery and casta remade colonial society',
        body: `Disease cut many Indigenous populations by half to ninety percent or more. Enslaved Africans became most of the people in the Caribbean. Casta ranked people by ancestry, though how a person was recorded could change.`
      },
      {
        category: 'Intellectual',
        title: 'The big ideas were arguments about empire',
        body: `Las Casas argued that the encomienda was unjust, and the New Laws of 1542 restricted it. Mercantilism, the idea that a kingdom grows strong by gathering silver, shaped Spain's colonial rule.`
      },
      {
        category: 'Technological',
        title: 'Ships, mercury and horses changed what was possible',
        body: `Ocean-crossing ships, such as the Manila galleons, linked the Americas to the world. Mercury refining made the silver mines produce more, and the Comanche built a new way of life on horseback.`
      },
      {
        category: 'Economic',
        title: 'Silver, sugar and forced labor built the colonial economies',
        body: `Colonies ran on the mit’a, the encomienda, the hacienda, indentured servitude and chattel slavery. By one estimate, Spanish America produced about four-fifths of the world's silver, much of it ending up in China.`
      }
    ]
  }
};
