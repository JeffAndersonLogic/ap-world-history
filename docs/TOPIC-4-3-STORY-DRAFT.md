# Topic 4.3 Story Draft: Columbian Exchange

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "build 4.3" on 2026-10-14. The Phase 9 reviewers check this story
against the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-3-CLAIM-LEDGER.md`, under "Review findings".

**Build finished (2026-10-14):** three review passes ran (six reviewers, 112 findings, every one
fixed or logged in the ledger); the loop ended on its safety valve. The Unit 4 fingerprint moved
(`85f1913`), the audit record is `docs/topic-audits/topic-4-3-2026-10-14.md`, and the branch waits
on Jeff for class dates and "ship it".

**Taught:** Green Wednesday 2026-11-04, Silver Thursday 2026-11-05, from Jeff's November Canvas
calendar (2026-10-14), which marks the Green days. The same calendar makes Monday 11/2 a Green
day, which conflicts with 4.2's schedule entries (Silver on 11/2); that is open with Jeff.

**Branch baseline:** `claude/topic-4-3-build`, branched from `main` at `89870be5`, which carries
Topic 4.2's review pass 4. No other branch touches 4.3 or the shared Unit 4 files.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, pp. 81 and 82 (topic pages) and p. 75 (Unit at a Glance). This draft
quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-offs and the
owns / bridge-only split; it agrees with the source file on 4.3.

---

## 1. What the CED requires (pp. 81 and 82)

- **Learning objective D (Humans and the Environment, ENV):** Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.
- **KC-4.1.V** (LO D): The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange.
- **KC-4.1.V.A** (LO D): European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas.
- **KC-4.1.V.B** (LO D): American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East.
- **KC-4.1.V.C** (LO D): Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons.
- **KC-4.1.V.D** (LO D): Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops.
- **Reasoning move:** Causation, the CED's reasoning process for 4.3 (p. 75). The learning
  objective names both halves: the *causes* of the exchange (new connections, colonization, and
  what the ships carried on purpose, by accident and by force) and its *effects* on each
  hemisphere.
- **Suggested skill:** 3.B Claims and Evidence in Sources, "Identify the evidence used in a
  source to support an argument." In this topic that is two real sources making a claim and
  backing it: a Nahua account of the 1520 smallpox epidemic, and José de Acosta's 1590 report
  that Spanish cattle had multiplied in the Americas, backed by a count of hides.
- **Thematic focus:** Humans and the Environment (ENV).
- **Illustrative examples (optional):** domesticated animals: horses, pigs, cattle; foods brought
  by African enslaved persons: okra, rice. The CED says these "do not in any way constitute
  additional, preferred, or required information." All five are used, because each carries a
  Key Concept sentence that otherwise has no concrete example; the other names in this story
  (maize, potatoes, cassava, sweet potatoes, sugar, Tenochtitlan) are teaching choices.
- **Sample activity:** none for 4.3.

**Four things in these sentences that are easy to drop.**
1. **"Causes."** The objective starts with the causes of the exchange, not only its effects. The
   current pages describe what moved and almost never say why it moved.
2. **"Unintentional."** The CED says the disease vectors and diseases moved by accident. That
   word is the spine: the ships carried more than anyone meant them to.
3. **"Cash crops ... on plantations with coerced labor."** The second sentence of KC-4.1.V.B has
   no surface today (unit story map, conflict 11).
4. **"Some of these diseases ... in many areas."** The CED's own sentence is careful: some
   diseases, many areas. The current pages say "the largest demographic catastrophe in human
   history" and "zero immunity." The story keeps the catastrophe and loses the overstatement.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-3-columbian-exchange.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-3.js` (headings and closing cards), the map spec
`topic-4-3` in `scripts/lib/instructional-map-specs.js`, the CED and coherence contracts, the
deep audit, and the 4.2 audit records.

**Consistent with the CED:**
- The renderer config carries the learning objective and all five Key Concepts with the CED's
  wording, and the CED's five illustrative examples.
- Target 2 and Checkpoint 2 already ask why Eastern Hemisphere diseases were catastrophic, and
  Checkpoint 2 asks for transfers in both directions (the deep audit's repair of 2026-09-18).
- Lecture card 3 already keeps the topic biological and says silver and labor belong later.

**Out of line, each fixed inside this build:**
1. **Overstatements:** "the largest demographic catastrophe in human history" (subtitle, map
   key, First & 10 section 3), "the greatest single population collapse in human history" (First
   & 10 deck), "transform every ecosystem on earth" (lecture card 1), "one of the most
   consequential agricultural revolutions in human history."
2. **"Zero immunity" and "no evolved defenses."** The First & 10 (sections 1 and 3), lecture card
   2 and the Skill Builder explain the deaths as a genetic gap. The scholarship is more careful:
   David S. Jones ("Virgin Soils Revisited," 2003) argues that lack of prior exposure may have
   left people vulnerable but that "the fates of individual populations depended on contingent
   factors of their physical, economic, social, and political environments," the "forces of
   poverty, social stress, and environmental vulnerability" that colonization created. The story
   says so, in ninth-grade words.
3. **Chronology at Tenochtitlan.** The First & 10 says the epidemic struck "as Hernán Cortés's
   Spanish army was besieging the city" in 1520. The Spaniards had been driven out on 30 June
   1520; Sahagún's informants date the epidemic to Tepeilhuitl, "at the end of September," and
   the siege came in 1521.
4. **The single-cause chain the story map forbids.** The Skill Builder is titled "How the
   Demographic Collapse Led to the Atlantic Slave Trade" and calls African enslavement "the
   response to a specific labor crisis created by epidemic disease." The First & 10 section 4 and
   the Evidence Lab intro say the same. The story map gives the slave trade and labor systems to
   4.4 and allows this chain only as a qualified claim.
5. **Ownership drift:** Potosí silver (First & 10 section 4, an Evidence Lab card, the map's
   "silver across the Pacific") belongs to 4.5; the casta painting (an Evidence Lab card, the
   First & 10 module picture) to 4.7; encomienda (a vocabulary chip) to 4.4.
6. **Outside 1450 to 1750:** the Irish potato famine of 1845 (`evidenceLab.items`, never
   rendered), rubber on the map, the Little Ice Age argument as a closing claim of the reading.
7. **Thin CED coverage:** cash crops grown on plantations with coerced labor and exported mostly
   to Europe and the Middle East (KC-4.1.V.B, second sentence) has no surface (story map conflict
   11). Nothing says *why* the exchange happened (the "causes" half of LO D).
8. **The suggested skill is not practiced.** The Skill Builder teaches a causation chain; nothing
   practices 3.B, identifying the evidence a source uses to support an argument.
9. **Map:** draws silver across the Pacific (4.5), lists rubber (a 19th-century crop for export),
   and draws no American crop reaching Africa or Asia, which is half of KC-4.1.V.B and V.D.
10. **Module-card pictures from other topics** (`stableImages`): a casta painting (4.7), a VOC
    ship (4.5), a 1936 Pueblo Revolt mural (4.6), a Persian astrolabe (4.1), Magellan (4.2), the
    Vasco da Gama pillar (4.2), Columbus taking possession (4.2), a 1700 world map.
11. **BeSurreal:** set in "the summer of 1520"; the epidemic began at the end of September. It
    says the healer "trained for years in the calmecac," a school chiefly for nobles and
    priests; healers learned their craft by other routes.
12. **Primary Source:** the Florentine Codex passage is labeled "adapted" with no translator
    named. It is replaced with James Lockhart's translation, credited.
13. **Leftovers:** `first10.note` (lesson data and renderer config) still says "build your AI
    Coach prompt" (retired 2026-08-31); the reading still carries a `builderBody`; its skill tags
    are Causation, Continuity & Change and Argumentation, none of them 3.B.
14. **BeInTheRoom (The Replanting Council)** and the deep reading's closing card "The route from
    epidemic to the Middle Passage runs through six decisions" are read in Phase 7 for the same
    defects.

## 3. The ninth-grade story

Last topic ended with a surprise. Columbus sailed west looking for a route to Asia, and what he
started was something nobody had planned. Today is that something.

Start with how the world looked before 1492. Since the end of the last Ice Age, about eleven
thousand years ago, ocean had separated the Americas from Africa, Asia and Europe. Each side grew
its own plants, kept its own animals and lived with its own diseases. The Americas had maize,
potatoes, cassava, tomatoes, cacao and tobacco, and almost no large farm animals: llamas and
alpacas in the Andes, and no horses, cattle or pigs anywhere. Afro-Eurasia had wheat, rice,
sugarcane, horses, cattle, pigs and sheep. And because people there had lived for thousands of
years in crowded towns beside their animals, they also lived with diseases that the Americas did
not have: smallpox, measles, and later malaria.

Then ships began crossing the Atlantic and, just as important, coming back, again and again.
That is the cause of the Columbian Exchange: a new connection between the two halves of the
world, kept open by colonization. Everything that rode those ships went across. Some of it went
**on purpose.** Columbus's second voyage in 1493 carried horses, cattle, eight pigs, wheat seed
and sugarcane, because settlers wanted the food and animals they knew, and colonies needed farms.
Some of it went **by accident**: germs in sailors' bodies, rats in the cargo, and, most likely,
mosquito eggs in the water barrels. And some of it went **by force**: enslaved Africans, carried across the ocean
against their will, brought their own foods and farming knowledge with them. A historian named
Alfred Crosby gave all this its name in 1972: the Columbian Exchange.

The accidents did the most harm. Smallpox reached the Caribbean in 1518 and Mexico in 1520.
After the Spaniards were driven out of Tenochtitlan, the Aztec capital, the disease swept through
the city that autumn. Nahua witnesses told a Spanish friar what it was like: people covered in
sores, unable to move, and "many died of hunger, because there was no one who could prepare
food." The new emperor, Cuitláhuac, died in the epidemic, most likely of smallpox, and "the Mexica
warriors were greatly weakened by it" when the Spaniards returned and besieged the city in 1521.

Why were these diseases so deadly here? First, nobody in the Americas had had them before, so
there were no grown-ups who had survived smallpox as children and could not catch it again. When
it came, almost everyone fell sick at once, and nobody was left to farm, cook or care for the
sick. Second, the diseases did not arrive alone. They came with war, forced labor, hunger and
people driven from their homes, and sick, hungry, overworked people die more often. Historians
argue about the numbers, but central Mexico's population probably fell from about fifteen million
in 1519 to about one and a half million a century later, and many regions lost most of their
people. That is the "catastrophic effects in many areas" the College Board names.

What went west on purpose changed the land too. Pigs and cattle multiplied so fast that, by 1587,
one Spanish fleet carried home almost a hundred thousand cattle hides from the Caribbean and
Mexico. One historian argues that sheep stripped the hillsides of one valley in central Mexico. Horses spread north from Spanish settlements,
and by the early 1700s peoples of the Great Plains, such as the Comanche, had built new ways of
life on horseback. Wheat, fruit trees and sugarcane went in, and so did rice and okra, carried by
enslaved Africans who knew how to grow them.

Sugar shows how one plant could remake a society. Sugarcane came from Afro-Eurasia, but the
Caribbean and Brazil grew it better than anywhere. So Europeans built **plantations**, huge farms
growing one **cash crop** to sell, worked by **coerced labor**, overwhelmingly enslaved Africans,
and shipped the sugar mostly to Europe. Tobacco, an American plant, became a plantation crop the
same way. Disease had emptied land of workers, but disease alone did not cause African slavery in
the Americas: Europeans had already grown sugar with enslaved workers, including Canary Islanders and Africans, on
Atlantic islands such as Madeira before 1492, and they chose to bring that system with them. Who did that work,
and how, is the next topic.

Going east, the exchange was mostly a benefit. American crops grew where the old crops struggled:
maize on dry land, potatoes in cold, wet ground, cassava in poor soil and drought, sweet potatoes
on hillsides too steep for rice. A family that planted them had more food, and more kinds of
food, and something to eat when the old harvest failed. In southern China, officials promoted
the sweet potato in a famine year, 1594. Near the mouth of the Congo River, Portuguese traders
brought cassava from Brazil, and farmers took it up because it survived drought and locusts.
Over the next two centuries, these crops helped populations grow in China and Europe, and fed many people in Africa even as the slave trade carried millions away.

Put it together. One connection, two very different results. In the Americas, the germs that
nobody meant to carry killed millions, and the animals and crops that people did mean to carry
remade the land. In Afro-Eurasia, American crops meant more food and better nutrition. The
ships carried more than anyone meant them to, and what they carried remade populations on both
sides of the ocean.

And it left a question. The land in the Americas had lost many of its workers, and the new
plantations needed more of them than ever. Who would do the work, and who would rule? That is
Topic 4.4.

## 4. The spine

**The ships carried more than anyone meant them to, and the plants, animals and germs they
carried remade populations on both sides of the ocean.** (Approved with the unit story map,
2026-10-11.)

"More than anyone meant them to" is read as the story reads it: some cargo was carried on
purpose (crops and animals), some by accident (germs, rats, mosquitoes), and some by force
(enslaved Africans and the foods they brought). The CED's own word "unintentional" is the center
of it. "Remade populations" covers both the deaths in the Americas and the population growth the
American crops helped feed in Afro-Eurasia.

Shorter for the wall: **The ships carried more than anyone meant them to.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Two worlds apart since the Ice Age: different crops, animals and diseases on each side | KC-4.1.V, LO D (cause) | Why the connection mattered: each side had what the other lacked. |
| Ships crossing and returning, kept open by colonization; Columbus's 1493 fleet carried horses, cattle, eight pigs, wheat and sugarcane | KC-4.1.V, KC-4.1.V.C, LO D (cause) | The cause, stated as a mechanism: a lasting connection, and cargo carried on purpose. |
| Germs, rats and mosquitoes carried by accident | KC-4.1.V.A ("unintentional transfer of disease vectors") | The CED's word: the deadliest cargo was the one nobody chose. |
| Smallpox in Tenochtitlan, autumn 1520, from the Florentine Codex; Cuitláhuac's death | KC-4.1.V.A | One case, told by Nahua witnesses, of a disease remaking a city. Also the 3.B source. |
| Why so deadly: no prior exposure, everyone sick at once, and war, forced labor and hunger making it worse (Jones 2003) | KC-4.1.V.A | The mechanism, without the genetic myth. |
| Central Mexico about 15 million (1519) to about 1.5 million a century later; estimates argued over | KC-4.1.V.A ("catastrophic effects in many areas") | The scale, stated as an estimate. **Superseded 2026-10-14, review pass 3:** the figure carries no citation in Nunn and Qian and matches no published series in McCaa's table; every surface now gives the range of published estimates (about two-thirds to more than nine-tenths, 1519 to 1595) and Cook and Borah's 1548 and 1605 figures. |
| Cattle and pigs multiplied; Acosta's 1587 count of hides; sheep in central Mexico | KC-4.1.V.C, LO D (effect in the Americas) | Animals carried on purpose changed land and economies. Acosta is the 3.B source. |
| Horses and the Plains peoples, by the early 1700s | KC-4.1.V.C | Indigenous peoples using what arrived, an effect that was not a disaster. |
| Rice and okra carried by enslaved Africans | KC-4.1.V.C ("other foods were brought by African enslaved persons") | The forced third route of the exchange. |
| Sugar (and tobacco) on plantations with coerced labor, exported mostly to Europe | KC-4.1.V.B (second sentence), KC-4.1.V.C ("sugar") | Cash crops. **Bridge to 4.4**, which owns the labor systems. |
| The plantation system already existed on Atlantic islands before 1492 | The story map's qualified chain | Why "disease caused slavery" is too simple. One sentence. |
| Maize, potatoes, cassava, sweet potatoes: grew where old crops failed; Fujian 1594; cassava in the Kongo region | KC-4.1.V.B (first sentence), KC-4.1.V.D | American foods as staples, and the nutritional benefit. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.2: what was Columbus looking for when he sailed west?
   (b) From 4.2: after 1492, why did Spain send seventeen ships in 1493 instead of three?
   (c) From 2.6: name one thing besides trade goods that traveled along the old Afro-Eurasian
   routes (crops, or the plague).
   **Bridge:** "In 2.6, the Silk Roads carried crops and plague across one half of the world.
   Now ships join the two halves. What do they carry that nobody meant them to?"
3. **Topic question on screen:** What did the ships carry, and what did it do on each side of the
   ocean?
4. **Two worlds apart.** What each side had, and what it lacked.
5. **The cause.** Ships crossing and coming back; three ways things crossed: on purpose, by
   accident, by force.
6. **Germs and their carriers.** Smallpox, measles, malaria; rats and mosquitoes.
7. **Tenochtitlan, 1520.** The Florentine Codex picture and its witnesses.
8. **Why so deadly (mechanism).** No prior exposure, everyone sick at once, and colonization
   making it worse. The scale, as an estimate.
9. **What went west on purpose.** Pigs, cattle, horses, wheat, fruit trees, sugarcane: what
   multiplied and what it changed. Horses on the Plains.
10. **Foods carried by force.** Rice and okra with enslaved Africans.
11. **Cash crops.** Sugar and tobacco on plantations with coerced labor, shipped mostly to
    Europe; the qualified chain. Bridge to 4.4.
12. **What went east.** Maize, potatoes, cassava, sweet potatoes: staples, nutrition, famine
    insurance.
13. **Myths.** "They had no immunity, so they were doomed"; "disease caused African slavery";
    "the exchange was equal both ways."
14. **Retelling slide** (section 7).
15. **Reasoning (3.B).** Identify the evidence a source uses: Acosta's claim and his count of
    hides.
16. **AP synthesis:** answer the learning objective, causes and effects on both hemispheres, in
    two sentences, then hand off to 4.4.

## 7. Retelling slide

An exchange diagram a student can redraw from memory: the Atlantic in the middle, the Americas on
one side and Afro-Eurasia on the other, with what crossed each way and what it did.

| | To the Americas (west) | To Afro-Eurasia (east) |
|---|---|---|
| **What crossed** | By accident: smallpox, measles, malaria, rats, mosquitoes. On purpose: horses, pigs, cattle, wheat, fruit trees, sugarcane. By force: enslaved Africans, with rice and okra. | Maize, potatoes, cassava, sweet potatoes (and cash crops shipped to Europe). |
| **What it did** | Catastrophic deaths in many areas; land remade by animals and plantations | New staple crops, better nutrition, more people |

Result line: **The ships carried more than anyone meant them to, and it remade populations on
both sides.**

Why this shape: the reasoning move is causation, and the CED asks for the causes and the
effects *on both hemispheres*. The two columns are the two hemispheres; the top rows are the
cause (what crossed, and how), the bottom row is the effect. The authoring standard names the
exchange template for a two-way trade, but its flows carry one short label each, and this slide
needs the three ways of crossing in each direction, so the deck builds it as a two-column matrix
(`split-matrix`, phase `exchange`), which keeps the two directions and has room for the rows.

## 8. Owns / bridge-only (from the unit story map)

- **4.3 owns:** the exchange itself (KC-4.1.V); disease vectors and diseases and their
  catastrophic effect on Indigenous populations (V.A); American foods as staples in
  Afro-Eurasia, and cash crops on plantations with coerced labor (V.B); Afro-Eurasian crops and
  animals carried to the Americas, and foods carried by enslaved Africans, okra and rice (V.C);
  the nutritional benefit in Afro-Eurasia (V.D).
- **Bridge only:**
  - The labor systems and slavery themselves (4.4): encomienda, hacienda, mit'a, chattel
    slavery, the Middle Passage. 4.3 says that plantations used coerced labor, overwhelmingly
    enslaved Africans, and that the next topic explains how.
  - Silver and Potosí (4.5). Not mentioned.
  - Casta (4.7). Not mentioned.
  - The conquests of the Mexica and Inca (taught as conquests nowhere in Unit 4): only the
    Tenochtitlan epidemic and its timing, as a disease case.
  - The disease-to-slavery chain: taught only as a qualified claim.
- **Hands to 4.4:** "Disease emptied the land of workers, and new crops needed them. Who would do
  the work, and who would rule?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-3-CLAIM-LEDGER.md`)

The claims that shaped the story, and how:

| Claim | Status |
|---|---|
| "The largest demographic catastrophe in human history" (current course) | **Removed.** The CED says "catastrophic effects in many areas"; the story says that and gives one regional estimate. |
| Indigenous Americans had "zero immunity" / "no evolved defenses" (current course) | **Narrowed:** nobody had had these diseases before, so nobody had survived them and become immune; war, forced labor and hunger made them deadlier (Jones 2003). |
| Smallpox struck "as Cortés's army was besieging the city" in 1520 (current course) | **Corrected:** the Spaniards were driven out on 30 June 1520; Sahagún dates the epidemic to the end of September; the siege was 1521. |
| Disease caused the Atlantic slave trade (current Skill Builder) | **Narrowed** to the qualified chain; Europeans had already used enslaved Africans on Atlantic-island sugar plantations, and the labor story is 4.4's. |
| Columbus's 1493 voyage carried sugarcane, horses, cattle, pigs and wheat | Verified (Nunn and Qian 2010 for sugarcane from the Canaries; Las Casas, via Irving, for eight hogs bought at Gomera). |
| Central Mexico about 15 million in 1519 to about 1.5 million a century later | Verified as an estimate (Nunn and Qian 2010, citing the demographic literature); stated as "probably" and "about." **Superseded 2026-10-14, review pass 3:** the figure carries no citation in Nunn and Qian and matches no published series in McCaa's table; every surface now gives the range of published estimates (about two-thirds to more than nine-tenths, 1519 to 1595) and Cook and Borah's 1548 and 1605 figures. |
| 1587 fleet: 35,444 hides from Santo Domingo and 64,350 from New Spain | Verified in Acosta, Book IV, ch. 33, in the 1604 translation (Hakluyt Society, 1880, p. 271). |
| Comanche horse culture by the early 1700s | Verified (Hämäläinen, *The Comanche Empire*, 2008, via the NPS: the Comanches adopted the horse in the late 1600s and dominated the southern Plains by the early 1700s). |
| Sweet potato promoted in Fujian in the famine year 1594 | Ledger: independent sources agree on 1593 to 1594; the story uses 1594 for the official promotion. |
| Cassava brought by Portuguese traders from Brazil near the mouth of the Congo | Ledger (FAO-hosted studies of cassava's history in Africa). |
| Okra and rice carried by enslaved Africans | Ledger: the CED's own example; okra recorded in Brazil by 1658; African rice grown by enslaved Africans in the Americas (van Andel 2010). |

## 10. Visual requirements per beat

Pictures are checked against Wikimedia Commons in Phase 6, and the build records which ones were
verified. No image generator key is set in this environment, so AI pictures are skipped and their
prompts saved to `docs/TOPIC-4-3-IMAGE-PROMPTS.md` if any beat needs one.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 4, 5, 9, 12 | One map of what crossed each way | The whole topic on one page. | A local instructional map; flows are schematic, not voyages. Rebuilt in this build. |
| 7 | The Florentine Codex smallpox image (Book 12, f. 54) | Nahua witnesses' own picture of the epidemic. | Painted in the 1570s, decades after 1520; a record, not a photograph. |
| 9 | A 16th- or 17th-century image of cattle or horses in the Americas | Animals carried on purpose, multiplying. | Shopping list if none verifies. |
| 11 | A sugar mill in Brazil or the Caribbean painted or engraved in the 1600s (Frans Post's Brazil paintings, or an engraving in Piso and Marcgrave, 1648) | A plantation and its coerced workers on a real object. | A European artist's view of enslaved people; say so. |
| 12 | An early printed picture of an American crop in Europe or Asia (the potato in Gerard's *Herball*, 1597, or maize in a 16th-century herbal) | American foods arriving and being studied. | A herbal drawing shows a plant, not a diet; caption it that way. |
| 15 | Acosta's text, as a source plate | The 3.B source. | Spelling modernized; say so. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Skill Builder skill:** moves to the CED's suggested skill, 3.B Claims and Evidence in
   Sources, using Acosta's 1590 report on cattle (claim: they "so multiplied"; evidence: the
   hides counted in the 1587 fleet). Checkpoint 2 declares Causation, the CED's reasoning
   process, so Socrates coaches the right move.
2. **Learning targets:** rewritten so target 1 is the causes (KC-4.1.V, the "causes" half of LO
   D), target 2 is disease (V.A), and target 3 is the effects of the crops, animals and foods in
   both directions, including cash crops (V.B, V.C, V.D).
3. **Map module:** the exchange map is rebuilt to draw American crops reaching Africa, Europe and
   Asia, and silver and rubber are removed.
4. **Evidence Lab:** Potosí and casta leave (4.5 and 4.7); cards are chosen for the two
   directions of the exchange and verified on Commons.
5. **BeSurreal:** kept as a healer in Tenochtitlan, moved to the autumn of 1520, with the
   training detail corrected.
6. **Primary Source:** the Florentine Codex stays, in James Lockhart's credited translation, with
   questions that practice 3.B.
7. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10
   Checkpoint 2.

## 12. Schedule, required modules and Canvas (Phase 8)

**Class dates: open.** The schedule ends at 4.2 (Green Friday 2026-10-30, Silver Monday
2026-11-02) and names no later school day, so 4.3 has no schedule entries. When Jeff gives the
two dates, one commit does all of this:

1. Add 4.3's Green and Silver days to `assets/data/announcements-schedule.js`, each with
   `modules: ['02', '05', '07', '10']` and the usual homework line. 4.2's two
   `homeworkDue: 'your next class'` lines and their comments then come out, because 4.2's due
   dates are derived from 4.3's days.
2. Uncomment the 4.3 line in `TOOLS` in `scripts/build-teacher-index.js`, so the teacher command
   center lists the deck and the Today panel routes to it. It is commented out because
   `scripts/test/teacher-today.test.js` requires every listed lesson to be scheduled.
3. Run `npm run build:announcements && npm run build:canvas-events && node scripts/build-teacher-index.js`.
   The Canvas overview for 4.3 is already written in `scripts/build-canvas-events.js`.

**Required modules (the build's call, for Jeff to overrule):**

| Module | Why it is required |
|---|---|
| 02 First & 10 | The common story every student reads; its question 02 is the first 3.B practice. |
| 05 Skill Builder | The CED's suggested skill, 3.B, modeled on Acosta and practiced on the Qing source. |
| 07 Evidence Lab | Five real objects, one claim from two sources, one from each direction of the exchange. |
| 10 Checkpoint 2 | Answers the learning objective: the cause, and one effect in each hemisphere. |

Checkpoint 1 (disease) stays optional, as on 4.1 and 4.2; its content is carried by the First &
10, the deck's Tenochtitlan and mechanism slides, and Checkpoint 2's coaching. BeSurreal, Primary
Source and BeInTheRoom stay optional extensions.

**Time:** the deck's authored minutes total 80 against the 80-minute budget (plus a 5-minute
reserve). **Teacher-launched activities:** 6 (BeReady, First & 10, the retelling, Skill Builder,
Evidence Lab, Checkpoint 2), inside the 5 to 7 range from the 2026-09-15 decision.
