'use strict';

/**
 * Topic 9.1, Advances in Technology and Exchange: the deep reading.
 *
 * Why this exists. The success criteria ask a student to use radio, cellular
 * communication, the internet, air travel and shipping containers to explain
 * how technology "reduced the problem of geographic distance", and then to give
 * at least one unintended consequence of petroleum, nuclear power, high-yield
 * crops and chemical fertilizers. The First & 10 names all of them in five
 * sections. Naming is the thing the checkpoints will not accept: "reduced the
 * problem of geographic distance" is a claim about cost, and a student who has
 * only the list cannot say what got cheaper, for whom, or who paid.
 *
 * This is the opening chapter of the volume, so it also states the spine the
 * other eight chapters run on: globalization after 1900 is not new connection,
 * which the Topic 2.3 chapter already covered for the thirteenth century, but a
 * collapse in the cost of moving goods, money, people, information and
 * pathogens. Almost everything in Unit 9 follows from two questions: who
 * captured the savings, and who absorbed the costs nobody was billed for.
 *
 * Three things carried deliberately:
 *
 *   1. The container's saving is in port labor and port time, not in the steel
 *      box. Written that way the student has a mechanism, and the same
 *      mechanism explains why an inland factory in Guangdong can supply a store
 *      in Ohio, which is the whole of Topic 9.4.
 *   2. Every technology in this chapter is paired with its unintended
 *      consequence in the same paragraph, because the success criteria ask for
 *      the pairing and because separating them teaches progress rather than
 *      history.
 *   3. The demographic numbers are given as modeled estimates with ranges and
 *      dates attached. The world did not "reach eight billion" on an observed
 *      day; a United Nations projection crossed that line on a chosen date, and
 *      a student who knows the difference is doing the reasoning the exam wants.
 */

module.exports = {
  topicKey: 't9-1',
  slug: 'topic-9-1-technology-exchange',
  sourceFile: 'deep-reading-topic-9-1-technology-exchange.html',
  lessonFile: 'lesson-9-1-technology-exchange.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 9.1: The Cost of Distance',
  eyebrow: 'Topic 9.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Cost of <em>Distance</em>',
  deck: `Long-distance connection is not new, and the Topic 2.3 chapter is the proof: silk moved from Chang&rsquo;an to the Mediterranean seven centuries before any of this. What changed after <span class="num">1900</span> is the <em>price</em> of moving something. This chapter treats globalization as a collapse in the cost of moving goods, money, people and information, works out what each technology actually made cheaper, and then asks the question the whole volume runs on: who captured the savings, and who absorbed the costs nobody was billed for.`,
  meta: ['Four sections', 'What got cheaper, and who paid', 'Read alongside the First & 10'],
  footerNote: 'Topic 9.1 &nbsp;·&nbsp; The Cost of Distance &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The four sections are four things that got cheaper: moving cargo, moving information, producing energy and food, and keeping a person alive. Each section states the mechanism first and the unintended consequence second, because the success criteria ask for both and a technology described without its costs is an advertisement rather than history.`,
    steps: [
      `<b>01 Cargo:</b> why the shipping container saved money on the dock rather than at sea, and what air freight added.`,
      `<b>02 Signals:</b> radio, undersea cable, satellite, the internet and the mobile phone, and what each one actually removed.`,
      `<b>03 Energy and food:</b> petroleum, nuclear power, synthetic nitrogen and the Green Revolution, each with the bill attached.`,
      `<b>04 Bodies:</b> vaccines, antibiotics and contraception, and the demographic change they produced together.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'cargo',
      num: '01',
      accent: 'gold',
      name: 'The Box Was Never About the Box',
      navLabel: 'Cargo',
      dates: '1956 to c. 1980 &nbsp;·&nbsp; Containerization and air freight',
      thesis: `A ship crossing an ocean in <span class="num">1950</span> was not slow. It was cheap to sail and ruinously expensive to load, and the shipping container attacked the loading, not the sailing. Once you see that, you can explain why a factory can sit ten thousand kilometers from its customers and still undercut one down the road.`,
      parts: [
        {
          heading: 'What break-bulk shipping actually cost',
          blocks: [
            { p: `Before the container, ocean cargo moved as <span class="kt">break-bulk</span>: sacks, crates, barrels and bales, each one handled individually. A gang of longshoremen loaded a ship item by item, stowing it like a puzzle so nothing shifted at sea. A single vessel could spend a week or more in port at each end, and the ship earned nothing while it sat. Cargo was also pilfered at every transfer, and insurance priced that in.` },
            { p: `The economic historian Marc Levinson, whose <em>The Box</em> is the standard account, makes the point that the expensive part of a voyage happened while the ship was tied up. His comparison for the first container voyage puts the cost of loading break-bulk cargo at several dollars a ton against something on the order of a few cents a ton for the same cargo in containers. Treat that as one historian's estimate for one ship rather than a universal figure, and the direction is not in doubt: the saving was enormous and it was made on the dock.` },
            { p: `Malcom McLean, a trucking operator with no shipping background, put fifty-eight truck-trailer bodies on a converted tanker and sailed from Newark to Houston in <span class="num">1956</span>. His insight was not the box. It was that a box which never has to be unpacked between the factory and the store removes every intermediate handling step, and that the ship, the crane, the truck chassis and the rail car all have to be redesigned around the same dimensions for that to work.` }
          ]
        },
        {
          heading: 'Standardization is the technology',
          blocks: [
            { p: `A container is a corrugated steel rectangle. Anyone could build one, and companies did, in incompatible sizes, which meant a box could only travel on its owner's equipment. The change that mattered was agreement on common dimensions and corner fittings through international standards work in the late <span class="num">1960</span>s, after which any crane could lift any box onto any ship and any chassis. <span class="kt">Containerization</span> is best understood as a standards agreement with steel attached.` },
            { p: `The consequences run outward in a chain worth memorizing. Cheap handling made distance a small share of the delivered price of a manufactured good. A small share of the delivered price meant a firm could put a factory wherever labor and land were cheapest rather than wherever the customers were. That is the physical precondition for the global supply chains of Topic 9.4, and for the shift of manufacturing toward Asia and Latin America that the Topic 9.4 chapter follows.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that containers made shipping <em>faster</em> and leave it there. Container ships are not dramatically faster through the water than the freighters they replaced, and some modern ones deliberately sail slower to burn less fuel. What collapsed was port time and port labor: days in dock became hours, and a gang of dockworkers became a crane operator. Saying "faster" earns nothing; saying "the cost of loading fell far enough that distance stopped deciding where a factory could be" is the mechanism, and it is what the phrase "reduced the problem of geographic distance" means.`
            } }
          ]
        },
        {
          heading: 'Who absorbed the cost',
          blocks: [
            { p: `Dockworkers did, first and most directly. Port cities that had employed tens of thousands of longshoremen employed a fraction of that number within a generation, and the ports themselves moved, because container terminals need deep water, crane rails and enormous flat storage yards rather than finger piers close to a downtown. Newark grew and Manhattan's piers emptied; London's docks closed and traffic went to deepwater terminals downriver. Powerful dock unions negotiated compensation in some ports and were defeated in others, which is why the same technology produced a settlement in one country and a bitter strike in the next.` },
            { p: `Air freight added a second layer for cargo where speed is worth the fuel. Commercial jet service began with the de Havilland Comet in <span class="num">1952</span> and became routine with the Boeing 707 from <span class="num">1958</span>, and jet aircraft made intercontinental passenger travel a matter of hours. Freight followed: cut flowers from Kenya and Colombia, fresh fish, electronics and pharmaceuticals move by air because their value per kilogram is high enough to pay for it. Air freight is a small share of world trade by weight and a large share by value, and that split is the clearest single illustration that different goods experienced different amounts of the cost collapse.` }
          ]
        }
      ],
      useThis: {
        tool: `Containerization. <em>The mechanism is that ocean freight's dominant cost was handling, not sailing, so a standardized box that is never unpacked between the factory and the store removed the labor and the port days rather than shortening the voyage, and lowered the delivered price of a manufactured good far enough that a firm could locate production by the price of labor instead of the distance to the customer.</em>`,
        limit: `The saving is largest for dense, durable, high-volume manufactured goods. It does very little for services, for perishables that still need air freight, or for goods whose cost is dominated by tariffs, regulation or the last few kilometers of road.`,
        comparison: `Against the <em>monsoon system</em> in Topic 2.3: both made long-distance bulk trade viable, but the monsoon lowered the risk and the crew cost of a passage that still took a season, while the container lowered the handling cost of a passage that already worked. One made distant trade possible; the other made distance nearly irrelevant to where a factory sits.`
      },
      terms: [
        ['Break-bulk', 'Cargo handled piece by piece as sacks, crates and barrels, which made port time and dock labor the dominant cost of an ocean voyage.'],
        ['Containerization', 'The shift to standardized steel boxes moved intact from factory to destination, agreed internationally on common dimensions in the late 1960s.'],
        ['Intermodal', 'Cargo that transfers between ship, rail and truck without being unpacked, which is what a common standard makes possible.'],
        ['Air freight', 'High-value, low-weight cargo moved by jet, a small share of world trade by weight and a large share by value.'],
        ['Delivered price', 'The price of a good where it is sold, including transport. Containerization shrank the transport share for manufactured goods.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'signals',
      num: '02',
      accent: 'rust',
      name: 'Information Stopped Traveling as Cargo',
      navLabel: 'Signals',
      dates: '1901 to c. 2010 &nbsp;·&nbsp; Radio to the mobile internet',
      thesis: `For all of recorded history before the telegraph, a message moved at the speed of the fastest available body carrying it. The change this section describes is that information came loose from transport entirely, and then became so cheap to copy and send that the marginal cost of one more copy approached nothing.`,
      parts: [
        {
          heading: 'Radio: broadcasting without a wire',
          blocks: [
            { p: `Guglielmo Marconi's transatlantic signal in <span class="num">1901</span> and the commercial radio broadcasting that followed in the <span class="num">1920</span>s did two distinct things, and students usually collapse them. Point-to-point radio let ships, aircraft and armies communicate without a cable, which is why the technology matters in Units 7 and 8 before it matters here. <span class="kt">Broadcasting</span> did something different: one transmitter reached every receiver in range at the same instant, at no extra cost per listener.` },
            { p: `That second property is the one with political consequences. A state could now speak directly to a population without newspapers, literacy or intermediaries, which is why the governments of Unit 7 invested so heavily in it and why the BBC's overseas service, started in <span class="num">1932</span>, was a foreign policy instrument as much as a broadcaster. The Topic 9.6 chapter picks this up: a technology that costs the same whether one person or a million are listening pushes culture toward large shared audiences.` }
          ]
        },
        {
          heading: 'Cable, satellite, and the internet',
          blocks: [
            { p: `The first transatlantic telephone cable, TAT-1, opened in <span class="num">1956</span> and carried a few dozen simultaneous conversations for the whole ocean. Satellites followed, with Telstar relaying television across the Atlantic in <span class="num">1962</span> and the first geostationary commercial communications satellite in <span class="num">1965</span>. Then fiber optics, from the <span class="num">1980</span>s, raised undersea capacity by orders of magnitude and pushed the price of a long-distance call down toward the price of a local one. Notice the pattern: capacity rose in steps, and each step made a new kind of exchange affordable that had been technically possible and economically absurd.` },
            { p: `The <span class="kt">internet</span> is not a single invention and should not be taught as one. ARPANET, a United States defense research network, carried its first traffic in <span class="num">1969</span>. The decisive step was a common protocol, TCP/IP, adopted across that network in <span class="num">1983</span>, which let separately owned networks interconnect without any of them being in charge. Tim Berners-Lee proposed the World Wide Web at CERN in <span class="num">1989</span> as a way for physicists to share documents, and CERN placed the software in the public domain in <span class="num">1993</span>. The Web is what made the internet usable by people who were not engineers.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the protocols are dated public documents',
              html: `The chronology of the internet is unusually firm for a recent technology, because its designers documented it in the open. Requests for Comments, the numbered technical memos in which the protocols were proposed and argued over, are dated, public and preserved, and Berners-Lee's <span class="num">1989</span> proposal survives with his supervisor's handwritten note on it. Two cautions. A dated protocol tells you when something was specified, not when anyone used it, and adoption lagged specification by years in most cases. And the open record makes the American and European engineering story easy to tell and the deployment story elsewhere much harder, so a chronology built only from these documents will understate how much of the actual growth happened later and outside the countries that wrote the memos.`
            } }
          ]
        },
        {
          heading: 'The mobile phone changed who was connected',
          blocks: [
            { p: `The first handheld cellular call was made in <span class="num">1973</span> and the first commercial networks opened at the end of that decade, but the historically significant fact about <span class="kt">cellular communication</span> is what happened when the handsets got cheap. A landline network requires copper to every building, which is a large fixed investment that many countries never made. A cellular network requires towers, which is far less. So mobile telephony spread through regions that had never had telephones at all, and the number of mobile subscriptions worldwide passed the number of fixed lines during the <span class="num">2000</span>s.` },
            { p: `The consequences were not simply that more people could call each other. M-Pesa, launched in Kenya in <span class="num">2007</span>, let people send money by text message, which gave millions of people a way to hold and transfer money without a bank account. That is the pattern worth naming: a place that skipped a generation of infrastructure sometimes adopted the next one faster and used it differently, because it was not built on top of an existing system that had to be protected.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the internet made the world flat or gave everyone equal access to information. Access has been consistently uneven by income, by country, by gender and between urban and rural areas, and international telecommunications bodies have tracked that gap since the <span class="num">1990</span>s under the name <b>digital divide</b>. As of the estimates published in the early <span class="num">2020</span>s, a substantial minority of the world's population had still never used the internet, concentrated in low-income countries and among women and rural residents. The accurate and more useful claim is narrower: the cost of sending information collapsed for people who had a connection, and who had a connection was itself decided by income and geography.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Zero marginal cost of copying. <em>The mechanism is that once information is digital and a network exists, sending one more copy costs the sender almost nothing, so the whole economics of distributing news, music, software, film and rumor changes: the expensive part becomes producing the first copy and getting attention for it, not delivering it. That single shift is behind Topic 9.6's global popular culture and Topic 9.7's locally built alternatives alike.</em>`,
        limit: `The network itself is not free, and it is physical. Fiber, towers, data centers, electricity and a handset all cost money, so the collapse in the cost of sending reached only the people the infrastructure reached, which is the digital divide.`,
        comparison: `Against <em>printing</em> in Topic 1.1 and Unit 4: movable type also cut the cost of copying, and it also produced a fight over who controlled the copies. The difference is that a print run still had to be carried somewhere, so distance kept costing money; a digital copy separates the cost of production from the cost of distribution completely.`
      },
      terms: [
        ['Broadcasting', 'One transmitter reaching every receiver in range at once, at no extra cost per additional listener, which favors large shared audiences.'],
        ['Internet', 'Independently owned networks interconnected by a common protocol, adopted as TCP/IP in 1983, with no single network in charge.'],
        ['World Wide Web', 'Berners-Lee\'s 1989 document-sharing system at CERN, released into the public domain in 1993, which made the internet usable by non-engineers.'],
        ['Cellular communication', 'Telephony over towers rather than wires to each building, which let regions without landline networks connect without laying copper.'],
        ['Digital divide', 'The measured gap in internet access by income, country, gender and urban or rural location, tracked internationally since the 1990s.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'energy',
      num: '03',
      accent: 'iron',
      name: 'Energy, Nitrogen, and the Food a Growing World Ate',
      navLabel: 'Energy and food',
      dates: '1913 to c. 1980 &nbsp;·&nbsp; Haber-Bosch to the Green Revolution',
      thesis: `Unit 5 is the moment human societies began burning fossil carbon at scale. The twentieth century is the moment they used it to make food. Every technology in this section converts stored energy into calories or into goods, and every one of them has a bill that arrived later.`,
      parts: [
        {
          heading: 'Petroleum and nuclear power',
          blocks: [
            { p: `Coal drove the industrialization of Topic 5.3, and petroleum drove the twentieth century, for three properties coal does not have. It is liquid, so it can be pumped, piped and poured rather than shoveled. It carries more energy per unit of weight, which is what makes an aircraft and a long-range truck possible. And it is the feedstock for plastics, synthetic fibers, pesticides and fertilizers, so <span class="kt">petroleum</span> is not only a fuel but a raw material for a whole category of manufactured things that did not previously exist.` },
            { p: `The unintended consequences are political as much as environmental. Concentrating the world's energy supply in a few geological provinces gave the states sitting on them leverage they had not had, which is the story the Topic 8.7 material tells through the oil embargo of <span class="num">1973</span>, and it made control of those provinces a standing motive in great-power strategy. The environmental bill, carbon dioxide accumulating in the atmosphere, is the subject of the Topic 9.3 chapter and is the largest single example in this volume of a cost nobody was billed for.` },
            { p: `Nuclear power promised electricity with no fuel combustion at all. The first reactors delivered power to a grid in the mid-<span class="num">1950</span>s and a substantial build-out followed in the <span class="num">1960</span>s and <span class="num">1970</span>s. Its unintended consequences are unusual in shape: routine operation emits almost no carbon dioxide, while a rare failure is catastrophic and long-lived, and the waste stays dangerous for far longer than any institution has existed. Three Mile Island in <span class="num">1979</span>, Chernobyl in <span class="num">1986</span> and Fukushima Daiichi in <span class="num">2011</span> each reshaped policy in several countries at once, and Germany's decision to phase out nuclear generation after <span class="num">2011</span> is the clearest case of one accident changing another country's energy path.` }
          ]
        },
        {
          heading: 'Nitrogen out of the air',
          blocks: [
            { p: `The single most consequential agricultural technology of the century is one most students have never heard of. Plants need nitrogen, and although the atmosphere is mostly nitrogen, plants cannot use it in that form. Until the twentieth century, farmers got usable nitrogen from manure, from legumes, from mined guano and nitrate deposits, and from letting fields rest. Fritz Haber demonstrated a way to fix atmospheric nitrogen into ammonia in the laboratory in <span class="num">1909</span>, and Carl Bosch turned it into an industrial process at scale by <span class="num">1913</span>.` },
            { p: `The <span class="kt">Haber-Bosch process</span> lifted a limit that had bound agriculture for the whole of the Neolithic. It also consumes a great deal of energy, supplied mostly by natural gas, which means the modern food supply runs on fossil fuel twice over: once in the tractor and once in the fertilizer. Vaclav Smil's work on the subject estimates that something in the range of forty to fifty percent of the world's population is fed by food grown with synthetic nitrogen. That is a modeled estimate built from fertilizer production, crop yields and diets rather than a measurement, and it is best cited as an order of magnitude rather than a figure.` },
            { p: `The bill arrives downstream, literally. Nitrogen that plants do not take up runs off into rivers, feeds algae blooms, and creates oxygen-depleted <b>dead zones</b> where the rivers meet the sea, of which the seasonal zone in the Gulf of Mexico below the Mississippi is the most closely monitored. Haber's process also produced the explosives of two world wars, which is a use nobody had to be persuaded of.` }
          ]
        },
        {
          heading: 'The Green Revolution',
          blocks: [
            { p: `The <span class="kt">Green Revolution</span> is the transfer of a package, not the spread of a seed, and getting that right is what a checkpoint rewards. The package was a high-yielding semi-dwarf variety, plus synthetic fertilizer, plus controlled irrigation, plus pesticide, plus in most cases credit to buy the first three. Norman Borlaug's wheat breeding program in Mexico from the <span class="num">1940</span>s produced varieties whose short, stiff stems could carry a heavy head of grain without falling over, which is the specific trait that lets a plant convert extra fertilizer into extra food instead of extra straw. The rice equivalent, IR8, was released from the international rice institute in the Philippines in <span class="num">1966</span>.` },
            { p: `Adoption in India and Pakistan from the mid-<span class="num">1960</span>s, during a period of severe harvest failure and imported food aid, produced large increases in cereal output within a few seasons, and Borlaug received the Nobel Peace Prize in <span class="num">1970</span>. The claim to make is a careful one: cereal production in the adopting regions rose faster than population over the following decades, which is what "sustained the earth's growing population" means, and famine in South Asia on the scale of the nineteenth and early twentieth centuries did not recur.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Green Revolution ended hunger, and do not write that it was a disaster. Both are available online and both are wrong. What the evidence supports is more specific and more useful: cereal output rose sharply where the full package was adopted, hunger persisted where the constraint was poverty rather than production, and the benefits went disproportionately to farmers who could afford fertilizer, pumps and credit, which widened inequality within adopting regions. The environmental costs are documented and serious: groundwater depletion under intensive irrigation, notably in the Indian Punjab, salinization, pesticide exposure, and a narrowing of the crops grown as wheat and rice displaced sorghum, millet and pulses. Give the gain and the cost in the same sentence and you have the success criterion.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Lifting a binding constraint. <em>The mechanism is that for most of agricultural history, usable nitrogen was the ceiling on yield, and Haber-Bosch removed it by converting fossil energy into fertilizer. That reframes twentieth-century food production as an energy story: the world eats more because it burns more, which is why the Topic 9.3 chapter's emissions problem and this chapter's food problem are the same problem seen from two ends.</em>`,
        limit: `Removing one constraint reveals the next. Once nitrogen is available, water, soil, credit and the price a farmer can get become the binding limits, which is why the Green Revolution package worked spectacularly in irrigated Punjab and poorly in rain-fed regions with no credit.`,
        comparison: `Against <em>Champa rice</em> in Topic 1.1: both are a crop change that raised output and then raised population, and in both cases the state promoted the distribution. The difference is dependency. Champa rice, once planted, needed nothing from outside the village; a Green Revolution variety needs purchased fertilizer and pumped water every season, so the yield gain came with a permanent tie to markets and inputs.`
      },
      terms: [
        ['Haber-Bosch process', 'The industrial fixation of atmospheric nitrogen into ammonia, at scale from 1913, which converts fossil energy into fertilizer and lifted the ceiling on yield.'],
        ['Green Revolution', 'The transfer of a package of high-yielding semi-dwarf varieties, fertilizer, irrigation, pesticide and credit, spreading from the 1940s and widely adopted in South Asia from the mid-1960s.'],
        ['Petroleum', 'A liquid fossil fuel with high energy per unit weight, also the feedstock for plastics, synthetic fibers, pesticides and fertilizers.'],
        ['Dead zone', 'An oxygen-depleted coastal area produced when fertilizer runoff feeds algae blooms, the downstream cost of synthetic nitrogen.'],
        ['Monoculture', 'Planting a single crop variety over a wide area, which raises yield and concentrates the risk from one pest, disease or drought.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'bodies',
      num: '04',
      accent: 'oxide',
      name: 'Survival, Longevity, and the Fall in Births',
      navLabel: 'Bodies',
      dates: '1928 to c. 2020 &nbsp;·&nbsp; Penicillin to the fertility transition',
      thesis: `The population of the world roughly quadrupled in the twentieth century, and it did so mainly because fewer people died young, not because more were born. Getting that direction right is the single most useful thing in this section, because it explains why the growth then slowed without anyone deciding it should.`,
      parts: [
        {
          heading: 'Why fewer people died',
          blocks: [
            { p: `Three separate things reduced death rates, and they arrived in that order. Sanitation and clean water came first, in the nineteenth century in industrial cities and later elsewhere, and they cut the waterborne diseases the Topic 5.9 chapter describes. Vaccines came next, and the campaigns of the twentieth century were global in a way earlier ones were not: <span class="kt">smallpox</span>, a disease that had killed and disfigured people for millennia and devastated the Americas in Topic 4.3, was declared eradicated by the World Health Organization in <span class="num">1980</span>, the last natural case having occurred in Somalia in <span class="num">1977</span>. That remains the only human disease eradicated by deliberate campaign.` },
            { p: `Antibiotics came third. Alexander Fleming observed penicillin's effect on bacteria in <span class="num">1928</span>; the work that turned it into a usable drug and then into mass production ran through the early <span class="num">1940</span>s, driven partly by wartime need. An <span class="kt">antibiotic</span> converts a large category of previously fatal events, an infected wound, pneumonia, a difficult childbirth, into treatable ones. Together with vaccination this pushed infant and child mortality down sharply almost everywhere, and life expectancy at birth rose across the century in every world region, though it did not rise equally and the gap between the highest and lowest national figures remained large.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: vital registration is uneven',
              html: `Demographic history for this period rests on national censuses and vital registration, which is to say on states writing down births and deaths. Coverage is excellent in some countries for the whole century and thin or absent in others, so the global figures a student meets are <b>estimates reconstructed</b> from surveys, sample registration and modeling rather than sums of counted events. The United Nations population estimates and projections, revised every few years, are the standard source, and each revision changes earlier figures as better data arrives. That is a strength rather than a weakness: it means the numbers are being corrected. But it is why a careful answer says "estimated at roughly" and gives a date for the estimate, and why a figure quoted to three decimal places should make you suspicious.`
            } }
          ]
        },
        {
          heading: 'Then births fell',
          blocks: [
            { p: `The <span class="kt">demographic transition</span> is the pattern in which death rates fall first and birth rates fall afterward, with rapid population growth in the gap between them. It is a description of what has happened in most places rather than a law, and the length of the gap varies enormously: it took over a century in parts of Europe and a few decades in South Korea, Iran and Thailand. Where the gap is short, the population growth is smaller. Where it is long, growth compounds.` },
            { p: `Why births fell is genuinely multi-causal, and the honest answer names several mechanisms rather than one. When child mortality falls, parents need fewer births to end up with the same number of surviving children, though the adjustment takes a generation. When children move from farm work to school they become a cost rather than a contribution. When women gain education and paid employment, the opportunity cost of each additional birth rises, and female education is among the strongest and most consistent statistical predictors of lower fertility across countries. And reliable contraception makes the desired number achievable.` },
            { p: `The oral contraceptive pill was approved for contraceptive use in the United States in <span class="num">1960</span>, and more effective methods spread widely, though unevenly and against significant legal and religious opposition in many countries. The College Board's framing is that more effective birth control gave women greater control over fertility and contributed to declining fertility rates, and that word "contributed" is doing correct work. Contraception is a means; whether and how much fertility falls also depends on schooling, employment, child mortality and law, which is why countries with similar contraceptive availability show very different fertility.` }
          ]
        },
        {
          heading: 'The numbers, and what kind of numbers they are',
          blocks: [
            { p: `World population was roughly 1.6 billion around <span class="num">1900</span> and roughly 2.5 billion in <span class="num">1950</span>, and United Nations estimates put it past six billion around <span class="num">1999</span> and past eight billion in <span class="num">2022</span>. Global fertility, measured as births per woman, is estimated to have fallen from around five in the early <span class="num">1950</span>s to under two and a half by the <span class="num">2010</span>s.` },
            { p: `Now the discipline this volume asks for. None of those crossings was observed. There is no world birth registry, and the day the United Nations announced eight billion was a date chosen from a projection, publicized to make a point. The estimates are good, they are the best available, and they are model output with uncertainty attached, revised at every revision. A student who writes "United Nations estimates put world population past eight billion in <span class="num">2022</span>" is making a claim that survives scrutiny; a student who writes "the world reached exactly eight billion people on that day" is making one that does not.` },
            { p: `The distributional point matters more than the total. The growth was not evenly spread, and the projections for the rest of this century concentrate it in sub-Saharan Africa while several countries in Europe and East Asia have populations that are aging and, in some cases, shrinking. Those are two different policy problems arriving at the same time in different places, and they are a substantial part of why migration became the politically charged subject the Topic 9.7 chapter describes.` }
          ]
        }
      ],
      useThis: {
        tool: `Mortality decline as the driver of growth. <em>The mechanism is that vaccines, antibiotics, sanitation and better nutrition cut deaths, especially of infants and children, while births continued at the older rate for a generation or more, and the population grows in exactly the gap between the two curves. That is why the twentieth-century growth was not caused by people having more children, and why growth slowed as births caught down rather than because anything stopped it.</em>`,
        limit: `The transition's timing is not predictable from income alone, and the reasons births fall are multiple and interact, so contraception, female education, child mortality and urbanization each help explain it and none of them explains it alone.`,
        comparison: `Against the <em>Columbian Exchange</em> in Topic 4.3: both are population change driven by disease, in opposite directions and by opposite mechanisms. There, previously unencountered pathogens met populations with no acquired immunity and killed a very large share of them; here, deliberate public health removed pathogens from populations that had lived with them. Same variable, epidemic disease, doing the demographic work both times.`
      },
      terms: [
        ['Demographic transition', 'The pattern in which death rates fall before birth rates, producing rapid growth in the gap between them; a description of most cases rather than a law.'],
        ['Smallpox eradication', 'The WHO campaign whose success was certified in 1980, the only deliberate eradication of a human disease so far achieved.'],
        ['Antibiotic', 'A drug that kills or arrests bacteria, developed into mass production in the 1940s, which turned a large class of fatal infections into treatable ones.'],
        ['Total fertility rate', 'Births per woman over a lifetime at current rates, estimated to have fallen globally from around five in the early 1950s to under two and a half by the 2010s.'],
        ['Life expectancy at birth', 'A summary of current mortality rates, not a prediction for any individual, which rose in every world region across the twentieth century.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Every card is a full argument: a claim, the specific evidence, and the reason the mechanism worked. The first card is the spine of the whole volume, so learn its shape rather than its examples.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Globalization is a fall in the cost of moving things, not the arrival of connection',
        body: `Connection is old, and the Topic 2.3 chapter is the evidence: goods, faiths, technologies and diseases moved across Afro-Eurasia in the thirteenth century. What changed after 1900 is price. Containerization from 1956, standardized internationally in the late 1960s, cut the handling cost of ocean freight far enough that a manufactured good's transport became a small share of its delivered price. Jet aircraft from 1958 did the same for people and for high-value cargo. TAT-1 in 1956, satellites from 1962 and fiber from the 1980s cut the cost of a message toward zero. Each collapse in cost made a form of exchange affordable that had always been possible and never worth doing, which is what "reduced the problem of geographic distance" actually means.`
      },
      {
        category: 'Mechanism',
        title: 'The container saved money on the dock, which is why it moved the factories',
        body: `Break-bulk cargo was handled piece by piece and a ship could sit in port for a week at each end, earning nothing, while cargo was pilfered at every transfer. The container removed the handling rather than shortening the voyage, and it only worked once dimensions and fittings were standardized internationally so any crane could lift any box onto any ship or chassis. Because transport fell to a small share of the delivered price, a firm could choose a factory site by the price of labor rather than the distance to its customers, which is the physical precondition for the supply chains of Topic 9.4. The cost was absorbed by dockworkers and by port cities: tens of thousands of longshore jobs disappeared and the ports themselves relocated to deep water with room for crane yards.`
      },
      {
        category: 'Unintended consequences',
        title: 'Every productivity gain in this topic has a bill, and the bill arrived somewhere else',
        body: `Petroleum gave high energy per unit weight and the feedstock for plastics and fertilizer, and it put carbon dioxide into an atmosphere nobody owned, which is Topic 9.3. Nuclear power generates electricity with almost no combustion and concentrates its risk into rare catastrophes and long-lived waste, which is why Chernobyl in 1986 and Fukushima in 2011 changed policy in countries that had no accident. Haber-Bosch fixed nitrogen from the air and lifted the ancient ceiling on yield, and the runoff produces coastal dead zones while the process itself consumes fossil gas. The Green Revolution raised cereal output faster than population in the regions that adopted the full package, and it favored farmers who could afford fertilizer, pumps and credit, and it depleted groundwater in the Punjab. Name the gain and the bill in one sentence and the criterion is met.`
      },
      {
        category: 'Demography',
        title: 'The population quadrupled because deaths fell, and it slowed because births followed',
        body: `Sanitation, then vaccination, then antibiotics from the 1940s cut mortality, especially among infants and children; smallpox was certified eradicated in 1980 and remains the only case. Births continued at older rates for a generation or more, and the population grew in the gap. Births then fell for several reinforcing reasons: fewer births are needed when children survive, schooling turns a child from a contributor into a cost, female education and paid work raise the opportunity cost of each birth, and reliable contraception, available from 1960, makes the desired number achievable. Global fertility is estimated to have fallen from around five births per woman in the early 1950s to under two and a half by the 2010s. Say "estimated", give the date, and remember these are reconstructions from uneven registration rather than counts.`
      }
    ]
  }
};
