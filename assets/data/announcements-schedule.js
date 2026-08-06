/* =========================================================
   BEHISTORICAL ANNOUNCEMENTS, THE SCHEDULE
   =========================================================

   THIS is the file you edit. Give a date and a topic number, and
   the learning targets and success criteria come straight out of
   that lesson's own data file.

   After editing, run:

       node scripts/build-announcements.js

   That writes assets/data/announcements.js, which the classroom
   board reads. Never edit that file by hand, it gets overwritten.

   TOPIC NUMBERS you can use:

       F0 to F5        the Foundations meetings
       1.1 to 1.7      Unit 1
       2.1 to 2.7      Unit 2
       3.1 to 3.4      Unit 3
       4.1 to 4.8      Unit 4
       5.1 to 5.10     Unit 5
       6.1 to 6.8      Unit 6
       7.1 to 7.9      Unit 7
       8.1 to 8.9      Unit 8
       9.1 to 9.9      Unit 9

   A DAY ENTRY:

       date         required, 'YYYY-MM-DD'
       topic        the topic number above. This fills in the unit,
                    the title, the learning targets, and the
                    success criteria automatically.
       homework     what leaves the room tonight. Yours to write,
                    the course data has no homework in it.
       homeworkDue  optional, shows as a chip, e.g. 'Friday'
       note         optional one line callout ('Bring your Chromebook')

   OVERRIDES, for when the lesson wording is too long to project:

       topicTitle       replaces the topic title on the screen
       learningTargets  a list of plain strings, replaces the generated ones
       successCriteria  a list of plain strings, replaces the generated ones

   A day with no `topic` is fine, just write the fields yourself.

   ========================================================= */

window.BEHISTORICAL_SCHEDULE = {

  settings: {
    courseName: 'AP World History',
    // Blank on purpose, so nothing personal projects on the screen.
    teacherName: '',
    roomName: '',
    slideSeconds: 15,
    apExamDate: '2027-05-06'
  },

  /* ---------------------------------------------------------
     THE CALENDAR
     One line of typing per class day. Replace these samples.
     --------------------------------------------------------- */
  days: [
    {
      date: '2026-08-06',
      topic: 'F2',
      homework: 'Finish the First & 10 response and submit it through the Google Form.',
      homeworkDue: 'Tomorrow'
    },
    {
      date: '2026-08-07',
      topic: 'F3',
      homework: 'Read the Unit 1 overview before Monday.',
      homeworkDue: 'Monday'
    },
    {
      date: '2026-08-10',
      topic: '1.1',
      homework: 'Topic 1.1 checkpoints, both of them, submitted tonight.'
    },
    {
      date: '2026-08-11',
      topic: '1.2',
      homework: 'Topic 1.2 checkpoints.'
    },
    {
      date: '2026-08-12',
      topic: '1.3',
      homework: 'Topic 1.3 checkpoints.'
    }
  ],

  /* ---------------------------------------------------------
     QUIZZES AND EXAMS
     type is 'Quiz', 'Test', or 'Exam'. All three project in red.
     Past dates drop off the board on their own.
     --------------------------------------------------------- */
  assessments: [
    {
      date: '2026-08-14',
      title: 'Foundations Unit Quiz',
      detail: 'Belief systems, classical empires, and trade networks to c. 1200',
      type: 'Quiz'
    },
    {
      date: '2026-08-28',
      title: 'Unit 1 Test',
      detail: 'The Global Tapestry, all seven topics, stimulus and short answer',
      type: 'Test'
    }
  ],

  /* ---------------------------------------------------------
     REMINDERS
     Off by default. Add an entry and a Reminders slide joins the
     loop; leave the list empty and no slide appears.
     --------------------------------------------------------- */
  reminders: []
};
