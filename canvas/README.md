# Canvas Packets, Foundations 0 and 1

Standalone versions of the two Foundations lessons for students who cannot reach
the BeHistorical site. Each packet carries the whole lesson, all ten modules, in
a single file. Nothing in them points back at the site, so a block on the
BeHistorical domain does not affect them.

Rebuild with `node scripts/build-canvas-packets.js` (the PDFs are rendered by
`scripts/build-canvas-pdfs.sh` afterward). Never hand-edit the files in this
folder, edit the Foundations data files and rebuild.

## What is here

| File | Use it for |
|---|---|
| `foundations-0-intro-to-behistorical-canvas.html` | Interactive lesson. Students type answers on the page, then copy everything into a Canvas assignment. |
| `foundations-1-geography-canvas.html` | Same, Foundations 1. |
| `foundations-0-intro-to-behistorical-packet.pdf` | Print or attach. Ruled answer lines, name/period/date header. |
| `foundations-1-geography-packet.pdf` | Same, Foundations 1. |
| `print/*-print.html` | Source for the PDFs. Only needed if you want to re-render them. |

## Option A, the interactive HTML (recommended)

1. **Course → Files → Upload** both `*-canvas.html` files.
2. Click the uploaded file once and copy the URL from the address bar.
3. **Pages → + Page**, give it the lesson name, and add a link to the file
   (the rich content editor's file sidebar lists it under Course Files).
4. Publish the page and add it to a module.

Students click through to a page that runs on its own. Their typing autosaves in
the browser, then **Gather All My Work → Copy to Clipboard** puts a labelled,
formatted transcript on the clipboard to paste into a Canvas assignment.

Two things to know:

- **Do not paste the HTML into a Canvas page body.** Canvas strips `<script>`
  from page content, which removes the response boxes' save and copy buttons.
  Uploading the file to Files and linking to it keeps the page intact.
- **Autosave is per-browser, per-device.** It is a scratchpad, not a submission.
  Pair each packet with a Canvas assignment set to "Text Entry" so students have
  somewhere to paste. The Gather output is already labelled by module, so it
  grades cleanly.

## Option B, the PDF

Attach the PDF to a Canvas assignment or announcement. It is a worksheet: the
same ten modules, the full reading, ruled lines under every prompt, and a
name/period/date header. Works on paper or in Canvas's PDF viewer, and students
can answer in the Canvas text box instead of on the lines if you prefer.

## About the pictures

The instructional map is drawn into the file itself and always renders. The
photographs are Wikimedia Commons links: the interactive packet requests the
photograph first and falls back to BeHistorical topic artwork if the network
blocks Commons. The PDF does not print the fallback artwork, it prints the
picture's title, caption, and Commons URL instead, so a student reading on paper
still gets the evidence described and can look it up.

## What is not in the packets

- **BeInTheRoom (module 09)** has no scenario for either Foundations topic yet,
  so both packets show the same "coming soon" placeholder the site shows.
- **The Google Form submit buttons** are gone. These packets route work to a
  Canvas assignment instead, which is where graded work goes anyway.
- **The MagicSchool AI coach** is still linked by URL in module 08 of the
  interactive packet. Remove it if the class join code is not open.
