'use strict';

/**
 * Foundations 1, Geography Shapes Civilization: the deep reading.
 *
 * Why this exists. The First & 10 runs about 500 words and has to carry the
 * whole Neolithic, which means it states the causal chain rather than showing
 * any link in it working. Its own question 1 then asks a student to reconstruct
 * that chain with at least three links and explain how one caused the next, and
 * question 3 asks them to evaluate whether the switch to agriculture was an
 * improvement for everyone. A survey that says surplus produced specialization
 * gives a student the conclusion and none of the mechanism, and a survey with
 * room for one sentence on the costs cannot support an argument with two sides.
 *
 * So this chapter is organized around the bargain, which is what question 3 is
 * really about. Sections 01 to 06 build the chain link by link, each one showing
 * the mechanism rather than asserting it: what foraging actually was and what it
 * limited, the climate turn, what domestication physically is, why it happened
 * independently in several places, what a river actually supplies, and why a
 * storable surplus produces specialists and rulers at the same time. Section 07
 * is the price, in the skeletal and demographic evidence, because without it
 * question 3 is unanswerable. Section 08 is the road not taken. Section 09 is
 * the lesson's own last lecture card, geography as cause rather than destiny,
 * which is also the guard rail on everything above it.
 *
 * Three things the chapter is written to prevent:
 *
 *   1. The chain read as automatic. The Indus cities are the standing
 *      counter-case: surplus, planning and scale with no visible kings or royal
 *      tombs. Surplus makes hierarchy possible, not inevitable.
 *   2. Farming read as an invention someone thought of. Domestication is
 *      centuries of unintended selection, and at Gobekli Tepe and among the
 *      Natufians settlement and monument-building come before it, which inverts
 *      the tidy order the survey implies.
 *   3. Geography read as destiny. The strong determinist argument is summarized
 *      fairly in section 09 and then bounded, because a student who leaves this
 *      lesson believing terrain decides everything will misread every unit that
 *      follows.
 *
 * Body copy is authored as HTML. `<span class="kt">` is how a key term is found
 * on the page, so it belongs in the content, not in the template.
 */

module.exports = {
  topicKey: 'f1',
  slug: 'foundations-1-geography',
  lessonFile: 'foundations-1-geography.html',

  titleHtml: 'The <em>Bargain</em>',
  deck: `Farming produced more food per hectare and, for a very long time, worse lives for most of the people who did it. Both halves of that sentence are supported by evidence, and holding them together is what turns the Neolithic from a story about progress into an argument you can actually make.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 to 06 build the causal chain one link at a time, and each section shows the mechanism rather than stating the conclusion. That is your first reading question, which asks for at least three links and an explanation of how one caused the next. Section 07 is the price of the bargain, which is where your third question gets its other side, and section 05 is where your contextualization question lives.`,
    steps: [
      `<b>Sections 01 to 02:</b> what foraging actually was, what it limited, and what the end of the Ice Age changed.`,
      `<b>Sections 03 to 04:</b> what domestication physically is, and why it happened in several places independently. This is your evidence that farming was not an idea someone had.`,
      `<b>Section 05:</b> what a river actually supplies, four valleys compared. Question 2 lives here, and so does the success criterion about naming a specific geographic feature.`,
      `<b>Section 06:</b> surplus, and why storability is the property that matters. Question 1 needs this link most.`,
      `<b>Section 07:</b> the price, in skeletons and in who bore it. Question 3 cannot be argued honestly without it.`,
      `<b>Sections 08 to 09:</b> the people who did not farm, and the limits of explaining anything by geography alone.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'before-farming',
      num: '01',
      accent: 'gold',
      name: 'The World Before Farming',
      navLabel: 'Before farming',
      dates: 'Roughly 300,000 years to about 12,000 years ago &nbsp;·&nbsp; everywhere',
      thesis: `Foraging was not a waiting room for agriculture. It was a skilled, knowledge-heavy way of living that supported our species for the overwhelming majority of its existence, and understanding why people left it requires first understanding that it worked.`,
      parts: [
        {
          heading: 'What the life actually was',
          blocks: [
            { p: `A <span class="kt">hunter-forager</span> band was small, usually a few dozen people, and it moved. Movement was not aimless: it followed a calendar of ripening plants, migrating animals, spawning fish and reliable water, and it required an inventory of knowledge that is genuinely difficult to overstate. A forager needed to know which of hundreds of plants were edible, which were medicinal, which were poisonous at one season and safe at another, how to read tracks and weather, and how to make everything they used from what the landscape offered.` },
            { p: `The economics of that life produced a particular kind of society. You cannot own much when you carry everything, so material accumulation was limited and so, therefore, was inequality in possessions. Group decisions were generally made without permanent rulers, and food from a large kill was widely shared, which functioned as insurance in a world where any individual hunt might fail. Gathered plant foods, largely collected by women in most documented cases, typically supplied a substantial share of the calories, which is worth saying plainly because the phrase "hunter-gatherer" quietly promotes hunting to first place.` }
          ]
        },
        {
          heading: 'Why it was not primitive, and how sure we can be',
          blocks: [
            { p: `The reason this matters for your third reading question is that if foraging was miserable, the switch to farming needs no defending, and the argument is over before it starts. The evidence says it was not miserable. It says foragers generally ate a varied diet, showed fewer of the deficiency and infection markers that appear in early farming populations, and in favorable environments could meet their needs without working every waking hour.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `Two evidence streams, with different weaknesses. The first is archaeology: bones, tools, hearths, plant remains, and the shape of the human skeletons themselves. The second is ethnographic analogy, meaning the study of forager societies documented in the last two centuries, and it has to be handled carefully. Those societies are modern, not fossils, and most of them had been pushed onto marginal land by farming states long before anyone wrote about them, so they are not a window onto 20,000 BCE. The influential "original affluent society" argument of the late 1960s, which calculated that some foragers met their needs on a few hours of work a day, has been criticized for counting only food-getting time and leaving out processing, tool-making and travel. The safe version to write: foraging was a viable and skilled way of life rather than a deprived one, and precise claims about hours worked are contested.`
            } }
          ]
        },
        {
          heading: 'The limits it set',
          blocks: [
            { p: `What foraging could not do is concentrate. A band's size was capped by the wild food within reach of where it stood, and if the group grew past that, it split. Population density in most foraging landscapes was very low, and it could not rise, because there was no way to make one hectare of land yield more than nature was already giving.` },
            { p: `Mobility carried its own limit, and it is the one that matters most for what comes next. A woman who must carry a child until it can walk long distances cannot easily carry two, so birth intervals among mobile foragers tended to be long. Add to that the impossibility of stockpiling: a large kill or a good gathering season could not be banked for years, because meat spoils and most wild plant foods do not keep. A society that cannot store cannot accumulate, and a society that cannot accumulate cannot support anyone who is not getting food.` },
            { p: `Hold those three limits, since together they are the first link in your causal chain: no way to intensify yield, no way to store, and a slow rate of population growth. Everything in sections 05 and 06 is a description of those three limits being lifted.` }
          ]
        }
      ],
      useThis: {
        tool: `Foraging as a functioning system with hard ceilings. <em>The mechanism is that a band's size was set by the wild food within walking distance, and because meat and most wild plants cannot be stored, a good season could not be banked, so no surplus could accumulate and nobody could be fed who was not getting food.</em>`,
        limit: `Do not describe foragers as primitive or as failing to invent farming. The better sentence is that they had no reason to farm while foraging met their needs, and the evidence for that is in their skeletons.`,
        comparison: `Against <em>section 07</em> on health: early farming populations show more dental decay, more infection and, in many regions, shorter stature than the foragers who preceded them, which is the single most useful comparison in this chapter.`
      },
      terms: [
        ['Hunter-forager', 'A member of a mobile band living by hunting animals and gathering wild plants, the human way of life for almost all of our history.'],
        ['Band', 'A small, mobile group, usually a few dozen people, without permanent rulers and with widespread sharing of food.'],
        ['Ethnographic analogy', 'Using documented recent societies to interpret the deep past, useful but risky, since those societies are modern and often displaced.'],
        ['Carrying capacity', 'The population an environment can support with a given technology; foraging held it very low and farming raised it sharply.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'climate-turn',
      num: '02',
      accent: 'rust',
      name: 'The Climate Turn',
      navLabel: 'The climate turn',
      dates: 'The last glacial ending c. 12,000 years ago &nbsp;·&nbsp; a warmer, wetter, steadier world',
      thesis: `The most important precondition for farming was not an idea. It was a change in the weather that lasted ten thousand years, and the order of events in the archaeology is not the order the survey implies.`,
      parts: [
        {
          heading: 'What changed',
          blocks: [
            { p: `The last glacial period ended, and with it went a climate that had been not only colder but wildly unstable, swinging between states within a human lifetime. What followed, the epoch geologists call the Holocene, has been by comparison remarkably steady: warmer, wetter in many regions, and above all predictable from one decade to the next.` },
            { p: `Predictability is the part that matters, and it is easy to skip past. Planting is a bet. You put seed and months of labor into the ground on the expectation that the next twelve months will resemble the last twelve. In a climate that lurches, that bet is bad, and mobility, which lets you go to wherever the food is this year, is the rational strategy. In a stable climate the bet becomes reasonable, and staying put stops being a risk.` },
            { p: `Warming also moved the plants. Stands of wild wheat and barley spread across the hills of Southwest Asia, wild rice across parts of Asia, wild grasses elsewhere, putting dense concentrations of harvestable seed within reach of people who had the tools to cut and grind them. Nobody had to invent anything to eat those. They only had to be there.` }
          ]
        },
        {
          heading: 'Why then, and not in an earlier warm period',
          blocks: [
            { p: `There were earlier warm interglacials, and people did not farm in them, so warmth alone is not the answer. Several explanations are on the table and they are not exclusive. Atmospheric carbon dioxide was lower during the last glacial, which suppresses plant productivity, so cultivation may simply have paid less. The climate of earlier warm periods was less stable than the Holocene. And by the end of the last glacial, humans had accumulated far more botanical knowledge, better tools for cutting and grinding, and, in some regions, populations already packed densely enough into resource-rich pockets that intensifying what grew there was more attractive than moving.` },
            { p: `One influential formulation puts it as a pair: agriculture was close to impossible in the conditions of the last glacial and close to compulsory in those of the Holocene, because once some groups took it up, their growing numbers made it very hard for anyone nearby to stay foragers. Treat that as a strong argument rather than a settled fact, and notice that it explains a global timing pattern rather than any single region's decision, which is exactly the level a contextualization question wants.` }
          ]
        },
        {
          heading: 'Forager and farmer, side by side',
          blocks: [
            { p: `Your first success criterion asks you to describe how the two ways of life differed, so here they are on the same six measures. <b>Mobility:</b> the forager moves to the food on a seasonal round, the farmer stays and brings the food to a fixed point. <b>Diet:</b> the forager eats a wide range of species and the farmer eats a narrow one, dominated by one or two cereals. <b>Work:</b> the forager's labor is skilled, varied and intermittent, while the farmer's is repetitive, seasonal in its peaks and, at planting and harvest, relentless.` },
            { p: `<b>Property:</b> the forager owns what can be carried, the farmer owns land, a house, a store and animals, all of which can be inherited. <b>Group size:</b> dozens against hundreds and then thousands. <b>And a bad year:</b> the forager's response is to move or to switch to another food, since a diverse wild diet rarely fails all at once, while the farmer's is to eat the store, then the seed grain, then to starve or leave. That last row is the one worth memorizing, because it explains both why farming supported far more people and why farming societies were far more vulnerable to a single failure.` }
          ]
        },
        {
          heading: 'Settlement came first, at least sometimes',
          blocks: [
            { p: `Here is the fact that reorders the story. In the Levant, the Natufians were building stone-founded houses, storing wild cereals and burying their dead in the same places for generations <em>before</em> anyone was farming. They were sedentary, or nearly so, and they were foragers. Rich wild resources, not domesticated crops, held them in place.` },
            { p: `And at Gobekli Tepe in what is now southeastern Turkey, from around <span class="num">9600 BCE</span>, people were quarrying, carving and erecting massive stone pillars decorated with animals, in a monumental complex that took organized labor on a considerable scale. The people who built it were not, or were barely, farmers. That single site breaks the neat sequence in which surplus produces settlement, settlement produces cities and cities produce monuments, because here the monument arrives first.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that people "invented farming" or "discovered that seeds grow," and do not present the chain as a tidy one-way sequence. Domestication was a gradual, largely unintended result of centuries of harvesting and replanting, described in section 03, and in several places settlement and monument-building came before it rather than after. The strongest version of the causal argument is a feedback loop rather than a line: stable climate makes staying put viable, staying put makes tending wild stands worthwhile, tending changes the plants, changed plants yield more, more yield supports more people, and more people make going back to foraging impossible. Say "loop" and explain one turn of it, and you are doing something most answers do not.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Climatic stability as the precondition. <em>The mechanism is that planting is a bet on next year resembling this one, so in the lurching climate of the last glacial, mobility was the rational strategy and cultivation was not; the long steadiness of the Holocene changed the odds on that bet, and everything else follows from people acting on the new odds.</em>`,
        limit: `The sequence is not clean. Natufian sedentism and the monumental site at Gobekli Tepe both predate farming in their regions, so settlement did not always wait for surplus.`,
        comparison: `Against <em>section 04</em> on independence: a shared global climate change with local biota is exactly why farming appears in several unconnected regions within a few thousand years of each other.`
      },
      terms: [
        ['Holocene', 'The current geological epoch, beginning about 11,700 years ago, notable for an unusually stable climate.'],
        ['Sedentism', 'Living year-round in one place, which in several regions began before agriculture rather than after it.'],
        ['Natufians', 'Sedentary or near-sedentary foragers of the Levant who built houses and stored wild cereals before domestication.'],
        ['Gobekli Tepe', 'A monumental pillared complex in southeastern Turkey, from about 9600 BCE, built by people who were not yet farmers.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'domestication',
      num: '03',
      accent: 'iron',
      name: 'What Domestication Actually Is',
      navLabel: 'Domestication',
      dates: 'Centuries per species &nbsp;·&nbsp; a change in the plants and animals themselves',
      thesis: `<span class="kt">Domestication</span> is not a decision. It is an evolutionary change in another species, caused by human behavior, mostly without anyone intending it, and knowing the physical mechanism is what separates an answer that explains from one that asserts.`,
      parts: [
        {
          heading: 'The mechanism, in one plant',
          blocks: [
            { p: `Wild wheat and barley disperse their seed by shattering: when the grain ripens, the stalk holding it becomes brittle and the seeds fall to the ground, which is exactly what the plant needs and exactly what a harvester does not want. In any wild stand a rare mutant keeps its seed attached instead. That plant fails in the wild, because its seed never reaches the soil.` },
            { p: `Now introduce a person with a sickle. They cut ripe stands and carry them home, and the seeds that arrive are disproportionately the ones that did not fall off on the way. Some of that harvest is eaten and some is sown next season, so each cycle plants a population slightly enriched in non-shattering plants. Repeat for centuries and the crop cannot disperse itself at all. It now depends entirely on humans to reproduce, and humans depend on it. That is domestication, and nobody along the way had to understand a word of it.` },
            { p: `The same logic runs through the other domestication traits: larger seeds, thinner husks, seeds that germinate on cue instead of waiting out several seasons, and plants that ripen together rather than staggered. Every one of them is bad for a wild plant and good for a harvester, which is why they mark a domesticated crop in the archaeological record.` }
          ]
        },
        {
          heading: 'And in animals',
          blocks: [
            { p: `Animal domestication runs on the same principle with a shorter list of traits: tolerance of humans and of confinement, willingness to breed in captivity, reduced aggression and reduced flight response. Herders who kept the calmer animals and ate the difficult ones were selecting, whether or not that was the plan, and the resulting animals show physical changes too, including smaller size and smaller brains relative to their wild ancestors.` },
            { p: `Only a small number of large mammal species ever went through it, which is the point section 04 needs. A candidate had to eat something people could supply, grow fast enough to be worth feeding, breed readily in captivity, tolerate handling, and, most usefully, live in herds with a dominance hierarchy that a human could stand at the top of. Sheep, goats, cattle and pigs cleared all of those bars. Zebras, gazelles and most deer did not, and not for want of trying: people have attempted to domesticate many species and mostly failed. The distribution of the few that qualified was decided by biogeography, meaning it was decided long before any human was involved.` },
            { note: {
              kind: 'howknow',
              label: 'How we know a species was domesticated',
              html: `Archaeologists do not find a label. For plants, they look at the seeds themselves: a non-shattering scar on a grain, a change in size or shape, or microscopic silica bodies called phytoliths that survive when the plant does not. For animals, the best evidence is not a single bone but a whole assemblage: a wild-hunted population produces the mix of ages and sexes a hunter encounters, while a managed herd produces a distinctive pattern, such as most males killed young, since only a few are needed for breeding, and females kept alive for years. Changes in bone size across centuries add to it. This is a good example of a general historical point: the strongest evidence is often a pattern across many cases rather than one spectacular find.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Selection for non-shattering grain. <em>The mechanism is that harvesting with a sickle and replanting part of the harvest systematically favors the rare mutant whose seed stays attached, so over centuries the crop loses the ability to sow itself and becomes dependent on people, which is domestication happening without anyone intending it.</em>`,
        limit: `Only a handful of large mammals were ever domesticable, because a candidate needed the right diet, growth rate, temperament and herd structure. Which species those were, and where they lived, was settled by biogeography long before humans arrived.`,
        comparison: `Against <em>section 05</em>: the Fertile Crescent's advantage was not only water and soil but the wild ancestors of wheat, barley, sheep and goats growing in the same place, which is a second geographic condition and a better answer than "rivers" on its own.`
      },
      terms: [
        ['Domestication', 'The genetic change in a plant or animal population produced by human selection, usually gradual and usually unintended.'],
        ['Shattering', 'The wild trait of dropping ripe seed; its loss is the defining mark of domesticated cereals.'],
        ['Phytolith', 'A microscopic silica body formed in plant tissue that survives in soil and identifies species long after the plant has decayed.'],
        ['Kill pattern', 'The age and sex profile of animal bones at a site, which distinguishes a hunted population from a managed herd.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'independent',
      num: '04',
      accent: 'oxide',
      name: 'It Happened Several Times',
      navLabel: 'Independent centers',
      dates: 'Roughly seven or more centers &nbsp;·&nbsp; none of them in contact',
      thesis: `Agriculture was invented independently in a number of separate regions by people who had never heard of each other. That single fact is the strongest evidence that the Neolithic was a response to a shared condition rather than a good idea that spread.`,
      parts: [
        {
          heading: 'The centers, and what each one had to work with',
          blocks: [
            { p: `<b>Southwest Asia</b>, from roughly <span class="num">9500 BCE</span>: emmer and einkorn wheat, barley, lentils, peas, flax, with sheep, goats, cattle and pigs. The most complete package anywhere, which matters for section 09.` },
            { p: `<b>China</b>, at least two separate centers: millet in the drier north along the Huang He, and rice in the wetter Yangtze basin, with pigs and chickens. Two different crops, two different water regimes, one country.` },
            { p: `<b>Mesoamerica</b>: maize, domesticated from a wild grass called teosinte whose seed head bears almost no resemblance to a modern corn cob, along with beans and squash. The transformation took thousands of years, which makes maize the clearest proof that domestication is a slow evolutionary process rather than an act of invention.` },
            { p: `<b>The Andes and Amazonia</b>: potato, quinoa, and manioc, with llamas and alpacas and guinea pigs. Note what is missing from that list, since no animal here could pull a plow or carry a rider, a point Foundations 5 returns to.` },
            { p: `<b>New Guinea</b>: taro, yams and bananas, cultivated in drained wetland plots at Kuk Swamp thousands of years ago, in a highland region with no state, no cities and no writing. Agriculture does not always produce civilization, and this is the case that proves it.` },
            { p: `<b>West Africa and the Sahel</b>: sorghum, pearl millet, African rice and yams, domesticated for a climate where rain is seasonal and unreliable. <b>Eastern North America</b>: squash, sunflower, marsh elder and goosefoot, a genuine independent center whose crops were later largely displaced when maize arrived from the south.` }
          ]
        },
        {
          heading: 'What the pattern proves',
          blocks: [
            { p: `Set those side by side and the argument writes itself. The crops are different everywhere, because each region domesticated whatever grew there. The timing clusters within a few thousand years of each other, which against a background of two hundred thousand years of foraging is close to simultaneous. And there was no contact between most of these regions at all.` },
            { p: `A shared trigger with local materials is the only explanation that fits, and the trigger is the one from section 02. That is a complete causal argument, it takes two sentences, and it is worth more in an essay than a list of crops.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two habits to break. The first is treating Southwest Asia as <em>the</em> origin of agriculture with everywhere else as a copy. It is the earliest well-documented center and the best-studied, which is not the same thing, and maize, rice, potatoes and sorghum were domesticated by people who owed it nothing. The second is assuming farming leads to cities and states. New Guinea's highlands supported dense farming populations for millennia without producing either. Agriculture is necessary for a state and nowhere near sufficient, which is exactly why section 06 has to explain what else had to be true.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Independent invention as evidence. <em>The mechanism is that unconnected peoples domesticated entirely different species within a few thousand years of one another, which rules out diffusion of an idea and points to a shared external trigger, the post-glacial climate, acting on whatever plants and animals each region happened to have.</em>`,
        limit: `Farming did not always lead anywhere further. New Guinea's highlands carried dense agricultural populations for thousands of years with no cities, no state and no writing.`,
        comparison: `Against <em>section 03</em> on packages: the crops are different everywhere, but the domestication mechanism is identical, which is why maize from teosinte and wheat from wild emmer are the same story told with different plants.`
      },
      terms: [
        ['Teosinte', 'The wild Mesoamerican grass from which maize was domesticated over thousands of years.'],
        ['Founder crops', 'The small group of plants first domesticated in a region, such as emmer, einkorn, barley, lentils, peas and flax in Southwest Asia.'],
        ['Kuk Swamp', 'A New Guinea highland site documenting early drained-field cultivation of taro and bananas, farming without cities or a state.'],
        ['Independent invention', 'The appearance of the same development in unconnected places, which is evidence of a shared cause rather than of contact.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'rivers',
      num: '05',
      accent: 'gold',
      name: 'What a River Actually Gives You',
      navLabel: 'Why river valleys',
      dates: 'The Nile, the Tigris and Euphrates, the Indus, the Huang He &nbsp;·&nbsp; c. 3500 BCE onward',
      thesis: `"River valley" is a location, not an explanation. A river supplies four separate things, and naming which one you mean is the difference between a contextualization sentence that scores and one that describes.`,
      parts: [
        {
          heading: 'The four things, separated',
          blocks: [
            { p: `<b>Water in a dry place.</b> All four of the great valleys sit in regions where rainfall alone will not reliably grow a crop. The river makes agriculture possible where the sky does not, through <span class="kt">irrigation</span>, and that is why farming concentrates in a narrow strip while the land on either side stays empty. The satellite view of the Nile, a green ribbon through desert, is this one fact made visible.` },
            { p: `<b>Fertility that renews itself.</b> This is the mechanism most answers miss and the strongest one available to you. Grow crops on the same ground year after year and the soil is stripped of nutrients, which is why farmers elsewhere had to shift plots, leave land fallow, or manure it. A flooding river solves the problem for free: the annual flood spreads a fresh layer of <span class="kt">alluvial soil</span> across the plain, and the field is renewed without anyone doing anything. Permanent fields in one place are what make permanent cities in one place possible.` },
            { p: `<b>Transport.</b> A river is a road that carries heavy things cheaply, which matters enormously for grain, stone and timber, and it links the settlements along it into one economy.` },
            { p: `<b>A schedule.</b> A flood that arrives at the same time each year is a calendar, and a calendar is the beginning of planning, of accounting, and of a state that can tell you when to work.` }
          ]
        },
        {
          heading: 'How a farming package traveled',
          blocks: [
            { p: `Independent invention is only half the story, because most places that farm did not invent it, and how it arrived has been settled by evidence that did not exist a generation ago. For Europe the answer turned out to be people. Ancient DNA recovered from skeletons shows that the spread of farming from Anatolia into Europe involved the large-scale movement of farming populations themselves, who mixed with the hunter-gatherers already living there rather than simply teaching them.` },
            { p: `That matters for how you write about diffusion generally. There are two mechanisms and they leave different traces: a technique can spread by people adopting it from neighbors, or by the people who practice it moving in and outnumbering them. Pottery styles and crop remains alone cannot easily tell you which happened, and genetics can. When a later unit asks how a technology or a religion spread, having the distinction ready, adoption against migration, is worth a great deal, and this is the clearest early case of it.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a new kind of evidence',
              html: `Ancient DNA is roughly two decades old as a working method and it has overturned settled positions in this topic more than once, including a long-standing debate about whether European farming spread by migration or by imitation. Two cautions come with it. Preservation is uneven, so the sample skews toward cold, dry places and toward periods with burial practices that leave bones. And genetic ancestry is not the same thing as culture, language or identity: showing that people moved does not tell you what they called themselves or what language they spoke. Cite it as strong evidence about population movement specifically.`
            } }
          ]
        },
        {
          heading: 'Four valleys, four different bargains',
          blocks: [
            { p: `<b>The Nile</b> had the gentlest terms. Its flood was annual, and reliable enough to plan a whole agricultural calendar around: water and silt arrived in late summer, the fields were sown as the water fell back, and the harvest came before the next flood. Herodotus called Egypt the gift of the river, and the compliment is mostly accurate. Add deserts on both flanks, which discouraged invasion, and Egypt got predictability that its neighbors did not.` },
            { p: `<b>The Tigris and Euphrates</b> gave the same gifts on far harsher terms. The flood was violent, its timing poor for the grain cycle, and its scale varied unpredictably from year to year, so agriculture there required serious engineering: canals, levees and basins, built and maintained collectively. And it carried a sting. Irrigating heavily in a hot, flat, poorly drained plain leaves salts behind as the water evaporates, and over centuries the soil <span class="kt">salinizes</span>. Cuneiform records from southern Mesopotamia show a long shift from wheat toward barley, which tolerates salt better, together with complaints of failing yields. Historians have debated how much of the region's political trouble that explains, so cite it as a well-evidenced environmental cost rather than as the cause of a collapse.` },
            { p: `<b>The Indus</b> combined river flooding with monsoon rain, and produced the most striking cities of the lot: Mohenjo-daro and Harappa, laid out on a grid, built from standardized fired bricks, with covered drains, wells and bathing platforms serving ordinary houses. The Indus later shifted its channels and the monsoon appears to have weakened, and the cities were largely abandoned, which is a reminder that a geographic gift can be withdrawn.` },
            { p: `<b>The Huang He</b> ran through <span class="kt">loess</span>, a fine wind-blown soil that is fertile and soft enough to work with simple tools, which made early farming easy. The same softness fills the river with silt, so its bed rises, so its banks must be raised, so when it breaks them it does so catastrophically and can shift its course by hundreds of kilometers. The Chinese name for it, China's Sorrow, is an accurate summary of a geographic bargain: fertile ground purchased with permanent risk.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that civilization requires a river valley. The requirement is reliable water plus fertility that does not exhaust, and a flooding river is the most common way to get both, not the only one. Highland Mesoamerica and the Andes built cities and states on rain-fed farming, terracing, raised fields and irrigation from smaller streams, without anything resembling the Nile. State the requirement rather than the location and your sentence covers every case in the course rather than four of them.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Annual flooding as self-renewing fertility. <em>The mechanism is that continuous cropping strips soil nutrients and forces farmers to shift or fallow their fields, while a river's flood lays down fresh alluvial silt every year, so the same fields stay productive indefinitely and a settlement can therefore stay in one place indefinitely, which is the precondition for a city.</em>`,
        limit: `The gift came with terms. Mesopotamian irrigation salinized the soil over centuries, the Huang He's silt load made its floods catastrophic, and the Indus cities were abandoned as the rivers shifted and the monsoon weakened.`,
        comparison: `Against itself: <em>Nile and Tigris-Euphrates</em> is the sharpest comparison in this chapter, because both are irrigation civilizations and one had a predictable flood while the other had a violent one, which shows up in how much collective engineering each required.`
      },
      terms: [
        ['Alluvial soil', 'Fine, fertile sediment deposited by a flooding river, which renews a field&rsquo;s productivity without any labor.'],
        ['Irrigation', 'Directing water onto fields, which makes farming possible where rainfall alone cannot support it.'],
        ['Salinization', 'The build-up of salts in irrigated soil in hot, poorly drained land, which reduces yields over centuries.'],
        ['Loess', 'Fine wind-blown soil, fertile and easy to work, which gives the Huang He both its early farming and its silt-laden floods.'],
        ['Floodplain', 'The flat land beside a river that its floods cover and resupply with sediment.']
      ]
    },

    // ── 06 ────────────────────────────────────────────────────────────────────
    {
      id: 'surplus',
      num: '06',
      accent: 'rust',
      name: 'Surplus, and What It Really Does',
      navLabel: 'Surplus',
      dates: 'From c. 3500 BCE in Mesopotamia &nbsp;·&nbsp; cities, writing, classes',
      thesis: `Surplus does not simply mean extra food. The property that changed history is that grain can be stored, counted and taken, which is why the same harvest that freed a potter to make pots also made it possible for somebody to tax her.`,
      parts: [
        {
          heading: 'Why storability is the hinge',
          blocks: [
            { p: `Compare two surpluses. A forager band with more meat than it can eat has a feast, because in a week the surplus is gone. A farming village with more grain than it can eat has a store, because grain is dry, dense, durable and divisible: it keeps for years, it can be measured, and it can be moved.` },
            { p: `Four consequences follow directly from those physical properties, and this is the tightest link in your causal chain. Storage means the surplus can feed someone who is not farming, which is <span class="kt">job specialization</span>. Storage means bad years can be survived, so population can grow past what a single harvest supports. Countability means it can be recorded and administered. And, less comfortably, concentration means it can be seized: a granary is a target in a way that a forager's next meal never was. Some historians have argued that this is precisely why early states are grain states, since cereals ripen predictably and above ground where an assessor can see them, while roots and tubers can sit in the earth until you need them. That argument is an interpretation rather than a settled finding, and it is a very useful one to be able to gesture at.` }
          ]
        },
        {
          heading: 'What a city actually was',
          blocks: [
            { p: `Two settlements, a few thousand years apart, show what changed. <b>Catalhoyuk</b> in central Anatolia, occupied from roughly <span class="num">7100 BCE</span>, held perhaps a few thousand people in mud-brick houses packed so tightly together that there were no streets: residents walked across the roofs and entered through them. It is large, dense and agricultural, and yet it has produced no clear public buildings, no obvious temples, no palace and no district of elite housing. A big village rather than a city, and evidence that density alone does not create a state.` },
            { p: `<b>Uruk</b> in southern Mesopotamia, some four thousand years later, is a different kind of place: tens of thousands of people, a monumental temple precinct raised above the plain, a wall, workshops producing standardized goods in quantity, and an administration writing everything down. The difference between the two is not size alone. It is the presence of institutions that outlive individuals, of a division between rulers and ruled, and of a surrounding countryside whose surplus is being pulled inward.` },
            { p: `That is what a city is for the purposes of this course: not merely a lot of people in one place, but a place organized around institutions supported by other people's food. Keep the two examples together and you can answer a question about urbanization with a comparison instead of a definition.` }
          ]
        },
        {
          heading: 'What got built on it',
          blocks: [
            { p: `<b>Cities.</b> Uruk in southern Mesopotamia grew to tens of thousands of people, an order of magnitude beyond any village, and its scale is only possible because a hinterland of farmers was producing food for people who were not.` },
            { p: `<b>Specialists.</b> Potters, weavers, metalworkers, brewers, builders, soldiers, priests and administrators, each supported by grain they did not grow. Specialization compounds, because a full-time potter gets better at pots than a farmer who makes them in the off season.` },
            { p: `<b>Writing.</b> This is the detail worth carrying out of the whole chapter. The earliest writing anywhere is not poetry, law or scripture. The oldest tablets from Uruk, from roughly <span class="num">3300 BCE</span>, are accounts: quantities of grain, beer, textiles and livestock, with the names of officials. Literature arrives centuries later. Writing was invented to keep track of the surplus, and one influential account traces it back further, to clay tokens sealed in clay envelopes and then impressed on the outside so the contents could be read without breaking the seal. The strong version of that token theory is debated, but the administrative origin of writing is not.` },
            { p: `<b>Government and hierarchy.</b> Someone had to organize irrigation works, defend the store, settle disputes over land and water, and decide what the surplus was for. Those functions became permanent offices, offices became authority, and authority backed by control of the granary became class. Alongside it came patriarchy, hardening as property became heritable and descent became something worth policing, and forced labor, since a state with a store can feed people it compels to work.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The chain is a strong tendency, not a law, and the Indus cities are the counter-case that proves it. Mohenjo-daro and Harappa had scale, planning, standardized weights and long-distance trade, and they have produced no palaces that are clearly palaces, no royal tombs stuffed with treasure, and no monuments celebrating a named ruler, which is exactly what Egypt and Mesopotamia produce in quantity. Historians disagree about what that means, and the script is undeciphered so the argument is unresolved. Write "surplus made hierarchy possible" rather than "surplus caused hierarchy," and use the Indus as your evidence for the distinction. That is a genuinely sophisticated move available to a first-week student.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Storability as the property that matters. <em>The mechanism is that grain is durable, dense, divisible and countable in a way that wild foods are not, so a harvest can feed people who did not grow it, be banked against a bad year, be recorded by an administrator, and be taken by whoever controls the store, which is why specialization, writing, taxation and hierarchy all appear on the back of the same physical fact.</em>`,
        limit: `Not automatic. The Indus cities show surplus, planning and scale with no clear evidence of kings or royal tombs, so hierarchy is a tendency rather than a rule.`,
        comparison: `Against <em>section 01</em>: a forager's windfall is a feast because it cannot be stored, and a farmer's windfall is a granary. Same abundance, completely different consequences, and the difference is physical rather than cultural.`
      },
      terms: [
        ['Agricultural surplus', 'Food produced beyond what the producers need, and, crucially, in a form that can be stored.'],
        ['Job specialization', 'Full-time work other than food production, made possible by a surplus that feeds people who do not farm.'],
        ['Cuneiform', 'The wedge-shaped Mesopotamian script, whose earliest surviving texts are administrative accounts rather than literature.'],
        ['Social stratification', 'The division of a society into ranked classes with unequal access to wealth, land and authority.'],
        ['Patriarchy', 'A social order concentrating authority and inheritance in men, which hardened as land and property became heritable.']
      ]
    },

    // ── 07 ────────────────────────────────────────────────────────────────────
    {
      id: 'the-price',
      num: '07',
      accent: 'iron',
      name: 'The Price of the Bargain',
      navLabel: 'The price',
      dates: 'Written in skeletons &nbsp;·&nbsp; the other half of question 3',
      thesis: `Farming populations grew while farming individuals got sicker, shorter and more overworked. That is not a paradox once you see that the two are measuring different things, and the distinction is the best answer available to your third reading question.`,
      parts: [
        {
          heading: 'What the skeletons say',
          blocks: [
            { p: `Human remains from the transition to agriculture in many regions show a consistent set of changes, and none of them are good. Average stature declines. Dental decay rises sharply, because a diet centered on starchy cereals feeds the bacteria that cause it. Enamel defects and other markers of arrested growth become more common, which indicates episodes of childhood illness or hunger. Iron-deficiency markers increase. Signs of infectious disease increase with settlement density.` },
            { p: `Joint and bone wear tells the labor story. Grinding grain on a saddle quern is done kneeling, pushing with the whole upper body, for hours daily, and at some early farming sites the skeletons of women carry a matching signature of arthritic damage to knees, toes and lower back. Whatever else the Neolithic did, it invented long, repetitive, physically destructive daily work, and it distributed that work unequally from the beginning.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `This is bioarchaeology, and its limits are worth knowing. Skeletons are a sample of who died and got buried in a place archaeologists later dug, and elites are often buried in ways that preserve better and get excavated first. Height and health markers vary by region and period, and the pattern is a broad tendency rather than a universal law: some populations show it strongly, others weakly. And there is a genuine methodological puzzle known as the osteological paradox: a skeleton showing signs of chronic disease belonged to someone who survived long enough to develop them, so the healthiest-looking remains can be those of people who died fastest. Cite the pattern as well supported and widespread, and avoid saying it happened everywhere identically.`
            } }
          ]
        },
        {
          heading: 'Why populations grew anyway',
          blocks: [
            { p: `The resolution is demographic. Population growth is births minus deaths, and farming raised both. It raised births because settled women were no longer carrying an infant across long distances, and because cereal porridge is a weaning food, so children could be weaned earlier and birth intervals shortened. It raised deaths through infectious disease in crowded settlements, through the new illnesses that came from living beside animals, and through famine when a monoculture failed. Births won.` },
            { p: `So the honest summary is that agriculture was a success for populations and a hardship for most people in them. A farming society with worse individual health and higher fertility grows, and a growing society with a granary and specialists out-competes, absorbs and displaces its foraging neighbors, which is why the arrangement spread despite the costs to the individuals paying them.` },
            { p: `There was no going back either, and that matters for the argument. Once population had risen to what farming could support, the land could no longer feed those people by foraging, and the skills and the wild stands were both gone. The bargain came with a ratchet.` }
          ]
        },
        {
          heading: 'And who paid',
          blocks: [
            { p: `The costs were not shared evenly, which is where a strong response to question 3 usually lands. Elites in early states were taller and better fed than the people who grew their food, so agriculture was demonstrably an improvement for some. Enslaved and forced laborers existed from very early in the record of these states. Women's position generally worsened as heritable property, patriarchal descent and the grinding stone all arrived together. The people who benefited most were the ones who controlled the store rather than the ones who filled it.` },
            { p: `That gives you the shape of a good argument. The question is not only whether agriculture was an improvement, but an improvement for whom, measured by what, and over what timescale, and a response that separates those three is doing genuine historical work.` }
          ]
        }
      ],
      useThis: {
        tool: `The demographic scissors. <em>The mechanism is that farming raised fertility, through shorter birth intervals for settled women and cereal weaning foods, at the same time as it raised mortality, through crowd disease, animal-borne illness and famine, so populations grew even as individual health declined, which is why a worse life for most people spread rather than being abandoned.</em>`,
        limit: `The evidence is a strong tendency, not a universal, and bioarchaeology has real sampling problems. Say "in many regions" and you are both accurate and safe.`,
        comparison: `Against <em>section 01</em> directly: forager skeletons are generally taller with better teeth than the early farmers who followed them in the same region, which is the single most quotable fact in this chapter.`
      },
      terms: [
        ['Bioarchaeology', 'The study of human remains from archaeological sites, the main evidence for health before written records.'],
        ['Enamel hypoplasia', 'A defect in tooth enamel marking an episode of illness or malnutrition during childhood growth.'],
        ['Zoonotic disease', 'An illness that crosses from animals to humans, which became far more common once people lived alongside herds.'],
        ['Birth interval', 'The spacing between one child and the next; farming shortened it, which is the main driver of population growth.'],
        ['Osteological paradox', 'The problem that visible disease in a skeleton means the person survived it, so the healthiest bones can belong to the least healthy people.']
      ]
    },

    // ── 08 ────────────────────────────────────────────────────────────────────
    {
      id: 'other-roads',
      num: '08',
      accent: 'oxide',
      name: 'The Roads Not Taken',
      navLabel: 'Pastoralists and foragers',
      dates: 'The steppe, the deserts, the forests &nbsp;·&nbsp; the other Neolithic',
      thesis: `Pastoralism is not a failed attempt at farming. It is a specialized solution to land that cannot be farmed, it produced its own hierarchies and its own technologies, and it stayed structurally connected to the farming world for the rest of the period this course covers.`,
      parts: [
        {
          heading: 'Herding as a strategy',
          blocks: [
            { p: `The Eurasian steppe runs for thousands of kilometers from Hungary to Manchuria as continuous grassland, too dry for reliable rain-fed agriculture and mostly without rivers to irrigate from. Grass is useless to humans directly, and the whole logic of <span class="kt">pastoralism</span> is to convert it, by putting animals on it and eating the animals or their products.` },
            { p: `The productivity gain came from taking the products rather than only the meat, sometimes called the secondary products revolution: milk, wool, hides, dung for fuel, and traction from animals harnessed to plows and carts. A slaughtered animal feeds you once, whereas a milked animal feeds you for years, and that changes the arithmetic of what a herd is worth.` },
            { p: `Milk carries a striking piece of evidence with it. Most adult mammals cannot digest lactose, and neither can most adult humans, but in populations with long dairying traditions in Europe and East Africa a genetic change allowing it spread independently. It is one of the clearest cases we have of a cultural practice altering human biology, though the timing does not line up neatly with the start of dairying and researchers are still arguing about why.` }
          ]
        },
        {
          heading: 'What it produced, and how it connected',
          blocks: [
            { p: `Mobile does not mean poor or simple. Wealth in a pastoral society is held in animals, animals can be accumulated, and steppe burials from the later Bronze Age onward contain wagons, weapons, gold and horses, which is the archaeology of a stratified society with chiefs. Pastoralists were more socially unequal than foragers, for the same underlying reason farmers were: their wealth could be counted and inherited.` },
            { p: `And they were never separate from the farming world. Pastoralists needed grain, metal, cloth and manufactured goods they did not produce, and farming societies wanted animals, hides and above all horses. So the two lived in permanent exchange, punctuated by raiding, and the people moving between them carried technology, language and disease as a by-product. Horse domestication and, later, the chariot and mounted archery came out of this world and reshaped the settled one repeatedly. When Foundations 3 describes the Han buying peace from the Xiongnu, and when Foundations 5 puts Temujin on the steppe north of Song China, this is the world those states are dealing with.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not describe pastoralists as backward, as failed farmers, or as people who had not yet developed. They were doing the only thing that works on land that cannot be farmed, they were often better nourished than the farmers they traded with, and their military advantages meant that for three thousand years the settled empires of Eurasia treated them as the most serious strategic problem they had. And foragers did not vanish either: foraging persisted for millennia alongside farming, sometimes in places farming could not reach and sometimes by choice, and some societies took up cultivation and gave it up again.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Converting grass into food. <em>The mechanism is that humans cannot digest grass and herd animals can, so on land too dry to farm the productive strategy is to move animals across it and take their milk, wool, hides and traction rather than only their meat, which supports far more people than foraging the same ground and none of the crops the same ground would refuse to grow.</em>`,
        limit: `Pastoral societies depended on farming ones for grain, metal and manufactured goods, so the two were locked together by trade and by raiding rather than being separate worlds.`,
        comparison: `Against <em>section 06</em> on wealth: both farmers and pastoralists developed hierarchy because their wealth could be accumulated and inherited, in a granary or in a herd, while foragers who carried everything could not accumulate at all.`
      },
      terms: [
        ['Pastoralism', 'A way of life based on herding domesticated animals across seasonal ranges, suited to land too dry to farm.'],
        ['Secondary products', 'What a living animal yields, milk, wool, hides, dung and traction, as against the meat of a dead one.'],
        ['Steppe', 'The grassland corridor running from eastern Europe to Manchuria, the heartland of Eurasian pastoralism.'],
        ['Lactase persistence', 'The genetic ability to digest milk in adulthood, which spread independently in several dairying populations.']
      ]
    },

    // ── 09 ────────────────────────────────────────────────────────────────────
    {
      id: 'cause-not-destiny',
      num: '09',
      accent: 'gold',
      name: 'Cause, Not Destiny',
      navLabel: 'Cause, not destiny',
      dates: 'The guard rail on everything above &nbsp;·&nbsp; and the bridge to c. 1200',
      thesis: `Geography is the most powerful contextual tool in this course and the easiest one to overuse. The historian's question is never "what did the land determine" but "what did it make easier or harder, for whom, and what did people then do about it."`,
      parts: [
        {
          heading: 'The strong argument, stated fairly',
          blocks: [
            { p: `There is a serious version of geographic explanation and you should be able to state it, because a claim you can state properly is one you can then bound. It runs roughly like this. Eurasia happened to hold most of the world's domesticable large mammals and several of the most productive cereals. Its main axis runs east to west, so a crop or an animal moving along it stays in a similar band of day length and climate and can spread without needing to be re-adapted, while the Americas and Africa run north to south across climate zones, which slows the same movement. More domesticates and easier diffusion mean earlier and denser agriculture; denser agriculture and close life with herd animals mean more surplus, more specialists, more technology and more epidemic disease; and those advantages compound over thousands of years into the imbalance visible in 1492.` },
            { p: `Taken as an account of why farming began where it did, and why some regions had more to work with than others, that argument is well supported and this chapter has been using parts of it throughout. Section 03's point about which animals could be domesticated is exactly this kind of claim.` }
          ]
        },
        {
          heading: 'Where it stops',
          blocks: [
            { p: `The limits are real and worth knowing. Long-run geographic advantage explains starting conditions far better than it explains particular outcomes: the same Eurasian geography contained Song China, Dar al-Islam and Latin Europe simultaneously, and it cannot tell you why their positions relative to one another changed so drastically after 1500, since the terrain did not move. Critics also point out that this kind of explanation can flatten out the choices, institutions and conflicts that historians spend their time on, and that in weaker hands it slides into telling people that whatever happened to them was written in the ground.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The examinable form of this is a sentence pattern. <b>Weak, and determinist:</b> "Egypt became a great civilization because it had the Nile." <b>Strong:</b> "The Nile's predictable annual flood renewed the fields without labor and set a fixed agricultural calendar, which made permanent settlement and centralized planning far easier than they were in Mesopotamia, where an unpredictable flood forced the same populations to build and maintain far more collective engineering." Both mention a river. Only the second says what the river made easier, for whom, and compared to what. That comparison clause is where the credit is.`
            } }
          ]
        },
        {
          heading: 'The bridge to c. 1200',
          blocks: [
            { p: `Everything else in Foundations sits on this chapter. The states in Foundations 3 tax, conscript and feed themselves from an agricultural surplus, and every tool of rule they use is a way of collecting or spending one. The trade networks in Foundations 4 move goods that a surplus paid for, along routes provisioned by farmers, and the crop transfers in that lesson are the same Neolithic process running again in the eleventh century when Champa rice reaches the Yangtze. The belief systems in Foundations 2 were institutions with land, tenants and granaries. And when Foundations 5 says Song China supported a hundred million people, the sentence underneath it is that wet-rice agriculture in the Yangtze delta produced enough surplus to feed the ones who were not farming.` },
            { p: `That is why this is Day 1. Not because it is old, but because it is the layer everything else in the course is standing on, and a student who can name the layer can explain a state instead of describing it.` }
          ]
        }
      ],
      useThis: {
        tool: `The easier-or-harder test. <em>The mechanism for using geography well is to convert every geographic claim into a comparison: name the feature, say what it made easier or harder, say for whom, and say compared with where. A feature named without that clause is scenery, and a feature with it is contextualization.</em>`,
        limit: `Geographic advantage explains starting conditions much better than it explains particular outcomes, and the strong determinist version cannot account for changes in the relative position of regions whose terrain never changed.`,
        comparison: `Against every later unit: the states, trade networks and belief systems in Foundations 2 to 5 all rest on an agricultural surplus laid down thousands of years earlier, which is what makes this the first lesson rather than a piece of background.`
      },
      terms: [
        ['Environmental determinism', 'The claim that physical geography decides the course of human societies; useful as a starting condition, unreliable as an explanation of outcomes.'],
        ['Contextualization', 'Placing a development inside the conditions that shaped it and explaining the connection, not merely naming the condition.'],
        ['Continental axis', 'The orientation of a landmass, which affects how easily crops and animals spread between similar climates.'],
        ['Carrying capacity', 'The population a given environment supports under a given technology; the Neolithic raised it, which is the whole story in four words.']
      ]
    }
  ],

  closing: {
    navLabel: 'Building your answer',
    heading: 'Building an Answer That Scores',
    intro: `Your three questions ask for a causal chain, a contextualization sentence, and a position on whether agriculture was an improvement. All three have their evidence above, and all three are usually lost the same way: by naming a condition without saying what it did.`,
    pairs: [
      {
        category: 'Question 1: Causation',
        title: 'The chain, with the links actually explained',
        body: `Name at least three links and explain each junction. A defensible chain runs: <b>1.</b> The last glacial ends and the climate becomes stable and predictable, which makes planting a reasonable bet where mobility had been the safer strategy. <b>2.</b> People harvesting and replanting wild cereals unintentionally select for non-shattering seed heads, so over centuries the plants become domesticates that yield more and depend on human sowing. <b>3.</b> In river valleys, annual flooding renews soil fertility for free, so the same fields stay productive and settlement can become permanent. <b>4.</b> Grain, unlike wild food, stores, so a harvest can feed people who did not grow it, which produces specialists, and can be counted and seized, which produces administrators and rulers. One caution worth a sentence: this is a feedback loop rather than a straight line, and Gobekli Tepe and the Natufians show settlement and monument-building arriving before farming rather than after it.`
      },
      {
        category: 'Question 2: Contextualization',
        title: 'Name the feature, then say what it did',
        body: `The template is: condition, mechanism, consequence, in one sentence. Weak: "Mesopotamia had the Tigris and Euphrates, which helped farming." Strong: "Because the Tigris and Euphrates flooded violently and at an unhelpful point in the grain cycle, farming on the southern floodplain required canals, levees and basins that no single household could build or maintain, which pushed Sumerian communities toward collective organization and centralized authority earlier than rain-fed regions needed it." Section 05 gives you four valleys to do this with, and the strongest versions use the mechanism most answers miss: the flood renewed soil fertility without labor, which is what made permanent fields, and therefore permanent cities, possible.`
      },
      {
        category: 'Question 3: Argumentation',
        title: 'An improvement for everyone?',
        body: `Take a position, and give the other side real weight, because a response that only lists costs is as incomplete as one that only lists gains. <b>Against the claim:</b> in many regions early farmers were shorter than the foragers before them, with more dental decay, more childhood growth interruption, more infectious disease, and long repetitive labor whose marks are on their bones; monoculture brought famine risk; hierarchy, forced labor and patriarchy hardened as heritable property arrived. <b>For the claim, or complicating it:</b> populations grew, which means more people lived at all; storage buffered bad seasons; specialization produced technologies, writing and cities; and elites in these societies really were better fed and taller. The strongest answers separate three questions the claim runs together, which is <em>improvement for whom</em>, <em>measured by what</em>, and <em>over what timescale</em>, and then land somewhere like this: agriculture was a success for populations and for the people who controlled the surplus, and a decline in the daily life and health of most individuals who produced it, which is why "improvement" needs a subject before it can be evaluated.`
      },
      {
        category: 'Category: what an environment had to supply',
        title: 'One comparison spine for the whole chapter',
        body: `If you need a single analytical category that works everywhere in this lesson, use what the land had to supply and what it therefore permitted. The Fertile Crescent supplied water, renewing soil and the wild ancestors of wheat, barley, sheep and goats, so it got the earliest complete farming package. The Nile supplied a predictable flood, so Egypt got a calendar and a centralized state with unusually little engineering effort. Southern Mesopotamia supplied an unpredictable one, so it got canals, collective labor and, eventually, salt. The steppe supplied grass and nothing else, so it got herds and mobility instead of fields. Set any two of those inside that one category and you have a comparison rather than two descriptions.`
      }
    ]
  }
};
