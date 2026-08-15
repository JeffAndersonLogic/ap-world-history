'use strict';

/**
 * Topic 4.3, The Columbian Exchange: the deep reading.
 *
 * Why this exists. The success criteria ask for two crops each way with
 * long-term consequences, the concept of a virgin soil epidemic with an
 * explanation of why Indigenous populations lacked immunity, and the connection
 * from demographic collapse to the Atlantic slave trade. The middle one is the
 * hardest: "they had no immunity" is a sentence students write without knowing
 * why it was true, and without it the whole topic reads like fate rather than
 * history.
 *
 * So section 01 does the biology properly, and does it in a way that forecloses
 * the racial reading the older textbooks invited. The answer is domesticated
 * herd animals and long isolation, not anything about the people.
 *
 * Three things carried deliberately:
 *
 *   1. The numbers are contested and the range is enormous. A student who
 *      writes "90% died" without knowing that pre-contact population estimates
 *      run from roughly 40 to 60 million and higher, and that the figure is a
 *      reconstruction rather than a count, is repeating a number rather than
 *      using evidence.
 *   2. Indigenous peoples adopted and transformed what arrived. The Plains
 *      horse cultures and Diné sheep herding are the exchange running through
 *      Indigenous agency rather than over it, and leaving them out makes the
 *      chapter a story about things happening to people.
 *   3. The chain from depopulation to the Atlantic slave trade is the one the
 *      criteria name, and it needs its middle links: the plantation model came
 *      from the Mediterranean and Atlantic islands, as Topic 2.5 sets out, so
 *      what the Americas supplied was land and a labor vacuum, not the idea.
 */

module.exports = {
  topicKey: 't4-3',
  slug: 'topic-4-3-columbian-exchange',
  sourceFile: 'deep-reading-topic-4-3-columbian-exchange.html',
  lessonFile: 'lesson-4-3-columbian-exchange.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.3: The Exchange Nobody Negotiated',
  eyebrow: 'Topic 4.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Exchange Nobody <em>Negotiated</em>',
  deck: `Two biological worlds that had been separate for thousands of years were joined in a generation, and the joining was not a trade agreement. This chapter does the biology of why the disaster fell where it did, the honest version of the numbers, what crossed in each direction, and the chain that runs from an empty labor market to the largest forced migration in history.`,
  meta: ['Five sections', 'Biology, numbers, crops, consequences', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.3 &nbsp;·&nbsp; The Exchange Nobody Negotiated &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the mechanism the success criteria most want and students most often assert without explaining. Sections 03 and 04 are the crops in each direction, and section 05 is the consequence chain the criteria ask you to connect. Section 02 is about how to handle numbers you cannot verify, which is a skill worth more than this topic.`,
    steps: [
      `<b>01 Why the disaster fell where it did:</b> herd animals, isolation, and what immunity actually is.`,
      `<b>02 The numbers:</b> what is known, what is estimated, and how to write it.`,
      `<b>03 What crossed westward:</b> wheat, sugar, cattle, horses, and an ecology remade.`,
      `<b>04 What crossed eastward:</b> maize, potatoes, cassava, and populations that grew because of them.`,
      `<b>05 The consequence chain:</b> from a labor vacuum to the Atlantic slave trade.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'biology',
      num: '01',
      accent: 'gold',
      name: 'Why the Disaster Fell Where It Did',
      navLabel: 'The biology',
      dates: 'c. 1492 to 1650 &nbsp;·&nbsp; Isolation, herds, and immunity',
      thesis: `The catastrophe was not caused by anything about the people it fell on. It was caused by which animals each hemisphere had domesticated, and by ten thousand years of separation, and stating it that way is both correct and the only version that survives scrutiny.`,
      parts: [
        {
          heading: 'Where crowd diseases come from',
          blocks: [
            { p: `Most of the great infectious killers of Afro-Eurasia began in animals and crossed to humans: smallpox, measles, influenza, tuberculosis and others have origins in or close relationships with the diseases of domesticated herds and the birds and rodents that live alongside stored grain. That crossing requires sustained close contact between large numbers of people and large numbers of animals, which is exactly what farming villages with cattle, pigs, sheep, goats, horses and chickens provide.` },
            { p: `It also requires population density. A disease that confers lifelong immunity on survivors burns out in a small community, because it runs out of people who can catch it. Only in a large, connected population can it become endemic, circulating permanently and infecting each new generation of children.` },
            { p: `Afro-Eurasia had both conditions for millennia, and the trade networks of Unit 2 stitched its populations together, which is why the Topic 2.6 chapter has a pandemic in it. The result is a population in which most adults had survived several of these diseases in childhood and carried immunity to them.` },
            { p: `The Americas had neither condition in the same measure. The domesticated animals were the llama and alpaca in the Andes, the guinea pig, the turkey and the dog, none of them living in the crowded, continuous proximity to humans that European livestock did. So although the Americas had their own diseases, they had not generated the same family of crowd infections, and the populations of the two hemispheres had been effectively separated since the peopling of the Americas.` }
          ]
        },
        {
          heading: 'What "no immunity" actually means',
          blocks: [
            { p: `A <span class="kt">virgin soil epidemic</span> is an outbreak in a population with no prior exposure to a pathogen. Immunity in this sense is acquired, not inherited: a European adult was resistant to smallpox because he had survived it as a child, not because of anything in his ancestry. In a population where nobody has had it, the disease infects everyone at once across every age group.` },
            { p: `That last clause is the part that turns an epidemic into a collapse, and it is the mechanism to write. When every adult is sick simultaneously, nobody plants, nobody harvests, nobody hauls water, nobody nurses the sick, and nobody leads. People die of hunger, thirst and neglect who would have survived the infection itself. Then the next disease arrives, into a population already weakened and disorganized, and after it the next: smallpox, then measles, then influenza, then typhus, in waves across decades.` },
            { p: `Add the conditions colonization created, forced labor, relocation, warfare, disrupted farming, and the mortality compounds. Disease is the largest single factor and it is not a natural disaster occurring alongside conquest; it moved along the routes conquest opened and struck populations that conquest was simultaneously stripping of food, labor and social order.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Never write that Indigenous Americans were biologically weaker or that Europeans were biologically stronger. Immunity here is acquired by surviving childhood infection, and the difference between the hemispheres is a fact about domesticated herd animals and about ten thousand years of separation, not about the people. Two checks confirm it: European populations were devastated in exactly the same way by a novel pathogen in the fourteenth century, which the Topic 2.6 chapter describes, and Europeans arriving in West Africa died in appalling numbers from malaria and yellow fever, diseases the local population had substantial resistance to. Novelty is the variable, and it cut in every direction.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The virgin soil mechanism. <em>The mechanism is that a pathogen entering a population with no prior exposure infects every age group at once, so the collapse is not only the death rate of the disease but the failure of everything simultaneously: nobody plants, harvests, hauls water, nurses or governs, and people die of hunger and neglect who would have survived the infection.</em>`,
        limit: `Disease was the largest factor and never the only one. Warfare, forced labor, relocation and the disruption of farming compounded it, and separating them cleanly is not possible in the sources.`,
        comparison: `Against the <em>Black Death</em> in Topic 2.6: the same mechanism, a novel pathogen reaching an unexposed population along new trade routes, at a mortality Europe survived and rebuilt from within a century. The difference in outcome is not the biology but that Europe faced one wave of one disease and was not simultaneously being conquered.`
      },
      terms: [
        ['Virgin soil epidemic', 'An outbreak in a population with no prior exposure, infecting all ages at once and disabling the society as well as the individuals.'],
        ['Zoonotic disease', 'An infection that crossed from animals to humans, the origin of most Afro-Eurasian crowd diseases and of the difference between the hemispheres.'],
        ['Acquired immunity', 'Resistance gained by surviving an infection, which is what European adults had and Indigenous Americans could not have had.'],
        ['Endemic disease', 'An infection circulating permanently in a population large enough to sustain it, infecting each new generation of children.'],
        ['Epidemic waves', 'The successive arrivals of different diseases across decades, each striking a population already weakened by the last.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'numbers',
      num: '02',
      accent: 'rust',
      name: 'The Numbers, Honestly',
      navLabel: 'The numbers',
      dates: 'Estimates &nbsp;·&nbsp; What is known and what is reconstructed',
      thesis: `This is the largest demographic catastrophe in recorded history and nobody counted it. Knowing how the figures are produced is what lets you use them without either overstating or minimizing.`,
      parts: [
        {
          heading: 'What the estimates are, and where they come from',
          blocks: [
            { p: `Estimates of the population of the Americas in <span class="num">1492</span> commonly fall in the range of forty to sixty million, with serious scholarly proposals both lower and higher. Estimates of the decline over the following century to century and a half commonly run from roughly half to as much as ninety percent in particular regions, with the Caribbean islands at the catastrophic end, central Mexico and the Andes enormously reduced, and the impact arriving later and unevenly in regions Europeans reached later.` },
            { p: `These are reconstructions, and the methods are worth knowing because they are what makes the figures usable. Spanish colonial administrations kept <b>tribute and tax records</b>, which count taxpayers over time and can be worked backward. Missionaries and officials produced <b>accounts and censuses</b> of the populations they administered. Archaeologists estimate <b>settlement size and density</b> from house counts and site extents. And environmental records, <b>pollen and charcoal in sediment cores</b>, show cultivated land reverting to forest, which is a physical trace of people no longer farming.` },
            { p: `Each method has a bias and they do not agree, which is why the range is wide and why any single confident number should be treated with suspicion.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the atmosphere may have recorded it',
              html: `One line of evidence is worth knowing for its strangeness. Antarctic ice cores show a small dip in atmospheric carbon dioxide around <span class="num">1610</span>. One published hypothesis attributes it to the Americas: if tens of millions of farmers died, tens of millions of hectares of cultivated land reverted to forest and scrub, and the regrowth drew down enough carbon to register globally. Other researchers dispute the size of the effect and point to other causes, so this is a live argument rather than a settled fact. Cite it the way the researchers do, as a proposed signal consistent with depopulation on that scale, and you are demonstrating exactly the handling of contested evidence this course rewards.`
            } }
          ]
        },
        {
          heading: 'How to write a contested number',
          blocks: [
            { p: `Three habits, and they transfer to every disputed figure you will meet. <b>Give a range, not a point.</b> "Estimates of the pre-contact population range from about forty to sixty million and higher" is more accurate and reads as more expert than "there were fifty-four million people." <b>Say what kind of number it is.</b> A reconstruction from tribute records is a different sort of claim from a census. <b>Attach it to something observable.</b> "Tribute rolls in central Mexico record a fall of roughly ninety percent in tributaries across the sixteenth century" is checkable in a way that a hemispheric percentage is not.` },
            { p: `And do not let the uncertainty do work it should not. The range is wide, the mechanism is not in doubt, and the lowest credible estimates still describe a catastrophe with few parallels in human history. Precision about what is uncertain is not the same as doubt about what happened.` }
          ]
        }
      ],
      useThis: {
        tool: `Reconstruction from administrative records. <em>The mechanism is that a colonial state counting taxpayers leaves a series that can be worked backward into a population, so tribute rolls kept for revenue become demographic evidence, which is why our best regional figures come from the places Spain taxed most systematically rather than the places worst affected.</em>`,
        limit: `Every method carries a bias, the estimates disagree, and no contemporary counted the whole. Give the range and name the source of your figure.`,
        comparison: `Against the <em>Black Death</em> in Topic 2.6, where manorial rolls, tax registers and clergy replacements converge on a third to a half: both catastrophes are known through records kept for other purposes, and in both cases the convergence of independent bureaucratic sources is what makes an estimate usable.`
      },
      terms: [
        ['Demographic reconstruction', 'Estimating a past population from indirect evidence such as tribute records, settlement archaeology or environmental traces.'],
        ['Tribute roll', 'A colonial list of taxpayers, kept for revenue and now the strongest single source for regional population decline.'],
        ['Pollen core', 'A dated sediment column whose preserved pollen shows cultivated land reverting to forest, a physical trace of depopulation.'],
        ['Range', 'The span between credible estimates, which is the honest form for a contested figure and reads as more expert than a single number.'],
        ['Orbis hypothesis', 'The proposal that a dip in atmospheric carbon dioxide around 1610 records forest regrowth on farmland abandoned after the collapse; contested.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'westward',
      num: '03',
      accent: 'iron',
      name: 'What Crossed Westward',
      navLabel: 'Westward',
      dates: 'c. 1493 to 1750 &nbsp;·&nbsp; Wheat, cattle, horses, sugar',
      thesis: `The animals mattered more than the plants, and they mattered in two opposite ways: as an ecological invasion that remade landscapes, and as a technology that Indigenous nations took and used on their own terms.`,
      parts: [
        {
          heading: 'The ecological invasion',
          blocks: [
            { p: `Europeans brought wheat, barley, grapes, olives and sugarcane, the crops of the diet they intended to keep eating, and they brought cattle, pigs, sheep, goats, horses and chickens. On his second voyage in <span class="num">1493</span> Columbus carried livestock deliberately, and this is the moment the biological invasion begins in earnest.` },
            { p: `Herd animals with no natural predators, on grasslands that had never been grazed by anything like them, multiplied at extraordinary rates. Feral pigs and cattle spread across the Caribbean islands and then the mainland faster than the Europeans themselves, destroying Indigenous crops, which were grown without fences because there had been nothing to fence out. That is the mechanism worth having: an agricultural system designed for a world without large herd animals has no defense against them, so livestock did not merely accompany colonization, they undermined the food supply of the people being colonized.` },
            { p: `European weeds and grasses traveled in fodder, ballast and dung and displaced native plants on grazed ground. The compound effect, disease plus livestock plus new plants, is what historians call ecological imperialism: the colonizers arrived with a biological package that altered the environment in their favor before, and often faster than, their armies did.` }
          ]
        },
        {
          heading: 'Sugar, and the model that came with it',
          blocks: [
            { p: `Sugarcane crossed on the second voyage too, and it is the plant with the most consequences in this chapter. The Topic 2.5 chapter establishes the crucial point: the plantation package, monoculture, a mill and boiling house that must process cane within hours of cutting, merchant capital, and coerced labor, was developed in the medieval Mediterranean and refined on the Atlantic islands, Madeira and above all Sao Tome, where sugar was worked by enslaved Africans before Columbus sailed.` },
            { p: `So the Americas did not invent this system; they received it, at a scale the islands could never support. Brazil became the first great American sugar economy in the sixteenth century, and the Caribbean followed in the seventeenth. What the Americas supplied was land in quantities nobody in the Old World could imagine, and, after section 01, a labor market with a hole in it. Section 05 is what filled the hole.` }
          ]
        },
        {
          heading: 'What Indigenous peoples did with what arrived',
          blocks: [
            { p: `This section would be dishonest if it stopped at things happening to people. Horses escaped, were traded and were taken, and by the eighteenth century nations of the North American plains had built entirely new ways of life around them. Mounted hunters could take bison at a scale that transformed diet, wealth and mobility; the Comanche built a formidable power on horsemanship; and the equestrian Plains culture that outsiders would later treat as timeless and traditional is in fact a post-contact creation, made by Indigenous people out of an introduced animal, in under two centuries.` },
            { p: `Sheep are a second case. Among the Dine, sheep herding and the weaving economy built on their wool became central to subsistence and to cultural life. Neither of these is a story of passive reception; both are adoption and transformation, which is what people do with new technology when they have any room to act at all.` },
            { p: `Naming one of these in an essay does real work. It shows you can hold catastrophe and agency in the same account, which is the difference between describing Indigenous peoples as objects of history and as participants in it.` }
          ]
        }
      ],
      useThis: {
        tool: `Livestock as an ecological weapon, unintended. <em>The mechanism is that herd animals released into grasslands with no comparable grazers and no predators multiply explosively, and Indigenous fields grown without fences, because nothing needed fencing out, are destroyed by them, so the food supply of the colonized collapses alongside their population without anyone ordering it.</em>`,
        limit: `The same animals became the foundation of new Indigenous economies and cultures, from Plains horse nations to Dine sheep herding, which is why "ecological imperialism" describes the process and not the whole outcome.`,
        comparison: `Against <em>Topic 2.5's</em> account of sugar reaching the Mediterranean: the plantation package was assembled in Cyprus, Sicily, Madeira and Sao Tome before it crossed, so the Americas supplied land and a labor vacuum rather than the idea, and that distinction is what makes the chain in section 05 traceable.`
      },
      terms: [
        ['Ecological imperialism', 'The transformation of an environment by introduced organisms in ways that favored the colonizers, alongside and often ahead of conquest.'],
        ['Feral livestock', 'Escaped cattle and pigs multiplying without predators, which destroyed unfenced Indigenous fields and spread ahead of settlement.'],
        ['Sao Tome', 'The Atlantic island where sugar plantations worked by enslaved Africans were established before 1492, the direct model for Brazil and the Caribbean.'],
        ['Plains horse cultures', 'The equestrian societies built by Indigenous nations after horses arrived, a post-contact creation rather than an ancient tradition.'],
        ['Monoculture', 'Committing land to a single export crop, which raises income and makes a region dependent on trade for its food.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'eastward',
      num: '04',
      accent: 'oxide',
      name: 'What Crossed Eastward',
      navLabel: 'Eastward',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Maize, potatoes, cassava',
      thesis: `American crops fed the population growth of the rest of the world, and the reason is not that they were tastier: they produce more calories per acre, and they grow where the old staples could not.`,
      parts: [
        {
          heading: 'The mechanism, and then the cases',
          blocks: [
            { p: `Two properties do the work. American staples yield heavily: a field of potatoes produces far more food energy than the same field of wheat or rye. And they tolerate land that existing staples reject, dry hillsides, thin acidic soils, short seasons, so they do not merely replace a crop, they extend cultivation onto ground that was not farmed at all. A society that can feed itself from land it previously ignored can support more people without conquering anyone.` },
            { p: `<b>Europe.</b> The <span class="kt">potato</span> spread slowly and then decisively across northern Europe, where it produced more calories per acre than grain on cool, damp ground and could be left in the earth when armies passed through. Its contribution to European population growth from the eighteenth century onward is substantial. Its risk is equally instructive: a region that becomes dependent on one high-yielding crop is exposed to that crop's failure, and the Irish famine of the <span class="num">1840</span>s, beyond this period, is the case everyone should keep in view when writing about the benefits of the exchange.` },
            { p: `<b>China.</b> <span class="kt">Maize</span> and the sweet potato reached China in the sixteenth century and were taken up on exactly the terrain the mechanism predicts: dry hills and uplands that rice paddies could not use. The Qing population roughly doubled across the eighteenth century, and while the causes are several, secure grain supplies, internal peace and administrative capacity among them, the ability to farm marginal land is one of them. This is the link between Topic 4.3 and Topic 3.2 that almost nobody makes.` },
            { p: `<b>Africa.</b> Maize and <span class="kt">cassava</span> spread widely and became staples, cassava especially because it grows in poor soil, tolerates drought and can be left in the ground until needed. Both raised the caloric base of the regions that adopted them. And both were used to provision slave ships, which is a connection to state plainly rather than to soften: the same crops that supported population growth in West and Central Africa were feeding the vessels carrying its people across the Atlantic.` },
            { p: `<b>Everywhere.</b> Tomatoes, chilies, cacao, vanilla, peanuts, squash and tobacco crossed and reshaped cuisines and habits: chilies became fundamental to the cooking of India, Sichuan, Korea and Hungary within a couple of centuries, which is worth remembering the next time a "traditional" cuisine is described as unchanging.` }
          ]
        },
        {
          heading: 'The asymmetry worth naming',
          blocks: [
            { p: `Set the two directions beside each other and the asymmetry is stark. Eastward went crops that fed population growth across Europe, Asia and Africa. Westward went crops, livestock and diseases, and the diseases killed most of the population that received them.` },
            { p: `The exchange was not a trade between partners; it was a transfer between hemispheres in which one side's population grew on the other side's plants while the other side's population collapsed from the first side's pathogens. When a prompt asks you to assess the consequences of the Columbian Exchange, that sentence is the assessment, and everything else is evidence for it.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the crops leave a paper trail and a genetic one',
              html: `Crop diffusion in this period can be tracked several ways at once, which is why it is unusually well established. Herbals and agricultural manuals record new plants arriving, sometimes with confusion about where they came from, since maize was called Turkish wheat in parts of Europe and the potato was long treated with suspicion. Tax and market records show what was being grown and sold. Genetics adds the clincher: the varieties grown in Africa, Asia and Europe descend from American populations, and their relationships can be traced. Three independent kinds of evidence pointing the same way is a much stronger claim than any single source.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Yield plus marginal land. <em>The mechanism is that American staples produce more calories per acre and tolerate ground the old staples reject, dry hills, thin soils, short seasons, so they extend cultivation onto land that was not farmed at all rather than merely replacing a crop, which is why they support population growth rather than simply changing diets.</em>`,
        limit: `Dependence on one high-yielding crop transfers the risk of its failure to a whole population, which is the Irish case in the next century and the standing warning attached to this section.`,
        comparison: `Against <em>Champa rice</em> in Topic 1.1: a fast-ripening strain that doubled the harvest and roughly doubled China's population five centuries earlier. Same mechanism, different plant, and putting the two together is a strong continuity argument about how agricultural change drives demography.`
      },
      terms: [
        ['Potato', 'The Andean staple that yields heavily on cool, damp northern ground and underwrote European population growth from the eighteenth century.'],
        ['Maize', 'The American grain adopted across Africa, Europe and Asia, valuable for yield and for growing where other staples fail.'],
        ['Cassava', 'The American root crop that tolerates poor soil and drought and can be stored in the ground, which made it a staple across much of Africa.'],
        ['Calories per acre', 'The measure that explains why these crops mattered: more food from the same land supports more people.'],
        ['Marginal land', 'Ground too dry, thin or steep for existing staples, which American crops brought into cultivation for the first time.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'chain',
      num: '05',
      accent: 'gold',
      name: 'The Consequence Chain',
      navLabel: 'The chain',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; From a labor vacuum to the Middle Passage',
      thesis: `The success criteria ask you to connect demographic collapse to the Atlantic slave trade. The connection is real and it is not automatic, and writing the middle links is what makes it an argument rather than an assertion.`,
      parts: [
        {
          heading: 'The links, in order',
          blocks: [
            { p: `<b>1. The colonizers wanted export commodities.</b> Silver from Potosi and Zacatecas, and sugar in Brazil and the Caribbean. Both are extraordinarily labor-intensive: silver requires men underground and at the refining works, and sugar requires a large workforce that must cut and mill the cane within hours.` },
            { p: `<b>2. The first labor system was Indigenous.</b> Spain's <span class="kt">encomienda</span> granted a colonist the right to demand labor and tribute from a specified Indigenous community, and in the Andes the crown adapted the Inca mit'a described in the Topic 1.4 chapter into a rotational draft that sent villagers to the mines at Potosi. Both are coerced labor systems built on Indigenous populations.` },
            { p: `<b>3. That labor force collapsed.</b> Sections 01 and 02. In the Caribbean it was destroyed almost entirely within decades; in Mexico and Peru it fell enormously and kept falling as new epidemics arrived.` },
            { p: `<b>4. The alternatives failed or were rejected.</b> European indentured servants were used, particularly in the early English Caribbean, and they were expensive, served fixed terms, had legal standing as subjects with claims their governments might hear, and died at appalling rates in tropical disease environments.` },
            { p: `<b>5. Enslaved Africans were chosen, and the reasons were practical and legal rather than accidental.</b> An existing trade in enslaved people ran along the West African coast, described in the Topic 4.2 chapter, with Portuguese buyers already established. The plantation model using enslaved African labor was already working on Madeira and Sao Tome. Enslavement was permanent and heritable, so the labor force reproduced itself and no term ever expired. Enslaved Africans were far from any community that could intervene for them. And, in the specific epidemiological conditions of the tropical Atlantic, West and Central Africans had resistance to malaria and yellow fever that Europeans and Indigenous Americans lacked, so they survived where other workers died, which colonists observed and acted on.` },
            { p: `<b>6. The scale.</b> The trade grew across the sixteenth and seventeenth centuries and peaked in the eighteenth. Modern reconstructions from shipping records put the number of Africans embarked across the whole Atlantic trade at somewhere around twelve million, with roughly ten and a half million surviving the crossing, the difference being deaths on the Middle Passage.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Africans were enslaved because they were immune to disease, as though epidemiology explains slavery. It does not. Disease resistance is one factor among several and it explains why enslaved Africans survived in plantation zones better than the alternatives did, not why anyone was enslaved. The decisive factors are that a supply chain already existed, that the plantation model using enslaved African labor was already operating on the Atlantic islands, that enslavement was permanent and heritable in a way indenture was not, and that the enslaved had no state to appeal to. Racial ideology then developed to justify the arrangement, which is the subject of Topic 4.7, and it followed the practice rather than preceding it.`
            } }
          ]
        },
        {
          heading: 'What the chain is good for',
          blocks: [
            { p: `Written this way, the chain answers the criteria and also demonstrates the analytical habit this course is trying to build. Each link is a step someone took for a reason you can name, which means the outcome was contingent rather than fated. Nothing about the biology of section 01 required the Atlantic slave trade; a labor vacuum plus a demand for export commodities plus an available and legally defenseless labor supply produced it, and each of those three could have been otherwise.` },
            { p: `That matters for how you write about it. "Disease killed the Indigenous population so Africans were enslaved" compresses six decisions into a natural process and removes everyone who made them. Naming the links puts the decisions back.` }
          ]
        }
      ],
      useThis: {
        tool: `The heritability of enslavement. <em>The mechanism is that a labor force whose status is permanent and passes to its children never expires and never has to be re-recruited, unlike indenture with fixed terms or a rotational draft on a village, so once plantation agriculture had capital committed to it, hereditary slavery was the arrangement that matched the investment.</em>`,
        limit: `Every link in this chain was a choice with alternatives, and writing it as an inevitability erases the people who chose. Say who benefited at each step.`,
        comparison: `Against the <em>mit'a</em> in Topic 1.4: the Inca levied rotating labor on communities and fed the workers from state stores, and the Spanish kept the name and the rotation while removing the reciprocity, sending villagers to Potosi's mines. The same institution repurposed is one of the sharpest continuity-and-change arguments available in this unit.`
      },
      terms: [
        ['Encomienda', 'The Spanish grant of a right to Indigenous labor and tribute from a specified community, the first colonial labor system in the Americas.'],
        ['Mit\'a', 'The Andean rotational labor obligation, adapted by the Spanish crown into a draft supplying the Potosi mines.'],
        ['Indentured servitude', 'Bound labor for a fixed term, used early in the English Caribbean and abandoned as plantation agriculture expanded.'],
        ['Middle Passage', 'The Atlantic crossing of the slave trade, on which roughly one and a half million of about twelve million embarked Africans died.'],
        ['Chattel slavery', 'Enslavement as permanent, heritable property status, the arrangement that made a plantation labor force self-reproducing.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison or chain: the claim, the specific evidence, and the reason. The first one is the answer to the question this topic exists to ask.`,
    pairs: [
      {
        category: 'Causation',
        title: 'The catastrophe was about herd animals, not about people',
        body: `Most Afro-Eurasian crowd diseases originated in domesticated herds and became endemic in dense, connected populations, so European adults carried immunity acquired by surviving them in childhood. The Americas had domesticated the llama, alpaca, guinea pig, turkey and dog, none living in the crowded proximity that generates such diseases, and had been separated from Afro-Eurasia for thousands of years. The difference is entirely in the animals and the isolation, which is confirmed twice over: Europe suffered exactly this kind of collapse from a novel pathogen in the fourteenth century, and Europeans died in appalling numbers of malaria and yellow fever in West Africa. Novelty was the variable, and it cut in every direction.`
      },
      {
        category: 'Consequences',
        title: 'One hemisphere&rsquo;s population grew on the other&rsquo;s plants',
        body: `Eastward went potatoes, maize, cassava and sweet potatoes, crops that yield more calories per acre and grow on dry hills, thin soils and short seasons, extending cultivation onto land that had not been farmed and underwriting population growth in Europe, Qing China and much of Africa. Westward went wheat, sugar, cattle, horses and the diseases of section 01, and the population that received them fell by something between half and ninety percent. The exchange was not a trade between partners but a transfer in which one side grew on the other's plants while the other collapsed from the first side's pathogens.`
      },
      {
        category: 'Chains',
        title: 'The route from epidemic to the Middle Passage runs through six decisions',
        body: `Colonizers wanted silver and sugar, both extraordinarily labor-intensive. The first labor systems, encomienda and an adapted mit'a, drew on Indigenous communities. Those populations collapsed. Indentured Europeans were costly, served fixed terms, had legal standing and died in tropical conditions. Enslaved Africans were available through an existing Portuguese supply chain, were already working the plantation model on Madeira and Sao Tome, held a status that was permanent and heritable, had no state to appeal to, and survived malaria and yellow fever better than the alternatives. Around twelve million were embarked and roughly ten and a half million survived the crossing. Every link is a decision with an alternative, and writing it as one natural process removes the people who made them.`
      },
      {
        category: 'Agency',
        title: 'Plains horse culture is younger than the printing press',
        body: `Horses arrived with Spanish colonization, escaped, were traded and were taken, and within roughly two centuries Indigenous nations of the North American plains had built new economies, military systems and ways of life around them, with the Comanche among the most formidable powers on the continent. Diné sheep herding and weaving is a parallel case. Both are adoption and transformation rather than passive reception, and citing one is how you write an account of the Columbian Exchange that holds catastrophe and agency together instead of treating Indigenous peoples only as the objects of what was done to them.`
      }
    ]
  }
};
