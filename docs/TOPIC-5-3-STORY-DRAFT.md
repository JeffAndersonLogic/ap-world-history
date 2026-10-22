# Topic 5.3 Story Draft: Industrial Revolution Begins

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**

**Resume here (2026-10-22):** Phases 0 to 8 are built and pushed. Phase 9: own-pass slide fixes done; review pass 1 (two fresh reviewers, packet from `capture-topic-for-review.js 5.3`) is running. Next: fix and log pass 1's findings in the claim ledger, recapture, pass 2; then move `APPROVED_UNIT5_REWRITE_BLOB`, the strict browser suite in the brand fonts, the topic-audit record.

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day (5.1 and
5.2 are not scheduled either). The build adds no schedule entries; the dates are the one open item in
the report.

**Branch baseline:** `claude/build-5-3-erthgh`, the branch this session was given, from `main` at
`e2adf9d`, which carries the finished 5.2 build. (The build-topic skill names a topic branch
`claude/topic-X-Y-build`; this session's instructions name the branch, so the work is here and the
report says so.) No other branch with commits not on `main` touches 5.3 or the shared Unit 5 files
(`scripts/lib/reading-content/unit-5.js`, `scripts/build-unit5-rooms.js`):
`claude/sleepy-davinci-qw9ccw` adds video clips to 3.3 and 4.1 to 4.8, and
`claude/era-3-study-guide-exam-rvkd76` adds an Era 3 study guide; neither overlaps.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 102 (topic page) and p. 95 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.3 was a proposal; this build follows it except where noted in section 8.

---

## 1. What the CED requires (p. 102)

- **Learning objective D** (Humans and the Environments): Explain how environmental factors contributed to industrialization from 1750 to 1900.

Key Concepts, in the CED's order:

- **KC-5.1.I.A**: A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including: ▪ Proximity to waterways; access to rivers and canals ▪ Geographical distribution of coal, iron, and timber ▪ Urbanization ▪ Improved agricultural productivity ▪ Legal protection of private property ▪ Access to foreign resources ▪ Accumulation of capital
- **KC-5.1.I.C**: The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor.

- **Reasoning move:** Causation, the CED's reasoning process for 5.3 (p. 95). The learning objective
  asks how factors "contributed to" industrialization, which is a causes question by its own words.
  The answer this story builds is that **nature put coal, iron and water close together in Britain,
  but nature alone did not make an industrial revolution: better farms, growing towns, laws that
  protected property, resources from abroad and money to invest made it pay to use them. Together
  they made factories worth building, and the factory then changed how the work itself was done:
  everyone in one place, each worker doing one small job.**
- **Suggested skill:** 1.B Developments and Processes, "Explain a historical concept, development, or
  process." Students explain a process step by step: a factor, how it worked, and what it led to,
  and the factory system as a process that gathered work in one place and split it into parts.
- **Thematic focus:** Humans and the Environments (ENV).
- **Illustrative examples:** none. The CED prints none for 5.3 (`illustrativeExamples: {}`). Every
  example in this story is the build's choice, and the fewest that tell the story well: Coalbrookdale,
  the Bridgewater Canal, Manchester, and Arkwright's mill at Cromford, with Adam Smith's pin workshop
  as the clearest written description of specialization.
- **Sample activity:** none for 5.3.

**Five things in these sentences that are easy to drop.**
1. **"Environmental factors."** The objective is under Humans and the Environments. The answer has to
   say how the land, the rocks and the water *contributed*: what each one made cheaper or possible,
   and not only that Britain "had" them.
2. **"A variety of factors ... including."** All seven. The CED lists two kinds: things in the
   ground and the water (waterways; coal, iron and timber), and things people built (towns, better
   farming, property laws, foreign resources, capital). A 5.3 answer that stops at coal has a single
   cause where the CED gives seven.
3. **"Timber."** Not only coal and iron. Britain had little woodland left by the 1700s; wood was
   dear, and coal took its place. The distribution of timber mattered by its shortage.
4. **"Concentrated production in a single location."** The factory's first change is *where* work
   happens: not in many homes, but in one building, near one source of power.
5. **"An increasing degree of specialization of labor."** Its second change is *how* the work is
   divided: each worker does one step, again and again.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-3-industrial-revolution-begins.js`), the renderer config, the First & 10 entry
in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-3.js`, the BeInTheRoom scenario in
`scripts/build-unit5-rooms.js`, the map `assets/images/instructional-maps/topic-5-3.svg`, the
network atlas entry in `scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, and
the 5.2 First & 10 (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and both Key Concepts in the CED's
  wording (corrected on 2026-10-20 in the 5.1 build).
- Learning Target 1 (the factors, KC-5.1.I.A) and Target 2 (the factory system, KC-5.1.I.C) point at
  the topic's two real Key Concepts. The deep audit (`docs/UNIT-5-DEEP-AUDIT.md`) found the targets
  aligned and warned that "social effects can remain enrichment but should not steal assessment
  space"; the build finds that they do.
- The network atlas says Britain's industrial change "depended on a combination of environment,
  institutions, capital, labor, and global resources. Factories changed how work was organized."
  It agrees with the CED and is left alone.

**Out of line, each fixed inside this build:**
1. **Half the topic teaches what Topics 5.8 and 5.9 own.** Target 2, its success criterion, lecture
   card 3, First & 10 section 4, Checkpoint 2, the Primary Source, BeSurreal and BeInTheRoom all
   teach workers' suffering, child labor, the Luddites, Chartism, the standard-of-living debate and the
   1833 Factory Act. The CED gives reactions and reforms to 5.8 (KC-5.1.V.A, V.D) and the new classes
   and cities to 5.9 (KC-5.1.VI.A to C). Meanwhile **specialization of labor**, half of KC-5.1.I.C, is
   on no target, criterion, checkpoint or question.
2. **The factor list is not the CED's.** Target 1 and Checkpoint 1 list "coal, geography, capital,
   enclosure, political stability, and scientific culture." Political stability and scientific culture
   are not in KC-5.1.I.A; urbanization, timber, legal protection of private property and access to
   foreign resources are missing or folded into other words.
3. **"Uniquely positioned" and "the combination was unique"** (Target 1, criterion 1, the map key,
   the Skill Builder). A superlative stated as a fact. The CED says the factors "contributed"; the
   reasoning move is how, not whether Britain was unique.
4. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation; Checkpoint 2 ends on an argumentation verdict; the Skill Builder teaches necessary
   and sufficient conditions and a "why Britain rather than France, Germany, or China" comparison. The
   CED's reasoning process is Causation and its skill is 1.B, explaining a process.
5. **Steam is taught as 5.3's.** Watt's engine is a vocabulary chip, a lecture card, an Evidence Lab
   card and half of First & 10 section 3. The steam engine and the fossil-fuel revolution are 5.5's
   (KC-5.1.I.B). Arkwright's mill at Cromford, the topic's own factory, ran on water.
6. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "Arkwright's water frame ... In 1771, Arkwright built ... the first true factory" (lecture card 2,
     criterion 2). Earlier mills had factory features: Lombe's silk mill at Derby (patent 1718) and
     Lewis Paul's cotton mills of the 1740s (Clark). Andrew Ure, in 1835, already gave Lombe's mill
     "certain elements of a factory." Narrowed to UNESCO's wording: the Derwent Valley "saw the birth
     of the factory system."
   - "Manchester grew from approximately 25,000 in 1772 to 300,000 by 1850, the fastest sustained
     urban growth in history to that point" (lecture card 3, criterion 2, the reading). The 1773 local
     count was about 23,000; 300,000 by 1850 counts Manchester with Salford; "fastest in history" is
     an unsourced superlative. Removed with the card; the reading uses the 1773 count and the 1801
     census, 70,409.
   - "No equivalent [patent] system existed in France or Germany at this stage" (lecture card 1).
     France passed a patent law in 1791. Removed.
   - "No part of England is more than 70 miles from the sea" (lecture card 1, the reading, its
     takeaway). A popular figure, unneeded once the waterways beat is about rivers and canals.
     Removed.
   - "The Factory Act of 1833 was the first effective legislation" and "made the law enforceable
     for the first time" (lecture card 2, Primary Source intro). Off-topic here (5.8's), and the
     superlative needs care. Removed with the surfaces.
   - "12,000 troops were deployed ... more than Wellington had in Spain" (lecture card 3). A popular
     comparison, off-topic. Removed with the card.
   - "Chartism ... the first mass working-class political movement in history" (lecture card 3).
     Superlative, off-topic. Removed.
   - **The Primary Source is a composite.** "Parliamentary Testimony, Factory Commission (1833) ...
     adapted testimony ... given by a young worker" is not a quotable record: it is unattributed, its
     questions are rewritten, and the classic testimony of this kind (Coulson's, quoted in the lesson
     data) is from Sadler's committee of 1832, not the 1833 commission. Replaced.
   - **BeSurreal**: a Lancashire handloom weaver "of woolen cloth" in 1812 facing a power loom that
     "can produce in a day what takes you a week." Lancashire weavers wove cotton; power looms were
     still rare in 1812 (Clark: over 12,000 in operation by 1820). Replaced.
   - **BeInTheRoom** "The Factory Commission," 1833, a hearing on child labor regulation: a 5.8
     reform scenario whose alignment block names `KC-5.3.I–II` and `KC-5.3.II.A–C` (codes the CED
     gives to the Enlightenment and nationalism) and an objective the CED does not print. Replaced
     with a scenario on 5.3's own question.
   - The 1835 powerloom engraving's Evidence Lab caption says it was "made for a book about the factory
     system." It was published in Edward Baines's *History of the Cotton Manufacture in Great Britain*
     (1835), drawn by Thomas Allom. Corrected.
7. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the reading
   carries a `builderBody`; the BeInTheRoom description in the lesson data offers three scenarios that
   do not exist; `primarySource.text` is an array of answer lines with a stray comma after each
   question (5.1's adjacent finding 2); the reading's `docTitle` and eyebrow differ from 5.2's.
8. **Pictures from other topics (`stableImages`):** the casta painting, the Waldseemüller map, the
   Florentine Codex smallpox page, the VOC logo, the 1700 world map, a Persian astrolabe, Columbus
   taking possession, the Pueblo Revolt mural, Magellan and da Gama's pillar. None has a 5.3 job; all
   leave.
9. **Title:** the lesson reads "The Industrial Revolution Begins"; the CED's title is "Industrial
   Revolution Begins" (story map conflict 3). Kept: "The" changes no meaning, and every Unit 5 file
   and the scenario index use it. See section 11.

## 3. The ninth-grade story

Last topic ended with a turn. The revolutions of 5.2 changed who had the right to rule. But even
before Paris argued about rights, a different revolution had begun in British workshops: a change in
**how things were made**. Why did it begin there, and what did the new kind of workplace change?

**How things were made in 1750.** Almost everything people owned was made by hand. Thread was spun
and cloth was woven in people's homes: under the **putting-out system**, a merchant delivered raw wool
or cotton to families in the countryside, who spun and wove it on their own wheels and looms, and the
merchant came back to collect the work and pay for each piece. Power came from muscles, from horses,
from wind, and from water wheels on streams. Heat came from burning wood, or, in Britain, more and
more from coal. Much of the world's cotton cloth came from India. Over the next century, Britain
built a new way of making things, and it started with what was in its ground and its water.

**What nature gave: coal, iron and timber.** Britain sat on huge beds of **coal**, much of it close to
the surface and close to rivers or the sea, and often near **iron ore**. What it did *not* have was
much **timber**. By the 1600s most of Britain's old forests were gone, so wood was expensive, and much
of the iron Britain used came from Sweden and Russia, where forests were still large. Iron had always
been smelted with charcoal, which is made from wood. So Britons turned to coal: by 1700 coal gave
England about half its energy. In 1709, at Coalbrookdale, beside the River Severn, Abraham Darby
smelted iron with **coke**, a fuel made by baking coal. From then on iron could be made from British coal
instead of scarce wood, and it got better over the next decades. A shortage of wood helped push Britain toward coal.
(Narrowed after review pass 1.)

**What nature gave: water.** Coal is heavy, and before railways, the cheapest way to move something
heavy was by water. Britain had a long coast, rivers that boats could use, and fast streams that could
turn water wheels. Then people improved on nature with **canals**. In 1761 the Duke of Bridgewater's
canal began carrying coal from his mines at Worsley to Manchester, and the price of coal in Manchester
fell by about half. Within decades, canals linked the coalfields, the industrial towns and the ports.

**What people built: food and towns.** Nature is not the whole story. China also had coal, and it did
not have Britain's industrial revolution. Britain's farmers were growing more food on the same land:
they planted turnips and clover instead of leaving fields empty every few years, which fed more
animals, and more animals meant more manure and more grain. Landowners **enclosed** the old shared
village fields into private farms, often by act of Parliament, and could farm them the new way. More
food fed more people: Britain's population grew from about 8 million in 1761 to about 10.5 million in
1801, and a smaller share of them farmed: by 1801 only about a third of English working men worked on the land. Many of the rest lived in towns. **Urbanization** gathered workers in
one place, and gave them neighbors to sell to. Manchester, a town of about 23,000 people in 1773, had
70,409 in the census of 1801.

**What people built: laws, foreign resources and money.** Three more things made it worth the risk to
build something new. **Laws protected private property.** Parliament, where landowners and
merchants sat, passed the laws that enclosed fields and built canals, and since 1624 English law had let
an inventor take out a **patent**, the sole right to use a new invention for up to fourteen years. Arkwright
patented his spinning machine in 1769. **Britain reached resources from abroad.** Cotton does not grow
in Britain's climate. By the 1780s most of the cotton spun in Manchester was grown by enslaved people
on plantations in the Caribbean and South America, and after the 1790s more and more of it came from
plantations in the United States. **Money had been saved up to invest** (the CED calls it the
accumulation of capital). Merchants, bankers and landowners had grown rich from trade, including the
Atlantic trade in enslaved people and the sugar they grew, and some were ready to risk their savings
on mills and machines. Arkwright's partners, Samuel Need and Jedediah Strutt, were stocking-makers who
had grown rich in the hosiery trade, and the partners spent thousands of pounds on machines and mills
before the business made a profit, at a time when a carpenter earned no more than about £36 a year.

**How the factors worked together.** None of these made an industrial revolution by itself. Watch them
combine in one place. The Bridgewater Canal needed coal under the ground at Worsley (nature), water to
float it on (nature, improved), an act of Parliament that allowed the canal to be built (law), the duke's own money and borrowing (capital), and a fast-growing town to sell the coal to
(urbanization). Cheap coal then made Manchester an even better place to build mills. Each factor made
the others pay off.

**The factory: one place.** In 1771, Richard Arkwright and his partners built a cotton-spinning mill at
**Cromford**, in Derbyshire's Derwent valley. A water wheel turned the machines, fed by a brook and by the
Cromford Sough, a tunnel that drained the nearby lead mines and, because its water came from underground,
was said never to freeze. Instead of carrying cotton out to spinners' homes, the mill brought the workers to the
machines: everyone came to one building, at the hours the mill set, under the eye of an overseer.
Cromford needed more workers than the village had, so Arkwright built houses for them; most of his
workers were women and children, some as young as seven. This was the **factory system**: production
concentrated in a single location, around one source of power. UNESCO calls the valley where it grew
the place that "saw the birth of the factory system."

**The factory: one small job each.** Inside a cotton mill, the work was split into steps (Cromford began with spinning machines; Arkwright patented machines for the earlier steps in 1775). Cotton was cleaned, then
**carded** (combed so the fibers lay straight), drawn out, twisted into a loose rope called roving, and
spun into thread, each step on its own machine, each tended by workers who did that job and no other.
This is **specialization of labor**. Adam Smith described its power in 1776 with a pin workshop: ten
men, sharing about eighteen steps (so each did one, two or three), "could make among them upwards of forty-eight
thousand pins in a day," where one man working alone "could scarce ... make one pin in a day, and
certainly could not make twenty." In 1835 Andrew Ure, a writer who admired factories, defined one as
many kinds of workers "tending with assiduous skill a system of productive machines continuously
impelled by a central power." Smaller, simpler jobs could be learned quickly, so the mill could hire
workers with no training, many of them children.

**Myths to drop.** "Britain had coal, so it industrialized": coal was one cause among seven, and China
had coal too. "Cromford was the first factory, and Arkwright invented it all": earlier mills had
factory features, and courts in 1785 struck down Arkwright's patents, partly because the ideas were
others'. "The steam engine started it": Cromford ran on water. Steam power, which began as a pump for
flooded coal mines, is Topic 5.5.

**So, how did environmental factors contribute to industrialization?** Britain's coal, iron and waterways
made fuel, metal, power and transport cheap in the same places, and its shortage of timber pushed it to
use coal. Better farming, growing towns, laws that protected property, cotton from abroad and saved-up
money made it worth building something new on top of them. Together they made factories pay, and the
factory concentrated production in one place and split the work into small, specialized jobs.

**And it hands on a turn.** The new way of making things did not stay in Britain. That is Topic 5.4.

## 4. The spine

**Nature put coal, iron and water close together in Britain, and its shortage of wood pushed it to
coal. People built the rest: better farms, growing towns, laws that protected property, cotton from
abroad and money to invest. Together they made factories pay, and the factory put the work in one
place and split it into small jobs.**

The story map's spine ("Britain had the right mix (coal and iron near water, more food, growing towns,
protected property, capital and foreign resources), and the factory gathered the work under one roof
and split it into pieces") is kept in substance; the build splits the mix into what nature gave and
what people built, because the objective asks how *environmental* factors contributed, and a student
needs to see where the environment's part ends.

"Coal, iron and water" and "shortage of wood" are KC-5.1.I.A's waterways and "coal, iron, and timber";
"better farms" is improved agricultural productivity; "growing towns" is urbanization; "laws that
protected property" is legal protection of private property; "cotton from abroad" is access to foreign
resources; "money to invest" is accumulation of capital; "in one place" and "small jobs" are
KC-5.1.I.C's concentration and specialization.

Shorter for the wall: **Nature gave the fuel and the water. People built the rest. The factory put the
work under one roof.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The putting-out system; hand work at home; power from muscle, wind and water | KC-5.1.I.C (what the factory replaced) | The **before**: production spread across many homes. |
| Coal near the surface and near water; iron ore nearby | KC-5.1.I.A (coal, iron) | The **ground** made fuel and metal cheap in the same places. |
| Little woodland; wood dear; iron imported from Sweden and Russia; coal half of England's energy by 1700 | KC-5.1.I.A (timber) | A **shortage** is an environmental factor too: it pushed Britain to coal. |
| Darby smelts iron with coke at Coalbrookdale, 1709 | KC-5.1.I.A (coal, iron, timber) | Coal **replaces** wood in making iron. |
| Coast, rivers, water wheels; the Bridgewater Canal, 1761; coal price in Manchester halved | KC-5.1.I.A (waterways, rivers and canals) | Water made heavy things **cheap to move**, and turned machines. |
| Turnips and clover; enclosure | KC-5.1.I.A (agricultural productivity) | More **food** from the same land. |
| Britain about 8 million (1761) to about 10.5 million (1801) | KC-5.1.I.A (agricultural productivity, urbanization) | More food fed **more people**, fewer of them farming. |
| Manchester about 23,000 (1773) to 70,409 (1801) | KC-5.1.I.A (urbanization) | **Towns** gathered workers and buyers. |
| Patents since 1624; Arkwright's 1769 patent; enclosure and canal acts | KC-5.1.I.A (legal protection of private property) | The **law** let investors keep what they built. |
| Cotton from slave plantations in the Caribbean and South America by the 1780s, then the United States | KC-5.1.I.A (access to foreign resources) | The factory's raw material came **from abroad**, grown by enslaved people. |
| Atlantic trade profits; Need and Strutt, hosiers; thousands of pounds spent before profit, against a carpenter's £36 a year | KC-5.1.I.A (accumulation of capital) | Saved-up **money** paid for mills before they paid back. |
| The Bridgewater Canal as one case of five factors | KC-5.1.I.A | The factors **worked together**. |
| Cromford, 1771: water-powered; workers come to the machines; houses built; women and children | KC-5.1.I.C (concentrated production in a single location) | The factory's first change: **one place**. |
| Carding, drawing, roving, spinning, each its own machine and workers | KC-5.1.I.C (specialization of labor) | The factory's second change: **one job each**. |
| Smith's pin workshop, 1776; Ure's definition, 1835 | KC-5.1.I.C | Two writers of the time **describe** specialization and the factory. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.2: what three things did a revolution need? (A grievance, the words, a chance.)
   (b) From 5.2: what did those revolutions change? (Who had the right to rule.)
   (c) From Unit 4: name one crop enslaved people grew on Atlantic plantations. (Sugar, tobacco,
   cotton, coffee.)
   **Bridge:** "Those revolutions changed who could rule. Even before Paris argued about rights, a
   different revolution had begun in British workshops: a change in how things were made. And that
   plantation cotton is about to matter. Why did it begin there?"
3. **Topic question on screen, over a cinematic picture:** Why did a new way of making things begin
   in Britain, and what did the factory change?
4. **Before: how things were made in 1750** (KC-5.1.I.C, as the before).
5. **What nature gave: coal, iron and timber** (KC-5.1.I.A).
6. **What nature gave: water** (KC-5.1.I.A).
7. **What people built: food and towns** (KC-5.1.I.A).
8. **What people built: laws, foreign resources and money** (KC-5.1.I.A).
9. **The factors work together: the Bridgewater Canal** (KC-5.1.I.A).
10. **The skill (1.B): explain a process**, modeled on coal near water.
11. **Practice:** one human factor, explained the same way.
12. **The factory: one place** (Cromford, KC-5.1.I.C).
13. **The factory: one job each** (specialization, Smith and Ure, KC-5.1.I.C).
14. **Home and mill compared:** where and how the work was done.
15. **Myths.** "Britain had coal, so it industrialized"; "Cromford was the first factory"; "The steam
    engine started it."
16. **Retelling slide** (section 7).
17. **AP synthesis:** how one environmental factor contributed, in a sentence, then the hand-off to 5.4.
18. **Landing, over a cinematic picture.**

## 7. Retelling slide

An equation a student can redraw from memory, with the factory as its result:

**What nature gave** (coal and iron close together; little timber; rivers, coast and canals) **+ what
people built** (more food and more people; growing towns; laws that protected property; cotton from
abroad; saved-up money) **= industrial production that paid** → **the factory** (one place, one power
source, one small job each).

Result line: **Nature gave the fuel and the water. People built the rest. The factory put the work
under one roof.**

Why this shape: the objective asks how factors contributed, and the reasoning move is Causation. The
factors add up rather than run in a single line, so the parts-that-add-up shape fits them; the factory
is what they produced, and its two changes are KC-5.1.I.C's two halves.

## 8. Owns / bridge-only (from the unit story map)

- **5.3 owns:** the factors behind industrial production, all seven (KC-5.1.I.A); the factory system,
  its concentration of production and its specialization of labor (KC-5.1.I.C).
- **Bridge only:** the steam engine and the fossil-fuel revolution (5.5, KC-5.1.I.B): named once, as
  the pump that drained coal mines and the power that later freed factories from rivers; Watt is not
  taught. The spread of industry beyond Britain and Asia's falling share of manufacturing (5.4, the
  hand-off line, and India's cloth as context only). Adam Smith's free-trade argument (5.7): his pin
  workshop is used here only as evidence of specialization. Workers' lives, the new classes and the
  industrial city (5.9): one sentence, that simple jobs let mills hire untrained workers, many of them
  children. Luddites, unions, Chartism and the Factory Acts (5.8): not taught. Slavery and plantation
  cotton as a cause of imperial expansion (Unit 6): named only as where the cotton came from.
- **Story map change:** none to ownership. The spine splits the mix into nature and people (section 4).
- **Hands to 5.4:** "The new way of making things did not stay in Britain." (The story map's line.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-3-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Quotations checked word for word against the original texts: Adam Smith, *The Wealth of Nations*
  (1776), Book I, chapter 1 (Project Gutenberg text); Andrew Ure, *The Philosophy of Manufactures*
  (1835), pp. 13 to 15 (Internet Archive scan); UNESCO's statement on the Derwent Valley Mills.
- Dates: 1624 (Statute of Monopolies), 1709 (Darby), 1761 (Bridgewater Canal), 1769 (Arkwright's
  patent), 1771 (Cromford), 1773 (Manchester count), 1774 (first profit), 1776 (Smith), 1780s and
  1790s (cotton sources), 1785 (patents struck down), 1801 (census), 1835 (Ure).
- Numbers: about half of England's energy from coal by 1700 (Wrigley); coal price in Manchester
  halved; Britain about 7.8 million in 1761 (Clark) and about 10.5 million in 1801 (census); Manchester
  about 23,000 in 1773 and 70,409 in 1801; thousands of pounds and £36 (Clark; the often-repeated £12,000 is given by different sources for different things, so the story does not use it); forty-eight thousand pins (Smith);
  fourteen years (1624 statute).
- Superlatives and single causes to keep out: "the first factory"; "Britain was uniquely positioned";
  "the fastest urban growth in history"; "coal caused the Industrial Revolution"; "enclosure drove
  peasants into the cities" (historians dispute how much enclosure pushed people off the land; the
  story says only that fewer people were needed on farms and many moved to towns); "slave-trade profits
  paid for the Industrial Revolution" (historians argue over how much: the story says "including").
- Causal links stated as arguments, not facts: the China comparison (Pomeranz's argument that China's
  coal lay far from its richest region; teacher notes only); the timber shortage as a push toward coal
  (the story states the shortage and the switch, and lets the reader join them; a revisionist reading
  argues timber depletion was partly the result of coal use).

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Commons answered HTTP 429 when this session started, so the repo's
mirrored pictures, the Met, the Wellcome Collection and the Library of Congress are tried first.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A night scene of a working furnace or mill (de Loutherbourg's *Coalbrookdale by Night*, 1801, already mirrored) | The question: something new burning in the British landscape. | It shows the Bedlam furnaces at Madeley, not Darby's 1709 furnace. |
| 4 | Spinning and weaving at home: a print of a cottage spinner or a domestic loom | The before. | Many are sentimental 19th-century views; say so. |
| 5 | Coal and iron: the Loutherbourg painting, or a period view of a coal pit | Coal and iron together. | |
| 6 | The Bridgewater Canal: a print of the Barton aqueduct (1761) | Water improved by people. | Most views are later; give the date. |
| 7 | A farm scene of the new husbandry, or a view of Manchester (Wyld, 1852, already mirrored) | Food and towns. | The Wyld view is 1852, after this topic's dates. |
| 8 | Raw cotton or a cotton plantation; a bill of exchange or bank note | Foreign resources and capital. | Never an AI picture in the Evidence Lab. |
| 12 | Cromford Mill: Joseph Wright of Derby's *Arkwright's Cotton Mills by Night* (c. 1782) or a print of the mill | One place, by the water. | The Wright painting is in a private collection; check its license. |
| 13 | Baines's 1835 plates (carding, drawing and roving; mule spinning; power-loom weaving, already mirrored); the *Encyclopédie*'s pin-maker plate (1760s) | One job each. | The Baines plates show mills sixty years after Cromford; say so. |
| 9, 14, 16 | Diagrams (the canal case; home and mill compared; the retelling equation) | | |
| 18 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page keeps "The Industrial Revolution Begins," because "The" changes no meaning and
   every Unit 5 file and the scenario index use it. The reading's title is "Coal, Water, and One
   Roof," on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 1.B, "explain a historical concept,
   development, or process": name the factor, explain how it worked, and say what it led to, with the
   connecting words that make a process ("which meant," "so"). Modeled on coal near water, practiced on
   a human factor or on the factory itself. Replaces necessary-and-sufficient causation and the
   "why Britain rather than France, Germany, or China" comparison.
3. **Learning targets:** two, one per Key Concept. Target 1, how the environmental factors and the
   human factors contributed to industrial production (KC-5.1.I.A, all seven); Target 2, how the
   factory system concentrated production in one place and specialized labor (KC-5.1.I.C). Checkpoint
   1 assesses Target 1; Checkpoint 2 assesses Target 2 and declares Causation.
4. **Primary Source:** Adam Smith's pin workshop (1776) and Andrew Ure's definition of a factory
   (1835), two short passages quoted exactly, with three questions: what each says, how a workshop
   differs from a factory, and how specialization made more goods. It replaces the composite child's
   testimony.
5. **Map module:** Britain's industrial geography, rewritten to the story: coalfields, iron, rivers,
   the Bridgewater Canal, Manchester, Liverpool, Coalbrookdale and Cromford, with its key, intro and
   prompt rewritten.
6. **Evidence Lab:** real objects where they can be sourced (the Coalbrookdale painting and the 1835
   power-loom engraving already in the repo; a Baines carding plate; a Cromford image; the Barton
   aqueduct) and verified excerpts (Smith, the 1624 statute's patent clause, the 1801 census).
7. **BeSurreal:** Cromford, 1772: you are a spinner in a Derbyshire village who has spun at home all
   your life, and your daughter has been offered a place in Arkwright's mill. You write about what
   changes when the work moves from your kitchen to his building. It replaces the 1812 Lancashire
   weaver scene, which was 5.8's and misdescribed the trade.
8. **BeInTheRoom:** "The Factory Commission" (1833) is replaced by "The Mill Partners" (Nottingham,
   1771): as Arkwright's partners, students decide where to build the mill, how to divide the work, and
   how to protect and pay for it, which exercises all seven factors and both halves of KC-5.1.I.C. The
   old file is removed and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the set Unit 4, 5.1 and 5.2 used. Checkpoint 2 is the factory half of the objective, which the
    reading and deck build to.
