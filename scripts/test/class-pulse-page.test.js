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
 *   - it can reach only Google sign-in and the district's Firestore database, and in
 *     Demo it asks nothing of any host but its own and Google Fonts;
 *   - My class, against a stand-in for Google sign-in and an in-memory database:
 *     the teacher's own class list, only answers whose Submit receipt still
 *     matches, "not read yet" until a rating is saved, copying locked until the
 *     district approves, and once approved a pasted reply saved to the database
 *     with no student name in it and shown again on the next pull;
 *   - projector-safe mode leaves no student name on the grid;
 *   - after-class bars count every student, including anyone who did not submit;
 *   - the Reader menu offers an AI reader only where it has recorded readings, and
 *     choosing one shows that reader's own levels and reasons, with every reader's
 *     level for the open criterion side by side;
 *   - the drawer quotes evidence that is really in the answer, and a teacher's
 *     agree or change moves the agreement score;
 *   - read by copy and paste: each batch's text carries no student name, Copy puts
 *     exactly that text on the clipboard, a pasted reply becomes the "pasted" reader
 *     with its own reasons, an invented quote shows as Can't tell, and a reply
 *     pasted next to the wrong batch is refused;
 *   - the check before copying: an answer naming a teacher holds Copy back until
 *     the teacher decides, and a removed name never reaches the copied text;
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

const Sync = require(path.join(ROOT, 'assets', 'js', 'behistorical-sync.js'));
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const FIREBASE_HOSTS = ['https://firestore.googleapis.com', 'https://identitytoolkit.googleapis.com', 'https://securetoken.googleapis.com'];

// ── A stand-in for Google: the two sign-in modules and the Firestore REST API ──
// Served through Playwright routes on Google's own addresses, so the page's real
// policy, sign-in code and requests run unchanged.
const FAKE_APP = 'export function initializeApp() { return {}; }';
const FAKE_AUTH = `let user = null; const cbs = [];
export function getAuth() { return { get currentUser() { return user; }, authStateReady: () => Promise.resolve() }; }
export function onAuthStateChanged(a, cb) { cbs.push(cb); cb(user); }
export class GoogleAuthProvider { setCustomParameters() {} }
export async function signInWithPopup() { user = { uid: 'teach1', email: 'jeff@zcs.k12.in.us', getIdToken: async () => 'token' }; cbs.forEach(f => f(user)); return { user }; }
export async function signOut() { user = null; cbs.forEach(f => f(user)); }`;
const ANA = 'Akbar used the mansabdar system to give officials land revenue he could take back.';
function liveStore() {
  const P = 'projects/behistoric/databases/(default)/documents/tenants/zcs/';
  const docs = new Map(), commits = [], requests = [];
  const put = (name, fields) => docs.set(P + name, { name: P + name, fields, updateTime: new Date().toISOString() });
  const t = v => ({ stringValue: v });
  put('rosters/teach1', { classLabel: t('G4') });
  [['ana1', 'Ana Ruiz'], ['ben1', 'Ben Cole'], ['cal1', 'Cal Ito']].forEach(([u, l]) => put('rosters/teach1/students/' + u, { label: t(l) }));
  const ans = (u, slot, text, c) => put(`responses/${u}__3-2__${slot}`, { studentId: t(u), topicKey: t('3-2'), slotId: t(slot), text: t(text), confidence: c ? { integerValue: String(c) } : t('') });
  ans('ana1', 'checkpoint-one-response', ANA, 4);
  ans('ana1', 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:14 AM · fingerprint ' + Sync.valueHash(ANA, '4'));
  ans('ben1', 'checkpoint-one-response', 'The devshirme took boys, and I changed this after submitting.', 3);
  ans('ben1', 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:20 AM · fingerprint ' + Sync.valueHash('The devshirme took boys.', '3'));
  ans('cal1', 'checkpoint-one-response', 'Half an', '');
  return { P, docs, commits, requests, googleLoaded: false };
}
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization,content-type', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' };
async function fakeGoogle(context, store) {
  await context.route('https://www.gstatic.com/firebasejs/**', route => {
    store.googleLoaded = true;
    route.fulfill({ status: 200, headers: Object.assign({ 'Content-Type': 'text/javascript' }, CORS), body: /firebase-auth/.test(route.request().url()) ? FAKE_AUTH : FAKE_APP });
  });
  await context.route('https://firestore.googleapis.com/**', route => {
    const req = route.request(), url = new URL(req.url());
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: CORS });
    const p = decodeURIComponent(url.pathname.replace(/^\/v1\//, ''));
    store.requests.push(req.method() + ' ' + p.replace(store.P, ''));
    const json = (status, body) => route.fulfill({ status, headers: Object.assign({ 'Content-Type': 'application/json' }, CORS), body: JSON.stringify(body) });
    if (req.method() === 'GET') {
      if (/\/students$/.test(p)) return json(200, { documents: [...store.docs.values()].filter(d => d.name.startsWith(p + '/') && !d.name.slice(p.length + 1).includes('/')) });
      const d = store.docs.get(p);
      return d ? json(200, d) : json(404, { error: { status: 'NOT_FOUND' } });
    }
    const body = JSON.parse(req.postData() || '{}');
    if (p.endsWith(':runQuery')) {
      const parent = p.slice(0, -':runQuery'.length) + '/ratings/', want = body.structuredQuery.where.fieldFilter.value.stringValue;
      return json(200, [...store.docs.values()].filter(d => d.name.startsWith(parent) && d.fields.topicKey.stringValue === want).map(document => ({ document })));
    }
    if (p.endsWith(':commit')) {
      store.commits.push(body);
      body.writes.forEach(w => store.docs.set(w.update.name, { name: w.update.name, fields: Object.assign({}, w.update.fields, { ratedAt: { timestampValue: new Date().toISOString() } }) }));
      return json(200, { writeResults: body.writes.map(() => ({ updateTime: new Date().toISOString() })) });
    }
    return json(400, { error: { status: 'INVALID_ARGUMENT' } });
  });
}
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

async function open(browser, width, setup) {
  const context = await browser.newContext({ viewport: { width: width || 1280, height: 900 } });
  if (setup) await setup(context);
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

  section('Network');
  const csp = await s.p.$eval('meta[http-equiv="Content-Security-Policy"]', m => m.content);
  const connect = ((/connect-src ([^;]+)/.exec(csp) || [])[1] || '').trim().split(/\s+/).sort();
  check('the page can reach only Google sign-in and the district database', JSON.stringify(connect) === JSON.stringify(FIREBASE_HOSTS.slice().sort()), connect.join(' '));
  const strays = [...s.hosts].filter(h => !['127.0.0.1', 'fonts.googleapis.com', 'fonts.gstatic.com'].includes(h));
  check('in Demo it asks nothing of any host but its own and Google Fonts', strays.length === 0, strays.join(', '));
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

  section('Read by copy and paste');
  const c = await open(browser);
  await c.context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await choose(c.p, '5.3');
  await c.p.click('#tab-pulse');
  check('a topic with no writing offers nothing to copy', (await c.p.$$('#paste-batches [data-copy]')).length === 0);
  await choose(c.p, '3.2');
  const roster = await c.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent));
  const texts = await c.p.$$eval('#paste-batches textarea[data-text]', ts => ts.map(t => t.value));
  check('each checkpoint is offered in batches to copy', texts.length >= 2, texts.length + ' batches');
  check('no student name is in the text to copy', roster.length > 0 && texts.every(t => roster.every(nm => !t.includes(nm))));
  await c.p.click('#paste-batches [data-copy] >> nth=0');
  await c.p.waitForTimeout(100);
  const clip = await c.p.evaluate(() => navigator.clipboard.readText()).catch(() => '');
  check('Copy batch puts exactly that text on the clipboard', clip === texts[0], clip.length + ' vs ' + texts[0].length);
  // A reply as the chat would send it: every answer Demonstrating with a real quote,
  // except the first, whose quote is invented.
  const made = (() => {
    const id = JSON.parse(texts[0].slice(texts[0].lastIndexOf('{"batch"'))).batch;
    const answers = [...texts[0].matchAll(/<<<(A\d+)-(\w+)\n([\s\S]*?)\n\1-\2>>>/g)].map(m => ({ key: m[1], text: m[3] }));
    const n = (texts[0].match(/"id":"criterion-\d+"/g) || []).length;
    return { answers, json: '```json\n' + JSON.stringify({ batch: id, answers: answers.map((a, i) => ({ key: a.key, criteria: Array.from({ length: n }, (_, j) => ({ criterionId: 'criterion-' + (j + 1), category: 'D', evidence: [i === 0 ? 'words nobody wrote' : a.text.slice(0, 18)], reason: 'PASTED-REASON', misconceptions: [], uncertainty: [], reviewRequired: false })) })) }) + '\n```' };
  })();
  await c.p.click('#paste-batches details >> nth=0');
  await c.p.fill('#paste-batches textarea[data-paste] >> nth=0', made.json);
  await c.p.click('#paste-batches [data-read] >> nth=0');
  await c.p.waitForFunction(() => /Levels read by pasted replies \(Claude for Teachers\)/.test(document.getElementById('h-kind').textContent), null, { timeout: 8000 }).catch(() => {});
  check('a pasted reply becomes the pasted reader', (await c.p.$eval('#reader', s => s.value)) === 'pasted');
  const state = await c.p.$eval('#paste-batches .batch >> nth=0', b => b.textContent);
  check('the batch says how many answers passed the checks', new RegExp((made.answers.length - 1) + ' of ' + made.answers.length + ' read, 1 show').test(state), state.slice(0, 160));
  await c.p.click('#tab-live');
  await c.p.click('#toend');
  await c.p.click('#heat button.cell.b-D >> nth=0');
  const pastedDrawer = await c.p.evaluate(() => ({ reason: document.querySelector('#dbody .verdict p.small').textContent, text: document.querySelector('#dbody .response').textContent }));
  check("the drawer shows the pasted reader's reasons", pastedDrawer.reason === 'PASTED-REASON', JSON.stringify(pastedDrawer).slice(0, 200));
  check('and which service read it', /Read by Claude for Teachers/.test(await c.p.$eval('#dbody', e => e.textContent)));
  const badText = made.answers[0].text;
  await c.p.keyboard.press('Escape');
  const invented = await c.p.evaluate(async t => {
    for (const b of document.querySelectorAll('#heat button.cell')) {
      b.click();
      const r = document.querySelector('#dbody .response');
      const hit = r && r.textContent === t;
      const prop = (document.querySelector('#dbody .verdict b') || {}).textContent || '';
      document.getElementById('dclose').click();
      if (hit) return prop;
    }
    return 'not found';
  }, badText);
  check('the answer with an invented quote shows as Can\'t tell', /Can't tell/.test(invented), invented);
  await c.p.click('#tab-pulse');
  if (texts.length > 1) {
    await c.p.click('#paste-batches details >> nth=1');
    await c.p.fill('#paste-batches textarea[data-paste] >> nth=1', made.json);
    await c.p.click('#paste-batches [data-read] >> nth=1');
    const said = await c.p.$eval('#paste-batches [data-said] >> nth=1', x => x.textContent);
    check('a reply pasted next to the wrong batch is refused', /different batch/.test(said), said);
  }
  check('copying and pasting raises no script error', c.errors.length === 0, c.errors.join(' | '));
  await c.context.close();

  section('The check before copying');
  // Plant a teacher's name in the invented Topic 3.2 writing, quotes included.
  const kept = patches;
  patches = kept.concat([{ file: 'teacher/data/class-pulse-demo.js', from: /The Mughal Empire used the mansabdar system/g, to: 'Mr. Anderson said the Mughal Empire used the mansabdar system' }]);
  const k = await open(browser);
  patches = kept;
  await choose(k.p, '3.2');
  await k.p.click('#tab-pulse');
  const card = '#paste-batches .batch:has(.precheck) >> nth=0';
  const flaggedCard = await k.p.$(card);
  check('an answer naming a teacher is flagged before copying', !!flaggedCard && /Mr\. Anderson/.test(await flaggedCard.textContent()));
  if (flaggedCard) {
    const id = await flaggedCard.getAttribute('data-card');
    check('Copy waits until every flag is decided', await k.p.$eval(`[data-copy="${id}"]`, b => b.disabled));
    for (let i = 0; i < 40; i++) {
      const next = await k.p.$(`[data-card="${id}"] [data-flag$="|remove"][aria-pressed="false"]`);
      if (!next) break;
      await next.click();
    }
    check('once decided, Copy is offered', !(await k.p.$eval(`[data-copy="${id}"]`, b => b.disabled)));
    const copied = await k.p.$eval(`[data-text="${id}"]`, t => t.value);
    check('a removed name never reaches the copied text', copied.length > 0 && !/Anderson/.test(copied) && /the Mughal Empire used the mansabdar system/.test(copied));
  }
  check('the check raises no script error', k.errors.length === 0, k.errors.join(' | '));
  await k.context.close();

  section('My class, from the database');
  const store = liveStore();
  const L = await open(browser, 1280, ctx => fakeGoogle(ctx, store));
  await L.p.waitForTimeout(300);
  check('nothing is asked of Google until My class is chosen', !store.googleLoaded && store.requests.length === 0);
  await L.p.click('#source [data-v="live"]');
  await L.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
  await L.p.click('#live-signin');
  await L.p.waitForFunction(() => /G4 \(3 students\)/.test(document.getElementById('section').textContent), null, { timeout: 8000 }).catch(() => {});
  await L.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
  const liveNames = await L.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent));
  check('signing in shows the teacher\'s own class list', JSON.stringify(liveNames) === JSON.stringify(['Ana Ruiz', 'Ben Cole', 'Cal Ito']), liveNames.join(','));
  const cells = await L.p.$$eval('#heat tbody tr', trs => trs.map(tr => [...tr.querySelectorAll('td .cell')].slice(0, 3).map(c => c.className.replace('cell ', '')).join(' ')));
  check('a submitted answer with no saved rating shows as not read yet', /^b-wait b-wait b-wait$/.test(cells[0] || ''), cells.join(' | '));
  check('an answer changed after Submit shows as not submitted', /^b-none b-none b-none$/.test(cells[1] || ''), cells[1]);
  check('a draft never submitted shows as not submitted', /^b-none b-none b-none$/.test(cells[2] || ''), cells[2]);
  check('the database is read one document at a time, never queried for student work',
    store.requests.length > 0 && !store.requests.some(r => /responses:runQuery|POST .*responses/.test(r)), store.requests.slice(0, 4).join(' ; '));
  check('Across the course and One student are off in My class', await L.p.$eval('#tab-course', b => b.disabled) && await L.p.$eval('#tab-student', b => b.disabled));
  await L.p.click('#tab-pulse');
  check('copying real answers stays locked until the district approves', /Locked/.test(await L.p.$eval('#paste-batches', e => e.textContent)) && (await L.p.$$('#paste-batches [data-copy]')).length === 0);
  check('My class raises no script error', L.errors.length === 0, L.errors.join(' | '));
  await L.context.close();

  // The same class once the approval is recorded in the code.
  const store2 = liveStore();
  const kept2 = patches;
  patches = kept2.concat([{ file: 'teacher/class-pulse-handoff.js', from: "const APPROVAL = { realWork: false, reference: '', services: [] };", to: "const APPROVAL = { realWork: true, reference: 'Test approval, not real', services: ['claude-for-teachers', 'chatgpt-for-teachers'] };" }]);
  const A = await open(browser, 1280, ctx => fakeGoogle(ctx, store2));
  patches = kept2;
  await A.p.click('#source [data-v="live"]');
  await A.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
  await A.p.click('#live-signin');
  await A.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
  await A.p.click('#tab-pulse');
  const text = await A.p.$eval('#paste-batches textarea[data-text]', t => t.value).catch(() => '');
  check('once approved, only submitted answers are offered to copy', text.includes(ANA) && !text.includes('I changed this after submitting') && !text.includes('Half an') && !/Ana Ruiz|Ruiz|Ben Cole|Cal Ito/.test(text));
  if (text) {
    const id = JSON.parse(text.slice(text.lastIndexOf('{"batch"'))).batch;
    const n = (text.match(/"id":"criterion-\d+"/g) || []).length;
    const reply = JSON.stringify({ batch: id, answers: [{ key: 'A01', criteria: Array.from({ length: n }, (_, j) => ({ criterionId: 'criterion-' + (j + 1), category: 'D', evidence: [ANA.slice(0, 20)], reason: 'SAVED-REASON', misconceptions: [], uncertainty: [], reviewRequired: false })) }] });
    await A.p.selectOption('#paste-service', 'chatgpt-for-teachers');
    await A.p.click('#paste-batches details >> nth=0');
    await A.p.fill('#paste-batches textarea[data-paste] >> nth=0', reply);
    await A.p.click('#paste-batches [data-read] >> nth=0');
    await A.p.waitForFunction(() => /every submitted answer is read|0 submitted answers/i.test(document.getElementById('h-kind').textContent) || document.querySelectorAll('#heat .cell.b-D').length > 0, null, { timeout: 8000 }).catch(() => {});
  }
  const saved = JSON.stringify(store2.commits);
  check('a pasted reply is saved to the database for that student', store2.commits.length === 1 && /ana1__3-2__checkpoint-one-response/.test(saved) && /"codes":\{"stringValue":"D+"\}/.test(saved), saved.slice(0, 160));
  check('with no student name in what is saved', !/Ana|Ruiz/.test(saved.replace(/ana1/g, '')));
  check('and the service it was pasted into', /"reader":\{"stringValue":"chatgpt-for-teachers-pasted"\}/.test(saved));
  await A.p.click('#tab-live');
  await A.p.click('#live-refresh');
  await A.p.waitForTimeout(400);
  const after = await A.p.$$eval('#heat tbody tr', trs => [...trs[0].querySelectorAll('td .cell')].slice(0, 3).map(c => c.className.replace('cell ', '')).join(' '));
  check('the next pull shows the saved levels', /^b-D b-D b-D$/.test(after), after);
  await A.p.click('#heat button.cell.b-D >> nth=0');
  const savedDrawer = await A.p.$eval('#dbody', e => e.textContent);
  check('with the saved reasons, and which service read it', /SAVED-REASON/.test(savedDrawer) && /Read by ChatGPT for Teachers/.test(savedDrawer));
  check('saving and pulling raise no script error', A.errors.length === 0, A.errors.join(' | '));
  await A.context.close();

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
    { name: 'the policy allows the network', file: 'teacher/class-pulse.html', from: "connect-src https://firestore.googleapis.com", to: "connect-src * https://firestore.googleapis.com", expect: /only Google sign-in and the district database|fetch from the page is refused/ },
    { name: 'saved ratings are ignored', file: 'teacher/class-pulse-app.js', from: "if (g && r.completionState === 'verified-submission' && g.fingerprint === r.fingerprint) {", to: "if (false) {", expect: /next pull shows the saved levels/ },
    { name: 'an answer changed after Submit is counted', file: 'teacher/class-pulse-live.js', from: "print && print === fingerprint ? 'verified-submission'", to: "print ? 'verified-submission'", expect: /changed after Submit/ },
    { name: 'copying real answers is open without approval', file: 'teacher/class-pulse-handoff.js', from: "if (rows.every(r => r.completionState === 'synthetic-complete'))", to: "if (true)", expect: /stays locked/ },
    { name: 'projector mode keeps names', file: 'teacher/class-pulse-app.js', from: "S.names === 'anon' ?", to: 'false ?', expect: /hides every name/ },
    { name: 'the reader menu changes nothing', file: 'teacher/class-pulse-app.js', from: "provider = S.reader === 'invented' ? src.provider\n        :", to: 'provider = true ? src.provider\n        :', expect: /recorded reader's levels/ },
    { name: 'pasted replies are ignored', file: 'teacher/class-pulse-app.js', from: ": H && S.reader === H.READER.id ? H.provider([...pastedHere().values()]) : recordedProvider(S.reader, src)", to: ": H && S.reader === H.READER.id ? src.provider : recordedProvider(S.reader, src)", expect: /pasted reader's reasons/ },
    { name: 'the service is not recorded', file: 'teacher/class-pulse-app.js', from: "reader: S.service + '-pasted' });", to: "});", expect: /service it was pasted into/ },
    { name: 'Copy ignores the check', file: 'teacher/class-pulse-app.js', from: "<button class=\"btn primary\" type=\"button\" data-copy=\"${b.id}\"${left ? ' disabled' : ''}>", to: "<button class=\"btn primary\" type=\"button\" data-copy=\"${b.id}\">", expect: /Copy waits/ },
    { name: 'removed words are copied anyway', file: 'teacher/class-pulse-app.js', from: "${esc(H.promptFor(D.contracts[cp], asCopied(b)))}", to: "${esc(H.promptFor(D.contracts[cp], b))}", expect: /never reaches the copied text/ },
    { name: 'the copy button copies something else', file: 'teacher/class-pulse-app.js', from: 'await navigator.clipboard.writeText(text);', to: "await navigator.clipboard.writeText(text + ' ');", expect: /exactly that text/ },
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
