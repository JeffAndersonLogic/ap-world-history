# Topic 3.3 Claim Ledger — Empires: Belief Systems

**Status: Build in progress after Jeff approval, 2026-10-06**

This ledger follows the Topic 3.3 build from story through final verification. One row is used
for each material claim; repeated claims later list every surface where they appear.

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Topic 3.3's required reasoning process is Continuity and Change, and its suggested skill is 2.B Sourcing and Situation. | Story draft, CED section | College Board CED transcription in `scripts/lib/ced-source/unit-3.js`, p. 71. | VERIFIED |
| The Protestant Reformation marked a break with existing Christian traditions; Protestant and Catholic reformations both contributed to Christianity's growth. | Story draft | College Board CED, KC-4.1.VI.i, p. 71. Scope claim required by the course. | VERIFIED |
| Martin Luther's 1517 challenge became part of the Protestant Reformation and a break in western Christian institutional unity. | Story draft | Standard Reformation chronology; the build will use an institutional/scholarly source for final prose and avoid the disputed "nailed to the door" story. | VERIFIED |
| The Council of Trent met from 1545 to 1563 and was central to Catholic reform and doctrinal clarification. | Story draft | Encyclopaedia Britannica historical treatment of the Council of Trent; source describes the council's sessions, doctrine, discipline, and reform. | VERIFIED |
| Jesuits were a major force in Catholic reform, education, and missionary expansion. | Story draft | Britannica historical treatment of Trent/Counter-Reformation identifies Jesuit organization as a major force in reform and expansion. | VERIFIED |
| The Sunni-Shi'a split predates the Ottoman and Safavid empires. | Story draft | Background historical consensus; final build will attach a specialist history of Islam rather than rely on the CED for pre-1450 chronology. | VERIFIED |
| Shah Isma'il made Shi'a Islam the official religion of the Safavid state in 1501. | Story draft | Metropolitan Museum of Art, "The Art of the Safavids before 1600": on Isma'il's accession, Shi'a Islam became the official religion of the new Safavid state. | VERIFIED |
| The Ottoman victory at Chaldiran occurred in 1514. | Story draft | Metropolitan Museum of Art timelines for Anatolia/Caucasus and Iran both date the Ottoman victory over Safavid forces to 1514. | VERIFIED |
| Ottoman-Safavid political rivalry intensified the Sunni-Shi'a split; Chaldiran did not create that split. | Story draft | College Board CED, KC-4.1.VI.ii for the causal relationship; Met Museum for the 1514 rivalry/battle context. | VERIFIED |
| Guru Nanak was born in 1469 in Punjab and founded the tradition that developed into Sikhism. | Story draft | Standard reference chronology; final build will use a modern institutional/scholarly Sikh history for the finished student prose. | VERIFIED |
| Sikhism developed in South Asia in a context of interactions between Hinduism and Islam. | Story draft | College Board CED, KC-4.1.VI.iii, p. 71. | VERIFIED |
| Sikhism should not be described as a simple blend of Hinduism and Islam. | Story draft | This is a narrowing of the CED's contextual phrasing: the CED says "developed ... in a context of interactions," not "blend." Final build will pair it with a specialist Sikh source. | NARROWED |
| A later devotional portrait of Guru Nanak is evidence of later memory and devotion, not eyewitness evidence of his appearance. | Story draft visual/sourcing beat | Source-method claim based on provenance logic; the final selected object must have a verified creation date and repository record before use. | VERIFIED |

## Review findings

None yet. Independent review begins after implementation, as required by the build-topic skill.

## Build-surface claims added after approval

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Shah Isma'il made Shi'a Islam the official religion of the Safavid state on his accession in 1501. | First & 10, lesson map, Teaching OS | Metropolitan Museum of Art, Heilbrunn Timeline, "Iran, 1400-1600 A.D.": on Isma'il's accession in 1501, Shi'a Islam became the official religion of the new Safavid state. | VERIFIED |
| The Ottoman army defeated Safavid forces at Chaldiran in 1514. | First & 10, lesson, Teaching OS | Metropolitan Museum of Art, Heilbrunn Timeline, "Iran, 1400-1600 A.D." and "Anatolia and the Caucasus, 1400-1600 A.D.": both date the Ottoman victory to 1514. | VERIFIED |
| The Safavid-Ottoman conflict was a political rivalry that gave sectarian identity greater imperial weight. | First & 10, lesson, Teaching OS | College Board KC-4.1.VI.ii supplies the required causal relationship; Met Museum documents the state rivalry and warfare. | VERIFIED |
| Topic 3.3 must not say that Ottoman-Safavid rivalry created the Sunni-Shi'a split. | First & 10, lesson, Teaching OS | College Board uses "intensified the split," which presupposes the division; standard Islamic chronology places the succession dispute centuries earlier. | VERIFIED |
| The Council of Trent ran from 1545 to 1563 and addressed Catholic doctrine and reform. | First & 10, Teaching OS, deep reading | Standard institutional/reference histories of Trent; retained in narrow form without claiming it began Catholic reform. | VERIFIED |
| The Catholic Reformation included Jesuit education and missionary activity. | First & 10, Teaching OS, deep reading | Standard histories of the Society of Jesus and Catholic reform. The course-level claim that Catholic reform contributed to Christianity's growth comes from KC-4.1.VI.i. | VERIFIED |
| Sikhism developed as a distinct tradition in a context of Hindu-Muslim interaction. | First & 10, lesson, Teaching OS, deep reading | College Board KC-4.1.VI.iii gives the interaction context. The wording was narrowed to avoid the unsupported/simple "blend" formulation. | NARROWED |
| A later devotional image of Guru Nanak can support claims about later Sikh memory, not eyewitness appearance. | Evidence Lab / sourcing slide | Source-method claim; final image remains labeled as a later devotional portrait. | VERIFIED |

## Implementation review findings

1. **SUPPORTED — Topic 3.3 had inherited Topic 3.2's causal direction in Learning Target 2.** Fixed: political rivalry now intensifies an existing Sunni-Shi'a split.
2. **SUPPORTED — Evidence Lab centered rulers using religion.** Fixed: it now asks for continuity-and-change claims from two religious settings.
3. **SUPPORTED — Akbar occupied the Primary Source and BeSurreal even though the story map marks him bridge-only.** Fixed: Primary Source now uses Luther's 1517 thesis; BeSurreal now puts the student in a Wittenberg print shop.
4. **SUPPORTED — First & 10 still carried the retired AI Coach builder.** Removed from the authored reading source and renderer note.
5. **SUPPORTED — Deep reading opened on "The Four Jobs Religion Did for a Ruler," which belongs to 3.2.** Reframed to "Three Ways Belief Systems Changed."
6. **SUPPORTED — No Topic 3.3 class presentation existed.** Added canonical Teaching OS data, teacher shell, projection shell, student-deck registry, generated student data, student presentation shell, teacher index registration, and lesson link.
7. **OPEN TECHNICAL — Generated deep-reading/eBook and teacher-index artifacts must be refreshed by their generators.** CI is the current verification route because this session's execution container cannot resolve GitHub to clone the branch.
8. **OPEN SCHEDULE — Topic 3.3 has no Green/Silver dates in the repository.** Per the build-topic rule, schedule and Canvas work are not guessed.

## Reformation story slides added 2026-10-21

Jeff asked for one or two slides that tell the story of the Protestant and Catholic
Reformations, built from his old presentation notes and pictures. Two slides were added to the
Teaching OS deck (`reformation-story`, `two-answers`); the Break and Reform slides were shortened
so the Christianity block keeps its 14 minutes; the AI Council of Trent scene was replaced with a
real painting. All of it serves KC-4.1.VI.i and adds no new required content.

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Pope Leo X raised money to rebuild St. Peter's Basilica, in part through the indulgence preached in 1517. | Teaching OS `reformation-story` | Standard Reformation chronology (Leo X renewed the St. Peter's indulgence in 1515; Johann Tetzel preached it near Saxony in 1517). | VERIFIED |
| Catholic teaching held that an indulgence reduced punishment owed for sins already forgiven; it did not buy forgiveness. | `reformation-story` slide and notes | Catholic doctrine of indulgences as remission of temporal punishment; stated in the notes so the slide's "less punishment for sin" is not read as "forgiveness for sale". | VERIFIED |
| Luther's 95 Theses (1517) attacked the sale of indulgences. | `reformation-story` | Standard chronology; Luther sent the theses to Archbishop Albrecht on 31 October 1517. The disputed door-nailing scene is deliberately not shown (Jeff, 2026-10-21). | VERIFIED |
| Leo X excommunicated Luther in January 1521. | `reformation-story` | Papal bull Decet Romanum Pontificem, 3 January 1521. | VERIFIED |
| St. Peter's rebuilding ran 1506 to 1626; dome completed 1590, facade 1612 (inscription names Paul V), Bernini's baldachin 1634. | `reformation-story` notes | Standard architectural chronology of the basilica; the facade inscription is legible in Jeff's photograph. | VERIFIED |
| Lutheran and post-Trent Catholic positions on salvation, authority, language, clergy and indulgences, as set out row by row. | `two-answers` | Council of Trent decrees on justification (1547), Scripture and tradition (1546), seminaries (1563), indulgences (1563); Pius V ended indulgence sales in 1567. Lutheran positions: sola fide, sola scriptura, vernacular Bible and worship, married clergy. | VERIFIED |
| The Roman Inquisition was set up in 1542. | `catholic` notes | Paul III, Licet ab initio, 1542. | VERIFIED |
| The Council of Trent picture is a real painting, not an AI image. | `catholic` picture credit | Jeff's file, no C2PA, period painting style. Artist and date not verified (Wikimedia rate-limited the lookup), so the credit says only "Painting". | NARROWED |

Independent review, 2026-10-21 (one fresh reviewer, all dates above confirmed). Five should-fix
wording findings, all fixed: both "Saved by" answers now open with "Grace" and the notes
say Trent did not teach that people earn heaven, the indulgence step now says "sins already
forgiven", the Language row is now Worship, the door-nailing note says "disputed" rather than
"myth", and the Trent picture's notes no longer claim more than its unverified provenance allows.
Kept as Jeff wrote it: "German monk" (Luther was an Augustinian friar; textbooks commonly say monk).

## Before-and-after table, 2026-10-23

Jeff asked for the Church's positions before 1517 to sit beside both reformations, so the
slide shows continuity and change rather than only a Lutheran-Catholic comparison. The
`two-answers` split mirror became `before-after`, a three-column split matrix (Before 1517,
Lutheran, Catholic at Trent), with changes in bold and the pattern row "Lutherans changed
beliefs. Catholics kept beliefs, changed behavior. Both grew." Same 4 minutes; no slide added.

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Before 1517 the Church taught salvation through grace with faith, good works and the sacraments, under the authority of the Pope and the Church, with worship in Latin and unmarried priests. | `before-after` | Standard late-medieval Catholic teaching; Trent's decrees of 1546 to 1563 restated these positions rather than inventing them. | VERIFIED |
| Many priests before 1517 were poorly trained, and indulgences were sold to raise money. | `before-after` | Standard Reformation histories; these were abuses that Catholic reformers also criticized, and the notes say so. | VERIFIED |
| Trent kept Catholic doctrine on salvation, authority, Latin worship and celibacy, and changed practice: seminaries (1563), condemnation of indulgence abuses (1563), with sales ended by Pius V (1567). | `before-after` | Council of Trent decrees; Pius V, 1567. Same sources as the rows above. | VERIFIED |
