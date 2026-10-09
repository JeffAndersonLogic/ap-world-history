#!/usr/bin/env node
/**
 * teaching-os-briefing.browser.test.js
 *
 * Clicks the Briefing button on every Teaching OS teacher page in Chromium
 * and asserts that a briefing actually opens.
 *
 * Why this exists: from Topic 2.6 on, six Teaching OS pages shipped a
 * Briefing button in their header, and a shortcut line advertising
 * "B briefing", with nothing behind either. No drawer, no click handler, no
 * key. Every structural check was green, because nothing ever clicked it. A
 * teacher found it on 2026-10-09. The briefing is now built once, in
 * teacher/teaching-os-shared.js, and this test is what keeps it built.
 *
 * Per deck in DECKS, on its real teacher page:
 *   1. Clicking Briefing shows a dialog carrying that deck's end target and
 *      its first Must-land priority, read from the deck's own data.
 *   2. The share tools are in it: Copy link and Copy briefing text put a
 *      #briefing link and the briefing's text on the clipboard, and Print
 *      lays the briefing out alone on a white page.
 *   3. Escape closes it, and B opens it.
 *   4. On the shared drawer, the slide does not move while it is open, and
 *      focus returns to the Briefing button on close.
 *   5. page#briefing opens it on load, which is the link co-teachers get.
 *   6. On the projector (?mode=project) it never opens, by link or by key,
 *      because the briefing is teacher-only.
 *   7. Every local link on the page, the briefing's Quick launch included,
 *      resolves. Topics 3.3 and 3.4 shipped a Student Lesson button pointing
 *      at 3.2's filename.
 * And on the teacher command center, the Today panel offers today's briefing
 * on a Teaching OS day.
 *
 * Negative controls at the end put the bug back (the shared briefing switched
 * off), open the briefing on the projector, and plant a dead link; each must
 * be caught.
 *
 *   npm i playwright-core
 *   node scripts/test/teaching-os-briefing.browser.test.js
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
const fileFor = url => {
  const rel = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  return file.startsWith(ROOT) && fs.existsSync(file) && !fs.statSync(file).isDirectory() ? file : null;
};
const server = http.createServer((req, res) => {
  const file = fileFor(req.url);
  if (!file) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failed = 0;
function check(name, pass, detail = '') {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!pass) failed++;
}

/* The deck's own data, read in Node the way the architecture test does, so
   the assertion is against what the author wrote rather than against what
   the page happened to draw. */
function deckData(key) {
  const box = { window: {}, console: { log() {}, warn() {}, error() {} }, encodeURIComponent, decodeURIComponent };
  vm.createContext(box);
  for (const part of ['teaching-base', 'presentation-assets']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, `teacher/data/topic-${key}-${part}.js`), 'utf8'), box);
  }
  return box.window.BEHISTORICAL_TEACHING;
}

/* The page that actually renders the cockpit. Each topic has a -os.html and
   most have a -story-os.html; one of the two is a redirect stub. */
function teacherPage(key) {
  return [`teacher/topic-${key}-story-os.html`, `teacher/topic-${key}-os.html`]
    .find(rel => fs.existsSync(path.join(ROOT, rel)) && fs.readFileSync(path.join(ROOT, rel), 'utf8').includes('id="briefingBtn"'));
}

/* The briefing dialog that is visible right now, or null. Generic on
   purpose: 2.1 to 2.5 own their drawer and the rest use the shared one. */
function visibleBriefing() {
  const dialogs = Array.from(document.querySelectorAll('[role="dialog"]'));
  const shown = dialogs.find(d => {
    const r = d.getBoundingClientRect();
    const s = getComputedStyle(d);
    return r.width > 50 && r.height > 50 && s.visibility !== 'hidden' && /Briefing/.test(d.textContent);
  });
  return shown ? { text: shown.textContent.replace(/\s+/g, ' '), share: !!shown.querySelector('.bhb-share'), shared: !!shown.closest('#bhbDrawer') } : null;
}

const norm = s => String(s || '').replace(/\s+/g, ' ').trim();

async function openPage(context, url) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(150);
  return { page, errors };
}

async function localLinks(page, origin) {
  const hrefs = await page.$$eval('a[href]', as => as.map(a => a.href));
  return hrefs.filter(h => h.startsWith(origin + '/') && !/^javascript:/.test(h));
}

async function main() {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
  // Hermetic: nothing off the fixture server.
  await context.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());

  const readClipboard = page => page.evaluate(() => navigator.clipboard.readText());

  for (const deck of DECKS) {
    const key = deck.key.replace('.', '-');
    const rel = teacherPage(key);
    console.log(`\n  Topic ${deck.key}  ${rel || '(no page)'}\n`);
    if (!rel) { check(`${deck.key} has a teacher page with a Briefing button`, false); continue; }
    const T = deckData(key);
    const target = norm(T.meta && T.meta.endTarget);
    const must = norm(((T.priorities || {}).must || [])[0]);

    const { page, errors } = await openPage(context, `${origin}/${rel}`);
    check(`${deck.key} briefing starts closed`, !(await page.evaluate(visibleBriefing)));

    await page.click('#briefingBtn');
    let shown = await page.evaluate(visibleBriefing);
    check(`${deck.key} Briefing button opens a briefing`, !!shown);
    check(`${deck.key} briefing shows the deck's end target`, !!shown && !!target && shown.text.includes(target));
    check(`${deck.key} briefing shows the first Must-land priority`, !!shown && !!must && shown.text.includes(must));
    check(`${deck.key} briefing carries the share tools`, !!shown && shown.share);

    if (shown && shown.share) {
      await page.click('[role="dialog"] [data-bhb="link"]');
      await page.waitForTimeout(50);
      const link = await readClipboard(page);
      check(`${deck.key} Copy link copies this page's #briefing link`, link.endsWith('#briefing') && link.includes(path.basename(rel)), link);
      await page.click('[role="dialog"] [data-bhb="text"]');
      await page.waitForTimeout(50);
      const text = norm(await readClipboard(page));
      check(`${deck.key} Copy briefing text copies the briefing`, text.includes(`Topic ${deck.key} Briefing`) && text.includes(target) && text.includes(must) && text.includes('#briefing'));
      await page.evaluate(() => { window.print = () => {}; });
      await page.click('[role="dialog"] [data-bhb="print"]');
      await page.emulateMedia({ media: 'print' });
      const printed = await page.evaluate(() => {
        const box = document.getElementById('bhbPrint');
        const r = box && box.getBoundingClientRect();
        return { text: box ? box.textContent.replace(/\s+/g, ' ') : '', visible: !!r && r.height > 100, bg: getComputedStyle(document.documentElement).backgroundColor };
      });
      check(`${deck.key} Print lays out the briefing on a white page`, printed.visible && printed.text.includes(target) && /255, 255, 255/.test(printed.bg), printed.bg);
      await page.emulateMedia({ media: 'screen' });
      await page.evaluate(() => { document.documentElement.classList.remove('bhb-printing'); });
    }

    let countBefore = await page.$eval('#count', el => el.textContent).catch(() => '');
    if (shown && shown.shared) {
      await page.keyboard.press('ArrowRight');
      const countAfter = await page.$eval('#count', el => el.textContent).catch(() => '');
      check(`${deck.key} arrow keys do not move the slide behind an open briefing`, countBefore === countAfter, `${countBefore} -> ${countAfter}`);
    }

    await page.keyboard.press('Escape');
    check(`${deck.key} Escape closes the briefing`, !(await page.evaluate(visibleBriefing)));
    if (shown && shown.shared) {
      check(`${deck.key} focus returns to the Briefing button`, await page.evaluate(() => document.activeElement && document.activeElement.id === 'briefingBtn'));
    }

    await page.evaluate(() => document.activeElement && document.activeElement.blur());
    await page.keyboard.press('b');
    check(`${deck.key} B opens the briefing`, !!(await page.evaluate(visibleBriefing)));
    await page.keyboard.press('Escape');

    const dead = [];
    for (const href of await localLinks(page, origin)) if (!fileFor(href.slice(origin.length))) dead.push(href.slice(origin.length));
    check(`${deck.key} every local link on the page resolves`, dead.length === 0, dead.join(', ') || 'all resolve');
    check(`${deck.key} page threw no errors`, errors.length === 0, errors.join(' | '));
    await page.close();

    const deep = await openPage(context, `${origin}/${rel}#briefing`);
    check(`${deck.key} #briefing link opens the briefing on load`, !!(await deep.page.evaluate(visibleBriefing)));
    await deep.page.close();

    const proj = await openPage(context, `${origin}/${rel}?mode=project#briefing`);
    let leak = !!(await proj.page.evaluate(visibleBriefing));
    await proj.page.keyboard.press('b');
    leak = leak || !!(await proj.page.evaluate(visibleBriefing));
    check(`${deck.key} briefing never opens on the projector`, !leak);
    await proj.page.close();
  }

  console.log('\n  Teacher command center\n');
  {
    // 2026-10-09 is a Topic 3.1 day in the schedule.
    const page = await context.newPage();
    await page.clock.setFixedTime(new Date('2026-10-09T09:00:00'));
    await page.goto(`${origin}/teacher/index.html`, { waitUntil: 'load' });
    const brief = await page.$eval('.tc-today-brief', a => a.getAttribute('href')).catch(() => null);
    check('Today panel links today\'s briefing on a Teaching OS day', brief === 'topic-3-1-os.html#briefing', String(brief));
    if (brief) {
      // Through the redirect stub, which has to carry #briefing with it.
      await Promise.all([page.waitForURL(/topic-3-1-story-os\.html#briefing$/), page.click('.tc-today-brief')]);
      await page.waitForLoadState('load');
      await page.waitForTimeout(150);
      check('that link lands on the open Topic 3.1 briefing', !!(await page.evaluate(visibleBriefing)), page.url().replace(origin, ''));
    }
    await page.close();
  }

  console.log('\n  Negative controls, each must be caught\n');
  {
    // NC1: the original bug. The shared layer without its briefing.
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
    await ctx.route('**/*', async route => {
      const url = route.request().url();
      if (!url.startsWith(origin)) return route.abort();
      if (/teaching-os-shared\.js/.test(url)) {
        const src = fs.readFileSync(path.join(ROOT, 'teacher/teaching-os-shared.js'), 'utf8').replace('installBriefing();}', '}');
        return route.fulfill({ status: 200, contentType: 'text/javascript', body: src });
      }
      return route.continue();
    });
    const { page } = await openPage(ctx, `${origin}/teacher/topic-3-4-story-os.html`);
    await page.click('#briefingBtn');
    check('NC1 a dead Briefing button is detected', !(await page.evaluate(visibleBriefing)));
    await ctx.close();
  }
  {
    // NC2: the projector guard removed.
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
    await ctx.route('**/*', async route => {
      const url = route.request().url();
      if (!url.startsWith(origin)) return route.abort();
      if (/teaching-os-shared\.js/.test(url)) {
        const src = fs.readFileSync(path.join(ROOT, 'teacher/teaching-os-shared.js'), 'utf8')
          .replace('if(isOpen()||isProjector())return;', 'if(isOpen())return;')
          .replace('.project-mode .bhb-drawer{display:none!important}', '');
        return route.fulfill({ status: 200, contentType: 'text/javascript', body: src });
      }
      return route.continue();
    });
    const { page } = await openPage(ctx, `${origin}/teacher/topic-3-4-story-os.html?mode=project#briefing`);
    check('NC2 a briefing on the projector is detected', !!(await page.evaluate(visibleBriefing)));
    await ctx.close();
  }
  {
    // NC3: a dead link like the 3.3 and 3.4 Student Lesson buttons.
    const { page } = await openPage(context, `${origin}/teacher/topic-3-4-story-os.html`);
    await page.evaluate(() => { const a = document.createElement('a'); a.href = '../unit-3/lesson-3-4-empires-administration.html'; document.body.appendChild(a); });
    const dead = (await localLinks(page, origin)).filter(h => !fileFor(h.slice(origin.length)));
    check('NC3 a dead local link is detected', dead.length === 1, dead.join(', '));
    await page.close();
  }

  await browser.close();
  server.close();
  console.log(failed ? `\n${failed} briefing check(s) failed` : '\nEvery Teaching OS briefing opens, shares, and stays off the projector');
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error(e); server.close(); process.exit(1); });
