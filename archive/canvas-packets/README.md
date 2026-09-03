# Canvas Packets, retired

Standalone versions of Foundations 0 and 1 for students who could not reach the
BeHistorical site at all (a school network filter blocking the domain, for
instance). Nothing in them pointed back at the site, so a domain filter did not
affect them.

**Retired 2026-09-03, on Jeff's word that they are no longer necessary.** Moved
here rather than deleted, the same way the old Google Form and the BeCurrent
current-events desk were retired: the history stays, and nothing else in the
repo still points at this folder.

## What was still wrong with it

`build-canvas-packets.js`'s `captureScript()` expected the First & 10 capture
wrapper to contain a `<script>` block. Wrappers stopped carrying one when the
Google Form capture and the reading's coach button were removed on 2026-08-31,
so every run of this generator threw `capture wrapper has no script block`
before writing anything. This was true on a clean checkout of `main` before the
retirement and had nothing to do with any other change; nobody had needed to
regenerate a packet since that wrapper format changed, so nobody hit it.

## What is here

- `canvas/`, the two generated packets (`foundations-0-intro-to-behistorical-canvas.html`,
  `foundations-1-geography-canvas.html`), their PDFs, and the `print/` sources
  used to render those PDFs.
- `build-canvas-packets.js`, the generator (broken, see above).
- `build-canvas-pdfs.sh`, the PDF render step that ran after it.

If this needs reviving, fix `captureScript()` to match the current wrapper
shape (a bare iframe, no script block to extract) before trusting anything it
writes.
