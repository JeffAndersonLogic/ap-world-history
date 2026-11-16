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
 * 5.5, 5.7 and 5.8 chapters and their claim ledgers, and from the reviewed rebuild of 5.9 on
 * claude/topic-5-10-build (see docs/UNIT-5-BY-REGION-CLAIM-LEDGER.md), keeping their narrowings
 * (coal one cause of seven; "some" capital from slavery; Cromford not the first factory; Watt did
 * not invent the steam engine; "partly" Smith's ideas; crime charged, not crime counted). Left
 * out on purpose: Britain's empire, which is Unit 6, and Ireland beyond the famine of 1845.
 */

module.exports = {
  topicKey: 'r5-britain',
  slug: 'region-5-britain',
  unit: '5',
  region: 'Britain',
  titleHtml: '<em>Britain</em>',
  deck: `From 1750 to 1900, Britain became the first country to make most of its goods by machine. Follow why it happened there, what the factory and the steam engine changed, how Britain chose free trade, who got rich and who did the work, and the people who pushed back.`,
  topics: ['5.1', '5.3', '5.4', '5.5', '5.7', '5.8', '5.9'],
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
      thesis: `In 1750 almost everything in Britain was made by hand, as it was everywhere. Over the next century Britain built a new way of making things, because what its land gave and what its people built came together there first.`,
      parts: [
        {
          heading: 'Made by hand',
          blocks: [
            { p: `In 1750 most thread and cloth in Britain were made in homes. Under the <span class="kt">putting-out system</span>, a merchant brought raw wool or cotton to country families, who spun and wove it on their own wheels and looms, and paid them for each piece. Power came from muscles, horses, wind and water. Britain was not yet a great maker: by one historian's estimate, it made under 2 percent of the world's manufactured goods, and much of the world's cotton cloth came from India (see <a href="#chapter-r5-south-southeast-asia">South and Southeast Asia</a>).` },
            { p: `The College Board lists the factors behind the <span class="kt">Industrial Revolution</span>: "Proximity to waterways; access to rivers and canals," the "Geographical distribution of coal, iron, and timber," "Urbanization," "Improved agricultural productivity," "Legal protection of private property," "Access to foreign resources" and "Accumulation of capital." Britain had all seven (<a href="#chapter-t5-3">Topic 5.3</a>).` }
          ]
        },
        {
          heading: 'What the land gave',
          blocks: [
            { p: `By the 1600s most of Britain's old forests had been cut down, and wood, the old fuel, was expensive. Britain did have huge beds of coal, much of it near the surface and near rivers or the sea, so Britons burned coal instead. In <span class="num">1709</span>, at Coalbrookdale beside the River Severn, Abraham Darby made iron with <span class="kt">coke</span>, a fuel made by baking coal, instead of with charcoal made from wood.` },
            { p: `Coal and iron are heavy, and in the 1700s moving them by water was far cheaper than by cart. Britain had a long coast and rivers boats could use, and people dug <span class="kt">canals</span> where there were none. The Duke of Bridgewater's canal opened in <span class="num">1761</span> from his coal mines at Worsley to the edge of Manchester, and the price of coal in Manchester soon fell by about half.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Britain industrialized because it had coal. Coal was one of seven factors, and China had coal too. Say what coal made cheaper, and name the other factors that made it worth using.`
            } }
          ]
        },
        {
          heading: 'What people built',
          blocks: [
            { p: `British farmers planted turnips and clover instead of leaving fields empty to rest, and landowners fenced the old shared village fields into private farms, a change called <span class="kt">enclosure</span>; Parliament passed more than three thousand enclosure acts between <span class="num">1750</span> and <span class="num">1819</span>. More food fed more people: about 8 million in <span class="num">1761</span>, about 10.5 million in <span class="num">1801</span>. A smaller share of them farmed, and many moved to towns. Manchester grew from about 23,000 people in <span class="num">1773</span> to 70,409 in <span class="num">1801</span>.` },
            { p: `The law protected what an investor built. A law of <span class="num">1624</span> let the crown give an inventor the sole right to use a new invention for up to fourteen years, a <span class="kt">patent</span>, and in <span class="num">1769</span> Richard Arkwright patented a spinning machine. The raw material came from abroad: by the 1780s most of the cotton spun in Manchester was grown by enslaved people on plantations in the Caribbean and South America, and after the 1790s more and more of it came from the United States. And there was <span class="kt">capital</span>, money saved from trade, including the Atlantic trade in enslaved people and the sugar they grew, that merchants and landowners were ready to risk on mills.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the slave trade paid for the Industrial Revolution. Historians still argue about how much of Britain's capital came from slavery, so say "some" or "part." What they agree on is that most of the cotton itself was grown by enslaved people.`
            } }
          ]
        }
      ],
      terms: [
        ['Putting-out system', `Making goods at home: a merchant gives families raw materials and pays them for each piece.`],
        ['Coke', `A fuel made by baking coal, used to make iron from 1709.`],
        ['Enclosure', `Fencing off shared village fields into private farms, often by act of Parliament.`],
        ['Capital', `Money used to build something that makes more money, such as a mill and its machines.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'factory',
      num: '02',
      accent: 'rust',
      name: 'The Factory and the Engine',
      navLabel: 'Factory and steam',
      dates: '1712 to 1900 &nbsp;·&nbsp; Cromford, Watt, coal, and the railway',
      thesis: `The factory brought workers to the machines and gave each worker one small job. The steam engine then let factories run on coal, wherever coal could be carried, and Britain became the world's workshop.`,
      parts: [
        {
          heading: 'One place, one job each',
          blocks: [
            { p: `In <span class="num">1771</span> Arkwright and his partners built a cotton-spinning mill at Cromford, in Derbyshire, turned by a water wheel. It did not send cotton out to spinners' homes. Everyone came to one building, at the hours the mill set, under the eye of an overseer, and most of the workers were women and children, some as young as seven. This was the <span class="kt">factory system</span>. In the College Board's words, it "concentrated production in a single location and led to an increasing degree of specialization of labor."` },
            { p: `Inside, cotton was cleaned, combed straight, drawn out, twisted and spun, each step on its own machine and tended by workers who did that job and no other. Adam Smith showed why this mattered in <span class="num">1776</span>, with a workshop where ten men splitting the steps of pin making "could make among them upwards of forty-eight thousand pins in a day" (<a href="#chapter-t5-3">Topic 5.3</a>). Small, simple jobs could be learned fast, so a mill could hire workers with no training.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not call Cromford the first factory, or say the steam engine started the factory system. A silk mill at Derby had some of the same features in the 1720s, and Cromford ran on water.`
            } }
          ]
        },
        {
          heading: 'Steam and coal',
          blocks: [
            { p: `The steam engine began as a pump. In <span class="num">1712</span> Thomas Newcomen set one up to pump water out of a flooded coal mine, but it burned a great deal of coal. James Watt found how to save most of it with a separate chamber to cool the steam, patented in <span class="num">1769</span>, and in the 1780s Watt and his partner Matthew Boulton built engines that turned a wheel. A mill no longer had to sit beside a fast river. It could run on coal, and cotton mills crowded into towns such as Manchester (<a href="#chapter-t5-5">Topic 5.5</a>).` },
            { p: `Engines needed coal, and coal mines needed engines to pump them dry, so each made the other grow. Britain mined about 65 million tons of coal in <span class="num">1854</span> and about 225 million in <span class="num">1900</span>. In <span class="num">1865</span> the economist William Stanley Jevons wrote that "with coal almost any feat is possible or easy." The College Board's name for this is the <span class="kt">fossil fuels revolution</span>, which "greatly increased the energy available to human societies."` },
            { p: `In <span class="num">1830</span> the Liverpool and Manchester Railway opened, the world's first railway between two cities, its trains pulled by steam locomotives. Cotton landed at Liverpool could now reach Manchester's mills by rail.` }
          ]
        },
        {
          heading: 'The workshop of the world',
          blocks: [
            { p: `Machines made goods faster and more cheaply than hands could. By <span class="num">1815</span> even the coarsest cotton yarn cost about a third of its early 1780s price, even after rising prices are counted. By the historian Paul Bairoch's estimates, Britain's share of the world's manufactured goods rose from under 2 percent in <span class="num">1750</span> to about a fifth by <span class="num">1860</span> (<a href="#chapter-t5-4">Topic 5.4</a>). A Manchester business directory of the 1850s called the town "the 'workshop of the world'." Britain tried to keep its machines at home, banning skilled textile workers from leaving until <span class="num">1824</span>, but the methods left anyway (see <a href="#chapter-r5-europe">Europe</a> and <a href="#chapter-r5-americas">the Americas</a>).` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Nobody counted every piece of cloth in the world. Bairoch's shares are careful estimates built from what is known about people and their work, and historians who use them say they are rough. Use them to show the size of the change, never as exact amounts.`
            } }
          ]
        }
      ],
      terms: [
        ['Factory system', `Making goods by bringing workers and machines together in one building, around one source of power.`],
        ['Specialization of labor', `Splitting work into steps, with each worker doing one step over and over.`],
        ['Fossil fuels revolution', `The great increase in energy that came when machines let people use coal and, later, oil.`]
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
      thesis: `Britain gave up the old rules of trade and chose free trade, partly persuaded by Adam Smith. New laws let thousands of people invest in one company. Goods grew cheaper, but living standards rose slowly at first, and not for everyone.`,
      parts: [
        {
          heading: 'Smith against the old rules',
          blocks: [
            { p: `Under <span class="kt">mercantilism</span>, governments controlled trade with <span class="kt">tariffs</span> (taxes on imported goods), bans and monopolies, such as the East India Company's sole right to British trade with India and China. In <span class="num">1776</span> Adam Smith, a Scottish professor, attacked "the mercantile system" in The Wealth of Nations. "The tailor does not attempt to make his own shoes, but buys them of the shoemaker," he wrote, and what is sensible for a family "can scarce be folly in that of a great kingdom" (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: 'The Corn Laws',
          blocks: [
            { p: `Britain's <span class="kt">Corn Laws</span> kept cheap foreign grain out: a law of <span class="num">1815</span> banned foreign wheat until British prices rose very high. High grain prices kept landowners' rents high, and landowners filled Parliament. In <span class="num">1838</span> Manchester's factory owners and merchants began the campaign that became the Anti-Corn Law League, led by Richard Cobden and John Bright, saying cheap bread would help workers. Many workers in the Chartist movement (section 05) answered that "cheap bread" really meant cheap labor.` },
            { p: `In <span class="num">1845</span> a disease destroyed much of Ireland's potato crop, and famine began. Prime Minister Robert Peel decided the Corn Laws had to go, and Parliament repealed them in <span class="num">1846</span>. By <span class="num">1860</span> Britain had ended its tariffs on imported factory goods. It had become a free trade country, and it stayed one. In the College Board's words, Western European countries adopted free trade "partly in response to the growing acceptance of Adam Smith's theories."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: "partly"',
              html: `The League's campaign was paid for by manufacturers who wanted cheap food and open markets, and the Irish famine helped decide Peel. Ideas, interests and a crisis worked together, which is why "partly" is the right word.`
            } }
          ]
        },
        {
          heading: 'New tools for business',
          blocks: [
            { p: `A railway cost more than a few partners could pay, and if a partnership failed, each partner could lose his house to pay its debts. Laws of <span class="num">1855</span> and <span class="num">1856</span> let almost any group of seven or more people register a company whose owners could lose only what they had put in, <span class="kt">limited liability</span>. People with modest savings could now buy shares, and sell them again on the London stock exchange. Many lost money in a railway share boom of the mid-1840s, but the railways got built.` },
            { p: `In <span class="num">1884</span> William Lever began selling Sunlight Soap, made with oils from tropical plants such as coconut and palm kernels. It came in wrapped bars with a brand name, advertised to every household. In <span class="num">1890</span> the business became Lever Brothers, Limited, and from <span class="num">1894</span> it sold shares to the public. It grew into one of the "large-scale transnational businesses" the College Board names, Unilever, though that company was not formed until <span class="num">1929</span>.` }
          ]
        },
        {
          heading: 'Cheaper goods, for some',
          blocks: [
            { p: `The College Board says industrial capitalism "led to increased standards of living for some." The words "for some" matter. One careful estimate finds that British working families' <span class="kt">standard of living</span> rose by less than 15 percent from the 1780s to the 1850s. Most historians agree it grew much faster from about <span class="num">1860</span> to <span class="num">1900</span>.` }
          ]
        }
      ],
      terms: [
        ['Mercantilism', `The idea that a country grows strong by selling more than it buys and controlling its trade.`],
        ['Corn Laws', `British laws, from 1815, that kept cheap foreign grain out; repealed in 1846.`],
        ['Free trade', `Letting goods cross a country's borders without heavy tariffs.`],
        ['Limited liability', `A rule that a company's owners can lose only the money they put in.`]
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
      thesis: `Industry made a middle class and a working class bigger than ever, split women's lives by class, and packed people into towns faster than anyone could build homes, sewers and water pipes for them.`,
      parts: [
        {
          heading: 'Two new classes, and the old one',
          blocks: [
            { p: `The <span class="kt">middle class</span> ran from factory owners, merchants and bankers to engineers, doctors, managers and clerks. Their place came from money they made and education they paid for, not from land or titles. The <span class="kt">industrial working class</span> owned no land and no tools and lived on wages, at the hours the employer set. The College Board puts it simply: "New social classes, including the middle class and the industrial working class, developed." In <span class="num">1832</span> the Reform Act gave the vote in the towns to men who occupied property worth ten pounds a year, in effect most middle-class men.` },
            { p: `The old landed families did not disappear. They kept their land, their titles and much of their power: from <span class="num">1895</span> to <span class="num">1902</span> Britain's prime minister was Lord Salisbury, a marquess and a great landowner.` }
          ]
        },
        {
          heading: 'Women\'s two lives',
          blocks: [
            { p: `In working-class families one wage was rarely enough, so women and often children earned too. A survey of <span class="num">1833</span> found women and girls a majority of the workers in Britain's cotton, flax and silk mills. The largest single job for women was domestic service: the census of <span class="num">1851</span> suggests about four in ten women with a recorded job were servants in other people's houses.` },
            { p: `In middle-class families the husband's earnings were enough, and the wife was increasingly expected to stay out of paid work and run the home, an ideal historians call <span class="kt">separate spheres</span>. Isabella Beeton's best-selling Book of Household Management (<span class="num">1861</span>) compared the mistress of a house to "the commander of an army." Her household ran on servants, most of them working-class women. The College Board's sentence is that middle-class women were "increasingly limited to roles in the household." Married women's property passed to their husbands until laws of <span class="num">1870</span> and <span class="num">1882</span>, and no woman could vote for Parliament.` }
          ]
        },
        {
          heading: 'A city that could not keep up',
          blocks: [
            { p: `Manchester had more than 300,000 people by <span class="num">1851</span>, and that year's census found, for the first time, more than half the people of England and Wales living in towns. Houses were split into rooms, and whole families lived in one room or a damp cellar. The new streets had no sewers and no clean water. Friedrich Engels described Manchester's river Irk in <span class="num">1845</span> as "coal-black, foul-smelling ... full of debris and refuse."` },
            { p: `Cholera, a disease spread through water fouled with human waste, killed about 53,000 people registered in England and Wales in <span class="num">1848</span> and <span class="num">1849</span>. In <span class="num">1854</span> the London doctor John Snow mapped deaths around one water pump in Soho and showed that the water carried it. In the 1840s a baby born in Manchester could expect to live only about 25 to 28 years, against about 40 to 42 for England and Wales as a whole. These are the challenges the College Board lists: "pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that crime exploded. The number of people charged with serious crimes in England and Wales rose to peaks in hard years such as <span class="num">1842</span> and <span class="num">1848</span>, then fell, and new police forces caught and charged more people. Say "more people were charged with crimes."`
            } }
          ]
        }
      ],
      terms: [
        ['Middle class', `Owners, merchants, bankers, professionals and clerks, whose rank came from money and education.`],
        ['Industrial working class', `People with no land or tools who lived on wages.`],
        ['Separate spheres', `The idea that men belonged in work and politics and women in the home.`],
        ['Cholera', `A disease of the gut spread by water fouled with human waste.`]
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
      thesis: `The new words about rights, and old religious faith, pushed reformers to end the slave trade and demand votes. Workers organized, governments passed reforms, and in London two German writers predicted a revolution that never came to Britain.`,
      parts: [
        {
          heading: 'Abolition and Wollstonecraft',
          blocks: [
            { p: `In <span class="num">1787</span> twelve men in London, nine of them <span class="kt">Quakers</span>, a Christian group that had come to see slavery as a sin, founded a society to abolish the slave trade. Olaudah Equiano, who had been enslaved, published his life story in <span class="num">1789</span> and spoke against the trade across Britain. Britain banned the slave trade in <span class="num">1807</span>, and in <span class="num">1834</span> began ending slavery in most of its empire, though freed people had to keep working for their former owners as unpaid "apprentices" until <span class="num">1838</span> (<a href="#chapter-t5-1">Topic 5.1</a>).` },
            { p: `In <span class="num">1792</span> Mary Wollstonecraft published A Vindication of the Rights of Woman. Women can reason, she argued, so they must be educated to think for themselves: "I do not wish them to have power over men; but over themselves." The College Board names her book among the "demands for women's suffrage and an emergent feminism" that "challenged political and gender hierarchies."` }
          ]
        },
        {
          heading: 'Workers organize',
          blocks: [
            { p: `Laws of <span class="num">1799</span> and <span class="num">1800</span> made it illegal for workers to combine to demand higher wages. Parliament repealed them in <span class="num">1824</span>, and skilled workers built lasting <span class="kt">labor unions</span>; in <span class="num">1868</span> unions met in Manchester as the first Trades Union Congress, and a law of <span class="num">1871</span> gave unions legal standing. Workers also wanted the vote. In <span class="num">1838</span> the <span class="kt">Chartists</span> published a People's Charter demanding, among six points, a vote for every man over 21 and a secret ballot. Over 1.2 million people signed their first petition in <span class="num">1839</span>. Parliament rejected it, and two more, but five of the six points later became law. In <span class="num">1900</span> unions and socialists founded a committee to elect working men to Parliament; in <span class="num">1906</span> it won 29 seats and became the Labour Party (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        },
        {
          heading: 'Reformers and Parliament',
          blocks: [
            { p: `The College Board names four kinds of reform, "political, social, educational, and urban," and Britain had all four. Political: Reform Acts in <span class="num">1867</span> and <span class="num">1884</span> gave the vote to many working men. Social: the Factory Act of <span class="num">1833</span> banned children under nine from most textile mills, the Mines Act of <span class="num">1842</span> stopped women, girls and boys under ten from working inside mines, and a law of <span class="num">1847</span> limited women and young people in textile mills to ten hours a day. Educational: from <span class="num">1870</span> elected school boards built elementary schools, and from <span class="num">1880</span> every child had to attend. Urban: after the "Great Stink" of the River Thames in <span class="num">1858</span>, the engineer Joseph Bazalgette built London 82 miles of large brick sewers, completed in <span class="num">1875</span>.` }
          ]
        },
        {
          heading: 'Owen, Marx, and a revolution that did not come',
          blocks: [
            { p: `Robert Owen, who ran the New Lanark cotton mills in Scotland from <span class="num">1800</span>, shortened hours and opened a school for workers' children, and in the late 1820s his followers began to call their ideas <span class="kt">socialism</span>: land and factories owned and run in common, for everyone. Karl Marx and Friedrich Engels wrote the Communist Manifesto for a small group of radicals in London, and it was printed there in <span class="num">1848</span>. Marx lived in London from <span class="num">1849</span> until he died in <span class="num">1883</span>, and wrote the first volume of Capital there. Yet no workers' revolution came to Britain. Workers won unions, votes and laws instead (see <a href="#chapter-r5-europe">Europe</a> for where Marx's ideas built a mass party).` }
          ]
        }
      ],
      terms: [
        ['Abolition', `Ending slavery, or the slave trade, by law.`],
        ['Labor union', `A group of workers who bargain with their employer together.`],
        ['Chartists', `A British workers' movement, from 1838, that demanded the vote for every man.`],
        ['Socialism', `The idea that the means of making wealth should be owned and run in common.`]
      ]
    }
  ],

  closing: {
    heading: 'Britain at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `The College Board lists seven factors behind the Industrial Revolution. Using this chapter, argue which one or two mattered most in making Britain the first industrial country, and explain how they worked together with at least one other factor.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Votes came in steps',
        body: `The Reform Act of 1832 gave the vote to most middle-class men in the towns, and the acts of 1867 and 1884 to many working men. The Chartists' petitions were refused, but most of their points later became law. No woman could vote for Parliament by 1900.`
      },
      {
        category: 'Religious',
        title: 'Faith drove reform',
        body: `Quakers founded the antislavery society of 1787, and Britain banned the slave trade in 1807 and began ending slavery in most of its empire in 1834. Churches ran many schools until elected school boards filled the gaps after 1870.`
      },
      {
        category: 'Social',
        title: 'A new ladder, with old families still on top',
        body: `A middle class rose by money and education and a working class lived on wages. Working-class women and children earned; middle-class women were increasingly kept to the home. Cities grew faster than housing and sewers, and cholera followed.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Steam, and new ideas about society',
        body: `Darby's coke iron (1709), Arkwright's mill (1771), Watt's engines and the first intercity railway (1830) changed how things were made and moved. Smith argued for free trade, Wollstonecraft for women's education, and Owen and Marx for owning the means of making wealth in common.`
      },
      {
        category: 'Economic',
        title: 'From under 2 percent to a fifth',
        body: `By estimate, Britain's share of the world's manufactured goods rose from under 2 percent in 1750 to about a fifth by 1860. It repealed the Corn Laws in 1846, adopted free trade, and let ordinary investors form limited companies from 1855 and 1856. Living standards rose slowly to the 1850s, then faster.`
      }
    ]
  }
};
