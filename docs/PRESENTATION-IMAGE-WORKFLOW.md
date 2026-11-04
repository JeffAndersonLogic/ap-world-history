# Presentation image intake

Jeff has authorized automatic integration of his uploaded topic images into the corresponding teacher presentations, generated student decks, and the published site. The existing approved topic story remains the instructional source of truth.

## Add photos

Upload images into `assets/images/topics/X-Y/` on a branch and open a pull request authored by `JeffAndersonLogic`. A connected GitHub pull-request automation handles opened and updated requests. Uploading directly to an old branch without opening or updating a pull request does not produce an intake event. Topic 4.8 now has a real directory for uploads.

The automation reads the actual pull-request diff and current main, not just the notification. It ignores unrelated requests, generated output-only changes, and already processed path/blob pairs in `docs/presentation-image-ledger.json`. The ledger begins with this reviewed 4.4–4.8 batch; older assets remain governed by their existing source inventories.

## Review and placement

1. Read repository presentation instructions and current canonical teacher data. Preserve the approved story, CED coverage, reasoning tasks, retelling slide, and pacing.
2. Inspect every new or changed image. Match the pictured subject, not merely its filename. Record classification, blob SHA, topic, slide phase, and reason for use in the ledger. Do not silently omit an unsuitable upload: explain why it is held.
3. Choose the template from the teaching claim. Use cinematic frames for a hook or landing, story scenes for a case sequence, comparisons for claims requiring contrast, and evidence frames when students must distinguish a reconstruction from an actual source.
4. Use `scene-case` when one large reconstructed scene needs explanatory rows and optional small historical source objects. Keep sources readable and credited. Source images use contain fitting.
5. Mark every generated reconstruction `ai:true`, producing the exact house label `Historical Reconstruction - AI Generated`. Keep source reasoning grounded in historical texts and objects. Never insert a generated scene into Evidence Lab.
6. Record limits of the reconstruction in Teacher Intelligence: invented writing, composite architecture, clothing, flags, portraits, or unverified details are not evidence. Preserve full source provenance in notes or the source inventory when shortening a projected credit.
7. Change canonical `teacher/data/topic-X-Y-presentation-assets.js` only for visual overlays. A material change to the approved story follows the repository story-approval process. A justified new shared template belongs in the shared library, has a catalog example, and passes the template contracts.
8. Run `node scripts/build-teaching-os-student-decks.js`; never hand-maintain generated student data.

## One release and verification

Build on current main and import only reviewed image blobs from upload branches. Do not merge stale branch code wholesale. Commit related topic changes as one batch on a working branch, without creating another pull request.

Run the required offline and browser checks, including their existing negative controls, and inspect affected slide layouts. Both `Structure and offline tests` and `Browser contracts` must pass on the exact commit before a non-forced fast-forward of main. If main moves, integrate it and validate the new commit. Verify the actual GitHub Pages build and deployment before reporting the update live.

Close a superseded image pull request only after its exact uploaded blob hashes are present on main. Do not discard unrelated branch work. Delete the release branch only after proving it is contained in main and when available tools support deletion; otherwise report the remaining branch. Never disable protection to ship.

If execution, rendering, access, or CI is unavailable, preserve the work on the branch and report the precise remaining blocker. Do not claim visual inspection or deployment that did not occur. Summarize placements, held images, live links, and any remaining limitation in the task conversation. Do not post external comments or messages.

## Reviewed November 2026 batch

The ledger records twenty inspected reconstructions for 4.4–4.7 and intentional reuse of Barbados for 4.8. The file named Potosi depicts the creation of a religious painting, so it accompanies religious blending in 4.5 rather than silver mining. No 4.8-specific image was available in this batch.
