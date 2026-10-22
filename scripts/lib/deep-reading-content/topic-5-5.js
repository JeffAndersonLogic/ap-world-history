'use strict';

/**
 * Topic 5.5, Technology of the Industrial Age: the deep reading.
 *
 * Why this exists. The CED gives 5.5 one learning objective, how technology
 * shaped economic production over time, three Key Concepts (KC-5.1.I.B,
 * machines such as the steam engine and the internal combustion engine let
 * people use the energy stored in coal and oil, and the fossil fuels
 * revolution greatly increased the energy available; KC-5.1.I.E, the second
 * industrial revolution's new methods in steel, chemicals, electricity and
 * precision machinery; KC-5.1.IV, railroads, steamships and the telegraph in
 * interior regions, leading to more trade and migration) and a reasoning
 * process of Causation. The First & 10 tells the story in one pass. What it
 * has no room for is how each machine worked, how much more energy there was,
 * and how slowly some of the effects came.
 *
 * Rebuilt from the 5.5 story (docs/TOPIC-5-5-STORY-DRAFT.md) on 2026-10-22.
 * The old chapter, "The Machines That Needed Each Other," gave half its length
 * to rubber, guano and coerced labor in colonized regions, which is Unit 6's
 * story, and left out oil and the internal combustion engine, which the CED
 * names.
 *
 * Three things carried deliberately:
 *
 *   1. The chain: each section's technology is a link that made the next one
 *      possible, so the chapter is causal rather than a list of inventions.
 *   2. Both machines and both fuels of KC-5.1.I.B, and all four methods of
 *      KC-5.1.I.E.
 *   3. Timing: when each effect came, including the ones that came after
 *      1900.
 */

module.exports = {
  topicKey: 't5-5',
  slug: 'topic-5-5-technology-of-industrialization',
  sourceFile: 'deep-reading-topic-5-5-technology-of-industrialization.html',
  lessonFile: 'lesson-5-5-technology-of-industrialization.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.5: More Power, Longer Reach',
  eyebrow: 'Topic 5.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'More Power, <em>Longer Reach</em>',
  deck: `In 1750 almost all the energy people used came from muscles, wood, wind and water. By 1900 about half of it came from coal. This chapter follows how machines unlocked that buried energy, what new things it let people make, and how railroads, steamships and the telegraph carried goods, people and news into the interiors of continents.`,
  meta: ['Five sections', 'Energy before 1750, the steam engine, coal and oil, new materials, longer reach', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.5 &nbsp;·&nbsp; More Power, Longer Reach &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain how technology shaped economic production between 1750 and 1900. That is a causation question, and the answer is a chain: each technology made the next one possible. Section 01 sets the starting point; sections 02 and 03 are the power; section 04 is the new materials; section 05 is the reach, and its two effects, trade and migration. Each section ends with a tool, a limit and a comparison you can use in an answer.`,
    steps: [
      `<b>01 Energy before 1750:</b> muscles, wood, wind and water, and their limits.`,
      `<b>02 The steam engine:</b> from a mine pump to the power of factories.`,
      `<b>03 More coal, then oil:</b> how much more energy, and a second engine.`,
      `<b>04 The second industrial revolution:</b> steel, chemicals, electricity and precision machinery.`,
      `<b>05 Longer reach:</b> railroads, steamships and the telegraph, and more trade and migration.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'energy',
      num: '01',
      accent: 'gold',
      name: 'Energy Before 1750',
      navLabel: 'Energy in 1750',
      dates: 'About 1750 &nbsp;·&nbsp; The starting point',
      thesis: `In 1750 almost all the energy people used came from things that grow, and from wind and water. Each had a limit.`,
      parts: [
        {
          heading: 'Things that grow, blow and flow',
          blocks: [
            { p: `In <span class="num">1750</span> a farmer plowed with a horse or an ox, a family cooked and kept warm with wood, a ship crossed the ocean by sail, and a mill turned beside a river. Food gave energy to the muscles of people and animals. Wood gave fire. Wind and water turned some machines. All of these came, in the end, from the sun and the land: crops and forests had to grow, every year, to be used.` },
            { p: `Each had a limit you could see. A horse gets tired and must be fed from land that could grow food for people. A forest takes decades to grow back. A sailing ship waits for the wind. A <span class="kt">water wheel</span> works only beside a fast river, and turns slowly when the river runs low. Topic 5.3's first factory, Arkwright's mill at Cromford, ran on a water wheel.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the world\'s energy, measured',
              html: `Historians of energy, such as Vaclav Smil, have estimated how much energy the world used and where it came from. Their figures show that until the middle of the 1800s, wood, crop waste and other things that grow were the world's main source of energy, and that by about 1900 coal gave about half (Our World in Data).`
            } }
          ]
        },
        {
          heading: 'Energy buried underground',
          blocks: [
            { p: `There was another store of energy, underground. Coal and oil are each a <span class="kt">fossil fuel</span>: the remains of plants and tiny sea creatures, buried for millions of years, with energy stored inside them. Coal did not need land to grow this year. Britain already burned a great deal of it for heat (Topic 5.3). The trick was to turn its heat into motion.` }
          ]
        }
      ],
      useThis: {
        tool: `Set the starting point. <em>Before you say how technology changed production, say what powered it before.</em>`,
        limit: `Water wheels and windmills were good machines; the limit was the energy itself, not the skill of the people who used them.`,
        comparison: `Against 1900 (section 03): in 1750 energy came mostly from things that grow; by about 1900 coal gave about half of the world's energy.`
      },
      terms: [
        ['Fossil fuel', 'A fuel such as coal or oil, formed from plants and sea creatures buried for millions of years.'],
        ['Water wheel', 'A wheel turned by flowing water, used to drive machines in a mill.'],
        ['Biomass', 'Fuel from things that grow, such as wood, straw and dung.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'steam',
      num: '02',
      accent: 'iron',
      name: 'The Steam Engine',
      navLabel: 'The steam engine',
      dates: '1712 to the 1780s &nbsp;·&nbsp; From a pump to a power',
      thesis: `The steam engine began as a pump for flooded coal mines. Watt made it use far less coal and turn wheels, so factories could run on coal instead of rivers.`,
      parts: [
        {
          heading: 'A pump for mines',
          blocks: [
            { p: `As British miners dug deeper for coal, water flooded the mines. In <span class="num">1712</span> Thomas Newcomen set up a <span class="kt">steam engine</span> near Dudley Castle, in the English Midlands, to pump it out. A fire boiled water into steam. The steam filled a cylinder under a piston; a spray of cold water turned the steam back into water, the air pressed the piston down, and a great wooden beam rocked to work the pump. It worked, but it burned a great deal of coal, because the cylinder was cooled and heated again on every stroke.` }
          ]
        },
        {
          heading: 'Watt\'s improvement',
          blocks: [
            { p: `James Watt, an instrument maker at the University of Glasgow, was repairing a model Newcomen engine when he saw the waste. In <span class="num">1765</span> he found the fix: cool the steam in a separate chamber, the <span class="kt">separate condenser</span>, so the cylinder could stay hot. He patented the idea in <span class="num">1769</span>. Watt's engines used less than a third of the coal of a Newcomen engine.` },
            { p: `Then came the change that mattered most for factories. Watt's business partner, Matthew Boulton, wanted engines that could drive mill machinery. In the <span class="num">1780s</span> Boulton and Watt built engines that turned a wheel. A wheel can drive spinning machines, looms and hammers. A mill no longer had to sit beside a fast river: it could run on coal, wherever coal could be brought, and cotton mills crowded into towns such as Manchester.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Watt did not invent the steam engine. Newcomen's engines had pumped mines for half a century before Watt's patent. Watt made the steam engine use far less coal, and made it turn wheels. And steam did not start the Industrial Revolution: Cromford ran on water, and many mills used water power for decades after Watt.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Explain a process step by step. <em>The problem, what the machine did, what it made possible, what followed.</em>`,
        limit: `A patent is not the same as a change in production: Watt's engines spread over decades, and water wheels stayed common.`,
        comparison: `Against section 01: the water wheel tied a mill to a river; the rotary steam engine tied it to coal, which could be carried.`
      },
      terms: [
        ['Steam engine', 'A machine that uses steam from boiling water, heated by burning fuel, to make motion.'],
        ['Separate condenser', 'Watt\'s chamber for cooling steam outside the cylinder, so the cylinder stays hot and less coal is burned.'],
        ['Rotary motion', 'Turning in a circle, like a wheel, so an engine can drive machines.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'fuels',
      num: '03',
      accent: 'sage',
      name: 'More Coal, Then Oil',
      navLabel: 'Coal and oil',
      dates: '1854 to 1900 &nbsp;·&nbsp; The fossil fuels revolution',
      thesis: `Machines let people use far more energy than ever before: coal gave about half the world's energy by 1900. Oil and the internal combustion engine came next, but their big effects came later.`,
      parts: [
        {
          heading: 'How much more energy',
          blocks: [
            { p: `Steam engines needed coal, and coal mines needed steam engines to pump them dry, so each made the other grow. Britain mined about 65 million tons of coal in <span class="num">1854</span> and about 225 million tons in <span class="num">1900</span>. By about <span class="num">1900</span>, coal supplied about half of all the energy used in the whole world; things that grow, such as wood, gave about the other half. The College Board calls this the <span class="kt">fossil fuels revolution</span>: it "greatly increased the energy available to human societies."` },
            { p: `A person who lived through it said so. In <span class="num">1865</span> the British economist William Stanley Jevons wrote that "with coal almost any feat is possible or easy; without it we are thrown back into the laborious poverty of early times." He was worried that Britain's cheap coal would not last forever. (His words are this lesson's Primary Source.)` }
          ]
        },
        {
          heading: 'Oil, and an engine that burns fuel inside itself',
          blocks: [
            { p: `In <span class="num">1859</span> Edwin Drake drilled a well at Titusville, Pennsylvania, and struck oil. For the rest of the 1800s, most oil was refined into kerosene, a fuel for lamps.` },
            { p: `A steam engine burns its fuel under a boiler, outside the engine. An <span class="kt">internal combustion engine</span> burns its fuel inside the engine itself, in the cylinder. In <span class="num">1876</span> Nikolaus Otto built a four-stroke gas engine in Germany, and in <span class="num">1886</span> Carl Benz patented a car driven by a small engine that burned a fuel made from oil.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: counting cars',
              html: `Government tables of registered cars in the United States begin with the year 1900, when there were about 8,000 in the whole country. The internal combustion engine's big changes, to cars, trucks, tractors and airplanes, came after 1900.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Say how much. <em>Use one number to show that the energy available grew greatly.</em>`,
        limit: `Coal passed wood and other things that grow only in the 1890s; say "about half" by 1900, not that coal had replaced wood.`,
        comparison: `Against the steam engine (section 02): the internal combustion engine was developed before 1900, but most of its effects came after.`
      },
      terms: [
        ['Fossil fuels revolution', 'The great increase in energy that came when machines let people use coal and oil.'],
        ['Kerosene', 'A fuel made from oil, burned in lamps.'],
        ['Internal combustion engine', 'An engine that burns its fuel inside the cylinder, like a car engine.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'methods',
      num: '04',
      accent: 'gold',
      name: 'The Second Industrial Revolution',
      navLabel: 'New materials',
      dates: '1850 to 1900 &nbsp;·&nbsp; Four new methods',
      thesis: `After 1850, with so much energy to use, new methods made steel cheap, made chemicals in factories, sold electric power, and cut machine parts precisely enough to swap.`,
      parts: [
        {
          heading: 'Steel',
          blocks: [
            { p: `<span class="kt">Steel</span> is iron with a small, carefully measured amount of carbon. It is stronger and tougher than ordinary iron, but before the 1850s it was slow and costly to make in large amounts. In <span class="num">1856</span> Henry Bessemer showed that blowing air through melted iron burned out the carbon and other impurities, and the burning kept the metal hot. The United States made about 69,000 tons of steel in <span class="num">1870</span> and about 10 million tons in <span class="num">1900</span>; Britain went from about 215,000 tons to about 4.9 million. Steel became rails, bridges, ships and machines.` }
          ]
        },
        {
          heading: 'Chemicals',
          blocks: [
            { p: `In <span class="num">1856</span> an eighteen-year-old London chemistry student, William Perkin, made a purple dye, mauve, from chemicals that came from coal tar, a sticky leftover of coal. It was the first synthetic dye to sell well. German chemical companies such as BASF, founded in <span class="num">1865</span>, built laboratories whose job was to invent new dyes, and in <span class="num">1897</span> BASF began selling indigo blue made in a factory instead of from a plant. By <span class="num">1914</span> Germany made most of the world's dyes.` }
          ]
        },
        {
          heading: 'Electricity',
          blocks: [
            { p: `In <span class="num">1882</span> Thomas Edison's Pearl Street Station in New York began selling electric power, lighting about 400 lamps on its first day. Electric motors could let each machine run on its own motor, instead of on belts from one big steam engine. But the change was slow: in <span class="num">1899</span>, electric motors gave less than 5 percent of the power in American factories, and it took about two more decades for them to give half. Factories had to be rebuilt to use them well.` }
          ]
        },
        {
          heading: 'Precision machinery',
          blocks: [
            { p: `Machine tools, such as lathes and milling machines, could now cut metal parts to exact sizes, so that one part fit any copy of the same machine. These are <span class="kt">interchangeable parts</span>. Standard screw threads, set by Joseph Whitworth in Britain in <span class="num">1841</span> and by William Sellers in the United States in <span class="num">1864</span>, helped machines with interchangeable parts, "from typewriters to locomotives," spread.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not say "by 1900 factories ran on electricity." Electric power was new and growing, but in 1899 it gave under 5 percent of American factory power. Steam, burning coal, still drove most machines.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name the method and what it made. <em>Steel made rails and ships; dyes came from coal tar; motors could drive single machines; precise tools made parts that fit.</em>`,
        limit: `A new method is not the same as a change everywhere: electricity, especially, spread slowly.`,
        comparison: `Against section 03: the second industrial revolution ran on the energy of the first; coal ran the furnaces that made steel and gave the tar that made dyes.`
      },
      terms: [
        ['Second industrial revolution', 'The new methods in steel, chemicals, electricity and precision machinery after about 1850.'],
        ['Steel', 'Iron with a small, measured amount of carbon, stronger and tougher than ordinary iron.'],
        ['Interchangeable parts', 'Machine parts made so exactly that any one fits any copy of the same machine.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'reach',
      num: '05',
      accent: 'iron',
      name: 'Longer Reach',
      navLabel: 'Longer reach',
      dates: '1830 to 1904 &nbsp;·&nbsp; Railroads, steamships and the telegraph',
      thesis: `Railroads, steamships and the telegraph reached the interiors of continents and joined distant markets, which led to more trade and more migration.`,
      parts: [
        {
          heading: 'Railroads',
          blocks: [
            { p: `Before railroads, heavy goods moved cheaply only by water, so the middle of a continent, far from rivers and the sea, was hard to reach. The Liverpool and Manchester Railway, opened in England in <span class="num">1830</span>, was the world's first railway between two cities, with trains pulled by steam locomotives. Railways spread fast: Russia had 27 kilometers of railway in <span class="num">1840</span> and more than 53,000 in <span class="num">1900</span>; Germany went from 469 kilometers to more than 51,000.` },
            { p: `India's first passenger train ran from Bombay to Thane in <span class="num">1853</span>. The first railroad across the United States was finished at Promontory Summit, Utah, in <span class="num">1869</span>. Russia began the Trans-Siberian Railway in <span class="num">1891</span>, and by <span class="num">1904</span> trains could cross to the Pacific Ocean. A railroad could reach farms, mines and towns where no river or canal went.` }
          ]
        },
        {
          heading: 'Steamships',
          blocks: [
            { p: `A sailing ship from Norway to America took about 53 days on average. By the 1870s the fastest steamships crossed the Atlantic in about 7 or 8 days. The Suez Canal, opened in Egypt in <span class="num">1869</span>, could be used only by steamships, and it cut the voyage from Europe to Asia. Steamboats also pushed up rivers into the interior of continents: in <span class="num">1854</span> the steamer Pleiad went far up the Niger and Benue rivers in West Africa, and none of its crew died, because they took quinine, a medicine against malaria. What European empires did with this reach is Unit 6.` }
          ]
        },
        {
          heading: 'The telegraph',
          blocks: [
            { p: `A <span class="kt">telegraph</span> sends messages as pulses of electricity along a wire. In <span class="num">1844</span> Samuel Morse sent "What hath God wrought?" from Washington to Baltimore. A cable under the Atlantic worked only a few weeks in 1858; another worked lastingly from <span class="num">1866</span>, and one reached Bombay in <span class="num">1870</span>. A message that once traveled as fast as a ship could now travel in minutes, so merchants could know prices in distant markets the same day.` }
          ]
        },
        {
          heading: 'More trade, more migration',
          blocks: [
            { p: `Cheaper, faster transport and fast news joined markets. In <span class="num">1870</span> wheat cost 57.6 percent more in Liverpool, England, than in Chicago. By <span class="num">1913</span> the gap was only 15.6 percent. Wheat grown in the middle of North America, carried by train to the coast and by steamship across the ocean, fed workers in Britain.` },
            { p: `Trains and ships carried people, too. <span class="kt">Migration</span> means people moving to live in a new place. About 55 million Europeans moved to the Americas and Australia between 1850 and 1914. Between 1846 and 1940, more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean, and tens of millions of Chinese and Russians moved into Manchuria, Siberia and Central Asia. Steamships and railways made these journeys faster and cheaper. Why people moved, and what they found, is Unit 6.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: prices and passengers',
              html: `Economic historians compare the price of the same good in two markets: when the gap shrinks, the markets have joined. The wheat figures are from Kevin O'Rourke and Jeffrey Williamson. The migration counts come from passenger lists and port records, gathered by Timothy Hatton and Jeffrey Williamson for Europe and by Adam McKeown for Asia.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Trace the cause to the effect. <em>Say what the technology made possible, then name the trade or the migration it led to, with a number.</em>`,
        limit: `Technology made journeys cheaper and faster; it does not explain on its own why people chose to move, which is Unit 6's question.`,
        comparison: `Against section 01: in 1750 heavy goods moved cheaply only by water, and news only as fast as a horse or a ship.`
      },
      terms: [
        ['Interior', 'The middle of a continent, far from the sea.'],
        ['Telegraph', 'A way of sending messages as pulses of electricity along a wire.'],
        ['Migration', 'People moving to live in a new place.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one link of the chain. The College Board asks how technology shaped economic production over time, so the cards follow the causes in order: power, new materials, reach, and its effects.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Machines unlock fossil fuels',
        body: `Evidence to sort: energy from muscles, wood, wind and water before 1750; Newcomen's mine pump (1712); Watt's separate condenser (1765, patented 1769), using under a third of the coal; rotary engines (1780s) and mills in towns; Drake's oil well (1859); Otto (1876) and Benz (1886).`
      },
      {
        category: 'Developments and Processes',
        title: 'How much more energy',
        body: `Evidence to sort: Britain's coal, about 65 million tons (1854) and about 225 million (1900); coal about half the world's energy by about 1900; Jevons (1865): "with coal almost any feat is possible or easy"; 8,000 cars in the United States in 1900.`
      },
      {
        category: 'Developments and Processes',
        title: 'New methods after 1850',
        body: `Evidence to sort: the Bessemer process (1856) and US steel (about 69,000 tons in 1870, about 10 million in 1900); Perkin's mauve (1856), BASF (1865) and factory indigo (1897); Pearl Street (1882) and motors under 5 percent of US factory power (1899); interchangeable parts and standard screw threads (1841, 1864).`
      },
      {
        category: 'Causation',
        title: 'Longer reach, more trade and migration',
        body: `Evidence to sort: the Liverpool and Manchester Railway (1830); Russia's railways (27 km in 1840, over 53,000 in 1900); Promontory Summit (1869); the Trans-Siberian (1891 to 1904); sail 53 days, steam 7 or 8; Suez (1869); the Pleiad (1854); Morse (1844), the Atlantic cable (1866), Bombay (1870); the wheat price gap (57.6 percent in 1870, 15.6 in 1913); 55 million Europeans (1850 to 1914); over 29 million Indians and 19 million Chinese (1846 to 1940). For one, explain the link from the technology to the effect.`
      }
    ]
  }
};
