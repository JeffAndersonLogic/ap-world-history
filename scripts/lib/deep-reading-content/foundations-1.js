'use strict';

/**
 * Foundations 1, Geography Shapes Civilization: the deep reading.
 *
 * The First & 10 for this topic runs about 970 words and has to cover the end
 * of the Ice Age, domestication, four river valleys, the causal chain from
 * surplus to civilization, and pastoralism. Its third question asks a student to
 * evaluate the claim that "the switch from hunting and gathering to agriculture
 * was an improvement for everyone," which cannot be argued either way without
 * evidence the survey has no room to carry. That question is the reason this
 * chapter devotes a full section to what agriculture cost.
 *
 * Two things this chapter deliberately does that a survey cannot:
 *
 *   1. It names the independent origins of agriculture, at least seven of them
 *      on four continents. The single-origin-in-the-Fertile-Crescent story is
 *      both wrong and quietly Eurocentric, and the multiple-origins version is
 *      better history and a better argument.
 *   2. It complicates its own causal chain with Göbekli Tepe, where monumental
 *      construction appears before farming in the same region. A chapter that
 *      teaches a clean chain and never shows the evidence that troubles it is
 *      teaching students to trust textbooks rather than to read evidence.
 *
 * Estimates are hedged where the scholarship hedges. The forager working-hours
 * claim and the causal account of patriarchy are both live debates, and the
 * page says so rather than flattening them into fact.
 */

module.exports = {
  topicKey: 'f1',
  slug: 'foundations-1-geography',
  sourceFile: 'deep-reading-foundations-1-geography.html',
  lessonFile: 'foundations-1-geography.html',

  docTitle: 'BeHistorical | Deep Reading | Foundations 1: The Bargain',
  eyebrow: 'Foundations 1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The <em>Bargain</em>',
  deck: `For roughly three hundred thousand years, every human being on earth lived by finding food. Then, in a few thousand years, people in at least seven separate places independently started growing it instead. This chapter is about why that happened where it did, what it made possible, and what it cost, because the honest answer to "was farming an improvement?" is <em>for some people, enormously, and for most people, not at first.</em>`,
  meta: ['One chapter', 'Foundations 1', 'Read alongside the First & 10'],
  footerNote: 'Foundations 1 &nbsp;·&nbsp; The Bargain &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Your First & 10 asks you to reconstruct a chain of causes with at least three links, to write a contextualization sentence about a river valley, and to take a position on whether farming was an improvement for everyone. This chapter is built in that order, so the sections are the links. Read section 6 and section 7 together, because they are the two halves of that last argument and a paper that uses only one of them is only half a paper.`,
    steps: [
      `<b>Sections 1 to 2:</b> the world before farming, and what changed.`,
      `<b>Sections 3 to 4:</b> domestication, and why river valleys.`,
      `<b>Section 5:</b> the four river valleys, with what made each one different.`,
      `<b>Section 6:</b> what surplus bought, the causal chain to civilization.`,
      `<b>Section 7:</b> what surplus cost, the other half of the argument.`,
      `<b>Sections 8 to 9:</b> the people who never farmed, and why geography is a cause and not a destiny.`
    ]
  },

  empires: [
    {
      id: 'before',
      num: '01',
      accent: 'iron',
      name: 'Three Hundred Thousand Years of Not Farming',
      navLabel: 'Before farming',
      dates: 'c. 300,000 to c. 12,000 BCE &nbsp;·&nbsp; the long human normal',
      thesis: `Farming is not what humans normally do. It is a recent, local, and initially unattractive experiment, and you cannot explain why it happened without first understanding what it replaced.`,
      parts: [
        {
          heading: 'The baseline',
          blocks: [
            { p: `Anatomically modern humans have existed for roughly three hundred thousand years. Agriculture has existed for about twelve thousand. If you compressed the human story into a single day, farming would begin somewhere around eleven fifty at night. Everything this course studies, every empire, every trade network, every religion with a building, happens in those last few minutes. The <span class="kt">hunter-forager</span> way of life is not the prologue to human history. It is nearly all of it.` },
            { p: `Foraging bands were small, usually a few dozen people, and mobile, moving with the seasons to where food was. They ate an enormous variety: game, fish, shellfish, tubers, nuts, seeds, fruit, insects, birds' eggs. That variety is the key to understanding them. A group that eats sixty different things can absorb the failure of any one of them. A group that eats mostly wheat cannot.` },
            { p: `They were not helpless, and they were not simple. Foragers managed landscapes deliberately, burning brush to attract game, protecting useful plants, and moving on a schedule built from generations of accumulated knowledge about where things grew and when. They made tools, art, jewellery, boats and clothing, buried their dead with grave goods, and traded objects across hundreds of kilometers. Everything a person needed to know to survive was known by everyone in the band, which is a kind of security no farming society has ever had.` }
          ]
        },
        {
          heading: 'What we can and cannot say about how good it was',
          blocks: [
            { p: `You will read that foragers had abundant leisure and worked only twenty hours a week. That claim comes from a famous argument by the anthropologist Marshall Sahlins in the 1960s, built partly on studies of modern foraging peoples in the Kalahari, and it was a valuable corrective to the older assumption that pre-agricultural life was miserable. It has also been heavily criticized since: the working-hour counts left out food processing, tool maintenance and childcare, and modern foragers pushed onto marginal land are imperfect evidence for ancient foragers living in rich environments.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `The strongest evidence about forager wellbeing is not from anthropology but from bones. Skeletons show height, childhood nutritional stress, dental disease and healed injuries. That evidence is consistent and it is discussed in section 7. Use the skeletons in your argument and treat the twenty-hour week as a contested claim, or better, leave it out. <strong>An argument built on your weakest evidence is only as strong as that evidence.</strong>`
            } },
            { p: `What we can say confidently is narrower and still striking: foragers in reasonably rich environments were generally well nourished, taller than the farmers who followed them in the same regions, and less troubled by infectious disease. What they lacked was not comfort. It was numbers, storage and permanence.` }
          ]
        }
      ],
      useThis: {
        tool: `Foraging as the human baseline. <em>The point to make is not that foragers were happy, but that farming has to be explained rather than assumed. A chain of causes only counts as causation if the outcome was not inevitable, and for 300,000 years it did not happen.</em>`,
        limit: `Dietary breadth as security: a band eating sixty foods survives the failure of any one, which is exactly the resilience farming trades away.`,
        comparison: `Hold this section next to section 7. Foragers were taller and healthier than the first farmers in the same regions, which is the evidence that makes question 3 a real argument rather than a formality.`
      },
      terms: [
        ['Hunter-forager', 'A member of a society that obtains food by hunting, fishing and gathering wild plants rather than by farming or herding.'],
        ['Band', 'The small, mobile, usually kin-based group, typically a few dozen people, that was the normal human social unit before agriculture.'],
        ['Sedentism', 'Living permanently in one place. It sometimes came before farming rather than after it, which is why the two are worth naming separately.']
      ]
    },

    {
      id: 'thaw',
      num: '02',
      accent: 'gold',
      name: 'The Thaw',
      navLabel: 'The thaw',
      dates: 'c. 12,900 to c. 9,600 BCE &nbsp;·&nbsp; the end of the last Ice Age',
      thesis: `The first link in the causal chain is climate. The Ice Age ended, the world warmed and steadied, and for the first time in human history the same plants grew in the same places reliably enough to be worth waiting for.`,
      parts: [
        {
          heading: 'A warmer, and crucially a steadier, world',
          blocks: [
            { p: `The last glacial period ended around eleven thousand seven hundred years ago, beginning the geological epoch we still live in, the Holocene. Sea levels rose, glaciers retreated, and the belt of land from the eastern Mediterranean through modern Syria, Turkey, Iraq and Iran, the region called the <span class="kt">Fertile Crescent</span>, became warm and wet enough to support dense stands of wild wheat and barley.` },
            { p: `Warmth matters less than <strong>stability</strong>. Ice Age climate swung violently, sometimes shifting dramatically within a human lifetime. Planting a seed is a bet that conditions ten months from now will resemble conditions today, and for most of human history that bet was bad. The Holocene made it good. This is the first link, and you should say it precisely in an essay: not "the weather got better" but <em>the climate became predictable enough that delayed return on labor became rational.</em>` },
            { p: `There was a false start worth knowing. Around 12,900 BCE a sharp cold snap called the Younger Dryas interrupted the warming for over a thousand years. Some archaeologists argue that people in the Fertile Crescent who had already begun settling near rich wild-grain stands were squeezed by that cold and responded by tending and eventually planting the grains they had been harvesting. On that reading, agriculture begins not in abundance but in a crisis of scarcity.` }
          ]
        },
        {
          heading: 'The complication that should be in your essay',
          blocks: [
            { note: {
              kind: 'misconception',
              label: 'The clean chain is too clean',
              html: `At <strong>Göbekli Tepe</strong> in southeastern Turkey, people erected rings of carved limestone pillars, some over five meters tall and weighing several tons, beginning around <strong>9500 BCE</strong>, which is <em>before</em> farming is established in that region. Building it required organizing and feeding a large workforce, and the people who did it appear to have been foragers. The standard chain says surplus comes first and monuments come later. Göbekli Tepe suggests the arrow can point the other way: that gathering people repeatedly in one place for ritual created the need to feed crowds, and that need encouraged cultivation. <strong>A student who mentions this is not undermining their own argument. They are demonstrating complexity, which is a scored skill.</strong>`
            } },
            { p: `Keep both in mind. Climate made farming possible. Whether hunger, ritual, population pressure or simple accumulated familiarity with wild grain made it actually happen is genuinely debated, and the honest phrasing is that climate opened a door that people walked through for reasons historians still argue about.` }
          ]
        }
      ],
      useThis: {
        tool: `Climatic stability, not just warmth. <em>The mechanism is that a predictable growing season makes delayed-return labor rational: planting only pays if you can forecast the harvest, and Ice Age climate could not be forecast.</em>`,
        limit: `The Younger Dryas as a scarcity trigger, and Göbekli Tepe as evidence that monument-building may have preceded rather than followed farming.`,
        comparison: `This is the first link for question 1. A three-link chain that starts here reads: stable climate makes planting rational, planting produces storable surplus, surplus frees people from food production.`
      },
      terms: [
        ['Holocene', 'The current geological epoch, beginning roughly 11,700 years ago with the end of the last glacial period.'],
        ['Fertile Crescent', 'The arc of relatively well-watered land through the modern eastern Mediterranean, Turkey, Iraq and Iran where wheat and barley were first domesticated.'],
        ['Göbekli Tepe', 'A monumental ritual site in southeastern Turkey begun around 9500 BCE, apparently built by foragers before agriculture in that region.']
      ]
    },

    {
      id: 'domestication',
      num: '03',
      accent: 'rust',
      name: 'Domestication Happened at Least Seven Times',
      navLabel: 'Domestication',
      dates: 'c. 10,000 to c. 3,000 BCE &nbsp;·&nbsp; four continents, independently',
      thesis: `Agriculture was not invented once and exported. It was invented separately, by unrelated people who never met, in at least seven regions. That fact is the single strongest piece of evidence that geography, not genius, is doing the explaining.`,
      parts: [
        {
          heading: 'What domestication actually is',
          blocks: [
            { p: `<span class="kt">Domestication</span> is not taming. It is a slow genetic change in a species produced by generations of human selection, deliberate or not. Wild wheat shatters when ripe, scattering its seed, which is excellent for the plant and infuriating for a harvester. The rare mutant plants that hold onto their seed are the ones a human harvester actually brings home, and therefore the ones whose seed gets replanted. Within centuries, the crop in the field is a plant that can no longer reproduce without people. Farmers did not decide to do this. They did it by harvesting.` },
            { p: `Animals changed the same way. Domesticated sheep, goats, cattle and pigs became smaller, less aggressive and more tolerant of crowding than their wild ancestors, because those were the animals that survived captivity and bred. The dog came first and came differently, associating with human camps thousands of years before farming.` }
          ]
        },
        {
          heading: 'The independent origins',
          blocks: [
            { p: `This is the part most surveys compress into a sentence, and it deserves better. Farming arose independently in, at minimum:` },
            { p: `<strong>Southwest Asia</strong>, the Fertile Crescent, from around 10,000 BCE: emmer and einkorn wheat, barley, lentils, peas, chickpeas, flax, then sheep and goats. <strong>China</strong>, from around 8,000 to 6,000 BCE, in two separate zones: rice in the warm, wet Yangzi valley and drought-tolerant millet in the colder Huang He valley to the north. <strong>New Guinea</strong>, by around 7,000 BCE: taro, banana and yam, with drainage ditches dug in the Kuk swamp. <strong>Mesoamerica</strong>, from roughly 7,000 BCE: maize, painstakingly bred from a scrawny grass called teosinte, plus beans and squash. <strong>The Andes</strong>: potato, quinoa, and the llama and alpaca. <strong>West Africa and the Sahel</strong>: sorghum, pearl millet, African rice and yams. <strong>Eastern North America</strong>: squash, sunflower and other local seed crops.` },
            { p: `Seven regions, four continents, no contact between most of them. People facing similar problems with different local species arrived at the same solution, and what differed was not their intelligence but the raw material in front of them.` },
            { note: {
              kind: 'howknow',
              label: 'The raw material was not equal, and it mattered for millennia',
              html: `Of the world's large mammals, very few can be domesticated: a species needs a manageable diet, fast growth, willingness to breed in captivity, a calm temperament and a herd structure with a dominance hierarchy a human can occupy. Eurasia had sheep, goats, cattle, pigs and eventually horses. <strong>The Americas had the llama and alpaca, and no large draft animal at all.</strong> No cattle means no plow and no animal-powered field agriculture; no horses means different warfare and transport. It also means far less exposure to animal-borne disease, which will matter enormously and catastrophically in Unit 4 when the two hemispheres meet. Hold onto this. It is one of the longest causal arcs in the entire course.`
            } },
            { note: {
              kind: 'misconception',
              label: 'Careful with this argument',
              html: `The reasoning above is associated with Jared Diamond's <em>Guns, Germs, and Steel</em>, and it is genuinely useful for explaining why farming and its consequences appeared at different times in different places. It is also criticized by many historians for sliding into <strong>geographic determinism</strong>, treating everything that followed as decided in advance by soil and species. Use it to explain <em>starting conditions</em>. Do not use it to explain who conquered whom three thousand years later. Section 9 is about exactly this line.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Domestication as unintentional selection. <em>The mechanism is that harvesting itself selects: the plants that hold their seed are the ones carried home and replanted, so the crop changes without anyone deciding to change it.</em>`,
        limit: `The absence of large domesticable mammals in the Americas, which foreclosed plow agriculture and animal-borne epidemic disease alike.`,
        comparison: `Seven independent origins is the evidence for a geographic explanation. If farming were about ingenuity, it would not keep appearing in unconnected places at similar stages of climate change.`
      },
      terms: [
        ['Domestication', 'The genetic modification of a plant or animal species over generations through human selection, until it depends on people to reproduce or thrive.'],
        ['Teosinte', 'The wild Mesoamerican grass, bearing tiny hard kernels, bred over thousands of years into maize.'],
        ['Neolithic Revolution', 'The transition from foraging to settled agriculture. "Revolution" is misleading: in most regions it took thousands of years.']
      ]
    },

    {
      id: 'rivers',
      num: '04',
      accent: 'gold',
      name: 'Why Rivers',
      navLabel: 'Why rivers',
      dates: 'c. 5,000 to c. 3,000 BCE &nbsp;·&nbsp; from villages to cities',
      thesis: `Farming began on hillsides and in forests. Cities began on floodplains, and the reason is a specific and teachable piece of physics: moving water carries dirt, and where it slows down it drops it.`,
      parts: [
        {
          heading: 'The mechanism, stated precisely',
          blocks: [
            { p: `A river running down from mountains carries suspended silt. When it floods across flat ground it slows, and slowing water cannot hold its load, so it deposits a layer of fine mineral-rich sediment called <span class="kt">alluvium</span> across the floodplain. Do that annually for a few thousand years and you have soil that is deep, soft enough to work with wooden tools, and <strong>refertilized for free every year</strong>.` },
            { p: `That last clause is the whole point, and it is what a strong contextualization sentence names. Ordinary farmland loses fertility as crops strip nutrients, which forces fallow years or manuring or eventually abandonment. A floodplain that renews itself annually can support continuous intensive farming in one place indefinitely, and <em>permanence in one place is the precondition for a city</em>.` },
            { p: `Rivers delivered three other things. Water for <span class="kt">irrigation</span>, which extends the growing area beyond the flood's reach and permits a second crop. Transport, since moving heavy goods by boat is vastly cheaper than by land and remained so until the railway. And, because irrigation canals must be dug, maintained and fairly allocated between upstream and downstream users, a permanent reason for people to organize, negotiate and eventually obey. Some historians have argued that large-scale irrigation directly produced centralized states. That strong version is now doubted, since many canal systems were managed locally, but the softer version holds: shared water creates shared problems, and shared problems create authority.` }
          ]
        },
        {
          heading: 'Predictable and unpredictable, and what it did to how people saw the world',
          blocks: [
            { p: `Not all floods behave alike, and the difference shows up in what these societies believed.` },
            { p: `The <strong>Nile</strong> floods annually, in summer, at a fairly reliable time and to a fairly reliable height, fed by monsoon rains far upstream in the Ethiopian highlands. Egyptians could plan around it, and even measure it, with graduated stone gauges called nilometers. The <strong>Tigris and Euphrates</strong> flood in spring, closer to harvest than to planting, with a violence and unpredictability that could destroy a year's work. The <strong>Huang He</strong>, carrying so much fine windblown <span class="kt">loess</span> soil that its bed rises until it bursts its banks, has killed people by the millions across recorded Chinese history and earned the name "China's Sorrow."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: read what they wrote',
              html: `The literature matches the hydrology. Mesopotamian writing is preoccupied with capricious gods, a world that can be swept away without warning, and a famous flood that destroys nearly everyone; the <em>Epic of Gilgamesh</em> ends with its hero failing to obtain immortality. Egyptian religious writing is comparatively confident, centred on cyclical renewal, an ordered cosmos called <em>ma'at</em>, and an afterlife worth preparing for in detail. <strong>This is a real historical argument you can make in an essay:</strong> geography shaped not only where people farmed but what they believed a universe was like.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Annual alluvial deposition. <em>The mechanism for your contextualization sentence: flooding water slows, drops silt, and refertilizes the floodplain every year, so the same fields can be farmed intensively and permanently, which is what allows a settlement to become a city instead of moving when the soil wears out.</em>`,
        limit: `Irrigation creates shared infrastructure, which creates disputes over allocation, which creates authority. Say it as a chain, not as "irrigation caused government."`,
        comparison: `Nile against Tigris-Euphrates on flood predictability, then push it into belief: confident cyclical Egyptian cosmology against anxious Mesopotamian cosmology. That is a comparison with a mechanism, which is what scores.`
      },
      terms: [
        ['Alluvium', 'Fine, fertile sediment deposited by a river when floodwater slows and drops its suspended load.'],
        ['Irrigation', 'Deliberately channelling water to fields, extending farmland beyond the natural flood and often allowing a second annual crop.'],
        ['Loess', 'Fine windblown soil, extremely fertile and easily worked, characteristic of the Huang He valley in northern China.']
      ]
    },

    {
      id: 'four',
      num: '05',
      accent: 'oxide',
      name: 'The Four River Valleys',
      navLabel: 'The four valleys',
      dates: 'c. 3,500 to c. 1,046 BCE &nbsp;·&nbsp; Mesopotamia, Egypt, the Indus, the Huang He',
      thesis: `Four floodplains, four different answers. Read them side by side and notice that similar geography did not produce identical societies, which is the evidence you will need in section 9.`,
      parts: [
        {
          heading: 'Mesopotamia: cities that never unified',
          blocks: [
            { p: `Sumer, in the southern floodplain of the Tigris and Euphrates, produced the world's earliest cities from around 3500 BCE. Uruk may have held tens of thousands of people. Crucially, Mesopotamia was a landscape of <strong>rival city-states</strong>, each with its own patron god, its own temple complex on a stepped platform called a ziggurat, and its own quarrels with the city upstream over water. Flat and open, with no natural barriers, it was also repeatedly conquered, which is part of why its political history is a sequence of empires rather than a single continuous state.` },
            { p: `Mesopotamia gives us the earliest known writing, <strong>cuneiform</strong>, wedge-shaped marks pressed into wet clay from around 3200 BCE. It also gives us the Code of Hammurabi, which you meet again in Foundations 3.` },
            { note: {
              kind: 'howknow',
              label: 'Writing was invented by accountants',
              html: `The earliest cuneiform tablets are not poems, prayers or laws. They are <strong>receipts</strong>: quantities of barley, numbers of sheep, lists of workers and their rations. Writing appears to have grown out of a system of small clay tokens used to track goods. This is the causal chain from section 6 caught in the act, in a single artifact: surplus has to be stored, stored surplus has to be counted, counting at scale requires a record, and the record becomes writing. <strong>Literature comes centuries later.</strong>`
            } }
          ]
        },
        {
          heading: 'Egypt: the gift of a predictable river',
          blocks: [
            { p: `Egypt is a ribbon of green a few kilometers wide running through desert, and that shape did most of the political work. Desert on both sides meant relative protection from invasion for long stretches; the river itself was the highway. A convenience of physics helped: the Nile flows north while the prevailing wind blows south, so boats could sail upstream and drift down. Egypt was therefore <strong>unified early</strong>, around 3100 BCE by tradition, and stayed a single state for most of three thousand years.` },
            { p: `Its ruler, the pharaoh, was not merely a king but a divine or semi-divine figure responsible for maintaining <em>ma'at</em>, cosmic order, of which the flood's return was the visible proof. The pyramids are what surplus plus centralized authority plus a confident theology of the afterlife looks like when you pour it into stone.` }
          ]
        },
        {
          heading: 'The Indus: the one that complicates the story',
          blocks: [
            { p: `The Indus valley civilization, at its height roughly 2600 to 1900 BCE, was the largest of the four by area, with major centres at Harappa and Mohenjo-Daro. It was also the most striking technically. Its cities were laid out on a <strong>grid</strong>, built with standardized fired bricks in consistent proportions across hundreds of kilometers, and equipped with covered drains, public wells and household bathing platforms, a level of sanitation not matched in many parts of the world until the nineteenth century.` },
            { note: {
              kind: 'misconception',
              label: 'Not every civilization built a palace',
              html: `Archaeologists have found no clearly identifiable royal palaces, no monumental royal tombs, and no unambiguous images of kings in the Indus cities. The standardization argues for real coordinating authority; the absence of royal display argues that it did not take the form of a glorified individual ruler. And the Indus script, though it survives on thousands of seals, <strong>remains undeciphered</strong>, so we cannot read what they said about themselves. Be careful writing that "civilization produces kings." The Indus is the counter-example, and knowing it is more impressive than the generalization.`
            } },
            { p: `The cities were largely abandoned after about 1900 BCE. Current explanations centre on environmental change, particularly the shifting or drying of river channels, rather than on a single dramatic invasion.` }
          ]
        },
        {
          heading: 'The Huang He: continuity written in bone',
          blocks: [
            { p: `Along the Yellow River, loess soil and millet supported dense settlement, and the Shang dynasty, from roughly 1600 to 1046 BCE, is the first Chinese state with abundant written evidence. That evidence is unusual: <strong>oracle bones</strong>, ox scapulae and turtle shells that diviners heated until they cracked, then inscribed with the question asked and sometimes the outcome. Kings asked about harvests, weather, war, childbirth and toothache.` },
            { p: `Two things follow that matter later. Shang writing is directly ancestral to the Chinese script still in use, which is the longest continuously used writing system in the world. And the practice of a ruler consulting the ancestors and heaven about whether his rule is going well is the seed of the idea you meet in Foundations 3 as the Mandate of Heaven.` }
          ]
        }
      ],
      useThis: {
        tool: `Pick one valley and name a specific feature. <em>Nile predictability and desert protection producing early unification and a confident cosmology; Tigris-Euphrates violence and openness producing rival city-states and an anxious one; Indus flooding supporting grid cities with no visible kings; Huang He loess supporting the Shang and its oracle bones.</em>`,
        limit: `The Indus, for a civilization with monumental engineering and no identifiable monarch, and an undeciphered script that limits what we can claim at all.`,
        comparison: `Four similar geographies, four different political outcomes. That is your evidence for section 9 and against pure determinism.`
      },
      terms: [
        ['Cuneiform', 'The wedge-shaped Mesopotamian writing system, pressed into clay, whose earliest surviving examples are administrative records.'],
        ['Ziggurat', 'A stepped temple platform at the centre of a Mesopotamian city, dedicated to its patron deity.'],
        ['Ma’at', 'The Egyptian concept of cosmic order, truth and balance, which the pharaoh was responsible for maintaining.'],
        ['Oracle bones', 'Shang dynasty bones and shells inscribed with divination questions, carrying the earliest substantial Chinese writing.']
      ]
    },

    {
      id: 'surplus',
      num: '06',
      accent: 'gold',
      name: 'What Surplus Bought',
      navLabel: 'What surplus bought',
      dates: 'The causal chain &nbsp;·&nbsp; surplus to civilization',
      thesis: `A surplus is not wealth. It is permission. It is the number of people who can stop producing food without anyone starving, and every feature we call civilization is something those people did with their time.`,
      parts: [
        {
          heading: 'The chain, link by link',
          blocks: [
            { p: `Write this chain out for question 1 and make each arrow explicit.` },
            { p: `<strong>Surplus permits specialization.</strong> If a farming household feeds itself and a fraction of another household, then some fraction of the population need not farm. Those people become potters, weavers, metalworkers, builders, soldiers, priests and administrators. This is <span class="kt">job specialization</span>, and it is the hinge of the whole argument.` },
            { p: `<strong>Specialization permits cities.</strong> A settlement can only grow past the size its immediate fields support if food moves to it, and the non-farmers who cluster there make things and provide services worth the food. Cities are not just big villages; they are places where most residents do not grow their own food.` },
            { p: `<strong>Storage and exchange require records.</strong> Grain held in a temple granary belongs to someone, is owed to someone, and is issued as rations. Tracking that at scale needs a system, and that system becomes <strong>writing</strong>, as the earliest cuneiform tablets show directly.` },
            { p: `<strong>Coordination and defence require government.</strong> Canals must be dug and maintained, disputes settled, granaries guarded, and stored wealth is worth stealing, so it must be defended. Someone must have authority to compel work and settle claims, and that role hardens into offices, laws and a <span class="kt">state</span>.` },
            { p: `<strong>Unequal access to surplus produces social classes.</strong> Once wealth can be stored, it can be accumulated, inherited and concentrated. A forager cannot get rich, because nobody can carry that much. A farmer's family can, and over generations the distance between households becomes a permanent structure of rank.` },
            { p: `<strong>All of it gets explained by organized religion.</strong> Temples were among the largest landholders and grain-storage institutions in Mesopotamia, and the priesthood a specialized full-time class. Religion in these societies is not only belief; it is an institution that holds surplus, employs people, keeps records and explains why the ruler should be obeyed.` }
          ]
        },
        {
          heading: 'Say it as causation, not as a list',
          blocks: [
            { note: {
              kind: 'misconception',
              label: 'The most common way students lose this point',
              html: `Listing the features of civilization is description, not causation. "Civilizations had cities, writing, government and social classes" earns nothing. <strong>"Because the floodplain refertilized itself annually, one farmer could feed more than one household; because of that, some people could stop farming; because non-farmers had to be fed from stored grain, someone had to record who was owed what, and that record-keeping became writing"</strong> is causation. The words doing the work are <em>because</em> and <em>which meant that</em>. Use them.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Surplus as permission rather than wealth. <em>The mechanism is that surplus determines how many people can stop producing food, and every characteristic of civilization is something that freed population did with its time.</em>`,
        limit: `Temples as economic institutions, not only religious ones: they held land, stored grain, employed specialists and kept records.`,
        comparison: `Foragers could not accumulate because they had to carry everything they owned. Storable surplus is what makes inherited inequality physically possible.`
      },
      terms: [
        ['Agricultural surplus', 'Food produced beyond what the producers themselves consume, which is what allows part of a population to do something other than farm.'],
        ['Job specialization', 'The division of work into distinct full-time occupations, made possible by surplus.'],
        ['State', 'An organized political authority with the power to compel obedience and settle disputes across a territory.']
      ]
    },

    {
      id: 'cost',
      num: '07',
      accent: 'oxide',
      name: 'What Surplus Cost',
      navLabel: 'What it cost',
      dates: 'The other half of the argument',
      thesis: `For the first several thousand years, the average person's life got measurably worse. Any answer to "was farming an improvement for everyone?" that ignores this is not an argument, it is an assumption.`,
      parts: [
        {
          heading: 'The bodies',
          blocks: [
            { p: `Skeletal remains give us the most direct evidence we have, and across many regions the pattern in early farming populations compared with the foragers who preceded them in the same place is consistent: <strong>reduced adult height</strong>, in some regions by several centimetres or more; sharply increased <strong>dental cavities</strong>, because a diet built on starchy grain feeds the bacteria that rot teeth; more <strong>anemia</strong>, visible as a characteristic porous bone deformation; more markers of <strong>childhood nutritional stress</strong>, visible as growth-arrest lines; and more evidence of <strong>infectious disease</strong>.` },
            { p: `The reason is not mysterious. Foragers ate widely; early farmers ate mostly one or two staple crops. Calories went up and nutritional variety went down, and a diet heavy in a single grain is a diet short on much else.` }
          ]
        },
        {
          heading: 'The diseases',
          blocks: [
            { p: `Two changes made epidemic disease possible for the first time. People began living in dense permanent settlements, alongside their own accumulated waste, which is exactly the environment in which a pathogen can pass efficiently from host to host. And they began living pressed against animals. Measles, smallpox, influenza and tuberculosis all have origins in or close relatives among the diseases of domesticated herd animals.` },
            { p: `A foraging band of forty people is too small to sustain a disease that either kills or immunizes its hosts; the pathogen runs out of victims. A city of twenty thousand, continuously fed with newborns, is not. <strong>Epidemic disease is a consequence of the agricultural package</strong>, and it is why Eurasian populations later carried immunities that populations in the Americas, who domesticated almost no herd animals, did not.` }
          ]
        },
        {
          heading: 'The hierarchy, and who ended up at the bottom',
          blocks: [
            { p: `Storable, heritable wealth is the physical precondition of permanent inequality, and permanent inequality arrived with it. Farming societies developed ranked classes, and eventually slavery, in a way that mobile foraging bands generally did not.` },
            { p: `Historians also connect agriculture to the entrenchment of <span class="kt">patriarchy</span>, and the argument is worth stating carefully because it is a causal claim rather than an observation. In foraging societies, gathered plant food, typically much of it obtained by women, was a large and visible share of the diet, and portable property was minimal. Settled farming changed both. Heritable land and livestock made <em>whose children inherit</em> a question with material stakes, which brought women's reproduction under tighter social control. Field agriculture, especially after the introduction of the ox-drawn plow, favoured sustained upper-body strength and shifted the most valued labor toward men, while pregnancy and nursing were harder to combine with it than with gathering. And permanent settlement enabled shorter birth intervals and larger families, since a mother no longer had to carry every child.` },
            { note: {
              kind: 'howknow',
              label: 'How confident should you be?',
              html: `The pattern is well attested; the causal explanation is debated, and the plow argument in particular is associated with the economist Ester Boserup and has been both supported and criticized since. The strong version, that agriculture simply caused patriarchy everywhere, is too clean. The defensible version, and the one to write, is that <strong>the shift to settled agriculture created heritable property and reorganized labor in ways that made male-dominated inheritance and authority far more likely to become permanent.</strong> Hedged claims are not weak claims. They are accurate ones, and accuracy is scored.`
            } }
          ]
        },
        {
          heading: 'So why did anyone keep doing it?',
          blocks: [
            { p: `Because farming wins on the only measure that decides which way of life spreads: <strong>numbers</strong>. A given area of farmland supports far more people than the same area of wild landscape, perhaps by a factor of ten or more. Farming populations grew, expanded and displaced foraging ones, and once a population is large and settled it cannot go back, because the land can no longer feed that many people by foraging.` },
            { p: `That is the bargain in the chapter's title, and it is the sharpest answer available to question 3. Agriculture was not an improvement for the average individual body for a very long time. It was an overwhelming advantage for the <em>society</em> that adopted it, and for the minority who controlled its surplus. A strong essay separates those three levels, the individual, the society and the elite, and refuses to answer for all of them at once.` }
          ]
        }
      ],
      useThis: {
        tool: `The trade of individual wellbeing for collective scale. <em>The mechanism is that farmland supports roughly ten times the population of the same area of wild land, so farming societies out-multiplied and displaced foraging ones even while the average farmer was shorter, sicker and worked more.</em>`,
        limit: `Skeletal evidence of reduced height, dental caries and anemia; zoonotic epidemic disease; heritable property producing permanent class and gender hierarchy.`,
        comparison: `Set the individual against the society. This is the answer to question 3, and taking a clear position while distinguishing those levels is exactly what "complicate the claim" means.`
      },
      terms: [
        ['Zoonotic disease', 'A disease that originates in animals and transfers to humans, made far more likely by living closely with domesticated herds.'],
        ['Patriarchy', 'A social system in which authority, inheritance and public power are held primarily by men.'],
        ['Social stratification', 'The division of a society into ranked layers with unequal access to wealth, power and status.']
      ]
    },

    {
      id: 'pastoralists',
      num: '08',
      accent: 'iron',
      name: 'The People Who Did Not Farm',
      navLabel: 'Pastoralists',
      dates: 'c. 3,500 BCE onward &nbsp;·&nbsp; the grasslands',
      thesis: `Pastoralism is not a stage on the way to farming that some people failed to complete. It is a different and highly successful answer to land that farming cannot use, and the people who chose it repeatedly decided the fate of the people who farmed.`,
      parts: [
        {
          heading: 'A third way of living',
          blocks: [
            { p: `Across the enormous belt of grassland running from Eastern Europe through Central Asia to Mongolia, and across the Arabian and Saharan margins, rainfall is too low and unreliable for dependable cropping. Grass grows there, and grass is inedible to humans but excellent for sheep, goats, cattle, camels and horses. <span class="kt">Pastoralists</span> converted grass into food by moving herds between seasonal pastures.` },
            { p: `The consequences are worth listing, because they shape the rest of this course. Pastoralists were <strong>mobile</strong>, which meant they could not accumulate much and could not easily be taxed, conquered or found. Their society was organized around kin groups and personal loyalty to a capable leader rather than around a bureaucracy. And after the domestication of the horse, around 3500 BCE on the Eurasian steppe, and later the development of riding and the composite bow, they possessed the fastest and most formidable military technology in the world for roughly three thousand years.` }
          ]
        },
        {
          heading: 'Not separate, and not marginal',
          blocks: [
            { p: `Pastoralists and farmers were locked together. Herders needed grain, textiles, metal and manufactured goods; farmers wanted horses, hides, wool and animal products. They traded constantly, and they raided each other when trade broke down or when a strong leader could organize a large force. Steppe peoples also carried goods, technologies, languages and religions across distances no settled state could span, which is why they reappear in Foundations 4 as the operators of the Silk Roads.` },
            { note: {
              kind: 'misconception',
              label: 'A framing to drop before you write about them',
              html: `Settled societies wrote most of the sources, and they described their pastoral neighbours as barbarians. Historians no longer do, and neither should you. Pastoralism is an <strong>adaptation to a specific environment</strong>, not a failure to progress. Keep this in mind for Unit 2: the Mongols, who assembled the largest contiguous land empire in history, were pastoralists, and their advantages, mobility, cavalry and the ability to knit distant regions together, are exactly the ones described here.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Pastoralism as conversion of unusable land. <em>The mechanism is that grass is inedible to humans but not to herd animals, so herding extracts food from terrain that cannot support crops, at the cost of the permanence farming provides.</em>`,
        limit: `Mobility as both strength and constraint: hard to tax or conquer, but unable to accumulate, store or build.`,
        comparison: `Farmers against pastoralists on the same variable, mobility. Settled societies bought permanence, storage and the state, and paid in vulnerability to anyone faster.`
      },
      terms: [
        ['Pastoralism', 'A way of life based on herding domesticated animals, usually involving seasonal movement between pastures.'],
        ['Steppe', 'The vast semi-arid grassland belt stretching across Eurasia, too dry for reliable farming and ideal for herding.'],
        ['Nomadic', 'Moving regularly between locations, typically on a seasonal cycle, rather than settling permanently.']
      ]
    },

    {
      id: 'destiny',
      num: '09',
      accent: 'rust',
      name: 'Cause, Not Destiny',
      navLabel: 'Cause, not destiny',
      dates: 'The argument to leave with',
      thesis: `Geography explains where things could happen and what was difficult. It does not explain everything that did happen, and the difference between those two claims is the difference between a historian and a map.`,
      parts: [
        {
          heading: 'The line to hold',
          blocks: [
            { p: `Everything in this chapter is a claim about <strong>constraint and opportunity</strong>. Alluvial floodplains made dense permanent settlement possible. The absence of large domesticable mammals made plow agriculture impossible in the Americas. Grassland made herding sensible where cropping was not. Those are real causes, and naming one precisely is what a contextualization sentence does.` },
            { p: `But four broadly similar floodplains produced a fragmented landscape of warring city-states in Mesopotamia, a unified divine monarchy in Egypt, gridded cities with no visible kings in the Indus, and an ancestor-consulting dynastic state on the Huang He. Same category of geography, four different outcomes. Whatever explains that difference, it is not the silt.` },
            { note: {
              kind: 'misconception',
              label: 'The determinism trap, and how to step around it',
              html: `<strong>Geographic determinism</strong> is the claim that physical environment decides historical outcomes. It is tempting because it is tidy, and historians reject it in that strong form, partly because it has a long history of being used to argue that some peoples were destined to rule others. The move that keeps you safe is a single word: geography made certain developments <em>more likely</em>, <em>possible</em>, or <em>difficult</em>. It did not make them <em>inevitable</em>. Write "the Nile's predictability made early unification possible," not "the Nile made Egypt unify."`
            } },
            { p: `Hold onto this for the rest of the course. Foundations 2 will show belief systems crossing every geographic boundary this chapter drew. Foundations 3 will show four states in comparable circumstances organizing power in incompatible ways. Foundations 4 will show human beings building trade routes straight across the deserts and oceans that were supposed to separate them. Geography sets the board. People play the game.` }
          ]
        }
      ],
      useThis: {
        tool: `The hedged causal claim. <em>Write "made possible," "made more likely," or "made difficult." Those three phrases are the difference between an argument a reader accepts and one they can dismiss with a single counter-example.</em>`,
        limit: `Four similar floodplains, four different political outcomes. Keep that sentence: it is the counter-example that proves geography is not destiny.`,
        comparison: `This is the contextualization payoff. Name the geographic condition, connect it to the development, and hedge the verb.`
      },
      terms: [
        ['Contextualization', 'Situating a development within the broader circumstances that made it possible, and explaining the connection rather than merely mentioning it.'],
        ['Geographic determinism', 'The rejected strong claim that physical environment decides historical outcomes rather than shaping their likelihood.'],
        ['Civilization', 'A large, complex society with cities, specialized labor, a state, social classes and usually writing. A descriptive category, not a compliment.']
      ]
    }
  ],

  closing: {
    navLabel: 'Building your answer',
    heading: 'Building an Answer That Scores',
    intro: `Your three reading questions ask for three different moves. Below is what each one is actually testing and where in this chapter the evidence lives. Lift the structure and supply the detail yourself.`,
    pairs: [
      {
        category: 'Question 1: Causation',
        title: 'Reconstruct the chain',
        body: `At least three links, with each arrow explained. The strongest version runs: the Holocene made climate predictable enough that planting became rational (section 2), which produced storable surplus on self-refertilizing floodplains (sections 4 and 6), which meant some people could stop farming and become specialists (section 6), which meant stored grain had to be tracked and that record-keeping became writing (section 5). Name the mechanism at every arrow. "And then" is not causation; "because, which meant that" is.`
      },
      {
        category: 'Question 2: Contextualization',
        title: 'Name the feature, then explain it',
        body: `Pick one valley and one specific physical feature, not "good soil." Annual alluvial deposition on the Nile floodplain, loess in the Huang He valley, the predictability of the Nile flood against the violence of the Tigris. Then explain the connection: because the flood refertilized the fields every year, the same land could be farmed permanently, which is what let a settlement grow into a city instead of moving when the soil failed.`
      },
      {
        category: 'Question 3: Argumentation',
        title: 'Take a position, then complicate it',
        body: `"Improvement for everyone" is the weak point of the claim, so attack it there. Section 7 gives you the skeletal evidence, epidemic disease, and heritable inequality; section 6 gives you what farming genuinely produced. The strongest answer distinguishes three levels: agriculture was bad for the average individual body for millennia, decisive for the society that adopted it, and extremely good for the elite who controlled the surplus. Then commit to a position rather than trailing off into "both sides."`
      },
      {
        category: 'Across the whole unit',
        title: 'Where this chapter goes next',
        body: `Foundations 2 shows belief systems crossing the boundaries geography drew. Foundations 3 shows four states in comparable circumstances organizing power incompatibly, which is section 9's argument at a larger scale. Foundations 4 shows people trading straight across the deserts and oceans this chapter treated as barriers. Foundations 5 asks you to use all four themes at once on the world of c.1200.`
      }
    ]
  }
};
