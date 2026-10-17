/**
 * xray-roster.js, turns two exports into "backup account to class".
 *
 * A backed-up answer carries an opaque account id and nothing else: no class, no
 * teacher, no name. The class comes from the school's own roster, joined to the
 * accounts once, here, in the teacher's browser.
 *
 *   1. The Firebase user export     account id + district email
 *   2. The Canvas gradebook export  login or email + section
 *
 * They are joined on the part of the address before the @, case-insensitively,
 * because Canvas often holds a login rather than a full address.
 *
 * WHAT COMES OUT IS CLASS ONLY. The result holds `sectionByUid` (account id to
 * section id), `enrolled` (students per section) and counts. Every email, login
 * and name read along the way is dropped when the join finishes and appears
 * nowhere in the result. The test asserts that by searching the result for an
 * "@" and for every name it was given. This runs in the page; nothing is sent
 * anywhere, and the page's policy forbids it.
 *
 * WHAT IT REPORTS INSTEAD OF GUESSING
 *   - section names it could not read (G2 is not a class, and "Period 5" is not
 *     one of the seven), with how many students were in them
 *   - students in two sections at once, who are left out rather than filed twice
 *   - enrolled students with no backup account yet, which is exactly what the
 *     Few records flag should notice
 *   - backup accounts that are not on the roster
 *   - local parts that match two accounts, which are left out rather than guessed
 *   - the whole join matching nothing, which means the Canvas login column is not
 *     the district email and the teacher needs to know that, not see zeros
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./xray-sections.js'));
  else root.BHXRayRoster = factory(root.BHXRaySections);
})(typeof self !== 'undefined' ? self : this, function (Sections) {
  'use strict';

  var STUDENT_DOMAIN = 'stumail.zcs.k12.in.us';

  // A small CSV reader: quoted fields, doubled quotes, commas and newlines inside
  // quotes, CRLF, and a byte-order mark. Canvas and Excel both write all of these.
  function parseCsv(text) {
    text = String(text == null ? '' : text).replace(/^﻿/, '');
    var rows = [], row = [], field = '', quoted = false, i, c;
    for (i = 0; i < text.length; i++) {
      c = text[i];
      if (quoted) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
        } else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        rows.push(row); row = [];
      } else field += c;
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return rows.filter(function (r) { return !(r.length === 1 && r[0].trim() === ''); });
  }

  function localPart(value) {
    var v = String(value == null ? '' : value).trim().toLowerCase();
    var at = v.indexOf('@');
    return at === -1 ? v : v.slice(0, at);
  }

  function domainOf(value) {
    var v = String(value == null ? '' : value).trim().toLowerCase();
    var at = v.indexOf('@');
    return at === -1 ? '' : v.slice(at + 1);
  }

  // The Firebase user export, as JSON (`firebase auth:export users.json`) or as
  // the CSV the same command writes, which has no header row: account id first,
  // email second.
  function parseFirebaseUsers(text) {
    var t = String(text == null ? '' : text).replace(/^﻿/, '').trim();
    var out = [];
    if (t.charAt(0) === '{' || t.charAt(0) === '[') {
      var data;
      try { data = JSON.parse(t); } catch (e) { return { users: [], problem: 'The Firebase export is not valid JSON.' }; }
      var list = Array.isArray(data) ? data : (data.users || []);
      list.forEach(function (u) {
        var uid = u.localId || u.uid || u.userId;
        if (uid && u.email) out.push({ uid: String(uid), email: String(u.email).toLowerCase() });
      });
      return { users: out };
    }
    var rows = parseCsv(t);
    if (!rows.length) return { users: [], problem: 'The Firebase export is empty.' };
    var start = 0, uidCol = 0, emailCol = 1;
    var head = rows[0].map(function (h) { return String(h).trim().toLowerCase(); });
    var hu = head.findIndex(function (h) { return /^(uid|localid|user.?id)$/.test(h); });
    var he = head.findIndex(function (h) { return /e-?mail/.test(h); });
    if (hu !== -1 && he !== -1) { start = 1; uidCol = hu; emailCol = he; }
    for (var i = start; i < rows.length; i++) {
      var uid = (rows[i][uidCol] || '').trim(), email = (rows[i][emailCol] || '').trim().toLowerCase();
      if (uid && email.indexOf('@') !== -1) out.push({ uid: uid, email: email });
    }
    return { users: out };
  }

  // The Canvas gradebook export. The header row is the first one with a Section
  // column. Canvas also writes a "Points Possible" row and a "Student, Test" row
  // that are not students, and neither is read.
  function parseCanvasRoster(text) {
    var rows = parseCsv(text);
    var h = -1, i;
    for (i = 0; i < rows.length && i < 5; i++) {
      if (rows[i].some(function (c) { return /^\s*sections?\s*$/i.test(c); })) { h = i; break; }
    }
    if (h === -1) return { rows: [], problem: 'No Section column found in the Canvas export. Export the gradebook, which carries one.' };
    var head = rows[h].map(function (c) { return String(c).trim(); });
    var sectionCol = head.findIndex(function (c) { return /^sections?$/i.test(c); });
    var idCols = [];
    head.forEach(function (c, ix) { if (/(login|e-?mail|username)/i.test(c)) idCols.push(ix); });
    if (!idCols.length) return { rows: [], problem: 'No login or email column found in the Canvas export, so students cannot be matched to accounts.' };
    var out = [];
    for (i = h + 1; i < rows.length; i++) {
      var r = rows[i];
      var first = String(r[0] || '');
      if (/points possible/i.test(first) || /student,\s*test|test student/i.test(first)) continue;
      var key = '';
      for (var k = 0; k < idCols.length && !key; k++) key = localPart(r[idCols[k]]);
      if (!key) continue;
      out.push({ key: key, sectionText: String(r[sectionCol] || '') });
    }
    return { rows: out };
  }

  // The join. `opts.firebaseText` and `opts.canvasText` are the two files as text.
  function buildClassList(opts) {
    var stats = {
      rosterRows: 0, enrolledInSections: 0, matched: 0, noBackupYet: 0,
      accountsNotOnRoster: 0, ambiguousAccounts: 0, otherDomainAccounts: 0,
      inTwoSections: 0, unrecognizedSections: {}
    };
    var warnings = [];

    var fb = parseFirebaseUsers(opts.firebaseText);
    if (fb.problem) warnings.push(fb.problem);
    var cv = parseCanvasRoster(opts.canvasText);
    if (cv.problem) warnings.push(cv.problem);

    // Student accounts, by local part. Staff accounts are not students and are
    // set aside before anything is matched, so a teacher whose name matches a
    // student's cannot be filed into that student's class.
    var byKey = {};
    fb.users.forEach(function (u) {
      if (domainOf(u.email) !== STUDENT_DOMAIN) { stats.otherDomainAccounts++; return; }
      var k = localPart(u.email);
      (byKey[k] = byKey[k] || []).push(u.uid);
    });

    var sectionByUid = {};
    var enrolled = {};
    Sections.SECTIONS.forEach(function (s) { enrolled[s.id] = 0; });
    var matchedUids = {};

    cv.rows.forEach(function (r) {
      stats.rosterRows++;
      var found = Sections.recognizeAll(r.sectionText);
      if (found.length === 0) {
        var name = r.sectionText.trim() || '(blank)';
        stats.unrecognizedSections[name] = (stats.unrecognizedSections[name] || 0) + 1;
        return;
      }
      if (found.length > 1) { stats.inTwoSections++; return; }
      var section = found[0];
      enrolled[section]++;
      stats.enrolledInSections++;
      var uids = byKey[r.key] || [];
      if (uids.length === 1) {
        sectionByUid[uids[0]] = section;
        matchedUids[uids[0]] = true;
        stats.matched++;
      } else if (uids.length === 0) {
        stats.noBackupYet++;
      } else {
        stats.ambiguousAccounts++;
      }
    });

    Object.keys(byKey).forEach(function (k) {
      byKey[k].forEach(function (uid) { if (!matchedUids[uid]) stats.accountsNotOnRoster++; });
    });

    if (stats.enrolledInSections > 0 && stats.matched === 0) {
      warnings.push('No roster student matched a backup account. The Canvas login column is probably not the district email, so the two lists cannot be joined.');
    }
    if (stats.rosterRows > 0 && stats.enrolledInSections === 0) {
      warnings.push('No roster row named one of the seven classes. Section names need G1, G3, G4, S1, S2, S3 or S4 in them.');
    }

    // Nothing below carries an address, a login or a name.
    return { sectionByUid: sectionByUid, enrolled: enrolled, stats: stats, warnings: warnings };
  }

  return { parseCsv: parseCsv, parseFirebaseUsers: parseFirebaseUsers, parseCanvasRoster: parseCanvasRoster,
    buildClassList: buildClassList, STUDENT_DOMAIN: STUDENT_DOMAIN };
});
