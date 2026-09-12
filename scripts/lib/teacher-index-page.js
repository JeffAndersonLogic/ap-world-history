'use strict';

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
 */

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderTeacherIndex(tools, rosTopics, cohorts, interactiveTopics = []) {
  const toolCards = tools.map(t => (
    `      <a class="tc-card" href="${esc(t.href)}">\n` +
    `        <h3>${esc(t.label)}</h3>\n` +
    `        <p>${esc(t.desc)}</p>\n` +
    `      </a>\n`
  )).join('');

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
.tc-body{flex:1;max-width:920px;margin:0 auto;width:100%;padding:1.4rem}
.tc-today{background:var(--warm-paper);color:var(--ink);border-radius:10px;padding:1.1rem 1.3rem;margin-bottom:1.6rem;box-shadow:0 2px 10px rgba(0,0,0,.25)}
.tc-today h2{font-family:var(--title);font-size:1.1rem;margin:0 0 .5rem}
.tc-today p{margin:0;font-size:.9rem}
.tc-today .tc-today-open{display:inline-block;margin-top:.7rem;background:var(--antique-gold);color:var(--ink);text-decoration:none;font-weight:700;padding:.6rem 1rem;border-radius:8px;font-size:.85rem}
.tc-today.empty{color:var(--gunmetal-gray)}
.tc-tools h2{font-family:var(--ui);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--antique-gold);margin:0 0 .8rem}
.tc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr));gap:1rem}
.tc-card{display:block;background:var(--warm-paper);color:var(--ink);border-radius:10px;padding:1rem 1.15rem;text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.25)}
.tc-card:hover{background:var(--clean-paper)}
.tc-card h3{font-family:var(--title);font-size:1.05rem;margin:0 0 .4rem}
.tc-card p{font-size:.86rem;margin:0;color:var(--gunmetal-gray)}
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
    <section class="tc-tools">
      <h2>Teacher Tools</h2>
      <div class="tc-grid">
${toolCards}      </div>
    </section>
  </main>
  <p class="tc-footer-note">Teacher tool &mdash; never linked from a student page. Generated from scripts/build-teacher-index.js; the Today panel reads assets/data/announcements-schedule.js live in the browser, so it is never a stale snapshot.</p>
</div>
<script id="tc-ros-data" type="application/json">${rosData}</script>
<script id="tc-interactive-data" type="application/json">${interactiveData}</script>
<script id="tc-cohort-data" type="application/json">${cohortData}</script>
<script src="../assets/data/announcements-schedule.js"></script>
<script>
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
  var day = (sched.days || []).filter(function(d){ return d.date === today; })[0];

  if (!day) {
    box.className = 'tc-today empty';
    box.innerHTML = '<h2>Today</h2><p>No class day is scheduled for ' + esc(today) + '.</p>';
    return;
  }

  var cohortInfo = COHORTS[day.cohort] || { label: day.cohort };
  var interactive = INTERACTIVE.filter(function(t){ return t.key === day.topic; })[0];
  var runOfShow = ROS.filter(function(t){ return t.key === day.topic; })[0];

  if (interactive) {
    box.innerHTML = '<h2>Today &mdash; ' + esc(cohortInfo.label) + '</h2>'
      + '<p>Topic ' + esc(day.topic) + ' &middot; Interactive Lesson</p>'
      + '<a class="tc-today-open" href="' + esc(interactive.out) + '">Open today&rsquo;s Teacher Command Center &rarr;</a>';
  } else if (runOfShow) {
    box.innerHTML = '<h2>Today &mdash; ' + esc(cohortInfo.label) + '</h2>'
      + '<p>Topic ' + esc(day.topic) + '</p>'
      + '<a class="tc-today-open" href="' + esc(runOfShow.out) + '">Open today&rsquo;s Run of Show &rarr;</a>';
  } else {
    box.className = 'tc-today empty';
    box.innerHTML = '<h2>Today &mdash; ' + esc(cohortInfo.label) + '</h2>'
      + '<p>Topic ' + esc(day.topic) + ' does not have a teacher command surface yet.</p>';
  }
})();
</script>
</body>
</html>
`;
}

module.exports = { renderTeacherIndex };
