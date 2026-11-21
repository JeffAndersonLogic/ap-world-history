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
 * with Mataram and Johor fighting and allying (KC-4.1.IV.C). The old Indian Ocean trade in enslaved East Africans
 * (KC-4.2.II.B) is set out in section 01, and its regional case, Malik Ambar,
 * sits in section 03, where the Deccan has been explained. KC-4.1.V.B is left to
 * the East Asia, Europe and Americas chapters: this region's American crop in
 * the sources is a seasoning, not a staple (the chilies sentence was cut in the
 * 2026-11-21 pass, so Topic 4.3 is no longer listed). On land: the Mughal Empire's
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
 *
 * Plain-language and accuracy pass (2026-11-21), on the East Asia method:
 * sentences cut to one idea each; the College Board's words moved out of the
 * story into one "What the College Board says" box per section, quoted word for
 * word from scripts/lib/ced-source/unit-4.js; six closing cards in the fixed
 * order. Fixes from the five-persona stress test of 2026-11-17: the silver chain
 * now matches East Asia (already worth more in China because the Ming had given
 * up paper money, then the Single Whip made most taxes payable in silver, and
 * China mined little); Portugal's motives now match Topic 4.2 (middlemen and
 * West African gold, plus the crusading inheritance from Ceuta, 1415), with the
 * rivalry with Spain kept through Tordesillas (Topic 4.4); the KC-4.3.I.B
 * quotation is now whole; and Diu 1509 now shows Gujarat's choices: the
 * governor Malik Ayaz made his own peace, Gujarat kept the port, and Portugal
 * built a fort there only in the 1530s, by treaty. Cut for length (each told
 * elsewhere or secondary): Magellan's 1521 landing, Aceh's 1560s request to the
 * Ottomans, the Parian name and the Morga box (East Asia carries Morga), the
 * Goa marriage policy and the chilies, Shivaji's 1664 raid on Surat, Ambon
 * 1623 (now a link to Europe), and Makassar and the Bugis (1667 to 1669). See
 * docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-south-southeast-asia',
  slug: 'region-4-south-southeast-asia',
  unit: '4',
  region: 'South and Southeast Asia',
  titleHtml: 'South and Southeast <em>Asia</em>',
  deck: `From 1450 to 1750, the Indian Ocean's old trading world met Portuguese warships, Spanish silver and armed Dutch and English companies. Its merchants kept on trading. On land, the Mughal emperors built a great empire by making room for their Hindu subjects. Then a later emperor narrowed that room and fought the Marathas.`,
  topics: ['4.1', '4.2', '4.4', '4.5', '4.6', '4.7'],
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
      thesis: `When Portuguese ships reached India in 1498, they entered a trade that Asian, African and Arab merchants had run for centuries. The Portuguese carried almost nothing its markets wanted. So the next Portuguese fleets came ready to fight.`,
      parts: [
        {
          heading: 'The ocean before the Portuguese',
          blocks: [
            { p: `The Indian Ocean ran on the <span class="kt">monsoon</span>, a seasonal wind. It blows one way for part of the year, then turns and blows the other way. So captains knew months ahead when to sail out and when to come home.` },
            { p: `Busy ports ringed the ocean. Gujarat's harbors lay in western India. <b>Calicut</b> sat on the Malabar coast, where pepper grew. <b>Malacca</b> guarded the strait between the Indian Ocean and the South China Sea. No single state ruled the water.` },
            { p: `<b>Gujarati</b> merchants carried India's cotton cloth, which buyers wanted from East Africa to Southeast Asia. <b>Javanese</b> merchants carried rice and spices to Malacca. Cloves and nutmeg came from small islands in eastern Indonesia, the <span class="kt">spice islands</span>.` },
            { p: `Islam had traveled these routes with merchants and teachers. By 1500 many port rulers in Southeast Asia and East Africa were Muslims, Malacca's among them. No Muslim army had conquered them.` },
            { p: `The ocean also carried people as cargo. Enslaved East Africans were shipped to Arabia, Persia and India. This trade was old, and it went on through the whole period (<a href="#chapter-t4-4">Topic 4.4</a>).` }
          ]
        },
        {
          heading: 'Why Portugal came, and how',
          blocks: [
            { p: `Portugal's crown and princes had backed voyages down the African coast for more than seventy years (<a href="#chapter-t4-2">Topic 4.2</a>). At first they wanted the gold of West Africa. By the 1480s they also wanted a sea route to the spices. Pepper passed through many hands on its way to Europe, and each middleman added to the price. A sea route would cut them out.` },
            { p: `Religion mattered too. Portugal's ocean venture began in <span class="num">1415</span>, when it captured Ceuta, a Muslim port in North Africa. Its rulers saw the voyages partly as a crusade, a holy war, carrying on Christian Iberia's long war against Muslim rulers (see <a href="#r4-europe-edge">Europe</a>).` },
            { p: `In <span class="num">1497</span> Vasco da Gama sailed around Africa. At Malindi, on the East African coast, he hired a pilot who knew the way across the ocean. He reached Calicut in May <span class="num">1498</span>. The route was new to Portugal, but not to the ocean. Da Gama had borrowed what Indian Ocean sailors already knew about its winds.` },
            { p: `At Calicut, nobody wanted the cheap goods he had brought. Still, he came home in <span class="num">1499</span> with spices worth far more than the voyage cost. Asia wanted little from Europe, and its spices paid hugely.` }
          ]
        },
        {
          heading: 'Diu, 1509',
          blocks: [
            { p: `Portuguese ships carried heavy guns, and most Indian Ocean merchant ships were not built to fight them (<a href="#chapter-t4-1">Topic 4.1</a>). Portugal tried to take the spice trade by force. That threatened the Muslim states whose merchants carried spices toward the Mediterranean.` },
            { p: `In <span class="num">1509</span> a joint fleet met the Portuguese off <b>Diu</b>, a port in Gujarat. Mamluk Egypt sent warships. The sultan (Muslim ruler) of Gujarat and the Hindu ruler of Calicut sent ships too. The Portuguese won.` },
            { p: `But Portugal did not take Diu. Gujarat's governor there, <b>Malik Ayaz</b>, made his own peace. He handed back Portuguese prisoners from a battle the year before, and he let the Portuguese trade in his port. Still, he put off their demands for a fort for as long as he governed. Portugal built one only in the 1530s, by a treaty with Gujarat's sultan.` },
            { p: `Diu was an early battle in a long rivalry between Muslim powers and Portugal over whose ships would carry the spices (see <a href="#r4-middle-east-spicewar">the Middle East</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Diu gave Portugal control of the Indian Ocean. Portugal won one sea battle. Gujarat kept the port, and Asian rulers and merchants kept making their own choices.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-1">Topic 4.1</a>: knowledge from "the Classical, Islamic, and Asian worlds spread," including "an improved understanding of regional wind and currents patterns."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including ... the export of enslaved persons to the Mediterranean and the Indian Ocean regions."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states." The rivalry between Muslim and European powers in the Indian Ocean is one of the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Monsoon', 'The seasonal wind of the Indian Ocean. It changes direction during the year, so ships could sail out and back on a schedule.'],
        ['Diu, 1509', 'The sea battle off Gujarat in which Portugal beat a fleet of Mamluk Egypt, Gujarat and Calicut. Gujarat kept the port.']
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
      thesis: `Portugal could not conquer South Asia's great states. So it seized ports and sold permission to sail. Spain arrived from across the Pacific with American silver. Neither one replaced the merchants who already ran the trade.`,
      parts: [
        {
          heading: 'Ports, not provinces',
          blocks: [
            { p: `The Portuguese commander Afonso de Albuquerque took <b>Goa</b>, in western India, in <span class="num">1510</span>. By <span class="num">1530</span> Goa was the capital of the <span class="kt">Estado da Índia</span>, Portugal's network of fortified ports in Asia. Albuquerque took Malacca in <span class="num">1511</span>. In <span class="num">1515</span> he took Hormuz, at the mouth of the Persian Gulf.` },
            { p: `Each was a <span class="kt">trading post</span>: a small fortified base where merchants bought and sold. Together they made a <span class="kt">trading-post empire</span>, a chain of ports with almost no land behind them. Portugal's guns could batter a harbor, but they could not conquer India's interior. There, Gujarat, Vijayanagara and, after <span class="num">1526</span>, the Mughals had far larger armies.` },
            { p: `Rivalry drove the building. Portugal's rulers wanted the spice profits and saw themselves at war with Muslim powers. They also raced their Christian neighbor, Spain. In <span class="num">1494</span> the two crowns had divided their claims to new lands in the Treaty of Tordesillas (<a href="#chapter-t4-4">Topic 4.4</a>).` },
          ]
        },
        {
          heading: 'The cartaz, and the merchants who kept sailing',
          blocks: [
            { p: `Portugal's main tool was the <span class="kt">cartaz</span>, a pass that a merchant ship bought from the Portuguese. It required the ship to stop at a Portuguese port and pay taxes, called duties, there. Portuguese patrols could seize a ship that sailed without one.` },
            { p: `The cartaz changed who taxed the ocean. It did not change who traded on it. Gujarati merchants kept shipping cloth, often by buying a pass and sailing on. Javanese merchants kept carrying rice to Malacca, whoever held it. Much of the ocean's business stayed <span class="kt">intra-Asian trade</span>: trade between Asian ports, in Asian goods.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "took over" Indian Ocean trade. It taxed a share of it from a string of forts, beside Asian states much larger than itself. Asian merchants kept trading.`
            } },
            { p: `Muslim powers kept fighting. Ottoman fleets fought Portugal through the 1500s, and in <span class="num">1538</span> they besieged the Portuguese at Diu. <b>Aceh</b>, a sultanate on Sumatra, fought the Portuguese on and off for more than a century, from about <span class="num">1520</span>. It shipped its pepper straight to the Red Sea. By the middle of the 1500s, spices were again reaching the Mediterranean that way in large amounts.` },
            { p: `Religion traveled too. Islam kept spreading in Southeast Asia, carried by Asian merchants and teachers. In Goa, the Portuguese set up an Inquisition, a church court, in <span class="num">1560</span>. It tried converts accused of secretly keeping Jewish, Hindu or Muslim practices.` }
          ]
        },
        {
          heading: 'Manila: Spain arrives from the east',
          blocks: [
            { p: `Spain reached Asia the other way, across the Pacific. In <span class="num">1565</span> a Spanish expedition came to the Philippines to stay. It also found a sailing route back across the Pacific, from Asia to Mexico. In <span class="num">1571</span> Spain founded <b>Manila</b>.` },
            { p: `From then on, the <span class="kt">Manila galleons</span>, usually one or two Spanish ships a year, carried American silver from Acapulco in Mexico to Manila. Merchants from Fujian, in southern China, sailed in with silk and porcelain. They took the silver home.` },
            { p: `Why did China want silver so much? Silver was already worth more in China than in Europe, because the Ming government had given up paper money. Then a tax reform, the <span class="kt">Single Whip</span>, made most Chinese taxes payable in silver. That added to the demand. And China mined little silver of its own (<a href="#chapter-t4-5">Topic 4.5</a>; see <a href="#r4-east-asia-silver">East Asia</a>).` },
            { p: `Manila became a Chinese trading city under a Spanish flag, and Chinese merchants and craftsmen far outnumbered the Spanish there. Christianity spread through much of the Philippines after <span class="num">1565</span>. But Muslim sultanates in the southern islands, Mindanao and Sulu, resisted Spanish rule.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-4">Topic 4.4</a>: trading posts "proved profitable for the rulers and merchants involved in new global trade networks."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires".`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: despite "some disruption and restructuring," the Indian Ocean networks "continued to flourish and included intra-Asian trade and Asian merchants." Gujaratis and Javanese are two of the College Board's examples of those merchants.`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: voyages "across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: silver, "especially from Spanish colonies in the Americas," was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: contact between the hemispheres "expanded the reach" of existing religions and "contributed to religious conflicts."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Estado da Índia', 'Portugal\'s network of fortified ports in Asia, ruled from Goa by 1530.'],
        ['Cartaz', 'The pass Portugal sold to merchant ships. A ship with one had to stop at a Portuguese port and pay duties there.'],
        ['Intra-Asian trade', 'Trade between Asian ports, in Asian goods. It stayed the core of the ocean\'s business.'],
        ['Manila galleons', 'The Spanish ships that carried American silver from Acapulco to Manila, from 1571.']
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
      thesis: `South Asia's strongest state was a land empire. Its Muslim emperors held it by making room for their Hindu majority, and by using its soldiers. When a later emperor narrowed that room and pushed south, resistance helped wear the empire down.`,
      parts: [
        {
          heading: 'A Muslim dynasty, a Hindu majority',
          blocks: [
            { p: `The Mughal dynasty began in <span class="num">1526</span>, when Babur, a prince from Central Asia, won a battle at Panipat (Unit 3). Its emperors were Muslims. Most of the people they ruled were Hindus.` },
            { p: `<b>Akbar</b>, who ruled from <span class="num">1556</span> to <span class="num">1605</span>, made room for Hindus on purpose. In <span class="num">1564</span> he ended the <span class="kt">jizya</span>, a tax that non-Muslims paid under Islamic rule. From <span class="num">1562</span> he married daughters of the <b>Rajputs</b>, Hindu warrior kings of northwestern India. He made Rajput princes some of his highest commanders.` },
            { p: `Akbar was not only being generous. He needed Rajput armies and Hindu loyalty, and he got both (<a href="#chapter-t4-7">Topic 4.7</a>). He also invited Jesuit priests from Goa to his court to debate religion.` }
          ]
        },
        {
          heading: 'Europeans on Mughal terms',
          blocks: [
            { p: `In <span class="num">1573</span> the fort at <b>Surat</b>, Gujarat's great port, surrendered to Akbar. At sea, the Portuguese could demand a pass. On Mughal land, Europeans came as customers. The English East India Company opened its trading house at Surat in the 1610s, and only with the permission of Akbar's son, the emperor Jahangir.` }
          ]
        },
        {
          heading: 'Aurangzeb and the Marathas',
          blocks: [
            { p: `Akbar's great-grandson <b>Aurangzeb</b> ruled from <span class="num">1658</span> to <span class="num">1707</span>. In <span class="num">1679</span> he brought back the jizya, and he leaned on a stricter reading of Islamic law. Yet he still employed many Hindu officers. A ruler's welcome was a choice, and the next ruler could take it back.` },
            { p: `Aurangzeb also wanted the whole <b>Deccan</b>, the high plateau of central India. Earlier Mughal armies had met a tough enemy there, a man who had begun life enslaved. In India some enslaved Africans served as soldiers, and a few rose high. <b>Malik Ambar</b>, born in Ethiopia and sold as a boy, became regent of Ahmadnagar, a Deccan kingdom, ruling in its young king's name. He fought the Mughals until he died in <span class="num">1626</span>.` },
            { p: `Later, in the western Deccan, <b>Shivaji</b> built a kingdom of the <span class="kt">Marathas</span> from hill forts, starting in the 1640s. His soldiers raided, cut supply lines and slipped back to their forts. They would not meet a large army in open battle. Mughal armies fought him from the 1660s. In <span class="num">1674</span> he was crowned king.` },
            { p: `In <span class="num">1681</span> Aurangzeb moved his court south. He conquered the Deccan kingdoms of Bijapur and Golconda by <span class="num">1687</span>. In <span class="num">1689</span> he executed Shivaji's son, who had become king after him. But he never finished the Marathas, and he died in the Deccan in <span class="num">1707</span>.` },
            { p: `After his death, Maratha power spread across much of India, while the emperors in Delhi grew weaker. The long war was not the only cause of that decline, but it was one. It cost the empire money, soldiers and decades of its emperor's attention (<a href="#chapter-t4-6">Topic 4.6</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not tell this as a simple war of Hindus against Muslims. Aurangzeb's officers included many Hindus. The war was over who would rule and tax the Deccan.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-7">Topic 4.7</a>: "Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups." Akbar did both.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy." Aurangzeb's return of the jizya is one case of a state limiting a group.`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level." The Maratha conflict with the Mughals is one of the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Jizya', 'A tax paid by non-Muslims under Islamic rule. Akbar ended it in 1564, and Aurangzeb brought it back in 1679.'],
        ['Rajputs', 'Hindu warrior kings of northwestern India. Many became Mughal commanders and allies.'],
        ['Marathas', 'A people of the western Deccan. Their kingdom, founded by Shivaji, fought the Mughal Empire.']
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
      thesis: `After 1600, armed Dutch and English companies fought Portugal and each other for Asia's trade. The Dutch company took the spice islands by force. But on India's coasts both companies were customers, and they paid in American silver.`,
      parts: [
        {
          heading: 'Companies built for war',
          blocks: [
            { p: `European rulers followed <span class="kt">mercantilism</span>. This was the idea that a state grows strong by piling up gold and silver, and that one country's gain in trade is another's loss.` },
            { p: `To act on it, they chartered, or officially licensed, <span class="kt">joint-stock companies</span>, which sold shares to many investors who split the profits and losses. England chartered its East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch Republic chartered the <b>VOC</b>, the Dutch East India Company. It had a <span class="kt">monopoly</span>: no other Dutch company could trade in Asia. It could also build forts, keep soldiers, make treaties and wage war.` },
            { p: `In <span class="num">1614</span> Jan Pieterszoon Coen, a VOC leader in Asia, wrote to the company's directors that "trade cannot be kept up without war, nor war without trade." In <span class="num">1619</span> Coen founded <b>Batavia</b>, on the island of Java, as the company's headquarters in Asia.` }
          ]
        },
        {
          heading: 'Fighting for the spice islands',
          blocks: [
            { p: `Nutmeg grew only on the tiny Banda Islands. In <span class="num">1621</span> VOC forces under Coen conquered them. They killed, enslaved or drove out most of the islanders. Then they handed the nutmeg groves to Dutch planters, worked by enslaved laborers. The Dutch and English companies also fought each other for these islands (see <a href="#r4-europe-rivals">Europe</a>).` },
            { p: `Southeast Asian states fought back and chose their own allies. Sultan Agung of Mataram, the strongest state on Java, besieged Batavia in <span class="num">1628</span> and <span class="num">1629</span>, but failed to take it. The VOC took Malacca from Portugal in <span class="num">1641</span> with help from Johor, the sultanate of Malacca's exiled rulers. Portugal kept Goa and Diu.` }
          ]
        },
        {
          heading: 'Cloth and silver',
          blocks: [
            { p: `On India's coasts, the companies came to buy. Weavers in Gujarat, on the Coromandel coast in the southeast and in Bengal made cotton cloth for buyers in Asia, Africa and Europe. In the 1600s the companies bought much more of it, often paying weavers in advance. Much of the spinning was done by women and girls at home.` },
            { p: `This was <span class="kt">peasant and artisan labor</span>: farm and craft work done in homes and workshops. The work was old. What was new was how much of it there was, and how far away the buyers were.` },
            { p: `The companies paid largely in American silver, because Europe had few goods that Asian buyers wanted. Much of the cloth that European ships carried to West Africa was Indian cotton too (see <a href="#r4-sub-saharan-africa-slave-trade">Sub-Saharan Africa</a>). In <span class="num">1700</span> and <span class="num">1721</span>, England passed laws restricting Indian cotton cloth, to protect its own weavers.` },
            { p: `By <span class="num">1750</span> the companies held forts and trading houses along India's coasts. The Mughal emperors were weaker, and the Marathas were rising. The companies' conquest of large parts of India came later, after this unit's period ends.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Europeans controlled Asia's economies by <span class="num">1750</span>. They held some islands and many ports. Asian weavers, states and merchants still made, ruled and carried most of what moved.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories." Joint-stock companies were used by rulers "to compete against one another in global trade."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased." Cotton in India is one of the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Mercantilism', 'The idea that a state grows strong by collecting gold and silver, and that one country\'s gain in trade is another\'s loss.'],
        ['Joint-stock company', 'A company that sells shares to many investors, who share its profits and its losses.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602. It could build forts, keep soldiers and wage war in Asia.'],
        ['Peasant and artisan labor', 'Farm work and handwork, such as spinning and weaving, done in homes and workshops. It grew as faraway buyers wanted more.']
      ]
    }
  ],

  closing: {
    heading: 'South and Southeast Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `By 1750, had armed European companies taken over the Indian Ocean trade? Make a claim, then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Europeans held ports and a few islands; Asian states held most of the land',
        body: `Portugal took Goa, Malacca and Hormuz from 1510 to 1515, but Gujarat kept Diu after 1509. The Dutch took Banda in 1621 and Malacca in 1641. On land the Mughals ruled, and Aurangzeb never defeated the Marathas.`
      },
      {
        category: 'Religious',
        title: 'Faiths spread along the routes, and collided',
        body: `Islam kept spreading in Southeast Asia with merchants and teachers. Christianity spread through much of the Philippines after 1565, while Goa's Inquisition tried converts from 1560.`
      },
      {
        category: 'Social',
        title: 'Rulers made room for some groups and limited others',
        body: `Akbar ended the jizya in 1564 and made Rajput princes top commanders; Aurangzeb brought the tax back in 1679. Malik Ambar rose from slavery to rule a Deccan kingdom. Women and girls did much of the spinning for India's cloth trade.`
      },
      {
        category: 'Intellectual',
        title: 'Knowledge of the ocean was Asian and African before it was European',
        body: `Indian Ocean sailors knew the monsoon, and da Gama crossed to India with a pilot hired at Malindi. Akbar invited Jesuits from Goa to debate religion at his court.`
      },
      {
        category: 'Technological',
        title: 'Guns won battles at sea, and forts held the land',
        body: `Portugal's armed ships beat the joint fleet at Diu in 1509. In 1565 Spanish sailors found a route back across the Pacific, which made the Manila galleons possible. Maratha hill forts held off a far larger Mughal army.`
      },
      {
        category: 'Economic',
        title: 'Old trade kept flowing, with new carriers and more work',
        body: `Gujarati and Javanese merchants kept intra-Asian trade going under the cartaz. American silver reached Asia through Manila and in European ships. India's weavers made more cotton cloth for buyers on three continents.`
      }
    ]
  }
};
