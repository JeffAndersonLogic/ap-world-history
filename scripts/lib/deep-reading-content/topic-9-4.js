'use strict';

/**
 * Topic 9.4, Economics in the Global Age: the deep reading.
 *
 * Why this exists. The learning objective is continuity and change in the
 * global economy from 1900 to the present, and the success criteria name Deng-
 * era reform, Bangladesh garment manufacturing and regional trade agreements as
 * the evidence. The First & 10 gives each of those a paragraph. The exam asks
 * students to explain how the evidence proves a claim, which means the chapter
 * has to supply the mechanism connecting a policy decision in Beijing in 1978
 * to a factory in Dhaka to a closed plant in Ohio.
 *
 * The volume's spine does that work. Topic 9.1 made moving things cheap; this
 * chapter is about who captured the savings. Two mechanisms carry it: capital
 * became mobile while labor did not, and value in a supply chain concentrates
 * at the design and branding ends rather than in assembly.
 *
 * Three things carried deliberately:
 *
 *   1. The Bretton Woods order is treated as a set of rules with a purpose,
 *      built by people who had watched the 1930s, rather than as a list of
 *      acronyms. Its end in 1971 is what makes the 1980s turn intelligible.
 *   2. Every number about poverty and inequality is given with its measure, its
 *      line, its source and its date, because the contest over globalization's
 *      effects is very largely a contest over which measure to use.
 *   3. The trade-versus-automation dispute over manufacturing job loss is
 *      presented as the live scholarly disagreement it is, with the leading
 *      estimate on each side named. Resolving it by assertion would be the
 *      easiest and worst thing this chapter could do.
 */

module.exports = {
  topicKey: 't9-4',
  slug: 'topic-9-4-economics-global-age',
  sourceFile: 'deep-reading-topic-9-4-economics-global-age.html',
  lessonFile: 'lesson-9-4-economics-global-age.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 9.4: Who Captured the Savings',
  eyebrow: 'Topic 9.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Captured the <em>Savings</em>',
  deck: `The Topic 9.1 chapter explained how moving goods, money and information got cheap. This one asks the question that follows: the savings were enormous, so where did they go? The answer runs through a set of rules built in <span class="num">1944</span>, a turn toward markets in the <span class="num">1970</span>s and <span class="num">1980</span>s, and one structural fact that decides most of the outcome. Capital can move and workers mostly cannot.`,
  meta: ['Four sections', 'Rules, the turn, the supply chain, the accounts', 'Read alongside the First & 10'],
  footerNote: 'Topic 9.4 &nbsp;·&nbsp; Who Captured the Savings &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The four sections are a chronology and an argument at once. Sections 01 and 02 are the rules and their replacement, section 03 is what firms did once the rules changed, and section 04 is the accounting, which is where the genuine disagreements are. If a checkpoint asks you to qualify an argument, section 04 is where the qualifications live.`,
    steps: [
      `<b>01 The Bretton Woods order:</b> what the 1944 rules were for, and why they came apart in 1971.`,
      `<b>02 The turn to markets:</b> what liberalization meant mechanically, in Britain, the United States, Chile and China.`,
      `<b>03 The new geography of work:</b> supply chains, Bangladesh garments, and where value actually sits.`,
      `<b>04 The accounts:</b> poverty and inequality numbers with their measures attached, and the trade-versus-automation dispute.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'brettonwoods',
      num: '01',
      accent: 'gold',
      name: 'Rules Written by People Who Had Watched the 1930s',
      navLabel: 'The Bretton Woods order',
      dates: '1944 to 1973 &nbsp;·&nbsp; The postwar monetary order',
      thesis: `The delegates who met in New Hampshire in <span class="num">1944</span> were not designing an abstract system. They were trying to prevent a repeat of a specific sequence they had all lived through: financial collapse, competitive devaluation, tariff walls, collapsing trade, mass unemployment, and the politics that followed. Every feature of the system they built is aimed at one part of that sequence.`,
      parts: [
        {
          heading: 'What they were preventing',
          blocks: [
            { p: `After <span class="num">1929</span> states responded to depression by protecting themselves individually in ways that made the collective position worse. They raised tariffs, so trade contracted; they devalued their currencies to make exports cheaper, and their trading partners devalued in response, so nobody gained; and they restricted the movement of money. World trade fell by roughly two thirds in value in the early <span class="num">1930</span>s. Everyone at the <span class="num">1944</span> conference understood that outcome as a coordination failure rather than as bad luck, which is why the institutions they built are all mechanisms for keeping states from defecting.` },
            { p: `Three creations. The <span class="kt">International Monetary Fund</span> would lend to countries with short-term balance of payments problems so that they would not have to devalue or impose controls in a panic. The International Bank for Reconstruction and Development, which became the core of the <span class="kt">World Bank</span>, would lend for reconstruction and later for development. And a set of negotiated tariff reductions, the General Agreement on Tariffs and Trade, was signed in <span class="num">1947</span> and ran rounds of negotiations for nearly half a century before being folded into the <span class="kt">World Trade Organization</span> at the start of <span class="num">1995</span>.` },
            { p: `The monetary arrangement itself was a compromise. Currencies were pegged to the United States dollar at fixed but adjustable rates, and the dollar was convertible into gold at a fixed price. Capital movement across borders was restricted by design, and this is the feature most often forgotten. The architects wanted goods to move freely and money not to, because free capital movement would let financial markets discipline any government whose domestic policies they disliked. Governments were to be free to pursue full employment at home while trading abroad. The historian John Ruggie's name for that bargain, <b>embedded liberalism</b>, is a useful one to have.` }
          ]
        },
        {
          heading: 'Why it ended',
          blocks: [
            { p: `The system depended on the dollar's convertibility into gold, and by the late <span class="num">1960</span>s far more dollars were held abroad than the United States held gold to redeem. Spending on the Vietnam War and on domestic programs, and the recovery of European and Japanese export capacity, widened the gap. In August <span class="num">1971</span> the United States suspended convertibility, and by <span class="num">1973</span> the major currencies were floating against each other rather than being pegged.` },
            { p: `That is a technical-sounding change with very large consequences, and this is the connection worth carrying. Once exchange rates float, currency itself becomes something to trade, and the case for restricting cross-border capital movement weakens. Over the following two decades most wealthy countries removed their capital controls. Money became mobile, and the balance of power between governments and financial markets shifted with it, because a government pursuing policies investors dislike can now watch capital leave within a day.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the negotiating record survives',
              html: `Bretton Woods is unusually well documented for an international negotiation, because the conference produced published proceedings and because the two principal architects, John Maynard Keynes for Britain and Harry Dexter White for the United States, both left extensive papers. From them historians can see what was proposed and rejected, which is often more revealing than what was adopted. Keynes proposed an international clearing union with its own reserve unit and rules that would have pressed surplus countries as well as deficit ones to adjust; the American plan, backed by the country holding most of the world's gold and most of its productive capacity, prevailed. The lesson is not that Keynes was right. It is that the postwar economic order reflected the distribution of power in 1944 rather than a neutral technical judgment, and that is a claim you can support from the documents rather than assert.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Institutionalized cooperation against competitive devaluation. <em>The mechanism is that each state acting individually to protect itself in a downturn (raising tariffs, devaluing, restricting capital) makes every state worse off, so the 1944 architects created lending facilities and negotiated tariff rounds that removed the reason to defect. Trade rules work by changing the payoff to defection, not by outlawing it.</em>`,
        limit: `The order was built by and for the industrialized capitalist economies. The Soviet bloc did not participate, most of Asia and Africa was still under colonial rule and had no seat, and the terms of the arrangement reflected the fact that the United States held most of the world's gold in 1944.`,
        comparison: `Against the <em>silver system</em> of Topic 4.4: both are monetary orders in which one commodity anchors long-distance exchange, and both ended when the anchor could no longer bear the volume of claims on it. The difference is that the silver flow was an emergent result of Spanish American mining and Chinese demand, while Bretton Woods was designed in a hotel over three weeks, which is why its end has a date and the silver system's does not.`
      },
      terms: [
        ['Bretton Woods', 'The 1944 conference and the postwar monetary order it produced: currencies pegged to a gold-convertible dollar, with capital movement restricted by design.'],
        ['International Monetary Fund', 'The body created in 1944 to lend to states with short-term balance of payments problems so they would not devalue or impose controls in a panic.'],
        ['World Bank', 'The institution grown from the 1944 reconstruction bank, which lends for development projects and, later, attached policy conditions to its lending.'],
        ['World Trade Organization', 'The body established in 1995 out of the 1947 tariff agreement, with a binding dispute settlement system its predecessor lacked.'],
        ['Embedded liberalism', 'Ruggie\'s name for the postwar bargain: open trade abroad combined with governments free to pursue full employment at home.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'turn',
      num: '02',
      accent: 'rust',
      name: 'What Liberalization Actually Meant',
      navLabel: 'The turn to markets',
      dates: '1973 to 2001 &nbsp;·&nbsp; Chile and Britain to China in the WTO',
      thesis: `&ldquo;Free-market policies&rdquo; is a label, and a label is not a mechanism. The turn of the late twentieth century consisted of four specific and separable changes, and different countries did different combinations of them in different orders with very different results. Naming the four is worth more than naming the leaders.`,
      parts: [
        {
          heading: 'The four moves',
          blocks: [
            { p: `<b>Privatization</b>: selling state-owned enterprises, utilities, airlines, telephone systems, mines, to private owners. <b>Deregulation</b>: removing state rules on prices, entry, working conditions or financial activity. <b>Trade liberalization</b>: cutting tariffs and quotas so imported goods compete with domestic ones. <b>Capital account opening</b>: allowing money to move across the border freely, which as section 01 explained was the piece Bretton Woods had deliberately withheld.` },
            { p: `Why the turn happened when it did has several causes and no single one. The <span class="num">1970</span>s produced simultaneous inflation and unemployment, which the dominant postwar economic framework had not predicted and struggled to explain, and that intellectual failure opened space for the alternative associated with Milton Friedman and the Chicago school. Oil shocks in <span class="num">1973</span> and <span class="num">1979</span> raised costs across the industrial economies. Profitability in older manufacturing sectors was falling. And the political constituency for the postwar settlement, organized industrial labor, was weakening in several countries at once.` }
          ]
        },
        {
          heading: 'Four countries, four versions',
          blocks: [
            { p: `<b>Chile</b> came first and is the hardest case to teach honestly. After the military coup of <span class="num">1973</span>, economists trained at Chicago restructured the Chilean economy, privatizing state firms, cutting tariffs and opening capital markets. Growth over the following decades was substantial by regional standards and inequality was high; the country also suffered a severe crash in <span class="num">1982</span> that forced the state to rescue the banking system. Two things must be said together: this was the earliest thoroughgoing application of the program, and it was carried out by a dictatorship that imprisoned, tortured and killed its opponents and faced no electoral check. The absence of that check is part of the historical explanation for how fast it moved.` },
            { p: `<b>Britain</b> under Margaret Thatcher, prime minister from <span class="num">1979</span> to <span class="num">1990</span>, privatized telecommunications in <span class="num">1984</span> and gas in <span class="num">1986</span> among many others, sold public housing to its tenants, cut top income tax rates, deregulated finance, and defeated the miners' strike of <span class="num">1984</span> and <span class="num">1985</span> in a confrontation that broke the bargaining power of the industrial unions. <b>The United States</b> under Ronald Reagan, president from <span class="num">1981</span> to <span class="num">1989</span>, cut taxes, deregulated several industries, and dismissed striking air traffic controllers in <span class="num">1981</span> in a signal about labor relations that employers read correctly.` },
            { p: `<b>China</b> is the outlier that matters most, and getting it right is worth a great deal in an essay. From the Third Plenum of December <span class="num">1978</span>, Deng Xiaoping's leadership dismantled collective farming in favor of the <span class="kt">household responsibility system</span>, under which families farmed assigned land and kept or sold what they produced above a quota. It opened four <span class="kt">Special Economic Zones</span> in <span class="num">1980</span>, of which Shenzhen is the famous case, where foreign firms could invest under rules that did not apply elsewhere. It permitted township and village enterprises. And it did all of this while keeping the Communist Party's political monopoly, state ownership of the largest banks and firms, and tight control over the currency and the capital account.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not describe Deng-era China as adopting free-market capitalism, and do not describe it as staying communist. Both miss the mechanism, which is <b>selective</b> liberalization: product markets and foreign investment were opened while capital controls, state ownership of strategic sectors and single-party rule were retained. That selectivity is the argument. China took the parts of the program that raised output and refused the parts that would have transferred political or financial control, and its performance is the single strongest piece of evidence against the claim that the four moves in this section are a package that must be adopted whole. If a checkpoint asks you to qualify an argument about liberalization, this is the qualification.`
            } },
            { p: `The pressure to adopt the program was not only intellectual. After Mexico announced in <span class="num">1982</span> that it could not service its debts, a wave of debt crises across Latin America and Africa put dozens of governments in front of the International Monetary Fund and the World Bank, whose loans came with <span class="kt">structural adjustment</span> conditions: cut public spending, devalue, privatize, open to trade. The economist John Williamson labeled the common prescriptions the <b>Washington Consensus</b> in <span class="num">1989</span>. Whether adjustment worked is contested, and the criticism is not only from the left: the record includes deep recessions, cuts to health and education budgets, and in several countries a decade of little or no growth, which is why the <span class="num">1980</span>s are called the lost decade in Latin America. The Topic 9.7 chapter follows what people did about it.` }
          ]
        }
      ],
      useThis: {
        tool: `Selective liberalization. <em>The mechanism is that privatization, deregulation, trade opening and capital account opening are four separable policies with different effects, so a state can take the ones that attract investment and raise output while refusing the ones that would surrender control of its currency, its banks or its politics. China&rsquo;s post-1978 path is the demonstration, and it is why the outcomes of "liberalization" vary so widely across the countries that are said to have done it.</em>`,
        limit: `Selectivity was available to a state with the size, the state capacity and the leverage to insist on it. A small economy facing a debt crisis and negotiating with the IMF in 1985 did not have the option, which is why the same era looks like choice in Beijing and coercion in Lusaka.`,
        comparison: `Against <em>state-led industrialization</em> in Unit 7: the Soviet five-year plans and Meiji Japan both used the state to force industrial development, and Deng's China kept the state's commanding position while adding market prices and foreign capital. Reading the three together is the fastest way to show that "state versus market" is a spectrum a country moves along rather than a switch it flips.`
      },
      terms: [
        ['Privatization', 'The sale of state-owned enterprises to private owners, one of the four separable components of late twentieth-century liberalization.'],
        ['Structural adjustment', 'Policy conditions attached to IMF and World Bank lending from the 1980s: spending cuts, devaluation, privatization and trade opening.'],
        ['Household responsibility system', 'The Chinese reform from 1978 under which families farmed assigned land and kept or sold output above a state quota, replacing collective farming.'],
        ['Special Economic Zone', 'A designated area, first established in China in 1980, where foreign investment operated under rules that did not apply in the rest of the country.'],
        ['Washington Consensus', 'Williamson\'s 1989 label for the standard package of liberalizing prescriptions urged on indebted countries by Washington-based institutions.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'supplychain',
      num: '03',
      accent: 'iron',
      name: 'The Factory Came Apart',
      navLabel: 'The new geography of work',
      dates: 'c. 1970 to the 2020s &nbsp;·&nbsp; Global value chains',
      thesis: `The decisive change in how the world makes things is that a product stopped being made in a factory and started being made across a chain of them in different countries. That was possible because transport and communication got cheap and tariffs came down, and it happened because value is not distributed evenly along the chain.`,
      parts: [
        {
          heading: 'Why a chain instead of a factory',
          blocks: [
            { p: `Arkwright's mill in Topic 5.3 brought every stage of production under one roof because moving partly finished goods was expensive and supervising distant workers was impossible. Reverse both of those and the logic reverses: if shipping a component across an ocean costs almost nothing and you can specify, monitor and pay for it instantly, then every stage of production can go wherever that stage is cheapest. A <span class="kt">global value chain</span> is a factory taken apart and distributed across the map.` },
            { p: `Firms reorganized accordingly. A <span class="kt">multinational corporation</span> like Nestlé, Nissan or India's Mahindra and Mahindra operates production, sourcing and sales across many jurisdictions, and increasingly it does not own most of the chain at all. The characteristic modern arrangement is that a lead firm owns the design, the brand and the customer relationship, and contracts the manufacturing to independent suppliers who compete against each other for the order. That structure is what lets a lead firm move production between countries in a season, and it is what makes supplier countries compete on cost.` },
            { p: `Where the value sits is the part students miss. Studies of the value chains of consumer electronics have repeatedly estimated that assembly, the visible part, captures a low single-digit percentage of the retail price, while design, software, key components, marketing and retail capture the rest. That distribution is sometimes drawn as a curve, high at the design end, low in the middle at assembly, high again at branding and retail. It explains why a country can host enormous manufacturing employment and capture a modest share of the revenue, and it is the single most useful diagram in this topic.` }
          ]
        },
        {
          heading: 'Bangladesh, and what a supplier country actually gets',
          blocks: [
            { p: `Bangladesh's ready-made garment industry began in the late <span class="num">1970</span>s and grew into one of the world's largest, employing on the order of four million people, the large majority of them women, and supplying the great bulk of the country's export earnings. The first cause is one students never guess: the international quota system in textiles that operated from <span class="num">1974</span> to <span class="num">2004</span> limited how much each country could export to wealthy markets, which pushed buyers toward countries with unused quota and helped establish production in places that had no textile tradition. The industry then survived the quota system's end because by <span class="num">2005</span> the skills, the supplier networks and the wage level were in place.` },
            { p: `What the country gained is real and should be stated: export earnings, a large increase in paid employment for women in a society where formal female employment had been rare, and, in the research literature on the sector, associations between garment employment and later marriage, later childbirth and increased schooling for girls in the areas that supplied the workers. Do not let a critique of the industry erase this; it is the strongest case that manufacturing employment changes lives, and it belongs in any qualified answer.` },
            { p: `What it cost is also real. On 24 April <span class="num">2013</span> the Rana Plaza building outside Dhaka collapsed, killing over a thousand garment workers who had been ordered back into a building whose structural cracks had been reported the day before. It remains among the deadliest industrial disasters on record. The mechanism behind it is the chain described above: buyers place orders with suppliers who win them on price and delivery time, the suppliers subcontract further, and no one in the chain has both the information and the incentive to refuse an unsafe building. The response, the Accord on Fire and Building Safety in Bangladesh signed by international brands and unions in <span class="num">2013</span>, is interesting precisely because it was a private agreement doing the work a labor inspectorate would do, which tells you what was missing.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that multinational corporations "exploit cheap labor" and stop, and do not write that low-wage manufacturing is simply a ladder every country climbs. Both are conclusions rather than arguments. The defensible claim states the mechanism and the evidence on both sides in one paragraph: lead firms contract to suppliers who compete on price, which transmits the pressure for low wages and long hours down the chain without the lead firm employing anyone; and the same industry has been, for South Korea and Taiwan earlier and for Bangladesh and Vietnam later, one of the few available routes out of subsistence agriculture into wage employment, with measurable effects on women's schooling and marriage age. Whether the trade was worth it is a judgment; the two mechanisms are facts, and an answer that names both is doing the complexity work the criteria ask for.`
            } }
          ]
        },
        {
          heading: 'And where the high-value work went',
          blocks: [
            { p: `The counterpart of manufacturing moving to Asia and Latin America is what the key concept calls the growth of <b>knowledge economies</b>, in which the largest share of output comes from information, design, finance, software and services rather than from making physical goods. Finland's transformation around Nokia in the <span class="num">1990</span>s, Japan's electronics and precision manufacturing, and the software and finance concentrations of the United States are the standard examples.` },
            { p: `But the knowledge economy is not confined to wealthy countries, and saying so is a useful qualification. India's information technology services industry, concentrated around Bangalore and Hyderabad and built on firms founded in the <span class="num">1980</span>s and <span class="num">1990</span>s, grew rapidly from the late <span class="num">1990</span>s and exported services over the same cheap networks that Topic 9.1 describes. That is the second half of the story: once information moves at near-zero cost, a service can be produced anywhere it can be delivered from, and the geography of white-collar work becomes contestable in the same way the geography of assembly did a generation earlier.` }
          ]
        }
      ],
      useThis: {
        tool: `Unbundling production. <em>The mechanism is that cheap transport plus instant communication plus lower tariffs let a firm separate the stages of making a product and place each one where it is cheapest, while keeping the design, the brand and the customer relationship, which are where most of the value sits. The lead firm therefore captures the margin without employing the workers, and supplier countries compete against each other on cost for the stage that captures least.</em>`,
        limit: `The chain is not frictionless and its geography has shifted repeatedly, as wages rose in coastal China and production moved to Vietnam and Bangladesh. Some sectors never unbundled at all because their processes cannot be separated, and disruptions in the early 2020s prompted several governments and firms to reconsider how far a chain should stretch.`,
        comparison: `Against the <em>putting-out system</em> in Topic 5.3: a merchant supplying raw material to independent households and collecting the finished cloth is structurally the same arrangement as a lead firm contracting to independent suppliers. In both cases the organizer owns the market relationship rather than the production, and in both cases the risk sits with the producer. Industrial history is not a straight line from dispersed to concentrated production, which is a genuinely useful continuity to have in your pocket.`
      },
      terms: [
        ['Global value chain', 'Production separated into stages performed in different countries, made viable by cheap transport, instant communication and lower tariffs.'],
        ['Multinational corporation', 'A firm operating across jurisdictions, characteristically owning design, brand and customer relationship while contracting manufacturing to independent suppliers.'],
        ['Ready-made garment sector', 'Bangladesh\'s dominant export industry, employing on the order of four million people, mostly women, and shaped by the textile quota regime of 1974 to 2004.'],
        ['Rana Plaza', 'The garment factory building outside Dhaka that collapsed in April 2013, killing over a thousand workers, and prompted a private brand-and-union safety accord.'],
        ['Knowledge economy', 'An economy whose output comes chiefly from information, design, software, finance and services rather than physical manufacturing.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'accounts',
      num: '04',
      accent: 'oxide',
      name: 'The Accounts, With Their Measures Attached',
      navLabel: 'The accounts',
      dates: '1990 to the 2020s &nbsp;·&nbsp; Poverty, inequality, and the job losses',
      thesis: `Whether globalization made the world better off is the most argued question in this unit, and most of the argument is really about which number you look at. This section gives the main figures with their measure, their source and their date, and names the two disagreements that are genuinely unresolved.`,
      parts: [
        {
          heading: 'Extreme poverty fell, and here is exactly what that means',
          blocks: [
            { p: `The World Bank measures <span class="kt">extreme poverty</span> as living below an international poverty line, set at 1.90 dollars a day in <span class="num">2011</span> purchasing power terms and revised to 2.15 dollars a day in <span class="num">2017</span> terms. On that measure the share of the world's population in extreme poverty fell from roughly a third or more around <span class="num">1990</span> to under a tenth by the late <span class="num">2010</span>s, and the absolute number fell as well despite population growth. That is a very large change and it should not be minimized.` },
            { p: `Now the qualifications a careful answer includes, none of which reverses the finding. The line is extremely low and describes destitution rather than adequacy; the number of people above it and still poor is much larger. The figures come from household surveys of varying quality and coverage, adjusted by purchasing power estimates that are themselves contested and revised. And a large share of the global decline is China, whose extreme poverty fell by hundreds of millions after <span class="num">1978</span>, so a claim that "globalization reduced poverty" is doing much of its work through a single country whose policy mix, as section 02 showed, was not the standard prescription.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a poverty rate is a construction, not a count',
              html: `To produce a global poverty figure you need three things, and each is a decision. First a <b>line</b>, currently anchored on the national poverty lines of the poorest countries, which changes when those lines are updated. Second a <b>conversion</b>, because a dollar buys different amounts in different countries, done using purchasing power parity estimates revised roughly every six years; the <span class="num">2011</span> and <span class="num">2017</span> revisions each moved the historical series. Third a <b>survey</b>, since consumption is measured by asking households, and coverage is thin in some regions and absent in a few. None of that makes the trend fake. It means the trend is robust and the third decimal place is not, and a student who says "the World Bank estimates, on an international line of about two dollars a day in purchasing power terms" is making a claim that holds up under questioning.`
            } }
          ]
        },
        {
          heading: 'Inequality moved in two directions at once',
          blocks: [
            { p: `This is the fact that makes the whole argument confusing, and stating it clearly is worth a great deal. <b>Between countries</b>, inequality narrowed over the three decades after <span class="num">1990</span>, because China and India grew much faster than the wealthy economies. <b>Within countries</b>, inequality widened in a large number of them over the same period, including most of the wealthy economies and China itself. So a person asking "did inequality rise or fall" is asking a question that has two correct and opposite answers depending on the unit of analysis.` },
            { p: `The most cited attempt to put both in one picture is the graph of real income growth by global income percentile between the late <span class="num">1980</span>s and the late <span class="num">2000</span>s produced by Christoph Lakner and Branko Milanovic, often called the elephant curve. It shows strong income growth for the middle of the global distribution, largely people in Asia, strong growth at the very top, and weak growth around the eightieth to ninetieth percentiles, which is roughly where the working and lower-middle classes of wealthy countries sit. The interpretation, that globalization lifted the global middle and the global rich while stagnating the rich world's workers, is powerful and it is contested: critics including Adam Corlett in <span class="num">2016</span> showed that changes in which countries appear in the sample, especially Japan and the former Soviet bloc, account for a substantial part of the dip. Cite the curve, and cite the critique, and you are doing history rather than repeating a graph.` }
          ]
        },
        {
          heading: 'The unresolved argument about the lost jobs',
          blocks: [
            { p: `Manufacturing employment fell substantially in the United States and in several European countries from around <span class="num">2000</span>, and the political consequences of that decline run through the Topic 9.7 chapter and beyond. Why it fell is a genuine and unresolved dispute among economists, and a student who presents it as one is doing exactly what the complexity criterion asks.` },
            { p: `The <b>trade</b> case is associated with David Autor, David Dorn and Gordon Hanson, whose work from <span class="num">2013</span> onward compared American local labor markets by their exposure to Chinese import competition and found large, persistent and geographically concentrated losses in employment and wages, with estimates in the range of two million or more manufacturing jobs lost to that competition in the <span class="num">2000</span>s, and slow adjustment in the affected places. The <b>automation</b> case points out that American manufacturing output kept rising while employment fell, which is the signature of rising productivity rather than of lost production, and studies such as one from Ball State University in <span class="num">2015</span> attributed the large majority of job losses in the <span class="num">2000</span>s to productivity growth rather than trade.` },
            { p: `The two are not fully separable, and that is the honest conclusion rather than a dodge. Import competition raises the pressure to automate; automation raises the productivity that makes competing possible. What the evidence supports is that both mattered, that their relative weight is disputed in the peer-reviewed literature, and that the local concentration of the losses, whatever their cause, is what made them politically explosive. Aggregate gains distributed thinly across consumers and concentrated losses landing on particular towns is a distribution problem, and it is the same one this chapter opened with.` }
          ]
        }
      ],
      useThis: {
        tool: `Mobile capital and immobile labor. <em>The mechanism is that after capital controls came off, a firm could relocate production to another country in a planning cycle while a worker could not follow, and the party that can credibly threaten to leave sets the terms. That asymmetry, rather than any single policy, is the best short explanation of why the gains from cheaper production accrued to capital and to consumers while the losses concentrated on particular workers in particular places.</em>`,
        limit: `The asymmetry is not total: relocation carries real costs, skilled labor does migrate, and states retain taxing and regulatory power they sometimes use. And it does not explain the largest single change in the period, hundreds of millions of people leaving poverty in Asia, which is a gain to labor in the receiving countries.`,
        comparison: `Against <em>silver</em> in Topic 4.4 and the <em>Atlantic economy</em> in Topic 4.5: in both earlier cases the profit from a long-distance system settled where the capital and the market power were rather than where the labor was done. Potosí and Dhaka are separated by four centuries and the structural relationship rhymes, which is a continuity worth writing rather than a coincidence worth noting.`
      },
      terms: [
        ['Extreme poverty', 'Living below the World Bank\'s international poverty line, 1.90 dollars a day in 2011 purchasing power terms and 2.15 in 2017 terms; a measure of destitution, not adequacy.'],
        ['Purchasing power parity', 'The adjustment that converts incomes into comparable amounts across countries, revised periodically, which shifts the historical poverty series each time.'],
        ['Elephant curve', 'The Lakner and Milanovic graph of global income growth by percentile, showing gains in the global middle and top and stagnation around the rich world\'s workers; its dip is contested.'],
        ['China shock', 'The Autor, Dorn and Hanson finding of large, persistent and locally concentrated American job losses from Chinese import competition in the 2000s.'],
        ['Between and within inequality', 'The distinction that resolves the argument: inequality between countries narrowed after 1990 while inequality within many countries widened.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a claim, its evidence and its mechanism. Cards three and four are qualification cards, which is the criterion most students lose points on, so practice writing them as full paragraphs rather than as an added sentence at the end.`,
    pairs: [
      {
        category: 'Continuity and change',
        title: 'The rules changed twice, in 1944 and again after 1971',
        body: `The 1944 order was designed against a specific memory: tariffs, competitive devaluation and capital flight after 1929 had cut world trade by roughly two thirds. So the architects created lending facilities in the IMF, development lending through the World Bank, negotiated tariff reductions under GATT from 1947, currencies pegged to a gold-convertible dollar, and deliberate restrictions on cross-border capital so governments could pursue full employment at home. When the United States suspended convertibility in 1971 and the major currencies floated by 1973, the case for capital controls weakened and most wealthy states removed them over the following two decades. The continuity is the commitment to open trade; the change is that money became mobile, which shifted the balance between governments and financial markets.`
      },
      {
        category: 'Evidence',
        title: 'Deng\'s China is the strongest evidence that liberalization is not one thing',
        body: `Liberalization is four separable policies: privatization, deregulation, trade opening and capital account opening. From the Third Plenum of December 1978, China dismantled collective farming through the household responsibility system, opened four Special Economic Zones in 1980 where foreign investors operated under different rules, permitted township and village enterprises, and joined the WTO in 2001, while retaining single-party rule, state ownership of the largest banks and firms, and tight control of the capital account. It took the moves that raised output and refused the ones that would have transferred financial or political control. Any argument that treats the package as indivisible has to explain the outcome, and it cannot.`
      },
      {
        category: 'Mechanism',
        title: 'The chain, not the factory, is why the same shirt makes different money in different places',
        body: `Cheap containers, instant communication and lower tariffs let firms separate production into stages and place each one where it is cheapest, keeping design, brand and customer relationship in house and contracting the rest to suppliers who compete for the order. Value is not evenly distributed along that chain: studies of consumer electronics have estimated assembly capturing a low single-digit share of retail price. Bangladesh's garment sector, shaped first by the textile quota regime of 1974 to 2004, grew to employ on the order of four million people, mostly women, with documented associations to later marriage and more schooling for girls, and produced Rana Plaza in April 2013, where over a thousand workers died in a building whose cracks had been reported the previous day. Both facts are consequences of the same structure.`
      },
      {
        category: 'Qualification',
        title: 'Whether globalization helped depends on which number and which unit of analysis',
        body: `The World Bank estimates that the share of the world below an international poverty line of roughly two dollars a day in purchasing power terms fell from about a third around 1990 to under a tenth by the late 2010s, with much of the fall in China. Over the same period inequality between countries narrowed and inequality within many countries widened, so both "inequality rose" and "inequality fell" are correct depending on the unit. The Lakner and Milanovic curve puts both in one picture and its shape has been challenged on sample composition by Corlett in 2016. And why manufacturing employment fell in the United States after 2000 remains disputed: Autor, Dorn and Hanson attribute two million or more losses to Chinese import competition, while studies emphasizing rising output with falling employment attribute most of it to productivity. Naming the measure, the source and the dispute is the qualification the criteria are asking for.`
      }
    ]
  }
};
