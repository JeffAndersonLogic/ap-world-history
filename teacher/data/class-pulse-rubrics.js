/* Class Pulse rubrics: what puts a checkpoint answer at each level, criterion by
 * criterion. The teacher labeling a calibration set and the model reading student
 * work are given the same text, so a disagreement between them is about the answer
 * and not about two private standards.
 *
 * Two layers:
 *   LEVELS and RULES apply to every criterion in the course.
 *   TOPICS[topic][checkpoint] gives, for each checkpoint criterion in order, what each
 *   level looks like in an actual answer. `criterion` repeats the criterion's exact
 *   wording from assets/data/skills-map.js; the engine refuses a rubric whose wording
 *   no longer matches, so an edited checkpoint cannot silently keep an old rubric.
 *
 * The standard is Jeff's, set on 2026-10-29 from his first calibration labels:
 *   - naming the right thing without explaining it is Not yet;
 *   - Demonstrating needs the course's key term, not only a description of it;
 *   - each technology, example or person has to come with what it did;
 *   - an answer that sits between two levels takes the lower one.
 *
 * Topic 2.3 is a DRAFT. Unit 2 of the College Board CED is not yet transcribed into
 * scripts/lib/ced-source/, so its descriptors rest on the checkpoint criteria, the
 * learning targets and docs/UNIT-2-CED-AUDIT.md, which are copies. Check them against
 * the CED before treating them as final. Topics without an entry here are read from
 * LEVELS, RULES and their criteria alone. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseRubrics = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VERSION = '2026-10-29-draft-1';

  const LEVELS = {
    D: 'Demonstrating: the answer does everything this criterion asks, accurately and specifically, using the course\'s key term for the idea. Where the criterion asks to explain or connect, it says how or why, not just that.',
    P: 'Partly there: the answer goes beyond naming but falls short: it explains part of what the criterion asks, explains it accurately without the key term, or makes the connection only in general terms.',
    N: 'Not yet: the part is missing, only names the right thing without explaining it, lists without saying what each did, repeats the prompt, is off topic, or its main claim is historically wrong.',
    U: 'Can\'t tell: the level cannot be judged fairly because the student says it is unfinished, the answer contradicts itself on this point, or it cannot be read. Never for an answer that is simply weak or wrong; that is Not yet.'
  };

  const RULES = [
    'Judge each criterion on its own. One answer can be Demonstrating on one criterion and Not yet on another; do not let the whole answer\'s impression decide every criterion.',
    'Naming the right thing without explaining it is Not yet, not Partly there.',
    'Demonstrating needs the course\'s key term (for example monsoon, compass, astrolabe). An accurate description without the term earns at most Partly there. Spelling of the term never matters.',
    'Each technology, example or person the criterion asks for has to come with what it did. A bare list is Not yet.',
    'Spelling, grammar and sentence style never lower a level.',
    'Accept any historically accurate example, not only the ones the lesson used.',
    'A wrong claim lowers only the criterion it belongs to.',
    'Length is not evidence: a long answer that never does what the criterion asks is Not yet; a short one that does it fully is Demonstrating.',
    'When an answer sits between two levels, choose the lower one and say why in the reason.'
  ];

  const TOPICS = {
    '2.3': {
      status: 'draft',
      cp1: [
        {
          criterion: 'Explain the environmental factor.',
          D: 'Names the monsoon winds and explains their seasonal pattern and how merchants used it: the winds reverse direction with the seasons, so voyages could be timed out and back.',
          P: 'Explains only part of it (the seasonal pattern, or timing trips, but not both), or explains it accurately without naming the monsoons (for example, "seasonal winds let sailors plan both trips").',
          N: 'Names the monsoons or "winds" without explaining them, gives no environmental factor, or gets it wrong (for example, that the monsoons never change direction).'
        },
        {
          criterion: 'Use two technologies.',
          D: 'Names two accurate maritime technologies by their key terms and says what each did: the compass showed direction; the astrolabe measured latitude; larger ships carried more cargo; or another accurate maritime technology with its use.',
          P: 'Names two but says what only one did, names one technology and says what it did, or describes a device accurately without its name (for example, "a magnetic needle showed direction").',
          N: 'Lists technologies without saying what they did, names one without its use, names something that is not a maritime technology (for example gunpowder or paper money), or describes what it did wrongly.'
        },
        {
          criterion: 'Connect both to increased volume or geographic range of exchange.',
          D: 'Connects both the monsoon knowledge and the technologies, each explicitly, to trade itself growing: more goods exchanged, or exchange reaching farther.',
          P: 'Connects only one of the two to trade growing, or connects them only to voyages becoming safer, longer or more dependable without saying that trade grew.',
          N: 'Makes no connection to trade growing, only says they "helped trade", or makes a connection that is historically wrong.'
        }
      ],
      cp2: [
        {
          criterion: 'Use one state-growth example.',
          D: 'Names a trading city or state and explains how trade made it richer or more powerful (for example, Kilwa grew wealthy from taxes on port trade; Malacca controlled the strait and collected revenue; Gujarat\'s ports prospered from the textile trade). Swahili city-states, Gujarat, Malacca or another accurate Indian Ocean example.',
          P: 'Names an accurate trading city or state and says it grew or got rich, without how trade did it.',
          N: 'Names a place only, gives no state example, or gives a wrong one.'
        },
        {
          criterion: 'Use one diaspora or Zheng He example.',
          D: 'Names a specific merchant community, where it settled and what followed (for example, Arab and Persian merchants on the East African coast mixing traditions with local people; Chinese merchants in Southeast Asian ports; Malay communities around the Indian Ocean), or identifies Zheng He as the Ming admiral whose voyages reached Indian Ocean ports and says what they did.',
          P: 'Names the community or Zheng He with one accurate detail but leaves out who, where or what followed (for example, "Zheng He sailed the Indian Ocean").',
          N: 'Names only ("Zheng He."), gives neither, or gets it wrong (for example, Zheng He as a ruler of Malacca or an Ottoman or Mongol figure).'
        },
        {
          criterion: 'Explain how trade growth produced the effect.',
          D: 'For both effects the prompt asks for, explains how growing trade produced each one.',
          P: 'Explains how trade produced one effect but not the other, or both only in general terms.',
          N: 'Does not explain how trade produced either effect, or explains it wrongly (for example, that trade made every culture the same).'
        }
      ]
    }
  };

  return { VERSION, LEVELS, RULES, TOPICS };
});
