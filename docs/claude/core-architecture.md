# Core architecture

Moved word for word from `CLAUDE.md` on 2026-10-17, the second pass of the 2026-10-16 decision to keep the rulebook every session loads short (recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). `CLAUDE.md` keeps a short form of these rules; this file is the full text, with the reasons and the incidents behind them, and it is as binding as it was there. A comment elsewhere that says "see <section> in CLAUDE.md" means this file when the section is listed here.

## Core Architecture

> **The Google Form is retired.** It was removed on 2026-08-07 along with
> `behistorical-form-config.js`, every Submit to Form button, and the Build Your
> Google Form Response builder. `docs/FORM-CONTRACT.md` records why, and
> `validate.js` fails the build if any of it reappears. Do not wire it back up.
> **MagicSchool is unaffected**; it was never a capture channel and every AI
> Coach prompt builder and Open MagicSchool button stays.

> **The modals manage focus.** `bhOpenModal`/`bhCloseModal` in both renderers
> move focus in, trap Tab, and return it to the launcher; the stack exists
> because the lightbox opens from inside the module modal. Adding a `.show` class
> without calling them locks a screen-reader user out of the lesson content. The
> two `scripts/test/modal-focus.*.js` browser tests are the check.
>
> **Every enlargeable image is a button.** Map and Evidence Lab images carry
> `role="button" tabindex="0"`, an `aria-label` naming the picture, and an
> Enter/Space handler. An `onclick` on its own is mouse-only, which is how the
> lightbox stayed unreachable by keyboard on every topic.
>
> **`bhOpenModal` is idempotent per element, and the scroll lock lifts on "no
> visible dialog", not "empty stack".** Both matter. The lecture arrows swap the
> card inside the open dialog by calling the open function again, so a renderer
> that pushed an entry per call left a five-card deck with five entries; one Close
> popped one, the stack stayed non-empty, and `document.body.style.overflow` was
> never restored. The dialog was gone, the page looked normal, and the student
> could not scroll the lesson until they reloaded. **Every structural check stayed
> green through all of it**, because nothing offline can see a scroll lock. Do not
> reintroduce an unconditional `BHModalStack.push`.

