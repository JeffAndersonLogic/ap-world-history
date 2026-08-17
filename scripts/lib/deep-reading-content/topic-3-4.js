'use strict';

/**
 * Topic 3.4, Comparison in Land-Based Empires: the deep reading.
 *
 * Why this exists, and why it matches the shape of the 1.7 and 2.7 chapters.
 * The success criteria are a skill: a specific similarity across two empires
 * with an explanation of why it existed, a specific difference with an account
 * of what produced it, and then a comparison argument with a claim, evidence
 * from different empires and a statement of significance. Everything here comes
 * from the chapters for 3.1 to 3.3; what this one adds is the frame.
 *
 * The organizing insight for Unit 3 specifically: these five empires faced one
 * problem in five variants, and their institutional differences are mostly
 * explained by three variables. Did the ruling group share the religion of the
 * majority? Could the state pay in cash, or only in land? And who was on the
 * other side of the frontier, a fortified rival, a nomadic confederation, or
 * nobody in particular? Answer those three about any two empires and the
 * comparison writes itself.
 *
 * Section 04 exists because the hindsight trap is the characteristic failure of
 * this unit. Students write the eighteenth century backward from the
 * nineteenth, so the Ottomans are declining from 1566, the Mughals are doomed
 * from Aurangzeb, and the Qing are stagnating at the exact moment they doubled
 * their territory. All three are retrospective judgments smuggled in as
 * description, and the chapter says so.
 */

module.exports = {
  topicKey: 't3-4',
  slug: 'topic-3-4-comparison',
  lessonFile: 'lesson-3-4-comparison.html',

  titleHtml: 'One Problem, Five <em>Answers</em>',
  deck: `Five empires, one problem: how does a small ruling group hold an enormous population it does not resemble, with an army it cannot fully afford, through officials it cannot see? This chapter puts the answers side by side, names the three variables that explain most of the differences, and then shows how to write a comparison that earns the point rather than describing two empires in turn.`,

  howTo: {
    heading: 'How to Use This',
    intro: `This chapter introduces almost no new evidence; everything comes from the chapters for Topics 3.1 to 3.3. Section 03 is the one that does the most work, because it reduces the differences between five empires to three variables you can check quickly on any pair a prompt hands you.`,
    steps: [
      `<b>01 The five profiles:</b> the same six questions asked of each empire.`,
      `<b>02 What they shared:</b> four similarities, each with the reason attached.`,
      `<b>03 The three variables:</b> religion, cash and frontier, which generate most of the differences.`,
      `<b>04 The eighteenth century:</b> what happened, and how not to write it backward.`,
      `<b>05 Writing it:</b> five failures specific to this unit, and a worked paragraph.`,
      `<b>Then the closing section</b>, which is four finished comparisons to use as models.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'profiles',
      num: '01',
      accent: 'gold',
      name: 'The Five Profiles',
      navLabel: 'The five profiles',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Six questions, five times',
      thesis: `Ask the same six questions of each empire and the answers line up into a comparison. Ask different questions of each and you have five descriptions.`,
      parts: [
        {
          heading: 'The Ottomans and the Safavids',
          blocks: [
            { p: `<b>Ottomans.</b> <em>Expansion:</em> artillery and salaried infantry, from Constantinople in 1453 to Hungary, Egypt and North Africa. <em>Who serves:</em> devshirme recruits made kul of the sultan's household, plus timar-holding cavalry. <em>Who collects:</em> timar, then increasingly tax farming, and from 1695 lifetime farms. <em>Legitimacy:</em> protector of Mecca and Medina, leading Sunni power, sultanic law alongside religious law, endowed mosque complexes delivering public services. <em>Religious difference:</em> non-Muslims governed through their own religious leaders and taxed by the jizya. <em>Frontier:</em> fortified European states to the west, a rival gunpowder empire to the east.` },
            { p: `<b>Safavids.</b> <em>Expansion:</em> tribal cavalry devotion first, artillery and paid infantry only after Chaldiran taught the lesson. <em>Who serves:</em> Qizilbash tribal cavalry, then Abbas I's ghulam regiments of Caucasian converts. <em>Who collects:</em> crown lands expanded under Abbas, plus a royal monopoly on silk. <em>Legitimacy:</em> descent claims and imposed Twelver Shiism, staged in Isfahan's royal square. <em>Religious difference:</em> a majority converted to the state's confession, with minorities present and constrained. <em>Frontier:</em> the Ottomans west, the Mughals east, Uzbeks north.` }
          ]
        },
        {
          heading: 'The Mughals, the Qing and Russia',
          blocks: [
            { p: `<b>Mughals.</b> <em>Expansion:</em> Panipat in 1526 with field artillery, then absorption of the subcontinent to Aurangzeb's death. <em>Who serves:</em> mansabdars ranked by the emperor, drawn from Turks, Persians, Afghans, Indian Muslims and Hindu Rajputs. <em>Who collects:</em> jagir assignments paying mansabdars, zabt assessment on measured land, and hereditary zamindars at the village end. <em>Legitimacy:</em> Persianate sacred kingship, daily public appearance, monumental mausolea. <em>Religious difference:</em> the central question, answered by Akbar with abolition of the jizya and by Aurangzeb with its return. <em>Frontier:</em> the Safavids at Kandahar, the Deccan powers, and an unguarded coast.` },
            { p: `<b>Qing.</b> <em>Expansion:</em> conquest of Ming China in 1644 and then the steppe, ending the nomadic threat permanently. <em>Who serves:</em> hereditary banners plus the entire Chinese examined bureaucracy, often paired in office. <em>Who collects:</em> a simplified land tax paid in silver, with the head tax eventually merged into it. <em>Legitimacy:</em> plural, the Mandate of Heaven to Chinese subjects and patronage of Tibetan Buddhism to Mongols and Tibetans. <em>Religious difference:</em> managed by presenting the emperor in several idioms rather than by taxing a hierarchy. <em>Frontier:</em> the steppe, closed by 1760, and a coast the state did not prioritize.` },
            { p: `<b>Russia.</b> <em>Expansion:</em> artillery against Tatar khanates, then small armed parties and river forts across Siberia to the Pacific. <em>Who serves:</em> a nobility holding land in exchange for service, formalized by Peter I's table of ranks. <em>Who collects:</em> a poll tax on male peasants, collected through landlords, which deepened serfdom. <em>Legitimacy:</em> Orthodoxy, with the church subordinated to the state under Peter. <em>Religious difference:</em> Orthodox uniformity pressed at the center, pragmatic accommodation at the edges. <em>Frontier:</em> almost everywhere, and mostly against people with no firearms.` }
          ]
        }
      ],
      useThis: {
        tool: `A fixed question set. <em>The mechanism is that comparison requires a shared category, so asking every empire the same six questions, how it expanded, who served, who collected, how it legitimized, how it handled religious difference and who was on the frontier, produces answers that can be set against each other instead of five self-contained descriptions.</em>`,
        limit: `Profiles are the setup. A table of features earns nothing until you explain why the entries differ, which is section 03.`,
        comparison: `Pick your category from the prompt before you write. If it names administration, compare devshirme against mansabdari; if it names religion, compare Akbar against Ismail; if it names expansion, compare the Qing steppe campaigns against Ottoman sieges.`
      },
      terms: [
        ['Land-based empire', 'A state expanding across contiguous territory rather than overseas, the category this unit compares.'],
        ['Conquest elite', 'A ruling group of different origin from the majority it governs, which fits the Qing and the Mughals closely and Russia hardly at all.'],
        ['Service elite', 'Officials and soldiers whose status comes from the ruler rather than from birth or land, the standard early modern solution to loyalty.'],
        ['Revenue system', 'The arrangement by which a state converts rural production into money or service, and the best single predictor of what else it can do.'],
        ['Frontier type', 'Whether an empire faced fortified rivals, gunpowder equals, or mobile peoples, which shaped the army and therefore the state.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'shared',
      num: '02',
      accent: 'rust',
      name: 'What They Shared',
      navLabel: 'What they shared',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Four similarities with reasons',
      thesis: `Four things are true of all five empires, and each is worth writing down only because it can be explained. A similarity without a reason is a coincidence.`,
      parts: [
        {
          heading: 'The four',
          blocks: [
            { p: `<b>1. Gunpowder plus a treasury.</b> All five expanded with firearms and artillery, and all five had to build fiscal machinery to sustain them. The reason is the mechanism in the Topic 3.1 chapter: artillery destroyed the defensive value of walls and cost more than any local lord could pay, so it rewarded exactly the states that could tax at scale and it starved the ones that could not.` },
            { p: `<b>2. An elite that owed the ruler everything.</b> Devshirme recruits, ghulams, mansabdars, bannermen, service nobles. The reason is that every one of these was a ruling group governing people it did not resemble, and a servant with no local base and no inheritable claim is the only kind who cannot become a rival with a following of his own.` },
            { p: `<b>3. Rule through local intermediaries anyway.</b> Zamindars, provincial notables, Chinese gentry, communal religious leaders, tribal chiefs. The reason is arithmetic: no early modern state could put a salaried official in every district at the speed of a horse, and only a local man knew which family farmed which field.` },
            { p: `<b>4. Legitimacy built and displayed.</b> Mosque complexes with hospitals and kitchens, planned royal squares, mausolea, palaces, imperial tours, daily public appearances. The reason is that these states could not compel most of their subjects most of the time, so consent had to be manufactured, and a building or a ritual reaches people who will never see the ruler and cannot read a decree.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the same solution appearing independently is evidence about the problem',
              html: `When the Ottomans levy Christian boys, the Safavids raise Caucasian converts, the Mughals rank an existing aristocracy on non-hereditary scales, the Qing organize a hereditary banner caste and the Russians tie noble status to a table of service ranks, five states with different cultures, religions and histories have arrived at variations of one design. That convergence is itself an argument: it tells you the constraint was structural rather than cultural, because cultures this different do not produce the same institution by coincidence. Convergent solutions are a form of evidence, and pointing at one is a strong way to open a comparison.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Similarity with a shared cause. <em>The mechanism is that all five faced the same three constraints, a technology that only a rich state could sustain, a ruling group unlike its subjects, and distances no bureaucracy could cover at the speed of a horse, so all five produced service elites, local intermediaries and manufactured legitimacy.</em>`,
        limit: `A shared feature stated without its cause is a list item. If you cannot say why the similarity existed, the category is probably too broad, and narrowing it usually rescues the point.`,
        comparison: `Against <em>Unit 2</em>: that unit found three trade networks producing the same relay trading, partnership contracts and merchant diasporas for shared structural reasons. Same analytic move, different subject, and noticing that you are making it twice is worth a sentence in an essay about broader patterns.`
      },
      terms: [
        ['Convergent solution', 'The same institutional answer reached independently by different societies, which is evidence that the constraint was structural.'],
        ['Manufactured consent', 'Legitimacy produced deliberately through building, ritual and public service, because compulsion could not reach most subjects.'],
        ['Fiscal capacity', 'A state&rsquo;s ability to extract revenue reliably, the precondition for sustaining gunpowder armies.'],
        ['Intermediary rule', 'Government through existing local elites, universal in this unit because no state could reach the village directly.'],
        ['Structural constraint', 'A limit imposed by scale, distance or technology rather than by culture or choice.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'variables',
      num: '03',
      accent: 'iron',
      name: 'The Three Variables',
      navLabel: 'The three variables',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Religion, cash, frontier',
      thesis: `Most differences between these empires reduce to three questions. Check them on any pair and you will usually have your explanation before you have finished reading the prompt.`,
      parts: [
        {
          heading: 'Variable one: did the rulers share the majority religion?',
          blocks: [
            { p: `This single question explains more of Unit 3's religious policy than anything else. Where the ruling group shared the majority's faith, religion could be used to unify: the Safavids converted a country and made confession the basis of identity; Russia pressed Orthodox uniformity at its center.` },
            { p: `Where the rulers were a religious minority over a large majority, exclusion was unaffordable and accommodation was the working policy: Mughal jizya abolition and Rajput recruitment; Ottoman governance of Christian communities through their own leaders; Qing patronage of several traditions at once. And where it was reversed under pressure, as under Aurangzeb, the empire paid for it politically. Check this variable first.` }
          ]
        },
        {
          heading: 'Variable two: could the state pay in cash?',
          blocks: [
            { p: `A state with reliable cash revenue can hire salaried infantry, keep artillery in being, and appoint officials it can move. A state without it must pay in land or in rights to collect, which produces cavalry rather than musketeers and creates local interests it will later have to fight.` },
            { p: `The Qing, with a monetized economy taxed in silver, could pay officials salaries. The Ottomans moved from land assignments to selling collection rights, which delivered cash quickly and created a provincial notable class. The Mughals paid in rotated revenue assignments and hit the wall when ranks outran available revenue. Russia invented a per-head tax and bound peasants in place to make it collectible. Ask which of these a given empire was doing in the decade your prompt names, and half the administrative differences follow.` }
          ]
        },
        {
          heading: 'Variable three: who was on the other side of the frontier?',
          blocks: [
            { p: `Armies are shaped by their opponents, and states are shaped by their armies. The Ottomans faced fortified European states and a rival gunpowder empire, so they needed siege artillery, disciplined infantry and a navy, all of which are expensive and standing. The Qing and the Russians faced mobile peoples who were themselves acquiring gunpowder weapons, the Zunghars casting their own cannon with foreign help, but who could not match a settled empire's siege train or its supply, so they needed logistics, forts and mounted firepower rather than great siege trains, and they could expand at lower cost per square mile than anyone else in this unit.` },
            { p: `The Mughals faced neither reliably: a rival empire at Kandahar, mobile Maratha forces in the Deccan that artillery could not pin, and a coastline they did not defend. That last omission is the one to carry into Unit 4, because it explains how European trading companies established fortified posts inside a superpower's territory without the superpower treating it as an invasion.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not compare an empire with "Europe." Europe in this period is not a state, it is dozens of competing ones, and the comparison usually smuggles in a hindsight claim about later industrial power. If your prompt invites the comparison, name a specific state, France, Spain, England, and compare like with like: a French king's relationship with his nobility against a Mughal emperor's with his mansabdars is a real comparison, while "the Ottomans versus Europe" is a category error wearing a thesis.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The three-variable check. <em>Ask whether the rulers shared the majority's religion, whether the state could pay in cash or only in land and collection rights, and what kind of enemy sat on the frontier. Those three generate most of the institutional differences in this unit, which means you can derive a comparison instead of trying to remember one.</em>`,
        limit: `Three variables are a tool, not a theory. Personalities, accidents and specific events matter too, and an answer that treats every difference as mechanically determined will overreach on a prompt about, say, why Aurangzeb chose the Deccan.`,
        comparison: `Against the <em>cost per ton-mile</em> mechanism in Topic 2.7: both chapters give you a small number of variables that generate many differences, which is what a comparison toolkit is for, and both work only when you name the variable rather than gesturing at it.`
      },
      terms: [
        ['Minority rule', 'Government by a group whose religion or ethnicity differs from the majority&rsquo;s, the condition that made accommodation a fiscal necessity.'],
        ['Monetization', 'The extent to which an economy runs on coin, which determines whether a state can pay salaries or must pay in land.'],
        ['Salaried infantry', 'Paid, drilled, firearm-equipped foot soldiers, the force gunpowder made decisive and the reason states needed cash.'],
        ['Frontier type', 'The kind of opponent an empire faced, which shaped its army and therefore its finances and its politics.'],
        ['Category error', 'Comparing unlike units, such as an empire with a continent of competing states.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'eighteenth',
      num: '04',
      accent: 'oxide',
      name: 'The Eighteenth Century, and the Hindsight Trap',
      navLabel: 'The eighteenth century',
      dates: '1699 to 1750 &nbsp;·&nbsp; Divergence, and how to describe it',
      thesis: `The five empires' paths separate after about 1700, and the standard account of that separation is written backward from the nineteenth century. Describing what happened, rather than what it later led to, is the single most valuable discipline in this unit.`,
      parts: [
        {
          heading: 'What actually happened',
          blocks: [
            { p: `<b>The Safavids</b> ended fastest and most clearly: an Afghan invasion took Isfahan in <span class="num">1722</span>, and the dynasty did not recover, after decades in which the ghulam and tribal systems had both decayed and central revenue had weakened.` },
            { p: `<b>The Mughals</b> decentralized rapidly after Aurangzeb's death in <span class="num">1707</span>. Provinces became effectively independent under their own governors, and Maratha power expanded across much of the subcontinent. The emperor remained, and remained a source of legitimacy that others were eager to claim, which is why the formal empire outlasted its actual power by a century and a half.` },
            { p: `<b>The Ottomans</b> lost significant territory in the treaty of <span class="num">1699</span>, the first time they had ceded on that scale, and spent the eighteenth century as a defensive rather than expanding power, while provincial notables grew stronger. They also remained one of the great powers of Europe and the Mediterranean throughout the century, which the older story tends to forget.` },
            { p: `<b>The Qing</b> reached their greatest extent and, by most measures, their peak prosperity in the eighteenth century, with the Zunghar campaigns closing the steppe and the population roughly doubling. <b>Russia</b> emerged from Peter's reforms as a European great power with a Baltic capital, a navy and a modern army.` }
          ]
        },
        {
          heading: 'The trap, and how to stay out of it',
          blocks: [
            { p: `Now the discipline. Because we know what happened in the nineteenth century, it is very easy to write the eighteenth as a prologue: the Ottomans "declining" from <span class="num">1566</span>, the Mughals "doomed" from Aurangzeb, the Qing "stagnating" exactly when they doubled their territory and their population. Each of those is a judgment made with information nobody in the period had, presented as a description of the period.` },
            { p: `Three habits keep you out of it. <b>Date your claims.</b> "In <span class="num">1700</span> the Qing were the largest and richest state on earth" is a statement about 1700 and is true; "the Qing were falling behind Europe" is a statement about the nineteenth century wearing an eighteenth-century costume. <b>Ask what a contemporary would have seen.</b> An informed observer in <span class="num">1720</span> would have described a Qing empire at its height, a Russia newly formidable, a resilient Ottoman state and a fragmenting Mughal empire, and would not have identified England as the coming power. <b>Distinguish decline from change.</b> An empire whose provinces become prosperous regional states, as in post-Mughal India, has not simply failed; it has redistributed, and the standard "decline" reading is partly an artifact of measuring everything from the capital.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Ottoman decline thesis has been revised, and knowing that is worth a point',
              html: `For a long time the standard account had the Ottoman empire decaying continuously from the death of Suleiman in <span class="num">1566</span>, and it was built largely on the empire's own reform literature, in which officials argued for change by describing the present as corrupt and the past as golden. Historians read those texts as evidence of decline for generations before noticing that a genre written to advocate reform will always describe decline. The revised account describes an empire that changed shape, from timar cavalry to tax farming, from expansion to defense, from a palace-centered to a household-and-notable politics, and survived as a major power into the twentieth century. When you write about any early modern "decline," ask whose complaint your evidence originally was.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Dated claims. <em>The mechanism is that attaching a year to every comparative statement forces you to say what was true then rather than what it later led to, which is what separates a historical description from a retrospective verdict, and graders can see the difference immediately.</em>`,
        limit: `Avoiding hindsight is not the same as denying trajectory. Real weaknesses existed and can be named; the requirement is that you name them as they appeared at the time and with evidence from the time.`,
        comparison: `Against <em>Unit 4</em>: the temptation to read the eighteenth century as European ascendancy in progress is strongest exactly where the two units meet, which is why keeping the dates attached matters most in precisely those essays.`
      },
      terms: [
        ['Decentralization', 'The transfer of effective power from a capital to provinces, which is what happened to Mughal India after 1707.'],
        ['Regional state', 'A province that becomes an independent power in fact, often prosperous, which complicates any simple story of imperial decline.'],
        ['Hindsight bias', 'Describing a period in terms of outcomes that were unknown at the time, the characteristic error in writing about this century.'],
        ['Reform literature', 'Texts written to advocate change by describing present corruption, long misread as neutral evidence of decline.'],
        ['Trajectory', 'The direction a state was actually moving in, which must be established from contemporary evidence rather than assumed from later events.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'writing',
      num: '05',
      accent: 'gold',
      name: 'Writing It Without Collapsing',
      navLabel: 'Writing the comparison',
      dates: 'The paragraph &nbsp;·&nbsp; Five failures and a worked example',
      thesis: `Five failures cover nearly every weak Unit 3 comparison, and four of them are recognizable in the first sentence.`,
      parts: [
        {
          heading: 'The five failures',
          blocks: [
            { p: `<b>1. The label as explanation.</b> "They expanded because they were gunpowder empires." Circular. Fix: name what the guns required, foundries, powder, siege trains, salaried drilled infantry, and the fiscal machinery that paid for them, which is what distinguished the states that expanded from the many states that merely owned firearms.` },
            { p: `<b>2. The toleration scorecard.</b> Ranking rulers as tolerant or intolerant. Fix: state the specific policy with its date and say what it bought and from whom. Akbar's abolition of the jizya in 1564 purchased the cooperation of Rajput arms and Hindu administrators; Aurangzeb's reimposition in 1679 purchased revenue and clerical endorsement for a ruler fighting expensive wars.` },
            { p: `<b>3. Decline written backward.</b> Section 04. Fix: date your claims and ask what a contemporary would have seen.` },
            { p: `<b>4. Comparing an empire with a continent.</b> "The Ottomans versus Europe." Fix: name a state.` },
            { p: `<b>5. Religion as the automatic cause.</b> Assuming every conflict in this unit is sectarian. Fix: check. Chaldiran genuinely was religious and political at once. The Safavid-Mughal wars over Kandahar were between two Muslim empires of shared Persianate culture with intermarried elites, fought over a strategic corridor. Getting that second case right is the fastest way to show you are reasoning rather than pattern-matching.` }
          ]
        },
        {
          heading: 'The paragraph, assembled',
          blocks: [
            { p: `Four sentences. Name the category and the claim. Evidence from empire one, specific and dated. Evidence from empire two, at the same grain. Then the reasoning: which of the three variables in section 03 differed, and how it produced the outcome.` },
            { p: `Worked example, all of it from earlier chapters. <em>Category and claim:</em> the Ottomans and the Mughals both built elites dependent on the ruler, and they filled them in opposite ways. <em>Evidence one:</em> the Ottomans levied Christian boys from Balkan villages through the devshirme, converted and trained them as kul of the sultan's household, and staffed both the janissary corps and the highest offices of state from them, so that a grand vizier might own nothing his master could not reclaim. <em>Evidence two:</em> Akbar took the warrior aristocracy already in India, Turkish, Persian, Afghan, Indian Muslim and Hindu Rajput, and ranked every member on a non-hereditary mansab that fixed his pay and cavalry obligation, rotating the revenue assignments that paid them. <em>Reasoning:</em> the difference follows from whether each ruling group shared the majority's religion, since a Sunni dynasty with a large subject Christian population could levy servants from outside the Muslim elite entirely, while a Muslim dynasty ruling a Hindu majority across a subcontinent needed that majority's warrior elite inside the system rather than excluded from it.` },
            { p: `That is one category, two mechanisms at matching detail, and a causal explanation drawn from a variable you can check on any pair. Nothing in it required memorizing a comparison in advance.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: check that your reasoning would survive being wrong about the other empire',
              html: `A good test for the fourth sentence. If your explanation of a difference would still stand had the second empire done something else, it is not an explanation, it is a description with a because in it. "The Mughals recruited Rajputs because they were tolerant" fails this test, since tolerance would also predict a hundred other policies and predicts none of them specifically. "The Mughals recruited Rajputs because a Muslim dynasty over a Hindu majority could not staff an army by exclusion" passes, because it predicts this policy and would have been falsified if the Mughals had governed by exclusion and survived.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The four-sentence comparison paragraph. <em>Category and claim, evidence from each empire at matching grain, then a causal explanation naming which of the three variables differed. Screen your draft for the five failures before anything else, since four of them are visible in the opening sentence.</em>`,
        limit: `Structure cannot rescue thin content. If you cannot state how an institution worked, no paragraph shape will produce a strong comparison, and the fix is rereading a chapter rather than rewriting a sentence.`,
        comparison: `Against <em>Topics 1.7 and 2.7</em>: three comparison chapters, one method, three sets of variables. If you have read all three, say so to yourself before an exam: the method is the transferable thing, and the content changes every unit.`
      },
      terms: [
        ['Circular explanation', 'Using a label as its own cause, as in explaining expansion by calling a state a gunpowder empire.'],
        ['Scorecard', 'Rating historical actors as tolerant or intolerant rather than explaining what their policies accomplished.'],
        ['Matching grain', 'Supplying evidence of the same specificity on both sides of a comparison.'],
        ['Falsifiable reasoning', 'An explanation that predicts this outcome specifically and would have been contradicted by a different one.'],
        ['Significance', 'The statement of why a comparison matters, which the third success criterion requires and most answers omit.']
      ]
    }
  ],

  closing: {
    heading: 'Four Finished Comparisons',
    navLabel: 'Four models',
    intro: `Models rather than summaries. Each names one category, gives dated evidence from two empires at matching grain, and ends with the variable that produced the difference. Cover one and rebuild it with a different pair.`,
    pairs: [
      {
        category: 'Elites',
        title: 'Levy your servants or rank the aristocracy you already have',
        body: `The Ottomans took Christian boys from Balkan villages through the devshirme, converted and trained them as kul of the sultan's household, and filled both the janissary corps and the great offices of state from them. Akbar ranked the aristocracy already present in India, Turkish, Persian, Afghan, Indian Muslim and Hindu Rajput, on a non-hereditary mansab that set pay and cavalry obligation, with rotated revenue assignments to pay it. The difference follows from whether the rulers shared the majority's religion: a Sunni dynasty with a large subject Christian population could recruit servants from outside the Muslim elite entirely, while a Muslim dynasty over a Hindu majority needed that majority's warriors inside the system rather than outside it.`
      },
      {
        category: 'Revenue',
        title: 'Sell the collection or measure the fields',
        body: `The Ottomans moved from timar land assignments to tax farming and, from 1695, lifetime farms, which delivered cash to the treasury immediately and required no collectors or supervision. Akbar's zabt system measured cultivated land, classified soils, assessed average yields and prices over years and fixed a predictable cash demand, at the cost of surveyors, records and the officials to maintain them. The difference follows from what each state needed most at the time: the Ottomans needed liquidity for continuous war on two frontiers, and the Mughals, consolidating an agrarian empire, needed a revenue base that intermediaries could not simply invent, and each paid the corresponding price, a provincial notable class in one case and an expensive administration in the other.`
      },
      {
        category: 'Religious difference',
        title: 'Adjust one hierarchy or speak several languages of legitimacy',
        body: `Mughal policy toward the Hindu majority moved with the ruler's needs, the jizya abolished in 1564 and reimposed in 1679, adjusting the terms of a single Islamic hierarchy. The Qing presented the emperor simultaneously as holder of the Mandate of Heaven to Chinese subjects, patron and protector of Tibetan Buddhism to Mongols and Tibetans, and head of the banners to the Manchus. The difference follows from the shape of the diversity each faced: the Mughals ruled one enormous majority within a framework that had a defined place for non-Muslims, while the Qing ruled several large distinct populations with no shared framework available, so plural legitimacy was the only workable arrangement and it proved the more durable.`
      },
      {
        category: 'Expansion and its limits',
        title: 'The steppe closed and the coast opened',
        body: `The Qing spent the eighteenth century destroying the Zunghar state and absorbing the territory that became Xinjiang, transforming a steppe frontier that had shaped Chinese security for two thousand years, because firearms and supply forts reversed the mobility advantage of cavalry. The Mughals, at their greatest extent under Aurangzeb, never made blue-water naval power a priority to match their land armies, and European trading companies held fortified posts on their coast. They were not ignored: Mughal forces took Portuguese Hooghly in 1632 and Aurangzeb's government fought the English East India Company in the 1680s. The difference follows from which frontier each state judged dangerous, and the significance is that each empire ranked first the threat it had always faced, while the one that mattered in the next century was the one it had ranked second.`
      }
    ]
  }
};
