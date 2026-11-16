'use strict';

/**
 * Unit 5 by region: South and Southeast Asia.
 * One continuous story of India and the lands around the Bay of Bengal and the South China Sea
 * from 1750 to 1900, told in four sections: India as the world's cloth maker in 1750
 * (KC-5.1.II.B), the cloth trade turning around under cheaper machine goods and the trade rules
 * of the people in power, with Bombay's teak ships (KC-5.1.II.B), railways, cables and banks
 * reaching India while the handloom and the farm carried on (KC-5.1.IV, KC-5.1.III.B,
 * KC-5.1.II.B), and Southeast Asia's migrants and the Filipino writers who imagined a nation
 * (KC-5.1.IV, KC-5.3.II.ii, KC-5.3.II.iii). Facts come from the Topic 5.2, 5.3, 5.4, 5.5 and 5.7
 * chapters and their claim ledgers, and from the reviewed rebuild of 5.10 (India's census of 1901),
 * keeping their narrowings (a falling share is not a stop; no single cause of India's decline;
 * the 70 to 85 percent duties limited to calicoes around 1813). Left out on purpose: the revolt of
 * 1857, British Crown rule and the colonial conquest of mainland Southeast Asia, which are Unit
 * 6's, and the region's iron works and Southeast Asian shipbuilding, which the CED offers only as
 * optional examples and the topic chapters do not carry.
 */

module.exports = {
  topicKey: 'r5-south-southeast-asia',
  slug: 'region-5-south-southeast-asia',
  unit: '5',
  region: 'South and Southeast Asia',
  titleHtml: 'South and Southeast <em>Asia</em>',
  deck: `In 1750 India's weavers sold cotton cloth on three continents. By 1900 India bought most of its machine-made cloth from Britain and sold raw cotton abroad, though many of its weavers were still at their looms and Indian-owned mills were spinning thread. Follow how the trade turned around, what railways and steamships brought, the Indian and Chinese migrants who crossed the Bay of Bengal and the South China Sea, and the Filipino writers who imagined a nation.`,
  topics: ['5.2', '5.3', '5.4', '5.5', '5.7'],
  ced: [
    'KC-5.1.II.B',
    'KC-5.1.IV',
    'KC-5.1.III.B',
    'KC-5.3.II.ii',
    'KC-5.3.II.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'cloth',
      num: '01',
      accent: 'gold',
      name: 'The World\'s Cloth Makers',
      navLabel: 'India in 1750',
      dates: 'About 1750 &nbsp;·&nbsp; Muslin, calico, and teak',
      thesis: `In 1750 India's hand weavers made some of the finest and cheapest cotton cloth in the world, and sold it across three continents. Britain's own cotton makers grew up copying it.`,
      parts: [
        {
          heading: 'Cloth for three continents',
          blocks: [
            { p: `In 1750 India's cotton cloth, from fine thin <span class="kt">muslins</span> to cheap printed <span class="kt">calicoes</span>, was sold across the Indian Ocean, in the Middle East, in West Africa and in Europe. It was all made by hand: spun on wheels and woven on looms in homes and workshops. Indian shipbuilders built ocean-going ships of teak. The economic historian Paul Bairoch estimated that around 1750 India made about a quarter of all the world's manufactured goods, about as much as all of Europe together, while Britain made under 2 percent (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { p: `Much of the world's cotton cloth came from India, and Britain's cotton makers grew up copying it (<a href="#chapter-t5-3">Topic 5.3</a>). When Britain's new machines began spinning cotton in the late 1700s, their makers were trying to match what Indian hands already made.` }
          ]
        },
        {
          heading: 'A company that ruled',
          blocks: [
            { p: `India in 1750 was also changing hands. The Mughal Empire, which had ruled most of the subcontinent, was breaking up into smaller states, and over the next century much of India came under the rule of the British <span class="kt">East India Company</span>, a trading company with its own army. How it took that power is part of the story of empire (Units 4 and 6). In this unit, what matters is that the people who set India's trade rules were increasingly British.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates, not counts',
              html: `Nobody counted every piece of cloth in the world in 1750. Bairoch's shares are careful estimates built from what is known about people and their work, and historians who use them say they are rough. Use them to show the size of the change, never as exact amounts.`
            } }
          ]
        }
      ],
      terms: [
        ['Muslin', `A fine, thin cotton cloth, made in India.`],
        ['Calico', `A cotton cloth, often printed with colored patterns, made in India and later copied in Britain.`],
        ['East India Company', `The British trading company, with its own army, that came to rule much of India.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'turnaround',
      num: '02',
      accent: 'rust',
      name: 'The Trade Turns Around',
      navLabel: 'The turnaround',
      dates: '1813 to the 1860s &nbsp;·&nbsp; Machine cloth, trade rules, and iron ships',
      thesis: `Within a generation, India went from selling cotton cloth to the world to buying it from Britain. Cheaper machine-made cloth and the trade rules of the people in power both drove the change.`,
      parts: [
        {
          heading: 'The numbers turn',
          blocks: [
            { p: `In <span class="num">1815</span> India sold about £1.3 million worth of cotton cloth abroad and bought only about £26,000 worth from England. By <span class="num">1832</span> it sold less than £100,000 worth and bought more than £400,000 worth. From about <span class="num">1830</span>, India bought more cotton cloth than it sold, and it sold raw cotton to British mills instead (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'Why',
          blocks: [
            { p: `Cloth from Lancashire's steam-powered mills was cheaper than cloth woven by hand, even in India itself. The trade rules mattered too. British cotton cloth entered Company-ruled India at a <span class="kt">tariff</span>, an import tax, of only 2½ percent, while around <span class="num">1813</span> Indian calicoes paid taxes of about 70 to 85 percent of their value to be sold in Britain. Some of India's troubles began before the factories did, such as the breakup of the Mughal Empire and years of drought, and historians still argue about how much each cause mattered.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give one cause as the whole answer. "British machines were simply better" leaves out the trade rules; "colonial rule alone destroyed Indian industry" leaves out the cheaper machines and the weavers who kept weaving. Name more than one cause.`
            } }
          ]
        },
        {
          heading: 'Teak ships, then iron',
          blocks: [
            { p: `At the Bombay dockyard, in the city now called Mumbai, the Wadia family of master shipbuilders built teak warships for Britain's own Royal Navy. One of them, HMS Trincomalee, launched in <span class="num">1817</span>, is still afloat today in Hartlepool, England. But by the middle of the 1800s navies were turning to iron ships driven by steam, which came mostly from British shipyards, and Bombay's age of teak warships came to an end.` },
            { p: `This is the change the College Board describes: steam-powered industry in Europe and the United States "contributed to the increase in these regions' share of global manufacturing," and while "Middle Eastern and Asian countries continued to produce manufactured goods, these regions' share in global manufacturing declined." By Bairoch's estimates, India's share fell from about a quarter in 1750 to under 2 percent by <span class="num">1900</span>, and India also made less per person: it lost ground, not only share.` }
          ]
        }
      ],
      terms: [
        ['Raw cotton', `Cotton as it is picked, not yet spun into thread or woven into cloth.`],
        ['Tariff', `A tax on goods brought in from another country.`],
        ['Dockyard', `A shipyard where ships are built and repaired.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rails',
      num: '03',
      accent: 'iron',
      name: 'Rails, Wires, and the Handloom',
      navLabel: 'Rails and looms',
      dates: '1853 to 1908 &nbsp;·&nbsp; New lines, old work',
      thesis: `Railways, telegraph cables and banks tied India more tightly to the world market. Underneath, most Indians still farmed, and millions of weavers were still at their handlooms.`,
      parts: [
        {
          heading: 'New lines',
          blocks: [
            { p: `India's first passenger train ran from Bombay to Thane in <span class="num">1853</span>. The Suez Canal, opened in <span class="num">1869</span>, cut the voyage from Europe to India for steamships, and in <span class="num">1870</span> an undersea telegraph cable through the Red Sea reached Bombay, so a message could travel between London and Bombay in minutes; an overland telegraph line, opened in <span class="num">1865</span>, had needed days, passing through many relay stations (<a href="#chapter-t5-5">Topic 5.5</a>). In the College Board's words, railroads, steamships and the telegraph made "exploration, development, and communication possible in interior regions globally," which "led to increased trade and migration."` },
            { p: `Banks followed the trade. HSBC, founded in Hong Kong in <span class="num">1865</span>, opened in London that July to change money for clients in China and India, one of the "large-scale transnational businesses" the College Board names (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: 'Old work',
          blocks: [
            { p: `India's hand weaving shrank, but it did not die. Many weavers switched to cheaper machine-spun thread so they could keep weaving, and some of that thread was Indian. From <span class="num">1854</span> steam-powered cotton mills were built in India, first in Bombay by Indian owners; by the early 1900s India had about 200 of them, many Indian-owned, with about five million spindles (the parts of a spinning machine that twist fiber into thread), spinning thread for India's handloom weavers and yarn, thread for weaving, for sale in China. The economic historian Tirthankar Roy finds that handloom cloth held a roughly steady share of India's cloth market from the 1890s to the 1930s, and in <span class="num">1908</span>, in one province of northern India alone, about a million people still lived from handloom weaving. And most Indians still farmed: the census of <span class="num">1901</span> found about two-thirds of the people living by farming.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that India "stopped manufacturing." The College Board's own sentence says Asian countries "continued to produce manufactured goods" while their share "declined." The falling share is the change; the weaving that went on is the continuity.`
            } }
          ]
        }
      ],
      terms: [
        ['Handloom', `A loom worked by hand and foot, with no engine.`],
        ['Telegraph', `A way of sending messages as pulses of electricity along a wire.`],
        ['Share', `A part of a whole; here, the part of all the world's manufactured goods made in one region.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'southeast',
      num: '04',
      accent: 'oxide',
      name: 'Migrants, and a Nation Imagined',
      navLabel: 'Southeast Asia',
      dates: '1846 to 1896 &nbsp;·&nbsp; Ships full of workers, and the Propaganda Movement',
      thesis: `Steamships carried millions of Indian and Chinese workers to Southeast Asia. In the Spanish Philippines, Filipino writers took up the language of rights and nation, and Spain answered with an execution.`,
      parts: [
        {
          heading: 'Millions on the move',
          blocks: [
            { p: `Cheaper, faster steamships carried people as well as goods, and <span class="kt">migration</span> grew. Between <span class="num">1846</span> and <span class="num">1940</span>, more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean, counted from passenger lists and port records by the historian Adam McKeown. Many later went home. Why they moved, and the work they found, is Unit 6.` }
          ]
        },
        {
          heading: 'The Propaganda Movement',
          blocks: [
            { p: `Spain had ruled the Philippines since the 1500s. In the 1880s and 1890s Filipino writers, many of them students in Europe, began what was called the <span class="kt">Propaganda Movement</span>. They demanded equal rights with Spaniards. The best known, José Rizal, published his novel Noli Me Tángere ("Touch Me Not") in <span class="num">1887</span>, attacking the abuses of Spanish rule and of the friars, Spanish members of Catholic religious orders, most of them priests who ran the parishes, who held great power in the islands. In <span class="num">1896</span>, during a revolution against Spanish rule, Spain executed Rizal (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `These writers were building what the College Board calls "a new sense of commonality based on language, religion, social customs, and territory": a people of many islands and languages who began to see themselves as one, Filipino. That loyalty to a nation is <span class="kt">nationalism</span>. In time, as the College Board says of such "newly imagined national communities," that identity was linked "with borders of the state."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Propaganda Movement demanded independence from the start. Its writers first asked for equal rights within Spain's empire. The revolution of 1896 went further.`
            } }
          ]
        }
      ],
      terms: [
        ['Migration', `People moving to live in a new place.`],
        ['Propaganda Movement', `Filipino writers of the 1880s and 1890s who demanded equal rights with Spaniards.`],
        ['Nationalism', `Loyalty to a nation, people who see themselves as one, above a king or an empire.`]
      ]
    }
  ],

  closing: {
    heading: 'South and Southeast Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `In 1750 India's weavers sold cotton cloth on three continents. Between 1750 and 1900, how much did India's place in the world's making of cloth change? Make a claim, then support it with one change and one continuity from this chapter, and say for whom the change was greatest.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'A company set the trade rules',
        body: `As the Mughal Empire broke up, the British East India Company came to rule much of India and let British cloth in at 2½ percent. Spain ruled the Philippines, and executed José Rizal in 1896 during a revolution against its rule.`
      },
      {
        category: 'Religious',
        title: 'Writers against the friars',
        body: `Rizal's novel of 1887 attacked the power of the Spanish friars in the Philippines. Religion was one of the things the College Board says a new national community could be built on, with language, customs and territory.`
      },
      {
        category: 'Social',
        title: 'Weavers, farmers and migrants',
        body: `About a million people in one Indian province still lived from the handloom in 1908, and about two-thirds of Indians farmed in 1901. More than 29 million Indians and 19 million Chinese moved to Southeast Asia and the Indian Ocean lands between 1846 and 1940.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Hand skill met steam and wire',
        body: `Bombay's Wadia shipbuilders made teak warships such as HMS Trincomalee (1817) until iron and steam replaced them. India's first passenger train ran in 1853, and the telegraph cable of 1870 linked Bombay to London within minutes.`
      },
      {
        category: 'Economic',
        title: 'From cloth seller to cloth buyer',
        body: `By estimate, India made about a quarter of the world's manufactured goods in 1750 and under 2 percent by 1900. From about 1830 it bought more cotton cloth than it sold, and sold raw cotton abroad instead. From 1854 steam cotton mills in India, about 200 by the early 1900s and many of them Indian-owned, spun thread at home.`
      }
    ]
  }
};
