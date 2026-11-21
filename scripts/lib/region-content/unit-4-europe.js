'use strict';

/**
 * Unit 4 by region: Europe.
 *
 * Europe's story from c. 1450 to c. 1750 told as one narrative: a region at the far end of
 * an Asian-centered trade world borrows tools and wind knowledge (KC-4.1.II, KC-4.1.II.A),
 * sends state-sponsored voyages out (KC-4.1.III and .A to .C), builds trading posts and
 * maritime empires out of rivalry (KC-4.3.II.A.i, KC-4.3.II.C), runs them with mercantilist
 * laws and joint-stock companies and fights over trade (KC-4.1.IV.C, KC-4.3.III.ii), pays for
 * Asian goods in American silver (KC-4.1.IV, KC-4.1.IV.D.i), and changes at home: American
 * crops (KC-4.1.V.B, KC-4.1.V.D), farming still at the center (KC-4.2), intensified cottage
 * labor (KC-4.2.II.A), the Fronde and Razin's Cossack revolt (KC-4.3.III.iii), monarchs
 * against nobles and boyars (KC-4.2.III.B), the expulsion of Jews from Spain and Portugal
 * (KC-4.3.I.B), and religion spreading and clashing with expansion (KC-4.1.VI). Deliberately
 * left out: the Reformation itself (Unit 3; one connective sentence only), the Scientific
 * Revolution and Enlightenment (later units), and Europe's wars of religion, none of which the
 * Unit 4 CED requires. Facts are drawn from the Topic 4.1 to 4.7 deep readings and their claim
 * ledgers.
 *
 * Plain-language and accuracy pass (2026-11-21), on the East Asia method: sentences cut to one
 * idea each, the College Board's own words moved out of the story into one "What the College
 * Board says" box per section (quoted word for word from scripts/lib/ced-source/unit-4.js, the
 * illustrative examples labelled as examples), the chapter cut by about a tenth, cross-region
 * links pointed at the section that tells the event, and six closing cards in the shared order.
 * Fixes from the five-persona stress test (2026-11-17): "Europeans dominated the ocean routes"
 * narrowed to carrying the Atlantic trade and holding some Asian ports and sea lanes by force,
 * while Asian merchants kept much of Asia's trade; Portugal's motive told as Topic 4.2 tells it
 * (the middlemen, West African gold, and the crusading inheritance of Ceuta); silver's pull to
 * China told in the shared order (already worth more, because the Ming gave up paper money; the
 * Single Whip made most taxes payable in silver; China mined little); "the first of the
 * Anglo-Dutch Wars" kept. Cut for length: Ptolemy's Geography (and its date, c. 1400), the
 * Senegal-coast purchases of the 1450s, Nunn and Qian's potato estimate (1700 to 1900), Matteo
 * Ricci in Beijing (1601), the fluyt, and Bayezid II by name (the Middle East tells his side). Topic 4.8 added to
 * `topics` because the box quotes KC-4.2, which the CED prints on that page. See
 * docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-europe',
  slug: 'region-4-europe',
  unit: '4',
  region: 'Europe',
  titleHtml: '<em>Europe</em>',
  deck: `In <span class="num">1450</span> Europe sat at the far edge of a trading world centered on Asia. By <span class="num">1750</span> European ships carried the Atlantic trade, and European states ruled large parts of the Americas. In Asia, though, Europeans held only some ports, and some sea lanes, by force. They stayed buyers there, paying mostly in silver.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'],
  ced: [
    'KC-4.2',
    'KC-4.1.II',
    'KC-4.1.II.A',
    'KC-4.1.III',
    'KC-4.1.III.A',
    'KC-4.1.III.B',
    'KC-4.1.III.C',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
    'KC-4.1.IV.D.i',
    'KC-4.1.V.B',
    'KC-4.1.V.D',
    'KC-4.1.VI',
    'KC-4.2.II.A',
    'KC-4.2.III.B',
    'KC-4.3.I.B',
    'KC-4.3.II.A.i',
    'KC-4.3.II.C',
    'KC-4.3.III.ii',
    'KC-4.3.III.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'edge',
      num: '01',
      accent: 'gold',
      name: 'At the Edge of Someone Else\'s World',
      navLabel: 'Borrowed tools',
      dates: 'c. 1400 to 1500 &nbsp;·&nbsp; Middlemen, crusade, and borrowed knowledge',
      thesis: `Europe sat at the far end of trade routes that other people ran. Its rulers wanted to reach the source of the goods by sea, using tools that came mostly from the Classical, Islamic and Asian worlds.`,
      parts: [
        { heading: 'Why Europeans looked to the sea', blocks: [
          { p: `In the 1400s the richest trade in the world crossed the Indian Ocean and the Middle East. Pepper cost little on India's Malabar coast. On its way to Europe it passed through Red Sea or Persian Gulf ports, then Mamluk Egypt or Ottoman lands. Last, <b>Venetian</b> merchants sold it in Europe. Each trader in that chain, each middleman, took a cut.` },
          { p: `So a kingdom that reached India by sea could skip the middlemen and keep their profits (<a href="#chapter-t4-2">Topic 4.2</a>). Portugal also wanted West African gold, which crossed the Sahara by camel.` },
          { p: `Religion pushed the same way. Portugal's ocean venture began in <span class="num">1415</span>, when it captured <b>Ceuta</b>, a Muslim port in North Africa. That attack was a crusade. It grew out of the <span class="kt">Reconquista</span>, the long wars in which Christian kingdoms took Spain and Portugal from Muslim rulers.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that the Ottomans closed the trade routes after taking Constantinople in <span class="num">1453</span>. Spice prices did not jump. The main spice route ran through Mamluk Egypt, which the Ottomans took only in <span class="num">1517</span>. And Portugal's voyages had begun decades before <span class="num">1453</span>.` } }
        ] },
        { heading: 'Tools from elsewhere', blocks: [
          { p: `Almost every tool on a European ship came from somewhere else (<a href="#chapter-t4-1">Topic 4.1</a>). The magnetic compass was first used at sea in China, by about <span class="num">1100</span>. How it reached Europe is still debated. The <span class="kt">lateen sail</span> is a triangular sail that helps a ship work against the wind. It was common across the Mediterranean and the seas of the Islamic world. The astrolabe measures how high the sun stands. It was a Greek idea that astronomers in the Islamic world made precise.` },
          { p: `Pilots also used tables of where the sun stood each day. The tables of <b>Abraham Zacuto</b>, printed in Portugal in <span class="num">1496</span>, grew out of the work of Muslim and Jewish astronomers in Toledo, in Spain. Shipbuilders added new designs. The small, shallow <span class="kt">caravel</span> explored unknown coasts, and the big <span class="kt">carrack</span> carried cargo and cannon.` }
        ] },
        { heading: 'The wind was the breakthrough', blocks: [
          { p: `The last piece was knowledge of the ocean itself. Off West Africa the wind blows from the northeast. It carried ships south easily but blocked them on the way home. Over decades, Portuguese sailors found the answer, called the <span class="kt">volta do mar</span>, or "turn of the sea." A ship heading home sailed far out into the open Atlantic. There it caught westerly winds that carried it back to Portugal. Columbus later used the same winds to cross the Atlantic and return.` },
          { note: { kind: 'cb', label: CB, paras: [
            `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."`,
            `<a href="#chapter-t4-1">Topic 4.1</a>: these developments included "new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns". The caravel, the carrack, the lateen sail and the compass are among the College Board's examples.`
          ] } }
        ] }
      ],
      terms: [
        ['Lateen sail', 'A triangular sail that helps a ship sail against the wind.'],
        ['Caravel', 'A small, shallow Portuguese ship built to explore unknown coasts.'],
        ['Volta do mar', 'The Portuguese route home through the open Atlantic, riding the westerly winds.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'crowns',
      num: '02',
      accent: 'rust',
      name: 'Crowns Go to Sea',
      navLabel: 'Crowns at sea',
      dates: '1415 to 1610 &nbsp;·&nbsp; Portugal, Spain, and the northern latecomers',
      thesis: `Ocean exploration was a project of kings and queens. Portugal took decades of small steps, Spain bet on one daring crossing, and the northern kingdoms tried the Arctic.`,
      parts: [
        { heading: 'Portugal, step by step', blocks: [
          { p: `A voyage to find a new route might find nothing. So rulers paid for exploring, or licensed captains in return for a share (<a href="#chapter-t4-2">Topic 4.2</a>). Portugal's <b>Prince Henry</b> paid for voyages down the African coast for decades.` },
          { p: `In the 1440s Portuguese crews raided the Saharan coast for captives and sold them in Portugal, the beginning of the Atlantic slave trade. From the late 1440s they also bought gold and captives at Arguin, an island off that coast.` },
          { p: `In <span class="num">1488</span> <b>Bartolomeu Dias</b> sailed around the southern tip of Africa. In <span class="num">1498</span> <b>Vasco da Gama</b> reached Calicut, a rich port in India (see <a href="#r4-south-southeast-asia-ocean">South and Southeast Asia</a>). Calicut's merchants had no use for the cloth and beads he carried. Yet the pepper he brought home was worth far more than the voyage cost. Europe had little that Asia wanted, but the profit on Asian goods kept the trade going.` },
          { p: `Portugal could not compete on goods, so it competed with guns. It built a <span class="kt">trading-post empire</span>: forts in ports, with almost no land behind them (<a href="#chapter-t4-4">Topic 4.4</a>). It built Elmina on the Gold Coast in <span class="num">1482</span>. It took Goa in <span class="num">1510</span>, Malacca in <span class="num">1511</span> and Hormuz in <span class="num">1515</span>. Portugal profited by buying goods where they were made. It also sold the <span class="kt">cartaz</span>, a pass that merchant ships had to buy.` },
          { p: `The cartaz changed who taxed the ocean. It did not change who traded on it. Gujarati merchants from western India, for example, often bought a pass and sailed on (see <a href="#r4-south-southeast-asia-iberians">South and Southeast Asia</a>). And the strongest Asian states, Ming China and Tokugawa Japan, set their own terms for European traders (see <a href="#r4-east-asia-ming">East Asia</a>).` }
        ] },
        { heading: 'Spain\'s year, 1492', blocks: [
          { p: `In January <span class="num">1492</span> <b>Ferdinand and Isabella</b>, Spain's monarchs, took Granada, the last Muslim kingdom in Spain. In March they ordered every Jew who would not become Christian to leave. Tens of thousands left, and many others converted and stayed. In <span class="num">1497</span> Portugal, pressed by Spain, had most of its Jews baptized by force (<a href="#chapter-t4-7">Topic 4.7</a>). Many exiles found refuge in the Ottoman Empire (see <a href="#r4-middle-east-peoples">The Middle East</a>).` },
          { p: `That spring the same monarchs agreed to back <b>Christopher Columbus</b>, who believed Asia lay a few thousand miles west. He reached the Caribbean in October. In <span class="num">1494</span> the <span class="kt">Treaty of Tordesillas</span> drew a line through the Atlantic. New lands west of it went to Spain, and lands east of it to Portugal. From <span class="num">1519</span> to <span class="num">1522</span> a Spanish expedition, begun by Ferdinand Magellan and finished by Juan Sebastián Elcano, sailed around the world.` }
        ] },
        { heading: 'The latecomers go north', blocks: [
          { p: `England, France and the Dutch ignored the treaty. At first, rather than fight Portugal for the route around Africa, they looked for a <span class="kt">Northwest Passage</span> over North America to Asia. <b>John Cabot</b> sailed for England in <span class="num">1497</span> and reached North America. <b>Jacques Cartier</b> explored the St. Lawrence River for France in the 1530s. In <span class="num">1609</span> <b>Henry Hudson</b>, sailing for the Dutch, went up the river now named for him.` },
          { p: `Land and Arctic ice blocked every northern passage. But the voyages found cod off Newfoundland, and beaver furs traded by Indigenous nations. From the 1590s English and Dutch fleets also took Portugal's own route around Africa, and soon fought Portugal for it.` },
          { note: { kind: 'cb', label: CB, paras: [
            `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
            `<a href="#chapter-t4-2">Topic 4.2</a>: Portugal's skill at sea "resulted in the construction of a global trading-post empire." Spain's voyages "dramatically increased European interest in transoceanic travel and trade." Crossings under English, French and Dutch sponsorship were made "often with the goal of finding alternative sailing routes to Asia."`,
            `<a href="#chapter-t4-4">Topic 4.4</a>: the new trading posts "proved profitable for the rulers and merchants involved in new global trade networks."`,
            `<a href="#chapter-t4-7">Topic 4.7</a>: some states "suppressed diversity". The expulsion of Jews from Spain and Portugal is one of the College Board's examples.`
          ] } }
        ] }
      ],
      terms: [
        ['Trading-post empire', 'A chain of forts in ports, built to control and tax trade, not to rule land.'],
        ['Cartaz', 'A pass Portugal made Indian Ocean merchant ships buy.'],
        ['Treaty of Tordesillas', 'The 1494 line through the Atlantic that split new lands between Spain and Portugal.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rivals',
      num: '03',
      accent: 'iron',
      name: 'Companies, Silver and Rivals',
      navLabel: 'Trade wars',
      dates: 'c. 1550 to 1750 &nbsp;·&nbsp; Mercantilism, joint-stock companies, and wars over trade',
      thesis: `By <span class="num">1600</span> the race was crowded. Rulers saw trade as a contest that one kingdom won only when another lost. They built companies that could fight, and they paid for Asia's goods with American silver.`,
      parts: [
        { heading: 'Rivals in politics, faith and money', blocks: [
          { p: `The Reformation of the early 1500s, part of Unit 3, had split western Christianity into Catholic and Protestant churches. So Protestant England and the Dutch fought Catholic Spain over religion as well as wealth. The <b>Dutch Republic</b>, at war with Spain for its independence from <span class="num">1568</span>, also took Portugal's forts at Elmina in <span class="num">1637</span> and Malacca in <span class="num">1641</span>. England and France planted colonies in North America and the Caribbean.` },
          { p: `Faith traveled outward on the ships (<a href="#chapter-t4-5">Topic 4.5</a>). Catholic missionaries spread Christianity through the Americas and the Philippines, and Kongo's kings took up the faith themselves. Many converts blended it with older beliefs into new mixed, or <span class="kt">syncretic</span>, practices (see <a href="#r4-americas-resistance">The Americas</a>). Contact brought religious conflict too: Japan's shoguns banned Christianity in <span class="num">1614</span>.` }
        ] },
        { heading: 'Mercantilism and the company that could fight', blocks: [
          { p: `European rulers shared a set of ideas now called <span class="kt">mercantilism</span>. A kingdom's strength, they believed, is the gold and silver it holds. One kingdom's gain in trade is another's loss. So a kingdom should sell more than it buys, tax foreign goods, and keep its colonies' trade for itself.` },
          { p: `The London merchant <b>Thomas Mun</b> put it this way. England "must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value." By "strangers" he meant foreigners. England's Navigation Act of <span class="num">1651</span> let goods from Asia, Africa and the Americas into England only in English ships. It was aimed at Dutch shippers.` },
          { p: `To carry out these ideas, rulers chartered <span class="kt">joint-stock companies</span>. These sold shares to many investors, who split the profits and losses of risky voyages. Elizabeth I chartered the English East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch chartered the <span class="kt">VOC</span>, the Dutch East India Company. Its charter let it build forts, keep soldiers and make war.` },
          { p: `A contest over trade could become a war. The Dutch and English companies fought over the spice islands of Southeast Asia. In <span class="num">1623</span>, on the island of Ambon, VOC officials executed ten English company men and ten others. The charge was a plot to seize the Dutch fort, and the confessions were taken under torture. In Europe, the Navigation Act was one cause of the first of the <span class="kt">Anglo-Dutch Wars</span>. England and the Dutch fought three wars at sea between <span class="num">1652</span> and <span class="num">1674</span>, largely over trade and shipping.` }
        ] },
        { heading: 'Carriers in the Atlantic, customers in Asia', blocks: [
          { p: `In the Atlantic, European ships carried the trade. On Africa's coasts, though, African rulers and merchants decided who and what was sold (see <a href="#r4-sub-saharan-africa-slave-trade">Sub-Saharan Africa</a>). Plantation sugar and tobacco, grown with forced labor, went mostly to Europe. Guns and cloth went to Africa, and enslaved Africans to the Americas. Silver crossed to Seville.` },
          { p: `In Asia, Europeans were buyers of pepper, cotton cloth, silk and porcelain. They paid largely in silver from Potosí in the Andes and Zacatecas in Mexico, because Asian buyers wanted few European goods.` },
          { p: `Much of that silver ended up in China. Silver was already worth more in China than in Europe, because the Ming had given up paper money. Then a reform called the Single Whip made most Chinese taxes payable in silver, which added to the demand. And China mined little silver of its own (see <a href="#r4-east-asia-silver">East Asia</a>).` },
          { p: `European ships also earned money carrying goods between Asian ports. But Asian merchants kept much of that trade in their own hands. Europeans held some Asian ports, and controlled some sea lanes, by force. They did not take over Asia's trade.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Europe controlled the world economy by <span class="num">1750</span>. Indian cotton cloth sold so well in England that English laws of <span class="num">1700</span> and <span class="num">1721</span> restricted it, to protect England's own weavers.` } },
          { note: { kind: 'cb', label: CB, paras: [
            `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: rulers used mercantilist policies "to expand and control their economies and claim overseas territories", and joint-stock companies "to compete against one another in global trade."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: silver from Spain's colonies bought "Asian goods for the Atlantic markets" and satisfied "Chinese demand for silver."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: contact "expanded the reach" of existing religions and "contributed to religious conflicts and the development of syncretic belief systems and practices."`
          ] } }
        ] }
      ],
      terms: [
        ['Mercantilism', 'The belief that a state grows strong by piling up gold and silver and selling more than it buys.'],
        ['VOC', 'The Dutch East India Company (1602), allowed to build forts and make war.'],
        ['Anglo-Dutch Wars', 'Wars at sea between England and the Dutch Republic; the first three, 1652 to 1674, were fought largely over trade (a fourth followed in 1780).']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'home',
      num: '04',
      accent: 'oxide',
      name: 'Fields, Looms and Kings',
      navLabel: 'Europe at home',
      dates: 'c. 1550 to 1750 &nbsp;·&nbsp; New food, more work, and the power of monarchs',
      thesis: `The ocean trade changed Europe at home. New crops fed more people, and families worked harder for faraway buyers. Monarchs took power from nobles and peasants, who pushed back.`,
      parts: [
        { heading: 'New food, more work', blocks: [
          { p: `Ships coming back across the Atlantic carried plants Europe had never seen (<a href="#chapter-t4-3">Topic 4.3</a>). The most important was the <span class="kt">potato</span>. On cool, damp ground it gives more food per acre than wheat or rye. It spread across northern Europe, most widely in the 1700s, and helped Europe's population grow.` },
          { p: `Even so, most Europeans still lived by farming, as most people everywhere did. What changed was how much people worked, and for whom. Under the <span class="kt">putting-out system</span>, merchants brought raw wool or flax to families in the countryside. The families spun and wove it into cloth at home and were paid by the piece. Women and girls did much of the spinning. The work was old. What was new was how much of it there was, and how far away its buyers were.` }
        ] },
        { heading: 'Kings against nobles and peasants', blocks: [
          { p: `As rulers gathered power, people pushed back (<a href="#chapter-t4-6">Topic 4.6</a>). In France in <span class="num">1648</span>, while <b>Louis XIV</b> was still a boy, the crown kept raising taxes for a war. The judges of the Parlement of Paris, France's highest court, refused them. When a judge was arrested, Paris put up barricades, and later great nobles rose too. These revolts, the <span class="kt">Fronde</span>, collapsed by <span class="num">1653</span>, because the rebels wanted different things.` },
          { p: `The Fronde marked Louis XIV for life. As an adult he ruled the provinces through royal officials. In <span class="num">1682</span> he moved his court to Versailles, where great nobles competed for offices and pensions under his eye. They kept their titles, land and freedom from the main tax, but lost the power to defy the king.` },
          { p: `Russia's path was harsher. The Law Code of <span class="num">1649</span> finished binding peasants to their lords' land as <span class="kt">serfs</span>. Many fled south to the <b>Cossacks</b>, free frontier fighters on the Don River. In <span class="num">1670</span> the Cossack <b>Stepan Razin</b> led a revolt up the Volga River, and peasants joined by the tens of thousands. The tsar's army crushed it, and Razin was executed in <span class="num">1671</span>.` },
          { p: `The tsars also squeezed the <span class="kt">boyars</span>, Russia's great noble families. <b>Peter the Great</b> replaced their council with a Senate he appointed, in <span class="num">1711</span>. His Table of Ranks of <span class="num">1722</span> made a man's place depend on the rank he earned in state service, not on his birth.` },
          { p: `England went the other way. In <span class="num">1688</span> leading Englishmen, most of them nobles, invited the Dutch prince William of Orange to bring an army, and King James II fled. Parliament, the assembly of nobles and landowners, gave the crown to William and Mary and limited it in the Bill of Rights of <span class="num">1689</span>. So old elites lost power in France and Russia, and won it in England.` },
          { note: { kind: 'cb', label: CB, paras: [
            `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa."`,
            `<a href="#chapter-t4-3">Topic 4.3</a>: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`,
            `<a href="#chapter-t4-8">Topic 4.8</a>: the world's productive systems "continued to be heavily centered on agriculture".`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased." Wool and linen in western Europe is one of the College Board's examples.`,
            `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level." The Fronde and the Cossack revolts are among the College Board's examples.`,
            `<a href="#chapter-t4-7">Topic 4.7</a>: the power of existing elites "fluctuated" as they faced "increasingly powerful monarchs and leaders." The Russian boyars and the European nobility are among the College Board's examples.`
          ] } }
        ] }
      ],
      terms: [
        ['Putting-out system', 'Merchants paying country families to spin and weave at home.'],
        ['Fronde', 'Revolts against the French crown, 1648 to 1653.'],
        ['Serf', 'A peasant bound by law to a lord\'s land and not free to leave.']
      ]
    }
  ],

  closing: {
    heading: 'Europe at a Glance',
    navLabel: 'At a glance',
    intro: `The six sides of Europe's story from <span class="num">1450</span> to <span class="num">1750</span>, gathered for review.`,
    argue: {
      move: 'Causation',
      prompt: `Why did Europe's kings and queens, and not only its merchants, pay for ocean voyages and back armed trading companies? Give two causes. Support each one with evidence from this chapter.`
    },
    pairs: [
      { category: 'Political', title: 'Rival crowns built sea empires and fought their own nobles.', body: `Portugal and Spain, then England, France and the Dutch, paid for voyages and built sea empires. At home, the Fronde collapsed, Razin's revolt was crushed, and Louis XIV and Peter the Great curbed their nobles. England's Parliament instead limited the crown in <span class="num">1688</span> and <span class="num">1689</span>.` },
      { category: 'Religious', title: 'Faith pushed Europeans outward and divided the rivals.', body: `Portugal's expansion began with a crusading attack on Ceuta in <span class="num">1415</span>. Spain expelled Jews who would not convert in <span class="num">1492</span>, and Portugal forced baptisms in <span class="num">1497</span>. Missionaries carried Catholic Christianity overseas.` },
      { category: 'Social', title: 'New crops fed more people, families worked harder, and Russian peasants lost their freedom.', body: `American crops, the potato above all, helped Europe's population grow. Country families worked harder under the putting-out system, with women and girls doing much of the spinning. Russia's Law Code of <span class="num">1649</span> bound peasants to the land as serfs.` },
      { category: 'Intellectual', title: 'Navigators built on borrowed learning, and rulers followed one theory of trade.', body: `Pilots used the astrolabe, a Greek idea made precise in the Islamic world, and printed tables of the sun such as Zacuto's. Rulers followed mercantilism, summed up in Thomas Mun's rule: sell more to foreigners than you buy from them.` },
      { category: 'Technological', title: 'Borrowed tools and a discovery about wind made ocean voyages possible.', body: `The compass, the lateen sail and the astrolabe went onto new ships, the caravel and the carrack. The breakthrough was the volta do mar, the route home through the open Atlantic.` },
      { category: 'Economic', title: 'Europeans carried the Atlantic trade but stayed buyers in Asia.', body: `Europeans went to sea to cut out the middlemen, then ran their empires with mercantilist laws and joint-stock companies. In Asia they paid mostly in silver, because they had few goods Asian buyers wanted.` }
    ]
  }
};
