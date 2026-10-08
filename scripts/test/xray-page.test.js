#!/usr/bin/env node
/**
 * xray-page.test.js
 *
 * Drives teacher/xray.html in Chromium: the things only a rendered page knows.
 *
 *   - It makes no request beyond loading itself, and its own policy refuses a
 *     fetch to anywhere, including its own origin.
 *   - Nothing is analyzed until the teacher presses Analyze Class.
 *   - The first screen is a decision: the four planted priorities, in order, all
 *     visible without scrolling, each with its caveat beside it.
 *   - THE USABILITY PROXY. From opening the page to reading the first flagged
 *     answer takes two interactions, and nothing is scrolled to find a priority.
 *     This is a proxy and not the benchmark: the benchmark is a person with a
 *     stopwatch, and the protocol is in the design record.
 *   - The methodology is behind an explanation control and closed by default;
 *     the caveats are not.
 *   - Reading answers works by button and by arrow key, and tabs by arrow key.
 *   - Compare classes and All prompts are their own views, across the seven real
 *     classes (G1, G3 Kelly; G4, S1 to S4 Anderson), selectable by teacher or one by one.
 *   - The class list loads from the two exports through the real file inputs, keeps
 *     only the class, empties the inputs, and says so when it matches nothing.
 *   - A flag is never colour alone. No student id is on screen.
 *   - Nothing overflows sideways at 320px, in any view.
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

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
let failures = 0;
function check(name, pass, detail) {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
  if (!pass) failures++;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}/teacher/xray.html`;
  const demo = require('../lib/xray-demo-data.js').makeDemo();
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 800 } });
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
  check('the empty state shows and no priority exists', await page.isVisible('#empty') && (await page.locator('.pri').count()) === 0 && await page.locator('#out').isHidden());
  check('the page says it is demo data, in the header and in a note', await page.isVisible('.pill') && /Invented students/.test(await page.textContent('.demo')));
  const listSummary = await page.textContent('#rostersum');
  check('the class list in use is named, with its counts', /the demo \(invented\)/.test(listSummary) && /161 enrolled/.test(listSummary) && /149 with a backup account/.test(listSummary), listSummary);

  console.log('\nThe class choice is the seven real classes');
  const opts = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('#scope option'), o => o.textContent));
  check('all seven, each teacher\'s classes, one class at a time, and a bucket for accounts on no list',
    opts[0] === 'All seven classes' && /Jeff Anderson's classes \(5\)/.test(opts[1]) && /Mike Kelly's classes \(2\)/.test(opts[2]) &&
    ['G4', 'S1', 'S2', 'S3', 'S4', 'G1', 'G3'].every(l => opts.some(o => o.indexOf(l + ' (') === 0)) && opts.some(o => /^No class/.test(o)), opts.join(' | '));
  check('there is no G2', !opts.some(o => /^G2/.test(o)));

  console.log('\nThe first screen is a decision');
  let interactions = 0;
  await page.focus('#analyze');
  await page.keyboard.press('Enter'); interactions++;
  const scrollY0 = await page.evaluate(() => window.scrollY);
  const cards = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('.pri'), c => {
    const r = c.getBoundingClientRect();
    return { text: c.textContent.replace(/\s+/g, ' ').trim(), bottom: Math.round(r.bottom) };
  }));
  check('four priorities appear', cards.length === 4, cards.length + '');
  check('in order: Terms missing, Confident but thin, Few records, Terms widely used',
    /Terms missing/.test(cards[0].text) && /Confident but thin/.test(cards[1].text) && /Few records/.test(cards[2].text) && /Terms widely used/.test(cards[3].text));
  check('each names its class and its teacher, and its prompt',
    /S2 · Anderson.*Evidence Lab/.test(cards[0].text) && /G1 · Kelly.*Checkpoint 2/.test(cards[1].text) &&
    /S3 · Anderson.*Primary Source/.test(cards[2].text) && /G3 · Kelly.*Checkpoint 1/.test(cards[3].text));
  check('all four are on screen without scrolling (1100x800)', scrollY0 === 0 && cards.every(c => c.bottom <= 800), cards.map(c => c.bottom).join(','));
  check('the tab announces how many priorities there are', /Priorities\s*4/.test(await page.textContent('#t-priorities')));
  const caveats = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('.pri'), c => {
    const q = c.querySelector('.caveat'); const r = q.getBoundingClientRect();
    return { text: q.textContent, visible: r.height > 0 && r.top < 800 };
  }));
  check('every priority shows its caveat beside the flag, not behind a click', caveats.every(c => c.visible && c.text.length > 30));
  check('the caveat for missing records refuses to call it skipped work', /do not prove/i.test(caveats[2].text) && !/Skipped/.test(cards[2].text));
  check('the Few records finding counts against the enrolled class', /7 of 21 have a backup record/.test(cards[2].text), cards[2].text.slice(0, 120));
  const chips = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('.flag'), f => f.textContent.replace(/\s+/g, ' ').trim()));
  check('every flag chip carries a letter and its words, never colour alone',
    chips.length > 0 && chips.every(c => /^[A-Z]\s?(Terms missing|Confident but thin|Few records|Terms widely used)$/.test(c)), chips.join(' | '));

  console.log('\nThe methodology is one click away, and closed by default');
  check('"How to read this page" starts closed and its contract text is hidden',
    (await page.evaluate(() => document.querySelector('details.how').open)) === false && await page.locator('details.how .cant').first().isHidden());
  await page.click('details.how summary');
  const how = await page.textContent('details.how');
  check('opened, it states what each signal can and cannot tell, and the thresholds in words',
    await page.locator('details.how .cant').first().isVisible() && /Cannot tell/.test(how) && /Terms missing: at least 60%/.test(how) && /starting values/.test(how));
  await page.click('details.how summary');

  console.log('\nTwo interactions to the first flagged answer (the usability proxy)');
  await page.locator('.pri').first().locator('.btn:not(.alt)').click(); interactions++;
  const firstAnswer = await page.evaluate(() => { const b = document.querySelector('#p-evidence .ans'); return b ? b.textContent : ''; });
  check('Analyze, then Read answers: the first flagged answer is on screen', interactions === 2 && firstAnswer.length > 10 && await page.locator('#p-evidence .ans').isVisible(), firstAnswer.slice(0, 40));
  check('it opened on the Read answers tab and followed the priority\'s class',
    (await page.getAttribute('#t-evidence', 'aria-selected')) === 'true' && (await page.inputValue('#scope')) === 's2');
  check('the flag and its caveat travel with the answer', /Terms missing/.test(await page.textContent('#ev-card')) && /Students may have used different words/.test(await page.textContent('#ev-card')));
  check('focus lands on the answer', await page.evaluate(() => document.activeElement && document.activeElement.id === 'ev-card'));

  console.log('\nReading answers, by button and by key');
  const countText = () => page.textContent('.nav .count');
  check('it counts the answers', /^Answer 1 of \d+$/.test(await countText()), await countText());
  check('Previous is disabled on the first answer', await page.locator('.nav .btn').first().isDisabled());
  await page.keyboard.press('ArrowRight');
  check('the right arrow key steps forward', /^Answer 2 of/.test(await countText()), await countText());
  await page.keyboard.press('ArrowLeft');
  check('the left arrow key steps back', /^Answer 1 of/.test(await countText()));
  const total = parseInt((await countText()).replace(/\D+\d+\D+/, ''), 10);
  for (let i = 1; i < total; i++) await page.locator('.nav .btn').nth(1).click();
  check('Next is disabled on the last answer', await page.locator('.nav .btn').nth(1).isDisabled() && /of/.test(await countText()));
  await page.selectOption('#scope', 't:anderson');
  await page.selectOption('#qslot', '');
  const flaggedTotal = parseInt((await countText()).replace(/\D+\d+\D+/, ''), 10);
  check('"Flagged prompts" across a teacher\'s classes queues answers from more than one prompt', flaggedTotal > total, `${flaggedTotal} vs ${total} for one prompt in one class`);

  console.log('\nChoosing classes');
  await page.click('#t-priorities');
  const keysFor = async () => page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('.pri'), c => c.querySelector('.period-tag').textContent));
  await page.selectOption('#scope', 't:kelly');
  check('Mike Kelly\'s classes show his two priorities', eq(await keysFor(), ['G1 · Kelly', 'G3 · Kelly']), (await keysFor()).join(','));
  await page.selectOption('#scope', 't:anderson');
  check('Jeff Anderson\'s classes show his two', eq(await keysFor(), ['S2 · Anderson', 'S3 · Anderson']), (await keysFor()).join(','));
  await page.selectOption('#scope', 'g4');
  check('a class with no flag says flagged-nothing is not the same as fine',
    (await page.locator('.pri').count()) === 0 && /not the same as everything being fine/.test(await page.textContent('#p-priorities')));
  await page.selectOption('#scope', 'unassigned');
  check('the "No class" bucket is too thin to flag', (await page.locator('.pri').count()) === 0);
  await page.selectOption('#scope', 'all');

  console.log('\nTabs');
  await page.focus('#t-priorities');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  check('arrow keys move between tabs and the panel follows',
    (await page.getAttribute('#t-compare', 'aria-selected')) === 'true' && await page.locator('#p-compare').isVisible() && await page.locator('#p-evidence').isHidden());
  const cmp = await page.evaluate(() => Array.prototype.map.call(document.querySelectorAll('#p-compare thead th'), t => t.firstChild.textContent));
  check('Compare classes has a column for each of the seven, whatever the class choice',
    eq(cmp, ['Prompt', 'G4', 'S1', 'S2', 'S3', 'S4', 'G1', 'G3']) && (await page.locator('#p-compare tbody tr').count()) === 9, cmp.join('|'));
  check('it scrolls sideways inside its own region, which is focusable and named',
    await page.evaluate(() => { const w = document.querySelector('.cmpwrap'); return w.getAttribute('tabindex') === '0' && w.getAttribute('role') === 'region' && w.scrollWidth > w.clientWidth; }));
  const cmpText = await page.textContent('#p-compare');
  check('it shows each class\'s own flag and says the classes do not pair',
    /Terms widely used/.test(cmpText) && /Terms missing/.test(cmpText) && /Few records/.test(cmpText) && /Confident but thin/.test(cmpText) && /no column pairs with another/.test(cmpText));

  console.log('\nAll prompts');
  await page.click('#t-prompts');
  check('with several classes chosen it asks for one, and offers all seven',
    (await page.locator('#p-prompts .prow').count()) === 0 && (await page.locator('#p-prompts [data-pick]').count()) === 7);
  await page.click('#p-prompts [data-pick="s2"]');
  check('picking S2 shows its nine prompts, collapsed', (await page.inputValue('#scope')) === 's2' && (await page.locator('#p-prompts .prow').count()) === 9 &&
    (await page.locator('#p-prompts .prow > button[aria-expanded="false"]').count()) === 9);
  await page.locator('#p-prompts .prow > button').nth(6).click();
  const rowText = await page.textContent('#p-prompts .prow:nth-child(7)');
  check('opening a row shows its numbers and what they cannot tell', /Authored terms/.test(rowText) && /Cannot tell/.test(rowText) && /monsoon winds/.test(rowText));

  console.log('\nThe class list loader');
  await page.click('#rosterbox summary');
  await page.click('#buildroster');
  check('building with no files says to choose both', /Choose both files first/.test(await page.textContent('#rosterout')));
  const f = demo.files;
  await page.setInputFiles('#fbfile', { name: 'users.json', mimeType: 'application/json', buffer: Buffer.from(f.firebaseText) });
  await page.setInputFiles('#cvfile', { name: 'gradebook.csv', mimeType: 'text/csv', buffer: Buffer.from(f.canvasText) });
  await page.waitForTimeout(150);
  await page.click('#buildroster');
  const report = await page.textContent('#rosterout');
  check('the demo\'s own two files rebuild the same class list, and the page says "your files"',
    /your files/.test(await page.textContent('#rostersum')) && /161 enrolled/.test(await page.textContent('#rostersum')) && /149 with a backup account/.test(await page.textContent('#rostersum')));
  check('the report shows each class\'s enrolled and with-account counts', /G4\s*25\s*\d+/.test(report) && /S3\s*21\s*\d+/.test(report) && /G1\s*22\s*\d+/.test(report), report.slice(0, 160));
  check('it reports the G2 rows, the student in two classes, the enrolled with no account yet, and the accounts on no list',
    /"G2 Advisory"/.test(report) && /two classes at once/.test(report) && /12 enrolled students have no backup account yet/.test(report) && /3 backup accounts are not on the class list/.test(report));
  check('the two file inputs are emptied the moment the join is done',
    (await page.inputValue('#fbfile')) === '' && (await page.inputValue('#cvfile')) === '');
  check('nothing with an @ is anywhere on the page after the join', !/@/.test(await page.evaluate(() => document.body.innerText)));
  await page.selectOption('#scope', 'all');
  await page.click('#t-priorities');
  check('the page runs on the rebuilt list exactly as before', (await page.locator('.pri').count()) === 4);

  await page.setInputFiles('#fbfile', { name: 'users.json', mimeType: 'application/json', buffer: Buffer.from(f.firebaseText) });
  await page.setInputFiles('#cvfile', { name: 'gradebook.csv', mimeType: 'text/csv', buffer: Buffer.from('Student,SIS Login ID,Section\nX,12345,G1\nY,67890,S2\n') });
  await page.waitForTimeout(150);
  await page.click('#buildroster');
  check('a roster that matches no account says the login column is probably not the district email',
    /No roster student matched/.test(await page.textContent('#rosterout')));
  await page.click('#t-priorities');
  check('and with nobody in a class there is nothing to flag, not a wrong flag', (await page.locator('.pri').count()) === 0);

  console.log('\nNo student is named');
  await page.selectOption('#scope', 'all');
  await page.click('#t-evidence');
  const visible = await page.evaluate(() => document.body.innerText);
  check('no student id is on screen', !/demo-[a-z0-9]+-\d\d/.test(visible));

  console.log('\nOne reading column on a phone, in every view');
  const phone = await browser.newContext({ viewport: { width: 320, height: 700 } });
  const pp = await phone.newPage();
  await pp.goto(url);
  const sideways = () => pp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check('before analyzing', (await sideways()) <= 0);
  await pp.click('#rosterbox summary');
  check('with the class list open', (await sideways()) <= 0);
  await pp.click('#rosterbox summary');
  await pp.click('#analyze');
  for (const [tab, name] of [['priorities', 'Priorities'], ['evidence', 'Read answers'], ['compare', 'Compare classes'], ['prompts', 'All prompts']]) {
    await pp.click('#t-' + tab);
    if (tab === 'priorities') await pp.locator('.pri .btn.alt').first().click();
    if (tab === 'prompts') { await pp.click('#p-prompts [data-pick="s2"]'); await pp.locator('#p-prompts .prow > button').nth(6).click(); }
    const o = await sideways();
    check(name + ' fits 320px', o <= 0, 'overflow ' + o + 'px');
  }
  await phone.close();

  check('the page raised no script error', errors.length === 0, errors.join(' | '));

  await browser.close();
  server.close();
  console.log('');
  if (failures) { console.log(`Curriculum X-Ray page: ${failures} check(s) failed.`); process.exit(1); }
  console.log('Curriculum X-Ray page: all checks passed.');
})().catch(e => { console.error(e); try { server.close(); } catch (x) {} process.exit(1); });
