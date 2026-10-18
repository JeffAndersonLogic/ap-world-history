'use strict';

/**
 * Topic 4.8, Continuity and Change from 1450 to 1750: the deep reading.
 *
 * Why this exists. The learning objective asks how economic developments from
 * 1450 to 1750 affected social structures over time, and the CED gives the
 * topic the unit's review Key Concepts and no new content. The First & 10
 * follows the trade to the people in one pass. What it has no room for is the
 * mechanism at each link of the chain: why the ships mattered, why demand for
 * sugar, silver and cloth turned into a demand for workers, how one island
 * became a society of masters and slaves, why the slave trade changed African
 * families and states, and why so much of the old world kept working the old
 * way. The last section shows how to turn that evidence into an argument.
 *
 * Rebuilt from the 4.8 story (docs/TOPIC-4-8-STORY-DRAFT.md) on 2026-10-18.
 * The old chapter, "What Changed and What Did Not," was about trade networks
 * rather than social structures, and its last section, "Where Unit 5 Begins,"
 * taught Unit 5. Every case here is evidence already taught in Topics 4.1 to
 * 4.7, except Richard Ligon's account of Barbados (1657), the topic's one new
 * primary source.
 *
 * Three things carried deliberately:
 *
 *   1. Every section ends at people. A case that stops at trade has not
 *      answered the objective.
 *   2. Continuity as hard as change. Section 05 is all continuity, and every
 *      other section names what stayed.
 *   3. Arguments stay arguments. What historians argue about African family
 *      life, and the thesis itself, are said to be arguments.
 */

module.exports = {
  topicKey: 't4-8',
  slug: 'topic-4-8-continuity-and-change',
  sourceFile: 'deep-reading-topic-4-8-continuity-and-change.html',
  lessonFile: 'lesson-4-8-continuity-and-change.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.8: Follow the Trade to the People',
  eyebrow: 'Topic 4.8 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Follow the Trade to the <em>People</em>',
  deck: `Between 1450 and 1750, ships joined the two halves of the world, and the new trade in sugar, silver and cloth needed more workers than ever. This chapter follows that trade, link by link, to the people at both ends: the enslaved and the drafted, the planters who grew rich, the families of West Central Africa, and the peasants and artisans who worked harder at old jobs. Then it shows how to turn that evidence into an argument about how much changed.`,
  meta: ['Five sections', 'The road, the workers, Barbados and Spanish America, Africa, what stayed', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.8 &nbsp;·&nbsp; Follow the Trade to the People &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks one thing of this topic: explain how economic developments from 1450 to 1750 affected social structures over time. A social structure is the way a society is organized: who does the work, who rules and rises, and how families and communities live. Sections 01 and 02 follow the economic developments to the workers they needed. Sections 03 and 04 show what that did to society where the work was forced. Section 05 shows what stayed the same, and how to build an argument from all of it.`,
    steps: [
      `<b>01 The road and the money:</b> the borrowed tools, the three economic developments, and the rivalries they caused.`,
      `<b>02 The demand for workers:</b> plantations and the slave trade, the mit’a, and peasants and artisans.`,
      `<b>03 A society built on sugar:</b> Barbados in Richard Ligon's words, and the casta ranking.`,
      `<b>04 Families and states in Africa:</b> who the trade took, and what it did to those who stayed.`,
      `<b>05 What stayed, and how to argue it:</b> the continuities, and three ways evidence relates.`,
      `<b>Then the closing section</b>, which gathers the evidence for the argument.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'road',
      num: '01',
      accent: 'gold',
      name: 'The Road and the Money',
      navLabel: 'The road, the money',
      dates: '1400s to 1700s &nbsp;·&nbsp; Topics 4.1 to 4.5',
      thesis: `Nothing in this topic could happen until ships could cross an ocean and come back. Once they could, three economic developments came down that road: new demand for goods grown or made far away, a flood of American silver, and new tools that rulers used to pull the wealth toward themselves. Rivals fought over all three.`,
      parts: [
        {
          heading: 'Borrowed tools, new ships, known winds',
          blocks: [
            { p: `Europe built its ocean road from borrowed knowledge (Topic 4.1). The magnetic compass came from China, where sailors were steering by a magnetized needle by about 1100. The astrolabe began as a Greek idea that astronomers in the Islamic world made precise, and it reached Europe through Muslim Spain. Tables of the sky, which told a pilot where the sun should stand on each day of the year, were built by Muslim and Jewish astronomers in Toledo; the almanac of Abraham Zacuto, printed in Portugal in <span class="num">1496</span>, came from that line. And the triangular lateen sail, which lets a ship work forward against the wind, had been used on the Mediterranean since Roman times and was common across the seas of the Islamic world.` },
            { p: `Around those tools, Europeans built new ships: the small, light caravel to explore coasts, and the large carrack, with room for months of food, water, cargo and guns. Around <span class="num">1600</span> Dutch shipbuilders designed the fluyt, which carried a large cargo with a small, cheap crew and made shipping goods much cheaper. And sailors learned the Atlantic's winds. To get home from West Africa, a ship swung far out to sea, west and north, until it caught the westerlies. Once ships could go and come back, again and again, the two halves of the world were joined, and trade was transformed.` }
          ]
        },
        {
          heading: 'Sugar, silver and cloth',
          blocks: [
            { p: `The first economic development was new demand. Europeans wanted sugar and tobacco, crops grown on <span class="kt">plantations</span> in the Americas: huge farms growing one crop to sell (Topic 4.3). Buyers in Asia, Africa and Europe wanted cotton cloth woven in India and silk woven in China (Topic 4.5).` },
            { p: `The second was silver. From <span class="num">1545</span> the mountain at Potosí in the Andes, and from <span class="num">1546</span> the mines at Zacatecas in Mexico, made Spanish America the world's largest source of silver. A large share of it ended up in China, where the Ming government collected most of its taxes in silver, so that millions of families needed it. From <span class="num">1571</span>, Spanish galleons carried silver across the Pacific from Acapulco to Manila, where Chinese merchants traded silk and porcelain for it.` },
            { p: `The third was a set of rulers' tools. Mercantilist laws tried to keep a kingdom's trade for itself, and chartered companies, such as the English East India Company (<span class="num">1600</span>) and the Dutch East India Company, the VOC (<span class="num">1602</span>), could build forts, keep soldiers and make war (Topic 4.5).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not stop at the trade. New demand, silver and rulers' tools are the <b>economic developments</b>, and ships were the road they came down. The question asks what they did to <b>social structures</b>, so every answer has to go one step further: who did the work, who rose, and how families lived.`
            } }
          ]
        },
        {
          heading: 'The money was worth fighting over',
          blocks: [
            { p: `Economic disputes led to rivalries and conflict between states. Off Diu, in India, a fleet of Mamluk Egypt and the sultan of Gujarat fought the Portuguese in <span class="num">1509</span> and lost. In <span class="num">1591</span> the army of Morocco's sultan, Ahmad al-Mansur, crossed the Sahara and defeated the Songhai Empire at Tondibi; the gold of West Africa and the salt trade were a large part of the reason. In <span class="num">1623</span>, on the spice island of Ambon, VOC officials executed English company men they accused of plotting against them. And England and the Dutch Republic fought three wars at sea between <span class="num">1652</span> and <span class="num">1674</span>, largely over trade and shipping (Topic 4.5).` }
          ]
        }
      ],
      useThis: {
        tool: `Start the chain. <em>Name the economic development first: what was in demand, who wanted it, and how it moved. Then follow it to the people.</em>`,
        limit: `Europe joined an older world of trade; it did not replace it. Asian merchants kept trading across the Indian Ocean the whole time (section 05).`,
        comparison: `Against <em>Unit 2</em>: the Indian Ocean and the Silk Roads also moved goods a long way. What was new about a trade that crossed between the two halves of the world?`
      },
      terms: [
        ['Economic development', 'A big change in how people make, buy and sell things, such as a new crop, a new source of silver or a new kind of company.'],
        ['Social structure', 'The way a society is organized: who does the work, who rules and rises, and how families and communities live.'],
        ['Plantation', 'A huge farm growing one crop to sell, such as sugar or tobacco.'],
        ['Mercantilism', 'The belief that a kingdom grew strong by selling more than it bought and keeping its colonies\' trade for itself.']
      ]
    },

    // ── 02 ───────────────────────────────────────────────────────────────────
    {
      id: 'workers',
      num: '02',
      accent: 'iron',
      name: 'The Demand for Workers',
      navLabel: 'The workers',
      dates: '1500s to 1750 &nbsp;·&nbsp; Topics 4.4 and 4.5',
      thesis: `All that demand meant someone had to grow more, mine more and make more. The College Board's words are that "the demand for labor intensified." It was met in three different ways, and the three ways did very different things to the people involved.`,
      parts: [
        {
          heading: 'Plantations and the Atlantic slave trade',
          blocks: [
            { p: `Sugar took enormous numbers of workers: to plant and cut the cane, and to crush and boil it before it spoiled. Planters in Brazil and the Caribbean chose enslaved Africans. Historians estimate that in the whole 1500s, fewer than <span class="num">300,000</span> Africans were forced onto ships bound for the Americas. In the fifty years from <span class="num">1701</span> to <span class="num">1750</span>, more than <span class="num">2.5 million</span> were (Topic 4.4). The College Board's words are that the Atlantic slave trade "developed and intensified."` },
            { p: `On the plantations, enslaved Africans were held in <span class="kt">chattel slavery</span>: owned as property for life, and their children too. It was not the first slavery. Europeans were already growing sugar with enslaved workers on Atlantic islands such as Madeira before 1492, and slavery existed in Africa and around the Mediterranean and the Indian Ocean (Topics 4.3 and 4.4). What was new was the scale, and that slavery in the Americas came to be tied to race.` }
          ]
        },
        {
          heading: 'Old forced labor, put to new work',
          blocks: [
            { p: `The Inca had required each community to send people to work for the state in turns, a labor duty called the <span class="kt">mit’a</span>. In the <span class="num">1570s</span> the Spanish viceroy of Peru, Francisco de Toledo, turned it into a draft that sent thousands of Andean men each year to the silver mine at Potosí (Topic 4.4). An old system kept its name and changed its master, and it took men away from their villages for months at a time to dig silver for a world market.` }
          ]
        },
        {
          heading: 'Peasants and artisans, working more',
          blocks: [
            { p: `Most of the world's new goods were not made by forced labor. They were made by <span class="kt">peasant and artisan labor</span>, the work of people who farmed or made things by hand, at home and in workshops. In western Europe, merchants paid families in the countryside to spin and weave wool and linen in their own homes. In India, weavers in Gujarat, Bengal and on the Coromandel coast made more and more cotton cloth for buyers in Asia, Africa and Europe, and the European companies bought more and more of it. In China, peasant families raised silkworms and wove silk, and some of it went to Manila to be traded for American silver (Topic 4.5).` },
            { p: `The College Board's words for this, in Topic 4.5, are that peasant and artisan labor "continued and intensified in many regions as the demand for food and consumer goods increased." The work was old. There was more of it, for buyers farther away, and in China it was tied to silver: families sold what they made to get the silver they needed for most of their taxes.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Historians count the slave trade from the records of the voyages themselves: ships' papers, port records and company accounts, gathered by the Slave Voyages project into estimates of how many people were carried each year. The numbers are estimates, and the page says so, but they agree on the shape: a small trade in the 1500s and a huge one by the 1700s.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Ask which kind of labor. <em>Was the work forced and new in its scale (the Atlantic slave trade), an old duty given a new master (the mit’a), or old work done in larger amounts (peasants and artisans)? Each did something different to society.</em>`,
        limit: `Most people in 1750 still farmed (section 05). The plantations and mines changed some places enormously, but they were not where most of the world's people worked.`,
        comparison: `Against <em>the mit’a</em>: the mit’a was an old system put to new work. Which other labor system in this section is old work in new amounts?`
      },
      terms: [
        ['Chattel slavery', 'Slavery in which a person is owned as property for life, and the person\'s children are enslaved too.'],
        ['Mit’a', 'An Inca labor duty that Spain turned into a draft sending Andean men to the silver mine at Potosí.'],
        ['Peasant and artisan labor', 'The work of people who farmed or made things by hand, at home and in workshops.'],
        ['Indentured servant', 'A worker bound by a contract to work for a set number of years, often to pay for a voyage.']
      ]
    },

    // ── 03 ───────────────────────────────────────────────────────────────────
    {
      id: 'sugar',
      num: '03',
      accent: 'rust',
      name: 'A Society Built on Sugar',
      navLabel: 'Barbados and casta',
      dates: '1647 to 1700s &nbsp;·&nbsp; Barbados and Spanish America',
      thesis: `Where the new economy needed workers by force, it did more than move people. It built new societies, with new people at the top and a new rule for who belonged at the bottom. Barbados shows it happening on one small island in a few decades, in the words of a man who watched it begin.`,
      parts: [
        {
          heading: 'Barbados in Richard Ligon\'s words',
          blocks: [
            { p: `Barbados is a small island in the eastern Caribbean that the English had settled in the 1620s. In September <span class="num">1647</span> an Englishman named Richard Ligon landed there. He found that sugar-making was still new there. He saw many sugar works already running, but the planters had been making sugar for only a few years, with cane plants brought from Pernambuco in Brazil. Ligon lived on a sugar plantation that his traveling companion, Thomas Modyford, had bought a half share of, helped run it, and stayed about three years. Back in England, he wrote a description of the island, published in London in <span class="num">1657</span>.` },
            { p: `Ligon wrote that "the Island is divided into three sorts of men, viz. Masters, Servants, and slaves." The masters were the <span class="kt">planters</span>, the owners of the plantations. The servants were indentured servants, most of them poor people from England, Scotland and Ireland, bound to work for a set number of years. And "the slaves and their posterity," meaning their children and descendants, were "subject to their Masters for ever." That last difference is the one that lasted: a servant's term ended, but slavery passed from parent to child.` },
            { p: `Sugar made the masters rich. Ligon wrote that one planter, James Drax, had begun on the island with "a stock not exceeding 300 l. sterling," about 300 pounds, and had raised a fortune "all by this plant of Sugar." For a while, servants and enslaved Africans arrived side by side; historians show that both groups grew through the 1640s and 1650s. But over the next few decades the planters bought more and more enslaved Africans, and in <span class="num">1679</span> a count of the island found about <span class="num">37,700</span> enslaved people and about <span class="num">20,000</span> white settlers. Sugar had made a new kind of society: a small, rich group of planters at the top, a new elite, and an enslaved majority at the bottom, held for life, by inheritance, and by race.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Ligon is a witness, but not a neutral one. He lived on and helped run a plantation, an insider in the planters' business, and he wrote partly to show English readers how much money sugar could make. When he writes that the slaves were "kept and preserved with greater care than the servants," he is making a planter's claim. Historians test it against other evidence, such as how many enslaved people the island had to keep buying to replace those who died.`
            } }
          ]
        },
        {
          heading: 'Spanish America ranks by ancestry',
          blocks: [
            { p: `In Spanish America, the silver mines and the great estates sat on top of a mixed society of Spaniards, Indigenous peoples and Africans, and their children. Spanish colonial society ranked people by their ancestry, the <span class="kt">casta</span> system, and silver, land and trade made many creole families, people of Spanish ancestry born in the Americas, rich: a new economic elite (Topic 4.7). The empire shaped its peoples, and its peoples shaped the empire: new categories grew up for the mixed society in its colonies.` },
            { p: `Barbados and Spanish America were different places, ruled by different kingdoms, with different laws. Comparing them is a good way to test an argument: ask what each society put at the top and at the bottom, and what economic development built each ranking. If two places show the same pattern, the pattern is stronger evidence than either case alone.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that sugar alone "caused" slavery, or that disease alone did. Europeans already grew sugar with enslaved workers before 1492, chose to bring that system to the Americas, and chose whom to enslave. The demand for sugar made the system grow; people built it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Follow the crop to the hierarchy. <em>Name the crop or the mineral, the workers it needed, how they were held, and who grew rich. That is a complete chain from an economic development to a social structure.</em>`,
        limit: `Barbados is one island, and an extreme one. It is strong evidence for how much a plantation economy could change a society, not for how most of the world lived.`,
        comparison: `Against <em>the casta ranking</em>: what did Barbados put at the top and the bottom, and what did Spanish America? Is that the same pattern, or a contrast?`
      },
      terms: [
        ['Planters', 'The owners of plantations, who became a rich new elite in the sugar colonies.'],
        ['Posterity', 'A person\'s children and descendants.'],
        ['Casta', 'The ranking of people by ancestry in Spanish colonial society.'],
        ['Creoles', 'People of Spanish ancestry born in the Americas.']
      ]
    },

    // ── 04 ───────────────────────────────────────────────────────────────────
    {
      id: 'africa',
      num: '04',
      accent: 'oxide',
      name: 'Families and States in Africa',
      navLabel: 'Africa',
      dates: '1500s to 1750 &nbsp;·&nbsp; West and West Central Africa',
      thesis: `The Atlantic slave trade changed the societies it took people from, not only the ones it carried them to. It changed who was left in a village and so how families worked, and it made some African states stronger while it threatened others.`,
      parts: [
        {
          heading: 'Who the trade took, and who stayed',
          blocks: [
            { p: `About two of every three people carried away in the Atlantic slave trade were male (Topic 4.5). In parts of Africa, especially West Central Africa, that left communities with more women than men. Historians argue that this changed family life: women did more of the farming, and more women and girls were enslaved inside Africa itself. Some historians argue that more men took several wives, and others find that evidence thin.` },
            { p: `That is a change inside a continuity. In many farming villages of the region, women had long done much of the work in the fields with hoes. The trade did not invent that. It made it heavier, because there were fewer men to share the work.` }
          ]
        },
        {
          heading: 'Stronger states, and a king\'s complaint',
          blocks: [
            { p: `The same trade made some African states stronger. On the Gold Coast, the Asante kingdom rose by controlling gold and buying guns from Dutch and English traders, and in <span class="num">1701</span> it defeated the kingdom of Denkyira at Feyiase and became the main power in the region (Topic 4.4). African rulers and merchants took part in the trade, and some grew rich and powerful from it.` },
            { p: `It could also tear at a kingdom. In <span class="num">1526</span> Afonso I of Kongo wrote to the king of Portugal that Portuguese traders were carrying away, in Luís Madureira's translation, "our native-born countrymen and the children of our nobles and vassals as well as relatives of ours," because thieves were seizing free people of Kongo to sell to them. Afonso himself sold war captives to the Portuguese, and Kongo had enslaved people of its own. His complaint was about whom the trade took, and about his own power to control it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the slave trade changed only the Americas, or that Africans were only its victims. It changed families and states in Africa, and African rulers and merchants took part in it. Both are true at once.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Follow the numbers to the family. <em>Who was taken changed who stayed, and who stayed changed how a family and a village worked.</em>`,
        limit: `The effects were uneven: strongest where the trade took the most people, and different from one region to the next. "Historians argue" is the honest way to say what they do not all agree on.`,
        comparison: `Against <em>Barbados</em> in section 03: the same trade changed society at both ends. How was the change on Barbados different from the change in a West Central African village?`
      },
      terms: [
        ['Sex ratio', 'The number of men compared with the number of women in a group.'],
        ['Polygyny', 'A marriage in which a man has more than one wife.'],
        ['Asante', 'A kingdom on the Gold Coast of West Africa that grew strong around 1700 through gold and the guns it bought.'],
        ['Kongo', 'A kingdom near the mouth of the Congo River whose king, Afonso I, protested the slave trade in 1526.']
      ]
    },

    // ── 05 ───────────────────────────────────────────────────────────────────
    {
      id: 'stayed',
      num: '05',
      accent: 'gold',
      name: 'What Stayed, and How to Argue It',
      navLabel: 'What stayed, the argument',
      dates: '1450 to 1750 &nbsp;·&nbsp; Most of the world',
      thesis: `A strong answer about this period names what stayed the same as carefully as what changed. Most people still farmed, most work was still family work done the old way, and most rulers still inherited their thrones. And a strong answer does not just list evidence; it explains how the pieces relate.`,
      parts: [
        {
          heading: 'The continuities',
          blocks: [
            { p: `Most people still farmed. In <span class="num">1750</span>, as in <span class="num">1450</span>, most of the world's people grew food, and the College Board's own sentence about this period begins with that fact: the world's productive systems "continued to be heavily centered on agriculture."` },
            { p: `Much of the work itself stayed the same. A spinner in Holland, a weaver in India and a silk family in China did work their grandparents would have known, at home and as a family, with women and girls doing much of the spinning and weaving. Global demand made them work more. It did not replace them.` },
            { p: `And the ladder stayed. Almost everywhere, a ruler who inherited the throne still sat at the top, and old nobles kept most of their privileges even when stronger kings squeezed them (Topic 4.7). Older forms of slavery went on inside Africa, and Gujarati, Swahili Arab, Omani and Javanese merchants kept the Indian Ocean trading, with Chinese and Armenian merchants in the markets around it; European merchants often made their money by joining that trade rather than replacing it (Topics 4.4 and 4.5).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that everything changed after 1492, or that nothing did. Both are wrong. The change was deep in some places and slight in others, and a strong answer says which, and why.`
            } }
          ]
        },
        {
          heading: 'Three ways evidence relates',
          blocks: [
            { p: `A list of evidence is not an argument. An argument explains how the pieces of evidence relate to each other, and three relationships do most of the work. The first is <b>this led to that</b>: Europe's demand for sugar led to plantations in Barbados and Brazil, which led to a huge slave trade, which left villages in West Central Africa with more women than men. One chain of causes links three continents.` },
            { p: `The second is <b>the same pattern, two places</b>: a spinner in Holland and a weaver in India both did old work in larger amounts, for buyers far away. The third is <b>a contrast</b>: an Andean man drafted through the mit’a was taken far from his village to dig silver, while a weaver in India kept working at home, making more cloth than before for buyers overseas. A contrast shows where the new trade changed people's lives most and where least, and that is what lets an answer say how much changed.` },
            { p: `Put the evidence together, and you can write a <span class="kt">thesis</span>, a claim that answers the question and that you can defend. A strong thesis names a change, a continuity, and the reason for the difference: where did the new trade change social structures most, where did it change them least, and why? You can argue more than one thesis from the same evidence. What you cannot do is leave out the evidence on the other side.` }
          ]
        }
      ],
      useThis: {
        tool: `Name the relationship. <em>For any two pieces of evidence, say whether one led to the other, whether they show the same pattern, or whether they make a contrast, and then explain why.</em>`,
        limit: `A thesis is an argument, not a fact. Another student can argue a different one with the same evidence, and a good answer can still be wrong about how much changed if it leaves out the other side.`,
        comparison: `Against <em>Barbados</em>: which piece of evidence in this section makes the strongest contrast with a claim that everything changed?`
      },
      terms: [
        ['Continuity', 'Something that stayed the same over time.'],
        ['Change', 'Something that became different over time.'],
        ['Thesis', 'A claim that answers the question, takes a position someone could argue against, and can be defended with evidence.'],
        ['Corroborate', 'To show the same thing with a second, separate piece of evidence.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The argument',
    intro: `Each card gathers the evidence for one part of the argument. Choosing which changes and continuities matter most, and explaining how the pieces relate, is your job; Checkpoint 2 asks you to.`,
    pairs: [
      {
        category: 'The economic developments',
        title: 'Sugar, silver and cloth',
        body: `Ships built from borrowed tools crossed oceans and came back. Europe wanted plantation sugar and tobacco; buyers on three continents wanted Indian cotton and Chinese silk; Potosí's silver flowed to China from 1545 on; mercantilist laws and the VOC pulled the wealth toward rulers; and rivals fought over it, from Diu in 1509 to the Anglo-Dutch Wars.`
      },
      {
        category: 'The workers',
        title: 'Forced, drafted, and working more',
        body: `Fewer than 300,000 Africans were carried to the Americas in the 1500s, and more than 2.5 million in 1701 to 1750. Spain drafted Andean men to Potosí through the mit’a from the 1570s. Peasants and artisans in Europe, India and China did old work in larger amounts for faraway buyers.`
      },
      {
        category: 'What changed',
        title: 'New societies where the work was forced',
        body: `Ligon's Barbados, from 1647: "three sorts of men, viz. Masters, Servants, and slaves," the enslaved held "for ever," and by 1679 about 37,700 enslaved people and 20,000 white settlers. The casta ranking in Spanish America. Villages in West Central Africa with more women than men; Asante stronger; Afonso of Kongo's complaint of 1526.`
      },
      {
        category: 'What stayed',
        title: 'Most people, most work, most rulers',
        body: `Most people still farmed. Spinning, weaving and silk-making stayed family work done at home. Hereditary rulers and privileged nobles stayed on top, older slavery went on in Africa, and Asian merchants kept the Indian Ocean trading.`
      }
    ]
  }
};
