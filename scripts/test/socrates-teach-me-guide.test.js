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
  await page.waitForSelector('#teach-me-start');

  const first = await page.evaluate(() => ({
    launcherButtons: document.querySelectorAll('#teach-me-start').length,
    inlineButtons: document.querySelectorAll('[data-teach-me-id]').length,
    ids: window.BH_TEACH_ME.activities.map(a => a.id),
    focuses: Object.fromEntries(window.BH_TEACH_ME.activities.map(a => [a.id, window.BH_TEACH_ME.focusesFor(a)])),
    allFocusPastesValid: window.BH_TEACH_ME.activities.every(a =>
      window.BH_TEACH_ME.focusesFor(a).every(focus => {
        const paste = window.BH_TEACH_ME.pasteFor(a, focus);
        return paste.includes(`Teaching focus I chose: ${focus}`)
          && paste.indexOf('Teaching focus I chose:') < paste.indexOf('PRIVATE CHECKER NOTES');
      })),
    pastes: Object.fromEntries(window.BH_TEACH_ME.activities.map(a => {
      const focus = window.BH_TEACH_ME.focusesFor(a)[0];
      return [a.id, window.BH_TEACH_ME.pasteFor(a, focus)];
    })),
    url: window.BHClassroom.resolveTeachMeUrl()
  }));
  check('the guide has one Teach Me launcher', first.launcherButtons === 1, `${first.launcherButtons} launcher`);
  check('topic cards have no repeated Teach Me buttons', first.inlineButtons === 0, `${first.inlineButtons} inline buttons`);
  check('all 20 activity ids are unique', new Set(first.ids).size === 20, `${new Set(first.ids).size} unique`);
  check('every activity offers at least one teaching focus',
    Object.values(first.focuses).every(items => items.length > 0));
  check('Topic 1.1 offers its four Be able to explain choices', first.focuses['topic-1-1'].length === 4,
    `${first.focuses['topic-1-1'].length} choices`);
  check('every choice builds a paste with its focus above the private notes', first.allFocusPastesValid);
  check('page has no JavaScript errors', errors.length === 0, errors.join('; '));

  const afterSecondMount = await page.evaluate(() => {
    window.BH_TEACH_ME.mount();
    return document.querySelectorAll('#teach-me-start').length;
  });
  check('mounting twice does not duplicate the launcher', afterSecondMount === 1, `${afterSecondMount} launcher`);

  const cardScope = await page.evaluate(() => ({
    oneSeven: window.BH_TEACH_ME.activities.find(a => a.id === 'topic-1-7').scope,
    twoSeven: window.BH_TEACH_ME.activities.find(a => a.id === 'topic-2-7').scope,
    allNetworks: window.BH_TEACH_ME.activities.find(a => a.id === 'compare-all-networks').scope
  }));
  check('Topic 1.7 reads its five approved cards', cardScope.oneSeven.join(',') === '1.7,1.1,1.4,1.5,1.6');
  check('Topic 2.7 reads its four approved cards', cardScope.twoSeven.join(',') === '2.7,2.1,2.3,2.4');
  check('all-networks comparison reads the three network cards', cardScope.allNetworks.join(',') === '2.1,2.3,2.4');

  await page.click('#teach-me-start');
  const beforeChoice = await page.evaluate(() => ({
    topicOptions: document.querySelectorAll('#teach-me-topic option').length,
    topicLabels: Object.fromEntries([...document.querySelectorAll('#teach-me-topic option')]
      .filter(option => /^topic-\d+-\d+$/.test(option.value))
      .map(option => [option.value, option.textContent])),
    textareas: document.querySelectorAll('.teach-me-panel textarea').length,
    privateNotesVisible: document.querySelector('.teach-me-panel').innerText.includes('PRIVATE CHECKER NOTES'),
    disabled: document.querySelector('.teach-me-open').getAttribute('aria-disabled')
  }));
  check('launcher lists all 20 activities', beforeChoice.topicOptions === 21, `${beforeChoice.topicOptions - 1} activities`);
  check('every numbered topic option begins with its topic number',
    Object.entries(beforeChoice.topicLabels).every(([id, label]) => {
      const number = id.replace('topic-', '').replace('-', '.');
      return label.startsWith(`${number}: `);
    }));
  check('private prompt is never displayed in a textarea', beforeChoice.textareas === 0 && !beforeChoice.privateNotesVisible);
  check('combined action stays disabled before the choices are complete', beforeChoice.disabled === 'true');

  await page.selectOption('#teach-me-topic', 'topic-1-1');
  const focusState = await page.evaluate(() => ({
    choices: document.querySelectorAll('.teach-me-choice input').length,
    disabled: document.querySelector('.teach-me-open').getAttribute('aria-disabled')
  }));
  check('Topic 1.1 displays its four focus choices', focusState.choices === 4, `${focusState.choices} choices`);
  check('combined action stays disabled until a focus is chosen', focusState.disabled === 'true');

  await page.locator('.teach-me-choice input').first().check();
  const panel = await page.evaluate(() => ({
    disabled: document.querySelector('.teach-me-open').getAttribute('aria-disabled'),
    href: document.querySelector('.teach-me-open').href,
    privateNotesVisible: document.querySelector('.teach-me-panel').innerText.includes('PRIVATE CHECKER NOTES')
  }));
  check('private checker notes remain hidden after selection', !panel.privateNotesVisible);
  check('combined action follows the configured room state', first.url
    ? panel.href === first.url && panel.disabled !== 'true'
    : panel.disabled === 'true');
  await page.evaluate(() => document.querySelector('.teach-me-open').addEventListener('click', event => event.preventDefault(), { once: true, capture: true }));
  await page.click('.teach-me-open');
  await page.waitForFunction(() => /copied/i.test(document.querySelector('.teach-me-status').textContent));
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  const normalizedClipboard = clipboard.replace(/\r\n/g, '\n');
  check('one action copies the exact hidden prompt', normalizedClipboard === first.pastes['topic-1-1'],
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
