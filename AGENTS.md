# BeHistorical Agent Instructions

These instructions apply to Codex, ChatGPT coding agents, Claude Code, Copilot, and any other AI model modifying this repository.

## Read before changing presentation code

For any request involving a BeHistorical class presentation, Teaching OS, Teach Mode deck, teacher projection surface, or generated student deck:

1. Read `CLAUDE.md` for repository-wide architecture and shipping rules.
2. Read `docs/PRESENTATION-AUTHORING.md` for the canonical instructional-design process.
3. Read `docs/TEACHING-OS.md` for the canonical implementation contract.
4. Inspect the current implementation before using another topic as a model.

If an older file, skill, comment, or existing deck conflicts with the presentation authoring standard, follow `docs/PRESENTATION-AUTHORING.md` unless Jeff explicitly changes the standard.

## Locked presentation production line

**CED -> existing-course constraint check -> ninth-grade story -> memorable spine -> must-have evidence -> narrative beats -> story approval gate -> retelling slide -> asset and capability inventory -> visual plan -> canonical teacher build -> generated student deck -> ecosystem and registry sync -> instructional verification -> technical verification -> adjacent findings -> ship**

Do not skip the story stage.

The CED determines what students must learn. The ninth-grade story determines how they encounter it. Slides, images, vocabulary lists, and existing deck structure come afterward.

## Non-negotiable presentation behavior

- Start from the topic's College Board learning objective, essential knowledge or key concepts, illustrative examples, and reasoning verb.
- Run the existing-course constraint check before story approval so the deck does not contradict learning targets, success criteria, AP skill declarations, or encoded CED contracts.
- Explain the topic first as a coherent story for a 14- or 15-year-old.
- Derive one memorable spine from that story.
- Attach every required example to the claim, mechanism, or consequence it proves.
- Build narrative beats from the story. Slide count follows the story.
- Organizing claims follow the history. Big Rocks are optional and never require a fixed count.
- Satisfy the story approval gate before implementation, or record Jeff's explicit waiver in the final build report.
- Name one student-visible retelling slide that captures the whole topic.
- Inspect assets and renderer capabilities only after the story gate, then make the visual plan.
- Never write a Commons filename from memory. New remote assets are staged and verified before production use.
- Keep projected slides lean. Put depth in Teacher Intelligence: LAND, STORY, ASK, LISTEN FOR, AP CONNECTION, and AVOID.
- Maintain one canonical teacher source. Generate the student deck from it and never hand-maintain generated Teaching OS student data.
- Sync every affected surface and registry. Derive membership checks where possible, preserve genuinely editorial declarations, and check declared registries in both directions.
- Verify instruction and software separately.
- Fact-check analogies, comparisons, counterfactuals, hooks, and framing statements at the same standard as the core historical content.
- Any new or materially changed check used as completion evidence, committed or disposable, must be shown capable of failing before its green result is trusted.
- Report out-of-scope defects as adjacent findings instead of silently fixing or dropping them.
- Verify the actual result before saying it is done, live, synced, or shipped.

## Peer-review rule

When the user supplies another AI model's recommendation, critique, or draft, evaluate it independently against the CED, historical evidence, the authoring standard, and current repository state. Agreement is not the objective. Preserve useful disagreement and distinguish what should be kept, modified, rejected, or verified.

## Execution language

- "Plan it" or "show me" normally means stop after story, spine, evidence, narrative beats, retelling slide, and visual requirements.
- "Build it", "run it", or "fix it" means execute the full relevant pipeline through verification and shipping when repository access permits.
- Do not re-ask for story approval if the collaborative review has already satisfied the gate.
- If Jeff explicitly waives story approval, proceed and disclose the waiver in the final build report.
- Never infer completion from a commit or pull request alone.

For implementation details, generation rules, and the exact shipping contract, follow `docs/TEACHING-OS.md` and `CLAUDE.md`.
