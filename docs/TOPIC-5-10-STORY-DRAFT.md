# Topic 5.10 Story Draft: Continuity and Change in the Industrial Age

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Drafted 2026-11-08 from the CED source file, for the build the parent session started with "Build
5.10." The Phase 9 reviewers check this story against the CED source file and the scholarship; the
record of what they found is in `docs/TOPIC-5-10-CLAIM-LEDGER.md`, under "Review findings". Nothing
ships until Jeff says "ship it".

**Resume here (2026-11-08):** Phases 0 to 8 built and pushed; browser checks green. Review pass 1 found 5
page-truth and 4 history defects (plus 2 smaller items), all fixed and logged in the ledger. Review pass 2 is
running; next: fix its findings, then pass 3 if needed. The Unit 5 fingerprint moves only after the loop closes.

**Taught:** no dates yet. Unit 5 class dates exist only through 5.3, and Jeff has not named dates for
5.4 onward. The build adds no schedule entries; the dates are an open item in the report.

**Branch baseline:** `claude/topic-5-10-build`, cut from the finished Topic 5.9 build
(`claude/topic-5-9-build`, final commit `68a499b7`, not yet on `main`), because the First & 10 for all
ten Unit 5 topics is one shared file. No other branch with commits not on `main` touches 5.10 or the
shared Unit 5 files.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, pp. 109 and 110 (topic pages) and p. 96 (Unit at a Glance). This draft quotes
that file and nothing else for what the CED requires. The legacy 5.10 pages (built in June, before the
CED rebuild) were read only for the constraint check in section 2; none of their wording is carried
into this story. The unit story map (`docs/UNIT-5-STORY-MAP.md`) supplies the spine's wording, the
ownership split and the hand-off, and agrees with the source file on 5.10.

---

## 1. What the CED requires (pp. 109 to 110)

One learning objective, with no thematic focus printed.

- **Learning objective K:** Explain the extent to which industrialization brought change from 1750 to 1900.

Key Concepts. The CED prints these on the 5.10 pages as "Review: Unit 5 Key Concepts"; they are not new
content, they are the unit's big statements, gathered for the argument:

- **KC-5.1** (LO K): The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.
- **KC-5.1.IV** (LO K): Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.
- **KC-5.3** (LO K): The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.
- **KC-5.3.I.A** (LO K): Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.
- **KC-5.3.I** (LO K): The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.
- **KC-5.3.II.i** (LO K): Nationalism also became a major force shaping the historical development of states and empires (the CED prints this review copy without a closing period).

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.10 (p. 96). The objective
  asks for "the extent to which" industrialization brought change, so the answer is a measurement, not a
  list: **how big** the change was, **how far it reached** (which places and which people), and **what
  kept going** beside it. The answer this story builds is that **industrialization changed how the world
  made and moved goods, people and news, but it reached
  some places and people far more than others, and much of the old world, from farming to kings, kept
  going beside it.** The review Key Concepts on the Enlightenment, revolutions and nationalism give the
  argument its second measuring stick: not every big change of these years was industry's.
- **Suggested skill:** 6.C Argumentation, "Use historical reasoning to explain relationships among
  pieces of historical evidence." In this topic that means connecting evidence from across the unit, not
  listing it: this **led to** that (coal and steam led to railroads, which led to cheap wheat in
  Liverpool); these two show **the same pattern** (railways reaching the interior of Russia and of
  India); this one is **a contrast** (Lancashire's mills beside India's handloom weavers). The contrast is
  what lets an argument say *how much* changed.
- **Thematic focus:** none printed on the topic page.
- **Illustrative examples:** none. The CED gives 5.10 no illustrative examples; its evidence is the
  unit's. Every case in this story was taught in Topics 5.1 to 5.9, except one new primary source,
  Alfred Russel Wallace's *The Wonderful Century* (1898), chosen because it is a witness at the end of
  the period weighing exactly this question, and getting part of it wrong.
- **Sample activity:** the CED gives none for 5.10. The topic page lists one available resource:
  Classroom Resources, "Review Essay: Teaching the Great Divergence." This build does not use it; its
  content (why Europe's and Asia's economies diverged) is 5.4's shares, which the story uses as evidence.

**Five things in these sentences that are easy to drop.**
1. **"The extent to which."** The objective does not ask what changed. It asks how much. A 5.10 answer
   that lists ten changes and no continuity has not answered it, and neither has one that says "nothing
   really changed."
2. **"For some."** KC-5.1's standards of living rose "for some." That two-word limit is the unit's own
   measure of extent: the gains were real and unequal.
3. **"In interior regions globally."** KC-5.1.IV's railroads, steamships and telegraph reached the
   middles of continents everywhere, not only in Britain. The change in *moving* was more global than the
   change in *making*.
4. **"Often preceded."** KC-5.3.I says Enlightenment thought came before the revolutions. The political
   revolution of the unit began before factories spread beyond Britain, from ideas and grievances, not
   from machines. A student who credits industry with the French Revolution has the order wrong.
5. **"Also became a major force."** Nationalism was a change of its own, building some states (Italy,
   Germany) and pulling peoples away from empires. It is a review Key Concept, so it appears as evidence,
   not as a new topic.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-10-continuity-and-change-in-the-industrial-age.js`), the renderer config, the
First & 10 entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-10.js`, the map spec `topic-5-10` in
`scripts/lib/instructional-map-specs.js`, the Unit 5 atlas entry (`scripts/lib/unit5-atlas-content.js`),
the deep audit, the unit story map, the First & 10 readings for 5.1 to 5.9 (what students have already
been taught), and the 5.9 story draft, claim ledger and audit record.

**Consistent with the CED:**
- The lesson data carries learning objective K and all six review Key Concepts in the CED's wording.
- The deep audit calls the "extent to which industrialization brought change" frame a match for
  Learning Objective K and says to verify that its evidence comes from the repaired 5.1 to 5.9 spines.
- 5.9 hands forward: "Industry changed almost everything in a hundred and fifty years. Or did it? In Topic
  5.10 you will weigh the whole unit: how much did industrialization really change the world from 1750 to
  1900?" (its First & 10 and its landing slide).

**Out of line, each fixed inside this build:**
1. **The whole topic is June-era legacy**, built before the CED rebuild: lesson page, First & 10, deep
   reading and lesson data, with no story, ledger, deck, BeInTheRoom or audit. Every surface is rebuilt
   from this story.
2. **The renderer config carries no `collegeBoardKeyConcepts`, targets in the CED's order, or
   `classPresentation`**; the lesson data's Key Concepts carry invented theme labels ("Economic Systems,"
   "Technology and Innovation," "Governance") that the CED does not print for 5.10 (it prints no thematic
   focus). The labels are replaced with "Review: Unit 5 Key Concepts."
3. **The evidence is not the unit's.** The legacy lecture cites the "spinning jenny and the power loom,"
   the "Transcontinental Railroad," Wollstonecraft, Seneca Falls and Latin American independence as
   generic examples with no numbers, and none of the verified evidence 5.1 to 5.9 now teach. Its captions
   call Wyld's Manchester evidence for railroads and the telegraph (KC-5.1.IV) and Leech's cholera cartoon
   evidence that "inequality ... was a continuity."
4. **Overclaims and myths on the page:** "put manufactured cloth within reach of ordinary people for the
   first time"; "the telegraph let information travel almost instantly, a genuine break from every earlier
   era"; "steep hierarchy itself persisted ... the long-standing pattern, in industrial clothing"; the deep
   reading's "the workplace separated from the home for the first time" (flagged by the 5.9 build) and
   "Britain passed from a majority rural to a majority urban society within a century, and Manchester grew
   from about 25,000 to about 300,000" (5.9 now teaches about 23,000 in 1773, and more than 300,000 by
   1851 counting the larger borough). The BeSurreal's mill worker "finishes a twelve-hour shift" in 1900,
   when British law had limited women and young people in textile mills to ten hours a day since the Ten Hours Act of 1847.
5. **The Primary Source is not a source.** "Thinking Like a Historian of Change" is "an adapted skill
   passage" written for the lesson. It is replaced with a real source in a public-domain text.
6. **The Evidence Lab sorts two pictures** (the power-loom engraving and Wyld) with captions that
   assert their conclusion ("Evidence of economic and technological change"). It is rebuilt from real
   objects verified for 5.1 to 5.9.
7. **Leftovers:** `first10.note` says "build your AI Coach prompt"; the Skill Builder prompt says "your
   AI Coach will push on it"; the BeInTheRoom description carries "[Scenario blueprint, HTML build
   pending; not assigned in this build.]"; the videos list is a YouTube search link, not a video.
8. **The map key and atlas entry are generic** ("Where industrial production concentrated ..."), with no
   place and no number. The map is rebuilt around the places this story uses.
9. **Pictures from other topics' jobs (`stableImages`):** three pictures (the 1835 loom, Wyld, Leech)
   used ten times, and a blank world outline in the Map slot.

## 3. The ninth-grade story

Topic 5.9 ended with a question. Industry changed almost everything in a hundred and fifty years. Or did
it?

**Today you are the historian.** This topic gives you no new revolution and no new machine. It gives you
the College Board's question, and you already have the evidence from Topics 5.1 to 5.9: **to what extent
did industrialization bring change from 1750 to 1900?** "To what extent" means *how much*. To measure a
change, a historian asks three things. **How big was it?** **How far did it reach**, to which places and
which people? And **what kept going** beside it?

**I. The starting line: 1750.** Almost everything people bought was made by hand, at home or in small
workshops, and most of the world's manufactured goods were made in Asia: the historian Paul Bairoch
estimated that China made about a third and India about a quarter, while Britain made under 2 percent
(5.4). Almost all energy came from things that grow: muscles, wood, wind and water (5.5). A message
traveled only as fast as a horse or a ship. Most people farmed. And most rulers said their power came
from God and birth (5.1).

**II. Making: factories and coal (KC-5.1).** Steam engines turned the energy stored in coal into motion;
from the 1780s Watt and Boulton's engines turned wheels, so a mill could run wherever coal could be
brought (5.5). By about 1900 coal supplied about half of all the energy used in the world. Factories kept
improving how they made things, so goods became more available, more affordable and more varied: by 1815
even the coarsest cotton yarn cost about a third of what it had in the early 1780s, after rising prices are
taken into account, and soap came in wrapped, branded bars like Sunlight, sold from 1884 (5.7). The places
that made things moved too: Britain's share of the world's manufacturing went from under 2 percent in 1750
to about a fifth by 1860, and by 1900 Europe and the United States made more than four-fifths (5.4).
Standards of living rose, **for some**: one careful estimate finds British working families' standard of
living rose by less than 15 percent from the 1780s to the 1850s, and most historians agree it grew much
faster from about 1860 to 1900 (5.7).

**III. Moving: rails, steam and wire (KC-5.1.IV).** Russia
had 27 kilometers of railway in 1840 and more than 53,000 in 1900; India's first passenger train ran in
1853; the first railroad across the United States was finished in 1869 (5.5). On the busiest route,
emigrant voyages from Liverpool to New York took more than 40 days on average in 1853, mostly under sail, and
about 16 by 1869, as steamships took over. By the 1840s a telegraph message could travel along a wire in minutes; from
1866 cables under the Atlantic carried messages without a lasting break, and in 1870 a cable reached
Bombay. Railroads reached farms and mines in the middles of continents, so trade and migration grew: in
1870 wheat cost 57.6 percent more in Liverpool than in Chicago, and by 1913 only 15.6 percent more. About
55 million Europeans moved to the Americas and Australia between 1850 and 1914, and between 1846 and 1940
more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around
the Indian Ocean (5.5).

In 1898 the naturalist Alfred Russel Wallace, looking back over his own century, wrote that "not only is
our century superior to any that have gone before it, but that it may be best compared with the whole
preceding historical period." That is a witness's claim of enormous change. Is it right?

**IV. How far did it reach? What kept going? (the measure).** Wallace himself turned the page: "this is
only one side of the shield." Put each change beside its limits.
- **The old makers kept making.** India, China and the Middle East did not stop working. Their share of the
  world's goods shrank (China's from about a third in 1750 to about 6 percent in 1900), but in 1908, in just
  one province of northern India, about a million people still lived from weaving cloth on handlooms (5.4).
- **Most people still farmed.** In India, the census of 1901 found about two-thirds of the people living by
  farming; even in the industrial United States, about two in five workers still farmed in 1900. Until
  about 1900, wood and other things that grow were still the world's largest source of energy (5.5).
- **Only a few states built industry, and not all of it lasted.** Muhammad Ali's Egypt built factories for
  an army, and most had closed by the mid-1840s; Meiji Japan built railways and mills that lasted (5.6).
- **The gains went to some.** Industry rebuilt the ladder of rank rather than ending it: landed families
  kept much of their power (in 1900 Britain's prime minister, Lord Salisbury, was a marquess), and in the
  1840s a baby born in Manchester could expect to live only about 25 to 28 years, against about 40 to 42 for
  England and Wales as a whole (5.9). Wallace went further: he wrote of "the enormous and continuous growth
  of wealth, without any corresponding increase in the well-being of the whole people." Historians since
  have found that working families' living standards did rise, slowly before the 1850s and faster after
  about 1860 (5.7). So Wallace's claim is partly supported and partly not: the gains were unequal, but they
  were not nothing.

**V. The other revolution: ideas and nations (KC-5.3.I.A, KC-5.3.I, KC-5.3, KC-5.3.II.i).** Not every big
change of these years was industry's. Enlightenment thinkers used reason and evidence, first to explain
nature and then to question old authorities, including the church's power in government: John Locke
argued in 1689 that people are born with natural rights to "lives, liberties and estates," and that
government is a social contract that rests on consent (5.1). Those ideas **came before** the revolutions:
the American Revolution began in 1775, the French in 1789, the Haitian in 1791, and the wars for
independence in Spanish America in 1810 (5.1, 5.2). The revolutions built new countries, the United
States, Haiti and the new republics of Spanish America, and they left a new loyalty, nationalism, which
joined Italy into one kingdom in 1861 and proclaimed a German Empire in 1871, and pulled Greeks and
other Balkan peoples away from the Ottoman Empire (5.2). This revolution began while factories were still
almost all in Britain. Its causes were ideas and grievances, not machines.

The two revolutions met. Nationalism pushed some governments to build industry to make the state strong,
as Meiji Japan did (5.6); and workers in industrial cities used the language of rights to demand the
vote, as the Chartists did in Britain (5.8). And the old order held on in politics too: in 1900 kings and
emperors still ruled most of Europe, and women could vote in national elections almost nowhere (New
Zealand, in 1893, was the first self-governing country where all adult women could) (5.1).

**VI. Make the argument (the skill).** A list of evidence is not an argument. An argument explains how the
pieces relate. Three relationships do most of the work:
- **This led to that.** Coal and steam engines led to railroads and steamships, which led to cheap wheat
  from the middle of North America feeding workers in Britain.
- **The same pattern, two places.** Railways reached into the interior of Russia and of India: the same
  change, on two continents.
- **But not everywhere: a contrast.** Lancashire's power looms made cloth cheaper than India's hand weavers
  could; yet a million people in one Indian province still lived from the handloom in 1908. Set a change
  beside a continuity, and you can say how much changed.

Then weigh it. A strong answer to "to what extent" takes a side (a great extent, a limited extent, or great
in some ways and limited in others), names a change and a continuity, and says **for whom or where** the
change was greatest, and **why**.

**And it hands on a turn.** Industrial states now needed raw materials and markets, and had new tools to
take them. That is Unit 6.

## 4. The spine

**Industrialization changed how the world made and moved goods, people and news, but it
reached some places and people far more than others, and much of the old
world, from farming to kings, kept going beside it. Argue how much changed, for whom, with evidence.**

The story map's spine ("Argue how much industrialization changed the world from 1750 to 1900, with evidence
from the whole unit") is kept in substance; the build adds the measure ("for whom") and the finding the
evidence supports. "How the world made ... goods" is KC-5.1; "moved goods, people and news" is KC-5.1.IV;
"from farming to kings, kept going" is the continuity, with KC-5.3's revolutions and nationalism as the
change in who states belonged to that did not come from industry; "argue ... with evidence" is the reasoning
move and the skill.

Shorter for the wall: **Deep change, uneven reach.**

The deck shows a thesis frame, never a finished thesis (Checkpoint 2 asks for one). One defensible
argument, for the teacher only: industrialization changed how goods were made and moved to a great extent,
most in the industrial regions of Europe, the United States and Japan, but to a limited extent in the lives
of most of the world's people, who still farmed in 1900, and it did not cause the era's other great change,
the revolutions in ideas and governments.

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | Taught in | What it proves |
|---|---|---|---|
| 1750: hand production; China about a third, India about a quarter, Britain under 2 percent | LO K (the baseline) | 5.4 | The **starting line**: what was already true. |
| Energy from muscles, wood, wind and water in 1750; coal about half the world's energy by about 1900 | KC-5.1 | 5.5 | **How big** the change in making was. |
| Cotton yarn about a third of its early-1780s price by 1815; Sunlight soap, 1884 | KC-5.1 ("availability, affordability, and variety") | 5.7 | Goods became more **available, affordable and varied**. |
| Britain's share under 2 percent to about a fifth by 1860; Europe and the US more than four-fifths by 1900 | KC-5.1 | 5.4 | The **places** that made things moved. |
| Standards of living: under 15 percent, 1780s to 1850s; faster, 1860 to 1900 | KC-5.1 ("for some") | 5.7 | The gains were **real and slow, and unequal**. |
| Russia's railways 27 km (1840) to more than 53,000 (1900); India 1853; US 1869 | KC-5.1.IV ("interior regions globally") | 5.5 | Moving changed **on every continent**. |
| Liverpool to New York: more than 40 days (1853, mostly sail) to about 16 (1869); telegraph by the 1840s (Morse 1844), Atlantic 1866, Bombay 1870 | KC-5.1.IV | 5.5 | **How big** the change in moving was. |
| Wheat price gap 57.6 percent (1870) to 15.6 percent (1913); 55 million Europeans; 29 million Indians and 19 million Chinese | KC-5.1.IV ("increased trade and migration") | 5.5 | Trade and migration **grew**. |
| Wallace (1898), preface and ch. XX | LO K | new source | A **witness** weighing the century, and a claim to test. |
| A million handloom weavers in one province, 1908; China's share to about 6 percent | LO K (continuity) | 5.4 | The **old makers kept making**, at a shrinking share. |
| India 1901, about two-thirds farming; US 1900, about two in five; wood the largest source until about 1900 | LO K (continuity) | new; 5.5 | **Most people still farmed**. |
| Egypt's factories mostly closed by the mid-1840s; Japan's lasted | LO K ("extent") | 5.6 | Industry **did not reach every state**. |
| Salisbury; Manchester life expectancy | KC-5.1 ("for some") | 5.9 | The **ladder** was rebuilt, and the gains **unequal**. |
| Locke (1689); ideas before the revolutions (1775, 1789, 1791, 1810) | KC-5.3.I.A, KC-5.3.I | 5.1 | The ideas **came first**. |
| The US, Haiti, Spanish America; Italy 1861, Germany 1871, Greece | KC-5.3, KC-5.3.II.i | 5.2 | **New nation-states** and nationalism: a change not caused by industry. |
| Meiji Japan; the Chartists | KC-5.3.II.i, KC-5.3.I | 5.6, 5.8 | The two revolutions **met**. |
| Kings and emperors in 1900; women's votes almost nowhere (New Zealand 1893) | KC-5.3 (continuity) | 5.1 | The old political order **held on**. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.9: name one thing industry changed in society and one thing that kept going.
   (b) From 5.5: name one of the three technologies that reached the interiors of continents.
   (c) From 5.2: name one country a revolution created.
   **Bridge:** "5.9 asked: industry changed almost everything in a hundred and fifty years. Or did it?
   Today you answer it, with an argument."
3. **Topic question on screen, over a real historical object (Currier & Ives, *Across the Continent*,
   1868):** To what extent did industrialization change the world from 1750 to 1900?
4. **Road map** (the outline's section headers).
5. **First & 10.**
6. **The starting line, 1750** (section I).
7. **Making: energy and factories** (section II, KC-5.1).
8. **Making: cheaper goods, moving shares, gains for some** (section II, KC-5.1).
9. **Moving: rails, steam and wire** (section III, KC-5.1.IV).
10. **Moving: more trade, more migration** (section III, KC-5.1.IV).
11. **A witness weighs the century: Wallace, 1898** (section III to IV).
12. **The old makers kept making; most people still farmed** (section IV).
13. **The gains went to some: Wallace's claim tested** (section IV).
14. **The other revolution: ideas before revolutions** (section V, KC-5.3.I.A, KC-5.3.I).
15. **New nations, and where the two revolutions met** (section V, KC-5.3, KC-5.3.II.i).
16. **The skill (6.C): three ways evidence relates** (section VI).
17. **Weigh it** (section VI): change set beside its reach.
18. **Retelling slide** (section 7).
19. **Build a thesis** (the topic's argument move; kept because, like 4.8's, it carries the thesis move
    the topic builds toward and Checkpoint 2 asks for).
20. **Work Time launch pad.**
21. **The hand-off, over a real historical object.**

## 7. Retelling slide

A four-row table, one row per part of the world industry touched, so a student can redraw it from memory:

| | In 1750 | By 1900 | Kept going |
|---|---|---|---|
| **Making goods** | By hand, mostly in Asia | Coal and factories; Europe and the US make over four-fifths | Old makers kept making by hand, a shrinking share |
| **Moving goods, people, news** | Horse and sail | Railroads, steamships, telegraph; more trade, tens of millions migrate | The interiors kept farming: the trains carried their crops |
| **How people lived** | Most in the countryside, rank by birth | Cheaper goods; living standards rose for some; crowded cities | Most people still farmed; landed families near the top; many still poor |
| **Who ruled** | Kings by God's will | Revolutions, new nation-states, nationalism (from ideas, before the factories spread) | Kings and emperors in most of Europe; women's votes almost nowhere |

Result line: **Deep change, uneven reach.**

Why this shape: the reasoning move is Continuity and Change and the objective asks "to what extent." The
middle column is the size of the change; the last column is its limit. Reading across a row is one
argument; reading down the last column is what kept going. The fourth row carries the review Key Concepts
on revolutions and nationalism, marked as a change with other causes.

## 8. Owns / bridge-only (from the unit story map)

- **5.10 owns:** the argument, using Unit 5 evidence already taught. It introduces no new required
  content. Its six Key Concepts are the CED's review concepts for the unit.
- **Bridge only (evidence borrowed, never retaught at length):** every case comes from its own topic and is
  used in one or two sentences, with the number its own topic teaches: the Enlightenment (5.1);
  revolutions and nationalism (5.2); the factory (5.3); spread and shares (5.4); energy, technology and
  transport (5.5); Egypt and Japan (5.6); prices, living standards and Sunlight soap (5.7); the Chartists
  (5.8); the ladder and the cities (5.9).
- **New to 5.10:** Wallace's *Wonderful Century* (1898), as one primary source weighing the century; and
  two figures for farming in 1900 (India's 1901 census; the United States).
- **Not taught:** Unit 6. Imperialism, the motives for migration and economic imperialism are named in the
  one-line hand-off only.
- **Hands to Unit 6:** "Industrial states now needed raw materials and markets, and had new tools to take
  them." (The story map's line.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-10-CLAIM-LEDGER.md`)

Most of this story's facts were checked in the 5.1 to 5.9 ledgers, and this ledger cites those rows rather
than checking them again from memory; anything 5.10 says differently from them is a new claim. The new
claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Wallace: every quotation letter for letter against the 1898 Dodd, Mead text (New York), with the page;
  who he was; and his point of view (the same book's "Failures" defend phrenology and attack vaccination,
  so the deck says he was not right about everything).
- India's 1901 census (about two-thirds living by farming) and the United States in 1900 (about two in
  five workers in farming), each from a census or a standard series.
- Superlatives and single causes to keep out: "for the first time" (the legacy deep reading's); "everything
  changed"; "nothing changed"; "industry caused the revolutions"; "the telegraph was instant"; "workers got
  nothing" (Wallace's own overclaim, which the story tests); "the biggest change since farming began."
- Numbers carried from 5.1 to 5.9 stated exactly as those topics state them.

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Because 5.10 argues from the unit's evidence, the first choice for every
beat is a real historical object **already verified for an earlier Unit 5 topic** and stored in
`assets/images/topics/5-*`, carried with the caption and credit its own topic checked. No image generator
key is set, so AI pictures are skipped.

| Beat | Historical object | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | Currier & Ives, *Across the Continent*, 1868 (5.5) | A railroad crossing a continent: the change, and the people beside the track. | An American print sold for profit, with its own point of view about the West. |
| 7 | Power-loom weaving, 1835 (in the repo) | The factory. | An illustration for a book on the cotton industry. |
| 9 | The *Great Eastern* laying the Atlantic cable, 1866 (5.5) | The telegraph. | A print, not a photograph. |
| 11 | Wallace's words (source-quote) | The witness. | |
| 12 | A weaver at his loom, Tanjore, about 1840 (5.4) | The old makers kept making. | A picture made for European buyers. |
| 14 | *Storming of the Bastille*, Thévenin, about 1790 (5.2) | The other revolution. | Painted soon after, by a French painter. |
| 15 | Kunisada, the first train leaving Yokohama, 1872 (5.6) | Where the two revolutions met. | |
| 18 | The retelling table (template) | | |
| 21 | Riis's lodgers (5.9) or Across the Continent | Landing. | |

## 11. Calls made in this build (reported for Jeff to overrule)

1. **Title:** the page keeps the CED's title, "Continuity and Change in the Industrial Age." The reading's
   title is "How Much Changed?", on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** the CED's suggested skill, 6.C Argumentation: three relationships (led to, the
   same pattern, a contrast) modeled on Unit 5 evidence, then practiced on a new set.
3. **Learning targets:** three, all under Learning Objective K: what industry changed in making and moving
   (KC-5.1, KC-5.1.IV); the other revolution in ideas and nations (KC-5.3 family); the argument about how
   much changed, for whom (LO K). Checkpoint 1 assesses targets 1 and 2; Checkpoint 2 assesses target 3 and
   the objective, and declares Continuity and Change.
4. **Primary Source:** Wallace, *The Wonderful Century* (1898), two short passages, with three questions:
   his claim, how it squares with the unit's evidence, and his point of view.
5. **Map module:** rebuilt as one map of where industry's changes reached by 1900 and where the old ways
   kept going, using only places and numbers the unit teaches.
6. **Evidence Lab:** six real objects verified for 5.2 to 5.9; no AI picture, no BeHistorical map, no
   unsourced summary card.
7. **BeSurreal:** a grandmother in 1900 who was born in a Lancashire village in 1825, talking with her
   grandchild about what changed in her life and what did not.
8. **BeInTheRoom:** none, as for 4.8, the other argument topic: the module shows its "coming soon"
   placeholder, and the legacy description's "[Scenario blueprint, HTML build pending]" is removed. A
   scenario for an argument topic would mostly rehearse the Checkpoint 2 essay; Jeff can ask for one.
9. **Deep reading:** rebuilt around this story; the "for the first time" superlative leaves with it.
10. **Required modules** (Phase 8): 02 First & 10, 06 Checkpoint 1, 10 Checkpoint 2, and 05 Skill Builder,
    because Checkpoint 2's argument needs the CED's suggested skill, 6.C, and the Skill Builder is where
    students practice it before writing.
