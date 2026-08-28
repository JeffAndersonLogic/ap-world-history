'use strict';
/* =========================================================
   THE TWO COHORTS

   Anderson teaches on an alternating block. Every school day
   belongs to one cohort, they alternate strictly, and each topic
   is taught to Green first and to Silver at the next meeting.
   The two cohorts are different students, not two days with the
   same students, so nothing carries over between them and every
   topic has to land inside one 90-minute block.

   This file is the ONE place the two cohorts are defined. The
   announcements builder, the classroom board, and the Canvas
   event generator all read it, for the same reason the coach
   prompt has one builder: a second copy is a second place for
   the colours and the labels to fall out of agreement, and the
   failure is silent because both copies still render.

   ---------------------------------------------------------
   WHY THESE COLOURS

   The palette is already a set of metals: bronze, gold, iron,
   gunmetal, oxidized steel. So the cohorts are metals too.
   Green Day is verdigris, the patina copper takes with age.
   Silver Day is pewter. They sit inside the brand rather than
   beside it, which a stock green and a stock grey would not.

   Colour is never the only signal. Every surface that marks a
   cohort carries three: the colour, the letter G or S, and the
   shape, a filled seal for Green against an open ring for
   Silver. That survives a projector with the colour washed out,
   a grayscale print, and a reader who cannot separate the hues.

   `ink` is the text-safe value and `mark` is the fill. They are
   the same for Green, whose verdigris is dark enough to read as
   text. Pewter is not: #8A9298 sits at about 2.9:1 on paper,
   under the 3:1 floor even for large text, so Silver keeps a
   darker `ink` and uses `mark` only for rules, seals and fills.
   Do not set Silver text in `mark`. That is the same defect the
   eBook has in writing about antique gold on a cream row.
   ========================================================= */

const COHORTS = {
  green: {
    key: 'green',
    label: 'Green Day',
    short: 'Green',
    letter: 'G',
    metal: 'verdigris',
    mark: '#2F5C46',
    ink: '#2F5C46',
    tint: '#E7EFE9',
    onDark: '#7FB496',
    filled: true
  },
  silver: {
    key: 'silver',
    label: 'Silver Day',
    short: 'Silver',
    letter: 'S',
    metal: 'pewter',
    mark: '#8A9298',
    ink: '#545B5F',
    tint: '#ECEEEF',
    onDark: '#B9C1C6',
    filled: false
  }
};

const ORDER = ['green', 'silver'];

function cohort(key) {
  return COHORTS[String(key || '').toLowerCase()] || null;
}

/* The cohort that follows this one. Used to sanity-check a schedule:
   school days alternate, so two of the same in a row is a typo. */
function nextCohortKey(key) {
  const i = ORDER.indexOf(String(key || '').toLowerCase());
  return i === -1 ? null : ORDER[(i + 1) % ORDER.length];
}

module.exports = { COHORTS, ORDER, cohort, nextCohortKey };
