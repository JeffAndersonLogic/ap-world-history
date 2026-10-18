# Topic 4.8 Story Draft: Continuity and Change from 1450 to 1750

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "Build 4.8" on 2026-10-18. Topic 4.7 is on `main` (`856a226`, with
`db86eb0` and `2214427` on top) and 4.8 is the last topic in the unit. The Phase 9 reviewers check
this story against the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-8-CLAIM-LEDGER.md`, under "Review findings".

**Resume here (2026-10-18):** Phases 0 to 8 built and pushed. Review pass 1 done (16 findings: 14 fixed, 2 rejected with reasons, logged in the claim ledger). Pass 2 (two fresh reviewers, packet captured after the pass 1 fixes) is running; next, fix and log its findings, then pass 3 if needed. The reading fingerprint has not moved yet (`readings-golden.js` fails by design until it does).

**Taught:** Green Tuesday 2026-11-17, Silver Wednesday 2026-11-18, from Jeff's corrected November
Canvas calendar (2026-10-14), already in `assets/data/announcements-schedule.js` as date-only
entries. The Era 3 Study Guide Work Day follows on 2026-11-19 and 2026-11-20, and the Era 3 Exam
on 2026-11-23 and 2026-11-24.

**Branch baseline:** `claude/build-4-8-apfzzg`, the branch this session was given, from `main` at
`2214427`. (The build-topic skill names a topic branch `claude/topic-X-Y-build`; this session's
instructions name the branch, so the work is here and the report says so.) No other branch with
commits not on `main` touches 4.8 or the shared Unit 4 files.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, pp. 90 and 91 (topic pages), p. 75 (Unit at a Glance) and p. 77
(sample activity). This draft quotes that file and nothing else for what the CED requires. The unit
story map (`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-off and the
owns / bridge-only split; it agrees with the source file on 4.8.

---

## 1. What the CED requires (pp. 90 to 91)

One learning objective, with no thematic focus printed.

- **Learning objective N:** Explain how economic developments from 1450 to 1750 affected social structures over time.

Key Concepts. The CED prints these on the 4.8 pages as "Review: Unit 4 Key Concepts"; they are not
new content, they are the unit's big statements, gathered for the argument:

- **KC-4.1** (LO N): The interconnection of the Eastern and Western Hemispheres, made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.
- **KC-4.1.II** (LO N): Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.
- **KC-4.1.II.A** (LO N): The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.
- **KC-4.2** (LO N): Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes.
- **KC-4.2.II** (LO N): The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified.
- **KC-4.3** (LO N): Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.
- **KC-4.3.III.ii** (LO N): Economic disputes led to rivalries and conflict between states.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 4.8 (p. 75). The
  objective asks how economic developments "affected social structures over time," so the whole
  topic is one continuity-and-change argument with a cause inside it: name the economic
  development, follow it to the workers it needed, and say what that did to who worked, who ruled
  and how families lived, and what it left alone. The answer this story builds is that **the new
  global economy changed social structures most where it needed new workers by force, and least
  where the old ways of working could simply produce more.**
- **Suggested skill:** 6.C Argumentation, "Use historical reasoning to explain relationships among
  pieces of historical evidence." In this topic that means not listing evidence but connecting it:
  this piece **led to** that one (a chain of causes across places), these two show **the same
  pattern** in two places, and this one shows the **opposite**, a continuity beside a change. The
  CED's own sample activity is the same move at essay length: decide which reasoning process best
  organizes an answer to "Develop an argument that explains how economic developments led to changes
  in social structures in the period 1450–1750," write a thesis that uses it, and revise it with a
  partner.
- **Thematic focus:** none printed on the topic page (the CED gives the 4.8 pages no theme).
- **Illustrative examples:** none. The CED gives 4.8 no illustrative examples; its evidence is the
  unit's. Every case in this story was already taught in Topics 4.1 to 4.7, except one new primary
  source, Richard Ligon's account of Barbados (1657), chosen because it shows one economic
  development reshaping a whole society in the words of a man who watched it happen.
- **Sample activity (p. 77, optional):** "Self/Peer Revision": pairs discuss the prompt above, decide
  which reasoning process best organizes a response, each writes a thesis that uses it, and they
  exchange and revise paragraph by paragraph. This build takes the move: the deck asks which reasoning
  process fits (Continuity and Change, with causes inside it), models a thesis and sharpens it, and
  Checkpoint 2 asks for the thesis and a short argument; the Skill Builder practices the 6.C move
  that the argument's body paragraphs need.

**Five things in these sentences that are easy to drop.**
1. **"Economic developments ... affected social structures."** Not trade for its own sake. The old
   4.8 asked about trade routes and commodities; the objective asks what trade did to people. Every
   case must end at a social structure: who was free or forced, who rose, how families worked.
2. **"Continued to be heavily centered on agriculture."** The first clause of KC-4.2 is a continuity.
   Most people in 1750, as in 1450, were farmers. A 4.8 answer that is all ships and silver forgets
   most of the world's people.
3. **"Traditional peasant agriculture increased and changed in nature."** Old work did not vanish; it
   grew and changed. Peasants and artisans did the same kind of work, more of it, for buyers farther
   away. That is a change and a continuity in one sentence.
4. **"Shaping and being shaped."** Empires did not only change the peoples they ruled; the peoples
   changed the empires. Spain's colonies had to invent new categories for the mixed society that grew
   up in them, and the Chinese merchants of Manila were the reason the city worked.
5. **"Economic disputes led to rivalries and conflict."** The money was worth fighting over. It is a
   review Key Concept, so it appears in the story as part of the economic picture, not as a new topic.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-8-continuity-and-change.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-4.js`, the deep reading `scripts/lib/deep-reading-content/topic-4-8.js`,
the map spec `topic-4-8` in `scripts/lib/instructional-map-specs.js`, the CED and coherence contracts,
the deep audit, the unit story map, the First & 10 readings for 4.1 to 4.7 (what students have
already been taught), and the 4.7 audit record and claim ledger.

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and all seven review Key Concepts
  in the CED's wording (corrected 2026-10-11).
- The three learning targets and success criteria point at Learning Objective N, as the contract
  requires (`targetCodes: ['Unit 4: Learning Objective N']`).
- The targets, criteria, lecture and checkpoints were rebuilt around LO N on 2026-09-18 (the deep
  audit's repair), and they ask about economic developments and social structures.
- What 4.1 to 4.7 teach agrees with this story, and this story uses their wording: the 1500s against
  1701 to 1750 slave-trade estimates (4.4), "about two of every three" captives male (4.5), the
  Single Whip and silver to China (4.5), peasant and artisan labor (4.5), the casta ranking (4.7).

**Out of line, each fixed inside this build:**
1. **The map, the Evidence Lab, the Primary Source and the BeSurreal are about trade, not society
   (story map conflict 9).** The map is "The World at c. 1700: Change and Continuity" in trade
   networks; its question asks for "one specific change and one specific continuity in global trade
   networks." The Evidence Lab's five cards are trade maps, the Waldseemüller map and the VOC
   charter, two of them labeled "secondary baseline evidence." The Primary Source and the BeSurreal
   are both the Manila silk-for-silver trade, which is 4.5's (and 4.5's own Primary Source is
   Antonio de Morga on the Chinese trade at Manila). All four are rebuilt around social structures.
2. **The Primary Source is not a source.** "A Spanish Account of Manila Trade, c. 1590" is "adapted"
   from "a report to the Spanish crown by a colonial official," with no author, title or translator,
   and reads as written for the lesson. It is replaced with a real source in a public-domain text.
3. **The First & 10 is a summary, not a story.** Four short sections of abstract claims ("changed who
   needed labor, who controlled revenue, and who could convert economic advantage into political or
   social privilege") with no case a ninth grader can picture; twenty vocabulary chips, most never
   used in the text ("Global Price Revolution", "Demographic Collapse", "Silk Roads"); a stray
   `builderBody` (the AI Coach builder was retired 2026-08-31); question badges for Causation,
   Continuity & Change and Argumentation where the CED's reasoning process is Continuity and Change and
   its skill is Argumentation; "&amp;" written into a skill tag. It is rewritten from this story.
4. **The CED's review Key Concepts on technology and rivalry have no surface.** KC-4.1.II, II.A and
   KC-4.3.III.ii are listed but taught nowhere on the page. The deck must band every one of the
   seven, so the story gives each a short beat as the start of the economic chain.
5. **Leftovers:** `first10.note` (lesson data and renderer config) says "build your AI Coach prompt";
   the BeInTheRoom description offers three scenarios that do not exist ("debate the global price
   revolution with a Spanish royal treasurer in Seville", "an AP World History student with a time
   machine"); the Evidence Lab's unrendered `items` describe "Manila Galleon cargo manifest" records
   and "Dutch VOC records from the 1640s" with no source; the lecture intro speaks of "Topic 4.8 is not
   a general review."
6. **Pictures from other topics with no 4.8 job (`stableImages`):** the 1700 world map, the
   Waldseemüller map, the VOC logo, the casta collage, the Florentine Codex smallpox page, Columbus
   taking possession, a Persian astrolabe, a 1936 Pueblo Revolt mural, da Gama's pillar and Magellan's
   portrait. Lecture card 3's picture is a modern world map captioned as evidence of continuity; card
   2's is the casta collage (a modern assembly of a painting set).
7. **Material outside 1450 to 1750:** the deep reading's "Where Unit 5 Begins" section (story map
   conflict 4), which teaches Unit 5. It leaves; the hand-off is one line.
8. **Title:** the lesson reads "Continuity and Change in the Period from c. 1450 to c. 1750"; the CED's
   title is "Continuity and Change from 1450 to 1750". Here the date range is the topic, so the lesson
   takes the CED's title exactly.
9. **Claims flagged for the ledger:** "Manila Galleon ... one or two galleons per year, each carrying
   hundreds of tons of silver" (Evidence Lab items, not rendered); "perhaps 20,000 of your countrymen"
   in the Parian (BeSurreal); "potato ... first brought to Spain c. 1570" and its "rapid spread" in
   Ireland, Germany and the Low Countries in the 1600s (Evidence Lab items). Each leaves with its
   surface; none is carried into the story.
10. **BeInTheRoom:** none exists for 4.8, and the Unit 4 coherence contract records `beInTheRoom:
    null`. The module shows its "coming soon" placeholder. This build does not write a scenario (see
    section 11, call 8).

## 3. The ninth-grade story

Last topic ended with a question. Trade, work, and the ladder itself all moved between 1450 and
1750. Which change mattered most, and what stayed the same?

**Today you are the historian.** This topic gives you no new empire and no new war. It gives you a
question, and you already have the evidence from Topics 4.1 to 4.7. The question is the College
Board's: how did economic developments between 1450 and 1750 change social structures, meaning who
did the work, who ruled and rose, and how families and communities lived? And how much stayed the
same? Your job is to answer it with an argument, and the trick is to follow the trade all the way to
the people.

**First, the road (4.1).** None of it could happen until ships could cross an ocean and come back.
Europe built those ships from borrowed knowledge: the compass from China; the astrolabe, a Greek
idea that astronomers in the Islamic world made precise; tables of the sky first built by Muslim and
Jewish astronomers; and the triangular lateen sail, common across the Mediterranean and the seas of
the Islamic world. It built new ships around them, the caravel and the carrack, and around 1600 the
Dutch fluyt, which carried a large cargo with a small, cheap crew and made shipping goods much
cheaper. And its sailors learned the Atlantic's winds, swinging far out to sea to catch a wind that
blew them home. Once ships went and came back again and again, the two halves of
the world were joined, and trade was transformed.

**Second, the money (4.3 to 4.5).** Three economic developments came down that road. **New demand:**
Europe wanted sugar and tobacco grown on American plantations; buyers in Asia, Africa and Europe wanted
Indian cotton cloth and Chinese silk. **Silver:** from 1545 the mountain at Potosí, and Zacatecas in
Mexico, poured out silver, and a large share of it ended up in China, where the government collected most of its
taxes in silver. **Rulers' tools:** kings used mercantilist laws and chartered companies like the VOC to
pull that wealth toward themselves. And rivals fought over it. Economic disputes turned into wars: off
Diu in India in 1509, at Tondibi in West Africa in 1591, on the spice island of Ambon in 1623, and in
three wars at sea between England and the Dutch Republic from 1652 to 1674.

**Third, the workers (KC-4.2.II).** All that demand meant someone had to grow more, mine more and make
more. The demand for labor intensified, and it was met in three ways.
- **Plantations and the slave trade.** Sugar needed enormous numbers of workers, and planters chose
  enslaved Africans. In the whole 1500s, historians estimate, fewer than 300,000 Africans were forced
  onto ships for the Americas; in the fifty years from 1701 to 1750, more than 2.5 million were (4.4).
- **Old forced labor, put to new work.** Spain turned the Inca mit'a into a draft that sent thousands of
  Andean men each year to the silver mine at Potosí (4.4).
- **Peasants and artisans, working more.** In western Europe, families spun and wove wool and linen at
  home for merchants; in India, weavers made more cotton cloth for the European companies; in China,
  peasant families raised silkworms and wove silk, some of it traded for American silver, and needed
  silver to pay most of their taxes (4.5). The work was old. There was more of it, for buyers farther
  away.

**Fourth, what it did to society: the changes.**
- **A society built on slavery.** In September 1647 an Englishman named Richard Ligon landed on
  Barbados, a small English island in the Caribbean. He found that planters there had only just begun to
  make sugar, with cane plants brought from Brazil. He lived on a sugar plantation that his companion Thomas Modyford had bought a half share of, helped run it, and stayed three
  years. In the book he published in 1657 he wrote that "the Island is divided into three sorts of men,
  viz. Masters, Servants, and slaves." The servants were mostly poor people from Britain and Ireland who
  worked for a set number of years; "the slaves and their posterity," he wrote, were "subject to their
  Masters for ever." And sugar made the masters rich: one planter, James Drax, had come with "a stock not
  exceeding 300 l. sterling" (300 pounds) and had raised a fortune, "all by this plant of Sugar." Within a
  few decades, enslaved Africans far outnumbered everyone else; in 1679 a count of the island found about
  37,700 enslaved people and about 20,000 white settlers. Sugar made a new kind of society: a small,
  rich planter elite on top, and a huge enslaved majority at the bottom, held in slavery for life and by
  inheritance, and marked by race (4.4).
- **Ranked by ancestry.** In Spanish America, the silver and the plantations sat on top of a mixed
  society of Spaniards, Indigenous peoples and Africans and their children. Spanish colonial society
  ranked people by ancestry, the casta system, and silver, land and trade made many creole families rich,
  a new economic elite (4.7). The empire shaped the people, and the people shaped the empire: New categories
  grew up for the mixed society in its colonies.
- **Families and states in Africa.** About two of every three people carried away in the Atlantic slave
  trade were male. In parts of Africa, especially West Central Africa, that left villages with more women
  than men, and historians argue women did more of the farming and more women and girls were enslaved
  inside Africa itself (4.5). The same trade made some African states stronger: Asante rose on gold and
  guns bought from Dutch and English traders (4.4). And it could tear a kingdom apart: in 1526 Afonso I
  of Kongo complained that Portuguese traders were carrying off "the children of our nobles and vassals"
  (4.4).

**Fifth, what stayed: the continuities.**
- **Most people still farmed.** In 1750, as in 1450, most of the world's people grew food. The College
  Board's own sentence begins with this: the world's "productive systems continued to be heavily
  centered on agriculture."
- **The same kind of work, more of it.** A spinner in Holland, a weaver in Gujarat and a silk family in
  China did work their grandparents would have known, at home, as a family, with women and girls doing
  much of the spinning and weaving. Global demand made them work more; it did not replace them.
- **The ladder.** Hereditary rulers stayed on top almost everywhere, and old nobles kept most of their
  privileges even when stronger kings squeezed them (4.7). Older forms of slavery went on in Africa, and
  Asian merchants kept the Indian Ocean trading (4.4).

**The argument (the skill).** A list of evidence is not an argument. An argument explains how the pieces
of evidence relate. Three relationships do most of the work:
- **This led to that.** Europe's demand for sugar led to plantations in Barbados and Brazil, which led to
  a huge slave trade, which left villages in West Central Africa with more women than men. One chain
  links three continents.
- **The same pattern, two places.** Barbados's masters, servants and slaves and Mexico's casta ranking
  both show a new hierarchy, built in the colonies, that ranked people by ancestry.
- **But not everywhere.** A silk family in China worked more for silver, but it was still a peasant
  family in a village under the same emperor's officials. That contrast is what makes an answer say how
  much changed.

**Put it together, as a thesis.** Between 1450 and 1750, the new global economy changed social structures
most where it needed new workers by force: in the plantation Americas, where it built societies of masters
and slaves ranked by race, and in the parts of Africa the slave trade reached, where it changed families
and made some states stronger. Across most of Afro-Eurasia, older structures continued, because peasants,
artisans, kings and nobles could meet the new demand by producing more in the old ways.

**And it hands on a question.** By 1750 the oceans were joined and states were stronger than ever. Next:
who do those states belong to? That is Unit 5.

## 4. The spine

**Economic change reached into everyday social life: who worked, who ruled, and how families and
communities were organized. Argue how much changed, with evidence.** (Approved with the unit story map,
2026-10-11.)

"Economic change" is the chain KC-4.1, II, II.A and KC-4.3.III.ii describe; "who worked" is KC-4.2.II;
"who ruled" and "how families and communities were organized" are KC-4.2 ("gender and social structures")
and KC-4.3; "argue how much changed, with evidence" is the reasoning move and the skill.

Shorter for the wall: **Follow the trade to the people.**

The thesis students are shown (and may argue against): **the new global economy changed social structures
most where it needed new workers by force, and least where the old ways of working could simply produce
more.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | Taught in | What it proves |
|---|---|---|---|
| Borrowed tools (compass, astrolabe, lateen sail); new ships (caravel, carrack, fluyt); the volta do mar | KC-4.1.II, II.A | 4.1 | The road: transoceanic trade became **possible**. The first link of the chain. |
| Ships going and coming back; new demand for sugar, tobacco, cotton cloth, silk; silver from Potosí to China; mercantilism and the VOC | KC-4.1 | 4.3 to 4.5 | The **economic developments** the objective names. |
| Diu 1509, Tondibi 1591, Ambon 1623, the Anglo-Dutch Wars 1652 to 1674 | KC-4.3.III.ii | 4.5 | The money was worth **fighting** over. |
| Slave-trade estimates: fewer than 300,000 in the 1500s; more than 2.5 million in 1701 to 1750 | KC-4.2.II ("the Atlantic slave trade developed and intensified") | 4.4 | **Labor demand intensified**, and the scale of it. |
| The mit'a sent to Potosí | KC-4.2.II | 4.4 | Old forced labor put to new work: **change and continuity at once**. |
| Peasant and artisan work: putting-out in Europe, Indian cotton, Chinese silk and silver taxes | KC-4.2.II ("traditional peasant agriculture increased and changed in nature") | 4.5 | Old work, **more of it**, for faraway buyers. |
| Ligon's Barbados: sugar newly begun in 1647; "three sorts of men"; slaves "for ever", servants for years; Drax's fortune "all by this plant of Sugar"; 1679 count, about 37,700 enslaved and 20,000 white | KC-4.2 ("gender and social structures"); KC-4.2.II ("plantations expanded") | new source; 4.4 for the system | One economic development **remaking a whole society**, in a witness's words. |
| Casta; creoles made rich by silver, land and trade | KC-4.3 ("shaping and being shaped") | 4.7 | A **new hierarchy by ancestry**, and an empire shaped by its peoples. |
| Two of every three captives male; more women than men in parts of West Central Africa; women's farming | KC-4.2 ("gender and social structures") | 4.5 | **Families** changed by the trade. |
| Asante (1701) and Kongo (Afonso's 1526 letter) | KC-4.3 | 4.4 | The trade **strengthened** some African states and **threatened** others. |
| Most people still farmed | KC-4.2 ("continued to be heavily centered on agriculture") | CED | The biggest **continuity**. |
| Hereditary rulers and privileged nobles; older slavery in Africa; Asian merchants in the Indian Ocean | KC-4.3 | 4.4, 4.7 | The ladder and the old networks **stayed**. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.7: name one new elite or one old elite that was squeezed.
   (b) From 4.5: where did much of Potosí's silver end up, and why?
   (c) From 4.4: name one labor system used in the colonial Americas.
   **Bridge:** "4.7 asked: trade, labor and hierarchy all moved; which change mattered most, and what
   stayed the same? Today you answer it, with an argument."
3. **Topic question on screen, over a real historical object:** How did the new global economy change who
   worked, who ruled and how families lived between 1450 and 1750, and how much stayed the same?
4. **The road was built from borrowed knowledge** (KC-4.1.II).
5. **New ships and known winds** (KC-4.1.II.A).
6. **The ocean joined the world and changed trade:** demand, silver, rulers' tools (KC-4.1).
7. **Rivals fought over the money** (KC-4.3.III.ii).
8. **More demand meant more work:** the slave trade, the mit'a, peasants and artisans (KC-4.2.II).
9. **A society built on sugar:** Ligon's Barbados (KC-4.2).
10. **Ranked by ancestry:** casta and the creoles (KC-4.3).
11. **Families and states in Africa** (KC-4.2).
12. **What stayed: most people farmed, the same work, more of it** (KC-4.2).
13. **What stayed: the ladder and the old networks** (KC-4.3).
14. **The skill (6.C): how evidence relates** (led to, same pattern, but).
15. **Practice: connect three pieces of evidence.**
16. **Which reasoning process, and a thesis** (the CED's sample activity): sharpen a weak thesis.
17. **Myths.** "Everything changed after 1492"; "Europe replaced everyone else's trade"; "the slave trade
    was the first slavery"; "the trade only changed the Americas."
18. **Retelling slide** (section 7).
19. **AP synthesis:** answer the learning objective in three sentences, then hand off to Unit 5.
20. **Landing, over a real historical object.**

## 7. Retelling slide

A cause chain with a continuity line underneath, which a student can redraw from memory:

**Ships** (borrowed tools, new ships, known winds) → **demand** (sugar, silver, cloth) → **workers**
(enslaved Africans, drafted Andeans, peasants and artisans working more) → **society** (masters and slaves
ranked by race; casta and rich creoles; African families with more women than men, and stronger and weaker
African states).

**What stayed:** most people still farmed; the same kind of work, more of it; kings and nobles still on top.

Result line: **Follow the trade to the people. It changed the most where it needed workers by force.**

Why this shape: the objective is a continuity-and-change question with a cause inside it ("how economic
developments ... affected social structures over time"). The chain is the cause, the last box is the
change, and the line underneath is the continuity, so a student who can redraw it can write the thesis.
The deck builds it as a cause chain with a continuity line, or as a continuity-and-change slide if the
cause chain template cannot carry the continuity line.

## 8. Owns / bridge-only (from the unit story map)

- **4.8 owns:** the argument, using Unit 4 evidence already taught. It introduces no new required content.
  Its seven Key Concepts are the CED's review concepts for the unit.
- **Bridge only (evidence borrowed, never retaught at length):** every case comes from its own topic and
  is used as a piece of evidence in one or two sentences: the tools and ships (4.1); the Columbian
  Exchange and sugar (4.3); the labor systems, the slave trade, Kongo and Asante (4.4); silver,
  mercantilism, rivalries, peasant and artisan labor, Africa's families (4.5); the 1649 Law Code and
  the Fronde, if named (4.6); casta and the elites (4.7).
- **New to 4.8:** Ligon's Barbados, as one primary source that shows the chain in one place. It is
  evidence for the argument, not a new topic.
- **Not taught:** Unit 5. The deep reading's "Where Unit 5 Begins" section leaves; the hand-off is one
  line.
- **Hands to Unit 5:** "By 1750 the oceans were joined and states were stronger than ever. Next: who do
  those states belong to?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-8-CLAIM-LEDGER.md`)

Most of this story's facts were checked in the 4.1 to 4.7 ledgers, and this ledger cites those rows rather
than checking them again from memory; anything 4.8 says differently from them is a new claim. The new
claims, and the ones most likely to be wrong by the defect classes 4.1 to 4.7 kept finding:

- Ligon: landed in Barbados in September 1647; sugar "but newly practised," with plants from Pernambuco
  ("Fernamlock"), Brazil; stayed about three years; wrote the book in prison (his dedication is dated 12
  July 1653) and published it in London in 1657. Every quotation checked letter for letter against the 1657
  text, with spelling modernized and the modernization said so on the page.
- Barbados numbers: the 1679 census (about 37,700 enslaved, about 20,000 white) needs two sources; the
  servants "mostly from Britain and Ireland"; "within a few decades" enslaved Africans outnumbered everyone
  else.
- Superlatives and single causes to keep out: "the first" anything; "sugar caused slavery"; "everything
  changed"; "Europe dominated world trade by 1750"; "the triangle trade" as a neat triangle (4.5 already
  warns against it).
- Numbers carried from 4.4 and 4.5 stated exactly as those topics state them: "fewer than 300,000"; "more
  than 2.5 million"; "about two of every three."
- Arguments stated as historians' arguments: women's farming and polygyny in West Central Africa; the
  thesis itself, which is shown as one defensible argument, not as the answer.

## 10. Visual requirements per beat

Pictures are checked in Phase 6, and the build records which ones were verified. No image generator key is
set in this environment, so AI pictures are skipped. Because 4.8 argues from the unit's evidence, the first
choice for every beat is a real historical object **already verified for an earlier Unit 4 topic** and
stored in `assets/images/topics/4-*`, carried with the caption and credit its own topic's ledger checked.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 20 | A plantation sugar works, 1660s, or a Potosí silver coin | The trade and the work in one object. | Say what the picture shows and who made it. |
| 4, 5 | The 4.1 pictures (astrolabe at noon, the volta do mar) | The road. | AI reconstructions in 4.1 are labeled; never evidence. |
| 6 | A Potosí silver coin or Manila in the 1660s | Silver around the world. | |
| 7 | The battle of Texel, 1673, painted 1687 | Rivals fight over trade. | Painted years after the battle. |
| 8 | Potosí in Cieza de León's chronicle, 1553 | The mit'a and the mine. | A woodcut made for a book, not a view drawn on the spot. |
| 9 | The sugar works in du Tertre, 1667, or Frans Post's sugar mill | The plantation society. | French Antilles and Dutch Brazil, not Barbados: say so. |
| 10 | The casta painting, about 1715 | The ranking by ancestry. | An ideal, not a census. |
| 11 | Elmina or the canoes at Elmina | Africa in the trade. | European pictures of an African coast. |
| 12 | A Gengzhitu silk loom (1696), an Indian palampore, a Dutch spinner | The same work, more of it. | |
| 18 | The retelling diagram | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** "Continuity and Change from 1450 to 1750," the CED's title exactly (the date range is the
   topic here); the reading's title is "Follow the Trade to the People," on the reading, both lesson files,
   the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 6.C Argumentation, "explain relationships
   among pieces of historical evidence": three relationships (led to, the same pattern, but) modeled on
   the Barbados evidence and practiced on a new set.
3. **Learning targets:** three, all under Learning Objective N as the contract requires, rewritten for a
   ninth grader: the economic developments and the workers they needed; what that did to social
   structures; the argument. Checkpoint 1 assesses targets 1 and 2 (one chain from an economic development
   to a social structure); Checkpoint 2 assesses target 3 (a thesis and a short continuity-and-change
   argument). Checkpoint 2 declares Continuity and Change, the CED's reasoning process.
4. **Primary Source:** Richard Ligon, *A True and Exact History of the Island of Barbados* (London, 1657),
   two short passages, spelling modernized, with three questions: his claim, what Drax's story shows, and
   how his evidence relates to one other piece of Unit 4 evidence (6.C), with his point of view (a
   man who lived on and helped run a sugar plantation). It replaces the unsourced Manila report.
5. **Map module:** rebuilt as one map of the chain's social effects, c. 1450 to 1750: where forced labor
   built new societies, where the trade changed families and states, and where old work grew. The trade
   network map leaves.
6. **Evidence Lab:** the trade maps, the Waldseemüller map and the VOC charter leave; the cards are real
   objects already verified in Unit 4, each tied to a social structure.
7. **BeSurreal:** a woman farming in a village in West Central Africa about 1700, with cassava from the
   Americas in her field, Indian cloth on the market and the men of her village fewer than they were; she
   decides what to tell her daughter about what has changed and what has not. It replaces the Manila silk
   merchant, which is 4.5's material.
8. **BeInTheRoom:** not built. The contract records none for 4.8, the next two class days are a study-guide
   day and the Era 3 exam, and a new scenario would add a large accuracy surface to the last topic before
   the exam. The placeholder shows; the false description of three scenarios is removed. Listed for Jeff.
9. **Deep reading:** rebuilt around this story. "Where Unit 5 Begins" leaves.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2, the
    same set as 4.4 to 4.7. Checkpoint 2 is the argument the whole day builds to.
