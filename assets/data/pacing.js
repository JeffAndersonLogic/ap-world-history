/* =========================================================
   THE PACING MAP

   An ordered list with no dates in it. The order is the curriculum;
   the dates are arithmetic, and `scripts/build-course-calendar.js`
   does the arithmetic against assets/data/school-calendar.js.

   `blocks` is how many class periods a student spends on the entry.
   One block is one period for any given student, which on the
   Green/Silver rotation occupies two consecutive days on the
   classroom board: the Green sections get it, then the Silver
   sections get it the next day.

       blocks: 1   ->  2 school days
       blocks: 2   ->  4 school days

   TO RESHAPE THE YEAR, change a number here and rebuild. Never move
   a date; there are no dates here to move.

       node scripts/build-course-calendar.js

   ========================================================= */

window.BEHISTORICAL_PACING = {

  /* ---------------------------------------------------------
     TARGETS
     Checked by the builder, which fails loudly rather than
     quietly producing a year that does not meet them.
     --------------------------------------------------------- */
  targets: [
    {
      // Stated 2026-08-12: "Through Topic 5.1 by end of 1st semester."
      through: '5.1',
      by: 'end of Semester 1',
      onDate: '2026-12-19'
    },
    {
      // The exam is the real deadline for the second half, not the
      // last day of school. Finishing 9.9 on 5/20 is finishing late.
      through: '9.9',
      by: 'the AP Exam',
      onDate: '2027-05-06'
    }
  ],

  /* ---------------------------------------------------------
     THE SEQUENCE
     --------------------------------------------------------- */
  sequence: [
    // ── Foundations ──────────────────────────────────────────
    { topic: 'F0', blocks: 1 },
    { topic: 'F1', blocks: 1 },
    { topic: 'F2', blocks: 1 },
    { topic: 'F3', blocks: 1 },
    { topic: 'F4', blocks: 1 },
    { topic: 'F5', blocks: 1 },
    { title: 'Foundations Assessment', kind: 'assessment', unit: 'Foundations', blocks: 1 },

    // ── Unit 1, The Global Tapestry ──────────────────────────
    { topic: '1.1', blocks: 1 },
    { topic: '1.2', blocks: 1 },
    { topic: '1.3', blocks: 1 },
    { topic: '1.4', blocks: 1 },
    { topic: '1.5', blocks: 1 },
    { topic: '1.6', blocks: 1 },
    { topic: '1.7', blocks: 1 },
    { title: 'Unit 1 Exam', kind: 'assessment', unit: 'Unit 1', blocks: 1 },

    // ── Unit 2, Networks of Exchange ─────────────────────────
    { topic: '2.1', blocks: 1 },
    { topic: '2.2', blocks: 1 },
    { topic: '2.3', blocks: 1 },
    { topic: '2.4', blocks: 1 },
    { topic: '2.5', blocks: 1 },
    { topic: '2.6', blocks: 1 },
    { topic: '2.7', blocks: 1 },
    { title: 'Unit 2 Exam', kind: 'assessment', unit: 'Unit 2', blocks: 1 },

    // ── Unit 3, Land-Based Empires ───────────────────────────
    { topic: '3.1', blocks: 1 },
    { topic: '3.2', blocks: 1 },
    { topic: '3.3', blocks: 1 },
    { topic: '3.4', blocks: 1 },
    { title: 'Unit 3 Exam', kind: 'assessment', unit: 'Unit 3', blocks: 1 },

    // ── Unit 4, Transoceanic Interconnections ────────────────
    { topic: '4.1', blocks: 1 },
    { topic: '4.2', blocks: 1 },
    { topic: '4.3', blocks: 1 },
    { topic: '4.4', blocks: 1 },
    { topic: '4.5', blocks: 1 },
    { topic: '4.6', blocks: 1 },
    { topic: '4.7', blocks: 1 },
    { topic: '4.8', blocks: 1 },
    { title: 'Unit 4 Exam', kind: 'assessment', unit: 'Unit 4', blocks: 1 },

    // ── Unit 5, Revolutions ──────────────────────────────────
    // 5.1 is the semester 1 target. Everything below it is semester 2.
    { topic: '5.1', blocks: 1 },
    { topic: '5.2', blocks: 1 },
    { topic: '5.3', blocks: 1 },
    { topic: '5.4', blocks: 1 },
    { topic: '5.5', blocks: 1 },
    { topic: '5.6', blocks: 1 },
    { topic: '5.7', blocks: 1 },
    { topic: '5.8', blocks: 1 },
    { topic: '5.9', blocks: 1 },
    { topic: '5.10', blocks: 1 },
    { title: 'Unit 5 Exam', kind: 'assessment', unit: 'Unit 5', blocks: 1 },

    // ── Unit 6, Consequences of Industrialization ────────────
    { topic: '6.1', blocks: 1 },
    { topic: '6.2', blocks: 1 },
    { topic: '6.3', blocks: 1 },
    { topic: '6.4', blocks: 1 },
    { topic: '6.5', blocks: 1 },
    { topic: '6.6', blocks: 1 },
    { topic: '6.7', blocks: 1 },
    { topic: '6.8', blocks: 1 },
    { title: 'Unit 6 Exam', kind: 'assessment', unit: 'Unit 6', blocks: 1 },

    // ── Unit 7, Global Conflict ──────────────────────────────
    { topic: '7.1', blocks: 1 },
    { topic: '7.2', blocks: 1 },
    { topic: '7.3', blocks: 1 },
    { topic: '7.4', blocks: 1 },
    { topic: '7.5', blocks: 1 },
    { topic: '7.6', blocks: 1 },
    { topic: '7.7', blocks: 1 },
    { topic: '7.8', blocks: 1 },
    { topic: '7.9', blocks: 1 },
    { title: 'Unit 7 Exam', kind: 'assessment', unit: 'Unit 7', blocks: 1 },

    // ── Unit 8, Cold War and Decolonization ──────────────────
    { topic: '8.1', blocks: 1 },
    { topic: '8.2', blocks: 1 },
    { topic: '8.3', blocks: 1 },
    { topic: '8.4', blocks: 1 },
    { topic: '8.5', blocks: 1 },
    { topic: '8.6', blocks: 1 },
    { topic: '8.7', blocks: 1 },
    { topic: '8.8', blocks: 1 },
    { topic: '8.9', blocks: 1 },
    { title: 'Unit 8 Exam', kind: 'assessment', unit: 'Unit 8', blocks: 1 },

    // ── Unit 9, Globalization ────────────────────────────────
    { topic: '9.1', blocks: 1 },
    { topic: '9.2', blocks: 1 },
    { topic: '9.3', blocks: 1 },
    { topic: '9.4', blocks: 1 },
    { topic: '9.5', blocks: 1 },
    { topic: '9.6', blocks: 1 },
    { topic: '9.7', blocks: 1 },
    { topic: '9.8', blocks: 1 },
    { topic: '9.9', blocks: 1 },
    { title: 'Unit 9 Exam', kind: 'assessment', unit: 'Unit 9', blocks: 1 },

    // ── AP Exam review ───────────────────────────────────────
    // Everything left between Unit 9 and 2027-05-06. Whatever the
    // builder reports here is your actual review runway; if it comes
    // back at zero, the pacing above is too slow.
    { title: 'AP Exam Review', kind: 'review', unit: 'Review', blocks: 4 }
  ]
};
