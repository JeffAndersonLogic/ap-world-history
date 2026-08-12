/* =========================================================
   HOMEWORK TEMPLATES

   Homework used to be typed per day. Nearly all of it was one of four
   sentences, so it is a template table now.

   These were written from the homework already typed by hand for
   Foundations; those entries are the specification, not a starting
   point. If you change the wording here, the whole year changes with
   it, which is the point.

   PLACEHOLDERS

       {label}    the topic number as students say it, 'F1', '4.4'
       {title}    the topic title, both titles on a paired day
       {reading}  the phrase from assets/data/ebook-map.js
       {unit}     'Unit 4: Transoceanic Interconnections'

   A LINE WITH AN UNFILLED PLACEHOLDER IS DROPPED, not printed with a
   hole in it. That is what makes the eBook map safe to fill in a unit
   at a time: no reading, no reading line.

   For a genuinely one-off night, use `overrides` in
   assets/data/board-config.js. Do not add a special case here.

   After editing, run:

       node scripts/build-course-calendar.js

   ========================================================= */

window.BEHISTORICAL_HOMEWORK = {

  // A normal lesson day, one block, one topic.
  topic: [
    'Finish the {label} modules for {title} and submit your work in Canvas.',
    'Read {reading}, in Traditions and Encounters.'
  ],

  // A paired day. Naming both titles produces a sentence nobody can read off a
  // projector: "Finish the 4.4 and 4.5 modules for Maritime Empires Established
  // and Maritime Empires Maintained and Developed and submit your work in
  // Canvas." The topic numbers alone are enough; the titles are on the board
  // already, directly above the homework.
  topicPair: [
    'Finish the {label} modules and submit your work in Canvas.',
    'Read {reading}, in Traditions and Encounters.'
  ],

  // A unit review-and-exam day. The reasoning topic rides along here,
  // so {title} names it.
  assessment: [
    'Study for the {unitShort} exam.',
    'Review {title} and your unit notes.'
  ],

  // The Foundations assessment, which has no covered topic to name, so it uses
  // the entry's own title from pacing.js rather than a topic title.
  assessmentPlain: [
    'Study for the {entryTitle}.'
  ],

  // Between spring break and the exam.
  review: [
    'Keep up with your review schedule for the AP exam.'
  ]
};
