# BeHistorical — Project Status

> Note: this file did not exist before 2026-06-12; it was created during the BeInTheRoom theme-alignment audit session. Earlier project history is in `git log`.

## BeInTheRoom

### Theme-Alignment Hard Rule (codified 2026-06-12)

The **Step 0 — Theme Alignment Gate** is now codified in [`docs/beintheroom-scenario-blueprint.md`](docs/beintheroom-scenario-blueprint.md), preceding the existing scenario-requirement steps. Before drafting any scenario, the topic's CED thematic focus / learning objective pairs must be stated, and the premise AND decision points must directly enact at least one listed pair. A central dilemma that survives transplant to a different topic without changing the theme it exercises fails the gate. Every future BeInTheRoom build (including the 23 scenarios currently referenced by Unit 2–7 lessons but not yet built) must clear Step 0 first.

### Theme-Alignment Audit (2026-06-12)

Full report: [`docs/beintheroom-theme-audit.md`](docs/beintheroom-theme-audit.md). All nine existing scenarios (all in `beintheroom/unit-1/`) were audited against the Step 0 gate. No scenario HTML was edited.

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

## Unit 8 — Cold War and Decolonization

### Topic 8.1 — Setting the Stage for the Cold War and Decolonization (built 2026-06-24)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-1-cold-war-stage.html` | DONE |
| Topic data | `assets/data/lesson-8-1-cold-war-stage.js` | DONE |
| Renderer config | `assets/data/lesson-8-1-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-1-cold-war-stage.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-1-cold-war-stage-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/empire-accounts.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.1 card href updated) | DONE |

**BeInTheRoom scenario frame:** "caught between superpowers" — London, February 1947, PM Attlee's cabinet facing simultaneous crises in India, Greece/Turkey, and Palestine. Decision points require reasoning from 1947 knowledge (no hindsight framing). Continuity hooks to Topics 8.5–8.6 (Nehru, Nkrumah).

**Step 0 gate:** PASS — premise directly enacts KC-6.2.II (imperial exhaustion → dissolution of empires) and KC-6.2.IV.C.i (superpower balance of power shift). All four decision options exercise Governance/state-formation pairs from the CED thematic focus.

### Topic 8.2 — The Cold War (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-2-the-cold-war.html` | DONE |
| Topic data | `assets/data/lesson-8-2-the-cold-war.js` | DONE |
| Renderer config | `assets/data/lesson-8-2-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-2-cold-war.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-2-cold-war-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/bandung-table.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.2 card href updated) | DONE |

**BeInTheRoom scenario frame:** "The Bandung Table" — Bandung, Indonesia, April 1955, as a senior advisor in Sukarno's foreign ministry during the first Afro-Asian Conference (29 nations). Decision points: formal non-aligned bloc vs. loose principles forum; acceptance of superpower aid with conditions; how hard to condemn all colonialism (including Soviet). Four roles: Indonesian Foreign Ministry advisor, Indian Panchsheel delegate (Nehru), West African Pan-African observer (Nkrumah continuity hook), Pakistani military diplomat (SEATO-aligned, creates tension).

**Step 0 gate:** PASS — premise directly enacts KC-6.2.V.B (groups and individuals, including the Non-Aligned Movement, opposing and promoting alternatives to existing orders). The Bandung setting cannot be transplanted without changing the CDI theme it exercises.

### Topic 8.3 — Effects of the Cold War (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-3-effects-cold-war.html` | DONE |
| Topic data | `assets/data/lesson-8-3-effects-cold-war.js` | DONE |
| Renderer config | `assets/data/lesson-8-3-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-3-effects-cold-war.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-3-effects-cold-war-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/luanda-decision.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.3 card href updated) | DONE |

**BeInTheRoom scenario frame:** "The Luanda Decision" — Luanda, Angola, November 1975, as a senior advisor within the MPLA leadership circle with independence day approaching and South African forces advancing from the south, FNLA from the north. Three decisions: accept Cuban troops and Soviet arms; pursue quiet U.S. recognition talks; appeal to the OAU and Bandung-era principles. Four roles: MPLA Political Commissar, Angolan Nationalist Intellectual, Cuban Liaison Officer, OAU Secretary-General Liaison.

**Step 0 gate:** PASS — premise directly enacts KC-6.2.IV.D (proxy wars between and within postcolonial states in Africa) and LO C (compare how U.S. and Soviet Union sought to maintain influence). The Angolan Independence Day setting is the moment where both superpowers' methods are simultaneously visible and the student must reason through the comparison from the inside. Continuity hook to Bandung 1955 (Topic 8.2): the reflection prompt explicitly asks whether the non-alignment promise survives contact with a real war.

### Topic 8.4 — Spread of Communism After 1900 (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-4-spread-of-communism.html` | DONE |
| Topic data | `assets/data/lesson-8-4-spread-of-communism.js` | DONE |
| Renderer config | `assets/data/lesson-8-4-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-4-spread-of-communism.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-4-spread-of-communism-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/harvest-report.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.4 card href updated) | DONE |

**Dual-LO topic structure:** Topic 8.4 carries two thematic focus / LO pairs — ECN / LO D (China's adoption of communism: KC-6.2.I.i and KC-6.3.I.A.ii) and SIO / LO E (redistribution movements: KC-6.2.II.D.i with all four illustrative examples verbatim). Both pairs are represented in `lesson-8-4-spread-of-communism.js` `collegeBoardKeyConcepts` array (7 entries) and reproduced verbatim in `lesson-8-4-renderer-config.js`. Renderer constraint finding: `normalizedKeyConcepts()` iterates the full array with no entry-count limit; both pairs and all four illustrative examples render via standard `cb-card` elements with no renderer modification required.

**Checkpoint structure for dual-LO:** CP1 covers LT3 / LO E (redistribution movements — causes and effects of at least two CED examples); CP2 covers LT1+LT2 / LO D (China causation — both causes of 1949 revolution and consequences of Great Leap Forward).

**BeInTheRoom scenario frame:** "The Harvest Report" — Henan Province, China, autumn 1959, as the county party secretary holding an autumn harvest report showing 40% of the spring-reported figure. Decision points require reasoning from inside the system (pressure from party above + villages below), not between competing nations or factions. Three decisions: (a) what to report to the province; (b) what to submit to grain procurement quota; (c) what to tell the villages. Four roles: County Party Secretary, Village Production Team Leader, Provincial Agricultural Inspector, County Agricultural Bureau Chief. Frame explicitly breaks the "caught between superpowers" structure used in 8.1–8.3 — this is "caught inside the system."

**Step 0 gate:** PASS — premise directly enacts KC-6.3.I.A.ii (communist government control of national economy through Great Leap Forward, repressive policies, negative repercussions for population). The county party secretary's dilemma IS the CED key concept made visible from inside the system. Cannot be transplanted to a different topic without changing the ECN theme it exercises. Reflection prompt explicitly bridges both LO D KCs: asks students to explain the gap between the causes of China's communist revolution (1949 promises) and the consequences of communist government (1959 famine), connecting KC-6.2.I.i and KC-6.3.I.A.ii.

### Topic 8.5 — Decolonization After 1900 (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-5-decolonization.html` | DONE |
| Topic data | `assets/data/lesson-8-5-decolonization.js` | DONE |
| Renderer config | `assets/data/lesson-8-5-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-5-decolonization.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-5-decolonization-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/positive-action.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.5 card href updated) | DONE |

**BeInTheRoom scenario frame:** "Positive Action" — Accra, Gold Coast, January 1950, as a senior strategist in Nkrumah's Convention People's Party. The CPP is deciding whether to launch Positive Action (nonviolent strikes and boycotts) against the British colonial government, which has offered limited constitutional reforms through the Coussey Committee. Three decisions: (a) method — launch full Positive Action, limited strike with safety valves, accept Coussey reforms, or threaten escalation to armed resistance; (b) response to Nkrumah's certain arrest; (c) Cold War positioning to prevent the communist-subversion label. Four roles: CPP Political Strategist, UGCC Moderate, Gold Coast Market Woman, British Colonial Secretary's Advisor. 12 evidence chips: Accra riots 1948, Indian precedent (INC/Gandhi/1947), CPP mass organizational base, Coussey Report, Indochina cost (armed struggle), Cold War framing risk, cocoa economy leverage, 1945 Manchester Pan-African Congress, British post-war politics (Labour/war-weariness), Nkrumah's certain arrest, Gold Coast electorate, CPP-UGCC split.

**Step 0 gate:** PASS — premise directly enacts KC-6.2.II.A (Kwame Nkrumah in British Gold Coast seeking independence) and LO F (compare processes by which peoples pursued independence after 1900). The Accra/January 1950 CPP strategist setting cannot be transplanted without changing the GOV/comparison theme it exercises. Reflection prompt explicitly requires comparison with Algeria or Vietnam (armed struggle cases from KC-6.2.II.B), feeding Checkpoint 2's comparison requirement.

**Continuity hooks:** Nkrumah's third recurrence across Unit 8 — referenced as background figure in 8.1 (empire exhaustion context), present at the Bandung Table in 8.2 (Pan-African observer role), now central protagonist in 8.5 (his own independence struggle). Ho Chi Minh from 8.4 appears as a comparison reference in the evidence bank (Indochina cost chip). Reflection prompt looks forward to Ghana 1957 and Topic 8.6 (newly independent states).

**CED text constraints:** All verbatim CED text reproduced in both `lesson-8-5-decolonization.js` and `lesson-8-5-renderer-config.js` (RUNTIME-AUTHORITATIVE), including exact KC codes (KC-6.2.II.A, KC-6.2.II.B, KC-6.2.I.C — note KC-6.2.I.C, not KC-6.2.II.C), "British Gold Coast (Ghana)" exact, "French empire" lowercase, "Québécois" with accent.

### Topic 8.6 — Newly Independent States (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-6-newly-independent-states.html` | DONE |
| Topic data | `assets/data/lesson-8-6-newly-independent-states.js` | DONE |
| Renderer config | `assets/data/lesson-8-6-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-6-newly-independent-states.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-6-newly-independent-states-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/line-through-punjab.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.6 card href updated) | DONE |

**Dual-LO topic structure:** Topic 8.6 carries two thematic focus / LO pairs — GOV / LO G (boundary redrawing → new states + conflict/displacement: KC-6.2.III.A.i and KC-6.2.III.A.ii) and ECN / LO H (economic changes and continuities from decolonization: KC-6.3.I.C with all four illustrative examples verbatim, and KC-6.2.III.B with all three illustrative examples verbatim). Both pairs are represented in `lesson-8-6-newly-independent-states.js` `collegeBoardKeyConcepts` array (8 entries) and reproduced verbatim in `lesson-8-6-renderer-config.js` (RUNTIME-AUTHORITATIVE). Renderer constraint finding: `normalizedKeyConcepts()` iterates the full array with no entry-count limit; both pairs and all examples render via standard `cb-card` elements with no renderer modification required.

**Checkpoint structure for dual-LO:** CP1 covers LT3 / LO H (economic changes and continuities — state-led development examples and migration continuity); CP2 covers LT1+LT2 / LO G (political changes → territorial, demographic, and nationalist developments — new state creation and conflict/displacement from boundary redrawing).

**BeInTheRoom scenario frame:** "A Line Through Punjab" — New Delhi, September 1947, as a senior ICS civil servant advising the Emergency Committee of the Cabinet (chaired by Nehru). Crisis-response variant (matching 8.4 "Harvest Report" structure — inside a system, not between competing nations). Four roles: ICS Senior Advisor, Army Liaison Officer, Rehabilitation Commissioner, India–Pakistan Liaison Officer. 12 evidence chips: scale of movement, Radcliffe Line process, Punjab Boundary Force capacity, communal violence patterns, evacuee property, Nehru's secular-state commitment, camp conditions, Sikh community position, Kashmir shadow, WWII displaced persons precedent, army capacity/split loyalties, world judgment of new state. Three decisions: (a) protection of refugee columns — escort both directions, concentrate on cities, establish military corridors, or request joint BF reinforcement; (b) evacuee property — hold in trust, immediate requisition, bilateral exchange agreement, or defer legislation; (c) coordination with Pakistan — joint emergency machinery, unilateral parallel action, UN/ICRC mediation, or Nehru–Liaquat summit.

**Step 0 gate:** PASS — premise directly enacts KC-6.2.III.A.ii (boundary redrawing → conflict, population displacement, resettlement in the Partition of India) and LO G (political changes leading to territorial, demographic, and nationalist developments). The Emergency Committee / Radcliffe Line / September 1947 setting cannot be transplanted without changing the GOV theme it exercises. Reflection prompt explicitly connects the Radcliffe Line decision to the displacement crisis and requires comparison with Israel/Palestine 1948 (the other KC-6.2.III.A.ii illustrative example).

**Continuity hooks:** Nehru's third recurrence in Unit 8 — background figure in 8.1 (empire exhaustion context), Indian delegation at Bandung in 8.2, now Prime Minister chairing the Emergency Committee in 8.6. Muslim League from 8.5 lecture (demand for Pakistan as separate state) lands here as the partition it produced. Evidence chip "Kashmir shadow" looks forward to Topic 8.7 (resistance and realignment) and the India–Pakistan conflict that follows.

### Topic 8.7 — Global Resistance to Established Power Structures After 1900 (built 2026-06-26)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-7-global-resistance.html` | DONE |
| Topic data | `assets/data/lesson-8-7-global-resistance.js` | DONE |
| Renderer config | `assets/data/lesson-8-7-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-7-global-resistance.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-7-global-resistance-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/after-sharpeville.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.7 card href updated) | DONE |

**Single-LO topic structure:** Topic 8.7 carries one thematic focus / LO pair — CDI / LO I ("Explain various reactions to existing power structures in the period after 1900."). Four KCs: KC-6.2.V (umbrella framing), KC-6.2.V.A (nonviolent challenge — Gandhi, MLK, Mandela named in KC text), KC-6.2.V.C (militarized states intensifying conflict — Chile/Pinochet, Spain/Franco, Uganda/Amin, military–industrial complex with verbatim en dash), KC-6.2.V.D (movements using violence against civilians — Shining Path, Al-Qaeda). `collegeBoardKeyConcepts` array has 6 entries (thematic focus + LO + 4 KCs); `normalizedKeyConcepts()` iterates without count limit — all 6 render correctly with no renderer modification.

**Checkpoint structure:** CP1 covers LT1 / KC-6.2.V.A (nonviolent challenge — explain how at least two of the three named individuals promoted nonviolence and why it was a strategic choice); CP2 covers all LTs / LO I synthesis (explain various reactions using evidence from at least two of the three KC categories — V.A, V.C, V.D).

**BeInTheRoom scenario frame:** "After Sharpeville" — Johannesburg, South Africa, June 1961. Fifteen months after the Sharpeville Massacre, the apartheid state has banned the ANC and imprisoned its leadership. Student is a strategist in the banned ANC's underground leadership circle as the movement debates its path — the real historical debate from which Umkhonto we Sizwe (MK) emerged. Four roles: ANC Strategist (Chief Albert Luthuli's inner circle), Luthuli Peace Prize Delegate, Mass Organizer, External Relations Officer. 12 evidence chips: Sharpeville massacre (1960), ANC banning + PAC banning, Luthuli's peace commitment, Gandhian satyagraha origins (South Africa 1906–1915), Indian precedent (1947 independence), Gold Coast precedent (Ghana 1957), state willingness to fire, MK/sabotage idea (property-only framing), Cold War context, international opinion, newly independent Africa as audience, Mandela's organizing life. Three decisions: (a) method — strict nonviolence / allow infrastructure sabotage (no civilian targets) / defer / mass resistance; (b) response to state escalation — continue public / go underground / dual tracks / exile-based; (c) international strategy — sanctions campaign / Afro-Asian bloc focus / internal focus / Cold War neutrality. Design boundary strictly observed: KC-6.2.V.D is lecture-only; Option B in Decision 1 explicitly frames MK as property/infrastructure sabotage, not violence against people.

**Step 0 gate:** PASS — premise directly enacts KC-6.2.V.A (nonviolence debate within ANC — Mandela is a named CED figure in this KC) and KC-6.2.V.C (apartheid state's militarized escalation after Sharpeville narrows the movement's available options). The June 1961 Johannesburg underground leadership setting cannot be transplanted without changing the CDI theme it exercises. Reflection prompt explicitly connects KC-6.2.V.A and KC-6.2.V.C: Part 2 asks how the apartheid state's response (V.C) affected the movement's options (V.A).

**Continuity hooks:** Connects to 8.5 "Positive Action" (Accra 1950 — Gold Coast evidence chip and extension question: "Does the Gold Coast playbook survive contact with a state willing to fire on crowds?"). Mandela's fourth recurrence in Unit 8 — named CED figure in KC-6.2.V.A, evidence chip `mandelalife` in the scenario, protagonist of the historical debate. Extension comparison prompt: Accra 1950 (Nkrumah / Positive Action) vs. Johannesburg 1961 (ANC underground debate).

### Topic 8.8 — End of the Cold War (built 2026-06-26)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-8-end-of-cold-war.html` | DONE |
| Topic data | `assets/data/lesson-8-8-end-of-cold-war.js` | DONE |
| Renderer config | `assets/data/lesson-8-8-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-8-end-of-cold-war.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-8-end-of-cold-war-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/kremlin-ledger.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.8 card href updated) | DONE |

**Single-LO, single-KC topic structure:** Topic 8.8 carries one thematic focus / LO pair — GOV / LO J ("Explain the causes of the end of the Cold War."). One KC: KC-6.2.IV.E ("Advances in U.S. military and technological development, the Soviet Union's costly and ultimately failed invasion of Afghanistan, and public discontent and economic weakness in communist countries led to the end of the Cold War and the collapse of the Soviet Union."). `collegeBoardKeyConcepts` array has 3 entries (thematic focus + LO J + KC-6.2.IV.E — NO illustrative examples for any entry). Content figures (Gorbachev, Reagan, SDI, Berlin Wall) are lecture content only; they must never be labeled as CED illustrative examples. This constraint is enforced in the renderer config header comment and codified in `lesson-8-8-renderer-config.js`.

**Three learning targets (three causal strands of KC-6.2.IV.E):** LT1 — U.S. military and technological development (SDI mechanism, microelectronics gap, defense spending spiral); LT2 — Soviet invasion of Afghanistan (direct costs, signal to Eastern European satellites, CIA Operation Cyclone); LT3 — public discontent and economic weakness in communist countries (glasnost/perestroika unintended consequences, 1989 Eastern European revolutions, 1991 Soviet dissolution).

**Checkpoint structure:** CP1 covers LT1+LT2 ("The Two External Pressures" — explain U.S. military/tech AND Afghanistan as two distinct causal mechanisms + how they compounded each other); CP2 covers all LTs / full LO J synthesis ("Explaining the Causes of the End of the Cold War" — at least two causal strands, mechanism for each, explicit significance claim, counterargument to significance claim).

**BeInTheRoom scenario frame:** "The Kremlin Ledger" — Moscow, March 1985, as a senior advisor preparing Gorbachev's first strategic review. Unit 8 frame inversion: after seven topics of peoples caught between the superpowers (8.1–8.7), the student now sits inside one superpower as it strains. Decision points map 1:1 onto the three KC-6.2.IV.E causal strands: D1 (how to respond to SDI and U.S. military buildup) = Strand 1; D2 (what to do in Afghanistan) = Strand 2; D3 (what kind of domestic reform to pursue) = Strand 3. Four roles: Senior KGB Economic Analyst, Deputy Defense Minister, General Staff Officer (Afghanistan), Senior Gosplan Official. 12 evidence chips: `sdiannouncement`, `defenseburden`, `afghancasualties`, `ciasupport`, `consumershortages`, `glasnostconcept`, `pastreforms`, `easterneuropewatch`, `techgap`, `chinacomparison`, `gorbachevmandate`, `afghanexit`. No-hindsight constraint: student reasons from March 1985 only; Soviet dissolution must not be presented as foreseeable. Consequence reveals emphasize tradeoffs and tensions, not a scripted path to collapse.

**Step 0 gate:** PASS — Moscow/March 1985/Gorbachev's first strategic review is the historical moment where all three KC-6.2.IV.E causal strands converge simultaneously. D1 = Strand 1 (U.S. military/tech pressure), D2 = Strand 2 (Afghanistan costs), D3 = Strand 3 (reform vs. public discontent/economic weakness). Cannot be transplanted to a different topic without changing the GOV theme it exercises.

**Continuity hooks:** Extension question explicitly connects to "The Harvest Report" (Topic 8.4, Henan Province 1959) — both scenarios feature a command-economy system where local/national actors face structural resource constraints they cannot admit. The 1959 county party secretary's falsified grain numbers and Gorbachev's 1985 defense-burden dilemma share the same structural logic: a system that cannot produce what it promises. Coaching prompt stage 6 (Harvest Report connection) asks students to articulate this structural continuity across the KC-6.3.I.A.ii / KC-6.2.IV.E bridge.

### Topic 8.9 — Causation in the Age of the Cold War and Decolonization (built 2026-06-26)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-9-causation-capstone.html` | DONE |
| Topic data | `assets/data/lesson-8-9-causation-capstone.js` | DONE |
| Renderer config | `assets/data/lesson-8-9-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-9-causation-capstone.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-9-causation-capstone-capture.html` | DONE |
| BeInTheRoom scenario | N/A — capstone topic, no BeInTheRoom per capstone rule | N/A |
| Unit 8 index link | `unit-8/index.html` (Topic 8.9 card href updated) | DONE |

**UNIT 8 COMPLETE — 9/9 topics built.**

**Capstone topic — 6-module variant (deviation from 10-module standard):** Topic 8.9 is a synthesis/capstone lesson. Per capstone rule, it compresses to synthesis work only: Module 01 (First & 10), Module 02 (Content Delivery jump), Module 03 (Unit Review), Module 04 (Hemispheric Effects Matrix), Module 05 (AP Skill Builder), Module 06 (Checkpoint 2). No Map module, no BeSurreal, no Evidence Lab, no Primary Source, no BeInTheRoom, no Checkpoint 1. The 6-module array is set via `lesson.modules` in the renderer config, which the renderer supports via `L.modules || defaultModules()`.

**CED constraints (Topic 8.9):** No thematic focus block listed for this topic in the CED. Learning Objective K is the only LO: "Explain the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres." Five KCs (no illustrative examples for any): KC-6.2 (umbrella), KC-6.2.II (anti-imperialism → dissolution), KC-6.2.IV.C (Cold War extended beyond ideology), KC-6.3 (role of state + new institutions), KC-6.3.I (states responded in a variety of ways). All verbatim in both data file and renderer config.

**Hemispheric Effects Matrix (custom module 04):** 4 rows (economic, political, social, cultural) × 2 columns (Eastern/Western hemispheres). Each row has a rating select (Largely Similar / Mixed / Largely Different), a justification textarea, a Save Row button (localStorage via `saveMatrixRow89()`), and a static `<a class="btn-capture">` anchor tag. Synthesis field at bottom with Save Synthesis + capture buttons. Draft persistence: `response-area` class auto-load + `loadMatrixDrafts89()` called via `setTimeout` after `renderMatrix89()` sets modal innerHTML. All matrix render functions defined as `window.*` globals in `lesson-8-9-renderer-config.js`.

**Unit Review module (module 03):** `renderUnitReview89()` returns an 8-card grid (Topics 8.1–8.8), each with topic label, title, 2–3 sentence summary, and a "Matrix evidence" hint line.

**AI coaching touchpoints:** First & 10 (3-question check section + AI Coach prompt builder) and Checkpoint 2 (full LO K LEQ). No BeInTheRoom touchpoint. MagicSchool URL: `https://student.magicschool.ai/s/login?joinCode=czwb9Q`.

**Step 0 gate:** N/A — capstone topics have no BeInTheRoom scenario.

---

## Unit 8 CED Compliance Audit (2026-06-26)

**Scope:** All nine `assets/data/lesson-8-X-renderer-config.js` files (runtime-authoritative only). Base topic data files and the shared renderer were not audited or edited.

**Result: 9/9 PASS — zero verbatim violations found.**

| Topic | Issues Found | Issues Fixed | Issues Deferred |
|---|---|---|---|
| 8.1 | 0 | 0 | 0 |
| 8.2 | 0 | 0 | 0 |
| 8.3 | 0 | 0 | 0 |
| 8.4 | 0 | 0 | 0 |
| 8.5 | 0 | 0 | 1 |
| 8.6 | 0 | 0 | 0 |
| 8.7 | 0 | 0 | 0 |
| 8.8 | 0 | 0 | 0 |
| 8.9 | 0 | 0 | 0 |

**Verified character-level traps:**
- 8.3 "Sandinista–Contras": EN DASH (U+2013) present ✓
- 8.7 "military–industrial complex": EN DASH (U+2013) present ✓
- 8.7 KC-6.2.V "groups—including states—": EM DASH (U+2014) present ✓
- 8.5 "Québécois": both accents present ✓
- 8.5 "Kwame Nkrumah in British Gold Coast (Ghana)": no spurious "the" ✓
- 8.4 "Land reform in Kerala and other states within India": full phrase present ✓
- 8.8 KC-6.2.IV.E "Soviet Union's": apostrophe present ✓
- 8.9 thematic focus: ABSENT (correct — CED lists none for Topic 8.9) ✓
- 8.9 BeInTheRoom: ABSENT from modules array and no `lesson.beInTheRoom` set ✓

**Deferred (8.5 only):** The third KC in `lesson-8-5-renderer-config.js` is labeled `KC-6.2.I.C`, matching the project CED working copy. If the published CED reads `KC-6.2.II.C`, this is a discrepancy. Teacher should verify against the physical CED PDF. No change made per audit protocol.

**No fixes were applied.** All nine renderer configs are CED-compliant as written. Cache-busting bumps are not required (no config files were edited).

**Cache-bust follow-up (2026-06-27):** Zero renderer configs were modified by the audit, so zero lesson shells required a cache-bust. No shell edits were made. **Unit 8 audit cycle CLOSED.**

---

## Unit 9 — Globalization

### Topic 9.1 — Advances in Technology and Exchange After 1900 (built 2026-06-28)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-9/lesson-9-1-technology-exchange.html` | DONE |
| Topic data | `assets/data/lesson-9-1-technology-exchange.js` | DONE |
| Renderer config | `assets/data/lesson-9-1-renderer-config.js` | DONE |
| First & 10 reading | `unit-9/first-and-10-topic-9-1-technology-exchange.html` | DONE |
| First & 10 capture wrapper | `unit-9/first-and-10-topic-9-1-technology-exchange-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-9/green-revolution-india.html` | DONE |
| Unit 9 index link | `unit-9/index.html` (Topic 9.1 card href updated) | DONE |

**Single-LO topic structure:** Topic 9.1 carries one thematic focus / LO pair — TEC / LO A ("Explain how the development of new technologies changed the world from 1900 to the present."). Five KCs (no illustrative examples for any): KC-6.1.I.A (communication/transportation), KC-6.1.I.D (energy/petroleum/nuclear), KC-6.1.III.B (birth control/fertility), KC-6.1.I.B (Green Revolution/commercial agriculture), KC-6.1.I.C (medical innovations/vaccines/antibiotics). `collegeBoardKeyConcepts` array has 7 entries (thematic focus + LO A + 5 KCs). Topic 9.1 has NO illustrative examples in the CED.

**Three learning targets:** LT1 — communication and transportation technologies (KC-6.1.I.A); LT2 — energy technologies and the Green Revolution (KC-6.1.I.D + KC-6.1.I.B); LT3 — medical innovations and birth control (KC-6.1.I.C + KC-6.1.III.B).

**Checkpoint structure:** CP1 covers LT1+LT2 ("Communication, Transportation, and Energy" — explain how at least two new technologies changed the world, with intended purpose AND at least one unintended consequence); CP2 covers all LTs / full LO A synthesis ("Change Over Time — Technology's Intended and Unintended Consequences" — change-over-time argument using at least one intended and one unintended consequence, drawing from at least two technology categories).

**BeInTheRoom scenario frame:** "The Wheat Decision" — New Delhi, 1966. Two failed monsoons. India depends on American PL-480 grain shipments. Student is an advisor in the Ministry of Food and Agriculture deciding whether to adopt imported high-yield Mexican wheat seed. Consequence-forecasting frame: decisions require weighing immediate survival against long-term dependence (fertilizer imports, groundwater depletion, smallholder displacement). Four roles: Agricultural Scientist (Swaminathan Ally), Planning Commission Official, Smallholder Farmer Representative, External Affairs Ministry Advisor. Three decision points: D1 (adopt at scale / pilot program / refuse); D2 (large farms first / broader distribution / cooperative model); D3 (accept dependence / mitigate / conditional / reject). 8 evidence chips. 3 reflection prompts connecting to intended/unintended consequences theme.

**Step 0 gate:** PASS — premise directly enacts KC-6.1.I.B (Green Revolution spreading chemically and genetically modified agriculture to sustain growing population). The 1966 New Delhi wheat-adoption crisis cannot be transplanted without changing the TEC theme it exercises. Decision points force students to reason through the exact causal chain the CED describes: intended consequence (sustained growing population) and unintended consequences (chemical dependence, smallholder displacement, food sovereignty loss).

**Known dependency:** Google Form dropdown (`behistorical-form-config.js`) already includes `'9.1': '9.1 - Advances in Technology and Exchange'` in topics and `9: 'Unit 9 - Globalization'` in units. No form config update required.

### Topic 9.2 — Technological Advances and Limitations After 1900: Disease (built 2026-06-28)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-9/lesson-9-2-disease.html` | DONE |
| Topic data | `assets/data/lesson-9-2-disease.js` | DONE |
| Renderer config | `assets/data/lesson-9-2-renderer-config.js` | DONE |
| First & 10 reading | `unit-9/first-and-10-topic-9-2-disease.html` | DONE |
| First & 10 capture wrapper | `unit-9/first-and-10-topic-9-2-disease-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-9/influenza-1918.html` | DONE |
| Unit 9 index link | `unit-9/index.html` (Topic 9.2 card href updated) | DONE |

**Single-LO topic structure:** Topic 9.2 carries one thematic focus / LO pair — ENV / LO B ("Explain how environmental factors affected human populations over time."). Four KCs: KC-6.1.III (umbrella — diseases and medical/scientific developments), KC-6.1.III.A (diseases of poverty persisted, emergent epidemics emerged, diseases of longevity rose). `collegeBoardKeyConcepts` array has 4 entries (thematic focus + LO B + 2 KCs). **Topic 9.2 HAS illustrative examples** — exactly 8 in three named groups on KC-6.1.III.A: Diseases associated with poverty (Malaria, Tuberculosis, Cholera), Emergent epidemic diseases (1918 influenza pandemic, Ebola, HIV/AIDS), Diseases associated with increased longevity (Heart disease, Alzheimer's disease). Group labels rendered as `<strong>` HTML items in the flat `illustrativeExamples` array.

**Three learning targets (three disease categories of KC-6.1.III.A):** LT1 — diseases of poverty (malaria, TB, cholera — environmental conditions sustaining them); LT2 — emergent epidemics (1918 influenza, Ebola, HIV/AIDS — population density and travel networks); LT3 — diseases of longevity (heart disease, Alzheimer's — increased life expectancy).

**Checkpoint structure:** CP1 covers LT1+LT2 ("Diseases of Poverty and Emergent Epidemics" — explain environmental factors sustaining at least one disease of poverty AND shaping at least one emergent epidemic); CP2 covers all LTs / full LO B synthesis ("Environment, Disease, and Population — A Causation Argument" — draw from at least two of three disease categories, explain causal mechanism for each).

**BeInTheRoom scenario frame:** "The Closing Order" — a mid-sized U.S. city, autumn 1918, during the influenza pandemic. Student is an advisor to the city's Health Commissioner deciding whether to issue closure orders. Four roles: City Health Officer, Liberty Loan Committee Chair, Army Camp Medical Officer, Downtown Business Association President. Three decision points: D1 (close now / wait / targeted measures); D2 (cancel parade / allow parade / modify parade); D3 (lift now / hold longer / phased / conditional). 8 evidence chips (army camp crowding, urban density, early vs delayed cities, parade density, wartime pressure, autumn wave, economic cost, second wave risk). 3 reflection prompts connecting environmental factors to disease outcomes.

**Step 0 gate:** PASS — premise directly enacts KC-6.1.III.A (emergent epidemic diseases as threats to human populations, leading to social disruption) and the ENV thematic focus (environment shapes human societies). The autumn 1918 closure-order dilemma cannot be transplanted without changing the ENV theme it exercises. Every decision point is anchored in environmental and population factors: density, crowding, movement, seasonality.

**Known dependency:** Google Form dropdown (`behistorical-form-config.js`) already includes `'9.2': '9.2 - Technology and Disease'` in topics. No form config update required.

### Topic 9.3 — Technological Advances—Debates About the Environment After 1900 (built 2026-06-28)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-9/lesson-9-3-environment.html` | DONE |
| Topic data | `assets/data/lesson-9-3-environment.js` | DONE |
| Renderer config | `assets/data/lesson-9-3-renderer-config.js` | DONE |
| First & 10 reading | `unit-9/first-and-10-topic-9-3-environment.html` | DONE |
| First & 10 capture wrapper | `unit-9/first-and-10-topic-9-3-environment-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-9/climate-summit.html` | DONE |
| Unit 9 index link | `unit-9/index.html` (Topic 9.3 card href updated) | DONE |

**Single-LO topic structure:** Topic 9.3 carries one thematic focus / LO pair — ENV / LO C ("Explain the causes and effects of environmental changes in the period from 1900 to the present."). Two KCs: KC-6.1.II.A (environmental degradation and resource competition) and KC-6.1.II.B (greenhouse gases and climate debate). `collegeBoardKeyConcepts` array has 4 entries (thematic focus + LO C + 2 KCs). **Topic 9.3 has NO illustrative examples** — all `illustrativeExamples` arrays are empty. Narrative-prose examples (Amazon, Sahel, Aral Sea, Kyoto Protocol, Paris Agreement, etc.) appear in lecture content only and are never labeled as CED illustrative examples.

**Three learning targets (KC-6.1.II.A splits into two, KC-6.1.II.B is one):** LT1 — causes and effects of environmental degradation (deforestation, desertification, air quality, freshwater — KC-6.1.II.A first clause); LT2 — intensified resource competition (KC-6.1.II.A second clause); LT3 — greenhouse gases, pollutants, and the climate debate (KC-6.1.II.B).

**Checkpoint structure:** CP1 covers LT1+LT2 ("Environmental Degradation and Resource Competition" — explain at least one form of degradation with its cause and effect, plus how it intensified competition); CP2 covers all LTs / full LO C synthesis ("Causes and Effects of Environmental Change — A Causation Argument" — address at least one form of degradation AND the climate debate, with causal mechanism for each).

**BeInTheRoom scenario frame:** "The Emissions Table" — an international climate summit, late 20th century. Student advises the delegation of a rapidly industrializing developing nation sitting on the central climate fault line: needs continued growth, is feeling environmental effects, and is being asked to cut emissions it did not historically cause. Four roles: Chief Economic Advisor, Environment Ministry Director, Foreign Affairs Strategist, National Energy Commission Chair. Three decision points: D1 (what emissions commitment to bring — aggressive / conditional / modest); D2 (the historical-responsibility argument — press equity / accept shared / pragmatic middle); D3 (binding vs. voluntary targets — binding / voluntary / hybrid). 8 evidence chips (rising greenhouse gases, historical emissions gap, environmental degradation effects, economic cost of transition, renewable energy opportunity, Kyoto/Paris precedents, climate vulnerability, sovereignty and development rights). 3 reflection prompts. Specific statistics and treaty terms flagged for Phase 2 verification.

**Step 0 gate:** PASS — premise directly enacts KC-6.1.II.B (debates about the nature and causes of climate change) and the ENV thematic focus (populations shape their environments). Every decision point turns on weighing the causes and effects of environmental change and resolving the climate debate the CED names. The summit-delegation dilemma cannot be transplanted to another topic without losing the ENV theme.

**Known dependency:** Google Form dropdown (`behistorical-form-config.js`) already includes `'9.3': '9.3 - Debates About the Environment'` in topics. No form config update required.

---

### Open Revision Tasks (from the audit)

- **DRIFT — `beintheroom/unit-1/khmer-court.html` (Topic 1.3):** Its central dilemma is a generic state-priorities allocation (temples / military / agriculture / trade) that is structurally identical to `song-court.html` and fails the transplant test; Topic 1.3's listed CDI-G / GOV-H pairing (belief systems shaping state power) drives only one of four options, and its reflection prompt is generic. Recommended: retire it as superseded by `angkor-council.html` (which the lesson actually links), or redesign its decision points and reflection around religion-as-state-power per LO G/H.
- **Discrepancies flagged in the report (not fixed):**
  - D1: Unit 1 renderer configs carry no thematic focus / LO blocks (unlike Unit 7 configs).
  - D2: `assets/data/lesson-1-6-europe.js` mislabels its Europe LO as "Unit 1 Learning Objective H" (H belongs to Topic 1.3).
  - D4: Three orphaned scenario files (`abbasid-fragmentation`, `khmer-court`, `cahokia-council`) are linked from no lesson; the BeInTheRoom hub page lists only `song-court`.
  - D5: 23 BeInTheRoom scenario files referenced by Unit 2–7 lesson data/configs do not exist yet (broken Module 09 links); each must clear Step 0 when built.

---

## Build Session — Unit 6 and Branch Recovery (2026-07-15)

### Completed

- Recovered and integrated the complete Topic 6.1 lesson stack from `origin/claude/topic-6-1-imperialism-ttftw8`.
- Built Topics 6.2–6.8: lesson shells, topic data, renderer configs, First & 10 readings, and capture wrappers.
- Aligned Unit 6 learning objectives and key concepts to the AP World History: Modern CED effective Fall 2026.
- Built and linked seven Unit 6 BeInTheRoom simulations; Topic 6.8 remains a synthesis capstone by design.
- Recovered six Unit 2 BeInTheRoom simulations, cleared their Step 0 theme gate, linked Topics 2.1–2.6, and retained Topic 2.7 as a comparison capstone.
- Expanded the BeInTheRoom hub to expose Unit 2 and Unit 6 simulations.
- Added Unit 6 Google Form skill mappings and repaired the Foundations topic-key validator mismatch.
- Restored Topic 8.9 to the shared ten-module contract while preserving its custom Unit Review and Hemispheric Effects Matrix tools.
- Normalized student-facing Canvas guidance and the MagicSchool classroom link across 82 files.
- Replaced the obsolete Lesson 1.1 README with a repository-level project guide and added reproducible build and normalization scripts.

### Verification snapshot

- `node scripts/validate.js`: **0 errors**, 63 inherited warnings across 347 checked files.
- Generated manifest: **65 / 71** unit topics have lesson shells.
- BeInTheRoom: **30** linked non-capstone scenarios; **0 broken scenario links**.
- Unit 6: **8 / 8** lesson stacks built and linked.

### Remaining build frontier

- Unit 9 Topics 9.4–9.9 are the six missing core lesson stacks.
- BeInTheRoom scenarios are still absent by design or pending build for most of Units 3–5, portions of Unit 7, and unbuilt Unit 9 topics.
- Validator warnings are legacy quality debt (placeholder video IDs, older First & 10 DOM conventions, and a small number of missing inline submission-note fields); none were introduced by the Unit 6 stack.

---

## Core Build — Unit 9 Topics 9.4–9.9 (2026-07-15)

### Completed

- Built all six remaining Unit 9 lesson stacks: thin lesson shells, topic data, renderer configs, canonical First & 10 readings, and capture wrappers.
- Aligned Topics 9.4–9.9 to the AP World History: Modern CED effective Fall 2026: global economics (ECN), reform movements (SIO), globalized culture and resistance (CDI), international institutions (GOV), and the Unit 9 science-and-technology synthesis.
- Built and linked five BeInTheRoom simulations for Topics 9.4–9.8; Topic 9.9 remains a synthesis capstone by design.
- Cleared the five scenarios through the Step 0 theme gate and transplant test.
- Added complete Unit 9 Google Form skill mappings and hardcoded, prefilled First & 10 wrapper URLs.
- Wired all six Unit 9 hub cards and expanded the BeInTheRoom hub with the complete Unit 9 scenario set.
- Repaired the inherited Topic 6.1 hub placeholder found during the global deployment audit.
- Added `scripts/build-unit9.js` for deterministic regeneration of the complete build.

### Verification snapshot

- Generated manifest: **71 / 71** AP unit topics have lesson shells.
- BeInTheRoom: **35** linked non-capstone scenarios; **0 broken local scenario links**.
- Unit 9 Topics 9.4–9.9: **6 / 6** complete lesson stacks and **5 / 5** planned simulations.
- `node scripts/validate.js`: **0 errors**, 63 inherited warnings across 377 checked files.
- Unit 9 JavaScript syntax, local links, capture-wrapper prefills, form skill values, and lesson-hub destinations all pass their dedicated audits.

### Current frontier

- The AP topic shell inventory is complete. The next work is content-quality review, classroom testing, and remaining optional BeInTheRoom coverage in earlier units—not missing core lesson stacks.
- Validator warnings remain legacy quality debt (placeholder video IDs, older First & 10 DOM conventions, and a small number of missing inline submission-note fields); none were introduced by the Unit 9 build.

---

## BeInTheRoom Build — Unit 3 Topics 3.1–3.3 (2026-07-16)

### Completed

- Built and linked three evidence-driven simulations: **Breaking Constantinople’s Walls** (3.1), **Rewriting the Imperial Rank Roll** (3.2), and **After Chaldiran** (3.3).
- Introduced a reusable BeInTheRoom v2 renderer with role constraints, evidence selection, three tradeoff decisions, a position builder, local progress saving, an AI Coach prompt, AP reflection, and cited historical references.
- Added dedicated Unit 3 module artwork and exposed all three simulations from both their lesson command centers and the central BeInTheRoom hub.
- Extended the validator with a BeInTheRoom v2 quality contract covering AP alignment, role/evidence/decision counts, tradeoff content, sources, shared assets, and lesson linkage.

### Verification snapshot

- `node scripts/validate.js`: **495 files checked; all checks passed**.
- BeInTheRoom: **38 linked scenarios**, including **3 v2 scenarios**; **0 broken local scenario links**.
- Media audit: **76 / 76 complete lessons**, **0 blank slots**, **0 missing local files**, and **100% project-wide module-image uniqueness**.
- Browser workflow: full Topic 3.1 completion and prompt generation pass; all Unit 3 scenarios render with 4 roles, 12 evidence cards, and 3 decision points; 390 × 844 responsive layout has no horizontal overflow.

### Current frontier

- **24 optional BeInTheRoom scenarios** remain across the earlier-unit topic inventory; the core 71-topic lesson shell inventory remains complete.

---

## BeInTheRoom Build — Unit 4 Topics 4.1–4.7 (2026-07-16)

### Completed

- Built and linked seven BeInTheRoom v2 simulations covering maritime technology, state-sponsored exploration, the Columbian Exchange, trading-post empire, global silver and labor, resistance to colonial power, and changing social hierarchy.
- Reframed Topic 4.1 around João II’s 1487 expedition planning rather than the overstated “school at Sagres” tradition.
- Framed Topic 4.7 around evidence that casta labels were powerful representations and social classifications but did not operate as one fixed, comprehensive legal code.
- Added historically transparent composite framing where a classroom decision council represents groups that did not hold equal power, especially in Topics 4.3 and 4.7.
- Added seven dedicated module artworks and exposed all scenarios from lesson command centers and the central BeInTheRoom hub.

### Verification snapshot

- `node scripts/validate.js`: **509 files checked; all checks passed**.
- BeInTheRoom: **45 linked scenarios**, including **10 v2 scenarios**; **0 broken local scenario links**.
- Unit 4 Topics 4.1–4.7: **7 / 7** simulations built, sourced, linked, and covered by the v2 quality contract.

### Current frontier

- **17 optional BeInTheRoom scenarios** remain: Unit 5 Topics 5.1–5.9 and Unit 7 Topics 7.1–7.8.

---

## BeInTheRoom Build — Unit 5 Topics 5.1–5.9 (2026-07-16)

### Completed

- Built nine source-backed BeInTheRoom v2 simulations covering Enlightenment universalism, the Haitian Revolution, Britain’s factory system, Meiji industrialization, colonial railways, industrial ideologies, economic imperialism, labor organizing, and urban public health.
- Linked all nine simulations from their lesson command centers and added dedicated local module artwork plus hub cards.
- Kept each room historically bounded and topic-specific, with four roles, eight evidence cards, three tradeoff decisions, a position builder, AI Coach prompt, AP reflection, and references.

### Verification snapshot

- Unit 5 Topics 5.1–5.9: **9 / 9** simulations built and linked.
- BeInTheRoom validator contract: **54 linked scenarios**, including **19 v2 scenarios**, with **0 broken local links**.
- The full project remains **71 / 71 lesson shells** and the media audit remains the final project-wide gate.

### Current frontier

- **7 optional BeInTheRoom scenarios** remain in Unit 7 Topics 7.1–7.7. Topic 7.8 uses a historian-facing Causes & Consequences Matrix by design and is not a role-play assignment.

---

## BeInTheRoom Build — Unit 7 Topics 7.1–7.7 (2026-07-16)

### Completed

- Built seven source-backed BeInTheRoom v2 simulations covering Russian imperial collapse, the July Crisis, World War I information mobilization, Mexican oil nationalization, the League mandate system, the Munich Agreement, and World War II industrial mobilization.
- Linked every scenario from its lesson command center, added dedicated local module artwork, and exposed all seven from the central BeInTheRoom hub.
- Preserved Topic 7.8’s Causes & Consequences Matrix as a historian-facing analysis tool. Students do not role-play perpetrators or victims of mass atrocities; the generated status manifest now records this module as not applicable for BeInTheRoom.

### Verification snapshot

- Unit 7 Topics 7.1–7.7: **7 / 7** simulations built and linked.
- Topic 7.8: **custom matrix preserved** and correctly classified as **not applicable** for role-play.
- Generated inventory: **61 built**, **0 missing**, and **0 broken** BeInTheRoom links.
- `node scripts/validate.js`: **542 files checked; all checks passed**; **61 linked scenarios**, including **26 v2 scenarios**.
- Media audit: **76 / 76 complete lessons**, **0 blank slots**, **0 missing local files**, and **100% project-wide module-image uniqueness**.
- Browser QA: all seven Unit 7 rooms render cleanly; full workflow and persistence reach **100%**; 390 × 844 layout has no horizontal overflow; Topic 7.8 exposes the matrix and no role-play card.

### Current frontier

- No planned BeInTheRoom scenarios remain missing. Future work is classroom feedback, refinement, and maintenance rather than inventory completion.
