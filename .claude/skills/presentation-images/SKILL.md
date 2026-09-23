---
name: presentation-images
description: "Review and place pictures for a BeHistorical class presentation: inventory what Jeff uploaded to assets/images/topics/X-Y/, say what each picture really is (historical source, map, modern photo or painting, AI-generated), check it is big enough to project, match each one to a beat of the approved story, and wire the chosen ones into the Teaching OS deck with honest credits. Use whenever Jeff says 'I uploaded pictures for 2.6', 'use my images', 'build the deck around these pictures', 'curate images', 'find a picture for this slide', 'is this image OK to use', or '/presentation-images'. Not for Evidence Lab sourcing on lesson pages (that is scripts/source-evidence-images.js) and never a reason to change the approved story."
---

# Presentation Images

This is how Topic 2.4's deck was built around Jeff's uploaded pictures on 2026-09-23
(commits `ab46bdc`, `811ab0c`), written down so every topic gets the same care.

**The standing rule, from `docs/PRESENTATION-AUTHORING.md`:** do not let an available
image determine the lesson. The story is decided first, at the story approval gate. The
pictures serve it. If a great picture fits no beat, it stays out, and you say so.

## Arguments

`/presentation-images <topic> [review]`

- `review` means **look and recommend, change nothing**: Jeff gets the table in step 3 and
  decides. Without it, build the plan into the deck after showing him the table.

## Step 0: Check the calendar and the story

1. Look up when the topic is taught and whether it is frozen today (the snippet is in
   step 0 of the **topic-audit** skill). A frozen topic's deck does not change without
   "ship this fix". Pictures are an improvement, not a repair, so during a freeze do
   `review` only.
2. Find the approved story: `teacher/data/topic-X-Y-teaching-base.js` (slide ids, titles,
   beats) and any `docs/TOPIC-X-Y-STORY-DRAFT.md`. If there is no approved story yet, stop
   and say so. Picking pictures first is the mistake this process exists to prevent.

## Step 1: Inventory the folder

```bash
T=2-6
for f in assets/images/topics/$T/*; do
  printf '%s | %s | %s KB | c2pa:%s\n' "$(basename "$f")" \
    "$(file -b "$f" | grep -oE '[0-9]{2,5} ?x ?[0-9]{2,5}' | tail -1)" \
    "$(( $(stat -c%s "$f") / 1024 ))" "$(grep -c -a -i c2pa "$f")"
done
```

Then **open every picture and look at it** (the Read tool shows images). The numbers are a
starting point; looking is the check.

For each file, decide:

**What it really is.** One of: a historical source (say what and when: "Catalan Atlas,
1375"), a map (modern or period), a modern photograph, a modern painting or illustration
(name the artist if known), or AI-generated.

**Whether it is AI-generated.** A `c2pa` count above 0 means the file carries content
credentials, which Google and other generators embed. Zero proves nothing: the 2.4 caravan
illustration had none. Look for the tells: garbled or invented place names, text that is
not quite letters, anachronisms (2.4's had a wheeled cart in the Sahara), too-perfect
cinematic lighting, hands and faces that melt. Filenames like "Cinematic ..." are a hint,
not proof. When unsure, ask Jeff where it came from.

**Whether it is big enough.** The board is 1280x720.
- About 1000px wide or more: fine as a full-slide background.
- About 600 to 1000px: fine as half a slide, an inset, or a map shown whole.
- Under about 400px on its long side: too small to project. Skip it and say so
  (2.4's Timbuktu photo was 300x200).

**Whether anything printed on it is wrong.** Read every label, date and place name in the
picture itself. A map with a wrong date teaches the wrong date.

## Step 2: Match pictures to beats

Go through the story's slides in order. For each beat, ask what visual it deserves: a
historical image, a map, an artifact or primary source, a comparison pair, a simple
mechanism graphic, or no image. Then see whether an uploaded picture is that visual.

- **A real source beats a modern image, and a modern image beats an AI one**, when they
  would do the same job. Sourcing order: a repo-local picture already in use, one the
  course already ships and has verified, a newly sourced public-domain one (staged and
  verified first), then a labeled reconstruction.
- **A modern painting next to a period source makes a good sourcing pair.** 2.4 set the
  Higgins Bond painting of Mansa Musa beside the 1375 Catalan Atlas: same man, two very
  different kinds of evidence.
- **An AI picture sets a scene; it never proves anything.** It may go on a slide, labeled.
  It never goes in the Evidence Lab. If it has visible mistakes and Jeff wants it anyway
  (2.4's closing slide), name the mistakes in the slide notes as a quick check for the
  room, so students read it as a reconstruction.
- **Pick the slide template by the shape of the idea**, not by what was used last. The
  catalog is `teacher/slide-templates.html`: equation, exchange, split, compounding,
  timeline (only for a true sequence), primary source, frame-question, letterbox frames
  for AI images.

## Step 3: Show Jeff the plan before wiring anything

A table, one row per file in the folder, used or not:

| Picture | What it is | Size | Proposed slide | Use? | Why |
|---|---|---|---|---|---|
| Camel Caravan.jpg | modern photograph | 1000x582 | hook, full background | yes | sets the Sahara before the question |
| Timbuktu.jpg | modern photograph | 300x200 | none | no | too small to project |
| Trans Saharan illustration.png | AI-generated | 1280x720 | none | no | invented place names, wheeled cart |

Then list any beat that still has no good picture, with what kind of picture it needs.
Suggest a real source to look for, but **never type a Commons filename from memory**. Stage
candidates and verify them (step 5).

In `review` mode, stop here.

## Step 4: Wire the chosen pictures into the deck

Everything goes in `teacher/data/topic-X-Y-presentation-assets.js`, which feeds both the
teacher deck and the generated student deck. Follow Topic 2.4's file as the model:

```js
const LOCAL='../assets/images/topics/2-4/';
const local=name=>LOCAL+encodeURIComponent(name);   // filenames have spaces
const SALT={url:local('2.4 - Salt Slabs.jpg'),alt:'Rows of large rock-salt slabs stacked at a market',credit:'Modern photograph · Saharan rock salt'};
const GOODS_MAP={fit:'contain',url:local('2.4 - Mali.png'),alt:'...',credit:'Map · Mali Empire trade routes and goods'};
const CARAVAN_AI={ai:true,url:local('2.4 - Trans Saharan Trade Routes illustration.png'),alt:'...',position:'50% 96%'};
```

- `VISUALS` go on a slide's own `visual`; `TEMPLATE_VISUALS` go on `template.visual` (or
  `scene` and `evidence` for a pair).
- **`credit` says what the picture is**: "Modern photograph · ...", "Modern painting ·
  Higgins Bond", "Map · ...", "Catalan Atlas, 1375 · BnF · public domain".
- **`ai: true` and no credit** for an AI picture. The template library prints
  `Historical Reconstruction - AI Generated` itself. Use `cropBottom` if a label is
  printed into the file.
- **`alt` describes what is in the picture** for a student who cannot see it.
- `fit:'contain'` for a map or anything that must be seen whole; `position` to protect
  the focal point when a photo is cropped to fill.
- Update the comment at the top of the file: what was used, what was left out and why.
  That comment is how the next session knows the 300x200 photo was rejected on purpose.

## Step 5: A new picture from Commons

Only when no uploaded or already-shipped picture fits a beat.

1. Stage the candidate in `scripts/lib/evidence-image-candidates.js`.
2. Run `node scripts/source-evidence-images.js X.Y` **without `--apply`** (that flag
   writes into the lesson's Evidence Lab, which is not where a slide picture goes), then
   `--describe X`. Remove the candidate from the staging file afterward.
3. **Read what Commons says the file is against the caption you wrote.** A file that
   exists is not the same as the right picture (a commemorative medal once passed as a
   photograph of the Suez opening).
4. Use the `Special:FilePath/<exact name>` form, never a hand-built `thumb/` URL.

If Commons cannot be reached from this session, say that nothing was verified. Do not use
the picture.

## Step 6: Build and check

```bash
npm run build:student-os-decks
npm test
npm run test:browser      # needs: npm i playwright-core
```

The browser suite measures every template slide and fails on text off the board or a
credit or AI label cut off. It runs on fallback fonts, which are narrower than the real
Cinzel, so for a slide with a long title or credit, also check it with the real fonts
before calling it done (2.4 found a clipped credit only that way). A SKIP is not a pass.

Then look at the slides: open `teacher/topic-X-Y-os.html` and the student deck at
`unit-N/presentation-topic-X-Y-student.html` and step through every slide you changed.

## Step 7: Report and commit

Tell Jeff, in plain language: which pictures went where, which were left out and why, any
beat still without a good picture, and anything that needs his eye (an AI picture he may
or may not want, a crop that hides something).

Commit on the working branch with a title like `Topic 2.6: build the deck around Jeff's
uploaded pictures` and a body that lists each placement and each rejection. See
`ab46bdc`. Getting it to students is the **ship-to-main** skill, when Jeff says to ship.
