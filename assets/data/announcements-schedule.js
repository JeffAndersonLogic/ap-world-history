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
       homework     what leaves the room tonight. Yours to write, the
                    course data has no homework in it. One assignment can
                    be a plain string. Two or more go in a list and each
                    gets its own numbered line on the screen:
                        homework: ['Finish the responses.', 'Read page 18.']
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
    // Foundations 0, Thursday and Friday
    {
      date: '2026-08-06',
      topic: 'F0',
      homework: [
        'Complete your F0 responses and submit them in Canvas.',
        'Read Theme 1, page 18, in the eBook.'
      ]
    },
    {
      date: '2026-08-07',
      topic: 'F0',
      homework: [
        'Complete your F0 responses and submit them in Canvas.',
        'Read Theme 1, page 18, in the eBook.'
      ]
    },

    // Foundations 1, Monday and Tuesday
    {
      date: '2026-08-10',
      topic: 'F1',
      homework: [
        'Finish the Foundations 1 modules for Geography Shapes Civilization.',
        'Read Theme 2, Cultural Developments and Interactions, pages 19 and 20, in the eBook.'
      ]
    },
    {
      date: '2026-08-11',
      topic: 'F1',
      homework: [
        'Finish the Foundations 1 modules for Geography Shapes Civilization.',
        'Read Theme 2, Cultural Developments and Interactions, pages 19 and 20, in the eBook.'
      ]
    },

    // Foundations 2, Wednesday and Thursday
    { date: '2026-08-12', topic: 'F2', homework: '' },
    { date: '2026-08-13', topic: 'F2', homework: '' },

    // Foundations 3, Friday and the following Monday
    { date: '2026-08-14', topic: 'F3', homework: '' },
    { date: '2026-08-17', topic: 'F3', homework: '' },

    // Foundations 4, Tuesday and Wednesday
    { date: '2026-08-18', topic: 'F4', homework: '' },
    { date: '2026-08-19', topic: 'F4', homework: '' },

    // Foundations 5, Thursday and Friday
    { date: '2026-08-20', topic: 'F5', homework: '' },
    { date: '2026-08-21', topic: 'F5', homework: '' },

    // Foundations Assessment, Monday and Tuesday
    {
      date: '2026-08-24',
      topicTitle: 'Foundations Assessment',
      unit: 'Foundations',
      homework: ''
    },
    {
      date: '2026-08-25',
      topicTitle: 'Foundations Assessment',
      unit: 'Foundations',
      homework: ''
    },

    // Social Media Unit Exam, Friday
    {
      date: '2026-08-28',
      topicTitle: 'Social Media Unit Exam',
      unit: 'Social Media Unit',
      homework: '',
      note: 'Social Media Unit Exam today.'
    },

    // War in Iran Unit, Tuesday and Thursday
    {
      date: '2026-09-01',
      topicTitle: 'War in Iran, Section 1',
      unit: 'War in Iran Unit',
      homework: ''
    },
    {
      date: '2026-09-03',
      topicTitle: 'War in Iran, Section 2',
      unit: 'War in Iran Unit',
      homework: ''
    }
  ],

  /* ---------------------------------------------------------
     QUIZZES AND EXAMS
     type is 'Quiz', 'Test', or 'Exam'. All three project in red.
     Past dates drop off the board on their own.
     Leave `date` empty and the board shows it as Date TBD, which is
     how you announce something before you have scheduled it.
     --------------------------------------------------------- */
  assessments: [
    {
      date: '2026-08-28',
      title: 'Social Media Unit Exam',
      detail: 'In class Friday, August 28',
      type: 'Exam'
    }
  ],

  /* ---------------------------------------------------------
     REMINDERS
     Off by default. Add an entry and a Reminders slide joins the
     loop; leave the list empty and no slide appears.
     --------------------------------------------------------- */
  reminders: []
};
