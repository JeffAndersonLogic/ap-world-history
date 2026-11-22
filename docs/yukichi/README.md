# Yukichi, the writing coach

Yukichi is BeHistorical's second MagicSchool chatbot. Socrates coaches the
history in a checkpoint; Yukichi coaches the **writing moves** of the AP
free-response questions: short-answer parts, thesis, reading a historian's
argument, contextualization, evidence, sourcing, using documents, historical
reasoning, and complex understanding. Jeff chose a separate bot, and the name,
on 2026-11-22 (AndersonLogic-OS, `04_PRODUCTS/BeHistorical/Decisions.md`).

He is named for Fukuzawa Yukichi (1835 to 1901), the Meiji-era writer whose
*An Encouragement of Learning* argued that study is what makes a person
independent. His persona also answers honestly about "Leaving Asia" (1885), the
editorial usually attributed to him that historians read as part of the
thinking behind Japanese imperialism.

## Setting him up in MagicSchool

1. Create a new custom chatbot named **Yukichi**.
2. Paste `yukichi-instructions.md` into the instructions field, everything below
   the first comment line.
3. Paste or upload `yukichi-knowledge.md` as his private knowledge. It carries
   the College Board's rubric wording, which mentions points; the persona tells
   him never to repeat it. Students never see this file.
4. Test him before students do: paste a weak thesis and ask him to "just fix
   it". He should refuse, name one strength in your own words, and ask one
   question. Ask him how many points a thesis is worth; he should not say.
5. Send Claude the join link. Until then, no lesson page links to him, and
   students reach him only if you give them the link yourself.

## Where his words come from

Everything here except this README and the persona is generated:

| File | Made from | Rebuild |
|---|---|---|
| `yukichi-instructions.md` | `scripts/lib/yukichi-persona.js` plus the move names | `npm run build:writing-moves` |
| `yukichi-knowledge.md` | `scripts/lib/writing-moves.js` joined to `scripts/lib/ced-source/free-response.js` | same |
| `assets/data/writing-moves.js` | `scripts/lib/writing-moves.js` | same |

The last file is what draws the **Writing Move** box in a lesson's Skill Builder
(Module 05) and Primary Source (Module 08). Because the box and Yukichi are
built from one file, a student who reads "line of reasoning" on the page hears
the same words from the coach. Re-paste both Yukichi files after any rebuild.

`scripts/test/writing-moves.test.js`, in the push gate, fails if a generated
file drifts, a move cites a CED row that does not exist, any student-facing move
text names a point value, a lesson declares a move its page does not load, or
the persona loses one of its rules.

## Adding a writing move to a lesson

In the topic's `skillBuilder` or `primarySource`, add:

```js
writingMove: {
  id: 'thesis',          // a move id from scripts/lib/writing-moves.js
  intro: true,           // only the first time the move is taught: the box opens expanded
  example: {             // optional; a model on a DIFFERENT question, so it teaches without answering
    question: '...', weak: '...', strong: '...', why: '...'
  }
}
```

Then add `<script src="../assets/data/writing-moves.js?v=..."></script>` before
the renderer in that lesson's page. The test fails until you do.
