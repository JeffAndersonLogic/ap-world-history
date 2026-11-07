#!/usr/bin/env node
/**
 * ebook-recorded-narration.test.js
 *
 * Drives recorded eBook narration in Chromium against a stubbed audio element
 * and a stubbed speech engine, for the same reason ebook-listen.test.js stubs
 * the speech engine: every assertion here is about the code in
 * assets/js/behistorical-listen.js, none of it about a sound card or a network.
 *
 * The recordings list is injected per scenario by intercepting
 * assets/data/ebook-audio.js, and the fingerprints in it are read from the
 * built page, so the test exercises the real matching rule rather than one
 * typed into the test.
 *
 * The rule that matters most is the stale one: a section whose text has
 * changed since its recording was made must never play that recording. It is
 * tested by serving the page with one fingerprint altered, which is exactly
 * what a rebuilt, edited chapter looks like to the player.
 *
 *   npm i playwright-core
 *   node scripts/test/ebook-recorded-narration.test.js
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
  if (!dir) return 'chromium';
  const linux64 = path.join(base, dir, 'chrome-linux64', 'chrome');
  return fs.existsSync(linux64) ? linux64 : path.join(base, dir, 'chrome-linux', 'chrome');
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
const PAGE_SRC = fs.readFileSync(path.join(ROOT, VOLUME), 'utf8');
const SECTIONS = [...PAGE_SRC.matchAll(/<section[^>]*\sid="([^"]+)"[^>]*\sdata-listen-hash="([0-9a-f]{16})"/g)]
  .map(m => ({ id: m[1], hash: m[2] }));
const [REC_A, REC_B, SPOKEN] = SECTIONS;          // two recorded sections, one not
const BASE = 'https://audio.example.test/';
const STALE = 'ffffffffffffffff';                   // a fingerprint no page carries

function manifest(entries, base) {
  const recordings = {};
  for (const s of entries) {
    recordings[s.hash] = { file: `ebook/foundations/${s.hash}.mp3`, seconds: 60, section: s.id };
  }
  return `window.BH_EBOOK_AUDIO = ${JSON.stringify({ base: base || BASE, narrator: 'test', recordings })};`;
}
const GOOD_MANIFEST = manifest([REC_A, REC_B, { id: 'gone', hash: STALE }]);

/* The stubs. The audio element answers the calls the player makes and records
   them; it never makes a sound or a request. play() resolves unless the test
   has asked it to reject, which is what an autoplay block or a school filter
   looks like from inside the page. */
const STUBS = (opts) => `(() => {
  const o = ${JSON.stringify(opts || {})};
  const speech = { spoken: [], cancels: 0, current: null };
  window.__speech = speech;
  function Utter(text) { this.text = text; this.onend = null; this.onerror = null; }
  const synth = {
    speak(u) { speech.spoken.push(u.text); speech.current = u; },
    cancel() { speech.cancels++; speech.current = null; },
    pause() {}, resume() {}, getVoices() { return []; },
    addEventListener() {}, removeEventListener() {}
  };
  if (o.noSpeech) {
    Object.defineProperty(window, 'speechSynthesis', { value: undefined, configurable: true });
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: undefined, configurable: true });
  } else {
    Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: Utter, configurable: true });
  }

  const audio = { created: 0, plays: [], pauses: 0, loads: 0, el: null, reject: !!o.rejectPlay };
  window.__audio = audio;
  function FakeAudio() {
    audio.created++; audio.el = this;
    this.src = ''; this.playbackRate = 1; this.preservesPitch = false; this.paused = true;
    this.onended = null; this.onerror = null;
  }
  FakeAudio.prototype.play = function () {
    audio.plays.push(this.src); this.paused = false;
    return audio.reject ? Promise.reject(new Error('NotAllowedError')) : Promise.resolve();
  };
  FakeAudio.prototype.pause = function () { audio.pauses++; this.paused = true; };
  FakeAudio.prototype.load = function () { audio.loads++; };
  FakeAudio.prototype.removeAttribute = function (name) { if (name === 'src') this.src = ''; };
  Object.defineProperty(window, 'Audio', { value: FakeAudio, configurable: true });

  window.__ended = () => { const a = audio.el; if (a && a.onended) a.onended({}); };
  window.__failed = () => { const a = audio.el; if (a && a.onerror) a.onerror({}); };
})();`;

const tick = page => page.waitForTimeout(40);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = rel => `http://localhost:${port}/${rel}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const allErrors = [];

  /** A fresh page for one scenario: stubs, a recordings list, and optionally a
   *  page whose fingerprint for one section has changed. */
  async function open({ manifestJs, stubs, editHash }) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    await context.addInitScript(STUBS(stubs));
    const page = await context.newPage();
    page.on('pageerror', e => allErrors.push(e.message));
    await page.route('**/*', async route => {
      const u = route.request().url();
      if (!u.startsWith(`http://localhost:${port}/`)) return route.abort();
      if (u.includes('/assets/data/ebook-audio.js')) {
        return route.fulfill({ status: 200, contentType: 'text/javascript', body: manifestJs });
      }
      if (editHash && u.endsWith(`/${VOLUME}`)) {
        return route.fulfill({ status: 200, contentType: 'text/html',
          body: PAGE_SRC.replace(`data-listen-hash="${editHash}"`, `data-listen-hash="${'0'.repeat(16)}"`) });
      }
      return route.continue();
    });
    await page.goto(url(VOLUME), { waitUntil: 'load' });
    return { page, context };
  }

  const play = (page, id) => page.click(`#${id} .bh-listen-play`).then(() => tick(page));
  const sectionState = (page, id) => page.$eval(`#${id} .bh-listen`, el => ({
    state: el.getAttribute('data-state'),
    status: el.querySelector('.bh-listen-status').textContent,
    toggle: el.querySelector('.bh-listen-toggle span').textContent,
    note: (el.querySelector('.bh-listen-note') || {}).textContent || ''
  }));
  const audio = page => page.evaluate(() => ({
    created: window.__audio.created, plays: window.__audio.plays.slice(), pauses: window.__audio.pauses,
    src: window.__audio.el ? window.__audio.el.src : null,
    rate: window.__audio.el ? window.__audio.el.playbackRate : null,
    pitch: window.__audio.el ? window.__audio.el.preservesPitch : null
  }));
  const speech = page => page.evaluate(() => ({ spoken: window.__speech.spoken.length, cancels: window.__speech.cancels }));

  // ── 1. matching, labelling and playing ──────────────────────────────────────
  console.log(`\n${VOLUME}, with recordings for two sections`);
  check('the fixture has sections to work with', !!(REC_A && REC_B && SPOKEN), `${SECTIONS.length} fingerprints`);
  let { page, context } = await open({ manifestJs: GOOD_MANIFEST });

  const labels = await page.evaluate(() => Array.from(document.querySelectorAll('.bh-listen-note'))
    .map(n => n.closest('[data-listenable]').id));
  check('only the recorded sections say "AI narrator"',
    labels.length === 2 && labels.includes(REC_A.id) && labels.includes(REC_B.id), labels.join(', '));
  check('a recording of text no page carries is never offered', labels.length === 2);

  check('nothing is fetched before anybody presses Listen', (await audio(page)).created === 0);

  await play(page, REC_A.id);
  let a = await audio(page);
  check('Listen on a recorded section plays its recording',
    a.plays.length === 1 && a.plays[0] === `${BASE}ebook/foundations/${REC_A.hash}.mp3`, a.plays[0]);
  check('the browser voice stays silent while a recording plays', (await speech(page)).spoken === 0);
  let s = await sectionState(page, REC_A.id);
  check('the section reports Listening', s.state === 'playing' && s.status === 'Listening', JSON.stringify(s));
  check('the recording keeps its pitch at every speed', a.pitch === true);

  await page.selectOption(`#${REC_A.id} .bh-listen-rate`, '1.25');
  a = await audio(page);
  check('changing the speed applies to the recording at once', a.rate === 1.25, String(a.rate));

  await page.click(`#${REC_A.id} .bh-listen-toggle`);
  s = await sectionState(page, REC_A.id);
  a = await audio(page);
  check('Pause pauses the recording', s.state === 'paused' && s.toggle === 'Resume' && a.pauses >= 1, JSON.stringify(s));
  await page.click(`#${REC_A.id} .bh-listen-toggle`);
  s = await sectionState(page, REC_A.id);
  a = await audio(page);
  check('Resume plays it again from where it was', s.state === 'playing' && a.plays.length === 2);

  await page.evaluate(() => window.__ended());
  s = await sectionState(page, REC_A.id);
  check('the end of the recording returns the section to idle', s.state === 'idle' && s.status === '', JSON.stringify(s));

  // ── 2. one narration at a time, across both engines ────────────────────────
  await play(page, REC_A.id);
  await play(page, SPOKEN.id);
  a = await audio(page);
  let sp = await speech(page);
  check('starting a spoken section silences a playing recording',
    a.src === '' && sp.spoken > 0 && (await sectionState(page, REC_A.id)).state === 'idle', JSON.stringify({ a, sp }));
  const cancelsBefore = sp.cancels;
  await play(page, REC_B.id);
  sp = await speech(page);
  check('starting a recorded section cancels the browser voice',
    sp.cancels > cancelsBefore && (await sectionState(page, SPOKEN.id)).state === 'idle');
  await page.click(`#${REC_B.id} .bh-listen-stop`);
  a = await audio(page);
  check('Stop silences the recording and stops its download',
    a.src === '' && (await sectionState(page, REC_B.id)).state === 'idle');
  await play(page, REC_B.id);
  await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
  a = await audio(page);
  check('leaving the page silences the recording', a.src === '');
  await context.close();

  // ── 3. an edited chapter never plays its old recording ─────────────────────
  console.log('\nafter a chapter edit changes one fingerprint');
  ({ page, context } = await open({ manifestJs: GOOD_MANIFEST, editHash: REC_A.hash }));
  s = await sectionState(page, REC_A.id);
  check('the edited section is no longer labelled as recorded', s.note === '', JSON.stringify(s));
  await play(page, REC_A.id);
  check('the edited section is read by the browser voice, from the current text',
    (await audio(page)).plays.length === 0 && (await speech(page)).spoken > 0);
  check('the unedited section still plays its recording',
    (await sectionState(page, REC_B.id)).note === 'AI narrator');
  await context.close();

  // ── 4. a recording that will not play ─────────────────────────────────────
  console.log('\nwhen a recording fails to load');
  ({ page, context } = await open({ manifestJs: GOOD_MANIFEST }));
  await play(page, REC_A.id);
  await page.evaluate(() => window.__failed());
  await tick(page);
  sp = await speech(page);
  s = await sectionState(page, REC_A.id);
  check('a failed recording falls back to the browser voice for the same section',
    sp.spoken > 0 && s.state === 'playing', JSON.stringify({ sp, s }));
  await play(page, REC_B.id);
  check('and recordings are not tried again this visit',
    (await audio(page)).plays.length === 1);
  await context.close();

  ({ page, context } = await open({ manifestJs: GOOD_MANIFEST, stubs: { rejectPlay: true } }));
  await play(page, REC_A.id);
  await tick(page);
  check('a blocked play() falls back to the browser voice',
    (await speech(page)).spoken > 0 && (await sectionState(page, REC_A.id)).state === 'playing');
  await context.close();

  // ── 5. a bad list is no list ──────────────────────────────────────────────
  console.log('\nwith a malformed recordings list');
  for (const [name, js] of [
    ['an http base', manifest([REC_A], 'http://audio.example.test/')],
    ['a file outside the audio layout', `window.BH_EBOOK_AUDIO = ${JSON.stringify({ base: BASE, recordings: { [REC_A.hash]: { file: 'https://evil.example/x.mp3', seconds: 1 } } })};`],
    ['a list that is not an object', 'window.BH_EBOOK_AUDIO = "nope";'],
    ['a list that throws', 'throw new Error("broken data file");']
  ]) {
    ({ page, context } = await open({ manifestJs: js }));
    const notes = await page.$$eval('.bh-listen-note', n => n.length);
    const controls = await page.$$eval('.bh-listen', n => n.length);
    check(`${name}: no recording is offered and every section still has the voice`,
      notes === 0 && controls === SECTIONS.length, `${notes} notes, ${controls} controls`);
    await context.close();
  }
  // The thrown error above is the data file's own, deliberately, and is not the
  // player's. Remove it so the final check is about the player.
  const thrown = allErrors.indexOf('broken data file');
  if (thrown !== -1) allErrors.splice(thrown, 1);

  // ── 6. no speech engine ───────────────────────────────────────────────────
  console.log('\nwithout speechSynthesis');
  ({ page, context } = await open({ manifestJs: GOOD_MANIFEST, stubs: { noSpeech: true } }));
  const ids = await page.$$eval('.bh-listen', n => n.map(x => x.closest('[data-listenable]').id));
  check('only recorded sections get controls when the browser cannot speak',
    ids.length === 2 && ids.includes(REC_A.id) && ids.includes(REC_B.id), ids.join(', '));
  await play(page, REC_A.id);
  check('and they play', (await audio(page)).plays.length === 1);
  await context.close();

  check('no page errors anywhere in the run', allErrors.length === 0, allErrors.slice(0, 3).join(' | '));

  await browser.close();
  server.close();
  const failed = results.filter(r => !r).length;
  console.log(`\n${'─'.repeat(60)}`);
  console.log(failed
    ? `${failed} of ${results.length} recorded-narration checks failed.`
    : `All ${results.length} recorded-narration checks passed.`);
  process.exit(failed ? 1 : 0);
})().catch(e => {
  console.error(e);
  server.close();
  process.exit(1);
});
