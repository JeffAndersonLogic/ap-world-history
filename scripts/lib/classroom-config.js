'use strict';

/**
 * Single source of truth for BeHistorical's two-classroom MagicSchool routing.
 *
 * Anderson team-teaches AP World History with Kelly on the same shared site,
 * and each runs his own MagicSchool Socrates classroom. This is the one place
 * that lists which join link belongs to which classroom, so a second one never
 * gets typed by hand somewhere else.
 *
 * scripts/build-classroom-config.js turns this into the browser-side resolver,
 * assets/js/behistorical-classroom.js, and inlines that into the two lesson
 * renderers and the BeInTheRoom v2 room renderer, the same way
 * build-coach-prompt.js inlines the coach prompt builder. Do not hand-edit the
 * generated file or the inlined copies; change this data and rebuild.
 */

// Anderson's own classroom. Every lesson's meta.feedbackToolUrl, the 77 capture
// wrappers, and the two renderers' fallback all already point here, so this is
// what a student sees who never followed a `?classroom=<key>` link.
const DEFAULT_MAGICSCHOOL_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';

// key -> MagicSchool student login URL for every other teacher's classroom.
// A student who visits `?classroom=<key>` once stays on that classroom's join
// link from then on, on that device, until a different key is visited.
const CLASSROOMS = {
  kelly: 'https://student.magicschool.ai/s/login?joinCode=a4fGJw'
};

module.exports = { DEFAULT_MAGICSCHOOL_URL, CLASSROOMS };
