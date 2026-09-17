# Unit 3 Deep Audit — Land-Based Empires

**Audit baseline:** AP World History: Modern Course and Exam Description, Effective Fall 2026  
**Audit model:** BeHistorical Course Audit Standard, calibrated against the certified Unit 2 reference implementation.  
**Status:** Diagnostic complete; repair not yet certified.

## Executive finding

Unit 3 is technically healthy and its canonical College Board metadata is largely accurate, but the student-facing instructional ecosystem has the same class of drift that the Unit 2 audit exposed: some renderer-owned checkpoints and lesson framing teach or assess an adjacent topic instead of the stated learning objective.

This is **not** a rebuild-from-scratch problem. It is a targeted instructional repair problem.

| Topic | CED Coverage | Instructional Coherence | Assessment Alignment | Technical Integrity | Human Review | Action |
|---|---|---|---|---|---|---|
| 3.1 Empires Expand | PASS | REVIEW | **FAIL** | PASS | REVIEW | Repair |
| 3.2 Empires: Administration | PASS | REVIEW | **FAIL** | PASS | REVIEW | Repair |
| 3.3 Empires: Belief Systems | PASS | **FAIL** | **FAIL** | PASS | **FAIL** | Priority repair |
| 3.4 Comparison in Land-Based Empires | PASS | REVIEW | REVIEW | PASS | REVIEW | Tighten + add capstone scenario |

## Protected Unit 3 instructional spine

The repaired unit should protect this hierarchy:

- **3.1 Empires Expand:** gunpowder/cannons + land-empire examples + political/religious rivalries -> explain how and why land-based empires developed and expanded.
- **3.2 Empires: Administration:** bureaucratic/military elites + religious/artistic legitimacy + revenue systems -> rulers legitimize and consolidate power.
- **3.3 Belief Systems:** Protestant/Catholic Reformations + Ottoman-Safavid Sunni/Shi'a rivalry + Sikhism -> continuity and change within belief systems.
- **3.4 Comparison:** compare **methods by which empires increased influence**, using Unit 3 evidence; comparison categories are tools, not a replacement for the learning objective.

## Topic 3.1 — Empires Expand

### What is aligned

- Learning targets and success criteria map to KC-4.3.II, KC-4.3.II.B, and KC-4.3.III.i.
- Checkpoint 1 correctly asks for the mechanism connecting gunpowder technology to territorial expansion.
- The Constantinople BeInTheRoom and gunpowder evidence are appropriate enrichment when kept subordinate to the CED spine.

### What needs repair

1. **Checkpoint 2 does not actually assess Learning Target 3.**  
   The checkpoint is declared as checking targets 2–3, but it asks students to describe two empires and explain the significance of Constantinople. The third target requires students to explain a political/religious interstate rivalry such as Safavid–Mughal conflict or Songhai–Morocco.

2. **The Constantinople-to-exploration causal claim is too strong and distracts from the CED spine.**  
   The canonical lecture says the 1453 conquest "closed a major overland trade route" and "directly contribut[ed] to the Age of Exploration." This should be removed or rewritten as a carefully qualified enrichment point. Topic 3.1 does not require that causal story; the required mechanism is imperial expansion through gunpowder plus interstate rivalry.

3. **Devshirme is useful context but belongs primarily to 3.2.**  
   The Janissary/devshirme material can remain as supporting evidence for Ottoman military capacity, but it should not become a second administrative lesson before Topic 3.2.

### Repair target

End with students able to explain:
**gunpowder military capacity -> territorial expansion**, identify the required land empires, and explain at least one required state rivalry.

## Topic 3.2 — Empires: Administration

### What is aligned

- Canonical targets exactly cover the three required historical developments:
  - bureaucratic elites/military professionals,
  - religious ideas/art/monumental architecture,
  - tribute/tax farming/innovative tax systems.
- Required illustrative examples are present in the canonical CED metadata.
- The lesson's problem-first frame — loyalty, revenue, legitimacy — is a strong organizing device.
- The Akbar administrative BeInTheRoom directly reinforces consolidation of power.

### What needs repair

1. **Checkpoint coverage omits the legitimacy branch.**  
   Checkpoint 1 emphasizes bureaucracy, taxation, and military recruitment. Checkpoint 2 emphasizes administrative systems and accommodation of local elites. Neither checkpoint directly requires students to explain how religious ideas, art, or monumental architecture legitimized rule, despite Learning Target 2 and Success Criterion 2.

2. **Administrative enrichment risks crowding out one-third of the official topic.**  
   Mansabdars, jagirs, accommodation, and local elites are strong examples, but the final assessment architecture must preserve equal visibility for legitimacy through religion/art/architecture.

### Repair target

Use a three-part spine:
**people who serve -> symbols/ideas that legitimize -> systems that pay for the state**.

## Topic 3.3 — Empires: Belief Systems

### What is aligned

- Canonical learning targets accurately reproduce the three required historical developments:
  - Protestant and Catholic Reformations,
  - Ottoman-Safavid rivalry intensifying Sunni/Shi'a division,
  - Sikhism emerging amid Hindu-Muslim interactions.
- First & 10 and Deep Reading contain the required Reformation, Sunni/Shi'a, and Sikhism content.

### What needs repair

1. **The lesson framing is centered on the wrong question.**  
   The subtitle and lecture emphasize rulers using religion to legitimize authority, manage diversity, and govern empires. That is primarily Topic 3.2 content. Topic 3.3's official job is continuity and change within belief systems.

2. **Checkpoint 1 is miswired to Learning Target 1.**  
   It claims to assess Learning Targets 1–2, but it asks how Ottoman/Safavid rulers used religion for legitimacy and conflict. It does not assess the Protestant/Catholic Reformation target.

3. **Checkpoint 2 is directly mismatched to Learning Target 3.**  
   It says it checks Learning Target 3, which is Sikhism, but asks students to compare Akbar and Aurangzeb. Sikhism is not assessed.

4. **Mughal tolerance/enforcement dominates student-facing assessment despite not being one of the three required historical developments for Topic 3.3.**  
   Akbar/Aurangzeb can remain useful enrichment or comparison, but it cannot replace Sikhism or the Reformations.

### Repair target

Rebuild the student-facing story as:
**Christianity changes -> Islam's internal divide intensifies through imperial rivalry -> Sikhism develops through Hindu-Muslim interaction**.

The reasoning lens should be **continuity and change in belief systems**, with ruler policy used only when it helps explain one of those developments.

## Topic 3.4 — Comparison in Land-Based Empires

### What is aligned

- The canonical lesson includes the Unit 3 key concepts required for review.
- The deep reading's fixed-category comparison method is strong and AP-useful.
- Checkpoints require claims, evidence from multiple empires, and explanation rather than feature lists.

### What needs tightening

1. **The exact learning objective needs to remain visible:** compare the methods by which various empires **increased their influence** from 1450 to 1750.
2. Current targets and checkpoints broaden into general administration, religious policy, and "nature of imperial rule." Those are valid evidence categories, but each comparison should explicitly connect back to increasing imperial influence.
3. The renderer intentionally has no BeInTheRoom URL. Unit 2's comparison reference build established that a comparison capstone can use a scenario to force evidence selection and reasoning. Topic 3.4 should receive an equivalent comparison scenario unless a deliberate exception is documented.

### Repair target

Every comparison response should complete the sentence:
**Empire A and Empire B increased influence by ___, but differed because ___; this mattered because ___.**

## Repair order

1. **3.3 first** — strongest topic-role and assessment mismatch.
2. **3.2 second** — restore the missing legitimacy assessment branch.
3. **3.1 third** — restore rivalry assessment and remove/qualify the 1453 trade-route causal shortcut.
4. **3.4 fourth** — tighten all comparison work to "increased influence" and add/document the capstone BeInTheRoom.

## Certification rule

Unit 3 should not be labeled reference-standard complete until all five gates pass:

**CED Coverage PASS -> Instructional Coherence PASS -> Assessment Alignment PASS -> Technical Integrity PASS -> Human Instructional Review PASS**

After repairs, create locked Unit 3 CED and coherence contracts modeled on Unit 2 and add them to CI.
