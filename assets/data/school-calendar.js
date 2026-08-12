/* =========================================================
   ZIONSVILLE COMMUNITY HIGH SCHOOL, 2026-2027
   Green/Silver calendar, transcribed for the course builder.

   THIS FILE IS TYPED BY HAND, ONCE A YEAR, FROM THE DISTRICT
   CALENDAR. Everything dated in this course is derived from it.

   Source: "Zionsville Community High School Green/Silver Calendar
   2026-2027", dated 10/2025, updated 03/2026.

   VERIFY BEFORE TRUSTING. The transcription below reproduces 90
   school days in semester 1, which is what the calendar's own footer
   says (Semester 1 Days=90, Semester 2 Days=90, Total Days=180).
   That agreement is the check that the no-school dates are right; if
   you edit anything here, rerun the builder and confirm the count
   still lands on 90 and 90.

       node scripts/build-course-calendar.js

   ========================================================= */

window.BEHISTORICAL_SCHOOL_CALENDAR = {

  year: '2026-2027',
  school: 'Zionsville Community High School',

  firstDay: '2026-08-04',   // School Begins
  lastDay:  '2027-05-26',   // End of Semester 2

  /* ---------------------------------------------------------
     THE TWO SEMESTERS
     Used to check the "through Topic 5.1 by winter break" target
     and to report the day counts back against the calendar footer.
     --------------------------------------------------------- */
  semesters: [
    { name: 'Semester 1', from: '2026-08-04', to: '2026-12-19', expectedDays: 90 },
    { name: 'Semester 2', from: '2027-01-05', to: '2027-05-26', expectedDays: 90 }
  ],

  /* ---------------------------------------------------------
     NO SCHOOL
     Weekends are excluded automatically and are not listed.
     --------------------------------------------------------- */
  noSchool: [
    { date: '2026-09-07',                      reason: 'Labor Day' },
    { from: '2026-10-12', to: '2026-10-16',    reason: 'Fall Break' },
    { from: '2026-11-25', to: '2026-11-27',    reason: 'Thanksgiving' },
    { from: '2026-12-21', to: '2027-01-01',    reason: 'Winter Break' },
    { date: '2027-01-04',                      reason: 'Teacher Work Day, no students' },
    { date: '2027-01-18',                      reason: 'Dr. MLK Holiday' },
    { from: '2027-02-15', to: '2027-02-19',    reason: 'February Break' },
    // VERIFY THESE TWO. They were not legible on the calendar image and were
    // recovered from the 90-day checksum instead: spring break running
    // 3/29-4/2 with 5/26 as a teacher workday is the only combination that
    // produces the 90 second-semester days the calendar's footer states.
    // Plausible, and inferred rather than read. Check them against the PDF.
    { from: '2027-03-29', to: '2027-04-02',    reason: 'Spring Break' },
    { date: '2027-05-26',                      reason: 'Teacher Workday, no students' },
    { date: '2027-05-31',                      reason: 'Memorial Day' }
  ],

  /* ---------------------------------------------------------
     SCHOOL MEETS, THIS CLASS DOES NOT, OR NOT NORMALLY
     These days stay on the school calendar but carry no new topic,
     so the builder steps over them rather than dropping a lesson
     into a period that will not happen.
     --------------------------------------------------------- */
  noClass: [
    { date: '2026-10-06', reason: 'PSAT grades 9-11, PM release, grade 12 e-day' },
    { date: '2027-03-04', reason: 'SAT grade 11, PM release, grades 9, 10, 12 e-day' }
  ],

  /* ---------------------------------------------------------
     FINALS
     Not instructional days. Listed so the builder reserves them
     rather than pacing a topic into finals week.
     --------------------------------------------------------- */
  finals: [
    { from: '2026-12-15', to: '2026-12-18', reason: 'Semester 1 Finals' },
    { from: '2027-05-21', to: '2027-05-26', reason: 'Semester 2 Finals' }
  ],

  /* ---------------------------------------------------------
     THE GREEN/SILVER ROTATION

     Every school day is a Green day or a Silver day, and the
     calendar prints the colour on each square. This models it as a
     strict alternation anchored on the first day of school.

     ANCHOR CHECK: the existing announcements schedule put F0 on
     Thursday 2026-08-06 and Friday 2026-08-07, F1 on Monday the
     10th and Tuesday the 11th, and so on in consecutive pairs. That
     pairing only works if a topic is taught once to the Green
     sections and once to the Silver sections on the next day, which
     is what `topicSpansBothColours` below encodes.

     If the printed calendar ever disagrees with the alternation,
     the printed calendar wins. Put the exceptions in `rotationFixes`
     and the builder will honour them; a break that resets the
     rotation rather than continuing it is the usual cause.
     --------------------------------------------------------- */
  rotation: {
    kind: 'green-silver',
    firstDayColour: 'Green',      // 2026-08-04 is a Tuesday
    // A topic is delivered once on a Green day and again on the next
    // Silver day, so it occupies two consecutive school days on the
    // board and one class period for any given student.
    topicSpansBothColours: true
  },

  // Dates where the printed calendar's colour differs from a strict
  // alternation. Empty until the printed colours are spot-checked.
  //   { date: '2026-10-19', colour: 'Green' }
  rotationFixes: [],

  /* ---------------------------------------------------------
     DATES WORTH KNOWING, not used for pacing
     --------------------------------------------------------- */
  landmarks: [
    { date: '2026-10-09', label: 'Mid-Semester' },
    { date: '2026-12-19', label: 'End of Semester 1' },
    { date: '2027-03-16', label: 'Mid-Semester' },
    { date: '2027-05-06', label: 'AP World History Exam' },
    { date: '2027-06-02', label: 'Commencement' }
  ],

  // Every Wednesday except finals weeks is a late start for faculty
  // collaboration. Shorter period, still a class day, so it does not
  // change pacing. Recorded so nobody later reads it as a day off.
  lateStart: 'Wednesdays, except finals weeks'
};
