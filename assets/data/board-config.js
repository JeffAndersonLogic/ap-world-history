/* =========================================================
   THE CLASSROOM BOARD, WHAT IS STILL YOURS TO SAY

   The board no longer has a schedule of its own. Dates, topics,
   learning targets, success criteria, homework and due dates all come
   from assets/data/course-calendar.js, which is generated from the
   district calendar and the pacing map.

   THIS FILE IS WHAT THE MACHINE CANNOT KNOW. Three things:

     settings     how the board presents itself
     overrides    a note or a rewording for one particular day
     reminders    standing announcements, off unless you add one

   Assessments are no longer listed here. Every unit review-and-exam
   day in the pacing map reaches the board on its own, on the right
   date, and moves when the calendar moves. Add `extraAssessments`
   below only for something the pacing map does not contain, a pop
   quiz or a district test.

   After editing, run:

       node scripts/build-announcements.js

   ========================================================= */

window.BEHISTORICAL_BOARD = {

  settings: {
    courseName: 'AP World History',
    // Blank on purpose, so nothing personal projects on the screen.
    teacherName: '',
    roomName: '',
    slideSeconds: 15,
    apExamDate: '2027-05-06'
  },

  /* ---------------------------------------------------------
     OVERRIDES, keyed by date

     Merged on top of the generated day, field by field. Anything you
     do not name is left as generated, so an override is a sentence,
     not a re-typed day.

     Fields you can override:

       topicTitle       replaces the topic title on the screen
       learningTargets  a list of plain strings
       successCriteria  a list of plain strings
       homework         a string, or a list for numbered lines
       homeworkDue      replaces the generated due date chip
       note             a one-line callout, which nothing generates

     Example:

       '2026-10-22': { note: 'Bring your Chromebook charged, we are in the library' },
       '2026-11-03': { homework: 'No homework tonight. Rest.' }

     THIS IS THE ESCAPE HATCH, not the workflow. If you find yourself
     adding one every week, the templates in
     assets/data/homework-templates.js are wrong and should be fixed
     instead.
     --------------------------------------------------------- */
  overrides: {
  },

  /* ---------------------------------------------------------
     EXTRA ASSESSMENTS
     Only things the pacing map does not already contain.
     type is 'Quiz', 'Test', or 'Exam'. All three project in red.
     Leave `date` empty and the board shows Date TBD, which is how you
     announce something before you have scheduled it.
     --------------------------------------------------------- */
  extraAssessments: [
  ],

  /* ---------------------------------------------------------
     REMINDERS
     Off by default. Add an entry and a Reminders slide joins the
     loop; leave the list empty and no slide appears.
     --------------------------------------------------------- */
  reminders: [
  ]
};
