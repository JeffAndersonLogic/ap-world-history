# Topic 5.8 Story Draft: Reactions to the Industrial Economy from 1750 to 1900

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**

**Resume here (2026-11-01):** Phases 0 to 8 done. Phase 9: three slide fits from the builder's read
fixed; review pass 1 launched (page truth on the cheaper model, history on the default model) from a
packet in the session's scratchpad; its findings are not yet logged. If this session stops, recapture
the packet and run pass 1 again. The Unit 5 reading fingerprint moves only after the loop.

Drafted 2026-11-01 from the CED source file, for the build Jeff started with "Build 5.8." The Phase 9
reviewers check this story and every surface built from it against that file and the scholarship
before anything ships. Nothing ships until Jeff says "ship it".

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor any comment in it names a Unit 5 class day (5.1 to
5.7 are not scheduled either). The build adds no schedule entries; the dates are an open item in the
report.

**Branch baseline:** `claude/build-5-8-oagwly` (the branch this session was given; the skill's usual
name, `claude/topic-5-8-build`, does not exist and was not created, so there is one branch for this
topic), started from `main` at `f8251dda`, which already carries 5.1 to 5.7 (5.7's build and audit
are on `main`: `c928c0c9`, `ba8eccb7`). No other branch with commits not on `main` touches 5.8 or the
shared Unit 5 files (`scripts/lib/reading-content/unit-5.js`, `scripts/build-unit5-rooms.js`):
`claude/unit-5-completion-jueU7` (June), `claude/unit-5-ced-audit` (June) and
`repair-unit-5-ced-alignment` (September) are older than every 5.x build now on `main`;
`claude/topic-5-7-build` and `claude/5-7-build-timeout-yjim8a` are 5.7's finished branches, with
nothing that is not on `main`; `work/unit4-unit5-atlases-20261012` touches only the atlases.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 107 (topic page), p. 96 (Unit at a Glance) and p. 97 (the sample activity).
This draft quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-5-STORY-MAP.md`) section for 5.8 was a proposal; this build follows it, as section 8 says.

---

## 1. What the CED requires (p. 107)

- **Learning objective I** (Social Interactions and Organization): Explain the causes and effects of calls for changes in industrial societies from 1750 to 1900.

Key Concepts, in the CED's order:

- **KC-5.1.V.D**: In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.
- **KC-5.1.V.A**: In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.
- **KC-5.3.IV.A.ii**: Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.
- **KC-5.1.V.B**: In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.

- **Reasoning move:** Causation, the CED's reasoning process for 5.8 (p. 96). The learning objective
  asks for "the causes and effects of calls for changes," and every Key Concept is written as a cause
  and a response: "in response to the social and economic changes brought about by industrial
  capitalism," "discontent with established power structures encouraged," "in response to the
  expansion of industrializing states." The answer this story builds is **one causal chain told four
  times: a pressure (industrial capitalism, or the power of industrial states), the people who called
  for change (workers, thinkers, reformers and governments, the Ottoman and Qing courts), what they
  wanted, and what their calls actually changed, including where they were resisted.**
- **Suggested skill:** 2.B Sourcing and Situation, "Explain the point of view, purpose, historical
  situation, and/or audience of a source." Students explain who made a source, why, for whom and in
  what situation, and how that shapes what the source says. The CED's sample activity for 5.8 is
  exactly this move (below), and this topic is rich in sources whose authors wanted change, or wanted
  none.
- **Thematic focus:** Social Interactions and Organization (SIO).
- **Illustrative examples:** the CED prints none for 5.8. Every example in this story is the build's
  choice, and each is a claim in the ledger.
- **Sample activity** (p. 97, Activity 3, optional): "Critique Reasoning: In groups of three, assign
  the descriptions of Manchester from Friedrich Engels’s The Condition of the Working-Class in England
  in 1844 and the preface to the Wheelan and Co. business directory, 1852. Ask students to discuss the
  differences in the descriptions; how the point of view, purpose, and intended audience of the
  authors might explain the differences; and which description they believe is the most accurate and
  why." The Skill Builder uses it (section 11).

**Five things in these sentences that are easy to drop.**
1. **"Some governments, organizations, and individuals."** Reform came from three kinds of actor, not
   only from protesters. A government could reform to head off its critics (Bismarck's insurance laws).
2. **"Various types of political, social, educational, and urban reforms."** Four kinds. An answer that
   names only factory laws has covered one.
3. **"Promoting alternative visions of society."** Workers' parties did not only ask for higher wages;
   some wanted a different society. That sentence is the bridge to Marx.
4. **"Discontent with established power structures."** The cause of the new ideologies is
   discontent with who held power, not only with wages. Marx's ideas are one of "various" ideologies,
   and socialism and communism are named as ideas, not as states (no communist state existed before
   1917).
5. **"In response to the expansion of industrializing states ... often resisted by some members of
   government or established elite groups."** The Ottoman and Qing reforms have their own cause (outside
   pressure, not factory conditions at home) and their own limit (resistance from inside). A story that
   says only "they modernized" has dropped both.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-8-reactions-to-industrial-economy.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-8.js`, the BeInTheRoom entry in `scripts/build-unit5-rooms.js`,
the map spec in `scripts/lib/instructional-map-specs.js`, the network atlas entry in
`scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, and the 5.3, 5.6 and 5.7
First & 10s (what students were last taught).

**Consistent with the CED:**
- Both lesson files' `collegeBoardKeyConcepts` carry learning objective I and all four Key Concepts in
  the CED's wording (corrected on 2026-10-20 in the 5.1 build).
- The network atlas line ("Workers, reformers, and governments responded to industrial capitalism and
  foreign pressure. Competing visions included unions, reforms, socialism, and state modernization.")
  and its two views (workers and alternative visions in Europe; states seeking modernization at Istanbul
  and Shanghai) agree with the CED and are left alone.
- 5.7 hands forward: "Not everyone gained from this new economy, and not everyone accepted it. Workers
  organized, reformers pushed for new laws, and some thinkers imagined a different system. That is
  Topic 5.8." 5.6 named the Ottoman and Qing reforms and their resistance as 5.8's (its story draft,
  section 8) and removed a Communist Manifesto excerpt and a Reichstag social-insurance room as 5.8's.
- The renderer config's Kennington Common daguerreotype and the 1843 Punch cartoon are real objects on
  the topic; both are kept and re-captioned to the story.

**Out of line, each fixed inside this build:**
1. **Two of the four Key Concepts have no surface** (the deep audit's "Priority repair" and story map
   conflict 8). Nothing on the page teaches Marx, socialism or communism (KC-5.3.IV.A.ii), and nothing
   teaches the Ottoman or Qing reforms or their resistance (KC-5.1.V.B). Both targets, both criteria,
   both checkpoints and three of the four reading sections teach other things.
2. **Abolition is taught as a main branch** (a lecture card, First & 10 section 3, target 2, criterion 2,
   Checkpoint 2, the map key, the Evidence Lab's Douglass card). The CED gives abolition to 5.1 as a
   reform movement (KC-5.3.I.C); the story map makes it a bridge only. It leaves 5.8, with one bridge
   line. The Lancashire Cotton Famine material (the blockade, Lincoln's letter) leaves with it.
3. **The labor story is almost all American** (the Great Railroad Strike, Haymarket, Pullman, the AFL,
   Debs), and the room is the Pullman Strike. The Key Concept says "in industrialized states ... in
   different areas." The story keeps one American line and teaches Britain and Germany, where unions
   and workers' parties grew from the 1820s to 1900.
4. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation; the Skill Builder teaches comparison; Checkpoint 2 declares Causation; nothing teaches
   the CED's suggested skill, 2.B Sourcing and Situation.
5. **Invented or unverifiable quotations, each removed:**
   - The Evidence Lab bank's "Eugene Debs ... (1895)": "I believe in the collective ownership ... It
     cannot be reformed. It must be replaced." Debs's real account, "How I Became a Socialist," is from
     1902; the closing sentences were not found in it (ledger).
   - The Chadwick "report to Parliament" quotation, which runs several sentences together that are not
     in that form in the 1842 report (ledger).
   - The Primary Source's Haymarket "adapted excerpt": speeches and a pardon paraphrased and presented
     as quotation, with Altgeld's pardon message reworded ("The jury was packed ..."). The Haymarket
     material leaves with the American branch.
   - The Evidence Lab's Communist Manifesto card prints "Workers of the world, unite!" as the book's
     words; the 1888 English translation reads "Working Men of All Countries, Unite!" (ledger). The card
     is rewritten to the 1888 text.
6. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "The Combination Acts ... were repealed in 1824, legalizing trade unions for the first time": the
     1825 act at once narrowed what unions could lawfully do; unions were not fully legal until 1871
     (ledger).
   - "In 1850, cotton was the United States' largest export, providing two-thirds of American export
     earnings" and "approximately 60,000 enslaved people" in the Baptist War: leave with abolition.
   - "The average age of death for laborers in Liverpool was 15": Chadwick's figure is an average age
     at death of all deceased of a class, much lowered by infant deaths, and reads to a student as a
     lifespan. It is 5.9's material and leaves.
   - "Producing the most dramatic sustained decline in urban mortality in human history" and "the
     largest women's organization in 19th-century America": superlatives with no source. Removed.
   - The map: "Revolutionary movements, 1905" (after 1900), "Taiping and other mass upheavals" (Unit 6),
     "Progressive reform" (after 1900) and "Indigo and famine protest under colonial rule" (Unit 6).
     Replaced.
   - BeInTheRoom's alignment block names `KC-5.8.I–II` and `KC-5.8.II.A–C`, codes the CED does not have
     (story map conflict 2), and an objective the CED does not print. The room is replaced.
   - The BeSurreal's Martinsburg wages ("$1.75 a day ... $1.57 ... rent is $6") are untraced; it leaves
     with the American branch.
7. **Leftovers:** `first10.note` says "build your AI Coach prompt"; the reading carries a `builderBody`
   about building an AI Coach prompt (retired 2026-08-31), a `readingEyebrow` and support headings unlike
   its siblings, unpadded question numbers and a footer note; the lesson's `evidenceLab.items` bank is
   read by no renderer; the title drops "from 1750 to 1900" (story map conflict 3).
8. **Pictures from other topics (`stableImages`):** the 1700 world map, da Gama's pillar, Magellan, the
   casta painting, the Florentine Codex smallpox page, the Waldseemüller map, the VOC logo, the Pueblo
   Revolt mural, Columbus taking possession and a Persian astrolabe. None has a 5.8 job; all leave. The
   "Court for King Cholera" card is 5.9's crisis and leaves with the public-health card.

## 3. The ninth-grade story

Topic 5.7 ended on a turn: not everyone gained from the new industrial economy, and not everyone
accepted it. This topic is about the people who called for change, why they called, and what their
calls actually changed. The same pattern repeats four times: a **pressure**, the people who **called for
change**, **what they wanted**, and **what happened**.

**The pressure.** By the 1840s, Manchester was the world's great cotton town. Two writers described it
a few years apart. Friedrich Engels, a young German who worked in his family's cotton business there,
wrote a book in 1845 about the streets where the mill workers lived: filth, crowded houses, foul water,
and a city built so that the well-off could ride to work without ever seeing those streets. A business
directory printed in Manchester by Whellan and Company in the early 1850s (the CED dates it 1852; the copy
that can be read today is dated 1853) opened with the same city's "tall chimneys," which "betoken the
activity, enterprise, and wealth of its inhabitants." Same city, two pictures. Who wrote each, why, and for whom, explains a lot
of the difference, and that is the skill of this topic. Both were partly right: industry made some people
rich and left many working long hours for low pay in crowded, unhealthy towns (Topic 5.9 takes that city
apart). People did not simply accept it.

**Part 1: workers organize.**

**At first, it was a crime.** Britain's Combination Acts of 1799 and 1800 made it illegal for workers to
join together ("combine") to demand higher wages or shorter hours. Parliament repealed them in 1824, and a
law of 1825 then limited what unions could do, but from then on workers could form *labor unions*
(in Britain, trade unions): groups of workers who bargain with employers together, and can strike
(stop work together) when bargaining fails. The risks stayed real: in 1834 six farm laborers in
Tolpuddle, in Dorset, were sentenced to seven years' transportation to Australia for swearing a secret
oath when they formed a union, until protests won their pardon in 1836.

**Unions grow, and parties form.** Skilled workers built lasting unions by trade from the 1850s, and in
1868 unions formed the Trades Union Congress. An act of 1871 gave unions legal standing. Unions pushed
to limit hours (a ten-hour day for women and young workers in textile mills, passed in 1847, in force from 1848), raise wages and
improve conditions. Workers also wanted a voice in government. From 1838 the Chartists, a mass movement
of working people, demanded the vote for every man and five other changes to Parliament, set out in a
People's Charter; three huge petitions (1839, 1842, 1848) were rejected, and a great meeting on
Kennington Common in London on 10 April 1848 was photographed; Prince Albert bought the pictures. In 1900 unions and socialists in Britain
set up a committee to elect working men to Parliament, which became the Labour Party in 1906. In Germany,
workers' parties united in 1875; the government banned socialist meetings and newspapers from 1878 to
1890, but the party, renamed the Social Democratic Party (SPD) in 1890, won more votes than any other
party that year. In the United States, the American Federation of Labor (1886) organized skilled workers
for better wages and hours. These parties did not only ask for better pay: many wanted a different
society. That is the CED's "alternative visions of society."

**Part 2: new ideas.**

**Discontent with who held power.** Some thinkers did not want to fix the factory system; they wanted
to replace it. In the 1820s and 1830s, followers of Robert Owen, a Welsh-born businessman who had managed
the New Lanark mills in Scotland with shorter hours and a school for workers' children, began to call
their ideas *socialism*: the idea that the things a society uses to produce wealth, such as land and
factories, should be owned and run in common, for everyone, not by private owners for profit.

**Marx and Engels.** In February 1848, the same Engels and a German writer, Karl Marx, published *The
Communist Manifesto*. It opened its first section with the claim that "The history of all hitherto
existing society is the history of class struggles." Industrial society, Marx argued, was splitting into
two classes, the owners of factories and the workers who owned nothing but their labor, and one day the
workers would overthrow the owners, end private ownership of the means of production, and build a
society without classes. That end point he called *communism*. It closed: "The proletarians have nothing
to lose but their chains. They have a world to win. Working Men of All Countries, Unite!" (proletarians
is Marx's word for wage workers). Marx later wrote *Capital* (1867) in London. Socialism was the wider
family of ideas; communism, as Marx used it, was its revolutionary end point.

**What his ideas did by 1900.** No revolution like the one Marx predicted happened in an industrial
country before 1900. But his ideas shaped workers' parties: Germany's SPD adopted a Marxist program in
1891 while it also ran candidates in elections, and in 1889 socialist parties from many countries formed
the Second International, which called for demonstrations on May 1, 1890, for an eight-hour day;
socialists kept marching on May 1 after. Communism as
a government is a twentieth-century story (Unit 7).

**Part 3: reformers and governments.**

**Not only protesters.** Some governments, organizations and individuals answered the problems of
industrial life with reforms of four kinds:
- **Political:** Britain's Reform Acts of 1867 and 1884 gave the vote to many working men (but no
  women).
- **Social:** Factory Acts limited children's work: from 1833, no children under nine in textile mills,
  with inspectors to check; the Mines Act of 1842 barred women and girls, and boys under ten, from
  working inside mines.
- **Educational:** the Education Act of 1870 set up public elementary schools where church schools fell
  short; attendance was made compulsory in 1880.
- **Urban:** after the "Great Stink" of the hot summer of 1858, when the River Thames, which carried
  London's sewage, smelled so foul it earned that name, London built new sewers to carry waste away from the city (Topic 5.9 has the crisis).

**A government reforms to head off its critics.** In Germany, Otto von Bismarck, the chancellor, banned
the socialists in 1878, and then gave workers sickness insurance (1883), accident insurance (1884) and
old-age and disability pensions (1889), partly to win workers away from the socialists. Reform could be a
response to workers, and a weapon against their parties.

**Part 4: beyond Europe, a different pressure.**

**The pressure from outside.** For the Ottoman Empire and Qing China, the pressure came less from their
own factories than from the industrial powers: their armies, warships and trade. Like Egypt and Japan in
Topic 5.6, both governments tried to reform and modernize their economies and armies. Both met resistance
from inside.

**The Ottoman Empire.** Sultan Selim III built a new European-style army in the 1790s, the "New Order";
the Janissaries, the old army corps, and conservative religious scholars opposed it, and a revolt
overthrew him in 1807. In 1826 Sultan
Mahmud II destroyed the Janissaries. In 1839 the government announced the Tanzimat ("reorganization"):
promises of security of life, honor and property for all subjects, fair taxes and regular military
service; a decree of 1856 promised equality to non-Muslim subjects. The state built factories (a fez factory in
Istanbul, 1835) and telegraph lines (from 1855). Many Muslims resented the 1856 promise of equality,
which ended their place as the ruling community. In 1876 the empire got a constitution and a parliament, and in 1878 the new
sultan, Abdulhamid II, shut the parliament down.

**Qing China.** After defeats by Britain and France in the Opium Wars (Unit 6) and the Taiping
Rebellion, officials such as Zeng Guofan and Li Hongzhang led the Self-Strengthening Movement from the
1860s: arsenals such as the Jiangnan Arsenal in Shanghai (1865), a navy yard at Fuzhou (1866), a school
for foreign languages (1862), and a steamship company (1872). In 1867 the court's plan to teach Western
astronomy and mathematics at the language school met fierce opposition from Woren, a Grand Secretary and the
emperor's tutor, who wrote that "establishing a country rests on valuing propriety and righteousness, not
on schemes and stratagems" (Huters's translation). The court overruled him, but few of the well-educated
young officials it hoped for applied. The officials who led self-strengthening
borrowed machines and kept the old system of rule, and much depended on a few provincial leaders. In
1894 and 1895 Japan defeated China's new navy. In 1898 the young Guangxu Emperor ordered sweeping reforms
for about a hundred days, until the Empress Dowager Cixi and court conservatives stopped them, held him
under guard and had six reformers executed.

**What the calls for change changed, and what they did not.** By 1900, workers in industrial states could
form unions, many men could vote, children worked less and went to school more, and socialist parties
were among the largest in Europe. But many workers stayed poor, women could not vote, and Marx's
revolution had not come. In the Ottoman Empire and China, reformers built arsenals, schools and factories,
but resistance from inside slowed or reversed the deepest changes.

**So, what caused calls for change in industrial societies, and what were their effects?** The changes
industrial capitalism brought, long hours, low pay and crowded cities, and discontent with who held power,
caused workers to organize unions and parties and thinkers such as Marx to imagine a different society;
those calls pushed governments, organizations and individuals into political, social, educational and
urban reforms. The power of the industrial states caused the Ottoman and Qing governments to reform their
armies and economies, against resistance from their own elites.

**And it hands on a turn.** Industry had changed who worked, where people lived and how families got by.
What kind of society did it leave behind: who was middle class, who was working class, and what happened
to the cities? That is Topic 5.9.

## 4. The spine

**Industrial capitalism, and the power of industrial states, caused people to call for change: workers
organized unions and parties, Marx and other socialists imagined a different society, and governments,
organizations and individuals pushed political, social, educational and urban reforms; outside Europe,
the Ottoman and Qing governments tried to modernize their armies and economies, and met resistance from
their own elites.**

The story map's spine ("Workers organized, reformers pushed laws, Marx and the socialists imagined
another society, and governments in the Ottoman Empire and Qing China tried to modernize against
resistance at home") is kept in substance; the build adds the causes, because the reasoning move is
Causation, and the CED's "governments, organizations, and individuals."

"Workers organized unions and parties" is KC-5.1.V.A; "Marx and other socialists imagined a different
society" is KC-5.3.IV.A.ii; "governments, organizations and individuals pushed ... reforms" is
KC-5.1.V.D; "the Ottoman and Qing governments tried to modernize ... and met resistance" is KC-5.1.V.B.

Shorter for the wall: **Workers organized. Thinkers imagined. Governments reformed. Old empires
modernized, and met resistance.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Engels on Manchester (1845) and Whellan's Manchester directory (1852 in the CED; the readable copy is 1853) | Sample activity; skill 2.B | The **pressure**, and why two sources on one city disagree (point of view, purpose, audience). |
| Combination Acts, 1799 and 1800; repeal, 1824; the 1825 act; Tolpuddle, 1834 | KC-5.1.V.A ("workers organized themselves") | Organizing began as a **crime**. |
| The Trades Union Congress, 1868; the 1871 act; the ten-hour day, 1847 | KC-5.1.V.A ("often in labor unions, to improve working conditions, limit hours, and gain higher wages") | **Unions** and what they wanted. |
| The Chartists, 1838 to 1848; the Kennington Common meeting, 10 April 1848 | KC-5.1.V.A ("workers' movements") | A **workers' movement** for political change. |
| Britain's Labour Party (1900, named 1906); Germany's SPD (1875, 1890); the AFL (1886) | KC-5.1.V.A ("political parties emerged in different areas") | **Parties** in different countries. |
| Owen and the word "socialism"; *The Communist Manifesto* (1848), in its own words; *Capital* (1867) | KC-5.3.IV.A.ii | The **ideas**, and what Marx meant by communism. |
| The SPD's Marxist program (1891); the Second International (1889) and May Day | KC-5.3.IV.A.ii; KC-5.1.V.A | What the ideas **did** by 1900. |
| Reform Acts 1867 and 1884; Factory Act 1833 and Mines Act 1842; Education Acts 1870 and 1880; London's sewers after 1858 | KC-5.1.V.D ("political, social, educational, and urban reforms") | **Four kinds** of reform. |
| Bismarck's ban (1878) and insurance laws (1883, 1884, 1889) | KC-5.1.V.D ("some governments ... promoted") | A **government** reforming to undercut its critics. |
| Selim III's New Order and 1807; 1826; the Tanzimat, 1839 and 1856; the 1876 constitution and 1878 | KC-5.1.V.B (Ottoman Empire) | Reform **and resistance**. |
| Self-Strengthening: Jiangnan (1865), Fuzhou (1866), the language school (1862); Woren, 1867; 1895; the Hundred Days, 1898 | KC-5.1.V.B (Qing China) | Reform **and resistance**. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.7: why does the CED say living standards rose "for some"? (Many city workers stayed poor;
       growers far away did not share the gains.)
   (b) From 5.3: what changed for workers when spinning moved into the factory? (Everyone came to one
       building, at the hours the mill set, under an overseer.)
   (c) From 5.6: why did Muhammad Ali and Japan's leaders build factories? (To build armies to match
       stronger powers.)
   **Bridge:** "Industry made some people rich and left many working long hours for little, and it made
   some countries strong enough to push others around. Who called for change, and what did they get?"
3. **Topic question on screen, over a real historical scene (Kennington Common, 1848):** Why did people
   in industrial societies call for change, and what did their calls change?
4. **First & 10.**
5. **One city, two pictures:** Engels and the 1852 directory (the pressure, and the skill, 2.B).
6. **At first, a crime:** 1799 to 1834 (KC-5.1.V.A).
7. **Unions and the Charter:** 1838 to 1871, the Kennington Common picture (KC-5.1.V.A).
8. **Parties in different countries:** Britain, Germany, the United States (KC-5.1.V.A).
9. **New ideas:** Owen and socialism; Marx and Engels in their own words (KC-5.3.IV.A.ii).
10. **Socialism and communism:** what each word meant, and what the ideas did by 1900 (KC-5.3.IV.A.ii).
11. **Checkpoint 1.**
12. **The skill (2.B): sourcing a source**, modeled on a neutral everyday case.
13. **Four kinds of reform** (KC-5.1.V.D).
14. **A government reforms:** Bismarck (KC-5.1.V.D).
15. **Skill Builder:** Engels and the directory (2.B).
16. **A different pressure:** the industrial powers and the old empires (KC-5.1.V.B).
17. **The Ottoman Empire:** reform and resistance (KC-5.1.V.B).
18. **Qing China:** reform and resistance (KC-5.1.V.B).
19. **Myths.**
20. **Retelling slide** (section 7).
21. **AP synthesis:** the objective answered in a sentence, then the hand-off to 5.9.
22. **Evidence Lab** (optional).
23. **Checkpoint 2.**
24. **Landing, over a real historical scene.**

## 7. Retelling slide

A causal table, one row per call for change, so a student can redraw it from memory:

| Who called for change | The pressure (cause) | What they wanted | What happened (effect) |
|---|---|---|---|
| **Workers** | Long hours, low pay, no vote | Unions, shorter hours, higher wages, the vote | Unions legal by 1871; Labour (1900) and the SPD; the Charter refused |
| **Thinkers** | Discontent with who held power | A society without private owners (socialism, communism) | Marx's ideas shaped workers' parties; no revolution by 1900 |
| **Reformers and governments** | Factory and city conditions; workers' pressure | Laws on votes, work, schools, cities | Reform Acts, Factory Acts, Education Acts, sewers, Bismarck's insurance |
| **Ottoman and Qing courts** | Industrial powers' armies and trade | Modern armies, factories, schools | Arsenals and reforms, resisted from inside; 1878 and 1898 |

Result line: **Workers organized. Thinkers imagined. Governments reformed. Old empires modernized, and
met resistance.**

Why this shape: the reasoning move is Causation. Each row is cause, call, effect; reading down the first
three rows shows the calls feeding each other (workers' discontent, Marx's ideas, and governments'
answers), and the fourth row shows the same pattern with a different cause.

## 8. Owns / bridge-only (from the unit story map)

- **5.8 owns:** KC-5.1.V.D (reforms by governments, organizations and individuals), KC-5.1.V.A (unions,
  workers' movements and parties), KC-5.3.IV.A.ii (Marx, socialism and communism) and KC-5.1.V.B (Ottoman
  and Qing reform and its resistance).
- **Bridge only:** the factory system (5.3), named as what workers reacted to. "For some" (5.7): the
  hand-off in. Muhammad Ali's Egypt and Meiji Japan (5.6): named as the comparison for the Ottoman and
  Qing reforms, not retaught. Classes, women's work and the urban crisis (5.9): Manchester's conditions
  named as the pressure, one sentence, and the Great Stink named as the occasion for London's sewers, not
  taught as a crisis. Abolition (5.1, KC-5.3.I.C): not taught; one clause in the deep reading only. The
  Opium Wars and the Taiping Rebellion (Unit 6): named as causes of Qing reform, not taught. Communist
  states (Unit 7): named as the later story.
- **Story map change:** none to ownership. The spine adds the causes, because the reasoning move is
  Causation, and the CED's "governments, organizations, and individuals." Unit-wide conflict 2
  (BeInTheRoom's invented codes) and conflict 3 (the title) are fixed for 5.8.
- **Hands to 5.9:** "Industry had changed who worked, where people lived and how families got by. What
  kind of society did it leave behind?" (The story map gives 5.8 no hand-off line; this one points at
  5.9's spine.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-8-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Quotations: the two *Manifesto* passages from the 1888 English translation (Samuel Moore, edited by
  Engels), word for word, with "Working Men of All Countries, Unite!" and not the later "Workers of the
  world, unite!"; Engels's Manchester passages from the 1887 translation; the 1852 directory's own words
  only if a scan can be read; Woren's memorial only in a published translation.
- Dates: 1799, 1800, 1824, 1825, 1834 (Tolpuddle); 1838, 1839, 1842, 1848 (the Chartists); 1847 (ten
  hours); 1868, 1871 (unions); 1875, 1878, 1890, 1891 (the SPD); 1886 (the AFL); 1889 (the Second
  International); 1900, 1906 (Labour); 1845, 1848, 1867 (Engels, Marx); 1833, 1842, 1867, 1870, 1880,
  1884 (British reforms); 1858 (the Great Stink); 1883, 1884, 1889 (Bismarck's insurance); 1789 to 1807,
  1826, 1839, 1856, 1876, 1878 (Ottoman); 1861, 1862, 1865, 1866, 1867, 1872, 1894 to 1895, 1898 (Qing).
- Superlatives and single causes to keep out: "the first trade unions"; "unions became legal in 1824";
  "the SPD was the largest party" (in votes in 1890, not seats until 1912); "Bismarck invented the
  welfare state"; "the Tanzimat failed"; "Cixi spent the navy's money on the Summer Palace, and that is
  why China lost in 1895" (a popular story; historians treat it with care); "Marx invented socialism";
  "Marx's communism was tried in the 1800s."
- Causal links stated with care: why unions grew; Bismarck's motive (partly to weaken the socialists);
  why the Ottoman and Qing governments reformed (outside pressure) and who resisted (Janissaries and
  ulema; Woren and court conservatives; Cixi in 1898).

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Candidates found while drafting (Library of Congress records opened;
Wikimedia Commons answered HTTP 429 to this session, as it did for 5.6 and 5.7):

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | William Edward Kilburn, daguerreotype of the Chartist meeting on Kennington Common, 10 April 1848 (in the repo, mirrored from Commons) | The question: a crowd of working people calling for change. | Royal Collection (RCIN 2932482 is its pair): bought by Prince Albert in 1848; not commissioned by him. |
| 7 | "The National Convention. As it met on Monday the 4th of February, 1839, at the British Coffee House," etching, about 1839 (LoC 2004669356) | The Chartists' convention. | A print, not a photograph; LoC's record is from a shelflist card. |
| 9 | *The Communist Manifesto* (1848), as text | The idea in its own words. | Quote the 1888 translation. |
| 13 | "Capital and Labour," Punch, 1843 (in the repo) | Who gains and who works, the pressure behind reform. | A satirical cartoon; its date against the Mines Act of 1842. |
| 17 | Abdullah Frères, interior of the Imperial Fez Factory, Istanbul, 1880 to 1893 (LoC 2003675899); students of the Imperial School of Military Engineering, 1880 to 1893 (LoC 2002712221) | Ottoman factories and a modern army school. | Photographed for Abdulhamid II's albums: a sultan's picture of his own reforms. |
| 18 | Liang Shitai (See Tay), Ulysses S. Grant and Li Hongzhang, Tianjin, 1879 (LoC 2016647812) | The leading self-strengthener. | Grant was a visiting former president, not an adviser. |
| 20 | The retelling table (template) | | |
| 24 | The Imperial School of Military Engineering photograph, or the fez factory | Landing: the reformed empire's own picture of itself. | Same as beat 17. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page takes the CED's title, "Reactions to the Industrial Economy from 1750 to 1900."
   The reading's title is "Calls for Change," on the reading, both lesson files, the deck and Canvas. The
   file names keep the old slug, as 5.5 to 5.7's did, so no link breaks.
2. **Skill Builder skill:** moves to the CED's suggested skill, 2.B, "Explain the point of view, purpose,
   historical situation, and/or audience of a source": who made it, why, for whom, in what situation, and
   how that shapes what it says. Modeled on a neutral everyday example, then practiced on the CED's own
   sample activity, Engels's Manchester and the 1852 directory.
3. **Learning targets:** four, one per Key Concept. Target 1, why workers organized unions, movements and
   parties, and what they wanted (KC-5.1.V.A); Target 2, how discontent encouraged new ideas, including
   Marx's (KC-5.3.IV.A.ii); Target 3, how governments, organizations and individuals pushed reforms of four
   kinds (KC-5.1.V.D); Target 4, why the Ottoman and Qing governments tried to modernize and who resisted
   (KC-5.1.V.B). Checkpoint 1 assesses Targets 1 and 2; Checkpoint 2 assesses Targets 3 and 4 and the
   learning objective (causes and effects) and declares Causation.
4. **Primary Source:** *The Communist Manifesto* (1848), three short passages from the 1888 English
   translation, with three sourcing questions (2.B). It replaces the Haymarket "adapted excerpt."
5. **Map module:** "Calls for Change, 1824 to 1898," a map with Britain, Germany, the Ottoman Empire and
   Qing China shaded, and the pressures and reforms in the key. It replaces the old map with its 1905 and
   Unit 6 entries.
6. **Evidence Lab:** real objects (the Kennington Common daguerreotype, the 1839 Convention etching, the
   1843 Punch cartoon, the fez factory and the engineering students, the Grant and Li photograph) and a
   text card from the Gülhane decree of 1839 if a published translation can be quoted; never an AI
   picture.
7. **BeSurreal:** a fifteen-year-old piecer in a Manchester cotton mill in April 1848, the week of the
   Kennington Common meeting, writing to a cousin about what the workers in the mill want and what they
   think will happen. It replaces the 1877 Martinsburg brakeman.
8. **BeInTheRoom:** "The Pullman Strike Hearing" (an American mediation in July 1894 that did not happen
   in that form, with invented Key Concept codes) is replaced by "The Tongwen Guan Debate": Beijing,
   1867, officials of the Qing court deciding whether to teach Western astronomy and mathematics at the
   language school, with the arsenals, the Opium Wars, Japan and Woren's objections in the evidence. The
   old file is removed (it stays in git history) and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8, chosen under Jeff's rule of 2026-10-23): 02 First & 10, 06 Checkpoint
    1, 10 Checkpoint 2, and 05 Skill Builder, which practices the CED's suggested skill for 5.8 (2.B) on
    the CED's own sample activity.
