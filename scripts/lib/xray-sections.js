/**
 * xray-sections.js, the seven classes the Curriculum X-Ray knows about.
 *
 * A section is a cohort letter and a period number: G4 is Green, fourth period.
 * Green and Silver are the alternating-day cohorts (see scripts/lib/cohorts.js),
 * and the number is the class period. The seven classes are independent: they
 * are taught on their own days and do NOT pair by number, so G1 has no special
 * tie to S1. G2 is not an instructional period, so there is no G2.
 *
 * This is the one place the list lives for the X-Ray. It is deliberately not in
 * scripts/lib/classroom-config.js: that file is inlined into every student page,
 * and nothing about who teaches which period belongs in front of a student.
 *
 * Changing a teacher's schedule is a one-line edit here followed by
 * `node scripts/build-xray.js`.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BHXRaySections = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var TEACHERS = [
    { id: 'anderson', name: 'Jeff Anderson' },
    { id: 'kelly', name: 'Mike Kelly' }
  ];

  var SECTIONS = [
    { id: 'g4', label: 'G4', cohort: 'green', period: 4, teacher: 'anderson' },
    { id: 's1', label: 'S1', cohort: 'silver', period: 1, teacher: 'anderson' },
    { id: 's2', label: 'S2', cohort: 'silver', period: 2, teacher: 'anderson' },
    { id: 's3', label: 'S3', cohort: 'silver', period: 3, teacher: 'anderson' },
    { id: 's4', label: 'S4', cohort: 'silver', period: 4, teacher: 'anderson' },
    { id: 'g1', label: 'G1', cohort: 'green', period: 1, teacher: 'kelly' },
    { id: 'g3', label: 'G3', cohort: 'green', period: 3, teacher: 'kelly' }
  ];

  var BY_ID = {};
  SECTIONS.forEach(function (s) { BY_ID[s.id] = s; });

  // Every section named in a piece of text, as ids, each once, in order found.
  // "G1", "g 1", "Period G1 - AP World" and "S3 (2026)" all read. The digit must
  // stand alone, so "G12" is not G1, and a letter in front of the G or S stops it
  // being read (so "AP" or "BIG1" are not). An id that is not one of the seven,
  // such as G2, is not returned.
  function recognizeAll(text) {
    var found = [];
    var re = /(^|[^a-z0-9])([gs])\s*-?\s*([0-9])(?![0-9])/gi;
    var m;
    var s = String(text == null ? '' : text);
    while ((m = re.exec(s)) !== null) {
      var id = (m[2] + m[3]).toLowerCase();
      if (BY_ID[id] && found.indexOf(id) === -1) found.push(id);
      re.lastIndex = m.index + m[1].length + 1;
    }
    return found;
  }

  return { TEACHERS: TEACHERS, SECTIONS: SECTIONS, BY_ID: BY_ID, recognizeAll: recognizeAll };
});
