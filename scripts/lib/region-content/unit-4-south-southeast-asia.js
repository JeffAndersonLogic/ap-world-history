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
 *
 * Second plain-language pass (2026-11-21, the addendum rules after the Unit 5
 * baseline panel): `inShort` added (five sentences under 20 words); every
 * College Board box now opens with an "In short" sentence, quotes whole Key
 * Concept sentences (a cut shown with " ... " only where the CED sentence holds
 * an em dash, KC-4.1.II.A, or a clause this chapter does not teach, KC-4.1.VI),
 * gives each illustrative example its own "An optional College Board example: "
 * paragraph, and quotes no Key Concept sentence in more than one box. KC-4.1.III.A,
 * KC-4.1.IV and KC-4.3 are now quoted (they were claimed but not quoted), so
 * Topic 4.8 joins `topics`. Definitions moved out from between commas into
 * parentheses or their own sentences; idioms removed; cross-region links are
 * now phrases ("The Europe chapter tells that story."); at most one topic link
 * per story paragraph. Coen's 1614 letter moved from the story into a "How we
 * know" box (the chapter had none), with Topic 4.5's caution that it argues as
 * well as describes. The cartaz mistake box was cut (the story says the same
 * thing in the next paragraph), and the Diu, 1509 glossary entry with it, since
 * it was a summary rather than a term; "Trading-post empire" replaces the
 * Estado da Índia entry. Closing cards now carry dated evidence in their own
 * category: the jizya moved from Social to Religious, and Social now holds
 * labor and slavery. Cut for length, each secondary or told elsewhere: the
 * Ottoman siege of Diu in 1538 and "Ottoman fleets fought Portugal through the
 * 1500s" (both in the Middle East chapter), Malik Ayaz's return of the 1508
 * prisoners, the Estado da Índia's name (Goa's 1530 capital status kept), the
 * galleons' "one or two ships a year", the Maratha refusal of open battle, and
 * the glossary entries for Rajputs, VOC and intra-Asian trade (all defined in
 * the story). Box text grew because whole Key Concept sentences replace
 * fragments, so the chapter is about as long as before (3,342 to about 3,430
 * rendered words) while the story shrank (1,919 to 1,871).
 *
 * Review pass 2 (2026-11-22, ledger I4, I6, Q2, Q8, Q15): KC-4.1.II.A is quoted whole, with
 * "all of which" and the CED's own dash; Shivaji's first raid on Mughal lands is dated 1657,
 * with the largest Mughal campaigns in the 1660s; KC-4.1.III.B is no longer claimed or quoted
 * here (the chapter never taught its effect on European interest; the Americas, East Asia and
 * Europe chapters still claim it), so the Manila section now carries KC-4.1.IV only; and
 * KC-4.1.VI is now quoted whole, with its syncretism half taught by one sentence on Java
 * (M. C. Ricklefs, Mystic Synthesis in Java, 2006: Javanese Muslims of the 1600s and 1700s
 * kept faith in local spiritual forces), which supersedes the note above that religion is
 * taught only as spread and conflict.
 *
 * Review pass 3 (2026-11-23, ledger R1, R2, R4, X3): the section 01 thesis now gives Portugal's
 * motives as profit and crusade, not "little to sell" alone; Akbar won "much of" Rajput support,
 * and Mewar's resistance until its 1615 peace is named; carracks are named as Portugal's ship
 * design, and the KC-4.1.II.A quotation is narrowed (" ... ") past "new tools", which this chapter
 * does not teach; and the cartaz paragraph now says who profited (customs at Goa, Hormuz and
 * Malacca were the main income of Portugal's government in Asia; in the 1580s over 85 percent of
 * the viceroy's revenue, per Wikipedia, "Portuguese India"; M. N. Pearson argues forced customs gave most of the Estado's revenue). KC-4.3.II.A.i stays
 * quoted to its first sentence only; the East Asia chapter teaches the restrictive-policies one.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-south-southeast-asia',
  slug: 'region-4-south-southeast-asia',
  unit: '4',
  region: 'South and Southeast Asia',
  titleHtml: 'South and Southeast <em>Asia</em>',
  deck: `From 1450 to 1750, the Indian Ocean's old trading world met Portuguese warships, Spanish silver and armed Dutch and English companies. On land, the Mughals ruled a great empire.`,
  inShort: [
    `Long before 1500, Asian, African and Arab merchants ran a busy trade across the Indian Ocean.`,
    `From the early 1500s Portugal used warships and forts to tax part of that trade, but merchants kept sailing.`,
    `From 1571 Spain carried American silver across the Pacific to Manila, where Chinese merchants traded for it.`,
    `On land, the Mughal emperor Akbar welcomed Hindus, but Aurangzeb later limited their place and fought the Marathas.`,
    `After 1600, armed Dutch and English companies fought for the spice trade and bought India's cotton cloth with silver.`
  ],
  topics: ['4.1', '4.2', '4.4', '4.5', '4.6', '4.7', '4.8'],
  ced: [
    'KC-4.1.II.A',
    'KC-4.1.III',
    'KC-4.1.III.A',
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
      thesis: `In 1498 Portugal entered a trade that Asian, African and Arab merchants had run for centuries. It came for profit and partly as a crusade. It had little that Asian buyers wanted, and it soon used force.`,
      parts: [
        {
          heading: 'The ocean before the Portuguese',
          blocks: [
            { p: `Sailing on the Indian Ocean followed the <span class="kt">monsoon</span> (a seasonal wind). It blows one way for part of the year and the other way for the rest. Many of the ocean's currents change direction with it. So captains knew months ahead when to sail out and when to come home.` },
            { p: `Gujarat's harbors lay in western India. <b>Calicut</b> sat on India's Malabar coast, where pepper grew. <b>Malacca</b> guarded the strait between the Indian Ocean and the South China Sea. No single state ruled the water.` },
            { p: `<b>Gujarati</b> merchants carried India's cotton cloth to buyers from East Africa to Southeast Asia. <b>Javanese</b> merchants carried rice and spices to Malacca. Cloves and nutmeg came from the <span class="kt">spice islands</span>. These were small islands in eastern Indonesia.` },
            { p: `Islam had traveled these routes with merchants and teachers. By 1500 many port rulers in Southeast Asia and East Africa were Muslims, Malacca's ruler among them. No Muslim army had conquered them.` },
            { p: `The ocean also carried people as cargo. Enslaved East Africans were shipped to Arabia, Persia and India. This trade was old, and it went on through the whole period. Inside Africa, too, slavery went on in its older forms. Many enslaved people there were taken into households, where they worked, served or married.` }
          ]
        },
        {
          heading: 'Why Portugal came, and how',
          blocks: [
            { p: `Portugal's crown and princes had backed voyages down the African coast for more than seventy years (<a href="#chapter-t4-2">Topic 4.2</a>). At first they wanted the gold of West Africa. By the 1480s they also wanted a sea route to the spices. Pepper passed through many middlemen (traders in between) on its way to Europe. Each one added to the price. A sea route would cut them out.` },
            { p: `Religion mattered too. Portugal's ocean venture began in <span class="num">1415</span>, when it captured Ceuta (a Muslim port in North Africa). Its rulers saw the voyages partly as a crusade (a holy war). For them, it continued Christian Iberia's long war against Muslim rulers. <a href="#r4-europe-edge">The Europe chapter</a> tells that story.` },
            { p: `In <span class="num">1497</span> Vasco da Gama sailed around Africa. At Malindi in East Africa, he hired a pilot who knew the way across the ocean. He reached Calicut in May <span class="num">1498</span>. The route was new to Portugal, but not to the ocean. Da Gama had borrowed what Indian Ocean sailors already knew about its winds.` },
            { p: `At Calicut, nobody wanted the cheap goods he had brought. Still, he came home in <span class="num">1499</span> with spices worth far more than the voyage cost.` }
          ]
        },
        {
          heading: 'Diu, 1509',
          blocks: [
            { p: `Portugal sailed to India in big new ships called carracks, which carried cargo and heavy guns. Most Indian Ocean merchant ships were not built to fight them (<a href="#chapter-t4-1">Topic 4.1</a>). Portugal tried to take the spice trade by force.` },
            { p: `In <span class="num">1509</span> a joint fleet met the Portuguese off the Gujarat port of <b>Diu</b>. Mamluk Egypt sent warships. The sultan (Muslim ruler) of Gujarat sent ships too, and so did the Hindu ruler of Calicut. The Portuguese won.` },
            { p: `But Portugal did not take Diu. <b>Malik Ayaz</b> governed the port for Gujarat. He let the Portuguese trade there, but he put off their demands for a fort for as long as he governed. Portugal built one only in the 1530s, by a treaty with Gujarat's sultan.` },
            { p: `Diu was an early battle in a long rivalry. Muslim powers and Portugal fought over whose ships would carry the spices. <a href="#r4-middle-east-spicewar">The Middle East chapter</a> tells how Egypt and the Ottomans fought it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Diu gave Portugal control of the Indian Ocean. Portugal won one sea battle. Gujarat kept the port, and Asian rulers and merchants kept making their own choices.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: state-backed voyages used new ships and older Asian knowledge of the winds, and fights over trade followed.`,
                `<a href="#chapter-t4-1">Topic 4.1</a>: "The developments included ... innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the ... Indian Ocean regions."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states."`,
                `An optional College Board example: the rivalry between Muslim and European powers in the Indian Ocean.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Monsoon', 'The seasonal wind of the Indian Ocean, which changes direction during the year.']
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
      thesis: `Portugal seized ports and sold passes to sail, and Spain brought American silver across the Pacific. Neither one replaced the merchants who already ran the trade.`,
      parts: [
        {
          heading: 'Ports, not provinces',
          blocks: [
            { p: `The Portuguese commander Afonso de Albuquerque took <b>Goa</b> in western India in <span class="num">1510</span>. By <span class="num">1530</span> Goa was the capital of Portugal's ports in Asia. Albuquerque took Malacca in <span class="num">1511</span>. In <span class="num">1515</span> he took Hormuz at the mouth of the Persian Gulf. Portugal had also set up bases on Africa's east coast, at Sofala in <span class="num">1505</span> and on Mozambique Island in <span class="num">1507</span>.` },
            { p: `Each was a <span class="kt">trading post</span>: a small fortified base where merchants bought and sold. Together they made a <span class="kt">trading-post empire</span>. This was a chain of ports with almost no land behind them. Portugal's guns could batter a harbor, but they could not conquer India's interior. Gujarat, Vijayanagara and, after <span class="num">1526</span>, the Mughals had far larger armies on land.` },
            { p: `Rivalry drove the building, with Muslim powers and with Spain. In <span class="num">1494</span> Portugal and Spain had divided their claims to new lands in the Treaty of Tordesillas (<a href="#chapter-t4-4">Topic 4.4</a>).` }
          ]
        },
        {
          heading: 'The cartaz, and the merchants who kept sailing',
          blocks: [
            { p: `Portugal's main tool was the <span class="kt">cartaz</span> (a pass that merchant ships bought from the Portuguese). A ship with a pass had to stop at a Portuguese port and pay duties (taxes on goods) there. Portuguese patrols could seize a ship that sailed without one. Duties at ports such as Goa, Hormuz and Malacca became the main income of Portugal's government in Asia. Portuguese captains and officials also traded for their own profit.` },
            { p: `The cartaz changed who taxed the ocean. It did not end Asian trade. Gujarati merchants kept shipping cloth, often by buying a pass and sailing on. Java's Muslim port kingdoms were hostile to Portuguese Malacca. In <span class="num">1512</span> to <span class="num">1513</span>, Pati Unus of Demak (a Muslim state on Java) sent a fleet against it, and failed. The Portuguese looked to Pegu (in Burma) and Ayutthaya (in Siam) for rice instead. Much Javanese and Muslim shipping moved to other ports, such as Banten, Aceh and Johor. Still, much of the ocean's business stayed <span class="kt">intra-Asian trade</span>: trade between Asian ports, in Asian goods.` },
            { p: `Muslim powers kept fighting. <b>Aceh</b> (a Muslim kingdom on the island of Sumatra) fought the Portuguese again and again for more than a century, from about <span class="num">1520</span>. It shipped its pepper straight to the Red Sea. By the middle of the 1500s, large amounts of spices again reached the Mediterranean that way.` },
            { p: `Religion traveled too. Asian merchants and teachers kept spreading Islam in Southeast Asia. On Java, many Muslims also kept older beliefs, such as faith in local spirits. Beliefs that mix different traditions in this way are called <span class="kt">syncretic</span>. In Goa, the Portuguese set up an Inquisition (a church court) in <span class="num">1560</span>. It tried converts accused of secretly keeping Jewish, Hindu or Muslim practices.` }
          ]
        },
        {
          heading: 'Manila: Spain arrives from the east',
          blocks: [
            { p: `Spain reached Asia the other way, across the Pacific. In <span class="num">1565</span> a Spanish expedition came to the Philippines to stay. It also found a sailing route back across the Pacific, from Asia to Mexico. In <span class="num">1571</span> Spain founded <b>Manila</b>.` },
            { p: `From then on, the <span class="kt">Manila galleons</span> carried American silver from Acapulco in Mexico to Manila. Merchants from Fujian in southern China sailed in with silk and porcelain. They took the silver home.` },
            { p: `Why did China want silver so much? Silver was already worth more in China than in Europe. That was because the Ming had given up paper money, and China's growing economy ran on silver. Then a tax reform called the <span class="kt">Single Whip</span> made most Chinese taxes payable in silver. That added to the demand. And China mined little silver of its own. <a href="#r4-east-asia-silver">The East Asia chapter</a> tells this story from China.` },
            { p: `Manila became a Chinese trading city under a Spanish flag. Chinese merchants and craftsmen there far outnumbered the Spanish. Christianity spread through much of the Philippines after <span class="num">1565</span>. But in the southern islands of Mindanao and Sulu, Muslim sultans resisted Spanish rule.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: rival European states built sea empires, but Asian merchants kept trading, and faiths spread, clashed and mixed.`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants."`,
                `An optional College Board example: Gujarati and Javanese merchants.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Syncretic', 'Mixing beliefs and practices from different religions or traditions.'],
        ['Trading-post empire', 'A chain of fortified ports with almost no land behind them.'],
        ['Cartaz', 'A pass Portugal sold to merchant ships. It made them stop and pay duties at a Portuguese port.'],
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
      thesis: `The Mughal emperors held a land empire by making room for its Hindu majority. When a later emperor narrowed that room and pushed south, resistance helped weaken the empire.`,
      parts: [
        {
          heading: 'A Muslim dynasty, a Hindu majority',
          blocks: [
            { p: `The Mughal dynasty began in <span class="num">1526</span>, when Babur (a prince from Central Asia) won a battle at Panipat. Its emperors were Muslims. Most of their subjects were Hindus.` },
            { p: `<b>Akbar</b> ruled from <span class="num">1556</span> to <span class="num">1605</span>. He made room for Hindus on purpose. In <span class="num">1564</span> he ended the <span class="kt">jizya</span> (a tax that non-Muslims paid under Islamic rule). From <span class="num">1562</span> he married daughters of the <b>Rajputs</b> (Hindu warrior kings of northwestern India). He made Rajput princes some of his highest commanders.` },
            { p: `Akbar was not only being generous. He needed Rajput armies and Hindu loyalty, and he won much of both (<a href="#chapter-t4-7">Topic 4.7</a>). Not every Rajput king joined him. Mewar fought on, and it made peace with the Mughals only in <span class="num">1615</span>, ten years after Akbar died. He also invited Jesuits (Catholic priests) from Goa to his court to debate religion. <a href="#r4-middle-east-peoples">The Middle East chapter</a> tells how the Ottomans also made room for many peoples.` }
          ]
        },
        {
          heading: 'Europeans on Mughal terms',
          blocks: [
            { p: `<b>Surat</b> was Gujarat's great port. In <span class="num">1573</span> its fort surrendered to Akbar. At sea, the Portuguese could demand a pass. On Mughal land, Europeans came as customers. The English East India Company opened a trading house there in the 1610s, but only with permission from the emperor Jahangir (Akbar's son).` }
          ]
        },
        {
          heading: 'Aurangzeb and the Marathas',
          blocks: [
            { p: `Akbar's great-grandson <b>Aurangzeb</b> ruled from <span class="num">1658</span> to <span class="num">1707</span>. In <span class="num">1679</span> he brought back the jizya. He also favored a stricter reading of Islamic law. Yet he still employed many Hindu officers. A ruler's welcome was a choice, and the next ruler could take it back.` },
            { p: `Aurangzeb also wanted the whole <b>Deccan</b> (the high plateau of central India). Earlier Mughal armies had met a tough enemy there. In India some enslaved Africans served as soldiers, and a few rose high. One of them became that enemy.` },
            { p: `<b>Malik Ambar</b> was born in Ethiopia and sold as a boy. He rose to rule the Deccan kingdom of Ahmadnagar as regent (ruling for its young king). He fought the Mughals until he died in <span class="num">1626</span>.` },
            { p: `Later, <b>Shivaji</b> built a kingdom for the <span class="kt">Marathas</span> (a people of the western Deccan). He began in the 1640s, from hill forts. His soldiers raided, cut supply lines and went back to their forts. He first raided Mughal lands in <span class="num">1657</span>. The largest Mughal campaigns against him came in the 1660s. In <span class="num">1674</span> he was crowned king.` },
            { p: `In <span class="num">1681</span> Aurangzeb moved his court south. By <span class="num">1687</span> he had conquered the Deccan kingdoms of Bijapur and Golconda. Shivaji's son had become the next Maratha king. In <span class="num">1689</span> Aurangzeb executed him. But Aurangzeb never defeated the Marathas. He died in the Deccan in <span class="num">1707</span>.` },
            { p: `After his death, Maratha power spread across much of India, while the emperors in Delhi grew weaker. The long war was not the only cause of that decline, but it was one. It cost the empire money, soldiers and decades of its emperor's attention (<a href="#chapter-t4-6">Topic 4.6</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not tell this as a simple war of Hindus against Muslims. Aurangzeb's officers included many Hindus. Much of the fighting was over who would rule and tax the Deccan.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: the Mughals both welcomed and limited religious groups, and their push south met local resistance.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy."`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
                `An optional College Board example: the Maratha conflict with the Mughals.`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Jizya', 'A tax paid by non-Muslims under Islamic rule.'],
        ['Marathas', 'A people of the western Deccan. Their kingdom, founded by Shivaji, fought the Mughals.']
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
      thesis: `After 1600, armed Dutch and English companies fought for Asia's spices. On India's coasts, though, they were customers who paid in silver.`,
      parts: [
        {
          heading: 'Companies built for war',
          blocks: [
            { p: `European rulers followed <span class="kt">mercantilism</span>. This was the idea that a state grows strong by collecting gold and silver. It also held that one country's gain in trade is another's loss.` },
            { p: `To act on it, rulers chartered <span class="kt">joint-stock companies</span>. To charter a company was to give it an official license. A joint-stock company sold shares (parts of the company) to many investors. Their money paid for long, risky voyages, and they split the profits and losses.` },
            { p: `England chartered its East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch Republic chartered the Dutch East India Company (the <b>VOC</b>). It had a <span class="kt">monopoly</span>: no other Dutch company could trade in Asia. It could also build forts, keep soldiers, make treaties and wage war. France chartered its own East India Company in <span class="num">1664</span>, and the company founded Pondicherry in southeast India in <span class="num">1674</span>.` },
            { p: `<b>Jan Pieterszoon Coen</b> was a VOC leader in Asia. In <span class="num">1619</span> he founded <b>Batavia</b> on the island of Java as the company's headquarters there.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The company's leaders said so themselves. In <span class="num">1614</span> Coen wrote to the VOC's directors that "trade cannot be kept up without war, nor war without trade" (translated from Dutch). He was asking them for more ships and soldiers, so his words make an argument. Still, they show how the company's own leaders saw its business.`
            } }
          ]
        },
        {
          heading: 'Fighting for the spice islands',
          blocks: [
            { p: `Nutmeg grew only on the tiny Banda Islands. In <span class="num">1621</span> VOC forces under Coen conquered them. They killed, enslaved or drove out most of the islanders. Then they handed the nutmeg groves to Dutch planters, who used enslaved workers. The Dutch and English companies also fought each other for these islands, as <a href="#r4-europe-rivals">the Europe chapter</a> tells.` },
            { p: `Southeast Asian states fought back and chose their own allies. Mataram was the strongest state on Java. Its ruler Sultan Agung besieged Batavia in <span class="num">1628</span> and <span class="num">1629</span>, but he failed to take it.` },
            { p: `In <span class="num">1641</span> the VOC took Malacca from Portugal with help from Johor. Johor's sultans were heirs of the rulers Portugal had driven out of Malacca. Portugal kept Goa and Diu.` }
          ]
        },
        {
          heading: 'Cloth and silver',
          blocks: [
            { p: `On India's coasts, the companies came to buy. Weavers in Gujarat, in Bengal and on the Coromandel coast in the southeast made cotton cloth. Their buyers were in Asia, Africa and Europe. In the 1600s the companies bought much more of it, often paying weavers in advance. Women and girls did much of the spinning at home.` },
            { p: `This was <span class="kt">peasant and artisan labor</span>: farm and craft work done in homes and workshops. The work was old. What was new was how much of it there was, and how far away the buyers were.` },
            { p: `The companies paid largely in American silver, because Europe had few goods that Asian buyers wanted. England passed a law restricting Indian cotton cloth in <span class="num">1700</span>, to protect its own weavers. Great Britain passed another in <span class="num">1721</span>. Much of the cloth that European ships carried to West Africa was Indian cotton too, as <a href="#r4-sub-saharan-africa-slave-trade">the Sub-Saharan Africa chapter</a> tells.` },
            { p: `By <span class="num">1750</span> the companies held forts and trading houses along India's coasts. But Asian states still ruled most of the land, and Asian weavers and merchants still made and carried most of the goods. The companies' conquest of large parts of India came later, after this unit's period ends.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: rulers used armed companies and American silver to compete for Asia's goods, and India's weavers made more.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased."`,
                `An optional College Board example: cotton in India.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Mercantilism', 'The idea that a state grows strong by collecting gold and silver.'],
        ['Joint-stock company', 'A company owned by many investors, who split its profits and losses.'],
        ['Peasant and artisan labor', 'Farm and craft work done in homes and workshops.']
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
        title: 'Europeans held ports, while Asian states held the land',
        body: `Portugal took Goa in 1510 and Malacca in 1511, but Gujarat kept Diu after the battle of 1509. Aurangzeb took Bijapur and Golconda by 1687, but he never defeated the Marathas.`
      },
      {
        category: 'Religious',
        title: 'Faiths spread along the routes, and rulers welcomed or limited them',
        body: `Islam kept spreading in Southeast Asia, and Christianity spread through much of the Philippines after 1565. Akbar ended the jizya on non-Muslims in 1564. Aurangzeb brought it back in 1679.`
      },
      {
        category: 'Social',
        title: 'Work for distant buyers grew, and some of it was forced',
        body: `After 1621, enslaved workers tended the Banda Islands' nutmeg groves for Dutch planters. Malik Ambar was sold from Ethiopia as a boy, yet he ruled Ahmadnagar until he died in 1626.`
      },
      {
        category: 'Intellectual',
        title: 'Knowledge of the ocean was Asian and African before it was European',
        body: `In 1498 da Gama crossed to India with a pilot hired at Malindi in East Africa, using what Indian Ocean sailors knew of the monsoon. Akbar invited Jesuits from Goa to debate religion at his court.`
      },
      {
        category: 'Technological',
        title: 'Armed ships and a new Pacific route carried Europeans into Asia',
        body: `Portugal's armed ships beat the joint fleet at Diu in 1509. In 1565 Spanish sailors found a route back across the Pacific, which made the Manila galleons possible.`
      },
      {
        category: 'Economic',
        title: 'Old trade kept flowing, with new carriers and more work',
        body: `From 1571 the Manila galleons carried American silver to Manila, where Chinese merchants traded silk for it. Gujarati merchants often bought a cartaz and sailed on. Much Javanese and Muslim shipping moved to other ports, such as Banten, Aceh and Johor. To protect local weavers, England restricted Indian cotton cloth in 1700, and Great Britain did so again in 1721.`
      }
    ]
  }
};
