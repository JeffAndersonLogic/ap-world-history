/* =========================================================
   BEHISTORICAL DAILY ANNOUNCEMENTS BOARD, CONTENT FILE
   =========================================================

   This is the only file you edit to change what shows on the
   classroom screen. Open announcements.html and the board reads
   whatever is below.

   THE BOARD SHOWS SIX THINGS:

     1. Topic for the day        the title card
     2. Learning targets         what you are learning
     3. Success criteria         how you know you have learned it
     4. Homework                 what leaves the room tonight
     5. Upcoming topics          built automatically from `days`
     6. Quizzes and exams        from `assessments`

   THREE LISTS FEED THEM:

     settings      how fast the slides move, and the exam countdown
     days          one entry per class day, items 1 to 4 above
     assessments   every quiz, test, and exam, item 6 above

   RULES THE BOARD FOLLOWS:

     - Dates are always 'YYYY-MM-DD'. That is the only format that works.
     - The board looks for the day entry whose date matches today. Every
       later entry in `days` automatically becomes an Upcoming Topic, so
       typing a week on Sunday fills that slide for free.
     - An assessment whose day has passed disappears on its own. You do
       not have to prune the list.
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
    // Both of these are blank on purpose, so nothing personal projects on
    // the screen. Fill either one in and it appears in the footer.
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
     One entry per class day. Copy a block, change the date.

       date             required, 'YYYY-MM-DD'
       unit             short label, shows under the topic
       topic            THE TOPIC FOR THE DAY. Shows large on the title
                        card, and again on the Upcoming Topics slide once
                        the date is in the future.
       learningTargets  a list of "I can" statements. Three is the sweet
                        spot, four still reads from the back of the room.
       successCriteria  a list of things a student can tick off. Write
                        them as evidence, not as effort.
       homework         one line, what leaves the room tonight
       homeworkDue      optional, shows as a chip, e.g. 'Friday'

     Two optional extras, both off unless you fill them in:
       doNow            a bell ringer slide
       agenda           a list of block steps, shows as a numbered slide
       note             a one line callout for anything unusual
                        ("Bring your Chromebook", "Half day")
     --------------------------------------------------------- */
  days: [
    {
      date: '2026-08-06',
      unit: 'Foundations',
      topic: 'The World Before 1200',
      learningTargets: [
        'I can describe how belief systems shaped early societies.',
        'I can explain why trade routes moved ideas as well as goods.',
        'I can place the four regions we study on a blank map.'
      ],
      successCriteria: [
        'I named three belief systems and one region each shaped.',
        'I traced one good and one idea along the same route.',
        'I labeled East Asia, Dar al-Islam, Europe, and the Americas.'
      ],
      homework: 'Finish the First & 10 response and submit it through the Google Form.',
      homeworkDue: 'Tomorrow'
    },
    {
      date: '2026-08-07',
      unit: 'Foundations',
      topic: 'Classical Empires and Their Echoes',
      learningTargets: [
        'I can explain how classical empires built and held power.',
        'I can identify which imperial methods reappear after 1200.'
      ],
      successCriteria: [
        'I listed three methods of rule and gave an empire for each.',
        'I matched one classical method to a post-1200 state.'
      ],
      homework: 'Read the Unit 1 overview before Monday.',
      homeworkDue: 'Monday'
    },
    {
      date: '2026-08-10',
      unit: 'Unit 1',
      topic: 'Developments in East Asia, Song China',
      learningTargets: [
        'I can explain how the civil service exam sustained Song power.',
        'I can describe how Neo-Confucianism shaped Song society.',
        'I can use the Qingming scroll as evidence about Song cities.'
      ],
      successCriteria: [
        'I explained the exam system without using the word "test".',
        'I gave two ways Neo-Confucianism changed daily life.',
        'I cited one detail from the scroll to support a claim.'
      ],
      homework: 'Topic 1.1 checkpoints, both of them, submitted tonight.'
    },
    {
      date: '2026-08-11',
      unit: 'Unit 1',
      topic: 'Developments in Dar al-Islam',
      learningTargets: [
        'I can explain how Islamic states expanded after 1200.',
        'I can describe how trade carried Islamic scholarship outward.'
      ],
      successCriteria: [
        'I named two states and how each came to power.',
        'I traced one idea from Baghdad to somewhere else.'
      ],
      homework: 'Topic 1.2 checkpoints.'
    }
  ],

  /* ---------------------------------------------------------
     ASSESSMENTS
     Every quiz, test, and exam. Sorted by date automatically.
     Anything already past disappears from the board on its own.

       date    required, 'YYYY-MM-DD'
       title   what it is
       detail  one short line, what it covers
       type    'Quiz', 'Test', or 'Exam'. All three project in red.
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
       { title: 'Tutoring', detail: 'Tuesday and Thursday, 3:15 to 4:00.' }
     --------------------------------------------------------- */
  reminders: []
};
