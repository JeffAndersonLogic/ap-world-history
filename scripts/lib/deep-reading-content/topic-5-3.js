'use strict';

/**
 * Topic 5.3, Industrial Revolution Begins: the deep reading.
 *
 * Why this exists. The CED gives 5.3 one learning objective, how environmental
 * factors contributed to industrialization from 1750 to 1900, two Key Concepts
 * (the seven factors of KC-5.1.I.A and the factory system of KC-5.1.I.C) and a
 * reasoning process of Causation. The First & 10 tells the story in one pass.
 * What it has no room for is the mechanism at each step: what each factor made
 * cheaper or possible, how the factors depended on each other, and what exactly
 * changed when the work moved into a mill.
 *
 * Rebuilt from the 5.3 story (docs/TOPIC-5-3-STORY-DRAFT.md) on 2026-10-22.
 * The old chapter, "Why It Started There," was a strong essay written well
 * above a ninth-grade reading level. It taught the steam engine (Topic 5.5's)
 * and the Luddites (5.8's) as this topic's own, and organized the causes around
 * a list the CED does not give (political stability, scientific culture).
 *
 * Three things carried deliberately:
 *
 *   1. The CED's seven factors, sorted into what nature gave and what people
 *      built, because the objective asks how environmental factors contributed.
 *   2. Every factor ends on what it made cheaper or possible, and the factors
 *      are shown working together in one case, the Bridgewater Canal.
 *   3. Both halves of the factory system: one place, and one job each.
 */

module.exports = {
  topicKey: 't5-3',
  slug: 'topic-5-3-industrial-revolution-begins',
  sourceFile: 'deep-reading-topic-5-3-industrial-revolution-begins.html',
  lessonFile: 'lesson-5-3-industrial-revolution-begins.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.3: Coal, Water, and One Roof',
  eyebrow: 'Topic 5.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Coal, Water, and <em>One Roof</em>',
  deck: `Even before Paris argued about rights, a different revolution had begun in Britain: a change in how things were made. This chapter asks why it began there. Part of the answer was in Britain's ground and water, and the rest was built by people. Then it follows the new workplace those causes produced, the factory, and the two things it changed about work.`,
  meta: ['Five sections', 'Coal and wood, water, food and towns, laws and money, the factory', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.3 &nbsp;·&nbsp; Coal, Water, and One Roof &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain how environmental factors contributed to industrialization. Its list has seven factors. Sections 01 and 02 take the two that nature gave Britain; sections 03 and 04 take the five that people built, and show them working together; section 05 follows the new workplace they produced. Each section ends with a tool, a limit and a comparison you can use in an answer.`,
    steps: [
      `<b>01 Coal, iron, and not enough wood:</b> how a shortage of one resource pushed Britain toward another.`,
      `<b>02 Water:</b> moving heavy things cheaply, and turning wheels.`,
      `<b>03 Food, people and towns:</b> better farming, a growing population, and the towns it filled.`,
      `<b>04 Laws, cotton and capital:</b> three things that made the risk worth taking, and how the factors combined.`,
      `<b>05 The factory:</b> one place, and one job each.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'coal',
      num: '01',
      accent: 'gold',
      name: 'Coal, Iron, and Not Enough Wood',
      navLabel: 'Coal and wood',
      dates: '1600s to 1709 &nbsp;·&nbsp; What nature gave',
      thesis: `Britain had plenty of coal and iron, often close together and close to water, and too little wood. The shortage of wood pushed Britons to burn coal, and then to make iron with it.`,
      parts: [
        {
          heading: 'How things were made in 1750',
          blocks: [
            { p: `In <span class="num">1750</span> almost everything people owned was made by hand. Most thread and cloth were made in homes. Under the <span class="kt">putting-out system</span>, a merchant brought raw wool or cotton to families in the countryside, who spun and wove it on their own wheels and looms, and he came back to collect the work and pay for each piece. Power came from human muscles, horses, wind and water wheels. Much of the world's cotton cloth came from India, and Britain's cotton makers grew up copying it.` },
            { p: `Over the next century Britain built a new way of making things. The College Board lists seven factors that led to it. Two come from nature: waterways, and where coal, iron and timber were found. Five were built by people: towns, better farming, laws that protected property, resources from abroad, and saved-up money. This chapter takes them in that order.` }
          ]
        },
        {
          heading: 'Too little wood',
          blocks: [
            { p: `By the <span class="num">1600s</span> most of Britain's old forests had been cut down, as a growing population cleared land for farms. Wood became expensive. That mattered, because wood was the fuel of the old economy. It heated homes, and it made <span class="kt">charcoal</span>, the fuel used to heat iron ore until the iron could be separated out. Much of the iron Britain used was bought from Sweden and Russia, where forests were still large.` },
            { p: `Britain did have coal, in huge beds, much of it close to the surface and close to rivers or the sea. So Britons burned coal instead of wood. By <span class="num">1700</span> coal gave England about half of all its energy, much of it burned in fireplaces for heating and cooking.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Britain industrialized because it had coal. Coal was one of seven factors, and China had coal too. A strong answer says what coal made cheaper or possible, and names other factors that made it worth using.`
            } }
          ]
        },
        {
          heading: 'Iron made with coal',
          blocks: [
            { p: `Coal could not simply replace charcoal in an iron furnace: its impurities spoiled the iron. In <span class="num">1709</span>, at Coalbrookdale, a valley beside the River Severn in Shropshire, Abraham Darby made iron using <span class="kt">coke</span>, a fuel made by baking coal to drive the impurities off. Coalbrookdale had coal and iron ore close by and a river to carry what it made. Over the following decades, ironmakers learned to make better and better iron with coal, and Britain could make its own iron from its own fuel.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the furnace is still there',
              html: `Darby's furnace survives at Coalbrookdale, part of the Ironbridge Gorge World Heritage Site. Historic England, which lists the site, dates Darby's first iron made with coke there to 1709. Historians argue about how much the wood shortage caused the switch to coal and how much growing demand for fuel did; both were at work.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name the shortage and the substitute. <em>Say what Britain lacked, what it used instead, and what that made possible.</em>`,
        limit: `Coal alone did not cause industry: other countries had coal, and coal had to be moved and used by people who could make it pay.`,
        comparison: `Against water (section 02): coal gave heat and fuel; water gave cheap transport and power to turn wheels.`
      },
      terms: [
        ['Putting-out system', 'A way of making goods in which a merchant gives raw materials to families who work at home and pays them for each piece.'],
        ['Charcoal', 'A fuel made by slowly burning wood, used to make iron before coke.'],
        ['Coke', 'A fuel made by baking coal to drive off its impurities, used to make iron from 1709.'],
        ['Timber', 'Wood from trees, used for fuel and building.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'water',
      num: '02',
      accent: 'iron',
      name: 'Water: Moving Heavy Things and Turning Wheels',
      navLabel: 'Water',
      dates: '1700s to 1761 &nbsp;·&nbsp; What nature gave, improved',
      thesis: `Before railways, the cheapest way to move something heavy was to float it, and the fastest way to power a machine was a water wheel. Britain had coast, rivers and fast streams, and people added canals.`,
      parts: [
        {
          heading: 'Coast, rivers and streams',
          blocks: [
            { p: `Coal is heavy, and so is iron. Carrying them by cart on the roads of the 1700s was slow and expensive. Carrying them by water was cheap. Britain had a long coastline and rivers that boats could travel, and coal from the mines near Newcastle went by ship down the coast to London.` },
            { p: `Fast streams mattered too. A stream could turn a water wheel, and a water wheel could turn machines all day. The first factories were built beside fast water, as section 05 shows.` }
          ]
        },
        {
          heading: 'Canals: water improved by people',
          blocks: [
            { p: `Where nature had put no river, people dug one. A <span class="kt">canal</span> is a waterway dug by hand. The Duke of Bridgewater owned coal mines at Worsley, a few miles from Manchester. In <span class="num">1759</span> Parliament passed an act allowing him to build a canal, and in <span class="num">1761</span> it began carrying his coal into Manchester. The price of coal in the town fell by about half.` },
            { p: `Other canal builders followed. Within a few decades canals linked coalfields, industrial towns and ports across England. Cheap fuel and cheap carriage drew mills to the places the water reached.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Britain had rivers" is a fact, not an explanation. Add what the water did: "water made heavy coal cheap to move, so mills near a canal paid less for fuel."`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Say the job water did. <em>Did it move goods, or turn machines? Then say what that made cheaper.</em>`,
        limit: `Canals are both nature and people: the water is nature's, but the canal had to be paid for, allowed by law and dug by workers.`,
        comparison: `Against coal (section 01): coal was in the ground; a canal had to be built, which is why canals lead into the factors people built (sections 03 and 04).`
      },
      terms: [
        ['Canal', 'A waterway dug by hand, so boats can carry goods where there is no river.'],
        ['Water wheel', 'A wheel turned by flowing water, used to power machines.'],
        ['Bridgewater Canal', 'The canal that, from 1761, carried coal from the Duke of Bridgewater\'s mines at Worsley into Manchester.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'food',
      num: '03',
      accent: 'oxide',
      name: 'Food, People and Towns',
      navLabel: 'Food and towns',
      dates: '1700s to 1801 &nbsp;·&nbsp; What people built',
      thesis: `British farmers grew more food on the same land. More food fed more people, a smaller share of them farmed, and towns filled with workers and buyers.`,
      parts: [
        {
          heading: 'Better farming',
          blocks: [
            { p: `Farmers had long left fields empty every few years to let the soil rest. British farmers learned to plant turnips and clover instead. Turnips fed cattle and sheep through the winter, and clover made the soil richer. More animals meant more manure for the fields, and more manure meant more grain. These crops had been grown this way in Flanders first; British farmers spread them.` },
            { p: `Landowners also fenced off the old shared village fields into private farms, often with an act of Parliament. Between <span class="num">1750</span> and <span class="num">1819</span> Parliament passed more than three thousand of these acts. This <span class="kt">enclosure</span> let a landowner farm his land the new way. It also took away the shared land that poorer villagers had used, and historians still argue about how many people it pushed off the land.` }
          ]
        },
        {
          heading: 'More people, fewer of them farming',
          blocks: [
            { p: `More food fed more people. Britain's population grew from about <span class="num">8 million</span> in <span class="num">1761</span> to about <span class="num">10.5 million</span> in <span class="num">1801</span>, the year of the first census. And a smaller share of those people farmed: by <span class="num">1801</span> only about a third of English working men worked on the land.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: counting backward',
              html: `No full count of farm output exists before the 1860s. Historians work it out backward: Britain's population grew, people ate at least as well, and most of the food was still grown at home, so farms must have produced much more. The estimates differ, but they agree that farm productivity more than doubled between 1700 and 1850.`
            } }
          ]
        },
        {
          heading: 'Towns',
          blocks: [
            { p: `Many of the people who did not farm lived in towns. <span class="kt">Urbanization</span>, the growth of towns and cities, put many workers close together, and gave them neighbors to sell to. Manchester, a town of about <span class="num">23,000</span> people in <span class="num">1773</span>, counted <span class="num">70,409</span> in the census of <span class="num">1801</span>.` }
          ]
        }
      ],
      useThis: {
        tool: `Follow the chain. <em>Start from a turnip and end at a town: more fodder, more animals, more grain, more people, fewer farming, more in towns.</em>`,
        limit: `Urbanization is a cause here, but it is also an effect of industry, and Topic 5.9 treats it that way. Be clear which one you mean.`,
        comparison: `Against laws and capital (section 04): food and towns supplied workers and buyers; laws and money decided whether anyone would risk building a mill.`
      },
      terms: [
        ['Agricultural productivity', 'How much food a farm grows for each field and each worker.'],
        ['Enclosure', 'Fencing off shared village fields into private farms, often by act of Parliament.'],
        ['Urbanization', 'The growth of towns and cities, as more people live in them.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'risk',
      num: '04',
      accent: 'rust',
      name: 'Laws, Cotton and Capital',
      navLabel: 'Laws and money',
      dates: '1624 to 1774 &nbsp;·&nbsp; What people built',
      thesis: `Building a mill was a big risk. Laws that protected property, cotton from abroad and saved-up money made the risk worth taking, and the factors worked together.`,
      parts: [
        {
          heading: 'Laws that protected property',
          blocks: [
            { p: `In Britain, Parliament, where landowners and merchants sat, passed the laws that enclosed fields and allowed canals to be dug. Since <span class="num">1624</span>, English law had also let an inventor take out a <span class="kt">patent</span>: the sole right to use a new invention for fourteen years. In <span class="num">1769</span> Richard Arkwright patented a new spinning machine. A person who invested could expect the law to protect what he built.` },
            { p: `The protection had limits. In <span class="num">1785</span> the courts struck down Arkwright's patents, partly on the grounds that the ideas were other men's.` }
          ]
        },
        {
          heading: 'Cotton from abroad',
          blocks: [
            { p: `Cotton does not grow in Britain's climate. By the <span class="num">1780s</span> most of the cotton spun in Manchester was grown by enslaved people on plantations in the Caribbean and South America. After the <span class="num">1790s</span> more and more of it came from plantations in the United States. Britain's cotton mills used about <span class="num">2.6 million</span> pounds of raw cotton in <span class="num">1760</span> and about <span class="num">51.6 million</span> pounds in <span class="num">1800</span>. The factory's raw material came from far away, and it was grown by people who were not free.` }
          ]
        },
        {
          heading: 'Capital',
          blocks: [
            { p: `<span class="kt">Capital</span> is money used to build something that makes more money. Merchants, bankers and landowners had grown rich from trade, including the Atlantic trade in enslaved people and the sugar they grew, and some were ready to risk their savings on mills and machines. Arkwright's partners, Samuel Need and Jedediah Strutt, were stocking makers who had grown rich in the hosiery trade. The partners spent thousands of pounds on machines and mills before the business made a profit, at a time when a carpenter earned no more than about <span class="num">£36</span> a year.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the slave trade paid for the Industrial Revolution. Historians still argue about how much of Britain's capital came from slavery and the slave trade, so say "some" or "part." What historians agree on is that the cotton itself was grown by enslaved people.`
            } }
          ]
        },
        {
          heading: 'How the factors combined',
          blocks: [
            { p: `None of these factors made an industrial revolution by itself. Watch five of them meet in one project. The Bridgewater Canal needed coal under the ground at Worsley (nature). It needed water to float the coal on (nature, improved by people). It needed an act of Parliament, passed in <span class="num">1759</span>, to allow it to be built (law). It needed the duke's money, and he had to borrow more to pay his workmen (capital). And it needed a growing town to buy the coal (urbanization). Cheap coal then made Manchester an even better place to build mills, and the new mills made the town grow faster still.` }
          ]
        }
      ],
      useThis: {
        tool: `Explain it as a process. <em>Name the factor, add "which meant" and what it made cheaper or possible, then "so" and what it led to.</em>`,
        limit: `A patent protected an invention only if the courts upheld it, and Arkwright's were struck down in 1785.`,
        comparison: `Against coal and water (sections 01 and 02): nature's factors made things cheap in certain places; these factors decided whether people would build there.`
      },
      terms: [
        ['Patent', 'The sole right, given by law, to use a new invention for a fixed number of years.'],
        ['Capital', 'Money used to build something that makes more money, such as a mill and its machines.'],
        ['Raw material', 'What a factory makes things from, such as raw cotton for thread.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'factory',
      num: '05',
      accent: 'gold',
      name: 'The Factory: One Place, One Job Each',
      navLabel: 'The factory',
      dates: '1771 to 1835 &nbsp;·&nbsp; The factory system',
      thesis: `The factors made it pay to build mills. The factory then changed work itself in two ways: it gathered production in one place, and it split the work into small, specialized jobs.`,
      parts: [
        {
          heading: 'One place',
          blocks: [
            { p: `In <span class="num">1771</span>, Arkwright and his partners built a cotton-spinning mill at Cromford, in Derbyshire's Derwent valley. A water wheel turned the machines. It was fed by a brook and by the Cromford Sough, a tunnel that drained the nearby lead mines; because its water came from underground, it was said never to freeze.` },
            { p: `The mill did not send cotton out to spinners' homes. It brought the workers to the machines. Everyone came to one building, at the hours the mill set, under the eye of an overseer. The village was too small to supply enough workers, so Arkwright built houses for them. Most of his workers were women and children, some as young as seven. This was the <span class="kt">factory system</span>: production concentrated in a single place, around one source of power. UNESCO, which protects the valley as a World Heritage Site, says it "saw the birth of the factory system."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not call Cromford the first factory, or say the steam engine started the factory system. A silk mill at Derby had some of the same features in the 1720s, and Cromford ran on water. Steam power is Topic 5.5.`
            } }
          ]
        },
        {
          heading: 'One job each',
          blocks: [
            { p: `Inside, the work was split into steps. Raw cotton was cleaned, then carded (combed so its fibers lay straight), drawn out, twisted into a loose rope called roving, and spun into thread. Each step had its own machine, tended by workers who did that job and no other. This is <span class="kt">specialization of labor</span>.` },
            { p: `Adam Smith, a Scottish thinker, showed why it mattered in <span class="num">1776</span>, using a small hand workshop that made pins. Ten men, each doing one or two of about eighteen steps, "could make among them upwards of forty-eight thousand pins in a day." One man working alone, he wrote, "could scarce ... make one pin in a day, and certainly could not make twenty." Because each job was small and simple, it could be learned quickly, so a mill could hire workers with no training, many of them children.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: writers of the time',
              html: `In 1835 Andrew Ure, a writer who admired factories, defined one as "the combined operation of many orders of work-people, adult and young, in tending with assiduous skill a system of productive machines continuously impelled by a central power": many kinds of workers, many machines, one power source. He was praising the system, so read him for what a factory was, not for how it felt to work there.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name both changes. <em>Where was the work done before and after? How was it divided before and after? What did that lead to?</em>`,
        limit: `Smith described a small hand workshop, not a powered mill. Ask what a mill adds to his idea of splitting the work.`,
        comparison: `Against the putting-out system (section 01): there, the work went to the workers' homes; here, the workers went to the work.`
      },
      terms: [
        ['Factory system', 'Making goods by bringing workers and machines together in one building, around one source of power.'],
        ['Specialization of labor', 'Splitting work into steps, with each worker doing one step over and over.'],
        ['Carding', 'Combing raw cotton so its fibers lie straight, before it is spun.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks how environmental factors contributed to industrialization, so the first card is the environment, the next two are what people built and how the factors combined, and the last is the factory system.`,
    pairs: [
      {
        category: 'Causation',
        title: 'What nature gave',
        body: `Evidence to sort: coal and iron close together and close to water; a shortage of wood by the 1600s; iron bought from Sweden and Russia; coal giving England about half its energy by 1700; Darby's iron made with coke (1709); coast and rivers; fast streams and water wheels; the Bridgewater Canal (1761) and the price of coal in Manchester. For each, say what it made cheaper or possible.`
      },
      {
        category: 'Causation',
        title: 'What people built',
        body: `Evidence to sort: turnips and clover; enclosure acts; Britain's population (about 8 million in 1761, about 10.5 million in 1801); a third of English men farming in 1801; Manchester (about 23,000 in 1773, 70,409 in 1801); patents since 1624 and Arkwright's of 1769; cotton grown by enslaved people in the Caribbean, South America and the United States; capital from trade; Need and Strutt. For each, say how it made a mill worth building.`
      },
      {
        category: 'Causation',
        title: 'How the factors combined',
        body: `The Bridgewater Canal needed coal, water, an act of Parliament, the duke's money and a growing town. Pick another pair of factors and show how one made the other pay off: for example, cotton from abroad and water power at Cromford, or towns and canals in Manchester.`
      },
      {
        category: 'Change',
        title: 'What the factory system changed',
        body: `Evidence to sort: the putting-out system; Cromford (1771), its water wheel, its houses and its workers; the steps of cotton spinning, each with its own machine; Smith's pin workshop (1776); Ure's definition (1835). Explain the two changes, one place and one job each, and what they led to: more goods, made by workers with less training.`
      }
    ]
  }
};
