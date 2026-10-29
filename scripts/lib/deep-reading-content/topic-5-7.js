'use strict';

/**
 * Topic 5.7, Economic Developments and Innovations in the Industrial Age: the
 * deep reading.
 *
 * Why this exists. The CED gives 5.7 one learning objective, the development
 * of economic systems, ideologies and institutions and how they contributed to
 * change from 1750 to 1900, three Key Concepts (KC-5.1.III.A, Western European
 * countries began abandoning mercantilism and adopting free trade, partly in
 * response to Adam Smith's ideas; KC-5.1.III.B, global trade and production
 * contributed to large transnational businesses that relied on new practices
 * in banking and finance, with HSBC, Unilever, stock markets and
 * limited-liability corporations as examples; KC-5.1, industrial capitalism
 * raised living standards for some and made consumer goods more available,
 * affordable and varied), a reasoning process of Continuity and Change and the
 * skill 5.B, relating one development to another. The First & 10 tells the
 * story in one pass. What it has no room for is Smith's own argument at more
 * length, how the fight over the Corn Laws was won, how limited liability and
 * stock markets actually worked, and how historians measure "for some."
 *
 * Rebuilt from the 5.7 story (docs/TOPIC-5-7-STORY-DRAFT.md) on 2026-10-29.
 * The old chapter, "Somebody Else Carries the Risk," spent its last part on
 * debts, informal empire, the Ottoman Public Debt Administration and the
 * treaty ports, which belong to Topic 6.5, and taught nothing on KC-5.1.
 *
 * Three things carried deliberately:
 *
 *   1. A before, an after and a "what carried on" for each of the three Key
 *      Concepts, so the chapter is Continuity and Change throughout.
 *   2. The CED's "partly" and "for some," each given its evidence.
 *   3. The CED's four examples, with Unilever dated honestly: the company
 *      was formed in 1929, out of businesses that grew in this period.
 */

module.exports = {
  topicKey: 't5-7',
  slug: 'topic-5-7-economic-developments-and-innovations',
  sourceFile: 'deep-reading-topic-5-7-economic-developments-and-innovations.html',
  lessonFile: 'lesson-5-7-economic-developments-and-innovations.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.7: Freer Trade, Bigger Business',
  eyebrow: 'Topic 5.7 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Freer Trade, <em>Bigger Business</em>',
  deck: `Factories made more goods than ever. Between 1750 and 1900, three things changed around them: the rules of trade, the shape of business, and the goods people could buy. This chapter follows all three, and in each one asks what changed, what carried on, and how one change relates to another.`,
  meta: ['Five sections', 'The old rules, free trade, new tools for business, businesses across borders, cheaper goods', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.7 &nbsp;·&nbsp; Freer Trade, Bigger Business &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain how economic systems, ideas and institutions developed between 1750 and 1900, and how they contributed to change. That is a continuity and change question, and its skill asks you to connect one development to another. Sections 01 and 02 follow the rules of trade; sections 03 and 04 follow business; section 05 follows the goods people could buy. For each, write a before, an after and one thing that carried on, then use the closing section to connect them.`,
    steps: [
      `<b>01 The old rules:</b> mercantilism, and Adam Smith's argument against it.`,
      `<b>02 Britain chooses free trade:</b> the Corn Laws, 1846, and who followed.`,
      `<b>03 New tools for business:</b> limited liability, stock markets and banks.`,
      `<b>04 Businesses across borders:</b> HSBC, Lever's soap and the Dutch margarine makers.`,
      `<b>05 Cheaper goods, for some:</b> what people could buy, and who gained.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'old-rules',
      num: '01',
      accent: 'gold',
      name: 'The Old Rules and a New Argument',
      navLabel: 'The old rules',
      dates: 'Around 1750 to 1776 &nbsp;·&nbsp; Mercantilism and Adam Smith',
      thesis: `Under mercantilism, governments controlled trade with tariffs, bans and monopolies. In 1776 Adam Smith argued that a country, like a sensible family, should buy what others make more cheaply.`,
      parts: [
        {
          heading: 'Trade as a contest',
          blocks: [
            { p: `In Topic 4.5 you met <span class="kt">mercantilism</span>, the idea that a kingdom grew strong by selling more to other countries than it bought from them, and by keeping its colonies' trade for itself. Governments acted on it. They put <span class="kt">tariffs</span>, taxes on imported goods, on foreign products; they banned some goods completely; and they gave chartered companies the sole right to trade in a region. Britain's East India Company held the sole right to carry on British trade with Asia.` },
            { p: `To a mercantilist, trade was a contest. If another country sold more to you than it bought, it was winning and you were losing.` }
          ]
        },
        {
          heading: 'The tailor and the shoemaker',
          blocks: [
            { p: `In <span class="num">1776</span> Adam Smith, a Scottish professor, published <em>An Inquiry into the Nature and Causes of the Wealth of Nations</em>. You met the book's pin workshop in Topic 5.3. Much of the rest of it is an attack on what Smith called "the mercantile system."` },
            { p: `Smith started from an ordinary household. "It is the maxim of every prudent master of a family, never to attempt to make at home what it will cost him more to make than to buy. The tailor does not attempt to make his own shoes, but buys them of the shoemaker." What is sensible for a family, he went on, "can scarce be folly in that of a great kingdom. If a foreign country can supply us with a commodity cheaper than we ourselves can make it, better buy it of them."` },
            { p: `Tariffs and bans, Smith argued, made ordinary buyers pay more so that a few producers could profit. "Consumption is the sole end and purpose of all production," he wrote, but "in the mercantile system, the interest of the consumer is almost constantly sacrificed to that of the producer."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: Smith did not say "do nothing"',
              html: `Later writers used the French phrase <span class="kt">laissez-faire</span>, roughly "let them do it," for ideas like Smith's. The phrase is not in his book. And Smith did not want government to do nothing: he wrote that the ruler has "three duties," defense, "an exact administration of justice," and "erecting and maintaining certain public works, and certain public institutions" that no private person would build.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Start with the before. <em>Name one way governments controlled trade around 1750, then name Smith's argument against it.</em>`,
        limit: `Smith's book did not change the rules by itself. The rules changed decades later, and for more than one reason (section 02).`,
        comparison: `Against Topic 5.3: there, Smith's pins showed specialization inside a workshop; here, the same idea is applied to whole countries.`
      },
      terms: [
        ['Mercantilism', 'The idea that a country grows strong by selling more than it buys and controlling its trade.'],
        ['Tariff', 'A tax on goods brought in from another country.'],
        ['Laissez-faire', 'A French phrase, roughly "let them do it": the idea that government should let people trade freely.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'free-trade',
      num: '02',
      accent: 'iron',
      name: 'Britain Chooses Free Trade',
      navLabel: 'Free trade',
      dates: '1815 to 1879 &nbsp;·&nbsp; The Corn Laws and after',
      thesis: `Britain repealed its Corn Laws in 1846 and ended its tariffs on factory goods by 1860, partly persuaded by Smith's ideas. Much of Western Europe followed in the 1860s, but not every country, and not for good.`,
      parts: [
        {
          heading: 'Bread and rents',
          blocks: [
            { p: `Britain's Corn Laws, passed in <span class="num">1815</span>, put a tariff on imported grain ("corn" meant grain). They kept grain prices high, which kept the rents of Britain's landowners high, and landowners filled Parliament.` },
            { p: `In <span class="num">1838</span> factory owners and merchants in Manchester started a campaign that became the Anti-Corn Law League, led by Richard Cobden and John Bright. It held meetings, printed pamphlets and raised money across the country. Cheap bread, its speakers said, would help workers; and countries that sold their grain to Britain would have money to buy British cloth.` },
            { p: `Not every worker trusted them. Many Chartists, members of the workers' movement for the vote, argued that high prices meant high wages, so when manufacturers cried "cheap bread," they meant "cheap labour."` }
          ]
        },
        {
          heading: 'Famine and repeal',
          blocks: [
            { p: `In <span class="num">1845</span> a disease destroyed much of Ireland's potato crop, and famine began. Prime Minister Robert Peel, who had once defended the Corn Laws, decided they had to go. His bill cut the tariff on grain step by step until February 1849, leaving only a small duty after that. In <span class="num">1846</span> Parliament passed it, but most of Peel's own party voted against him, and the party split.` },
            { p: `Britain kept going. By <span class="num">1860</span> it had ended its tariffs on imported factory goods, keeping a few taxes, such as those on tea, sugar and wine, mainly to raise money. Britain had become a free trade country.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: "partly"',
              html: `The College Board says Western European countries adopted free trade "partly in response" to Smith's ideas. The history shows why "partly" is the right word: the League's campaign was paid for by manufacturers who wanted cheap food and open markets, and the historian Charles Read notes that the Irish famine "contributed to Peel's decision." Ideas, interests and a crisis worked together.`
            } }
          ]
        },
        {
          heading: 'Others follow, for a while',
          blocks: [
            { p: `In <span class="num">1860</span> Britain and France signed the Cobden-Chevalier Treaty, cutting tariffs on each other's goods. In the 1860s a chain of similar treaties lowered tariffs across much of Western Europe.` },
            { p: `Then some countries turned back. From <span class="num">1879</span> Germany put tariffs back on imported grain and iron, to protect its farmers and its factories after cheap grain from America drove prices down. The United States kept high tariffs on factory goods from the Civil War to the end of the century. Britain stayed with free trade.` }
          ]
        }
      ],
      useThis: {
        tool: `Give the change, and its limits. <em>Name the change (Britain's repeal, 1846) and one thing that carried on (Germany's tariffs from 1879, or America's).</em>`,
        limit: `"Began abandoning" is the College Board's phrase: free trade spread, then partly retreated.`,
        comparison: `Against section 01: Smith's argument came in 1776; Britain's rules changed in 1846 and 1860. Ideas took decades to become laws.`
      },
      terms: [
        ['Free trade', 'A policy of letting goods cross a country\'s borders without heavy tariffs.'],
        ['Repeal', 'To cancel a law.'],
        ['Protection', 'Using tariffs to shield a country\'s own producers from foreign competition.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'new-tools',
      num: '03',
      accent: 'sage',
      name: 'New Tools for Business',
      navLabel: 'New tools',
      dates: '1720 to the 1880s &nbsp;·&nbsp; Limited liability, stock markets, banks',
      thesis: `Industry needed more money than a family had. Limited liability, stock markets and banks let many people invest in one business, with less to lose.`,
      parts: [
        {
          heading: 'The old way',
          blocks: [
            { p: `Companies that sold shares were not new. The Dutch East India Company (VOC) sold shares in <span class="num">1602</span> (Topic 4.5), and people bought and sold them in Amsterdam. But from <span class="num">1720</span> to <span class="num">1825</span>, forming such a company in Britain usually took special permission from the government: a royal charter or an act of Parliament. Most businesses belonged to one family or a few partners, as Richard Arkwright's mill at Cromford did (Topic 5.3). If a partnership failed, each partner could lose his house and savings to pay its debts.` }
          ]
        },
        {
          heading: 'Limited liability',
          blocks: [
            { p: `A railway or a steamship line cost more than any few partners could pay. Laws of <span class="num">1855</span> and <span class="num">1856</span> let almost any group of seven or more people in Britain register a company whose owners could lose only the money they had put in, not everything they owned. This is <span class="kt">limited liability</span>. France passed similar laws in 1863 and 1867. With less to lose, many more people with modest savings could invest.` }
          ]
        },
        {
          heading: 'Stock markets and banks',
          blocks: [
            { p: `A <span class="kt">stock market</span>, or stock exchange, is where people buy and sell shares. An investor who needed money back could sell shares to someone else, without waiting for the company to close. London had had a stock exchange since the 1700s. In a railway boom in the mid-1840s, crowds of British investors rushed to buy railway shares, and many lost their savings when prices fell. An American print from 1886, "The World's Exchanges," shows the exchanges of eight cities, from New York and Chicago to London, Paris, Berlin, Hamburg, Frankfurt and Brussels.` },
            { p: `Banks did the rest. They lent money to companies, changed one country's money into another's, and paid bills between ports thousands of miles apart.` }
          ]
        }
      ],
      useThis: {
        tool: `Connect a tool to growth. <em>Say how one tool worked (less risk, or an easy way to sell) and what it made possible (more people investing in one company).</em>`,
        limit: `Selling shares was old; what changed was who could form a company, and how little an owner could lose.`,
        comparison: `Against Topic 5.6: there, governments paid for the first factories; here, many private investors do.`
      },
      terms: [
        ['Share', 'A part of a company that a person can own and sell.'],
        ['Limited liability', 'A rule that owners of a company can lose only the money they put in.'],
        ['Stock market', 'A place where people buy and sell shares.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'across-borders',
      num: '04',
      accent: 'gold',
      name: 'Businesses Across Borders',
      navLabel: 'Across borders',
      dates: '1860s to 1929 &nbsp;·&nbsp; HSBC, Lever, Unilever',
      thesis: `As trade and production stretched around the world, some businesses grew to work in many countries at once, relying on banking and finance to do it.`,
      parts: [
        {
          heading: 'A bank for trade with China',
          blocks: [
            { p: `The Hongkong and Shanghai Banking Corporation, today called HSBC, opened in Hong Kong in March <span class="num">1865</span>. It was started by Thomas Sutherland, a Scot who worked there for a shipping company, with a committee of merchant firms, to give local businesses better banking for their trade. It opened in Shanghai a month later and in London that July, to change money for clients in China and India. By <span class="num">1900</span> it worked in 16 countries and territories.` },
            { p: `One of the firms on its first committee, Dent and Company, had grown rich trading opium into China, a trade Britain had forced China to accept by war. How that happened is Unit 6.` }
          ]
        },
        {
          heading: 'Soap and margarine',
          blocks: [
            { p: `In England, William Lever began selling Sunlight Soap in <span class="num">1884</span>, made with oils from tropical plants such as coconut and palm kernels. By <span class="num">1886</span> he had registered the Sunlight name in the United States, and from 1888 he built a factory town for his workers, Port Sunlight. In the Netherlands, the Jurgens and Van den Bergh families of Oss turned butter trading into margarine factories and sold across the North Sea to England.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the dates of Unilever',
              html: `The College Board names Unilever, "based in England and the Netherlands and operating in British West Africa and the Belgian Congo." That company did not exist until <span class="num">1929</span>, when Lever Brothers joined the Dutch margarine makers, who had merged in 1927. Lever's company began its plantations in the Belgian Congo in 1911, where its agents forced Congolese men to work. So Unilever is where these nineteenth-century businesses ended up, not a company of the years this unit covers.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Use the Key Concept's own links. <em>Global trade "contributed to" big transnational businesses, which "relied on" banking and finance: show both links with one business.</em>`,
        limit: `Not every business crossed borders: most were still small and local.`,
        comparison: `Against section 03: HSBC was itself one of the "new practices in banking and finance" that other businesses relied on.`
      },
      terms: [
        ['Transnational business', 'A company that works in more than one country.'],
        ['Brand', 'A name a company puts on its product so buyers know and ask for it.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'cheaper-goods',
      num: '05',
      accent: 'iron',
      name: 'Cheaper Goods, for Some',
      navLabel: 'Cheaper goods',
      dates: '1780s to 1900 &nbsp;·&nbsp; Consumer goods and living standards',
      thesis: `Better factory methods made goods more available, more affordable and more varied, and living standards rose, much faster after about 1860, for some people and not for others.`,
      parts: [
        {
          heading: 'More, cheaper, more kinds',
          blocks: [
            { p: `Factories kept improving how they made things. The economic historian Knick Harley found that the price of cotton cloth "fell impressively" while machines spun the yarn, and "continued to fall thereafter as technology improved in weaving and finishing." Soap that grocers had once cut from long bars came in wrapped bars with a <span class="kt">brand</span> name, like Sunlight, advertised to every household. Ships and railways (Topic 5.5) brought fruit, tea and wheat from far away to city markets.` }
          ]
        },
        {
          heading: 'Who gained',
          blocks: [
            { p: `A family's <span class="kt">standard of living</span> is how well it lives: what it can afford to eat, wear and buy. In Britain, historians who measure what wages could buy find that working families' standard of living rose very little from the 1780s to the 1850s, and much faster from about 1860 to 1900.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: measuring "for some"',
              html: `The economic historian Charles Feinstein estimated that the average working-class family's standard of living rose "by less than 15 percent between the 1780s and 1850s." Most historians agree that real wages, what pay could actually buy, grew much more after 1850. But other measures, such as children's height and how many babies died, look less hopeful up to 1900. Many city workers stayed poor (Topic 5.9), and many of the people who grew the cotton, palm oil and tea did not share the gains (Unit 6).`
            } },
            { p: `Not everyone gained from this new economy, and not everyone accepted it. Workers organized, reformers pushed for new laws, and some thinkers imagined a different system. That is Topic 5.8.` }
          ]
        }
      ],
      useThis: {
        tool: `Use all three words. <em>The College Board says goods became more available, more affordable and more varied: give an example of one.</em>`,
        limit: `"For some" is the College Board's phrase: say who gained and who did not.`,
        comparison: `Against section 02: free trade made imported food cheaper; here, factories made their own goods cheaper.`
      },
      terms: [
        ['Standard of living', 'How well a family lives: what it can afford to eat, wear and buy.'],
        ['Real wages', 'What pay can actually buy, once prices are counted.'],
        ['Consumer goods', 'Things people buy for themselves and their homes.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks how economic systems, ideas and institutions developed and contributed to change, and its skill for this topic is connecting one development to another, so the cards give each row's before and after, and then the connections.`,
    pairs: [
      {
        category: 'Continuity and Change',
        title: 'Trade',
        body: `Evidence to sort into "before," "after" and "carried on": mercantilism, tariffs, bans and monopolies; Smith's Wealth of Nations (1776); the Corn Laws (1815); the Manchester campaign (1838); the Irish famine (1845); repeal (1846); tariffs on factory goods ended by 1860; the Cobden-Chevalier Treaty (1860) and the treaties of the 1860s; Germany's tariffs from 1879; America's high tariffs.`
      },
      {
        category: 'Continuity and Change',
        title: 'Business and goods',
        body: `Evidence to sort: the VOC's shares (1602); the government's permission needed from 1720 to 1825; family partnerships; limited liability (1855 and 1856); France's laws (1863 and 1867); the railway share boom (mid-1840s); "The World's Exchanges" (1886); HSBC (1865); Sunlight Soap (1884), its U.S. trademark (1886), Port Sunlight (1888); Unilever (1929); cheaper cotton cloth; wrapped, branded soap; living standards rising little to the 1850s and faster after about 1860.`
      },
      {
        category: 'Making Connections',
        title: 'How one change relates to another',
        body: `Pairs to explain: free trade and global trade; global trade and HSBC; limited liability and big companies; stock markets and railway building; better factory methods and cheaper cloth; cheaper goods and living standards. For each pair, say whether one caused the other, made it possible, or answered it, with a detail for each side.`
      },
      {
        category: 'Continuity and Change',
        title: 'For some',
        body: `Evidence to weigh: Feinstein's estimate (under 15 percent from the 1780s to the 1850s); real wages rising faster after 1850; height and infant deaths up to 1900; city poverty (Topic 5.9); the people who grew cotton, palm oil and tea (Unit 6); Chartists who said "cheap bread" meant "cheap labour." Decide who gained most, and say why.`
      }
    ]
  }
};
