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
 * The MagicSchool interception is load-bearing, not a convenience. Most readings
 * render that button with no onclick and rely on the wrapper catching the click
 * by label, so a wrapper without it is a dead button.
 *
 * The Google Form that these wrappers used to prefill is retired. See
 * docs/FORM-CONTRACT.md for why, and do not add it back.
 */

const { DEFAULT_MAGICSCHOOL_URL } = require('./classroom-config');
const MAGICSCHOOL_URL = DEFAULT_MAGICSCHOOL_URL;

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
  <script src="../assets/js/behistorical-classroom.js"></script>
  <script>
    // The reading runs in an iframe. Most readings render their MagicSchool
    // button with no onclick and rely on this wrapper to catch the click by
    // label, so this interception is load-bearing, not a convenience.
    //
    // Anderson and Kelly team-teach off this one shared site, each running his
    // own MagicSchool classroom, so the join link is resolved per student
    // rather than fixed at build time. See assets/js/behistorical-classroom.js.
    const DEFAULT_MAGICSCHOOL_URL = '${MAGICSCHOOL_URL}';
    const MAGICSCHOOL_URL = window.BHClassroom
      ? window.BHClassroom.resolveMagicSchoolUrl(DEFAULT_MAGICSCHOOL_URL)
      : DEFAULT_MAGICSCHOOL_URL;

    function wireFirst10Capture() {
      const frame = document.getElementById('first10-frame');
      try {
        const childWindow = frame.contentWindow;
        const childDocument = frame.contentDocument || childWindow.document;
        if (!childWindow || !childDocument) return;

        childDocument.addEventListener('click', event => {
          const target = event.target && event.target.closest ? event.target.closest('a,button') : null;
          if (!target) return;
          const label = (target.textContent || '').trim().toLowerCase();
          if (label === 'open magicschool' || label === 'open ai coach') {
            event.preventDefault();
            event.stopPropagation();
            childWindow.open(MAGICSCHOOL_URL, '_blank', 'noopener');
          }
        }, true);
      } catch (error) {
        console.warn('Unable to wire First & 10 MagicSchool link:', error);
      }
    }

    document.getElementById('first10-frame').addEventListener('load', wireFirst10Capture);
  </script>
</body>
</html>
`;
}

module.exports = { captureWrapper, MAGICSCHOOL_URL };
