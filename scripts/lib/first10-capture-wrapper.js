'use strict';

/**
 * The one canonical First & 10 capture wrapper.
 *
 * Three tools write these files: build-unit6.js, build-unit9.js, and
 * remove-google-form-capture.js. They used to each carry their own copy of the
 * markup, which is how the wrappers drifted into four different shapes and how
 * seven Unit 6 wrappers ended up never wiring MagicSchool at all. One template,
 * imported everywhere, so running any of the three converges instead of churning.
 *
 * WHAT THIS WRAPPER IS FOR NOW
 *
 * It embeds the reading, and that is all. It used to also intercept the
 * reading's "Open MagicSchool" click by label, because most readings rendered
 * that button with no onclick of their own. That button is gone: the First & 10
 * stopped being a coached surface on 2026-08-31, so the interception, the join
 * link and the classroom resolver went with it. There is nothing left in a
 * reading to intercept.
 *
 * The wrapper itself stays, because `first10.embedUrl` points at it and the
 * iframe is the delivery pattern. validate.js asserts the coach wiring does not
 * come back on either side.
 *
 * The Google Form that these wrappers used to prefill is retired. See
 * docs/FORM-CONTRACT.md for why, and do not add it back.
 */

function captureWrapper(src, title) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #1A1C1D; overflow: hidden; }
    iframe { width: 100%; height: 100vh; border: 0; display: block; }
  </style>
</head>
<body>
  <iframe id="first10-frame" src="${src}" title="${title}"></iframe>
</body>
</html>
`;
}

module.exports = { captureWrapper };
