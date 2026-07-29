/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, EVENT PAGE RENDERER
   File: assets/js/behistorical-ce-event-renderer.js

   Reads window.CE_EVENT and writes steps 01 to 05 into the page shell.
   Every event page is this same renderer fed a different data file, so an
   event page is: shell + data file + this script.

   Load order on an event page:
     1. assets/js/behistorical-ce-form-config.js
     2. assets/data/ce-event-NN-slug.js        (defines window.CE_EVENT)
     3. this file
     4. assets/js/behistorical-ce-newsroom.js  (paints the spine, wires the rail)

   Target elements the shell must provide:
     [data-slot="hero"] [data-slot="brief"] [data-slot="rail"]
     [data-slot="spine"] [data-slot="culture"]
   ========================================================================== */
(function () {
  'use strict';

  var E = window.CE_EVENT;
  if (!E) return;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function slot(name) { return document.querySelector('[data-slot="' + name + '"]'); }
  function put(name, html) { var el = slot(name); if (el) el.innerHTML = html; }

  document.title = E.headline + ' | BeHistorical Current Events';

  /* ── Hero ──────────────────────────────────────────────────────────────── */
  put('hero',
    '<div class="event-hero-meta">' +
      '<span class="pill pill-live">Event ' + esc(E.id) + '</span>' +
      '<span class="pill">' + esc(E.strand) + '</span>' +
      '<span class="dateline">Traced backward to ' +
        esc(E.tracedTo || E.trace[E.trace.length - 1].years) + '</span>' +
    '</div>' +
    '<h1>' + esc(E.headline) + '</h1>' +
    '<p class="dek">' + esc(E.dek) + '</p>' +
    '<p class="standfirst">' + esc(E.standfirst) + '</p>' +
    '<div class="event-hero-actions">' +
      '<a class="btn btn-signal" href="#trace">Start the Trace &darr;</a>' +
      '<a class="btn btn-quiet" href="#brief">Read today’s brief</a>' +
    '</div>'
  );

  /* ── The Local to Global rail (hero copy) ──────────────────────────────── */
  function railHtml(idSuffix) {
    var btns = E.scales.map(function (s) {
      return '<button type="button" role="tab" class="rail-btn" ' +
             'id="rail-' + esc(s.key) + '-' + idSuffix + '" ' +
             'data-scale="' + esc(s.key) + '" aria-selected="false" ' +
             'aria-controls="scale-panel-' + esc(s.key) + '">' + esc(s.label) + '</button>';
    }).join('');
    return '<div class="scale-rail" data-scale-rail data-default="' +
             esc(E.scales[0].key) + '">' +
             '<div class="scale-rail-inner">' +
               '<span class="scale-rail-label">Local &rarr; Global</span>' +
               '<div class="scale-btns" role="tablist" aria-label="Choose a scale">' +
                 btns +
               '</div>' +
             '</div>' +
           '</div>';
  }
  put('rail', railHtml('top'));

  /* ── 01, The Brief ─────────────────────────────────────────────────────── */
  function briefCard(c) {
    return '<article class="brief-card">' +
      '<span class="pill pill-live">' + esc(c.label) + '</span>' +
      '<h3>' + esc(c.title) + '</h3>' +
      '<p>' + esc(c.note) + '</p>' +
      '<a class="btn btn-sm" href="' + esc(c.url) + '" target="_blank" rel="noopener">' +
        esc(c.cta) + ' &nearr;</a>' +
    '</article>';
  }
  put('brief',
    '<div class="step-head">' +
      '<span class="step-num" style="color:var(--signal)">01</span>' +
      '<h2 class="step-title">The Brief</h2>' +
    '</div>' +
    '<p class="step-note">Ten minutes of video, one short read. This is today’s pulse on the event, before we go anywhere near its history.</p>' +
    '<div class="brief-grid">' + briefCard(E.brief.clip) + briefCard(E.brief.read) + '</div>' +
    '<div class="brief-prompt">' +
      '<div class="kicker">Write this down</div>' +
      '<p>' + esc(E.brief.prompt) + '</p>' +
    '</div>'
  );

  /* ── The spine: steps 02 to 05 ─────────────────────────────────────────── */

  /* 02, Where in the World. The locator is drawn locally, four nested rings,
     so there is no map file to break and no map that can be off-topic. */
  function locatorSvg() {
    return '<svg class="locator" data-scale-locator data-scale="' + esc(E.scales[0].key) + '" ' +
      'viewBox="0 0 230 230" width="230" height="230" role="img" ' +
      'aria-label="Four nested scales, from the town outward to the world">' +
      '<rect class="ring r-world"      x="4"  y="4"  width="222" height="222"/>' +
      '<rect class="ring r-us"         x="26" y="26" width="178" height="178"/>' +
      '<rect class="ring r-indiana"    x="52" y="52" width="126" height="126"/>' +
      '<rect class="ring r-zionsville" x="80" y="80" width="70"  height="70"/>' +
      '<circle class="pin" cx="115" cy="115" r="6"/>' +
      '<text class="ring-label t-world"      x="115" y="19"  text-anchor="middle">World</text>' +
      '<text class="ring-label t-us"         x="115" y="42"  text-anchor="middle">United States</text>' +
      '<text class="ring-label t-indiana"    x="115" y="68"  text-anchor="middle">Indiana</text>' +
      '<text class="ring-label t-zionsville" x="115" y="96"  text-anchor="middle">Zionsville</text>' +
    '</svg>';
  }

  var panels = E.scales.map(function (s) {
    return '<div class="scale-panel" role="tabpanel" id="scale-panel-' + esc(s.key) + '" ' +
      'data-scale-panel="' + esc(s.key) + '" aria-labelledby="rail-' + esc(s.key) + '-top" hidden>' +
      '<h3>' + esc(s.title) + '</h3>' +
      '<p>' + esc(s.body) + '</p>' +
      '<div class="scale-ask"><strong>Ask</strong>' + esc(s.ask) + '</div>' +
    '</div>';
  }).join('');

  var step02 =
    '<section class="spine-item" id="scale" data-reveal>' +
      '<div class="step-head"><span class="step-num">02</span>' +
      '<h2 class="step-title">Where in the World</h2></div>' +
      '<p class="step-note">' + esc(E.scaleIntro) + '</p>' +
      '<div class="locator-row">' +
        locatorSvg() +
        '<div>' + railHtml('step') + panels + '</div>' +
      '</div>' +
    '</section>';

  /* 03, The Trace. One .spine-item per card so each gets its own node on the
     line and its own interpolated color. Newest first, always. */
  var traceCards = E.trace.map(function (c) {
    return '<section class="spine-item" data-reveal>' +
      '<article class="trace-card">' +
        '<div class="trace-head">' +
          '<span class="era-tag">' + esc(c.era) + '</span>' +
          '<span class="trace-years">' + esc(c.years) + '</span>' +
        '</div>' +
        '<h3>' + esc(c.label) + '</h3>' +
        '<p class="trace-summary">' + esc(c.summary) + '</p>' +
        '<p class="trace-source"><strong>Source</strong><br>' + esc(c.source) + '</p>' +
      '</article>' +
    '</section>';
  }).join('');

  var step03 =
    '<section class="spine-item" id="trace" data-reveal>' +
      '<div class="step-head"><span class="step-num">03</span>' +
      '<h2 class="step-title">The Trace</h2></div>' +
      '<p class="step-note">' + esc(E.traceIntro) + '</p>' +
    '</section>' + traceCards;

  /* 04, Evidence Lab. */
  var evidence = E.evidence.map(function (d, i) {
    var n = String(i + 1).padStart(2, '0');
    return '<article class="evidence-item">' +
      '<div class="evidence-top"><span class="evidence-n">' + n + '</span>' +
        '<h3>' + esc(d.title) + '</h3></div>' +
      '<p class="evidence-cite">' + esc(d.author) + ' &middot; ' + esc(d.date) +
        ' &middot; ' + esc(d.host) + '</p>' +
      '<p class="evidence-what">' + esc(d.what) + '</p>' +
      '<div class="evidence-task"><strong>Your job</strong>' + esc(d.task) + '</div>' +
      '<a class="btn btn-quiet btn-sm" href="' + esc(d.url) + '" target="_blank" rel="noopener">' +
        'Open the source &nearr;</a>' +
    '</article>';
  }).join('');

  var step04 =
    '<section class="spine-item" id="evidence" data-reveal>' +
      '<div class="step-head"><span class="step-num">04</span>' +
      '<h2 class="step-title">Evidence Lab</h2></div>' +
      '<p class="step-note">' + esc(E.evidenceIntro) + '</p>' +
      '<div class="evidence-list">' + evidence + '</div>' +
    '</section>';

  /* 05, Your Beat Checkpoint. The button carries its own form context. */
  var cp = E.checkpoint;
  var step05 =
    '<section class="spine-item" id="checkpoint" data-reveal>' +
      '<div class="step-head"><span class="step-num">05</span>' +
      '<h2 class="step-title">Your Beat Checkpoint</h2></div>' +
      '<div class="checkpoint">' +
        '<div class="checkpoint-milestone">' + esc(cp.milestone) + '</div>' +
        '<div class="kicker">Your story, not this one</div>' +
        '<p>' + esc(cp.prompt) + '</p>' +
        '<ul class="checkpoint-list">' +
          cp.checklist.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
        '</ul>' +
        '<div class="checkpoint-actions">' +
          '<button type="button" class="btn" data-ce-form ' +
            'data-event="' + esc(E.id) + '" data-step="05" ' +
            'data-prompt-id="' + esc(cp.promptId) + '" ' +
            'data-response-type="' + esc(cp.responseType) + '" ' +
            'data-skills="' + esc(cp.skills.join('|')) + '">Submit your beat &nearr;</button>' +
          '<a class="btn btn-quiet" href="../your-beat/index.html">See the rubric</a>' +
        '</div>' +
        '<p class="checkpoint-skills">Skill focus: ' + esc(cp.skills.join(' &middot; ')) + '</p>' +
      '</div>' +
    '</section>';

  put('spine',
    '<div class="spine-cap">' +
      '<span class="cap-mark"><span class="cap-dot"></span></span>' +
      '<span class="cap-text">Now' +
        '<span class="cap-note">Scroll down to go backward in time.</span></span>' +
    '</div>' +
    step02 + step03 + step04 + step05 +
    '<div class="spine-cap spine-cap-origin">' +
      '<span class="cap-mark"><span class="cap-dot"></span></span>' +
      '<span class="cap-text">Origin' +
        '<span class="cap-note">Everything above was caused by something down here.</span></span>' +
    '</div>'
  );

  /* ── Culture Beat ──────────────────────────────────────────────────────── */
  put('culture',
    '<div class="kicker">The Culture Beat</div>' +
    '<h2>It is not all heavy news.</h2>' +
    '<p class="dek">' + esc(E.culture.note) + '</p>' +
    '<div class="culture-grid">' +
      E.culture.items.map(function (c) {
        return '<article class="culture-card">' +
          '<span class="pill">' + esc(c.kind) + '</span>' +
          '<h3>' + esc(c.title) + '</h3>' +
          '<p>' + esc(c.by) + '</p>' +
          '<p style="margin-top:10px">' + esc(c.why) + '</p>' +
        '</article>';
      }).join('') +
    '</div>'
  );

  /* Behavior scripts run after this file and pick up the markup we just wrote. */
})();
