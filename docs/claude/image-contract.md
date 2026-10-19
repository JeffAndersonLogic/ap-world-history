# Image contract

Moved word for word from `CLAUDE.md` on 2026-10-17, the second pass of the 2026-10-16 decision to keep the rulebook every session loads short (recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). `CLAUDE.md` keeps a short form of these rules; this file is the full text, with the reasons and the incidents behind them, and it is as binding as it was there. A comment elsewhere that says "see <section> in CLAUDE.md" means this file when the section is listed here.

## Image Contract

Every picture a student can see must be on-topic and must be impossible to break:

- **Local artwork is the floor.** `assets/images/module-art/` holds generated
  artwork for every module card and every lecture, evidence, and map slot. Both
  renderers wire `onerror` to it, so a dead remote URL degrades to on-topic local
  art instead of an empty frame.
- **An empty `url` is a valid choice.** Leave `url` and `sourceUrl` empty and the
  renderer draws that slot's local artwork. Prefer this to a picture that does not
  match its caption.
- **Map & Geography needs an actual map.** Most map slots point at a generated
  local map in `assets/images/instructional-maps/`. Never put a portrait, a
  painting, a photograph, or a blank world outline in a map slot.
- **Hub topic cards carry two `<img>` layers**, local art underneath and the
  photograph on top with `onerror="this.remove()"`:

  ```html
  <a class="unit-card" href="...">
    <img class="card-art" src="../assets/images/module-art/unit-5/topic-5-3/map.svg" alt="" aria-hidden="true">
    <img class="card-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/..." alt="" aria-hidden="true" onerror="this.remove()">
  ```

  Do **not** put card artwork in a CSS custom property. A relative `url()` inside
  one resolves against the stylesheet's folder, not the page, so local paths
  silently 404. `validate.js` enforces the `<img>` structure.
- **Generated SVGs must carry `width` and `height`.** A `viewBox` alone leaves the
  intrinsic size undefined, and an `<img>` holding one gets stretched by its
  container until the picture is letterboxed off-screen.
- **Never commit a placeholder image file.** `validate.js` checks magic bytes;
  a text file named `.jpg` fails the build.
- **A remote image filename carries exactly one extension, at the end.**
  `Khmer_Empire_1203_Map_%28cropped%29.png).png` names no file on Commons, and
  Topic 1.3 shipped it to students on 2026-09-01 with every structural check
  green. A sweep percent-encoding parentheses across 72 Commons names had
  substituted each encoded name in for the *unencoded prefix*, leaving the tail
  of the old name attached; six pictures across four units went that way in one
  commit. `validate.js` now fails on a filename whose first image extension is
  not the end of the name, which needs no network because such a name is
  malformed on its face. **This is the offline half of the contract and it does
  not replace `check-image-urls.js`**, which is the only thing that knows
  whether a well-formed name actually resolves, and which is nightly on purpose
  so a third party's outage never fails a commit. That split is why a teacher
  found this before a machine did.

