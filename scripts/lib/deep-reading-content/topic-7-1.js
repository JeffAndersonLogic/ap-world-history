'use strict';

/**
 * Topic 7.1, Shifting Power After 1900: the deep reading.
 *
 * Why this exists. The success criteria ask for one internal and one external
 * factor for each of three collapsing empires, with an explanation of how the
 * factors reinforced each other, and then the full chain of the Russian
 * revolutions. "They were weak and they fell" satisfies none of that, and it is
 * what a survey has room for.
 *
 * The organizing argument: three empires did not fall because they were old.
 * They fell because each was trying to buy an industrial-age army out of an
 * agrarian tax base, and every route out of that squeeze, borrow abroad,
 * centralize harder, or concede a constitution, created the constituency that
 * finished them. Naming the squeeze first turns three separate collapses into
 * one mechanism seen three times.
 *
 * Three things carried deliberately:
 *
 *   1. 1905 is the rehearsal and it belongs in the chain. A student who starts
 *      the Russian story in 1917 cannot explain why the Provisional Government
 *      behaved as it did, because they have not met the Duma.
 *   2. The Provisional Government fell over one decision, staying in the war,
 *      and that is the most transferable fact in the topic: a government with
 *      no legitimacy of its own cannot afford an unpopular policy.
 *   3. The Qing case is the one where reform itself is the proximate cause. The
 *      dynasty abolished the examinations in 1905 and dissolved the loyalty of
 *      the class those examinations had recruited.
 */

module.exports = {
  topicKey: 't7-1',
  slug: 'topic-7-1-shifting-power',
  sourceFile: 'deep-reading-topic-7-1-shifting-power.html',
  lessonFile: 'lesson-7-1-shifting-power.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.1: The Bill Comes Due',
  eyebrow: 'Topic 7.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Bill Comes <em>Due</em>',
  deck: `Three empires that had governed for centuries came apart within fifteen years of each other, and not because they were old. Each was trying to pay for an industrial-age army out of a farming economy, and each of the three ways out of that squeeze, borrowing abroad, centralizing harder, or granting a constitution, built the coalition that finished it.`,
  meta: ['Four sections', 'One squeeze, three collapses', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.1 &nbsp;·&nbsp; The Bill Comes Due &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the mechanism all three cases share, and reading it first is what stops the other three from being a list. Sections 02, 03 and 04 are the Ottoman, Qing and Russian cases, and the Russian one carries the revolution chain the success criteria ask you to trace in order.`,
    steps: [
      `<b>01 The squeeze:</b> why an industrial army breaks an agrarian treasury.`,
      `<b>02 The Ottomans:</b> debt administered by foreigners, and a revolution that hardened into its opposite.`,
      `<b>03 The Qing:</b> indemnities, and the reform that dissolved the dynasty&rsquo;s own support.`,
      `<b>04 Russia:</b> 1905, February, the Provisional Government&rsquo;s one fatal decision, and October.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'squeeze',
      num: '01',
      accent: 'gold',
      name: 'The Squeeze Every Empire Was In',
      navLabel: 'The squeeze',
      dates: 'c. 1850 to 1914 &nbsp;·&nbsp; Industrial armies, agrarian revenue',
      thesis: `Start with the arithmetic, because all three collapses run through it. After the industrial changes of Unit 5, staying a great power meant buying things that only an industrial economy produces, and three empires were trying to buy them with the revenue of an economy that mostly grew food.`,
      parts: [
        {
          heading: 'What a modern army had started to cost',
          blocks: [
            { p: `An army of <span class="num">1700</span> needed muskets, horses, bread and men. An army of <span class="num">1900</span> needed breech-loading rifles and the cartridges to feed them, quick-firing artillery and shells by the million, railways to move troops faster than the enemy could, telegraph lines to command them, steel warships that were obsolete in fifteen years, and coal to move all of it. The Topic 5.5 chapter has where those capabilities came from.` },
            { p: `Every item on that list is a manufactured product, which means a state can only get it two ways: make it, or buy it from someone who does. Making it needs steel mills, machine shops, engineers and a skilled workforce. Buying it needs foreign currency, which for an agrarian economy means selling crops and raw materials abroad and hoping the price holds.` },
            { p: `Now put that against the revenue. An empire taxing peasant agriculture collects a small amount from a very large number of people, through intermediaries who keep a share, in a bad year collects much less, and cannot raise the rate much before the countryside stops paying or rises. That is a revenue base built for an army of <span class="num">1700</span>.` }
          ]
        },
        {
          heading: 'The three ways out, and what each one cost',
          blocks: [
            { p: `<b>Borrow abroad.</b> The fastest route and the one with the sting in the tail. Foreign loans buy the rifles now and mortgage the customs revenue later, and when the repayments fail the lenders' governments arrive to collect. That is how a fiscal problem becomes a sovereignty problem, and section 02 is the clearest case in the course.` },
            { p: `<b>Centralize harder.</b> Cut out the intermediaries, tax directly, conscript directly, run the schools yourself. It raises revenue and it also raises resistance, because the intermediaries being cut out are the local notables whose cooperation held the empire together, and the populations being taxed directly notice a state they had rarely seen before.` },
            { p: `<b>Concede a constitution.</b> Trade some power for consent, on the theory that a population with representation will pay and serve more willingly. It works, and it creates a legislature, a press and organized parties, which are exactly the instruments an opposition needs.` },
            { p: `Notice the shape. There is no option that is simply good. Each is a real answer to the fiscal problem that generates a new political problem, which is why "why did they collapse" has a better answer than decline. They were solving something, and the solutions had costs they could not pay either.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that these empires fell because they "failed to modernize." All three modernized hard. The Ottomans reorganized the army, the law and the schools across the Tanzimat decades; the Qing built arsenals, shipyards and a modern navy; Russia industrialized fast enough in the <span class="num">1890</span>s to become a major steel and oil producer. Modernization was not absent, it was <b>expensive, partial and destabilizing</b>, and it created new groups, officers with modern training, students, industrial workers, who then had both grievances and organization. Write that and you have a mechanism. Write "failed to modernize" and you have restated the outcome as its own cause.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The fiscal-military squeeze. <em>The mechanism is that great-power status came to require manufactured weapons bought with industrial output or foreign currency, while an agrarian tax base yields little, slowly, through intermediaries, so the state must borrow, centralize or concede, and each of those three raises revenue by creating a constituency with a reason and a means to oppose it.</em>`,
        limit: `It explains the pressure, not the timing, and the timing is not one story. For Russia and the Ottomans the First World War is exactly the accelerant, turning a chronic condition into an acute one. The Qing fell in February <span class="num">1912</span>, before that war began, so its acute cause is the railway nationalization and the provincial revolt in section 03. Name the war for two of the three, and do not let it reach backward over China.`,
        comparison: `Against the <em>gunpowder empires</em> in Topic 3.1: there too a military technology forced a fiscal reorganization, and the states that could pay expanded. This is the same mechanism four centuries later with the threshold raised, and the empires that cleared it in <span class="num">1500</span> are three of the ones that failed to clear it in <span class="num">1900</span>.`
      },
      terms: [
        ['Fiscal-military state', 'A state organized to raise the revenue its armed forces require, which is the thing all three empires in this chapter were failing to become.'],
        ['Indemnity', 'A payment imposed on a defeated state, which converts a lost war into a permanent budget item and forces further borrowing.'],
        ['Concession', 'A grant of economic rights, a railway, a mine, a customs stream, to a foreign power or company, usually given in exchange for a loan.'],
        ['Capitulations', 'Treaty privileges exempting foreigners from local law and tariffs, which limited what an empire could tax and became a nationalist grievance.'],
        ['Sphere of influence', 'A region where one foreign power claims exclusive economic privileges without formally annexing it, the usual form of pressure on the Qing.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'ottoman',
      num: '02',
      accent: 'rust',
      name: 'The Ottomans: Debt With an Office in Istanbul',
      navLabel: 'The Ottomans',
      dates: 'c. 1875 to 1922 &nbsp;·&nbsp; Bankruptcy, revolution, partition',
      thesis: `The Ottoman case is the clearest illustration of a fiscal problem becoming a sovereignty problem, because the creditors did not merely lend. They built an institution inside the empire to collect, and it worked.`,
      parts: [
        {
          heading: 'The external factor: default, and what followed it',
          blocks: [
            { p: `The Ottoman state borrowed heavily in European markets from the <span class="num">1850</span>s, largely to pay for wars and the reorganization the wars demanded. In <span class="num">1875</span> it defaulted. What followed in <span class="num">1881</span> is the detail worth knowing: the <span class="kt">Ottoman Public Debt Administration</span>, a body run by representatives of the European bondholders, was given the right to collect specified Ottoman revenues directly, salt, tobacco, silk, stamps, fishing, and apply them to the debt.` },
            { p: `State the mechanism plainly. A sovereign state's tax collectors now answered to foreign creditors for a substantial share of its income. At its height the Debt Administration employed a staff larger than the Ottoman finance ministry's own. The empire kept its flag, its sultan and its army, and lost control of the money, which is what makes it the standard example of <span class="kt">semi-colonial</span> status: not conquered, and not independent in the way that matters for policy.` },
            { p: `Layer the <span class="kt">capitulations</span> on top. These treaty privileges, some of them centuries old, exempted foreign merchants and their local protégés from Ottoman courts and capped the tariffs the empire could charge on imports. A state that cannot set its own tariff cannot protect an infant industry, which means it cannot easily build the manufacturing that would have widened the tax base in the first place. The squeeze tightens on itself.` }
          ]
        },
        {
          heading: 'The internal factor: nationalism inside a multi-ethnic empire',
          blocks: [
            { p: `The Ottoman empire governed Turks, Arabs, Kurds, Armenians, Greeks, Albanians, Slavs and others, and had governed them through the arrangements the Topic 4.7 chapter describes, which recognized religious difference and delegated a great deal. Nineteenth-century nationalism asked a different question of that arrangement: not how a community should be governed, but which nation the state belonged to.` },
            { p: `Greek independence in <span class="num">1830</span>, Serbian and Romanian and Bulgarian autonomy and then independence, and the loss of nearly all Balkan territory in the Balkan Wars of <span class="num">1912</span> to <span class="num">1913</span>, each removed population and revenue and each demonstrated to the next movement that it could be done. And each loss brought refugees into the remaining territory, which sharpened the politics further.` },
            { p: `The two factors reinforce, and this is the connection the success criteria ask for. Debt forced the state to squeeze provinces harder for revenue; harder squeezing fed provincial nationalism; nationalist revolt cost the state territory and revenue; less revenue meant more borrowing. That loop is the answer to "how did the factors reinforce each other," and it is better than either factor named alone.` }
          ]
        },
        {
          heading: 'The Young Turks, and a reform that inverted',
          blocks: [
            { p: `In <span class="num">1908</span> the <span class="kt">Young Turk</span> revolution, driven substantially by modern-trained army officers, forced Sultan Abdulhamid II to restore the constitution he had suspended in <span class="num">1878</span>. It began as a constitutional and broadly pluralist movement: parliament, elections, an empire held together by shared Ottoman citizenship.` },
            { p: `It did not stay there. Under the pressure of the Balkan defeats and continued great-power intervention, the leadership of the Committee of Union and Progress narrowed toward authoritarian rule and toward Turkish nationalism specifically, which is a change of kind rather than of degree in an empire whose whole logic had been governing difference. The Topic 7.8 chapter follows where that went for the Armenian population during the war.` },
            { p: `Defeat in the First World War brought partition. The Ottoman government signed the Treaty of Sèvres in <span class="num">1920</span>, which would have dismembered Anatolia itself; a nationalist movement under Mustafa Kemal refused it, fought the Greek army and the occupation, and in <span class="num">1923</span> obtained the Treaty of Lausanne and the Republic of Turkey. The empire ended and a nation-state replaced it, which is the pattern the rest of this unit keeps producing.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the bondholders kept excellent books',
              html: `The Ottoman Public Debt Administration published detailed annual reports to its European bondholders, because that is what an institution accountable to investors does, and those reports survive. They record revenues collected by category, staff numbers, and the share of Ottoman income under the Administration's control, in a way the empire's own fragmentary fiscal records often do not. There is something worth noticing in that: the sharpest evidence for the loss of Ottoman fiscal sovereignty was produced by the institution doing the taking, for the benefit of the people being paid. Financial records are usually the most reliable documents a period leaves, because somebody had money riding on their accuracy.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Debt administration as indirect control. <em>The mechanism is that a defaulting state can only borrow again by giving creditors security, and the security lenders want is the revenue stream itself, so a foreign-run body is installed to collect specified taxes at source, which leaves the state formally sovereign while removing its ability to decide what its own money is spent on.</em>`,
        limit: `It is not colonization and should not be written as it. The empire kept its army, its government and its foreign policy, and the Young Turk revolution was made by Ottomans against Ottomans, so use "semi-colonial" and say exactly which power was lost.`,
        comparison: `Against <em>Qing indemnities</em> in section 03: both empires ended up paying foreigners out of customs revenue, and the difference is the trigger. The Ottomans borrowed and defaulted; the Qing lost wars and were billed. Same destination, and one arrived through the credit market and the other through the battlefield.`
      },
      terms: [
        ['Ottoman Public Debt Administration', 'The 1881 body of European bondholder representatives that collected specified Ottoman revenues directly, the standard example of lost fiscal sovereignty.'],
        ['Semi-colonial', 'Formally independent while losing tariff autonomy, jurisdiction over foreigners and designated revenue streams, the Ottoman and Qing position rather than colonization.'],
        ['Tanzimat', 'The nineteenth-century Ottoman reorganization of army, law, taxation and schooling, expensive and partial, which created new groups with new expectations.'],
        ['Young Turks', 'The movement, largely of modern-trained officers, that restored the constitution in 1908 and then narrowed toward authoritarian Turkish nationalism.'],
        ['Treaty of Lausanne', 'The 1923 settlement, replacing the rejected Sèvres, that recognized the Republic of Turkey in place of the empire.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'qing',
      num: '03',
      accent: 'iron',
      name: 'The Qing: The Reform That Dissolved Its Own Support',
      navLabel: 'The Qing',
      dates: 'c. 1895 to 1912 &nbsp;·&nbsp; Indemnity, reform, abdication',
      thesis: `The Qing case has a twist the other two do not, and it is the most interesting thing in this chapter. The dynasty's most serious modernizing reform is also the proximate cause of its fall, because it abolished the institution that had been manufacturing its supporters for a thousand years.`,
      parts: [
        {
          heading: 'The external factor: defeat priced in silver',
          blocks: [
            { p: `The nineteenth-century defeats are in Unit 6, and what matters here is the accumulated bill. The Opium Wars produced indemnities, treaty ports, and tariffs the Qing could no longer set. Defeat by Japan in <span class="num">1895</span> produced the Treaty of Shimonoseki, an enormous indemnity, and the loss of Taiwan, and it landed harder than any European defeat because Japan had been the smaller neighbor and had industrialized within a generation.` },
            { p: `The Boxer Protocol of <span class="num">1901</span> is the one to name for scale. After the Eight-Nation intervention, the Qing were assessed an indemnity payable over thirty-nine years with interest, secured against the customs and salt revenue. The dynasty was now scheduled to pay foreign powers, out of its best revenue streams, until <span class="num">1940</span>.` },
            { p: `Trace the loop again and it is the Ottoman loop with different names. Indemnity payments consumed the revenue that reform required; the province-level taxes raised to cover the gap fell on populations already strained; and every concession granted to service the debt handed a nationalist movement another exhibit. The Qing were being asked to fund modernization out of money already promised to the states that had defeated them.` }
          ]
        },
        {
          heading: 'The internal factor, which is also the reform',
          blocks: [
            { p: `After <span class="num">1901</span> the court launched the New Policies, a serious reform program: a modern army, provincial assemblies, new schools, and, in <span class="num">1905</span>, the abolition of the <span class="kt">civil service examinations</span>.` },
            { p: `Take that last one slowly, because it is the mechanism. The Topic 1.1 chapter explains what the examinations did: they were the route to status, and preparing for them committed the ambitious families of every province to the classical curriculum, to the dynasty that administered the tests, and to a shared idea of what a legitimate government looked like. The system was a machine for turning local elites into people with a personal stake in the state.` },
            { p: `Abolishing it was defensible on the merits. A country that needs engineers, doctors and modern officers cannot select its administrators on classical essays. But the dynasty switched the machine off without building anything that produced the same loyalty, and the sons of those families went instead to new schools, to Japan, and to military academies, where they encountered nationalism, republicanism and the argument that a Manchu dynasty was foreign. The Qing had spent a decade educating its own opposition.` },
            { p: `The <span class="num">1911</span> trigger fits the pattern exactly. The court moved to nationalize trunk railway lines that provincial gentry had invested in, using a foreign loan to do it, and the provinces that had put up the money objected. An army mutiny at Wuchang in October spread as province after province declared independence from Beijing, and the boy emperor Puyi abdicated in February <span class="num">1912</span>. A revolt of the propertied provincial elite, over money, finished a dynasty that had ruled since <span class="num">1644</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that <span class="num">1911</span> replaced the Qing with a functioning republic. The republic was declared, Sun Yat-sen was briefly its provisional president, and real power passed almost at once to Yuan Shikai, who commanded the modern army, then to regional militarists after his death in <span class="num">1916</span>. What followed was decades of fragmentation, the warlord period, the Nationalist government, the Japanese invasion and the civil war of Unit 8. The useful claim is that <span class="num">1911</span> ended the imperial system that had governed China for over two thousand years and did not settle what would replace it, which is a much stronger sentence than "China became a republic."`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Dismantling a loyalty-producing institution. <em>The mechanism is that a selection system which makes elite status depend on the state converts ambitious families into stakeholders, so abolishing it without a replacement does not merely change how officials are chosen: it releases the next generation of the elite to seek status through schools, armies and movements that owe the dynasty nothing.</em>`,
        limit: `It is one strand among several, and the reform was still the right call on its merits. Say that the abolition removed a support rather than that it caused the fall, and keep the indemnities, the provincial railway grievance and the army in the account.`,
        comparison: `Against the <em>Ottoman Tanzimat</em> in section 02: both empires reformed seriously and both found that reform produced organized groups with modern training and new expectations. Officers made the Ottoman revolution and the army mutinied at Wuchang, so in both cases the modernized institution turned first.`
      },
      terms: [
        ['Boxer Protocol', 'The 1901 settlement imposing an indemnity payable to 1940, secured on customs and salt revenue, which mortgaged the money reform needed.'],
        ['New Policies', 'The Qing reform program after 1901: modern army, provincial assemblies, new schools, and the abolition of the examinations.'],
        ['Abolition of the examinations', 'The 1905 decision that ended the thousand-year route to elite status and released the next generation of the elite from any stake in the dynasty.'],
        ['Railway nationalization', 'The 1911 attempt to take over provincially financed lines with a foreign loan, the grievance that turned propertied provincial elites against Beijing.'],
        ['Warlord period', 'The fragmentation of authority among regional militarists after 1916, evidence that 1911 ended a system without establishing a successor.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'russia',
      num: '04',
      accent: 'oxide',
      name: 'Russia: The Chain, in Order',
      navLabel: 'Russia',
      dates: '1905 to 1917 &nbsp;·&nbsp; Rehearsal, February, October',
      thesis: `The success criteria ask you to trace a chain, so this section is written as one. The single most useful fact in it is that the Provisional Government fell over one decision, and that the decision was one it felt it had no authority to avoid.`,
      parts: [
        {
          heading: '1905: the rehearsal',
          blocks: [
            { p: `Russia industrialized rapidly in the <span class="num">1890</span>s under state direction, financed heavily by French loans, and the result was a large industrial workforce concentrated in a few cities, alongside a peasantry that was the overwhelming majority and short of land. That combination, a modern proletariat and an unreformed countryside under an autocracy with no legislature, is the setup.` },
            { p: `Defeat by Japan in <span class="num">1905</span> supplied the shock. On Bloody Sunday in January, troops fired on a peaceful crowd marching to petition the tsar, and the killing of demonstrators who had come to appeal to him personally destroyed something specific: the belief that the tsar was the people's protector against bad officials. Strikes, mutinies and peasant risings followed through the year.` },
            { p: `Nicholas II conceded the October Manifesto, which promised civil liberties and an elected legislature, the <span class="kt">Duma</span>. He then spent the following years restricting its franchise and dissolving it when it displeased him. That is option three from section 01 taken and then half-withdrawn, and it produced the worst of both: a legislature real enough to organize an opposition, and too weak to give it a stake.` }
          ]
        },
        {
          heading: 'February 1917: the autocracy goes',
          blocks: [
            { p: `The war did what the war does in this chapter. Russia mobilized an enormous army and could not supply it; the railway network moved troops or food but struggled to do both; cities went short of bread and fuel through the winter of <span class="num">1916</span> to <span class="num">1917</span>; casualties were immense. Nicholas took personal command at the front in <span class="num">1915</span>, which attached every subsequent defeat to him by name.` },
            { p: `In February <span class="num">1917</span> bread queues and strikes in Petrograd turned into mass demonstrations, and the decisive moment is when the garrison ordered to suppress them refused and joined instead. An autocracy whose troops will not fire has nothing left, and Nicholas abdicated in March.` },
            { p: `Two bodies then claimed authority in the same city, which is the arrangement to name: the <span class="kt">Provisional Government</span>, drawn from the Duma and composed largely of liberals, and the <span class="kt">Petrograd Soviet</span>, a council of workers' and soldiers' deputies. The Soviet's Order No. 1 instructed soldiers to obey the Provisional Government only where the Soviet agreed, which tells you where practical power sat. This is <span class="kt">dual power</span>.` }
          ]
        },
        {
          heading: 'The one fatal decision, and October',
          blocks: [
            { p: `The Provisional Government continued the war. The reasoning was not stupid: it was provisional, unelected, bound by treaty commitments to allies whose loans Russia depended on, and it believed only a constituent assembly could make a decision of that size. But it meant asking an exhausted population to keep dying for a policy it had not chosen, from a government nobody had elected.` },
            { p: `It also postponed land redistribution to that same future assembly, while peasant soldiers were deserting to be present when the land was divided. Two enormous questions, peace and land, both deferred by a government with no mandate to defer them.` },
            { p: `Lenin returned in April and offered the opposite: peace, land, bread, and all power to the soviets. The Bolsheviks were a minority for most of <span class="num">1917</span>, and what changed was the Kornilov affair in August, when a general's attempted march on Petrograd was stopped substantially by Bolshevik-organized workers, after which the party gained majorities in the Petrograd and Moscow soviets. In October they seized the government buildings in a rapid and relatively bloodless operation, in the name of the soviets.` },
            { p: `Then the part students often omit: the Bolsheviks allowed the Constituent Assembly elections, lost them to the Socialist Revolutionaries, and dispersed the assembly after one day in January <span class="num">1918</span>. They signed the Treaty of Brest-Litovsk with Germany in March, giving up enormous territory to end the war, and fought a civil war until <span class="num">1922</span>. Taking power in October was the beginning of the fight, not the end.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: read the slogan as a policy document',
              html: `"Peace, land, bread" is usually quoted as evidence that the Bolsheviks were good at propaganda, and it is better used as evidence about the Provisional Government. Each of the three words names something the government in office had declined to deliver: it continued the war, deferred land redistribution to a future assembly, and could not fix urban food supply. A successful slogan is a map of an opponent's unresolved problems, which is why the productive question about it is not why it appealed but what it tells you was missing. Compare it with the Provisional Government's own proclamations, which promise procedure, an assembly, elections, a constitution, and you can see two rival theories of legitimacy in a handful of words each.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Legitimacy as the budget for unpopular decisions. <em>The mechanism is that any government must sometimes ask its population for something painful, and the authority to do that comes either from an election, from tradition, or from force, so a provisional government with none of the three cannot afford a policy as costly as continuing a lost war, and the rival that promises to end it does not need a majority to displace it.</em>`,
        limit: `It explains why the Provisional Government fell and not why the Bolsheviks specifically replaced it, which needs the Petrograd soviet majorities after Kornilov and an organized party willing to act in October.`,
        comparison: `Against the <em>French Revolution</em> in Topic 5.2: both begin with a fiscal and food crisis inside a war-strained monarchy, and both pass through a moderate constitutional phase before a disciplined minority takes power. The difference worth writing is that <span class="num">1917</span> happened inside a total war, so the question of whether to keep fighting was itself the decisive political issue.`
      },
      terms: [
        ['Bloody Sunday', 'The January 1905 shooting of a peaceful petitioning crowd, which ended the belief that the tsar stood above his officials as the people\'s protector.'],
        ['Duma', 'The elected legislature conceded in the October Manifesto of 1905, then restricted and dissolved repeatedly, strong enough to organize opposition and too weak to buy loyalty.'],
        ['Dual power', 'The February to October 1917 split between the Provisional Government and the Petrograd Soviet, with formal authority in one and practical obedience in the other.'],
        ['Provisional Government', 'The unelected liberal government that continued the war and deferred land reform, and fell because it could afford neither decision.'],
        ['Brest-Litovsk', 'The March 1918 treaty ending Russia\'s war with Germany at the cost of enormous territory, the promise of peace honored at a price.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The first gives you the mechanism all three collapses share, and the last is the chain the success criteria ask you to trace in order.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Three empires, one squeeze, three different exits',
        body: `Staying a great power after industrialization meant buying rifles, quick-firing artillery, railways and steel warships, all manufactured goods, while all three empires taxed peasant agriculture through intermediaries. The Ottomans borrowed, defaulted in 1875, and by 1881 had European bondholders collecting their salt and tobacco revenue through the Public Debt Administration. The Qing were billed: Shimonoseki in 1895 and a Boxer Protocol indemnity in 1901 payable until 1940 against customs and salt. Russia industrialized on French loans and created a concentrated urban workforce under an autocracy with no legislature. None of them failed to modernize. Each modernized expensively and partially, and the reforms produced trained officers, students and workers who had both grievances and organization.`
      },
      {
        category: 'Irony',
        title: 'The Qing abolished the machine that made its own supporters',
        body: `The civil service examinations had for a thousand years made elite status depend on a curriculum the dynasty administered, which committed ambitious provincial families to the state personally. The New Policies abolished them in 1905, sensibly, because a country needing engineers and modern officers cannot select administrators by classical essay, and nothing was built that produced comparable loyalty. Those families' sons went to new schools, to Japan and to military academies, and met nationalism and republicanism there. When Beijing tried in 1911 to nationalize provincially financed railways with a foreign loan, the propertied provincial elite turned, an army mutinied at Wuchang, provinces declared independence, and Puyi abdicated in 1912.`
      },
      {
        category: 'Reinforcement',
        title: 'Debt and nationalism fed each other in a loop',
        body: `The success criteria ask how internal and external factors reinforced each other, so write the loop rather than the list. Ottoman debt forced harder revenue extraction from the provinces; harder extraction fed provincial nationalism; Greek, Serbian, Romanian and Bulgarian independence and then the Balkan Wars of 1912 to 1913 removed population and revenue and showed the next movement it could be done; lost revenue forced more borrowing. Capitulations tightened it further by capping the tariffs the empire could charge, so it could not protect the manufacturing that would have widened the tax base. The same loop runs in China with indemnities in place of loans.`
      },
      {
        category: 'Chains',
        title: 'The Provisional Government fell over one decision it felt unable to avoid',
        body: `Bloody Sunday in 1905 destroyed the tsar as the people's protector; the October Manifesto conceded a Duma that was then restricted and dissolved. War brought supply failure, bread shortage and immense casualties, and Nicholas taking command in 1915 attached every defeat to his name. In February 1917 the Petrograd garrison refused to fire and he abdicated, leaving dual power: a Provisional Government with formal authority and a Petrograd Soviet whose Order No. 1 decided whether soldiers obeyed. The government continued the war and deferred land reform to a future assembly, because unelected and treaty-bound it felt it could do neither. Peace, land and bread names exactly those three gaps, and after Kornilov the Bolsheviks held the soviet majorities to act on them.`
      }
    ]
  }
};
