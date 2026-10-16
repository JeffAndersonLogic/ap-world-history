# Deep Readings and the eBook

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.

## Deep Readings

A deep reading is the **optional push-further layer** under Content Delivery, for
a topic whose modules assume more background than its First & 10 has room to
carry. Foundations 3 is the case that produced it: 716 words of body text across
Persia, Han China, Greece and Rome, about 179 each, against success criteria that
ask a student to name a tool of rule and explain **the mechanism by which it
worked**. The survey named the tools. A student cannot infer a mechanism from a
name.

Generated, like everything else. Content lives in
`scripts/lib/deep-reading-content/<slug>.js`, `scripts/lib/deep-reading-page.js`
renders it, and `scripts/build-deep-readings.js` writes the page beside the
lesson it belongs to. Content modules are **discovered by reading the directory**,
not listed, so adding one is a new content file plus a `deepReading` block in
that topic's data file. Nothing else.

**A deep reading is deliberately not a First & 10**, and the differences are the
point:

- **No questions, so no capture block, no storage key, and none of the
  four-files-must-agree failure modes.** Nothing is submitted from a deep
  reading. The ten modules remain the only path by which student writing reaches
  Canvas.
- **No coach bridge.** Socrates is told about exactly two assignments,
  Checkpoint 2 and BeInTheRoom. A third surface that grew a coach button
  silently would mean the coach meets work it was told does not exist.
- **No `<script>` at all.** A page with no script cannot ship a SyntaxError that
  discards its own behaviour, which is the failure `readings-parse.test.js`
  exists to catch on the 77.

**The filename prefix is load-bearing.** `validate.js` globs Foundations lesson
shells with `/^foundations-\d+.*\.html$/` and Foundations readings with
`/^first-and-10-foundations.*\.html$/`. A deep reading must miss both, or it gets
checked against a contract it was never meant to satisfy. Hence
`deep-reading-<slug>.html`. Re-read those two globs before renaming these.

**Both renderers inject the card and hide the feature entirely when absent**, the
same way the video block does, so the topics without one show no empty frame. It
sits *after* the concept cards on purpose: the cards are the path everyone walks
and this is depth on top of them. A reading this long placed above the cards reads
as required work rather than as an offer, which is why it sits below them and why
the card says optional twice. `renderDeepReading()` in the unit renderer mirrors
the Foundations one, guard on its own id included, or a re-render doubles the
card.

**A unit topic keeps its `deepReading` block somewhere else, and the check has to
know.** A Foundations topic's data file sits beside its shell as
`foundations-3-states-power-data.js`; a unit topic's sits in `assets/data/` under
the shell's own name, because the shell loads it with a `<script src>`. Resolving
a unit topic the Foundations way looks for `unit-1/lesson-1-1-song-china-data.js`,
which no unit topic has ever had, so every unit deep reading would fail
reachability for a file that was never supposed to exist.

**Two checks, because each failure is silent.** `--check` in the offline suite
proves the page still matches its content module. `validate.js` proves the page
is **reachable**: a generated reading that no `deepReading` block points at sits
on disk, gets served by Pages, and can only be found by typing the filename,
with every other structural check green. It checks both directions, because a
data file pointing at a missing page is a dead card and a page no content module
produces is a hand-authored reading, which is the thing the content model exists
to prevent. Both directions scan `foundations/` **and** every `unit-N/`, through
one `standaloneDeepReadings()` helper rather than a glob repeated per call site:
a glob naming only `foundations/` stops covering the moment a volume outside
Foundations is written, and it stops covering silently.

## The eBook

Ten volumes exist and the course is covered end to end: `ebook/foundations.html`,
five chapters; `ebook/unit-1.html` and `ebook/unit-2.html`, seven each, one per
topic; `ebook/unit-3.html`, four, because Unit 3 has four topics;
`ebook/unit-4.html`, eight; `ebook/unit-5.html`, ten; `ebook/unit-6.html`,
eight; `ebook/unit-7.html`, `ebook/unit-8.html` and `ebook/unit-9.html`, nine
each. A volume carries one chapter per topic, so
its chapter count is a fact about the unit rather than a target, and chapter
length is set so that the **volume** comes out comparable rather than the
chapter: Unit 3's four chapters run six sections each, Unit 5's ten run four, and
Unit 6's eight run four or five.

**A unit whose lessons are generated keeps its `deepReading` block in the
generator.** Unit 6 Topics 6.2 to 6.8 have their data files written by
`scripts/build-unit6.js`, so the card is declared in the `DEEP_READINGS` map at
the top of that script and the page's filename is derived from the topic's own id
and slug, for the same reason the eBook derives its lesson links. Editing
`assets/data/lesson-6-4-*.js` by hand would survive exactly until the next
`npm run build:unit6`. Topic 6.1 is the hand-authored template the others are
built from, so its block does live in its data file.

**A two-digit topic number works and was not free.** Unit 5 has a Topic 5.10,
the course's first, and `chapterNumber()` and `tocLabel()` in `ebook-page.js`
both match `^topic-(\d+)-(\d+)`, so it renders as "5.10" rather than "5.1".
Anything new that parses a slug must use `\d+` for the topic segment; `\d`
silently truncates and the page still builds.

The eBook is a **second surface on the chapter modules, not a second copy of the
content.** Every chapter in a volume is the same
`scripts/lib/deep-reading-content/<slug>.js` that produces that topic's
standalone deep reading, so the two cannot disagree. `scripts/lib/ebook-page.js`
renders the cover and contents and then calls `renderChapterBody` from the
deep-reading renderer rather than reimplementing it, for the same reason
`canvas-parse-core.js` is inlined into the Skills Lens instead of copied: two
implementations eventually give two different answers and nothing tells you
which one a student read.

It exists alongside the per-topic pages because they answer different questions.
The deep reading on the Foundations 1 lesson serves the student doing Foundations
1 tonight. The eBook serves the student revising in May, the student who missed
three weeks, and the case manager who wants to see what is being taught.

**A volume is named the way the front door names its unit.** `ebook/unit-1.html`
is "The Global Tapestry", not "The Unit 1 eBook", and the library card carries
"UNIT 01" above it exactly as the unit card on `index.html` does. The volume's
`label` and `titleHtml` are the two fields that carry this, and they must match
the unit card in `index.html`; a student who has just clicked away from that
card should not have to work out that Networks of Exchange is Unit 2.

**The brand typefaces are loaded by the page templates, not by the stylesheet.**
`behistorical-deep-reading.css` has always declared Cinzel, Libre Baskerville and
Montserrat in `--font-display`, `--font-body` and `--font-ui`, and for the first
four volumes nothing loaded them, so every eBook page and every standalone deep
reading quietly rendered in the Georgia and Arial fallbacks while the rest of the
site rendered in the brand faces. Tokens are not a request. `FONT_LINKS` in
`scripts/lib/deep-reading-page.js` is the one copy, re-exported to
`ebook-page.js`, and its href is byte-identical to the one the 77 First & 10
readings use so that a student moving between them reuses the cache. It carries
`display=swap`, so slow fonts never mean invisible text, and the CSS fallbacks
stay, so a blocked or offline load costs the brand and nothing else.

**Volumes are declared, chapters are ordered by hand.** A volume is an editorial
decision about what belongs together and in what order, which no directory
listing knows, so `VOLUMES` in `scripts/build-ebook.js` lists them. Its
`contents` array is one ordered list in **teaching order**, mixing written
chapters (`{ slug }`) with topics still to come (`{ pending }`). Unwritten
topics are listed **in place** rather than collected at the end, because a
student looking for Foundations 2 looks between 1 and 3, and finding it there
marked "chapter not written yet" answers the question while finding nothing
does not.

**The library's note about unwritten chapters is derived, not declared.**
`LIBRARY.note` explains those pending rows, so `renderLibrary` prints it only
while some volume still has one, and every volume is complete as of 2026-08-16.
Deleting the text instead would have worked
today and left nothing to explain the first pending row that reappears; a note
that outlives its gaps is the worse half of the same failure, because a library
warning a student that a topic might be missing when none is teaches them to
distrust the contents. Do not restore it unconditionally.

**Chapters are numbered by their topic, not their position.** Sequential
numbering would make the Foundations 3 chapter "Chapter 02" while Foundations 2
is unwritten, and would silently renumber every chapter the moment a gap is
filled. Unit chapters number as `1.4` and label as `Topic 1.4`, both derived from
the slug, which is why a unit content module's slug must start `topic-<unit>-`:
`build-deep-readings.js` places the page from it, and `ebook-page.js` derives the
chapter number, the contents label and the link back to the lesson from it too.

**A volume's footer names the volume and links its own hub**, derived from the
first written chapter's slug rather than declared, for the same reason the lesson
link is derived: a declared value is a second place to state where a topic lives,
and the two can then disagree. The Foundations volume came out of that change
byte for byte unchanged, which is the check worth running whenever a shared
template gains a parameter.

**`build-ebook.js` exports `VOLUMES` before it runs, and guards the run with
`if (require.main !== module) return;`.** `validate.js` requires the file purely
to read that list. Without the guard the require executes the builder, which
means the validator writes files as a side effect of validating, and a check
that silently rebuilds the thing it is checking can never fail. That bug existed
for about ten minutes and is exactly the kind this repo is built to refuse.

**`ebook/index.html` is the library, and it is the one stable eBook URL.** The
front door links the library, never a volume file, because the library keeps
working as volumes are added while a direct link would mean editing `index.html`
and re-pasting the Canvas link every time one lands. It is generated from the
same `VOLUMES` list, so it cannot list a volume that does not exist or miss one
that does.

### eBook accessibility

The eBook is the surface a student reads at length, on a phone, on a projector,
and in May when they have three weeks to catch up. It is held to WCAG 2.1 AA,
and the parts of that which can be checked by machine are.

**Antique Gold is a dark-surface colour.** It is 7.3:1 on steel and 2.1:1 on
paper, which is under the 3:1 that even large text is allowed. It keeps the
cover, the mastheads, the card rules and the chapter opener's border; it is not
used for text on paper, and `.dr-usethis > b` uses it rather than `--accent`
because three of the four empire accents are paper colours that read at 1.9:1 to
3.7:1 on that panel's dark ground. On light surfaces the equivalent is
`--oxidized`, at 7.9:1. **Do not "restore" gold on a cream row.** It looks more
on brand and is the defect this section exists to describe.

**Focus is a ring, not a tint.** `behistorical-deep-reading.css` defines one
`:focus-visible` treatment for every interactive element, and nothing may go
back to `outline:none` plus a background change: a 3% shift between two creams
is invisible on a projector and absent entirely in forced-colours mode. Hover
tints are unaffected and should stay.

**Both page types render `<main id="main-content">` with the footer outside it,
and a skip link as the literal first element in `<body>`.** Both come from
`scripts/lib/ebook-page.js`, which holds the skip link in one constant so the
two templates cannot point at different ids.

**Grid minimums are `minmax(min(100%,N),1fr)`, never `minmax(N,1fr)`.** A bare
floor is a width the track cannot go under, so at the 320px viewport reflow is
tested at, a 320px card inside a wrap that has already spent 32px on padding
scrolls the whole page sideways.

**Two checks, and they cover different failures.** `validate.js` proves the
landmarks and the skip link are in the generated HTML, offline, in the push
gate. `scripts/test/ebook-a11y.test.js` proves the things only a rendered page
knows: that the skip link is really what Tab reaches first, that the ring really
paints, that nothing overflows 320px, and that no text is under its contrast
threshold. The contrast sweep is the one that earns its runtime, because the
same colour is correct on the cover and wrong on the contents rows and only a
browser can tell those two uses apart.

**The a11y test measures reflow twice, and the second pass is allowed to skip.**
Its main pass blocks every request off the fixture server, which keeps it
hermetic and means it measures the *fallback* fonts. Cinzel is about 30% wider
than Georgia at the same size and reflow is a width test, so that pass says
nothing about the page a student actually sees. A second pass allows the two
font hosts and repeats the 320px and 200% measurements, and **skips**, visibly,
when the fonts do not arrive, because a third party's outage must never fail a
commit, which is the same reason `check-image-urls.js` is nightly.

**A skip is not a pass, and the environment that skips is the one you develop
in.** The Unit 6 cover shipped a 75px horizontal overflow at 320px because of
this. Cloud dev sandboxes generally cannot reach the font hosts from inside
Chromium, so the second pass skips there and a local run reports a confident
green having never measured the page a student sees; CI can reach them, and
failed. **Treat a SKIP on that pass as "not tested", never as "fine", and if you
have added or renamed a volume title, prove the reflow before pushing.** The
cheap way needs no browser network access: fetch the woff2 once with `curl`,
which does work through most proxies, register it with `new FontFace(...)` from
the bytes, block every request off the fixture server, and measure. That
reproduced 395 vs 320 exactly, which is how the fix was confirmed rather than
assumed. The general form of the trap is worth remembering on its own: a check
allowed to skip will skip in precisely the environment where nobody is watching
for it.

**A long word in a display face is the recurring shape of this bug.**
`.eb-cover h1` clamps to a 2.3rem floor, and Cinzel sets "Industrialization"
379px wide against a 320px viewport. `overflow-wrap:break-word` is the floor
that stops it, and it is a no-op until a word cannot fit on a line of its own,
so the shorter cover titles measure identically with and without it. Unit 8's
"Decolonization" is the next one near the cliff.

**`document.fonts.check()` does not tell you a webfont loaded.** It answers "can
this string be rendered in that family", and a browser with no network answers
yes, because it can render it in a fallback. Written that way, the pass above
reported a confident green while measuring Georgia. The honest signal is
metrics: render a string in the webfont stack and in the fallback and compare
widths, since identical widths mean the face never applied.

**Both browser tests read their page list from `VOLUMES`, never a typed list.**
`ebook-a11y.test.js` runs every assertion against the library and every volume.
`ebook-listen.test.js` drives Foundations in depth, because its labels and
paragraph counts are Foundations content, and then sweeps every other volume
structurally: controls built in every marked section, no mount left empty, and
starting a second section cancelling the first. A typed list would go on
reporting the same confident green while covering less of the eBook each time a
volume landed, which is the failure this repo cares about more than an outright
red.

**Two checks, same shape as the deep readings.** `--check` in the offline suite
proves each volume and the library still match the chapter modules.
`validate.js` proves each volume exists, that every slug it names has a content
module, that the library lists every volume, and that **`index.html` links the
library**, because the library carries reachability for everything behind it: if
the front door stops linking it, every volume goes unreachable at once while each
volume file still sits happily on disk.

### Listen to this section

Every reading section in an eBook volume carries a compact **Listen to this
section** control: Listen, Pause and Resume on one button, Stop, and a speed
selector offering 0.75x, 1x, 1.25x and 1.5x. It is built by
`assets/js/behistorical-listen.js` and it is the only implementation.

**It is an instructional enhancement, not an accessibility feature, and it is
not a substitute for one.** A student using a screen reader already has a better
tool for hearing this page than this is. What this is for is the student who
reads slowly, the student who holds more when the words arrive through two
channels at once, and the student catching up on three weeks in May. The eBook's
WCAG 2.1 AA contract in the section above is a separate layer, and nothing here
may weaken it: real buttons, real labels, one shared focus ring, no ARIA where
native HTML already says the thing, and nothing that starts speaking on its own.

**The HTML stays the source of truth.** Narration reads the rendered DOM of the
section in front of the student, so a revised chapter is a revised narration on
the next page load, with nothing to regenerate and nothing that can fall behind.

**That is why there are no MP3 files and no speech API.** An audio file is a
second copy of the content, and the moment a paragraph is edited nothing in this
repo can tell you which copy a student heard. It is the same failure the content
model exists to refuse, and it would be worse here, because a stale recording
sounds exactly as authoritative as a current one. A paid TTS service adds the
second failure on top of the first: it would mean the reading, and eventually a
student's page, leaving the device. `window.speechSynthesis` is the browser's
own engine and it costs nothing. The single stored value is the playback rate, a
number, under `behistorical-listen-rate`.

**This repository has no speech backend, which is not the same as "nothing
leaves the device", and the difference is worth stating precisely.** The voice
ranking below deliberately prefers a network voice, Chrome's Google voices and
Edge's Natural ones, because they are the difference between narration a student
uses and narration a student turns off after one paragraph. A network voice means
the browser sends the text it is speaking to that vendor's own service. What is
sent is **the published chapter**, which is already public on GitHub Pages, and
never a student's writing: no student response is on an eBook page, the pages
carry no capture block, and narration reads only the rendered chapter DOM. So the
guarantee to make in writing is the narrow one: **no student work is transmitted,
and this repository sends nothing anywhere itself.** Do not restore "nothing is
sent anywhere", which is what this said until 2026-09-14 and is not true of a
network voice. If on-device-only ever becomes the requirement, it is a one-line
change to the scoring in `assets/js/behistorical-listen.js` and a real cost in
voice quality, so make it a decision rather than a cleanup.

**One section speaks at a time, page-wide.** Starting anywhere cancels
everywhere, playback stops on `pagehide`, and there is never more than one
utterance in flight. Two sections talking over each other is not a degraded
experience, it is noise.

**The controls are generated, never hand-written.** Two things come from
`scripts/lib/deep-reading-page.js`: `data-listenable="true"` with a
`data-listen-label` on the section, and an empty `data-listen-mount` div under
its heading. The shared module finds those and builds the buttons. Forty-three
sections wired by hand would be forty-three places for the next change to miss
one, which is exactly how the First & 10 capture block went missing twice.

**So a future section inherits the feature by existing.** A new chapter module
in `deep-reading-content/`, or a new volume in `build-ebook.js`, is narratable
the moment it is built. There is nothing to add and nothing to remember. A new
*component* inside a section is narrated too, because the extractor walks
structure rather than a list of known class names.

**Narrated:** the section heading, its dates line, its thesis, every explanatory
paragraph, subsection headings, the How we know and Common mistake to avoid
callouts, and the closing comparison cards. **"Use this in your answer" and
"Terms to use precisely" are both narrated**, deliberately: they are the parts a
student is most likely to be revising from, and the definition-list markup reads
naturally out loud because the walk puts each label and each body on its own
utterance, so it comes out as "Terms to use precisely. Domestication. The genetic
change in..." rather than as markup.

**Not narrated:** the site and jump navigation, the contents list, Back to
contents, Go to the lesson, the footer, any button or select label, the listen
controls and their own status text, and the section number watermark, which is a
navigational label rather than content. The **How to Use This** panel is also
excluded: it is instructions for reading the chapter rather than the chapter, and
it stays on the page in text, where scanning it is quicker than hearing it.
Anything hidden, collapsed or `aria-hidden` is skipped, and a future exclusion is
one `data-no-narrate` attribute in the renderer.

**Volumes only.** `ebook/index.html` is a shelf, not a reading, so it marks no
sections and loads no narration module. `validate.js` asserts both directions.

**The standalone deep readings do not have this, and that is deliberate.** They
ship no `<script>` at all, in writing, because a page with no script cannot ship
a SyntaxError that silently discards its own behaviour. The `listen` option
defaults to false and only the eBook turns it on, so
`foundations/deep-reading-*.html` came out of this change byte for byte
unchanged. `validate.js` fails if any standalone deep reading, in `foundations/`
or in a `unit-N/`, grows a `<script>` tag.

**Two checks, because the failures are silent in opposite directions.**
`validate.js` proves offline that the sections are marked, that the marked count
equals what the chapter modules contain, that every one has its mount, and that
exactly one shared module is loaded: a volume that marks its sections and does
not load the module renders perfectly and does nothing, and so does a volume that
loads the module and stops marking its sections.
`scripts/test/ebook-listen.test.js` proves in Chromium what only a browser knows,
against a stubbed engine: that Listen speaks the right section, that starting one
cancels another, that pause, resume and stop move the real state, that speed
persists and rejects a value that is not one of the four, and that a browser with
no speech synthesis gets no controls rather than dead ones.

#### What the browser does, and what it does not

Found while building this, and worth knowing before changing any of it:

- **Chromium stops part way through a long utterance.** The common workaround is
  a `pause()`/`resume()` heartbeat on a timer, which is not used here because it
  fights the real Pause button for the same state. Instead the section is fed to
  the engine one paragraph at a time, and a paragraph over about 220 characters
  is split further at its sentence boundaries. Playback was already sequential,
  so this costs nothing and the bug has no room to appear.
- **A `speak()` in the same task as a `cancel()` is sometimes swallowed**, which
  showed up as a Listen button that did nothing on the second section a student
  tried. The first utterance of a section is deferred by one turn.
- **`cancel()` fires the current utterance's `end` handler**, which at the
  handler is indistinguishable from a natural finish, and in some builds also
  fires `error` with reason `interrupted` or `canceled`. Without a guard,
  cancelling section A mid-paragraph advances A and speaks it over section B.
  Every callback carries a session token and does nothing once the session has
  moved on. Do not remove it.
- **The browser's default voice is often the worst one installed**, and that is
  the single biggest thing separating narration a student will use from
  narration a student turns off after one paragraph. So a voice is scored and
  chosen, never named: every candidate in the document's language is ranked,
  the winner is used, and if there is no candidate the utterance is left with
  no voice, which is the plain browser default. Naming one specific voice would
  mean silence for any student whose device does not have it. The ranking
  prefers a network voice (Chrome's Google voices and Edge's Natural ones,
  which are the good ones on those browsers and are not what either picks by
  default), then a premium or enhanced tier over a compact one, and it drops
  Apple's novelty voices outright. **"Bad News" and "Zarvox" are real entries in
  `getVoices()`**, and one of them reading a chapter on the Neolithic was a live
  possibility before this.
- **A network voice that fails is retried once on a local voice**, speaking the
  same words, and network voices are then refused for the rest of the session.
  A classroom is exactly where the wifi drops, and the section must not report
  itself broken when it does. Excluded outright on the retry rather than marked
  down, because "Google US English" still earns four points from its name alone
  and would win the retry and fail again identically.

##### iOS cannot be fixed from a web page

**Every browser on iOS is WebKit, so Chrome on an iPhone is Safari's speech
engine.** WebKit deliberately withholds the downloadable voices from the web.
Apple's own engineer, on their developer forum, thread 723503: *"it is expected
that with Web Speech APIs only the pre-installed voices are available.
Optionally downloadable voices are not available."*

A student can download an excellent voice in Settings, Accessibility, Spoken
Content, Voices, and a web page still cannot use it. iOS is unreliable about the
voices it does list, too: asking for Alex returns Samantha. What a page gets on
an iPhone is the pre-installed compact voice, and no ranking, no rate change and
no amount of code here improves it.

**The route that does work on that device is outside the page.** iOS Speak
Screen, and Safari's Listen to Page, both use the downloaded voices and both
work on the eBook, because the eBook is ordinary semantic HTML with a real
`<main>` landmark. If iPhone listening matters for a student, that is the answer
to give them, not this feature. The other way to fix it would be a paid TTS
service, which means the reading leaving the device, and that is refused for the
reasons at the top of this section.

macOS Safari has the same withholding, which is why the novelty voices matter
there: they are exposed while the good ones are not.
- **Changing the speed applies from the next chunk**, not mid-sentence.
  Restarting the current utterance would throw away the paragraph the student
  was in the middle of, which is worse than one sentence at the old speed.
- **`pause()` is not reliable everywhere.** On some Android and ChromeOS builds,
  and with remote voices, it behaves like a stop. The UI reports what it asked
  for, which is the best any page can do.
- **Headless Chromium exposes the whole API and has no voices**, so a test that
  waited on real audio would hang in CI and sound different on every laptop. The
  browser test stubs the engine, and the honest limit of that is written at the
  top of the file: it proves this code is correct, not that Chrome is.
