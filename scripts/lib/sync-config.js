'use strict';

/**
 * The one place the student response backup is switched on, and the one place
 * the Firebase project is named.
 *
 * `scripts/build-sync.js` inlines this, with the engine in
 * assets/js/behistorical-sync.js, into both lesson renderers between sentinels.
 * Nothing else reads it. Change it here and rebuild.
 *
 * THE BACKUP IS ON FOR EVERY STUDENT as of 2026-10-07, after a student's answers
 * were backed up from her own Chromebook and restored in a clean browser on a
 * second computer. These are the three switches, and what each one does:
 *
 *   firebase   the web app's public settings from the Firebase console, Project
 *              settings, Your apps. Filled in on 2026-10-05. They identify the
 *              project and are not secrets: access is decided by
 *              firestore/firestore.rules and by the student's own sign-in. If any
 *              of the three is ever null the engine cannot connect whatever else
 *              is set, which is deliberate.
 *   pilot      with `enabled` false, true lets ONE browser opt in by opening any
 *              lesson with ?sync=on (and out again with ?sync=off). It was how a
 *              pretend student tested this against the real project before a
 *              class had it. It is false now, and it should stay false while
 *              `enabled` is true: it has nothing left to do, and a hidden switch
 *              is only worth keeping if the code might need to be turned back
 *              off for one browser. To turn the backup off again for everyone,
 *              set `enabled` false, rebuild, and ship.
 *   enabled    true turns it on for every student. It went true on 2026-10-07.
 *              What is still open is ZCS's formal review of firestore.rules,
 *              which Jeff published himself for testing, and the iPhone sign-in,
 *              which fails on iOS Safari and does not affect a Chromebook.
 *
 * THE TWO NUMBERS THAT ARE THE ANSWER TO THE DISTRICT'S QUESTION
 *
 *   windowMs   a slot is written at most once per window. 30 seconds keeps every
 *              realistic day inside the free plan's 20,000 writes: the sync
 *              projection in behistorical-save-health.js measured 200 writes per
 *              student per lesson at 10 seconds, 76 at 30, 45 at 60.
 *   sessionCap, dayCap
 *              the brake. A page load past sessionCap writes, or a device past
 *              dayCap in one day, stops backing up and says so. Both sit at
 *              roughly five times a heavy real day, so they are reached by a
 *              loop and never by a student.
 */

module.exports = {
  enabled: true,
  pilot: false,

  tenantId: 'zcs',
  courseId: 'apwh',
  // The domains a sign-in is accepted from, checked again after the Google popup.
  // Staff sign in with zcs.k12.in.us and students with stumail.zcs.k12.in.us, which
  // ZCS IT confirmed on 2026-10-05. firestore/firestore.rules checks the same two
  // for real; this only saves a personal account a confusing refusal. There is no
  // `hd` hint on the chooser because it takes one domain and there are two.
  allowedDomains: ['zcs.k12.in.us', 'stumail.zcs.k12.in.us'],

  windowMs: 30000,
  sessionCap: 400,
  dayCap: 600,

  // Pinned, so what students load is what was reviewed. Raise it deliberately.
  sdkVersion: '12.19.0',

  firebase: {
    // From the console's web app registration for the `behistoric` project,
    // 2026-10-05. They identify the project and are not secrets: what protects a
    // student's work is firestore/firestore.rules and the student's own sign-in,
    // never the privacy of these. The registration also produced a measurementId
    // for Google Analytics. It is deliberately NOT here and nothing loads
    // Analytics: the request to the district was for student work to stop
    // disappearing, and analytics over student activity is a separate ask that
    // has not been made.
    apiKey: 'AIzaSyDq4oEqKf_tjZJPmC1iyZ9hbrfz0E07Prs',
    authDomain: 'behistoric.firebaseapp.com',
    projectId: 'behistoric',
    appId: '1:20943260001:web:d639c8b9f833701a62dd20'
  }
};
