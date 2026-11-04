# Teaching OS — System Specification v1.0

**Status:** Canonical product specification  
**Reference implementation:** BeHistorical AP World History  
**Product boundary:** Teaching OS is curriculum-agnostic. BeHistorical is its first implementation, not the engine itself.

## 1. Product definition

Teaching OS transforms an authoritative curriculum into a coherent, synchronized instructional system for teachers and students.

**SOURCE -> SPINE -> TEACH -> EXPERIENCE -> PRACTICE -> COACH -> ASSESS -> ADAPT**

AI assists inside that specification; it does not become the curriculum authority.

## 2. Core invariant: one instructional truth

Every topic or lesson must have one canonical Instructional Spine. Presentations, readings, activities, coaching, assessments, and teacher intelligence derive from or explicitly map to that spine. A downstream surface may deepen, simplify, or change format. It may not silently invent a parallel curriculum.

## 3. Input contract

The normalized curriculum input must support:
- source authority and version
- standards / key concepts
- learning objectives
- required or illustrative evidence
- disciplinary reasoning / skill expectations
- existing-course constraints
- provenance references back to the authoritative source

Subject-specific vocabulary belongs in implementation data, not the generic engine.

## 4. Canonical Instructional Spine schema

Each lesson spine must support:
- **topicProblem** — the question/problem the lesson resolves
- **priorTruth** — what students should already understand
- **changeOrTension** — the change, conflict, pressure, opportunity, or interaction driving the lesson
- **memorableSpine** — the durable causal/interpretive idea
- **organizingClaims[]** — flexible in number; history/content decides the structure
- **requiredEvidence[]** — evidence plus the claim/mechanism/consequence it proves
- **mechanisms[]** — explicit causal/process explanations where needed
- **misconceptions[]** — likely errors and boundaries
- **disciplinaryReasoning** — reasoning required by the source curriculum
- **teacherMoves[]** — LAND, STORY, ASK, LISTEN FOR, DISCIPLINARY CONNECTION, AVOID
- **assessmentTargets[]** — what mastery must demonstrate
- **retellingModel** — the student-visible conceptual center
- **provenance[]** — source-to-spine mappings
- **approvalState** — reviewed, waived, draft

## 5. Seven product layers

1. **Curriculum Model** — normalizes authoritative standards, objectives, evidence, and disciplinary expectations.
2. **Instructional Intelligence** — builds the accessible story, spine, claims, evidence roles, misconceptions, prerequisites, and cognitive hierarchy.
3. **Teaching Model** — turns the spine into teacher action using **LAND -> STORY -> ASK -> LISTEN FOR -> DISCIPLINARY CONNECTION -> AVOID**. BeHistorical's AP CONNECTION is the AP World adapter.
4. **Experience Generator** — produces synchronized projection, readings, maps, evidence work, simulations, source work, and other lesson surfaces.
5. **Student Intelligence** — constrains AI coaching/review to the spine, taught evidence, skills, misconceptions, and permitted scaffolding.
6. **Assessment Model** — maps mastery targets to checkpoints, skill work, evidence use, writing, and summative assessment.
7. **Teacher Intelligence** — provides Command Center, run of show, pacing, teacher moves, student signals, intervention guidance, and reteaching pathways.

## 6. Dependency graph and synchronization

Teaching OS must maintain traceability:

**Source requirement -> Spine claim -> Teaching beat -> Student experience -> Practice/coaching -> Assessment target**

A change to an upstream node must identify downstream dependencies.

Target behavior:

> **Change once. Propagate everywhere. Verify automatically.**

Generated student artifacts must never become independent authored curriculum copies.

## 7. Provenance model

Every substantive instructional claim should answer **Why is this here?**

Minimum chain:
- source authority
- source identifier
- normalized curriculum node
- instructional-spine node
- downstream surfaces that consume it

BeHistorical reference chain:

**CED key concept -> Topic spine claim -> Teacher presentation beat -> First & 10 / Evidence Lab / Socrates -> Checkpoint or assessment**

## 8. AI contract

AI operates downstream of curriculum authority and the approved instructional model.

AI may explain, transform, question, coach, generate variants, recommend interventions, and surface uncertainty inside the contract.

AI may not silently replace authoritative curriculum, independently change required targets, introduce a parallel spine, or treat generated output as authoritative because it is fluent.

Socrates is the reference Student Intelligence implementation. Its long-term contract should include what was taught, mastery target, evidence expectations, misconception state, current student state, permitted hints, and next-best instructional move.

## 9. Coherence engine

Certification requires distinct checks:
1. **Source Coverage**
2. **Instructional Coherence**
3. **Assessment Alignment**
4. **Technical Integrity**
5. **Human Instructional Review**

Teaching OS should additionally test:
- **Weighting** — illustrative evidence does not displace core claims.
- **Cognitive Load** — content is not fragmented into unnecessary beats.
- **Provenance Completeness** — major elements map upstream.
- **Teacher/Student Synchronization** — student surfaces derive from canonical sources.
- **Coaching Alignment** — AI coaching uses the same spine/evidence expectations.
- **Assessment Validity** — consequential assessment has a taught/mapped basis.

Automation is diagnostic where instructional judgment cannot be reliably encoded. A green structural test is not pedagogical certification.

## 10. Authoring and build lifecycle

Reference workflow:

**authoritative source -> existing-course constraint check -> accessible story -> memorable spine -> must-have evidence -> narrative beats -> story approval/waiver -> retelling model -> asset/capability inventory -> visual plan -> canonical teacher build -> generated student surfaces -> ecosystem sync -> instructional verification -> technical verification -> adjacent findings -> ship**

This is a Teaching OS workflow, not an AP-World-only rule.

## 11. Portability requirement

Teaching OS v1.x is not product-independent until a non-AP-World proof case runs through the core pipeline without modifying the generic engine.

The proof must demonstrate a different standards source, normalization, Instructional Spine, teacher intelligence, synchronized teacher/student experience, assessment mapping, constrained coaching contract, provenance, and coherence checks. Subject adapters are allowed; core-engine forks are not.

## 12. Current BeHistorical implementation audit

### EXISTS
- CED-first authoring standard
- accessible story and memorable-spine workflow
- flexible organizing claims / no fixed Big Rocks count
- retelling-slide requirement
- canonical teacher presentation source
- generated student presentation data
- teacher-only preflight and Teacher Intelligence separation
- LAND / STORY / ASK / LISTEN FOR / AP CONNECTION / AVOID
- shared Teaching OS teacher cockpit
- student-byte sanitization
- CED coverage contracts
- cross-surface coherence contracts
- assessment-alignment checks
- technical/offline/browser validation
- Unit 2 reference-standard certification model
- canonical-source generation for Unit 2 First & 10 and Deep Reading/eBook

### PARTIAL
- generic curriculum model: CED contracts exist, but AP World semantics remain embedded
- canonical Instructional Spine: protected spines exist, but no generic schema/object governs every surface
- dependency graph: traceability contracts exist, but no first-class graph with downstream impact analysis
- provenance: mappings exist in contracts/docs, but are not uniformly exposed as runtime metadata
- Student Intelligence: Socrates is expected to reinforce the spine, but a generic coaching-state contract is not yet the central source of truth
- Teacher Intelligence: strong presentation implementation exists; cross-module student-signal/adaptation loop is incomplete
- coherence engine: strong diagnostics exist, but weighting, cognitive-load, provenance-completeness, and coaching-alignment are not first-class generic gates
- ecosystem generation: several canonical/generated relationships exist, but not all surfaces derive from one normalized spine object

### EXTRACT FROM BEHISTORICAL
- replace AP-specific engine names with generic curriculum/disciplinary interfaces
- define AP CONNECTION as a BeHistorical adapter for DISCIPLINARY CONNECTION
- isolate CED parsing/contracts behind a curriculum-source adapter
- isolate BeHistorical module names behind generic experience roles
- keep BeHistorical branding, historical content, and AP-specific evidence outside the engine

### MISSING
- versioned generic Instructional Spine schema
- first-class dependency/provenance graph
- automated downstream impact report
- generic Socrates coaching contract/state model
- generic assessment-target registry tied to spine nodes
- formal adaptation loop: student evidence -> teacher signal -> recommended intervention
- non-AP portability proof
- explicit public/private IP boundary for the reusable engine

## 13. Optimization roadmap

### P0 — Formalize the engine
1. Make this specification canonical.
2. Create a versioned generic Instructional Spine schema.
3. Map current Unit 2 reference topics into the schema without changing instructional content.
4. Add provenance IDs to source, spine, presentation, practice, and assessment nodes.
5. Generate a dependency/impact report from those IDs.

### P1 — Close the intelligence loop
1. Define the generic Socrates coaching contract.
2. Tie checkpoints and assessment targets to spine IDs.
3. Define student evidence signals and teacher intervention outputs.
4. Add coaching-alignment and assessment-validity checks.

### P2 — Prove portability
Run one non-AP-World lesson through the complete pipeline without forking the core engine.

### P3 — Harden as product/IP
Separate reusable engine specifications, schemas, evaluators, orchestration logic, and proprietary prompts from public BeHistorical course content. Maintain a dated development/invention log for material architecture changes.

## 14. Proprietary boundary

Candidates for private/proprietary storage rather than automatic publication:
- generic Teaching OS system specifications/internal variants
- orchestration and evaluator prompts
- proprietary Instructional Spine implementation logic
- dependency/provenance algorithms
- coherence evaluators and weighting logic
- Socrates orchestration/state logic
- adaptation/intervention algorithms
- commercialization and portability strategy

Public course content may expose outputs and interfaces without exposing internal orchestration.

## 15. v1.0 success definition

Teaching OS v1.0 succeeds when:
- an authoritative curriculum normalizes without subject-specific engine changes;
- one approved Instructional Spine controls instructional truth;
- teacher/student surfaces remain synchronized derivatives;
- every major instructional element has provenance;
- assessments and AI coaching map to the same mastery targets;
- upstream changes expose downstream impact;
- automated coherence checks catch structural drift;
- human review remains final instructional certification;
- BeHistorical runs as the AP World adapter rather than defining the engine.
