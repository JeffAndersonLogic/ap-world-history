'use strict';

/**
 * Topic 5.4, Industrialization Spreads in the Period from 1750 to 1900: the
 * deep reading.
 *
 * Why this exists. The CED gives 5.4 one learning objective, how different
 * modes and locations of production developed and changed over time, two Key
 * Concepts (KC-5.1.I.D, the spread of the new methods to other parts of Europe,
 * the United States, Russia and Japan; KC-5.1.II.B, the factory regions' share
 * of world manufacturing rising while the Middle East's and Asia's fell as they
 * continued to produce) and a reasoning process of Continuity and Change. The
 * First & 10 tells the story in one pass. What it has no room for is how the
 * methods actually travelled, what a share is, and the evidence for what
 * continued.
 *
 * Rebuilt from the 5.4 story (docs/TOPIC-5-4-STORY-DRAFT.md) on 2026-10-22.
 * The old chapter, "Who Got to Industrialize," taught Meiji Japan's program,
 * the German state's tariffs and Muhammad Ali's state mills (all Topic 5.6's)
 * and argued a single cause, that colonial policy decided who could
 * industrialize. The CED's sentence is narrower: shares moved, and the old
 * makers continued to produce.
 *
 * Three things carried deliberately:
 *
 *   1. Both halves of the objective: modes (by hand, by steam-powered
 *      machine) and locations (where).
 *   2. All four destinations of KC-5.1.I.D, and what carried the methods
 *      there: people, machines, money.
 *   3. Both halves of KC-5.1.II.B: the change in shares, and the continuity,
 *      with the CED's examples (textiles in India and Egypt, shipbuilding and
 *      iron works in India).
 */

module.exports = {
  topicKey: 't5-4',
  slug: 'topic-5-4-industrialization-spreads',
  sourceFile: 'deep-reading-topic-5-4-industrialization-spreads.html',
  lessonFile: 'lesson-5-4-industrialization-spreads.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.4: Who Made the World\'s Goods?',
  eyebrow: 'Topic 5.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Made the <em>World\'s Goods</em>?',
  deck: `In 1750 most of the world's goods were made by hand, and most of them in Asia. Then the factory left Britain. This chapter follows how it traveled and where it took root, how the world's shares of manufacturing moved, and what the old makers kept making while their share shrank.`,
  meta: ['Five sections', 'The world in 1750, people, machines and money, the shares, what continued', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.4 &nbsp;·&nbsp; Who Made the World\'s Goods? &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain how the ways goods were made, and the places they were made, changed between 1750 and 1900. That is a continuity-and-change question. Section 01 sets the starting point; sections 02 and 03 follow the change in places; section 04 measures the change; section 05 is the continuity, and why the old makers' share fell. Each section ends with a tool, a limit and a comparison you can use in an answer.`,
    steps: [
      `<b>01 The world's makers in 1750:</b> by hand, and mostly in Asia.`,
      `<b>02 Keeping the secret, and losing it:</b> the methods leave Britain with people.`,
      `<b>03 Machines, money and coal:</b> the methods reach other parts of Europe, the United States, Russia and Japan.`,
      `<b>04 The shares move:</b> what changed, and what a share is.`,
      `<b>05 The old makers kept making:</b> what continued, and why their share fell.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'makers',
      num: '01',
      accent: 'gold',
      name: 'The World\'s Makers in 1750',
      navLabel: 'The world in 1750',
      dates: 'About 1750 &nbsp;·&nbsp; The starting point',
      thesis: `In 1750 almost everything was made by hand, at home or in workshops, and most of the world's manufactured goods were made in China and India.`,
      parts: [
        {
          heading: 'Made by hand',
          blocks: [
            { p: `In <span class="num">1750</span> a shirt, a pot, a plow or a ship was made by people using hand tools, at home or in small workshops. This is <span class="kt">hand production</span>. Power came from muscles, animals, wind and water wheels. That was true in Britain, too: Arkwright's mill at Cromford was still twenty years away.` },
            { p: `The places that made the most were the places with the most people and the most skilled craftworkers. India's cotton cloth, from fine thin muslins to cheap printed calicoes, was sold across the Indian Ocean, in the Middle East, in West Africa and in Europe. Chinese silk, porcelain and cotton cloth filled China's own huge markets and traveled abroad. Indian shipbuilders built ocean-going ships of teak.` }
          ]
        },
        {
          heading: 'Who made how much',
          blocks: [
            { p: `Nobody counted every piece of cloth in the world in <span class="num">1750</span>. But the economic historian Paul Bairoch made careful estimates, working backward from what is known about people and their work. He estimated that around 1750 China made about a third of all the world's manufactured goods and India about a quarter. All of Europe together made about a quarter. Britain made under 2 percent.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates, not counts',
              html: `Bairoch's figures were published in 1982 and reprinted in Paul Kennedy's The Rise and Fall of the Great Powers (1987). They are built from guesses about population and output, and historians who use them say they are rough. Use them to show the size of the change, never as exact amounts.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Set the starting point. <em>Before you say what changed, say how and where most goods were made in 1750.</em>`,
        limit: `The 1750 figures are estimates; say "about," and use them for size, not precision.`,
        comparison: `Against 1900 (section 04): in 1750 Asia made most of the world's goods; by 1900 Europe and the United States did.`
      },
      terms: [
        ['Manufacturing', 'Making goods, such as cloth, tools and pots, by hand or by machine.'],
        ['Hand production', 'Making goods with hand tools, at home or in workshops, without powered machines.'],
        ['Calico', 'A cotton cloth, often printed with colored patterns, made in India and later copied in Britain.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'secret',
      num: '02',
      accent: 'iron',
      name: 'Keeping the Secret, and Losing It',
      navLabel: 'People',
      dates: '1789 to 1824 &nbsp;·&nbsp; The methods leave Britain',
      thesis: `Britain tried to keep its new methods at home by law. They left anyway, first in the heads of skilled people.`,
      parts: [
        {
          heading: 'The laws',
          blocks: [
            { p: `Britain's leaders knew the new machines were worth a great deal. British law banned <span class="kt">skilled workers</span> in the textile trades from leaving to work abroad, and banned the export of textile machines. The ban on workers leaving was repealed in <span class="num">1824</span>; the last bans on exporting machinery were lifted in <span class="num">1843</span>.` }
          ]
        },
        {
          heading: 'Samuel Slater',
          blocks: [
            { p: `Samuel Slater learned the cotton trade as an apprentice at Jedediah Strutt's mill at Belper, in Derbyshire. Strutt was Arkwright's partner, so Slater learned Arkwright's machines from the inside. In <span class="num">1789</span> he sailed for the United States without telling anyone what he knew. At Pawtucket, Rhode Island, working with American merchants, he built water-powered spinning machines from memory. The mill that still stands there was begun in <span class="num">1793</span> and enlarged several times afterward.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the mill is still there',
              html: `The Slater Mill still stands at Pawtucket, part of the Blackstone River Valley National Historical Park, run by the National Park Service. It was begun in 1793 and enlarged several times by the 1830s, so a photograph of it today shows the enlarged mill, not the first one.`
            } }
          ]
        },
        {
          heading: 'John Cockerill',
          blocks: [
            { p: `In Belgium, John Cockerill, the son of an English machine maker, began building machines at Seraing, near Liège, in <span class="num">1817</span>, and added ironworks there in the 1820s. Liège sat on one of the richest coalfields on the continent of Europe, with rivers to carry goods. The pattern from Topic 5.3, coal near water, was waiting there.` }
          ]
        }
      ],
      useThis: {
        tool: `Name the carrier. <em>Say who or what carried the methods to a new place.</em>`,
        limit: `One person is a case, not the whole spread: Slater shows how the methods could travel, not how fast they spread everywhere.`,
        comparison: `Against section 03: first the methods traveled in people's heads; later machines and money carried them too.`
      },
      terms: [
        ['Skilled workers', 'People trained to build, run or mend machines or to do a craft well.'],
        ['Apprentice', 'A young worker who learns a trade by working for a master for several years.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'spread',
      num: '03',
      accent: 'sage',
      name: 'Machines, Money and Coal',
      navLabel: 'Where it went',
      dates: '1820s to 1900 &nbsp;·&nbsp; Other parts of Europe, the US, Russia, Japan',
      thesis: `Machines and money carried the methods too, and most took root near coal, or by rivers that could turn wheels: in other parts of Europe, in the United States, and later in Russia and Japan.`,
      parts: [
        {
          heading: 'Other parts of Europe',
          blocks: [
            { p: `The first railway in the German states, from Nuremberg to Fürth, opened in <span class="num">1835</span> with a locomotive built in England. On the continent, factories grew where coal lay, as they had in Britain: around Liège in Belgium, in the Ruhr valley of the German states, and in northern France.` }
          ]
        },
        {
          heading: 'The United States',
          blocks: [
            { p: `In the United States, wealthy Boston merchants paid for big cotton mills at Lowell, Massachusetts, from the <span class="num">1820s</span>, beside a river that could turn their wheels. Most of the workers were young women from New England farms. By <span class="num">1900</span> the United States made more of the world's manufactured goods than any other country.` }
          ]
        },
        {
          heading: 'Russia and Japan',
          blocks: [
            { p: `Russia and Japan came later, mostly after <span class="num">1870</span>. A Welsh engineer, John Hughes, built ironworks in the coal country of southern Russia in the early 1870s; the town that grew up around them was named Yuzovka, after him. In Japan the Osaka Spinning Company opened in <span class="num">1883</span> with cotton-spinning machines made in Britain, driven by <span class="kt">steam power</span>, and it ran day and night.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that industry "spread everywhere." The College Board names four places it spread to: other parts of Europe, the United States, Russia and Japan. Within them, it clustered where coal and iron were found. How the Russian and Japanese governments pushed industry on purpose is Topic 5.6.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Find the pattern. <em>List three places, say what carried the methods to each, then say what they share.</em>`,
        limit: `The pattern is about carriers and resources; it does not mean every place with coal industrialized.`,
        comparison: `Against Britain (Topic 5.3): Britain built the methods first from its own factors; the later regions borrowed the methods and added their own coal, water and money.`
      },
      terms: [
        ['Steam power', 'Power from an engine that burns fuel, usually coal, to boil water and turn the steam into motion.'],
        ['Locomotive', 'A steam engine on wheels that pulls a railway train.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'shares',
      num: '04',
      accent: 'gold',
      name: 'The Shares Move',
      navLabel: 'The shares',
      dates: '1750 to 1900 &nbsp;·&nbsp; What changed',
      thesis: `Steam-powered factories made goods far faster and more cheaply than hands could, so the regions that had them made a fast-growing share of the world's goods, and the share made in Asia fell.`,
      parts: [
        {
          heading: 'What changed',
          blocks: [
            { p: `A <span class="kt">share</span> is a part of a whole. In Bairoch's estimates, Britain's share of the world's manufacturing went from under 2 percent in <span class="num">1750</span> to about a fifth by <span class="num">1860</span>. By <span class="num">1900</span> Europe and the United States together made more than four-fifths of the world's manufactured goods, and the United States had passed Britain as the largest maker.` },
            { p: `Over the same years, China's share fell from about a third to about 6 percent, and India's from about a quarter to under 2 percent.` }
          ]
        },
        {
          heading: 'A share is not an amount',
          blocks: [
            { p: `Imagine a pizza that grows much bigger. Your slice can stay the same size while your share of the pizza shrinks. The world was making far more goods in <span class="num">1900</span> than in <span class="num">1750</span>. So a region's share can fall even while it keeps making goods, because the total grows faster. For India, though, Bairoch's estimates suggest it also made less per person over time: it lost ground, not only share.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Asia "stopped manufacturing." The College Board's own sentence says Middle Eastern and Asian countries "continued to produce manufactured goods" while their share "declined." A falling share is the change; the making that went on is the continuity.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Use two numbers. <em>Give a share for 1750 and a share for 1900, and say "estimated."</em>`,
        limit: `Shares say nothing by themselves about whether people were better or worse off.`,
        comparison: `Against section 05: the share is the change; the weavers and shipbuilders are the continuity.`
      },
      terms: [
        ['Share', 'A part of a whole; here, the part of all the world\'s manufactured goods made in one region.'],
        ['Estimate', 'A careful guess built from the evidence that exists, not an exact count.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'continued',
      num: '05',
      accent: 'iron',
      name: 'The Old Makers Kept Making',
      navLabel: 'What continued',
      dates: '1750 to 1900 &nbsp;·&nbsp; What continued, and why the share fell',
      thesis: `India, China and the Middle East kept making cloth, ships and other goods, much of it by hand. Their share shrank because the rest of the world made far more, because machine-made goods were cheaper, and because of the trade rules of the people in power, among other causes historians still argue about.`,
      parts: [
        {
          heading: 'What continued',
          blocks: [
            { p: `In India, hand weaving shrank, but it did not die. Weavers kept working cloth on <span class="kt">handloom</span>s, and many switched to cheaper machine-spun thread so they could keep weaving. The economic historian Tirthankar Roy finds that handloom cloth held a roughly steady share of India's cloth market from the 1890s to the 1930s, and in <span class="num">1908</span>, in one province of northern India alone, about a million people still lived from handloom weaving. In China, farm families kept weaving cloth at home, more and more of it from cheaper machine-made thread. In the Ottoman Empire, the number of handlooms in the Syrian cities of Aleppo and Damascus held steady from <span class="num">1860</span> to <span class="num">1914</span>.` },
            { p: `Indian shipbuilders kept building, too. At the Bombay <span class="kt">dockyard</span>, the shipyard of the city now called Mumbai, the Wadia family of master shipbuilders built teak warships for Britain's own Royal Navy. One of them, HMS Trincomalee, launched in <span class="num">1817</span>, is still afloat today in Hartlepool, England, where its museum calls it Britain's oldest warship still afloat.` }
          ]
        },
        {
          heading: 'Why the share fell',
          blocks: [
            { p: `One reason the share fell is that the rest of the world made far more goods. Another is that the old makers lost buyers. Cloth from Lancashire's machines was cheaper than cloth woven by hand, even in India itself. In <span class="num">1815</span> India sold about £1.3 million worth of cotton cloth abroad and bought only about £26,000 worth from England. By <span class="num">1832</span> it sold less than £100,000 worth and bought more than £400,000 worth. From about <span class="num">1830</span>, India bought more cotton cloth than it sold. India, which had sold cloth to the world, now bought British cloth, and it sold <span class="kt">raw cotton</span> to British mills.` },
            { p: `Power mattered too. Much of India was ruled by the British East India Company, and British cotton cloth entered India at a tax of only 2½ percent. Meanwhile Britain taxed Indian cloth heavily: around <span class="num">1813</span>, Indian calicoes paid taxes of about 70 to 85 percent of their value to be sold in Britain. Historians still argue about how much each cause mattered: cheaper machine-made goods, the trade rules of the people in power, and, in India, troubles that had begun before the factories did, such as the breakup of the Mughal Empire and years of drought.` },
            { p: `The Middle East felt the same pressure. In <span class="num">1838</span> English cotton cloth sold in Egypt for less than cloth from Egypt's own new mills. (Who built those mills, and why, is Topic 5.6.)` },
            { p: `Shipbuilding followed the same path. Bombay's teak ships were among the best wooden ships of their day. But by the middle of the 1800s navies were turning to ships of iron, driven by steam, and they came mostly from British shipyards and engine works. Bombay's age of teak warships came to an end.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give one cause as the whole answer, either way. "British machines were simply better" leaves out the trade rules; "colonial rule alone destroyed Indian industry" leaves out the cheaper machines and the weavers who kept weaving. A strong answer names more than one cause and says historians weigh them differently.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name the continuity with the change. <em>Say what kept being made, and say what happened to its share.</em>`,
        limit: `Weavers who kept weaving are evidence of continuity, not of comfort: many were poorer than before, and Bairoch estimated that India's output per person fell.`,
        comparison: `Against Britain in 1750 (section 01): then Britain bought India's cloth; by about 1830 India bought more of Britain's cloth than it sold.`
      },
      terms: [
        ['Handloom', 'A loom worked by hand and foot, with no engine.'],
        ['Raw cotton', 'Cotton as it is picked, not yet spun into thread or woven into cloth.'],
        ['Dockyard', 'A shipyard where ships are built and repaired.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks how modes and locations of production changed over time, so the cards are the starting point, the change in places, the change in shares, and the continuity.`,
    pairs: [
      {
        category: 'Continuity and Change',
        title: 'The starting point',
        body: `Evidence to sort: hand production at home and in workshops; Bairoch's estimates for about 1750 (China about a third, India about a quarter, Europe about a quarter, Britain under 2 percent); India's cloth sold across Asia, Africa and Europe; Indian teak ships.`
      },
      {
        category: 'Making Connections',
        title: 'Where the methods went, and what carried them',
        body: `Evidence to sort: the British laws (to 1824 and 1843); Slater at Pawtucket (1789 to 1793); Cockerill at Seraing (1817); the Nuremberg to Fürth railway (1835); Lowell (from the 1820s); Hughes at Yuzovka (1870s); the Osaka Spinning Company (1883). For three of them, name the carrier, then say the pattern.`
      },
      {
        category: 'Continuity and Change',
        title: 'What changed',
        body: `Evidence to sort: Bairoch's estimates for 1860 and 1900 (Britain about a fifth by 1860; Europe and the United States over four-fifths by 1900; China about 6 percent, India under 2); steam-powered factories; cheaper machine-made cloth; India's cloth trade turning around by about 1830; the 2½ percent tax on British cloth entering India.`
      },
      {
        category: 'Continuity and Change',
        title: 'What continued',
        body: `Evidence to sort: India's hand weaving, shrinking but surviving (about a million people living from it in one province in 1908); machine-spun thread on hand looms; Chinese farm families weaving at home; the handlooms of Aleppo and Damascus; the Bombay Dockyard and HMS Trincomalee (1817). For one, say what continued and what happened to its share.`
      }
    ]
  }
};
