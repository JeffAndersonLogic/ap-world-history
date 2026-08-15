#!/usr/bin/env node
/**
 * ebook-listen.test.js
 *
 * Drives the eBook's "Listen to this section" controls in Chromium against a
 * stubbed speech engine.
 *
 * Stubbed on purpose, and this is the important design decision in the file. A
 * real speechSynthesis needs an OS voice, which a CI runner does not have and a
 * developer's laptop has a different one of; a test that waited on real audio
 * would be slow where it worked and mysteriously red where it did not. The
 * stub replaces window.speechSynthesis and window.SpeechSynthesisUtterance with
 * a recorder that answers the same calls, so every assertion below is about the
 * code in assets/js/behistorical-listen.js and none of them is about anybody's
 * sound card. Utterances complete when the test says so, which is also how
 * sequential playback gets tested in milliseconds rather than in minutes of
 * spoken Foundations.
 *
 * What the stub cannot prove is that Chrome does the right thing with what it
 * is handed. That part is written down in CLAUDE.md as a known limitation
 * rather than pretended at here.
 *
 * validate.js covers the structural half offline: that the sections are marked,
 * that the count matches the content modules, and that exactly one shared
 * module is loaded. This file covers the half only a browser knows.
 *
 *   npm i playwright-core
 *   node scripts/test/ebook-listen.test.js
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

const VOLUME = 'ebook/foundations.html';
const LIBRARY = 'ebook/index.html';

/**
 * The fake engine. Installed before any page script runs.
 *
 * speechSynthesis is an accessor on the Window prototype, so it is replaced
 * with defineProperty rather than assigned: a plain assignment is silently
 * dropped and the test would then be driving the real engine while believing
 * it had a stub, which is the one failure mode a stub must not have.
 */
const STUB = `(() => {
  const state = { spoken: [], cancels: 0, pauses: 0, resumes: 0, current: null, paused: false };
  window.__speech = state;

  function Utter(text) {
    this.text = text; this.rate = 1; this.pitch = 1; this.volume = 1;
    this.lang = ''; this.onend = null; this.onerror = null; this.onstart = null;
  }

  const synth = {
    get speaking() { return !!state.current; },
    get paused() { return state.paused; },
    get pending() { return false; },
    speak(u) { state.spoken.push({ text: u.text, rate: u.rate, lang: u.lang }); state.current = u; state.paused = false; },
    cancel() { state.cancels++; state.current = null; state.paused = false; },
    pause() { state.pauses++; state.paused = true; },
    resume() { state.resumes++; state.paused = false; },
    getVoices() { return []; },
    addEventListener() {}, removeEventListener() {}
  };

  Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
  Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: Utter, configurable: true });

  // Complete the utterance in flight, the way a real engine does when it
  // reaches the end of the text.
  window.__finish = () => {
    const u = state.current; if (!u) return false;
    state.current = null; if (u.onend) u.onend({});
    return true;
  };
  window.__error = (reason) => {
    const u = state.current; if (!u) return false;
    state.current = null; if (u.onerror) u.onerror({ error: reason || 'synthesis-failed' });
    return true;
  };
  // Run a whole section to its end. Each finish triggers the next utterance, so
  // this is the sequential-playback path, driven at full speed.
  window.__drain = () => { let n = 0; while (state.current && n < 2000) { window.__finish(); n++; } return n; };
  window.__reset = () => { state.spoken = []; state.cancels = 0; state.pauses = 0; state.resumes = 0; };
})();`;

/** speechSynthesis absent entirely, for the graceful-degradation case. */
const NO_SPEECH = `Object.defineProperty(window, 'speechSynthesis', { value: undefined, configurable: true });
Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: undefined, configurable: true });`;

/** The module defers its first speak() by one turn, to dodge a Chrome bug where
 *  a speak() issued in the same task as a cancel() is swallowed. Everything
 *  that starts playback has to wait that turn out. */
const tick = page => page.waitForTimeout(30);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });

  const errors = [];
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  context.on('page', p => p.on('pageerror', e => errors.push(e.message)));
  await context.addInitScript(STUB);
  const page = await context.newPage();
  page.on('pageerror', e => errors.push(e.message));

  // The eBook links Google Fonts. In a sandbox that request hangs rather than
  // failing, which races every measurement below. The CSS falls back to Georgia
  // and Arial by design, so blocking it changes nothing being tested.
  await page.route('**/*', route =>
    route.request().url().startsWith(`http://localhost:${port}/`) ? route.continue() : route.abort());

  const url = rel => `http://localhost:${port}/${rel}`;

  // ── 1. the controls are built, everywhere they should be ──────────────────
  console.log(`\n${VOLUME}`);
  await page.goto(url(VOLUME), { waitUntil: 'load' });

  const built = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('[data-listenable]'));
    const withControls = sections.filter(s => s.querySelector('.bh-listen'));
    const inMount = sections.filter(s => {
      const mount = s.querySelector('[data-listen-mount]');
      return mount && mount.querySelector('.bh-listen');
    });
    return {
      sections: sections.length,
      withControls: withControls.length,
      inMount: inMount.length,
      duplicates: sections.filter(s => s.querySelectorAll('.bh-listen').length > 1).length,
      // Every control that does something must be a real button, not a div with
      // a click handler. tabindex, role and key handling all come free with the
      // element; none of them comes free without it.
      nonButtons: Array.from(document.querySelectorAll('.bh-listen-play, .bh-listen-toggle, .bh-listen-stop'))
        .filter(el => el.tagName !== 'BUTTON' || el.type !== 'button').length,
      unlabelled: Array.from(document.querySelectorAll('.bh-listen-play'))
        .filter(el => !/Listen to this section/.test(el.textContent || '')).length,
      // A label element bound to the select by id, rather than a placeholder or
      // a title attribute, which are not accessible names.
      unboundSelects: Array.from(document.querySelectorAll('.bh-listen-rate'))
        .filter(s => !s.id || !document.querySelector('label[for="' + CSS.escape(s.id) + '"]')).length
    };
  });

  check(`controls built in all ${built.sections} listenable sections`,
    built.sections === 43 && built.withControls === built.sections,
    `${built.withControls}/${built.sections}`);
  check('every control sits in its section\'s mount, under the heading',
    built.inMount === built.sections, `${built.inMount}/${built.sections}`);
  check('no section got two control sets', built.duplicates === 0, `${built.duplicates} doubled`);
  check('Listen, Pause and Stop are real <button type="button"> elements',
    built.nonButtons === 0, `${built.nonButtons} were not`);
  check('every Listen control carries its visible label',
    built.unlabelled === 0, `${built.unlabelled} missing`);
  check('every speed select has a bound <label>', built.unboundSelects === 0,
    `${built.unboundSelects} unbound`);

  // Accessible names must distinguish the sections. Forty-three identical
  // "Listen to this section" buttons is a list a screen-reader user cannot use.
  const names = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.bh-listen-play')).map(b => (b.textContent || '').trim()));
  check('accessible names name their section', new Set(names).size === names.length,
    `${names.length} buttons, ${new Set(names).size} distinct`);

  // ── 2. nothing speaks on its own ──────────────────────────────────────────
  const onLoad = await page.evaluate(() => ({
    spoken: window.__speech.spoken.length,
    playing: document.querySelectorAll('.bh-listen[data-state="playing"]').length,
    status: Array.from(document.querySelectorAll('.bh-listen-status')).filter(s => s.textContent.trim()).length
  }));
  check('no narration starts automatically on load',
    onLoad.spoken === 0 && onLoad.playing === 0 && onLoad.status === 0,
    `${onLoad.spoken} utterances, ${onLoad.playing} playing`);

  // ── 3. what gets read, and what does not ──────────────────────────────────
  const sectionIds = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[data-listenable]')).map(s => s.id));
  const [idA, idB] = sectionIds;

  const playFor = id => `#${id} .bh-listen-play`;
  await page.click(playFor(idA));
  await tick(page);

  const readA = await page.evaluate(id => {
    const section = document.getElementById(id);
    return {
      chunks: window.__speech.spoken.map(s => s.text),
      heading: (section.querySelector('h2') || {}).textContent.trim(),
      number: (section.querySelector('.dr-enum') || {}).textContent.trim(),
      thesis: (section.querySelector('.dr-thesis') || {}).textContent.trim(),
      state: section.querySelector('.bh-listen').getAttribute('data-state'),
      lang: window.__speech.spoken[0] ? window.__speech.spoken[0].lang : null
    };
  }, idA);

  // Only the first utterance is in flight; the rest arrive as each one ends. So
  // the whole section is drained before the exclusion assertions, or they would
  // only be testing the heading.
  await page.evaluate(() => window.__drain());
  const allChunks = await page.evaluate(() => window.__speech.spoken.map(s => s.text));

  check('the section heading is read first',
    readA.chunks.length > 0 && readA.chunks[0].replace(/\.$/, '') === readA.heading,
    readA.chunks[0]);
  check('the thesis follows the heading, in reading order',
    allChunks.some(c => readA.thesis.startsWith(c.replace(/\.$/, '').split(' ').slice(0, 6).join(' '))) ||
    allChunks.join(' ').indexOf(readA.thesis.slice(0, 40)) > 0,
    `${allChunks.length} utterances`);
  check('the utterance carries the document language', readA.lang === 'en', readA.lang);

  const joined = allChunks.join(' | ');
  const forbidden = [
    ['the section number, which is a navigational label', c => c.replace(/\.$/, '') === readA.number],
    ['the Listen control itself', c => /Listen to this section/.test(c)],
    ['the Pause control', c => c.replace(/\.$/, '') === 'Pause'],
    ['the Stop control', c => c.replace(/\.$/, '') === 'Stop'],
    ['the speed label', c => c.replace(/\.$/, '') === 'Speed' || /^0\.75x/.test(c)],
    ['the listening status', c => c.replace(/\.$/, '') === 'Listening'],
    ['the chapter navigation', c => /Back to contents|Go to the .* lesson/.test(c)],
    ['the how-to panel', c => /How to Use This/.test(c)]
  ];
  const leaked = forbidden.filter(([, test]) => allChunks.some(test)).map(([what]) => what);
  check('narration excludes the page furniture', leaked.length === 0, leaked.join('; '));

  check('no non-breaking spaces or decorative separators reach the engine',
    !/[\u00a0\u200b\u2022\u00b7\u2013\u2014]/.test(joined),
    JSON.stringify(joined.slice(0, 60)));

  check('no wrapper text is spoken twice',
    new Set(allChunks).size === allChunks.length,
    `${allChunks.length} utterances, ${new Set(allChunks).size} distinct`);

  // Long paragraphs are split, so no single utterance is long enough to meet the
  // Chromium cut-off bug. The ceiling is soft: one sentence longer than it is
  // left whole rather than cut mid-clause.
  const longest = allChunks.reduce((m, c) => Math.max(m, c.length), 0);
  check('utterances are chunked, not one long block per section',
    allChunks.length > 3 && longest < 700, `${allChunks.length} chunks, longest ${longest} chars`);

  // ── 4. one section at a time ──────────────────────────────────────────────
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  const beforeSwitch = await page.evaluate(() => window.__speech.cancels);
  await page.click(playFor(idB));
  await tick(page);

  const switched = await page.evaluate(([a, b]) => ({
    cancels: window.__speech.cancels,
    a: document.querySelector('#' + a + ' .bh-listen').getAttribute('data-state'),
    b: document.querySelector('#' + b + ' .bh-listen').getAttribute('data-state'),
    playing: document.querySelectorAll('.bh-listen[data-state="playing"]').length,
    last: window.__speech.spoken[window.__speech.spoken.length - 1].text,
    bHeading: document.querySelector('#' + b + ' h2').textContent.trim()
  }), [idA, idB]);

  check('starting section B cancels section A', switched.cancels > beforeSwitch,
    `${beforeSwitch} -> ${switched.cancels}`);
  check('section A returns to idle when B starts', switched.a === 'idle', switched.a);
  check('exactly one section is playing', switched.playing === 1 && switched.b === 'playing',
    `${switched.playing} playing`);
  check('the engine is now reading section B',
    switched.last.replace(/\.$/, '') === switched.bHeading, switched.last);

  // A cancelled section must not carry on in the background. Finishing the
  // utterance that was in flight when B started must advance B, never A.
  await page.evaluate(() => window.__finish());
  const afterStale = await page.evaluate(a => ({
    a: document.querySelector('#' + a + ' .bh-listen').getAttribute('data-state'),
    playing: document.querySelectorAll('.bh-listen[data-state="playing"]').length
  }), idA);
  check('a cancelled section does not resume from its stale callback',
    afterStale.a === 'idle' && afterStale.playing === 1,
    `${afterStale.a}, ${afterStale.playing} playing`);

  // ── 5. pause, resume, stop ────────────────────────────────────────────────
  await page.goto(url(VOLUME), { waitUntil: 'load' });

  const idleButtons = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return {
      toggle: root.querySelector('.bh-listen-toggle').disabled,
      stop: root.querySelector('.bh-listen-stop').disabled,
      play: root.querySelector('.bh-listen-play').disabled
    };
  }, idA);
  check('Pause and Stop are disabled while idle, Listen is not',
    idleButtons.toggle && idleButtons.stop && !idleButtons.play,
    JSON.stringify(idleButtons));

  await page.click(playFor(idA));
  await tick(page);
  await page.click(`#${idA} .bh-listen-toggle`);
  const paused = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return {
      state: root.getAttribute('data-state'),
      label: root.querySelector('.bh-listen-toggle').textContent.trim(),
      status: root.querySelector('.bh-listen-status').textContent.trim(),
      pauses: window.__speech.pauses,
      enginePaused: window.speechSynthesis.paused
    };
  }, idA);
  check('Pause pauses the engine and says so', paused.state === 'paused' &&
    paused.pauses === 1 && paused.enginePaused, JSON.stringify(paused));
  check('the one toggle relabels itself Resume', /^Resume/.test(paused.label), paused.label);
  check('the status reads Paused, not Listening', paused.status === 'Paused', paused.status);

  await page.click(`#${idA} .bh-listen-toggle`);
  const resumed = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return {
      state: root.getAttribute('data-state'),
      label: root.querySelector('.bh-listen-toggle').textContent.trim(),
      status: root.querySelector('.bh-listen-status').textContent.trim(),
      resumes: window.__speech.resumes
    };
  }, idA);
  check('Resume resumes the engine and relabels itself Pause',
    resumed.state === 'playing' && resumed.resumes === 1 && /^Pause/.test(resumed.label),
    JSON.stringify(resumed));
  check('the status reads Listening again', resumed.status === 'Listening', resumed.status);

  const beforeStop = await page.evaluate(() => window.__speech.cancels);
  await page.click(`#${idA} .bh-listen-stop`);
  const stopped = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return {
      state: root.getAttribute('data-state'),
      status: root.querySelector('.bh-listen-status').textContent.trim(),
      toggle: root.querySelector('.bh-listen-toggle').disabled,
      stop: root.querySelector('.bh-listen-stop').disabled,
      cancels: window.__speech.cancels,
      speaking: window.speechSynthesis.speaking
    };
  }, idA);
  check('Stop cancels the engine and returns the section to idle',
    stopped.state === 'idle' && stopped.cancels > beforeStop && !stopped.speaking,
    JSON.stringify(stopped));
  check('Stop leaves no Listening indicator behind',
    stopped.status === '' && stopped.toggle && stopped.stop, JSON.stringify(stopped));

  // ── 6. finishing naturally, and failing ───────────────────────────────────
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  const drained = await page.evaluate(() => window.__drain());
  const finished = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return {
      state: root.getAttribute('data-state'),
      status: root.querySelector('.bh-listen-status').textContent.trim(),
      toggle: root.querySelector('.bh-listen-toggle').disabled
    };
  }, idA);
  check(`sequential playback runs the whole section (${drained} utterances)`,
    drained > 3, String(drained));
  check('finishing naturally returns the controls to idle',
    finished.state === 'idle' && finished.status === '' && finished.toggle,
    JSON.stringify(finished));

  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  await page.evaluate(() => window.__error('synthesis-failed'));
  const errored = await page.evaluate(id => {
    const root = document.querySelector('#' + id + ' .bh-listen');
    return { state: root.getAttribute('data-state'), status: root.querySelector('.bh-listen-status').textContent.trim() };
  }, idA);
  check('a synthesis error resets the UI instead of leaving it on Listening',
    errored.state === 'idle' && errored.status === '', JSON.stringify(errored));

  // An interruption is not a failure. Cancel raises `error` with reason
  // "interrupted" in some builds, and treating that as a fault would flash the
  // wrong state every time a student switched sections.
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  await page.click(playFor(idB));
  await tick(page);
  await page.evaluate(() => window.__error('interrupted'));
  const interrupted = await page.evaluate(() =>
    document.querySelectorAll('.bh-listen[data-state="playing"]').length);
  check('an "interrupted" error from a cancelled utterance is ignored',
    interrupted === 1, `${interrupted} playing`);

  // ── 7. playback speed ─────────────────────────────────────────────────────
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  const rates = await page.evaluate(() => {
    const s = document.querySelector('.bh-listen-rate');
    return { values: Array.from(s.options).map(o => o.value), selected: s.value };
  });
  check('exactly the four supported rates are offered',
    JSON.stringify(rates.values) === JSON.stringify(['0.75', '1', '1.25', '1.5']),
    rates.values.join(', '));
  check('the default rate is 1x', rates.selected === '1', rates.selected);

  await page.selectOption(`#${idA} .bh-listen-rate`, '1.25');
  const synced = await page.evaluate(() => ({
    all: Array.from(document.querySelectorAll('.bh-listen-rate')).every(s => s.value === '1.25'),
    stored: window.localStorage.getItem('behistorical-listen-rate')
  }));
  check('changing the rate syncs every section on the page', synced.all, String(synced.all));
  check('the rate is persisted to localStorage', synced.stored === '1.25', String(synced.stored));

  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  const restored = await page.evaluate(() => ({
    select: document.querySelector('.bh-listen-rate').value,
    rate: window.__speech.spoken[0].rate
  }));
  check('the stored rate is restored on the next page load',
    restored.select === '1.25' && restored.rate === 1.25, JSON.stringify(restored));

  // A stored value that is not one of the four is not honoured. Range-checking
  // alone would accept 1.1 from a hand-edited or corrupted entry.
  await page.evaluate(() => window.localStorage.setItem('behistorical-listen-rate', '3'));
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  await page.click(playFor(idA));
  await tick(page);
  const rejected = await page.evaluate(() => ({
    select: document.querySelector('.bh-listen-rate').value,
    rate: window.__speech.spoken[0].rate
  }));
  check('an unsupported stored rate falls back to 1x',
    rejected.select === '1' && rejected.rate === 1, JSON.stringify(rejected));
  await page.evaluate(() => window.localStorage.removeItem('behistorical-listen-rate'));

  // ── 8. keyboard ───────────────────────────────────────────────────────────
  // Tabbed rather than focused from a script, because :focus-visible is defined
  // in terms of how focus arrived and element.focus() is precisely the case it
  // is allowed not to match.
  await page.goto(url(VOLUME), { waitUntil: 'load' });
  const steps = await page.evaluate(() => {
    const tabbable = Array.from(document.querySelectorAll(
      'a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    return tabbable.indexOf(document.querySelector('.bh-listen-play')) + 1;
  });
  await page.evaluate(() => { document.body.focus(); window.scrollTo(0, 0); });
  for (let i = 0; i < steps; i++) await page.keyboard.press('Tab');

  const focused = await page.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return {
      isPlay: el.classList.contains('bh-listen-play'),
      style: cs.outlineStyle,
      width: parseFloat(cs.outlineWidth) || 0
    };
  });
  check('the Listen control is reachable by Tab', focused.isPlay, focused.isPlay ? '' : 'not reached');
  check('the Listen control keeps the stylesheet focus ring',
    focused.style !== 'none' && focused.width >= 3, `${focused.style} ${focused.width}px`);

  await page.keyboard.press('Enter');
  await tick(page);
  const byKeyboard = await page.evaluate(() => ({
    playing: document.querySelectorAll('.bh-listen[data-state="playing"]').length,
    spoken: window.__speech.spoken.length
  }));
  check('Enter on the Listen control starts narration',
    byKeyboard.playing === 1 && byKeyboard.spoken === 1, JSON.stringify(byKeyboard));

  // ── 9. the library page has none of this ──────────────────────────────────
  console.log(`\n${LIBRARY}`);
  await page.goto(url(LIBRARY), { waitUntil: 'load' });
  const library = await page.evaluate(() => ({
    controls: document.querySelectorAll('.bh-listen').length,
    listenable: document.querySelectorAll('[data-listenable]').length,
    scripts: Array.from(document.querySelectorAll('script[src]'))
      .filter(s => /behistorical-listen/.test(s.src)).length
  }));
  check('the library page shows no controls and loads no narration module',
    library.controls === 0 && library.listenable === 0 && library.scripts === 0,
    JSON.stringify(library));

  // ── 10. no speech engine at all ───────────────────────────────────────────
  console.log('\nwithout speechSynthesis');
  const bare = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await bare.addInitScript(NO_SPEECH);
  const bareErrors = [];
  const barePage = await bare.newPage();
  barePage.on('pageerror', e => bareErrors.push(e.message));
  await barePage.route('**/*', route =>
    route.request().url().startsWith(`http://localhost:${port}/`) ? route.continue() : route.abort());
  await barePage.goto(url(VOLUME), { waitUntil: 'load' });

  const degraded = await barePage.evaluate(() => ({
    controls: document.querySelectorAll('.bh-listen').length,
    emptyMounts: document.querySelectorAll('[data-listen-mount]').length,
    // The empty mount must take no space, or every section carries a gap where
    // a control was not built.
    mountHeight: (() => {
      const m = document.querySelector('[data-listen-mount]');
      return m ? m.getBoundingClientRect().height : -1;
    })(),
    sections: document.querySelectorAll('[data-listenable]').length,
    links: document.querySelectorAll('a[href]').length
  }));
  check('no speech engine means no controls at all, not disabled ones',
    degraded.controls === 0 && degraded.sections === 43, JSON.stringify(degraded));
  check('the empty mount leaves no gap in the reading', degraded.mountHeight === 0,
    `${degraded.mountHeight}px`);
  check('the page is otherwise intact', degraded.links > 40, `${degraded.links} links`);
  check('no page errors without a speech engine', bareErrors.length === 0, bareErrors.slice(0, 2).join(' | '));
  await bare.close();

  check('no page errors anywhere in the run', errors.length === 0, errors.slice(0, 3).join(' | '));

  await browser.close();
  server.close();

  const failed = results.filter(r => !r).length;
  console.log(`\n${'─'.repeat(60)}`);
  console.log(failed
    ? `${failed} of ${results.length} narration checks failed.`
    : `All ${results.length} narration checks passed.`);
  process.exit(failed ? 1 : 0);
})().catch(e => {
  console.error(e);
  server.close();
  process.exit(1);
});
