#!/usr/bin/env node
/*
 * Build the student-facing copy of each Teach Mode slide deck.
 *
 * A teacher deck's presenter notes are written like a coach talking to the
 * teacher about the room ("kill the misconception now", "watch them write").
 * That is exactly the wrong thing for a student to read, and there is no
 * server here to withhold it: this site is static files on GitHub Pages, so
 * a `?mode=student` query string would still ship the same bytes, notes
 * included, to everyone. The only way to make the notes genuinely absent
 * from what a student's browser downloads is to generate a second file that
 * never contains them.
 *
 * DECKS below is the one place a deck is declared, the same way build-ebook.js
 * declares VOLUMES: which decks exist is an editorial fact, not something to
 * discover by globbing a folder.
 *
 * Never hand-edit a `-student.html` file. Edit the teacher deck and rebuild.
 * `--check` fails on drift without writing, which is what the offline suite
 * should run.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const DECKS = [
  { teacher: 'unit-1/deck-topic-1-3-south-southeast-asia.html', student: 'unit-1/deck-topic-1-3-south-southeast-asia-student.html' },
  { teacher: 'unit-1/deck-topic-1-4-americas.html', student: 'unit-1/deck-topic-1-4-americas-student.html' },
];

// Literal blocks lifted verbatim from the shared Teach Mode shell. Matched as
// exact strings, not fuzzy regex, because every teacher deck is hand-authored
// from the same template and these blocks do not vary between them.
const NOTES_BUTTON = '  <button id="btn-nt"  type="button">Notes</button>\n';

const NOTES_PANEL = `<div id="notes" aria-live="polite">
  <p class="tag">Presenter notes</p>
  <div class="txt" id="notes-txt"></div>
</div>

`;

const HELP_NOTES_ROW = '      <dt>N</dt><dd>Presenter notes</dd>\n';

const JS_NOTES_VARS = `  var notes    = document.getElementById('notes');
  var notesTxt = document.getElementById('notes-txt');
`;

const JS_NOTES_ASSIGN = '    notesTxt.innerHTML = slides[i].getAttribute(\'data-notes\') || \'<em>No notes for this slide.</em>\';\n';

const JS_NOTES_KEYDOWN = '      case \'n\': case \'N\': notes.classList.toggle(\'show\'); e.preventDefault(); break;\n';

const JS_NOTES_CLICK = '  document.getElementById(\'btn-nt\').addEventListener(\'click\',   function (e) { e.stopPropagation(); notes.classList.toggle(\'show\'); });\n';

// The comment-header dash count is easy to mistype by hand and does not
// matter to the transform, so these two are matched by regex (with a
// wildcard over the dashes) rather than as exact literals.
const NOTES_CSS_RE = /\/\* [─-]+ Presenter notes [─-]+ \*\/\n#notes\{\n(?:.*\n)*?#notes \.txt b\{color:var\(--gold\)\}\n\n/;
const BLACKOUT_CSS_RE = /\/\* [─-]+ Blackout [─-]+ \*\/\n#black\{[^\n]*\}\n#black\.show\{display:block\}\n\n/;

function requireLiteral(html, literal, label, teacherPath) {
  if (!html.includes(literal)) {
    throw new Error(`${teacherPath}: expected to find ${label}, the teacher deck's shape has drifted from what this generator expects`);
  }
  return html.split(literal).join('');
}

function requireRegex(html, re, label, teacherPath) {
  if (!re.test(html)) {
    throw new Error(`${teacherPath}: expected to find ${label}, the teacher deck's shape has drifted from what this generator expects`);
  }
  return html.replace(re, '');
}

function stripPresenterMode(html, teacherPath) {
  let out = html;

  // The notes payload itself: every data-notes="..." attribute, whole.
  const before = (out.match(/data-notes="[^"]*"/g) || []).length;
  out = out.replace(/\s*data-notes="[^"]*"/g, '');
  const after = (out.match(/data-notes="[^"]*"/g) || []).length;
  if (after !== 0 || before === 0) {
    throw new Error(`${teacherPath}: expected to strip a positive number of data-notes attributes and end with zero, got ${before} -> ${after}`);
  }

  out = requireLiteral(out, NOTES_BUTTON, 'the Notes button', teacherPath);
  out = requireLiteral(out, NOTES_PANEL, 'the presenter notes panel', teacherPath);
  out = requireRegex(out, NOTES_CSS_RE, 'the #notes CSS rules', teacherPath);
  out = out.replace(
    '   The prose those bullets used to carry now lives in data-notes, where the\n   teacher says it. Keep this to one short line. If it needs two, the slide\n   is trying to make two points. */',
    '   The prose those bullets used to carry lives in the teacher deck\'s notes\n   instead, spoken aloud in class. Keep this to one short line. If it needs\n   two, the slide is trying to make two points. */'
  );
  out = requireLiteral(out, HELP_NOTES_ROW, 'the N key row in the help panel', teacherPath);
  out = requireLiteral(out, JS_NOTES_VARS, 'the notes/notesTxt variable declarations', teacherPath);
  out = requireLiteral(out, JS_NOTES_ASSIGN, 'the notesTxt.innerHTML assignment in show()', teacherPath);
  out = requireLiteral(out, JS_NOTES_KEYDOWN, 'the N keydown case', teacherPath);
  out = requireLiteral(out, JS_NOTES_CLICK, 'the Notes button click handler', teacherPath);

  // The title says Teach Mode; a student is not teaching. Swap it for a
  // plain, honest label, and drop the presenter-only Blackout control (B),
  // which exists to darken a shared classroom screen and does nothing useful
  // on a student's own device.
  out = out.replace(/<title>BeHistorical \| Teach Mode ([\d.]+)<\/title>/, '<title>BeHistorical | Class Presentation $1</title>');
  out = requireLiteral(out, '      <dt>B</dt><dd>Blackout, for eyes on you</dd>\n', 'the B key row in the help panel', teacherPath);
  out = requireLiteral(out, '  var black    = document.getElementById(\'black\');\n', 'the black variable declaration', teacherPath);
  out = requireLiteral(out, '<div id="black"></div>\n\n', 'the blackout div', teacherPath);
  out = requireRegex(out, BLACKOUT_CSS_RE, 'the #black CSS rules', teacherPath);
  {
    const ESCAPE_HEAD = '    if (k === \'Escape\') {\n' +
      '      if (help.classList.contains(\'show\'))     { help.classList.remove(\'show\');     e.preventDefault(); return; }\n' +
      '      if (overview.classList.contains(\'show\')) { toggleOverview(false);             e.preventDefault(); return; }\n' +
      '      if (black.classList.contains(\'show\'))    { black.classList.remove(\'show\');    e.preventDefault(); return; }\n' +
      '      return;\n' +
      '    }\n';
    const BLACKOUT_COMMENT = '    /* Blackout swallows navigation on purpose: the screen is dark because the\n' +
      '       room is meant to be looking at the teacher, and a stray arrow key must\n' +
      '       not advance a slide nobody can see. */\n';
    const BLACKOUT_GUARD = '    if (black.classList.contains(\'show\')) {\n' +
      '      if (k === \'b\' || k === \'B\') { black.classList.remove(\'show\'); e.preventDefault(); }\n' +
      '      return;\n' +
      '    }\n';
    const ESCAPE_ONLY_BLOCK = '    if (k === \'Escape\') {\n' +
      '      if (help.classList.contains(\'show\'))     { help.classList.remove(\'show\');     e.preventDefault(); return; }\n' +
      '      if (overview.classList.contains(\'show\')) { toggleOverview(false);             e.preventDefault(); return; }\n' +
      '      return;\n' +
      '    }\n';
    // 1.3's engine carries a design-rationale comment between the two if
    // blocks that 1.4's does not; accept either shape rather than forcing
    // the teacher decks to stay byte-identical for no reason.
    const withComment = ESCAPE_HEAD + BLACKOUT_COMMENT + BLACKOUT_GUARD;
    const withoutComment = ESCAPE_HEAD + BLACKOUT_GUARD;
    if (out.includes(withComment)) {
      out = out.split(withComment).join(ESCAPE_ONLY_BLOCK);
    } else if (out.includes(withoutComment)) {
      out = out.split(withoutComment).join(ESCAPE_ONLY_BLOCK);
    } else {
      throw new Error(`${teacherPath}: expected to find the Escape/Blackout keydown block, the teacher deck's shape has drifted from what this generator expects`);
    }
  }
  out = requireLiteral(out, '      case \'b\': case \'B\': black.classList.add(\'show\'); e.preventDefault(); break;\n', 'the B keydown case', teacherPath);
  out = requireLiteral(out, '  black.addEventListener(\'click\', function () { black.classList.remove(\'show\'); });\n', 'the black click-to-dismiss handler', teacherPath);

  return out;
}

function buildOne(deck, opts) {
  const teacherPath = path.join(ROOT, deck.teacher);
  const studentPath = path.join(ROOT, deck.student);
  const teacherHtml = fs.readFileSync(teacherPath, 'utf8');
  const studentHtml = stripPresenterMode(teacherHtml, deck.teacher);

  if (studentHtml.includes('data-notes') || studentHtml.includes('Presenter notes') || studentHtml.includes('btn-nt')) {
    throw new Error(`${deck.teacher}: student output still references presenter notes after stripping, refusing to write`);
  }
  if (/\bblack\b/.test(studentHtml) || studentHtml.includes('id="black"') || studentHtml.includes('Blackout')) {
    throw new Error(`${deck.teacher}: student output still references the presenter-only blackout control after stripping, refusing to write`);
  }

  if (opts.check) {
    const existing = fs.existsSync(studentPath) ? fs.readFileSync(studentPath, 'utf8') : null;
    if (existing !== studentHtml) {
      console.log(`  DRIFT  ${deck.student} does not match its teacher deck, rebuild it`);
      return false;
    }
    console.log(`  ok     ${deck.student} matches ${deck.teacher}`);
    return true;
  }

  fs.writeFileSync(studentPath, studentHtml);
  console.log(`  wrote  ${deck.student}`);
  return true;
}

function main() {
  const check = process.argv.includes('--check');
  let ok = true;
  for (const deck of DECKS) {
    try {
      if (!buildOne(deck, { check })) ok = false;
    } catch (err) {
      console.error(`  FAIL   ${deck.teacher}: ${err.message}`);
      ok = false;
    }
  }
  console.log(ok
    ? `\n${DECKS.length} student deck(s) ${check ? 'match their teacher decks' : 'built'}.`
    : `\nSome student decks ${check ? 'are out of date' : 'failed to build'}.`);
  if (!ok) process.exit(1);
}

if (require.main === module) main();
module.exports = { DECKS, stripPresenterMode };
