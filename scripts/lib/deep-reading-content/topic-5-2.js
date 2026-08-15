'use strict';

/**
 * Topic 5.2, Nationalism and Revolutions: the deep reading.
 *
 * Why this exists. The success criteria are heavy: four revolutions, each with
 * one Enlightenment debt and one failure to live up to it; the structural causes
 * alongside the ideas; the Haitian Revolution's unique radicalism with two
 * specific causes and an explanation of how 1804 challenged every other Atlantic
 * revolutionary state; and nationalism defined, with a specific case of it
 * destabilizing a multiethnic empire and the mechanism by which it did.
 *
 * That is more than a First & 10 can carry, and the criteria's insistence on
 * structural conditions alongside ideas is the part most likely to be dropped.
 * So section 01 makes the fiscal crisis a mechanism in its own right and shows
 * that all four revolutions begin in a treasury.
 *
 * Three things carried deliberately:
 *
 *   1. Haiti is not the fourth item in a list, it is the case against which the
 *      others are measured, and it is written that way. The reparation of 1825
 *      is included because a revolution that wins and is then charged for it is
 *      the single fact that explains what the other states did about it.
 *   2. Every revolution gets its exclusion named specifically, because "failed
 *      to live up to its ideals" is a sentence that scores nothing without the
 *      clause that follows it.
 *   3. Nationalism gets a mechanism rather than a feeling. The reason it
 *      dissolves a multiethnic empire is that it makes the state's boundary and
 *      the nation's boundary the same question, and an empire cannot answer it
 *      correctly for more than one of its peoples.
 */

module.exports = {
  topicKey: 't5-2',
  slug: 'topic-5-2-nationalism-and-revolutions',
  sourceFile: 'deep-reading-topic-5-2-nationalism-and-revolutions.html',
  lessonFile: 'lesson-5-2-nationalism-and-revolutions.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.2: Who Counted as the People',
  eyebrow: 'Topic 5.2 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Counted as the <em>People</em>',
  deck: `Four revolutions declared that authority comes from the people, and then each had to decide who the people were. Three of them answered narrowly and one answered without qualification, which is why the one that abolished slavery and won was treated by the others as a catastrophe rather than a vindication. This chapter is the causes, the exclusions, Haiti, and how the same idea then took empires apart from the inside.`,
  meta: ['Five sections', 'Causes, three revolutions, Haiti, nationalism', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.2 &nbsp;·&nbsp; Who Counted as the People &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the structural cause the success criteria insist on alongside the ideas, and it applies to all four. Sections 02 and 03 are the revolutions, each with its Enlightenment debt and its exclusion. Section 04 is Haiti, which the criteria treat separately and so does this chapter. Section 05 is nationalism, with the mechanism.`,
    steps: [
      `<b>01 Why they all began in a treasury:</b> war debt, taxation, and the fiscal trap.`,
      `<b>02 America and France:</b> what each borrowed from the Enlightenment and whom each left out.`,
      `<b>03 Latin America:</b> creole grievance, Bolivar, and an independence that changed the top of the hierarchy.`,
      `<b>04 Haiti:</b> three revolutions at once, and the debt charged for winning.`,
      `<b>05 Nationalism:</b> what it is, and why a multiethnic empire cannot survive the question it asks.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'causes',
      num: '01',
      accent: 'gold',
      name: 'They All Began in a Treasury',
      navLabel: 'The fiscal trap',
      dates: 'c. 1756 to 1808 &nbsp;·&nbsp; War debt and taxation',
      thesis: `Enlightenment ideas were available across Europe and the Americas for decades without producing a revolution. What turned an argument into a rising, in every case here, was a government that had run out of money and had to ask somebody new for it.`,
      parts: [
        {
          heading: 'The mechanism',
          blocks: [
            { p: `Eighteenth-century warfare was ruinously expensive and states fought it on credit. The Seven Years' War, from <span class="num">1756</span> to <span class="num">1763</span>, was fought on four continents and left both Britain and France with debts they could not service out of existing revenue. France then borrowed further to fund the American war against Britain, which is the detail that closes the circle.` },
            { p: `Here is the trap, and it is worth writing as a sequence. A state that cannot pay its debts must raise new revenue. Raising revenue means taxing groups that were not previously taxed, or not at that rate. Those groups then have a reason to ask what they are getting for the money, and, crucially, a reason to demand a say in the decision. At that point the Enlightenment vocabulary of consent, which had been circulating harmlessly for fifty years, is suddenly the exact language a taxpayer needs.` },
            { p: `The slogan attached to the American case, no taxation without representation, is the compressed form of exactly this, and versions of it appear in all four revolutions.` }
          ]
        },
        {
          heading: 'The same shape, four times',
          blocks: [
            { p: `<b>Britain's colonies</b>: victory in <span class="num">1763</span> doubled Britain's national debt and left a much larger American territory to garrison, so Parliament taxed the colonies, through the Stamp Act of <span class="num">1765</span> and the duties that followed, at rates that were modest by British standards and unprecedented as a matter of principle.` },
            { p: `<b>France</b>: debt service consumed an enormous share of royal revenue by the late <span class="num">1780</span>s, and the tax system exempted much of the nobility and clergy from the principal direct tax. Attempts at reform were blocked, so Louis XVI summoned the Estates-General in <span class="num">1789</span> for the first time since <span class="num">1614</span>, in order to obtain consent to new taxation. The body summoned to fund a monarchy dissolved it.` },
            { p: `<b>Spanish America</b>: the Bourbon Reforms of the later eighteenth century tightened tax collection, restricted creole officeholding and reasserted Spanish control over colonial trade and administration, which is a fiscal squeeze on exactly the group that had the wealth and the education to object. Then in <span class="num">1808</span> Napoleon deposed the Spanish king, and the question of who held legitimate authority in the colonies became unanswerable.` },
            { p: `<b>Saint-Domingue</b>: the richest colony in the world by a wide margin, producing a large share of the world's sugar and coffee, in which the fiscal and political crisis of the French metropole in <span class="num">1789</span> opened a fight among white planters, free people of color and the enslaved majority about who the revolution's principles applied to.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Enlightenment ideas caused these revolutions, and do not write that they were merely a cover for economic interest. Both are half an answer and the success criteria ask for both halves joined. The ideas had circulated for decades in states that did not revolt, so they are not sufficient; the fiscal crises were ordinary features of eighteenth-century monarchy, so they are not sufficient either. What produces a revolution is a fiscal crisis that forces a government to ask permission, in a society where a vocabulary for refusing already exists. Write the ideas as what made the demand <b>sayable</b> and the debt as what made it <b>necessary</b>.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The fiscal-political trap. <em>The mechanism is that a state which cannot service its debt must tax groups it has not taxed before, and asking a new group for money invites the question of what they get in return, so the act of raising revenue creates the constituency and the occasion for a demand for representation that the state itself has convened.</em>`,
        limit: `It explains the timing and the occasion, not the content. What people demanded once they were in the room came from the arguments of Topic 5.1, and the four revolutions demanded very different things.`,
        comparison: `Against the <em>gunpowder empires</em> in Topic 3.1: there too the driver was fiscal, since an army with artillery has to be paid for continuously, and the Ottomans and Mughals answered with tax farming and land grants rather than with representation. The same pressure produces a parliament in one setting and a tax farm in another, which is a fact about existing institutions rather than about the pressure.`
      },
      terms: [
        ['Seven Years War', 'The 1756 to 1763 global conflict whose debts set up the fiscal crises in both Britain and France.'],
        ['Estates-General', 'The French representative body summoned in 1789 to consent to taxation, which instead became the National Assembly.'],
        ['Bourbon Reforms', 'The Spanish tightening of colonial taxation, trade and officeholding that alienated the creole elite.'],
        ['Fiscal crisis', 'A state\'s inability to service debt from existing revenue, the common precondition of all four revolutions.'],
        ['Consent to taxation', 'The demand that those taxed have a say in the taxing, the point where fiscal necessity meets Enlightenment vocabulary.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'america-france',
      num: '02',
      accent: 'iron',
      name: 'Two Revolutions and Their Fine Print',
      navLabel: 'America and France',
      dates: '1775 to 1799 &nbsp;·&nbsp; The debt and the exclusion',
      thesis: `Both revolutions took their central claim from Locke and Rousseau and both then defined the people in a way that excluded most of the population living under them. Naming the specific exclusion, rather than gesturing at hypocrisy, is what a checkpoint on this topic is asking for.`,
      parts: [
        {
          heading: 'The American Revolution',
          blocks: [
            { p: `<b>What it borrowed.</b> The Declaration of Independence of <span class="num">1776</span> is Locke in structure and often in phrasing: people hold unalienable rights, governments are instituted to secure them and derive their just powers from the consent of the governed, and when a government becomes destructive of those ends the people may alter or abolish it. The Constitution of <span class="num">1787</span> is Montesquieu made operational, with separated powers and checks between them.` },
            { p: `<b>Where it stopped.</b> Slavery was not abolished, and the Constitution protected it in three specific ways: the three-fifths clause counting enslaved people toward representation for their enslavers, a bar on federal prohibition of the slave trade before <span class="num">1808</span>, and a fugitive slave clause. Voting was restricted by property qualification in most states and, everywhere, by sex. Indigenous nations were treated as obstacles to expansion. The revolution transferred power from a distant Parliament to a local propertied elite and changed the social order very little, which is precisely why it is the least radical of the four.` }
          ]
        },
        {
          heading: 'The French Revolution',
          blocks: [
            { p: `<b>What it borrowed.</b> The <em>Declaration of the Rights of Man and of the Citizen</em> of <span class="num">1789</span> states rights as universal and grounds sovereignty in the nation rather than the king, which is Rousseau rather than Locke, and the difference shows in what followed. Where the Americans replaced a government, the French abolished feudal privileges and the tithe, reorganized the Church, redrew the administrative map, replaced the calendar, and eventually executed the monarch.` },
            { p: `<b>Where it stopped, and where it turned.</b> The Constitution of <span class="num">1791</span> divided citizens into active and passive, restricting the vote to men above a tax threshold, so a declaration of universal rights was implemented with a property qualification. Women were formally excluded from political rights, women's political clubs were closed in <span class="num">1793</span>, and Olympe de Gouges, who had rewritten the declaration to include them, was executed. And the Terror of <span class="num">1793</span> to <span class="num">1794</span> answered internal and foreign threat with mass executions under emergency government, which is the fact that made the French Revolution an argument rather than a model for the next century of European politics.` },
            { p: `Slavery is the sharpest case and it belongs here rather than in section 04. The National Convention abolished slavery in the colonies in <span class="num">1794</span>, under pressure from events in Saint-Domingue rather than from principle alone, and Napoleon restored it in <span class="num">1802</span>. A revolution that abolished and then reinstated the thing is not a story of steady progress, and saying so precisely is worth more than a paragraph of general criticism.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the cahiers recorded what people wanted first',
              html: `Before the Estates-General met in <span class="num">1789</span>, communities across France drew up <em>cahiers de doleances</em>, lists of grievances, and thousands survive. They are unusually good evidence because they were written before anyone knew what the revolution would become, so they record what people actually wanted rather than what they later said they had wanted. What they mostly contain is specific: tax inequities, seigneurial dues, the price of bread, the salt tax, local abuses. Demands to abolish the monarchy are rare. That is worth holding onto, because it shows a revolution radicalizing under pressure of events rather than executing a plan, which is the more accurate account of nearly every revolution in this course.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The active citizen. <em>The mechanism is that a declaration of universal rights can be implemented with a property qualification by distinguishing those who hold rights from those who may exercise political power, which preserves the universal language while restricting the franchise to men with enough taxable wealth, and gives every excluded group a written principle to quote back.</em>`,
        limit: `The restriction did not hold. The French franchise widened under the Convention, and the argument from the declaration&rsquo;s own words was made continuously by the people it excluded, which is the pattern Topic 5.1 sets out.`,
        comparison: `Against each other: the Americans kept their social order and changed their government, while the French tried to change both and produced the Terror in the attempt. That contrast is the standard comparison prompt for this topic, and the useful version of it explains the difference by what each revolution was trying to do rather than by national character.`
      },
      terms: [
        ['Declaration of Independence', 'The 1776 statement of Lockean conditional authority, and the clearest borrowing in the unit.'],
        ['Three-fifths clause', 'The constitutional provision counting enslaved people toward their enslavers\' representation, one of three protections of slavery.'],
        ['Declaration of the Rights of Man', 'The 1789 French statement grounding sovereignty in the nation and stating rights as universal.'],
        ['Active and passive citizens', 'The 1791 division restricting the vote to men above a tax threshold while retaining universal language.'],
        ['The Terror', 'The 1793 to 1794 emergency government and mass executions, which made the French Revolution contested rather than exemplary.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'latin',
      num: '03',
      accent: 'rust',
      name: 'Independence Without Social Revolution',
      navLabel: 'Latin America',
      dates: '1808 to 1826 &nbsp;·&nbsp; Creole grievance and its limits',
      thesis: `Spanish America won independence and kept its social structure almost intact, and the reason is in who led it. The revolution was made by the group directly below the top of the colonial hierarchy, and a revolution led by the second rank tends to stop when the second rank becomes the first.`,
      parts: [
        {
          heading: 'The grievance and the opening',
          blocks: [
            { p: `The Topic 4.7 chapter supplies the grievance. <span class="kt">Criollos</span>, people of Spanish descent born in the Americas, held enormous wealth in land, mines and commerce and were excluded from the highest offices by birthplace alone, which peninsulares monopolized. The Bourbon Reforms sharpened that by tightening Spanish control and reducing creole officeholding further, so the wealthiest group in the colonies was systematically denied the top of its own society.` },
            { p: `The opening came from Europe. In <span class="num">1808</span> Napoleon invaded Spain, deposed Ferdinand VII and installed his own brother, which raised a question colonial elites could answer in their own favor: if the legitimate king is gone, to whom does authority revert? Local juntas formed claiming to govern in the king's name, and from that claim it was a short step to governing without him.` },
            { p: `The wars that followed ran from <span class="num">1810</span> to the mid-<span class="num">1820</span>s. Simon Bolivar campaigned across the north, from Venezuela through New Granada to Peru and Bolivia; Jose de San Martin led the southern campaign from Argentina across the Andes into Chile and Peru; Mexico moved from Hidalgo's popular rising of <span class="num">1810</span>, which frightened the creole elite badly because it mobilized Indigenous and mestizo peasants against the whole social order, to an independence in <span class="num">1821</span> led by conservative creoles under Iturbide who wanted independence precisely in order to prevent that kind of change.` }
          ]
        },
        {
          heading: 'What changed and what did not',
          blocks: [
            { p: `<b>What it borrowed.</b> Bolivar wrote in the vocabulary of the Enlightenment throughout, and the new republics adopted written constitutions, elected assemblies and formal legal equality. Slavery was abolished in most of Spanish America across the following decades, earlier than in Brazil, the United States or Cuba, and Bolivar committed to abolition partly under the influence of the Haitian president Alexandre Petion, who supplied him with arms and asked for it as the condition.` },
            { p: `<b>Where it stopped.</b> Land ownership was untouched, so the great estates remained. Indigenous communities lost ground, because the abolition of the separate legal status of the <em>republica de indios</em> removed the communal land protections that came with it along with the tribute. Formal equality coexisted with property and literacy restrictions on voting. Political power passed from peninsulares to criollos and no further down. And the wars left the new states militarized, indebted and fragmented, with regional strongmen holding real power, which is the beginning of the <span class="kt">caudillo</span> politics of the nineteenth century.` },
            { p: `Bolivar's own late judgment, that he had plowed the sea, is the compressed version of this and is worth knowing as evidence of contemporary disappointment rather than as a verdict.` }
          ]
        }
      ],
      useThis: {
        tool: `Revolution led by the second rank. <em>The mechanism is that when the group with wealth and education is excluded only from the top of the hierarchy, it has both the capacity to lead a revolt and a direct interest in preserving everything below itself, so independence removes the layer above it and leaves the rest of the structure in place.</em>`,
        limit: `It is not the whole story: Hidalgo&rsquo;s rising and the participation of Indigenous, mestizo and Black soldiers meant popular demands were present throughout, and abolition across most of Spanish America was a real change that the model does not predict on its own.`,
        comparison: `Against <em>Haiti</em> in section 04: the revolution led by enslaved people abolished slavery, redistributed the plantations and destroyed the colonial hierarchy outright, because the group leading it had no position in that hierarchy to protect. Who leads a revolution predicts how far it goes better than what its documents say.`
      },
      terms: [
        ['Criollo', 'A person of Spanish descent born in the Americas, wealthy and barred from the highest offices, the leading group in these revolutions.'],
        ['Peninsular', 'A Spaniard born in Spain, monopolizing the top colonial offices, the layer removed by independence.'],
        ['Junta', 'A local governing council formed after 1808 claiming authority in the deposed king\'s name, the bridge to independence.'],
        ['Simon Bolivar', 'The leader of the northern campaigns, who committed to abolition partly at the Haitian president Petion\'s request.'],
        ['Caudillo', 'A regional strongman holding real power in the militarized, indebted republics the wars left behind.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'haiti',
      num: '04',
      accent: 'gold',
      name: 'Three Revolutions at Once',
      navLabel: 'Haiti',
      dates: '1791 to 1825 &nbsp;·&nbsp; Saint-Domingue and after',
      thesis: `Every other revolution in this chapter was fought over who should govern. Haiti was fought simultaneously against colonial rule, against slavery and against racial hierarchy, and it is the only one in which the enslaved won, which is why it terrified the states that had declared the rights of man.`,
      parts: [
        {
          heading: 'The causes, specifically',
          blocks: [
            { p: `<b>The colony's structure.</b> Saint-Domingue was the most profitable colony on earth, producing perhaps half the world's coffee and a large share of its sugar, and it did so with a population of roughly half a million enslaved people against tens of thousands of whites and a comparable number of free people of color. Mortality on the sugar plantations was so high that the enslaved population was sustained by continuous importation rather than by natural increase, which meant a large proportion of the enslaved had been born in Africa, many with military experience, and had direct memory of freedom.` },
            { p: `<b>The three-way conflict among the free.</b> Free people of color, some of them wealthy planters and slaveholders themselves, held property and yet faced escalating racial restrictions, and after <span class="num">1789</span> they demanded the rights the French declaration proclaimed. White planters refused. Vincent Oge's rising in <span class="num">1790</span> ended with his execution by breaking on the wheel. The colony's ruling group thus split into armed factions before the enslaved majority moved, which is the opening.` },
            { p: `<b>The revolution's own beginning.</b> In August <span class="num">1791</span> a coordinated rising began in the north, associated with a ceremony at Bois Caiman that combined religious and organizational functions, and within weeks the plantation north was burning. The war ran for thirteen years against, in turn, the French colonial regime, invading British and Spanish armies, and finally an expedition Napoleon sent in <span class="num">1802</span> to restore slavery.` },
            { p: `<b>Toussaint Louverture</b>, formerly enslaved, became the dominant military and political figure, defeated or absorbed his rivals, secured the abolition decreed by France in <span class="num">1794</span>, and governed the colony with a constitution of <span class="num">1801</span> naming himself governor for life. He was seized under a flag of truce in <span class="num">1802</span> and died in a French prison. Jean-Jacques Dessalines completed the war, and independence was declared on <span class="num">1 January 1804</span> under the Indigenous Taino name Haiti.` },
            { p: `Two factors ended Napoleon's expedition: sustained Haitian resistance, and yellow fever, which killed European soldiers in enormous numbers while the local population had substantial resistance. The Topic 4.3 chapter explains why that asymmetry existed, and this is the one place in the course where it worked against a European army.` }
          ]
        },
        {
          heading: 'Why 1804 was a problem for everyone else',
          blocks: [
            { p: `Put the four revolutions side by side and Haiti is the only one that abolished slavery immediately and permanently, destroyed the plantation system that had made the colony valuable, and founded a state on the proposition that a formerly enslaved population could govern itself. Its <span class="num">1805</span> constitution declared all citizens Haitian regardless of color, which was an explicit answer to the racial hierarchy the Topic 4.7 chapter describes.` },
            { p: `For the United States, Britain, France and Spain, all of them slaveholding powers or invested in slave economies, that was not an inspiring precedent but a demonstration. So Haiti was isolated: the United States refused recognition until <span class="num">1862</span>, embargoes and diplomatic quarantine followed, and slaveholding societies across the Atlantic tightened controls, restricted the movement of Black sailors and hardened laws, citing Haiti explicitly.` },
            { p: `Then in <span class="num">1825</span> France, with a fleet offshore, made recognition conditional on an indemnity of 150 million francs to compensate the former enslavers for the loss of their property, which included the people themselves. Haiti, needing recognition to trade, agreed, and borrowed from French banks to pay it. The sum was later reduced, and servicing that debt consumed an enormous share of Haitian government revenue for well over a century.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not explain Haiti&rsquo;s later poverty as a failure of the revolution or of self-government. The specific and documented mechanisms are in the record: a thirteen-year war fought across the country&rsquo;s productive land, the destruction of the plantation economy that was the colony&rsquo;s entire export base, decades of diplomatic and commercial isolation by the powers that surrounded it, and an indemnity for the value of freed people that was paid, with borrowed money, out of state revenue for generations. Write the causes and the assertion becomes an argument. And note what the indemnity concedes: the powers that charged it understood perfectly well that Haitians had taken something real.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Revolution from the bottom of the hierarchy. <em>The mechanism is that when the people making a revolution hold no position within the existing order, they have nothing in it to preserve, so the revolution does not stop at the layer that leads it, and colonial rule, slavery and racial hierarchy fall together rather than one at a time.</em>`,
        limit: `Winning the revolution did not mean controlling the terms afterward. Haiti had to purchase recognition from the state it had defeated, which shows that an international order can impose the cost of a victory it cannot reverse.`,
        comparison: `Against <em>maroon communities</em> in Topic 4.6: Palmares and the Jamaican Maroons secured autonomy for a community, sometimes on terms requiring the return of other escapees, while Haiti abolished slavery across an entire colony and founded a state. The difference is scale and the demographic ratio, roughly ten enslaved people to every free person, which is what made a general rising able to win rather than merely to survive.`
      },
      terms: [
        ['Saint-Domingue', 'The French colony producing about half the world\'s coffee and much of its sugar, with roughly half a million enslaved people.'],
        ['Free people of color', 'Property-holding people of mixed descent whose demand for the rights of the 1789 declaration split the colony\'s free population.'],
        ['Toussaint Louverture', 'The formerly enslaved leader who dominated the revolution and governed under the 1801 constitution, seized under truce in 1802.'],
        ['Dessalines', 'The general who completed the war and declared independence on 1 January 1804 under the name Haiti.'],
        ['The indemnity', 'The 150 million francs France demanded in 1825 to compensate former enslavers, serviced from Haitian revenue for over a century.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'nationalism',
      num: '05',
      accent: 'oxide',
      name: 'The Question an Empire Cannot Answer',
      navLabel: 'Nationalism',
      dates: 'c. 1789 to 1871 &nbsp;·&nbsp; From revolution to nation-state',
      thesis: `<span class="kt">Nationalism</span> is the claim that humanity divides into nations, that a nation is entitled to govern itself, and that the boundaries of the state should therefore match the boundaries of the nation. Stated that way, it is obviously fatal to any empire containing more than one people.`,
      parts: [
        {
          heading: 'Where it came from, and what it needs',
          blocks: [
            { p: `The revolutions supplied the premise. Once sovereignty belongs to the people rather than to a dynasty, the question of who the people are becomes the central political question, and the answer that won was the nation: a community defined by some combination of language, shared history, culture, religion and territory.` },
            { p: `France supplied the demonstration. The revolutionary state conscripted a mass citizen army, standardized language and administration, and produced flags, anthems and civic festivals, and that army then beat professional dynastic armies across Europe. The lesson everyone drew was that a state which can call on national loyalty fields more soldiers with more motivation than one that relies on subjects. Napoleon then spread the model by conquest, and provoked national feeling in reaction to it, in Spain, in the German states and elsewhere.` },
            { p: `Nationalism also requires infrastructure, which is why it is a nineteenth-century phenomenon rather than an older one. It needs printing in a standardized vernacular so that people who have never met can read the same newspaper; schools that teach one language and one national history; and, later in the century, railways and conscription that mix a population physically. The Topic 5.5 chapter supplies most of the technology, and it is worth noticing that the same railway that carries coal builds a nation.` }
          ]
        },
        {
          heading: 'The mechanism against empire, with cases',
          blocks: [
            { p: `Here is the mechanism, and it is a dilemma rather than a pressure. A multiethnic empire faces a demand that political boundaries follow national ones. It can concede to one nationality, which demonstrates to every other nationality that the demand works and produces the next demand immediately. It can suppress, which converts a cultural movement into a resistance movement with martyrs and foreign sympathizers. Or it can attempt to build a single imperial nationality, which alienates every group that is not the one chosen. There is no fourth option, and each of the three accelerates the process.` },
            { p: `<b>Greece</b> is the case that showed it working. The rising from <span class="num">1821</span> against Ottoman rule attracted European sympathy through a classical education that had taught the elite of Europe to see Greeks as ancestors, and British, French and Russian intervention secured independence in <span class="num">1830</span>. Serbian, Romanian, Bulgarian and eventually Balkan-wide movements followed the same route, and Ottoman attempts at an inclusive Ottomanism in the mid-century did not stop it. The Topic 4.7 chapter describes the millet system's bargain, and nationalism is exactly what dissolves it: a millet is a religious community content to be governed, and a nation is a community claiming to govern itself.` },
            { p: `<b>Italy and Germany</b> show the other direction, unification rather than secession. Both were assemblies of small states, and in both cases nationalism was harnessed by a state pursuing its own aggrandizement: Piedmont under Cavour, with Garibaldi's campaign in the south, produced a unified Italy by <span class="num">1871</span>; Prussia under Bismarck produced a unified Germany by <span class="num">1871</span> through three deliberately provoked wars. Both unifications came at the expense of empires, Austria in both cases, which is the point for this section. Nationalism does not only break large states apart; it also assembles small ones into states large enough to take the pieces.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: nations had to be taught',
              html: `The strongest evidence that nations are constructed rather than ancient is administrative. When Italy unified in 1861, a commonly cited estimate holds that only a small percentage of the population habitually spoke the Italian that became the national language, the rest speaking regional languages often mutually unintelligible; the remark attributed to Massimo d&rsquo;Azeglio, that having made Italy they must now make Italians, may be apocryphal in its exact form and it describes the actual program. Nineteenth-century states then built that nation deliberately through compulsory schooling in a standard language, national curricula, conscription, censuses that required people to choose a nationality, and official histories. Where a state needs a ministry to produce a national identity, the identity is a project rather than a discovery.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The nation-state demand as a trilemma. <em>The mechanism is that an empire facing a nationalist claim can concede, which proves to every other group that the demand works; suppress, which converts culture into resistance and recruits foreign sympathy; or impose a single imperial identity, which alienates everyone outside it, so each available response accelerates the fragmentation the empire is trying to prevent.</em>`,
        limit: `Nationalism was also an instrument of state power rather than only a solvent of it, as Piedmont and Prussia show, and empires survived it for a long time by playing nationalities against each other.`,
        comparison: `Against the <em>millet system</em> in Topic 4.7: the Ottoman bargain worked by recognizing communities that wanted self-government in family law and accepted subordination in politics. Nationalism withdraws the second half of that deal, so the very institution that had organized plurality successfully for four centuries became the framework through which nations organized their claims to leave.`
      },
      terms: [
        ['Nationalism', 'The claim that humanity divides into nations entitled to self-government, so state boundaries should match national ones.'],
        ['Nation-state', 'A state whose political boundaries are held to coincide with a single national community.'],
        ['Levee en masse', 'The French revolutionary mass conscription, which showed that national loyalty fields larger and more motivated armies.'],
        ['Unification', 'The assembly of small states into one national state, as in Italy and Germany by 1871, at the expense of empires.'],
        ['Constructed identity', 'A national identity produced by schooling, conscription, census and official history rather than inherited.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The second is the one the success criteria weight most heavily, so learn its detail.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Ideas made the demand sayable and debt made it necessary',
        body: `Enlightenment arguments circulated for decades across states that did not revolt, so they are not sufficient; fiscal crises were ordinary in eighteenth-century monarchy, so they are not sufficient either. What produced revolution was a state unable to service its debt having to tax a group it had not taxed, which invites the question of what that group gets in return. Britain doubled its debt winning the Seven Years War and taxed its colonies from 1765. France borrowed further for the American war and summoned the Estates-General in 1789, for the first time since 1614, to consent to taxes. The Bourbon Reforms squeezed exactly the creoles who could object. In every case the government convened its own opposition.`
      },
      {
        category: 'Evaluation',
        title: 'Haiti was three revolutions at once, and was charged for winning',
        body: `Saint-Domingue held roughly half a million enslaved people against tens of thousands of whites, sustained by continuous importation rather than natural increase, so many of the enslaved had been born free in Africa. The free population split first, when free people of color demanded the rights of the 1789 declaration and Oge was executed in 1790, and the rising began in August 1791. Thirteen years later, having defeated French, British, Spanish and finally Napoleon&rsquo;s 1802 expedition, independence was declared on 1 January 1804 with slavery abolished and the plantation system destroyed. Then the United States withheld recognition until 1862, and France in 1825 made recognition conditional on 150 million francs compensating former enslavers, borrowed and serviced for over a century.`
      },
      {
        category: 'Comparison',
        title: 'Who leads a revolution predicts how far it goes',
        body: `The American revolution was led by a propertied colonial elite and transferred power from Parliament to itself, leaving slavery constitutionally protected in three clauses and the vote restricted by property and sex. Spanish American independence was led by criollos excluded only from the top offices, and it removed the peninsulares and left the great estates, the property and literacy franchise restrictions, and, after the republica de indios was abolished, Indigenous communities with less land protection than before. Haiti was made by the enslaved, who held no position in the hierarchy to protect, and colonial rule, slavery and racial hierarchy fell together. Documents predict less about a revolution&rsquo;s reach than the social position of the people making it.`
      },
      {
        category: 'Mechanism',
        title: 'An empire has three answers to nationalism and all three accelerate it',
        body: `Nationalism claims that state boundaries should match national ones, which is fatal to a state containing several peoples. Conceding to one nationality proves to the rest that the demand works: Greek independence in 1830, won with British, French and Russian intervention, was followed by Serbian, Romanian and Bulgarian movements. Suppressing converts a cultural movement into a resistance movement with martyrs and foreign sympathizers. Imposing a single imperial identity, as Ottomanism attempted, alienates everyone outside it. And nationalism assembles as well as dissolves: Piedmont and Prussia both completed unification in 1871 at Austria&rsquo;s expense, which is the same force running the other way.`
      }
    ]
  }
};
