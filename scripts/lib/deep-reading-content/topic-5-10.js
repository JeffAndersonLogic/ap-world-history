'use strict';

/**
 * Topic 5.10, Continuity and Change in the Industrial Age: the deep reading.
 *
 * Why this exists. The success criteria are almost entirely about writing rather
 * than about content: two specific changes tied to key concepts, at least one
 * meaningful continuity with an explanation of why it counts as continuity, and
 * a defensible thesis taking a position on the EXTENT of change, supported on
 * both sides, with reasoning rather than a list of facts.
 *
 * So this chapter is a method chapter, like Topic 4.8's section 04 and Topic
 * 3.4, and it should not re-teach nine topics. It teaches the shape of the
 * argument and supplies the evidence in the form an essay needs it.
 *
 * The organizing insight is the one the criteria are circling: hierarchy and the
 * struggle for rights are the continuities, and they are continuities precisely
 * because the same STRUCTURE persists while its content changes completely. A
 * student who can say "the pattern persisted, the parties to it changed" has the
 * distinction that this whole topic is testing.
 *
 * Three things carried deliberately:
 *
 *   1. Section 01 gives changes with mechanisms, not a list, and ties each to
 *      what it made possible, because "tie each to a key concept" means show
 *      the causal link rather than name a bucket.
 *   2. Section 02 makes the continuity argument properly, including the hard
 *      version: the same continuity can be argued as a change depending on the
 *      level you pitch it at, and saying which level you mean is the skill.
 *   3. Section 04 is a worked thesis with its own counterargument attached,
 *      because the criteria ask for a position supported on both sides and most
 *      students have never seen what that looks like written out.
 */

module.exports = {
  topicKey: 't5-10',
  slug: 'topic-5-10-continuity-and-change-in-the-industrial-age',
  sourceFile: 'deep-reading-topic-5-10-continuity-and-change-in-the-industrial-age.html',
  lessonFile: 'lesson-5-10-continuity-and-change-in-the-industrial-age.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.10: The Question That Runs Both Ways',
  eyebrow: 'Topic 5.10 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Question That Runs Both <em>Ways</em>',
  deck: `In 1750 most people on earth farmed, moved at the speed of a horse and lived under someone who inherited the right to rule them. By 1900 a third of that had changed completely, a third had changed its form and kept its shape, and a third had not moved at all. This chapter is how to tell which is which, and how to write a thesis that takes a position instead of listing both.`,
  meta: ['Four sections', 'Changes, continuities, the method, a worked thesis', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.10 &nbsp;·&nbsp; The Question That Runs Both Ways &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `This chapter does not re-teach the unit. Section 01 is the changes in the form an essay needs them, each with a mechanism. Section 02 is the continuities with the reason each counts as one. Section 03 is the method for deciding, and section 04 is a full thesis written out with its own counterargument, which is what the third success criterion is asking for.`,
    steps: [
      `<b>01 Three changes:</b> each with the mechanism that made it matter, not a label.`,
      `<b>02 Three continuities:</b> and why each is continuity rather than change.`,
      `<b>03 The method:</b> four questions that decide which side a fact belongs on.`,
      `<b>04 A worked thesis:</b> a position, both sides supported, and the reasoning stated.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'changes',
      num: '01',
      accent: 'gold',
      name: 'Three Changes, Each With Its Mechanism',
      navLabel: 'The changes',
      dates: 'c. 1750 to 1900 &nbsp;·&nbsp; What actually broke',
      thesis: `The success criteria ask you to name changes and tie each to a key concept, and tying means showing the causal link rather than filing the fact under a heading. Three will do more work than ten, if each one is written with the mechanism attached.`,
      parts: [
        {
          heading: 'Energy, and everything downstream of it',
          blocks: [
            { p: `<b>The change:</b> production stopped being limited by muscle, water and wind and began running on stored fossil energy.` },
            { p: `<b>Why it matters, mechanically:</b> every economy before this one had a ceiling set by how much work living things and moving water could do in a year, and that ceiling is why output per person had risen so slowly for so long. Coal removes it, because a seam represents millions of years of accumulated energy available all at once. That is the single fact under everything else in Unit 5: the factory of Topic 5.3, the railway and telegraph of Topic 5.5, the cities of Topic 5.9 and the military gap that opens in Unit 6 are all consequences of an energy source that does not run out at the end of the season.` },
            { p: `<b>Tie it:</b> this is the industrial economy key concept in its strongest form, and the environmental key concept as well, since a species burning fossil carbon at scale begins here, as the Topic 5.5 chapter records.` }
          ]
        },
        {
          heading: 'The wage relationship, and the political ideas it produced',
          blocks: [
            { p: `<b>The change:</b> the typical relationship between a worker and the means of production inverted. Before, most people had access to some productive property, a strip of land, a workshop, a loom in the parlor; after, most people in industrial societies owned none and sold hours instead.` },
            { p: `<b>Why it matters, mechanically:</b> as the Topic 5.6 chapter sets out, a person with no productive property has exactly one thing to withhold, which makes collective action the characteristic form of industrial politics and makes the legal treatment of combination, in Topic 5.8, the decisive question of the century. It also produced ideologies that had not existed before: socialism and Marxism are answers to a question that could not have been asked of a society of peasants and craftsmen.` },
            { p: `<b>Tie it:</b> social structures and governance both, since this is the origin of class as the organizing political category and of the state's new responsibility for welfare, from the Factory Acts to Bismarck's pensions.` }
          ]
        },
        {
          heading: 'The collapse of distance, and a genuinely global economy',
          blocks: [
            { p: `<b>The change:</b> the cost of moving goods and the time taken to move information both fell by orders of magnitude, through railways, steamships, the Suez Canal and the telegraph.` },
            { p: `<b>Why it matters, mechanically:</b> the Topic 4.8 chapter argues that the world became connected in the sixteenth century in the sense that a closed circuit existed. This is different and it is worth stating as the difference: connection became <b>cheap</b>, which means ordinary bulk goods rather than luxuries, and it became <b>fast</b>, which means prices in Bombay and Liverpool move together in a day. That is what turns a network of trade into a single market, and it is why an Argentine harvest could lower a German farmer's income.` },
            { p: `<b>Tie it:</b> economic systems and technology, and it is also the mechanism that made the imperialism of Unit 6 practicable, since an empire is only governable at the speed its orders travel.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write "industrialization changed everything," and do not answer a change question by listing inventions. A change claim scores when it names <b>what became possible that was not possible before</b> and <b>for whom</b>. Compare two sentences. "The railroad was a major change because it made travel faster" names a fact. "Falling freight costs meant a farmer three hundred miles inland could sell into a national market, which rewarded production at scale and destroyed local producers that distance had protected" names a mechanism and its winners and losers. The second is an argument and the first is a caption.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Removing an energy ceiling. <em>The mechanism is that every pre-industrial economy was limited to the work that muscle, water and wind could perform in a given year, so output per person could only rise slowly, and a coal seam is stored energy accumulated over geological time that can be spent at any rate the machinery allows, which lifts the constraint that had bounded production for the whole of this course.</em>`,
        limit: `The gains were distributed unevenly by region and by class, and the first generations of industrial workers, as Topic 5.3 records, largely did not receive them.`,
        comparison: `Against <em>Champa rice</em> in Topic 1.1 and the <em>potato</em> in Topic 4.8: both raised the ceiling by increasing calories per acre, which supports more people at roughly the same standard. Coal is different in kind, because it raises output per person rather than the number of persons, and that distinction is the sharpest available answer to why this is the change and those were expansions.`
      },
      terms: [
        ['Energy ceiling', 'The pre-industrial limit set by muscle, water and wind, which fossil fuel removed.'],
        ['Wage relationship', 'The arrangement in which a worker owns no productive property and sells hours, the basis of industrial class politics.'],
        ['Cheap connection', 'The collapse of freight cost and message time, which distinguishes the nineteenth-century world market from earlier trade networks.'],
        ['Mechanism', 'The causal step showing what a change made possible, which is what turns a named fact into an argument.'],
        ['Key concept', 'The College Board category a change is tied to, which requires showing the causal link rather than naming the bucket.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'continuities',
      num: '02',
      accent: 'iron',
      name: 'Three Continuities, and Why They Count',
      navLabel: 'The continuities',
      dates: 'c. 1750 to 1900 &nbsp;·&nbsp; What held',
      thesis: `A continuity is not a thing that failed to change. It is a structure that persists while its content changes completely, and saying which is the structure and which is the content is the whole of this part of the answer.`,
      parts: [
        {
          heading: 'Steep hierarchy, with new parties to it',
          blocks: [
            { p: `<b>The continuity:</b> a small group controlled most of the productive wealth and most of the political power, and a large majority worked for them with little of either.` },
            { p: `<b>Why it counts:</b> compare a landlord and tenant in <span class="num">1750</span> with a factory owner and worker in <span class="num">1880</span>. The names, the legal basis and the setting are entirely different, and the shape is the same: a propertied few, a working many, an enormous gap in wealth and security, and political institutions weighted toward the top. The Topic 5.6 chapter describes a new elite of capital displacing an elite of land, and displacing an elite is not the same as removing a hierarchy. That is the sentence a grader is looking for.` },
            { p: `<b>The honest complication</b>, which strengthens the answer rather than weakening it: the terms did change in ways that mattered. Legal serfdom ended across Europe, Russia included in <span class="num">1861</span>; slavery was abolished across the Atlantic world; hereditary status gave way to a hierarchy that was formally open. So the correct claim is precise: hierarchy persisted as a structure and became <b>economic and formally open</b> rather than <b>legal and closed</b>, which is continuity of shape with change of mechanism.` }
          ]
        },
        {
          heading: 'The rights argument, and the position of most of the world',
          blocks: [
            { p: `<b>The continuity of the rights struggle.</b> The Topic 5.1 chapter identifies the move, holding a general principle to its own terms, and every campaign in this unit runs it: revolutionaries against monarchs, the enslaved against enslavers, Chartists and unionists against property qualifications and combination law, women against a franchise defended in universal language. The parties change constantly and the argument does not, which is exactly what a continuity is. And it is a continuity that continues past this unit, since the anticolonial movements of Units 6 and 8 use the identical move against the empires that taught it to them.` },
            { p: `<b>The continuity of most people's lives.</b> This one is worth naming because it corrects the unit's center of gravity. In <span class="num">1900</span>, the great majority of people on earth still farmed, still lived in villages, and still worked with tools their grandparents would have recognized. Industrialization was concentrated in a handful of regions, for the reasons the Topic 5.4 chapter gives, and outside them the nineteenth century did not transform daily labor. The changes reached those regions in a different form, as demand for cotton, rubber, guano and grain, as railways built to the coast, and as debt, all of which reshaped economies without industrializing them.` },
            { p: `Writing that continuity is one of the most reliable ways to demonstrate a global perspective rather than a European one, and it is defensible with the evidence already in this unit.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: measure it in wealth and in bodies',
              html: `Two kinds of evidence support continuity claims about hierarchy, and they are worth knowing because assertions about inequality are easy to make and hard to test. The first is <b>wealth and income distribution</b>, reconstructed from tax records, probate inventories and estate duty returns, which for nineteenth-century Britain and France show wealth concentrated at the top through the whole period, with the concentration not falling before the twentieth century. The second is <b>anthropometric</b>: average heights, recorded in military recruitment and prison registers, track childhood nutrition, and they show working-class heights stagnating or falling in the early industrial decades and rising later. Both are records kept for other purposes, which is what makes them useful, since nobody was measuring recruits in order to prove a point about class.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Structure persists, content changes. <em>The mechanism is that a social arrangement can keep its shape, a few holding wealth and power over a working many, while every particular of it is replaced: the basis shifts from land to capital, the legal form from inherited status to open competition, and the setting from an estate to a factory, so a claim of continuity has to name the structure and a claim of change has to name the content.</em>`,
        limit: `Pitched too high, any structure persists and the claim becomes unfalsifiable, so a continuity is only worth writing if you can also state what would have counted as its ending.`,
        comparison: `Against <em>Topic 4.7&rsquo;s</em> continuity-and-change argument: there the hierarchy kept its shape and changed its axis from religion and occupation to ancestry. Here it keeps its shape again and changes its axis from birth to capital. The same analytical move works in two units, which is a sign it is a method rather than a fact about one period.`
      },
      terms: [
        ['Continuity', 'A structure that persists while its content changes, which is what must be named for the claim to work.'],
        ['Formally open hierarchy', 'A stratification with no legal barrier to movement, which replaced legally closed status without reducing the gap.'],
        ['The rights move', 'Holding an accepted general principle to its own terms, used by every excluded group in this unit and beyond it.'],
        ['Agrarian majority', 'The great majority of the world\'s people still farming in 1900, the continuity that corrects a Europe-centered account.'],
        ['Anthropometric evidence', 'Height data from recruitment and prison records, which tracks childhood nutrition and tests claims about living standards.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'method',
      num: '03',
      accent: 'rust',
      name: 'Four Questions That Decide Which Side a Fact Belongs On',
      navLabel: 'The method',
      dates: 'A method &nbsp;·&nbsp; For any extent-of-change prompt',
      thesis: `Most facts in this unit can be argued as continuity or as change, and a student who notices that usually panics. It is the opposite of a problem: it is the opening, because specifying which reading you mean and why is the analytical move the prompt is actually testing.`,
      parts: [
        {
          heading: 'The four questions',
          blocks: [
            { p: `<b>1. At what level?</b> Slavery is the clearest case. At the level of the institution, abolition across the Atlantic world is an enormous change. At the level of coerced labor, indentured servitude, debt peonage, the Congo rubber system of Topic 5.5 and the mita's descendants continue, so the practice persists in new legal forms. Both are true, and the sentence that scores says which level it is pitched at.` },
            { p: `<b>2. For whom?</b> A Lancashire mill worker, a Bengali handloom weaver, an American plantation laborer, a Japanese farmer under the land tax and a Congolese rubber tapper are all in this unit, and the extent of change is wildly different for each. A claim that names its population is stronger than a claim about "society."` },
            { p: `<b>3. Over what span?</b> From <span class="num">1750</span> to <span class="num">1800</span>, very little has happened outside a few British counties. From <span class="num">1750</span> to <span class="num">1900</span>, the world economy is unrecognizable. Prompts carry dates and the dates are part of the question.` },
            { p: `<b>4. Compared with what?</b> Change is a comparison and is meaningless without a baseline. Compared with the century before, the nineteenth is a transformation. Compared with the twentieth, its technologies look continuous with what preceded them. Say what your baseline is.` }
          ]
        },
        {
          heading: 'Running the questions on one fact',
          blocks: [
            { p: `Take a single fact and watch the four questions produce four different defensible answers, which is what makes them a method rather than a checklist.` },
            { p: `<b>The fact:</b> women entered factory work in large numbers.` },
            { p: `<b>At what level?</b> At the level of whether women worked, this is continuity, and the Topic 5.9 chapter says so: women had always worked. At the level of where and on whose terms, it is a genuine change, since the workplace separated from the home for the first time.` },
            { p: `<b>For whom?</b> For working-class women it meant wage work away from home. For middle-class women it meant the opposite, withdrawal from paid work as a marker of status. One economic change, two opposite outcomes, decided by what a household could afford.` },
            { p: `<b>Over what span?</b> Across the whole century it is change, since married women's property rights, education and eventually the vote follow. Across the first fifty years it is mostly a change of setting without a change of position.` },
            { p: `<b>Compared with what?</b> Compared with the household economy immediately before, the factory is a break. Compared with the position of women in the societies of Units 1 to 4, the fundamentals of legal subordination and domestic responsibility are strikingly persistent until very late in this period.` },
            { p: `Four answers, all supportable, and none of them contradicts the others because each is a different question. Writing one of them explicitly, with the qualifier attached, is what an extent-of-change prompt rewards.` }
          ]
        }
      ],
      useThis: {
        tool: `Qualified comparison. <em>The mechanism is that continuity and change are not properties of a fact but of a comparison, so a fact has no fixed answer until you specify the level, the population, the time span and the baseline, and stating those four is what converts an apparent contradiction into a thesis with a defensible scope.</em>`,
        limit: `It is a method for structuring an argument, not a substitute for evidence. Every level you specify still has to be supported with a particular case.`,
        comparison: `Against <em>Topic 4.8&rsquo;s</em> method section: there the resolution was that the connections were transformed and the centers were not, which is the same move made once. Here it is generalized into four questions, and running them is how you find that kind of sentence for yourself instead of memorizing one.`
      },
      terms: [
        ['Level of claim', 'Whether you mean the institution, the practice or the structure, which decides whether a fact reads as change or continuity.'],
        ['Scope', 'The population a claim covers, which a strong thesis names rather than implying everyone.'],
        ['Periodization', 'The span a claim covers, which is part of the prompt and changes the answer.'],
        ['Baseline', 'The point of comparison against which change is measured, without which a change claim has no meaning.'],
        ['Qualified thesis', 'A position stated with its level, scope and span attached, which is what an extent-of-change prompt rewards.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'thesis',
      num: '04',
      accent: 'oxide',
      name: 'A Thesis, Written Out',
      navLabel: 'The worked thesis',
      dates: 'The third criterion &nbsp;·&nbsp; A position, both sides, the reasoning',
      thesis: `The success criteria ask for a defensible thesis that takes a position on the extent of change, supports both sides with specific evidence, and explains the reasoning. Here is one, written out, so you can see the shape rather than infer it.`,
      parts: [
        {
          heading: 'The prompt, and a thesis that answers it',
          blocks: [
            { p: `<b>Prompt:</b> Evaluate the extent to which industrialization transformed societies in the period from <span class="num">1750</span> to <span class="num">1900</span>.` },
            { p: `<b>A weak thesis:</b> "Industrialization changed society a lot, but some things stayed the same." It takes no position, names nothing, and could preface an essay about any period in the course.` },
            { p: `<b>A defensible thesis:</b> "Industrialization transformed how societies produced and where their people lived more completely than any change since agriculture, but it left the basic structure of social hierarchy intact, replacing an elite of land with an elite of capital while the majority continued to work for others with little property or political power, and outside a small number of industrializing regions it altered what the world's farmers grew and sold without changing that they farmed."` },
            { p: `Notice what that sentence does. It <b>takes a position</b>, that the change was profound in one dimension and limited in another. It <b>specifies the dimensions</b>, production and settlement against social structure. It <b>names its scope</b>, distinguishing industrializing regions from everywhere else. And it gives the grader a map of the essay, because each clause is a paragraph.` }
          ]
        },
        {
          heading: 'Supporting both sides, and stating the reasoning',
          blocks: [
            { p: `<b>The change side, with evidence.</b> Britain passed from a majority rural to a majority urban society within a century, and Manchester grew from about 25,000 to about 300,000 between <span class="num">1772</span> and <span class="num">1850</span>. Production moved from households working at their own pace to factories running on the clock, after Arkwright concentrated workers and machines at Cromford in <span class="num">1771</span>. Watt's rotary engine of <span class="num">1781</span> and Bessemer's converter of <span class="num">1856</span> removed the energy and materials ceilings, and the telegraph from <span class="num">1844</span> separated the speed of information from the speed of transport for the first time in history. Entirely new political ideologies, socialism and Marxism, appeared to explain conditions that had not previously existed.` },
            { p: `<b>The continuity side, with evidence.</b> A new elite displaced an old one rather than dissolving the hierarchy: the Reform Act of <span class="num">1832</span> admitted the middle class to the political nation and left the working class outside, and Chartism was rejected. Wealth stayed concentrated at the top throughout, on the tax and probate evidence. Coerced labor persisted in new forms after abolition, in the Congo rubber system and in indenture and debt peonage. And in <span class="num">1900</span> the great majority of the world's people still farmed, since industrialization reached a short list of regions and reached the rest as demand for raw materials, as railways built to the coast and as debt.` },
            { p: `<b>The reasoning, which is the part most answers omit.</b> These two sides do not cancel, and the reason is that they describe different levels. Industrialization changed the <b>means</b> by which wealth was produced and the <b>places</b> where people lived, and it did so with a completeness that has few parallels. It did not change the <b>relationship</b> between those who own productive property and those who work it, and in the regions it did not industrialize it changed what was produced rather than how. A transformation of means with a persistence of relations is a coherent position, and it is why the nineteenth century produced both the greatest increase in output in history and the largest movements demanding that its benefits be shared.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not confuse acknowledging the other side with taking no position. A thesis that says change was extensive and then spends a paragraph on real continuities is stronger than one that hedges, because it has explained why the counterevidence does not defeat it. What loses marks is a thesis that lists both and never decides, or that decides and then ignores everything on the other side. The structure to imitate is: <b>state the position</b>, <b>concede the strongest evidence against it</b>, and then <b>explain why your position survives it</b>, usually because the two claims are pitched at different levels, cover different populations, or measure different spans.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A thesis that maps its own essay. <em>The mechanism is that a thesis stating a position in clauses, each naming a dimension and its scope, tells a reader what every paragraph will argue before they reach it, so the evidence that follows reads as support for a claim rather than as a list of facts, which is the difference the rubric is measuring.</em>`,
        limit: `A well-built thesis with thin evidence still fails. The structure is what makes evidence count, and it does not substitute for having any.`,
        comparison: `Against <em>Topic 3.4</em> and <em>Topic 4.8</em>: those chapters end on the same skill, holding several cases against one question and stating what varies in the thesis rather than discovering it in the last paragraph. Three units in a row end this way because it is the one technique that transfers to every essay you will write in this course.`
      },
      terms: [
        ['Defensible thesis', 'A position that could be argued against, stated with the dimensions and scope it covers.'],
        ['Concession', 'The deliberate statement of the strongest evidence against your position, followed by why it does not defeat it.'],
        ['Line of reasoning', 'The explanation of why the evidence supports the claim, which is what separates an argument from a list.'],
        ['Dimension', 'The aspect a claim is about, production, settlement, social structure, which lets one thesis hold change and continuity together.'],
        ['Complexity', 'Recognizing that a question has defensible answers on more than one side, and resolving it rather than balancing it.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The last one is a complete thesis with its concession attached, which is the deliverable this topic is asking for.`,
    pairs: [
      {
        category: 'Change',
        title: 'Coal removed a ceiling every previous economy had lived under',
        body: `Every economy in this course before the nineteenth century was limited to the work that muscle, water and wind could do in a year, which is why output per person had risen so slowly for so long. A coal seam is stored energy accumulated over geological time and spendable at whatever rate the machinery allows, so the constraint disappears. Everything else in Unit 5 sits downstream of that: the factory at Cromford in 1771, Watt&rsquo;s rotary motion in 1781, Bessemer steel in 1856, railways, the telegraph, and cities that grew twelvefold in two generations. Note the contrast with Champa rice and the potato, which raised calories per acre and therefore the number of people supported; coal raised output per person, which is a change in kind rather than in scale.`
      },
      {
        category: 'Continuity',
        title: 'Displacing an elite is not removing a hierarchy',
        body: `Compare a landlord and tenant in 1750 with a factory owner and worker in 1880: the names, the legal basis and the setting are entirely different and the shape is identical, a propertied few, a working many, a large gap in wealth and security, and political institutions weighted to the top. The Reform Act of 1832 admitted the middle class to the political nation and left the working class outside, Chartism was rejected, and tax and probate evidence shows wealth concentrated at the top throughout. The honest qualification strengthens the claim: legal serfdom and slavery ended and status became formally open, so hierarchy persisted as a structure while its basis moved from birth and land to capital.`
      },
      {
        category: 'Method',
        title: 'A fact has no answer until you say which comparison you mean',
        body: `Women entering factory work reads as continuity at the level of whether women worked, since they always had, and as change at the level of where and on whose terms, since the workplace separated from the home. It meant wage work away from home for working-class women and withdrawal from paid work as a status marker for middle-class women, so the population named decides the answer. Across the whole century it is change, since property rights, education and the vote follow; across the first fifty years it is mostly a change of setting. And measured against the household economy immediately before it is a break, while measured against Units 1 to 4 the legal subordination is strikingly persistent. Four defensible answers, four different questions, and naming which one you mean is the analytical move.`
      },
      {
        category: 'Thesis',
        title: 'A transformation of means with a persistence of relations',
        body: `Industrialization transformed how societies produced and where their people lived more completely than any change since agriculture, and left the basic structure of social hierarchy intact, replacing an elite of land with an elite of capital while the majority continued working for others with little property or power, and outside a small number of regions it altered what the world&rsquo;s farmers grew and sold without changing that they farmed. The two halves do not cancel because they are pitched at different levels: the means of production and the places people lived changed almost completely, the relationship between owners and workers did not, and where industry never arrived the change was in the crop rather than the work. That is also why the same century produced the largest rise in output in history and the largest movements demanding it be shared.`
      }
    ]
  }
};
