# BeInTheRoom Theme-Alignment Audit

**Date:** 2026-06-12
**Scope:** Every scenario file present in `beintheroom/` at audit time.
**Rule applied:** Step 0, Theme Alignment Gate (now codified in `docs/beintheroom-scenario-blueprint.md`).
**Status:** Findings only. No scenario HTML was edited in this audit.

## Scope Note, Expected vs. Actual Files

The audit request anticipated scenarios in `beintheroom/unit-2/` and `beintheroom/unit-3/` (samarkand-caravanserai, ilkhan-court, indian-ocean-port, mali-court, silk-road-scholar, plague-europe, constantinople-siege). **None of those files exist in the repository.** The only scenarios that exist are the nine files in `beintheroom/unit-1/`, and all nine are audited below. Lesson data/config files for Units 2–7 reference 23 BeInTheRoom scenario files that do not exist yet (see Discrepancies, item D5).

> **2026-07-15 update:** The scope statement above is retained as historical audit evidence. Six Unit 2 scenarios have since been recovered and linked, and seven Unit 6 scenarios have been built and linked. Their Step 0 audit appears below and supersedes the corresponding availability findings.

## Recovery and Build Audit, Units 2 and 6 (2026-07-15)

All thirteen scenarios below pass the transplant test: changing the assigned topic would require changing the central dilemma, evidence, and AP reflection, not merely renaming people or places.

### Unit 2 recovery

| Topic | Scenario | Theme-alignment reason | Verdict |
|---|---|---|---|
| 2.1 | `silk-road-merchant.html` | Merchant cargo, credit, security, and caravan infrastructure require reasoning about Silk Road expansion. | PASS |
| 2.2 | `mongol-court.html` | The choices turn on Mongol conquest, administration, religious tolerance, and exchange across an empire. | PASS |
| 2.3 | `indian-ocean-port.html` | Monsoon timing, port policy, merchant diasporas, and maritime technology drive every decision. | PASS |
| 2.4 | `mali-court.html` | Gold, taxation, Islam, and trans-Saharan connections structure Mali's governing dilemma. | PASS |
| 2.5 | `silk-road-scholar.html` | Students must explain how ideas, belief systems, and technologies change through cross-cultural transmission. | PASS |
| 2.6 | `plague-europe.html` | Trade connectivity, disease diffusion, and demographic disruption are the crisis mechanism. | PASS |

Topic 2.7 remains a comparison capstone and intentionally has no separate simulation.

### Unit 6 build

| Topic | Scenario | Theme-alignment reason | Verdict |
|---|---|---|---|
| 6.1 | `the-mission-memorandum.html` | Students interrogate Social Darwinism, nationalism, the civilizing mission, and conversion as imperial justifications. | PASS |
| 6.2 | `the-flag-over-the-congo.html` | The dilemma compares personal rule, company power, direct state administration, and international oversight. | PASS |
| 6.3 | `the-golden-stool-council.html` | Asante sovereignty, sacred legitimacy, coalition, and armed resistance bind the decisions to anticolonial state building. | PASS |
| 6.4 | `the-rubber-quota.html` | Rubber ecology, export specialization, subsistence labor, and concession power make the commodity economy unavoidable. | PASS |
| 6.5 | `the-customs-house-loan.html` | Foreign credit, customs guarantees, infrastructure ownership, and tariff sovereignty enact economic imperialism without annexation. | PASS |
| 6.6 | `the-passage-contract.html` | Transport, labor demand, land pressure, contract constraint, and return passage structure a migration-causation problem. | PASS |
| 6.7 | `the-exclusion-hearing.html` | Ethnic enclaves, labor politics, racial prejudice, family separation, and exclusion policy enact migration's social effects. | PASS |

Topic 6.8 is a causation capstone and intentionally synthesizes the full evidence set rather than adding another scenario. All recovered and new links resolve on disk; the generated manifest reports no broken scenario links.

## Rubric

| Check | Question |
|---|---|
| **Premise** | Does the scenario premise enact one of the topic's listed thematic focus / LO pairs? |
| **Decision points** | Does the dilemma students actually decide on exercise that pair, i.e., does choosing well require the thinking the LO names? |
| **Reflection prompts** | Do the reflections push students back toward the topic's theme (not just generic reflection)? |
| **Transplant test** | Could this scenario's central dilemma be moved to a different topic without changing which theme it exercises? If yes, it is at best Drift. |

**Verdicts:** PASS / DRIFT / FAIL as defined in the blueprint Step 0 gate.

**Authority note on topic pairs:** For Topic 1.1, the thematic focus / LO pairs below are taken verbatim from the CED reference table supplied with the audit request. For Topics 1.2–1.6, the unit-1 renderer configs contain **no** thematic focus or learning objective blocks (unlike the Unit 7 renderer configs, which do), so the in-repo authority used is each lesson data file's `learningTargets` block (quoted below), cross-checked against the CED's Unit 1 topic structure. This gap is flagged as Discrepancy D1.

---

## 1. `beintheroom/unit-1/song-court.html`, Topic 1.1 (Developments in East Asia)

**Listed pairs (verbatim, CED reference table):**
- **Governance (GOV)**, Unit 1 LO A: "Explain the systems of government employed by Chinese dynasties and how they developed over time."
- **Cultural Developments and Interactions (CDI)**, Unit 1 LO B: "Explain the effects of Chinese cultural traditions on East Asia over time."
- **Economic Systems (ECN)**, Unit 1 LO C: "Explain the effects of innovation on the Chinese economy over time."

**Best alignment:** GOV LO A and ECN LO C, with CDI LO B carried by the role and evidence banks.

**Verdict: PASS**

**Evidence:**
- Premise: "Its scholar-official government is admired, its cities are crowded with merchants and artisans… where should the state place its energy if Song China is to remain stable, legitimate, and powerful?"
- Decision point: "Expand Scholar-Official Government, Invest more deeply in civil service exams, Confucian education, and bureaucracy."
- Decision point: "Support Trade and Commerce, Protect merchants, expand markets, support paper money, and strengthen canals."

**Rationale:** The premise is a Song state-priorities debate, and the four decision options are built directly out of LO A content (civil service exams, imperial bureaucracy, frontier relations with Liao/Western Xia) and LO C content (paper money, Grand Canal, Champa rice, commercialization). Choosing well requires weighing Song systems of government against the effects of economic innovation, the thinking LOs A and C name. The reflection prompt ("Explain how the role you chose reflects broader political, social, economic, or cultural structures in Song China… use at least two specific historical details") returns students to the topic's themes, and the evidence bank is composed almost entirely of Topic 1.1 illustrative examples. The dilemma cannot be transplanted without swapping out the LO-specific institutional content that makes the choice hard.

---

## 2. `beintheroom/unit-1/dar-al-islam-council.html` ("The Scholar's Dilemma"), Topic 1.2 (Developments in Dar al-Islam)

**Listed pairs (from `assets/data/lesson-1-2-dar-al-islam.js` learningTargets; CED Topic 1.2 pairs CDI / GOV / TEC):**
- LO D (CDI): "I can explain how systems of belief and their practices affected society in the period from c. 1200 to c. 1450."
- LO E (GOV): "I can explain the causes and effects of the rise of Islamic states over time."
- LO F (TEC): "I can explain the effects of intellectual innovation in Dar al-Islam."

**Best alignment:** TEC LO F (primary), with GOV LO E (Mamluk, Delhi, Ilkhanate as rising states) and CDI LO D (Sufi networks) enacted by the decision options.

**Verdict: PASS**

**Evidence:**
- Premise: "It is 1258… The House of Wisdom is in ruins. You are a scholar who survived… You must decide where to go. Three Islamic courts want scholars. Sufi networks offer another path. Your choice will shape where Islamic intellectual tradition takes root next."
- Decision point: "Mamluk Egypt in Cairo, A Muslim sultanate that defeated the Mongols at Ain Jalut (1260). Cairo is becoming a new center of Islamic scholarship, home to Al-Azhar."
- Reflection prompt: "explain how the fragmentation of the Abbasid Caliphate and the Mongol destruction of Baghdad affected intellectual life in Dar al-Islam between c. 1200 and c. 1450… what the role of networks, trade, Sufi, scholarly, played in that survival. Connect your argument to KC-3.2.II.A.i."

**Rationale:** The central dilemma, where Islamic scholarship goes when its center falls, is inseparable from Topic 1.2's intellectual-innovation and rise-of-Islamic-states pairs. Choosing well requires reasoning about patronage (Maragha Observatory, Al-Azhar, Delhi Sultanate recruitment) and Sufi/scholarly networks, and the reflection is explicitly KC-anchored. The dilemma fails to transplant: moved anywhere else it stops being about Dar al-Islam's intellectual tradition. Note: the 1258 sack of Baghdad also appears in Unit 2 (Mongol) content, but the theme exercised here is Topic 1.2's, not 2.2's.

---

## 3. `beintheroom/unit-1/abbasid-fragmentation.html`, Topic 1.2 (Developments in Dar al-Islam), *orphaned file*

**Listed pairs:** Same as scenario 2 above (CDI LO D / GOV LO E / TEC LO F).

**Best alignment:** GOV LO E, the rise of new Islamic states under Turkic military rulers is the premise itself; the options also touch TEC LO F (scholarly patronage) and CDI LO D (Sufi networks, sharia).

**Verdict: PASS**

**Evidence:**
- Premise: "New rulers, many of them Turkic military leaders, govern regions that were once under Abbasid control. You have been summoned to advise a new ruler on how to govern, build legitimacy, and hold a diverse society together without the authority of the caliph behind you."
- Decision point: "Build Legitimacy Through Islamic Law, Adopt and enforce sharia, appoint respected scholars as judges, and rule as a Muslim ruler."
- Reflection prompt: "explain how the fragmentation of the Abbasid Caliphate led to new forms of Islamic political authority between c. 1200 and c. 1450. Connect your argument to KC-3.2.I."

**Rationale:** Every decision option is an Islamic-legitimacy instrument (scholarly patronage, Sufi networks, sharia, trade protection under a new sultanate), so choosing well requires exactly the LO E thinking, how and why new Islamic political entities arose and legitimized themselves after fragmentation. The reflection is KC-3.2.I-anchored. The dilemma does not survive transplant: its content is the CED's own historical development for this topic.

**Housekeeping finding (not a verdict factor):** This file is not linked from any lesson, `lesson-1-2-dar-al-islam.js` points to `dar-al-islam-council.html` instead. Topic 1.2 therefore has two scenarios, one of which is orphaned (Discrepancy D4).

---

## 4. `beintheroom/unit-1/angkor-council.html`, Topic 1.3 (Developments in South and Southeast Asia)

**Listed pairs (from `assets/data/lesson-1-3-south-southeast-asia.js` learningTargets; CED Topic 1.3 pairs CDI / GOV):**
- LO G (CDI): "I can explain how Hinduism, Buddhism, and Islam shaped societies and states in South and Southeast Asia." (kc: 'Unit 1 Learning Objective G')
- LO H (GOV): "I can describe how states such as the Vijayanagara Empire, Delhi Sultanate, Srivijaya, Majapahit, and Khmer Empire used religion, trade, and administration to build power." (kc: 'Unit 1 Learning Objective H')

**Best alignment:** Both pairs simultaneously, religion as an instrument of state power.

**Verdict: PASS**

**Evidence:**
- Premise: "should the kingdom continue its tradition of Hindu royal patronage, the devaraja cult that has legitimized Khmer kings for centuries, or should he shift state patronage to Buddhism, transforming the empire's religious identity and the institutions that depend on it?"
- Decision point: "Shift to Mahayana Buddhism, Embrace the Bodhisattva-king model… connect to growing Buddhist trade networks."
- Reflection prompt: "Explain how the role you chose reflects broader patterns of religion, state power, and cultural interaction in South or Southeast Asia… Explain why the choice of religious patronage mattered, not just to the king, but to the whole system of power around him."

**Rationale:** This is the strongest alignment in the set. The dilemma is a religious-patronage decision whose stakes are state legitimacy, the exact intersection of LO G and LO H. Every decision option is a belief-system choice with governance consequences; the evidence bank (devaraja, Bayon, Theravada spread, Srivijaya, sangha, mandala structure) is LO-specific; the reflection names religion and state power explicitly. The dilemma cannot be transplanted without ceasing to exercise CDI-G.

---

## 5. `beintheroom/unit-1/khmer-court.html`, Topic 1.3 (Developments in South and Southeast Asia), *orphaned file*

**Listed pairs:** Same as scenario 4 above (CDI LO G / GOV LO H).

**Best alignment:** Partially GOV LO H (temple-legitimacy and irrigation as state power); CDI LO G is reduced to one option out of four.

**Verdict: DRIFT**

**Evidence:**
- Central dilemma: "What should the Khmer empire prioritize to remain powerful and legitimate?" with options "Continue Temple Construction," "Strengthen Military Defense," "Expand Agriculture and Irrigation," "Develop Trade Networks."
- Premise: "continue pouring resources into monumental temple construction to honor the gods and legitimize royal power, or invest in military defense, agriculture, and trade to maintain prosperity and security."
- Reflection prompt: "Explain how the role you chose reflects broader political, social, economic, or cultural structures in the Khmer Empire", generic structure language, no LO G/H or KC anchor.

**Rationale and transplant test:** The setting is historically correct, but the dilemma students actually decide on is a generic state-priorities allocation (monuments vs. military vs. agriculture vs. trade). It is structurally identical to `song-court.html`'s dilemma, swap "Khmer king" for "Song emperor" and the theme exercised does not change, so it fails the transplant test. Topic 1.3's distinctive pairing is *belief systems shaping states* (CDI-G with GOV-H); here that thinking is required by only one of four options, and two options (agriculture, trade) lean on ECN, which Topic 1.3 does not list. The reflection prompt is generic rather than theme-targeted.

**Fix recommendation (do not implement this session):** Retarget the decision points toward the religion–legitimacy dilemma LO G/H name, which is precisely what `angkor-council.html` (the scenario the lesson actually links) already does. Recommended direction: retire `khmer-court.html` as superseded, or redesign it so each decision point forces reasoning about how the devaraja cult, temple networks, and the baray system functioned as instruments of Khmer state power (LO H), and rewrite the reflection prompt to name LO G/H and KC-3.2.I rather than "political, social, economic, or cultural structures" generically.

---

## 6. `beintheroom/unit-1/cahokia-council.html`, Topic 1.4 (State Building in the Americas), *orphaned file*

**Listed pair (from `assets/data/lesson-1-4-americas.js` learningTargets; CED Topic 1.4 pairs GOV only):**
- LO I (GOV): "I can explain how and why states in the Americas developed and changed over time." (kc: 'KC-3.2.I.D.i')

**Best alignment:** GOV LO I.

**Verdict: PASS**

**Evidence:**
- Premise: "growth has created tension. Food supplies are strained, surrounding communities resent Cahokia's dominance, and the great mound-building projects demand enormous labor."
- Decision point: "Strengthen Trade Networks, …Use prestige goods, copper, shells, pottery, to maintain alliances without coercion."
- Reflection prompt: "explain how Cahokia built and maintained power between c. 1200 and c. 1450. Connect your argument to KC-3.2.I.D.i and compare Cahokia to one other American state system."

**Rationale:** Topic 1.4 lists a single, broad state-building pair, and the dilemma exercises it directly: every option is a mechanism by which an American state maintained power (ceremonial mound-building as spiritual legitimacy, prestige-goods exchange, tribute/autonomy negotiation with subordinate communities). The mechanisms are Cahokia-specific, and the reflection is KC-anchored with a required comparison to another American state system, squarely the LO I thinking. Transplanting the dilemma would require replacing the state-power mechanisms wholesale.

**Housekeeping finding:** Not linked from any lesson, `lesson-1-4-americas.js` points to `inca-court.html` instead (Discrepancy D4).

---

## 7. `beintheroom/unit-1/inca-court.html`, Topic 1.4 (State Building in the Americas)

**Listed pair:** Same as scenario 6 above (GOV LO I, KC-3.2.I.D.i).

**Best alignment:** GOV LO I.

**Verdict: PASS**

**Evidence:**
- Premise: "The state at Cusco has issued a new mit'a obligation: your province must supply labor for a major expansion of the Qhapaq Ñan, the Inca road system… the draft falls during planting season."
- Decision point: "Appeal to Cusco for an Adjusted Quota, Send a quipu report explaining the agricultural timing conflict and request a reduced or delayed obligation."
- Reflection prompt: "Explain how the dilemma you navigated reveals how the Inca state built and maintained power across diverse peoples and geographies… explain what they show about continuity, innovation, or the tradeoffs of centralized state power."

**Rationale:** The dilemma is built from the CED's own Inca state-building apparatus, mit'a labor, the Qhapaq Ñan road system, quipu administration, state storehouses, reciprocity obligations. Choosing well requires understanding how that centralized system demanded and rewarded compliance, which is the LO I thinking. The reflection targets Inca state power explicitly. The dilemma cannot be moved to another topic without abandoning the mit'a/reciprocity machinery that constitutes it.

---

## 8. `beintheroom/unit-1/great-zimbabwe-court.html`, Topic 1.5 (State Building in Africa)

**Listed pair (from `assets/data/lesson-1-5-africa.js` learningTargets; CED Topic 1.5 pairs GOV only):**
- LO J (GOV): "I can explain how and why states in Africa developed and changed from c. 1200 to c. 1450." (kc: 'KC-3.2.I.D.ii', theme: 'Governance')

**Best alignment:** GOV LO J.

**Verdict: PASS**

**Evidence:**
- Premise: "a stone-walled city that controls the gold trade connecting the African interior to Swahili Coast merchants and the wider Indian Ocean world. The king rules through control of cattle, land, and gold."
- Decision point: "Strengthen the Gold Trade, Invest in protecting and expanding trade routes to the Swahili Coast. Use Indian Ocean goods to reward loyal chiefs and bind them to Zimbabwe."
- Reflection prompt: "explain how Great Zimbabwe built and maintained power between c. 1200 and c. 1450. Connect your argument to KC-3.2.I.D.ii and explain how trade shaped African state power in this period."

**Rationale:** Every decision option is a Zimbabwe-specific instrument of state power, gold-trade control, coercion of tributary chiefs, cattle wealth, monumental stone construction, so the choice exercises LO J's how-and-why state-building reasoning, and the trade options keep the topic's signature trade-shapes-state-power emphasis in view. The reflection is KC-anchored. The dilemma does not transplant: removed from the gold/cattle/Swahili Coast system, it is a different scenario.

---

## 9. `beintheroom/unit-1/feudal-manor.html`, Topic 1.6 (Developments in Europe)

**Listed pairs (CED Topic 1.6 pairs CDI and ECN; in-repo `assets/data/lesson-1-6-europe.js` learningTargets quoted below, note its LO labeling is faulty, see Discrepancy D2):**
- CDI: religion shaping European society, repo target: "I can describe how Christianity, feudalism, manorialism, and cities shaped European society."
- ECN: causes and consequences of political decentralization (feudalism, manorialism, serfdom; KC-3.2.I.B, KC-3.3.III.C), repo target: "I can explain how European political structures developed in the period c. 1200 to c. 1450."

**Best alignment:** ECN (feudal/manorial decentralization and coerced labor), with the CDI religion pair carried by the Church decision option and roles.

**Verdict: PASS**

**Evidence:**
- Central dilemma: "How should the manor respond to the labor crisis and social upheaval caused by the Black Death?" with options "Maintain Feudal Order," "Offer Limited Wages and Concessions," "Rely on Church Authority," "Grant Conditional Freedom."
- Decision point: "Grant Conditional Freedom, Allow serfs to leave serfdom in exchange for rent payments. Convert feudal obligations to cash relationships as the economy shifts."
- Reflection prompt: "explain how feudalism and the manorial system shaped European society between c. 1200 and c. 1450. Connect your argument to KC-3.2.I.B.ii and KC-3.3.III.C."

**Rationale:** Although the Black Death itself is a Unit 2 (Topic 2.6, ENV) development, the dilemma students actually decide is not about the plague, it is about whether feudal and manorial obligations survive a labor shock: serfdom vs. wages, feudal ties vs. cash rents, Church authority as social order. That is Topic 1.6's listed decentralization/manorialism content, and the reflection cites the topic's own KCs. Transplant test: moving the dilemma into Topic 2.6 would change the theme exercised from feudal political-economic structure to environmental effects of exchange networks, so the dilemma is bound to 1.6's pairs. The plague framing is acceptable as a catalyst; future revisions could foreground the 1.6 KC language slightly more in the premise, but no fix is required under the gate.

---

## Summary Table

| File | Topic | Verdict |
|---|---|---|
| `beintheroom/unit-1/song-court.html` | 1.1 East Asia | PASS |
| `beintheroom/unit-1/dar-al-islam-council.html` | 1.2 Dar al-Islam | PASS |
| `beintheroom/unit-1/abbasid-fragmentation.html` | 1.2 Dar al-Islam (orphaned) | PASS |
| `beintheroom/unit-1/angkor-council.html` | 1.3 South & Southeast Asia | PASS |
| `beintheroom/unit-1/khmer-court.html` | 1.3 South & Southeast Asia (orphaned) | **DRIFT** |
| `beintheroom/unit-1/cahokia-council.html` | 1.4 Americas (orphaned) | PASS |
| `beintheroom/unit-1/inca-court.html` | 1.4 Americas | PASS |
| `beintheroom/unit-1/great-zimbabwe-court.html` | 1.5 Africa | PASS |
| `beintheroom/unit-1/feudal-manor.html` | 1.6 Europe | PASS |

## Discrepancies Found (flagged only, not fixed this session)

- **D1, Unit 1 renderer configs carry no thematic focus / LO blocks.** `lesson-1-1-renderer-config.js` through `lesson-1-7-renderer-config.js` contain no thematic focus or learning objective data, unlike the Unit 7 renderer configs (e.g., `lesson-7-1-renderer-config.js`, which carries `Thematic Focus, Governance (GOV)` and `Unit 7: Learning Objective A` blocks). The "runtime-authoritative renderer config" source the audit was instructed to use does not exist for Unit 1; LO data lives only in each lesson data file's `learningTargets` (and, for 1.1, KC codes in `lesson-1-1-standards-addon.js`).
- **D2, `lesson-1-6-europe.js` mislabels its learning objective.** Its first learning target ("I can explain how European political structures developed…") is tagged `kc: 'Unit 1 Learning Objective H'`, but LO H belongs to Topic 1.3 (South and Southeast Asia states). The Europe topic's CED objectives are the religion-and-society and political-decentralization pair. The second target is tagged with the non-CED label `'Political and social structures'`.
- **D3, The audit request's CED reference table maps scenarios that do not exist.** Of the files the request expected, only `song-court.html` exists. No `beintheroom/unit-2/` or `beintheroom/unit-3/` directory exists, and several expected filenames (e.g., `samarkand-caravanserai.html`, `ilkhan-court.html`, `constantinople-siege.html`) are not referenced anywhere in the repo, the Unit 2 configs reference different names (`silk-road-merchant.html`, `mongol-court.html`).
- **D4, Three orphaned scenario files.** `abbasid-fragmentation.html`, `khmer-court.html`, and `cahokia-council.html` are not linked from any lesson data/config file; their topics' lessons link `dar-al-islam-council.html`, `angkor-council.html`, and `inca-court.html` respectively. The BeInTheRoom hub (`beintheroom/index.html`) lists only `song-court.html` of the nine existing scenarios.
- **D5, 23 broken BeInTheRoom links in Units 2–7.** Lesson data/config files reference scenario files that do not exist: unit-2 (`comparison-workshop`, `indian-ocean-port`, `mali-court`, `mongol-court`, `plague-europe`, `silk-road-merchant`, `silk-road-scholar`), unit-3 (`belief-systems`, `comparison`, `empires-administration`, `empires-expand`), unit-4 (`changing-social-hierarchies`, `columbian-exchange`, `continuity-and-change`, `exploration`, `internal-external-challenges`, `maritime-empires-established`, `maritime-empires-maintained`, `technological-innovations`), unit-7 (`july-crisis`, `mexico-city-1938`, `ministry-of-information`, `petrograd-1917`). Each of these Module 09 links will 404 until the scenario is built; every future build must clear the Step 0 gate first.

---

## Unit 9 Topics 9.4–9.9 Step 0 Gate (2026-07-15)

| Topic | Scenario | CED theme and dilemma | Verdict |
|---|---|---|---|
| 9.4 Economics in the Global Age | `unit-9/structural-adjustment-cabinet.html` | ECN: an Accra cabinet weighs liberalization and conditional lending against public services, employment, and sovereignty. | PASS |
| 9.5 Calls for Reform and Responses | `unit-9/green-belt-petition.html` | SIO: a Nairobi coalition uses environmental reform, women's organizing, and public accountability to challenge entrenched power. | PASS |
| 9.6 Globalized Culture | `unit-9/global-broadcast-board.html` | CDI: a Mumbai broadcast board chooses among imported formats, local cultural production, hybrid media, and consumer-market pressures. | PASS |
| 9.7 Resistance to Globalization | `unit-9/seattle-wto-coalition.html` | CDI: a Seattle coalition must reconcile labor, environmental, development, and sovereignty critiques of global economic integration. | PASS |
| 9.8 Institutions in a Globalized World | `unit-9/peacekeeping-mandate.html` | GOV: a United Nations council balances cooperation, sovereignty, veto politics, resources, and civilian protection in a peacekeeping mandate. | PASS |
| 9.9 Continuity and Change in a Globalized World | No scenario by design | Synthesis capstone: Module 09 directs students back across the period rather than adding a new historical role-play. | N/A |

**Transplant test:** Each built scenario depends on the topic's named historical mechanism and thematic reasoning. Moving any dilemma to a different Unit 9 topic would require changing its institutions, evidence bank, roles, and decision criteria; all five therefore clear the Step 0 gate.

**Current link status:** The earlier D5 list is an audit snapshot from before the recovery/build sessions. The current repository-wide scan finds 35 unique lesson-linked scenarios and zero missing local scenario targets; three additional Unit 1 scenario files remain documented orphans.
