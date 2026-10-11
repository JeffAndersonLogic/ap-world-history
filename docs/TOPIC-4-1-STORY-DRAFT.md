# Topic 4.1 Story Draft: Technological Innovations from 1450 to 1750

**Status: Draft for Jeff's review, 2026-10-11. Not approved.** To be reviewed together with
`docs/UNIT-4-STORY-MAP.md` (Jeff's choice, 2026-10-11). Nothing downstream of this draft has
been built.

**Taught:** not on the schedule yet. The last scheduled Unit 3 days are the Unit 3 Quiz
(Green 2026-10-28, Silver 2026-10-29). 4.1's dates are a question for Jeff (question 9 below).

**Branch baseline:** `claude/4-1-build-readiness-vsdoxa`, branched from `main` at `bc737ef`.
Topic 3.4 is already on `main` and approved, so nothing from Unit 3 is pending underneath this.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, p. 78 (topic page) and p. 75 (Unit at a Glance). This draft quotes
that file and nothing else for what the CED requires. The unit story map supplies the
hand-offs and the owns / bridge-only split.

---

## 1. What the CED requires (p. 78)

- **Learning objective (Unit 4: Learning Objective A):** Explain how cross-cultural
  interactions resulted in the diffusion of technology and facilitated changes in patterns of
  trade and travel from 1450 to 1750.
- **KC-4.1.II:** Knowledge, scientific learning, and technology from the Classical, Islamic,
  and Asian worlds spread, facilitating European technological developments and innovation.
- **KC-4.1.II.A:** The developments included the production of new tools, innovations in ship
  designs, and an improved understanding of regional wind and currents patterns—all of which
  made transoceanic travel and trade possible.
- **Reasoning move:** Causation, the CED's reasoning process for 4.1 (p. 75). The story has to
  answer *how* contact with older worlds produced the tools and *how* the tools changed where
  people could travel and trade.
- **Suggested skill:** 4.A Contextualization, "Identify and describe a historical context for a
  specific historical development or process." The context here is the older Afro-Eurasian
  networks students met in Unit 2, which is where Europe's tools came from.
- **Thematic focus:** Technology and Innovation (TEC).
- **Illustrative examples (optional; the CED says they are "not in any way" required):**
  - Innovations in ship design: caravel, carrack, fluyt.
  - European technological developments influenced by cross-cultural interactions with the
    Classical, Islamic, and Asian worlds: lateen sail, compass, astronomical charts.
- **Sample activity:** none for 4.1. (The p. 77 Making Connections activity is assigned to 4.2,
  but it connects Asian technology to European exploration, so 4.2 can reuse 4.1's work.)

**Three things in these sentences that are easy to drop.**
1. **"Patterns of trade and travel."** The objective does not stop at the tools. It ends at a
   change in *where people traveled and traded*. None of 4.1's current learning targets says
   this (constraint check, item 2).
2. **"Regional wind and currents patterns."** This is the one item on the list that Europe could
   not borrow. It is a third of KC-4.1.II.A and it gets one bullet in the current lecture.
3. **"Classical, Islamic, and Asian."** Three worlds, not one. The current pages lean on "Arab"
   for almost everything, including one claim scholars reject (the lateen sail; see section 9).

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data,
the renderer config, the First & 10 entry in `scripts/lib/reading-content/unit-4.js`, the deep
reading `scripts/lib/deep-reading-content/topic-4-1.js`, the map SVG, and the Unit 4 deep audit.

**Consistent with the CED:**
- The three learning targets and three success criteria carry KC-4.1.II and KC-4.1.II.A.
- Checkpoint 2 (repaired 2026-09-18) asks for two earlier traditions, one ship design and one
  wind or current pattern. That is KC-4.1.II plus KC-4.1.II.A.
- The deep reading / eBook chapter, "Sailing Away to Get Home," is already built on the right
  problem (the Atlantic's winds and the return voyage) and says plainly that Europeans were not
  better sailors. It is the best existing surface and this story borrows its frame.
- The CED's reasoning process is causation and the Skill Builder is labeled "Causation practice."

**Out of line, each with where it gets fixed:**
1. **Nothing practices the CED's suggested skill, 4.A Contextualization.** The Skill Builder
   teaches causation. Teaching call (question 3).
2. **No learning target names "changes in patterns of trade and travel."** The objective's
   second half is unassessed. Teaching call (question 4).
3. **The Map module is titled and captioned "The Waldseemüller Map, 1507," but its picture is
   the local diffusion map** (`assets/images/instructional-maps/topic-4-1.svg`, "What Europe
   Knew, and How It Learned It"). Students are asked what a map they cannot see "gets wrong."
   Page-truth failure. Fixed in this build (question 5).
4. **The printing press and the Waldseemüller map carry more weight than the CED gives them**
   (subtitle, map module, First & 10 section 4, vocabulary chips, Skill Builder step 3). The
   deep audit flagged this on 2026-09-18 and it was not fully repaired. Printing is not in 4.1's
   CED text; it becomes a one-line mention at most.
5. **Factual problems, all logged in section 9 and the claim ledger:**
   - The lateen sail is presented as an Arab sail Portugal borrowed. Scholarship dates it to the
     Roman-era Mediterranean, before Islam, and rejects Arab invention.
   - The compass is said to have reached Europe "via Arab trade networks by c. 1100." European
     use is first recorded c. 1190, and how it got there is debated.
   - The first lecture card's picture is an 18th-century Persian astrolabe captioned as "used to
     determine latitude at sea." That kind of astrolabe was an astronomer's instrument; the sea
     version was a different, simpler object.
   - The caravel is said to have "combined square sails and lateen sails" from the 1440s.
     Exploration caravels were lateen-rigged; the square-rigged caravel came at the end of the
     century.
   - "By c. 1450 a trained Portuguese pilot had" the cross-staff and quadrant. The cross-staff is
     later; the mariner's astrolabe is first recorded at sea c. 1481.
   - The First & 10 says the Atlantic "had no reliable seasonal winds." Its trade winds are very
     reliable; what they do not do is reverse like the monsoon. That difference *is* the story.
   - The First & 10 equates "volta do mar" with "latitude sailing." They are different things.
   - The map key says the Portuguese extended the African coast "southward from 1415." 1415 is
     Ceuta, a conquest in Morocco; the coastal voyages came later.
6. **The BeSurreal is set at "Prince Henry's court at Sagres" among assembled pilots,
   cartographers and astronomers, with an Arab pilot at the table.** The "school of Sagres" is a
   myth that historians reject. Rewritten in this build (question 6).
7. **The Primary Source is an "adapted passage" attributed to João de Barros.** Whether it is a
   real passage or written for the lesson has to be checked before it stays (question 7).
8. **Five module-card pictures belong to other topics** (`stableImages` in the renderer config):
   a Florentine Codex smallpox scene (4.3), a casta painting (4.7), the Qianlong Emperor and
   Shah Abbas (Unit 3 material), a VOC ship (4.5). A picture problem for the visual plan.
9. **Leftovers:** the `first10.note` still says "build your AI Coach prompt" (retired
   2026-08-31), in both the lesson data and the renderer config; the reading carries a
   `builderBody`; the subtitle has em dashes; the First & 10 includes a Polynesian section that
   is accurate but off this topic's CED.

None of these is changed by this draft.

## 3. The ninth-grade story

You already know the Indian Ocean ran on a schedule. In winter the monsoon blows one way, in
summer it turns around, so a merchant could sail to East Africa, trade, wait, and ride the
reversed wind home. Sailors there had the compass and the astrolabe, and in the early 1400s
Zheng He's fleets showed how big a ship and how long a voyage could be.

Now stand on the coast of Portugal around 1430. The Atlantic is right in front of you, and it
does not work like that. Off the coast of Africa the wind blows from the northeast nearly all
year. Sailing south is easy. Coming back means fighting that wind the whole way, and it never
turns around for you. Out past the coast there are no islands to hop between and no landmarks
at all. Getting there was never the hard part. Getting home was.

Europe solved that problem mostly with tools it did not invent. The **compass** came from China,
where sailors were using magnetic needles at sea by about 1100; Europeans were writing about it
by about 1190, and historians still argue over how it traveled. The **astrolabe** started as a
Greek idea and was perfected by astronomers in the Islamic world, and it reached Europe through
Muslim Spain. Portuguese pilots stripped it down into a heavy brass sea version that could
measure the noon sun from a rolling deck, and by the 1480s they were using it to find their
**latitude**: how far north or south they were. A sun reading only means something if you know
where the sun should be that day, so they needed **astronomical tables**, and those had a family
tree too: Muslim and Jewish astronomers at Toledo, then the tables of a Castilian king, then the
almanac of a Jewish astronomer named Abraham Zacuto, printed in Portugal in 1496 and carried by
Portuguese fleets. And the triangular **lateen sail**, which can take the wind from the side, had
been sailing the Mediterranean since Roman times and was everywhere in the Islamic world's seas.

Europe's own contribution was the assembly, and new ships to carry it. The **caravel** was small
and light with lateen sails, so it could work against the wind and slip along unknown coasts.
The **carrack** was big, with square sails to run before the wind and room for months of food,
cargo and guns: a ship for long hauls. Much later, around 1600, the Dutch **fluyt** did one job
better than anything else afloat: it carried a lot of cargo with a small, cheap crew, which is
what makes ocean trade actually pay.

The last piece was something no one could borrow, because nobody had needed it before: the
**wind map of the Atlantic**. Over decades of voyages in the 1400s, Portuguese sailors learned
that the Atlantic's winds turn in a giant wheel. To get home from Africa, you sail *away* from
it, out west into the open ocean, until you reach the winds that blow back toward Europe. They
called the loop the **volta do mar**, the "turn of the sea." It feels backwards, and it works.

Put it together and the ocean became a road that ran both ways. In 1488 Bartolomeu Dias reached
the southern tip of Africa. In 1492 Columbus rode the trade winds west and the westerlies home.
In 1497 Vasco da Gama swung so far out into the Atlantic that his ships saw no land for about
three months, came around Africa, and reached India in 1498. That is the change the CED cares
about: goods and people could now travel by sea between Europe and Asia, and across the
Atlantic between hemispheres that had not been connected, and trade began to move along routes
that had not existed before.

Here is the twist. In 1400, Europe did not have the best ships or the best navigators in the
world; the Indian Ocean and China did. Europe faced a harder ocean, and it solved it by putting
together knowledge from older worlds. The breakthrough was a combination, not a European
invention.

Ships could now go and come back. But a voyage cost a fortune. Who paid for them, and what did
they want? That is Topic 4.2.

## 4. The spine

**Europe borrowed its sea tools from older worlds, built new ships around them, and learned the
Atlantic's winds, and that turned the ocean into a road that ran both ways.**

Shorter for the wall: **Borrowed tools. New ships. Learn the wind. Now the ocean goes both
ways.**

The unit spine (see the unit story map) is carried by the last paragraph: the ocean becoming a
two-way road is what every later Unit 4 topic depends on.

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The monsoon versus the Atlantic wind wheel | KC-4.1.II.A (wind and currents) | Why Europe's problem was different: the return voyage. This is the context the whole topic sits in. |
| Compass (China, at sea by c. 1100; in Europe by c. 1190) | KC-4.1.II (Asian world); illustrative example | Knowledge from the Asian world reached Europe. The route is debated, so the claim is the arrival, not the path. |
| Astrolabe and the mariner's astrolabe (in use at sea by the 1480s) | KC-4.1.II (Classical and Islamic); KC-4.1.II.A (new tools) | A Classical idea, perfected in the Islamic world, adapted by Europeans into a new tool. Diffusion plus innovation in one object. |
| Astronomical tables: Toledo, then Zacuto's almanac (printed 1496) | KC-4.1.II (scientific learning); illustrative example | Latitude needs data, and the data came from Islamic and Jewish astronomy. |
| Lateen sail | KC-4.1.II (Classical and Islamic worlds); illustrative example | A Mediterranean sail of Roman origin, common across the Islamic world's seas, that let ships work against the wind. |
| Caravel, carrack, fluyt | KC-4.1.II.A (ship design); illustrative examples | Three ships, three jobs: explore, haul, make trade pay. The fluyt is c. 1600, so it shows the period runs to 1750. |
| Volta do mar | KC-4.1.II.A (wind and currents) | The one thing that could not be borrowed: knowledge learned by doing. It is what made the return voyage routine. |
| Dias 1488, Columbus 1492, da Gama 1497 to 1498 (one line each) | Learning objective ("changes in patterns of trade and travel") | The tools produced new routes. **Bridge only:** who paid and why belongs to 4.2. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 3.4: name one method a land empire used to expand or hold power.
   (b) From 2.3: what made Indian Ocean trade "run on a schedule"?
   (c) From 2.3: name one tool Indian Ocean sailors used to find their way.
   **Bridge:** "Unit 3's empires grew over land. The next states grew across water. But the
   Atlantic has no wind that turns around. So how do you get home?"
3. **Topic question on screen:** How did knowledge from older worlds let European ships cross
   oceans and come back, and what changed when they could?
4. **What was already true (context):** the Indian Ocean on a schedule, and the tools it used.
   Mediterranean sailors with coastal charts. Europe at the edge of a network others built.
5. **The problem:** the Atlantic's wind blows one way off Africa. Going is easy; coming home is
   not. No landmarks. "Getting there was never the hard part."
6. **Borrowed tools:** compass (Asian), astrolabe and tables (Classical and Islamic, carried by
   Muslim and Jewish astronomers), lateen sail (Mediterranean and Islamic seas). One map of
   where each came from.
7. **New ships:** caravel, carrack, fluyt, as three jobs.
8. **The thing no one could borrow:** the wind wheel and the volta do mar.
9. **The payoff, new patterns of trade and travel:** Dias, Columbus, da Gama, one line each, on
   one map of the new routes. One sentence: why they sailed is 4.2.
10. **The twist:** Europe did not have the best ships in 1400. It had a harder ocean and a
    combination of other people's knowledge.
11. **Retelling slide** (section 7).
12. **Reasoning:** model one causal chain (context, then cause, mechanism, effect), then
    students write 2 to 3 sentences tracing ONE borrowed tool to a change in travel or trade.
13. **AP synthesis:** answer the learning objective in two sentences, then hand off to 4.2:
    "Ships could now go and come back. Who paid for the voyages, and what did they want?"

## 7. Proposed retelling slide

A causal chain with its context on the left, so a student can redraw it from memory:

**Older worlds' knowledge** (China, the Islamic world, the Classical Mediterranean) ->
**borrowed tools** (compass, astrolabe and tables, lateen sail) -> **new ships** (caravel,
carrack, fluyt) + **the wind wheel** (volta do mar) -> **the ocean becomes a two-way road** ->
**new patterns of trade and travel** (around Africa to Asia; across the Atlantic)

Why a chain with a context box: the reasoning move is causation, so the shape is a causal
answer; the suggested skill is contextualization, so the first box makes the context visible
instead of leaving it implied.

## 8. Owns / bridge-only (from the unit story map)

- **4.1 owns:** the diffusion of knowledge and technology from the Classical, Islamic and Asian
  worlds; the new tools (mariner's astrolabe, tables), the ship designs (caravel, carrack,
  fluyt) and the wind and current knowledge (volta do mar); the claim that together they made
  transoceanic travel and trade possible, and changed its patterns.
- **Bridge only:**
  - State sponsorship, Henry, João II, Ferdinand and Isabella, and every motive for sailing
    (4.2). Dias, Columbus and da Gama appear only as proof the tools worked.
  - The 1453 fall of Constantinople as a "cause" of exploration: not used at all. If a student
    raises it, 4.2 owns the qualified version (the unit story map and the Unit 3 map both say so).
  - The Columbian Exchange (4.3), trading-post empires and Asian responses (4.4), joint-stock
    companies and the fluyt's role in Dutch trade (4.5). The fluyt is named here as a ship
    design only.
  - Printing and the Waldseemüller map: one line at most. Not in 4.1's CED text.
- **Hands to 4.2:** "Ships could now go and come back. But a voyage cost a fortune. Who paid
  for them, and what did they want?"

## 9. Fact-check list (started; the full claim ledger is `docs/TOPIC-4-1-CLAIM-LEDGER.md`)

Every hook and number in sections 3 to 7 is a claim. Sources and statuses are in the ledger.
The ones that changed the story:

| Claim | Status |
|---|---|
| The lateen sail was borrowed from Arab sailors (current course) | **Not used.** Scholarship (Campbell 1995; Whitewright 2009) dates it to the Roman-era Mediterranean and rejects Arab invention. The story says "Mediterranean since Roman times, everywhere in the Islamic world's seas," which fits the CED's "Classical, Islamic." |
| The compass reached Europe via Arab traders by c. 1100 (current course) | **Narrowed.** Chinese sea use by c. 1100 (Zhu Yu, written c. 1111 to 1117); European mention c. 1190 (Neckam); route debated. |
| The mariner's astrolabe was in use at sea by the 1480s | Supported; first recorded sea use usually given as 1481. Story says "by the 1480s." |
| Zacuto's almanac, printed in Portugal in 1496, carried on Portuguese fleets | Supported (printed at Leiria, 1496; da Gama's 1497 fleet carried his tables). Verify the Toledo-to-Zacuto lineage wording against a specialist source before it is projected. |
| Exploration caravels were lateen-rigged | Supported (Britannica: two or three lateen-rigged masts; square-rigged caravel late 15th century). |
| The fluyt dates to about 1600 | Supported (Hoorn, usually 1595; some sources earlier). Story says "around 1600." |
| The volta do mar was learned over decades in the 1400s | Supported in outline; sources date it from the 1420s to the 1440s. Story avoids a start year. |
| Da Gama's fleet saw no land for about three months | Supported (sources give 90 to 95 days). Story says "about three months." |
| "In 1400 Europe did not have the best ships or navigators" | **NEEDS JEFF** (wording). "Best" has no single measure. Recommend the concrete version: "In 1400 the biggest ships and the longest voyages were in the Indian Ocean and China, not Europe." |

## 10. Visual requirements per beat (listed, not sourced)

Pictures are chosen after approval. What the story will need:

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 4, 5 | A wind map: monsoon reversal beside the Atlantic wind wheel | The whole topic turns on this contrast. | A generated instructional map is right here; label it as a diagram. |
| 6 | A Chinese compass or a period description; an Islamic astrolabe; a page of Zacuto's *Almanach Perpetuum* (1496); a Mediterranean lateen-rigged ship | Each tool shown as an object from the world it came from. | An 18th-century Persian astrolabe is not a sea instrument. A modern compass replica is not evidence. |
| 6 | A surviving mariner's astrolabe (the Sodré astrolabe, c. 1496 to 1501, is the oldest known) | The European adaptation as a real object. | Say it is a recovered artifact; date it honestly. |
| 7 | Period images of a caravel, a carrack, a fluyt | Three ships, three jobs. | The Livro das Armadas caravel (c. 1566) is a later picture of a 1500s ship; caption it that way. |
| 8 | Volta do mar route diagram | The thing no one could borrow. | Diagram, not evidence. |
| 9 | One map with Dias, Columbus and da Gama's routes | New patterns of trade and travel. | Routes are approximate; say so. |

The current Map module image (the diffusion map) may serve beat 6; the existing Evidence Lab
cards (caravela, European astrolabe 1500 to 1550, Roselli portolan, Waldseemüller) are reviewed
in the visual plan, not here.

## 11. Questions for Jeff (one list, for the whole build)

Asked together with the Unit 4 story map's questions.

1. **Spine.** Approve the spine in section 4, or change it?
2. **Retelling slide.** Approve the context-plus-chain in section 7?
3. **Skill Builder skill.** The CED's suggested skill is 4.A Contextualization; the Skill
   Builder teaches causation. *Recommendation:* the Skill Builder teaches contextualization
   (describe the older networks the tools came from), and Checkpoint 2 keeps causation, which is
   the CED's reasoning process. That way both CED skills are practiced, and the checkpoint's own
   skill is declared so Socrates coaches the right move.
4. **Learning targets.** Nothing names "changes in patterns of trade and travel."
   *Recommendation:* rewrite target 1 to "I can explain how new tools, ships and wind knowledge
   changed where Europeans could travel and trade," with a matching success criterion. Targets
   flow to the board, Canvas and Socrates, so this is your call.
5. **Map module.** Its text describes the Waldseemüller map; its picture is a diffusion map.
   *Recommendation:* keep the diffusion map as the picture, and rewrite the title, caption and
   prompt to match it ("Where did Europe's sea tools come from?"). Fix the "from 1415" map key.
6. **BeSurreal.** The Sagres "school" is a myth. *Recommendation:* a Portuguese pilot on a
   caravel off West Africa in the 1480s, with a new brass astrolabe, who has to convince the
   captain to sail *away* from land to get home (the volta do mar).
7. **Primary Source.** The João de Barros text is labeled "adapted." *Recommendation:* I check
   whether it is a real passage. If it is not, replace it with a real source on the same idea
   (for example a page or rule from the Portuguese *Regimento* or Zacuto's tables), because a
   written-for-the-lesson text cannot be a primary source.
8. **Lateen sail and compass wording.** The current course says the Arabs gave Europe the lateen
   sail and the compass. *Recommendation:* adopt the section 9 wording everywhere 4.1 says it
   (lecture, First & 10, deep reading if needed, BeInTheRoom).
9. **Class dates** for 4.1 Green and Silver, so Phase 8 can run. I will not guess.
10. **Pictures.** Have you uploaded any for 4.1? If not, I will give you the shopping list in
    section 10 as a picture request when the story is approved.
11. **Required modules** are proposed at Phase 8, once dates exist.
12. **The twist's wording.** "In 1400, Europe did not have the best ships or the best
    navigators" is a superlative with no single measure. *Recommendation:* "In 1400 the
    biggest ships and the longest voyages were in the Indian Ocean and China, not Europe,"
    with Zheng He as the proof students already know from 2.3.
