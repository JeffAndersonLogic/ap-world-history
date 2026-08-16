'use strict';

/**
 * Topic 8.9, the Unit 8 capstone: the deep reading.
 *
 * Why this exists. Like Topic 7.9, this is a skill rather than a content list.
 * The criteria ask a student to sort Cold War effects into four categories by
 * hemisphere using evidence from Topics 8.1 to 8.8, to bring evidence from at
 * least two regions with one per hemisphere, and to write an "evaluate the
 * extent" thesis carrying a defensible degree claim. That is a writing problem
 * and a comparison problem at once, and a survey cannot teach either.
 *
 * The organizing argument: a degree claim is a claim about coverage, measured
 * in a respect the writer has to name. Topic 7.9 taught that ranking requires a
 * criterion and supplied three tests for significance. This chapter is the
 * comparison equivalent and deliberately does not repeat those three: similarity
 * requires a respect, and the three tests here are the mechanism test, the
 * coverage test and the unit test.
 *
 * Four things carried deliberately:
 *
 *   1. The hemisphere trap, first, because it wrecks the essay before the
 *      evidence arrives. Eastern Hemisphere is not the Eastern Bloc. Western
 *      Europe, the Soviet Union, all of Africa and all of Asia sit on one side
 *      of this comparison, and the two units are therefore not comparable in
 *      size or in kind. That asymmetry is itself the largest single fact
 *      bearing on the extent question.
 *   2. Pairs that control something: Egypt against Cuba on the economic
 *      category, Poland against Guatemala on the political. Both pairs are
 *      built out of mechanisms the earlier chapters established rather than out
 *      of resemblances noticed on a map.
 *   3. The symmetry argument named as a live scholarly dispute, with both
 *      positions stated as their holders state them, because this is the point
 *      in Unit 8 where a chapter could most easily slide into editorializing.
 *   4. Decolonization as the counterargument, given its full weight rather than
 *      waved at, since the checkpoint names it and since a thesis that survives
 *      its strongest objection is the whole assignment.
 */

module.exports = {
  topicKey: 't8-9',
  slug: 'topic-8-9-causation-capstone',
  sourceFile: 'deep-reading-topic-8-9-causation-capstone.html',
  lessonFile: 'lesson-8-9-causation-capstone.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.9: The Word Extent Is Doing All the Work',
  eyebrow: 'Topic 8.9 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Word <em>Extent</em> Is Doing All the Work',
  deck: `The capstone prompt asks you to evaluate the extent to which Cold War effects were similar in the two hemispheres, and most answers treat that phrase as packaging around a list. It is the assignment. This chapter shows what a degree claim has to be measured against, gives three tests that make one defensible, works two comparisons that control something, and starts where the essay is most often lost, which is the word hemisphere.`,
  meta: ['Four sections', 'A method chapter, like Topic 7.9', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.9 &nbsp;·&nbsp; The Word Extent Is Doing All the Work &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 fixes a definition that costs students marks every year and then populates the four categories. Section 02 is the method, and it is the reason the chapter exists. Section 03 is the worked evidence the second criterion asks for, and section 04 is the sentence.`,
    steps: [
      `<b>01 The categories and the trap:</b> why Eastern Hemisphere is not the Eastern Bloc, and what that does to the comparison before you start.`,
      `<b>02 Three tests:</b> mechanism, coverage and unit, and what each one catches that the others miss.`,
      `<b>03 The matrix, worked:</b> Egypt against Cuba, Poland against Guatemala, and short evidence for the two remaining categories.`,
      `<b>04 Writing the extent claim:</b> the degree vocabulary, a worked thesis, and the counterargument it has to survive.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'categories',
      num: '01',
      accent: 'gold',
      name: 'Four Categories, Two Hemispheres, One Trap',
      navLabel: 'The categories and the trap',
      dates: 'A framework &nbsp;·&nbsp; KC-6.2.IV.C and Learning Objective K',
      thesis: `The prompt's two hemispheres are geographic, not political, and a student who reads Eastern Hemisphere as Eastern Bloc has misplaced most of the evidence before writing a word. Get the definition right and something else follows immediately: the two halves of this comparison are wildly unequal units, and that inequality is the largest single fact bearing on the extent question.`,
      parts: [
        {
          heading: 'What the words actually divide',
          blocks: [
            { p: `The <span class="kt">Eastern Hemisphere</span> is Europe, Africa, Asia and Australia. The <span class="kt">Western Hemisphere</span> is the Americas. That is a line of longitude, and it does not care about ideology.` },
            { p: `Work through what that puts on each side. The entire European confrontation is Eastern Hemisphere: NATO's European members and the Warsaw Pact, divided Germany, the Berlin airlift and the wall, the Marshall Plan and its refusal. So are the Korean and Vietnam wars, the Chinese revolution, the Sino-Soviet split, the Soviet Union in all its extent, decolonization across Asia and Africa, the Non-Aligned Movement from Bandung, Suez, and Afghanistan. The Western Hemisphere holds the United States and Canada, and Latin America and the Caribbean: Guatemala in <span class="num">1954</span>, the Cuban revolution and the missile crisis, Chile in <span class="num">1973</span>, Nicaragua and El Salvador in the <span class="num">1980</span>s, and the domestic history of one superpower.` },
            { p: `Now say the consequence out loud, because it is an argument and not a technicality. One side of this comparison contains three continents, both blocs, all of the alliance system's European core and the whole of decolonization. The other contains one superpower and the region it had regarded as its own sphere since long before <span class="num">1945</span>. Any claim about how similar the two hemispheres were is being made across units of radically different size and composition, and a good essay says so early, because a finding of difference may be telling you about the units rather than about the Cold War.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat Eastern Hemisphere as a synonym for the communist world or Western Hemisphere as a synonym for the West. It is the single most expensive error available in this prompt, because it silently relocates most of the evidence: it puts Western Europe, Japan, South Korea and the Marshall Plan on the wrong side, and it leaves a "Western Hemisphere" containing only the United States and its capitalist neighbors, which then looks trivially uniform. The test to run before you write is one sentence long: London, Lagos, Moscow, Delhi and Beijing are all Eastern Hemisphere; Washington, Havana, Santiago and Guatemala City are all Western. If your evidence does not sort that way, you are answering a different question from the one on the page.`
            } }
          ]
        },
        {
          heading: 'The four categories, populated with anchors',
          blocks: [
            { p: `KC-6.2.IV.C names four kinds of effect, and the discipline is the one the Topic 7.9 chapter applies to causes: a category is not evidence until an event, a date or a document is attached to it. Here is a starting matrix, and every entry comes from a chapter of this volume rather than from general knowledge.` },
            { p: `<b>Economic.</b> Eastern Hemisphere: the Marshall Plan, roughly 13 billion dollars to Western Europe between <span class="num">1948</span> and <span class="num">1952</span> with conditions favoring open trade; COMECON from <span class="num">1949</span> and the terms of trade inside the Soviet bloc; Soviet financing of the Aswan High Dam after <span class="num">1956</span>; state-led development from India's five-year plans to Tanzanian ujamaa in Topic 8.6. Western Hemisphere: the American embargo on Cuba from the early <span class="num">1960</span>s and the Soviet subsidy that answered it; the Alliance for Progress; defense spending as a permanent feature of the American budget in Topic 8.7.` },
            { p: `<b>Political.</b> Eastern Hemisphere: two alliance systems with automatic triggers in Topic 8.2; governments installed and maintained by occupying armies in Topic 8.1; the partition of Korea, Vietnam and Germany; forty new states whose sovereignty was courted by both blocs in Topics 8.5 and 8.6. Western Hemisphere: the removal of an elected government in Guatemala in <span class="num">1954</span> and of another in Chile in <span class="num">1973</span> in Topics 8.3 and 8.7; the Organization of American States as a bloc instrument; the missile crisis of <span class="num">1962</span>.` },
            { p: `<b>Social.</b> Eastern Hemisphere: refugee movements out of Korea, Vietnam and Afghanistan, several million people in the Afghan case alone; the security state and its informers; the Soweto generation and the movements of Topic 8.7. Western Hemisphere: exile communities from Chile and Argentina after the coups; loyalty investigations and blacklists in the United States in the early <span class="num">1950</span>s; an anti-war movement large enough to be a political force; and the civil rights movement, whose Cold War leverage the Topic 8.1 and 8.7 chapters document.` },
            { p: `<b>Cultural.</b> Eastern Hemisphere: state-mandated aesthetics in the Soviet bloc, international broadcasting in both directions, and the space race as a public scoreboard from Sputnik in <span class="num">1957</span> to the first crewed flight in <span class="num">1961</span>. Western Hemisphere: American consumer culture and film as instruments of influence, State Department musical tours from the mid-<span class="num">1950</span>s, and the Olympic boycotts of <span class="num">1980</span> and <span class="num">1984</span>, which each hemisphere hosted one half of.` }
          ]
        }
      ],
      useThis: {
        tool: `Sorting by hemisphere before sorting by bloc. <em>The mechanism is that the prompt's unit of comparison is geographic, so the alliance systems, the divided states and the whole of decolonization fall on one side while the other holds a single superpower and its established sphere, which means the two units differ in size and composition before any evidence is weighed and any finding has to be checked against that difference.</em>`,
        limit: `Correct sorting is not an argument. It prevents the error that costs most marks and leaves the whole extent question open, which is what sections 02 to 04 are for.`,
        comparison: `Against <em>Topic 7.9</em>: that chapter insists a category such as "economics" is not a cause until an event is attached, and the same discipline applies here to an effect. "Cultural effects" is a heading; Sputnik in <span class="num">1957</span>, a State Department jazz tour, and the boycotted Olympic games of <span class="num">1980</span> and <span class="num">1984</span> are evidence.`
      },
      terms: [
        ['Eastern Hemisphere', 'Europe, Africa, Asia and Australia, which in this prompt contains both Cold War blocs and the whole of postwar decolonization.'],
        ['Western Hemisphere', 'The Americas, which in this prompt contains one superpower, its allies and the region it had treated as its sphere since long before 1945.'],
        ['Effect category', 'One of the four kinds of consequence named in KC-6.2.IV.C: economic, political, social and cultural.'],
        ['Evidence anchor', 'The named event, date or document that turns a category heading into something a reader can check.'],
        ['Unit of comparison', 'The thing being compared, which here is geographic rather than political, and whose size and composition can produce a finding all by itself.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'tests',
      num: '02',
      accent: 'rust',
      name: 'Three Tests for a Similarity Claim',
      navLabel: 'The three tests',
      dates: 'A method &nbsp;·&nbsp; For any evaluate-the-extent prompt',
      thesis: `Similar is not a property two things have. It is a claim that they resemble each other in some respect, and a degree claim is a claim about how many respects and how central. These three tests force you to name the respect, and like the three in Topic 7.9 they can disagree, which is the useful part.`,
      parts: [
        {
          heading: 'The mechanism test and the coverage test',
          blocks: [
            { p: `<b>The mechanism test: are these two cases alike in what happened, or in why?</b> Two effects can share a category and run on opposite machinery, and an essay that does not say which kind of similarity it means is making a claim its evidence does not support.` },
            { p: `Worked example. The Marshall Plan moved roughly 13 billion dollars into Western Europe between <span class="num">1948</span> and <span class="num">1952</span> as grants with conditions attached, among them cooperation on trade and joint planning, and Washington encouraged participation as widely as it could. In the Soviet zone the flow ran the other way: reparations, equipment removals and terms of trade favorable to the Soviet Union, with COMECON formalized in <span class="num">1949</span>, and Poland and Czechoslovakia pressed to withdraw their interest in Marshall aid. Both are a superpower reorganizing a European economy to consolidate a bloc, so the function matches. The direction of the resources is opposite, so the mechanism does not. Write "similar in function, opposite in mechanism" and you have said something checkable. Write "both superpowers used economic aid" and you have said something false about half of it.` },
            { p: `<b>The coverage test: does the claim hold in all four categories, or in one?</b> This is where a degree claim gets its degree, because "to a great extent" is a statement about how much of the evidence a pattern covers.` },
            { p: `So count. Political effects: constrained sovereignty appears in both hemispheres, so the claim holds. Economic: it holds if you frame it as bloc-building and weakens if you frame it as aid, which is the mechanism test feeding into this one. Social: both hemispheres produce refugee flows, security states and protest movements shaped by the confrontation, so it holds. Cultural: broadcasting, sport and prestige competition run in both, so it holds. Decolonization, the largest political transformation of the period, has no Western Hemisphere counterpart in these decades, so on that the claim fails. A thesis that says three of four with the fourth named is doing the work; a thesis that says "largely similar" and stops is asserting a count it has not made.` }
          ]
        },
        {
          heading: 'The unit test, and the dispute inside it',
          blocks: [
            { p: `<b>The unit test: are the two things being compared comparable?</b> Section 01 established that they are not, in size or in composition. A comparison between unequal units produces findings of difference that may be artifacts: of course a hemisphere containing both blocs, four wars and forty new states looks different from a hemisphere containing one superpower and its neighbors.` },
            { p: `The repair is not to abandon the prompt, which sets the units. It is to bring evidence in matched pairs, a region against a region or a state against a state, so that the comparison controls something, and then to say what the pairs show about the aggregate. That is what section 03 does, and it is the same move the Topic 8.5 chapter makes when it compares Kenya with the Gold Coast rather than Britain with France: holding one variable constant is what makes a comparison persuasive.` },
            { p: `One warning before you use those pairs. The claim that Soviet behavior in Eastern Europe and American behavior in Latin America are the same kind of thing is itself a live scholarly argument, not a neutral framing. The historian Odd Arne Westad's account of the global Cold War treats both superpowers as pursuing interventionist projects grounded in universal ideologies, and finds real structural parallels in how each dealt with states inside its reach.` },
            { p: `Other historians hold that the differences are large enough that a symmetry frame misleads: the instruments differed, so did the duration, so did the degree of direct control, and so did how reversible the arrangement turned out to be, since Latin American states retained formal independence and held elections in periods when Warsaw Pact states did not. You do not have to settle that. You do have to notice that "both superpowers did the same thing" is a position in an argument, and to write it as a claim you are defending rather than as background.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the two halves of this comparison came out of archives at different times',
              html: `American covert action in the Western Hemisphere is documented in unusual detail because it was investigated at home and declassified in stages: a Senate committee reported on covert operations in <span class="num">1975</span>, and large releases on Guatemala and Chile followed in the <span class="num">1990</span>s and after. Soviet and Eastern European internal decision-making became available mainly after <span class="num">1991</span>, unevenly, and access has narrowed again since. What that does to a comparison is easy to miss and important to say: the side that investigated itself in public produces more documented cases, and a reader can mistake a difference in the evidentiary record for a difference in behavior. The discipline is to compare like with like where you can, to name the source for each claim, and to avoid concluding from silence in either direction.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Naming the respect before claiming similarity. <em>The mechanism is that similarity is a relation rather than a property, so two cases can match in function and diverge in mechanism, and a degree claim is really a coverage claim about how many categories the resemblance holds across. Naming the respect and counting the coverage converts an impression into something a reader can check and disagree with.</em>`,
        limit: `The tests discipline a judgment rather than producing one. Two students applying all three to the same evidence can defensibly reach "largely similar" and "similar in form and different in substance", which is why the thesis has to state the respect it means.`,
        comparison: `Against <em>Topic 7.9's</em> three tests: those measure significance, these measure resemblance, and both work the same way, by making explicit the standard an ordinary answer leaves implicit. If you learned counterfactual, timing and scope for Unit 7, mechanism, coverage and unit are the Unit 8 equivalents.`
      },
      terms: [
        ['Mechanism test', 'Asking whether two cases are alike in what happened or in why, which separates a shared function from a shared process.'],
        ['Coverage test', 'Counting how many of the four effect categories a claimed resemblance holds across, which is where a degree claim gets its degree.'],
        ['Unit test', 'Asking whether the two things compared are comparable in size and composition, since unequal units generate findings of difference by themselves.'],
        ['Matched pair', 'A region-to-region or state-to-state comparison that holds something constant, used as evidence for a claim about the larger units.'],
        ['Symmetry claim', 'The argument that both superpowers behaved in structurally similar ways toward states inside their reach, which is a contested position rather than a neutral frame.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'matrix',
      num: '03',
      accent: 'iron',
      name: 'The Matrix, Worked',
      navLabel: 'Two pairs, worked',
      dates: '1948 to 1991 &nbsp;·&nbsp; One pair per category, chosen to control something',
      thesis: `The second criterion asks for evidence from at least two regions, one per hemisphere. These pairs are chosen so that each controls a variable, which is what makes them evidence for a claim about the hemispheres rather than two anecdotes standing next to each other.`,
      parts: [
        {
          heading: 'Economic: Egypt and Cuba, two states that used the second buyer',
          blocks: [
            { p: `<b>Egypt.</b> When American and British financing for the Aswan High Dam was withdrawn in <span class="num">1956</span>, Nasser nationalized the Suez Canal Company, survived the invasion that followed because Washington refused to back it, and then obtained Soviet financing and engineering for the dam, which was completed in <span class="num">1970</span>. Egypt took Soviet arms and Soviet money while suppressing communists at home, which is the non-alignment strategy of Topic 8.2 in its most practical form.` },
            { p: `<b>Cuba.</b> After the revolution of <span class="num">1959</span> and the American embargo that followed, the Soviet Union bought Cuban sugar above the world price and supplied oil on favorable terms, an arrangement that kept the Cuban economy running for three decades and that ended with the Soviet Union itself, producing the years of severe shortage that Cubans call the Special Period.` },
            { p: `<b>The similarity is a mechanism, and it is the volume's own.</b> A small state converted the existence of two rival suppliers into resources it could not otherwise have raised, which is the leverage the Topic 8.1 chapter identifies as the practical basis of non-alignment. Same category, same mechanism, two hemispheres. That is a strong piece of evidence for a similarity claim.` },
            { p: `<b>The difference is a mechanism too, and it is more interesting.</b> Egypt could change patrons and did: Sadat expelled Soviet military advisers in <span class="num">1972</span> and realigned toward the United States over the following decade. Cuba could not. The reasons are structural rather than personal: proximity to one superpower, an embargo that closed the natural market, and a sugar-for-oil arrangement deep enough that leaving it meant the economic collapse that eventually arrived anyway in <span class="num">1991</span>. That is the finding of the Topic 8.3 chapter about Latin America arriving as evidence: proximity changes the method, and it changes how many options a client has.` }
          ]
        },
        {
          heading: 'Political: Poland and Guatemala, and the honest asymmetry',
          blocks: [
            { p: `<b>Poland.</b> A communist government was established under the eye of an occupying army, opposition parties were eliminated within a few years, Soviet troops remained in the country, and when Solidarity threatened the arrangement in <span class="num">1981</span> the Polish government imposed martial law under heavy Soviet pressure. Sovereignty was formal; the range of possible governments was set elsewhere.` },
            { p: `<b>Guatemala.</b> In <span class="num">1954</span> an elected government whose land reform had affected the uncultivated holdings of an American fruit company was removed in an operation organized and supported by the United States. What followed was decades of military-dominated rule and a civil war whose United Nations-backed truth commission reported in <span class="num">1999</span>, estimating around 200,000 people killed or disappeared, attributing the great majority of the violations to state forces, and finding that acts of genocide had been committed against Maya communities.` },
            { p: `<b>The similarity, stated precisely.</b> In both cases a superpower narrowed the range of governments a nominally sovereign state could have, and did so because of bloc competition rather than because of the local dispute the government was actually having. That is a structural parallel and it is the strongest single piece of evidence available for a similarity thesis, because it holds in the political category on both sides of the world.` },
            { p: `<b>Now the differences, because a strong answer names them rather than hoping the reader will not.</b> The instrument differed: an occupying army and an imposed party monopoly in one, covert action and a local military in the other. The duration and depth of control differed. So did the visibility, and so did the reversibility, since Guatemala remained formally independent with an army of its own while Poland's arrangement was maintained by a foreign guarantee, which is precisely why Poland's ended in <span class="num">1989</span> when that guarantee was withdrawn. And as section 02 warns, whether those differences are large enough to defeat the parallel is a live argument you are joining rather than a fact you are reporting.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two shortcuts, opposite in direction, and each is a refusal to do the analysis. The first is "both sides did the same thing", which skips the mechanism test: it is true that both superpowers constrained the politics of states inside their reach and false that they did it by the same means, for the same duration, or with the same reversibility. The second is "the two cannot be compared", which is not a historical claim at all, since anything can be compared once you name the respect. Do the work instead: state the respect in which the cases resemble each other, state the respects in which they do not, and say which of the two your degree claim is resting on. That is one sentence longer than either shortcut and it is worth several marks.`
            } }
          ]
        },
        {
          heading: 'Social and cultural, briefly, because the criteria want four categories',
          blocks: [
            { p: `<b>Social.</b> Both hemispheres produced displacement, surveillance and protest movements shaped by the confrontation. Eastern Hemisphere: the Korean and Vietnamese wars moved people by the million, and roughly five to six million Afghans left the country during the Soviet war. Western Hemisphere: exiles from the Southern Cone coups formed communities across the Americas and Europe, and in the United States loyalty investigations and blacklists in the early <span class="num">1950</span>s narrowed political speech, while an anti-war movement later became a political force in its own right. The mechanism is shared, which is that a confrontation neither side would fight directly was fought through the internal politics of the states inside it.` },
            { p: `<b>Cultural.</b> The space race was a public scoreboard, from the first satellite in <span class="num">1957</span> to the first crewed flight in <span class="num">1961</span> and the first landing in <span class="num">1969</span>, and both governments treated the result as evidence about their systems. Broadcasting ran in both directions and was jammed. States sponsored culture as argument, from socialist realism to American musical tours abroad. And each hemisphere hosted one of the two boycotted Olympic games, in <span class="num">1980</span> and <span class="num">1984</span>. This is the category where a similarity claim runs most easily, and for that reason it is the weakest to rest a thesis on: prestige competition is cheap for both sides and it tells you less than the political category does.` }
          ]
        }
      ],
      useThis: {
        tool: `A matched pair that controls a variable. <em>The mechanism is that two cases sharing a category but sitting in different hemispheres let you test whether the resemblance survives the change of setting, and where it does, as with Egypt and Cuba converting rivalry into resources, the pair supports a general claim; where it breaks, as with Egypt able to change patrons and Cuba not, the break itself names the variable, which here is proximity to a superpower's own region.</em>`,
        limit: `A pair is evidence for a claim about the hemispheres and not a demonstration of it. Two pairs cannot cover three continents, so say what your pairs were chosen to test and acknowledge that a different pair might have shown something else.`,
        comparison: `Against <em>Topic 8.5's</em> Kenya and Gold Coast comparison: the same move. Hold the imperial power constant and vary the settler population, and the explanation appears. Hold the mechanism constant and vary the hemisphere, and you can see whether the mechanism was really about the Cold War or about the place.`
      },
      terms: [
        ['Leverage', 'A weak state’s ability to extract resources by playing two rival suppliers against each other, the practical content of non-alignment.'],
        ['Client dependence', 'The condition of a state whose economy rests on one patron’s terms, which reduces its options and is exposed when the patron withdraws.'],
        ['Constrained sovereignty', 'Formal independence combined with a range of possible governments set by an outside power, visible in both hemispheres by different instruments.'],
        ['Covert action', 'Intervention through funding, propaganda and a local military rather than by invasion, the characteristic instrument in the Western Hemisphere.'],
        ['Special Period', 'The years of severe shortage in Cuba after 1991, when the Soviet subsidy ended, and the clearest measure of how deep the dependence had been.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'writing',
      num: '04',
      accent: 'oxide',
      name: 'Writing the Extent Claim',
      navLabel: 'The writing',
      dates: 'The skill &nbsp;·&nbsp; Sentence level',
      thesis: `The third criterion asks for a defensible degree claim defended with specific evidence from both hemispheres. This section builds that sentence in front of you, because in an evaluate-the-extent prompt the gap between an average and a strong answer sits almost entirely in the thesis and in what the essay does with its own strongest objection.`,
      parts: [
        {
          heading: 'Contextualization, and the vocabulary of degree',
          blocks: [
            { p: `First, the contextualization, which the prompt asks for separately and which most students fill with the Second World War. That is the wrong condition, because the war explains why Europe was exhausted and not why a rivalry over Europe reached Havana and Luanda. The condition that preceded the effects is the postwar configuration itself, and the Topic 8.1 chapter states it: a line in Europe that both sides had committed to defend, nuclear weapons that made testing that line extremely expensive, and decolonization producing new sovereign states at a rate of several a year, each needing arms, money and recognition, with two suppliers available. One sentence of that, in your own words, is contextualization. A paragraph of narrative about <span class="num">1939</span> to <span class="num">1945</span> is not.` },
            { p: `Then the degree vocabulary, which is what makes a claim assessable. <b>"To a great extent"</b> and <b>"to a limited extent"</b> commit, which is the point. <b>"Largely similar in political and social effects and sharply different in one respect"</b> pre-announces the coverage count. <b>"Similar in function and opposite in mechanism"</b> is the most precise construction this topic offers and it comes straight from the mechanism test. <b>"The resemblance holds across three of the four categories, and the exception is the largest single transformation of the period"</b> tells a reader you have counted and are about to argue with yourself.` },
            { p: `And the phrases that concede the question. "Partly similar and partly different" contains no degree and no criterion and is true of any two things ever compared. "Both hemispheres were affected by the Cold War" is the prompt restated. "It depends" is a fair thought and not a thesis; if it depends, say what it depends on, and that dependency is your thesis.` }
          ]
        },
        {
          heading: 'A worked thesis, and the objection it has to survive',
          blocks: [
            { p: `Take the prompt: <em>Evaluate the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres.</em>` },
            { p: `<b>Weak.</b> "The Cold War affected both hemispheres in economic, political, social and cultural ways, so the effects were partly similar and partly different." That names no respect, makes no count, could have been written before the unit began, and gives a grader nothing to agree or disagree with.` },
            { p: `<b>Strong.</b> "To a great extent the effects were similar, because in both hemispheres the central effect was the same one: a superpower narrowed the range of governments a nominally sovereign state could have, and did so because of bloc competition rather than because of the local dispute in front of it. Poland's party monopoly was maintained by a neighboring army and by the martial law of <span class="num">1981</span>, and Guatemala's elected government was removed in <span class="num">1954</span> in an operation the United States organized, after which a United Nations-backed commission later documented around 200,000 dead in the war that followed. The economic category shows the same pattern from the receiving end, since Egypt after <span class="num">1956</span> and Cuba after <span class="num">1959</span> both converted superpower rivalry into resources they could not otherwise raise. The resemblance is one of function rather than of instrument, since occupation and party control are not covert action and a local army, and it fails on one large thing, which is that decolonization had no Western Hemisphere counterpart in this period."` },
            { p: `Look at what that does. It commits to a degree. It names the respect, which is function rather than instrument. It brings evidence from both hemispheres, in two categories, each with a date. It states the limit of its own claim before the reader can. And it is arguable, which is the test: a grader could take the other side, and that is what separates a thesis from a summary.` },
            { p: `<b>Now the objection, because the checkpoint names it and it is genuinely the strongest one.</b> Between <span class="num">1947</span> and the mid-<span class="num">1970</span>s more than forty states became independent, almost all of them in Asia and Africa, and United Nations membership rose from 51 to more than 140. Nothing of the kind happened in the Western Hemisphere, because Latin America had won its independence in the previous century, which is Unit 5. That is a difference in the political category so large it can carry an entire counter-thesis.` },
            { p: `Meet it directly, in one of two ways, and say which you are choosing. Either decolonization was a process the Cold War met, shaped and competed inside rather than an effect it produced, in which case your similarity claim is about Cold War effects and survives; or it was itself substantially a Cold War effect, in which case a "mixed" degree claim is the honest one and you should argue that instead. Both are defensible. What is not defensible is not mentioning it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not use the degree qualifier as a place to hide. "To some extent similar" reads as caution and functions as a refusal to answer, and it scores the same as no thesis at all, because the examiner cannot tell what you would have to be wrong about. The strong move is the one the Topic 7.9 chapter makes for ranking: commit to the degree, name the respect that produced it, then meet the best counterargument by name and explain why your claim survives it. If the counterargument is strong enough that your claim does not survive, change the claim rather than softening the language. A thesis that moved because of the evidence is the best sentence in this unit; a thesis hedged into safety is the worst.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Commit, respect, coverage, counterargument. <em>The mechanism is that an extent claim can only be assessed if a reader knows what it would take to be wrong, so the structure that scores states the degree, names the respect in which the cases resemble each other, reports how many of the four categories the resemblance covers, and then meets the strongest objection specifically rather than gesturing at complexity.</em>`,
        limit: `Structure is not knowledge. Every step needs a dated anchor from Topics 8.1 to 8.8, and a well-shaped sentence with nothing inside it is transparent to a grader from the first clause.`,
        comparison: `Against <em>Topic 7.9's</em> worked thesis on the causes of the Second World War: the same architecture in a different skill. There the criterion was significance and the phrase was "necessary but not sufficient"; here the criterion is resemblance and the phrase is "similar in function, different in instrument". Learn one and you can write the other.`
      },
      terms: [
        ['Degree claim', 'An explicit statement of how far something holds, to a great, moderate or limited extent, which an evaluate-the-extent prompt is asking for directly.'],
        ['Contextualization', 'A condition that preceded the developments being explained, here the postwar configuration of two superpowers, nuclear deterrence and decolonization rather than the Second World War itself.'],
        ['Defensible claim', 'A judgment a reader could disagree with, supported by a named respect and dated evidence, as distinct from a summary nobody would contest.'],
        ['Counterargument', 'The strongest specific objection to your degree claim, named and answered, which in this prompt is almost always decolonization.'],
        ['False balance', 'Declining to commit to a degree in order to appear even-handed, which reads as judgment avoided and scores accordingly.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `The first card fixes the definition that costs the most marks, the middle two are the method and the evidence, and the last is the sentence to walk into the exam with.`,
    pairs: [
      {
        category: 'Definition',
        title: 'Eastern Hemisphere is not the Eastern Bloc, and the difference decides the essay',
        body: `The prompt's hemispheres are geographic. Europe, Africa, Asia and Australia are Eastern; the Americas are Western. That puts NATO's European members and the Warsaw Pact, divided Germany, the Marshall Plan, Korea, Vietnam, China, Suez, Afghanistan and the whole of decolonization on one side, and the United States, Cuba, Guatemala, Chile and Nicaragua on the other. Two things follow. Most of the evidence you know is Eastern Hemisphere, so the Western Hemisphere half of a comparison has to be built deliberately from Topics 8.3 and 8.7. And the units are not equal: three continents and both blocs against one superpower and its established sphere. Say that early, because a finding of difference may be telling you about the units rather than about the Cold War, and a reader who sees you notice that will trust the rest.`
      },
      {
        category: 'Method',
        title: 'Three tests, and the coverage test is where the degree comes from',
        body: `The mechanism test asks whether two cases are alike in what happened or in why: the Marshall Plan moved roughly 13 billion dollars into Western Europe from 1948 to 1952 as conditioned grants while the flow inside the Soviet zone ran the other way through reparations and terms of trade, so the function matches and the mechanism is opposite. The coverage test asks how many of the four categories a resemblance holds across, which is what "to a great extent" is actually claiming, so count them and report the count. The unit test asks whether the two things compared are comparable, and since they are not, bring evidence in matched pairs that control something and then say what the pairs show about the whole. And remember that the claim both superpowers behaved alike is a scholarly position, argued by Westad among others and contested by others, not a neutral background fact.`
      },
      {
        category: 'Evidence',
        title: 'Egypt and Cuba share a mechanism, and where they diverge names the variable',
        body: `After Western financing for the Aswan High Dam was withdrawn in 1956, Egypt nationalized the canal company and took Soviet money and engineering, finishing the dam in 1970, while suppressing communists at home. After the revolution of 1959 and the American embargo, Cuba was sustained by Soviet purchases of sugar above world prices and oil on favorable terms. Same mechanism in two hemispheres: a small state converting the existence of two rival suppliers into resources it could not otherwise raise, which is the leverage Topic 8.1 identifies as the basis of non-alignment. Then the divergence, which is the more useful half. Sadat expelled Soviet advisers in 1972 and changed patrons; Cuba could not, because of proximity, an embargo that closed the natural market, and a dependence deep enough that its end in 1991 produced the Special Period. Proximity changes the method, and it changes how many options a client has.`
      },
      {
        category: 'Argument',
        title: 'Commit to the degree, name the respect, then meet decolonization head on',
        body: `A thesis that scores: to a great extent the effects were similar, because in both hemispheres a superpower narrowed the range of governments a nominally sovereign state could have for reasons of bloc competition rather than local dispute. Poland's party monopoly was held by a neighboring army and the martial law of 1981; Guatemala's elected government was removed in 1954 with American organization, and the war that followed produced a truth commission estimate of around 200,000 dead. The resemblance is of function, not of instrument, since occupation and party control are not covert action and a local army. Then the objection, which is the strongest available: more than forty states became independent in Asia and Africa between 1947 and the mid-1970s and nothing comparable happened in the Americas, which had decolonized a century earlier. Answer it by choosing, and say you are choosing: either decolonization was a process the Cold War met and competed inside rather than an effect it produced, or it was an effect, in which case argue a mixed claim instead.`
      }
    ]
  }
};
