#!/usr/bin/env node
'use strict';
//
// build-canvas-packets.js
//
// Builds standalone, single-file Canvas packets for the Foundations lessons,
// for use while student access to the live site is filtered.
//
//   canvas/<slug>-canvas.html        the real lesson page, self-contained
//   canvas/print/<slug>-print.html   light worksheet, rendered to PDF by
//                                    build-canvas-pdfs.sh
//
// The interactive packet is not a reimplementation of the lesson page. It IS
// the lesson page: the same shell, the same four stylesheets, the same
// renderer, the same data file, with every asset folded in. That is deliberate.
// An approximation drifts from the site the moment either one is edited; an
// inlined copy cannot, because there is only one set of sources.
//
// Everything that would otherwise be a request is embedded:
//
//   fonts       assets/fonts/behistorical-fonts-inline.css (see
//               build-inline-fonts.js), so Cinzel, Libre Baskerville, and
//               Montserrat render with no call to Google Fonts
//   stylesheets all four, concatenated in the shell's own order
//   logo        one base64 copy, assigned to both <img> tags by script, since
//               writing the data URI twice would double the file size
//   artwork     every module-art SVG and the instructional map, as data URIs
//               behind a BH_ART lookup the renderer's own artwork function
//               reads from
//   reading     the First & 10, itself fully inlined, carried in the iframe's
//               srcdoc instead of loaded from the capture wrapper
//
// Wikimedia photographs stay remote and keep the site's onerror fallback to
// local artwork, so a network that allows Commons shows the real picture and
// one that blocks it degrades exactly the way the site does.
//
// Run: node scripts/build-canvas-packets.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FOUNDATIONS = path.join(ROOT, 'foundations');
const ASSETS = path.join(ROOT, 'assets');
const OUT = path.join(ROOT, 'canvas');
const OUT_PRINT = path.join(OUT, 'print');

const TOPICS = [
  {
    shell: 'foundations-0-intro-to-behistorical.html',
    data: 'foundations-0-intro-to-behistorical-data.js',
    reading: 'first-and-10-foundations-0-intro-to-behistorical.html',
    slug: 'foundations-0-intro-to-behistorical',
    artDir: 'topic-f0'
  },
  {
    shell: 'foundations-1-geography.html',
    data: 'foundations-1-geography-data.js',
    reading: 'first-and-10-foundations-1-geography.html',
    slug: 'foundations-1-geography',
    artDir: 'topic-f1'
  }
];

// The shell's own <link> order. Concatenating in a different order would change
// which rules win.
const SITE_CSS = [
  path.join(ASSETS, 'css', 'behistorical.css'),
  path.join(ASSETS, 'css', 'behistorical-brand-lock.css'),
  path.join(ASSETS, 'css', 'behistorical-topic-template-v1.css'),
  path.join(FOUNDATIONS, 'foundations-topic.css')
];
const FONT_CSS = path.join(ASSETS, 'fonts', 'behistorical-fonts-inline.css');
const FORM_CONFIG = path.join(ASSETS, 'js', 'behistorical-form-config.js');
const RENDERER = path.join(FOUNDATIONS, 'foundations-topic-renderer.js');
const LOGO = path.join(ASSETS, 'logos', 'behistorical-logo.jpeg');

const MAGICSCHOOL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';

// ── helpers ───────────────────────────────────────────────────────────────────

const esc = v => String(v == null ? '' : v)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// The data files write emphasis as **bold**, same as the site renderers.
const md = s => String(s || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
const plain = s => String(s || '').replace(/\*\*(.*?)\*\*/g, '$1').trim();

function loadTopic(file) {
  const src = fs.readFileSync(path.join(FOUNDATIONS, file), 'utf8');
  const sandbox = {};
  new Function('window', src)(sandbox);
  if (!sandbox.FOUNDATION_TOPIC) throw new Error(`${file} did not set window.FOUNDATION_TOPIC`);
  return sandbox.FOUNDATION_TOPIC;
}

// Inlining is what makes the packet survive a blocked domain: nothing here
// resolves against a server at view time.
function dataUri(absPath) {
  const buf = fs.readFileSync(absPath);
  const ext = path.extname(absPath).toLowerCase();
  const mime = ext === '.svg' ? 'image/svg+xml'
    : ext === '.png' ? 'image/png'
      : ext === '.jpeg' || ext === '.jpg' ? 'image/jpeg' : 'application/octet-stream';
  return `data:${mime};base64,${buf.toString('base64')}`;
}

function art(artDir, id) {
  return dataUri(path.join(ROOT, 'assets', 'images', 'module-art', 'foundations', artDir, `${id}.svg`));
}

// Mirrors sanitizeImageUrl in foundations-topic-renderer.js: a Commons file page
// or thumb URL is normalised to the Special:FilePath form that serves bytes.
function commonsUrl(url) {
  const raw = String(url || '').trim();
  if (!raw || raw.startsWith('..')) return '';
  if (raw.includes('commons.wikimedia.org/wiki/Special:FilePath/')) return raw;
  const file = raw.match(/commons\.wikimedia\.org\/wiki\/File:([^?#]+)/i);
  if (file) return `https://commons.wikimedia.org/wiki/Special:FilePath/${file[1]}`;
  return raw;
}

// Photograph on top, inlined artwork underneath. If the school network blocks
// Commons the onerror swap leaves an on-topic picture rather than a dead frame.
function picture(remote, fallbackUri, alt) {
  const src = commonsUrl(remote);
  if (!src) return `<img class="bh-art" src="${fallbackUri}" alt="${esc(alt)}">`;
  return `<img src="${esc(src)}" alt="${esc(alt)}" data-fallback="${fallbackUri}" onerror="bhFallback(this)">`;
}

// The generated module artwork is a brand motif, the same gold check on every
// slot. On screen it is a reasonable floor for a photograph that will not load.
// On paper it is a page of toner that teaches nothing, so the print packet
// prints the picture's title, caption, and source instead.
function printFigure(cls, opts) {
  const body = opts.printImg
    ? `<img src="${opts.printImg}" alt="${esc(opts.alt || opts.title)}">`
    : '';
  const source = opts.source ? `<br><span class="p-url">${esc(opts.source)}</span>` : '';
  const label = opts.printImg ? '' : '<span class="p-imglabel">Image</span> ';
  const ask = opts.prompt ? `<br><em>${esc(opts.prompt)}</em>` : '';
  return `<figure class="${cls}${opts.printImg ? '' : ' p-noimg'}">${body}<figcaption>${label}<strong>${esc(opts.title)}</strong> ${esc(opts.caption)}${ask}${source}</figcaption></figure>`;
}

// Pulls the First & 10 out of its standalone page: the reading CSS, and
// everything from the title band down to the check questions. The builder
// sections and the module footer are dropped, they point at the Google Form and
// at lesson pages this packet cannot reach.
function readingParts(file, topicId) {
  const src = fs.readFileSync(path.join(FOUNDATIONS, file), 'utf8');

  const styleStart = src.indexOf('<style>');
  const styleEnd = src.indexOf('</style>');
  if (styleStart < 0 || styleEnd < 0) throw new Error(`${file}: no <style> block`);
  let css = src.slice(styleStart + 7, styleEnd);
  // The packet owns the page background; the reading is a card inside it.
  css = css.replace(/body\{background:var\(--blackened-steel\);[^}]*\}/, '');

  const bodyStart = src.indexOf('<div class="reading-title-band">');
  const bodyEnd = src.indexOf('<div class="builder-section">');
  if (bodyStart < 0 || bodyEnd < 0) throw new Error(`${file}: could not locate reading body`);
  let html = src.slice(bodyStart, bodyEnd).trim();

  // Give each check textarea a stable id so it autosaves and gathers.
  const questions = [];
  const qtexts = [...src.matchAll(/<p class="q-text">([\s\S]*?)<\/p>/g)].map(m => m[1].trim());
  let n = 0;
  html = html.replace(/<textarea class="q-textarea"([^>]*)><\/textarea>/g, (_, rest) => {
    n += 1;
    const id = `${topicId}-first10-q${n}`;
    questions.push({ id, label: `Module 02, First & 10 Question ${n}`, prompt: stripTags(qtexts[n - 1] || '') });
    return `<textarea class="q-textarea bh-response" id="${id}"${rest}></textarea>`;
  });

  return { css, html, questions };
}

function stripTags(s) {
  return String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

// ── the real lesson page, self-contained ──────────────────────────────────────

function readOrDie(file, hint) {
  if (!fs.existsSync(file)) throw new Error(`missing ${path.relative(ROOT, file)}${hint ? `, ${hint}` : ''}`);
  return fs.readFileSync(file, 'utf8');
}

// A literal replace that fails loudly. These patches key off exact substrings in
// the site's own source, so a silent no-op would ship a packet with a dead
// iframe or a 404 image and nothing would say so.
function must(src, find, replace, label) {
  const at = src.indexOf(find);
  if (at < 0) throw new Error(`patch "${label}" found no match, the site source has changed`);
  if (src.indexOf(find, at + find.length) >= 0) throw new Error(`patch "${label}" matched more than once`);
  return src.slice(0, at) + replace + src.slice(at + find.length);
}

function fontCss() {
  return readOrDie(FONT_CSS, 'run: node scripts/build-inline-fonts.js');
}

function cssBundle() {
  return fontCss() + '\n' + SITE_CSS.map(f => readOrDie(f)).join('\n');
}

// Every SVG in the topic's module-art folder, keyed by the id the renderer's
// foundationArtworkPath() asks for.
function artMap(artDir) {
  const dir = path.join(ASSETS, 'images', 'module-art', 'foundations', artDir);
  const map = {};
  fs.readdirSync(dir).filter(f => f.endsWith('.svg')).forEach(f => {
    map[path.basename(f, '.svg')] = dataUri(path.join(dir, f));
  });
  return map;
}

// srcdoc holds a whole document inside a double-quoted attribute.
function attrEscape(html) {
  return html.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// An HTML parser ends a <script> block at the first literal "</script" in the
// source, string literal or not. The packet inlines whole documents into script
// blocks, and those documents have script tags of their own, so every inlined
// body gets the sequence broken up. "<\/script" is the same string to a JS
// string literal and the same match to a regex literal, so this is safe to
// apply to code as well as to embedded markup.
function scriptSafe(js) {
  return String(js).replace(/<\/script/gi, '<\\/script');
}

// Every inlined script goes through here. behistorical-form-config.js documents
// its own <script src=...></script> include line in its banner comment, which
// silently truncated the file at 324 bytes the first time it was inlined
// without this.
function scriptTag(js) {
  return `<script>${scriptSafe(js)}</script>`;
}

// The capture wrapper's script, hoisted into the packet so the reading's
// "Submit to Google Form" behaves the way it does on the site.
//
// This is not cosmetic. The wrapper overrides the reading's own
// submitToGoogleForm with a URL carrying the unit, the topic id, the response
// type, and the topic's AP skills, and it prefills entry.1818136905 with what
// the student actually typed. The reading's unaided handler sends two fields and
// no answer, so dropping the wrapper would quietly downgrade every First & 10
// submission. The wrapper's own load hook is stripped, because the iframe it
// looks for does not exist until the module modal opens; renderFirst10's iframe
// calls wireFirst10Capture from its onload instead.
function captureScript(spec) {
  const src = readOrDie(path.join(FOUNDATIONS, spec.reading.replace(/\.html$/, '-capture.html')));
  const open = src.indexOf('<script>');
  const close = src.lastIndexOf('</script>');
  if (open < 0 || close < 0) throw new Error(`${spec.reading} capture wrapper has no script block`);
  let js = src.slice(open + '<script>'.length, close);

  const hook = "document.getElementById('first10-frame').addEventListener('load', wireFirst10Capture);";
  if (js.indexOf(hook) < 0) throw new Error('capture wrapper load hook not found, its script has changed');
  js = js.replace(hook, '');

  if (!/PREFILLED_FIRST10_FORM\s*=\s*'https:\/\/docs\.google\.com/.test(js)) {
    throw new Error('capture wrapper prefill URL not found, its script has changed');
  }
  return js;
}

// The First & 10 as a standalone document with its font link and form-config
// script folded in, ready to hand to the iframe.
function readingDocument(spec) {
  let doc = readOrDie(path.join(FOUNDATIONS, spec.reading));

  doc = doc.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/g, `<style>${fontCss()}</style>`);

  const formConfig = readOrDie(FORM_CONFIG);
  doc = doc.replace(/<script src="\.\.\/assets\/js\/behistorical-form-config\.js[^"]*"><\/script>/,
    () => scriptTag(formConfig));

  // The footer's "Back to Modules" and "Content Delivery" links point at the
  // lesson page by filename. Inside the packet's modal there is no such file,
  // so they drive the parent instead: close the modal, and for the second one
  // scroll on to the lecture section. Foundations 1 links to #content, which
  // does not exist on either shell, so both resolve to #lecture.
  doc = doc.replace(/href="foundations-[^"]*#modules"/g,
    `href="#" onclick="parent.closeModule();return false"`);
  doc = doc.replace(/href="foundations-[^"]*#(?:lecture|content)"/g,
    `href="#" onclick="parent.closeModule();parent.jumpToSection('#lecture');return false"`);

  return doc;
}

function sitePacket(spec, T) {
  let html = readOrDie(path.join(FOUNDATIONS, spec.shell));

  // 1. Stylesheets. The preconnect hints and all five link tags collapse into
  //    one inline <style>.
  html = html.replace(/<link rel="preconnect"[^>]*>/g, '');
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/g, '');
  const bundle = cssBundle();
  html = must(html,
    '<link rel="stylesheet" href="../assets/css/behistorical.css">',
    '@@CSS@@', 'first stylesheet link');
  html = html.replace(/<link rel="stylesheet" href="(\.\.\/assets\/css\/|)[^"]*\.css(\?[^"]*)?">/g, '');
  html = html.replace('@@CSS@@', () => `<style>${bundle}</style>`);

  // 2. Logo. One base64 copy assigned to both tags at load; writing the data
  //    URI into two src attributes would carry the payload twice.
  const logo = dataUri(LOGO);
  html = html.replace(/<img src="\.\.\/assets\/logos\/behistorical-logo\.jpeg"/g,
    '<img data-bh-logo="1" alt=""');

  // 3. Links off this page. Nothing outside the packet is reachable, and a
  //    link that goes nowhere is worse than no link.
  html = must(html,
    '<a href="../index.html">Home</a><a href="index.html">Foundations</a>',
    '', 'topbar off-page nav');
  html = html.replace(/<a class="brand-mini" href="\.\.\/index\.html">/, '<a class="brand-mini">');
  html = must(html,
    '<a class="logo-home-link" href="../index.html">',
    '<a class="logo-home-link">', 'hero logo home link');

  // 4. Scripts. Same three files the shell loads, in the same order, with the
  //    renderer patched to read inlined assets instead of fetching them.
  const art = artMap(spec.artDir);
  const bootstrap = `
window.BH_ART=${JSON.stringify(art)};
window.BH_FIRST10=${JSON.stringify(attrEscape(readingDocument(spec)))};
document.querySelectorAll('img[data-bh-logo]').forEach(function(i){i.src=${JSON.stringify(logo)};i.alt='BeHistorical logo';});
`;

  let renderer = readOrDie(RENDERER);
  renderer = must(renderer,
    "function foundationArtworkPath(id){const match=String(T.id||'').match(/(\\d+)$/);return `../assets/images/module-art/foundations/topic-f${match?match[1]:'1'}/${id}.svg`;}",
    'function foundationArtworkPath(id){return (window.BH_ART&&window.BH_ART[id])||\'\';}',
    'artwork path lookup');
  renderer = must(renderer,
    '<iframe src="${first10.embedUrl}"',
    '<iframe id="first10-frame" onload="wireFirst10Capture()" srcdoc="${window.BH_FIRST10||\'\'}"',
    'First & 10 iframe source');
  // The map is embedded, so "Open map source" would point a new tab at a data
  // URI, which browsers refuse to navigate to.
  renderer = must(renderer,
    '<br><a class="source-link" href="${T.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a>',
    '', 'map source link');

  const scripts = [
    readOrDie(FORM_CONFIG),
    readOrDie(path.join(FOUNDATIONS, spec.data)),
    // The instructional map is a repo-relative path in the data file. Swap it
    // for the inlined copy before the renderer reads it.
    `window.FOUNDATION_TOPIC.map.url=${JSON.stringify(dataUri(path.join(ROOT, T.map.url.replace(/^\.\.\//, ''))))};`,
    bootstrap,
    captureScript(spec),
    renderer
  ].map(scriptTag).join('\n');

  html = must(html,
    '<script src="../assets/js/behistorical-form-config.js?v=response-id-fix-v1"></script>',
    '@@JS@@', 'first script tag');
  html = html.replace(/<script src="[^"]*"><\/script>/g, '');
  html = html.replace('@@JS@@', () => scripts);

  return html;
}

// ── content model ─────────────────────────────────────────────────────────────
//
// Both flavours render from the same block list, so the PDF can never drift
// from the interactive packet.

function buildBlocks(T, reading, artDir) {
  const tid = T.id;
  const mapKey = T.map.key || [];
  const evidence = T.evidence;
  const coach = T.aiCoach;
  const beSurreal = T.beSurreal;

  const lectureSeen = new Set();
  const lecturePics = T.lecture.map((seg, i) => {
    const remote = commonsUrl(seg.image && seg.image.url);
    const repeated = remote && lectureSeen.has(remote);
    if (remote) lectureSeen.add(remote);
    return {
      remote: repeated ? '' : remote,
      fallback: art(artDir, `lecture-${String(i + 1).padStart(2, '0')}`)
    };
  });

  const evSeen = new Set();
  const evidencePics = (evidence.items || []).map((item, i) => {
    const remote = commonsUrl(item.url);
    const repeated = remote && evSeen.has(remote);
    if (remote) evSeen.add(remote);
    return {
      remote: repeated ? '' : remote,
      fallback: art(artDir, `evidence-${String(i + 1).padStart(2, '0')}`)
    };
  });

  return [
    {
      kind: 'targets',
      targets: T.learningTargets,
      criteria: T.successCriteria,
      commandCopy: T.commandCopy
    },
    {
      kind: 'module',
      num: '01',
      title: 'Map & Geography Check',
      lead: T.map.desc,
      // The instructional map is real content, not brand motif, so it prints.
      figure: {
        img: picture('', dataUri(path.join(ROOT, T.map.url.replace(/^\.\.\//, ''))), T.map.title),
        printImg: dataUri(path.join(ROOT, T.map.url.replace(/^\.\.\//, ''))),
        alt: T.map.title,
        title: T.map.title,
        caption: T.map.caption
      },
      list: { heading: 'Map Questions', items: T.map.questions },
      keyed: mapKey.length ? { heading: 'Map Key', items: mapKey } : null,
      response: { id: `${tid}-map`, label: 'Module 01, Map & Geography Check', prompt: T.map.prompt, lines: 5 }
    },
    {
      kind: 'reading',
      num: '02',
      title: 'First & 10 Reading',
      html: reading.html,
      questions: reading.questions,
      response: {
        id: `${tid}-first10`,
        label: 'Module 02, First & 10 Reading',
        prompt: T.first10.prompt,
        lines: 8
      }
    },
    {
      kind: 'lecture',
      num: '03',
      title: 'Content Delivery',
      lead: 'Direct instruction. Work through the cards in order, they build on each other.',
      cards: T.lecture.map((seg, i) => ({
        title: seg.title,
        bullets: seg.bullets,
        img: picture(lecturePics[i].remote, lecturePics[i].fallback, (seg.image && seg.image.title) || seg.title),
        printImg: null,
        imgTitle: (seg.image && seg.image.title) || seg.title,
        caption: (seg.image && seg.image.caption) || '',
        source: commonsUrl(seg.image && (seg.image.sourceUrl || seg.image.url))
      }))
    },
    {
      kind: 'module',
      num: '04',
      title: 'BeSurreal',
      lead: beSurreal.desc,
      callout: { heading: beSurreal.title, intro: beSurreal.intro, quote: beSurreal.detail },
      response: { id: `${tid}-besurreal`, label: 'Module 04, BeSurreal', prompt: beSurreal.prompt, lines: 5 }
    },
    {
      kind: 'module',
      num: '05',
      title: T.skill.title,
      lead: T.skill.intro,
      steps: T.skill.steps,
      response: { id: `${tid}-skill`, label: 'Module 05, AP Skill Builder', prompt: T.skill.prompt, lines: 6 }
    },
    {
      kind: 'module',
      num: '06',
      title: 'Checkpoint 1',
      callout: { heading: T.checkpoint.title, intro: T.checkpoint.prompt },
      list: { heading: 'Strong Response Checklist', items: T.checkpoint.checklist, check: true },
      // echo:false, the callout directly above already states this prompt.
      response: { id: `${tid}-checkpoint`, label: 'Module 06, Checkpoint 1', prompt: T.checkpoint.prompt, lines: 8, echo: false }
    },
    {
      kind: 'evidence',
      num: '07',
      title: 'Evidence Lab',
      lead: evidence.task,
      items: (evidence.items || []).map((item, i) => ({
        title: item.title,
        img: picture(evidencePics[i].remote, evidencePics[i].fallback, item.title),
        printImg: null,
        caption: item.caption,
        prompt: item.prompt,
        source: commonsUrl(item.sourceUrl || item.url)
      })),
      response: { id: `${tid}-evidence`, label: 'Module 07, Evidence Lab', prompt: evidence.prompt, lines: 5 }
    },
    {
      kind: 'module',
      num: '08',
      title: 'Socrates AI Coach',
      lead: coach.intro,
      prompts: coach.prompts,
      coachTitle: coach.title,
      response: { id: `${tid}-coach`, label: 'Module 08, Socrates AI Coach', prompt: coach.responsePrompt, lines: 6 }
    },
    {
      kind: 'module',
      num: '09',
      title: 'BeInTheRoom',
      lead: 'An immersive experience for this topic is coming soon. Your teacher will run this module in class when it is ready.',
      placeholder: true
    },
    {
      kind: 'module',
      num: '10',
      title: 'Checkpoint 2',
      callout: { heading: 'Synthesis Checkpoint', intro: T.exitTicket || T.checkpoint.prompt },
      lead: 'Use evidence from at least two modules above. Connect what you studied today to the bigger picture of AP World History.',
      response: {
        id: `${tid}-checkpoint2`,
        label: 'Module 10, Checkpoint 2',
        prompt: T.exitTicket || T.checkpoint.prompt,
        lines: 8,
        echo: false
      }
    },
    { kind: 'videos', videos: T.videos },
    { kind: 'terms', items: T.termTable },
    { kind: 'timeline', items: T.timeline, prompt: T.timelinePrompt }
  ];
}

const ECHO_POINTER = 'Answer the prompt stated directly above.';

// ── print packet ──────────────────────────────────────────────────────────────

function lines(n) {
  return `<div class="p-lines">${Array.from({ length: n }, () => '<span></span>').join('')}</div>`;
}

function printResponse(r) {
  return `<div class="p-prompt">
  <p class="p-prompt-label">Your Response</p>
  <p class="p-prompt-text">${r.echo === false ? ECHO_POINTER : md(r.prompt)}</p>
  ${lines(r.lines || 5)}
</div>`;
}

function printModule(num, title, inner) {
  return `<section class="p-module">
  <div class="p-module-head"><span class="p-badge">Module ${num}</span><h2>${esc(title)}</h2></div>
  ${inner}
</section>`;
}

// The reading arrives as site markup. The print sheet re-themes it in CSS and
// swaps its textareas for ruled lines.
function printReadingHtml(html, questions) {
  let i = 0;
  return html.replace(/<textarea class="q-textarea bh-response" id="[^"]*"[^>]*><\/textarea>/g, () => {
    i += 1;
    return lines(5);
  });
}

function renderPrint(block) {
  switch (block.kind) {
    case 'targets':
      return `<section class="p-module">
  <div class="p-module-head"><span class="p-badge">Start Here</span><h2>Learning Targets &amp; Success Criteria</h2></div>
  <div class="p-two">
    <article class="p-card"><h3>Learning Targets</h3><ol>${block.targets.map(t => `<li>${esc(t)}</li>`).join('')}</ol></article>
    <article class="p-card"><h3>Success Criteria</h3><ol>${block.criteria.map(t => `<li>${esc(t)}</li>`).join('')}</ol></article>
  </div>
  <div class="p-roadmap">
    <div class="p-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div>
    <div class="p-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div>
    <div class="p-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
  </div>
</section>`;

    case 'module': {
      let inner = '';
      if (block.lead) inner += `<p class="p-lead">${md(block.lead)}</p>`;
      if (block.callout) {
        inner += `<article class="p-callout"><h3>${esc(block.callout.heading)}</h3><p>${md(block.callout.intro)}</p>${
          block.callout.quote ? `<blockquote>${md(block.callout.quote)}</blockquote>` : ''}</article>`;
      }
      if (block.figure) inner += printFigure('p-figure', block.figure);
      if (block.list) {
        inner += `<article class="p-card"><h3>${esc(block.list.heading)}</h3><ul class="${block.list.check ? 'p-checklist' : ''}">${
          block.list.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></article>`;
      }
      if (block.keyed) {
        inner += `<article class="p-card"><h3>${esc(block.keyed.heading)}</h3><dl class="p-key">${
          block.keyed.items.map(k => `<div><dt>${esc(k.label)}</dt><dd>${esc(k.detail)}</dd></div>`).join('')}</dl></article>`;
      }
      if (block.steps) {
        inner += `<article class="p-card"><h3>Steps</h3><ol>${block.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol></article>`;
      }
      if (block.prompts) {
        inner += `<article class="p-card"><h3>${esc(block.coachTitle)}</h3><ol>${
          block.prompts.map(p => `<li>${esc(p)}</li>`).join('')}</ol></article>`;
      }
      if (block.response) inner += printResponse(block.response);
      return printModule(block.num, block.title, inner);
    }

    case 'reading':
      return printModule(block.num, block.title,
        `<div class="p-reading">${printReadingHtml(block.html, block.questions)}</div>${printResponse(block.response)}`);

    case 'lecture':
      return printModule(block.num, block.title,
        `<p class="p-lead">${esc(block.lead)}</p>` + block.cards.map((c, i) => `<article class="p-lecture">
  <h3><span>Card ${i + 1}</span> ${esc(c.title)}</h3>
  <ul>${c.bullets.map(b => `<li>${md(b)}</li>`).join('')}</ul>
  ${printFigure('p-lecture-fig', { printImg: c.printImg, title: c.imgTitle, caption: c.caption, source: c.source })}
</article>`).join(''));

    case 'evidence':
      return printModule(block.num, block.title,
        `<p class="p-lead">${esc(block.lead)}</p>`
        + block.items.map(it => printFigure('p-figure', it)).join('')
        + printResponse(block.response));

    case 'videos':
      return `<section class="p-module">
  <div class="p-module-head"><span class="p-badge">Extra</span><h2>Video Clips</h2></div>
  <ul class="p-card">${block.videos.map(v => `<li><strong>${esc(v.title)}</strong><br>${esc(v.prompt)}<br><span class="p-url">${esc(v.url)}</span></li>`).join('')}</ul>
</section>`;

    case 'terms':
      return `<section class="p-module">
  <div class="p-module-head"><span class="p-badge">Reference</span><h2>Key Terms</h2></div>
  <table class="p-table"><thead><tr><th>Term</th><th>What It Means</th></tr></thead><tbody>${
    block.items.map(r => `<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table>
</section>`;

    case 'timeline':
      return `<section class="p-module">
  <div class="p-module-head"><span class="p-badge">Reference</span><h2>Timeline</h2></div>
  <table class="p-table"><thead><tr><th>When</th><th>What Happened</th></tr></thead><tbody>${
    block.items.map(r => `<tr><td><strong>${esc(r.date)}</strong></td><td>${esc(r.event)}</td></tr>`).join('')}</tbody></table>
</section>`;

    default:
      return '';
  }
}

const PRINT_CSS = `
${fontCss()}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#1a1c1d;--soft:#4a4f52;--rule:#c9beac;--gold:#8a6a2f;--bronze:#6B3E1F;--paper:#fff;--tint:#f7f3ec}
@page{size:letter;margin:0.6in 0.65in 0.7in}
body{background:var(--paper);color:var(--ink);font-family:'Libre Baskerville',Georgia,serif;font-size:10pt;line-height:1.6}
/* Same typefaces as the site: Cinzel for display, Montserrat for UI labels. */
h1,h2,h3,.p-cover h1,.p-module-head h2{font-family:'Cinzel','Trajan Pro',Georgia,serif}
.p-badge,.p-eyebrow,.p-step strong,.p-table th,.p-imglabel{font-family:'Montserrat',Arial,sans-serif}
a{color:var(--bronze);text-decoration:none}
.p-cover{border:2px solid var(--gold);border-radius:4px;padding:18pt 20pt;margin-bottom:16pt}
.p-eyebrow{font-size:8pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6pt}
.p-cover h1{font-size:20pt;line-height:1.2;margin-bottom:6pt}
.p-cover .p-sub{font-style:italic;color:var(--soft);line-height:1.55;margin-bottom:12pt}
.p-idline{display:flex;gap:18pt;border-top:1px solid var(--rule);padding-top:10pt;font-size:9pt;color:var(--soft)}
.p-idline span{flex:1;border-bottom:1px solid var(--ink);padding-bottom:2pt}
.p-howto{background:var(--tint);border-left:3px solid var(--gold);padding:10pt 12pt;margin-bottom:14pt;font-size:9pt;line-height:1.65}
.p-module{margin-bottom:16pt;page-break-inside:auto}
.p-module-head{display:flex;align-items:baseline;gap:8pt;border-bottom:1.5pt solid var(--gold);padding-bottom:4pt;margin-bottom:9pt;page-break-after:avoid}
.p-badge{font-size:7.5pt;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#fff;background:var(--bronze);padding:2pt 6pt;border-radius:2px;white-space:nowrap}
.p-module-head h2{font-size:13pt;font-weight:700}
.p-lead{font-size:9.5pt;line-height:1.7;margin-bottom:8pt;color:var(--soft)}
.p-two{display:grid;grid-template-columns:1fr 1fr;gap:10pt;margin-bottom:9pt}
.p-card{background:var(--tint);border-left:3px solid var(--bronze);padding:9pt 11pt;margin-bottom:9pt;page-break-inside:avoid}
.p-card h3{font-size:10.5pt;color:var(--bronze);margin-bottom:5pt}
.p-card ol,.p-card ul{margin-left:14pt}
.p-card li{font-size:9.5pt;line-height:1.65;margin-bottom:4pt}
.p-checklist{list-style:none;margin-left:0}
.p-checklist li{padding-left:16pt;position:relative}
.p-checklist li::before{content:'';position:absolute;left:0;top:3pt;width:9pt;height:9pt;border:1pt solid var(--ink)}
.p-key div{border-top:1px solid var(--rule);padding:4pt 0}
.p-key div:first-child{border-top:none;padding-top:0}
.p-key dt{font-size:8.5pt;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--bronze)}
.p-key dd{font-size:9.5pt;line-height:1.6}
.p-roadmap{display:grid;grid-template-columns:repeat(3,1fr);gap:8pt}
.p-step{border:1px solid var(--rule);border-top:2pt solid var(--gold);padding:7pt 8pt;font-size:8.5pt;line-height:1.55}
.p-step strong{display:block;font-size:8pt;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);margin-bottom:3pt}
.p-callout{border:1pt solid var(--gold);background:var(--tint);padding:10pt 12pt;margin-bottom:9pt;page-break-inside:avoid}
.p-callout h3{font-size:11pt;color:var(--bronze);margin-bottom:5pt}
.p-callout p{font-size:9.5pt;line-height:1.7}
.p-callout blockquote{border-left:2pt solid var(--gold);margin-top:7pt;padding-left:9pt;font-style:italic;font-size:9.5pt;line-height:1.75}
.p-figure{margin-bottom:10pt;page-break-inside:avoid}
.p-figure img{width:100%;height:auto;display:block;border:1px solid var(--rule)}
.p-figure figcaption{font-size:8.5pt;line-height:1.55;color:var(--soft);padding-top:4pt}
.p-figure figcaption strong{color:var(--ink)}
.p-lecture{border-top:1px solid var(--rule);padding-top:9pt;margin-bottom:10pt;page-break-inside:avoid}
.p-lecture h3{font-size:11pt;margin-bottom:6pt}
.p-lecture h3 span{font-size:8pt;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:2pt}
.p-lecture ul{margin-left:14pt;margin-bottom:8pt}
.p-lecture li{font-size:9.5pt;line-height:1.7;margin-bottom:5pt}
.p-lecture-fig{display:grid;grid-template-columns:1.6in 1fr;gap:9pt;align-items:start}
.p-lecture-fig img{width:100%;height:auto;border:1px solid var(--rule)}
.p-lecture-fig figcaption{font-size:8.5pt;line-height:1.55;color:var(--soft)}
/* Figures whose only local asset is brand motif print as a reference note. */
.p-noimg{display:block;border-left:2pt solid var(--rule);padding-left:9pt;margin-bottom:9pt}
.p-noimg figcaption{padding-top:0}
.p-imglabel{font-size:7.5pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);font-family:'Montserrat',Arial,sans-serif}
.p-prompt{border:1pt solid var(--gold);padding:10pt 12pt;margin:9pt 0 12pt;page-break-inside:avoid}
.p-prompt-label{font-size:8pt;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:4pt}
.p-prompt-text{font-size:9.5pt;line-height:1.65;margin-bottom:8pt}
.p-lines span{display:block;border-bottom:1px solid var(--rule);height:20pt}
.p-table{width:100%;border-collapse:collapse;font-size:9pt}
.p-table th{font-size:8pt;letter-spacing:.12em;text-transform:uppercase;text-align:left;padding:5pt 6pt;border-bottom:1.5pt solid var(--gold);color:var(--bronze)}
.p-table td{padding:5pt 6pt;border-bottom:1px solid var(--rule);line-height:1.6;vertical-align:top}
.p-url{font-size:8pt;color:var(--soft);word-break:break-all}
.p-footer{border-top:1px solid var(--rule);margin-top:14pt;padding-top:7pt;font-size:8pt;letter-spacing:.1em;text-transform:uppercase;color:var(--soft);text-align:center}

/* First & 10 reading, re-themed for paper */
.p-reading .reading-title-band{border:none;padding:0 0 8pt;background:none}
.p-reading .reading-title-band::before{display:none}
.p-reading .reading-eyebrow{font-size:8pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:4pt}
.p-reading .reading-title{font-size:15pt;line-height:1.2;color:var(--ink);margin-bottom:5pt;font-family:'Cinzel','Trajan Pro',Georgia,serif}
.p-reading .reading-title em{color:var(--bronze);font-style:normal}
.p-reading .reading-deck{font-style:italic;font-size:9.5pt;line-height:1.6;color:var(--soft);margin-bottom:7pt}
.p-reading .skill-tags{display:flex;flex-wrap:wrap;gap:4pt;margin-bottom:8pt}
.p-reading .skill-tag{font-size:7.5pt;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);padding:1.5pt 5pt;border-radius:2px;font-family:'Montserrat',Arial,sans-serif}
.p-reading .reading-body{background:none;color:var(--ink)}
.p-reading .support-strip{display:grid;grid-template-columns:1fr 1fr;gap:9pt;padding:0 0 9pt;background:none;border:none}
.p-reading .support-card{background:var(--tint);border:none;border-left:3px solid var(--bronze);padding:8pt 10pt}
.p-reading .support-card h3{font-size:10pt;color:var(--bronze);margin-bottom:4pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .support-card p{font-size:9pt;line-height:1.6;color:var(--ink)}
.p-reading .vocab-strip{background:none;border:none;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:7pt 0;margin-bottom:9pt}
.p-reading .vocab-strip h3{font-size:8pt;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:5pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .term-chip{display:inline-block;font-size:7.5pt;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);border-radius:8pt;padding:1.5pt 5pt;margin:1.5pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .section{padding:0 0 10pt;border:none;position:relative}
.p-reading .section-number{display:none}
.p-reading .section-label{font-size:8pt;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:2pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .section-heading{font-size:11.5pt;color:var(--ink);border-bottom:1px solid var(--rule);padding-bottom:4pt;margin-bottom:7pt;font-family:'Montserrat',Arial,sans-serif;page-break-after:avoid}
.p-reading .reading-text{font-size:9.5pt;line-height:1.75;margin-bottom:7pt;color:var(--ink)}
.p-reading .kt{background:none;color:var(--bronze);font-weight:700;padding:0}
.p-reading .ap-callout{background:var(--tint);border:none;border-left:3px solid var(--gold);padding:8pt 10pt;margin:9pt 0;page-break-inside:avoid}
.p-reading .ap-callout-label{font-size:7.5pt;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:3pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .ap-callout p{font-size:9pt;line-height:1.6;color:var(--ink);font-family:'Libre Baskerville',Georgia,serif}
.p-reading .ap-callout p strong{color:var(--bronze)}
.p-reading .be-ready,.p-reading .family-strip{background:var(--tint);border:1px solid var(--rule);border-top:2pt solid var(--bronze);padding:9pt 11pt;margin-bottom:9pt;page-break-inside:avoid}
.p-reading .be-ready h3,.p-reading .family-strip h3{font-size:10.5pt;color:var(--bronze);margin-bottom:4pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .be-ready p,.p-reading .family-strip p,.p-reading .family-strip li{font-size:9pt;line-height:1.65;color:var(--ink);margin-bottom:5pt}
.p-reading .family-eyebrow{font-size:7.5pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:3pt;font-family:'Montserrat',Arial,sans-serif}
.p-reading .family-strip ul{margin:4pt 0 6pt 14pt}
.p-reading .check-section{background:none;border:none;border-top:1.5pt solid var(--gold);padding:9pt 0 0}
.p-reading .check-header{display:flex;gap:7pt;align-items:baseline;margin-bottom:8pt}
.p-reading .check-badge{font-size:7.5pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--bronze);border:none;padding:2pt 6pt;border-radius:2px;font-family:'Montserrat',Arial,sans-serif}
.p-reading .check-title{font-size:11pt;color:var(--ink);font-family:'Montserrat',Arial,sans-serif}
.p-reading .question-list{list-style:none;display:block}
.p-reading .question-item{background:none;border:1px solid var(--rule);border-radius:0;padding:8pt 10pt;margin-bottom:9pt;page-break-inside:avoid}
.p-reading .question-prompt{display:flex;gap:7pt;align-items:baseline;border:none;padding:0 0 6pt}
.p-reading .q-num{font-size:9.5pt;font-weight:700;color:var(--gold);min-width:14pt}
.p-reading .q-skill{font-size:7.5pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);padding:1pt 4pt;white-space:nowrap;font-family:'Montserrat',Arial,sans-serif}
.p-reading .q-text{font-size:9.5pt;line-height:1.6;color:var(--ink)}
.p-reading .pull-quote{border-left:3px solid var(--gold);margin:9pt 0;padding:5pt 10pt;background:var(--tint)}
.p-reading .pull-quote p{font-size:10pt;font-style:italic;color:var(--bronze);line-height:1.55}
`;

function buildPrint(T, blocks) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BeHistorical | ${esc(T.code)} ${esc(T.title)} | Student Packet</title>
<style>${PRINT_CSS}</style>
</head>
<body>

<header class="p-cover">
  <p class="p-eyebrow">${esc(T.code)} &nbsp;&middot;&nbsp; AP World History: Modern</p>
  <h1>${esc(T.title)}</h1>
  <p class="p-sub">${esc(T.subtitle)}</p>
  <div class="p-idline"><span>Name</span><span>Period</span><span>Date</span></div>
</header>

<div class="p-howto">
  <strong>How to use this packet.</strong> Work through the ten modules in order. Write your answers on the ruled lines under each prompt. If your teacher assigned this in Canvas, you may type your answers into the Canvas assignment instead, label each answer with its module number so your work is easy to follow.
</div>

${blocks.map(renderPrint).join('\n\n')}

<p class="p-footer">BeHistorical &nbsp;&middot;&nbsp; ${esc(T.code)} &nbsp;&middot;&nbsp; ${esc(T.title)}</p>
</body>
</html>`;
}

// ── run ───────────────────────────────────────────────────────────────────────

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(OUT_PRINT, { recursive: true });

  TOPICS.forEach(spec => {
    const T = loadTopic(spec.data);

    const lesson = sitePacket(spec, T);
    const printable = buildPrint(T, buildBlocks(T, readingParts(spec.reading, T.id), spec.artDir));

    const iPath = path.join(OUT, `${spec.slug}-canvas.html`);
    const pPath = path.join(OUT_PRINT, `${spec.slug}-print.html`);
    fs.writeFileSync(iPath, lesson);
    fs.writeFileSync(pPath, printable);

    const kb = f => `${Math.round(fs.statSync(f).size / 1024)} KB`;
    console.log(`${T.code}  ${T.title}`);
    console.log(`  lesson  canvas/${path.basename(iPath)}  (${kb(iPath)})`);
    console.log(`  print   canvas/print/${path.basename(pPath)}  (${kb(pPath)})`);
  });
}

main();
