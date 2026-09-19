# BeHistorical Agent Instructions

These instructions apply to Codex, ChatGPT coding agents, Claude Code, Copilot, and any other AI model modifying this repository.

## Read before changing presentation code

For any request involving a BeHistorical class presentation, Teaching OS, Teach Mode deck, teacher projection surface, or generated student deck:

1. Read `CLAUDE.md` for repository-wide architecture and shipping rules.
2. Read `docs/TEACHING-OS.md` for the canonical presentation-design process.
3. Inspect the current implementation in the repository before using another topic as a model.

`docs/TEACHING-OS.md` is the design authority. If an older file, skill, comment, or existing deck conflicts with it, follow the Teaching OS document unless the user explicitly changes the standard.

## Locked presentation production line

**CED -> ninth-grade story -> memorable spine -> must-have evidence -> narrative beats -> visual plan -> canonical teacher build -> generated student deck -> ecosystem sync -> verify -> ship**

Do not skip the story stage.

The CED determines what students must learn. The ninth-grade story determines how they encounter it. Slides, images, vocabulary lists, and existing deck structure come afterward.

## Non-negotiable presentation behavior

- Start from the topic's College Board learning objective, essential knowledge / key concepts, illustrative examples, and reasoning verb.
- Explain the topic first as a coherent story for a 14- or 15-year-old.
- Derive one memorable spine from that story.
- Attach every required example to the claim or consequence it proves.
- Build narrative beats from the story. Do not make one slide per vocabulary word or illustrative example.
- Treat 12 to 16 student-visible slides as a common range, not a quota.
- Use Big Rocks only when they emerge naturally from the story; do not force every topic into three boxes.
- Plan visuals before coding. Do not let an available image determine the historical argument.
- Keep projected slides lean. Put depth in Teacher Intelligence: LAND, STORY, ASK, LISTEN FOR, AP CONNECTION, and AVOID.
- Maintain one canonical teacher source. Generate the student deck from it; never hand-maintain the student Teaching OS data.
- Sync every affected surface, including Teacher Command Center routing, lesson `classPresentation`, student presentation HTML/data, generators, and indexes.
- Verify the actual result before saying it is done, live, synced, or shipped.

## Peer-review rule

When the user supplies another AI model's recommendation, critique, or draft, evaluate it independently against the CED, historical evidence, and repository state. Agreement is not the objective. Preserve useful disagreement and distinguish what should be kept, modified, rejected, or verified.

## Execution language

- "Plan it" / "show me" normally means stop after story, spine, storyboard, and visual requirements.
- "Build it" / "run it" / "fix it" means execute the full relevant pipeline through verification and shipping when repository access permits.
- Never infer completion from a commit or pull request alone.

For implementation details, generation rules, and the exact shipping contract, follow `docs/TEACHING-OS.md` and `CLAUDE.md`.
