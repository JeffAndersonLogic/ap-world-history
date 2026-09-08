/* =========================================================
   THE TEN MODULES OF A LESSON, AS A LIST

   Every lesson page shows exactly ten module cards in a fixed
   order. That list is built in the browser, inside each
   renderer's defaultModules(), because the cards need render
   functions and artwork. This file is the same list without any
   of that: numbers and names only, for anything outside the page
   that has to say what a student is doing today.

   The classroom announcements board is the first caller. The
   Canvas assignment for a topic already lists these; the board
   is the second place a student can read them, on the wall,
   without opening Canvas.

   WHY THIS IS A MIRROR AND NOT THE SOURCE. The renderer builds
   real cards and this builds text, so the names live in two
   places. That is exactly the shape of drift this repository
   worries about, so validate.js asserts every name below still
   appears in the renderer that draws it. Rename a module card
   and the push fails here rather than the board quietly naming
   a module that no longer exists.

   A topic that declares its own lesson.modules (Topics 7.8, 7.9
   and 8.9 do) is read from that list instead, so a substituted
   module such as the Causes & Consequences Matrix is named
   correctly with no special case here.
   ========================================================= */

'use strict';

/* The ten-module standard, in order. See CLAUDE.md. */
const UNIT_MODULES = [
  'Map & Geography Check',
  'First & 10 Reading',
  'Content Delivery',
  'BeSurreal',
  'AP Skill Builder',
  'Checkpoint 1',
  'Evidence Lab',
  'Primary Source',
  'BeInTheRoom',
  'Checkpoint 2'
];

/* Foundations differs at module 08 only: a unit topic reads a primary
   source there, a Foundations topic works reasoning prompts. */
const FOUNDATIONS_MODULES = UNIT_MODULES.slice();
FOUNDATIONS_MODULES[7] = 'Reasoning Prompts';

function pad(n) {
  return String(n).padStart(2, '0');
}

function numbered(titles) {
  return titles.map((title, i) => ({ number: pad(i + 1), title }));
}

/* A topic that declares its own module list wins, the same way it does on
   the page. The label already reads 'Module 09', so the number comes from
   there rather than from the position. */
function declared(modules) {
  const out = [];
  for (const m of modules || []) {
    if (!m || !m.title) continue;
    const found = String(m.label || '').match(/(\d+)/);
    out.push({ number: found ? pad(found[1]) : pad(out.length + 1), title: String(m.title) });
  }
  return out.length ? out : null;
}

/**
 * The modules a unit topic shows, from its BEHISTORICAL_LESSON data with any
 * renderer config already applied.
 *
 * Module 09 is BeInTheRoom only when the topic has a scenario to link, which
 * is the renderer's own rule: with no beInTheRoom field at all, Checkpoint 2
 * takes the 09 slot and the lesson runs nine modules.
 */
function unitModules(lesson) {
  const own = declared(lesson && lesson.modules);
  if (own) return own;

  /* The renderer draws the BeInTheRoom card only when there is a scenario to
     link, and numbers Checkpoint 2 from whether the topic has a beInTheRoom
     field at all. Those are two different tests in the renderer and they are
     kept as two here: a topic carrying the field with no url really does show
     eight cards and then a Module 10, and a list that quietly renumbered it to
     09 would stop matching the cards on the student's screen. */
  const room = lesson && lesson.beInTheRoom;
  const out = [];
  UNIT_MODULES.forEach((title, i) => {
    if (title === 'BeInTheRoom') {
      if (room && room.url) out.push({ number: pad(9), title });
      return;
    }
    if (title === 'Checkpoint 2') {
      out.push({ number: pad(room ? 10 : 9), title });
      return;
    }
    out.push({ number: pad(i + 1), title });
  });
  return out;
}

/**
 * The modules a Foundations topic shows. Always ten: a Foundations topic with
 * no scenario still draws module 09 as a coming-soon card, so a student still
 * has ten cards in front of them.
 */
function foundationsModules() {
  return numbered(FOUNDATIONS_MODULES);
}

module.exports = { UNIT_MODULES, FOUNDATIONS_MODULES, unitModules, foundationsModules };
