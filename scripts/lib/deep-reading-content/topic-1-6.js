'use strict';

/**
 * Topic 1.6, Developments in Europe: the deep reading.
 *
 * Why this exists. The success criteria ask for evidence about monarchies,
 * nobles, the Church and decentralized power; for the roles of feudalism,
 * manorialism, towns, guilds and trade; and for a comparison between Europe and
 * any other Unit 1 region. That last one is where students lose points, because
 * the comparison everyone reaches for is "Europe was backward compared with
 * Song China," which is a ranking rather than an analysis and earns nothing.
 *
 * The chapter is therefore organized around a single question a comparison can
 * be built from: why did Europe, alone among the regions in this unit, fail to
 * produce a large centralized state, and what grew in the space where one was
 * not? The answers are the Church, the chartered town, and the assembly a king
 * had to summon because he could not tax without consent. Each of those is a
 * mechanism, and each is directly comparable with something in another topic.
 *
 * Three corrections carried on purpose:
 *
 *   1. Magna Carta was a settlement between a king and his barons, not a
 *      declaration of rights for everyone, and writing otherwise is the single
 *      most common error in the topic.
 *   2. Serfdom is not slavery. A serf was bound to land, held customary rights
 *      in it, and could not be sold away from it, which is why the labor
 *      shortage after the plague could renegotiate his position at all.
 *   3. "Feudalism" is a term historians argue about seriously. The course
 *      expects it; a student who can use it and say why it is contested is
 *      doing better history than one who cannot.
 *
 * The Fourth Lateran Council's badge requirement and the plague-era massacres
 * are included because the exclusion evidence in this topic is specific and
 * datable, and a vague sentence about intolerance is worth nothing next to it.
 */

module.exports = {
  topicKey: 't1-6',
  slug: 'topic-1-6-europe',
  lessonFile: 'lesson-1-6-europe.html',

  titleHtml: 'The Kingdom That Never <em>Assembled</em>',
  deck: `Every other region in this unit produced at least one large state. Europe produced hundreds of small ones and an institution that outranked all of them without ruling any. This chapter explains why the centralized empire never came back, what filled the gap, and how a labor shortage caused by a disease did more to change European society than any king managed in three centuries.`,

  howTo: {
    heading: 'How to Use This',
    intro: `The sections build one argument. Fragmentation is the starting condition, the Church and the town are what grew in the space it left, the monarchy is what slowly reassembled some of it and had to bargain to do so, and the fourteenth-century crisis is the shock that broke the manor. Read them in order and the comparison writes itself.`,
    steps: [
      `<b>01 Fragmentation:</b> feudalism and manorialism, and what each was actually for.`,
      `<b>02 The Church:</b> the institution that did the jobs a state was not there to do.`,
      `<b>03 The monarchies:</b> why needing money produced parliaments.`,
      `<b>04 Towns and trade:</b> charters, guilds, banking, and a merchant league with a navy.`,
      `<b>05 The fourteenth century:</b> famine, plague, revolt, and the end of serfdom in the west.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'fragmentation',
      num: '01',
      accent: 'gold',
      name: 'Fragmentation, and the Systems That Managed It',
      navLabel: 'Fragmentation',
      dates: 'c. 900 to 1300 &nbsp;·&nbsp; Lordship, land and labor',
      thesis: `European rulers had land and very little cash revenue. Most of the distinctive features of the society follow from that shortage: if you cannot pay a soldier, you must give him an estate, and a soldier with an estate is no longer entirely yours.`,
      parts: [
        {
          heading: 'The problem: a state with no cash',
          blocks: [
            { p: `After the collapse of the Carolingian empire in the ninth century and generations of raiding by Vikings, Magyars and Muslim fleets, western Europe had almost no functioning tax system, very little coined money in circulation, and no salaried administration. Defense had to be local because nothing else could respond fast enough, and defense meant armored cavalry, which was ruinously expensive: a warhorse, armor, weapons and the years of training to use them cost roughly what a village produced.` },
            { p: `A ruler who cannot pay that bill in coin pays it in land. He grants an estate to a warrior who swears loyalty and owes military service in return, and the warrior lives off the peasants who work that land. This arrangement of lordship, personal oaths and conditional landholding is what the course calls <span class="kt">feudalism</span>. Underneath it, the economic system organizing the land itself is <span class="kt">manorialism</span>: a largely agrarian estate where peasants worked the lord's fields as well as their own and owed dues, labor and obedience in exchange for protection and the right to work land they held by custom.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two things to get right here. First, "feudalism" is a word invented long after the period, and serious historians argue that it flattens arrangements that varied enormously from region to region and century to century; the course expects the term, so use it, and a sentence acknowledging that lordship worked differently in England, Saxony and Catalonia is a mark of a strong answer rather than a hedge. Second, and non-negotiable: a serf is not a slave. A serf was bound to the land, owed labor and dues, and needed permission to leave or marry outside the manor, but he could not be sold away from the land, he held his strips by hereditary custom that the lord's own court enforced, and he kept what he grew after his obligations. That is why a labor shortage could improve his position, which is exactly what happened in section 05, and it is why the distinction is worth a sentence.`
            } }
          ]
        },
        {
          heading: 'What the manor actually produced',
          blocks: [
            { p: `Manorial agriculture was not static, and this is where students undersell Europe. Between roughly <span class="num">1000</span> and <span class="num">1300</span> the region put together a package of improvements: the heavy wheeled plow with a mold board, which could turn the wet clay soils of northern Europe that a light Mediterranean plow merely scratched; the horse collar, which let a horse pull from the shoulders instead of the throat and made the faster animal usable for plowing; iron horseshoes; and the three-field rotation, in which a third of the land grew a winter crop, a third a spring crop of legumes that restored nitrogen, and a third lay fallow, instead of half the land lying idle each year.` },
            { p: `Add watermills and windmills for grinding, and the result was a substantial rise in output and a European population that roughly doubled across those three centuries. That growth is what filled the towns in section 04 and what pushed cultivation onto marginal land, which is what made the famine in section 05 so severe. Agricultural change is the quiet engine under this whole topic.` }
          ]
        }
      ],
      useThis: {
        tool: `Land granted for service. <em>The mechanism is that a ruler with no cash revenue converts the only asset he has, land, into military capacity by granting estates to warriors who swear loyalty, which buys him an army he could never have paid for and permanently creates subordinates who hold their own land, courts and followers.</em>`,
        limit: `That is also the limit. Every grant made the grantor weaker in the long run, which is why the European monarchy of 1200 could not command what a Song emperor could and why the reassembly in section 03 took centuries.`,
        comparison: `Against <em>Song China</em>: identical problem, opposite solution. The Song paid examined officials in cash and rotated them so none could entrench, while European kings paid in land and produced hereditary rivals. The difference is that the Song had an intact tax system and Europe did not.`
      },
      terms: [
        ['Feudalism', 'The arrangement of personal oaths, military service and conditional landholding among lords and vassals; a term the course requires and historians debate.'],
        ['Manorialism', 'The economic system of the manorial estate, in which peasants worked the lord&rsquo;s land as well as their own and owed dues in exchange for protection.'],
        ['Serf', 'A peasant bound to the land with hereditary customary rights in it, who under most local customs could not be sold away from it and kept what he produced beyond his obligations.'],
        ['Three-field system', 'Rotating winter crop, spring legume and fallow, which left only a third of the land idle each year instead of half and restored soil nitrogen.'],
        ['Heavy plow', 'The wheeled, mold-board plow that could turn the heavy wet soils of northern Europe, opening land a Mediterranean scratch plow could not farm.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'church',
      num: '02',
      accent: 'rust',
      name: 'The Church as the State Europe Did Not Have',
      navLabel: 'The Church',
      dates: 'c. 1050 to 1450 &nbsp;·&nbsp; Reform to the Great Schism',
      thesis: `The Latin Church collected a tithe across western Christendom, ran its own courts under its own law, was the largest single landholder in Europe, trained nearly everyone who could read and write the Latin that law and administration ran on, and could order a king's subjects to stop obeying him. Any comparison of European state power that leaves it out is measuring the wrong institution.`,
      parts: [
        {
          heading: 'What it collected and what it ran',
          blocks: [
            { p: `The <span class="kt">tithe</span> claimed a tenth of production from the faithful, which made the Church the only institution in Europe collecting a universal tax. <span class="kt">Canon law</span>, its own developed legal code, governed marriage, legitimacy, inheritance of moveable goods, oaths, wills, heresy and the conduct of clergy, and it ran its own courts to apply it, in which clergy were tried instead of in the king's courts. Monasteries held vast estates, cleared forest, drained marsh, ran hospitals and copied books.` },
            { p: `It also supplied the personnel. Latin was the language of law, charter and administration, and the Church trained almost everyone who could use it, which is why royal chancelleries were staffed by clerics and why the word for a clergyman and the word for an office worker have the same root. A king who wanted to run an administration hired the Church's graduates, because for a long time there were no others. Say <em>for a long time</em> rather than always, because the grip loosened inside this period: Italian towns were producing professional notaries from the twelfth century, merchants kept their own accounts, and lay literacy in the vernaculars spread through courts, towns and commerce, so a fourteenth-century ruler had somewhere else to look for a clerk. The Church's hold on the written word was real, it was the largest single fact about European administration in 1200, and it was already eroding by 1450.` },
            { p: `Universities are the institutional legacy. Bologna, Paris, Oxford and their successors emerged as self-governing corporations of masters and students out of several kinds of existing teaching community, cathedral schools above all at Paris, the law schools at Bologna, and at Oxford a gathering body of masters, with a curriculum of law, medicine, theology and Aristotelian philosophy, much of it reaching Europe through Latin translations from Arabic. That is the direct link between this topic and Topic 1.2, and it is worth making explicitly: a major reason a European university had Aristotle to argue about is that Muslim and Jewish scholars in Spain and Sicily had preserved, extended and translated him, alongside texts that reached Latin Europe directly from Greek.` }
          ]
        },
        {
          heading: 'The weapon a king could not answer',
          blocks: [
            { p: `The Church's decisive instrument was spiritual sanction. <span class="kt">Excommunication</span> cut a person off from the sacraments; interdict suspended them across an entire kingdom, closing churches, halting marriages and denying burial in consecrated ground to everyone. Applied to a monarch, a pope could go further and declare his subjects released from their oaths of loyalty, which in a society built on oaths was a direct invitation to rebellion. That was a claim popes asserted in the sharpest confrontations rather than an automatic consequence of every royal excommunication, and the distinction matters: it was a political weapon that had to be used, not a switch that flipped.` },
            { p: `The Investiture Controversy of the late eleventh and early twelfth centuries was the test case: a struggle over whether the emperor or the pope appointed bishops, which is really a struggle over whether a ruler controls the enormous landholdings and personnel a bishopric commands. Under Innocent III, around <span class="num">1200</span>, the papacy reached its height, forcing kings of England and France to yield on major disputes. This is not merely religious history, it is the political history of Europe: no other region in this unit contains an institution that could do this to its rulers.` },
            { p: `The Church's own crises are the other half. The papacy sat at Avignon in France from <span class="num">1309</span> to <span class="num">1377</span>, under evident French influence, and the Great Schism from <span class="num">1378</span> produced rival popes excommunicating each other for four decades. Both damaged the institution's claim to universal authority, and both helped produce the reform movements, in England under Wycliffe and in Bohemia under Hus, that anticipate arguments Europe would have in earnest a century later.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Fourth Lateran Council legislated in writing',
              html: `The canons of the Fourth Lateran Council of <span class="num">1215</span> survive, and they show a body legislating for all of Latin Christendom in a way no secular ruler could. It required every adult to confess and receive communion at least once a year, defined the doctrine of the eucharist, regulated clerical conduct, and required Jews and Muslims to wear distinguishing dress. Those decisions were enforced from Portugal to Poland. Reading the actual canons is the fastest way to grasp both halves of this section: the reach of the institution, and what it used that reach for.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Spiritual sanction backed by an independent revenue. <em>The mechanism is that a universal tithe, a separate legal system, vast landholdings and a monopoly on literacy made the Church financially and administratively independent of every ruler, so that excommunication and interdict were threats no king could answer by cutting its funding or replacing its staff.</em>`,
        limit: `Independence cuts both ways. The Avignon papacy and the Great Schism showed the institution could be captured by a monarchy and could split against itself, and both damaged the universal authority the sanctions depended on.`,
        comparison: `Against <em>Neo-Confucianism</em> in Topic 1.1: both supplied the moral order that made hierarchy feel natural, but Confucian scholars were the state's own officials while the Church was a rival corporation with its own law and income. Against the <em>caliph</em> in Topic 1.2: both conferred legitimacy on rulers, and the caliph ended up a possession of the sultans while the papacy outlasted the emperors who fought it.`
      },
      terms: [
        ['Tithe', 'The tenth of production owed to the Church, the only universal tax collected across western Europe.'],
        ['Canon law', 'The Church&rsquo;s own legal system, governing marriage, wills, oaths and heresy, and applied in its own courts.'],
        ['Excommunication', 'Exclusion from the sacraments, which when applied to a ruler released his subjects from their oaths of loyalty.'],
        ['Interdict', 'The suspension of sacraments across an entire territory, punishing a ruler by depriving his whole population.'],
        ['Investiture Controversy', 'The struggle over whether pope or emperor appointed bishops, which was a struggle over who controlled the land and personnel a bishopric commanded.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'monarchies',
      num: '03',
      accent: 'iron',
      name: 'The Monarchies, and the Price of Money',
      navLabel: 'The monarchies',
      dates: '1200 to 1450 &nbsp;·&nbsp; Magna Carta to the Hundred Years War',
      thesis: `European kings spent this period slowly reassembling authority, and every step required money they could only get by asking. What they gave away in exchange for that money is the origin of representative assemblies.`,
      parts: [
        {
          heading: 'How a king rebuilt power',
          blocks: [
            { p: `The tools were unglamorous and cumulative. Royal courts that offered better, faster justice than a lord's court, so litigants chose the king voluntarily and the king's law spread by demand rather than decree. Salaried officials, sheriffs and later professional judges. Written records, so obligations could be proved decades later. Standing revenues from customs duties. And, eventually, artillery, which made the private castle indefensible and belongs to the end of this period rather than its middle.` },
            { p: `England, small and conquered whole in <span class="num">1066</span>, went furthest fastest; France assembled itself outward from Paris across two centuries; the Iberian kingdoms consolidated through the long campaigns against Muslim states in the south; and the Holy Roman Empire, elective and enormous, never centralized at all and remained a patchwork of principalities and free cities. That variation is useful: it shows the outcome was contingent rather than inevitable.` }
          ]
        },
        {
          heading: 'The bargain that produced parliaments',
          blocks: [
            { p: `Here is the mechanism, and it is the most transferable idea in this topic. War was becoming vastly more expensive, and a king's ordinary revenues from his own lands could not pay for it. Extraordinary taxation required consent, because a king without a standing bureaucracy could not assess and collect a new tax against the will of the people who would actually have to collect it. So he summoned the men who could deliver it, the great nobles, the bishops, and increasingly the knights of the shires and the burgesses of the towns, and asked. They granted, and in exchange they redressed grievances, confirmed privileges and, over time, established that taxation required their agreement.` },
            { p: `<span class="kt">Magna Carta</span> in <span class="num">1215</span> is the emblem: barons in arms forced King John to accept written limits on arbitrary taxation, arbitrary imprisonment and the abuse of feudal dues. By <span class="num">1295</span> the English <span class="kt">Parliament</span> summoned by Edward I included representatives of shires and towns alongside lords and clergy. In France the Estates General was first convened in <span class="num">1302</span>, and the Iberian kingdoms had convened cortes with town representation even earlier.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Magna Carta was not a bill of rights and did not establish democracy. It was a peace treaty between a defeated king and the barons who had rebelled against him, most of its clauses concern the specific feudal grievances of that class, and John repudiated it within months. What makes it historically important is the principle it put in writing, that the king is under the law and cannot tax at will, and the fact that later generations kept reissuing and reinterpreting it. Write it as "a settlement with the nobility whose principle was later expanded" and you are both accurate and more interesting than the version that calls it the birth of freedom.`
            } },
            { p: `The comparison this sets up is the one worth carrying out of the chapter. A Song emperor did not need to bargain with anyone to raise revenue, because he had an examined bureaucracy that assessed and collected taxes on his authority. A European king had to summon the men who would collect it and give them something in return. Representative institutions are not evidence that Europeans loved liberty more than other people; they are the residue of a state too weak to tax without help.` }
          ]
        }
      ],
      useThis: {
        tool: `Consent-based taxation. <em>The mechanism is that a king with no professional revenue service must ask the nobles, clergy and towns who can actually collect a tax to grant it, which gives them leverage they use to extract confirmations of privilege and, over time, the settled principle that taxation requires their consent.</em>`,
        limit: `Those assemblies represented landholders, clergy and townsmen, which is a small minority. Peasants had no voice in any of them, as the risings of 1358 and 1381 in section 05 demonstrate.`,
        comparison: `Against <em>Song China</em>: bureaucratic capacity removes the need to bargain, and Europe's parliaments exist because that capacity did not. Against the <em>Delhi Sultanate</em>: both paid for armies with grants of land revenue, and both spent their history trying to keep those grants from becoming hereditary.`
      },
      terms: [
        ['Magna Carta', 'The 1215 settlement forced on King John by rebel barons, limiting arbitrary taxation and imprisonment and asserting that the king is under the law.'],
        ['Parliament', 'The English assembly of lords, clergy, shire knights and town burgesses, which by 1295 was the body whose consent was needed for extraordinary taxation.'],
        ['Estates General', 'The French assembly of the three estates, first convened in 1302, summoned when the crown needed money or support.'],
        ['Common law', 'The body of law developed in the royal courts of England from decided cases, which spread because litigants preferred it to local lords&rsquo; justice.'],
        ['Reconquista', 'The long campaigns by which the Christian kingdoms of Iberia took territory from Muslim states, and which shaped their monarchies and their military nobility.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'towns',
      num: '04',
      accent: 'oxide',
      name: 'Towns, Guilds, and the Commercial Revolution',
      navLabel: 'Towns and trade',
      dates: 'c. 1100 to 1450 &nbsp;·&nbsp; Charters, fairs, banks and the Hanse',
      thesis: `The town is the part of European society that fits nowhere in the manorial order, and that is precisely what makes it powerful: a place where a lord's authority stopped and where money, not land, was the measure of a man.`,
      parts: [
        {
          heading: 'The charter, and why lords sold them',
          blocks: [
            { p: `A town acquired a <span class="kt">charter</span> from a king or lord, often by purchase, granting rights that a manor did not have: to hold a market, to run its own court, to elect its own officers, to tax itself, and to grant freedom to a serf who lived within its walls unclaimed for a year and a day. A German saying held that town air makes you free, and it was a legal fact rather than a slogan.` },
            { p: `Why would a lord sell away his authority? Because a chartered town paid, in cash, annually and reliably, and cash was exactly what a landed noble could not otherwise obtain. The same shortage that produced feudalism produced the towns that would eventually dissolve it, which is the kind of connection an essay can be built on.` },
            { p: `Inside the walls, <span class="kt">guilds</span> organized each craft and trade. A guild set quality standards, fixed prices and wages, restricted who could practice the craft, trained apprentices, and supported members' widows and orphans. Its ladder ran from apprentice to journeyman to master, and by the fifteenth century mastership was increasingly hard to reach for anyone not already related to a master. Guilds were, in other words, both a genuine welfare and training institution and a cartel, and the honest answer says both.` }
          ]
        },
        {
          heading: 'Long-distance trade and the instruments it required',
          blocks: [
            { p: `Three commercial systems matter. The Italian maritime republics, Venice and Genoa above all, ran the Mediterranean trade in eastern spices, silk and alum, planted colonies and trading posts around the Black Sea and the Levant, and turned the Fourth Crusade of <span class="num">1204</span> into the sack of Constantinople and the seizure of Byzantine trade privileges. The <span class="kt">Hanseatic League</span>, a confederation of northern German and Baltic towns led by Lubeck, monopolized the northern trade in fish, grain, timber, furs and wool, maintained fortified trading houses in foreign cities, and was strong enough to fight and win a war against the king of Denmark. And the fairs of Champagne linked the two, until sea routes between Italy and Flanders made the overland meeting point unnecessary.` },
            { p: `Trade at that distance required financial technique, and the techniques are the achievement. The <span class="kt">bill of exchange</span> let a merchant pay money in Florence and have his agent collect it in Bruges in another currency, which moved value without moving coin and, not incidentally, hid interest inside the exchange rate at a time when the Church prohibited lending at interest. Double-entry bookkeeping made a large firm auditable. Partnership contracts spread the risk of a voyage across several investors. Banking families in Florence and elsewhere lent to kings, and discovered the recurring hazard of that business, which is that a sovereign who cannot pay can simply decline to.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: merchants kept everything',
              html: `The archive of one Tuscan merchant, Francesco Datini, who died in <span class="num">1410</span>, preserves roughly one hundred and fifty thousand letters along with account books, insurance policies, bills of exchange and contracts. It survives because he left his estate to a charity and the papers stayed in the building. From it, historians can reconstruct prices, shipping times, exchange rates, credit terms and the daily worries of a fourteenth-century businessman in extraordinary detail. When a source base like that exists for European commerce and nothing comparable survives for, say, the Wangara traders of the Sahel, remember that the difference is in what was preserved, not in what was happening.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The chartered town. <em>The mechanism is that a lord short of cash sells legal autonomy for an annual payment, which creates a jurisdiction outside the manorial order where a runaway serf becomes free, where wealth is measured in money rather than land, and where guilds and merchants accumulate the capital that will eventually outweigh the estates that funded them.</em>`,
        limit: `Guild mastership narrowed toward the families that already held it, and towns were governed by their wealthiest merchants, so urban freedom meant freedom from a lord rather than equality within the walls.`,
        comparison: `Against <em>Song China</em>: both had large commercial economies and sophisticated credit, but Song cities were administrative centers under imperial officials while European towns bought legal independence from their rulers. Political autonomy, not commerce, is the European peculiarity.`
      },
      terms: [
        ['Charter', 'A grant of urban self-government, markets and courts, bought from a king or lord, which made a town a jurisdiction outside the manorial order.'],
        ['Guild', 'An association controlling a craft or trade: standards, prices, training and entry, functioning as both a welfare institution and a cartel.'],
        ['Hanseatic League', 'The confederation of northern German and Baltic trading towns that dominated the northern seas and could wage war on a kingdom.'],
        ['Bill of exchange', 'A written order allowing money paid in one city to be collected in another and another currency, which moved value without moving coin.'],
        ['Usury', 'Lending at interest, prohibited by the Church, which is why commercial credit was structured through exchange rates and partnerships instead.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'crisis',
      num: '05',
      accent: 'gold',
      name: 'The Fourteenth Century: Famine, Plague, Revolt',
      navLabel: 'The crisis',
      dates: '1315 to 1453 &nbsp;·&nbsp; The Great Famine to the end of the Hundred Years War',
      thesis: `A disease that arrived along the trade routes of Topic 1.2 killed something between a third and a half of Europe, and in doing so did more to end serfdom in western Europe than any king, rebellion or philosopher had managed in three centuries.`,
      parts: [
        {
          heading: 'The setup and the shock',
          blocks: [
            { p: `Three centuries of population growth had pushed farming onto poor, marginal soils, so by <span class="num">1300</span> much of Europe was living close to the edge of what its land could support. Then the weather turned. Torrential rain across <span class="num">1315</span> to <span class="num">1317</span> ruined harvests repeatedly, and the Great Famine killed perhaps a tenth of the population of northern Europe and left the survivors weakened.` },
            { p: `The <span class="kt">Black Death</span> arrived in Sicily in <span class="num">1347</span> aboard ships from a Genoese trading post on the Black Sea, and swept through Europe over the following four years. Mortality estimates range from about a third to about a half of the population, with local variation from near-total destruction to relative escape. It is essential to understand that the plague was a product of connection: the same Eurasian trade network, intensified under Mongol rule, that carried silk, paper technology and Arabic mathematics westward carried the disease along with them. Integration has costs, and this is the largest one in the course.` }
          ]
        },
        {
          heading: 'What a labor shortage does',
          blocks: [
            { p: `Now follow the economics, because this is the mechanism the topic is built on. Killing a third of the people does not destroy the land, the tools, the mills or the livestock. Afterward there was the same amount of farmland and far fewer people to work it, which means labor became scarce and therefore expensive, while land became abundant and therefore cheap. Wages rose sharply, rents fell, and a peasant who did not like his terms could walk to the next manor, where somebody would take him without asking questions.` },
            { p: `Landlords responded exactly as you would expect. In England the <span class="kt">Statute of Labourers</span> of <span class="num">1351</span> attempted to fix wages at their pre-plague levels and to compel able-bodied workers to accept employment on the old terms. It failed, because a law cannot repeal a shortage, and the attempt to enforce it joined a larger set of grievances, repeated poll taxes among them, that produced the great English rising of <span class="num">1381</span>, in which rebels from Kent and Essex entered London, executed royal officials, and demanded the abolition of serfdom outright. It was suppressed, its leaders killed, and its central demand nonetheless arrived: serfdom in western Europe faded across the following century, eroded by labor scarcity, migration, the commutation of services into money rents and steady peasant pressure rather than granted by anyone. In France the rising called the Jacquerie of <span class="num">1358</span>, during the ruinous middle stage of the Hundred Years War, was crushed with great brutality.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not generalize "the plague ended serfdom in Europe." It ended in the west, in England, France and the Low Countries, where towns were dense, markets for labor existed and peasants could move. In eastern Europe, in Poland, Hungary and later Russia, the same shortage produced the opposite result: landlords with more political leverage over weaker monarchies responded by tightening restrictions, and serfdom there hardened in the following centuries into a harsher form than it had ever had in the west. Same shock, opposite outcomes, because the political and urban conditions differed. That contrast is one of the strongest causation arguments a student can make anywhere in this unit.`
            } }
          ]
        },
        {
          heading: 'Who was on top, and who was not',
          blocks: [
            { p: `Medieval writers described society as three orders: those who pray, those who fight, and those who work. It is a description of an ideal rather than a map of reality, and the towns fitted into it so badly that the scheme was quietly reorganized around them. But it is worth knowing, because it shows that the hierarchy was understood as divinely appointed function, which is the same move Neo-Confucianism made in Topic 1.1 with different vocabulary.` },
            { p: `The exclusions were specific. The Fourth Lateran Council of <span class="num">1215</span> required Jews and Muslims to wear distinguishing dress. Jewish communities, barred from most guilds and from landholding in much of Europe, were pushed toward moneylending, an occupation the Church forbade to Christians and then despised in those who practiced it. England expelled its Jewish population in <span class="num">1290</span> and France did the same in <span class="num">1306</span>. During the plague years, accusations that Jews had poisoned the wells produced massacres across the German lands, the worst of them at Strasbourg in <span class="num">1349</span>, where the killings took place before the disease had even reached the city.` },
            { p: `Women's position was legally subordinate and practically varied. Peasant women worked the fields and were essential to the household economy; townswomen worked in the trades, and in some cities the silk industry was largely in women's hands, with a few guilds admitting them as members; abbesses ruled substantial religious houses and their estates. At the end of this period Christine de Pizan, widowed and supporting a family, made her living by writing at the French court and composed a sustained defense of women's capacities against the misogyny of the learned tradition, which is a useful piece of evidence precisely because it shows both the constraint and someone contesting it.` }
          ]
        }
      ],
      useThis: {
        tool: `Demographic shock as a driver of social change. <em>The mechanism is that mass mortality leaves land and tools intact while making labor scarce, so wages rise and rents fall, and a peasant who can walk to a neighboring manor has bargaining power that no rebellion had won him. Legislation attempting to freeze wages fails because it is fighting a shortage.</em>`,
        limit: `The same shock hardened serfdom in eastern Europe, where peasants could not move and lords held more leverage over weaker monarchies. Structure decides what a shock produces.`,
        comparison: `Against <em>Song China</em>, where population growth from Champa rice produced surplus labor and cheap workers, Europe after 1350 shows the same relationship running the other way. Against the <em>Mongol network</em> in Unit 2: the plague is the clearest case in the course that connection transmits everything, not only what its participants wanted.`
      },
      terms: [
        ['Black Death', 'The plague that entered Europe in 1347 along Genoese trade routes and killed roughly a third to a half of the population within four years.'],
        ['Statute of Labourers', 'The English law of 1351 attempting to fix wages at pre-plague levels, which failed and helped provoke the rising of 1381.'],
        ['Three estates', 'The medieval description of society as those who pray, fight and work, presenting hierarchy as divinely appointed function.'],
        ['Jacquerie', 'The French peasant rising of 1358, crushed with great violence during the Hundred Years War.'],
        ['Hundred Years War', 'The long conflict between England and France from 1337 to 1453, which drove taxation, strengthened royal armies and devastated the French countryside.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the specific evidence, and the reason the difference existed. Notice that none of them ranks Europe against another region. Ranking earns nothing; explaining a difference earns everything.`,
    pairs: [
      {
        category: 'State building',
        title: 'Europe bargained because it could not tax',
        body: `A Song emperor raised revenue through examined officials who assessed and collected on his authority, so he negotiated with nobody. A European king had no such service, so extraordinary taxation required summoning the nobles, clergy and townsmen who could actually deliver it, and they charged for their consent in confirmed privileges and, eventually, in the settled principle behind Magna Carta in 1215 and the Parliament of 1295. The difference exists because the Song inherited an intact imperial tax system and post-Carolingian Europe inherited none, which means representative institutions here are the residue of state weakness rather than evidence of an unusual appetite for liberty.`
      },
      {
        category: 'Belief and rule',
        title: 'The Church was a rival state; Confucian scholars were the state',
        body: `Both supplied the moral framework that made an unequal order feel natural. But the Latin Church collected a universal tithe, ran its own courts under canon law, held a large share of Europe's land, trained nearly everyone who could read the Latin administration ran on, and could suspend the sacraments across a kingdom, while Neo-Confucian scholars in Song China were the imperial administration itself. The difference exists because the Church built its hierarchy during centuries when no western European state was strong enough to absorb it, while Chinese religious institutions never developed an authority independent of the throne. That is why a pope could bring a king to terms and a Confucian academy could not.`
      },
      {
        category: 'Economy',
        title: 'European towns bought a freedom Chinese cities never needed to',
        body: `Kaifeng and Hangzhou were larger, richer and more commercially sophisticated than any European city, and they were administrative centers governed by imperial officials. European towns purchased charters granting them their own courts, their own officers and the rule that a serf who lived within the walls unclaimed for a year and a day became free. The difference exists because a lord short of cash had something to sell and a Song emperor did not, and the consequence is a European commercial class with legal autonomy and political standing, which is the specific thing that made its later trajectory different.`
      },
      {
        category: 'Causation',
        title: 'The plague was a cost of connection, and its effects depended on structure',
        body: `The same trade network that carried paper, Arabic mathematics and Aristotle westward carried plague from the Black Sea to Sicily in 1347, killing a third to a half of Europe within four years. In the west, the resulting labor shortage raised wages, collapsed rents, defeated the Statute of Labourers of 1351 and dissolved serfdom within a century. In eastern Europe the same shortage hardened serfdom instead, because peasants could not move and landlords held more leverage over weaker monarchies. Two conclusions worth carrying everywhere: integration transmits everything, not only what traders intended, and identical shocks produce opposite outcomes when the underlying structures differ.`
      }
    ]
  }
};
