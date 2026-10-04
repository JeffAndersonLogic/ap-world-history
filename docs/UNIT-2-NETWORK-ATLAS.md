# Unit 2 Network Atlas

The atlas adds a shared geographic investigation to Module 01 for Topics 2.1 to 2.7. It supports the protected spines in `UNIT-2-REFERENCE-STANDARD.md`; it does not replace the First & 10, the authored Evidence Lab gallery, or the Primary Source module. The ten-module contract and existing Map Check prompt remain intact.

## Classroom use

The unit question is: **How did connections across Afro-Eurasia expand, and how did they change societies?**

Use one topic at a time. A short first visit can focus on prediction, a named place, and an explanation. Source inspection can support a longer investigation after the First & 10. On a later visit, use Recall later before revealing details. In 2.7, students revisit their own observations and compare the same category across networks.

Each investigation has four response fields: initial prediction, source reasoning, historical explanation, and later recall/transfer. Those fields are formative choices, not four additional required graded assignments. The atlas does not change the schedule or required-module lists.

An evidence notebook keeps student-written observations with their topic, location, and map view. It also makes earlier student explanations available for review. The porcelain relay is explicitly illustrative, not a documented chain for an artifact or a roleplay introducing invented merchant testimony.

## Historical scope and source transparency

- 2.1 centers commercial mechanisms, demand, and trading cities. Political stability is supporting context.
- 2.2 distinguishes empire building, khanates, decline, and continuing connections. A separate regional view names medical knowledge, numbering systems, and Uyghur-script adoption without inventing exact transmission routes.
- 2.3 pairs monsoon knowledge with navigation and commerce, and includes port growth and merchant communities. Winds show the Arabian Sea seasonal pattern only. Malacca and Zheng He retain their early-fifteenth-century chronology. Portuguese connections are excluded.
- 2.4 connects caravan organization and camel transport with Mali facilitating and benefiting from exchange. A regional southern marker makes no claim about a verified Niani capital location.
- 2.5 distinguishes earlier origins from continued diffusion and adaptation. Views cover Islam, paper/gunpowder, Hinduism/Buddhism, and travelers. Changing urban fortunes remain explicit in the handoff to the lesson.
- 2.6 represents rice, bananas, and citrus as regional crop examples without exact voyage arrows. The plague view is a selection of fourteenth-century connections, not a claim about a single origin or exclusive pathway.
- 2.7 compares common categories and asks students to test their claim with another example.

Historical source text, attribution, adaptation notes, and links are generated from the current `primarySource` object in `assets/data/ap-practice-units-1-2.js`. The atlas does not maintain a second source transcription. Geographic teaching notes are authored explanations, labeled as such. The course's original illustrative examples and complete topic jobs remain in the canonical lessons.

## Evidence for the next lesson

Read the initial prediction beside the later explanation. Look for an accurate place or term that still lacks a causal mechanism, confusion about earlier origins versus period effects, a source observation treated as a universal claim, or comparisons that use different categories for each network.

Use that evidence to choose the next instructional move: revisit the mechanism with a visual, model observation versus inference using the source, or ask students to reconstruct an explanation from memory. Response length, clicks, and completion are not quality or mastery measures. This release adds no automatic quality score or teacher database.

## Saving and Canvas

Atlas records use `behistorical-atlas-v1-topic-<topic>`, separate from the renderer's draft sweep. Prediction and explanation drafts stay isolated by topic; observation drafts are also isolated by place and view. Writes are counted by the existing Save Health instrumentation, without putting student writing into telemetry.

The student's **Add my atlas work to Map Check** action merges the selected topic's writing into `behistorical-draft-topic-<topic>-map-check-response`. Earlier Map Check writing is preserved. Re-importing a revised atlas response replaces only the known earlier imported atlas text. The student then returns to the lesson and uses Gather All My Work. No new capture slot, expected count, parser grammar, or record-footer format is introduced.

All writing remains browser-local until the student submits through Canvas. A blocked or failed storage write displays a notice and retains writing for the tab's lifetime. A failed Map Check import supplies selectable text instead of reporting success. Corrupt saved atlas JSON is left untouched. The existing teacher analysis route is Canvas downloads into Skills Lens; no Firestore client, new authentication, or central collection endpoint is added.

Printing expands notebook and response details; geographic information has a text equivalent. Controls and response fields work by keyboard. The native place selector provides an equivalent to clicking a map marker.

## Authoring and verification

Author topic investigations and map selections in `scripts/lib/unit2-atlas-content.js`. Rebuild with `node scripts/build-unit2-atlas.js`. The generated data combines those selections with canonical lesson source text and links. `--check` detects drift.

`scripts/test/unit2-atlas.test.js` verifies persistence, topic isolation, failed-storage memory, corruption protection, safe Map Check merging, source transparency, and seven lesson links. Its negative controls remove preservation, memory retention, and topic separation and must fail.

`scripts/test/unit2-atlas.browser.test.js` drives the actual atlas and lesson: all topic views, wind reversal, place-specific notes, reload, notebook continuity, Map Check import, Gather All My Work, recall, small/medium/large layouts, print, blocked storage, and a removed-autosave negative control. It is in the required browser suite. `--shots` saves local review screenshots outside the repository.

Instructional benefit remains a classroom question. Use students' explanations and delayed transfer responses to decide whether the atlas improves understanding.
