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
.tc-header{background:rgba(26,28,29,.96);border-bottom:1px solid rgba(201,164,106,.34);box-shadow:0 10px 28px rgba(0,0,0,.18)}
.tc-header-inner{max-width:1120px;margin:0 auto;padding:.85rem 1.6rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.tc-brand-lockup{display:flex;align-items:center;gap:.75rem;min-width:0}
.tc-mark{width:42px;height:42px;flex:0 0 auto;border-radius:11px;background:linear-gradient(145deg,var(--antique-gold),var(--burnished-bronze));box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 8px 20px rgba(0,0,0,.24)}
.tc-brand-copy{min-width:0}
.tc-brand-kicker{font-family:var(--ui);font-size:.58rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-sandstone)}
.tc-brand-title{font-family:var(--title);font-weight:700;color:var(--warm-paper);font-size:1rem;line-height:1.15;margin-top:.1rem}
.tc-header-context{font-family:var(--ui);font-size:.62rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted-sandstone);white-space:nowrap}
.tc-body{flex:1;max-width:1120px;margin:0 auto;width:100%;padding:1.35rem 1.6rem 2.5rem}
.tc-hero{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(290px,.72fr);gap:1rem;margin-bottom:2.1rem}
.tc-hero-main{position:relative;min-height:270px;overflow:hidden;border:1px solid rgba(201,164,106,.34);border-radius:18px;background:var(--blackened-steel);box-shadow:0 18px 45px rgba(0,0,0,.24)}
.tc-hero-main::before{content:'';position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(26,28,29,.96) 0%,rgba(26,28,29,.82) 46%,rgba(26,28,29,.28) 100%),url("../assets/images/module-art/unit-1/topic-1-1/map.svg");background-size:cover;background-position:center 46%}
.tc-hero-main::after{content:'';position:absolute;left:1.7rem;top:1.25rem;width:76px;height:3px;border-radius:999px;background:var(--antique-gold);opacity:.88}
.tc-hero-content{position:relative;z-index:1;min-height:270px;padding:3.1rem 2rem 1.8rem;display:flex;flex-direction:column;justify-content:flex-end}
.tc-hero-kicker{font-family:var(--ui);font-size:.66rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.55rem}
.tc-hero h1{font-family:var(--title);font-size:clamp(2.35rem,5vw,4rem);font-weight:600;letter-spacing:-.025em;line-height:.98;margin:0;color:var(--warm-paper);text-shadow:0 3px 18px rgba(0,0,0,.3)}
.tc-hero-main p{max-width:58ch;margin:.8rem 0 0;color:#ded6c8;font-size:.87rem;line-height:1.6}
.tc-today{position:relative;overflow:hidden;min-height:270px;background:var(--warm-paper);color:var(--ink);border:1px solid rgba(201,164,106,.48);border-radius:18px;padding:1.55rem 1.45rem 1.4rem;box-shadow:0 18px 45px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center}
.tc-today::before{content:'';position:absolute;inset:0 0 auto 0;height:5px;background:linear-gradient(90deg,var(--antique-gold),var(--burnished-bronze))}
.tc-today-kicker{font-family:var(--ui);font-size:.61rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--burnished-bronze);margin-bottom:.45rem}
.tc-today h2{font-family:var(--title);font-size:1.42rem;line-height:1.12;margin:0 0 .38rem;color:var(--ink)}
.tc-today p{margin:0;font-size:.82rem;line-height:1.5;color:var(--gunmetal-gray)}
.tc-today .tc-today-open{align-self:flex-start;display:inline-block;margin-top:.95rem;background:var(--antique-gold);color:var(--ink);text-decoration:none;font-weight:800;padding:.68rem .88rem;border-radius:8px;font-size:.74rem;transition:transform .14s ease,background .14s ease}
.tc-today .tc-today-open:hover{background:var(--muted-sandstone);transform:translateY(-1px)}
.tc-today.empty{background:#e9e2d6;color:var(--gunmetal-gray)}
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
@media(max-width:820px){
  .tc-hero{grid-template-columns:1fr}
  .tc-hero-main,.tc-hero-content,.tc-today{min-height:230px}
}
@media(max-width:700px){
  .tc-header-inner{padding:.75rem 1rem}
  .tc-header-context{display:none}
  .tc-body{padding:1rem}
  .tc-hero{margin-bottom:1.65rem}
  .tc-hero-main,.tc-hero-content,.tc-today{min-height:210px}
  .tc-hero-content{padding:2.75rem 1.25rem 1.35rem}
  .tc-hero-main::after{left:1.25rem;top:1.1rem}
  .tc-hero h1{font-size:clamp(2.05rem,12vw,3rem)}
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
    <div class="tc-header-inner">
      <div class="tc-brand-lockup">
        <span class="tc-mark" aria-hidden="true"></span>
        <div class="tc-brand-copy">
          <div class="tc-brand-kicker">BeHistorical &middot; Teaching</div>
          <div class="tc-brand-title">AP World History</div>
        </div>
      </div>
      <div class="tc-header-context">Teacher Command Center</div>
    </div>
  </header>
  <main class="tc-body">
    <section class="tc-hero" aria-labelledby="tc-page-title">
      <div class="tc-hero-main">
        <div class="tc-hero-content">
          <div class="tc-hero-kicker">AP World &middot; Teacher Operations</div>
          <h1 id="tc-page-title">AP World Command Center</h1>
          <p>Your single AP World teaching hub. Open today&rsquo;s lesson first, then move to the Teaching OS library, Skills Lens, or build tools without hunting through duplicate routes.</p>
        </div>
      </div>
      <div class="tc-today" id="tc-today">Loading today&rsquo;s class&hellip;</div>
    </section>
    <section class="tc-library"    <section class="tc-library" aria-labelledby="teaching-os-heading">
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
  var lessonTitle = '';
  for (var k = 0; k < lessonRows.length; k++) {
    if (lessonRows[k].getAttribute('data-topic') === found.topic) {
      lessonRows[k].className += ' active';
      var titleNode = lessonRows[k].querySelector('.tc-lesson-title');
      lessonTitle = titleNode ? titleNode.textContent : '';
      var unit = lessonRows[k].parentNode && lessonRows[k].parentNode.parentNode;
      if (unit && unit.tagName === 'DETAILS') unit.open = true;
    }
  }
  var cohortInfo = COHORTS[found.cohort] || { label: found.cohort };
  var todayKicker = '<div class="tc-today-kicker">Today &middot; Live Schedule</div>';
  var topicSuffix = found.topic ? ' &middot; Topic ' + esc(found.topic) : '';
  var head = todayKicker + '<h2>' + esc(cohortInfo.label || 'Today') + topicSuffix + '</h2>';

  if (found.kind === 'noclass') {
    box.className = 'tc-today empty';
    box.innerHTML = todayKicker + '<h2>Today</h2><p>No class day is scheduled for ' + esc(found.date) + '.</p>';
  } else if (found.kind === 'nolesson') {
    box.className = 'tc-today empty';
    box.innerHTML = head + '<p>A class day with no topic lesson scheduled.</p>';
  } else if (found.kind === 'interactive') {
    box.innerHTML = head
      + '<p>' + esc(lessonTitle || 'Teaching OS') + '</p>'
      + '<a class="tc-today-open" href="' + esc(found.href) + '">Open Topic ' + esc(found.topic) + ' Teaching OS &rarr;</a>';
  } else if (found.kind === 'runofshow') {
    box.innerHTML = head
      + '<p>' + esc(lessonTitle || 'Run of Show') + '</p>'
      + '<a class="tc-today-open" href="' + esc(found.href) + '">Open Topic ' + esc(found.topic) + ' Run of Show &rarr;</a>';
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
