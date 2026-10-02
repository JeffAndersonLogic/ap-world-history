#!/usr/bin/env node
'use strict';

/**
 * Opens the Era 2 guide in Chromium and freezes every Teach Me paste. Update
 * the fixture only after reading the changed pastes:
 *
 *   node scripts/test/socrates-teach-me-guide.test.js --update
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (_) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const FIXTURE = path.join(__dirname, 'fixtures', 'socrates-teach-me-pastes.json');
const UPDATE = process.argv.includes('--update');
const EXE = process.env.PW_CHROME || chromium.executablePath();
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failures = 0;
function check(name, pass, detail) {
  if (!pass) failures++;
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ` (${detail})` : ''}`);
}

(async () => {
  await new Promise(resolve => server.listen(0, resolve));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write'],
    { origin: `http://127.0.0.1:${port}` });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route =>
    route.request().url().startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort());

  await page.goto(`http://127.0.0.1:${port}/study-guides/era-2-exam-study-guide.html`,
    { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('[data-teach-me-id]');

  const first = await page.evaluate(() => ({
    buttons: document.querySelectorAll('[data-teach-me-id]').length,
    ids: window.BH_TEACH_ME.activities.map(a => a.id),
    pastes: Object.fromEntries(window.BH_TEACH_ME.activities.map(a => [a.id, window.BH_TEACH_ME.pasteFor(a)])),
    url: window.BHClassroom.resolveTeachMeUrl()
  }));
  check('all 20 approved activities have one button', first.buttons === 20, `${first.buttons} buttons`);
  check('all 20 activity ids are unique', new Set(first.ids).size === 20, `${new Set(first.ids).size} unique`);
  check('page has no JavaScript errors', errors.length === 0, errors.join('; '));

  const afterSecondMount = await page.evaluate(() => {
    window.BH_TEACH_ME.mount();
    return document.querySelectorAll('[data-teach-me-id]').length;
  });
  check('mounting twice does not duplicate buttons', afterSecondMount === 20, `${afterSecondMount} buttons`);

  const cardScope = await page.evaluate(() => ({
    oneSeven: window.BH_TEACH_ME.activities.find(a => a.id === 'topic-1-7').scope,
    twoSeven: window.BH_TEACH_ME.activities.find(a => a.id === 'topic-2-7').scope,
    allNetworks: window.BH_TEACH_ME.activities.find(a => a.id === 'compare-all-networks').scope
  }));
  check('Topic 1.7 reads its five approved cards', cardScope.oneSeven.join(',') === '1.7,1.1,1.4,1.5,1.6');
  check('Topic 2.7 reads its four approved cards', cardScope.twoSeven.join(',') === '2.7,2.1,2.3,2.4');
  check('all-networks comparison reads the three network cards', cardScope.allNetworks.join(',') === '2.1,2.3,2.4');

  await page.click('[data-teach-me-id="topic-1-1"]');
  const panel = await page.evaluate(() => ({
    textarea: document.querySelector('#topic-1-1 .teach-me-panel textarea').value,
    disabled: document.querySelector('#topic-1-1 .teach-me-open').getAttribute('aria-disabled'),
    href: document.querySelector('#topic-1-1 .teach-me-open').href
  }));
  check('button reveals the same prepared message', panel.textarea === first.pastes['topic-1-1']);
  check('Open Socrates follows the configured room state', first.url
    ? panel.href === first.url && panel.disabled !== 'true'
    : panel.disabled === 'true');
  await page.click('#topic-1-1 .teach-me-copy');
  await page.waitForFunction(() => /copied/i.test(document.querySelector('#topic-1-1 .teach-me-status').textContent));
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  const normalizedClipboard = clipboard.replace(/\r\n/g, '\n');
  check('Copy prepared message copies the exact visible paste', normalizedClipboard === first.pastes['topic-1-1'],
    `${clipboard.length} clipboard chars`);

  await page.goto(`http://127.0.0.1:${port}/study-guides/era-2-exam-study-guide.html?classroom=kelly`,
    { waitUntil: 'domcontentloaded' });
  const kellyUrl = await page.evaluate(() => window.BHClassroom.resolveTeachMeUrl());
  check('Kelly query uses the same single Teach Me room', kellyUrl === first.url);

  if (UPDATE) {
    fs.mkdirSync(path.dirname(FIXTURE), { recursive: true });
    fs.writeFileSync(FIXTURE, JSON.stringify(first.pastes, null, 2) + '\n');
    console.log(`  UPDATED ${path.relative(ROOT, FIXTURE)}`);
  } else if (!fs.existsSync(FIXTURE)) {
    check('saved paste fixture exists', false, 'run with --update, then review it');
  } else {
    const expected = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
    const idsMatch = JSON.stringify(Object.keys(first.pastes)) === JSON.stringify(Object.keys(expected));
    check('fixture covers the same 20 activities', idsMatch);
    for (const id of Object.keys(first.pastes)) {
      check(`${id} paste matches the reviewed fixture`, first.pastes[id] === expected[id],
        `${first.pastes[id].length} chars`);
    }
  }

  await browser.close();
  server.close();
  process.exit(failures ? 1 : 0);
})().catch(error => {
  console.error(error.stack || error);
  server.close();
  process.exit(1);
});
