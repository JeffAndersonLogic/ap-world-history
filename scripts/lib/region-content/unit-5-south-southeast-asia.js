'use strict';

/**
 * Unit 5 by region: South and Southeast Asia.
 * One continuous story of India and the lands around the Bay of Bengal and the South China Sea
 * from 1750 to 1900, told in four sections: India as the world's cloth maker in 1750
 * (KC-5.1.II.B), the cloth trade turning around under cheaper machine goods and the trade rules
 * of the people in power, with Bombay's teak ships (KC-5.1.II.B), railways, cables, banks and
 * Indian mills reaching India while the handloom and the farm carried on (KC-5.1.IV,
 * KC-5.1.III.B, KC-5.1.II.B), and the steamships' migrants and the Filipino writers who imagined
 * a nation under European rule (KC-5.1.IV, KC-5.3.II.ii, KC-5.3.II.iii). Facts come from the
 * Topic 5.2, 5.3, 5.4, 5.5 and 5.7 chapters and their claim ledgers, and from the reviewed rebuild
 * of 5.10 (India's census of 1901), keeping their narrowings (a falling share is not a stop; no
 * single cause of India's decline; India's output per person fell, per Bairoch; the 70 to 85
 * percent duties limited to calicoes around 1813; Bombay's first mill founded 1854, about 200 mills
 * by the early 1900s, many but not all Indian-owned). Left out on purpose: the revolt of 1857,
 * British Crown rule and the colonial conquest of mainland Southeast Asia, which are Unit 6's, and
 * the region's iron works and Southeast Asian shipbuilding, which the CED offers only as optional
 * examples and the topic chapters do not carry.
 *
 * Plain-language and accuracy pass (2026-11-21, after the Unit 5 five-persona baseline): one idea
 * per sentence and per paragraph; definitions in parentheses or their own sentence, never between
 * commas; every College Board quotation moved out of the story into one "What the College Board
 * says" box per section, each opening "In short:", then each Key Concept sentence whole and word
 * for word from scripts/lib/ced-source/unit-5.js, then each illustrative example labelled "An
 * optional College Board example" (Indian textiles, Indian shipbuilding, HSBC, the Propaganda
 * Movement). The mills sentence no longer reads as if India's first mill was Bombay's: a
 * British-owned mill near Calcutta came first, about 1818, and Bombay's mill industry began with
 * the mill founded in 1854 (spinning from 1856, as Topic 5.4). Section 04 now joins Southeast Asia
 * to the India story through the steamships and through European rule, and its dates run to 1940
 * with the migration count. Nationalism uses the shared definition from KC-5.3.II.ii. Added "The
 * story in short" (inShort) and six closing cards in the fixed order.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-south-southeast-asia',
  slug: 'region-5-south-southeast-asia',
  unit: '5',
  region: 'South and Southeast Asia',
  titleHtml: 'South and Southeast <em>Asia</em>',
  deck: `In 1750 India's weavers sold cotton cloth on three continents. By 1900 India bought British machine-made cloth and sold raw cotton abroad. Yet many weavers were still at their looms, and Indian-owned mills were spinning thread. Steamships carried this trade, and they also carried millions of Indian and Chinese workers to Southeast Asia. There, in the Spanish Philippines, writers began to imagine a nation.`,
  inShort: [
    `In 1750 India's hand weavers made cotton cloth that sold on three continents.`,
    `Then British steam mills made cheaper cloth, and British rulers set trade rules that favored it.`,
    `By about 1830 India bought more cotton cloth than it sold, though many weavers kept weaving.`,
    `Railways and the telegraph tied India to the world, and steamships carried millions of migrants to Southeast Asia.`,
    `In the Spanish Philippines, Filipino writers asked for equal rights and began to imagine one nation.`
  ],
  topics: ['5.2', '5.3', '5.4', '5.5', '5.7'],
  ced: [
    'KC-5.1.II.B',
    'KC-5.1.IV',
    'KC-5.1.III.B',
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
      dates: 'About 1750 &nbsp;·&nbsp; Muslin, calico, and teak ships',
      thesis: `In 1750 India's hand weavers made some of the finest and cheapest cotton cloth in the world. They sold it on three continents. Britain's own cotton makers grew up copying it.`,
      parts: [
        {
          heading: 'Cloth for three continents',
          blocks: [
            { p: `In 1750 India was famous for its cotton cloth. Its weavers made a very thin, fine cloth called <span class="kt">muslin</span>. They also made cheap <span class="kt">calico</span> (cotton cloth printed with colored patterns). Traders sold this cloth around the Indian Ocean and in the Middle East. They sold it in West Africa and in Europe, too.` },
            { p: `All of it was made by hand. People spun the thread on wheels and wove it on looms, in homes and small workshops. Indian shipbuilders also built ocean-going ships out of teak (a strong wood).` },
            { p: `How much did India make? The economic historian Paul Bairoch made estimates. Around 1750, he thought, India made about a quarter of all the world's <span class="kt">manufactured goods</span> (things made by hand or machine, such as cloth, tools and ships). That was about as much as all of Europe together. Britain made under 2 percent (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { p: `Much of the world's cotton cloth came from India. Britain's cotton makers grew up copying it (<a href="#chapter-t5-3">Topic 5.3</a>). In the late 1700s British machines began spinning cotton. Their makers were trying to match what Indian hands already made. <a href="#r5-britain-factory">The Britain chapter</a> tells how those machines worked.` }
          ]
        },
        {
          heading: 'A company that ruled',
          blocks: [
            { p: `India's rulers were changing, too. The Mughal Empire had ruled most of the subcontinent. In 1750 it was breaking up into smaller states. Over the next century, much of India came under the rule of the British <span class="kt">East India Company</span>. It was a trading company with its own army.` },
            { p: `How the Company won that power belongs to Units 4 and 6. For this unit, one fact matters most. More and more, the people who set India's trade rules were British.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates, not counts',
              html: `Nobody counted every piece of cloth in the world in 1750. Bairoch's shares are careful estimates. He built them from what is known about people and their work. Historians who use them say they are rough. Use them to show the size of the change, never as exact amounts.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Middle Eastern and Asian countries kept making goods, but their share of world manufacturing fell. India's cloth making is one optional example.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined."`,
                `An optional College Board example: "Textile production in India and Egypt".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Muslin', `A very thin, fine cotton cloth made in India.`],
        ['Calico', `A cheap cotton cloth, often printed with colored patterns. It was made in India and later copied in Britain.`],
        ['Manufactured goods', `Things made by hand or by machine, such as cloth, tools and ships.`],
        ['East India Company', `A British trading company with its own army. It came to rule much of India.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'turnaround',
      num: '02',
      accent: 'rust',
      name: 'The Trade Turns Around',
      navLabel: 'The turnaround',
      dates: '1813 to the mid-1800s &nbsp;·&nbsp; Machine cloth, trade rules, and iron ships',
      thesis: `Within a generation, India went from selling cotton cloth to the world to buying it from Britain. Two things drove the change. Machine-made cloth was cheaper, and the people in power set trade rules that helped it.`,
      parts: [
        {
          heading: 'The numbers turn',
          blocks: [
            { p: `Look at the trade in cotton cloth. In <span class="num">1815</span> India sold about £1.3 million worth of it abroad. It bought only about £26,000 worth from England. By <span class="num">1832</span> the trade had turned around. India sold less than £100,000 worth and bought more than £400,000 worth.` },
            { p: `From about <span class="num">1830</span>, India bought more cotton cloth than it sold. Now it sold <span class="kt">raw cotton</span> to British mills instead. Raw cotton is cotton as it is picked, before it is spun into thread (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'Why',
          blocks: [
            { p: `The first cause was price. Lancashire is a county in northern England. Its steam-powered mills made cloth more cheaply than hand weavers could. Their cloth was cheaper even in India itself.` },
            { p: `The second cause was the trade rules. A <span class="kt">tariff</span> is a tax on goods brought in from another country. British cotton cloth entered Company-ruled India at a tariff of only 2½ percent. Britain treated Indian cloth very differently. Around <span class="num">1813</span>, Indian calicoes paid taxes of about 70 to 85 percent of their value to be sold in Britain.` },
            { p: `Some of India's troubles began before the factories did. The Mughal Empire broke up, and there were years of drought. Historians still argue about how much each cause mattered.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give one cause as the whole answer. "British machines were simply better" leaves out the trade rules. "Colonial rule alone destroyed Indian industry" leaves out the cheaper machines and the weavers who kept weaving. Name more than one cause.`
            } }
          ]
        },
        {
          heading: 'Teak ships, then iron',
          blocks: [
            { p: `Shipbuilding tells the same story. Bombay is the city now called Mumbai. At its <span class="kt">dockyard</span> (a shipyard), the Wadia family of master shipbuilders built teak warships. They built them for Britain's own Royal Navy.` },
            { p: `HMS Trincomalee was one of those ships. It was launched in <span class="num">1817</span>, and it is still afloat today in Hartlepool, England.` },
            { p: `But by the middle of the 1800s, navies were turning to iron ships driven by steam. These came mostly from British shipyards. Bombay's age of teak warships came to an end.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: steam-powered factories in Europe and the United States won a bigger share of the world's manufacturing.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution."`,
                `An optional College Board example: "Shipbuilding in India and Southeast Asia".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Raw cotton', `Cotton as it is picked, before it is spun into thread or woven into cloth.`],
        ['Tariff', `A tax on goods brought in from another country.`],
        ['Dockyard', `A shipyard, where ships are built and repaired.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rails',
      num: '03',
      accent: 'iron',
      name: 'Rails, Wires, Mills, and the Handloom',
      navLabel: 'Rails and looms',
      dates: '1853 to the 1930s &nbsp;·&nbsp; New lines, new mills, old work',
      thesis: `Railways, telegraph cables and banks tied India more tightly to the world market. Indian-owned mills began spinning thread. Underneath, most Indians still farmed, and many weavers were still at their handlooms.`,
      parts: [
        {
          heading: 'New lines',
          blocks: [
            { p: `India's first passenger train ran from Bombay to Thane in <span class="num">1853</span>. A railway could reach farms and towns where no river went.` },
            { p: `The Suez Canal opened in Egypt in <span class="num">1869</span>. It made the sea voyage from Europe to India much shorter. It mostly served steamships, because sailing ships found the Red Sea's winds hard to sail against.` },
            { p: `News sped up, too. A <span class="kt">telegraph</span> sends messages as pulses of electricity along a wire. From <span class="num">1865</span> an overland telegraph line joined London and India. Its messages passed through many relay stations and took days. In <span class="num">1870</span> an undersea cable through the Red Sea reached Bombay. Now a message between London and Bombay took minutes (<a href="#chapter-t5-5">Topic 5.5</a>).` },
            { p: `Banks followed the trade. The bank known today as HSBC opened in Hong Kong in <span class="num">1865</span>. That July it opened in London, to change money for clients in China and India. HSBC was a <span class="kt">transnational business</span> (one that works across the borders of many countries). It was itself a bank. It lent money and changed money for traders (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: 'New mills',
          blocks: [
            { p: `Machines came to India itself. India's first cotton mill was British-owned. It opened near Calcutta around <span class="num">1818</span>. Bombay's mill industry began later. In <span class="num">1854</span> the Bombay businessman Cowasji Davar founded a cotton mill there. It began spinning in <span class="num">1856</span>.` },
            { p: `More mills followed. By the early 1900s India had about 200 cotton mills, and many were Indian-owned. Together they had about five million <span class="kt">spindles</span>. A spindle is the part of a spinning machine that twists fiber into thread.` },
            { p: `The mills spun thread for India's own handloom weavers. They also spun yarn to sell in China. Yarn is thread made for weaving.` }
          ]
        },
        {
          heading: 'Old work',
          blocks: [
            { p: `India's hand weaving shrank, but it did not die. A <span class="kt">handloom</span> is a loom worked by hand and foot, with no engine. Many weavers switched to cheaper machine-spun thread so they could keep weaving. Some of that thread came from India's new mills.` },
            { p: `The economic historian Tirthankar Roy studied these weavers. He finds that handloom cloth held a roughly steady share of India's cloth market from the 1890s to the 1930s. In <span class="num">1908</span>, in one province of northern India alone, about a million people still lived from handloom weaving.` },
            { p: `Most Indians still farmed. A <span class="kt">census</span> is an official count of the people. India's census of <span class="num">1901</span> found that about two-thirds of the people lived by farming.` },
            { p: `Still, India's place in the world had changed. A <span class="kt">share</span> is a part of a whole. By Bairoch's estimates, India's share of the world's manufactured goods fell from about a quarter in 1750 to under 2 percent by <span class="num">1900</span>. His estimates suggest that India also made less per person. It lost ground, not only share.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that India "stopped manufacturing." India kept making cloth, by hand and in mills. What fell was its share of the world's manufactured goods. The falling share is the change. The weaving that went on is the continuity.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: railways, steamships and the telegraph reached inland and led to more trade and migration, and big businesses grew across borders.`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration."`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance."`,
                `An optional College Board example: "Hong Kong and Shanghai Banking Corporation (HSBC)".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Telegraph', `A way of sending messages as pulses of electricity along a wire.`],
        ['Transnational business', `A business that works across the borders of many countries.`],
        ['Spindle', `The part of a spinning machine that twists fiber into thread.`],
        ['Handloom', `A loom worked by hand and foot, with no engine.`],
        ['Share', `A part of a whole. Here, the part of all the world's manufactured goods that one region made.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'southeast',
      num: '04',
      accent: 'oxide',
      name: 'Steamships, Migrants, and a Nation Imagined',
      navLabel: 'Southeast Asia',
      dates: '1846 to 1940 &nbsp;·&nbsp; Migrants, and the Filipino writers of the 1880s and 1890s',
      thesis: `The steamships that tied India to the world market also carried millions of Indian and Chinese workers to Southeast Asia. In the Spanish Philippines, Filipino writers asked for equal rights and began to imagine one nation. In 1896 Spain executed the best known of them.`,
      parts: [
        {
          heading: 'Millions on the move',
          blocks: [
            { p: `Steamships carried people as well as goods. They made long journeys faster and cheaper, so <span class="kt">migration</span> grew. Migration means people moving to live in a new place.` },
            { p: `Many of the migrants came from India. Between <span class="num">1846</span> and <span class="num">1940</span>, more than 29 million departures of Indians were counted, to Southeast Asia and the lands around the Indian Ocean. More than 19 million departures of Chinese were counted, mostly to Southeast Asia. The historian Adam McKeown counted them from passenger lists and port records.` },
            { p: `His count runs past 1900, because the movement went on. Many of the migrants later went home. Why they moved, and the work they found, is Unit 6.` }
          ]
        },
        {
          heading: 'Rules made in Europe',
          blocks: [
            { p: `India and the Philippines had something else in common. In both, Europeans made the rules. In India, the British set the trade rules. In the Philippines, Spain had ruled since the 1500s.` },
            { p: `In the Philippines, Catholic <span class="kt">friars</span> held great power. Friars were Spanish members of Catholic religious orders. Most of them were priests who ran the parishes. A parish is the area that one church serves.` }
          ]
        },
        {
          heading: 'The Propaganda Movement',
          blocks: [
            { p: `In the 1880s and 1890s, Filipino writers began the <span class="kt">Propaganda Movement</span>. Many of them were students in Europe. Here "propaganda" meant spreading their ideas. They asked for equal rights with Spaniards.` },
            { p: `The best-known writer was José Rizal. In <span class="num">1887</span> he published a novel, Noli Me Tángere ("Touch Me Not"). It attacked the abuses of Spanish rule and of the friars. In <span class="num">1896</span> a secret society, the Katipunan, began a revolution for independence. Rizal did not lead it. But Spain convicted him of rebellion and shot him in December <span class="num">1896</span> (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Propaganda Movement demanded independence from the start. Its writers asked for equal rights within Spain's empire, not independence. A separate secret society, the Katipunan, began the revolution for independence in 1896.`
            } },
            { p: `These writers wanted people across many islands to see themselves as one people: Filipinos. That feeling is called <span class="kt">nationalism</span>. It is a sense that people who share a language, religion, social customs and territory form one nation. It is also loyalty to that nation.` },
            { p: `Nationalists often wanted their nation to have its own state, with its own borders. <a href="#r5-europe-nations">The Europe chapter</a> tells how nationalism helped join Italy and Germany into new states.` },
            { p: `In the Philippines, the two groups wanted different things. The Propaganda writers asked for equal rights inside Spain's empire. The Katipunan fought for something more. It wanted the islands to become their own independent state.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: nationalists often linked their nation to a state with its own borders. In the Philippines, the Katipunan fought for that state. The Propaganda writers asked for equal rights inside Spain's empire instead.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions."`,
                `An optional College Board example: "Propaganda Movement in the Philippines".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Migration', `People moving to live in a new place.`],
        ['Friar', `A member of a Catholic religious order. In the Philippines, most friars were Spanish priests who ran the parishes.`],
        ['Propaganda Movement', `Filipino writers of the 1880s and 1890s who asked for equal rights with Spaniards.`],
        ['Nationalism', `A sense that people who share a language, religion, social customs and territory form one nation, and loyalty to that nation.`]
      ]
    }
  ],

  closing: {
    heading: 'South and Southeast Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted by its sides for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `In 1750 India's weavers sold cotton cloth on three continents. How much did India's place in the world's cloth making change between 1750 and 1900? Make a claim. Support it with one change and one continuity from this chapter. Then say who gained from the change and who lost.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Europeans made the rules in India and the Philippines',
        body: `The Mughal Empire was already breaking up by 1750. Over the next century the British East India Company came to rule much of India. Spain ruled the Philippines from the 1500s, and in 1896 it shot José Rizal during the Katipunan's revolution.`
      },
      {
        category: 'Religious',
        title: 'Catholic friars held power in the Philippines, and writers attacked them',
        body: `Spanish friars held great power in the Philippines. Most of them were priests who ran the parishes. Rizal's novel Noli Me Tángere (1887) attacked their abuses.`
      },
      {
        category: 'Social',
        title: 'Most people still worked the land and the loom, and millions moved',
        body: `India's census of 1901 found about two-thirds of the people living by farming. In 1908 about a million people in one province still lived from handloom weaving. From 1846 to 1940, McKeown counted more than 29 million departures of Indians and more than 19 million of Chinese, mostly to Southeast Asia. Many later went home.`
      },
      {
        category: 'Intellectual',
        title: 'Filipino writers argued for equal rights and imagined one nation',
        body: `In the 1880s and 1890s, the Propaganda writers asked for equal rights with Spaniards. Many of them were students in Europe. They wanted people across many islands to see themselves as one people, Filipinos.`
      },
      {
        category: 'Technological',
        title: 'Steam and wire tied India to the world',
        body: `India's first passenger train ran from Bombay to Thane in 1853. In 1870 an undersea cable cut a message between London and Bombay from days to minutes. By the mid-1800s, iron steamships were replacing Bombay's teak warships, such as HMS Trincomalee (1817).`
      },
      {
        category: 'Economic',
        title: 'India went from selling cloth to buying it, but kept making goods',
        body: `By Bairoch's estimates, India's share of the world's manufactured goods fell from about a quarter around 1750 to under 2 percent by 1900. From about 1830 India bought more cotton cloth than it sold, and British cloth entered India at a tariff of only 2½ percent. Bombay's mill industry began in 1854, and by the early 1900s India had about 200 cotton mills.`
      }
    ]
  }
};
