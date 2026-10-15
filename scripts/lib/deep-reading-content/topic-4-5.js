'use strict';

/**
 * Topic 4.5, Maritime Empires Maintained and Developed: the deep reading.
 *
 * Why this exists. The success criteria ask for something new and something
 * that kept going in four places: the rulers' economic tools, networks of
 * exchange, society, and belief. The First & 10 tells that story. What it has
 * no room for is the mechanism behind each part: why a mercantilist thought a
 * trade surplus was strength, how a joint-stock company could be sent to war,
 * why China's taxes pulled silver around the world, how the old regional
 * markets and the new European carriers fit together, why the slave trade
 * reshaped families in parts of Africa, and how to compare what religions did
 * when they traveled.
 *
 * Rebuilt from the 4.5 story (docs/TOPIC-4-5-STORY-DRAFT.md) on 2026-10-15.
 * The old chapter, "What Held It Together," kept much of its focus on Potosí's
 * labor system (Topic 4.4's) and had no section on peasant and artisan labor or
 * on family change in Africa, two Key Concepts of this topic. Its strongest
 * material, on mercantilism's premise, the Single Whip and Europe's trade
 * deficit with Asia, is kept in sections 01, 03 and 04, with its figures
 * narrowed to what the sources say.
 *
 * Three things carried deliberately:
 *
 *   1. China's demand is the cause, not a footnote. Section 03 puts the Single
 *      Whip before the galleon.
 *   2. Old and new side by side. Section 04 sets the regional markets and the
 *      old work beside the Atlantic system, as the CED pairs them under one
 *      objective.
 *   3. Comparison, not a list. Section 06 sorts what religions did into
 *      spreading, clashing and blending, because objective K asks for
 *      similarities and differences.
 */

module.exports = {
  topicKey: 't4-5',
  slug: 'topic-4-5-maritime-empires-maintained',
  sourceFile: 'deep-reading-topic-4-5-maritime-empires-maintained.html',
  lessonFile: 'lesson-4-5-maritime-empires-maintained.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.5: What Made Empires Pay',
  eyebrow: 'Topic 4.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'What Made Empires <em>Pay</em>',
  deck: `An empire held together by ships cost money every year. Between 1450 and 1750 European rulers built new tools to make their empires pay, and the silver, goods and people those tools moved changed work, families and faith around the world. This chapter explains how mercantilism and the chartered companies worked, why rivals fought over trade, why American silver went to China, how the Atlantic system and the old regional markets ran side by side, what the slave trade did to families in Africa, and how religions spread, clashed and blended.`,
  meta: ['Six sections', 'Tools, rivals, silver, markets, society, faith', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.5 &nbsp;·&nbsp; What Made Empires Pay &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks four things of this topic: how rulers used economic strategies to hold power, what changed and continued in networks of exchange, how society was affected, and how belief systems affected societies in similar and different ways. Sections 01 and 02 answer the first, sections 03 and 04 the second, section 05 the third, and section 06 the fourth. Most sections end by naming something new and something that kept going.`,
    steps: [
      `<b>01 Two tools:</b> mercantilism, and the chartered joint-stock company.`,
      `<b>02 Rivals:</b> economic disputes that became wars, in the Indian Ocean, the Sahara and Europe.`,
      `<b>03 Silver:</b> why American silver was pulled toward China.`,
      `<b>04 Markets and work:</b> the Atlantic system, the regional markets that kept going, and the extra work.`,
      `<b>05 Families and cultures:</b> what the slave trade did to families in Africa, and the mixed Atlantic world.`,
      `<b>06 Faith:</b> religions that spread, clashed and blended, compared.`,
      `<b>Then the closing section</b>, which gathers the evidence for each objective.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'tools',
      num: '01',
      accent: 'gold',
      name: 'Two Tools to Make an Empire Pay',
      navLabel: 'Mercantilism and companies',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Laws, charters, shares',
      thesis: `European rulers did not just own their empires; they had to make them pay for ships, soldiers and forts every year. They used two tools: an idea about how a state grows rich, and a new kind of company built to carry it out.`,
      parts: [
        {
          heading: 'The idea, and what follows from it',
          blocks: [
            { p: `The idea starts from a belief: a kingdom's strength is the gold and silver it holds, and one kingdom's gain in trade is another's loss. If that is true, three policies follow. <b>Sell more than you buy</b>, because the difference arrives as gold and silver. <b>Protect your own makers</b> with taxes on foreign goods, because buying foreign goods sends money out. And <b>keep the colonies' trade for yourself</b>: colonies should send raw goods home and buy the home country's finished goods, and trade with no one else.` },
            { p: `Later writers named this set of ideas <span class="kt">mercantilism</span>; its critics, Adam Smith among them in <span class="num">1776</span>, called it the "mercantile system," the word mercantilism came later still, and the people who held these ideas did not call themselves mercantilists. One of them, Thomas Mun, a London merchant and a director of the English East India Company, put the first policy in a sentence: England "must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value." His book was printed in <span class="num">1664</span>, after his death.` },
            { p: `Rulers wrote the idea into law. Spain's <b>Casa de Contratación</b>, founded in Seville in <span class="num">1503</span>, licensed and registered the trade with Spain's American colonies, and silver crossed the Atlantic in fleets guarded by warships. England's <b>Navigation Act</b> of <span class="num">1651</span> said goods from Asia, Africa and the Americas could come into England only in English ships; it was aimed at Dutch shippers, who carried much of Europe's trade. Acts from <span class="num">1660</span> listed colonial goods, sugar and tobacco among them, that could be shipped only to England. In France, the minister Jean-Baptiste Colbert used tariffs, royal support for workshops and royal trading companies from the 1660s.` }
          ]
        },
        {
          heading: 'A company that could go to war',
          blocks: [
            { p: `A voyage to Asia cost a fortune and ships were often lost. A <span class="kt">joint-stock company</span> spread that risk: it sold shares to many investors, who split the profits and the losses. The English East India Company was chartered by Elizabeth I in <span class="num">1600</span>. In <span class="num">1602</span> the States General of the Dutch Republic chartered the Verenigde Oostindische Compagnie, the <span class="kt">VOC</span>, and gave it, for twenty-one years, the only right of any Dutch merchant to trade east of the Cape of Good Hope. The VOC kept its capital in the company rather than paying it out after each voyage, and its shares were bought and sold in Amsterdam.` },
            { p: `The charter is what made the company a tool of the state. It let the VOC build forts, keep soldiers, make treaties with Asian rulers and wage war. A monopoly meant that the profits of the Asia trade went to one national company rather than being competed away among Dutch merchants, which is exactly what a mercantilist government wanted, and the company's guns meant that rulers could fight rivals through it. The College Board's sentence names both uses: rulers and merchants used these companies "to finance exploration," and rulers used them "to compete against one another in global trade."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat mercantilism as an early version of free trade. It starts from the opposite belief. Mercantilists thought one country's gain was another's loss, so the state had to direct trade with laws, monopolies and force. Adam Smith wrote <em>The Wealth of Nations</em> in <span class="num">1776</span> as an attack on that system.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The chartered monopoly company. <em>A government gives one company the only right to a trade and the power to fight for it, so the company's profit stays inside one country and the company's soldiers fight that country's rivals: a private business doing a ruler's work, paid for by the trade itself.</em>`,
        limit: `Monopolies invited smuggling, and the rules in law were often not the trade in practice; merchants and officials broke them whenever it paid.`,
        comparison: `Against the <em>Ming tribute and trade system</em> of Unit 1: China's rulers also controlled foreign trade through licensed channels, but to keep order and display the emperor's authority, not to pile up silver. A similar tool, a controlled channel for trade, used for a different purpose.`
      },
      terms: [
        ['Mercantilism', 'A set of ideas that a state grows strong by collecting gold and silver, selling more than it buys, and keeping its colonies\' trade for itself.'],
        ['Navigation Act', 'The English law of 1651 that allowed goods from Asia, Africa and the Americas into England only in English ships.'],
        ['Joint-stock company', 'A company that sells shares to many investors, who share its profits and its losses.'],
        ['Chartered monopoly company', 'A company given by its government the only right to a trade, such as the VOC and the English East India Company.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602, with the right to build forts, keep soldiers, make treaties and wage war in Asia.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'rivals',
      num: '02',
      accent: 'rust',
      name: 'Old Fights over Trade, New Tools',
      navLabel: 'Rivals',
      dates: '1509 to 1674 &nbsp;·&nbsp; Diu, Tondibi, Ambon',
      thesis: `States had fought over trade routes for centuries. What changed in this period was the reach of the fights, now stretching across oceans, and the tools rivals fought them with.`,
      parts: [
        {
          heading: 'The Indian Ocean: spices and who would carry them',
          blocks: [
            { p: `When the Portuguese reached the Indian Ocean they tried to take the spice trade for themselves, by force and by selling passes to other ships (Topic 4.4). That threatened the Muslim states whose ports and merchants carried spices through the Red Sea to Egypt and on to the Mediterranean. In <span class="num">1509</span> a fleet of Mamluk Egypt, the sultan of Gujarat and the ruler of Calicut fought the Portuguese off the port of Diu, in western India, and lost. After the Ottoman Empire conquered Egypt in <span class="num">1517</span>, Ottoman fleets fought the Portuguese in the Red Sea, the Persian Gulf and the western Indian Ocean through the 1500s, besieging Diu in <span class="num">1538</span>. The dispute was economic: which route, and whose ships, would carry the spices.` },
            { p: `The Portuguese never closed the old route. By the middle of the 1500s spices were again reaching the Mediterranean through the Red Sea in large amounts, and Muslim merchants kept trading.` }
          ]
        },
        {
          heading: 'The Sahara: gold and salt',
          blocks: [
            { p: `In Africa, the sultan of Morocco, Ahmad al-Mansur, looked south. The Songhai Empire controlled the trade in West African gold and the salt mines of the Sahara, and the two states had quarreled over the salt mine at Taghaza in the 1580s. Al-Mansur sent an army with firearms across the desert, and in <span class="num">1591</span> it defeated the Songhai army at Tondibi (Topic 3.1 told the battle). Gold and the salt trade were a large part of the reason: al-Mansur wanted the gold.` },
            { p: `He did not get as much as he hoped. Morocco held Timbuktu and Gao, but the old empire broke into smaller states, and gold kept flowing to other buyers, including European traders on the coast.` }
          ]
        },
        {
          heading: 'Europe\'s rivals: spices and shipping',
          blocks: [
            { p: `The European companies fought each other too. The Dutch and English East India companies competed for the spice islands of Southeast Asia, and in <span class="num">1623</span> VOC officials on the island of Ambon arrested and executed ten English company men, along with nine Japanese soldiers in VOC service and a Portuguese man, accusing them, on confessions taken under torture, of plotting to seize the Dutch fort; historians still argue over whether any plot existed. The English called it the Amboyna massacre, and it embittered relations for decades.` },
            { p: `At home, England and the Dutch Republic fought three wars at sea, in <span class="num">1652</span> to <span class="num">1654</span>, <span class="num">1665</span> to <span class="num">1667</span> and <span class="num">1672</span> to <span class="num">1674</span>, largely over trade and shipping. The Navigation Act of <span class="num">1651</span>, which shut Dutch ships out of England's trade, was one cause of the first. Mercantilism and the rivalry were the same story: if one country's gain is another's loss, trade is a kind of war.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The company leaders said so themselves. In <span class="num">1614</span> Jan Pieterszoon Coen, then the VOC's director-general of trade in Asia, wrote to the company's directors that trade in Asia "must be carried on and kept up under the protection and favor of your own weapons, and that the weapons must be paid for out of the profits the trade earns, so that trade cannot be kept up without war, nor war without trade" (translated from the Dutch of H. T. Colenbrander's edition of Coen's papers, 1919). Coen was asking for more ships and soldiers, so the sentence is an argument as well as a description, but it shows how the company's own leaders understood the business.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The economic dispute. <em>When two states want the same trade, and each believes the other's gain is its own loss, the dispute turns into war: Portugal and the Mamluks and Ottomans over spices, Morocco and Songhai over gold and salt, the Dutch and English over spices and shipping.</em>`,
        limit: `Economics was rarely the only cause. Religion (Christian against Muslim in the Indian Ocean) and politics were part of most of these wars, so name the economic dispute without claiming it was the whole story.`,
        comparison: `Against the <em>Indian Ocean</em> of Topic 2.3: merchants had competed there for centuries, but no outside state had tried to take a whole trade by force. The fighting over trade was old; armed companies and ocean-wide rivalries were new.`
      },
      terms: [
        ['Economic dispute', 'A conflict between states over who controls a trade, its routes or its profits.'],
        ['Diu, 1509', 'The sea battle in which the Portuguese defeated a fleet of Mamluk Egypt and Gujarat.'],
        ['Tondibi, 1591', 'The battle in which a Moroccan army with firearms defeated the Songhai Empire, after a dispute over gold and salt.'],
        ['Amboyna, 1623', 'The execution of English East India Company men by VOC officials on Ambon, in the rivalry over the spice islands.'],
        ['Anglo-Dutch Wars', 'Three wars at sea between England and the Dutch Republic, 1652 to 1674, fought largely over trade and shipping.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'silver',
      num: '03',
      accent: 'iron',
      name: 'Silver Goes to China',
      navLabel: 'Silver',
      dates: '1545 to 1750 &nbsp;·&nbsp; Potosí, the Single Whip, Manila',
      thesis: `Spain found the silver, but China decided where it went. China's government taxed in silver while China mined little of its own, and that demand pulled American silver across both oceans.`,
      parts: [
        {
          heading: 'Where it came from',
          blocks: [
            { p: `In <span class="num">1545</span> Spanish colonists found an enormous silver mountain at <span class="kt">Potosí</span>, in the Andes, and in <span class="num">1546</span> a great silver strike came at Zacatecas in New Spain. From the 1570s, new ways of refining low-grade ore with mercury, and the mit'a draft of Andean workers (Topic 4.4), made Potosí produce far more. Historians estimate that Spanish America produced most of the world's silver between 1500 and 1800, roughly four-fifths of it by one standard estimate.` }
          ]
        },
        {
          heading: 'Why China set the price',
          blocks: [
            { p: `Ming China had tried paper money and abandoned it, and through the 1500s its government folded many taxes and labor duties into a single payment in silver. Historians call this the <span class="kt">Single Whip</span> reform; the minister Zhang Juzheng pushed it across the empire around <span class="num">1580</span>. Tens of millions of Chinese households now needed silver every year to pay their taxes, and China mined little of its own.` },
            { p: `So silver was worth more in China than in Europe. In the 1500s, an ounce of gold bought about six or seven ounces of silver in China, and about eleven or twelve in Europe. A merchant who carried silver from Europe or the Americas to China made money on the silver itself, before he bought anything. That gap is the engine of the whole trade. In the College Board's words, the silver was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."` }
          ]
        },
        {
          heading: 'Two roads to China',
          blocks: [
            { p: `<b>The western road</b> crossed the Pacific. A Spanish expedition found a way back across the Pacific in <span class="num">1565</span>, and in <span class="num">1571</span> the Spanish founded Manila in the Philippines. Galleons sailed from Acapulco in Mexico to Manila, usually one or two a year, loaded with silver. At Manila, Chinese merchants from Fujian sailed in with silk, porcelain and other goods and took the silver home. The galleons carried the silk back to Mexico, and some of it went on to Peru and Spain.` },
            { p: `<b>The eastern road</b> crossed the Atlantic. Silver landed in Seville and moved through Europe's trade. Much of it then went to Asia around Africa, in Portuguese, Dutch and English ships, because Europeans had few goods that Asian buyers wanted. The European companies paid for Asian pepper, spices, cotton cloth, silk and porcelain largely in silver.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Spain taxed the silver its colonies mined and registered the fleets and cargoes, and Manila kept customs records, so historians can count much of the registered silver. They compare those records with Chinese and European evidence. What the records miss is smuggling, which everyone agrees was large, so the registered totals are a floor, not a ceiling.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A tax as demand. <em>When China's government required taxes in silver, every household needed silver, so silver bought more in China than elsewhere, and merchants carried it there from both sides of the world: a tax law in China decided where a mountain's silver in the Andes would end up.</em>`,
        limit: `The flow rose and fell. Historians argue over how much a drop in silver imports in the 1630s and 1640s hurt the late Ming, so do not claim it caused the dynasty's fall.`,
        comparison: `Against <em>Song paper money</em> in Topic 1.1: both are Chinese governments solving the problem of money for a huge economy. The Song printed paper; the Ming, after paper failed, came to rely on silver, much of it from mines on the other side of the world.`
      },
      terms: [
        ['Potosí', 'The silver mountain in the Andes, found by Spanish colonists in 1545, one of the richest silver sources in the world.'],
        ['Single Whip', 'The Ming reform that combined taxes and labor duties into one payment in silver, applied across China around 1580.'],
        ['Manila galleon', 'The Spanish ships, usually one or two a year, that carried silver from Acapulco to Manila from 1571.'],
        ['Silver flow', 'The movement of American silver around the world, pulled largely toward China.'],
        ['Fujian merchants', 'The Chinese traders who sailed to Manila with silk and porcelain and took American silver home.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'markets',
      num: '04',
      accent: 'oxide',
      name: 'New Systems, Old Markets, More Work',
      navLabel: 'Markets and work',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; The Atlantic, Asia, the household',
      thesis: `The new trade did two things at once. It built an Atlantic system that tied three continents together, and it ran into old regional markets that kept their own merchants and their own ways. Underneath both, ordinary people did more of the same old work.`,
      parts: [
        {
          heading: 'The Atlantic system',
          blocks: [
            { p: `The <span class="kt">Atlantic trading system</span>, in the College Board's words, "involved the movement of goods, wealth, and labor, including enslaved persons." Sugar and tobacco went to Europe. Guns, iron, alcohol and cloth went to Africa, and much of the cloth was Indian cotton. Cowrie shells from the Maldive Islands, shipped by Dutch and English traders, were used as money on the West African coast. Silver, and later Brazilian gold, flowed toward Europe. And enslaved Africans were forced across the ocean to the plantations (Topic 4.4 gives the numbers).` },
            { p: `The neat triangle of textbook diagrams, Europe to Africa to the Americas and home, is a simplification. Brazil traded directly with Angola, sending tobacco, sugar brandy and gold and bringing captives back, and many ships sailed back and forth on two-way routes. The Atlantic system also reached far outside the Atlantic: the cloth from India and the shells from the Maldives were part of it.` }
          ]
        },
        {
          heading: 'The markets that kept going',
          blocks: [
            { p: `None of this replaced the trade that already crossed Africa and Asia. The College Board's sentence is that <span class="kt">regional markets</span> "continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants." The first half is continuity: merchants kept their partnerships, their credit and their family firms with agents in distant ports. Armenian merchants based at New Julfa, outside the Persian capital of Isfahan, traded from India to the Mediterranean and Europe through family networks; Gujarati and Chinese merchants kept trading too.` },
            { p: `The second half is the change. European ships became one more carrier inside these markets. The VOC carried Japanese silver to its base on Taiwan to buy Chinese silk, Japanese silver and copper to India, and Indian cloth to Southeast Asia to buy spices, and earned much of its money from trade between Asian ports.` }
          ]
        },
        {
          heading: 'More of the same work',
          blocks: [
            { p: `More trade meant more demand for food and goods, and that meant more work for the people who made them: <span class="kt">peasant and artisan labor</span>. The College Board says this labor "continued and intensified," which is continuity and change in two words.` },
            { p: `In <b>western Europe</b>, merchants put out wool and flax to families in the countryside, who spun and wove at home and were paid by the piece; historians call this the putting-out system. In <b>India</b>, weavers in Gujarat, on the Coromandel coast and in Bengal made cotton cloth for buyers in Asia, Africa and Europe, and the Dutch and English companies' purchases grew greatly in the 1600s, often through advances of money to weavers before the cloth was made. In <b>China</b>, peasant households in the Jiangnan region raised silkworms and wove silk; some of it went to Manila to be traded for American silver. Much of the spinning, silkworm raising and weaving was done by women and girls.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Europeans paid for Asian goods with better European products. For most of this period they had few goods Asian buyers wanted, and paid largely in American silver. In <span class="num">1700</span> and <span class="num">1721</span> English laws even restricted Indian cotton cloth to protect England's own weavers.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Continued and intensified. <em>When distant buyers want more of something made by hand, the same households and workshops make more of it: the work is old, the amount and the reach are new, so one case gives you a continuity and a change.</em>`,
        limit: `Not every region or worker gained. Weavers who took a company's advance could be tied to its prices, and much of the extra work fell on women and children.`,
        comparison: `Against the <em>Indian Ocean trade</em> of Topic 2.3: Indian cotton cloth had paid for spices in Southeast Asia for centuries. What changed after 1600 is that European companies carried some of it, and bought more of it for Europe and Africa.`
      },
      terms: [
        ['Atlantic trading system', 'The movement of goods, wealth and labor, including enslaved people, among Europe, Africa and the Americas.'],
        ['Cowrie shells', 'Shells from the Maldive Islands used as money in West Africa, shipped there by European traders.'],
        ['Regional markets', 'The older trading markets of Africa and Asia, with their own merchants and practices, which kept flourishing.'],
        ['Putting-out system', 'Merchants supplying raw wool or flax to rural families who spun and wove at home for pay.'],
        ['Peasant and artisan labor', 'Farm and handcraft work done in households and workshops, which grew as demand for goods rose.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'society',
      num: '05',
      accent: 'gold',
      name: 'Families and Cultures',
      navLabel: 'Society',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Africa and the Atlantic world',
      thesis: `The silver, goods and people the empires moved did not only change prices. They changed who lived in African villages, and they made new cultures in the Americas that no single people made alone.`,
      parts: [
        {
          heading: 'Who the trade took',
          blocks: [
            { p: `About two of every three captives carried across the Atlantic were male. European buyers paid more for young men to work the plantations, and African sellers often kept women and children, whom African buyers valued. In some regions, especially parts of West Central Africa, that left communities with more women than men.` },
            { p: `Historians argue that this changed family life where the trade hit hardest. Women did more of the farming, and more women and girls were enslaved within Africa itself, because local buyers wanted the people the Atlantic market wanted less. Some historians, Patrick Manning among them, argue that the shortage of men also made polygyny, men taking several wives, more common; others find the evidence for that thin. Some regions lost population, or grew more slowly than they would have, while states that sold captives grew richer. The College Board names these "demographic changes in Africa that resulted from the trade of enslaved persons."` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The sex ratio comes from the shipping records gathered in the Trans-Atlantic Slave Trade Database, which count the men, women and children on many voyages. The family changes are harder to see: historians such as Patrick Manning and John Thornton build them from those numbers, from European observers' reports, and from later counts of the population, including Portuguese censuses of Angola from the late 1700s. That is why the effects are stated as arguments, and why they differ from region to region.`
            } }
          ]
        },
        {
          heading: 'A mixed Atlantic world',
          blocks: [
            { p: `In the Americas, Africans, Indigenous Americans and Europeans lived side by side, usually because some of them were forced to, and each shaped what came out. The College Board's words are "the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis."` },
            { p: `<b>Food:</b> dishes across the Atlantic world combined African, American and European ingredients and ways of cooking, and the rice-farming skill of enslaved West Africans mattered on coasts such as Carolina's. <b>Language:</b> new languages called creoles formed, such as Haitian Creole and Papiamentu. Most of their words come from a European language, and much of their grammar and sound shows the influence of African languages; linguists still debate exactly how they formed. <b>Music and faith</b> mixed too, as section 06 shows.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that enslaved Africans and Indigenous Americans "lost their culture" and took European culture instead. They kept and remade their own ways under conditions designed to stop them, and the new cultures came from all of them. Do not swing to the opposite mistake either: the mixing happened under force and slavery, not as a meeting of equals.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Who the trade took. <em>When a trade removes more men than women from a region, the people left behind reorganize: more women farm, local buyers enslave more women, and, some historians argue, more men take several wives. A change in who lived in a village became a change in how families worked.</em>`,
        limit: `The effects varied a great deal by region and period, and much of the evidence is indirect, so name a region and say "historians argue" rather than describing all of Africa.`,
        comparison: `Against the <em>Swahili coast</em> of Topic 2.3: there, too, a new culture and a language, Swahili, came out of long contact between Africans and Arab and Persian traders. The difference is force: Atlantic creole cultures were made largely by people who had been enslaved.`
      },
      terms: [
        ['Demographic change', 'A change in the size or makeup of a population, such as more women than men.'],
        ['Polygyny', 'Marriage in which a man has more than one wife.'],
        ['Cultural synthesis', 'The mixing of cultures into something new, to which, in the Atlantic world, all parties contributed.'],
        ['Creole language', 'A new language formed among people of different origins, such as Haitian Creole or Papiamentu.'],
        ['Sex ratio', 'The number of males compared with females in a group, about two males to every female among captives in the Atlantic trade, on average.']
      ]
    },

    // ── 06 ────────────────────────────────────────────────────────────────────
    {
      id: 'faith',
      num: '06',
      accent: 'rust',
      name: 'Spread, Clash, Blend',
      navLabel: 'Faith',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Christianity, Islam, and new beliefs',
      thesis: `Religions traveled with the ships, and they did three different things when they arrived. Comparing those three is what the College Board asks for: how belief systems affected societies in similar and different ways.`,
      parts: [
        {
          heading: 'Spread',
          blocks: [
            { p: `Contact "expanded the reach" of existing religions, in the College Board's words. Christianity spread through Spanish and Portuguese America, to the Philippines after the Spanish arrived in <span class="num">1565</span>, and in Kongo, whose kings had become Christians (Topic 4.4). Jesuit missionaries reached Ming China; Matteo Ricci lived in Beijing from <span class="num">1601</span>. Islam kept spreading in Southeast Asia along older trade routes, carried by merchants and teachers rather than by European ships.` }
          ]
        },
        {
          heading: 'Clash',
          blocks: [
            { p: `Contact also "contributed to religious conflicts." In the archdiocese of Lima, in Peru, priests led by Francisco de Ávila began campaigns in about <span class="num">1609</span> and <span class="num">1610</span> to "extirpate idolatry," to root out the old religion. They searched villages, destroyed Andean sacred objects and the remains of ancestors that families honored, and punished Andean religious specialists. In Japan, as Topic 4.4 showed, the shoguns banned Christianity and drove out the missionaries.` }
          ]
        },
        {
          heading: 'Blend',
          blocks: [
            { p: `And contact produced <span class="kt">syncretism</span>, the blending of religions into new beliefs and practices. At <b>Tepeyac</b>, a hill near Mexico City, a shrine to the Virgin of Guadalupe drew Nahua and Spanish Christians by the 1550s. In the 1570s the Franciscan friar Bernardino de Sahagún wrote about the hill and about Tonantzin, "our mother," the name of a goddess the Nahua had honored there; the lesson's Skill Builder asks you to read his own words and judge his claim. Historians still argue over how much Guadalupe and Tonantzin were linked; what is certain is that Nahua Christians made Mary their own. The story of Mary appearing to Juan Diego in <span class="num">1531</span> was first published in <span class="num">1648</span>.` },
            { p: `In <b>Kongo</b>, Christian crucifixes were made by Kongo artists in Kongo style and given Kongo meanings. In <b>Potosí</b>, in the 1700s, a painter showed the Virgin Mary as the silver mountain itself, which art historians read as joining Christian painting to Andean beliefs about sacred mountains. And in the French colony of <b>Saint-Domingue</b> (today's Haiti), enslaved Africans in the 1700s built <b>Vodou</b> from West and Central African religions and Catholic saints.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not call syncretism "faking it." Some people did hide old beliefs behind Christian names, but many were sincere Christians who understood their new faith through ideas they already had. And check your dates: Cuban Santería took its familiar form in the 1800s, after this period, so it is not an example for 1450 to 1750.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Spread, clash, blend. <em>When a religion reaches new people, it can win converts, provoke a fight, or mix with what they already believed, and often all three happen in one place: to compare two cases, ask the same questions of each: who carried the religion, who received it, and what the people on each side did with it.</em>`,
        limit: `The three are not neat boxes. Tepeyac was a spread of Christianity and a blend at once, and the Lima campaigns attacked exactly the blending they found.`,
        comparison: `Against <em>Buddhism along the Silk Roads</em> in Unit 2: a religion carried by trade there also changed as it moved, taking on Chinese forms. In both cases a religion traveled with merchants and was remade by the people who received it.`
      },
      terms: [
        ['Syncretism', 'The blending of two or more religions into new beliefs and practices.'],
        ['Extirpation of idolatry', 'Campaigns in Peru from about 1610 to destroy Andean sacred objects and punish people who kept the old religion.'],
        ['Tepeyac', 'The hill near Mexico City where the Virgin of Guadalupe was honored, and where a goddess called Tonantzin had once been honored.'],
        ['Jesuits', 'A Catholic religious order whose missionaries reached China and Japan in this period.'],
        ['Vodou', 'A religion built by enslaved Africans in Saint-Domingue in the 1700s from African religions and Catholic saints.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Continuity and change',
    intro: `Each card gathers the evidence for one part of the topic. Writing what was new, what kept going and why from it is your job; the checkpoints ask you to.`,
    pairs: [
      {
        category: 'Rulers\' tools',
        title: 'Laws, companies, and the wars they started',
        body: `Spain's Casa de Contratación (1503) and England's Navigation Act (1651) put mercantilist ideas into law. The English East India Company (1600) and the VOC (1602) sold shares to investors and held monopoly charters, and the VOC could build forts, keep soldiers and wage war. Rivals fought over trade at Diu (1509), Tondibi (1591) and Ambon (1623), and England and the Dutch Republic fought three wars at sea between 1652 and 1674.`
      },
      {
        category: 'Exchange',
        title: 'Silver pulled toward China',
        body: `Potosí (1545) and Zacatecas (1546) made Spanish America the world's main source of silver. China's Single Whip reform made silver necessary to pay taxes. Galleons carried silver from Acapulco to Manila from 1571, where Fujian merchants traded silk and porcelain for it, and European companies carried silver around Africa to pay for Asian goods.`
      },
      {
        category: 'Exchange',
        title: 'The Atlantic system and the markets beside it',
        body: `Ships moved sugar, tobacco, guns, Indian cloth, Maldive cowries, silver and enslaved Africans, on routes more tangled than a triangle. Armenian, Gujarati and Chinese merchants kept trading with their old partnerships and credit, and Dutch ships carried goods between Asian ports. In western Europe, India and China, households spun and wove wool, linen, cotton and silk for more distant buyers.`
      },
      {
        category: 'Society',
        title: 'Families in Africa, cultures in the Americas',
        body: `About two of every three captives in the Atlantic trade were male, and in parts of West Central Africa women came to outnumber men. Historians connect that to more farm work by women, more enslaved women within Africa, and, some argue, more polygyny. In the Americas, foods, creole languages, music and faith were made by Africans, Indigenous Americans and Europeans together.`
      },
      {
        category: 'Belief',
        title: 'Spread, clash, blend',
        body: `Christianity reached the Americas, the Philippines and Kongo, Jesuits reached Beijing, and Islam kept spreading in Southeast Asia. Priests in Peru attacked Andean religion from about 1610. At Tepeyac, Nahua Christians honored the Virgin of Guadalupe at a hill once sacred to Tonantzin; Kongo artists made Kongo crucifixes; a Potosí painter of the 1700s made Mary the silver mountain; and enslaved Africans in Saint-Domingue built Vodou in the 1700s.`
      }
    ]
  }
};
