/**
 * xray-core.js, the Curriculum X-Ray's calculations.
 *
 * One file, two homes: Node (the offline test) and the browser (teacher/xray.html,
 * which inlines this file through scripts/build-xray.js). It is plain functions.
 * It reads nothing, stores nothing, sends nothing, and calls no AI. Hand it
 * backed-up response records and a catalog of the topic's prompts, and it hands
 * back what it can honestly say.
 *
 * WHAT IT CAN AND CANNOT SAY IS WRITTEN DOWN, IN CONTRACT BELOW.
 * Every signal this file emits has a row there, naming what it can tell a teacher
 * and, just as important, what it cannot. The page prints the row beside the
 * figure, and the test fails if a signal exists without one. That is the whole
 * defense against a dashboard that looks more intelligent than it is: a count of
 * how much a student wrote is a count of how much a student wrote.
 *
 * WHAT IT DELIBERATELY DOES NOT DO
 *   - It never decides whether an answer is correct. That is a judgment about
 *     meaning, which needs a person or a validated AI, and neither is here.
 *   - It never combines signals into a score, a level or a rank, and never
 *     assigns one to a student. This follows the rule on Skills Lens Panel 10.
 *   - It never names a student. A record carries an opaque id and nothing else,
 *     and the id is shown as a short code.
 *
 * THE THRESHOLDS BELOW ARE STARTING GUESSES. They are named constants with tests,
 * so the first real classes can tune them in one place. A flag is a prompt to go
 * and read some answers, and is worded that way everywhere it is shown.
 *
 * LATER SEMANTIC ANALYSIS. Every normalized response carries an `observations`
 * list, each tagged with its source ('rule' today). A validated AI analysis adds
 * observations with source 'ai' and is shown separately and labelled provisional.
 * Phase A flags are computed from 'rule' observations only, so adding the second
 * source cannot change what the first says.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BHXRay = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var CONFIDENCE_WORDS = { 1: 'Lost', 2: 'Shaky', 3: 'Getting there', 4: 'Solid', 5: 'Could teach it' };

  var THRESHOLDS = {
    minN: 5,                 // under this many answers, a figure is shown but labelled thin and nothing is flagged
    settleMinutes: 5,        // an answer changed more recently than this may still be being typed
    skippedBelow: 0.6,       // responded / section size under this: Skipped
    thinWords: 12,           // an answer under this many words is short
    confidentAt: 4,          // Solid or Could teach it
    confidentThinShare: 0.2, // share of answers that are confident and thin
    confidentThinMin: 3,     // and at least this many of them
    floorShare: 0.6,         // Floor: at least this share of answers mention none of the terms, even in part
    ceilingTerms: 3,         // a ceiling answer matches this many terms in full (or all of them, if fewer)
    ceilingShare: 0.8        // Ceiling: at least this share of answers are ceiling answers
  };

  var CONTRACT = {
    responded: {
      name: 'Responded',
      tells: 'How many backup records exist for this prompt.',
      cannotTell: 'That a student did not do the work. A student who was offline or never signed in leaves no record, so this is a floor.'
    },
    length: {
      name: 'Length',
      tells: 'How much was written, in words.',
      cannotTell: 'Quality, accuracy or effort. A long answer can be wrong and a short one can be exactly right.'
    },
    terms: {
      name: 'Evidence terms',
      tells: 'Whether the terms the lesson authors expect appear in the answer, in full or in part.',
      cannotTell: 'Whether a term was used correctly, or whether a student who used different words understood the idea.'
    },
    confidence: {
      name: 'Confidence',
      tells: 'What the student said about how secure they feel, on a scale of 1 to 5.',
      cannotTell: 'Whether the student is right.'
    },
    flags: {
      name: 'Flags',
      tells: 'Which prompts and answers are worth a closer read.',
      cannotTell: 'A diagnosis. A flag points at where to look and never says what is wrong.'
    },
    ai: {
      name: 'AI reasoning analysis',
      tells: 'A provisional interpretation of an answer. Not available yet.',
      cannotTell: 'A fact. It needs validating against teacher-reviewed answers before it is trusted, and it will always be labelled provisional.'
    }
  };

  // The ids are the technical names the design record and the tests use. The
  // labels are what a teacher reads, in plain words. `caveat` is the one sentence
  // that must travel with the flag wherever it is shown, because each of these is
  // easy to read as more than it is. The full contract sits behind a disclosure;
  // this sentence never does.
  var FLAG_DEFS = {
    floor: {
      label: 'Terms missing', glyph: 'M',
      caveat: 'This does not show the explanation is wrong. Students may have used different words.'
    },
    confidentThin: {
      label: 'Confident but thin', glyph: 'T',
      caveat: 'A short answer can be right, and confidence is the student\'s own report.'
    },
    skipped: {
      label: 'Few records', glyph: 'R',
      caveat: 'Missing records do not prove students skipped the work. Someone offline or not signed in leaves no record.'
    },
    ceiling: {
      label: 'Terms widely used', glyph: 'W',
      caveat: 'Matching terms does not show they were used correctly. It may also mean the prompt is not separating anyone.'
    }
  };

  // The order the page lists priorities in: the instructional signals first, then
  // the missing-records signal, then the one that may simply be good news.
  var PRIORITY_ORDER = ['floor', 'confidentThin', 'skipped', 'ceiling'];

  var STOP = { and: 1, the: 1, of: 1, for: 1, with: 1, from: 1, that: 1, this: 1, into: 1 };

  // ── small helpers ──────────────────────────────────────────────────────────

  function median(list) {
    if (!list.length) return null;
    var a = list.slice().sort(function (x, y) { return x - y; });
    var m = Math.floor(a.length / 2);
    return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
  }

  function toMs(value) {
    if (value == null) return null;
    if (typeof value === 'number') return value;
    if (value instanceof Date) return value.getTime();
    if (typeof value === 'string') { var t = Date.parse(value); return isNaN(t) ? null : t; }
    if (typeof value === 'object' && typeof value.seconds === 'number') return value.seconds * 1000;
    return null;
  }

  function countWords(text) {
    var m = String(text || '').trim().match(/\S+/g);
    return m ? m.length : 0;
  }

  // A short, opaque label for a student id. Not reversible by reading it, and
  // shown instead of any name. FNV-1a, because nothing here needs a real hash.
  function studentCode(id) {
    var h = 2166136261;
    var s = String(id);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return 'S-' + ('00000' + h.toString(36).toUpperCase()).slice(-5);
  }

  function topicIdFromKey(key) {
    return String(key || '').replace(/^(\d+)-(\d+)$/, '$1.$2');
  }

  // ── term matching ──────────────────────────────────────────────────────────
  //
  // A phrase match alone undercounts a student who writes "monsoon" for "monsoon
  // winds", and a Floor flag built on that would blame the prompt for the
  // student's phrasing. So each term is matched three ways, strongest first:
  //   full     the phrase appears, or every content word of it appears
  //   partial  some content words appear
  //   none
  // Floor looks at full + partial (any mention at all). Ceiling looks at full
  // only. Both asymmetries lean toward raising fewer flags.

  // Only a plural "s" is stripped, so winds matches wind and merchants matches
  // merchant. Anything cleverer starts matching words that are not the term.
  function stem(word) {
    return word.length > 3 && /[^s]s$/.test(word) ? word.slice(0, -1) : word;
  }

  function contentWords(phrase) {
    return (String(phrase).toLowerCase().match(/[a-z0-9']+/g) || []).filter(function (w) {
      return w.length >= 3 && !STOP[w];
    }).map(stem);
  }

  function wordSet(text) {
    var set = {};
    (String(text).toLowerCase().match(/[a-z0-9']+/g) || []).forEach(function (w) { set[stem(w)] = true; });
    return set;
  }

  // promptWords, when given, are the words of the prompt itself. A student
  // echoes the prompt without knowing anything, so a word the prompt already
  // contains never earns a PARTIAL match ("trade" in "gold trade" would
  // otherwise hit nearly every answer). The whole term, matched in full, always
  // counts, because that is a real mention of the term.
  function matchTerm(term, lowerText, words, promptWords) {
    if (lowerText.indexOf(String(term).toLowerCase()) !== -1) return 'full';
    var cw = contentWords(term);
    if (!cw.length) return 'none';
    var hit = cw.filter(function (w) { return words[w]; }).length;
    if (hit === cw.length) return 'full';
    var echoed = promptWords || {};
    var distinctHit = cw.filter(function (w) { return !echoed[w] && words[w]; }).length;
    return distinctHit > 0 ? 'partial' : 'none';
  }

  // ── normalizing ────────────────────────────────────────────────────────────

  var SUPPORT = { 'Checkpoint 1': 'independent', 'Checkpoint 2': 'coached', 'BeInTheRoom': 'coached' };

  // One stored record in, one in-memory shape out. Nothing here is written back.
  // `observations` is where later analyses attach, each tagged with its source.
  // `section` is the class from the roster join, when there is one. It wins over
  // anything written on the record, because the roster is the authority on who is
  // in which class and a record's own field is only what a device said.
  function normalizeRecord(rec, section) {
    var text = String(rec.text == null ? '' : rec.text);
    var conf = typeof rec.confidence === 'number' && rec.confidence >= 1 && rec.confidence <= 5 ? rec.confidence : null;
    var n = {
      code: studentCode(rec.studentId),
      section: section ? String(section) : (rec.sectionId ? String(rec.sectionId) : 'unassigned'),
      topicKey: rec.topicKey,
      slotId: rec.slotId,
      text: text,
      words: countWords(text),
      confidence: conf,
      updatedAtMs: toMs(rec.updatedAt),
      observations: []
    };
    n.observations.push({ source: 'rule', signal: 'length', value: n.words });
    if (conf != null) n.observations.push({ source: 'rule', signal: 'confidence', value: conf });
    return n;
  }

  // The topic's prompts, in the order a student meets them, taken from the
  // generated skills map so no prompt text is ever retyped here.
  function buildCatalog(skillsMapTopics, topicId) {
    var t = skillsMapTopics && skillsMapTopics[topicId];
    if (!t) return null;
    return {
      topicId: topicId,
      title: t.title,
      unitTitle: t.unitTitle,
      slots: t.order.filter(function (id) { return t.slots[id]; }).map(function (id) {
        var s = t.slots[id];
        return {
          slotId: id,
          module: s.module || id,
          prompt: s.prompt || '',
          terms: (s.terms || []).slice(),
          support: SUPPORT[s.module] || 'unspecified'
        };
      })
    };
  }

  // ── analysis ───────────────────────────────────────────────────────────────

  function analyzeSlot(slot, answers, pending, size, T) {
    var n = answers.length;
    var out = {
      slotId: slot.slotId, module: slot.module, prompt: slot.prompt, support: slot.support,
      hasTerms: slot.terms.length > 0, n: n, pending: pending, size: size,
      // An answer set aside as possibly still being typed is still a student who responded.
      respondedShare: size ? (n + pending) / size : null,
      thin: n < T.minN,
      words: null, confidence: null, terms: null, flags: [], readFirst: [], observations: 0
    };
    if (!n) {
      if (!out.thin && size && out.respondedShare < T.skippedBelow) out.flags.push(flag('skipped',
        pending + ' of ' + size + ' have a backup record for this prompt.'));
      return out;
    }

    var words = answers.map(function (a) { return a.words; });
    out.words = {
      median: median(words), min: Math.min.apply(null, words), max: Math.max.apply(null, words),
      thinCount: words.filter(function (w) { return w < T.thinWords; }).length
    };

    var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    var blank = 0;
    answers.forEach(function (a) { if (a.confidence == null) blank++; else counts[a.confidence]++; });
    out.confidence = { counts: counts, blank: blank, rated: n - blank };

    var perAnswer = answers.map(function (a) { return { a: a, full: 0, partial: 0 }; });
    if (out.hasTerms) {
      var promptWords = wordSet(slot.prompt);
      var table = slot.terms.map(function (t) { return { term: t, full: 0, partial: 0 }; });
      perAnswer.forEach(function (p) {
        var lower = p.a.text.toLowerCase();
        var ws = wordSet(p.a.text);
        slot.terms.forEach(function (t, i) {
          var m = matchTerm(t, lower, ws, promptWords);
          if (m === 'full') { table[i].full++; p.full++; }
          else if (m === 'partial') { table[i].partial++; p.partial++; }
        });
        p.a.observations.push({ source: 'rule', signal: 'terms', value: { full: p.full, partial: p.partial, of: slot.terms.length } });
      });
      // The term lists are menus, not checklists: Checkpoint 2 asks for a few of
      // seven acceptable examples. So an answer is judged on how many terms it
      // mentions, never on what share of the whole list it covers.
      var needed = Math.min(T.ceilingTerms, slot.terms.length);
      out.terms = {
        table: table,
        floorAnswers: perAnswer.filter(function (p) { return p.full + p.partial === 0; }).length,
        ceilingAnswers: perAnswer.filter(function (p) { return p.full >= needed; }).length
      };
    }

    // Confident but thin: said Solid or Could teach it, and either wrote little
    // or, where terms exist, mentioned none of them even in part.
    var ct = perAnswer.filter(function (p) {
      if (p.a.confidence == null || p.a.confidence < T.confidentAt) return false;
      return p.a.words < T.thinWords || (out.hasTerms && p.full + p.partial === 0);
    });
    out.confidentThin = ct.length;

    if (!out.thin) {
      if (size && out.respondedShare < T.skippedBelow) out.flags.push(flag('skipped',
        (n + pending) + ' of ' + size + ' have a backup record for this prompt.'));
      if (out.hasTerms && out.terms.floorAnswers / n >= T.floorShare) out.flags.push(flag('floor',
        out.terms.floorAnswers + ' of ' + n + ' answers mention none of the expected terms, even in part.'));
      if (out.hasTerms && out.terms.ceilingAnswers / n >= T.ceilingShare) out.flags.push(flag('ceiling',
        out.terms.ceilingAnswers + ' of ' + n + ' answers match at least ' + Math.min(T.ceilingTerms, slot.terms.length) + ' of the expected terms in full.'));
      if (ct.length >= T.confidentThinMin && ct.length / n >= T.confidentThinShare) out.flags.push(flag('confidentThin',
        ct.length + ' of ' + n + ' said Solid or Could teach it with a short answer or none of the terms.'));
    }

    // A few answers to read first, chosen by rule, never by judgment.
    var picked = {};
    var list = [];
    function add(p, why) {
      if (list.length >= 6 || picked[p.a.code]) return;
      picked[p.a.code] = true;
      list.push({ code: p.a.code, section: p.a.section, confidence: p.a.confidence, words: p.a.words, text: p.a.text, why: why });
    }
    ct.slice().sort(function (x, y) { return (y.a.confidence - x.a.confidence) || (x.a.words - y.a.words); })
      .slice(0, 3).forEach(function (p) { add(p, 'Confident, but short or missing the terms'); });
    perAnswer.slice().sort(function (x, y) { return x.a.words - y.a.words; })
      .slice(0, 2).forEach(function (p) { add(p, 'One of the shortest'); });
    var med = out.words.median;
    perAnswer.slice().sort(function (x, y) { return Math.abs(x.a.words - med) - Math.abs(y.a.words - med); })
      .slice(0, 2).forEach(function (p) { add(p, 'A typical length'); });
    out.readFirst = list;
    return out;
  }

  function flag(id, why) {
    return { id: id, label: FLAG_DEFS[id].label, glyph: FLAG_DEFS[id].glyph, caveat: FLAG_DEFS[id].caveat, why: why };
  }

  // opts: records, catalog, section ('all' or a section id), sectionSizes
  // ({ id: students }), nowMs, thresholds (optional overrides).
  function analyze(opts) {
    var T = Object.assign({}, THRESHOLDS, opts.thresholds || {});
    var catalog = opts.catalog;
    var nowMs = opts.nowMs;
    var section = opts.section || 'all';
    var sizes = opts.sectionSizes || {};
    var bySlot = {};
    catalog.slots.forEach(function (s) { bySlot[s.slotId] = true; });

    var topicRecords = (opts.records || []).filter(function (r) { return topicIdFromKey(r.topicKey) === catalog.topicId; });
    var sectionByUid = opts.sectionByUid || null;
    var normalized = topicRecords.map(function (r) { return normalizeRecord(r, sectionByUid && sectionByUid[r.studentId]); });

    var unmatched = normalized.filter(function (n) { return !bySlot[n.slotId]; }).length;
    var cutoff = nowMs - T.settleMinutes * 60000;
    var settled = [], pendingAll = [];
    normalized.forEach(function (n) {
      if (!bySlot[n.slotId]) return;
      if (n.updatedAtMs != null && nowMs != null && n.updatedAtMs > cutoff) pendingAll.push(n);
      else settled.push(n);
    });
    var setAside = pendingAll.length;

    var sections = {};
    settled.concat(pendingAll).forEach(function (n) { sections[n.section] = (sections[n.section] || 0) + 1; });
    var inScope = section === 'all' ? settled : settled.filter(function (n) { return n.section === section; });
    var pendingInScope = section === 'all' ? pendingAll : pendingAll.filter(function (n) { return n.section === section; });

    var size = null;
    if (section === 'all') {
      var ids = Object.keys(sections);
      if (ids.length && ids.every(function (id) { return typeof sizes[id] === 'number'; })) {
        size = ids.reduce(function (sum, id) { return sum + sizes[id]; }, 0);
      }
    } else if (typeof sizes[section] === 'number') {
      size = sizes[section];
    }

    var newest = null;
    normalized.forEach(function (n) { if (n.updatedAtMs != null && (newest == null || n.updatedAtMs > newest)) newest = n.updatedAtMs; });

    return {
      topicId: catalog.topicId, title: catalog.title, section: section, sizeKnown: size != null, size: size,
      records: inScope.length, sections: sections, setAside: setAside, unmatched: unmatched, newestMs: newest,
      thresholds: T,
      slots: catalog.slots.map(function (slot) {
        var mine = inScope.filter(function (n) { return n.slotId === slot.slotId; });
        var waiting = pendingInScope.filter(function (n) { return n.slotId === slot.slotId; }).length;
        return analyzeSlot(slot, mine, waiting, size, T);
      })
    };
  }

  // byPeriod: [{ id, label, analysis }]. Every flag raised in any of those
  // periods, one entry per (period, prompt, flag), most worth attention first.
  // The combined all-periods analysis is never used here on purpose: a period
  // with few records is hidden by another period's full set.
  function priorities(byPeriod) {
    var out = [];
    byPeriod.forEach(function (p, pi) {
      p.analysis.slots.forEach(function (s, si) {
        s.flags.forEach(function (f) {
          out.push({
            key: p.id + '|' + s.slotId + '|' + f.id,
            periodId: p.id, periodLabel: p.label, slotId: s.slotId, module: s.module, prompt: s.prompt,
            flag: f, slot: s, _o: [PRIORITY_ORDER.indexOf(f.id), pi, si]
          });
        });
      });
    });
    out.sort(function (a, b) { return (a._o[0] - b._o[0]) || (a._o[1] - b._o[1]) || (a._o[2] - b._o[2]); });
    out.forEach(function (x) { delete x._o; });
    return out;
  }

  // The answers worth reading, one list, in the order a teacher should meet them.
  // With no slotId it walks the flagged prompts (most important first); with one
  // it holds that prompt's answers in each period given. An answer appears once.
  function evidenceQueue(byPeriod, slotId) {
    var seen = {}, out = [];
    function take(periodId, periodLabel, slot) {
      slot.readFirst.forEach(function (a) {
        var k = periodId + '|' + slot.slotId + '|' + a.code;
        if (seen[k]) return;
        seen[k] = true;
        out.push({ periodId: periodId, periodLabel: periodLabel, slotId: slot.slotId, module: slot.module,
          prompt: slot.prompt, flags: slot.flags, answer: a });
      });
    }
    if (slotId) {
      byPeriod.forEach(function (p) {
        var slot = p.analysis.slots.filter(function (s) { return s.slotId === slotId; })[0];
        if (slot) take(p.id, p.label, slot);
      });
    } else {
      priorities(byPeriod).forEach(function (pr) { take(pr.periodId, pr.periodLabel, pr.slot); });
    }
    return out;
  }

  return {
    PRIORITY_ORDER: PRIORITY_ORDER, priorities: priorities, evidenceQueue: evidenceQueue,
    CONFIDENCE_WORDS: CONFIDENCE_WORDS, THRESHOLDS: THRESHOLDS, CONTRACT: CONTRACT, FLAG_DEFS: FLAG_DEFS,
    studentCode: studentCode, topicIdFromKey: topicIdFromKey, normalizeRecord: normalizeRecord,
    buildCatalog: buildCatalog, analyze: analyze, matchTerm: matchTerm, wordSet: wordSet
  };
});
