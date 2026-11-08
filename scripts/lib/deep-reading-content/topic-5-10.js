'use strict';

/**
 * Topic 5.10, Continuity and Change in the Industrial Age: the deep reading.
 *
 * Why this exists. The CED gives 5.10 one learning objective, K, explain the
 * extent to which industrialization brought change from 1750 to 1900, and six
 * "Review: Unit 5 Key Concepts" (KC-5.1, KC-5.1.IV, KC-5.3, KC-5.3.I.A,
 * KC-5.3.I, KC-5.3.II.i), a reasoning process of Continuity and Change and the
 * skill 6.C, argumentation. The First & 10 tells the argument in one pass. What
 * it has no room for is how a historian measures a change, why the change in
 * moving reached further than the change in making, how to read a witness like
 * Wallace, why the revolutions in ideas and governments are a different change,
 * and what an argument about extent looks like with its pieces connected.
 *
 * Rebuilt from the 5.10 story (docs/TOPIC-5-10-STORY-DRAFT.md) on 2026-11-08.
 * The old chapter, "The Question That Runs Both Ways," was written in June
 * before the CED rebuild and carried claims the unit no longer teaches (a
 * superlative, "the workplace separated from the home for the first time,"
 * flagged by the 5.9 build, and Manchester figures that disagree with 5.9's).
 * Every claim here is in docs/TOPIC-5-10-CLAIM-LEDGER.md, and every number is
 * the number its own topic teaches.
 *
 * Three things carried deliberately:
 *
 *   1. Every section measures: how big, how far it reached, what kept going.
 *   2. The revolution in ideas and governments is sorted by its causes and its
 *      dates, so students do not credit industry with it.
 *   3. The chapter models the 6.C relationships and the criteria for a thesis,
 *      and prints no finished thesis, because Checkpoint 2 asks for one.
 */

module.exports = {
  topicKey: 't5-10',
  slug: 'topic-5-10-continuity-and-change-in-the-industrial-age',
  sourceFile: 'deep-reading-topic-5-10-continuity-and-change-in-the-industrial-age.html',
  lessonFile: 'lesson-5-10-continuity-and-change-in-the-industrial-age.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.10: How Much Changed?',
  eyebrow: 'Topic 5.10 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'How Much <em>Changed</em>?',
  deck: `Between 1750 and 1900 industry changed how the world made and moved things. But a change has a size, a reach and a limit. This chapter measures all three, sorts out the other great change of the age, the revolution in ideas and governments, and shows how to connect the evidence into an argument.`,
  meta: ['Five sections', 'Making, moving, reach, ideas and nations, the argument', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.10 &nbsp;·&nbsp; How Much Changed? &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain the <em>extent</em> to which industrialization brought change from 1750 to 1900. "Extent" means how much, so this is a measurement: how big the change was, how far it reached, and what kept going beside it. The evidence is the whole unit's, and every number here is the one its own topic teaches. The skill is argumentation: explaining how pieces of evidence relate.`,
    steps: [
      `<b>01 Making:</b> coal, factories, cheaper goods, and who gained.`,
      `<b>02 Moving:</b> railroads, steamships and the telegraph, and why they reached further.`,
      `<b>03 How far it reached:</b> a witness in 1898, the old makers, the farmers, and the gains.`,
      `<b>04 The other revolution:</b> ideas and nations, sorted by date and cause.`,
      `<b>05 Make the argument:</b> three ways evidence connects, and what a thesis about extent needs.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'making',
      num: '01',
      accent: 'gold',
      name: 'Making: Factories and Coal',
      navLabel: 'Making',
      dates: '1750 to 1900 &nbsp;·&nbsp; Britain, Europe, the United States',
      thesis: `Industry changed how goods were made and what they cost, and moved the making of the world's goods from Asia to Europe and the United States. The gains in living standards were real, slow at first, and unequal.`,
      parts: [
        {
          heading: 'The starting line',
          blocks: [
            { p: `To measure a change you need a starting line. In <span class="num">1750</span> almost everything people bought was made by hand, at home or in small workshops, and most of the world's manufactured goods were made in Asia. The economic historian Paul Bairoch estimated that China made about a third of them and India about a quarter, while all of Europe together made about a quarter and Britain under <span class="num">2 percent</span>. Almost all the energy people used came from things that grow: food for the muscles of people and animals, wood for fire, and wind and water for ships and mills.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates, not counts',
              html: `Nobody in 1750 counted every piece of cloth in the world. Bairoch's shares are a historian's estimates, built from what records survive, and historians who use them say so. What they show well is the size and direction of the change, not exact amounts. Say "estimated" when you use them.`
            } }
          ]
        },
        {
          heading: 'A new source of energy',
          blocks: [
            { p: `The change began with energy. Steam engines turned the heat of burning coal into motion, and from the <span class="num">1780s</span> James Watt and Matthew Boulton built engines that turned a wheel, so an engine could drive machines. A mill no longer had to sit beside a fast river; it could run wherever coal could be brought. Coal mining and steam engines grew together, and by about <span class="num">1900</span> coal supplied about half of all the energy used in the world. That is the size of the change: not just new machines, but a new kind of energy, stored underground for millions of years.` }
          ]
        },
        {
          heading: 'Cheaper goods, and whose',
          blocks: [
            { p: `<span class="kt">Industrial capitalism</span>, factories and businesses run by owners and investors for profit, kept improving how things were made, so <span class="kt">consumer goods</span> became more available, more affordable and more varied, the three words the College Board uses. By <span class="num">1815</span> even the coarsest cotton yarn cost about a third of what it had in the early 1780s, after rising prices are taken into account. Soap came in wrapped bars with a brand name, like Sunlight, sold from <span class="num">1884</span>. And the making moved: Britain's share of the world's manufacturing rose from under 2 percent in 1750 to about a fifth by <span class="num">1860</span>, and by 1900 Europe and the United States together made more than four-fifths of the world's manufactured goods.` },
            { p: `Did people live better? The College Board's answer is careful: standards of living rose "for some." One careful estimate finds British working families' <span class="kt">standard of living</span> rose by less than <span class="num">15 percent</span> from the 1780s to the 1850s, and most historians agree it grew much faster from about 1860 to 1900. In the fast-growing towns, many people's health was far worse than the nation's (Topic 5.9).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Industry made everyone richer." The College Board's own words are "for some." Owners and the middle class gained first; working families gained slowly, then faster after about 1860; and many city workers were still poor in 1900. The opposite mistake, "workers gained nothing," goes too far the other way.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Start from the starting line. <em>Name one change in making, with a number, and say for whom it was biggest.</em>`,
        limit: `The gains came slowly for working families: under 15 percent better from the 1780s to the 1850s. And while Britain's share rose to about a fifth by 1860, China's makers kept working at a shrinking share.`,
        comparison: `Against Section 03: the making changed most in a few regions. Where did the old makers go on?`
      },
      terms: [
        ['Extent', 'How much. "To what extent" asks you to measure a change.'],
        ['Industrial capitalism', 'An economy where owners and investors run factories and businesses for profit.'],
        ['Consumer goods', 'Things people buy for themselves, such as cloth, soap and food.'],
        ['Standard of living', 'How well people live: food, home, health and how long they live.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'moving',
      num: '02',
      accent: 'rust',
      name: 'Moving: Rails, Steam, and Wire',
      navLabel: 'Moving',
      dates: '1830 to 1913 &nbsp;·&nbsp; the Americas, Russia, India, the oceans',
      thesis: `Railroads, steamships and the telegraph reached the interiors of continents around the world, so trade and migration grew. The change in moving reached further than the change in making.`,
      parts: [
        {
          heading: 'Into the interior',
          blocks: [
            { p: `Before the railroad, heavy goods moved cheaply only by water, and the <span class="kt">interior</span> of a continent, far from the sea or a big river, was hard to reach. Railways changed that, and not only in Britain. Russia had <span class="num">27</span> kilometers of railway in 1840 and more than <span class="num">53,000</span> in 1900. India's first passenger train ran in <span class="num">1853</span>. The first railroad across the United States was finished in <span class="num">1869</span>.` },
            { p: `Ships and news changed too. Under sail, emigrants from Norway took about <span class="num">53</span> days on average to reach America; by steamship, the Atlantic crossing from England took about <span class="num">12</span> days in the 1860s. From <span class="num">1844</span> a telegraph message could travel along a wire in minutes. From <span class="num">1866</span> cables under the Atlantic carried messages without a lasting break, and in <span class="num">1870</span> a cable reached Bombay, in India.` }
          ]
        },
        {
          heading: 'More trade, more migration',
          blocks: [
            { p: `When moving goods got cheaper and faster, markets far apart began to behave like one market. In <span class="num">1870</span> wheat cost 57.6 percent more in Liverpool, England, than in Chicago; by <span class="num">1913</span>, just after this unit's period, it cost only 15.6 percent more. Wheat grown in the middle of North America, carried by train to the coast and by steamship across the ocean, fed workers in Britain.` },
            { p: `People moved too. <span class="kt">Migration</span> means moving to live in a new place. About <span class="num">55 million</span> Europeans moved to the Americas and Australia between 1850 and 1914, and between 1846 and 1940 more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean. Why they moved, and what they found, is Unit 6.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a price gap',
              html: `Historians cannot measure "connection" directly, but they can measure prices. When the same grain costs nearly the same in two cities an ocean apart, it means moving it has become cheap and fast. A gap that shrinks from 57.6 percent to 15.6 percent is a number that shows a change over time.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Compare reach. <em>Which change reached more of the world, making or moving, and what is your evidence?</em>`,
        limit: `Railways reached the interior without ending farming: about two-thirds of India's people still lived by farming in 1901, and about two in five American workers in 1900.`,
        comparison: `Against Section 01: factories stayed in a few regions; railways and cables reached Russia, India and the Americas.`
      },
      terms: [
        ['Interior', 'The land of a continent far from the sea or a big river.'],
        ['Migration', 'People moving to live in a new place.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'reach',
      num: '03',
      accent: 'slate',
      name: 'How Far It Reached',
      navLabel: 'Reach',
      dates: '1840s to 1908 &nbsp;·&nbsp; India, China, Egypt, Japan, Britain',
      thesis: `The change was deep where it reached, but it did not reach everyone. The old makers kept making, most people still farmed, and the gains went to some more than others.`,
      parts: [
        {
          heading: 'A witness weighs his century',
          blocks: [
            { p: `In <span class="num">1898</span> Alfred Russel Wallace, a British naturalist who had worked out the theory of evolution by natural selection at the same time as Charles Darwin, wrote a book weighing his century, <em>The Wonderful Century</em>. His preface claims that "not only is our century superior to any that have gone before it, but that it may be best compared with the whole preceding historical period." Then he turns: "But this is only one side of the shield." More than half his book is about the century's "Failures."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: reading a witness',
              html: `Wallace lived through most of the century, which makes him a valuable witness, but a witness has a point of view. He wanted land taken out of private hands, and his "Failures" also include attacks on vaccination and a defense of phrenology, ideas scientists rejected. Use him as a claim to test against other evidence, not as the answer.`
            } }
          ]
        },
        {
          heading: 'The old makers, and the farmers',
          blocks: [
            { p: `India, China and the Middle East did not stop working. Their share of the world's goods shrank, and China's fell from about a third in 1750 to about <span class="num">6 percent</span> in 1900, partly because the rest of the world's production grew much faster. But in <span class="num">1908</span>, in just one province of northern India, about a million people still lived from weaving cloth on handlooms.` },
            { p: `And most people still farmed. In India, the census of <span class="num">1901</span> found about two-thirds of the people living by farming. Even in the industrial United States, about two in five workers still farmed in 1900. Until about 1900, wood and other things that grow were still the world's largest source of energy.` }
          ]
        },
        {
          heading: 'Gains for some',
          blocks: [
            { p: `Only a few states built industry, and not all of it lasted: Muhammad Ali's Egypt built factories for its army, and most had closed by the mid-<span class="num">1840s</span>, while Meiji Japan built railways and mills that lasted (Topic 5.6). Inside industrial countries, the ladder of rank was rebuilt, not ended: landed families kept much of their power, and in 1900 Britain's prime minister, Lord Salisbury, was a marquess. In the 1840s a baby born in Manchester could expect to live only about 25 to 28 years, against about 40 to 42 for England and Wales as a whole, averages pulled down by the many babies who died (Topic 5.9).` },
            { p: `Wallace went further. "One of the most prominent features of our century," he wrote, "has been the enormous and continuous growth of wealth, without any corresponding increase in the well-being of the whole people." Test it. The gains were unequal, as he says. But historians find that working families' living standards did rise, slowly to the 1850s and faster after about 1860. Wallace is partly right and partly too far.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"A shrinking share means the old makers stopped." A share is a part of a whole. China's and India's makers kept working; the whole grew much faster around them. The opposite mistake, "nothing changed for Asia's makers," forgets that India came to buy British cloth and sell raw cotton (Topic 5.4).`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Set a change beside its limit. <em>Name one change from 01 or 02 and one limit from here, and say what the pair shows.</em>`,
        limit: `The limits have limits: India came to buy British cloth and sell raw cotton (Topic 5.4), and working families' living standards did rise faster after about 1860.`,
        comparison: `Against Wallace: which of his claims does this section support, and which does it not?`
      },
      terms: [
        ['Continuity', 'What stays the same over time.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'ideas',
      num: '04',
      accent: 'sage',
      name: 'The Other Revolution: Ideas and Nations',
      navLabel: 'Ideas and nations',
      dates: '1687 to 1900 &nbsp;·&nbsp; Europe and the Americas',
      thesis: `The revolution in ideas and governments was the age's other great change. It began before the factories spread, from ideas and grievances, and it met industry later.`,
      parts: [
        {
          heading: 'By what right?',
          blocks: [
            { p: `The <span class="kt">Enlightenment</span> was a movement of thinkers who used reason and evidence, first to explain nature and then to question old authorities. They reexamined the role of religion in public life: Voltaire's <em>Treatise on Tolerance</em> (<span class="num">1763</span>) argued that no government should force a faith on anyone. And they wrote new political ideas. In <span class="num">1689</span> John Locke argued that people are born with natural rights to "lives, liberties and estates," and that government is a social contract that rests on the people's consent (Topic 5.1).` }
          ]
        },
        {
          heading: 'The ideas came first',
          blocks: [
            { p: `The College Board says Enlightenment thought "often preceded" revolutions. The dates show it. The American Revolution began in <span class="num">1775</span>, the French in <span class="num">1789</span>, the Haitian in <span class="num">1791</span>, and the wars for independence in Spanish America in <span class="num">1810</span>. Factory methods, meanwhile, were only beginning to leave Britain: Samuel Slater's spinning mill in Rhode Island was begun in 1793, John Cockerill's works in Belgium in 1817, and the big growth in Russia and Japan came mostly after 1870 (Topic 5.4). So the political revolution was not industry's. Its causes, Topic 5.2 showed, were a grievance, the words to name it, and a chance to act.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Industry caused the revolutions." Check the dates: France's revolution began in 1789, before factories had spread beyond Britain. The opposite mistake, "the two revolutions had nothing to do with each other," forgets where they met: Meiji Japan and the Chartists, below.`
            } }
          ]
        },
        {
          heading: 'New nations, and where the two revolutions met',
          blocks: [
            { p: `The revolutions built new countries, the United States, Haiti and the new republics of Spanish America. Each was a <span class="kt">nation-state</span>, a state that claims to belong to one people, its nation. They also left a new loyalty, <span class="kt">nationalism</span>, which joined most of Italy into one kingdom in <span class="num">1861</span> and the German states into an empire in <span class="num">1871</span>, and pulled Greeks and other Balkan peoples away from the Ottoman Empire (Topic 5.2).` },
            { p: `Later, the two revolutions met. Nationalism and fear of stronger powers pushed Meiji Japan to build railways and mills to make the nation strong (Topic 5.6). In industrial Britain, the Chartists used the language of rights to demand the vote for working men (Topic 5.8). And the old order held on in politics too: in 1900 kings and emperors still ruled most of Europe, and women could vote in national elections almost nowhere; New Zealand, in <span class="num">1893</span>, was the first self-governing country where all adult women could (Topic 5.1).` }
          ]
        }
      ],
      useThis: {
        tool: `Sort by cause. <em>Before you credit industry with a change, check its date and its cause.</em>`,
        limit: `The political change was limited too: in 1900 kings and emperors still ruled most of Europe, and women could vote in national elections almost nowhere.`,
        comparison: `Against Sections 01 and 02: both revolutions were big; only one came from machines.`
      },
      terms: [
        ['Enlightenment', 'A movement of thinkers who used reason and evidence to question old authorities.'],
        ['Nation-state', 'A state that claims to belong to one people, its nation.'],
        ['Nationalism', 'Loyalty to your nation above a king or an empire.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'argument',
      num: '05',
      accent: 'gold',
      name: 'Make the Argument',
      navLabel: 'The argument',
      dates: 'The whole unit',
      thesis: `A list of evidence is not an argument. An argument explains how the pieces relate, and an argument about extent takes a side, names a change and a continuity, and says for whom and why.`,
      parts: [
        {
          heading: 'Three ways evidence connects',
          blocks: [
            { p: `<b>Led to.</b> Coal and steam engines led to railroads and steamships, which led to cheap North American wheat feeding workers in Britain. Each piece is a cause of the next.` },
            { p: `<b>The same pattern.</b> Railways reached the interior of Russia and the interior of India: the same change, in two different empires.` },
            { p: `<b>A contrast.</b> Lancashire's power looms made cloth more cheaply than India's hand weavers could, yet a million people in one Indian province still lived from the handloom in 1908. Set a change beside a continuity, and you can say how much changed.` }
          ]
        },
        {
          heading: 'What a thesis about extent needs',
          blocks: [
            { p: `Your <span class="kt">thesis</span> is the claim that answers the question, and you must be able to defend it with evidence. A thesis about extent takes a side: to a great extent, to a limited extent, or great in some ways and limited in others. It names a change and a continuity. And it says for whom or where the change was greatest, and why. "Industrialization changed the world a lot" does none of this: it fits any century in history.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Everything changed" and "nothing really changed" are both easy to write and both wrong. The first forgets the farmers, the handloom weavers and the kings; the second forgets the railroads, the telegraph and the price of cloth. A good answer is a measurement in between, with evidence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Say the relationship. <em>"This led to that because ...", "These show the same pattern, because both ...", "This changed, but that kept going, because ..."</em>`,
        limit: `A thesis that lists only changes, or only continuities, has not measured anything. Name both, and write your own: this chapter gives the criteria, not an answer to copy.`,
        comparison: `Against Topic 4.8, the last unit's argument: the same three relationships, with new evidence.`
      },
      terms: [
        ['Thesis', 'The claim that answers the question, which you can defend with evidence.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks for the extent to which industrialization brought change, so each card gives how big the change was and its limit, and the last asks you to connect them.`,
    pairs: [
      {
        category: 'Continuity and Change',
        title: 'Making',
        body: `Changed: coal about half the world's energy by about 1900; cotton yarn about a third of its 1780s price by 1815; Europe and the United States more than four-fifths of the world's manufactured goods by 1900. Limit: living standards rose "for some," slowly to the 1850s, faster after about 1860.`
      },
      {
        category: 'Continuity and Change',
        title: 'Moving',
        body: `Changed: Russia's railways from 27 km (1840) to more than 53,000 (1900); India 1853; the United States coast to coast 1869; the Atlantic in about 12 days by steam; telegraph cables 1866 and 1870; the wheat gap from 57.6 to 15.6 percent; tens of millions of migrants.`
      },
      {
        category: 'Continuity and Change',
        title: 'How far it reached',
        body: `Kept going: a million handloom weavers in one Indian province in 1908; about two-thirds of India's people farming in 1901, and about two in five American workers in 1900; Egypt's factories closed by the mid-1840s; landed families near the top. Test Wallace (1898) against it.`
      },
      {
        category: 'Continuity and Change',
        title: 'The other revolution',
        body: `Changed, from ideas and grievances, not machines: Enlightenment ideas (Locke, 1689) before the revolutions of 1775, 1789, 1791 and 1810; new nation-states; nationalism (Italy 1861, Germany 1871). Kept going: kings and emperors in most of Europe in 1900; women's votes almost nowhere.`
      },
      {
        category: 'Argumentation',
        title: 'Connect the evidence',
        body: `Pick two pieces of evidence and name how they relate: one led to the other, they show the same pattern, or they make a contrast. Then take a side on how much changed, for whom, and why.`
      }
    ]
  }
};
