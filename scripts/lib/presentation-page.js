'use strict';
/*
 * Renders a topic's Class Presentation: the projector surface for Content
 * Delivery (Module 03), and the same page a student reopens at 11pm.
 *
 * ── Why one file serves both ──────────────────────────────────────────────
 *
 * This page carries NO presenter notes, deliberately and permanently. The
 * site is static files on GitHub Pages, so there is no server deciding who
 * sees what: anything in the file reaches every browser that opens it, and
 * hiding a panel with CSS ships the words anyway. The existing Teach Mode
 * decks answer that with a second generated file that has the notes removed
 * from its actual bytes (see scripts/build-student-decks.js). This answers it
 * the other way, by never having them: a page with no notes cannot leak
 * notes, there is no stripping step to get wrong, and there is only one URL
 * to give out.
 *
 * The teacher's notes live in the command center (teacher/index.html and the
 * per-topic pages), which is already the surface Jeff teaches from and which
 * is already gated as teacher-only. Do not add a notes panel, a data-notes
 * attribute, or a ?mode= parameter here. Any of those turns one safe URL back
 * into two files that can disagree, which is the failure the content model in
 * CLAUDE.md exists to refuse.
 *
 * ── Why the content is not authored here ──────────────────────────────────
 *
 * Every slide comes from that topic's own `lecture.segments`, the same array
 * the on-page lecture deck renders from. All 71 topics already have one. A
 * presentation authored separately would be a second copy of the lecture with
 * nothing able to say which one a student read, the same reason the eBook
 * renders the deep-reading modules rather than restating them.
 *
 * ── Why one bullet per slide ──────────────────────────────────────────────
 *
 * A lecture segment's bullets are full sentences, often over 250 characters,
 * because they were written for a card a student reads at arm's length. Three
 * of those on one projected slide is a wall of text nobody in row four can
 * read. Splitting them gives a legible slide and, incidentally, a better
 * lecture rhythm: a topic with 3 segments of 3 bullets becomes 13 slides
 * rather than 3, which is about right for the 16 to 20 minutes Content
 * Delivery gets in an 85-minute block.
 */

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap';

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Bullets carry **bold** for key terms and nothing else. Escape first, then
 * promote the markers, so a term containing an angle bracket cannot open a
 * tag. Any stray marker is left visible rather than guessed at. */
function inline(s) {
  return esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/* Slide text is one bullet, and bullets vary from about 90 to over 300
 * characters. A single type size either wastes half the board or overflows
 * it, so the size is chosen from the length. Three steps, not a continuous
 * scale, because a generated page has to be reproducible byte for byte and a
 * measured fit is not. */
function sizeClass(text) {
  const n = String(text || '').replace(/\*\*/g, '').length;
  if (n <= 140) return 'sz-l';
  if (n <= 260) return 'sz-m';
  return 'sz-s';
}

function artworkPath(topicLabel, id) {
  const m = String(topicLabel || '').match(/(\d+)\.(\d+)/);
  if (!m) return '../assets/images/media-fallback.svg';
  return `../assets/images/module-art/unit-${m[1]}/topic-${m[1]}-${m[2]}/${id}.svg`;
}

/* An empty url is a valid authored choice, per the Image Contract in
 * CLAUDE.md: it means "draw this slot's local artwork". The onerror is the
 * second half of the same contract, for a remote file that stops resolving. */
function segmentImage(seg, index, topicLabel) {
  const fallback = artworkPath(topicLabel, `lecture-${String(index + 1).padStart(2, '0')}`);
  const url = (seg.image && seg.image.url) || '';
  return {
    authored: !!url,
    src: url || fallback,
    fallback,
    alt: (seg.image && (seg.image.title || seg.image.caption)) || seg.title || '',
    caption: (seg.image && seg.image.caption) || ''
  };
}

function imgTag(img, cls) {
  return `<img class="${cls}" src="${esc(img.src)}" alt="${esc(img.alt)}"`
    + ` onerror="this.onerror=null;this.src='${esc(img.fallback)}'">`;
}

/* One flat list of slides, built before any markup, so the deck's shape is
 * inspectable and the overview and the counter cannot disagree with it. */
function buildSlides(lesson) {
  const meta = lesson.meta || {};
  const topicLabel = meta.topic || '';
  const segments = (lesson.lecture && lesson.lecture.segments) || [];
  const slides = [{
    kind: 'title',
    title: meta.title || topicLabel,
    eyebrow: meta.unit || '',
    sub: meta.subtitle || ''
  }];
  segments.forEach((seg, i) => {
    const img = segmentImage(seg, i, topicLabel);
    slides.push({
      kind: 'section', title: seg.title || `Part ${i + 1}`,
      eyebrow: `Part ${i + 1} of ${segments.length}`, img
    });
    (seg.bullets || []).forEach(b => {
      slides.push({ kind: 'point', eyebrow: seg.title || '', body: b, img });
    });
  });
  return slides;
}

function slideMarkup(s, i) {
  const n = String(i + 1);
  const title = s.kind === 'point'
    ? String(s.body || '').replace(/\*\*/g, '').slice(0, 70)
    : (s.title || '');
  const head = `<section class="slide ${s.kind}${s.kind === 'point' ? ' ' + sizeClass(s.body) : ''}"`
    + ` id="s${n}" data-title="${esc(title)}" role="group"`
    + ` aria-roledescription="slide" aria-label="Slide ${n}" hidden>`;

  if (s.kind === 'title') {
    return head
      + (s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : '')
      + `<h1>${esc(s.title)}</h1>`
      + (s.sub ? `<p class="sub">${esc(s.sub)}</p>` : '')
      + `</section>`;
  }
  if (s.kind === 'section') {
    // A section divider full-bleeds its picture, which is the right treatment
    // for a real photograph and the wrong one for the local fallback artwork:
    // that art is a small on-topic mark, and blown up to 1280x720 on a wall it
    // reads as a generic graphic nobody can place. So a segment with no
    // authored picture gets the plain steel treatment instead, and a picture
    // that fails to load at runtime drops to the same thing rather than
    // enlarging the fallback. `.noart` is what both paths land on.
    return head.replace('class="slide section', 'class="slide section' + (s.img.authored ? '' : ' noart'))
      + (s.img.authored
        ? `<div class="sec-art"><img class="full" src="${esc(s.img.src)}" alt="${esc(s.img.alt)}"`
          + ` onerror="this.onerror=null;this.closest('.slide').classList.add('noart')"></div>`
        : '')
      + `<div class="sec-txt"><p class="eyebrow">${esc(s.eyebrow)}</p>`
      + `<h2>${esc(s.title)}</h2></div>`
      + `</section>`;
  }
  return head
    + `<p class="eyebrow">${esc(s.eyebrow)}</p>`
    + `<div class="pt-row"><p class="body">${inline(s.body)}</p>`
    + `<figure class="pt-fig">${imgTag(s.img, 'thumb')}`
    + (s.img.caption ? `<figcaption>${esc(s.img.caption)}</figcaption>` : '')
    + `</figure></div>`
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

/* A fixed board scaled to fit, so what fits at the desk is what lands on the
   wall, and so a phone gets the same slide shrunk rather than reflowed. */
#viewport{position:fixed;inset:0;display:grid;place-items:center;overflow:hidden}
#stage{width:1280px;height:720px;position:relative;flex:none;
  transform:scale(var(--scale,1));transform-origin:center center;
  background:var(--paper);box-shadow:0 30px 90px rgba(0,0,0,.55)}

.slide{position:absolute;inset:0;padding:60px 76px;overflow:hidden;
  background:var(--paper);color:var(--ink);font-family:var(--font-body)}
.slide[hidden]{display:none!important}
.slide.on{display:flex;flex-direction:column;justify-content:center}

.eyebrow{margin:0 0 18px;font-family:var(--font-ui);font-weight:700;
  font-size:17px;letter-spacing:.14em;text-transform:uppercase;color:var(--oxidized)}

.slide.title{background:var(--steel);color:var(--clean);text-align:left}
.slide.title .eyebrow{color:var(--gold)}
.slide.title h1{margin:0;font-family:var(--font-display);font-weight:700;
  font-size:64px;line-height:1.1;color:var(--clean);overflow-wrap:break-word}
.slide.title .sub{margin:26px 0 0;font-size:24px;line-height:1.5;
  color:#d8d2c6;max-width:60ch}

.slide.section{padding:0;display:block}
.slide.section.on{display:block}
.slide.section .sec-art{position:absolute;inset:0}
.slide.section .sec-art .full{width:100%;height:100%;object-fit:cover;display:block}
.slide.section .sec-txt{position:absolute;inset:auto 0 0 0;padding:52px 76px 56px;
  background:linear-gradient(to top,rgba(21,23,24,.94) 55%,rgba(21,23,24,0))}
.slide.section.noart{background:var(--steel)}
.slide.section.noart .sec-art{display:none}
.slide.section.noart .sec-txt{position:static;padding:0;background:none;
  display:flex;flex-direction:column;justify-content:center;height:100%;
  padding-left:76px;padding-right:76px}
.slide.section .eyebrow{color:var(--gold);margin-bottom:10px}
.slide.section h2{margin:0;font-family:var(--font-display);font-weight:700;
  font-size:52px;line-height:1.14;color:var(--clean);overflow-wrap:break-word}

.pt-row{display:grid;grid-template-columns:1fr 400px;gap:52px;align-items:center}
.pt-row .body{margin:0;line-height:1.5}
.slide.sz-l .body{font-size:40px}
.slide.sz-m .body{font-size:32px}
.slide.sz-s .body{font-size:26px}
.body strong{font-weight:700;color:var(--oxidized)}
.pt-fig{margin:0}
.pt-fig .thumb{width:100%;height:300px;object-fit:cover;display:block;
  background:var(--charcoal);border:1px solid var(--rule)}
.pt-fig figcaption{margin-top:12px;font-family:var(--font-ui);font-size:14px;
  line-height:1.45;color:var(--iron)}

/* The bar is chrome, not content: it never carries anything a student should
   not see, and it prints nothing to the wall that is not on the slide. */
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
  font-size:13px;line-height:1.4;color:var(--clean);background:#22282a;
  border:1px solid #3b4245;border-radius:5px;padding:12px 14px;cursor:pointer}
#ov button:hover{background:#2e3538}
#ov .n{display:block;font-weight:700;color:var(--gold);margin-bottom:5px;
  letter-spacing:.1em;font-size:11px}

@media print{#bar,#ov,.skip{display:none!important}}
`;

const SCRIPT = `
(function () {
  var stage = document.getElementById('stage');
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var ov = document.getElementById('ov');
  var i = 0;

  function fit() {
    stage.style.setProperty('--scale', Math.min(
      window.innerWidth / 1280,
      (window.innerHeight - 48) / 720
    ));
  }

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, k) {
      var on = k === i;
      s.hidden = !on;
      s.classList.toggle('on', on);
    });
    count.textContent = (i + 1) + ' / ' + slides.length;
    if (location.hash !== '#s' + (i + 1)) {
      history.replaceState(null, '', '#s' + (i + 1));
    }
  }

  function overview(open) {
    ov.hidden = !open;
    if (open) { var b = ov.querySelector('button'); if (b) b.focus(); }
  }

  document.getElementById('prev').onclick = function () { show(i - 1); };
  document.getElementById('next').onclick = function () { show(i + 1); };
  document.getElementById('btn-ov').onclick = function () { overview(ov.hidden); };
  document.getElementById('btn-fs').onclick = function () {
    if (document.fullscreenElement) { document.exitFullscreen(); }
    else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  ov.querySelectorAll('button').forEach(function (b, k) {
    b.onclick = function () { overview(false); show(k); };
  });

  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input,textarea')) return;
    var k = e.key;
    if (k === 'Escape' && !ov.hidden) { overview(false); return; }
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); show(i + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); show(i - 1); }
    else if (k === 'Home') { e.preventDefault(); show(0); }
    else if (k === 'End') { e.preventDefault(); show(slides.length - 1); }
    else if (k === 'o' || k === 'O') { overview(ov.hidden); }
    else if (k === 'f' || k === 'F') { document.getElementById('btn-fs').click(); }
  });

  window.addEventListener('resize', fit);
  fit();

  var m = (location.hash || '').match(/^#s(\\d+)$/);
  show(m ? parseInt(m[1], 10) - 1 : 0);
})();
`;

/**
 * @param {object} lesson  window.BEHISTORICAL_LESSON for the topic
 * @param {object} opts    { lessonFile } the lesson shell to link back to
 * @returns {string} the complete page
 */
function renderPresentation(lesson, opts) {
  const o = opts || {};
  const meta = lesson.meta || {};
  const slides = buildSlides(lesson);
  const title = `${meta.topic || 'BeHistorical'} Class Slides | ${meta.title || ''}`.trim();

  const overview = slides.map((s, k) =>
    `<button type="button"><span class="n">${String(k + 1).padStart(2, '0')}</span>`
    + `${esc(s.kind === 'title' ? s.title : (s.kind === 'section' ? s.title : s.eyebrow))}</button>`
  ).join('\n      ');

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
${slides.map(slideMarkup).map(s => '      ' + s).join('\n')}
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
    <span id="count">1 / ${slides.length}</span>
  </nav>

  <script>${SCRIPT}</script>
</body>
</html>
`;
}

module.exports = { renderPresentation, buildSlides };
