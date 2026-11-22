'use strict';

/**
 * Unit 5 by region: Britain.
 * One continuous story of Britain from 1750 to 1900, told in five sections: why industry began
 * there (KC-5.1.I.A), the factory and the steam engine (KC-5.1.I.C, KC-5.1.I.B, with the railway
 * of KC-5.1.IV and Britain's rising share of KC-5.1.II.B), free trade and the new tools of
 * business (KC-5.1.III.A, KC-5.1.III.B, KC-5.1), the two new classes, women's two lives and the
 * city that could not keep up (KC-5.1.VI.A to C), and the people who pressed for change:
 * abolitionists, Wollstonecraft, unions, Chartists, reformers, Owen and Marx (KC-5.3.I.C,
 * KC-5.3.IV.B, KC-5.1.V.A, KC-5.1.V.D, KC-5.3.IV.A.ii). Facts come from the Topic 5.1, 5.3, 5.4,
 * 5.5, 5.7, 5.8 and 5.9 chapters and their claim ledgers (see docs/UNIT-5-BY-REGION-CLAIM-LEDGER.md),
 * keeping their narrowings: among the factors behind the Industrial Revolution the College Board
 * names seven (an open list, and Britain is not said to have "all seven", since its timber was
 * scarce); "some" capital from slavery; Cromford not the first factory, with machines for the
 * earlier steps only from 1775; Watt did not invent the steam engine; "partly" Smith's ideas;
 * crime charged, not crime counted; women servants "about one in three". Left out on purpose:
 * Britain's empire, which is Unit 6, and Ireland beyond the famine of 1845.
 *
 * Plain-language and accuracy pass (2026-11-21, after the Unit 5 five-persona baseline): one idea
 * per sentence and per paragraph, and definitions in parentheses or their own sentence, never
 * between commas. Every College Board quotation moved out of the story into one "What the College
 * Board says" box per section: an "In short" sentence, then each Key Concept sentence whole and
 * word for word from scripts/lib/ced-source/unit-5.js, then each illustrative example labelled "An
 * optional College Board example". The seven factors are explained one by one in the story and
 * numbered in the section 01 box. Corn Laws chronology as Topic 5.7 (the 1815 ban, a sliding tariff
 * from 1828, repeal voted in 1846 with the duty cut in steps to 1849). The crime box restores Topic
 * 5.9's logic (the figures count people charged). Added "The story in short" (inShort) and six
 * closing cards in the fixed order. Cut to bring the chapter near its reading time: the enclosure
 * act count, Manchester's 1801 figure, the yarn price, coal tonnages, Jevons, Bridgewater's canal,
 * the ban on skilled workers leaving, the London railway share boom, Lever's dates before 1929,
 * the 1833 mill survey, Snow's map, Manchester's life expectancy, the Trades Union Congress and
 * the 1871 union law, the Chartists' signatures, Bazalgette's sewers, and Marx's years in London.
 *
 * Review pass 2 (2026-11-22, reviewer M): the 1869 crossing is the steamship average, about 14 days,
 * and the 1853 figure an all-ship average (Hatton, IZA DP 16274, 2023, Tables 1 and 2). KC-5.1.I.B
 * and KC-5.1.II.B are quoted whole: Benz's oil-burning engine of 1886 (his patent, DRP 37435,
 * January 1886; also told in the Europe chapter) teaches the internal combustion engine and oil, and
 * India's falling share (Bairoch 1982, as the South and Southeast Asia chapter) teaches the second
 * sentence. The Political card names the vote for Parliament; the Municipal Franchise Act of 1869
 * let some women (unmarried ratepayers) vote in town elections.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-britain',
  slug: 'region-5-britain',
  unit: '5',
  region: 'Britain',
  titleHtml: '<em>Britain</em>',
  deck: `From 1750 to 1900, Britain became the world's first industrial country. Read why it happened there and what factories changed. Then see how Britain chose free trade, who did the work, and who pushed back.`,
  inShort: [
    `Britain had a strong mix of the causes of industry: water, coal, food, towns, laws, cotton and money.`,
    `Factories brought workers to machines, and steam engines let the machines run on coal.`,
    `Britain chose free trade, and new laws let many people invest in one company.`,
    `Industry made new classes, split women's lives by class, and crowded cities full of disease.`,
    `Reformers ended the slave trade, workers organized, and Parliament passed reforms step by step.`
  ],
  topics: ['5.1', '5.3', '5.4', '5.5', '5.7', '5.8', '5.9', '5.10'],
  ced: [
    'KC-5.1.I.A',
    'KC-5.1.I.B',
    'KC-5.1.I.C',
    'KC-5.1.II.B',
    'KC-5.1.III.A',
    'KC-5.1.III.B',
    'KC-5.1',
    'KC-5.1.IV',
    'KC-5.1.V.A',
    'KC-5.1.V.D',
    'KC-5.1.VI.A',
    'KC-5.1.VI.B',
    'KC-5.1.VI.C',
    'KC-5.3.I.C',
    'KC-5.3.IV.A.ii',
    'KC-5.3.IV.B'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'why-britain',
      num: '01',
      accent: 'gold',
      name: 'Why Britain First',
      navLabel: 'Why Britain',
      dates: '1700s to 1801 &nbsp;·&nbsp; Coal, water, food, law, cotton, and money',
      thesis: `In 1750 almost everything in Britain was made by hand, as it was everywhere. Then Britain found a new way of making things. Its land and its people gave it the right mix of causes first.`,
      parts: [
        {
          heading: 'Made by hand',
          blocks: [
            { p: `In 1750 most cloth in Britain was made in homes. A merchant brought raw wool or cotton to country families. They spun and wove it, and he paid them for each piece. This was the <span class="kt">putting-out system</span>. Britain then made under 2 percent of the world's manufactured goods, by one historian's estimate. Much of the world's cotton cloth came from India, as <a href="#r5-south-southeast-asia-cloth">the South and Southeast Asia chapter</a> tells.` },
            { p: `Then came the <span class="kt">Industrial Revolution</span>: the change from making goods by hand to making them by machine. Among its causes, the College Board names seven. Two came from the land, and five were built by people.` }
          ]
        },
        {
          heading: 'What the land gave',
          blocks: [
            { p: `The first factor is water. Coal and iron are heavy, and in the 1700s a boat moved them far more cheaply than a cart. Britain had a long coast and rivers boats could use. Where there was no river, people dug a <span class="kt">canal</span> (a waterway dug by hand).` },
            { p: `The second factor is where coal, iron and timber (wood) were found. By the 1600s most of Britain's old forests had been cut down, so wood was expensive. But Britain had huge beds of coal, much of it near rivers or the sea, so Britons burned coal instead. Historians argue how much the wood shortage caused this switch.` },
            { p: `In <span class="num">1709</span> Abraham Darby made iron with <span class="kt">coke</span> (a fuel made by baking coal). Before, ironmakers had used charcoal made from wood.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give coal as the only cause. Coal is part of one of the seven factors, and China had coal too. Say what coal made cheaper, and name other factors that made it worth using.`
            } }
          ]
        },
        {
          heading: 'What people built',
          blocks: [
            { p: `Another factor is better farming. Farmers planted turnips and clover in place of leaving fields empty to rest, so the same land grew more food. Landowners also fenced shared village fields into private farms. This was <span class="kt">enclosure</span>. Historians still argue how much it added to the harvest.` },
            { p: `Another factor is <span class="kt">urbanization</span> (the growth of towns). Larger harvests helped feed more people: about 8 million in <span class="num">1761</span> and about 10.5 million in <span class="num">1801</span>. A smaller share of them farmed, and many moved to towns. Manchester had about 23,000 people in <span class="num">1773</span>.` },
            { p: `Another factor is the legal protection of private property. Owners could count on the law to protect what they owned and earned. A law of <span class="num">1624</span> banned most monopolies but still let the crown give an inventor a <span class="kt">patent</span>. A patent was the sole right to use a new invention, for up to fourteen years. In <span class="num">1769</span> Richard Arkwright patented a spinning machine.` },
            { p: `Another factor is resources from abroad. Cotton does not grow in Britain. By the 1780s most of the cotton spun in Manchester was grown by enslaved people in the Caribbean and South America. After the 1790s, more and more came from the United States.` },
            { p: `The last factor is <span class="kt">capital</span>: money used to build something that makes more money. Merchants and landowners had saved money from trade. Part of that trade was in enslaved people and the sugar they grew. Some savers were ready to risk their money on mills.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the slave trade paid for the whole Industrial Revolution. Historians still argue how much capital came from slavery, so say "some" or "part." They agree that most of the cotton was grown by enslaved people.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: several causes came together to start the Industrial Revolution.`,
                `<a href="#chapter-t5-3">Topic 5.3</a>: "A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including:" the seven below.`,
                `1. "Proximity to waterways; access to rivers and canals": boats carry heavy goods cheaply.`,
                `2. "Geographical distribution of coal, iron, and timber": where these were found.`,
                `3. "Urbanization": the growth of towns.`,
                `4. "Improved agricultural productivity": more food from the same land.`,
                `5. "Legal protection of private property": laws that protect what people own, including new inventions.`,
                `6. "Access to foreign resources": goods from abroad, such as cotton.`,
                `7. "Accumulation of capital": saved money ready to invest.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Putting-out system', `Making goods at home for a merchant, who pays for each piece.`],
        ['Enclosure', `Fencing shared village fields into private farms.`],
        ['Capital', `Money used to build something that makes more money.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'factory',
      num: '02',
      accent: 'rust',
      name: 'The Factory and the Engine',
      navLabel: 'Factory and steam',
      dates: '1712 to 1860 &nbsp;·&nbsp; Cromford, Watt, coal, and the railway',
      thesis: `The factory brought workers to the machines and gave each one a small job. Then the steam engine let factories run on coal. Britain became the world's workshop.`,
      parts: [
        {
          heading: 'One place, one job each',
          blocks: [
            { p: `In <span class="num">1771</span> Arkwright and his partners built a cotton-spinning mill at Cromford, turned by a water wheel. Everyone came to one building, at the hours the mill set, under an overseer. Most workers were women and children, some as young as seven. This was the <span class="kt">factory system</span>.` },
            { p: `Inside, the work was split into steps. Workers cleaned the raw cotton. Then it was combed straight, drawn out, twisted and spun into thread. Cromford began with spinning machines only. In <span class="num">1775</span> Arkwright patented machines for the earlier steps. After that, every step except cleaning had its own machine.` },
            { p: `Each machine was tended by workers who did that one job and no other. This is <span class="kt">specialization of labor</span>. Adam Smith showed why it mattered. In <span class="num">1776</span> he described ten men who split up the steps of making pins. Together they could make "upwards of forty-eight thousand pins in a day" (<a href="#chapter-t5-3">Topic 5.3</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not call Cromford the first factory. A silk mill at Derby had some of the same features in the 1720s. And steam did not start the factory system: Cromford ran on water.`
            } }
          ]
        },
        {
          heading: 'Steam and coal',
          blocks: [
            { p: `The steam engine began as a pump. In <span class="num">1712</span> Thomas Newcomen used one to pump water out of a coal mine, but it burned a lot of coal. James Watt found how to save most of it, and patented his idea in <span class="num">1769</span>. In the 1780s Watt and Matthew Boulton built engines that turned a wheel.` },
            { p: `Now a mill did not need a fast river. It could run on coal, and cotton mills crowded into towns such as Manchester (<a href="#chapter-t5-5">Topic 5.5</a>). Engines needed coal, and mines needed engines to pump them dry, so each made the other grow.` },
            { p: `Later, a new kind of engine used oil. In <span class="num">1886</span> Carl Benz in Germany patented a car whose engine burned a fuel made from oil. It was an <span class="kt">internal combustion engine</span>, which burns its fuel inside the engine. <a href="#r5-europe-industry">The Europe chapter</a> tells that story. Coal and oil are called fossil fuels. Machines that burned them gave people far more energy than ever before. This change is the <span class="kt">fossil fuels revolution</span>.` },
            { p: `In <span class="num">1830</span> the Liverpool and Manchester Railway opened, the first railway between two cities. Steam locomotives carried cotton from the port to the mills.` },
            { p: `Steam also crossed oceans. In <span class="num">1853</span> emigrant ships from Liverpool to New York still used sails, and the average voyage took more than 40 days. By <span class="num">1869</span> almost all went by steam. A steamship made it in about 14 days. From <span class="num">1866</span> telegraph cables under the Atlantic carried messages in minutes. Goods, people and news now moved farther and faster than ever before (<a href="#chapter-t5-10">Topic 5.10</a>).` }
          ]
        },
        {
          heading: 'The workshop of the world',
          blocks: [
            { p: `Machines made goods faster and more cheaply than hands could. The historian Paul Bairoch estimated Britain's share of the world's manufactured goods. It rose from under 2 percent in <span class="num">1750</span> to about a fifth by <span class="num">1860</span> (<a href="#chapter-t5-4">Topic 5.4</a>). These are rough estimates, good for showing the size of the change.` },
            { p: `India and the Middle East kept making goods, but their shares of the world's total fell. By Bairoch's estimates, India's share fell from about a quarter in <span class="num">1750</span> to under 2 percent by <span class="num">1900</span>. <a href="#r5-south-southeast-asia-rails">The South and Southeast Asia chapter</a> tells that story.` },
            { p: `Until <span class="num">1824</span> Britain banned skilled textile workers from leaving the country. But the methods left anyway, as <a href="#r5-europe-industry">the Europe chapter</a> tells.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: factories and steam power made Britain the world's leading maker, while Asian and Middle Eastern makers kept working but lost share.`,
                `<a href="#chapter-t5-3">Topic 5.3</a>: "The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration."`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Factory system', `Bringing workers and machines together in one building.`],
        ['Specialization of labor', `Each worker doing one step of a job over and over.`],
        ['Fossil fuels revolution', `The great rise in energy from coal and, later, oil.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'free-trade',
      num: '03',
      accent: 'iron',
      name: 'Free Trade and Big Business',
      navLabel: 'Free trade',
      dates: '1776 to 1900 &nbsp;·&nbsp; Smith, the Corn Laws, and limited liability',
      thesis: `Britain gave up its old trade rules for free trade, partly persuaded by Adam Smith. New laws let many people invest in one company. Goods grew cheaper, but life got better slowly, and not for everyone.`,
      parts: [
        {
          heading: 'Smith against the old rules',
          blocks: [
            { p: `Under <span class="kt">mercantilism</span>, a country tried to grow strong by selling more than it bought. Governments controlled trade with <span class="kt">tariffs</span> (taxes on imported goods), bans and monopolies. A monopoly is the sole right to a trade.` },
            { p: `In <span class="num">1776</span> the Scottish thinker Adam Smith attacked this system in The Wealth of Nations. "The tailor does not attempt to make his own shoes, but buys them of the shoemaker," he wrote. A country, he argued, should also buy what others make more cheaply.` },
            { p: `Later writers called ideas like Smith's <span class="kt">laissez-faire</span> (French for roughly "let them do it"). It means letting people trade freely. It fits <span class="kt">capitalism</span>, where private owners run businesses for profit. Smith still wanted government to defend the country and run the courts (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: 'The Corn Laws',
          blocks: [
            { p: `Britain's <span class="kt">Corn Laws</span> kept cheap foreign grain out. ("Corn" meant grain.) A law of <span class="num">1815</span> banned foreign wheat until British prices were very high. From <span class="num">1828</span> a sliding tariff replaced the ban. The tax was highest when British prices were low.` },
            { p: `High grain prices kept landowners' rents high, and landowners filled <span class="kt">Parliament</span> (Britain's lawmaking assembly). In <span class="num">1838</span> Manchester's factory owners and merchants began the Anti-Corn Law League. Cheap bread, they said, would help workers. Many workers who wanted the vote feared it would only let employers pay lower wages.` },
            { p: `In <span class="num">1845</span> disease destroyed much of Ireland's potato crop, and famine began. Prime Minister Robert Peel decided the Corn Laws must go. In <span class="num">1846</span> Parliament voted to repeal (end) them, and the grain tax fell in steps until <span class="num">1849</span>. By <span class="num">1860</span> Britain had also ended its tariffs on imported factory goods. It had chosen <span class="kt">free trade</span>.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: "partly"',
              html: `Manufacturers who wanted cheap food and open markets paid for the League. The Irish famine helped decide Peel. Ideas, interests and a crisis worked together, so Smith's ideas were only part of the cause.`
            } }
          ]
        },
        {
          heading: 'New tools for business',
          blocks: [
            { p: `Most businesses belonged to a family or a few partners. If a partnership failed, each partner could lose his house to pay its debts. Railways cost far more, so each railway company needed its own act of Parliament to raise money from many investors.` },
            { p: `Investors bought <span class="kt">shares</span>. A share is a small part of a company, and its owner gets part of the profits. People traded shares on the London <span class="kt">stock exchange</span> (a market for shares). A law of <span class="num">1855</span> gave larger companies <span class="kt">limited liability</span>: an owner could lose only the money he put in, not his house. From <span class="num">1856</span> almost any group of seven or more people could form such a company.` },
            { p: `In <span class="num">1884</span> William Lever began selling Sunlight Soap, made with oils from tropical plants. By <span class="num">1886</span> he had registered the Sunlight name in the United States. In the late 1890s his company, Lever Brothers, opened soap works in Australia and the United States. It had become <span class="kt">transnational</span>: it worked across the borders of many countries. In <span class="num">1929</span> it joined Dutch firms to form Unilever.` }
          ]
        },
        {
          heading: 'Cheaper goods, for some',
          blocks: [
            { p: `Factory goods kept getting cheaper. But did working families live better? A family's <span class="kt">standard of living</span> is how well it lives. One careful estimate finds that working families' standard rose by less than 15 percent from the 1780s to the 1850s. Most historians agree it grew much faster from about <span class="num">1860</span> to <span class="num">1900</span>.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Britain chose free trade, big companies grew, and goods got cheaper, but life improved only for some.`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets."`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance."`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods."`,
                `An optional College Board example: "Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo".`,
                `An optional College Board example: "Limited-liability corporations".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Mercantilism', `Making a country strong by controlling trade and selling more than it buys.`],
        ['Corn Laws', `British laws that kept out foreign grain: a ban from 1815, a sliding tariff from 1828, repealed in 1846.`],
        ['Limited liability', `A rule that owners can lose only the money they put in.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'classes',
      num: '04',
      accent: 'oxide',
      name: 'New Classes, Crowded Cities',
      navLabel: 'Classes and cities',
      dates: '1832 to 1900 &nbsp;·&nbsp; Two classes, two lives for women, one city',
      thesis: `Industry made a middle class and a working class bigger than ever. It split women's lives by class. And it packed people into towns faster than anyone could build homes and sewers.`,
      parts: [
        {
          heading: 'Two new classes, and the old one',
          blocks: [
            { p: `The <span class="kt">middle class</span> ran from factory owners and bankers to doctors and clerks. Their place came from money and education, not land or titles. In <span class="num">1832</span> the Reform Act gave the vote to most middle-class men in the towns. The <span class="kt">industrial working class</span> owned no land or tools. They lived on wages, at the hours the employer set.` },
            { p: `The old landed families kept their land, titles and much of their power. From <span class="num">1895</span> to <span class="num">1902</span> the prime minister was Lord Salisbury. He was a great landowner.` }
          ]
        },
        {
          heading: 'Women\'s two lives',
          blocks: [
            { p: `In working-class families one wage was rarely enough, so women and often children earned too. Many worked in mills. Even more worked as servants in other people's houses. The <span class="kt">census</span> of <span class="num">1851</span> (the government's count of the people) shows that about one in three women with a recorded job was a servant.` },
            { p: `In middle-class families the husband's pay was enough. The wife was more and more expected to stay home, run the house and raise the children. Historians call this ideal <span class="kt">separate spheres</span>. Isabella Beeton's best-selling book of <span class="num">1861</span> compared the mistress of a house to "the commander of an army." Such a household ran on servants, most of them working-class women.` }
          ]
        },
        {
          heading: 'A city that could not keep up',
          blocks: [
            { p: `Manchester had more than 300,000 people by <span class="num">1851</span>. That year, for the first time, more than half the people of England and Wales lived in towns. Whole families lived in one room or a damp cellar, and many wages barely paid the rent. Streets had no sewers or clean water. In <span class="num">1845</span> Friedrich Engels called Manchester's river Irk "coal-black, foul-smelling".` },
            { p: `<span class="kt">Cholera</span> is a disease spread by dirty water. In <span class="num">1848</span> and <span class="num">1849</span> about 53,000 cholera deaths were recorded in England and Wales. In <span class="num">1849</span> the doctor John Snow argued that dirty water carried it. In <span class="num">1854</span> he traced a London outbreak to one water pump, but many doctors were not persuaded for years (<a href="#chapter-t5-9">Topic 5.9</a>).` },
            { note: {
              kind: 'howknow',
              label: 'How we know: counting crime',
              html: `Charges for serious crimes in England and Wales peaked in hard years such as <span class="num">1842</span> and <span class="num">1848</span>, then fell. These figures count people charged, not crimes done, and new police forces charged more people. You may write "increased crime," but say how it was measured.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: industry made new classes, split women's lives by class, and grew cities faster than they could cope.`,
                `<a href="#chapter-t5-9">Topic 5.9</a>: "New social classes, including the middle class and the industrial working class, developed."`,
                `<a href="#chapter-t5-9">Topic 5.9</a>: "While women and often children in working class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development."`,
                `<a href="#chapter-t5-9">Topic 5.9</a>: "The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Middle class', `Owners, professionals and clerks, whose rank came from money and education.`],
        ['Industrial working class', `People with no land or tools who lived on wages.`],
        ['Separate spheres', `The idea that men belonged at work and women at home.`]
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'calls',
      num: '05',
      accent: 'gold',
      name: 'The People Who Pushed Back',
      navLabel: 'Calls for change',
      dates: '1787 to 1906 &nbsp;·&nbsp; Abolitionists, Chartists, reformers, Owen and Marx',
      thesis: `Faith and new ideas about rights pushed reformers to end the slave trade. Workers organized, and Parliament passed reforms. Two German writers predicted a workers' revolution in a book printed in London. It never came to Britain.`,
      parts: [
        {
          heading: 'Abolition and Wollstonecraft',
          blocks: [
            { p: `In <span class="num">1787</span> twelve men in London founded a society to end the slave trade. Nine were <span class="kt">Quakers</span> (members of a Christian group that had come to see slavery as a sin). Britain banned the slave trade in <span class="num">1807</span>. In <span class="num">1834</span> it began ending slavery in most of its empire, though freed people had to keep working for their former owners, unpaid, until <span class="num">1838</span> (<a href="#chapter-t5-1">Topic 5.1</a>).` },
            { p: `In <span class="num">1792</span> Mary Wollstonecraft published A Vindication of the Rights of Woman. Women can reason, she argued, so they must be educated. "I do not wish them to have power over men; but over themselves," she wrote. She asked mostly for education and independence. She also wrote, briefly, that women "ought to have representatives" in government. Her book is early <span class="kt">feminism</span> (the belief that women should have equal rights).` }
          ]
        },
        {
          heading: 'Workers organize',
          blocks: [
            { p: `Laws of <span class="num">1799</span> and <span class="num">1800</span> banned workers from joining together to demand higher wages. Parliament repealed them in <span class="num">1824</span>, but a law of <span class="num">1825</span> limited what workers' groups could do. By the 1850s skilled workers had built lasting national <span class="kt">labor unions</span> (groups of workers who bargain with employers together).` },
            { p: `Workers also wanted <span class="kt">suffrage</span> (the right to vote). In <span class="num">1838</span> the <span class="kt">Chartists</span> demanded a vote for every man over 21 and a secret ballot. Parliament rejected their petitions, but five of their six points later became law. In <span class="num">1906</span> a committee of unions and socialists won 29 seats and became the Labour Party (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        },
        {
          heading: 'Reformers and Parliament',
          blocks: [
            { p: `Parliament passed four kinds of reform. Political: Reform Acts in <span class="num">1867</span> and <span class="num">1884</span> gave many working men the vote, though no woman could vote for Parliament. Social: the Factory Act of <span class="num">1833</span> banned children under nine from most textile mills. Educational: from <span class="num">1870</span>, elected school boards built elementary schools. Urban: after the Thames's "Great Stink" of <span class="num">1858</span>, London built new sewers.` },
            { p: `Robert Owen ran cotton mills in Scotland. He shortened hours and opened a school for workers' children. His followers called their ideas <span class="kt">socialism</span>: land and factories owned in common. In <span class="num">1848</span> Karl Marx and Friedrich Engels printed the Communist Manifesto in London. It predicted that workers would overthrow the owners and build <span class="kt">communism</span> (a society without classes).` },
            { p: `No workers' revolution came to Britain. Workers won unions, votes and laws instead. <a href="#r5-europe-workers">The Europe chapter</a> tells how Marx's ideas built a mass party in Germany.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Chartists won nothing. Parliament rejected their petitions, but five of their six points later became law.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: reformers fought slavery and asked for rights, workers organized, and new ideas such as socialism spread.`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies."`,
                `An optional College Board example: "Mary Wollstonecraft’s A Vindication of the Rights of Woman".`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society."`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms."`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Chartists', `A British workers' movement, from 1838, that demanded the vote for every man.`],
        ['Socialism', `The idea that land and factories should be owned and run in common.`]
      ]
    }
  ],

  closing: {
    heading: 'Britain at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `Among the causes of the Industrial Revolution, the College Board names seven. Using this chapter, argue which one or two did the most to make Britain the first industrial country. Explain how they worked with at least one other factor.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Britain widened the vote for Parliament in steps, and only for men.',
        body: `The Reform Act of 1832 gave the vote to most middle-class men in the towns. Acts of 1867 and 1884 gave it to many working men, but no woman could vote for Parliament by 1900. From 1869 some women could vote in town elections.`
      },
      {
        category: 'Religious',
        title: 'Religious faith, with new ideas about rights, drove the fight against the slave trade.',
        body: `Nine of the twelve founders of the 1787 antislavery society were Quakers. Britain banned the slave trade in 1807 and began ending slavery in 1834.`
      },
      {
        category: 'Social',
        title: 'Industry made new classes and split women\'s lives by class.',
        body: `In 1851 about one in three women with a recorded job was a servant. Middle-class wives were expected to stay home, as Beeton's book of 1861 shows.`
      },
      {
        category: 'Intellectual',
        title: 'New ideas questioned how trade and society should work.',
        body: `Adam Smith attacked the old trade rules in 1776, and Mary Wollstonecraft argued for women's education in 1792. Marx and Engels printed the Communist Manifesto in London in 1848.`
      },
      {
        category: 'Technological',
        title: 'Machines and steam changed how goods were made and moved.',
        body: `Arkwright's water-powered mill at Cromford opened in 1771. From the 1780s Watt's engines let mills run on coal, and the first railway between two cities opened in 1830.`
      },
      {
        category: 'Economic',
        title: 'Britain became the world\'s workshop and chose free trade.',
        body: `By Bairoch's estimates, Britain's share of world manufacturing rose from under 2 percent in 1750 to about a fifth by 1860. Parliament voted to repeal the Corn Laws in 1846.`
      }
    ]
  }
};
