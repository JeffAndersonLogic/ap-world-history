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
 * silver (KC-4.1.III.B, KC-4.1.IV), and the armed Dutch and English companies,
 * with Mataram, Makassar, the Bugis and Johor fighting and allying
 * (KC-4.1.IV.C). The old Indian Ocean trade in enslaved East Africans
 * (KC-4.2.II.B) is set out in section 01, and its regional case, Malik Ambar,
 * sits in section 03, where the Deccan has been explained. KC-4.1.V.B is left to
 * the East Asia, Europe and Americas chapters: this region's American crop in
 * the sources is a seasoning, not a staple, so the chilies sentence in section
 * 02 is a connection, not a claimed Key Concept. On land: the Mughal Empire's
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
  deck: `Between 1450 and 1750 the Indian Ocean's old trading world met Portuguese warships, Spanish silver and armed Dutch and English companies, and kept on trading. On land, the Mughals built a great empire by making room for their Hindu subjects, until a later emperor narrowed that room and fought the Marathas.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
  ced: [
    'KC-4.1.II',
    'KC-4.1.II.A',
    'KC-4.1.III',
    'KC-4.1.III.A',
    'KC-4.1.III.B',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
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
      thesis: `When Portuguese ships reached India in 1498, they entered a trade that Asian, African and Arab merchants had run for centuries, carrying almost nothing its markets wanted.`,
      parts: [
        { heading: 'The ocean before the Portuguese', blocks: [
          { p: `The Indian Ocean ran on the <span class="kt">monsoon</span>, a wind that blows one way for part of the year and reverses for the rest, so captains knew months ahead when to sail out and when to come home. Ports ringed the ocean: Gujarat's harbors in western India, <b>Calicut</b> on the pepper coast of Malabar, and <b>Malacca</b> on the strait between the Indian Ocean and the South China Sea. No single state ruled the water.` },
          { p: `<b>Gujarati</b> merchants carried India's cotton cloth, wanted from East Africa to Southeast Asia. <b>Javanese</b> merchants carried rice and spices to Malacca. Pepper grew on the Malabar coast, and cloves and nutmeg came from small islands in eastern Indonesia, the <span class="kt">spice islands</span>. Islam had traveled these routes with merchants and teachers, so by 1500 many port rulers in Southeast Asia and East Africa, Malacca's among them, were Muslims, though no Muslim army had conquered them. The ocean also carried enslaved East Africans to Arabia, Persia and India, an old trade that went on through this whole period (<a href="#chapter-t4-4">Topic 4.4</a>).` }
        ] },
        { heading: 'Da Gama at Calicut', blocks: [
          { p: `Portugal's crown and princes had backed voyages down the African coast for more than seventy years, at first for West African gold and, by the 1480s, for a sea route to the spices that would cut out the middlemen (<a href="#chapter-t4-2">Topic 4.2</a>). In <span class="num">1497</span> Vasco da Gama sailed around Africa. At Malindi, on the East African coast, he hired a pilot who knew the crossing, and he reached Calicut in May <span class="num">1498</span>. The route was new to Portugal, not to the ocean: the voyage worked because Europeans borrowed what Indian Ocean sailors already knew about its winds.` },
          { p: `At Calicut the meeting went badly. Da Gama had brought coarse cloth, hats, basins and beads, and a market that dealt in pepper, fine cotton and gems wanted none of them. Yet he came home in <span class="num">1499</span>, having lost two of his four ships, with spices worth far more than the voyage cost. Asia wanted little from Europe, and its spices paid hugely, so Portugal's next fleets came armed.` }
        ] },
        { heading: 'Diu, 1509', blocks: [
          { p: `Portuguese ships carried heavy guns, and most Indian Ocean merchant ships were not built to fight them (<a href="#chapter-t4-1">Topic 4.1</a>). Portugal tried to seize the spice trade by force, threatening the Muslim states whose merchants carried spices toward the Mediterranean. In <span class="num">1509</span> a fleet of Mamluk Egypt, the sultan of Gujarat and the Hindu ruler of Calicut, whose port's trade ran through Muslim merchants, fought the Portuguese off <b>Diu</b>, a Gujarati port, and lost. It was an early battle in a long rivalry between Muslim powers and Portugal over whose ships would carry the spices.` }
        ] }
      ],
      terms: [
        ['Monsoon', 'The seasonal wind of the Indian Ocean, which reverses during the year and lets ships sail out and back on a schedule.'],
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
          { p: `Rivalry drove the building: Portugal's rulers wanted spice profits, saw themselves at war with Muslim powers, and raced Spain. In Goa, Albuquerque offered land to Portuguese men who married local women and settled, so Goa grew a mixed population. Portuguese ships also brought American chilies to India, where over the next two to three centuries they became central to its cooking (<a href="#chapter-t4-3">Topic 4.3</a>).` }
        ] },
        { heading: 'The cartaz, and the merchants who kept sailing', blocks: [
          { p: `Portugal's main tool was the <span class="kt">cartaz</span>, a pass a merchant ship bought from the Portuguese, requiring it to call at a Portuguese port and pay duties there. A ship without one could be seized. The cartaz changed who taxed the ocean, not who traded on it. Gujarati merchants kept shipping cloth, often buying a pass and sailing on. Javanese merchants kept carrying rice to Malacca, whoever held it. Much of the ocean's business stayed <span class="kt">intra-Asian trade</span>, between Asian ports in Asian goods; in the College Board's words, the old networks "continued to flourish."` },
          { p: `Muslim powers kept fighting. Ottoman fleets fought Portugal through the 1500s and besieged Diu in <span class="num">1538</span>, and the sultanate of Aceh, on Sumatra, fought the Portuguese on and off for more than a century from about <span class="num">1520</span>, shipped its pepper straight to the Red Sea, and in the 1560s sought guns and gunners from the Ottoman sultan. Portuguese patrols could not stop it all: by the middle of the 1500s, spices were again reaching the Mediterranean through the Red Sea in large amounts.` },
          { p: `Religion traveled too. From <span class="num">1560</span> an Inquisition, a church court, tried converts in Goa accused of secretly keeping Jewish, Hindu or Muslim practices, while Islam, carried by Asian merchants and teachers, not by European fleets, kept spreading in Southeast Asia.` },
        ] },
        { heading: 'Manila: Spain arrives from the east', blocks: [
          { p: `Magellan's expedition, sailing for the king of Spain, reached the Philippines in <span class="num">1521</span>, where he was killed. In <span class="num">1565</span> an expedition sent by Spain's king arrived to stay and found a way back across the Pacific, and in <span class="num">1571</span> Spain founded <b>Manila</b>. The <span class="kt">Manila galleons</span>, usually one or two a year, carried American silver there from Acapulco in Mexico. Merchants from Fujian, in China, sailed in with silk and porcelain and took the silver home, because China's government collected its taxes in silver (<a href="#chapter-t4-5">Topic 4.5</a>; see also <a href="#chapter-r4-east-asia">East Asia</a>).` },
          { p: `Manila became a Chinese trading city under a Spanish flag: Chinese merchants and craftsmen in the Parián, their quarter outside the walls, far outnumbered the Spanish. Christianity spread through much of the Philippines after <span class="num">1565</span>, while Muslim sultanates in the southern islands of Mindanao and Sulu resisted Spanish rule.` },
          { note: { kind: 'howknow', label: 'How we know', html: `Antonio de Morga, a Spanish official in Manila, published an account of the islands in <span class="num">1609</span>. He says the Chinese merchants sold their silks for "silver and reals, for they do not like gold, nor any other goods in exchange." Historians set this Spanish account beside Manila's customs records and Chinese sources, which show the same pattern: silver went one way, silk the other.` } }
        ] }
      ],
      terms: [
        ['Estado da Índia', 'Portugal\'s network of fortified ports in Asia, governed from Goa by 1530.'],
        ['Cartaz', 'The pass Portugal sold to merchant ships, requiring them to call at a Portuguese port and pay duties there.'],
        ['Intra-Asian trade', 'Trade between Asian ports in Asian goods, which stayed the core of the ocean\'s business.'],
        ['Manila galleons', 'The Spanish ships that carried American silver from Acapulco to Manila from 1571.']
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
      thesis: `South Asia's strongest state was a land empire, held by making room for, and use of, its Hindu majority. When a later emperor narrowed that room and pushed south, resistance wore the empire down.`,
      parts: [
        { heading: 'A Muslim dynasty, a Hindu majority', blocks: [
          { p: `The Mughal dynasty began in <span class="num">1526</span>, when Babur, a prince from Central Asia, won at Panipat (Unit 3). Its emperors were Muslims ruling a mostly Hindu land. <b>Akbar</b>, who ruled from <span class="num">1556</span> to <span class="num">1605</span>, made room for Hindus on purpose. In <span class="num">1564</span> he ended the <span class="kt">jizya</span>, a tax non-Muslims paid under Islamic rule. From <span class="num">1562</span> he married daughters of the <b>Rajputs</b>, Hindu warrior kings of northwestern India, and made Rajput princes some of his highest commanders.` },
          { p: `Akbar also needed Rajput armies and Hindu loyalty. The College Board names both motives: states acted "to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups" (<a href="#chapter-t4-7">Topic 4.7</a>). He even invited Jesuit priests from Goa to his court to debate religion.` }
        ] },
        { heading: 'Europeans on Mughal terms', blocks: [
          { p: `The fort at <b>Surat</b>, Gujarat's great port, surrendered to Akbar in <span class="num">1573</span>, and Surat's ships carried pilgrims toward Mecca. At sea the Portuguese could demand a pass; on Mughal land Europeans came as customers. The English East India Company opened its trading house at Surat in the 1610s only with the permission of Akbar's son, the emperor Jahangir.` }
        ] },
        { heading: 'Aurangzeb and the Marathas', blocks: [
          { p: `Akbar's great-grandson <b>Aurangzeb</b>, who ruled from <span class="num">1658</span> to <span class="num">1707</span>, brought back the jizya in <span class="num">1679</span> and leaned on a stricter reading of Islamic law, though he still employed many Hindu officers. That is the other half of the College Board's sentence: some states "suppressed diversity or limited certain groups’ roles." A ruler's welcome was a choice, and the next ruler could take it back.` },
          { p: `Aurangzeb also wanted the whole Deccan, the high plateau of central India. The Mughals had fought for the Deccan before. In India some enslaved Africans, called Habshis or Siddis, served as soldiers, and a few rose high. Malik Ambar, born in Ethiopia and sold as a boy, became regent of Ahmadnagar, a Deccan kingdom, ruling in its young king's name, and fought Mughal armies until his death in <span class="num">1626</span>.` },
          { p: `Later, in the western Deccan, <b>Shivaji</b> built a kingdom of the <span class="kt">Marathas</span> from hill forts, beginning in the 1640s. His soldiers raided, cut supply lines and slipped back to their forts rather than meet a large army in open battle, and Mughal armies fought him from the 1660s; in <span class="num">1664</span> he even raided Surat. In <span class="num">1674</span> he was crowned king.` },
          { p: `In <span class="num">1681</span> Aurangzeb moved his court south. He conquered Bijapur and Golconda by <span class="num">1687</span> and executed Shivaji's son and successor in <span class="num">1689</span>, but he never finished the Marathas, and he died in the Deccan in <span class="num">1707</span>. Afterward Maratha power spread across much of India while the emperors in Delhi weakened. It is the College Board's pattern of expansion meeting "resistance from an array of social, political, and economic groups on a local level" (<a href="#chapter-t4-6">Topic 4.6</a>).` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not tell this as a simple war of Hindus against Muslims: Aurangzeb's officers included many Hindus, and the war was over who would rule and tax the Deccan.` } }
        ] }
      ],
      terms: [
        ['Jizya', 'A tax paid by non-Muslims under Islamic rule; Akbar ended it in 1564 and Aurangzeb restored it in 1679.'],
        ['Rajputs', 'Hindu warrior kings of northwestern India, many of whom became Mughal commanders and allies.'],
        ['Marathas', 'A people of the western Deccan whose kingdom, founded by Shivaji, fought the Mughal Empire.']
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
      thesis: `After 1600 armed Dutch and English companies fought Portugal and each other for Asia's trade. The Dutch company took the spice islands by force, but on India's coasts both were customers, paying in American silver.`,
      parts: [
        { heading: 'Companies built for war', blocks: [
          { p: `European rulers followed <span class="kt">mercantilism</span>, the idea that a state grows strong by piling up gold and silver and that one country's gain in trade is another's loss. To act on it they chartered <span class="kt">joint-stock companies</span>, which sold shares to many investors who split the profits and losses. England chartered its East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch Republic chartered the <b>VOC</b> (its Dutch initials), the Dutch East India Company, with a monopoly on Dutch trade in Asia and the power to build forts, keep soldiers, make treaties and wage war.` },
          { p: `In <span class="num">1614</span> Jan Pieterszoon Coen, a VOC leader in Asia, wrote to the company's directors that "trade cannot be kept up without war, nor war without trade." In <span class="num">1619</span> Coen founded <b>Batavia</b> on Java as the company's Asian headquarters.` }
        ] },
        { heading: 'Fighting for the spice islands', blocks: [
          { p: `Nutmeg grew only on the tiny Banda Islands, and in <span class="num">1621</span> VOC forces under Coen conquered them, killing, enslaving or driving out most of the islanders and handing the nutmeg groves to Dutch planters worked by enslaved laborers. In <span class="num">1623</span>, on Ambon, VOC officials executed ten English company men and ten others for a plot, on confessions taken under torture; historians still argue over whether any plot existed.` },
          { p: `Southeast Asian rulers fought and allied too. Sultan Agung of Mataram, the strongest state on Java, besieged Batavia in <span class="num">1628</span> and <span class="num">1629</span> and failed to take it, and Makassar, on Sulawesi, welcomed merchants of every nation until the VOC, with Bugis allies who were Makassar's rivals, conquered it between <span class="num">1667</span> and <span class="num">1669</span>. The Dutch captured Malacca from Portugal in <span class="num">1641</span> with help from Johor, the sultanate Malacca's exiled rulers had founded, though Portugal kept Goa and Diu. These are the College Board's economic disputes that "led to rivalries and conflict between states."` }
        ] },
        { heading: 'Cloth and silver', blocks: [
          { p: `On India's coasts, the companies bought. Weavers in Gujarat, on the Coromandel coast (India's southeastern shore) and in Bengal, in the east, made cotton cloth for buyers in Asia, Africa and Europe, and the companies' purchases grew greatly in the 1600s, often through advances of money to weavers before the cloth was made. Much of the spinning was done by women and girls at home. <span class="kt">Peasant and artisan labor</span>, in the College Board's words, "continued and intensified": the work was old, and the amount and the reach of the buyers were new.` },
          { p: `The companies paid largely in American silver, because Europe had few goods Asian buyers wanted. Much of the cloth that European ships carried to West Africa was Indian cotton (see <a href="#chapter-r4-sub-saharan-africa">Sub-Saharan Africa</a>). The VOC also carried Indian cloth to Southeast Asia to buy spices. England passed laws in <span class="num">1700</span> and <span class="num">1721</span> restricting Indian cotton cloth, to protect its own weavers.` },
          { p: `By <span class="num">1750</span> the companies held forts and trading houses along India's coasts, the Mughal emperors were weaker, and the Marathas were rising. The companies' conquest of large parts of India came later, after this unit's period ends.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Europeans controlled Asia's economies by 1750. They held some islands and many ports, while Asian weavers, states and merchants made, ruled and carried most of what moved.` } }
        ] }
      ],
      terms: [
        ['Mercantilism', 'The idea that a state grows strong by collecting gold and silver, and that one country\'s gain in trade is another\'s loss.'],
        ['Joint-stock company', 'A company that sells shares to many investors, who share its profits and its losses.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602, with the right to build forts, keep soldiers and wage war in Asia.'],
        ['Peasant and artisan labor', 'Farm work and handwork such as spinning and weaving, done in homes and workshops, which grew as distant demand rose.']
      ]
    }
  ],

  closing: {
    heading: 'South and Southeast Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review. The unit says little about this region's ideas, so two sides share one card.`,
    pairs: [
      { category: 'Political', title: 'Europe held ports and a few islands; Asian states held most of the land', body: `Portugal seized Goa, Malacca and Hormuz from 1510 to 1515, Spain founded Manila in 1571, and the Dutch took Banda in 1621 and Malacca in 1641. Mataram and Makassar fought back. On land the Mughals ruled, and Aurangzeb never overcame the Marathas.` },
      { category: 'Religious', title: 'Faiths spread and collided along the routes', body: `Islam kept spreading in Southeast Asia with merchants and teachers. Christianity spread through the Philippines after 1565, and Goa's Inquisition, from 1560, tried converts suspected of keeping old practices. Muslim powers fought Portugal for the ocean's trade.` },
      { category: 'Social', title: 'Room for some, and limits', body: `Akbar ended the jizya in 1564 and raised Rajput princes to top ranks; Aurangzeb restored it in 1679. Enslaved Africans still reached India, where Malik Ambar rose from slavery to rule in the Deccan.` },
      { category: 'Intellectual and technological', title: 'Borrowed winds and ships with guns', body: `Da Gama crossed to India with a pilot hired at Malindi, and Portugal's armed ships won at Diu. Maratha hill forts frustrated a far larger Mughal army. Akbar's debates with Jesuits are the clearest meeting of ideas.` },
      { category: 'Economic', title: 'Old trade, new carriers, more work', body: `Gujarati and Javanese merchants kept intra-Asian trade flourishing. American silver arrived through Manila and in European ships. The companies fought for spices, while India's weavers made more cotton cloth for buyers on three continents.` }
    ]
  }
};
