#!/usr/bin/env node
/**
 * class-pulse-page.test.js
 *
 * The Class Pulse teacher page in Chromium, on its invented demo data.
 *
 * What it proves:
 *   - the page lists every unit topic, and its grid has one column per real
 *     criterion of each checkpoint, titled with the criterion's exact words, so a
 *     five-criterion checkpoint gets five columns;
 *   - it cannot reach the network: the policy says connect-src 'none' and the page
 *     asks nothing of any host but its own and Google Fonts;
 *   - projector-safe mode leaves no student name on the grid;
 *   - after-class bars count every student, including anyone who did not submit;
 *   - the Reader menu offers an AI reader only where it has recorded readings, and
 *     choosing one shows that reader's own levels and reasons, with every reader's
 *     level for the open criterion side by side;
 *   - the drawer quotes evidence that is really in the answer, and a teacher's
 *     agree or change moves the agreement score;
 *   - it fits a phone without sideways scrolling.
 *
 *   npm i --no-save playwright-core
 *   node scripts/test/class-pulse-page.test.js
 *
 * The last section serves deliberately broken copies and asserts the checks go red.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i --no-save playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();

const box = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets/data/skills-map.js'), 'utf8'), box);
const MAP = box.window.BEHISTORICAL_SKILLS_MAP;
const UNIT_TOPICS = Object.keys(MAP.topics).filter(k => MAP.topics[k].kind === 'unit');
const crit = (k, slot) => MAP.topics[k].slots[slot].criteria;

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
let patches = [];
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  let body = fs.readFileSync(file, 'utf8');
  patches.filter(p => rel.endsWith(p.file)).forEach(p => { body = body.replace(p.from, p.to); });
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'text/plain' });
  res.end(body);
});

let failures = 0, quiet = false;
const failed = [];
function check(label, ok, detail) {
  if (!ok) { failures++; failed.push(label); }
  if (quiet) return !!ok;
  console.log(ok ? `  \x1b[32m✓\x1b[0m ${label}` : `  \x1b[31m✗\x1b[0m ${label}${detail ? `\n      ${detail}` : ''}`);
  return !!ok;
}
function section(t) { if (!quiet) console.log(`\n\x1b[1m${t}\x1b[0m`); }

async function open(browser, width) {
  const context = await browser.newContext({ viewport: { width: width || 1280, height: 900 } });
  const p = await context.newPage();
  const hosts = new Set(), errors = [];
  p.on('request', r => hosts.add(new URL(r.url()).hostname));
  p.on('pageerror', e => errors.push(String(e)));
  await p.goto(`http://127.0.0.1:${server.address().port}/teacher/class-pulse.html`, { waitUntil: 'load' });
  await p.waitForFunction(() => document.querySelectorAll('#heat th.colh').length > 0, null, { timeout: 8000 }).catch(() => {});
  return { context, p, hosts, errors };
}
const choose = async (p, topic) => {
  await p.selectOption('#topic', topic);
  await p.waitForFunction(t => document.getElementById('h-topic').textContent.startsWith(t + ' '), topic, { timeout: 8000 }).catch(() => {});
};

async function suite(browser) {
  section('Every topic, its own criteria');
  const s = await open(browser);
  check('the page loads without a script error', s.errors.length === 0, s.errors.join(' | '));
  check('every unit topic is offered', JSON.stringify(await s.p.$$eval('#topic option', o => o.map(x => x.value))) === JSON.stringify(UNIT_TOPICS));
  for (const topic of ['3.2', '5.3']) {
    await choose(s.p, topic);
    const titles = await s.p.$$eval('#heat th.colh[title]', ths => ths.map(t => t.getAttribute('title')).filter(t => !/^Confidence/.test(t)));
    const want = crit(topic, 'checkpoint-one-response').concat(crit(topic, 'checkpoint-two-response'));
    check(`${topic}: the columns follow the topic's criteria, word for word (${want.length})`, JSON.stringify(titles) === JSON.stringify(want), titles.length + ' columns');
  }
  await choose(s.p, '3.2');

  section('No network');
  const csp = await s.p.$eval('meta[http-equiv="Content-Security-Policy"]', m => m.content);
  check("the page cannot reach the network (connect-src 'none')", /connect-src 'none'/.test(csp), csp);
  const strays = [...s.hosts].filter(h => !['127.0.0.1', 'fonts.googleapis.com', 'fonts.gstatic.com'].includes(h));
  check('it asks nothing of any other host', strays.length === 0, strays.join(', '));
  const fetchBlocked = await s.p.evaluate(() => fetch('https://example.com/').then(() => false, () => true));
  check('and a fetch from the page is refused', fetchBlocked);

  section('Grid, drawer and teacher calls');
  await s.p.click('#toend');
  const absent = await s.p.evaluate(() => [...document.querySelectorAll('#heat tbody tr')].filter(r => /Absent/.test(r.textContent)).every(r => !r.querySelector('button.cell')));
  check('a student who never submitted has nothing to open', absent);
  await s.p.click('#heat button.cell.b-D >> nth=0');
  const drawer = await s.p.evaluate(() => {
    const m = document.querySelector('#dbody .response mark');
    const r = document.querySelector('#dbody .response');
    return { mark: m ? m.textContent : '', inText: !!(m && r && r.textContent.includes(m.textContent)), says: /The tool proposes: Demonstrating/.test(document.getElementById('dbody').textContent) };
  });
  check('the drawer highlights evidence that is really in the answer', drawer.mark.length > 0 && drawer.inText && drawer.says, JSON.stringify(drawer));
  await s.p.click('[data-agree]');
  await s.p.keyboard.press('Escape');
  await s.p.click('#tab-pulse');
  check('agreeing shows 100% agreement', (await s.p.$eval('#calib b', b => b.textContent)) === '100%');
  await s.p.click('#tab-live');
  await s.p.click('#heat button.cell.b-D >> nth=1');
  await s.p.click('#dbody [data-set$="|N"]');
  await s.p.keyboard.press('Escape');
  check('a changed level is marked on the grid', (await s.p.$$('#heat button.cell.over')).length === 1);
  await s.p.click('#tab-pulse');
  check('and agreement drops to 50%', (await s.p.$eval('#calib b', b => b.textContent)) === '50%');
  const counts = await s.p.$$eval('#targets .critrow .stack', st => st.map(x => [...x.querySelectorAll('i')].reduce((a, i) => a + Number(i.textContent || 0), 0)));
  const n = Number(await s.p.$eval('#h-n', b => b.textContent));
  check(`after-class bars have every student counted (${n} each)`, counts.length > 0 && counts.every(c => c === n), JSON.stringify(counts));

  section('Projector safe');
  await s.p.click('#tab-live');
  const names = await s.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent));
  await s.p.click('#names [data-v="anon"]');
  const grid = await s.p.$eval('#heat', t => t.textContent);
  check('Projector safe hides every name on the grid', names.length > 0 && names.every(nm => !grid.includes(nm)));
  await s.context.close();

  section('Readers');
  const r = await open(browser);
  await choose(r.p, '5.3');
  const noAi = await r.p.$$eval('#reader option', o => o.filter(x => x.value !== 'invented').every(x => x.disabled));
  check('an AI reader with no recorded readings for a topic cannot be chosen there', noAi);
  await choose(r.p, '2.3');
  const offered = await r.p.$$eval('#reader option:not([disabled])', o => o.map(x => x.value));
  check('Topic 2.3 offers the everyday reader, which has recorded readings', offered.includes('default'), offered.join(','));
  await r.p.selectOption('#reader', 'default');
  await r.p.waitForFunction(() => /Levels read by Claude, everyday/.test(document.getElementById('h-kind').textContent), null, { timeout: 8000 }).catch(() => {});
  await r.p.click('#toend');
  await r.p.click('#heat button.cell:not(.b-U) >> nth=0');
  const same = await r.p.evaluate(() => {
    const text = document.querySelector('#dbody .response').textContent;
    const row = window.BHClassPulseCalibration.rows.find(x => x.text === text);
    const ci = Number(document.getElementById('dsub').textContent.match(/criterion (\d+)/)[1]) - 1;
    const want = row && window.BHClassPulseReaders.RECORDED.default[row.id];
    const shown = document.querySelector('#dbody .verdict p.small').textContent;
    return { ok: !!(want && shown === want.criteria[ci].reason), every: /Every reader/.test(document.getElementById('dbody').textContent) && /Claude, everyday \(shown\)/.test(document.getElementById('dbody').textContent) };
  });
  check("choosing a reader shows that recorded reader's levels and reasons", same.ok, JSON.stringify(same));
  check('the drawer lists every reader that read this answer', same.every);
  check('switching readers raises no script error', r.errors.length === 0, r.errors.join(' | '));
  await r.context.close();

  section('A phone');
  for (const t of ['live', 'pulse', 'course', 'student']) {
    const m = await open(browser, 390);
    await m.p.click('#tab-' + t);
    await m.p.waitForTimeout(150);
    const w = await m.p.evaluate(() => document.documentElement.scrollWidth);
    check(`${t}: no sideways scrolling at 390 pixels`, w <= 390, w + 'px');
    await m.context.close();
  }
}

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ executablePath: fs.existsSync(EXE) ? EXE : undefined });
  console.log('\x1b[1mClass Pulse teacher page\x1b[0m');
  await suite(browser);

  section('Negative controls');
  const controls = [
    { name: 'the grid assumes three criteria', file: 'teacher/class-pulse-app.js', from: 'CPS.forEach(cp => contracts[cp].criteria.forEach(', to: 'CPS.forEach(cp => contracts[cp].criteria.slice(0, 3).forEach(', expect: /follow the topic's criteria/ },
    { name: 'the policy allows the network', file: 'teacher/class-pulse.html', from: "img-src 'self' data:; connect-src 'none'", to: "img-src 'self' data:; connect-src *", expect: /cannot reach the network|fetch from the page is refused/ },
    { name: 'projector mode keeps names', file: 'teacher/class-pulse-app.js', from: "S.names === 'anon' ?", to: 'false ?', expect: /hides every name/ },
    { name: 'the reader menu changes nothing', file: 'teacher/class-pulse-app.js', from: "S.reader === 'invented' ? demo.provider : recordedProvider(S.reader, demo)", to: 'demo.provider', expect: /recorded reader's levels/ },
    { name: 'bars drop students who did not submit', file: 'teacher/class-pulse-app.js', from: 'D.students.forEach(st => { cnt[endBand(st, c)]++; });', to: "D.students.forEach(st => { const b = endBand(st, c); if (b !== 'none') cnt[b]++; });", expect: /every student counted/ }
  ];
  let controlFailures = 0;
  for (const c of controls) {
    if (!fs.readFileSync(path.join(ROOT, c.file), 'utf8').includes(c.from)) { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" no longer matches ${c.file}`); controlFailures++; continue; }
    const before = failures;
    quiet = true; failed.length = 0; patches = [c];
    try { await suite(browser); } catch (e) { failed.push('crashed: ' + e.message); }
    patches = []; quiet = false;
    const caught = failed.filter(l => c.expect.test(l));
    failures = before;
    if (caught.length) console.log(`  \x1b[32m✓\x1b[0m "${c.name}" turns the checks red`);
    else { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" went unnoticed`); controlFailures++; }
  }
  failures += controlFailures;

  await browser.close();
  server.close();
  console.log(failures ? `\n\x1b[31m${failures} failed\x1b[0m` : '\n\x1b[32mAll Class Pulse page checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
