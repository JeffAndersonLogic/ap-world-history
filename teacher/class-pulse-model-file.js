/* Class Pulse, the model answers file: reads the teacher's own file of model answers
 * so the Class view fills each checkpoint in by itself instead of being pasted one at
 * a time (Jeff, 2026-11-10).
 *
 * The file is never part of this site. Model answers live in the private
 * AndersonLogic-OS repository, 04_PRODUCTS/BeHistorical/Assessments/
 * Class-Pulse-Model-Answers/, because this repository is public and every file in it
 * is served at behistorical.com (scripts/test/no-answer-keys.test.js). The teacher
 * picks the file on their own computer; the browser reads it there and nothing is
 * sent anywhere. The page keeps what it read on that computer, as it already did for
 * a pasted answer.
 *
 * The file is Markdown. Each answer starts with a heading naming the topic and the
 * checkpoint, and its paragraphs, one per criterion, follow, separated by a blank
 * line:
 *
 *   ## Topic 4.4 · Checkpoint 2
 *
 *   First criterion's paragraph.
 *
 *   Second criterion's paragraph.
 *
 * Any other heading ends an answer, so a title, a README note or a reviewer's
 * section can sit in the same file and is never shown. A paragraph wrapped over
 * several lines is joined back into one line.
 *
 *   parse(text) -> { answers: [{ topic, cp, text }], problems: [string] } */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseModelFile = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // "## Topic 4.4 · Checkpoint 2", and the same with a comma, colon, dash or bar
  // between them, or none, and with or without the word Topic.
  const ANSWER = /^#{1,6}\s+(?:Topic\s+)?(\d{1,2}\.\d{1,2})\s*[\u00b7\u2022,:|\u2013\u2014-]?\s*Checkpoint\s+([12])\s*#*\s*$/i;
  const HEADING = /^#{1,6}\s/;

  function paragraphs(lines) {
    return lines.join('\n').split(/\n\s*\n/)
      .map(p => p.split('\n').map(l => l.trim()).filter(Boolean).join(' '))
      .filter(Boolean);
  }

  function parse(text) {
    const answers = [];
    const problems = [];
    const seen = new Set();
    let open = null;
    const close = () => {
      if (!open) return;
      const label = 'Topic ' + open.topic + ' Checkpoint ' + open.cp.slice(2);
      const paras = paragraphs(open.lines);
      if (!paras.length) problems.push(label + ' has a heading but no answer under it.');
      else if (seen.has(open.topic + '|' + open.cp)) problems.push(label + ' appears twice; the first one was kept.');
      else { seen.add(open.topic + '|' + open.cp); answers.push({ topic: open.topic, cp: open.cp, text: paras.join('\n\n') }); }
      open = null;
    };
    String(text == null ? '' : text).replace(/^﻿/, '').replace(/\r\n?/g, '\n').split('\n').forEach(line => {
      const m = ANSWER.exec(line.trim());
      if (m) { close(); open = { topic: m[1], cp: 'cp' + m[2], lines: [] }; return; }
      if (HEADING.test(line.trim())) { close(); return; }
      if (open) open.lines.push(line);
    });
    close();
    if (!answers.length && !problems.length) problems.push('No model answers found. Each one needs a heading like "## Topic 4.4 · Checkpoint 2".');
    return { answers, problems };
  }

  return { parse };
});
