#!/usr/bin/env node
'use strict';

/**
 * Opens each exam study guide in Chromium and freezes every Teach Me paste.
 * Update the fixtures only after reading the changed pastes:
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
// One entry per guide. `sample` is a topic whose Be able to explain list has
// `sampleChoices` items; `scopes` pins the approved cross-topic evidence scopes.
const GUIDES = [
  { era: 'Era 2', file: 'study-guides/era-2-exam-study-guide.html',
    fixture: 'socrates-teach-me-pastes.json', activities: 20,
    sample: 'topic-1-1', sampleChoices: 4,
    scopes: { 'topic-1-7': '1.7,1.1,1.4,1.5,1.6', 'topic-2-7': '2.7,2.1,2.3,2.4',
      'compare-all-networks': '2.1,2.3,2.4' } },
  { era: 'Era 3', file: 'study-guides/era-3-exam-study-guide.html',
    fixture: 'socrates-teach-me-pastes-era-3.json', activities: 18,
    sample: 'topic-3-1', sampleChoices: 3,
    scopes: { 'topic-3-4': '3.4,3.1,3.2,3.3', 'topic-4-8': '4.8,4.1,4.3,4.4,4.5,4.7',
      'compare-land-maritime': '3.1,3.4,4.4,4.5' } }
];
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

  for (const g of GUIDES) {
    console.log(`\n${g.era}: ${g.file}`);
    errors.length = 0;
    await page.goto(`http://127.0.0.1:${port}/${g.file}`,
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
          const lines = paste.split('\n');
          return lines.length === 7
            && lines[0] === 'TEACH ME'
            && lines[1].startsWith('Topic title: ')
            && lines[2] === `Teaching focus I chose: ${focus}`
            && lines[3].startsWith('Opening focus: ')
            && lines[4].startsWith('Evidence scope: Topic')
            && lines[5] === ''
            && lines[6] === 'I am ready to teach.'
            && !paste.includes('PRIVATE CHECKER NOTES')
            && !paste.includes('Know:')
            && !paste.includes('Evidence anchors:');
        })),
      pastes: Object.fromEntries(window.BH_TEACH_ME.activities.map(a => {
        const focus = window.BH_TEACH_ME.focusesFor(a)[0];
        return [a.id, window.BH_TEACH_ME.pasteFor(a, focus)];
      })),
      url: window.BHClassroom.resolveTeachMeUrl()
    }));
    check('the guide has one Teach Me launcher', first.launcherButtons === 1, `${first.launcherButtons} launcher`);
    check('topic cards have no repeated Teach Me buttons', first.inlineButtons === 0, `${first.inlineButtons} inline buttons`);
    check(`all ${g.activities} activity ids are unique`, first.ids.length === g.activities && new Set(first.ids).size === g.activities, `${new Set(first.ids).size} unique`);
    check('every activity offers at least one teaching focus',
      Object.values(first.focuses).every(items => items.length > 0));
    check(`Topic ${g.sample.slice(6).replace('-', '.')} offers its ${g.sampleChoices} Be able to explain choices`,
      first.focuses[g.sample].length === g.sampleChoices, `${first.focuses[g.sample].length} choices`);
    check('every choice builds a short setup with no checker content', first.allFocusPastesValid);
    check('page has no JavaScript errors', errors.length === 0, errors.join('; '));

    const afterSecondMount = await page.evaluate(() => {
      window.BH_TEACH_ME.mount();
      return document.querySelectorAll('#teach-me-start').length;
    });
    check('mounting twice does not duplicate the launcher', afterSecondMount === 1, `${afterSecondMount} launcher`);

    const cardScope = await page.evaluate(ids => Object.fromEntries(ids.map(id =>
      [id, (window.BH_TEACH_ME.activities.find(a => a.id === id) || { scope: [] }).scope.join(',')])),
      Object.keys(g.scopes));
    for (const [id, scope] of Object.entries(g.scopes)) {
      check(`${id} reads its approved cards (${scope})`, cardScope[id] === scope, cardScope[id]);
    }

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
    check(`launcher lists all ${g.activities} activities`, beforeChoice.topicOptions === g.activities + 1, `${beforeChoice.topicOptions - 1} activities`);
    check('every numbered topic option begins with its topic number',
      Object.entries(beforeChoice.topicLabels).every(([id, label]) => {
        const number = id.replace('topic-', '').replace('-', '.');
        return label.startsWith(`${number}: `);
      }));
    check('student setup is never displayed in a textarea', beforeChoice.textareas === 0 && !beforeChoice.privateNotesVisible);
    check('combined action stays disabled before the choices are complete', beforeChoice.disabled === 'true');

    await page.selectOption('#teach-me-topic', g.sample);
    const focusState = await page.evaluate(() => ({
      choices: document.querySelectorAll('.teach-me-choice input').length,
      disabled: document.querySelector('.teach-me-open').getAttribute('aria-disabled')
    }));
    check(`${g.sample} displays its ${g.sampleChoices} focus choices`, focusState.choices === g.sampleChoices, `${focusState.choices} choices`);
    check('combined action stays disabled until a focus is chosen', focusState.disabled === 'true');

    await page.locator('.teach-me-choice input').first().check();
    const panel = await page.evaluate(() => ({
      disabled: document.querySelector('.teach-me-open').getAttribute('aria-disabled'),
      href: document.querySelector('.teach-me-open').href,
      privateNotesVisible: document.querySelector('.teach-me-panel').innerText.includes('PRIVATE CHECKER NOTES')
    }));
    check('private checker content stays out of the panel after selection', !panel.privateNotesVisible);
    check('combined action follows the configured room state', first.url
      ? panel.href === first.url && panel.disabled !== 'true'
      : panel.disabled === 'true');
    await page.evaluate(() => document.querySelector('.teach-me-open').addEventListener('click', event => event.preventDefault(), { once: true, capture: true }));
    await page.click('.teach-me-open');
    await page.waitForFunction(() => /copied/i.test(document.querySelector('.teach-me-status').textContent));
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    const normalizedClipboard = clipboard.replace(/\r\n/g, '\n');
    check('one action copies the exact hidden prompt', normalizedClipboard === first.pastes[g.sample],
      `${clipboard.length} clipboard chars`);
    check('the copied student message contains no checker notes or evidence answers',
      !/PRIVATE CHECKER NOTES|Know:|Evidence anchors:/.test(normalizedClipboard));

    await page.goto(`http://127.0.0.1:${port}/${g.file}?classroom=kelly`,
      { waitUntil: 'domcontentloaded' });
    const kellyUrl = await page.evaluate(() => window.BHClassroom.resolveTeachMeUrl());
    check('Kelly query uses the same single Teach Me room', kellyUrl === first.url);

    const FIXTURE = path.join(__dirname, 'fixtures', g.fixture);
    if (UPDATE) {
      fs.mkdirSync(path.dirname(FIXTURE), { recursive: true });
      fs.writeFileSync(FIXTURE, JSON.stringify(first.pastes, null, 2) + '\n');
      console.log(`  UPDATED ${path.relative(ROOT, FIXTURE)}`);
    } else if (!fs.existsSync(FIXTURE)) {
      check('saved paste fixture exists', false, 'run with --update, then review it');
    } else {
      const expected = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
      const idsMatch = JSON.stringify(Object.keys(first.pastes)) === JSON.stringify(Object.keys(expected));
      check(`fixture covers the same ${g.activities} activities`, idsMatch);
      for (const id of Object.keys(first.pastes)) {
        check(`${id} paste matches the reviewed fixture`, first.pastes[id] === expected[id],
          `${first.pastes[id].length} chars`);
      }
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
