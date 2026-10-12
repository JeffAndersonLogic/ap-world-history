# Topic 4.2 Story Draft: Exploration: Causes and Events from 1450 to 1750

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "update topic 4.2". The Phase 9 reviewers check this story against
the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-2-CLAIM-LEDGER.md`, under "Review findings".

**Taught:** Green Friday 2026-10-30, Silver Monday 2026-11-02. Those are the two days 4.1's
schedule entries already name as each cohort's next class (`homeworkDue` on 4.1's days in
`assets/data/announcements-schedule.js`), so they are Jeff's dates, not new ones.

**Branch baseline:** `claude/topic-4-2-build`, branched from `claude/4-1-build-readiness-vsdoxa`
at `17d88e0`. Topic 4.1 is on `main` (`ae45f9b`); the one commit above it is the 2026-10-12
standing-rule change to the build skill and `CLAUDE.md`, which this build follows.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, pp. 79 and 80 (topic pages), p. 75 (Unit at a Glance) and p. 77
(sample activity). This draft quotes that file and nothing else for what the CED requires. The
unit story map (`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the
hand-offs and the owns / bridge-only split; it agrees with the source file on 4.2.

---

## 1. What the CED requires (pp. 79 and 80)

- **Learning objective B (Governance, GOV):** Describe the role of states in the expansion of maritime exploration from 1450 to 1750.
- **Learning objective C (Economic Systems, ECN):** Explain the economic causes and effects of maritime exploration by the various European states.
- **KC-4.1.III** (LO B): New state-supported transoceanic maritime exploration occurred in this period.
- **KC-4.1.III.A** (LO C): Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.
- **KC-4.1.III.B** (LO C): Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.
- **KC-4.1.III.C** (LO C): Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.
- **Reasoning move:** Causation, the CED's reasoning process for 4.2 (p. 75). The story answers
  *why* states paid for voyages (the causes, LO B and LO C) and *what the voyages produced* (the
  effects, LO C), for each of the states the Key Concepts name.
- **Suggested skill:** 5.B Making Connections, "Explain how a historical development or process
  relates to another historical development or process." In this topic the connection is
  between states: one state's voyage changed what the next state decided to pay for.
- **Thematic focus:** Governance (GOV); Economic Systems (ECN). (The CED prints "Economics
  Systems"; the source file records that and this draft uses the theme's usual name.)
- **Illustrative examples:** none. The CED gives 4.2 no illustrative examples, so every name in
  this story (Henry, Dias, da Gama, Columbus, Magellan and Elcano, Cabot, Verrazzano, Cartier,
  Barentsz, Hudson) is a teaching choice, not a CED requirement. The fewest that tell the story
  are used.
- **Sample activity (p. 77, optional):** Making Connections: students brainstorm what they
  remember about technological developments in Asia from earlier units and what they learned
  about European exploration, then build a concept web of the causal connections. 4.1 already
  did the technology half; 4.2's BeReady retrieves it and the Skill Builder practices 5.B.

**Three things in these sentences that are easy to drop.**
1. **"Effects."** LO C asks for economic causes *and effects*. The current pages have plenty
   of motives and almost no effects (the unit story map, conflict 10, found effects only in
   Checkpoint 2).
2. **"The role of states."** LO B is not "the explorers." It is who paid, with what, and what
   they asked for in return. A list of explorer names does not answer it.
3. **"English, French, and Dutch."** Three states, with equal standing beside Portugal and Spain.
   The current Evidence Lab has no card for them and the map draws none of their routes.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-2-exploration.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-2.js`, the BeInTheRoom source in
`scripts/build-unit4-rooms.js`, the map spec `topic-4-2` in `scripts/lib/instructional-map-specs.js`,
and the 4.1 audit record.

**Consistent with the CED:**
- The renderer config carries both learning objectives and all four Key Concepts.
- The three learning targets cover KC-4.1.III, III.A, III.B and III.C, and target 3 already
  gives the northern crossings their own line.
- Checkpoint 2 asks for one Iberian and one northern voyage, each with a sponsor, an economic
  cause and an economic effect. That is LO B and LO C in one prompt.
- The deep reading, "Who Paid, and What For," is built on the right question and already
  rejects the 1453 shortcut and the Sagres school. It is the best existing surface.

**Out of line, each fixed inside this build:**
1. **The 1453 shortcut.** The First & 10 says the Ottoman conquest "intensified" the spice
   problem and that the Ottomans "now controlled the principal land and sea routes" from Asia.
   The spice route through Egypt and the Red Sea was Mamluk until 1517, Portugal's voyages
   began decades before 1453, and the unit story map gives 4.2 only the qualified version.
   The Skill Builder repeats it ("bypassing Ottoman-controlled spice routes").
2. **The Sagres myth,** in the First & 10 (twice, "court at Sagres became a center for
   gathering geographic knowledge"), lecture card 1 and Skill Builder step 3. The 4.1 deck
   tells the teacher this is a myth one class earlier (4.1 audit, adjacent finding).
3. **Superlatives and firsts:** "Magellan led the first circumnavigation" (lecture card 3, First
   & 10 section 4; Elcano completed it); da Gama's cargo "sixty times" the cost (lecture, First
   & 10, Evidence Lab items); "the globe had been connected for the first time in human
   history"; the hemispheres "in complete isolation"; Tordesillas ignoring "the hundreds of
   millions of people"; "one of the most important figures in the history of exploration."
4. **Tordesillas "brokered by Pope Alexander VI."** The 1493 line was papal; Tordesillas
   (1494) was negotiated between the two crowns and moved that line. Repeated in the deep
   reading ("the line the pope's mediation drew").
5. **Ownership drift** (unit story map conflict 5): the conquests of the Mexica and Inca,
   smallpox, the Taíno population collapse and encomienda (lecture card 3, First & 10 section
   3) belong to 4.3 and 4.4; the Columbian Exchange and the Manila galleon (First & 10 section
   4) to 4.3 and 4.5; chartered companies (deep reading section 4) to 4.5.
6. **Skill tags and skills out of line:** the reading's skill tags are Causation,
   Contextualization and Argumentation, its question 2 is labeled Continuity & Change, and the
   Skill Builder teaches Causation. Nothing practices 5.B Making Connections.
7. **The Map module's text describes the Waldseemüller map; its picture is the local routes map**
   (`assets/images/instructional-maps/topic-4-2.svg`). Students are asked about "the shape of
   the Americas on this early map," which they cannot see. The map draws no English, French or
   Dutch route, and its key says the Portuguese went south "from 1415" (Ceuta was a conquest in
   Morocco).
8. **Evidence Lab:** no card for the northern crossings (story map conflict 10); the 1507 map is
   also 4.1's card; `evidenceLab.items` (never rendered) carries the "sixty times" figure.
9. **Module-card pictures from other topics** (`stableImages`): the Florentine Codex smallpox
   scene (4.3), a VOC ship (4.5), a 1936 Pueblo Revolt mural (4.6), an 18th-century Persian
   astrolabe (4.1), a 1700 world map.
10. **BeSurreal:** "33 days since leaving the Canary Islands." The fleet left La Gomera on
    6 September 1492; the light was seen on the night of 11 October, about five weeks later.
11. **BeInTheRoom (The Santa Fe Bargain):** its alignment objective is not either CED learning
    objective; several roles are written above a ninth grader; it says Castile "possessed" the
    Canaries in 1492, when Tenerife and La Palma were not yet conquered.
12. **Leftovers:** `first10.note` and the renderer config still say "build your AI Coach
    prompt" (retired 2026-08-31); the reading carries a `builderBody`; the subtitle names only
    "the Portuguese and Spanish."
13. **CLAUDE.md** says Topic 4.2's Checkpoint 2 declares an explicit empty skill. The data file
    declares none (4.1 audit, adjacent finding). This build declares `Causation`, the CED's
    reasoning process, and corrects the sentence.

## 3. The ninth-grade story

Last topic ended with a problem solved. Thanks to borrowed tools, new ships and the volta do mar,
a ship could now sail out into the Atlantic and come home. But a voyage cost a fortune: ships,
food for months, wages for dozens of sailors, and a good chance that nobody came back with
anything to sell. So who paid, and what did they want?

Start with what Europe wanted: the goods of Asia, above all spices. Pepper grew on the
southwest coast of India and cost little there. By the time it reached a market in Europe it had
passed through many hands. Indian Ocean merchants carried it to the Red Sea or the Persian Gulf,
it crossed Egypt or Syria, and Venetian merchants bought it in ports such as Alexandria and
shipped it to Europe. Every one of those traders took a cut, so the price in Europe was many
times the price in India. Whoever could sail straight to India could buy at the low price and
sell at the high one.

You may have heard that the Ottomans captured Constantinople in 1453 and "closed" the spice
road, so Europe had to go by sea. It is not true. The spice trade through Egypt and Venice kept
running, and Portugal's voyages down the coast of Africa had already been going for decades
before 1453. The main economic reason was the cost of all those middlemen, along with Portugal's hunt for West African gold.

A voyage into unknown water might take years and return nothing, and few merchants would risk
that alone. So rulers backed the voyages, in two ways. Sometimes the crown paid for the ships.
Sometimes it licensed a merchant or a captain to explore at his own cost, in return for a share
and a claim: England's Henry VII did that for John Cabot in 1496, and Portugal leased the Guinea
trade to the merchant Fernão Gomes in 1469 on condition that he explore new coast every year.
Either way rulers paid in things that cost them nothing up front (titles, a share of future
profits, the right to govern whatever was found) and set the terms. That is the **role of
states**.

**Portugal went first, and step by step.** In 1415 Portugal captured Ceuta, a Muslim port in
North Africa. From the 1420s a royal prince, Henry, paid for voyage after voyage down the coast
of West Africa. He did not go on those voyages himself, and the famous "school of navigation" at Sagres is a
legend. Portuguese sailors built light caravels, mapped the coast as they went and learned the
Atlantic's winds, so each voyage's charts helped the next go farther. Each voyage also came
back with something: gold, ivory, pepper
from the West African coast, and from the 1440s, enslaved Africans. Each return made the next
voyage easier to pay for and easier to justify. In 1482 Portugal built a fort at Elmina, on the Gold Coast, to trade for
gold, a royal trade that made the crown much richer. In 1488 Bartolomeu Dias rounded the southern tip of Africa. In 1498 Vasco da Gama reached
Calicut in India. He lost two of his four ships and more than half his men, but the spices he
brought home showed how much money the sea route could make.
Portugal then built a chain of fortified trading posts from Africa to India and on to Southeast
Asia, at ports such as Goa and Malacca. It did not conquer large lands; it held ports and tried
to control the sea trade between them. That is the **global trading-post empire** the College
Board names.

**Spain gambled on a shortcut.** Christopher Columbus, a sailor from Genoa, wanted to reach Asia
by sailing west. Portugal's king turned him down, because his experts judged that Columbus had
badly underestimated the distance, and they were right. Portugal also already held the route
south along Africa, so if Spain wanted its own way to Asia, it would have to be west. In 1492,
right after conquering Granada, Queen Isabella and King Ferdinand signed a contract with
Columbus. If he succeeded he would be Admiral of the Ocean Sea, govern the lands he found, and
keep a tenth of the wealth from them. Columbus reached the Caribbean in October 1492, not Asia,
and he brought back little gold. But the news spread across Europe fast, and Spain's next fleet,
in 1493, was at least seventeen ships instead of three. In 1494 Spain and Portugal signed the
Treaty of Tordesillas, drawing a line through the Atlantic to split the lands they would claim
between them. In 1519 Ferdinand Magellan, a Portuguese captain working for Spain, sailed west to
reach the Spice Islands across the Pacific. Magellan was killed in the Philippines in 1521, and
in 1522 Juan Sebastián Elcano brought one ship and eighteen of the crew back to Spain, the first
voyage around the world. That is the CED's "voyages across the Atlantic and Pacific," and the
effect it names is the one that matters: these voyages **dramatically increased European
interest** in ocean travel and trade.

**Then the northern states joined in.** England, France and the Dutch wanted the trade of Asia
too, but Portugal held the route around Africa and Spain held the route west. So they looked for
another way: across the North Atlantic and around the top of the world. In 1496 England's king
licensed John Cabot, an Italian sailor, to sail west at his own and his backers' cost, and in
1497 he reached the coast of North America. France sent Giovanni da Verrazzano along that coast in 1524 and Jacques Cartier up the
St. Lawrence River in the 1530s. Dutch voyages under Willem Barentsz in the 1590s tried to sail
around the north of Russia, and in 1609 Henry Hudson, sailing for a Dutch trading company,
explored the river that now carries his name. None of them found a sea route to Asia; Arctic ice
blocked every way through. But the voyages paid in other ways: rich cod fishing off Newfoundland,
furs traded with Indigenous peoples along the St. Lawrence, and claims to North American coasts
that these states would build colonies on later.

Here is the pattern. A ruler backed a voyage. A voyage came back with gold, spices, or news of new lands.
That return made the next voyage easier to fund, and it made rival rulers want voyages of their
own. Who paid, what they wanted, and what they got is the whole topic.

What none of them planned was what else the ships carried. Columbus was looking for a route to
Asia. What he started was an exchange of living things nobody planned. That is Topic 4.3.

## 4. The spine

**Rulers paid for voyages because they wanted the trade, and every voyage that paid made the
next one easier to fund.** (Approved with the unit story map, 2026-10-11.)

"Paid" is read as the story reads it: a voyage paid when it came back with gold, spices or news
of new lands that persuaded someone to fund the next one. Columbus's first voyage paid in news,
not gold, and that is still what made the second fleet more than five times larger.

"Paid for" also has to cover licensing. The first review pass (see the claim ledger) found that
England's crown licensed Cabot rather than funding him, and that Portugal leased exploration to a
merchant in 1469. The approved spine is kept, and every surface says rulers **backed** the
voyages, by paying for them or by licensing them.

Shorter for the wall: **Rulers backed the voyages. Voyages paid back. More ships sailed.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The spice chain: pepper cheap in India, expensive in Europe, many middlemen | LO C (economic cause) | The economic cause, stated as a mechanism: a sea route to the source cuts out the middlemen. |
| 1453 did not close the spice trade; Portuguese voyages began about thirty years earlier | LO C (cause), story map's qualified 1453 | Corrects the most common wrong cause. Bridge only, one paragraph and one myth row. |
| A voyage cost a fortune and might return nothing; rulers paid for some and licensed others, and paid in titles, shares and rights | KC-4.1.III, LO B | The role of states: how rulers backed voyages, and why. |
| The Capitulations of Santa Fe, April 1492: Admiral, governor, a tenth | KC-4.1.III.B, LO B | A real state contract. What a ruler offered and what it asked for. |
| Henry, a royal prince, paying for voyages down the coast; Ceuta 1415; gold, ivory, pepper and enslaved people from the 1440s; Elmina 1482 | KC-4.1.III.A, KC-4.1.III | State sponsorship, step by step, each return paying for the next. |
| Dias 1488, da Gama 1498 to Calicut and a profitable return | KC-4.1.III.A | Increased travel to and trade with Asia; the economic effect. |
| Goa and Malacca: forts at ports, not large conquests | KC-4.1.III.A ("global trading-post empire") | The effect the CED names. **Bridge to 4.4**, which owns how the posts worked and how Asian states answered. |
| Portugal rejected Columbus; Portugal already held the African route | KC-4.1.III.B, 5.B | One state's decision connected to another's: Spain had to go west. |
| Columbus 1492; second fleet 1493 of at least seventeen ships | KC-4.1.III.B ("dramatically increased... interest") | The effect the CED names: interest, shown by the jump in investment. |
| Tordesillas, 1494 | KC-4.1.III, KC-4.1.III.B | States dividing claims between themselves; why the latecomers had to go north. |
| Magellan and Elcano, 1519 to 1522 | KC-4.1.III.B ("across the Atlantic and Pacific") | The Pacific crossing; Elcano completed it. |
| Cabot 1497 (England), Verrazzano 1524 and Cartier 1530s (France), Barentsz 1590s and Hudson 1609 (Dutch) | KC-4.1.III.C | Northern crossings under three sponsors, looking for another route to Asia. |
| Cod, furs, and claims to North American coasts | LO C (economic effect) | What the northern voyages produced instead. **Bridge to 4.4** for the colonies themselves. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.1: why was getting home the hardest part of an Atlantic voyage?
   (b) From 4.1: name one tool Europe borrowed and the older world it came from.
   (c) From 2.3: name one good that traveled from the Indian Ocean toward Europe.
   **Bridge:** "Ships could now go and come back. But a voyage cost a fortune. Who paid for
   them, and what did they want?"
3. **Topic question on screen:** Why did rulers pay for ocean voyages, and what did they get?
4. **The cause: the spice chain.** Pepper in India, the middlemen, the price in Europe.
5. **How rulers backed voyages.** Paying for them, or licensing them; payment in titles, shares and rights.
6. **Portugal, step by step.** Ceuta, Henry's voyages, Elmina, Dias, da Gama: each return paid
   for the next.
7. **Portugal's effect.** A trading-post empire: forts at ports from Africa to Asia.
8. **Spain's gamble.** Columbus turned down by Portugal, signed by Isabella and Ferdinand; the
   contract.
9. **Spain's effect.** 1492, then seventeen ships in 1493; Tordesillas; Magellan and Elcano
   across the Pacific. Interest in ocean trade jumps.
10. **The northern crossings.** England, France and the Dutch, shut out of the south, look for
    another way to Asia.
11. **What they found instead.** Cod, furs, and claims.
12. **The pattern (mechanism).** A ruler pays, a voyage pays back, more rulers pay: the snowball.
13. **Myths.** 1453 closed the trade; Henry ran a school; Magellan sailed around the world.
14. **Retelling slide** (section 7).
15. **Reasoning.** Sharpen one causal claim; the Skill Builder practices 5.B: connect one
    state's voyage to another state's decision.
16. **AP synthesis:** answer both learning objectives in two sentences, then hand off to 4.3.

## 7. Retelling slide

A matrix a student can redraw from memory: three columns, one per group of states, and three
rows that are the causal chain of the topic.

| | Portugal | Spain | England, France, Dutch |
|---|---|---|---|
| **Who backed** | Prince Henry, then the kings | Isabella and Ferdinand | English and French kings; Dutch leaders, then a trading company |
| **What they wanted** | Gold, then spices, by going around Africa | Asia's trade by sailing west | Another route to Asia, in the north |
| **What they got** | A trading-post empire from Africa to Asia | The Americas, and the Pacific crossed; all of Europe interested | No route to Asia; fish, furs and claims |

Result line: **Every voyage that paid made the next one easier to fund, and made rivals want
their own.**

Why a matrix: the reasoning move is causation, and each column is one complete cause-to-effect
chain for one state, answering LO B (row 1) and LO C (rows 2 and 3). Reading across a row makes
the connections between states visible, which is the suggested skill, 5.B.

## 8. Owns / bridge-only (from the unit story map)

- **4.2 owns:** state sponsorship; Portugal's route around Africa and its trading-post empire
  (KC-4.1.III.A); Spain's sponsorship of Columbus and the Atlantic and Pacific voyages that
  followed (KC-4.1.III.B); the English, French and Dutch northern crossings (KC-4.1.III.C); the
  qualified 1453 story.
- **Bridge only:**
  - The conquests of the Mexica and Inca, smallpox and the Taíno population collapse (4.3),
    encomienda and other labor systems (4.4). One sentence at most: "what came next is the
    next three topics."
  - How the trading posts worked and how Asian and African states answered them (4.4).
  - Joint-stock companies, the VOC as a company, the Manila galleons and silver (4.5). Hudson
    sailed "for a Dutch trading company"; what that company was is 4.5.
  - The enslaved Africans Portugal bought from the 1440s are named as part of what the voyages
    brought back; the Atlantic slave trade and plantation labor are 4.4.
  - The tools that made the voyages possible (4.1), only as retrieval.
- **Hands to 4.3:** "Columbus was looking for a route to Asia. What he started was an exchange
  of living things nobody planned."

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-2-CLAIM-LEDGER.md`)

The claims that shaped the story, and how:

| Claim | Status |
|---|---|
| 1453 closed or blocked the spice trade (current course) | **Not used**, except as a myth corrected. The route through Mamluk Egypt (Ottoman only from 1517) and Venice continued. |
| Henry ran a school of navigation at Sagres (current course) | **Not used**, except as a myth corrected. He sponsored voyages; the school is a later legend. |
| Da Gama's cargo paid for the voyage "sixty times over" (current course) | **Removed.** No source names where the figure comes from. The story says he lost two of four ships and over half his men, and the spices showed how much the route could make. |
| Magellan "led the first circumnavigation" (current course) | **Narrowed:** Magellan led the expedition and died in 1521; Elcano completed it. |
| Tordesillas was brokered by the pope (current course) | **Narrowed:** papal bulls drew a line in 1493; the two crowns negotiated Tordesillas in 1494 and moved it. |
| Spain had to go west because Portugal held the African route | Ledger: the 1479 Treaty of Alcáçovas recognized Portugal's rights south of the Canaries. The story says "already held," not the treaty's name. |
| The 1493 fleet was at least seventeen ships | Verified (Britannica: "at least 17 ships carrying more than 1,300 people"). |
| Elmina's gold paid for later voyages | **Narrowed:** no source says so directly. The story says the gold trade made the crown richer and each return made the next voyage easier to pay for. |
| Every northern crossing failed to find a passage to Asia | Ledger: no Northwest Passage was sailed until 1903 to 1906; no Northeast Passage until 1878 to 1879. |

## 10. Visual requirements per beat

Commons was rate-limited from this session (HTTP 429 on the first request) and no image
generator key is set, so the build uses pictures already verified in the repo and local
instructional maps, and the shopping list below goes to Jeff.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 4 | A diagram of the spice chain | The cause is a chain of middlemen. | A diagram, not evidence. |
| 6 to 11 | One map of the three ways to Asia: around Africa, west, and north | The whole topic on one page. | A new local instructional map; routes are schematic; say so. |
| 8 | The Capitulations of Santa Fe (1492), held in the Archive of the Crown of Aragon | A real state contract. | Shopping list: verify a Commons file before use. |
| 9 | Columbus's printed letter of 1493, or the 1494 Treaty of Tordesillas (Archivo General de Indias) | Interest spreading; states dividing claims. | Shopping list. |
| 7 | The Cantino planisphere (1502) | A Portuguese map smuggled to Italy: the Tordesillas line, the African forts and the route to India on one real object. | Shopping list; verify before use. |
| 6 | The Pillar of Vasco da Gama at Malindi | A Portuguese claim marker. | Already in the repo; the pillar was put up in 1498 and is much repaired; caption it as a monument. |
| 10 | Cartier or Cabot as depicted, or a 16th-century map of the Gulf of St. Lawrence | The northern crossings as a real source. | Shopping list. A modern statue or a later portrait is not evidence of the voyage. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Skill Builder skill:** moves to the CED's suggested skill, 5.B Making Connections: connect
   one state's voyage to another state's decision. Checkpoint 2 keeps Causation, the CED's
   reasoning process, and declares it so Socrates coaches the right move.
2. **Learning targets:** rewritten so target 1 is the role of states (LO B) and targets 2 and 3
   name economic causes *and effects* (LO C), with Magellan replaced by "voyages across the
   Atlantic and Pacific," the CED's own words.
3. **Map module:** the routes map is rebuilt to draw the northern crossings too, and its text
   rewritten to describe the map students actually see.
4. **Evidence Lab:** a card for the northern crossings is added; the 1507 map stays only if the
   prompt asks a 4.2 question of it (what the voyages changed about European knowledge).
5. **BeSurreal:** kept as a sailor on Columbus's fleet, with the dates fixed and the prompt
   asking who paid for the voyage and what they expect it to bring back.
6. **Primary Source:** Columbus's journal stays. It is a real text (Las Casas's abstract) and its
   claim of possession "for the King and Queen" is the role of states in one line. The "God,
   Glory, and Gold" question is replaced with one about what the monarchs were paying for.
7. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10
   Checkpoint 2.
