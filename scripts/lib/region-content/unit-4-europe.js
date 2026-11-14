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
 * crops (KC-4.1.V.B, KC-4.1.V.D), intensified cottage labor (KC-4.2.II.A), the Fronde and
 * Razin's Cossack revolt (KC-4.3.III.iii), monarchs against nobles and boyars (KC-4.2.III.B),
 * the expulsion of Jews from Spain and Portugal (KC-4.3.I.B), and religion spreading and
 * clashing with expansion (KC-4.1.VI). The chapter keeps the eBook's Unit 4 correction in
 * view: Europeans dominated the ocean routes and much of the Americas while remaining
 * customers of Asian economies. Deliberately left out: the Reformation itself (Unit 3; one
 * connective sentence only), the Scientific Revolution and Enlightenment (later units), and
 * Europe's wars of religion, none of which the Unit 4 CED requires. Facts are drawn from the
 * Topic 4.1 to 4.7 deep readings and their claim ledgers.
 */

module.exports = {
  topicKey: 'r4-europe',
  slug: 'region-4-europe',
  unit: '4',
  region: 'Europe',
  titleHtml: '<em>Europe</em>',
  deck: `In <span class="num">1450</span> Europe sat at the far edge of a trading world centered on Asia; by <span class="num">1750</span> its ships sailed every ocean and its states claimed most of the Americas and ruled large parts of them. Keep one fact in view: Europeans dominated the ocean routes while remaining customers of Asian economies they could not match in production.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
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
      thesis: `Europe sat at the far end of trade routes run by others. Its rulers wanted to reach the source by sea, using tools drawn mostly from the Classical, Islamic and Asian worlds.`,
      parts: [
        { heading: 'Why Europeans looked to the sea', blocks: [
          { p: `In the 1400s the richest trade in the world crossed the Indian Ocean and the Middle East. Pepper cost little on India's Malabar coast. To reach Europe it crossed the ocean, passed through Red Sea or Persian Gulf ports and Mamluk Egypt or Ottoman lands, and was sold again to <b>Venetian</b> merchants, and every hand took a cut. A kingdom that reached India by sea could skip the middlemen and keep the difference.` },
          { p: `Religion pushed the same way. Portugal's ocean venture began in <span class="num">1415</span> with the capture of <b>Ceuta</b>, a Muslim port in North Africa, in the crusading tradition of the <span class="kt">Reconquista</span>, the long campaign by Christian kingdoms to take Iberia from Muslim rule.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that the Ottomans closed the trade routes after taking Constantinople in <span class="num">1453</span> and forced Europe onto the ocean. Spice prices did not jump, the main spice route ran through Mamluk Egypt until the Ottomans took it in <span class="num">1517</span>, and Portugal's voyages had begun decades earlier. The main economic motive was the middlemen's cost, along with West African gold.` } }
        ] },
        { heading: 'Tools from elsewhere', blocks: [
          { p: `Take the European sailor's kit apart and almost every piece came from somewhere else (<a href="#chapter-t4-1">Topic 4.1</a>). The magnetic compass was first used at sea in China, by about <span class="num">1100</span>; how it reached Europe is still debated. The <span class="kt">lateen sail</span>, a triangular sail that lets a ship work against the wind, was common across the Mediterranean and the seas of the Islamic world. The astrolabe, which measures how high the sun stands above the horizon, was a Greek idea that Islamic astronomers made precise.` },
          { p: `Mapmakers also recovered Ptolemy's <em>Geography</em>, a classical book that mapped the world by coordinates, from the Byzantine world around <span class="num">1400</span>. It carried an error: Ptolemy's Earth was too small, one reason Columbus thought Asia lay close. Europeans built on all of this. The sun tables of the astronomer <b>Abraham Zacuto</b>, printed in Portugal in <span class="num">1496</span>, came from a line of Muslim and Jewish astronomers in Toledo, and printing let every pilot carry the same copy. Shipbuilders designed the small, shallow <span class="kt">caravel</span> to explore unknown coasts and the large, high-sided <span class="kt">carrack</span> to carry cargo, food, water and cannon.` }
        ] },
        { heading: 'The wind was the breakthrough', blocks: [
          { p: `The last piece was knowledge of the ocean itself. Off West Africa the wind blows from the northeast, carrying a ship south easily and blocking it on the way home. Over decades the Portuguese learned the answer, what historians call the <span class="kt">volta do mar</span>, or "turn of the sea": a returning ship sailed far out into the Atlantic until it caught westerly winds that carried it back to Portugal. The College Board lists this "improved understanding of regional wind and currents patterns" beside new tools and ship designs, "all of which made transoceanic travel and trade possible." Columbus later bet that the same pattern held across the whole ocean.` }
        ] }
      ],
      terms: [
        ['Lateen sail', 'A triangular sail, common across Mediterranean and Islamic seas, that lets a ship sail against the wind.'],
        ['Caravel', 'A small, shallow Portuguese ship built to explore unknown coasts.'],
        ['Volta do mar', 'The Portuguese return route: sailing far out into the Atlantic to catch the westerlies home.']
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
      thesis: `Ocean exploration was a state project. Portugal paid for decades of patient voyages, Spain bet on one daring crossing and won an empire in the Americas, and the northern kingdoms, shut out of both routes, tried the Arctic.`,
      parts: [
        { heading: 'Portugal, step by step', blocks: [
          { p: `A voyage to find out whether a route existed might bring back nothing, so rulers paid for exploring or licensed captains in return for a share (<a href="#chapter-t4-2">Topic 4.2</a>). Portugal's <b>Prince Henry</b> financed voyages down the African coast for decades. In the 1440s Portuguese crews raided the Saharan coast for captives and sold them in Portugal, the beginning of the Atlantic slave trade. From the late 1440s they bought gold, carried across the desert by caravan, and captives at a post on Arguin, an island off the Saharan coast, and in the 1450s they were buying captives on the Senegal coast as well. In <span class="num">1488</span> <b>Bartolomeu Dias</b> rounded Africa's southern tip, and in <span class="num">1498</span> <b>Vasco da Gama</b> reached Calicut in India (<a href="#chapter-r4-south-southeast-asia">South and Southeast Asia</a>).` },
          { p: `At Calicut the cloth and beads da Gama carried were worthless, yet the pepper he brought home was worth far more than the voyage cost. Europe had little that Asia wanted. But the profit on Asian goods was so large that this did not stop the trade.` },
          { p: `Unable to compete on goods, Portugal competed with guns and built a <span class="kt">trading-post empire</span> (<a href="#chapter-t4-4">Topic 4.4</a>): Elmina on the Gold Coast in <span class="num">1482</span>, Goa in <span class="num">1510</span>, Malacca in <span class="num">1511</span>, Hormuz in <span class="num">1515</span>, fortified ports with almost no land behind them. They profited by buying at the source and by selling the <span class="kt">cartaz</span>, a pass merchant ships had to buy. The strongest Asian states set their own terms: Ming officials let the Portuguese settle at Macau only under Chinese authority, and Tokugawa Japan later cut European trade to one Dutch post (<a href="#chapter-r4-east-asia">East Asia</a>).` }
        ] },
        { heading: 'Spain\'s year, 1492', blocks: [
          { p: `In January <span class="num">1492</span> <b>Ferdinand and Isabella</b> took Granada, the last Muslim kingdom in Spain. In March they ordered every Jew who would not become Christian to leave their kingdoms. Tens of thousands left, and many others converted and stayed. In <span class="num">1497</span> Portugal, pressed by Spain, had most of its Jews baptized by force. These are states that "suppressed diversity," in the College Board's words (<a href="#chapter-t4-7">Topic 4.7</a>). The Ottoman sultan Bayezid II took many exiles in, because merchants, doctors and craftsmen made his empire richer (<a href="#chapter-r4-middle-east">The Middle East</a>).` },
          { p: `That spring the same monarchs backed <b>Christopher Columbus</b>, who believed Asia lay a few thousand miles west. He reached the Caribbean in October. In <span class="num">1494</span> Spain and Portugal divided the newly reached lands in the <span class="kt">Treaty of Tordesillas</span>, and from <span class="num">1519</span> to <span class="num">1522</span> a Spanish expedition begun by Ferdinand Magellan and finished by Juan Sebastián Elcano sailed around the world. In the College Board's words, Spain's voyages across the Atlantic and Pacific "dramatically increased European interest in transoceanic travel and trade."` }
        ] },
        { heading: 'The latecomers go north', blocks: [
          { p: `England, France and the Dutch ignored a treaty that divided the world between Spain and Portugal. At first, rather than fight Portugal for the route around Africa, they sought a <span class="kt">Northwest Passage</span> over the top of the world to Asia. <b>John Cabot</b> sailed for England in <span class="num">1497</span> and reached North America; <b>Jacques Cartier</b> explored the St. Lawrence River for France in the 1530s; in <span class="num">1609</span> <b>Henry Hudson</b>, sailing for the Dutch, went up the river now named for him. North America and Arctic ice blocked every northern passage. What they found instead paid well: cod off Newfoundland, and beaver furs traded by Indigenous nations. From the 1590s English and Dutch fleets also took Portugal's own route around Africa, and soon fought Portugal for it.` }
        ] }
      ],
      terms: [
        ['Trading-post empire', 'An empire of fortified ports, built to control and tax trade rather than to rule land.'],
        ['Cartaz', 'The pass Portugal sold to Indian Ocean merchant ships, requiring them to pay duties at a Portuguese port.'],
        ['Northwest Passage', 'The hoped-for Arctic sea route over North America to Asia, blocked by ice.']
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
      thesis: `By <span class="num">1600</span> the race was crowded. Rulers treated trade as a contest one kingdom won only when another lost, built companies that could fight, and paid for Asia's goods with American silver.`,
      parts: [
        { heading: 'Rivals in politics, faith and money', blocks: [
          { p: `The College Board says the new maritime empires, "the Portuguese, Spanish, Dutch, French, and British," were "driven largely by political, religious, and economic rivalries." The Reformation of the early 1500s, Unit 3's story, had split western Christianity, so Protestant England and the Dutch fought Catholic Spain over faith as well as wealth. The <b>Dutch Republic</b> fought Spain for its independence from <span class="num">1568</span>, then took Portugal's posts at Elmina in <span class="num">1637</span> and Malacca in <span class="num">1641</span>. England and France planted colonies in North America and the Caribbean.` },
          { p: `Faith also traveled outward (<a href="#chapter-t4-5">Topic 4.5</a>). Catholic missionaries spread Christianity through the Americas and the Philippines, Kongo's own kings adopted it, and converts often blended it with older beliefs into new, syncretic practices (<a href="#chapter-r4-americas">The Americas</a>). The Jesuit Matteo Ricci lived in Beijing from <span class="num">1601</span>. Expansion brought religious conflict too: Japan's shoguns banned Christianity in <span class="num">1614</span>.` }
        ] },
        { heading: 'Mercantilism and the company that could fight', blocks: [
          { p: `Rulers shared ideas now called <span class="kt">mercantilism</span>: a kingdom's strength is its gold and silver, and one kingdom's gain in trade is another's loss. So sell more than you buy, tax foreign goods, and keep your colonies' trade for yourself. The London merchant <b>Thomas Mun</b> wrote that England "must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value," strangers meaning foreigners. England's Navigation Act of <span class="num">1651</span> let goods from Asia, Africa and the Americas into England only in English ships. It was aimed at Dutch shippers and was one cause of the first of three <span class="kt">Anglo-Dutch Wars</span>.` },
          { p: `To carry the ideas out, rulers chartered <span class="kt">joint-stock companies</span>, which sold shares to many investors who split the profits and losses of risky voyages. Elizabeth I chartered the English East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch chartered the <span class="kt">VOC</span>, the Dutch East India Company, with the power to build forts, keep soldiers and make war. Dutch yards also built the fluyt, a cheap freighter with a small crew that cut shipping costs, mostly in Europe's own trades.` },
          { p: `A contest over trade can become a war. The College Board's sentence is blunt: "Economic disputes led to rivalries and conflict between states." In <span class="num">1623</span> VOC officials on the island of Ambon executed ten English company men in the struggle for the spice islands, and the first three Anglo-Dutch Wars, fought at sea between <span class="num">1652</span> and <span class="num">1674</span>, were largely over trade and shipping.` }
        ] },
        { heading: 'Carriers in the Atlantic, customers in Asia', blocks: [
          { p: `In the Atlantic, European ships carried the trade, but on Africa's coasts African rulers and merchants decided who and what was sold. The Atlantic system moved "goods, wealth, and labor, including enslaved persons": plantation sugar and tobacco flowed to Europe, European ships carried guns and cloth to Africa and captives to the Americas, and silver crossed to Seville (<a href="#chapter-r4-sub-saharan-africa">Sub-Saharan Africa</a>).` },
          { p: `In Asia, Europeans were buyers. Their companies paid for pepper, cotton cloth, silk and porcelain largely in silver from Potosí and Zacatecas in Spanish America, because Asian buyers wanted few European goods, and much of that silver ended in China. European ships often earned money carrying goods between Asian ports, inside networks Asian merchants kept running.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Europe controlled the world economy by <span class="num">1750</span>. Indian cotton was so popular that English laws of <span class="num">1700</span> and <span class="num">1721</span> restricted it to protect England's own weavers: a shield, not a sign of mastery.` } }
        ] }
      ],
      terms: [
        ['Mercantilism', 'The belief that a state grows strong by gathering gold and silver and selling more than it buys.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602, able to build forts and wage war in Asia.'],
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
      thesis: `The ocean trade changed Europe at home. New crops fed more people, households worked harder for distant buyers, and monarchs pulled power away from nobles and peasants, who pushed back.`,
      parts: [
        { heading: 'New food, more work', blocks: [
          { p: `Ships returning across the Atlantic carried plants Europe had never seen (<a href="#chapter-t4-3">Topic 4.3</a>). The <span class="kt">potato</span>, which yields more calories per acre than wheat or rye on cool, damp ground, spread across northern Europe, most widely in the 1700s. American crops let Afro-Eurasian populations benefit "nutritionally," as the College Board says. Economists Nathan Nunn and Nancy Qian estimate that the potato explains roughly a quarter of Old World population growth between <span class="num">1700</span> and <span class="num">1900</span>, most of it after this unit ends. Meanwhile sugar and tobacco, grown with forced labor on American plantations, were shipped mostly to Europe.` },
          { p: `Even with all this new trade, most Europeans still lived by farming, as most people everywhere did. The College Board's summary is that the world's productive systems "continued to be heavily centered on agriculture," even as farm labor, manufacturing and family roles changed.` },
          { p: `More trade meant more demand for cloth, and peasant and artisan labor "continued and intensified." Under the <span class="kt">putting-out system</span>, merchants delivered raw wool or flax to country families, who spun and wove woolen and linen cloth at home and were paid by the piece. Much of the spinning was done by women and girls. The work was old; what was new was how much of it there was, and how far away its buyers were.` }
        ] },
        { heading: 'Kings against nobles and peasants', blocks: [
          { p: `Centralizing rulers met resistance (<a href="#chapter-t4-6">Topic 4.6</a>). In France in <span class="num">1648</span>, with the crown at war and <b>Louis XIV</b> only nine, his mother's chief minister, Cardinal Mazarin, kept raising taxes. The judges of the Parlement of Paris, the highest court, refused them; when the government arrested a judge, Paris threw up barricades, and great nobles later rose too. These revolts, the <span class="kt">Fronde</span>, collapsed by <span class="num">1653</span> because the rebels wanted different things.` },
          { p: `The Fronde marked Louis XIV for life. As an adult he kept power in his own hands: he ran the provinces through royal officials, and in <span class="num">1682</span> moved his court to Versailles, where great nobles competed for offices and pensions under his eye instead of raising armies at home. They kept their titles, land and freedom from the main tax, but lost the power to defy the king.` },
          { p: `Russia's path was harsher. The Law Code of <span class="num">1649</span> completed the binding of peasants to their lords' land as <span class="kt">serfs</span>. Many fled to the <b>Cossacks</b>, free frontier fighters on the Don River, and in <span class="num">1670</span> the Cossack <b>Stepan Razin</b> led a revolt up the Volga that drew in peasants by the tens of thousands. The tsar's army crushed it, and Razin was executed in <span class="num">1671</span>. The tsars squeezed the <span class="kt">boyars</span>, the great noble families, too: <b>Peter the Great</b> replaced their council with a Senate in <span class="num">1711</span>, and his Table of Ranks of <span class="num">1722</span> made state service, not birth, decide a man's place.` },
          { p: `England went the other way. In <span class="num">1688</span> English nobles invited the Dutch prince William of Orange to invade; King James II fled, and Parliament, a body of nobles and gentry (landowners below the nobility), gave the crown to William and Mary and limited it in a Bill of Rights. The College Board's word for old elites is that their power "fluctuated": they lost ground in France and Russia, and won it in England.` }
        ] }
      ],
      terms: [
        ['Putting-out system', 'Merchants supplying raw wool or flax to rural families who spun and wove at home for pay.'],
        ['Fronde', 'Revolts in France, 1648 to 1653, by judges, Parisians and great nobles against the crown.'],
        ['Serf', 'A peasant bound by law to a lord\'s land and not free to leave.']
      ]
    }
  ],

  closing: {
    heading: 'Europe at a Glance',
    navLabel: 'At a glance',
    intro: `The six sides of Europe's story from <span class="num">1450</span> to <span class="num">1750</span>, gathered for review.`,
    pairs: [
      { category: 'Political', title: 'Crowns built sea empires and tamed nobles', body: `Rival crowns, first Portugal and Spain, then England, France and the Dutch, sponsored voyages and built maritime empires. At home, the Fronde collapsed, Razin's revolt was crushed, and Louis XIV and Peter the Great curbed their nobles. In England, Parliament limited the crown instead.` },
      { category: 'Religious', title: 'Faith pushed outward and divided the rivals', body: `Expansion began as a crusade at Ceuta in <span class="num">1415</span>. Spain expelled Jews who would not convert in <span class="num">1492</span>, and Portugal forced baptisms in <span class="num">1497</span>. Missionaries carried Catholic Christianity overseas, and Protestant England and the Dutch fought Catholic Spain for trade and faith at once.` },
      { category: 'Social', title: 'More food, more work, tighter bonds', body: `American crops, including the potato, helped Europe's population grow. Rural families, many of the spinners women and girls, worked harder under the putting-out system. The Law Code of <span class="num">1649</span> completed the binding of Russian peasants as serfs, and nobles in France and Russia lost independence to kings but kept most of their privileges.` },
      { category: 'Intellectual', title: 'Borrowed learning and a theory of trade', body: `Navigation rested on Greek and Islamic astronomy and Zacuto's tables, spread by printing, and mapmakers recovered Ptolemy's coordinate mapping. The other big idea was mercantilism, Thomas Mun's rule of selling more than you buy. This unit does not cover Europe's wider changes in science.` },
      { category: 'Technological', title: 'A borrowed kit and a discovery about wind', body: `The compass, first used at sea in China, the lateen sail and the astrolabe went into new ships: the caravel to explore, the carrack to carry cargo and cannon, and later the Dutch fluyt. The breakthrough was the volta do mar, the route home by way of the open Atlantic.` },
      { category: 'Economic', title: 'Masters of the routes, customers of Asia', body: `Europeans went to sea to cut out the middlemen, then ran their empires with mercantilist laws and joint-stock companies, and fought each other over trade. The Atlantic system brought sugar, tobacco and silver to Europe; in Asia they paid largely in silver, because they could not match Asian production.` }
    ]
  }
};
