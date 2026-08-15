'use strict';

/**
 * Topic 5.3, Industrial Revolution Begins: the deep reading.
 *
 * Why this exists. The success criteria want four factors explaining why Britain
 * first, with an explicit statement that no single factor is sufficient; then
 * Watt in 1769, Arkwright at Cromford in 1771, and Manchester from 25,000 to
 * 300,000; then two effects on labor, with the Luddites named.
 *
 * The "no single factor is sufficient" clause is the whole chapter. Every
 * textbook gives a list of causes, and a list invites a student to pick one and
 * write it as the answer. So section 01 is built as a set of eliminations,
 * asking of each candidate factor which other place also had it and did not
 * industrialize, which turns the list into an argument about combination.
 *
 * Three things carried deliberately:
 *
 *   1. Coal is not a resource, it is a resource plus a drainage problem plus an
 *      engine that solves it at the pithead where fuel is free. Written that
 *      way, the steam engine stops being an invention that appeared and becomes
 *      a solution to a specific bottleneck, which is what "why here" means.
 *   2. The factory's innovation is discipline and power transmission, not
 *      machinery. Arkwright's real invention is the working day, and a student
 *      who has that can explain the Luddites, the Factory Acts and the whole of
 *      Topic 5.9 as consequences of one change.
 *   3. The Luddites were not opposed to machines. They were opposed to machines
 *      used to break the customary terms of a trade, and the distinction is
 *      exactly the kind a checkpoint rewards.
 */

module.exports = {
  topicKey: 't5-3',
  slug: 'topic-5-3-industrial-revolution-begins',
  sourceFile: 'deep-reading-topic-5-3-industrial-revolution-begins.html',
  lessonFile: 'lesson-5-3-industrial-revolution-begins.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.3: Why It Started There',
  eyebrow: 'Topic 5.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Why It Started <em>There</em>',
  deck: `Every ingredient of the Industrial Revolution existed somewhere else first. China had coal, gunpowder and the world&rsquo;s largest iron industry; the Dutch had capital and the best financial system in Europe; India made the finest cotton cloth on earth. The question is not what Britain had but what Britain had <em>together</em>, and this chapter answers it by asking of every candidate factor which other place also had it and did not industrialize.`,
  meta: ['Four sections', 'Causes, the engine, the factory, the workers', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.3 &nbsp;·&nbsp; Why It Started There &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the causal argument and it is built to defeat the single-factor answer, which is what the success criteria explicitly ask for. Sections 02 and 03 are the engine and the factory, the two things a checkpoint will ask you to explain. Section 04 is what it did to the people doing the work.`,
    steps: [
      `<b>01 Why Britain:</b> six candidate factors, each tested against a place that had it and did not industrialize.`,
      `<b>02 The engine:</b> why coal needed a pump, and why the pump was built at the pithead.`,
      `<b>03 The factory:</b> Arkwright at Cromford, and the invention of the working day.`,
      `<b>04 The workers:</b> deskilling, child labor, and what the Luddites were actually objecting to.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'whybritain',
      num: '01',
      accent: 'gold',
      name: 'Six Factors, and Why None of Them Is the Answer',
      navLabel: 'Why Britain',
      dates: 'c. 1700 to 1780 &nbsp;·&nbsp; The combination',
      thesis: `The right form of this answer is a combination rather than a cause, and the way to prove that to a grader is to take each factor and name somewhere else that had it and did not industrialize. Six factors, six eliminations, one conclusion.`,
      parts: [
        {
          heading: 'The six, each tested',
          blocks: [
            { p: `<b>Coal and iron.</b> Britain had large coal deposits, many of them close to iron ore and to navigable water. <em>But</em> China's Song dynasty, as the Topic 1.1 chapter describes, had a coal and iron industry of extraordinary scale seven centuries earlier and did not industrialize. Resources are necessary and prove nothing on their own.` },
            { p: `<b>Geography.</b> Britain is an island with no point far from the sea, with navigable rivers and, from the <span class="num">1760</span>s, a canal network, so bulk goods moved cheaply. <em>But</em> the Dutch Republic had the best inland water transport in Europe and a merchant fleet larger than anyone's, and its industrial takeoff came later and was smaller.` },
            { p: `<b>Labor supply.</b> The <span class="kt">Enclosure Acts</span>, consolidating common land into private holdings, ended the customary rights, grazing, gleaning, gathering fuel, on which many rural households depended, and pushed people toward wage work and toward towns. <em>But</em> enclosure of one kind or another happened across Europe, and displaced peasants elsewhere became landless laborers rather than factory workers, because there were no factories to go to.` },
            { p: `<b>Capital.</b> Britain had accumulated wealth from Atlantic trade, from the sugar and slave economies of Topic 4.5, and from Indian revenue after the Bengal diwani of <span class="num">1765</span>, and it had a banking system and low interest rates to move it. <em>But</em> Spain took more bullion out of the Americas than anyone and did not industrialize, for the reasons the Topic 4.5 chapter gives. Capital matters when there is somewhere profitable to put it.` },
            { p: `<b>Political and legal stability.</b> After <span class="num">1688</span> Britain had a monarchy limited by Parliament, secure property rights, enforceable contracts, a funded national debt and no arbitrary confiscation, which makes a twenty-year investment in fixed plant a rational thing to make. <em>But</em> several European states had reasonably secure property law without industrializing.` },
            { p: `<b>Scientific and technical culture.</b> The Royal Society, provincial societies such as the Lunar Society of Birmingham, a patent system from <span class="num">1624</span> that let an inventor capture some of the value of an invention, and a large body of skilled millwrights, instrument-makers and ironworkers able to build a design once someone drew it. <em>But</em> France had the more distinguished scientific establishment for much of this period and industrialized later.` }
          ]
        },
        {
          heading: 'What the combination actually did',
          blocks: [
            { p: `So the conclusion is not that Britain had a magic ingredient. It is that Britain had all six at once, and that they reinforced each other in a specific way: high wages relative to the price of coal made it worth replacing labor with fuel-burning machinery, and the capital, the law and the skills existed to do it.` },
            { p: `That wage-to-fuel ratio is the sharpest single formulation available for this topic and it is worth writing carefully. In Britain, labor was comparatively expensive and coal was comparatively cheap, so a machine that burned coal to do what a person had done paid for itself. In regions where labor was cheap, as in much of Asia, the same machine was not worth building even if the design was known, because a person cost less than the fuel. That reframes the question from what Britain invented to what it was worth inventing in Britain, and it explains the absence of industrialization elsewhere without any claim about capability.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not answer this question with British inventiveness, or with any explanation that locates the cause in the character of a people. It fails on the evidence, since Song China, Mughal India and the Dutch Republic each held technical and commercial capacities Britain lacked in the periods when they led, and it fails as history, because it explains a change that happened at one moment with a trait that would have been present for centuries. Every factor above is a <b>condition</b>, dated and specific. Name four, note that each existed elsewhere without this result, and conclude on the combination. That is the answer the success criteria describe.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The relative price of labor and fuel. <em>The mechanism is that a machine replacing human effort with burned coal is worth building only where wages are high relative to fuel, so the same invention is profitable in Lancashire and pointless in a region with cheap labor and expensive fuel, which explains where industrialization began without any claim about who was capable of it.</em>`,
        limit: `The wage argument is contested among economic historians and cannot carry the whole explanation on its own; institutions, capital and coal geography are doing work alongside it.`,
        comparison: `Against <em>Song China</em> in Topic 1.1: coal, iron, water transport, a huge internal market and mechanized textile machinery all existed there, and the outcome was an enormous commercial expansion rather than an industrial one. Holding those two cases together is the fastest way to show that resources and technique are conditions rather than causes.`
      },
      terms: [
        ['Enclosure Acts', 'Legislation consolidating common land into private holdings, ending customary rights and pushing rural households into wage work.'],
        ['Patent system', 'The legal grant letting an inventor capture value from an invention, which made development worth financing.'],
        ['Fixed capital', 'Money sunk into buildings and machinery, which only a stable legal order makes a rational investment.'],
        ['Wage-to-fuel ratio', 'The relative price of labor and coal, which decided where a fuel-burning machine was worth building.'],
        ['Combination argument', 'The claim that no single factor explains British industrialization, since each existed elsewhere without it.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'engine',
      num: '02',
      accent: 'iron',
      name: 'The Engine Was Built to Empty a Mine',
      navLabel: 'The engine',
      dates: '1712 to 1781 &nbsp;·&nbsp; Newcomen, Watt, Boulton',
      thesis: `The steam engine was not invented to power factories. It was invented to pump water out of coal mines, which is why it was first built in the one place where its enormous fuel consumption did not matter, and everything else follows from getting good enough to leave that place.`,
      parts: [
        {
          heading: 'The bottleneck',
          blocks: [
            { p: `Britain had been burning coal domestically for centuries, and by the early eighteenth century the shallow seams were worked out. Going deeper meant hitting groundwater, and a flooded mine is a closed mine. Horse-driven pumps existed and could not keep up below a certain depth.` },
            { p: `Thomas Newcomen's atmospheric engine, working from <span class="num">1712</span>, solved it. Steam filled a cylinder, cold water condensed it, atmospheric pressure drove the piston down, and the beam worked a pump. It was extraordinarily inefficient, wasting most of its heat by cooling and reheating the cylinder on every stroke, and that did not matter at all, because it stood at a coal mine and burned coal that was otherwise unsellable. Dozens were at work within decades.` },
            { p: `That is the mechanism to keep. A technology too wasteful to be viable anywhere else can be viable at the source of its own fuel, and the practical experience gained there is what makes the next version efficient enough to travel.` }
          ]
        },
        {
          heading: 'Watt, and what a good idea still needs',
          blocks: [
            { p: `James Watt, repairing a Newcomen model at Glasgow, identified the waste precisely and patented the fix in <span class="num">1769</span>: a <b>separate condenser</b>, so the cylinder stays hot while condensation happens elsewhere. The efficiency gain was roughly threefold to fourfold in fuel, which is what let a steam engine be worth running away from a colliery.` },
            { p: `Then the part that is usually cut and should not be. The idea took more than a decade to become a business, because building a cylinder accurate enough to hold the vacuum was beyond ordinary workshops until John Wilkinson's cannon-boring machine of <span class="num">1774</span> could do it. Watt needed capital, which came from the Birmingham manufacturer Matthew Boulton, and a market, which came from Cornish tin mines with no local coal, where fuel savings were worth the most. And the engines were sold on a premium equal to a share of the fuel saved, a pricing model that only works because the improvement is measurable.` },
            { p: `The step that leaves the mine is <span class="num">1781</span>, when Watt patented rotary motion, converting the beam engine's up-and-down stroke into a turning shaft. A pump moves water; a rotating shaft can drive a spinning mule, a loom, a rolling mill, a lathe or, later, a wheel on a rail. That patent is the moment steam becomes general-purpose power, and the Topic 5.5 chapter is largely a list of what people then attached to it.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the patents record the sequence',
              html: `British patent records give an unusually exact chronology for this story, because a patent is a dated public claim describing a mechanism, filed by someone with a financial motive to file as early as possible. From them we can see the separate condenser in <span class="num">1769</span> and rotary motion in <span class="num">1781</span>, and we can see how many engines Boulton and Watt sold and where. Two cautions come with the source. Patents record what was claimed, not what worked or what was used, and a great deal of practical improvement was made by workmen who never filed anything. And Watt used his patent aggressively to litigate against rivals, which some historians argue slowed the development of high-pressure engines by a decade or more, so the same institution that made the invention worth financing also delayed the next one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Deploying an inefficient technology at its fuel source. <em>The mechanism is that a machine whose running cost is prohibitive everywhere else is viable where its fuel is free or unsellable, so it gets built, used and improved in that one niche, and the accumulated practical experience is what eventually makes a version efficient enough to be worth using anywhere.</em>`,
        limit: `It required a separate set of enabling conditions to escape the niche: precision boring, a financier, a market that valued fuel savings, and a patent regime that made the development worth funding.`,
        comparison: `Against <em>gunpowder</em> in Topic 3.1: there too the decisive change was not the discovery but the engineering that made it usable at scale, and in both cases the limiting factor was metalworking precision. A technology becomes historically significant at the moment a workshop can build it repeatably, not at the moment someone thinks of it.`
      },
      terms: [
        ['Newcomen engine', 'The 1712 atmospheric pumping engine, hugely inefficient and viable because it stood on free coal at the pithead.'],
        ['Separate condenser', 'Watt\'s 1769 patent keeping the cylinder hot, which cut fuel use several times over and let steam leave the colliery.'],
        ['Rotary motion', 'Watt\'s 1781 patent turning reciprocating stroke into a rotating shaft, which made steam general-purpose power.'],
        ['Boulton and Watt', 'The partnership of a Birmingham manufacturer\'s capital with an engineer\'s design, without which the patent stayed a drawing.'],
        ['Boring machine', 'Wilkinson\'s 1774 cannon-boring tool, the precision engineering that made an accurate cylinder possible.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'factory',
      num: '03',
      accent: 'rust',
      name: 'Arkwright Invented the Working Day',
      navLabel: 'The factory',
      dates: '1771 to 1850 &nbsp;·&nbsp; Cromford and Manchester',
      thesis: `The factory&rsquo;s decisive innovation was not machinery. It was bringing workers to the machines, under one roof, on somebody else&rsquo;s clock, and that single organizational change is the origin of nearly every social conflict in the rest of this unit.`,
      parts: [
        {
          heading: 'What came before, and what changed',
          blocks: [
            { p: `The system it replaced was the <span class="kt">putting-out system</span>, also called cottage industry. A merchant supplied raw wool or cotton to households, which spun and wove it in their own homes on their own equipment, and he collected and sold the cloth. The household set its own hours, worked around the harvest and around family needs, and its members controlled the pace and often the technique. Payment was by the piece.` },
            { p: `Richard Arkwright's mill at <b>Cromford</b>, in <span class="num">1771</span>, is the standard marker for the change. His water frame was too large and needed too much power for a cottage, so it had to sit beside a river, and the workers had to come to it. That single physical fact reorganizes everything: the mill runs when the water runs, so it runs continuously, in shifts, day and night, and the workers keep the machine's hours rather than their own.` },
            { p: `So the factory is a <b>power problem solved by concentration</b>, first with water and then, once Watt's rotary engine existed, with steam, which freed mills from riversides and let them cluster in towns near coal. And what concentration then permits is supervision: a manager can see everyone, set the pace by the speed of the shafting, enforce timekeeping with fines and locked gates, and divide the work into tasks that need less skill than the trade they replaced.` },
            { p: `The clock is the emblem of it. Under putting-out, work was task-oriented: you worked until the job was done. In the factory, work became time-oriented: you were paid for hours and the employer owned them. That change in what is being sold, hours rather than output, is the foundation of the class relationship the Topic 5.6 chapter describes.` }
          ]
        },
        {
          heading: 'Manchester',
          blocks: [
            { p: `The success criteria name the numbers and they are worth holding: Manchester grew from roughly <span class="num">25,000</span> people in <span class="num">1772</span> to about <span class="num">300,000</span> by <span class="num">1850</span>. That is not growth, it is a new kind of settlement appearing in a lifetime.` },
            { p: `Manchester had the combination: damp air that suited cotton spinning, Lancashire coal, water power in the surrounding valleys, and Liverpool as a port for imported raw cotton, which after the <span class="num">1790</span>s came increasingly from the slave plantations of the American South, the connection the Topic 5.8 chapter follows.` },
            { p: `What it did not have was any of the apparatus a city needs. No sewers, no clean water supply, no building regulation, no police force to speak of, and a municipal government designed for a market town. The Topic 5.9 chapter is what happened as a consequence, and the reason it belongs there rather than here is that the crisis was a result of speed rather than of factories as such: a city cannot grow twelvefold in two generations and have infrastructure, whatever its industry.` }
          ]
        }
      ],
      useThis: {
        tool: `Concentration as control. <em>The mechanism is that a machine too large and too power-hungry for a cottage forces workers to come to it, and once they are all under one roof the employer can set the pace mechanically through the shafting, enforce hours by the clock, supervise continuously and subdivide the work, so the factory buys discipline as much as it buys output.</em>`,
        limit: `The transition was slow and uneven. Handloom weaving expanded before it collapsed, many trades stayed in workshops for decades, and in 1850 most British workers still did not work in a factory.`,
        comparison: `Against the <em>putting-out system</em> it replaced: the same merchant capital, the same raw material and often the same families, with the location of the machine as the only structural difference. That is why the location is the thing to write about, and why the Luddites in section 04 were arguing about terms rather than about technology.`
      },
      terms: [
        ['Putting-out system', 'Household production on household equipment at household hours, paid by the piece, which the factory replaced.'],
        ['Water frame', 'Arkwright\'s spinning machine, too large and power-hungry for a cottage, which is why the workers had to come to it.'],
        ['Cromford', 'Arkwright\'s 1771 mill, the standard marker for the concentration of workers and machines under one roof.'],
        ['Time discipline', 'The shift from working until a task is done to selling hours an employer owns, enforced by clocks, fines and gates.'],
        ['Manchester', 'The cotton city that grew from about 25,000 in 1772 to about 300,000 by 1850, with no infrastructure built to match.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'workers',
      num: '04',
      accent: 'oxide',
      name: 'What It Did to the People Doing the Work',
      navLabel: 'The workers',
      dates: 'c. 1780 to 1840 &nbsp;·&nbsp; Deskilling, children, Luddites',
      thesis: `The core grievance of early industrial labor was not poverty, which was old, and not machinery, which people had used for centuries. It was the loss of control: over the pace, over the skill that made you worth hiring, and over whether your children worked.`,
      parts: [
        {
          heading: 'Two effects, stated precisely',
          blocks: [
            { p: `<b>Deskilling and the loss of craft autonomy.</b> A skilled handloom weaver or a hand spinner had bargaining power, because the skill took years to learn and could not be replaced by the next person off the street. A machine that performs the skilled part of the operation converts that job into machine-tending, which can be learned in days. Wages fall, because the labor is now replaceable, and the worker's independence goes with them: a weaver who owned a loom sold cloth, and a machine-tender sells hours. The handloom weavers are the tragedy of the period, since their numbers rose while power looms were still poor and then their trade collapsed under them across the <span class="num">1820</span>s and <span class="num">1830</span>s into destitution.` },
            { p: `<b>Hours, danger and children.</b> Twelve to sixteen hour days were common; the machines set the pace and did not tire; unguarded shafting, belts and gears took fingers, hands and lives; cotton dust and, in mines, coal dust destroyed lungs. Children worked from very young ages, in mills because small hands could piece broken threads and small bodies could get under running machinery to clean it, and in mines because a small child could work a ventilation door or pull a corve along a low seam. Children were also cheap, obedient and, decisively, could not organize.` },
            { p: `Two clarifications keep this accurate. Child labor was not invented by the factory; children had always worked on farms and in workshops. What changed was the setting: work away from the family, for a stranger, on machine hours, for twelve hours or more, in conditions that maimed. And the standard-of-living debate among historians remains genuinely open, since real wages rose over the long run while heights fell, mortality in industrial towns was appalling and the improvement did not arrive for the first generations. The honest formulation is that the long-run gain was real and the people who paid for it were not the people who received it.` }
          ]
        },
        {
          heading: 'What the Luddites were objecting to',
          blocks: [
            { p: `Between <span class="num">1811</span> and <span class="num">1816</span>, textile workers in Nottinghamshire, Yorkshire and Lancashire broke machinery, in organized night raids, under letters signed by a fictitious General Ned Ludd. The state responded with troops, in numbers comparable to an army sent abroad, and made machine-breaking a capital offense in <span class="num">1812</span>; men were hanged and transported.` },
            { p: `The word <span class="kt">Luddite</span> now means someone irrationally hostile to technology, and that is a defeated movement being described by the people who defeated it. The evidence says something narrower. They attacked particular machines, in particular shops, operated in particular ways: wide frames producing cheap cut-up stockings that undercut the trade's standards, and shearing frames replacing skilled croppers. They frequently left other machinery in the same building untouched. Their demands were about the terms on which machinery was used: minimum prices, apprenticeship rules, quality standards, and the customary regulations that older law had provided and Parliament was in the process of repealing.` },
            { p: `So the accurate sentence is that the Luddites were defending a regulated trade rather than opposing machines, and that machine-breaking was a bargaining tactic available to workers whose combinations were illegal. That last clause is the bridge to Topic 5.8: when the law forbids you to organize and offers no arbitration, sabotage is what is left.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the state wrote everything down',
              html: `The archive for Luddism is unusually rich and unusually one-sided, and both facts are useful. Because the government treated it as insurrection during a war with France, it generated Home Office files full of spies&rsquo; reports, magistrates&rsquo; correspondence, troop deployments and trial records. That gives historians names, dates, targets and the movement&rsquo;s own threatening letters, which survive because they were filed as evidence. It also means the record was compiled by people trying to suppress it, and paid informers had an incentive to report conspiracies whether or not they existed. Read that way, the selectivity of the attacks is strong evidence precisely because it is inconvenient for the prosecution: the state was arguing these men were general enemies of order, and its own files show them choosing their targets.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Deskilling as a transfer of bargaining power. <em>The mechanism is that a skill taking years to acquire cannot be replaced quickly, which gives its holder leverage over wages and pace, so a machine that performs the skilled operation does not merely raise output, it moves that leverage to the employer by making the worker replaceable within days.</em>`,
        limit: `Industrialization also created new skilled trades, engineers, mechanics, mule spinners, some of which became the best-paid and best-organized workers of the century, so deskilling describes a direction rather than a universal outcome.`,
        comparison: `Against the <em>guild</em> system of Foundations 5 and Topic 1.6: guilds controlled entry, training, quality and price, which is exactly the regulated trade the Luddites were trying to defend. Their machine-breaking is better understood as the last defense of the guild principle than as the first attack on technology.`
      },
      terms: [
        ['Deskilling', 'The conversion of a skilled trade into machine-tending, which lowers wages by making the worker replaceable.'],
        ['Handloom weavers', 'The trade whose numbers grew and then collapsed as power looms improved, the clearest casualty of the transition.'],
        ['Luddites', 'Textile workers who broke selected machinery from 1811 to 1816 to defend customary terms, not machinery as such.'],
        ['Frame Breaking Act', 'The 1812 law making machine-breaking a capital offense, met with troop deployments, hangings and transportation.'],
        ['Standard-of-living debate', 'The open historical argument over whether early industrialization raised or lowered workers\' conditions, and for whom.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first is the answer the success criteria are built around, so learn its structure rather than its list.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Every single factor fails, which is why the answer is the combination',
        body: `Britain had coal and iron, but Song China had a coal and iron industry of extraordinary scale seven centuries earlier. It had cheap water transport, but the Dutch Republic had better. Enclosure pushed rural households into wage work, but displaced peasants across Europe became landless laborers because there were no factories to enter. It had Atlantic and Indian capital, but Spain took more bullion from the Americas than anyone and did not industrialize. It had secure property law after 1688 and a patent system from 1624, and France had the more distinguished scientific establishment and industrialized later. Name four, show each existed elsewhere without this result, and conclude on the combination, sharpened by the fact that British wages were high relative to cheap coal, so a fuel-burning machine paid for itself there and nowhere else.`
      },
      {
        category: 'Mechanism',
        title: 'The engine was built where its own waste was free',
        body: `Newcomen&rsquo;s 1712 atmospheric engine wasted most of its heat cooling and reheating the cylinder every stroke, which did not matter because it stood at a coal mine burning coal that was otherwise unsellable, pumping out the groundwater that was closing deep seams. Decades of practical use in that niche preceded Watt&rsquo;s separate condenser of 1769, which cut fuel use several times over and let steam pay its way away from a colliery. Even then it needed Wilkinson&rsquo;s 1774 boring machine for an accurate cylinder, Boulton&rsquo;s capital, and Cornish mines with no local coal as a first market. Rotary motion in 1781 is the moment it becomes general-purpose power.`
      },
      {
        category: 'Structure',
        title: 'The factory&rsquo;s innovation was the clock, not the machine',
        body: `Under the putting-out system a household spun and wove on its own equipment at its own hours and was paid by the piece. Arkwright&rsquo;s water frame at Cromford in 1771 was too large and needed too much power for a cottage, so it sat beside a river and the workers came to it, keeping the machine&rsquo;s hours rather than their own. Concentration then permitted what mattered: pace set mechanically through the shafting, timekeeping enforced by fines and locked gates, continuous supervision, and work subdivided into tasks needing less skill. What is sold changes from output to hours, which is the foundation of the class relationship in Topic 5.6 and of everything workers organized about afterward.`
      },
      {
        category: 'Evidence',
        title: 'The Luddites chose their targets, and the state&rsquo;s own files prove it',
        body: `Between 1811 and 1816 textile workers broke machinery in organized night raids, and Parliament made machine-breaking a capital offense in 1812 and deployed troops in numbers comparable to an overseas army. But they attacked wide frames making cheap cut-up stockings that undercut trade standards, and shearing frames replacing skilled croppers, frequently leaving other machinery in the same building untouched, and their demands were for minimum prices, apprenticeship rules and quality regulation. The selectivity is strong evidence because it is inconvenient for the prosecution that recorded it. With combinations illegal and no arbitration available, breaking a specific machine was the bargaining tactic left, which is where Topic 5.8 begins.`
      }
    ]
  }
};
