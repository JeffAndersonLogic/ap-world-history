'use strict';

/**
 * Topic 3.2, Empires: Administration: the deep reading.
 *
 * Why this exists. The success criteria ask for two ways rulers recruited
 * bureaucratic or military elites, specific examples of religion, art or
 * architecture used to legitimize rule, and two tax-collection systems
 * explained as funders of state power. Three mechanisms, from five empires, and
 * the lesson has room for the devshirme, the mansabdars and the millets as
 * names.
 *
 * The organizing argument: an early modern empire is a machine for converting
 * the produce of villages it will never see into soldiers, buildings and
 * salaries, through intermediaries it does not fully control. Every institution
 * in this chapter is an answer to one of two questions. Who collects, and what
 * stops them keeping it? Who serves, and what stops them becoming a rival?
 *
 * Three things carried deliberately:
 *
 *   1. Tax farming is not a curiosity, it is the central fiscal fact of the
 *      period, and its incentive structure explains more about the eighteenth
 *      century than any ruler's personality does.
 *   2. Monumental architecture is not decoration in this topic. A mosque
 *      complex with a soup kitchen, a hospital and a school is a welfare state
 *      with a dome on it, and saying so is the difference between describing
 *      the Suleymaniye and explaining it.
 *   3. Every one of these empires ruled through local elites it could not
 *      replace, and the recurring trade-off, cheap rule now against weak
 *      control later, is the single most transferable idea in Unit 3.
 */

module.exports = {
  topicKey: 't3-2',
  slug: 'topic-3-2-empires-administration',
  sourceFile: 'deep-reading-topic-3-2-empires-administration.html',
  lessonFile: 'lesson-3-2-empires-administration.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 3.2: Who Collects, and Who Serves',
  eyebrow: 'Topic 3.2 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Collects, and Who <em>Serves</em>',
  deck: `An empire is a machine for turning the harvest of villages nobody at the capital will ever visit into armies, palaces and salaries. This chapter takes the machine apart: the elites who were built to have no alternative, the tax systems that actually delivered the money, the buildings that justified taking it, and the bargains with local power that made all of it affordable and, eventually, fragile.`,
  meta: ['Six sections', 'Elites, revenue, legitimacy, bargains', 'Read alongside the First & 10'],
  footerNote: 'Topic 3.2 &nbsp;·&nbsp; Who Collects, and Who Serves &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Two questions run through the whole chapter: who serves, and who collects. Sections 02 and 05 answer the first from opposite ends, imported servants and local notables; sections 03 and 06 answer the second and then show what went wrong with it. Section 04 is why anyone put up with any of it.`,
    steps: [
      `<b>01 The problem:</b> what governing at this scale actually required.`,
      `<b>02 Servants with nowhere else to go:</b> devshirme, ghulams, mansabdars, banners, service nobility.`,
      `<b>03 Getting paid:</b> timar, tax farming, zabt, the single whip, the soul tax.`,
      `<b>04 Legitimacy you can stand inside:</b> mosque complexes, squares, mausolea, palaces.`,
      `<b>05 The bargain with local elites:</b> zamindars, notables, gentry, and what it cost.`,
      `<b>06 Where the machinery cracked:</b> incentives, entrenchment, and the fiscal squeeze.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'problem',
      num: '01',
      accent: 'gold',
      name: 'The Problem',
      navLabel: 'The problem',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Scale, distance, difference',
      thesis: `Every institution in this chapter is a solution to three constraints that none of these rulers could change: they governed tens of millions, at the speed of a horse, over people who did not share their language or their faith.`,
      parts: [
        {
          heading: 'The three constraints',
          blocks: [
            { p: `<b>Scale.</b> The Mughal empire at its height governed something on the order of a hundred and fifty million people; Qing China well over two hundred million by the eighteenth century; the Ottomans perhaps twenty to thirty million across three continents. No ruler could know his officials, and no capital could supervise a district a thousand miles away.` },
            { p: `<b>Speed.</b> Information moved at the pace of a rider or a ship. An order from Istanbul to Cairo, or Delhi to Bengal, took weeks; a reply took weeks more. Everything about early modern administration follows from the fact that by the time the center learned about a problem, the problem had already been handled by somebody local, well or badly.` },
            { p: `<b>Difference.</b> These were empires by definition, which means the ruling group was not the ruled majority. A Sunni Turkish dynasty governing Orthodox Christians, Armenians, Arabs and Jews; a Shia shah over converted Sunnis; a Muslim dynasty of Central Asian origin over a Hindu majority; a Manchu house of perhaps a million people over two hundred million Chinese. Uniformity was not available, and no ruler in this unit seriously attempted it.` }
          ]
        },
        {
          heading: 'The two questions, and the trade-off underneath them',
          blocks: [
            { p: `Reduce it and every administrative decision in Unit 3 answers one of two questions. <b>Who serves?</b> The state needs soldiers, judges, governors and clerks, and every one of them is a potential rival if he acquires an independent base. <b>Who collects?</b> The state needs revenue from millions of cultivators, and every collector between the field and the treasury is an opportunity for someone to keep a share.` },
            { p: `Underneath both sits one trade-off that recurs in every section of this chapter and is worth having as a sentence: <em>direct rule is expensive and reliable; indirect rule is cheap and unreliable.</em> Salaried officials answerable to the capital cost cash the empire may not have and require a bureaucracy to supervise them. Local intermediaries, hereditary landholders, tribal chiefs, existing city elites, cost almost nothing because they are already there, and they will always take a cut and will eventually treat the office as property. Every empire in this unit chose a mixture, and the mixture drifted toward the cheap option over time, for reasons section 06 explains.` }
          ]
        }
      ],
      useThis: {
        tool: `The direct-indirect trade-off. <em>The mechanism is that salaried officials answerable to the center are reliable and require cash the treasury may not have, while local intermediaries are nearly free because they already hold the ground, and the price of using them is a permanent share of the revenue and the gradual conversion of an office into a piece of inheritable property.</em>`,
        limit: `No empire in this unit chose one or the other. Every one ran a mixture, and the interesting question in any answer is which task got which method and why.`,
        comparison: `Against <em>Song China</em> in Topic 1.1: the Song is the outlier that shows what full direct rule requires, an examined salaried bureaucracy with paper records and a cash tax system, none of which most early modern empires had at the scale they needed.`
      },
      terms: [
        ['Direct rule', 'Government through salaried officials appointed by and answerable to the center; reliable, expensive and administratively demanding.'],
        ['Indirect rule', 'Government through existing local elites who keep their position in exchange for delivering revenue and order; cheap and structurally leaky.'],
        ['Intermediary', 'Anyone standing between the cultivator and the treasury, and therefore anyone in a position to keep part of what passes through.'],
        ['Legitimacy', 'The reason subjects and officials obey without compulsion, which every empire in this unit had to manufacture continuously.'],
        ['Imperial', 'Ruling peoples who are not the rulers&rsquo; own, which is what makes managing difference the defining administrative problem of the period.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'servants',
      num: '02',
      accent: 'rust',
      name: 'Servants With Nowhere Else to Go',
      navLabel: 'The service elites',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Devshirme, ghulam, mansabdar, banner, rank',
      thesis: `Five empires, five ways of manufacturing an elite whose entire standing depends on the ruler. The variations are dictated by what each had available, and the failure mode is identical in every case.`,
      parts: [
        {
          heading: 'The five systems',
          blocks: [
            { p: `<b>Ottoman devshirme.</b> Christian boys levied from Balkan villages, converted, educated, and made <span class="kt">kul</span> of the sultan's household. The ablest were trained in the palace school for the highest offices of state, including the grand vizierate; the rest filled the janissary corps. A man with no family land, no lineage and no local clients who reaches the second-highest office in the empire owes it entirely to the throne, and his property reverts to the sultan at death.` },
            { p: `<b>Safavid ghulams.</b> Abbas I's regiments of Caucasian converts, described in the Topic 3.1 chapter, built for the same reason and used to offset the tribal Qizilbash on whom the dynasty had originally depended.` },
            { p: `<b>Mughal mansabdars.</b> A different solution to the same problem. Rather than importing outsiders, Akbar took the existing warrior aristocracy, Turkish, Persian, Afghan, Indian Muslim and Hindu Rajput, and ranked every member of it on a numerical scale, the <span class="kt">mansab</span>, that set his pay and the cavalry he owed. Ranks were granted by the emperor and were not hereditary; officers were rotated between assignments. The elite kept its diversity and lost its independence.` },
            { p: `<b>Qing banners.</b> A hereditary military and social organization of Manchu, Mongol and allied Chinese households, the conquest elite itself, garrisoned in cities across the empire, supported by state stipends, and kept legally distinct from the Chinese population. Alongside it the Qing kept the Chinese examination system running and appointed Chinese officials throughout the civil administration, frequently pairing a Manchu and a Chinese official in the same senior post.` },
            { p: `<b>Russian service nobility.</b> Nobles held land in exchange for service to the tsar, and under Peter I the principle was made explicit in a table of ranks that graded every military, civil and court office and tied noble status to the rank attained rather than to birth. Service produced status, which is the same logic as a mansab arriving from a different direction.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the devshirme in the words of the people it took',
              html: `The levy is documented from several sides, and the sides disagree in useful ways. Ottoman administrative records treat it as routine recruitment with rules about which families and which regions were eligible. Balkan folk songs and later Christian accounts describe it as a grief, with families hiding or maiming sons to keep them. And a handful of men taken by the levy rose to be grand viziers, and there are cases of such men later patronizing their home villages. All three are true at once: a compulsory levy of children, experienced as loss, that was also the fastest route to power in the empire. An answer that reports only one of the three is reporting a source rather than the history.`
            } }
          ]
        },
        {
          heading: 'The failure mode, which is the same everywhere',
          blocks: [
            { p: `Each of these systems was designed to prevent inheritance, and each of them drifted toward it. Janissary status became effectively hereditary and the corps became a political actor able to depose sultans. Mansabs were not inheritable in principle, and in practice great houses reproduced their position across generations. Banner households became a hereditary stipendiary class with declining military value. Russian service nobility became, by the later eighteenth century, a nobility exempted from compulsory service altogether.` },
            { p: `The reason is worth stating because it is general. A man who has power wants his son to have it, and a ruler who needs that man's cooperation this year is poorly placed to refuse. Institutional designs that depend on permanently denying inheritance require constant enforcement by a center that is strong enough not to need the concession, and any period of weakness converts a service elite into an aristocracy. That is not a story about decadence; it is what happens to a rule that nobody has an interest in enforcing.` }
          ]
        }
      ],
      useThis: {
        tool: `Non-hereditary rank as the instrument. <em>The mechanism is that status, pay and command are granted by the ruler and expire with the holder, so an officer cannot convert office into a family estate, cannot build a local base while being rotated between posts, and has no route to standing except continued service, which makes the whole elite structurally dependent.</em>`,
        limit: `Every one of these systems drifted toward heredity, because a ruler who needs an official's cooperation now is badly placed to refuse his son later, and enforcement requires exactly the strength that makes enforcement unnecessary.`,
        comparison: `Against <em>Song China</em> in Topic 1.1: the examination did the same job by making the qualification a competitive test rather than a grant, which is more durable, and it still concentrated office in the families able to fund twenty years of study.`
      },
      terms: [
        ['Kul', 'A servant of the Ottoman ruler&rsquo;s household, without independent legal standing, the status that made devshirme recruits dependable.'],
        ['Mansab', 'The Mughal numerical rank fixing an officer&rsquo;s pay and cavalry obligation, granted by the emperor and not inherited.'],
        ['Banner', 'A hereditary Qing military and social unit of Manchu, Mongol or allied Chinese households, garrisoned and stipendiary.'],
        ['Table of Ranks', 'Peter I&rsquo;s 1722 grading of military, civil and court offices, which tied Russian noble status to service rather than birth.'],
        ['Praetorian problem', 'The tendency of a guard created to protect a ruler to become a power that makes and unmakes rulers, as the janissaries did.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'revenue',
      num: '03',
      accent: 'iron',
      name: 'Getting Paid',
      navLabel: 'Getting paid',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Land, farm, silver, souls',
      thesis: `The fiscal history of these empires is a single movement: from paying servants with land revenue, to selling the right to collect, to taxing in cash. Each step buys the state something and costs it something, and the costs come due later.`,
      parts: [
        {
          heading: 'Stage one: pay them in land revenue',
          blocks: [
            { p: `The Ottoman <span class="kt">timar</span> and the Mughal <span class="kt">jagir</span> are the same instrument: assign a cavalryman or officer the revenue of a district, and he equips himself and his men from it. The advantage is that a state with little cash can field an army anyway, which is precisely why this arrangement appears independently in medieval Europe, the Islamic world, Ethiopia and India, as the Topic 1.7 chapter notes.` },
            { p: `The disadvantage arrives with gunpowder. Massed infantry with firearms must be paid in coin, continuously, whether or not there is a campaign, and they must be drilled and supplied by the state. A land-assignment system produces cavalry, not salaried musketeers. So the same military change that made these empires possible put their oldest revenue arrangement under pressure, and every one of them had to find cash.` }
          ]
        },
        {
          heading: 'Stage two: sell the right to collect',
          blocks: [
            { p: `<span class="kt">Tax farming</span> is the characteristic fiscal instrument of the early modern world and it deserves to be understood rather than merely named. The state auctions the right to collect the taxes of a district. The winning bidder pays the treasury up front, then collects, and keeps whatever he can take above his bid. The Ottomans used it increasingly from the sixteenth century as iltizam, and from <span class="num">1695</span> sold farms for the holder's lifetime, which raised more money at once and gave the holder an incentive to think about the district's long-term yield.` },
            { p: `The advantages are real and explain why so many states did it: the treasury gets money immediately, before the harvest, which is exactly what a state fighting a war needs; it needs no salaried collectors and no supervisory bureaucracy; and it converts an uncertain future stream into a certain present sum, which is what a bank does.` },
            { p: `The cost is in the incentive. The farmer's profit is the difference between what he extracts and what he bid, so he is motivated to extract the maximum the district will bear, and if his contract is short he has no reason to care whether the peasants can farm again next year. Squeeze the cultivator, and you also convert a fiscal instrument into a political one: over time the men who hold the farms accumulate local power, and the Ottoman provincial notables of the eighteenth century, the <span class="kt">ayan</span>, are exactly that transformation completed.` }
          ]
        },
        {
          heading: 'Stage three: measure it, and take it in silver',
          blocks: [
            { p: `The most sophisticated systems tried to make revenue predictable rather than negotiable. Akbar's <span class="kt">zabt</span> system, developed with his revenue minister, measured cultivated land, classified soils, assessed average yields and prices over a run of years, and fixed a cash demand per unit of land that a cultivator could know in advance. That is a serious piece of statistical administration for the sixteenth century, and its purpose was to remove the discretion in which intermediaries profit.` },
            { p: `In China, the late Ming <span class="kt">single whip</span> reform consolidated a tangle of separate taxes and labor obligations into a smaller number of payments made in silver. The Qing continued the simplification, freezing the head-tax quota and eventually merging the head tax into the land tax, which removed the incentive to conceal people from the census.` },
            { p: `In Russia, Peter I replaced the household tax with a <span class="kt">poll tax</span> levied on every male peasant, counted in a census, and used it to fund a standing army. It was highly effective at generating revenue and it deepened serfdom, because landlords were made responsible for delivering the tax of everyone on their land, which gave them both a reason and a legal instrument to keep the peasants there.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: taxing in silver tied Chinese peasants to a mine in Peru',
              html: `China's shift to silver payments created enormous demand for a metal China did not produce in quantity, and the supply came from Japan and, after the <span class="num">1570</span>s, from Spanish America, carried across the Pacific by the Manila galleons and around the world through Europe. That is the single most striking connection between Unit 3 and Unit 4: a tax reform in Beijing helped set the price of silver in Potosi and made the fortunes of Spanish American mining. It also created a vulnerability, since a state whose taxes are payable in a metal it must import has handed part of its fiscal stability to shipping routes it does not control, and disruptions to the silver flow in the <span class="num">1630</span>s and <span class="num">1640</span>s are part of the crisis in which the Ming fell.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Tax farming. <em>The mechanism is that the state auctions the right to collect a district's taxes, receives the bid in cash immediately, and needs neither collectors nor supervision, while the farmer's profit is whatever he can extract above his bid, which converts a revenue problem into an extraction incentive and, over time, into local political power for whoever holds the farms.</em>`,
        limit: `It trades the future for the present. Short contracts encourage stripping a district; long ones create hereditary local interests, and the Ottoman ayan of the eighteenth century are what the instrument produced when carried to its conclusion.`,
        comparison: `Against <em>Akbar's zabt</em>: measured land and fixed cash demand is the opposite bet, expensive to set up, requiring surveyors and records, and designed to remove exactly the discretion tax farming sells. One empire bought administrative capacity and one bought time.`
      },
      terms: [
        ['Tax farming', 'The sale of the right to collect a district&rsquo;s taxes, giving the state cash up front and the holder an incentive to extract the maximum.'],
        ['Iltizam and malikane', 'The Ottoman forms of tax farming, the second sold for the holder&rsquo;s lifetime from 1695.'],
        ['Zabt', 'The Mughal revenue system of measured land and assessed average yields, fixing a predictable cash demand per unit of land.'],
        ['Single whip reform', 'The late Ming consolidation of taxes and labor obligations into payments made in silver.'],
        ['Poll tax', 'Peter I&rsquo;s per-male-peasant tax funding the standing army, which deepened serfdom by making landlords responsible for collection.'],
        ['Ayan', 'The Ottoman provincial notables who emerged from tax farming as a durable local power in the eighteenth century.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'legitimacy',
      num: '04',
      accent: 'oxide',
      name: 'Legitimacy You Can Stand Inside',
      navLabel: 'Legitimacy in stone',
      dates: 'c. 1550 to 1700 &nbsp;·&nbsp; Domes, squares, tombs, palaces',
      thesis: `Rulers spent astonishing sums on buildings because a building is an argument that works on people who cannot read, will never meet the ruler, and use it every week.`,
      parts: [
        {
          heading: 'The mosque complex as a welfare state',
          blocks: [
            { p: `The <span class="kt">Suleymaniye</span> in Istanbul, built for Suleiman by the architect Sinan in the <span class="num">1550</span>s, is usually taught as a beautiful mosque. It is more useful understood as an institution. The complex included the mosque itself and, around it, a hospital, a public kitchen feeding the poor, schools, a caravanserai, baths and a medical college, funded in perpetuity by an endowment of rents from shops and villages.` },
            { p: `Consider what that does politically. It provides services the state would otherwise have to organize, in the ruler's name, permanently, without further expenditure from the treasury. It employs teachers, doctors and cooks who depend on the endowment. It gives ordinary people a daily, tangible reason to associate the dynasty with charity rather than with taxation. And it does all of this in a building that dominates the skyline of the capital. Legitimacy purchased once and delivered for centuries is far better value than a campaign, which is why every empire in this unit built like this.` },
            { p: `The same logic explains Isfahan's great square under Abbas I, framed by a royal mosque, a court mosque, the palace gate and the entrance to the bazaar, so that religion, dynasty, government and commerce faced each other across a single space that the public used. And it explains the Taj Mahal, a mausoleum for an emperor's wife that also announces, in white marble at enormous cost and with an entire garden complex around it, that the dynasty's dead are permanent.` }
          ]
        },
        {
          heading: 'Ritual, distance and visibility',
          blocks: [
            { p: `Buildings work with ceremony, and each empire calibrated the ruler's visibility differently, which is itself worth comparing. Ottoman sultans after the fifteenth century became progressively less visible, secluded within Topkapi behind layers of court protocol, which made access to them a scarce resource distributed by the household. Mughal emperors did the opposite: the ruler appeared daily at a palace window to be seen by the public, a practice that made the emperor's continued existence and health a matter of public knowledge and turned attendance into an act of loyalty.` },
            { p: `The Qing emperors toured. Kangxi and Qianlong both made repeated grand progresses through the southern provinces, the wealthy and culturally self-confident heartland of Chinese elite society, and had the tours documented in enormous painted scrolls. A Manchu ruler traveling in state through Chinese cities, patronizing Chinese scholarship, sacrificing at Chinese sites and being painted doing so, is making an argument that his rule is legitimate in Chinese terms.` },
            { p: `And in France, Louis XIV moved his court to Versailles and required the high nobility to attend it, where their status depended on proximity to the king's person and their fortunes were consumed by the cost of living there. That is a building used as a political trap: the aristocracy that had rebelled within living memory was housed, honored, indebted and neutralized in one place. Whenever a prompt asks how rulers used architecture to legitimize authority, Versailles is worth citing not for its beauty but for what it did to the people inside it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat these as vanity projects with a legitimizing side effect, and do not treat "divine right" as a synonym for legitimacy generally. Divine right is a specific European doctrine holding that a monarch's authority comes directly from God and is not accountable to subjects or clergy. An Ottoman sultan claimed to be caliph and protector of the holy cities; a Mughal emperor used Persianate and Islamic imagery of sacred kingship while presiding over a multi-faith court; a Qing emperor held the Mandate of Heaven and simultaneously patronized Tibetan Buddhism to legitimize rule over Mongols and Tibetans. Naming the specific claim each ruler made, rather than applying one label to all of them, is the difference between a comparison and a generalization.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The endowed complex. <em>The mechanism is that a mosque built with a hospital, kitchen, school and baths, funded in perpetuity by an endowment of rents, delivers public services in the dynasty's name forever without further treasury spending, employs a body of people who depend on it, and gives ordinary subjects a weekly reason to associate the ruler with charity rather than with taxation.</em>`,
        limit: `Legitimacy in stone is expensive, immobile and slow. It works on the population near it and does nothing for a distant frontier province, which is why it accompanies rather than replaces the elites and revenue systems in sections 02 and 03.`,
        comparison: `Against <em>Versailles</em>: the Ottoman and Safavid complexes bought public consent by giving something to the people who used them, while Versailles bought aristocratic obedience by making the nobility live where the king could watch them. Same instrument, two entirely different targets.`
      },
      terms: [
        ['Suleymaniye', 'Sinan&rsquo;s mosque complex for Suleiman, with hospital, kitchen, schools and baths endowed in perpetuity.'],
        ['Waqf endowment', 'The permanent charitable trust of rents that funded such complexes, delivering services in a ruler&rsquo;s name without recurring treasury cost.'],
        ['Naqsh-e Jahan', 'Isfahan&rsquo;s planned royal square, framed by mosque, palace and bazaar, staging religion, dynasty, government and commerce in one space.'],
        ['Divine right', 'The specific European claim that a monarch&rsquo;s authority comes directly from God and is not accountable to subjects or clergy.'],
        ['Imperial tour', 'The Qing progresses through the southern provinces, documented in painted scrolls, arguing for Manchu legitimacy in Chinese terms.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'bargain',
      num: '05',
      accent: 'gold',
      name: 'The Bargain With Local Elites',
      navLabel: 'The bargain',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Zamindars, notables, gentry, chiefs',
      thesis: `No empire in this unit reached the village. Every one of them reached a local man who reached the village, and the terms of that arrangement are the real constitution of an early modern empire.`,
      parts: [
        {
          heading: 'Who was actually standing in the field',
          blocks: [
            { p: `<b>Mughal zamindars.</b> Hereditary local landholders with a customary right to collect revenue in their district and keep a share. They had their own armed retainers and their own local standing, and the empire dealt with them because it had to: an imperial officer rotated between provinces could not know which fields belonged to whom, and the zamindar did.` },
            { p: `<b>Ottoman provincial notables and communal leaders.</b> Alongside the tax farmers, the empire recognized the religious heads of non-Muslim communities as responsible for their communities' internal law, taxation and order, an arrangement later formalized under the name <span class="kt">millet</span>. It is worth being precise here, because the classic textbook description of a tidy millet system is largely a nineteenth-century formalization projected backward; in this period the arrangements were more ad hoc and varied by city and community. What is certain is the principle: govern religious minorities through their own leaders and hold those leaders responsible.` },
            { p: `<b>Chinese gentry.</b> Below the level of the county magistrate, who was an outsider posted away from his home region and rotated regularly, the actual work of local order, dispute settlement, famine relief, public works and moral supervision was done by the local degree-holding gentry, who were not officials at all. The Qing state administered an empire of two hundred million with a strikingly small formal bureaucracy because most of the governing was done by men it did not employ.` },
            { p: `<b>Rajput rulers, tribal chiefs, Cossack hosts, Balkan and Anatolian notables.</b> Everywhere the pattern repeats: an existing local power keeps its position and its people in exchange for delivering revenue, order and, when required, soldiers.` }
          ]
        },
        {
          heading: 'Why this was the sensible choice, and what it cost',
          blocks: [
            { p: `The advantages are decisive at the scale of section 01. It is nearly free. It works immediately, with no need to build institutions or train personnel. It uses knowledge the center cannot acquire, since only a local man knows which family holds which plot and who is lying about the harvest. And it converts a potential enemy into a stakeholder, because a zamindar or a notable confirmed in his position now has an interest in the empire's continuation.` },
            { p: `The costs are structural and arrive later. The intermediary takes a permanent share, so the state never receives what the countryside pays. The state's information about its own territory is filtered through the person with the greatest interest in distorting it. And the arrangement is self-strengthening in the wrong direction: every year the intermediary holds the position, his local authority deepens and the center's ability to replace him weakens. When central power falters, these men do not disappear; they become the government, which is exactly what happened across the eighteenth century from the Ottoman provinces to post-Mughal India.` }
          ]
        }
      ],
      useThis: {
        tool: `Ruling through intermediaries. <em>The mechanism is that the empire delegates collection and order to a local elite that already holds the ground and already possesses the knowledge the center cannot acquire, converting a potential rival into a stakeholder at almost no cost, in exchange for a permanent share of the revenue and a permanent gap in the state's information about itself.</em>`,
        limit: `Delegation compounds. Each year of holding the position deepens the intermediary's local authority and weakens the center's ability to replace him, so when central power falters the intermediaries become the state.`,
        comparison: `Against the <em>service elites</em> in section 02: the two halves of the same problem, imported servants with no local base to hold the center, local notables with every local base to hold the ground, and an empire is the working relationship between them.`
      },
      terms: [
        ['Zamindar', 'A hereditary Mughal local landholder with the customary right to collect revenue and a share of it, and the empire&rsquo;s real point of contact with the village.'],
        ['Millet', 'The arrangement by which Ottoman non-Muslim communities were governed through their own religious leaders; the tidy system described in textbooks is a later formalization.'],
        ['Gentry', 'The Chinese degree-holding local elite who performed most local governance without holding office, allowing a small formal bureaucracy to administer a vast population.'],
        ['County magistrate', 'The lowest imperial official in Qing China, posted outside his home region and rotated, and dependent on local gentry to function.'],
        ['Stakeholder', 'A local power given an interest in the empire&rsquo;s continuation by being confirmed in its position, the intended effect of the bargain.']
      ]
    },

    // ── 06 ────────────────────────────────────────────────────────────────────
    {
      id: 'cracks',
      num: '06',
      accent: 'rust',
      name: 'Where the Machinery Cracked',
      navLabel: 'Where it cracked',
      dates: 'c. 1600 to 1750 &nbsp;·&nbsp; Incentives, entrenchment, squeeze',
      thesis: `The eighteenth-century troubles of these empires were not moral failures. They were the predictable consequences of the arrangements in sections 02, 03 and 05, arriving on schedule.`,
      parts: [
        {
          heading: 'Four cracks, each traceable to a design choice',
          blocks: [
            { p: `<b>Service elites became hereditary interests.</b> Section 02 explained why. The janissaries are the sharpest case: a corps designed to have no attachments became a hereditary body with commercial interests, resistant to military reform precisely because reform threatened its position, and capable of deposing sultans who pushed too hard.` },
            { p: `<b>Tax farming hollowed out the fiscal relationship.</b> Section 03 explained the incentive. Add the lifetime and eventually inheritable farms and the state has sold its own revenue stream in advance, so that in a crisis it has nothing left to mortgage. Meanwhile the holders have become a provincial elite with armed retainers.` },
            { p: `<b>Assignments outran revenue.</b> The Mughal case in the Topic 3.1 chapter: more ranks awarded than jagirs could pay, officers squeezing cultivators to make up the shortfall, and the loyalty the system was designed to buy becoming unaffordable at exactly the moment when war made it essential.` },
            { p: `<b>External shocks met these weaknesses.</b> The seventeenth century brought a run of them across Eurasia: a colder climate phase with poor harvests, disrupted silver flows, epidemic disease, and expensive wars. States with sound finances survived such a decade; states that had already sold their future revenue did not.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Resist the decline narrative, particularly for the Ottomans. The old account of a long slide from Suleiman's death in <span class="num">1566</span> has been substantially revised: historians now describe a state that changed shape, moving from timar-holding cavalry to tax farming and provincial notables, from an expanding conquest state to a defensive one, and doing so while remaining a major power into the nineteenth century. Adaptation that a later observer dislikes is not decay. The stronger analytical move, which works for the Ottomans, the Mughals and the Qing alike, is to ask what problem each change solved at the time and what it cost later, which is exactly what the rest of this chapter has been doing.`
            } }
          ]
        },
        {
          heading: 'The one comparison to carry out of this chapter',
          blocks: [
            { p: `Every empire in Unit 3 faced the same choice and made a different mixture of it, and the mixture is the comparison. Direct rule buys control and costs cash; indirect rule saves cash and costs control. Service elites buy loyalty and become aristocracies; local elites buy immediate function and become rivals. Land assignments field an army without money and produce cavalry when the age wants infantry; tax farming produces money now and sells the future.` },
            { p: `None of these is a mistake. Each is a rational answer to a genuine constraint, and each carries its cost forward. If you can write one sentence naming the choice, the benefit and the delayed cost, you can answer almost any administration prompt in this unit, including one about an empire this chapter has not mentioned.` }
          ]
        }
      ],
      useThis: {
        tool: `Delayed costs. <em>The mechanism is that every administrative shortcut, selling collection rights, paying in land, delegating to local elites, buys a real benefit immediately and transfers a cost to a later decade, so an empire that looks efficient in one generation is frequently paying for those decisions in the next.</em>`,
        limit: `Do not turn this into a decline story. Adaptation is not decay, and the same institutions that look like weaknesses from the center often look like functioning regional government from the province.`,
        comparison: `Against <em>Song China</em> and <em>Europe</em>: three ways of paying for a state, an examined salaried bureaucracy, land assignments and tax farming, and a representative assembly granting taxes. Each buys revenue and each creates a different political actor, an official class, a landed nobility, or a parliament.`
      },
      terms: [
        ['Entrenchment', 'The conversion of a granted office into an inheritable position, the standard fate of every service elite in this unit.'],
        ['Fiscal mortgage', 'The sale of future revenue for cash now, which leaves a state with nothing to raise in a later crisis.'],
        ['Jagir crisis', 'The Mughal mismatch between ranks awarded and revenue assignments available to pay them, which drove extraction and disloyalty.'],
        ['Seventeenth-century crisis', 'The cluster of climate, fiscal, epidemic and military shocks across Eurasia in the 1600s that tested every state&rsquo;s finances at once.'],
        ['Decline narrative', 'The retrospective story of steady decay, which modern scholarship on the Ottomans in particular has largely replaced with an account of adaptation.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the specific evidence, and the reason. The last one is the general form, and it will answer administration prompts about empires this chapter never mentions.`,
    pairs: [
      {
        category: 'Elites',
        title: 'Import your servants or rank the ones you have',
        body: `The Ottomans levied Christian boys through the devshirme and made them kul of the sultan's household, with no lineage, land or clients; Abbas I built ghulam regiments from Caucasian converts for the same reason. Akbar took the warrior aristocracy he already had, Turkish, Persian, Afghan, Indian Muslim and Rajput, and ranked every member of it on a non-hereditary mansab that fixed his pay and his cavalry obligation. The difference exists because of what each state could get away with: the Ottomans held a subject Christian population from which children could be levied, while a Mughal dynasty ruling a Hindu majority needed that majority's warrior elite inside the system rather than outside it.`
      },
      {
        category: 'Revenue',
        title: 'Tax farming and zabt are opposite bets on the same problem',
        body: `Ottoman iltizam, and from 1695 lifetime malikane farms, sold the right to collect a district's taxes for cash up front, requiring no collectors and no supervision, and leaving the holder to extract whatever he could above his bid. Akbar's zabt measured cultivated land, classified soils, assessed average yields and prices over years, and fixed a predictable cash demand. The difference exists because the two states were buying different things: the Ottomans bought immediate liquidity for war and paid for it with extraction and, eventually, a provincial notable class, while the Mughals bought administrative capacity and paid for it with the cost of surveyors, records and the officials to keep them.`
      },
      {
        category: 'Legitimacy',
        title: 'A mosque complex and a palace are both political instruments aimed at different people',
        body: `The Suleymaniye combined a mosque with a hospital, a public kitchen, schools and baths, endowed in perpetuity, so that the dynasty delivered visible charity to ordinary subjects forever at no recurring cost to the treasury. Versailles concentrated the French high nobility around the king's person, where status depended on proximity and fortunes were consumed by attendance. The difference exists because the two rulers faced different threats: an Ottoman sultan needed the consent of a vast and diverse subject population, while Louis XIV needed to neutralize an aristocracy that had rebelled within living memory.`
      },
      {
        category: 'The general form',
        title: 'Name the choice, the benefit and the delayed cost',
        body: `Direct rule buys control and costs cash; indirect rule saves cash and costs control. Service elites buy loyalty and become aristocracies. Land assignments field an army without coin and produce cavalry in an age that wants drilled infantry. Tax farming produces money now and sells the future. Every empire in Unit 3 chose a mixture, none of the choices was irrational, and every one of them transferred a cost to a later generation. Write a comparison in that form and it will work for the Ottomans, the Mughals, the Qing, Russia, or an empire you were not expecting to be asked about.`
      }
    ]
  }
};
