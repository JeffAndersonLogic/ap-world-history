/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, LESSON 1 RENDERER CONFIG
   File: assets/data/ce-lesson-01-renderer-config.js

   Mirrors assets/data/lesson-1-1-renderer-config.js in the AP World repo: the
   thin layer between the content file and the renderer. Content lives in
   ce-lesson-01-locker-ban.js. Everything that changes per deployment rather
   than per curriculum lives here.

   THIS IS THE FILE A TEACHER EDITS between semesters. Clip URLs, the capture
   event key, and any image overrides. Nothing here changes what the lesson
   says.
   ========================================================================== */
(() => {
  const lesson = window.CE_LESSON;
  if (!lesson) return;

  /* ── Capture event key ─────────────────────────────────────────────────── */
  // Passed to CE_FORM.prefill() as the Event field on all seven capture points.
  // Unknown keys pass through as their own label, so this works before the
  // Current Events form exists.
  lesson.captureEvent = 'lesson-01';

  /* ── Video clips ───────────────────────────────────────────────────────── */
  // Add `url` to either entry and the teacher-action block on that card is
  // replaced by a working Open clip button. Leave it off and the card stays
  // visibly marked as unresolved rather than silently shipping an empty frame.
  lesson.lecture.videos = lesson.lecture.videos.map((v, i) => ({
    ...v,
    url: [
      '',   // Step 1 launch clip, local footage. Record or source, then paste.
      ''    // The 2007 keynote, three-products opening.
    ][i] || ''
  }));

  /* ── Lecture card imagery ──────────────────────────────────────────────── */
  // Optional. A segment with no `image` renders text-only in the enlarged view,
  // which is the right default here: the six links are argument, not artifact.
  // Add { title, caption, url } to any segment to give it a projection visual.

  /* ── Coach URL ─────────────────────────────────────────────────────────── */
  // Falls back to CE_FORM.coachURL, which is the school MagicSchool classroom.
  // Override only if this lesson gets its own coach room.
  // lesson.meta.coachUrl = 'https://student.magicschool.ai/s/login?joinCode=XXXXXX';
})();
