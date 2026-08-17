'use strict';

/**
 * Topic 8.5, Decolonization After 1900: the deep reading.
 *
 * Why this exists. The success criteria ask for the strategies of at least two
 * of four named leaders or parties, for a comparison of a negotiated case with
 * an armed one that names a factor accounting for the difference, and for two of
 * three movements that challenged inherited boundaries. The middle criterion is
 * the hard one and it is the reason this chapter exists: "name a factor" invites
 * a student to write that some colonizers were nicer, and the factor that
 * actually does the work is settler population plus what the metropole thought
 * it would lose.
 *
 * The organizing argument, following the Topic 8.1 chapter: decolonization and
 * the Cold War are one system. Section 03 is where that is demonstrated rather
 * than asserted, because after 1945 a European power needed American tolerance
 * to fight a colonial war, and American tolerance depended on whether the
 * nationalists could be described as communists.
 *
 * Three things carried deliberately:
 *
 *   1. A nationalist movement as machinery. Membership, provincial structure,
 *      a treasury, a newspaper and a repertoire of campaigns that can be
 *      switched on. Grievance is universal and organization is not, which is why
 *      organization is the thing to explain.
 *   2. The settler variable, stated as a mechanism rather than a correlation.
 *      Settlers are voters in the metropole with property to lose, which changes
 *      the domestic politics of withdrawal, and they are an armed constituency
 *      on the ground.
 *   3. Suez 1956 and American funding of the French war in Indochina, as the two
 *      cleanest pieces of evidence that decolonization ran through Washington.
 */

module.exports = {
  topicKey: 't8-5',
  slug: 'topic-8-5-decolonization',
  lessonFile: 'lesson-8-5-decolonization.html',

  titleHtml: 'Two Roads Out of <em>Empire</em>',
  deck: `Some colonies negotiated their independence in conference rooms and some fought for eight years. The difference is not that some empires were more reasonable, and a student who writes that has answered the wrong question. This chapter builds the machinery of a nationalist movement, sets out the four conditions that decided which road a colony took, and then shows how the Cold War changed the price of both.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 02 is the one the success criteria are built around, and section 01 exists to make it answerable, because you cannot explain why a colonial power negotiated without first explaining who it was negotiating with. Section 04 is the historians' argument, and it is where the highest-scoring answers get their complexity.`,
    steps: [
      `<b>01 The machinery:</b> what a nationalist movement is made of, in four cases the exam names.`,
      `<b>02 Two roads:</b> the four conditions that decided negotiation or war, with the settler variable first.`,
      `<b>03 The Cold War inside it:</b> why after 1945 a colonial war had to be affordable in Washington.`,
      `<b>04 What caused decolonization:</b> the historians&rsquo; dispute, and how to use it.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'machinery',
      num: '01',
      accent: 'gold',
      name: 'What a Nationalist Movement Is Made Of',
      navLabel: 'The machinery',
      dates: '1885 to 1957 &nbsp;·&nbsp; Congress founded to Ghanaian independence',
      thesis: `Colonial grievance was universal and organized nationalism was not. What converts a grievance into leverage is an organization capable of imposing a cost on the colonial state at a time of its own choosing, and doing it again next month.`,
      parts: [
        {
          heading: 'The Indian National Congress, and mass organization',
          blocks: [
            { p: `The Congress founded in <span class="num">1885</span> was a small annual gathering of lawyers, journalists and officials petitioning for greater Indian participation in government. What Gandhi did after returning from South Africa in <span class="num">1915</span>, and especially in the reorganization of <span class="num">1920</span>, was convert it into a mass party: a nominal membership fee anyone could pay, provincial committees drawn on linguistic rather than administrative lines, a working committee that could take decisions between sessions, and a program that gave village members something to do.` },
            { p: `That structure is what made the campaigns possible. Non-cooperation from <span class="num">1920</span> asked Indians to withdraw from British institutions: to return titles, boycott courts and schools, and refuse foreign cloth. The Salt March of <span class="num">1930</span> selected one law, the government monopoly on salt production, walked to the sea over about three weeks, and broke it in public. Quit India in <span class="num">1942</span> demanded immediate withdrawal in the middle of a war and led to the arrest of the entire leadership. The Topic 8.7 chapter analyzes why nonviolence was chosen and what makes it work; the point here is that each campaign was an organizational achievement before it was a moral one.` },
            { p: `The colonial response, over the same decades, was a series of constitutional concessions intended to be final and never accepted as such: expanded councils, then provincial autonomy under the Government of India Act of <span class="num">1935</span>, under which Congress won most provinces in the elections of <span class="num">1937</span> and governed them. That is a mechanism worth naming, since it recurs across the empire. Each concession gave nationalists real administrative experience, real patronage and proof that they could govern, which strengthened the demand the concession had been meant to satisfy.` }
          ]
        },
        {
          heading: 'Three other models',
          blocks: [
            { p: `<b>Ho Chi Minh and the Viet Minh.</b> Founded in <span class="num">1941</span> as a front organization combining nationalists and communists, the Viet Minh built armed base areas during the Japanese occupation and declared Vietnamese independence in Hanoi on 2 September <span class="num">1945</span>, in a statement that opened by quoting the American Declaration of Independence. France did not accept it, and war followed from <span class="num">1946</span>. The model here is the armed political front: a movement that governs territory, collects taxes, runs schools and fights, all at once.` },
            { p: `<b>Kwame Nkrumah and the Convention People's Party.</b> Nkrumah returned to the Gold Coast in <span class="num">1947</span> after a decade of study in the United States and Britain and the Manchester Pan-African Congress of <span class="num">1945</span>. He broke from the existing lawyer-led organization and founded the CPP in <span class="num">1949</span> on the slogan of self-government now, building support among younger, less wealthy urban constituencies. In <span class="num">1950</span> he called Positive Action, a campaign of strikes and boycotts explicitly modeled on Gandhi's methods, and was imprisoned. The CPP won the <span class="num">1951</span> election while he was in prison, the governor released him and invited him to lead the government, and the Gold Coast became independent as Ghana on 6 March <span class="num">1957</span>, the first sub-Saharan African colony to do so. That sequence, prison to prime minister in a year, is the clearest single illustration that a colonial administration will negotiate with whoever can actually deliver a population.` },
            { p: `<b>Gamal Abdel Nasser.</b> Egypt had been nominally independent since <span class="num">1922</span> while British troops remained, especially along the Suez Canal. The Free Officers, a conspiracy inside the army, overthrew the monarchy in <span class="num">1952</span>, and Nasser emerged as leader. His model is neither mass party nor guerrilla front but the military coup followed by populist consolidation, and his instrument of confrontation was ownership: the nationalization of the Suez Canal Company in <span class="num">1956</span>, discussed in section 03.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: colonial police files are the richest and most slanted source',
              html: `Independence movements are unusually well documented because colonial states surveilled them. Special branch reports, intercepted correspondence, informer statements, trial transcripts and detailed accounts of meetings survive in metropolitan archives, and they record membership numbers, internal disputes and organizational detail that the movements themselves often did not write down. The slant is obvious and manageable: these files were compiled to justify repression, they overstate conspiracy and foreign direction, and they are far better on structure than on belief. Two further cautions matter. Some colonial governments destroyed or removed sensitive files at independence, so the archive is incomplete in a non-random way. And reading the movement only through the state's eyes reproduces the state's assumption that nationalism was something done to it, which is exactly the assumption section 04 asks you to test.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Organization as leverage. <em>The mechanism is that a mass party with paid membership, provincial structure and a repeatable campaign can impose a scheduled, renewable cost on the colonial state, which converts a moral claim into a bargaining position. Grievance alone does not, because a colonial administration can ignore anger it cannot be made to pay for.</em>`,
        limit: `Organization is necessary and not sufficient. The Viet Minh was superbly organized and still had to fight for nine years, because the other conditions in section 02 pointed the other way.`,
        comparison: `Against <em>Topic 5.10</em> and the nineteenth-century nationalisms: those movements largely sought to build a state where an empire or a patchwork had been, while these sought to remove a foreign administration from a territory whose borders the foreigner had drawn. That difference is why the boundary problem in Topic 8.6 follows decolonization and did not follow Italian or German unification in the same way.`
      },
      terms: [
        ['Mass party', 'A political organization with dues-paying membership, local branches and a permanent structure, capable of mobilizing a population repeatedly.'],
        ['Non-cooperation', 'The Congress strategy of withdrawing participation from colonial institutions: courts, schools, titles and imported cloth.'],
        ['Positive Action', 'Nkrumah’s 1950 campaign of strikes and boycotts in the Gold Coast, modeled on Gandhi’s methods, which led to his imprisonment and then to office.'],
        ['Viet Minh', 'The armed nationalist and communist front founded in 1941 that declared Vietnamese independence in September 1945.'],
        ['Free Officers', 'The conspiracy within the Egyptian army that overthrew the monarchy in 1952 and brought Nasser to power.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'tworoads',
      num: '02',
      accent: 'rust',
      name: 'Why Some Negotiated and Some Fought',
      navLabel: 'The two roads',
      dates: '1947 to 1975 &nbsp;·&nbsp; Indian independence to Angolan independence',
      thesis: `Four conditions decided the road a colony took, and the strongest of them is settler population, because settlers are voters in the metropole with property to lose and an armed constituency on the ground at the same time.`,
      parts: [
        {
          heading: 'The four conditions',
          blocks: [
            { p: `<b>1. Settlers.</b> Where a large European population had settled permanently, withdrawal meant dispossessing citizens of the metropole, who had votes, relatives and lawyers at home. Algeria is the extreme case: it was administered not as a colony but as departments of France, and roughly a million Europeans lived there. The war from <span class="num">1954</span> to <span class="num">1962</span> brought down the French Fourth Republic in <span class="num">1958</span>, and after independence almost the entire European population left within months. Contrast the Gold Coast, where the European population was a few thousand administrators and traders with no land to lose and nowhere to make a stand.` },
            { p: `<b>2. What the metropole thought it would lose.</b> A colony seen as a strategic necessity or a fiscal asset is defended longer. Portugal, ruled by an authoritarian government whose legitimacy rested substantially on its empire and whose economy was the poorest in Western Europe, fought in Angola, Mozambique and Guinea-Bissau from the early <span class="num">1960</span>s until the army overthrew the government at home in <span class="num">1974</span>, which is the only case in this section where a colonial war ended by revolution in the imperial capital.` },
            { p: `<b>3. Who could be handed power.</b> A colonial government negotiates when there is a leadership it can transfer authority to that is preferable to the alternative, and when refusing to negotiate would strengthen a worse alternative. This is the condition that explains the release of Nkrumah in <span class="num">1951</span>, and, in reverse, the French refusal to deal with the Viet Minh, which was communist and therefore, by <span class="num">1950</span>, unacceptable to Washington as well as to Paris.` },
            { p: `<b>4. Metropolitan politics.</b> A war has to be sustainable at home. Conscription in particular changes the arithmetic, because it distributes the cost of a colonial war across families with no stake in the colony. France's use of conscripts in Algeria is a large part of why the war became politically unbearable there and why the Indochina war, fought by professionals and colonial troops, had lasted longer with less domestic crisis.` }
          ]
        },
        {
          heading: 'Reading two cases against each other',
          blocks: [
            { p: `India and Algeria make the comparison cleanly. India had an organized mass party, a nationalist leadership the British had already worked with in provincial government, no significant settler population, an imperial power that was financially exhausted in the way the Topic 8.1 chapter describes, and an army whose Indian troops could no longer be relied on for internal repression after the mutinies of <span class="num">1946</span>. Independence came in August <span class="num">1947</span> by negotiation, and by an act of the British Parliament.` },
            { p: `Algeria had an organized movement in the FLN from <span class="num">1954</span>, and every other condition pointed the other way. France was not exhausted in <span class="num">1954</span> in the way Britain had been in <span class="num">1947</span>, the settler population was enormous and politically mobilized, Algeria was legally part of France, and no leadership existed that Paris was willing to hand power to. The war ran eight years, involved systematic torture by French forces, was documented and argued about in France at the time, and ended in the Evian Accords of March <span class="num">1962</span> and independence that July. Death toll estimates are sharply contested, with French figures generally in the range of several hundred thousand and the Algerian state's official figure of one and a half million standing well above most academic estimates. Cite the dispute rather than a number.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Britain decolonized peacefully and France did not. Britain fought a twelve-year campaign in Malaya from <span class="num">1948</span> and suppressed the Mau Mau rebellion in Kenya from <span class="num">1952</span> with mass detention, and Kenya, notably, is the British colony with the largest settler population, which is the variable this section is about. France, meanwhile, negotiated the independence of most of its West African territories in <span class="num">1960</span> with no war at all. The pattern is not national character, it is the four conditions, and Kenya against the Gold Coast inside the same empire is the strongest way to show it, because the imperial power is held constant and the settler variable is not.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The settler variable. <em>The mechanism is double: a settled European population is a bloc of metropolitan citizens with property, votes and relatives at home, which makes withdrawal domestically costly, and it is also an armed constituency in the colony able to resist a settlement its own government has agreed to. Both effects push a colonial power toward fighting rather than negotiating.</em>`,
        limit: `It is one condition of four, and it does not decide cases on its own. Portugal fought in Angola with a settler population far smaller than Algeria's because of what its own regime thought it would lose by conceding, and India was conceded partly because a war there would have had to be fought with troops Britain could no longer rely on.`,
        comparison: `Against <em>Kenya and the Gold Coast</em>, the same empire in the same decade: one had a settler community holding the best farmland and got a decade of emergency, detention and armed suppression, and the other had almost none and got a negotiated handover in ten years. Holding the imperial power constant is what makes this comparison persuasive.`
      },
      terms: [
        ['Settler colony', 'A colony with a substantial permanent European population holding land, whose presence made withdrawal politically and militarily harder.'],
        ['FLN', 'The National Liberation Front that began the Algerian war in 1954 and negotiated the Evian Accords in 1962.'],
        ['Evian Accords', 'The March 1962 agreement ending the Algerian war, followed by independence in July and by the departure of almost the entire European population.'],
        ['Mau Mau', 'The Kenyan rebellion from 1952, suppressed by mass detention and emergency powers in the British colony with the largest settler population.'],
        ['Negotiated independence', 'Transfer of sovereignty by agreement and legislation, chosen where a colonial power judged a handover cheaper and safer than a war.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'coldwar',
      num: '03',
      accent: 'iron',
      name: 'The Cold War Inside the Independence Struggle',
      navLabel: 'The Cold War inside it',
      dates: '1950 to 1962 &nbsp;·&nbsp; American funding of the French war to Algerian independence',
      thesis: `After <span class="num">1945</span> a European power could not fight a colonial war without American tolerance, and American tolerance depended on whether the nationalists could plausibly be described as communists. That single condition changed the price of independence in opposite directions in Indochina and at Suez.`,
      parts: [
        {
          heading: 'Indochina: how a colonial war was reclassified',
          blocks: [
            { p: `France returned to Indochina in <span class="num">1945</span> to a country where the Viet Minh had already declared independence, and war began in <span class="num">1946</span>. For the first years Washington was unenthusiastic: American opinion had been broadly anti-colonial, and this was plainly a war to restore a European empire.` },
            { p: `Two events in <span class="num">1949</span> and <span class="num">1950</span> changed that. The Chinese Communist Party won its civil war, and both China and the Soviet Union recognized Ho Chi Minh's government in <span class="num">1950</span>. From that point the French could argue, and did, that they were not defending an empire but holding a line against the expansion described in the Topic 8.2 chapter. American funding followed and grew steadily; by the final years of the war the United States was covering a very large share of French costs, commonly estimated at around three quarters or more by <span class="num">1954</span>. The French position collapsed at Dien Bien Phu that year, and the Geneva conference divided Vietnam at the 17th parallel pending elections that were never held.` },
            { p: `The mechanism is worth stating flatly because it recurs. Once a nationalist movement was aligned with the communist powers, or could be presented as such, the colonial power gained a subsidy and the nationalists gained an arms supplier, and both sides could sustain a war neither could have paid for alone. That is the resource-ceiling mechanism from the Topic 8.3 chapter arriving inside a decolonization struggle, which is exactly the argument this volume runs on.` }
          ]
        },
        {
          heading: 'Suez: the same condition running the other way',
          blocks: [
            { p: `In July <span class="num">1956</span>, after the United States and Britain withdrew financing for the Aswan High Dam, Nasser nationalized the Suez Canal Company, an enterprise in which the British government held a large shareholding and which was the route for a major share of Western Europe's oil imports. Britain and France, in secret coordination with Israel, invaded that autumn.` },
            { p: `The operation was militarily successful and politically finished within days. The United States opposed it, declining to support the pound as sterling came under pressure and pushing for a ceasefire at the United Nations, where the Soviet Union also denounced the invasion, in the same weeks it was suppressing the Hungarian uprising. Britain and France withdrew. Nasser, defeated in the field, emerged as the most prestigious leader in the Arab world, and Suez is generally treated as the moment at which it became clear that the old imperial powers could not act independently of Washington.` },
            { p: `Hold the two cases together and the mechanism is visible from both sides. In Indochina an anti-communist framing bought a European power an American subsidy for a colonial war. At Suez, without that framing, a European power lost American backing and had to abandon an operation within a week. What decided the outcome in both was less the balance of forces in the colony than the calculation in Washington.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Suez collusion was denied for years, and then documented',
              html: `The coordination between Britain, France and Israel before the invasion was denied by the British government at the time. It was established later from French and Israeli accounts and from British documents released under the thirty-year rule, and it is now uncontroversial among historians. Two lessons. First, government denial is not evidence of absence, and the release schedule of official archives means that the historical account of a recent event is provisional in ways the account of a distant one usually is not. Second, be careful about the reverse error: an absence of documents is not evidence of a conspiracy either. What settles it here is a positive documentary record from three governments, not inference from silence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The American veto on colonial war. <em>The mechanism is that after 1945 European powers depended on American finance and American diplomatic cover, so a colonial war was sustainable only if Washington would fund or tolerate it, and the deciding question was whether the nationalists could be described as part of the communist advance. Indochina got the subsidy and Suez did not.</em>`,
        limit: `It is a condition on colonial wars rather than the cause of decolonization. The United States also accepted or funded European colonial wars where the strategic argument was strong enough, including French Algeria and Portuguese Africa, and it did not press its NATO allies consistently.`,
        comparison: `Against <em>Topic 8.2</em> on non-alignment: leaders like Nasser and Nehru had understood this mechanism precisely and built a strategy on it, since a movement or government that could not be classified as belonging to either bloc was harder to fund against and harder to suppress with the other bloc's approval.`
      },
      terms: [
        ['Dien Bien Phu', 'The 1954 French defeat that ended the first Indochina war and led to the Geneva conference.'],
        ['Geneva Accords', 'The 1954 settlement dividing Vietnam at the 17th parallel pending elections that were never held.'],
        ['Suez Crisis', 'The 1956 nationalization of the canal company and the Anglo-French-Israeli invasion, abandoned within days under American pressure.'],
        ['Aswan High Dam', 'The Egyptian development project whose withdrawn Western financing prompted the canal nationalization and brought in Soviet funding.'],
        ['Anti-communist framing', 'The presentation of a colonial war as a Cold War front, which determined whether the metropole could obtain American money and diplomatic cover.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'whatcaused',
      num: '04',
      accent: 'oxide',
      name: 'What Actually Caused Decolonization',
      navLabel: 'The historians&rsquo; argument',
      dates: '1945 to 1975 &nbsp;·&nbsp; The dispute, and how to use it',
      thesis: `Historians disagree about whether empires were pushed out or walked out, and the disagreement is real, evidenced on both sides, and useful. An answer that holds both and says which mattered more in a named case is stronger than one that picks a side.`,
      parts: [
        {
          heading: 'Three explanations, and what each is good at',
          blocks: [
            { p: `<b>Metropolitan exhaustion.</b> Empires ended because the imperial powers could no longer pay for them and no longer believed in them: war debt, the sterling balances, American pressure, and a domestic politics of reconstruction and welfare that competed for the same money. Its evidence is the budget papers of the Topic 8.1 chapter, and it explains the timing well, since the great wave follows the war within two decades.` },
            { p: `<b>Colonial nationalist pressure.</b> Empires ended because organized movements made them ungovernable at an acceptable cost: mass parties, strikes, boycotts, mutinies and insurgencies. Its evidence is the machinery in section 01 and the wars in section 02, and it explains variation well, since the colonies that pressed hardest generally went first, and it corrects an account that would otherwise make Africans and Asians spectators at their own independence.` },
            { p: `<b>The international system.</b> Empires ended because the terms of legitimacy changed: two superpowers formally opposed to European colonialism, a United Nations whose membership was increasingly ex-colonial, and the Atlantic Charter's language in general circulation. Its evidence is Suez, the pressure on the Netherlands over Indonesia, and the speed with which the remaining African colonies went once the first ones had.` },
            { p: `These are not exclusive, and the strongest version of the argument is a sequencing claim rather than a choice: nationalist pressure raised the cost, exhaustion lowered the tolerance for cost, and the international environment removed the diplomatic protection that would once have covered a reconquest. Where historians genuinely differ is on the weight, and on the direction of the arrow. Some accounts written from metropolitan archives read decolonization as a policy decision, essentially something the colonizer did; accounts written from the colonial side read it as something achieved against the colonizer. Both are supported by their own sources, which is a warning about how much an archive shapes an argument.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the empires granted independence. The verb does the whole argument, and it does it invisibly. Granting implies a decision taken freely by a power that could have chosen otherwise at no cost, which is not what the record shows in India after the naval mutinies of <span class="num">1946</span>, in the Gold Coast after Positive Action, or anywhere a war was being fought. Nor should you write that the empires were simply defeated, since most transfers of power happened without a war. Use verbs that name the actual process: conceded, negotiated, withdrew, was forced out. Which verb fits which case is the analysis, and choosing it is a claim you can defend with evidence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Combination reasoning about a wave. <em>The mechanism is a sequence rather than a single cause: organized nationalism raised the cost of holding a colony, fiscal exhaustion and postwar domestic priorities lowered the metropole's tolerance for that cost, and a changed international system removed the diplomatic cover that would previously have permitted reconquest. Any one alone leaves large parts of the record unexplained.</em>`,
        limit: `A wave-level explanation cannot decide an individual case. The right method is the one the Topic 5.3 chapter uses for industrialization: state the combination, then test it against a case that had one factor and not the others, such as Portugal, which was exhausted and fought anyway.`,
        comparison: `Against <em>Unit 4 and Unit 6</em> on why empires were built: those units explain acquisition through extraction and strategic competition, and this one explains abandonment through cost and resistance. An empire held for what it yields is given up when the yield stops covering the bill, which is the same calculation running in the other direction.`
      },
      terms: [
        ['Metropole', 'The imperial home country, whose finances, electorate and politics form one half of any explanation of decolonization.'],
        ['Metropolitan exhaustion', 'The argument that empires ended because the imperial powers could no longer afford or justify them after 1945.'],
        ['Anti-colonial nationalism', 'Organized movements in the colonies that raised the cost of continued rule, the explanation that keeps colonized people as actors.'],
        ['Wave of decolonization', 'The concentrated period from 1945 to about 1975 in which most European colonies became sovereign states.'],
        ['Transfer of power', 'The formal handover of sovereignty, a phrase from the colonial archive that quietly frames independence as something granted.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `The middle two cards are the comparison the success criteria ask for. Learn the structure, which is claim, evidence from both cases, and the reason the difference existed.`,
    pairs: [
      {
        category: 'Organization',
        title: 'Nkrumah went from prison to prime minister in a year, and that is a fact about leverage',
        body: `The Convention People's Party, founded in 1949 on the demand for self-government now, built support among younger and less wealthy urban Ghanaians whom the older lawyer-led organization had not reached. Positive Action in 1950, a campaign of strikes and boycotts modeled on Gandhi's methods, put Nkrumah in prison; the CPP won the 1951 election while he was in it; the governor released him and invited him to form a government; and the Gold Coast became independent as Ghana in March 1957. Read the sequence as mechanism rather than drama: a colonial administration negotiates with whoever can actually deliver a population, and the campaign that got him imprisoned is what demonstrated he could.`
      },
      {
        category: 'Comparison',
        title: 'Settlers explain the difference between India and Algeria better than anything else does',
        body: `India in 1947 had an organized mass party, a leadership the British had already worked with in provincial governments since 1937, no significant settler population, an exhausted imperial treasury, and Indian troops whose reliability for internal repression had been shaken by the mutinies of 1946. Independence came by negotiation and by act of Parliament. Algeria had an organized movement in the FLN from 1954 and every other condition reversed: legally part of France rather than a colony, roughly a million European residents with votes and property, a metropole not yet exhausted, and no leadership Paris was prepared to hand power to. The war ran eight years, brought down the Fourth Republic in 1958, and its death toll is genuinely contested, with the Algerian official figure of 1.5 million well above most academic estimates.`
      },
      {
        category: 'Comparison',
        title: 'Test the settler variable inside one empire: Kenya against the Gold Coast',
        body: `The strongest form of this comparison holds the imperial power constant. Britain in the 1950s conceded the Gold Coast by negotiation, where the European presence was a few thousand administrators and traders with no land at stake, and simultaneously fought an emergency in Kenya from 1952 involving mass detention and armed suppression, in the colony with its largest settler community holding the best farmland. Same government, same decade, same fiscal position, opposite methods. That is why the answer to "why did some negotiate and some fight" is not national character. And note the reverse test: Portugal had a smaller settler population than Algeria and fought anyway, because its own regime's legitimacy rested on the empire, so settlers are one condition of four rather than a law.`
      },
      {
        category: 'Causation',
        title: 'Decolonization ran through Washington, and Indochina and Suez show it from both sides',
        body: `After China and the Soviet Union recognized Ho Chi Minh's government in 1950, France could present its colonial war as a Cold War front, and American funding grew until it covered a very large share of French costs, commonly estimated at around three quarters or more by 1954. In 1956, with no such framing available, Britain and France invaded Egypt over the canal and abandoned the operation within days when the United States declined to support the pound and pressed for a ceasefire at the UN. Same decade, same kind of European claim, opposite outcomes, and what differed was the calculation in Washington. Use this whenever a question asks how the Cold War shaped decolonization, and pair it with the reverse effect: newly independent states then reshaped the UN General Assembly that Suez was argued in.`
      }
    ]
  }
};
