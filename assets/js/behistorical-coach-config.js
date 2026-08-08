/**
 * behistorical-coach-config.js
 *
 * THE ONE PLACE THE CLASSROOM AI COACH LINK IS DEFINED.
 *
 * Every "Open MagicSchool" and "Open AI Coach" button in the course resolves
 * through this file. Before it existed the join code was pasted into 249 files
 * and hardcoded into five generator scripts, so changing classrooms meant a
 * find-and-replace across a quarter of the repository, and any generator run
 * silently pasted the old code back.
 *
 * TO POINT THE COURSE AT A DIFFERENT CLASSROOM, EDIT COACH_URL BELOW.
 * That is the whole procedure. Nothing else in the repository should ever
 * contain a literal joinCode; `scripts/validate.js` fails the build if one
 * reappears.
 *
 * Set COACH_URL to an empty string to run the course with no classroom
 * attached. Every coach button then falls back to the generic MagicSchool
 * front door, which is the correct behaviour for a demo: it shows what the
 * button does without dropping a stranger's students into someone's roster.
 *
 * Loads in a browser (sets window.BH_COACH_URL) and under node (module.exports),
 * because the generator scripts read the same constant the pages do.
 */
(function (root) {
  'use strict';

  /* ---- EDIT THIS LINE, AND ONLY THIS LINE ---- */
  var COACH_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  /* -------------------------------------------- */

  var FALLBACK = 'https://www.magicschool.ai/';
  var RESOLVED = COACH_URL || FALLBACK;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COACH_URL: COACH_URL, FALLBACK: FALLBACK, RESOLVED: RESOLVED };
  }

  if (!root || typeof document === 'undefined') return;

  root.BH_COACH_URL = RESOLVED;
  root.BH_COACH_FALLBACK = FALLBACK;

  /**
   * Markup opts in with `data-bh-coach`. An anchor gets its href set; anything
   * else gets a click handler. The static href left in the markup is the
   * generic front door, so the button still goes somewhere sensible if this
   * script is blocked.
   */
  function wireCoachTargets() {
    var nodes = document.querySelectorAll('[data-bh-coach]');
    for (var i = 0; i < nodes.length; i++) {
      wireOne(nodes[i]);
    }
  }

  function wireOne(el) {
    if (el.getAttribute('data-bh-coach-wired') === '1') return;
    el.setAttribute('data-bh-coach-wired', '1');
    if (el.tagName === 'A') {
      el.setAttribute('href', RESOLVED);
      return;
    }
    el.addEventListener('click', function (event) {
      event.preventDefault();
      window.open(RESOLVED, '_blank', 'noopener');
    });
  }

  root.bhWireCoachTargets = wireCoachTargets;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireCoachTargets);
  } else {
    wireCoachTargets();
  }
})(typeof window !== 'undefined' ? window : null);
