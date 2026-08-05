#!/usr/bin/env node
'use strict';
//
// build-canvas-packets.js
//
// Builds standalone, single-file Canvas packets for the Foundations lessons.
// Each packet carries the whole lesson, all 10 modules, in one HTML file with
// no relative links, no external stylesheet, and no dependency on the
// behistorical site being reachable. Two flavours per topic:
//
//   canvas/<slug>-canvas.html        interactive, dark brand theme, response
//                                    boxes that autosave and a Gather/Copy
//                                    panel for pasting into a Canvas assignment
//   canvas/print/<slug>-print.html   light worksheet theme with ruled answer
//                                    lines, rendered to PDF by build-canvas-pdfs.sh
//
// Images: local generated artwork is inlined as a data URI so the packet works
// with zero network. Where the lesson data points at a Wikimedia Commons
// photograph the packet still requests it first and falls back to the inlined
// artwork on error, the same floor the site renderers use.
//
// Run: node scripts/build-canvas-packets.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FOUNDATIONS = path.join(ROOT, 'foundations');
const OUT = path.join(ROOT, 'canvas');
const OUT_PRINT = path.join(OUT, 'print');

const TOPICS = [
  {
    data: 'foundations-0-intro-to-behistorical-data.js',
    reading: 'first-and-10-foundations-0-intro-to-behistorical.html',
    slug: 'foundations-0-intro-to-behistorical',
    artDir: 'topic-f0'
  },
  {
    data: 'foundations-1-geography-data.js',
    reading: 'first-and-10-foundations-1-geography.html',
    slug: 'foundations-1-geography',
    artDir: 'topic-f1'
  }
];

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

function collectResponses(blocks) {
  const out = [];
  blocks.forEach(b => {
    if (b.kind === 'reading') {
      b.questions.forEach(q => out.push({ id: q.id, label: q.label, prompt: q.prompt, lines: 5 }));
    }
    if (b.response) out.push(b.response);
  });
  return out;
}

// ── interactive packet ────────────────────────────────────────────────────────

const ECHO_POINTER = 'Answer the prompt stated directly above.';

function responseBox(r) {
  return `<div class="bh-prompt">
  <h4>Your Response</h4>
  <p class="bh-prompt-text">${r.echo === false ? ECHO_POINTER : md(r.prompt)}</p>
  <textarea class="bh-response" id="${r.id}" placeholder="Type your response here..."></textarea>
  <div class="bh-tool-row">
    <button type="button" onclick="bhSave('${r.id}')">Save</button>
    <button type="button" class="secondary" onclick="bhCopy('${r.id}')">Copy This Answer</button>
  </div>
  <p class="bh-note" id="${r.id}-note"></p>
</div>`;
}

function moduleShell(num, title, inner) {
  return `<section class="bh-module" id="module-${num}">
  <div class="bh-module-head"><span class="bh-badge">Module ${num}</span><h2>${esc(title)}</h2></div>
  ${inner}
</section>`;
}

function renderInteractive(block) {
  switch (block.kind) {
    case 'targets':
      return `<section class="bh-module" id="targets">
  <div class="bh-module-head"><span class="bh-badge">Start Here</span><h2>Learning Targets &amp; Success Criteria</h2></div>
  <p class="bh-lead">${esc(block.commandCopy)}</p>
  <div class="bh-two">
    <article class="bh-card"><h3>Learning Targets</h3><ol>${block.targets.map(t => `<li>${esc(t)}</li>`).join('')}</ol></article>
    <article class="bh-card"><h3>Success Criteria</h3><ol>${block.criteria.map(t => `<li>${esc(t)}</li>`).join('')}</ol></article>
  </div>
  <div class="bh-roadmap">
    <div class="bh-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div>
    <div class="bh-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div>
    <div class="bh-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
  </div>
</section>`;

    case 'module': {
      let inner = '';
      if (block.lead) inner += `<p class="bh-lead">${md(block.lead)}</p>`;
      if (block.callout) {
        inner += `<article class="bh-callout"><h3>${esc(block.callout.heading)}</h3><p>${md(block.callout.intro)}</p>${
          block.callout.quote ? `<blockquote>${md(block.callout.quote)}</blockquote>` : ''}</article>`;
      }
      if (block.figure) {
        inner += `<figure class="bh-figure">${block.figure.img}<figcaption><strong>${esc(block.figure.title)}</strong><br>${esc(block.figure.caption)}</figcaption></figure>`;
      }
      if (block.list) {
        inner += `<article class="bh-card"><h3>${esc(block.list.heading)}</h3><ul class="${block.list.check ? 'bh-checklist' : ''}">${
          block.list.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></article>`;
      }
      if (block.keyed) {
        inner += `<article class="bh-card"><h3>${esc(block.keyed.heading)}</h3><dl class="bh-key">${
          block.keyed.items.map(k => `<div><dt>${esc(k.label)}</dt><dd>${esc(k.detail)}</dd></div>`).join('')}</dl></article>`;
      }
      if (block.steps) {
        inner += `<article class="bh-card"><h3>Steps</h3><ol class="bh-steps">${
          block.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol></article>`;
      }
      if (block.prompts) {
        inner += `<article class="bh-card"><h3>${esc(block.coachTitle)}</h3><div class="bh-coach">${
          block.prompts.map((p, i) => `<div class="bh-coach-item"><strong>Prompt ${i + 1}</strong><span>${esc(p)}</span></div>`).join('')}</div>
  <p class="bh-note">Open the class AI coach at <a href="${MAGICSCHOOL}" target="_blank" rel="noopener">student.magicschool.ai</a> (join code czwb9Q) if your teacher has it open today.</p></article>`;
      }
      if (block.response) inner += responseBox(block.response);
      return moduleShell(block.num, block.title, inner);
    }

    case 'reading': {
      const inner = `<div class="module bh-reading">${block.html}</div>${responseBox(block.response)}`;
      return moduleShell(block.num, block.title, inner);
    }

    case 'lecture': {
      const inner = `<p class="bh-lead">${esc(block.lead)}</p>` + block.cards.map((c, i) => `<article class="bh-lecture">
  <div class="bh-lecture-body">
    <span class="bh-lecture-num">Card ${i + 1} of ${block.cards.length}</span>
    <h3>${esc(c.title)}</h3>
    <ul>${c.bullets.map(b => `<li>${md(b)}</li>`).join('')}</ul>
  </div>
  <figure class="bh-lecture-fig">${c.img}<figcaption><strong>${esc(c.imgTitle)}</strong><br>${esc(c.caption)}${
    c.source ? `<br><a href="${esc(c.source)}" target="_blank" rel="noopener">Image source</a>` : ''}</figcaption></figure>
</article>`).join('');
      return moduleShell(block.num, block.title, inner);
    }

    case 'evidence': {
      const inner = `<p class="bh-lead">${esc(block.lead)}</p><div class="bh-two">${
        block.items.map(it => `<figure class="bh-figure">${it.img}<figcaption><strong>${esc(it.title)}</strong><br>${esc(it.caption)}<br><em>${esc(it.prompt)}</em>${
          it.source ? `<br><a href="${esc(it.source)}" target="_blank" rel="noopener">Image source</a>` : ''}</figcaption></figure>`).join('')
      }</div>${responseBox(block.response)}`;
      return moduleShell(block.num, block.title, inner);
    }

    case 'videos':
      return `<section class="bh-module" id="videos">
  <div class="bh-module-head"><span class="bh-badge">Extra</span><h2>Video Clips</h2></div>
  <p class="bh-lead">Optional reinforcement. Watch for the guiding question, do not take random notes.</p>
  <div class="bh-two">${block.videos.map(v => `<article class="bh-card"><h3>${esc(v.title)}</h3><p>${esc(v.prompt)}</p><p><a class="bh-btn-link" href="${esc(v.url)}" target="_blank" rel="noopener">Open video</a></p></article>`).join('')}</div>
</section>`;

    case 'terms':
      return `<section class="bh-module" id="terms">
  <div class="bh-module-head"><span class="bh-badge">Reference</span><h2>Key Terms</h2></div>
  <table class="bh-table"><thead><tr><th>Term</th><th>What It Means</th></tr></thead><tbody>${
    block.items.map(r => `<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table>
</section>`;

    case 'timeline':
      return `<section class="bh-module" id="timeline">
  <div class="bh-module-head"><span class="bh-badge">Reference</span><h2>Timeline</h2></div>
  <table class="bh-table"><thead><tr><th>When</th><th>What Happened</th></tr></thead><tbody>${
    block.items.map(r => `<tr><td><strong>${esc(r.date)}</strong></td><td>${esc(r.event)}</td></tr>`).join('')}</tbody></table>
  <p class="bh-lead">${esc(block.prompt)}</p>
</section>`;

    default:
      return '';
  }
}

function interactiveCss(readingCss) {
  return `${readingCss}
body{background:#1A1C1D;font-family:var(--font-body);color:var(--clean-paper);padding:1.25rem 1rem 4rem;-webkit-text-size-adjust:100%}
.bh-wrap{max-width:980px;margin:0 auto}
.bh-hero{background:var(--charcoal-steel);border:1px solid var(--gunmetal-gray);border-top:3px solid var(--antique-gold);border-radius:4px;padding:1.8rem 2rem;margin-bottom:1.25rem}
.bh-hero .bh-eyebrow{font-family:var(--font-ui);font-size:.62rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.55rem}
.bh-hero h1{font-family:var(--font-display);font-size:1.8rem;line-height:1.2;color:var(--clean-paper);margin-bottom:.5rem}
.bh-hero p{font-family:var(--font-body);font-style:italic;color:var(--muted-sandstone);line-height:1.7;font-size:.92rem}
.bh-hero .bh-course{font-family:var(--font-ui);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--aged-iron);font-style:normal;margin-top:.8rem}
.bh-toc{background:rgba(201,164,106,.06);border:1px solid rgba(201,164,106,.25);border-radius:4px;padding:1rem 1.2rem;margin-bottom:1.25rem}
.bh-toc h2{font-family:var(--font-ui);font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.6rem}
.bh-toc ol{list-style:none;display:flex;flex-wrap:wrap;gap:.4rem}
.bh-toc a{font-family:var(--font-ui);font-size:.68rem;font-weight:600;color:var(--muted-sandstone);text-decoration:none;border:1px solid rgba(210,180,140,.28);border-radius:2px;padding:.28rem .6rem;display:inline-block}
.bh-toc a:hover{background:rgba(201,164,106,.12);color:var(--antique-gold)}
.bh-module{background:var(--charcoal-steel);border:1px solid var(--gunmetal-gray);border-radius:4px;padding:1.5rem 1.8rem;margin-bottom:1.25rem;scroll-margin-top:1rem}
.bh-module-head{display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;border-bottom:1px solid var(--gunmetal-gray);padding-bottom:.8rem;margin-bottom:1.1rem}
.bh-badge{font-family:var(--font-ui);font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--antique-gold);background:rgba(201,164,106,.12);border:1px solid rgba(201,164,106,.35);padding:.26rem .6rem;border-radius:2px;white-space:nowrap}
.bh-module-head h2{font-family:var(--font-display);font-size:1.18rem;font-weight:600;color:var(--clean-paper)}
.bh-lead{font-size:.88rem;line-height:1.8;color:var(--warm-paper);margin-bottom:1rem}
.bh-two{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem}
.bh-card{background:var(--blackened-steel);border:1px solid var(--gunmetal-gray);border-left:3px solid var(--burnished-bronze);border-radius:3px;padding:1rem 1.15rem;margin-bottom:1rem}
.bh-card h3{font-family:var(--font-display);font-size:.98rem;color:var(--antique-gold);margin-bottom:.6rem}
.bh-card ol,.bh-card ul{margin-left:1.1rem}
.bh-card li,.bh-card p{font-size:.85rem;line-height:1.75;color:var(--warm-paper);margin-bottom:.45rem}
.bh-checklist{list-style:none;margin-left:0}
.bh-checklist li{padding-left:1.6rem;position:relative}
.bh-checklist li::before{content:'\\25A1';position:absolute;left:0;color:var(--antique-gold);font-size:1rem;line-height:1.5}
.bh-steps li{margin-bottom:.6rem}
.bh-key div{border-top:1px solid var(--gunmetal-gray);padding:.55rem 0}
.bh-key div:first-child{border-top:none;padding-top:0}
.bh-key dt{font-family:var(--font-ui);font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.2rem}
.bh-key dd{font-size:.83rem;line-height:1.7;color:var(--warm-paper)}
.bh-roadmap{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}
.bh-step{background:var(--blackened-steel);border:1px solid var(--gunmetal-gray);border-top:2px solid var(--antique-gold);border-radius:3px;padding:.9rem 1rem;font-size:.8rem;line-height:1.65;color:var(--warm-paper)}
.bh-step strong{display:block;font-family:var(--font-ui);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.35rem}
.bh-callout{background:var(--blackened-steel);border:1px solid var(--antique-gold);border-radius:3px;padding:1.1rem 1.25rem;margin-bottom:1rem}
.bh-callout h3{font-family:var(--font-display);font-size:1.05rem;color:var(--antique-gold);margin-bottom:.55rem}
.bh-callout p{font-size:.88rem;line-height:1.8;color:var(--warm-paper)}
.bh-callout blockquote{border-left:3px solid var(--burnished-bronze);margin-top:.9rem;padding:.5rem 0 .5rem 1rem;font-size:.87rem;line-height:1.85;color:var(--muted-sandstone);font-style:italic}
.bh-figure{background:var(--blackened-steel);border:1px solid var(--gunmetal-gray);border-radius:3px;overflow:hidden;margin-bottom:1rem}
.bh-figure img{width:100%;height:auto;display:block;background:var(--warm-paper)}
/* The generated artwork is a stand-in, not the lesson's evidence. Cap it so a
   blocked photograph host cannot turn a page into a wall of brand motif. */
img.bh-art{max-height:11rem;object-fit:cover;object-position:center}
.bh-lecture-fig img.bh-art{max-height:7rem}
.bh-figure figcaption{padding:.85rem 1rem;font-size:.8rem;line-height:1.7;color:var(--warm-paper)}
.bh-figure figcaption strong{color:var(--antique-gold)}
.bh-figure a,.bh-btn-link{color:var(--antique-gold)}
.bh-lecture{display:grid;grid-template-columns:1.35fr 1fr;gap:1.1rem;background:var(--blackened-steel);border:1px solid var(--gunmetal-gray);border-radius:3px;padding:1.2rem 1.3rem;margin-bottom:1rem}
.bh-lecture-num{font-family:var(--font-ui);font-size:.58rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-sandstone);display:block;margin-bottom:.4rem}
.bh-lecture h3{font-family:var(--font-display);font-size:1.05rem;color:var(--antique-gold);margin-bottom:.7rem;line-height:1.3}
.bh-lecture ul{margin-left:1.05rem}
.bh-lecture li{font-size:.85rem;line-height:1.8;color:var(--warm-paper);margin-bottom:.6rem}
.bh-lecture li strong{color:var(--muted-sandstone)}
.bh-lecture-fig img{width:100%;height:auto;display:block;border-radius:2px;background:var(--warm-paper)}
.bh-lecture-fig figcaption{font-size:.74rem;line-height:1.6;color:var(--muted-sandstone);margin-top:.5rem}
.bh-lecture-fig figcaption strong{color:var(--antique-gold)}
.bh-coach-item{border-top:1px solid var(--gunmetal-gray);padding:.6rem 0;display:grid;grid-template-columns:6rem 1fr;gap:.6rem}
.bh-coach-item:first-child{border-top:none;padding-top:0}
.bh-coach-item strong{font-family:var(--font-ui);font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--antique-gold)}
.bh-coach-item span{font-size:.84rem;line-height:1.7;color:var(--warm-paper)}
.bh-prompt{background:var(--blackened-steel);border:1px solid var(--antique-gold);border-radius:3px;padding:1.1rem 1.25rem;margin-top:1rem}
.bh-prompt h4{font-family:var(--font-ui);font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--antique-gold);margin-bottom:.5rem}
.bh-prompt-text{font-size:.87rem;line-height:1.8;color:var(--warm-paper);margin-bottom:.8rem}
textarea.bh-response{width:100%;min-height:120px;background:#23272a;border:1px solid var(--gunmetal-gray);border-radius:3px;padding:.8rem 1rem;font-family:var(--font-body);font-size:.85rem;color:var(--warm-paper);line-height:1.8;resize:vertical;outline:none}
textarea.bh-response:focus{background:#262b2e;border-color:var(--antique-gold)}
.bh-tool-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.7rem}
.bh-note{font-family:var(--font-ui);font-size:.68rem;color:var(--muted-sandstone);margin-top:.5rem;min-height:1em}
.bh-table{width:100%;border-collapse:collapse;font-size:.83rem}
.bh-table th{font-family:var(--font-ui);font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--antique-gold);text-align:left;padding:.55rem .7rem;border-bottom:1px solid var(--antique-gold)}
.bh-table td{padding:.6rem .7rem;border-bottom:1px solid var(--gunmetal-gray);line-height:1.7;color:var(--warm-paper);vertical-align:top}
.bh-export{background:var(--charcoal-steel);border:1px solid var(--antique-gold);border-radius:4px;padding:1.5rem 1.8rem;margin-bottom:1.25rem}
.bh-export h2{font-family:var(--font-display);font-size:1.2rem;color:var(--antique-gold);margin-bottom:.6rem}
.bh-export p{font-size:.86rem;line-height:1.8;color:var(--warm-paper);margin-bottom:.9rem}
#bh-output{background:var(--warm-paper);color:var(--ink);border:1px solid var(--antique-gold);border-radius:3px;padding:1rem 1.15rem;margin-top:.8rem;max-height:24rem;overflow-y:auto;font-family:var(--font-body);font-size:.85rem;line-height:1.7}
#bh-output p{color:var(--ink);margin-bottom:.6rem}
#bh-output hr{border:none;border-top:1px solid #cbbfa9;margin:1rem 0}
.bh-sticky{position:sticky;bottom:0;background:rgba(26,28,29,.94);border-top:1px solid var(--antique-gold);padding:.7rem 1rem;margin:0 -1rem -4rem;display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;backdrop-filter:blur(4px);z-index:20}
.bh-footer{text-align:center;font-family:var(--font-ui);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--aged-iron);padding:1.5rem 0 3rem}
.bh-reading .reading-title-band{border-top:none}
.bh-reading .reading-title-band::before{display:none}
@media(max-width:760px){
  .bh-two,.bh-lecture,.bh-roadmap{grid-template-columns:1fr}
  .bh-module,.bh-export{padding:1.1rem 1rem}
  .bh-hero{padding:1.3rem 1.1rem}
  .bh-hero h1{font-size:1.4rem}
  .bh-coach-item{grid-template-columns:1fr;gap:.2rem}
}`;
}

function interactiveJs(topicCode, topicTitle, responses) {
  return `
var BH_TOPIC=${JSON.stringify(topicCode)};
var BH_TITLE=${JSON.stringify(topicTitle)};
var BH_KEY=${JSON.stringify('behistorical-canvas-' + topicCode.toLowerCase().replace(/\s+/g, '-'))};
var BH_ITEMS=${JSON.stringify(responses.map(r => ({ id: r.id, label: r.label, prompt: plain(r.prompt) })))};

function bhFallback(img){
  var fb=img.getAttribute('data-fallback');
  if(!fb||img.src===fb)return;
  img.onerror=null;img.src=fb;img.className+=' bh-art';
}
function bhEl(id){return document.getElementById(id);}
function bhStoreKey(id){return BH_KEY+'::'+id;}
function bhSay(id,msg){var n=bhEl(id+'-note');if(n)n.textContent=msg;}
function bhSave(id){
  var t=bhEl(id);if(!t)return;
  try{localStorage.setItem(bhStoreKey(id),t.value||'');bhSay(id,'Saved in this browser on this device.');}
  catch(e){bhSay(id,'This browser will not let the page save. Copy your work somewhere safe.');}
}
function bhCopy(id){
  var t=bhEl(id);if(!t)return;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(t.value||'').then(function(){bhSay(id,'Copied.');},function(){bhSay(id,'Copy blocked. Select the text and press Ctrl-C.');});
  }else{bhSay(id,'Select the text and press Ctrl-C.');}
}
function bhLoad(){
  var boxes=document.querySelectorAll('textarea.bh-response');
  for(var i=0;i<boxes.length;i++){
    try{var v=localStorage.getItem(bhStoreKey(boxes[i].id));if(v)boxes[i].value=v;}catch(e){}
  }
}
// Autosave, so closing the tab never costs a student their typing.
document.addEventListener('input',function(e){
  var t=e.target;
  if(!t||!t.id||!t.classList||!t.classList.contains('bh-response'))return;
  clearTimeout(t._bhTimer);
  t._bhTimer=setTimeout(function(){
    try{localStorage.setItem(bhStoreKey(t.id),t.value||'');bhSay(t.id,'Saved automatically.');}catch(err){}
  },600);
});

function bhEscape(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function bhParas(t){
  return String(t).split(/\\n{2,}/).map(function(b){
    return '<p>'+bhEscape(b.trim()).replace(/\\n/g,'<br>')+'</p>';
  }).join('');
}
function bhCollect(){
  var out=[];
  BH_ITEMS.forEach(function(item){
    var el=bhEl(item.id),v='';
    if(el)v=(el.value||'').trim();
    if(!v){try{v=(localStorage.getItem(bhStoreKey(item.id))||'').trim();}catch(e){}}
    if(v)out.push({label:item.label,prompt:item.prompt,text:v});
  });
  return out;
}
function bhBuildDoc(){
  var work=bhCollect();
  if(!work.length)return null;
  var name=(bhEl('bh-name')&&bhEl('bh-name').value.trim())||'';
  var period=(bhEl('bh-period')&&bhEl('bh-period').value.trim())||'';
  var stamp=new Date().toLocaleString();
  var head='<div><p><strong>AP World History, '+bhEscape(BH_TOPIC)+'</strong><br><strong>'+bhEscape(BH_TITLE)+'</strong></p>'
    +(name||period?'<p><strong>Name:</strong> '+bhEscape(name)+(period?' &nbsp;&nbsp;<strong>Period:</strong> '+bhEscape(period):'')+'</p>':'')
    +'<p><em>Student work, copied '+bhEscape(stamp)+'</em></p><hr>';
  var body=work.map(function(w){
    return '<p><strong>'+bhEscape(w.label)+'</strong></p>'
      +(w.prompt?'<p><strong>Question:</strong> <em>'+bhEscape(w.prompt)+'</em></p>':'')
      +'<p><strong>My response:</strong></p>'+bhParas(w.text);
  }).join('<hr>');
  var plainParts=['AP WORLD HISTORY, '+BH_TOPIC,BH_TITLE];
  if(name)plainParts.push('Name: '+name+(period?'   Period: '+period:''));
  plainParts.push('Student work, copied '+stamp,'');
  work.forEach(function(w){
    plainParts.push(w.label.toUpperCase());
    if(w.prompt)plainParts.push('Question: '+w.prompt);
    plainParts.push('My response:',w.text,'');
  });
  return {html:head+body+'</div>',plain:plainParts.join('\\n'),count:work.length};
}
function bhGather(){
  var out=bhEl('bh-output'),res=bhEl('bh-result');
  var doc=bhBuildDoc();
  if(!doc){
    out.innerHTML='<p style="opacity:.7;margin:0">Nothing typed yet. Work through the modules above, then gather your work.</p>';
    out.dataset.plain='';
    res.textContent='';
    return null;
  }
  out.innerHTML=doc.html;
  out.dataset.plain=doc.plain;
  res.textContent='Gathered '+doc.count+' response'+(doc.count===1?'':'s')+'. Copy it, then paste it into the Canvas assignment.';
  return doc;
}
function bhSelect(el){
  try{
    var r=document.createRange();r.selectNodeContents(el);
    var s=window.getSelection();s.removeAllRanges();s.addRange(r);
    return true;
  }catch(e){return false;}
}
function bhCopyAll(){
  var out=bhEl('bh-output'),res=bhEl('bh-result');
  var doc=bhGather();
  if(!doc)return;
  bhSelect(out);
  var say=function(m){res.textContent=m;};
  if(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write){
    navigator.clipboard.write([new ClipboardItem({
      'text/html':new Blob([doc.html],{type:'text/html'}),
      'text/plain':new Blob([doc.plain],{type:'text/plain'})
    })]).then(function(){say('Copied with formatting. Paste it into the Canvas assignment.');},function(){bhCopyFallback(say);});
  }else{bhCopyFallback(say);}
}
function bhCopyFallback(say){
  var copied=false;
  try{copied=document.execCommand('copy');}catch(e){copied=false;}
  if(copied){say('Copied with formatting. Paste it into the Canvas assignment.');return;}
  var out=bhEl('bh-output');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(out.dataset.plain||out.textContent||'')
      .then(function(){say('Copied as plain text. Paste it into the Canvas assignment.');},
            function(){say('Copy is blocked on this device. Your work is selected, press Ctrl-C.');});
  }else{say('Your work is selected, press Ctrl-C to copy.');}
}
function bhPrint(){window.print();}
bhLoad();
`;
}

function buildInteractive(T, blocks, readingCss, responses) {
  const toc = blocks
    .filter(b => b.num)
    .map(b => `<li><a href="#module-${b.num}">${b.num}. ${esc(b.title)}</a></li>`)
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BeHistorical | ${esc(T.code)} ${esc(T.title)}</title>
<style>
${interactiveCss(readingCss)}
@media print{
  body{background:#fff;color:#111;padding:0}
  .bh-sticky,.bh-toc,.bh-export{display:none}
  .bh-module{page-break-inside:avoid}
}
</style>
</head>
<body>
<div class="bh-wrap">

  <header class="bh-hero">
    <p class="bh-eyebrow">${esc(T.code)}</p>
    <h1>${esc(T.title)}</h1>
    <p>${esc(T.subtitle)}</p>
    <p class="bh-course">AP World History: Modern &nbsp;&middot;&nbsp; BeHistorical</p>
  </header>

  <nav class="bh-toc">
    <h2>The 10 Modules</h2>
    <ol>${toc}</ol>
  </nav>

  <section class="bh-export" id="how-to">
    <h2>How to Use This Page</h2>
    <p>Everything for this lesson is on this one page: the map, the reading, the lecture cards, and every response box. Type your answers straight into the boxes. Your typing saves automatically, but <strong>only in this browser on this device</strong>, so it is not a submission.</p>
    <p>When you finish, scroll to <strong>Turn In Your Work</strong> at the bottom, press <em>Gather All My Work</em>, then <em>Copy to Clipboard</em>, and paste it into the Canvas assignment. Canvas is where your graded work goes.</p>
  </section>

${blocks.map(renderInteractive).join('\n\n')}

  <section class="bh-export" id="turn-in">
    <h2>Turn In Your Work</h2>
    <p>Add your name so your teacher can identify the paste, then gather and copy everything you typed above.</p>
    <div class="bh-tool-row">
      <input id="bh-name" placeholder="Your name" style="flex:2;min-width:12rem;padding:.55rem .8rem;border-radius:3px;border:1px solid #3E4447;background:#23272a;color:#F5F0E7;font-family:'Libre Baskerville',Georgia,serif;font-size:.85rem">
      <input id="bh-period" placeholder="Period" style="flex:1;min-width:6rem;padding:.55rem .8rem;border-radius:3px;border:1px solid #3E4447;background:#23272a;color:#F5F0E7;font-family:'Libre Baskerville',Georgia,serif;font-size:.85rem">
    </div>
    <div class="bh-tool-row">
      <button type="button" onclick="bhGather()">Gather All My Work</button>
      <button type="button" class="secondary" onclick="bhCopyAll()">Copy to Clipboard</button>
      <button type="button" class="secondary" onclick="bhPrint()">Print / Save as PDF</button>
    </div>
    <div id="bh-output"><p style="opacity:.7;margin:0">Press <strong>Gather All My Work</strong>, then Copy to Clipboard, and paste into Canvas.</p></div>
    <p class="bh-note" id="bh-result"></p>
  </section>

  <p class="bh-footer">BeHistorical &nbsp;&middot;&nbsp; ${esc(T.code)} &nbsp;&middot;&nbsp; ${esc(T.title)}</p>
</div>

<div class="bh-sticky">
  <button type="button" onclick="bhGather()">Gather All My Work</button>
  <button type="button" class="secondary" onclick="bhCopyAll()">Copy for Canvas</button>
</div>

<script>${interactiveJs(T.code, T.title, responses)}</script>
</body>
</html>`;
}

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
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#1a1c1d;--soft:#4a4f52;--rule:#c9beac;--gold:#8a6a2f;--bronze:#6B3E1F;--paper:#fff;--tint:#f7f3ec}
@page{size:letter;margin:0.6in 0.65in 0.7in}
body{background:var(--paper);color:var(--ink);font-family:'Libre Baskerville',Georgia,serif;font-size:10pt;line-height:1.6}
h1,h2,h3,.p-badge,.p-eyebrow,.p-step strong,.p-table th{font-family:'Trebuchet MS','Segoe UI',Arial,sans-serif}
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
.p-imglabel{font-size:7.5pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);font-family:'Trebuchet MS',Arial,sans-serif}
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
.p-reading .reading-title{font-size:15pt;line-height:1.2;color:var(--ink);margin-bottom:5pt;font-family:'Trebuchet MS','Segoe UI',Arial,sans-serif}
.p-reading .reading-title em{color:var(--bronze);font-style:normal}
.p-reading .reading-deck{font-style:italic;font-size:9.5pt;line-height:1.6;color:var(--soft);margin-bottom:7pt}
.p-reading .skill-tags{display:flex;flex-wrap:wrap;gap:4pt;margin-bottom:8pt}
.p-reading .skill-tag{font-size:7.5pt;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);padding:1.5pt 5pt;border-radius:2px;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .reading-body{background:none;color:var(--ink)}
.p-reading .support-strip{display:grid;grid-template-columns:1fr 1fr;gap:9pt;padding:0 0 9pt;background:none;border:none}
.p-reading .support-card{background:var(--tint);border:none;border-left:3px solid var(--bronze);padding:8pt 10pt}
.p-reading .support-card h3{font-size:10pt;color:var(--bronze);margin-bottom:4pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .support-card p{font-size:9pt;line-height:1.6;color:var(--ink)}
.p-reading .vocab-strip{background:none;border:none;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:7pt 0;margin-bottom:9pt}
.p-reading .vocab-strip h3{font-size:8pt;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:5pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .term-chip{display:inline-block;font-size:7.5pt;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);border-radius:8pt;padding:1.5pt 5pt;margin:1.5pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .section{padding:0 0 10pt;border:none;position:relative}
.p-reading .section-number{display:none}
.p-reading .section-label{font-size:8pt;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:2pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .section-heading{font-size:11.5pt;color:var(--ink);border-bottom:1px solid var(--rule);padding-bottom:4pt;margin-bottom:7pt;font-family:'Trebuchet MS',Arial,sans-serif;page-break-after:avoid}
.p-reading .reading-text{font-size:9.5pt;line-height:1.75;margin-bottom:7pt;color:var(--ink)}
.p-reading .kt{background:none;color:var(--bronze);font-weight:700;padding:0}
.p-reading .ap-callout{background:var(--tint);border:none;border-left:3px solid var(--gold);padding:8pt 10pt;margin:9pt 0;page-break-inside:avoid}
.p-reading .ap-callout-label{font-size:7.5pt;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:3pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .ap-callout p{font-size:9pt;line-height:1.6;color:var(--ink);font-family:'Libre Baskerville',Georgia,serif}
.p-reading .ap-callout p strong{color:var(--bronze)}
.p-reading .be-ready,.p-reading .family-strip{background:var(--tint);border:1px solid var(--rule);border-top:2pt solid var(--bronze);padding:9pt 11pt;margin-bottom:9pt;page-break-inside:avoid}
.p-reading .be-ready h3,.p-reading .family-strip h3{font-size:10.5pt;color:var(--bronze);margin-bottom:4pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .be-ready p,.p-reading .family-strip p,.p-reading .family-strip li{font-size:9pt;line-height:1.65;color:var(--ink);margin-bottom:5pt}
.p-reading .family-eyebrow{font-size:7.5pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:3pt;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .family-strip ul{margin:4pt 0 6pt 14pt}
.p-reading .check-section{background:none;border:none;border-top:1.5pt solid var(--gold);padding:9pt 0 0}
.p-reading .check-header{display:flex;gap:7pt;align-items:baseline;margin-bottom:8pt}
.p-reading .check-badge{font-size:7.5pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--bronze);border:none;padding:2pt 6pt;border-radius:2px;font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .check-title{font-size:11pt;color:var(--ink);font-family:'Trebuchet MS',Arial,sans-serif}
.p-reading .question-list{list-style:none;display:block}
.p-reading .question-item{background:none;border:1px solid var(--rule);border-radius:0;padding:8pt 10pt;margin-bottom:9pt;page-break-inside:avoid}
.p-reading .question-prompt{display:flex;gap:7pt;align-items:baseline;border:none;padding:0 0 6pt}
.p-reading .q-num{font-size:9.5pt;font-weight:700;color:var(--gold);min-width:14pt}
.p-reading .q-skill{font-size:7.5pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--rule);padding:1pt 4pt;white-space:nowrap;font-family:'Trebuchet MS',Arial,sans-serif}
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
    const reading = readingParts(spec.reading, T.id);
    const blocks = buildBlocks(T, reading, spec.artDir);
    const responses = collectResponses(blocks);

    const interactive = buildInteractive(T, blocks, reading.css, responses);
    const printable = buildPrint(T, blocks);

    const iPath = path.join(OUT, `${spec.slug}-canvas.html`);
    const pPath = path.join(OUT_PRINT, `${spec.slug}-print.html`);
    fs.writeFileSync(iPath, interactive);
    fs.writeFileSync(pPath, printable);

    const kb = f => `${Math.round(fs.statSync(f).size / 1024)} KB`;
    console.log(`${T.code}  ${T.title}`);
    console.log(`  interactive  canvas/${path.basename(iPath)}  (${kb(iPath)}, ${responses.length} response boxes)`);
    console.log(`  print        canvas/print/${path.basename(pPath)}  (${kb(pPath)})`);
  });
}

main();
