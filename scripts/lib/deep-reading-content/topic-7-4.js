'use strict';

/**
 * Topic 7.4, Economy in the Interwar Period: the deep reading.
 *
 * Why this exists. The success criteria ask a student to connect the exhaustion
 * of total war and the 1929 crash to the end of hands-off government, and then
 * to explain Soviet Five-Year Plans with their consequences for the population.
 * Those look like two separate topics and they are one: both are answers to the
 * question of how much of an economy a state should run, asked by governments
 * that had just discovered during the war that they could run one.
 *
 * The organizing argument: the interwar period is a global experiment in state
 * economic control, with several competing answers, and the war is the reason
 * the experiment was possible. Every ministry that had directed factories from
 * 1914 to 1918 was proof of concept. What the Depression did was destroy the
 * credibility of the alternative.
 *
 * Three things carried deliberately:
 *
 *   1. The Depression's transmission mechanism, not just its existence. Gold
 *      standard plus tariffs plus bank failure is how a New York crash reaches
 *      a Brazilian coffee grower, and a student without the chain has weather
 *      rather than history.
 *   2. The Five-Year Plans get honest accounting on both sides: real and rapid
 *      heavy industrialization, and famine, forced labor and terror. Writing
 *      only one is a failure of the topic.
 *   3. The Holodomor belongs here as economic policy and again in Topic 7.8 as
 *      atrocity, and the chapter says so, because that dual placement is itself
 *      the argument about what collectivization was.
 */

module.exports = {
  topicKey: 't7-4',
  slug: 'topic-7-4-interwar-economy',
  sourceFile: 'deep-reading-topic-7-4-interwar-economy.html',
  lessonFile: 'lesson-7-4-interwar-economy.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.4: Who Runs the Economy Now',
  eyebrow: 'Topic 7.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Runs the Economy <em>Now</em>',
  deck: `Between the wars, governments everywhere answered a question they had never had to ask: how much of an economy should the state run? They asked it because the war had proved they could, and they had to answer it because the Depression destroyed the case for leaving things alone. This chapter is the transmission mechanism of a global slump and the competing answers it produced, including the most extreme one.`,
  meta: ['Four sections', 'The war\'s lesson, the crash, the answers, the cost', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.4 &nbsp;·&nbsp; Who Runs the Economy Now &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the war's economic legacy, which is why the rest is possible. Section 02 is how a crash in one country became a slump everywhere, and it is the mechanism the success criteria want. Section 03 is the range of answers, and section 04 is the Soviet case in the detail the criteria specify, with both sides of the ledger.`,
    steps: [
      `<b>01 What the war taught governments:</b> ministries, debt, and a precedent.`,
      `<b>02 The transmission mechanism:</b> how <span class="num">1929</span> in New York reached a farm in Brazil.`,
      `<b>03 The answers:</b> deflation, the New Deal, autarky, and why democracies were on trial.`,
      `<b>04 The Soviet answer:</b> Five-Year Plans, collectivization, and the accounting on both sides.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'legacy',
      num: '01',
      accent: 'gold',
      name: 'What the War Left in the Filing Cabinet',
      navLabel: 'The war\'s legacy',
      dates: '1918 to 1929 &nbsp;·&nbsp; Precedent, debt, and a fragile order',
      thesis: `Before <span class="num">1914</span> the respectable position across most of the industrial world was that governments should balance budgets, hold the currency to gold, and otherwise leave the economy alone. Four years of total war produced a working demonstration that they could do the opposite, and that demonstration does not disappear when the shooting stops.`,
      parts: [
        {
          heading: 'The precedent',
          blocks: [
            { p: `The Topic 7.3 chapter describes what states built to fight: ministries directing factories, allocation of raw materials, control of railways and shipping, rationing, price controls, direction of labor, and borrowing on a scale nobody had contemplated. All of it was justified as emergency measure and all of it worked well enough to win a war.` },
            { p: `Two things follow. The administrative capacity is now real: the departments existed, the statistics were being collected, and a generation of officials knew how to do it. And the political argument has changed: a government that could organize an economy to produce shells can be asked why it cannot organize one to produce houses, and it was asked, loudly, by populations that had been promised something for their sacrifice.` }
          ]
        },
        {
          heading: 'The debts, and a reconstruction that depended on a circle',
          blocks: [
            { p: `The war was financed by borrowing, and the resulting obligations formed a circuit worth understanding because it broke. Germany owed <span class="kt">reparations</span> to the Allies under the Versailles settlement. Britain and France owed war debts to the United States. Germany, unable to pay from a damaged economy, borrowed heavily from American lenders, notably after the Dawes Plan of <span class="num">1924</span> restructured the schedule.` },
            { p: `Follow the money round: American loans to Germany funded German reparations to Britain and France, which funded their war debt payments to the United States. That circuit made the mid-<span class="num">1920</span>s look like recovery, and it had one obvious vulnerability, which is that it depended entirely on American lending continuing. When American capital stopped flowing outward after <span class="num">1929</span>, the whole circle stopped at once.` },
            { p: `The other inherited commitment was the <span class="kt">gold standard</span>, which most states worked to restore in the <span class="num">1920</span>s as a symbol of a return to normality. Section 02 is about why that decision turned a severe recession into a global depression.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the <span class="num">1920</span>s were simply a boom that ended in a crash. The decade looked very different depending on where you stood. The United States saw real growth; Germany passed through hyperinflation in <span class="num">1923</span> before stabilizing on borrowed money; Britain had persistently high unemployment through the decade and a general strike in <span class="num">1926</span>; agricultural prices were weak across much of the world for years before <span class="num">1929</span>, which mattered enormously to producer economies in Latin America, Africa and Asia. "Roaring twenties" describes a particular experience in particular countries, and a global answer should say whose decade it was.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Emergency capacity becoming permanent capacity. <em>The mechanism is that a state which builds ministries, statistics and expertise to run an economy in wartime still has them afterward, so the question stops being whether government can direct an economy, which has been demonstrated, and becomes whether it should, which is a political argument the pre-war consensus is much less able to win.</em>`,
        limit: `Capacity is not the same as use. Most governments dismantled a great deal of their war machinery in the early <span class="num">1920</span>s and tried to return to the old orthodoxy, so this explains why intervention was available in the <span class="num">1930</span>s rather than why it happened.`,
        comparison: `Against the <em>mercantilist</em> states in Topic 4.5: those directed trade to accumulate bullion and to deny it to rivals. This is a different aim, managing employment and output inside a national economy, using instruments that only an industrial state with a statistical apparatus could operate.`
      },
      terms: [
        ['Reparations', 'The payments required of Germany under the Versailles settlement, the obligation at the center of the interwar debt circuit.'],
        ['Dawes Plan', 'The 1924 restructuring of German reparations that opened the way to large American lending and the mid-decade recovery.'],
        ['Gold standard', 'Fixing a currency to a set weight of gold, restored in the 1920s as a mark of normality and the channel that spread the Depression.'],
        ['Hyperinflation', 'The 1923 collapse of the German currency, which destroyed savings and shaped German politics long before the Depression arrived.'],
        ['Laissez-faire', 'The pre-war orthodoxy that government should balance budgets, hold to gold and leave the economy alone, which the 1930s discredited.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'transmission',
      num: '02',
      accent: 'rust',
      name: 'How a Crash Became a Depression Everywhere',
      navLabel: 'Transmission',
      dates: '1929 to 1933 &nbsp;·&nbsp; The chain',
      thesis: `The stock market crash of October <span class="num">1929</span> is the famous event and it is not the mechanism. A stock market can fall without producing a decade of mass unemployment. What turned a crash into a global depression is a chain with four links, and a student who can name them is doing economics rather than describing weather.`,
      parts: [
        {
          heading: 'The four links',
          blocks: [
            { p: `<b>1. Banks fail, and credit disappears.</b> Falling asset prices and defaults put banks under strain, depositors withdraw in panic, and banks that would have been solvent in calm conditions collapse. Each failure destroys deposits and withdraws lending from businesses that were viable. The United States saw waves of bank failures into <span class="num">1933</span>, and central banks generally did not act as aggressively as later practice would suggest, partly because of the second link.` },
            { p: `<b>2. The gold standard exports the contraction.</b> Under a fixed gold parity a country losing gold must raise interest rates and cut spending to defend the exchange rate, which is exactly the opposite of what a slumping economy needs. So the gold standard took a contraction in one country and transmitted it to its trading partners as a policy obligation. This is the single most important link and it is the one most often missed. Countries that left gold earlier, as Britain did in <span class="num">1931</span>, generally began recovering earlier, which is the evidence that the mechanism is real.` },
            { p: `<b>3. Tariffs collapse world trade.</b> Governments protected domestic producers by raising tariffs, the United States notably with the Smoot-Hawley tariff of <span class="num">1930</span>, and trading partners retaliated. The result is the classic composition problem: each tariff is rational for one country and the sum of them shrinks the trade that everyone's exports depend on. World trade contracted enormously in the early <span class="num">1930</span>s.` },
            { p: `<b>4. Commodity prices collapse, and the periphery is hit hardest.</b> Economies that exported one or two primary products, and Unit 5 explains how many were structured that way, faced prices that fell further and faster than manufactured goods prices. A Brazilian coffee grower, a Chilean nitrate miner, an Egyptian cotton farmer, a Malayan rubber tapper or a Gold Coast cocoa farmer had no domestic market to fall back on. Colonies could not devalue, could not set tariffs, and in several cases were required to keep servicing debt.` }
          ]
        },
        {
          heading: 'What the chain tells you',
          blocks: [
            { p: `Two conclusions worth writing. First, the Depression is global because the world was integrated, so it is direct evidence for the interconnection Topic 4.8 and Unit 5 build. A slump could not have spread this way in <span class="num">1750</span>.` },
            { p: `Second, the worst damage was done by policy responses that were orthodox and defensible at the time. Defending gold, balancing budgets and protecting home industry were the respectable positions, and doing them all at once during a contraction made it far worse. That is why the Depression is the event that breaks the orthodoxy: not because anyone argued it into retreat, but because following it produced a catastrophe in plain view.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the countries that left gold first recovered first',
              html: `The claim that the gold standard transmitted and deepened the Depression is not a matter of opinion, and the evidence has a pleasing shape: it is a natural experiment created by the fact that different countries abandoned gold in different years. Britain and others left in <span class="num">1931</span>, the United States effectively in <span class="num">1933</span>, France and the remaining gold bloc not until the mid-<span class="num">1930</span>s, and the recovery dates line up with the exit dates rather than with anything else. That comparative pattern is the backbone of the modern account. It is worth noticing what makes it persuasive: not one country's story, which could be explained a dozen ways, but the same relationship holding across many countries that differed in almost everything else.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The gold standard as a transmission belt. <em>The mechanism is that a fixed exchange rate obliges a country losing gold to raise rates and cut spending, which deepens its own contraction and passes the pressure to partners who must then do the same, so a shock in one economy becomes a shared policy of contraction that nobody can unilaterally escape without leaving the system.</em>`,
        limit: `Gold is one link of four, and bank failure, tariffs and commodity collapse each did independent damage, so present it as the link that made escape hardest rather than the sole cause.`,
        comparison: `Against the <em>price revolution</em> in Topic 4.5: both are monetary shocks transmitted worldwide by an integrated market, and the direction is opposite. Silver inflows raised prices across sixteenth-century Europe including in states with no colonies; a gold-standard contraction lowered them across the twentieth-century world including in states with no stock market.`
      },
      terms: [
        ['Bank run', 'A panic withdrawal of deposits that destroys otherwise solvent banks and removes credit from viable businesses.'],
        ['Smoot-Hawley', 'The 1930 United States tariff that raised duties sharply and drew retaliation, part of the collapse in world trade.'],
        ['Protectionism', 'Shielding home producers with tariffs and quotas, rational for one country and collectively destructive when all adopt it.'],
        ['Primary product exporter', 'An economy dependent on one or two raw exports, most exposed to the Depression because commodity prices fell furthest.'],
        ['Deflation', 'A general fall in prices, which raises the real burden of debt and gives buyers a reason to wait, deepening a slump.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'answers',
      num: '03',
      accent: 'iron',
      name: 'The Competing Answers',
      navLabel: 'The answers',
      dates: '1931 to 1939 &nbsp;·&nbsp; Deflation, deficit, autarky',
      thesis: `Every government faced the same question and they did not give the same answer, which is what makes this a comparison topic. The answers matter beyond economics, because a democracy that could not deliver recovery was making the argument for the people who said democracy could not deliver anything.`,
      parts: [
        {
          heading: 'Three broad responses',
          blocks: [
            { p: `<b>Hold the line.</b> Defend gold, balance the budget, cut public spending and wages, and wait for prices to adjust. This was the initial orthodox response nearly everywhere and it prolonged the contraction, which is why nearly everyone eventually abandoned it.` },
            { p: `<b>Spend and regulate.</b> Leave gold, let the currency fall, and use the state to support demand, employment and prices directly. The clearest case is the <span class="kt">New Deal</span> in the United States from <span class="num">1933</span>: bank regulation and deposit insurance, public works and employment programs, farm price supports, and new labor protections. Historians continue to argue about how much of the recovery it produced, with a common view that it relieved suffering and restored confidence substantially while full recovery came only with rearmament and war spending. Say that as the argument it is.` },
            { p: `The intellectual case for this response was made most influentially by John Maynard Keynes, who argued that in a slump private spending falls short of what full employment requires and government can and should make up the gap. Note the sequence honestly: much of the policy came before the theory was fully published in <span class="num">1936</span>, so this is not a case of governments implementing an economist. It is a case of an economist explaining, and then justifying, what desperate governments had already started doing.` },
            { p: `<b>Autarky and rearmament.</b> Pursue national self-sufficiency behind closed borders, direct the economy from the center, and spend heavily on armaments. Germany after <span class="num">1933</span> is the case: public works, rearmament, controls on trade and currency, and the suppression of independent trade unions. Unemployment fell substantially and quickly. It is essential to write what that recovery was built on, which was deficit-financed military spending, coercive labor arrangements, exclusion of Jews and others from the economy, and an increasingly explicit intention to solve resource shortage by conquest. The Topic 7.6 chapter follows that to its conclusion.` }
          ]
        },
        {
          heading: 'Why this is a political topic',
          blocks: [
            { p: `Here is the connection the criteria want. Mass unemployment on this scale is not only an economic condition, it is a legitimacy test, and parliamentary governments across Europe were visibly failing it: coalitions fell, orthodox policy made things worse, and the visible remedy on offer was patience.` },
            { p: `Movements promising decisive action gained where the failure was most visible and where democratic institutions were newest and least trusted. That is a mechanism rather than a mood, and it has a limit worth naming: the Depression was severe in the United States, Britain and the Scandinavian countries too, and their democracies held. So economic distress raised the probability of a turn to authoritarian solutions without determining it, and the difference lies in how established the institutions were, how the political system handled coalitions, and what the recent past had been. Germany's had included defeat, a peace settlement widely regarded as unjust, and the hyperinflation of <span class="num">1923</span>.` }
          ]
        }
      ],
      useThis: {
        tool: `Economic failure as a legitimacy test. <em>The mechanism is that a government's claim on obedience rests partly on competence, so sustained mass unemployment that orthodox policy visibly worsens transfers credibility to whoever promises decisive action, which raises the return on anti-democratic politics without guaranteeing it succeeds.</em>`,
        limit: `It is probabilistic and the counterexamples matter. Severe depression did not overturn democracy in the United States, Britain or Scandinavia, so name the additional conditions rather than treating the slump as sufficient.`,
        comparison: `Against the <em>Russian Provisional Government</em> in Topic 7.1: the same mechanism in a sharper form. A government that cannot deliver on the thing its population most needs loses to whoever will promise it, and in both cases the promise was more decisive than the plan behind it.`
      },
      terms: [
        ['New Deal', 'The United States response from 1933: bank regulation, public works and employment programs, farm price supports and labor protections.'],
        ['Keynesian argument', 'The case that private spending falls short of full employment in a slump and that government should make up the gap, published in 1936.'],
        ['Autarky', 'National economic self-sufficiency behind closed borders, pursued by Germany, Italy and Japan and pointing toward conquest for resources.'],
        ['Public works', 'State-funded construction used to create employment directly, common to responses that otherwise had little in common.'],
        ['Legitimacy test', 'The judgment a population makes of a government\'s competence, which mass unemployment turned against parliamentary systems in several countries.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'soviet',
      num: '04',
      accent: 'oxide',
      name: 'The Soviet Answer, and Its Cost',
      navLabel: 'The Soviet plans',
      dates: '1928 to 1939 &nbsp;·&nbsp; Plans, collectivization, famine',
      thesis: `The Soviet Union removed the market altogether, and the success criteria ask for both halves of what followed: a genuinely rapid transformation of a largely agrarian economy into an industrial one, and consequences for the population that include famine, forced labor and terror. An answer with only one half fails the topic whichever half it keeps.`,
      parts: [
        {
          heading: 'The problem Stalin was solving',
          blocks: [
            { p: `After the civil war, Lenin's New Economic Policy had restored a limited market in agriculture and small trade. The leadership argument that Stalin won was about whether that could continue, and the case for ending it was strategic: a largely peasant economy could not equip a modern army, the Soviet Union expected eventual attack by hostile industrial powers, and the capital for industrialization would have to come from inside because foreign lending was not available on any terms it would accept.` },
            { p: `"Inside" meant agriculture. The state needed grain to feed industrial cities and to export for the machinery it could not build, and it wanted that grain at prices it set rather than prices peasants would accept. <span class="kt">Collectivization</span> is the instrument: consolidate peasant holdings into collective and state farms, which the state can requisition from directly, and eliminate the independent peasant producer as a category.` }
          ]
        },
        {
          heading: 'The Five-Year Plans: what they achieved',
          blocks: [
            { p: `The first <span class="kt">Five-Year Plan</span> from <span class="num">1928</span> set output targets across the economy, with overwhelming priority on heavy industry: coal, steel, electricity, machinery, chemicals. New industrial cities were built from very little, Magnitogorsk being the standard example, and enormous projects like the Dnieper dam became emblems of the effort.` },
            { p: `The results in heavy industry were real and rapid, and honesty requires saying so. Steel, coal, electricity and machine-tool output rose several times over across the <span class="num">1930</span>s, and the Soviet Union entered the Second World War with an industrial base capable of out-producing Germany in tanks and artillery, which the Topic 7.7 chapter shows mattered decisively. Treat the published figures carefully, because targets were political and reporting was pressured, so plan fulfilment claims are propaganda documents as well as statistics; the direction and the rough scale are well established even where specific numbers are disputed.` },
            { p: `The costs inside the plan were also structural rather than accidental. Consumer goods and housing were starved of investment for a decade, quality was frequently poor because plans rewarded quantity, and shortage was chronic. A system that can build a steel plant quickly is not thereby a system that can supply shoes.` }
          ]
        },
        {
          heading: 'The cost to the population, stated plainly',
          blocks: [
            { p: `<b>Collectivization was violently resisted and violently enforced.</b> Peasants who resisted were labeled <span class="kt">kulaks</span>, a category applied far beyond any real class of prosperous farmers, and were dispossessed, deported to remote regions or sent to camps. Many slaughtered livestock rather than surrender it, and Soviet herds took years to recover.` },
            { p: `<b>Famine followed, and its worst incidence was in Ukraine.</b> The famine of <span class="num">1932</span> to <span class="num">1933</span> killed millions across Ukraine, Kazakhstan, the North Caucasus and other grain regions. Estimates vary substantially and the historiography is contested; ranges commonly given for Ukraine alone run into the millions, and totals across the affected regions higher again. What is not in dispute is that the state continued requisitioning grain, restricted peasant movement out of starving districts, and rejected outside acknowledgment of the crisis. Ukraine names this the <span class="kt">Holodomor</span> and a considerable number of governments and scholars classify it as genocide; others argue for a catastrophe of policy directed at peasants and resisters generally rather than at Ukrainians as a nation. Name the dispute and note that the human facts are agreed either way. The Topic 7.8 chapter takes this up as atrocity, and the fact that it appears in both chapters is the argument.` },
            { p: `<b>Forced labor was built into the system.</b> The camp network expanded enormously and prisoners were used on canals, railways, mining and timber in remote regions, so a share of the industrial achievement rests on it directly. And the purges of the later <span class="num">1930</span>s executed or imprisoned very large numbers, including much of the army's senior officer corps, with consequences visible in <span class="num">1941</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Five-Year Plans "worked" or that they "failed," because both sentences hide the question that matters. They achieved rapid heavy industrialization from a low base, at a speed no market economy matched in that decade, and they did it by extracting the capital from the countryside by force, at the cost of famine, deportation and camp labor. The honest formulation names the trade and the person who made it: the state decided that industrial capacity was worth those lives, and the population never got to weigh in. That sentence is also the answer to the criteria's phrase "repercussions for its population", which is asking you not to describe the plans without their human accounting.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Extracting investment capital from agriculture by force. <em>The mechanism is that industrialization requires capital, and a state that cannot borrow abroad and will not let a market set prices can take it from the countryside instead, by consolidating peasant holdings into farms the state can requisition from directly, which supplies grain for cities and export at prices the state sets and destroys the peasantry's capacity to withhold it.</em>`,
        limit: `It bought speed in heavy industry and it did not build a functioning consumer economy, and the famine, deportations and purges are consequences of the method rather than unfortunate accompaniments to it.`,
        comparison: `Against <em>British industrialization</em> in Topic 5.3: capital there came from commerce, agricultural improvement, colonial trade and reinvested profit over generations, and the state's role was largely legal and infrastructural. The Soviet case compresses a century into a decade by substituting compulsion for time, which is the comparison worth writing.`
      },
      terms: [
        ['Five-Year Plan', 'The Soviet system of centrally set output targets from 1928, prioritizing coal, steel, electricity and machinery over consumer goods.'],
        ['Collectivization', 'The forced consolidation of peasant holdings into collective and state farms, the instrument for extracting grain at state-set prices.'],
        ['Kulak', 'The label for a supposedly prosperous peasant, applied far beyond any real class and used to justify dispossession and deportation.'],
        ['Holodomor', 'The 1932 to 1933 famine in Ukraine, named as genocide by Ukraine and many governments and scholars, with the classification contested.'],
        ['Forced labor camps', 'The expanding Soviet camp network whose prisoners built canals, railways and mines, making coerced labor part of the industrial achievement.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The second is the mechanism the success criteria want, and the last is the one that has to carry both halves.`,
    pairs: [
      {
        category: 'Continuity',
        title: 'The war proved a government could run an economy',
        body: `Before 1914 the orthodox position was balanced budgets, gold, and leaving the economy alone. Four years of total war produced ministries directing factories, allocation of raw materials, state control of railways and shipping, rationing, price control and direction of labor, all of it justified as emergency and all of it demonstrably workable. That left both the administrative capacity and the political argument in place: a state that organized shell production can be asked why it cannot organize housing. Most governments dismantled the machinery in the 1920s and tried to return to orthodoxy, which is why the war explains why intervention was available in the 1930s rather than why it happened. The Depression supplied the reason.`
      },
      {
        category: 'Mechanism',
        title: 'Four links carried a New York crash to a cocoa farm',
        body: `A stock market can fall without causing a decade of unemployment, so name the chain. Bank failures destroyed deposits and withdrew credit from viable businesses. The gold standard obliged countries losing gold to raise rates and cut spending, the opposite of what a slump needs, and passed that contraction to trading partners as an obligation. Tariffs, Smoot-Hawley in 1930 and the retaliation that followed, collapsed world trade, each tariff rational alone and destructive in sum. And commodity prices fell furthest, so economies exporting one or two primary products, Brazilian coffee, Chilean nitrates, Egyptian cotton, Malayan rubber, Gold Coast cocoa, were hit hardest with no domestic market and, if colonial, no power to devalue or set tariffs.`
      },
      {
        category: 'Comparison',
        title: 'The Depression put democracy on trial and the verdict was not uniform',
        body: `Governments gave three broad answers: hold the line with gold and balanced budgets, which prolonged the contraction; spend and regulate, as in the New Deal's bank regulation, public works, farm price supports and labor protections, whose contribution to recovery historians still argue about; or autarky and rearmament, as in Germany after 1933, where unemployment fell fast on deficit-financed military spending, coercive labor, and exclusion of Jews and others from the economy. Sustained unemployment that orthodox policy worsened transferred credibility to whoever promised decisive action. But democracy held in the United States, Britain and Scandinavia under comparable distress, so distress raised the probability without determining the outcome.`
      },
      {
        category: 'Accounting',
        title: 'The plans industrialized fast and the countryside paid for it',
        body: `Unable to borrow abroad and unwilling to let a market set prices, the Soviet state took its investment capital from agriculture by force: collectivization consolidated peasant holdings into farms it could requisition directly, supplying grain for cities and export at prices it set. The first Five-Year Plan from 1928 prioritized coal, steel, electricity and machinery, output rose several times over, new cities like Magnitogorsk were built from very little, and the USSR entered the next war able to out-produce Germany in tanks. The same method produced dekulakization and deportation, the famine of 1932 to 1933 whose worst incidence was in Ukraine and which Ukraine names the Holodomor, an expanding camp system whose prisoners built canals and mines, and purges that gutted the officer corps. Write the trade and name who made it.`
      }
    ]
  }
};
