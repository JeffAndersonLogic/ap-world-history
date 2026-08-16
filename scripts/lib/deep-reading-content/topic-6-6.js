'use strict';

/**
 * Topic 6.6, Causes of Migration: the deep reading.
 *
 * Why this exists. Push and pull is the framework every student already has,
 * and it is a labeling scheme rather than an explanation: it sorts reasons into
 * two bins and says nothing about why a particular person in a particular decade
 * could act on them. So section 01 replaces it with four requirements that all
 * have to be satisfied at once, and the third and fourth, an affordable route
 * and a legal status, are the ones that do the historical work.
 *
 * Four things carried deliberately:
 *
 *   1. The three great migration systems of the long nineteenth century were of
 *      roughly comparable size. The Atlantic crossing is not the big one, it is
 *      the well documented one, and a course that teaches only Ellis Island has
 *      taught a third of the phenomenon as though it were the whole.
 *   2. The steamship is on both sides of the equation. It carried the migrant
 *      out and it carried the American grain in that destroyed the European
 *      farm he was leaving, which is a far better causal story than "poverty".
 *   3. Indenture is neither slavery nor free labor, and the feature that defines
 *      it is that breach of contract was a criminal offense. Once a student has
 *      the penal sanction they can classify any labor system in the unit.
 *   4. The famine's death toll was set by land tenure and by relief policy, not
 *      by the blight, and the evidence for that is that the same pathogen hit
 *      the whole of northern Europe.
 */

module.exports = {
  topicKey: 't6-6',
  slug: 'topic-6-6-causes-of-migration',
  sourceFile: 'deep-reading-topic-6-6-causes-of-migration.html',
  lessonFile: 'lesson-6-6-causes-of-migration.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 6.6: Why People Could Go',
  eyebrow: 'Topic 6.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Why People Could <em>Go</em>',
  deck: `Between about <span class="num">1840</span> and <span class="num">1914</span> something on the order of a hundred and fifty million people left home for good or for years, in three great streams of roughly similar size: across the Atlantic, across the Indian Ocean and the South China Sea, and north into Manchuria, Siberia and Central Asia. People had always had reasons to leave. This chapter is about the four things that had to be true at once before a reason could become a journey, and about why they became true when they did.`,
  meta: ['Five sections', 'The model, Ireland, indenture, convicts, and the flows nobody counted', 'Read alongside the First & 10'],
  footerNote: 'Topic 6.6 &nbsp;·&nbsp; Why People Could Go &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 replaces push and pull with something you can build an argument out of, and the rest of the chapter runs cases through it. The success criteria ask you to explain how or why a piece of evidence supports a claim, and the difference between describing a migration and explaining it is almost always the third and fourth requirements: the route and the legal status.`,
    steps: [
      `<b>01 The model:</b> four requirements, three great streams, and the steamship on both sides of the equation.`,
      `<b>02 Ireland:</b> why a plant disease that hit all of northern Europe killed a million people in one country.`,
      `<b>03 Indenture:</b> the system that replaced slavery, and the one clause that defines it.`,
      `<b>04 Convicts:</b> migration organized by the state as a colonization policy.`,
      `<b>05 Manchuria and Siberia:</b> movements as large as the Atlantic crossing, and why they are the least taught.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'model',
      num: '01',
      accent: 'gold',
      name: 'Four Things That Have to Be True at Once',
      navLabel: 'The model',
      dates: 'c. 1840 to 1914 &nbsp;·&nbsp; Three streams, and the ship that did both jobs',
      thesis: `Push and pull sorts reasons into two boxes and stops. It cannot tell you why the same poverty that produced no emigration in <span class="num">1800</span> produced mass emigration in <span class="num">1880</span>. The four-part version can, because two of its four requirements, an affordable route and a legal right to arrive, are exactly the things that changed.`,
      parts: [
        {
          heading: 'The four requirements',
          blocks: [
            { p: `<b>1. A reason to leave.</b> Crop failure, land shortage, debt, war, conscription, persecution, or simply too many surviving children for one holding to support. Nearly universal, which is why it explains nothing on its own.` },
            { p: `<b>2. Somewhere that wants you, or at least wants your labor.</b> Frontier land, plantations, mines, railway construction, factories. Demand has to be specific and known: people move toward information, which is why migration flows are so narrow, one Sicilian village to one American street.` },
            { p: `<b>3. A route you can afford and survive.</b> This is the requirement that changed most in the nineteenth century, and it is where the steamship belongs. An Atlantic crossing under sail took four to six weeks with real mortality risk; by the <span class="num">1870</span>s a steamer did it in about ten days and by <span class="num">1900</span> in under a week, at a steerage fare a laborer could reach with a few months' wages or a prepaid ticket sent by a relative. Railways did the same job on land, moving people to the port and, in Russia and China, into the interior. Under those conditions migration stops being a one-way irreversible decision and becomes something closer to a long trip, which is why <b>return migration</b> becomes a mass phenomenon: something approaching half of Italian emigrants to the Americas eventually went home, and seasonal and repeat migration was normal.` },
            { p: `<b>4. A legal status on arrival.</b> Free entry, a labor contract, a convict sentence, or a bar. This one is invisible until it bites and it decides everything about the experience: whether you can change employer, whether you can bring a family, whether you can ever become a citizen, whether you can leave. Topic 6.7 is largely about states discovering, from the <span class="num">1880</span>s, that this was the lever they controlled.` }
          ]
        },
        {
          heading: 'Three streams, and the ship that carried both the migrant and the cause',
          blocks: [
            { p: `Historians now describe three great migration systems of the period, and their rough comparability is the fact most likely to change how you think about the topic. Something on the order of fifty to sixty million people crossed the Atlantic from Europe to the Americas. A comparable number moved from India and southern China into Southeast Asia, the Indian Ocean rim and the Pacific. And a comparable number again moved from northern China, Korea and European Russia into Manchuria, Siberia and Central Asia.` },
            { p: `The Atlantic stream is not the largest; it is the most documented, because it crossed borders that kept records and ended in countries that later built national stories out of it. Keep that asymmetry in mind whenever you meet a confident number in this topic.` },
            { p: `And now the mechanism that makes this section worth reading twice. The transport revolution appears on both sides of the ledger. The same steamships and railways that carried European migrants west carried American and Ukrainian grain east, and from the <span class="num">1870</span>s that grain arrived in European markets at prices with which small farms in Ireland, Italy, Sweden, Poland and Spain could not compete. The falling cost of moving bulk goods destroyed the livelihood and, in the same stroke, supplied the affordable ticket out. That is a much better answer to "why did they leave" than poverty, because poverty was not new and this was.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that migrants were simply the poorest people leaving the poorest places. The evidence points the other way. Migration costs money, information and connections, so the very poorest frequently could not go, and the classic pattern is emigration rising as a region becomes <b>less</b> poor and more connected, then falling again as wages at home catch up. Ireland after the famine is the partial exception that proves it, because landlord-assisted passages and workhouse schemes moved people who could not otherwise have moved. The other half of the correction is that migrants were not passive: chain migration, prepaid tickets, remittances sent home, village societies and repeat crossings show families running deliberate strategies across two continents, treating a son in Buenos Aires as an investment rather than a loss.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The transport revolution appears on both sides. <em>The mechanism is that the steamships and railways which cut the cost of moving people also cut the cost of moving grain, so from the 1870s American and Ukrainian wheat undercut European small farms at the very moment a steerage fare became affordable, which means the same change created the reason to leave and the means of leaving.</em>`,
        limit: `The model describes what makes migration possible, not who goes. Age, birth order, gender, whether a village already has a connection to a destination, and family strategy decide that, and they vary enormously between the three streams.`,
        comparison: `Against the <em>Atlantic slave trade</em> of Topic 4.5: there the first and third requirements are supplied by force, the second by plantation demand and the fourth by a legal status of property. Running the coerced and the voluntary through one framework is what makes the nineteenth-century systems in section 03 legible, since they sit deliberately between the two.`
      },
      terms: [
        ['Chain migration', 'Movement along established links from one village to one destination, following information and prepaid tickets.'],
        ['Return migration', 'Going home after a period abroad, made ordinary by fast cheap steamers and common in every stream.'],
        ['Remittances', 'Earnings sent home, which financed further migration, land purchase and household survival at the origin.'],
        ['Three migration systems', 'The Atlantic, the Indian Ocean and South China Sea, and the north Asian streams, of roughly comparable size.'],
        ['Grain invasion', 'The arrival of cheap American and Russian wheat in European markets from the 1870s, which destroyed small farms.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'ireland',
      num: '02',
      accent: 'iron',
      name: 'The Blight Hit Everywhere and Killed a Million People in One Country',
      navLabel: 'Ireland',
      dates: '1845 to 1855 &nbsp;·&nbsp; Phytophthora, the quarter-acre clause, and a population that never recovered',
      thesis: `<em>Phytophthora infestans</em> destroyed potato crops across northern Europe from <span class="num">1845</span>. Only in Ireland did it produce a demographic catastrophe, which means the pathogen is the trigger and the causes are the land system that had made a whole class dependent on one crop and the relief policy that governed the response.`,
      parts: [
        {
          heading: 'Why Ireland was exposed',
          blocks: [
            { p: `Three features of the Irish rural economy had converged by the <span class="num">1840</span>s. Land was owned in large estates, frequently by absentee proprietors, and let downward through middlemen into holdings that were subdivided again with each generation until a large share of the rural population held a plot of an acre or two. On that acre, only the potato yields enough calories to feed a family, so a cottier household ate potatoes and paid rent by laboring or by growing something else on ground it did not eat from. And the crop was a near-monoculture of a small number of varieties, which is exactly the condition under which a new pathogen moves without resistance.` },
            { p: `So the exposure was structural. A Belgian or Scottish smallholder hit by the same blight had other crops, other land, or wage work; the Irish cottier had, by design of the tenure system, nothing else at all.` },
            { p: `The blight arrived in <span class="num">1845</span> and returned catastrophically in <span class="num">1846</span> and after. Roughly a million people died over the following years, mostly of the fevers and dysentery that follow starvation rather than of hunger alone, and roughly a million emigrated during the same period, chiefly to Britain, the United States and Canada, on ships whose mortality earned them the name coffin ships.` }
          ]
        },
        {
          heading: 'Policy, and a population that kept falling',
          blocks: [
            { p: `The response is where the causal argument gets sharp, and it should be made carefully rather than angrily. The government did act: public works employed hundreds of thousands, soup kitchens fed millions at their peak in <span class="num">1847</span>, and the Corn Laws were repealed in <span class="num">1846</span>. It then, in <span class="num">1847</span>, shifted the burden of relief onto Irish poor rates, on the principle that Irish property should support Irish poverty, at the precise moment that property was collapsing.` },
            { p: `Two provisions matter most. The <b>Gregory clause</b>, also called the quarter-acre clause, made anyone holding more than a quarter of an acre ineligible for relief, so a starving family had to surrender its land to be fed, which converted famine into permanent dispossession and gave landlords an instrument for clearing tenants. And food continued to leave Ireland throughout the famine years, grain, butter and livestock, exported under armed guard on occasion, because those who owned it were owed rent and the market was in Britain. Historians argue about the quantities and whether retaining them would have been sufficient; what is not in dispute is that a country was exporting food while its people starved, and that this followed from who owned the food rather than from how much there was.` },
            { p: `The consequence that distinguishes Ireland from every other famine in this unit is that the emigration did not stop when the famine did. Chain migration, remittances and prepaid tickets turned a crisis exodus into a permanent structure: the population fell from about eight and a half million before the famine to about four and a half million by <span class="num">1911</span>, and continued falling for decades after. Ireland is the clearest case in the course of a demographic shock becoming a demographic system.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the census was already running',
              html: `Ireland is unusually well measured for a nineteenth-century catastrophe because the United Kingdom had been taking a decennial census since 1821, so there are counts from 1841 and 1851 that bracket the disaster, along with poor law union records, workhouse admissions, emigration returns and estate papers. That is why the population fall can be stated with confidence. The mortality figure is harder and remains an estimate, because civil registration of deaths in Ireland did not begin until 1864, so deaths are inferred from the gap between the censuses after subtracting recorded emigration, and the emigration figures themselves undercount movement to Britain, which required no ticket and no manifest. The number you should carry is "about a million dead and about a million gone", stated as an estimate, with the census-to-census population fall as the firm figure underneath it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Monoculture plus tenure equals no absorption. <em>The mechanism is that a land system subdividing holdings until only the highest-calorie crop can feed a family on them removes every alternative at once, so a crop disease that is a bad year elsewhere is a total loss of food, income and rent capacity in the same season, and the death toll is set by the tenure arrangement rather than by the pathogen.</em>`,
        limit: `Britain did mount large relief operations, and the argument is about the adequacy, timing and ideological limits of the response rather than about its absence, which is the version that survives contact with the evidence.`,
        comparison: `Against the <em>Indian famines</em> of the 1870s and 1890s: the same doctrine, that relief must not interfere with markets or create dependency, produced comparable outcomes on a larger scale under a colonial administration, and grain likewise moved out of famine districts by rail toward paying demand. The recurrence is the argument: this was a policy framework rather than a national failing.`
      },
      terms: [
        ['Phytophthora infestans', 'The potato blight that struck northern Europe from 1845 and produced catastrophe only where alternatives were absent.'],
        ['Cottier', 'A holder of one or two subdivided acres, dependent on the potato because nothing else yields enough on that ground.'],
        ['Gregory clause', 'The rule denying relief to anyone holding more than a quarter-acre, converting starvation into permanent dispossession.'],
        ['Coffin ships', 'The emigrant vessels of the famine years, named for mortality on the crossing to Canada and the United States.'],
        ['Demographic system', 'Emigration that continued long after the crisis, sustained by chain migration and remittances, halving Ireland\'s population.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'indenture',
      num: '03',
      accent: 'rust',
      name: 'Not Slavery, Not Free Labor, and the Difference Is One Clause',
      navLabel: 'Indenture',
      dates: '1834 to 1917 &nbsp;·&nbsp; Girmit, the kangani, and the penal sanction',
      thesis: `When Britain abolished slavery in its empire the plantations did not close, and the labor system built to replace enslaved workers was <span class="kt">indenture</span>: a written contract, a wage, a term of years and a return passage. The clause that defines it, and that separates it from ordinary wage work, is that breaking the contract was a <b>criminal</b> offense, so the state's police and prisons enforced the employer's terms.`,
      parts: [
        {
          heading: 'How the system was built and who moved',
          blocks: [
            { p: `Slavery in the British Empire was abolished in <span class="num">1833</span>, taking effect in <span class="num">1834</span>, with a transitional apprenticeship that ended in <span class="num">1838</span> and compensation paid to owners rather than to the enslaved. Freed people across the Caribbean and Mauritius left the estates wherever they had any alternative, which is the strongest evidence available about what plantation labor was worth on an open market. Planters, facing a labor shortage of their own creation, turned to recruitment overseas.` },
            { p: `Between the <span class="num">1830</span>s and <span class="num">1917</span> something over a million Indians went under indenture to Mauritius, British Guiana, Trinidad, Jamaica, Natal, Fiji, Suriname and Réunion. In Fiji and the Caribbean the workers called the contract <b>girmit</b>, from the English word agreement, and called themselves girmitiyas. Recruitment ran through agents, arkatis in the north and the kangani system in the south, who were paid per head and worked through village networks, which meant that the honesty of the description a recruit received varied with the character of a man on commission. Recruits were assembled in depots at Calcutta and Madras and shipped in regulated vessels with a surgeon aboard.` },
            { p: `The standard contract was five years of labor at a fixed daily wage with rations and housing, with a return passage available after a further term of residence. On the estates, workers were assigned tasks by an overseer, paid less than the nominal rate when a task was judged incomplete, and housed in the barracks that had held enslaved people a generation earlier. Women were a minority of recruits, usually a regulated proportion of about one to three, which shaped everything Topic 6.7 describes about the societies that resulted.` }
          ]
        },
        {
          heading: 'The penal sanction, and the other trade',
          blocks: [
            { p: `Here is the analytical center of the section. Under ordinary wage labor, if a worker walks off, the employer's remedy is to sue for damages or hire someone else. Under indenture, desertion, refusal to work, or absence without leave were offenses punishable by fine and imprisonment, and a magistrate could sentence a worker and return him to the same employer. That is the <b>penal sanction</b>, and it is the whole difference. It means the worker's inability to leave is enforced by the state rather than by ownership, which is why indenture is genuinely not slavery, since the person was not property, could not be sold, and had a term and a wage, and equally why it is not free labor, since the defining freedom of wage work, the ability to quit, had been removed by criminal law.` },
            { p: `Learn that distinction as a tool rather than as a fact about one system, because it classifies almost every labor arrangement in Unit 6. Congo rubber quotas, the Peruvian guano islands, southern African mine compounds with pass laws, and the aviamento debt of the Amazon can all be sorted by asking one question: what happens if the worker walks away, and who makes it happen.` },
            { p: `Alongside the regulated British system ran a much worse one. Between the <span class="num">1840</span>s and <span class="num">1874</span> something over two hundred thousand Chinese laborers were shipped to Cuba and Peru under contracts obtained by deception and often by outright kidnapping in the ports of southern China. Mortality on those voyages was appalling, and conditions on the Cuban sugar estates and the Peruvian guano islands were such that the Qing government sent a commission of inquiry in <span class="num">1874</span>, whose findings were damning enough to end the trade to both destinations. That contrast is worth carrying: British indenture was regulated, inspected and documented, and it was regulated because campaigners had forced the issue and because Britain had abolished slavery and could not be seen to be running it again under a new name. Where no such pressure existed, the same demand produced something close to the older trade.` },
            { p: `Indian indenture was ended by campaigning within India, in which Gandhi's early career in Natal was formative, on the argument that the system was a national humiliation as well as an abuse. Recruitment stopped in <span class="num">1917</span> and the outstanding contracts were wound up shortly after.` }
          ]
        }
      ],
      useThis: {
        tool: `The penal sanction. <em>The mechanism is that making breach of a labor contract a criminal rather than a civil matter puts the state&rsquo;s magistrates and prisons behind the employer&rsquo;s terms, so a worker who leaves is arrested and returned rather than merely sued, which removes the one power that makes wage labor free while leaving the worker legally a person rather than property.</em>`,
        limit: `Experience varied enormously by colony, decade and estate, and indentured workers were not merely victims: they used the courts, struck, completed terms, bought land in Trinidad and Fiji, and re-indentured deliberately when the terms suited them.`,
        comparison: `Against <em>chattel slavery</em> in Topic 4.5: the person is not property, has a term, a wage and a contract, and cannot be sold, and the mechanism of confinement moves from ownership to criminal law. Naming that shift precisely is what stops an answer from either equating the two systems or treating indenture as ordinary employment, both of which lose the history.`
      },
      terms: [
        ['Indenture', 'Contract labor for a fixed term with wage and passage, in which breach of contract was a criminal offense.'],
        ['Girmit', 'The workers\' word for the agreement, from which girmitiya, the name Indian indentured laborers used for themselves.'],
        ['Kangani and arkati', 'The commission-paid recruiters working through village networks in south and north India respectively.'],
        ['Penal sanction', 'The criminal punishment of desertion or refusal to work, the clause distinguishing indenture from free wage labor.'],
        ['Coolie trade', 'The unregulated shipment of Chinese laborers to Cuba and Peru, ended after a Qing commission of inquiry in 1874.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'convicts',
      num: '04',
      accent: 'oxide',
      name: 'Migration Organized by a Court',
      navLabel: 'Convicts',
      dates: '1788 to 1906 &nbsp;·&nbsp; Australia, Guiana, and the Siberian road',
      thesis: `Penal transportation is the case where the state chooses the migrants, the destination and the term, and it is worth its own section because it makes visible something present in every other system in this chapter: migration is shaped by law long before it is shaped by desire.`,
      parts: [
        {
          heading: 'What transportation was for',
          blocks: [
            { p: `Britain transported roughly a hundred and sixty thousand convicts to Australia between <span class="num">1788</span> and <span class="num">1868</span>, to New South Wales, Van Diemen's Land and finally Western Australia. The motives were mixed and all of them are worth naming: relieving overcrowded prisons and hulks after the American colonies stopped receiving convicts, punishing at a distance in a period when the alternative for many offenses was hanging, and, decisively, populating a claimed territory with a labor force at no wage cost. Most convicts had been sentenced for property offenses, many were assigned to private settlers as unpaid labor, and most who survived their sentences stayed, because a return passage was nobody's obligation.` },
            { p: `France ran a comparable system later and more lethally, sending convicts to French Guiana from <span class="num">1852</span> and to New Caledonia from the <span class="num">1860</span>s, where tropical disease produced mortality high enough that the system functioned as an extended death sentence for many of those sent. Russia used <b>katorga</b>, penal labor in Siberia and on Sakhalin, both as punishment and as a means of putting workers into mines and settlements no free person would go to, a system Chekhov investigated and described in <span class="num">1890</span>.` },
            { p: `The mechanism common to all three is that a state facing a colonization problem and a punishment problem solved them with each other. Transportation supplies labor that cannot refuse, in a place where free labor will not go, at a cost limited to the voyage, and it exports the social problem in the same motion. And in Australia the outcome was not a prison colony but a society: convicts became settlers, settlers became landholders, and the free immigration that followed built a self-governing colony that then, notably, insisted on ending transportation because it depressed wages and stigmatized the population.` }
          ]
        },
        {
          heading: 'The law as the real variable',
          blocks: [
            { p: `Set the four systems in this chapter beside each other and the fourth requirement from section 01 turns out to be doing more work than any of the others. The Irish emigrant was legally free on arrival and could work for anyone, which is why remittances and chain migration were possible. The indentured worker was free in form and criminally bound in substance for five years. The convict was unfree by sentence for a term set by a court. And the enslaved person of the previous century had been property. Same ships, similar routes, sometimes the same ports, and four entirely different histories, produced by a legal category.` },
            { p: `This is the point to carry into Topic 6.7, because the moment receiving societies decided they wanted fewer of certain arrivals, the instrument they reached for was not the ship or the wage. It was the law.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not sort nineteenth-century migration into "free" and "forced" as two boxes. Almost nothing in this chapter sits cleanly in either. A famine emigrant chose to board a ship in the sense that nobody carried them aboard, and chose it under conditions in which staying meant starving. An indentured worker signed a contract, sometimes knowingly and sometimes after a recruiter&rsquo;s lie, and could then be imprisoned for leaving. A transported convict was sentenced by a court operating under law. Treat coercion as a <b>spectrum with identifiable instruments</b>, ownership, criminal sanction, debt, sentence, hunger, and then say which instrument operated in your case. That is a more accurate description and it is a much better paragraph.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Solving two state problems with each other. <em>The mechanism is that transportation converts a punishment problem into a colonization policy, supplying labor that cannot refuse in a territory where free workers will not go, at the cost of a voyage, while removing the offender from the home society, which is why the practice ended only when the receiving colonies were populous enough to object to it.</em>`,
        limit: `The convict streams were small beside the voluntary and indentured ones, and their importance is analytical, showing law as the decisive variable, rather than demographic.`,
        comparison: `Against <em>indenture</em> in section 03: both put unfree labor where free labor would not go, and they differ in who selects the migrant. A court selects the convict for what he did; a recruiter on commission selects the indentured worker for being persuadable. Naming that difference is the fastest way to show you understand both systems.`
      },
      terms: [
        ['Penal transportation', 'Court-ordered migration used simultaneously as punishment, prison relief and a colonization labor policy.'],
        ['Assignment', 'The allocation of convicts to private settlers as unpaid labor, which is what made the system economically attractive.'],
        ['Katorga', 'Russian penal labor in Siberia and on Sakhalin, used to staff mines and settlements no free worker would enter.'],
        ['Bagne', 'The French penal colonies in Guiana and New Caledonia, where disease mortality made many sentences effectively terminal.'],
        ['Legal status', 'The category, free, contracted, sentenced or owned, that decided everything about a migrant\'s experience on arrival.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'internal',
      num: '05',
      accent: 'gold',
      name: 'The Largest Movements Crossed No Border at All',
      navLabel: 'Internal flows',
      dates: '1860 to 1914 &nbsp;·&nbsp; Manchuria, Siberia, and the road to the mill town',
      thesis: `The migrations that moved the most people in this period were mostly internal or overland, which means they generated no passenger manifests, no immigration statistics and no national origin story, and are therefore the least taught. That is a bias in the evidence rather than a fact about the past, and knowing it is worth a qualification in any essay.`,
      parts: [
        {
          heading: 'Two overland streams and one that stayed home',
          blocks: [
            { p: `<b>Manchuria.</b> The Qing had restricted Han Chinese settlement in the dynasty's own homeland for most of its rule. Under pressure from Russian expansion and from population strain in the north China plain, the restrictions were relaxed from the <span class="num">1860</span>s and then abandoned, and tens of millions of people moved north from Shandong and Hebei over the following decades, on foot, by junk and eventually by steamer and rail. It was one of the largest migrations of the age and much of it was seasonal or circular, men going north for a season's work and returning.` },
            { p: `<b>Siberia and Central Asia.</b> Russian peasant migration eastward grew after the emancipation of the serfs in <span class="num">1861</span> removed the legal ties binding cultivators to an estate, and accelerated enormously once the Trans-Siberian Railway opened the route from <span class="num">1891</span>. The state actively assisted it, because settling agriculturalists in a contested frontier was a strategic objective as well as a relief valve for land hunger in European Russia, which is the settler-colonial mechanism of Topic 6.2 conducted inside a single empire.` },
            { p: `<b>And the movement to the mill town.</b> Rural to urban migration within countries was larger than all the transoceanic streams combined and is usually filed under industrialization rather than under migration, which is a filing decision rather than a distinction in what happened. The peasant who moved from Lancashire's countryside to Manchester, from Bengal's villages to the Calcutta jute mills, from Naples to Milan or from Guangdong's counties to the Pearl River delta was making the same calculation, under the same pressures, as the one who boarded a ship.` }
          ]
        },
        {
          heading: 'The variation the criteria ask for',
          blocks: [
            { p: `The third success criterion wants a meaningful regional difference, and this section supplies two that are genuinely useful.` },
            { p: `The first is about <b>destination and permanence</b>. European transatlantic migrants went overwhelmingly to territories where they could acquire land and citizenship and where their descendants became the majority population. Indian and Chinese migrants went overwhelmingly to territories where they could do neither, because they arrived under contracts and into legal systems that excluded them, and their communities remained minorities defined by origin for generations. That difference is not about the migrants. It is about the fourth requirement in section 01, and Topic 6.7 is its consequences.` },
            { p: `The second is about <b>what the sources let you see</b>. Because the Atlantic crossing was measured and the overland streams largely were not, and because return migration was systematically undercounted everywhere, the numbers available for this topic are asymmetric in a direction that flatters one story. A good answer says so once, plainly, and then uses the figures for scale rather than for precision.` }
          ]
        }
      ],
      useThis: {
        tool: `The record follows the border. <em>The mechanism is that migration statistics were generated by states counting people crossing frontiers for tax, quarantine and control purposes, so movements inside an empire produced no comparable record however large they were, which makes the Atlantic stream look dominant in the evidence while the Manchurian and Siberian streams of similar size leave almost no statistical trace.</em>`,
        limit: `Internal migration is not simply the same phenomenon at shorter range: no passport, no ocean and a shared language change the costs, the reversibility and the reception, which is why circular and seasonal patterns dominate these streams.`,
        comparison: `Against the <em>urbanization</em> of Topic 5.9: Manchester growing from about 25,000 to about 300,000 in under eighty years was a migration, and treating it as one puts industrial Britain and Qing Manchuria under a single explanation about land pressure, wage differentials and cheap transport.`
      },
      terms: [
        ['Manchurian migration', 'The movement of tens of millions from north China after Qing settlement restrictions were relaxed from the 1860s.'],
        ['Trans-Siberian Railway', 'The line opened from 1891 that turned assisted Russian peasant settlement of Siberia into a mass movement.'],
        ['Emancipation of the serfs', 'The 1861 reform that removed the legal ties binding Russian cultivators and made eastward migration possible.'],
        ['Circular migration', 'Seasonal or repeated movement with return, the dominant pattern in the overland streams and heavily undercounted.'],
        ['Statistical bias', 'The tendency of border-crossing records to make measured migrations look larger than unmeasured ones of similar size.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The second card carries the sharpest single mechanism in the topic, and the fourth is the qualification the success criteria ask for.`,
    pairs: [
      {
        category: 'Method',
        title: 'Four requirements, and the last two are what changed',
        body: `A reason to leave, somewhere that wants your labor, a route you can afford and survive, and a legal status on arrival. The first is near universal and explains nothing; the second follows industrial and frontier demand; the third and fourth are what turned old reasons into mass movement. A sailing crossing of four to six weeks became a steamer crossing of about ten days by the 1870s and under a week by 1900, at a steerage fare reachable by a few months&rsquo; wages or a prepaid ticket, which made migration reversible and made something approaching half of Italian emigrants to the Americas return home. The fourth requirement decided everything else: whether you could change employer, bring a family, own land or become a citizen.`
      },
      {
        category: 'Causation',
        title: 'The same ships carried the migrant out and the cause in',
        body: `From the 1870s the steamships and railways that made emigration affordable were also delivering American and Ukrainian grain into European markets at prices small farms in Ireland, Italy, Sweden and Spain could not match. The transport revolution destroyed the livelihood and supplied the ticket in one motion, which is a far better answer to why people left than poverty, since poverty was not new and this was. It also corrects the standard picture in a second way: migration costs money, information and connections, so the very poorest often could not go, and emigration typically rose as a region grew less poor and better connected, then fell as wages at home caught up.`
      },
      {
        category: 'Comparison',
        title: 'Indenture is defined by what happens when you walk away',
        body: `Emancipation in the British Empire took effect in 1834 and apprenticeship ended in 1838, and freed people left the estates wherever they had an alternative, which is the clearest measure of what plantation labor was worth on an open market. Over a million Indians went under indenture to Mauritius, British Guiana, Trinidad, Natal, Fiji and elsewhere between the 1830s and 1917, recruited by commission-paid arkatis and kanganis, on five-year contracts with a wage, rations and an eventual return passage. The defining clause is the penal sanction: desertion or refusal to work was a criminal offense, so a magistrate could imprison a worker and return him to the same employer. Not slavery, because the person was not property and had a term and a wage; not free labor, because the ability to quit had been removed by criminal law.`
      },
      {
        category: 'Qualification',
        title: 'The evidence flatters one stream, and the destinations differed by law',
        body: `Three migration systems of roughly comparable size ran in this period: fifty to sixty million across the Atlantic, a similar number from India and southern China into Southeast Asia and the Indian Ocean rim, and a similar number again into Manchuria, Siberia and Central Asia. The Atlantic stream is the best documented rather than the largest, because it crossed borders that kept records, while tens of millions moving north from Shandong and Hebei after the Qing relaxed settlement restrictions in the 1860s left almost no statistical trace. And the destinations differed in law rather than in migrant intent: Europeans crossing the Atlantic could acquire land and citizenship and their descendants became majorities, while Indian and Chinese migrants arrived under contracts and into legal systems that allowed neither. That is the qualification to write, and Topic 6.7 is its consequences.`
      }
    ]
  }
};
