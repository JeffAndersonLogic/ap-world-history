# Editing Topics: A Practical Cheat-Sheet

A quick reference for the common edits you'll make as the year goes on:
swapping a video, replacing an image, fixing text, or rewriting a reading.
Every edit is a plain-text change in one file. No compiler, no framework.

**Golden rule:** after any edit, run the validator and only then commit.

```
node scripts/validate.js        # catches structural mistakes
git add -A && git commit -m "..." && git push origin main
```

Per the project convention, commit straight to `main` (no feature branches).

---

## 1. The two kinds of topics

| Kind | Content file | Where images live | Where videos live |
|------|--------------|-------------------|-------------------|
| **Foundations** (`foundations-0` … `foundations-5`) | `foundations/foundations-N-*-data.js` | in the **same** data file | in the **same** data file |
| **Unit lessons** (Topics 1.1 … 9.9) | `assets/data/lesson-N-N-*.js` | `assets/data/lesson-N-N-renderer-config.js` (`stableImages`) | in the `lesson-N-N-*.js` data file (`videos`) |

The **First & 10 reading** is always a separate standalone page
(`.../first-and-10-*.html`) shown inside the lesson through an iframe. It holds
the reading prose and its three questions — **no videos or images** — so media
swaps never touch it.

---

## 2. Swap a video

### Foundations
Open `foundations/foundations-N-*-data.js`, find the `videos:` array near the
bottom, and change `youtubeId`, `url`, `title`, and `prompt`:

```js
videos: [
  {
    title: 'Crash Course World History: The Persians & Greeks',
    url: 'https://www.youtube.com/watch?v=Q-mkVSasZIM',
    youtubeId: 'Q-mkVSasZIM',          // <-- the ID after "v=" in the YouTube URL
    prompt: 'Watch for: how did Persia and the Greek city-states organize power?'
  }
]
```

The **`youtubeId`** is what actually drives the embed — it's the part after
`v=` (or after `youtu.be/`) in the URL. Set `url` to match so the "open on
YouTube" link is correct.

### Unit lessons
Same shape, but the `videos:` array is in the topic **data file**
(`assets/data/lesson-N-N-*.js`), not the renderer-config.

---

## 3. Swap an image

All images are now Wikimedia Commons URLs of this exact form:

```
https://commons.wikimedia.org/wiki/Special:FilePath/<EXACT_FILE_NAME>
```

To change an image you only change the file name at the end.

**Finding the file name:** open the image's page on
`commons.wikimedia.org`, copy the title after `File:` (e.g.
`Parthenon.jpg`), and replace spaces with underscores. Commas and parentheses
are allowed in the URL.

### Foundations
In `foundations/foundations-N-*-data.js`, the image fields are:

| Field | What it is |
|-------|------------|
| `heroImage` | top banner image for the whole topic |
| `map.url` | the Map & Geography module image |
| `evidence.items[].url` | each Evidence Lab image |
| `lecture[].image.url` | the image on each lecture card |

Each also has a `sourceUrl` (the `File:` page) and usually a `caption` —
update those to match when you swap.

```js
image: {
  title: 'The Parthenon, Acropolis of Athens',
  url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Parthenon.jpg',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Parthenon.jpg',
  caption: 'The Parthenon crowned the Acropolis of democratic Athens...'
}
```

### Unit lessons
Images live in `assets/data/lesson-N-N-renderer-config.js` under
`stableImages`, keyed by module:

```js
lesson.stableImages = {
  map:             'https://commons.wikimedia.org/wiki/Special:FilePath/...',
  first10:         '...',
  contentDelivery: '...',
  beSurreal:       '...',
  skill:           '...',
  checkpoint1:     '...',
  evidence:        '...',
  source:          '...',
  beInTheRoom:     '...',
  checkpoint2:     '...'
};
```

### ⚠️ Always eyeball an image swap in the browser
A wrong file name doesn't throw an error — it just shows nothing. The validator
can't check whether a Commons file actually exists, so open the page and look
after you swap. (Avoid `../assets/images/module-cards/*.jpg` — those local
files are broken placeholder stubs; use Commons URLs instead.)

---

## 4. Edit text (targets, timeline, lecture bullets, captions, checkpoint)

All of it is just strings in the Foundations data file (or the Unit data file).
Edit the string and save. A few style notes to match the rest of the repo:

- **Bold** inside a lecture bullet uses `**double asterisks**`.
- **Em dashes (—) are avoided in body text** — use commas instead. Em dashes
  are kept only in `title:` / `subtitle:` fields (data) and the `<title>` tag
  (HTML). If you paste text with em dashes elsewhere, the repo's cleanup pass
  will convert them.
- Watch your quotes: apostrophes inside a single-quoted string must be
  escaped as `\'` (e.g. `'the world\'s first...'`).

---

## 5. Rewrite a First & 10 reading

Edit the standalone page: `foundations/first-and-10-foundations-N-*.html`
(or `unit-N/first-and-10-topic-N-N-*.html`). It's a bigger file, but
self-contained. Keep these intact or the validator will complain:

- the module structure (`reading-title-band`, `vocab-strip`, `check-section`,
  `builder-section`, etc.);
- **exactly three** questions, each a `.question-item` with a
  `.q-skill` tag and a `.q-textarea`;
- the `.q-skill` tags must match the topic's skill list in
  `assets/js/behistorical-form-config.js` (this coupling is enforced — change
  one, change the other);
- the `<script>` block at the bottom (form wiring) and the `TOPIC_KEY`.

The reading title, deck, section prose, and the three question texts are all
free to rewrite.

---

## 6. Two things that will bite you if you forget

1. **Units 6 and 9 are build-generated.** Their topic files are produced by
   `scripts/build-unit6.js` and `scripts/build-unit9.js` (with shared content
   in `scripts/lib/f10-content.js`). If you hand-edit the generated files, the
   next build overwrites your change — edit the build source instead, then run
   the build script. Foundations and all other units can be edited directly.

2. **Always run `node scripts/validate.js` before committing.** It verifies
   every data file, image field, First & 10 structure, skill-tag wiring, and
   form URL. If it says "All checks passed," you're safe to push. After adding
   or removing a whole deliverable, also run
   `node scripts/generate-status-manifest.js` to refresh the teacher
   command-center inventory.

---

## Quick index: "I want to change X"

| I want to… | File | Field |
|------------|------|-------|
| Swap a Foundations video | `foundations/foundations-N-*-data.js` | `videos[].youtubeId` + `url` |
| Swap a Foundations lecture image | `foundations/foundations-N-*-data.js` | `lecture[].image.url` |
| Swap the Foundations hero/map/evidence image | `foundations/foundations-N-*-data.js` | `heroImage` / `map.url` / `evidence.items[].url` |
| Reword a Foundations target or bullet | `foundations/foundations-N-*-data.js` | `learningTargets` / `lecture[].bullets` |
| Rewrite a Foundations reading | `foundations/first-and-10-foundations-N-*.html` | body prose + 3 questions |
| Swap a Unit video | `assets/data/lesson-N-N-*.js` | `videos[]` |
| Swap a Unit module image | `assets/data/lesson-N-N-renderer-config.js` | `stableImages` |
| Rewrite a Unit reading | `unit-N/first-and-10-topic-N-N-*.html` | body prose + 3 questions |

_After any change: `node scripts/validate.js`, then commit and push to `main`._
