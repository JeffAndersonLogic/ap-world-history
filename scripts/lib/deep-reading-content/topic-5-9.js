'use strict';

/**
 * Topic 5.9, Society and the Industrial Age: the deep reading.
 *
 * Why this exists. Three success criteria: the two new classes with a defining
 * characteristic each and the observation that middle-class status came from
 * business, skill and salary rather than title or land; then the contrast
 * between wage-earning working-class women and children and household-focused
 * middle-class women, with an explicit demand for WHY each class's economic
 * situation produced that difference, plus separate spheres and its effect on
 * education and the professions; then at least three of the urban challenges
 * with an explanation of why unplanned growth produced each, naming cholera and
 * typhoid in tenements without water or sewers.
 *
 * THIS CHAPTER IS LIVED EXPERIENCE. Per the split documented in topic-5-6.js:
 * 5.6 holds ideologies and legislation, 5.8 holds movements, and this one holds
 * what daily life was actually like. So the sanitary CRISIS is here and the
 * sanitary MOVEMENT is in 5.8; the ideologies that argued about class are in
 * 5.6 and what the classes ate, wore and did is here. Cross-reference rather
 * than restate.
 *
 * Three things carried deliberately:
 *
 *   1. The criteria say WHY in capitals, in effect, so section 02 answers the
 *      gender question with an economic mechanism: separate spheres is an
 *      ideology a household can only afford above a certain income, which is
 *      why it describes middle-class life and prescribes working-class life.
 *   2. Section 03 explains the sanitary crisis as arithmetic, not squalor. A
 *      city built for 25,000 does not have pipes for 300,000, and the disease
 *      follows from that rather than from anyone's habits.
 *   3. Cholera gets its mechanism, because water-borne transmission is exactly
 *      what makes a city with no sewers lethal, and a student who has it can
 *      answer the criterion instead of asserting it.
 */

module.exports = {
  topicKey: 't5-9',
  slug: 'topic-5-9-society-and-the-industrial-age',
  sourceFile: 'deep-reading-topic-5-9-society-and-the-industrial-age.html',
  lessonFile: 'lesson-5-9-society-and-the-industrial-age.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.9: A City Built for a Quarter of Itself',
  eyebrow: 'Topic 5.9 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'A City Built for a Quarter of <em>Itself</em>',
  deck: `Manchester grew twelvefold in two generations, into pipes, drains and streets laid out for a market town. This chapter is what that was like to live in: the two classes industrialization created and what separated them at the dinner table rather than in theory, why the same century sent one woman to a mill at five in the morning and told another that leaving the house was improper, and why the water killed people.`,
  meta: ['Four sections', 'Two classes, gender by class, the city, the water', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.9 &nbsp;·&nbsp; A City Built for a Quarter of Itself &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the two classes as lived positions rather than as the categories Topic 5.6 argues about. Section 02 answers the question the success criteria press hardest, why the same ideology produced opposite lives in different classes. Sections 03 and 04 are the city and the water, which is where three of the named challenges get their explanation.`,
    steps: [
      `<b>01 Two classes:</b> what actually separated a clerk from a spinner, and why the middle class was new.`,
      `<b>02 Separate spheres:</b> an ideology you had to be able to afford.`,
      `<b>03 The city:</b> why unplanned growth produces housing shortage, filth and crime as arithmetic.`,
      `<b>04 The water:</b> cholera, typhoid, and the mechanism that made a crowded city lethal.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'twoclasses',
      num: '01',
      accent: 'gold',
      name: 'What Actually Separated Them',
      navLabel: 'Two classes',
      dates: 'c. 1800 to 1900 &nbsp;·&nbsp; Middle and working',
      thesis: `The Topic 5.6 chapter defines the two classes by their relationship to capital, which is correct and abstract. Lived from the inside, the line was drawn by something simpler: whether your income was predictable, and whether you could stop working without your household collapsing within a fortnight.`,
      parts: [
        {
          heading: 'The middle class, and why it was new',
          blocks: [
            { p: `The <span class="kt">middle class</span> ran from factory owners, merchants and bankers at the top through engineers, doctors, lawyers, managers, shopkeepers and, at the bottom edge, clerks and schoolteachers. What united a range that wide was the source of the income: <b>business, qualification and salary</b> rather than an inherited title or rents from land.` },
            { p: `That is genuinely new and it is the point the success criteria want. In the societies of every earlier unit, the people at the top held their position by birth and by land, and status was largely fixed at birth. A cotton manufacturer richer than a duke, or a physician with no land at all and a professional income, did not fit that scheme, and the nineteenth century is partly the story of this class acquiring the political weight to match its money, which is what the Reform Act of <span class="num">1832</span> in Topic 5.6 concedes.` },
            { p: `Its markers were visible and deliberate: a house away from the works and eventually in a suburb reachable by railway, at least one domestic servant as the minimum sign of respectability, a parlor for receiving visitors, schooling for the children, church attendance, and a wife who did not earn. That last one is section 02, and it is the sharpest marker of all.` },
            { p: `And a warning about the phrase. Middle class in nineteenth-century Britain does not mean the middle of the income distribution, which would be a well-paid manual worker. It means a position defined by the source of income and by a set of respectability markers, and a clerk earning less than a skilled engineer would count himself in it and the engineer out of it, which tells you the category is social as much as economic.` }
          ]
        },
        {
          heading: 'The working class, and what insecurity means',
          blocks: [
            { p: `The <span class="kt">working class</span> sold labor for wages, in mills, mines, workshops, docks, building sites and, for the largest single group of women, other people's houses. The Topic 5.3 chapter has the hours and the danger; what belongs here is what the wage did and did not buy.` },
            { p: `<b>Insecurity is the defining feature</b>, more than the level of the wage. Work was seasonal, trade was cyclical, and a downturn such as those of the <span class="num">1840</span>s put whole towns out of work at once. An injury ended earnings immediately, and the machine that caused it carried no liability. There was no sick pay, no pension, and after <span class="num">1834</span> the only public provision was the workhouse of Topic 5.6, deliberately made worse than the worst job. So a household that was comfortable in a good year was destitute within weeks of a bad one, and this is why so much working-class organizing, described in Topic 5.8, went into friendly societies, burial clubs and mutual insurance rather than into politics.` },
            { p: `Household economy followed from that. A working-class family needed multiple earners, which is why women and children worked, and the household budget went overwhelmingly on food, above all bread, with rent next, leaving nothing to absorb a shock. Diet was monotonous and often adulterated, since bread was bulked with alum and other additives before food regulation. Everyone in a family shared one or two rooms, and possessions could go to the pawnshop on Monday and be redeemed on payday.` },
            { p: `And the class was internally graded in ways contemporaries took very seriously. A skilled engineer, printer or mule spinner in steady work, with a union and a friendly society, lived a life closer to a clerk's than to a casual dock laborer's, and that stratum, sometimes called the labor aristocracy, is where the unions of Topic 5.8 were built.` }
          ]
        }
      ],
      useThis: {
        tool: `Security as the real class line. <em>The mechanism is that a predictable income lets a household plan, save, insure and educate its children, while a household whose earnings stop the day the work stops must spend everything on food and rent and can be destitute within a fortnight, so the difference that shapes daily life is less the size of the income than whether it survives a bad month.</em>`,
        limit: `Both classes were internally graded, and a clerk on a small salary and a skilled spinner on a good wage lived similarly while placing themselves on opposite sides of the line, which is why respectability markers mattered so much.`,
        comparison: `Against the <em>casta system</em> in Topic 4.7: that hierarchy assigned position by ancestry recorded at baptism, and this one by income and occupation, in principle changeable. In practice the markers of respectability, dress, housing, accent, a wife who did not work, policed the boundary nearly as effectively, which is worth saying rather than treating openness as achieved.`
      },
      terms: [
        ['Middle class', 'The class whose income came from business, qualification or salary rather than inherited title or land.'],
        ['Working class', 'The class living on wages, defined in daily life less by the level of the wage than by its insecurity.'],
        ['Respectability', 'The visible markers, servant, parlor, schooling, a non-earning wife, by which middle-class status was claimed and policed.'],
        ['Friendly society', 'A mutual insurance club for sickness, burial and unemployment, the working-class answer to an economy with no safety net.'],
        ['Labor aristocracy', 'The skilled, steadily employed workers whose conditions and organization set them apart within the working class.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'spheres',
      num: '02',
      accent: 'rust',
      name: 'An Ideology You Had to Be Able to Afford',
      navLabel: 'Separate spheres',
      dates: 'c. 1820 to 1900 &nbsp;·&nbsp; Gender by class',
      thesis: `The nineteenth century held, loudly, that a woman&rsquo;s place was the home. The same century employed enormous numbers of women in mills, mines and other people&rsquo;s kitchens. Both are true because the doctrine described the lives of households that could afford it and was used to judge the households that could not.`,
      parts: [
        {
          heading: 'What the doctrine said, and what it required',
          blocks: [
            { p: `<span class="kt">Separate spheres</span> held that men and women were suited by nature to different domains: the man to the public world of work, commerce and politics, the woman to the private world of household, children and moral guardianship. The home was described as a refuge from a competitive commercial world, and the woman was its keeper, which gave her genuine authority over household management, spending, the servants and the children's early education while removing her from anything outside the door.` },
            { p: `Now the economics, which is what the success criteria are asking for when they demand the why. This arrangement requires a household that can live on one income. That is the whole explanation. A family that can survive on a man's earnings can withdraw a woman's from the market, and doing so becomes the visible proof that it can, which converts a non-earning wife into the single most legible marker of middle-class status. It is expensive, and being expensive is the point.` },
            { p: `A working-class household could not afford it. It needed every earner, so women worked in textile mills, in workshops and the sweated trades, in agriculture at harvest, underground in mines until the ban of <span class="num">1842</span>, and above all in <b>domestic service</b>, which was the largest single occupation for women in Britain across the century. Married women often withdrew from full-time factory work when children arrived and took in laundry, lodgers, sewing or childminding instead, which is invisible in the census and was real income.` },
            { p: `So the same ideology produced opposite lives, and produced a judgment on top of that. Working-class women were criticized for neglecting a domestic role their household economy made impossible, and the criticism came from reformers, clergy and inspectors who often sincerely wanted to help. Naming that double bind is a strong move in an essay: the doctrine did not merely fail to describe working-class life, it supplied the vocabulary in which working-class life was found wanting.` }
          ]
        },
        {
          heading: 'What it cost, and what it built',
          blocks: [
            { p: `<b>The costs to middle-class women</b> were concrete. Girls' education emphasized accomplishments, music, drawing, French, over the classics and mathematics that qualified a boy for university and a profession. Professions were closed: medicine, law, the church, the universities, and admission came only late in the century and against organized resistance. Under coverture, described in Topic 5.1, a married woman's property and earnings were her husband's until the Acts of <span class="num">1870</span> and <span class="num">1882</span>. Economic dependence was total, which made a bad marriage inescapable, since divorce was practically unavailable and custody went to fathers.` },
            { p: `<b>And what it built</b>, which the flat version of this story leaves out. Domestic authority was real authority, over a household budget and a staff. Philanthropy, charity visiting, Sunday schools and moral reform were defined as extensions of the domestic sphere and were therefore permitted, and they took middle-class women into slums, workhouses and prisons, gave them organizational experience, and produced the campaigning networks that the Topic 5.8 chapter's temperance and abolition movements ran on. The WCTU's slogan of home protection is exactly this move: accept the sphere and argue that protecting the home requires acting outside it. That is how a doctrine of confinement generated a generation of organizers.` },
            { p: `<b>Children</b> divide the same way and for the same reason. Middle-class childhood became a protected stage with schooling, toys and sentiment attached to it, which is affordable when a child does not need to earn. Working-class children worked, in mills and mines as Topic 5.3 describes, and then in street trades, workshops and domestic help, and their earnings were a necessary part of the household budget rather than pocket money. The compulsory schooling of Topic 5.8 changed that by making it illegal, which cost poor families income and was resented for that reason before it was welcomed.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that industrialization pushed women out of work and into the home. Most women worked before, during and after it, and what changed was the <b>location and terms</b>. In the household economy that preceded the factory, described in Topic 5.3, women&rsquo;s work was productive, took place at home and was compatible with childcare. The factory separated the workplace from the home, which made those two things incompatible for the first time and forced a choice no earlier economy had required. Middle-class households answered it by removing women from paid work; working-class households answered it by combining wage work with domestic work, or by taking in work that could be done at home for worse pay. One economic change, two answers, and the difference is what the household could afford.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Separate spheres as a status purchase. <em>The mechanism is that withdrawing a woman&rsquo;s earnings from a household is only possible above a certain income, so a non-earning wife becomes visible proof that a family has reached it, which turns a claim about female nature into a marker of class position and explains why the doctrine was asserted most loudly by the people who could just barely afford it.</em>`,
        limit: `It was an ideal rather than a description even among the middle class, since widows, unmarried women and the wives of struggling shopkeepers worked, and much of that work was concealed precisely because the ideal existed.`,
        comparison: `Against <em>colonial honor</em> in Topic 4.7: there a family&rsquo;s standing was located in the sexual conduct of its women, and here in the fact that its women did not work, and in both cases a household&rsquo;s public position is measured by the constraint it can impose on the women in it. Two centuries apart, and the same instrument.`
      },
      terms: [
        ['Separate spheres', 'The doctrine assigning men the public world and women the domestic, describable only in households that could live on one income.'],
        ['Domestic service', 'The largest single occupation for women in nineteenth-century Britain, and the labor that made middle-class domesticity possible.'],
        ['Cult of domesticity', 'The elevation of the home as a moral refuge and of the woman as its guardian, and a claim to social status.'],
        ['Home protection', 'The argument that defending the home requires acting outside it, which took women from domesticity into organized politics.'],
        ['Protected childhood', 'The middle-class idea of childhood as a stage for schooling and play, affordable only where a child need not earn.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'city',
      num: '03',
      accent: 'iron',
      name: 'The Arithmetic of an Unplanned City',
      navLabel: 'The city',
      dates: 'c. 1800 to 1875 &nbsp;·&nbsp; Housing, filth, crime',
      thesis: `The problems of the industrial city were not caused by the character of the people in it, which is what contemporaries mostly said. They were caused by a rate of growth that no existing infrastructure or government could absorb, and each named challenge follows from that arithmetic.`,
      parts: [
        {
          heading: 'The numbers, and what they make impossible',
          blocks: [
            { p: `Manchester went from roughly <span class="num">25,000</span> to about <span class="num">300,000</span> between <span class="num">1772</span> and <span class="num">1850</span>; Britain passed from a majority rural to a majority urban population across the same century, the first country in history to do so. Migration came from the countryside, pushed by enclosure and by agricultural change and pulled by wages, and from Ireland in enormous numbers after the famine of the <span class="num">1840</span>s.` },
            { p: `Now take the challenges the success criteria name and derive each one, which is what they are asking for.` },
            { p: `<b>Housing shortage.</b> Population grew far faster than dwellings could be built, so rents rose, and what got built was built to the cheapest specification the market would bear, since there were no building regulations to set a floor. Hence <b>back-to-backs</b>, houses sharing three walls with neighbors so that only one side has windows and no through ventilation is possible; hence courts and cellars, with families living below street level in rooms that flooded; hence overcrowding measured in families per room rather than rooms per family. Overcrowding is not a preference, it is what happens when the number of people divided by the number of rooms produces that answer.` },
            { p: `<b>Insufficient infrastructure.</b> A town of 25,000 has pipes, drains, wells and streets sized for 25,000. Multiply the population by twelve and there is no mechanism by which the pipes multiply too, because water was supplied by private companies to customers who could pay, drainage was a parish matter, and the municipal government was a corporation designed for a market town, in some cases with no authority to levy for such works at all. The reformed municipal corporations from <span class="num">1835</span> and the public health legislation from <span class="num">1848</span> are the beginning of building a government capable of the problem, and they arrive decades after the problem.` },
            { p: `<b>Pollution and filth.</b> The coal smoke is in Topic 5.5. On the ground it was human and animal waste: privies shared by dozens of households, cesspools under floors, middens in courts, horse dung in the streets in enormous daily volumes, slaughterhouses and tanneries among the dwellings, and no collection service. This is the immediate setting for section 04.` },
            { p: `<b>Crime, and how to handle the claim.</b> Recorded crime rose, and so did the number of things counted as crime, the number of police counting them, and the population being counted, so the statistics are measuring several changes at once. What is solid is that a city of strangers works differently from a village where everyone is known, since anonymity weakens informal control, and that a population with no savings and no relief but the workhouse will produce theft in a downturn. The response was institutional: the Metropolitan Police from <span class="num">1829</span> and forces elsewhere after, plus prisons built on new principles. Contemporaries mostly read urban crime as moral degeneration among the poor, and that reading is itself evidence about the observers, which is the sort of distinction worth drawing in an essay.` }
          ]
        }
      ],
      useThis: {
        tool: `Growth outrunning institutions. <em>The mechanism is that housing, water, drainage, policing and government are built to the scale of an existing population and can only be extended by decisions someone has the authority and money to make, so a city that multiplies in a generation is by definition short of all of them at once, and the shortfall appears as overcrowding, filth, disease and disorder regardless of the character of the people arriving.</em>`,
        limit: `Speed explains the shortfall and not its distribution. Who lived in the cellars and who moved to a suburb was decided by income and by whose interests the local corporation served, so the crisis fell unequally by design as well as by arithmetic.`,
        comparison: `Against the <em>great cities</em> of Topic 1.1 and 2.1: Song Kaifeng, Baghdad and Constantinople reached comparable sizes with functioning water supply, markets and sanitation, because they grew over centuries under states that built and maintained them. The variable is not size but the rate of growth relative to the authority capable of building for it.`
      },
      terms: [
        ['Urbanization', 'The shift to a majority urban population, which Britain completed first across the nineteenth century.'],
        ['Back-to-back housing', 'Dwellings sharing three walls, with windows on one side only and no through ventilation, built where no regulation set a floor.'],
        ['Municipal corporation', 'The town government, in many cases designed for a market town and lacking the authority to build for an industrial city.'],
        ['Public Health Act', 'The 1848 legislation beginning the construction of a state capable of addressing the sanitary crisis.'],
        ['Anonymity', 'The condition of a city of strangers, which weakens the informal social control a village exercises.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'water',
      num: '04',
      accent: 'oxide',
      name: 'Why the Water Killed People',
      navLabel: 'The water',
      dates: '1831 to 1866 &nbsp;·&nbsp; Cholera and typhoid',
      thesis: `The success criteria ask specifically why overcrowded tenements without clean water or sewers produced cholera and typhoid, and the answer is a mechanism you can state in two sentences. Both diseases spread by the fecal-oral route, and a city with no sewers puts its waste into the water it drinks.`,
      parts: [
        {
          heading: 'The mechanism',
          blocks: [
            { p: `<b>Cholera</b> is caused by a bacterium ingested in contaminated water or food. It causes catastrophic diarrhea, and death follows from dehydration, sometimes within hours, which is why it terrified people in a way that endemic tuberculosis did not: a person could be well at breakfast and dead by evening. The infected material passes into the environment, and where sanitation is absent it reaches the water supply, which infects the next person. <b>Typhoid</b> works the same way, through contaminated water and food, more slowly.` },
            { p: `Now put that mechanism in the city of section 03. Waste goes into cesspools and privies. Cesspools leak into the ground, and courts drain into ditches and streams. Water is drawn from shallow wells in the same ground, or piped by private companies from rivers into which the city's sewage flows, sometimes downstream of the outfall. Households share a standpipe running for a few hours a day, so water is stored in open vessels in crowded rooms. Every one of those steps closes the loop between what leaves a body and what enters the next one, and the density means one case reaches hundreds.` },
            { p: `Then the perverse detail that makes this a good teaching case. Building proper sewers to flush waste out of the streets made the epidemics <b>worse</b> in the short term, because the sewers discharged into the Thames, and the Thames was where the water companies drew from. A sanitary improvement carried out under a wrong theory of disease moved the contamination from the street to the drinking supply, which is why the mechanism and not merely the effort is what has to be understood.` },
            { p: `Britain had major cholera epidemics in <span class="num">1831</span> to <span class="num">1832</span>, <span class="num">1848</span> to <span class="num">1849</span>, <span class="num">1853</span> to <span class="num">1854</span> and <span class="num">1866</span>, with tens of thousands of deaths each time, and the disease had arrived from South Asia along the trade and troop routes of an expanding empire, which is a connection to Unit 6 worth noting: the same integration that moved cotton moved pathogens, exactly as the Topic 2.6 chapter describes for an earlier network.` }
          ]
        },
        {
          heading: 'How it was worked out, and what fixed it',
          blocks: [
            { p: `The prevailing explanation was <b>miasma theory</b>, that disease arose from foul air given off by filth. It fitted the observation that disease was worst where the smell was worst, and it was wrong about the route while being right that filth was the problem, which is why sanitary reformers acting on it still did enormous good. The Topic 5.8 chapter has Chadwick, the reform movement and Bazalgette's sewers; what belongs here is how the mechanism itself was established.` },
            { p: `John Snow argued that cholera was water-borne and demonstrated it in <span class="num">1854</span> in Soho by mapping deaths against the pump they drew from, and, more powerfully, in a study comparing households in the same streets supplied by two different water companies, one drawing from a sewage-contaminated stretch of the Thames and one from further upstream, which found death rates several times higher among the first company's customers. That second study is the stronger evidence, because the households were otherwise similar in air, income and neighborhood, so the water was the only variable that differed. Snow did not persuade the profession immediately; germ theory, developed by Pasteur and Koch, who identified the cholera bacterium in <span class="num">1883</span>, supplied the explanation that made his result inevitable.` },
            { p: `What actually ended the epidemics was engineering: intercepting sewers that carried waste far downstream, filtered water supplied under pressure, and eventually municipal ownership of the supply. Bazalgette's London system, funded after the Great Stink of <span class="num">1858</span> made the river intolerable to Parliament itself, is the monument. Mortality in British cities improved substantially in the last third of the century, and clean water and sanitation are the largest identifiable reason.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: two water companies on the same street',
              html: `Snow&rsquo;s South London study is worth knowing as a model of historical and scientific reasoning at once, because it is a natural experiment. In many streets, two competing companies had laid pipes house by house years earlier, so neighboring households, alike in air, income, diet and neighborhood, received water from different sources without anyone having chosen it for a reason connected to health. When one company moved its intake upstream of the sewage outfall and the other did not, the difference in cholera mortality between customers was enormous. That is why it convinces where the Broad Street map alone does not: the map shows an association, and the water companies supply a comparison in which everything except the water is held constant.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The fecal-oral loop closed by density. <em>The mechanism is that cholera and typhoid pass out of one person and into the next through water, so a settlement that puts its waste into cesspools and rivers and draws its drinking water from the same ground and the same rivers connects every household&rsquo;s waste to every other household&rsquo;s cup, and packing people tightly enough turns a single case into an epidemic.</em>`,
        limit: `Sanitation was not the only factor in urban mortality, since diet, overcrowding, tuberculosis, occupational disease and infant mortality all contributed, and improvement came from several changes together.`,
        comparison: `Against the <em>Black Death</em> in Topic 2.6: both are epidemics that traveled along trade routes into dense settlements, and the difference is that this one was solved. Cholera was identified, explained and engineered out within a few decades by a society that could build sewers and afford them, which is industrial technology curing an industrial disease.`
      },
      terms: [
        ['Cholera', 'A water-borne bacterial disease killing by dehydration within hours, epidemic in Britain in 1831, 1848, 1853 and 1866.'],
        ['Fecal-oral route', 'Transmission from waste into drinking water and food, the mechanism that made an unsewered dense city lethal.'],
        ['Miasma theory', 'The belief that disease arose from foul air, wrong about the route, right that filth mattered, and the basis of early reform.'],
        ['John Snow', 'The physician who demonstrated water-borne cholera in 1854, decisively by comparing customers of two water companies.'],
        ['Intercepting sewer', 'The engineering solution carrying waste far downstream of the water intake, the change that ended the epidemics.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The second and third answer the two success criteria that ask you to explain why rather than to describe.`,
    pairs: [
      {
        category: 'Structure',
        title: 'Middle-class status came from a source of income, not an amount',
        body: `The middle class ran from factory owners and bankers through engineers, doctors and managers down to clerks and schoolteachers, united by income drawn from business, qualification or salary rather than inherited title or rent from land, which is a position the older order of birth and land had no category for. Its markers were deliberate and visible: a house away from the works, a servant, a parlor, schooling, and a wife who did not earn. Note that a clerk might earn less than a skilled engineer and count himself in it while placing the engineer out of it, which shows the category was social as much as economic. The working class sold labor for wages, and what defined its life was less the size of the wage than its insecurity, since injury or a downturn meant destitution within weeks and the only public provision after 1834 was a workhouse built to be worse than the worst job.`
      },
      {
        category: 'Causation',
        title: 'Separate spheres describes the households that could afford it',
        body: `The doctrine assigned men the public world and women the home, and withdrawing a woman&rsquo;s earnings requires a household able to live on one income, so a non-earning wife became the clearest visible proof that a family had reached that level. Working-class households needed every earner, so women worked in mills, workshops, agriculture, mines until the 1842 ban and above all in domestic service, the largest single female occupation of the century, and married women took in laundry, lodgers and sewing that the census never recorded. The same ideology therefore produced opposite lives and then supplied the vocabulary in which working-class women were criticized for neglecting a domestic role their household economy made impossible.`
      },
      {
        category: 'Mechanism',
        title: 'Every urban challenge follows from one rate of growth',
        body: `Manchester went from about 25,000 in 1772 to about 300,000 by 1850, and pipes, drains, streets and government do not multiply because people arrive. Housing shortage follows because dwellings cannot be built that fast, so rents rise and what gets built meets the cheapest specification a market with no building regulation will bear, which is what back-to-backs and inhabited cellars are. Infrastructure shortfall follows because water was sold privately to those who could pay, drainage was a parish matter, and the corporation was designed for a market town. Filth follows from privies shared by dozens of households with no collection service. And crime statistics rose alongside the number of police counting them, so read them as measuring several changes at once.`
      },
      {
        category: 'Evidence',
        title: 'Two water companies on one street settle the question',
        body: `Cholera and typhoid pass from one person to the next through contaminated water, so a city storing waste in leaking cesspools and drawing water from the same ground, or from a river below its own sewage outfall, connects every household&rsquo;s waste to every other household&rsquo;s cup, and density turns one case into an epidemic. The proof is Snow&rsquo;s South London study of 1854: competing companies had laid pipes house by house years earlier, so neighboring households alike in air, income and diet received water from different sources for no health-related reason, and when one company moved its intake upstream of the sewage and the other did not, mortality among the two sets of customers diverged enormously. Building sewers under miasma theory had first made things worse by discharging into the Thames the water companies drew from.`
      }
    ]
  }
};
