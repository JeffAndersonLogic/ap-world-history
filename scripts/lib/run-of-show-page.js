'use strict';

/**
 * The one renderer for the Run of Show prototype: a teacher-only "cockpit"
 * view of a lesson's pacing, built entirely from that topic's own
 * `runOfShow` block in its lesson data file (assets/data/lesson-N-N-*.js).
 *
 * This is a PROTOTYPE, not a production surface. It exists to test whether
 * the Run of Show concept is worth building for real (a persisted class
 * timer, a route wired into the actual lesson renderer, all 71 topics)
 * before investing in that. It is not linked from any lesson page, not
 * wired into validate.js, and not part of any npm test suite.
 *
 * Deliberately built the way the rest of this repo builds everything:
 * content lives in the topic's own data file, this file only renders it.
 * A hand-typed pacing script that quoted checkpoint wording or evidence
 * lists directly in a template would be a second copy of lesson content,
 * exactly the failure mode CLAUDE.md describes for the capture block and
 * the skill labels, at the interface layer instead of the content layer.
 *
 * The renderer does not hardcode which phase ids exist. It reads whatever
 * fields a phase happens to carry (retrieval list, map anchors, slides,
 * listenFor weak/strong pairs, a synthesis table, an AP-application card)
 * and renders whichever apply, the same reason the eBook's narration walks
 * DOM structure instead of a list of known class names: a future topic's
 * runOfShow block should not need this file edited to render correctly.
 */

const BRAND_CSS = `
:root{
  --blackened-steel:#1A1C1D; --charcoal-steel:#2B2F31; --gunmetal-gray:#3E4447;
  --aged-iron:#5A5F5C; --muted-sandstone:#D2B48C; --burnished-bronze:#8C5A2B;
  --rust-copper:#A8652D; --oxidized-brown:#6B3E1F; --antique-gold:#C9A46A;
  --warm-paper:#F5F0E7; --clean-paper:#FFFDF7; --ink:#151718;
  --status-good:#0CA30C; --status-warning:#B9790A; --status-serious:#B5451F; --status-critical:#8C1F1F;
  --title:'Cinzel','Trajan Pro','Times New Roman',Georgia,serif;
  --body:'Libre Baskerville',Georgia,serif;
  --ui:'Montserrat','Segoe UI',system-ui,Arial,sans-serif;
}
*{box-sizing:border-box}
[hidden]{display:none !important}
body{margin:0;min-height:100vh;background:var(--charcoal-steel);color:var(--warm-paper);font-family:var(--body);font-size:15px;line-height:1.55}
a{color:inherit}
:focus-visible{outline:3px solid var(--antique-gold);outline-offset:2px;border-radius:3px}
button{font-family:var(--ui);cursor:pointer}
.ros-shell{display:flex;flex-direction:column;min-height:100vh}

/* Header */
.ros-header{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;padding:.85rem 1.4rem;background:var(--blackened-steel);border-bottom:2px solid var(--burnished-bronze)}
.ros-brand{font-family:var(--title);font-weight:700;letter-spacing:.04em;color:var(--antique-gold);font-size:1.05rem;white-space:nowrap}
.ros-titles{flex:1;min-width:220px}
.ros-eyebrow{font-family:var(--ui);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-sandstone)}
.ros-title{font-family:var(--title);font-size:1.3rem;margin:.1rem 0 0}
.ros-pacing{display:flex;gap:.5rem}
.ros-pacing button{border:1px solid var(--aged-iron);background:var(--charcoal-steel);color:var(--warm-paper);border-radius:6px;padding:.5rem .85rem;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
.ros-pacing button[aria-pressed="true"]{background:var(--antique-gold);color:var(--ink);border-color:var(--antique-gold)}
.ros-pacing button.emergency[aria-pressed="true"]{background:var(--status-serious);color:var(--clean-paper);border-color:var(--status-serious)}

/* Phase strip */
.ros-strip{display:flex;gap:2px;background:var(--gunmetal-gray);overflow-x:auto;padding:.4rem}
.ros-tab{flex:1 0 auto;min-width:110px;background:var(--charcoal-steel);color:var(--muted-sandstone);border:0;border-radius:8px;padding:.55rem .7rem;text-align:left;font-family:var(--ui)}
.ros-tab .n{font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;opacity:.75}
.ros-tab .lbl{display:block;font-weight:700;font-size:.82rem;color:var(--warm-paper);margin-top:.15rem}
.ros-tab .rng{display:block;font-size:.68rem;opacity:.7;margin-top:.1rem}
.ros-tab[aria-current="true"]{background:var(--antique-gold);color:var(--ink)}
.ros-tab[aria-current="true"] .lbl,.ros-tab[aria-current="true"] .rng{color:var(--ink)}
.ros-tab.done .n::before{content:'✓ '}

/* Body layout */
.ros-body{flex:1;display:grid;grid-template-columns:1fr 320px;gap:1rem;padding:1rem 1.4rem 2rem;align-items:start}
@media (max-width:860px){.ros-body{grid-template-columns:1fr}}

.ros-card{background:var(--warm-paper);color:var(--ink);border-radius:10px;padding:1.2rem 1.3rem;box-shadow:0 2px 10px rgba(0,0,0,.25)}
.ros-panel{background:var(--charcoal-steel);border:1px solid var(--gunmetal-gray);border-radius:10px;padding:1rem 1.1rem}

.ros-kicker{font-family:var(--ui);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--oxidized-brown);font-weight:700}
.ros-phase-title{font-family:var(--title);font-size:1.5rem;margin:.2rem 0 .1rem}
.ros-phase-meta{font-family:var(--ui);font-size:.75rem;color:var(--gunmetal-gray)}

.ros-section{margin-top:1rem}
.ros-section h3{font-family:var(--ui);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--rust-copper);margin:0 0 .45rem;display:flex;align-items:center;gap:.4rem}
.ros-section ul{margin:0;padding-left:1.15rem}
.ros-section li{margin-bottom:.35rem}

.ros-box{border-radius:8px;padding:.75rem .9rem;margin-top:.6rem}
.ros-box.prompt{background:#efe1c2;border-left:4px solid var(--burnished-bronze)}
.ros-box.avoid{background:#f4dcd2;border-left:4px solid var(--status-serious)}
.ros-box.good{background:#dfe9d8;border-left:4px solid var(--status-good)}
.ros-box.connect{background:#e5dcf0;border-left:4px solid #7B4F9E}
.ros-box.note{background:#e9e2d3;border-left:4px solid var(--aged-iron)}

.ros-listen{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:.6rem}
@media (max-width:640px){.ros-listen{grid-template-columns:1fr}}
.ros-listen div{border-radius:8px;padding:.7rem .85rem;font-size:.92rem}
.ros-listen .weak{background:#f4dcd2}
.ros-listen .strong{background:#dfe9d8}
.ros-listen p{margin:.3rem 0 0;font-style:italic}

.ros-slidenav{display:flex;align-items:center;justify-content:space-between;gap:.6rem;margin:.6rem 0 1rem;font-family:var(--ui)}
.ros-slidenav button{border:1px solid var(--gunmetal-gray);background:var(--clean-paper);border-radius:6px;padding:.4rem .7rem;font-size:.75rem;font-weight:700}
.ros-slidenav button:disabled{opacity:.35;cursor:not-allowed}
.ros-slidedots{font-size:.72rem;color:var(--gunmetal-gray)}

.ros-table{width:100%;border-collapse:collapse;margin-top:.5rem;font-size:.9rem}
.ros-table th,.ros-table td{border-bottom:1px solid #d8cbb9;text-align:left;padding:.4rem .3rem}

.ros-nav{display:flex;justify-content:space-between;gap:.7rem;margin-top:1.3rem}
.ros-nav button{border:1px solid var(--aged-iron);background:var(--charcoal-steel);color:var(--warm-paper);border-radius:8px;padding:.65rem 1rem;font-weight:700;font-size:.82rem}
.ros-nav button.primary{background:var(--antique-gold);color:var(--ink);border-color:var(--antique-gold)}
.ros-nav button:disabled{opacity:.4;cursor:not-allowed}

/* Right column widgets */
.ros-widget + .ros-widget{margin-top:.9rem}
.ros-widget h4{font-family:var(--ui);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--antique-gold);margin:0 0 .55rem;display:flex;align-items:center;gap:.4rem}
.ros-timer{font-family:var(--ui);font-size:2.1rem;font-weight:700;color:var(--clean-paper);letter-spacing:.02em}
.ros-timer-label{font-size:.68rem;color:var(--muted-sandstone);text-transform:uppercase;letter-spacing:.08em}
.ros-timer-row{display:flex;justify-content:space-between;align-items:baseline;margin-top:.3rem}
.ros-timer-controls{display:flex;gap:.5rem;margin-top:.7rem}
.ros-timer-controls button{flex:1;border:1px solid var(--aged-iron);background:var(--gunmetal-gray);color:var(--warm-paper);border-radius:6px;padding:.4rem;font-size:.72rem;font-weight:700}
.ros-glance dt{font-family:var(--ui);font-size:.64rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-sandstone);margin-top:.5rem}
.ros-glance dd{margin:.1rem 0 0;font-size:.85rem}
.ros-quicklaunch a{display:block;background:var(--gunmetal-gray);color:var(--warm-paper);text-decoration:none;border-radius:6px;padding:.5rem .7rem;font-size:.82rem;margin-bottom:.4rem}
.ros-quicklaunch a:hover{background:var(--aged-iron)}
.ros-status-table{width:100%;font-size:.78rem;border-collapse:collapse}
.ros-status-table td{padding:.25rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
.ros-status-table td:last-child{text-align:right;font-family:var(--ui);font-weight:700;font-size:.68rem;text-transform:uppercase;color:var(--muted-sandstone)}
.ros-toggle{background:none;border:1px solid var(--aged-iron);color:var(--muted-sandstone);border-radius:6px;padding:.4rem .6rem;font-size:.72rem;width:100%}
.ros-notes textarea{width:100%;min-height:90px;background:var(--ink);color:var(--warm-paper);border:1px solid var(--gunmetal-gray);border-radius:6px;padding:.5rem;font-family:var(--body);font-size:.85rem;resize:vertical}

/* Pacing footer */
.ros-pacing-panel{margin:0 1.4rem 1.5rem;background:var(--blackened-steel);border:1px solid var(--burnished-bronze);border-radius:10px;padding:1rem 1.2rem;display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem}
@media (max-width:760px){.ros-pacing-panel{grid-template-columns:1fr}}
.ros-pacing-panel h4{font-family:var(--ui);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;margin:0 0 .4rem}
.ros-pacing-panel .route{color:var(--status-warning)}
.ros-pacing-panel .skip{color:var(--status-serious)}
.ros-pacing-panel .protect{color:var(--status-good)}
.ros-pacing-panel ul{margin:.3rem 0 0;padding-left:1.1rem;font-size:.82rem}

.ros-footer-note{padding:.6rem 1.4rem;font-family:var(--ui);font-size:.68rem;color:var(--muted-sandstone);border-top:1px solid var(--gunmetal-gray)}
`;

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildLinks(L, unitDir) {
  const links = [];
  const lessonFile = L.__lessonFile;
  if (lessonFile) links.push({ label: 'Open Lesson Page', url: `../${unitDir}/${lessonFile}` });
  if (L.classPresentation && L.classPresentation.url) {
    links.push({ label: 'Open Student Deck', url: `../${unitDir}/${L.classPresentation.url}` });
  }
  if (L.map && L.map.sourceUrl) links.push({ label: 'Open Map Source', url: L.map.sourceUrl });
  if (L.first10 && L.first10.embedUrl) {
    links.push({ label: 'Open First & 10', url: `../${unitDir}/${L.first10.embedUrl}` });
  }
  if (L.deepReading && L.deepReading.url) {
    links.push({ label: 'Open Deep Reading', url: `../${unitDir}/${L.deepReading.url}` });
  }
  if (L.beInTheRoom && L.beInTheRoom.url) {
    links.push({ label: 'Open BeInTheRoom', url: L.beInTheRoom.url });
  }
  return links;
}

function renderRunOfShow(L, opts) {
  const RS = L.runOfShow;
  if (!RS) throw new Error('renderRunOfShow: lesson has no runOfShow block');
  const unitDir = opts.unitDir;
  const links = buildLinks(L, unitDir);
  const payload = {
    meta: L.meta,
    runOfShow: RS,
    links,
  };
  const json = JSON.stringify(payload).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Run of Show | ${esc(L.meta.topic)} | BeHistorical Teacher Tools</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${BRAND_CSS}</style>
</head>
<body>
<div class="ros-shell">
  <header class="ros-header">
    <span class="ros-brand">BeHistorical</span>
    <div class="ros-titles">
      <div class="ros-eyebrow">${esc(L.meta.topic)} &middot; RUN OF SHOW (Teacher View, prototype)</div>
      <h1 class="ros-title">${esc(L.meta.title)}</h1>
    </div>
    <div class="ros-pacing" role="group" aria-label="Pacing mode">
      <button type="button" data-pacing="normal" aria-pressed="true">Normal</button>
      <button type="button" data-pacing="condensed" aria-pressed="false">${esc((RS.pacing && RS.pacing.condensed && RS.pacing.condensed.label) || 'Condensed')}</button>
      <button type="button" class="emergency" data-pacing="emergency" aria-pressed="false">${esc((RS.pacing && RS.pacing.emergency && RS.pacing.emergency.label) || 'Emergency')}</button>
    </div>
  </header>

  <nav class="ros-strip" id="ros-strip" aria-label="Lesson phases"></nav>

  <main class="ros-body">
    <section class="ros-card" id="ros-phase" aria-live="polite"></section>
    <aside>
      <div class="ros-panel ros-widget" id="ros-timer-widget">
        <h4>Class Timer</h4>
        <div class="ros-timer-row"><span class="ros-timer" id="ros-remaining">00:00</span></div>
        <div class="ros-timer-label">remaining in this phase</div>
        <div class="ros-timer-row" style="margin-top:.5rem"><span style="font-family:var(--ui);font-size:1.1rem" id="ros-elapsed">00:00</span></div>
        <div class="ros-timer-label">elapsed, whole class</div>
        <div class="ros-timer-controls">
          <button type="button" id="ros-timer-toggle">Start</button>
          <button type="button" id="ros-timer-reset">Reset phase</button>
        </div>
      </div>
      <div class="ros-panel ros-widget">
        <h4>At a Glance</h4>
        <dl class="ros-glance" id="ros-glance"></dl>
      </div>
      <div class="ros-panel ros-widget ros-quicklaunch" id="ros-quicklaunch">
        <h4>Quick Launch</h4>
      </div>
      <div class="ros-panel ros-widget" id="ros-status-widget">
        <h4>Assignment Status</h4>
        <table class="ros-status-table" id="ros-status-table"></table>
      </div>
      <div class="ros-panel ros-widget" id="ros-help-widget"></div>
      <div class="ros-panel ros-widget ros-notes">
        <h4>Teacher Notes <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--muted-sandstone);font-size:.68rem">(saved on this device only)</span></h4>
        <textarea id="ros-notes" placeholder="Type notes here..."></textarea>
      </div>
    </aside>
  </main>

  <div class="ros-pacing-panel" id="ros-pacing-panel" hidden></div>

  <p class="ros-footer-note">Prototype only &mdash; not linked from any student page, not wired into the site's automated checks. Content above is pulled live from this topic's own lesson data file (runOfShow block), so editing that file is the only way to change what this page says.</p>
</div>

<script id="ros-data" type="application/json">${json}</script>
<script>
(function(){
  var DATA = JSON.parse(document.getElementById('ros-data').textContent);
  var RS = DATA.runOfShow;
  var phases = RS.phases;
  var state = { phaseIndex: 0, slideIndex: 0, pacing: 'normal', running: false, remaining: 0, elapsed: 0 };

  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function mmss(sec){ sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec/60), s = sec%60; return (m<10?'0':'')+m+':'+(s<10?'0':'')+s; }
  function list(items){ return '<ul>' + items.map(function(i){ return '<li>'+esc(i)+'</li>'; }).join('') + '</ul>'; }

  function renderStrip(){
    var strip = document.getElementById('ros-strip');
    strip.innerHTML = phases.map(function(p, i){
      var cls = 'ros-tab' + (i < state.phaseIndex ? ' done' : '');
      return '<button type="button" class="'+cls+'" data-phase="'+i+'" aria-current="'+(i===state.phaseIndex?'true':'false')+'">'
        + '<span class="n">'+(i+1)+'</span><span class="lbl">'+esc(p.label)+'</span><span class="rng">'+esc(p.range)+'</span></button>';
    }).join('');
    Array.prototype.forEach.call(strip.querySelectorAll('[data-phase]'), function(btn){
      btn.addEventListener('click', function(){ goToPhase(Number(btn.getAttribute('data-phase'))); });
    });
  }

  function acrossTheWorldBox(a){
    if (!a) return '';
    return '<div class="ros-box connect"><strong>Across the World &mdash; '+esc(a.comparisonTopic)+'</strong>'
      + (a.teacherPrompt ? '<p style="margin:.4rem 0 0">'+esc(a.teacherPrompt)+'</p>' : '')
      + (a.listenFor ? '<p style="margin:.3rem 0 0;font-size:.85rem"><em>Listen for: '+a.listenFor.map(esc).join(', ')+'</em></p>' : '')
      + (a.target ? '<p style="margin:.4rem 0 0;font-weight:700">'+esc(a.target)+'</p>' : '') + '</div>';
  }

  function slideBody(slide){
    var h = '';
    if (slide.landTheseIdeas) h += '<div class="ros-section"><h3>Land These Ideas</h3>'+list(slide.landTheseIdeas)+'</div>';
    if (slide.teacherPrompt) h += '<div class="ros-box prompt"><strong>Teacher Prompt</strong><p style="margin:.3rem 0 0">'+esc(slide.teacherPrompt)+'</p></div>';
    if (slide.keyPoint) h += '<div class="ros-box good"><strong>Land this distinction</strong><p style="margin:.3rem 0 0">'+esc(slide.keyPoint)+'</p></div>';
    if (slide.note) h += '<div class="ros-box note">'+esc(slide.note)+'</div>';
    if (slide.avoid) h += '<div class="ros-box avoid"><strong>Avoid / Don\\'t Get Pulled Into</strong>'+list(slide.avoid)+'</div>';
    if (slide.acrossTheWorld) h += acrossTheWorldBox(slide.acrossTheWorld);
    return h;
  }

  function phaseBody(phase){
    var h = '';
    if (phase.retrieval) {
      h += '<div class="ros-section"><h3>Retrieval, No Notes</h3>'+list(phase.retrieval)+'</div>';
      if (phase.teacherMove) h += '<div class="ros-box note">'+esc(phase.teacherMove)+'</div>';
      if (phase.bridge) h += '<div class="ros-box prompt"><strong>Bridge</strong><p style="margin:.3rem 0 0">“'+esc(phase.bridge)+'”</p></div>';
    }
    if (phase.anchors) {
      h += '<div class="ros-section"><h3>Geographic Anchors</h3><ul>'+phase.anchors.map(function(a){ return '<li><strong>'+esc(a.label)+'</strong> &mdash; '+esc(a.detail)+'</li>'; }).join('')+'</ul></div>';
      if (phase.teacherPrompt) h += '<div class="ros-box prompt"><strong>Teacher Prompt</strong><p style="margin:.3rem 0 0">'+esc(phase.teacherPrompt)+'</p></div>';
      if (phase.note) h += '<div class="ros-box note">'+esc(phase.note)+'</div>';
      if (phase.takeaway) h += '<div class="ros-box good">'+esc(phase.takeaway)+'</div>';
    }
    if (phase.slides) {
      var slide = phase.slides[state.slideIndex];
      h += '<div class="ros-slidenav">'
        + '<button type="button" id="ros-slide-prev" '+(state.slideIndex===0?'disabled':'')+'>&larr; Previous Slide</button>'
        + '<span class="ros-slidedots">Slide '+(state.slideIndex+1)+' of '+phase.slides.length+' &middot; ~'+slide.minutes+' min</span>'
        + '<button type="button" id="ros-slide-next" '+(state.slideIndex===phase.slides.length-1?'disabled':'')+'>Next Slide &rarr;</button>'
        + '</div>'
        + '<h2 style="font-family:var(--title);font-size:1.15rem;margin:.2rem 0 .6rem">'+esc(slide.title)+'</h2>'
        + slideBody(slide);
    }
    if (phase.listenFor) {
      h += '<div class="ros-section"><h3>Listen For</h3></div>'
        + '<div class="ros-listen">'
        + '<div class="weak"><strong>Weak</strong><p>“'+esc(phase.listenFor.weak)+'”</p></div>'
        + (phase.listenFor.developing ? '<div class="weak"><strong>Developing</strong><p>“'+esc(phase.listenFor.developing)+'”</p></div>' : '')
        + '<div class="strong"><strong>Strong</strong><p>“'+esc(phase.listenFor.strong)+'”</p></div>'
        + '</div>';
      if (phase.lookFor) h += '<div class="ros-box note" style="margin-top:.7rem">You are looking for: <strong>'+esc(phase.lookFor)+'</strong></div>';
      if (phase.teacherRole) h += '<div class="ros-box note">'+esc(phase.teacherRole)+'</div>';
      if (phase.note) h += '<div class="ros-box note">'+esc(phase.note)+'</div>';
    }
    if (phase.why || phase.target) {
      if (phase.why) h += '<div class="ros-box note"><strong>Why this module</strong><p style="margin:.3rem 0 0">'+esc(phase.why)+'</p></div>';
      if (phase.target) h += '<div class="ros-box good"><strong>Target</strong><p style="margin:.3rem 0 0">'+esc(phase.target)+'</p></div>';
    }
    if (phase.table) {
      h += '<table class="ros-table"><thead><tr><th>State</th><th>Source of Power</th></tr></thead><tbody>'
        + phase.table.map(function(r){ return '<tr><td>'+esc(r.state)+'</td><td>'+esc(r.source)+'</td></tr>'; }).join('') + '</tbody></table>';
    }
    if (phase.teacherPrompt && !phase.anchors) h += '<div class="ros-box prompt"><strong>Teacher Prompt</strong><p style="margin:.3rem 0 0">'+esc(phase.teacherPrompt)+'</p></div>';
    if (phase.complicate) h += '<div class="ros-box connect"><strong>Then complicate</strong><p style="margin:.3rem 0 0">'+esc(phase.complicate)+'</p></div>';
    if (phase.prompt) h += '<div class="ros-box prompt"><strong>Prompt</strong><p style="margin:.3rem 0 0">'+esc(phase.prompt)+'</p></div>';
    if (phase.seed) h += '<div class="ros-box connect">'+esc(phase.seed)+'</div>';
    return h;
  }

  function renderPhase(){
    var phase = phases[state.phaseIndex];
    var card = document.getElementById('ros-phase');
    card.innerHTML = '<div class="ros-kicker">Current Phase &middot; '+esc(phase.range)+'</div>'
      + '<h2 class="ros-phase-title">'+esc(phase.label)+'</h2>'
      + '<div class="ros-phase-meta">~'+phase.minutes+' minutes'+(phase.module?' &middot; module: '+esc(phase.module):'')+'</div>'
      + phaseBody(phase)
      + '<div class="ros-nav">'
      + '<button type="button" id="ros-prev-phase" '+(state.phaseIndex===0?'disabled':'')+'>&larr; Previous Phase</button>'
      + '<button type="button" class="primary" id="ros-next-phase" '+(state.phaseIndex===phases.length-1?'disabled':'')+'>Next Phase &rarr;</button>'
      + '</div>';
    var prevBtn = document.getElementById('ros-slide-prev'), nextBtn = document.getElementById('ros-slide-next');
    if (prevBtn) prevBtn.addEventListener('click', function(){ state.slideIndex--; renderPhase(); });
    if (nextBtn) nextBtn.addEventListener('click', function(){ state.slideIndex++; renderPhase(); });
    document.getElementById('ros-prev-phase').addEventListener('click', function(){ goToPhase(state.phaseIndex-1); });
    document.getElementById('ros-next-phase').addEventListener('click', function(){ goToPhase(state.phaseIndex+1); });
    resetPhaseTimer();
  }

  function renderGlance(){
    var phase = phases[state.phaseIndex];
    var next = phases[state.phaseIndex+1];
    var glance = document.getElementById('ros-glance');
    glance.innerHTML = '<dt>You are here</dt><dd>'+(state.phaseIndex+1)+' of '+phases.length+' &mdash; '+esc(phase.label)+'</dd>'
      + '<dt>After this</dt><dd>'+(next ? esc(next.label) : 'Class complete') + '</dd>'
      + '<dt>Total class length</dt><dd>~'+RS.totalMinutes+' minutes</dd>';
  }

  function renderQuickLaunch(){
    var box = document.getElementById('ros-quicklaunch');
    box.innerHTML = '<h4>Quick Launch</h4>' + DATA.links.map(function(l){
      return '<a href="'+esc(l.url)+'" target="_blank" rel="noopener">'+esc(l.label)+' &rarr;</a>';
    }).join('');
  }

  function renderStatus(){
    var t = document.getElementById('ros-status-table');
    var status = RS.assignmentStatus || {};
    t.innerHTML = Object.keys(status).map(function(k){
      return '<tr><td>'+esc(k)+'</td><td>'+esc(status[k])+'</td></tr>';
    }).join('');
  }

  function renderHelp(){
    var box = document.getElementById('ros-help-widget');
    var misconceptions = RS.misconceptions || [];
    if (!misconceptions.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<h4>If Students Need More</h4><button type="button" class="ros-toggle" id="ros-reteach-toggle">Show common misconceptions</button><div id="ros-reteach-body" hidden style="margin-top:.6rem;font-size:.82rem"></div>';
    document.getElementById('ros-reteach-toggle').addEventListener('click', function(){
      var body = document.getElementById('ros-reteach-body');
      body.hidden = !body.hidden;
      if (!body.hidden) {
        body.innerHTML = misconceptions.map(function(m){
          return '<p style="margin:.5rem 0"><strong>“'+esc(m.claim)+'”</strong><br>'+esc(m.correction)+'</p>';
        }).join('');
      }
    });
  }

  function renderPacingPanel(){
    var panel = document.getElementById('ros-pacing-panel');
    if (state.pacing === 'normal') { panel.hidden = true; return; }
    var mode = RS.pacing && RS.pacing[state.pacing];
    if (!mode) { panel.hidden = true; return; }
    panel.hidden = false;
    panel.innerHTML = '<div><h4 class="route">Route</h4><p>'+esc(mode.route)+'</p></div>'
      + '<div><h4 class="skip">What to Skip First</h4>'+list((RS.pacing.skipFirst||[]).slice(0,8))+'</div>'
      + '<div><h4 class="protect">Protect</h4>'+list(RS.pacing.protect||[])+'</div>';
  }

  function goToPhase(i){
    if (i < 0 || i >= phases.length) return;
    state.phaseIndex = i; state.slideIndex = 0;
    renderStrip(); renderPhase(); renderGlance();
  }

  // Timer
  var timerHandle = null;
  function resetPhaseTimer(){
    var phase = phases[state.phaseIndex];
    state.remaining = phase.minutes * 60;
    updateTimerDisplay();
  }
  function updateTimerDisplay(){
    document.getElementById('ros-remaining').textContent = mmss(state.remaining);
    document.getElementById('ros-elapsed').textContent = mmss(state.elapsed);
  }
  function tick(){
    state.remaining = Math.max(0, state.remaining - 1);
    state.elapsed += 1;
    updateTimerDisplay();
  }
  document.getElementById('ros-timer-toggle').addEventListener('click', function(e){
    state.running = !state.running;
    e.target.textContent = state.running ? 'Pause' : 'Start';
    if (state.running) { timerHandle = setInterval(tick, 1000); }
    else { clearInterval(timerHandle); }
  });
  document.getElementById('ros-timer-reset').addEventListener('click', resetPhaseTimer);

  // Pacing mode
  Array.prototype.forEach.call(document.querySelectorAll('[data-pacing]'), function(btn){
    btn.addEventListener('click', function(){
      state.pacing = btn.getAttribute('data-pacing');
      Array.prototype.forEach.call(document.querySelectorAll('[data-pacing]'), function(b){ b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      renderPacingPanel();
    });
  });

  // Notes, saved locally only
  var notesKey = 'behistorical-run-of-show-notes-' + (DATA.meta.topic || '').replace(/\\s+/g, '-');
  var notesEl = document.getElementById('ros-notes');
  try { notesEl.value = localStorage.getItem(notesKey) || ''; } catch (e) {}
  notesEl.addEventListener('input', function(){ try { localStorage.setItem(notesKey, notesEl.value); } catch (e) {} });

  renderStrip(); renderPhase(); renderGlance(); renderQuickLaunch(); renderStatus(); renderHelp(); renderPacingPanel();
})();
</script>
</body>
</html>
`;
}

module.exports = { renderRunOfShow };
