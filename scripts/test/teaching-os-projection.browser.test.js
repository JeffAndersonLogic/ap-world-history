#!/usr/bin/env node
/**
 * teaching-os-projection.browser.test.js
 *
 * Opens every Teaching OS teacher page in Chromium with its projection
 * window beside it, the way a teacher runs class, and asserts what only a
 * browser can see.
 *
 * Why this exists: from Topic 2.6 on, six teacher pages saved the current
 * slide for the projector and nothing on the projector ever read it. The
 * projection window opened on Teacher Preflight, the teacher-only slide, and
 * stayed there while the teacher moved through the lesson. Every check was
 * green, because nothing opened two windows. A teacher found it on
 * 2026-10-09, the same day the Briefing button on the same six pages was
 * found to be wired to nothing.
 *
 * Per deck in DECKS, on its real teacher page:
 *   1. The projection window opens without showing Teacher Preflight.
 *   2. When the teacher moves forward, the projector shows the same slide.
 *   3. Present (on the teacher's own screen) never shows Teacher Preflight,
 *      and Escape returns to the cockpit.
 *   4. A reload of the teacher page resumes on the slide it was on, so a
 *      reload mid-class does not drag the projector back to slide 1.
 *   5. The iPad Remote host loads that topic's real teacher page. It framed
 *      command-center files for 3.1, 3.3 and 3.4 that were never made.
 *
 * Negative controls at the end remove the projector's listener, remove the
 * preflight hold screen, and restore the remote's old topic list; each must
 * be caught.
 *
 *   npm i playwright-core
 *   node scripts/test/teaching-os-projection.browser.test.js
 *
 * Exits 2 when playwright-core is absent, which run-tests.js reads as SKIP
 * unless --strict.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const { DECKS } = require('../build-teaching-os-student-decks.js');

const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const builds = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d))
    .sort((a, b) => Number(a.split('-')[1]) - Number(b.split('-')[1]))
    .reverse();
  for (const build of builds) {
    for (const layout of ['chrome-linux64', 'chrome-linux']) {
      const exe = path.join(base, build, layout, 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  }
  return 'chromium';
})();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.mp4': 'video/mp4' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failed = 0;
function check(name, pass, detail = '') {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!pass) failed++;
}

function deckData(key) {
  const box = { window: {}, console: { log() {}, warn() {}, error() {} }, encodeURIComponent, decodeURIComponent };
  vm.createContext(box);
  for (const part of ['teaching-base', 'presentation-assets']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, `teacher/data/topic-${key}-${part}.js`), 'utf8'), box);
  }
  return box.window.BEHISTORICAL_TEACHING;
}

function teacherPage(key) {
  return [`teacher/topic-${key}-story-os.html`, `teacher/topic-${key}-os.html`]
    .find(rel => fs.existsSync(path.join(ROOT, rel)) && fs.readFileSync(path.join(ROOT, rel), 'utf8').includes('id="openProjection"'));
}

const norm = s => String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();
const state = page => page.evaluate(() => ({
  count: ((document.getElementById('count') || {}).textContent || '').trim(),
  stage: ((document.getElementById('stage') || {}).innerText || '').replace(/\s+/g, ' ').trim().toLowerCase(),
  projectMode: document.body.classList.contains('project-mode'),
}));
const settle = page => page.waitForTimeout(250);

/* Overrides let a negative control serve a mutated copy of one file. */
async function newContext(browser, origin, overrides = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.route('**/*', route => {
    const url = route.request().url();
    if (!url.startsWith(origin)) return route.abort();
    const rel = decodeURIComponent(new URL(url).pathname).replace(/^\/+/, '');
    if (overrides[rel] != null) return route.fulfill({ status: 200, contentType: TYPES[path.extname(rel)] || 'text/html', body: overrides[rel] });
    return route.continue();
  });
  return ctx;
}

/* One deck, start to finish. Returns the facts the checks and the controls read. */
async function runDeck(browser, origin, key, overrides) {
  const rel = teacherPage(key);
  const T = deckData(key);
  const preflight = norm((T.slides.find(s => s.phase === 'preflight') || {}).title);
  const ctx = await newContext(browser, origin, overrides);
  const errors = [];
  const teacher = await ctx.newPage();
  teacher.on('pageerror', e => errors.push(e.message));
  await teacher.goto(`${origin}/${rel}`, { waitUntil: 'load' });
  await teacher.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
  await teacher.reload({ waitUntil: 'load' });
  await settle(teacher);

  const [projector] = await Promise.all([ctx.waitForEvent('page'), teacher.click('#openProjection')]);
  projector.on('pageerror', e => errors.push(e.message));
  await projector.waitForLoadState('load');
  await settle(projector);
  const opened = await state(projector);

  await teacher.bringToFront();
  await teacher.keyboard.press('ArrowRight');
  await teacher.keyboard.press('ArrowRight');
  await settle(teacher);
  await settle(projector);
  const moved = { teacher: await state(teacher), projector: await state(projector) };

  await teacher.reload({ waitUntil: 'load' });
  await settle(teacher);
  const reloaded = await state(teacher);

  await teacher.click('#start');
  await teacher.click('#presentHere');
  await settle(teacher);
  const presenting = await state(teacher);
  await teacher.keyboard.press('Escape');
  await settle(teacher);
  const back = await state(teacher);
  await ctx.close();
  return { rel, preflight, opened, moved, reloaded, presenting, back, errors };
}

async function remoteLoads(browser, origin, key, overrides) {
  const ctx = await newContext(browser, origin, overrides);
  const page = await ctx.newPage();
  await page.goto(`${origin}/teacher/remote-host.html?topic=${key}`, { waitUntil: 'load' });
  await page.waitForTimeout(600);
  const framed = await page.evaluate(() => {
    const f = document.getElementById('command');
    try { const d = f.contentDocument; return { count: !!(d && d.getElementById('count')), path: d && d.location.pathname }; }
    catch (e) { return { count: false, path: 'unreadable' }; }
  });
  await ctx.close();
  return framed;
}

async function main() {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });

  for (const deck of DECKS) {
    const key = deck.key.replace('.', '-');
    console.log(`\n  Topic ${deck.key}\n`);
    if (!teacherPage(key)) { check(`${deck.key} has a teacher page with a Projection button`, false); continue; }
    const r = await runDeck(browser, origin, key);
    if (r.preflight) {
      check(`${deck.key} projection window opens without Teacher Preflight`, r.opened.projectMode && !r.opened.stage.includes(r.preflight), r.opened.stage.slice(0, 60));
    }
    check(`${deck.key} projector follows the teacher`, r.moved.projector.count === r.moved.teacher.count && /^3 \//.test(r.moved.teacher.count), `${r.moved.teacher.count} -> ${r.moved.projector.count}`);
    check(`${deck.key} a reload resumes on the same slide`, r.reloaded.count === r.moved.teacher.count, `${r.moved.teacher.count} -> ${r.reloaded.count}`);
    if (r.preflight) {
      check(`${deck.key} Present never shows Teacher Preflight`, r.presenting.projectMode && !r.presenting.stage.includes(r.preflight), r.presenting.stage.slice(0, 60));
      check(`${deck.key} Escape leaves Present and the cockpit shows preflight again`, !r.back.projectMode && r.back.stage.includes(r.preflight));
    }
    check(`${deck.key} no page errors`, r.errors.length === 0, r.errors.join(' | '));
    const remote = await remoteLoads(browser, origin, key);
    check(`${deck.key} iPad Remote loads the teacher page`, remote.count, remote.path);
  }

  console.log('\n  Negative controls, each must be caught\n');
  {
    const rel = 'teacher/topic-3-4-story-os.html';
    const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const deaf = src.replace("window.addEventListener('storage',", "window.addEventListener('storage-removed',");
    const r1 = await runDeck(browser, origin, '3-4', { [rel]: deaf });
    check('NC1 a projector that does not listen is detected', deaf !== src && r1.moved.projector.count !== r1.moved.teacher.count, `${r1.moved.teacher.count} -> ${r1.moved.projector.count}`);

    const leaky = src.replace("bhProjected()&&s.phase==='preflight'", "false&&s.phase==='preflight'");
    const r2 = await runDeck(browser, origin, '3-4', { [rel]: leaky });
    check('NC2 Teacher Preflight on the projector is detected', leaky !== src && r2.opened.stage.includes(r2.preflight));

    const hostRel = 'teacher/remote-host.html';
    const host = fs.readFileSync(path.join(ROOT, hostRel), 'utf8');
    const stale = host.replace("frame.src=topic==='1-7'?'command-center-topic-1-7.html':'topic-'+topic+'-os.html';",
      "frame.src=(topic==='2-2'||topic==='2-1'||topic==='2-3'||topic==='2-4'||topic==='2-5'||topic==='3-2')?'topic-'+topic+'-os.html':'command-center-topic-'+topic+'.html';");
    const r3 = await remoteLoads(browser, origin, '3-4', { [hostRel]: stale });
    check('NC3 an iPad Remote framing a missing page is detected', stale !== host && !r3.count, r3.path);
  }

  await browser.close();
  server.close();
  console.log(failed ? `\n${failed} projection check(s) failed` : '\nEvery Teaching OS projector follows, hides preflight, and has a working remote');
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error(e); server.close(); process.exit(1); });
