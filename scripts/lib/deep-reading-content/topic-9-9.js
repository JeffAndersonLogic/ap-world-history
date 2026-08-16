'use strict';

/**
 * Topic 9.9, Continuity and Change in a Globalized World: the deep reading.
 *
 * Why this exists. This is the last chapter of Unit 9 and the last chapter of
 * the course, and its learning objective is a skill rather than a content list:
 * explain the EXTENT to which science and technology brought change from 1900
 * to the present. A survey cannot teach an extent judgment, and the First & 10
 * for this topic already does the honest thing by saying the answer depends on
 * the criterion. What it cannot do in three sections is show a student how to
 * choose one and defend it.
 *
 * So this chapter is built as a method chapter in the line of Topic 4.8 and
 * Topic 7.9, and it deliberately does not repeat them. Topic 4.8 taught that a
 * continuity-and-change question resolves once you name the LEVEL of the claim.
 * Topic 7.9 taught that a ranking resolves once you name the CRITERION. This
 * chapter's contribution is that an EXTENT claim has three hidden parameters,
 * a baseline, a criterion and a population, and that stating all three converts
 * an unanswerable question into an arguable thesis.
 *
 * Section 02 is the reason this chapter is the last one in the course rather
 * than a ninth Unit 9 chapter. It runs four threads across all nine units, from
 * c. 1200 to the present, at four checkpoints each, so that a student revising
 * in May has one page that holds the whole course in a shape they can write
 * from.
 *
 * Three things carried deliberately:
 *
 *   1. The distinctive twentieth-century change is diffusion speed rather than
 *      invention, which is a sharper claim than "there were many inventions"
 *      and is supported by a real research literature on adoption lags.
 *   2. Section 03 is the continuities, weighted equally, because that is the
 *      half most answers omit and because the volume's own spine, the collapse
 *      in the cost of distance, has a genuinely surprising counterweight in the
 *      trade literature's distance puzzle.
 *   3. Every figure carries its type and its date, and the ones that are
 *      modeled estimates say so, because this is the page a student will read
 *      years after it was written.
 */

module.exports = {
  topicKey: 't9-9',
  slug: 'topic-9-9-continuity-change-globalized-world',
  sourceFile: 'deep-reading-topic-9-9-continuity-change-globalized-world.html',
  lessonFile: 'lesson-9-9-continuity-change-globalized-world.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 9.9: Measured Against What',
  eyebrow: 'Topic 9.9 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Measured Against <em>What</em>',
  deck: `This is the last chapter of the course, and its question is the one every essay you have written has been practicing for. How much did the twentieth century actually change? The answer is not hiding in more facts. An extent claim has three parameters people leave unstated, a baseline, a criterion and a population, and once you say all three out loud the question stops being unanswerable and becomes a thesis somebody could argue with. Which is what a thesis is.`,
  meta: ['Four sections', 'The parameters, the layers, the continuities, the answer', 'The last chapter of the course'],
  footerNote: 'Topic 9.9 &nbsp;·&nbsp; Measured Against What &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the method and section 04 is the method turned into sentences, so those two are the exam. Sections 02 and 03 are the evidence: four threads run across all nine units at four checkpoints each, and then the continuities that survived the century, which the criteria weight equally with the changes and which most answers leave out. If you are revising in May and can only read one chapter of this volume, read this one and then go back for the details you find you cannot supply.`,
    steps: [
      `<b>01 The three parameters:</b> baseline, criterion, population, and why an extent question is unanswerable until all three are named.`,
      `<b>02 Three layers, three speeds:</b> four threads traced from c. 1200 to the present, which is the whole course in one section.`,
      `<b>03 What survived the century:</b> four continuities with the structural reason each held, including one that will surprise you.`,
      `<b>04 The last answer:</b> the weighing vocabulary, a worked thesis, and what to walk into the exam room holding.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'parameters',
      num: '01',
      accent: 'gold',
      name: 'Three Things an Extent Claim Hides',
      navLabel: 'The parameters',
      dates: 'A method &nbsp;·&nbsp; For any question about how much changed',
      thesis: `"Science and technology transformed the world after <span class="num">1900</span>" is not a claim yet, because three things it depends on have not been said. Say them and the same evidence produces different, defensible answers, which is the point rather than a problem.`,
      parts: [
        {
          heading: 'Baseline, criterion, population',
          blocks: [
            { p: `<b>The baseline: transformed compared with when?</b> Against <span class="num">1900</span> the change is enormous. Against <span class="num">1800</span> a large part of it is already underway, because Unit 5's mechanization, steam transport and submarine telegraph had begun the collapse in the cost of distance that Topic 9.1 completes. Against c. 1200 the twentieth century looks like the last and fastest stage of a process the whole course has been tracing. A prompt's dates are part of its question, and choosing the baseline is the first thing a strong thesis does.` },
            { p: `<b>The criterion: transformed by what standard?</b> There are at least five, and they rank the same evidence differently. <b>Breadth</b>, how many people were affected. <b>Depth</b>, how much of a single life was altered. <b>Speed</b>, how quickly it arrived. <b>Durability</b>, whether it can be undone. <b>Reach</b>, whether it changed the underlying structures or only the surface. Antibiotics score very high on depth and are reversible, as resistance shows. The mobile phone scores extremely high on breadth and speed and low on reach. Naming which standard you are using is the single move that turns an assertion into an argument.` },
            { p: `<b>The population: transformed for whom?</b> A claim about global change that names no population is describing an average nobody lived. The twentieth century was a different century for a Korean farmer's granddaughter, whose country moved from colonial rule and war to among the wealthiest in the world within two generations, than for a household in a region where the electricity grid still had not arrived. Estimates from the international energy and development agencies put the number of people without access to electricity at roughly seven hundred to eight hundred million in the late <span class="num">2010</span>s, and those are modeled estimates combining surveys and utility data rather than counts. Both experiences are the twentieth century.` }
          ]
        },
        {
          heading: 'The distinctive change is diffusion, not invention',
          blocks: [
            { p: `Here is the sharpest thing this chapter has to say about the period, and it is a better thesis than any list of inventions. The twentieth century's distinctive feature is not that more was invented. It is that the interval between an invention and its arrival in an ordinary life collapsed, and diffusion, not invention, is what changes a life.` },
            { p: `Compare. Printing with movable type reached Europe in the fifteenth century and mass literacy took roughly four centuries to follow. The telephone was demonstrated in the <span class="num">1870</span>s and took several decades to reach half the households of even the wealthiest country. Mobile telephony was commercialized around <span class="num">1980</span>, and by the mid-<span class="num">2010</span>s the International Telecommunication Union estimated worldwide mobile subscriptions at roughly the same order as the world's population, though subscriptions are not people, since many hold several and many hold none. Four centuries, then several decades, then roughly two.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: adoption lags are measured, and they tell two stories',
              html: `This is not an impression. Economists have assembled cross-country datasets on when particular technologies first appeared in each country and how intensively they were then used, most influentially in work by Diego Comin and coauthors. Two findings come out of it, and a student who has both is doing real analysis. First, the <b>lag before arrival</b> shortened dramatically across the twentieth century: a technology invented in <span class="num">1950</span> reached a poor country far sooner after its invention than one invented in <span class="num">1850</span> had. Second, the <b>intensity of use</b> once it arrived diverged, so that having the technology present and having it embedded in ordinary life are different things and the gap between rich and poor countries persisted in the second measure while narrowing in the first. Both are estimates built from patchy historical sources with real uncertainty. The direction is what matters: technologies now arrive nearly everywhere quickly and are used at very different depths, which is exactly the shape of the digital divide in Topic 9.1 and of the malaria gap in Topic 9.2.`
            } },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that technology caused the changes of this period, full stop. The volume has been careful about this from the first chapter and the last one should not spoil it. A technology makes something possible and cheaper; what happens next depends on who owns it, who can pay for it, what the law permits and who is organized to demand it. Synthetic nitrogen made high yields possible and the Green Revolution package reached irrigated Punjab and not rain-fed regions without credit. Antiretroviral drugs existed for years before they reached the epidemic's worst-hit regions, and what changed that was a legal and political campaign, not a laboratory. The accurate formulation throughout is that the technology removed a constraint and a political and economic settlement decided who benefited, which is the same sentence Topic 9.1 opened the volume with.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Naming baseline, criterion and population. <em>The mechanism is that "how much changed" is a comparison, and a comparison needs a reference point, a measuring stick and a subject, none of which the question supplies. Stating all three converts an unanswerable prompt into a claim a reader can test and disagree with, and disagreement is the property that makes a thesis a thesis rather than a summary.</em>`,
        limit: `The parameters discipline a judgment and do not make it for you. Two students who both name a baseline, a criterion and a population can still reach opposite conclusions from the same evidence, and both can be right in the sense the exam means, which is defensible.`,
        comparison: `Against <em>Topic 4.8</em> and <em>Topic 7.9</em>: all three chapters solve an apparently unanswerable question the same way, by making explicit the thing most answers leave implicit. Topic 4.8 names the level of the claim, Topic 7.9 names the criterion of significance, and this chapter adds the baseline and the population. If you learn one habit from this course, make it the habit of saying out loud what you are comparing to.`
      },
      terms: [
        ['Baseline', 'The reference point a change is measured against, which the dates in a prompt usually set and which changes the answer.'],
        ['Criterion of significance', 'The standard by which change is judged: breadth, depth, speed, durability or reach. Different criteria rank the same evidence differently.'],
        ['Population', 'The people a claim applies to. A global claim naming no population describes an average nobody experienced.'],
        ['Diffusion', 'The spread of a technology into ordinary use, as distinct from its invention, and the variable that actually changes lives.'],
        ['Adoption lag', 'The interval between a technology\'s invention and its arrival in a given country, which shortened across the twentieth century while intensity of use diverged.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'layers',
      num: '02',
      accent: 'rust',
      name: 'Three Layers, Three Speeds',
      navLabel: 'The layers',
      dates: 'c. 1200 to the present &nbsp;·&nbsp; The whole course in one section',
      thesis: `History does not move at one speed, and the reason continuity and change look contradictory is that they are usually descriptions of different layers. Sort any subject into three and the contradiction dissolves.`,
      parts: [
        {
          heading: 'The three layers',
          blocks: [
            { p: `The French historian Fernand Braudel, writing in <span class="num">1949</span> about the sixteenth-century Mediterranean, separated three kinds of historical time: the almost motionless history of environment and geography, the slower rhythms of social and economic structures, and the fast surface of events. The idea is more useful than its origin suggests, and this is the version to use for the twentieth century.` },
            { p: `<b>Layer one, the machinery of daily life.</b> Light, water, heat, transport, communication, medicine, food. Changes here arrive within a lifetime and are felt immediately. This is where the twentieth century's transformation is most spectacular and least deniable.` },
            { p: `<b>Layer two, the organization of production and population.</b> Where people live, how many children they have, what work they do, how long they live, what they are taught. Changes here take decades to a century and are visible in aggregate rather than in a moment. United Nations estimates put global life expectancy at birth at roughly forty-six years around <span class="num">1950</span> and roughly seventy-two by the late <span class="num">2010</span>s, with a dip in <span class="num">2020</span> and <span class="num">2021</span>; the estimate for <span class="num">1900</span>, from the historical demographer James Riley, is around thirty-two, reconstructed rather than recorded. United Nations estimates also put the world's urban population above half of the total for the first time around <span class="num">2007</span>.` },
            { p: `<b>Layer three, the structures of power.</b> Who rules, who owns, who counts, and how those are enforced. Changes here take generations or centuries, and this is the layer the whole course has been about. It is also where almost every continuity in section 03 lives.` },
            { p: `Now the rule that makes this usable. <b>A change in layer one does not propagate to layer three by itself.</b> Cheap copying gave everyone a printing press in their pocket and did not redistribute ownership of the networks. Antibiotics made infections survivable and did not change who could afford a doctor. Naming which layer your evidence sits in, and refusing to let an argument slide from one to another without saying so, is the discipline this section exists to teach.` }
          ]
        },
        {
          heading: 'Four threads, four checkpoints, nine units',
          blocks: [
            { p: `Here is the course. Four threads, each taken at c. <span class="num">1200</span>, c. <span class="num">1750</span>, c. <span class="num">1900</span> and c. <span class="num">2000</span>. Learn the shape rather than the sentences.` },
            { p: `<b>The cost of moving things and information.</b> At c. <span class="num">1200</span> a message travels at the speed of the fastest available body, and Indian Ocean trade runs on a monsoon calendar measured in seasons, which is Topic 2.3. By c. <span class="num">1750</span> the circuit is closed and global, from Potosi to Manila to Seville, and it is still wind-powered, so a letter takes months, which is Topic 4.8. By c. <span class="num">1900</span> steam, rail, the Suez Canal from <span class="num">1869</span> and submarine telegraph cables have split the two apart for the first time: a message crosses an ocean in minutes while a person still takes weeks, which is Unit 5 and Unit 6. By c. <span class="num">2000</span> the message cost is effectively zero and the freight cost is low enough that distance no longer decides where a factory sits, which is Topic 9.1 and Topic 9.4.` },
            { p: `<b>Where usable energy comes from.</b> At c. <span class="num">1200</span> it is muscle, wood, water and wind, and the ceiling is how much land can grow fodder and fuel. At c. <span class="num">1750</span> that ceiling is still in place nearly everywhere, with British coal beginning to lift it, which is why Topic 5.1 treats coal as the break rather than as an improvement. By c. <span class="num">1900</span> coal and steam have industrialized parts of Europe, North America and Japan, and electricity is arriving. By c. <span class="num">2000</span> petroleum, gas, nuclear generation and electric distribution have raised output beyond anything the earlier ceiling permitted, and the bill for the carbon has not been paid, which is Topic 9.3.` },
            { p: `<b>The unit of political authority.</b> At c. <span class="num">1200</span> authority is layered and overlapping: empires, sultanates, city-states, khanates, church jurisdictions, none of them sovereign in the modern sense, which is Unit 1. At c. <span class="num">1750</span> the large land empires of Unit 3 govern most of the world's people alongside the maritime empires of Unit 4. By c. <span class="num">1900</span> the nation-state is the European norm and colonial rule covers most of Africa and Asia, which is Unit 6. By c. <span class="num">2000</span> empire has been delegitimized and dismantled, and the sovereign state is universal: one hundred and ninety-three of them, with the thin institutional layer of Topic 9.8 laid over the top and no authority above them. The continuity is sovereignty itself. The change is that it now belongs to everyone.` },
            { p: `<b>Who counts as a person with claims.</b> At c. <span class="num">1200</span> legal hierarchy is near-universal and slavery and serfdom are lawful across most of the world. At c. <span class="num">1750</span> the same holds, with Atlantic chattel slavery approaching its peak, which is Topic 4.7 and Unit 5. By c. <span class="num">1900</span> chattel slavery has been abolished by law almost everywhere, and colonial subjecthood, legal racial hierarchy and the legal subordination of women are widespread. By c. <span class="num">2000</span> the legal categories have largely been dismantled, which is Topic 9.5, while the distribution they produced persists, and forced labor continues in forms that modeled estimates published jointly by the International Labour Organization and its partner organizations put in the tens of millions worldwide, figures built from national surveys plus extrapolation and disputed in method.` },
            { p: `Read down those four and one pattern appears in each: layer one and layer two changed almost beyond recognition, and layer three changed in its <em>contents</em> while keeping its <em>shape</em>. There are still sovereign states, still hierarchies, still a distribution of wealth that a person born in the wrong place cannot easily escape. What changed is who holds each position and what may be said about it.` }
          ]
        }
      ],
      useThis: {
        tool: `Sorting evidence by layer before comparing it. <em>The mechanism is that the machinery of daily life, the organization of production and population, and the structures of power change on timescales of years, decades and generations respectively, so a claim about one is not a claim about another, and an argument that appears to contradict itself is usually two true statements about different layers. The corollary is the useful part: a change in the fast layer does not reach the slow one by itself, and showing that it did in a particular case is a real argument rather than an assumption.</em>`,
        limit: `The layers are a device for organizing an answer, not a law about how history works, and the boundaries between them are arguable. Contraception sits in layer one as a technology, in layer two as a demographic change and in layer three as a change in women's standing, which is a strength of the case rather than a failure of the tool if you say so.`,
        comparison: `Against <em>Topic 4.8's</em> distinction between connections and centers: that chapter found that the connections of the world economy were transformed between <span class="num">1450</span> and <span class="num">1750</span> while the centers of production stayed where they were. That is this section's rule appearing three centuries earlier, and citing both together shows a pattern rather than an observation.`
      },
      terms: [
        ['Layered time', 'Braudel\'s 1949 distinction between the near-motionless history of environment, the slow rhythms of structures, and the fast history of events.'],
        ['Layer one', 'The machinery of daily life: light, water, transport, communication, medicine and food, which changed fastest and most visibly after 1900.'],
        ['Layer two', 'The organization of production and population: where people live, how long they live, how many children they have and what they are taught.'],
        ['Layer three', 'The structures of power: sovereignty, ownership, legal standing and hierarchy, which changed in contents rather than in shape.'],
        ['Propagation', 'Whether a change in a fast layer reaches a slow one, which has to be shown case by case and is usually the real question a prompt is asking.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'continuities',
      num: '03',
      accent: 'iron',
      name: 'What Survived the Century',
      navLabel: 'The continuities',
      dates: '1900 to the 2020s &nbsp;·&nbsp; The half most answers omit',
      thesis: `The success criteria weight continuity equally with change, and this is the section that supplies it. Four things carried straight through the most technologically transformative century in human history, and each one held for a structural reason you can state.`,
      parts: [
        {
          heading: 'The sovereign state did not weaken; it got stronger',
          blocks: [
            { p: `The commonest prediction of the <span class="num">1990</span>s was that global flows would erode the state. The evidence runs the other way. The number of sovereign states more than tripled over the century. State capacity rose enormously: universal identity documents, systematic taxation, compulsory schooling, national statistics, border control and surveillance capabilities that no nineteenth-century government could have imagined. The modern passport regime is itself a twentieth-century invention, standardized through international conferences after the First World War, and it hardened as trade in goods was liberalized.` },
            { p: `That combination is the point, and it is the most quotable continuity in this chapter. <b>Borders were opened to goods and money and kept closed to people.</b> United Nations estimates put the number of people living outside their country of birth at roughly one hundred and fifty million around <span class="num">1990</span> and roughly two hundred and eighty million in <span class="num">2020</span>, which is a rise from under three percent of world population to about three and a half percent. The absolute number is large and the share barely moved, which is the opposite of the impression most people have. These figures are compiled from national censuses and population registers, so they undercount people whose presence is not registered.` },
            { p: `The structural reason is the one Topic 9.4 states: capital can relocate in a planning cycle and a worker cannot follow, because the receiving state decides. A government that liberalizes trade gives up a tariff; a government that liberalizes migration gives up control over membership, which is the thing states are least willing to concede. That is why the asymmetry is stable rather than accidental.` }
          ]
        },
        {
          heading: 'Distance kept costing money, which should surprise you',
          blocks: [
            { p: `This volume opened by arguing that globalization is a collapse in the cost of distance, and honesty requires the counterweight. In <span class="num">1997</span> Frances Cairncross published a book called <em>The Death of Distance</em>, and in <span class="num">2005</span> Thomas Friedman argued that the world had become flat. The empirical trade literature does not support the strong version of either claim.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the distance puzzle',
              html: `Economists estimate trade between two countries with a gravity model, which predicts flows from the size of the two economies and the distance between them, and it is one of the most reliably fitting relationships in the discipline. If falling transport costs were dissolving distance, the estimated distance effect should have shrunk over the twentieth century. A meta-analysis by Anne-Célia Disdier and Keith Head published in <span class="num">2008</span>, pooling roughly fifteen hundred estimates from over a hundred studies, found the average effect large and, if anything, no smaller after <span class="num">1950</span> than before. That result is genuinely contested in its interpretation rather than in its arithmetic: some argue it is an artifact of how the models are specified, and others that distance in these estimates is standing in for information, trust, time sensitivity and shared institutions rather than for freight charges, which would explain why cheaper shipping did not reduce it. Either way the descriptive finding holds, and Pankaj Ghemawat has made the related argument from <span class="num">2011</span> that most economic activity remains domestic and that cross-border flows are a much smaller share of the total than the rhetoric of globalization implies. Cite the finding, name the interpretive dispute, and you have a qualification most students cannot supply.`
            } },
            { p: `So the accurate claim is narrower than the one this volume began with, and better. <b>The cost of moving a container across an ocean collapsed, and the cost of doing business with a stranger far away did not.</b> The physical part of distance got cheap; the informational, legal and relational parts did not, and those turn out to be most of it.` }
          ]
        },
        {
          heading: 'Hierarchy outlived its legal form, and so did inequality',
          blocks: [
            { p: `Topic 9.5 supplies the mechanism and it belongs in every synthesis answer: repeal ends a rule and leaves what the rule accumulated, because a discriminatory legal order produces both a permission structure and a stock of advantage in land, capital, education and connections. Political equality in South Africa in <span class="num">1994</span> was not followed by a comparable redistribution; measured wealth gaps between racial groups in the United States persisted for decades after the statutes of <span class="num">1964</span> and <span class="num">1965</span>; caste continued to shape marriage, occupation and violence in India after constitutional abolition; and the gap in unpaid domestic and care work is the most consistent finding in time-use research across countries.` },
            { p: `On economic inequality, Topic 9.4 gives the fact that resolves the apparent contradiction: inequality <b>between</b> countries narrowed over the three decades after <span class="num">1990</span>, driven overwhelmingly by growth in Asia, while inequality <b>within</b> a large number of countries widened over the same period. Both statements are true, they are about different units of analysis, and a student who says which unit they mean has given a better answer than one who picks a side.` },
            { p: `And a continuity worth ending on, because it is the one people forget to count. No nuclear weapon has been used in war since <span class="num">1945</span>. The technology that most obviously could have ended everything did not, through a Cold War, and the reasons are argued: deterrence, taboo, luck, and the institutional restraints of Topic 9.8 all have serious advocates and none is established. That is a continuity, it is the most consequential one in the period, and its cause is genuinely unknown.` }
          ]
        }
      ],
      useThis: {
        tool: `Open to goods, closed to people. <em>The mechanism is that a state giving up a tariff gives up revenue and a domestic producer's protection, while a state giving up border control gives up the power to decide who is a member, which is the constitutive power of a sovereign state and the last one any government concedes. That asymmetry, rather than any inconsistency or hypocrisy, is why the twentieth century liberalized trade and capital far more than it liberalized movement, and it is the single best one-sentence continuity available for a Unit 9 essay.</em>`,
        limit: `The asymmetry is not absolute. Regional arrangements including the European Schengen area did open movement among their members, labor migration schemes moved millions under state control, and refugee law created obligations states accepted. The claim is about the general pattern and its structural reason, and the exceptions show what conditions are required to override it.`,
        comparison: `Against <em>the Mongol peace</em> in Topic 2.2 and the Atlantic system in Topic 4.7: earlier periods of intense long-distance connection also moved goods and coerced or invited the movement of people on terms set entirely by the powerful. What is new after <span class="num">1900</span> is the passport and the visa, a bureaucratic apparatus for controlling ordinary movement that simply did not exist before, which means the closure is a modern state capability rather than an ancient condition.`
      },
      terms: [
        ['Passport regime', 'The twentieth-century system of documented border control, standardized after the First World War, which hardened as trade in goods was liberalized.'],
        ['Migrant share', 'The percentage of world population living outside its country of birth, estimated at under 3 percent around 1990 and about 3.6 percent in 2020, a far smaller rise than most people assume.'],
        ['Gravity model', 'The standard empirical model of bilateral trade, in which flows rise with economic size and fall with distance; its distance effect did not shrink over the century.'],
        ['Distance puzzle', 'The finding that estimated distance effects on trade persisted despite collapsing transport costs, interpreted as distance standing in for information, trust and time sensitivity.'],
        ['Between and within inequality', 'The distinction that resolves the argument: inequality between countries narrowed after 1990 while inequality within many countries widened.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'answer',
      num: '04',
      accent: 'oxide',
      name: 'The Last Answer',
      navLabel: 'The answer',
      dates: 'The skill &nbsp;·&nbsp; Sentence level, and the close of the course',
      thesis: `Everything above is preparation for one paragraph. This section builds it in front of you, because in this topic the difference between a strong answer and an average one is almost entirely at the level of the sentence.`,
      parts: [
        {
          heading: 'The vocabulary, and the two words that decide the grade',
          blocks: [
            { p: `Topic 7.9 supplies the weighing language for ranking causes and it transfers directly. Add the two constructions this topic specifically needs. <b>"Measured by X, the change was decisive; measured by Y, the continuity was."</b> That sentence names two criteria and commits to both, which is what an extent question is asking for. And <b>"the change was in the machinery and not in the structure"</b>, or its reverse, which names the layer.` },
            { p: `The two words that decide the grade are <em>extent</em> and <em>compared</em>. If your answer does not contain a comparison and a standard, it has not answered an extent prompt however much it knows. And the phrases to avoid are the ones that concede the question: "there were many changes", "it was a mix of both", "in some ways yes and in some ways no". Each of those is true of every question ever asked and therefore says nothing.` }
          ]
        },
        {
          heading: 'A worked thesis',
          blocks: [
            { p: `Take the prompt: <em>Evaluate the extent to which science and technology brought change in the period from <span class="num">1900</span> to the present.</em>` },
            { p: `<b>Weak.</b> "Science and technology changed the world enormously after 1900 through inventions like the internet, antibiotics, and the Green Revolution, although there were still problems like inequality." That is a list with a concession attached. It names no baseline, no criterion and no population, and it could have been written before the unit.` },
            { p: `<b>Strong.</b> "Measured by depth of change in an ordinary life, the transformation after <span class="num">1900</span> was among the most complete in human history: United Nations estimates put global life expectancy at roughly forty-six years in <span class="num">1950</span> and roughly seventy-two by the late <span class="num">2010</span>s, driven by sanitation, vaccination and antibiotics rather than by any change in the social order. Measured instead by reach into the structures of power, the century changed remarkably little: the sovereign state multiplied and strengthened rather than eroding, the share of the world's population living outside its country of birth rose only from under three to about three and a half percent between <span class="num">1990</span> and <span class="num">2020</span> while goods and capital moved freely, and inequality between countries narrowed only as inequality within them widened. The most defensible position is therefore that technology transformed the conditions of life and left the distribution of power substantially intact, and the clearest evidence for that claim is that every technology in Unit 9 required a political decision to determine who received it, from the Green Revolution package reaching irrigated Punjab and not rain-fed regions without credit, to antiretroviral drugs reaching wealthy countries years before the regions worst hit by the epidemic."` },
            { p: `Look at what that does. It names two criteria and gives the answer under each. It gives a baseline and dates every figure. It says what kind of numbers they are. It commits to a position rather than balancing. It supplies a mechanism, political decision determining distribution, rather than a list. And it is arguable: a reader could reasonably respond that a change in who survives childhood <em>is</em> a change in the structure of power, and that response would be a good essay too. Arguable is the property you are being graded on.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not hedge an extent claim in order to seem balanced. "There was both change and continuity" is the single most common closing sentence in this unit and it scores as a refusal to answer, because it is true of every period in the entire course. Balance in this exam does not mean declining to judge; it means judging and then meeting the strongest objection specifically. The strongest objection to the thesis above is worth having ready: if a person born in <span class="num">1900</span> had a roughly even chance of burying a child and a person born in <span class="num">2000</span> did not, calling that a change in "conditions" rather than in "structure" may be understating it, because a society in which children reliably survive makes different families, different schooling and different politics. Naming that objection and answering it is what the top band is for.`
            } }
          ]
        },
        {
          heading: 'What to walk in holding',
          blocks: [
            { p: `This is the last page of the course, so here is the compression. Four sentences, and they will carry you through most of what the exam can ask.` },
            { p: `<b>Connection is old; its price is what changed.</b> Goods, faiths, technologies and diseases crossed Afro-Eurasia in the thirteenth century, and the circuit closed around the world from <span class="num">1571</span>. What the last two centuries changed is the cost of moving a thing, an idea or a person, and almost every question in Units 5 through 9 is downstream of that.` },
            { p: `<b>A name is not a mechanism.</b> Whatever you are asked about, the marks are in how it worked, for whom, and at whose expense. The container saved money on the dock. The declaration worked because a state can be held to what it published. Conditionality moved a decision out of reach of a vote. Say the mechanism and the evidence stops being a list.` },
            { p: `<b>Every gain has a bill, and it usually lands somewhere else.</b> Synthetic nitrogen and the dead zone, petroleum and the atmosphere, cheap goods and a closed plant, a cure that exists and a child who cannot reach it. Naming the gain and the bill in one sentence is the qualification criterion, and it works on nearly every prompt in the course.` },
            { p: `<b>Say what you are comparing to.</b> Baseline, criterion, population; level of claim; criterion of significance. Every method chapter in this course has been teaching one version of the same habit, and it is the habit that turns knowing things into arguing something. That is the whole of the skill, and you have it.` }
          ]
        }
      ],
      useThis: {
        tool: `Two criteria, two verdicts, one commitment. <em>The mechanism is that an extent question has no single answer because significance is a relation to a standard rather than a property of an event, so the structure that scores is to give the verdict under one criterion, give the opposite verdict under another, and then commit to which one better answers the prompt as asked. That reads as command of the material rather than as indecision, which is exactly the difference between it and "there was both change and continuity".</em>`,
        limit: `Structure does not substitute for knowing things, and a well-shaped sentence with nothing inside it is transparent to a reader. Every step needs a dated, specific piece of evidence from a named topic, and the figures need their type attached.`,
        comparison: `Against <em>Topic 7.9's</em> worked thesis on the causes of the Second World War and <em>Topic 4.8's</em> line that connections were transformed and centers were not: three chapters, three units, one move. Each compresses a whole unit into one arguable sentence by naming the distinction that makes the apparent contradiction disappear.`
      },
      terms: [
        ['Extent claim', 'A judgment about how much changed, which requires a baseline, a criterion and a population before it can be assessed.'],
        ['Weighing language', 'The vocabulary of relative significance, decisive, underlying, measured by, more than, which an evaluation requires and a list avoids.'],
        ['False balance', 'Declining to judge in order to appear fair, of which "there was both change and continuity" is the standard example and scores as an answer avoided.'],
        ['Defensible claim', 'A judgment a reader could reasonably dispute, supported by criterion and dated evidence, as distinct from a summary nobody would contest.'],
        ['Synthesis', 'Holding evidence from several units against one question, which is what this topic is for and what the last four sentences of this chapter compress.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `These four cards are the end of the course. The first is the method, the second and third are the evidence on each side, and the fourth is the sentence to walk into the exam room holding.`,
    pairs: [
      {
        category: 'Method',
        title: 'An extent claim needs a baseline, a criterion and a population',
        body: `"Technology transformed the world after 1900" is not yet a claim. Transformed compared with when: against 1900 the change is enormous, against 1800 much of it is already underway with steam and telegraph, against c. 1200 it is the last stage of a process this whole course traces. Transformed by what standard: breadth, depth, speed, durability or reach, and they rank the same evidence differently, since antibiotics score high on depth and are reversible while the mobile phone scores high on breadth and speed and low on reach. Transformed for whom: a global claim naming no population describes an average nobody lived, and estimates put roughly 700 to 800 million people without access to electricity in the late 2010s. Name all three and the unanswerable question becomes a thesis a reader could argue with.`
      },
      {
        category: 'Change',
        title: 'The distinctive change is diffusion speed, not invention',
        body: `More things were invented in the twentieth century, and that is the weaker claim. The stronger one is that the interval between invention and arrival in an ordinary life collapsed, and diffusion is what changes a life. Printing reached Europe in the fifteenth century and mass literacy took roughly four centuries; the telephone was demonstrated in the 1870s and took several decades to reach half the households of the wealthiest country; mobile telephony was commercialized around 1980 and within roughly two decades the ITU estimated worldwide subscriptions at the same order as world population, though subscriptions are not people. Cross-country research on adoption lags, most influentially by Diego Comin and coauthors, finds the same two things: arrival lags shortened sharply while intensity of use diverged. That pairing is the digital divide of Topic 9.1 and the malaria gap of Topic 9.2 stated as a general law.`
      },
      {
        category: 'Continuity',
        title: 'Borders opened to goods and closed to people, and that was not an accident',
        body: `The prediction that global flows would erode the state was wrong. The number of sovereign states more than tripled across the century, state capacity rose through identity documents, systematic taxation, compulsory schooling and border control, and the modern passport regime is itself a twentieth-century invention standardized after the First World War. United Nations estimates put people living outside their country of birth at roughly 150 million around 1990 and roughly 280 million in 2020, a rise from under 3 percent to about 3.6 percent of world population, compiled from censuses and registers that undercount the unregistered. The structural reason is that a state giving up a tariff gives up revenue while a state giving up border control gives up the power to decide membership, which is the constitutive power of sovereignty. Add the trade literature's distance puzzle: the Disdier and Head meta-analysis of 2008 found the estimated effect of distance on trade no smaller after 1950 than before. Shipping got cheap; doing business with a distant stranger did not.`
      },
      {
        category: 'The course',
        title: 'Four sentences that answer most of what the exam can ask',
        body: `Connection is old and its price is what changed: goods, faiths and diseases crossed Afro-Eurasia in the thirteenth century, the circuit closed around the world from 1571, and Units 5 through 9 are downstream of the collapsing cost of moving a thing, an idea or a person. A name is not a mechanism: the container saved money on the dock rather than at sea, a declaration acquired force because a state can be held to what it published, conditionality moved a budget decision beyond the reach of a vote. Every gain has a bill and it usually lands somewhere else: synthetic nitrogen and the dead zone, petroleum and the atmosphere, cheap goods and a closed plant, a cure that exists and a child it does not reach. And say what you are comparing to: baseline, criterion and population, the level of the claim from Topic 4.8, the criterion of significance from Topic 7.9. Every method chapter in this course has been teaching one habit, and it is the habit that turns knowing things into arguing something.`
      }
    ]
  }
};
