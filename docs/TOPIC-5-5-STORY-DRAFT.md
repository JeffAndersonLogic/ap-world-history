# Topic 5.5 Story Draft: Technology of the Industrial Age

**Status: Approved 2026-10-23 by the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Drafted 2026-10-22 from the CED source file. Three review passes checked it and every surface built
from it against that file and the scholarship; the loop closed on the three-pass safety valve with
every finding fixed or rejected with a reason (`docs/TOPIC-5-5-CLAIM-LEDGER.md`, Review findings).
Nothing ships until Jeff says "ship it".

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day (5.1 to
5.4 are not scheduled either). The build adds no schedule entries; the dates are the one open item in
the report.

**Branch baseline:** `claude/build-5-5-kkm1hs`, the branch this session was given. Topic 5.4's build is
finished (three review passes, the Unit 5 reading fingerprint moved, its audit record written) but
is not on `main`: it waits for Jeff's "ship it" on `claude/5.4-build-completion-2sdf4j`. Because
5.4 and 5.5 share `scripts/lib/reading-content/unit-5.js` and `scripts/build-unit5-rooms.js`, this
branch starts from 5.4's last commit (`b16d1c64`), not from `main` (`1161bb82`, which carries 5.1 to
5.3). Ship 5.4 first, or ship both together; 5.5 alone would carry 5.4 with it. No other branch with
commits not on `main` touches 5.5 or the shared Unit 5 files.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 104 (topic page), p. 95 (Unit at a Glance) and p. 97 (sample activity 2).
This draft quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-5-STORY-MAP.md`) section for 5.5 was a proposal; this build follows it except where noted
in section 8.

---

## 1. What the CED requires (p. 104)

- **Learning objective F** (Technology and Innovation): Explain how technology shaped economic production over time.

Key Concepts, in the CED's order:

- **KC-5.1.I.B**: The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.
- **KC-5.1.I.E**: The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.
- **KC-5.1.IV**: Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.

- **Reasoning move:** Causation, the CED's reasoning process for 5.5 (p. 95). The learning objective
  asks how technology "shaped" production, which is a causal question by its own words, and each Key
  Concept is itself a cause and its effect: machines "made it possible" to use fossil fuels, which
  "greatly increased" the energy available; the second industrial revolution "led to" new methods;
  railroads, steamships and the telegraph "made ... possible" the reach into interiors, "which led
  to" more trade and migration. The answer this story builds is a **chain of causes: machines unlocked
  the energy stored in coal and then oil; that energy, with new ways of making steel, chemicals,
  electricity and precise machines, let the world make far more than before; and railroads,
  steamships and the telegraph, built from that steel and driven by that coal, carried goods, people
  and news into the interiors of continents, so trade and migration grew.**
- **Suggested skill:** 1.B Developments and Processes, "Explain a historical concept, development, or
  process." Students explain a process step by step: what the problem was, what the new technology
  did, what it made possible, and what followed.
- **Thematic focus:** Technology and Innovation (TEC).
- **Illustrative examples:** none. The CED prints no examples for 5.5, so every example in this story
  is the build's choice and is checked as a claim in the ledger.
- **Sample activity** (p. 97, activity 2), **optional**: a debate. Groups of five, one technology each
  (the steam engine, the railroad, the internal combustion engine, the steamship and the telegraph),
  imagine they are the writing staff of *Scientific American* writing "Five Technologies that Changed
  the World," rank the five from most to least important, and justify the ranking in a few
  paragraphs. This build uses it as the BeInTheRoom scenario (section 11, call 8) and as one slide
  in the deck.

**Five things in these sentences that are easy to drop.**
1. **"Economic production."** The objective is about how goods were made and how much, not a list of
   inventions. An answer that names five machines and never says what they did to production has
   missed the objective.
2. **"Internal combustion engine" and "oil."** The CED names both. Steam and coal are easy to teach and
   oil gets dropped. The honest version: by 1900 oil was used mostly for lamp fuel, and the internal
   combustion engine's large effects came after 1900. Both halves go in.
3. **"Greatly increased the energy available."** The Key Concept's point is the amount of energy, not
   the engine. Students should say where the energy came from (stored in fossil fuels) and how much
   more there was.
4. **"Steel, chemicals, electricity, and precision machinery."** Four methods, "during the second half
   of the 19th century." Steel is easy; chemicals and precision machinery get dropped.
5. **"Exploration, development, and communication ... in interior regions," then "trade and
   migration."** Two effects at the end of the chain. Railroads alone, or trade alone, is half the
   Key Concept.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-5-technology-of-industrialization.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-5.js`, the BeInTheRoom scenario in
`scripts/build-unit5-rooms.js`, the map spec in `scripts/lib/instructional-map-specs.js`, the network
atlas entry in `scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, and the 5.3
and 5.4 First & 10s (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and all three Key Concepts in the
  CED's wording (corrected on 2026-10-20 in the 5.1 build).
- The network atlas says "Fossil fuels expanded available energy. New production techniques and faster
  transport and communication linked factories to wider markets and resources." It agrees with the
  CED and is left alone.

**Out of line, each fixed inside this build:**
1. **Half the topic teaches a different question** (the deep audit's finding). Learning Target 2,
   criterion 2, lecture card 3, First & 10 section 4, Checkpoint 2, the map and its key, and the
   BeInTheRoom all teach the environmental and labor costs of resource extraction in colonized regions
   (rubber in the Congo and the Amazon, guano in Peru, deforestation). Target 2 claims KC-5.1.I.B for
   it, but KC-5.1.I.B is about machines unlocking fossil-fuel energy. Colonial resource extraction is
   Unit 6's; coal smoke in cities is 5.9's. Both leave.
2. **Oil and the internal combustion engine are missing.** KC-5.1.I.B names both; no target, criterion,
   card, reading section or checkpoint teaches either. Chemicals and precision machinery (KC-5.1.I.E)
   appear nowhere either.
3. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation, and its questions ask for a comparison and an argument; the Skill Builder teaches
   causation of "industrial acceleration" with a four-step chain whose figures have no source. The
   CED's reasoning process is Causation and its skill is 1.B, explaining a process.
4. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - Three quotations in the Evidence Lab that read as invented: a "Report of the Peruvian Guano
     Commission (c. 1854)" with no source; Morse writing that the telegraph "will annihilate space and
     time" and that "the merchant in New York will know the price of cotton in New Orleans" (the
     phrase "annihilation of space and time" was a commonplace of the period; this passage is not
     found in Morse); and Carnegie seeing a converter: "Steel was to be the material of the age"
     (no source found). Removed.
   - The Primary Source is "this adapted account," a composite of the Central Pacific's Chinese
     workers presented as testimony, with an invented exchange ("who built the Great Wall?") and
     unsourced details (bodies "still holding their tools"). Removed. The workers' history is real and
     is Unit 6's (6.6, migration); it is not told here through a composite.
   - "Stephenson's Rocket (1829): The first successful steam locomotive" (lecture card 1). It was not:
     steam locomotives had run since 1804 (Trevithick) and on the Stockton and Darlington Railway since
     1825. Removed.
   - "The Bessemer process (1856) was the single most important metallurgical innovation"; "reduced the
     cost of steel by 80% between 1860 and 1880"; "Life expectancy in Manchester in the 1840s was 28 to
     29 years, lower than in many pre-industrial societies"; "The Congo rubber regime killed an
     estimated 1 to 10 million people"; "transportation costs fell 80 to 90%"; "a single mile of track
     required approximately 2,500 to 3,000 wooden ties." Superlatives and figures without a source,
     most of them off-topic. Removed with their surfaces; anything kept is checked in the ledger.
   - "Railroads ... the first technology to separate communication from transportation" belongs to the
     telegraph, and "first ... in history" claims (the 1866 cable "for the first time in history") are
     narrowed to what the sources say.
   - The Evidence Lab's "A Bessemer converter in operation" is an engraved diagram of a converter (A,
     outside; B, cut away) with nobody in it, and its prompt says "NOTICE the scale of the vessel
     against the people working near it." Page truth. Recaptioned.
   - BeInTheRoom's alignment block names `KC-5.5.I–II` and `KC-5.5.II.A–D`, codes the CED does not
     have (story map conflict 2), and an objective the CED does not print. Replaced with the scenario.
5. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the reading
   still carries a `builderBody` about building an AI Coach prompt (retired 2026-08-31); the
   BeInTheRoom description in the lesson data offers three scenarios that do not exist;
   `primarySource.text` is an array; the reading's header and the lesson title read "Technology of
   Industrialization" where the CED reads "Technology of the Industrial Age" (story map conflict 3).
6. **Pictures from other topics (`stableImages`):** the Waldseemüller map, the casta painting, the
   Pueblo Revolt mural, a Persian astrolabe, da Gama's pillar, Columbus taking possession, Magellan,
   the Florentine Codex smallpox page, the 1700 world map, the VOC logo. None has a 5.5 job; all leave.
7. **Title:** the page title is restored to the CED's, "Technology of the Industrial Age."

## 3. The ninth-grade story

Topic 5.3 ended with a mill beside a river. Arkwright's mill at Cromford ran on a water wheel, and
coal, in 1700, was mostly something people burned to keep warm. Topic 5.4 ended with a question:
factories needed coal, and steam engines turned that coal into power on a scale nobody had seen
before. How did the machines themselves change the world?

**Where the world's energy came from in 1750.** Almost all the energy people used came from things
that grow: food for the muscles of people and animals, and wood for fire. Wind and water turned
some mills and moved ships. All of these had limits. A water wheel works only beside a fast river.
A forest takes decades to grow back. A horse gets tired. Until about 1900, wood, crop
waste and other things that grow were still the world's largest source of energy.

**Energy buried underground.** Coal and oil are fossil fuels: the remains of plants and tiny sea
creatures, buried for millions of years, with energy stored inside them. Britain already burned coal
for heat (Topic 5.3). The trick was to turn that heat into motion.

**A pump, then an engine that turns wheels.** In 1712 Thomas Newcomen set up a steam engine near
Dudley Castle, in the English Midlands, to pump water out of a coal mine. It worked, but it burned a
lot of coal. James Watt, an instrument maker at the University of Glasgow, found in 1765 that a
separate chamber to cool the steam (his "separate condenser") meant the cylinder did not have to be
heated again on every stroke; he patented it in 1769. His engines used less than a third of the coal
of a Newcomen engine. In the 1780s Watt and his partner Matthew Boulton made engines that turned a
wheel, so an engine could drive machines. A mill no longer had to sit beside a river: it could run
on coal, wherever coal could be brought, and cotton mills crowded into towns such as Manchester.

**More coal, more energy.** Britain mined about 65 million tons of coal in 1854 and about 225 million
tons in 1900. By about 1900, coal supplied about half of all the energy used in the whole world.
This is the fossil fuels revolution: machines let people use energy that had been stored for
millions of years, far more than muscles, wood, wind and water could give.

**Then oil.** In 1859 Edwin Drake drilled a well at Titusville, Pennsylvania, and struck oil. For the
rest of the century most oil was refined into kerosene, a fuel for lamps. A different kind of engine
burned fuel inside the engine itself: the internal combustion engine. In 1876 Nikolaus Otto built a
four-stroke gas engine in Germany, and in 1886 Carl Benz patented a car driven by a small engine that
burned a fuel made from oil. In 1900 the United States had only about 8,000 cars, so the internal combustion engine's big
changes, to cars, trucks, tractors and airplanes, came after 1900. Its fuel, oil, would become the
world's second fossil fuel.

**The second industrial revolution, after 1850.** With so much energy, people found new ways to make
things.
- **Steel.** Steel is stronger than iron and bends without breaking, but it was slow and costly to
  make. In 1856 Henry Bessemer showed that blowing air through melted iron burned out the impurities
  and made steel quickly. The United States made about 69,000 tons of steel in 1870 and about 10
  million tons in 1900; Britain went from about 215,000 tons to about 4.9 million. Steel became rails,
  bridges, ships, machines and building frames.
- **Chemicals.** In 1856 an eighteen-year-old London chemistry student, William Perkin, made a purple
  dye, mauve, from chemicals that came from coal tar. German chemical companies such as BASF
  (founded 1865) built laboratories to invent new dyes; in 1897 BASF began selling indigo blue made in
  a factory instead of from a plant. By 1914 Germany made most of the world's dyes.
- **Electricity.** In 1882 Thomas Edison's Pearl Street Station in New York began selling electric
  power to light about 400 lamps. Electric motors let a machine run on its own motor instead of a belt
  from one big steam engine. But the change was slow: in 1899 electric motors gave less than 5 percent
  of the power in American factories.
- **Precision machinery.** Machine tools cut metal parts so exactly that parts could be swapped:
  interchangeable parts. Standard screw threads (Joseph Whitworth's in Britain in 1841; William
  Sellers's in the United States in 1864) helped machines with interchangeable parts, "from
  typewriters to locomotives," spread.

**Railroads, steamships and the telegraph reach the interior.** Energy and steel built the machines
that moved things.
- **Railroads.** The Liverpool and Manchester Railway, opened in 1830, was the world's first railway
  between two cities, with trains pulled by steam locomotives. Russia had 27 kilometers of railway in
  1840 and over 53,000 in 1900; Germany went from 469 kilometers to over 51,000. India's first
  passenger train ran from Bombay to Thane in 1853. In 1869 the first railroad across the United
  States was finished at Promontory Summit, Utah. Russia began the Trans-Siberian Railway in 1891,
  and trains could cross to the Pacific by 1904. A railroad could reach places no river or canal
  reached: farms, mines and towns in the middle of continents.
- **Steamships.** Under sail, emigrants from Norway took about 53 days on average to reach America; by
  steamship the Atlantic crossing from England took about 12 days in the 1860s, and the fastest ships
  of the 1870s crossed in about 7 or 8. The Suez Canal (1869) was of little use to sailing ships, so
  it mostly served steamships. Steamboats also went up rivers into the interior of continents: in 1854 the
  steamer Pleiad went far up the Niger and Benue rivers in West Africa, with no deaths among its crew,
  who took quinine against malaria. (What European empires did with that reach is Unit 6.)
- **The telegraph.** In 1844 Samuel Morse sent "What hath God wrought?" by electric telegraph from
  Washington to Baltimore. A message that once traveled only as fast as a horse or a ship now
  traveled along a wire in minutes. From 1866, cables under the Atlantic carried messages without a
  lasting break, and in 1870 another undersea cable, through the Red Sea, reached Bombay. Merchants could know prices in distant markets within a day.

**More trade.** Cheaper, faster transport and instant news joined markets. In 1870 wheat cost 57.6
percent more in Liverpool, England, than in Chicago; by 1913 the gap was 15.6 percent. Wheat from the
American Midwest, carried by rail to the coast and by steamship across the ocean, fed workers in
Britain.

**More migration.** Ships and trains also carried people. About 55 million Europeans moved to the
Americas and Australia between 1850 and 1914. Over 29 million Indians and over 19 million Chinese
moved to Southeast Asia and the lands around the Indian Ocean between 1846 and 1940, and tens of
millions of Chinese and Russians moved into Manchuria, Siberia and Central Asia. Steamships and
railways made these journeys faster and cheaper. (Why people moved, and what they found, is Unit 6.)

**Myths to drop.** "Watt invented the steam engine": Newcomen's engine came first, in 1712; Watt made
it use far less coal and turn wheels. "One invention changed everything": each technology needed the
others; railroads needed steam, coal and then steel, and the telegraph ran beside the railroads.
"By 1900 the world ran on electricity and cars": electric motors gave under 5 percent of American
factory power in 1899, and the United States had about 8,000 cars in 1900. Some of the biggest effects
came later.

**So, how did technology shape economic production between 1750 and 1900?** Machines such as the
steam engine, and later the internal combustion engine, let people use the energy stored in coal and
oil, which greatly increased the energy available. That energy, and new methods for making steel,
chemicals, electricity and precise machines after 1850, let factories make far more goods, and new
kinds of goods. Railroads, steamships and the telegraph, built of that steel and driven by that coal,
carried goods, people and news into the interiors of continents, which led to more trade and more
migration.

**And it hands on a turn.** A few governments did not wait for these machines to arrive on their
own: they decided to build industry themselves. That is Topic 5.6.

## 4. The spine

**Machines unlocked the energy stored in coal and then oil. That energy, with new ways of making steel,
chemicals, electricity and precise machines, let the world make far more than ever before. Railroads,
steamships and the telegraph carried goods, people and news into the interiors of continents, and
trade and migration grew.**

The story map's spine ("Machines unlocked the energy stored in coal and oil, a second industrial
revolution made steel, chemicals and electricity, and railroads, steamships and the telegraph carried
trade and people into the interiors of continents") is kept in substance; the build adds precision
machinery (the CED names it) and makes the links between the three a chain, because the reasoning
move is Causation.

"Machines unlocked the energy stored in coal and then oil" is KC-5.1.I.B; "steel, chemicals, electricity
and precise machines" is KC-5.1.I.E; "railroads, steamships and the telegraph ... interiors ... trade and
migration" is KC-5.1.IV; "make far more than ever before" is the objective's economic production.

Shorter for the wall: **More power. New methods. Longer reach.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Energy in 1750: muscles, wood, wind, water; biomass the world's largest source until about 1900 | KC-5.1.I.B (the before) | The **limit** that fossil fuels broke. |
| Newcomen, 1712, a pump at a coal mine; Watt's separate condenser (1765, patent 1769), under a third of the coal; rotary engines in the 1780s; mills move into towns | KC-5.1.I.B (steam engines) | **Machines** turned coal's heat into motion, and freed factories from rivers. |
| Britain's coal output, about 65 million tons (1854) to about 225 million (1900); coal about half the world's energy by about 1900 | KC-5.1.I.B ("greatly increased the energy available") | The **amount**: the fossil fuels revolution. |
| Drake's well, 1859; kerosene; Otto, 1876; Benz, 1886; 8,000 US cars in 1900 | KC-5.1.I.B (oil; internal combustion engine) | The second fossil fuel and the second engine, and **when** their effects came. |
| Bessemer, 1856; US steel 69,000 tons (1870) to 10 million (1900); Britain 215,000 to 4.9 million | KC-5.1.I.E (steel) | A **new method** made a material cheap enough for rails, bridges and machines. |
| Perkin's mauve from coal tar, 1856; BASF, 1865; factory-made indigo, 1897 | KC-5.1.I.E (chemicals) | Coal made **new products**, and laboratories invented them. |
| Pearl Street, 1882; motors under 5 percent of US factory power in 1899 | KC-5.1.I.E (electricity) | A new power source, and a **slow** change. |
| Interchangeable parts; Whitworth 1841, Sellers 1864 | KC-5.1.I.E (precision machinery) | **Precise machines** made parts that fit any copy. |
| Liverpool and Manchester, 1830; Russia 27 km to 53,234 km; India 1853; Promontory Summit 1869; Trans-Siberian 1891 to 1904 | KC-5.1.IV (railroads; interior regions) | Rail **reached the middle of continents**. |
| Sail from Norway 53 days; steam from England 12 days (1860s), 7 or 8 (1870s); Suez 1869, mostly steamships; the Pleiad, 1854 | KC-5.1.IV (steamships; exploration) | Ships became **faster and went inland**. |
| Morse, 1844; Atlantic cable, 1866; Bombay, 1870 | KC-5.1.IV (telegraph; communication) | **News** outran ships and horses. |
| Liverpool and Chicago wheat price gap, 57.6 percent (1870) to 15.6 percent (1913) | KC-5.1.IV (trade) | **Trade**: distant markets joined. |
| 55 million Europeans (1850 to 1914); over 29 million Indians and 19 million Chinese (1846 to 1940) | KC-5.1.IV (migration) | **Migration**: people moved by the tens of millions. |
| Jevons, *The Coal Question* (1865, 1866 edition): coal "the material energy of the country" | KC-5.1.I.B | A person at the time **saw** what coal meant. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.3: what turned the machines at Arkwright's mill at Cromford? (A water wheel.)
   (b) From 5.3: what did people in England mostly use coal for in 1700? (Heat: fires for warmth and
       cooking.)
   (c) From 5.4: name two places the factory methods spread to.
   **Bridge:** "Factories needed power, and coal could only keep you warm. What happened when machines
   learned to turn coal into motion? How did technology change how much the world could make, and
   how far it could reach?"
3. **Topic question on screen, over a cinematic picture:** How did new technology change how much the
   world could make, and how far its goods and people could go?
4. **First & 10.**
5. **Before: muscles, wood, wind, water** (KC-5.1.I.B, the before).
6. **The steam engine: a pump, then wheels** (Newcomen, Watt; KC-5.1.I.B).
7. **The fossil fuels revolution: how much more energy** (coal output; half the world's energy;
   KC-5.1.I.B).
8. **Oil and the internal combustion engine** (Drake, Otto, Benz, 8,000 cars; KC-5.1.I.B).
9. **The skill (1.B): explain a process**, modeled on a neutral everyday case.
10. **The second industrial revolution: four new methods** (steel, chemicals, electricity, precision
    machinery; KC-5.1.I.E).
11. **Practice:** explain how the Bessemer process changed production, step by step.
12. **Reach: railroads into the interior** (KC-5.1.IV).
13. **Reach: steamships and the telegraph** (KC-5.1.IV).
14. **Effects: more trade, more migration** (wheat prices; migration totals; KC-5.1.IV).
15. **Rank the five** (the CED's sample activity, quick class version; the BeInTheRoom is the full
    version).
16. **Myths.** "Watt invented it"; "One invention changed everything"; "By 1900 everything ran on
    electricity."
17. **Retelling slide** (section 7).
18. **AP synthesis:** the objective answered in a sentence, then the hand-off to 5.6.
19. **Landing, over a cinematic picture.**

## 7. Retelling slide

A cause chain a student can redraw from memory, five links:

**Machines** (the steam engine; later the internal combustion engine) **unlock fossil fuels** (coal,
then oil) **→ far more energy** (coal about half the world's energy by about 1900) **→ new methods**
(steel, chemicals, electricity, precision machinery) **→ longer reach** (railroads, steamships, the
telegraph into the interiors of continents) **→ more trade and more migration.**

Result line: **More power. New methods. Longer reach.**

Why this shape: the reasoning move is Causation, and the CED's own sentences are a chain ("made it
possible," "led to," "which led to"). The cause chain template draws one cause setting off the next.

## 8. Owns / bridge-only (from the unit story map)

- **5.5 owns:** KC-5.1.I.B (machines and fossil-fuel energy: steam engines, the internal combustion
  engine, coal and oil), KC-5.1.I.E (the second industrial revolution: steel, chemicals, electricity,
  precision machinery) and KC-5.1.IV (railroads, steamships and the telegraph in interior regions,
  leading to trade and migration). The steam engine itself, which 5.3 left to 5.5 ("Steam power,
  which began as a pump for flooded coal mines, is Topic 5.5").
- **Bridge only:** the causes of British industrialization and the factory system (5.3): named as what
  came before. The spread of industry (5.4). State-sponsored industry (5.6): the Trans-Siberian named as
  a railroad, not as state policy; Witte not named. Big business and finance (5.7): BASF named as a
  maker of dyes, not as a business model. Workers, reformers and reactions (5.8); cities, classes and
  coal smoke (5.9). Imperialism (Unit 6): steamships and the telegraph named as tools that reached
  interiors, with one line that what empires did with them is Unit 6. Migration's causes and the lives
  of migrants, including the Chinese workers on the Central Pacific Railroad and indentured labor
  (Unit 6, 6.6 and 6.7): the totals named as an effect of the technologies, not taught.
- **Story map change:** none to ownership. The spine adds precision machinery and states the chain.
  Unit-wide conflict 2 (BeInTheRoom's invented codes) is fixed for 5.5.
- **Hands to 5.6:** "A few governments did not wait for these machines to arrive on their own: they
  decided to build industry themselves." (The story map gives 5.5 no hand-off line; this one points at
  5.6's spine.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-5-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Numbers: Britain's coal output (NBER); coal's share of world energy (Our World in Data; Smil);
  steel output (NBER); railway lengths (Mitchell's figures, as reprinted in the Fordham Modern History
  Sourcebook); the wheat price gap (Daudin, Morys and O'Rourke, citing O'Rourke and Williamson);
  migration (Hatton and Williamson; McKeown); crossing times (Norway Heritage); cars in 1900 (FHWA;
  Historical Statistics of the United States); motors in 1899 (David, 1990).
- Dates: 1712 (Newcomen), 1765 and 1769 (Watt), the 1780s (rotary engines), 1830 (Liverpool and
  Manchester), 1844 (Morse), 1853 (Bombay to Thane), 1854 (Pleiad), 1856 (Bessemer; Perkin), 1859
  (Drake), 1865 (BASF), 1866 (the Atlantic cable), 1869 (Promontory Summit; Suez), 1870 (Bombay
  cable), 1876 (Otto), 1882 (Pearl Street), 1886 (Benz), 1891 and 1904 (Trans-Siberian), 1897
  (indigo).
- Superlatives and single causes to keep out: "the first steam locomotive"; "the single most important
  innovation"; "the railroad caused industrialization"; "Watt invented the steam engine"; any "first in
  history" that a source does not state.
- Causal links stated with care: the share of world energy (coal and biomass about equal around 1900,
  not coal "replacing" wood); steam technology lowering the cost of travel as one cause of mass
  migration, beside wages and land, which are Unit 6's.

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Commons answered HTTP 429 through the 5.4 session, so the repo's
mirrored pictures, the Library of Congress, the Met, the Science Museum Group and the Rijksmuseum are
tried first.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A cinematic scene: a steam locomotive, a steamship at a port and telegraph wires in one view | The question: power and reach. | An AI picture is labeled; a real print is preferred. |
| 5 | A water wheel or a horse gin, 1700s | The before. | Later drawings of old machines. |
| 6 | A Newcomen engine (engraving); a Boulton and Watt rotative engine (Science Museum, 1788) | The machine. | The 1788 engine is a museum object; say so. |
| 7 | Coal output, drawn as a chart (generated) | The amount. | Units: long tons. |
| 8 | Drake's well, 1860s photograph (LoC); the Benz Patent-Motorwagen | Oil; the internal combustion engine. | Many "Drake well" photos are of the 1860s, not 1859. |
| 10 | The Bessemer converter (mirrored engraving); a Perkin mauve sample; an Edison lamp | New methods. | The converter picture is a diagram, not a photograph. |
| 12 | A railway map (the mirrored India railways map, 1909); Promontory Summit, 1869 (A. J. Russell) | Rail into the interior. | The 1909 map shows a network built over 56 years. |
| 13 | The Great Eastern laying the Atlantic cable, 1866 (lithograph); a steamship | Ships and wires. | Lithographs are artists' views. |
| 14 | An emigrant ship or a steamship company poster | Migration. | |
| 17 | The retelling cause chain (template) | | |
| 19 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page takes the CED's title, "Technology of the Industrial Age." The reading's title
   is "More Power, Longer Reach," on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 1.B, "Explain a historical concept,
   development, or process": say what the problem was, what the technology did, what it made possible,
   and what followed. Modeled on a neutral everyday example, practiced on the Bessemer process and the
   railroad.
3. **Learning targets:** two. Target 1, how machines unlocked fossil-fuel energy and how the second
   industrial revolution's new methods changed what could be made (KC-5.1.I.B, KC-5.1.I.E); Target 2,
   how railroads, steamships and the telegraph reached interior regions and led to more trade and
   migration (KC-5.1.IV). Checkpoint 1 assesses Target 1; Checkpoint 2 assesses Target 2 and the
   learning objective as one causal chain, and declares Causation.
4. **Primary Source:** W. Stanley Jevons, *The Coal Question* (first published 1865), the opening of
   its introduction, quoted word for word from the 1866 second edition, with three questions. It
   replaces the composite "adapted account."
5. **Map module:** energy and reach, about 1900: the coalfields and oil fields the story names, and the
   long railways, the Suez Canal and the telegraph cables, with the key printing labels only. It
   replaces the resource-extraction map.
6. **Evidence Lab:** real objects where they can be sourced, and figures from scholars as text cards;
   never an AI picture.
7. **BeSurreal:** a fifteen-year-old clerk in a Liverpool grain merchant's office, 1880, who reads
   yesterday's Chicago wheat price off the overnight cable: the change in reach seen by one person. It replaces the Central Pacific strike letter, which is Unit 6's.
8. **BeInTheRoom:** "The Iron Road Contract" (a colonial railway in India, built around extraction
   and imperial control, which is Unit 6's) is replaced by a scenario built on the CED's own sample
   activity: a New York science magazine's writers, at the end of 1900, ranking five technologies
   that changed the world. The old file is removed and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8, revised at shipping on 2026-10-23): 02 First & 10, 05 Skill
    Builder, 06 Checkpoint 1, 10 Checkpoint 2. Jeff's rule of 2026-10-23 (AndersonLogic-OS
    `04_PRODUCTS/BeHistorical/Decisions.md`) makes 02, 06 and 10 required on every topic, plus at
    least one chosen for how well it carries the CED objective and skill. The chosen one is 05,
    which practises the CED's suggested skill for 5.5 (1.B) as written. The Evidence Lab, first
    chosen in the build, becomes optional so the class stays at 80 minutes; the CED's ranking
    activity still runs on slide 17, and in full in the optional BeInTheRoom room.
