# Module 07, Unit 7: conversion to one authored evidence pool

2026-09-05. The pilot for the repair described in the authenticity gate section of
`docs/module-07-scaffolding-standard.md`. Unit 7 first because it lost the most:
eight of its nine topics carried four authentic images each, and all of them went
dark on 2026-09-05 when the registry runtime replaced `lesson.images` at load.

## What was wrong

Two things, and only one of them was visible.

**The evidence got weaker.** Topic 7.2 had the 1914 alliance map, the Punch
cartoon of Rhodes astride Africa, a contemporary illustration of the Sarajevo
assassination, and an 1898 map of colonial empires. It was replaced with four
typed cards, one of which read, in full: "Triple Alliance: Germany,
Austria-Hungary, Italy / Triple Entente: France, Russia, Britain." The questions
attached to those cards were sharper than the ones they replaced. The reasoning
demand went up while the evidence underneath it got thinner, which is the wrong
direction for the one module whose job is working from a historical object.

**Nothing could tell you which pool a student read.** The images were never
deleted. All 85 of them across Units 5 to 9 sat in the lesson data files,
shadowed at load by `module-07-evidence-runtime.js`. Editing a caption in the data
file would have changed nothing on the page, and no check would have said so.

## What the conversion does

Each Unit 7 topic now declares one evidence pool, `lesson.images`, in its own
renderer config, exactly the way Units 1 and 2 do. The shell no longer loads the
registry or the runtime. `assets/data/module-07-evidence-unit-7.js` is deleted.

Cards come in two kinds:

- a **picture**, with `url` and `sourceUrl`, as before;
- **text evidence**, with `sourceText` and a `label` naming the kind of record,
  drawn as a branded plate by `assets/js/behistorical-evidence-text-card.js`.
  A statute, a treaty clause, a casualty count, a dated diplomatic sequence.

The improved prompts were kept and attached to the restored objects. Where a
prompt already named a CED key concept, both survive: the key-concept anchor and
the "what can this not prove" move.

## Per-topic decisions

Legend: **restored** = authentic image brought back from the data file;
**kept** = card from the 2026-09-05 registry, retained; **cut** = dropped.

| Topic | Pool | Restored | Kept as record | Cut, and why |
|---|---|---|---|---|
| 7.1 Shifting power | 4 obj + 2 rec | 1898 empires map; Boxer Rebellion; Nevsky Prospekt 1917; Zapata 1914 | Treaty of Portsmouth; Qing abdication edict | "Romanov rule collapses" (the Nevsky photograph is the same claim with an object); "Ottoman Empire dissolves" (no object, and the pool was full) |
| 7.2 Causes of WWI | 4 obj + 2 rec | 1914 alliance map; Rhodes Colossus cartoon; Sarajevo illustration; 1898 empires map | Naval race, rewritten as ship counts; July Crisis, rewritten as a dated sequence | "Alliance blocs" and "Sarajevo assassination" text cards: both were summaries of an image the topic already owned |
| 7.3 Conducting WWI | 4 obj + 2 rec | Kitchener poster; Somme trench 1916; Indian bicycle troops 1916; Sargent's *Gassed* | Somme casualty figures; Defence of the Realm Act | "Colonial troops" (its one-million figure moved into the Indian troops caption as context); "Tanks enter combat" (pool full; a Mark I photograph exists in the repo if it is wanted later) |
| 7.4 Interwar economy | 3 obj + 3 rec | NYSE crowd 1929; *Migrant Mother* 1936; Social Security signing 1935 | Hyperinflation, rewritten with exchange rates; US unemployment 1933; Soviet Five-Year Plans | Stalin portrait (decorative, and the plan record carries the argument); "New Deal intervention" (the signing photograph is the same claim with an object) |
| 7.5 Unresolved tensions | 3 obj + 3 rec | Council of Four 1919; Sykes-Picot signed map 1916; League mandates map | Covenant Article 22, with its actual wording; Versailles Article 231; Japan's racial-equality proposal | Gandhi portrait (decorative); "May Fourth protests" (pool full; the strongest candidate for a sixth slot if a real object is sourced) |
| 7.6 Causes of WWII | 2 obj + 4 rec | Treaty of Versailles document; flag of Manchukuo | Manchuria 1931; Ethiopia 1935; Munich 1938; Nazi-Soviet Pact and Poland 1939 | WWII infobox montage (a modern Wikipedia composite, not a source); Hitler and Chamberlain portraits (decorative) |
| 7.7 Conducting WWII | 1 obj + 4 rec | Nagasaki 1945 | Blitzkrieg in Poland; Soviet mobilization; strategic bombing; the atomic bombings as a dated chronology including the Soviet entry | WWII montage; Churchill and Hitler portraits |
| 7.8 Mass atrocities | 0 obj + 5 rec | none available | Armenian deportations; Nuremberg Laws; Wannsee; Cambodia; Rwanda | nothing |
| 7.9 Causation capstone | 4 obj + 1 rec | 1898 empires map; 1936 empires map; *Migrant Mother*; Nagasaki | Expansion 1931 to 1939, as a dated sequence | all four "cross-war reconstruction" cards: they were the author's synthesis, which is the argument the student is supposed to build |

**Result: 51 cards. 25 pictures, 26 documentary records, no unsourced summaries.**
Before the conversion the same nine topics offered 40 cards, of which 0 were
pictures. Before 2026-09-05 they offered 32 pictures and no records.

## Two topics that deserve their exceptions

**7.8 has no pictures, and that is correct.** How a state organizes an atrocity is
documented in laws, deportation orders and meeting minutes, and those are the
evidence. Photographs of atrocity are deliberately not used: they would be
authentic and they would teach a fifteen-year-old to recoil rather than to
analyze a mechanism. The report flags this topic; the flag is answered here.

**7.9 lost the most cards and gained the most.** A synthesis capstone is the one
place where handing students the author's cross-war reconstruction does the most
damage, because that reconstruction *is* the essay. It now gets the 1898 and 1936
maps side by side and is asked which of change or continuity better explains
renewed conflict.

## Where the pool is still thin

**7.7 carries one photograph.** The repository has no Soviet war-production,
strategic-bombing or home-front image already proven live, and this conversion
does not invent Commons filenames: a fabricated filename is the exact defect that
put `Khmer_Empire_1203_Map_%28cropped%29.png).png` in front of students on
2026-09-01. Sourcing two or three verified images for 7.7 is named, open work, not
a thing to quietly paper over.

## What the report says about the six flagged cards

`node scripts/report-evidence-authenticity.js 7 --summaries` flags six cards as
"summary": the Defence of the Realm Act, the Soviet Five-Year Plans, Japan's
racial-equality proposal, strategic bombing, the Nuremberg Laws and Wannsee.

All six are genuine documentary records. They are flagged because their text
spells its numbers as words, and the classifier looks for a numeral. **They were
left exactly as written.** Padding a card with digits to quiet a report is the
behavior the report's own header warns about, and it would make the report
useless within a term.

## Verification

- `npm test` passes, including the new `scripts/check-module07-authored.js`.
- The browser suite passes, including `lightbox-sweep.js`, which opens Module 07
  on all 77 lesson pages and confirms every evidence image is an operable button.
- **Not verified here:** that the 25 restored Commons URLs still resolve. The
  sandbox this was built in cannot reach commons.wikimedia.org, so
  `check-image-urls.js` reported "nothing was verified" rather than a pass. Every
  restored URL was already live on the site before 2026-09-05 and none was
  hand-edited, but that is an argument, not a check. **Run
  `node scripts/check-image-urls.js` from a real network before this reaches
  `main`.**

## Next

Units 5, 6, 8 and 9 still run the registry-plus-runtime path, and the report shows
them at 0 pictures across 44 topics. Units 3 and 4 are worse and are a separate
problem: twelve topics whose Evidence Lab renders zero evidence cards of any kind,
because their data files carry `evidenceLab.items` and no `images` array, which
the renderer does not read. An unmerged `module7-audit-units3-4` branch exists on
the remote and may already address it.

Convert one unit at a time, add it to `CONVERTED` in
`scripts/check-module07-authored.js`, and when the last one lands delete the
runtime and the remaining registries.
