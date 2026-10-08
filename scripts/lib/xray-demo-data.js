/**
 * xray-demo-data.js, a made-up class for demonstrating the Curriculum X-Ray.
 *
 * EVERY STUDENT HERE IS INVENTED. No record, name, answer or id comes from a real
 * student, and this file never reads one. It exists so the X-Ray can be judged on
 * whether it is useful to a teacher before it is ever pointed at real records,
 * and so its detectors have something known to detect.
 *
 * It is deterministic: the same seed makes the same class on every machine, so a
 * test can assert exact results and a screenshot never changes by itself.
 *
 * THE CLASS. Seven invented sections, named as the real ones are: G1 and G3 are
 * Mike Kelly's, G4 and S1 to S4 are Jeff Anderson's. A record carries no section,
 * exactly as a real one does not. Each student has an account id; which class that
 * account belongs to comes only from the invented roster files generated here
 * (a Firebase user export and a Canvas gradebook export), joined by
 * scripts/lib/xray-roster.js, which is the same path real files will take.
 *
 * WHAT IS PLANTED, ON PURPOSE. These patterns are put in so the flags can be
 * checked against a known answer. They are NOT findings about any real room, and
 * the page says so beside the demo banner:
 *   - S2, Evidence Lab: most answers state a general claim and mention none of the
 *     expected terms.                                              (Terms missing)
 *   - S3, Primary Source: fewer than half of enrolled students have a record.
 *                                                                    (Few records)
 *   - G3, Checkpoint 1: nearly everyone names the wind and the technologies.
 *                                                              (Terms widely used)
 *   - G1, Checkpoint 2: six students rate themselves Could teach it and wrote a
 *     single short sentence.                                (Confident but thin)
 *   - S2, Evidence Lab: three answers changed in the last minute, which the page
 *     sets aside as possibly still being typed.
 *   - A few enrolled students in every section have no backup account yet, three
 *     backup accounts are on no roster, one staff account is in the export, the
 *     Canvas file carries its usual "Points Possible" and test-student rows plus a
 *     G2 section that is not a class, and one record names a prompt that is not in
 *     the topic's catalog, so each of those paths is exercised.
 *
 * Records are the shape the database stores (see firestore/firestore.rules),
 * except that updatedAt is plain milliseconds. The ids start `demo-`.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BHXRayDemo = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var NOW = Date.UTC(2026, 9, 8, 19, 30, 0);
  var SEED = 20261008;

  var ORDER = [
    'map-check-response', 'first10-q1', 'first10-q2', 'first10-q3', 'skill-builder-response',
    'checkpoint-one-response', 'evidence-response', 'primary-source-response', 'checkpoint-two-response'
  ];

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ── Answer banks. Written to read like a ninth grader's, not like a textbook.
  // Each slot has three tiers: a student who has it, one who half has it, one
  // who is thin. Variants within a tier are picked at random.

  var BANK = {
    'map-check-response': [
      ['Predictable winds meant merchants could plan a round trip, so the ports along the routes got rich from the goods and the taxes. People from lots of places stayed in those ports, so languages, religions and foods mixed there.',
       'Because the winds came on a schedule, ships could go one way and come back later. Port cities made money off every ship and also ended up with many kinds of people living in them.'],
      ['The winds were predictable so ships could trade easily and the ports got rich. Lots of different people met there.',
       'Ports on the routes got wealthy because ships stopped there, and people from different places mixed.'],
      ['Ports got rich because of trade.', 'Winds helped the ships and people mixed.']
    ],
    'first10-q1': [
      ['Sailors learned the monsoon pattern, so they knew when to leave and when to come back. The compass let them keep their direction on open water, so trade grew over longer distances.',
       'Knowing the monsoon winds meant a trip was less of a gamble. Bigger ships carried more goods, so each trip was worth more.'],
      ['Monsoon winds helped ships go places and a new tool helped them find their way, so there was more trade.',
       'They knew the winds and used better ships so trade got bigger.'],
      ['The wind helped trade.', 'They had better boats.']
    ],
    'first10-q2': [
      ['On the Swahili Coast, Kilwa grew rich selling gold, and Arab and Persian merchants settled there, which brought Islam and a mix of languages. The more trade came through, the stronger the city rulers got.',
       'In Malacca, rulers charged fees on ships, which made the city powerful. Chinese and Malay merchants lived there and the city became very mixed.'],
      ['Gujarat got rich from trade and merchants from other places came. The city changed because there were more people.',
       'Malacca grew because ships stopped there and different merchants came.'],
      ['The Swahili Coast got bigger.', 'Merchants went to Malacca.']
    ],
    'first10-q3': [
      ['Zheng He sailed to ports that were already trading with each other, so China was joining an old system, not starting one. The Ming state used its fleet to show power but the network already ran on merchants.',
       'His voyages show that by the 1400s the Indian Ocean already had trading cities and merchant communities from East Africa to Southeast Asia.'],
      ['It shows the Indian Ocean already had lots of trade, and China just came into it.',
       'Zheng He found ports that already traded, so the network was already big.'],
      ['It was a big trade area.', 'China sent big ships.']
    ],
    'skill-builder-response': [
      ['The monsoon winds changed direction each season, and the compass helped ships hold a course, so together they lowered the risk of a long voyage. In Kilwa this meant more ships came, so the city collected more from trade and grew.',
       'Merchants used the monsoon winds to schedule trips, and bigger ships cut the cost per load. Calicut grew because more ships could stop there and unload.'],
      ['The winds helped and the compass helped, so trade went up and the port got bigger.',
       'Knowing the monsoon made trips safer, and better ships made them cheaper, so ports like Malacca grew.'],
      ['Winds and a compass made trade easier.', 'Ships got better so ports grew.']
    ],
    'checkpoint-one-response': [
      ['Monsoon winds blew one way in summer and the other way in winter, so merchants could plan a trip out and back. The compass kept ships on course away from land, and the astrolabe let sailors find their position, so they could cross open water. Together these made long trips safer, so trade grew across a wider area.',
       'Knowing the monsoon winds meant sailors could count on the seasons. Larger ship designs carried more cargo and the compass helped them navigate, so each voyage was worth more and went farther.'],
      ['The monsoon helped ships because the winds changed with the seasons. A compass helped sailors find their way, so more trade happened.',
       'Winds that you could predict and bigger ships made trade grow, because ships could carry more.'],
      ['The winds helped trade grow and so did better ships.', 'Sailors used the monsoon.']
    ],
    'evidence-response': [
      ['I claim environmental knowledge mattered more, because the monsoon winds made round trips predictable, and that is why the Indian Ocean network was already running before big states joined. Kilwa grew from the gold trade, and diasporic communities of merchants settled in the ports and spread Islam, so trade created the state power, not the other way around. States still mattered, because Ming rulers paid for Zheng He, which shows political power also pushed the trade.',
       'Both mattered, but the winds came first. Without monsoon winds, ships could not make the trip, and Kilwa shows the result: the gold trade made it rich. Diasporic communities then carried Islam through the Indian Ocean, which tied ports together. Still, a strong state like Ming China could add to the trade.'],
      ['I think the wind mattered more because ships needed it. Kilwa got rich from trade, and merchants moved to the ports, so trade grew. But states also helped by building up ports.',
       'Both helped trade grow. The monsoon winds let ships travel, and the rulers of port cities made money from it. The Ming also sent ships so power mattered too.'],
      ['Trade grew because of the environment and also because of states. They both mattered a lot.',
       'I think states mattered more because rulers wanted the money, but the environment helped too.']
    ],
    'primary-source-response': [
      ['(a) Ibn Battuta describes Kilwa as one of the most beautiful and well-built towns, and says its ruler gives a fifth of the plunder to charity, which shows wealth. (b) The gold trade from Sofala came through Kilwa, so revenue went to the ruler and the city built stone buildings. (c) He saw the Swahili Coast as a visiting Muslim traveler, so he notices what matches his own world, but he does not explain how ordinary people or enslaved people lived.',
       '(a) He says that Kilwa was built of stone and its sultan was generous. (b) Trade in gold from Sofala made the rulers rich and let them build, which is urban growth. (c) He was a traveler and a Muslim scholar, so he wrote about elites and religion and probably missed what poorer people thought.'],
      ['(a) The passage says Kilwa was a beautiful city. (b) Trade made the city rich so it grew. (c) He was only visiting so he might not know everything.',
       '(a) Ibn Battuta says the sultan was humble and generous. (b) Gold trade brought money to the rulers. (c) He saw the rich people not the regular people.'],
      ['(a) He liked the city. (b) Trade made money. (c) He was a visitor.', '(a) It was nice. (b) They traded. (c) He was only there a little while.']
    ],
    'checkpoint-two-response': [
      ['One effect was state growth: on the Swahili Coast, Kilwa taxed the gold trade, so its rulers grew powerful and built stone mosques. A second effect was the spread of merchant communities, because Arab and Persian merchants settled in East African ports and brought Islam and the Arabic language, which mixed with local culture.',
       'Trade made Malacca a strong state, because its rulers charged fees on every ship that stopped. It also brought Chinese merchants and Malay communities into the same city, and Zheng He visited, which showed that even a huge state saw the port as important.'],
      ['Trade made cities like Gujarat richer and more powerful. It also meant that Arab and Persian merchants lived in the ports and changed the culture there.',
       'The Swahili Coast cities got bigger because of trade, and Zheng He came to the ports from China so more people met.'],
      ['Trade made cities grow and mixed cultures.', 'Cities got bigger and people met.']
    ]
  };

  // More variants, so a teacher reading the demo does not see the same sentence
  // twenty times. Tier 2 of the Evidence Lab deliberately avoids every authored
  // term, including the single words a partial match would accept, because that
  // is the planted Floor.
  var EXTRA = {
    'map-check-response': [
      ['Since ships could count on the winds, port cities on the routes collected trade from everywhere, and the sailors and merchants ended up living side by side, so the ports were both rich and diverse.'], [], []
    ],
    'first10-q1': [[], ['The monsoon helped sailors know when to go and a compass helped them steer, so trade could grow.'], []],
    'checkpoint-one-response': [
      ['The monsoon winds reversed with the seasons, which let merchants count on a ride out and a ride back. With the compass they could steer when they could not see the coast, and the astrolabe told them how far north or south they were. Because voyages were safer, more merchants made them, and trade spread.'],
      ['Sailors used the monsoon to go and return, and the compass helped them steer, so there was more trade over farther places.'],
      ['Winds helped them sail and ships got better.']
    ],
    'evidence-response': [
      ['My claim is that the monsoon winds mattered more, because merchants could not even start the trip without them. Kilwa\'s gold trade grew because ships arrived on schedule, and diasporic communities formed when merchants stayed behind in ports and brought Islam with them. Still, states mattered, since the rulers of Malacca protected the harbor, so power helped the winds pay off.'],
      ['I say both mattered. The monsoon winds made travel possible, and Kilwa grew because of gold trade. But rulers also made rules for the ports.'],
      ['I think the environment mattered because ships needed it for trade, but states mattered too because they built the ports.',
       'States and the environment both helped trade, and I cannot say one mattered much more than the other.',
       'The environment gave people a reason to travel, but it took rulers and armies to keep the routes safe, so I think it was about equal.']
    ],
    'checkpoint-two-response': [
      ['First, the Swahili Coast cities such as Kilwa got powerful because trade passed through them and their rulers taxed it. Second, Malay communities and Chinese merchants settled in port cities like Malacca, so these ports became places where many cultures lived together.'],
      ['Gujarat became a rich trading state. Also Zheng He\'s voyages showed that China wanted to be part of the ocean trade.'],
      ['Trade made some places powerful and made cultures blend together.']
    ]
  };
  Object.keys(EXTRA).forEach(function (slot) {
    EXTRA[slot].forEach(function (variants, tier) {
      variants.forEach(function (v) { BANK[slot][tier].push(v); });
    });
  });

  var THIN_CONFIDENT = [
    'Trade made the Swahili Coast powerful.',
    'Cities got big and people mixed.',
    'It made Malacca stronger.',
    'More trade meant more power.',
    'Merchants changed the ports.',
    'Trade made the cities rich.'
  ];

  var DRAFTS = [
    'I think the monsoon winds mattered more than the states because the winds are what let ships',
    'Both mattered but the winds came first, since without the monsoon winds',
    'The Kilwa gold trade shows that'
  ];

  function pick(rand, list) { return list[Math.floor(rand() * list.length)]; }

  function tierFor(strength, rand) {
    var x = strength + (rand() - 0.5) * 0.3;
    return x > 0.62 ? 0 : x > 0.34 ? 1 : 2;
  }

  function confidenceFor(strength, tier, rand, sectionBias) {
    var base = 3.6 - tier * 0.8 + (strength - 0.5) * 1.2 + sectionBias + (rand() - 0.5) * 1.4;
    return Math.max(1, Math.min(5, Math.round(base)));
  }

  function lib(name, key) {
    if (typeof module === 'object' && typeof require === 'function') return require('./' + name);
    return self[key];
  }

  // Enrolled students per section, and how many of them have never signed in.
  var SIZES = { g4: 25, s1: 24, s2: 23, s3: 21, s4: 26, g1: 22, g3: 20 };
  var NO_ACCOUNT = { g4: 2, s1: 1, s2: 2, s3: 3, s4: 1, g1: 1, g3: 2 };
  var STRENGTH = { g1: 0.6, g3: 0.66, g4: 0.62, s1: 0.5, s2: 0.46, s3: 0.5, s4: 0.52 };
  var BASE_RESPOND = [1, 1, 0.98, 0.96, 0.95, 0.94, 0.9, 0.86, 0.9];
  var CANVAS_NAME = {
    g1: 'G1 - AP World History (Kelly)', g3: 'G3 - AP World History (Kelly)', g4: 'G4 AP World History',
    s1: 'S1 AP World History', s2: 'S2 AP World History', s3: 'S3 AP World History', s4: 'S4 AP World History'
  };

  function two(n) { return ('0' + n).slice(-2); }
  function loginFor(id, n) { return 'demo' + id + two(n); }
  function csvCell(v) { v = String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }

  function makeDemo() {
    var Sections = lib('xray-sections.js', 'BHXRaySections');
    var Roster = lib('xray-roster.js', 'BHXRayRoster');
    var rand = mulberry32(SEED);
    var records = [];
    var users = [];
    var canvasRows = [];
    var minute = 60000;
    var ids = Sections.SECTIONS.map(function (x) { return x.id; });

    function rec(uid, slotId, text, confidence, ageMinutes) {
      return {
        tenantId: 'demo', studentId: uid, courseId: 'apwh', topicKey: '2-3', slotId: slotId,
        text: text, confidence: confidence, createdAt: NOW - ageMinutes * minute - 30 * minute,
        updatedAt: NOW - ageMinutes * minute, clientId: 'demo-device', schemaVersion: 1
      };
    }

    // Planted: six students in G1 are confident and thin on Checkpoint 2.
    var thinG1 = {};
    [2, 5, 9, 13, 17, 21].forEach(function (i) { thinG1[i] = true; });
    var draftsS2 = { 19: 0, 20: 1, 21: 2 };   // three S2 students with accounts are mid-sentence

    ids.forEach(function (id) {
      var size = SIZES[id];
      var withAccount = size - NO_ACCOUNT[id];
      for (var i = 1; i <= size; i++) {
        canvasRows.push({ id: id, n: i });
        if (i > withAccount) continue;                    // enrolled, never signed in
        var uid = 'demo-' + id + '-' + two(i);
        users.push({ localId: uid, email: loginFor(id, i) + '@' + Roster.STUDENT_DOMAIN });
        var strength = Math.max(0.05, Math.min(0.98, STRENGTH[id] + (rand() - 0.5) * 0.7));
        ORDER.forEach(function (slotId, idx) {
          var chance = BASE_RESPOND[idx];
          if (id === 's3' && slotId === 'primary-source-response') chance = 0.4;   // planted
          if (rand() > chance) return;
          var tier = tierFor(strength, rand);

          if (id === 'g3' && slotId === 'checkpoint-one-response') tier = rand() < 0.88 ? 0 : 1;   // planted
          if (id === 's2' && slotId === 'evidence-response') tier = rand() < 0.92 ? 2 : tier;      // planted

          var text = pick(rand, BANK[slotId][tier]);
          var conf = confidenceFor(strength, tier, rand, strength > 0.55 ? 0.15 : -0.2);
          if (id === 'g1' && slotId === 'checkpoint-two-response' && thinG1[i]) {   // planted
            text = pick(rand, THIN_CONFIDENT);
            conf = 5;
          }
          if (id === 's2' && slotId === 'evidence-response' && i in draftsS2) return;   // replaced below

          // Answers are written over the course of a period, oldest first.
          var age = 60 + (ORDER.length - idx) * 6 + Math.floor(rand() * 5);
          records.push(rec(uid, slotId, text, conf, age));
        });
        if (id === 's2' && i in draftsS2) {
          records.push(rec(uid, 'evidence-response', DRAFTS[draftsS2[i]], 3, 0.4 + draftsS2[i] * 0.1));
        }
      }
    });

    // Three backup accounts that are on no roster (another teacher's students,
    // say). Their answers have a real account and no class.
    for (var u = 1; u <= 3; u++) {
      var xid = 'demo-x-0' + u;
      users.push({ localId: xid, email: 'demoother0' + u + '@' + Roster.STUDENT_DOMAIN });
      [1, 5, 6].forEach(function (idx) {
        records.push(rec(xid, ORDER[idx], pick(rand, BANK[ORDER[idx]][1]), 3, 90 + idx));
      });
    }
    // A staff account in the export, which must never be filed into a class.
    users.push({ localId: 'demo-staff-01', email: 'demo.teacher@zcs.k12.in.us' });

    // One record naming a slot that is not in the topic's catalog.
    records.push(rec('demo-g1-03', 'beintheroom-response',
      'If I were the Kilwa sultan I would keep the harbor open to every merchant.', 4, 100));

    // The two files, as the real exports will look.
    var firebaseText = JSON.stringify({ users: users.map(function (x) {
      return { localId: x.localId, email: x.email, emailVerified: true, createdAt: '1759800000000', providerUserInfo: [{ providerId: 'google.com' }] };
    }) }, null, 2);

    var lines = ['Student,ID,SIS User ID,SIS Login ID,Section,Assignment 1 (1)',
      '    Points Possible,,,,,10',
      '"Student, Test",9999,,teststudent,G4 AP World History,'];
    canvasRows.forEach(function (r) {
      lines.push([csvCell('Demo, Student ' + r.id.toUpperCase() + '-' + two(r.n)), 1000 + lines.length, 5000 + lines.length,
        loginFor(r.id, r.n), CANVAS_NAME[r.id], ''].map(csvCell).join(','));
    });
    // Rows a real export carries that are not one of the seven classes.
    lines.push(['"Demo, Student G2-01"', 2001, 6001, 'demog201', 'G2 Advisory', ''].join(','));
    lines.push(['"Demo, Student G2-02"', 2002, 6002, 'demog202', 'G2 Advisory', ''].join(','));
    lines.push(['"Demo, Student DUAL-01"', 2003, 6003, 'demodual01', '"G4 AP World History, S1 AP World History"', ''].join(','));
    var canvasText = lines.join('\r\n') + '\r\n';

    var roster = Roster.buildClassList({ firebaseText: firebaseText, canvasText: canvasText });

    return {
      synthetic: true,
      nowMs: NOW,
      topicKey: '2-3',
      sections: Sections.SECTIONS,
      records: records,
      files: { firebaseText: firebaseText, canvasText: canvasText },
      roster: roster
    };
  }

  return { makeDemo: makeDemo, NOW: NOW, SEED: SEED, ORDER: ORDER };
});
