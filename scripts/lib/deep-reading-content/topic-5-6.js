'use strict';

/**
 * Topic 5.6, Industrialization: Government and Society: the deep reading.
 *
 * Why this exists. The success criteria want bourgeoisie and proletariat
 * defined; liberalism, conservatism, utopian socialism and Marxism with their
 * key features; the specific claims of the Communist Manifesto; and a comparison
 * of at least two ideologies on one question, what causes industrial poverty and
 * what is the solution. Then government responses: the Reform Acts of 1832,
 * 1867 and 1884, the Factory Acts, the 1834 Poor Law Amendment, and Bismarck's
 * insurance laws of 1871, 1883 and 1889, plus women's experience and suffrage.
 *
 * THE SPLIT WITH 5.8 AND 5.9 IS DELIBERATE AND MATTERS. Unit 5 has three topics
 * that all touch class, reform and daily life, and without a rule they produce
 * three chapters saying the same thing. The rule used here:
 *
 *   - 5.6 (this one) = IDEAS AND THE STATE. Competing explanations of industrial
 *     poverty, and what governments legislated. Class appears as the subject
 *     those ideologies argue about.
 *   - 5.8 = ORGANIZED ACTION. Unions against the law, abolition, and the reform
 *     movements as movements.
 *   - 5.9 = LIVED EXPERIENCE. What the classes were day to day, separate
 *     spheres, and the physical city.
 *
 * So public health appears in all three and differently: the sanitary crisis is
 * 5.9, the sanitary MOVEMENT is 5.8, and the legislation is here. Keep it.
 *
 * The organizing device is one question asked of five answers, because that is
 * literally what the second success criterion asks for and because a student who
 * can run the same question across ideologies can compare them without a list.
 */

module.exports = {
  topicKey: 't5-6',
  slug: 'topic-5-6-industrialization-government-and-society',
  lessonFile: 'lesson-5-6-industrialization-government-and-society.html',

  titleHtml: 'One Question, Five <em>Answers</em>',
  deck: `Everybody in nineteenth-century Europe could see that industry was producing enormous wealth and enormous misery at the same time. What divided them was the explanation: whether poverty was a natural stage, a moral failure, a design flaw, or the entire point of the system. This chapter runs one question across five answers, and then asks what governments actually did, which turns out to match none of them.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 defines the two classes, because every ideology after it is an argument about their relationship. Section 02 runs the same question across five answers, which is exactly the comparison the success criteria ask for. Sections 03 and 04 are what governments did about it, and why the reasons for acting were rarely the reasons the ideologies gave.`,
    steps: [
      `<b>01 The two classes:</b> what bourgeoisie and proletariat actually name, and why they are new.`,
      `<b>02 Five answers to one question:</b> liberalism, conservatism, utopian socialism, Marxism, and the Manifesto&rsquo;s specific claims.`,
      `<b>03 What governments did:</b> Factory Acts, the Poor Law, and Bismarck&rsquo;s insurance.`,
      `<b>04 The vote and the women who did not get it:</b> 1832, 1867, 1884, and the suffrage argument.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'classes',
      num: '01',
      accent: 'gold',
      name: 'Two Classes That Had Not Existed Before',
      navLabel: 'The two classes',
      dates: 'c. 1780 to 1900 &nbsp;·&nbsp; Bourgeoisie and proletariat',
      thesis: `Europe had always had rich and poor. What industrialization produced was two groups defined by their relationship to productive property rather than by birth, and the fact that neither of them fitted the old order is the reason the nineteenth century argued so much.`,
      parts: [
        {
          heading: 'What each word names',
          blocks: [
            { p: `The <span class="kt">bourgeoisie</span> is the class that owns capital: factory owners, mine owners, merchants, bankers, and around them the professionals and managers whose position depends on the same economy. Its wealth comes from ownership and enterprise rather than from land held by inherited title, and its status is not conferred by birth, which is precisely why the landed aristocracy of the old order despised it and why it wanted political power to match its money.` },
            { p: `The <span class="kt">proletariat</span> is the class that owns no productive property and lives by selling its labor for wages. That definition is doing more work than it appears to. A peasant with a strip of land, a craftsman with his own tools, or a household with a loom in the parlor all owned the means of producing something, however poorly they lived. A factory worker owns nothing but the capacity to work, which means the only thing he can withhold is his labor, and that single fact explains why the strike becomes the characteristic weapon of the century and why Topic 5.8 is about the law's response to it.` },
            { p: `So the novelty is structural rather than a matter of wealth. Both classes are defined by a relationship to productive property, which is a way of sorting people that neither feudal rank nor the estates of Topic 5.1 had used.` }
          ]
        },
        {
          heading: 'Why the old order could not absorb them',
          blocks: [
            { p: `The traditional order had a place for a lord, a peasant, a priest and a guild master, and it justified each by tradition, mutual obligation and divine order. It had no place for a self-made cotton manufacturer richer than a duke, and no obligation running toward a man employed by a company that owed him nothing but his wage on Friday.` },
            { p: `The bourgeoisie therefore demanded political representation proportionate to its wealth, which is what the Reform Act of <span class="num">1832</span> in section 04 partly concedes. And the proletariat, having no property qualification and no customary protector, demanded either the vote or a different economy, which is what everything in section 02 after liberalism is about.` },
            { p: `A word of caution about the vocabulary. These are analytical categories rather than groups people always used of themselves, and both were internally divided: a skilled engineer and a casual dock laborer had little in common beyond wages, and a small workshop master sat somewhere between the two. Use the terms as tools and do not treat them as tribes.` }
          ]
        }
      ],
      useThis: {
        tool: `Class defined by relationship to productive property. <em>The mechanism is that owning the means of production and owning nothing but your capacity to work generate opposite interests over wages, hours and conditions regardless of anyone&rsquo;s intentions, so the conflict is structural rather than personal, and a worker with no property has exactly one thing to withhold, which is why collective refusal to work becomes the century&rsquo;s central industrial weapon.</em>`,
        limit: `Neither class was homogeneous, and skilled workers, small masters and clerks sat awkwardly in the scheme, which is why nineteenth-century politics rarely divided as cleanly as the categories suggest.`,
        comparison: `Against the <em>casta system</em> in Topic 4.7: that hierarchy assigned status by ancestry recorded in a register, and this one by relationship to capital, which is in principle changeable. In practice mobility was limited, and the contrast is still worth drawing, because one system was designed to be closed and the other claimed to be open while behaving otherwise.`
      },
      terms: [
        ['Bourgeoisie', 'The class owning capital, whose wealth comes from enterprise rather than inherited land, and whose status the old order had no place for.'],
        ['Proletariat', 'The class owning no productive property and living by wages, whose only leverage is the withholding of labor.'],
        ['Means of production', 'The tools, machines, land and buildings by which goods are made, and the thing ownership of which defines the two classes.'],
        ['Class', 'A grouping defined by economic relationship rather than by birth, the organizing category of nineteenth-century politics.'],
        ['Labor aristocracy', 'The skilled, better-paid workers whose position complicates any simple two-class account.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'answers',
      num: '02',
      accent: 'iron',
      name: 'What Causes This, and What Should Be Done',
      navLabel: 'Five answers',
      dates: 'c. 1776 to 1867 &nbsp;·&nbsp; The ideologies',
      thesis: `Ask one question of every ideology in this topic, what causes industrial poverty and what is the remedy, and they stop being definitions to memorize and become arguments you can compare. Five answers, and each one implies a different policy.`,
      parts: [
        {
          heading: 'Liberalism and conservatism',
          blocks: [
            { p: `<b>Liberalism.</b> Core commitments: individual rights, free markets, government limited to protecting person, property and contract, careers open to talent, and a constitution rather than an absolute monarch. Its answer on poverty is that it is a stage and a price. Markets allocate labor and capital efficiently; interference makes things worse; poverty reflects the state of productive capacity, or an individual's failure, or an oversupply of labor, and the remedy is growth plus the removal of restrictions on trade and enterprise. Note that this is the ideology of the bourgeoisie in the same sense the aristocracy had monarchism, and that liberals were reformers rather than conservatives, since they were attacking aristocratic privilege, established churches and trade restrictions.` },
            { p: `<b>Conservatism.</b> Core commitments: social order, inherited institutions, established religion, hierarchy understood as natural and reciprocal, and change that is gradual and organic rather than designed. Edmund Burke's reaction to the French Revolution is the founding statement. Its answer on poverty is that it is the consequence of dissolving the bonds that used to protect people: the market treats a person as a unit of labor, where a landlord, a parish and a church had obligations toward him. The remedy is paternal responsibility, restored obligation and, notably, sometimes regulation of the factory, which is why some of the strongest support for limiting working hours came from landed Tories with no love for northern manufacturers.` },
            { p: `That last point is worth pausing on, because it inverts the expected alignment and is the kind of detail that lifts an essay. On factory regulation, conservatives and radical workers were frequently on the same side against liberal manufacturers, since the manufacturers regarded a legal limit on hours as an interference with free contract.` }
          ]
        },
        {
          heading: 'Utopian socialism, Marxism, and the Manifesto',
          blocks: [
            { p: `<b>Utopian socialism.</b> Owen, Fourier, Saint-Simon and their followers held that competition itself was the cause: an economy organized around individuals competing produces misery even when it produces wealth, so the remedy is to reorganize production cooperatively. Their method was demonstration rather than revolution. Robert Owen ran New Lanark as a profitable mill with shorter hours, no young children employed, decent housing and a school, in order to prove that humane conditions were compatible with profit, and then founded New Harmony in Indiana, which failed. Marx and Engels named them utopian because, in their view, the socialists appealed to reason and goodwill and had no theory of what force would actually bring the change about.` },
            { p: `<b>Marxism.</b> Its answer is that poverty is not a defect of industrial capitalism but a product of how it works. Under the <b>materialist conception of history</b>, the way a society organizes production determines its politics, law and ideas, and history moves through stages as each economic order generates the class that overthrows it. Under the <b>theory of class conflict</b>, the bourgeoisie and proletariat have structurally opposed interests, because profit derives from paying workers less than the value their labor creates, so no goodwill resolves it. The <em>Communist Manifesto</em> of <span class="num">1848</span> states this compressed: that the history of all hitherto existing society is the history of class struggles; that capitalism revolutionizes production constantly and thereby produces and concentrates the class that will end it; that the state is an instrument of the ruling class; that private property in the means of production should be abolished; and that workers of all countries should unite, because their common interest as a class crosses the national boundaries of Topic 5.2.` },
            { p: `<b>And the fifth answer, which the ideologies mostly missed.</b> Political economy in the Malthusian line held that poverty was caused by population growing faster than food supply, so relief merely encouraged more of it, and the Poor Law of section 03 is built on that view. It belongs in this list because it was enormously influential in policy even though nobody organized a movement around it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not compare these by listing their features. Compare them by running one question through all of them, which is what the success criterion asks. On <b>the cause of industrial poverty</b>: liberalism says a stage of growth or individual failure; conservatism says the destruction of customary obligation; utopian socialism says competition itself; Marxism says the extraction of surplus from labor, which is the system operating correctly. On <b>the remedy</b>: growth and free trade; restored paternal duty and regulation; cooperative communities; and revolution abolishing private property in the means of production. Two of those, written out in that structure, score better than five definitions.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The materialist conception of history. <em>The mechanism is that if the way a society produces its goods determines its politics, law and ideas rather than the reverse, then a change in production must eventually change everything built on it, so industrial capitalism is not a permanent condition to be managed but a stage that generates, in the concentrated urban workforce it needs, the class capable of ending it.</em>`,
        limit: `The prediction did not follow. Revolutions came in agrarian Russia and China rather than in industrial Britain and Germany, and Western workers won the vote, wages and welfare, which is a real problem for the theory and worth saying.`,
        comparison: `Against <em>liberalism</em> on the same question: both accept that industrial capitalism transforms society, and they divide on whether the misery is transitional or intrinsic. That single disagreement generates every policy difference between them, which is why it is the comparison worth writing.`
      },
      terms: [
        ['Liberalism', 'Individual rights, free markets and limited government, holding industrial poverty to be a stage or an individual failure.'],
        ['Conservatism', 'Order, tradition and hierarchy as reciprocal obligation, holding poverty to follow from dissolved customary bonds.'],
        ['Utopian socialism', 'Owen, Fourier and Saint-Simon, who blamed competition and sought to demonstrate cooperative alternatives.'],
        ['Class conflict', 'The Marxist claim that bourgeoisie and proletariat have structurally opposed interests, since profit derives from unpaid labor value.'],
        ['Communist Manifesto', 'The 1848 statement of the materialist conception of history, class struggle, abolition of private property, and international workers\' unity.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'laws',
      num: '03',
      accent: 'rust',
      name: 'What Governments Actually Did',
      navLabel: 'The legislation',
      dates: '1802 to 1889 &nbsp;·&nbsp; Factory Acts to social insurance',
      thesis: `Governments did not adopt any of the five answers. They legislated piecemeal, under pressure, for reasons that were usually about order, military fitness or party advantage, and the resulting body of law is the origin of the modern state&rsquo;s responsibility for its citizens&rsquo; welfare.`,
      parts: [
        {
          heading: 'Britain: regulate the factory, harden the workhouse',
          blocks: [
            { p: `<b>The Factory Acts</b> came in a sequence, and the sequence is the argument. Early measures from <span class="num">1802</span> applied to pauper apprentices and were unenforceable. The Act of <span class="num">1833</span> is the turning point, and not because of its limits, which restricted the hours of children by age band in textile mills: it created a small corps of <b>factory inspectors</b> with the power to enter premises. A law with an inspector is a different kind of law from a law without one, and this is the birth of the regulatory state. The Act of <span class="num">1847</span>, the Ten Hours Act, limited women and young persons to ten hours, which in practice limited the working day for everyone, since a mill cannot run its machinery without them. Later acts extended the principle beyond textiles.` },
            { p: `Two things about who supported this. It passed with support from Tory paternalists such as Lord Ashley and from working-class agitation, against opposition from liberal manufacturers who argued that hours were a matter of free contract and that profit was made in the last hour of the day. And it was regulation by category: legislators willing to protect children and women as dependents were unwilling to say that an adult man could not sell his own hours, which is why the ten-hour day arrived sideways.` },
            { p: `<b>The Poor Law Amendment Act of <span class="num">1834</span></b> ran in the opposite direction and shows the same period doing both. The old parish relief system was replaced with a national workhouse regime built on the principle of <b>less eligibility</b>: conditions inside must be worse than those of the poorest independent laborer outside, so that only the genuinely desperate would enter. Families were separated inside, work was deliberately grim, and the intent was to make relief so unattractive that able-bodied men would take any wage rather than claim it. It is the Malthusian answer from section 02 written into statute, and it was hated with an intensity that shaped a generation of working-class politics.` }
          ]
        },
        {
          heading: 'Germany: insurance without democracy',
          blocks: [
            { p: `Bismarck's social insurance legislation is the other case the success criteria name, and it is genuinely the origin of the welfare state: accident and workplace injury insurance in the early <span class="num">1870</span>s and consolidated in <span class="num">1884</span>, health insurance in <span class="num">1883</span>, and old-age and invalidity pensions in <span class="num">1889</span>, financed by contributions from workers and employers and administered through the state.` },
            { p: `The motive is the part worth knowing, because it is not benevolence and not socialism. Bismarck had outlawed the Social Democratic Party's organization under the Anti-Socialist Laws of <span class="num">1878</span>, and the insurance program was the other half of the same policy: suppress the movement and remove its grievance, so that workers would look to the imperial state rather than to a party for security. He said as much in substance, arguing that a man with a pension to look forward to is more governable.` },
            { p: `So the lesson to carry is that welfare provision here was a conservative instrument of political stabilization, introduced by an authoritarian regime, ahead of Britain and long ahead of the United States. If your model of the nineteenth century is that reform tracks democracy, Germany breaks it, and that is exactly why it is worth citing.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the state investigated itself in public',
              html: `Much of what is known about industrial conditions comes from the British parliamentary papers, the blue books: the Sadler Committee of <span class="num">1832</span> on child labor, the Ashley Mines Commission of <span class="num">1842</span>, Chadwick&rsquo;s sanitary report of the same year, and decades of factory inspectors&rsquo; reports. They contain sworn testimony from workers and children, in their own words, with names and places. Two things follow. First, they are evidence produced <em>in order to legislate</em>, so witnesses were sometimes selected for effect and employers complained of exaggeration, which is a real caution. Second, and more striking, these are the documents Engels and Marx used, so the most influential attack on industrial capitalism was built substantially out of the British state&rsquo;s own published inquiries into itself.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Regulation by protected category. <em>The mechanism is that a legislature committed to freedom of contract cannot easily tell an adult man he may not sell his hours, but it can classify children and women as dependents needing protection, and since a textile mill cannot run without them, a limit on their hours limits the whole factory&rsquo;s day, which delivers general regulation through a partial rule.</em>`,
        limit: `The same logic entrenched the assumption that women were dependents rather than workers, which was used afterward to justify excluding them from trades and from the vote, as section 04 shows.`,
        comparison: `Against <em>Bismarck</em>: Britain regulated conditions while resisting income support, and Germany provided income support while resisting political rights, so each state conceded on the axis that threatened it least. Comparing what a government refuses is usually more revealing than comparing what it grants.`
      },
      terms: [
        ['Factory Acts', 'The sequence of British laws limiting hours, of which the 1833 Act matters most for creating enforceable inspection.'],
        ['Factory inspector', 'The official empowered to enter premises, which is what turned factory legislation from a statement into a regime.'],
        ['Ten Hours Act', 'The 1847 limit on women and young persons, which effectively limited the working day for everyone.'],
        ['Less eligibility', 'The 1834 Poor Law principle that relief must be worse than the poorest independent labor, enforced through the workhouse.'],
        ['Social insurance', 'Bismarck\'s accident, health and pension laws of the 1870s and 1880s, introduced to detach workers from socialism.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'vote',
      num: '04',
      accent: 'oxide',
      name: 'Widening the Franchise, and the Argument It Handed to Women',
      navLabel: 'The vote',
      dates: '1832 to 1918 &nbsp;·&nbsp; Reform Acts and suffrage',
      thesis: `Britain extended the vote three times in fifty years, each time under pressure and each time to a group whose exclusion had become politically expensive, and every extension made the exclusion of women harder to defend without saying openly what the principle really was.`,
      parts: [
        {
          heading: 'Three Acts, and why each one passed',
          blocks: [
            { p: `<b>1832.</b> The Great Reform Act redistributed seats from depopulated boroughs to the new industrial cities, Manchester and Birmingham among them, which had been unrepresented while a handful of voters returned members for empty hillsides. It extended the vote to a portion of the middle class on a property qualification. The context was a genuine fear of revolution after <span class="num">1830</span>, and the effect was to admit the bourgeoisie of section 01 to the political nation while leaving the working class outside, which is precisely why <b>Chartism</b> followed: a mass movement from <span class="num">1838</span> demanding universal male suffrage, secret ballot, equal constituencies, payment of members, no property qualification and annual parliaments, with petitions carrying millions of signatures. It was rejected and the movement collapsed, and five of its six demands are now ordinary features of British democracy.` },
            { p: `<b>1867.</b> Extended the vote to urban working-class male householders, roughly doubling the electorate. It passed under a Conservative government partly through party calculation, a gamble that newly enfranchised workers might vote Conservative, which is a reminder that franchise reform is rarely granted on principle.` },
            { p: `<b>1884.</b> Extended the same qualification to county householders, largely agricultural workers, bringing the male electorate to a substantial majority of adult men. Universal male suffrage in Britain arrives only in <span class="num">1918</span>, in the same act that first admitted women over thirty.` }
          ]
        },
        {
          heading: 'Women, work and the vote',
          blocks: [
            { p: `Start with the work, because the suffrage argument grows out of it. Women had always worked, and industrialization changed the terms rather than introducing the fact. Working-class women were employed in large numbers in textile mills, in mines until legislation barred them underground in <span class="num">1842</span>, in workshops, in the sweated trades and, in by far the largest numbers, in domestic service. They were paid substantially less than men for comparable work, on the justification that a man earned a family wage and a woman earned a supplement, which functioned as a self-fulfilling argument. They were excluded from skilled apprenticeships and from most craft unions, which is part of why Topic 5.8's labor movement was slow to represent them.` },
            { p: `Then the legal position. Under coverture, described in the Topic 5.1 chapter, a married woman's property and earnings belonged to her husband until the Married Women's Property Acts of <span class="num">1870</span> and <span class="num">1882</span> changed it, so a woman could be employed and legally unable to keep her wage.` },
            { p: `The suffrage argument is the Topic 5.1 move applied to a franchise that had just been justified in universal-sounding language. If the vote follows from being a rational adult contributing to the national economy and paying taxes, then a woman who does all three is excluded on grounds nobody can state without abandoning the principle. Once the property qualification fell away and the vote was defended as a right rather than as a privilege attached to property, the only remaining justification was sex, which had to be asserted rather than argued. The movement that followed, constitutional campaigning from the <span class="num">1860</span>s and militant campaigning from <span class="num">1903</span>, is Unit 6 territory, and the argument was constructed here.` }
          ]
        }
      ],
      useThis: {
        tool: `Franchise extension as a defensive concession. <em>The mechanism is that excluding a group becomes expensive when that group is numerous, organized and economically necessary, so a governing elite admits the least threatening portion of it in order to split the demand and buy stability, which is why each extension is accompanied by a fear of disorder and by a calculation about how the new voters will vote.</em>`,
        limit: `It explains timing rather than principle, and it does not account for the sustained argument and organization that made exclusion expensive in the first place.`,
        comparison: `Against the <em>active citizen</em> distinction in Topic 5.2: revolutionary France stated universal rights and implemented a tax threshold, and Britain arrived at the same place from the other direction, extending a property franchise until the property justification collapsed. Both routes end with sex as the only remaining criterion, which is the position the suffrage movement attacked.`
      },
      terms: [
        ['Great Reform Act', 'The 1832 redistribution to industrial cities and extension to part of the middle class, passed amid fear of revolution.'],
        ['Chartism', 'The mass movement from 1838 demanding six democratic reforms, rejected at the time and five of them now standard.'],
        ['Reform Acts of 1867 and 1884', 'The extensions to urban and then county male householders, driven substantially by party calculation.'],
        ['Family wage', 'The justification for paying women less, that a man supports a household and a woman supplements one.'],
        ['Married Women\'s Property Acts', 'The 1870 and 1882 laws letting a married woman keep her own earnings and property.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first is the comparison the success criteria ask for, written in the structure they ask for.`,
    pairs: [
      {
        category: 'Comparison',
        title: 'Run one question through the ideologies and they compare themselves',
        body: `On what causes industrial poverty: liberalism says a stage of growth, an oversupply of labor or individual failure, so the remedy is growth and the removal of restrictions on trade. Conservatism says the dissolution of customary obligations that once bound landlord, parish and church to the poor, so the remedy is restored paternal duty, which is why Tory paternalists backed factory regulation against liberal manufacturers. Utopian socialists say competition itself, so Owen ran New Lanark profitably with shorter hours and a school to demonstrate the alternative. Marxism says profit derives from paying workers less than their labor creates, so the misery is the system working correctly and only abolishing private property in the means of production ends it.`
      },
      {
        category: 'Structure',
        title: 'Owning nothing but your labor leaves exactly one thing to withhold',
        body: `A peasant with a strip of land, a craftsman with his tools and a household with a loom in the parlor all owned the means of producing something, however badly they lived. The proletariat is defined by owning no productive property at all and living by selling labor for wages, which is a genuinely new position rather than a poorer version of an old one. It follows directly that the only leverage available is collective refusal to work, which is why the strike becomes the characteristic weapon of the century and why the legal treatment of combination in Topic 5.8 is the decisive question for industrial workers everywhere.`
      },
      {
        category: 'Mechanism',
        title: 'The ten-hour day arrived through a rule about women and children',
        body: `Legislators committed to freedom of contract would not tell an adult man he could not sell his hours, but they would classify children and women as dependents in need of protection. The 1833 Act limited children&rsquo;s hours and, decisively, created factory inspectors with power to enter premises, which is what turned a statement into a regime. The 1847 Ten Hours Act limited women and young persons, and since a textile mill cannot run its machinery without them it limited the working day for everyone. The same logic entrenched the assumption that women were dependents rather than workers, which was then used to justify excluding them from skilled trades and from the vote.`
      },
      {
        category: 'Causation',
        title: 'Bismarck invented social insurance to defeat socialism',
        body: `Germany introduced workplace accident insurance in the 1870s and 1880s, health insurance in 1883 and old-age pensions in 1889, ahead of Britain and long ahead of the United States, and it was done by an authoritarian conservative state rather than by a democracy. The Anti-Socialist Laws of 1878 outlawed Social Democratic organization, and the insurance program was the other half of that policy: suppress the movement and remove its grievance so that workers look to the imperial state rather than to a party. If your model is that welfare provision tracks democratization, Germany breaks it, which is exactly why it is the case to cite.`
      }
    ]
  }
};
