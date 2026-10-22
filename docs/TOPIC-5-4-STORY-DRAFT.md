# Topic 5.4 Story Draft: Industrialization Spreads in the Period from 1750 to 1900

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day (5.1 to
5.3 are not scheduled either). The build adds no schedule entries; the dates are the one open item in
the report.

**Branch baseline:** `claude/5.4-build-completion-2sdf4j`, the branch this session was given, started
from `1161bb82`, the finished 5.3 build. Jeff had said "ship it" for 5.3 and its session stopped
while CI ran; this session finished that ship, so `main` is `1161bb82` too, and this branch starts
from a `main` that carries 5.1 to 5.3. The
build-topic skill names a topic branch `claude/topic-X-Y-build`; this session's instructions name the
branch, so the work is here and the report says so. No other branch with commits not on `main`
touches 5.4 or the shared Unit 5 files (`scripts/lib/reading-content/unit-5.js`,
`scripts/build-unit5-rooms.js`); the 5.3 branch is now an ancestor of `main`.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 103 (topic page) and p. 95 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.4 was a proposal; this build follows it except where noted in section 8.

---

## 1. What the CED requires (p. 103)

- **Learning objective E** (Technology and Innovation): Explain how different modes and locations of production have developed and changed over time.

Key Concepts, in the CED's order:

- **KC-5.1.II.B**: The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.
- **KC-5.1.I.D**: As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.4 (p. 95). The
  learning objective asks how modes and locations of production "developed and changed over time,"
  which is a continuity-and-change question by its own words. The answer this story builds is that
  **between 1750 and 1900 two things changed: where the world's goods were made, and how. Factory
  methods spread from Britain to other parts of Europe, the United States, Russia and Japan, and the
  places with steam-powered factories made a fast-growing share of the world's manufactured goods.
  One thing continued: people in India, China, Egypt and the Ottoman lands kept making cloth, iron and
  ships, mostly by hand, but they made a shrinking share of the world's goods.**
- **Suggested skill:** 5.A Making Connections, "Identify patterns among or connections between
  historical developments and processes." Students find the pattern in how the methods spread (each
  new industrial region borrowed British machines and skilled people and added its own coal, water and
  money) and the pattern in the shares (up for the factory regions, down for the hand-making regions).
- **Thematic focus:** Technology and Innovation (TEC).
- **Illustrative examples** (p. 103, beside KC-5.1.II.B, under "Decline of Middle Eastern and Asian
  share in global manufacturing"), **optional**: shipbuilding in India and Southeast Asia; iron works
  in India; textile production in India and Egypt. This story uses the fewest that tell it well:
  **textile production in India** as the main case, **shipbuilding in India** (the Bombay Dockyard) as
  the second, and textile production in Egypt and iron works in India in one line each. Shipbuilding
  in Southeast Asia is not used.
- **Available resource** (p. 103): the Professional Development module "Comparison in Period 5" (on
  the industrialization of Russia and Japan). Not used: comparison is not 5.4's reasoning process, and
  how those two states built industry is 5.6's (KC-5.1.V.C, KC-5.2.II.A).
- **Sample activity:** none for 5.4.

**Five things in these sentences that are easy to drop.**
1. **"Modes and locations."** The objective has two halves. *Locations*: where goods were made.
   *Modes*: how they were made, by hand at home or in workshops, or by machines in steam-powered
   factories. An answer that only lists countries has dropped the modes.
2. **"Share."** KC-5.1.II.B is about shares of the world's manufacturing, not about Asia "stopping."
   A share can fall while output holds steady or even grows, because the total grows faster.
3. **"Continued to produce manufactured goods."** The CED insists on the continuity. India, China,
   Egypt and the Ottoman lands did not stop making things.
4. **"Other parts of Europe and the United States, Russia, and Japan."** Four destinations, all four
   named, in roughly that order of time. Not "the West."
5. **"Steam-powered."** The CED names the power behind the rising share. Steam itself, and the
   fossil-fuel revolution, are taught in 5.5; here steam is the reason factory regions could make so
   much, so cheaply.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-4-industrialization-spreads.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-4.js`, the BeInTheRoom scenario in
`scripts/build-unit5-rooms.js`, the map spec in `scripts/lib/instructional-map-specs.js`, the network
atlas entry in `scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, and the 5.3
First & 10 (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and both Key Concepts in the CED's
  wording (corrected on 2026-10-20 in the 5.1 build), with the three illustrative examples.
- Learning Target 1 points at KC-5.1.I.D and Target 2 at KC-5.1.II.B.
- The network atlas says "Industrial growth spread to selected centers across Europe, the United
  States, Russia, and Japan. Older producing regions continued manufacturing but lost global share,"
  and its Southeast Asia marker says "a decline in relative manufacturing share is not complete
  disappearance." It agrees with the CED and is left alone.

**Out of line, each fixed inside this build:**
1. **The topic teaches a different question.** The subtitle, Target 2, criterion 2, lecture card 3,
   First & 10 sections 1 and 4, Checkpoint 2, the Skill Builder and the map key all answer "why
   colonialism blocked industrialization": "deliberate policy choices, not natural disadvantages";
   "Sovereignty explains industrialization; its absence explains deindustrialization." The CED's
   KC-5.1.II.B says something narrower and different: the factory regions' share rose and Asia's and
   the Middle East's share fell *while they continued to produce*. The deep audit already warned
   against "reducing every non-industrialization outcome to a single deliberate-policy cause." A
   single cause stated as fact is the defect class every Unit 5 build has removed. Colonial trade
   policy stays in the story as one cause historians weigh, beside cheaper machine-made goods.
2. **Half the topic teaches 5.6.** Lecture card 2 (the Meiji model: Perry, the Restoration, the
   Iwakura Mission, model factories, zaibatsu), First & 10 section 3, Checkpoint 1's terms, the
   BeSurreal (an Iwakura official at Krupp), the BeInTheRoom ("The Meiji Investment Ledger"), two
   Evidence Lab cards (the Charter Oath, Japan's first railway as state building, the Tomioka mill)
   and the Skill Builder's state-led versus market-led comparison. State-sponsored industrialization
   and Meiji reform are 5.6's (KC-5.1.V.C, KC-5.2.II.A). So is Muhammad Ali's state cotton industry,
   which the CED names as 5.6's example; Egypt's textiles appear here only as one of 5.4's examples
   of a falling share. Germany's tariffs and banks, and Bismarck, are state policy too.
3. **Russia is missing.** KC-5.1.I.D names it; no target, criterion, card, reading section or
   checkpoint teaches it. The map shades it with "state railways," which is 5.6's.
4. **The reasoning move and skill on the page.** The reading's badges read Contextualization,
   Causation and Comparison; the Skill Builder teaches comparison; Checkpoint 2 declares "Causation and
   comparison." The CED's reasoning process is Continuity and Change and its skill is 5.A, identifying
   patterns. The phrase "continuity" appears nowhere on the page.
5. **The CED's examples are missing.** Shipbuilding and iron works in India are on no surface;
   textiles in India appear only as "destroyed."
6. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "The bones of the cotton-weavers are bleaching the plains of India" (Primary Source). The line is
     usually traced to Marx, who attributed it to a Governor-General of India; no report by Bentinck
     containing it has been found, and the Primary Source is in any case "this adapted account,"
     a composite presented as testimony, with figures inside it ("thirty days ... three hours"). Removed.
   - The Bismarck quotation in the Evidence Lab ("Free trade is the policy of the strong; protection
     is the policy of the developing nation") has no source and reads as invented. Removed.
   - The "Manchester merchant" testimony of 1813 in the lesson data's Evidence Lab is unattributed and
     unsourced. Removed.
   - "Import duties on Indian textiles in Britain (as high as 70–80%)" and "import duties of 2.5
     percent" (lecture card 3, the Primary Source): figures without a source, checked in the ledger.
   - "Muhammad Ali ... forced ... to sign the Treaty of Balta Liman (1838)" (lecture card 3, the
     reading). The Treaty of Balta Liman was signed by the Ottoman Empire and Britain; Egypt was
     bound as an Ottoman province, and the factories' decline had several causes. Removed with the
     card (the topic is 5.6's).
   - "By 1900, the United States was the world's largest industrial economy, larger than Britain and
     Germany combined" (lecture card 1). Bairoch's estimates put the United States first in 1900 but
     not ahead of Britain and Germany together. Removed.
   - "Belgium ... one of the densest railroad networks in the world"; "Lowell ... the first planned
     industrial city"; "Japan was the only non-Western country to industrialize successfully"; "the
     first time an Asian power had defeated a major power in modern warfare"; "Dacca muslin was the
     finest cotton cloth in the world"; "the Ruhr ... the most productive industrial region in the
     world by 1900." Superlatives, several off-topic; each removed or narrowed in the ledger.
   - BeInTheRoom's alignment block names `KC-5.4.I–II` and `KC-5.4.II.A–C`, codes the CED does not
     have (story map conflict 2), and an objective the CED does not print. Replaced.
7. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the
   BeInTheRoom description in the lesson data offers three scenarios that do not exist;
   `primarySource.text` is an array (5.1's adjacent finding 2); the reading's header subtitle drops
   "1750 to 1900" where 5.3's carries it.
8. **Pictures from other topics (`stableImages`):** Magellan, da Gama's pillar, a Persian astrolabe,
   Columbus taking possession, the Pueblo Revolt mural, the Waldseemüller map, the 1700 world map, the
   Florentine Codex smallpox page, the casta painting, the VOC logo. None has a 5.4 job; all leave.
9. **Title:** the lesson reads "Industrialization Spreads"; the CED's title adds "in the Period from
   1750 to 1900" (story map conflict 3). The page title is restored to the CED's in full: it is the
   one place where the dates matter, because the topic is about change over that period.

## 3. The ninth-grade story

Last topic ended with a turn: the new way of making things did not stay in Britain. In 1771 Arkwright's
mill at Cromford put spinning under one roof, beside one water wheel. Over the next 130 years that way of
making things traveled. Where did it go, and what happened to the places that had made most of the
world's goods before?

**Who made the world's goods in 1750.** Almost everything was made by hand, in homes and workshops.
And most of it was made in Asia. One economic historian, Paul Bairoch, estimated that around 1750
China made about a third of all the world's manufactured goods and India about a quarter. All of
Europe together made about a quarter; Britain, under 2 percent. India's cotton cloth, from fine
muslins to cheap calicoes, sold in Europe, Africa, the Middle East and Southeast Asia. Indian
shipwrights built ocean-going ships of teak. (Bairoch's figures are estimates, and every historian who
uses them says so; they show the size of the change, not exact amounts.)

**Britain tried to keep the secret.** British law forbade skilled textile workers to leave the country
to work abroad, and banned the export of textile machinery. Machines can be hidden. People cannot be
stopped from remembering.

**The methods traveled with people.** Samuel Slater had trained at Jedediah Strutt's mill in
Derbyshire (Strutt was Arkwright's partner). In 1789 he sailed for the United States without telling
anyone what he knew, and in Pawtucket, Rhode Island, he built water-powered spinning machines from
memory; the Slater Mill building went up in 1793. In Belgium, John Cockerill, the son of an English
machine maker, opened ironworks and machine works at Seraing, near Liège, from 1817, on top of one of
the continent's richest coalfields.

**Then with machines and money.** When the British laws were dropped (for workers in 1824, for most
machinery by 1843), the methods spread faster. The first railway in the German states, from Nuremberg
to Fürth in 1835, ran with a locomotive built in England. In the German states, Belgium and northern
France, industry grew where coal lay, as it had in Britain: in the Ruhr valley, around Liège, near
Lille. In the United States, Boston merchants built cotton mills at Lowell from the 1820s, worked by
young women from New England farms. **Russia and Japan** came later, mostly after 1870. A Welsh
engineer, John Hughes, built ironworks in the Donets coal basin in the 1870s, in a town named after
him, Yuzovka. In Japan, the Osaka Spinning Company opened in 1883 with British-made spinning machines
driven by steam, and ran day and night. (How the Russian and Japanese governments pushed industry on
purpose is Topic 5.6.)

**The pattern.** Wherever the new methods went, three things traveled together: British machines, or
the memory of them; skilled people who knew how to build and run them; and money to pay for them
before they paid back. And they took root where the 5.3 factors were waiting: coal, iron, water and
growing towns.

**What changed: the world's shares.** Steam-powered factories made goods far faster and cheaper than
hands could. Bairoch's estimates show the shares moving. Britain's share of the world's manufacturing
went from under 2 percent in 1750 to about a fifth by 1860. By 1900 Europe and the United States
together made over four-fifths of the world's manufactured goods, and the United States had passed
Britain. China's share fell from about a third to about 6 percent, and India's from about a quarter
to under 2 percent.

**What continued: people kept making things.** Those falling shares do not mean that Asia stopped
working. In India, millions of handloom weavers were still weaving in 1900; many switched to cheaper
machine-made yarn and kept weaving. At the Bombay Dockyard, the Wadia family of master shipbuilders
built teak warships for Britain's own Royal Navy; one of them, HMS Trincomalee, launched in 1817, is
still afloat. China's farm families kept spinning and weaving cotton at home. Egypt's workshops kept
weaving. What changed was that the rest of the world's output grew so much faster that the old makers'
share shrank.

**Why their share fell.** Machine-made cloth from Lancashire undersold hand-made cloth, even in India
itself. By the 1820s more cotton cloth was going from Britain to India than from India to Britain:
India, which had sold cloth to the world, now bought British cloth and sold raw cotton to British
mills. India was ruled by the British East India Company, which let British goods in at low duties,
while Britain had long kept Indian cloth out of its own market with high duties and bans. Historians
argue over how much each cause mattered: cheaper machine-made goods, the policies of the rulers, and,
in India, older troubles that began before the factories did. The ships followed the same path.
Bombay's teak warships were among the best of their kind, but after the 1850s navies wanted iron and
steam, and the yards that could build those were in Britain.

**Myths to drop.** "Asia stopped making things": it kept making them; its share fell. "Industry spread
everywhere": it spread to a few regions, mostly ones with coal, and to the four places the CED names.
"India fell behind only because British machines were better": machines were cheaper, but trade rules
made by Britain, and India's own troubles, played a part, and historians still argue how much.

**So, how did modes and locations of production change between 1750 and 1900?** The mode changed
from hand work at home and in workshops to steam-powered factories, and the location changed with it:
factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan,
carried by people, machines and money, and those regions' share of the world's manufacturing rose.
What continued was hand production in India, China, Egypt and the Ottoman lands, which kept making
goods but a shrinking share of them.

**And it hands on a turn.** Factories needed coal, and steam engines turned that coal into power on a
scale nobody had seen. How did the machines themselves change the world? That is Topic 5.5.

## 4. The spine

**Factory methods spread from Britain to other parts of Europe, the United States, Russia and Japan,
carried by people, machines and money. The factory regions made a fast-growing share of the world's
goods. India, China and the Middle East kept making goods, mostly by hand, but a shrinking share.**

The story map's spine ("Industry spread from northwestern Europe to other parts of Europe, the United
States, Russia and Japan, and the world's share of manufacturing shifted: Middle Eastern and Asian
producers kept making goods, but a falling share of them") is kept in substance; the build adds *how*
it spread (people, machines, money), because the objective asks how locations "developed and changed,"
and a list of countries is not a development.

"Spread from Britain to other parts of Europe, the United States, Russia and Japan" is KC-5.1.I.D;
"a fast-growing share" and "kept making goods ... a shrinking share" are KC-5.1.II.B's two halves;
"mostly by hand" against "factory" is the objective's *modes*.

Shorter for the wall: **The factory traveled. The share moved. The old makers kept making.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Bairoch's estimates, 1750: China about a third, India about a quarter, Europe about a quarter, Britain under 2 percent | KC-5.1.II.B (the starting shares) | The **before**: most manufactured goods were made by hand in Asia. |
| India's cloth sold across Europe, Africa, the Middle East and Southeast Asia | KC-5.1.II.B (textiles in India) | India was a great **manufacturing** region. |
| British laws against emigration of skilled workers and export of machinery (to 1824 and 1843) | KC-5.1.I.D | Britain tried to **stop** the spread, and failed. |
| Slater: trained at Strutt's mill, to the US in 1789, Pawtucket mill 1793 | KC-5.1.I.D (the United States) | The methods traveled with **people**. |
| Cockerill at Seraing, 1817, on the Liège coalfield | KC-5.1.I.D (other parts of Europe) | Same pattern on the continent, **on coal**. |
| Nuremberg to Fürth railway, 1835, with an English locomotive | KC-5.1.I.D (other parts of Europe) | Then with **machines**. |
| Lowell mills from the 1820s | KC-5.1.I.D (the United States) | Then with **money**: merchants' capital. |
| Hughes at Yuzovka, 1870s; Osaka Spinning Company, 1883 | KC-5.1.I.D (Russia, Japan) | The last two destinations, later, with **British machines and engineers**. |
| Bairoch's estimates, 1860 and 1900: Britain about a fifth by 1860; Europe and the US over four-fifths by 1900; China about 6 percent, India under 2 | KC-5.1.II.B (shares up, shares down) | The **change**: the share moved to the factory regions. |
| Millions of Indian handloom weavers still at work about 1900 | KC-5.1.II.B (continued to produce) | The **continuity**: people kept making cloth. |
| The Bombay Dockyard; HMS Trincomalee, 1817 | KC-5.1.II.B (shipbuilding in India) | Asian makers built **some of the best** ships of their kind. |
| British cloth to India greater than Indian cloth to Britain by the 1820s; raw cotton out | KC-5.1.II.B (textiles in India) | **How** the share fell: cheaper machine-made goods, sold in India itself. |
| East India Company rule; duties; the historians' argument | KC-5.1.II.B | The causes are **argued**, not one. |
| Iron and steam warships after the 1850s | KC-5.1.II.B (shipbuilding in India) | A new mode of production left an old one behind. |
| Egypt's weavers; India's village iron smelting (one line each) | KC-5.1.II.B (textiles in Egypt; iron works in India) | The same continuity in other trades and places. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.3: name one thing nature gave Britain and one thing people built.
   (b) From 5.3: what two things did the factory change about work? (One place; one job each.)
   (c) From 5.3: where did much of the world's cotton cloth come from in 1750? (India.)
   **Bridge:** "The new way of making things did not stay in Britain. And India, which made so much of
   the world's cloth, is about to meet it. Where did the factory go, and what happened to the places
   that made the world's goods before?"
3. **Topic question on screen, over a cinematic picture:** Where did the new way of making things go,
   and what happened to the places that made the world's goods before?
4. **First & 10.**
5. **Before: who made the world's goods in 1750** (KC-5.1.II.B, the starting shares).
6. **Britain tried to keep the secret** (KC-5.1.I.D).
7. **The methods traveled: people, then machines and money** (Slater, Cockerill, the 1835 railway,
   Lowell; KC-5.1.I.D).
8. **Russia and Japan, later** (Hughes, Osaka; KC-5.1.I.D). One line on the governments: 5.6.
9. **The skill (5.A): find the pattern**, modeled on a neutral everyday case.
10. **Practice:** the pattern in how the methods spread (people, machines, money; coal).
11. **What changed: the shares** (KC-5.1.II.B), the estimates drawn as rising and falling lines.
12. **What continued: people kept making things** (handloom weavers; Bombay Dockyard; China; Egypt;
    KC-5.1.II.B).
13. **Why the share fell: India's cloth, before and after** (KC-5.1.II.B).
14. **Myths.** "Asia stopped making things"; "Industry spread everywhere"; "Only the machines."
15. **Retelling slide** (section 7).
16. **AP synthesis:** the objective answered in a sentence, then the hand-off to 5.5.
17. **Landing, over a cinematic picture.**

## 7. Retelling slide

A continuity-and-change picture a student can redraw from memory:

**The turning point:** steam-powered factories. **What changed:** *how* goods were made (from hands to
machines) and *where* (Britain, then other parts of Europe, the United States, Russia and Japan), and
the factory regions' share of the world's goods rose. **What continued:** people in India, China, Egypt
and the Ottoman lands kept making cloth, iron and ships, mostly by hand, but their share fell.

Result line: **The factory traveled. The share moved. The old makers kept making.**

Why this shape: the reasoning move is Continuity and Change, and the objective asks how modes and
locations "developed and changed over time." The CED's own sentence holds a change and a continuity
together ("While Middle Eastern and Asian countries continued to produce ... these regions' share ...
declined"), so the retelling holds both, around one turning point.

## 8. Owns / bridge-only (from the unit story map)

- **5.4 owns:** the spread of industrial methods from northwestern Europe to other parts of Europe,
  the United States, Russia and Japan (KC-5.1.I.D); the rise in the factory regions' share of the
  world's manufacturing and the fall in the Middle East's and Asia's while they kept producing
  (KC-5.1.II.B), with the CED's examples.
- **Bridge only:** how states sponsored industry (5.6, KC-5.1.V.C, KC-5.2.II.A): Russia's and Japan's
  governments named once, as pushing industry on purpose; Meiji reform, the Iwakura Mission, model
  factories, zaibatsu, Muhammad Ali's state mills, Witte, Germany's tariffs: not taught. Steam engines
  and the fossil-fuel revolution (5.5, KC-5.1.I.B): steam named as what made factory goods cheap;
  railways named as a thing that spread, not taught as technology (KC-5.1.IV). Free trade and
  mercantilism (5.7): the East India Company's duties are named as one cause historians weigh, not as
  a lesson in trade theory. Imperialism and colonial economies (Unit 6): British rule in India named
  as context. Workers' lives (5.9): the Lowell mill workers named, not taught.
- **Story map change:** none to ownership. The spine adds how the methods spread (section 4).
- **Hands to 5.5:** "Factories needed coal, and steam engines turned it into power on a scale nobody
  had seen. How did the machines themselves change the world?" (The story map gives 5.4 no hand-off
  line; this one points at 5.5's spine.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-4-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Numbers: every Bairoch share (1750, 1860, 1900), checked against Bairoch (1982) as reprinted in
  Kennedy (1987), Table 6, and stated as estimates every time; "millions" of Indian handloom weavers
  about 1900 (Roy).
- Dates: 1789 and 1793 (Slater), 1817 (Cockerill; Trincomalee), 1824 and 1843 (the British laws),
  1835 (Nuremberg to Fürth), 1820s (Lowell; the reversal of the cloth trade), 1870s (Hughes), 1883
  (Osaka Spinning Company).
- Superlatives and single causes to keep out: "the first country after Britain" unless sourced;
  "the finest cloth in the world"; "the only non-Western country to industrialize"; "colonialism
  blocked industrialization" as a sole cause; "Asia stopped manufacturing"; "the oldest warship" in
  any form other than the holder's own wording.
- Causal links stated as arguments, not facts: the causes of India's falling share (machine-made
  cloth's lower price; East India Company and British trade policy; older troubles, as Clingingsmith
  and Williamson argue); the "secret" kept by law (the laws existed; how well they worked is argued).

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Commons answered HTTP 429 when this session started, so the repo's
mirrored pictures, the Wellcome Collection, the Met and the Library of Congress are tried first.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A cinematic scene of the spread: the Great Exhibition, 1851 (Selous, already mirrored), where the world's machines and India's hand-made goods stood under one roof | The question: the world's makers, side by side. | A painting of the opening ceremony; say so. |
| 5 | Hand-made Indian cloth: a muslin or a chintz of the 1700s, or a print of an Indian weaver | The before. | Many weaver prints are later; give the date. |
| 7 | Slater Mill, Pawtucket; a Lowell mills print; Cockerill's Seraing works | People, machines, money. | A modern photograph of an old building says so. |
| 8 | The Osaka Spinning Company; Yuzovka's works | Russia and Japan. | Meiji prints can be idealized. |
| 11 | Bairoch's shares, drawn as a chart (generated) | The change. | Estimates: the chart says so. |
| 12 | HMS Trincomalee (a photograph of the ship today); a handloom weaver of about 1900 | The continuity. | A modern photograph of an 1817 ship. |
| 13 | India's cloth trade, before and after (a diagram) | The mechanism. | |
| 15 | The retelling diagram | | |
| 17 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page takes the CED's full title, "Industrialization Spreads in the Period from
   1750 to 1900." The reading's title is "Who Made the World's Goods?", on the reading, both lesson
   files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 5.A, "identify patterns among or
   connections between historical developments and processes": list the cases, find what they share,
   and say the pattern in one sentence. Modeled on a neutral everyday example, practiced on the
   spread of the factory. Replaces the comparison of state-led and market-led paths (5.6's).
3. **Learning targets:** two, one per Key Concept. Target 1, how factory methods spread from
   northwestern Europe to other parts of Europe, the United States, Russia and Japan, and what
   carried them (KC-5.1.I.D); Target 2, how the factory regions' share of the world's manufacturing
   rose while the Middle East's and Asia's fell as they kept producing (KC-5.1.II.B). Checkpoint 1
   assesses Target 1; Checkpoint 2 assesses Target 2 and declares Continuity and Change.
4. **Primary Source:** one real, verified source on India's cloth trade, quoted exactly, with three
   questions; it replaces the composite "adapted account."
5. **Map module:** the world's makers, about 1900: the four destinations of KC-5.1.I.D shaded with
   the dates the methods arrived, and India, China, Egypt and the Ottoman lands marked as places that
   kept making goods, with the key printing labels only.
6. **Evidence Lab:** real objects where they can be sourced, and verified excerpts; never an AI
   picture.
7. **BeSurreal:** a weaver's household in Bengal in the 1830s, when Lancashire cloth reaches the local
   market. It replaces the Iwakura Mission scene, which is 5.6's.
8. **BeInTheRoom:** "The Meiji Investment Ledger" (5.6's) is replaced by a scenario on 5.4's own
   question, set where modes and locations of production stood side by side: the Great Exhibition,
   London, 1851. The old file is removed and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the set Unit 4 and 5.1 to 5.3 used. Checkpoint 2 is the share half of the objective, the
    continuity and the change together, which the reading and deck build to.
