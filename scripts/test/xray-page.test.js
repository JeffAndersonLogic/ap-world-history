#!/usr/bin/env node
/**
 * xray-page.test.js
 *
 * Drives teacher/xray.html in Chromium: the things only a rendered page knows.
 *
 *   - It makes no request beyond loading itself, and its own policy refuses a
 *     fetch to anywhere, including its own origin.
 *   - Nothing is analyzed until the teacher presses Analyze Class.
 *   - After that: nine prompts in order, the planted flags in the right periods,
 *     the half-typed answers set aside, and no student id anywhere on screen.
 *   - It works from the keyboard: Analyze, switching period, opening a prompt.
 *   - A flag is never colour alone: every chip carries its word.
 *   - Opening a prompt shows what its numbers can and cannot tell a teacher.
 *   - Nothing overflows sideways at 320px.
 *
 * Offline calculations live in xray-core.test.js; this is the other half.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/xray-page.test.js
 *
 * Exits 2 when playwright-core is absent, which run-tests.js reads as SKIP.
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

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'Content-Type': path.extname(file) === '.html' ? 'text/html' : 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failures = 0;
function check(name, pass, detail) {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
  if (!pass) failures++;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}/teacher/xray.html`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  const page = await ctx.newPage();

  const requests = [];
  const errors = [];
  page.on('request', r => requests.push(r.url()));
  page.on('pageerror', e => errors.push(e.message));

  await page.goto(url);
  console.log('Curriculum X-Ray page\n');

  console.log('Nothing leaves the page');
  check('the only request made is the page itself', requests.length === 1 && requests[0] === url, requests.join(' '));
  const fetchResult = await page.evaluate(() => fetch('/teacher/xray.html').then(() => 'allowed', () => 'blocked'));
  check('its own policy refuses a fetch, even to its own origin', fetchResult === 'blocked', fetchResult);
  const cspBlocked = await page.evaluate(() => new Promise(resolve => {
    document.addEventListener('securitypolicyviolation', () => resolve(true), { once: true });
    const i = new Image(); i.src = 'https://example.com/pixel.png';
    setTimeout(() => resolve(false), 1500);
  }));
  check('a picture from another host is refused by the policy', cspBlocked === true);

  console.log('\nNothing is analyzed until asked');
  check('the empty state shows and no prompt cards exist', await page.isVisible('#empty') && (await page.locator('#cards article').count()) === 0);
  check('the demonstration banner is visible', await page.isVisible('.demo'));

  console.log('\nAnalyze Class, by keyboard');
  await page.focus('#analyze');
  await page.keyboard.press('Enter');
  check('nine prompts appear, in the order a student meets them',
    (await page.locator('#cards article').count()) === 9 &&
    (await page.locator('#cards article .mod').first().textContent()) === 'Map & Geography Check' &&
    (await page.locator('#cards article .mod').last().textContent()) === 'Checkpoint 2');
  const status = await page.textContent('#status');
  check('the status line reports the set-aside answers and the stray record',
    /3 set aside/.test(status) && /1 record names a prompt/.test(status), status);
  check('the empty state is gone', !(await page.isVisible('#empty')));

  console.log('\nThe planted flags land in the right period');
  const matrix = await page.evaluate(() => {
    const out = {};
    document.querySelectorAll('#matrix tbody tr').forEach(tr => {
      const name = tr.querySelector('th').textContent;
      out[name] = Array.prototype.map.call(tr.querySelectorAll('td'), td => td.textContent.replace(/\s+/g, ' ').trim());
    });
    return out;
  });
  check('Green: Checkpoint 1 is a Ceiling', /Ceiling/.test(matrix['Checkpoint 1'][0]), matrix['Checkpoint 1'][0]);
  check('Green: Checkpoint 2 is Confident but thin', /Confident but thin/.test(matrix['Checkpoint 2'][0]));
  check('Silver: Evidence Lab is a Floor', /Floor/.test(matrix['Evidence Lab'][1]));
  check('Silver: Primary Source is Skipped', /Skipped/.test(matrix['Primary Source'][1]));
  check('no other prompt raises a flag',
    Object.keys(matrix).filter(k => !['Checkpoint 1', 'Checkpoint 2', 'Evidence Lab', 'Primary Source'].includes(k))
      .every(k => matrix[k].every(c => /None|Too few/.test(c))));

  console.log('\nA flag is never colour alone');
  const chips = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('.flag'), f => f.textContent.replace(/\s+/g, ' ').trim()));
  check('every flag chip carries a letter and its word',
    chips.length > 0 && chips.every(c => /^[A-Z]\s?(Skipped|Floor|Ceiling|Confident but thin)$/.test(c)), chips.slice(0, 4).join(' | '));

  console.log('\nPeriod switching and prompt detail');
  await page.click('button[data-sec="anderson-silver"]');
  check('switching period updates the status line', /^Silver/.test(await page.textContent('#status')));
  check('the pressed period is announced', (await page.getAttribute('button[data-sec="anderson-silver"]', 'aria-pressed')) === 'true' &&
    (await page.getAttribute('button[data-sec="all"]', 'aria-pressed')) === 'false');
  const evBtn = page.locator('#cards article:nth-child(7) > button');
  check('a prompt starts collapsed', (await evBtn.getAttribute('aria-expanded')) === 'false' && await page.locator('#det-6').isHidden());
  await evBtn.focus();
  await page.keyboard.press('Enter');
  check('Enter opens it', (await evBtn.getAttribute('aria-expanded')) === 'true' && await page.locator('#det-6').isVisible());
  const detailText = await page.textContent('#det-6');
  check('it says what the numbers can and cannot tell', /Cannot tell/.test(detailText) && /Evidence terms/.test(detailText) && /provisional/i.test(detailText));
  check('it shows the term table and the answers to read first', /monsoon winds/.test(detailText) && /Read these first/.test(detailText));
  check('it compares the class periods', /Compare class periods/.test(detailText) && /Green/.test(detailText) && /Silver/.test(detailText));
  check('open state survives switching period', (await (async () => {
    await page.click('button[data-sec="anderson-green"]');
    return page.locator('#cards article:nth-child(7) > button').getAttribute('aria-expanded');
  })()) === 'true');

  console.log('\nNo student is named');
  const visible = await page.evaluate(() => document.body.innerText);
  check('no student id is on screen', !/demo-[gsu]-\d\d/.test(visible));
  check('answers are labelled by short code', /S-[0-9A-Z]{5}/.test(visible));

  console.log('\nOne reading column on a phone');
  const phone = await browser.newContext({ viewport: { width: 320, height: 700 } });
  const pp = await phone.newPage();
  await pp.goto(url);
  await pp.click('#analyze');
  await pp.click('#cards article:nth-child(7) > button');
  const overflow = await pp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check('nothing scrolls sideways at 320px', overflow <= 0, 'overflow ' + overflow + 'px');
  await phone.close();

  check('the page raised no script error', errors.length === 0, errors.join(' | '));

  await browser.close();
  server.close();
  console.log('');
  if (failures) { console.log(`Curriculum X-Ray page: ${failures} check(s) failed.`); process.exit(1); }
  console.log('Curriculum X-Ray page: all checks passed.');
})().catch(e => { console.error(e); try { server.close(); } catch (x) {} process.exit(1); });
