/* Class Pulse demo data. EVERY STUDENT AND EVERY ANSWER HERE IS INVENTED.
 *
 * Stage A of the build spec runs on invented data only: no real student work is
 * read until ZCS approves (AndersonLogic-OS
 * 04_PRODUCTS/BeHistorical/Class-Pulse-Spec-2026-10-27.md). This file is what the
 * teacher page shows meanwhile.
 *
 * Three kinds of topic:
 *   - Topic 3.2 has invented writing, carried over from the approved mockup. Each
 *     answer is built from one part per criterion, and each part carries the level
 *     it was written to show, the exact words that show it, and a reason.
 *   - Topic 2.3 uses the forty invented answers in class-pulse-calibration.js.
 *   - Every other unit topic shows invented levels only, with no writing, and the
 *     page says so when a cell is opened.
 *
 * The section names and sizes are Jeff's real sections; nothing about any real
 * student is here. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseDemo = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Jeff's sections, 2026-10-27. Green meets each topic one class before Silver.
  const SECTIONS = [
    { id: 'S1', size: 26, cohort: 'Silver' }, { id: 'S2', size: 27, cohort: 'Silver' },
    { id: 'S3', size: 27, cohort: 'Silver' }, { id: 'S4', size: 27, cohort: 'Silver' },
    { id: 'G4', size: 25, cohort: 'Green' }
  ];

  const NAMES = ['Ava Mendoza', 'Mateo Ruiz', 'Priya Shah', 'Jordan Kim', 'Elijah Webb', 'Sofia Greco', 'Liam Torres',
    'Zoe Hart', 'Noah Brandt', 'Amara Okafor', 'Caleb Jensen', 'Lucia Flores', 'Ethan Park', 'Maya Collins',
    'Owen Doyle', 'Nia Adams', 'Gabriel Vance', 'Hannah Lowe', 'Isaiah Nolan', 'Chloe Young', 'Diego Quintero',
    'Leah Zimmer', 'Samuel Ellis', 'Grace Underwood', 'Theo Lindqvist', 'Rosa Delgado', 'Malik Bennett'];

  // [text, quote or null, reason, wrong idea or undefined]. Variant A compares the
  // devshirme (cp1) or uses Versailles and tax farming (cp2); variant B the salaried
  // samurai, or the Taj Mahal and zamindars.
  const WRITTEN = {
    '3.2': {
      cp1: {
        parts: [
          { D: { A: ['The Mughal Empire used the mansabdar system, and the Ottoman Empire used the devshirme.', 'The Mughal Empire used the mansabdar system, and the Ottoman Empire used the devshirme.', 'Names both systems and the empire each belonged to.'],
                 B: ["Akbar's Mughal Empire ranked officials as mansabdars, while Tokugawa Japan paid its samurai salaries.", "Akbar's Mughal Empire ranked officials as mansabdars, while Tokugawa Japan paid its samurai salaries.", 'Names both systems and the empire each belonged to.'] },
            P: { A: ['The mansabdar system was Mughal and the devshirme took boys to serve the sultan.', 'the devshirme took boys to serve the sultan', 'Names both systems and places the mansabdars in the Mughal Empire, but never names the Ottoman Empire.'],
                 B: ['Mansabdars and samurai both served powerful rulers.', 'Mansabdars and samurai', 'Names both systems but not the empire each belonged to.'] },
            N: { A: ['The mansabdars were the soldiers of the Ottoman sultan.', null, 'Puts the mansabdar system in the wrong empire and never names the devshirme.', 'Puts a system in the wrong empire'],
                 B: ['Both systems gave the ruler loyal people.', null, 'Neither system nor either empire is named.'] } },
          { D: { A: ["Both made men depend on the ruler for their position: a mansabdar's rank and land revenue could be taken away, and devshirme boys had no family power to fall back on. The difference is that devshirme recruits were Christian boys taken and converted, while mansabdars were already nobles, many of them Hindu Rajputs.", "a mansabdar's rank and land revenue could be taken away", 'The similarity is about dependence, as the criterion asks, and the difference contrasts who was recruited.'],
                 B: ["Both tied men to the ruler through pay instead of land they owned: a mansabdar's jagir was assigned and moved around, and a samurai lived on a stipend from his lord. They differ because samurai were a hereditary warrior class, while a mansab rank was not passed down to sons.", 'a samurai lived on a stipend from his lord', 'The similarity explains dependence through pay; the difference (hereditary or not) is accurate.'] },
            P: { A: ['Both systems gave the ruler officials who were loyal to him. They were different because the devshirme used boys from Christian families.', 'the devshirme used boys from Christian families', 'Gives a real difference, but the similarity says loyal without saying how they depended on him.'],
                 B: ['Both got paid by the ruler. The samurai were in Japan and the mansabdars were in India.', 'Both got paid by the ruler', 'The similarity points at dependence through pay; the difference is only location.'] },
            N: { A: ['Both the devshirme and the mansabdars were volunteers who signed up to serve the ruler.', null, 'Says devshirme recruits volunteered; they were taken as boys. No accurate similarity or difference.', 'Treats devshirme recruits as volunteers'],
                 B: ['They were both very strong armies.', null, 'No similarity about dependence and no difference.'] } },
          { D: { A: ['They differed because the Ottoman sultans wanted servants with no ties to the old Turkish nobles, while Akbar ruled a mostly Hindu empire and needed to bring powerful Rajput families onto his side.', 'Akbar ruled a mostly Hindu empire and needed to bring powerful Rajput families onto his side', "Describes each ruler's situation and ties it to how each system recruited."],
                 B: ['The Tokugawa shoguns had just ended a long civil war and wanted samurai living on salaries so they could not build private armies, while Akbar needed to hold together a huge, diverse empire by giving many groups ranks he could take back.', 'Tokugawa shoguns had just ended a long civil war', "Describes both situations and connects each to the system's design."] },
            P: { A: ['They were different because the empires were in different places and had different religions.', 'the empires were in different places and had different religions', 'Points toward each situation but does not explain how it shaped the system.'],
                 B: ['Japan had just had a lot of wars, so the shogun wanted control.', 'Japan had just had a lot of wars', "Describes Japan's situation but not the Mughal side."] },
            N: { A: ['They were different because the rulers had different personalities.', null, "No situation is described for either ruler."],
                 B: ['They were different because the rulers had different personalities.', null, "No situation is described for either ruler."] } }
        ],
        unsure: 'I think they were alike but also not really, I need to look at the reading again and fix this part.'
      },
      cp2: {
        parts: [
          { D: { A: ['Louis XIV built the palace of Versailles.', 'Louis XIV built the palace of Versailles', 'Names the building and the ruler.'],
                 B: ['Shah Jahan built the Taj Mahal as a huge Mughal tomb.', 'Shah Jahan built the Taj Mahal', 'Names the building and the ruler.'] },
            P: { A: ['The palace of Versailles made the king look powerful.', 'The palace of Versailles', 'Names the building but not the ruler.'],
                 B: ['Mughal rulers built big tombs and mosques.', 'Mughal rulers built big tombs and mosques', 'Names a kind of building but no specific ruler.'] },
            N: { A: ['Kings used religion.', null, 'No specific idea, artwork, or building.'],
                 B: ['The Taj Mahal was built by the Ottomans.', null, 'Puts the Taj Mahal in the wrong empire.', 'Puts a monument in the wrong empire'] } },
          { D: { A: ['The Ottomans used tax farming, selling the right to collect taxes to private collectors.', 'The Ottomans used tax farming', 'Names the system and the empire, and says what it was.'],
                 B: ['The Mughals relied on zamindars to collect land taxes from peasants.', 'The Mughals relied on zamindars', 'Names the system and the empire.'] },
            P: { A: ['Tax farming was a way to get money.', 'Tax farming', 'Names the system but not the empire.'],
                 B: ['The Mughals collected taxes from farmers.', 'The Mughals collected taxes', 'Names the empire but no specific system.'] },
            N: { A: ['The king made everyone pay.', null, 'No specific system or empire.'],
                 B: ['The zamindars were the Mughal army generals who fought for the emperor.', null, 'Describes zamindars as generals; they collected land revenue.', 'Confuses zamindars with mansabdars'] } },
          { D: { A: ['After the Fronde revolts, Louis XIV made nobles live at Versailles where he could watch them, and the grand palace showed he ruled by divine right. Tax farming gave the Ottoman sultans money up front to pay soldiers for their wars.', 'After the Fronde revolts', 'Gives context for both methods and explains how each strengthened the ruler.'],
                 B: ['Shah Jahan ruled a huge empire of many religions, and the Taj Mahal showed his wealth and Islamic piety. Zamindars brought in steady land revenue that paid the mansabdars and the army.', 'Zamindars brought in steady land revenue that paid the mansabdars and the army', 'Gives context and explains how each method strengthened the emperor.'] },
            P: { A: ['Versailles impressed people so they respected the king, and tax farming paid for things.', 'Versailles impressed people', "Says how each helped but never describes the ruler's situation."],
                 B: ['The Mughal empire was very big so the emperor needed money from the zamindars.', 'The Mughal empire was very big', 'Context for the tax side only; the monument side is missing.'] },
            N: { A: ['This made people respect the king.', null, 'No context and no explanation of how either method worked.'],
                 B: ['This made people respect the king.', null, 'No context and no explanation of how either method worked.'] } }
        ],
        unsure: 'Not sure if this counts, I will fix it before Canvas.'
      }
    }
  };

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function seedOf(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619); return h >>> 0; }

  // One invented class: who is in it, how strong each student is, when each
  // checkpoint gets submitted, and the confidence each one reports (1 to 5, or
  // blank, which is optional on the lesson page).
  function roster(sectionId, topicKey) {
    const section = SECTIONS.find(s => s.id === sectionId) || SECTIONS[1];
    const rnd = mulberry32(seedOf(section.id + '|' + topicKey));
    return NAMES.slice(0, section.size).map((name, i) => {
      const strength = Math.min(.97, Math.max(.06, .2 + rnd() * .7 + (rnd() - .5) * .15));
      const conf = () => rnd() < .1 ? '' : String(Math.min(5, Math.max(1, Math.round(1 + strength * 4 + (rnd() - .5) * 1.8))));
      const absent = rnd() < .04;
      const slow = rnd() < .2 ? 6 : 0;
      return {
        i, name, strength, absent,
        variant: { cp1: rnd() < .5 ? 'A' : 'B', cp2: rnd() < .5 ? 'A' : 'B' },
        confidence: { cp1: conf(), cp2: conf() },
        // Minutes into a 52-minute period. Checkpoint 2 can be left for home.
        submittedAt: { cp1: absent ? null : 17 + rnd() * 10 + slow, cp2: absent || rnd() < .12 ? null : Math.min(51.5, 41 + rnd() * 9 + slow * .5) }
      };
    });
  }

  function levelFor(student, cp, index, difficulty, rnd) {
    if (rnd() < .045) return 'U';
    const v = student.strength + difficulty + (rnd() - .5) * .38;
    return v > .6 ? 'D' : v > .36 ? 'P' : 'N';
  }

  // Everything the page needs for one topic and section. `rows` are what the
  // backup would hold for each checkpoint (text, confidence, completion state);
  // `provider` replays the invented levels through the real engine, so the page
  // exercises the same validation a model's replies would face.
  function build(topicKey, contracts, sectionId, calibration) {
    const students = roster(sectionId, topicKey);
    const rnd = mulberry32(seedOf('levels|' + sectionId + '|' + topicKey));
    const written = WRITTEN[topicKey];
    const replies = new Map();
    const rows = { cp1: [], cp2: [] };
    const cases = calibration && topicKey === '2.3' ? calibration.rows : null;
    const kind = written ? 'written' : cases ? 'calibration' : 'levels';

    for (const cp of ['cp1', 'cp2']) {
      const contract = contracts[cp];
      const n = contract.criteria.length;
      const difficulty = i => (i === 0 ? .18 : i === n - 1 ? -.14 : 0);
      for (const st of students) {
        const key = sectionId + '-' + st.i + '-' + cp;
        if (st.submittedAt[cp] == null) { rows[cp].push({ key, student: st.i, text: '', completionState: 'missing', confidence: '' }); continue; }
        const levels = contract.criteria.map((_, i) => levelFor(st, cp, i, difficulty(i), rnd));
        let text, reply;
        if (kind === 'written') {
          const segs = [];
          let unsureUsed = false;
          reply = { criteria: contract.criteria.map((c, i) => {
            const band = levels[i];
            if (band === 'U') {
              if (!unsureUsed) { segs.push(written[cp].unsure); unsureUsed = true; }
              return { criterionId: c.id, category: 'U', evidence: [], reason: 'The writing says it is unfinished, so this criterion was not judged.', misconceptions: [], uncertainty: ['The student marked this part unfinished.'], reviewRequired: true };
            }
            const [t, quote, reason, wrong] = written[cp].parts[i][band][st.variant[cp]];
            segs.push(t);
            return { criterionId: c.id, category: band, evidence: quote ? [quote] : [], reason, misconceptions: wrong ? [wrong] : [], uncertainty: [], reviewRequired: false };
          }) };
          text = segs.join(' ');
        } else if (kind === 'calibration') {
          // The forty invented 2.3 answers, dealt round the class in order. Some are
          // drafts or unverified snapshots on purpose, and the engine refuses those.
          const pool = cases.filter(r => r.checkpoint === cp);
          const c = pool[st.i % pool.length];
          rows[cp].push({ key, student: st.i, text: c.text, completionState: c.completionState, confidence: st.confidence[cp], caseId: c.id });
          replies.set(cp + '|' + c.text, calibration.replayOutput(c, contract));
          continue;
        } else {
          // No invented writing for this topic: a placeholder sentence the reply
          // can quote, flagged so the page never shows it as a student's words.
          text = 'Invented placeholder answer ' + key + '. No writing exists for this topic yet.';
          reply = { criteria: contract.criteria.map((c, i) => ({
            criterionId: c.id, category: levels[i], evidence: ['D', 'P'].includes(levels[i]) ? ['Invented placeholder answer'] : [],
            reason: 'Invented level. There is no invented writing for this topic yet.', misconceptions: [],
            uncertainty: levels[i] === 'U' ? ['Invented uncertain level.'] : [], reviewRequired: levels[i] === 'U'
          })) };
        }
        replies.set(cp + '|' + text, reply);
        rows[cp].push({ key, student: st.i, text, completionState: 'synthetic-complete', confidence: st.confidence[cp], placeholder: kind === 'levels' });
      }
    }

    const provider = {
      id: 'class-pulse-demo-replay', version: '2026-10-28', kind: 'replay',
      async interpret({ contract, response }) {
        const reply = replies.get(contract.checkpoint + '|' + response.text);
        if (!reply) throw new Error('No invented reply for this response');
        return JSON.parse(JSON.stringify(reply));
      }
    };
    return { kind, students, rows, provider };
  }

  return { SECTIONS, NAMES, WRITTEN, roster, build, mulberry32, seedOf };
});
