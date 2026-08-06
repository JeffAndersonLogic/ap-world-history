/* =========================================================
   BEHISTORICAL DAILY ANNOUNCEMENTS BOARD, CONTENT FILE
   =========================================================

   This is the only file you edit to change what shows on the
   classroom screen. Open announcements.html and the board reads
   whatever is below.

   THREE LISTS, THAT IS ALL:

     settings   how fast the slides move and what the board is called
     days       one entry per class day (agenda, objective, Do Now)
     dueDates   upcoming assignments and assessments
     reminders  short standing notes, they show until you delete them

   RULES THE BOARD FOLLOWS:

     - Dates are always 'YYYY-MM-DD'. That is the only format that works.
     - The board looks for the day entry whose date matches today. If it
       finds none it still shows due dates and reminders, so an empty
       calendar never leaves a blank screen.
     - A due date whose day has passed disappears on its own. You do not
       have to prune the list, but old entries are safe to delete.
     - Every field except `date` is optional. Leave a field out or set it
       to '' and the board simply skips that slide.
     - Keep text short. This projects to the back of a classroom.

   ========================================================= */

window.BEHISTORICAL_ANNOUNCEMENTS = {

  /* ---------------------------------------------------------
     SETTINGS
     --------------------------------------------------------- */
  settings: {
    courseName: 'AP World History',
    // Both of these are blank on purpose, so nothing personal projects on the
    // screen. Fill either one in and it appears in the footer.
    teacherName: '',
    roomName: '',
    // Seconds each slide stays on screen before the next one fades in.
    slideSeconds: 15,
    // The national AP World exam date, used for the countdown in the footer.
    // Set to '' to turn the countdown off.
    apExamDate: '2027-05-06'
  },

  /* ---------------------------------------------------------
     DAYS
     One entry per class day. Copy the block, change the date.

       date       required, 'YYYY-MM-DD'
       unit       short label, shows above the topic
       topic      the day's topic, shows large on the title slide
       objective  the learning target, one sentence, student facing
       apSkill    the AP reasoning or source skill of the day
       doNow      bell ringer, what students do the moment they sit down
       agenda     the steps of the block, in order, 3 to 6 works best
       homework   what leaves the room with them tonight
       note       optional one line callout, use it for anything unusual
                  ("Bring your Chromebook", "Guest speaker", "Half day")
     --------------------------------------------------------- */
  days: [
    {
      date: '2026-08-06',
      unit: 'Foundations',
      topic: 'The World Before 1200',
      objective: 'I can describe how belief systems and trade shaped the world students inherit at the start of AP World.',
      apSkill: 'Contextualization',
      doNow: 'On your notecard: name one thing you already believe about the year 1200. We will test it by Friday.',
      agenda: [
        'Do Now and syllabus questions',
        'First & 10 reading, Before the Modern World',
        'Map check, the four regions we start with',
        'Lecture cards, belief systems',
        'Checkpoint 1 on your device'
      ],
      homework: 'Finish the First & 10 response and submit it through the Google Form.',
      note: 'Bring a charged Chromebook every day this week.'
    },
    {
      date: '2026-08-07',
      unit: 'Foundations',
      topic: 'Classical Empires and Their Echoes',
      objective: 'I can explain how classical empires built power and why their methods keep reappearing after 1200.',
      apSkill: 'Causation',
      doNow: 'Two minutes: list every empire you can name. No phones, no neighbors.',
      agenda: [
        'Do Now and quick share',
        'Evidence Lab, three imperial documents',
        'Lecture cards, methods of rule',
        'Checkpoint 2 and exit ticket'
      ],
      homework: 'Read the Unit 1 overview before Monday.'
    },
    {
      date: '2026-08-10',
      unit: 'Unit 1',
      topic: 'Developments in East Asia, Song China',
      objective: 'I can explain how the Song imperial bureaucracy and the civil service exam sustained Chinese power.',
      apSkill: 'Continuity and Change',
      doNow: 'Look at the Qingming scroll on the screen. Write one thing it tells you about Song cities.',
      agenda: [
        'Do Now, reading the Qingming scroll',
        'Map & Geography check, East Asia',
        'First & 10, Song China',
        'Lecture cards, bureaucracy and Neo-Confucianism',
        'Primary source, the civil service exam',
        'Checkpoint 2'
      ],
      homework: 'Topic 1.1 checkpoints, both of them, submitted tonight.'
    }
  ],

  /* ---------------------------------------------------------
     DUE DATES
     Anything with a deadline. Sorted by date automatically.
     Anything already past disappears from the board on its own.

       due    required, 'YYYY-MM-DD'
       title  what it is
       detail one short line, where it goes or what it covers
       tag    the kind of thing it is. Use 'Test', 'Quiz', 'Homework',
              'Project', or 'Reading'. 'Test' and 'Quiz' show in red.
     --------------------------------------------------------- */
  dueDates: [
    {
      due: '2026-08-07',
      title: 'First & 10, Before the Modern World',
      detail: 'Submit through the Google Form on the lesson page',
      tag: 'Reading'
    },
    {
      due: '2026-08-11',
      title: 'Topic 1.1 Checkpoints 1 and 2',
      detail: 'Both checkpoints, on the Song China lesson page',
      tag: 'Homework'
    },
    {
      due: '2026-08-14',
      title: 'Foundations Unit Quiz',
      detail: 'Belief systems, classical empires, and trade networks to c. 1200',
      tag: 'Quiz'
    },
    {
      due: '2026-08-21',
      title: 'Unit 1 Comparison Essay Draft',
      detail: 'One paragraph comparing two state building methods, typed',
      tag: 'Project'
    }
  ],

  /* ---------------------------------------------------------
     REMINDERS
     Standing notes. No dates. They show every day until you
     delete them, so keep this list short and current.
     --------------------------------------------------------- */
  reminders: [
    {
      title: 'Tutoring',
      detail: 'Tuesday and Thursday, 3:15 to 4:00. No appointment needed.'
    },
    {
      title: 'Late Work',
      detail: 'Accepted through the Sunday of the week it was due, at 80 percent.'
    },
    {
      title: 'Phones',
      detail: 'In the pocket at the bell. They come out only when the screen says so.'
    }
  ]
};
