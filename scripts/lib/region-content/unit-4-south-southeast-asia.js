'use strict';

/**
 * Unit 4 by region: South and Southeast Asia.
 *
 * The chapter tells one story with two halves, the sea and the land, and shows
 * where they met. At sea: the Indian Ocean world the Portuguese entered in 1498
 * (KC-4.1.III, KC-4.1.III.A, with KC-4.1.II and II.A through the Malindi pilot
 * and the monsoon), the trading-post empire of Goa, Malacca and the cartaz
 * (KC-4.3.II.A.i, KC-4.3.II.C), the Asian merchants who kept trading
 * (KC-4.3.II.A.iii), the rivalry between Muslim powers and Portugal
 * (KC-4.3.III.ii and its CED illustrative example), Spanish Manila and its
 * silver (KC-4.1.III.B, KC-4.1.IV, with American crops under KC-4.1.V.B), and the
 * armed Dutch and English companies (KC-4.1.IV.C). On land: the Mughal Empire's
 * accommodation of its Hindu majority under Akbar and its narrowing under
 * Aurangzeb (KC-4.3.I.B, KC-4.3), and the Maratha resistance (KC-4.3.III.iii).
 * Where they met: India's cotton weavers working for distant buyers
 * (KC-4.2.II.A). Religion (KC-4.1.VI) is taught as spread and conflict, because
 * that is what the sources support for this region; the unit's clearest
 * syncretic cases are in the Americas and Africa, and no regional example was
 * invented to fill the gap. Deliberately left out: Mughal origins beyond one
 * sentence (Unit 3), Sikhism (KC-4.1.VI.iii is a Unit 3 code), the Mughal
 * mausolea (a Unit 3 illustrative example), and the English company's
 * conquests in India, which come after 1750 and are only labeled as later.
 */

module.exports = {
  topicKey: 'r4-south-southeast-asia',
  slug: 'region-4-south-southeast-asia',
  unit: '4',
  region: 'South and Southeast Asia',
  titleHtml: 'South and Southeast <em>Asia</em>',
  deck: `Between 1450 and 1750 the Indian Ocean's old trading world met Portuguese warships, Spanish silver and armed Dutch and English companies, and kept on trading. On land, the Mughal emperors built a great empire by making room for their Hindu subjects, until a later emperor narrowed that room and spent his last decades fighting the Marathas.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
  ced: [
    'KC-4.1.II',
    'KC-4.1.II.A',
    'KC-4.1.III',
    'KC-4.1.III.A',
    'KC-4.1.III.B',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
    'KC-4.1.V.B',
    'KC-4.1.VI',
    'KC-4.2.II.A',
    'KC-4.2.II.B',
    'KC-4.3',
    'KC-4.3.I.B',
    'KC-4.3.II.A.i',
    'KC-4.3.II.A.iii',
    'KC-4.3.II.C',
    'KC-4.3.III.ii',
    'KC-4.3.III.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'ocean',
      num: '01',
      accent: 'gold',
      name: 'An Ocean Already Full',
      navLabel: 'The ocean in 1500',
      dates: 'c. 1450 to 1509 &nbsp;·&nbsp; Monsoon ports, da Gama, and Diu',
      thesis: `When Portuguese ships reached India in 1498, they did not open a trade. They entered one that Asian, African and Arab merchants had run for centuries, and they had almost nothing its markets wanted.`,
      parts: [
        { heading: 'The ocean before the Portuguese', blocks: [
          { p: `The Indian Ocean ran on the <span class="kt">monsoon</span>, a wind that blows one way for part of the year and reverses for the rest, so a captain knew months ahead when he could sail out and when he could come home. Ports ringed the ocean: Gujarat's harbors in western India, <b>Calicut</b> on the pepper coast of Malabar, and <b>Malacca</b> on the strait between the Indian Ocean and the South China Sea. No single state ruled the water. Ports competed for merchants by keeping them safe.` },
          { p: `<b>Gujarati</b> merchants carried India's cotton cloth, wanted from East Africa to Southeast Asia. <b>Javanese</b> merchants carried rice and spices to Malacca. Pepper grew on the Malabar coast, and cloves and nutmeg came from small islands in eastern Indonesia, the <span class="kt">spice islands</span>. Islam had traveled these routes with merchants and teachers, so by 1500 many port rulers, Malacca's among them, were Muslims, though no Muslim army had conquered them. The ocean also carried enslaved East Africans to Arabia, Persia and India, an old trade that went on through this whole period (<a href="#chapter-t4-4">Topic 4.4</a>).` }
        ] },
        { heading: 'Da Gama at Calicut', blocks: [
          { p: `Portugal's kings had paid for voyages down the African coast for more than seventy years, hoping to reach the spices by sea and cut out the middlemen between India and Europe (<a href="#chapter-t4-2">Topic 4.2</a>). In <span class="num">1497</span> Vasco da Gama sailed around Africa. At Malindi, on the East African coast, he hired a pilot who knew the crossing, and he reached Calicut in May <span class="num">1498</span>. The route was new to Portugal, not to the ocean: the voyage worked because Europeans borrowed what Indian Ocean sailors already knew about its winds.` },
          { p: `At Calicut the meeting went badly. Da Gama had brought coarse cloth, hats, basins and beads, and a market that dealt in pepper, fine cotton and gems wanted none of them. Yet he came home in <span class="num">1499</span>, having lost two of his four ships, with spices worth far more than the voyage cost. Europe had little that Asia wanted, and the profit on what Asia sold was huge. That is why Portugal's next fleets came armed.` }
        ] },
        { heading: 'Diu, 1509', blocks: [
          { p: `Portuguese ships carried heavy guns, and most Indian Ocean merchant ships were not built to fight them (<a href="#chapter-t4-1">Topic 4.1</a>). Portugal tried to seize the spice trade by force, which threatened the Muslim states whose merchants carried spices to the Red Sea and on to the Mediterranean. In <span class="num">1509</span> a fleet of Mamluk Egypt, the sultan of Gujarat and the ruler of Calicut fought the Portuguese off <b>Diu</b>, a Gujarati port, and lost. The fight was about which route, and whose ships, would carry the spices: an early battle in a long rivalry between Muslim powers and Portugal.` }
        ] }
      ],
      terms: [
        ['Monsoon', 'The seasonal wind of the Indian Ocean, which reverses during the year and lets ships sail out and back on a schedule.'],
        ['Calicut', 'The pepper port on India\'s Malabar coast where da Gama arrived in 1498.'],
        ['Spice islands', 'Small islands in eastern Indonesia, the source of cloves and nutmeg.'],
        ['Diu, 1509', 'The sea battle in which Portugal defeated a fleet of Mamluk Egypt, Gujarat and Calicut.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'iberians',
      num: '02',
      accent: 'rust',
      name: 'Forts, Passes, and Silver',
      navLabel: 'Portugal and Manila',
      dates: '1510 to 1640 &nbsp;·&nbsp; Goa, Malacca, the cartaz, and Manila',
      thesis: `Portugal could not conquer South Asia's great states, so it seized ports and sold permission to sail. Spain arrived from across the Pacific with American silver. Neither replaced the merchants who already ran the trade.`,
      parts: [
        { heading: 'Ports, not provinces', blocks: [
          { p: `The Portuguese commander Afonso de Albuquerque took <b>Goa</b> in <span class="num">1510</span>, and by <span class="num">1530</span> it was the capital of the <span class="kt">Estado da Índia</span>, Portugal's network of fortified ports in Asia. He took Malacca in <span class="num">1511</span> and Hormuz, at the mouth of the Persian Gulf, in <span class="num">1515</span>. Each was a <span class="kt">trading post</span>, a small fortified base, and the College Board says such posts "proved profitable for the rulers and merchants involved." Portugal's guns could batter a harbor but not occupy India's interior, where Gujarat, Vijayanagara and, after <span class="num">1526</span>, the Mughals had far larger armies.` },
          { p: `Rivalry drove the building, as it drove every European maritime empire: Portugal's rulers wanted spice profits, saw themselves at war with Muslim powers, and raced Spain for the routes. In Goa, Albuquerque offered land to Portuguese men who married local women and settled, so the city grew a mixed population.` }
        ] },
        { heading: 'The cartaz, and the merchants who kept sailing', blocks: [
          { p: `Portugal's main tool was the <span class="kt">cartaz</span>, a pass a merchant ship bought from the Portuguese, requiring it to call at a Portuguese port and pay duties there. A ship without one could be seized. The cartaz changed who taxed the ocean, not who traded on it. Gujarati merchants kept shipping cloth, often buying a pass and sailing on, and Gujarat's ships kept carrying pilgrims to the Red Sea. Javanese merchants kept carrying rice to Malacca, whoever held it. Much of the ocean's business stayed <span class="kt">intra-Asian trade</span>, between Asian ports in Asian goods; in the College Board's words, the old networks "continued to flourish."` },
          { p: `Muslim powers kept fighting. Ottoman fleets fought Portugal through the 1500s and besieged Diu in <span class="num">1538</span>, and the sultanate of Aceh, on Sumatra, fought the Portuguese on and off from <span class="num">1519</span> to <span class="num">1639</span>. Religion traveled too. From <span class="num">1560</span> an Inquisition, a church court, tried converts in Goa accused of secretly keeping Hindu or Muslim practices, while Islam kept spreading in Southeast Asia with merchants and teachers rather than European ships.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Portugal "took over" Indian Ocean trade. It taxed a share of it from a string of forts, beside much larger states, and by the middle of the 1500s spices again reached the Mediterranean through the Red Sea in large amounts.` } }
        ] },
        { heading: 'Manila: Spain arrives from the east', blocks: [
          { p: `Magellan's expedition reached the Philippines in <span class="num">1521</span>, where he was killed. In <span class="num">1565</span> a Spanish expedition arrived to stay and found a way back across the Pacific, and in <span class="num">1571</span> Spain founded <b>Manila</b>. Galleons, usually one or two a year, carried American silver there from Acapulco in Mexico. Merchants from Fujian, in southern China, sailed in with silk and porcelain and took the silver home, because China's government collected its taxes in silver (<a href="#chapter-t4-5">Topic 4.5</a>; see also <a href="#chapter-r4-east-asia">East Asia</a>).` },
          { p: `Manila became a Chinese trading city under a Spanish flag: Chinese merchants and craftsmen in the Parián, their quarter outside the walls, far outnumbered the Spanish. Christianity spread through much of the Philippines after <span class="num">1565</span>, while Muslim sultanates in the southern islands of Mindanao and Sulu resisted Spanish rule. The routes moved plants as well: the sweet potato reached China partly from the Spanish Philippines, and American chilies became central to India's cooking over the next two to three centuries (<a href="#chapter-t4-3">Topic 4.3</a>).` },
          { note: { kind: 'howknow', label: 'How we know', html: `Antonio de Morga, a Spanish official in Manila, published an account of the islands in <span class="num">1609</span>. He says the Chinese merchants sold their silks for "silver and reals, for they do not like gold, nor any other goods in exchange." He wrote for Spanish readers, so historians check his account against Manila's customs records.` } }
        ] }
      ],
      terms: [
        ['Estado da Índia', 'Portugal\'s network of fortified ports in Asia, governed from Goa by 1530.'],
        ['Cartaz', 'The pass Portugal sold to merchant ships, requiring them to call at a Portuguese port and pay duties there.'],
        ['Intra-Asian trade', 'Trade between Asian ports in Asian goods, which stayed the core of the ocean\'s business.'],
        ['Manila galleon', 'The Spanish ships that carried American silver from Acapulco to Manila from 1571.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'mughals',
      num: '03',
      accent: 'iron',
      name: 'The Mughals: Room for Many, Then Less',
      navLabel: 'The Mughals',
      dates: '1556 to 1707 &nbsp;·&nbsp; Akbar, Aurangzeb, and the Marathas',
      thesis: `The strongest state in South Asia was a land empire. Its emperors held it by making room for, and making use of, the Hindu majority they ruled, and when a later emperor narrowed that room and pushed south, resistance wore the empire down.`,
      parts: [
        { heading: 'A Muslim dynasty, a Hindu majority', blocks: [
          { p: `The Mughal dynasty began in <span class="num">1526</span>, when Babur, a prince from Central Asia, won at Panipat (Unit 3 tells that story). Its emperors were Muslims ruling a mostly Hindu land. <b>Akbar</b>, who ruled from <span class="num">1556</span> to <span class="num">1605</span>, made room for Hindus on purpose. In <span class="num">1564</span> he ended the <span class="kt">jizya</span>, a tax non-Muslims paid under Islamic rule. From <span class="num">1562</span> he married daughters of the <b>Rajputs</b>, Hindu warrior kings of northwestern India, and made Rajput princes some of his highest commanders.` },
          { p: `Akbar was not only being generous. He needed Rajput armies and Hindu loyalty, and he got both. The College Board names both motives: states acted "to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups" (<a href="#chapter-t4-7">Topic 4.7</a>). He even invited Jesuit priests from Goa to his court to debate religion.` }
        ] },
        { heading: 'Europeans on Mughal terms', blocks: [
          { p: `The fort at <b>Surat</b>, Gujarat's great port, surrendered to Akbar in <span class="num">1573</span>, and Surat's ships carried pilgrims toward Mecca. At sea the Portuguese could demand a pass; on Mughal land Europeans came as customers. The English East India Company opened its trading house at Surat in the 1610s only with the emperor's permission.` }
        ] },
        { heading: 'Aurangzeb and the Marathas', blocks: [
          { p: `Akbar's great-grandson <b>Aurangzeb</b>, who ruled from <span class="num">1658</span> to <span class="num">1707</span>, brought back the jizya in <span class="num">1679</span> and leaned on a stricter reading of Islamic law, though he still employed many Hindu officers. That is the other half of the College Board's sentence: some states "suppressed diversity or limited certain groups’ roles." A ruler's welcome was a choice, and the next ruler could take it back.` },
          { p: `Aurangzeb also wanted the whole Deccan, the high plateau of central India. There <b>Shivaji</b> had built a kingdom of the <span class="kt">Marathas</span> from hill forts, beginning in the 1640s. His soldiers raided, cut supply lines and slipped back to their forts rather than meet a large army in open battle, and in <span class="num">1674</span> he was crowned king.` },
          { p: `In <span class="num">1681</span> Aurangzeb moved his court south. He conquered Bijapur and Golconda by <span class="num">1687</span> and executed Shivaji's son and successor in <span class="num">1689</span>, but he never finished the Marathas, and he died in the Deccan in <span class="num">1707</span>. Afterward Maratha power spread across much of India while the emperors in Delhi weakened. It is the College Board's pattern of expansion meeting "resistance from an array of social, political, and economic groups on a local level" (<a href="#chapter-t4-6">Topic 4.6</a>).` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not tell this as a simple war of Hindus against Muslims: Aurangzeb's officers included many Hindus, and the war was over who would rule and tax the Deccan. And do not make the Marathas the only cause of Mughal decline; the long war was one cause among several.` } }
        ] }
      ],
      terms: [
        ['Jizya', 'A tax paid by non-Muslims under Islamic rule; Akbar ended it in 1564 and Aurangzeb restored it in 1679.'],
        ['Rajputs', 'Hindu warrior kings of northwestern India, many of whom became Mughal commanders and allies.'],
        ['Marathas', 'A people of the western Deccan whose kingdom, founded by Shivaji, fought the Mughal Empire.'],
        ['Deccan', 'The high plateau of central India, where Aurangzeb spent his last twenty-six years at war.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'companies',
      num: '04',
      accent: 'oxide',
      name: 'Spices, Cloth, and Armed Companies',
      navLabel: 'Companies and cloth',
      dates: '1600 to 1750 &nbsp;·&nbsp; The VOC, the spice islands, and India\'s weavers',
      thesis: `After 1600 Dutch and English companies, armed by their governments, fought Portugal and each other for Asia's trade. In the spice islands they took control by force. On India's coasts they were customers, paying weavers with American silver.`,
      parts: [
        { heading: 'Companies built for war', blocks: [
          { p: `European rulers followed <span class="kt">mercantilism</span>, the idea that a state grows strong by piling up gold and silver and that one country's gain in trade is another's loss. To act on it they chartered <span class="kt">joint-stock companies</span>, which sold shares to many investors who split the profits and losses. England chartered its East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch Republic chartered the <b>VOC</b>, the Dutch East India Company, with the only Dutch right to trade east of the Cape of Good Hope and the power to build forts, keep soldiers, make treaties and wage war.` },
          { p: `In <span class="num">1614</span> Jan Pieterszoon Coen, a VOC leader in Asia, wrote to the company's directors that "trade cannot be kept up without war, nor war without trade." In <span class="num">1619</span> Coen founded <b>Batavia</b> on Java as the company's Asian headquarters.` }
        ] },
        { heading: 'Fighting for the spice islands', blocks: [
          { p: `Nutmeg grew only on the tiny Banda Islands, and in <span class="num">1621</span> VOC forces under Coen conquered them, killing, enslaving or driving out most of the islanders and handing the nutmeg groves to Dutch planters worked by enslaved laborers. In <span class="num">1623</span>, on Ambon, VOC officials executed ten English company men, nine Japanese soldiers in VOC service and a Portuguese man, accusing them, on confessions taken under torture, of a plot; historians still argue over whether any plot existed. The Dutch captured Malacca from Portugal in <span class="num">1641</span>, though Portugal kept Goa and Diu. These are the College Board's economic disputes that "led to rivalries and conflict between states."` }
        ] },
        { heading: 'Cloth and silver', blocks: [
          { p: `On India's coasts, the companies bought. Weavers in Gujarat, on the Coromandel coast and in Bengal made cotton cloth for buyers in Asia, Africa and Europe, and the companies' purchases grew greatly in the 1600s, often through advances of money to weavers before the cloth was made. Much of the spinning was done by women and girls at home. Peasant and artisan labor, in the College Board's words, "continued and intensified": the work was old, and the amount and the reach of the buyers were new.` },
          { p: `The companies paid largely in American silver, because Europe had few goods Asian buyers wanted. Much of the cloth that European ships carried to West Africa was Indian cotton (see <a href="#chapter-r4-sub-saharan-africa">Sub-Saharan Africa</a>). The VOC also earned much of its money carrying goods inside Asia, such as Indian cloth to Southeast Asia to buy spices. England passed laws in <span class="num">1700</span> and <span class="num">1721</span> restricting Indian cotton cloth, to protect its own weavers.` },
          { p: `By <span class="num">1750</span> the companies held forts and trading houses along India's coasts, the Mughal emperors were weaker, and the Marathas were rising. The companies' conquest of large parts of India came later, after this unit's period ends.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Europeans controlled Asia's economies by 1750. They controlled some islands and many ports. India's weavers, the Mughal and Maratha states, and the merchants of Gujarat and Java still made, ruled and carried most of what moved, and Europeans paid in silver to join that trade.` } }
        ] }
      ],
      terms: [
        ['Mercantilism', 'The idea that a state grows strong by collecting gold and silver, and that one country\'s gain in trade is another\'s loss.'],
        ['Joint-stock company', 'A company that sells shares to many investors, who share its profits and its losses.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602, with the right to build forts, keep soldiers and wage war in Asia.'],
        ['Artisan labor', 'Skilled handwork such as weaving, done in homes and workshops, which grew as distant demand rose.']
      ]
    }
  ],

  closing: {
    heading: 'South and Southeast Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review. The unit gives this region little intellectual history, so two sides share one card.`,
    pairs: [
      { category: 'Political', title: 'Europe held ports; Asian states held land', body: `Portugal seized Goa, Malacca and Hormuz from 1510 to 1515, Spain founded Manila in 1571, and the Dutch took the Banda Islands in 1621 and Malacca in 1641. On land the Mughal Empire was the great power, and Aurangzeb's push into the Deccan from 1681 met Maratha resistance he never overcame.` },
      { category: 'Religious', title: 'Faiths spread and collided along the routes', body: `Islam kept spreading in Southeast Asia with merchants and teachers. Christianity spread through the Philippines after 1565, and Goa's Inquisition, from 1560, tried converts suspected of keeping old practices. Muslim powers, including Gujarat, the Ottomans and Aceh, fought Portugal for the ocean's trade.` },
      { category: 'Social', title: 'Room for some, and limits', body: `Akbar ended the jizya in 1564 and brought Rajput princes into his top ranks; Aurangzeb restored it in 1679. Port cities mixed peoples: Portuguese settlers married local women in Goa, and Chinese residents far outnumbered the Spanish in Manila.` },
      { category: 'Intellectual and technological', title: 'Borrowed winds and ships with guns', body: `Da Gama crossed to India in 1498 with a pilot hired at Malindi, and Portugal's armed ships won at Diu in 1509. Maratha hill forts frustrated a far larger Mughal army. The unit says little about this region's ideas; Akbar's debates with Jesuit priests are the clearest meeting of new thought and old.` },
      { category: 'Economic', title: 'Old trade, new carriers, more work', body: `Gujarati and Javanese merchants kept intra-Asian trade flourishing under Portuguese passes. American silver arrived through Manila and in European ships. The VOC and the English company fought for spices, while India's weavers made more cotton cloth for buyers on three continents.` }
    ]
  }
};
