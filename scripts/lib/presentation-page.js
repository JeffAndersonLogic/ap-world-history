'use strict';
/*
 * Renders a topic's Class Presentation: the projector surface for Content
 * Delivery (Module 03), and the same page a student reopens to review.
 *
 * ── Where the words come from, and why not from lecture.segments ──────────
 *
 * Slides come from `lecture.slides`, authored as slide text. They are NOT
 * derived from `lecture.segments[].bullets`, and a future version must not
 * try. Those bullets are full sentences written to be read on a card at arm's
 * length; the first version of this file split them one-per-slide and set
 * them at 40px, which is a paragraph on a wall and produced notes no student
 * could copy. There is no transformation that turns "The Maya built an
 * enduring civilization of independent city-states across Mesoamerica, no
 * single ruler governed all Maya people" into "Independent, competing
 * city-states". A person writes that.
 *
 * The house shape is the hand-built Teach Mode decks in unit-1: a headline
 * that makes a claim, then three or four short phrases revealed one at a
 * time. A phrase written "Term -> gloss" becomes a card with the term in
 * bronze, matching how the 1.4 deck renders "Maya / Independent, competing
 * city-states".
 *
 * ── Why there are no presenter notes, ever ────────────────────────────────
 *
 * One URL serves the projector and the student. The site is static files on
 * GitHub Pages, so anything in the file reaches every browser that opens it
 * and hiding a panel with CSS ships the words anyway. build-student-decks.js
 * answers that by stripping a second file; this answers it by having nothing
 * to strip. The teacher's notes stay in the command center, which is already
 * teacher-gated. Do not add a notes panel, a data-notes attribute or a
 * ?mode= parameter. validate.js fails the push on all of those.
 */

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap';

/* The limits validate.js enforces. Exported so the check and the renderer
 * cannot disagree about what "short enough to project" means. */
const MAX_HEADLINE = 44;
const MAX_POINT = 64;

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* "Kilwa -> gold and ivory" becomes a term and a gloss. A phrase with no
 * arrow is a statement in its own right ("Own quarters, own law") and stays
 * whole. Splitting on the first arrow only, so a gloss may contain one. */
function splitPoint(text) {
  const i = String(text).indexOf('->');
  if (i < 0) return { term: null, gloss: String(text).trim() };
  return {
    term: String(text).slice(0, i).trim(),
    gloss: String(text).slice(i + 2).trim()
  };
}

function imgTag(image, cls, fallback) {
  return `<img class="${cls}" src="${esc(image.url)}" alt="${esc(image.caption || '')}"`
    + ` onerror="this.onerror=null;this.closest('.slide').classList.add('noart')"`
    + `${fallback ? ` data-fallback="${esc(fallback)}"` : ''}>`;
}

function pointCard(text, step) {
  const { term, gloss } = splitPoint(text);
  const body = term
    ? `<span class="term">${esc(term)}</span><span class="gloss">${esc(gloss)}</span>`
    : `<span class="plain">${esc(gloss)}</span>`;
  return `<li class="pt" data-step="${step}">${body}</li>`;
}

function slideMarkup(s, i, total) {
  const points = s.points || [];
  const hasArt = !!(s.image && s.image.url);
  const cls = 'slide content' + (hasArt ? ' figure' : ' cards');
  const n = i + 1;

  const fig = hasArt
    ? `<figure class="art">${imgTag(s.image, 'shot')}`
      + (s.image.caption || s.image.credit
        ? `<figcaption>${esc(s.image.caption || '')}`
          + (s.image.credit ? ` <cite>${esc(s.image.credit)}</cite>` : '')
          + `</figcaption>`
        : '')
      + `</figure>`
    : '';

  return `<section class="${cls}" id="s${n}" data-steps="${points.length}"`
    + ` data-title="${esc(s.headline || '')}" role="group"`
    + ` aria-roledescription="slide" aria-label="Slide ${n} of ${total}" hidden>`
    + `<header>`
    + (s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : '')
    + `<h2>${esc(s.headline || '')}</h2>`
    + `</header>`
    + `<div class="body">`
    + fig
    + `<ul class="pts n${points.length}">`
    + points.map((p, k) => pointCard(p, k + 1)).join('')
    + `</ul>`
    + `</div>`
    + `</section>`;
}

function titleMarkup(meta, total) {
  return `<section class="slide title" id="s0" data-steps="0"`
    + ` data-title="${esc(meta.title || '')}" role="group"`
    + ` aria-roledescription="slide" aria-label="Title slide" hidden>`
    + (meta.unit ? `<p class="eyebrow">${esc(meta.unit)}</p>` : '')
    + `<h1>${esc(meta.title || meta.topic || '')}</h1>`
    + (meta.subtitle ? `<p class="sub">${esc(meta.subtitle)}</p>` : '')
    + `</section>`;
}

const STYLE = `
:root{
  --ink:#151718; --paper:#f5f0e7; --clean:#fffdf7; --steel:#1a1c1d;
  --charcoal:#2b2f31; --gold:#c9a46a; --bronze:#8c5a2b; --oxidized:#6b3e1f;
  --rule:#ddd2be; --iron:#5a5f5c;
  --font-display:'Cinzel',Georgia,'Times New Roman',serif;
  --font-body:'Libre Baskerville',Georgia,serif;
  --font-ui:'Montserrat','Helvetica Neue',Arial,sans-serif;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%;background:#0d0e0f;color:var(--ink)}
.skip{position:absolute;left:8px;top:8px;z-index:50;background:var(--clean);
  color:var(--ink);font-family:var(--font-ui);font-weight:600;font-size:13px;
  padding:8px 14px;border-radius:4px;transform:translateY(-200%)}
.skip:focus{transform:none}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px}

/* A fixed board scaled to fit: what fits at the desk is what lands on the
   wall, and a phone gets the same slide shrunk rather than reflowed. */
#viewport{position:fixed;inset:0;display:grid;place-items:center;overflow:hidden}
#stage{width:1280px;height:720px;position:relative;flex:none;
  transform:scale(var(--scale,1));transform-origin:center center;
  background:var(--paper);box-shadow:0 30px 90px rgba(0,0,0,.55)}

.slide{position:absolute;inset:0;padding:56px 72px 64px;overflow:hidden;
  background:var(--paper);color:var(--ink);font-family:var(--font-body)}
.slide[hidden]{display:none!important}
.slide.on{display:flex;flex-direction:column}

.eyebrow{margin:0 0 12px;font-family:var(--font-ui);font-weight:700;
  font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:var(--oxidized)}

/* Title */
.slide.title{background:var(--steel);color:var(--clean);justify-content:center}
.slide.title .eyebrow{color:var(--gold)}
.slide.title h1{margin:0;font-family:var(--font-display);font-weight:700;
  font-size:62px;line-height:1.1;color:var(--clean);overflow-wrap:break-word}
.slide.title .sub{margin:24px 0 0;font-size:23px;line-height:1.5;
  color:#d8d2c6;max-width:58ch}

/* Headline: a claim, with the bronze rule under its first words. */
.slide.content header{flex:none;margin-bottom:34px}
.slide.content h2{margin:0;font-family:var(--font-display);font-weight:700;
  font-size:50px;line-height:1.12;color:var(--ink);overflow-wrap:break-word;
  display:inline-block;border-bottom:5px solid var(--bronze);padding-bottom:10px}

.slide .body{flex:1;display:flex;gap:46px;align-items:center;min-height:0}

/* Points. Revealed one at a time: hidden ones keep their space so nothing
   jumps as the teacher advances. */
.pts{list-style:none;margin:0;padding:0;display:flex;gap:18px}
.slide.cards .pts{flex-direction:row;flex:1;align-items:stretch}
.slide.figure .pts{flex-direction:column;width:440px;flex:none}
.pt{visibility:hidden;background:var(--clean);border:1px solid var(--rule);
  border-top:5px solid var(--bronze);border-radius:7px;padding:26px 26px;
  display:flex;flex-direction:column;justify-content:center;gap:10px;flex:1}
.slide.cards .pt{min-height:210px}
.pt.shown{visibility:visible}
.term{font-family:var(--font-ui);font-weight:700;color:var(--bronze);
  font-size:27px;line-height:1.15}
.gloss{font-size:22px;line-height:1.35;color:var(--ink)}
.plain{font-size:25px;line-height:1.3;color:var(--ink)}
.slide.cards .pts.n4 .term{font-size:24px}
.slide.cards .pts.n4 .gloss{font-size:20px}
.slide.cards .pts.n4 .plain{font-size:22px}

/* Figure slides: the picture carries the slide, the cards sit beside it. */
.art{margin:0;flex:1;display:flex;flex-direction:column;gap:12px;min-width:0}
.art .shot{width:100%;height:404px;object-fit:cover;display:block;
  border:1px solid var(--rule);background:var(--charcoal)}
.art figcaption{font-family:var(--font-ui);font-size:14px;line-height:1.45;
  color:var(--iron)}
.art cite{font-style:normal;color:#8a8275}
/* A picture that fails in the room must not leave a hole: the cards take the
   slide and the figure is removed outright, never swapped for generic art. */
.slide.noart .art{display:none}
.slide.noart .pts{flex-direction:row;width:auto;flex:1}

#bar{position:fixed;left:0;right:0;bottom:0;z-index:20;display:flex;
  align-items:center;gap:10px;padding:10px 14px;
  background:rgba(13,14,15,.93);font-family:var(--font-ui)}
#bar button{font:inherit;font-size:13px;font-weight:600;color:var(--clean);
  background:#2e3335;border:1px solid #454b4e;border-radius:4px;
  padding:7px 13px;cursor:pointer}
#bar button:hover{background:#3c4245}
#count{color:#cfc7b8;font-size:13px;font-variant-numeric:tabular-nums;
  margin-left:auto;letter-spacing:.06em}
#bar .home{color:var(--gold);text-decoration:none;font-size:13px;font-weight:600}

#ov{position:fixed;inset:0;z-index:30;background:rgba(13,14,15,.97);
  overflow:auto;padding:28px}
#ov[hidden]{display:none}
#ov .grid{display:grid;gap:14px;
  grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr))}
#ov button{display:block;width:100%;text-align:left;font-family:var(--font-ui);
  font-size:14px;line-height:1.4;color:var(--clean);background:#22282a;
  border:1px solid #3b4245;border-radius:5px;padding:13px 15px;cursor:pointer}
#ov button:hover{background:#2e3538}
#ov .n{display:block;font-weight:700;color:var(--gold);margin-bottom:5px;
  letter-spacing:.1em;font-size:11px}

@media print{#bar,#ov,.skip{display:none!important}.pt{visibility:visible}}
`;

const SCRIPT = `
(function () {
  var stage = document.getElementById('stage');
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var ov = document.getElementById('ov');
  var i = 0, step = 0;

  function steps(n) { return parseInt(slides[n].getAttribute('data-steps'), 10) || 0; }

  function fit() {
    stage.style.setProperty('--scale', Math.min(
      window.innerWidth / 1280,
      (window.innerHeight - 48) / 720
    ));
  }

  function paint() {
    slides.forEach(function (s, k) {
      var on = k === i;
      s.hidden = !on;
      s.classList.toggle('on', on);
    });
    var pts = slides[i].querySelectorAll('.pt');
    [].forEach.call(pts, function (p, k) { p.classList.toggle('shown', k < step); });
    count.textContent = (i + 1) + ' / ' + slides.length;
    if (location.hash !== '#s' + (i + 1)) {
      history.replaceState(null, '', '#s' + (i + 1));
    }
  }

  /* Forward reveals the next point, then moves on. Backward un-reveals, then
     lands on the previous slide fully revealed, which is what a presenter
     stepping back to re-explain actually wants to see. */
  function fwd() {
    if (step < steps(i)) { step++; }
    else if (i < slides.length - 1) { i++; step = 0; }
    paint();
  }
  function back() {
    if (step > 0) { step--; }
    else if (i > 0) { i--; step = steps(i); }
    paint();
  }
  function go(n, full) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    step = full ? steps(i) : 0;
    paint();
  }

  function overview(open) {
    ov.hidden = !open;
    if (open) { var b = ov.querySelector('button'); if (b) b.focus(); }
  }

  document.getElementById('prev').onclick = back;
  document.getElementById('next').onclick = fwd;
  document.getElementById('btn-ov').onclick = function () { overview(ov.hidden); };
  document.getElementById('btn-fs').onclick = function () {
    if (document.fullscreenElement) { document.exitFullscreen(); }
    else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  [].forEach.call(ov.querySelectorAll('button'), function (b, k) {
    b.onclick = function () { overview(false); go(k, true); };
  });

  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input,textarea')) return;
    var k = e.key;
    if (k === 'Escape' && !ov.hidden) { overview(false); return; }
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); fwd(); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); back(); }
    else if (k === 'ArrowDown') { e.preventDefault(); go(i + 1, false); }
    else if (k === 'ArrowUp') { e.preventDefault(); go(i - 1, false); }
    else if (k === 'Home') { e.preventDefault(); go(0, false); }
    else if (k === 'End') { e.preventDefault(); go(slides.length - 1, true); }
    else if (k === 'o' || k === 'O') { overview(ov.hidden); }
    else if (k === 'f' || k === 'F') { document.getElementById('btn-fs').click(); }
  });

  window.addEventListener('resize', fit);
  fit();

  /* A student arriving at #s4 wants to read slide 4, not click through it. */
  var m = (location.hash || '').match(/^#s(\\d+)$/);
  go(m ? parseInt(m[1], 10) - 1 : 0, !!m);
})();
`;

/**
 * @param {object} lesson  window.BEHISTORICAL_LESSON for the topic
 * @param {object} opts    { lessonFile } the lesson shell to link back to
 */
function renderPresentation(lesson, opts) {
  const o = opts || {};
  const meta = lesson.meta || {};
  const slides = (lesson.lecture && lesson.lecture.slides) || [];
  const total = slides.length + 1;
  const title = `${meta.topic || 'BeHistorical'} Class Slides | ${meta.title || ''}`.trim();

  const body = [titleMarkup(meta, total)]
    .concat(slides.map((s, i) => slideMarkup(s, i, total)));

  const overview = [`<button type="button"><span class="n">01</span>${esc(meta.title || '')}</button>`]
    .concat(slides.map((s, k) =>
      `<button type="button"><span class="n">${String(k + 2).padStart(2, '0')}</span>`
      + `${esc(s.headline || '')}</button>`))
    .join('\n      ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="Class slides for ${esc(meta.topic || '')}. Reopen any time to review the lecture.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${GOOGLE_FONTS_HREF}" rel="stylesheet">
  <style>${STYLE}</style>
</head>
<body>
  <a class="skip" href="#stage">Skip to the slides</a>
  <main id="viewport">
    <div id="stage" tabindex="-1">
${body.map(s => '      ' + s).join('\n')}
    </div>
  </main>

  <div id="ov" hidden aria-label="All slides">
    <div class="grid">
      ${overview}
    </div>
  </div>

  <nav id="bar" aria-label="Slide controls">
    <button id="prev" type="button">&larr; Back</button>
    <button id="next" type="button">Next &rarr;</button>
    <button id="btn-ov" type="button">All slides</button>
    <button id="btn-fs" type="button">Full screen</button>
    <a class="home" href="${esc(o.lessonFile || '../index.html')}">Back to the lesson</a>
    <span id="count">1 / ${total}</span>
  </nav>

  <script>${SCRIPT}</script>
</body>
</html>
`;
}

module.exports = { renderPresentation, splitPoint, MAX_HEADLINE, MAX_POINT };
