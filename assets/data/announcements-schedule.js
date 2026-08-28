/* =========================================================
   BEHISTORICAL ANNOUNCEMENTS, THE SCHEDULE
   =========================================================

   THIS is the file you edit. Give a date, a cohort, and a topic
   number, and the learning targets and success criteria come
   straight out of that lesson's own data file.

   After editing, run:

       node scripts/build-announcements.js
       node scripts/build-canvas-events.js

   The first writes assets/data/announcements.js, which the
   classroom board reads. The second writes the paste-ready Canvas
   calendar events. Never edit either output by hand.

   ---------------------------------------------------------
   GREEN AND SILVER

   This is an alternating block. School days alternate strictly,
   Green then Silver, and each topic is taught to Green first and
   to Silver at the next meeting. They are DIFFERENT STUDENTS, so
   a topic is not a two-day arc: it is one 90-minute block, taught
   twice, to two rooms that never see each other's work.

   That is why every day carries a `cohort`, and why homework is
   written on BOTH of a topic's days rather than once on the
   second. The old file had one homework entry per topic pair,
   posted on the last day of the pair. On an alternating block
   that lands every assignment in front of one cohort and every
   blank row in front of the other: Green went into Topic 1.2
   with no reading assigned, and Silver's said due Friday, which
   is not a day Silver is in the building.

   The due date is NOT typed here. The builder derives it from the
   next date in this list carrying the same cohort, so a holiday,
   a snow day or a schedule change moves every due date with it by
   deleting one row. Type `homeworkDue` only to override.

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
       cohort       required, 'green' or 'silver'
       topic        the topic number above. This fills in the unit,
                    the title, the learning targets, and the
                    success criteria automatically.
       homework     plain tasks that leave the room tonight. One can
                    be a string; two or more go in a list.
       reading      a required-reading assignment, written as
                    structure rather than one long sentence, so the
                    board and Canvas both print real bullets:

                        reading: {
                          for: '1.3',                  // topic it prepares
                          where: 'ebook/unit-1.html',
                          required: ['01 ...', '02 ...'],
                          recommended: ['05 ...']      // optional
                        }

       homeworkDue  optional override, e.g. 'Friday'. Leave it out
                    and the builder uses this cohort's next meeting.
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
     One row per class day. Green first, Silver next meeting.
     --------------------------------------------------------- */
  days: [

    /* ---- Foundations 0 ---------------------------------- */
    {
      date: '2026-08-06',
      cohort: 'green',
      topic: 'F0',
      homework: [
        'Complete your F0 responses and submit them in Canvas.',
        'Read Theme 1, page 18, in the eBook.'
      ]
    },
    {
      date: '2026-08-07',
      cohort: 'silver',
      topic: 'F0',
      homework: [
        'Complete your F0 responses and submit them in Canvas.',
        'Read Theme 1, page 18, in the eBook.'
      ]
    },

    /* ---- Foundations 1 ---------------------------------- */
    {
      date: '2026-08-10',
      cohort: 'green',
      topic: 'F1',
      homework: [
        'Finish the Foundations 1 modules for Geography Shapes Civilization.',
        'Read Theme 2, Cultural Developments and Interactions, pages 19 and 20, in the eBook.'
      ]
    },
    {
      date: '2026-08-11',
      cohort: 'silver',
      topic: 'F1',
      homework: [
        'Finish the Foundations 1 modules for Geography Shapes Civilization.',
        'Read Theme 2, Cultural Developments and Interactions, pages 19 and 20, in the eBook.'
      ]
    },

    /* ---- Foundations 2 ---------------------------------- */
    { date: '2026-08-12', cohort: 'green',  topic: 'F2', homework: '' },
    { date: '2026-08-13', cohort: 'silver', topic: 'F2', homework: '' },

    /* ---- Foundations 3 ---------------------------------- */
    { date: '2026-08-14', cohort: 'green',  topic: 'F3', homework: '' },
    { date: '2026-08-17', cohort: 'silver', topic: 'F3', homework: '' },

    /* ---- Foundations 4 ---------------------------------- */
    { date: '2026-08-18', cohort: 'green',  topic: 'F4', homework: '' },
    { date: '2026-08-19', cohort: 'silver', topic: 'F4', homework: '' },

    /* ---- Foundations 5 ---------------------------------- */
    { date: '2026-08-20', cohort: 'green',  topic: 'F5', homework: '' },
    { date: '2026-08-21', cohort: 'silver', topic: 'F5', homework: '' },

    /* ---- Foundations Assessment ------------------------- */
    // The Topic 1.1 reading is assigned at the end of each cohort's own
    // assessment day, due at that cohort's next meeting. One Canvas
    // assignment naming every required section, not one per section.
    {
      date: '2026-08-24',
      cohort: 'green',
      topicTitle: 'Foundations Assessment',
      unit: 'Foundations',
      reading: {
        for: '1.1',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Founding Problem',
          '02 The Exam',
          '03 Neo-Confucianism',
          '04 The Economy',
          '05 The Frontier and the End'
        ]
      }
    },
    {
      date: '2026-08-25',
      cohort: 'silver',
      topicTitle: 'Foundations Assessment',
      unit: 'Foundations',
      reading: {
        for: '1.1',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Founding Problem',
          '02 The Exam',
          '03 Neo-Confucianism',
          '04 The Economy',
          '05 The Frontier and the End'
        ]
      }
    },

    /* ---- Topic 1.1, Song China -------------------------- */
    {
      date: '2026-08-26',
      cohort: 'green',
      topic: '1.1',
      reading: {
        for: '1.2',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Unraveling of the Caliphate',
          '02 The Turkic Successor States',
          '03 How Islam Actually Spread',
          '04 The Knowledge Machine'
        ],
        recommended: ['05 Who Was on Top, and Who Was Not']
      }
    },
    {
      date: '2026-08-27',
      cohort: 'silver',
      topic: '1.1',
      reading: {
        for: '1.2',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Unraveling of the Caliphate',
          '02 The Turkic Successor States',
          '03 How Islam Actually Spread',
          '04 The Knowledge Machine'
        ],
        recommended: ['05 Who Was on Top, and Who Was Not']
      }
    },

    /* ---- Topic 1.2, Dar al-Islam ------------------------ */
    {
      date: '2026-08-28',
      cohort: 'green',
      topic: '1.2',
      homework: 'Finish BeInTheRoom, the scholars council, if it did not fit in the block.',
      reading: {
        for: '1.3',
        where: 'ebook/unit-1.html',
        required: [
          '01 South Asia After the Sultanate Arrived',
          '02 Belief and the Social Order in South Asia',
          '03 The Sea States',
          '04 The Land States',
          '05 Religion as Governance'
        ]
      }
    },
    {
      date: '2026-08-31',
      cohort: 'silver',
      topic: '1.2',
      homework: 'Finish BeInTheRoom, the scholars council, if it did not fit in the block.',
      reading: {
        for: '1.3',
        where: 'ebook/unit-1.html',
        required: [
          '01 South Asia After the Sultanate Arrived',
          '02 Belief and the Social Order in South Asia',
          '03 The Sea States',
          '04 The Land States',
          '05 Religion as Governance'
        ]
      }
    },

    /* ---- Topic 1.3, South and Southeast Asia ------------ */
    {
      date: '2026-09-01',
      cohort: 'green',
      topic: '1.3',
      reading: {
        for: '1.4',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Maya City-States',
          '02 The Mexica',
          '03 The Inca',
          '04 North America',
          '05 The Evidence, and Who Wrote It'
        ]
      }
    },
    {
      date: '2026-09-02',
      cohort: 'silver',
      topic: '1.3',
      reading: {
        for: '1.4',
        where: 'ebook/unit-1.html',
        required: [
          '01 The Maya City-States',
          '02 The Mexica',
          '03 The Inca',
          '04 North America',
          '05 The Evidence, and Who Wrote It'
        ]
      }
    },

    /* ---- Topic 1.4, The Americas ------------------------ */
    // Green's 1.5 reading crosses the long weekend: Monday 9/7 is Labor Day,
    // so Green's next meeting is Tuesday 9/8. The builder works that out
    // from the calendar below rather than from a typed due date.
    {
      date: '2026-09-03',
      cohort: 'green',
      topic: '1.4',
      reading: {
        for: '1.5',
        where: 'ebook/unit-1.html',
        required: [
          '02 The Hausa City-States',
          '03 Great Zimbabwe',
          '05 Ethiopia'
        ],
        recommended: ['01 Mali', '04 The Swahili Coast']
      }
    },
    {
      date: '2026-09-04',
      cohort: 'silver',
      topic: '1.4',
      reading: {
        for: '1.5',
        where: 'ebook/unit-1.html',
        required: [
          '02 The Hausa City-States',
          '03 Great Zimbabwe',
          '05 Ethiopia'
        ],
        recommended: ['01 Mali', '04 The Swahili Coast']
      }
    },

    /* ---- Topic 1.5, Africa ------------------------------ */
    // Monday 9/7 is Labor Day, so this block starts Tuesday.
    {
      date: '2026-09-08',
      cohort: 'green',
      topic: '1.5',
      reading: {
        for: '1.6',
        where: 'ebook/unit-1.html',
        required: [
          '01 Fragmentation',
          '02 The Church',
          '03 The Monarchies',
          '04 Towns, Guilds, and the Commercial Revolution'
        ],
        recommended: ['05 The Fourteenth-Century Crisis']
      }
    },
    {
      date: '2026-09-09',
      cohort: 'silver',
      topic: '1.5',
      reading: {
        for: '1.6',
        where: 'ebook/unit-1.html',
        required: [
          '01 Fragmentation',
          '02 The Church',
          '03 The Monarchies',
          '04 Towns, Guilds, and the Commercial Revolution'
        ],
        recommended: ['05 The Fourteenth-Century Crisis']
      }
    },

    /* ---- Topic 1.6, Europe ------------------------------ */
    // NOTE: 9/10 and 9/11 follow the same alternating pattern as every block
    // above, but are not yet confirmed against the Canvas calendar the way
    // 1.1 to 1.5 were. Check these two dates before the board goes live.
    {
      date: '2026-09-10',
      cohort: 'green',
      topic: '1.6',
      reading: {
        for: '1.7',
        where: 'ebook/unit-1.html',
        required: [
          '01 What Comparison Actually Is',
          '05 Writing It Without Collapsing'
        ],
        note: 'Sections 02 to 04 are reference material for building your comparison, not required reading.'
      }
    },
    {
      date: '2026-09-11',
      cohort: 'silver',
      topic: '1.6',
      reading: {
        for: '1.7',
        where: 'ebook/unit-1.html',
        required: [
          '01 What Comparison Actually Is',
          '05 Writing It Without Collapsing'
        ],
        note: 'Sections 02 to 04 are reference material for building your comparison, not required reading.'
      }
    },

    /* ---- Topic 1.7, Comparison -------------------------- */
    // NOTE: same caveat as 1.6, 9/14 and 9/15 are extrapolated from the
    // alternating pattern, not confirmed against the Canvas calendar.
    { date: '2026-09-14', cohort: 'green',  topic: '1.7', homework: '' },
    { date: '2026-09-15', cohort: 'silver', topic: '1.7', homework: '' }
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
      // Dated on the Silver day so the reminder stays on the board through
      // both cohorts' meetings.
      date: '2026-08-25',
      title: 'Foundations Assessment',
      detail: 'Covers Foundations 0 to 5, in class Monday, August 24 for Green and Tuesday, August 25 for Silver',
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
