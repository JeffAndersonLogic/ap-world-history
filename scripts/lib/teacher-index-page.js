'use strict';

const { resolveTeacherSurface } = require('./teacher-today');

/**
 * The teacher command center: one page linking every teacher-only tool
 * BeHistorical has, plus a Today panel that reads the schedule live in the
 * browser and surfaces the best available teacher view for the current topic.
 *
 * A router, not a dashboard: nothing here stores its own state. TOOLS,
 * ROS_TOPICS, and INTERACTIVE_TOPICS are baked in at build time because the
 * surfaces that exist are editorial facts. The Today panel itself evaluates
 * the live schedule in the browser. Interactive lessons take precedence over
 * legacy Run of Show pages when both exist.
 *
 * The Today panel does not carry its own copy of the routing decision. It
 * embeds scripts/lib/teacher-today.js's own source with String(), so the
 * browser runs the same bytes the offline test drives. This page formats the
 * result; it never decides it.
 */

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderTeacherIndex(tools, rosTopics, cohorts, interactiveTopics = []) {
  const teaching = tools.filter(t => t.kind === 'lesson');
  const primary = tools.filter(t => t.kind === 'primary');
  const authoring = tools.filter(t => t.kind === 'authoring');
  const legacy = tools.filter(t => t.kind === 'legacy');
  const units = teaching.map(t => t.unit).filter((unit, i, all) => all.indexOf(unit) === i);

  const teachingGroups = units.map(unit => {
    const lessons = teaching.filter(t => t.unit === unit);
    const rows = lessons.map(t => (
      '          <a class="tc-lesson-row" data-topic="' + esc(t.key) + '" href="' + esc(t.href) + '">\n' +
      '            <span class="tc-topic-pill">Topic ' + esc(t.key) + '</span>\n' +
      '            <span class="tc-lesson-title">' + esc(t.title || t.label) + '</span>\n' +
      '            <span class="tc-open">Open <span aria-hidden="true">&rarr;</span></span>\n' +
      '          </a>\n'
    )).join('');
    return '      <details class="tc-unit">\n' +
      '        <summary><span><b>Unit ' + esc(unit) + '</b><small>' + lessons.length + ' Teaching OS ' + (lessons.length === 1 ? 'lesson' : 'lessons') + '</small></span></summary>\n' +
      '        <div class="tc-lesson-list">\n' + rows + '        </div>\n' +
      '      </details>\n';
  }).join('');

  const primaryCards = primary.map(t => (
    '      <a class="tc-utility-card" href="' + esc(t.href) + '">\n' +
    '        <span class="tc-utility-kicker">Student work</span>\n' +
    '        <h3>' + esc(t.label) + '</h3>\n' +
    '        <p>' + esc(t.desc) + '</p>\n' +
    '        <span class="tc-utility-open">Open ' + esc(t.label) + ' <span aria-hidden="true">&rarr;</span></span>\n' +
    '      </a>\n'
  )).join('');

  function secondaryRows(entries) {
    return entries.map(t => (
      '          <a class="tc-secondary-link" href="' + esc(t.href) + '">\n' +
      '            <span><b>' + esc(t.label) + '</b><small>' + esc(t.desc) + '</small></span>\n' +
      '            <span aria-hidden="true">&rarr;</span>\n' +
      '          </a>\n'
    )).join('');
  }
  const authoringRows = secondaryRows(authoring);
  const legacyRows = secondaryRows(legacy);

  const rosData = JSON.stringify(rosTopics).replace(/</g, '\\u003c');
  const interactiveData = JSON.stringify(interactiveTopics).replace(/</g, '\\u003c');
  const cohortData = JSON.stringify(cohorts).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Teacher Command Center | BeHistorical</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --blackened-steel:#1A1C1D; --charcoal-steel:#2B2F31; --gunmetal-gray:#3E4447;
  --aged-iron:#5A5F5C; --muted-sandstone:#D2B48C; --burnished-bronze:#8C5A2B;
  --antique-gold:#C9A46A; --warm-paper:#F5F0E7; --clean-paper:#FFFDF7; --ink:#151718;
  --title:'Cinzel','Trajan Pro','Times New Roman',Georgia,serif;
  --ui:'Montserrat','Segoe UI',system-ui,Arial,sans-serif;
}
*{box-sizing:border-box}
[hidden]{display:none !important}
body{margin:0;min-height:100vh;background:var(--charcoal-steel);color:var(--warm-paper);font-family:var(--ui);font-size:15px;line-height:1.55}
a{color:inherit}
:focus-visible{outline:3px solid var(--antique-gold);outline-offset:2px;border-radius:3px}
.tc-shell{display:flex;flex-direction:column;min-height:100vh}
.tc-header{padding:.9rem 1.4rem;background:var(--blackened-steel);border-bottom:2px solid var(--burnished-bronze)}
.tc-brand{font-family:var(--title);font-weight:700;letter-spacing:.04em;color:var(--antique-gold);font-size:1.05rem}
.tc-eyebrow{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-sandstone);margin-top:.2rem}
.tc-body{flex:1;max-width:1040px;margin:0 auto;width:100%;padding:1.6rem}
.tc-today{position:relative;overflow:hidden;background:var(--warm-paper);color:var(--ink);border-radius:14px;padding:1.35rem 1.5rem 1.4rem;margin-bottom:2rem;box-shadow:0 10px 30px rgba(0,0,0,.22)}
.tc-today::before{content:'';position:absolute;inset:0 auto 0 0;width:6px;background:var(--antique-gold)}
.tc-today h2{font-family:var(--title);font-size:1.35rem;margin:0 0 .35rem}
.tc-today p{margin:0;font-size:.92rem;color:var(--gunmetal-gray)}
.tc-today .tc-today-open{display:inline-block;margin-top:.85rem;background:var(--blackened-steel);color:var(--warm-paper);text-decoration:none;font-weight:700;padding:.7rem 1rem;border-radius:8px;font-size:.84rem}
.tc-today .tc-today-open:hover{background:var(--gunmetal-gray)}
.tc-today.empty{color:var(--gunmetal-gray)}
.tc-section-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(250px,.8fr);gap:1.2rem;align-items:end;margin-bottom:.9rem}
.tc-section-kicker{font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.2rem}
.tc-section-head h2{font-family:var(--title);font-size:1.3rem;margin:0;color:var(--warm-paper)}
.tc-section-head p{margin:0;color:var(--muted-sandstone);font-size:.82rem;line-height:1.5}
.tc-unit-stack{display:flex;flex-direction:column;gap:.65rem}
.tc-unit{background:var(--blackened-steel);border:1px solid var(--gunmetal-gray);border-radius:10px;overflow:hidden}
.tc-unit[open]{border-color:rgba(201,164,106,.6)}
.tc-unit summary{list-style:none;cursor:pointer;padding:.85rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.tc-unit summary::-webkit-details-marker{display:none}
.tc-unit summary::after{content:'+';font:700 1.1rem var(--ui);color:var(--antique-gold)}
.tc-unit[open] summary::after{content:'–'}
.tc-unit summary span{display:flex;align-items:baseline;gap:.7rem;min-width:0}
.tc-unit summary b{font-family:var(--title);font-size:.94rem;color:var(--warm-paper)}
.tc-unit summary small{font-family:var(--ui);font-size:.68rem;color:var(--muted-sandstone)}
.tc-lesson-list{border-top:1px solid var(--gunmetal-gray)}
.tc-lesson-row{display:grid;grid-template-columns:86px minmax(0,1fr) auto;gap:.8rem;align-items:center;padding:.72rem 1rem;color:var(--warm-paper);text-decoration:none;border-bottom:1px solid rgba(90,95,92,.35);transition:background .14s ease}
.tc-lesson-row:last-child{border-bottom:0}
.tc-lesson-row:hover{background:rgba(255,255,255,.045)}
.tc-lesson-row.active{background:rgba(201,164,106,.12);box-shadow:inset 3px 0 0 var(--antique-gold)}
.tc-topic-pill{font-family:var(--ui);font-size:.64rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--antique-gold)}
.tc-lesson-title{font-family:var(--ui);font-size:.84rem;font-weight:650;min-width:0}
.tc-open{font-family:var(--ui);font-size:.68rem;font-weight:800;color:var(--muted-sandstone);white-space:nowrap}
.tc-utilities{margin-top:2rem}
.tc-utility-card{display:block;background:var(--warm-paper);color:var(--ink);border-radius:12px;padding:1.15rem 1.25rem;text-decoration:none;box-shadow:0 6px 18px rgba(0,0,0,.2)}
.tc-utility-card:hover{background:var(--clean-paper)}
.tc-utility-kicker{display:block;font-family:var(--ui);font-size:.62rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--burnished-bronze)}
.tc-utility-card h3{font-family:var(--title);font-size:1.08rem;margin:.25rem 0 .35rem}
.tc-utility-card p{font-size:.84rem;margin:0;color:var(--gunmetal-gray);max-width:72ch}
.tc-utility-open{display:inline-block;margin-top:.7rem;font-family:var(--ui);font-size:.7rem;font-weight:800;color:var(--burnished-bronze)}
.tc-secondary-stack{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:.8rem}
.tc-secondary{background:rgba(26,28,29,.6);border:1px solid var(--gunmetal-gray);border-radius:10px;overflow:hidden}
.tc-secondary summary{cursor:pointer;list-style:none;padding:.8rem .95rem;font-family:var(--ui);font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-sandstone);display:flex;justify-content:space-between;align-items:center}
.tc-secondary summary::-webkit-details-marker{display:none}
.tc-secondary summary::after{content:'+';color:var(--antique-gold);font-size:1rem}
.tc-secondary[open] summary::after{content:'–'}
.tc-secondary-body{border-top:1px solid var(--gunmetal-gray)}
.tc-secondary-link{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:.8rem .95rem;text-decoration:none;color:var(--warm-paper)}
.tc-secondary-link:hover{background:rgba(255,255,255,.04)}
.tc-secondary-link span:first-child{display:flex;flex-direction:column;gap:.15rem}
.tc-secondary-link b{font-family:var(--ui);font-size:.78rem}
.tc-secondary-link small{font-family:var(--ui);font-size:.67rem;line-height:1.45;color:var(--muted-sandstone)}
.tc-secondary-link>span:last-child{color:var(--antique-gold)}
@media(max-width:700px){
  .tc-body{padding:1rem}
  .tc-section-head{grid-template-columns:1fr}
  .tc-lesson-row{grid-template-columns:76px minmax(0,1fr)}
  .tc-open{display:none}
  .tc-secondary-stack{grid-template-columns:1fr}
  .tc-unit summary span{align-items:flex-start;flex-direction:column;gap:.15rem}
}
.tc-footer-note{padding:.6rem 1.4rem;font-size:.68rem;color:var(--muted-sandstone);border-top:1px solid var(--gunmetal-gray)}
</style>
</head>
<body>
<div class="tc-shell">
  <header class="tc-header">
    <div class="tc-brand">BeHistorical</div>
    <div class="tc-eyebrow">Teacher Command Center</div>
  </header>
  <main class="tc-body">
    <div class="tc-today" id="tc-today">Loading today&rsquo;s class&hellip;</div>
    <section class="tc-library" aria-labelledby="teaching-os-heading">
      <div class="tc-section-head">
        <div><div class="tc-section-kicker">Lesson library</div><h2 id="teaching-os-heading">Teaching OS</h2></div>
        <p>Today opens automatically above. Use this compact library when you need a different lesson.</p>
      </div>
      <div class="tc-unit-stack">
${teachingGroups}      </div>
    </section>
    <section class="tc-utilities" aria-labelledby="teacher-utilities-heading">
      <div class="tc-section-head">
        <div><div class="tc-section-kicker">Teacher utility</div><h2 id="teacher-utilities-heading">Analyze &amp; Build</h2></div>
        <p>Student analysis stays one click away. Authoring and legacy tools remain available without competing with daily teaching.</p>
      </div>
${primaryCards}      <div class="tc-secondary-stack">
        <details class="tc-secondary">
          <summary>Build &amp; Authoring</summary>
          <div class="tc-secondary-body">
${authoringRows}          </div>
        </details>
        <details class="tc-secondary">
          <summary>Legacy / Unit 1</summary>
          <div class="tc-secondary-body">
${legacyRows}          </div>
        </details>
      </div>
    </section>
  </main>
  <p class="tc-footer-note">Teacher-only launch surface. Today reads the live schedule; the lesson library and Today routing are generated from the same registry.</p>
</div>
<script id="tc-ros-data" type="application/json">${rosData}</script>
<script id="tc-interactive-data" type="application/json">${interactiveData}</script>
<script id="tc-cohort-data" type="application/json">${cohortData}</script>
<script src="../assets/data/announcements-schedule.js"></script>
<script>
/* scripts/lib/teacher-today.js, embedded from its own source at build time.
   Edit that file and run: node scripts/build-teacher-index.js */
${String(resolveTeacherSurface)}
(function(){
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  var ROS = JSON.parse(document.getElementById('tc-ros-data').textContent);
  var INTERACTIVE = JSON.parse(document.getElementById('tc-interactive-data').textContent);
  var COHORTS = JSON.parse(document.getElementById('tc-cohort-data').textContent);
  var box = document.getElementById('tc-today');
  var sched = window.BEHISTORICAL_SCHEDULE;
  if (!sched) { box.className = 'tc-today empty'; box.innerHTML = '<h2>Today</h2><p>Could not load the schedule.</p>'; return; }

  var now = new Date();
  var pad = function(n){ return (n < 10 ? '0' : '') + n; };
  var today = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());

  var found = resolveTeacherSurface(today, sched, INTERACTIVE, ROS);
  var lessonRows = document.querySelectorAll('.tc-lesson-row[data-topic]');
  for (var k = 0; k < lessonRows.length; k++) {
    if (lessonRows[k].getAttribute('data-topic') === found.topic) {
      lessonRows[k].className += ' active';
      var unit = lessonRows[k].parentNode && lessonRows[k].parentNode.parentNode;
      if (unit && unit.tagName === 'DETAILS') unit.open = true;
    }
  }
  var cohortInfo = COHORTS[found.cohort] || { label: found.cohort };
  var head = '<h2>Today &mdash; ' + esc(cohortInfo.label) + '</h2>';

  if (found.kind === 'noclass') {
    box.className = 'tc-today empty';
    box.innerHTML = '<h2>Today</h2><p>No class day is scheduled for ' + esc(found.date) + '.</p>';
  } else if (found.kind === 'nolesson') {
    box.className = 'tc-today empty';
    box.innerHTML = head + '<p>A class day with no topic lesson scheduled.</p>';
  } else if (found.kind === 'interactive') {
    box.innerHTML = head
      + '<p>Topic ' + esc(found.topic) + ' &middot; Teaching OS</p>'
      + '<a class="tc-today-open" href="' + esc(found.href) + '">Open today&rsquo;s Teaching OS &rarr;</a>';
  } else if (found.kind === 'runofshow') {
    box.innerHTML = head
      + '<p>Topic ' + esc(found.topic) + '</p>'
      + '<a class="tc-today-open" href="' + esc(found.href) + '">Open today&rsquo;s Run of Show &rarr;</a>';
  } else {
    box.className = 'tc-today empty';
    box.innerHTML = head
      + '<p>Topic ' + esc(found.topic) + ' does not have a teacher command surface yet.</p>';
  }
})();
</script>
</body>
</html>
`;
}

module.exports = { renderTeacherIndex };
