'use strict';

/**
 * Topic 7.9, Causation in Global Conflict: the deep reading.
 *
 * Why this exists. This is the unit's capstone and the criteria are a skill
 * rather than a content list: name at least three major causes of global
 * conflict with evidence, compare the causal chains of the two wars, and write
 * a defensible claim that RANKS causes by significance using weighing language.
 * That is a writing problem, and a survey cannot teach a writing problem.
 *
 * The organizing argument: ranking is the skill, and ranking requires a
 * criterion. Most students rank by how much a cause is talked about. This
 * chapter supplies three tests, the counterfactual test, the timing test and
 * the scope test, that produce defensible rankings and, crucially, produce
 * DIFFERENT rankings depending on which question is being asked, which is why
 * the thesis must name its criterion.
 *
 * Three things carried deliberately:
 *
 *   1. The comparison between the two wars is the unit's payoff, and the
 *      cleanest finding is structural: 1914 is a war nobody quite chose, 1939
 *      is a war one state prepared for in public over six years.
 *   2. The chapter gives the weighing vocabulary explicitly, because the
 *      criteria name it and because a student who lacks the words writes a
 *      list and calls it an argument.
 *   3. It closes the unit's spine: industrial and bureaucratic capacity is the
 *      thread, and the strongest ranking argument available runs through it.
 */

module.exports = {
  topicKey: 't7-9',
  slug: 'topic-7-9-causation-global-conflict',
  lessonFile: 'lesson-7-9-causation-global-conflict.html',

  titleHtml: 'Ranking Causes Without <em>Guessing</em>',
  deck: `Every prompt in this unit ends up asking which cause mattered most, and most answers rank by how often a cause gets mentioned. This chapter gives you three tests that produce a defensible ranking, shows that they can disagree, and explains why that is a feature: a ranking is only meaningful once you have said what you are ranking for.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 collects the unit's causes into four categories with the evidence attached. Section 02 is the three tests, which is the method the whole chapter exists for. Section 03 runs the comparison between the two wars, and section 04 is the sentence-level writing, including the weighing language the criteria name.`,
    steps: [
      `<b>01 The causes, sorted:</b> technological, political, economic and social, with evidence from across Unit 7.`,
      `<b>02 Three tests for significance:</b> counterfactual, timing and scope, and why they disagree.`,
      `<b>03 The two wars compared:</b> what the chains share and what is distinct about each.`,
      `<b>04 Writing the claim:</b> the weighing vocabulary, and a worked thesis.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'causes',
      num: '01',
      accent: 'gold',
      name: 'The Causes, Sorted and Evidenced',
      navLabel: 'The causes',
      dates: '1900 to 1945 &nbsp;·&nbsp; Four categories',
      thesis: `The criteria ask for at least three major causes across technological, political, economic and social categories, each connected to specific evidence from the unit. Here are all four, and the discipline to apply is that a category is not a cause until a named event is attached to it.`,
      parts: [
        {
          heading: 'Technological and economic',
          blocks: [
            { p: `<b>Technological.</b> Industrial production converted into military capacity, which is this unit's spine. Evidence: the Anglo-German naval race and the Dreadnought of <span class="num">1906</span> from Topic 7.2; the machine gun, quick-firing artillery and rail mobilization that produced the deadlock of Topic 7.3; the tanks, aircraft and radio that broke it in Topic 7.7; and the production gap that decided the second war. The mechanism is the one Topic 7.3 states: a factory system replaces losses faster than battles inflict them, so wars stop ending when an army is beaten.` },
            { p: `<b>Economic.</b> Two distinct strands, and they should not be merged. The first is competition for resources and markets, evidenced by the Scramble for Africa and the Berlin Conference of <span class="num">1884</span> to <span class="num">1885</span>, and later by the resource logic of Japanese expansion into Manchuria in <span class="num">1931</span> and of German and Italian autarky in Topic 7.4. The second is economic crisis, evidenced by the Depression's transmission through bank failure, the gold standard, tariffs and commodity collapse, and by its political effect in discrediting parliamentary governments.` }
          ]
        },
        {
          heading: 'Political and social',
          blocks: [
            { p: `<b>Political.</b> Also two strands. Alliance and commitment structures, evidenced by the blank cheque, the ultimatum and the mobilization timetables of July <span class="num">1914</span>, and by the Nazi-Soviet Pact of August <span class="num">1939</span>. And the failure of collective institutions, evidenced by the League's response to Manchuria in <span class="num">1931</span> to <span class="num">1933</span> and to Ethiopia in <span class="num">1935</span> to <span class="num">1936</span>, and by the mechanism behind those failures: no armed force, a unanimity rule, and absent great powers.` },
            { p: `<b>Social.</b> Nationalism and ideology, evidenced across the unit: Balkan nationalism dismembering the Ottoman empire in Topic 7.1, the nationalism mobilized by propaganda ministries in Topics 7.3 and 7.7, the racial ideology of Topic 7.8, and the anticolonial nationalism that Paris refused in Topic 7.5 and Unit 8 collects.` },
            { p: `One test before you use any of these. If you cannot name an event, a date or a document alongside the category, you have written a heading rather than a cause, and a grader can tell the difference immediately.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat the four categories as separate causes that can be ranked against each other as they stand. They interlock, and the interlocking is usually where the good answer is. The Depression is economic and its decisive effect was political, because it discredited democratic governments. The naval race is technological and its decisive effect was diplomatic, because it aligned Britain with France and Russia. Rail mobilization is technological and it operated as a political constraint by removing decision time. When you rank, rank specific <b>causal claims</b> such as "the Depression made extremist government more likely in Germany," not categories such as "economics," because a category cannot be true or false and therefore cannot be weighed.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Attaching evidence to a category before using it. <em>The mechanism is that a category such as nationalism or economics can be asserted of any period and therefore explains nothing on its own, so naming the event, date or document that instantiates it in this case converts a label into a claim that can be tested, weighed against others and, crucially, be wrong.</em>`,
        limit: `Evidence makes a claim assessable and does not make it significant, which is what section 02 is for. Plenty of well-evidenced causes turn out to matter little.`,
        comparison: `Against the <em>Topic 4.8</em> method chapter: there the task was to separate continuity from change by naming the level of the claim. Here it is to rank causes by naming a criterion. Both work by making explicit the thing most answers leave implicit, which is the standard being applied.`
      },
      terms: [
        ['Causal claim', 'A specific statement that one thing contributed to another, which can be tested and weighed, as distinct from a category, which cannot.'],
        ['Category error', 'Ranking "economics" against "politics" rather than ranking the specific claims each contains, the most common failure in this topic.'],
        ['Interlocking causes', 'Causes whose effects run through each other, such as an economic slump whose decisive consequence is political.'],
        ['Evidence anchor', 'The named event, date or document that turns a category into a usable claim.'],
        ['Necessary condition', 'Something without which the outcome could not have occurred, which is a different question from whether it was decisive.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'tests',
      num: '02',
      accent: 'rust',
      name: 'Three Tests for Significance',
      navLabel: 'The tests',
      dates: 'A method &nbsp;·&nbsp; For any causation prompt',
      thesis: `Ranking requires a criterion, and here are three. Learn all three, because they are quick to apply and because they sometimes produce different rankings, which is the most useful thing this chapter has to say.`,
      parts: [
        {
          heading: 'The counterfactual test',
          blocks: [
            { p: `<b>Ask: remove this cause and hold everything else constant. Does the outcome still happen?</b> If it clearly does, the cause is not decisive. If it clearly does not, you have a strong candidate for a necessary condition.` },
            { p: `Worked example. Remove the Sarajevo assassination. Does a European war still happen? Most historians would say something very like it probably does, because the underlying alignments, plans and rivalries were unchanged and the Balkans supplied crises regularly. That is why the assassination is a trigger rather than a major cause, and the counterfactual is how you demonstrate it rather than assert it.` },
            { p: `Second example. Remove the Great Depression and leave Versailles in place. Does Hitler come to power? Topic 7.6 gives you the evidence to answer: in <span class="num">1928</span>, with the treaty fully in force and the grievance fully developed, the Nazi Party was marginal. So the Depression looks necessary in a way the treaty alone does not.` },
            { p: `Use it carefully. Counterfactuals get less reliable the further you run them, because everything else does not in fact hold constant, so keep the removal small and the timeframe short and say that you are doing so.` }
          ]
        },
        {
          heading: 'The timing test and the scope test',
          blocks: [
            { p: `<b>The timing test: does this cause explain why the event happened WHEN it did?</b> A condition present for thirty years cannot explain a date. Imperial rivalry was in place from the <span class="num">1880</span>s and cannot explain August <span class="num">1914</span>; the mobilization timetables and the blank cheque can. This test is what separates underlying causes from immediate ones, and applying it stops the standard error of treating a long-run condition as the answer to a short-run question.` },
            { p: `<b>The scope test: does this cause explain the SIZE of the outcome?</b> A cause can explain why a war began and not why it consumed the world. Balkan nationalism explains a war between Austria-Hungary and Serbia. It does not explain why Britain fought, and the Schlieffen Plan and Belgian neutrality do. Industrial capacity does not explain why the war started and it explains why it lasted four years and killed on that scale.` },
            { p: `Now the part worth remembering. <b>The three tests can rank the same causes differently, and that is correct rather than a problem.</b> For "why did war break out in <span class="num">1914</span>," timing dominates and the July decisions rank first. For "why was the war so destructive," scope dominates and industrial capacity ranks first. For "was war avoidable," counterfactual dominates and the alliance structure and plans rank first.` },
            { p: `So the ranking depends on the question, which means <b>a thesis must name its criterion</b>. "The most significant cause of the outbreak was X" and "the most significant cause of the war's scale was Y" are both defensible and are answers to different prompts. Read the prompt for which one it wants, and if it is ambiguous, say which you are answering. That single move is worth more marks than any additional fact in this unit.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: historians argue by counterfactual whether they admit it or not',
              html: `Counterfactual reasoning has a slightly disreputable reputation, as though it were speculation rather than history. In fact any claim that something was a cause contains one: to say the Depression contributed to the Nazi rise is to say that without it the rise would have been less likely, and there is no way to mean anything by "cause" that does not carry that implication. The methodological argument among historians is therefore not about whether to reason counterfactually but about how disciplined to be: how small the alteration, how short the chain, how carefully everything else is held. The rule that keeps it honest is to change one thing, keep the timeframe short, and prefer alternatives that were actually available to the people involved rather than ones we can imagine now.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Naming the criterion before ranking. <em>The mechanism is that significance is not a property a cause has on its own but a relation to a question, so the counterfactual, timing and scope tests measure different things and can order the same causes differently, which means a ranking is only defensible once the thesis states which question it answers.</em>`,
        limit: `The tests discipline a judgment rather than replacing it. Two historians applying the same test to the same evidence can still disagree, which is why the historiography of Topic 7.2 remains open.`,
        comparison: `Against the <em>continuity and change</em> method in Topic 4.8: both chapters solve an apparent contradiction the same way, by specifying the level or the criterion. "Did the period transform the world economy" resolves once you separate connections from centers, and "which cause mattered most" resolves once you separate outbreak from scale.`
      },
      terms: [
        ['Counterfactual test', 'Removing a cause and asking whether the outcome still follows, the test for whether something was necessary.'],
        ['Timing test', 'Asking whether a cause explains when the event happened, which separates underlying causes from immediate ones.'],
        ['Scope test', 'Asking whether a cause explains the size of the outcome, which is a different question from why it began.'],
        ['Proximate and distal', 'Causes near to the event in time and causes far from it, which the timing test distinguishes.'],
        ['Criterion of significance', 'The standard by which causes are ranked, which changes the ranking and which a thesis must state.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'comparison',
      num: '03',
      accent: 'iron',
      name: 'The Two Wars Compared',
      navLabel: 'The comparison',
      dates: '1914 and 1939 &nbsp;·&nbsp; Shared and distinct',
      thesis: `The criteria ask what the two causal chains shared and what was distinct about each. The sharpest finding is structural rather than factual, and it is that these two wars are different KINDS of event, which is why the same explanatory framework fits them so unevenly.`,
      parts: [
        {
          heading: 'What they shared',
          blocks: [
            { p: `<b>Industrial capacity convertible into military power</b>, which made both wars long and enormously destructive once they began, and which is the unit's spine.` },
            { p: `<b>Great-power competition for resources, markets and prestige</b>, running through the Scramble for Africa before the first war and through Japanese, Italian and German expansion before the second.` },
            { p: `<b>Nationalism as a mobilizing force</b>, in both cases used deliberately by governments to sustain populations through costs they would not otherwise have borne.` },
            { p: `<b>A failure of the mechanisms meant to contain crises</b>, though the failures differ: in <span class="num">1914</span> great-power diplomacy that had worked four times ran out of time, and in the <span class="num">1930</span>s an institution built to replace that diplomacy had no means of enforcement.` },
            { p: `<b>And each war caused a substantial part of the next.</b> The settlement of the first supplied the grievance for the second, the collapse of four empires created the disputed borders and stateless minorities of the interwar years, and the war debt structure produced the fragility the Depression exploited.` }
          ]
        },
        {
          heading: 'What was distinct, and it is the important half',
          blocks: [
            { p: `<b>Intention.</b> This is the cleanest difference in the unit. <span class="num">1914</span> is a crisis that escalated: every capital made choices that raised the risk, several expected a short war, and historians still argue about the distribution of responsibility, which is exactly what you would expect of an event nobody fully controlled. <span class="num">1939</span> in Europe is a war one state prepared for over six years, in public, having published its intentions, and the historiographical argument is not about who wanted a war but about why the others did not stop it earlier.` },
            { p: `<b>Speed.</b> Five weeks from Sarajevo to the invasion of Belgium, under a mobilization clock. Three and a half years from the Rhineland to Poland, and six from Hitler&rsquo;s appointment, with each step visible and answerable. That difference is why "could it have been prevented" is a hard question for the first war and a much easier one for the second.` },
            { p: `<b>Ideology.</b> The first war was fought between states with broadly comparable political systems over position, security and territory. The second was fought against regimes with an explicit ideological program that included territorial conquest for living space and the destruction of populations, which is why the second war produced Topic 7.8 at the scale it did and the first did not, though the Armenian case shows the capacity was already present.` },
            { p: `<b>Global scope from the start.</b> The first war was European-centered with global participation through empires and a Middle Eastern and African theater. The second had two origins, an Asian war from <span class="num">1931</span> and <span class="num">1937</span> and a European war from <span class="num">1939</span>, which merged in <span class="num">1941</span>. Getting that right changes how you date the war and is a detail that reliably distinguishes a strong answer.` },
            { p: `<b>What the loser's experience taught.</b> One difference with enormous consequences: the first war ended in an armistice with German armies still abroad, which made the stab-in-the-back myth possible, and the second ended in total defeat, occupation and the dismantling of the regime, which made an equivalent myth much harder to sustain. The settlements after <span class="num">1945</span>, reconstruction aid, integration of the defeated states into alliances, and permanent occupation forces, look the way they do partly because the makers had read Topic 7.6.` }
          ]
        }
      ],
      useThis: {
        tool: `Distinguishing escalation from intention. <em>The mechanism is that some wars are produced by commitments, plans and timetables interacting faster than decision-makers can control, and others by a state deciding on war and preparing for it, and the two require different explanations, so a framework that fits one will misdescribe the other and the ranking of causes changes accordingly.</em>`,
        limit: `The distinction is a spectrum rather than a binary. Austria-Hungary did intend a war with Serbia in <span class="num">1914</span>, and Britain and France did make choices in the <span class="num">1930</span>s, so state which actor you mean.`,
        comparison: `Against <em>Unit 8</em>: the Cold War is the case where the mechanisms of both wars were present, hostile blocs, an arms race, ideology and proxy conflicts, and a general war did not occur. That is the ultimate control case for this unit's causes, and asking why it did not happen is the best possible bridge into the next unit.`
      },
      terms: [
        ['Escalation war', 'A conflict produced by interacting commitments and plans outrunning control, the standard reading of 1914.'],
        ['War of intention', 'A conflict one state decides on and prepares for over years, the standard reading of Germany in 1939.'],
        ['Twenty-year truce', 'The description of 1919 to 1939 as an interval rather than a peace, defensible as an argument and not as an assumption.'],
        ['Merged origins', 'The fact that the Second World War began in Asia in 1931 and 1937 and in Europe in 1939 and combined in 1941.'],
        ['Total defeat', 'The 1945 outcome of occupation and regime dismantling, which foreclosed the betrayal myth that 1918 had made available.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'writing',
      num: '04',
      accent: 'oxide',
      name: 'Writing the Claim',
      navLabel: 'The writing',
      dates: 'The skill &nbsp;·&nbsp; Sentence level',
      thesis: `The criteria ask for a defensible claim that ranks causes using weighing language and evidence from at least three topics. This section is that sentence, built in front of you, because the difference between a strong and an average answer in this unit is almost entirely at the level of the sentence.`,
      parts: [
        {
          heading: 'The vocabulary the criteria name',
          blocks: [
            { p: `Weighing language does the work a list cannot, and these are the phrases to have ready. <b>"The most significant cause was X, because..."</b> commits and then justifies. <b>"X was the underlying cause and Y the immediate trigger"</b> sorts by the timing test. <b>"X was a necessary condition, though not a sufficient one"</b> is the single most useful construction in this unit and is exactly the Versailles finding. <b>"X mattered more than Y because..."</b> is a direct comparison and must be followed by the criterion. <b>"While X is usually emphasized, Y better explains..."</b> signals that you know the standard answer and are departing from it deliberately.` },
            { p: `And the phrases to avoid, because each one abandons the task. "There were many causes" concedes the question. "It was a combination of factors" is true of everything and therefore says nothing. "Equally important" is almost never defensible and usually means the ranking has not been done.` }
          ]
        },
        {
          heading: 'A worked thesis',
          blocks: [
            { p: `Take the prompt: <em>Evaluate the relative significance of the causes of the Second World War in Europe.</em>` },
            { p: `<b>Weak.</b> "There were many causes of World War II, including the Treaty of Versailles, the Great Depression, appeasement, and Hitler's aggression." That is a list, it ranks nothing, and it could have been written before reading the unit.` },
            { p: `<b>Strong.</b> "The Treaty of Versailles was a necessary condition for the Second World War in Europe but not a sufficient one, since the Nazi Party remained marginal in <span class="num">1928</span> when the treaty was fully in force; the Great Depression was the decisive cause, because it supplied the mass constituency and the elite panic without which a party polling in single figures could not have been handed power in <span class="num">1933</span>; and appeasement is better understood as a cause of the war's timing and shape than of its occurrence, since it determined that the war began in <span class="num">1939</span> over Poland rather than in <span class="num">1936</span> over the Rhineland."` },
            { p: `Look at what that sentence does. It ranks three causes. It uses necessary and sufficient correctly. It supplies evidence from Topics 7.6 and 7.4. It applies the timing test explicitly to appeasement. It names a criterion for each judgment. And it is arguable, which is the point: a grader can disagree with it, and that is what makes it a thesis rather than a summary.` },
            { p: `Now note what a different question does to it. Asked instead why the war was so destructive, the ranking inverts entirely and industrial capacity from Topics 7.3 and 7.7 goes first, with the political causes explaining only why the fighting started. Same unit, same evidence, different criterion, different answer, and both defensible.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not hedge a ranking in order to seem balanced. "All of these causes were important in their own way" reads as fairness and functions as a refusal to answer, and it scores as one. The exam is asking you to make a judgment and defend it, which means the strong move is to commit, give the criterion, and then acknowledge the best counterargument specifically: "the strongest objection to ranking the Depression first is that it does not explain why Germany rather than the equally affected United States turned to dictatorship, which is why the Versailles grievance and the weakness of Weimar's institutions have to remain in the account." That is balance with a spine, and it is what the highest marks are for.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Commit, criterion, counterargument. <em>The mechanism is that a ranking asserted without a standard cannot be assessed and a ranking hedged into balance has not been made, so the structure that scores is to state the ranking, name the test that produced it, and then meet the strongest objection specifically, which demonstrates that the judgment survived contact with the alternative rather than avoiding it.</em>`,
        limit: `Structure does not substitute for knowing things. Every step needs an evidence anchor from a named topic, and a well-shaped sentence with nothing in it is transparent.`,
        comparison: `Against <em>Topic 4.8's</em> worked line, "connections transformed and centers unchanged": the same move at the same point in a different unit. Both compress an entire unit into one arguable sentence, and both do it by naming the distinction that makes the apparent contradiction disappear.`
      },
      terms: [
        ['Weighing language', 'The vocabulary of relative significance, most significant, underlying, immediate, necessary, more than, which ranking requires.'],
        ['Defensible claim', 'A judgment a reader could disagree with, supported by criterion and evidence, as distinct from a summary nobody would contest.'],
        ['Necessary but not sufficient', 'The construction that fits Versailles exactly and is the most useful phrase in this unit.'],
        ['Counterargument', 'The strongest specific objection to your ranking, named and answered, which is what separates the top band from the one below.'],
        ['False balance', 'Declining to rank in order to appear fair, which reads as judgment avoided and scores accordingly.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The last one closes the unit, and it is the sentence to walk into an exam with.`,
    pairs: [
      {
        category: 'Method',
        title: 'Three tests, and they are supposed to disagree',
        body: `The counterfactual test removes a cause and asks whether the outcome still follows: remove Sarajevo and something like a European war probably still happens, which is why the assassination is a trigger; remove the Depression and leave Versailles, and the 1928 election says the Nazis stay marginal, which is why the Depression looks necessary. The timing test asks whether a cause explains when: imperial rivalry from the 1880s cannot explain August 1914, and the blank cheque and mobilization timetables can. The scope test asks whether it explains the size: Balkan nationalism explains a war with Serbia, and industrial capacity explains four years and the casualty figures. Different tests rank the same causes differently, so a thesis must name its criterion.`
      },
      {
        category: 'Comparison',
        title: 'One war escalated and the other was prepared for in public',
        body: `They shared industrial capacity convertible into military power, great-power competition for resources and prestige, nationalism used deliberately to sustain populations, and a failure of crisis-containment machinery. What is distinct matters more. 1914 took five weeks from an assassination to the invasion of Belgium under a mobilization clock, with several capitals expecting a short war and historians still arguing about responsibility, which is what an event nobody fully controlled looks like. 1939 in Europe followed six years of visible preparation by a state that had published its intentions, so the open question is not who wanted war but why the others did not act earlier. Add that the Asian war began in 1931 and 1937 and merged with the European one in 1941.`
      },
      {
        category: 'Sentence craft',
        title: 'Necessary but not sufficient is the phrase this unit was built for',
        body: `Versailles was a necessary condition for the war in Europe and not a sufficient one, and the evidence is the control case: in the May 1928 Reichstag election, with the treaty fully in force and the grievance developed and rehearsed since 1920, the Nazi Party won a very small share of the vote. The Depression supplied what was missing, a mass constituency and the elite panic that produced the January 1933 appointment. Appeasement then belongs to timing rather than occurrence, determining that the war came in 1939 over Poland rather than in 1936 over the Rhineland. That is three causes ranked, with a criterion for each and evidence from Topics 7.4 and 7.6, and it is arguable, which is what makes it a thesis.`
      },
      {
        category: 'The unit',
        title: 'Capacity is the thread, and it runs from the mine to the camp',
        body: `Industrial and bureaucratic capacity connects every topic in Unit 7. It broke three empires that could not fund industrial armies from agrarian revenue in 7.1. It made war unendable by battle, so whole societies were mobilized and became targets, in 7.3. It let states run economies, which they kept doing after 1918 and had to in the 1930s, in 7.4. It decided the second war through production rather than generalship in 7.7, and it revealed that regimes claiming total control mobilized less fully than democracies that could ask consent. And in 7.8 the same censuses, railways and chains of command were turned inward on populations already within reach. Naming capacity as the thread is the strongest ranking argument this unit offers.`
      }
    ]
  }
};
