'use strict';

/**
 * Topic 5.8, Reactions to the Industrial Economy: the deep reading.
 *
 * Why this exists. The success criteria name a great deal of specific material:
 * why unions were illegal (Combination Acts, criminal conspiracy doctrine), the
 * Great Railroad Strike of 1877, Haymarket 1886 and Pullman 1894, the AFL's
 * choice of pure and simple unionism, and the comparative question of why
 * Britain produced a Labour Party and the United States did not. Then the
 * cotton-slavery connection and how abolitionists used it, British abolition in
 * 1833 effective 1838 with the Baptist War of 1831 to 1832, the Cotton Famine
 * of 1861 to 1865 restructuring global supply, and two further reform movements
 * from the Forster Act 1870, Chadwick 1842 and Bazalgette, and the WCTU 1874.
 *
 * THIS CHAPTER IS ORGANIZED ACTION. Per the split documented in topic-5-6.js:
 * 5.6 holds ideologies and legislation, 5.9 holds lived experience and the
 * physical city, and this one holds movements. So the sanitary CRISIS is 5.9's
 * and the sanitary MOVEMENT is here, and the Factory Acts are 5.6's while the
 * agitation that produced them is here.
 *
 * Three things carried deliberately:
 *
 *   1. The legal frame comes first, because every tactic in the chapter is a
 *      response to what the law permitted. A student who knows combination was
 *      criminal conspiracy can explain machine-breaking, the AFL and the Labour
 *      Party from one fact.
 *   2. The Britain/US divergence gets a real answer rather than a shrug: the
 *      sequence of franchise and industrialization, plus ethnic division and
 *      state violence, which the criteria implicitly ask for by posing it.
 *   3. The cotton connection is written as a structural argument, so abolition
 *      and industrialization stop being two separate topics that happen to share
 *      a century.
 */

module.exports = {
  topicKey: 't5-8',
  slug: 'topic-5-8-reactions-to-industrial-economy',
  lessonFile: 'lesson-5-8-reactions-to-industrial-economy.html',

  titleHtml: 'Illegal, Then <em>Inevitable</em>',
  deck: `For the first half of the century, workers who agreed among themselves to ask for more money were committing a crime. Everything about how labor organized, what it demanded and how violently it was met follows from that starting point. This chapter is the law, the strikes, why Britain got a workers&rsquo; party and America did not, and the other movements that grew out of the same dislocation, including the one that connected a Lancashire mill to a Mississippi plantation.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the legal frame, and it explains the tactics in every section after it. Section 02 is the three American strikes the success criteria name. Section 03 is the comparative question they pose. Section 04 is abolition and the other reform movements, which share a cause with the labor movement even though they look unrelated.`,
    steps: [
      `<b>01 Why organizing was a crime:</b> the Combination Acts, criminal conspiracy, and what that leaves a worker.`,
      `<b>02 Three strikes:</b> 1877, Haymarket 1886, Pullman 1894, and who broke them.`,
      `<b>03 Why Britain got a Labour Party and America did not:</b> four structural reasons.`,
      `<b>04 The other movements:</b> cotton and abolition, schooling, sewers, and temperance.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'illegal',
      num: '01',
      accent: 'gold',
      name: 'Agreeing to Ask for More Money Was a Crime',
      navLabel: 'The law',
      dates: '1799 to 1875 &nbsp;·&nbsp; Combination and conspiracy',
      thesis: `Start every answer about nineteenth-century labor here. An individual worker was free to negotiate and had no power; workers acting together had power and were breaking the law. That asymmetry is not incidental to the story, it is the story.`,
      parts: [
        {
          heading: 'Britain: the Combination Acts',
          blocks: [
            { p: `The <span class="kt">Combination Acts</span> of <span class="num">1799</span> and <span class="num">1800</span> made it a criminal offense for workers to combine to raise wages or shorten hours, with summary conviction before magistrates who were frequently employers themselves. They were passed during the war with revolutionary France, when any organization of working men was read as potential sedition, and they sat alongside older statutes and the common law.` },
            { p: `The logic offered was consistency with freedom of contract: a wage is a contract between an employer and an individual worker, and a combination interferes with that individual's freedom to make his own bargain. In practice the effect was to leave one party to that bargain able to wait and the other unable to eat, which is why the doctrine was defended most vigorously by people who never had to sell a day of labor.` },
            { p: `Repeal came in <span class="num">1824</span> and, after a wave of strikes, was narrowed in <span class="num">1825</span> so that unions could exist but almost any effective action, picketing, persuasion, obstruction, remained prosecutable as intimidation or as restraint of trade. Legal existence without lawful action is the position British unions occupied for fifty years. The Tolpuddle Martyrs, agricultural laborers transported to Australia in <span class="num">1834</span> for administering an unlawful oath rather than for the union itself, is the case that shows how prosecutors worked around the repeal. Full protection came only with the legislation of <span class="num">1871</span> and <span class="num">1875</span>, which legalized peaceful picketing and removed criminal conspiracy from trade disputes.` }
          ]
        },
        {
          heading: 'The United States: conspiracy in the courts',
          blocks: [
            { p: `The American version was judge-made rather than statutory. Under the doctrine of <b>criminal conspiracy</b>, courts held that workers combining to raise wages were conspiring to injure trade, a line running from the Philadelphia cordwainers' cases early in the century. <em>Commonwealth v. Hunt</em> in Massachusetts in <span class="num">1842</span> is the usual turning point, holding that a union was not unlawful in itself and that legality depended on its purposes and means, which opened a door and left judges holding the handle.` },
            { p: `And the instrument that mattered most came later: the <b>labor injunction</b>. A federal judge could order a strike to stop, on the grounds that it obstructed interstate commerce or the mails or damaged property, and a worker who continued was then in contempt of court, punishable immediately without a jury. That is how the Pullman strike in section 02 was broken. The Sherman Antitrust Act of <span class="num">1890</span>, written against corporate combinations, was applied to labor unions as combinations in restraint of trade, which is one of the sharper ironies in the unit.` },
            { p: `Now the consequence to carry into everything else. If organizing is criminal and there is no legal machinery for arbitration, the tactics available to workers are the ones that do not require legal standing: machine-breaking, as the Topic 5.3 chapter describes among the Luddites; friendly societies disguised as social clubs; petitions and mass movements such as Chartism; sudden unplanned strikes; and, where those failed, violence. Historians describing early labor as disorganized or riotous are frequently describing what the law had left available.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that unions were illegal because the state was hostile to workers as such, which is too blunt to be useful and cannot explain the Factory Acts of Topic 5.6 passing in the same decades. The doctrine that did the work was <b>freedom of contract</b>, and it was applied with genuine consistency: it also struck down laws protecting workers, on the ground that a maximum-hours statute interfered with an adult&rsquo;s right to sell his own labor, which is exactly the reasoning of the American case <em>Lochner v. New York</em> in <span class="num">1905</span>. A neutral-sounding principle applied evenly between parties of very unequal power produces systematically unequal results, and naming that mechanism is worth more than an accusation of bias.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Formal equality between unequal parties. <em>The mechanism is that treating a wage as a free contract between two individuals gives each the same legal right to walk away, but an employer can wait weeks and a worker cannot miss a week&rsquo;s food, so a rule that is symmetrical on its face allocates the outcome to whoever can hold out, and forbidding combination removes the only thing that changes the arithmetic.</em>`,
        limit: `The law was not uniformly enforced or uniformly obeyed. Unions existed throughout the period as friendly societies and trade clubs, and juries and some magistrates were reluctant to convict.`,
        comparison: `Against the <em>guilds</em> of Topic 1.6 and Foundations 5: a guild was a legally recognized combination that fixed prices, controlled entry and set standards, and was regarded as legitimate. The same conduct became criminal once the economy was reorganized around free contract, which shows the law changing to fit an economic order rather than a timeless principle.`
      },
      terms: [
        ['Combination Acts', 'The 1799 and 1800 British statutes criminalizing worker combination to raise wages or shorten hours.'],
        ['Criminal conspiracy', 'The American judge-made doctrine treating collective wage bargaining as a conspiracy to injure trade.'],
        ['Freedom of contract', 'The principle that a wage is an individual bargain, used to strike down both combination and protective legislation.'],
        ['Labor injunction', 'A court order stopping a strike, breach of which was contempt punishable without a jury, the decisive American anti-strike weapon.'],
        ['Tolpuddle Martyrs', 'The laborers transported in 1834 on an oath charge, showing how prosecutors worked around the 1824 repeal.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'strikes',
      num: '02',
      accent: 'rust',
      name: 'Three Strikes and Who Broke Them',
      navLabel: 'The strikes',
      dates: '1877 to 1894 &nbsp;·&nbsp; Railroad, Haymarket, Pullman',
      thesis: `The three events the success criteria name form a sequence, and the sequence is about escalating state involvement: local violence, then a political prosecution, then federal troops and a court order. Each one also taught the labor movement a lesson about what was survivable.`,
      parts: [
        {
          heading: 'The Great Railroad Strike, 1877',
          blocks: [
            { p: `In the depression following the panic of <span class="num">1873</span>, the Baltimore and Ohio cut wages for the third time, and workers at Martinsburg stopped the trains. It spread along the rail network with no central organization at all, to Baltimore, Pittsburgh, Chicago, St Louis and beyond, drawing in other workers and the unemployed, and in Pittsburgh a confrontation with militia left dozens dead and railroad property burned on a large scale.` },
            { p: `State militias proved unreliable, since local men would not always fire on neighbors, so federal troops were used to reopen the lines, in some places diverted from Reconstruction duties in the South. Roughly a hundred people died nationally.` },
            { p: `The significance is that this was the first strike in the United States to become a national event and to be suppressed as one. Employers and governments concluded they needed better instruments, and built them: state armories in cities, expanded militias, and closer coordination between companies and courts. Labor concluded that spontaneous mass action produced martyrs, which pushes the movement in the direction section 03 describes.` }
          ]
        },
        {
          heading: 'Haymarket, 1886, and Pullman, 1894',
          blocks: [
            { p: `<b>Haymarket.</b> The eight-hour day was the great demand of the mid-<span class="num">1880</span>s, and a general strike for it began on <span class="num">1 May 1886</span>. At a rally in Chicago's Haymarket Square on <span class="num">4 May</span>, called after police killed strikers at the McCormick works the previous day, someone threw a bomb at police; the officer killed by it and others who died in the ensuing shooting, along with civilian dead, produced a wave of public fear. Eight anarchists were tried, the identity of the bomb-thrower never established and the prosecution built substantially on their published views rather than on evidence of the act; four were hanged, one died in custody, and the survivors were later pardoned by Governor Altgeld, who stated publicly that the trial had been unfair.` },
            { p: `The consequence, and it is the one the criteria point at: Haymarket allowed employers and the press to identify labor organizing with anarchism, bombs and foreigners, since most of the accused were German-born immigrants. The eight-hour movement collapsed, the Knights of Labor, which had grown to enormous size and had no connection to the bombing, was fatally damaged by association, and a lasting association between unionism and subversion entered American public argument. May Day is commemorated internationally because of Haymarket, which is a fact many Americans do not know about their own history.` },
            { p: `<b>Pullman.</b> George Pullman built a company town outside Chicago where his workers rented his houses and bought from his shops. In the depression of <span class="num">1893</span> he cut wages roughly a quarter and did not cut rents, which is the detail that made the grievance unanswerable. The workers struck, and the American Railway Union under Eugene Debs backed them with a boycott: its members would not handle trains with Pullman cars, which stopped rail traffic across much of the country.` },
            { p: `The response is the section's point. The railroads attached mail cars to Pullman trains, so that stopping a train obstructed the United States mail. The federal government obtained an <b>injunction</b> under that theory and under the Sherman Act, President Cleveland sent federal troops over the objection of the governor of Illinois, the strike was broken, about thirty people were killed, and Debs was imprisoned for contempt. Debs went into prison a trade unionist and came out a socialist, and ran for president five times.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the coverage is the evidence, twice over',
              html: `Newspaper archives from these events are abundant and violently partisan, which makes them useful in two different ways. Read as reports, they must be treated with caution, since major papers described strikers as a mob, an insurrection or a communist conspiracy, and Haymarket coverage convicted the defendants weeks before the trial. Read as evidence of opinion, they are excellent, because they show precisely how the public argument was framed and by whom. Set them against the labor press, union minute books, court transcripts and the pardon message Governor Altgeld issued in <span class="num">1893</span>, which reviews the trial record in detail, and you can reconstruct both what happened and what people were told had happened. Those are two separate historical questions and this topic needs both.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The injunction. <em>The mechanism is that a court order to stop a strike converts a labor dispute into contempt of court, which is punishable immediately by a judge without a jury and without proving any crime, so an employer who can persuade one judge that a strike obstructs commerce or the mails obtains a penalty no jury of local citizens would have delivered.</em>`,
        limit: `It required a legal theory connecting the strike to federal interests, which is why the railroads had to attach mail cars to Pullman trains, and it was eventually curtailed by statute in the twentieth century.`,
        comparison: `Against <em>Luddism</em> in Topic 5.3: there the state used troops and capital punishment against machine-breaking, and here it uses troops and an injunction against a boycott. Seventy years apart and on two continents, the pattern is the same, with the state supplying the force that decides an industrial dispute while describing the dispute as a private matter between contracting parties.`
      },
      terms: [
        ['Great Railroad Strike', 'The unorganized 1877 national strike after repeated wage cuts, suppressed by federal troops with about a hundred dead.'],
        ['Haymarket affair', 'The 1886 Chicago bombing and trial that tied labor organizing to anarchism in public argument and broke the eight-hour movement.'],
        ['Knights of Labor', 'The broad labor organization fatally damaged by association with Haymarket despite no connection to it.'],
        ['Pullman Strike', 'The 1894 boycott broken by federal troops and an injunction obtained on the theory that it obstructed the mails.'],
        ['Eugene Debs', 'The union leader imprisoned for contempt after Pullman, who emerged a socialist and ran for president five times.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'divergence',
      num: '03',
      accent: 'iron',
      name: 'Why Britain Got a Labour Party',
      navLabel: 'The divergence',
      dates: 'c. 1880 to 1906 &nbsp;·&nbsp; Two labor movements',
      thesis: `Two industrial societies with similar problems produced different labor movements: one that formed its own political party and one that decided politics was a trap. The reasons are structural, and giving four of them is how you answer the comparative question the success criteria pose.`,
      parts: [
        {
          heading: 'What the AFL chose, and why',
          blocks: [
            { p: `The <b>American Federation of Labor</b>, founded in <span class="num">1886</span> under Samuel Gompers, adopted what it called <b>pure and simple unionism</b>: organize skilled workers by craft, pursue wages, hours and conditions through collective bargaining with employers, build strike funds and benefit schemes, and stay out of party politics beyond rewarding friends and punishing enemies at the ballot box.` },
            { p: `The reasoning was drawn from the wreckage in section 02. Broad, politically ambitious organizations such as the Knights of Labor had been destroyed; radicalism had been used to justify hanging men at Haymarket; and the courts had shown they would break any strike that looked like a challenge to the system. Organizing the skilled, who were hard to replace, around demands an employer could actually concede was a strategy for surviving in that environment, and it worked in its own terms. It also excluded most workers: the unskilled, immigrants, Black workers and women were largely outside the craft unions, which is a cost worth naming.` }
          ]
        },
        {
          heading: 'Four structural reasons for the difference',
          blocks: [
            { p: `<b>The sequence of the vote and industrialization.</b> British working-class men were largely excluded from the franchise until <span class="num">1867</span> and <span class="num">1884</span>, described in the Topic 5.6 chapter, so they spent decades organizing politically to obtain it, through Chartism and after, and arrived with a tradition of independent political action and a class identity built by exclusion. Most American white men had the vote well before industrialization, so they entered the industrial era already inside two existing parties, and the natural move was to work within them rather than to build a third.` },
            { p: `<b>Ethnic and racial division.</b> The American workforce was continuously renewed by immigration from many countries, speaking different languages, in a society with legally enforced racial hierarchy. Employers used ethnic divisions deliberately in hiring and in strikebreaking, and many unions excluded Black workers and, in the West, campaigned for Chinese exclusion. A class identity is harder to build across those divisions, and Britain&rsquo;s workforce, whatever its regional differences and its substantial Irish immigration, was not divided in the same way or to the same degree.` },
            { p: `<b>State violence and the courts.</b> American strikes were broken by federal troops, state militias and private armies such as the Pinkertons, and by injunctions, more routinely and more lethally than British strikes were. That raises the cost of confrontation and rewards the AFL's narrower strategy, and it also meant American radicals were more likely to be imprisoned or deported than elected.` },
            { p: `<b>Mobility and the shape of the electoral system.</b> Land in the West, high internal mobility and comparatively higher wages weakened the sense of a permanent proletarian condition, and first-past-the-post voting in single-member districts punishes a new party severely, since a third party can win a substantial share of the vote and almost no seats. Britain had the same electoral system and a working class concentrated in industrial constituencies where a party could actually win them.` },
            { p: `The British outcome followed: the Trades Union Congress and socialist societies formed a Labour Representation Committee in <span class="num">1900</span>, which became the Labour Party in <span class="num">1906</span>, and the Taff Vale judgment of <span class="num">1901</span>, which made unions liable for damages caused by strikes, convinced many unions that they needed their own members in Parliament rather than sympathetic ones. In the United States, socialism reached a real but minority following under Debs and no labor party was established.` }
          ]
        }
      ],
      useThis: {
        tool: `Sequence between franchise and industrialization. <em>The mechanism is that workers excluded from the vote while industrializing must organize politically to get it, which builds a durable independent political identity and organization that later becomes a party, while workers who already hold the vote when industry arrives find existing parties competing for them and have little reason to build a new one.</em>`,
        limit: `It is one factor among several and does not work alone, since ethnic division, state violence and the electoral geography all pushed the same way in the United States.`,
        comparison: `Against <em>Germany</em> in Topic 5.6: German workers were also excluded and organized politically, producing the largest socialist party in Europe, and Bismarck answered with suppression plus social insurance. That gives you three outcomes from one industrial problem, and the variable in each case is the political system the workers met rather than the industry they worked in.`
      },
      terms: [
        ['American Federation of Labor', 'The 1886 craft federation under Gompers pursuing wages and hours through bargaining, not party politics.'],
        ['Pure and simple unionism', 'The AFL strategy of organizing skilled workers around demands employers could concede, adopted after broader organizations were destroyed.'],
        ['Labour Representation Committee', 'The 1900 alliance of unions and socialist societies that became the Labour Party in 1906.'],
        ['Taff Vale', 'The 1901 judgment making unions liable for strike damages, which convinced British unions they needed their own MPs.'],
        ['Strikebreaking', 'The use of replacement workers, private agencies and ethnic division to defeat a strike, more systematic in the United States.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'reforms',
      num: '04',
      accent: 'oxide',
      name: 'Cotton, Sewers, Schools and Drink',
      navLabel: 'Other movements',
      dates: '1831 to 1874 &nbsp;·&nbsp; Abolition and reform',
      thesis: `The other great movements of the century look unrelated to labor and share a cause with it. Each is a response to something industrialization created: a slave economy it made profitable, a city it filled faster than the city could cope, a workforce it needed literate, and a misery it produced and then blamed on drink.`,
      parts: [
        {
          heading: 'Cotton, and the abolition argument',
          blocks: [
            { p: `The structural connection is the sharpest single fact in this unit and it should be written as a chain. Lancashire's mills, described in the Topic 5.3 chapter, needed raw cotton in enormous and growing quantities. The American South, after the cotton gin made short-staple cotton profitable to process, supplied a very large share of it, grown by enslaved people whose numbers rose across the period. So the most advanced industrial economy in the world ran on a raw material produced by slavery, and the enslaved population of the United States grew because industrial demand made the crop worth expanding. Industrial capitalism and Atlantic slavery were not sequential stages; they were contemporaneous and connected.` },
            { p: `Abolitionists used exactly that. Consumer boycotts of slave-grown sugar and cotton put the connection on a household shopping list, and free-produce movements sold goods certified as slave-free. The argument was that a British worker's cloth and a British family's sweetener implicated them in a system they claimed to abhor, which turns a distant moral question into a domestic one, and it is the ancestor of every ethical consumption campaign since.` },
            { p: `<b>British abolition</b> came in stages: the slave trade in <span class="num">1807</span>, then slavery in the empire by the act of <span class="num">1833</span>, effective from <span class="num">1834</span> with an apprenticeship system that kept the formerly enslaved working for their former owners and was ended early, in <span class="num">1838</span>, under pressure. Two things are usually left out. First, the act compensated <b>the enslavers</b>, twenty million pounds, an enormous fraction of national expenditure, financed by a loan that was not fully repaid until the twenty-first century, and it compensated the enslaved with nothing. Second, and decisively, enslaved people forced the timing. The <b>Baptist War</b> in Jamaica over Christmas <span class="num">1831</span> and into <span class="num">1832</span>, led by the deacon Samuel Sharpe and involving tens of thousands, began as a general strike for wages and became the largest rising in the British Caribbean; it was suppressed with hundreds killed in the fighting and hundreds executed afterward, including Sharpe. The scale of the reprisals, reported in Britain, persuaded Parliament that maintaining slavery would mean permanent war. Abolition was argued for in London and made unavoidable in Jamaica.` },
            { p: `<b>The Cotton Famine</b> of <span class="num">1861</span> to <span class="num">1865</span> shows the dependency from the other end. The Union blockade cut off Southern cotton, Lancashire mills closed, and hundreds of thousands of workers were thrown into destitution. British industry responded by developing supply in India, Egypt and Brazil, permanently restructuring the global cotton trade, and Egyptian cotton is the crop that underwrote the borrowing in the Topic 5.7 chapter. And a considerable number of Lancashire workers, though not all, supported the Union and the blockade that was starving them, on antislavery grounds, which is one of the more striking pieces of evidence about how far the abolitionist argument had reached.` }
          ]
        },
        {
          heading: 'Sewers, schools and temperance',
          blocks: [
            { p: `<b>Public health.</b> The crisis itself is the Topic 5.9 chapter's; the movement is here. Edwin Chadwick's <em>Report on the Sanitary Condition of the Labouring Population</em> of <span class="num">1842</span> assembled statistical evidence that mortality tracked living conditions with a precision nobody could dismiss, and argued that disease cost the state money in lost labor and poor relief, which is the argument that moved Parliament. Chadwick was wrong about the mechanism, holding to miasma theory, that disease came from foul air, and the practical prescriptions, drainage, water supply and refuse removal, were right anyway. John Snow's investigation of the Broad Street pump in <span class="num">1854</span> and later germ theory supplied the correct explanation. The Great Stink of <span class="num">1858</span>, when the Thames became unbearable to a Parliament sitting beside it, produced the money for Joseph Bazalgette's London sewer system, an engineering work on a scale that only industrial technology made possible. Industrialization caused the crisis and supplied the cure.` },
            { p: `<b>Education.</b> Britain's Elementary Education Act of <span class="num">1870</span>, the Forster Act, created school boards to fill the gaps left by church schools, and compulsory attendance and the removal of fees followed within two decades. The motives are worth naming honestly and they were mixed: an economy needing workers who could read instructions and do arithmetic; a state that had just enfranchised urban working men in <span class="num">1867</span> and, in a phrase of the period, had to educate its masters; competition with better-schooled Germany; and a genuine reforming belief in opportunity. It also completed the removal of children from the workforce that the Factory Acts had begun, since a child in school is a child not in a mill.` },
            { p: `<b>Temperance.</b> The Woman's Christian Temperance Union, founded in <span class="num">1874</span> under Frances Willard, is the case to know, and it is more interesting than its subject. Heavy drinking was a real feature of industrial life, and its consequences fell hardest on women who had no legal claim on a husband's wages and few independent earnings. The WCTU became the largest women's organization in the United States, and under the slogan of home protection it moved from alcohol into suffrage, labor conditions, prison reform and public health, so a campaign that appeared to accept women's domestic role became a training ground for a generation of women organizers and a route into politics that the Topic 5.6 chapter's franchise arguments had left closed.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write these as four separate good causes that happened to coincide, and do not write reform as something granted from above once people saw the problem. Each has an industrial cause: mills created the demand that expanded American slavery, unplanned cities created the sanitary crisis, industry and a widened franchise created the demand for mass schooling, and industrial conditions created the drinking that temperance attacked. And in each case pressure from below set the timing: the Baptist War forced the pace of abolition, working-class agitation drove the Factory Acts, and a Parliament that had ignored cholera for decades funded sewers when the smell reached its own windows.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Making a distant system into a domestic transaction. <em>The mechanism is that a consumer boycott converts a moral argument about a place people will never see into a decision they make in a shop, which recruits people with no political power, women above all, into a campaign they can act on daily, and it makes the connection between an industrial economy and the labor that supplies it impossible to ignore.</em>`,
        limit: `Boycotts alone did not end slavery. Parliamentary politics, the strategic interests of a state that had already lost its own slave colonies&rsquo; profitability, and above all the risings in the Caribbean decided the timing.`,
        comparison: `Against the <em>Haitian Revolution</em> in Topic 5.2: there the enslaved won their own freedom by war and were charged an indemnity for it, and in the British empire the enslaved forced the timing through the Baptist War and Parliament compensated their owners. In both cases the decisive pressure came from enslaved people, and in both cases the accounting was done in favor of the enslavers.`
      },
      terms: [
        ['Cotton Famine', 'The 1861 to 1865 collapse of Lancashire mills under the Union blockade, which permanently restructured global cotton supply.'],
        ['Baptist War', 'The Jamaican rising of 1831 to 1832 under Samuel Sharpe, whose suppression persuaded Parliament that slavery meant permanent war.'],
        ['Compensated emancipation', 'The 1833 act\'s payment of twenty million pounds to enslavers, with nothing to the enslaved.'],
        ['Chadwick report', 'The 1842 sanitary report whose statistics tied mortality to living conditions and whose fiscal argument moved Parliament.'],
        ['WCTU', 'The 1874 Woman\'s Christian Temperance Union, which grew from alcohol into suffrage, labor and prison reform.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first explains most of the rest of the chapter, so start there.`,
    pairs: [
      {
        category: 'Structure',
        title: 'A symmetrical rule between unequal parties is not neutral',
        body: `The Combination Acts of 1799 and 1800 criminalized workers agreeing to seek higher wages, and American courts reached the same result through criminal conspiracy doctrine, both justified by freedom of contract: a wage is an individual bargain and a combination interferes with it. Each party could equally walk away, and an employer could wait weeks while a worker could not miss a week&rsquo;s food, so the symmetrical rule handed the outcome to whoever could hold out. The same doctrine also struck down protective legislation, as in Lochner in 1905. With combination criminal and no arbitration available, the tactics left were machine-breaking, disguised friendly societies, mass petitioning and sudden strikes, which is why early labor looks disorganized.`
      },
      {
        category: 'Causation',
        title: 'The state supplied the force and called the dispute private',
        body: `In 1877 wage cuts on the Baltimore and Ohio produced an unorganized strike that spread along the rail network, and federal troops reopened the lines after local militias proved unwilling to fire on neighbors, with about a hundred dead. In 1886 a bomb at Chicago&rsquo;s Haymarket rally, thrower never identified, produced a trial built on the defendants&rsquo; published views; four were hanged and the survivors later pardoned by a governor who called the trial unfair, and the eight-hour movement and the Knights of Labor collapsed under the association with anarchism. In 1894 railroads attached mail cars to Pullman trains so that the boycott obstructed the mails, a federal injunction followed, troops broke the strike, and Debs went to prison for contempt and came out a socialist.`
      },
      {
        category: 'Comparison',
        title: 'The vote before industry, or after it, decides whether you build a party',
        body: `British working-class men were excluded from the franchise until 1867 and 1884, so they spent decades organizing politically to win it, through Chartism and after, arriving with an independent political tradition that produced the Labour Representation Committee in 1900 and the Labour Party in 1906, with the Taff Vale judgment of 1901 convincing unions they needed their own MPs. Most American white men held the vote before industrialization and entered the industrial era already inside two parties. Add continuous immigration and legal racial hierarchy, which employers used in hiring and strikebreaking; routine suppression by troops, militias, Pinkertons and injunctions; and first-past-the-post districts that punish a third party. The AFL&rsquo;s pure and simple unionism was a rational response to that environment.`
      },
      {
        category: 'Connection',
        title: 'The mill and the plantation were one system, and the enslaved forced the timing',
        body: `Lancashire needed raw cotton in growing quantities and the American South supplied it, grown by an enslaved population that expanded because industrial demand made the crop worth expanding, so industrial capitalism and Atlantic slavery were contemporaneous and connected rather than sequential. Abolitionists used that directly through boycotts of slave-grown cotton and sugar, turning a distant system into a household transaction. Britain abolished the trade in 1807 and slavery by the act of 1833, compensating enslavers twenty million pounds and the enslaved nothing, with apprenticeship ended early in 1838. And the Baptist War in Jamaica over Christmas 1831, led by Samuel Sharpe and suppressed with hundreds killed and hundreds executed, is what persuaded Parliament that keeping slavery meant permanent war.`
      }
    ]
  }
};
